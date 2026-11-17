---
title: Darba sākšana ar PartCraft
summary: Ko PartCraft dara šobrīd, kas nepieciešams pārlūkprogrammai un pirmā detaļa desmit minūtēs no skices līdz saglabātam failam.
keywords: sākt, pirmā palaišana, ātrais sākums, ievads, apmācība, pirmā detaļa, plāksne, parametriskais, detaļu modelētājs
from: 7d43283f
---

PartCraft ir CadCraft saimes parametriskā detaļu un montāžu lietotne. Jūs zīmējat 2D skici, nostiprināt to ar sakarībām un izmēriem, pārvēršat to cietā ķermenī ar elementiem, piemēram, izvilkumu, rotāciju un caurumu, un vēlāk jebkuru skaitli var mainīt: detaļa tiek pārbūvēta no savas vēstures. Detaļas pēc tam nonāk montāžās, kur savienojumi tās novieto un ļauj pārbaudīt kustību.

Ko dara šī versija:

| Uzdevums | Ko iegūstat |
|---|---|
| Skices | Līnijas, taisnstūri, riņķi, loki, punkti un centrālās līnijas ar sakarībām un izmēriem, un tiešraides stāvoklis: nepietiekami, pilnībā vai pārmērīgi definēts |
| Cieti elementi | Izvilkums, izgriešana, rotācija, rotētā izgriešana, vienkārši un ar iegriezumu veidoti caurumi, lineāri un apļveida masīvi, spoguļi, noapaļojumi un fāzes taisnās šķautnēs starp plakanām virsmām, un čaulas un slīpumi plakanās virsmās. Pārvilkumi pa ceļu, loft un citi elementi, kam vajadzīgs precīzs kodols, šajā versijā vēl nav izveidoti: skatiet [Kas vēl nav izveidots](topic:not-built-yet) |
| Vēsture | Rediģējiet jebkura elementa skaitļus, apslāpējiet, atgriezieties, mainiet secību un dzēsiet, ar atsaukšanu |
| Montāžas | Detaļas, kas savienotas ar stingriem, rotējošiem un slīdošiem savienojumiem, sadursmju pārbaude un kustības pārbaude |
| Rasējumi | A3 lapa ar trim skatiem, izometriju, griezumu, detalizētu skatu, kopējiem izmēriem, bāzēm, elementu kontroles rāmjiem un virsmas apstrādes simboliem, eksportēta kā PDF |
| Faili | Savi detaļu un montāžu faili; izvadē STL, 3MF, precīzs STEP, DXF un PDF |

Viss darbojas jūsu pārlūkprogrammā, jūsu datorā. **Nekas netiek augšupielādēts.** Skatiet [Faili: atvēršana, saglabāšana un eksportēšana](topic:files), lai uzzinātu, kur faili tiek saglabāti.

## Kas jums nepieciešams

- Aktuāls Chrome, Edge, Firefox vai Safari ar ieslēgtu **WebGL** (3D grafika) un **WebAssembly**. Abi ir ieslēgti pēc noklusējuma. Cieto ģeometriju veido WebAssembly tīkla kodols, kas ielādējas kopā ar lietotni: skatiet [Tīkla kodols](topic:solid-kernels).
- Vislabāk ir pele. Skārienpaliktnis darbojas, un skārienekrāni darbojas skatīšanai un vienkāršai skicēšanai: skatiet [Skārienpaliktnis, skāriens un mazi ekrāni](topic:trackpad-and-touch).
- Ekrāns, kas ir vismaz 1280 pikseļus plats, rāda visu rīkjoslu vienā rindā. Šaurāki logi ritina rīkjoslu sāniski; tālrunī paneļi atveras kā lapas no apakšējās joslas.

:::note
PartCraft darbojas pārlūkprogrammā un darbvirsmā CadCraft Studio iekšienē. Mākoņglabāšana vēl nav pieejama: detaļas atverat no sava datora un saglabājat atpakaļ tajā kā failus.
:::

Vairāk par pārlūkprogrammām: [Pārlūkprogrammas un datori](common:browsers).

## PartCraft atvēršana

1. Atveriet PartCraft.
2. Pagaidiet, kamēr ekrānā ir teksts "Notiek cietā kodola ielāde…". Pirmo reizi tas aizņem brīdi.
3. Redzat tukšu 3D skatu ar trim pamatplaknēm, vēsturi pa kreisi ("Part1", tad Priekšējā plakne, Augšējā plakne, Labās puses plakne) un kasti skatā ar virsrakstu "Sākt detaļu".
4. Čips statusa joslas labajā galā saka "Tīkla kodols": PartCraft šajā versijā visas detaļas veido ar tīkla kodolu, tāpēc apaļas virsmas ir plakanas facetes. Modelēšanu var sākt uzreiz.

