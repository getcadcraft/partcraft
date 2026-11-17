---
title: Superfícies de forma livre (NURBS)
summary: Curvas e superfícies suaves ao lado da peça — loft, varrimento, redes de curvas, remendos de quatro arestas, concordâncias, aparos — com continuidade G0, G1 e G2 medida nas superfícies exatas, sólidos com união, subtração e interseção integrados na peça, vistas de zebra e de curvatura, faces ajustadas a um scan com o erro medido, e ficheiros STEP ou IGES. Guardadas no ficheiro da peça.
keywords: nurbs, scan, engenharia inversa, ajustar, malha para superfície, nuvem de pontos, stl, aparar, aparado, furo, recorte, sólido, sólidos, booleano, união, subtrair, interseção, diferença, coser, fechado, integrar, forma livre, superfície, superfícies, b-spline, bspline, curva, spline, loft, varrimento, trilho, rede, coons, remendo, concordância, semelhança, continuidade, g0, g1, g2, tangente, curvatura, zebra, pontos de controlo, nós, grau, step, iges, classe A, casco, alisamento
from: 64ed5196
---

A área de trabalho **Superfícies** cria curvas e superfícies suaves do tipo usado em carenagens de produtos, carroçarias de automóveis e cascos de barcos: NURBS, a mesma matemática que outros modeladores de superfícies usam. Tudo é medido nas superfícies exatas, nunca nos triângulos que vê. As dimensões estão em milímetros, como no resto da PartCraft.

Escolha **Superfícies** na caixa **Área de trabalho**. A barra de ferramentas tem {{ui:Curva}}, {{ui:Loft}}, {{ui:Varrimento}}, {{ui:Semelhança}} e {{ui:Zebra}}; todos os comandos estão no painel à direita. Cada comando indica o que ainda precisa: clique em curvas ou superfícies na vista (perto de uma aresta ou de um extremo quando o pedir) ou escolha-as na lista; escreva pontos, ou clique-os nas faces da peça (fora da peça caem no plano do solo), e depois prima Enter.

As curvas e superfícies ficam guardadas no ficheiro da peça ao lado do sólido. Não alteram as operações da peça: o painel tem o seu próprio {{ui:Anular}} e {{ui:Refazer}}, um passo por comando.

## Curvas

- **Curva por pontos** passa por cada ponto em que clicar. **Curva por pontos de controlo** segue antes uma gaiola de pontos.
- **Inserir nó**, **Elevar grau** e **Baixar grau** alteram a forma como uma curva é descrita sem a mover (baixar recusa-se quando a curva se moveria mais do que a tolerância). **Reconstruir curva** dá-lhe um novo número de pontos de controlo e indica quanto se moveu.
- **Ajustar curva** faz com que uma extremidade de uma curva encontre outra com G0 (a tocar), G1 (mesmo sentido) ou G2 (também a mesma curvatura). **Concordar curva** acrescenta uma nova curva entre duas extremidades, em G1 ou G2.

## Superfícies

- **Loft** por duas ou mais curvas, **Superfície reglada** entre duas, **Extrudir curva**, **Revolver curva**.
- **Varrimento ao longo de um trilho** leva um perfil ao longo de um caminho sem o torcer; **Varrimento ao longo de dois trilhos** mantém as extremidades do perfil nos dois trilhos. Os varrimentos são ajustados: o resultado indica quão perto ficou do varrimento verdadeiro.
- **Superfície a partir de uma rede de curvas** passa por uma grelha de curvas (cada uma cruza cada uma das outras uma vez). **Remendo a partir de quatro arestas** preenche quatro curvas que se encontram nos seus cantos.
- **Ajustar superfície** faz uma aresta de superfície encontrar uma vizinha com G0, G1 ou G2; **Concordar superfície** acrescenta uma superfície entre duas arestas.
- **Superfície de offset**, **Prolongar superfície** (a superfície continua como ia), **Reconstruir superfície**.

## Verificar a qualidade

A tabela **Arestas partilhadas** lista cada aresta que duas superfícies partilham, com a folga (mm), o ângulo entre elas (°) e o salto de curvatura (1/mm), e indica se isso dá G0, G1 ou G2. Uma aresta pior do que pediu aparece em **Problemas** com uma correção **Ajustar**.
As riscas de **Zebra** e as cores de **curvatura** vêm da superfície exata: riscas que atravessam uma aresta sem quebra significam G1; riscas que mantêm também a largura significam G2.

