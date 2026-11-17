---
title: Thread sa shaft at bore, drawn o modelled
summary: Maglagay ng ISO metric o trapezoidal na thread sa anumang round face, shaft man o bore. Panatilihin itong cosmetic para sa drawings, o i-model ang totoong helical thread para sa 3D printing, na may clearance para magkasya ang mga naprint na piyesa.
keywords: thread, threads, modelled thread, modeled thread, helical, helix, turnilyo, bolt, nut, shaft, bore, external thread, internal thread, cosmetic thread, metric thread, trapezoidal, acme, lead screw, Tr16x4, M10, 3D printing, print, clearance, fit, left hand, tapped
from: 4f6401cc
---

{{ui:Thread}} ay naglalagay ng thread sa mga round face: ang labas ng shaft (external thread) o ang loob ng bore (internal thread). Sinasabi ng PartCraft kung alin mula sa face.

Ang thread ay **cosmetic** sa simula: nananatiling plain ang face, iginuguhit ng view ang thread bilang dashed circles at itinatala ito ng drawing sheet, gaya ng "M10×1.5 - 6g, thread 20 long". Lagyan ng tsek ang **Modelled** para i-cut ang totoong helical thread sa piyesa, para sa 3D printing o sa modelong dapat magmukhang tama.

## Thread ng shaft o bore

1. Gawin ang shaft o bore sa laki ng thread: Ø10 na shaft para sa M10 bolt, o Ø8.5 na bore (ang tap drill) para sa M10 nut.
2. I-click ang round face, saka piliin ang {{ui:More}} › {{ui:Thread}}. Kapag walang napiling round face, hihingin ng PartCraft na i-click mo ang mga face, saka {{ui:Done}}.
3. Sa kanang panel, suriin ang **Size**. Ang **Fit to the face** ang pumipili ng laki nang mag-isa: para sa shaft, ang laking may major diameter na katugma ng shaft; para sa bore, ang laking may minor diameter na kasya rito.

Nagsisimula ang thread sa bukas na dulo ng face, kung saan hindi na nagpapatuloy ang piyesa sa axis: ang malayang dulo ng shaft, ang bunganga ng bore. Binabaligtad ito ng **Start at the other end**.

## Mga setting

| Setting | Mga pagpipilian | Default |
|---|---|---|
| **Form** | ISO metric (60°), M1.6 hanggang M64 coarse; trapezoidal (Tr, 30°), Tr8×1.5 hanggang Tr60×9 | ISO metric |
| **Size** | Fit to the face, o isang laki mula sa listahan | Fit to the face |
| **The whole face** | Alisin ang tsek para magbigay ng **Length (mm)**, binibilang mula sa simula | Naka-tsek |
| **Start at the other end** | Tumatakbo ang thread mula sa kabilang dulo ng face | Off |
| **Hand** | Right hand o left hand | Right hand |
| **Modelled** | I-cut ang totoong helical thread | Off |
| **Clearance (mm)** | Lumalabas kapag naka-tsek ang Modelled: gaano kaliit ang thread ng shaft, at gaano kalaki ang sa bore, sa lahat ng direksyon | 0.1 |

Ang laking hindi bagay sa face ay itinatayo pa rin, pinutol ayon sa face, at sinasabi ito ng panel, gaya ng "Ang Ø12 mm na shaft ay hindi M10 na Ø10 mm." Maaaring magbahagi ng isang Thread feature ang ilang face; sa **Fit to the face**, bawat isa ay may sariling laki.

## Modelled na thread para sa 3D printing

Sumusunod ang modelled na thread sa standard basic profile: ISO 68-1 para sa metric na thread (patag na crest at root, 60° na flank), ISO 2901 para sa trapezoidal (30° na flank). Inililipat ng **Clearance** ang buong profile papasok (shaft) o palabas (bore) para magkabit ang mga naprint na piyesa:

- **0.1 hanggang 0.2 mm** ay bagay sa karamihan ng printer. Mag-print muna ng test bolt at nut.
- **0** ang standard profile, para sa mga piyesang minamakina o para sa pagsuri ng fit.

Hindi kailanman nagdidikit sa gilid ang bolt at nut na may parehong clearance: ang puwang sa pagitan nila ay dalawang beses ng clearance, sa lahat ng direksyon.

:::tip
Mahina mag-print ang mga pinong pitch: ang M3 pababa, o pitch na mas mababa sa 0.5 mm, ay malapit sa kayang iguhit ng 0.4 mm na nozzle. Mag-model ng mas malalaking thread, at gumamit ng heat-set insert o tapped hole para sa maliliit.
:::

Bahagi ng solid ang modelled na thread: dala ito ng STL, 3MF at STEP exports, at sinusukat ito ng Measure. Ginagawa nitong mas mabigat i-rebuild ang piyesa: ang M10 thread na 20 ang haba ay humigit-kumulang 150,000 triangles.

## Tapped holes

Ang **Tapped (ISO metric)** na hole ay may sarili ring switch na **Modelled**, na may parehong **Clearance**. Tingnan ang [Drill holes and counterbores at sketch points](topic:holes).

## Kapag hindi nabuo ang thread

- "Ang thread ay nasa round face (cylinder): shaft o bore." Ang napiling face ay flat o curved sa ibang paraan.
- "Walang standard na laki na kasya sa round face na Ø0.6 mm: pumili ng laki." Walang standard na laki ang nakita ng Fit to the face sa loob ng 12 % ng face. Pumili ng **Size**, o palitan ang face.
- "Wala na ang face kung saan nakalagay ang thread na ito (…). Piliin itong muli." Inalis ng naunang pagbabago ang face. I-click ang {{ui:Pick faces}} at i-click muli ang face.

:::note
Hindi pa nabubuo ang inch threads (UNC, UNF), pipe threads, tapered threads, thread run-outs at chamfered thread starts. Ipinapakita ng exact kernel ang modelled na thread bilang cosmetic.
:::
