---
title: Buksan ang STL, OBJ o 3MF bilang solid body
summary: Gawing solid na maaari mong putulin, dagdagan at sketch-an ang mesh mula sa scanner, sa site ng 3D printing o sa ibang programa; ano ang inaayos ng PartCraft sa proseso, at ano ang hindi nito kaya.
keywords: stl, obj, 3mf, mesh, mesh to solid, convert mesh, scan, watertight, repair, holes, gaps, units, up axis, imported body, flat faces
from: 7b948471
---

Nagbubukas ang PartCraft ng STL, OBJ at 3MF mesh bilang **solid bodies**. Gumagana ang body gaya ng anumang solid: putulin ito, dagdagan, butasan, i-pattern, gamitin sa assembly o para sa machining, at mag-sketch sa mga flat na face nito. Wala itong sariling history: tatsulok lamang ang mesh, kaya hindi mababago ang sukat nito, maaari lamang itong dagdagan o putulan.

## Buksan ang mesh

1. Piliin ang {{ui:Buksan}} o pindutin ang {{key:Mod+O}}, at piliin ang `.stl`, `.obj` o `.3mf` file. O i-drop ito sa 3D view.
2. Binabasa ito ng PartCraft, inaayos ang kayang ligtas na ayusin, at ipinapakita kung ano ang nakita nito: ilang tatsulok at punto, bawat repair, at kung **nagsasara** na ang mesh.
3. Suriin ang **Units in the file** at **Up in the file**. Hindi sinasabi ng STL at OBJ ang kanilang unit, kaya millimeters ang hula; sinasabi ng 3MF file ang sarili nitong unit. Ipinapakita ng linyang **Size here** ang sukat ng body gamit ang pinili mo, kaya madaling makita ang part na 25.4 beses na mas maliit ang dating (inches ito).
4. Kung walang laman ang part sa screen, piliin ang {{ui:Buksan bilang body}}. Kung may mga feature na ang part, piliin ang **Use it to** (idagdag sa part, putulin mula rito, o panatilihin lamang ang overlap), saka {{ui:Idagdag sa piyesang ito}}, o {{ui:Bagong piyesa}} para magsimulang muli gamit ang mesh.

Lumilitaw ang feature na **Imported1** sa history. Halimbawa, ganito ang sinasabi ng status bar: "bracket.stl ay solid body: 15200.512 mm³, 14 na flat na face na maaaring pagsketchan."

## Ano ang inaayos ng PartCraft

| Ayos | Ibig sabihin |
|---|---|
| Doubled corners joined | Inuulit ng STL ang bawat sulok para sa bawat tatsulok nito; pinagdudugtong ang mga ito sa iisang punto |
| Triangles with no area removed | Mga sliver na ang mga sulok ay nasa iisang linya |
| Doubled triangles removed | Ang tatsulok na nakasulat nang dalawang beses ay itinatago nang isa; ang dalawang nakaharap sa magkasalungat na direksyon (panloob na pader) ay parehong tinatanggal |
| Small gaps closed | Mga edge na halos nagtatagpo (sa loob ng isang libo ng laki ng part) ay pinagdudugtong |
| Holes filled | Ang butas na patag ang hangganan ay pinupuno anuman ang laki; ang baluktot na butas ay pinupuno lamang kapag maliit |
| Triangles turned to face outward | Ang mga tatsulok na nakaharap sa maling direksyon ay ibinabaling para sumang-ayon sa kapitbahay nila, at ang buong surface ay nakaharap palabas |

## Kapag hindi nagsasara ang mesh

Kailangan ng solid ang surface na walang bukas. Kapag hindi ito maisara ng PartCraft, sinasabi ng dialog kung ilang butas at bukas na edge ang natitira, at walang body na maidadagdag. Isara ang mga butas sa programang gumawa ng mesh, o i-export muli ito bilang saradong (watertight) mesh, at buksan muli.

Iniiwan ng PartCraft ang butas kapag maaaring magkamali ang pagpuno: malaking baluktot na butas, o dalawang butas sa iisang eroplano (nawawalang ring-shaped na face, kung saan tatakpan ng pagpuno ng bawat hangganan ang butas sa gitna). Iniuulat din ang edge na pinagsasaluhan ng higit sa dalawang tatsulok: ang ganoong surface ay walang malinaw na loob.

## Mag-sketch sa mga flat na face

Ang mga flat na lugar na gawa sa maraming tatsulok ay pinagsasama bawat isa sa isang **flat face**, para may maisketch-an: i-click ang face at piliin ang {{ui:Sketch sa face na ito}}. Nananatiling face ang face na pinutulan o dinagdagan pagkatapos. Nananatiling tatsulok ang bilog na lugar (butas, fillet): hindi sila mga face na mapipili, at iginuguhit ng view ang kanilang outline mula sa anggulo sa pagitan ng mga tatsulok.

## Baguhin pagkatapos

Piliin ang **Imported1** para makita ang file kung saan ito galing, ilang tatsulok ang mayroon ito, at ano ang inayos. Maaaring baguhin dito ang **Units in the file**, **Up in the file** at **Use it to**; bawat pagbabago ay isang hakbang ng undo.

## Saan ito itinatago

Ang inayos na mesh ay nakaimbak **sa loob** ng `.partcraft.json` file, kaya hindi mo na kailangan ang mesh file muli. Ang part file na may mesh body ay version 5: tinatanggihan ito ng mas lumang PartCraft ayon sa bersyon nito. Ang mesh na 200,000 tatsulok ay nagdaragdag ng humigit-kumulang 1.2 MB.

## Mga limitasyon

- Hanggang 3 milyong tatsulok at 200 MB sa isang file.
- Binubuo ng mesh kernel ang body na gawa sa mesh. Kapag naka-on ang exact kernel (para lamang sa developers), sinasabi nito iyon at hindi ito binubuo.
- Naiiwan ang OBJ materials, texture coordinates at free-form curves; naiiwan ang 3MF colors, materials at support objects (sinasabi ng dialog kung ilang object ang nilaktawan).
- Kasing-pino ng mesh ang body: ang magaspang na STL ay nagbibigay ng magaspang na round na face. Kasing-bilog ng sarili mong feature ang mga butas na ibubutas mo rito.
