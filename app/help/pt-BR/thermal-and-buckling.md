---
title: Calor, tensão térmica e flambagem
summary: Descubra as temperaturas em uma peça a partir de temperaturas fixas, fluxo de calor, potência térmica, convecção e radiação (permanente ou ao longo do tempo), carregue um estudo de tensão com uma elevação de temperatura e descubra a carga na qual uma peça esbelta flamba, com o que cada método pode e não pode informar.
keywords: térmico, transferência de calor, calor, temperatura, condução, convecção, coeficiente de película, radiação, emissividade, fluxo de calor, potência térmica, geração de calor, dissipador, transiente, tempo, resfriamento, aquecimento, Crank–Nicolson, Euler implícito, balanço de calor, tensão térmica, tensão térmica ao longo do tempo, tensão térmica transiente, têmpera, choque térmico, histórico de tensão, pior instante, expansão térmica, coeficiente de expansão, flambagem, flambagem de Euler, fator de carga, carga crítica, pilar, esbelto, autovalor
from: 1a1b7545
---

Estes estudos ficam na área de trabalho Simulação, ao lado de tensão estática e frequências naturais (veja [Verificar tensão e deflexão](topic:simulation)). Escolha-os na caixa **Tipo** do painel. Eles usam a mesma malha de cubos pequenos e a mesma lista de materiais; cada material da biblioteca tem uma condutividade térmica, um calor específico e um coeficiente de expansão (valores típicos de manuais, mostrados em **Propriedades**).

## Térmico: para onde vai o calor?

1. Escolha **Térmico (transferência de calor)** como **Tipo**.
2. Adicione condições térmicas pela lista **Adicionar** do painel, depois clique nas faces delas (como para apoios e cargas):
   - **Temperatura fixa**: a face é mantida em uma temperatura, em °C.
   - **Fluxo de calor**: W/m² entrando na face (negativo sai). Atua na área real da face, mesmo quando os cubos formam uma forma escalonada.
   - **Potência térmica**: um total em watts, distribuído pelas faces selecionadas proporcionalmente à área. Use para um aquecedor ou um chip de potência conhecida.
   - **Convecção**: ar ou líquido em uma temperatura retira calor em h W/(m²·K). Valores típicos de h: ar parado 5–10, um ventilador 25–100, água 500–10,000. O PartCraft não calcula h: não há escoamento de fluido neste estudo.
   - **Radiação**: a face irradia para o entorno em uma temperatura, com emissividade de 0 a 1. É **linearizada** (a radiação é escrita como um coeficiente que depende da temperatura e resolvida novamente até se estabilizar) e vai apenas para o entorno: as faces não trocam calor entre si.
3. **Geração de calor** (W/m³) aquece a peça inteira por dentro, por exemplo uma peça resistiva.
4. Pressione **Resolver**. A peça é colorida pela temperatura; escolha **Fluxo de calor** em **Mostrar** para ver por onde o calor flui. Aponte para a peça para ler os dois.

Fluxo de calor permanente precisa de um lugar para o calor ir: pelo menos uma temperatura fixa, convecção ou radiação. Uma peça que só recebe calor não tem estado permanente; torne o estudo transiente.

A tabela lista a menor e a maior temperatura e onde estão, o maior fluxo de calor e o **balanço de calor**: o calor que entra ou sai de cada condição (uma temperatura fixa conta o que precisa fornecer ou absorver), o calor gerado, os totais de entrada e saída e o **desbalanço**. O desbalanço deve ser uma fração mínima do calor que entra; um valor alto significa que o resultado não é confiável.

### Ao longo do tempo (transiente)

Marque **Transiente** e informe uma **Temperatura inicial** (a peça inteira começa nela), um **Intervalo de tempo** e um número de **Passos de tempo**. **Euler implícito** é robusto; **Crank–Nicolson** é mais precisa para os mesmos passos, mas pode oscilar após uma mudança brusca. Após resolver, arraste o controle deslizante **Tempo** para ver as temperaturas em cada instante (a escala de cores permanece a mesma para todos os instantes). O balanço de calor então inclui o calor armazenado.

## Tensão térmica: o que uma mudança de temperatura faz com a peça?

Em um estudo de **Tensão estática** (ou **Flambagem**), defina **Carga térmica**:

- **Variação uniforme de temperatura**: a peça inteira aquece (ou esfria, com número negativo) esse número de kelvins.
- **Temperaturas de condições térmicas**: adicione condições térmicas ao mesmo estudo; as temperaturas permanentes são resolvidas primeiro na mesma malha, depois a peça se expande em α·(T − a **temperatura sem tensão**).
- **Temperaturas ao longo do tempo (execução transiente)**: adicione condições térmicas, depois informe uma **Temperatura inicial**, **Intervalo de tempo**, **Passos de tempo** e **Avanço no tempo**, como em um estudo térmico transiente. As temperaturas são resolvidas ao longo do tempo na mesma malha (cubos ou tetraedros), e um cálculo estático em cada temperatura de instante dá a tensão desse instante. **Tensão em**:
  - **O pior instante** (o início): **Cálculos de tensão** distribui instantes uniformemente ao longo da execução, incluindo o início (21 por padrão, a menos que você altere; no máximo 51). Os resultados abrem no instante com a maior tensão de von Mises; a tabela o nomeia, um pequeno gráfico mostra a tensão de pico em relação ao tempo, e o controle deslizante **Tempo** mostra a tensão em cada instante calculado (a escala de cores permanece a do pior instante).
  - **Um tempo escolhido**: um instante, o passo de tempo mais próximo do **Tempo (s)** que você informar. Um estudo de flambagem sempre usa um tempo escolhido (o fim da execução, a menos que você defina outro).

Uma peça temperada (mergulhada de quente em frio) ou aquecida bruscamente fica mais tensionada enquanto o interior e a superfície diferem mais: muitas vezes logo no início. Uma temperatura mantida se aplica desde o primeiro instante, como uma mudança súbita, então a tensão no início depende do tamanho do elemento (apenas alguns elementos percebem a mudança). Leia isso como "muito alta", e observe os próximos instantes do controle deslizante para valores que a malha resolve. A tensão é quase estática: sem inércia, sem vibração pela mudança súbita.

Uma peça livre para se dilatar não tem tensão térmica: apoie-a apenas o suficiente para impedi-la de se mover (por exemplo, três faces sem atrito em ângulos retos). Presa entre duas paredes rígidas, ela é comprimida: uma barra de aço aquecida em 50 kelvins entre paredes rígidas suporta cerca de 117 MPa. Cargas térmicas se equilibram sozinhas, então as reações ainda equilibram apenas as cargas mecânicas.

## Flambagem: quando uma peça esbelta cede?

1. Escolha **Flambagem (linear)** como **Tipo** e adicione apoios e cargas como em um estudo estático.
2. Defina **Fatores de carga a encontrar** (quantos modos de flambagem).
3. Pressione **Resolver**. Cada modo tem um **fator de carga**: o múltiplo das suas cargas no qual a peça ideal flamba. Um fator de carga 3 significa três vezes suas cargas; **um fator de carga abaixo de 1 significa que ela flamba sob as cargas que você aplicou**. A tabela também dá a carga total em cada fator. A forma do modo mostra como ela flamba (seu tamanho não significa nada).

**A flambagem linear superestima a carga real de flambagem.** Ela supõe uma peça perfeita: perfeitamente reta, sem tensão residual e elástica. Peças reais têm pequenas imperfeições e podem escoar primeiro, e cascas de paredes finas podem flambar com uma fração do valor linear. Use uma margem ampla, e trate um fator de carga próximo ou abaixo de 3 para uma casca fina como um aviso.

## Até onde confiar

O PartCraft verifica estes solvers contra fórmulas manuais: uma barra entre duas temperaturas (exata), uma aleta de resfriamento (com erro menor que 0.3 K), uma placa que aquece a si mesma (exata), um cubo que resfria ao longo do tempo (com erro menor que 0.1 % com Crank–Nicolson), uma barra aquecida bruscamente em uma extremidade, uma barra livre aquecida (sem tensão, ΔL = αLΔT), uma barra presa entre paredes (σ = −EαΔT), uma placa temperada ao longo do tempo contra a clássica solução em série (com erro menor que 1 % em cubos e 2.1 % em tetraedros no centro da placa; 0.5 % na superfície), o último instante de uma execução longa contra a tensão térmica permanente (iguais até uma milionésima), e pilares de Euler (com erro menor que 1 % fixo–livre, 1.5 % apoiado–apoiado). Tenha em mente:

- **Valores de material constantes.** Condutividade, calor específico e expansão não mudam com a temperatura aqui; a algumas centenas de graus podem mudar 10–30 %. A rigidez também não muda.
- **A tensão ao longo do tempo é quase estática e elástica**: cada instante é um cálculo estático (sem inércia), e sem escoamento, então uma têmpera que escoaria a superfície mostra uma tensão acima do escoamento.
- **Coeficientes de convecção são sua entrada**, não calculados a partir de um escoamento de ar ou água.
- **Sem resistência de contato**: a peça é um único sólido.
- **Apenas flambagem linear**: sem imperfeições, sem escoamento, sem comportamento após a flambagem.
- A forma escalonada dos cubos e os cantos internos vivos afetam as tensões térmicas da mesma forma que outras tensões (veja [Verificar tensão e deflexão](topic:simulation)).
- Esta é uma versão de laboratório: verifique por outro meio as peças que importam.

## Relacionados

- [Verificar tensão e deflexão (Simulação)](topic:simulation)
- [O que ainda não está implementado](topic:not-built-yet)
