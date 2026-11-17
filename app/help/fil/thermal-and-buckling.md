---
title: Init, thermal stress at buckling
summary: Hanapin ang mga temperatura sa piyesa mula sa nakapirming temperatura, heat flux, heat power, convection at radiation (steady o sa paglipas ng panahon), i-load ang stress study na may pagtaas ng temperatura, at hanapin ang load kung saan yumuyuko ang payat na piyesa, kasama ang kaya at hindi kayang sabihin ng bawat paraan.
keywords: thermal, paglipat ng init, init, temperatura, conduction, convection, film coefficient, radiation, emissivity, heat flux, heat power, heat generation, heat sink, transient, oras, paglamig, pag-init, Crank-Nicolson, implicit Euler, heat balance, thermal stress, thermal stress over time, transient thermal stress, quench, thermal shock, stress history, worst time, thermal expansion, expansion coefficient, buckling, Euler buckling, load factor, critical load, column, slender, eigenvalue
from: 1a1b7545
---

Nakatira ang mga study na ito sa Simulation workspace, katabi ng static stress at natural frequencies (tingnan ang [Check stress and deflection](topic:simulation)). Piliin ang mga ito sa **Type** box ng panel. Gumagamit sila ng parehong mesh ng maliliit na cube at parehong listahan ng material; bawat library material ay may thermal conductivity, specific heat at expansion coefficient (karaniwang handbook values, nakikita sa ilalim ng **Properties**).

## Thermal: saan napupunta ang init?

1. Piliin ang **Thermal (heat transfer)** bilang **Type**.
2. Magdagdag ng thermal condition mula sa listahang **Add** ng panel, saka i-click ang mga face nito (gaya ng sa supports at loads):
   - **Fixed temperature**: pinananatili ang face sa isang temperatura, sa °C.
   - **Heat flux**: W/m² na dumadaloy papasok sa face (negatibo ang palabas). Sa tunay na lawak ng face ito gumagana, kahit saan gumawa ng hagdan ang mga cube.
   - **Heat power**: kabuuan sa watts, ipinamamahagi sa mga napiling face ayon sa lawak. Gamitin ito para sa heater o chip na may kilalang power.
   - **Convection**: ang hangin o likido sa isang temperatura ang nagdadala ng init palayo sa h W/(m²·K). Karaniwang h: tahimik na hangin 5–10, fan 25–100, tubig 500–10,000. Hindi kinakalkula ng PartCraft ang h: walang fluid flow sa study na ito.
   - **Radiation**: naglalabas ang face ng init sa paligid na may temperatura, na may emissivity mula 0 hanggang 1. **Linearised** ito (isinusulat ang radiation bilang coefficient na nakadepende sa temperatura at muling nilulutas hanggang tumatag) at sa paligid lang ito pumupunta: hindi nagpapalitan ng init ang mga face sa isa't isa.
3. Ang **Heat generation** (W/m³) ay nagpapainit sa buong piyesa mula sa loob, halimbawa sa resistive na piyesa.
4. Pindutin ang **Solve**. Kinukulayan ang piyesa ayon sa temperatura; piliin ang **Heat flux** sa **Show** para makita kung saan dumadaloy ang init. Ituro ang piyesa para mabasa ang dalawa.

Kailangan ng steady na daloy ng init ng pupuntahan: kahit isang fixed temperature, convection o radiation. Ang piyesang tumatanggap lang ng init ay walang steady state; gawin itong transient.

Ipinapakita ng talahanayan ang pinakamababa at pinakamataas na temperatura at kung nasaan ang mga ito, ang pinakamalaking heat flux, at ang **heat balance**: ang init na pumapasok o lumalabas sa bawat condition (binibilang ng fixed temperature ang kailangan nitong ibigay o sipsipin), ang nabuong init, ang kabuuang pumasok at lumabas, at ang **imbalance**. Dapat maliit na bahagi lang ng pumasok na init ang imbalance; kapag malaki ito, hindi dapat pagkatiwalaan ang resulta.

### Sa paglipas ng panahon (transient)

Lagyan ng tsek ang **Transient** at magbigay ng **Start temperature** (doon nagsisimula ang buong piyesa), isang **Time span** at bilang ng **Time steps**. Matatag ang **Implicit Euler**; mas tumpak ang **Crank–Nicolson** sa parehong steps pero maaaring mag-ripple pagkatapos ng biglaang pagbabago. Pagkatapos mag-solve, i-drag ang **Time** slider para makita ang temperatura sa bawat sandali (nananatiling pareho ang color scale sa bawat sandali). Kasama na sa heat balance ang init na naiimbak.

## Thermal stress: ano ang ginagawa ng pagbabago ng temperatura sa piyesa?

Sa study na **Static stress** (o **Buckling**), itakda ang **Thermal load**:

