---
title: Pišite i pokrećite skripte (radni prostor Skripta)
summary: Radni prostor Skripta korak po korak: pišite CraftScript ili Lua skriptu, pokrenite je tipkom F5, čitajte konzolu, zadržite rezultate u varijablama za sljedeću skriptu, prikažite mreže, polja i grafove, zaustavite izvođenje i spremite skripte s dijelom.
keywords: skripta, skriptiranje, skriptiranje dok modelirate, izdvoji, drugi zaslon, drugi monitor, param, params, parametri u skriptama, CraftScript, Lua, kod, program, uređivač, konzola, REPL, naredbeni redak, pokreni, F5, pokreni odabir, zaustavi, varijable, radni prostor, graf, polje, mreža, legenda, podprikaz, analiza, automatizacija, matrica, numerički
from: d0003e89
---

**Pregled.** Skriptiranje je novo u PartCraftu 0.3 i u fazi je pregleda: jezik, biblioteka i način spremanja skripti još se mogu promijeniti, pa skripte napisane sada mogu trebati manje izmjene kasnije. Javite nam što pukne.

Radni prostor Skripta izvodi vaše vlastite izračune uz dio: male zbrojeve, cijele analize ili skripte iz [biblioteke analiza](topic:craftscript-library). Skripte se pišu u **CraftScriptu** (matrični jezik vrlo sličan MATLAB-u, vidi [Jezik CraftScript](topic:craftscript-language)) ili u **Lua** (vidi [Skripte u jeziku Lua](topic:craftscript-lua)) ili **Pythonu** (vidi [Skripte u Pythonu](topic:craftscript-python)).

Odaberite **Skripta** u okviru **Radni prostor** lijevo na alatnoj traci. Dio se ne mijenja. Desni panel postaje panel skripti (širi nego obično; povucite njegov rub da ga promijenite ili ga premjestite na drugi zaslon s njegovim izbornikom {{ui:⋯}}, vidi [Razmještaj panela](common:arrange-panels)).

## Pišite skriptu dok modelirate

Ne morate napustiti radni prostor Dizajn da biste napisali skriptu. U Dizajnu kartica **Skripta** u desnom panelu sadrži isti uređivač, konzolu, varijable i biblioteku, sa istim skriptama. Stablo značajki i prikaz i dalje rade: kliknite značajku da je odaberete, dvaput kliknite skicu da je uredite, okrenite prikaz, pa se vratite na karticu **Skripta** i pritisnite {{key:F5}}.

Što skripta **prikazuje** (mreže, polja, grafovi, tablice) ne crta se preko vašeg modela u Dizajnu: konzola to kaže, a radni prostor Skripta ima sve kad se prebacite na njega.

{{ui:Izdvoji}}, uz {{ui:Pokreni}}, premješta cijeli panel u vlastiti prozor, na primjer na drugi zaslon, pa uređivač i cijeli prikaz stoje jedan do drugoga. {{ui:Vrati}} ga ponovno usidri. Vidi [Razmještaj panela](common:arrange-panels).

## Pokrenite prvu skriptu

1. Upišite u uređivač, na primjer:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pritisnite {{key:F5}} (ili {{ui:Pokreni}}). Konzola ispod uređivača prikazuje što je skripta ispisala i „Gotovo za … s“. Graf se pojavljuje u **podprikazima** duž dna 3D prikaza.
3. Redak bez točke-zareza ispisuje svoju vrijednost, kao u MATLAB-u: `a = 3` ispisuje `a = 3`; `a = 3;` ne ispisuje ništa.
4. Da pokrenete samo dio skripte, odaberite retke i pritisnite {{key:Mod+Enter}} ({{ui:Odabir}}). Bez odabira pokreće se redak na kojem je kursor.
5. Redak na dnu konzole (iza `>>`) izvodi jednu naredbu kad pritisnete {{key:Enter}}. {{key:Up}} i {{key:Down}} vraćaju ranije retke.

## Pronađite, sažmite i dovršite

- **Traženje i zamjena.** Pritisnite {{key:Mod+F}} (ili {{key:Mod+H}} da zamijenite i). Iznad koda otvara se traka: upišite što tražite; podudaranja se označe, a brojač kaže gdje ste. Gumbi pored okvira razlikuju velika i mala slova (**Aa**), traže samo cijele riječi (**W**) i koriste regularni izraz (**.\***; u zamjeni `$1` vraća ono što je odgovaralo prvoj grupi). {{ui:Zamijeni}} mijenja trenutno podudaranje, a {{ui:Sve}} mijenja sva podudaranja kao jedan korak za {{key:Mod+Z}}.
- **Sažimanje.** Kliknite ▾ pored broja retka ili pritisnite {{key:Mod+Shift+[}} s kursorom na retku `function`, `if`, `for`, `while`, `switch` ili `try` (Lua: `function`, `do`, `if`, `repeat`) da sakrijete njegove unutarnje retke; redak kaže koliko ih je. ▸ ili {{key:Mod+Shift+]}} ga ponovno otvara. Sažimanje samo skriva retke: pokretanje, spremanje, kopiranje i brojevi redaka i dalje broje svaki redak, a pisanje u sažetom retku najprije ga otvara.
- **Dovršavanje.** Upišite dva slova imena ili pritisnite {{key:Mod+Space}}: popis prikazuje varijable koje imate, funkcije jezika (s argumentima), ključne riječi i imena koja su već u skripti. Odaberite strelicama i pritisnite {{key:Enter}} ili {{key:Tab}}.

## Kad nešto pođe po zlu

