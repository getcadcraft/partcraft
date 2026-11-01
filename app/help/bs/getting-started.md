---
title: Počnite s PartCraftom
summary: Šta PartCraft danas radi, šta vaš preglednik treba i prvi dio za deset minuta, od skice do spašene datoteke.
keywords: počni, prvo pokretanje, brzi početak, uvod, vodič, prvi dio, ploča, parametarski, modeler dijelova
from: 5f0a668d
---

PartCraft je parametarska aplikacija za dijelove i sklopove iz porodice CadCraft. Nacrtate 2D skicu, učvrstite je relacijama i kotama, pretvorite u čvrsto tijelo elementima kao što su istiskivanje, rotacija i rupa, a bilo koji broj kasnije možete promijeniti: dio se ponovo gradi iz svoje historije. Dijelovi se zatim stavljaju u sklopove, gdje ih spojevi postavljaju i omogućavaju provjeru kretanja.

Šta ova verzija radi:

| Posao | Šta dobijate |
|---|---|
| Skice | Linije, pravougaonici, krugovi, lukovi, tačke i centralne linije, s relacijama i kotama i uživo stanjem: nedovoljno, potpuno ili previše definisano |
| Elementi tijela | Istiskivanje, usijecanje, rotacija, rotirani usjek, jednostavne i upuštene rupe, linearni i kružni obrasci, zrcaljenje, zaobljenja i skošenja na pravim ivicama između ravnih površina, te ljuske i nagibi na ravnim površinama. Provlačenje, spajanje profila i ostali elementi koji traže tačan kernel još nisu izgrađeni u ovoj verziji: vidi [Šta još nije izgrađeno](topic:not-built-yet) |
| Historija | Uređivanje brojeva bilo kojeg elementa, potiskivanje, povrat, promjena redoslijeda i brisanje, uz poništavanje |
| Sklopovi | Dijelovi spojeni krutim, rotacijskim i kliznim spojevima, provjera sudara i provjera kretanja |
| Crteži | A3 list s tri pogleda, izometrijom, presjekom, detaljnim pogledom, ukupnim dimenzijama, referencama, okvirima kontrole oblika i simbolima završne obrade površine, izvezen kao PDF |
| Datoteke | Vlastite datoteke dijelova i sklopova; izlaz u STL, 3MF, STEP s fasetama, DXF i PDF |

Sve radi u vašem pregledniku, na vašem računaru. **Ništa se ne šalje.** Vidi [Datoteke: otvaranje, spašavanje i izvoz](topic:files) za to gdje idu datoteke.

## Šta vam treba

- Aktuelni Chrome, Edge, Firefox ili Safari s uključenim **WebGL** (3D grafika) i **WebAssembly**. Oboje je uključeno po zadanim postavkama. Geometriju čvrstog tijela gradi WebAssembly mrežni kernel koji se učitava s aplikacijom: vidi [Mrežni kernel](topic:solid-kernels).
- Najlakše je s mišem. Radi i trackpad, a ekrani osjetljivi na dodir rade za pregled i jednostavno skiciranje: vidi [Trackpad, dodir i mali ekrani](topic:trackpad-and-touch).
- Ekran širine najmanje 1280 piksela prikazuje cijelu traku alata u jednom redu. Uži prozori imaju traku alata koja se pomjera u stranu; na telefonu se paneli otvaraju kao listovi s trake pri dnu.

Više o preglednicima: [Preglednici i računari](common:browsers).

:::note
PartCraft radi u pregledniku, a na radnoj površini unutar CadCraft Studija. Spašavanje u oblak još nije dostupno: dijelove otvarate s računara i spašavate ih nazad na njega kao datoteke.
:::

## Otvorite PartCraft

1. Otvorite PartCraft.
2. Sačekajte dok ekran ne kaže "Učitavanje kernela za čvrsta tijela…". Prvi put to traje malo.
3. Vidite prazan 3D prikaz s tri osnovne ravni, historiju lijevo ("Part1", zatim Prednja ravan, Gornja ravan, Desna ravan) i okvir u prikazu s naslovom "Započni dio".
4. Čip pri desnom kraju statusne trake kaže "Mrežni kernel": PartCraft u ovoj verziji svaki dio gradi mrežnim kernelom, pa su zaobljene površine ravne fasete. Možete odmah početi modelirati.

