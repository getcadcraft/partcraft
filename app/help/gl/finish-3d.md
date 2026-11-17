---
title: Acabado 3D: paralelo e escama
summary: Acabe a superficie curva completa do modelo cunha fresa de punta esférica, de punta redondeada ou plana, en liñas paralelas en calquera ángulo ou en pasadas separadas unha distancia fixa para que as cristas entre elas conserven a altura que pida. Que garanten as traxectorias e que non.
keywords: acabado 3d, acabado, paralelo, raster, escama, escama constante, cúspide, punta esférica, punta redondeada, superficie, tolerancia, paso lateral, pendente, material a deixar, drop cutter, rebaixe
from: e1587d0a
---

Dúas operacións en Fabricación cortan a **superficie completa do modelo** coa ferramenta mantida vertical (tres eixes). Non precisan selección: traballan sobre todo o modelo que se ve desde arriba. Desbaste primeiro a peza (adaptativo ou cavidade); unha pasada de acabado sobre material sen cortar avisa de que cortaría demasiado fondo.

## Paralelo

Liñas rectas sobre o modelo no **ángulo** que estableza, separadas **paso lateral** (unha fracción do diámetro da ferramenta). Cada liña segue a superficie: a punta da ferramenta queda tan alta como debe para que ningunha parte do cortador baixe por debaixo do modelo, e a liña córtase máis fina onde a superficie se dobra. Con **Zigzag** activado, a ferramenta mantense baixa entre liñas onde pode facelo con seguridade (comprobado ao longo do movemento); se non, levántase.

- **Tolerancia**: canto pode separarse un tramo recto dunha liña da altura real da punta (usa a metade como límite no centro de cada tramo). Predeterminado 0,01 mm.
- **Só onde a superficie sexa polo menos … e como máximo … (°)**: acabe só as zonas suaves ou só as inclinadas. Onde a superficie estea fóra do intervalo, a liña omítese e a ferramenta levántase.
- **Material a deixar**: o modelo desprazado esa distancia (o cortador agrándase en ela: exacto para ferramentas de punta esférica e redondeada; unha ferramenta plana deixa polo menos ese material).
- **Fondo**: non se corta por debaixo deste z.

## Escama

Pasadas que mantén unha distancia constante sobre a superficie entre elas, así que a crista (a escama) que queda entre dúas pasadas veciñas ten a **altura** que pida. A distancia sae da altura e do raio da esfera: s = 2·√(2·R·h − h²), por exemplo, uns 0,69 mm entre pasadas para unha esfera Ø6 e unha crista de 0,02 mm. Unha ferramenta de punta redondeada usa o raio da súa esquina. Recházase unha fresa plana: non ten crista que dimensionar.

As pasadas comezan **desde o bordo do modelo, cara a dentro** ou **desde o seu cume, cara abaixo**. Son contornos da distancia sobre a superficie (non da altura), así que nunha pendente quedan próximas en planta e nun plano quedan moi separadas. A distancia mídese sobre unha cuadrícula sobre a superficie e é válida ata un 1 %; a altura da crista é exacta onde a superficie é plana ou suavemente curva, e aproximada onde se curva rápido. **Concordancia** mantén o lado máis alto da superficie á dereita do cortador.

## Canto de boas son as traxectorias

O que comproban as probas, con formas pechadas ou unha busca independente por forza bruta da pegada do cortador:

- A altura da punta baixo a ferramenta é exacta para unha ferramenta de punta esférica, redondeada e plana en caras, arestas e esquinas da malla, e nunca supera a altura real; nas liñas paralelas a traxectoria mantense dentro da tolerancia, sen rebaixe máis fondo que iso.
- As lonxitudes das traxectorias nun plano inclinado coinciden coa forma pechada; as pasadas de escama nun plano están separadas a distancia pedida e a crista entre elas sae á altura pedida.
- A simulación do material non mostra rebaixe despois dunha pasada e mostra as cristas que quedan.

Estas traxectorias non son: son pasadas básicas de acabado, non todo o que ofrece un sistema de produción.

- Non construídos: liña de nivel (z constante), limpeza a lapis e de esquinas, pasadas radiais e en espiral, proxección dunha curva sobre a superficie, detección de zonas planas, mecanizado de resto, comprobacións de colisión do portaferramentas e da haste, e calquera inclinación da ferramenta.
- O centro da ferramenta mantense sobre o modelo: as traxectorias paran no bordo do modelo en vez de sair dela, así que unha parede vertical xusto no bordo non se acaba ata o seu pé.
- Non se ven os socavados (a superficie é o que a ferramenta atopa desde arriba).
- O modelo é a malla do núcleo, así que as traxectorias seguen a malla (a súa tolerancia de corda é de uns 0,0002 da diagonal da peza), non a superficie exacta.
- Acabar un modelo grande con tolerancia fina crea un programa longo con moitos movementos curtos. Comprobe a saída no simulador da súa máquina antes de cortar.
