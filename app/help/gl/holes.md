---
title: Taladrar buratos e rebaixos en puntos de esbozo
summary: Coloque puntos nun esbozo sobre unha cara, faga buratos simples, con rebaixo, avellanados ou roscados (ISO métrico) en cada punto, defina diámetro e profundidade, e corrixa os buratos que taladran no sentido equivocado.
keywords: burato, asistente de buratos, taladrar, rosca modelada, impresión 3D, rebaixo, cbore, avellanado, csink, burato roscado, rosca, broca de roscado, rosca métrica, M6, pasante total, burato cego, burato de parafuso, puntos, centros de buratos
from: 8e1eef83
---

{{ui:Burato}} taladra un burato en cada punto libre dun esbozo. Un punto libre é o creado coa ferramenta Punto, non o extremo dunha liña nin o centro dun círculo.

## Taladrar buratos nunha cara

1. Prema a cara plana onde taladrar, logo escolla {{ui:Esbozo sobre esta cara}}.
2. Prema {{key:P}} e prema onde vai cada burato. Acote os puntos desde as arestas ou a orixe se importa a súa posición (ver [Defina totalmente un esbozo](topic:relations-dimensions)).
3. Escolla {{ui:Saír}}.
4. Escolla {{ui:Burato}}.

Os buratos atravesan a peza, de 6 mm de diámetro. O panel da dereita mostra **Buratos**: cantos se fixeron, «un por punto do esbozo».

**Un burato, rápido:** prema a cara plana onde vai o burato e escolla {{ui:Burato aquí}} no panel da dereita. PartCraft engade un esbozo na cara cun punto onde premeu e un burato que atravesa a peza, nun só paso. Escriba un número de seguido e prema {{key:Enter}} para o seu diámetro. Para situalo con exactitude, abra o novo esbozo e acote o punto.

**Que esbozo se usa:** o que acaba de pechar ou o seleccionado; se non, o esbozo sen usar máis recente que teña puntos libres. Se non hai ningún: «Faga primeiro un esbozo con puntos onde vaian os buratos (Esbozo sobre unha cara, logo Punto)».

## Axustes

| Axuste | Opcións | Predeterminado |
|---|---|---|
| **Tipo** | Simple, Rebaixo, Avellanado, Roscado (ISO métrico) | Simple |
| **Diámetro (mm)** | O diámetro do burato | 6 |
| **Pasante total** | Marcado: atravesando toda a peza. Desmárqueo para un burato cego | Marcado |
| **Profundidade (mm)** | Móstrase cando Pasante total está desmarcado | 10 |
| **Diámetro do rebaixo ⌀** | Móstrase para Rebaixo: o diámetro do oco máis ancho | 11 |
| **Profundidade do rebaixo** | Móstrase para Rebaixo | 6 |
| **Inverter dirección** | Taladra ao outro lado do plano do esbozo | Desactivado |

Os buratos taladran o material, perpendiculares ao plano do esbozo. A profundidade dun burato cego mídese desde o plano do esbozo; o seu fondo é plano.

## Burato de parafuso con rebaixo

1. Faga os buratos como se indicou enriba.
2. Defina **Tipo** como **Rebaixo**.
3. Defina **Diámetro (mm)** en `6.6` (xogo para un parafuso M6), **Diámetro do rebaixo ⌀** en `11` e **Profundidade do rebaixo** en `6.5`.

O rebaixo debe ser máis ancho que o burato («O rebaixo debe ser máis ancho que o burato.») e, para un burato cego, menos fondo que el («O rebaixo debe ser menos fondo que o burato.»).

## Círculo de parafusos

Para buratos espazados de xeito uniforme arredor dun centro, faga **un** burato e fágao en patrón: seleccione o elemento Burato, logo escolla {{ui:Circular}} (ver [Patróns e elementos de espello](topic:patterns-mirror)). O patrón segue o tamaño cando cambia o tamaño do burato.

## Cando os buratos van no sentido equivocado

- «Non hai nada que taladrar nese lado do esbozo. Probe a inverter a dirección.» O esbozo está no lado afastado do material. Marque **Inverter dirección**.
- «Coloque puntos de esbozo onde vaian os buratos (ferramenta Punto), logo faga o burato.» O esbozo non ten puntos libres. Os extremos de liña e os centros de círculo non contan.
- «Aínda non hai nada que taladrar.» Un burato necesita un sólido. Faga primeiro un resalte.

## Buratos en conxuntos

Cada burato ten un eixe. Nun conxunto, **Centrar en** pode colocar unha unión no eixe dun burato, listada como «Burato1, burato 2», para que unha peza de pasador ou parafuso se aliñe con el. Ver [Construír un conxunto](topic:build-assembly).

## Buratos avellanados

Defina **Tipo** como **Avellanado**, logo **Diámetro do avellanado ⌀** (na superficie) e **Ángulo do avellanado**: 90° (parafusos de cabeza plana métricos ISO) ou 82° (parafusos en polgadas). Tome o diámetro do avellanado dos datos do fabricante do parafuso (un pouco máis que o diámetro da cabeza). A cara do cono recibe o nome «avellanado» nos paneis.

## Buratos roscados

Defina **Tipo** como **Roscado (ISO métrico)** e escolla a **Rosca**, de M2 a M24 de paso groso. O burato tallase co tamaño de broca de roscado da táboa de abaixo (diámetro nominal menos paso, ata a serie de brocas, como indica ISO 2306 para unha rosca 6H); a caixa **Diámetro (mm)** non se usa. Para un burato cego, **Profundidade da rosca (mm)** define ata onde chega a rosca.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paso | 0,4 | 0,45 | 0,5 | 0,7 | 0,8 | 1 | 1,25 | 1,5 | 1,75 | 2 | 2 | 2,5 | 2,5 | 2,5 | 3 |
| Broca de roscado ⌀ | 1,6 | 2,05 | 2,5 | 3,3 | 4,2 | 5 | 6,8 | 8,5 | 10,2 | 12 | 14 | 15,5 | 17,5 | 19,5 | 21 |

A rosca é ao principio **cosmética**: o modelo ten o burato taladrado, a vista debuxa o diámetro maior da rosca como círculos de trazos, e a folla de debuxo leva o chamado como nota, por exemplo «4× M8×1.25 - 6H, rosca pasante». STEP exporta só o burato taladrado.

Marque **Modelada** para cortar a rosca helicoidal real no burato, para impresión 3D. **Xogo (mm)** a fai tanto máis grande por todos os lados, para que encaixe un parafuso impreso: 0,1 a 0,2 mm adáptase á maioría das impresoras. O chamado remata entón en «(modelada)». Ver [Roscas en eixes e buratos, debuxadas ou modeladas](topic:threads), que tamén pon roscas en eixes.

:::note
Os buratos con contrataladro, as roscas en polgadas e as roscas de tubo aínda non están implementados.
:::
