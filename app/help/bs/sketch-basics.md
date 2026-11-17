---
title: Nacrtaj prvu skicu
summary: Otvori skicu na ravni ili ravnoj površini, crtaj linije, pravougaonike, krugove, lukove, tačke i osne linije, zaobli ugao, odaberi, povuci i izbriši.
keywords: skica, crtaj, linija, pravougaonik, krug, luk, tačka, osna linija, konstrukcija, zaobljenje, zaobljenje skice, zaobli ugao, hvatanje, odabir, prozor, povuci, profil
from: 28be7436
---

Svaki čvrsti model počinje kao skica: ravan crtež na ravni. Ovaj vodič pokriva alate za crtanje. Učvršćivanje skice relacijama i kotama opisano je u [Potpuno definiši skicu](topic:relations-dimensions).

## Pokretanje skice

Skicu možete crtati na osnovnoj ravni ili na bilo kojoj ravnoj površini dijela.

1. Odaberite gdje ćete crtati skicu:
   - osnovna ravan: kliknite **Ravan spreda**, **Ravan odozgo** ili **Ravan desno** u historiji, ili kliknite ravan u pogledu;
   - ravna površina: kliknite površinu u pogledu. Cijela površina se ističe.
2. Odaberite {{ui:Skica}} na traci s alatima ili pritisnite {{key:S}}. (Kad je odabrana površina, možete odabrati i {{ui:Skica na ovoj površini}} u desnom panelu; kad je odabrana ravan, {{ui:Skica na njoj}}.)

Pogled se okrene okomito na ravan, alati za skicu se pojave na traci s alatima, a alat {{ui:Linija}} je spreman. Ako pritisnete {{ui:Skica}} bez odabira, prikažu se osnovne ravni, a statusna traka kaže: "Kliknite ravan ili ravnu površinu za skicu. Esc zaustavlja."

:::note
Zakrivljena površina ne može imati skicu: "Ta površina je zakrivljena. Odaberite ravnu površinu ili ravan za skicu."
:::

**Skica na površini prati tu površinu.** Ako je površina nastala ivicom skice ili krajem istiskivanja, nova skica se pomjera kad se element promijeni (dublji džep sa sobom nosi i skicu na svom dnu). Ako panel kaže da je površina "Fiksirana tamo gdje je odabrana", skica ostaje tamo gdje je površina sada.

## Alati za crtanje

Svaki alat ima dugme na traci s alatima i tipku. Ponovo odaberite isto dugme, pritisnite {{key:S}} ili pritisnite {{key:Esc}} da se vratite na Odaberi.

