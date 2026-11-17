---
title: Počnite s aplikacijom PartCraft
summary: Što PartCraft radi danas, što vaš preglednik treba i prvi dio za deset minuta, od skice do spremljene datoteke.
keywords: početak, prvo pokretanje, brzi početak, uvod, vodič, prvi dio, ploča, parametarski, modeler dijelova
from: 7d43283f
---

PartCraft je aplikacija za parametarske dijelove i sklopove iz obitelji CadCraft. Nacrtate 2D skicu, učvrstite je relacijama i kotama, pretvorite u čvrsto tijelo značajkama kao što su izvlačenje, rotiraj i provrt, i kasnije promijenite bilo koji broj: dio se obnavlja iz svoje povijesti. Dijelovi zatim idu u sklopove, gdje ih zglobovi postavljaju i omogućuju provjeru kretanja.

Ova verzija radi sljedeće:

| Posao | Što dobivate |
|---|---|
| Skice | Linije, pravokutnici, kružnice, lukovi, točke i središnje linije, s relacijama i kotama, te živim stanjem: nedovoljno, potpuno ili preveliko definirano |
| Čvrste značajke | Izvlačenje, izrez, rotiraj, rotirani izrez, jednostavni i upušteni provrti, linearni i kružni nizovi, zrcaljenje, zaobljenja i skošenja na ravnim bridovima između ravnih ploha, te ljuske i nagibi na ravnim plohama. Provlačenja, loft i druge značajke koje trebaju egzaktnu jezgru još nisu izrađene u ovoj verziji: vidi [Što još nije izrađeno](topic:not-built-yet) |
| Povijest | Uredite brojke bilo koje značajke, potisnite, vratite, preslažite i brišite, uz poništavanje |
| Sklopovi | Dijelovi spojeni krutim, rotacijskim i kliznim zglobovima, provjera sudara i provjera kretanja |
| Crteži | List A3 s tri pogleda, izometrija, presjek, detaljni pogled, ukupne mjere, referentni elementi, okviri kontrole značajki i simboli završne obrade površine, izvezeni kao PDF |
| Datoteke | Vlastite datoteke dijela i sklopa; izlaz u STL, 3MF, točni STEP, DXF i PDF |

Sve radi u vašem pregledniku, na vašem računalu. **Ništa se ne šalje na poslužitelj.** Pogledajte [Datoteke: otvaranje, spremanje i izvoz](topic:files) za to kamo idu datoteke.

## Što vam treba

- Aktualni Chrome, Edge, Firefox ili Safari s uključenim **WebGL** (3D grafika) i **WebAssembly**. Oboje je standardno uključeno. Geometriju čvrstog tijela gradi WebAssembly mrežna jezgra koja se učitava s aplikacijom: vidi [Mrežna jezgra](topic:solid-kernels).
- Miš je najlakši. Dodirna podloga radi, a zasloni osjetljivi na dodir rade za pregled i jednostavno skiciranje: vidi [Dodirna podloga, dodir i mali zasloni](topic:trackpad-and-touch).
- Zaslon širok najmanje 1280 piksela prikazuje cijelu alatnu traku u jednom retku. Uži prozori pomiču alatnu traku vodoravno; na telefonu se ploče otvaraju kao listovi s trake pri dnu.

Više o preglednicima i računalima: [Preglednici i računala](common:browsers).

:::note
PartCraft radi u pregledniku, a na računalu unutar CadCraft Studio. Spremanje u oblaku još nije dostupno: dijelove otvarate s računala i spremate ih natrag kao datoteke.
:::

## Otvorite PartCraft

1. Otvorite PartCraft.
2. Pričekajte dok ekran ne kaže „Učitavanje jezgre čvrstih tijela…”. Prvi put to traje malo.
3. Vidite prazan 3D prikaz s tri osnovne ravnine, povijest lijevo („Part1”, zatim Prednja ravnina, Gornja ravnina, Desna ravnina) i kutiju u prikazu s naslovom „Započni dio”.
4. Čip blizu desnog kraja statusne trake kaže „Mrežna jezgra”: PartCraft u ovoj verziji gradi svaki dio mrežnom jezgrom, pa su okrugle plohe ravne fasete. Možete odmah početi modelirati.

