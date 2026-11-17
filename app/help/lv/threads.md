---
title: Vītnes uz vārpstām un urbumiem, zīmētas vai modelētas
summary: Uzlieciet ISO metrisko vai trapeču vītni uz jebkuras apaļas virsmas, vārpstas vai urbuma. Atstājiet to kosmētisku rasējumiem vai modelējiet reālu spirālveida vītni 3D drukāšanai, ar atstarpi, lai drukātās detaļas saskrūvētos.
keywords: vītne, vītnes, modelēta vītne, spirāle, spirālveida, skrūve, bultskrūve, uzgrieznis, vārpsta, urbums, ārējā vītne, iekšējā vītne, kosmētiska vītne, metriskā vītne, trapeču, Acme, vadskrūve, Tr16x4, M10, 3D drukāšana, drukāt, atstarpe, piegulšana, kreisā roka, vītnēts
from: 4f6401cc
---

{{ui:Vītne}} uzliek vītni uz apaļām virsmām: vārpstas ārpusi (ārējā vītne) vai urbuma iekšpusi (iekšējā vītne). PartCraft nosaka, kura ir, pēc virsmas.

Vītne sākumā ir **kosmētiska**: virsma paliek gluda, skatā vītne tiek zīmēta ar punktētiem riņķiem, un rasējuma lapā tā ir atzīmēta, piemēram, "M10×1.5 - 6g, vītne 20 garumā". Atzīmējiet **Modelēta**, lai izgrieztu reālu spirālveida vītni detaļā, 3D drukāšanai vai modelim, kam jāizskatās pareizi.

## Vītnējiet vārpstu vai urbumu

1. Izveidojiet vārpstu vai urbumu vītnes izmērā: Ø10 vārpstu M10 bultskrūvei vai Ø8.5 urbumu (vītnējamais urbis) M10 uzgrieznim.
2. Noklikšķiniet uz apaļās virsmas un izvēlieties {{ui:Vairāk}} › {{ui:Vītne}}. Ja nav atlasīta neviena apaļa virsma, PartCraft prasa noklikšķināt uz virsmām un pēc tam uz {{ui:Gatavs}}.
3. Labajā panelī pārbaudiet **Izmēru**. **Pielāgot virsmai** izvēlas izmēru pati: vārpstai to, kura lielais diametrs ir vārpstas diametrs; urbumam to, kura mazais diametrs tam piegulst.

Vītne sākas virsmas atvērtajā galā, kur detaļa neturpinās pa asi: vārpstas brīvajā galā, urbuma ieejā. **Sākt otrā galā** to apgriež.

## Iestatījumi

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Forma** | ISO metriskā (60°), M1.6 līdz M64 rupja; trapeču (Tr, 30°), Tr8×1.5 līdz Tr60×9 | ISO metriskā |
| **Izmērs** | Pielāgot virsmai vai viens izmērs no saraksta | Pielāgot virsmai |
| **Visa virsma** | Noņemiet atzīmi, lai norādītu **Garumu (mm)**, mērītu no sākuma | Atzīmēts |
| **Sākt otrā galā** | Vītne iet no virsmas otra gala | Izslēgts |
| **Virziens** | Labā vītne vai kreisā vītne | Labā vītne |
| **Modelēta** | Izgriezt reālo spirālveida vītni | Izslēgts |
| **Atstarpe (mm)** | Redzama, kad atzīmēta Modelēta: cik mazāka ir vārpstas vītne un cik lielāka urbuma vītne visapkārt | 0.1 |

Izmērs, kas neder virsmai, tiek veidots tik un tā, nogriezts pēc virsmas, un panelis to saka, piemēram, "Ø12 mm vārpsta nav M10 Ø10 mm". Vairākas virsmas var dalīties vienā vītnes funkcijā; ar **Pielāgot virsmai** katrai ir savs izmērs.

## Modelētas vītnes 3D drukāšanai

Modelēta vītne seko standarta pamatprofilam: ISO 68-1 metriskām vītnēm (plakanas virsotnes un saknes, 60° malas), ISO 2901 trapeču vītnēm (30° malas). **Atstarpe** pārvieto visu profilu iekšup (vārpstai) vai uz āru (urbumam), lai drukātas detaļas saskrūvētos:

- **0.1 līdz 0.2 mm** der lielākajai daļai printeru. Vispirms izdrukājiet testa bultskrūvi un uzgriezni.
- **0** ir standarta profils detaļām, kas apstrādātas ar mašīnu, vai piegulšanas pārbaudei.

Bultskrūve un uzgrieznis ar vienādu atstarpi nekad nesaskaras pa malām: sprauga starp tiem ir divreiz lielāka par atstarpi visapkārt.

:::tip
Smalki soļi drukājas slikti: M3 un mazāki vai solis zem 0.5 mm ir tuvu tam, ko 0.4 mm sprausla var uzzīmēt. Modelējiet lielākas vītnes, bet mazām izmantojiet karstumā iestiprināmu ieliktni vai vītnētu caurumu.
:::

Modelēta vītne ir daļa no cietā ķermeņa: STL, 3MF un STEP eksporti to ietver, un Mērīšana to mēra. Tā padara detaļas pārbūvi smagāku: M10 vītne 20 garumā ir aptuveni 150 000 trijstūru.

## Vītnēti caurumi

**Vītnētam (ISO metriskam)** caurumam ir arī slēdzis **Modelēta**, ar tādu pašu **Atstarpi**. Skatiet [Urbumi un paplašinātie urbumi skices punktos](topic:holes).

## Kad vītne neveidojas

- "Vītne ir uz apaļas virsmas (cilindra): vārpsta vai urbums." Atlasītā virsma ir plakana vai citādi izliekta.
- "Nevienam standarta izmēram neder Ø0.6 mm apaļā virsma: izvēlieties izmēru." Pielāgošana virsmai neatrada nevienu izmēru 12 % robežās no virsmas. Izvēlieties **Izmēru** vai mainiet virsmu.
- "Virsma, uz kuras atradās šī vītne, ir pazudusi (…). Atlasiet to vēlreiz." Iepriekšēja izmaiņa noņēma virsmu. Noklikšķiniet uz {{ui:Atlasīt virsmas}} un vēlreiz noklikšķiniet uz virsmas.

:::note
Collu vītnes (UNC, UNF), caurules vītnes, konusveida vītnes, vītņu izbeigumi un nošķelti vītnes sākumi vēl nav izveidoti. Precīzais kodols modelētu vītni rāda kā kosmētisku.
:::
