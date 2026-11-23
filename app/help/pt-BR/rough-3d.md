---
title: Desbaste 3D e usinagem de sobras
summary: Remova o material bruto em volta do modelo inteiro, nível a nível, com uma fresa plana, de ponta arredondada ou esférica, deixando sobremetal para o acabamento, e depois deixe uma ferramenta menor cortar só onde a primeira deixou material. O que as trajetórias garantem e o que não garantem.
keywords: desbaste 3D, desbaste, usinagem de sobras, sobras, material restante, sobremetal, passo em Z, níveis, nível Z, cota constante, rampa, mergulho, entalhe, ferramenta menor
from: 29ddc266
---

Duas operações em Manufatura, em {{ui:Mais}} na sua barra de ferramentas, retiram material bruto do **modelo inteiro** em 3D, com a ferramenta mantida na vertical (ou na [direção de ferramenta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) própria da operação). Elas não pedem seleção.

## Desbaste 3D

{{ui:Desbaste 3D}} trabalha do topo do material bruto para baixo, um **passo em Z** de cada vez. Em cada nível, retira tudo o que a ferramenta consegue alcançar sem tocar o modelo: linhas retas separadas por um **passo lateral** (uma fração do diâmetro da ferramenta) e, depois, uma volta pela borda do que ela pode alcançar, de modo que as paredes sejam seguidas e não deixadas como uma fila de degraus em planta.

- **Sobremetal**: a distância que a ferramenta mantém do modelo em toda parte, para a passada de acabamento (padrão 0.5 mm).
- **Um nível em cada face plana**: um nível extra na altura de cada face plana do modelo (mais o sobremetal), para que um fundo não fique quase um passo inteiro acima.
- **Ignorar material mais fino que**: material mais fino que isto, para cima ou para o lado, não vale uma passada (0.05 mm para desbaste, 0.5 mm para usinagem de sobras, para que um fio deixado ao longo de uma parede não mande a ferramenta menor por todas as paredes).
- **Fundo**: nada é cortado abaixo desta altura. Vazio significa o fundo do modelo.

Ele parte do material bruto **como as operações anteriores o deixaram**: depois de uma passada de facear, não corta o ar onde a fresa de facear já passou.

Para descer: onde a ferramenta encontraria material no caminho para baixo, ela faz uma rampa ao longo da própria passada no **ângulo de rampa**, indo e voltando por no máximo dois diâmetros da ferramenta. Uma passada curta demais para isso é feita com mergulho reto para baixo no **avanço de mergulho**; a operação conta essas passadas e avisa, porque uma ferramenta que não corta no centro não deveria fazer isso.

## Usinagem de sobras

{{ui:Sobras}} segue a mesma estratégia para uma **ferramenta menor depois de uma maior**. Ela lê a simulação de material bruto e corta somente onde o material ainda está em pé: cantos internos que a ferramenta maior não conseguiu alcançar, rasgos em que ela não cabia, os degraus que deixou em inclinações. Em todo o resto não faz nada, então o seu caminho é uma pequena parte do que a mesma ferramenta faria em material bruto novo.

Coloque-a depois da operação de desbaste e escolha a ferramenta menor. Ela precisa da simulação de material bruto das operações anteriores, que a área de trabalho sempre executa.

## Quão boas são as trajetórias

- **Nenhum entalhe.** As posições da ferramenta são calculadas numa grade, com a fresa considerada um pouco maior do que é (em 1.4 célula de grade para os lados, e pelo sobremetal), de modo que em qualquer ponto em que ela esteja fique livre do modelo. Os testes verificam cada ponto de corte contra a ferramenta exata na malha exata, e a simulação de material bruto depois de cada execução: nenhum entalhe, nenhum avanço rápido através do material.
- **O preço disso**: as paredes mantêm um pouco mais que o sobremetal, até o valor mostrado como "Material extra nas paredes" na operação (cerca de 0.5 mm para uma ferramenta Ø6, menos para uma menor). A passada de acabamento o retira.

O que estas trajetórias não são:

- As linhas são retas, não deslocamentos da forma da peça nem curvas de engajamento constante. Fazem mais levantamentos e movimentos em vazio do que uma estratégia de deslocamento ou adaptativa, e a primeira linha em cada nível corta a largura total da ferramenta. Para bolsões de fundo plano, o [Adaptativo](topic:manufacture) é o melhor desbaste.
- O corpo e o porta-ferramenta da ferramenta não são verificados. Um aviso informa quando o corte é mais profundo que o comprimento do canal.
- Contrasulcos não são vistos: o modelo é o que a ferramenta encontra descendo pelo seu eixo. Para desbastar um lado, dê a uma segunda operação uma [direção de ferramenta inclinada](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- A usinagem de sobras conhece o material bruto apenas tão bem quanto a grade da simulação (células de 0.1 a 2 mm, conforme o tamanho da peça).
- Numa peça grande o programa é longo (mais de 100.000 movimentos para uma flange de 200 mm com uma ferramenta Ø6) e leva cerca de um minuto para ser calculado, e toda mudança na área de trabalho recalcula o programa inteiro. Use a maior ferramenta que couber para o desbaste.
- Verifique a saída no simulador da sua máquina antes de usinar.
