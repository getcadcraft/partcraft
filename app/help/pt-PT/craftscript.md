---
title: Escrever e executar scripts (área de trabalho Script)
summary: A área de trabalho Script passo a passo: escreva um script CraftScript ou Lua, execute-o com F5, leia a consola, guarde resultados nas variáveis para o script seguinte, mostre malhas, campos e gráficos, pare uma execução e guarde scripts com a peça.
keywords: script, criação de scripts, script enquanto modela, destacar, segundo ecrã, segundo monitor, param, params, parâmetros em scripts, CraftScript, Lua, código, programa, editor, consola, REPL, linha de comandos, executar, F5, executar seleção, parar, variáveis, área de trabalho, gráfico, campo, malha, legenda, subvisualização, análise, automatização, matriz, numérico
from: d0003e89
---

**Pré-visualização.** A criação de scripts é nova no PartCraft 0.3 e está em pré-visualização: a linguagem, a biblioteca e a forma como os scripts são guardados podem mudar, e scripts escritos agora podem precisar de pequenas edições mais tarde. Diga-nos o que deixar de funcionar.

A área de trabalho Script executa os seus próprios cálculos ao lado da peça: pequenas somas, análises completas, ou os scripts da [biblioteca de análise](topic:craftscript-library). Os scripts são escritos em **CraftScript** (uma linguagem de matrizes muito parecida com o MATLAB, ver [A linguagem CraftScript](topic:craftscript-language)) ou em **Lua** (ver [Scripts em Lua](topic:craftscript-lua)) ou em **Python** (ver [Scripts em Python](topic:craftscript-python)).

Escolha **Script** na caixa **Área de trabalho**, à esquerda da barra de ferramentas. A peça não é alterada. O painel direito torna-se o painel de scripts (mais largo do que o habitual; arraste a sua borda para o alterar, ou mova-o para um segundo ecrã com o seu menu {{ui:⋯}}, ver [Organizar os painéis](common:arrange-panels)).

## Criar scripts enquanto modela

Não precisa de sair da área de trabalho Design para escrever um script. Em Design, o separador {{ui:Script}} do painel direito tem o mesmo editor, consola, variáveis e biblioteca, com os mesmos scripts. A árvore de operações e a vista continuam a funcionar: clique numa operação para a selecionar, faça duplo clique num esboço para o editar, rode a vista, depois volte ao separador {{ui:Script}} e prima {{key:F5}}.

O que um script **mostra** (malhas, campos, gráficos, tabelas) não é desenhado sobre o seu modelo em Design: a consola indica-o, e a área de trabalho Script tem tudo quando muda para ela.

{{ui:Destacar}}, ao lado de {{ui:Executar}}, move o painel inteiro para uma janela própria, por exemplo num segundo ecrã, para que o editor e a vista completa fiquem lado a lado. {{ui:Repor}} volta a ancorá-lo. Ver [Organizar os painéis](common:arrange-panels).

## Executar o primeiro script

1. Escreva no editor, por exemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Prima {{key:F5}} (ou {{ui:Executar}}). A consola sob o editor mostra o que o script imprimiu, e «Concluído em … s». O gráfico aparece nas **subvisualizações** ao longo da parte de baixo da vista 3D.
3. Uma linha sem ponto e vírgula imprime o seu valor, como no MATLAB: `a = 3` imprime `a = 3`; `a = 3;` não imprime nada.
4. Para executar só parte de um script, selecione as linhas e prima {{key:Mod+Enter}} ({{ui:Seleção}}). Sem nada selecionado, executa a linha onde está o cursor.
5. A linha no fundo da consola (depois de `>>`) executa uma instrução ao premir {{key:Enter}}. {{key:Up}} e {{key:Down}} trazem de volta linhas anteriores.

## Procurar, dobrar e completar

- **Procurar e substituir.** Prima {{key:Mod+F}} (ou {{key:Mod+H}} para substituir também). Abre-se uma barra acima do código: escreva o que procura; as correspondências iluminam-se e a contagem indica onde está. Os botões ao lado da caixa distinguem maiúsculas de minúsculas (**Aa**), procuram apenas palavras inteiras (**W**) e usam uma expressão regular (**.\***; na substituição, `$1` repõe o que o primeiro grupo correspondeu). {{ui:Substituir}} substitui a correspondência atual, e {{ui:Todas}} substitui todas as correspondências como um único passo de {{key:Mod+Z}}.
- **Dobragem.** Clique no ▾ ao lado de um número de linha, ou prima {{key:Mod+Shift+[}} com o cursor numa linha `function`, `if`, `for`, `while`, `switch` ou `try` (Lua: `function`, `do`, `if`, `repeat`), para ocultar as suas linhas internas; a linha diz quantas são. ▸ ou {{key:Mod+Shift+]}} volta a abri-la. A dobragem apenas oculta linhas: {{ui:Executar}}, {{ui:Guardar}}, copiar e os números de linha continuam a contar todas as linhas, e escrever numa linha dobrada abre-a primeiro.
- **Completar.** Escreva duas letras de um nome, ou prima {{key:Mod+Space}}: aparece uma lista com as variáveis que tem, as funções da linguagem (com os seus argumentos), palavras-chave e nomes já existentes no script. Escolha com as setas e prima {{key:Enter}} ou {{key:Tab}}.

## Quando algo corre mal

