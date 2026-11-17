---
title: Scripts katika Python
summary: Andika scripts za Eneo la Script kwa Python 3: jedwali cs la kazi zilizojengwa ndani, safu kama thamani zinazofanana na numpy zenye faharasa inayoanza na 0, eneo la kazi la pamoja, kuchapisha, vilivyobaki, na jinsi Python inavyofungwa kama CraftScript na Lua.
keywords: Python, Python 3, CPython, WebAssembly, iliyofungwa, salama, script, lugha, cs, ws, eneo la kazi, numpy, safu, matriki, faharasa, print, display, uaminifu
from: 66eab56d
---

Python ni lugha ya tatu ya [Eneo la Script](topic:craftscript). Chagua **Python** kwenye kisanduku cha lugha juu ya kihariri (faili la `.py` hufunguka kwa Python lenyewe). Python, Lua na CraftScript vinashiriki vigeu vile vile na kazi zile zile zilizojengwa ndani, kwa hiyo script ya Python inaweza kutumia kilichotengenezwa na script ya CraftScript, na kinyume chake.

Endesho la kwanza la Python katika ziara moja hupakia Python yenyewe (CPython 3.14, takriban MB 7) kutoka tovuti hii, jambo linalochukua sekunde chache. Python bado si sehemu ya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}}: endesha script moja ya Python ukiwa mtandaoni kwanza.

## Python imefungwa

Scripts za Python zimefungwa kama scripts za CraftScript na Lua: zinafikia sehemu, vigeu na kazi zilizojengwa ndani, na si kitu kingine. Kila endesho ni Python mpya kwenye sanduku lake la mchanga lenye mti mdogo wa faili kwenye kumbukumbu (maktaba yake ya kawaida na folda ya `/tmp` inayotoweka baada ya endesho). Haiwezi kufikia mtandao, faili zako wala ukurasa uliobaki, iwe kwenye kivinjari au kwenye mstari wa amri. Script ya mtu mwingine bado inaweza kutumia muda au kumbukumbu nyingi: {{ui:Simamisha}} huimaliza.

## Msingi

```
A = cs.magic(3)              # kila kazi iliyojengwa ndani ni cs.<name>
B = A @ A.T                  # @ ni zidisho la matriki, .T ni geuzo
C = A * 2 + 1                # + - * / ** ni kwa kila kipengele, kama numpy
print(A[0, 1], A[-1, -1])    # inaanza na 0; hasi huhesabu kutoka mwisho
row = A[1]                   # faharasa moja kwenye matriki: safu-mlalo
big = A[A > 4]               # kinyago cha kimantiki huchagua vipengele
A[0, 0] = -5                 # kuweka thamani ndani ya safu
V, D = cs.call('eig', 2, A)  # matokeo kadhaa: cs.call(jina, ngapi, …)
```

- Safu ya 1 × 1 hufika kama namba ya kawaida; safu nyingine, matriki adimu, mesh, nyanja na modeli ni **Thamani**.
- Thamani ina `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (safu-mlalo zake), na `float()`, `int()` na `bool()` kwa kipengele kimoja.
- Ulinganisho (`<`, `==`, …) ni kwa kila kipengele, kama numpy: hutoa Thamani ya kimantiki.
- Orodha za namba zinazopewa kazi iliyojengwa ndani hugeuka safu: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` hutengeneza matriki.
- Kamusi (dict) inakuwa struct na orodha ya vitu mchanganyiko inakuwa seli, na kinyume chake.

Kila kigeu cha kimataifa ambacho script yako inatengeneza (namba, Thamani, kamusi, orodha…) huingia kwenye kichupo cha **Vigeu** endesho linapomalizika, hata baada ya hitilafu. Majina yanayoanza na `_`, kazi, madarasa na moduli hubaki ndani ya Python. `ws.name` husoma au kuweka kigeu moja kwa moja, na `ws_names()` huorodhesha.

`print(…)` huandika kwenye kiweko. `display(…)` (au `cs.display`) huonyesha mesh, nyanja au mchoro, kama katika CraftScript.

## Kuita maktaba ya uchambuzi

Kazi za maktaba zinaitwa kama zilizojengwa ndani: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Andika jina kwenye script jinsi lilivyo: PartCraft hutafuta kazi za maktaba ambazo script inatumia kabla haijaendeshwa.

## Bado hazipo

- numpy, scipy na vifurushi vingine: maktaba ya kawaida ya Python pekee (`math`, `json`, `itertools`, `decimal`, `statistics`…) ndiyo hapa, bila sehemu zake za madirisha, terminal na hifadhidata (`tkinter`, `curses`, `sqlite3`).
- Soketi na kitu chochote kingine kitakachofikia nje: Python haina mtandao hapa.
- `time.sleep` hurudi mara moja.
- Kukunja msimbo kwenye kihariri, na kuita kazi ya Python kutoka script ya CraftScript.
- Endesho hukagua bajeti ya amri na Simamisha kila mistari 1000; hesabu ndefu ndani ya kazi moja iliyojengwa ndani hukamilika kwanza.
