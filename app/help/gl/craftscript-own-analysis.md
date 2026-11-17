---
title: Escribir unha análise propia
summary: Constrúa unha análise como scripts do espazo de traballo Script: mallar a peza, ensamblar e resolver, amosar o campo e un trazado de converxencia, comprobar o resultado cun cálculo manual, e manter os pasos como scripts separados que comparten variables.
keywords: análise propia, análise personalizada, script FEA, elementos finitos, ensamblar, rixidez, condicións de contorno, resolver, pcg, esparsa, campo, posprocesado, converxencia, verificación, cálculo manual, comprobación, fluxo de traballo
from: 0f471a8e
---

Unha análise no espazo de traballo Script son uns poucos scripts curtos que se pasan variables uns a outros. Comece por unha función da [biblioteca](topic:craftscript-library) que se pareza ao que precisa, faga unha copia e cámbiea; ou constrúa unha como se indica a continuación.

## 1. Unha malla

```
model = part();                  % a peza que modela, como modelo
m = tetmesh(model, 4);           % tetraedros de uns 4 mm
show(m)
```

Comprobe a malla na vista antes de seguir: {{key:F}} axústaa, e o {{ui:eye}} de **Amosados** oculta a peza.

## 2. Ensamblar e resolver

Escriba o bucle de elementos no script (lese como o libro de texto), e deixe as partes pesadas ás funcións integradas: matrices de elementos, ensamblaxe esparsa a partir de tripletes, e o resolvedor de gradiente conxugado con precondicionador. Unha función da biblioteca como `static_tet` (cando a biblioteca a teña) é un exemplo completo para copiar.

## 3. Amosar o resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % un valor por nó
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Residuo do resolvedor', 'id', 'conv')
```

- O intervalo da lenda pódese escribir ou restaurar a {{ui:Auto}}.
- Prema na malla para ler os valores nun nó.
- Un trazado que conserva o mesmo `'id'` actualízase no mesmo sitio, así que imprima e trace dentro do seu bucle para ver como converxe.

## 4. Comprobalo

Compare con algo que coñeza: a frecha da punta dunha viga en voladizo fronte a PL³/3EI, unha placa cun burato fronte ao seu factor de concentración de tensións, as reaccións fronte ás cargas. Escriba a comprobación como script propio para que se volva executar despois de cada cambio:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('punta %g mm, teoría de vigas %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Gardalo

- Cada paso pode ter a súa propia lapela de script: comparten as variables, así que execútaos un tras outro.
- Os scripts gárdanse na peza. Marque **Gardar as variables coa peza** na lapela Variables para conservar tamén os resultados (ata 32 MB).
- {{ui:Gardar}} no grupo Script descarga un script para compartilo; {{ui:Abrir}} trae un.
