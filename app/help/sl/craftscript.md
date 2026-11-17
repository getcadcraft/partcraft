---
title: Pisanje in zagon skriptov (delovno okolje Skript)
summary: Delovno okolje Skript korak za korakom: napišite skript CraftScript ali Lua, ga zaženite s F5, preberite konzolo, rezultate hranite v spremenljivkah za naslednji skript, prikažite mreže, polja in grafe, ustavite zagon ter shranite skripte skupaj z delom.
keywords: skript, skriptiranje, skriptiranje med modeliranjem, odpni, drugi zaslon, drugi monitor, param, params, parametri v skriptih, CraftScript, Lua, koda, program, urejevalnik, konzola, REPL, ukazna vrstica, zagon, F5, zaženi izbor, ustavi, spremenljivke, delovno okolje, graf, polje, mreža, legenda, podprikaz, analiza, avtomatizacija, matrika, numerično
from: d0003e89
---

**Predogled.** Skriptiranje je novo v PartCraft 0.3 in je predogled: jezik, knjižnica in način shranjevanja skriptov se lahko še spremenijo, skripti, napisani zdaj, pa bodo morda potrebovali manjše popravke pozneje. Povejte nam, kaj ne deluje.

Delovno okolje Skript zažene vaše lastne izračune poleg dela: majhne vsote, cele analize ali skripte iz [knjižnice za analizo](topic:craftscript-library). Skripti so napisani v **CraftScript** (matrični jezik, zelo podoben MATLAB, glejte [Jezik CraftScript](topic:craftscript-language)) ali v **Lua** (glejte [Skripti v jeziku Lua](topic:craftscript-lua)) ali v **Python** (glejte [Skripti v jeziku Python](topic:craftscript-python)).

Izberite **Skript** v polju **Delovno okolje** na levem robu orodne vrstice. Del se ne spremeni. Desno podokno postane podokno skriptov (širše kot običajno; povlecite njegov rob, da ga spremenite, ali ga z menijem {{ui:⋯}} premaknite na drug zaslon, glejte [Razporeditev podoken](common:arrange-panels)).

## Skriptiranje med modeliranjem

Za pisanje skripta vam ni treba zapustiti okolja Oblikovanje. V okolju Oblikovanje ima zavihek {{ui:Skript}} v desnem podoknu isti urejevalnik, konzolo, spremenljivke in knjižnico, z istimi skripti. Drevo značilk in pogled delujeta naprej: kliknite značilko, da jo izberete, dvakrat kliknite skico, da jo uredite, zavrtite pogled, nato se vrnite na zavihek {{ui:Skript}} in pritisnite {{key:F5}}.

Kar skript **prikaže** (mreže, polja, grafi, tabele), se v okolju Oblikovanje ne riše čez vaš model: konzola to pove, delovno okolje Skript pa ima vse, ko preklopite nanj.

{{ui:Odpni}}, poleg {{ui:Zaženi}}, premakne celotno podokno v lastno okno, na primer na drug zaslon, tako da sta urejevalnik in celotni pogled drug ob drugem. {{ui:Vrni}} ga znova pripne. Glejte [Razporeditev podoken](common:arrange-panels).

## Zaženite prvi skript

1. V urejevalnik vnesite na primer:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pritisnite {{key:F5}} (ali {{ui:Zaženi}}). Konzola pod urejevalnikom pokaže, kaj je skript izpisal, in „Končano v … s“. Graf se pojavi v **podprikazih** ob spodnjem robu 3D-pogleda.
3. Vrstica brez podpičja izpiše svojo vrednost, kot v MATLAB: `a = 3` izpiše `a = 3`; `a = 3;` ne izpiše ničesar.
4. Če želite zagnati samo del skripta, izberite vrstice in pritisnite {{key:Mod+Enter}} ({{ui:Izbor}}). Če nič ni izbrano, se zažene vrstica, na kateri je kazalec.
5. Vrstica na dnu konzole (za `>>`) zažene en stavek, ko pritisnete {{key:Enter}}. {{key:Up}} in {{key:Down}} prineseta nazaj prejšnje vrstice.

