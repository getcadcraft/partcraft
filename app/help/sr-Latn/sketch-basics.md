---
title: Nacrtaj prvu skicu
summary: Otvori skicu na ravni ili na ravnoj površi, crtaj linije, pravougaonike, krugove, lukove, tačke i osne linije, zaokruži ćošak, izaberi, prevuci i izbriši.
keywords: skica, crtanje, linija, pravougaonik, krug, luk, tačka, osna linija, konstrukcija, zaobljenje, zaobljenje skice, zaokruživanje ćoška, hvatanje, izbor, prozor, prevlačenje, profil
from: 28be7436
---

Svako čvrsto telo počinje kao skica: ravan crtež na ravni. Ovaj vodič pokriva alate za crtanje. Vezivanje skice relacijama i kotama je u [Potpuno definiši skicu](topic:relations-dimensions).

## Započni skicu

Skicu možeš crtati na osnovnoj ravni ili na bilo kojoj ravnoj površi dela.

1. Izaberi gde ćeš crtati skicu:
   - osnovna ravan: klikni **Prednja ravan**, **Gornja ravan** ili **Desna ravan** u istoriji, ili klikni ravan u pogledu;
   - ravna površ: klikni površ u pogledu. Cela površ se ističe.
2. Izaberi {{ui:Skica}} na traci sa alatkama ili pritisni {{key:S}}. (Kad izabereš površ, možeš izabrati i {{ui:Skica na ovoj površi}} u desnom panelu; kad izabereš ravan, {{ui:Skica na njoj}}.)

Pogled se okreće upravno na ravan, alati za skicu se pojavljuju na traci sa alatkama, a alat {{ui:Linija}} je spreman. Ako pritisneš {{ui:Skica}} bez izbora, prikazuju se osnovne ravni, a statusna traka kaže: „Klikni ravan ili ravnu površ za skicu. Esc prekida.“

:::note
Zakrivljena površ ne može da nosi skicu: „Ta površ je zakrivljena. Izaberi ravnu površ ili ravan za skicu.“
:::

**Skica na površi prati tu površ.** Ako je površ nastala ivicom skice ili krajem izvlačenja, nova skica se pomera kad se funkcija promeni (dublji džep sa sobom nosi i skicu na svom dnu). Ako panel kaže da je površ „Fiksirana gde je izabrana“, skica ostaje tamo gde je površ sada.

## Alati za crtanje

Svaki alat ima dugme na traci sa alatkama i taster. Ponovo izaberi isto dugme, pritisni {{key:S}} ili pritisni {{key:Esc}} da se vratiš na Izbor.

| Alat | Taster | Kako crtati |
|---|---|---|
| {{ui:Linija}} | {{key:L}} | Klikni početak, pa klikni svaku sledeću tačku. Linije se nižu jedna za drugom. Lanac završi sa {{key:Esc}}, {{key:Enter}}, desnim klikom ili dvostrukim klikom. Klik na postojeću tačku ga takođe završava |
| {{ui:Pravougaonik}} | {{key:R}} | Klikni jedan ugao, pa suprotan ugao. Dobijaš četiri linije spojene u uglovima, dve horizontalne i dve vertikalne |
| {{ui:Krug}} | {{key:C}} | Klikni centar, pa tačku na krugu |
| {{ui:Luk}} | {{key:A}} | Klikni centar, pa početak, pa kraj. Luk ide u smeru u kojem pomeraš pokazivač oko centra |
| {{ui:Tačka}} | {{key:P}} | Klikni. Tačka sama označava centar rupe za {{ui:Rupa}} |
| {{ui:Osna linija}} | {{key:N}} | Kao linija, jedan segment po segment. Crta se isprekidano; to je konstrukciona geometrija, koristi se kao osa rotiranja ili referenca |
| {{ui:Zaobljenje}} | {{key:F}} | Klikni ćošak u kojem se sastaju dve linije, unesi poluprečnik, pritisni {{key:Enter}} |
| {{ui:Splajn}} | {{key:B}} | Klikni tačke kroz koje kriva prolazi; {{key:Enter}} završava, klik na prvu tačku je zatvara. Vidi [Splajnovi, skraćivanje, pomak i drugi alati za skicu](topic:sketch-tools) |
| {{ui:Skrati}} | {{key:T}} | Klikni deo krive koji treba ukloniti, do najbližih preseka |
| {{ui:Kota}} | {{key:D}} | Vidi [Potpuno definiši skicu](topic:relations-dimensions) |

