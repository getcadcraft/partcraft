---
title: Tačped, dodir i mali ekrani
summary: Kako okretati, pomerati i zumirati pomoću Mac ili laptop tačpeda, šta radi na ekranu osetljivom na dodir a šta i dalje traži tastaturu, i kako se ekran menja na telefonu ili uskom prozoru.
keywords: tačped, dodirna tabla, magic mouse, mac, dodir, tablet, ipad, telefon, štipanje, dva prsta, desni klik, sekundarni klik, pokreti, mali ekran, mobilni
from: 0e764fd8
---

PartCraft je napravljen za miš sa točkićem i srednjim dugmetom, ali tačped dobro radi kad znate pokrete, a ekran osetljiv na dodir radi za gledanje delova i jednostavno skiciranje.

## Tačped

:::mac
| Da | Uradite ovo |
|---|---|
| Okrenite deo (3D) | Kliknite i prevucite jednim prstom (ili prevucite sa tri prsta, ako ste uključili prevlačenje sa tri prsta) |
| Pomerajte (3D) | Držite {{key:Shift}} (ili ⌘) i kliknite-prevucite, ili kliknite-prevucite dva prsta pritisnuta (prevlačenje sekundarnim klikom) |
| Okrenite deo, prevlačenjem | Prevucite dva prsta; uz {{key:Shift}}, prevlačenje pomera. Potrebno je da **Skrolovanje** bude postavljeno na „Sam odredi“ (početak) ili „Tačped“ |
| Zumirajte (3D i skica) | Štipanje. Zum ide ka pokazivaču. Uz **Skrolovanje** postavljeno na „Točkić miša“, skrolovanje dva prsta takođe zumira |
| Desni klik | Kliknite sa dva prsta, ili {{key:Ctrl}}+klik |
| Pomerajte u skici | Prevucite dva prsta („Sam odredi“ ili „Tačped“), ili kliknite-prevucite dva prsta pritisnuta. {{key:Shift}}+prevlačenje ne pomera u skici (crta prozor izbora) |
| Dodajte u izbor u skici | {{key:Shift}}+klik ili ⌘+klik |

Uključite sekundarni klik u **Podešavanja sistema, Tačped, Pokazivanje i klik** ako dvoprstni klik ne radi.
:::

:::windows linux
| Da | Uradite ovo |
|---|---|
| Okrenite deo (3D) | Pritisnite tačped (ili dodirnite i držite) i prevucite |
| Pomerajte (3D) | Držite {{key:Shift}} ili {{key:Ctrl}} i prevucite, ili prevucite dok držite pritisnutu desnu zonu dugmeta |
| Okrenite deo, prevlačenjem | Prevucite dva prsta; uz {{key:Shift}}, prevlačenje pomera. Potrebno je da **Skrolovanje** bude postavljeno na „Sam odredi“ (početak) ili „Tačped“ |
| Zumirajte (3D i skica) | Štipanje gde tačped to podržava. Zum ide ka pokazivaču. Uz **Skrolovanje** postavljeno na „Točkić miša“, skrolovanje dva prsta zumira |
| Desni klik | Dodir dvoprstom, ili donji desni ugao tačpeda |
| Pomerajte u skici | Prevucite dva prsta („Sam odredi“ ili „Tačped“), ili prevucite dok držite pritisnutu desnu zonu dugmeta. {{key:Shift}}+prevlačenje ne pomera u skici |
| Dodajte u izbor u skici | {{key:Shift}}+klik ili {{key:Ctrl}}+klik |
:::

**Skrolovanje** je u [PartCraft podešavanjima](topic:settings): „Sam odredi“ (početak) tretira bočno ili sitno skrolovanje kao tačped, „Tačped“ uvek tako radi, „Točkić miša“ nikad. Štipanje zumira u sva tri.

Taster sa strelicama okreće 3D prikaz, a {{key:Shift}} sa strelicama pomera, kad ste kliknuli u prikaz: zgodno na tačpedu. {{key:Plus}} i {{key:Minus}} zumiraju.

## Ekrani osetljivi na dodir

