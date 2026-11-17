---
title: Početak rada sa programom PartCraft
summary: Šta PartCraft danas radi, šta je potrebno pregledaču i prvi deo za deset minuta, od skice do sačuvane datoteke.
keywords: početak, prvo pokretanje, brzi početak, uvod, vodič, prvi deo, ploča, parametarski, modelar delova
from: 7d43283f
---

PartCraft je aplikacija za parametarske delove i sklopove u porodici CadCraft. Crtaš 2D skicu, učvršćuješ je relacijama i kotama, pretvaraš u čvrsto telo karakteristikama kao što su izvlačenje, rotiranje i rupa, i menjaš bilo koji broj kasnije: deo se ponovo gradi iz svoje istorije. Delovi zatim ulaze u sklopove, gde ih spojevi postavljaju i omogućavaju proveru kretanja.

Šta ova verzija radi:

| Posao | Šta se dobija |
|---|---|
| Skice | Linije, pravougaonici, krugovi, lukovi, tačke i središnje linije, sa relacijama i kotama, i živim stanjem: nedovoljno, potpuno ili preterano definisano |
| Čvrste karakteristike | Izvlačenje, izrezivanje, rotiranje, rotirano izrezivanje, proste i upuštene rupe, linearni i kružni obrasci, ogledanje, zaobljenja i skošenja na pravim ivicama između ravnih strana, i ljuske i nagibi na ravnim stranama. Provlačenja, lofting i druge karakteristike koje zahtevaju tačno jezgro još nisu napravljene u ovoj verziji: vidi [Šta još nije napravljeno](topic:not-built-yet) |
| Istorija | Izmeni brojeve bilo koje karakteristike, potisni, vrati, preuredi i obriši, uz opozivanje |
| Sklopovi | Delovi spojeni krutim, rotacionim i kliznim spojevima, provera sudara i provera kretanja |
| Crteži | A3 list sa tri pogleda, izometrijskim, presekom, detaljnim pogledom, ukupnim dimenzijama, referentnim bazama, okvirima kontrole karakteristika i simbolima kvaliteta površine, izvezeno kao PDF |
| Datoteke | Sopstvene datoteke dela i sklopa; izlaz u STL, 3MF, tačan STEP, DXF i PDF |

Sve radi u pregledaču, na računaru. **Ništa se ne otprema.** Vidi [Datoteke: otvaranje, čuvanje i izvoz](topic:files) za to gde datoteke idu.

## Šta je potrebno

- Aktuelni Chrome, Edge, Firefox ili Safari sa uključenim **WebGL** (3D grafika) i **WebAssembly**. Oba su uključena podrazumevano. Geometriju čvrstog tela gradi WebAssembly mrežno jezgro koje se učitava sa aplikacijom: vidi [Mrežno jezgro](topic:solid-kernels).
- Miš je najlakši. Tačpad radi, a ekrani osetljivi na dodir rade za pregled i jednostavnu skicu: vidi [Tačpad, dodir i mali ekrani](topic:trackpad-and-touch).
- Ekran širok bar 1280 piksela prikazuje celu traku sa alatima u jednom redu. Uži prozori pomeraju traku bočno; na telefonu se paneli otvaraju kao listovi iz trake pri dnu.

Više o pregledačima: [Pregledači i računari](common:browsers).

:::note
PartCraft radi u pregledaču, a na radnoj površi unutar CadCraft Studio. Čuvanje u oblaku još nije dostupno: delove otvaraš sa računara i čuvaš ih nazad na njega kao datoteke.
:::

## Otvori PartCraft

1. Otvori PartCraft.
2. Sačekaj dok ekran ne piše „Učitavanje jezgra za čvrsta tela…”. Ovo potraje prvi put.
3. Vidiš prazan 3D prikaz sa tri osnovne ravni, istoriju s leve strane („Part1”, zatim Prednja ravan, Gornja ravan, Desna ravan) i kutiju u prikazu sa naslovom „Započni deo”.
4. Čip pri desnom kraju statusne trake piše „Mrežno jezgro”: PartCraft u ovoj verziji gradi svaki deo mrežnim jezgrom, pa su zaobljene površi ravne facete. Modelovanje može odmah da počne.

