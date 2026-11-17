---
title: Magbukas ng standard part
summary: Magsimula ng piyesa mula sa bolt, screw, nut, washer, pin, bearing o key na may sukat batay sa standard nito, kasama ang bawat laki sa table ng standard bilang configuration.
keywords: standard part, standard parts, bolt, screw, hex, nut, washer, pin, dowel, bearing, ball bearing, key, parallel key, pangkabit, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, template, library
from: b9e2811f
---

Nagbubukas ang PartCraft ng karaniwang mechanical na piyesa na handa na: nagmumula ang mga dimension sa mga table ng standard, at ang bawat laki sa table ay configuration na maaari mong lipatan.

## Magbukas ng isa

1. I-click ang {{ui:Standard part}} sa File group.
2. Sa {{ui:Piyesa}}, piliin ang uri, halimbawa {{ui:Hex head screw (ISO 4017)}}.
3. Sa {{ui:Laki}}, piliin ang laki, halimbawa `M10 × 40`.
4. I-click ang {{ui:Buksan}}.

Bumubukas ang piyesa bilang bago at hindi pa naka-save na piyesa. I-save ito para mapanatili ({{key:Mod+S}}).

| Piyesa | Standard | Parameters |
|---|---|---|
| Hex head screw, hex bolt | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` laki ng thread, `s` across flats, `k` taas ng ulo, `l` haba |
| Hex nut | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Plain washer | ISO 7089 | `d1` loob, `d2` labas, `h` kapal |
| Parallel pin | ISO 2338 | `d`, `l` |
| Deep groove ball bearing | ISO 15 | `d` bore, `D` labas, `B` lapad |
| Parallel key | DIN 6885-1, form A | `b` lapad, `h` taas, `l` haba |

## Baguhin ang laki

Ang bawat laki ay configuration (tingnan ang [Configurations at design tables](topic:design-tables)): buksan ang {{ui:Parameters}} at pumili ng iba, o baguhin ang isang parameter, gaya ng `l` para sa mas mahabang screw, at i-save ito bilang sarili mong configuration.

## Ano ang namodelo

- Mga screw at bolt: ang hexagon na ulo at plain na shank. Mga nut: ang hexagon na may hole na kasing laki ng nominal na thread. Hindi namomodelo ang mga thread; magdagdag ng isa gamit ang {{ui:Thread}} kung kailangan mo (tingnan ang [Threads](topic:threads)).
- Mga pin: plain na silindro; hindi kasama ang end chamfer.
- Mga bearing: ang outside envelope lang (isang singsing ng bore, ang outside diameter at lapad), na siyang kailangan mo para mailagay ito.
- Mga key: ang round-ended na key.

Steel ang materyal ng piyesa, kaya ipinapakita ng mass panel ang bigat nito. Wala pa rito ang gear: walang tooth feature ang PartCraft, at hindi gear ang disc. Gumuguhit ang CadCraft ng gear ayon sa drawing convention, at nasa library ang mga ito bilang drawing.
