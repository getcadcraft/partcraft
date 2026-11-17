---
title: Escreva sua própria análise
summary: Monte uma análise como scripts na área de trabalho Script: malhe a peça, monte e resolva, mostre o campo e um gráfico de convergência, confira o resultado com um cálculo manual e mantenha os passos como scripts separados que compartilham variáveis.
keywords: análise própria, análise personalizada, script FEA, elementos finitos, montagem, rigidez, condições de contorno, resolver, pcg, esparsa, campo, pós-processamento, convergência, verificação, cálculo manual, check, fluxo de trabalho
from: 0f471a8e
---

Uma análise na área de trabalho Script é um conjunto de poucos scripts curtos que passam variáveis entre si. Comece com uma função da [biblioteca](topic:craftscript-library) que se aproxime do que você precisa, faça uma cópia e a altere; ou monte uma do zero, como abaixo.

## 1. Uma malha

```
model = part();                  % a peça que você está modelando, como um modelo
m = tetmesh(model, 4);           % tetraedros com cerca de 4 mm
show(m)
```

Confira a malha na visualização antes de continuar: {{key:F}} ajusta a visualização, e o {{ui:olho}} em **Exibidos** oculta a peça.

## 2. Montar e resolver

Escreva o laço dos elementos no script (ele se lê como no livro-texto) e deixe as partes pesadas para as funções embutidas: matrizes de elementos, montagem esparsa a partir de tripletos e o solver de gradiente conjugado com um pré-condicionador. Uma função da biblioteca, como `static_tet` (quando a biblioteca já a tiver), é um exemplo completo para copiar.

## 3. Mostrar o resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % um valor por nó
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- O intervalo da legenda pode ser digitado ou voltar para {{ui:Auto}}.
- Clique na malha para ler os valores em um nó.
- Um gráfico que mantém o mesmo `'id'` é atualizado no lugar; por isso, imprima e plote dentro do seu laço para acompanhar a convergência.

## 4. Verifique

Compare com algo que você conhece: a flecha da ponta de uma viga em balanço contra PL³/3EI, uma placa com furo contra o seu fator de concentração de tensão, as reações contra as cargas. Escreva a verificação como um script próprio, para que ela rode de novo após cada alteração:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Guarde

- Cada passo pode ter sua própria aba de script: elas compartilham as variáveis, então execute uma após a outra.
- Os scripts são salvos na peça. Marque **Salvar as variáveis com a peça** na guia Variáveis para manter também os resultados (até 32 MB).
- {{ui:Salvar}} no grupo Script baixa um script para compartilhá-lo; {{ui:Abrir}} traz um.
