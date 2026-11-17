---
title: Palakihin ang hugis mula sa mga load (Generative)
summary: Piliin ang mga face na hawak at may load, mga rehiyon na itatago at iiwang malinaw, target na volume at materyal, at i-generate ang mga outcome: ang pinakamatitibay na hugis para sa bawat volume, muling sinuri bilang solid, inihahambing sa table at dina-download bilang STL, STEP o bagong piyesa.
keywords: generative design, topology optimization, topology optimisation, SIMP, magaan, lattice, organikong hugis, outcome, ihambing, mass, volume fraction, preserve, keep-in, obstacle, keep-out, design space, pinakamaliit na sukat ng member, STL, 3D printing
from: 5b91fa8e
---

Tinatanggal ng Generative workspace ang materyal na hindi kailangan ng mga load. Sinasabi mo kung saan hawak at may load ang piyesa, ano ang dapat manatili at ano ang dapat manatiling malinaw; hahanapin ng PartCraft ang pinakamatibay na hugis para sa bawat target volume (**topology optimisation**), muling susuriin ang bawat isa bilang solid gamit ang totoong materyal, at ipapakita ang mga outcome nang magkatabi. Gumagana ito sa mga pinangalanang face na ibinibigay ng mesh kernel sa piyesa (tingnan ang [The mesh kernel](topic:solid-kernels)).

Piliin ang **Generative** sa kahon na **Workspace**. Hindi nababago ang piyesa mo; naka-save ang study sa loob ng part file.

## Ihanda ang study

1. Pindutin ang **New study** sa kanang panel.
2. **Space**: ang *The part as it is* ay nag-aalis ng materyal mula sa piyesa mo; ang *A box around the part* ay nagpapalaki ng hugis sa loob ng box na mas malaki sa piyesa ng **Box margin**.
3. **Element size**: iwanang blangko para sa awtomatikong laki (mga 8,000 cube), o mag-type ng isa. Mas pinong laki ang nagbibigay ng mas pinong hugis at mas matagal.
4. **Minimum member**: ang mga member na mas manipis sa humigit-kumulang dalawang beses nito ay hindi nabubuo. Kapag blangko, isa at kalahating cube ang ibig sabihin.
5. Lagyan ng check ang isa hanggang anim na **Target volumes** (ang bahagi ng design space na maaaring punan ng hugis) at isa hanggang apat na **Materials**. Isang beses nagagawa ang bawat volume; sinusuri ang bawat materyal sa hugis na iyon. Hindi nakadepende sa materyal ang pinakamatibay na hugis, pero nakadepende rito ang mass, stress at safety factor nito.

## Mga layunin

- {{ui:Fixed}}: i-click ang mga face na hawak. Ang **Frictionless face** mula sa listahang **Add** ng panel ay humahawak lamang ng face sa sarili nitong eroplano (gamitin ito para sa symmetry plane).
- {{ui:Force}}: i-click ang mga face na may load, pagkatapos i-type ang kabuuang puwersa at piliin ang direksyon nito sa panel. Ang **Pressure** ay nasa listahang **Add**.
- {{ui:Preserve}}: i-click ang mga face na dapat manatiling solid ang paligid, at itakda kung gaano kalalim (**Keep solid within**), halimbawa sa paligid ng bolt hole. Laging pinananatili ang mga face na hawak o may load mo.
- {{ui:Obstacle}}: i-click ang mga face na dapat manatiling walang laman ang paligid, at itakda kung gaano kalayo (**Keep empty within**), halimbawa puwang para sa shaft o tool.

Pindutin ang **Done picking** o {{key:Esc}} pagkatapos mag-click ng mga face. Ipinapakita ng berde at pulang kulay ang mga rehiyon.

## I-generate at ihambing

Pindutin ang {{ui:Generate}}. Ipinapakita ng panel ang progreso at natitirang oras; kinakansela ito ng **Stop**. Lumalabas ang bawat outcome sa talahanayang **Outcomes**: target volume, materyal, **mass**, **largest stress**, **largest displacement** at **safety factor** (yield ÷ stress), lahat mula sa muling pag-solve ng tapos na hugis bilang solid cube gamit ang totoong materyal.

Pumili ng outcome para makita ito sa view (nakatago ang piyesa; lagyan ng check ang **Show the part through it** para makita ang dalawa). Sa ilalim ng talahanayan: ilang iteration ang kinailangan at kung nag-settle ito, ang stiffness nito bilang solid laban sa sariling figure ng optimizer, at ang surface nito.

## Gamitin ang isang outcome

- **STL**: saradong triangle mesh, handa para sa 3D printing.
- **STEP (faceted)**: parehong surface bilang STEP solid na gawa sa patag na face.
- **New part file**: PartCraft part na ang isang feature ay ang outcome bilang inangkat na solid. Buksan ito para mag-sketch dito, maghiwa ng butas o suriin sa Simulation. Faceted ito (libo-libong patag na face), hindi isang editable na hugis.
- **Add to this part** ay idinudugtong ang outcome sa piyesa; aktibo lamang ito para sa box design space (kapag ang piyesa mismo ang space, nasa loob ng piyesa ang outcome).

Hindi pa nagagawa sa bersyong ito ang **New part file** at **Add to this part**: nagiging inangkat na solid ang outcome, na nangangailangan ng exact kernel. Gumagana ang mga download na STL at STEP (faceted).

## Gaano ito katiyak

- Pinapaganda nito ang **stiffness** para sa ibinigay na volume. Walang stress limit at walang manufacturing rule (overhang, direksyon ng milling, pinakamaliit na sukat ng butas) pa: suriin ang napiling outcome sa [Simulation](topic:simulation) at ayusin.
- Ang mga manipis na member na isa o dalawang cube ang lapad ay tinatayang: gumamit ng mas maliit na element size para sa payat na piyesa.
- Ang paraan ay SIMP na may density filter, threshold projection at optimality-criteria update; ang iniulat na stress at deflection ay sa outcome bilang cube, na tapat ngunit magaspang sa matutulis na sulok.

## Kaugnay

- [Suriin ang stress at deflection (Simulation)](topic:simulation)
- [I-export para sa pag-print, STEP at DXF](topic:export-files)
- [Ano ang hindi pa nagagawa](topic:not-built-yet)
