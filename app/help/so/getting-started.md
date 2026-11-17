---
title: Bilow PartCraft
summary: Waxa PartCraft-ku hadda sameeyo, waxa browser-kaagu u baahan yahay, iyo qayb hore oo daqiiqado toban ah, laga bilaabo sketch ilaa fayl la kaydiyay.
keywords: bilow, ku bilow, bilaabid, hordhac, casharka, qaybta ugu horreysa, saxan, parametric, qaybta modeler
from: 7d43283f
---

PartCraft waa app-ka qaybta parametric-ka iyo isku-dhiska ee qoyska CadCraft. Waxaad sawirtaa sketch 2D, waxaad ku xidhaa xidhiidh iyo cabbirro, waxaad u beddeshaa jidh adag feature-yo sida extrude, revolve iyo hole, waxaadna bedeli kartaa tiro kasta markasta: qaybtu waxay dib u dhisaa taariikhdeeda. Qaybaha ka dib waxay galaan isku-dhiska (assemblies), halkaas oo joints ay meeshooda geliyaan oo ay kuu ogolaadaan inaad hubiso dhaqdhaqaaqa.

Waxa dhismahan hadda sameeya:

| Shaqada | Waxa aad heleysid |
|---|---|
| Sketches | Xariiqyo, laabyo, goobo, qaloocyo, barooyin iyo xariiqyo dhexe, oo leh xidhiidh iyo cabbirro, iyo xaalad toos ah: hoos, buuxa ama ka badan go'an |
| Solid features | Extrude, cut, revolve, revolved cut, godad fudud iyo kuwa counterbore ah, qaabab toos ah iyo wareeg, mirror, fillet iyo chamfer geesaha toosan ee u dhexeeya dusha siman, iyo shell iyo draft dusha siman. Sweep, loft iyo feature-yada kale ee u baahan kernel saxda ah weli lama dhisin nooca hadda: eeg [Waxa aan wali la dhisin](topic:not-built-yet) |
| History | Tafatir tirooyinka feature kasta, dami, dib u celi, dib u dalbo iyo tirtir, oo leh undo |
| Assemblies | Qaybo ku xidhan rigid, revolute iyo slider joints, hubin isku dhac iyo hubin dhaqdhaqaaq |
| Drawings | Sheet A3 oo leh saddex muuqaal, isometric, qayb (section), muuqaal faahfaahin, cabbirrada guud, datums, feature control frames iyo calaamadaha dhammaystirka dusha, oo loo dhoofiyay PDF |
| Files | Faylalkeeda qaybta iyo isku-dhiska; soo dhoofinta STL, 3MF, STEP saxda ah, DXF iyo PDF |

Wax walba browser-kaaga ayay ku shaqeeyaan, kombuyuutarkaaga. **Waxba lama soo dirin.** Eeg [Faylalka: fur, kaydi iyo dhoofi](topic:files) si aad u ogaato halka faylalku tagaan.

## Waxa aad u baahan tahay

- Chrome, Edge, Firefox ama Safari oo casri ah oo leh **WebGL** (grafikada 3D) iyo **WebAssembly** la shido. Labaduba way shidan yihiin caadi ahaan. Kernel-ka adagga waxaa dhisa WebAssembly mesh kernel oo app-ka la soo rarto: eeg [Mesh kernel-ka](topic:solid-kernels).
- Mouse-ka ayaa ugu fudud. Trackpad-ku wuu shaqeeyaa, shaashadaha taabashada ayaa u shaqeeya muuqaalka iyo sketch-ka fudud: eeg [Trackpad, taabasho iyo shaashadaha yaryar](topic:trackpad-and-touch).
- Shaashad ugu yaraan 1280 pixel ballac ah ayaa muujinaysa toolbar-ka oo dhan hal safar. Daaqadaha ka yar waxay toolbar-ka u rogaan dhinac; telefoonka, panelada waxay u furmaan sida xaashi bar hoose ka bilaabanaya.

Wixii ku saabsan browser-yada: [Browsers iyo kombuyuutarrada](common:browsers).

:::note
PartCraft wuxuu ku shaqeeyaa browser-ka, iyo desktop-ka gudaha CadCraft Studio. Kaydinta daruurta weli ma diyaar aha: fayl-ka kumbuyuutarkaaga ayaad ka furtaa qaybaha, oona ku kaydisaa sida faylal.
:::

## Fur PartCraft

1. Fur PartCraft.
2. Sug inta shaashaddu tidhi "Kernel-ka adagga ayaa la soo rarayaa…". Tani waxay qaadataa wakhti marka ugu horreysa.
3. Waxaad aragtaa muuqaal 3D oo madhan oo leh saddex diyaarad oo salka ah, taariikhda bidix ("Part1", kadibna Front plane, Top plane, Right plane) iyo sanduuq muuqaalka ku qoran "Start a part".
4. Chip-ka ku yaal dhamaadka midig ee status bar-ka wuxuu leeyahay "Mesh kernel": PartCraft wuxuu qayb kasta ku dhisaa mesh kernel nooca hadda, sidaas darteed wareegyada dusha waa dhaqaaqyo laga dhigay. Waad bilaabi kartaa naqshadeynta isla markiiba.

