---
title: Bilugan, pahiwain at gawing guwang gamit ang Fillet, Chamfer at Shell
summary: Pumili ng mga edge at magdagdag ng fillet na may pare-parehong radius o nagbabagong radius, at chamfer na pantay, may dalawang distansya o distansya at anggulo; gawing guwang ang piyesa gamit ang Shell sa pamamagitan ng pagpili ng mga face na bubuksan, baguhin kung aling edge o face ang ginagamit ng isang feature, at ayusin ang mga karaniwang pagkabigo.
keywords: fillet, round, blend, chamfer, bevel, shell, guwang, kapal ng pader, edges, faces, pumili ng edge, shift click, bukas na face, eksaktong kernel, mesh kernel, hindi pa nagagawa
from: e41c1c12
---

:::note
**Sa bersyong ito** ginagawa ng PartCraft ang fillet at chamfer gamit ang mesh kernel, sa **tuwid na edge sa pagitan ng dalawang flat face** lang: mga gilid ng kahon at ang tuwid na edge ng extrude at cut, panlabas o panloob na sulok (ang panloob na sulok ay nagdaragdag ng materyal). Hindi pa nagagawa ang mga bilog na edge tulad ng gilid ng butas, at ang radius na nagbabago sa kahabaan ng edge. Kapag nagtagpo ang dalawang bilog na edge sa sulok, ang mga bilog ay mitred (nagtatagpo sa matalas na tupi), hindi pinaghalo. Gumagana rin ang **Shell**, na ginawa ng mesh kernel: bumubukas ito ng flat face lang, hindi pa nagagawa ang mga shell na may magkakaibang kapal ng pader, at mabagal ito sa mga piyesang maraming bilog na face. Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
:::

{{ui:Fillet}} ay nagbibilog ng edge, ang {{ui:Chamfer}} ay nagpapahiwa sa mga ito, at ang {{ui:Shell}} ay ginagawang guwang ang piyesa. Gumagana ang lahat ng tatlo sa edge at face ng solid, at ginawa ng mesh kernel. Ang kanilang mga bilog ay facet, tulad ng bawat bilog na face (itinatakda ng **Curves** kung gaano kapino); ang mga bilog na face ay mga silindro na maaari mong piliin at sukatin (tingnan ang [The mesh kernel](topic:solid-kernels)).

## Mag-fillet o chamfer ng mga edge

### Pumili muna ng mga edge

1. I-click ang isang edge ng piyesa. Mai-highlight ang buong edge, at sasabihin ng right panel ang **Edge**: uri nito (Straight, Circle o arc, Curve), haba at ang mga face na pinagitnaan nito.
2. Para magdagdag ng mas maraming edge, {{key:Shift}}+click ang mga ito. Bawat isa ay mamarkahan; {{key:Shift}}+click ang nakamarkang edge para alisin ito. Binibilang ng heading ng panel ang mga ito ("4 na edge"), at sinasabi ng status bar: "4 na edge ang napili. Fillet o Chamfer ang magbibilog sa mga ito; Shift+click para pumili pa, Esc para burahin ang pagpili."
3. Piliin ang {{ui:Fillet}} o {{ui:Chamfer}} sa toolbar, o ang parehong button sa right panel.

Idinadagdag ang feature kasama ang lahat ng napiling edge: bilog na 2 mm, o chamfer na 1 mm. Sinasabi ng status bar, halimbawa, "Naidagdag ang Fillet1 (4 na edge). Baguhin ang laki nito sa kanan; binabago ng Pumili ng mga edge kung alin ang mga ito."

### O idagdag muna ang feature

1. Nang walang napiling edge, piliin ang {{ui:Fillet}} o {{ui:Chamfer}}.
2. Papasok ang PartCraft sa pagpili: sinasabi ng heading ng right panel na "Fillet1: pumipili", ipinapakita ng piyesa ang anyo nito bago ang fillet (sinasabi ito ng panel), at ipinapakita ng toolbar ang {{ui:Done}}.
3. I-click ang bawat edge para idagdag ito; i-click ulit para alisin. Binibilang ito ng status bar.
4. Piliin ang {{ui:Done}} (o {{ui:Done picking}} sa panel), o pindutin ang {{key:Esc}} o {{key:Enter}}.

### Mga setting

| Setting | Fillet | Chamfer |
|---|---|---|
| Size | **Radius (mm)**, default 2 | **Distance (mm)** pabalik mula sa edge sa parehong face, default 1 |
| **Edges** | Ilan | Ilan |

Ang listahan sa ibaba ay nagpapangalan sa bawat edge ayon sa dalawang face na nagdurugtong nito, gaya ng "Edge 1: Extrude1 end face × Extrude1 side". Inaalis ng **Remove** ang isa. Bumabalik sa pagpili ang {{ui:Pick edges}}. Ang pag-double-click sa feature sa history ay gumagawa ng pareho.

Naaalala ang mga edge ayon sa dalawang face na nagdurugtong sa mga ito, kaya nananatili ang mga ito sa tamang edge kapag binago mo ang isang dimension sa itaas sa history.

### Variable fillet at mga uri ng chamfer

- **Variable radius** (fillet): hindi pa nagagawa sa bersyong ito ("Fillet na nagbabago ang radius sa kahabaan ng edge: hindi pa nagagawa (kailangan nito ng eksaktong kernel). Bigyan ito ng isang radius."). Kapag may eksaktong kernel: lagyan ng tsek at itakda ang **End radius (mm)**. Unti-unting nagbabago ang radius mula **Radius** sa isang dulo ng bawat edge hanggang **End radius** sa kabila; binabaligtad ito ng **Swap the ends**.
- **Type** (chamfer): **Equal distance**, **Two distances** (isang **Second distance** sa kabilang face) o **Distance and angle** (ang distansya sa isang face, ang bevel sa **Angle (°)** sa face na iyon). Inilalagay ng **Flip sides** ang unang distansya sa kabilang face.

