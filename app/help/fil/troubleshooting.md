---
title: Pag-troubleshoot
summary: Mga problemang maaari mong makaharap sa PartCraft, mula sa app na hindi nagsisimula hanggang sa mga feature na pumapalya, mga sketch na hindi malutas, mga file na hindi mabuksan at mga joint na kumikilos nang mali, kasama ang mensaheng makikita mo at ang ayos.
keywords: problema, error, tulong, hindi gumagana, pumapalya, crash, blangko, webgl, webassembly, kernel, hindi pa nabubuo, over defined, open profile, hindi mabuksan, walang nangyayari, maling direksyon, mabagal
from: 7728542c
---

Kapag may hindi gumagana, basahin muna ang **status bar** sa ibaba: sinasabi roon ng PartCraft kung bakit ito tumanggi o kung ano ang inaasahan nito sa susunod. Nagpapakita rin ng mensahe nito ang feature na pumapalya, sa itaas ng kanang panel nito, at kapag itinuro mo ang row nito sa history.

## Hindi nagsisimula ang app

### "Hindi kayang ipakita ng browser na ito ang 3D (naka-off o nawawala ang WebGL), kaya hindi tatakbo rito ang PartCraft."

**Sanhi:** naka-off, naharangan, o hindi suportado ng graphics driver ang 3D graphics (WebGL) ng browser.

**Ayos:**

:::chromium
Buksan ang `chrome://settings/system` (o `edge://settings/system` sa Edge) at i-on ang "Use graphics acceleration when available", saka i-restart ang browser. Kung naka-on na ito, tingnan ang `chrome://gpu` para sa status ng WebGL, at i-update ang graphics driver.
:::

:::firefox
Buksan ang `about:support` at tingnan ang Graphics, WebGL. Kung naharangan ito, i-update ang graphics driver. Sa `about:config`, dapat `false` ang `webgl.disabled`.
:::

:::safari
Laging naka-on ang WebGL sa kasalukuyang Safari. I-update ang macOS (kasabay nitong nag-a-update ang Safari). Kung pumapalya pa rin, subukan ang Chrome o Firefox sa parehong Mac para maalis ang graphics hardware bilang sanhi.
:::

Ang remote desktop at ilang virtual machine ay walang WebGL. Subukan sa mismong computer.

### "Hindi na-load ang solid kernel: …"

**Sanhi:** hindi nakuha o hindi nasimulan ang geometry kernel (isang WebAssembly program). Kadalasan, naputol ang koneksyon habang naglo-load ang app, naka-off ang WebAssembly ng patakaran ng kumpanya o setting ng seguridad ng browser, o napakaluma ng browser.

**Ayos:** i-reload ang page habang online. Kung palaging pumapalya, subukan ang ibang kasalukuyang browser. Sa Firefox, dapat `true` ang `javascript.options.wasm` sa `about:config`. Kapag offline, mao-load lang ang app at ang kernel nito kung sinabi ng app bar na **Offline ready** bago ka nawalan ng koneksyon ({{ui:Save for offline}} habang online; tingnan ang [Working offline](common:offline)).

### Sinasabi ng offline button na "Hindi ma-save" o "Hindi available ang offline"

**Hindi ma-save**: may ilang file na hindi na-download. I-click ito para subukan ulit habang online; maaaring kailangan ng pangalawang subok ng mabagal o metered na koneksyon. **Hindi available ang offline**: hindi kayang magtago ng offline na kopya ng window ng browser na ito (hinaharangan ito ng private windows at ilang managed computer). Gumamit ng normal na window, o panatilihing bukas ang tab.

### Offline ang PartCraft pero luma na

I-click ang **Offline ready** habang online at piliin ang {{ui:Save again (get the newest version)}}.

### "Sweep: not built yet. It needs an exact kernel, …"

Buong mensahe: "<Name>: hindi pa nabubuo. Kailangan nito ng exact kernel, na wala sa bersyong ito ng PartCraft. Sinasabi ng Tulong › What is not built yet kung ano ang gagawin sa halip." Makikita mo ito kapag pinili mo ang Sweep, Loft, Rib, sheet metal flange, surface feature, Combine, Move body, Scale body o Path pattern, at para sa iba pang bagay na kailangan lang ng exact kernel. Walang problema sa browser o sa piyesa mo: bawat piyesa ay ginagawa ng mesh kernel sa bersyong ito ng PartCraft. Tingnan ang [What is not built yet](topic:not-built-yet) para sa gagawin sa halip, at ang [The mesh kernel](topic:solid-kernels).

