---
title: Sondaxe: atopar a peza e fixar o desprazamento de orixe
summary: Toque unha cara superior, un lado, un burato ou un saínte cunha sonda e deixe que o control mova o desprazamento de orixe ata onde está realmente a peza, ou só mida. O que pode facer cada control e o que non foi probado.
keywords: sonda, sondaxe, sonda de palpado, toque, desprazamento de orixe, g54, g31, g38.2, salto, referencia, atopar o centro, burato, saínte, bordo, poñer a cero, medir, inspección, g10
from: 1f718b82
---

{{ui:Sonda}} en Fabricación escribe un ciclo de sondaxe no programa: a sonda toca a peza, e o control move o desprazamento de orixe (G54) pola diferenza entre onde se atopou a superficie e onde a sitúa o modelo. As operacións posteriores cortan entón onde está realmente a peza.

**Nada disto foi executado nunha máquina.** Os movementos antes dun toque son movementos ordinarios: a sonda non se vixía ata o propio movemento de sondaxe. Execútea amodo, primeiro no aire, coa man sobre a parada de avance.

## Uso

1. Na lapela **Ferramentas**, a primeira operación de sonda engade unha **sonda de toque**: o seu diámetro de esfera e o avance de sondaxe (100 mm/min salvo que fixe outro).
2. Prema en {{ui:Máis}} na barra de Fabricación, despois en {{ui:Sonda}}, e prema no que hai que tocar. Cada selección é un ciclo, na orde en que preme:

| Selección | O ciclo | O que se fixa |
|---|---|---|
| Unha cara plana que mira ao eixo da ferramenta | Un toque baixando | Z |
| Unha cara lateral plana perpendicular a X ou a Y | Un toque dirixido á cara, un pouco por debaixo do seu alto | X ou Y |
| Un burato ou un saínte ao longo do eixe da ferramenta | Catro toques (+X, −X, +Y, −Y) | X e Y do seu centro |

3. **Co resultado**: {{ui:Fixar o desprazamento de orixe}} ou {{ui:Só medir}}.
4. **Comezar a esta distancia** e **Buscar máis aló desta distancia** indican canto antes da superficie esperada comeza o movemento de sondaxe e canto máis alá pode viaxar a sonda antes de que o control se rinda. **Profundidade** é canto por debaixo do alto dun burato, saínte ou cara lateral baixa a esfera.

Coloque a operación de sondaxe primeiro, antes de que corte calquera cousa.

## Que escribe cada control

| Control | Toque | Resultado |
|---|---|---|
| Estilo Fanuc | `G31`, a posición gardada en `#101` a `#104` | As variables de desprazamento (`#5221` a `#5223`) móvense por atopado − esperado. Só medir: a diferenza queda en `#110` (e `#111`). |
| LinuxCNC | `G38.2`, a posición gardada en parámetros con nome | `G10 L2 P1` co novo desprazamento. Só medir: unha mensaxe `(DEBUG, …)`. |
| GRBL | `G38.2` | Un toque fixa o eixe con `G10 L20 P1`. GRBL non ten variables, así que **non pode calcular un centro**: o ficheiro di isto nun comentario e non fixa nada. |

A aritmética é do post, así que pode cambiala: os eventos son `probe-move` e `probe-set` ([Post-procesadores editables](topic:post-processors)).

## Límites

- Un só desprazamento de orixe (G54). Só caras perpendiculares aos eixes: sen ángulo, sen ciclo de esquina, sen xiro da peza.
- Sen axustador de ferramenta, sen comprobación de ferramenta rota, sen medir un tamaño contra unha tolerancia, sen informe.
- O cabezal non se pon en marcha para unha sonda e o refrigerante queda apagado; nada comproba que a ferramenta do cabezal sexa unha sonda.
- A simulación do material non executa unha traxectoria de sondaxe.
- A calibración da propia sonda (desprazamento da esfera, deflexión do estilete, dirección de disparo) é do control.