Ja skatā ir teksts, ka pārlūkprogramma nevar rādīt 3D, vai kodols neielādējās, skatiet [Problēmu novēršana](topic:troubleshooting#the-app-does-not-start).

## Jūsu pirmā detaļa: plāksne ar caurumu

Jūs izveidosiet 60 × 40 mm plāksni, 10 mm biezu, ar 6 mm caurumu caur to. Vienības ir milimetri.

### Kontūras skicēšana

1. Noklikšķiniet uz **Priekšējā plakne** vēsturē pa kreisi. Plakne skatā tiek izcelta.
2. Izvēlieties {{ui:Skice}} rīkjoslā vai nospiediet {{key:S}}. Skats pagriežas, lai skatītos tieši uz plakni, un aktīvs ir līnijas rīks.
3. Nospiediet {{key:R}} taisnstūra rīkam.
4. Pārvietojiet rādītāju uz sākumpunktu (mazs sarkans aplis ar krustiņu). Mazs kvadrāts parāda, ka tas piesaistās. Noklikšķiniet.
5. Pavirziet uz augšu un pa labi un atkal noklikšķiniet. Jums ir taisnstūris. Tā līnijas ir zilas: zils nozīmē, ka tās vēl var pārvietot.

### Izmēru piešķiršana

1. Nospiediet {{key:D}} izmēru rīkam.
2. Noklikšķiniet uz augšējās līnijas, pēc tam nedaudz virs tās. Atveras skaitļa lodziņš ar pašreizējo garumu.
3. Ierakstiet `60` un nospiediet {{key:Enter}}. Taisnstūris kļūst 60 mm plats.
4. Noklikšķiniet uz kreisās līnijas, pēc tam nedaudz pa kreisi no tās. Ierakstiet `40` un nospiediet {{key:Enter}}.

Skata augšējā kreisajā stūrī čips tagad saka **Pilnībā definēts**, un līnijas kļūst tintes krāsas (melnas Paper motīvā, gaišas Model motīvā). Katrs punkts un izmērs ir fiksēts.

:::tip
Ja taisnstūri sākāt tālu no sākumpunkta, čips joprojām saka "Nepietiekami definēts · 2 brīvības pakāpes". Nospiediet {{key:S}} atlasei, noklikšķiniet uz viena stūra, {{key:Shift}}+klikšķis uz sākumpunkta, pēc tam izvēlieties {{ui:• Sakritība}} labajā panelī.
:::

### Izvilkšana

1. Izvēlieties {{ui:Iziet}} rīkjoslā vai nospiediet {{key:Esc}}, līdz skice aizveras (parasti divreiz).
2. Izvēlieties {{ui:Izvilkt}}. Parādās 10 mm ciets ķermenis. Vēsturē tiek pievienots "Extrude1", un zem tā ar atkāpi "Sketch1".
3. Labajā panelī ir izvilkuma iestatījumi. Lai mainītu biezumu, ierakstiet jaunu skaitli laukā **Dziļums (mm)** un nospiediet {{key:Enter}} vai {{key:Tab}}. Detaļa uzreiz tiek pārbūvēta.

### Cauruma pievienošana

1. Noklikšķiniet uz lielās plakanās virsmas plāksnes priekšpusē (izvilkuma gals). Visa virsma tiek izcelta, un labajā panelī ir **Virsma**.
2. Labajā panelī izvēlieties {{ui:Skice uz šīs virsmas}}.
3. Nospiediet {{key:P}} punkta rīkam un noklikšķiniet virsmas vidū.
4. Izvēlieties {{ui:Iziet}}.
5. Izvēlieties {{ui:Caurums}}. Caur plāksni iet 6 mm caurums. Ja vēlaties, mainiet **Diametru (mm)** labajā panelī.

Apakšējā kreisajā stūrī esošajā lodziņā **Detaļa** tagad ir tilpums, virsmas laukums, izmērs (60 × 40 × 10 mm) un "Caurumi cauri: 1".

### Saglabāšana

1. Nospiediet {{key:Mod+S}} vai izvēlieties {{ui:Saglabāt}}.
2. Jūsu pārlūkprogramma lejupielādē `Part1.partcraft.json` lejupielāžu mapē. Failā ir visa vēsture: atveriet to atkal ar {{ui:Atvērt}}, lai turpinātu rediģēt.

Lai vispirms pārdēvētu detaļu, noklikšķiniet tukšā vietā skatā, lai nekas nav atlasīts, un labajā panelī ierakstiet jaunu **Nosaukumu**.

## Kur doties tālāk

- [Uzzīmējiet pirmo skici](topic:sketch-basics) un [Pilnībā definējiet skici](topic:relations-dimensions) sīki izskaidro skicētāju.
- [Mainiet detaļu caur tās vēsturi](topic:edit-history) parāda, kā rediģēt izveidoto.
- [Noapaļojiet, nošķeliet un padariet dobu](topic:fillet-chamfer-shell) un [Izveidojiet rasējumu](topic:drawing-pdf) pabeidz detaļu. [Kas vēl nav izveidots](topic:not-built-yet) uzskaita, ko šī versija nedara, piemēram, pārvilkumus un lofta virsmas.
- [Ja nāk no cita parametriskā modelētāja](topic:coming-from) uzskaita paradumus, kas šeit darbojas citādi.
- [Taustiņi un pele](topic:keyboard) ir pilns īsinājumtaustiņu saraksts.
- [Šīs palīdzības izmantošana](common:help).
