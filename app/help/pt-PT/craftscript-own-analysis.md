---
title: Escrever a sua própria análise
summary: Construa uma análise como scripts na área de trabalho Script: malhar a peça, montar e resolver, mostrar o campo e um gráfico de convergência, verificar o resultado com um cálculo à mão, e manter os passos como scripts separados que partilham variáveis.
keywords: análise própria, análise personalizada, script de EF, elementos finitos, montar, rigidez, condições de fronteira, resolver, pcg, esparsa, campo, pós-processamento, convergência, validação, cálculo à mão, verificação, fluxo de trabalho
from: 0f471a8e
---

Uma análise na área de trabalho Script é um conjunto de scripts curtos que se passam variáveis uns aos outros. Comece por uma [biblioteca](topic:craftscript-library) próxima do que precisa, faça uma cópia e altere-a; ou construa uma como se indica abaixo.

## 1. Uma malha

```
model = part();                  % a peça que está a modelar, como modelo
m = tetmesh(model, 4);           % tetraedros com cerca de 4 mm
show(m)
```

Verifique a malha na vista antes de avançar: {{key:F}} ajusta-a, e o {{ui:olho}} em **Visíveis** oculta a peça.

## 2. Montar e resolver

Escreva o ciclo de elementos no script (lê-se como no manual), e deixe as partes pesadas às funções incorporadas: matrizes de elementos, montagem esparsa a partir de triplos, e o solucionador de gradiente conjugado com um pré-condicionador. Uma função da biblioteca como `static_tet` (quando a biblioteca a tiver) é um exemplo completo para copiar.

## 3. Mostrar o resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % um valor por nó
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- O intervalo da legenda pode ser escrito ou repostos em {{ui:Auto}}.
- Clique na malha para ler os valores num nó.
- Um gráfico que mantém o mesmo `'id'` é atualizado no próprio lugar, por isso imprima e represente dentro do seu ciclo para acompanhar a convergência.

## 4. Verificar

Compare com algo que conhece: a flecha da ponta de uma viga em consola face a PL³/3EI, uma placa com furo face ao seu fator de concentração de tensões, as reações face às cargas. Escreva a verificação como um script próprio, para que corra de novo após cada alteração:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Guardar

- Cada passo pode ser um separador de script próprio: partilham as variáveis, por isso execute-os um a seguir ao outro.
- Os scripts são guardados na peça. Marque **Guardar as variáveis com a peça** no separador Variáveis para guardar também os resultados (até 32 MB).
- {{ui:Guardar}} no grupo Script transfere um script para o partilhar; {{ui:Abrir}} traz um.
