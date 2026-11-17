---
title: Ķermeņu apvienošana, pārvietošana un mērogošana; ceļa masīvi
summary: Veidojiet atsevišķus ķermeņus un pēc tam tos savienojiet, izgrieziet vai krustojiet, pārvietojiet, pagrieziet, izlīdziniet vai kopējiet, mērogojiet vienmērīgi vai pēc X, Y un Z, un kopējiet elementus vai ķermeņus pa līkni.
keywords: ķermenis, ķermeņi, vairāku ķermeņu, jauns ķermenis, apvienot, bulas operācija, savienot, izgriezt, krustot, atņemt, savienība, paturēt rīkus, pārvietot ķermeni, kopēt ķermeni, pagriezt ķermeni, izlīdzināt, translācija, mērogot, nevienmērīgs mērogs, izstiept, afīns, ceļa masīvs, masīvs pa līkni, līknei vadīts masīvs
from: 6b1ea820
---

:::note
**Vēl nav izveidots šajā versijā.** Darbam ar vairākiem ķermeņiem vajadzīgs precīzs ģeometrijas kodols, kura šai PartCraft versijai nav: tā visas detaļas veido ar tīkla kodolu. [Kas vēl nav izveidots](topic:not-built-yet) pasaka, ko darīt tā vietā. Pārējā šī lapa apraksta, kā tas darbojas ar precīzu kodolu.
:::

Detaļa var saturēt vairāk nekā vienu cietvielu. Katra atsevišķa cietviela ir **ķermenis**. Vairums elementu pievieno vai izgriež no katra ķermeņa, kuru tie skar; šajā lapā aprakstītie rīki darbojas ar veseliem ķermeņiem, ko izvēlaties. Tie atrodas elementu grupas izvēlnē {{ui:Vairāk}}: {{ui:Apvienot}}, {{ui:Pārvietot ķermeni}}, {{ui:Mērogot ķermeni}} un {{ui:Ceļa masīvs}}. Visi tie prasa precīzo kodolu (OpenCascade).

## Atsevišķa ķermeņa izveide

Iestatiet izvilkuma vai rotācijas **Darbība** uz **Jauns ķermenis** tā labajā panelī (arī izvilkumiem un pārejas virsmām tā ir). Jaunā cietviela paliek atsevišķa pat tur, kur tā pārklājas ar citām. **Krustot** paturēs tikai to, kas ir jaunās formas un jau esošā kopējā daļa.

Ķermeņi tiek nosaukti pēc elementa, kas tos sāka: "Extrude2". Kopija tiek nosaukta pēc oriģināla un elementa, kas to kopēja: "Extrude2, copy 1 of Move1". Nosaukumi paliek tie paši, mainot izmērus augstāk, tāpēc elementi, kas izmanto ķermeni, to turpina atrast. Ja ir divi vai vairāk ķermeņi, detaļas panelis (noklikšķiniet tukšā vietā) tos uzskaita ar to tilpumiem.

## Ķermeņa pārdēvēšana vai paslēpšana

Noklikšķiniet tukšā vietā skatā, lai redzētu detaļas paneli. Tā ķermeņu saraksts (rāda, ja detaļai ir divi vai vairāk ķermeņi) katrā rindā ir nosaukuma lauks un {{ui:Paslēpt}} poga.

- **Pārdēvēt:** ierakstiet jaunu nosaukumu laukā un nospiediet {{key:Enter}} vai noklikšķiniet citur. Tad visi paneļi to izmanto: Apvienot, Pārvietot ķermeni, masīvi. Notīriet lauku, lai atgrieztos pie nosaukuma no elementa, kas izveidoja ķermeni.
- **Paslēpt:** noklikšķiniet uz {{ui:Paslēpt}} savā rindā. Ķermenis pazūd no skata, un klikšķi iet caur to, tāpēc var atlasīt virsmas aiz tā. {{ui:Rādīt}} to atgriež; {{ui:Rādīt visus}} atgriež katru paslēpto ķermeni.

Paslēpšana maina tikai skatu. Paslēpts ķermenis joprojām tiek veidots, ieskaitīts tilpumā un mērījumos un saglabāts STL, 3MF un STEP eksportos. Nosaukumi un paslēptie ķermeņi tiek saglabāti detaļas failā, un katra izmaiņa ir viens solis {{ui:Atsaukt}}.

## Ķermeņu apvienošana

1. {{key:Shift}}+klikšķis uz **mērķa** ķermeņa virsmas, tad uz katra **rīka** ķermeņa virsmas.
2. Izvēlieties {{ui:Vairāk}}, tad {{ui:Apvienot}}.
3. Labajā panelī izvēlieties **Darbība**:

| Darbība | Rezultāts |
|---|---|
| Savienot | Mērķis un rīki kļūst par vienu ķermeni |
| Izgriezt | Rīki tiek atņemti no mērķa |
| Krustot | Paliek tikai tas, ko mērķis un visi rīki koplieto |

