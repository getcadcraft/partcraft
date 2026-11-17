---
title: Resolução de problemas
summary: Problemas que pode encontrar no PartCraft, desde a aplicação não arrancar até operações que falham, esboços que não resolvem, ficheiros que não abrem e juntas que se comportam mal, com a mensagem que vê e a solução.
keywords: problema, erro, ajuda, não funciona, falha, a falhar, bloqueio, em branco, webgl, webassembly, núcleo, não implementado, sobredefinido, perfil aberto, não é possível abrir, nada acontece, sentido errado, lento
from: 7728542c
---

Quando algo não funciona, leia primeiro a **barra de estado** na parte inferior: o PartCraft diz aí porque recusou algo ou o que espera a seguir. Uma operação que falha mostra também a sua mensagem no topo do painel direito e quando passa o ponteiro sobre a sua linha no histórico.

## A aplicação não arranca

### "Este navegador não consegue mostrar 3D (WebGL está desligado ou em falta), por isso o PartCraft não pode correr aqui."

**Causa:** o navegador tem os gráficos 3D (WebGL) desligados, bloqueados ou não suportados pelo controlador gráfico.

**Solução:**

:::chromium
Abra `chrome://settings/system` (ou `edge://settings/system` no Edge) e ative "Utilizar a aceleração gráfica quando disponível", depois reinicie o navegador. Se já estiver ativo, verifique `chrome://gpu` para o estado do WebGL, e atualize o controlador gráfico.
:::

:::firefox
Abra `about:support` e veja Gráficos, WebGL. Se estiver bloqueado, atualize o controlador gráfico. Em `about:config`, `webgl.disabled` tem de estar `false`.
:::

:::safari
O WebGL está sempre ativo no Safari atual. Atualize o macOS (o Safari atualiza-se com ele). Se continuar a falhar, experimente o Chrome ou o Firefox no mesmo Mac para excluir o hardware gráfico.
:::

Os ambientes de trabalho remotos e algumas máquinas virtuais não têm WebGL. Experimente no próprio computador.

### "O núcleo sólido não carregou: …"

**Causa:** o núcleo de geometria (um programa WebAssembly) não pôde ser obtido ou iniciado. Normalmente a ligação caiu enquanto a aplicação carregava, o WebAssembly está desligado por uma política da empresa ou por uma definição de segurança do navegador, ou o navegador é muito antigo.

**Solução:** recarregue a página com ligação à Internet. Se continuar a falhar, experimente outro navegador atual. No Firefox, `javascript.options.wasm` em `about:config` tem de estar `true`. Sem ligação, a aplicação e o seu núcleo só carregam se a barra da aplicação indicava **Pronto para offline** antes de perder a ligação ({{ui:Guardar para offline}} com ligação; ver [Trabalhar offline](common:offline)).

### O botão offline diz "Não foi possível guardar" ou "Offline não disponível"

**Não foi possível guardar**: alguns ficheiros não foram transferidos. Clique para tentar de novo com ligação; uma ligação lenta ou medida pode precisar de uma segunda tentativa. **Offline não disponível**: esta janela do navegador não consegue manter uma cópia offline (as janelas privadas e alguns computadores geridos bloqueiam-no). Use uma janela normal, ou mantenha o separador aberto.

### O PartCraft está offline mas desatualizado

Clique em **Pronto para offline** com ligação e escolha {{ui:Guardar novamente (obter a versão mais recente)}}.

### "Varrimento: ainda não implementado. Precisa de um núcleo exato, …"

A mensagem completa é "<Nome>: ainda não implementado. Precisa de um núcleo exato, que esta versão do PartCraft não tem. Ajuda › O que ainda não está implementado diz o que fazer em vez disso." Aparece quando escolhe Varrimento, Loft, Nervura, uma aba de chapa metálica, uma operação de superfície, Combinar, Mover corpo, Escalar corpo ou Padrão de caminho, e para as outras coisas que só um núcleo exato faz. Nada está errado com o seu navegador ou a sua peça: esta versão do PartCraft constrói todas as peças com o núcleo de malha. Ver [O que ainda não está implementado](topic:not-built-yet) para o que fazer em vez disso, e [O núcleo de malha](topic:solid-kernels).

### "A carregar o núcleo sólido…" nunca desaparece

Espere um pouco numa ligação lenta: o núcleo e a biblioteca 3D são transferidos na primeira vez. Depois recarregue. Se a própria página mostrar um erro, veja acima.

