---
title: Počnite s PartCraft-om
summary: Šta PartCraft danas radi, šta vaš pretraživač treba, i prvi dio za deset minuta, od skice do sačuvane datoteke.
keywords: početak, prvo pokretanje, brzi početak, uvod, vodič, prvi dio, pločica, parametarski, modeler dijelova
from: 7d43283f
---

PartCraft je aplikacija za parametarske dijelove i sklopove iz porodice CadCraft. Crtate 2D skicu, učvršćujete je relacijama i kotama, pretvarate u čvrsto tijelo značajkama kao što su istiskivanje, rotacija i rupa, i mijenjate bilo koji broj kasnije: dio se obnavlja iz svoje historije. Dijelovi zatim idu u sklopove, gdje ih spojevi postavljaju i omogućavaju provjeru kretanja.

Šta ova verzija radi:

| Posao | Šta dobijate |
|---|---|
| Skice | Linije, pravougaonici, krugovi, lukovi, tačke i središnje linije, s relacijama i kotama, te živim stanjem: nedovoljno, potpuno ili preveliko definisano |
| Čvrste značajke | Istiskivanje, izrezivanje, rotacija, izrezivanje rotacijom, jednostavne i upuštene rupe, linearni i kružni uzorci, zrcaljenje, zaobljenja i skošenja na ravnim ivicama između ravnih površina, te ljuske i nagibi na ravnim površinama. Provodnici, prijelazi i druge značajke koje zahtijevaju tačno jezgro još nisu izgrađene u ovoj verziji: vidi [Šta još nije izgrađeno](topic:not-built-yet) |
| Historija | Uredite brojeve bilo koje značajke, potisnite, vratite, preuredite i izbrišite, s poništavanjem |
| Sklopovi | Dijelovi spojeni krutim, rotacionim i kliznim spojevima, provjera sudara i provjera kretanja |
| Crteži | A3 list s tri pogleda, izometrijom, presjekom, detaljnim pogledom, ukupnim dimenzijama, referentnim tačkama, okvirima kontrole tolerancija i simbolima završne obrade površine, izvezen kao PDF |
| Datoteke | Vlastite datoteke dijela i sklopa; izlaz u STL, 3MF, tačnom STEP, DXF i PDF |

Sve radi u vašem pretraživaču, na vašem računaru. **Ništa se ne otprema.** Pogledajte [Datoteke: otvaranje, čuvanje i izvoz](topic:files) za to gdje datoteke idu.

## Šta vam treba

- Aktuelni Chrome, Edge, Firefox ili Safari s uključenim **WebGL** (3D grafika) i **WebAssembly**. Oba su uključena po defaultu. Geometriju čvrstih tijela gradi WebAssembly mrežno jezgro koje se učitava s aplikacijom: vidi [Mrežno jezgro](topic:solid-kernels).
- Miš je najlakši. Trackpad radi, a ekrani osjetljivi na dodir rade za pregled i jednostavno skiciranje: vidi [Trackpad, dodir i mali ekrani](topic:trackpad-and-touch).
- Ekran širok najmanje 1280 piksela prikazuje cijelu traku s alatima u jednom redu. Uži prozori pomjeraju traku s alatima bočno; na telefonu se paneli otvaraju kao listovi s trake pri dnu.

Više o pretraživačima: [Pretraživači i računari](common:browsers).

:::note
PartCraft radi u pretraživaču, a na desktopu unutar CadCraft Studio. Čuvanje u oblaku još nije dostupno: dijelove otvarate s računara i čuvate ih nazad na njega kao datoteke.
:::

## Otvorite PartCraft

1. Otvorite PartCraft.
2. Sačekajte dok ekran ne kaže „Učitavanje jezgra čvrstih tijela…”. Prvi put to traje malo.
3. Vidite prazan 3D prikaz s tri osnovne ravni, historiju s lijeve strane („Dio1”, zatim Prednja ravnina, Gornja ravnina, Desna ravnina) i kutiju u prikazu s naslovom „Počni dio”.
4. Pločica blizu desnog kraja statusne trake kaže „Mrežno jezgro”: PartCraft u ovoj verziji gradi svaki dio mrežnim jezgrom, pa su okrugle površine ravne facete. Možete odmah početi modelirati.

