---
title: Eksportimi për printim, STEP dhe DXF
summary: Eksporto pjesën si STL ose 3MF për printim 3D, si trup STEP të saktë për programe të tjera CAD dhe CAM, dhe një skicë ose një sipërfaqe të sheshtë si DXF për prerje me lazer dhe me ujë.
keywords: eksporto, ruaj si, ifc, bim, grupe vetish, stl, 3mf, printim 3D, slicer, step, stp, step i saktë, b-rep, ap242, ap214, cam, punëtori makinerish, frezim, dxf, lazer, prerje me ujë, cnc, model i sheshtë, profil, rrjet, me facetë
from: e1de71d5
---

Eksportet janë kopje në formate të tjera. Mbaje edhe skedarin `.partcraft.json`: është i vetmi skedar që PartCraft mund ta hapë përsëri dhe ta modifikojë.

Të gjitha eksportet punojnë mbi pjesën që shfaqet në ekran, në milimetra. Në një montim, STL, 3MF, STEP dhe Vizatimi (PDF) eksportojnë të gjithë montimin: shih [Lista e pjesëve, pamjet e shpërbërë dhe pjesët në lëvizje](topic:assembly-bom-explode). Nëse nuk ka ende trup të ngurtë: "Nuk ka ende trup të ngurtë për eksportim."

## Për printim 3D: STL ose 3MF

1. Opsionale: për sipërfaqe të lakuara e të rrumbullakëta, kliko hapësirën bosh që asgjë të mos jetë e zgjedhur dhe cakto **Kurbat** në **E imët (128 për rrotullim)** ose **Shumë e imët (256 për rrotullim)** në panelin e djathtë. STL dhe 3MF janë gjithmonë të përbërë nga trekëndësha.
2. Zgjidh {{ui:Eksporto}}, pastaj {{ui:STL, për printim 3D}} ose {{ui:3MF, për printim 3D}}.
3. Skedari shkarkohet. Shiriti i statusit thotë, për shembull, "Eksportuar Part1.stl (binar, mm, Z lart, 1536 trekëndësha)."

Të dy formatet janë **Z lart**, siç presin printerët dhe slicer-at. Bota e PartCraft është Y lart, prandaj eksportimi e rrotullon pjesën: ajo që tregon lart në PartCraft (pingul me planin Top) tregon lart edhe në slicer, dhe një pjesë e skicuar në planin Top shtrihet e sheshtë mbi shtratin. Vendos orientimin përfundimtar në slicer, nëse nevojitet.

3MF është një format më i ri dhe më i vogël, që slicer-at e lexojnë me njësitë e përfshira. Përdor STL nëse një program nuk pranon 3MF.

Për të kontrolluar së pari që pjesa është e mbyllur, që përshtatet në shtratin e printerit dhe që qëndron mbi një faqe të sheshtë, përdor {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}: shih [Përgatit një pjesë për printim 3D](topic:print-3d).

## Për programe të tjera CAD: STEP

Zgjidh {{ui:Eksporto}}, pastaj {{ui:STEP AP242 (trup i saktë i ngurtë)}}. Ai e shkruan pjesën si një trup të vetëm të saktë, në milimetra, të rrotulluar në Z lart. Sipërfaqet e rrumbullakëta shkruhen si cilindra, konet, sfera dhe torë të vërtetë, me rrethe të vërteta për skajet e tyre, kështu që programi tjetër mund ta njohë një vrimë si vrimë. Një trup i hapur nga një skedar STEP ruan sipërfaqet e sheshta, cilindrat, konet, sferat dhe torët e atij skedari, kështu që edhe ato dalin të sakta. Sipërfaqet pa një sipërfaqe të tillë (ana e një spline-i, një filetim i modeluar, një trup nga një rrjet STL, OBJ ose 3MF, spline-i i një skedari STEP, sipërfaqet e zgjatura dhe të rrotulluara) mbeten facetë të sheshta në të njëjtin trup, dhe shiriti i statusit tregon sa janë. Shiriti i statusit thotë, për shembull, "Eksportuar Flange.step (AP242, trup i saktë i ngurtë, mm, Z lart): 14 sipërfaqe në sipërfaqet e tyre të vërteta (10 cilindrike, 1 konike, 0 sferike, 0 torike), 0 kurba skajesh të përshtatura." Ai përmban vetëm trupin: pa historik, pa skica, pa vizatim. Nëse programi tjetër lexon vetëm AP214, zgjidh {{ui:STEP AP214 (trup i saktë i ngurtë)}}: i njëjti trup në skemën më të vjetër.

Çfarë është e saktë dhe çfarë nuk është:

- Sipërfaqet e sheshta, cilindrat (vrima, përforcime, rrumbullakime mbi skaje të drejta), konet (vrima konike, konicitete), sferat dhe torët janë të sakta, dhe të tilla janë edhe skajet e tyre të drejta, rrethore dhe elipsore. Cilësimi **Kurbat** nuk i ndryshon.
- Aty ku dy sipërfaqe të rrumbullakëta kryqëzohen (një vrimë e shpuar tërthor në një bosht), skaji është një kurbë e lëmuar e përshtatur te të dyja sipërfaqet me saktësi 0,00001 mm; "kurba skajesh të përshtatura" i numëron ato.
- Një zgavër e mbyllur brenda pjesës shkruhet si boshllëk i trupit. Disa trupa të veçuar shkruhen si disa trupa të ngurtë.
- Një montim nuk shkruhet ende si STEP i saktë: eksporto çdo pjesë veç e veç.

