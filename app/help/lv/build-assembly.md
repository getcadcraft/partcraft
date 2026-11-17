---
title: Mezgla izveide ar savienojumiem
summary: Sāciet mezglu no detaļas, ievietojiet kopijas un citus detaļu failus, savienojiet tos ar stingriem, rotācijas, slīdņu, cilindriskiem, plaknes, lodīšu un tapas rievā savienojumiem uz plakanām virsmām, centrējiet savienojumus uz asīm, rediģējiet detaļu vietā un saglabājiet mezglu.
keywords: mezgls, savienojums, savienojumi, cilpa, slēgta cilpa, sviru mehānisms, četrstieņu mehānisms, mehānisms, stingrs, rotācijas, slīdnis, cilindrisks, plakans, lodīte, lodveida, tapa rievā, ievietot komponentu, nostiprināts, fiksēts, koncentrisks, sakrītošs, rediģēt detaļu, kontekstā, partcraft-asm
from: a53bbfef
---

Mezgls savieno detaļas kopā. PartCraft **savienojumi** novieto detaļas: katrs savienojums atrodas uz plakanas virsmas katrā no divām detaļām un saliek tās virsmu pret virsmu. Rotācijas savienojums ļauj vienai detaļai griezties, slīdnis ļauj tai slīdēt, stingrs savienojums to notur.

## Mezgla sākšana

1. Izveidojiet detaļu ar cietvielu (tukša detaļa nevar ieiet mezglā: "Vispirms izveidojiet cietvielu, tad ievietojiet to mezglā.").
2. Rīkjoslā izvēlieties {{ui:Montāža}}.

Statusa josla saka: "Mezgls sākts ar Part1 kā nostiprināto detaļu. Ievietojiet vairāk detaļu (Pievienot kopiju, Ievietot vai Rediģēt › Dublēt), tad savienojiet tās." Kreisajā panelī tagad redzami **Detaļas** un **Savienojumi**, un rīkjosla rāda mezgla rīkus. Skices un elementu rīki paslēpjas.

Pirmā detaļa ir **nostiprināta**: tā nekad nekustas, un viss pārējais tiek novietots attiecībā pret to.

## Detaļu ievietošana

- {{ui:Pievienot kopiju}} ievieto vēl vienu kopiju atlasītajai detaļai (vai pēdējai). Kopijas koplieto vienu detaļu: rediģējot vienu, mainās visas.
- {{ui:Dublēt}} ({{key:Mod+D}}) sadaļā **Rediģēt** dara to pašu atlasītajai detaļai. {{key:Mod+C}} un {{key:Mod+V}} kopē detaļu un ielīmē to blakus pārējām, šajā mezglā vai citā; {{key:Mod+Shift+V}} ielīmē to tajā pašā vietā. Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).
- {{ui:Ievietot}} ievieto detaļu no `.partcraft.json` faila jūsu datorā. Detaļa tiek nokopēta mezglā.

Jaunas detaļas parādās 20 mm pa labi no visa, kas jau ir, un paliek tur, līdz savienojums tās novieto. Detaļu bez savienojuma var pārvietot arī ar roku: ierakstītas vērtības vai bultiņas, ko velkat (skatiet [Detaļu saraksts, izjauktie skati un detaļu pārvietošana](topic:assembly-bom-explode)).

## Divu detaļu savienošana

1. Izvēlieties {{ui:Savienojums}} vai nospiediet {{key:J}}. Labajā panelī rādās **Jauns savienojums**.
2. Noklikšķiniet uz plakanas virsmas uz pirmās detaļas. Tā iezīmējas.
3. Noklikšķiniet uz plakanas virsmas uz otrās detaļas.

Otrā detaļa pārlec tā, ka tās virsma gulstas pret pirmās detaļas virsmu, vērsta pret to. Savienojums parādās zem **Savienojumi**, piemēram, "Revolute1", un labajā panelī rādās tā iestatījumi.

- Ja abas virsmas izveidotas ar rotācijām, savienojums sākas kā **rotācijas**; citādi kā **stingrs**. Mainiet to pēc tam.
- Izliektas virsmas nevar izvēlēties: "Šī virsma ir izliekta. Izvēlieties plakanu virsmu (lai pagrieztos ap caurumu vai rotācijas asi, to izvēlieties savienojumā pēc tam)."
- {{key:Esc}} atceļ sākto savienojumu (vai noklikšķiniet uz detaļas kreisajā sarakstā).

### Savienojuma iestatījumi

