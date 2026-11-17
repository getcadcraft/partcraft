---
title: Scenarijų rašymas ir paleidimas (Scenarijų darbo sritis)
summary: Scenarijų darbo sritis žingsnis po žingsnio: rašykite CraftScript ar Lua scenarijų, paleiskite jį su F5, skaitykite konsolę, saugokite rezultatus kintamuosiuose kitam scenarijui, rodykite tinklelius, laukus ir grafikus, sustabdykite paleidimą ir įrašykite scenarijus kartu su detale.
keywords: scenarijus, scenarijavimas, scenarijus modeliuojant, atskirti, antras ekranas, antras monitorius, param, params, parametrai scenarijuose, CraftScript, Lua, kodas, programa, redaktorius, konsolė, REPL, komandinė eilutė, paleisti, F5, paleisti pažymėtą, sustabdyti, kintamieji, darbo sritis, grafikas, laukas, tinklelis, legenda, papildomas rodinys, analizė, automatizavimas, matrica, skaitinis
from: d0003e89
---

**Peržiūra.** Scenarijavimas yra naujas PartCraft 0.3 ir yra peržiūros versija: kalba, biblioteka ir scenarijų įrašymo būdas dar gali keistis, todėl dabar parašyti scenarijai gali prireikti nedidelių pataisymų vėliau. Praneškite, kas neveikia.

Scenarijų darbo sritis paleidžia jūsų pačių skaičiavimus šalia detalės: mažas sumas, visas analizes ar [analizės bibliotekos](topic:craftscript-library) scenarijus. Scenarijai rašomi **CraftScript** kalba (matricų kalba, panaši į MATLAB, žr. [CraftScript kalba](topic:craftscript-language)), arba **Lua** (žr. [Scenarijai Lua kalba](topic:craftscript-lua)), arba **Python** (žr. [Scenarijai Python kalba](topic:craftscript-python)).

Pasirinkite **Scenarijus** **Darbo sritis** laukelyje kairėje įrankių juostos pusėje. Detalė nekeičiama. Dešinysis skydelis tampa scenarijų skydeliu (platesnis nei įprastai; tempkite jo kraštą, kad pakeistumėte plotį, arba perkelkite jį į antrą ekraną per {{ui:⋯}} meniu, žr. [Išdėstykite skydelius](common:arrange-panels)).

## Scenarijus modeliuojant

Nereikia išeiti iš Projektavimo darbo srities, kad parašytumėte scenarijų. Projektavimo srityje dešiniojo skydelio skirtukas **Scenarijus** turi tą patį redaktorių, konsolę, kintamuosius ir biblioteką, su tais pačiais scenarijais. Elementų medis ir rodinys ir toliau veikia: spustelėkite elementą, kad jį pažymėtumėte, dukart spustelėkite eskizą, kad jį redaguotumėte, pasukite rodinį, tada grįžkite į skirtuką **Scenarijus** ir paspauskite {{key:F5}}.

Tai, ką scenarijus **rodo** (tinkleliai, laukai, grafikai, lentelės), Projektavimo srityje neperbraižoma virš jūsų modelio: konsolė tai praneša, o Scenarijų darbo sritis turi visa tai, kai į ją persijungiate.

{{ui:Atskirti}}, šalia {{ui:Paleisti}}, perkelia visą skydelį į atskirą langą, pavyzdžiui, į antrą ekraną, kad redaktorius ir visas rodinys būtų vienas šalia kito. {{ui:Grąžinti}} vėl prijungia jį prie langų. Žr. [Išdėstykite skydelius](common:arrange-panels).

## Paleiskite pirmąjį scenarijų

1. Įveskite redaktoriuje, pavyzdžiui:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Paspauskite {{key:F5}} (arba {{ui:Paleisti}}). Konsolė po redaktoriumi rodo, ką scenarijus išspausdino, ir „Done in … s“. Grafikas atsiranda **papildomuose rodiniuose** palei 3D rodinio apačią.
3. Eilutė be kabliataškio parodo savo reikšmę, kaip MATLAB: `a = 3` parodo `a = 3`; `a = 3;` nieko neparodo.
4. Norėdami paleisti tik dalį scenarijaus, pažymėkite eilutes ir paspauskite {{key:Mod+Enter}} ({{ui:Pažymėtas}}). Jei nieko nepažymėta, paleidžiama eilutė, kurioje yra žymeklis.
5. Eilutė konsolės apačioje (po `>>`) paleidžia vieną sakinį, kai paspaudžiate {{key:Enter}}. {{key:Up}} ir {{key:Down}} grąžina ankstesnes eilutes.