### "Loading the solid kernel…" ay hindi nawawala

Maghintay nang kaunti sa mabagal na koneksyon: dina-download ang kernel at ang 3D library sa unang pagkakataon. Pagkatapos, i-reload. Kung ang mismong page ang nagpapakita ng error, tingnan ang nasa itaas.

## Walang nangyayari kapag pumindot ako ng key

- Hindi gumagana ang mga key kapag nasa loob ng kahon sa panel ang cursor. I-click ang 3D view o pindutin ang {{key:Esc}} pagkatapos mag-type (o {{key:Tab}} para lumabas).
- Pinaiikot at ina-zoom lang ng arrow keys at ng {{key:Plus}}/{{key:Minus}} ang view pagkatapos mong mag-click sa view.
- May bukas na dialog: sagutin muna ito.
- Sa sketch, ang {{key:F}} ay ang Fillet tool, hindi Fit. Gamitin ang {{ui:Fit}} button.

## Naka-grey ang button sa toolbar

- Naka-grey ang mga feature button habang may bukas na sketch. Isara muna ang sketch.
- Gumagana lang sa loob ng sketch ang mga sketch tool.
- Naka-grey ang {{ui:Undo}} at {{ui:Redo}} kapag walang maaaring i-undo o i-redo.
- Kailangan ng {{ui:Assembly}} ang piyesang may solid. Kailangan ng {{ui:Joint}} ang dalawang piyesa sa assembly. Kailangan ng {{ui:Edit part}} ang napiling piyesa.
- Naka-grey ang {{ui:STEP AP242 (exact solid)}} at {{ui:STEP AP214 (exact solid)}} sa assembly: i-export ang bawat piyesa. Tumatanggi ang ibang program sa exact na file: subukan ang {{ui:STEP AP214 (exact solid)}}, saka {{ui:STEP (faceted, mesh kernel)}}, at sabihin sa amin sa pamamagitan ng {{ui:Tulong}} › {{ui:Mag-ulat ng problema}}.
- Hindi naka-grey ang {{ui:Sweep}}, {{ui:Loft}} at iba pang feature na kailangan ng exact kernel: nananatili silang mapipindot, nagtatapos ang tooltip nila sa "hindi pa nabubuo (kailangan ng exact kernel)", at kapag na-click ang isa, sinasabi ito ng status bar. Tingnan ang [What is not built yet](topic:not-built-yet).
- Kailangan ng {{ui:Drawing}} ang piyesang may solid, at naka-grey ito habang may bukas na sketch.
- Naka-grey ang mga item ng {{ui:Export}} sa assembly: hindi pa maaaring i-export ang mga assembly. Isara ito, o i-edit ang piyesa, para mag-export.

## Mga problema sa sketch

### Hindi ako pinapayagan ng sketch na magdagdag ng relation

"Walang relation na akma sa pagpiling ito. Pumili ng isa o dalawang item (nagdadagdag ang Shift+click)." Ibang pagpili ang kailangan ng relation. Tingnan ang [Sketch relations and dimensions](topic:sketch-relations) para sa kailangan ng bawat isa.

### "Over defined: … cannot all be met. Undo, or delete one of them."

**Sanhi:** sumasalungat ang bagong relation o dimensyon sa mga nandoon na. Hindi gumalaw ang sketch.

**Ayos:** {{key:Mod+Z}}, o burahin ang isa sa mga pulang item sa listahan ng kanang panel (piliin ang **Delete** sa tabi nito).

### "Over defined: … is already implied. Delete it."

**Sanhi:** walang naidaragdag ang relation: may iba nang nagpipilit nito (halimbawa Parallel sa dalawang gilid ng rectangle, o dimensyong naayos na). Walang driven dimensions sa build na ito.

**Ayos:** burahin ito. Bubuuin pa rin ang feature, na may babala.

### "Those items cannot be dimensioned together."