| Alat | Tipka | Kako crtati |
|---|---|---|
| {{ui:Linija}} | {{key:L}} | Kliknite početak, zatim svaku sljedeću tačku. Linije se nižu jedna na drugu. Lanac završite tipkom {{key:Esc}}, {{key:Enter}}, desnim klikom ili dvostrukim klikom. Klik na postojeću tačku također završava lanac |
| {{ui:Pravougaonik}} | {{key:R}} | Kliknite jedan ugao, zatim suprotni ugao. Dobijete četiri linije spojene u uglovima, dvije horizontalne i dvije vertikalne |
| {{ui:Krug}} | {{key:C}} | Kliknite centar, zatim tačku na krugu |
| {{ui:Luk}} | {{key:A}} | Kliknite centar, zatim početak, pa kraj. Luk ide u smjeru u kojem pomjerate pokazivač oko centra |
| {{ui:Tačka}} | {{key:P}} | Kliknite. Tačka sama za sebe označava centar rupe za {{ui:Rupa}} |
| {{ui:Osna linija}} | {{key:N}} | Kao linija, jedan segment po jedan. Crta se isprekidano; to je pomoćna geometrija, koristi se kao osa rotacije ili referenca |
| {{ui:Zaobljenje}} | {{key:F}} | Kliknite ugao u kojem se sastaju dvije linije, unesite poluprečnik i pritisnite {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Kliknite tačke kroz koje kriva prolazi; {{key:Enter}} završava, klik na prvu tačku je zatvara. Pogledajte [Splajnovi, odsijecanje, pomak i drugi alati za skicu](topic:sketch-tools) |
| {{ui:Odsijeci}} | {{key:T}} | Kliknite dio krive koji želite ukloniti, do najbližih presjeka |
| {{ui:Kota}} | {{key:D}} | Pogledajte [Potpuno definiši skicu](topic:relations-dimensions) |

Dok crtate, mali okvir pored pokazivača prikazuje dužinu, dimenziju, prečnik ili poluprečnik.

### Unesite dimenziju dok crtate

Nakon prvog klika na liniju, pravougaonik, krug ili luk, možete unijeti dimenziju umjesto da je kliknete. Unos broja otvara okvir pored pokazivača s tim brojem:

| Alat | Polja ({{key:Tab}} prelazi na sljedeće) | Šta se dešava na {{key:Enter}} |
|---|---|---|
| {{ui:Linija}}, {{ui:Osna linija}} | Dužina, zatim Ugao (°) od X ose skice | Linija se crta te dužine, prema pokazivaču ili pod unesenim uglom; lanac se nastavlja od njenog kraja |
| {{ui:Pravougaonik}} | Širina, zatim Visina | Pravougaonik se crta od prvog ugla prema pokazivaču; dimenzija koju niste unijeli dolazi iz pokazivača |
| {{ui:Krug}} | Prečnik | Krug se crta tog prečnika |
| {{ui:Luk}} | Poluprečnik nakon centra, zatim Ugao luka (°) nakon početka | Početak je udaljen toliko od centra; zatim luk ide toliko u krug, u smjeru u kojem ste pomjerali pokazivač |

Svaka unesena dimenzija postaje **upravljajuća kota** u istom koraku, pa skica izlazi s dimenzijama: {{key:Mod+Z}} uklanja oblik i njegove dimenzije zajedno. Klik umjesto pritiska na {{key:Enter}} zadržava ono što ste unijeli, a ostatak preuzima iz klika. {{key:Esc}} zatvara okvir i vraća na pokazivač.

Isključite to u {{ui:Postavke}} › {{ui:PartCraft}} › **Kota dok crtate** ako želite samo crtati klikovima. Pogledajte [Postavke PartCraft-a](topic:settings).

{{ui:Više}}, na kraju alata za skicu, sadrži {{ui:Spline s kontrolnim tačkama}}, {{ui:Produži}}, {{ui:Pomak}}, {{ui:Zrcaljenje}}, {{ui:Poligon}}, {{ui:Utor}}, uzorke skice i {{ui:Projektuj ivicu}}: pogledajte [Splajnovi, odsijecanje, pomak i drugi alati za skicu](topic:sketch-tools).

### Hvatanje

Hvatanje automatski dodaje relacije, pa skica ostaje spojena kad se pomjera:

- Na **krajnjoj tački ili početku koordinata** prikaže se mali kvadrat. Nova tačka se poklapa s njom.
- Na **liniji, krugu ili luku** prikaže se mali krst. Nova tačka se postavlja na tu krivu.
- Linija u rasponu od 3 stepena od horizontale ili vertikale hvata se za nju i dobija horizontalnu ili vertikalnu relaciju. Oznaka prikazuje "H" ili "V".

Da izbjegnete hvatanje, uvećajte prikaz tako da kliknete dalje od tačke ili krive.

## Zaobljenje ugla

1. Pritisnite {{key:F}} ili odaberite {{ui:Zaobljenje}}.
2. Kliknite tačku ugla u kojem se sastaju dvije linije.
3. Otvara se okvir s predloženim poluprečnikom. Unesite poluprečnik i pritisnite {{key:Enter}}.

Obje linije se odsijecaju i spajaju tangentnim lukom s kotom poluprečnika. Poruke koje možete vidjeti: "Zaobljenje zahtijeva ugao u kojem se tačno dvije linije sastaju." i "Taj poluprečnik je prevelik za ove linije."

:::tip
Zaobljenje u skici zaobljava ugao profila, pa istisnuti oblik dobija zaobljene vertikalne ivice. Da zaobljite ivice samog tijela (na primjer gornje ivice ploče), koristite element {{ui:Zaobljenje}} na dijelu: pogledajte [Zaobljenje, skošenje i šupljina](topic:fillet-chamfer-shell). U skici je {{ui:Zaobljenje}} na traci s alatima alat za skicu; na dijelu je to element.
:::

## Pomoćna geometrija

Pomoćne linije, krugovi i lukovi crtaju se isprekidano i sivo. Vode skicu, ali nisu dio profila koji se istiskuje ili rotira.

1. Odaberite linije, krugove ili lukove.
2. Pritisnite {{key:Q}} ili odaberite {{ui:Konstrukcija}}. Pritisnite ponovo da ih vratite.

## Odabir, povlačenje i brisanje

Pritisnite {{key:S}} (ili {{key:Esc}} dok nijedan alat nije aktivan) za Odaberi.

- Kliknite tačku, liniju, krug, luk, simbol relacije ili kotu da je odaberete. {{key:Shift}}+klik dodaje u odabir ili oduzima. Na Windows-u i Linux-u {{key:Ctrl}}+klik radi isto; na Mac-u, ⌘+klik.
- Povucite po praznom prostoru da nacrtate prozor: sve što je u potpunosti unutra biva odabrano.
- Povucite tačku ili liniju da je pomjerite. Rješavač održava svaku relaciju i kotu dok se pomjera, pa se pomjera samo slobodna geometrija. Povucite ivicu kruga da promijenite njegov poluprečnik.
- Povucite broj kote da pomjerite oznaku.
- Pritisnite {{key:Delete}} ili {{key:Backspace}}, ili odaberite {{ui:Izbriši}} u desnom panelu, da obrišete odabir. Brisanje geometrije briše i relacije na njoj.

## Uvećavanje i pomjeranje pogleda u skici

- Okrećite točkić da uvećate prikaz na mjestu pokazivača.
- Povucite srednjom ili desnom tipkom da pomjerate pogled.
- {{ui:Uklopi}} na traci s alatima ili u desnom panelu uklapa skicu u prikaz. U skici je tipka {{key:F}} alat Zaobljenje, a ne Uklopi.

## Zatvaranje skice

Odaberite {{ui:Izađi}} na traci s alatima ili {{ui:Izađi iz skice}} u desnom panelu, ili pritisnite {{key:Esc}} dok se skica ne zatvori. Svaki {{key:Esc}} prvo poništava ono što je u toku, zatim vraća na Odaberi, zatim briše odabir, a sljedeći zatvara skicu.

Skica ostaje odabrana, pa sljedeće {{ui:Istisni}} ili {{ui:Rotiraj}} koristi nju.

## Šta čini dobar profil

{{ui:Istisni}} i {{ui:Rotiraj}} koriste **svaku zatvorenu petlju** od punih (nepomoćnih) linija, krugova, lukova i splajnova skice. Petlje unutar petlji postaju rupe.

- Svaki kraj mora se sastajati tačno s jednim drugim krajem. "Profil je otvoren: kraj na (12.5, 40) nije spojen ni s čim." navodi mjesto.
- Na jednoj tački ne smiju se sastajati tri kraja: "Profil se grana na (0, 20): tu se sastaje više od dva kraja."
- Profil zanemaruje tačke i pomoćnu geometriju.

Sljedeće: [Potpuno definiši skicu relacijama i kotama](topic:relations-dimensions).

## Skica iz fotografije

**Elementi › Više › Skica iz fotografije…** (ili grupa Skica na traci stabla elemenata) prati sliku ravnog dijela na jednolikoj podlozi — njegov obris i rupe — ili crtež olovkom, u skicu linija, lukova i krugova. Navedite jednu dužinu (širinu, visinu ili najdužu stranu) da skica ima tačnu veličinu, provjerite šta je pronašla u pregledu i odaberite **Napravi skicu**; može je i istisnuti, u istom koraku poništavanja. Prati se na ovom računaru. Poluprečnici uglova vraćaju se unutar oko 5 %, detalji od jednog ili dva piksela se gube, a fotografija snimljena pod kosim uglom ili sa sjenama preko dijela se ne ispravlja: fotografišite dio ravno, pod ravnomjernim svjetlom.
