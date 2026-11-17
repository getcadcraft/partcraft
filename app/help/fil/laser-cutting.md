---
title: Ipadala ang drawing sa laser
summary: Piliin ang gawain ng bawat layer (cut, score, engrave, fill, picture), i-preview ang mga galaw ng head, i-save ang GRBL laser-mode G-code, o ipadala ito mula sa browser pagkatapos i-frame ang job.
keywords: laser, laser cutter, laser engraver, GRBL, G-code, engrave, fill, dither, picture engraving, score, cut, Web Serial, Linux, frame the job, power, speed, passes
from: 327b3c46
---

Ginagawang program ng {{ui:Laser}} panel ang mga layer ng isang drawing para sa laser na tumatakbo sa GRBL (karamihan ng hobby at maliit na shop na diode at CO2 controller). Sa PartCraft, piliin ang {{ui:Export}} › {{ui:Laser program…}}, saka ang {{ui:Magdagdag ng outlines mula sa DXF…}}: papasok ang outline at mga hole sa layer na CUT. Kailangan ng exact kernel ang flat pattern ng sheet metal na piyesa (kasama ang bend line nila sa layer na BEND), na wala sa bersyong ito. Naka-save ang mga setting sa piyesa o assembly file.

:::warning
Subukan muna ang bawat setting sa scrap, magsuot ng eye protection na akma sa laser mo, panatilihing nakasara ang takip kung meron, at huwag kailanman iwan na tumatakbo ang laser nang mag-isa. Ang mga numerong nasa simula ng bawat layer ay placeholder lamang, hindi rekomendasyon para sa anumang materyal.
:::

## Piliin ang gawain ng bawat layer

Bawat layer ng drawing ay isang row. Itinatakda ng {{ui:Gagawin}} ito sa **Cut**, **Score**, **I-engrave ang mga linya**, **Punan ang shapes**, **I-engrave ang picture** o **Hindi ipapadala**, kasama ang {{ui:Power %}}, {{ui:Bilis mm/min}} at bilang ng {{ui:Pass}}.

- **Fill** ay nagsusunog sa loob ng mga closed shape gamit ang mga linyang {{ui:Espasyo ng linya}} ang layo, sa {{ui:Anggulo}}, sa magkabilang direksyon o sa isa, na may overscan para nasa bilis na ang head kapag bumukas ang laser; ang cross-hatch ay nagdaragdag ng ikalawang pass sa 90°. Ang shape na may hole ay nananatiling bukas sa hole.
- **I-engrave ang picture** ay ginagawang tuldok ang picture (Floyd–Steinberg, Atkinson, ordered, o payak na itim at puti sa isang threshold) o, gamit ang *Antas ng grey*, ginagawang variable power.
- Pagkakasunod-sunod: una ang mga picture at fill, saka ang line engraving, saka ang mga score, saka ang mga cut, para hindi gumalaw ang nakaputol na piyesa habang ina-engrave ito. Sa loob ng isang layer, tumatakbo ang mga path nang **inside-first** (ang hole bago ang plato na kinalalagyan nito), at ang pinakamalapit ang susunod.

## I-preview, saka i-save

Ipinapakita ng preview ang ginagawa ng head: mga linyang nasusunog sa kulay, mabilis na galaw sa grey, at berdeng kahon sa paligid ng lahat ng nasusunog. Sa ibaba nito ang laki, ang haba ng pagsunog at tantiya ng oras (walang acceleration; mas matagal ang tunay na makina). Ang {{ui:I-save ang G-code…}} ay sumusulat ng GRBL laser-mode G-code: `$32=1`, `M4` (o `M3`) na may S values, `G0` at `G1` na galaw, `M5` sa dulo. Ang X0 Y0 ay ang kaliwang ibabang sulok ng job maliban kung piliin mo ang origin ng drawing: itakda doon ang work zero ng makina mo. Sumusunod ang G-code sa dokumentadong laser mode ng GRBL; hindi pa ito nasusubukan sa tunay na laser.

## Ipadala mula sa browser

Sa Chrome at Edge, hihilingin ng {{ui:Kumonekta…}} na piliin mo ang USB port ng laser. Walang kumokonekta o nagpapadala hangga't hindi ka pumipindot ng button. Pindutin muna ang {{ui:I-frame ang job}}: susundan ng head ang kahon ng job habang naka-**off** ang laser (o sa mababang power na itinakda mo para sa pointer) para makita mo kung saan ito susunog. Saka lang lilitaw ang {{ui:Ipadala ang job}}, at mawawala ulit kung may babaguhin ka. Pinipigil ng {{ui:I-pause}} ang head, pinipigil din ito ng {{ui:Ihinto}}, nire-reset ang controller (namamatay ang laser) at nagpapadala ng `M5`. Kung walang Web Serial (Firefox, Safari, at CadCraft Studio, na wala pang ganito sa web view nito), i-save ang G-code at ipadala ito gamit ang sariling program ng laser mo.

## Hindi pa nagagawa

Format ng ibang controller (Ruida, Marlin lasers, vendor files), tabs at lead-in, kerf offset, material library, rotary at Z axis, camera alignment.
