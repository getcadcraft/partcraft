---
title: Faili: atvēršana, saglabāšana un eksportēšana
summary: PartCraft atvērtie un saglabātie detaļu un mezglu faili, katrs eksporta formāts un tajā saglabātais, kur faili tiek novietoti un kas mainās bezsaistē vai starp pārlūkprogrammām.
keywords: atvērt, saglabāt, eksportēt, lejupielādēt, fails, partcraft.json, mezgla fails, stl, 3mf, step, dxf, pdf, kur ir mani faili, bezsaiste, saglabāt kā
from: c15c2c48
---

PartCraft darbojas ar failiem jūsu datorā. Tas nekad neaugšupielādē detaļu, un konts vai mākoņglabātuve nav iesaistīta. Saglabāšana mākonī vēl nav pieejama.

## Ko PartCraft atver

| Fails | Paplašinājums | Kā |
|---|---|---|
| PartCraft detaļa | `.partcraft.json` | {{ui:Atvērt}}, {{key:Mod+O}} vai ievelciet to 3D skatā |
| PartCraft mezgls | `.partcraft-asm.json` | Tāpat: PartCraft pats atpazīst, kāda veida fails tas ir |
| STEP cietais ķermenis | `.step`, `.stp` | Cietais ķermenis, kas nolasīts kā trijstūri: [Atvērt STEP failu un turpināt darbu ar to](topic:import-step) |

STL, OBJ un 3MF tīkli arī tiek atvērti kā cietie ķermeņi ([Atvērt STL, OBJ vai 3MF](topic:open-meshes)), tāpat kā faili `.3dm` ([Atvērt .3dm modeli](topic:open-3dm-files)). DXF, IGES un citu programmu savi detaļu faili netiek atvērti (skat. [Kas vēl nav izveidots](topic:not-built-yet)).

Atverot failus, ievērojiet šādus noteikumus:

- Detaļas vai mezgla faila nosaukumam jābeidzas ar `.json`, un fails nedrīkst būt lielāks par 50 MB.
- Pirms kaut kā parādīšanas faili tiek pārbaudīti. Bojāts vai rediģēts fails tiek noraidīts ar skaidru iemeslu, piemēram: "Šis nav PartCraft fails."
- Fails, kas saglabāts jaunākā PartCraft versijā, tiek noraidīts: "Šis fails saglabāts jaunākā PartCraft versijā (faila versija 3); šī versija lasa versiju 2." Vecāki faili atveras.
- Ja ekrānā redzamajā detaļā ir nesaglabātas izmaiņas, PartCraft vispirms jautā: {{ui:Atcelt}}, {{ui:Atmest izmaiņas}} vai {{ui:Vispirms saglabāt}}.

## Saglabāšana

{{ui:Saglabāt}} vai {{key:Mod+S}} saglabā to, kas ir ekrānā:

- Detaļai: `<detaļas nosaukums>.partcraft.json`, pilnu vēsturi (skices, sakarības, izmēri, elementi, atgriešanās pozīcija), rasējuma lapas griezuma, detaļskata un GD&T piezīmes, kā arī visu iepriekšējā versijā importētā STEP cietā ķermeņa pilnu tekstu. Elementi, ko šī versija nevar izveidot, tiek saglabāti nemainīti. Pats cietais ķermenis netiek glabāts; PartCraft to atjauno no vēstures, kad fails tiek atvērts.
- Mezglam: `<mezgla nosaukums>.partcraft-asm.json` ar **katru tajā esošo detaļu**. Viens fails satur visu mezglu, tāpēc to var nosūtīt atsevišķi.

Saglabāšana ir **lejupielāde**. Pārlūkprogramma novieto failu lejupielāžu mapē vai jautā, kur to saglabāt, ja tā ir iestatīta jautāt. Saglabājot vēlreiz, tiek izveidota jauna lejupielāde; pārlūkprogramma var nosaukt failu `Part1 (1).partcraft.json`, nevis aizstāt veco. Failus var pārdēvēt vai pārvietot {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} pēc savas izvēles.

