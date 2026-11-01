---
title: Darba sākšana ar PartCraft
summary: Ko PartCraft dara šobrīd, ko vajag jūsu pārlūkprogrammai un pirmā detaļa desmit minūtēs, no skices līdz saglabātam failam.
keywords: darba sākums, pirmā palaišana, ātrais sākums, ievads, apmācība, pirmā detaļa, plāksne, parametriskais, detaļu modelētājs
from: 5f0a668d
---

PartCraft ir parametriska detaļu un mezglu lietotne no CadCraft saimes. Jūs zīmējat 2D skici, nostiprināt to ar sakarībām un izmēriem, pārvēršat par cietu ķermeni ar tādiem elementiem kā izvilkšana, rotēšana un caurums, un jebkuru skaitli var mainīt vēlāk: detaļa tiek pārbūvēta no savas vēstures. Pēc tam detaļas nonāk mezglos, kur savienojumi tās novieto un ļauj pārbaudīt kustību.

Ko dara šī versija:

| Darbs | Ko iegūstat |
|---|---|
| Skices | Līnijas, taisnstūri, riņķi, loki, punkti un centrālās līnijas ar sakarībām un izmēriem, kā arī tiešraides stāvokli: nepilnībā, pilnībā vai pārdefinēts |
| Cietie elementi | Izvilkšana, izgriešana, rotēšana, rotēta izgriešana, vienkārši un iegremdēti caurumi, lineāri un cirkulāri raksti, spoguļošana, noapaļojumi un nošķelšanas taisnās malās starp plakanām virsmām, kā arī čaulas un slīpumi plakanās virsmās. Izliektās, loftētās un citi elementi, kam vajag precīzu kodolu, šajā versijā vēl nav izveidoti: skat. [Kas vēl nav izveidots](topic:not-built-yet) |
| Vēsture | Rediģēt jebkura elementa skaitļus, apturēt, atgriezties, pārkārtot un dzēst ar atsaukšanu |
| Mezgli | Detaļas savienotas ar stingriem, rotējošiem un bīdāmiem savienojumiem, sadursmju pārbaude un kustības pārbaude |
| Rasējumi | A3 lapa ar trim skatiem, izometriju, griezumu, detaļskatu, gabarītizmēriem, bāzēm, elementu kontroles rāmjiem un virsmas apdares simboliem, eksportēta kā PDF |
| Faili | Savi detaļu un mezglu faili; STL, 3MF, facetētais STEP, DXF un PDF ārā |

Viss darbojas jūsu pārlūkprogrammā, jūsu datorā. **Nekas netiek augšupielādēts.** Par to, kur atrodas faili, skat. [Faili: atvēršana, saglabāšana un eksportēšana](topic:files).

## Kas jums nepieciešams

- Aktuāla Chrome, Edge, Firefox vai Safari ar ieslēgtu **WebGL** (3D grafika) un **WebAssembly**. Abas ir ieslēgtas pēc noklusējuma. Cietā ķermeņa ģeometriju veido WebAssembly tīkla kodols, kas ielādējas kopā ar lietotni: skat. [Tīkla kodols](topic:solid-kernels).
- Vislabāk strādāt ar peli. Skārienpaliktnis darbojas, un skārienekrāni darbojas skatīšanai un vienkāršai skicēšanai: skat. [Skārienpaliktnis, skārienekrāns un mazi ekrāni](topic:trackpad-and-touch).
- Ekrāns, kas ir vismaz 1280 pikseļus plats, parāda visu rīkjoslu vienā rindā. Šaurākos logos rīkjosla ritina sāniski; tālrunī paneļi atveras kā lapas no joslas apakšā.

Vairāk par pārlūkprogrammām: [Pārlūkprogrammas un datori](common:browsers).

:::note
PartCraft darbojas pārlūkprogrammā, un darbvirsmā — CadCraft Studio iekšienē. Saglabāšana mākonī vēl nav pieejama: detaļas atverat no sava datora un saglabājat atpakaļ tajā kā failus.
:::

## Atvērt PartCraft

1. Atveriet PartCraft.
2. Pagaidiet, kamēr ekrānā parādās "Ielādē cietā ķermeņa kodolu…". Pirmoreiz tas aizņem brīdi.
3. Redzat tukšu 3D skatu ar trim pamatplaknēm, vēsturi pa kreisi ("Part1", tad Priekšējā plakne, Augšējā plakne, Labā plakne) un kasti skatā ar virsrakstu "Sākt detaļu".
4. Čips statusa joslas labajā galā rāda "Tīkla kodols": šajā versijā PartCraft veido katru detaļu ar tīkla kodolu, tāpēc apaļās virsmas ir plakanas facetes. Varat sākt modelēt uzreiz.

