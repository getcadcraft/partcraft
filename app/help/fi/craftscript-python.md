---
title: Skriptit Python-kielellä
summary: Kirjoita Skripti-työtilan skriptejä Python 3:lla: cs-objekti sisäänrakennetuista funktioista, taulukot numpy-tyylisinä arvoina nollapohjaisella indeksoinnilla, jaettu työtila, tulostus, mitä ei vielä ole, ja miten Python on eristetty samoin kuin CraftScript ja Lua.
keywords: Python, Python 3, CPython, WebAssembly, eristetty, turvallinen, skripti, kieli, cs, ws, työtila, numpy, taulukko, matriisi, indeksointi, tulostus, näyttö, luottamus
from: 66eab56d
---

Python on [Skripti-työtilan](topic:craftscript) kolmas kieli. Valitse **Python** editorin yläpuolella olevasta kielilaatikosta (`.py`-tiedosto avautuu Pythonissa itsestään). Python, Lua ja CraftScript jakavat samat muuttujat ja samat sisäänrakennetut funktiot, joten Python-skripti voi käyttää CraftScript-skriptin tekemiä asioita ja päinvastoin.

Ensimmäinen Python-ajo yhden käynnin aikana lataa itse Pythonin (CPython 3.14, noin 7 MB) tältä sivustolta, mikä vie muutaman sekunnin. Python ei ole vielä osa {{ui:Tallenna offline-käyttöön}}-toimintoa: aja ensin yksi Python-skripti verkkoyhteydessä.

## Python on eristetty

Python-skriptit ovat eristettyjä kuten CraftScript- ja Lua-skriptit: ne tavoittavat osan, muuttujat ja sisäänrakennetut funktiot, eivät muuta. Jokainen ajo on uusi Python omassa hiekkalaatikossaan, jossa on pieni muistissa oleva tiedostopuu (sen vakiokirjasto ja `/tmp`-kansio, joka katoaa ajon jälkeen). Se ei tavoita verkkoa, tiedostojasi eikä muuta sivua, selaimessa eikä komentorivillä. Toisen tekemä skripti voi silti käyttää paljon aikaa tai muistia: {{ui:Pysäytä}} lopettaa sen.

## Olennaiset asiat

```
A = cs.magic(3)              # jokainen sisäänrakennettu funktio on cs.<name>
B = A @ A.T                  # @ on matriisitulo, .T transponointi
C = A * 2 + 1                # + - * / ** toimivat alkio kerrallaan, kuten numpyssa
print(A[0, 1], A[-1, -1])    # 0-pohjainen; negatiiviset lasketaan lopusta
row = A[1]                   # yksi indeksi matriisilla: rivi
big = A[A > 4]               # looginen maski valitsee alkiot
A[0, 0] = -5                 # sijoitus taulukkoon
V, D = cs.call('eig', 2, A)  # useita tuloksia: cs.call(name, montako, …)
```

- 1 × 1 -taulukko saapuu tavallisena lukuna; muut taulukot, harvat matriisit, verkot, kentät ja mallit ovat **Arvoja**.
- Arvolla on `shape` (monikko), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (sen rivit), ja `float()`, `int()` ja `bool()` yksittäiselle alkiolle.
- Vertailut (`<`, `==`, …) toimivat alkio kerrallaan, kuten numpyssa: ne antavat loogisen Arvon.
- Sisäänrakennetulle funktiolle annetut lukulistat muuttuvat taulukoiksi: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` tekee matriisin.
- Dict muuttuu structiksi ja sekalainen lista soluksi, ja takaisin.

Jokainen yleinen muuttuja, jonka skriptisi tekee (luku, Arvo, dict, lista…), päätyy **Muuttujat**-välilehdelle ajon päätyttyä, vaikka tapahtuisi virhe. `_`:lla alkavat nimet, funktiot, luokat ja moduulit pysyvät Pythonissa. `ws.name` lukee tai asettaa muuttujan suoraan, ja `ws_names()` luettelee ne.

`print(…)` kirjoittaa konsoliin. `display(…)` (tai `cs.display`) näyttää verkon, kentän tai kuvaajan, kuten CraftScriptissä.

## Kutsu analyysikirjastoa

Kirjastofunktioita kutsutaan kuten sisäänrakennettuja: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Kirjoita nimi skriptiin sellaisenaan: PartCraft löytää skriptin käyttämät kirjastofunktiot ennen ajoa.

## Ei vielä saatavilla

- numpy, scipy ja muut paketit: täällä on vain Pythonin oma vakiokirjasto (`math`, `json`, `itertools`, `decimal`, `statistics`…), ilman sen ikkuna-, pääte- ja tietokanta-osia (`tkinter`, `curses`, `sqlite3`).
- Socketit ja kaikki muu, mikä yltäisi ulos: Pythonilla ei ole täällä verkkoa.
- `time.sleep` palaa heti.
- Taittaminen editorissa sekä Python-funktion kutsuminen CraftScript-skriptistä.
- Ajo tarkistaa käskybudjetin ja Pysäytä-painikkeen 1000 rivin välein; pitkä laskenta yhden sisäänrakennetun funktion sisällä valmistuu ensin.
