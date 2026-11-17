---
title: Simular o escoamento de fluidos (estudo de fluxo)
summary: Escoamento pelos canais dentro de uma peça ou à sua volta numa caixa: entradas, saídas, ar, água ou o seu próprio fluido, depois velocidade e pressão num plano de corte móvel, linhas de corrente, pressão na superfície, queda de pressão, balanço de massa, arrasto e sustentação, com o que o método laminar pode e não pode indicar.
keywords: fluxo, CFD, fluido, dinâmica computacional de fluidos, simulação de fluxo, ar, água, viscosidade, massa volúmica, número de Reynolds, laminar, turbulento, queda de pressão, perda de carga, entrada, saída, tampa, cap, velocidade, caudal, caudal volúmico, litros por minuto, pressão estática, linhas de corrente, plano de corte, plano de secção, arrasto, sustentação, coeficiente de arrasto, coeficiente de sustentação, área frontal, escoamento externo, escoamento interno, tubo, canal, coletor, bocal, Boltzmann de rede, residual, convergência
from: 7dc75f29
---

Um estudo de **Fluxo** calcula como um fluido se move pelos canais dentro da sua peça (**interno**) ou à sua volta (**externo**). Por predefinição é **laminar, incompressível, isotérmico e newtoniano**: escoamento suave de um fluido cuja massa volúmica e viscosidade se mantêm fixas, sem calor, sem turbulência e sem gravidade. Existe também um modelo turbulento **experimental**, apenas para padrões qualitativos (ver abaixo). Funciona nas faces com nome que o kernel de malha atribui à peça (ver [O kernel de malha](topic:solid-kernels)).

Escolha **Simulação** na caixa **Área de trabalho**, prima **Novo estudo** se não existir nenhum, e defina **Tipo** como **Fluxo (CFD)**. O **Modelo de fluxo** é **Laminar** (predefinição) ou **Turbulento (Spalart–Allmaras, experimental)**: ver **Escoamento turbulento (experimental)** abaixo. As definições estruturais do estudo são mantidas, pelo que pode voltar atrás. As definições de fluxo ficam guardadas no ficheiro da peça e cada alteração pode ser anulada.

## Escolher o fluido e as células

- **Fluido**: ar ou água a 20 °C, ou **Personalizado** com a sua própria massa volúmica (kg/m³) e viscosidade dinâmica (Pa·s). O ar usa a lei dos gases perfeitos e a lei de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); a água usa os valores IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Tamanho da célula**: o espaço do fluido é preenchido com cubos iguais. Deixe em branco para um tamanho automático; o painel mostra a grelha. Cada abertura e cada canal devem ter **pelo menos 8 a 10 células de largura** para obter valores úteis; células mais pequenas são mais exatas e mais lentas (o dobro de finas corresponde a cerca de 16 vezes o trabalho).
- **Paredes**: **Interpolada** segue paredes curvas entre células (predefinição); **Reflexão (bounce-back)** trata as paredes como a escadaria dos cubos.

## Fluxo dentro da peça

O espaço do fluido tem de ser fechado. Adicione uma **Entrada** e uma **Saída** no painel e, depois, clique nas suas faces na vista:

1. **A face plana em volta de uma abertura** — o rebordo na extremidade de um tubo, uma face de ligação. O PartCraft fecha ali o furo da abertura com uma tampa. Todos os furos nessa face pertencem a essa abertura; por isso, quando uma entrada e uma saída abrem na mesma face, modele antes uma tampa fina sobre uma delas.
2. **A face interior de uma tampa** — como noutras ferramentas CAD: modele uma placa fina (uma extrusão) sobre a abertura e escolha a face que toca no fluido.

Numa entrada, defina uma **velocidade** (m/s, uniforme em toda a abertura, para dentro da peça) ou um **caudal volúmico** (L/min). Numa saída, defina a **pressão estática** (Pa, relativa). Se uma abertura ficar aberta, ou se uma parede for mais fina do que uma célula, o interior junta-se ao exterior e o cálculo para com a mensagem « Nenhum espaço de fluido fechado ».

## Fluxo à volta da peça

Defina **Fluxo** como **Externo**, a **Velocidade**, a direção para onde flui e até onde a caixa se estende a montante, a jusante e para os lados (em branco: 1, 3 e 1 vezes a maior dimensão da peça). A face da caixa por onde o fluxo entra é uma entrada, a face por onde sai é uma saída a 0 Pa, e as faces ao longo do fluxo são deslizantes. Uma caixa demasiado pequena comprime o fluxo à volta da peça e aumenta o arrasto. **Área de referência** é a área usada pelos coeficientes de arrasto e de sustentação (em branco: a área frontal da peça vista ao longo do fluxo); a sustentação é medida segundo +Y, a menos que escolha outra direção.

## Calcular e ler os resultados

