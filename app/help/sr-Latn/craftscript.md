---
title: Pisanje i pokretanje skripti (radni prostor Skripte)
summary: Radni prostor Skripte korak po korak: napišite CraftScript ili Lua skriptu, pokrenite je sa F5, čitajte konzolu, čuvajte rezultate u promenljivama za sledeću skriptu, prikazujte mreže, polja i grafike, zaustavite pokretanje i čuvajte skripte uz deo.
keywords: skripta, pisanje skripti, skriptovanje tokom modelovanja, izdvoji, drugi ekran, drugi monitor, param, params, parametri u skriptama, CraftScript, Lua, kod, program, uređivač, konzola, REPL, komandna linija, pokreni, F5, pokreni izbor, zaustavi, promenljive, radni prostor, grafik, polje, mreža, legenda, pomoćni prikaz, analiza, automatizacija, matrica, numerički
from: d0003e89
---

**Pregled.** Skriptovanje je novo u PartCraft-u 0.3 i u fazi je pregleda: jezik, biblioteka i način čuvanja skripti mogu još da se menjaju, pa skripte napisane sada mogu kasnije da zahtevaju male izmene. Javite nam šta ne radi.

Radni prostor Skripte pokreće vaše sopstvene proračune pored dela: male zbire, cele analize ili skripte iz [biblioteke analiza](topic:craftscript-library). Skripte se pišu u **CraftScript-u** (matrični jezik sličan MATLAB-u, vidi [CraftScript jezik](topic:craftscript-language)) ili u jeziku **Lua** (vidi [Skripte u jeziku Lua](topic:craftscript-lua)) ili u jeziku **Python** (vidi [Skripte u jeziku Python](topic:craftscript-python)).

Izaberite **Skripta** u polju **Radni prostor** na levoj strani trake sa alatkama. Deo se ne menja. Desni panel postaje panel skripti (širi nego obično; povucite njegovu ivicu da promenite širinu, ili ga prebacite na drugi ekran preko njegovog menija {{ui:⋯}}, vidi [Raspored panela](common:arrange-panels)).

## Skriptujte dok modelujete

Ne morate da napustite radni prostor Dizajn da biste pisali skriptu. U Dizajnu kartica {{ui:Skripta}} u desnom panelu sadrži isti uređivač, konzolu, promenljive i biblioteku, sa istim skriptama. Stablo elemenata i prikaz i dalje rade: kliknite element da ga izaberete, dvaput kliknite skicu da je izmenite, okrenite prikaz, pa se vratite na karticu {{ui:Skripta}} i pritisnite {{key:F5}}.

Ono što skripta **prikazuje** (mreže, polja, grafike, tabele) ne crta se preko vašeg modela u Dizajnu: konzola to kaže, a radni prostor Skripte ima sve kad pređete na njega.

{{ui:Izdvoji}}, pored {{ui:Pokreni}}, premešta ceo panel u sopstveni prozor, na primer na drugi ekran, pa uređivač i pun prikaz stoje jedan pored drugog. {{ui:Vrati}} ga ponovo spaja. Vidi [Raspored panela](common:arrange-panels).

## Pokrenite prvu skriptu

1. Upišite u uređivač, na primer:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pritisnite {{key:F5}} (ili {{ui:Pokreni}}). Konzola ispod uređivača pokazuje šta je skripta ispisala, i "Done in … s". Grafik se pojavljuje u **pomoćnim prikazima** duž dna 3D prikaza.
3. Red bez tačka-zareza ispisuje svoju vrednost, kao u MATLAB-u: `a = 3` ispisuje `a = 3`; `a = 3;` ne ispisuje ništa.
4. Da pokrenete samo deo skripte, izaberite redove i pritisnite {{key:Mod+Enter}} ({{ui:Izbor}}). Bez izbora pokreće se red na kojem je kursor.
5. Red na dnu konzole (posle `>>`) izvršava jednu naredbu kad pritisnete {{key:Enter}}. {{key:Up}} i {{key:Down}} vraćaju ranije redove.

