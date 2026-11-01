---
title: Početak rada s PartCraftom
summary: Što PartCraft danas radi, što treba vašem pregledniku i prvi dio za deset minuta, od skice do spremljene datoteke.
keywords: početak, prvo pokretanje, brzi početak, uvod, vodič, prvi dio, ploča, parametarski, modelar dijelova
from: 5f0a668d
---

PartCraft je parametarska aplikacija za dijelove i sklopove iz obitelji CadCraft. Crtate 2D skicu, učvršćujete je odnosima i kotama, pretvarate je u puno tijelo značajkama poput izvlačenja, rotacije i provrta te kasnije mijenjate bilo koji broj: dio se ponovno gradi iz svoje povijesti. Dijelovi zatim idu u sklopove, gdje ih spojevi postavljaju i omogućuju provjeru kretanja.

Što ova verzija radi:

| Posao | Što dobivate |
|---|---|
| Skice | Linije, pravokutnici, kružnice, lukovi, točke i osi, s odnosima i kotama te živim stanjem: nedovoljno, potpuno ili previše definirano |
| Značajke tijela | Izvlačenje, izrez, rotacija, rotacijski izrez, jednostavni i upušteni provrti, linearni i kružni uzorci, zrcaljenje, zaobljenja i skošenja na ravnim bridovima među ravnim plohama te ljuske i nagibi izvlačenja na ravnim plohama. Provlačenja, loftovi i druge značajke koje trebaju egzaktnu jezgru u ovoj verziji još nisu izrađeni: pogledajte [Što još nije izrađeno](topic:not-built-yet) |
| Povijest | Uređivanje brojeva svake značajke, potiskivanje, vraćanje unatrag, promjena redoslijeda i brisanje, uz poništavanje |
| Sklopovi | Dijelovi spojeni krutim, rotacijskim i kliznim spojevima, provjera sudara i provjera kretanja |
| Crteži | List A3 s tri pogleda, izometrijom, presjekom, detaljem, ukupnim mjerama, datumima, okvirima kontrole značajki i oznakama završne obrade površine, izvezen kao PDF |
| Datoteke | Vlastite datoteke dijelova i sklopova; STL, 3MF, stranični STEP, DXF i PDF van |

Sve radi u vašem pregledniku, na vašem računalu. **Ništa se ne šalje.** Pogledajte [Datoteke: otvaranje, spremanje i izvoz](topic:files) za to kamo idu datoteke.

## Što vam treba

- Aktualni Chrome, Edge, Firefox ili Safari s uključenim **WebGL-om** (3D grafika) i **WebAssemblyjem**. Oba su prema zadanim postavkama uključena. Geometriju punih tijela gradi WebAssembly mrežna jezgra koja se učitava s aplikacijom: pogledajte [Mrežna jezgra](topic:solid-kernels).
- Miš je najjednostavniji. Touchpad radi, a zasloni osjetljivi na dodir rade za pregled i jednostavno skiciranje: pogledajte [Touchpad, dodir i mali zasloni](topic:trackpad-and-touch).
- Zaslon širok najmanje 1280 piksela prikazuje cijelu alatnu traku u jednom redu. Uži prozori pomiču alatnu traku vodoravno; na telefonu se ploče otvaraju kao listovi iz trake pri dnu.

Više o preglednicima: [Preglednici i računala](common:browsers).

:::note
PartCraft radi u pregledniku i na desktopu unutar CadCraft Studija. Spremanje u oblak još nije dostupno: dijelove otvarate s računala i spremate natrag na njega kao datoteke.
:::

## Otvorite PartCraft

1. Otvorite PartCraft.
2. Pričekajte dok zaslon piše „Učitavanje jezgre za puna tijela…“. Prvi put to traje trenutak.
3. Vidite prazan 3D prikaz s tri osnovne ravnine, povijest lijevo („Dio1“, zatim Prednja ravnina, Gornja ravnina, Desna ravnina) i okvir u prikazu s naslovom „Započnite dio“.
4. Oznaka pri desnom kraju statusne trake kaže „Mrežna jezgra“: PartCraft u ovoj verziji gradi svaki dio mrežnom jezgrom, pa su okrugle plohe ravne stranice. Možete odmah početi modelirati.

