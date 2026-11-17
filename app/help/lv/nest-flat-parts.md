---
title: Plakanu detaļu izvietošana loksnēs
summary: Izvietojiet plakanas detaļas uz plāksnēm vai rullī ar pēc iespējas mazāku atlikumu, ne tuvāk par norādīto attālumu, un saglabājiet izkārtojumu kā DXF lāzeram, plazmai, ūdensstrūklai vai frēzei.
keywords: izvietošana, izvietot, loksne, plāksne, rullis, lāzers, plazma, ūdensstrūkla, frēze, griešana, izmantošana, materiāla izmantojums, atkritumi, lūžņi, attālums, griezuma platums, šķiedra, velmēšanas virziens, dxf, plakanais izklājums, kontūras
from: 8dcce1a6
---

**Izvietošana** novieto daudzas plakanas detaļas uz loksnes tā, lai paliktu pēc iespējas mazāk materiāla. PartCraft novieto detaļas pa vienai, katru tur, kur loksnes izmantotais garums ir īsākais, izmēģina vairākas kārtības un aprēķina dažu sekunžu laikā, un paliek labākais variants. Detaļas var novietot citu detaļu caurumos un L vai U formas iekšpusē.

## Atvēršana

- {{ui:Eksportēt}} › {{ui:Izvietot plakanas detaļas loksnēs…}} to atver ar detaļas plakano izklājumu vai, montāžā, ar katras loksnes metāla detaļas plakano izklājumu, tik reizes, cik ir kopiju.
- Loksnes metāla detaļai: {{ui:Izlīdzināt}}, un tad {{ui:Izvietot loksnēs…}} zem plakanā izklājuma.
- {{ui:Pievienot kontūras no DXF…}} pievieno katru slēgtu kontūru DXF failā kā detaļu: rasējumu no CadCraft, kas saglabāts kā DXF, vai failu no jūsu griezēja pašas programmatūras. Kontūra iekšpusē citai kontūrai ir caurums tajā. Līnijas un loki, kas savienojas galu galā, skaitās kā viena kontūra. Faili collās, centimetros vai metros tiek pārvērsti milimetros.

:::note
Loksnes metāla izlīdzināšanai vajadzīga precīza ģeometrijas kodols (skatiet [Loksnes metāls](topic:sheet-metal)). Kontūras no DXF faila vienmēr darbojas.
:::

## Iestatīšana

Katrai detaļai norādiet **cik** jums vajag un tās **šķiedru**: {{ui:Jebkurš virziens}}, {{ui:Gar loksni (kā zīmēts)}} slīpētai vai velmētai loksnei, kam jāiet vienā virzienā, vai {{ui:Šķērsām pret loksni}}.

Zem **Loksnes**:

- **Krājums**: {{ui:Plāksnes}} norādītā garuma un platuma (un cik jums ir; 0 = cik vajag), vai {{ui:Rullis}} norādītā platuma, cik garš vajag.
- **Malu atstarpe** tiek atstāta brīva pa visām loksnes malām (spailēm vai neviendabīgai malai).
- **Atstarpe starp detaļām** ir mazākais attālums starp divām griezuma līnijām: vismaz jūsu griezēja griezuma platums plus tas, ko prasa materiāls.
- **Pagriezieni**: leņķi, kādos detaļu drīkst pagriezt, pēc noklusējuma ik pa 90°. Mazāk pagriezienu darbojas ātrāk; vairāk var labāk izmantot loksni.
- **Detaļas drīkst apgriezt otrādi** ļauj novietot detaļu ar apakšpusi uz augšu. Loksnes metālam to izslēdziet: plakanais izklājums, kas novietots apgriezts, liecas pretējā virzienā.

Nospiediet {{ui:Izvietot}}. Priekšskatījumā redzama katra loksne; fakti norāda, cik plāksnes (vai cik daļa rullī) izmantotas un cik materiāla aizņem detaļas. Nosaukts tiek viss, kas neiekļāvās.

## Saglabāšana

{{ui:Saglabāt DXF}} saglabā izkārtojumu kā DXF (R12, milimetri), vienu loksni zem otras: loksņu kontūras slānī SHEET, detaļas slānī PARTS (lokus saglabā kā lokus), katras detaļas nosaukumu slānī LABELS.

:::tip
Vairāku detaļu sajaukums parasti izvietojas labāk nekā daudzas viena veida kopijas: mazas detaļas aizpilda spraugas starp lielām.
:::

## Loksņu griešana (G-kods)

**Eksportēt › Izvietotās loksnes uz G-kodu** nolasa izvietotu DXF (šo vai Cabinets papildinājuma loksnes programmā CadCraft) un izveido vienu programmu katrai loksnei caur jūsu izvēlēto postprocesoru: vispirms caurumi un izgriezumi, tad kontūras. Katrs griezums iet par instrumenta rādiusu ārpus detaļas, cauri loksnei un vēl 1 mm tālāk, ar stiprinājumu tiltiņiem, ja tos pieprasāt. Postprocesoru saraksts ir iebūvētie postprocesori un jūsu paša Manufacture pētījuma postprocesori. Pārbaudiet katru programmu simulatorā pirms palaišanas: urbšana un dobumi netiek izveidoti.

## Ko pārbaudīt

PartCraft pārbauda katru izkārtojumu vēlreiz uz īstajām formām (nevis uz režģa, kuru tas meklēja): nevienas divas detaļas nav tuvāk par atstarpi, nekas neatrodas malās. Tas neplāno griezumu: iebraukšanas ceļus, griezuma secību, kopīgu malu griešanu vienreiz un atlikušās loksnes saglabāšanu veic jūsu griezēja programmatūra. Pirms griešanas pārbaudiet DXF tur.
