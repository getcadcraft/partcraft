---
title: Verifique uma montagem quanto a colisões e movimento
summary: Encontre peças que se sobrepõem com Colisão, arraste os valores de qualquer junta para ver o movimento, e varra uma junta por toda a sua faixa para descobrir onde as peças colidem.
keywords: interferência, detecção de interferência, colisão, sobreposição, encaixe de rosca, incompatibilidade de profundidade de rosca, faces em contato, ocultar, filtrar, movimento, estudo de movimento, varredura, faixa de movimento, verificar
from: 9c98db46
---

Duas verificações rodam sobre as peças como estão posicionadas: **Colisão** procura material sobreposto agora, e a **verificação de movimento** move uma junta por sua faixa e procura sobreposições ao longo do caminho.

## Verificar interferência

1. Abra ou crie uma montagem (veja [Monte uma montagem](topic:build-assembly)).
2. Escolha {{ui:Colisão}}.

A barra de status informa o resultado:

- "Nenhuma interferência entre 3 peças (… ms)." Nada se sobrepõe.
- "Interferência: Flange1 e Flange2: Sobreposição, 2.5 mm³." Cada par, o tipo de resultado e o volume que eles compartilham.

A caixa **Montagem** à esquerda mostra **Interferência**: "Nenhuma", "2 resultados" (os exibidos), ou "Não verificada". Com nada selecionado, o painel da direita lista cada resultado em **Interferência**.

O resultado é apagado sempre que a montagem muda. Execute {{ui:Colisão}} novamente depois de mover uma junta. Cada par de peças é comparado com todos os outros, então montagens grandes levam mais tempo.

### Tipos de resultado

| Tipo | Significa |
|---|---|
| **Sobreposição** | As peças compartilham volume: uma colisão real. |
| **Incompatibilidade de profundidade de rosca** | O volume compartilhado está dentro da rosca de uma peça, mas além da rosca da outra: um parafuso roscado mais fundo do que o furo, ou uma haste lisa em um furo rosqueado. |
| **Encaixe de rosca (roscas cosméticas)** | O volume compartilhado está dentro das roscas das duas peças: um parafuso em um furo rosqueado. Roscas cosméticas são desenhadas no tamanho total da rosca, então sempre se sobrepõem um pouco. |
| **Faces em contato** | Nenhum volume compartilhado, mas faces em contato (dentro de 0.001 mm). |

Roscas modeladas (veja [Roscas em eixos e furos, desenhadas ou modeladas](topic:threads)) são geometria real: o que compartilham é uma **Sobreposição**.

### Oculte o que você não precisa ver

Em **Interferência**, **Mostrar** tem uma caixa para cada tipo: desmarque **Encaixe de rosca** e **Faces em contato** para ver só as colisões que importam. **Ocultar este par** ao lado de um resultado oculta esse par de peças, qualquer que seja o tipo. Resultados ocultos são contados ("2 resultados ocultos por estes filtros"), e **Mostrar os pares ocultos novamente** os traz de volta. A barra de status também conta os resultados ocultos.

Os filtros são salvos com a montagem, e cada alteração é uma etapa de {{key:Mod+Z}}. **Varrer uma junta quanto a colisões** (abaixo) também os usa. Uma montagem com filtros é salva como versão 4, que versões anteriores do PartCraft recusam abrir em vez de perder os filtros.

## Acompanhe o movimento

1. Selecione uma junta que se move (qualquer uma, exceto rígida) na lista à esquerda.
2. Arraste o controle deslizante abaixo de um dos seus valores, como **Ângulo (°)** ou **Deslocamento (mm)**. A peça se move enquanto você arrasta.
3. Solte. A nova posição é mantida e pode ser desfeita com {{key:Mod+Z}}.

Você também pode digitar um ângulo ou deslocamento na caixa e pressionar {{key:Enter}}.

