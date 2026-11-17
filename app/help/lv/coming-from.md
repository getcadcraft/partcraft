---
title: Pāreja no cita parametriskā modelētāja
summary: Kā darbvirsmas parametrisko detaļu modelētāju ieradumi atbilst PartCraft un atšķirības, kas pieredzējušus lietotājus mulsina pirmajā stundā.
keywords: pāreja, migrācija, pazīstams, elementu pārvaldnieks, dizaina koks, viedais izmērs, izvilkums, griezuma izvilkums, urbuma vednis, savienojumi, traucējumu noteikšana, atkāpšanās josla, īpašību panelis, pele, atšķirības
from: fbacaee1
---

Ja detaļas projektējat SolidWorks, lielākā daļa PartCraft ideju būs pazīstamas: skices uz plaknēm Front, Top un Right, sakarības un viedie izmēri, elementu vēsture ar atkāpšanās joslu un mezgli, kas novietoti ar savienojumiem. Veids, kā tiem piekļūt, dažās vietās atšķiras, un šī pirmā versija dara mazāk. Šajā lapā ir jūsu ieradumi sakārtoti un uzskaitītas pārsteigumu lietas.

## Ieradumi, sakārtoti

| Jūs esat pieradis pie | PartCraft |
|---|---|
| Dizaina koks kreisajā pusē | Vēsture kreisajā pusē: plaknes, tad elementi, skices ievilktas zem elementa, kas tās izmanto |
| Plaknes Front, Top un Right | Tās pašas trīs, caur izcelsmi. Front ir XY plakne, Top ir XZ, Right ir YZ; Y rāda uz augšu |
| Skice uz plaknes vai virsmas, tad apstiprinājuma stūris, lai izietu | {{ui:Skice}} ({{key:S}}) atlasītai plaknei vai plakanai virsmai; {{ui:Iziet}} vai {{key:Esc}}, līdz tā aizveras |
| Viedais izmērs | {{ui:Izmērs}} ({{key:D}}). Noklikšķiniet uz vienas vai divām lietām, tad uz vietas, kur ieiet skaitlis. Vieta, kur to novietojat, izvēlas horizontālu, vertikālu vai izlīdzinātu izmēru |
| Pievienot sakarības īpašību panelī | Atlasiet lietas, tad sakarību pogas labajā panelī (Sakrītība, Horizontāls, Paralēls, Pieskare, Vienāds un tā tālāk) |
| Automātiskas sakarības skicējot | Piesaiste pievieno sakritības, punkta uz līknes, horizontālas un vertikālas sakarības |
| Zilā / melnā / sarkanā skices krāsa | Tā pati ideja: zila — nepilnīgi definēta, melna — pilnīgi definēta, sarkana — pārdefinēta. Lodziņš rāda atlikušās brīvības pakāpes |
| Centrālā līnija rotācijām | {{ui:Centrālā līnija}} ({{key:N}}); {{ui:Rotēt}} izmanto pirmo centrālo līniju, ja vien neizvēlaties citu asi |
| Skices noapaļojums | {{ui:Noapaļojums}} ({{key:F}}) skicē: noklikšķiniet uz stūra, ierakstiet rādiusu |
| Konstrukcijas ģeometrijas slēdzis | {{ui:Konstrukcija}} ({{key:Q}}) |
| Izvilkts paaugstinājums | {{ui:Izvilkt}}: Akls, Vidusplakne, Līdz virsmai / nākamajai / virsotnei, Nobīde no virsmas, otrs virziens, konuss, viena kontūra (Izvēlēties apgabalus) |
| Izvilkts griezums | {{ui:Izgriezt}}: sākas kā **Caur visu**; pārslēdziet uz Akls, lai izveidotu dobumu |
| Rotēts paaugstinājums / griezums | {{ui:Rotēt}} / {{ui:Vairāk}} › {{ui:Rotēts griezums}} |
| Atskaites plakne / ass / punkts | {{ui:Vairāk}} › {{ui:Plakne}}, {{ui:Ass}}, {{ui:Punkts}} (skatiet [Atskaites plaknes, asis un punkti](topic:reference-geometry)) |
| Izvilkts pa ceļu vai pārejas virsma, griezums, slīpums | {{ui:Vairāk}} › {{ui:Slīpums}} plakanām virsmām (skatiet [Izvilkums, pārejas virsma un slīpums](topic:sweep-loft-draft)). {{ui:Izvilkums}} un {{ui:Pārejas virsma}} šajā versijā vēl nav izveidoti (tiem vajadzīgs precīzs kodols) |
| Urbuma vednis | {{ui:Caurums}} katrā brīvā skices punktā: vienkāršs, paplašināts paliktnis, iegremdēts konuss (90° / 82°) vai vītnēts ISO metriskais M2–M24, caur vai akls |
| Lineārs / cirkulārs masīvs, spoguļošana | {{ui:Lineārs}}, {{ui:Cirkulārs}}, {{ui:Spoguļošana}} (elementi vai viss ķermenis) |
| Noapaļojums un nošķelšana uz šķautnēm | {{ui:Noapaļojums}} / {{ui:Nošķelšana}}: noklikšķiniet uz šķautnes, {{key:Shift}}+klikšķis vēl, tad poga. Viens rādiuss; vienādas, divattālumu vai attālums-leņķis nošķelšanas. Šajā versijā tikai taisnas šķautnes starp divām plakanām virsmām, un noapaļojumi, kas saiet stūrī, ir savienoti ar slīpu griezumu. Izliektas šķautnes noapaļojiet vai nošķeliet skicē ({{ui:Noapaļojums}} skicē, {{key:F}}) |
| Čaula | {{ui:Čaula}}: noklikšķiniet uz plakanām virsmām, lai atvērtu, tad poga. Viens sienas biezums |
| Atvērt STEP failu | {{ui:Atvērt}}: nolasīts kā trijstūri, cietvielas ķermenis, uz kura veidot ([Atvērt STEP failu](topic:import-step)) |
| Rediģēt elementu, tad Labi | Noklikšķiniet uz elementa; mainiet skaitļus labajā pusē; tas pārbūvējas, kamēr rakstāt. Nav Labi, nav Atcelt: izmantojiet {{key:Mod+Z}} |
| Rediģēt skici | Veiciet dubultklikšķi uz skices vēsturē |
| Pārbūvēt | Automātiski pēc katras izmaiņas. Nav pārbūvēšanas taustiņa |
| Apturēt / atcelt apturēšanu | {{ui:Apturēt}} / {{ui:Atcelt apturēšanu}} labajā panelī |
| Vilkt atkāpšanās joslu | {{ui:Atgriezties līdz šeit}} elementā; lai atgrieztos, noklikšķiniet uz "Atkāpšanās josla · virzīties uz priekšu" |
| Vilkt elementu kokā, lai mainītu kārtību | {{ui:Pārvietot augšup}} / {{ui:Pārvietot lejup}} vai {{key:Alt+Up}} / {{key:Alt+Down}}; atteikts ar iemeslu, ja tas salauztu atkarību |
| Rediģēt izmērus, veicot dubultklikšķi uz modeļa | Atlasiet elementu: tā skices izmēri ir uzskaitīti labajā panelī |
| Savienojumi: sakritība, koncentriskums, attālums, leņķis | {{ui:Savienojums}} ({{key:J}}): izvēlieties plakanu virsmu katrā detaļā; savienojums tās saliek virsmu pret virsmu. **Centrēt uz** asij darbojas kā koncentriskums; **Nobīde** kā attālums; **Leņķis** kā leņķis |
| Fiksēta komponente | Pirmā detaļa ir nostiprināta; {{ui:Padarīt par nostiprināto detaļu}} to maina |
| Ievietot komponenti | {{ui:Pievienot kopiju}} vai {{ui:Dublēt}} (vēl viena kopija) vai {{ui:Ievietot}} (no detaļas faila) |
| Rediģēt detaļu mezglā | {{ui:Rediģēt detaļu}}, tad {{ui:Atpakaļ}} |
| Traucējumu noteikšana | {{ui:Sadursme}} |
| Komponentes pārvietošana, lai redzētu kustību | Velciet leņķa vai nobīdes slīdni rotācijas vai slīdņa savienojumam; {{ui:Pārbaudīt kustību sadursmēm}} to pārbauda. Detaļai bez savienojuma: {{ui:Pārvietot}} ar roku (bultiņas, ko vilkt, vai ierakstītas vērtības) |
| Mērīt / pārbaudīt | {{ui:Skati}}, tad {{ui:Mērīt}} ({{key:M}}): attālumi, leņķi, rādiusi, laukumi; {{ui:Masas īpašības}} |
| Izjauktais skats, materiālu saraksts | Mezglā, kur nekas nav atlasīts: **Izjauktie skati** un **Materiālu saraksts** labajā panelī |
| Masas īpašības | Lodziņš **Detaļa**: tilpums, virsmas laukums, izmērs, šķautņotajai cietvielai (nedaudz zemāks apaļām detaļām). Masas nav: materiālu vēl nav |
| Saglabāt, saglabāt kā STEP | {{ui:Saglabāt}} lejupielādē `.partcraft.json`; {{ui:Eksportēt}} piedāvā STL, 3MF, precīzo STEP (AP242 vai AP214), šķautņoto STEP, DXF un PDF rasējumu |
| Izveidot rasējumu no detaļas | {{ui:Rasējums}}: automātiska A3 lapa ar trim skatiem, izometrisku, vienu griezumu, vienu detalizētu skatu, datumiem, ģeometrisko pielaižu rāmjiem un virsmas apdares simboliem. Izmērīti tikai kopējie izmēri |
| Vidējā poga, lai pagrieztu | **Kreisā poga** rotē šeit. Vilkšana ar vidējo vai labo pogu panoramē. Ritenītis tuvina rādītāja vietā |
| Skata orientācija, Skatīt normāli | {{ui:Skats}} izvēlne; {{ui:Skatīt normāli}} izvēlētai virsmai, plaknei vai skicei |
| Tālummaiņa līdz izmēram (F) | {{key:F}}, vai {{ui:Pielāgot}} (skicē {{key:F}} ir noapaļojuma rīks) |
| Labās pogas izvēlnes | Nav. Vilkšana ar labo pogu panoramē; skicē labā poga beidz līniju ķēdi |