## Pronalaženje, sažimanje i dopunjavanje

- **Traženje i zamena.** Pritisnite {{key:Mod+F}} (ili {{key:Mod+H}} da zamenite i). Iznad koda otvara se traka: upišite šta tražite; poklapanja se osvetle, a brojač pokazuje gde ste. Dugmad pored polja podešavaju razlikovanje velikih i malih slova (**Aa**), traženje samo celih reči (**W**) i korišćenje regularnog izraza (**.\***; u zameni, `$1` vraća ono što je pronašla prva grupa). {{ui:Zameni}} menja trenutno poklapanje, a {{ui:Sve}} menja sva poklapanja kao jedan korak {{key:Mod+Z}}.
- **Sažimanje.** Kliknite ▾ pored broja reda ili pritisnite {{key:Mod+Shift+[}} kad je kursor na redu `function`, `if`, `for`, `while`, `switch` ili `try` (Lua: `function`, `do`, `if`, `repeat`), da sklonite njegove unutrašnje redove; red kaže koliko ih ima. ▸ ili {{key:Mod+Shift+]}} ih ponovo otvara. Sažimanje samo skriva redove: pokretanje, čuvanje, kopiranje i brojevi redova i dalje broje svaki red, a kucanje u sažetom redu prvo ga otvara.
- **Dopunjavanje.** Upišite dva slova imena ili pritisnite {{key:Mod+Space}}: lista pokazuje promenljive koje imate, funkcije jezika (sa argumentima), ključne reči i imena koja su već u skripti. Birajte strelicama i pritisnite {{key:Enter}} ili {{key:Tab}}.

## Kad nešto krene naopako

- Greška kaže šta nije u redu i u kom je redu: red je obeležen crveno u uređivaču, a **Red n** u konzoli vas vodi do njega.
- Petlja koja se nikad ne završava: pritisnite {{ui:Zaustavi}} (traka ili panel). Skripta se odmah zaustavlja; promenljive zadržavaju vrednosti koje su imale pre tog pokretanja.
- Svako pokretanje ima i budžet koraka (2 milijarde koraka podrazumevano; promenite ga pod **Opcije pokretanja** u panelu). Pokretanje koje ga pređe staje uz poruku.

## Promenljive prelaze iz skripte u skriptu

Svaka promenljiva najvišeg nivoa koju skripta napravi pojavljuje se na kartici **Promenljive** (ime, tip, veličina, najmanja i najveća vrednost) i ostaje tu za sledeću skriptu, u bilo kom jeziku. Tako jedna skripta pravi mrežu, sledeća rešava, a treća crta.

- Kliknite promenljivu da je prikažete: mreže, polja i modeli u 3D prikazu, nizovi kao tabela (plus linijski grafik za vektor ili mapu boja za matricu) u pomoćnim prikazima.
- {{ui:Sačuvaj kao JSON}}, {{ui:Sačuvaj kao CSV}} (tabela brojeva) i {{ui:Sačuvaj kao HDF5}} je preuzimaju; {{ui:Izbriši}} je uklanja; {{ui:Obriši sve}} prazni radni prostor.
- Označite **Sačuvaj promenljive uz deo** da ih zadržite u fajlu dela (do 32 MB; veće ostaju samo za ovu posetu). Kad otvorite takav deo, panel nudi da ih učita.

## Mreže, polja i grafici

