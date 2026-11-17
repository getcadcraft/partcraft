---
title: Solução de problemas
summary: Problemas que você pode encontrar no PartCraft, desde o aplicativo não iniciar até recursos com falha, esboços que não se resolvem, arquivos que não abrem e juntas que se comportam mal, com a mensagem que você vê e a correção.
keywords: problema, erro, ajuda, não funciona, falha, falhando, travamento, em branco, webgl, webassembly, kernel, não implementado, sobredefinido, perfil aberto, não abre, nada acontece, direção errada, lento
from: 7728542c
---

Quando algo não funciona, leia primeiro a **barra de status** na parte inferior: o PartCraft informa ali por que recusou ou o que espera em seguida. Um recurso com falha também mostra sua mensagem no topo do painel direito dele e quando você passa o ponteiro sobre a linha dele no histórico.

## O aplicativo não inicia

### "Este navegador não consegue mostrar 3D (WebGL está desligado ou ausente), então o PartCraft não pode rodar aqui."

**Causa:** o navegador está com os gráficos 3D (WebGL) desligados, bloqueados ou não suportados pelo driver de vídeo.

**Correção:**

:::chromium
Abra `chrome://settings/system` (ou `edge://settings/system` no Edge) e ative "Usar aceleração de hardware quando disponível", depois reinicie o navegador. Se já estiver ativada, verifique `chrome://gpu` para o status do WebGL e atualize o driver de vídeo.
:::

:::firefox
Abra `about:support` e veja Gráficos, WebGL. Se estiver bloqueado, atualize o driver de vídeo. Em `about:config`, `webgl.disabled` precisa ser `false`.
:::

:::safari
O WebGL está sempre ativado no Safari atual. Atualize o macOS (o Safari é atualizado junto). Se ainda falhar, tente Chrome ou Firefox no mesmo Mac para descartar o hardware gráfico.
:::

Computadores remotos e algumas máquinas virtuais não têm WebGL. Tente no próprio computador.

### "O kernel de sólidos não carregou: …"

**Causa:** o kernel de geometria (um programa WebAssembly) não pôde ser baixado ou iniciado. Geralmente a conexão caiu enquanto o aplicativo carregava, o WebAssembly está desligado por uma política da empresa ou por uma configuração de segurança do navegador, ou o navegador é muito antigo.

**Correção:** recarregue a página com conexão. Se continuar falhando, tente outro navegador atual. No Firefox, `javascript.options.wasm` em `about:config` precisa ser `true`. Offline, o aplicativo e seu kernel só carregam se a barra do aplicativo disse **Pronto para uso offline** antes de você perder a conexão ({{ui:Salvar para uso offline}} com conexão; veja [Trabalhar offline](common:offline)).

### O botão offline diz "Não foi possível salvar" ou "Offline não disponível"

**Não foi possível salvar**: alguns arquivos não foram baixados. Clique para tentar de novo com conexão; uma conexão lenta ou medida pode precisar de uma segunda tentativa. **Offline não disponível**: esta janela do navegador não consegue manter uma cópia offline (janelas privativas e alguns computadores gerenciados bloqueiam isso). Use uma janela normal, ou mantenha a aba aberta.

### O PartCraft está offline, mas desatualizado

Clique em **Pronto para uso offline** com conexão e escolha {{ui:Salvar de novo (obter a versão mais recente)}}.

### "Varredura: ainda não implementado. Precisa de um kernel exato, …"

A mensagem completa é "<Nome>: ainda não implementado. Precisa de um kernel exato, que esta versão do PartCraft não tem. Ajuda › O que ainda não está implementado diz o que fazer em vez disso." Você a vê ao escolher Varredura, Loft, Nervura, uma aba de chapa metálica, um recurso de superfície, Combinar, Mover corpo, Escalar corpo ou Padrão de caminho, e para as outras coisas que só um kernel exato faz. Nada está errado com seu navegador ou sua peça: esta versão do PartCraft constrói toda peça com o kernel de malha. Veja [O que ainda não está implementado](topic:not-built-yet) para o que fazer em vez disso, e [O kernel de malha](topic:solid-kernels).

### "Carregando o kernel de sólidos…" nunca some

Espere um pouco em uma conexão lenta: o kernel e a biblioteca 3D são baixados na primeira vez. Depois recarregue. Se a própria página mostrar um erro, veja acima.