**Mērķa ķermenis** ir tas, kas paturēs savu nosaukumu. Atzīmējiet vai noņemiet atzīmi no **Rīku ķermeņi**, vai izmantojiet **Izvēlēties skatā** un noklikšķiniet uz to virsmām. **Paturēt rīku ķermeņus** atstāj arī rīkus savās vietās (noderīgi veidnei un tās serdei). Ja rīka ķermenis jau tika izlietots ar iepriekšēju apvienošanu, panelis par to paziņo, nevis izvēlas citu ķermeni.

## Ķermeņa pārvietošana vai kopēšana

1. Izvēlieties {{ui:Vairāk}}, tad {{ui:Pārvietot ķermeni}}. Jaunākais ķermenis ir atzīmēts; atzīmējiet tos, ko pārvietot.
2. Izvēlieties **Pārvietošanas** tipu:

| Pārvietošana | Ko iestatāt |
|---|---|
| Translācija | **ΔX**, **ΔY**, **ΔZ** milimetros |
| No punkta līdz punktam | **No** un **Līdz**: noklikšķiniet tuvu šķautnes galam, punkta elementam vai vietai uz virsmas |
| Pagriezt ap asi | **Ass** (X, Y, Z, asu elements vai **Izvēlēties**: taisna šķautne, riņķis vai cilindrs) un **Leņķis (°)** |
| Izlīdzināt virsmu ar virsmu vai plakni | **Virsma, ko pārvietot** (ķermeņa plakana virsma), **Uz** (plakana virsma vai plakne) |

Izlīdzināt pagriež ķermeni tā, lai tā virsma gulstos uz otras virsmas, virsma pret virsmu, un pēc tam pabīda to tikai pa šīs virsmas normāli. **Tajā pašā virzienā** pagriež to pretējā virzienā. **Kopēt** paturēs oriģinālu un pievienos pārvietoto kopiju kā jaunu ķermeni.

## Ķermeņa mērogošana

1. Izvēlieties {{ui:Vairāk}}, tad {{ui:Mērogot ķermeni}}, un atzīmējiet ķermeņus.
2. Ierakstiet **Mērogs** vai noņemiet atzīmi no **Vienmērīgs** un ierakstiet **Mērogs X**, **Mērogs Y** un **Mērogs Z** (pa pasaules asīm).
3. **Ap** ir punkts, kas paliek vietā: ķermeņu kastes centrs vai punkts, ko izvēlaties.

Vienmērīgs mērogs ir precīzs. Nevienmērīgs mērogs pārvērš riņķus elipsēs: cilindrs kļūst par eliptisku cilindru, ko neviena analītiska virsma neuztur. Tāpēc izliektas virsmas kļūst par B-splaina virsmām, kas paliek 0.0000004 mm robežās no precīzās formas; plakanas virsmas un taisnas šķautnes paliek precīzas. Panelis norāda, kas notika. Mēroga koeficientiem jābūt lielākiem par nulli (spoguļošanai izmantojiet {{ui:Spoguļošana}}).

## Kopēšana pa ceļu

1. Vēsturē atlasiet elementu, ko kopēt, vai neatlasiet nevienu, lai kopētu jaunāko ķermeni.
2. Izvēlieties {{ui:Vairāk}}, tad {{ui:Ceļa masīvs}}. Jaunākā neizmantotā skice tiek ņemta kā ceļš.
3. Labajā panelī iestatiet:

| Iestatījums | Ko tas dara |
|---|---|
| **Kopēt** | Ķermeņi (katra kopija ir jauns ķermenis) vai Elementi (savienoti vai izgriezti kā oriģināls) |
| **Ceļš** | Atzīmējiet skices vai **Izvēlēties modeļa šķautnes**; daļām jāsavienojas gals pie gala |
| **Skaits** | Kopējais skaits, ieskaitot oriģinālu |
| **Solis** | Vienāds (izkliedēts līdz atvērta ceļa galam vai visapkārt slēgtam) vai noteikts attālums |
| **Orientācija** | Sekot ceļam (katra kopija pagriežas kopā ar to) vai Fiksēta (kopijas paliek paralēlas) |
| **Mainīt virzienu** | Iet pretējā virzienā pa ceļu |

Kopijas sākas tur, kur ceļš vistuvāk iet pie oriģināla, un tiek izvietotas pēc garuma pa līkni.

Lineārie un cirkulārie masīvi var kopēt arī ķermeņus: sadaļā savus **Kopēt ķermeņus** atzīmējiet un izvēlieties ķermeņus; katra kopija ir jauns ķermenis.

## Ierobežojumi

- Ķermeņiem vajadzīgs precīzais kodols; tīkla kodols saglabā vienu cietvielu un par to paziņo.
- Nevienmērīgs mērogs pārvērš izliektas virsmas tuvās B-splaina aproksimācijās (skatiet augstāk), nevis precīzos cilindros vai konusos; nobīdītās virsmas šādi vēl nevar mērogot.
- Ceļa sekošana 3D līknei, kas vijas, pārnes kopiju bez vīšanas; plakanos ceļos pagrieziens ir precīzs.
- Apvienošana strādā tikai ar cietvielām. Virsmu ķermeņus savieno ar {{ui:Savīt}}.

Skatiet arī [Atskaites plaknes, asis un punkti](topic:reference-geometry) punktiem un plaknēm "starp objektiem" un [Masīvu un spoguļošanas elementi](topic:patterns-mirror).
