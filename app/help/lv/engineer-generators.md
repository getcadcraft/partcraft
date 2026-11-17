---
title: Detaļas no fizikas: ģeneratori
summary: Darbvieta Engineer un elements Ģenerēts ķermenis: izvēlieties ģeneratoru, uzstādiet tā ievades datus (plūsmu, spiedienu, temperatūras, materiālu, printeri) un iegūstiet detaļu, kas izmērīta pēc mācību grāmatu formulām, ar datu lapu, ražošanas pārbaudēm un failiem analīzes rīkiem. Vienādi ievades dati vienmēr dod vienu un to pašu detaļu.
keywords: engineer, ģenerators, ģenerēts ķermenis, fizika, noteikumi, siltummainis, kolektors, sprausla, režģis, giroīds, datu lapa, ievades dati, deterministisks, vienādi ievades dati, vienāda detaļa, ražošanas pārbaudes, 3D drukāšana, pulvera slānis
from: 5a387dc0
---

**Ģenerators** ir skripts, kas izmēro detaļu pēc jūsu prasībām un to izveido. Siltummaiņa ģenerators ņem vērā siltumu, kas jāpārvieto, abas plūsmas un to temperatūras, spiedienu un materiālu; tas aprēķina, cik lielai jābūt serdei un cik biezai jābūt tās sienai, to izveido un norāda skaitļus, ko izmantoja, un to, no kurienes katrs nāk. Mainiet ievadi, un detaļa seko.

Rezultāts ir parasts ķermenis detaļā: tas ir elementu sarakstā, to var drukāt un eksportēt. Pats ģenerators arī tiek glabāts detaļā, tāpēc fails atveras jebkurā datorā bez instalēta ģeneratora, un **detaļas atvēršana nekad nepalaiž skriptu**.

## Izveidojiet ķermeni

1. Izvēlieties darbvietu {{ui:Engineer}} pārslēdzējā.
2. Sarakstā izvēlieties ģeneratoru (tos, kas nāk kopā ar PartCraft, un tad jebkuru, ko atvērāt no faila) un noklikšķiniet uz {{ui:New}}.
3. Skripts darbojas. Kad tas beidzas, ķermenis ir skatā, un panelis rāda tā ievadi, tā **datu lapu** un **pārbaudes**.

Ķermeni varat pievienot arī no Dizaina: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Mainiet to

Mainot jebkuru ievadi, ķermenis tiek veidots no jauna drīz pēc tam, kad pārtraucat rakstīt. Panelis norāda, kura no trim lietām ir patiesa:

- **Ir aktuāls**: ķermenis atbilst skriptam un tā ievadei.
- **Ievade ir mainījusies**: ķermenis detaļā ir no iepriekšējās ievades; tas tiek veidots no jauna, vai nospiediet {{ui:Run}}.
- **Vēl nav palaists** vai **Pēdējais palaišanas mēģinājums neizdevās**: tiek rādīta skripta kļūda ar tās rindu.

{{ui:Stop}} beidz palaišanu, kas ilgst pārāk ilgi. {{ui:Undo}} iet atpakaļ pa vienam solim: palaišana ir viens solis, ievade ir viens solis.

## Datu lapa

Katrs skaitlis, ko ģenerators aprēķinājis, ir uzskaitīts ar savu **vienību** un **to, no kurienes tas nāk** (mācību grāmatas vienādojums, standarts, datu lapa). Nekas nav paslēpta konstante. Lapa ir daļa no faila, tāpēc tā ir tāda pati nākamajā datorā. [Datu izvade](topic:data-out) parāda, kā to saglabāt kā JSON vai PDF.

## Pārbaudes

Ģenerators var pārbaudīt savu detaļu pret drukāšanas procesu: sienas un spraugas, kas plānākas, nekā process tur; brīvas daļas; dobumus, kas ieslodzī pulveri vai sveķus; caurumus, kas ir pārāk šauri, lai tos notīrītu; un izvirzījumus, kam vajag balstu. Atradumi ir panelī un sarakstā {{ui:Problems}} (⚠ poga), un tie tiek saglabāti kopā ar detaļu.

Procesu skaitļi ir apaļie skaitļi, ko publiskie dizaina ceļveži sniedz procesam vispārīgi (FDM, SLA, SLS, metāla pulvera slānis). Tie **nav jūsu mašīnas specifikācija**: pirms paļaušanās uz pārbaudi aizstājiet tos ar savas darbnīcas skaitļiem. Pārbaude darbojas uz vokseļu režģa, tāpēc tā ir precīza līdz aptuveni vienam vokselim: siena tiek ziņota tikai tad, ja tā ir plānāka par robežu vairāk nekā par vienu vokseli.

## Kas ir iekļauts

| Ģenerators | Ko tas izveido |
|---|---|
| Giroīdu bloks | Bloks, kas aizpildīts ar giroīdu, Švarca P vai dimanta slāni: vienkāršākais režģis |
| Giroīdu siltummainis | Divu šķidrumu siltummaiņa serde, izmērīta pēc jaudas ar efektivitātes-NTU metodi, un tās siena pēc spiediena; var pārbaudīt spiediena zudumu ar plūsmas pētījumu vienā šūnā |
| Sadales kolektors | Galvenā caurule un zari, katra caurule izmērīta pēc plūsmas, ko tā nes |
| Režģa sija ar pakāpenisku biezumu | Režģis, kura siena kļūst biezāka tur, kur topoloģijas optimizācija norāda, ka vajag materiālu |

Visi ir pirmie novērtējumi, kas balstīti uz mācību grāmatu formulām. [Inženierzinātņu bibliotēka](topic:engineering-library) uzskaita formulas un to ierobežojumus. Pirms paļaušanās uz rezultātu palaidiet uz tā Simulation, Thermal vai Flow.

## Eksporta kontrole

Engineer ģeneratori un datu lapas nes paziņojumu par eksporta kontroli un sankcijām. Izlasiet to sadaļā [Engineer un eksporta kontrole](topic:engineer-export-notice); tas ir arī katras datu lapas apakšā.

## Vēl nav izveidots

- Galvenes, pieslēgvietas un savienojumi siltummaiņa serdē: tā ir tikai serde.
- Temperatūras līknes materiālu izturībai: materiāli ir istabas temperatūrā.
- T-veida zudumi un plūsmas sadale starp izejām kolektorā.
- Ģeneratoru pievienošana no papildinājumu kataloga ar vienu klikšķi; faila atvēršana pievieno ģeneratoru šai pārlūkprogrammai.
- Ģeneratori citām lietotnēm.
