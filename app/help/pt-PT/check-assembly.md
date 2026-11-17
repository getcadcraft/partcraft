---
title: Verificar uma montagem quanto a conflitos e movimento
summary: Encontrar peças que se sobrepõem com Conflitos, arrastar os valores de qualquer junta para ver o movimento e varrer uma junta ao longo do seu intervalo para descobrir onde as peças colidem.
keywords: interferência, deteção de interferências, conflito, colisão, sobreposição, ajuste de rosca, incompatibilidade de profundidade de rosca, faces em contacto, ocultar, filtro, movimento, estudo de movimento, varrimento, intervalo de movimento, verificar
from: 9c98db46
---

Duas verificações são executadas sobre as peças tal como estão posicionadas: **Conflitos** procura material sobreposto neste momento, e a **verificação de movimento** move uma junta ao longo do seu intervalo e procura sobreposições pelo caminho.

## Verificar interferências

1. Abra ou construa uma montagem (ver [Construir uma montagem](topic:build-assembly)).
2. Escolha {{ui:Clash}}.

A barra de estado indica o resultado:

- "Sem interferências entre 3 peças (… ms)." Nada se sobrepõe.
- "Interferência: Flange1 e Flange2: Sobreposição, 2.5 mm³." Cada par, o tipo de resultado e o volume que partilham.

A caixa **Montagem** à esquerda mostra **Interferências**: "Nenhuma", "2 resultados" (os mostrados), ou "Não verificado". Sem nada selecionado, o painel da direita lista cada resultado em **Interferências**.

O resultado é limpo sempre que a montagem muda. Execute {{ui:Clash}} de novo depois de mover uma junta. Cada par de peças é verificado contra todos os outros, por isso as montagens grandes demoram mais.

### Tipos de resultados

| Tipo | Significa |
|---|---|
| **Sobreposição** | As peças partilham volume: um conflito real. |
| **Incompatibilidade de profundidade de rosca** | O volume partilhado está dentro da rosca de uma peça mas além da da outra: um parafuso roscado mais fundo do que o seu furo, ou uma haste lisa num furo roscado. |
| **Ajuste de rosca (roscas cosméticas)** | O volume partilhado está dentro das roscas das duas peças: um parafuso num furo roscado. As roscas cosméticas são desenhadas com o tamanho total da rosca, pelo que se sobrepõem sempre um pouco. |
| **Faces em contacto** | Sem volume partilhado, mas faces em contacto (a menos de 0.001 mm). |

As roscas modeladas (ver [Roscas em veios e furos, desenhadas ou modeladas](topic:threads)) são geometria real: o que partilham é uma **Sobreposição**.

### Ocultar o que não precisa de ver

Em **Interferências**, **Mostrar** tem uma caixa para cada tipo: desmarque **Ajuste de rosca** e **Faces em contacto** para ver apenas os conflitos que importam. **Ocultar este par** ao lado de um resultado oculta esse par de peças, seja qual for o tipo. Os resultados ocultos são contados ("2 resultados ocultos por estes filtros"), e **Mostrar novamente os pares ocultos** repõe os pares. A barra de estado também conta os resultados ocultos.

Os filtros são guardados com a montagem, e cada alteração é um passo de {{key:Mod+Z}}. **Varrer uma junta quanto a conflitos** (abaixo) também os usa. Uma montagem com filtros é guardada como versão 4, que as versões anteriores do PartCraft recusam abrir em vez de perder os filtros.

## Ver o movimento

1. Selecione uma junta que se mova (qualquer uma exceto a rígida) na lista à esquerda.
2. Arraste o cursor sob um dos seus valores, como **Ângulo (°)** ou **Deslocamento (mm)**. A peça move-se à medida que arrasta.
3. Solte. A nova posição mantém-se e pode ser anulada com {{key:Mod+Z}}.

Também pode escrever um ângulo ou deslocamento na caixa e prima {{key:Enter}}.

