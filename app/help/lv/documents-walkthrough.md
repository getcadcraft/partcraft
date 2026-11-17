---
title: Dokumenti un pārskatījumi (glabātuve)
summary: Soli pa solim izstrādāts reāls darbs: projekta mape ar detaļām un mezgliem tiek ievadīta kontrolē, detaļa tiek izņemta, mainīta, atgriezta ar piezīmi un izlaista, tiek apskatīts, kas to izmanto, un materiālu saraksts, kā arī to, ko redz otra persona, kamēr fails ir bloķēts, un kā tas darbojas ar mākoņa mapēm.
keywords: glabātuve, dokumenti, apmācība, pamācība, izņemt, atgriezt, pārskatījums, izlaist, apstiprināt, bloķēt, vēsture, kur izmantots, materiālu saraksts, bom, mezgls, mākoņa mape, projekta mape, divi cilvēki, kopīga mape
from: 0a5e6983
---

## Ko jūs darīsiet

Jūs esat Ana, un strādājat pie projekta Riverside Clinic kopā ar kolēģi Ben. Projekta detaļas un mezgli atrodas vienā mapē, kurai piekļūstat jūs abi (kopīgs disks, sinhronizēta mape vai mākoņa mape). Līdz beigām viens fails būs ticis no pirmās kopijas līdz izlaistam pārskatījumam **A**, pēc tam mainīts kā **B.1**; jūs redzēsiet, kas ko darīja, un to, ko Ben redz, kamēr jūs turat failu.

Viss tiek glabāts paslēptā mapē `.ccvault` blakus jūsu failiem: nav servera un nekas netiek augšupielādēts (izņēmums ir mākoņa mape, skatiet pēdējo soli). Katras pogas un noteikuma pilnu aprakstu meklējiet tēmā *Dokumenti: izņemšana, pārskatījumi un izlaišana*, ja tā ir jūsu lietotnē.

## 1. Iestatiet projekta mapi

1. Izvēlieties {{ui:Documents…}} grupā **Fails** rīkjoslā.
2. Izvēlieties {{ui:Choose the project folder}} un norādiet mapi, kurā atrodas projekta detaļas un mezgli. (Projekta mapes darbojas Studio un pārlūkos, kas var atvērt mapi, piemēram, Chrome un Edge. Citos pārlūkos panelī par to tiek ziņots.)
3. Izvēlieties {{ui:Change}} blakus **Jūs:** un ierakstiet savu vārdu `Ana` (ja tiek prasīts, arī šī datora nosaukumu). Panelī tagad redzams *Jūs: Ana datorā* un jūsu datora nosaukums. Jūsu vārds tiek pievienots visam, ko darāt.
4. Izvēlieties {{ui:Start a vault in this folder}} un ierakstiet projekta nosaukumu `Riverside clinic`. Panelī redzams *Glabātuve sākta projektam Riverside clinic.*

## 2. Pievienojiet failu kontrolei

1. Atveriet **Faili ārpus glabātuves** un izvēlieties {{ui:Add}} blakus `plates/Bracket.partcraft.json`.
2. Fails parādās sadaļā **Faili glabātuvē** ar pārskatījumu **A.1** un stāvokli **Procesā**. A.1 ir tā pirmā kopija; glabātuve glabā katra pārskatījuma kopiju.

## 3. Izņemiet, mainiet, atgriezt

1. Izvēlieties {{ui:Open}} blakus `plates/Bracket.partcraft.json`. Detaļa tiek atvērta PartCraft, un panelis aizveras, lai jūs to varētu redzēt. Atveriet paneli vēlreiz no {{ui:Documents…}}.
2. Atveriet paneli vēlreiz un izvēlieties {{ui:Check out}}. Rindā tagad rakstīts **Izņemts jums**. Mapē `.ccvault/locks` ir izveidots bloķēšanas fails; neviens cits nevar izņemt šo failu, kamēr jūs to neatgriezīsiet.
3. Mainiet detaļu: rediģējiet izmēru, pievienojiet caurumu. Saglabāšana tiek liegta, ja fails nav izņemts jums, un tiek norādīts iemesls; {{ui:Save As}} vienmēr darbojas jūsu pašu kopijai.
4. Atveriet paneli, izvēlieties {{ui:Check in}} un ierakstiet, kas mainījās (`Moved the door`). Panelī redzams *atgriezts kā A.2*. Projekta mapē fails tagad ir tā detaļa, ko jūs atvērāt, un bloķējums ir noņemts. Atgriežot bez izmaiņām, pārskatījums paliek tāds pats.

Ja nomainījāt domu, {{ui:Undo check-out}} atdod failu atpakaļ bez jauna pārskatījuma.

## 4. Pārskatīšana un izlaišana

1. Izvēlieties {{ui:Send for review}}. Stāvoklis kļūst par **Pārskatīšanā**, un fails kļūst tikai lasāms.
2. Pirms apstiprināšanas izvēlieties {{ui:Project settings}} un uzskaitiet, kas drīkst apstiprināt (viens vārds rindā), piemēram, `Ben` un `Carla`, un atzīmējiet noteikumu, ka apstiprinātājam jābūt citai personai, nevis autoram. Izvēlieties {{ui:Save settings}}. Tagad pati glabātuve neļauj nevienam citam.
3. Ben (vai Carla) izvēlas {{ui:Approve}} un ieraksta apstiprinātāja vārdu. Stāvoklis kļūst par **Izlaists**, un pārskatījums kļūst par **A**, kopā ar *apstiprināja* un vārdu. Izlaists fails ir tikai lasāms. {{ui:Send back}} to būtu atgriezis stāvoklī Procesā, norādot iemeslu.

