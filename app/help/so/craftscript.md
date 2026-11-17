---
title: Qor oo socodsii scripts-ka (Goobta Script)
summary: Goobta Script tallaabo-tallaabo: qor script CraftScript ama Lua, socodsii F5, akhri console-ka, kaydi natiijooyinka doorsoomayaasha script xiga, muuji meshes, fields iyo plots, jooji socodka, iyo kaydi scripts-ka qaybta.
keywords: script, scripting, qorista script, muuqaal iyo naqshadeyn, pop out, shaashad labaad, second monitor, param, params, halbeegyada scripts-ka, CraftScript, Lua, code, program, editor, console, REPL, command line, run, F5, run selection, stop, doorsoomayaal, workspace, plot, field, mesh, legend, sub-display, falanqayn, analysis, otomaatig, matrikis, xisaab
from: d0003e89
---

**Horumar.** Scripting waa cusub PartCraft 0.3 waana horumar (preview): luqadda, maktabadda iyo habka scripts-ka loo kaydiyo ayaa wali isbeddeli kara, scripts-ka hadda la qorayo waxa laga yaabaa in ay u baahdaan wax yar oo wax ka beddelid mustaqbalka. Noo sheeg wixii jabay.

Goobta Script waxay socodsiisaa xisaabtaada adigu naftaadu qortay dhinaca qaybta: xisaabo yar yar, falanqayn oo dhan, ama scripts-ka [maktabadda falanqaynta](topic:craftscript-library). Scripts-ka waxa lagu qori karaa **CraftScript** (luqad matrikis ah oo u eg MATLAB, eeg [Luqadda CraftScript](topic:craftscript-language)) ama **Lua** (eeg [Scripts-ka Lua](topic:craftscript-lua)) ama **Python** (eeg [Scripts-ka Python](topic:craftscript-python)).

Dooro **Script** sanduuqa **Goobta shaqada** ee bidix ee toolbar-ka. Qaybta lama beddelo. Panel-ka midig wuxuu noqdaa panel script (ka ballaaran caadiga; jiid geeskiisa si aad u beddesho, ama u dhaqaaq shaashad labaad menu-ga {{ui:⋯}}, eeg [Habaynta panels-ka](common:arrange-panels)).

## Script inta aad moodelinayso

Ma aha inaad ka baxdo goobta Design si aad script u qorto. Design, tab-ka {{ui:Script}} ee panel-ka midig wuxuu haystaa isla editor-ka, console-ka, doorsoomayaasha iyo maktabadda, isla scripts-ka. Feature tree-ga iyo muuqaalku way sii shaqeeyaan: guji feature si aad u doorato, laba jeer guji sketch si aad u tafatirto, rari muuqaalka, kadibna ku noqo tab-ka {{ui:Script}} oo riix {{key:F5}}.

Waxa script-ku **muujiyo** (meshes, fields, plots, miisaska) lama sawirayo moodelkaaga Design: console-ku wuu sheegaa taas, goobta Script ayaa wax walba haysa markaad u beddesho.

{{ui:Ka soo bax}}, oo ku taal dhinaca {{ui:Socodsii}}, wuxuu panel-ka oo dhan u raraa daaqad gaar ah, tusaale ahaan shaashad labaad, si editor-ka iyo muuqaalka buuxa ay isku dhinac ugu jiraan. {{ui:Ku celi}} wuu dib u dhigaa.

## Socodsii scriptkaaga ee ugu horreeya

1. Ku qor editor-ka, tusaale ahaan:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Riix {{key:F5}} (ama {{ui:Socodsii}}). Console-ka hoos ku yaal editor-ka wuxuu muujinayaa waxa script-ku daabacay, iyo "Done in … s". Plot-ka wuxuu ka muuqdaa **sub-displays** ee hoose ee muuqaalka 3D.
3. Sadar aan semicolon lahayn ayaa qiimihiisa daabacda, sida MATLAB: `a = 3` wuxuu daabacaa `a = 3`; `a = 3;` ma daabacayo wax.
4. Si aad u socodsiiso qayb keliya script-ka, xulo sadarada oo riix {{key:Mod+Enter}} ({{ui:Xulashada}}). Haddii wax aan la xulan, wuxuu socodsiiyaa sadarka uu cursor-ku ku yaal.
5. Sadarka hoose ee console-ka (ka dib `>>`) wuxuu socodsiiyaa hal bayaan markaad riixdo {{key:Enter}}. {{key:Up}} iyo {{key:Down}} waxay soo celinayaan sadarro hore.

## Raadi, xidh iyo dhammaystir

