---
title: Wareeg, bevel iyo god-god oo leh Fillet, Chamfer iyo Shell
summary: Dooro geesaha oo ku dar fillet-yo radius joogto ah ama radius-ka kala duwan, iyo chamfer-yo masaafo siman, laba masaafo ama masaafo-xagal ah; qaybta ku god sameey Shell adigoo dooranaya wejiyada la furayo, beddel geesaha ama wejiyada uu feature-ku isticmaalo, oo hagaaji waxyaabaha caadiga ah ee fashilma.
keywords: fillet, wareeg, blend, chamfer, bevel, shell, god, darbi, wejiyada, geesaha, dooro geesaha, shift click, wejig furan, kernel saxda ah, mesh kernel, lama dhisin
from: e41c1c12
---

:::note
**Nooca hadda** PartCraft wuxuu fillet-yada iyo chamfer-yada ku dhisaa mesh kernel-ka, kaliya **geesaha toosan ee u dhexeeya laba wejood oo toosan**: geesaha sanduuqa iyo geesaha toosan ee extrudes iyo cuts, geesaha dibadda ama gudaha (geesta gudaha waxay agab ku daraysaa). Geesaha wareegsan sida geesaha god-ka, iyo radius-ka oo ku beddelma geesta, weli lama dhisin. Halka laba geesood oo wareegsan ay kulmaan geesta, wareegyada waa la gees-jarayaa (waxay kulmaan dhab siman oo kalsoon), ma aha la isku daro. **Shell** wuxuu sidoo kale shaqeeyaa, waxaa dhisa mesh kernel-ka: wuxuu furaa wejiyada toosan oo keliya, shell-yada oo leh qaro kala duwan oo darbiyada ah weli lama dhisin, waxayna gaabisaa qaybaha leh wejiyo wareegsan badan. Eeg [Waxa weli aan la dhisin](topic:not-built-yet).
:::

