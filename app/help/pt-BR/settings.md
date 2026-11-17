---
title: Configurações do PartCraft
summary: Escolha qual botão do mouse gira a vista, faça um gesto de deslizar no trackpad girar e deslocar a peça, ative ou desative as relações automáticas ao esboçar e defina quantas threads os solucionadores de simulação usam.
keywords: configurações, preferências, opções, mouse, botão do meio, botão da roda, órbita, girar, trackpad, touchpad, rolagem, deslizar, pinça, relações, restrições, restrição automática, relações automáticas, snap, coincidente, threads, threads do solucionador, núcleos, processadores, multithread, resolução mais rápida, paralelo
from: 759edcaf
---

Abra {{ui:Configurações}} pela engrenagem na barra do aplicativo ou com {{key:Mod+,}}. A primeira aba, {{ui:PartCraft}}, contém as configurações deste aplicativo; {{ui:Geral}} contém as que todos os aplicativos do CadCraft compartilham (tema, barra de ferramentas, painéis). As configurações do PartCraft existem apenas no aplicativo: você as altera aqui, e este navegador as lembra. {{ui:Redefinir configurações do PartCraft}} devolve tudo ao início.

## Girar a vista

- **Botão esquerdo** (o inicial): arraste com o botão esquerdo para girar a peça; arraste com o botão direito ou do meio para deslocar.
- **Botão do meio**: pressione a roda e arraste para girar a peça; segure {{key:Shift}} (ou {{key:Ctrl}}, ou ⌘) com o botão do meio, ou arraste com o botão direito, para deslocar. O botão esquerdo apenas seleciona faces, arestas e planos, então um clique que se move um pouco nunca gira a peça. Muitos programas de CAD funcionam assim.

A roda aproxima sempre na direção do ponteiro, nos dois casos. No esboço, os botões direito e do meio deslocam como antes.

## Rolagem: roda do mouse ou trackpad

- **Descobrir sozinho** (o inicial): o PartCraft observa a rolagem. Rolagem lateral ou de precisão, como a que um trackpad envia, gira a peça; os cliques inteiros da roda dão zoom.
- **Roda do mouse**: rolar sempre dá zoom na direção do ponteiro.
- **Trackpad**: deslize com dois dedos para girar a peça, segure {{key:Shift}} e deslize para deslocar, faça pinça para dar zoom. No esboço, um deslize com dois dedos desloca o esboço.

Um gesto de pinça dá zoom em todas as opções. Se "Descobrir sozinho" errar com o seu mouse ou trackpad, escolha o que você tem. Mais em [Trackpad, toque e telas pequenas](topic:trackpad-and-touch).

## Esboçar: adicionar relações ao desenhar

**Adicionar relações ao desenhar** (ligado no início): um clique que encaixa em um ponto torna o novo ponto coincidente com ele, um clique sobre uma curva coloca o ponto sobre essa curva, e uma linha desenhada quase horizontal ou vertical torna-se horizontal ou vertical. Veja [Relações e cotas](topic:relations-dimensions).

Desligue quando quiser posicionar geometria perto de outra sem prendê-la. O ponteiro ainda encaixa em pontos e curvas, mas nada é unido: linhas desenhadas em cadeia não compartilham as extremidades, então um arrasto pode separá-las. Adicione você mesmo as relações desejadas no painel da direita. Um perfil fechado ainda é extrudado quando suas extremidades se encontram.

:::note
A configuração altera apenas o que novos desenhos acrescentam. As relações que já existem em um esboço permanecem, e a ferramenta Concordância ainda cria seu arco tangente e seu raio.
:::

## Esboçar: cotar enquanto desenha

**Cotar enquanto desenha** (ligado no início): enquanto uma linha, retângulo, círculo ou arco está sendo desenhado, digitar um número preenche a caixa de medida ao lado do ponteiro ({{key:Tab}} vai para a próxima caixa), e {{key:Enter}} desenha a forma nessa medida, com uma cota de controle para cada medida digitada. Desligado: digitar um número enquanto desenha não faz nada, e as formas são desenhadas apenas com cliques. Veja [Digitar a medida ao desenhar](topic:sketch-basics#type-the-size-as-you-draw).

## Indicador de canto

O que aparece no canto da vista 3D: **Cubo de vista** (o inicial; canto superior direito — clique em uma face, aresta ou canto para olhar a partir dali, arraste para orbitar, arraste seu anel de bússola para girar o modelo), **Ícone de eixos** (um pequeno marcador X, Y, Z no canto inferior esquerdo que gira com a vista: X vermelho, Y verde, Z azul) ou **Nenhum**. Nenhum dos dois aparece ao esboçar nem na folha de desenho. Veja [O cubo de vista](topic:view-cube).

## Threads do solucionador

Quantas threads os solucionadores de simulação podem usar. **Automático** (o inicial) usa uma a menos que os processadores lógicos do computador (no máximo 16), para que a página continue responsiva enquanto um estudo é resolvido; ou escolha um número. Estudos com voxels grandes, flambagem, tensão ao longo do tempo e fluxo resolvem mais rápido em várias threads (cerca de 2× com 4 threads para 80,000 cubos em nossas medições, mais em um computador ocioso); modelos com menos de cerca de 20,000 incógnitas ficam em uma thread, porque iniciar as threads custa mais do que economizam. Uma resolução com threads dá a mesma resposta que com uma thread (a menos de arredondamento: as somas são feitas em outra ordem). Os resultados de cada estudo listam **N threads** ou **1 thread**, com o motivo, em **Solucionador**.

As threads exigem que a página seja **isolada de origem cruzada** (o navegador só deixa os workers compartilharem memória nesse caso). A página do laboratório é; onde não é, a configuração avisa ("Esta página não é isolada de origem cruzada, então os solucionadores rodam em uma thread, qualquer que seja a escolha aqui.") e cada resolução usa uma thread. Todo o restante funciona da mesma forma, e as respostas são as mesmas.

Estudos de escoamento laminar também usam as threads (cerca de 2.5× com 4 threads para 54,000 células de fluido, a mesma resposta até o último dígito). O solucionador de tetraedros quadráticos e a transferência de calor rodam em uma thread: torná-los com threads foi medido como mais lento no nosso computador de teste (esses solucionadores são limitados pela velocidade da memória e por uma etapa que não pode ser dividida).

### No seu próprio servidor web

Se você executa o PartCraft a partir do seu próprio servidor, ele funciona como servido. Para as threads do solucionador, faça o servidor enviar dois cabeçalhos com a página do PartCraft:

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

Recarregue a página: Configurações › Threads do solucionador passa a oferecer **Automático** com a contagem do seu computador. O segundo cabeçalho faz o navegador recusar qualquer coisa que a página carregue de outro site que não permita isso, o que é adequado para o PartCraft sozinho (ele carrega tudo da sua própria pasta).
