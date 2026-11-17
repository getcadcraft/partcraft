---
title: Campos magnéticos em 2D (tutorial)
summary: Calcule o campo magnético de um eletroíman ou de um íman permanente com a biblioteca de análise: execute os exemplos, leia a densidade de fluxo, o campo no entreferro, a indutância e a força de atração, altere o projeto e crie um modelo próprio de bobinas, ímanes e ferro.
keywords: magnético, magnetostática, campo magnético, densidade de fluxo, tesla, eletroíman, solenoide, bobina, ampere-espira, núcleo de ferro, entreferro, permeabilidade, indutância, força magnética, relutância, circuito magnético, potencial vetor, eletromagnetismo, MEF, motor, atuador, transformador, magnetostatic2d, íman permanente, neodímio, ndfeb, ferrite, remanência, ponto de funcionamento, recuo, dispersão, íman de retenção
from: 215f6601
---

A biblioteca de análise do PartCraft consegue calcular o campo magnético de bobinas e de ferro em 2D: uma secção transversal de algo comprido e igual ao longo do comprimento, como um eletroíman, o núcleo de um transformador, um barramento ou a secção transversal de um motor. Este tutorial executa o exemplo de eletroíman da biblioteca, lê o que indica, altera-o, mostra como modelar uma forma própria e depois acrescenta um íman permanente.

Usa o espaço de trabalho Script e a [biblioteca de análise](topic:craftscript-library). Não é preciso conhecer a linguagem CraftScript para o acompanhar; o exemplo diz o que faz cada linha.

## O que é modelado

Um núcleo de ferro em forma de C, com 100 × 80 mm por fora e 20 mm de espessura, com um entreferro de 2 mm na perna direita. Uma bobina de 100 espiras, percorrida por 10 A (1000 ampere-espiras), está enrolada à volta da perna esquerda. Tudo é comprido na direção que sai do ecrã, por isso as respostas são **por metro de profundidade**: multiplique pela profundidade real para um íman real.

A `magnetostatic2d` da biblioteca resolve o potencial vetor magnético numa malha de quadrados de 1 mm numa caixa de ar à volta do íman, e depois calcula a partir dele a densidade de fluxo **B** (em tesla).

## Executar o exemplo

1. Escolha **Script** na caixa **Espaço de trabalho** à esquerda da barra de ferramentas.
2. Abra o separador **Biblioteca** do painel de scripts, depois **Exemplos** › **Eletroíman: campo, entreferro, indutância**.
3. Clique em {{ui:Abrir (só de leitura)}} e depois prima {{key:F5}}.

Em poucos segundos a área de desenho mostra a densidade de fluxo, e a consola imprime:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

O gráfico abaixo da área de desenho é a densidade de fluxo vertical B_y ao longo da linha média do núcleo, da esquerda para a direita: cerca de −0.55 T na perna esquerda (o fluxo desce por ela), quase nada na janela, e +0.55 T na perna direita e através do entreferro (o fluxo regressa para cima). O mesmo fluxo atravessa o ferro e o entreferro, por isso as duas pernas e o entreferro mostram quase o mesmo valor.

## Ler os resultados

- **O campo no entreferro** é 0.543 T. Um cálculo à mão trata o núcleo como um só circuito magnético, B = μ0 N I / (g + l / μr), em que g é o entreferro, l o comprimento do percurso pelo ferro e μr a permeabilidade relativa do ferro; dá 0.552 T. O campo é um pouco inferior ao cálculo à mão porque o fluxo se abre à volta do entreferro (efeito de franja) e parte do fluxo atalha através da janela (dispersão). Com um entreferro menor ou uma malha mais fina, os dois valores aproximam-se.
- **A indutância** da bobina de 100 espiras é 0.154 H por metro de profundidade, a partir da energia armazenada no campo. A fórmula do circuito dá menos (0.110 H/m) porque conta apenas o fluxo através do entreferro, e não o fluxo que foge por ele.
- **A força de atração** que fecha o entreferro é B² w / (2 μ0), para uma face do entreferro com largura w: cerca de 2300 N por metro, ou 117 N para um íman com 50 mm de profundidade.
- **O pico** de 1.97 T está nos cantos interiores da janela, onde o fluxo muda de direção bruscamente. O modelo trata o ferro como linear; o aço elétrico real satura a cerca de 1.5 a 2 T, por isso trate os valores acima disso como um aviso, não como uma resposta.

:::note
Os testes da própria biblioteca executam este exemplo e verificam o campo no entreferro contra a fórmula do circuito magnético em cada alteração do PartCraft. O método, as referências e as outras verificações (um solenoide longo, um solenoide com núcleo de ferro) estão no cabeçalho de `magnetostatic2d`: clique nele na biblioteca.
:::

## Alterar o projeto

1. Clique em {{ui:Fazer uma cópia}} acima do script só de leitura. A cópia fica guardada com a peça.
2. Altere um valor perto do topo e prima {{key:F5}} de novo. Experimente:
   - `g = 0.001;` — metade do entreferro: o campo no entreferro quase duplica, e a força de atração também (varia com B²).
   - `mur = 200;` — um núcleo pior: mais ampere-espiras são gastas no ferro.
   - `N = 200;` — o dobro das espiras: o dobro do campo, quatro vezes a indutância.
   - `h = 0.0005;` — uma malha mais fina: respostas mais próximas, cerca de quatro vezes mais tempo.