## Nada acontece quando pressiono uma tecla

- As teclas não funcionam enquanto o cursor está em uma caixa dentro de um painel. Clique na vista 3D ou pressione {{key:Esc}} depois de digitar (ou {{key:Tab}} para sair).
- As teclas de seta e {{key:Plus}}/{{key:Minus}} giram e dão zoom na vista somente depois que você clica nela.
- Uma caixa de diálogo está aberta: responda-a primeiro.
- Em um esboço, {{key:F}} é a ferramenta Concordância, não Ajustar. Use o botão {{ui:Ajustar}}.

## Um botão da barra de ferramentas está cinza

- Os botões de recurso ficam cinzas enquanto um esboço está aberto. Feche o esboço primeiro.
- As ferramentas de esboço funcionam apenas dentro de um esboço.
- {{ui:Desfazer}} e {{ui:Refazer}} ficam cinzas quando não há nada para desfazer ou refazer.
- {{ui:Montagem}} precisa de uma peça com um sólido. {{ui:Junta}} precisa de duas peças na montagem. {{ui:Editar peça}} precisa de uma peça selecionada.
- {{ui:STEP AP242 (sólido exato)}} e {{ui:STEP AP214 (sólido exato)}} ficam cinzas em uma montagem: exporte cada peça. Outro programa recusa o arquivo exato: tente {{ui:STEP AP214 (sólido exato)}}, depois {{ui:STEP (facetado, kernel de malha)}}, e nos informe por {{ui:Ajuda}} › {{ui:Relatar um problema}}.
- {{ui:Varredura}}, {{ui:Loft}} e os outros recursos que precisam de um kernel exato não ficam cinzas: continuam clicáveis, suas dicas terminam com "ainda não implementado (precisa de um kernel exato)", e clicar em um deles informa isso na barra de status. Veja [O que ainda não está implementado](topic:not-built-yet).
- {{ui:Desenho}} precisa de uma peça com um sólido, e fica cinza enquanto um esboço está aberto.
- Os itens de {{ui:Exportar}} ficam cinzas em uma montagem: montagens ainda não podem ser exportadas. Feche-a, ou edite uma peça, para exportar.

## Problemas com esboços

### O esboço não me deixa adicionar uma relação

"Nenhuma relação se encaixa nesta seleção. Selecione um ou dois itens (Shift+clique adiciona)." A relação precisa de uma seleção diferente. Veja [Relações e cotas de esboço](topic:sketch-relations) para o que cada uma precisa.

### "Sobredefinido: … não podem ser atendidos todos juntos. Desfaça, ou exclua um deles."

**Causa:** a nova relação ou cota contradiz as que já existem. O esboço não se moveu.

**Correção:** {{key:Mod+Z}}, ou exclua um dos itens vermelhos na lista do painel direito (escolha **Excluir** ao lado dele).

### "Sobredefinido: … já está implícito. Exclua-o."

**Causa:** a relação não acrescenta nada: outras já a impõem (por exemplo Paralela em dois lados de um retângulo, ou uma cota que já está fixa). Não há cotas dirigidas nesta versão.

**Correção:** exclua-a. O recurso é criado mesmo assim, com um aviso.

### "Esses itens não podem ser cotados juntos."

Você clicou, por exemplo, em um ponto e em um círculo. Cote até o ponto central do círculo.

### "Uma concordância precisa de um canto onde exatamente duas linhas se encontram." / "Esse raio é grande demais para essas linhas."

Clique exatamente no ponto de canto de duas linhas sólidas. Use um raio menor do que a linha mais curta permite.

### A geometria volta quando eu a arrasto

O arrasto quebraria uma relação ou uma cota, então o PartCraft a devolve. Apenas geometria azul (subdefinida) pode se mover.

### "Este esboço não pode abrir: precisa de Extrude2, que está falhando."

O esboço fica sobre uma face de um recurso que não foi criado. Corrija esse recurso antes, ou reative-o, ou avance.

## Problemas de recursos