## Iskanje, zlaganje in dopolnjevanje

- **Iskanje in zamenjava.** Pritisnite {{key:Mod+F}} (ali {{key:Mod+H}}, da zamenjate tudi). Nad kodo se odpre vrstica: vpišite, kaj iščete; zadetki se osvetlijo, število pa pove, kje ste. Gumbi ob polju uveljavijo razlikovanje velikih in malih črk (**Aa**), iščejo samo cele besede (**W**) in uporabijo regularni izraz (**.\***; v zamenjavi `$1` vrne, kar je ujel prvi oklepaj). {{ui:Zamenjaj}} zamenja trenutni zadetek, {{ui:Vse}} zamenja vse zadetke kot en korak {{key:Mod+Z}}.
- **Zlaganje.** Kliknite ▾ ob številki vrstice ali pritisnite {{key:Mod+Shift+[}} s kazalcem na vrstici `function`, `if`, `for`, `while`, `switch` ali `try` (Lua: `function`, `do`, `if`, `repeat`), da zložite njene notranje vrstice; vrstica pove, koliko jih je. ▸ ali {{key:Mod+Shift+]}} jih znova razširi. Zlaganje samo skrije vrstice: Zaženi, Shrani, kopiranje in številke vrstic še vedno štejejo vse vrstice, pisanje v zloženo vrstico pa jo najprej razširi.
- **Dopolnjevanje.** Vpišite dve črki imena ali pritisnite {{key:Mod+Space}}: prikaže se seznam vaših spremenljivk, funkcij jezika (z argumenti), ključnih besed in imen, ki so že v skriptu. Izberite s puščicami in pritisnite {{key:Enter}} ali {{key:Tab}}.

## Ko gre kaj narobe

- Napaka pove težavo in vrstico: vrstica je v urejevalniku označena rdeče, **Vrstica n** v konzoli pa vas pripelje tja.
- Zanka, ki se ne konča: pritisnite {{ui:Ustavi}} (orodna vrstica ali podokno). Skript se takoj ustavi; spremenljivke ohranijo vrednosti, ki so jih imele pred tem zagonom.
- Vsak zagon ima tudi proračunski korak (privzeto 2 milijardi korakov; spremenite ga pod **Možnosti zagona** v podoknu). Zagon, ki ga preseže, se ustavi s sporočilom.

## Spremenljivke gredo od skripta do skripta

Vsaka spremenljivka na najvišji ravni, ki jo skript ustvari, se prikaže na zavihku **Spremenljivke** (ime, vrsta, velikost, najmanjša in največja vrednost) in ostane tam za naslednji skript, v katerem koli jeziku. Tako en skript naredi mrežo, naslednji rešuje, tretji riše.

- Kliknite spremenljivko, da jo prikažete: mreže, polja in modeli v 3D-pogledu, polja kot tabela (plus vrstični graf za vektor ali barvna karta za matriko) v podprikazih.
- {{ui:Shrani kot JSON}}, {{ui:Shrani kot CSV}} (tabela števil) in {{ui:Shrani kot HDF5}} jo prenesejo; {{ui:Izbriši}} jo odstrani; {{ui:Počisti vse}} izprazni delovno okolje.
- Označite **Shrani spremenljivke skupaj z delom**, da jih ohranite v datoteki dela (do 32 MB; večje ostanejo samo za ta obisk). Ko odprete tak del, podokno ponudi nalaganje.

## Mreže, polja in grafi

