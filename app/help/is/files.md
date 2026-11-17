---
title: Skrár: opna, vista og flytja út
summary: Hlutaskrárnar og samsetningarskrárnar sem PartCraft opnar og vistar, sérhvert útflutningssnið og hvað það geymir, hvar skrár eru geymdar og hvað breytist án nettengingar eða milli vafra.
keywords: opna, vista, flytja út, sækja, skrá, partcraft.json, samsetningarskrá, stl, 3mf, step, dxf, pdf, hvar eru skrárnar mínar, án nettengingar, vista sem
from: e5fbc7e3
---

PartCraft vinnur með skrár á tölvunni þinni. Það hleður aldrei upp hluta og enginn aðgangur eða skýjageymsla kemur við sögu. Vistun í skýinu er ekki í boði enn.

## Hvað PartCraft opnar

| Skrá | Ending | Hvernig |
|---|---|---|
| PartCraft hlutur | `.partcraft.json` | {{ui:Opna}}, {{key:Mod+O}}, eða slepptu henni á þrívíddarmyndina |
| PartCraft samsetning | `.partcraft-asm.json` | Eins: PartCraft sér hvers konar hún er |
| STEP fast efni | `.step`, `.stp` | Fast líkami lesinn sem þríhyrningar: [Opnaðu STEP-skrá og byggðu ofan á hana](topic:import-step) |

STL-, OBJ- og 3MF-möskvar opnast líka sem fast líkami ([Opnaðu STL, OBJ eða 3MF](topic:open-meshes)), og það sama gildir um `.3dm`-skrár ([Opnaðu .3dm-líkan](topic:open-3dm-files)). DXF, IGES og hlutaskrár annarra forrita er ekki hægt að opna (sjá [Hvað er ekki smíðað enn](topic:not-built-yet)).

Reglur við opnun:

- Heiti hluta- eða samsetningarskrár verður að enda á `.json`, og skráin verður að vera undir 50 MB.
- Skrár eru athugaðar áður en nokkuð er sýnt. Skemmd eða breytt skrá er hafnað með einfaldri ástæðu, til dæmis "Þetta er ekki PartCraft-skrá."
- Skrá sem var vistuð af nýrri PartCraft er hafnað: "Þessi skrá var vistuð af nýrri PartCraft (skrárútgáfa 3); þessi útgáfa les útgáfu 2." Eldri skrár opnast.
- Ef hluturinn á skjánum hefur óvistaðar breytingar spyr PartCraft fyrst: {{ui:Hætta við}}, {{ui:Henda breytingum}} eða {{ui:Vista fyrst}}.

## Vistun

{{ui:Vista}} eða {{key:Mod+S}} vistar það sem er á skjánum:

- Á hlut: `<part name>.partcraft.json`, öll sagan (skissur, tengsl, málsetningar, eiginleikar, staða afturrúllunar), snið-, smáatriða- og GD&T-athugasemdir teikningarblaðsins, og allur texti sérhvers STEP-fasts efnis sem var flutt inn í eldri útgáfu. Eiginleikar sem þessi útgáfa getur ekki smíðað eru vistaðir óbreyttir. Fasta efnið sjálft er ekki geymt; PartCraft smíðar það aftur úr sögunni þegar skráin opnast.
- Í samsetningu: `<assembly name>.partcraft-asm.json`, með **sérhverjum hluta inni í henni**. Ein skrá geymir alla samsetninguna, svo þú getur sent hana eina sér.

Vistun er **niðurhal**. Vafrinn þinn setur skrána í niðurhalsmöppuna, eða spyr hvar hún eigi að vera ef þú hefur stillt hann á að spyrja. Ef þú vistar aftur verður til nýtt niðurhal; vafrinn gæti nefnt hana `Part1 (1).partcraft.json` í stað þess að skipta út þeirri gömlu. Endurnefndu eða færðu skrár í {{pick:mac=Finder|windows=File Explorer|linux=skráastjórinn þinn}} eins og þú vilt.

