---
title: Escrever e executar scripts (área de trabalho Script)
summary: A área de trabalho Script passo a passo: escreva um script em CraftScript ou Lua, execute-o com F5, leia o console, guarde resultados nas variáveis para o próximo script, mostre malhas, campos e gráficos, interrompa uma execução e salve os scripts com a peça.
keywords: script, programação de scripts, script durante a modelagem, destacar, segunda tela, segundo monitor, param, params, parâmetros em scripts, CraftScript, Lua, código, programa, editor, console, REPL, linha de comando, executar, F5, executar seleção, parar, variáveis, área de trabalho, gráfico, campo, malha, legenda, subpainel, análise, automação, matriz, numérico
from: d0003e89
---

**Versão prévia.** A programação de scripts é nova no PartCraft 0.3 e está em versão prévia: a linguagem, a biblioteca e a forma como os scripts são salvos ainda podem mudar, e scripts escritos agora podem precisar de pequenas edições depois. Diga o que deixar de funcionar.

A área de trabalho Script executa os seus próprios cálculos ao lado da peça: somas simples, análises completas ou os scripts da [biblioteca de análise](topic:craftscript-library). Os scripts são escritos em **CraftScript** (uma linguagem de matrizes bem parecida com o MATLAB, veja [A linguagem CraftScript](topic:craftscript-language)) ou em **Lua** (veja [Scripts em Lua](topic:craftscript-lua)) ou em **Python** (veja [Scripts em Python](topic:craftscript-python)).

Escolha **Script** na caixa **Área de trabalho** à esquerda da barra de ferramentas. A peça não é alterada. O painel direito vira o painel de script (mais largo que o normal; arraste a borda para alterá-lo, ou mova-o para uma segunda tela com o menu {{ui:⋯}}, veja [Organizar os painéis](common:arrange-panels)).

## Script enquanto você modela

Você não precisa sair da área de trabalho Projeto para escrever um script. No Projeto, a guia {{ui:Script}} do painel direito tem o mesmo editor, console, variáveis e biblioteca, com os mesmos scripts. A árvore de recursos e a visualização continuam funcionando: clique em um recurso para selecioná-lo, clique duas vezes em um esboço para editá-lo, gire a visualização e depois volte à guia {{ui:Script}} e pressione {{key:F5}}.

O que um script **mostra** (malhas, campos, gráficos, tabelas) não é desenhado sobre o seu modelo no Projeto: o console avisa, e a área de trabalho Script tem tudo quando você muda para ela.

{{ui:Destacar}}, ao lado de {{ui:Executar}}, move o painel inteiro para uma janela própria, por exemplo em uma segunda tela, para que o editor e a visualização completa fiquem lado a lado. {{ui:Devolver}} encaixa o painel novamente. Veja [Organizar os painéis](common:arrange-panels).

## Execute seu primeiro script

1. Digite no editor, por exemplo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pressione {{key:F5}} (ou {{ui:Executar}}). O console abaixo do editor mostra o que o script imprimiu e "Concluído em … s". O gráfico aparece nos **subpainéis** ao longo da parte inferior da visualização 3D.
3. Uma linha sem ponto e vírgula exibe o seu valor, como no MATLAB: `a = 3` exibe `a = 3`; `a = 3;` não exibe nada.
4. Para executar só parte de um script, selecione as linhas e pressione {{key:Mod+Enter}} ({{ui:Seleção}}). Sem nada selecionado, executa a linha onde está o cursor.
5. A linha na parte inferior do console (depois de `>>`) executa uma instrução ao pressionar {{key:Enter}}. {{key:Up}} e {{key:Down}} trazem de volta linhas anteriores.

## Localizar, recolher e completar

- **Localizar e substituir.** Pressione {{key:Mod+F}} (ou {{key:Mod+H}} para substituir também). Uma barra abre acima do código: digite o que procurar; as ocorrências são destacadas e a contagem indica onde você está. Os botões ao lado da caixa diferenciam maiúsculas e minúsculas (**Aa**), localizam somente palavras inteiras (**W**) e usam expressão regular (**.\***; na substituição, `$1` devolve o que o primeiro grupo capturou). {{ui:Substituir}} troca a ocorrência atual, {{ui:Todas}} troca todas as ocorrências como uma única etapa de {{key:Mod+Z}}.
- **Recolhimento.** Clique no ▾ ao lado de um número de linha, ou pressione {{key:Mod+Shift+[}} com o cursor em uma linha `function`, `if`, `for`, `while`, `switch` ou `try` (Lua: `function`, `do`, `if`, `repeat`), para recolher suas linhas internas; a linha informa quantas são. ▸ ou {{key:Mod+Shift+]}} as reabre. O recolhimento apenas oculta linhas: Executar, Salvar, cópia e os números de linha continuam contando todas as linhas, e digitar em uma linha recolhida a abre antes.
- **Autocompletar.** Digite duas letras de um nome, ou pressione {{key:Mod+Space}}: uma lista mostra as variáveis que você tem, as funções da linguagem (com os seus argumentos), as palavras-chave e os nomes já presentes no script. Escolha com as setas e pressione {{key:Enter}} ou {{key:Tab}}.

## Quando algo dá errado

- Um erro informa o problema e a sua linha: a linha fica marcada em vermelho no editor, e **Linha n** no console leva até ela.
- Um laço que nunca termina: pressione {{ui:Parar}} (barra de ferramentas ou painel). O script para imediatamente; as variáveis mantêm os valores que tinham antes dessa execução.
- Toda execução também tem um limite de passos (2 bilhões de passos por padrão; altere-o em **Opções de execução** no painel). Uma execução que ultrapassa esse limite para com uma mensagem.