:::tip
Ja jūsu rokas zina SolidWorks, izvēlieties {{ui:Elementu koks}} izvēlnes stilu: {{ui:Iestatījumi}} › {{ui:PartCraft}} › {{ui:Izvēlnes, taustiņi un pele}}. Tā ir lente ar cilnēm Elementi, Skice, Virsmas, Novērtēt, Rasējums, Montāža un Skats; vidējā poga riņķo, {{key:Shift}} un vidējā poga panoramē, un kreisā poga tikai izvēlas. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).
:::

## Atšķirības, kas maldina cilvēkus

**Viss skice ir profils.** Izvilkums un rotācija izmanto katru slēgtu cilpu skicē. Jūs nevarat izvēlēties vienu apgabalu vai vienu kontūru skicē elementam. Lietojiet vienu skici katram elementam.

**Kuru skici elements ņem.** Elements izmanto skici, ko tikko aizvērāt, vai to, kas atlasīta vēsturē. Ja nekas nav atlasīts, tas ņem jaunāko skici, ko neizmanto neviens elements. Ja iegūstat nepareizo, atlasiet pareizo skici un izvēlieties elementu vēlreiz.

**Izmaiņas tiek piemērotas, rakstot.** Nav elementa dialoga ar Labi un Atcelt. Katrs skaitlis uzreiz pārbūvē, un {{key:Mod+Z}} ir ceļš atpakaļ. Atsaukšanas saraksts aptver skices rediģēšanu, elementus un iestatījumus vienlaikus.