- `show(m)` nariše mrežo; `show(f)` pobarva polje na njeni mreži z legendo. Seznam **Prikazano** v zgornjem levem kotu pogleda skrije ({{ui:oko}}) ali odstrani vsak element ter skrije ali prikaže sam del. Pod legendo vpišite razpon (**Od**, **do**) ali pritisnite {{ui:Samodejno}}; vektorsko ali napetostno polje ponudi tudi, katero komponento prikazati.
- `show(f, 'deform', u, 'scale', 50)` nariše mrežo, premaknjeno s poljem pomikov `u` in povečano 50-krat (brez `scale` približno 8 % velikosti modela).
- Kliknite prikazano mrežo: najbližje vozlišče, element in vrednosti polja tam se pojavijo v podprikazih (**Izbrano**).
- `plot`, `imagesc` in `table` postavijo vrstični graf, barvno karto 2-D polja ali tabelo v podprikaze. Graf z enakim `'id'` (ali naslovom) kot prejšnji ga nadomesti, zato zanka lahko posodablja en graf konvergence; `'append', true` doda krivuljo. {{ui:Počisti}} izprazni podprikaze; puščica jih zloži.
- Z dvema ali več grafi {{ui:Drug ob drugem}} prikaže vse hkrati (zadnjih šest); klik na zavihek tabele ali slike jo spet prikaže samo.
- Pod vsakim grafom so {{ui:PNG}}, {{ui:SVG}} in {{ui:CSV}}. PNG in SVG ga natisneta na belo v barvah za papir, ne glede na temo (PNG 1600 × 1000 slikovnih pik; SVG se skalira brez zamegljitve); CSV hrani njegova števila z vsemi mesti: en stolpec x in stolpec za vsako krivuljo, če si krivulje delijo x, sicer ena vrstica na točko z imenom krivulje.
- {{key:F}} ali {{ui:Prilagodi}} prilagodi pogled prikazanemu.

## Datoteke

- {{ui:Odpri}} v skupini Skript (ali spustite datoteke na pogled ali podokno): datoteke `.craft`, `.lua` in `.py` se odprejo kot novi skripti (ne zaženejo se); podatkovne datoteke (STL, OBJ, CSV, JSON, NPY, HDF5) se naložijo v spremenljivke pod imenom datoteke.
- {{ui:Shrani}} v skupini Skript prenese trenutni skript kot datoteko.
- {{ui:Novo}} v skupini Skript (ali {{ui:+}} ob zavihkih) začne nov skript. Dvakrat kliknite zavihek, da ga preimenujete; njegov {{ui:×}} ga odstrani (to lahko razveljavite).

## Preberite parametre dela

Skript bere parametre dela (glejte [Vodenje dela s parametri](topic:parameters)) po imenu:

```
w = param('width');     % vrednost enega parametra, v mm (ali stopinjah ali navadnem številu)
p = params();           % vsi kot struktura: p.width, p.height
```

V jezikih Lua in Python sta to `cs.param('width')` in `cs.params()`. Skripti samo berejo parametre: spremenite jih na zavihku {{ui:Parametri}}. Pod zavihkom skripta vrstica našteje parametre, ki jih bere z `param('…')`, in označi tiste, ki jih del nima; zavihek {{ui:Parametri}} pod vsakim naveže skript. Ime, sestavljeno med izvajanjem, kot `param(name)`, ni našteto.

## Skripti se shranijo v del

Vsak skript v zavihkih je shranjen v delu, zato {{ui:Shrani}} v skupini Datoteka shrani tudi njih, spremembe nanje pa je mogoče razveljaviti. Odprtje dela **nikoli ne zažene njegovih skriptov**: konzola pove, koliko jih ima, in zaženejo se šele, ko pritisnete Zaženi. Del od nekoga drugega lahko vsebuje poljuben skript: preberite ga, preden ga zaženete. Skripti se izvajajo v ozadju na tem računalniku brez dostopa do omrežja in ne morejo dotakniti strani.

## Povezano

- [Jezik CraftScript](topic:craftscript-language)
- [Skripti v jeziku Lua](topic:craftscript-lua)
- [Skripti v jeziku Python](topic:craftscript-python)
- [Knjižnica za analizo](topic:craftscript-library)
- [Pišite lastno analizo](topic:craftscript-own-analysis)
