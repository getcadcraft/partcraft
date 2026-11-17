---
title: Definições do PartCraft
summary: Escolha que botão do rato roda a vista, faça com que um deslize no trackpad rode e desloque a peça, ative ou desative as relações automáticas ao esboçar e defina quantas threads usam os solucionadores de simulação.
keywords: definições, preferências, opções, rato, botão do meio, botão da roda, órbita, rodar, trackpad, touchpad, deslocar, deslize, pinça, relações, restrições, relações automáticas, snap, coincidente, threads, threads do solucionador, núcleos, processadores, multithreaded, solução mais rápida, paralelo
from: 759edcaf
---

Abra {{ui:Definições}} com o ícone de engrenagem na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:PartCraft}}, reúne as definições desta aplicação; {{ui:Geral}} reúne as que todas as aplicações CadCraft partilham (tema, barra de ferramentas, painéis). As definições do PartCraft existem só na aplicação: são alteradas aqui, e este navegador memoriza-as. {{ui:Repor as definições do PartCraft}} repõe tudo como estava no início.

## Rodar a vista

- **Botão esquerdo** (predefinido): arraste com o botão esquerdo para rodar a peça; arraste com o botão direito ou com o do meio para deslocar a vista.
- **Botão do meio**: prima a roda e arraste para rodar a peça; mantenha {{key:Shift}} (ou {{key:Ctrl}}, ou ⌘) com o botão do meio, ou arraste com o botão direito, para deslocar. O botão esquerdo só escolhe faces, arestas e planos, por isso um clique que se mova um pouco nunca roda a peça. Muitos programas de CAD funcionam assim.

A roda faz zoom no ponteiro em qualquer dos casos. Num esboço, os botões direito e do meio deslocam a vista como antes.

## Deslocamento: roda do rato ou trackpad

- **Detetar automaticamente** (predefinido): o PartCraft observa o deslocamento. Deslocamentos laterais ou finos, como os que um trackpad envia, rodam a peça; cada entalhe completo da roda faz zoom.
- **Roda do rato**: o deslocamento faz sempre zoom para o ponteiro.
- **Trackpad**: deslize com dois dedos para rodar a peça, mantenha {{key:Shift}} e deslize para deslocar, e faça pinça para ampliar. Num esboço, um deslize com dois dedos desloca o esboço.

Uma pinça amplia em qualquer opção. Se «Detetar automaticamente» adivinhar mal para o seu rato ou trackpad, escolha o que tem. Mais em [Trackpad, toque e ecrãs pequenos](topic:trackpad-and-touch).

## Esboçar: adicionar relações ao desenhar

**Adicionar relações ao desenhar** (ativado por predefinição): um clique que encaixa num ponto torna o novo ponto coincidente com ele, um clique numa curva coloca o ponto sobre essa curva, e uma linha desenhada quase na horizontal ou na vertical torna-se horizontal ou vertical. Veja [Relações e cotas](topic:relations-dimensions).

Desligue esta opção quando quiser colocar geometria perto de outra geometria sem a ligar a ela. O ponteiro continua a encaixar em pontos e curvas, mas nada fica ligado: as linhas desenhadas em cadeia não partilham as extremidades, por isso um arrastamento as pode separar. Adicione as relações que quiser a partir do painel da direita. Um perfil fechado continua a extrudir quando as extremidades se tocam.

:::note
A definição altera apenas o que o novo desenho acrescenta. As relações já existentes num esboço mantêm-se, e a ferramenta Concordância continua a criar o seu arco tangente e o raio.
:::

## Esboçar: cotar enquanto desenha

**Cotar enquanto desenha** (ativado por predefinição): enquanto uma linha, um retângulo, um círculo ou um arco está a ser desenhado, escrever um número preenche a caixa de tamanho junto ao ponteiro ({{key:Tab}} passa para a caixa seguinte), e {{key:Enter}} desenha a forma com esse tamanho, com uma cota conduzida para cada tamanho que escreveu. Desligada, escrever um número enquanto desenha não faz nada, e as formas são desenhadas só com cliques. Veja [Escrever o tamanho enquanto desenha](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vistas** (o predefinido; canto superior direito: clique numa face, aresta ou canto para olhar a partir daí, arraste para orbitar, arraste o anel da bússola para rodar o modelo), **Ícone de eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo, que roda com a vista: X vermelho, Y verde, Z azul) ou **Nenhum**. Nenhum dos dois aparece enquanto esboça ou na folha de desenho. Veja [O cubo de vistas](topic:view-cube).

## Threads do solucionador

Quantas threads os solucionadores de simulação podem usar. **Automático** (predefinido) usa uma a menos do que os processadores lógicos do computador (no máximo 16), para que a página continue responsiva enquanto um estudo resolve; ou escolha um número. Estudos volumétricos grandes, encurvadura, tensão ao longo do tempo e escoamento resolvem-se mais depressa em várias threads (cerca de 2× com 4 threads para 80 000 cubos nas nossas medições, mais num computador sem outra carga). Modelos com menos de cerca de 20 000 incógnitas ficam numa thread, porque iniciar as threads custa mais do que poupam. Uma resolução com threads dá a mesma resposta que com uma thread (a menos de arredondamentos: as somas são feitas por outra ordem). Os resultados de cada estudo mostram **N threads** ou **1 thread**, com a razão, em **Solver**.

As threads exigem que a página esteja **isolada entre origens** (o navegador só deixa os workers partilhar memória nesse caso). A página do laboratório está; onde não estiver, a definição indica-o («Esta página não está isolada entre origens, por isso os solucionadores correm numa thread, qualquer que seja a escolha aqui.») e cada resolução usa uma thread. O resto funciona da mesma forma, e as respostas são as mesmas.

Os estudos de escoamento laminar também usam as threads (cerca de 2.5× com 4 threads para 54 000 células de fluido, a mesma resposta até ao último dígito). O solucionador de tetraedros quadráticos e a transferência de calor correm numa thread: medimos que a paralelização deles era mais lenta no nosso computador de teste (os seus solucionadores são limitados pela velocidade da memória e por um passo que não pode ser dividido).

### No seu próprio servidor web

Se executar o PartCraft a partir do seu próprio servidor, funciona tal como é servido. Para as threads do solucionador, faça com que o servidor envie dois cabeçalhos com a página do PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

No Apache, no `.htaccess` da pasta (precisa de mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

No nginx, no `location` que serve o PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Recarregue a página: Definições › Threads do solucionador passa então a oferecer **Automático** com a contagem do seu computador. O segundo cabeçalho faz o navegador recusar tudo o que a página carregue de outro site que não o permita, o que é adequado para o PartCraft sozinho (carrega tudo da sua própria pasta).
