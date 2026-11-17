---
title: Ang analysis library
summary: Ang library ng mga nababasang analysis script sa Script workspace: ano ang nasa bawat grupo, pagbukas ng function nang read-only, ang header nito na may method, references at check, paggawa ng sarili mong kopya, at kung paano pumapalit ang kopya sa library function.
keywords: library, craftlib, analysis, electromagnet, static, modal, thermal, topology optimization, top88, SIMP, electromagnetics, electrostatics, magnetostatics, fluid, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, mga reference, check, verification, kopya, shadow
from: bf993859
---

Ang analysis library ay isang set ng mga script, bawat isa ay function na mababasa mula sa itaas hanggang sa ibaba: kung paano binubuo ang stiffness matrix, saan inilalagay ang boundary condition, aling solver ang tumatakbo, kung paano kinukwenta ang mga resulta. Walang nakatago sa loob ng black box; tanging ang mabibilis na inner loop (element matrix, sparse solver, meshing) ang built-in.

## Magsimula sa isang halimbawa

Ang grupong **Examples** ay may limang maikling script na gumagamit ng library mula simula hanggang dulo. I-click ang isa, pindutin ang {{ui:Open (read-only)}}, saka ang {{key:F5}}: bawat isa ay nililinis ang view, nagpapakita ng resulta sa canvas at ng plot sa mga sub-display.

