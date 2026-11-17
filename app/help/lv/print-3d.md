---
title: Detaļas sagatavošana 3D drukai
summary: Pārbaudiet, vai detaļa vai mezgls ir slēgts, ietilpst jūsu printera drukas platformā un stāv uz pamatnes, tad lejupielādējiet to kā STL vai 3MF savai slicer programmai.
keywords: 3D drukāšana, 3D druka, printeris, drukāt, slicer, stl, 3mf, hermētisks, slēgts, slēgta virsma, platforma, platformas izmērs, drukas plāksne, pārkare, atbalsti, pamatne, milimetri, eksportēt, vītnes, atstarpe
from: 90d81dff
---

Slicer programmai nepieciešama slēgta forma: bez caurumiem, katra virsma vērsta uz āru, nekas neiet caur sevi. PartCraft veidotas detaļas pēc konstrukcijas ir slēgtas, tāpēc pārbaude galvenokārt parāda izmēru, to, vai detaļa ietilpst jūsu printera drukas platformā, vai tā stāv uz plakanas virsmas un cik daudz tā pārkarājas.

## Pārbaudīt un lejupielādēt

1. Pēc izvēles, vienreiz: iestatiet printera drukas platformu sadaļā {{ui:Iestatījumi}} › PartCraft › **3D printeris**: platums, dziļums un augstums milimetros. Atstājiet tukšus, lai izlaistu šo pārbaudi.
2. Izvēlieties {{ui:Eksportēt}}, tad {{ui:Pārbaude 3D drukāšanai (STL vai 3MF)…}}.

   Dialogs rāda "Gatavs drukāšanai" vai "Nav gatavs drukāšanai", uzskaita visu, kas nav kārtībā, un sniedz izmēru uz drukas platformas (X × Y × Z, milimetros), tilpumu un trīsstūru skaitu.

3. Noklikšķiniet uz {{ui:Lejupielādēt 3MF}} vai {{ui:Lejupielādēt STL}}. Fails ir tāds pats kā {{ui:Eksportēt}} › {{ui:3MF 3D drukai}} vai {{ui:STL 3D drukai}}.

Mezglā pārbaude un faili ņem visu mezglu, katru kopiju tur, kur tā ir novietota.

Detaļa tiek pārbaudīta stāvot tāda, kāda tā tiek eksportēta: ko PartCraft norāda uz augšu (perpendikulāri augšējai plaknei), to drukas platformā norāda uz augšu. Detaļa, kas skicēta uz augšējās plaknes, guļ plakani.

## Ko dialogs var pateikt

**Nav gatavs drukāšanai** (slicer var to noraidīt vai izdrukāt nepareizi): caurumi (šķautnes, kurām virsma ir tikai vienā pusē), šķautnes, kurās saskaras trīs vai vairāk virsmu, virsmas, kas vērstas pretējos virzienos, ķermenis, kas apgriezts uz iekšu, vai ķermenis, kas iet caur sevi. PartCraft veidotai detaļai to nekad nevajadzētu rādīt; ja tomēr rāda, skatiet [Problēmu novēršana](topic:troubleshooting).

**Brīdinājumi** (izdrukās, bet vispirms paskatieties):

- **Lielāka par printera drukas platformu**, pat pagriezta par 90° uz tās.
- **Apakšā nekas neguļ plakani**: pagrieziet detaļu slicer programmā tā, lai virsma atrastos uz drukas platformas, citādi tai būs vajadzīgi atbalsti vai pamatne.
- **Noslīd vairāk nekā 45° no vertikāles**: šīm virsmām, stāvot kā tagad, vajadzīgs atbalsts. Cits novietojums var prasīt mazāk.
- **Atsevišķi ķermeņi pārklājas** vai **saskaras virsma pret virsmu**: slicer parasti tos apvieno. {{ui:Apvienot}} sadaļā Elementi › {{ui:Vairāk}} tos savieno vienā ķermenī. Skatiet [Ķermeņi](topic:bodies).
- **Mazāk nekā 1 mm pāri**: pārbaudiet detaļas izmērus.

## Vītnes, kas drukājas

Modelēta vītne drukājas kā īsta vītne. Dodiet tai nedaudz **Atstarpe**, lai izdrukāta skrūve iekļautos izdrukātā uzgrieznī: skatiet [Vītnes](topic:threads).

## Gludas apaļas virsmas

STL un 3MF sastāv no trīsstūriem. Lai apaļas virsmas būtu gludākas, noklikšķiniet uz tukšas vietas, lai nekas nav atlasīts, un labajā panelī pirms eksportēšanas iestatiet **Līknes** uz **Smalka (128 uz apgriezienu)** vai **Ļoti smalka (256 uz apgriezienu)**. Vairāk trīsstūru nozīmē lielākus failus.

## Lielāka, mazāka vai pa daļām

- **Eksportēt › Mērogot drukāšanai (STL vai 3MF)…** saglabā detaļu, mērogotu pa asīm, nemainot to: **sarukuma pielaide** procentos (izmērs × (1 + s) vai precīzs izmērs ÷ (1 − s)) lējuma šablonam vai vienkārši koeficienti ap vidu, zemāko stūri, apakšas vidu vai sākumpunktu.
- **Eksportēt › Sadalīt drukāšanai (ZIP ar gabaliem)…** sagriež detaļu, kas printerim par lielu, gabalos, katrs ietilpst norādītajā platformā. Gabalus savieno tapas, atslēgas, astes savienojumi, tapu caurumi vai magnētu ligzdas (ar iestatīto atstarpi). Katrs gabals un savienojums ir numurēts, un gabali tiek saglabāti kā STL vai 3MF ZIP failā kopā ar mezgla lapu. Pati detaļa nemainās.

## Netiek pārbaudīts

Sienu biezums, detaļas, kas mazākas par jūsu sprauslu, un tas, kā slicer novietos atbalstus. To parāda jūsu slicer programma.