Ako prikaz kaže da preglednik ne može prikazati 3D, ili jezgra nije učitana, pogledajte [Rješavanje problema](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi dio: ploča s rupom

Napravit ćete ploču 60 × 40 mm, debelu 10 mm, s provrtom od 6 mm kroz nju. Jedinice su milimetri.

### Skicirajte obris

1. Kliknite **Prednja ravnina** u povijesti lijevo. Ravnina se označi u prikazu.
2. Odaberite {{ui:Skica}} na alatnoj traci ili pritisnite {{key:S}}. Prikaz se okreće da gleda ravno u ravninu, a alat Linija je aktivan.
3. Pritisnite {{key:R}} za alat Pravokutnik.
4. Pomaknite pokazivač na ishodište (mali crveni krug s križićem). Mali kvadrat pokazuje da se hvata. Kliknite.
5. Pomaknite se gore i desno pa ponovno kliknite. Imate pravokutnik. Njegove linije su plave: plava znači da se još mogu pomicati.

### Dajte mu mjere

1. Pritisnite {{key:D}} za alat Kota.
2. Kliknite gornju liniju, zatim kliknite malo iznad nje. Otvara se okvir s brojem i trenutnom duljinom.
3. Upišite `60` i pritisnite {{key:Enter}}. Pravokutnik postaje širok 60 mm.
4. Kliknite lijevu liniju, zatim kliknite malo lijevo od nje. Upišite `40` i pritisnite {{key:Enter}}.

Čip u gornjem lijevom kutu prikaza sada kaže **Potpuno definirano**, a linije postaju crne (crne na temi Papir, svijetle na temi Model). Svaka točka i mjera je fiksirana.

:::tip
Ako ste započeli pravokutnik izvan ishodišta, čip i dalje kaže „Nedovoljno definirano · 2 stupnja slobode”. Pritisnite {{key:S}} za Odabir, kliknite jedan kut, {{key:Shift}}+klik na ishodište, zatim odaberite {{ui:• Podudarno}} na desnoj ploči.
:::

### Izvucite ga

1. Odaberite {{ui:Izlaz}} na alatnoj traci ili pritisnite {{key:Esc}} dok se skica ne zatvori (obično dvaput).
2. Odaberite {{ui:Izvuci}}. Pojavljuje se čvrsto tijelo od 10 mm. „Extrude1” se dodaje u povijest, a „Sketch1” je uvučen ispod njega.
3. Desna ploča prikazuje postavke izvlačenja. Da promijenite debljinu, upišite novi broj u **Dubina (mm)** i pritisnite {{key:Enter}} ili {{key:Tab}}. Dio se odmah obnavlja.

### Dodajte provrt

1. Kliknite veliku ravnu plohu sprijeda ploče (kraj izvlačenja). Cijela ploha se označi, a desna ploča kaže **Ploha**.
2. Odaberite {{ui:Skiciraj na ovoj plohi}} na desnoj ploči.
3. Pritisnite {{key:P}} za alat Točka i kliknite blizu sredine plohe.
4. Odaberite {{ui:Izlaz}}.
5. Odaberite {{ui:Provrt}}. Provrt od 6 mm prolazi kroz ploču. Promijenite **Promjer (mm)** na desnoj ploči ako želite.

Okvir **Dio** dolje lijevo sada prikazuje volumen, površinu, veličinu (60 × 40 × 10 mm) i „Prolazni provrti: 1”.

### Spremite ga

1. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Spremi}}.
2. Vaš preglednik preuzima `Part1.partcraft.json` u mapu za preuzimanja. Datoteka sadrži cijelu povijest: ponovno je otvorite s {{ui:Otvori}} da nastavite uređivati.

Da prvo preimenujete dio, kliknite prazan prostor u prikazu da ništa nije odabrano i upišite novi **Naziv** na desnoj ploči.

## Kamo dalje

- [Nacrtajte prvu skicu](topic:sketch-basics) i [Potpuno definirajte skicu](topic:relations-dimensions) detaljno objašnjavaju uređivač skica.
- [Promijenite dio kroz njegovu povijest](topic:edit-history) pokazuje kako uređivati ono što ste izgradili.
- [Zaobli, skosi i napravi ljusku](topic:fillet-chamfer-shell) i [Izradite crtež](topic:drawing-pdf) dovršavaju dio. [Što još nije izrađeno](topic:not-built-yet) navodi što ova verzija ne radi, kao što su provlačenja i loftovi.
- [Dolazak iz drugog parametarskog modelera](topic:coming-from) navodi navike koje ovdje rade drugačije.
- [Tipke i miš](topic:keyboard) je potpun popis prečaca.
- [Korištenje ove pomoći](common:help).