| Iestatījums | Ko tas dara |
|---|---|
| **Tips** | Viens no zemāk tabulā esošajiem savienojumiem |
| **Leņķis (°)** | Pagriež otro detaļu ap savienojuma asi (taisni pret virsmām) |
| **Nobīde (mm)** | Pārvieto otro detaļu pa asi, prom no virsmas (negatīvas vērtības spiež to virsmā) |
| **Pa X**, **Pa Y**, **Noliekt ap X**, **Noliekt ap Y**, **Pa rievu**, **Rievas virziens** | Pārējās vērtības, kas rādās savienojumiem, kuri tās izmanto |
| **Centrēt uz** (katrai pusei) | Kur savienojuma ass krusto virsmu: "Pašas virsmas izcelsme", rotācijas ass (piemēram, "Axis of Revolve1") vai viena cauruma ass (piemēram, "Hole1, hole 2") |

Katrai vērtībai, ko savienojums ļauj pārvietot, zem tās lodziņa ir vilkšanas slīdnis; pārējās tiek iestatītas vienreiz.

| Savienojums | Kas pārvietojas | Iestatīts vienreiz |
|---|---|---|
| **Stingrs** | nekas | Leņķis, Nobīde |
| **Rotācijas** | Leņķis (lūka) | Nobīde |
| **Slīdnis** | Nobīde (atvilktne) | Leņķis |
| **Cilindrisks** | Leņķis un Nobīde (vārpsta gultnī) | |
| **Plakans** | Pa X, Pa Y pāri virsmai un Leņķis (detaļa, kas slīd pa galdu) | |
| **Lodīte** | Leņķis (griešanās) un Noliekt ap X un Y ap savienojuma centru (lodveida savienojums) | |
| **Tapa rievā** | Pa rievu un Leņķis (tapa taisnā rievā) | Rievas virziens: rievas leņķis no virsmas X |

Virsmas X un Y ir pirmās detaļas virsmas X un Y; savienojuma centru iestata **Centrēt uz**.

"Pašas virsmas izcelsme" ir detaļas izcelsme, projicēta uz virsmas, un bieži tā nav vieta, kur vēlaties, lai detaļas sakrīt. Apaļām detaļām un tapām abās pusēs iestatiet **Centrēt uz** uz rotācijas vai cauruma asi: tad asis sakrīt, kā koncentrisks savienojums.

### Piemērs: divi flanči, savienoti ar skrūvēm virsmu pret virsmu

1. Atveriet flanča detaļu (rotācija ar apļveida caurumu masīvu) un izvēlieties {{ui:Montāža}}.
2. Izvēlieties {{ui:Pievienot kopiju}}.
3. Nospiediet {{key:J}}, noklikšķiniet uz pirmā flanča diska plakanās virsmas (virsma, no kuras sākas skrūvju caurumi), tad uz tās pašas virsmas otrā flancī. Virsmas izveidoja rotācija, tāpēc savienojums ir rotācijas.
4. Iestatiet **Centrēt uz** uz "Axis of Revolve1" abām pusēm. Flancīm tagad ir kopēja ass.
5. Ierakstiet `22.5` laukā **Leņķis (°)**, lai izlīdzinātu skrūvju caurumus, vai velciet slīdni.

## Slēgtas cilpas: mehānismi

Detaļas, kas savienotas gredzenā (četrstieņu mehānisms, kloķis un slīdnis, rāmis, kas nostiprināts abās pusēs), veido **cilpu**. PartCraft atrisina katru cilpu tā, lai tā aizvērtos: savienojumi uz tās pieņem vērtības, kas aizver gredzenu, pārvietojoties pēc iespējas mazāk no sākotnējās vietas.

- **Iestatiet vai velciet** cilpas savienojuma vērtību, un pārējā cilpa seko. Četrstieņu mehānismam velciet kloķa **Leņķis**, un savienotājs un svira pārvietojas līdzi. Iestatītā vērtība paliek; pārējās tiek aprēķinātas no tās.
- Sarakstā savienojums cilpā, kas vēl var kustēties, ir **zils**: var iestatīt vēl kādu vērtību. Cilpa, kas nevar kustēties (sastiprināts rāmis), paliek melna. Cilpa, ko nevar aizvērt, ir **sarkana**.
- Lodziņš **Detaļa** rāda **Cilpas**: cik ir aizvērtas un cik vērtības vēl var kustēties, piemēram, "1 aizvērta; 1 vērtība vēl var kustēties".
- {{ui:Pārbaudīt kustību sadursmēm}} pārbauda savienojumu cilpā, kamēr cilpa seko tam, soli pa solim (skatiet [Pārbaudiet mezglu sadursmēm un kustībai](topic:check-assembly)).

Plakans mehānisms, kas salikts no plakanām joslām, jāsaskaņo dziļumā: divas detaļas, kas savienotas virsmu pret virsmu abās gredzena pusēs, prasa vienu un to pašu kopējo augstumu abos virzienos. Lietojiet savienojuma **Nobīdi**, lai paceltu detaļu, ja kopums nesakrīt; citādi cilpa nevar aizvērties.

