---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Nagdaragdag ang PartCraft 0.8 ng live analysis habang nag-e-edit, check na What breaks first, mga pag-aaral ng yielding at contact na may deck file para sa external solver, motion study para sa assembly, workspace ng Mga surface para sa freeform surface, mga piyesang sinusukat mula sa physics sa Engineer workspace, photo-to-sketch, mga export para sa printing, nested sheets to G-code, at mga drawing na nagda-dimension ng kanilang mga butas. Inaayos ng 0.8.1 ang pag-freeze ng cursor sa full-screen.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, live analysis, update habang nag-e-edit, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch mula sa larawan, scale para sa printing, split para sa printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, wika, toolbar rows
from: 62e4dce2
---

Ito ang nagbago sa PartCraft 0.8 at 0.8.1, kumpara sa 0.7. Sumasagot ang simulation habang nag-e-edit ka at sinasabi kung ano ang unang mababasag, nakakakuha ng motion study ang mga assembly, at ginagawa ng mga bagong workspace ang freeform surface at mga piyesang sinusukat mula sa physics. Maliit na fix release ang 0.8.1.

## Bago

### Simulation

- **Mag-update habang ine-edit ko.** I-tick ang {{ui:Mag-update habang ine-edit ko}} sa Solve block at susunod sa mga edit mo ang mga sagot. Kapag binago mo ang dimension, load o material, agad lalabas ang mabilis na sagot na gawa sa mga elemento na apat na beses ang laki; kapag huminto ka nang mga isang segundo, papalitan ito ng pinong sagot ng study mismo. Sinasabi ng mga resulta kung alin ang tinitingnan mo. Sa isang steel cantilever, nasa loob ng 1 % sa deflection at mga 4 % sa stress ng pinong sagot ang mabilis na sagot. Tingnan ang [Suriin ang stress at deflection](topic:simulation#update-while-you-edit-live).
- **Ano ang unang mababasag?** Para sa static o buckling study, ang {{ui:Ano ang unang mababasag?}} sa **Sirain it** block ay pinapataas ang mga load hanggang sumuko ang piyesa. Inilalista nito, mula sa pinakamasama, ang load factor hanggang first yield (may pulang marker kung saan tumataas ang stress) at ang load factor hanggang buckling. Ang factor na mas mababa sa 1 ay nangangahulugang sumusuko na ang piyesa sa ilalim ng load, at magpapakita ang Problema ng error. Galing ang mga factor sa linear study, kaya kasing-tibay lang ang mga ito ng study. Tingnan ang [Suriin ang stress at deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding at contact.** Dalawa pang uri ng study: isang nonlinear kung saan sinusundan ng material ang tuwid nitong linya hanggang sa yield stress at saka ang mas patag na slope, na may plotted na plastic strain; at isang contact kung saan nagtutulak sa isa't isa ang magkakahiwalay na piraso (frictionless) o nananatiling nakadikit (bonded). Ang load step na hindi makapag-settle, o mga piraso na lumulubog nang sobra sa isa't isa, ay lalabas sa Problema panel. Hindi nilulutas ang friction, malaking sliding, malalaking rotation, malalaking deflection at fatigue. Tingnan ang [Suriin ang stress at deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Mga deck para sa CalculiX.** Ang {{ui:Export}} › {{ui:CalculiX deck (.inp)}} ay nagse-save ng study para sa CalculiX, isang hiwalay na programa na iinstall at patatakbuhin mo mismo; ang {{ui:Export}} › {{ui:CalculiX results (.frd)}} ay binabasa pabalik ang result file nito sa parehong mesh. Hindi kailanman sinisimulan ng PartCraft ang programang iyon, at sinasabi nito kung nagbago ang piyesa mula nang ma-save ang deck.

### Mga Assembly

- **Motion study.** {{ui:Assembly}} › {{ui:Motion}} ay nagpapatakbo ng value ng isang joint sa paglipas ng oras na ibibigay mo (constant na bilis, eased, sine, o palabas at pabalik), inilalagay ang assembly sa bawat step kasama ang mga joint at closed loop nito, at iniuulat kung ano ang nagbabanggaan at gaano kalapit ang mga piyesa. Ang {{ui:Magdagdag ng point}} ay nagpe-plot ng posisyon, bilis at acceleration ng isang point, ang value ng joint at ang clearance laban sa oras; isinusulat ang mga ito ng {{ui:I-save ang CSV}} at {{ui:I-save ang plot}}. Pagkatapos ng {{ui:I-run}}, inililipat ng Step through na run bar ang assembly sa anumang step. Nakasave sa assembly file ang mga setting ng study. Galing ang bilis at acceleration sa mga naitalang posisyon, kaya gumamit ng mas maraming step kung mababa ang basa sa matalas na peak. Tingnan ang [Suriin ang assembly para sa banggaan at motion](topic:check-assembly#a-motion-study).

### Mga surface at piyesa mula sa physics

- **Workspace na Mga surface.** Piliin ang {{ui:Mga surface}} sa {{ui:Workspace}} box para sa mga NURBS curve at surface sa tabi ng piyesa: {{ui:Kurba}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} at {{ui:Zebra}}, na may continuity (G0, G1 o G2) na sinusukat sa eksaktong mga surface, at isang edge na mas mahina sa hiniling mo ay nakalista sa Problema na may Match fix. Sinusukat ng {{ui:Fair}} ang hull line para sa inflection at curvature jump at binubuo ulit ang hindi maayos sa loob ng tolerance mo. Naka-save ang mga surface sa part file at hindi nila binabago ang mga feature ng piyesa. Tingnan ang [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Ang Engineer workspace.** Piliin ang {{ui:Engineer}} sa workspace switcher, pumili ng generator at i-click ang {{ui:Bago}}: sinusukat ng isang script ang piyesa mula sa kung ano ang dapat nitong gawin (init na ililipat, mga daloy, presyon, material, proseso ng printing) gamit ang mga textbook na formula at binubuo ito, saka ibinabalik ang mga numerong ginamit nito kasama ang mga source, ang mga manufacturing check nito, at mga file para sa analysis tool. Pareho ang mga input na nagbibigay ng parehong piyesa sa anumang computer. Nananatili ang generator sa piyesa, at hindi kailanman nagpapatakbo ng script ang pagbukas ng piyesa. Tingnan ang [Mga piyesa mula sa physics: generator](topic:engineer-generators) at [Sumulat ng generator](topic:write-a-generator).

### Sketching, drawings at paggawa

- **Sketch mula sa larawan.** {{ui:Features}} › {{ui:Higit pa}} › {{ui:Sketch mula sa larawan…}} ay tinatrace ang larawan ng flat na piyesa sa plain na ground (outline at mga butas) o pen drawing papunta sa mga linya, arko at bilog. Magbibigay ka ng isang haba, titingnan ang preview, at gagawin ang sketch. Tingnan ang [Mga batayan ng sketching](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale at split para sa printing.** {{ui:Export}} › {{ui:Scale for printing (STL o 3MF)…}} ay nag-i-scale kada axis nang hindi binabago ang piyesa, halimbawa ayon sa shrinkage allowance. {{ui:Export}} › {{ui:Split for printing (zip ng mga piraso)…}} ay pinuputol ang piyesang masyadong malaki para sa bed mo sa mga numerong piraso na pinagdudugtong ng peg, susi, dovetail, dowel hole o magnet pocket. Tingnan ang [I-print sa 3D](topic:print-3d).
- **Nested sheets sa G-code.** {{ui:Export}} › {{ui:Nested sheets sa G-code}} ay binabasa ang nested DXF at gumagawa ng isang program kada sheet sa pamamagitan ng post na pipiliin mo: mga butas at cut-out muna, saka ang mga outline. Hindi nito pinaplano ang lead-in, ang cutting order o ang mga shared edge. Tingnan ang [Mag-nest ng flat na piyesa sa sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Mga drawing na gumagawa ng higit sa sarili.** {{ui:Sheet}} › {{ui:Awtomatiko}} ay pumipili ng pinakamaliit na A-size na sheet na kasya ang mga view sa pinakamalaking standard scale hanggang 1:1. {{ui:I-dimension ang mga butas}} ay naglalagay ng center mark sa bawat butas, isang callout kada laki, at mga posisyon mula sa lower-left corner ng view. Tingnan ang [Gumawa ng drawing](topic:drawing-pdf).

### Sa bawat app

- **Mga wika.** Available ang mga app sa 54 na wika. Ang mga wikang lampas sa English ay machine draft hanggang basahin ng katutubong nagsasalita.
- **Mga toolbar row.** {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ay pumipili ng Wrap (gaya ng dati), 2 row o 1 row; kung hindi kasya ang bar, nagsa-scroll ito pahalang. Ipinapakita ng ribbon ng Features sa PartCraft ang pinakagamit na tool nang malaki at itinatago ang mga variant sa likod ng split button.
- **Ikonekta ang AI mo.** Ang Studio ang hub para sa pagkonekta ng sarili mong assistant sa lahat ng walong app, na may read only, suggest o edit na permission bawat app. Ang nakakonektang assistant ay makakapagsukat ng piyesa mula sa isang pangungusap, tulad ng bracket para sa load, makapagpapakita ng working at bawat check, at makakabuo nito; iniuulat nito kung ano ang hindi nito nasuri (stress concentration, fatigue, creep sa plastic). Tingnan ang [Gamitin ang PartCraft kasama ng AI assistant](topic:use-with-ai-assistants).

## Naayos sa 0.8.1

- **Pag-freeze ng cursor sa full-screen.** Naka-throttle na ngayon ang hover pick. Ang sanhi ay ang pinakamahusay nating pagbasa at hindi ito nakumpirma sa taong nag-ulat nito.
- **Wika habang tumatakbo.** Maaaring magpalit ng wika ang Studio at ang packed na edisyon habang tumatakbo; dati English lang ang mga ito. Hindi pa ito nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.

## Wala pa sa bersyong ito

- Hindi pa tapos ang Ikonekta ang AI mo: hindi ipinapangako ang one-click connect sa loob ng Studio, ang hosted connector para sa browser AI, sarili mong API key sa loob ng Studio, at ang nailathalang MCP package. Walang sariling AI ang Studio.
- Hindi code-signed ang Studio: maaaring magbabala ang Windows, at hinihingi ng macOS ang right-click at pagkatapos Open. Tingnan ang [Troubleshooting](topic:troubleshooting).
- Isang direksyon pa rin ang mga stack-up: tingnan ang [Tolerance stack-up](topic:tolerance-stackup).
- Nakalista sa [Ano ang hindi pa nagagawa](topic:not-built-yet) ang iba pa.

Nasa [Ano ang bago sa 0.7](topic:whats-new-0-7) ang mga naunang pagbabago.
