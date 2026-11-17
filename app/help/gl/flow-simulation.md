---
title: Simular o fluxo dun fluído (estudo de fluxo)
summary: Fluxo polos canais dentro dunha peza ou ao seu redor nunha caixa: entradas, saídas, aire, auga ou un fluído propio; despois velocidade e presión nun plano de corte móbil, liñas de corrente, presión superficial, caída de presión, balance de masa, arrastre e sustentación, e o que o método laminar pode e non pode indicar.
keywords: fluxo, CFD, fluído, dinámica computacional de fluídos, simulación de fluxo, aire, auga, viscosidade, densidade, número de Reynolds, laminar, turbulento, caída de presión, perda de carga, entrada, saída, tapa, tapón, velocidade, caudal, caudal volumétrico, litros por minuto, presión estática, liñas de corrente, plano de corte, plano de sección, arrastre, sustentación, coeficiente de arrastre, coeficiente de sustentación, área frontal, fluxo externo, fluxo interno, tubaxe, canle, colector, boquilla, Boltzmann en rede, residuo, converxencia
from: 7dc75f29
---

Un estudo de **Fluxo** calcula como se move un fluído polos canais dentro da súa peza (**interno**) ou ao seu redor (**externo**). Por defecto é **laminar, incompresible, isotermo e newtoniano**: fluxo suave dun fluído cuxa densidade e viscosidade permanecen fixas, sen calor, sen turbulencia e sen gravidade. Tamén hai un modelo turbulento **experimental**, só para patróns cualitativos (ver máis abaixo). Traballa sobre as caras con nome que o núcleo de malla lle dá á peza (ver [O núcleo de malla](topic:solid-kernels)).

Escolla **Simulación** na caixa **Espazo de traballo**, prema **Novo estudo** se non hai ningún, e defina **Tipo** como **Fluxo (CFD)**. **Modelo de fluxo** é **Laminar** (o predeterminado) ou **Turbulento (Spalart–Allmaras, experimental)**: ver **Fluxo turbulento (experimental)** máis abaixo. Os axustes estruturais do estudo consérvanse, así que pode volver atrás. Os axustes de fluxo gárdanse no ficheiro da peza e cada cambio pode desfacerse.

## Escoller o fluído e as celas

- **Fluído**: aire ou auga a 20 °C, ou **Personalizado** coa súa propia densidade (kg/m³) e viscosidade dinámica (Pa·s). O aire usa a lei dos gases ideais e a lei de Sutherland (1,204 kg/m³, 1,813 × 10⁻⁵ Pa·s); a auga usa os valores IAPWS (998,21 kg/m³, 1,0016 mPa·s).
- **Tamaño da cela**: o espazo do fluído énchese con cubos iguais. Déixeo baleiro para un tamaño automático; o panel mostra a malla. Cada abertura e canle debería ter **polo menos 8 a 10 celas de lado a lado** para obter números útiles; as celas máis pequenas son máis precisas e máis lentas (o dobre de fino supón uns 16 veces o traballo).
- **Paredes**: **Interpolada** segue as paredes curvas entre celas (a predeterminada); **Rebote** trata as paredes como a escaleira de cubos.

## Fluxo dentro da peza

O espazo do fluído debe estar pechado. Engada unha **Entrada** e unha **Saída** no panel e logo prema as súas caras na vista:

1. **A cara plana ao redor dunha abertura**: o bordo na punta dunha tubaxe, unha cara de conexión. PartCraft pecha ahí o burato da abertura cunha tapa. Cada burato desa cara pertence a esa abertura, así que cando unha entrada e unha saída se abren na mesma cara, modele en cambio unha tapa fina sobre unha delas.
2. **A cara interior dunha tapa**: como noutras ferramentas CAD, modele unha placa fina (unha extrusión) sobre a abertura e seleccione a súa cara que toca o fluído.

Para unha entrada, defina unha **velocidade** (m/s, uniforme en toda a abertura, cara ao interior da peza) ou un **caudal volumétrico** (L/min). Para unha saída, defina a **presión estática** (Pa, manométrica). Se unha abertura queda aberta, ou unha parede é máis fina que unha cela, o interior únese ao exterior e a resolución detense con «Non hai espazo de fluído pechado».

## Fluxo ao redor da peza

Defina **Fluxo** como **Externo**, a **Velocidade**, a dirección cara á que flúe e ata onde chega a caixa augas arriba, augas abaixo e aos lados (baleiro: 1, 3 e 1 veces o maior tamaño da peza). A cara da caixa pola que entra o fluxo é unha entrada, a cara pola que sae é unha saída a 0 Pa, e as caras ao longo do fluxo deslízanse. Unha caixa demasiado pequena comprime o fluxo ao pasar pola peza e aumenta o arrastre. A **Área de referencia** é a área que usan os coeficientes de arrastre e sustentación (baleiro: a área frontal da peza vista na dirección do fluxo); a sustentación mídese ao longo de +Y salvo que escolla outra dirección.

## Resolver e ler os resultados

