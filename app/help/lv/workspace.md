---
title: PartCraft ekrāns
summary: Ekskursija pa katru joslu un paneli: rīkjosla un tās maiņa, vēsture, detaļas dati, 3D skats, īpašību panelis un statusa josla.
keywords: ekrāns, izkārtojums, rīkjosla, vēsture, elementu koks, īpašības, panelis, statusa josla, saskarne, ui, ekskursija, pilnekrāns
from: 7394fc49
---

Ekrānam ir pieci daļas: rīkjosla augšā, vēsture kreisajā pusē, 3D skats vidū, īpašību panelis labajā pusē un statusa josla apakšā. Virs visām sēž CadCraft lietotnes josla.

## Lietotnes josla

Plāna josla pašā augšā pieder CadCraft vietnei, nevis pašam PartCraft. Tā rāda lietotnes nosaukumu un vietu, kur tā darbojas, versijas izvēlni, **Par PartCraft**, pilnekrāna pogu un tēmas pārslēgu Papīrs / Modelis.

- **Papīrs** ir tumšas līnijas uz gaiša lapa. **Modelis** ir gaišas līnijas uz tumša fona. Skices krāsas seko tēmai.
- {{ui:Iestatījumi}} (zobrats vai {{key:Mod+,}}) ir cilne {{ui:PartCraft}}: kura peles poga pagriež skatu, peles ritenis vai skārienpaliktnis, un sakarības skicēšanas laikā. Skat. [PartCraft iestatījumi](topic:settings).
- Pilnekrāna poga vai {{key:Ctrl+Shift+F}} pārslēdz starp parasto, pilnekrānu un pilnekrānu ar paslēptām joslām. Ar paslēptām joslām pārvietojiet rādītāju uz augšējo malu (vai pieskarieties tur), lai tās atgrieztu. {{key:Esc}} atgriež parasto režīmu. Šis taustiņš ir {{key:Ctrl+Shift+F}} arī Mac datorā, nevis ⌘.

## Rīkjosla

Rīkjosla ir sagrupēta. Tā mainās atkarībā no tā, ko darāt, lai tā ietilptu vienā rindā:

| Grupa | Pogas | Redzamas |
|---|---|---|
| Fails | {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Saglabāt}}, {{ui:Eksportēt}} (izvēlne) | Vienmēr |
| Skice | {{ui:Skice}} | Kad nav atvērta neviena skice |
| Skice | {{ui:Iziet}}, {{ui:Līnija}}, {{ui:Taisnstūris}}, {{ui:Riņķis}}, {{ui:Loks}}, {{ui:Punkts}}, {{ui:Centrālā līnija}}, {{ui:Noapaļojums}}, {{ui:Izmērs}}, {{ui:Konstrukcija}} | Tikai kad skice ir atvērta |
| Elementi | {{ui:Izvilkt}}, {{ui:Izgriezt}}, {{ui:Rotēt}}, {{ui:Caurums}}, {{ui:Lineārs}}, {{ui:Cirkulārs}}, {{ui:Spoguļošana}}, {{ui:Noapaļojums}}, {{ui:Nošķelšana}}, {{ui:Čaula}}, {{ui:Vairāk}} (izvēlne: Rotēta izgriešana, Plakne, Ass, Punkts, Izvilkt pa līkni, Loftēt, Slīpums) | Uz detaļas, ne kad skice vai rasējums ir atvērts. Noapaļojums un nošķelšana darbojas uz taisnām malām starp divām plakanām virsmām; čaula un slīpums uz plakanām virsmām. Izvilkšana pa līkni un loftēšana vēl nav izveidotas šajā versijā (tām vajag precīzu kodolu); noklikšķinot uz kādas, tas tiek pateikts |
| Elementi | {{ui:Gatavs}} | Tikai kad izvēlaties malas vai virsmas noapaļojumam, nošķelšanai, čaulai vai slīpumam |
| Zīmējums | {{ui:Rasējums}} | Uz detaļas (lietojams, kad detaļai ir cietais ķermenis) |
| Zīmējums | {{ui:Bāze}}, {{ui:Rāmis}}, {{ui:Apstrāde}}, {{ui:Detaļskats}}, {{ui:PDF}}, {{ui:Atpakaļ}} | Tikai uz rasējuma lapas |
| Mezgls | {{ui:Montāža}} | Uz detaļas (lietojams, kad detaļai ir cietais ķermenis) |
| Mezgls | {{ui:Pievienot kopiju}}, {{ui:Ievietot}}, {{ui:Savienojums}}, {{ui:Sadursme}}, {{ui:Rediģēt detaļu}}, {{ui:Aizvērt}} | Tikai mezglā |
| Mezgls | {{ui:Atpakaļ}} | Kamēr rediģējat detaļu no mezgla |
| Rediģēt | {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Vairāk}} (izvēlne: Izgriezt, Kopēt, Ielīmēt, Ielīmēt vietā, Dublēt, Dzēst, Atlasīt visu, Noņemt atlasi) | Vienmēr; katrs vienums darbojas ar skici, vēsturi vai mezglu, kurā atrodaties |
| Skats | {{ui:Pielāgot}}, {{ui:Normāli pret}}, {{ui:Skati}} (izvēlne: Mērīt, Masas īpašības, Griezums, Slīpums, Zebra, Līkumi, {{ui:Pamatplaknes}}, tad Izometrija, Priekšskats, Aizmugure, Augša, Apakša, Labais, Kreisais) | Vienmēr |

