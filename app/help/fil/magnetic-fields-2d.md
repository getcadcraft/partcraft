---
title: Magnetic field sa 2-D (tutorial)
summary: Kuwentahin ang magnetic field ng electromagnet o permanent magnet gamit ang analysis library: patakbuhin ang mga halimbawa, basahin ang flux density, gap field, inductance at pull, baguhin ang disenyo, at gumawa ng sarili mong model ng coil, magnet at iron.
keywords: magnetic, magnetostatics, magnetic field, flux density, tesla, electromagnet, solenoid, coil, ampere turns, iron core, air gap, permeability, inductance, magnetic force, reluctance, magnetic circuit, vector potential, electromagnetics, finite element, fem, motor, actuator, transformer, magnetostatic2d, permanent magnet, neodymium, ndfeb, ferrite, remanence, working point, recoil, leakage, holding magnet
from: 215f6601
---

Kayang kuwentahin ng analysis library ng PartCraft ang magnetic field ng mga coil at iron sa 2-D: isang cross-section ng bagay na mahaba at pare-pareho ang hugis sa haba nito, gaya ng electromagnet, transformer core, busbar o cross-section ng motor. Pinapatakbo ng tutorial na ito ang electromagnet example ng library, binabasa ang sinasabi nito, binabago ito, ipinapakita kung paano i-model ang sarili mong hugis, at saka nagdaragdag ng permanent magnet.

Gumagamit ito ng Script workspace at ng [analysis library](topic:craftscript-library). Hindi mo kailangang malaman ang wikang CraftScript para masundan ito; sinasabi ng example kung ano ang ginagawa ng bawat linya.

## Ano ang minomodelo

Isang iron core na hugis-C, 100 × 80 mm sa labas at 20 mm ang kapal, na may 2 mm na air gap sa kanang binti nito. Isang coil na 100 turns na may dalang 10 A (1000 ampere-turns) ang nakapaikot sa kaliwang binti nito. Mahaba ang lahat palabas ng screen, kaya ang mga sagot ay **per metro ng lalim**: i-multiply sa tunay na lalim para sa tunay na magnet.

Kinukuwenta ng `magnetostatic2d` ng library ang magnetic vector potential sa grid ng 1 mm na square sa isang kahon ng hangin sa paligid ng magnet, saka kinukuwenta mula rito ang flux density **B** (sa tesla).

## Patakbuhin ang example

1. Piliin ang **Script** sa kahong **Workspace** sa kaliwa ng toolbar.
2. Buksan ang tab na **Library** ng script panel, saka **Examples** › **Electromagnet: field, gap, inductance**.
3. I-click ang {{ui:Buksan (read-only)}}, saka pindutin ang {{key:F5}}.

Sa loob ng isa o dalawang segundo, ipinapakita ng canvas ang flux density, at nagpi-print ang console ng:

```
B sa gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing at leakage)
inductance 0.1539 H kada metro ng lalim; ang circuit ay nagbibigay ng 0.1103 H/m, hindi kasama ang flux na lumulusot sa gap
stored energy 7.694 J/m; ang |B| ay umaabot sa 1.97 T sa loob ng mga sulok ng window (magsasaturate doon ang tunay na steel)
pull sa gap na humigit-kumulang 2343 N kada metro ng lalim (117.2 N para sa 50 mm na lalim)
```

Ang plot sa ibaba ng canvas ay ang vertical flux density B_y sa gitnang linya ng core, mula kaliwa pakanan: humigit-kumulang −0.55 T sa kaliwang binti (tumatakbo pababa ang flux doon), halos wala sa window, at +0.55 T sa kanang binti at sa kabila ng gap (bumabalik paakyat ang flux). Pareho ang flux na dumadaan sa iron at sa gap, kaya halos parehong halaga ang ipinapakita ng dalawang binti at ng gap.

## Basahin ang mga resulta