Uma junta num circuito fechado (uma ligação) move o circuito inteiro: o valor que arrasta mantém-se e as outras juntas do circuito acompanham-no (ver [Circuitos fechados](topic:build-assembly#closed-loops-linkages)).

## Varrer uma junta quanto a conflitos

1. Selecione uma junta que se mova.
2. Numa junta com vários valores (cilíndrica, plana, esférica, pino em ranhura), escolha qual deles varrer em **Verificar movimentos**.
3. Escolha {{ui:Check the motion for clashes}}.

O PartCraft move esse valor por 25 posições em 24 passos iguais, mantendo os restantes como estão: um ângulo de −180° a 180° (uma inclinação de −90° a 90°), um comprimento de negativo a positivo o tamanho da maior peça. Indica:

- "Nenhum conflito em nenhum ponto para Ângulo (°) de -180 a 180 (25 posições verificadas)."
- "6 de 25 posições com conflito, a primeira em Ângulo (°) 45 (12.4 mm³)." A primeira posição em conflito e a sobreposição nesse ponto.

O botão fica a cinzento nas juntas rígidas, que não se movem. A varredura verifica apenas as posições, e não o trajeto entre elas: uma peça fina pode atravessar outra entre dois passos.

:::note
Contacto e gravidade ainda não estão implementados. Sem limites, a varredura abrange todo o intervalo; defina **Limites** para o valor (ver [Lista de peças, vistas explodidas e peças em movimento](topic:assembly-bom-explode)) e a varredura cobre apenas esses, pelo que uma dobradiça que abre 90° é verificada ao longo de 90°.
:::

## Um estudo de movimento

**Montagem › Movimento** faz variar o valor de uma junta desde um início até um fim durante um tempo que indica (velocidade constante, suavizada, sinusoidal, ou ida e volta), posiciona a montagem em cada passo com as suas juntas e circuitos fechados, e indica que conflitos há e quão próximas ficam as peças. **Acrescentar um ponto** segue o centro de uma peça ou um ponto em que clique, e o cartão traça a sua posição, velocidade e aceleração, o valor da junta e a folga em função do tempo; **Guardar CSV** e **Guardar gráfico** escrevem-nos para ficheiro. A velocidade e a aceleração são calculadas a partir das posições registadas, pelo que um pico acentuado entre passos aparece mais baixo: use mais passos.

Depois de **Executar**, a barra **Percorrer a execução** move a montagem para qualquer passo (o tempo, o valor e se há conflitos nesse ponto são mostrados ao lado); a junta mantém o seu próprio valor, e **Voltar ao modelo** repõe a montagem. As definições do estudo são guardadas no ficheiro da montagem; os seus resultados são recalculados por **Executar**.

## Um estudo de contacto

**Montagem › Contacto** mostra como uma montagem transmite as cargas nos pontos onde as peças se pressionam umas às outras. Cada peça traz os seus próprios apoios, cargas e material do seu próprio estudo de **Simulação** (uma face fixa numa peça, uma força noutra); aqui escolhe os pares. **Acrescentar um par**, depois **Selecionar lado A** e clique em faces de uma peça, **Selecionar lado B** e clique em faces de outra peça diferente (um clique numa face já escolhida retira-a; Esc ou **Concluído** termina a seleção). Um par é **Sem atrito** (as peças pressionam-se mas deslizam) ou **Colado** (mantêm-se juntas); o fator de rigidez define a resistência do contacto à penetração (20 é um bom ponto de partida, 1000 para um empilhamento de aço rígido).

**Resolver** aplica a carga em passos e mostra a força de contacto, a maior penetração, o maior deslocamento e a maior tensão. Uma peça sem par fica de fora e o cartão indica-o. O contacto sem atrito não segura uma peça lateralmente: dê a cada peça um apoio no seu próprio estudo de Simulação, ou cole-a, ou os passos podem não convergir. Os pares e as definições são guardados no ficheiro da montagem.

**Exportar ficheiro de entrada CalculiX** escreve o mesmo modelo como ficheiro de entrada CalculiX (.inp). O CalculiX é um programa à parte que instala e executa por si próprio; **Ler resultados do CalculiX (.frd)** lê depois os deslocamentos de volta na malha desta montagem, e recusa um ficheiro feito para outra malha. O solucionador aqui suporta plasticidade, mas não dinâmica explícita, e nada aqui é uma análise certificada: peça a um engenheiro que verifique tudo o que for importante.
