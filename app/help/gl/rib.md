---
title: Nervaduras e cartelas
summary: Reforce unha peza cunha nervadura debuxada como unha liña: énchese desde a liña ata as paredes, cun grosor fixo a través do plano do esbozo, do lado que escolla.
keywords: nervadura, cartela, alma, rigidizador, puntal, escuadra, soporte de esquina, parede fina, reforzar
from: 5c218881
---

:::note
**Aínda sen construír nesta versión.** A nervadura necesita un núcleo xeométrico exacto, que esta versión de PartCraft non ten: constrúe todas as pezas co núcleo de malla. [O que aínda non está construído](topic:not-built-yet) explica que facer no seu lugar. O resto desta páxina describe como funciona cun núcleo exacto.
:::

Unha **nervadura** (ou cartela) é unha parede fina que rigidiza unha peza, como o triángulo dentro da esquina dunha escuadra en L. Debuxa só o seu bordo libre: PartCraft enche o espazo entre esa liña e as paredes. Precisa o **núcleo exacto** (vexa [O núcleo de malla](topic:solid-kernels)).

## Engadir unha nervadura

1. Cree un plano que pase polo medio de onde vai a nervadura (para unha escuadra en L de 40 de fondo, un plano 20 por diante do seu esbozo: vexa [Planos, eixes e puntos de referencia](topic:reference-geometry)).
2. Debuxe sobre el **unha liña** de parede a parede, ou varias liñas de extremo a extremo para un bordo de nervadura dobrado. A liña pode quedar curta das paredes: os seus extremos prolóngase ata que as alcanzan.
3. Seleccione o esbozo e escolla {{ui:Máis}} › {{ui:Nervadura}}.

A nervadura énchese desde a liña ata as paredes, do lado cara ao centro da peza, así que a cartela cae na esquina interior. Se ese lado está aberto e o outro pechado, PartCraft inviértello e avísao.

## Axustes

- **Grosor (mm)** é o grosor da nervadura a través do plano do esbozo. Pode controlarse cun parámetro.
- **Grosor** (a opción debaixo): **Centrado no plano do esbozo**, **Diante do plano** (ao longo da súa normal) ou **Detrás do plano**.
- **Inverter** enche o outro lado da liña.

## Mensaxes

- **Neste lado o bordo da nervadura non chega nunca ao corpo**: non se pecha nada no espazo dese lado. Marque ou desmarque **Inverter**, ou mova a liña para que as paredes a limiten.
- **Unha nervadura necesita unha cadea aberta de liñas no seu esbozo**: o esbozo ten unha forma pechada, un arco ou unha spline, ou liñas que non se unen extremo con extremo.
- **O bordo da nervadura pasa dentro do corpo nese punto**: a liña está dentro do sólido; debúxea no espazo aberto entre as paredes.
