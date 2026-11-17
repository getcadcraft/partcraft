---
title: Mainīt detaļu, izmantojot tās vēsturi
summary: Rediģējiet elementus un skices pēc fakta, apturiet, atgriezieties, ievietojiet elementus agrāk, pārkārtojiet, pārdēvējiet un dzēsiet, kā arī atsauciet jebko no tā.
keywords: vēsture, elementu koks, konstrukcijas koks, rediģēt elementu, rediģēt skici, apturēt, atcelt apturēšanu, atgriezt, atgriezties, virzīt uz priekšu, pārkārtot, pārvietot elementu, dzēst, pārdēvēt, atsaukt, atkārtot, pārbūvēt, ģenerēt, vecāks, bērns, liela detaļa, daudz elementu, lēna pārbūve, 750 elementi
from: 6f75aef4
---

PartCraft detaļa ir tās vēsture: kreisajā pusē redzams plakņu, skiču un elementu saraksts. Ikreiz, kad kaut kas mainās, PartCraft no šī saraksta augšas pārbūvē cieto ķermeni. Skaitļa maiņa sarakstā agrāk maina visu, kas uz tā balstīts.

## Rediģēt elementu

1. Noklikšķiniet uz elementa vēsturē (vai uz skices, kas zem tā ievilkta).
2. Mainiet tā iestatījumus labajā panelī. Katra izmaiņa uzreiz pārbūvē detaļu.

Nav pogas Labi vai Atcelt: katra izmaiņa tiek piemērota. Ja tā jums nepatīk, nospiediet {{key:Mod+Z}}.

## Mainīt, kuras malas vai virsmas izmanto noapaļojums, nošķelšana vai apvalks

Veiciet dubultklikšķi uz elementa vēsturē vai atlasiet to un izvēlieties {{ui:Atlasīt malas}} (vai {{ui:Atlasīt virsmas}}). Noklikšķiniet uz malām vai virsmām, lai tās pievienotu vai noņemtu, tad {{ui:Gatavs}} vai {{key:Esc}}. Skatiet [Noapaļot, nošķelt un izdobt](topic:fillet-chamfer-shell).

## Rediģēt skici

1. Veiciet dubultklikšķi uz skices vēsturē vai atlasiet to un labajā panelī izvēlieties {{ui:Rediģēt skici}} (vai {{ui:Skice}} rīkjoslā).
2. Detaļa atgriežas tādā stāvoklī, kāds tas bija, kad skice tika veidota: elementi pēc tās rediģēšanas laikā ir paslēpti.
3. Mainiet ģeometriju, relācijas vai izmērus.
4. Aizveriet skici. Visa detaļa tiek pārbūvēta ar izmaiņu.

Lai mainītu tikai izmēru, skici atvērt nav vajadzīgs. Atlasiet elementu vai skici un mainiet skaitli labajā panelī zem **Skices izmēri** (vai **Vadošie izmēri**). Skatiet [Mainīt izmērus, neatverot skici](topic:change-sizes).

## Kad elements neizdodas

Ja izmaiņa padara elementu neiespējamu, PartCraft pārbūvē visu pārējo un atzīmē problēmu:

- elements vēsturē rāda **⚠ kļūda**, un tā ziņojums ir labā paneļa augšā (uzvelciet peli virs rindas, lai izlasītu to arī tur);
- elementi, kam tas vajadzīgs, rāda **⚠ nav pārbūvēts** ar tekstu "Nepieciešams Extrude2, kas neizdodas.";
- statusa joslas čips saka "1 elements neizdodas".

Novērsiet cēloni (vai atsauciet), un detaļa atkal tiek pārbūvēta. Bieži sastopamie ziņojumi un to, ko darīt, ir sadaļā [Problēmu novēršana](topic:troubleshooting).

## Apturēt elementu

Apturēšana izslēdz elementu, neko nedzēšot: noderīgi, lai izmēģinātu detaļu bez cauruma vai masīva.

1. Atlasiet elementu.
2. Izvēlieties {{ui:Apturēt}}. Tā rindā redzams **izslēgts**. Elementi, kam tas vajadzīgs, arī netiek pārbūvēti.
3. Izvēlieties {{ui:Atcelt apturēšanu}}, lai to atkal ieslēgtu.

## Atgriezt

Atgriešana pārbūvē detaļu tikai līdz noteiktam punktam, lai to varētu redzēt tādu, kāda tā bija, vai pievienot elementu vēsturē agrāk.