Ajo është kontrolluar duke lexuar skedarët përsëri në OpenCascade, që raporton trupa të ngurtë të vlefshëm me vëllime të llogaritura me dorë. Nuk është hapur ende në çdo program CAD ose CAM; nëse një program refuzon një skedar, {{ui:STEP (me facetë, kernel rrjeti)}} e shkruan të njëjtën formë si sipërfaqe të sheshta (në boshtet e vetë PartCraft, Y lart), dhe të lutemi na e thuaj përmes {{ui:Ndihmë}} › {{ui:Raporto një problem}}.

Për punime me makinë, hapësira Manufacture e shkruan gjithashtu trupin e saktë në koordinatat e punës së setup-it: shih [Bëj shtigje veglash dhe G-code](topic:manufacture#exact-step-for-the-shop).

## Për programe BIM: IFC me çdo veti

Zgjidh {{ui:Eksporto}}, pastaj {{ui:IFC 4 (me çdo veti)}}. Ai e shkruan pjesën si element IFC 4 për modelet e ndërtesave dhe të instalimeve, me formën e saj si trekëndësha (Z lart, milimetra), dhe me atë që di PartCraft për të si grupe vetish:

| Grupi i vetive | Përmban |
|---|---|
| **PartCraft_Part** | Emrin, materialin dhe dendësinë e tij, konfigurimin aktiv, sa trupa ka; në një montim edhe numrin e pjesës dhe përshkrimin |
| **PartCraft_Parameters** | Çdo parametër i pjesës me vlerën e tij; shprehja e një formule dhe një shënim janë në përshkrimin e vetisë |
| **PartCraft_TitleBlock** | Fushat e bllokut të titullit të vizatimit që ke plotësuar (titulli, numri i vizatimit, revizioni, kompania, hartuar, kontrolluar dhe miratuar nga, data, sipërfaqja e përfundimit, toleranca e përgjithshme) dhe madhësia e fletës |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Vëllimi, sipërfaqja, masa (me një material) dhe madhësia e përgjithshme |

Materiali bashkohet si material IFC, dhe numri i vizatimit është etiketa e elementit. Në një montim, çdo pjesë shkruhet një herë si tip që mban vetitë e veta, dhe çdo kopje vendoset aty ku e vendos montimi, me vlerat e veta në **PartCraft_Instance**: emrin, numrin e artikullit në listën e materialeve dhe nëse është pjesa e fiksuar në tokë.

## Për profile lazeri, me ujë ose CNC: DXF

Dy lloje DXF, të dy në versionin R12, që çdo program CAD dhe CAM e hap:

### Një skicë

1. Zgjidh skicën në historik (ose hape).
2. Zgjidh {{ui:Eksporto}}, pastaj {{ui:DXF i skicës ose i sipërfaqes së sheshtë}}. (Paneli i djathtë i skicës ka gjithashtu {{ui:Eksporto si DXF}}.)

Merr `<pjesa> - <skica>.dxf` në koordinatat e vetë skicës: vija, harqe dhe rrethe të vërtetë në shtresën **PROFILE**, gjeometria e ndërtimit në **CONSTRUCTION**, pikat e lira në **POINTS**.

### Një faqe e sheshtë e trupit

1. Kliko një faqe të sheshtë në pamje (për shembull sipërin e një pllake me vrima).
2. Zgjidh {{ui:Eksporto faqen si DXF}} në panelin e djathtë, ose {{ui:Eksporto}}, pastaj {{ui:DXF i skicës ose i sipërfaqes së sheshtë}}.

Merr `<pjesa> - face.dxf`: konturin e faqes dhe çdo vrimë në të. Një vrimë e rrumbullakët (një rreth i plotë aty ku një cilindër takon faqen: një vrimë e shpuar, ose një vrimë e një skedari STEP të hapur) shkruhet si rreth i vërtetë me qendrën dhe rrezen e vet. Çdo kontur tjetër është një polivijë e mbyllur, dhe skajet e tij të rrumbullakëta (kthesat e filetuara, prerjet, harqet) janë facetat e tyre, prandaj vendos **Kurbat** në E imët së pari nëse prerësi i ndjek nga afër. Shiriti i statusit tregon sa janë konturet, sa prej tyre janë rrethe të vërteta, dhe sipërfaqja e faqes.

Nëse nuk është zgjedhur as një skicë, as një faqe e sheshtë: "Hap ose zgjidh një skicë, ose kliko një faqe të sheshtë, për të eksportuar DXF."

## Një vizatim

Vizatimi PDF ka udhëzuesin e vet: [Bëj një fletë vizatimi](topic:drawing-pdf).

## Formatet që nuk janë të disponueshme

glTF, OBJ, IGES dhe Parasolid nuk eksportohen në këtë version. DWG shkruhet vetëm nga paketa e variantëve, si fletë vizatimi: shih [Bëj një paketë variantësh nga konfigurimet e tua](topic:variant-pack). Shih [Formatet e skedarëve](topic:file-formats).
