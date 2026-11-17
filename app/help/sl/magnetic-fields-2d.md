---
title: Magnetna polja v 2D (vadnica)
summary: Izračunajte magnetno polje elektromagneta ali trajnega magneta s knjižnico za analizo: zaženite primere, preberite gostoto magnetnega pretoka, polje v reži, induktivnost in silo privlačenja, spremenite zasnovo ter zgradite svoj model tuljav, magnetov in železa.
keywords: magnetno, magnetostatika, magnetno polje, gostota magnetnega pretoka, tesla, elektromagnet, solenoid, tuljava, amperovoji, železno jedro, zračna reža, permeabilnost, induktivnost, magnetna sila, reluktanca, magnetni krog, vektorski potencial, elektromagnetika, končni elementi, fem, motor, aktuator, transformator, magnetostatic2d, trajni magnet, neodim, ndfeb, ferit, remanenca, delovna točka, povratna črta, uhajanje, držalni magnet
from: 215f6601
---

PartCraftova knjižnica za analizo lahko v 2D izračuna magnetno polje tuljav in železa: prerez nečesa dolgega in enakega po dolžini, kot so elektromagnet, jedro transformatorja, zbiralka ali prerez motorja. Ta vadnica zažene primer elektromagneta iz knjižnice, prebere, kaj pove, ga spremeni, pokaže, kako modelirate lastno obliko, nato pa doda trajni magnet.

Uporablja delovno okolje Skripta in [knjižnico za analizo](topic:craftscript-library). Za sledenje vadnici ne potrebujete znanja jezika CraftScript; primer pove, kaj počne vsaka vrstica.

## Kaj je modelirano

C-oblikovano železno jedro, 100 × 80 mm zunaj in 20 mm debelo, z zračno režo 2 mm v desni nogi. Tuljava s 100 ovoji, ki nosi 10 A (1000 amperovojev), je navita okoli leve noge. Vse je dolgo v smeri iz zaslona, zato so odgovori **na meter globine**: za pravi magnet pomnožite z dejansko globino.

Knjižnični `magnetostatic2d` reši vektorski magnetni potencial na mreži kvadratov 1 mm v škatli zraka okoli magneta, nato pa iz njega izračuna gostoto magnetnega pretoka **B** (v teslah).

## Zaženite primer

1. V polju **Delovno okolje** na levi strani orodne vrstice izberite **Skripta**.
2. Odprite zavihek **Knjižnica** podokna skripte, nato **Primeri** › **Elektromagnet: polje, reža, induktivnost**.
3. Kliknite {{ui:Odpri (samo za branje)}}, nato pritisnite {{key:F5}}.

Čez sekundo ali dve platno prikaže gostoto magnetnega pretoka, konzola pa izpiše:

```
B v reži 0.5427 T; magnetni krog 0.5516 T (-1.6 %: robni pojav in uhajanje)
induktivnost 0.1539 H na meter globine; krog daje 0.1103 H/m, ker ne upošteva toka, ki uhaja mimo reže
shranjena energija 7.694 J/m; |B| doseže vrh 1.97 T v notranjih kotih okna (prava jeklena pločevina bi se tam nasitila)
sila privlačenja čez režo približno 2343 N na meter globine (117.2 N za globino 50 mm)
```

Graf pod platnom je navpična gostota magnetnega pretoka B_y vzdolž srednje črte jedra, od leve proti desni: približno −0.55 T v levi nogi (tok teče navzdol po njej), skoraj nič v oknu in +0.55 T v desni nogi ter čez režo (tok se vrne navzgor). Isti tok prehaja skozi železo in režo, zato obe nogi in reža kažejo skoraj enako vrednost.

## Preberite rezultate