Apstiprinātāja vārds ir panelī ierakstītais vārds; tas ir ieraksts par to, kas parakstīja, nevis identitātes pierādījums.

## 5. Jauns pārskatījums

1. Izlaistajam failam izvēlieties {{ui:New revision}}. Jūs to turat nākamajam burtam.
2. Mainiet to un tad izvēlieties {{ui:Check in}}. Pārskatījums ir **B.1**, procesā. Izlaidiet to tāpat, un tas kļūst par **B**. {{ui:Undo check-out}} pirms pirmās atgriešanas atstāj to pie **A**.

Pārskatījumu burti iet A, B … Z, AA, AB. Ja jūsu standarts izlaiž dažus burtus, projekta iestatījums *Izmantot ASME Y14.35 secību* nākamajiem pārskatījumiem izlaiž I, O, Q, S, X un Z.

## 6. Skatiet, kas notika

Izvēlieties faila nosaukumu, lai atvērtu tā informāciju:

- **{{ui:History}}**: katrs notikums, jaunākais pirmais, ar to, kas to izdarīja, kurā datorā un kad: *Atgriezts A.2* (Ana), *Izlaists* (Ben) un tā tālāk.
- **{{ui:Revisions}}**: pārskatījumu tabula: katrs saglabātais pārskatījums ar datumu, to, kas to atgrieza, piezīmi un to, kas apstiprināja. Glabātuve glabā katra kopiju mapē `.ccvault/revs`.
- **{{ui:Uses}}**: mezgla detaļas.
- **{{ui:Used by}}**: rāda katru glabātuves mezglu, kurā ir šī detaļa: mainot kronšteinu, zināt, kurus mezglus pārbaudīt.

## Mezgli: ko tie izmanto un materiālu saraksts

Ievietojiet mezglu (`.partcraft.json`, saglabātu režīmā Assembly) mapē un pievienojiet to. Izvēlieties tā nosaukumu: **Izmanto** uzskaita detaļas, ko tas satur, ar katras detaļas pārskatījumu un stāvokli; detaļai **Izmanto** uzskaita katru mezglu, kurā tā ir. {{ui:Bill of materials (CSV)}} saglabā visu detaļu sarakstu pa līmeņiem, ar daudzumiem, pārskatījumiem un stāvokļiem izklājlapai. Mainot kronšteinu, **Izmanto** norāda, kuri mezgli jāaplūko.

## 7. Ko Ben redz, kamēr jūs turat failu

Tagad izņemiet failu vēlreiz un lūdziet Ben atvērt to pašu projekta mapi savā datorā un atvērt paneli. Faila rindā viņš redz **Izņēmusi Ana** jūsu datorā **kopš** laika un nav pogas {{ui:Check out}}. Ja viņš tomēr mēģina, glabātuve liedz: bloķējums ir fails, ko sistēma nevar izveidot divreiz, tāpēc divi cilvēki nevar turēt failu pat vienā un tajā pašā mirklī, ja mape atrodas diskā Studio. (Pārlūkā mape nodrošina tikai labāko iespējamo, un panelī to norāda sadaļā **Mape**.)

Ja Ana ir prom un Ben vajag failu, {{ui:Break check-out}} to atbrīvo. Viņam jāieraksta iemesls; tas tiek ierakstīts žurnālā kopā ar to, kura izņemšana tas bija. Ja projekts uzskaita administratorus, tikai viņi var to darīt. Izņemšana, kas vecāka par novecojuma robežu (pēc noklusējuma 14 dienas), tiek atzīmēta kā *ilgu laiku*. Pēc pārtraukšanas Anas novēlotā atgriešana tiek liegta, tāpēc jūs abi nevarat pārrakstīt viens otra darbu.

## 8. Mākoņa mapes

Mākoņa mape ir projekta mape, kas glabājas jūsu komandas mākoņkrātuvē, tāpēc komandai nav vajadzīgs kopīgs disks. Studio, pierakstījies savā CadCraft kontā, panelī blakus {{ui:Choose the project folder}} redz {{ui:Open a cloud folder}}. Izvēlieties to un norādiet mapi, kas uzskaitīta kā darbvieta / mape. Mapi vispirms izveido darbvietas īpašnieks, un komandas mākoņkrātuvei jābūt aktīvai. Viss iepriekš aprakstītais darbojas tāpat; serveris veido bloķējumu, kas ir stingrs starp cilvēkiem. Ja neesat pierakstījies, panelis to pieprasa. Parastā pārlūka cilnē mākoņa poga netiek piedāvāta; izmantojiet Studio.

## Izmēģiniet

Izpildiet iepriekš minētos astoņus soļus ar reāla faila kopiju. Divu cilvēku soļiem vajadzīga otra persona vai divi logi ar diviem vārdiem. Ja to izmēģināt ar reālu kopīgu mapi, Kopienas testēšanas lapā ir pārbaude, kas jautā tieši to, un tā pieņem rezultātus.