G0–G2 são medidas em 33 pontos por aresta. **G3 e a qualidade "classe A" não são medidas** e não são afirmadas.

## Aparar uma superfície

O grupo **Aparar** corta uma superfície sem alterar a sua forma: a superfície mantém todos os seus pontos de controlo, e só a parte dentro do contorno é mostrada, contada e escrita. **Aparar a um retângulo** e **Aparar com um círculo** trabalham sobre uma fração (0 a 1) da superfície em cada direção, pelo que não precisam de escolha na vista; **Aparar por uma curva** recebe uma curva fechada que se situa sobre a superfície (é projetada na superfície, e recusada por escrito quando está aberta ou a mais do que a tolerância de distância). Marque **Cortar um furo** para remover o interior do contorno; deixe-a desmarcada para manter só o interior. Uma superfície pode ter um contorno mantido e qualquer número de furos; um contorno que cruze outro é recusado. **Remover o aparo** mostra a superfície inteira de novo. O Anular do painel desfaz um aparo como qualquer outro passo.

O STEP guarda o aparo como os limites da face e o IGES como uma superfície aparada (entidade 144); ambos o leem de volta.

## Sólidos e booleanos

O grupo **Sólidos** transforma superfícies em corpos fechados e combina-os. Um sólido aqui é um conjunto das superfícies do próprio painel que, em conjunto, fecham um volume; as suas faces mantêm-se superfícies NURBS exatas com os respetivos aparos.

- **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** criam um a partir de dimensões escritas (em mm): uma caixa de seis faces planas, um cilindro com um lado redondo e duas extremidades planas aparadas ao círculo, uma esfera de uma superfície de revolução.
- **Sólido a partir de superfícies** agrupa superfícies que criou. Escolha-as, ou não escolha nenhuma para usar todas as superfícies mostradas que ainda não estão num sólido. São cosidas dentro da tolerância: se não fecharem, nada muda e o painel indica quantas arestas ficam abertas e a que distância têm de se encontrar.
- **União**, **Subtrair** (o segundo sólido é retirado ao primeiro) e **Interseção** (só o que ambos partilham) recebem dois sólidos: clique numa face de cada um na vista, ou prima **Escolher** na lista **Sólidos**. Marque **Manter os dois sólidos** para os deixar ao lado do resultado.

Um booleano mantém cada face na sua superfície exata e corta-a com novos contornos de aparo ao longo da interseção. A linha de resultado dá os números medidos: quanto os pontos do motor de sólidos tiveram de se mover para ficar sobre as superfícies exatas (nunca mais do que a tolerância), quão perto estão os pontos de interseção de ambas as superfícies (normalmente alguns milionésimos de milímetro), o volume, e se as novas faces voltam a fechar quando são cosidas de novo a partir das suas superfícies exatas. Os volumes são medidos sobre triângulos dentro da tolerância (0,05 mm, salvo se definir outra), pelo que o volume de uma esfera ou de um cilindro sai ligeiramente abaixo do exato: uma tolerância menor aproxima-se mais. Um booleano que não pode ser feito de forma limpa (os sólidos não partilham nada, um contorno se cruzaria a si próprio) é recusado por escrito e nada muda. Um booleano é um passo do **Anular** do painel.

Na lista **Sólidos**, **Desagrupar** mantém as faces como superfícies simples; o caixote remove o sólido e as suas faces.

## Boleados e espessamento

**Boleado entre faces** arredonda a aresta onde duas faces de um mesmo sólido se encontram: escolha as duas faces (na vista, ou com **Escolher** na lista), escreva o **raio** e, para um raio que varie ao longo da aresta, o **raio no fim** (0 mantém um raio único). Uma esfera desse raio é rolada ao longo da aresta, tocando as duas faces; o boleado é o arco circular exato que deixa em cada ponto, unido numa só superfície, e as duas faces são aparadas onde a esfera as toca. Uma aresta exterior perde material, um canto interior ganha-o. A linha de resultado dá o que foi medido: quão longe a superfície do boleado está da esfera rolante entre os pontos a partir dos quais foi construída (acrescentam-se pontos até ficar dentro de um quarto da tolerância), o maior ângulo entre o boleado e cada face ao longo das linhas de contacto, e os mesmos números de uma União. Um raio que não cabe (a esfera sairia de uma face, ou uma face curva mais apertada do que o raio) é recusado, com o nome da face, e nada muda.