| Mensagem | Causa | Correção |
|---|---|---|
| "Crie um esboço primeiro: escolha um plano, Esboço, desenhe um perfil fechado, Sair." | Nenhum esboço não usado com curvas, e nenhum selecionado | Desenhe um esboço, ou selecione o esboço a usar no histórico |
| "O esboço não tem perfil fechado para extrudar." (ou "para revolucionar") | Nenhum contorno fechado de linhas sólidas | Feche as lacunas; volte as linhas de construção com {{key:Q}} |
| "O perfil está aberto: uma extremidade em (x, y) não está unida a nada." | Uma lacuna nesse ponto | Abra o esboço e arraste a extremidade até o vizinho para encaixar |
| "O perfil se ramifica em (x, y): mais de duas extremidades se encontram ali." | Três ou mais linhas se encontram em um ponto | Exclua a linha extra, ou mude-a para construção |
| "Um contorno fechado precisa de pelo menos três lados ou uma curva." | Duas linhas indo e voltando | Refaça o contorno |
| "Através de tudo serve para cortes. Use uma profundidade para uma saliência." | Uma saliência com Fim em Através de tudo | Defina Fim como Cego ou Plano médio |
| "Não há nada para cortar desse lado do esboço. Tente a outra direção." | O corte aponta para longe do material | Marque Inverter direção |
| "Ainda não há nada para cortar." / "Ainda não há nada para furar." | Nenhum sólido antes deste recurso | Faça uma saliência primeiro, ou mova o recurso para baixo |
| "Desenhe uma linha de centro (uma linha de construção) no esboço para revolucionar em torno dela." | Revolução sem eixo | Adicione uma linha de centro, ou escolha uma linha em Eixo |
| "O perfil cruza o eixo. Mantenha-o em um lado da linha de centro." | Perfil dos dois lados do eixo | Refaça metade do perfil |
| "Coloque pontos de esboço onde os furos vão (ferramenta Ponto), depois faça o furo." | Nenhum ponto solto no esboço | Adicione pontos com {{key:P}} |
| "O rebaixo precisa ser mais largo que o furo." | Ø do rebaixo não maior que o Diâmetro | Faça o rebaixo mais largo |
| "O rebaixo precisa ser mais raso que o furo." | Rebaixo mais profundo que um furo cego | Torne-o mais raso, ou o furo mais profundo |
| "Escolha os recursos a copiar." | Um padrão ou espelho sem nada marcado | Marque um recurso em Recursos a copiar |
| "Extrude2 não tem sólido para copiar." | O recurso copiado falhou ou está desligado | Corrija-o ou reative-o |
| "Precisa de Sketch3, que está falhando." | Um recurso do qual ele depende não foi criado | Corrija o recurso que ele cita |
| "A face em que ele está sumiu (Extrude1 não foi criada)." | A face do esboço não existe mais | Corrija esse recurso, ou exclua o esboço e faça um novo |
| "Não sobrou nada da peça depois disto." | Um corte removeu todo o material | Verifique o tamanho e a direção do corte |
| "O kernel de sólidos não conseguiu criar isto (…)." ou "O kernel de sólidos não conseguiu combinar isto com o corpo." | O kernel recusou a geometria | Desfaça, ou mude um pouco os tamanhos; faces que se tocam exatamente podem causar isso |
| "Varredura: ainda não implementado. Precisa de um kernel exato, que esta versão do PartCraft não tem." (também Loft, Nervura e os outros) | Um recurso criado em uma versão anterior que só um kernel exato consegue criar. Ele permanece no histórico e é salvo de volta sem alterações | Suprima ou exclua-o; veja [O que ainda não está implementado](topic:not-built-yet) para o que fazer em vez disso |
| "Um arredondamento de 5 mm não cabe aqui (…)." / "Um chanfro de 2 mm …" | O tamanho é grande demais para uma face ao lado da aresta, ou o canto não pode ser suavizado | Tamanho menor, ou menos arestas por recurso |
| "Concordância: nesta versão, apenas arestas retas entre duas faces planas (o kernel de malha as constrói). Arredonde ou chanfre arestas curvas no esboço." (também Chanfro) | Uma aresta selecionada é arredondada, como a borda de um furo, ou fica sobre uma face curva | {{ui:Selecionar arestas}} e remova-a; arredonde ou chanfre esse canto no esboço |
| "Uma concordância cujo raio muda ao longo da aresta: ainda não implementado (precisa de um kernel exato). Dê um único raio." | **Raio variável** está marcado | Desmarque e informe um único raio |
| "Concordância pelo kernel de malha: onde arestas arredondadas se encontram, elas são emendadas em meia esquadria, não mescladas." (⚠, um aviso) | As arestas selecionadas se encontram em um canto; os arredondamentos se encontram ali em uma quina viva | Nada a corrigir: a peça está criada. Concorde menos arestas se a quina importar |
| "Uma aresta que ele arredonda sumiu: a aresta entre Extrude1 e Cut2." | Uma alteração anterior removeu a aresta | {{ui:Selecionar arestas}}, remova a aresta vermelha, selecione a nova |
| "Selecione as arestas na vista, depois adicione-as." | A concordância ou o chanfro não tem arestas | {{ui:Selecionar arestas}} |
| "Selecione as faces a remover (abertas), depois crie a casca." | A casca não tem faces abertas | {{ui:Selecionar faces}} |
| "A casca não pôde ser criada com esta espessura (…)." | A parede é mais espessa que uma parte fina do modelo ou que um raio de concordância | Uma parede mais fina, ou concordâncias maiores |
| "Casca: nesta versão ela abre apenas faces planas (o kernel de malha a constrói)." | Uma face aberta é curva | {{ui:Selecionar faces}} e remova-a; abra apenas faces planas |
| "Saída: nesta versão, apenas faces planas (o kernel de malha a constrói)." | Uma face com saída é um cilindro, um cone ou uma face de forma livre | Remova-a; aplique saída apenas a faces planas |
| "Uma face que ele abre sumiu (…)." | Uma alteração anterior removeu a face | {{ui:Selecionar faces}} novamente |
| "Fillet1 altera as arestas ou paredes do corpo; não pode ser copiada. …" | Um padrão ou espelho copia uma concordância, um chanfro ou uma casca | Desmarque-a; faça o padrão dos cortes primeiro, depois a concordância |
| "Ele fica sobre uma face que só um kernel exato consegue encontrar: ainda não implementado nesta versão." | Um esboço sobre uma face que o kernel de malha não encontra, como uma criada em uma versão anterior | Esboce sobre um plano de base ou uma face plana de uma extrusão, e posicione-o com cotas |
| "Ele usa uma face ou aresta do sólido, que só um kernel exato consegue encontrar: ainda não implementado nesta versão." | Um plano, eixo ou ponto de referência sobre uma face ou aresta do sólido | Crie-o a partir de planos de base, pontos de esboço ou coordenadas |
| "Extrudar até uma face, a próxima face ou um vértice: ainda não implementado (precisa de um kernel exato)." / "Um afunilamento: ainda não implementado (precisa de um kernel exato)." | Uma condição final ou afunilamento que só um kernel exato cria | Use uma profundidade Cega ou Plano médio que você meça; deixe Afunilamento em 0 |