{{ui:Fillet}} wuxuu geesaha wareejiyaa, {{ui:Chamfer}} wuxuu bevel sameeyaa, {{ui:Shell}} wuxuu qaybta god-geeyaa. Saddexdaba waxay ku shaqeeyaan geesaha iyo wejiyada jidhka, waxaana dhisa mesh kernel-ka. Wareegyadooda waa faceted sida wejiyada wareegsan oo dhan (**Qalloocyada** ayaa go'aaminaya inta ay fiican tahay); wejiyada wareegsan waa silinder aad dooran karto oo cabbiri karto (eeg [Mesh kernel-ka](topic:solid-kernels)).

## Fillet ama chamfer geesaha

### Marka hore geesaha dooro

1. Guji geesta qaybta. Geesta oo dhan ayaa iftiimaa, panelka midig wuxuu leeyahay **Edge**: nooceeda (Straight, Circle ama arc, Curve), dhererka iyo wejiyada ay u dhexeeyaan.
2. Si aad geesaha dheeraad ah u dartid, {{key:Shift}}+guji. Mid kasta waa la calaamadeeyaa; {{key:Shift}}+guji geesta calaamadeysan si aad uga saarto. Madaxa panelku wuu tiriyaa ("4 edges"), statusbar-kuna wuxuu tidhi "4 edges picked. Fillet or Chamfer rounds them; Shift+click picks more, Esc clears."
3. Dooro {{ui:Fillet}} ama {{ui:Chamfer}} toolbar-ka, ama badhamada isla markaana panelka midig.

Feature-ka waxaa lagu daraa dhammaan geesaha la doortay: wareeg 2 mm ah, ama chamfer 1 mm ah. Statusbar-ku wuxuu tidhi, tusaale ahaan, "Fillet1 added (4 edges). Change its size on the right; Pick edges changes which."

### Ama marka hore feature-ka ku dar

1. Iyada oo aan wax la doorannin, dooro {{ui:Fillet}} ama {{ui:Chamfer}}.
2. PartCraft wuxuu galaa xaalada dooranta: madaxa panelka midig wuxuu leeyahay "Fillet1: picking", qaybtu waxay u muuqataa sidii ay ahayd ka hor fillet-ka (panelku taas ayuu sheegaa), toolbar-kuna wuxuu tusaa {{ui:Dhammaystir}}.
3. Guji geesta kasta si aad u daartid; mar kale guji si aad uga saarto. Statusbar-ku wuu tiriyaa.
4. Dooro {{ui:Dhammaystir}} (ama {{ui:Done}} panelka), ama taabo {{key:Esc}} ama {{key:Enter}}.

### Dejinta

| Dejinta | Fillet | Chamfer |
|---|---|---|
| Cabbirka | **Radius (mm)**, caadi 2 | **Distance (mm)** oo ka fogaansho geesta labada wejig, caadi 1 |
| **Edges** | Immisa | Immisa |

Liiska hoose wuxuu magacaabaa geesta kasta iyada oo loo eego labada wejig ee ay isku xirto, sida "Edge 1: Extrude1 end face × Extrude1 side". **Remove** wuxuu mid ka saaraa. {{ui:Dooro geesaha}} wuxuu dib ugu celiyaa xaalada dooranta. Laba-jeer guji feature-ka taariikhda wuxuu sameeyaa isla sidaas.

Geesaha waxaa lagu xusaa labada wejig ee ay isku xirto, sidaas darteed way ku sii jiraan geesta saxda ah markaad beddesho cabbir hore taariikhda.

### Radius kala duwan iyo noocyada chamfer

- **Variable radius** (fillet): weli lama dhisin nooca hadda ("A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius."). Kernel saxda ah leh: calaamadee oo deji **End radius (mm)**. Radius-ku wuxuu si toosan u beddelmaa **Radius** hal dhamaadka geesta ilaa **End radius** dhamaadka kale; **Swap the ends** wuu rogaa.
- **Type** (chamfer): **Equal distance**, **Two distances** (**Second distance** wejiga kale) ama **Distance and angle** (masaafada hal wejig, bevel-ka **Angle (°)** wejigaas). **Flip sides** wuxuu masaafada koowaad saaraa wejiga kale.

## Shell qaybta

1. Guji wejiga toosan ee la furayo, tusaale ahaan sare ee sanduuq. Ama {{key:Shift}}+guji wejigyo dhowr ah.
2. Dooro {{ui:Shell}} toolbar-ka, ama {{ui:Shell, wejigan oo furan}} panelka wejigga.

Qaybtu waxay noqotaa darbi 2 mm ah oo wejiyada la doortay ay furan yihiin. Dejinta:

| Dejinta | Waxa uu sameeyaa | Caadi |
|---|---|---|
| **Wall (mm)** | Dhumucda darbiga | 2 |
| **Walls grow outward (the faces stay inside)** | Calaamadeysan: darbiyada dibadda ayay ku daraan, sidaas darteed gudaha cabbirka qaybta ayuu hayaa | Off: darbiyadu gudaha ayay u galaan, dibadduna cabbirkeeda ayay hayaan |
| **Open faces** | Immisa wejig ayaa la saaray | |

Gudaha, darbiyadu waa dhumucda darbiga oo saxan: geesaha dibadda ee joogtada ahi way sharaxaaddaan, geesaha gudaha ayaa wareegsan (radius = darbiga), godka qaybta dhex mara wuxuu helaa tuubo darbi ah. Dibadda, darbiyadu waxay ku daraan dibadda dusha asalka ah, kaas oo noqda godka, geesaha dibadda ayaa wareegsan. Wejiyada gudaha waxaa loo magacaabaa wejigyada ay ka soo jeediyeen, sidaas darteed waad dooran kartaa.

Wejiyada wareegsan lama furi karo: haddii la doorto mid wareegsan, waxa la sheegaa "Shell: in this version it opens flat faces only (the mesh kernel builds it)." Shell-ka qaybaha leh wejiyo wareegsan badan wuu gaabiyaa (dhowr ilbiriqsi kun kasta oo saddex-geesood): isticmaal **Qalloocyada** qaro weyn inta aad naqshadeynayso.

{{ui:Dooro wejiyada}} wuxuu beddelaa wejiyada furan, si la mid ah geesaha la doortay. Liiska wuxuu magacaabaa mid kasta, tusaale ahaan "Face 1: Extrude1 end face". Shell aan wejig furan lahayn lama oggolaan karo: "Pick the faces to remove (open), then shell."

## Dalabka ayaa muhiim ah

Features-ka waxay u dhismaan sare ilaa hoos. Fillet ka hor shell waxaa lagu shell-gaa qaybta, sidaas darteed dhinaca gudaha sidoo kale wuxuu helaa geesaha wareegsan. Fillet ka dib shell wuxuu wareejiyaa kaliya geesaha aad doorato. Features-ka u dhaqaaji {{ui:Kor u dhaqaaq}} iyo {{ui:Hoos u dhaqaaq}} (eeg [Beddel qaybta taariikhdeeda](topic:edit-history)).

Patterns iyo mirrors ma koobiyeyn karaan fillet, chamfer ama shell: "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Marka hore pattern-garee godadka ama goyaha, kadibna fillet-garee dhammaan geesaha nuqullada hal fillet.

## Marka fashilmo

| Fariinta | Waxa la sameeyo |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | Isticmaal radius ka yar, ama fillet geesaha yar mar; dhowr feature oo fillet ah, kan ugu yar dambe |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Isbeddel hore ayaa geesta saartay. Dooro {{ui:Dooro geesaha}}, ka saar geesta casaan oo dooro mid cusub |
| "The shell could not be made with this thickness (…)." | Darbiga ayaa ka qaro weyn qayb yar oo moodelka ah, ama radius-ka fillet-ka. Darbiga ka dhig mid yar, ama fillet-yada ka weyn darbiga |
| "That face has no name the history can follow; pick another." | Dooro wejig feature sameeyay (inta badan wejiyada waa sidaas) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (sidoo kale Chamfer) | Geesta la doortay waa wareegsan, sida god-ka, ama waxay ku taal wejig wareegsan. Ka saar adigoo isticmaalaya {{ui:Dooro geesaha}}, oo wareeg ama bevel geesta sawir-gacmeedka ku samee |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | Ka saar calaamada **Variable radius** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ taariikhda) | Digniin, khalad ma aha: qaybtu waa la dhisay. Geesaha la doortay waxay kulmaan geesta, wareegyadu halkaas waxay kulmaan dhab siman. Fillet geesaha yar, ama aqbal dhabta |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Wejigga furan wareegsan ayuu yahay. {{ui:Dooro wejiyada}} oo ka saar; furo wejiyada toosan oo keliya |

## Xaddidaadyada

Nooca hadda fillet-yada iyo chamfer-yada waxay shaqeeyaan kaliya geesaha toosan ee u dhexeeya laba wejig oo toosan, oo leh hal radius, wareegyada kulmaya geesta waa la gees-jarayaa. Shell-yadu waxay furaan wejiyada toosan oo keliya. Kernel saxda ah leh, fillet kala duwan wuxuu si toosan ugu beddelmaa geesta kasta (hal qaanuun feature kasta; radius lama dejiyo barar dhex geesta). Wejiyada fillet-ka, fillet-ka oo dhan iyo shell-yada oo leh darbiyo kala duwan weli lama dhisin.
