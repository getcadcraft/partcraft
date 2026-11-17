---
title: Scenarijai Python kalba
summary: Rašykite Scenarijų darbo srities scenarijus Python 3 kalba: įmontuotų funkcijų objektas cs, masyvai kaip numpy tipo reikšmės su indeksavimu nuo 0, bendra darbo sritis, spausdinimas, kas dar neįdiegta, ir kaip Python, kaip ir CraftScript bei Lua, yra izoliuotas.
keywords: Python, Python 3, CPython, WebAssembly, izoliuotas, saugus, scenarijus, kalba, cs, ws, darbo sritis, numpy, masyvas, matrica, indeksavimas, spausdinimas, rodymas, pasitikėjimas
from: 66eab56d
---

Python yra trečioji [Scenarijų darbo srities](topic:craftscript) kalba. Pasirinkite **Python** kalbos laukelyje virš redaktoriaus (`.py` failas atsidaro Python savaime). Python, Lua ir CraftScript naudoja tuos pačius kintamuosius ir tas pačias įmontuotas funkcijas, todėl Python scenarijus gali naudoti tai, ką sukūrė CraftScript scenarijus, ir atvirkščiai.

Pirmasis Python paleidimas vizito metu įkelia pačią Python (CPython 3.14, apie 7 MB) iš šios svetainės, tai užtrunka kelias sekundes. Python dar nėra {{ui:Įrašyti neprisijungus}} dalis: pirmiausia paleiskite vieną Python scenarijų prisijungę.

## Python yra izoliuotas

Python scenarijai izoliuoti kaip CraftScript ir Lua scenarijai: jie pasiekia detalę, kintamuosius ir įmontuotas funkcijas, bet nieko daugiau. Kiekvienas paleidimas yra naujas Python savo smėlio dėžėje su mažu failų medžiu atmintyje (jo standartinė biblioteka ir `/tmp` aplankas, kuris išnyksta pasibaigus paleidimui). Jis negali pasiekti tinklo, jūsų failų ar likusio puslapio – nei naršyklėje, nei komandinėje eilutėje. Svetimas scenarijus vis tiek gali sunaudoti daug laiko ar atminties: {{ui:Sustabdyti}} jį nutraukia.

## Pagrindai

```
A = cs.magic(3)              # kiekviena įmontuota funkcija yra cs.<name>
B = A @ A.T                  # @ yra matricų sandauga, .T – transponavimas
C = A * 2 + 1                # + - * / ** veikia elementas po elemento, kaip numpy
print(A[0, 1], A[-1, -1])    # nuo 0; neigiami skaičiuojami nuo galo
row = A[1]                   # vienas indeksas matricoje: eilutė
big = A[A > 4]               # loginė kaukė parenka elementus
A[0, 0] = -5                 # priskyrimas masyvui
V, D = cs.call('eig', 2, A)  # keli rezultatai: cs.call(vardas, kiek, …)
```

- 1 × 1 masyvas tampa paprastu skaičiumi; kiti masyvai, retosios matricos, tinkleliai, laukai ir modeliai yra **Reikšmės**.
- Reikšmė turi `shape` (kortežas), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (jos eilutės), o vienam elementui – `float()`, `int()` ir `bool()`.
- Palyginimai (`<`, `==`, …) veikia elementas po elemento, kaip numpy: jie duoda loginę reikšmę.
- Skaičių sąrašai, perduodami įmontuotai funkcijai, tampa masyvais: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` sukuria matricą.
- Žodynas tampa struktūra, o įvairių daiktų sąrašas – langeliu, ir atgal.

Kiekvienas globalusis kintamasis, kurį sukuria scenarijus (skaičius, reikšmė, žodynas, sąrašas…), pasibaigus paleidimui patenka į skirtuką **Kintamieji**, net įvykus klaidai. Vardai, prasidedantys `_`, funkcijos, klasės ir moduliai lieka Python viduje. `ws.name` tiesiogiai nuskaito ar nustato kintamąjį, o `ws_names()` juos išvardija.

`print(…)` rašo į konsolę. `display(…)` (arba `cs.display`) rodo tinklelį, lauką ar grafiką, kaip CraftScript.

## Kvieskite analizės biblioteką

Bibliotekos funkcijos kviečiamos kaip įmontuotosios: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Vardą scenarijuje rašykite tiksliai taip, kaip jis yra: PartCraft suranda bibliotekos funkcijas, kurias scenarijus naudoja, prieš jam pradedant veikti.

## Dar neįdiegta

- numpy, scipy ir kiti paketai: čia yra tik paties Python standartinė biblioteka (`math`, `json`, `itertools`, `decimal`, `statistics`…), be jos langų, terminalo ir duomenų bazių dalių (`tkinter`, `curses`, `sqlite3`).
- Lizdai ir viskas, kas pasiektų išorę: čia Python neturi tinklo.
- `time.sleep` grąžina iš karto.
- Sulankstymas redaktoriuje ir Python funkcijos kvietimas iš CraftScript scenarijaus.
- Paleidimas tikrina instrukcijų biudžetą ir {{ui:Sustabdyti}} kas 1000 eilučių; ilgas skaičiavimas vienoje įmontuotoje funkcijoje pirmiausia baigiamas.