Nag-click ka, halimbawa, ng punto at bilog. I-dimension sa center point ng bilog sa halip.

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

I-click nang eksakto ang punto ng sulok ng dalawang solid na linya. Gumamit ng mas maliit na radius kaysa pinapayagan ng mas maikling linya.

### Bumabalik ang geometry kapag dinadrag ko ito

Sisirain ng drag ang isang relation o dimensyon, kaya ibinabalik ito ng PartCraft. Ang asul (under defined) na geometry lang ang maaaring galawin.

### "This sketch cannot open: Needs Extrude2, which is failing."

Nasa face ng feature na hindi nabuo ang sketch. Ayusin muna ang feature na iyon, o i-unsuppress ito, o mag-roll forward.

## Mga problema sa feature

| Mensahe | Sanhi | Ayos |
|---|---|---|
| "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit." | Walang hindi nagamit na sketch na may kurba, at walang napili | Gumuhit ng sketch, o piliin ang sketch na gagamitin sa history |
| "The sketch has no closed profile to extrude." (o "to revolve") | Walang closed loop ng solid na linya | Isara ang mga puwang; ibalik ang construction lines gamit ang {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | May puwang sa puntong iyon | Buksan ang sketch, i-drag ang dulo sa katabi nito para mag-snap |
| "The profile branches at (x, y): more than two ends meet there." | Tatlo o higit pang linya ang nagtatagpo sa isang punto | Burahin ang dagdag na linya, o gawin itong construction |
| "A closed loop needs at least three sides or a curve." | Dalawang linyang paulit-ulit | Iguhit muli ang loop |
| "Through all is for cuts. Use a depth for a boss." | Boss na nakatakda sa Through all | Itakda ang End sa Blind o Mid-plane |
| "There is nothing to cut on that side of the sketch. Try the other direction." | Tumuturo ang cut palayo sa material | Lagyan ng tsek ang Reverse direction |
| "There is nothing to cut yet." / "There is nothing to drill yet." | Walang solid bago ang feature na ito | Gumawa muna ng boss, o ilipat pababa ang feature |
| "Draw a centerline (a construction line) in the sketch to revolve about." | Revolve na walang axis | Magdagdag ng centerline, o pumili ng linya sa Axis |
| "The profile crosses the axis. Keep it on one side of the centerline." | Profile sa magkabilang gilid ng axis | Iguhit muli ang kalahati ng profile |
| "Put sketch points where the holes go (Point tool), then make the hole." | Walang maluwag na punto sa sketch | Magdagdag ng punto gamit ang {{key:P}} |
| "The counterbore must be wider than the hole." | Hindi mas malaki ang counterbore ⌀ kaysa Diameter | Gawing mas malapad ang counterbore |
| "The counterbore must be shallower than the hole." | Mas malalim ang counterbore kaysa blind hole | Gawing mas mababaw, o mas malalim ang hole |
| "Choose the features to copy." | Pattern o mirror na walang tsek | Lagyan ng tsek ang feature sa ilalim ng Features to copy |
| "Extrude2 has no solid to copy." | Pumalya o naka-off ang kinopyang feature | Ayusin o i-unsuppress ito |
| "Needs Sketch3, which is failing." | Hindi nabuo ang feature na kailangan nito | Ayusin ang feature na binanggit |
| "The face it sits on is gone (Extrude1 is not built)." | Wala na ang face ng sketch | Ayusin ang feature na iyon, o burahin ang sketch at gumuhit ulit |
| "Nothing is left of the part after this." | Inalis ng isang cut ang lahat ng material | Suriin ang laki at direksyon ng cut |
| "The solid kernel could not build this (…)." o "The solid kernel could not combine this with the body." | Tinanggihan ng kernel ang geometry | I-undo, o bahagyang baguhin ang mga laki; maaaring dahil dito ang mga face na eksaktong nagdidikit |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (pati Loft, Rib at iba pa) | Feature na ginawa sa naunang build na kayang buuin lang ng exact kernel. Nananatili ito sa history at ibinabalik nang hindi nagbabago kapag na-save | I-suppress o burahin; tingnan ang [What is not built yet](topic:not-built-yet) para sa gagawin sa halip |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | Masyadong malaki ang laki para sa face na katabi ng gilid, o hindi mapagsasama ang sulok | Mas maliit na laki, o mas kaunting gilid bawat feature |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (pati Chamfer) | Bilog ang napiling edge, gaya ng gilid ng hole, o nasa curved face | {{ui:Pick edges}} at alisin ito; i-round o i-bevel ang sulok na iyon sa sketch |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | Naka-tsek ang **Variable radius** | Alisin ang tsek at magbigay ng isang radius |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠, babala) | Nagtatagpo ang mga napiling edge sa sulok; nagtatagpo ang mga round doon bilang matalas na crease | Walang kailangang ayusin: nabuo na ang piyesa. Mag-fillet ng mas kaunting edge kung mahalaga ang crease |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Inalis ng naunang pagbabago ang edge | {{ui:Pick edges}}, alisin ang pulang edge, piliin ang bago |
| "Pick the edges in the view, then add them." | Walang edge ang fillet o chamfer | {{ui:Pick edges}} |
| "Pick the faces to remove (open), then shell." | Walang bukas na face ang shell | {{ui:Pick faces}} |
| "The shell could not be made with this thickness (…)." | Mas makapal ang pader kaysa manipis na bahagi ng modelo o radius ng fillet | Mas manipis na pader, o mas malalaking fillet |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Curved ang bukas na face | {{ui:Pick faces}} at alisin ito; buksan lang ang mga flat face |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | Cylinder, cone o freeform face ang naka-draft na face | Alisin ito; i-draft lang ang mga flat face |
| "A face it opens is gone (…)." | Inalis ng naunang pagbabago ang face | {{ui:Pick faces}} muli |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Kinokopya ng pattern o mirror ang fillet, chamfer o shell | Alisin ang tsek; i-pattern muna ang mga cut, saka fillet |
| "It sits on a face only an exact kernel can find: not built yet in this version." | Sketch sa face na hindi mahanap ng mesh kernel, gaya ng nagawa sa naunang build | Mag-sketch sa base plane o flat face ng extrude, at iposisyon ito gamit ang dimensyon |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | Reference plane, axis o punto sa face o edge ng solid | Gawin ito mula sa base planes, sketch points o coordinates sa halip |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | End condition o taper na kayang buuin lang ng exact kernel | Gumamit ng Blind o Mid-plane depth na sinukat mo; panatilihing 0 ang Taper |

