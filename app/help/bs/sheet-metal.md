---
title: Lim: prirubnice i ravni šablon
summary: Počnite dio od lima iz skice (ravne ploče ili savijenog profila), jednom postavite njegovu debljinu, radijus savijanja i K-faktor, savijte prirubnice s ivica s rasterećenjima savijanja i razvijte ga ravno kao DXF za rezanje.
keywords: ravni šablon, razvijanje, razvijena dužina, dužina savijanja, linija savijanja, dxf za laser, lasersko rezanje, lim, osnovna prirubnica, prirubnica na ivici, prirubnica, savijanje, radijus savijanja, k-faktor, k faktor, debljina, debljinomjer, rasterećenje, rasterećenje savijanja, kanal, nosač, kućište, savijen lim
from: 144bd0f6
---

:::note
**Još nije izgrađeno u ovoj verziji.** Lim zahtijeva tačno geometrijsko jezgro, koje ova verzija PartCrafta nema: sve dijelove gradi mrežnim jezgrom. [Šta još nije izgrađeno](topic:not-built-yet) govori šta raditi umjesto toga. Ostatak ove stranice opisuje kako radi s tačnim jezgrom.
:::

Dijelovi od lima počinju s **Osnovnom prirubnicom**. Ona postavlja lim za cijeli dio: njegovu **debljinu**, **unutrašnji radijus savijanja** i **K-faktor**. Svaka **prirubnica na ivici** poslije nje savija se s tim istim brojevima, pa dio ostaje jedan lim koji se može razviti. Oba zahtijevaju **tačno jezgro** (vidi [Mrežno jezgro](topic:solid-kernels)).

## Počnite s osnovnom prirubnicom

1. Nacrtajte skicu. Koristite **zatvoreni profil** za ravnu ploču (pravougaonik ili bilo koji zatvoreni obris s rupama). Koristite **jedan otvoreni lanac linija** za savijeni lim, kao L, U ili Z nacrtan kao pogled ivice lima.
2. Odaberite skicu u historiji elemenata.
3. Otvorite {{ui:Više}} u grupi Značajke i odaberite **Osnovna prirubnica**.

U panelu desno:

- **Debljina (mm)** je debljina lima.
- **Radijus savijanja (mm)** je unutrašnji radijus svakog savijanja. 0 daje oštar unutrašnji ugao; vanjska strana se i dalje savija s radijusom jedne debljine.
- **K-faktor** kaže gdje sloj neutralnosti leži unutar lima, od 0 (unutrašnja površina) do 0,5 (sredina). On određuje koliko je lim dug kada je ravan. 0,44 je podrazumijevano; vaša radionica ili dobavljač materijala može dati svoj.
- **Dubina (mm)** je koliko daleko savijeni profil ide izvan ravnine skice. Ploča je ignoriše.
- **Debljina izvan savijanja**: otvoreni profil je jedna površina lima. Podrazumijevano, debljina ide na unutrašnju stranu prvog savijanja, pa su linije koje ste nacrtali vanjska strana kanala. Označite da stavite linije na unutrašnju stranu. Rezultat je isti bez obzira s koje strane ste počeli crtati.

Svaki ugao otvorenog lanca postaje savijanje. Linija prekratka da zadrži svoja savijanja to kaže, uz dužinu koja joj je potrebna.

## Savijte prirubnicu na ivici

1. Kliknite ravnu ivicu gornje ili donje površine lima (duge ivice, ne tanke).
2. Odaberite {{ui:Više}} › {{ui:Prirubnica na ivici}}. Ako nijedna ivica nije odabrana, PartCraft čeka da kliknete jednu; Esc otkazuje.

Prirubnica se savija prema gore s površine te ivice oko unutrašnjeg radijusa lima, pa zatim ide ravno. U panelu:

- **Ugao (°)** je koliko se savija, od 1 do 180. 90 je kvadratna prirubnica.
- **Dužina (mm)** je ravni krak nakon savijanja.
- **Savij na drugu stranu** savija je s druge površine (dolje umjesto gore).
- **Pomak na početku** i **Pomak na kraju** skraćuju prirubnicu s krajeva ivice.
- **Rasterećenje savijanja**: kada je kraj pomaknut, u lim se sa strane reže prorez da savijanje ne pocijepa metal na tom mjestu. **Širina rasterećenja** postavlja širinu proreza; njegova dubina je radijus savijanja plus debljina. Odaberite **Nijedno** da ugao ostane neizrezan.

Da kasnije promijenite ivicu, pritisnite {{ui:Odaberi}} u panelu i kliknite drugu.

:::tip
Koristite parametre za debljinu i radijus (vidi [Parametri i jednadžbe](topic:parameters)) da promjena debljine odmah ažurira svaku prirubnicu.
:::

## Razvijte ravno

Oba panela završavaju s **Ravnim šablonom**. Pritisnite {{ui:Ravnaj}}:

- Pregled prikazuje lim razvijen, s isprekidanom linijom središta svakog savijanja.
- **Veličina** i **Površina** su one ravnog pripremka.
- Svako savijanje je navedeno sa svojim smjerom (**gore** ili **dolje**, gledano iz strane skice osnovne prirubnice), uglom i unutrašnjim radijusom.

Svako savijanje uzima dužinu neutralnog sloja lima kroz njega, **dodatak za savijanje**: ugao (u radijanima) × (unutrašnji radijus + K-faktor × debljina). Dakle, savijanje od 90° na limu debljine 2 mm s radijusom 2 mm i K-faktorom 0,44 dodaje 4,52 mm ravnog lima.

Na ravnoj ploči rupe, izrezi i rasterećenja savijanja prikazuju se u razvijenom obliku tamo gdje stvarno jesu, uključujući rupe kroz prirubnicu.

Da režete mnogo dijelova, pritisnite {{ui:Raspored na listovima…}} ispod ravnog šablona: vidi [Raspored ravnih dijelova na listovima](topic:nest-flat-parts). Savijena osnovna prirubnica raspoređuje se kao jedan pravougaonik: njena razvijena dužina × njena dubina, s linijom savijanja po uglu.

{{ui:Sačuvaj DXF}} čuva ravni šablon za lasersku, bušilicu ili vodenu mlaznicu, u milimetrima:

- obris na sloju **OUTLINE**, kao linije, lukovi i krugovi;
- linije savijanja na sloju **BEND**, isprekidane;
- napomena za svako savijanje na sloju **BEND_NOTES**, kao "UP 90° R2".

Promijenite bilo šta i ravni šablon nestaje; ponovo pritisnite {{ui:Ravnaj}} za novi.

:::note
Provjerite K-faktor s radionicom prije rezanja: dužina ravnog dijela zavisi od njega, a mijenja se s materijalom, debljinom i alatom.
:::

## Poruke

- **Lim treba osnovnu prirubnicu prije njega** — prirubnica na ivici dodana je prije ikakve osnovne prirubnice. Pomjerite je ispod jedne ili prvo dodajte osnovnu prirubnicu.
- **Prirubnica na ivici treba ravnu ivicu** — prirubnice se savijaju samo po linijama; zakrivljene ivice zasad ne mogu primiti jednu.
- **Ta ivica nije na površini debljine lima** — ivica pripada površini koja nije gornja ili donja površina lima (na primjer zid rupe). Odaberite ivicu gornje ili donje površine.
- **Pomaci ne ostavljaju ništa od ivice** — dva pomaka zajedno čine cijelu ivicu ili više.
- **Prirubnice na savijenoj osnovnoj prirubnici zasad se ne mogu razviti ravno** — počnite s ravnom pločom i savijte sve prema gore prirubnicama na ivici, koje se razvijaju.
- **Izrezi i rupe napravljeni poslije savijene osnovne prirubnice zasad se ne prikazuju u njenom ravnom obliku** — ravni oblik savijenog profila je samo njegov razvijeni pravougaonik.