Cada execução substitui a área de desenho. As variáveis criadas pelo script (como `Bgap`, `L`, `F`) ficam na lista **Variáveis** para os seus próprios cálculos.

## Modelar uma forma própria

O exemplo constrói tudo a partir de três listas, com um valor por quadrado da malha, que pode criar para qualquer forma desenhada com linhas retas ao longo da malha:

- **Onde está o ferro:** `iron` é verdadeiro para os quadrados dentro do núcleo. O exemplo constrói-o a partir de retângulos: `frame & ~window & ~gap` significa «no quadro, não na janela, não no entreferro».
- **A permeabilidade:** `1 + (mur - 1) * iron` é 1 no ar e `mur` no ferro. Dê a vários materiais os seus próprios valores da mesma forma.
- **A corrente:** `J` é a densidade de corrente em amperes por metro quadrado, positiva a sair do ecrã, negativa a entrar. Uma bobina tem dois lados com sinais opostos; o exemplo calcula `J0` de modo que um lado transporte N I.

Depois, `r = magnetostatic2d(m, permeability, J)` resolve o problema. `r.B` é a densidade de fluxo em cada quadrado (duas colunas, x e y), `r.Bmag` a sua magnitude, `r.energy` a energia armazenada por metro. `plot(x, y)` desenha uma linha.

A biblioteca trabalha em metros, e a vista em milímetros, por isso um campo mostrado tal como está seria desenhado mil vezes menor. O exemplo mostra-o numa cópia da malha em milímetros (`mm = quadGrid(…)`, e depois `show(field(mm, …))`): copie essas duas linhas.

Por defeito, a aresta da caixa retém o campo: nenhum fluxo sai dela. Faça a caixa pelo menos duas ou três vezes maior do que o íman, para que isto não comprima o campo. Para um íman simétrico pode modelar só metade: o cabeçalho de `magnetostatic2d` indica que condição de fronteira usar numa linha de simetria.

## Ímanes permanentes

O segundo exemplo, **Exemplos** › **Íman permanente num núcleo de ferro: ponto de funcionamento, dispersão, atração**, é o mesmo núcleo sem a bobina e com uma fatia de 10 mm da perna esquerda substituída por um íman, magnetizado para cima. Execute-o com {{key:F5}}. Imprime:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **O ponto de funcionamento.** Um íman descreve-se pela sua **remanência** Br (o campo que mantém quando é curto-circuitado por ferro: cerca de 1.2 T para um íman de NdFeB sinterizado, 0.4 T para ferrite) e pela sua permeabilidade de recuo (cerca de 1.05 e 1.1). Criar um entreferro desce-o pela reta de recuo: aqui até 1.04 T, com H a apontar contra B no seu interior.
- **Dispersão.** O cálculo à mão sem dispersão dá 0.97 T no entreferro; o modelo dá 0.68 T. Um íman impulsiona o seu fluxo com um impulso forte num comprimento curto, por isso grande parte dele regressa diretamente através da janela em vez de passar pelo entreferro. O fator de dispersão indica quanto: 1.53 aqui. Defina `g = 0;` para um retorno de ferro fechado: o íman passa então a funcionar a menos de meio por cento do cálculo à mão.
- **Ímanes num modelo próprio.** Dê a `magnetostatic2d` os ímanes como `struct('Br', Br)`, em que `Br` tem uma linha por quadrado da malha com a remanência segundo x e y em tesla (zero fora dos ímanes), e dê aos quadrados do íman a sua permeabilidade de recuo na lista de permeabilidades:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T para cima nos quadrados onde mag é verdadeiro
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para um íman magnetizado segundo um ângulo, coloque `Br·cos(angle)` e `Br·sin(angle)` nas duas colunas; para um anel magnetizado para fora, calcule a direção de cada quadrado a partir da sua posição. `r.H` dá a intensidade do campo H em cada quadrado.

O modelo mantém um íman na sua reta de recuo, por mais forte que seja o acionamento. Um íman real levado para além do joelho (por um entreferro grande, uma bobina forte ou calor) perde parte da sua força de forma definitiva; verifique o ponto de funcionamento contra a curva do fabricante para a qualidade e a temperatura.

Os testes da biblioteca verificam os ímanes contra dois resultados de cálculo à mão: um íman redondo ao ar livre (no seu interior, B = Br / (1 + μr)) e um íman fechado por um retorno de ferro (o circuito magnético), ambos com erro inferior a 1 %.

## O que ainda não faz

- **Saturação.** O ferro é linear: o dobro da corrente, o dobro do campo, sem limite.
- **Desmagnetização.** Os ímanes mantêm-se na sua reta de recuo (ver acima).
- **Correntes de Foucault** e **perdas** (perdas no ferro, perdas no cobre).
- **Peças móveis e binário.** Não há rotor a rodar num estator, nem binário em função do ângulo.
- **Formas redondas.** A malha é feita de quadrados iguais, por isso os contornos curvos saem em escada.
- **3D.** Tudo é uma secção transversal de algo comprido.

O projeto de motores (um rotor a rodar, binário e perdas em 2D) está a ser estudado para uma versão posterior. Ver [Ainda não implementado](topic:not-built-yet).
