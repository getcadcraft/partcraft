---
title: Lim: prirubnice i ravan uzorak
summary: Počnite deo od lima iz skice (ravna ploča ili savijen profil), jednom podesite debljinu, radijus savijanja i K-faktor, savijte prirubnice sa ivica sa rasterećenjima savijanja, i razvijte ga ravno kao DXF za sečenje.
keywords: ravan uzorak, razvijanje, razvijena dužina, dodatak za savijanje, linija savijanja, dxf za laser, lasersko sečenje, lim, osnovna prirubnica, ivična prirubnica, prirubnica, savijanje, radijus savijanja, k-faktor, k faktor, debljina, rasterećenje, rasterećenje savijanja, kanal, nosač, kućište, savijen lim
from: 144bd0f6
---

:::note
**Još nije izgrađeno u ovoj verziji.** Lim zahteva egzaktno geometrijsko jezgro, koje ova verzija PartCraft-a nema: sve delove gradi mrežnim jezgrom. [Šta još nije izgrađeno](topic:not-built-yet) kaže šta da radite umesto toga. Ostatak ove stranice opisuje kako to radi sa egzaktnim jezgrom.
:::

Delovi od lima počinju sa **Osnovnom prirubnicom**. Ona postavlja lim za ceo deo: njegovu **debljinu**, **unutrašnji radijus savijanja** i **K-faktor**. Svaka **Ivična prirubnica** posle nje savija se sa istim brojevima, pa deo ostaje jedan lim koji može da se razvije. Obe zahtevaju **egzaktno jezgro** (pogledajte [Mrežno jezgro](topic:solid-kernels)).

## Počnite sa osnovnom prirubnicom

1. Nacrtajte skicu. Koristite **zatvoren profil** za ravnu ploču (pravougaonik ili bilo koji zatvoren obris sa rupama). Koristite **jedan otvoren lanac linija** za savijen lim, kao L, U ili Z nacrtano kao pogled na ivicu lima.
2. Izaberite skicu u istoriji elemenata.
3. Otvorite {{ui:Više}} u grupi Elementi i izaberite {{ui:Osnovna prirubnica}}.

U panelu desno:

- **Debljina (mm)** je mera debljine lima.
- **Radijus savijanja (mm)** je unutrašnji radijus svakog savijanja. 0 daje oštar unutrašnji ugao; spoljašnost se i dalje savija sa radijusom jedne debljine.
- **K-faktor** kaže gde se neutralni sloj nalazi unutar lima, od 0 (unutrašnja strana) do 0.5 (sredina). On određuje koliko je lim dugačak kada se razvije ravno. 0.44 je podrazumevano; vaša radionica ili dobavljač materijala može dati svoj.
- **Dubina (mm)** je koliko savijeni profil ide izvan ravni skice. Ploča je ignoriše.
- **Debljina van savijanja**: otvoren profil je jedna strana lima. Podrazumevano, debljina ide na unutrašnju stranu prvog savijanja, pa su linije koje ste nacrtali spoljašnost kanala. Štiklirajte da stavite linije na unutrašnju stranu. Rezultat je isti sa bilo kog kraja da ste crtali.

Svaki ugao otvorenog lanca postaje savijanje. Linija prekratka da nosi svoja savijanja to kaže, sa dužinom koja joj je potrebna.

## Savijte ivičnu prirubnicu

1. Kliknite ravnu ivicu gornje ili donje strane lima (duge ivice, ne tanke).
2. Izaberite {{ui:Više}} › {{ui:Ivična prirubnica}}. Bez izabrane ivice, PartCraft čeka da kliknete jednu; {{key:Esc}} otkazuje.

Prirubnica se savija nagore sa strane te ivice oko unutrašnjeg radijusa lima, pa se pruža ravno. U panelu:

- **Ugao (°)** je koliko se savija, od 1 do 180. 90 je kvadratna prirubnica.
- **Dužina (mm)** je ravan krak posle savijanja.
- **Savij na drugu stranu** savija je sa druge strane (nadole umesto nagore).
- **Pomeraj na početku** i **Pomeraj na kraju** skraćuju prirubnicu sa svakog kraja ivice.
- **Rasterećenje savijanja**: kada je kraj pomeren, u lim se seče prorez pored njega da savijanje ne pocepa metal tamo. **Širina rasterećenja** postavlja širinu proreza; njegova dubina je radijus savijanja plus debljina. Izaberite **Nijedno** da ostavite ugao neseče.

Da kasnije promenite ivicu, pritisnite {{ui:Izaberi}} u panelu i kliknite drugu.

:::tip
Koristite parametre za debljinu i radijus (pogledajte [Parametri i jednačine](topic:parameters)) da promena mere ažurira svaku prirubnicu odjednom.
:::

## Razvijte ravno

Oba panela se završavaju sa **Ravan uzorak**. Pritisnite {{ui:Ravnaj}}:

- Pregled prikazuje lim razvijen, sa isprekidanom linijom središta svakog savijanja.
- **Veličina** i **Površina** su one ravnog pripremka.
- Svako savijanje je navedeno sa svojim smerom (**gore** ili **dole**, gledano sa strane skice osnovne prirubnice), uglom i unutrašnjim radijusom.

Svako savijanje uzima dužinu neutralnog sloja kroz sebe, **dodatak za savijanje**: ugao (u radijanima) × (unutrašnji radijus + K-faktor × debljina). Dakle, 90° savijanje lima od 2 mm sa radijusom 2 mm i K-faktorom 0.44 dodaje 4.52 mm ravnog lima.

Na ravnoj ploči, rupe, zasecanja i rasterećenja savijanja prikazuju se u razvijenom obliku tamo gde stvarno jesu, uključujući rupe kroz prirubnicu.

Da sečete mnogo komada, pritisnite {{ui:Poređaj na listovima…}} ispod ravnog uzorka: pogledajte [Poređajte ravne delove na listovima](topic:nest-flat-parts). Savijena osnovna prirubnica razvija se kao jedan pravougaonik: njena razvijena dužina × njena dubina, sa linijom savijanja po uglu.

{{ui:Sačuvaj DXF}} čuva ravni uzorak za laser, presu ili vodeni mlaz, u milimetrima:

- obris na sloju **OUTLINE**, kao linije, lukovi i krugovi;
- linije savijanja na sloju **BEND**, isprekidane;
- napomena za svako savijanje na sloju **BEND_NOTES**, kao „UP 90° R2“.

Promenite bilo šta i ravan uzorak nestaje; pritisnite {{ui:Ravnaj}} ponovo za novi.

:::note
Proverite K-faktor sa svojom radionicom pre sečenja: dužina ravnog dela zavisi od njega, a menja se sa materijalom, debljinom i alatom.
:::

## Poruke

- **Lim zahteva osnovnu prirubnicu pre nje** — ivična prirubnica je dodata pre bilo koje osnovne prirubnice. Premestite je ispod jedne, ili prvo dodajte osnovnu prirubnicu.
- **Ivična prirubnica zahteva ravnu ivicu** — prirubnice se savijaju samo duž linija; zakrivljene ivice zasad ne mogu da ih prime.
- **Ta ivica nije na strani debljine lima** — ivica pripada strani koja nije gornja ili donja strana lima (na primer zid rupe). Izaberite ivicu gornje ili donje strane.
- **Pomeraji ne ostavljaju ništa od ivice** — dva pomeraja zajedno daju celu ivicu ili više.
- **Ivične prirubnice na savijenoj osnovnoj prirubnici zasad ne mogu da se razviju ravno** — počnite od ravne ploče i savijte sve nagore ivičnim prirubnicama, koje se razvijaju.
- **Zasecanja i rupe napravljene posle savijene osnovne prirubnice još nisu prikazane u njenom ravnom obliku** — ravan oblik savijenog profila je samo njegov razvijeni pravougaonik.