PartCraft čita unos dodirom, pa tableti, laptopovi sa dodirnim ekranom i telefoni rade, uz ograničenja.

:::touch
**Tasteri za dodir**

Kad dodirnete ekran, mala traka se pojavljuje u donjem desnom uglu prikaza sa tasterima koje prst nema. Nestaje kad koristite miš.

- {{ui:Esc}}: taster Esc. Otkazuje ono što ste započeli ili se vraća korak unazad, tačno kao taster.
- {{ui:Dodaj}} (u skici, uz Izaberi): dok je uključen, svaki dodir dodaje stavku u izbor ili je uklanja, kao {{key:Shift}}+klik. Dodirnite ponovo da se vratite na jednu po jednu stavku.
- {{ui:Gotovo}} (dok crtate lanac linija, splajn ili poligon): završava ga, kao desni klik.

Držanje prsta nepomično oko pola sekunde radi isto za jedan dodir: sa alatom za crtanje završava ono što crtate, a uz Izaberi dodaje stavku ispod prsta u izbor ili je uklanja. Tačke i linije se lakše pogađaju prstom: PartCraft gleda oko dva puta dalje od dodira nego od klika.

**U 3D prikazu**

- Jedan prst: okreće deo.
- Dva prsta: štipanje za zum, zajedno pomeranje za pomeranje.
- Dodir: bira površinu, ivicu ili ravan. Pre dodira nema isticanja pokazivačem.

**U skici**

- Dodirnite alatom za crtanje da postavite svaku tačku: dodirnite početak, pa kraj. Privlačenje se dešava tamo gde podignete prst.
- Dva prsta štipaju i pomeraju. Stavljanje drugog prsta otkazuje prevlačenje koje je započeo prvi prst.
- Da završite lanac linija, dodirnite {{ui:Gotovo}}, držite prst nepomično, ili ponovo dodirnite {{ui:Linija}} (ili drugi alat) na traci.
- Uz Izaberi, dodirnite da izaberete; prevucite tačku ili liniju da je pomerite; prevucite po praznom prostoru za prozor. Drugi dodir zamenjuje izbor, osim ako je {{ui:Dodaj}} uključeno (ili držite prst nepomično na drugoj stavci).
- Da promenite dimenziju, koristite **Uredi** pored nje u desnom panelu.

**List crteža**

Dodirnite da postavite i izaberete simbole, a prevucite simbol da ga pomerite. Štipanjem zumirajte, pomerajte dva prsta za pomeranje, ili prevucite jedan prst preko praznog papira. Drugi prst zaustavlja simbol koji ste prevlačili, i on se vraća.

**Šta i dalje traži tastaturu**

- Unos brojeva: ekranska tastatura se pojavljuje u poljima za broj i poljima dimenzija.
- Prečice tastature za alate: koristite traku sa alatima.
:::

## Mali ekrani i telefoni

- Na 1280 piksela ili šire, traka sa alatima staje u jedan red.
- Između oko 760 i 1100 piksela, bočni paneli postaju uži.
- Ispod oko 760 piksela (telefon ili uzak prozor), ekran se slaže: traka sa alatima (prevucite je u stranu za više dugmadi), 3D prikaz, statusna traka, pa panel svojstava i istorija. Skrolujte stranicu da dođete do panela.
- Meniji ({{ui:Izvezi}}, {{ui:Pogledi}}) se otvaraju preko cele širine ekrana.

:::note
Na iPhone-u nema režima celog ekrana u pregledaču; {{key:Ctrl+Shift+F}} i dugme za režim ekrana prebacuju samo između normalnog i sakrivenih traka.
:::

Telefon je dobar za otvaranje dela, okretanje i proveru njegovih podataka. Pravo modelovanje traži veći ekran i miš ili tačped.

## Pregledači

Trenutni Chrome, Edge, Firefox i Safari pokreću PartCraft na Windows, macOS i Linux, i na tabletima i telefonima, sve dok su WebGL i WebAssembly dostupni. Pogledajte [Pregledači i računari](common:browsers).