Prima **Calcular**. O cálculo corre em segundo plano, com o número de passos, o residual e um gráfico do residual; **Parar** termina-o. Para quando o residual (quanto o campo de velocidades ainda muda por passo) está abaixo do alvo e a queda de pressão ou o arrasto se estabilizaram. Se atingir primeiro o limite de passos, o painel indica **Não convergiu** a vermelho: os números são o último estado, não uma resposta estacionária.

- **Plano de corte**: velocidade ou pressão estática num plano através do modelo; escolha a sua normal (X, Y ou Z) e arraste o cursor para o mover. Passe por cima para ler os valores.
- **Linhas de corrente**: a partir das entradas (interno) ou de um conjunto de pontos ao longo da extremidade de entrada da caixa, no plano de corte (externo).
- **Peça**: sólida, transparente (para ver o plano no interior), pressão na superfície ou oculta.
- **Tabela**: número de Reynolds, queda de pressão (pressão estática média nas entradas menos a das saídas), o caudal e a pressão média de cada abertura, a força na peça, o arrasto e a sustentação com os respetivos coeficientes e área de referência (externo), o balanço de massa (entrada contra saída), a malha e o solucionador.

## Escoamento turbulento (experimental)

**Modelo de fluxo › Turbulento (Spalart–Allmaras, experimental)** resolve o escoamento turbulento médio no tempo (RANS estacionário): o modelo de Spalart–Allmaras dá uma viscosidade turbulenta em cada célula, e as células junto às paredes usam a lei da parede de Spalding em vez de resolver a camada fina aí. É totalmente turbulento em todo o lado (sem regiões laminares, sem transição).

**Não passou nos seus testes de exatidão.** O painel, os resultados e a tabela indicam isso em todos os estudos turbulentos, e o aviso não pode ser fechado. Use-o para **padrões qualitativos de escoamento** — onde o fluxo se separa, recircula ou acelera — **não para valores de projeto**.

| Verificação | Referência | Resultado |
|---|---|---|
| Atrito num canal plano, primeira célula em y⁺ 49 / 98 | correlação de Dean | +3.3 % / +4.7 % |
| Canal com parede resolvida (y⁺ ≈ 3), Re_τ 180: velocidade média | DNS de Moser, Kim e Mansour | −1 % |
| Canal plano, y⁺ 7–15 ou 190–380 | correlação de Dean | +9 a +22 % |
| Atrito num tubo através das células do cubo, totalmente desenvolvido, 10–30 células de largura | Colebrook | 30 a 34 % acima |
| Recolamento atrás de um degrau de costas, 6–14 células por altura de degrau | Driver e Seegmiller, 6.26 alturas de degrau | 21 a 39 % curto demais |

Os resultados melhoram apenas lentamente com células mais finas. Depois do cálculo, a tabela mostra o **y⁺ da primeira célula** (mínimo, média e máximo nas células de parede) e avisa fora do intervalo verificado de 1 a 400; procure cerca de 30 a 300. **Tempo de cálculo:** as células automáticas são dimensionadas para no máximo alguns minutos num único núcleo de um portátil (o painel mostra o pior caso para a malha e o limite de passos; um tubo pequeno estabiliza em menos de 20 segundos). Reduzir o tamanho da célula para metade custa cerca de 16 vezes mais tempo. As forças na peça provêm de um balanço de quantidade de movimento sobre as aberturas ou sobre a caixa.

**Trabalho feito até agora:** as células de parede correspondem agora à sua própria tensão de corte segundo a lei da parede, o que reduziu os erros do tubo e do degrau para os valores acima sem alterar os resultados do canal plano. Não foi suficiente para valores de projeto. O passo seguinte são células mais finas junto às paredes.

## O que pode e não pode indicar

- **O modelo laminar** é apenas laminar. Em tubos, o escoamento torna-se turbulento acima de um número de Reynolds de cerca de 2,000 a 4,000; atrás de corpos romos, a esteira começa a libertar vórtices acima de cerca de 50. O painel avisa nestes pontos. Um resultado laminar para escoamento turbulento subestima a queda de pressão e calcula mal o arrasto. O modelo turbulento experimental (acima) cobre o escoamento turbulento de forma qualitativa; os seus valores ainda não são fiáveis.
- **Método:** método de Boltzmann de rede (D3Q19, colisão de dois tempos de relaxamento) executado até um estado estacionário. É ligeiramente compressível no interior; o PartCraft mantém as variações de massa volúmica em poucas percentagens. Se o fluxo for demasiado rápido para as células, não arranca e indica o quanto as células devem ser mais pequenas.
- **Verificado contra:** escoamento de Hagen–Poiseuille num tubo através de uma peça (gradiente de pressão dentro de 1 % com 20 células de largura), a cavidade de tampa motora de Ghia et al. (dentro de 0.75 % da velocidade da tampa) e o benchmark do cilindro de Schäfer–Turek (arrasto dentro de 1 % com 10 células por diâmetro).
- Não modelado: transferência de calor, turbulência com precisão de projeto (o modelo turbulento é experimental), superfícies livres, cavitação, gravidade, peças em movimento, fluidos não newtonianos, paredes rugosas. Versão de laboratório: verifique os resultados importantes por outro meio.
