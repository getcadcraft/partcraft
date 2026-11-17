---
title: Campos magnéticos en 2-D (tutorial)
summary: Calcule o campo magnético dun electroimán ou dun imán permanente coa biblioteca de análise: execute os exemplos, lea a densidade de fluxo, o campo no entreferro, a indutancia e a atracción, cambie o deseño e constrúa o seu propio modelo de bobinas, imáns e ferro.
keywords: magnético, magnetostática, campo magnético, densidade de fluxo, tesla, electroimán, solenoide, bobina, amperios-voltas, núcleo de ferro, entreferro, permeabilidade, indutancia, forza magnética, reluctancia, circuíto magnético, potencial vector, electromagnetismo, elementos finitos, MEF, motor, actuador, transformador, magnetostatic2d, imán permanente, neodimio, ndfeb, ferrita, remanencia, punto de traballo, recuo, fuga, imán de suxeición
from: 215f6601
---

A biblioteca de análise de PartCraft pode calcular o campo magnético de bobinas e de ferro en 2-D: unha sección transversal de algo longo e igual ao longo do seu comprimento, como un electroimán, un núcleo de transformador, unha barra colectora ou a sección dun motor. Este tutorial executa o exemplo de electroimán da biblioteca, le o que di, cámbiao, mostra como modelar a súa propia forma e despois engade un imán permanente.

Usa o espazo de traballo Script e a [biblioteca de análise](topic:craftscript-library). Non fai falta coñecer a linguaxe CraftScript para seguilo; o exemplo explica o que fai cada liña.

## Que se modela

Un núcleo de ferro en forma de C, de 100 × 80 mm por fóra e 20 mm de grosor, cun entreferro de aire de 2 mm na súa perna dereita. Unha bobina de 100 voltas que leva 10 A (1000 amperios-voltas) está enrolada na perna esquerda. Todo é longo na dirección que sae da pantalla, así que as respostas son **por metro de profundidade**: multiplíquese pola profundidade real para un imán real.

`magnetostatic2d` da biblioteca resolve o potencial vector magnético nunha cuadrícula de cadrados de 1 mm dentro dunha caixa de aire ao redor do imán, e despois calcula a densidade de fluxo **B** (en tesla) a partir del.

## Executar o exemplo

1. Escolla **Script** na caixa **Espazo de traballo** á esquerda da barra de ferramentas.
2. Abra a lapela **Biblioteca** do panel de script, despois **Exemplos** › **Electroimán: campo, entreferro, indutancia**.
3. Faga clic en {{ui:Open (read-only)}} e prema {{key:F5}}.

En un ou dous segundos o lenzo mostra a densidade de fluxo, e a consola imprime:

```
B no entreferro 0,5427 T; circuíto magnético 0,5516 T (-1,6 %: efecto de bordo e fuga)
indutancia 0,1539 H por metro de profundidade; o circuíto dá 0,1103 H/m, sen contar o fluxo que se fuga polo entreferro
enerxía almacenada 7,694 J/m; |B| acada 1,97 T nas esquinas interiores da xanela (o aceiro real saturaríase alí)
atracción no entreferro de preto de 2343 N por metro de profundidade (117,2 N para 50 mm de profundidade)
```

O gráfico baixo o lenzo é a densidade de fluxo vertical B_y ao longo da liña central do núcleo, de esquerda a dereita: preto de −0,55 T na perna esquerda (o fluxo baixa por ela), case nada na xanela, e +0,55 T na perna dereita e atravesando o entreferro (o fluxo volve subir). O mesmo fluxo pasa polo ferro e polo entreferro, así que as dúas pernas e o entreferro mostran un valor case igual.

## Ler os resultados