- **Ang field sa gap** ay 0.543 T. Itinuturing ng manu-manong kuwenta ang core bilang iisang magnetic circuit, B = μ0 N I / (g + l / μr), kung saan ang g ang gap, ang l ang haba ng daan sa iron, at ang μr ang relative permeability ng iron; ibinibigay nito ang 0.552 T. Mas mababa nang kaunti ang field kaysa sa manu-manong kuwenta dahil lumalabas ang flux sa paligid ng gap (fringing) at may ilang flux na dumadaan sa maikling daan sa window (leakage). Kapag mas maliit ang gap o mas pino ang grid, mas nagkakalapit ang dalawa.
- **Ang inductance** ng 100-turn na coil ay 0.154 H kada metro ng lalim, mula sa enerhiyang nakaimbak sa field. Mas maliit ang ibinibigay ng circuit formula (0.110 H/m) dahil binibilang lamang nito ang flux na dumadaan sa gap, hindi ang flux na lumulusot dito.
- **Ang pull** na nagsasara ng gap ay B² w / (2 μ0) para sa gap face na may lapad na w: humigit-kumulang 2300 N kada metro, o 117 N para sa magnet na 50 mm ang lalim.
- **Ang peak** na 1.97 T ay nasa loob ng mga sulok ng window, kung saan biglang umiikot ang flux. Itinuturing ng model ang iron bilang linear; ang tunay na electrical steel ay nagsasaturate sa humigit-kumulang 1.5 hanggang 2 T, kaya ituring ang mga halagang lampas doon bilang babala, hindi sagot.

:::note
Pinapatakbo ng sariling test ng library ang example na ito at sinusuri ang gap field laban sa magnetic-circuit formula sa bawat pagbabago sa PartCraft. Nasa header ng `magnetostatic2d` ang paraan, mga sanggunian nito at ang iba pang check nito (isang mahabang solenoid, isang solenoid na may iron core): i-click ito sa library.
:::

## Baguhin ang disenyo

1. I-click ang {{ui:Gumawa ng kopya}} sa itaas ng read-only na script. Naka-save ang kopya kasama ng piyesa mo.
2. Baguhin ang isang value malapit sa itaas at pindutin ulit ang {{key:F5}}. Subukan ang:
   - `g = 0.001;` — kalahati ng gap: halos doble ang gap field, at ganoon din ang pull (sumusunod ito sa B²).
   - `mur = 200;` — mas mahinang core: mas maraming ampere-turns ang nauubos sa iron.
   - `N = 200;` — dobleng turns: dobleng field, apat na beses na inductance.
   - `h = 0.0005;` — mas pinong grid: mas malapit na sagot, mga apat na beses ang oras.

Pinapalitan ng bawat takbo ang canvas. Ang mga variable na ginawa ng script (gaya ng `Bgap`, `L`, `F`) ay nananatili sa listahan ng **Variables** para sa sarili mong kuwenta.

## I-model ang sarili mong hugis

Binubuo ng example ang lahat mula sa tatlong listahan, isang value bawat grid square, na magagawa mo para sa anumang hugis na iginuhit gamit ang tuwid na linya sa kahabaan ng grid:

- **Saan ang iron:** true ang `iron` para sa mga square sa loob ng core. Binubuo ito ng example mula sa mga rectangle: ang `frame & ~window & ~gap` ay nangangahulugang "nasa frame, hindi sa window, hindi sa gap".
- **Ang permeability:** ang `1 + (mur - 1) * iron` ay 1 sa hangin at `mur` sa iron. Bigyan ng sariling value ang ilang materyal sa parehong paraan.
- **Ang current:** ang `J` ay ang current density sa amperes kada square metro, positibo palabas ng screen, negatibo papasok. May dalawang gilid ang coil na magkasalungat ang sign; kinukuwenta ng example ang `J0` para ang isang gilid ay magdala ng N I.

Pagkatapos, nilulutas ito ng `r = magnetostatic2d(m, permeability, J)`. Ang `r.B` ay ang flux density sa bawat square (dalawang column, x at y), ang `r.Bmag` ang laki nito, ang `r.energy` ang nakaimbak na enerhiya kada metro. Gumuguhit ng linya ang `plot(x, y)`.

Gumagana ang library sa metro, at ang view sa millimetro, kaya kapag ipinakita ang field nang diretso, masyado itong maliit nang isang libong beses na pagkaguhit. Ipinapakita ito ng example sa kopya ng grid sa millimetro (`mm = quadGrid(…)`, saka `show(field(mm, …))`): kopyahin ang dalawang linyang iyon.

Bilang default, pinananatili ng gilid ng kahon ang field sa loob: walang flux na lumalabas dito. Gawing hindi bababa sa dalawa o tatlong beses ang laki ng magnet ang kahon para hindi maipit ang field. Para sa simetrikong magnet, maaari mong i-model ang kalahati nito: sinasabi ng header ng `magnetostatic2d` kung aling edge condition ang gamitin sa linya ng simetriya.

