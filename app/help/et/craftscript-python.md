---
title: Skriptid Pythonis
summary: Kirjuta Skripti tööruumi skripte Python 3 keeles: sisseehitatud funktsioonide objekt cs, massiivid numpy-laadsete väärtustena 0-põhise indekseerimisega, jagatud tööruum, printimine, see, mida veel pole, ning kuidas Python on suletud nagu CraftScript ja Lua.
keywords: Python, Python 3, CPython, WebAssembly, suletud, turvaline, skript, keel, cs, ws, tööruum, numpy, massiiv, maatriks, indekseerimine, print, kuvamine, usaldus
from: 66eab56d
---

Python on [Skripti tööruumi](topic:craftscript) kolmas keel. Vali **Python** redaktori kohal olevast keelekastist (`.py` fail avaneb Pythonina iseenesest). Python, Lua ja CraftScript jagavad samu muutujaid ja samu sisseehitatud funktsioone, nii et Pythoni skript saab kasutada seda, mida CraftScripti skript tegi, ja vastupidi.

Esimene Pythoni käivitus külastuses laeb Pythoni ise (CPython 3.14, umbes 7 MB) sellelt saidilt, mis võtab mõne sekundi. Python ei ole veel osa funktsioonist {{ui:Salvesta võrguks}}: käivita enne üks Pythoni skript, olles võrgus.

## Python on suletud

Pythoni skriptid on suletud nagu CraftScripti ja Lua skriptid: nad pääsevad detailini, muutujateni ja sisseehitatud funktsioonideni, ja mitte millegi muuni. Iga käivitus on uus Python oma liivakastis, mille failipuu on mälus väike (selle standardteek ja `/tmp` kaust, mis käivituse lõppedes kaob). See ei pääse võrku, sinu failidele ega lehe ülejäänud osale, nii brauseris kui käsurealt. Võõras skript võib siiski kasutada palju aega või mälu: {{ui:Peata}} lõpetab selle.

## Põhitõed

```
A = cs.magic(3)              # iga sisseehitatud funktsioon on cs.<nimi>
B = A @ A.T                  # @ on maatriksikorrutis, .T transponeerimine
C = A * 2 + 1                # + - * / ** on elemendi kaupa, nagu numpys
print(A[0, 1], A[-1, -1])    # 0-põhine; negatiivne loeb lõpust
row = A[1]                   # üks indeks maatriksil: rida
big = A[A > 4]               # loogiline mask valib elemendid
A[0, 0] = -5                 # massiivi kirjutamine
V, D = cs.call('eig', 2, A)  # mitu tulemust: cs.call(nimi, mitu, …)
```

- 1 × 1 massiiv jõuab tavalise arvuna; muud massiivid, hõredmaatriksid, võrgud, väljad ja mudelid on **Väärtused**.
- Väärtusel on `shape` (monik), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (selle read), ning `float()`, `int()` ja `bool()` ühe elemendi jaoks.
- Võrdlused (`<`, `==`, …) on elemendi kaupa, nagu numpys: need annavad loogilise väärtuse.
- Sisseehitatud funktsioonile antud arvude loendid muutuvad massiivideks: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` teeb maatriksi.
- Sõnastik muutub struktuuriks ja segatud loend lahtriks, ja tagasi.

Iga globaalne muutuja, mille skript teeb (arv, väärtus, sõnastik, loend…), jõuab käivituse lõppedes vahekaardile **Muutujad**, isegi pärast viga. Nimed, mis algavad `_`-ga, funktsioonid, klassid ja moodulid jäävad Pythonisse. `ws.name` loeb või seab muutuja otse ja `ws_names()` loetleb need.

`print(…)` kirjutab konsooli. `display(…)` (või `cs.display`) kuvab võrgu, välja või graafiku, nagu CraftScriptis.

## Analüüsiteegi kutsumine

Teegi funktsioone kutsutakse nagu sisseehitatuid: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Kirjuta nimi skripti just sellisena nagu ta on: PartCraft leiab enne käivitamist teegi funktsioonid, mida skript kasutab.

## Pole veel olemas

- numpy, scipy ja muud paketid: siin on ainult Pythoni enda standardteek (`math`, `json`, `itertools`, `decimal`, `statistics`…), ilma selle akna-, terminali- ja andmebaasiosadeta (`tkinter`, `curses`, `sqlite3`).
- Pistikud ja muu, mis jõuaks väljapoole: Pythonil ei ole siin võrku.
- `time.sleep` tagastab kohe.
- Koodi kokkuvoltimine redaktoris ning Pythoni funktsiooni kutsumine CraftScripti skriptist.
- Käivitus kontrollib käskude eelarvet ja Peatamist iga 1000 rea järel; pikk arvutus ühe sisseehitatud funktsiooni sees lõpeb enne.