Dok crtaš, pored pokazivača se prikazuje mali okvir sa dužinom, dimenzijom, prečnikom ili poluprečnikom.

### Unesi veličinu dok crtaš

Posle prvog klika na liniju, pravougaonik, krug ili luk, možeš da ukucaš veličinu umesto da je klikneš. Kad ukucaš broj, pored pokazivača se otvara okvir sa tim brojem:

| Alat | Polja ({{key:Tab}} prelazi na sledeće) | Šta se dešava na {{key:Enter}} |
|---|---|---|
| {{ui:Linija}}, {{ui:Osna linija}} | Dužina, pa Ugao (°) od X ose skice | Linija se crta te dužine, ka pokazivaču ili pod unetim uglom; lanac se nastavlja od njenog kraja |
| {{ui:Pravougaonik}} | Širina, pa Visina | Pravougaonik se crta od prvog ugla ka pokazivaču; veličina koju nisi uneo uzima se iz pokazivača |
| {{ui:Krug}} | Prečnik | Krug se crta tim prečnikom |
| {{ui:Luk}} | Poluprečnik posle centra, pa Ugao luka (°) posle početka | Početak je na toj udaljenosti od centra; zatim se luk proteže za taj ugao, u smeru u kojem si pomerao pokazivač |

Svaka veličina koju uneseš postaje **vodeća kota** u istom koraku, pa skica dobija dimenzije: {{key:Mod+Z}} uklanja oblik i njegove kote zajedno. Klik umesto pritiska na {{key:Enter}} zadržava ono što si uneo, a ostatak uzima iz klika. {{key:Esc}} zatvara okvir i vraća se na pokazivač.

Isključi to u {{ui:Podešavanja}} › {{ui:PartCraft}} › **Kota dok crtaš** ako želiš da crtaš samo klikovima. Vidi [Podešavanja PartCraft-a](topic:settings).

{{ui:Više}}, na kraju alata za skicu, sadrži {{ui:Spline sa kontrolnim tačkama}}, {{ui:Produži}}, {{ui:Pomak}}, {{ui:Simetrija}}, {{ui:Poligon}}, {{ui:Žleb}}, nizove skice i {{ui:Projektuj ivicu}}: vidi [Splajnovi, skraćivanje, pomak i drugi alati za skicu](topic:sketch-tools).

### Hvatanje

Hvatanje dodaje relacije umesto tebe, pa skica ostaje spojena kad se pomera:

- Na **krajnjoj tački ili početku koordinatnog sistema** pojavljuje se mali kvadrat. Nova tačka se poklapa sa njom.
- Na **liniji, krugu ili luku** pojavljuje se mali krstić. Nova tačka se postavlja na tu krivu.
- Linija do 3 stepena od horizontale ili vertikale hvata se za nju i dobija horizontalnu ili vertikalnu relaciju. Oznaka pokazuje „H“ ili „V“.

Da izbegneš hvatanje, zumiraj tako da klikneš dalje od tačke ili krive.

## Zaokruži ćošak

1. Pritisni {{key:F}} ili izaberi {{ui:Zaobljenje}}.
2. Klikni tačku ćoška u kojoj se sastaju dve linije.
3. Otvara se okvir sa predloženim poluprečnikom. Unesi poluprečnik i pritisni {{key:Enter}}.

Obe linije se skraćuju i spajaju tangentnim lukom sa kotom poluprečnika. Poruke koje možeš videti: „Zaobljenju je potreban ćošak u kojem se tačno dve linije sastaju.“ i „Taj poluprečnik je prevelik za ove linije.“

:::tip
Zaobljenje skice zaokružuje ćošak profila, pa izvlačenje dobija zaobljene vertikalne ivice. Da zaokružiš ivice samog tela (na primer gornje ivice ploče), koristi funkciju {{ui:Zaobljenje}} na delu: vidi [Zaokruživanje, skošenje i šupljina](topic:fillet-chamfer-shell). U skici je Zaobljenje alat za skicu sa trake; na delu je to funkcija.
:::

