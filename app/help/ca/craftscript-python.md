---
title: Scripts en Python
summary: Escriviu scripts de l'espai de treball Script en Python 3: l'objecte cs de funcions integrades, matrius com a valors semblants a numpy amb indexació des de 0, l'espai de treball compartit, la impressió, què encara no hi és, i com Python està aïllat com CraftScript i Lua.
keywords: Python, Python 3, CPython, WebAssembly, aïllat, segur, script, llenguatge, cs, ws, espai de treball, numpy, matriu, array, indexació, print, display, confiança
from: 66eab56d
---

Python és el tercer llenguatge de l'[espai de treball Script](topic:craftscript). Trieu **Python** a la caixa d'idioma sobre l'editor (un fitxer `.py` s'obre en Python automàticament). Python, Lua i CraftScript comparteixen les mateixes variables i les mateixes funcions integrades, de manera que un script en Python pot usar el que ha creat un script de CraftScript, i a la inversa.

La primera execució de Python en una visita carrega el propi Python (CPython 3.14, uns 7 MB) des d'aquest lloc, cosa que triga uns segons. Python encara no forma part de {{ui:Desa per fer-lo servir sense connexió}}: executeu primer un script de Python en línia.

## Python està aïllat

Els scripts de Python estan aïllats com els scripts de CraftScript i Lua: arriben a la peça, a les variables i a les funcions integrades, i a res més. Cada execució és un Python nou dins del seu propi entorn aïllat, amb un petit arbre de fitxers en memòria (la seva biblioteca estàndard i una carpeta `/tmp` que desapareix després de l'execució). No pot arribar a la xarxa, als vostres fitxers ni a la resta de la pàgina, ni al navegador ni a la línia d'ordres. Un script d'una altra persona encara pot consumir molt temps o memòria: {{ui:Atura}} el finalitza.

## L'essencial

```
A = cs.magic(3)              # cada funció integrada és cs.<nom>
B = A @ A.T                  # @ és el producte de matrius, .T la transposta
C = A * 2 + 1                # + - * / ** són element a element, com a numpy
print(A[0, 1], A[-1, -1])    # des de 0; els negatius compten des del final
row = A[1]                   # un índex en una matriu: una fila
big = A[A > 4]               # una màscara lògica tria elements
A[0, 0] = -5                 # assignar dins d'una matriu
V, D = cs.call('eig', 2, A)  # diversos resultats: cs.call(nom, quants, …)
```

- Una matriu d'1 × 1 arriba com a nombre simple; les altres matrius, matrius disperses, malles, camps i models són **Valors**.
- Un Valor té `shape` (una tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (les seves files), i `float()`, `int()` i `bool()` per a un sol element.
- Les comparacions (`<`, `==`, …) són element a element, com a numpy: donen un Valor lògic.
- Les llistes de nombres passades a una funció integrada es converteixen en matrius: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` crea una matriu.
- Un diccionari es converteix en una estructura i una llista de coses barrejades en una cel·la, i a la inversa.

Cada variable global que faci el vostre script (un nombre, un Valor, un diccionari, una llista…) arriba a la pestanya **Variables** quan acaba l'execució, fins i tot després d'un error. Els noms que comencen per `_`, les funcions, les classes i els mòduls es queden dins de Python. `ws.name` llegeix o assigna una variable directament, i `ws_names()` les llista.

`print(…)` escriu a la consola. `display(…)` (o `cs.display`) mostra una malla, un camp o un gràfic, com a CraftScript.

## Crida la biblioteca d'anàlisi

Les funcions de la biblioteca es criden com les integrades: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Escriviu el nom al script tal com és: PartCraft troba les funcions de la biblioteca que usa un script abans d'executar-lo.

## Encara no hi és

- numpy, scipy i altres paquets: només hi ha la biblioteca estàndard pròpia de Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), sense les seves parts de finestres, terminal i bases de dades (`tkinter`, `curses`, `sqlite3`).
- Sockets i qualsevol cosa que sortiria fora: Python no té xarxa aquí.
- `time.sleep` retorna de seguida.
- El plegat a l'editor, i cridar una funció de Python des d'un script de CraftScript.
- Una execució comprova el pressupost d'instruccions i {{ui:Atura}} cada 1000 línies; un càlcul llarg dins d'una funció integrada acaba primer.
