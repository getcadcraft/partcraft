---
title: Opna, vista og flytja út skrár
summary: Hluta- og samsetningarskrárnar sem PartCraft opnar og vistar, öll útflutningssnið og hvað þau geyma, hvar skrárnar eru og hvað breytist án nettengingar eða milli vafra.
keywords: opna, vista, flytja út, sækja, skrá, partcraft.json, samsetningarskrá, stl, 3mf, step, dxf, pdf, hvar eru skrárnar mínar, án nettengingar, vista sem
from: c15c2c48
---

PartCraft vinnur með skrár á tölvunni þinni. Það sendir aldrei hluta upp, og þar kemur ekkert aðgangskerfi eða skýjageymsla við sögu. Skýjavistun er ekki í boði enn.

## Það sem PartCraft opnar

| Skrá | Viðskeyti | Hvernig |
|---|---|---|
| Hlutur í PartCraft | `.partcraft.json` | {{ui:Opna}}, {{key:Mod+O}}, eða slepptu henni á þrívíddarskjáinn |
| Samsetning í PartCraft | `.partcraft-asm.json` | Eins: PartCraft sér hvaða tegund hún er |
| STEP-fast efni | `.step`, `.stp` | Fast efnishlutur lesinn sem þríhyrningar: [Opna STEP-skrá og byggja ofan á hana](topic:import-step) |

STL-, OBJ- og 3MF-möskvar opnast líka sem föst efnishlutir ([Opna STL, OBJ eða 3MF](topic:open-meshes)), og það gera `.3dm`-skrár líka ([Opna .3dm-líkan](topic:open-3dm-files)). DXF, IGES og aðrar hlutaskrár annarra forrita er ekki hægt að opna (sjá [Það sem er ekki tilbúið enn](topic:not-built-yet)).

Reglur við opnun:

- Skráarheiti hlutar eða samsetningar verður að enda á `.json`, og skráin má ekki vera stærri en 50 MB.
- Skrár eru athugaðar áður en nokkuð birtist. Skemmd eða breytt skrá er ekki opnuð og fær skýra ástæðu, til dæmis „Þetta er ekki PartCraft-skrá.“
- Skrá sem var vistuð með nýrri útgáfu PartCraft er ekki opnuð: „Þessi skrá var vistuð með nýrri PartCraft (skráarútgáfa 3); þessi útgáfa les útgáfu 2.“ Eldri skrár opnast.
- Ef hluturinn á skjánum hefur óvistaðar breytingar spyr PartCraft fyrst: {{ui:Hætta við}}, {{ui:Henda breytingum}} eða {{ui:Vista fyrst}}.

## Vistun

{{ui:Vista}} eða {{key:Mod+S}} vistar það sem er á skjánum:

- Á hlut: `<heiti hlutar>.partcraft.json`, með allri sögunni (skissur, tengsl, víddir, eiginleikar og staðsetning þegar rúllað er til baka), og hlutum teikniblaðsins: snið, smáatriði og GD&T-athugasemdir, auk alls texta úr STEP-föstu efni sem var flutt inn í fyrri útgáfu. Eiginleikar sem þessi útgáfa getur ekki smíðað eru vistaðir óbreyttir. Fasta efnið sjálft er ekki geymt; PartCraft smíðar það aftur úr sögunni þegar skráin er opnuð.
- Í samsetningu: `<heiti samsetningar>.partcraft-asm.json`, með **öllum hlutunum inni í henni**. Ein skrá geymir alla samsetninguna, svo þú getur sent hana eina sér.

Vistun er **niðurhal**. Vafrinn setur skrána í niðurhalsmöppuna sína, eða spyr hvar hún á að vera ef þú hefur stillt hann þannig. Ef þú vistar aftur býr hann til nýtt niðurhal; vafrinn gæti nefnt það `Part1 (1).partcraft.json` í stað þess að skipta um gömlu skrána. Endurnefndu eða færðu skrár í {{pick:mac=Finder|windows=File Explorer|linux=skráastjórinn þinn}} eins og þér hentar.

Stafir í heiti hlutar sem eru hvorki bókstafir, tölustafir, bil, `_`, `.` né `-` verða að `_` í skráarheitinu.

:::tip
Flestir vafrar hafa stillingu sem spyr hvar hvert niðurhal á að vera. Kveiktu á henni ef þú vilt velja „Vista sem“ í hvert skipti: í Chrome og Edge er hún undir Downloads í stillingunum; í Firefox undir General, Files and Applications; í Safari undir General, File download location.
:::

Meira um hvert niðurhöl fara og hvernig þú heldur skrám öruggum: [Hvar skrárnar þínar eru](common:your-files).

## Útflutningur

Valmyndin {{ui:Flytja út}} skrifar önnur snið. Hvert er niðurhal, nefnt eftir hlutnum.

| Valmyndaratriði | Skrá | Hvað er í henni |
|---|---|---|
| {{ui:STL, fyrir þrívíddarprentun}} | `<heiti>.stl` | Binary STL af þríhyrningum fasta efnisins, millímetrar, **Z upp** |
| {{ui:3MF, fyrir þrívíddarprentun}} | `<heiti>.3mf` | 3MF með föstu efninu sem einum hlut, millímetrar, **Z upp** |
| {{ui:STEP AP242 (exact solid)}} | `<heiti>.step` | Ekki tilbúið í þessari útgáfu (grátt): það þarf nákvæman kjarna |
| {{ui:STEP AP214 (exact solid)}} | `<heiti>.step` | Ekki tilbúið í þessari útgáfu (grátt) |
| {{ui:STEP (faceted, mesh kernel)}} | `<heiti>.step` | Fast efni úr sléttum flötum úr möskvanum: **bogadregnir fletir eru margar litlar sléttar fasetur**. Millímetrar, á ásum PartCraft (Y upp). STEP-skráin til notkunar í öðrum CAD-forritum í þessari útgáfu |
| {{ui:DXF af skissunni eða sléttum fleti}} | `<heiti> - <skissa>.dxf` eða `<heiti> - face.dxf` | DXF R12. Skissa: línur, bogar, hringir og punktar í hnitakerfi skissunnar, á lögunum PROFILE, CONSTRUCTION og POINTS. Valinn sléttur flötur: útlínur hans sem lokaðar fjöllínur (bogadregnar brúnir sem fasetur) |
| {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}} | `<heiti> - drawing.pdf` | A3-teikniblaðið: þrjú útlit, ísómetrísk mynd, snið og smáatriði ef þau eru stillt, heildarstærðir, GD&T-tákn og titilreitur |