Prema **Resolver**. A resolución execútase en segundo plano co número de pasos, o residuo e un gráfico do residuo; **Parar** a finaliza. Detense cando o residuo (canto cambia o campo de velocidades por paso) está por debaixo do obxectivo e a caída de presión ou o arrastre se estabilizaron. Se primeiro alcanza o límite de pasos, o panel mostra **Non converxeu** en vermello: os números son o último estado, non unha resposta estacionaria.

- **Plano de corte**: velocidade ou presión estática nun plano que atravesa o modelo; escolla a súa normal (X, Y ou Z) e arrastre o control deslizante para movelo. Pase o punteiro por riba para ler os valores.
- **Liñas de corrente**: desde as entradas (interno) ou desde un rastrillo atravesado no extremo de entrada da caixa, no plano de corte (externo).
- **Peza**: sólida, transparente (para ver o plano por dentro), presión superficial ou oculta.
- **Táboa**: número de Reynolds, caída de presión (presión estática media nas entradas menos a das saídas), o caudal e a presión media de cada abertura, a forza sobre a peza, o arrastre e a sustentación cos seus coeficientes e a área de referencia (externo), o balance de masa (entrada fronte a saída), a malla e o resolutor.

## Fluxo turbulento (experimental)

**Modelo de fluxo › Turbulento (Spalart–Allmaras, experimental)** resolve o fluxo turbulento promediado no tempo (RANS estacionario): o modelo de Spalart–Allmaras dá unha viscosidade de remuíño en cada cela, e as celas xunto ás paredes usan a lei de Spalding para a parede en vez de resolver a capa fina alí. É totalmente turbulento en todas partes (sen rexións laminares, sen transición).

**Non superou as súas comprobacións de precisión.** O panel, os resultados e a táboa ho din en cada estudo turbulento, e o aviso non se pode pechar. Use o modelo para **patróns cualitativos de fluxo** — onde o fluxo se separa, recircula ou acelera — **e non para cifras de deseño**.

| Comprobación | Referencia | Resultado |
|---|---|---|
| Fricción en canle plana, primeira cela en y⁺ 49 / 98 | Correlación de Dean | +3,3 % / +4,7 % |
| Canle con parede resolta (y⁺ ≈ 3), Re_τ 180: velocidade media | DNS de Moser, Kim & Mansour | −1 % |
| Canle plana, y⁺ 7–15 ou 190–380 | Correlación de Dean | +9 a +22 % |
| Fricción en tubaxe a través das celas cúbicas, totalmente desenvolvida, 10–30 celas de lado a lado | Colebrook | 30 a 34 % demasiado alto |
| Reatamento detrás dun chanzo orientado cara atrás, 6–14 celas por altura de chanzo | Driver & Seegmiller, 6,26 alturas de chanzo | 21 a 39 % demasiado curto |

Os resultados melloran só lentamente con celas máis finas. Despois de resolver, a táboa mostra o **y⁺ da primeira cela** (mínimo, medio e máximo nas celas da parede) e avisa fóra do intervalo comprobado de 1 a 400; apunte a uns 30 a 300. **Tempo de execución:** as celas automáticas dimensiónanse para uns poucos minutos nun único núcleo de portátil como máximo (o panel mostra o peor caso para a malla e o límite de pasos; unha tubaxe pequena estabilízase en menos de 20 segundos). Reducir á metade o tamaño da cela custa uns 16 veces máis de tempo. As forzas sobre a peza proceden dun balance de momento sobre as aberturas ou sobre a caixa.

**Traballo realizado ata agora:** as celas da parede agora axustan a súa tensión cortante á lei da parede, o que reduciu os erros da tubaxe e do chanzo ata as cifras indicadas enriba sen cambiar os resultados do canle plano. Non foi suficiente para cifras de deseño. O seguinte paso son celas máis finas preto das paredes.

## Que pode e que non pode dicirlle

- **O modelo laminar** é só laminar. Nas tubaxes o fluxo volvese turbulento por enriba dun número de Reynolds de uns 2.000 a 4.000; detrás de corpos romos a esteira comeza a desprender remuíños por enriba de uns 50. O panel avisa nestes puntos. Un resultado laminar para un fluxo turbulento subestima a caída de presión e calcula mal o arrastre. O modelo turbulento experimental (enriba) cobre o fluxo turbulento de forma cualitativa; os seus números aínda non son fiables.
- **Método:** o método de Boltzmann en rede (D3Q19, colisión de dous tempos de relaxación) executado ata un estado estacionario. É lixeiramente compresible no interior; PartCraft mantén as variacións de densidade en uns poucos por cento. Se o fluxo é demasiado rápido para as celas, non arranca e indica canto máis pequenas deben ser as celas.
- **Comprobado contra:** o fluxo de Hagen–Poiseuille nunha tubaxe a través dunha peza (gradiente de presión dentro do 1 % con 20 celas de lado a lado), a cavidade de tapa móbil de Ghia et al. (dentro do 0,75 % da velocidade da tapa) e o caso de referencia do cilindro de Schäfer–Turek (arrastre dentro do 1 % con 10 celas por diámetro).
- Non modelado: transferencia de calor, turbulencia con precisión de deseño (o modelo turbulento é experimental), superficies libres, cavitación, gravidade, pezas móbiles, fluídos non newtonianos, paredes rugosas. Versión de laboratorio: comprobe os resultados importantes doutro modo.