- `show(m)` crta mrežu; `show(f)` boji polje na njegovoj mreži uz legendu. Lista **Prikazano** u gornjem levom uglu prikaza sakriva ({{ui:oko}}) ili uklanja svaku stavku, i sakriva ili prikazuje sam deo. Ispod legende upišite opseg (**Od**, **do**) ili pritisnite {{ui:Auto}}; vektorsko polje ili polje naprezanja takođe nudi koju komponentu da prikaže.
- `show(f, 'deform', u, 'scale', 50)` crta mrežu pomerenu poljem pomeranja `u`, uvećanu 50 puta (bez `scale`, oko 8 % veličine modela).
- Kliknite prikazanu mrežu: najbliži čvor, element i vrednosti polja u njemu pojavljuju se u pomoćnim prikazima (**Izabrano**).
- `plot`, `imagesc` i `table` stavljaju linijski grafik, mapu boja dvodimenzionalnog niza ili tabelu u pomoćne prikaze. Grafik sa istim `'id'` (ili naslovom) kao raniji zamenjuje ga, pa petlja može da ažurira jedan grafik konvergencije; `'append', true` dodaje krivu u njega. {{ui:Očisti}} prazni pomoćne prikaze; strelica ih sklanja.
- Sa dva ili više grafika, {{ui:Jedan pored drugog}} prikazuje ih sve odjednom (najnovijih šest); klik na karticu tabele ili slike prikazuje samo nju.
- Ispod svakog grafika su {{ui:PNG}}, {{ui:SVG}} i {{ui:CSV}}. PNG i SVG ga štampaju na belom, u bojama za papir, bez obzira na temu (PNG 1600 × 1000 piksela; SVG se skalira bez mutnoće); CSV čuva njegove brojeve sa svim ciframa: jedna kolona x i kolona po krivoj kad krive dele x, inače jedan red po tački, sa imenom krive.
- {{key:F}} ili {{ui:Uklopi}} uklapa prikaz u ono što se prikazuje.

## Fajlovi

- {{ui:Otvori}} u grupi Skripta (ili prevucite fajlove na prikaz ili panel): fajlovi `.craft`, `.lua` i `.py` se otvaraju kao nove skripte (ne pokreću se); fajlovi podataka (STL, OBJ, CSV, JSON, NPY, HDF5) učitavaju se u promenljive pod imenom fajla.
- {{ui:Sačuvaj}} u grupi Skripta preuzima tekuću skriptu kao fajl.
- {{ui:Nova}} u grupi Skripta (ili {{ui:+}} pored kartica) pokreće još jednu skriptu. Dvaput kliknite karticu da je preimenujete; njen {{ui:×}} je uklanja (to možete da opozovete).

## Čitanje parametara dela

Skripta čita parametre dela (vidi [Upravljanje delom pomoću parametara](topic:parameters)) po imenu:

```
w = param('width');     % vrednost jednog parametra, u mm (ili stepenima, ili običnom brojem)
p = params();           % svi, kao struktura: p.width, p.height
```

U Lua-i i Python-u to su `cs.param('width')` i `cs.params()`. Skripte samo čitaju parametre: menjajte ih na kartici {{ui:Parametri}}. Ispod kartice skripte, red navodi parametre koje čita preko `param('…')`, i označava one koje deo nema; kartica {{ui:Parametri}} navodi skriptu ispod svakog. Ime sastavljeno dok skripta radi, kao `param(name)`, nije navedeno.

## Skripte se čuvaju uz deo

Svaka skripta na karticama čuva se u delu, pa je {{ui:Sačuvaj}} u grupi Datoteka čuva zajedno s njim, a izmene mogu da se opozovu. Otvaranje dela **nikad ne pokreće njegove skripte**: konzola kaže koliko ih ima, a pokreću se tek kad pritisnete {{ui:Pokreni}}. Deo od nekog drugog može da sadrži bilo koju skriptu: pročitajte je pre pokretanja. Skripte rade u pozadini na ovom računaru, bez pristupa mreži, i ne mogu da diraju stranicu.

## Povezano

- [CraftScript jezik](topic:craftscript-language)
- [Skripte u jeziku Lua](topic:craftscript-lua)
- [Skripte u jeziku Python](topic:craftscript-python)
- [Biblioteka analiza](topic:craftscript-library)
- [Pišite sopstvenu analizu](topic:craftscript-own-analysis)