:::note
{{ui:STEP AP242 (exact solid)}} og {{ui:STEP AP214 (exact solid)}} eru ekki tilbúin í þessari útgáfu: notaðu {{ui:STEP (faceted, mesh kernel)}}. Það hefur rétta lögun og rúmmál, en sérhver bogaður flötur er margir litlir fletir, svo önnur forrit geta ekki valið gat sem sívalning. Stilltu **Ferla** fínni fyrst ef það skiptir máli.
:::

- Útflutningar eru af hlutnum á skjánum. Útflutningur er óvirkur í samsetningu; það er enginn útflutningur á samsetningu enn.
- STL, 3MF, fasetað STEP og DXF af fleti eru alltaf gerð úr fasetum. Stillingin **Ferlar** (í hægra spjaldinu þegar ekkert er valið) ákvarðar hversu fín þau eru, frá 32 til 256 fasetur á hring. Veldu Fínt eða Mjög fínt áður en þú flytur út STL eða 3MF fyrir slétta prentun.
- PDF-teikningin notar innbyggða Helvetica-letrið í lesaranum. Stafir sem hann getur ekki sýnt eru prentaðir sem „?“.

Skref fyrir skref: [Flytja út til prentunar, STEP og DXF](topic:export-files) og [Búa til teikniblað](topic:drawing-pdf).

## Óvistað efni

- PartCraft geymir endurheimtarafrit af opna hlutnum eða samsetningunni í þessum vafra skömmu eftir hverja breytingu, svo að hrun eða lokaður flipi tapi ekki vinnunni: næst þegar þú opnar PartCraft spyr það „Endurheimta vinnuna þína?“. Það er ekki vistun: vistaðu í skrá til að halda vinnunni. Sjá [Endurheimta óvistaða vinnu](common:recover).
- Ef þú reynir að loka flipanum eða endurhlaða með óvistuðum breytingum spyr vafrinn „Yfirgefa síðuna?“. Það er gluggi vafrans sjálfs; PartCraft getur ekki breytt orðalaginu.
- {{ui:Nýtt}}, {{ui:Opna}} og það að {{ui:Loka}} samsetningu spyrja áður en óvistuðum breytingum er hent.

## Á netinu og án nettengingar

Allt gerist á tölvunni þinni: möskvakjarninn (WebAssembly-forrit) er sóttur með forritinu og smíðar rúmfræðina á staðnum, og skrár eru lesnar af og skrifaðar á diskinn þinn. Engin hlutagögn fara um netið. Sjá [Möskvakjarninn](topic:solid-kernels).

Til að vinna án nokkurrar tengingar skaltu vista PartCraft til notkunar án nettengingar meðan þú ert á netinu: veldu {{ui:Vista til notkunar án nettengingar}} í forritastikunni og bíddu á meðan það telur („Vistar 40 af 212“) þar til það segir **Tilbúið án nettengingar**. Vistaða afritið inniheldur 3D-safnið og möskvakjarnann, svo eftir það virka líkanagerð, vistun, allur útflutningur og teikningar án nettengingar. Ef það segir **Ekki tókst að vista**, smelltu til að reyna aftur meðan þú ert á netinu; **Ekki tiltækt án nettengingar** þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur). Þegar afritið er vistað býður smellur á **Tilbúið án nettengingar** upp á {{ui:Vista aftur (sækja nýjustu útgáfu)}} og {{ui:Fjarlægja afritið án nettengingar}}. Nánar: [Vinna án nettengingar](common:offline).

:::online
Þú ert á netinu. Jafnvel án þess að vista til notkunar án nettengingar getur þú haldið áfram að vinna, þegar PartCraft hefur hlaðist og stöðustikan sýnir „Möskvakjarni“, ef tengingin rofnar. Endurhlaðaðu bara ekki síðuna fyrr en þú ert aftur á netinu.
:::

:::offline
Þú ert án nettengingar. Ef PartCraft er þegar opið, haltu áfram að vinna; vistun og útflutningur virka enn. Ef forritastikan sýnir **Tilbúið án nettengingar** opnast PartCraft líka frá grunni án tengingar; annars skaltu ekki endurhlaða þessum flipa.
:::

## Munur milli vafra

- **Niðurhal.** Hver vafri hefur sína niðurhalsmöppu og sína leið til að spyrja. Ef vafri spyr hvort þessi síða megi sækja skrár skaltu leyfa það, annars geta vistun og útflutningur ekki virkað.
- **Dragðu og slepptu** skrá á skjáinn virkar í Chrome, Edge, Firefox og Safari.
- **Skrár úr síma eða spjaldtölvu.** Á iPhone og iPad sýnir Opna Files-forritið; vistaðar skrár fara í Files, Downloads. Á Android fara þær í niðurhalsmöppuna.

Það er enginn munur á því hvað skrárnar innihalda milli vafra eða stýrikerfa.