- **Uniform temperature change**: uminit (o lumamig, kapag negatibo ang numero) ang buong piyesa ng ganoong bilang ng kelvin.
- **Temperatures from thermal conditions**: magdagdag ng thermal condition sa parehong study; unang nilulutas ang steady na temperatura sa parehong mesh, saka lumalaki ang piyesa ayon sa α·(T − ang **stress-free temperature**).
- **Temperatures over time (transient run)**: magdagdag ng thermal condition, saka magbigay ng **Start temperature**, **Time span**, **Time steps** at **Time stepping** gaya ng transient thermal study. Nilulutas ang temperatura sa paglipas ng panahon sa parehong mesh (cubes o tetrahedra), at ang static solve sa temperatura ng bawat sandali ang nagbibigay ng stress ng sandaling iyon. **Stress at**:
  - **The worst time** (ang simula): ang **Stress solves** ay naglalagay ng mga sandaling pantay ang agwat sa buong run, kasama ang simula (21 maliban kung babaguhin mo, pinakamarami ang 51). Nagbubukas ang resulta sa sandaling may pinakamalaking von Mises stress; pinangalanan ito ng talahanayan, ipinapakita ng maliit na chart ang peak stress laban sa oras, at ipinapakita ng **Time** slider ang stress sa bawat sandaling nilutas (nananatili ang color scale ng pinakamasamang sandali).
  - **One chosen time**: isang sandali, ang time step na pinakamalapit sa **Time (s)** na ibibigay mo. Laging pumipili ang buckling study ng isang sandali (ang dulo ng run maliban kung magtakda ka ng isa).

Ang piyesang pinatigas (nilubog mula sa mainit patungong malamig) o biglang pinainit ay pinakamaraming ma-stress habang pinakamalaki ang pagkakaiba ng loob at ibabaw: kadalasan agad sa simula. Ang temperaturang hawak ay umiiral mula sa unang sandali, bilang biglaang pagbabago, kaya nakadepende ang stress sa pinakasimula sa laki ng element (ilang element lang ang nakakakita ng pagbabago). Basahin ito bilang "napakataas", at tingnan ang susunod na sandali sa slider para sa mga value na kayang ipakita ng mesh. Quasi-static ang stress: walang inertia, walang vibration mula sa biglaang pagbabago.

Ang piyesang malayang lumalaki ay walang thermal stress: hawakan ito nang sapat lang para hindi gumalaw (halimbawa tatlong frictionless face sa tamang anggulo). Kapag nakakulong sa pagitan ng dalawang pader, napipiga ito: ang steel bar na pinainit ng 50 K sa pagitan ng rigid walls ay may humigit-kumulang 117 MPa. Nagbabalanse ang mga thermal load sa sarili, kaya ang mga reaksyon ay nagbabalanse pa rin lang sa mga mekanikal na load.

## Buckling: kailan sumusuko ang payat na piyesa?

1. Piliin ang **Buckling (linear)** bilang **Type**, at magdagdag ng supports at loads gaya ng sa static study.
2. Itakda ang **Load factors to find** (ilang buckling mode).
3. Pindutin ang **Solve**. May **load factor** ang bawat mode: ang multiple ng iyong mga load kung saan yumuyuko ang perpektong piyesa. Ang load factor na 3 ay nangangahulugang tatlong beses ng iyong mga load; **ang load factor na mas mababa sa 1 ay nangangahulugang yumuyuko ito sa mga load na inilapat mo**. Ibinibigay din ng talahanayan ang kabuuang load sa bawat factor. Ipinapakita ng mode shape kung paano ito yumuyuko (walang kahulugan ang laki nito).

**Labis na tinatantiya ng linear buckling ang totoong buckling load.** Ipinapalagay nitong perpekto ang piyesa: perpektong tuwid, walang residual stress, at elastic. May maliliit na imperfection ang totoong piyesa at maaaring mag-yield muna, at ang thin-walled shells ay maaaring yumuko sa bahagi lang ng linear na halaga. Gumamit ng malaking margin, at ituring na babala ang load factor na malapit o mas mababa sa 3 para sa manipis na shell.

## Gaano ito kapagkakatiwalaan

Sinusuri ng PartCraft ang mga solver na ito laban sa mga manwal na formula: isang bar sa pagitan ng dalawang temperatura (eksakto), isang cooling fin (sa loob ng 0.3 K), isang slab na nagpapainit sa sarili (eksakto), isang cube na lumalamig sa paglipas ng panahon (sa loob ng 0.1 % gamit ang Crank–Nicolson), isang bar na biglang pinainit sa isang dulo, isang malayang bar na pinainit (walang stress, ΔL = αLΔT), isang bar na nakakulong sa pagitan ng pader (σ = −EαΔT), isang pinatigas na plate sa paglipas ng panahon laban sa klasikong series solution (sa loob ng 1 % sa cubes, 2.1 % sa tetrahedra sa gitna ng plate; 0.5 % sa ibabaw nito), ang huling sandali ng mahabang run laban sa steady thermal stress (magkapareho hanggang isang milyonesimo), at Euler columns (sa loob ng 1 % fixed–free, 1.5 % pinned–pinned). Tandaan:

- **Pare-parehong halaga ng material.** Ang conductivity, specific heat at expansion ay hindi nagbabago sa temperatura dito; sa ilang daang degree, maaari silang magbago ng 10–30 %. Hindi rin nagbabago ang stiffness.
- **Quasi-static at elastic ang stress sa paglipas ng panahon**: bawat sandali ay static solve (walang inertia), at walang yielding, kaya ang quench na magpapa-yield sa ibabaw ay magpapakita ng stress na higit sa yield.
- **Ang convection coefficients ay input mo**, hindi kinakalkula mula sa daloy ng hangin o tubig.
- **Walang contact resistance**: iisang solid ang piyesa.
- **Linear buckling lang**: walang imperfection, walang yielding, walang kilos pagkatapos yumuko.
- Ang hagdan ng cube at matatalim na loob na sulok ay nakakaapekto sa thermal stress gaya ng sa ibang stress (tingnan ang [Check stress and deflection](topic:simulation)).
- Lab build ito: suriin sa ibang paraan ang mga piyesang mahalaga.

## Kaugnay

- [Check stress and deflection (Simulation)](topic:simulation)
- [What is not built yet](topic:not-built-yet)
