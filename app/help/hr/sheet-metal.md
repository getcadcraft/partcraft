---
title: Lim: prirubnice i ravni obrazac
summary: Započnite dio od lima iz skice (ravna ploča ili savijeni profil), jednom postavite debljinu, radijus savijanja i K-faktor, savijte prirubnice s rubova uz rasterećenja savoja i razvijte ga ravno kao DXF za rezanje.
keywords: ravni obrazac, razvijanje, razvijena duljina, dodatak za savijanje, linija savijanja, DXF za laser, lasersko rezanje, lim, osnovna prirubnica, rubna prirubnica, prirubnica, savijanje, radijus savijanja, K-faktor, debljina, mjerilo, rasterećenje savoja, kanal, nosač, kućište, savijeni lim
from: 144bd0f6
---

:::note
**Još nije izrađeno u ovoj verziji.** Lim treba točnu geometrijsku jezgru, a ova verzija PartCrafta je nema: sve dijelove gradi mrežnom jezgrom. [Što još nije izrađeno](topic:not-built-yet) govori što učiniti umjesto toga. Ostatak ove stranice opisuje kako to radi s točnom jezgrom.
:::

Dijelovi od lima počinju **osnovnom prirubnicom**. Ona postavlja lim za cijeli dio: njegovu **debljinu**, **unutarnji radijus savijanja** i **K-faktor**. Svaka **rubna prirubnica** nakon nje savija se s tim istim brojevima, pa dio ostaje jedan lim koji se može razviti. Obje trebaju **točnu jezgru** (pogledajte [Mrežna jezgra](topic:solid-kernels)).

## Počnite s osnovnom prirubnicom

1. Nacrtajte skicu. Upotrijebite **zatvoreni profil** za ravnu ploču (pravokutnik ili bilo koji zatvoreni obris s rupama). Upotrijebite **jedan otvoreni niz linija** za savijeni lim, kao što su L, U ili Z nacrtani kao pogled lima sa strane.
2. Odaberite skicu u povijesti značajki.
3. Otvorite {{ui:Više}} u grupi Značajke i odaberite {{ui:Osnovna prirubnica}}.

U ploči s desne strane:

- **Debljina (mm)** je debljina lima.
- **Radijus savijanja (mm)** je unutarnji radijus svakog savoja. 0 daje oštar unutarnji kut; vanjski dio se i dalje savija s radijusom jedne debljine.
- **K-faktor** pokazuje gdje se neutralni sloj nalazi unutar lima, od 0 (unutarnja ploha) do 0.5 (sredina). Određuje koliko je lim dugačak kad je razvijen ravno. 0.44 je zadano; vaša radionica ili dobavljač materijala može vam dati svoj.
- **Dubina (mm)** je koliko daleko savijeni profil izlazi iz ravnine skice. Ploča je zanemaruje.
- **Debljina izvan savoja**: otvoreni profil je jedna ploha lima. Prema zadanom debljina ide na unutarnju stranu prvog savoja, pa su linije koje ste nacrtali vanjska strana kanala. Označite da linije stavite na unutarnju stranu. Rezultat je isti s koje god strane ste crtali.

Svaki kut otvorenog niza postaje savoj. Linija prekratka za svoje savoje to kaže, uz duljinu koju treba.

## Savijte rubnu prirubnicu

1. Kliknite ravan brid gornje ili donje plohe lima (duge bridove, a ne tanke).
2. Odaberite {{ui:Više}} › {{ui:Rubna prirubnica}}. Ako nijedan brid nije odabran, PartCraft čeka da kliknete jedan; Esc odustaje.

Prirubnica se savija prema gore s plohe tog brida oko unutarnjeg radijusa lima, a zatim ide ravno. U ploči:

- **Kut (°)** je koliko se savija, od 1 do 180. 90 je četvrtasta prirubnica.
- **Duljina (mm)** je ravni krak nakon savoja.
- **Savij na drugu stranu** savija je s druge plohe (prema dolje umjesto prema gore).
- **Pomak na početku** i **Pomak na kraju** skraćuju prirubnicu s oba kraja brida.
- **Rasterećenje savoja**: kada je kraj pomaknut, u lim se uz njega reže utor da savijanje ne pocijepa metal na tom mjestu. **Širina rasterećenja** određuje širinu utora; njegova dubina je radijus savijanja plus debljina. Odaberite **Nema** da kut ostane neizrezan.

Da kasnije promijenite brid, pritisnite {{ui:Odaberi}} u ploči i kliknite drugi.

:::tip
Upotrijebite parametre za debljinu i radijus (pogledajte [Parametri i jednadžbe](topic:parameters)) da promjena debljine odmah ažurira sve prirubnice.
:::

## Razvijte ravno

Obje ploče završavaju s **Ravni obrazac**. Pritisnite {{ui:Razvij}}:

- Pregled prikazuje razvijeni lim, s isprekidanom središnjom linijom svakog savoja.
- **Veličina** i **Površina** odnose se na ravni izradak.
- Svaki savoj je naveden sa smjerom (**gore** ili **dolje**, gledano sa strane skice osnovne prirubnice), kutom i unutarnjim radijusom.

Svaki savoj uzima duljinu neutralnog sloja lima kroz sebe, **dodatak za savijanje**: kut (u radijanima) × (unutarnji radijus + K-faktor × debljina). Tako 90° savoj lima od 2 mm s radijusom 2 mm i K-faktorom 0.44 dodaje 4.52 mm ravnog lima.

Na ravnoj ploči rupe, rezovi i rasterećenja savoja prikazuju se u razvijenom obliku tamo gdje stvarno jesu, uključujući rupe kroz prirubnicu.

Za rezanje više dijelova pritisnite {{ui:Slaži na limove…}} ispod ravnog obrasca: pogledajte [Slaganje ravnih dijelova na limove](topic:nest-flat-parts). Savijena osnovna prirubnica raspoređuje se kao jedan pravokutnik: njezina razvijena duljina × njezina dubina, s linijom savijanja za svaki kut.

{{ui:Spremi DXF}} sprema ravni obrazac za laser, probijač ili vodeni mlaz, u milimetrima:

- obris na sloju **OUTLINE**, kao linije, lukovi i kružnice;
- linije savijanja na sloju **BEND**, isprekidane;
- napomena za svaki savoj na sloju **BEND_NOTES**, na primjer „UP 90° R2”.

Promijenite bilo što i ravni obrazac nestaje; ponovno pritisnite {{ui:Razvij}} za novi.

:::note
Prije rezanja provjerite K-faktor s radionicom: duljina ravnog obrasca o njemu ovisi, a mijenja se s materijalom, debljinom i alatom.
:::

## Poruke

- **Lim treba osnovnu prirubnicu prije nje** — rubna prirubnica dodana je prije ijedne osnovne prirubnice. Premjestite je ispod jedne ili prvo dodajte osnovnu prirubnicu.
- **Rubna prirubnica treba ravan brid** — prirubnice se savijaju samo duž linija; zakrivljeni bridovi još ne mogu imati prirubnicu.
- **Taj brid nije na plohi debljine lima** — brid pripada plohi koja nije gornja ili donja ploha lima (na primjer stijenka rupe). Odaberite brid gornje ili donje plohe.
- **Pomaci ne ostavljaju ništa od brida** — dva pomaka zajedno čine cijeli brid ili više.
- **Rubne prirubnice na savijenoj osnovnoj prirubnici još se ne mogu razviti ravno** — počnite od ravne ploče i sve savijte rubnim prirubnicama, koje se razvijaju.
- **Rezovi i rupe napravljeni nakon savijene osnovne prirubnice još se ne prikazuju u njezinom ravnom obliku** — ravni obrazac savijenog profila je samo njegov razvijeni pravokutnik.