Ako prikaz kaže da pregledač ne može da prikaže 3D, ili jezgro nije učitano, vidi [Rešavanje problema](topic:troubleshooting#the-app-does-not-start).

## Tvoj prvi deo: ploča sa rupom

Pravi se ploča 60 × 40 mm, debela 10 mm, sa rupom prečnika 6 mm kroz nju. Jedinice su milimetri.

### Skiciraj obris

1. Klikni **Prednja ravan** u istoriji s leve strane. Ravan se ističe u prikazu.
2. Izaberi {{ui:Skica}} na traci sa alatima, ili pritisni {{key:S}}. Prikaz se okreće da gleda ravno u ravan, a alat Linija je aktivan.
3. Pritisni {{key:R}} za alat Pravougaonik.
4. Pomeri pokazivač na koordinatni početak (mali crveni krug sa krstom). Mali kvadrat pokazuje da se hvata. Klikni.
5. Pomeri se gore i desno i ponovo klikni. Imaš pravougaonik. Njegove linije su plave: plava znači da još mogu da se pomeraju.

### Daj mu veličine

1. Pritisni {{key:D}} za alat Kota.
2. Klikni gornju liniju, zatim klikni malo iznad nje. Otvara se polje za broj sa trenutnom dužinom.
3. Ukucaj `60` i pritisni {{key:Enter}}. Pravougaonik postaje širok 60 mm.
4. Klikni levu liniju, zatim klikni malo levo od nje. Ukucaj `40` i pritisni {{key:Enter}}.

Čip u gornjem levom uglu prikaza sada piše **Potpuno definisano**, a linije postaju tamne (crne na temi Papir, svetle na temi Model). Svaka tačka i veličina su fiksirane.

:::tip
Ako je pravougaonik počet van koordinatnog početka, čip i dalje piše „Nedovoljno definisano · 2 stepena slobode”. Pritisni {{key:S}} za Izbor, klikni jedno teme, {{key:Shift}}+klik na koordinatni početak, zatim izaberi {{ui:• Poklapanje}} u desnom panelu.
:::

### Izvuci ga

1. Izaberi {{ui:Izađi}} na traci sa alatima, ili pritisni {{key:Esc}} dok se skica ne zatvori (obično dvaput).
2. Izaberi {{ui:Izvlačenje}}. Pojavljuje se čvrsto telo debljine 10 mm. „Extrude1” se dodaje u istoriju, sa „Sketch1” uvučenom ispod.
3. Desni panel prikazuje podešavanja izvlačenja. Da bi se promenila debljina, ukucaj novi broj u **Dubina (mm)** i pritisni {{key:Enter}} ili {{key:Tab}}. Deo se odmah ponovo gradi.

### Dodaj rupu

1. Klikni veliku ravnu stranu sprednjeg dela ploče (kraj izvlačenja). Cela strana se ističe, a desni panel piše **Strana**.
2. Izaberi {{ui:Skica na ovoj površi}} u desnom panelu.
3. Pritisni {{key:P}} za alat Tačka i klikni blizu sredine strane.
4. Izaberi {{ui:Izađi}}.
5. Izaberi {{ui:Rupa}}. Rupa prečnika 6 mm prolazi kroz ploču. Promeni **Prečnik (mm)** u desnom panelu ako želiš.

Polje **Deo** dole levo sada prikazuje zapreminu, površinu, dimenzije (60 × 40 × 10 mm) i „Prolazne rupe: 1”.

### Sačuvaj je

1. Pritisni {{key:Mod+S}} ili izaberi {{ui:Sačuvaj}}.
2. Pregledač preuzima `Part1.partcraft.json` u fasciklu za preuzimanja. Datoteka sadrži celu istoriju: otvori je ponovo sa {{ui:Otvori}} da nastaviš da uređuješ.

Da bi se deo najpre preimenovao, klikni prazan prostor u prikazu da ništa nije izabrano i ukucaj novi **Naziv** u desnom panelu.

## Gde dalje

- [Nacrtaj prvu skicu](topic:sketch-basics) i [Potpuno definiši skicu](topic:relations-dimensions) objašnjavaju skiciranje pravilno.
- [Promeni deo kroz njegovu istoriju](topic:edit-history) pokazuje kako se menja ono što je napravljeno.
- [Zaobljenja, skošenja i šupljine](topic:fillet-chamfer-shell) i [Napravi crtež](topic:drawing-pdf) završavaju deo. [Šta još nije napravljeno](topic:not-built-yet) navodi šta ova verzija ne radi, kao što su provlačenja i lofting.
- [Dolazak iz drugog parametarskog modelara](topic:coming-from) navodi navike koje ovde rade drugačije.
- [Tasteri i miš](topic:keyboard) je pun spisak prečica.
- [Korišćenje ove pomoći](common:help).