Novietojiet peli virs pogas, lai redzētu, ko tā dara, un tās īsinājumtaustiņu. Pelēka poga šobrīd nav lietojama: piemēram, elementu pogas, kamēr skice ir atvērta, vai {{ui:Savienojums}}, kamēr mezglā nav divu detaļu.

Izvēlnē {{ui:Vairāk}} rediģēšanas grupā ir uzskaitīta katra rediģēšanas darbība ar tās taustiņu. To, uz ko attiecas kopēšana un ielīmēšana, nosaka tas, kur atrodaties; skat. [Kopēt, ielīmēt un dublēt](topic:copy-paste). Pelēka vienuma rīkpadoms saka, kāpēc tas šobrīd nevar darboties.

Izvēlnē {{ui:Eksportēt}} ir {{ui:STL 3D drukai}}, {{ui:3MF 3D drukai}}, {{ui:STEP AP242 (precīzs cietais ķermenis)}}, {{ui:STEP AP214 (precīzs cietais ķermenis)}}, {{ui:STEP (facetēts, tīkla kodols)}}, {{ui:STEP AP214 (facetēts, tīkla kodols)}}, {{ui:DXF no skices vai plakanas virsmas}} un {{ui:Rasējums (PDF): skati, griezums, detaļskats, GD&T}}. Divi precīzie STEP vienumi ir pelēki: tie šajā versijā vēl nav izveidoti, tāpēc izmantojiet {{ui:STEP (facetēts, tīkla kodols)}}.

## Vēsture (pa kreisi)

Panelis kreisajā pusē ir detaļas elementu vēsture, saraksts, ko PartCraft pārbūvē no augšas uz leju.

- Virsraksts ir detaļas nosaukums ("Part1", kamēr to nepārdēvējat).
- **Priekšējā plakne**, **Augšējā plakne** un **Labā plakne** ir pirmās. Noklikšķiniet uz vienas, lai to atlasītu; tā izceļas skatā.
- Zem tām ir jūsu elementi to izveidošanas secībā. Skice, ko izmanto elements, ir ievilkta zem šī elementa.
- Karogs rindas labajā galā rāda tās stāvokli:

| Karogs | Nozīme |
|---|---|
| (nekas) | Izveidots, un skice ir pilnībā definēta |
| − | Skice, kas nav pilnībā definēta (vēl var kustēties) |
| + | Skice, kas ir pārdefinēta |
| ⚠ | Izveidots ar brīdinājumu (uzvedziet, lai izlasītu) |
| ⚠ kļūda | Elements neizdevās. Uzvedziet, lai izlasītu iemeslu, vai noklikšķiniet uz tā |
| ⚠ nav izveidots | Elementam vajag citu, kas neizdevās vai ir izslēgts |
| izslēgts | Apturēts |

- Katram elementam pēc tā nosaukuma redzams tā galvenais skaitlis, piemēram, "25 mm" izvilkšanai vai "Ø6.6 cauri" caurumam. Veiciet dubultklikšķi uz skaitļa vai nospiediet {{key:F2}} rindā, lai to mainītu tieši tur. Skat. [Mainīt izmērus](topic:change-sizes).
- Noklikšķiniet uz elementa, lai to rediģētu labajā pusē. Veiciet dubultklikšķi uz skices, lai to atvērtu.
- Kad atgriežaties, sarakstā parādās rinda **Atgriešanās josla · virzīties uz priekšu**. Zem tās esošie elementi ir pelēki un nav izveidoti.
- Kad rinda ir fokusēta, {{key:Up}} un {{key:Down}} pārvieto starp rindām, un {{key:Alt+Up}} / {{key:Alt+Down}} pārvieto pašu elementu, kur vēsture to atļauj.

