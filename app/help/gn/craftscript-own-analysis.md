---
title: Ejapo análisis propio
summary: Ejapo análisis Script espacio-pe kuatiañe-kuéra rupi: parte mallado, ojoaju ha solve, tensión ha convergencia gráfico ohechauka, ajuste hecho mano-pe ojekuaa, ha tembiapo kuatiañe mbohovái ambue ha ijyvy variable-ndive.
keywords: análisis propio, análisis personalizado, script FEA, elementos finitos, ensamblar, rigidez, condiciones de contorno, resolver, pcg, disperso, campo, post-proceso, convergencia, verificación, cálculo a mano, control, flujo de trabajo
from: 0f471a8e
---

Análisis Script espacio-pe ha'e kuatiañe chiquitáva ojeintercambia variable-kuéra. Ñepyrũ [biblioteca](topic:craftscript-library) función oĩva ndive ndéve oikóva, ejapo copia ha ejapyhy; térã ojapo kuatiañe-kuéra ko'ápe ojehai ramo.

## 1. Malla

```
model = part();                  % parte ejapóva, modelo-icha
m = tetmesh(model, 4);           % tetraedro 4 mm aproximado
show(m)
```

Ehecha malla vista-pe mboyve: {{key:F}} ojustá, {{ui:eye}} **Shown**-pe ojepe'a parte.

## 2. Ensamblar ha resolver

Ejapo elemento loop kuatiañe-pe (ojeikuaa libro-icha), ha ejapo pesado parte incorporada función-kuéra-pe: matriz de elemento, ensamblaje disperso triplet-gui, ha gradiente conjugado solver precondicionador-ndive. Biblioteca función, `static_tet` (biblioteca oguerekóramo) peteĩ ejemplo entero ojeporúva.

## 3. Ohechauka resultado

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % peteĩ valor nodo-pe
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Leyenda rango ojeñe'ẽ térã oñemoĩ **Auto**-pe.
- Ejeapretá malla nodo valor ojehechauka hag̃ua.
- Gráfico mismo `'id'` ojeporúva oñemoambue, ko'ẽ print ha plot loop-pe, convergencia ohecha hag̃ua.

## 4. Control

Ojerure mba'e ojekuaáva: cantilever punta desplazamiento PL³/3EI-ndive, placa agujero-pe tensión concentración factor-ndive, reacción carga-ndive. Ejapo control kuatiañe propio, upéicha cada cambio rire oñemoñe:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Mbombyta

- Cada paso ha'e kuatiañe tab propio: ijyvy variable, upéicha peteĩ peteĩ ojapo.
- Kuatiañe oñeguarda parte-pe. Ejapo **Save the variables with the part** Variables tab-pe resultado oñeguarda hag̃ua (32 MB peve).
- {{ui:Save}} Script grupo-pe kuatiañe ojeguerupa; {{ui:Open}} oipe'a.
