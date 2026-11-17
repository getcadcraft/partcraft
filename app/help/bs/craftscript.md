---
title: Pisanje i pokretanje skripti (radni prostor za skripte)
summary: Radni prostor za skripte korak po korak: pisanje CraftScript ili Lua skripte, pokretanje tipkom F5, čitanje konzole, čuvanje rezultata u varijablama za sljedeću skriptu, prikaz mreža, polja i grafikona, zaustavljanje pokretanja, i čuvanje skripti s dijelom.
keywords: skripta, skriptiranje, skriptiranje dok modeliraš, izdvoji, drugi ekran, drugi monitor, param, params, parametri u skriptama, CraftScript, Lua, kod, program, uređivač, konzola, REPL, komandna linija, pokreni, F5, pokreni odabir, zaustavi, varijable, radni prostor, grafikon, polje, mreža, legenda, pod-prikaz, analiza, automatizacija, matrica, numerički
from: d0003e89
---

**Pregled.** Skriptiranje je novo u PartCraft 0.3 i još je pregled: jezik, biblioteka i način čuvanja skripti mogu se i dalje mijenjati, pa skripte napisane sada mogu trebati male izmjene kasnije. Reci nam šta se pokvari.

Radni prostor za skripte pokreće tvoje vlastite proračune pored dijela: male zbirove, cijele analize, ili skripte iz [biblioteke analiza](topic:craftscript-library). Skripte se pišu u **CraftScript** (matrični jezik vrlo sličan MATLAB-u, vidi [Jezik CraftScript](topic:craftscript-language)), u **Lua** (vidi [Skripte u Lua](topic:craftscript-lua)) ili u **Python** (vidi [Skripte u Python](topic:craftscript-python)).

Izaberi **Skripta** u polju **Radni prostor** lijevo na traci alata. Dio se ne mijenja. Desni panel postaje panel skripti (širi nego obično; povuci mu ivicu da ga promijeniš, ili ga pomjeri na drugi ekran preko njegovog menija {{ui:⋯}}, vidi [Raspored panela](common:arrange-panels)).

## Skriptiraj dok modeliraš

Ne moraš napustiti radni prostor **Dizajn** da napišeš skriptu. U Dizajnu, kartica {{ui:Skripta}} desnog panela drži isti uređivač, konzolu, varijable i biblioteku, s istim skriptama. Stablo elemenata i prikaz i dalje rade: klikni element da ga odabereš, dvaput klikni skicu da je otvoriš za uređivanje, okreni prikaz, pa se vrati na karticu {{ui:Skripta}} i pritisni {{key:F5}}.

Ono što skripta prikazuje (mreže, polja, grafikoni, tabele) ne crta se preko tvog modela u Dizajnu: konzola to kaže, a radni prostor za skripte ima sve kad se prebaciš na njega.

{{ui:Izdvoji}}, pored {{ui:Pokreni}}, pomjera cijeli panel u vlastiti prozor, na primjer na drugi ekran, pa su uređivač i puni prikaz jedan do drugog. {{ui:Vrati}} ga ponovo prikači. Vidi [Raspored panela](common:arrange-panels).

## Pokreni prvu skriptu

1. Ukucaj u uređivač, na primjer:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pritisni {{key:F5}} (ili {{ui:Pokreni}}). Konzola ispod uređivača pokazuje šta je skripta ispisala i „Gotovo za … s”. Grafikon se pojavljuje u **pod-prikazima** duž dna 3D prikaza.
3. Red bez tačka-zareza ispisuje svoju vrijednost, kao u MATLAB-u: `a = 3` ispisuje `a = 3`; `a = 3;` ne ispisuje ništa.
4. Da pokreneš samo dio skripte, odaberi redove i pritisni {{key:Mod+Enter}} ({{ui:Odabir}}). Ako ništa nije odabrano, pokreće se red na kojem je kursor.
5. Red na dnu konzole (poslije `>>`) izvršava jednu naredbu kad pritisneš {{key:Enter}}. {{key:Up}} i {{key:Down}} vraćaju ranije redove.

