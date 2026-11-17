---
title: Crtanje prve skice
summary: Otvorite skicu na ravnini ili ravnoj plohi, crtajte linije, pravokutnike, kružnice, lukove, točke i osi, zaobljujte kut, odabirajte, povlačite i brišite.
keywords: skica, crtanje, linija, pravokutnik, kružnica, luk, točka, os, konstrukcija, zaobljenje, zaobljenje skice, zaokruži kut, hvatanje, odabir, prozor, povlačenje, profil
from: 28be7436
---

Svako tijelo počinje kao skica: ravan crtež na ravnini. Ovaj vodič obrađuje alate za crtanje. Učvršćivanje skice odnosima i kotama opisano je u [Potpuno definiranje skice](topic:relations-dimensions).

## Pokretanje skice

Skicu možete crtati na osnovnoj ravnini ili na bilo kojoj ravnoj plohi dijela.

1. Odredite gdje ćete skicirati:
   - osnovnu ravninu: kliknite **Prednja ravnina**, **Gornja ravnina** ili **Desna ravnina** u povijesti ili kliknite ravninu u prikazu;
   - ravnu plohu: kliknite plohu u prikazu. Cijela ploha se označi.
2. Odaberite {{ui:Skica}} na alatnoj traci ili pritisnite {{key:S}}. (Ako je odabrana ploha, možete odabrati i {{ui:Skiciraj na ovoj plohi}} na desnoj ploči; uz ravninu, {{ui:Skiciraj na njoj}}.)

Prikaz se okrene okomito na ravninu, alati za skicu pojave se na alatnoj traci i alat Linija je spreman. Ako pritisnete {{ui:Skica}} bez odabira, prikazuju se osnovne ravnine, a statusna traka kaže „Kliknite ravninu ili ravnu plohu za skiciranje. Esc zaustavlja.“

:::note
Zakrivljena ploha ne može nositi skicu: „Ta ploha je zakrivljena. Odaberite ravnu plohu ili ravninu za skiciranje.“
:::

**Skica na plohi prati tu plohu.** Ako je ploha nastala rubom skice ili krajem izvlačenja, nova skica se pomiče kad se značajka promijeni (dublji džep povlači skicu na svom dnu sa sobom). Ako ploča kaže da je ploha „Fiksirano na mjestu odabira“, skica ostaje gdje je ploha sada.

## Alati za crtanje

Svaki alat ima gumb na alatnoj traci i tipku. Ponovno odaberite isti gumb, pritisnite {{key:S}} ili pritisnite {{key:Esc}} da se vratite na Odabir.