Stafir aðrir en bókstafir, tölustafir, bil, `_`, `.` og `-` í heiti hlutarins verða `_` í skráarheitinu.

:::tip
Flestir vafrar hafa stillingu sem spyr hvar eigi að vista hvert niðurhal. Kveiktu á henni ef þú vilt valkostinn "Vista sem" í hvert skipti: í Chrome og Edge er hún undir Niðurhal í stillingunum; í Firefox undir Almennt, Skrár og forrit; í Safari undir Almennt, Staðsetning niðurhals skráa.
:::

Meira um hvert niðurhöl fara og hvernig má halda skrám öruggum: [Hvar skrárnar þínar eru](common:your-files).

## Útflutningur

Valmyndin {{ui:Flytja út}} skrifar önnur snið. Hver þeirra er niðurhal, nefnt eftir hlutanum.

| Valmyndaratriði | Skrá | Hvað er í henni |
|---|---|---|
| {{ui:STL, fyrir þrívíddarprentun}} | `<name>.stl` | Tvíundar STL af þríhyrningum fasta efnisins, millimetrar, **Z upp** |
| {{ui:3MF, fyrir þrívíddarprentun}} | `<name>.3mf` | 3MF með fasta efninu sem einum hlut, millimetrar, **Z upp** |
| {{ui:STEP AP242 (nákvæmt fast efni)}} | `<name>.step` | Eitt nákvæmt fast efni, millimetrar, Z upp: ávalir fletir sem sannir sívalningar, keilur, kúlur og tórusar. STEP-ið til að nota fyrir önnur CAD- og CAM-forrit |
| {{ui:STEP AP214 (nákvæmt fast efni)}} | `<name>.step` | Sama nákvæma fasta efnið í eldra AP214-skema |
| {{ui:STEP (facetað, möskvakjarni)}} | `<name>.step` | Fast efni úr sléttum flötum úr möskvanum: **ávalir fletir eru mörg lítil slétt fasetur**. Millimetrar, á eigin ásum PartCraft (Y upp). Fyrir forrit sem hafnar nákvæmu skránni |
| {{ui:DXF af skissunni eða sléttum fleti}} | `<name> - <sketch>.dxf` eða `<name> - face.dxf` | DXF R12. Skissa: línur, bogar, hringir og punktar í eigin hnitum skissunnar, á lögunum PROFILE, CONSTRUCTION og POINTS. Valinn sléttur flötur: útlínur hans sem lokaðar fjöllínur (ávalar brúnir sem fasetur þeirra) |
| {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}} | `<name> - drawing.pdf` | A3 teikningablaðið: þrjár myndir, samskeyti, snið og smáatriði ef stillt, heildarstærðir, GD&T-tákn, titilreitur |

:::note
{{ui:STEP AP242 (nákvæmt fast efni)}} skrifar göt, upphækkanir, ávala, keilur, kúlur og tórusa á sönnu yfirborði sínu, svo annað forrit getur valið gat sem sívalning; **Bogar** breytir því ekki. Hliðar úr splæsum, líkanaðir þræðir og innfluttir möskvar hafa ekkert nákvæmt yfirborð og haldast sléttir fasetur í sama fasta efninu; stöðustikan segir hversu margir. {{ui:STEP (facetað, möskvakjarni)}} skrifar sérhvern ávalan flöt sem fasetur.
:::

- Útflutningar eru af hlutanum á skjánum. Útflutningur er óvirkur í samsetningu; það er enginn útflutningur samsetningar enn.
- STL, 3MF, facetaða STEP-ið og flata DXF-ið eru alltaf gerð úr fasetum. Stillingin **Bogar** (í hægra spjaldinu þegar ekkert er valið) ákvarðar hversu fín þau eru, frá 32 til 256 fasetur á hring. Veldu Fínt eða Mjög fínt áður en þú flytur út STL eða 3MF fyrir sléttan prent.
- PDF-teikningin notar innbyggða Helvetica-letrið í lesaranum. Stafir sem það getur ekki sýnt eru prentaðir sem "?".

