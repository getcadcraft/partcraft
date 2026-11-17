---
title: Escriure la vostra pròpia anàlisi
summary: Construïu una anàlisi com a scripts de l'espai de treball Script: generar la malla de la peça, muntar i resoldre, mostrar el camp i un gràfic de convergència, comparar el resultat amb un càlcul a mà i mantenir els passos com a scripts separats que comparteixen variables.
keywords: anàlisi pròpia, anàlisi personalitzada, script FEA, elements finits, muntar, rigidesa, condicions de contorn, resoldre, pcg, dispersa, camp, postprocés, convergència, verificació, càlcul a mà, comprovació, flux de treball
from: 0f471a8e
---

Una anàlisi a l'espai de treball Script és un conjunt de scripts curts que es passen variables entre si. Comenceu per una funció de la [biblioteca](topic:craftscript-library) que s'assembli al que necessiteu, feu-ne una còpia i canvieu-la; o construïu-ne una de zero tal com s'explica a continuació.

## 1. Una malla

```
model = part();                  % la peça que modeleu, com a model
m = tetmesh(model, 4);           % tetraedres d'uns 4 mm
show(m)
```

Comproveu la malla a la vista abans de continuar: {{key:F}} ajusta la vista, i l'{{ui:ull}} de **Mostrats** amaga la peça.

## 2. Munteu i resoleu

Escriviu el bucle d'elements en el script (es llegeix com el llibre de text), i deixeu les parts pesants a les funcions integrades: matrius d'elements, muntatge dispers a partir de triplets, i el solucionador de gradient conjugat amb un precondicionador. Una funció de la biblioteca com `static_tet` (quan la biblioteca la inclogui) és un exemple complet per copiar.

## 3. Mostreu el resultat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % un valor per node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- El rang de la llegenda es pot escriure o tornar a {{ui:Auto}}.
- Feu clic a la malla per llegir els valors en un node.
- Un gràfic que manté el mateix `'id'` s'actualitza al lloc, així que imprimiu i traceu dins del bucle per veure com convergeix.

## 4. Comproveu-la

Compareu amb alguna cosa que conegueu: la flexió de l'extrem d'un voladís amb PL³/3EI, una placa amb un forat amb el seu factor de concentració de tensions, les reaccions amb les càrregues. Escriviu la comprovació com el seu propi script perquè s'executi de nou després de cada canvi:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Conserveu-la

- Cada pas pot ser la seva pròpia pestanya de script: comparteixen les variables, així que executeu-les una després de l'altra.
- Els scripts es desen dins de la peça. Marqueu **Desa les variables amb la peça** a la pestanya Variables per conservar també els resultats (fins a 32 MB).
- {{ui:Desa}} al grup Script baixa un script per compartir-lo; {{ui:Obre}} n'obre un.
