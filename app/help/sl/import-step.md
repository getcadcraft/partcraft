---
title: Odpiranje datoteke STEP in nadaljnje delo
summary: Model STEP dobavitelja ali drugega CAD-programa uvozite v PartCraft kot polno telo, kot nov del ali dodan k trenutnemu, nastavite, katera smer je navzgor, in dodajte skice ter značilke.
keywords: step, stp, uvoz, odpri step, ap203, ap214, ap242, model dobavitelja, preprosto telo, uvoženo telo, os navzgor, z navzgor, y navzgor, trikotniki, fasetirano, sestav step
from: ca0eca5f
---

PartCraft odpira datoteke STEP (`.step` ali `.stp`, AP203, AP214 in AP242) kot **telesa**, na katera lahko skicirate, režete, vrtate in jih kombinirate z lastnimi značilkami. Telo nima lastne zgodovine: dimenzij, s katerimi je bilo narejeno, ne morete spremeniti, lahko ga le dopolnite ali iz njega režete.

Ta različica vsak del gradi z mrežnim jedrom, zato je datoteka STEP **prebrana kot trikotniki**: ravne ploskve ostanejo ravne, ukrivljene ploskve (valji, stožci, krogle, tori, ploskve B-zlepkov) pa postanejo mnogo majhnih ravnih. Njihova prostornina je znotraj delčka odstotka točne. Ohranitev ukrivljenih ploskev natančno zahteva točno jedro, ki v tej različici ni.

## Odpiranje datoteke STEP

1. Izberite {{ui:Odpri}} ali pritisnite {{key:Mod+O}} in izberite datoteko `.step` ali `.stp`. Ali jo spustite na 3D-pogled.
2. PartCraft prebere datoteko in pokaže, kaj je našel, na primer: „Datoteka AP214: 1 telo, 10 ploskev, prebrana kot trikotniki.“ Spodaj so število trikotnikov, vse, kar je moral izpustiti ali združiti, in ali se rezultat zapre.
3. Preverite **Navzgor v datoteki**. Datoteka STEP pove svojo enoto (milimetri, palci, metri …); PartCraft jo pretvori v milimetre, zato **Enote v datoteki** kaže Milimetri, „datoteka tako pravi“. **Velikost tukaj** pokaže, kako velik bo.
4. Izberite {{ui:Odpri kot telo}} za prazen del ali {{ui:Dodaj temu delu}} / {{ui:Nov del}}, kadar del že ima značilke. Pri dodajanju se vpraša, kaj naj **Uporabi za** naredi: doda, izreže ali obdrži le prekrivanje.

V zgodovini se pojavi značilka **Imported1**, v vrstici stanja pa piše na primer: „plate.step je polno telo: 57995.937 mm³, 6 ravnih ploskev za skiciranje.“

## Sestav STEP

Sestav pride kot **eno telo** z vsemi deli tam, kamor jih datoteka postavi („3 deli, postavljeni v datoteki, pridejo tja, kjer stojijo“). Del, uporabljen dvakrat, pride dvakrat. Imena delov in drevo sestava se ne ohranijo.

## Nastavitev smeri navzgor

Večina CAD-programov uporablja Z navzgor; PartCraft uporablja Y navzgor. Privzeto PartCraft datoteko zasuče tako, da njen Z kaže navzgor. Če del pride ležeč na stran, izberite **Imported1** in nastavite **Navzgor v datoteki** na **Y navzgor**. **Enote v datoteki** in **Uporabi za** je mogoče tam spremeniti prav tako; vsaka sprememba je en korak za razveljavitev.

## Nadaljnje delo

- Kliknite ravno ploskev telesa in izberite {{ui:Skica na tej ploskvi}}. Ravne ploskve modela STEP ohranijo svoje mesto, ko se telo ponovno izgradi.
- Dodajte reze, luknje, izbokline, vzorce in zrcaljenja kot pri vsakem delu.
- Preverite njegovo velikost v polju **Del**: prostornina, površina, velikost.

Zaobljenja, posnetja in lupine potrebujejo točno jedro, kot pri vsakem delu v tej različici ([Mrežno jedro](topic:solid-kernels)).

## Kje je shranjeno

Trikotniki so shranjeni **znotraj** datoteke `.partcraft.json`, zato je datoteka dela samostojna: datoteke STEP ne potrebujete več.

## Sporočila

| Sporočilo | Pomen |
|---|---|
| „part.stp“ ni datoteka STEP (ne začne se z ISO-10303-21). | Datoteka ni navadno besedilo STEP. Od pošiljatelja zahtevajte datoteko STEP AP203, AP214 ali AP242 |
| „Datoteke STEP ni mogoče prebrati: njen podatkovni del manjka ali je poškodovan.“ | Datoteka je odrezana ali poškodovana. Kopirajte jo znova |
| „Datoteka STEP ne vsebuje telesa ali površinskega telesa: ni ničesar za uvoz.“ | Datoteka vsebuje le risbe, točke ali podatke. Zahtevajte telo |
| „Ta datoteka STEP je prevelika (nad 60 MB) za uvoz tukaj.“ in druge omejitve bralnika (vnosi, ploskve, trikotniki) | Model poenostavite pri viru ali pošljite dele posamično |
| „… poškodovane vrstice v datoteki so bile preskočene.“ | Nekaterih vrstic ni bilo mogoče prebrati; ostale so bile uvožene. Preverite telo |
| „… ploskev ni bilo mogoče spremeniti v trikotnike in so bile izpuščene.“ | Te ploskve puščajo luknje, ki jih PartCraft poskuša zapolniti; če se telo ne zapre, ni dodano |
| „… ploskev vrste, ki se ne bere (…), je bilo preskočenih.“ | Redka vrsta površine. Zahtevajte model z navadnimi ali B-zlepek površinami |
| „Ne zapre se …“ | Ploskve ne tvorijo zaprtega telesa (površinski model ali izpuščene ploskve). PartCraft prikaže odprtine in ničesar ne doda |

## Omejitve

- Ukrivljene ploskve so narisane in izmerjene kot ravne fasete, kot pri vsakem delu v tej različici. PartCraft ohrani ravne ploskve, valje, stožce, krogle in tori datoteke pri telesu, zato {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} jih zapiše nazaj kot prave površine, luknje kot luknje, skupaj z značilkami, ki jih dodate. Ploskve, ki jih datoteka podaja kot zlepke, vrtenja ali površine vrtenja, ostanejo v izvozu fasete. Del, shranjen pred 0.9.1, nima ohranjenih površin: ponovno odprite datoteko STEP, da jih dobite.
- {{ui:Izvoz}} › {{ui:DXF skice ali ravne ploskve}} z izbrano ravno ploskvijo zapiše okroglo luknjo datoteke kot pravi krog.
- Barve, imena teles, struktura sestava in PMI (tolerance v datoteki) se ne berejo.
- Poleg STEP PartCraft odpira mreže STL, OBJ in 3MF ([Odpiranje datoteke STL, OBJ ali 3MF](topic:open-meshes)) ter datoteke `.3dm` ([Odpiranje modela .3dm](topic:open-3dm-files)) kot telesa. IGES in izvorne datoteke drugih programov niso podprte.
- Del z uvoženim telesom STEP, ki ga je zgradila različica z točnim jedrom, ohrani besedilo STEP; ta različica to značilko preskoči (ni izdelano). Ponovno odprite datoteko STEP, da jo uvozite kot trikotnike.
