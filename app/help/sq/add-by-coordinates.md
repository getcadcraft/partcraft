---
title: Shto gjeometri skice duke shkruar koordinatat
summary: Përdor Shto sipas koordinatave në panelin e skicës për të vendosur vija, vija qendrore, drejtkëndësha, rrathë dhe pika në pozicione të sakta, vetëm me tastierë.
keywords: koordinata, hyrje e shkruar, hyrje me tastierë, hyrje numerike, pozicion i saktë, x y, koordinata absolute, qasshmëri, pa miun
from: 5e6c1656
---

Kur i di numrat, t'i shkruash është më shpejt sesa t'i klikosh dhe t'i përmasosh. **Shto sipas koordinatave** ndodhet në panelin e djathtë kurdo që është hapur një skicë. Ai gjithashtu lejon të ndërtosh një skicë pa asnjë tregues.

Koordinatat janë në milimetra, në boshtet e vetë skicës: x djathtas dhe y lart kur e shikon skicën, me (0, 0) në origjinë (rrethi i kuq me kryq).

## Shto një formë

1. Hap një skicë (shih [Vizato skicën tënde të parë](topic:sketch-basics)).
2. Në panelin e djathtë, lëviz te **Shto sipas koordinatave**.
3. Zgjidh formën te **Shto**: Vijë, Vija qendrore, Drejtkëndësh, Rreth ose Pikë.
4. Plotëso kutitë:

| Formë | Kutitë |
|---|---|
| Vijë | **Nga x, y** dhe **Deri te x, y** |
| Vija qendrore | **Nga x, y** dhe **Deri te x, y** |
| Drejtkëndësh | **Qoshja x, y** dhe **Qoshja e kundërt x, y** |
| Rreth | **Qendra x, y** dhe **Rrezja** |
| Pikë | **Te x, y** |

5. Zgjidh {{ui:Shto}}, ose shtyp {{key:Enter}} në çdo kuti.

Forma shfaqet dhe shiriti i statusit thotë, për shembull, "U shtua një drejtkëndësh." Kutitë zbrazen, gati për tjetrën. Çdo shtesë është një hap zhbërjeje.

Shkruaje një çift si dy numra të ndarë me presje ose hapësirë: `0, 0`, `25 -10` ose `12.5,40`. Numrat negativë dhe dhjetorët janë në rregull. Një rreze duhet të jetë më e madhe se zero. Nëse diçka nuk lexohet si numër, shiriti i statusit thotë: 'Shkruaj koordinatat si "x, y" dhe një rreze më të madhe se zero.'

## Shembull: kontur pllake me brazdë, e shkruar

1. Hap një skicë mbi **Plani Front**.
2. **Shto**: Drejtkëndësh. **Qoshja x, y**: `-50, -30`. **Qoshja e kundërt x, y**: `50, 30`. {{key:Enter}}.
3. **Shto**: Rreth. **Qendra x, y**: `-30, 0`. **Rrezja**: `5`. {{key:Enter}}.
4. **Qendra x, y**: `30, 0`. **Rrezja**: `5`. {{key:Enter}}.
5. Zgjidh {{ui:Dil nga skica}}, pastaj {{ui:Ekstrudo}}: një pllakë 100 × 60 me dy vrima 10 mm.

## Gjeometria e shkruar vendoset, por nuk lidhet

Koordinatat e shkruara e vendosin gjeometrinë në vendin e duhur, por **nuk janë lidhje**. Format mbeten blu (nën-përcaktuara) dhe mund të lëvizin nëse i tërheq ose ndryshon një përmasë tjetër:

- një drejtkëndësh i shkruar vjen me qoshën, horizontalen dhe vertikalen e vet lidhëse, si një i vizatuar, por asgjë nuk e lidh me origjinën;
- një vijë e shkruar nuk ka lidhje horizontale ose vertikale, edhe nëse shkruan një vijë të niveluar;
- qendra e një rrethi të shkruar është e lirë.

Për ta bërë skicën plotësisht të përcaktuar, shto më pas përmasa dhe lidhje (shih [Përcakto plotësisht një skicë](topic:relations-dimensions)). Për shembull, zgjidh një qoshe të drejtkëndëshit dhe origjinën, pastaj zgjidh {{ui:• Bashkëvendosur}}, ose përmaso qendrat e rrathëve nga origjina.

:::note
Pa tregues mund të arrish deri këtu: lëviz te një rresht plani në histori me {{key:Tab}} dhe tastet me shigjeta, shtyp {{key:Enter}} për ta zgjedhur, shtyp {{key:S}} për të skicuar, shto format këtu, dhe arri te **Ndrysho** pranë çdo përmase dhe te {{ui:Dil nga skica}} me {{key:Tab}}. Zgjedhja e gjeometrisë, dhe për rrjedhim shtimi i lidhjeve ose i përmasave të reja, ende kërkon një klikim ose prekje në këtë version.
:::

## Kufizimet

- Harqet nuk mund të shkruhen ende. Vizatoji me mjetin Hark, ose shkruaj një rreth dhe përdor lidhje.
- Nuk ka koordinata relative (nga pika e fundit) ose polare (gjatësi dhe kënd) në këtë kuti.
- Gjeometria e shkruar nuk ngjitet te pikat ekzistuese. Shkruaj të njëjtat koordinata si një pikë ekzistuese, pastaj shto një lidhje {{ui:• Bashkëvendosur}} ndërmjet tyre nëse duhet të mbeten të lidhura.