1. Atlasiet elementu un izvēlieties {{ui:Atgriezties līdz šeit}}. Šis elements un visi zemāk esošie ir pelēki un netiek pārbūvēti. Rinda **Atgriešanas josla · virzīt uz priekšu** atzīmē vietu.
2. Jebkurš elements, ko tagad pievienojat, tiek ievietots **joslā**, pirms pelēkajiem.
3. Noklikšķiniet uz **Atgriešanas josla · virzīt uz priekšu**, lai visu atkal pārbūvētu.

Atgriešanas pozīcija tiek saglabāta failā.

## Pārkārtot elementus

1. Atlasiet elementu.
2. Izvēlieties {{ui:Pārvietot augšup}} vai {{ui:Pārvietot lejup}}, vai, ja vēstures rinda ir fokusēta, nospiediet {{key:Alt+Up}} vai {{key:Alt+Down}}.

Elementu nekad nevar pārvietot augstāk par to, ko tas izmanto. Poga ir pelēka, un, uzvedot virs tās (vai mēģinot taustiņu), parādās iemesls, piemēram: "Extrude2 izmanto Sketch2, tāpēc Sketch2 jābūt pirmajam."

Ko elements izmanto: tā skici; virsmu, uz kuras atrodas tā skice; elementus, ko masīvs vai spogulis kopē; skices līniju vai rotāciju, kas izmantota kā virziens vai ass.

## Dzēst elementu

1. Atlasiet elementu un izvēlieties {{ui:Dzēst}} labajā panelī vai rīkjoslā, vai nospiediet {{key:Delete}}.
2. Ja citi elementi to izmanto, PartCraft jautā: "Extrude3, Hole1 izmanto Extrude1 un arī tie tiks dzēsti." Izvēlieties {{ui:Dzēst visu}} vai {{ui:Atcelt}}.

Elementa dzēšana neizdzēš tā skici: skice skatā atkal parādās kā neizmantota skice, gatava citam elementam. Ja skice nav vajadzīga, dzēsiet to atsevišķi.

## Pārdēvēt

Atlasiet elementu un labā paneļa apakšā ierakstiet jaunu **Nosaukums** (līdz 60 rakstzīmēm). Detaļas paša nosaukums ir labajā panelī, kad nekas nav atlasīts.

## Detaļas ar simtiem elementu

Detaļa ar simtiem elementu ir testēta ar 750 elementiem. PartCraft saglabā cieto ķermeni, kāds tas bija vēstures vidū, tāpēc izmaiņa vēstures beigās pārbūvē tikai tai sekojošos elementus; izmaiņa augšā pārbūvē visu, kas uz tā balstīts, un tas aizņem visilgāk. Atsaukšana un atkārtošana pārbūvē tikai no vietas, kur abi stāvokļi atšķiras. Lai lielu detaļu strādātu ātrāk, atgriezieties līdz vietai, kur strādājat (skatiet augstāk: Atgriezt), vai apturiet to, kas pašlaik nav vajadzīgs. Vairāki griezumi un izvirzījumi, kas viens otru nesaskar, tiek piemēroti kopā, tāpēc detaļa, kas sastāv no daudziem atsevišķiem caurumiem un izvirzījumiem, tiek pārbūvēta ātrāk, nekā liecina elementu skaits.

Liela detaļa tiek pārbūvēta fonā: apakšējā pārbūves čipā rakstīts **Pārbūvē…** un cik tālu tā ir tikusi, un skats, paneļi un izvēlnes turpina darboties. Tiek rādīta pēdējā pārbūvētā detaļa, līdz jaunā ir gatava. Ja kaut ko maināt vēlreiz, kamēr tā tiek pārbūvēta, PartCraft pārbūvē jaunāko versiju un atmet notiekošo. Maza detaļa tiek pārbūvēta uzreiz.

## Atsaukt un atkārtot

- {{key:Mod+Z}} vai {{ui:Atsaukt}} atsauc pēdējo izmaiņu: elementu, iestatījumu, skices rediģēšanu, vilkšanu. Statusa joslā norādīts, kas tas bija, piemēram, "Atsaukta izmēra maiņa."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} vai {{ui:Atkārtot}} atkārto to.
- PartCraft saglabā pēdējos 200 soļus (tik liela detaļa, ka 200 kopijas aizņemtu daudz atmiņas, saglabā mazāk, bet nekad mazāk par jaunākajiem 20). Izmaiņas zīmējuma lapā (griezums, pārvietots GD&T simbols) ir tajā pašā sarakstā. Faila atvēršana vai jaunas detaļas sākšana to notīra.

:::mac
Mac datorā atkārtošanai izmantojiet ⇧⌘Z. Safari pārlūkā ⌘Y var atvērt pārlūka vēsturi.
:::