| Alat | Tipka | Kako crtati |
|---|---|---|
| {{ui:Linija}} | {{key:L}} | Kliknite početak, zatim svaku sljedeću točku. Linije se nižu jedna za drugom. Lanac završite s {{key:Esc}}, {{key:Enter}}, desnim klikom ili dvostrukim klikom. Klik na postojeću točku također ga završava |
| {{ui:Pravokutnik}} | {{key:R}} | Kliknite jedan kut, zatim suprotni kut. Dobijete četiri linije spojene u kutovima, dvije vodoravne i dvije okomite |
| {{ui:Kružnica}} | {{key:C}} | Kliknite središte, zatim točku na kružnici |
| {{ui:Luk}} | {{key:A}} | Kliknite središte, zatim početak, zatim kraj. Luk ide u smjeru u kojem pomičete pokazivač oko središta |
| {{ui:Točka}} | {{key:P}} | Kliknite. Sama točka označava središte rupe za {{ui:Provrt}} |
| {{ui:Os}} | {{key:N}} | Kao linija, jedan segment po jedan. Crta se isprekidano; to je konstrukcijska geometrija, koristi se kao os rotacije ili referenca |
| {{ui:Zaobljenje}} | {{key:F}} | Kliknite kut u kojem se sastaju dvije linije, upišite radijus, pritisnite {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Kliknite točke kroz koje krivulja prolazi; {{key:Enter}} završava, klik na prvu točku je zatvara. Vidi [Splineovi, skraćivanje, odmak i ostali alati skice](topic:sketch-tools) |
| {{ui:Skrati}} | {{key:T}} | Kliknite dio krivulje za uklanjanje, do najbližih presjecišta |
| {{ui:Kota}} | {{key:D}} | Vidi [Potpuno definiranje skice](topic:relations-dimensions) |

Dok crtate, mali okvir uz pokazivač prikazuje duljinu, dimenzije, promjer ili radijus.

### Upišite veličinu dok crtate

Nakon prvog klika za liniju, pravokutnik, kružnicu ili luk, možete upisati veličinu umjesto klika. Upisivanje broja otvara okvir pored pokazivača s tim brojem:

| Alat | Okviri ({{key:Tab}} prelazi na sljedeći) | Što se događa na {{key:Enter}} |
|---|---|---|
| {{ui:Linija}}, {{ui:Os}} | Duljina, zatim Kut (°) od X osi skice | Linija se crta te duljine, prema pokazivaču ili pod upisanim kutom; lanac se nastavlja od njezina kraja |
| {{ui:Pravokutnik}} | Širina, zatim Visina | Pravokutnik se crta od prvog kuta prema pokazivaču; veličina koju niste upisali dolazi iz pokazivača |
| {{ui:Kružnica}} | Promjer | Kružnica se crta tim promjerom |
| {{ui:Luk}} | Radijus nakon središta, zatim Kut luka (°) nakon početka | Početak je udaljen od središta za taj radijus; zatim luk ide toliko daleko, u smjeru u kojem ste pomicali pokazivač |

Svaka veličina koju ste upisali postaje **pogonska kota** u istom koraku, pa skica dolazi dimenzionirana: {{key:Mod+Z}} uklanja oblik i njegove kote zajedno. Klik umjesto pritiska {{key:Enter}} zadržava ono što ste upisali, a ostalo uzima iz klika. {{key:Esc}} zatvara okvir i vraća na pokazivač.

Isključite ovo u {{ui:Postavke}} › {{ui:PartCraft}} › **Kota dok crtate** ako želite crtati samo klikovima. Vidi [Postavke programa PartCraft](topic:settings).

{{ui:Više}}, na kraju alata za skicu, sadrži spline s kontrolnim točkama, Produži, Odmakni, Zrcali, Poligon, Utor, uzorke skice i Projiciraj brid: vidi [Splineovi, skraćivanje, odmak i ostali alati skice](topic:sketch-tools).

### Hvatanje

Hvatanje dodaje odnose umjesto vas, pa skica ostaje spojena kad se pomakne:

- Na **krajnjoj točki ili ishodištu** prikazuje se mali kvadrat. Nova točka se podudara s njom.
- Na **liniji, kružnici ili luku** prikazuje se mali križić. Nova točka se stavlja na tu krivulju.
- Linija unutar 3 stupnja od vodoravne ili okomite hvata se na nju i dobiva vodoravno ili okomito ograničenje. Oznaka pokazuje „H“ ili „V“.

Da izbjegnete hvatanje, uvećajte prikaz da kliknete dalje od točke ili krivulje.

## Zaobljenje kuta

1. Pritisnite {{key:F}} ili odaberite {{ui:Zaobljenje}}.
2. Kliknite točku kuta u kojem se sastaju dvije linije.
3. Otvara se okvir s predloženim radijusom. Upišite radijus i pritisnite {{key:Enter}}.

Obje linije se skraćuju i spajaju tangentnim lukom s kotom radijusa. Poruke koje možete vidjeti: „Zaobljenje treba kut u kojem se sastaju točno dvije linije.“ i „Taj radijus je prevelik za ove linije.“

:::tip
Zaobljenje skice zaobljuje kut profila, pa izvlačenje dobiva zaobljene okomite bridove. Za zaobljivanje bridova samog tijela (npr. gornjih bridova ploče) koristite značajku {{ui:Zaobljenje}} na dijelu: vidi [Zaobljenje, skošenje i šupljina](topic:fillet-chamfer-shell). Na skici je Zaobljenje alat za skicu; na dijelu je to značajka.
:::

## Konstrukcijska geometrija

Konstrukcijske linije, kružnice i lukovi crtaju se isprekidano i sivo. Oni vode skicu, ali nisu dio profila koji se izvlači ili rotira.

1. Odaberite linije, kružnice ili lukove.
2. Pritisnite {{key:Q}} ili odaberite {{ui:Konstrukcija}}. Ponovno pritisnite za vraćanje.

## Odabir, povlačenje i brisanje

Pritisnite {{key:S}} (ili {{key:Esc}} dok nijedan alat nije aktivan) za Odabir.

- Kliknite točku, liniju, kružnicu, luk, simbol odnosa ili kotu za odabir. {{key:Shift}}+klik dodaje u odabir ili oduzima. Na Windowsu i Linuxu {{key:Ctrl}}+klik radi isto; na Macu ⌘+klik.
- Povucite po praznom prostoru da nacrtate prozor: sve što je potpuno unutar njega se odabire.
- Povucite točku ili liniju za pomicanje. Rješavač zadržava svaki odnos i kotu dok se pomiče, pa se pomiču samo slobodni elementi. Povucite rub kružnice za promjenu radijusa.
- Povucite broj kote za pomicanje oznake.
- Pritisnite {{key:Delete}} ili {{key:Backspace}}, ili odaberite {{ui:Izbriši}} na desnoj ploči, za brisanje odabira. Brisanje geometrije briše i odnose na njoj.

## Zumiranje i pomicanje u skici

- Pomaknite kotačić za zumiranje na pokazivaču.
- Povucite srednjom ili desnom tipkom za pomicanje prikaza (Pan).
- {{ui:Prilagodi}} na alatnoj traci ili na desnoj ploči prilagođava skicu prikazu. U skici je tipka {{key:F}} alat Zaobljenje, a ne Prilagodi.

## Zatvaranje skice

Odaberite {{ui:Izlaz}} na alatnoj traci ili {{ui:Izađi iz skice}} na desnoj ploči, ili pritisnite {{key:Esc}} dok se skica ne zatvori. Svaki {{key:Esc}} prvo poništava ono što je u tijeku, zatim vraća na Odabir, zatim briše odabir, a sljedeći zatvara skicu.

Skica ostaje odabrana, pa sljedeće {{ui:Izvuci}} ili {{ui:Rotiraj}} koristi nju.

## Što čini dobar profil

{{ui:Izvuci}} i {{ui:Rotiraj}} koriste **svaku zatvorenu petlju** tijela skice (nekonstrukcijske linije, kružnice, lukove i splineove). Petlje unutar petlji postaju rupe.

- Svaki kraj mora se spojiti točno s jednim drugim krajem. „Profil je otvoren: kraj na (12.5, 40) nije ničim spojen.“ navodi mjesto.
- Tri kraja se ne smiju sastati u jednoj točki: „Profil se grana u (0, 20): u toj točki se sastaju više od dva kraja.“
- Točke i konstrukcijska geometrija se pri profilu ignoriraju.

Sljedeće: [Potpuno definirajte skicu odnosima i kotama](topic:relations-dimensions).

## Skica iz fotografije

**Značajke › Više › Skica iz fotografije…** (ili grupa Skica na vrpci stabla značajki) prati sliku ravnog dijela na običnoj podlozi — njegov obris i rupe — ili crtež olovkom, u skicu linija, lukova i kružnica. Navedite jednu duljinu (širinu, visinu ili najdulju stranicu) da skica dobije ispravnu veličinu, provjerite što je pronašlo u pregledu i odaberite **Izradi skicu**; može je i izvući, u istom koraku poništavanja. Obrada se odvija na ovom računalu. Radijusi kutova vraćaju se unutar otprilike 5 %, detalji od piksela ili dva se gube, a fotografija snimljena pod kutom ili sa sjenama preko dijela se ne ispravlja: fotografirajte dio okomito, pod ravnomjernim svjetlom.