## Pronađi, sažmi i dopuni

- **Traženje i zamjena.** Pritisni {{key:Mod+F}} (ili {{key:Mod+H}} da zameniš i). Traka se otvara iznad koda: upiši šta tražiš; podudaranja se osvijetle, a brojač kaže gdje si. Dugmad pored polja podudaraju velika i mala slova (**Aa**), traže samo cijele riječi (**W**) i koriste regularni izraz (**.\***; u zamjeni, `$1` vraća ono što je uhvatila prva grupa). {{ui:Zamijeni}} mijenja trenutno podudaranje, a {{ui:Sve}} mijenja svako podudaranje kao jedan korak {{key:Mod+Z}}.
- **Sažimanje.** Klikni ▾ pored broja reda, ili pritisni {{key:Mod+Shift+[}} dok je kursor na redu `function`, `if`, `for`, `while`, `switch` ili `try` (Lua: `function`, `do`, `if`, `repeat`), da sakriješ njegove unutrašnje redove; red kaže koliko ih je. ▸ ili {{key:Mod+Shift+]}} ga ponovo otvara. Sažimanje samo skriva redove: pokretanje, čuvanje, kopiranje i brojevi redova i dalje broje svaki red, a kucanje na sažetom redu ga prvo otvara.
- **Dopune.** Ukucaj dva slova imena, ili pritisni {{key:Mod+Space}}: pojavljuje se lista varijabli koje imaš, funkcija jezika (sa argumentima), ključnih riječi i imena već u skripti. Biraj strelicama i pritisni {{key:Enter}} ili {{key:Tab}}.

## Kad nešto pođe po zlu

- Greška imenuje problem i njegov red: red je označen crveno u uređivaču, a **Red n** u konzoli te vodi do njega.
- Petlja koja se nikad ne završava: pritisni {{ui:Zaustavi}} (traka ili panel). Skripta staje odmah; varijable zadržavaju vrijednosti koje su imale prije tog pokretanja.
- Svako pokretanje ima i budžet koraka (2 milijarde koraka po defaultu; promijeni ga pod **Opcije pokretanja** na panelu). Pokretanje koje ga pređe staje uz poruku.

## Varijable prelaze iz skripte u skriptu

Svaka varijabla najvišeg nivoa koju skripta napravi pojavi se na kartici **Varijable** (ime, tip, veličina, najmanja i najveća vrijednost) i ostaje tamo za sljedeću skriptu, u bilo kojem jeziku. Tako jedna skripta pravi mrežu, sljedeća rješava, a treća crta.

- Klikni varijablu da je prikažeš: mreže, polja i modeli u 3D prikazu, nizovi kao tabela (plus linijski grafikon za vektor ili mapa boja za matricu) u pod-prikazima.
- {{ui:Spasi kao JSON}}, {{ui:Spasi kao CSV}} (tabela brojeva) i {{ui:Spasi kao HDF5}} je preuzimaju; {{ui:Izbriši}} je uklanja; {{ui:Očisti sve}} prazni radni prostor.
- Označi **Spasi varijable s dijelom** da ih zadržiš u datoteci dijela (do 32 MB; veće ostaju samo za ovu posjetu). Kad otvoriš takav dio, panel nudi da ih učita.

## Mreže, polja i grafikoni

