---
title: Bhala ukuhlaziya kwakho
summary: Yakha ukuhlaziya njenge-script e-Script workspace: yenza imesh yengxenye, hlanganisa futhi uxazulule, bonisa insimu negrafu yokuhlangana, uqinisekise umphumela ngokubala ngesandla, bese ugcina izinyathelo njengama-script ahlukene ahlanganyela okuguquguqukayo.
keywords: ukuhlaziya okwenziwe, ukuhlaziya okwenziwe ngokwakho, i-FEA script, finite element, hlanganisa, stiffness, imibandela yomkhawulo, xazulula, pcg, sparse, insimu, post-process, ukuhlangana, ukuqinisekisa, ukubala ngesandla, ukuhlola, inqubo
from: 0f471a8e
---

Ukuhlaziya ku-Script workspace yimbalwa ye-script emfushane edlulisela okuguquguqukayo omunye komunye. Qala kumsebenzi womtapo wokuhlaziya [omtapo](topic:craftscript-library) osondele kulokho odinga, yenza ikopi, bese uyashintsha; noma yakha okusuka ngezansi.

## 1. Imesh

```
model = part();                  % ingxenye oyenza imodeli, njengemodeli
m = tetmesh(model, 4);           % ama-tetrahedron cishe ayi-4 mm ubude
show(m)
```

Hlola imesh embonweni ngaphambi kokuqhubeka: {{key:F}} iyilingana, i-{{ui:ihlo}} ku-**Okubonisiwe** iyifihla ingxenye.

## 2. Hlanganisa futhi uxazulule

Bhala ilophu yezakhi ku-script (ifundeka njengencwadi yokufundela), bese ushiya izingxenye ezinzima zemisebenzi yangaphakathi: amamatrikhsi ezakhi, ukuhlanganiswa kwe-sparse kusukela kuma-triplet, nesixazululi se-conjugate gradient esinomlungiseli. Umsebenzi womtapo onjenge-`static_tet` (uma umtapo usuwunawo) ungumzekelo ophelele wokukopisha kuwo.

## 3. Bonisa umphumela

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % inani elilodwa ngenode ngayinye
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Ububanzi be-legend bungafakwa ngesandla noma buphindiselwe ku-{{ui:Ozenzakalelayo}}.
- Chofoza imesh ukuze ufunde amanani kunode.
- Igrafu egcina i-`'id'` efanayo ivuselelwa endaweni yayo, ngakho phrinta futhi uphlotte ngaphakathi kwelophu ukuze ubuke ukuhlangana.

## 4. Hlola

Qhathanisa nento oyaziyo: ukuphambuka kwethiphu ye-cantilever kuqhathaniswa ne-PL³/3EI, ipuleti elinesikhala kuqhathaniswa nesici sokugxilisa ukucindezeleka kwalo, izimpendulo kuqhathaniswa nemithwalo. Bhala ukuhlola njengesikripthi sakho ukuze siqhube futhi ngemva kwawo wonke ushintsho:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Yigcine

- Isinyathelo ngasinye singaba ithebhu yaso ye-script: zabelana ngokuguquguqukayo, ngakho zihlume ngokulandelana.
- Ama-script agcinwa engxenyeni. Khetha **Londoloza okuguquguqukayo nengxenye** ethebhini lokuguquguqukayo ukuze ugcine nemiphumela (kuze kube ngama-32 MB).
- {{ui:Londoloza}} eqenjini le-Script ilanda i-script ukuze uyabelane ngayo; {{ui:Vula}} ilethe eyodwa.