- Pogreška imenuje problem i njegov redak: redak je u uređivaču označen crveno, a **Redak n** u konzoli vas vodi do njega.
- Petlja koja se nikad ne završava: pritisnite {{ui:Zaustavi}} (alatna traka ili panel). Skripta se odmah zaustavlja; varijable zadržavaju vrijednosti koje su imale prije tog izvođenja.
- Svako izvođenje ima i proračunski broj koraka (2 milijarde koraka prema zadanom; promijenite ga pod **Opcije pokretanja** na panelu). Izvođenje koje ga prijeđe zaustavlja se uz poruku.

## Varijable prelaze iz skripte u skriptu

Svaka varijabla najviše razine koju skripta napravi završi na kartici **Varijable** (ime, vrsta, veličina, najmanja i najveća vrijednost) i ostaje tamo za sljedeću skriptu, na bilo kojem jeziku. Tako jedna skripta izradi mrežu, sljedeća je riješi, a treća nacrta.

- Kliknite varijablu da je prikažete: mreže, polja i modeli u 3D prikazu, nizovi kao tablica (plus linijski graf za vektor ili mapa boja za matricu) u podprikazima.
- {{ui:Spremi kao JSON}}, {{ui:Spremi kao CSV}} (tablica brojeva) i {{ui:Spremi kao HDF5}} je preuzimaju; {{ui:Izbriši}} je uklanja; {{ui:Očisti sve}} prazni radni prostor.
- Označite **Spremi varijable s dijelom** da ih zadržite u datoteci dijela (do 32 MB; veće ostaju samo za ovaj posjet). Kad otvorite takav dio, panel ponudi da ih učita.

## Mreže, polja i grafovi

- `show(m)` crta mrežu; `show(f)` oboji polje na njegovoj mreži s legendom. Popis **Prikazano** u gornjem lijevom kutu prikaza sakriva ({{ui:oko}}) ili uklanja svaku stavku te sakriva ili prikazuje sam dio. Ispod legende upišite raspon (**Od**, **do**) ili pritisnite {{ui:Auto}}; vektorsko ili naponsko polje također nudi koju komponentu prikazati.
- `show(f, 'deform', u, 'scale', 50)` crta mrežu pomaknutu poljem pomaka `u`, uvećanu 50 puta (bez `scale`, oko 8 % veličine modela).
- Kliknite prikazanu mrežu: najbliži čvor, element i vrijednosti polja tamo se pojavljuju u podprikazima (**Odabrano**).
- `plot`, `imagesc` i `table` stavljaju linijski graf, mapu boja 2D niza ili tablicu u podprikaze. Graf s istim `'id'` (ili naslovom) kao raniji zamjenjuje ga, pa petlja može ažurirati jedan graf konvergencije; `'append', true` dodaje krivulju u njega. {{ui:Očisti}} prazni podprikaze; strelica ih sklapa.
- Uz dva ili više grafova, {{ui:Jedan pored drugog}} prikazuje ih sve odjednom (najnovijih šest); klik na karticu tablice ili slike prikazuje samo nju.
- Svaki graf ima ispod sebe {{ui:PNG}}, {{ui:SVG}} i {{ui:CSV}}. PNG i SVG ispisuju ga na bijelo u bojama papira, bez obzira na temu (PNG 1600 × 1000 piksela; SVG se skalira bez zamućenja); CSV sadrži svoje brojeve sa svim znamenkama: jedan stupac x i stupac po krivulji kad krivulje dijele x, inače jedan redak po točki s imenom krivulje.
- {{key:F}} ili {{ui:Prilagodi}} prilagođava prikaz onome što se prikazuje.

## Datoteke

- {{ui:Otvori}} u grupi Skripta (ili ispustite datoteke na prikaz ili panel): datoteke `.craft`, `.lua` i `.py` otvaraju se kao nove skripte (ne pokreću se); datoteke podataka (STL, OBJ, CSV, JSON, NPY, HDF5) učitavaju se u varijable pod imenom datoteke.
- {{ui:Spremi}} u grupi Skripta preuzima trenutnu skriptu kao datoteku.
- {{ui:Novo}} u grupi Skripta (ili {{ui:+}} pored kartica) pokreće drugu skriptu. Dvaput kliknite karticu da je preimenujete; njezin {{ui:×}} je uklanja (to možete poništiti).

## Čitanje parametara dijela

Skripta čita parametre dijela (vidi [Upravljanje dijelom pomoću parametara](topic:parameters)) po imenu:

```
w = param('width');     % vrijednost jednog parametra, u mm (ili stupnjevi ili običan broj)
p = params();           % svi, kao struktura: p.width, p.height
```

U jezicima Lua i Python to su `cs.param('width')` i `cs.params()`. Skripte samo čitaju parametre: mijenjajte ih na kartici {{ui:Parametri}}. Ispod kartice skripte redak navodi parametre koje čita s `param('…')` i označava one koje dio nema; kartica {{ui:Parametri}} navodi skriptu pod svakim od njih. Ime sastavljeno dok skripta radi, poput `param(name)`, se ne navodi.

## Skripte se spremaju u dio

Svaka skripta u karticama čuva se u dijelu, pa {{ui:Spremi}} u grupi Datoteka sprema i njih, a promjene na njima mogu se poništiti. Otvaranje dijela **nikad ne pokreće njegove skripte**: konzola kaže koliko ih ima, a pokreću se tek kad pritisnete Pokreni. Dio od nekog drugog može sadržavati bilo koju skriptu: pročitajte je prije pokretanja. Skripte se pokreću u pozadini na ovom računalu bez pristupa mreži i ne mogu dirati stranicu.

## Povezano

- [Jezik CraftScript](topic:craftscript-language)
- [Skripte u jeziku Lua](topic:craftscript-lua)
- [Skripte u Pythonu](topic:craftscript-python)
- [Biblioteka analiza](topic:craftscript-library)
- [Napišite vlastitu analizu](topic:craftscript-own-analysis)