## Konstrukciona geometrija

Konstrukcione linije, krugovi i lukovi su isprekidani i sivi. Vode skicu, ali nisu deo profila koji se izvlači ili rotira.

1. Izaberi linije, krugove ili lukove.
2. Pritisni {{key:Q}} ili izaberi {{ui:Konstrukcija}}. Ponovo pritisni da ih vratiš.

## Izbor, prevlačenje i brisanje

Pritisni {{key:S}} (ili {{key:Esc}} dok nijedan alat nije aktivan) za Izbor.

- Klikni tačku, liniju, krug, luk, simbol relacije ili kotu da je izabereš. {{key:Shift}}+klik dodaje u izbor ili oduzima iz njega. Na Windows-u i Linux-u {{key:Ctrl}}+klik radi isto; na Mac-u ⌘+klik.
- Prevuci po praznom prostoru da nacrtaš prozor za izbor: izabrano je sve što je potpuno unutra.
- Prevuci tačku ili liniju da je pomeriš. Rešavač održava svaku relaciju i kotu dok se pomera, pa se pomera samo slobodna geometrija. Prevuci ivicu kruga da promeniš njegov poluprečnik.
- Prevuci broj kote da pomeriš oznaku.
- Pritisni {{key:Delete}} ili {{key:Backspace}}, ili izaberi {{ui:Izbriši}} u desnom panelu, da izbrišeš izbor. Brisanje geometrije briše i relacije na njoj.

## Zumiranje i pomeranje pogleda u skici

- Okreni točkić da zumiraš na mestu pokazivača.
- Prevuci srednjim ili desnim tasterom da pomeriš pogled.
- {{ui:Uklopi}} na traci sa alatkama ili u desnom panelu uklapa skicu u pogled. U skici je taster {{key:F}} alat Zaobljenje, a ne Uklopi.

## Zatvaranje skice

Izaberi {{ui:Izađi}} na traci sa alatkama ili {{ui:Izađi iz skice}} u desnom panelu, ili pritisni {{key:Esc}} dok se skica ne zatvori. Svaki {{key:Esc}} prvo poništava ono što je u toku, zatim se vraća na Izbor, zatim briše izbor, a sledeći zatvara skicu.

Skica ostaje izabrana, pa sledeće {{ui:Izvlačenje}} ili {{ui:Rotiranje}} koristi nju.

## Šta čini dobar profil

{{ui:Izvlačenje}} i {{ui:Rotiranje}} koriste **svaku zatvorenu petlju** od linija, krugova, lukova i splajnova skice (koji nisu konstrukciona). Petlje unutar petlji postaju rupe.

- Svaki kraj mora da se sastaje tačno sa jednim drugim krajem. Poruka „Profil je otvoren: kraj na (12.5, 40) nije ni sa čim spojen.“ navodi mesto.
- U jednoj tački ne smeju da se sastaju tri kraja: „Profil se grana na (0, 20): tu se sastaje više od dva kraja.“
- Tačke i konstrukciona geometrija se ignorišu pri formiranju profila.

Sledeće: [Potpuno definiši skicu relacijama i kotama](topic:relations-dimensions).

## Skica iz fotografije

**Funkcije › Više › Skica iz fotografije…** (ili grupa Skica na traci stabla funkcija) prati sliku ravnog dela na jednostavnoj podlozi (njegov obris i rupe) ili crtež olovkom, u skicu linija, lukova i krugova. Navedi jednu dužinu (širinu, visinu ili najdužu stranu) da skica dobije pravu veličinu, proveri šta je pronađeno u pregledu i izaberi **Napravi skicu**; može je i izvući, u istom koraku opoziva. Prati se na ovom računaru. Poluprečnici ćoškova se vraćaju u okviru oko 5 %, detalji od piksel ili dva se gube, a fotografija snimljena pod uglom ili sa senkama preko dela se ne ispravlja: fotografiši deo upravno, pri ravnomernom svetlu.
