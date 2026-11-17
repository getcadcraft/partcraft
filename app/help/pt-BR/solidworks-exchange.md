---
title: Mover peças de e para outros modeladores de peças
summary: Envie uma peça para outro modelador de peças como uma macro que a reconstrói com uma árvore de recursos ativa. O STEP nomeado e a abertura da lista de recursos que outro modelador gravou ainda não estão implementados nesta versão.
keywords: macro, não implementado, swb, vba, árvore de recursos, ida e volta, exportar macro, cadcraft-sw.json, step nomeado, ap214, variáveis globais, equações, peça nativa
from: 97ca61da
---

O PartCraft troca peças com o SolidWorks nos dois sentidos, sem um formato de arquivo que ninguém mais consiga ler:

- **Ida:** uma macro (`.swb`, texto simples) que o SolidWorks executa para construir a peça por conta própria, recurso por recurso, com seus esboços, relações, cotas, variáveis globais e equações. Você obtém uma peça nativa com uma árvore de recursos ativa, não um sólido inerte.
- **Volta:** uma macro que você executa dentro do SolidWorks grava os recursos e equações da peça em um arquivo `.cadcraft-sw.json`. Abrir esse arquivo no PartCraft ainda não está implementado nesta versão (exige um kernel exato).

:::warning
Nada disto foi testado no SolidWorks ainda. O SolidWorks roda apenas no Windows e com licença, e o PartCraft nunca executou estas macros nele. As macros foram escritas a partir da documentação da API do SolidWorks e verificadas aqui quanto à estrutura. Espere reportar problemas; o registro que a macro escreve indica qual etapa falhou.
:::

O PartCraft não consegue gravar um arquivo `.sldprt`: esse formato é fechado. A macro é o caminho para obter uma peça nativa.

## Enviar uma peça como macro

1. Abra a peça.
2. Escolha {{ui:Exportar}}, depois {{ui:Macro para SolidWorks (.swb)}}. O PartCraft baixa `<part>.swb`; a barra de status diz que ela foi "gravada sem o kernel exato".
3. Uma caixa de diálogo informa quantos recursos, variáveis globais e equações a macro constrói e lista o que ela deixa de fora. Nenhum STEP acompanha a macro nesta versão: use {{ui:Exportar}}, depois {{ui:STEP (facetado, kernel de malha)}} se precisar de um.
4. No SolidWorks, escolha **Ferramentas > Macro > Executar**, selecione o arquivo `.swb` e aguarde. Ela cria uma peça nova a partir do seu modelo de peça padrão, define milímetros e constrói todos os recursos.
5. Ao final, uma mensagem informa quantas etapas foram concluídas, quantas falharam e quantas coincidiram com o corpo do PartCraft. O registro completo, `<part> macro log.txt`, é gravado ao lado da macro.

O que a macro constrói:

| PartCraft | Na nova peça |
|---|---|
| Esboço no plano Frontal, Superior ou Direito | Um esboço nesse plano, com suas linhas, arcos, círculos, pontos, relações e cotas (nomeados como no PartCraft, como `k7`) |
| Esboço em uma face | Um esboço na mesma face, escolhido por um ponto nela |
| Esboço em um plano fixo | Um plano de referência definido por três pontos, e o esboço nele |
| Extrusão, corte (cego, até passar tudo, plano médio, duas direções, conicidade) | Extrusão de saliência ou extrusão de corte |
| Revolução, corte por revolução | Revolução em torno do mesmo eixo de centro |
| Furo (simples, rebaixo, escareado, roscado) | Um ou dois cortes com seus próprios esboços (um furo roscado é o seu furo de broca para macho; sem rosca) |
| Matriz linear e circular, espelhar | Matriz linear, matriz circular, espelhar (recursos ou o corpo) |
| Arredondamento, chanfro, casca | Arredondamento, chanfro e casca nas mesmas arestas e faces, escolhidas por pontos |
| Parâmetros e equações | Variáveis globais e equações nas cotas renomeadas |
| Recursos suprimidos, barra de reversão | Suprimidos do mesmo modo; a barra de reversão no mesmo lugar |

Depois de cada recurso sólido, a macro compara o volume e o tamanho do corpo com os do PartCraft. Quando diferem, ela inverte uma vez a direção desse recurso e verifica de novo; se não melhorar, desfaz a inversão e escreve "Check" no registro.

### O que fica de fora

A caixa de diálogo e o início da macro listam tudo que não foi transportado, com o motivo. Hoje são: sólidos importados (insira o STEP em vez disso), varreduras, lofts, ângulos de saída, eixos e pontos de referência, condições de fim "até", extrusão de apenas alguns contornos, e tudo que depende deles. Splines viram curvas pelos seus pontos. Esta versão não tem kernel exato, então esboços em faces e os recursos que escolhem arestas ou faces também ficam de fora.

## Enviar um STEP nomeado

Ainda não implementado nesta versão: {{ui:STEP para SolidWorks (nomeado, AP214)}} exige um kernel exato, e escolhê-lo diz "STEP para SolidWorks: ainda não implementado. …". Com um kernel exato, o arquivo traz o nome da peça, milímetros e a cor da peça, e coloca Y para cima, do modo como o SolidWorks mostra as peças (a exportação simples {{ui:STEP AP214 (sólido exato)}} coloca Z para cima). Letras com acento perdem o acento no nome, e outros caracteres fora do ASCII simples viram `_`.

## Trazer uma peça de volta

Abrir o arquivo no PartCraft (passo 3) ainda não está implementado nesta versão: diz "Abrir uma exportação do SolidWorks: ainda não implementado. …". O aplicativo de desenho CadCraft ainda abre o arquivo e aproveita os esboços.

1. Escolha {{ui:Arquivo}} > {{ui:Exportar}} > {{ui:Exportar macro para trazer peças de volta (.swb)}} para baixar `CadCraftExport.swb` e coloque-o ao lado das suas peças.
2. No SolidWorks, abra a peça, escolha **Ferramentas > Macro > Executar** e selecione `CadCraftExport.swb`. Ela grava `<part>.cadcraft-sw.json` ao lado da peça e não altera nada nela.
3. No PartCraft, escolha {{ui:Abrir}} e selecione esse arquivo, ou arraste-o para a vista 3D.
4. Com um kernel exato, o PartCraft reconstrói a peça recurso por recurso e mostra o que fez: por exemplo, "5 de 5 recursos aproveitados do SolidWorks (Flange.SLDPRT)", cada recurso que não pôde ser aproveitado ("Não aproveitado: Sweep1 (Sweep)."), e se o volume coincide com o que o SolidWorks gravou.
5. Salve como uma peça do PartCraft com {{ui:Salvar}}.

Esboços pousam em um plano de base quando estão sobre um, na face plana correspondente da peça quando existe uma (para que acompanhem edições posteriores), e em um plano fixo caso contrário. Arestas e faces de arredondamentos, chanfros e cascas são encontradas a partir de pontos e mantidas como referências nomeadas. Variáveis globais viram parâmetros (nomes com espaços recebem sublinhados: "Bolt count" vira `Bolt_count`) e equações viram equações nas mesmas cotas. Nada é adivinhado: o que não tem correspondente é listado.

O aplicativo de desenho CadCraft abre o mesmo arquivo e aproveita os esboços.

:::note
O formato é `cadcraft-sw-export` versão 1, JSON simples em milímetros e graus. Um arquivo de uma macro mais nova, ou que não é válido, é recusado com o motivo.
:::
