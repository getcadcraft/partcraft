---
title: PartCraft ekrāns
summary: Visu joslu un paneļu apskats: rīkjosla un tās izmaiņas, vēsture, detaļas fakti, 3D skats, rekvizītu panelis un statusa josla.
keywords: ekrāns, izkārtojums, rīkjosla, vēsture, elementu koks, rekvizīti, panelis, statusa josla, saskarne, ui, apskats, pilnekrāns
from: 5b5bb843
---

Ekrānam ir piecas daļas: rīkjosla augšā, vēsture pa kreisi, 3D skats vidū, rekvizītu panelis pa labi un statusa josla apakšā. Virs visām sēž CadCraft lietotnes josla.

## Lietotnes josla

Plānā josla augšā pieder CadCraft vietnei, nevis pašam PartCraft. Tā rāda lietotnes nosaukumu un vietu, kur tā darbojas, versijas izvēlni, **Par PartCraft**, ekrāna režīma pogu un motīva pārslēgu Papīrs / Modelis.

- **Papīrs** ir tumšas līnijas uz gaiša lapas. **Modelis** ir gaišas līnijas uz tumša fona. Skicu krāsas seko motīvam.
- {{ui:Iestatījumi}} (zobrats vai {{key:Mod+,}}) ir cilne {{ui:PartCraft}}: kura peles poga pagriež skatu, peles ritenis vai skārienpaliktnis, un attiecības skicēšanas laikā. Skatīt [PartCraft iestatījumi](topic:settings).
- Ekrāna režīma poga vai {{key:Ctrl+Shift+F}} pārslēdz starp normālu, pilnekrānu un pilnekrānu ar paslēptām joslām. Ar paslēptām joslām pārvietojiet rādītāju uz augšējo malu (vai pieskarieties tur), lai tās atgrieztu. {{key:Esc}} atgriež normālo. Šis taustiņš ir {{key:Ctrl+Shift+F}} arī Mac datorā, nevis ⌘.

## Rīkjosla

Rīkjosla ir sagrupēta. Tā mainās atkarībā no tā, ko darāt, lai ietilptu vienā rindā:

| Grupa | Pogas | Rādīts |
|---|---|---|
| {{ui:Fails}} | {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Saglabāt}}, {{ui:Eksportēt}} (izvēlne) | Vienmēr |
| {{ui:Skice}} | {{ui:Skice}} | Kad nav atvērta skice |
| {{ui:Skice}} | {{ui:Iziet}}, {{ui:Līnija}}, {{ui:Taisnstūris}}, {{ui:Riņķis}}, {{ui:Loks}}, {{ui:Punkts}}, {{ui:Centrālā līnija}}, {{ui:Noapaļojums}}, {{ui:Izmērs}}, {{ui:Konstrukcija}} | Tikai tad, kad skice ir atvērta |
| {{ui:Elementi}} | {{ui:Izvilkt}}, {{ui:Izgriezt}}, {{ui:Rotēt}}, {{ui:Caurums}}, {{ui:Lineārs}}, {{ui:Cirkulārs}}, {{ui:Spoguļošana}}, {{ui:Noapaļojums}}, {{ui:Nošķelšana}}, {{ui:Čaula}}, {{ui:Vairāk}} (izvēlne: Rotējošais izgriezums, Plakne, Ass, Punkts, Izvilkums, {{ui:Pārejas virsma}}, Slīpums) | Uz detaļas, ne tad, kad ir atvērta skice vai rasējums. Noapaļojums un nošķelšana darbojas uz taisnām malām starp divām plakanām virsmām; čaula un slīpums — uz plakanām virsmām. Izvilkums un pārejas virsma šajā versijā vēl nav izveidoti (tie prasa precīzo kodolu); noklikšķinot uz kāda, to saka |
| {{ui:Elementi}} | {{ui:Gatavs}} | Tikai tad, kad izvēlaties malas vai virsmas noapaļojumam, nošķelšanai, čaulai vai slīpumam |
| {{ui:Rasējums}} | {{ui:Rasējums}} | Uz detaļas (kad detaļai ir cietais ķermenis) |
| {{ui:Rasējums}} | {{ui:Bāze}}, {{ui:Rāmis}}, {{ui:Apstrāde}}, {{ui:Detaļskats}}, {{ui:PDF}}, {{ui:Atpakaļ}} | Tikai uz rasējuma lapas |
| {{ui:Montāža}} | {{ui:Mezgls}} | Uz detaļas (kad detaļai ir cietais ķermenis) |
| {{ui:Montāža}} | {{ui:Pievienot kopiju}}, {{ui:Ievietot}}, {{ui:Savienojums}}, {{ui:Sadursme}}, {{ui:Rediģēt detaļu}}, {{ui:Aizvērt}} | Tikai mezglā |
| {{ui:Montāža}} | {{ui:Atpakaļ}} | Kamēr rediģējat detaļu no mezgla |
| {{ui:Rediģēt}} | {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Vairāk}} (izvēlne: {{ui:Izgriezt}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, Ielīmēt vietā, Dublēt, {{ui:Dzēst}}, {{ui:Atlasīt visu}}, Noņemt atlasi) | Vienmēr; katrs vienums darbojas ar skici, vēsturi vai mezglu, kurā atrodaties |
| {{ui:Skats}} | {{ui:Pielāgot}}, {{ui:Skatīt normāli}}, {{ui:Skati}} (izvēlne: Mērījums, Masas īpašības, {{ui:Griezums}}, Slīpums, {{ui:Zebra}}, Līkums, {{ui:Pamatplaknes}}, tad Izometrija, {{ui:Priekšskats}}, {{ui:Atpakaļ}}, {{ui:Augšskats}}, {{ui:Apakšskats}}, {{ui:Labais skats}}, {{ui:Kreisais skats}}) | Vienmēr |

Novietojiet rādītāju virs pogas, lai redzētu, ko tā dara un kāds ir tās taustiņš. Pelēka poga pašlaik nav izmantojama: piemēram, elementu pogas, kamēr ir atvērta skice, vai {{ui:Savienojums}}, kamēr mezglam nav divu detaļu.

Izvēlnē {{ui:Vairāk}} grupā Rediģēt uzskaitīta katra rediģēšanas darbība ar tās taustiņu. Ko kopēt un ielīmēt, atkarīgs no tā, kur atrodaties; skatīt [Kopēt, ielīmēt un dublēt](topic:copy-paste). Pelēka vienuma padoms norāda, kāpēc tas pašlaik nedarbojas.

Izvēlnē {{ui:Eksportēt}} ir {{ui:STL 3D drukai}}, {{ui:3MF 3D drukai}}, {{ui:STEP AP242 (precīzs cietais ķermenis)}}, {{ui:STEP AP214 (precīzs cietais ķermenis)}}, {{ui:STEP (facetēts, tīkla kodols)}}, {{ui:STEP AP214 (facetēts, tīkla kodols)}}, {{ui:DXF no skices vai plakanas virsmas}} un {{ui:Rasējums (PDF): skati, griezums, detaļskats, GD&T}}. Precīzie STEP vienumi raksta apaļās virsmas uz to patiesajām virsmām; facetētie tās raksta kā plakanas facetes.

## Vēsture (pa kreisi)

Panelis pa kreisi ir detaļas elementu vēsture, saraksts, ko PartCraft pārbūvē no augšas uz leju.

- Virsraksts ir detaļas nosaukums ("Part1", kamēr to nepārdēvējat).
- **Priekšējā plakne**, **Augšējā plakne** un **Labā plakne** ir pirmās. Noklikšķiniet uz vienas, lai to atlasītu; tā iezīmējas skatā.
- Zemāk ir jūsu elementi to izveides secībā. Skice, ko izmanto elements, ir iespraudta zem šī elementa.
- Karogs rindas labajā galā norāda tās stāvokli:

| Karogs | Nozīme |
|---|---|
| (nav) | Izveidots, un skice ir pilnībā definēta |
| − | Skice, kas ir nepilnīgi definēta (tā vēl var pārvietoties) |
| + | Skice, kas ir pārmērīgi definēta |
| ⚠ | Izveidots ar brīdinājumu (uzvirziet, lai izlasītu) |
| ⚠ kļūda | Elements neizdevās. Uzvirziet, lai izlasītu, kāpēc, vai noklikšķiniet uz tā |
| ⚠ nav izveidots | Elements prasa citu, kas neizdevās vai ir izslēgts |
| izslēgts | Apturēts |

- Katram elementam tā galvenais skaitlis ir redzams aiz nosaukuma, piemēram, "25 mm" izvilkumam vai "Ø6.6 thru" caurumam. Divreiz noklikšķiniet uz skaitļa vai nospiediet {{key:F2}} rindā, lai to mainītu tieši tur. Skatīt [Izmainīt izmērus](topic:change-sizes).
- Noklikšķiniet uz elementa, lai to rediģētu labajā pusē. Divreiz noklikšķiniet uz skices, lai to atvērtu.
- Kad atgriežaties atpakaļ, sarakstā parādās rinda **Atgriešanās josla · atkārtoti uz priekšu**. Zem tās esošie elementi ir pelēki un nav izveidoti.
- Kad rinda ir fokusēta, {{key:Up}} un {{key:Down}} pārvieto starp rindām, un {{key:Alt+Up}} / {{key:Alt+Down}} pārvieto pašu elementu, kur vēsture to atļauj.

Mezglā tas pats panelis uzskaita **Detaļas** (pirmā ir atzīmēta kā "iezemēta") un **Savienojumus**.

### Detaļas fakti

Zem vēstures lodziņš **Detaļa** uzskaita cietā ķermeņa **Tilpums**, **Virsmas laukums**, **Izmērs (X × Y × Z)**, **Caurumi cauri**, **Ķermeņi**, **Trijstūri**, elementu skaitu **Elementi** un cik no tiem **Kļūdainie**. Tilpumi un laukumi ir no facetētā cietā ķermeņa, ko veido tīkla kodols, nedaudz mazāki par patieso vērtību apaļām formām (skatīt [Elementi un to opcijas](topic:features#curves-resolution)).

Mezglā lodziņa virsraksts ir **Montāža**: Detaļas, Gadījumi, Savienojumi, Nav savienotas un Traucējumi.

## 3D skats (vidū)

Skats rāda cieto ķermeni, pamatplaknes un katru skici, ko vēl neizmanto neviens elements.

Pamatplaknes ir zīmētas pilnībā, kamēr detaļa ir tukša. Kad tai ir cietais ķermenis, tās atkāpjas: zīmētas blāvi, lai tās neaizsegtu detaļu, un klikšķi iet caur tām uz detaļu. Tās atgriežas pilnībā, kamēr izvēlaties, kur skicēt ({{ui:Skice}} bez izvēlēta), un kad vēsturē atlasāt kādu no tām. {{ui:Skati}} › {{ui:Pamatplaknes}} tās paslēpj pilnībā; tās joprojām rādās, kamēr izvēlaties, kur skicēt. PartCraft atceras šo izvēli.

- Velciet, lai pagrieztu detaļu; peles labā vai vidējā poga, lai pārvietotu; ritiniet ritenīti, lai tālummainītu pie rādītāja. Sīkāk [Taustiņi un pele](topic:keyboard).
- Novietojiet rādītāju virs virsmas, malas vai plaknes, lai to redzētu iezīmētu. Noklikšķiniet, lai to atlasītu. Virsmas iezīmējas veselas, un malas tiek zīmētas un atlasītas veselas. {{key:Shift}}+klikšķis savāc vairākas malas vai virsmas; tās paliek atzīmētas.
- Skata kubs augšējā labajā stūrī pagriežas kopā ar detaļu: noklikšķiniet uz virsmas, malas vai stūra, lai skatītos no turienes, velciet, lai pagrieztu, mājas poga atgriež sākumā. Skatīt [Skata kubs](topic:view-cube).
- Atlasot izvilkumu, uz tā gala virsmas redzama oranža bultiņa, bet rotācijai — izliekta bultiņa tās pagrieziena galā: velciet, lai mainītu dziļumu vai leņķi, vai ierakstiet lodziņā blakus. Skatīt [Izmainīt izmērus](topic:change-sizes#drag-it-in-the-view).
- Kad detaļa ir tukša, lodziņš ar virsrakstu **Sākt detaļu** uzskaita pirmos soļus.
- Ievelciet `.partcraft.json` vai `.partcraft-asm.json` failu jebkur uz skata, lai to atvērtu. `.step`, `.stp`, `.stl`, `.obj`, `.3mf` vai `.3dm` fails, kas tur ievilkts, tiek atvērts kā cietais ķermenis.

### Kamēr izvēlaties malas vai virsmas

Pēc {{ui:Noapaļojums}}, {{ui:Nošķelšana}} vai {{ui:Čaula}} bez izvēlēta (vai {{ui:Atlasīt malas}} šādam elementam) detaļa rādās tāda, kāda tā bija pirms šī elementa. Noklikšķiniet uz malām vai virsmām, lai pievienotu vai noņemtu tās; to atzīmes parāda, kas ir iekšā. {{ui:Gatavs}} vai {{key:Esc}} beidz. Skatīt [Noapaļot, nošķelt un izdobt](topic:fillet-chamfer-shell).

### Rasējuma lapā

{{ui:Rasējums}} aizvieto 3D skatu ar A3 rasējuma lapu. Ritenītis tālummaina, peles labā vai vidējā poga pārvieto, {{key:F}} pielāgo. Skatīt [Izveidot rasējumu](topic:drawing-pdf).

### Kamēr skice ir atvērta

Skats pagriežas, lai skatītos taisni uz skices plakni, un virs tā parādās 2D skices slānis. Detaļa rāda tikai elementus, kas izveidoti pirms šīs skices. Josla augšējā kreisajā stūrī rāda skices stāvokļa čipu ("Pilnībā definēta", "Nepilnīgi definēta · 3 brīvības pakāpes" un tā tālāk) un tās nosaukumu, piemēram, "Sketch2 uz Extrude1 virsmas".

## Rekvizītu panelis (pa labi)

Panelis pa labi rāda to, kas ir atlasīts, un tā virsraksts to nosauc:

- **Detaļa** (nekas nav atlasīts): detaļas **Nosaukums** un **Līknes** iestatījums.
- Plakne: poga {{ui:Skice uz tās}}.
- **Virsma**: tās veids (Plakana virsma, Cilindrs ar savu rādiusu un asi, Konuss, Sfēra vai Tors), tās laukums, kurš elements to izveidoja, un plakanai virsmai {{ui:Skice uz šīs virsmas}}, {{ui:Skatīt normāli}}, {{ui:Eksportēt virsmu kā DXF}}, {{ui:Izvilkt no tās}}, {{ui:Iegriezt tajā}} un {{ui:Caurums šeit}} (skatīt [Pavilkt vai nospiest visu virsmu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Mala**: tās veids (taisna, aplis ar centru un rādiusu vai līkne), tās garums un divas virsmas, starp kurām tā atrodas (piemēram, "Extrude1 beigu virsma un Extrude1 sānu virsma"), ar pogām {{ui:Noapaļojums}} un {{ui:Nošķelšana}}.
- Vairākas malas vai virsmas, ko atlasāt ar {{key:Shift}}: cik to ir, ar {{ui:Noapaļojums}} un {{ui:Nošķelšana}} malām, un {{ui:Notīrīt}}.
- **Elements**: tā skaitļi un opcijas, tās skices izmēri, tad {{ui:Apturēt}}, {{ui:Atgriezties līdz šeit}}, {{ui:Pārvietot augšup}}, {{ui:Pārvietot lejup}}, {{ui:Dzēst}} un tā **Nosaukums**.
- Atvērta skice: tās stāvoklis, attiecības, ko varat pievienot izvēlei, attiecību un izmēru saraksts, **Pievienot pēc koordinātēm**, un {{ui:Iziet no skices}}, {{ui:Pielāgot}} un {{ui:Eksportēt kā DXF}}.
- Rasējuma lapā: griezuma un detaļskata iestatījumi vai atlasītais GD&T simbols.
- Mezglā: mezgls, atlasītā detaļa vai atlasītais savienojums.

Katrs skaitļa lodziņš stājas spēkā, kad nospiežat {{key:Enter}} vai {{key:Tab}}, vai noklikšķiniet ārpus tā. Detaļa uzreiz pārbūvējas; pogas Labi nav. Izmantojiet {{key:Mod+Z}}, lai atgrieztos.

## Statusa josla (apakšā)

- Pa kreisi: rādītāja koordinātes skicē (tikai tad, kad skice ir atvērta).
- Vidū: ziņojumi — kas darāms tālāk un kāpēc kaut kas noraidīts. Lasiet to, kad šķiet, ka nekas nenotiek.
- Pie labās malas: kodola čips, šajā versijā vienmēr "Tīkla kodols". Uzvirziet, lai uzzinātu, ko tas nozīmē. Skatīt [Tīkla kodols](topic:solid-kernels).
- Labajā pusē čips: "Pārbūvē…", kamēr detaļa pārbūvējas, tad "Pārbūvēts … ms", kad viss ir kārtībā, vai "1 kļūdains elements". Mezglā tas saka "Novietots … ms" vai skaita savienojumu problēmas.

Skatīt arī [Sākt rokasgrāmatu Illustrate](topic:illustrate): darba vide, kas veido mezgla rokasgrāmatas no jūsu detaļām un mezgliem.

## Šaurs ekrāns

Līdz 760 pikseļiem platumā, piemēram, tālrunī, skats saglabā ekrānu: rīkjosla ir viena rinda, kas ritina sāniski, un paneļi atveras kā lapas no joslas apakšā. {{ui:Rīki}} paslēpj rīkjoslu, un {{ui:Pārvietot}} to novieto apakšā. Skatīt [Skārienpaliktnis, skāriens un mazi ekrāni](topic:trackpad-and-touch).
