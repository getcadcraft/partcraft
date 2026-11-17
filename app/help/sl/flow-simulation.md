---
title: Simulacija pretoka tekočine (študija pretoka)
summary: Pretok skozi kanale v delu ali okoli njega v škatli: vtoki, iztoki, zrak, voda ali lastna tekočina, nato hitrost in tlak na premični rezalni ravnini, tokovnice, površinski tlak, padec tlaka, masna bilanca, upor in dvig ter kaj lahko pove laminarna metoda in česa ne more.
keywords: pretok, CFD, tekočina, dinamika tekočin, simulacija pretoka, zrak, voda, viskoznost, gostota, Reynoldsovo število, laminarno, turbulentno, padec tlaka, izguba višine, vtok, iztok, pokrov, kapa, hitrost, pretok prostornine, litrov na minuto, statični tlak, tokovnice, rezalna ravnina, ravnina prereza, upor, dvig, koeficient upora, koeficient dviga, čelna površina, zunanji tok, notranji tok, cev, kanal, razdelilnik, šoba, lattice Boltzmann, ostanek, konvergenca
from: 7dc75f29
---

Študija **pretoka** določi, kako se tekočina giblje po kanalih v vašem delu (**notranji**) ali okoli njega (**zunanji**). Privzeto je **laminarna, nestisljiva, izotermna in Newtonska**: gladek tok tekočine, katere gostota in viskoznost ostajata stalni, brez toplote, turbulence in gravitacije. Na voljo je tudi **eksperimentalni** turbulentni model, ki je primeren le za kvalitativne vzorce (glejte spodaj). Deluje na imenovanih ploskvah, ki jih mrežno jedro daje delu (glejte [Mrežno jedro](topic:solid-kernels)).

V polju **Delovno okolje** izberite **Simulacija**, pritisnite **Nova študija**, če ta še ni ustvarjena, in nastavite **Vrsta** na **Pretok (CFD)**. **Model pretoka** je **Laminarno** (privzeto) ali **Turbulentno (Spalart–Allmaras, eksperimentalno)**: glejte razdelek **Turbulentni pretok (eksperimentalno)** spodaj. Nastavitve konstrukcije študije se ohranijo, zato se lahko vrnete nazaj. Nastavitve pretoka se shranijo v datoteko dela in vsako spremembo je mogoče razveljaviti.

## Izberite tekočino in celice

- **Tekočina**: zrak ali voda pri 20 °C ali **Po meri** z lastno gostoto (kg/m³) in dinamično viskoznostjo (Pa·s). Za zrak se uporabljata zakon idealnega plina in Sutherlandov zakon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); za vodo vrednosti IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Velikost celice**: prostor tekočine je zapolnjen z enakimi kockami. Pustite prazno za samodejno velikost; plošča prikaže mrežo. Vsaka odprtina in kanal naj bo za uporabna števila **širok vsaj 8 do 10 celic**; manjše celice so natančnejše in počasnejše (dvakrat drobnejša mreža pomeni približno 16-krat več dela).
- **Stene**: **Interpolirano** sledi ukrivljenim stenam med celicami (privzeto); **Odboj** obravnava stene kot stopnice kock.

## Pretok v notranjosti dela

Prostor tekočine mora biti zaprt. Na plošči dodajte **Vtok** in **Iztok**, nato kliknite njune ploskve v pogledu:

1. **Ravna ploskev okoli odprtine** — rob na koncu cevi, ploskev priključka. PartCraft tam zapre luknjo odprtine s pokrovom. Vsaka luknja na tej ploskvi pripada tej odprtini, zato, če se vtok in iztok odpirata na isti ploskvi, namesto tega modelirajte tanko kapo čez eno od njiju.
2. **Notranja ploskev kape** — kot v drugih orodjih CAD: modelirajte tanko ploščo (iztisnitev) čez odprtino in izberite njeno ploskev, ki se dotika tekočine.

Za vtok nastavite **hitrost** (m/s, enakomerno po odprtini, v smeri v del) ali **pretok prostornine** (L/min). Za iztok nastavite **statični tlak** (Pa, nadtlak). Če je odprtina odprta ali je stena tanjša od celice, se notranjost združi z zunanjostjo in reševanje se ustavi z opozorilom „Ni zaprtega prostora tekočine“.

## Pretok okoli dela

Nastavite **Pretok** na **Zunanji**, **Hitrost**, smer, v katero teče, ter kako daleč škatla sega proti toku, za tokom in na straneh (prazno: 1-, 3- in 1-kratnik največje velikosti dela). Ploskev škatle, skozi katero tok vstopa, je dotok, ploskev, skozi katero izstopa, je iztok pri 0 Pa, ploskve ob toku pa so drsne. Premajhna škatla stisne tok okoli dela in poveča upor. **Referenčna površina** je površina, ki jo uporabljajo koeficienti upora in dviga (prazno: čelna površina dela, gledana v smeri toka); dvig se meri vzdolž +Y, razen če izberete drugo smer.

## Reševanje in branje rezultatov

Pritisnite **Reši**. Reševanje teče v ozadju s številom korakov, ostankom in grafom ostanka; **Ustavi** ga konča. Ustavi se, ko je ostanek (koliko se hitrostno polje še spreminja na korak) pod ciljno vrednostjo in se padec tlaka ali upor ustalita. Če prej doseže mejo korakov, plošča v rdeči barvi prikaže **Ni konvergiralo**: števila so zadnje stanje, ne ustaljen odgovor.