**Boleado de várias arestas** arredonda muitas arestas num só passo: escolha as duas faces da primeira aresta, depois as duas faces da seguinte, e assim por diante (uma face pode estar em vários pares, por exemplo a face superior de uma caixa em quatro deles); todas as arestas recebem o raio que escrever. Cada arredondamento é calculado sobre o sólido tal como estava, e depois são cortados um a seguir ao outro, pelo que a ordem não importa. Onde duas arestas arredondadas se encontram num canto cujas outras arestas se mantêm vivas, os dois boleados fundem-se ao longo da sua curva de interseção (uma aresta viva). Onde três arestas exteriores arredondadas de três faces planas perpendiculares se encontram com um só raio, o canto passa a ser um **remendo esférico** tangente aos três boleados (desmarque **Cantos** para obter o canto em aresta viva); uma aresta tem de ter pelo menos o dobro do raio de comprimento onde as duas extremidades são esses cantos. A linha de resultado indica quantas arestas foram arredondadas e como saíram os cantos. Arestas interiores também podem ser arredondadas em conjunto, mas um resultado que não volte a fechar é apenas reportado (a linha di-lo), por isso verifique-o.

**Espessar num sólido** dá espessura a uma superfície: escolha-a, escreva a **espessura** e marque **Outro lado** para a fazer crescer no sentido contrário. A face de offset é ajustada à superfície e medida contra ela (a linha de resultado dá a maior diferença em relação à espessura); as paredes seguem cada aresta e cada contorno de aparo. Se a superfície curvar mais apertadamente do que a espessura desse lado, ou se outra parte dela ficar mais perto do que a espessura, é recusado, com o nome da superfície e do local, e nada muda.

## Integrar um sólido na peça

**Integrar** (na barra de ferramentas Superfícies), ou **Integrar na peça** na lista **Sólidos**, transforma o sólido num corpo da peça, tal como um STL aberto se torna um: escolha o sólido, se é **acrescentado** à peça, **cortado** dela ou **intersetado** com ela, e a tolerância (até que ponto os triângulos podem afastar-se das superfícies exatas). É um passo do Anular da peça e aparece na lista de operações como uma importação com o nome do sólido. A peça guarda os triângulos, pelo que abre e se reconstrói sem as superfícies; o sólido exato fica em Superfícies, pelo que pode ser integrado de novo depois de uma alteração.

## Ficheiros

Exporte **STEP** (AP242) ou **IGES** com as curvas e superfícies exatamente como são (curvas e superfícies B-spline, nada convertido em triângulos). Cada superfície é uma face própria, com o seu aparo; um sólido é escrito como uma casca fechada, com cada aresta partilhada pelas suas duas faces, como os outros programas CAD esperam (a barra de estado indica quantos sólidos saíram assim). No IGES, o mesmo sólido é um B-rep sólido de variedade única (entidade 186 sobre a casca fechada 514, faces 510, ciclos 508, uma lista de arestas 504 e uma lista de vértices 502); um sólido cujas faces não emparelham aresta a aresta é escrito como faces separadas, e a linha di-lo. **Importar…** lê de volta esse sólido como sólido, tanto de STEP como de IGES.

## Linhas de casco suaves

**Suavizar** (na barra de ferramentas Superfícies) mede cada curva na sua forma exata — pontos de inflexão (onde passa de curvar num sentido para o outro), a maior curvatura, os saltos de curvatura nos seus nós e a sua rugosidade — e reconstrói as que têm um ponto de inflexão ou um salto com o menor número de pontos de controlo que se mantenham dentro da tolerância que indicar e não acrescentem inflexões. Desenhe as cavernas, as linhas de flutuação e as linhas de topo como curvas, suavize-as, depois faça **Loft** do casco através das cavernas e verifique com **Zebra**. As curvas não suavizadas também aparecem em **Problemas** com uma correção **Suavizar esta curva**. Uma linha que deva mudar de sentido (uma secção em S) mantém essa inflexão. O deslocamento, os centros e os braços de endireitamento do casco vêm do sólido da peça: ver a ferramenta de hidrostática.

