---
title: Funkcijas un to opcijas
summary: Katra rīkjoslas funkcija ar tās iestatījumiem, noklusējumiem un ierobežojumiem, no izvilkšanas līdz noapaļojumam, čaulai un importētiem STEP cietajiem ķermeņiem, darbības, ko dala visas funkcijas, un detaļas iestatījumi.
keywords: funkcijas, nav izveidots, izvilkt, izgriezt, rotēt, rotēts griezums, caurums, uzgriezums, lineārs raksts, cirkulārs raksts, spoguļattēls, noapaļojums, nošķelšana, čaula, imports, opcijas, noklusējumi, iestatījumi, izšķirtspēja, līknes, facetes, apturēt, atgriezt
from: ab3a598e
---

Funkcijas vēsturē ir uzskaitītas tādā secībā, kādā tās tika izveidotas, un tiek pārbūvētas no augšas uz leju. Katrai ir nosaukums pēc tās veida ar numuru: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft visas funkcijas veido ar tīkla kodolu. Noapaļojums un nošķelšana darbojas ar taisnām malām starp divām plakanām virsmām, un Čaula atver plakanas virsmas. Importētiem cietiem ķermeņiem nepieciešams precīzs kodols, kā šai versijai nav: tie vēl nav izveidoti, un zemāk esošajā sadaļā aprakstīts, ka detaļu, kas izveidota agrākā versijā, tos joprojām saglabā. Skatiet [Tīkla kodols](topic:solid-kernels) un [Kas vēl nav izveidots](topic:not-built-yet).

## Skice

| Iestatījums | Piezīmes |
|---|---|
| Plakne | Front, Top vai Right plakne vai plakana virsma. Tikai parādīta, nemainīta: lai pārvietotu skici, izveidojiet jaunu |
| Stāvoklis | Pilnībā noteikta, Nepilnībā noteikta (ar brīvības pakāpēm), Pārmērīgi noteikta vai Tukša |
| Ģeometrija, Sakarības | Cik līkņu, punktu un sakarību |
| Vadošie izmēri | Katrs skices izmērs, rediģējams |

Pogas: {{ui:Rediģēt skici}}, {{ui:Eksportēt kā DXF}}.

## Izvilkt un Izgriezt

{{ui:Izvilkt}} un {{ui:Izgriezt}} veido to pašu funkciju, sākot ar dažādiem iestatījumiem.

| Iestatījums | Izvēles | Izvilkt sākas ar | Izgriezt sākas ar |
|---|---|---|---|
| **Darbība** | Izcilnis (pievienot materiālu), Griezums (noņemt materiālu), Krustojums (paturēt pārklājumu), Jauns ķermenis (šajā versijā vēl nav izveidots) | Izcilnis | Griezums |
| **Beigas** | Akls (dziļums), Vidusplakne (abos virzienos), Caur visu | Akls | Caur visu |
| **Dziļums (mm)** | Virs 0, līdz 1,000,000 | 10 | 10 |
| **Mainīt virzienu** | Izslēgts / ieslēgts | Izslēgts | Izslēgts |

- Profils: katra slēgta cilpa no cietām līnijām, riņķiem un lokiem skicē. Cilpas cilpās ir caurumi.
- Caur visu darbojas tikai griezumiem. Tas sniedzas tieši caur detaļu izvēlētajā pusē.
- Griezums iet materiālā, prom no skices plaknes ārējās puses; Mainīt virzienu to apgriež.

## Rotēt un rotēts griezums

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Darbība | Izcilnis, Griezums | Izcilnis ({{ui:Rotēt}}), Griezums ({{ui:Vairāk}} › {{ui:Rotēts griezums}}) |
| Leņķis (°) | Virs 0, līdz 360 | 360 |
| Ass | Pirmā centrālā līnija, jebkura skices līnija vai centrālā līnija vai ass funkcija, kas atrodas skices plaknē | Pirmā centrālā līnija |

- Profilam jāpaliek vienā ass pusē. Tas drīkst to pieskarties.
- Rotācijas asi var izmantot cirkulārie raksti un mezglu savienojumi.

## Caurums

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Veids | Vienkāršs, Uzgriezums | Vienkāršs |
| Diametrs (mm) | Virs 0 | 6 |
| Caur visu | Ieslēgts / izslēgts | Ieslēgts |
| Dziļums (mm) | Kad Caur visu ir izslēgts | 10 |
| Uzgriezuma ⌀ | Platāks par caurumu | 11 |
| Uzgriezuma dziļums | Seklāks par aklu caurumu | 6 |
| Mainīt virzienu | Izslēgts / ieslēgts | Izslēgts |

