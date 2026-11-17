---
title: Mover peças de e para outros modeladores de peças
summary: Enviar uma peça para outro modelador de peças como macro que a reconstrói com uma árvore de operações ativa. O STEP com nome e a abertura da lista de operações escrita por outro modelador ainda não estão implementados nesta versão.
keywords: macro, ainda não implementado, swb, vba, árvore de operações, ida e volta, macro de exportação, cadcraft-sw.json, step com nome, ap214, variáveis globais, equações, peça nativa
from: 97ca61da
---

O PartCraft troca peças com o SolidWorks nos dois sentidos, sem um formato de ficheiro que ninguém mais consiga ler:

- **Ida:** uma macro (`.swb`, texto simples) que o SolidWorks executa para construir a própria peça, operação a operação, com os seus esboços, relações, cotas, variáveis globais e equações. Obtém uma peça nativa com uma árvore de operações ativa, e não um sólido inerte.
- **Volta:** uma macro que executa dentro do SolidWorks escreve as operações e equações da peça num ficheiro `.cadcraft-sw.json`. A abertura desse ficheiro no PartCraft ainda não está implementada nesta versão (exige um kernel exato).

:::warning
Nada disto foi ainda testado no SolidWorks. O SolidWorks só funciona no Windows e com licença, e o PartCraft nunca executou estas macros nele. As macros foram escritas a partir da documentação da API do SolidWorks e verificadas aqui quanto à estrutura. Prevê-se que haja problemas a reportar; o registo que a macro escreve indica qual o passo que falhou.
:::

O PartCraft não consegue escrever um ficheiro `.sldprt`: esse formato é fechado. A macro é o caminho para obter uma peça nativa.

## Enviar uma peça como macro

1. Abrir a peça.
2. Escolher {{ui:Exportar}}, depois {{ui:Macro para SolidWorks (.swb)}}. O PartCraft transfere `<part>.swb`; a barra de estado indica que foi « escrito sem o kernel exato ».
3. Uma caixa de diálogo indica quantas operações, variáveis globais e equações a macro constrói, e lista o que deixa de fora. Nesta versão não é gerado nenhum STEP ao lado: use {{ui:Exportar}} e depois {{ui:STEP (facetado, kernel de malha)}}, se precisar de um.
4. No SolidWorks, escolha **Tools > Macro > Run**, escolha o ficheiro `.swb` e aguarde. Cria uma nova peça a partir do seu modelo de peça predefinido, define milímetros e constrói todas as operações.
5. No fim, uma mensagem indica quantos passos foram executados, quantos falharam e quantos correspondem ao corpo do PartCraft. O registo completo, `<part> macro log.txt`, é escrito junto à macro.

O que a macro constrói:

| PartCraft | Na nova peça |
|---|---|
| Esboço no plano Frontal, Superior ou Direito | Um esboço nesse plano, com as suas linhas, arcos, círculos, pontos, relações e cotas (com nomes como no PartCraft, por exemplo `k7`) |
| Esboço numa face | Um esboço na mesma face, escolhido por um ponto nela |
| Esboço num plano fixo | Um plano de referência definido por três pontos, e o esboço nesse plano |
| Extrudir, cortar (cego, através de tudo, a meio do plano, duas direções, conicidade) | Extrusão de saliência ou extrusão de corte |
| Revolução, corte por revolução | Revolução em torno da mesma linha de eixo |
| Furo (simples, rebaixo, escareado, roscado) | Um ou dois cortes com os seus próprios esboços (um furo roscado é o seu furo de broca; sem rosca) |
| Matriz linear e circular, espelho | Matriz linear, matriz circular, espelho (operações ou o corpo) |
| Boleado, chanfre, casca | Boleado, chanfre e casca nas mesmas arestas e faces, escolhidas por pontos |
| Parâmetros e equações | Variáveis globais e equações nas cotas renomeadas |
| Operações suprimidas, barra de retrocesso | Suprimidas do mesmo modo; a barra de retrocesso no mesmo lugar |

Após cada operação sólida, a macro compara o volume e o tamanho do corpo com os do PartCraft. Quando diferem, roda uma vez o sentido dessa operação e volta a verificar; se não melhorar, desfaz a rotação e escreve « Check » no registo.

### O que fica de fora

A caixa de diálogo e o início da macro listam tudo o que não foi transposto, com o motivo. Neste momento, são: sólidos importados (insira o STEP em vez disso), varrimentos, lofts, ângulos de saída, eixos e pontos de referência, condições de fim « até », extrusão de apenas alguns contornos e tudo o que deles dependa. As splines tornam-se curvas que passam pelos seus pontos. Esta versão não tem kernel exato, pelo que os esboços em faces e as operações que escolhem arestas ou faces também ficam de fora.

## Enviar um STEP com nome

Ainda não implementado nesta versão: {{ui:STEP para SolidWorks (com nome, AP214)}} exige um kernel exato, e escolhê-lo indica « STEP para SolidWorks: ainda não implementado. … ». Com um kernel exato, o ficheiro leva o nome da peça, milímetros e a cor da peça, e fica com Y para cima, como o SolidWorks mostra as peças (a exportação {{ui:STEP AP214 (sólido exato)}} fica com Z para cima). As letras com acento perdem-no no nome, e os outros caracteres fora do ASCII simples passam a `_`.

## Trazer uma peça de volta

A abertura do ficheiro no PartCraft (passo 3) ainda não está implementada nesta versão: indica « Abrir uma exportação do SolidWorks: ainda não implementado. … ». A aplicação de desenho CadCraft continua a abrir o ficheiro e recolhe os seus esboços.

1. Escolher {{ui:Ficheiro}} > {{ui:Exportar}} > {{ui:Macro de exportação para trazer peças de volta (.swb)}} para transferir `CadCraftExport.swb` e colocá-lo junto às suas peças.
2. No SolidWorks, abrir a peça, escolher **Tools > Macro > Run** e escolher `CadCraftExport.swb`. Escreve `<part>.cadcraft-sw.json` junto à peça e não altera nada nela.
3. No PartCraft, escolher {{ui:Abrir}} e escolher esse ficheiro, ou largá-lo na vista 3D.
4. Com um kernel exato, o PartCraft reconstrói a peça operação a operação e mostra o que fez: por exemplo, « 5 de 5 operações transpostas do SolidWorks (Flange.SLDPRT) », cada operação que não conseguiu transpor (« Não transposta: Sweep1 (Sweep). ») e se o volume corresponde ao que o SolidWorks escreveu.
5. Guardar como peça do PartCraft com {{ui:Guardar}}.

Os esboços caem num plano de base quando estão sobre um, na face plana correspondente da peça quando existe (para que sigam edições posteriores), e num plano fixo nos restantes casos. As arestas e faces de boleados, chanfres e cascas são encontradas a partir de pontos e mantidas como referências com nome. As variáveis globais tornam-se parâmetros (nomes com espaços passam a ter sublinhados: « Bolt count » passa a `Bolt_count`) e as equações tornam-se equações nas mesmas cotas. Nada é deduzido: o que não tem correspondência é listado.

A aplicação de desenho CadCraft abre o mesmo ficheiro e recolhe os seus esboços.

:::note
O formato é `cadcraft-sw-export` versão 1, JSON simples em milímetros e graus. Um ficheiro de uma macro mais recente, ou inválido, é recusado com o motivo.
:::
