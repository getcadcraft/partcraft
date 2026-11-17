---
title: Masīvu un spoguļošanas elementi
summary: Atkārtojiet elementus rindā ar Lineārs, apgriezieties ap asi ar Cirkulārs un kopējiet elementus vai visu ķermeni pāri plaknei ar Spoguļošana.
keywords: masīvs, lineārs masīvs, cirkulārs masīvs, polārais masīvs, spoguļošana, simetrisks, kopēt elementus, urbumu aplis, sēkla, spoguļot ķermeni
from: 702e9edb
---

Masīvi un spoguļojumi kopē jau izveidotos elementus. Kopijas ir daļa no vēstures: ja maināt oriģinālu, kopijas seko.

Kopējams ir tas, ko elements dara: izciļņa masīvs pievieno materiālu, griezuma vai cauruma masīvs to noņem. Masīvus var vēlreiz veidot masīvā un spoguļot. Importētu STEP cietķermeni var arī kopēt; noapaļojumus, nošķeltās malas un čaulas nevar.

## Lineārs masīvs

1. Vēsturē atlasiet kopējamo elementu (piemēram, Caurumu vai Griezumu). Ja nekas nav atlasīts, tiek izmantots pēdējais cietais elements.
2. Izvēlieties {{ui:Lineārs}}. Pa X asi ik pa 20 mm parādās trīs kopijas.
3. Labajā panelī iestatiet:

| Iestatījums | Ko tas dara | Noklusējums |
|---|---|---|
| **Kopējamie elementi** | Atzīmējiet katru kopējamo elementu. Sarakstā ir tikai elementi virs masīva | Atlasītais elements |
| **Virziens** | X ass, Y ass, Z ass, līnija vai centrālā līnija no jebkuras iepriekšējās skices, rotācijas ass vai izvēlēta šķautne | X ass |
| **Solis (mm)** | Attālums starp kaimiņiem | 20 |
| **Skaits** | Kopējais skaits, **ieskaitot oriģinālu** (no 1 līdz 1000) | 3 |
| **Apgriezt virzienu** | Kopijas iet pretējā virzienā | Izslēgts |

### Šķautnes izmantošana kā virziens

1. Noklikšķiniet uz detaļas taisnas šķautnes skatā. Labajā panelī rakstīts **Šķautne** un tiek rādīts tās garums.
2. Izvēlieties {{ui:Lineārs}}: masīvs iet pa šo šķautni.

Vai arī atlasiet masīvu, izvēlieties šķautni un sadaļā **Virziens** izvēlieties "Atlasītā šķautne (izmantot tikko atlasīto)". Atlasītā šķautne ir fiksēta telpā: tā nesekos vēlākām izmaiņām. Skices līnija seko savai skicei.

## Cirkulārs masīvs

1. Atlasiet kopējamo elementu (piemēram, vienu caurumu diska malas tuvumā).
2. Izvēlieties {{ui:Cirkulārs}}. Pa visu apkārtmēru vienmērīgi parādās seši kopijas.
3. Iestatiet:

| Iestatījums | Ko tas dara | Noklusējums |
|---|---|---|
| **Kopējamie elementi** | Kā lineārajam | Atlasītais elements |
| **Ass** | X, Y vai Z ass, skices līnija, rotācijas ass vai izvēlēta šķautne | Pēdējās rotācijas ass, ja tāda ir, citādi Y ass |
| **Leņķis (°)** | 360 vienmērīgi izvieto kopijas visapkārt. Mazāks skaitlis izplata tās pa šo leņķi, pirmā un pēdējā atrodas galos | 360 |
| **Skaits** | Kopējais skaits, ieskaitot oriģinālu | 6 |
| **Apgriezt virzienu** | Iet pretējā virzienā | Izslēgts |

Pasaules asis iet caur sākumpunktu. Diskam, kas nav centrēts sākumpunktā, izmantojiet skices centrālo līniju vai rotācijas asi.

### Piemērs: flanča astoņi urbumi

1. Rotējiet flanci (skatiet [Pagrieztas detaļas rotēšana](topic:revolve)) ap Y asi.
2. Skicējiet uz flanča plakanās augšējās virsmas, novietojiet vienu punktu uz urbumu apļa un izveidojiet caurumu.
3. Ar atlasītu caurumu izvēlieties {{ui:Cirkulārs}}. Ass jau ir "Revolve1 rotēšanas ass".
4. Iestatiet **Skaits** uz `8`.

## Spoguļošana

1. Vēsturē atlasiet spoguļojamo elementu vai neko neatlasiet, lai spoguļotu **visu ķermeni, kā tas izveidots līdz šim**.
2. Izvēlieties {{ui:Spoguļošana}}. Tā spoguļo pāri **Labās puses plaknei**.

Lai spoguļotu visu ķermeni pāri detaļas virsmai, vispirms noklikšķiniet uz šīs plakanās virsmas, pēc tam izvēlieties {{ui:Spoguļošana}}. (Noklikšķinot uz virsmas, vēstures atlase tiek notīrīta, tāpēc tiek spoguļots vienmēr viss ķermenis.)

Iestatījumi labajā panelī:

- **Spoguļošana**: atzīmējiet **Viss ķermenis (kā izveidots līdz šim)** vai noņemiet atzīmi un atzīmējiet kopējamos elementus.
- **Spoguļošanas plakne**: Priekšējā plakne, Augšējā plakne, Labās puses plakne, virsma, ko tā izmanto tagad ("Extrude1 virsma" vai "Fiksēta plakne"), vai "Tikko atlasītā virsma". Lai spoguļotu izvēlētos elementus pāri virsmai: vēsturē atlasiet Spoguļošanu, skatā noklikšķiniet uz virsmas un izvēlieties "Tikko atlasītā virsma".

Pilnu ķermeni spoguļojot pāri virsmai, detaļa dubultojas, piemēram, pusstiprinājums kļūst par pilnu.

## Paziņojumi

- "Vispirms izveidojiet elementu, ko kopēt." vai "Vispirms izveidojiet cietu ķermeni." Vēl nav nekā cieta, ko kopēt.
- "Izvēlieties kopējamos elementus." Visi lodziņi **Kopējamie elementi** ir notīrīti.
- "Extrude2 nav cieta ķermeņa, ko kopēt." Šis elements neizdevās vai ir apslāpēts.
- "Fillet1 maina ķermeņa šķautnes vai sienas; to nevar kopēt. Kopējiet elementus, kas veido cietus ķermeņus (izspiedumi, rotācijas, urbumi, importi)." Noapaļojumus, nošķeltās malas un čaulas nevar veidot masīvā vai spoguļot; vispirms veidojiet masīvu, tad noapaļojiet.
- "Vēl nav ķermeņa, ko spoguļot."

:::note
Masīva kopijas nevar izlaist pa vienai, un masīvs nevar sekot skices līknei. Skices masīvi un spoguļojumi vēl nav izveidoti: atkārtotu skices ģeometriju zīmējiet ar roku vai ar **Pievienot pēc koordinātēm**.
:::