## Mag-shell ng piyesa

1. I-click ang flat face na iiwang bukas, halimbawa ang itaas ng kahon. O {{key:Shift}}+click ang ilang face.
2. Piliin ang {{ui:Shell}} sa toolbar, o ang {{ui:Shell, opening this face}} sa panel ng face.

Nagiging pader na 2 mm ang piyesa na may nakabukas na napiling face. Mga setting:

| Setting | Ano ang ginagawa nito | Default |
|---|---|---|
| **Wall (mm)** | Ang kapal ng pader | 2 |
| **Walls grow outward (the faces stay inside)** | Naka-tsek: idinadagdag ang mga pader sa labas, kaya nananatili sa loob ang laki ng piyesa | Off: papasok ang mga pader at nananatili ang laki sa labas |
| **Open faces** | Ilan ang face na aalisin | |

Papasok, eksaktong kapal ng pader ang mga pader: nananatiling matalas ang panlabas na sulok, nagiging bilog ang panloob na sulok (radius = ang pader), at ang butas na dumadaan sa piyesa ay nagkakaroon ng tubong pader sa paligid nito. Palabas, idinadagdag ang mga pader sa labas ng orihinal na surface, na nagiging guwang, at nagiging bilog ang panlabas na gilid. Ipinapangalan ang mga panloob na face ayon sa mga face na inoffset ng mga ito, kaya maaari mo itong piliin.

Mga flat face lang ang maaaring buksan: kapag pumili ka ng hubog, sasabihin: "Shell: sa bersyong ito, flat face lang ang nabubuksan (ginagawa ito ng mesh kernel)." Mabagal ang shell sa mga piyesang maraming bilog na face (ilang segundo bawat libong triangle): gumamit ng mas magaspang na setting na **Curves** habang nagdidisenyo.

{{ui:Pick faces}} ay binabago kung aling mga face ang bukas, sa parehong paraan ng pagpili ng edge. Ipinapangalan ng listahan ang bawat isa, gaya ng "Face 1: Extrude1 end face". Hindi pinapayagan ang shell na walang bukas na face: "Pumili ng mga face na aalisin (bukas), pagkatapos i-shell."

## Mahalaga ang pagkakasunod

Binubuo ang mga feature mula itaas pababa. Ang fillet bago ang shell ay ii-shell kasama ng piyesa, kaya bibilugan din ang mga sulok sa loob. Ang fillet pagkatapos ng shell ay bumibilog lang sa mga edge na pipiliin mo. Ilipat ang mga feature gamit ang {{ui:Move up}} at {{ui:Move down}} (tingnan ang [Baguhin ang piyesa sa pamamagitan ng history nito](topic:edit-history)).

Hindi makokopya ng pattern at mirror ang fillet, chamfer o shell: "Binabago ng Fillet1 ang mga edge o pader ng katawan; hindi ito makokopya. Kopyahin ang mga feature na gumagawa ng solid (extrude, revolve, hole, import)." I-pattern muna ang mga butas o cut, pagkatapos i-fillet ang lahat ng edge ng mga kopya sa iisang fillet.

## Kapag pumalya

| Mensahe | Ano ang gagawin |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | Hindi kasya rito ang bilog na 5 mm (masyadong malaki para sa face na katabi ng isa sa mga edge, o nagtatagpo ang mga edge sa sulok na hindi kayang paghaluin ng kernel). Gumamit ng mas maliit na radius, o mag-fillet ng mas kaunting edge nang sabay-sabay (ilang fillet feature, ang pinakamaliit ang huli) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Nawala ang edge na binibilugan nito: ang edge sa pagitan ng Extrude1 at Cut2. Inalis ng naunang pagbabago ang edge na iyon. Piliin ang {{ui:Pick edges}}, alisin ang pulang edge at pumili ng bago |
| "The shell could not be made with this thickness (…)." | Hindi magawa ang shell sa kapal na ito (…). Mas makapal ang pader kaysa sa makitid na bahagi ng modelo, o kaysa sa radius ng fillet. Gawing mas manipis ang pader, o gawing mas malaki ang mga fillet kaysa sa pader |
| "That face has no name the history can follow; pick another." | Walang pangalan ang face na iyon na masusundan ng history; pumili ng iba. Pumili ng face na ginawa ng isang feature (karamihan ng face ay ganoon) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (pati Chamfer) | Bilog ang napiling edge, tulad ng gilid ng butas, o nasa hubog na face. Alisin ito gamit ang {{ui:Pick edges}}, at bilugan o pahiwain ang sulok na iyon sa sketch |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | Alisin ang tsek sa **Variable radius** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ sa history) | Babala, hindi error: nabuo na ang piyesa. Nagtatagpo ang mga napiling edge sa sulok, at nagtatagpo doon ang mga bilog sa matalas na tupi. Mag-fillet ng mas kaunting edge, o tanggapin ang tupi |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Hubog ang bukas na face. Piliin ang {{ui:Pick faces}} at alisin ito; buksan lang ang mga flat face |

## Mga limitasyon

Sa bersyong ito, ang fillet at chamfer ay gumagana lang sa tuwid na edge sa pagitan ng dalawang flat face, na may iisang radius, at ang mga bilog na nagtatagpo sa sulok ay mitred. Ang shell ay bumubukas ng flat face lang. Kapag may eksaktong kernel, ang variable fillet ay unti-unting nagbabago sa kahabaan ng bawat edge (isang batas bawat feature; walang radius na nakatakda sa mga punto sa kahabaan nito). Hindi pa nagagawa ang face fillet, full-round fillet at shell na may magkakaibang kapal ng pader.