Detaļas nosaukumā visas rakstzīmes, izņemot burtus, ciparus, atstarpes, `_`, `.` un `-`, failu nosaukumā tiek aizstātas ar `_`.

:::tip
Lielākajā daļā pārlūkprogrammu ir iestatījums, kas jautā, kur saglabāt katru lejupielādi. Ieslēdziet to, ja vēlaties katru reizi izvēlēties "Saglabāt kā": Chrome un Edge tas atrodas iestatījumos sadaļā Lejupielādes; Firefox sadaļā Vispārīgi, Faili un lietojumprogrammas; Safari sadaļā Vispārīgi, Faila lejupielādes vieta.
:::

Vairāk par to, kur nonāk lejupielādes un kā glabāt failus drošībā: [Kur atrodas jūsu faili](common:your-files).

## Eksportēšana

Izvēlne {{ui:Eksportēt}} raksta citus formātus. Katrs ir lejupielāde, kas nosaukta pēc detaļas.

| Izvēlnes vienums | Fails | Kas tajā ir |
|---|---|---|
| {{ui:STL 3D drukai}} | `<nosaukums>.stl` | Binārs STL no cietā ķermeņa trijstūriem, milimetros, **Z uz augšu** |
| {{ui:3MF 3D drukai}} | `<nosaukums>.3mf` | 3MF ar cieto ķermeni kā vienu objektu, milimetros, **Z uz augšu** |
| {{ui:STEP AP242 (precīzs cietais ķermenis)}} | `<nosaukums>.step` | Šajā versijā vēl nav izveidots (pelēks): tam vajag precīzu kodolu |
| {{ui:STEP AP214 (precīzs cietais ķermenis)}} | `<nosaukums>.step` | Šajā versijā vēl nav izveidots (pelēks) |
| {{ui:STEP (facetēts, tīkla kodols)}} | `<nosaukums>.step` | Cietais ķermenis no plakanām virsmām, kas veidotas no tīkla: **apaļās virsmas ir daudzas mazas plakanas facetes**. Milimetros, PartCraft pašu asīs (Y uz augšu). Šajā versijā STEP, ko izmantot citām CAD programmām |
| {{ui:DXF no skices vai plakanas virsmas}} | `<nosaukums> - <skice>.dxf` vai `<nosaukums> - face.dxf` | DXF R12. Skice: līnijas, lokus, riņķus un punktus skices pašas koordinātēs, slāņos PROFILE, CONSTRUCTION un POINTS. Izvēlēta plakana virsma: tās kontūras kā slēgtas polilīnijas (apaļās malas kā to facetes) |
| {{ui:Rasējums (PDF): skati, griezums, detaļskats, GD&T}} | `<nosaukums> - drawing.pdf` | A3 rasējuma lapa: trīs skati, izometrija, griezums un detaļskats, ja iestatīti, gabarītizmēri, GD&T simboli, sadaļa ar datiem |
   
:::note
{{ui:STEP AP242 (precīzs cietais ķermenis)}} un {{ui:STEP AP214 (precīzs cietais ķermenis)}} šajā versijā vēl nav izveidoti: izmantojiet {{ui:STEP (facetēts, tīkla kodols)}}. Tam ir pareiza forma un tilpums, taču katra apaļā virsma ir daudzas plakanas facetes, tāpēc citas programmas nevar atlasīt caurumu kā cilindru. Ja tas ir svarīgi, vispirms iestatiet **Līknes** smalkāk.
:::

- Eksportē ekrānā redzamo detaļu. Eksports mezglā ir izslēgts; mezgla eksports vēl nav pieejams.
- STL, 3MF, facetētais STEP un virsmas DXF vienmēr sastāv no facetēm. Iestatījums **Līknes** (labajā panelī, kad nekas nav atlasīts) nosaka, cik smalkas tās ir: no 32 līdz 256 facetēm uz pilnu apli. Pirms STL vai 3MF eksportēšanas gludai drukai izvēlieties Smalks vai Ļoti smalks.
- PDF rasējums izmanto lasītāja iebūvēto fontu Helvetica. Rakstzīmes, ko tas nevar attēlot, drukājas kā "?".

