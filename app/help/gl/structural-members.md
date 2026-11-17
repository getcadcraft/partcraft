---
title: Estruturas con perfís de aceiro
summary: Coloque perfís de aceiro ao longo das liñas dun ou varios esbozos para facer unha estrutura soldada: esquinas a inglete ou a tope, barras cortadas para encaixar onde se encontran, tapas de extremo, cartelas e unha lista de cortes con lonxitudes e ángulos.
keywords: conxunto soldado, elemento estrutural, estrutura, aceiro, tubo, tubo cadrado, hss, rhs, shs, tubaxe, chs, ala ancha, viga en i, viga w, ipe, hea, heb, perfil en u, cantoneira, inglete, unión a tope, recorte, tapa de extremo, cartela, lista de cortes
from: 59071e5a
---

Un **Elemento estrutural** coloca un perfil de aceiro ao longo de cada liña dos esbozos que escolla. Debuxe a estrutura como liñas (cada liña é un elemento) e logo escolla o perfil: os elementos constrúense, as súas esquinas recórtanse e esténdense, e unha lista de cortes indica canto cortar cada peza e en que ángulo.

## Facer unha estrutura

1. Debuxe a estrutura como liñas nun esbozo, por exemplo un rectángulo no plano de planta. As liñas marcadas como construción quedan fóra.
2. Con o esbozo seleccionado, escolla {{ui:More}} › {{ui:Structural member}}. Cada liña do esbozo recibe un elemento.
3. No panel, escolla a **Familia** e o **Formato** do perfil. As familias son as táboas AISC (W, S, C, L, tubos HSS, Tubaxe) e EN 10365 (IPE, HEA, HEB, UPN).

### Unha estrutura en 3D

As liñas de varios esbozos forman unha soa estrutura: un rectángulo superior debuxado nun plano situado enriba e as patas debuxadas en planos verticais únense polos seus extremos en 3D. Baixo **Ao longo das liñas de** no panel, marque cada esbozo cuxas liñas seguen os elementos. Os extremos que se encontran a menos dun micrómetro únense.

## Colocar o perfil sobre a súa liña

- **Xirar (°)** xira o perfil arredor da súa liña. Unha viga queda co canto en vertical (nun elemento vertical, o canto apunta cara á fronte).
- **Sobre a liña** escolle que punto do perfil queda sobre a liña: o centro, unha esquina ou o punto medio dun lado do contorno do perfil. "Inferior central" pon a estrutura enriba do plano do esbozo en vez de atravesalo.

## Esquinas e unións

| Onde se encontran os elementos | Que pasa |
|---|---|
| Dous elementos extremo con extremo, **Esquinas: A inglete** | Os dous córtanse no plano a medio camiño entre eles, como un marco de cadro |
| Dous elementos extremo con extremo, **Esquinas: A tope** | O primeiro continúa ata a cara distante do segundo; o segundo córtase en ángulo recto na cara próxima do primeiro |
| Un elemento remata no medio doutro (unha T) | Córtase para encaixar contra o exterior do outro elemento |
| Tres ou máis rematan nun punto | O primeiro continúa en ángulo recto máis aló dos demais; os demais córtanse para encaixar contra el |

O primeiro elemento é o que ten a liña que vén primeiro: as liñas conservan a orde en que se debuxaron, esbozo por esbozo na orde en que se marcaron os esbozos.

## Tapas de extremo e cartelas

- **Tapas de extremo** pechan cada extremo libre cunha placa co contorno do perfil e o espesor que fixe, fóra do extremo.
- **Cartelas** colocan unha placa triangular en cada esquina onde dous elementos se encontran en ángulo: **Tamaño da cartela** ao longo de cada elemento desde a esquina, **Espesor da cartela** en sentido transversal, centrada no plano da esquina.

## A lista de cortes

O panel enumera cada peza, agrupando as idénticas: o perfil, a lonxitude (de punta longa a punta longa, como a marcaría para a serra), como se corta cada extremo (a escuadra, un ángulo desde a escuadra ou cortado para encaixar) e a que elementos pertencen. As tapas de extremo e as cartelas enumeranse cos seus tamaños. Use {{ui:Save the cut list (CSV)}} para gardala nunha folla de cálculo.

Un elemento cortado para encaixar contra un tubo de esquinas redondeadas entra un pouco no raio da esquina dese tubo, así que a súa lonxitude de punta longa é uns milímetros máis que a separación entre as caras.

## Límites

- Os elementos seguen só liñas rectas; os arcos e as splines do esbozo quedan fóra.
- As unións están cortadas, non soldadas: non se debuxan cordóns de soldadura, e a estrutura é un só sólido.
- Os perfís debúxanse coas dimensións da táboa: perfís W co seu redondeo de raíz, S e perfís en U con ás paralelas, tubos con raios de esquina; os buratos, as preparacións de extremo e as gorxas de soldadura non se fan por vostede.
- Os elementos estruturais constrúense co núcleo de malla. Co núcleo exacto activado (só desenvolvedores), indícano e non se constrúen.
