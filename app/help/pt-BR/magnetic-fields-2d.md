---
title: Campos magnéticos em 2-D (tutorial)
summary: Calcule o campo magnético de um eletroímã ou de um ímã permanente com a biblioteca de análise: execute os exemplos, leia a densidade de fluxo, o campo no entreferro, a indutância e a força de atração, altere o projeto e construa o seu próprio modelo de bobinas, ímãs e ferro.
keywords: magnético, magnetostática, campo magnético, densidade de fluxo, tesla, eletroímã, solenoide, bobina, ampère-espira, núcleo de ferro, entreferro, permeabilidade, indutância, força magnética, relutância, circuito magnético, potencial vetor, eletromagnetismo, elementos finitos, fem, motor, atuador, transformador, magnetostatic2d, ímã permanente, neodímio, ndfeb, ferrite, remanência, ponto de trabalho, recuo, dispersão, armadura
from: 215f6601
---

A biblioteca de análise do PartCraft pode calcular o campo magnético de bobinas e ferro em 2-D: uma seção transversal de algo longo e igual ao longo do seu comprimento, como um eletroímã, o núcleo de um transformador, um barramento ou a seção de um motor. Este tutorial executa o exemplo de eletroímã da biblioteca, lê o que ele mostra, o altera, mostra como modelar a sua própria forma e depois adiciona um ímã permanente.

Ele usa a área de trabalho Script e a [biblioteca de análise](topic:craftscript-library). Você não precisa conhecer a linguagem CraftScript para acompanhar; o exemplo diz o que cada linha faz.

## O que é modelado

Um núcleo de ferro em forma de C, 100 × 80 mm por fora e 20 mm de espessura, com um entreferro de 2 mm na perna direita. Uma bobina de 100 espiras percorrida por 10 A (1000 ampère-espiras) é enrolada na perna esquerda. Tudo é longo na direção que sai da tela, então as respostas são **por metro de profundidade**: multiplique pela profundidade real para um ímã real.

O `magnetostatic2d` da biblioteca resolve o potencial vetor magnético em uma grade de quadrados de 1 mm dentro de uma caixa de ar em volta do ímã, e depois calcula a densidade de fluxo **B** (em tesla) a partir dele.

## Execute o exemplo

1. Escolha **Script** na caixa **Área de trabalho**, à esquerda da barra de ferramentas.
2. Abra a guia **Biblioteca** do painel de script, depois **Exemplos** › **Eletroímã: campo, entreferro, indutância**.
3. Clique em {{ui:Open (read-only)}}, depois pressione {{key:F5}}.

Em um ou dois segundos a tela mostra a densidade de fluxo, e o console imprime:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

O gráfico abaixo da tela é a densidade de fluxo vertical B_y ao longo da linha central do núcleo, da esquerda para a direita: cerca de −0.55 T na perna esquerda (o fluxo desce por ela), quase nada na janela, e +0.55 T na perna direita e através do entreferro (o fluxo volta para cima). O mesmo fluxo passa pelo ferro e pelo entreferro, então as duas pernas e o entreferro mostram quase o mesmo valor.

## Leia os resultados

- **O campo no entreferro** é 0.543 T. Um cálculo à mão trata o núcleo como um único circuito magnético, B = μ0 N I / (g + l / μr), em que g é o entreferro, l o comprimento do caminho pelo ferro e μr a permeabilidade relativa do ferro; ele dá 0.552 T. O campo é um pouco menor que o cálculo à mão porque o fluxo se abaula em volta do entreferro (franjas) e parte dele pega um atalho pela janela (dispersão). Com um entreferro menor ou uma grade mais fina, os dois se aproximam.
- **A indutância** da bobina de 100 espiras é 0.154 H por metro de profundidade, a partir da energia armazenada no campo. A fórmula do circuito dá menos (0.110 H/m) porque conta apenas o fluxo através do entreferro, não o fluxo que escapa por ele.
- **A força de atração** que fecha o entreferro é B² w / (2 μ0) para uma face de entreferro de largura w: cerca de 2300 N por metro, ou 117 N para um ímã de 50 mm de profundidade.
- **O pico** de 1.97 T fica nos cantos internos da janela, onde o fluxo muda de direção bruscamente. O modelo trata o ferro como linear; o aço elétrico real satura em cerca de 1.5 a 2 T, então trate valores acima disso como um aviso, não como resposta.

:::note
Os testes da própria biblioteca executam este exemplo e conferem o campo no entreferro com a fórmula do circuito magnético a cada alteração do PartCraft. O método, suas referências e seus outros testes (um solenoide longo, um solenoide com núcleo de ferro) estão no cabeçalho de `magnetostatic2d`: clique nele na biblioteca.
:::

## Altere o projeto

1. Clique em {{ui:Make a copy}} acima do script somente leitura. A cópia é salva com a sua peça.
2. Altere um valor perto do início e pressione {{key:F5}} de novo. Experimente:
   - `g = 0.001;` — metade do entreferro: o campo no entreferro quase dobra, e a força de atração também (ela varia com B²).
   - `mur = 200;` — um núcleo pior: mais ampère-espiras são gastos no ferro.
   - `N = 200;` — o dobro de espiras: o dobro do campo, quatro vezes a indutância.
   - `h = 0.0005;` — uma grade mais fina: respostas mais próximas, cerca de quatro vezes o tempo.

