---
title: Počnite sa PartCraft-om
summary: Šta PartCraft danas radi, šta je potrebno pregledaču i prvi deo za deset minuta, od skice do sačuvane datoteke.
keywords: početak, prvo pokretanje, brzi početak, uvod, vodič, prvi deo, ploča, parametarski, modelar delova
from: 5f0a668d
---

PartCraft je aplikacija za parametarske delove i sklopove iz porodice CadCraft. Crtate 2D skicu, učvršćujete je relacijama i kotama, pretvarate je u čvrsto telo elementima kao što su izvlačenje, rotiranje i rupa, a bilo koji broj kasnije možete promeniti: deo se ponovo gradi iz svoje istorije. Delovi zatim idu u sklopove, gde ih spojevi postavljaju i omogućavaju proveru kretanja.

Šta ova verzija radi:

| Posao | Šta dobijate |
|---|---|
| Skice | Linije, pravougaonici, krugovi, lukovi, tačke i osne linije, sa relacijama i kotama, i stanjem uživo: nedovoljno, potpuno ili previše definisano |
| Elementi tela | Izvlačenje, sečenje, rotiranje, rotirano sečenje, proste i upuštene rupe, linearni i kružni nizovi, simetrija, zaobljenja i obaranja ivica na pravim ivicama između ravnih površi, te ljuske i nacrti na ravnim površima. Provlačenja, prelivanja i drugi elementi koji zahtevaju tačno jezgro još nisu izgrađeni u ovoj verziji: vidi [Šta još nije izgrađeno](topic:not-built-yet) |
| Istorija | Izmena brojeva bilo kog elementa, isključivanje, vraćanje na raniju tačku, promena redosleda i brisanje, uz poništavanje |
| Sklopovi | Delovi spojeni krutim, rotacionim i kliznim spojevima, provera sudara i provera kretanja |
| Crteži | List formata A3 sa tri pogleda, izometrijom, presekom, pogledom detalja, ukupnim merama, datumima, okvirima kontrole elemenata i simbolima kvaliteta površine, izvezen kao PDF |
| Datoteke | Sopstvene datoteke delova i sklopova; izlaz u STL, 3MF, fasetirani STEP, DXF i PDF |

Sve radi u vašem pregledaču, na vašem računaru. **Ništa se ne otprema.** Vidi [Datoteke: otvaranje, čuvanje i izvoz](topic:files) za to gde idu datoteke.

## Šta vam treba

- Aktuelni Chrome, Edge, Firefox ili Safari sa uključenim **WebGL** (3D grafika) i **WebAssembly**. Oba su podrazumevano uključena. Geometriju čvrstog tela gradi WebAssembly mrežno jezgro koje se učitava sa aplikacijom: vidi [Mrežno jezgro](topic:solid-kernels).
- Miš je najlakši. Touchpad radi, a ekrani osetljivi na dodir rade za pregled i jednostavno skiciranje: vidi [Touchpad, dodir i mali ekrani](topic:trackpad-and-touch).
- Ekran širok bar 1280 piksela prikazuje celu traku alata u jednom redu. Uži prozori pomeraju traku alata bočno; na telefonu se paneli otvaraju kao listovi iz trake na dnu.

Više o pregledačima: [Pregledači i računari](common:browsers).

:::note
PartCraft radi u pregledaču, a na radnoj površini unutar CadCraft Studio. Čuvanje u oblaku još nije dostupno: delove otvarate sa računara i čuvate ih nazad na njemu kao datoteke.
:::

## Otvorite PartCraft

1. Otvorite PartCraft.
2. Sačekajte dok ekran piše „Učitavanje jezgra čvrstog tela…“. Prvi put ovo traje malo.
3. Vidite prazan 3D prikaz sa tri osnovne ravni, istoriju levo („Part1“, zatim Prednja ravan, Gornja ravan, Desna ravan) i okvir u prikazu sa naslovom „Započni deo“.
4. Čip blizu desnog kraja statusne trake kaže „Mrežno jezgro“: PartCraft u ovoj verziji gradi svaki deo mrežnim jezgrom, pa su okrugle površine ravne fasete. Možete odmah početi sa modelovanjem.

