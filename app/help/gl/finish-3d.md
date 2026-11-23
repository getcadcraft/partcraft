---
title: Acabado 3D: paralelo e scallop
summary: Acabe a superficie curva de todo o modelo cunha fresa de punta esférica, redonda ou plana, en liñas paralelas a calquera ángulo ou en pasadas separadas unha distancia fixa, de xeito que as crestas entre elas conserven a altura que pida. O que garanten as traxectorias e o que non.
keywords: acabado 3D, acabado, paralelo, raster, scallop, scallop constante, cúspide, punta esférica, punta redonda, superficie, tolerancia, paso lateral, pendente, material a deixar, drop cutter, rascadura
from: 942d2341
---

Dúas operacións de Fabricación cortan a **superficie completa do modelo** coa ferramenta mantida vertical (tres eixos). Non precisan seleccións: traballan sobre todo o modelo que se ve desde arriba. Desbaste primeiro a peza (adaptativo ou cavidade); unha pasada de acabado sobre material sen cortar avisa de que cortaría fondo.

## Paralela

Liñas rectas sobre o modelo no **ángulo** que estableza, separadas un **paso lateral** (unha fracción do diámetro da ferramenta). Cada liña segue a superficie: a punta da ferramenta está tan alta como debe estar para que ningunha parte da fresa baixe por debaixo do modelo, e a liña córtase máis fina onde a superficie se dobra. Con **Ziguezague** activado, a ferramenta mantense baixada entre liñas onde pode facelo con seguridade (comprobado ao longo do movemento); se non, sobe.

- **Tolerancia**: canto pode afastarse un tramo recto dunha liña da altura real da punta (úsase a metade como límite no centro de cada tramo). Por defecto 0,01 mm.
- **Só onde a superficie estea polo menos en … e como máximo en … (°)**: acabar só as zonas pouco inclinadas ou só as moi inclinadas. Onde a superficie estea fóra do intervalo, a liña omítese e a ferramenta sobe.
- **Material a deixar**: o modelo desprazado esa distancia (a fresa agrandada na mesma medida: exacto para ferramentas esféricas e de punta redonda; unha ferramenta plana deixa polo menos ese material).
- **Fondo**: non se corta nada por debaixo desta altura z.

## Scallop

Pasadas que mantén unha distancia constante sobre a superficie entre si, de xeito que a cresta (o scallop) que queda entre dúas pasadas veciñas teña a **altura** que pida. A distancia depende da altura e do raio da esfera: s = 2·√(2·R·h − h²); por exemplo, uns 0,69 mm entre pasadas para unha esfera Ø6 e unha cresta de 0,02 mm. Unha ferramenta de punta redonda usa o raio da súa esquina. Unha fresa plana non se acepta: non ten cresta que dimensionar.

As pasadas comezan **desde a aresta do modelo, entrando**, ou **desde o seu alto, baixando**. Son curvas de igual distancia sobre a superficie (non de altura): nunha pendente están xuntas en planta e nunha superficie plana están moi separadas. A distancia mídese sobre unha rede sobre a superficie e é boa ata un 1 %; a altura da cresta é exacta onde a superficie é plana ou suavemente curva, e aproximada onde se curva con rapidez. **Concordancia** mantén o lado máis alto da superficie á dereita da fresa.

## Como de boas son as traxectorias

O que comproban as probas, con fórmulas pechadas ou cunha busca independente por forza bruta sobre a pegada da fresa:

- A altura da punta baixo a ferramenta é exacta para unha ferramenta esférica, de punta redonda e plana sobre caras, arestas e esquinas da malla, e nunca está por riba da altura real. Nas liñas paralelas, a traxectoria mantense dentro da tolerancia respecto dela, sen rascaduras máis profundas que iso.
- As lonxitudes das traxectorias nun plano inclinado coinciden coa fórmula pechada. As pasadas de scallop nun plano están separadas a distancia pedida, e a cresta entre elas sae á altura pedida.
- A simulación do material non amosa rascaduras despois dunha pasada, e amosa as crestas que quedan.

Estas traxectorias non son o conxunto do que ofrece un sistema de produción: son pasadas básicas de acabado.

- Non construído: acabado a nivel de auga (z constante), limpeza de lapis e de esquinas, pasadas radiais e en espiral, proxección dunha curva sobre a superficie, detección de zonas planas, comprobación de colisións do portaferramentas e do vástago. O desbaste e o mecanizado de restos son operacións propias ([Desbaste 3D e mecanizado de restos](topic:rough-3d)); unha ferramenta que se inclina é o [acabado de 5 eixos](topic:multi-axis#5-axis-finishing).
- O centro da ferramenta mantense sobre o modelo: as traxectorias paran na aresta do modelo en vez de seguir fóra del, así que unha parede vertical xusto na aresta non se acaba ata o seu pé.
- Os socavados non se ven (a superficie é o que a ferramenta atopa desde arriba).
- O modelo é a malla do kernel, así que as traxectorias seguen a malla (a súa tolerancia de corda é de uns 0,0002 da diagonal da peza), non a superficie exacta.
- Acabar un modelo grande cunha tolerancia fina dá un programa longo con moitos movementos curtos. Comprobe a saída no simulador da súa máquina antes de cortar.
