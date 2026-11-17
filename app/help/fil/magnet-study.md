---
title: Magnet study ng isang sketch
summary: Gawing flat na magnetic model ang mga closed profile ng iyong mga sketch (iron, magnet, coil), tingnan ang field, at basahin ang force at torque sa isang body.
keywords: magnet, magnetic, magnetostatic, field, flux density, force, torque, coil, yoke, iron, B-H curve, permanent magnet, actuator, motor, solenoid, maxwell
from: 604efc3b
---

Gamitin ang {{ui:Higit pa}} sa Features toolbar › {{ui:Magnet study ng mga sketch…}} sa piyesang may sketch. Ang bawat closed shape sa mga sketch na lalagyan mo ng tsek ay isang region ng flat na model; kinukuwenta ng study ang magnetic field B, ang force at ang torque sa body na pipiliin mo.

## Mga hakbang

1. Iguhit ang mga body bilang closed shape sa mga sketch: isang iron yoke, isang magnet, isang coil. Ang mga body na magkadikit ay nagbabahagi ng edge, kaya ilagay ang mga ito sa magkakaibang sketch; ang mga body na magkahiwalay, o nasa loob ng isa't isa (isang window sa yoke), ay maaaring nasa iisang sketch. Panatilihin ang mga sketch sa iisang plane.
2. Buksan ang study at lagyan ng tsek ang mga sketch na gagamitin. Bawat closed profile ay nakakakuha ng row, may numero. Sabihin kung ano ito: {{ui:Hangin}}, {{ui:Bakal}} (isang permeability, o B–H curve na i-type bilang pares ng B sa tesla at H sa A/m), isang {{ui:Permanent magnet}} (Br sa tesla, direksyon nito bilang anggulo mula sa x axis ng sketch, at recoil permeability nito), o isang {{ui:Coil}} (ang kabuuang current sa profile nito, turns beses amperes; ang sign ang nagsasabi kung aling direksyon ito tumatakbo).
3. Lagyan ng tsek ang {{ui:Puwersa at torque sa katawang ito}} para sa mga body na gusto mo. Ibigay ang lalim ng piyesa palabas ng sketch.
4. Piliin ang mesh at ang hangin sa paligid ng model, saka {{ui:I-run}}.

## Ang makikita mo

- Ang flux density |B| sa ibabaw ng model, madilim na asul ang mababa hanggang pula ang mataas, may numero ang mga profile.
- Ang pinakamalakas na field at kung saan ito, ang bilang ng triangles, at para sa bawat body na nilagyan mo ng tsek, ang force sa x at y at ang torque sa gitna nito, para sa lalim na ibinigay mo.
- {{ui:I-save ang resulta (CSV)}} ay sumusulat ng mga numero.

## Magandang malaman

- Flat at steady na model ito: lahat ay per metro ng lalim, walang eddy current at walang hysteresis, at ang magnet ay isang tuwid na recoil line (hindi ito ma-demagnetise).
- Nasa loob ng kahon ng hangin ang model na ang gilid nito ay pader. Ikumpara ang dalawang laki ng air box, at ang Normal at Fine na mesh: ang force na kinuha mula sa field sa paligid ng body ay kasing-tumpak lamang ng mesh doon.
- Ang iron na permeability lamang ang mayroon ay hindi kailanman nasasaturate. Kapag lumampas sa 2 T ang field, maglalagay ang study ng ⚠ sa listahan ng Problema: bigyan ang iron ng B–H curve. Ang mga numero sa bagong row ay halimbawa lamang (iron μr 2000, magnet na 1.2 T), hindi data sheet ng materyal.
- Kailangan ng body ng espasyo sa paligid nito para makuha ang force: kung masyadong malapit ang ibang body, sasabihin ito ng study.
- Tulong sa drafting ito, hindi engineering approval.

## Susunod

- [Magnetic field sa 2-D (tutorial)](topic:magnetic-fields-2d)
