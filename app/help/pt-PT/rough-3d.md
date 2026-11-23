---
title: Desbaste 3D e maquinação de restos
summary: Retirar o bruto em redor de todo o modelo, nível a nível, com uma fresa plana, de nariz redondo ou esférica, deixando sobremedida para o acabamento; depois, deixar uma ferramenta mais pequena cortar apenas onde a primeira deixou material. O que os percursos garantem e o que não garantem.
keywords: desbaste 3d, desbaste, maquinação de restos, desbaste de restos, bruto restante, bruto a deixar, passo em profundidade, níveis, nível z, linha de água, rampa, mergulho, entalhe, ferramenta mais pequena
from: 29ddc266
---

Duas operações em Fabrico, em {{ui:Mais}} na sua barra de ferramentas, retiram bruto de todo o **modelo** em 3D, com a ferramenta mantida vertical (ou segundo a [direção da ferramenta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) própria da operação). Não pedem seleções.

## Desbaste 3D

{{ui:Desbaste 3D}} trabalha para baixo a partir do topo do bruto, um **passo em profundidade** de cada vez. Em cada nível retira tudo o que a ferramenta alcança sem tocar no modelo: filas retas afastadas de um **passo lateral** (uma fração do diâmetro da ferramenta) e, depois, uma volta ao longo da borda do que pode alcançar, para que as paredes sejam seguidas e não deixadas como uma fila de degraus em planta.

- **Bruto a deixar**: a distância a que a ferramenta fica do modelo em todo o lado, para a passagem de acabamento (predefinido 0,5 mm).
- **Um nível em cada face plana**: um nível extra à altura de cada face plana do modelo (mais o bruto a deixar), para que um fundo não fique quase um passo inteiro acima.
- **Ignorar bruto mais fino que**: material mais fino do que isto, para cima ou para o lado, não vale uma passagem (0,05 mm para desbaste, 0,5 mm para maquinação de restos), para que um fio deixado ao longo de uma parede não mande a ferramenta mais pequena dar a volta a todas as paredes.
- **Fundo**: nada é cortado abaixo desta altura. Vazio significa o fundo do modelo.

Começa a partir do bruto tal como as operações anteriores o deixaram: depois de uma passagem de facejar, não corta o ar onde a fresa de facejar já passou.

Descer: onde a ferramenta encontraria bruto na descida, desce em rampa ao longo da sua própria passagem, ao **ângulo de rampa**, para a frente e para trás, num máximo de dois diâmetros de ferramenta. Uma passagem curta demais para isso é feita em mergulho direto ao avanço de mergulho; a operação conta essas descidas e avisa, porque uma ferramenta que não corta no centro não deve fazê-lo.

## Maquinação de restos

{{ui:Restos}} é a mesma estratégia para uma **ferramenta mais pequena depois de uma maior**. Lê a simulação do bruto e corta apenas onde o material ainda está de pé: cantos interiores onde a ferramenta maior não conseguia entrar, ranhuras em que não cabia, os degraus que deixou nas inclinações. Em todo o resto não faz nada, pelo que o seu percurso é uma pequena parte do que a mesma ferramenta faria em bruto novo.

Coloque-a depois da operação de desbaste e escolha a ferramenta mais pequena. Precisa da simulação do bruto das operações anteriores, que o espaço de trabalho executa sempre.

## Qualidade dos percursos

- **Sem entalhe.** As posições da ferramenta são calculadas numa malha, com a fresa considerada um pouco maior do que é (em 1,4 células da malha lateralmente, e pela sobremedida a deixar), para que, em qualquer ponto onde esteja, fique livre do modelo. Os testes verificam cada ponto de corte contra a ferramenta exata na malha exata, e a simulação do bruto após cada execução: sem entalhe, sem movimento rápido através do bruto.
- **O preço disto**: as paredes mantêm um pouco mais do que o bruto a deixar, até ao valor indicado como "Bruto extra nas paredes" na operação (cerca de 0,5 mm para uma ferramenta Ø6, menos para uma mais pequena). A passagem de acabamento retira-o.

O que estes percursos não são:

- As filas são linhas retas, não deslocamentos da forma da peça nem curvas de engajamento constante. Fazem mais levantamentos e movimentos em ar do que uma estratégia de deslocamento ou adaptativa, e a primeira fila em cada nível corta a largura total da ferramenta. Para caixas de fundo plano, [Adaptativo](topic:manufacture) é o melhor desbaste.
- A haste e o porta-ferramentas não são verificados. Um aviso surge quando o corte é mais fundo do que o comprimento do gume.
- Os recortes por baixo não são vistos: o modelo é aquilo que a ferramenta encontra ao descer pelo seu eixo. Para desbastar um lado, dê a uma segunda operação uma [direção de ferramenta inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- A maquinação de restos conhece o bruto apenas tão bem quanto a grelha da simulação (células de 0,1 a 2 mm, conforme o tamanho da peça).
- Numa peça grande, o programa é longo (mais de 100 000 movimentos para uma aba de 200 mm com uma ferramenta Ø6) e demora cerca de um minuto a calcular, e cada alteração no espaço de trabalho volta a calcular o programa inteiro. Use a maior ferramenta que caiba para o desbaste.
- Verifique o resultado no simulador da sua máquina antes de cortar.