Haddii muuqaalku sheego in browser-ku aanu 3D tusi karin, ama kernel-ku soo rarmin, eeg [Dhibaatooyinka](topic:troubleshooting#the-app-does-not-start).

## Qaybtaadii ugu horreysay: saxan leh god

Waxaad samayn doontaa saxan 60 × 40 mm ah, dhumuc 10 mm ah, leh god 6 mm ah oo dhex mara. Unugyadu waa millimeter.

### Sketch-garee qaabka

1. Dhagsii **Front plane** taariikhda bidix. Diyaaraddu waa la iftiimiyaa muuqaalka.
2. Dooro {{ui:Sketch}} toolbar-ka, ama riix {{key:S}}. Muuqaalku wuxuu u jeedaa diyaaraddii toos, qalabka Line ayaa firfircoon.
3. Riix {{key:R}} si aad u isticmaasho qalabka Rectangle.
4. Dhaqdhaqaaq taxanaha xagga asalka (goobta cas ee yar ee jaranjarada leh). Laba jaad oo yar ayaa tilmaamaya inuu ku dhejiyo. Dhagsii.
5. Kor u dhaqaaq oo midig u dhaqaaq, markaas mar kale dhagsii. Waxaad heshay laaban. Xariiqyadiisu waa buluug: buluug macnaheedu waa inay weli dhaqaaqi karaan.

### Siiso cabbirro

1. Riix {{key:D}} si aad u isticmaasho qalabka Dimension.
2. Dhagsii xariiqda sare, kadibna dhagsii wax yar oo ka sarreeya. Sanduuq tiro ayaa furmaya oo muujinaya dhererka hadda.
3. Qor `60` kadibna riix {{key:Enter}}. Laabyadu waxay noqotaa 60 mm ballac.
4. Dhagsii xariiqda bidix, kadibna dhagsii wax yar oo bidix ah. Qor `40` kadibna riix {{key:Enter}}.

Chip-ka geeska sare ee bidix ee muuqaalka hadda wuxuu leeyahay **Fully defined** xariiqyadana waxay noqdaan ink (madow theme-ka Paper, cad theme-ka Model). Dhammaan barooyinka iyo cabbirrada way go'an yihiin.

:::tip
Haddii aad laabta ka bilaabatay meel ka fog asalka, chip-ku wuu sii sheegi doonaa "Under defined · 2 degrees of freedom". Riix {{key:S}} si aad u dooratid Select, dhagsii hal geeso, {{key:Shift}}+dhagsii asalka, kadibna dooro {{ui:• Coincident}} panelka midig. Lacaggaa: "• Isku-meel".
:::

### Soo saar

1. Dooro {{ui:Exit}} toolbar-ka, ama riix {{key:Esc}} ilaa sketch-ku xirmo (badanaa laba jeer).
2. Dooro {{ui:Extrude}}. Jidh adag oo 10 mm ah ayaa soo muuqda. "Extrude1" wuxuu ku daraa taariikhda, "Sketch1" ayaa hoos ka soo gashay.
3. Panelka midig wuxuu muujinayaa dejinta extrude-ka. Si aad u beddesho dhumucda, qor tiro cusub sanduuqa **Depth (mm)** kadibna riix {{key:Enter}} ama {{key:Tab}}. Qaybtu isla markiiba dib ayay u dhismaysaa.

### Ku dar godka

1. Dhagsii dusha siman ee weyn ee hore ee saxanka (dhamaadka extrusion-ka). Dusha oo dhan ayaa iftiimaya, panelka midig wuxuu leeyahay **Face**.
2. Dooro {{ui:Sketch on this face}} panelka midig.
3. Riix {{key:P}} si aad u isticmaasho qalabka Point, kadibna dhagsii meel u dhow bartamaha dusha.
4. Dooro {{ui:Exit}}.
5. Dooro {{ui:Hole}}. God 6 mm ah ayaa saxanka dhex mara. Haddii aad rabto, beddel **Diameter (mm)** panelka midig.

Sanduuqa **Part** ee bidix hoose hadda wuxuu akhrinayaa mugga, balaadhka dusha, cabbirka (60 × 40 × 10 mm) iyo "Through holes: 1".

### Kaydi

1. Riix {{key:Mod+S}} ama dooro {{ui:Save}}.
2. Browser-kaagu wuxuu soo dejinayaa `Part1.partcraft.json` meeshii download-yada ku jirto. Faylku wuxuu haysaa taariikhda oo dhan: mar kale fur {{ui:Open}} si aad u sii tafatirto.

Si aad marka hore magaca qaybta u beddesho, dhagsii meel bannaan muuqaalka si aan wax loo dooran, kadibna qor **Name** cusub panelka midig.

## Meesha aad u tagi karto marka xigta

- [Sketch-kaaga ugu horreeya sawir](topic:sketch-basics) iyo [Sketch si buuxa u go'ay](topic:relations-dimensions) waxay si habboon u sharxayaan sketcher-ka.
- [Beddel qayb taariikhdeeda](topic:edit-history) wuxuu tusayaa sida aad wax u tafatirto.
- [Wareeg, jar iyo qodi](topic:fillet-chamfer-shell) iyo [Samee sawir](topic:drawing-pdf) ayaa dhammeeya qaybta. [Waxa aan wali la dhisin](topic:not-built-yet) wuxuu liistaa waxa nooca hadda aan samayn, sida sweeps iyo lofts.
- [Ka timaada naqshadeeye parametric kale](topic:coming-from) wuxuu liistaa caadooyinka halkan si kale u shaqeeya.
- [Furayaasha iyo mouse-ka](topic:keyboard) waa liiska oo dhan ee shortcut-yada.
- [Isticmaalka bogan](common:help).
