---
title: Mga equation sa dalawang direksyon
summary: Magbago ng parameter at susunod ang piyesa; mag-type ng bagong sukat sa driven number at kukuwentahin ng PartCraft ang parameter sa likod nito, magtatanong kung alin kapag marami ang maaaring magbago.
keywords: equations, solve backward, driven dimension, two way, reverse, goal seek, parameters, linked values, which parameter, equation, dalawang direksyon, driven dimension
from: 82dc0269
---

Ang equation gaya ng **Extrude1 depth = thick + extra** ay gumagana sa dalawang direksyon.

## Pasulong: baguhin ang parameter

Sa tab na {{ui:Parameters}}, baguhin ang `thick` mula 20 patungong 30. Magiging 30 + extra ang depth ng Extrude1, at muling bubuuin ang piyesa.

## Paatras: baguhin ang driven number

1. I-click ang "Extrude1" sa history. Ang **Depth (mm)** box nito ay nagpapakita ng **ƒ**: may equation na nagtutulak dito.
2. I-type ang sukat na gusto mo, halimbawa `40`, at pindutin ang {{key:Enter}}.

Kinukuwenta ng PartCraft ang parameter sa likod ng equation, sa dami ng hakbang na kailangan (`depth = hub_h`, `hub_h = disc_t + 50`: ang pag-type ng taas ay nagbabago sa `disc_t`). Sinasabi ng status bar kung ano ang nagbago, halimbawa na ang extra ay nagbago mula 5 patungong 15.

Kapag dalawa o higit pang parameter ang nagtutulak sa numero, may kahon na nagtatanong ng **Aling parameter ang dapat magbago?** at inililista ang mga ito. I-click ang isa; mananatili ang halaga ng iba. Walang nababago ang {{ui:Cancel}}.

Ganoon din ang gumagana sa sketch: i-double-click ang driven dimension, i-type ang halaga, at pindutin ang {{key:Enter}}. Gumagana rin ito sa **Halaga** column ng parameter table, para sa parameter na mismong expression.

## Kapag hindi ito magagawa

- Ang numerong dapat buo (bilang ng pattern) o dapat nasa saklaw (anggulong hanggang 360°) ay tinatanggihan bago may magbago.
- Ang equation na mga nakapirming numero lang (`=40`) ay walang parameter na mababago: papalitan ng numerong i-type mo ito.
- Kung walang halaga ng parameter na magbibigay ng sukat na tinype mo, sinasabi ito ng status bar at walang nagbabago.
- Ang sketch na hindi malulutas sa bagong halaga ay nananatili sa dati nitong mga halaga, at pinangalanan ito ng status bar.

Bawat pagbabago, sa alinmang direksyon, ay isang hakbang para sa {{key:Mod+Z}} at {{key:Mod+Y}}.