## Problemas de seleção

- "Essa face é curva. Selecione uma face plana ou um plano para esboçar." Esboços precisam de uma face plana. Esboce sobre um plano de base e posicione o esboço com cotas.
- Uma face diz "Fixa onde foi selecionada": ela não foi criada por uma aresta de esboço (por exemplo uma face de uma cópia de padrão), então um esboço sobre ela permanece no lugar quando a peça muda.
- Arestas são difíceis de acertar: dê zoom. Uma aresta vence a face ao lado quando o ponteiro está exatamente sobre ela.

## Problemas de arquivo

| Mensagem | Correção |
|---|---|
| 'O PartCraft abre seus próprios arquivos .partcraft.json, exporta da macro CadCraft para SolidWorks (.cadcraft-sw.json) e arquivos STEP. "bracket.igs" não é nenhum desses.' | Só esses arquivos são reconhecidos (e malhas STL, OBJ e 3MF, e arquivos `.3dm`) |
| '"part.stp" não é um arquivo STEP (não começa com ISO-10303-21).' | O arquivo não é texto STEP |
| "Esse arquivo STEP é grande demais (acima de 60 MB) para importar aqui." | Simplifique-o na origem |
| "Esse arquivo é grande demais para ser uma peça do PartCraft." em uma peça salva por você | Um sólido STEP grande importado em uma versão anterior fez o arquivo da peça passar de 50 MB. Use uma cópia anterior sem ele |
| "Esse arquivo é grande demais para ser uma peça do PartCraft." | O arquivo tem mais de 50 MB; ele não é um arquivo do PartCraft |
| "Este não é um arquivo do PartCraft (não é JSON)." / "Este não é um arquivo do PartCraft." | O arquivo está danificado ou é de outro programa |
| "Este arquivo foi salvo por um PartCraft mais novo (versão de arquivo …); esta versão lê a versão …" | Abra-o no PartCraft mais novo |
| "Extrude2: a profundidade está errada." (ou outro valor) | O arquivo foi editado à mão ou danificado. Use uma cópia anterior |
| Inserir em uma montagem diz "Part1.partcraft.json não tem sólido para inserir." | O arquivo da peça não tem sólido. Abra-o, crie um sólido, salve e insira de novo |