- **O campo no entreferro** é de 0,543 T. Un cálculo a man trata o núcleo como un só circuíto magnético, B = μ0 N I / (g + l / μr), onde g é o entreferro, l a lonxitude do camiño polo ferro e μr a permeabilidade relativa do ferro; dá 0,552 T. O campo é un pouco menor que o cálculo a man porque o fluxo se abomba ao redor do entreferro (efecto de bordo) e parte do fluxo colle un atallo polo espazo da xanela (fuga). Con un entreferro máis pequeno ou unha cuadrícula máis fina, os dous valores achéganse.
- **A indutancia** da bobina de 100 voltas é de 0,154 H por metro de profundidade, calculada a partir da enerxía almacenada no campo. A fórmula do circuíto dá menos (0,110 H/m) porque só conta o fluxo que pasa polo entreferro, non o que se fuga por el.
- **A atracción** que pecha o entreferro é B² w / (2 μ0) para unha cara do entreferro de anchura w: preto de 2300 N por metro, ou 117 N para un imán de 50 mm de profundidade.
- **O pico** de 1,97 T está nas esquinas interiores da xanela, onde o fluxo xira bruscamente. O modelo trata o ferro como lineal; o aceiro eléctrico real satúrase arredor de 1,5 a 2 T, así que trate os valores por riba diso como un aviso, non como unha resposta.

:::note
As probas da propia biblioteca executan este exemplo e comparan o campo no entreferro coa fórmula do circuíto magnético en cada cambio de PartCraft. O método, as súas referencias e as súas outras comprobacións (un solenoide longo, un solenoide con núcleo de ferro) están na cabeceira de `magnetostatic2d`: fai clic nela na biblioteca.
:::

## Cambiar o deseño

1. Faga clic en {{ui:Make a copy}} sobre o script de só lectura. A copia gárdase coa súa peza.
2. Cambie un valor preto do principio e prema {{key:F5}} de novo. Probe:
   - `g = 0.001;` — a metade do entreferro: o campo no entreferro case se duplica, e tamén a atracción (vai con B²).
   - `mur = 200;` — un núcleo peor: unha parte maior dos amperios-voltas gástase no ferro.
   - `N = 200;` — o dobre de voltas: o dobre de campo, e catro veces a indutancia.
   - `h = 0.0005;` — unha cuadrícula máis fina: resultados máis próximos, cerca de catro veces máis tempo.

Cada execución substitúe o lenzo. As variables que crea o script (como `Bgap`, `L`, `F`) quedan na lista **Variables** para as súas propias contas.

## Modelar a súa propia forma

O exemplo constrúe todo a partir de tres listas, cun valor por cadro da cuadrícula, que pode facer para calquera forma debuxada con liñas rectas seguindo a cuadrícula:

- **Onde está o ferro:** `iron` é verdadeiro para os cadros dentro do núcleo. O exemplo constrúeo a partir de rectángulos: `frame & ~window & ~gap` significa "no marco, non na xanela, non no entreferro".
- **A permeabilidade:** `1 + (mur - 1) * iron` é 1 no aire e `mur` no ferro. Dálle a varios materiais o seu propio valor do mesmo xeito.
- **A corrente:** `J` é a densidade de corrente en amperios por metro cadrado, positiva cara a fóra da pantalla, negativa cara a dentro. Unha bobina ten dous lados con signos opostos; o exemplo calcula `J0` para que un lado leve N I.

Despois, `r = magnetostatic2d(m, permeability, J)` resolve o modelo. `r.B` é a densidade de fluxo en cada cadro (dúas columnas, x e y), `r.Bmag` o seu tamaño, `r.energy` a enerxía almacenada por metro. `plot(x, y)` debuxa unha liña.

A biblioteca traballa en metros, e a vista en milímetros, así que un campo mostrado tal cal se debuxaría mil veces máis pequeno. O exemplo mostra o campo nunha copia da cuadrícula en milímetros (`mm = quadGrid(…)`, despois `show(field(mm, …))`): copie esas dúas liñas.