| Halimbawa | Ang ipinapakita nito |
|---|---|
| Cantilever stress | Isang steel bar na 100 × 10 × 10 mm sa ilalim ng 100 N tip load: von Mises stress sa deformed bar, at ang tip deflection laban sa beam theory sa apat na element size (naka-plot) |
| MBB beam topology | Ang klasikong 60 × 20 topology optimization: ang pagbuo ng disenyo, ang pagbaba ng compliance, ang huling layout (94 na iterasyon, compliance 203.19) |
| Capacitor field | Dalawang plato na 4 mm ang lapad, 1 mm ang agwat: potential at field, ang capacitance na may fringing laban sa ideal na value at sa formula ni Palmer |
| Channel flow | Lattice Boltzmann flow na dumadaan sa isang poste sa channel: ang velocity field at ang convergence history |
| Electromagnet | Isang C-shaped na iron core na may air gap at coil: ang flux density, ang field sa gap laban sa magnetic-circuit formula, ang inductance at ang pull sa kabila ng gap. Tinalakay sa [Magnetic fields in 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Ang parehong core na may permanent magnet sa halip na coil: ang working point ng magnet, ang field sa gap laban sa magnetic circuit, kung gaano karaming flux ang tumatagas, ang pull. Sa [Magnetic fields in 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Mga grupo

| Grupo | Mga function | Ano ang ginagawa nila |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Mga box at silindro bilang hexahedra, cube o tetrahedra; cube o tetrahedra ng anumang model (ang part, isang body, isang loaded STL); element volume at kalidad; pagpili ng mga node sa isang plane o face |
| Static stress | `static_voxel`, `static_tet` | Linear static stress sa mga cube o sa 10-node tetrahedra: displacement, stress, von Mises, reaction |
| Frames | `frame3d` | 3D frame ng mga beam, column at brace sa pamamagitan ng direct stiffness method: end release, support at spring, load sa kahabaan ng member; displacement, reaction, member end force. Ang {{ui:Export as CraftScript}} ng DetailCraft at BimCraft ay nagsusulat ng buong model para dito. Isang tulong sa analysis, hindi code check |
| Vibration | `modal_tet` | Natural frequency at mode shape |
| Heat | `heat_steady`, `heat_transient`, `heat_system` | Steady at transient na conduction na may nakapirming temperatura, heat input, generation, flux at convection |
| Topology optimization | `top88`, `top99`, `topopt3d` | Ang nai-publish na 88- at 99-line na 2-D code, at ang parehong paraan sa 3-D sa mga cube |
| Electromagnetics | `poisson2d`, `magnetostatic2d` | 2-D electrostatics (potential, field, capacitance, charge) at magnetostatics (vector potential, flux density, permanent magnet) |
| Fluid flow | `lbm2d`, `lbm3d` | Lattice Boltzmann flow: ang 2-D ay nakasulat nang buo sa script, ang 3-D ay gumagamit ng sariling flow kernel ng PartCraft |

Ibinibigay ng header ng bawat function ang eksaktong argumento nito. Ang units ay ang sa mga study ng PartCraft maliban kung sabihin ng header: millimetres, newtons, megapascals, tonnes per cubic millimetre para sa density, watts at kelvin para sa heat. Ang electromagnetic at lattice Boltzmann function ay gumagana sa anumang pare-parehong units; sinasabi ng kanilang header kung alin.

## Paano sinusuri ang library

Ang header ng bawat function ay nagtatapos sa isang **check**: maliit na kaso na may kilalang sagot. Tinatakbo ng mga test ng PartCraft ang lahat ng ito, at kung may sariling study ang PartCraft para sa parehong gawain, ikinukumpara ang sagot ng script sa study na iyon sa parehong mesh:

- ang tip deflection ng cantilever laban sa beam theory (sa loob ng 0.2 % gamit ang cube, 0.05 % gamit ang tetrahedra), at laban sa mga solver ng **Simulation** workspace sa parehong mesh (magkapareho hanggang maraming digit);
- ang unang frequency ng cantilever laban sa beam theory (0.24 % na mas mababa, gaya ng inaasahan para sa maikling beam) at laban sa modal solver ng **Simulation**;
- heat: isang pinainit na plane wall nang eksakto, isang maliit na body na lumalamig ayon sa lumped-capacity formula, ang temperatura ng slab na nawawala ayon sa teorya;
- topology optimization: ang `top88` ay nagre-reproduce ng 94 na iterasyon at compliance 203.1925 ng paper (at 218.8032 gamit ang density filter); ang `topopt3d` ay nagtatapos sa parehong compliance ng **Generative** workspace na may parehong settings;
- ang capacitance ng isang capacitor at ang field ng isang mahabang solenoid laban sa mga halagang nasa textbook, ang gap field ng electromagnet laban sa magnetic-circuit formula, at ang permanent magnet laban sa bilog na magnet sa hangin at sa magnet na nakasara ng iron keeper;
- channel flow laban sa eksaktong parabolic profile.

## Basahin ang isang function

1. Buksan ang **Library** tab ng script panel.
2. I-click ang isang function. Ipinapakita ng header nito: ano ang kinukwenta nito, ang method, units, assumptions at limit, ang **references** (libro o paper, na may equation number) at isang **check**: maliit na kaso na may kilalang sagot na tinatakbo ng sariling test ng PartCraft.
3. Ang {{ui:Open (read-only)}} ay nagbubukas ng buong script sa tab na may dashed border. Maaari mo itong patakbuhin, pumili at magpatakbo ng mga bahagi nito, pero hindi mo ito mababago.

## Baguhin ang isa

Pindutin ang {{ui:Make a copy}} (o **Gumawa ng kopya para i-edit** sa itaas ng read-only tab). Ang kopya ay script sa iyong part na may parehong pangalan, kaya sine-save ito kasama ng part, at **bawat tawag sa function na iyon ay gumagamit na ngayon ng iyong kopya**; sinasabi ito ng editor sa itaas ng script. Palitan ang pangalan ng kopya para mapanatili ang dalawa.

## Gamitin ang isa

Tawagin ang isang library function mula sa anumang script sa pamamagitan ng pangalan nito, gaya ng built-in function:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Ibinabalik ang mga resulta bilang value sa workspace; ang mga plot at field na ipinapakita nito ay lumalabas sa view at sa mga sub-display.

Ang isang static analysis ng bukas na part, halimbawa, ay ilang linya lang:

```
v = voxel_mesh(part(), 2);                   % 2 mm na cube
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hawakan ang ibaba
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N pababa sa itaas
r = static_voxel(v, 210000, 0.3, bc);       % bakal
```

Ang `r` ay naglalaman ng mga displacement, stress at reaction; ang von Mises stress ay iginuguhit sa deformed na part. Para sa mga curved na part, gamitin ang `tet_mesh` at `static_tet`, na maaari ring mag-load at mag-hold ng buong face (`face_nodes`).

:::note
Ang mga function ng library ay nakasulat sa CraftScript, at tinatawag ng isang Lua script ang mga ito sa pamamagitan ng `cs` tulad ng mga built-in function: `cs.static_tet(t, 200000, 0.3, bc)` (tingnan ang [Mga script sa Lua](topic:craftscript-lua)). Bawat function ay nilulutas ang isang material at isang load case; nakalista sa mga header ang iba pang hindi saklaw.
:::