## Nada acontece quando prime uma tecla

- As teclas não funcionam enquanto o cursor estiver numa caixa de um painel. Clique na vista 3D ou prima {{key:Esc}} depois de escrever (ou {{key:Tab}} para sair).
- As teclas de seta e {{key:Plus}}/{{key:Minus}} rodam e aplicam zoom à vista só depois de clicar na vista.
- Há uma caixa de diálogo aberta: responda-lhe primeiro.
- Num esboço, {{key:F}} é a ferramenta de concordância, não Ajustar. Use o botão {{ui:Ajustar}}.

## Um botão da barra de ferramentas está acinzentado

- Os botões de operação ficam acinzentados enquanto um esboço está aberto. Feche o esboço primeiro.
- As ferramentas de esboço só funcionam dentro de um esboço.
- {{ui:Anular}} e {{ui:Refazer}} ficam acinzentados quando não há nada para anular ou refazer.
- {{ui:Montagem}} precisa de uma peça com um sólido. {{ui:Junta}} precisa de duas peças na montagem. {{ui:Editar peça}} precisa de uma peça selecionada.
- {{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} ficam acinzentados numa montagem: exporte cada peça. Se outro programa recusar o ficheiro exato, experimente {{ui:STEP AP214 (sólido exato)}}, depois {{ui:STEP (facetado, núcleo de malha)}}, e comunique-nos através de {{ui:Ajuda}} › {{ui:Comunicar um problema}}.
- {{ui:Varrimento}}, {{ui:Loft}} e as outras operações que precisam de um núcleo exato não ficam acinzentadas: continuam clicáveis, as suas dicas terminam com "ainda não implementado (precisa de um núcleo exato)", e clicar numa mostra isso na barra de estado. Ver [O que ainda não está implementado](topic:not-built-yet).
- {{ui:Desenho}} precisa de uma peça com um sólido, e fica acinzentado enquanto um esboço está aberto.
- Os itens de {{ui:Exportar}} ficam acinzentados numa montagem: as montagens ainda não podem ser exportadas. Feche-a, ou edite uma peça, para exportar.

## Problemas de esboço

### O esboço não me deixa acrescentar uma relação

"Nenhuma relação se ajusta a esta seleção. Selecione um ou dois itens (Shift+clique acrescenta)." A relação precisa de uma seleção diferente. Ver [Relações e cotas de esboço](topic:sketch-relations) para o que cada uma precisa.

### "Sobredefinido: … não podem ser cumpridos em simultâneo. Anule, ou elimine um deles."

**Causa:** a nova relação ou cota contradiz as que já existem. O esboço não se moveu.

**Solução:** {{key:Mod+Z}}, ou elimine um dos itens vermelhos na lista do painel direito (escolha **Eliminar** ao lado dele).

### "Sobredefinido: … já está implícito. Elimine-o."

**Causa:** a relação não acrescenta nada: outras já a impõem (por exemplo Paralelas em dois lados de um retângulo, ou uma cota já fixa). Nesta versão não há cotas comandadas.

**Solução:** elimine-a. A operação constrói-se mesmo assim, com um aviso.

### "Esses itens não podem ser cotados em conjunto."

Clicou, por exemplo, num ponto e num círculo. Cote em relação ao ponto central do círculo.

### "Um boleado precisa de um canto onde se encontram exatamente duas linhas." / "Esse raio é demasiado grande para estas linhas."

Clique exatamente no ponto de canto de duas linhas sólidas. Use um raio menor do que a linha mais curta permite.

### A geometria volta atrás quando a arrasto

O arrastamento quebraria uma relação ou uma cota, por isso o PartCraft repõe-na. Só a geometria azul (subdefinida) pode mover-se.

### "Este esboço não pode abrir: Precisa de Extrude2, que está a falhar."

O esboço assenta numa face de uma operação que não está construída. Corrija primeiro essa operação, ou reative-a, ou avance no histórico.

## Problemas de operações

| Mensagem | Causa | Solução |
|---|---|---|
| "Faça primeiro um esboço: escolha um plano, Esboço, desenhe um perfil fechado, Sair." | Não há esboço não usado com curvas, e nenhum está selecionado | Desenhe um esboço, ou selecione no histórico o esboço a usar |
| "O esboço não tem perfil fechado para extrudir." (ou "para revolver") | Não há contorno fechado de linhas sólidas | Feche as falhas; volte a transformar as linhas de construção em sólidas com {{key:Q}} |
| "O perfil está aberto: uma extremidade em (x, y) não está ligada a nada." | Uma falha nesse ponto | Abra o esboço e arraste a extremidade para o seu vizinho, para que encaixe |
| "O perfil ramifica-se em (x, y): mais de duas extremidades encontram-se aí." | Três ou mais linhas encontram-se num ponto | Elimine a linha extra, ou passe-a a construção |
| "Um contorno fechado precisa de pelo menos três lados ou uma curva." | Duas linhas de vai e vem | Desenhe de novo o contorno |
| "Atravessar tudo é para cortes. Use uma profundidade para uma saliência." | Uma saliência com Atravessar tudo | Defina Fim como Cego ou Plano médio |
| "Não há nada para cortar desse lado do esboço. Experimente o outro sentido." | O corte aponta para longe do material | Marque Inverter sentido |
| "Ainda não há nada para cortar." / "Ainda não há nada para furar." | Não há sólido antes desta operação | Faça primeiro uma saliência, ou desça a operação |
| "Desenhe uma linha de eixo (uma linha de construção) no esboço para revolver em torno dela." | Revolução sem eixo | Acrescente uma linha de eixo, ou escolha uma linha em Eixo |
| "O perfil atravessa o eixo. Mantenha-o de um lado da linha de eixo." | Perfil dos dois lados do eixo | Desenhe de novo metade do perfil |
| "Coloque pontos do esboço onde vão os furos (ferramenta Ponto) e depois faça o furo." | Não há pontos soltos no esboço | Acrescente pontos com {{key:P}} |
| "O rebaixo tem de ser mais largo do que o furo." | Ø do rebaixo não é maior que o Diâmetro | Torne o rebaixo mais largo |
| "O rebaixo tem de ser menos fundo do que o furo." | Rebaixo mais fundo do que um furo cego | Torne-o menos fundo, ou o furo mais fundo |
| "Escolha as operações a copiar." | Um padrão ou espelho sem nada marcado | Marque uma operação em Operações a copiar |
| "Extrude2 não tem sólido para copiar." | A operação copiada falhou ou está desligada | Corrija-a ou reative-a |
| "Precisa de Sketch3, que está a falhar." | Uma operação de que depende não está construída | Corrija a operação indicada |
| "A face onde assenta desapareceu (Extrude1 não está construída)." | A face do esboço já não existe | Corrija essa operação, ou elimine o esboço e desenhe-o de novo |
| "Não sobra nada da peça depois disto." | Um corte removeu todo o material | Verifique o tamanho e o sentido do corte |
| "O núcleo sólido não conseguiu construir isto (…)." ou "O núcleo sólido não conseguiu combinar isto com o corpo." | O núcleo recusou a geometria | Anule, ou altere ligeiramente os tamanhos; faces que se tocam exatamente podem causá-lo |
| "Varrimento: ainda não implementado. Precisa de um núcleo exato, que esta versão do PartCraft não tem." (também Loft, Nervura e as outras) | Uma operação feita numa versão anterior que só um núcleo exato constrói. Fica no histórico e é guardada de volta sem alterações | Suprima-a ou elimine-a; ver [O que ainda não está implementado](topic:not-built-yet) para o que fazer em vez disso |
| "Um arredondamento de 5 mm não cabe aqui (…)." / "Um chanfro de 2 mm …" | O tamanho é demasiado grande para uma face junto à aresta, ou o canto não pode ser boleado | Tamanho menor, ou menos arestas por operação |
| "Concordância: nesta versão só arestas retas entre duas faces planas (o núcleo de malha as constrói). Arredonde ou chanfre as arestas curvas no esboço." (também Chanfro) | Uma aresta escolhida é redonda, como o bordo de um furo, ou fica numa face curva | {{ui:Escolher arestas}} e remova-a; arredonde ou chanfre esse canto no esboço |
| "Uma concordância cujo raio varia ao longo da aresta: ainda não implementado (precisa de um núcleo exato). Dê-lhe um só raio." | **Raio variável** está marcado | Desmarque-o e indique um só raio |
| "Concordância pelo núcleo de malha: onde as arestas arredondadas se encontram ficam em meia-esquadria, não fundidas." (⚠, um aviso) | As arestas escolhidas encontram-se num canto; os arredondamentos encontram-se aí num vinco vivo | Nada a corrigir: a peça está construída. Concorde menos arestas se o vinco importar |
| "Uma aresta que arredonda desapareceu: a aresta entre Extrude1 e Cut2." | Uma alteração anterior removeu a aresta | {{ui:Escolher arestas}}, remova a aresta vermelha e escolha a nova |
| "Escolha as arestas na vista e depois acrescente-as." | A concordância ou o chanfro não tem arestas | {{ui:Escolher arestas}} |
| "Escolha as faces a remover (abertas) e depois use Casca." | A casca não tem faces abertas | {{ui:Escolher faces}} |
| "A casca não pôde ser feita com esta espessura (…)." | A parede é mais espessa do que uma parte fina do modelo ou um raio de concordância | Uma parede mais fina, ou concordâncias maiores |
| "Casca: nesta versão só abre faces planas (o núcleo de malha a constrói)." | Uma face aberta é curva | {{ui:Escolher faces}} e remova-a; abra apenas faces planas |
| "Saída: nesta versão, apenas faces planas (o núcleo de malha a constrói)." | Uma face com saída é um cilindro, um cone ou uma face de forma livre | Remova-a; aplique saída apenas a faces planas |
| "Uma face que abre desapareceu (…)." | Uma alteração anterior removeu a face | {{ui:Escolher faces}} de novo |
| "Concordância1 altera as arestas ou paredes do corpo; não pode ser copiada. …" | Um padrão ou espelho copia uma concordância, um chanfro ou uma casca | Desmarque-a; faça primeiro o padrão dos cortes, depois a concordância |
| "Está assente numa face que só um núcleo exato consegue encontrar: ainda não implementado nesta versão." | Um esboço numa face que o núcleo de malha não encontra, como uma feita numa versão anterior | Desenhe num plano de base ou numa face plana de uma extrusão, e posicione-o com cotas |
| "Usa uma face ou aresta do sólido, que só um núcleo exato consegue encontrar: ainda não implementado nesta versão." | Um plano, eixo ou ponto de referência numa face ou aresta do sólido | Faça-o a partir de planos de base, pontos de esboço ou coordenadas |
| "Extrudir até uma face, à face seguinte ou a um vértice: ainda não implementado (precisa de um núcleo exato)." / "Uma conicidade: ainda não implementada (precisa de um núcleo exato)." | Uma condição de fim ou conicidade que só um núcleo exato constrói | Use uma profundidade Cega ou Plano médio que meça; deixe a Conicidade em 0 |

## Problemas de seleção

- "Essa face é curva. Escolha uma face plana ou um plano para desenhar." Os esboços precisam de uma face plana. Desenhe num plano de base e posicione o esboço com cotas.
- Uma face diz "Fixa onde foi escolhida": não foi criada por uma aresta de esboço (por exemplo, uma face de uma cópia de padrão), por isso um esboço nela fica no lugar quando a peça muda.
- As arestas são difíceis de atingir: aproxime o zoom. Uma aresta ganha à face ao lado quando o ponteiro está exatamente sobre ela.

## Problemas de ficheiros

| Mensagem | Solução |
|---|---|
| 'O PartCraft abre os seus próprios ficheiros .partcraft.json, exporta a partir da macro CadCraft para SolidWorks (.cadcraft-sw.json) e lê ficheiros STEP. "bracket.igs" não é nenhum destes.' | Só esses ficheiros são reconhecidos (e as malhas STL, OBJ e 3MF, e os ficheiros `.3dm`) |
| '"part.stp" não é um ficheiro STEP (não começa por ISO-10303-21).' | O ficheiro não é texto STEP |
| "Esse ficheiro STEP é demasiado grande (mais de 60 MB) para importar aqui." | Simplifique-o na origem |
| "Esse ficheiro é demasiado grande para ser uma peça do PartCraft." na sua peça guardada | Um sólido STEP grande importado numa versão anterior fez o ficheiro da peça ultrapassar 50 MB. Use uma cópia anterior sem ele |
| "Esse ficheiro é demasiado grande para ser uma peça do PartCraft." | O ficheiro tem mais de 50 MB; não é um ficheiro do PartCraft |
| "Este não é um ficheiro do PartCraft (não é JSON)." / "Este não é um ficheiro do PartCraft." | O ficheiro está danificado ou é de outro programa |
| "Este ficheiro foi guardado por um PartCraft mais recente (versão de ficheiro …); esta lê a versão …" | Abra-o no PartCraft mais recente |
| "Extrude2: a profundidade está errada." (ou outro valor) | O ficheiro foi editado à mão ou danificado. Use uma cópia anterior |
| Inserir numa montagem diz "Part1.partcraft.json não tem sólido para inserir." | O ficheiro da peça não tem sólido. Abra-o, construa um sólido, guarde e insira de novo |

**O meu ficheiro guardado não está onde esperava.** Guardar é uma transferência: procure na pasta de transferências do navegador, ou abra a lista de transferências na barra de ferramentas do navegador. Ver [Onde ficam os seus ficheiros](common:your-files).

**Abri uma peça, mas a montagem continua no ecrã.** A peça carregou por trás da montagem. Escolha {{ui:Fechar}} para fechar a montagem e ver a peça. Feche as montagens antes de abrir ficheiros de peças.

## Problemas de desenho

| Mensagem | Solução |
|---|---|
| "Construa primeiro um sólido, depois faça o seu desenho." | Construa primeiro a peça |
| "Não há espaço na folha para: detalhe. Torne o detalhe mais pequeno ou retire uma vista." | **Raio do detalhe** ou **Escala do detalhe** menores, ou remova a secção |
| "Um detalhe é tirado da vista frontal, superior, direita ou de corte." | Clique numa dessas vistas |
| "Clique numa das vistas." | O clique foi num papel vazio |
| "A posição precisa de pelo menos uma referência de datum." e outras mensagens do quadro | Defina os datuns que o painel pede, ou escolha outra característica |
| "As vistas do desenho não puderam ser feitas: …" | Anule a última alteração. Se continuar a acontecer, guarde, recarregue e reabra a peça |

## Problemas de montagem

| Mensagem | Solução |
|---|---|
| "Construa primeiro um sólido, depois insira-o numa montagem." | A peça ainda não tem sólido |
| "Insira primeiro uma segunda peça (Adicionar cópia, Inserir, ou Editar › Duplicar)." | Uma junta precisa de duas peças |
| "Escolha uma face numa peça diferente." | As duas faces de uma junta têm de estar em peças diferentes |
| "Essa face é curva. Escolha uma face plana …" | As juntas começam em faces planas. Depois use **Centrar em** para um furo ou eixo de revolução |
| "Bracket2 não está ligada à peça fixa, por isso fica onde foi colocada." | Acrescente uma junta dela a uma peça já posicionada |
| "Revolute3 fecha um ciclo que não pode fechar: está desfasada em 2.000 mm. Verifique as faces, os desvios e os limites das juntas do ciclo." | As peças não se podem todas encontrar: verifique os comprimentos, as faces que cada junta usa, os desvios (peças empilhadas face a face têm de concordar em profundidade) e os limites; ou elimine uma junta do ciclo |
| "A face que esta junta usa desapareceu de Bracket." / "O eixo que esta junta usa desapareceu de Bracket." | A peça foi editada. Elimine a junta e faça-a de novo |
| "O eixo corre ao longo da face, por isso não pode definir o centro da junta." | Escolha um eixo que atravesse a face, ou "A origem própria da face" |
| "Uma montagem mantém pelo menos uma peça. Feche-a em vez disso." | Use {{ui:Fechar}} |

**As peças estão unidas mas no sítio errado.** Defina **Centrar em** para os dois lados da junta nos furos ou eixos de revolução que devem alinhar, e depois ajuste o **Ângulo (°)** e o **Desvio (mm)**.

## É lento

- Defina **Curvas** como Normal ou Grosseiro enquanto modela; mude para Fino antes de exportar.
- Contagens grandes de padrão (centenas de cópias) demoram a reconstruir a cada alteração. Suprima o padrão enquanto trabalha noutras operações.
- A deteção de conflitos e a verificação de movimento comparam cada par de peças; montagens grandes demoram mais.
- Feche outros separadores pesados. O PartCraft corre no processador e nos gráficos do seu próprio computador.

## Ainda sem solução

Guarde primeiro o seu ficheiro ({{key:Mod+S}}), depois recarregue a página e abra-o de novo. Se uma operação continuar a falhar, selecione-a, leia a mensagem e experimente {{key:Mod+Z}} até ao último estado bom.
