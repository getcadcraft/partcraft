---
title: Faili: atvēršana, saglabāšana un eksportēšana
summary: Detaļu un mezglu faili, ko PartCraft atver un saglabā, katrs eksporta formāts un tas, ko tas saglabā, kur failus ieraksta un kas mainās bezsaistē vai starp pārlūkprogrammām.
keywords: atvērt, saglabāt, eksportēt, lejupielādēt, fails, partcraft.json, mezgla fails, stl, 3mf, step, dxf, pdf, kur ir mani faili, bezsaistē, saglabāt kā
from: e5fbc7e3
---

PartCraft darbojas ar failiem jūsu datorā. Tas nekad neaugšupielādē detaļu, un nav konta vai mākoņkrātuves. Saglabāšana mākonī vēl nav pieejama.

## Ko PartCraft atver

| Fails | Paplašinājums | Kā |
|---|---|---|
| PartCraft detaļa | `.partcraft.json` | {{ui:Atvērt}}, {{key:Mod+O}} vai nometiet to uz 3D skata |
| PartCraft mezgls | `.partcraft-asm.json` | Tāpat: PartCraft redz, kāda tā ir |
| STEP cietais ķermenis | `.step`, `.stp` | Cietais ķermenis, nolasīts kā trijstūri: [Atveriet STEP failu un turpiniet veidot](topic:import-step) |

STL, OBJ un 3MF tīkli arī atveras kā cietie ķermeņi ([Atvērt STL, OBJ vai 3MF](topic:open-meshes)), tāpat kā `.3dm` faili ([Atvērt .3dm modeli](topic:open-3dm-files)). DXF, IGES un citu programmu pašu detaļu faili nevar tikt atvērti (skatiet [Kas vēl nav izveidots](topic:not-built-yet)).

Atverot, noteikumi:

- Detaļas vai mezgla faila nosaukumam jābeidzas ar `.json`, un failam jābūt mazākam par 50 MB.
- Faili tiek pārbaudīti, pirms kaut kas tiek parādīts. Bojāts vai rediģēts fails tiek noraidīts ar vienkāršu iemeslu, piemēram: "Šis nav PartCraft fails."
- Fails, kas saglabāts jaunākā PartCraft versijā, tiek noraidīts: "Šis fails saglabāts jaunākā PartCraft versijā (faila versija 3); šī lasa versiju 2." Vecāki faili atveras.
- Ja ekrānā esošajai detaļai ir nesaglabātas izmaiņas, PartCraft vispirms jautā: {{ui:Atcelt}}, {{ui:Atmest izmaiņas}} vai {{ui:Vispirms saglabāt}}.

## Saglabāšana

{{ui:Saglabāt}} vai {{key:Mod+S}} saglabā to, kas ir ekrānā:

- Detaļai: `<part name>.partcraft.json`, pilna vēsture (skices, sakarības, izmēri, funkcijas, atgriešanās pozīcija), rasējuma lapas griezuma, detaļskata un GD&T piezīmes un pilns jebkura agrākā versijā importēta STEP cietā ķermeņa teksts. Funkcijas, ko šī versija nevar izveidot, tiek saglabātas neskartas. Pats cietais ķermenis netiek saglabāts; PartCraft to pārbūvē no vēstures, kad fails tiek atvērts.
- Mezglā: `<assembly name>.partcraft-asm.json` ar **katru detaļu iekšpusē**. Viens fails satur visu mezglu, tāpēc to var nosūtīt atsevišķi.

Saglabāšana ir **lejupielāde**. Jūsu pārlūkprogramma ieliek failu savā lejupielāžu mapē vai jautā, kur to ievietot, ja tā ir iestatīta jautāt. Atkārtota saglabāšana izveido jaunu lejupielādi; pārlūkprogramma var to nosaukt `Part1 (1).partcraft.json`, nevis aizstāt veco. Pārdēvējiet vai pārvietojiet failus {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieks}} pēc vēlēšanās.

Rakstzīmes detaļas nosaukumā, kas nav burti, cipari, atstarpes, `_`, `.` vai `-`, failu nosaukumos kļūst par `_`.