- Um erro indica o problema e a sua linha: a linha fica marcada a vermelho no editor, e **Linha n** na consola leva-o até lá.
- Um ciclo que nunca termina: prima {{ui:Parar}} (barra de ferramentas ou painel). O script para de imediato; as variáveis mantêm os valores que tinham antes dessa execução.
- Cada execução tem também um orçamento de passos (2 mil milhões de passos por defeito; altere-o em **Opções de execução** no painel). Uma execução que o ultrapasse para com uma mensagem.

## As variáveis passam de script para script

Toda a variável de nível superior que um script cria vai para o separador **Variáveis** (nome, tipo, tamanho, menor e maior valor) e fica lá para o script seguinte, em qualquer das linguagens. Assim, um script cria a malha, o seguinte resolve, e um terceiro representa graficamente.

- Clique numa variável para a mostrar: malhas, campos e modelos na vista 3D, e arrays como tabela (mais um gráfico de linha para um vetor ou um mapa de cores para uma matriz) nas subvisualizações.
- {{ui:Guardar como JSON}}, {{ui:Guardar como CSV}} (uma tabela de números) e {{ui:Guardar como HDF5}} transferem-na; {{ui:Eliminar}} remove-a; {{ui:Limpar tudo}} esvazia a área de trabalho.
- Marque **Guardar as variáveis com a peça** para as guardar no ficheiro da peça (até 32 MB; as maiores ficam apenas nesta visita). Ao abrir essa peça, o painel oferece-se para as carregar.

## Malhas, campos e gráficos

- `show(m)` desenha uma malha; `show(f)` colore um campo na sua malha com uma legenda. A lista **Visíveis** no canto superior esquerdo da vista oculta ({{ui:olho}}) ou remove cada item, e oculta ou mostra a própria peça. Sob a legenda, escreva um intervalo (**De**, **a**) ou prima {{ui:Auto}}; um campo vetorial ou de tensões também oferece a componente a mostrar.
- `show(f, 'deform', u, 'scale', 50)` desenha a malha deslocada por um campo de deslocamentos `u`, ampliada 50 vezes (sem `scale`, cerca de 8 % do tamanho do modelo).
- Clique numa malha mostrada: o nó mais próximo, o elemento e os valores do campo aparecem nas subvisualizações (**Escolhido**).
- `plot`, `imagesc` e `table` põem um gráfico de linhas, um mapa de cores de uma matriz 2-D ou uma tabela nas subvisualizações. Um gráfico com o mesmo `'id'` (ou título) de um anterior substitui-o, por isso um ciclo pode atualizar um só gráfico de convergência; `'append', true` acrescenta uma curva. {{ui:Limpar}} esvazia as subvisualizações; a seta recolhe-as.
- Com dois ou mais gráficos, {{ui:Lado a lado}} mostra-os todos de uma vez (os seis mais recentes); clicar no separador de uma tabela ou imagem mostra apenas essa de novo.
- Cada gráfico tem {{ui:PNG}}, {{ui:SVG}} e {{ui:CSV}} por baixo. PNG e SVG exportam-no sobre fundo branco, nas cores do papel, seja qual for o tema (PNG 1600 × 1000 pixels; SVG escala sem desfocar); CSV guarda os seus números com todos os algarismos: uma coluna de x e uma coluna por curva quando as curvas partilham x, caso contrário uma linha por ponto, com o nome da curva.
- {{key:F}} ou {{ui:Ajustar}} ajusta a vista ao que está mostrado.

## Ficheiros

- {{ui:Abrir}} no grupo Script (ou arraste ficheiros para a vista ou o painel): os ficheiros `.craft`, `.lua` e `.py` abrem como scripts novos (não são executados); os ficheiros de dados (STL, OBJ, CSV, JSON, NPY, HDF5) carregam-se nas variáveis com o respetivo nome de ficheiro.
- {{ui:Guardar}} no grupo Script transfere o script atual como ficheiro.
- {{ui:Novo}} no grupo Script (ou {{ui:+}} junto aos separadores) inicia outro script. Para mudar o nome de um separador, faça duplo clique nele; o seu {{ui:×}} remove-o (pode anular isso).

## Ler os parâmetros da peça

Um script lê os parâmetros da peça (ver [Controlar uma peça com parâmetros](topic:parameters)) pelo nome:

```
w = param('width');     % o valor de um parâmetro, em mm (ou graus, ou um número simples)
p = params();           % todos eles, como uma estrutura: p.width, p.height
```

Em Lua e Python são `cs.param('width')` e `cs.params()`. Os scripts só leem parâmetros: altere-os no separador {{ui:Parâmetros}}. Sob o separador do script, uma linha lista os parâmetros que ele lê com `param('…')`, e assinala os que a peça não tem; o separador {{ui:Parâmetros}} lista o script sob cada um. Um nome montado enquanto o script corre, como `param(name)`, não é listado.

## Os scripts são guardados na peça

Todos os scripts dos separadores ficam na peça, por isso {{ui:Guardar}} no grupo Ficheiro os guarda com ela, e as alterações neles podem ser anuladas. Abrir uma peça **nunca executa os seus scripts**: a consola indica quantos ela contém, e só são executados quando se prime {{ui:Executar}}. Uma peça de outra pessoa pode conter qualquer script: leia-o antes de o executar. Os scripts correm em segundo plano neste computador, sem acesso à rede, e não conseguem tocar na página.

## Relacionados

- [A linguagem CraftScript](topic:craftscript-language)
- [Scripts em Lua](topic:craftscript-lua)
- [Scripts em Python](topic:craftscript-python)
- [A biblioteca de análise](topic:craftscript-library)
- [Escrever a sua própria análise](topic:craftscript-own-analysis)
