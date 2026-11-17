---
title: Simular o escoamento de fluidos (estudo de Escoamento)
summary: Escoamento pelos canais dentro de uma peça ou em torno dela, numa caixa: entradas, saídas, ar, água ou seu próprio fluido, depois velocidade e pressão num plano de corte móvel, linhas de corrente, pressão na superfície, queda de pressão, balanço de massa, arrasto e sustentação, com o que o método laminar pode e não pode informar.
keywords: escoamento, CFD, fluido, dinâmica dos fluidos computacional, simulação de escoamento, ar, água, viscosidade, densidade, número de Reynolds, laminar, turbulento, queda de pressão, perda de carga, entrada, saída, tampa, velocidade, vazão, vazão volumétrica, litros por minuto, pressão estática, linhas de corrente, plano de corte, plano de seção, arrasto, sustentação, coeficiente de arrasto, coeficiente de sustentação, área frontal, escoamento externo, escoamento interno, tubo, canal, coletor, bocal, Lattice Boltzmann, resíduo, convergência
from: 7dc75f29
---

Um estudo de **Escoamento** calcula como um fluido se move pelos canais dentro da sua peça (**interno**) ou em torno dela (**externo**). Por padrão ele é **laminar, incompressível, isotérmico e newtoniano**: escoamento suave de um fluido cuja densidade e viscosidade permanecem fixas, sem calor, sem turbulência e sem gravidade. Há também um modelo turbulento **experimental**, apenas para padrões qualitativos (veja abaixo). Ele trabalha sobre as faces nomeadas que o kernel de malha atribui à peça (veja [O kernel de malha](topic:solid-kernels)).

Escolha **Simulação** na caixa **Área de trabalho**, pressione **Novo estudo** se não houver nenhum e defina **Tipo** como **Escoamento (CFD)**. O **Modelo de escoamento** é **Laminar** (o padrão) ou **Turbulento (Spalart–Allmaras, experimental)**: veja **Escoamento turbulento (experimental)** abaixo. As configurações estruturais do estudo são mantidas, então você pode voltar. As configurações de escoamento são salvas no arquivo da peça, e cada alteração pode ser desfeita.

## Escolha o fluido e as células

- **Fluido**: ar ou água a 20 °C, ou **Personalizado** com sua própria densidade (kg/m³) e viscosidade dinâmica (Pa·s). O ar usa a lei dos gases ideais e a lei de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); a água usa os valores IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Tamanho da célula**: o espaço do fluido é preenchido com cubos iguais. Deixe em branco para um tamanho automático; o painel mostra a grade. Cada abertura e cada canal deve ter **pelo menos 8 a 10 células de largura** para resultados úteis; células menores são mais precisas e mais lentas (duas vezes mais fina equivale a cerca de 16 vezes o trabalho).
- **Paredes**: **Interpolada** segue as paredes curvas entre as células (o padrão); **Bounce-back** trata as paredes como a escada do cubo.

## Escoamento dentro da peça

O espaço do fluido precisa estar fechado. Adicione uma **Entrada** e uma **Saída** no painel e depois clique nas faces delas na vista:

1. **A face plana em torno de uma abertura** — a borda na extremidade de um tubo, a face de um bocal. O PartCraft fecha ali o furo da abertura com uma tampa. Todo furo nessa face pertence a essa abertura; por isso, quando uma entrada e uma saída abrem na mesma face, modele uma tampa fina sobre uma delas.
2. **A face interna de uma tampa** — como em outras ferramentas CAD: modele uma placa fina (uma extrusão) sobre a abertura e selecione a face dela que toca o fluido.

Para uma entrada, defina uma **velocidade** (m/s, uniforme sobre a abertura, entrando na peça) ou uma **vazão volumétrica** (L/min). Para uma saída, defina a **pressão estática** (Pa, manométrica). Se uma abertura ficar aberta, ou se uma parede for mais fina que uma célula, o interior se junta ao exterior e a solução para com a mensagem "Nenhum espaço de fluido fechado".

## Escoamento em torno da peça

Defina **Escoamento** como **Externo**, a **Velocidade**, a direção para onde o fluido flui e até onde a caixa se estende a montante, a jusante e para os lados (vazio: 1, 3 e 1 vez o maior tamanho da peça). A face da caixa por onde o escoamento entra é uma entrada, a face por onde ele sai é uma saída a 0 Pa, e as faces ao longo do escoamento são deslizantes. Uma caixa pequena demais comprime o escoamento ao redor da peça e aumenta o arrasto. A **Área de referência** é a área usada pelos coeficientes de arrasto e de sustentação (vazio: a área frontal da peça vista na direção do escoamento); a sustentação é medida ao longo de +Y, a menos que você escolha outra direção.

## Resolva e leia os resultados

Pressione **Resolver**. A solução roda em segundo plano, com o número de passos, o resíduo e um gráfico de resíduo; **Parar** a encerra. Ela para quando o resíduo (quanto o campo de velocidade ainda muda por passo) fica abaixo da meta e a queda de pressão ou o arrasto se estabilizam. Se atingir primeiro o limite de passos, o painel mostra **Não convergiu** em vermelho: os números são o último estado, não uma resposta estacionária.

