---
title: Simulation ng daloy ng fluid (Flow study)
summary: Daloy sa mga channel sa loob ng piyesa o sa paligid nito sa loob ng box: inlet, outlet, hangin, tubig o sarili mong fluid, pagkatapos ang bilis at presyon sa isang movable cut plane, streamlines, presyon sa surface, pressure drop, mass balance, drag at lift, kasama ang kaya at hindi kayang sabihin ng laminar method.
keywords: daloy, CFD, fluid, computational fluid dynamics, flow simulation, hangin, tubig, viscosity, density, Reynolds number, laminar, turbulent, pressure drop, head loss, inlet, outlet, takip, cap, velocity, flow rate, volume flow, litro kada minuto, static pressure, streamlines, cut plane, section plane, drag, lift, drag coefficient, lift coefficient, frontal area, external flow, internal flow, tubo, channel, manifold, nozzle, lattice Boltzmann, residual, convergence
from: 7dc75f29
---

Kinukuwenta ng **Flow** study kung paano gumagalaw ang isang fluid sa mga channel sa loob ng piyesa mo (**internal**) o sa paligid nito (**external**). Bilang default, ito ay **laminar, incompressible, isothermal at Newtonian**: maayos na daloy ng fluid na nananatiling pareho ang density at viscosity, walang init, walang turbulence at walang gravity. May kasama ring **experimental** na turbulent model, para sa qualitative na pattern lamang (tingnan sa ibaba). Gumagana ito sa mga pinangalanang face na ibinibigay ng mesh kernel sa piyesa (tingnan ang [The mesh kernel](topic:solid-kernels)).

Piliin ang **Simulation** sa kahon na **Workspace**, pindutin ang **New study** kung wala pang study, at itakda ang **Type** sa **Flow (CFD)**. Ang **Flow model** ay **Laminar** (default) o **Turbulent (Spalart–Allmaras, experimental)**: tingnan ang **Turbulent flow (experimental)** sa ibaba. Nananatili ang mga structural setting ng study, kaya puwede kang bumalik. Naka-save sa part file ang mga flow setting at maaaring i-undo ang bawat pagbabago.

## Pumili ng fluid at mga cell

- **Fluid**: hangin o tubig sa 20 °C, o **Custom** gamit ang sarili mong density (kg/m³) at dynamic viscosity (Pa·s). Ginagamit ng hangin ang ideal gas law at Sutherland's law (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); ginagamit ng tubig ang IAPWS values (998.21 kg/m³, 1.0016 mPa·s).
- **Cell size**: pinupuno ng pantay na cube ang fluid space. Iwanang blangko para sa awtomatikong laki; ipinapakita ng panel ang grid. Dapat **hindi bababa sa 8 hanggang 10 cell ang lapad** ng bawat opening at channel para makakuha ng magagamit na numero; mas tumpak at mas mabagal ang mas maliliit na cell (kapag kalahati ang laki, mga 16 na beses ang trabaho).
- **Walls**: ang **Interpolated** ay sumusunod sa mga kurbadong wall sa pagitan ng mga cell (default); ang **Bounce-back** ay tinuturing na hagdan-hagdang cube ang mga wall.

## Daloy sa loob ng piyesa

Dapat sarado ang fluid space. Magdagdag ng **Inlet** at **Outlet** sa panel, pagkatapos i-click ang kanilang mga face sa view:

1. **Ang patag na face sa paligid ng opening**: ang gilid sa dulo ng tubo, o face ng port. Sinasara ng PartCraft ang butas ng opening doon gamit ang takip. Bawat butas sa face na iyon ay pag-aari ng opening na iyon, kaya kapag may inlet at outlet na nagbubukas sa parehong face, mag-model ng manipis na cap sa isa sa mga ito.
2. **Ang loob na face ng cap**: gaya ng ibang CAD tool, mag-model ng manipis na plato (isang extrude) sa ibabaw ng opening at piliin ang face nitong nakadikit sa fluid.

Para sa inlet, itakda ang **velocity** (m/s, pantay sa buong opening, papasok sa piyesa) o ang **volume flow** (L/min). Para sa outlet, itakda ang **static pressure** (Pa, gauge). Kung nakabukas ang isang opening, o mas manipis sa isang cell ang isang wall, magdurugtong ang loob sa labas at hihinto ang solve na may mensaheng "Walang saradong fluid space".

## Daloy sa paligid ng piyesa

Itakda ang **Flow** sa **External**, ang **Speed**, ang direksyon kung saan dumadaloy ito, at kung gaano kalayo aabot ang box pataas ng agos, pababa ng agos at sa mga gilid (blangko: 1, 3 at 1 beses ang pinakamalaking sukat ng piyesa). Ang face ng box na pinapasukan ng daloy ay inflow, ang face na nilalabasan nito ay outflow sa 0 Pa, at dumudulas sa tabi ng daloy ang mga face. Kapag masyadong maliit ang box, napipiga ang daloy sa paligid ng piyesa at tumataas ang drag. Ang **Reference area** ang area na ginagamit ng drag at lift coefficients (blangko: ang frontal area ng piyesa na nakikita sa direksyon ng daloy); sinusukat ang lift sa +Y maliban kung pipili ka ng ibang direksyon.

## I-solve at basahin ang mga resulta

Pindutin ang **Solve**. Tumatakbo ang solve sa background, kasama ang bilang ng step, ang residual at isang residual plot; ang **Stop** ang nagtatapos dito. Humihinto ito kapag mas mababa sa target ang residual (gaano pa nagbabago ang velocity field bawat step) at tumatag na ang pressure drop o drag. Kung maabot muna nito ang limitasyon ng step, sasabihin ng panel sa pula ang **Not converged**: ang mga numero ay huling estado, hindi steady na sagot.