**Pilnībā pārdefinēts netiek atstāts klusi.** Nav vadāmu (atsauces) izmēru. Izmērs, ko jau nosaka citas sakarības, tiek ziņots kā pārdefinēts ("jau ir noteikts. Dzēsiet to."). Pretrunīgs izmērs atstāj ģeometriju nemainītu un kļūst sarkans. Dzēsiet vienu vai atsauciet.

**Izvilkumi un pārejas virsmas vēl nav izveidotas; noapaļojumiem, nošķelšanām, čaulām un slīpumiem ir ierobežojumi.** Šī PartCraft versija veido katru detaļu ar tīkla kodolu; statusa joslas čips vienmēr rāda "Mesh kernel". Noapaļojumi un nošķelšanas darbojas uz taisnām šķautnēm starp divām plakanām virsmām, un kur noapaļojumi saiet stūrī, tie ir savienoti ar slīpu griezumu, nevis sajaukti. Čaulas atveras, un slīpumi noliecas tikai uz plakanām virsmām. Elementi, kam vajadzīgs precīzs kodols, paliek klikšķināmi, bet, izvēloties, saka "vēl nav izveidots". Skatiet [Tīkla kodols](topic:solid-kernels) un [Kas vēl nav izveidots](topic:not-built-yet).

**Divas pogas ar nosaukumu Noapaļojums.** Skicē {{ui:Noapaļojums}} ({{key:F}}) noapaļo skices stūri. Detaļā {{ui:Noapaļojums}} elementu grupā noapaļo cietvielas šķautnes (šajā versijā taisnas šķautnes starp plakanām virsmām). Šajā versijā nav izvilkuma vai pārejas virsmas: skatiet [Kas vēl nav izveidots](topic:not-built-yet).

