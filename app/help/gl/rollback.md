---
title: Retroceder e avanzar polo historial
summary: Mova a barra de retroceso un elemento de cada vez para ver como se constrúe a peza, insira elementos no medio e volva ao final.
keywords: retroceso, retroceder, avanzar, barra de retroceso, percorrer o historial, inserir elemento, conxelar, historial
from: 9a366cae
---

A barra de retroceso decide canta parte do historial se constrúe. Os elementos por debaixo dela aparecen en gris e sen construír; os elementos novos entran na barra.

## Percorrer un elemento de cada vez

Con a peza na pantalla (sen esbozo nin debuxo aberto):

| Acción | Resultado |
|---|---|
| {{key:[}} ou o botón de frecha cara arriba ao lado do nome da peza | A barra sobe un elemento |
| {{key:]}} ou o botón de frecha cara abaixo | A barra baixa un elemento |
| {{key:End}} ou o botón de levar a barra ao final | Todos os elementos se constrúen de novo |

A barra de estado indica onde está a barra, por exemplo «Barra de retroceso despois de Esbozo1: 1 de 2 elementos construídos». Os botóns quedan desactivados cando a barra non se pode mover máis nesa dirección.

Tamén pode escoller {{ui:Retroceder ata aquí}} en calquera elemento, ou facer clic en **Barra de retroceso · avanzar** no historial.

## Inserir un elemento no medio

1. Retroceda a barra ata que quede onde debe ir o novo elemento.
2. Engada o elemento: entra na barra.
3. Prema {{key:End}} para construír o resto do historial sobre el.

Cada movemento da barra é un paso que se pode desfacer con {{key:Mod+Z}}. A posición da barra gárdase no ficheiro, así que unha peza pode enviarse retrocedida. A ferramenta de liña de comandos tamén a move: `partcraft rollback part.json` e `partcraft forward part.json --end`.