## Permanent magnet

Ang ikalawang example, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**, ay ang parehong core na walang coil at may 10 mm na hiwa ng kaliwang binti na pinalitan ng magnet, na naka-magnetize paitaas. Patakbuhin ito gamit ang {{key:F5}}. Nagpi-print ito ng:

```
gumagana ang magnet sa B = 1.036 T, H = -124 kA/m (sa recoil line nito B = Br + μ0 μr H)
B sa gap 0.6778 T; ang magnetic circuit nang walang leakage 0.9692 T (-30.1 %)
leakage factor 1.53: sa flux na lumalabas sa magnet, 65 % ang tumatawid sa gap sa pagitan ng pole face
pull sa gap na humigit-kumulang 3656 N kada metro ng lalim (182.8 N para sa 50 mm na lalim)
```

- **Ang working point.** Inilalarawan ang magnet sa pamamagitan ng **remanence** nito na Br (ang field na pinananatili nito kapag sinara ito ng iron: humigit-kumulang 1.2 T para sa sintered NdFeB na magnet, 0.4 T para sa ferrite) at ng recoil permeability nito (mga 1.05 at 1.1). Kapag may binuksang gap, itinutulak nito ang magnet pababa sa recoil line nito: dito, sa 1.04 T, at nakaturo ang H laban sa B sa loob nito.
- **Leakage.** Ibinibigay ng manu-manong kuwenta na walang leakage ang 0.97 T sa gap; ang model ay nagbibigay ng 0.68 T. Itinutulak ng magnet ang flux nito nang malakas sa maikling haba, kaya marami nito ang dumadaan nang diretso pabalik sa window sa halip na sa gap. Sinasabi ng leakage factor kung gaano karami: 1.53 dito. Itakda ang `g = 0;` para sa closed keeper: ang magnet ay gagana nang nasa loob ng kalahating porsyento ng manu-manong kuwenta.
- **Mga magnet sa sarili mong model.** Ibigay sa `magnetostatic2d` ang mga magnet bilang `struct('Br', Br)`, kung saan ang `Br` ay may isang row bawat grid square na may remanence sa x at y sa tesla (zero sa labas ng mga magnet), at ibigay sa mga magnet square ang recoil permeability nila sa permeability list:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T paitaas sa mga square kung saan true ang mag
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Para sa magnet na naka-magnetize sa anggulo, ilagay ang `Br·cos(angle)` at `Br·sin(angle)` sa dalawang column; para sa ring na naka-magnetize palabas, kuwentahin ang direksyon ng bawat square mula sa posisyon nito. Ibinibigay ng `r.H` ang lakas ng field na H sa bawat square.

Pinananatili ng model ang magnet sa tuwid nitong recoil line gaano man ito kalakas itulak. Ang tunay na magnet na naitulak lampas sa knee nito (dahil sa malaking gap, malakas na coil o init) ay nawawalan ng bahagi ng lakas nito nang tuluyan; suriin ang working point laban sa curve ng gumawa para sa grade at temperatura.

Sinusuri ng mga test ng library ang mga magnet laban sa dalawang manu-manong resulta: isang bilog na magnet sa bukas na hangin (sa loob nito, B = Br / (1 + μr)) at isang magnet na sinarhan ng iron keeper (ang magnetic circuit), parehong nasa loob ng 1 %.

## Ang hindi pa nagagawa

- **Saturation.** Linear ang iron: dobleng current, dobleng field, walang limitasyon.
- **Demagnetisation.** Nananatili sa tuwid nilang recoil line ang mga magnet (tingnan sa itaas).
- **Eddy current** at **losses** (iron loss, copper loss).
- **Gumagalaw na bahagi at torque.** Walang rotor na umiikot sa stator, walang torque laban sa anggulo.
- **Bilog na hugis.** Binubuo ang grid ng magkakapantay na square, kaya lumalabas na may baitang ang mga curved na outline.
- **3-D.** Cross-section ng isang bagay na mahaba ang lahat.

Tinitingnan pa para sa susunod na bersyon ang disenyo ng motor (umiikot na rotor, torque at losses sa 2-D). Tingnan ang [Hindi pa nagagawa](topic:not-built-yet).
