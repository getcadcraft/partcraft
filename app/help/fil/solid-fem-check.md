---
title: Solid FEM: pagsusuri ng stress ng isang piyesa
summary: I-on ang Solid FEM add-on, i-mesh ang piyesa, pumili ng fixed face at load sa 3D view, i-solve, at basahin ang displacement at von Mises stress sa model.
keywords: solid fem, finite element, fea, stress, von mises, displacement, fixed face, load, presyon, grabidad, natural frequency, mode shape, mesh, add-on
from: 8b7e6ba2
---

## Ang gagawin mo

Suriin ang isang solid na piyesa sa ilalim ng load: kung saan ito gumagalaw at kung saan pinakamataas ang stress. Linear at elastic ang study, kaya pantulong ito sa pagsusuri; sinusuri ng iyong engineer ang mga resulta.

## Mga hakbang

1. Piliin ang {{ui:Mga setting}} › {{ui:Mga Add-on}} at i-on ang Solid FEM (naka-off ito hanggang gawin mo iyon). Buksan ang Solid FEM tab sa right panel.
2. Sa ilalim ng {{ui:Materyal}}, pumili ng isa, o {{ui:Custom}} at i-type ang Poisson ratio, density at yield stress.
3. Pindutin ang {{ui:Idagdag ang fixed faces}}, i-click ang mga face na nakahawak sa 3D view, tapos pindutin ang {{ui:Tapos na ang pagpili}}.
4. Magdagdag ng load gamit ang {{ui:Idagdag ang force}}, {{ui:Idagdag ang pressure}} o {{ui:Idagdag ang gravity}} at piliin ang mga face nito sa parehong paraan.
5. Pindutin ang {{ui:I-mesh ang part}}, tapos ang {{ui:I-solve}}. Piliin muna ang {{ui:Natural frequencies}} sa ilalim ng {{ui:Study}} kung gusto mo ng frequencies.
6. Basahin ang {{ui:Mga resulta}} at {{ui:Mga babala}}, tapos pindutin ang {{ui:Ipakita sa model}} para iguhit ang von Mises stress, displacement o mode shape; inaalis ito ng {{ui:Alisin ang plot}}.

## Mga tala

- Nilulutas ng pahina ang hanggang sa nakapirming bilang ng element; sinasabi ng status line kapag masyadong pino ang laki ng element mo.
- Tumataas ang stress sa fixed face, load point at matutulis na sulok habang pinipino ang mesh. Pinuhin at ikumpara muna bago umasa sa peak.
- Isang undo step ang bawat pagbabago, at naka-save ang mga setting sa part file.
- Para sa yielding at contact study, tingnan ang [Suriin ang stress at deflection](topic:simulation).
