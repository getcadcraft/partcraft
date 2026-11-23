/* SPDX-License-Identifier: Apache-2.0 */
/**
 * swmacro.js — a PartCraft part → a plain-text VBA macro (.swb) that SolidWorks runs (Tools › Macro › Run) to
 * build the part NATIVELY: a new part from the default part template, millimetres, global variables, every
 * feature rebuilt in order with its own sketch, relations and dimensions (renamed to PartCraft's names), then
 * the equations, suppressed states and the rollback bar. DOM-free, OpenCascade-free (the caller hands in exact
 * regens), Node-tested by bin/test-partcraft-sw.mjs.
 *
 *   partToSwb(part, { regen?, regenAt?, name?, stepFile?, date? }) → { text, notes, stats }
 *     regen     an exact (brep.js) regen of the whole part: sketch frames on faces, face/edge pick points, the final
 *               volume the macro compares at the end. Without it the macro still covers every sketch on a base or
 *               fixed plane and the features built from them; face/edge picks are listed in notes.
 *     regenAt   (i) → an exact regen of the first i features (brep-xcaf.js passes one that calls regenerateBrep with
 *               upTo). Gives picks as the feature saw the part, and a body check after every step: the macro compares
 *               SolidWorks' volume and box with PartCraft's and flips a feature's direction once when they disagree.
 *     text      the macro: Windows-1252 characters only, CRLF line ends (encode with toCp1252), one Sub per feature
 *               (long sketches split again) so no procedure nears VBA's 64 KB limit, lines ≤ 1023 characters.
 *     notes     plain sentences: what is not carried over, approximated, or left to check. Also written into the macro.
 *
 * NOT TESTED IN SOLIDWORKS. SolidWorks is Windows-only and licensed; nothing written here has been run in it.
 * bin/test-partcraft-sw.mjs checks the macro's structure, every API call against the table below, units and
 * equations — not what SolidWorks does with it.
 *
 * SolidWorks API methods the macro relies on (SolidWorks API Help; interface :: member — arguments; notes).
 * Units in the API are METRES and RADIANS whatever the document shows. Kept in step with SW_API below and mirrored
 * in bin/test-partcraft-sw.mjs (the test fails when the two differ).
 *   Application :: SldWorks (property) — the running SolidWorks (VBA host object of a .swb/.swp macro)
 *   SldWorks :: GetMathUtility 0 · GetUserPreferenceStringValue 1 (swDefaultTemplatePart 8) · NewDocument 4 (template,
 *     paper size, width, height) · GetUserPreferenceToggle 1 · SetUserPreferenceToggle 2 (swInputDimValOnCreate 10: no
 *     "Modify" box per dimension) · GetCurrentMacroPathName 0 (where the log goes)
 *   ModelDoc2 :: Extension, SketchManager, FeatureManager, SelectionManager (properties) · GetEquationMgr 0 ·
 *     ClearSelection2 1 · SketchAddConstraints 1 ("sgCOINCIDENT", "sgHORIZONTAL2D", …) · AddDimension2 3 ·
 *     AddHorizontalDimension2 3 · AddVerticalDimension2 3 (text position, model coordinates) · FeatureByPositionReverse 1 ·
 *     FirstFeature 0 · ForceRebuild3 1 · EditRollback 0 (rollback bar above the selected feature) · ViewZoomtofit2 0 ·
 *     InsertAxis2 1 (axis where the two selected planes meet)
 *   PartDoc :: GetPartBox 1 (exact box, metres) · GetBodies2 2 (swSolidBody 0) — called on the same document object
 *   ModelDocExtension :: SetUserPreferenceInteger 3 (swUnitSystem 534 = swUnitSystem_MMGS 4; swUnitsLinear 189 = swMM 0) ·
 *     SelectByID2 9 (name, type "FACE"/"EDGE"/"EXTSKETCHPOINT", x, y, z model metres, append, mark, callout, option) ·
 *     CreateMassProperty 0
 *   MassProperty :: Volume (property, m³)
 *   SketchManager :: InsertSketch 1 (opens a sketch on the selected plane/face; again = closes it) · Insert3DSketch 1 ·
 *     ActiveSketch, AddToDB, DisplayWhenAdded (properties; AddToDB = no snapping or automatic relations) ·
 *     CreateLine 6 · CreateCircleByRadius 4 · CreateArc 10 (centre, start, end, direction +1 counter-clockwise / −1
 *     clockwise) · CreatePoint 3 · CreateSpline2 2 — 2D sketch entities in SKETCH coordinates, 3D sketch points in model
 *   Sketch :: ModelToSketchTransform (property, MathTransform) — model → sketch for any plane or face
 *   MathUtility :: CreatePoint 1 · CreateVector 1 (Variant holding 3 doubles)
 *   MathPoint / MathVector :: MultiplyTransform 1 · ArrayData (property)
 *   SketchSegment :: ConstructionGeometry (property) · Select4 2 (append, SelectData)
 *   SketchLine / SketchArc :: GetStartPoint2 0 · GetEndPoint2 0 · GetCenterPoint2 0 (arcs) — assumed reachable on the
 *     late-bound segment object (the macro declares everything As Object)
 *   SketchPoint :: Select4 2 · X, Y (properties)
 *   SelectionMgr :: CreateSelectData 0 · SelectData :: Mark (property)
 *   Feature :: Name (property) · Select2 2 (append, mark) · GetTypeName2 0 ("RefPlane") · GetNextFeature 0 ·
 *     SetSuppression2 3 (swSuppressFeature 0, swThisConfiguration 1, Nothing) · GetFirstDisplayDimension 0 ·
 *     GetNextDisplayDimension 1 · GetDefinition 0 · ModifyDefinition 3
 *   ExtrudeFeatureData2 / RevolveFeatureData2 / CircularPatternFeatureData :: ReverseDirection (property) ·
 *     LinearPatternFeatureData :: D1ReverseDirection (property) · AccessSelections 2 · ReleaseSelectionAccess 0
 *   DisplayDimension :: GetDimension2 1 · Dimension :: SystemValue, Name (properties)
 *   Body2 :: Select2 2 (append, SelectData)
 *   EquationMgr :: Add2 3 (index −1 = append, text, solve) · EvaluateAll 0 — global variables "w" = 100 and
 *     "D1@Sketch1" = "w" / 2; trig in degrees (the Equations dialog's default angular unit)
 *   FeatureManager :: FeatureExtrusion2 23 · FeatureCut3 26 (end conditions swEndCondBlind 0, ThroughAll 1, ThroughNext 2,
 *     MidPlane 6; boss along the sketch normal, cut against it unless reversed — assumed, checked by the body test) ·
 *     FeatureRevolve2 20 (axis selected with mark 16) · FeatureLinearPattern2 9 · FeatureCircularPattern2 5 (direction /
 *     axis mark 1, seed features mark 4; circular "Spacing" = the total angle with equal spacing — assumed, checked) ·
 *     InsertMirrorFeature 4 (plane mark 2, features mark 1, bodies mark 256) · FeatureFillet 7 (options 195, edges
 *     mark 1) · InsertFeatureChamfer 8 (swChamferAngleDistance 1, swChamferDistanceDistance 2) · InsertFeatureShell 2 ·
 *     InsertRefPlane 6 (three points, swRefPlaneReferenceConstraint_Coincident 4, marks 0 1 2)
 * Where the Help left an argument unclear the simpler, older, well-documented method is used (FeatureExtrusion2 over
 * FeatureExtrusion3, FeatureFillet over FeatureFillet3, InsertMirrorFeature over InsertMirrorFeature2) and the body
 * check after each step catches a wrong direction.
 */
import { BASE_PLANES, frameFor, toWorld, norm, cross, dot, sub, add, mul, len } from './vec.js';
import { byId, pointXY, loosePoints, ORIGIN, arcAngles, tessSpline } from './sketch.js';
import { solveSketch } from './solver.js';
import { parse, formatNumber } from './expr.js';
import { evaluateVars } from './params.js';
import { dependsOn } from './part.js';
import { ISO_COARSE } from './design-features.js';
import { t } from './i18n.js';
import { add2, dot2, mid2 as mid, sub2 } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const FORMAT_NOTE = 'Not yet tested in SolidWorks: PartCraft has never run this macro in SolidWorks.';

/** Every SolidWorks API member the macro calls: interface → member → argument count (null = a property). */
export const SW_API = {
  Application: { SldWorks: null },
  SldWorks: { GetMathUtility: 0, GetUserPreferenceStringValue: 1, NewDocument: 4, GetUserPreferenceToggle: 1, SetUserPreferenceToggle: 2, GetCurrentMacroPathName: 0 },
  ModelDoc2: {
    Extension: null, SketchManager: null, FeatureManager: null, SelectionManager: null, GetEquationMgr: 0, ClearSelection2: 1,
    SketchAddConstraints: 1, AddDimension2: 3, AddHorizontalDimension2: 3, AddVerticalDimension2: 3, FeatureByPositionReverse: 1,
    FirstFeature: 0, ForceRebuild3: 1, EditRollback: 0, ViewZoomtofit2: 0, InsertAxis2: 1,
  },
  PartDoc: { GetPartBox: 1, GetBodies2: 2 },
  ModelDocExtension: { SetUserPreferenceInteger: 3, SelectByID2: 9, CreateMassProperty: 0 },
  MassProperty: { Volume: null },
  SketchManager: { InsertSketch: 1, Insert3DSketch: 1, ActiveSketch: null, AddToDB: null, DisplayWhenAdded: null, CreateLine: 6, CreateCircleByRadius: 4, CreateArc: 10, CreatePoint: 3, CreateSpline2: 2 },
  Sketch: { ModelToSketchTransform: null },
  MathUtility: { CreatePoint: 1, CreateVector: 1 },
  MathPoint: { MultiplyTransform: 1, ArrayData: null },
  MathVector: { MultiplyTransform: 1, ArrayData: null },
  SketchSegment: { ConstructionGeometry: null, Select4: 2, GetStartPoint2: 0, GetEndPoint2: 0, GetCenterPoint2: 0 },
  SketchPoint: { Select4: 2, X: null, Y: null },
  SelectionMgr: { CreateSelectData: 0 },
  SelectData: { Mark: null },
  Feature: { Name: null, Select2: 2, GetTypeName2: 0, GetNextFeature: 0, SetSuppression2: 3, GetFirstDisplayDimension: 0, GetNextDisplayDimension: 1, GetDefinition: 0, ModifyDefinition: 3 },
  FeatureData: { ReverseDirection: null, D1ReverseDirection: null, AccessSelections: 2, ReleaseSelectionAccess: 0 },
  DisplayDimension: { GetDimension2: 1 },
  Dimension: { SystemValue: null, Name: null },
  Body2: { Select2: 2 },
  EquationMgr: { Add2: 3, EvaluateAll: 0 },
  FeatureManager: {
    FeatureExtrusion2: 23, FeatureCut3: 26, FeatureRevolve2: 20, FeatureLinearPattern2: 9, FeatureCircularPattern2: 5,
    InsertMirrorFeature: 4, FeatureFillet: 7, InsertFeatureChamfer: 8, InsertFeatureShell: 2, InsertRefPlane: 6,
  },
};

/** The variable names the macro uses for each interface (the test resolves `name.Member` through this). */
export const SW_RECEIVERS = {
  Application: ['Application'], swApp: ['SldWorks'], swModel: ['ModelDoc2', 'PartDoc'], swExt: ['ModelDocExtension'],
  swSkMgr: ['SketchManager'], swFeatMgr: ['FeatureManager'], swSelMgr: ['SelectionMgr'], swMath: ['MathUtility'],
  swEqMgr: ['EquationMgr'], swSketch: ['Sketch'], mVec: ['MathVector'], mPt: ['MathPoint'], seg: ['SketchSegment'],
  sPt: ['SketchPoint'], ePt: ['SketchPoint'], sData: ['SelectData'], feat: ['Feature'], ftr: ['Feature'], dDim: ['DisplayDimension'], dm: ['Dimension'],
  mProp: ['MassProperty'], body: ['Body2'], fData: ['FeatureData'], o: ['SketchSegment', 'SketchPoint', 'Feature'],
};

/** swconst values written as Const lines (name → [value, enum]). */
export const SW_CONST = {
  swDefaultTemplatePart: [8, 'swUserPreferenceStringValue_e'],
  swUnitSystem: [534, 'swUserPreferenceIntegerValue_e'],
  swUnitSystem_MMGS: [4, 'swUnitSystem_e'],
  swUnitsLinear: [189, 'swUserPreferenceIntegerValue_e'],
  swMM: [0, 'swLengthUnit_e'],
  swDetailingNoOptionSpecified: [0, 'swUserPreferenceOption_e'],
  swInputDimValOnCreate: [10, 'swUserPreferenceToggle_e'],
  swEndCondBlind: [0, 'swEndConditions_e'],
  swEndCondThroughAll: [1, 'swEndConditions_e'],
  swEndCondThroughNext: [2, 'swEndConditions_e'],
  swEndCondMidPlane: [6, 'swEndConditions_e'],
  swSuppressFeature: [0, 'swFeatureSuppressionAction_e'],
  swThisConfiguration: [1, 'swInConfigurationOpts_e'],
  swRefPlaneReferenceConstraint_Coincident: [4, 'swRefPlaneReferenceConstraints_e'],
  swSolidBody: [0, 'swBodyType_e'],
  swChamferAngleDistance: [1, 'swChamferType_e'],
  swChamferDistanceDistance: [2, 'swChamferType_e'],
};

// ---------------------------------------------------------------- text helpers