Ako prikaz kaže da pregledač ne može da prikaže 3D, ili jezgro nije učitano, vidi [Rešavanje problema](topic:troubleshooting#the-app-does-not-start).

## Vaš prvi deo: ploča sa rupom

Napravićete ploču od 60 × 40 mm, debljine 10 mm, sa rupom prečnika 6 mm kroz nju. Jedinice su milimetri.

### Skicirajte obris

1. Kliknite **Prednja ravan** u istoriji levo. Ravan se u prikazu osvetli.
2. Izaberite {{ui:Skica}} u traci alata ili pritisnite {{key:S}}. Prikaz se okreće tako da gleda pravo u ravan, a alat Linija je aktivan.
3. Pritisnite {{key:R}} za alat Pravougaonik.
4. Pomerite pokazivač na koordinatni početak (mali crveni krug sa krstom). Mali kvadrat pokazuje da se hvata. Kliknite.
5. Pomerite gore i desno i ponovo kliknite. Imate pravougaonik. Njegove linije su plave: plavo znači da još mogu da se pomeraju.

### Dajte mu mere

1. Pritisnite {{key:D}} za alat Kota.
2. Kliknite gornju liniju, pa kliknite malo iznad nje. Otvara se polje za broj sa trenutnom dužinom.
3. Ukucajte `60` i pritisnite {{key:Enter}}. Pravougaonik postaje širok 60 mm.
4. Kliknite levu liniju, pa kliknite malo levo od nje. Ukucajte `40` i pritisnite {{key:Enter}}.

Čip u gornjem levom uglu prikaza sada piše **Potpuno definisano**, a linije postaju tamne (crne na temi Papir, svetle na temi Model). Svaka tačka i mera su fiksirane.

:::tip
Ako ste pravougaonik počeli dalje od koordinatnog početka, čip i dalje piše „Nedovoljno definisano · 2 stepena slobode“. Pritisnite {{key:S}} za Izbor, kliknite jedan ugao, {{key:Shift}}+klik na početak, pa izaberite {{ui:• Poklapanje}} u desnom panelu.
:::

### Izvucite ga

1. Izaberite {{ui:Izađi}} u traci alata ili pritisnite {{key:Esc}} dok se skica ne zatvori (obično dvaput).
2. Izaberite {{ui:Izvlačenje}}. Pojavljuje se čvrsto telo debljine 10 mm. „Extrude1“ je dodat u istoriju, a „Sketch1“ je uvučen ispod njega.
3. Desni panel prikazuje podešavanja izvlačenja. Da promenite debljinu, ukucajte novi broj u **Dubina (mm)** i pritisnite {{key:Enter}} ili {{key:Tab}}. Deo se odmah ponovo gradi.

### Dodajte rupu

1. Kliknite veliku ravnu površ na prednjoj strani ploče (kraj izvlačenja). Cela površ se osvetli, a desni panel piše **Površ**.
2. Izaberite {{ui:Skica na ovoj površi}} u desnom panelu.
3. Pritisnite {{key:P}} za alat Tačka i kliknite blizu sredine površi.
4. Izaberite {{ui:Izađi}}.
5. Izaberite {{ui:Rupa}}. Rupa od 6 mm prolazi kroz ploču. Promenite **Prečnik (mm)** u desnom panelu ako želite.

Okvir **Deo** dole levo sada prikazuje zapreminu, površinu, veličinu (60 × 40 × 10 mm) i „Prolazne rupe: 1“.

### Sačuvajte je

1. Pritisnite {{key:Mod+S}} ili izaberite {{ui:Sačuvaj}}.
2. Vaš pregledač preuzima `Part1.partcraft.json` u fasciklu Preuzimanja. Datoteka nosi celu istoriju: otvorite je ponovo sa {{ui:Otvori}} da nastavite izmene.

Da preimenujete deo pre toga, kliknite prazno mesto u prikazu da ništa ne bude izabrano, pa ukucajte novo **Ime** u desnom panelu.

## Kuda dalje

- [Nacrtajte prvu skicu](topic:sketch-basics) i [Potpuno definišite skicu](topic:relations-dimensions) objašnjavaju skicer detaljno.
- [Promenite deo kroz njegovu istoriju](topic:edit-history) pokazuje kako menjate ono što ste napravili.
- [Zaobljenje, obaranje ivica i šupljina](topic:fillet-chamfer-shell) i [Napravite crtež](topic:drawing-pdf) završavaju deo. [Šta još nije izgrađeno](topic:not-built-yet) navodi šta ova verzija ne radi, na primer provlačenja i prelivanja.
- [Dolazak iz drugog parametarskog modelara](topic:coming-from) navodi navike koje ovde funkcionišu drugačije.
- [Tasteri i miš](topic:keyboard) je potpun spisak prečica.
- [Korišćenje ove pomoći](common:help).
