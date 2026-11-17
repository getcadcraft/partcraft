---
title: Comprobar o desmoldeo para moldeo e fundición
summary: Colorear a peza segundo o seu ángulo de desmoldeo respecto á dirección de extracción dun molde, ver que caras se desmoldan, cales necesitan máis desmoldeo e cales se desmoldan desde a outra metade, con a parte da superficie de cada unha.
keywords: análise de desmoldeo, desmoldeo, conicidade, molde, moldeo, fundición a presión, moldeo por inxección, dirección de extracción, liña de partición, contrasalida, desmoldar, comprobar desmoldeo
from: 6a106f83
---

As pezas feitas nun molde, nunha matriz ou nunha fundición en area necesitan **desmoldeo**: paredes lixeiramente inclinadas para que a peza saia sen atascos. **A análise de desmoldeo** colorea cada cara segundo canto se inclina respecto á dirección na que se abre o molde (a **extracción**).

## Activar a análise

1. No espazo de traballo Deseño, abra {{ui:Vistas}} e escolla {{ui:Análise de desmoldeo}}.
2. Estableza **Extracción**: a dirección na que se abre o molde, ao longo de X, Y ou Z en calquera sentido, ou **Perpendicular a unha cara seleccionada**: prema {{ui:Seleccione unha cara}} e faga clic nunha cara plana da peza.
3. Estableza **Desmoldeo mínimo**, en graos: a inclinación mínima que necesita o seu proceso (a miúdo entre 1° e 3°).

A peza colorease así:

| Cor | Significa |
|---|---|
| Verde: **Desmoldeo positivo** | Inclinada cara á extracción polo menos o mínimo: desmóldase desde esta metade do molde |
| Ocre: **Necesita desmoldeo** | Dentro do mínimo en ambos sentidos, como unha parede vertical: engada desmoldeo aquí |
| Vermello: **Desmoldeo negativo** | Inclinada en sentido contrario á extracción polo menos o mínimo: desmóldase desde a outra metade, ou é unha contrasalida se a peza ten que saír dunha soa metade |

A parte da superficie da peza de cada clase móstrase xunto a ela. **Inverter a extracción** mira desde a outra metade do molde: o verde e o vermello intercámbianse.

As caras curvas avalíanse punto por punto, polo que un cilindro colocado atravesado á extracción mostra unha banda que necesita desmoldeo nos seus lados.

As cores seguen a peza segundo a cambia. {{key:Esc}} ou {{ui:Pechar}} desactiva a análise; non se garda nada na peza.

:::tip
Para engadir desmoldeo, use o elemento {{ui:Desmoldeo}} nas caras ocres (véxase [Barrido, lofting e desmoldeo](topic:sweep-loft-draft)), e despois comprobe de novo.
:::