:::tip
Lielākā daļa pārlūkprogrammu ļauj iestatīt, ka jautā, kur saglabāt katru lejupielādi. Ieslēdziet to, ja vēlaties izvēli "Saglabāt kā" katru reizi: Chrome un Edge tas ir sadaļā Lejupielādes iestatījumos; Firefox sadaļā Vispārīgi, Faili un lietojumprogrammas; Safari sadaļā Vispārīgi, failu lejupielādes atrašanās vieta.
:::

Par to, kur nonāk lejupielādes un kā glabāt failus drošībā: [Kur atrodas jūsu faili](common:your-files).

## Eksportēšana

Izvēlnē {{ui:Eksportēt}} ieraksta citus formātus. Katrs ir lejupielāde, nosaukta pēc detaļas.

| Izvēlnes vienums | Fails | Kas tajā ir |
|---|---|---|
| {{ui:STL 3D drukai}} | `<name>.stl` | Bināra STL ar cietā ķermeņa trijstūriem, milimetros, **Z augšup** |
| {{ui:3MF 3D drukai}} | `<name>.3mf` | 3MF ar cieto ķermeni kā vienu objektu, milimetros, **Z augšup** |
| {{ui:STEP AP242 (precīzs cietais ķermenis)}} | `<name>.step` | Viens precīzs cietais ķermenis, milimetros, Z augšup: apaļas virsmas kā īsti cilindri, konusi, sfēras un tori. STEP, ko izmantot citām CAD un CAM programmām |
| {{ui:STEP AP214 (precīzs cietais ķermenis)}} | `<name>.step` | Tas pats precīzais cietais ķermenis vecākajā AP214 shēmā |
| {{ui:STEP (facetēts, tīkla kodols)}} | `<name>.step` | Cietais ķermenis, kas veidots no tīkla plakanām virsmām: **apaļas virsmas ir daudzas mazas plakanas facetes**. Milimetros, PartCraft pašās asīs (Y augšup). Programmai, kas noraida precīzo failu |
| {{ui:DXF no skices vai plakanas virsmas}} | `<name> - <sketch>.dxf` vai `<name> - face.dxf` | DXF R12. Skice: līnijas, loki, riņķi un punkti skices pašās koordinātēs, slāņos PROFILE, CONSTRUCTION un POINTS. Atlasīta plakana virsma: tās kontūras kā slēgtas polilīnijas (apaļās malas kā to facetes) |
| {{ui:Rasējums (PDF): skati, griezums, detaļskats, GD&T}} | `<name> - drawing.pdf` | A3 rasējuma lapa: trīs skati, izometrija, griezums un detaļskats, ja iestatīti, kopējie izmēri, GD&T simboli, titulblokā |

:::note
{{ui:STEP AP242 (precīzs cietais ķermenis)}} ieraksta caurumus, izciļņus, noapaļojumus, konusus, sfēras un torus to īstajās formās, tāpēc cita programma var atlasīt caurumu kā cilindru; **Līknes** to nemaina. Splaina malas, modelēti vītnes un importēti tīkli nav precīzas formas un paliek plakanas facetes tajā pašā cietajā ķermenī; statusa josla saka, cik to ir. {{ui:STEP (facetēts, tīkla kodols)}} ieraksta katru apaļo virsmu kā facetes.
:::

- Eksporti ir detaļa, kas redzama ekrānā. Eksports ir izslēgts mezglā; mezgla eksporta vēl nav.
- STL, 3MF, facetētais STEP un virsmas DXF vienmēr sastāv no facetēm. Iestatījums **Līknes** (labajā panelī, kad nekas nav atlasīts) nosaka, cik smalkas tās ir, no 32 līdz 256 facetēm uz apli. Izvēlieties Smalks vai Ļoti smalks pirms STL vai 3MF eksportēšanas gludai drukai.
- PDF rasējumā tiek izmantots lasītāja iebūvētais Helvetica fonts. Rakstzīmes, ko tas nevar parādīt, drukājas kā "?".