**Urbumiem vajadzīgi brīvi punkti.** {{ui:Caurums}} urb punktos, kas izveidoti ar Punkta rīku. Riņķu centri un līniju gali neskaitās.

**Caur visu ir tikai griezumiem.** Paaugstinājumam vajag dziļumu. Vēl nav beigu nosacījumu "līdz virsotnei / virsmai / nākamajai".

**Cietviela ir šķautnota.** Tīkla kodols veido apaļas virsmas no plakanām facetēm, tāpēc skats, tilpumi, STL un 3MF eksporti ir veidoti no tām: **Līknes** detaļas panelī padara tās smalkākas. Precīzais STEP eksports nav tāds: tas raksta apaļas virsmas uz to patiesajām virsmām.

**Tikai milimetri.** Nav collu iestatījuma vēl. Reiziniet collu izmērus ar 25.4, kad tos ievadāt.

**Y ir augšā.** Front plakne jūs redz, un Top skata detaļu no augšas, kā sagaidāt, bet pasaules augšējā ass ir Y. STL, 3MF un precīzie STEP eksporti ir pagriezti uz Z augšu; šķautnotais STEP paliek ar Y augšā.

**Savienojumi ir virsmas, nevis ģeometrijas pāri.** Savienojums vienmēr sākas no divām plakanām virsmām, kas saliktas virsmu pret virsmu. Tapai urbumā izvēlieties plakanu virsmu ap urbumu un tapas pleca, tad iestatiet **Centrēt uz** uz urbuma asi un tapas rotācijas asi. Detaļas, ko savienojumi nesasniedz, paliek tur, kur tās tika ievietotas; tās nevar vilkt. Savienojumi cilpā netiek atrisināti.

**Saglabāšana ir lejupielāde.** Nav faila, ko pastāvīgi pārrakstīt. Katra saglabāšana ir jauns fails jūsu lejupielāžu mapē. Vispirms nosauciet detaļu un turiet failus projekta mapē.

**Nav konteksta izvēlņu, nav komandu pārvaldnieka cilnes.** Viss ir rīkjoslā un labajā panelī, un rīkjosla mainās atkarībā no tā, ko darāt: skices rīki parādās tikai skicē, mezgla rīki tikai mezglā.

**Taustiņi skicē ir viena burta.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} un {{key:S}} izvēlas rīkus bez modifikatora. Skatiet [Taustiņi un pele](topic:keyboard).