- `show(m)` crta mrežu; `show(f)` boji polje na njegovoj mreži s legendom. Lista **Prikazano** u gornjem lijevom uglu prikaza sakriva ({{ui:oko}}) ili uklanja svaku stavku, i sakriva ili prikazuje sam dio. Ispod legende upiši raspon (**Od**, **do**) ili pritisni {{ui:Auto}}; vektorsko ili naponsko polje također nudi koju komponentu da prikaže.
- `show(f, 'deform', u, 'scale', 50)` crta mrežu pomjerenu poljem pomjeranja `u`, uvećanu 50 puta (bez `scale`, oko 8 % veličine modela).
- Klikni prikazanu mrežu: najbliži čvor, element i vrijednosti polja u njemu pojavljuju se u pod-prikazima (**Odabrano**).
- `plot`, `imagesc` i `table` stavljaju linijski grafikon, mapu boja 2-D niza ili tabelu u pod-prikaze. Grafikon s istim `'id'` (ili naslovom) kao raniji zamjenjuje ga, pa petlja može ažurirati jedan grafikon konvergencije; `'append', true` dodaje krivu u njega. {{ui:Očisti}} prazni pod-prikaze; strelica ih sklapa.
- Sa dva ili više grafikona, {{ui:Jedno pored drugog}} prikazuje ih sve odjednom (najnovijih šest); klik na karticu tabele ili slike prikazuje samo nju.
- Svaki grafikon ima ispod {{ui:PNG}}, SVG i {{ui:CSV}}. PNG i SVG ga ispisuju na bijeloj podlozi u bojama za štampu, bez obzira na temu (PNG 1600 × 1000 piksela; SVG se skalira bez zamućenja); CSV čuva svoje brojeve sa svim ciframa: jedna kolona x i kolona po krivi kad krive dijele x, inače jedan red po tački s imenom krive.
- {{key:F}} ili {{ui:Uklopi}} uklapa prikaz u ono što se prikazuje.

## Datoteke

- {{ui:Otvori}} u grupi Skripta (ili prevuci datoteke na prikaz ili panel): datoteke `.craft`, `.lua` i `.py` otvaraju se kao nove skripte (ne pokreću se); datoteke s podacima (STL, OBJ, CSV, JSON, NPY, HDF5) učitavaju se u varijable pod imenom datoteke.
- {{ui:Spasi}} u grupi Skripta preuzima trenutnu skriptu kao datoteku.
- {{ui:Novo}} u grupi Skripta (ili {{ui:+}} pored kartica) pokreće još jednu skriptu. Dvaput klikni karticu da je preimenuješ; njen {{ui:×}} je uklanja (to možeš poništiti).

## Čitanje parametara dijela

Skripta čita parametre dijela (vidi [Upravljanje dijelom pomoću parametara](topic:parameters)) po imenu:

```
w = param('width');     % vrijednost jednog parametra, u mm (ili stepenima, ili običnom broju)
p = params();           % svi, kao struktura: p.width, p.height
```

U Lua i Python to su `cs.param('width')` i `cs.params()`. Skripte samo čitaju parametre: mijenjaju se na kartici {{ui:Parametri}}. Ispod kartice skripte, red navodi parametre koje čita preko `param('…')` i označava one koje dio nema; kartica {{ui:Parametri}} navodi skriptu ispod svakog od njih. Ime sastavljeno dok skripta radi, kao `param(name)`, nije navedeno.

## Skripte se čuvaju u dijelu

Svaka skripta u karticama čuva se u dijelu, pa je {{ui:Spasi}} u grupi Datoteka sprema s njim, a izmjene na njima mogu se poništiti. Otvaranje dijela **nikad ne pokreće njegove skripte**: konzola kaže koliko ih nosi, a pokreću se tek kad pritisneš {{ui:Pokreni}}. Dio od nekog drugog može sadržavati bilo koju skriptu: pročitaj je prije pokretanja. Skripte se izvršavaju u pozadini na ovom računaru bez pristupa mreži i ne mogu dirati stranicu.

## Povezano

- [Jezik CraftScript](topic:craftscript-language)
- [Skripte u Lua](topic:craftscript-lua)
- [Skripte u Python](topic:craftscript-python)
- [Biblioteka analiza](topic:craftscript-library)
- [Napiši vlastitu analizu](topic:craftscript-own-analysis)