Mezglā tas pats panelis uzskaita **Detaļas** (pirmā atzīmēta kā "fiksēta") un **Savienojumi**.

### Detaļas dati

Zem vēstures lodziņš **Detaļa** uzskaita cietā ķermeņa **Tilpumu**, **Virsmas laukumu**, **Izmēru (X × Y × Z)**, **Caurumus cauri**, **Ķermeņus**, **Trijstūrus**, **Elementu** skaitu un to, cik no tiem **Ar kļūdām**. Tilpumi un laukumi ir no facetētā cietā ķermeņa, ko veido tīkla kodols, nedaudz zemāki apaļām formām (skat. [Elementi un to opcijas](topic:features#curves-resolution)).

Mezglā lodziņu virsraksta **Mezgls**: Detaļas, Gadījumi, Savienojumi, Nav savienotas un Interference.

## 3D skats (vidū)

Skatā redzams cietais ķermenis, pamatplaknes un katra skice, ko neizmanto neviens elements.

Pamatplaknes ir pilnībā zīmētas, kamēr detaļa ir tukša. Kad tai ir cietais ķermenis, tās atkāpjas: zīmētas blāvi, lai nesedz detaļu, un klikšķi iet caur tām uz detaļu. Tās atkal parādās pilnībā, kamēr izvēlaties, kur skicēt ({{ui:Skice}} bez izvēlēta), un kad atlasāt vienu vēsturē. {{ui:Skati}} › {{ui:Pamatplaknes}} tās paslēpj pavisam; tās joprojām redzamas, kamēr izvēlaties, kur skicēt. PartCraft atceras šo izvēli.

- Velciet, lai pagrieztu detaļu, ar labo vai vidējo pogu velciet, lai pārvietotu skatu, ritiniet ritenīti, lai tuvinātu rādītāja vietā. Sīkāk: [Taustiņi un pele](topic:keyboard).
- Uzvedziet virs virsmas, malas vai plaknes, lai redzētu, kā tā izceļas. Noklikšķiniet, lai atlasītu. Virsmas izceļas veselas, un malas tiek zīmētas un atlasītas veselas. {{key:Shift}}+klikšķis atlasa vairākas malas vai virsmas. Tās paliek atzīmētas.
- Skata kubs augšējā labajā stūrī pagriežas kopā ar detaļu: noklikšķiniet uz virsmas, malas vai stūra, lai skatītos no turienes; velciet, lai pagrieztu; mājas poga atgriež sākumu. Skat. [Skata kubs](topic:view-cube).
- Atlasītai izvilkšanai uz tās galvirsmas redzama oranža bultiņa, rotēšanai — izliekta bultiņa tās pagrieziena galā: velciet to, lai mainītu dziļumu vai leņķi, vai ierakstiet lodziņā blakus. Skat. [Mainīt izmērus](topic:change-sizes#drag-it-in-the-view).
- Kad detaļa ir tukša, kaste ar virsrakstu **Sākt detaļu** uzskaita pirmos soļus.
- Ievelciet `.partcraft.json` vai `.partcraft-asm.json` failu jebkur skatā, lai to atvērtu. Fails `.step`, `.stp`, `.stl`, `.obj`, `.3mf` vai `.3dm`, kas tur ievilkts, atveras kā cietais ķermenis.

### Kamēr izvēlaties malas vai virsmas

Pēc {{ui:Noapaļojums}}, {{ui:Nošķelšana}} vai {{ui:Čaula}} bez izvēlēta (vai {{ui:Atlasīt malas}} šādam elementam) detaļa rādās tā, kāda tā bija pirms šī elementa. Noklikšķiniet uz malām vai virsmām, lai tās pievienotu vai noņemtu; to atzīmes rāda, kas ir iekļauts. {{ui:Gatavs}} vai {{key:Esc}} pabeidz. Skat. [Noapaļot, nošķelt un padarīt dobu](topic:fillet-chamfer-shell).

### Uz rasējuma lapas

{{ui:Rasējums}} aizstāj 3D skatu ar A3 rasējuma lapu. Ritenītis tuvina, labā vai vidējā poga velk, lai pārvietotu skatu, {{key:F}} pielāgo. Skat. [Izveidot rasējumu](topic:drawing-pdf).

### Kamēr skice ir atvērta

Skats pagriežas, lai skatītos taisni uz skices plakni, un virs tās parādās 2D skices slānis. Detaļa rāda tikai tos elementus, kas izveidoti pirms šīs skices. Josla skata augšējā kreisajā stūrī rāda skices stāvokļa čipu ("Pilnībā definēts", "Nepilnībā definēts · 3 brīvības pakāpes" un tā tālāk) un tās nosaukumu, piemēram, "Sketch2 uz Extrude1 virsmas".

## Īpašību panelis (pa labi)

Panelis labajā pusē rāda to, kas ir atlasīts, un tā virsraksts to nosauc:

- **Detaļa** (nekas nav atlasīts): detaļas **Nosaukums** un iestatījums **Līknes**.
- Plakne: poga {{ui:Skice uz tās}}.
- **Virsma**: kāda tā ir (Plakana virsma, Cilindrs ar rādiusu un asi, Konuss, Sfēra vai Tors), tās laukums, kurš elements to izveidoja, un plakanai virsmai {{ui:Skice uz šīs virsmas}}, {{ui:Skatīt normāli}}, {{ui:Eksportēt virsmu kā DXF}}, {{ui:Izvilkt no tās}}, {{ui:Iegriezt tajā}} un {{ui:Caurums šeit}} (skat. [Vilkt vai spiest visu virsmu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Mala**: tās veids (taisna, aplis ar centru un rādiusu, vai līkne), tās garums un divas virsmas, starp kurām tā atrodas (piemēram, "Extrude1 galvirsma un Extrude1 sānu virsma"), ar pogām {{ui:Noapaļojums}} un {{ui:Nošķelšana}}.
- Vairākas malas vai virsmas, atlasītas ar {{key:Shift}}: cik no tām, ar {{ui:Noapaļojums}} un {{ui:Nošķelšana}} malām un {{ui:Notīrīt}}.
- Elements: tā skaitļi un opcijas, tās skices izmēri, tad {{ui:Apturēt}}, {{ui:Atgriezties līdz šeit}}, {{ui:Pārvietot augšup}}, {{ui:Pārvietot lejup}}, {{ui:Dzēst}} un tā **Nosaukums**.
- Atvērta skice: tās stāvoklis, sakarības, ko var pievienot atlasei, sakarību un izmēru saraksts, **Pievienot pēc koordinātām**, un {{ui:Iziet no skices}}, {{ui:Pielāgot}} un {{ui:Eksportēt kā DXF}}.
- Uz rasījuma lapas: griezuma un detaļskata iestatījumi vai izvēlētais GD&T simbols.
- Mezglā: mezgls, izvēlētā detaļa vai izvēlētais savienojums.

Katrs skaitļa lodziņš stājas spēkā, kad nospiežat {{key:Enter}} vai {{key:Tab}}, vai noklikšķināt ārpus tā. Detaļa tiek pārbūvēta uzreiz; nav pogas Labi. Izmantojiet {{key:Mod+Z}}, lai atgrieztos.

## Statusa josla (apakšā)

- Pa kreisi: rādītāja koordinātas skicē (tikai kad skice ir atvērta).
- Vidū: ziņojumi — kas darāms tālāk un kāpēc kaut kas tika noraidīts. Lasiet to, kad šķiet, ka nekas nenotiek.
- Tuvu labajam galam: kodola čips, šajā versijā vienmēr "Tīkla kodols". Novietojiet virs tā peli, lai uzzinātu, ko tas nozīmē. Skat. [Tīkla kodols](topic:solid-kernels).
- Labajā pusē: čips — "Pārbūvē…", kamēr detaļa tiek pārbūvēta, tad "Pārbūvēts … ms", kad viss ir kārtībā, vai "1 elements ar kļūdu". Mezglā tas rāda "Novietots … ms" vai saskaita savienojumu problēmas.

Skat. arī [Sākt rokasgrāmatu darbvidē Illustrate](topic:illustrate): darbvidi, kas no jūsu detaļām un mezgliem izveido mezgla rokasgrāmatas.

## Šaurs ekrāns

Līdz 760 pikseļiem platumā, piemēram, tālrunī, skats saglabā ekrānu: rīkjosla ir viena rinda, kas ritina sāniski, un paneļi atveras kā lapas no joslas apakšā. {{ui:Rīki}} paslēpj rīkjoslu, un {{ui:Pārvietot}} to novieto apakšā. Skat. [Skārienpaliktnis, skārienekrāns un mazi ekrāni](topic:trackpad-and-touch).