Ako prikaz kaže da preglednik ne može prikazati 3D ili da se jezgra nije učitala, pogledajte [Rješavanje problema](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi dio: ploča s provrtom

Izradit ćete ploču 60 × 40 mm, debljine 10 mm, s provrtom od 6 mm kroz nju. Jedinice su milimetri.

### Skicirajte obris

1. Kliknite **Prednja ravnina** u povijesti lijevo. Ravnina se istakne u prikazu.
2. Odaberite {{ui:Skica}} na alatnoj traci ili pritisnite {{key:S}}. Prikaz se okreće da gleda ravno u ravninu, a alat Linija je aktivan.
3. Pritisnite {{key:R}} za alat Pravokutnik.
4. Pomaknite pokazivač na ishodište (mali crveni krug s križićem). Mali kvadrat pokazuje da se hvata. Kliknite.
5. Pomaknite se gore i desno i ponovno kliknite. Imate pravokutnik. Njegove su linije plave: plavo znači da se još mogu pomicati.

### Zadajte mu veličine

1. Pritisnite {{key:D}} za alat Kota.
2. Kliknite gornju liniju, zatim kliknite malo iznad nje. Otvara se okvir s brojem i trenutačnom duljinom.
3. Upišite `60` i pritisnite {{key:Enter}}. Pravokutnik postaje širok 60 mm.
4. Kliknite lijevu liniju, zatim kliknite malo lijevo od nje. Upišite `40` i pritisnite {{key:Enter}}.

Oznaka gore lijevo u prikazu sada kaže **Potpuno definirano**, a linije postaju crne tinte (crne u temi Papir, svijetle u temi Model). Svaka točka i veličina su fiksirane.

:::tip
Ako ste pravokutnik započeli dalje od ishodišta, oznaka i dalje kaže „Nedovoljno definirano · 2 stupnja slobode“. Pritisnite {{key:S}} za Odaberi, kliknite jedan kut, {{key:Shift}}+klik na ishodište, zatim odaberite {{ui:• Podudarno}} u desnoj ploči.
:::

### Izvucite ga

1. Odaberite {{ui:Izlaz}} na alatnoj traci ili pritišćite {{key:Esc}} dok se skica ne zatvori (obično dvaput).
2. Odaberite {{ui:Izvuci}}. Pojavljuje se tijelo od 10 mm. „Izvlačenje1“ dodaje se u povijest, s „Skica1“ uvučenom ispod.
3. Desna ploča prikazuje postavke izvlačenja. Za promjenu debljine upišite novi broj u **Dubina (mm)** i pritisnite {{key:Enter}} ili {{key:Tab}}. Dio se odmah ponovno gradi.

### Dodajte provrt

1. Kliknite veliku ravnu plohu na prednjoj strani ploče (kraj izvlačenja). Cijela ploha se istakne, a desna ploča kaže **Ploha**.
2. Odaberite {{ui:Skiciraj na ovoj plohi}} u desnoj ploči.
3. Pritisnite {{key:P}} za alat Točka i kliknite blizu sredine plohe.
4. Odaberite {{ui:Izlaz}}.
5. Odaberite {{ui:Provrt}}. Provrt od 6 mm prolazi kroz ploču. Promijenite **Promjer (mm)** u desnoj ploči ako želite.

Okvir **Dio** dolje lijevo sada prikazuje obujam, površinu, veličinu (60 × 40 × 10 mm) i „Prolazni provrti: 1“.

### Spremite ga

1. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Spremi}}.
2. Vaš preglednik preuzima `Part1.partcraft.json` u svoju mapu preuzimanja. Datoteka sadrži cijelu povijest: ponovno je otvorite s {{ui:Otvori}} da nastavite uređivati.

Za prethodno preimenovanje dijela kliknite prazan prostor u prikazu da ništa nije odabrano i upišite novi **Naziv** u desnoj ploči.

## Kamo dalje

- [Nacrtajte svoju prvu skicu](topic:sketch-basics) i [Potpuno definirajte skicu](topic:relations-dimensions) pravilno objašnjavaju skicer.
- [Mijenjajte dio kroz njegovu povijest](topic:edit-history) pokazuje kako urediti ono što ste izradili.
- [Zaobljenje, skošenje i izdubljivanje](topic:fillet-chamfer-shell) i [Izradite crtež](topic:drawing-pdf) dovršavaju dio. [Što još nije izrađeno](topic:not-built-yet) navodi što ova verzija ne radi, poput provlačenja i loftova.
- [Dolazite iz drugog parametarskog modelara](topic:coming-from) navodi navike koje ovdje rade drukčije.
- [Tipke i miš](topic:keyboard) je potpuni popis prečaca.
- [Korištenje ove pomoći](common:help).