Uma junta em um laço fechado (um mecanismo) move o laço inteiro: o valor que você arrasta é mantido e as outras juntas do laço acompanham (veja [Laços fechados](topic:build-assembly#closed-loops-linkages)).

## Varrer uma junta quanto a colisões

1. Selecione uma junta que se move.
2. Para uma junta com vários valores (cilíndrica, planar, esférica, pino em ranhura), escolha qual varrer em **Verificar movimentos**.
3. Escolha {{ui:Verificar o movimento quanto a colisões}}.

O PartCraft move esse valor por 25 posições em 24 passos iguais, os demais permanecendo como estão: um ângulo de −180° a 180° (uma inclinação de −90° a 90°), um comprimento do negativo ao positivo do tamanho da maior peça. Ele informa:

- "Nenhuma colisão em toda a faixa de Ângulo (°) de -180 a 180 (25 posições verificadas)."
- "6 de 25 posições colidem, a primeira em Ângulo (°) 45 (12.4 mm³)." A primeira posição que colide e a sobreposição ali.

O botão fica desativado para juntas rígidas, que não se movem. A varredura verifica apenas as posições, não o caminho entre elas: uma peça fina poderia passar por outra entre dois passos.

:::note
Contato e gravidade ainda não estão implementados. Sem limites, a varredura cobre toda a faixa; defina os **Limites** do valor (veja [Lista de peças, vistas explodidas e peças móveis](topic:assembly-bom-explode)) e a varredura cobre apenas eles, então uma dobradiça que abre 90° é verificada ao longo de 90°.
:::

## Um estudo de movimento

**Montagem › Movimento** aciona o valor de uma junta de um início até um fim ao longo de um tempo que você define (velocidade constante, suavizada, senoidal, ou ida e volta), posiciona a montagem em cada passo com as suas juntas e laços fechados, e informa quais colisões ocorrem e quão próximas as peças chegam. **Adicionar um ponto** acompanha o meio de uma peça ou um ponto que você clicar nela, e o cartão plota sua posição, velocidade e aceleração, o valor da junta e a folga em função do tempo; **Salvar CSV** e **Salvar gráfico** os gravam. Velocidade e aceleração vêm das posições registradas, então um pico agudo entre passos aparece baixo: use mais passos.

Após **Executar**, a barra **Percorrer a execução** move a montagem para qualquer passo (o tempo, o valor e se as peças colidem ali são mostrados ao lado); a junta mantém o próprio valor, e **Voltar ao modelo** recoloca a montagem no lugar. As configurações do estudo são salvas no arquivo da montagem; seus resultados são refeitos por **Executar**.

## Um estudo de contato

**Montagem › Contato** mostra como uma montagem transmite as cargas onde as peças pressionam umas às outras. Cada peça traz seus próprios apoios, cargas e material do próprio estudo de **Simulação** (uma face fixa em uma peça, uma força em outra); aqui você escolhe os pares. **Adicionar um par**, depois **Escolher lado A** e clique em faces de uma peça, **Escolher lado B** e clique em faces de outra peça diferente (um clique em uma face escolhida a tira; Esc ou **Concluir** encerra a escolha). Um par é **Sem atrito** (as peças pressionam mas deslizam) ou **Colado** (permanecem juntas); o fator de rigidez define o quanto o contato resiste a afundar (20 é um bom começo, 1000 para uma pilha de aço rígida).

**Resolver** executa a carga em passos e mostra a força de contato, a maior profundidade de afundamento, o maior deslocamento e a maior tensão. Uma peça sem par fica de fora, e o cartão informa isso. Contato sem atrito não segura a peça lateralmente: dê a cada peça um apoio no próprio estudo de Simulação, ou cole-a, ou os passos podem não se estabilizar. Os pares e as configurações são salvos no arquivo da montagem.

**Exportar arquivo de entrada do CalculiX** grava o mesmo modelo como um arquivo de entrada do CalculiX (.inp). O CalculiX é um programa separado que você instala e executa por conta própria; **Ler resultados do CalculiX (.frd)** então lê os deslocamentos de volta na malha desta montagem e recusa um arquivo feito para outra malha. O solver aqui é capaz de plasticidade, mas não de dinâmica explícita, e nada aqui é uma análise certificada: peça a um engenheiro que verifique tudo que for importante.
