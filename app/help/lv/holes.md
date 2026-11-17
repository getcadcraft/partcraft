---
title: Urbt caurumus un ieurbumus skices punktos
summary: Novietojiet punktus skicē uz virsmas, izveidojiet vienkāršus, ar ieurbumu, ar noslīpējumu vai ar vītni (ISO metriskus) caurumus katrā punktā, iestatiet diametru un dziļumu un labojiet caurumus, kas urbjas nepareizajā virzienā.
keywords: caurums, caurumu vednis, urbt, modelēta vītne, 3D drukāšana, ieurbums, cbore, noslīpējums, csink, vītnots caurums, vītne, vītņgriežņa urbis, metriskā vītne, M6, caur visu, akls caurums, skrūvju caurums, punkti, caurumu centri
from: 8e1eef83
---

{{ui:Caurums}} urb vienu caurumu katrā skices brīvajā punktā. Brīvais punkts ir tāds, kas izveidots ar Punkta rīku, nevis līnijas gals vai riņķa centrs.

## Caurumu urbšana virsmā

1. Noklikšķiniet uz plakanas virsmas, kurā urbt, pēc tam izvēlieties {{ui:Skice uz šīs virsmas}}.
2. Nospiediet {{key:P}} un noklikšķiniet, kur iet katrs caurums. Izmēriet punktus no malām vai sākumpunkta, ja to novietojums ir svarīgs (skatiet [Pilnībā definēt skici](topic:relations-dimensions)).
3. Izvēlieties {{ui:Iziet}}.
4. Izvēlieties {{ui:Caurums}}.

Caurumi iet caur detaļu, 6 mm diametrā. Labajā panelī redzams **Caurumi**: cik tika izveidoti, "viens katram skices punktam".

**Viens caurums, ātri:** noklikšķiniet uz plakanas virsmas, kur iet caurums, un labajā panelī izvēlieties {{ui:Caurums šeit}}. PartCraft vienā solī pievieno skici virsmai ar vienu punktu, kur noklikšķinājāt, un caurumu caur detaļu. Uzreiz ierakstiet skaitli un nospiediet {{key:Enter}} tā diametram. Lai to novietotu precīzi, atveriet jauno skici un izmēriet punktu.

**Kura skice tiek izmantota:** tikko aizvērtā vai atlasītā skice; citādi pēdējā neizmantotā skice, kurai ir brīvi punkti. Ja tādas nav: "Vispirms izveidojiet skici ar punktiem, kur iet caurumi (Skice uz virsmas, pēc tam Punkts)."

## Iestatījumi

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Tips** | Vienkāršs, Ieurbums, Noslīpējums, Vītnots (ISO metrisks) | Vienkāršs |
| **Diametrs (mm)** | Cauruma diametrs | 6 |
| **Caur visu** | Atzīmēts: tieši caur detaļu. Noņemiet atzīmi aklam caurumam | Atzīmēts |
| **Dziļums (mm)** | Rādīts, kad Caur visu nav atzīmēts | 10 |
| **Ieurbuma ⌀** | Rādīts ieurbumam: plašākās iedobes diametrs | 11 |
| **Ieurbuma dziļums** | Rādīts ieurbumam | 6 |
| **Mainīt virzienu** | Urbj uz otru pusi no skices plaknes | Izslēgts |

Caurumi urbjas materiālā, perpendikulāri skices plaknei. Akla cauruma dziļums tiek mērīts no skices plaknes; tā apakša ir plakana.

## Skrūves caurums ar ieurbumu

1. Izveidojiet caurumus kā iepriekš.
2. Iestatiet **Tips** uz **Ieurbums**.
3. Iestatiet **Diametrs (mm)** uz `6.6` (brīvgaita M6 skrūvei), **Ieurbuma ⌀** uz `11` un **Ieurbuma dziļums** uz `6.5`.

Ieurbumam jābūt platākam par caurumu ("Ieurbumam jābūt platākam par caurumu.") un, aklam caurumam, seklākam par to ("Ieurbumam jābūt seklākam par caurumu.").

## Skrūvju aplis

Caurumiem, kas vienmērīgi izvietoti ap centru, izveidojiet **vienu** caurumu un veidojiet masīvu: atlasiet Cauruma elementu, pēc tam izvēlieties {{ui:Cirkulārs}} (skatiet [Masīvu un spoguļu elementi](topic:patterns-mirror)). Masīvs seko, kad maināt cauruma izmēru.

## Kad caurumi iet nepareizi

- "Skices šajā pusē nav nekā, ko urbt. Pamēģiniet mainīt virzienu." Skice atrodas materiāla otrā pusē. Atzīmējiet **Mainīt virzienu**.
- "Novietojiet skices punktus, kur iet caurumi (Punkta rīks), pēc tam izveidojiet caurumu." Skicei nav brīvu punktu. Līniju gali un riņķu centri neskaitās.
- "Vēl nav nekā, ko urbt." Caurumam vajadzīgs ciets ķermenis. Vispirms izveidojiet izcilni.

## Caurumi montāžās

Katram caurumam ir ass. Montāžā **Centrēt uz** var novietot savienojumu uz cauruma ass, uzskaitīts kā "Hole1, hole 2", lai tapa vai skrūves detaļa saskaņotos ar to. Skatiet [Montāžas izveide](topic:build-assembly).

## Caurumi ar noslīpējumu

Iestatiet **Tips** uz **Noslīpējums**, pēc tam **Noslīpējuma ⌀** (virsmā) un **Noslīpējuma leņķis**: 90° (ISO metriskām plakangalvas skrūvēm) vai 82° (collu skrūvēm). Noslīpējuma diametru ņemiet no skrūvju ražotāja datiem (nedaudz vairāk par skrūves galvas diametru). Konusa virsmu paneļos sauc par "countersink".

## Vītnotie caurumi

Iestatiet **Tips** uz **Vītnots (ISO metrisks)** un izvēlieties **Vītne**, M2 līdz M24 ar rupjo soli. Caurums tiek urbts ar vītņgriežņa urbja izmēru no tabulas zemāk (nominālais diametrs mīnus solis, līdz urbju sērijai, kā ISO 2306 uzskaita 6H vītnei); lauks **Diametrs (mm)** netiek izmantots. Aklam caurumam **Vītnes dziļums (mm)** nosaka, cik dziļi iet vītne.

| Vītne | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Solis | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Vītņgriežņa urbis ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Vītne sākumā ir **kosmētiska**: modelī ir urbtais caurums, skats vītnes lielāko diametru zīmē ar punktētiem riņķiem, un rasējuma lapā izsaukums ir kā piezīme, piemēram, "4× M8×1.25 - 6H, vītne caur". STEP eksportē tikai urbto caurumu.

Atzīmējiet **Modelēts**, lai caurumā izgrieztu reālo spirālveida vītni 3D drukāšanai. **Atstarpe (mm)** padara to par tik lielāku visapkārt, lai izdrukāta skrūve iederētos: 0.1 līdz 0.2 mm der vairumam printeru. Izsaukums tad beidzas ar "(modelēts)". Skatiet [Vītnes uz vārpstām un urbumiem, zīmētas vai modelētas](topic:threads), kur arī liek vītnes uz vārpstām.

:::note
Preturbti caurumi, collu vītnes un caurules vītnes vēl nav izveidotas.
:::