- Viens caurums katrā skices brīvajā punktā (punkti, kas izveidoti ar Punkta rīku). Panelī parādīts, cik.
- Caurumi tiek urbti taisni pret skices plakni, materiālā.
- Katra cauruma ass var tikt izmantota mezglu savienojumiem ("Hole1, hole 2").

## Lineārais raksts

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Kopējamās funkcijas | Jebkuras cietās funkcijas virs tās | Atlasītā funkcija, citādi pēdējā cietā funkcija |
| Virziens | X ass, Y ass, Z ass; agrākas skices līnija; rotācijas ass; izvēlēta mala | X ass (vai mala, kas izvēlēta, pievienojot) |
| **Solis (mm)** | Jebkurš skaitlis | 20 |
| **Skaits** | 1 līdz 1000, ieskaitot oriģinālu | 3 |
| Mainīt virzienu | Izslēgts / ieslēgts | Izslēgts |

## Cirkulārais raksts

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Kopējamās funkcijas | Kā lineārajam | Kā lineārajam |
| Ass | Kā Virziens iepriekš | Pēdējās rotācijas ass, citādi Y ass (vai izvēlētā mala) |
| Leņķis (°) | Virs 0, līdz 360. 360 izvieto kopijas vienmērīgi visapkārt; mazāks leņķis tās izkliedē pa leņķi | 360 |
| **Skaits** | 1 līdz 1000, ieskaitot oriģinālu | 6 |
| Mainīt virzienu | Izslēgts / ieslēgts | Izslēgts |

## Spoguļattēls

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Spoguļattēls | Viss ķermenis (kāds tas ir izveidots līdz šim) vai izvēlētas funkcijas | Atlasītā funkcija, citādi viss ķermenis |
| Spoguļa plakne | Front, Top vai Right plakne; plakana virsma | Right plakne vai plakana virsma, kas izvēlēta, pievienojot |

## Noapaļojums un nošķelšana

Šajā versijā tīkla kodols tos veido uz taisnām malām starp divām plakanām virsmām (ārējiem vai iekšējiem stūriem) ar vienu rādiusu. Apaļa mala saka: "Noapaļojums: šajā versijā tikai taisnas malas starp divām plakanām virsmām (tīkla kodols tās veido). Noapaļojiet vai nošķeliet izliektas malas skicē." Vietās, kur noapaļotas malas satiekas stūrī, tās tiek sašķeltas, un funkcija brīdina: "Noapaļojums ar tīkla kodolu: vietās, kur noapaļotas malas satiekas, tās ir sašķeltas, nevis saplūdušas." Visi nošķelšanas veidi (vienāds attālums, divi attālumi, attālums un leņķis, ar **Mainīt pusi**) darbojas. Skatiet [Noapaļojiet, nošķeliet un iedobiet](topic:fillet-chamfer-shell).

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Rādiuss (mm)** (Noapaļojums) | Virs 0 | 2 |
| **Attālums (mm)** (Nošķelšana) | Virs 0, vienāds abās virsmās | 1 |
| **Malas** | Izvēlētās malas, katra uzskaitīta ar divām virsmām, ko tā savieno ("Extrude1 end face × Extrude1 side"), ar **Noņemt** | Malas, kas izvēlētas, pievienojot |

- Izvēlieties malas pirms pogas izvēles ({{key:Shift}}+klikšķis vairākām) vai izvēlieties pogu, neko neatlasot, un pēc tam noklikšķiniet uz malām.
- {{ui:Atlasīt malas}} (vai veiciet dubultklikšķi uz funkcijas) maina malas.
- Malas tiek saglabātas pēc divām virsmām, ko tās savieno, tāpēc tās izdzīvo izmēru izmaiņas augstāk vēsturē.

## Čaula

Tīkla kodols to veido. Atvērt var tikai plakanas virsmas ("Čaula: šajā versijā tā atver tikai plakanas virsmas (to veido tīkla kodols)."); sienas ar dažādu biezumu vēl nav izveidotas. Skatiet [Noapaļojiet, nošķeliet un iedobiet](topic:fillet-chamfer-shell).

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| **Siena (mm)** | Virs 0 | 2 |
| Sienas aug uz āru (virsmas paliek iekšpusē) | Izslēgts: sienas iet uz iekšu. Ieslēgts: sienas iet uz āru | Izslēgts |
| Atvērtās virsmas | Noņemamās virsmas, vismaz viena, ar **Noņemt** | Virsmas, kas izvēlētas, pievienojot |

{{ui:Atlasīt virsmas}} maina atvērtās virsmas.

## Importēts cietais ķermenis