## As variáveis passam de um script para outro

Toda variável de nível superior que um script cria vai para a guia **Variáveis** (nome, tipo, tamanho, menor e maior valor) e permanece lá para o próximo script, em qualquer uma das linguagens. É assim que um script gera a malha, o seguinte resolve e um terceiro plota.

- Clique em uma variável para exibi-la: malhas, campos e modelos na visualização 3D, arrays como tabela (além de um gráfico de linhas para um vetor ou um mapa de cores para uma matriz) nos subpainéis.
- {{ui:Salvar como JSON}}, {{ui:Salvar como CSV}} (uma tabela de números) e {{ui:Salvar como HDF5}} a baixam; {{ui:Excluir}} a remove; {{ui:Limpar tudo}} esvazia a área de trabalho.
- Marque **Salvar as variáveis com a peça** para mantê-las no arquivo da peça (até 32 MB; as maiores ficam apenas nesta visita). Ao abrir uma peça assim, o painel oferece carregá-las.

## Malhas, campos e gráficos

- `show(m)` desenha uma malha; `show(f)` colore um campo sobre sua malha com uma legenda. A lista **Exibidos** no canto superior esquerdo da visualização oculta ({{ui:olho}}) ou remove cada item, e oculta ou mostra a própria peça. Abaixo da legenda, digite um intervalo (**De**, **até**) ou pressione {{ui:Auto}}; um campo vetorial ou de tensão também oferece a escolha da componente a mostrar.
- `show(f, 'deform', u, 'scale', 50)` desenha a malha deslocada por um campo de deslocamento `u`, ampliada 50 vezes (sem `scale`, cerca de 8 % do tamanho do modelo).
- Clique em uma malha exibida: o nó mais próximo, o elemento e os valores do campo ali aparecem nos subpainéis (**Selecionado**).
- `plot`, `imagesc` e `table` colocam nos subpainéis um gráfico de linhas, um mapa de cores de um array 2-D ou uma tabela. Um gráfico com o mesmo `'id'` (ou título) de um anterior o substitui, de modo que um laço pode atualizar um único gráfico de convergência; `'append', true` acrescenta uma curva a ele. {{ui:Limpar}} esvazia os subpainéis; a seta os recolhe.
- Com dois ou mais gráficos, {{ui:Lado a lado}} mostra todos de uma vez (os seis mais recentes); clicar na guia de uma tabela ou imagem mostra apenas essa novamente.
- Todo gráfico tem {{ui:PNG}}, {{ui:SVG}} e {{ui:CSV}} abaixo dele. PNG e SVG o imprimem sobre fundo branco nas cores de papel, qualquer que seja o tema (PNG de 1600 × 1000 pixels; SVG escala sem perder nitidez); CSV guarda seus números com todos os dígitos: uma coluna de x e uma coluna por curva quando as curvas compartilham x, caso contrário uma linha por ponto com o nome da curva.
- {{key:F}} ou {{ui:Ajustar}} ajusta a visualização ao que está sendo exibido.

## Arquivos

- {{ui:Abrir}} no grupo Script (ou solte arquivos na visualização ou no painel): arquivos `.craft`, `.lua` e `.py` abrem como novos scripts (não são executados); arquivos de dados (STL, OBJ, CSV, JSON, NPY, HDF5) são carregados nas variáveis com o nome do arquivo.
- {{ui:Salvar}} no grupo Script baixa o script atual como arquivo.
- {{ui:Novo}} no grupo Script (ou {{ui:+}} ao lado das abas) inicia outro script. Clique duas vezes em uma aba para renomeá-la; seu {{ui:×}} a remove (você pode desfazer isso).

## Ler os parâmetros da peça

Um script lê os parâmetros da peça (veja [Controlar uma peça com parâmetros](topic:parameters)) pelo nome:

```
w = param('width');     % o valor de um parâmetro, em mm (ou graus, ou um número simples)
p = params();           % todos eles, como um struct: p.width, p.height
```

Em Lua e Python, são `cs.param('width')` e `cs.params()`. Os scripts apenas leem parâmetros: altere-os na guia {{ui:Parâmetros}}. Abaixo da aba do script, uma linha lista os parâmetros que ele lê com `param('…')` e marca qualquer um que a peça não tenha; a guia {{ui:Parâmetros}} lista o script sob cada um deles. Um nome montado durante a execução do script, como `param(name)`, não é listado.

## Os scripts são salvos na peça

Todo script das abas é mantido na peça; assim, {{ui:Salvar}} no grupo Arquivo os salva junto com ela, e as alterações neles podem ser desfeitas. Abrir uma peça **nunca executa os seus scripts**: o console informa quantos ela contém, e eles só são executados quando você pressiona Executar. Uma peça de outra pessoa pode conter qualquer script: leia-o antes de executar. Os scripts são executados em segundo plano neste computador, sem acesso à rede, e não podem tocar na página.

## Relacionados

- [A linguagem CraftScript](topic:craftscript-language)
- [Scripts em Lua](topic:craftscript-lua)
- [Scripts em Python](topic:craftscript-python)
- [A biblioteca de análise](topic:craftscript-library)
- [Escreva sua própria análise](topic:craftscript-own-analysis)
