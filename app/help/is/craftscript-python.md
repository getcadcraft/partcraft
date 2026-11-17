---
title: Skriftur í Python
summary: Skrifaðu skriftur fyrir Skriftvinnusvæðið í Python 3: cs-hluturinn með innbyggðum föllum, fylki sem numpy-líkt gildi með 0-byrjaðri vísun, sameiginlega vinnusvæðið, prentun, það sem er ekki komið enn, og hvernig Python er lokað af eins og CraftScript og Lua.
keywords: Python, Python 3, CPython, WebAssembly, lokað, öruggt, skrift, tungumál, cs, ws, vinnusvæði, numpy, fylki, tvívítt fylki, vísun, prentun, birting, traust
from: 66eab56d
---

Python er þriðja tungumál [Skriftvinnusvæðisins](topic:craftscript). Veldu **Python** í tungumálareitnum fyrir ofan ritilinn (`.py`-skrá opnast í Python af sjálfu sér). Python, Lua og CraftScript deila sömu breytum og sömu innbyggðu föllum, þannig að Python-skrift getur notað það sem CraftScript-skrift bjó til, og öfugt.

Fyrsta Python-keyrslan í heimsókn hleður Python sjálfu (CPython 3.14, um 7 MB) frá þessari síðu, sem tekur nokkrar sekúndur. Python er ekki hluti af {{ui:Vista til notkunar án nettengingar}} enn: keyrðu eina Python-skrift á netinu fyrst.

## Python er lokað af

Python-skriftur eru lokaðar af eins og CraftScript- og Lua-skriftur: þær ná í hlutann, breyturnar og innbyggðu föllin, og ekkert annað. Hver keyrsla er ný Python í eigin sandkassa með litlu skráartré í minni (staðlaða safnið og `/tmp`-möppu sem hverfur eftir keyrsluna). Hún nær ekki í netið, skrárnar þínar eða restina af síðunni, hvort sem er í vafranum eða á skipanalínunni. Skrift frá öðrum getur samt notað mikinn tíma eða minni: {{ui:Stöðva}} endar hana.

## Grunnatriði

```
A = cs.magic(3)              # sérhvert innbyggt fall er cs.<nafn>
B = A @ A.T                  # @ er fylkjamargfeldi, .T umsnúningurinn
C = A * 2 + 1                # + - * / ** vinna stak fyrir stak, eins og í numpy
print(A[0, 1], A[-1, -1])    # 0-byrjað; neikvæð tala telur frá endanum
row = A[1]                   # ein vísun á fylki: röð
big = A[A > 4]               # rökgrímur velja stök
A[0, 0] = -5                 # úthlutun í fylki
V, D = cs.call('eig', 2, A)  # nokkrar útkomur: cs.call(nafn, hversu margar, …)
```

- 1 × 1 fylki kemur sem venjuleg tala; önnur fylki, strjál fylki, net, reitir og líkön eru **Gildi**.
- Gildi hefur `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (raðir þess), og `float()`, `int()` og `bool()` fyrir eitt stak.
- Samanburður (`<`, `==`, …) er stak fyrir stak, eins og í numpy: hann gefur rökgildi.
- Listar af tölum sem eru sendir í innbyggt fall verða að fylkjum: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` býr til fylki.
- Orðabók verður að strúktúr og listi af blönduðum hlutum að hólfi, og öfugt.

Sérhver alþjóðleg breyta sem skriftan þín býr til (tala, Gildi, orðabók, listi…) lendir í flipanum **Forritsbreytur** þegar keyrslunni lýkur, líka eftir villu. Nöfn sem byrja á `_`, föll, klasar og einingar haldast í Python. `ws.name` les eða setur breytu beint, og `ws_names()` telur þær upp.

`print(…)` skrifar í stjórnborðið. `display(…)` (eða `cs.display`) birtir net, reit eða línurit, eins og í CraftScript.

## Kalla á greiningarsafnið

Föll safnsins eru kölluð eins og innbyggð: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Skrifaðu nafnið í skriftuna eins og það er: PartCraft finnur föll safnsins sem skriftan notar áður en hún keyrir.

## Ekki komið enn

- numpy, scipy og aðrir pakkar: aðeins staðlaða safn Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) er hér, án glugga-, skipanalínu- og gagnagrunnshlutanna (`tkinter`, `curses`, `sqlite3`).
- Innstungur og allt annað sem myndi ná út fyrir: Python hefur ekkert net hér.
- `time.sleep` skilar strax.
- Felling í ritlinum, og kall á Python-fall úr CraftScript-skrift.
- Keyrsla athugar aðgerðamörk og {{ui:Stöðva}} á 1000 lína fresti; löng útreikningur inni í einu innbyggðu falli klárast fyrst.