Izveidots, atverot STEP, STL, OBJ vai 3MF failu: cietais ķermenis no trijstūriem bez savas vēstures ([Atvērt STEP failu](topic:import-step), [Atvērt STL, OBJ vai 3MF](topic:open-meshes)). Tas rāda failu, no kura tas nākas, un to, ko imports salabojis; **Vienības failā**, **Augšup failā** un **Izmantot tā** paliek rediģējami. STEP cietais ķermenis, ko importējusi vecāka versija ar precīzo kodolu, paliek vēsturē atzīmēts kā nav izveidots; atveriet STEP failu vēlreiz, lai to ievietotu kā trijstūrus.

| Iestatījums | Izvēles | Noklusējums |
|---|---|---|
| Augšup failā | Z augšup (vairums CAD), Y augšup | Z augšup |

Šablonus un spoguļus var kopēt importētu cietu ķermeni, bet ne noapaļojumu, nošķelšanu vai čaulu.

## Ko katra funkcija satur

Katra funkcijas paneļa apakšā:

| Poga | Ko dara |
|---|---|
| {{ui:Apturēt}} / {{ui:Atcelt apturēšanu}} | Izslēdz vai ieslēdz to. Funkcijas, kurām tā vajadzīga, netiek izveidotas, kamēr tā ir izslēgta |
| {{ui:Atgriezties līdz šeit}} | Izveido tikai funkcijas virs šīs. Jaunās funkcijas tiek ievietotas atgriešanās joslā |
| {{ui:Pārvietot augšup}} / {{ui:Pārvietot lejup}} | Pārkārto, ja nekas, ko tā izmanto, nenonāktu zem tās. Citādi pelēka, ar iemeslu |
| {{ui:Dzēst}} | Dzēš to un (pēc jautājuma) katru funkciju, kas to izmanto |
| Nosaukums | Pārdēvē (līdz 60 rakstzīmēm) |

Funkcijām ar skici uzskaitīti arī **Skices izmēri**, rediģējami uz vietas.

## Stāvokļi vēsturē

| Stāvoklis | Parādīts kā | Nozīme |
|---|---|---|
| Izveidots | Parasts | Viss kārtībā |
| Brīdinājums | ⚠ | Izveidots, bet ir kaut kas, ko pārbaudīt: "Pārmērīgi noteikts: 1 sakarība nav vajadzīga." vai "Pēc šī detaļai nekas nav palicis." |
| Kļūda | ⚠ kļūda, sarkana | Nevarēja izveidot; ziņojums norāda, kāpēc |
| Nav izveidots | ⚠ nav izveidots | Nepieciešama funkcija neizdevās, ir apturēta vai atgriezta, vai nepieciešams precīzs kodols, kā šai versijai nav ("Pārvilkšana: vēl nav izveidota. …") |
| Apturēts | izslēgts | Izslēgts |
| Atgriezts | pelēks, zem atgriešanās joslas | Netiek izveidots, kamēr neatgriezīsieties uz priekšu |

## Detaļas iestatījumi

Noklikšķiniet tukšā vietā, lai nekas nebūtu atlasīts. Labajā panelī redzama **Detaļa**:

- **Nosaukums**: detaļas nosaukums, ko izmanto failu nosaukumiem un rasējuma titulblokā (līdz 120 rakstzīmēm).
- **Līknes**: skatiet zemāk.

### Līkņu izšķirtspēja

Tīkla kodols pats veido cieto ķermeni no plakanām facetēm, tāpēc skats, STL, 3MF, facetētais STEP, tilpums un rasējuma skati visi seko **Līknēm**: cik facetes ir uz pilnu apli.

| Iestatījums | Facetes uz apli | Apaļas formas tilpums |
|---|---|---|
| Rupjš (32 uz apli) | 32 | Aptuveni 0.64 % zem patiesās vērtības |
| Parasts (64 uz apli) | 64 | Aptuveni 0.16 % zem (noklusējums) |
| Smalks (128 uz apli) | 128 | Aptuveni 0.04 % zem |
| Ļoti smalks (256 uz apli) | 256 | Aptuveni 0.01 % zem |

Smalkākas līknes dod gludākus eksportus un skatus, bet lēnāku pārbūvi. Iestatījums tiek saglabāts detaļas failā.

## Vēl nav izveidots

Mainīga rādiusa noapaļojumi, noapaļojumi un nošķelšanas uz izliektām malām, izliektu virsmu atvēršanas čaulas, slīpums uz izliektām virsmām, pārvilkšana, loft, rib, STEP cietie ķermeņi ar precīzām izliektām virsmām, jauni ķermeņi, slīpumi, "līdz" virsmai vai virsotnei un atsauces uz cietā ķermeņa virsmām un malām prasa precīzu kodolu, kā šai versijai nav. Vēl nav izveidoti arī vītņoti un uzgriezti caurumi. Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