- **Plano de corte**: velocidade ou pressão estática em um plano através do modelo; escolha sua normal (X, Y ou Z) e arraste o controle deslizante para mover o plano. Passe o cursor sobre ele para ler os valores.
- **Linhas de corrente**: a partir das entradas (interno) ou de um rastelo sobre a extremidade de entrada da caixa no plano de corte (externo).
- **Peça**: sólida, transparente (para ver o plano por dentro), pressão na superfície ou oculta.
- **Tabela**: número de Reynolds, queda de pressão (pressão estática média nas entradas menos a das saídas), o fluxo e a pressão média de cada abertura, a força sobre a peça, arrasto e sustentação com seus coeficientes e a área de referência (externo), o balanço de massa (entrada contra saída), a malha e o solucionador.

## Escoamento turbulento (experimental)

**Modelo de escoamento › Turbulento (Spalart–Allmaras, experimental)** resolve o escoamento turbulento médio no tempo (RANS estacionário): o modelo Spalart–Allmaras fornece uma viscosidade turbulenta em cada célula, e as células junto às paredes usam a lei da parede de Spalding em vez de resolver a camada fina ali. Ele é totalmente turbulento em toda parte (sem regiões laminares, sem transição).

**Ele não passou nos seus testes de precisão.** O painel, os resultados e a tabela informam isso em todo estudo turbulento, e o aviso não pode ser fechado. Use-o para **padrões qualitativos de escoamento** — onde o escoamento se separa, recircula ou acelera — **não para números de projeto**.

| Verificação | Referência | Resultado |
|---|---|---|
| Atrito em canal plano, primeira célula em y⁺ 49 / 98 | Correlação de Dean | +3.3 % / +4.7 % |
| Canal com parede resolvida (y⁺ ≈ 3), Re_τ 180: velocidade média | DNS de Moser, Kim & Mansour | −1 % |
| Canal plano, y⁺ 7–15 ou 190–380 | Correlação de Dean | +9 a +22 % |
| Atrito em tubo através das células cúbicas, totalmente desenvolvido, 10–30 células de largura | Colebrook | 30 a 34 % alto demais |
| Recolamento atrás de um degrau voltado para trás, 6–14 células por altura de degrau | Driver & Seegmiller, 6.26 alturas de degrau | 21 a 39 % curto demais |

Os resultados melhoram apenas lentamente com células mais finas. Depois da solução, a tabela mostra o **y⁺ da primeira célula** (mínimo, médio e máximo sobre as células de parede) e avisa fora da faixa verificada de 1 a 400; mire em cerca de 30 a 300. **Tempo de execução:** as células automáticas são dimensionadas para alguns minutos, no máximo, em um núcleo de notebook (o painel mostra o pior caso para a grade e o limite de passos; um tubo pequeno se estabiliza em menos de 20 segundos). Reduzir o tamanho da célula pela metade custa cerca de 16 vezes mais tempo. As forças sobre a peça vêm de um balanço de momento sobre as aberturas ou sobre a caixa.

**Trabalho feito até agora:** as células de parede agora ajustam sua própria tensão de cisalhamento à lei da parede, o que reduziu os erros do tubo e do degrau para os valores acima sem alterar os resultados do canal plano. Isso não foi suficiente para números de projeto. O próximo passo é células mais finas perto das paredes.

## O que ele pode e não pode informar

- **O modelo laminar** é apenas laminar. Em tubos, o escoamento vira turbulento acima de um número de Reynolds de cerca de 2.000 a 4.000; atrás de corpos rombos, a esteira começa a desprender vórtices acima de cerca de 50. O painel avisa nesses pontos. Um resultado laminar para um escoamento turbulento subestima a queda de pressão e erra o arrasto. O modelo turbulento experimental (acima) cobre o escoamento turbulento qualitativamente; seus números ainda não são confiáveis.
- **Método:** o método Lattice Boltzmann (D3Q19, colisão com dois tempos de relaxação) executado até um estado estacionário. Ele é levemente compressível no interior; o PartCraft mantém as variações de densidade em poucos por cento. Se o escoamento for rápido demais para as células, ele se recusa a começar e informa o quanto as células devem ser menores.
- **Verificado contra:** escoamento de Hagen–Poiseuille em um tubo através de uma peça (gradiente de pressão dentro de 1 % com 20 células de largura), a cavidade com tampa móvel de Ghia et al. (dentro de 0.75 % da velocidade da tampa) e o benchmark do cilindro de Schäfer–Turek (arrasto dentro de 1 % com 10 células por diâmetro).
- Não modelado: transferência de calor, turbulência com precisão de projeto (o modelo turbulento é experimental), superfícies livres, cavitação, gravidade, peças em movimento, fluidos não newtonianos, paredes rugosas. Versão de laboratório: confira resultados importantes por outro meio.