- **Rezalna ravnina**: hitrost ali statični tlak na ravnini skozi model; izberite njeno normalo (X, Y ali Z) in povlecite drsnik, da jo premaknete. Nad njo se pomaknite, da preberete vrednosti.
- **Tokovnice**: iz vtokov (notranji) ali iz niza začetnih točk čez dotočni konec škatle v rezalni ravnini (zunanji).
- **Del**: polno, prosojno (da vidite ravnino znotraj), površinski tlak ali skrito.
- **Razpredelnica**: Reynoldsovo število, padec tlaka (povprečni statični tlak na vtokih minus na iztokih), pretok in povprečni tlak vsake odprtine, sila na del, upor in dvig s koeficienti in referenčno površino (zunanji), masna bilanca (dotok proti iztoku), mreža in reševalnik.

## Turbulentni pretok (eksperimentalno)

**Model pretoka › Turbulentno (Spalart–Allmaras, eksperimentalno)** reši časovno povprečen turbulentni tok (stacionarni RANS): model Spalart–Allmaras da v vsaki celici vrtinčno viskoznost, celice ob stenah pa namesto razreševanja tanke plasti tam uporabljajo Spaldingov zakon stene. Povsod je popolnoma turbulentno (brez laminarnih območij, brez prehoda).

**Ni opravil preverjanj natančnosti.** Plošča, rezultati in razpredelnica to povedo pri vsaki turbulentni študiji, opozorila pa ni mogoče zapreti. Uporabite ga za **kvalitativne vzorce toka** — kje se tok loči, kroži ali pospeši — **ne pa za projektantska števila**.

| Preverjanje | Referenca | Rezultat |
|---|---|---|
| Trenje v ravnem kanalu, prva celica pri y⁺ 49 / 98 | Deanova korelacija | +3.3 % / +4.7 % |
| Kanal z razrešeno steno (y⁺ ≈ 3), Re_τ 180: povprečna hitrost | Moser, Kim & Mansour DNS | −1 % |
| Ravni kanal, y⁺ 7–15 ali 190–380 | Deanova korelacija | +9 do +22 % |
| Trenje v cevi skozi kockaste celice, popolnoma razvito, 10–30 celic čez | Colebrook | za 30 do 34 % preveliko |
| Ponovna pritrditev za stopničasto ploskvijo, 6–14 celic na višino stopnice | Driver & Seegmiller, 6.26 višin stopnice | za 21 do 39 % prekratka |

Rezultati se z drobnejšimi celicami izboljšujejo le počasi. Po reševanju razpredelnica prikaže **y⁺ prve celice** (najmanjšo, povprečno in največjo vrednost na celicah ob stenah) in opozori zunaj preverjenega območja od 1 do 400; ciljajte na približno 30 do 300. **Čas izvajanja:** samodejne celice so velike tako, da trajajo največ nekaj minut na enem jedru prenosnika (plošča prikaže najslabši primer za mrežo in mejo korakov; majhna cev se ustali v manj kot 20 sekundah). Razpolovitev velikosti celic traja približno 16-krat dlje. Sile na del izhajajo iz bilance gibalne količine čez odprtine ali škatlo.

**Doslej narejeno:** celice ob stenah zdaj ujemajo lastno strižno napetost z zakonom stene, kar je napake pri cevi in stopnici zmanjšalo na zgornje vrednosti, ne da bi spremenilo rezultate za ravni kanal. To ni bilo dovolj za projektantska števila. Naslednji korak so drobnejše celice ob stenah.

## Kaj lahko in česa ne more povedati

- **Laminarni model** je zgolj laminaren. V ceveh tok postane turbulenten pri Reynoldsovem številu nad približno 2,000 do 4,000; za topimi telesi se odcepljanje vrtincev začne nad približno 50. Plošča pri teh vrednostih opozori. Laminarni rezultat za turbulentni tok podcenjuje padec tlaka in napačno oceni upor. Eksperimentalni turbulentni model (zgoraj) kvalitativno pokriva turbulentni tok; njegova števila še niso zanesljiva.
- **Metoda:** lattice Boltzmann (D3Q19, trčenje z dvema časoma relaksacije), izvedena do stacionarnega stanja. Znotraj je rahlo stisljiva; PartCraft ohranja spremembe gostote v nekaj odstotkih. Če je tok za celice prehiter, se ne zažene in pove, za koliko morajo biti celice manjše.
- **Preverjeno z:** Hagen–Poiseuillovim tokom v cevi skozi del (gradient tlaka v 1 % pri 20 celicah čez), votlino, gnano s pokrovom, avtorjev Ghia et al. (v 0.75 % hitrosti pokrova) in primerjalnim preizkusom valja Schäfer–Turek (upor v 1 % pri 10 celicah na premer).
- Ni modelirano: prenos toplote, turbulenca s projektantsko natančnostjo (turbulentni model je eksperimentalen), proste površine, kavitacija, gravitacija, premični deli, nenewtonske tekočine, hrapave stene. Ta izdaja je laboratorijska: pomembne rezultate preverite na drug način.
