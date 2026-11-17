---
title: Suriin ang assembly para sa clashes at galaw
summary: Hanapin ang mga piyesang nagkakapatong gamit ang Clash, i-drag ang value ng anumang joint para makita ang galaw, at sumuyod sa isang joint sa buong saklaw nito para mahanap kung saan nagbabanggaan ang mga piyesa.
keywords: interference, interference detection, clash, collision, overlap, thread fit, thread depth mismatch, magkadikit na face, itago, filter, galaw, motion study, sweep, saklaw ng galaw, suriin
from: 9c98db46
---

Dalawang check ang tumatakbo sa mga piyesang nakalagay na: ang **Clash** ay naghahanap ng nagkakapatong na materyal ngayon, at ang **motion check** ay gumagalaw sa isang joint sa buong saklaw nito at naghahanap ng overlaps habang gumagalaw ito.

## Suriin ang interference

1. Buksan o bumuo ng assembly (tingnan ang [Bumuo ng assembly](topic:build-assembly)).
2. Piliin ang {{ui:Clash}}.

Sinasabi ng status bar ang resulta:

- "No interference between 3 parts (… ms)." Walang nagkakapatong. (Walang interference sa pagitan ng 3 piyesa (… ms).)
- "Interference: Flange1 and Flange2: Overlap, 2.5 mm³." Bawat pares, kung anong uri ng resulta ito, at ang volume na pinagsasaluhan nila.

Ipinapakita ng **Assembly** box sa kaliwa ang **Interference**: "None" (wala), "2 results" (ang mga ipinapakita), o "Not checked" (hindi nasuri). Kapag walang napili, inililista ng kanang panel ang bawat resulta sa ilalim ng **Interference**.

Nalilinis ang resulta tuwing nagbabago ang assembly. Patakbuhin ulit ang {{ui:Clash}} pagkatapos ilipat ang isang joint. Sinusuri ang bawat pares ng piyesa laban sa bawat isa pa, kaya mas matagal ito sa malalaking assembly.

### Mga uri ng resulta

| Uri | Ibig sabihin |
|---|---|
| **Overlap** | Nagsasaluhan ng volume ang mga piyesa: tunay na clash. |
| **Thread depth mismatch** | Ang pinagsasaluhang volume ay nasa loob ng thread ng isang piyesa pero lampas sa thread ng kabila: bolt na mas malalim ang thread kaysa sa hole nito, o plain shank sa tapped hole. |
| **Thread fit (cosmetic threads)** | Ang pinagsasaluhang volume ay nasa loob ng thread ng parehong piyesa: bolt sa tapped hole. Iginuguhit ang cosmetic threads sa buong laki ng thread, kaya palagi silang bahagyang nagkakapatong. |
| **Touching faces** | Walang pinagsasaluhang volume, pero nagdidikit na face (sa loob ng 0.001 mm). |

Ang mga modelled threads (tingnan ang [Threads sa shafts at bores, drawn o modelled](topic:threads)) ay totoong geometry: ang pinagsasaluhan nila ay isang **Overlap**.

### Itago ang hindi mo kailangang makita

Sa ilalim ng **Interference**, ang **Ipakita** ay may box para sa bawat uri: alisin ang tsek sa **Thread fit** at **Touching faces** para makita lang ang mga clash na mahalaga. Ang **Itago ang pares na ito** sa tabi ng resulta ay nagtatago sa pares ng piyesang iyon anuman ang uri nito. Binibilang ang mga nakatagong resulta ("2 results hidden by these filters"), at ibinabalik ng **Ipakita muli ang mga nakatagong pares** ang mga pares. Kasama rin sa bilang ng status bar ang mga nakatagong resulta.

Nakasave sa assembly ang mga filter at bawat pagbabago ay isang hakbang ng {{key:Mod+Z}}. Gumagamit din nito ang **Sumuyod sa joint para sa clashes** (sa ibaba). Ang assembly na may filters ay sine-save bilang version 4, na tumatanggi buksan ng mga naunang bersyon ng PartCraft sa halip na mawala ang mga filter.

## Panoorin ang galaw

1. Piliin ang joint na gumagalaw (anuman maliban sa rigid) sa listahan sa kaliwa.
2. I-drag ang slider sa ilalim ng isa sa mga value nito, gaya ng **Angle (°)** o **Offset (mm)**. Gumagalaw ang piyesa habang nagdidrag ka.
3. Bitawan. Nananatili ang bagong posisyon at puwedeng i-undo gamit ang {{key:Mod+Z}}.

Puwede ring i-type ang anggulo o offset sa box at pindutin ang {{key:Enter}}.

