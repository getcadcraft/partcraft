---
title: Enviar un debuxo a un láser
summary: Escolla o que fai cada capa (cortar, riscar, gravar, encher, imaxe), vexa o previo dos movementos do cabezal, grave o G-code de modo láser GRBL ou envíeo desde o navegador despois de enmarcar o traballo.
keywords: láser, cortadora láser, gravadora láser, GRBL, G-code, gravar, encher, dithering, gravado de imaxes, riscar, cortar, Web Serial, Linux, enmarcar o traballo, potencia, velocidade, pasadas
from: 327b3c46
---

O panel {{ui:Laser}} converte as capas dun debuxo nun programa para un láser que funciona con GRBL (a maioría dos controladores domésticos e de pequenos talleres, de díodo e de CO2). En PartCraft, escolla {{ui:Export}} › {{ui:Laser program…}} e despois {{ui:Add outlines from a DXF…}}: os contornos e os buratos entran na capa CUT. As planas das pezas de chapa (coas súas liñas de dobrado na capa BEND) precisan o núcleo exacto, que esta versión non ten. Os axustes gárdanse no ficheiro da peza ou da montaxe.

:::warning
Probe cada axuste en retallo primeiro, use protección ocular adecuada para o seu láser, manteña a tapa pechada onde haxa unha, e nunca deixe un láser en funcionamento sen vixilancia. Os números con que empeza unha capa son marcadores de posición, non recomendacións para ningún material.
:::

## Escoller o que fai cada capa

Cada capa do debuxo é unha fila. {{ui:Does}} a pon en **Cortar**, **Riscar**, **Gravar liñas**, **Encher formas**, **Gravar imaxe** ou **Non enviado**, cunha {{ui:Power %}}, unha {{ui:Speed mm/min}} e un número de {{ui:Passes}}.

- **Encher** queima o interior das formas pechadas en liñas separadas {{ui:Line spacing}}, nun {{ui:Angle}}, en ambos sentidos ou nun só, con un sobrecorrido para que o cabezal vaia a velocidade cando o láser se acende; a trama cruzada engade unha segunda pasada a 90°. Unha forma con burato queda aberta no burato.
- **Gravar imaxe** converte unha imaxe en puntos (Floyd–Steinberg, Atkinson, ordenado, ou simplemente preto e branco cun limiar) ou, con *Niveis de gris*, en potencia variable.
- Orde: primeiro as imaxes e os recheos, despois a gravación de liñas, despois os riscos e por último os cortes, para que unha peza cortada non se mova mentres se grava. Dentro dunha capa os trazos van **do interior ao exterior** (un burato antes da placa que o contén), sempre co máis próximo a seguir.

## Previo, e despois gardar

O previo debuxa o que fai o cabezal: liñas de queima en cor, movementos rápidos en gris, e unha caixa verde ao redor de todo o que queima. Debaixo aparecen o tamaño, a lonxitude de queima e unha estimación de tempo (sen aceleración; unha máquina real tarda máis). {{ui:Save G-code…}} escribe G-code de modo láser GRBL: `$32=1`, `M4` (ou `M3`) con valores S, movementos `G0` e `G1`, e `M5` ao final. X0 Y0 é a esquina inferior esquerda do traballo, salvo que escolla a orixe do debuxo: nese punto debe fixar o cero de traballo da súa máquina. O G-code segue o modo láser documentado de GRBL; aínda non se probou nun láser real.

## Enviar desde o navegador

En Chrome e Edge, {{ui:Connect…}} pide que escolla o porto USB do láser. Non se conecta nin se envía nada ata que prema un botón. Prema {{ui:Frame the job}} primeiro: o cabezal traza a caixa do traballo con o láser **apagado** (ou á potencia baixa que fixe para un punteiro) para que vexa onde queimará. Só entón se activa {{ui:Send job}}, e desactívase de novo se cambia algo. {{ui:Pause}} deixa o cabezal parado, {{ui:Stop}} tamén o deixa parado, reinicia o controlador (o láser apágase) e envía `M5`. Onde falta Web Serial (Firefox, Safari e CadCraft Studio, cuxa vista web aínda non o ten), grave o G-code e envíeo co programa propio do seu láser.

## Aínda sen construír

Formatos doutros controladores (Ruida, láseres Marlin, ficheiros de fabricantes), lapelas e entradas de entrada, compensación de kerf, bibliotecas de materiais, eixos rotativos e Z, alixamento con cámara.