## Rasti, sulankstyti ir užbaigti

- **Ieškoti ir pakeisti.** Paspauskite {{key:Mod+F}} (arba {{key:Mod+H}}, kad keistumėte ir pakeistumėte). Virš kodo atsiveria juosta: įveskite, ką ieškoti; atitikmenys paryškinami, o skaičius rodo, kur esate. Mygtukai šalia laukelio skiria didžiąsias ir mažąsias raides (**Aa**), ieško tik atskirų žodžių (**W**) ir naudoja reguliariąją išraišką (**.\***; pakeitime `$1` įrašo tai, ką atitiko pirmoji grupė). {{ui:Pakeisti}} pakeičia dabartinį atitikmenį, {{ui:Visus}} pakeičia visus atitikmenis kaip vieną {{key:Mod+Z}} veiksmą.
- **Sulankstymas.** Spustelėkite ▾ šalia eilutės numerio arba paspauskite {{key:Mod+Shift+[}}, kai žymeklis yra `function`, `if`, `for`, `while`, `switch` ar `try` eilutėje (Lua: `function`, `do`, `if`, `repeat`), kad paslėptumėte jos vidines eilutes; eilutė parodo, kiek jų. ▸ arba {{key:Mod+Shift+]}} jas vėl atidaro. Sulankstymas tik slepia eilutes: paleidimas, įrašymas, kopijavimas ir eilučių numeriai vis tiek skaičiuoja visas eilutes, o rašymas sulankstytoje eilutėje pirmiausia ją atidaro.
- **Užbaigimai.** Įveskite du vardo raides arba paspauskite {{key:Mod+Space}}: sąraše rodomi jūsų turimi kintamieji, kalbos funkcijos (su argumentais), raktiniai žodžiai ir scenarijuje jau esantys vardai. Pasirinkite rodyklėmis ir paspauskite {{key:Enter}} arba {{key:Tab}}.

## Kai kas nors nutinka

- Klaida nurodo problemą ir jos eilutę: eilutė redaktoriuje pažymima raudonai, o konsolės **Eilutė n** nuveda į ją.
- Begalinis ciklas: paspauskite {{ui:Sustabdyti}} (įrankių juostoje ar skydelyje). Scenarijus sustoja iš karto; kintamieji išlaiko reikšmes, kurias turėjo prieš tą paleidimą.
- Kiekvienas paleidimas taip pat turi žingsnių biudžetą (numatytoji reikšmė – 2 milijardai žingsnių; keičiama skirtuke **Vykdymo parinktys** skydelyje). Paleidimas, viršijęs jį, sustoja su pranešimu.

## Kintamieji pereina iš scenarijaus į scenarijų

Kiekvienas viršutinio lygio kintamasis, kurį sukuria scenarijus, patenka į skirtuką **Kintamieji** (vardas, tipas, dydis, mažiausia ir didžiausia reikšmė) ir lieka ten kitam scenarijui, bet kuria kalba. Taip vienas scenarijus sukuria tinklelį, kitas jį sprendžia, trečias braižo.

- Spustelėkite kintamąjį, kad jį parodytumėte: tinkleliai, laukai ir modeliai 3D rodinyje, masyvai lentele (be to, eilutės grafikas vektoriui ar spalvų žemėlapis matricai) papildomuose rodiniuose.
- {{ui:Įrašyti kaip JSON}}, {{ui:Įrašyti kaip CSV}} (skaičių lentelė) ir {{ui:Įrašyti kaip HDF5}} parsisiunčia jį; {{ui:Naikinti}} pašalina; {{ui:Išvalyti viską}} ištuština darbo sritį.
- Pažymėkite **Įrašyti kintamuosius kartu su detale**, kad jie išliktų detalės faile (iki 32 MB; didesni lieka tik šiam vizitui). Atidarius tokią detalę, skydelis siūlo juos įkelti.

## Tinkleliai, laukai ir grafikai