Ang joint sa saradong loop (isang linkage) ay gumagalaw sa buong loop: nananatili ang value na idinidrag mo at susunod ang iba pang joint ng loop (tingnan ang [Mga saradong loop](topic:build-assembly#closed-loops-linkages)).

## Sumuyod sa joint para sa clashes

1. Piliin ang joint na gumagalaw.
2. Para sa joint na may ilang value (cylindrical, planar, ball, pin in slot), piliin kung alin ang susuyurin sa **Check moves**.
3. Piliin ang {{ui:Suriin ang galaw kung may banggaan}}.

Ginagalaw ng PartCraft ang value na iyon sa 25 posisyon sa 24 pantay na hakbang, habang nananatili ang iba: anggulo mula −180° hanggang 180° (tilt mula −90° hanggang 90°), o haba mula minus hanggang plus ng laki ng pinakamalaking piyesa. Nag-uulat ito ng:

- "No clash anywhere for Angle (°) from -180 to 180 (25 positions checked)." Walang clash saanman para sa Angle (°) mula -180 hanggang 180 (25 posisyon ang nasuri).
- "6 of 25 positions clash, first at Angle (°) 45 (12.4 mm³)." Ang unang posisyon na nagka-clash at ang overlap doon. (6 sa 25 posisyon ang nagka-clash, una sa Angle (°) 45 (12.4 mm³).)

Nakagray ang button para sa rigid joints, na hindi gumagalaw. Ang sweep ay tumitingin lang sa mga posisyon, hindi sa daan sa pagitan nila: maaaring dumaan ang manipis na piyesa sa isa pa sa pagitan ng dalawang hakbang.

:::note
Hindi pa nagagawa ang contact at gravity. Kapag walang limits, sakop ng sweep ang buong saklaw; bigyan ang value ng **Limits** (tingnan ang [Parts list, exploded views at paglipat ng mga piyesa](topic:assembly-bom-explode)) at tanging ang mga iyon ang sakop ng sweep, kaya ang hinge na bumubukas nang 90° ay sinusuri sa 90°.
:::

## Isang motion study

**Assembly › Motion** ay nagpapatakbo ng value ng isang joint mula sa simula hanggang sa katapusan sa loob ng oras na ibibigay mo (pare-parehong bilis, eased, sine, o palabas at pabalik), inilalagay ang assembly sa bawat hakbang kasama ang mga joint at saradong loop nito, at nag-uulat kung anong clash ang nangyayari at gaano kalapit ang mga piyesa. Sinusundan ng **Magdagdag ng point** ang gitna ng isang piyesa o isang point na iki-click mo rito, at ang card ay nagpa-plot ng posisyon, bilis at acceleration nito, ang value ng joint, at ang clearance laban sa oras; isinusulat ang mga ito ng **I-save ang CSV** at **I-save ang plot**. Ang bilis at acceleration ay kinukuha mula sa mga naitalang posisyon, kaya ang matalas na tuktok sa pagitan ng mga hakbang ay lalabas na mababa: gumamit ng mas maraming hakbang.

Pagkatapos ng **Run**, inililipat ng **Step through the run** bar ang assembly sa anumang hakbang (ipinapakita sa tabi nito ang oras, value, at kung nagka-clash ang mga piyesa roon); pinapanatili ng joint ang sarili nitong value, at ibinabalik ng **Back to the model** ang assembly sa dati. Naka-save ang mga setting ng study sa assembly file; muling ginagawa ang mga resulta nito ng **Run**.

## Isang contact study

**Assembly › Contact** ay nagpapakita kung paano dinadala ng assembly ang mga load kung saan nagdidiin ang mga piyesa sa isa't isa. Bawat piyesa ay nagdadala ng sarili nitong suporta, load at materyal mula sa sarili nitong **Simulation** study (isang fixed face sa isang piyesa, isang puwersa sa iba); dito ka pumipili ng mga pares. **Add a pair**, tapos **Pick side A** at i-click ang mga face ng isang piyesa, **Pick side B** at i-click ang mga face ng ibang piyesa (ang pag-click sa napiling face ay inaalis ito; ang Esc o Done ay tinatapos ang pagpili). Ang pares ay **Frictionless** (nagdidiin ang mga piyesa pero dumudulas) o **Bonded** (nananatiling magkasama); itinatakda ng stiffness factor kung gaano katigas lumaban ang contact sa paglubog (20 ang magandang simula, 1000 para sa matigas na steel stack).

**Solve** ay nagpapatakbo ng load sa mga hakbang at nagpapakita ng contact force, ang pinakamalalim na paglubog, ang pinakamalaking galaw, at ang pinakamalaking stress. Ang piyesang walang pares ay hindi isinasama at sinasabi ito ng card. Ang frictionless contact ay hindi humahawak sa piyesa sa gilid: bigyan ang bawat piyesa ng suporta sa sarili nitong Simulation study, o i-bond ito, kung hindi ay maaaring hindi mag-settle ang mga hakbang. Naka-save ang mga pares at setting sa assembly file.

**Export CalculiX deck** ay sinusulat ang parehong modelo bilang CalculiX input file (.inp). Hiwalay na programa ang CalculiX na ini-install at pinapatakbo mo mismo; ang **Read CalculiX results (.frd)** ay bumabasa ng mga displacement pabalik sa mesh ng assembly na ito at tumatanggi sa file na ginawa para sa ibang mesh. Ang solver dito ay kayang plastic pero hindi explicit dynamics, at walang dito ang certified na analysis: ipasuri sa engineer ang anumang mahalaga.