- **Polje v reži** je 0.543 T. Ročni izračun obravnava jedro kot en magnetni krog, B = μ0 N I / (g + l / μr), kjer je g reža, l dolžina poti skozi železo in μr relativna permeabilnost železa; dá 0.552 T. Polje je nekoliko nižje od ročnega izračuna, ker se tok izboči okoli reže (robni pojav) in nekaj toka gre po kratki poti čez okno (uhajanje). Pri manjši reži ali finejši mreži se rezultata bolj ujemata.
- **Induktivnost** tuljave s 100 ovoji je 0.154 H na meter globine, izračunana iz energije, shranjene v polju. Krogova formula da manj (0.110 H/m), ker šteje le tok skozi režo, ne pa tudi toka, ki uhaja mimo nje.
- **Sila privlačenja**, ki zapre režo, je B² w / (2 μ0) za širino w ploskve reže: približno 2300 N na meter ali 117 N za magnet globine 50 mm.
- **Vrh** 1.97 T je v notranjih kotih okna, kjer se tok ostro obrne. Model obravnava železo kot linearno; pravo elektro jeklo se nasiči pri približno 1.5 do 2 T, zato vrednosti nad tem obravnavajte kot opozorilo, ne kot odgovor.

:::note
Knjižnični testi zaženejo ta primer in ob vsaki spremembi PartCraft preverijo polje v reži proti formuli magnetnega kroga. Metoda, njene reference in druga preverjanja (dolg solenoid, solenoid z železnim jedrom) so v glavi `magnetostatic2d`: kliknite ga v knjižnici.
:::

## Spremenite zasnovo

1. Kliknite {{ui:Naredi kopijo}} nad skripto samo za branje. Kopija se shrani z vašim delom.
2. Spremenite vrednost blizu vrha in znova pritisnite {{key:F5}}. Poskusite:
   - `g = 0.001;` — polovica reže: polje v reži skoraj podvoji, enako sila (gre s B²).
   - `mur = 200;` — slabše jedro: več amperovojev se porabi v železu.
   - `N = 200;` — dvakrat toliko ovojev: dvakrat močnejše polje, štirikrat večja induktivnost.
   - `h = 0.0005;` — finejša mreža: bližji odgovori, približno štirikrat več časa.

Vsak zagon nadomesti platno. Spremenljivke, ki jih ustvari skripta (kot `Bgap`, `L`, `F`), ostanejo v seznamu Spremenljivke za vaše račune.

## Modelirajte svojo obliko

Primer zgradi vse iz treh seznamov, po ena vrednost na mrežni kvadrat, ki jih lahko naredite za katero koli obliko, narisano z ravnimi črtami po mreži:

- **Kje je železo:** `iron` je true za kvadrate znotraj jedra. Primer ga zgradi iz pravokotnikov: `frame & ~window & ~gap` pomeni „v okvirju, ne v oknu, ne v reži“.
- **Permeabilnost:** `1 + (mur - 1) * iron` je 1 v zraku in `mur` v železu. Več materialov dobi svoje vrednosti na enak način.
- **Tok:** `J` je gostota toka v amperih na kvadratni meter, pozitivna iz zaslona, negativna v zaslon. Tuljava ima dve strani z nasprotnima predznakoma; primer izračuna `J0`, da ena stran nosi N I.

Nato `r = magnetostatic2d(m, permeability, J)` reši model. `r.B` je gostota magnetnega pretoka v vsakem kvadratu (dva stolpca, x in y), `r.Bmag` njena velikost, `r.energy` shranjena energija na meter. `plot(x, y)` nariše črto.

Knjižnica dela v metrih, pogled pa v milimetrih, zato bi polje, prikazano brez spremembe, bilo narisano tisočkrat premajhno. Primer ga prikaže na kopiji mreže v milimetrih (`mm = quadGrid(…)`, nato `show(field(mm, …))`): kopirajte ti dve vrstici.

Privzeto rob škatle polje zadrži znotraj: skozi njega ne uhaja tok. Naredite škatlo vsaj dvakrat ali trikrat večjo od magneta, da robni pogoj ne stisne polja. Za simetričen magnet lahko modelirate polovico: glava `magnetostatic2d` pove, kateri robni pogoj uporabiti na osi simetrije.