- `show(m)` nubraižo tinklelį; `show(f)` nuspalvina lauką jo tinklelyje su legenda. Sąrašas **Rodoma** viršutiniame kairiajame rodinio kampe paslepia ({{ui:akis}}) arba pašalina kiekvieną elementą ir paslepia ar parodo pačią detalę. Po legenda įveskite intervalą (**Nuo**, **iki**) arba spauskite {{ui:Auto}}; vektoriaus ar įtempių lauke taip pat siūlomas komponentas, kurį rodyti.
- `show(f, 'deform', u, 'scale', 50)` nubraižo tinklelį, perkeltą poslinkio lauku `u`, padidintą 50 kartų (be `scale` – apie 8 % modelio dydžio).
- Spustelėkite rodomą tinklelį: artimiausias mazgas, elementas ir lauko reikšmės ten atsiranda papildomuose rodiniuose (**Pasirinkta**).
- `plot`, `imagesc` ir `table` deda linijinį grafiką, 2-D masyvo spalvų žemėlapį ar lentelę į papildomus rodinius. Grafikas su tuo pačiu `'id'` (ar pavadinimu) kaip ankstesnis jį pakeičia, todėl ciklas gali atnaujinti vieną konvergavimo grafiką; `'append', true` prideda kreivę prie jo. {{ui:Išvalyti}} ištuština papildomus rodinius; rodyklė juos sulankstys.
- Su dviem ar daugiau grafikų {{ui:Greta}} parodo juos visus iš karto (naujausius šešis); spustelėjus lentelės ar paveikslėlio skirtuką, rodomas tik jis.
- Kiekvieno grafiko apačioje yra {{ui:PNG}}, {{ui:SVG}} ir {{ui:CSV}}. PNG ir SVG išspausdina jį baltame fone popieriaus spalvomis, nepriklausomai nuo temos (PNG 1600 × 1000 pikselių; SVG mastelį keičia nesuliedamas); CSV turi visus skaičius su visais skaitmenimis: vieną x stulpelį ir po stulpelį kiekvienai kreivei, kai kreivės turi bendrą x, kitaip – po eilutę kiekvienam taškui su kreivės pavadinimu.
- {{key:F}} arba {{ui:Pritaikyti}} pritaiko rodinį prie to, kas rodoma.

## Failai

- {{ui:Atidaryti}} Scenarijaus grupėje (arba numeskite failus ant rodinio ar skydelio): `.craft`, `.lua` ir `.py` failai atsidaro kaip nauji scenarijai (jie nepaleidžiami); duomenų failai (STL, OBJ, CSV, JSON, NPY, HDF5) įkeliami į kintamuosius pagal failo vardą.
- {{ui:Įrašyti}} Scenarijaus grupėje parsisiunčia dabartinį scenarijų kaip failą.
- {{ui:Naujas}} Scenarijaus grupėje (arba {{ui:+}} prie skirtukų) pradeda kitą scenarijų. Dukart spustelėkite skirtuką, kad jį pervardintumėte; jo {{ui:×}} pašalina jį (tai galima atšaukti).

## Skaitykite detalės parametrus

Scenarijus nuskaito detalės parametrus (žr. [Detalės valdymas parametrais](topic:parameters)) pagal vardą:

```
w = param('width');     % vieno parametro reikšmė mm (arba laipsniais, arba paprastas skaičius)
p = params();           % visi jie kaip struktūra: p.width, p.height
```

Lua ir Python tai yra `cs.param('width')` ir `cs.params()`. Scenarijai tik skaito parametrus: keiskite juos skirtuke {{ui:Parametrai}}. Po scenarijaus skirtuku eilutė išvardija parametrus, kuriuos jis skaito su `param('…')`, ir pažymi tuos, kurių detalė neturi; skirtukas {{ui:Parametrai}} po kiekvienu iš jų išvardija scenarijų. Vardas, sudarytas scenarijui veikiant, pvz., `param(name)`, nėra išvardytas.

## Scenarijai įrašomi detalėje

Kiekvienas skirtukuose esantis scenarijus įrašomas detalėje, todėl {{ui:Įrašyti}} Failo grupėje įrašo ir juos, o pakeitimus galima atšaukti. Atidarius detalę, scenarijai **niekada nepaleidžiami**: konsolė praneša, kiek jų yra, ir jie paleidžiami tik paspaudus Paleisti. Svetimą detalę gali sudaryti bet koks scenarijus: prieš paleisdami jį, perskaitykite. Scenarijai veikia fone šiame kompiuteryje be tinklo prieigos ir negali paliesti puslapio.

## Susiję

- [CraftScript kalba](topic:craftscript-language)
- [Scenarijai Lua kalba](topic:craftscript-lua)
- [Scenarijai Python kalba](topic:craftscript-python)
- [Analizės biblioteka](topic:craftscript-library)
- [Savos analizės rašymas](topic:craftscript-own-analysis)
