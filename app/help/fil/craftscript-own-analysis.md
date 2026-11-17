---
title: Gumawa ng sarili mong analysis
summary: Gumawa ng analysis bilang mga script sa Script workspace: i-mesh ang part, i-assemble at lutasin, ipakita ang field at convergence plot, i-check ang resulta laban sa hand calculation, at itago ang mga hakbang bilang hiwalay na script na nagbabahagi ng variable.
keywords: own analysis, custom analysis, FEA script, finite element, assemble, stiffness, boundary conditions, solve, pcg, sparse, field, post-process, convergence, verification, hand calculation, check, workflow
from: 0f471a8e
---

Ang analysis sa Script workspace ay ilang maikling script na nagpapasa ng mga variable sa isa't isa. Magsimula sa isang [library](topic:craftscript-library) function na malapit sa kailangan mo, gumawa ng kopya, at baguhin ito; o buuin ito mula sa simula gaya ng nasa ibaba.

## 1. Isang mesh

```
model = part();                  % ang part na minomodelo mo, bilang model
m = tetmesh(model, 4);           % tetrahedra na mga 4 mm ang lapad
show(m)
```

Suriin ang mesh sa view bago magpatuloy: ang {{key:F}} ay nag-fit nito, ang {{ui:eye}} sa **Ipinapakita** ay nagtatago sa part.

## 2. I-assemble at lutasin

Isulat ang element loop sa script (kamukha ng nasa textbook), at ipaubaya ang mabibigat na bahagi sa mga built-in function: element matrix, sparse assembly mula sa triplet, at ang conjugate gradient solver na may preconditioner. Ang isang library function gaya ng `static_tet` (kapag mayroon na nito ang library) ay kumpletong halimbawang kopyahin.

## 3. Ipakita ang resulta

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % isang value bawat node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Maaaring i-type ang range ng legend o ibalik sa {{ui:Auto}}.
- I-click ang mesh para basahin ang mga value sa isang node.
- Ang plot na may parehong `'id'` ay nag-a-update sa lugar mismo, kaya mag-print at mag-plot sa loob ng loop para panoorin ang convergence.

## 4. I-check ito

Ikumpara sa alam mo na: ang tip deflection ng cantilever laban sa PL³/3EI, ang plate na may butas laban sa stress concentration factor nito, ang mga reaction laban sa mga load. Isulat ang check bilang sarili nitong script para tumakbo ulit ito pagkatapos ng bawat pagbabago:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Itago ito

- Ang bawat hakbang ay maaaring sariling script tab: nagbabahagi sila ng mga variable, kaya patakbuhin ang mga ito nang sunod-sunod.
- Naka-save ang mga script sa part. Lagyan ng check ang **I-save ang mga variable kasama ng part** sa Variables tab para mapanatili rin ang mga resulta (hanggang 32 MB).
- Ang {{ui:Save}} sa Script group ay nagda-download ng script para maibahagi; ang {{ui:Open}} ay nagdadala ng isa.