Por defecto, o bordo da caixa retén o campo: nada de fluxo sae dela. Faga a caixa polo menos dúas ou tres veces o tamaño do imán para que isto non comprima o campo. Para un imán simétrico pode modelar só a metade: a cabeceira de `magnetostatic2d` indica que condición de bordo usar nunha liña de simetría.

## Imáns permanentes

O segundo exemplo, **Exemplos** › **Imán permanente nun núcleo de ferro: punto de traballo, fuga, atracción**, é o mesmo núcleo sen a bobina e cunha lamina de 10 mm da perna esquerda substituída por un imán, magnetizado cara arriba. Execútao con {{key:F5}}. Imprime:

```
o imán traballa a B = 1,036 T, H = -124 kA/m (na súa recta de recuo B = Br + μ0 μr H)
B no entreferro 0,6778 T; o circuíto magnético sen fuga 0,9692 T (-30,1 %)
factor de fuga 1,53: do fluxo que sae do imán, o 65 % cruza o entreferro entre as caras polares
atracción no entreferro de preto de 3656 N por metro de profundidade (182,8 N para 50 mm de profundidade)
```

- **O punto de traballo.** Un imán descríbese pola súa **remanencia** Br (o campo que conserva cando o ferro o curtocircuíta: preto de 1,2 T para un imán de NdFeB sinterizado, 0,4 T para ferrita) e pola súa permeabilidade de recuo (preto de 1,05 e 1,1). Abrir un entreferro empuxa o imán pola súa recta de recuo: aquí ata 1,04 T, con H apuntando contra B dentro del.
- **Fuga.** O cálculo a man sen fuga dá 0,97 T no entreferro; o modelo dá 0,68 T. Un imán impulsa o seu fluxo cun empuxe forte ao longo dunha lonxitude curta, así que unha boa parte volve directamente pola xanela en vez de pasar polo entreferro. O factor de fuga indica canto: 1,53 aquí. Poña `g = 0;` para unha culatra pechada: entón o imán traballa a menos de medio por cento do cálculo a man.
- **Imáns no seu propio modelo.** Dálle a `magnetostatic2d` os imáns como `struct('Br', Br)`, onde `Br` ten unha fila por cadro da cuadrícula coa remanencia en x e y en tesla (cero fóra dos imáns), e dálle aos cadros dos imáns a súa permeabilidade de recuo na lista de permeabilidades:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1,2 T cara arriba nos cadros onde mag é verdadeiro
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para un imán magnetizado en ángulo, ponga `Br·cos(ángulo)` e `Br·sin(ángulo)` nas dúas columnas; para un anel magnetizado cara a fóra, calcule a dirección de cada cadro segundo a súa posición. `r.H` dá a intensidade de campo H en cada cadro.

O modelo mantén un imán na súa recta de recuo por moito que se o empurre. Un imán real empurrado máis aló do seu xeonllo (por un entreferro grande, unha bobina forte ou calor) perde parte da súa forza para sempre: comprobe o punto de traballo coa curva do fabricante para a calidade e a temperatura.

As probas da biblioteca comprobán os imáns con dous resultados a man: un imán redondo no aire aberto (dentro del, B = Br / (1 + μr)) e un imán pechado por unha culatra de ferro (o circuíto magnético), ambos dentro do 1 %.

## O que aínda non fai

- **Saturación.** O ferro é lineal: o dobre de corrente, o dobre de campo, sen límite.
- **Desmagnetización.** Os imáns mantéñense na súa recta de recuo (ver arriba).
- **Correntes de Foucault** e **perdas** (perdas no ferro, perdas no cobre).
- **Partes móbiles e par.** Sen rotor xirando nun estator, sen par en función do ángulo.
- **Formas redondas.** A cuadrícula está feita de cadrados iguais, así que os contornos curvos saen escalonados.
- **3-D.** Todo é unha sección transversal de algo longo.

O deseño de motores (un rotor que xira, par e perdas en 2-D) estase estudando para unha versión posterior. Ver [Non construído aínda](topic:not-built-yet).
