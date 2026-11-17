---
title: Revolución dunha peza torneada
summary: Debuxe medio perfil xunto a unha liña de centro, revolúeo para formar unha peza redonda, escolla o eixe e o ángulo, e use un corte de revolución para as ranuras.
keywords: revolución, saínte de revolución, corte de revolución, peza torneada, torno, eixo, liña de centro, ranura, ángulo, corte rev
from: 593b6929
---

{{ui:Revolución}} xira un perfil ao redor dun eixe, como unha peza feita nun torno: eixes, poleas, flanxes, pomos. {{ui:Corte de revolución}} (no menú {{ui:Máis}} do grupo Elementos) xira un perfil para quitar material, para ranuras e rebaixos.

## Revolucionar un eixe escalonado

1. Debuxe sobre o **Plano Frontal**.
2. Prema {{key:N}} para {{ui:Liña de centro}}. Comece na orixe e faga clic nun punto recto á dereita, por exemplo a 100 mm. Este é o eixe. É discontinuo: a xeometría de construción non forma parte do perfil.
3. Prema {{key:L}} para Liña. Debuxe o **medio** perfil enriba da liña de centro como un único bucle pechado: comece na liña de centro, suba, dé un paso, baixe de novo á liña de centro e logo volva ao punto de inicio ao longo dela. Os seus extremos deben encontrarse: o bucle ten que estar pechado.
4. Acote os raios (alturas sobre a liña de centro) e as lonxitudes. Unha altura de 10 sobre a liña de centro dá un diámetro de 20.
5. Escolla {{ui:Saír}}.
6. Escolla {{ui:Revolución}}. Aparece o eixe, unha volta completa.

O perfil debe quedar a un só lado do eixe. Se o cruza: «O perfil cruza o eixe. Manteña o perfil nun só lado da liña de centro.» Unha aresta do perfil pode estar sobre o eixe.

## Axustes

| Axuste | Función | Predeterminado |
|---|---|---|
| **Operación** | Saínte (engade material), Corte (quita material), Intersección (mantén a superposición) ou Corpo novo | Saínte para {{ui:Revolución}}; Corte para {{ui:Máis}} › {{ui:Corte de revolución}} |
| **Ángulo (°)** | Canto xirar, desde case 0 ata 360 | 360 |
| **Eixe** | A primeira liña de centro, ou calquera liña ou liña de centro do esbozo, listada como «Liña de centro 1 (l1)» ou «Liña 3 (l3)» | A primeira liña de centro |

Un ángulo parcial fai unha cuña, xirada desde o plano do esbozo nun sentido.

Se o esbozo non ten liña de centro e deixa **Eixe** en A primeira liña de centro: «Debuxe unha liña de centro (unha liña de construción) no esbozo para revolucionar ao redor dela.» Tamén pode escoller unha liña sólida do perfil como eixe.

## Cortar unha ranura

1. Coa peza construída, abra un novo esbozo sobre o **Plano Frontal** (o mesmo plano que o esbozo do eixe).
2. Debuxe unha liña de centro sobre o mesmo eixe: comece na orixe e manteña a liña nivelada para que reciba unha H, ou escríbaa con **Engadir por coordenadas** (por exemplo, de `0, 0` a `100, 0`). Un esbozo novo non se pode axustar ás liñas doutro esbozo.
3. Debuxe un pequeno rectángulo pechado que se superpoña á aresta do eixe onde vai a ranura.
4. Escolla {{ui:Saír}}, e despois {{ui:Máis}} › {{ui:Corte de revolución}}.

## Caras de revolución en conxuntos

Unha revolución ten un eixe que outros elementos e conxuntos poden usar:

- un patrón **Circular** usa por defecto o eixe da última revolución (vexa [Patróns e espellos](topic:patterns-mirror));
- nun conxunto, unha unión entre caras feitas por revolucións comeza como unión de **revolución**, e **Centrar en** ofrece «Eixo de Revolve1» (vexa [Construír un conxunto](topic:build-assembly)).

## Curvas verdadeiras e facetas

PartCraft constrúe unha revolución co núcleo de malla (a etiqueta da barra de estado di «Núcleo de malla»): as formas redondas son facetas planas, 64 por volta por defecto, e os volumes quedan un pouco por debaixo do valor real (uns 0,16 % a 64). A vista e as exportacións STL, 3MF e STEP fanse con esas facetas: estableza **Curvas** (faga clic nun espazo baleiro e despois no panel dereito) en Fina (128) ou Moi fina (256) para que sexan máis suaves. Os cilindros, conos e toros verdadeiros necesitan un núcleo exacto: aínda sen construír nesta versión. Vexa [O núcleo de malla](topic:solid-kernels).