## Mga problema sa pagpili

- "Curved ang face na iyon. Pumili ng flat face o plane para mag-sketch." Kailangan ng sketch ng flat face. Mag-sketch sa base plane at iposisyon ang sketch gamit ang dimensyon sa halip.
- Nagsasabing "Fixed where picked" ang isang face: hindi ito ginawa ng sketch edge (halimbawa face ng kinopyang pattern), kaya mananatili sa lugar ang sketch dito kapag nagbago ang piyesa.
- Mahirap tamaan ang mga edge: mag-zoom in. Nananalo ang edge sa katabing face kapag nasa mismo itong ibabaw ng pointer.

## Mga problema sa file

| Mensahe | Ayos |
|---|---|
| 'Bubuksan ng PartCraft ang sarili nitong .partcraft.json files, mga export mula sa CadCraft macro para sa SolidWorks (.cadcraft-sw.json) at mga STEP file. Ang "bracket.igs" ay wala sa mga ito.' | Tanging ang mga iyon ang kinikilala (at STL, OBJ at 3MF mesh, at `.3dm` files) |
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | Hindi STEP text ang file |
| "That STEP file is too big (over 60 MB) to import here." | Pasimplehin ito sa pinagmulan |
| "That file is too big to be a PartCraft part." sa sarili mong na-save na piyesa | Malaking STEP solid na na-import sa naunang build ang nagpalaki sa part file lampas 50 MB. Gumamit ng mas lumang kopyang walang ito |
| "That file is too big to be a PartCraft part." | Lampas 50 MB ang file; hindi ito PartCraft file |
| "This is not a PartCraft file (it is not JSON)." / "This is not a PartCraft file." | Sira ang file o file ng ibang program |
| "This file was saved by a newer PartCraft (file version …); this one reads version …" | Buksan ito sa mas bagong PartCraft |
| "Extrude2: the depth is bad." (o ibang value) | Na-edit nang mano-mano o nasira ang file. Gumamit ng mas lumang kopya |
| Insert sa assembly ay nagsasabing "Part1.partcraft.json has no solid to insert." | Walang solid ang part file. Buksan ito, gumawa ng solid, i-save, at i-insert ulit |