Soli pa solim: [Eksportēšana drukai, STEP un DXF](topic:export-files) un [Rasējuma lapas izveide](topic:drawing-pdf).

## Nesaglabāts darbs

- PartCraft šajā pārlūkprogrammā īsi pēc katras izmaiņas saglabā atjaunošanas kopiju atvērtajai detaļai vai mezglam, tāpēc avārijas vai aizvērta cilne neizdzēš darbu: nākamreiz, atverot PartCraft, tas jautā "Atjaunot jūsu darbu?". Tā nav saglabāšana: lai saglabātu darbu, saglabājiet to failā. Skat. [Atjaunot nesaglabātu darbu](common:recover).
- Ja mēģināt aizvērt cilni vai pārlādēt lapu ar nesaglabātām izmaiņām, pārlūkprogramma jautā "Pamest vietni?". Tas ir paša pārlūkprogrammas logs; PartCraft nevar mainīt tā tekstu.
- {{ui:Jauns}}, {{ui:Atvērt}} un mezgla aizvēršana jautā pirms nesaglabātu izmaiņu atmešanas.

## Tiešsaiste un bezsaiste

Viss notiek jūsu datorā: tīkla kodols (WebAssembly programma) tiek lejupielādēts kopā ar lietotni un veido ģeometriju lokāli, un faili tiek nolasīti no diska un ierakstīti tajā. Nekādi detaļu dati netiek sūtīti tīklā. Skat. [Tīkla kodols](topic:solid-kernels).

Lai strādātu bez savienojuma, saglabājiet PartCraft bezsaistes lietošanai, kamēr esat tiešsaistē: izvēlieties {{ui:Saglabāt bezsaistei}} lietotnes joslā un pagaidiet, kamēr skaita ("Saglabā 40 no 212"), līdz parādās **Gatavs darbam bezsaistē**. Saglabātajā kopijā ir 3D bibliotēka un tīkla kodols, tāpēc pēc tam darbojas modelēšana, saglabāšana, visi eksporti un rasējumi bezsaistē. Ja parādās **Neizdevās saglabāt**, noklikšķiniet uz tā, lai mēģinātu vēlreiz tiešsaistē; **Bezsaiste nav pieejama** nozīmē, ka šis pārlūkprogrammas logs nevar saglabāt kopiju (privātie logi un daži pārvaldīti datori). Ja kopija ir saglabāta, klikšķis uz **Gatavs darbam bezsaistē** piedāvā {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} un {{ui:Noņemt bezsaistes kopiju}}. Sīkāk: [Darbs bezsaistē](common:offline).

:::online
Jūs esat tiešsaistē. Pat bez saglabāšanas bezsaistes lietošanai, kad PartCraft ir ielādēts un statusa joslas čips rāda "Tīkla kodols", varat turpināt darbu, ja savienojums pazūd. Tikai nepārlādējiet lapu, kamēr neesat atkal tiešsaistē.
:::

:::offline
Jūs esat bezsaistē. Ja PartCraft jau ir atvērts, turpiniet darbu; saglabāšana un eksportēšana joprojām darbojas. Ja lietotnes joslā redzams **Gatavs darbam bezsaistē**, PartCraft tiek atvērts arī no jauna bez savienojuma; citādi šo cilni nepārlādējiet.
:::

## Atšķirības starp pārlūkprogrammām

- **Lejupielādes.** Katrai pārlūkprogrammai ir sava lejupielāžu mape un sava veids, kā jautāt. Ja pārlūkprogramma jautā, vai šī vietne drīkst lejupielādēt failus, atļaujiet to, citādi saglabāšana un eksportēšana nedarbosies.
- **Vilkšana un nomešana.** Faila ievilkšana skatā darbojas Chrome, Edge, Firefox un Safari.
- **Faili no tālruņa vai planšetes.** iPhone un iPad {{ui:Atvērt}} parāda lietotni Faili; saglabātie faili nonāk lietotnē Faili, mapē Lejupielādes. Android tie nonāk mapē Lejupielādes.

Faili neatšķiras atkarībā no pārlūkprogrammas vai operētājsistēmas.