- **Raadi oo beddel.** Riix {{key:Mod+F}} (ama {{key:Mod+H}} si aad u beddesho). Bar ayaa furmaa kor ku yaal code-ka: ku qor waxa aad raadinayso; isku-mid-ka ayaa iftiimaya, tiradu waxay sheegaysaa halka aad joogto. Badhamada sanduuqa ag ku yaal waxay isku-xarafka (**Aa**) u dhigan yihiin, kelmadaha oo keliya (**W**) raadiyaan, iyo regular expression (**.\***; beddelka, `$1` wuxuu soo celinayaa waxa kooxda koowaad ay ku dhigtay). {{ui:Beddel}} wuxuu beddelaa isku-mid-ka hadda, {{ui:Dhammaan}} wuxuu beddelaa isku-mid kasta hal tallaabo oo {{key:Mod+Z}}.
- **Xidhid.** Guji ▾ ee ku dhow lambarka sadarka, ama riix {{key:Mod+Shift+[}} marka cursor-ku ku yaal sadarka `function`, `if`, `for`, `while`, `switch` ama `try` (Lua: `function`, `do`, `if`, `repeat`), si ay u xidhaan sadarradooda gudaha; sadarku wuxuu sheegayaa inta sadar ah. ▸ ama {{key:Mod+Shift+]}} ayaa dib u furaa. Xidhidku wuxuu kaliya qariyaa sadarrada: Run, Save, koobiyeynta iyo lambarada sadarrada weli way tiraan dhammaanba, iyo qorista sadar xidhan ayaa marka hore furta.
- **Dhammaystir.** Qor laba xaraf oo magac ah, ama riix {{key:Mod+Space}}: liis ayaa soo bixi doorsoomayaasha aad leedahay, functions-ka luqadda (oo leh argumentsyadooda), ereyada furaha, iyo magacyada horey loogu qoray script-ka. Dooro fallaadhaha, kadibna riix {{key:Enter}} ama {{key:Tab}}.

## Marka wax khaldamo

- Khalad wuxuu magacaabaa dhibaatada iyo sadarkeeda: sadarka wuxuu ku yaal midab cas editor-ka, **Line n** console-ka wuxuu kugu geynayaa halkaas.
- Wareeg aan dhammaadka lahayn: riix {{ui:Jooji}} (toolbar ama panel). Script-ku isla markiiba wuu joogsadaa; doorsoomayaashu waxay ilaaliyaan qiimihii ay lahaayeen socodkii ka horreeyay.
- Socod kasta wuxuu sidoo kale leeyahay miisaaniyad tallaabooyin (2 bilyan tallaabo caadi ahaan; beddel **Run options** panel-ka). Socod gudbiya miisaaniyadda wuu joogsadaa oo fariin ayuu soo bandhigaa.

## Doorsoomayaashu waxay ka soo wareegaan script ilaa script

Script kasta oo doorsoome sare sameeyo wuxuu ku dhacaa tab-ka **Doorsoomayaasha** (magac, nooc, cabbir, qiimaha ugu yar iyo ugu weyn) wuxuuna halkaas ku sii jiraa script-ka xiga, luqad kasta. Taasi waa sida hal script u sameeyo mesh, kan xiga uu xalliyo, kan saddexaad uu plot sameeyo.

- Guji doorsoome si aad u muujiso: meshes, fields iyo models muuqaalka 3D, arrays miis ahaan (iyo plot xariiq ah vector-ka ama colour map matrikiska) sub-displays-ka.
- {{ui:Kaydi sida JSON}}, {{ui:Kaydi sida CSV}} (miis tirooyin) iyo {{ui:Kaydi sida HDF5}} waxay soo dejiyaan; {{ui:Tirtir}} wuu ka saaraa; {{ui:Nadiifi dhammaan}} wuxuu banaanaynayaa workspace-ka.
- Calaamadi **Kaydi doorsoomayaasha qaybta** si aad u kaydiso qaybta (ilaa 32 MB; kuwa ka weyn ayaa ku sii jira booqashadan keliya). Marka aad furto qayb noocaas ah, panel-ku wuxuu kugu soo bandhigaa inaad soo rarto.

## Meshes, fields iyo plots