**Wala sa inaasahan kong lugar ang na-save kong file.** Ang pag-save ay isang download: hanapin sa downloads folder ng browser, o buksan ang downloads list mula sa toolbar ng browser. Tingnan ang [Where your files go](common:your-files).

**Binuksan ko ang piyesa pero nasa screen pa rin ang assembly.** Na-load ang piyesa sa likod ng assembly. Piliin ang {{ui:Close}} para isara ang assembly at makita ang piyesa. Isara ang mga assembly bago magbukas ng part file.

## Mga problema sa drawing

| Mensahe | Ayos |
|---|---|
| "Build a solid first, then make its drawing." | Gawin muna ang piyesa |
| "No room on the sheet for: detail. Make the detail smaller or drop a view." | Mas maliit na **Detail radius** o **Detail scale**, o alisin ang section |
| "A detail is taken from the front, top, right or section view." | I-click sa isa sa mga view na iyon |
| "Click on one of the views." | Nasa walang lamang papel ang click |
| "Position needs at least one datum reference." at iba pang mensahe ng frame | Itakda ang mga datum na hinihingi ng panel, o pumili ng ibang characteristic |
| "The drawing views could not be made: …" | I-undo ang huling pagbabago. Kung paulit-ulit ito, i-save, i-reload at buksan muli ang piyesa |

## Mga problema sa assembly

| Mensahe | Ayos |
|---|---|
| "Build a solid first, then put it into an assembly." | Wala pang solid ang piyesa |
| "Insert a second part first (Add copy, Insert, or Edit › Duplicate)." | Dalawang piyesa ang kailangan ng joint |
| "Pick a face on a different part." | Dapat nasa magkaibang piyesa ang dalawang face ng joint |
| "That face is curved. Pick a flat face …" | Nagsisimula ang joint sa flat faces. Gamitin pagkatapos ang **Centre on** para sa hole o revolve axis |
| "Bracket2 is not joined to the grounded part, so it stays where it was put." | Magdagdag ng joint mula rito papunta sa piyesang nakalagay na |
| "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints." | Hindi kayang magtagpo ng lahat ng piyesa: suriin ang haba, ang face na ginagamit ng bawat joint, offsets (dapat magkasundo sa lalim ang mga piyesang magkapatong nang face sa face) at limits; o alisin ang isang joint ng loop |
| "The face this joint uses is gone from Bracket." / "The axis this joint uses is gone from Bracket." | Na-edit ang piyesa. Alisin ang joint at gawin itong muli |
| "The axis runs along the face, so it cannot set the joint's centre." | Pumili ng axis na tumatawid sa face, o "The face's own origin" |
| "An assembly keeps at least one part. Close it instead." | Gamitin ang {{ui:Close}} |

**Magkakabit ang mga piyesa pero nasa maling lugar.** Itakda ang **Centre on** para sa parehong panig ng joint sa hole o revolve axes na dapat magkatugma, saka isaayos ang **Angle (°)** at **Offset (mm)**.

## Mabagal

- Itakda ang **Curves** sa Normal o Coarse habang nagmo-model; lumipat sa Fine bago mag-export.
- Ang malalaking bilang ng pattern (daan-daang kopya) ay tumatagal i-rebuild sa bawat pagbabago. I-suppress ang pattern habang gumagawa sa ibang feature.
- Ang Clash at motion check ay naghahambing ng bawat pares ng piyesa; mas matagal ito sa malalaking assembly.
- Isara ang ibang mabibigat na tab. Tumatakbo ang PartCraft sa processor at graphics ng sarili mong computer.

## Hindi pa rin malutas

I-save muna ang file mo ({{key:Mod+S}}), saka i-reload ang page at buksan muli. Kung pumapalya pa rin ang feature, piliin ito, basahin ang mensahe nito, at subukan ang {{key:Mod+Z}} pabalik sa huling maayos na estado.