Soli pa solim: [Eksportēšana drukāšanai, STEP un DXF](topic:export-files) un [Izveidojiet rasējuma lapu](topic:drawing-pdf).

## Nesaglabāts darbs

- PartCraft patur atkopšanas kopiju atvērtai detaļai vai mezglam šajā pārlūkprogrammā neilgi pēc katras izmaiņas, tāpēc avārija vai aizvērta cilne to neizdzēš: nākamreiz, kad atverat PartCraft, tas jautā "Atkopt jūsu darbu?". Tā nav saglabāšana: saglabājiet failā, lai paturētu savu darbu. Skatiet [Atkopiet nesaglabātu darbu](common:recover).
- Ja mēģināt aizvērt cilni vai pārlādēt lapu ar nesaglabātām izmaiņām, pārlūkprogramma jautā "Atstāt vietni?". Tas ir pašas pārlūkprogrammas lodziņš; PartCraft nevar mainīt tā tekstu.
- {{ui:Jauns}}, {{ui:Atvērt}} un mezgla aizvēršana jautā pirms nesaglabātu izmaiņu atmešanas.

## Tiešsaistē un bezsaistē

Viss notiek jūsu datorā: tīkla kodols (WebAssembly programma) tiek lejupielādēts kopā ar lietotni un veido ģeometriju lokāli, un faili tiek lasīti no un rakstīti uz diska. Detaļu dati netiek sūtīti tīklā. Skatiet [Tīkla kodols](topic:solid-kernels).

Lai strādātu bez savienojuma, saglabājiet PartCraft bezsaistes lietošanai, kamēr esat tiešsaistē: izvēlieties {{ui:Saglabāt bezsaistei}} lietotnes joslā un uzgaidiet, kamēr tiek skaitīts ("Saglabā 40 no 212"), līdz parādās **Bezsaistes gatavs**. Saglabātā kopija ietver 3D bibliotēku un tīkla kodolu, tāpēc pēc tam modelēšana, saglabāšana, katrs eksports un rasējumi darbojas arī bezsaistē. Ja parādās **Nevarēja saglabāt**, noklikšķiniet, lai mēģinātu vēlreiz tiešsaistē; **Bezsaistes režīms nav pieejams** nozīmē, ka šis pārlūkprogrammas logs nevar paturēt kopiju (privātie logi un dažas pārvaldītas ierīces). Ar saglabātu kopiju, noklikšķinot uz **Bezsaistes gatavs**, tiek piedāvāts {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} un {{ui:Noņemt bezsaistes kopiju}}. Sīkāk: [Darbs bezsaistē](common:offline).

:::online
Jūs esat tiešsaistē. Pat ja nesaglabājat bezsaistes lietošanai, kad PartCraft ir ielādējies un statusa joslas čips rāda "Tīkla kodols", varat turpināt strādāt, ja savienojums pārtrūkst. Tikai neatjaunojiet lapu, kamēr neesat atkal tiešsaistē.
:::

:::offline
Jūs esat bezsaistē. Ja PartCraft jau ir atvērts, turpiniet strādāt; saglabāšana un eksportēšana joprojām darbojas. Ja lietotnes joslā ir **Bezsaistes gatavs**, PartCraft atveras arī no nulles bez savienojuma; citādi neatjaunojiet šo cilni.
:::

## Atšķirības starp pārlūkprogrammām

- **Lejupielādes.** Katrai pārlūkprogrammai ir sava lejupielāžu mape un savs veids, kā jautāt. Ja pārlūkprogramma jautā, vai šī vietne drīkst lejupielādēt failus, atļaujiet to, citādi saglabāšana un eksportēšana nevar darboties.
- **Vilkšana un nomešana** faila uz skatu darbojas Chrome, Edge, Firefox un Safari.
- **Faili no tālruņa vai planšetes.** iPhone un iPad ierīcēs Atvērt parāda Files lietotni; saglabātie faili nonāk Files, Lejupielādes. Android ierīcēs tie nonāk lejupielāžu mapē.

Failu saturs nav atšķirīgs starp pārlūkprogrammām vai operētājsistēmām.