**O meu arquivo salvo não está onde eu esperava.** Salvar é um download: procure na pasta de downloads do seu navegador, ou abra a lista de downloads pela barra de ferramentas do navegador. Veja [Onde seus arquivos vão parar](common:your-files).

**Abri uma peça, mas a montagem ainda está na tela.** A peça carregou atrás da montagem. Escolha {{ui:Fechar}} para fechar a montagem e ver a peça. Feche as montagens antes de abrir arquivos de peça.

## Problemas de desenho

| Mensagem | Correção |
|---|---|
| "Crie primeiro um sólido, depois faça o desenho dele." | Crie a peça primeiro |
| "Não há espaço na folha para: detalhe. Torne o detalhe menor ou remova uma vista." | **Raio do detalhe** ou **Escala do detalhe** menores, ou remova a seção |
| "Um detalhe é tirado da vista frontal, superior, direita ou de corte." | Clique em uma dessas vistas |
| "Clique em uma das vistas." | O clique foi em papel vazio |
| "A posição precisa de pelo menos uma referência de datum." e outras mensagens de quadro | Defina os datums que o painel pede, ou escolha outra característica |
| "As vistas do desenho não puderam ser criadas: …" | Desfaça a última alteração. Se continuar acontecendo, salve, recarregue e reabra a peça |

## Problemas de montagem

| Mensagem | Correção |
|---|---|
| "Crie primeiro um sólido, depois coloque-o em uma montagem." | A peça ainda não tem sólido |
| "Insira uma segunda peça primeiro (Adicionar cópia, Inserir ou Editar › Duplicar)." | Uma junta precisa de duas peças |
| "Selecione uma face em outra peça." | As duas faces de uma junta precisam estar em peças diferentes |
| "Essa face é curva. Selecione uma face plana …" | Juntas começam em faces planas. Depois use **Centralizar em** para um furo ou eixo de revolução |
| "Bracket2 não está unida à peça aterrada, então permanece onde foi colocada." | Adicione uma junta dela a uma peça que esteja posicionada |
| "Revolute3 fecha um circuito que não pode fechar: está 2.000 mm fora. Verifique as faces, os deslocamentos e os limites das juntas do circuito." | As peças não podem se encontrar todas: verifique os comprimentos, as faces que cada junta usa, os deslocamentos (peças empilhadas face a face devem concordar em profundidade) e os limites; ou remova uma junta do circuito |
| "A face que esta junta usa sumiu de Bracket." / "O eixo que esta junta usa sumiu de Bracket." | A peça foi editada. Remova a junta e faça-a de novo |
| "O eixo corre ao longo da face, então não pode definir o centro da junta." | Escolha um eixo que cruze a face, ou "A origem da própria face" |
| "Uma montagem mantém pelo menos uma peça. Feche-a em vez disso." | Use {{ui:Fechar}} |

**As peças estão unidas, mas no lugar errado.** Defina **Centralizar em** para os dois lados da junta com os furos ou eixos de revolução que devem se alinhar, depois ajuste **Ângulo (°)** e **Deslocamento (mm)**.

## Está lento

- Defina **Curvas** como Normal ou Grosseira enquanto modela; mude para Fina antes de exportar.
- Contagens grandes de padrão (centenas de cópias) demoram para reconstruir a cada alteração. Suprima o padrão enquanto trabalha em outros recursos.
- A verificação de interferência e a verificação de movimento comparam cada par de peças; montagens grandes levam mais tempo.
- Feche outras abas pesadas. O PartCraft roda no processador e nos gráficos do seu próprio computador.

## Ainda com problemas

Salve seu arquivo primeiro ({{key:Mod+S}}), depois recarregue a página e abra-o de novo. Se um recurso ainda falhar, selecione-o, leia a mensagem e tente {{key:Mod+Z}} até o último estado bom.
