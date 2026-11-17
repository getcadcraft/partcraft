---
title: O cubo de vista
summary: Prema nunha cara, arista ou esquina do cubo na esquina da vista para mirar desde alí, arrástreo para orbitar, xire o anel da brúxula, dea a volta a unha vista de cara e volva ao inicio.
keywords: cubo de vista, viewcube, cubo, brúxula, norte, vista de inicio, vistas estándar, planta, alzado, dereita, iso, esquina, arista, orbitar, xirar vista, icona de eixes, indicador de esquina, navegación
from: afc33dc7
---

O cubo de vista está na parte superior dereita da vista 3D (non mentres se esboza nin na folla de debuxo). Xira coa vista, así que sempre indica cara onde mira: {{ui:Planta}} é o lado +Y da peza (o plano Planta), {{ui:Alzado}} o lado +Z (o plano Alzado está de fronte cando o mira), {{ui:Dereita}} o lado +X. Mantense transparente ata que apunte a el.

## Mirar desde un lado, unha arista ou unha esquina

1. Apunte ao cubo. A peza baixo o punteiro ilumínase: o centro dunha cara, unha arista (ilumínase nas dúas caras que comparte) ou unha esquina (nas tres caras).
2. Prema nel. A vista xira para mirar desde alí, mantendo o mesmo centro e o mesmo zoom.

Hai 26 puntos onde premer: 6 caras ({{ui:Planta}}, {{ui:Inferior}}, {{ui:Alzado}}, {{ui:Volver}}, {{ui:Esquerda}}, {{ui:Dereita}}), 12 arestas e 8 esquinas. Unha esquina dá a clásica vista de tres cuartos; unha arista mira a medio camiño entre dúas caras.

Premer {{ui:Alzado}}, {{ui:Planta}} ou {{ui:Dereita}} dá as mesmas vistas que {{ui:Vistas}} na barra de ferramentas, sen o zoom para axustar.

## Orbitar arrastrando o cubo

Arrastre o cubo para xirar a vista, igual que orbitar na propia vista. Un arrastre nunca se toma como un clic, así que pode collelo en calquera punto.

## O anel da brúxula

O anel debaixo do cubo leva N, L, S e O.

- **Arrastre o anel** para xirar o modelo arredor do eixe vertical, como se estivese nunha plataforma xiratoria. O anel segue o punteiro.
- **Prema unha letra** para mirar desde ese lado, mantendo a inclinación coa que mira cara abaixo. Nunha vista desde enriba, a letra que preme vai á parte inferior da pantalla.

## Vistas de cara: frechas

Cando mira de fronte a unha cara, aparecen frechas pequenas arredor do cubo:

- Os catro **triángulos** levan á fronte a cara dese lado: o triángulo enriba do cubo mostra a cara que estaba arriba, e así sucesivamente.
- As dúas **frechas curvas** arriba á dereita xiran a imaxe un cuarto de volta no sentido horario ou no antihorario, sen cambiar a cara na que mira. Úseas para xirar unha planta de xeito que unha parede longa cruce a pantalla.

## Inicio

O botón de casa na parte superior esquerda do cubo volve á vista de tres cuartos e axusta a peza. {{key:Home}} fai o mesmo mentres o cubo ten o foco do teclado.

## Co teclado

{{key:Tab}} ata o cubo, e despois:

| Tecla | Función |
|---|---|
| {{key:left}} / {{key:right}} | escolle unha cara, arista ou esquina ao redor do cubo, en pasos de oitavo de volta (os lectores de pantalla din cal) |
| {{key:up}} / {{key:down}} | escolle unha máis alta ou máis baixa, ata {{ui:Planta}} ou ata {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | mira desde a escollida |
| {{key:Shift+left}} / {{key:Shift+right}} | xira a vista un cuarto de volta arredor do eixe vertical |
| {{key:Home}} | a vista de inicio |
| {{key:Esc}} | sae do cubo |

As teclas premidas no cubo quedan co cubo: non inician as ferramentas de PartCraft.

## Icona de eixes ou nada

Abra {{ui:Configuración}} ({{key:Mod+,}}), a lapela {{ui:PartCraft}}, e poña **Indicador de esquina** en {{ui:Cubo de vista}} (o predeterminado), {{ui:Icona de eixes}} (un pequeno marcador X, Y, Z abaixo á esquerda: X en vermello, Y en verde, Z en azul) ou {{ui:Ningún}}. Este navegador lembra a elección. Ver [Configuración de PartCraft](topic:settings#corner-indicator).

:::note
O cubo mostra a peza tal como a constrúe PartCraft: Y cara arriba, así que a {{ui:Planta}} do cubo é o plano Planta. As letras da brúxula só serven para xirar; unha peza non ten norte.
:::