Ako prikaz kaže da preglednik ne može prikazati 3D, ili kernel nije učitan, vidi [Rješavanje problema](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi dio: ploča s rupom

Napravićete ploču 60 × 40 mm, debljine 10 mm, sa rupom prečnika 6 mm kroz nju. Jedinice su milimetri.

### Nacrtajte obris

1. Kliknite **Prednja ravan** u historiji lijevo. Ravan se označi u prikazu.
2. Odaberite {{ui:Sketch}} u traci alata ili pritisnite {{key:S}}. Prikaz se okrene da gleda ravno u ravan, a alat Linija je aktivan.
3. Pritisnite {{key:R}} za alat Pravougaonik.
4. Pomjerite pokazivač na ishodište (mali crveni krug s krstom). Mali kvadrat pokazuje da se hvata. Kliknite.
5. Pomjerite gore i desno i kliknite opet. Imate pravougaonik. Njegove linije su plave: plava znači da se još mogu pomjerati.

### Dajte mu dimenzije

1. Pritisnite {{key:D}} za alat Kota.
2. Kliknite gornju liniju, pa kliknite malo iznad nje. Otvara se polje za broj s trenutnom dužinom.
3. Upišite `60` i pritisnite {{key:Enter}}. Pravougaonik se mijenja na širinu 60 mm.
4. Kliknite lijevu liniju, pa kliknite malo lijevo od nje. Upišite `40` i pritisnite {{key:Enter}}.

Čip u gornjem lijevom uglu prikaza sada kaže **Potpuno definisano**, a linije postaju tamne (crne na temi Paper, svijetle na temi Model). Svaka tačka i svaka dimenzija su fiksirane.

:::tip
Ako ste počeli pravougaonik izvan ishodišta, čip i dalje kaže "Nedovoljno definisano · 2 stepena slobode". Pritisnite {{key:S}} za Odabir, kliknite jedan ugao, {{key:Shift}}+klik na ishodište, pa odaberite **• Koincidentno** u desnom panelu.
:::

### Istisnite ga

1. Odaberite {{ui:Exit}} u traci alata ili pritisnite {{key:Esc}} dok se skica ne zatvori (obično dvaput).
2. Odaberite {{ui:Extrude}}. Pojavljuje se čvrsto tijelo debljine 10 mm. "Extrude1" se dodaje u historiju, a "Sketch1" je uvučen ispod njega.
3. Desni panel prikazuje postavke istiskivanja. Da promijenite debljinu, upišite novi broj u **Dubina (mm)** i pritisnite {{key:Enter}} ili {{key:Tab}}. Dio se odmah ponovo gradi.

### Dodajte rupu

1. Kliknite veliku ravnu površinu sprijeda ploče (kraj istiskivanja). Cijela površina se označi, a desni panel kaže **Površina**.
2. Odaberite {{ui:Sketch on this face}} u desnom panelu.
3. Pritisnite {{key:P}} za alat Tačka i kliknite blizu sredine površine.
4. Odaberite {{ui:Exit}}.
5. Odaberite {{ui:Hole}}. Rupa prečnika 6 mm prolazi kroz ploču. Promijenite **Prečnik (mm)** u desnom panelu ako želite.

Okvir **Dio** dolje lijevo sada prikazuje zapreminu, površinu, dimenzije (60 × 40 × 10 mm) i "Prolazne rupe: 1".

### Spasite je

1. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Save}}.
2. Vaš preglednik preuzima `Part1.partcraft.json` u svoj folder za preuzimanja. Datoteka sadrži cijelu historiju: ponovo je otvorite s {{ui:Open}} da nastavite s uređivanjem.

Da prvo preimenujete dio, kliknite prazan prostor u prikazu da ništa nije odabrano i upišite novi **Naziv** u desnom panelu.

## Gdje dalje

- [Nacrtajte prvu skicu](topic:sketch-basics) i [Potpuno definišite skicu](topic:relations-dimensions) detaljno objašnjavaju uređivač skica.
- [Promijenite dio kroz njegovu historiju](topic:edit-history) pokazuje kako uređivati ono što ste napravili.
- [Zaobljavanje, skošenje i šupljina](topic:fillet-chamfer-shell) i [Napravite crtež](topic:drawing-pdf) završavaju dio. [Šta još nije izgrađeno](topic:not-built-yet) navodi šta ova verzija ne radi, kao što su provlačenja i spajanja profila.
- [Dolazak iz drugog parametarskog modelera](topic:coming-from) navodi navike koje ovdje funkcionišu drugačije.
- [Tipke i miš](topic:keyboard) je potpun spisak prečica.
- [Korištenje ove pomoći](common:help).
