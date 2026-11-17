---
title: Turēt .3dm modeli dzīvu
summary: Mainiet modeli programmā, kurā tas tika izveidots, un skatiet, kā PartCraft korpuss seko, no Rhino 8 vai Grasshopper definīcijas, ar jūsu elementiem, kas pārbūvēti uz jaunās formas.
keywords: rhino, grasshopper, dzīvā saite, dzīvs savienojums, 3dm, nurbs, parametrisks, saite, sinhronizācija, skripts, nosūtīt, importēts korpuss
from: cf4dc9b2
---

Turpiniet veidot modeli tur, kur to modelējat, un mašīnu, pārbaudi un dokumentāciju veiciet šeit. Katra izmaiņa otrā programmā aizvieto vienu importētu korpusu PartCraft, un pēc tā esošie elementi pārbūvējas uz jaunās formas.

:::note
Saitei vajag **CadCraft Studio** tajā pašā datorā. Pārlūkprogrammas cilne nevar pārņemt savienojumu. Nekas nedodas internetā: skripts runā ar Studio šī datora pašu adresi, izmantojot pilnvaru.
:::

:::warning
Šī saite ir pārbaudīta ar skripta faila rakstītāju un aizstājēju otrai programmai, vēl ne pašā Rhino vai Grasshopper. Ja tur kaut kas neizdodas, pastāstiet mums, ko tas teica.
:::

## Iestatīšana

1. Studio atveriet PartCraft. {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}} atzīmējiet **Ļaut AI palīgiem un skriptiem izmantot PartCraft**, tad **Rediģēt**.
2. Studio izvēlieties Savienot palīgu. Tas parāda adresi un pilnvaru, ko ielīmēsiet tālāk.
3. Lejupielādējiet skriptu: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## No Rhino

1. Palaidiet `cadcraft_link.py` Rhino skriptu redaktorā (Python 3 Rhino 8).
2. Pirmoreiz ielīmējiet adresi un pilnvaru. Tās tiek glabātas failā `.cadcraft-link.json` jūsu mājas mapē, nekad modelī. Studio, sākot darbu, katru reizi izveido jaunu pilnvaru, tāpēc skripts tad jautā vēlreiz.

Lai apturētu, palaidiet skriptu vēlreiz.

## No Grasshopper

Vispirms vienreiz palaidiet skriptu Rhino, lai adrese un pilnvara tiktu saglabātas.

1. Pievienojiet Script komponenti (Python 3) un ielīmējiet tajā visu `cadcraft_link.py`.
2. Dodiet tai šos ievades: `G` (ģeometrija, ar saraksta piekļuvi), `N` (nosaukums, neobligāti), `On` (būla pārslēgs) un `Target` (neobligāti: `model` vai `part`, ja abas lietotnes ir atvērtas).
3. Ieslēdziet `On`, iestatot to uz true.

Katrs aprēķins nosūta `G` un aizstāj to, ko komponente nosūtīja pēdējo reizi.

## Kā tas šeit darbojas

- **Viens korpuss.** Viss modelī redzamais kļūst par vienu importētu elementu, kā [atverot .3dm failu](topic:open-3dm-files).
- **Tam jāaizveras.** PartCraft aizpilda mazus caurumus un plakanas atveres un pasaka otrai programmai, cik to bija. Ja modelis joprojām nav slēgts, PartCraft paturēs korpusu, kāds tam bija, un statusa joslā tas tiek norādīts. Nākamā izmaiņa, kas aizveras, to atjaunina.
- **Pabeidziet, ko darāt.** Skicē vai rasējumā atjauninājumi tiek noraidīti un mēģināti vēlreiz; tie tiek ieviesti, kad atgriežaties modelī.
- **Atsaukšana.** Atjauninājumi, kas notiek divu sekunžu laikā viens no otra, dalās vienā atsaukšanas solī.
- **Saglabāšana.** Detaļas fails saglabā saiti. Pēc tā atvēršanas palaidiet skriptu vēlreiz, un tas pats elements atjaunināsies.

**Tikai vienā virzienā.** Izmaiņas šeit neatgriežas otrajā programmā.

## Ja kaut kas noiet greizi

- **"No ModelCraft or PartCraft window allows it":** izpildiet 1. iestatīšanas soli.
- **"Studio refused the token":** Studio ir restartēts. Nokopējiet jauno pilnvaru un palaidiet skriptu vēlreiz. Grasshopper gadījumā vispirms palaidiet to Rhino.
- **"Cannot reach CadCraft Studio":** Studio nedarbojas vai adrese ir mainījusies.