const MAX_LINE = 1023, CHUNK = 30000;
const CP1252_HIGH = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ';
/** Is this character in Windows-1252? */
export const in1252 = (ch) => { const c = ch.codePointAt(0); return c === 9 || c === 10 || c === 13 || (c >= 32 && c < 127) || (c >= 0xa0 && c <= 0xff) || CP1252_HIGH.includes(ch); };
/** Text with every character outside Windows-1252 turned into "?" (and control characters dropped). */
export function cp1252(s) { let out = ''; for (const ch of String(s ?? '')) { if (ch === '\r' || ch === '\n' || ch === '\t') { out += ' '; continue; } out += in1252(ch) ? ch : '?'; } return out; }
/** Bytes of Windows-1252 text (characters outside it become "?"). */
export function toCp1252(text) {
  const out = new Uint8Array(text.length * 2);
  let n = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0);
    if (c < 0x80 || (c >= 0xa0 && c <= 0xff)) out[n++] = c;
    else { const k = CP1252_HIGH.indexOf(ch); out[n++] = k >= 0 ? [0x80, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8e, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9e, 0x9f][k] : 0x3f; }
  }
  return out.slice(0, n);
}
/** A VBA string literal (quotes doubled; never longer than one line can hold). */
const q = (s) => '"' + cp1252(s).replace(/"/g, '""') + '"';
/** A VBA number: up to 15 significant digits, exponent as E. */
function n(v) {
  if (!Number.isFinite(v)) throw new Error(t('xch.swm.not_finite'));
  if (Math.abs(v) < 1e-14) return '0';
  return String(Number(v.toPrecision(15))).replace('e', 'E').replace('E+', 'E');
}
const m = (mm) => n(Math.round(mm * 1e6) / 1e9);    // mm → metres (kernel and solver noise under 1e-6 mm dropped)
const xyz = (p) => `${m(p[0])}, ${m(p[1])}, ${m(p[2])}`;
const rad = (deg) => n(deg * Math.PI / 180);
const u = (v) => n(Math.round(v * 1e12) / 1e12);   // a unit-vector component
/** A name SolidWorks accepts for a feature or dimension (no @ " / \ : * ? < > |), Windows-1252. */
export const swName = (s) => cp1252(String(s || '')).replace(/[@"\\/:*?<>|]/g, '_').trim().slice(0, 60) || 'Feature';

// ---------------------------------------------------------------- the VBA library (fixed part of every macro)

function library(c) {
  return [
    'Option Explicit',   // i18n-ignore: VBA macro text
    '',
    "' swconst values (the SolidWorks type library is not referenced by a .swb macro)",   // i18n-ignore: VBA macro text
    ...Object.entries(SW_CONST).map(([k, [v, e]]) => `Const ${k} As Long = ${v}   ' ${e}`),
    "' selection marks the feature methods read",   // i18n-ignore: VBA macro text
    'Const MarkPatternDir As Long = 1',
    'Const MarkPatternSeed As Long = 4',
    'Const MarkMirrorPlane As Long = 2',
    'Const MarkMirrorFeature As Long = 1',
    'Const MarkMirrorBody As Long = 256',
    'Const MarkRevolveAxis As Long = 16',
    'Const MarkEdge As Long = 1',
    'Const FilletOptions As Long = 195',
    '',
    'Dim swApp As Object',   // i18n-ignore: VBA macro text
    'Dim swModel As Object',   // i18n-ignore: VBA macro text
    'Dim swExt As Object',   // i18n-ignore: VBA macro text
    'Dim swSkMgr As Object',   // i18n-ignore: VBA macro text
    'Dim swFeatMgr As Object',   // i18n-ignore: VBA macro text
    'Dim swSelMgr As Object',   // i18n-ignore: VBA macro text
    'Dim swMath As Object',   // i18n-ignore: VBA macro text
    'Dim gXf As Object',   // i18n-ignore: VBA macro text
    'Dim gSign As Double',   // i18n-ignore: VBA macro text
    'Dim gAxes As Integer',   // i18n-ignore: VBA macro text
    'Dim gU As Double',   // i18n-ignore: VBA macro text
    'Dim gV As Double',   // i18n-ignore: VBA macro text
    'Dim gKeys() As String',   // i18n-ignore: VBA macro text
    'Dim gObjs() As Object',   // i18n-ignore: VBA macro text
    'Dim gN As Long',   // i18n-ignore: VBA macro text
    'Dim gNumK() As String',   // i18n-ignore: VBA macro text
    'Dim gNumV() As Double',   // i18n-ignore: VBA macro text
    'Dim gNN As Long',   // i18n-ignore: VBA macro text
    'Dim gArr() As Double',   // i18n-ignore: VBA macro text
    'Dim gLog As String',   // i18n-ignore: VBA macro text
    'Dim gOk As Long',   // i18n-ignore: VBA macro text
    'Dim gBad As Long',   // i18n-ignore: VBA macro text
    'Dim gCheck As Long',   // i18n-ignore: VBA macro text
    'Dim gCurrent As String',   // i18n-ignore: VBA macro text
    'Dim gDimToggle As Boolean',   // i18n-ignore: VBA macro text
    '',
    "' ---- keeping SolidWorks objects by PartCraft key (\"f3\" a feature, \"f1:l2\" a sketch curve, \"f1:p4\" a point)",   // i18n-ignore: VBA macro text
    'Sub Keep(ByVal k As String, o As Object)',   // i18n-ignore: VBA macro text
    '    Dim i As Long',   // i18n-ignore: VBA macro text
    '    For i = gN To 1 Step -1',
    '        If gKeys(i) = k Then',
    '            Set gObjs(i) = o',
    '            Exit Sub',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '    Next i',
    '    gN = gN + 1',
    '    If gN > UBound(gKeys) Then',
    '        ReDim Preserve gKeys(1 To 2 * gN)',
    '        ReDim Preserve gObjs(1 To 2 * gN)',
    '    End If',   // i18n-ignore: VBA macro text
    '    gKeys(gN) = k',
    '    Set gObjs(gN) = o',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Function Got(ByVal k As String) As Object',   // i18n-ignore: VBA macro text
    '    Dim i As Long',   // i18n-ignore: VBA macro text
    '    Set Got = Nothing',
    '    For i = gN To 1 Step -1',
    '        If gKeys(i) = k Then',
    '            Set Got = gObjs(i)',
    '            Exit Function',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '    Next i',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Sub SetNum(ByVal k As String, ByVal v As Double)',   // i18n-ignore: VBA macro text
    '    gNN = gNN + 1',
    '    If gNN > UBound(gNumK) Then',
    '        ReDim Preserve gNumK(1 To 2 * gNN)',
    '        ReDim Preserve gNumV(1 To 2 * gNN)',
    '    End If',   // i18n-ignore: VBA macro text
    '    gNumK(gNN) = k',
    '    gNumV(gNN) = v',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Function GetNum(ByVal k As String) As Double',   // i18n-ignore: VBA macro text
    '    Dim i As Long',   // i18n-ignore: VBA macro text
    '    GetNum = 1',
    '    For i = gNN To 1 Step -1',
    '        If gNumK(i) = k Then',
    '            GetNum = gNumV(i)',
    '            Exit Function',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '    Next i',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' ---- the log (written next to this macro at the end)",   // i18n-ignore: VBA macro text
    'Sub Note(ByVal s As String)',   // i18n-ignore: VBA macro text
    '    gLog = gLog & s & vbCrLf',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub Bad(ByVal what As String, ByVal why As String)',   // i18n-ignore: VBA macro text
    '    gBad = gBad + 1',
    '    Call Note("Failed  " & what & ": " & why)',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub Good(ByVal what As String)',   // i18n-ignore: VBA macro text
    '    gOk = gOk + 1',
    '    Call Note("Done    " & what)',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' ---- selecting",
    'Function SelObj(o As Object, ByVal append As Boolean, ByVal mark As Long) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim sData As Object',   // i18n-ignore: VBA macro text
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    Set sData = swSelMgr.CreateSelectData',
    '    sData.Mark = mark',
    '    SelObj = o.Select4(append, sData)',
    '    If Err.Number <> 0 Then',
    '        Err.Clear',
    '        SelObj = o.Select2(append, mark)',
    '        If Err.Number <> 0 Then',
    '            Err.Clear',
    '            SelObj = False',
    '        End If',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Function SelKey(ByVal k As String, ByVal append As Boolean, ByVal mark As Long) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim o As Object',   // i18n-ignore: VBA macro text
    '    Set o = Got(k)',
    '    If o Is Nothing Then',   // i18n-ignore: VBA macro text
    '        SelKey = False',
    '        Exit Function',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    SelKey = SelObj(o, append, mark)',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Function SelAt(ByVal typ As String, ByVal x As Double, ByVal y As Double, ByVal z As Double, ByVal append As Boolean, ByVal mark As Long) As Boolean',   // i18n-ignore: VBA macro text
    '    SelAt = swExt.SelectByID2("", typ, x, y, z, append, mark, Nothing, 0)',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' the n-th plane of the tree: 1 Front, 2 Top, 3 Right in the default part template (names differ by language)",   // i18n-ignore: VBA macro text
    'Function SelBase(ByVal which As Integer, ByVal append As Boolean, ByVal mark As Long) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim feat As Object',   // i18n-ignore: VBA macro text
    '    Dim k As Integer',   // i18n-ignore: VBA macro text
    '    SelBase = False',
    '    Set feat = swModel.FirstFeature',
    '    Do While Not feat Is Nothing',   // i18n-ignore: VBA macro text
    '        If feat.GetTypeName2 = "RefPlane" Then',
    '            k = k + 1',
    '            If k = which Then',
    '                SelBase = feat.Select2(append, mark)',
    '                Exit Function',   // i18n-ignore: VBA macro text
    '            End If',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '        Set feat = feat.GetNextFeature',
    '    Loop',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Function SelBody(ByVal append As Boolean, ByVal mark As Long) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim v As Variant',   // i18n-ignore: VBA macro text
    '    Dim body As Object',   // i18n-ignore: VBA macro text
    '    Dim sData As Object',   // i18n-ignore: VBA macro text
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    SelBody = False',
    '    v = swModel.GetBodies2(swSolidBody, True)',
    '    If IsEmpty(v) Then Exit Function',   // i18n-ignore: VBA macro text
    '    Set body = v(0)',
    '    Set sData = swSelMgr.CreateSelectData',
    '    sData.Mark = mark',
    '    SelBody = body.Select2(append, sData)',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' a reference axis along a world axis (where two base planes meet), made once",   // i18n-ignore: VBA macro text
    'Function WorldAxis(ByVal axis As String) As Object',   // i18n-ignore: VBA macro text
    '    Dim feat As Object',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    Set feat = Got("axis:" & axis)',
    '    If Not feat Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Set WorldAxis = feat',
    '        Exit Function',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    If axis = "x" Then',
    '        ok = SelBase(1, False, 0) And SelBase(2, True, 0)',
    '    ElseIf axis = "y" Then',
    '        ok = SelBase(1, False, 0) And SelBase(3, True, 0)',
    '    Else',
    '        ok = SelBase(2, False, 0) And SelBase(3, True, 0)',
    '    End If',   // i18n-ignore: VBA macro text
    '    Set WorldAxis = Nothing',
    '    If Not ok Then Exit Function',   // i18n-ignore: VBA macro text
    '    If Not swModel.InsertAxis2(True) Then Exit Function',   // i18n-ignore: VBA macro text
    '    Set feat = swModel.FeatureByPositionReverse(0)',
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    feat.Name = "PartCraft " & UCase(axis) & " axis"',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    '    Call Keep("axis:" & axis, feat)',   // i18n-ignore: VBA macro text
    '    Set WorldAxis = feat',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' a reference plane through o, o + u, o + v (metres), from three 3D sketch points; made once per key",   // i18n-ignore: VBA macro text
    'Function MakePlane(ByVal k As String, ByVal nm As String, ByVal ox As Double, ByVal oy As Double, ByVal oz As Double, ByVal ux As Double, ByVal uy As Double, ByVal uz As Double, ByVal vx As Double, ByVal vy As Double, ByVal vz As Double) As Object',   // i18n-ignore: VBA macro text
    '    Dim p1 As Object',   // i18n-ignore: VBA macro text
    '    Dim p2 As Object',   // i18n-ignore: VBA macro text
    '    Dim p3 As Object',   // i18n-ignore: VBA macro text
    '    Dim feat As Object',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    Set feat = Got(k)',
    '    Set MakePlane = feat',
    '    If Not feat Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    Call swSkMgr.Insert3DSketch(True)',
    '    swSkMgr.AddToDB = True',
    '    Set p1 = swSkMgr.CreatePoint(ox, oy, oz)',
    '    Set p2 = swSkMgr.CreatePoint(ox + ux, oy + uy, oz + uz)',
    '    Set p3 = swSkMgr.CreatePoint(ox + vx, oy + vy, oz + vz)',
    '    swSkMgr.AddToDB = False',
    '    Call swSkMgr.Insert3DSketch(True)',
    '    Set feat = swModel.FeatureByPositionReverse(0)',
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    feat.Name = nm & " points"',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    ok = SelObj(p1, False, 0) And SelObj(p2, True, 1) And SelObj(p3, True, 2)',
    '    If Not ok Then Exit Function',   // i18n-ignore: VBA macro text
    '    Set feat = swFeatMgr.InsertRefPlane(swRefPlaneReferenceConstraint_Coincident, 0, swRefPlaneReferenceConstraint_Coincident, 0, swRefPlaneReferenceConstraint_Coincident, 0)',
    '    If feat Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    feat.Name = nm',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    '    Call Keep(k, feat)',   // i18n-ignore: VBA macro text
    '    Set MakePlane = feat',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' ---- sketches: PartCraft hands world points (metres); the open sketch's transform turns them into sketch u, v",   // i18n-ignore: VBA macro text
    'Function OpenSketch(ByVal nx As Double, ByVal ny As Double, ByVal nz As Double, ByVal xx As Double, ByVal xy As Double, ByVal xz As Double) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim swSketch As Object',   // i18n-ignore: VBA macro text
    '    Dim mVec As Object',   // i18n-ignore: VBA macro text
    '    Dim a(2) As Double',   // i18n-ignore: VBA macro text
    '    Dim v As Variant',   // i18n-ignore: VBA macro text
    '    Dim d As Variant',   // i18n-ignore: VBA macro text
    '    OpenSketch = False',
    '    Call swSkMgr.InsertSketch(True)',
    '    Set swSketch = swSkMgr.ActiveSketch',
    '    If swSketch Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    Set gXf = swSketch.ModelToSketchTransform',
    '    a(0) = nx',
    '    a(1) = ny',
    '    a(2) = nz',
    '    v = a',
    '    Set mVec = swMath.CreateVector(v)',
    '    Set mVec = mVec.MultiplyTransform(gXf)',
    '    d = mVec.ArrayData',
    '    If d(2) < 0 Then',
    '        gSign = -1',
    '    Else',
    '        gSign = 1',
    '    End If',   // i18n-ignore: VBA macro text
    '    a(0) = xx',
    '    a(1) = xy',
    '    a(2) = xz',
    '    v = a',
    '    Set mVec = swMath.CreateVector(v)',
    '    Set mVec = mVec.MultiplyTransform(gXf)',
    '    d = mVec.ArrayData',
    '    If Abs(Abs(d(0)) - 1) < 0.000001 Then',
    '        gAxes = 0',
    '    ElseIf Abs(Abs(d(1)) - 1) < 0.000001 Then',
    '        gAxes = 1',
    '    Else',
    '        gAxes = 2',
    '    End If',   // i18n-ignore: VBA macro text
    '    swSkMgr.AddToDB = True',
    '    swSkMgr.DisplayWhenAdded = False',
    '    OpenSketch = True',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Function CloseSketch(ByVal fid As String, ByVal nm As String) As Object',   // i18n-ignore: VBA macro text
    '    Dim feat As Object',   // i18n-ignore: VBA macro text
    '    swSkMgr.AddToDB = False',
    '    swSkMgr.DisplayWhenAdded = True',
    '    Call swSkMgr.InsertSketch(True)',
    '    Set feat = swModel.FeatureByPositionReverse(0)',
    '    If Not feat Is Nothing Then',   // i18n-ignore: VBA macro text
    '        On Error Resume Next',   // i18n-ignore: VBA macro text
    '        feat.Name = nm',
    '        On Error GoTo 0',   // i18n-ignore: VBA macro text
    '        Call Keep(fid, feat)',   // i18n-ignore: VBA macro text
    '        Call SetNum("sign:" & fid, gSign)',
    '    End If',   // i18n-ignore: VBA macro text
    '    Set CloseSketch = feat',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Sub ToSk(ByVal x As Double, ByVal y As Double, ByVal z As Double)',   // i18n-ignore: VBA macro text
    '    Dim mPt As Object',   // i18n-ignore: VBA macro text
    '    Dim a(2) As Double',   // i18n-ignore: VBA macro text
    '    Dim v As Variant',   // i18n-ignore: VBA macro text
    '    Dim d As Variant',   // i18n-ignore: VBA macro text
    '    a(0) = x',
    '    a(1) = y',
    '    a(2) = z',
    '    v = a',
    '    Set mPt = swMath.CreatePoint(v)',
    '    Set mPt = mPt.MultiplyTransform(gXf)',
    '    d = mPt.ArrayData',
    '    gU = d(0)',
    '    gV = d(1)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' a point PartCraft shares between curves: the first SolidWorks point is kept, later ones are tied to it",   // i18n-ignore: VBA macro text
    'Sub KeepPt(ByVal k As String, sPt As Object)',   // i18n-ignore: VBA macro text
    '    Dim o As Object',   // i18n-ignore: VBA macro text
    '    If sPt Is Nothing Then Exit Sub',   // i18n-ignore: VBA macro text
    '    Set o = Got(k)',
    '    If o Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Keep(k, sPt)',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    If SelObj(o, False, 0) And SelObj(sPt, True, 0) Then Call swModel.SketchAddConstraints("sgCOINCIDENT")',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' end points of a new curve, matched to PartCraft's by position (a clockwise arc may swap them)",   // i18n-ignore: VBA macro text
    'Sub KeepEnds(seg As Object, ByVal ka As String, ByVal ua As Double, ByVal va As Double, ByVal kb As String)',   // i18n-ignore: VBA macro text
    '    Dim sPt As Object',   // i18n-ignore: VBA macro text
    '    Dim ePt As Object',   // i18n-ignore: VBA macro text
    '    Set sPt = seg.GetStartPoint2',
    '    Set ePt = seg.GetEndPoint2',
    '    If (sPt.X - ua) ^ 2 + (sPt.Y - va) ^ 2 <= (ePt.X - ua) ^ 2 + (ePt.Y - va) ^ 2 Then',
    '        Call KeepPt(ka, sPt)',
    '        Call KeepPt(kb, ePt)',
    '    Else',
    '        Call KeepPt(ka, ePt)',
    '        Call KeepPt(kb, sPt)',
    '    End If',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub SkLine(ByVal k As String, ByVal ka As String, ByVal x1 As Double, ByVal y1 As Double, ByVal z1 As Double, ByVal kb As String, ByVal x2 As Double, ByVal y2 As Double, ByVal z2 As Double, ByVal cons As Boolean)',   // i18n-ignore: VBA macro text
    '    Dim seg As Object',   // i18n-ignore: VBA macro text
    '    Dim u1 As Double',   // i18n-ignore: VBA macro text
    '    Dim v1 As Double',   // i18n-ignore: VBA macro text
    '    Call ToSk(x1, y1, z1)',   // i18n-ignore: VBA macro text
    '    u1 = gU',
    '    v1 = gV',
    '    Call ToSk(x2, y2, z2)',   // i18n-ignore: VBA macro text
    '    Set seg = swSkMgr.CreateLine(u1, v1, 0, gU, gV, 0)',
    '    If seg Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Bad(gCurrent, "a line could not be drawn (" & k & ")")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If cons Then seg.ConstructionGeometry = True',
    '    Call Keep(k, seg)',   // i18n-ignore: VBA macro text
    '    Call KeepEnds(seg, ka, u1, v1, kb)',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub SkCircle(ByVal k As String, ByVal kc As String, ByVal x As Double, ByVal y As Double, ByVal z As Double, ByVal r As Double, ByVal cons As Boolean)',   // i18n-ignore: VBA macro text
    '    Dim seg As Object',   // i18n-ignore: VBA macro text
    '    Call ToSk(x, y, z)',   // i18n-ignore: VBA macro text
    '    Set seg = swSkMgr.CreateCircleByRadius(gU, gV, 0, r)',
    '    If seg Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Bad(gCurrent, "a circle could not be drawn (" & k & ")")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If cons Then seg.ConstructionGeometry = True',
    '    Call Keep(k, seg)',   // i18n-ignore: VBA macro text
    '    Call KeepPt(kc, seg.GetCenterPoint2)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' counter-clockwise in PartCraft's sketch: clockwise in SolidWorks' when its sketch normal is the other way",   // i18n-ignore: VBA macro text
    'Sub SkArc(ByVal k As String, ByVal kc As String, ByVal cx As Double, ByVal cy As Double, ByVal cz As Double, ByVal ks As String, ByVal sx As Double, ByVal sy As Double, ByVal sz As Double, ByVal ke As String, ByVal ex As Double, ByVal ey As Double, ByVal ez As Double, ByVal cons As Boolean)',   // i18n-ignore: VBA macro text
    '    Dim seg As Object',   // i18n-ignore: VBA macro text
    '    Dim uc As Double',   // i18n-ignore: VBA macro text
    '    Dim vc As Double',   // i18n-ignore: VBA macro text
    '    Dim us As Double',   // i18n-ignore: VBA macro text
    '    Dim vs As Double',   // i18n-ignore: VBA macro text
    '    Dim dirn As Integer',   // i18n-ignore: VBA macro text
    '    Call ToSk(cx, cy, cz)',   // i18n-ignore: VBA macro text
    '    uc = gU',
    '    vc = gV',
    '    Call ToSk(sx, sy, sz)',   // i18n-ignore: VBA macro text
    '    us = gU',
    '    vs = gV',
    '    Call ToSk(ex, ey, ez)',   // i18n-ignore: VBA macro text
    '    If gSign > 0 Then',
    '        dirn = 1',
    '    Else',
    '        dirn = -1',
    '    End If',   // i18n-ignore: VBA macro text
    '    Set seg = swSkMgr.CreateArc(uc, vc, 0, us, vs, 0, gU, gV, 0, dirn)',
    '    If seg Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Bad(gCurrent, "an arc could not be drawn (" & k & ")")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If cons Then seg.ConstructionGeometry = True',
    '    Call Keep(k, seg)',   // i18n-ignore: VBA macro text
    '    Call KeepPt(kc, seg.GetCenterPoint2)',
    '    Call KeepEnds(seg, ks, us, vs, ke)',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub SkPoint(ByVal k As String, ByVal x As Double, ByVal y As Double, ByVal z As Double)',   // i18n-ignore: VBA macro text
    '    Dim sPt As Object',   // i18n-ignore: VBA macro text
    '    Call ToSk(x, y, z)',   // i18n-ignore: VBA macro text
    '    Set sPt = swSkMgr.CreatePoint(gU, gV, 0)',
    '    If sPt Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Bad(gCurrent, "a point could not be placed (" & k & ")")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call KeepPt(k, sPt)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' PartCraft's sketch origin: tied to the SolidWorks origin on a base plane, else a fixed point",   // i18n-ignore: VBA macro text
    'Sub SkOrigin(ByVal k As String, ByVal x As Double, ByVal y As Double, ByVal z As Double, ByVal onBase As Boolean)',   // i18n-ignore: VBA macro text
    '    Dim sPt As Object',   // i18n-ignore: VBA macro text
    '    Dim tied As Boolean',   // i18n-ignore: VBA macro text
    '    Call ToSk(x, y, z)',   // i18n-ignore: VBA macro text
    '    Set sPt = swSkMgr.CreatePoint(gU, gV, 0)',
    '    If sPt Is Nothing Then Exit Sub',   // i18n-ignore: VBA macro text
    '    Call Keep(k, sPt)',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    tied = False',
    '    If onBase Then',   // i18n-ignore: VBA macro text
    '        If SelObj(sPt, False, 0) Then',   // i18n-ignore: VBA macro text
    '            If SelAt("EXTSKETCHPOINT", 0, 0, 0, True, 0) Then',   // i18n-ignore: VBA macro text
    '                Call swModel.SketchAddConstraints("sgCOINCIDENT")',
    '                tied = True',
    '            End If',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If Not tied Then',   // i18n-ignore: VBA macro text
    '        Call swModel.ClearSelection2(True)',
    '        If SelObj(sPt, False, 0) Then Call swModel.SketchAddConstraints("sgFIXED")',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub ArrPt(ByVal i As Long, ByVal x As Double, ByVal y As Double, ByVal z As Double)',   // i18n-ignore: VBA macro text
    '    Call ToSk(x, y, z)',   // i18n-ignore: VBA macro text
    '    gArr(3 * i) = gU',
    '    gArr(3 * i + 1) = gV',
    '    gArr(3 * i + 2) = 0',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub SkSpline(ByVal k As String, ByVal cons As Boolean)',   // i18n-ignore: VBA macro text
    '    Dim seg As Object',   // i18n-ignore: VBA macro text
    '    Dim v As Variant',   // i18n-ignore: VBA macro text
    '    v = gArr',
    '    Set seg = swSkMgr.CreateSpline2(v, True)',
    '    If seg Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Bad(gCurrent, "a spline could not be drawn (" & k & ")")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If cons Then seg.ConstructionGeometry = True',
    '    Call Keep(k, seg)',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub Rel(ByVal t As String, ByVal k1 As String, ByVal k2 As String, ByVal k3 As String)',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    ok = SelKey(k1, False, 0)',
    '    If ok And k2 <> "" Then ok = SelKey(k2, True, 0)',
    '    If ok And k3 <> "" Then ok = SelKey(k3, True, 0)',
    '    If ok Then',   // i18n-ignore: VBA macro text
    '        Call swModel.SketchAddConstraints(t)',
    '    Else',
    '        Call Note("Left out in " & gCurrent & ": a relation (" & t & ") whose geometry was not drawn")',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' horizontal / vertical are along PartCraft's sketch axes: swapped when SolidWorks' sketch is turned 90 degrees",   // i18n-ignore: VBA macro text
    'Sub RelHV(ByVal vert As Boolean, ByVal pts As Boolean, ByVal k1 As String, ByVal k2 As String)',   // i18n-ignore: VBA macro text
    '    Dim t As String',   // i18n-ignore: VBA macro text
    '    If gAxes = 2 Then',
    '        Call Note("Left out in " & gCurrent & ": a horizontal or vertical relation (the sketch axes are turned in SolidWorks)")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If gAxes = 1 Then vert = Not vert',
    '    If pts Then',   // i18n-ignore: VBA macro text
    '        If vert Then',   // i18n-ignore: VBA macro text
    '            t = "sgVERTICALPOINTS2D"',
    '        Else',
    '            t = "sgHORIZONTALPOINTS2D"',
    '        End If',   // i18n-ignore: VBA macro text
    '    Else',
    '        If vert Then',   // i18n-ignore: VBA macro text
    '            t = "sgVERTICAL2D"',
    '        Else',
    '            t = "sgHORIZONTAL2D"',
    '        End If',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Call Rel(t, k1, k2, "")',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' a dimension: kind 0 smart (aligned, radial, angular), 1 horizontal, 2 vertical (PartCraft's axes); text at x, y, z",   // i18n-ignore: VBA macro text
    'Sub SkDim(ByVal nm As String, ByVal kind As Integer, ByVal k1 As String, ByVal k2 As String, ByVal x As Double, ByVal y As Double, ByVal z As Double, ByVal sysVal As Double)',   // i18n-ignore: VBA macro text
    '    Dim dDim As Object',   // i18n-ignore: VBA macro text
    '    Dim dm As Object',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    If kind > 0 Then',
    '        If gAxes = 2 Then',
    '            Call Note("Left out in " & gCurrent & ": dimension " & nm & " (horizontal or vertical, and the sketch axes are turned in SolidWorks)")',   // i18n-ignore: VBA macro text
    '            Exit Sub',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '        If gAxes = 1 Then kind = 3 - kind',
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    ok = SelKey(k1, False, 0)',
    '    If ok And k2 <> "" Then ok = SelKey(k2, True, 0)',
    '    If Not ok Then',   // i18n-ignore: VBA macro text
    '        Call Note("Left out in " & gCurrent & ": dimension " & nm & " (its geometry was not drawn)")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If kind = 1 Then',
    '        Set dDim = swModel.AddHorizontalDimension2(x, y, z)',
    '    ElseIf kind = 2 Then',
    '        Set dDim = swModel.AddVerticalDimension2(x, y, z)',
    '    Else',
    '        Set dDim = swModel.AddDimension2(x, y, z)',
    '    End If',   // i18n-ignore: VBA macro text
    '    Call swModel.ClearSelection2(True)',
    '    If dDim Is Nothing Then',   // i18n-ignore: VBA macro text
    '        Call Note("Left out in " & gCurrent & ": dimension " & nm & " (SolidWorks did not add it)")',   // i18n-ignore: VBA macro text
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Set dm = dDim.GetDimension2(0)',
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    dm.SystemValue = sysVal',
    '    dm.Name = nm',
    '    If Err.Number <> 0 Then Call Note("In " & gCurrent & ": dimension " & nm & " kept the name SolidWorks gave it")',
    '    Err.Clear',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' ---- features",
    'Function MakeExtrude(ByVal skKey As String, ByVal isCut As Boolean, ByVal endc As Long, ByVal d1 As Double, ByVal two As Boolean, ByVal d2 As Double, ByVal flip As Boolean, ByVal taper As Double, ByVal merge As Boolean) As Object',   // i18n-ignore: VBA macro text
    '    Dim drafted As Boolean',   // i18n-ignore: VBA macro text
    '    Set MakeExtrude = Nothing',
    '    Call swModel.ClearSelection2(True)',
    '    If Not SelKey(skKey, False, 0) Then Exit Function',   // i18n-ignore: VBA macro text
    '    drafted = (Abs(taper) > 0.0000001)',
    '    If isCut Then',   // i18n-ignore: VBA macro text
    '        Set MakeExtrude = swFeatMgr.FeatureCut3(Not two, False, flip, endc, 0, d1, d2, drafted, False, (taper < 0), False, Abs(taper), Abs(taper), False, False, False, False, False, True, True, True, True, False, 0, 0, False)',
    '    Else',
    '        Set MakeExtrude = swFeatMgr.FeatureExtrusion2(Not two, False, flip, endc, 0, d1, d2, drafted, False, (taper < 0), False, Abs(taper), Abs(taper), False, False, False, False, merge, True, True, 0, 0, False)',
    '    End If',   // i18n-ignore: VBA macro text
    'End Function',   // i18n-ignore: VBA macro text
    '',
    'Function MakeRevolve(ByVal skKey As String, ByVal axisKey As String, ByVal isCut As Boolean, ByVal angle As Double, ByVal rev As Boolean) As Object',
    '    Set MakeRevolve = Nothing',
    '    Call swModel.ClearSelection2(True)',
    '    If axisKey <> "" Then',
    '        If Not SelKey(axisKey, False, MarkRevolveAxis) Then Exit Function',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If Not SelKey(skKey, axisKey <> "", 0) Then Exit Function',
    '    Set MakeRevolve = swFeatMgr.FeatureRevolve2(True, True, False, isCut, rev, False, swEndCondBlind, swEndCondBlind, angle, 0, False, False, 0.01, 0.01, 0, 0, 0, True, True, True)',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' rename + keep; false when SolidWorks made nothing",   // i18n-ignore: VBA macro text
    'Function Named(feat As Object, ByVal fid As String, ByVal nm As String) As Boolean',   // i18n-ignore: VBA macro text
    '    Named = False',
    '    If feat Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    feat.Name = nm',
    '    Err.Clear',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    '    Call Keep(fid, feat)',   // i18n-ignore: VBA macro text
    '    Named = True',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' give a feature's dimension PartCraft's name (found by its value: metres, radians, or a count)",   // i18n-ignore: VBA macro text
    'Sub NameDim(feat As Object, ByVal nm As String, ByVal sysVal As Double)',   // i18n-ignore: VBA macro text
    '    Dim dDim As Object',   // i18n-ignore: VBA macro text
    '    Dim dm As Object',   // i18n-ignore: VBA macro text
    '    Dim tol As Double',   // i18n-ignore: VBA macro text
    '    If feat Is Nothing Then Exit Sub',   // i18n-ignore: VBA macro text
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    tol = 0.000000001 * (1 + Abs(sysVal))',
    '    Set dDim = feat.GetFirstDisplayDimension',
    '    Do While Not dDim Is Nothing',   // i18n-ignore: VBA macro text
    '        Set dm = dDim.GetDimension2(0)',
    '        If Not dm Is Nothing Then',   // i18n-ignore: VBA macro text
    '            If Abs(Abs(dm.SystemValue) - Abs(sysVal)) <= tol And InStr(1, "|depth|angle|count|spacing|d|r|t|", "|" & dm.Name & "|") = 0 Then',
    '                dm.Name = nm',
    '                Exit Sub',   // i18n-ignore: VBA macro text
    '            End If',   // i18n-ignore: VBA macro text
    '        End If',   // i18n-ignore: VBA macro text
    '        Set dDim = feat.GetNextDisplayDimension(dDim)',
    '    Loop',
    '    Call Note("In " & gCurrent & ": no dimension of " & nm & " was found to name (an equation on it will not attach)")',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    "' the body after a step against PartCraft's: 1 the same, 0 different, -1 SolidWorks could not tell",   // i18n-ignore: VBA macro text
    'Function Expect(ByVal vol As Double, ByVal x0 As Double, ByVal y0 As Double, ByVal z0 As Double, ByVal x1 As Double, ByVal y1 As Double, ByVal z1 As Double) As Integer',   // i18n-ignore: VBA macro text
    '    Dim mProp As Object',   // i18n-ignore: VBA macro text
    '    Dim b As Variant',   // i18n-ignore: VBA macro text
    '    Dim v As Double',   // i18n-ignore: VBA macro text
    '    Dim tol As Double',   // i18n-ignore: VBA macro text
    '    Expect = -1',
    '    On Error GoTo NoCheck',
    '    Set mProp = swExt.CreateMassProperty',
    '    If mProp Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    v = mProp.Volume',
    '    b = swModel.GetPartBox(True)',
    '    tol = 0.00001 + 0.02 * Sqr((x1 - x0) ^ 2 + (y1 - y0) ^ 2 + (z1 - z0) ^ 2)',
    '    Expect = 1',
    '    If Abs(v - vol) > 0.0001 * Abs(vol) + 1E-15 Then Expect = 0',
    '    If Abs(b(0) - x0) > tol Or Abs(b(1) - y0) > tol Or Abs(b(2) - z0) > tol Then Expect = 0',
    '    If Abs(b(3) - x1) > tol Or Abs(b(4) - y1) > tol Or Abs(b(5) - z1) > tol Then Expect = 0',
    '    Exit Function',   // i18n-ignore: VBA macro text
    'NoCheck:',
    '    Expect = -1',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' reverse a feature's direction (what: 1 extrude, cut or revolve; 2 linear pattern; 3 circular pattern)",
    'Function FlipFeat(feat As Object, ByVal what As Integer) As Boolean',   // i18n-ignore: VBA macro text
    '    Dim fData As Object',   // i18n-ignore: VBA macro text
    '    FlipFeat = False',
    '    If feat Is Nothing Then Exit Function',   // i18n-ignore: VBA macro text
    '    On Error GoTo NoFlip',
    '    Set fData = feat.GetDefinition',
    '    Call fData.AccessSelections(swModel, Nothing)',   // i18n-ignore: VBA macro text
    '    If what = 2 Then',
    '        fData.D1ReverseDirection = Not fData.D1ReverseDirection',
    '    Else',
    '        fData.ReverseDirection = Not fData.ReverseDirection',
    '    End If',   // i18n-ignore: VBA macro text
    '    FlipFeat = feat.ModifyDefinition(fData, swModel, Nothing)',
    '    Exit Function',   // i18n-ignore: VBA macro text
    'NoFlip:',
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    Call fData.ReleaseSelectionAccess',
    'End Function',   // i18n-ignore: VBA macro text
    '',
    "' the body differs from PartCraft's after this step: flip once; flip back when that is no better",   // i18n-ignore: VBA macro text
    'Sub FixDir(f1 As Object, f2 As Object, ByVal what As Integer, ByVal vol As Double, ByVal x0 As Double, ByVal y0 As Double, ByVal z0 As Double, ByVal x1 As Double, ByVal y1 As Double, ByVal z1 As Double)',   // i18n-ignore: VBA macro text
    '    Dim r As Integer',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    ok = FlipFeat(f1, what)',
    '    If Not f2 Is Nothing Then ok = FlipFeat(f2, what) And ok',
    '    r = Expect(vol, x0, y0, z0, x1, y1, z1)',
    '    If r = 1 Then',
    '        Call Note("Checked " & gCurrent & ": the direction was turned round to match PartCraft")',   // i18n-ignore: VBA macro text
    '        gCheck = gCheck + 1',
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    If ok Then',   // i18n-ignore: VBA macro text
    '        ok = FlipFeat(f1, what)',
    '        If Not f2 Is Nothing Then ok = FlipFeat(f2, what)',
    '    End If',   // i18n-ignore: VBA macro text
    '    Call Note("Check   " & gCurrent & ": the body differs from PartCraft after this step")',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub Checked(ByVal r As Integer)',   // i18n-ignore: VBA macro text
    '    If r = 1 Then gCheck = gCheck + 1',
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub AddEq(ByVal s As String, ByVal what As String)',   // i18n-ignore: VBA macro text
    '    Dim swEqMgr As Object',   // i18n-ignore: VBA macro text
    '    Dim i As Long',   // i18n-ignore: VBA macro text
    '    Set swEqMgr = swModel.GetEquationMgr',
    '    On Error Resume Next',   // i18n-ignore: VBA macro text
    '    i = swEqMgr.Add2(-1, s, False)',
    '    If Err.Number <> 0 Or i < 0 Then',
    '        Call Bad("Equation " & what, "SolidWorks refused " & s)',   // i18n-ignore: VBA macro text
    '    Else',
    '        Call Good("Equation " & what)',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Err.Clear',
    '    On Error GoTo 0',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub Suppress(ByVal fid As String, ByVal nm As String)',   // i18n-ignore: VBA macro text
    '    Dim feat As Object',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    Set feat = Got(fid)',
    '    If feat Is Nothing Then Exit Sub',   // i18n-ignore: VBA macro text
    '    ok = feat.SetSuppression2(swSuppressFeature, swThisConfiguration, Nothing)',
    '    If ok Then',   // i18n-ignore: VBA macro text
    '        Call Note("Done    " & nm & " suppressed, as in PartCraft")',   // i18n-ignore: VBA macro text
    '    Else',
    '        Call Note("Check   " & nm & ": SolidWorks did not suppress it")',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    'End Sub',   // i18n-ignore: VBA macro text
    '',
    'Sub WriteLog(ByVal fileName As String)',
    '    Dim p As String',   // i18n-ignore: VBA macro text
    '    Dim fnum As Integer',   // i18n-ignore: VBA macro text
    '    On Error GoTo NoLog',
    '    p = swApp.GetCurrentMacroPathName',
    '    If p = "" Then Exit Sub',
    '    p = Left(p, InStrRev(p, "\\")) & fileName',
    '    fnum = FreeFile',
    '    Open p For Output As #fnum',   // i18n-ignore: VBA macro text
    '    Print #fnum, gLog',   // i18n-ignore: VBA macro text
    '    Close #fnum',   // i18n-ignore: VBA macro text
    '    Call Note("Log: " & p)',   // i18n-ignore: VBA macro text
    'NoLog:',
    'End Sub',   // i18n-ignore: VBA macro text
  ];
}

// ---------------------------------------------------------------- expressions: PartCraft → SolidWorks equation text

const SW_FN = { sin: 'sin', cos: 'cos', tan: 'tan', asin: 'arcsin', acos: 'arccos', atan: 'atn', sqrt: 'sqr', abs: 'abs', exp: 'exp', ln: 'log', sign: 'sgn', int: 'int' };
const CMP = { '<': '<', '<=': '<=', '>': '>', '>=': '>=', '==': '=', '!=': '<>' };
/** SolidWorks equation text for a parsed expression, or throws Error(the reason it has no counterpart). */
export function swExpr(ast, varName = (v) => `"${v}"`) {
  const w = (x, inCond = false) => {
    switch (x.k) {
      case 'num': return x.name === 'pi' ? 'pi' : formatNumber(x.v);
      case 'var': return varName(x.name);
      case 'neg': return `-(${w(x.a)})`;
      case 'bin':
        if (x.op === '%') throw new Error(t('xch.swm.expr.percent'));
        return `(${w(x.a)} ${x.op} ${w(x.b)})`;
      case 'cmp':
        if (!inCond) throw new Error(t('xch.swm.expr.comparison'));
        return `${w(x.a)} ${CMP[x.op]} ${w(x.b)}`;
      case 'call':
        if (x.name === 'if') return `iif(${bare(w(x.args[0], true))}, ${bare(w(x.args[1]))}, ${bare(w(x.args[2]))})`;
        if (x.name === 'pow') return `((${bare(w(x.args[0]))}) ^ (${bare(w(x.args[1]))}))`;
        if (x.name === 'log') return `(log(${bare(w(x.args[0]))}) / log(10))`;   // i18n-ignore: VBA macro text
        if (SW_FN[x.name]) return `${SW_FN[x.name]}(${bare(w(x.args[0]))})`;
        throw new Error(t('xch.swm.expr.function', { name: x.name }));
      default: throw new Error(t('xch.swm.expr.unknown'));
    }
  };
  return bare(w(ast));
}
const bare = (s) => (s.startsWith('(') && s.endsWith(')') && balancedInside(s) ? s.slice(1, -1) : s);
function balancedInside(s) { let d = 0; for (let i = 0; i < s.length; i++) { if (s[i] === '(') d++; else if (s[i] === ')') { d--; if (d === 0 && i < s.length - 1) return false; } } return true; }

// ---------------------------------------------------------------- geometry helpers

function frameOfSketch(f, i, ctx) {
  const p = f.plane;
  if (p.kind === 'base') return BASE_PLANES[p.name];
  if (p.kind === 'fixed') return frameFor(p.n, p.o);
  const rg = ctx.at(i + 1) || ctx.regen;
  return rg?.frames?.get ? rg.frames.get(f.id) || null : null;
}
const faceNameOf = (ref) => (ref.name ? ref.name : ref.feature + '.' + ref.face + (ref.entity ? ':' + ref.entity : ''));

/** A point inside a face (largest of its triangles, its centroid put back on the face's plane), or null. */
function facePoint(rg, test) {
  if (!rg || !rg.faces || !rg.mesh || !rg.mesh.triFace) return null;
  const ok = new Set(rg.faces.map((f, i) => (test(f, i) ? i : -1)).filter((i) => i >= 0));
  if (!ok.size) return null;
  const P = rg.mesh.positions, I = rg.mesh.indices, TF = rg.mesh.triFace;
  let best = -1, ba = 0, bc = null;
  for (let t = 0; t < TF.length; t++) {
    if (!ok.has(TF[t])) continue;
    const a = [P[I[3 * t] * 3], P[I[3 * t] * 3 + 1], P[I[3 * t] * 3 + 2]], b = [P[I[3 * t + 1] * 3], P[I[3 * t + 1] * 3 + 1], P[I[3 * t + 1] * 3 + 2]], c = [P[I[3 * t + 2] * 3], P[I[3 * t + 2] * 3 + 1], P[I[3 * t + 2] * 3 + 2]];
    const area = len(cross(sub(b, a), sub(c, a))) / 2;
    if (area > ba) { ba = area; best = t; bc = mul(add(add(a, b), c), 1 / 3); }
  }
  if (best < 0) return null;
  const face = rg.faces[TF[best]];
  if (face.type === 'plane' && face.n && face.o) bc = sub(bc, mul(face.n, dot(sub(bc, face.o), face.n)));
  return bc;
}
function nearestBy(list, at, pointOf) {
  let best = null, bd = Infinity;
  for (const x of list) { const d = at ? len(sub(pointOf(x), at)) : 0; if (d < bd) { bd = d; best = x; } }
  return best;
}
/** The edge an EdgeRef means in a regen (same two face names, nearest its point) → its midpoint, or null. */
function edgePoint(rg, ref) {
  if (!rg || !rg.edges) return null;
  const key = [...ref.faces].sort().join('|');
  const e = nearestBy(rg.edges.filter((x) => x.key === key), ref.at, (x) => x.at);
  return e ? e.at : null;
}
function faceRefPoint(rg, ref) {
  if (!rg || !rg.faces) return null;
  const cands = rg.faces.map((f, i) => ({ f, i })).filter((x) => x.f.name === ref.name);
  const hit = nearestBy(cands, ref.at, (x) => x.f.at);
  return hit ? facePoint(rg, (_f, i) => i === hit.i) : null;
}

// ---------------------------------------------------------------- the generator

/**
 * The macro for a part. `part` is not changed (a copy is solved). Returns { text, notes, stats }.
 */
export function partToSwb(input, opts = {}) {
  const part = JSON.parse(JSON.stringify(input));
  const name = swName(opts.name || part.name || 'Part');
  const notes = [];
  const note = (s) => { if (!notes.includes(s)) notes.push(s); };
  const cache = new Map();
  const ctx = {
    regen: opts.regen && opts.regen.exact ? opts.regen : null,
    at: (i) => {
      if (!opts.regenAt) return null;
      if (!cache.has(i)) { let r = null; try { r = opts.regenAt(i); } catch { r = null; } cache.set(i, r && r.exact ? r : null); }
      return cache.get(i);
    },
  };
  for (const f of part.features) if (f.type === 'sketch') { try { solveSketch(f.sketch); } catch { /* keep the stored geometry */ } }

  const swNames = new Map();     // feature id → SolidWorks name
  const used = new Set();
  const nameFor = (f) => {
    let b = swName(f.name || f.id), s = b, k = 2;
    while (used.has(s.toLowerCase())) s = `${b} (${k++})`;
    used.add(s.toLowerCase()); swNames.set(f.id, s); return s;
  };
  const procs = [];              // [{ name, lines }]
  const steps = [];              // Sub names main calls in order
  const carried = new Set();     // feature ids the macro builds
  const skipped = new Set();     // not carried (with a note), and everything that depends on them
  const dimInfo = new Map();     // link target → { full: 'k7@Sketch1', factor }
  const sketchInfo = new Map();  // sketch id → { frame, select: [vba lines] | null, why }
  let checksOn = true;           // body checks stop after the first solid feature that is not carried
  let checks = 0;

  const proc = (pname, comment, body, locals = [], handler = true) => {
    const lines = [`Sub ${pname}()`];   // i18n-ignore: VBA macro text
    if (comment) lines.push(`    ' ${cp1252(comment)}`);
    for (const l of locals) lines.push('    ' + l);
    if (handler) lines.push('    On Error GoTo Oops');   // i18n-ignore: VBA macro text
    for (const l of body) lines.push('    ' + l);
    if (handler) lines.push('    Exit Sub', 'Oops:', '    Call Bad(gCurrent, "SolidWorks stopped here: " & Err.Description)');   // i18n-ignore: VBA macro text
    lines.push('End Sub');   // i18n-ignore: VBA macro text
    procs.push({ name: pname, lines });
  };
  /** Split a long body into Subs that call each other, each well under 64 KB. */
  // items are lines or groups of lines (arrays) that must stay in one procedure
  const chunked = (pname, comment, body, locals = []) => {
    let cur = [], size = 0;
    const parts = [];
    for (const item of body) {
      const g = Array.isArray(item) ? item : [item];
      const gs = g.reduce((a, l) => a + l.length + 6, 0);
      if (size + gs > CHUNK && cur.length) { parts.push(cur); cur = []; size = 0; }
      cur.push(...g); size += gs;
    }
    parts.push(cur);
    parts.forEach((b, i) => {
      const nm = i === 0 ? pname : `${pname}_${i + 1}`;
      const next = i < parts.length - 1 ? [`Call ${pname}_${i + 2}`] : [];   // i18n-ignore: VBA macro text
      proc(nm, i === 0 ? comment : `${comment} (continued)`, [...b, ...next], locals);   // i18n-ignore: VBA macro text
    });
  };
  const expectArgs = (i) => {
    if (!checksOn) return null;
    const rg = ctx.at(i + 1);
    if (!rg || !rg.stats || !rg.stats.bbox) return null;
    const b = rg.stats.bbox;
    return `${n(rg.stats.volume * 1e-9)}, ${m(b.min[0])}, ${m(b.min[1])}, ${m(b.min[2])}, ${m(b.max[0])}, ${m(b.max[1])}, ${m(b.max[2])}`;
  };
  const skip = (f, why) => { skipped.add(f.id); note(t('xch.swm.not_carried', { name: f.name, why })); };

  // ---------------------------------------------------------------- planes

  /** VBA lines that select the plane a sketch (or a hole's cut sketch) sits on, setting `ok`; or { why }. */
  function selectPlane(f, i) {
    const p = f.plane;
    if (p.kind === 'base') return { lines: [`ok = SelBase(${{ front: 1, top: 2, right: 3 }[p.name]}, False, 0)`] };
    if (p.kind === 'face') {
      const rg = ctx.at(i) || ctx.regen;
      if (!rg) return { why: t('xch.swm.why.face_pick_kernel') };
      const nm = faceNameOf(p);
      const at = facePoint(rg, (fc) => fc.name === nm && fc.type === 'plane');
      if (!at) return { why: t('xch.swm.why.face_not_found') };
      return { lines: [`ok = SelAt("FACE", ${xyz(at)}, False, 0)`] };
    }
    const fr = p.kind === 'fixed' ? frameFor(p.n, p.o) : null;
    if (fr) return { lines: planeByPoints(`plane:${planeKey(fr)}`, `${f.name} plane`, fr) };   // i18n-ignore: VBA macro text
    if (p.kind === 'ref') {
      if (!carried.has(p.feature)) return { why: t('xch.swm.why.ref_plane_missing') };
      return { lines: [`ok = SelKey(${q(p.feature)}, False, 0)`] };
    }
    return { why: t('xch.swm.why.plane_kind') };
  }
  const planeKey = (fr) => [...fr.o, ...fr.n].map((v) => (+v).toFixed(6)).join(',');
  function planeByPoints(key, label, fr) {
    const s = 10;   // mm: the three points span 10 mm
    return [
      `Set feat = MakePlane(${q(key)}, ${q(label)}, ${xyz(fr.o)}, ${xyz(mul(fr.x, s))}, ${xyz(mul(fr.y, s))})`,
      'ok = False',
      'If Not feat Is Nothing Then ok = SelObj(feat, False, 0)',
    ];
  }

  // ---------------------------------------------------------------- sketches

  function sketchBody(f, frame, keyOf) {
    const sk = f.sketch;
    const W = (x, y) => toWorld(frame, x, y);
    const out = [];
    const usesOrigin = sk.constraints.some((c) => c.refs.includes(ORIGIN));
    if (usesOrigin) out.push(`Call SkOrigin(${q(keyOf(ORIGIN))}, ${xyz(W(0, 0))}, ${f.plane.kind === 'base' ? 'True' : 'False'})`);   // i18n-ignore: VBA macro text
    const cons = (e) => (e.construction ? 'True' : 'False');
    const usedPts = new Set();
    let approx = 0, splinesNoRel = 0;
    for (const e of sk.entities) {
      if (e.type === 'line') {
        out.push(`Call SkLine(${q(keyOf(e.id))}, ${q(keyOf(e.p1))}, ${xyz(W(...pointXY(sk, e.p1)))}, ${q(keyOf(e.p2))}, ${xyz(W(...pointXY(sk, e.p2)))}, ${cons(e)})`);   // i18n-ignore: VBA macro text
        usedPts.add(e.p1); usedPts.add(e.p2);
      } else if (e.type === 'circle') {
        out.push(`Call SkCircle(${q(keyOf(e.id))}, ${q(keyOf(e.c))}, ${xyz(W(...pointXY(sk, e.c)))}, ${m(e.r)}, ${cons(e)})`);   // i18n-ignore: VBA macro text
        usedPts.add(e.c);
      } else if (e.type === 'arc') {
        out.push(`Call SkArc(${q(keyOf(e.id))}, ${q(keyOf(e.c))}, ${xyz(W(...pointXY(sk, e.c)))}, ${q(keyOf(e.s))}, ${xyz(W(...pointXY(sk, e.s)))}, ${q(keyOf(e.e))}, ${xyz(W(...pointXY(sk, e.e)))}, ${cons(e)})`);   // i18n-ignore: VBA macro text
        usedPts.add(e.c); usedPts.add(e.s); usedPts.add(e.e);
      } else if (e.type === 'spline') {
        let pts;
        if (e.kind === 'fit' && !e.closed) pts = e.pts.map((id) => pointXY(sk, id));
        else { pts = tessSpline(sk, e, 4); approx++; }
        out.push([`ReDim gArr(0 To ${pts.length * 3 - 1})`, ...pts.map((p, k) => `Call ArrPt(${k}, ${xyz(W(...p))})`), `Call SkSpline(${q(keyOf(e.id))}, ${cons(e)})`]);   // i18n-ignore: VBA macro text
        splinesNoRel++;
        for (const id of e.pts) usedPts.add(id);
      }
    }
    for (const e of sk.entities) if (e.type === 'point' && !usedPts.has(e.id)) out.push(`Call SkPoint(${q(keyOf(e.id))}, ${xyz(W(e.x, e.y))})`);   // i18n-ignore: VBA macro text
    if (approx) note(t('xch.swm.note.spline_approx', { name: f.name, n: approx }));
    else if (splinesNoRel) note(t('xch.swm.note.spline_points', { name: f.name }));
    const left = [];
    for (const c of sk.constraints) {
      const line = constraintLine(f, c, frame, keyOf);
      if (line) out.push(...line); else left.push(c.type);
    }
    if (left.length) note(t('xch.swm.note.relations_left', { name: f.name, n: left.length, list: [...new Set(left)].join(', ') }));
    return out;
  }

  /** VBA for one relation or dimension, or null when it is left out. */
  function constraintLine(f, c, frame, keyOf) {
    const sk = f.sketch;
    const ents = c.refs.map((r) => byId(sk, r));
    if (ents.some((e) => !e)) return null;
    if (ents.some((e) => e.type === 'spline')) return null;
    const k = c.refs.map(keyOf);
    const kinds = ents.map((e) => (e.type === 'point' ? 'P' : e.type === 'line' ? 'L' : 'R')).join('');
    const rel = (t, ...ks) => [`Call Rel(${q(t)}, ${q(ks[0] || '')}, ${q(ks[1] || '')}, ${q(ks[2] || '')})`];   // i18n-ignore: VBA macro text
    switch (c.type) {
      case 'coincident': return rel('sgCOINCIDENT', k[0], k[1]);
      case 'horizontal': case 'vertical': return [`Call RelHV(${c.type === 'vertical' ? 'True' : 'False'}, ${kinds === 'PP' ? 'True' : 'False'}, ${q(k[0])}, ${q(k[1] || '')})`];   // i18n-ignore: VBA macro text
      case 'parallel': return rel('sgPARALLEL', k[0], k[1]);
      case 'perpendicular': return rel('sgPERPENDICULAR', k[0], k[1]);
      case 'tangent': return rel('sgTANGENT', k[0], k[1]);
      case 'equal': return rel('sgSAMELENGTH', k[0], k[1]);
      case 'concentric':
        if (kinds === 'PR') return rel('sgCOINCIDENT', k[0], keyOf(ents[1].c));
        return rel('sgCONCENTRIC', k[0], k[1]);
      case 'midpoint': return rel('sgATMIDDLE', k[0], k[1]);
      case 'fix': return rel('sgFIXED', k[0]);
      case 'symmetric': return rel('sgSYMMETRIC', k[0], k[1], k[2]);
      case 'distance': case 'hdistance': case 'vdistance': case 'radius': case 'diameter': case 'angle':
        return dimensionLine(f, c, ents, kinds, k, frame);
      default: return null;
    }
  }

  function dimensionLine(f, c, ents, kinds, k, frame) {
    const sk = f.sketch;
    const P = (e) => [e.x, e.y];
    const L = (e) => [pointXY(sk, e.p1), pointXY(sk, e.p2)];
    const perp = (a, b, d) => { const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [-dy / l * d, dx / l * d]; };
    let at, kind = 0, sys = c.value / 1000, k1 = k[0], k2 = k[1] || '', factor = 1;
    const size = Math.max(5, Math.abs(c.value) * 0.15);
    if (c.type === 'radius' || c.type === 'diameter') {
      const e = ents[0];
      const r = e.type === 'circle' ? e.r : Math.hypot(...sub2(pointXY(sk, e.s), pointXY(sk, e.c)));
      const cc = pointXY(sk, e.c);
      let ang = Math.PI / 4;
      if (e.type === 'arc') { const a = arcAngles(sk, e); ang = a.a0 + a.sweep / 2; }
      at = [cc[0] + 1.4 * r * Math.cos(ang), cc[1] + 1.4 * r * Math.sin(ang)];
      // SolidWorks dimensions a circle by its diameter and an arc by its radius
      const swDiam = e.type === 'circle';
      sys = (swDiam ? 2 * r : r) / 1000;
      factor = c.type === 'radius' ? (swDiam ? 2 : 1) : (swDiam ? 1 : 0.5);
    } else if (c.type === 'angle') {
      const [a1, b1] = L(ents[0]), [a2, b2] = L(ents[1]);
      const u = norm2(sub2(b1, a1)), v = norm2(sub2(b2, a2));
      const X = intersect2(a1, u, a2, v) || mid(mid(a1, b1), mid(a2, b2));
      let bis = [u[0] + v[0], u[1] + v[1]];
      if (Math.hypot(...bis) < 1e-9) bis = [-u[1], u[0]];
      bis = norm2(bis);
      const reach = 0.6 * Math.min(Math.hypot(...sub2(b1, a1)), Math.hypot(...sub2(b2, a2)));
      at = [X[0] + bis[0] * reach, X[1] + bis[1] * reach];
      sys = c.value * Math.PI / 180;
    } else if (kinds === 'L') {
      const [a, b] = L(ents[0]);
      at = c.type === 'distance' ? add2(mid(a, b), perp(a, b, size)) : c.type === 'hdistance' ? [(a[0] + b[0]) / 2, Math.max(a[1], b[1]) + size] : [Math.max(a[0], b[0]) + size, (a[1] + b[1]) / 2];
      kind = c.type === 'hdistance' ? 1 : c.type === 'vdistance' ? 2 : 0;
    } else if (kinds === 'PP') {
      const a = ents[0].type === 'point' ? P(ents[0]) : null, b = P(ents[1]);
      const aa = a || [0, 0];
      at = c.type === 'distance' ? add2(mid(aa, b), perp(aa, b, size)) : c.type === 'hdistance' ? [(aa[0] + b[0]) / 2, Math.max(aa[1], b[1]) + size] : [Math.max(aa[0], b[0]) + size, (aa[1] + b[1]) / 2];
      kind = c.type === 'hdistance' ? 1 : c.type === 'vdistance' ? 2 : 0;
    } else if (kinds === 'PL') {
      const p = P(ents[0]), [a, b] = L(ents[1]);
      const d = norm2(sub2(b, a)), t = dot2(sub2(p, a), d), foot = [a[0] + d[0] * t, a[1] + d[1] * t];
      at = add2(mid(p, foot), [d[0] * size, d[1] * size]);
    } else if (kinds === 'LL') {
      const [a, b] = L(ents[0]), [c2, d2] = L(ents[1]);
      const m1 = mid(a, b), d = norm2(sub2(d2, c2)), t = dot2(sub2(m1, c2), d), foot = [c2[0] + d[0] * t, c2[1] + d[1] * t];
      at = mid(m1, foot);
    } else return null;
    if (Array.isArray(c.off) && c.off.length === 2 && c.off.every(Number.isFinite) && c.type !== 'angle') at = add2(at, [c.off[0] * 0.25, c.off[1] * 0.25]);
    const w = toWorld(frame, at[0], at[1]);
    const nm = swName(c.id);
    dimInfo.set(`${f.id}.${c.id}`, { full: `${nm}@${swNames.get(f.id)}`, factor });
    return [`Call SkDim(${q(nm)}, ${kind}, ${q(k1)}, ${q(k2)}, ${xyz(w)}, ${n(sys)})`];   // i18n-ignore: VBA macro text
  }

  function emitSketch(f, i) {
    const frame = frameOfSketch(f, i, ctx);
    if (!frame) { skip(f, t('xch.swm.why.place_kernel')); return; }
    const sel = selectPlane(f, i);
    if (!sel.lines) { skip(f, sel.why); return; }
    const swn = nameFor(f);
    sketchInfo.set(f.id, { frame, select: sel.lines });
    const keyOf = (id) => `${f.id}:${id}`;
    const pre = `Step_${i + 1}`;
    const body = sketchBody(f, frame, keyOf);
    const open = [
      `gCurrent = ${q(swn)}`,
      'Call swModel.ClearSelection2(True)',
      ...sel.lines,
      'If Not ok Then',   // i18n-ignore: VBA macro text
      `    Call Bad(gCurrent, ${q('the plane or face it sits on could not be selected')})`,   // i18n-ignore: VBA macro text
      '    Exit Sub',   // i18n-ignore: VBA macro text
      'End If',   // i18n-ignore: VBA macro text
      `If Not OpenSketch(${u(frame.n[0])}, ${u(frame.n[1])}, ${u(frame.n[2])}, ${u(frame.x[0])}, ${u(frame.x[1])}, ${u(frame.x[2])}) Then`,   // i18n-ignore: VBA macro text
      `    Call Bad(gCurrent, ${q('SolidWorks did not open a sketch there')})`,   // i18n-ignore: VBA macro text
      '    Exit Sub',   // i18n-ignore: VBA macro text
      'End If',   // i18n-ignore: VBA macro text
      `Call ${pre}_Draw`,   // i18n-ignore: VBA macro text
      `Set feat = CloseSketch(${q(f.id)}, ${q(swn)})`,
      'If feat Is Nothing Then',   // i18n-ignore: VBA macro text
      `    Call Bad(gCurrent, ${q('the sketch was not made')})`,   // i18n-ignore: VBA macro text
      'Else',
      '    Call Good(gCurrent)',
      'End If',   // i18n-ignore: VBA macro text
    ];
    proc(pre, `${f.name}: sketch on ${planeWords(f.plane)}`, open, ['Dim feat As Object', 'Dim ok As Boolean']);   // i18n-ignore: VBA macro text
    chunked(`${pre}_Draw`, `${f.name}: curves, points, relations, dimensions (sketch units: metres)`, body.length ? body : ["' (empty sketch)"]);   // i18n-ignore: VBA macro text
    steps.push(pre);
    carried.add(f.id);
  }
  const planeWords = (p) => (p.kind === 'base' ? { front: 'the Front plane', top: 'the Top plane', right: 'the Right plane' }[p.name] : p.kind === 'face' ? 'a face (picked by a point on it)' : p.kind === 'fixed' ? 'a fixed plane (made from three points)' : 'a reference plane');   // i18n-ignore: VBA macro text

  // ---------------------------------------------------------------- solid features

  function needSketch(f) {
    if (!carried.has(f.sketch)) { skip(f, t('xch.swm.why.sketch_missing')); return false; }
    return true;
  }
  /** The common tail of a feature step: name its dims, check the body, flip once if needed. */
  function tail(f, i, { dims = [], flip = null, flip2 = null, what = 1 } = {}) {
    const out = [];
    for (const [nm, v] of dims) out.push(`Call NameDim(feat, ${q(nm)}, ${n(v)})`);   // i18n-ignore: VBA macro text
    const ex = f.suppressed ? null : expectArgs(i);
    if (ex) {
      checks++;
      out.push(`r = Expect(${ex})`);
      if (flip) out.push(`If r = 0 Then Call FixDir(${flip}, ${flip2 || 'Nothing'}, ${what}, ${ex})`, 'Call Checked(r)');   // i18n-ignore: VBA macro text
      else out.push('If r = 0 Then Call Note("Check   " & gCurrent & ": the body differs from PartCraft after this step")', 'Call Checked(r)');   // i18n-ignore: VBA macro text
    }
    out.push('Call Good(gCurrent)');
    if (f.suppressed) out.push(`Call Suppress(${q(f.id)}, ${q(swNames.get(f.id))})`);   // i18n-ignore: VBA macro text
    return out;
  }
  const head = (swn) => [`gCurrent = ${q(swn)}`];
  const LOCALS = ['Dim feat As Object', 'Dim feat2 As Object', 'Dim ok As Boolean', 'Dim flip As Boolean', 'Dim r As Integer'];   // i18n-ignore: VBA macro text
  const madeOr = (what) => ['If feat Is Nothing Then', `    Call Bad(gCurrent, ${q(`SolidWorks did not make the ${what}`)})`, '    Exit Sub', 'End If'];   // i18n-ignore: VBA macro text

  function emitExtrude(f, i) {
    if (!needSketch(f)) return;
    const ends = { blind: 'swEndCondBlind', through: 'swEndCondThroughAll', mid: 'swEndCondMidPlane', next: 'swEndCondThroughNext' };
    if (!ends[f.end]) return skip(f, t('xch.swm.why.end_condition', { end: f.end }));
    if (Array.isArray(f.regions) && f.regions.length) return skip(f, t('xch.swm.why.regions'));
    if (f.op === 'intersect') return skip(f, t('xch.swm.why.intersect'));
    if (f.end === 'through' && f.op !== 'cut') return skip(f, t('xch.swm.why.through_cut'));
    const swn = nameFor(f);
    const cut = f.op === 'cut';
    const two = !!f.two && f.end === 'blind';
    const taper = Number.isFinite(f.taper) && f.taper ? f.taper * Math.PI / 180 : 0;
    if (taper) note(t('xch.swm.note.taper', { name: f.name }));
    const call = (fl) => `Set feat = MakeExtrude(${q(f.sketch)}, ${cut ? 'True' : 'False'}, ${ends[f.end]}, ${m(f.depth)}, ${two ? 'True' : 'False'}, ${m(two ? f.depth2 || f.depth : f.depth)}, ${fl}, ${n(taper)}, ${f.op === 'new' ? 'False' : 'True'})`;
    const body = [
      ...head(swn),
      `flip = (GetNum(${q('sign:' + f.sketch)}) < 0) Xor ${f.reverse ? 'True' : 'False'}`,
      call('flip'),
      `If feat Is Nothing Then ${call('Not flip').replace(/^Set /, 'Set ')}`,   // i18n-ignore: VBA macro text
      ...madeOr(cut ? 'cut' : 'extrusion'),
      `ok = Named(feat, ${q(f.id)}, ${q(swn)})`,
      ...tail(f, i, { dims: f.end === 'through' || f.end === 'next' ? [] : [['depth', f.depth / 1000]], flip: f.end === 'mid' ? null : 'feat' }),
    ];
    if (f.end !== 'through' && f.end !== 'next') dimInfo.set(`${f.id}.depth`, { full: `depth@${swn}`, factor: 1 });   // i18n-ignore: VBA macro text
    proc(`Step_${i + 1}`, `${f.name}: ${cut ? 'cut' : 'extrude'} ${swNames.get(f.sketch)}, ${f.end} ${f.end === 'through' ? '' : f.depth + ' mm'}`, body, LOCALS);
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitRevolve(f, i) {
    if (!needSketch(f)) return;
    const sk = part.features.find((g) => g.id === f.sketch).sketch;
    let axisKey = '';
    if (f.axis && typeof f.axis === 'object') return skip(f, t('xch.swm.why.axis_outside'));
    const ax = f.axis ? byId(sk, f.axis) : sk.entities.find((e) => e.type === 'line' && e.construction);
    if (!ax || ax.type !== 'line') return skip(f, t('xch.swm.why.no_axis_line'));
    axisKey = `${f.sketch}:${ax.id}`;
    const swn = nameFor(f);
    const cut = f.op === 'cut';
    const full = Math.abs(f.angle - 360) < 1e-9;
    if (!full) note(t(opts.regenAt ? 'xch.swm.note.revolve' : 'xch.swm.note.revolve_no_kernel', { name: f.name, angle: f.angle }));
    const body = [
      ...head(swn),
      `Set feat = MakeRevolve(${q(f.sketch)}, ${q(axisKey)}, ${cut ? 'True' : 'False'}, ${rad(f.angle)}, False)`,
      ...madeOr('revolve'),
      `ok = Named(feat, ${q(f.id)}, ${q(swn)})`,
      ...tail(f, i, { dims: [['angle', f.angle * Math.PI / 180]], flip: full ? null : 'feat' }),
    ];
    dimInfo.set(`${f.id}.angle`, { full: `angle@${swn}`, factor: 1 });   // i18n-ignore: VBA macro text
    proc(`Step_${i + 1}`, `${f.name}: ${cut ? 'cut-revolve' : 'revolve'} ${swNames.get(f.sketch)} ${f.angle}°`, body, LOCALS);
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitHole(f, i) {
    if (!needSketch(f)) return;
    const skf = part.features.find((g) => g.id === f.sketch);
    const info = sketchInfo.get(f.sketch);
    const pts = loosePoints(skf.sketch).filter((p) => !p.construction);
    if (!pts.length) return skip(f, t('xch.swm.why.no_points'));
    const thread = f.kind === 'tapped' ? ISO_COARSE[f.size] : null;
    if (f.kind === 'tapped' && !thread) return skip(f, t('xch.swm.why.thread_unknown'));
    if (thread) note(t('xch.swm.note.tapped', { name: f.name, size: f.size, d: thread[2] }));
    const swn = nameFor(f);
    const d = thread ? thread[2] : f.d;
    const holeSketch = (tag, dia, tagName) => {
      const keyOf = (id) => `${f.id}${tag}:${id}`;
      const lines = [
        'Call swModel.ClearSelection2(True)',
        ...info.select,
        'If Not ok Then',   // i18n-ignore: VBA macro text
        `    Call Bad(gCurrent, ${q('the face its points sit on could not be selected')})`,   // i18n-ignore: VBA macro text
        '    Exit Sub',   // i18n-ignore: VBA macro text
        'End If',   // i18n-ignore: VBA macro text
        `If Not OpenSketch(${u(info.frame.n[0])}, ${u(info.frame.n[1])}, ${u(info.frame.n[2])}, ${u(info.frame.x[0])}, ${u(info.frame.x[1])}, ${u(info.frame.x[2])}) Then Exit Sub`,   // i18n-ignore: VBA macro text
      ];
      pts.forEach((p, k) => {
        lines.push(`Call SkCircle(${q(keyOf('c' + k))}, ${q(keyOf('p' + k))}, ${xyz(toWorld(info.frame, p.x, p.y))}, ${m(dia / 2)}, False)`);   // i18n-ignore: VBA macro text
        if (k) lines.push(`Call Rel("sgSAMELENGTH", ${q(keyOf('c0'))}, ${q(keyOf('c' + k))}, "")`);   // i18n-ignore: VBA macro text
      });
      const c0 = toWorld(info.frame, pts[0].x + dia * 0.7, pts[0].y + dia * 0.7);
      lines.push(`Call SkDim("d", 0, ${q(keyOf('c0'))}, "", ${xyz(c0)}, ${m(dia)})`);   // i18n-ignore: VBA macro text
      lines.push(`Set feat2 = CloseSketch(${q(f.id + tag + 'sk')}, ${q(swn + tagName)})`);
      return lines;
    };
    const cut = (tag, depth, through) => `Set ${tag} = MakeExtrude(${q(f.id + (tag === 'feat' ? '' : '_cb') + 'sk')}, True, ${through ? 'swEndCondThroughAll' : 'swEndCondBlind'}, ${m(depth)}, False, ${m(depth)}, flip, 0, True)`;
    const body = [...head(swn)];
    body.push(...holeSketch('', d, '_Sketch'));
    body.push(`flip = (GetNum(${q('sign:' + f.id + 'sk')}) < 0) Xor ${f.reverse ? 'True' : 'False'}`);
    body.push(cut('feat', f.depth, f.through));
    body.push('If feat Is Nothing Then');   // i18n-ignore: VBA macro text
    body.push('    flip = Not flip');
    body.push('    ' + cut('feat', f.depth, f.through));
    body.push('End If');   // i18n-ignore: VBA macro text
    body.push(...madeOr('hole cut'), `ok = Named(feat, ${q(f.id)}, ${q(swn)})`);   // i18n-ignore: VBA macro text
    dimInfo.set(`${f.id}.d`, { full: `d@${swn}_Sketch`, factor: thread ? NaN : 1 });   // i18n-ignore: VBA macro text
    const dims = f.through ? [] : [['depth', f.depth / 1000]];
    if (!f.through) dimInfo.set(`${f.id}.depth`, { full: `depth@${swn}`, factor: 1 });   // i18n-ignore: VBA macro text
    let second = null;
    if (f.kind === 'cbore' || f.kind === 'csink') {
      const tagName = f.kind === 'cbore' ? '_CBore' : '_CSink';
      const dia = f.kind === 'cbore' ? f.cboreD : f.csinkD;
      const depth = f.kind === 'cbore' ? f.cboreDepth : (f.csinkD - f.d) / 2 / Math.tan(f.csinkAngle * Math.PI / 360);
      body.push(...holeSketch('_cb', dia, tagName + 'Sketch'));
      const taper = f.kind === 'csink' ? n(f.csinkAngle / 2 * Math.PI / 180) : '0';
      body.push(`Set feat2 = MakeExtrude(${q(f.id + '_cbsk')}, True, swEndCondBlind, ${m(depth)}, False, ${m(depth)}, flip, ${taper}, True)`);
      body.push('If feat2 Is Nothing Then');   // i18n-ignore: VBA macro text
      body.push(`    Call Bad(gCurrent, ${q(`SolidWorks did not make the ${f.kind === 'cbore' ? 'counterbore' : 'countersink'}`)})`);   // i18n-ignore: VBA macro text
      body.push('Else');
      body.push(`    ok = Named(feat2, ${q(f.id + '_cb')}, ${q(swn + tagName)})`);
      if (f.kind === 'cbore') body.push(`    Call NameDim(feat2, "depth", ${m(depth)})`);   // i18n-ignore: VBA macro text
      body.push('End If');   // i18n-ignore: VBA macro text
      if (f.kind === 'cbore') { dimInfo.set(`${f.id}.cboreD`, { full: `d@${swn}_CBoreSketch`, factor: 1 }); dimInfo.set(`${f.id}.cboreDepth`, { full: `depth@${swn}_CBore`, factor: 1 }); }   // i18n-ignore: VBA macro text
      else note(t('xch.swm.note.csink', { name: f.name, angle: f.csinkAngle / 2 }));
      second = 'feat2';
    }
    body.push(...tail(f, i, { dims, flip: 'feat', flip2: second }));
    proc(`Step_${i + 1}`, `${f.name}: ${f.kind} hole Ø${d} at ${pts.length} point${pts.length > 1 ? 's' : ''} of ${swNames.get(f.sketch)}, written as cut${second ? 's' : ''}`, body, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  /** Lines selecting seed features (mark), or null when a seed is not carried. */
  function seedLines(f, mark) {
    const out = [];
    for (const s of f.seeds) {
      if (!carried.has(s)) return null;
      out.push(`ok = SelKey(${q(s)}, True, ${mark}) And ok`);
      const g = part.features.find((x) => x.id === s);
      if (g && g.type === 'hole' && (g.kind === 'cbore' || g.kind === 'csink')) out.push(`ok = SelKey(${q(s + '_cb')}, True, ${mark}) And ok`);
    }
    return out;
  }
  /** Lines selecting a direction (DirRef) with a mark, or { why }. */
  function dirLines(dr, mark) {
    if (dr.kind === 'world') return { lines: [`Set feat2 = WorldAxis(${q(dr.axis)})`, 'ok = False', `If Not feat2 Is Nothing Then ok = SelObj(feat2, False, ${mark})`] };
    if (dr.kind === 'line') { if (!carried.has(dr.sketch)) return { why: t('xch.swm.why.dir_line_missing') }; return { lines: [`ok = SelKey(${q(dr.sketch + ':' + dr.entity)}, False, ${mark})`] }; }
    if (dr.kind === 'axis') {
      const rv = part.features.find((g) => g.id === dr.feature);
      if (!rv || !carried.has(rv.id)) return { why: t('xch.swm.why.dir_revolve_missing') };
      const sk = part.features.find((g) => g.id === rv.sketch).sketch;
      const ax = rv.axis && typeof rv.axis === 'string' ? byId(sk, rv.axis) : sk.entities.find((e) => e.type === 'line' && e.construction);
      return { lines: [`ok = SelKey(${q(rv.sketch + ':' + ax.id)}, False, ${mark})`] };
    }
    if (dr.kind === 'fixed') return { lines: [`ok = SelAt("EDGE", ${xyz(dr.o)}, False, ${mark})`], why2: t('xch.swm.why.dir_edge_point') };
    return { why: t('xch.swm.why.dir_ref_axis') };
  }

  function emitPattern(f, i) {
    const lin = f.type === 'lpattern';
    const dl = dirLines(lin ? f.dir : f.axis, 'MarkPatternDir');
    if (!dl.lines) return skip(f, dl.why);
    if (dl.why2) note(t('xch.swm.note.named', { name: f.name, text: dl.why2 }));
    const seeds = seedLines(f, 'MarkPatternSeed');
    if (!seeds) return skip(f, t('xch.swm.why.seed_missing'));
    const swn = nameFor(f);
    const full = !lin && Math.abs(f.angle - 360) < 1e-9;
    const body = [...head(swn), 'Call swModel.ClearSelection2(True)', ...dl.lines, ...seeds,
      'If Not ok Then', `    Call Bad(gCurrent, ${q('its direction or features could not be selected')})`, '    Exit Sub', 'End If'];   // i18n-ignore: VBA macro text
    let dims;
    if (lin) {
      body.push(`Set feat = swFeatMgr.FeatureLinearPattern2(${f.count}, ${m(Math.abs(f.spacing))}, 1, 0.01, ${(f.spacing < 0) !== !!f.reverse ? 'True' : 'False'}, False, "NULL", "NULL", False)`);
      dims = [['spacing', Math.abs(f.spacing) / 1000], ['count', f.count]];
      dimInfo.set(`${f.id}.spacing`, { full: `spacing@${swn}`, factor: 1, abs: true });   // i18n-ignore: VBA macro text
    } else {
      body.push(`Set feat = swFeatMgr.FeatureCircularPattern2(${f.count}, ${rad(f.angle)}, ${f.reverse ? 'True' : 'False'}, "NULL", False)`);
      dims = [['angle', f.angle * Math.PI / 180], ['count', f.count]];
      dimInfo.set(`${f.id}.angle`, { full: `angle@${swn}`, factor: 1 });   // i18n-ignore: VBA macro text
      if (!full) note(t('xch.swm.note.cpattern', { name: f.name, angle: f.angle }));
    }
    dimInfo.set(`${f.id}.count`, { full: `count@${swn}`, factor: 1 });   // i18n-ignore: VBA macro text
    body.push(...madeOr('pattern'), `ok = Named(feat, ${q(f.id)}, ${q(swn)})`, ...tail(f, i, { dims, flip: full ? null : 'feat', what: lin ? 2 : 3 }));
    proc(`Step_${i + 1}`, `${f.name}: ${lin ? 'linear' : 'circular'} pattern ×${f.count}`, body, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitMirror(f, i) {
    let pl;
    if (f.plane.kind === 'base') pl = [`ok = SelBase(${{ front: 1, top: 2, right: 3 }[f.plane.name]}, False, MarkMirrorPlane)`];
    else if (f.plane.kind === 'fixed') pl = planeByPoints(`plane:${planeKey(frameFor(f.plane.n, f.plane.o))}`, `${f.name} plane`, frameFor(f.plane.n, f.plane.o)).map((l) => l.replace('SelObj(feat, False, 0)', 'SelObj(feat, False, MarkMirrorPlane)'));   // i18n-ignore: VBA macro text
    else if (f.plane.kind === 'face') {
      const rg = ctx.at(i) || ctx.regen;
      const at = rg ? facePoint(rg, (fc) => fc.name === faceNameOf(f.plane) && fc.type === 'plane') : null;
      if (!at) return skip(f, t('xch.swm.why.mirror_face_kernel'));
      pl = [`ok = SelAt("FACE", ${xyz(at)}, False, MarkMirrorPlane)`];
    } else if (f.plane.kind === 'ref' && carried.has(f.plane.feature)) pl = [`ok = SelKey(${q(f.plane.feature)}, False, MarkMirrorPlane)`];
    else return skip(f, t('xch.swm.why.mirror_plane_missing'));
    const body = f.seeds === 'body' ? ['ok = SelBody(True, MarkMirrorBody) And ok'] : seedLines(f, 'MarkMirrorFeature');
    if (!body) return skip(f, t('xch.swm.why.mirror_seed_missing'));
    const swn = nameFor(f);
    const lines = [...head(swn), 'Call swModel.ClearSelection2(True)', ...pl, ...body,
      'If Not ok Then', `    Call Bad(gCurrent, ${q('its plane or features could not be selected')})`, '    Exit Sub', 'End If',   // i18n-ignore: VBA macro text
      `Set feat = swFeatMgr.InsertMirrorFeature(${f.seeds === 'body' ? 'True' : 'False'}, False, ${f.seeds === 'body' ? 'True' : 'False'}, False)`,
      ...madeOr('mirror'), `ok = Named(feat, ${q(f.id)}, ${q(swn)})`, ...tail(f, i)];
    proc(`Step_${i + 1}`, `${f.name}: mirror ${f.seeds === 'body' ? 'the body' : 'features'}`, lines, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitEdges(f, i) {
    const rg = ctx.at(i) || ctx.regen;
    if (!rg) return skip(f, t('xch.swm.why.edges_kernel'));
    const pts = f.edges.map((e) => edgePoint(rg, e));
    if (!pts.length || pts.some((p) => !p)) return skip(f, t('xch.swm.why.edge_not_found'));
    const swn = nameFor(f);
    const sel = pts.map((p, k) => `ok = SelAt("EDGE", ${xyz(p)}, ${k ? 'True' : 'False'}, MarkEdge) And ok`);
    const lines = [...head(swn), 'Call swModel.ClearSelection2(True)', 'ok = True', ...sel,
      'If Not ok Then', `    Call Bad(gCurrent, ${q('an edge could not be selected')})`, '    Exit Sub', 'End If'];   // i18n-ignore: VBA macro text
    let dims = [];
    if (f.type === 'fillet') {
      if (typeof f.r2 === 'number') note(t('xch.swm.note.fillet_var', { name: f.name, r: f.r, r2: f.r2 }));
      lines.push(`Set feat = swFeatMgr.FeatureFillet(FilletOptions, ${m(f.r)}, 0, 0, 0, 0, 0)`);
      dims = [['r', f.r / 1000]];
      dimInfo.set(`${f.id}.r`, { full: `r@${swn}`, factor: 1 });
    } else {
      const mode = f.mode || 'equal';
      if (mode === 'two') { lines.push(`Set feat = swFeatMgr.InsertFeatureChamfer(0, swChamferDistanceDistance, ${m(f.d)}, 0, ${m(f.d2)}, 0, 0, 0)`); note(t('xch.swm.note.chamfer_two', { name: f.name })); }
      else lines.push(`Set feat = swFeatMgr.InsertFeatureChamfer(0, swChamferAngleDistance, ${m(f.d)}, ${rad(mode === 'angle' ? f.angle : 45)}, 0, 0, 0, 0)`);
      if (mode === 'angle') note(t('xch.swm.note.chamfer_angle', { name: f.name }));
      dims = [['d', f.d / 1000]];
      dimInfo.set(`${f.id}.d`, { full: `d@${swn}`, factor: 1 });
    }
    lines.push(...madeOr(f.type), `ok = Named(feat, ${q(f.id)}, ${q(swn)})`, ...tail(f, i, { dims }));
    proc(`Step_${i + 1}`, `${f.name}: ${f.type} on ${pts.length} edge${pts.length > 1 ? 's' : ''} (picked by their middles)`, lines, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitShell(f, i) {
    const rg = ctx.at(i) || ctx.regen;
    if (!rg) return skip(f, t('xch.swm.why.faces_kernel'));
    const pts = f.faces.map((r) => faceRefPoint(rg, r));
    if (!pts.length || pts.some((p) => !p)) return skip(f, t('xch.swm.why.face_open_not_found'));
    const swn = nameFor(f);
    const lines = [...head(swn), 'Call swModel.ClearSelection2(True)', 'ok = True',
      ...pts.map((p, k) => `ok = SelAt("FACE", ${xyz(p)}, ${k ? 'True' : 'False'}, 0) And ok`),
      'If Not ok Then', `    Call Bad(gCurrent, ${q('a face could not be selected')})`, '    Exit Sub', 'End If',   // i18n-ignore: VBA macro text
      `Set feat = swFeatMgr.InsertFeatureShell(${m(f.t)}, ${f.outward ? 'True' : 'False'})`,
      ...madeOr('shell'), `ok = Named(feat, ${q(f.id)}, ${q(swn)})`, ...tail(f, i, { dims: [['t', f.t / 1000]] })];
    dimInfo.set(`${f.id}.t`, { full: `t@${swn}`, factor: 1 });
    proc(`Step_${i + 1}`, `${f.name}: shell ${f.t} mm ${f.outward ? 'outward' : 'inward'}, ${pts.length} face${pts.length > 1 ? 's' : ''} open`, lines, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  function emitRefPlane(f, i) {
    const rg = ctx.at(i + 1) || ctx.regen;
    const g = rg?.refGeom?.get ? rg.refGeom.get(f.id) : null;
    if (!g || g.kind !== 'plane' || !g.frame) return skip(f, t('xch.swm.why.plane_place_kernel'));
    const swn = nameFor(f);
    const lines = [...head(swn), ...planeByPoints(`plane:${f.id}`, swn, g.frame), 'If feat Is Nothing Then', `    Call Bad(gCurrent, ${q('SolidWorks did not make the plane')})`, '    Exit Sub', 'End If',   // i18n-ignore: VBA macro text
      `Call Keep(${q(f.id)}, feat)`, 'Call Good(gCurrent)'];   // i18n-ignore: VBA macro text
    note(t('xch.swm.note.ref_plane', { name: f.name }));
    proc(`Step_${i + 1}`, `${f.name}: reference plane`, lines, LOCALS);   // i18n-ignore: VBA macro text
    steps.push(`Step_${i + 1}`); carried.add(f.id);
  }

  // ---------------------------------------------------------------- walk the history

  // feature type -> what writes it (PERF.78, perf-finish-11 r2: was a switch; a type not listed is skipped with a note, as its default was)
  const EMIT = {
    sketch: emitSketch, extrude: emitExtrude, revolve: emitRevolve, hole: emitHole, lpattern: emitPattern, cpattern: emitPattern,
    mirror: emitMirror, fillet: emitEdges, chamfer: emitEdges, shell: emitShell, plane: emitRefPlane,
    import: (f) => skip(f, opts.stepFile ? t('xch.swm.why.import_file', { file: opts.stepFile }) : t('xch.swm.why.import')),
  };
  const solidTypes = new Set(['extrude', 'revolve', 'hole', 'lpattern', 'cpattern', 'mirror', 'fillet', 'chamfer', 'shell', 'import', 'sweep', 'loft', 'draft']);
  part.features.forEach((f, i) => {
    const deps = dependsOn(f).filter((d) => skipped.has(d));
    if (deps.length) {
      const g = part.features.find((x) => x.id === deps[0]);
      skip(f, g ? t('xch.swm.why.needs', { name: g.name }) : t('xch.swm.why.needs_feature'));
    } else {
      const emit = Object.hasOwn(EMIT, f.type) ? EMIT[f.type] : null;
      if (emit) emit(f, i);
      else skip(f, t('xch.swm.why.type', { type: f.type }));
    }
    if (skipped.has(f.id) && (solidTypes.has(f.type) || !f.type)) checksOn = false;
    if (skipped.has(f.id) && !['sketch', 'plane', 'axis', 'point'].includes(f.type)) checksOn = false;
  });

  // ---------------------------------------------------------------- parameters

  const eqLines = [], globLines = [];
  let nVars = 0, nEqs = 0;
  const params = part.params && (part.params.vars?.length || part.params.links?.length) ? part.params : null;
  if (params) {
    const ev = evaluateVars(params);
    const lower = new Map();
    for (const v of params.vars) {
      const lk = v.name.toLowerCase();
      if (lower.has(lk)) note(t('xch.swm.note.capitals', { a: lower.get(lk), b: v.name }));
      lower.set(lk, v.name);
    }
    for (const name of ev.order) {
      const v = params.vars.find((x) => x.name === name);
      if (!v) continue;
      let rhs;
      const p = parse(v.expr, params.vars.map((x) => x.name));
      try { if (!p.ok) throw new Error(p.error); rhs = swExpr(p.ast); } catch (e) {
        if (!ev.values.has(name)) { note(t('xch.swm.note.param_left', { name, why: e.message })); continue; }
        rhs = formatNumber(ev.values.get(name));
        note(t('xch.swm.note.param_value', { name, value: rhs, why: e.message }));
      }
      globLines.push(...eqCall(`"${cp1252(name)}" = ${rhs}`, `${name} (global variable)`));   // i18n-ignore: VBA macro text
      nVars++;
    }
    for (const l of params.links) {
      const info = dimInfo.get(l.target);
      const fid = l.target.split('.')[0];
      const owner = part.features.find((g) => g.id === fid);
      if (!info || !carried.has(fid)) { note(t(!carried.has(fid) ? 'xch.swm.note.eq_feature' : 'xch.swm.note.eq_no_dim', { feature: owner ? owner.name : fid, field: l.target.split('.')[1] })); continue; }
      if (!Number.isFinite(info.factor)) { note(t('xch.swm.note.eq_tap', { feature: owner.name, field: l.target.split('.')[1] })); continue; }
      const p = parse(l.expr, params.vars.map((x) => x.name));
      let rhs;
      try {
        if (!p.ok) throw new Error(p.error);
        rhs = swExpr(p.ast);
        if (info.factor !== 1) rhs = `(${rhs}) * ${formatNumber(info.factor)}`;
        if (info.abs) rhs = `abs(${rhs})`;
      } catch (e) { note(t('xch.swm.note.eq_value', { feature: owner.name, field: l.target.split('.')[1], why: e.message })); continue; }
      eqLines.push(...eqCall(`"${cp1252(info.full)}" = ${rhs}`, info.full));
      nEqs++;
    }
  }
  function eqCall(text, label) {
    const s = cp1252(text).replace(/"/g, '""');
    if (s.length < 700) return [`Call AddEq("${s}", ${q(label)})`];   // i18n-ignore: VBA macro text
    const out = ['s = ""'];
    // split between characters, never inside a doubled quote
    let k = 0;
    while (k < s.length) { let e = Math.min(s.length, k + 200); while (e < s.length && (s.slice(k, e).match(/"/g) || []).length % 2) e++; out.push(`s = s & "${s.slice(k, e)}"`); k = e; }
    out.push(`Call AddEq(s, ${q(label)})`);   // i18n-ignore: VBA macro text
    return [out];
  }
  chunked('AddGlobals', 'global variables (before any feature: equations use them)', globLines.length ? globLines : ["' (none)"], ['Dim s As String']);   // i18n-ignore: VBA macro text
  chunked('AddEquations', 'equations on dimensions (after the features they drive)', eqLines.length ? [...eqLines, 'Call EvalEquations'] : ["' (none)"], ['Dim s As String']);   // i18n-ignore: VBA macro text
  proc('EvalEquations', 'solve every equation once', ['Set swEqMgr = swModel.GetEquationMgr', 'k = swEqMgr.EvaluateAll'], ['Dim swEqMgr As Object', 'Dim k As Long']);   // i18n-ignore: VBA macro text

  // ---------------------------------------------------------------- rollback, finish, main

  const fin = [];
  const built = part.rollback === null || part.rollback === undefined ? part.features.length : Math.min(part.rollback, part.features.length);
  if (built < part.features.length) {
    const first = part.features.slice(built).find((g) => carried.has(g.id));
    if (first) {
      fin.push('Call swModel.ClearSelection2(True)', `If SelKey(${q(first.id)}, False, 0) Then`, '    ok = swModel.EditRollback', `    Call Note("Done    rollback bar above ${cp1252(swNames.get(first.id))}, as in PartCraft")`, 'End If');   // i18n-ignore: VBA macro text
    } else note(t('xch.swm.note.rollback'));
  }
  const vol = ctx.regen?.stats?.volume;
  fin.push('Call swModel.ClearSelection2(True)', 'ok = swModel.ForceRebuild3(False)', 'Call swModel.ViewZoomtofit2');
  if (Number.isFinite(vol) && checksOn) {
    fin.push('Set mProp = swExt.CreateMassProperty', 'If Not mProp Is Nothing Then',   // i18n-ignore: VBA macro text
      `    v = mProp.Volume * 1000000000#`,
      `    summary = "Volume in SolidWorks: " & Format(v, "0.000") & " mm3; in PartCraft: ${n(vol)} mm3"`,
      `    If Abs(v - ${n(vol)}) <= 0.0001 * ${n(vol)} Then`,
      '        summary = summary & " (the same)."',
      '    Else',
      '        summary = summary & " (different: see the log)."',
      '    End If',   // i18n-ignore: VBA macro text
      '    Call Note(summary)',   // i18n-ignore: VBA macro text
      'End If');   // i18n-ignore: VBA macro text
  }
  fin.push('Call swApp.SetUserPreferenceToggle(swInputDimValOnCreate, gDimToggle)', `Call WriteLog(${q(name + ' macro log.txt')})`,   // i18n-ignore: VBA macro text
    `MsgBox "PartCraft: " & gOk & " steps done, " & gBad & " failed, " & gCheck & " checked against PartCraft's body." & vbCrLf & summary & vbCrLf & vbCrLf & "This macro has not been tested in SolidWorks. The log (${cp1252(name)} macro log.txt, next to the macro) lists every step.", vbInformation, "PartCraft macro"`);   // i18n-ignore: VBA macro text
  proc('FinishUp', 'rollback bar, rebuild, the final volume check, the log', fin, ['Dim mProp As Object', 'Dim v As Double', 'Dim ok As Boolean', 'Dim summary As String'], false);   // i18n-ignore: VBA macro text

  const main = [
    'Sub main()',   // i18n-ignore: VBA macro text
    '    Dim tpl As String',   // i18n-ignore: VBA macro text
    '    Dim ok As Boolean',   // i18n-ignore: VBA macro text
    '    Set swApp = Application.SldWorks',
    '    Set swMath = swApp.GetMathUtility',
    '    tpl = swApp.GetUserPreferenceStringValue(swDefaultTemplatePart)',
    '    Set swModel = swApp.NewDocument(tpl, 0, 0, 0)',
    '    If swModel Is Nothing Then',   // i18n-ignore: VBA macro text
    '        MsgBox "PartCraft: SolidWorks could not make a new part from the default part template (" & tpl & "). Set one in Tools > Options > Default Templates, then run this macro again.", vbExclamation, "PartCraft macro"',
    '        Exit Sub',   // i18n-ignore: VBA macro text
    '    End If',   // i18n-ignore: VBA macro text
    '    Set swExt = swModel.Extension',
    '    Set swSkMgr = swModel.SketchManager',
    '    Set swFeatMgr = swModel.FeatureManager',
    '    Set swSelMgr = swModel.SelectionManager',
    '    ReDim gKeys(1 To 256)',
    '    ReDim gObjs(1 To 256)',
    '    ReDim gNumK(1 To 64)',
    '    ReDim gNumV(1 To 64)',
    '    gN = 0',
    '    gNN = 0',
    `    gLog = ${q(`${name}: PartCraft macro log (${opts.date || new Date().toISOString().slice(0, 10)}). ${FORMAT_NOTE}`)} & vbCrLf`,   // i18n-ignore: VBA macro text
    '    gDimToggle = swApp.GetUserPreferenceToggle(swInputDimValOnCreate)',
    '    Call swApp.SetUserPreferenceToggle(swInputDimValOnCreate, False)',   // i18n-ignore: VBA macro text
    '    ok = swExt.SetUserPreferenceInteger(swUnitSystem, swDetailingNoOptionSpecified, swUnitSystem_MMGS)',
    '    ok = swExt.SetUserPreferenceInteger(swUnitsLinear, swDetailingNoOptionSpecified, swMM)',
    '    Call AddGlobals',
    ...steps.map((s) => `    Call ${s}`),   // i18n-ignore: VBA macro text
    '    Call AddEquations',
    '    Call FinishUp',
    'End Sub',   // i18n-ignore: VBA macro text
  ];

  // ---------------------------------------------------------------- assemble
  const stats = {
    features: part.features.length, carried: [...carried].length, skipped: [...skipped].length, vars: nVars, equations: nEqs, checks,
    procedures: procs.length + 1,
  };
  const header = [
    `' ${name}.swb - a macro for SolidWorks written by PartCraft (getcadcraft.com), ${opts.date || new Date().toISOString().slice(0, 10)}.`,   // i18n-ignore: VBA macro text
    "' Run it in SolidWorks with Tools > Macro > Run and pick this file. It makes a new part from the default part",
    `' template, sets millimetres and builds ${name} natively: ${stats.carried} of ${stats.features} features with their sketches,`,   // i18n-ignore: VBA macro text
    `' relations and dimensions, ${nVars} global variable${nVars === 1 ? '' : 's'} and ${nEqs} equation${nEqs === 1 ? '' : 's'}. Each step logs what happened; a summary shows at the end.`,   // i18n-ignore: VBA macro text
    `' ${FORMAT_NOTE}`,
    "' The SolidWorks API takes metres and radians: every number below is in metres (sketch points in model coordinates,",   // i18n-ignore: VBA macro text
    "' turned into sketch coordinates as each sketch opens).",   // i18n-ignore: VBA macro text
    ...(notes.length ? ["'", "' Notes:", ...notes.map((s) => `'   - ${cp1252(s)}`)] : []),
    '',
  ];
  const all = [...header, ...library(), '', ...main, '', ...procs.flatMap((p) => [...p.lines, ''])];
  // lines over the limit cannot happen with the generator above; refuse rather than write a broken macro
  for (const l of all) if (l.length > MAX_LINE) throw new Error(t('xch.swm.line_too_long', { n: l.length }));
  const text = all.map(cp1252).join('\r\n') + '\r\n';
  return { text, notes, stats };
}

// small 2D helpers
const norm2 = (a) => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
function intersect2(p, u, q2, v) {
  const d = u[0] * v[1] - u[1] * v[0];
  if (Math.abs(d) < 1e-12) return null;
  const t = ((q2[0] - p[0]) * v[1] - (q2[1] - p[1]) * v[0]) / d;
  return [p[0] + u[0] * t, p[1] + u[1] * t];
}