## Superfícies a partir de um scan (engenharia inversa)

Abra a peça que contém a malha digitalizada (um STL aberto ou um corpo integrado), escolha **Superfícies** na caixa **Área de trabalho**, e no grupo **Scan** escolha **Ajustar superfícies ao scan**; a malha construída da peça é o scan. A ferramenta procura **planos**, **cilindros**, **esferas** e **cones** (as superfícies exatas de que é feita uma peça maquinada; cada linha mostra o raio ou a meia-amplitude que encontrou), encontra **boleados** (arestas e cantos arredondados: um pequeno cilindro ou esfera que corre tangente a duas ou mais outras faces, mostrado com o seu raio e as faces que une), **boleados de aro** (um toro: a aresta arredondada onde uma face plana encontra um cilindro ou cone, mostrada com o seu raio e o raio do anel) e **boleados variáveis** (uma aresta arredondada cujo raio varia ao longo dela, mostrada com o raio em cada extremidade), ajusta **um remendo de forma livre** a uma peça suave e levemente curva, e corta cada face ao contorno da parte do scan de onde veio, pelo que os furos e os cantos se mantêm. Opções: a **tolerância** (a que distância, em mm, um ponto do scan pode estar de um plano ou cilindro e ainda pertencer-lhe, e o alvo de um remendo de forma livre), a **peça mais pequena** (uma fração da área da superfície) e as **mais faces**. O mesmo scan e as mesmas opções dão sempre as mesmas faces.

O resultado é uma tabela, uma linha por face: o seu tipo, quantos triângulos tinha de origem, e o erro **medido do scan até à face** (rms, o maior, e a fração de pontos dentro da tolerância). Os pontos medidos são os vértices do scan e o meio de cada triângulo. O erro não é medido no sentido inverso (face até ao scan), pelo que uma face que vá além do scan não se veria. A nota por baixo da tabela indica também quanta área era pequena demais para ser ajustada. Na vista, os pontos do scan são coloridos pelo seu **mapa de desvio**: azul na face, verde a meio caminho da tolerância, vermelho na tolerância ou acima (desmarque **Mostrar o mapa de desvio** para o ocultar). Os pedaços que se dobram sobre si próprios (um tubo fechado ajustado com remendos de forma livre, por exemplo) aparecem como não ajustados, nunca forçados a uma só superfície.

**Coser as superfícies num sólido** cose cada superfície mostrada que não esteja num sólido num único sólido fechado. As faces do scan só se encontram dentro do próprio erro do scan, pelo que tenta a menor distância de junção que feche (nunca mais do que a **distância de costura** que definir) e recusa por escrito quando as faces não fecham. Nunca tapa uma falha. Uma caixa com arestas arredondadas cose-se quando os seus boleados foram encontrados como faces próprias; a distância de junção que fechou aparece no resultado. O sólido funciona então com União, Subtrair, Interseção e **Integrar na peça**.

O que não faz: um **boleado de aro** (um toro) só é procurado à volta do eixo de um cilindro ou cone já encontrado, e um **boleado variável** só ao longo de uma aresta bastante reta (as suas secções são cortadas perpendicularmente a uma direção); noutros casos saem como remendos de forma livre quando são suficientemente suaves, e ficam de fora quando não são; esferas, cones e boleados são encontrados por amostragem aleatória, pelo que um muito pequeno (poucos triângulos) pode passar despercebido; o mapa de desvio mostra a distância do scan às faces, e não o inverso; scans muito grandes (mais de 300 000 triângulos) são recusados aqui. As faces de um cilindro de volta completa são cortadas à volta dos furos, com a costura colocada onde não há furo. Verifique cada face contra o seu scan antes de confiar nela.

## Ainda não implementado

Arredondar arestas que se encontram num canto de faces curvas ou com raios diferentes (uma mistura de vértice), um boleado entre faces que não se tocam, um boleado interior que termina numa face inclinada ou curva, booleanos e boleados calculados nas superfícies sem triângulos (aqui o motor de sólidos trabalha em triângulos dentro da tolerância, e cada ponto é depois reposto nas superfícies exatas), um corpo integrado que acompanhe as superfícies quando elas mudam, aparar uma superfície por outra superfície fora de um booleano, preencher furos com mais de quatro lados, projetar curvas sobre superfícies.