- `show(m)` wuxuu sawiraa mesh; `show(f)` wuxuu midabeeyaa field mesh-kiisa legend-ka. Liiska **La muujiyay** ee kor-bidix ee muuqaalka ayaa qariya ({{ui:indhaha}}) ama ka saara shay kasta, iyo qarinta ama muujinta qaybta laftiisa. Hoosta legend-ka, ku qor xadka (**Laga bilaabo**, **ilaa**) ama riix {{ui:Otomaatig}}; vector ama field stress-ka ayaa sidoo kale bixiya component-ka la muujinayo.
- `show(f, 'deform', u, 'scale', 50)` wuxuu sawiraa mesh-ka lagu rarey field-ka barakaynta `u`, oo weyneeya 50 jeer (haddii `scale` la'aan, qiyaastii 8 % cabbirka moodelka).
- Guji mesh la muujiyay: node-ka ugu dhow, element-ka iyo qiimaha field-ka halkaas ayaa ka muuqda sub-displays-ka (**Picked**).
- `plot`, `imagesc` iyo `table` waxay dhigaan plot xariiq ah, colour map ee array 2-D ah, ama miis sub-displays-ka. Plot leh isla `'id'` (ama magac) sida mid hore u jiray wuu beddelaa, sidaas darteed wareeg wuxuu cusboonaysiin karaa hal plot isu-soo-dhowaanshaha; `'append', true` wuxuu curve ku daraa. {{ui:Nadiifi}} wuxuu banaanaynayaa sub-displays-ka; fallaadhadu waa wax ka qariya.
- Laba plot ama in ka badan, {{ui:Isku-dhinac}} wuxuu soo bandhigaa dhammaantood hal mar (kuwa ugu dambeeya lix); guji tab-ka miis ama sawir si aad mid kaliya u aragto mar kale.
- Plot kasta wuxuu hoosta leeyahay {{ui:PNG}}, {{ui:SVG}} iyo {{ui:CSV}}. PNG iyo SVG waxay daabacaan cadaan dusha ah midabkii waraaqda, mawduuc kasta ha ahaadeen (PNG 1600 × 1000 pixels; SVG wuu weynaadaa iyada oo aan muuqaalka lumin); CSV wuxuu hayaa tirooyinkiisa oo dhan digit kasta: hal tiir oo x iyo tiir kasta curve, haddii curves-ku wadaagaan x, haddii kale hal sadar halkii point, oo magaca curve-ka.
- {{key:F}} ama {{ui:Ku habee}} wuxuu muuqaalka ku habeeyaa waxa la muujiyay.

## Faylal

- {{ui:Fur}} kooxda Script (ama ka tuur faylal muuqaalka ama panel-ka): `.craft`, `.lua` iyo `.py` waxay u furmaan scripts cusub (ma socodsiiyaan); faylasha xogta (STL, OBJ, CSV, JSON, NPY, HDF5) waxay u soo galaan doorsoomayaasha magaca faylka ku yaal.
- {{ui:Kaydi}} kooxda Script wuxuu soo dejiyaa script-ka hadda jira sida fayl.
- {{ui:Cusub}} kooxda Script (ama {{ui:+}} ee tabs-ka) wuxuu bilaabaa script kale. Laba jeer guji tab si aad magac u beddesho; {{ui:×}} wuu ka saaraa (waad dib u noqon kartaa).

## Akhri halbeegyada qaybta

Script wuxuu akhriyaa halbeegyada qaybta (eeg [Qayb ku maamul halbeegyo](topic:parameters)) magac ahaan:

```
w = param('width');     % qiimaha hal halbeeg, mm (ama darajo, ama tiro caadi ah)
p = params();           % dhammaantood, sida struct: p.width, p.height
```

Lua iyo Python waxay yihiin `cs.param('width')` iyo `cs.params()`. Scripts-ku kaliya halbeegyada akhriyaan: beddelkooda tab-ka {{ui:Halbeegyada}}. Hoosta tab-ka script-ka, sadar ayaa liistaa halbeegyada uu akhrinayo `param('…')`, oo calaamadinaya kuwa qaybtu aanu lahayn; tab-ka {{ui:Halbeegyada}} wuxuu liistaa script-ka hoos ugu qoraa halbeeg kasta. Magac la dhisay socodka script-ka, sida `param(name)`, lama liisto.

## Scripts-ka waxa lagu kaydiyaa qaybta

Script kasta oo tabs-ka ku jira waxa lagu kaydiyaa qaybta, sidaas darteed {{ui:Kaydi}} kooxda File wuxuu kaydiyaa iyaga oo wata, isbeddelladooduna way dib u celin karaan. Furidda qayb **ma socodsiiso scripts-keeda**: console-ku wuxuu sheegaa inta ay leedahay, waxay socodaan kaliya markaad riixdo Run. Qayb ka timid qof kale wuxuu hayn karaa script kasta: akhri ka hor inta aadan socodsiin. Scripts-ku waxay ku socdaan background-ka kombiyuutarkan iyagoo aan shabakad lahayn, ma taabtaan bogga.

## Xiriir

- [Luqadda CraftScript](topic:craftscript-language)
- [Scripts-ka Lua](topic:craftscript-lua)
- [Scripts-ka Python](topic:craftscript-python)
- [Maktabadda falanqaynta](topic:craftscript-library)
- [Falanqayn adigu naftaadu samayso](topic:craftscript-own-analysis)