Ja skats saka, ka pārlūkprogramma nevar rādīt 3D, vai kodols nav ielādējies, skat. [Problēmu novēršana](topic:troubleshooting#the-app-does-not-start).

## Pirmā detaļa: plāksne ar caurumu

Jūs izveidosiet 60 × 40 mm plāksni, 10 mm biezu, ar 6 mm caurumu cauri tai. Vienības ir milimetri.

### Uzzīmēt kontūru

1. Noklikšķiniet uz **Priekšējā plakne** vēsturē kreisajā pusē. Plakne skatā izceļas.
2. Izvēlieties {{ui:Skice}} rīkjoslā vai nospiediet {{key:S}}. Skats pagriežas, lai skatītos taisni uz plakni, un aktīvs ir Līnijas rīks.
3. Nospiediet {{key:R}} taisnstūra rīkam.
4. Pārvietojiet rādītāju uz sākumpunkta (mazais sarkanais aplis ar krustiņu). Mazs kvadrāts parāda, ka tas piesaistās. Noklikšķiniet.
5. Pārvietojiet uz augšu un pa labi un atkal noklikšķiniet. Jums ir taisnstūris. Tā līnijas ir zilas: zils nozīmē, ka tās vēl var pārvietot.

### Piešķirt izmērus

1. Nospiediet {{key:D}} izmēra rīkam.
2. Noklikšķiniet uz augšējās līnijas, pēc tam nedaudz virs tās. Atveras skaitļa lodziņš ar pašreizējo garumu.
3. Ierakstiet `60` un nospiediet {{key:Enter}}. Taisnstūris kļūst 60 mm plats.
4. Noklikšķiniet uz kreisās līnijas, pēc tam nedaudz pa kreisi no tās. Ierakstiet `40` un nospiediet {{key:Enter}}.

Čips skata augšējā kreisajā stūrī tagad rāda **Pilnībā definēts**, un līnijas kļūst tintes krāsā (melnas Papīra tēmā, gaišas Modeļa tēmā). Katrs punkts un izmērs ir fiksēts.

:::tip
Ja taisnstūri sākāt ārpus sākumpunkta, čips joprojām rāda "Nepilnībā definēts · 2 brīvības pakāpes". Nospiediet {{key:S}} atlasei, noklikšķiniet uz viena stūra, {{key:Shift}}+klikšķis uz sākumpunkta un pēc tam izvēlieties {{ui:• Sakrīt}} labajā panelī.
:::

### Izvilkt to

1. Izvēlieties {{ui:Iziet}} rīkjoslā vai nospiediet {{key:Esc}}, līdz skice aizveras (parasti divreiz).
2. Izvēlieties {{ui:Izvilkt}}. Parādās 10 mm cietais ķermenis. Vēsturē tiek pievienots "Extrude1", un "Sketch1" ir ievilkts zem tā.
3. Labajā panelī redzami izvilkšanas iestatījumi. Lai mainītu biezumu, ierakstiet jaunu skaitli laukā **Dziļums (mm)** un nospiediet {{key:Enter}} vai {{key:Tab}}. Detaļa uzreiz tiek pārbūvēta.

### Pievienot caurumu

1. Noklikšķiniet uz lielās plakanās virsmas plāksnes priekšpusē (izvilkuma gals). Visa virsma izceļas, un labajā panelī rakstīts **Virsma**.
2. Izvēlieties {{ui:Skice uz šīs virsmas}} labajā panelī.
3. Nospiediet {{key:P}} punkta rīkam un noklikšķiniet netālu no virsmas vidus.
4. Izvēlieties {{ui:Iziet}}.
5. Izvēlieties {{ui:Caurums}}. Caur plāksni iet 6 mm caurums. Ja vēlaties, mainiet **Diametrs (mm)** labajā panelī.

Lodziņš **Detaļa** apakšā pa kreisi tagad rāda tilpumu, virsmas laukumu, izmēru (60 × 40 × 10 mm) un "Caurumi cauri: 1".

### Saglabāt to

1. Nospiediet {{key:Mod+S}} vai izvēlieties {{ui:Saglabāt}}.
2. Pārlūkprogramma lejupielādē `Part1.partcraft.json` savā lejupielāžu mapē. Failā ir visa vēsture: atveriet to atkal ar {{ui:Atvērt}}, lai turpinātu rediģēt.

Lai vispirms pārdēvētu detaļu, noklikšķiniet uz tukšas vietas skatā, lai nekas nebūtu atlasīts, un labajā panelī ierakstiet jaunu **Nosaukumu**.

## Kur doties tālāk

- [Uzzīmējiet pirmo skici](topic:sketch-basics) un [Pilnībā definējiet skici](topic:relations-dimensions) izskaidro skicētāju sīkāk.
- [Mainiet detaļu caur tās vēsturi](topic:edit-history) parāda, kā rediģēt to, ko esat izveidojis.
- [Noapaļojiet, nošķeliet un padariet dobu](topic:fillet-chamfer-shell) un [Izveidojiet rasējumu](topic:drawing-pdf) pabeidz detaļu. [Kas vēl nav izveidots](topic:not-built-yet) uzskaita, ko šī versija nedara, piemēram, izliektās un loftētās formas.
- [Nāk no cita parametriskā modelētāja](topic:coming-from) uzskaita paradumus, kas šeit darbojas citādi.
- [Taustiņi un pele](topic:keyboard) ir pilns īsinājumtaustiņu saraksts.
- [Šīs palīdzības izmantošana](common:help).