Cada execução substitui a tela. As variáveis criadas pelo script (como `Bgap`, `L`, `F`) permanecem na lista **Variáveis** para as suas próprias contas.

## Modele a sua própria forma

O exemplo constrói tudo a partir de três listas, com um valor por quadrado da grade, que você pode montar para qualquer forma desenhada com linhas retas seguindo a grade:

- **Onde está o ferro:** `iron` é verdadeiro para os quadrados dentro do núcleo. O exemplo o constrói a partir de retângulos: `frame & ~window & ~gap` significa "no quadro, não na janela, não no entreferro".
- **A permeabilidade:** `1 + (mur - 1) * iron` é 1 no ar e `mur` no ferro. Dê a vários materiais os próprios valores do mesmo jeito.
- **A corrente:** `J` é a densidade de corrente em ampères por metro quadrado, positiva saindo da tela e negativa entrando nela. Uma bobina tem dois lados com sinais opostos; o exemplo calcula `J0` para que um lado carregue N I.

Depois, `r = magnetostatic2d(m, permeability, J)` resolve o modelo. `r.B` é a densidade de fluxo em cada quadrado (duas colunas, x e y), `r.Bmag` o seu tamanho, `r.energy` a energia armazenada por metro. `plot(x, y)` desenha uma linha.

A biblioteca trabalha em metros e a vista em milímetros, então um campo mostrado como está seria desenhado mil vezes menor. O exemplo o mostra em uma cópia da grade em milímetros (`mm = quadGrid(…)`, depois `show(field(mm, …))`): copie essas duas linhas.

Por padrão, a borda da caixa mantém o campo dentro: nenhum fluxo sai dela. Faça a caixa pelo menos duas ou três vezes o tamanho do ímã para que isso não comprima o campo. Para um ímã simétrico, você pode modelar só metade dele: o cabeçalho de `magnetostatic2d` diz qual condição de borda usar em uma linha de simetria.

## Ímãs permanentes

O segundo exemplo, **Exemplos** › **Ímã permanente em um núcleo de ferro: ponto de trabalho, dispersão, força de atração**, é o mesmo núcleo, sem a bobina e com uma fatia de 10 mm da perna esquerda substituída por um ímã magnetizado para cima. Execute com {{key:F5}}. Ele imprime:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **O ponto de trabalho.** Um ímã é descrito pela sua **remanência** Br (o campo que ele mantém quando é curto-circuitado por ferro: cerca de 1.2 T para um ímã de NdFeB sinterizado, 0.4 T para ferrite) e pela sua permeabilidade de recuo (cerca de 1.05 e 1.1). Abrir um entreferro o empurra para baixo na sua reta de recuo: aqui até 1.04 T, com H apontando contra B dentro dele.
- **Dispersão.** O cálculo à mão sem dispersão dá 0.97 T no entreferro; o modelo dá 0.68 T. Um ímã conduz o fluxo com um empuxo forte em um trecho curto, então muito dele volta direto pela janela em vez de passar pelo entreferro. O fator de dispersão mostra quanto: 1.53 aqui. Defina `g = 0;` para uma armadura fechada: o ímã então trabalha a menos de meio por cento do cálculo à mão.
- **Ímãs no seu próprio modelo.** Dê ao `magnetostatic2d` os ímãs como `struct('Br', Br)`, em que `Br` tem uma linha por quadrado da grade com a remanência ao longo de x e y em tesla (zero fora dos ímãs), e dê aos quadrados de ímã a permeabilidade de recuo na lista de permeabilidades:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T para cima nos quadrados onde mag é verdadeiro
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para um ímã magnetizado em um ângulo, coloque `Br·cos(angle)` e `Br·sin(angle)` nas duas colunas; para um anel magnetizado para fora, calcule a direção de cada quadrado a partir da sua posição. `r.H` dá a intensidade do campo H em cada quadrado.

O modelo mantém um ímã na sua reta de recuo, por mais forte que seja empurrado. Um ímã real forçado além do seu joelho (por um entreferro grande, uma bobina forte ou calor) perde parte da força para sempre; confira o ponto de trabalho com a curva do fabricante para o grau e a temperatura.

Os testes da biblioteca conferem os ímãs com dois resultados feitos à mão: um ímã redondo ao ar livre (dentro dele, B = Br / (1 + μr)) e um ímã fechado por uma armadura de ferro (o circuito magnético), ambos dentro de 1 %.

## O que ainda não faz

- **Saturação.** O ferro é linear: dobre a corrente, dobre o campo, sem limite.
- **Desmagnetização.** Os ímãs ficam na sua reta de recuo (veja acima).
- **Correntes parasitas** e **perdas** (perda no ferro, perda no cobre).
- **Partes móveis e torque.** Nenhum rotor girando em um estator, nenhum torque em função do ângulo.
- **Formas redondas.** A grade é feita de quadrados iguais, então contornos curvos ficam em degraus.
- **3-D.** Tudo é uma seção transversal de algo longo.

Projeto de motores (um rotor girando, torque e perdas em 2-D) está em estudo para uma versão futura. Veja [Ainda não implementado](topic:not-built-yet).