- **Cut plane**: speed o static pressure sa isang eroplano sa modelo; piliin ang normal nito (X, Y o Z) at i-drag ang slider para ilipat ito. I-hover ito para mabasa ang mga halaga.
- **Streamlines**: mula sa mga inlet (internal) o mula sa rake sa kabilang dulo ng inflow ng box, sa cut plane (external).
- **Part**: solid, see-through (para makita ang plane sa loob), surface pressure, o nakatago.
- **Table**: Reynolds number, pressure drop (karaniwang static pressure sa mga inlet na minus sa mga outlet), daloy at karaniwang presyon ng bawat opening, puwersa sa piyesa, drag at lift kasama ang kanilang coefficients at reference area (external), mass balance (inflow laban sa outflow), ang mesh at ang solver.

## Turbulent flow (experimental)

Nilulutas ng **Flow model › Turbulent (Spalart–Allmaras, experimental)** ang time-averaged na turbulent flow (steady RANS): ang Spalart–Allmaras model ay nagbibigay ng eddy viscosity sa bawat cell, at ang mga cell na katabi ng wall ay gumagamit ng batas ng Spalding para sa wall sa halip na lutasin ang manipis na layer doon. Ganap itong turbulent sa lahat ng dako (walang laminar na rehiyon, walang transition).

**Hindi ito pumasa sa mga accuracy check nito.** Sinasabi ito ng panel, ng mga resulta at ng table sa bawat turbulent study, at hindi maisasara ang babala. Gamitin ito para sa **qualitative na flow pattern**, kung saan humihiwalay, umiikot muli o bumibilis ang daloy, **hindi para sa design numbers**.

| Tseke | Sanggunian | Resulta |
|---|---|---|
| Friction sa patag na channel, unang cell sa y⁺ 49 / 98 | Dean's correlation | +3.3 % / +4.7 % |
| Channel na may nalutas na wall (y⁺ ≈ 3), Re_τ 180: bulk velocity | Moser, Kim & Mansour DNS | −1 % |
| Patag na channel, y⁺ 7–15 o 190–380 | Dean's correlation | +9 hanggang +22 % |
| Friction sa tubo sa mga cube cell, ganap na nabuo, 10–30 cell ang lapad | Colebrook | 30 hanggang 34 % na masyadong mataas |
| Muling pagdikit sa likod ng backward-facing step, 6–14 cell sa bawat taas ng step | Driver & Seegmiller, 6.26 na taas ng step | 21 hanggang 39 % na masyadong maikli |

Bumubuti nang dahan-dahan ang mga resulta kapag mas pino ang mga cell. Pagkatapos ng solve, ipinapakita ng table ang **unang-cell y⁺** (min, mean at max sa mga wall cell) at nagbabala kapag nasa labas ng sinuring saklaw na 1 hanggang 400; layunin ang mga 30 hanggang 300. **Run time:** ang awtomatikong mga cell ay itinakda para sa ilang minuto sa isang laptop core sa pinakamarami (ipinapakita ng panel ang pinakamasamang kaso para sa grid at step limit; natatapos ang maliit na tubo sa wala pang 20 segundo). Ang paghahati ng laki ng cell sa kalahati ay nagkakahalaga ng mga 16 na beses na mas mahabang oras. Galing sa momentum balance sa mga opening o sa box ang mga puwersa sa piyesa.

**Ginagawa pa ito sa ngayon:** tumutugma na ngayon ang mga wall cell sa sarili nilang shear stress sa wall law, na nagpababa ng mga error sa tubo at step sa mga bilang sa itaas nang hindi binabago ang mga resulta ng patag na channel. Hindi ito sapat para sa design numbers. Ang susunod na hakbang ay mas pinong mga cell malapit sa mga wall.

## Ano ang kaya at hindi kayang sabihin nito

- **Ang laminar model** ay laminar lamang. Sa mga tubo, nagiging turbulent ang daloy kapag higit sa Reynolds number na mga 2,000 hanggang 4,000; sa likod ng blunt na katawan, nagsisimulang maglaglag ng vortex ang wake kapag higit sa mga 50. Nagbabala ang panel sa mga puntong ito. Minamaliit ng laminar na resulta para sa turbulent na daloy ang pressure drop at mali ang drag. Sinasaklaw ng experimental turbulent model (sa itaas) ang turbulent na daloy nang qualitative; hindi pa maaasahan ang mga numero nito.
- **Paraan:** ang lattice Boltzmann method (D3Q19, two-relaxation-time collision) na tumatakbo hanggang steady state. Bahagyang compressible ito sa loob; pinananatili ng PartCraft ang pagbabago ng density sa ilang porsyento. Kung masyadong mabilis ang daloy para sa mga cell, tumatangging magsimula ito at sinasabi kung gaano dapat kaliit ang mga cell.
- **Sinuri laban sa:** Hagen–Poiseuille flow sa tubong dumaraan sa piyesa (pressure gradient sa loob ng 1 % sa 20 cell ang lapad), ang lid-driven cavity ni Ghia et al. (sa loob ng 0.75 % ng bilis ng takip), at ang Schäfer–Turek cylinder benchmark (drag sa loob ng 1 % sa 10 cell bawat diameter).
- Hindi namomodelo: heat transfer, turbulence na may design accuracy (experimental ang turbulent model), free surface, cavitation, gravity, gumagalaw na piyesa, non-Newtonian na fluid, magaspang na wall. Lab build: suriin ang mahahalagang resulta sa ibang paraan.