Ako prikaz kaže da pretraživač ne može prikazati 3D, ili jezgro nije učitano, pogledajte [Rješavanje problema](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi dio: pločica s rupom

Napravit ćete pločicu 60 × 40 mm, debelu 10 mm, sa rupom 6 mm kroz nju. Jedinice su milimetri.

### Skicirajte obris

1. Kliknite **Prednja ravnina** u historiji s lijeve strane. Ravan se označava u prikazu.
2. Odaberite {{ui:Sketch}} u traci s alatima, ili pritisnite {{key:S}}. Prikaz se okreće da gleda ravno na ravan, i alat Linija je aktivan.
3. Pritisnite {{key:R}} za alat Pravougaonik.
4. Pomjerite pokazivač na ishodište (mali crveni krug s krstom). Mali kvadrat pokazuje da se privlači. Kliknite.
5. Pomjerite se gore i desno i ponovo kliknite. Imate pravougaonik. Njegove linije su plave: plava znači da se još mogu pomjerati.

### Dajte mu dimenzije

1. Pritisnite {{key:D}} za alat Kota.
2. Kliknite gornju liniju, zatim kliknite malo iznad nje. Otvara se polje za broj s trenutnom dužinom.
3. Ukucajte `60` i pritisnite {{key:Enter}}. Pravougaonik se mijenja na 60 mm širine.
4. Kliknite lijevu liniju, zatim kliknite malo lijevo od nje. Ukucajte `40` i pritisnite {{key:Enter}}.

Čip u gornjem lijevom uglu prikaza sada kaže **Potpuno definisano**, a linije postaju tinta (crno na temi Papir, svijetlo na temi Model). Svaka tačka i veličina je fiksirana.

:::tip
Ako ste započeli pravougaonik podalje od ishodišta, čip i dalje kaže „Nedovoljno definisano · 2 stepena slobode”. Pritisnite {{key:S}} za Odabir, kliknite jedan ugao, {{key:Shift}}+klik na ishodište, zatim odaberite {{ui:• Podudarnost}} u desnom panelu.
:::

### Istisnite ga

1. Odaberite {{ui:Izađi}} u traci s alatima, ili pritisnite {{key:Esc}} dok se skica ne zatvori (obično dva puta).
2. Odaberite {{ui:Istisni}}. Pojavljuje se čvrsto tijelo 10 mm. „Istisni1” se dodaje u historiju, s „Skica1” uvučenom ispod.
3. Desni panel prikazuje postavke istiskivanja. Da promijenite debljinu, upišite novi broj u **Dubina (mm)** i pritisnite {{key:Enter}} ili {{key:Tab}}. Dio se odmah obnavlja.

### Dodajte rupu

1. Kliknite veliku ravnu površinu sprijeda pločice (kraj istiskivanja). Cijela površina se označava, a desni panel kaže **Površina**.
2. Odaberite {{ui:Skica na ovoj površini}} u desnom panelu.
3. Pritisnite {{key:P}} za alat Tačka i kliknite blizu sredine površine.
4. Odaberite {{ui:Izađi}}.
5. Odaberite {{ui:Rupa}}. Rupa 6 mm prolazi kroz pločicu. Promijenite **Prečnik (mm)** u desnom panelu ako želite.

Okvir **Dio** dolje lijevo sada prikazuje zapreminu, površinu, veličinu (60 × 40 × 10 mm) i „Prolazne rupe: 1”.

### Sačuvajte

1. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Spasi}}.
2. Vaš pretraživač preuzima `Part1.partcraft.json` u svoju mapu za preuzimanja. Datoteka sadrži cijelu historiju: ponovo je otvorite s {{ui:Otvori}} da nastavite uređivanje.

Da prvo preimenujete dio, kliknite prazan prostor u prikazu da ništa nije odabrano i ukucajte novo **Ime** u desnom panelu.

## Kuda dalje

- [Nacrtajte prvu skicu](topic:sketch-basics) i [Potpuno definišite skicu](topic:relations-dimensions) objašnjavaju uređivač skica kako treba.
- [Mijenjajte dio kroz njegovu historiju](topic:edit-history) pokazuje kako uređivati ono što ste izgradili.
- [Zaobljenje, kosina i šupljina](topic:fillet-chamfer-shell) i [Napravite crtež](topic:drawing-pdf) završavaju dio. [Šta još nije izgrađeno](topic:not-built-yet) navodi šta ova verzija ne radi, poput nizova i prijelaza.
- [Dolazak iz drugog parametarskog modelera](topic:coming-from) navodi navike koje ovdje rade drugačije.
- [Tasteri i miš](topic:keyboard) je potpun popis prečica.
- [Upotreba ove pomoći](common:help).