## Trajni magneti

Drugi primer, **Primeri** › **Trajni magnet v železnem jedru: delovna točka, uhajanje, sila privlačenja**, je isto jedro, le da je tuljava odstranjena in 10 mm rezina leve noge zamenjana z magnetom, namagnetenim navzgor. Zaženite ga s {{key:F5}}. Izpiše:

```
magnet deluje pri B = 1.036 T, H = -124 kA/m (na svoji povratni črti B = Br + μ0 μr H)
B v reži 0.6778 T; magnetni krog brez uhajanja 0.9692 T (-30.1 %)
faktor uhajanja 1.53: od toka, ki zapusti magnet, jih 65 % prečka režo med poloma
sila privlačenja čez režo približno 3656 N na meter globine (182.8 N za globino 50 mm)
```

- **Delovna točka.** Magnet je opisan z **remanenco** Br (poljem, ki ga ohrani, ko je kratko sklenjen z železom: približno 1.2 T za sintrani NdFeB magnet, 0.4 T za ferit) in svojo povratno permeabilnostjo (približno 1.05 in 1.1). Odprtje reže ga potisne po njegovi povratni črti: tu do 1.04 T, z H, usmerjenim proti B znotraj njega.
- **Uhajanje.** Ročni izračun brez uhajanja da 0.97 T v reži; model da 0.68 T. Magnet požene svoj tok z močnim potiskom čez kratko dolžino, zato veliko toka steče kar nazaj čez okno namesto skozi režo. Faktor uhajanja pove, koliko: tu 1.53. Za zaprt zadrževalnik nastavite `g = 0;`: magnet nato deluje znotraj pol odstotka ročnega izračuna.
- **Magneti v lastnem modelu.** Dajte `magnetostatic2d` magnete kot `struct('Br', Br)`, kjer `Br` ima po eno vrstico na mrežni kvadrat z remanenco v smeri x in y v teslah (nič zunaj magnetov), in magnetnim kvadratom dajte njihovo povratno permeabilnost v seznamu permeabilnosti:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T navzgor v kvadratih, kjer je mag true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Za magnet, namagnetén pod kotom, dajte `Br·cos(kot)` in `Br·sin(kot)` v dva stolpca; za obroč, namagnetén navzven, izračunajte smer vsakega kvadrata iz njegovega položaja. `r.H` da jakost polja H v vsakem kvadratu.

Model drži magnet na njegovi ravni povratni črti, ne glede na to, kako močno ga poganjate. Pravi magnet, gnan čez svoje koleno (z veliko režo, močno tuljavo ali toploto), za vedno izgubi del moči; delovno točko preverite z krivuljo proizvajalca za razred in temperaturo.

Knjižnični testi preverijo magnete z dvema ročnima rezultatoma: okrogel magnet na prostem zraku (znotraj B = Br / (1 + μr)) in magnet, zaprt z železnim zadrževalnikom (magnetni krog), oba znotraj 1 %.

## Česa še ne zmore

- **Nasičenje.** Železo je linearno: podvojite tok, podvojite polje, brez meje.
- **Razmagnetenje.** Magneti ostanejo na svoji ravni povratni črti (glejte zgoraj).
- **Vrtinčni tokovi** in **izgube** (izguba v železu, izguba v bakru).
- **Premični deli in navor.** Ni vrtenja rotorja v statorju, ni navora glede na kot.
- **Okrogle oblike.** Mreža je iz enakih kvadratov, zato so ukrivljeni obrisi stopničasti.
- **3D.** Vse je prerez nečesa dolgega.

Načrtovanje motorjev (vrteči se rotor, navor in izgube v 2D) se obravnava za kasnejšo različico. Glejte [Še ni izdelano](topic:not-built-yet).
