---
title: Executar desde unha memoria USB
summary: Que escriben as ferramentas de enxeñaría e onde, para que CadCraft Studio poida executarse desde unha memoria USB ou desde calquera cartafol sen instalador e sen dereitos de administrador: configuración, xeradores, cachés e ficheiros de peza, e o que queda na memoria.
keywords: usb, portátil, sen instalador, administrador, admin, configuración, cartafol de datos, xeradores, onde se escriben os ficheiros, sen conexión, privacidade, acceso ao equipo
from: 263efc79
---

As ferramentas de enxeñaría (os xeradores, a biblioteca de enxeñaría, as comprobacións e os ficheiros de datos) non precisan **dereitos de administrador** nin **instalador**. Escriben só o que aparece nesta lista, e nada máis.

| Que | Onde se garda |
|---|---|
| As túas pezas, cos seus corpos xerados, follas de datos e comprobacións | O ficheiro de peza que gardas (`.partcraft.json`), no lugar onde o gardas. |
| Xeradores que abriches desde ficheiros | No almacenamento propio da aplicación: o almacenamento local do navegador nunha páxina web, e o cartafol `data` xunto ao programa no Studio portátil. Como máximo 20. |
| Configuración (tamaños de voxel que fixeches, fíos do solucionador, a disposición) | No mesmo almacenamento da aplicación. |
| Follas de datos, campos, mallas | Só onde os gardas: a descarga vai onde ti escolllas. |

As ferramentas non fan **chamadas de rede propias**: os xeradores que se distribúen son ficheiros do cartafol da propia aplicación; a biblioteca e as comprobacións execútanse no teu ordenador, nun proceso en segundo plano (worker) que non pode acceder á rede; e os datos de enxeñaría (propiedades da auga e do aire, materiais) están dentro da aplicación. Un xerador que abres desde un ficheiro lese no teu ordenador e non sae de aí.

## O zip portátil de Windows e Linux

O Studio portátil para Windows garda a configuración, as cachés e os complementos nun cartafol `data` xunto ao programa. O AppImage de Linux gárdaos xunto a si mesmo cando hai un ficheiro chamado `portable` ao seu lado; sen ese ficheiro usa a túa cartafol persoal. Non hai forma portátil para Mac: o sistema impide que unha aplicación descargada escriba ao seu lado. As notas de portabilidade propias do shell (a axuda de `Studio`) listan o que escribe o programa.

## Acceso ao equipo

Aquí non se pide acceso ao equipo. As impresoras, as máquinas en serie e os dispositivos USB son outra cousa: piden acceso cando un traballo os precisa, unha vez por dispositivo, e nin os xeradores nin as comprobacións os tocan.
