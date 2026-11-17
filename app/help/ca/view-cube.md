---
title: El cub de vista
summary: Feu clic a una cara, aresta o cantonada del cub de la cantonada de la vista per mirar des d'allà, arrossegueu-lo per orbitar, gireu l'anell de la brúixola, desplaceu-vos al voltant d'una vista de cara i torneu a l'inici.
keywords: cub de vista, viewcube, cub, brúixola, nord, vista d'inici, vistes estàndard, dalt, davant, dreta, iso, cantonada, aresta, orbitar, girar la vista, icona d'eixos, indicador de cantonada, navegació
from: afc33dc7
---

El cub de vista és a la cantonada superior dreta de la vista 3D (no mentre es croquis ni al full de dibuix). Gira amb la vista, de manera que sempre mostra cap a on esteu mirant: {{ui:Dalt}} és el costat +Y de la peça (el pla Dalt), {{ui:Davant}} el costat +Z (el pla Davant mira cap a vosaltres quan hi mireu), {{ui:Dreta}} el costat +X. Es mostra transparent fins que hi apunteu.

## Mirar des d'una cara, una aresta o una cantonada

1. Apunteu el cub. La peça sota el punter s'il·lumina: el centre d'una cara, una aresta (s'il·lumina en les dues cares que la comparteixen) o una cantonada (en les tres cares).
2. Feu-hi clic. La vista gira per mirar des d'allà, mantenint el mateix centre i zoom.

Hi ha 26 llocs on fer clic: 6 cares ({{ui:Dalt}}, {{ui:Baix}}, {{ui:Davant}}, {{ui:Enrere}}, {{ui:Esquerra}}, {{ui:Dreta}}), 12 arestes i 8 cantonades. Una cantonada dona la clàssica vista de tres quarts; una aresta es veu a mig camí entre dues cares.

Fer clic a {{ui:Davant}}, {{ui:Dalt}} o {{ui:Dreta}} dona les mateixes vistes que {{ui:Vistes}} a la barra d'eines, sense ajustar el zoom.

## Orbitar arrossegant el cub

Arrossegueu el cub per girar la vista, igual que orbitar a la mateixa vista. Un arrossegament mai no es pren com un clic, de manera que podeu agafar el cub per qualsevol lloc.

## L'anell de la brúixola

L'anell sota el cub porta N, E, S i O.

- **Arrossegueu l'anell** per girar el model sobre l'eix vertical, com si estigués sobre una plataforma giratòria. L'anell segueix el punter.
- **Feu clic a una lletra** per mirar des d'aquell costat, mantenint la inclinació amb què mireu cap avall. En una vista des de dalt, la lletra que cliqueu va a la part inferior de la pantalla.

## Vistes de cara: fletxes

Quan mireu directament una cara, apareixen petites fletxes al voltant del cub:

- Els quatre **triangles** porten la cara d'aquell costat al davant: el triangle sobre el cub mostra la cara que era a dalt, i així successivament.
- Les dues **fletxes corbes** de dalt a la dreta giren la imatge un quart de volta en sentit horari o antihorari, sense canviar la cara que mireu. Useu-les per girar una planta de manera que una paret llarga travessi la pantalla.

## Inici

El botó de casa a la cantonada superior esquerra del cub torna a la vista de tres quarts i ajusta la peça. {{key:Home}} fa el mateix mentre el cub té el focus del teclat.

## Amb el teclat

Premeu {{key:Tab}} per anar al cub, i després:

| Tecla | Fa |
|---|---|
| {{key:left}} / {{key:right}} | trieu una cara, aresta o cantonada al voltant del cub, en passos de vuitè de volta (els lectors de pantalla diuen quina és) |
| {{key:up}} / {{key:down}} | trieu una de més alta o més baixa, fins a {{ui:Dalt}} o fins a {{ui:Baix}} |
| {{key:Enter}} o {{key:Space}} | mireu des de la que heu triat |
| {{key:Shift+left}} / {{key:Shift+right}} | gireu la vista un quart de volta sobre l'eix vertical |
| {{key:Home}} | la vista d'inici |
| {{key:Esc}} | surt del cub |

Les tecles premudes sobre el cub es queden amb el cub: no inicien eines de PartCraft.

## Icona d'eixos o res

Obriu {{ui:Configuració}} ({{key:Mod+,}}), la pestanya {{ui:PartCraft}}, i poseu **Indicador de cantonada** a {{ui:Cub de vista}} (el valor inicial), {{ui:Icona d'eixos}} (un petit marcador X, Y, Z a la cantonada inferior esquerra: X en vermell, Y en verd, Z en blau) o {{ui:Cap}}. Aquest navegador recorda l'elecció. Vegeu [Configuració de PartCraft](topic:settings#corner-indicator).

:::note
El cub mostra la peça tal com la construeix PartCraft: Y cap amunt, de manera que el {{ui:Dalt}} del cub és el pla Dalt. Les lletres de la brúixola només serveixen per girar; una peça no té nord.
:::