Skref fyrir skref: [Útflutningur til prentunar, STEP og DXF](topic:export-files) og [Gerðu teikningarblað](topic:drawing-pdf).

## Óvistuð vinna

- PartCraft geymir endurheimtuafrit af opna hlutanum eða samsetningunni í þessum vafra augnabliki eftir hverja breytingu, svo hrun eða lokaður flipi tapar henni ekki: næst þegar þú opnar PartCraft spyr það "Endurheimta vinnuna þína?". Það er ekki vistun: vistaðu í skrá til að geyma vinnuna þína. Sjá [Endurheimtu óvistaða vinnu](common:recover).
- Ef þú reynir að loka flipanum eða endurhlaða með óvistuðum breytingum spyr vafrinn "Yfirgefa síðu?". Það er gluggi vafrans sjálfs; PartCraft getur ekki breytt orðalaginu.
- {{ui:Nýtt}}, {{ui:Opna}} og lokun samsetningar spyrja áður en óvistuðum breytingum er hent.

## Á netinu og án nettengingar

Allt gerist á tölvunni þinni: möskvakjarninn (WebAssembly-forrit) er sóttur með forritinu og smíðar rúmfræðina á staðnum, og skrár eru lesnar af og skrifaðar á diskinn þinn. Engin hlutagögn fara um netið. Sjá [Möskvakjarninn](topic:solid-kernels).

Til að vinna án nettengingar alveg, vistaðu PartCraft til notkunar án nettengingar á meðan þú ert á netinu: veldu {{ui:Vista til notkunar án nettengingar}} í forritastikunni og bíddu meðan það telur ("Vistar 40 af 212") þar til það segir **Tilbúið án nettengingar**. Vistaða afritið inniheldur þrívíddarsafnið og möskvakjarnann, svo eftir það virka líkanagerð, vistun, allur útflutningur og teikningar án nettengingar. Ef það segir **Ekki tókst að vista**, smelltu á það til að reyna aftur á netinu; **Ekki í boði án nettengingar** þýðir að þessi vafragluggi getur ekki geymt afrit (einkagluggar og sumar stýrðar tölvur). Þegar afritið er vistað býður smellur á **Tilbúið án nettengingar** upp á {{ui:Vista aftur (sækja nýjustu útgáfu)}} og {{ui:Fjarlægja afritið án nettengingar}}. Nánar: [Vinna án nettengingar](common:offline).

:::online
Þú ert á netinu. Jafnvel án þess að vista til notkunar án nettengingar geturðu haldið áfram að vinna ef tengingin rofnar, þegar PartCraft hefur hlaðist og merkið á stöðustikunni segir "Möskvakjarni". Endurhlaðaðu bara ekki síðunni fyrr en þú ert kominn aftur á netið.
:::

:::offline
Þú ert án nettengingar. Ef PartCraft er þegar opið, haltu áfram að vinna; vistun og útflutningur virka enn. Ef forritastikan segir **Tilbúið án nettengingar** opnast PartCraft líka frá grunni án tengingar; annars skaltu ekki endurhlaða þessum flipa.
:::

## Munur á milli vafra

- **Niðurhal.** Sérhver vafri hefur sína eigin niðurhalsmöppu og sína eigin leið til að spyrja. Ef vafri spyr hvort þessi síða megi sækja skrár, leyfðu það, annars geta vistun og útflutningur ekki virkað.
- **Draga og sleppa** skrá á myndina virkar í Chrome, Edge, Firefox og Safari.
- **Skrár úr síma eða spjaldtölvu.** Á iPhone og iPad sýnir Opna Skrár-forritið; vistaðar skrár fara í Skrár, Niðurhal. Á Android fara þær í Niðurhal-möppuna.

Það er enginn munur á því hvað skrárnar innihalda milli vafra eða stýrikerfa.
