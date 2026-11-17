---
title: Mezgla pārbaude sadursmēm un kustībai
summary: Atrodiet detaļas, kas pārklājas, ar Sadursme, vilciet jebkuras savienojuma vērtības, lai redzētu kustību, un pārbaudiet savienojumu visā tā diapazonā, lai atrastu, kur detaļas saduras.
keywords: traucējumi, traucējumu noteikšana, sadursme, saduršanās, pārklāšanās, vītnes atbilstība, vītnes dziļuma neatbilstība, pieskaroties virsmām, paslēpt, filtrs, kustība, kustības pētījums, pārbaude, diapazons, pārbaudīt
from: 9c98db46
---

Divas pārbaudes darbojas uz detaļām, kā tās novietotas: **Sadursme** meklē pārklājošos materiālu tieši tagad, un **kustības pārbaude** pārvieto vienu savienojumu visā tā diapazonā un meklē pārklāšanos ceļā.

## Pārbaude traucējumiem

1. Atveriet vai izveidojiet mezglu (skatiet [Mezgla izveide ar savienojumiem](topic:build-assembly)).
2. Izvēlieties {{ui:Sadursme}}.

Statusa josla parāda rezultātu:

- "Starp 3 detaļām traucējumu nav (… ms)."
- "Traucējumi: Flange1 un Flange2: Pārklāšanās, 2.5 mm³."

Kreisajā lodziņā **Montāža** rāda **Traucējumi**: "Nav", "2 rezultāti" (tie, kas rādīti), vai "Nav pārbaudīts". Kad nekas nav atlasīts, labajā panelī zem **Traucējumi** uzskaitīts katrs rezultāts.

Rezultāts tiek notīrīts, kad mezgls mainās. Pēc savienojuma pārvietošanas palaidiet {{ui:Sadursme}} vēlreiz. Katrs detaļu pāris tiek pārbaudīts pret katru citu, tāpēc lieli mezgli prasa ilgāku laiku.

### Rezultātu veidi

| Veids | Nozīmē |
|---|---|
| **Pārklāšanās** | Detaļas koplieto tilpumu: īsta sadursme. |
| **Vītnes dziļuma neatbilstība** | Koplietotais tilpums atrodas vienas detaļas vītnē, bet aiz otras: skrūve ir vītnēta dziļāk nekā tās caurums, vai gluds kāts vītnētā caurumā. |
| **Vītnes atbilstība (kosmētiskās vītnes)** | Koplietotais tilpums atrodas abu detaļu vītnēs: skrūve vītnētā caurumā. Kosmētiskās vītnes tiek zīmētas pilnā vītnes izmērā, tāpēc tās vienmēr nedaudz pārklājas. |
| **Pieskaršanās virsmas** | Nav koplietota tilpuma, bet virsmas saskaras (ar precizitāti 0.001 mm). |

Modelētās vītnes (skatiet [Vītnes uz vārpstām un urbumiem, zīmētas vai modelētas](topic:threads)) ir reāla ģeometrija: ko tās koplieto, ir **Pārklāšanās**.

### Paslēpiet to, ko neredzat

Zem **Traucējumi**, **Rādīt** ir lodziņš katram veidam: noņemiet atzīmi no **Vītnes atbilstība** un **Pieskaršanās virsmas**, lai redzētu tikai svarīgās sadursmes. **Paslēpt šo pāri** blakus rezultātam paslēpj šo detaļu pāri neatkarīgi no veida. Paslēptie rezultāti tiek skaitīti ("2 rezultāti paslēpti ar šiem filtriem"), un **Rādīt paslēptos pārus vēlreiz** tos atgriež. Statusa josla skaita arī paslēptos rezultātus.

Filtri tiek saglabāti kopā ar mezglu, un katra izmaiņa ir viens {{key:Mod+Z}} solis. **Savienojuma pārbaude sadursmēm** (zemāk) tos arī izmanto. Mezgls ar filtriem tiek saglabāts kā 4. versija, ko agrākas PartCraft versijas atsakās atvērt, nevis zaudētu filtrus.

## Kustības skatīšana

1. Kreisajā sarakstā atlasiet savienojumu, kas kustas (jebkuru, izņemot stingro).
2. Velciet slīdni zem vienas tā vērtībām, piemēram, **Leņķis (°)** vai **Nobīde (mm)**. Detaļa pārvietojas, kamēr velkat.
3. Atlaidiet. Jaunā pozīcija paliek, un to var atsaukt ar {{key:Mod+Z}}.

Varat arī ierakstīt leņķi vai nobīdi lodziņā un nospiest {{key:Enter}}.

