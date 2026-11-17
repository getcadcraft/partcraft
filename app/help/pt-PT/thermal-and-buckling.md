---
title: Calor, tensão térmica e encurvadura
summary: Encontre as temperaturas numa peça a partir de temperaturas fixas, fluxo de calor, potência térmica, convecção e radiação (em regime estacionário ou ao longo do tempo), carregue um estudo de tensões com uma subida de temperatura e encontre a carga à qual uma peça esbelta encurva, com o que cada método pode e não pode dizer.
keywords: térmico, transferência de calor, calor, temperatura, condução, convecção, coeficiente de película, radiação, emissividade, fluxo de calor, potência térmica, geração de calor, dissipador de calor, transitório, tempo, arrefecimento, aquecimento, Crank-Nicolson, Euler implícito, balanço de calor, tensão térmica, tensão térmica ao longo do tempo, tensão térmica transitória, têmpera, choque térmico, histórico de tensões, pior instante, dilatação térmica, coeficiente de dilatação, encurvadura, encurvadura de Euler, fator de carga, carga crítica, coluna, esbelta, valor próprio
from: 1a1b7545
---

Estes estudos vivem no espaço de trabalho Simulação, ao lado da tensão estática e das frequências naturais (ver [Verificar tensão e deformação](topic:simulation)). Escolha-os na caixa **Tipo** do painel. Usam a mesma malha de pequenos cubos e a mesma lista de materiais; cada material da biblioteca tem uma condutividade térmica, um calor específico e um coeficiente de dilatação (valores típicos de manuais, indicados em **Propriedades**).

## Térmico: para onde vai o calor?

1. Escolha **Térmico (transferência de calor)** como **Tipo**.
2. Acrescente condições térmicas a partir da lista **Adicionar** do painel e clique depois nas suas faces (como para apoios e cargas):
   - **Temperatura fixa**: a face é mantida a uma temperatura, em °C.
   - **Fluxo de calor**: W/m² que entram na face (negativo significa que sai). Atua sobre a área real da face, mesmo onde os cubos formam uma escada.
   - **Potência térmica**: um total em watts, repartido pelas faces escolhidas proporcionalmente à área. Use-a para um aquecedor ou um chip de potência conhecida.
   - **Convecção**: ar ou líquido a uma temperatura retira calor a h W/(m²·K). Valores típicos de h: ar parado 5–10, ventoinha 25–100, água 500–10,000. O PartCraft não calcula h: não há escoamento de fluidos neste estudo.
   - **Radiação**: a face irradia para o exterior a uma temperatura, com uma emissividade entre 0 e 1. É **linearizada** (a radiação é escrita como um coeficiente que depende da temperatura e resolvida de novo até estabilizar) e vai apenas para o exterior: as faces não trocam calor entre si.
3. **Geração de calor** (W/m³) aquece a peça inteira a partir do interior, por exemplo uma peça resistiva.
4. Prima **Resolver**. A peça é colorida pela temperatura; escolha **Fluxo de calor** em **Mostrar** para ver por onde o calor flui. Aponte para a peça para ler ambos.

O fluxo de calor estacionário precisa de um destino para o calor: pelo menos uma temperatura fixa, convecção ou radiação. Uma peça que só recebe calor não tem estado estacionário; torne-a transitória.

A tabela indica a temperatura mais baixa e a mais alta e onde estão, o maior fluxo de calor, e o **balanço de calor**: o calor que entra ou sai de cada condição (uma temperatura fixa conta o que tem de fornecer ou absorver), o calor gerado, os totais de entrada e saída e o **desequilíbrio**. O desequilíbrio deve ser uma pequena fração do calor que entra; um desequilíbrio grande significa que o resultado não é de confiança.

### Ao longo do tempo (transitório)

Marque **Transitório** e indique uma **Temperatura inicial** (a peça inteira começa aí), um **Intervalo de tempo** e um número de **Passos de tempo**. O **Euler implícito** é robusto; o **Crank–Nicolson** é mais exato para os mesmos passos, mas pode oscilar após uma mudança súbita. Depois de resolver, arraste o cursor **Tempo** para ver as temperaturas em cada instante (a escala de cores mantém-se a mesma para todos os instantes). O balanço de calor inclui então o calor armazenado.

## Tensão térmica: o que faz uma variação de temperatura à peça?

Num estudo de **Tensão estática** (ou **Encurvadura**), defina a **Carga térmica**:

- **Variação uniforme de temperatura**: a peça inteira aquece (ou arrefece, com um número negativo) esse número de kelvin.
- **Temperaturas a partir de condições térmicas**: acrescente condições térmicas ao mesmo estudo; as temperaturas estacionárias são primeiro resolvidas na mesma malha, depois a peça dilata-se por α·(T − a **temperatura sem tensão**).
- **Temperaturas ao longo do tempo (corrida transitória)**: acrescente condições térmicas e depois indique uma **Temperatura inicial**, **Intervalo de tempo**, **Passos de tempo** e **Avanço no tempo**, como num estudo térmico transitório. As temperaturas são resolvidas ao longo do tempo na mesma malha (cubos ou tetraedros), e uma resolução estática sobre as temperaturas de cada instante dá a tensão desse instante. **Tensão em**:
  - **O pior instante** (o início): **Resoluções de tensão** distribui instantes uniformemente pela corrida, incluindo o início (21 por predefinição, a não ser que altere; no máximo 51). Os resultados abrem no instante com a maior tensão de von Mises; a tabela indica-o, um pequeno gráfico mostra a tensão de pico ao longo do tempo, e o cursor **Tempo** mostra a tensão em cada instante resolvido (a escala de cores mantém-se a do pior instante).
  - **Um tempo escolhido**: um instante, o passo de tempo mais próximo do **Tempo (s)** que indicar. Um estudo de encurvadura toma sempre um tempo escolhido (o fim da corrida, a não ser que defina outro).

Uma peça temperada (mergulhada do quente para o frio) ou aquecida subitamente fica mais tensionada enquanto o interior e a superfície mais diferem: muitas vezes logo no início. Uma temperatura mantida aplica-se desde o primeiro instante, como uma mudança súbita, por isso a tensão no próprio início depende do tamanho do elemento (só alguns elementos veem a mudança). Leia-a como «muito alta» e veja os instantes seguintes no cursor para valores que a malha resolve. A tensão é quase-estática: sem inércia, sem vibração provocada pela mudança súbita.

Uma peça livre para crescer não tem tensão térmica: fixe-a apenas o suficiente para não se mover (por exemplo, três faces sem atrito em ângulo reto). Presa entre duas paredes, fica comprimida: uma barra de aço aquecida 50 K entre paredes rígidas suporta cerca de 117 MPa. As cargas térmicas equilibram-se sozinhas, por isso as reações só equilibram as cargas mecânicas.

## Encurvadura: quando é que uma peça esbelta cede?

1. Escolha **Encurvadura (linear)** como **Tipo** e acrescente apoios e cargas como num estudo estático.
2. Defina **Fatores de carga a encontrar** (quantos modos de encurvadura).
3. Prima **Resolver**. Cada modo tem um **fator de carga**: o múltiplo das suas cargas ao qual a peça ideal encurva. Um fator de carga de 3 significa três vezes as suas cargas; **um fator de carga abaixo de 1 significa que encurva sob as cargas aplicadas**. A tabela indica também a carga total a cada fator. A forma do modo mostra como encurva (o seu tamanho não tem significado).

**A encurvadura linear sobrestima a carga real de encurvadura.** Assume uma peça perfeita: perfeitamente reta, sem tensão residual e elástica. As peças reais têm pequenas imperfeições e podem ceder primeiro, e as cascas de parede fina podem encurvar a uma fração do valor linear. Use uma margem generosa, e trate um fator de carga perto de ou abaixo de 3 para uma casca fina como um aviso.

## Até que ponto confiar

O PartCraft verifica estes resolvedores contra fórmulas de cálculo manual: uma barra entre duas temperaturas (exato), uma aleta de arrefecimento (dentro de 0.3 K), uma placa que se aquece a si própria (exato), um cubo que arrefece ao longo do tempo (dentro de 0.1 % com Crank–Nicolson), uma barra subitamente aquecida numa extremidade, uma barra livre aquecida (sem tensão, ΔL = αLΔT), uma barra presa entre paredes (σ = −EαΔT), uma placa temperada ao longo do tempo contra a solução clássica em série (dentro de 1 % em cubos, 2.1 % em tetraedros no centro da placa; 0.5 % na sua superfície), o último instante de uma corrida longa contra a tensão térmica estacionária (iguais até à milionésima), e colunas de Euler (dentro de 1 % fixa–livre, 1.5 % apoiada–apoiada). Tenha em conta:

- **Valores de material constantes.** A condutividade, o calor específico e a dilatação não mudam com a temperatura aqui; a algumas centenas de graus podem mudar 10–30 %. A rigidez também não muda.
- **A tensão ao longo do tempo é quase-estática e elástica**: cada instante é uma resolução estática (sem inércia) e sem cedência, por isso uma têmpera que cederia a superfície mostra uma tensão acima do limite de cedência.
- **Os coeficientes de convecção são dados de entrada**, não calculados a partir de um escoamento de ar ou água.
- **Sem resistência de contacto**: a peça é um só sólido.
- **Apenas encurvadura linear**: sem imperfeições, sem cedência, sem comportamento após a encurvadura.
- O efeito de escada dos cubos e os cantos interiores vivos afetam as tensões térmicas da mesma forma que as outras tensões (ver [Verificar tensão e deformação](topic:simulation)).
- Esta é uma versão de laboratório: verifique de outra forma as peças que importam.

## Relacionados

- [Verificar tensão e deformação (Simulação)](topic:simulation)
- [O que ainda não está implementado](topic:not-built-yet)