## Darbs ar detaļām

Noklikšķiniet uz detaļas skatā vai sarakstā, lai to atlasītu. Labajā panelī rādās tās detaļas nosaukums, cik ir kopiju, tilpums, savienojumi un vai tā ir nostiprināta, iestatīta ar savienojumiem vai "Nav savienota: paliek, kur tika novietota". Pogas:

- {{ui:Rediģēt šo detaļu}} (vai {{ui:Rediģēt detaļu}} rīkjoslā, vai veiciet dubultklikšķi uz detaļas sarakstā): atver detaļu rediģēšanai;
- {{ui:Ievietot kopiju}};
- {{ui:Padarīt par nostiprināto detaļu}};
- {{ui:Noņemt}}: noņem arī tās savienojumus pēc apstiprinājuma.

Mezglā vienmēr paliek vismaz viena detaļa: "Mezglā paliek vismaz viena detaļa. Aizveriet mezglu."

### Detaļas rediģēšana vietā

1. Atlasiet detaļu un izvēlieties {{ui:Rediģēt detaļu}}. Detaļa atveras ar savu vēsturi; virsraksts rāda "Bracket (Bracket mezglā)".
2. Mainiet to kā jebkuru detaļu.
3. Rīkjoslā izvēlieties {{ui:Atpakaļ}}. Mezgls atjaunojas: katra šīs detaļas kopija mainās, un savienojumi uz virsmām, kas veidotas no skices šķautnēm, seko.

Izmaiņas atgriešana ir viens solis mezgla atsaukšanas sarakstā.

## Atsaukšana, saglabāšana un aizvēršana

- Mezglam ir savs atsaukšanas saraksts: {{key:Mod+Z}} un {{key:Mod+Y}} darbojas ar savienojumiem, ievietojumiem un iestatījumiem.
- {{ui:Saglabāt}} vai {{key:Mod+S}} lejupielādē `<assembly name>.partcraft-asm.json` ar visām iekšā esošajām detaļām. Atveriet to vēlāk ar {{ui:Atvērt}}.
- {{ui:Aizvērt}} aizver mezglu un atgriež jūs pie detaļas, no kuras sākāt. Ja mezgls nav saglabāts, tas jautā: {{ui:Atcelt}}, {{ui:Atmest mezglu}} vai {{ui:Vispirms saglabāt}}.
- Lai pārdēvētu mezglu, noklikšķiniet tukšā vietā, lai nekas nebūtu atlasīts, un mainiet **Nosaukums** labajā panelī.

## Lieli mezgli

Mezglā var būt tūkstošiem kopiju dažām detaļām. Vienas detaļas kopijas tiek zīmētas kopā, savienojums, ko pagriežat, novieto tikai tam pakārtotās detaļas, un detaļu sarakstā pirmās rindas tiek rādītas, zem tām ir poga "Rādīt vairāk" (atlasītā detaļa vienmēr ir sarakstā).

- Kamēr grieziet vai tuvināt skatu, mezgls ar vairāk nekā aptuveni 300 000 trijstūriem tiek zīmēts kā viena kaste katrai detaļai, un pilnā izšķirtspējā pēc brīža pēc tam, kad pārtraucat.
- {{ui:Skati}} › {{ui:Vienkāršotais attēlojums}} saglabā kastes vienmēr. Detaļu un savienojumu atlasē joprojām izmanto īstās detaļas.
- Cik ātri tas griežas, atkarīgs arī no jūsu grafikas kartes. PartCraft izmērītie skaitļi ir izlaiduma piezīmēs kopā ar mašīnu, no kuras tie nākuši.

## Savienojumu problēmas

- Detaļa, ko neviens savienojums nesasniedz, tiek uzskaitīta kā **brīva**, un panelis saka: "Bracket2 nav savienota ar nostiprināto detaļu, tāpēc tā paliek tur, kur tika novietota."
- Cilpa, ko nevar aizvērt (garumi nesasniedz, ierobežojums aptur savienojumu, virsmas nesakrīt dziļumā): "Revolute3 veido cilpu, ko nevar aizvērt: tā ir novirzīta par 2.000 mm. Pārbaudiet cilpas savienojumu virsmas, nobīdes un ierobežojumus." Tās savienojumi kļūst sarkani.
- Ja pēc detaļas rediģēšanas savienojumā izmantota virsma vai ass ir pazudusi: "Virsma, ko izmanto šis savienojums, vairs nav Bracket detaļā." Noņemiet savienojumu un izveidojiet to atkārtoti.

Tālāk: [Pārbaudiet mezglu sadursmēm un kustībai](topic:check-assembly).