Savienojums slēgtā cilpā (mehānismā) pārvieto visu cilpu: vērtība, ko velkat, paliek, un pārējie cilpas savienojumi seko (skatiet [Slēgtas cilpas](topic:build-assembly#closed-loops-linkages)).

## Savienojuma pārbaude sadursmēm

1. Atlasiet savienojumu, kas kustas.
2. Savienojumam ar vairākām vērtībām (cilindrisks, plakans, lodīte, tapa rievā) izvēlieties, kuru pārbaudīt, sadaļā **Pārbaudīt kustības**.
3. Izvēlieties {{ui:Pārbaudīt kustību sadursmēm}}.

PartCraft pārvieto šo vērtību cauri 25 pozīcijām 24 vienādos soļos, pārējām paliekot kā ir: leņķis no −180° līdz 180° (noliekums no −90° līdz 90°), garums no mīnusa līdz plusam lielākās detaļas izmēram. Tas ziņo:

- "Leņķim (°) no -180 līdz 180 nekur nav sadursmes (pārbaudītas 25 pozīcijas)."
- "6 no 25 pozīcijām ir sadursme; pirmā ir pie Leņķis (°) 45 (12.4 mm³)."

Poga ir pelēka stingriem savienojumiem, kas nekustas. Pārbaude pārbauda tikai pozīcijas, nevis ceļu starp tām: plāna detaļa var iziet cauri citai starp diviem soļiem.

:::note
Kontakts un gravitācija vēl nav izveidoti. Bez ierobežojumiem pārbaude aptver visu diapazonu; ja dodat vērtībai **Ierobežojumi** (skatiet [Detaļu saraksts, izjauktie skati un detaļu pārvietošana](topic:assembly-bom-explode)), pārbaude aptver tikai tos, tāpēc lūka, kas atveras par 90°, tiek pārbaudīta pa 90°.
:::

## Kustības pētījums

**Montāža › Kustība** vada vienas savienojuma vērtības no sākuma līdz beigām noteiktā laikā (nemainīgs ātrums, izlīdzināts, sinusoīda vai uz priekšu un atpakaļ), novieto mezglu katrā solī ar tā savienojumiem un slēgtajām cilpām un ziņo, kādas sadursmes rodas un cik tuvu detaļas nonāk. **Pievienot punktu** seko detaļas vidum vai punktam, uz kura noklikšķināt, un kartītē attēlo tā pozīciju, ātrumu un paātrinājumu, savienojuma vērtību un atstatumu laikā; **Saglabāt CSV** un **Saglabāt diagrammu** tos saglabā. Ātrums un paātrinājums tiek iegūti no ierakstītajām pozīcijām, tāpēc asa virsotne starp soļiem parādās zema: izmantojiet vairāk soļu.

Pēc **Palaist** josla **Iet cauri palaišanai** ļauj pārvietot mezglu uz jebkuru soli (laiks, vērtība un tas, vai detaļas tur saduras, ir redzams blakus). Savienojums paglabā savu vērtību, un **Atpakaļ pie modeļa** atgriež mezglu. Pētījuma iestatījumi tiek saglabāti mezgla failā; tā rezultātus atkārtoti veido **Palaist**.

## Kontakta pētījums

**Montāža › Kontakts** parāda, kā mezgls nes slodzes vietās, kur detaļas spiež viena otru. Katra detaļa nes savus balstus, slodzes un materiālu no sava **Simulācijas** pētījuma (fiksēta virsma vienā detaļā, spēks citā); šeit izvēlaties pārus. **Pievienot pāri**, tad **Izvēlēties pusi A** un noklikšķiniet uz vienas detaļas virsmām, **Izvēlēties pusi B** un noklikšķiniet uz citas detaļas virsmām (klikšķis uz izvēlētas virsmas to noņem; Esc vai **Gatavs** beidz izvēli). Pāris ir **Bez berzes** (detaļas spiež, bet slīd) vai **Saistīts** (tās paliek kopā). Stingruma koeficients nosaka, cik stipri kontakts pretojas ieslīdēšanai (20 ir labs sākums, 1000 stingram tērauda kopumam).

**Atrisināt** palaiž slodzi soļos un parāda kontaktspēku, dziļāko ieslīdēšanu, lielāko pārvietojumu un lielāko spriegumu. Detaļa bez pāra tiek izlaista, un kartīte to saka. Kontakts bez berzes nenotur detaļu sānis: dodiet katrai detaļai balstu tās pašas Simulācijas pētījumā vai saistiet to, citādi soļi var nenostabilizēties. Pāri un iestatījumi tiek saglabāti mezgla failā.

**Eksportēt CalculiX ievades failu** raksta to pašu modeli kā CalculiX ievades failu (.inp). CalculiX ir atsevišķa programma, ko jūs instalējat un palaižat paši; **Nolasīt CalculiX rezultātus (.frd)** tad nolasa pārvietojumus atpakaļ šī mezgla tīklā un atsakās no faila, kas veidots citam tīklam. Šeit esošais risinātājs spēj strādāt ar plastiskumu, bet tas nav eksplicītā dinamika, un nekas šeit nav sertificēta analīze: lai inženieris pārbauda visu, kas ir svarīgs.
