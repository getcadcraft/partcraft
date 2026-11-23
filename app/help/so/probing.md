---
title: Baadhis: hel qaybta oo deji kala-saarka shaqada
summary: Taabo wejig sare, dhinac, god ama boss oo leh probe, oo u ogolow kontoroolka inuu u wareejiyo kala-saarka shaqada meesha qaybtu si dhab ah u taal, ama kaliya cabbir. Waxa kontoroolkasta uu samayn karo, iyo waxa aan wali la caddeynin.
keywords: probe, probing, touch probe, touch off, work offset, g54, g31, g38.2, skip, datum, find centre, bore, boss, edge, set zero, measure, inspection, g10
from: 1f718b82
---

{{ui:Probe}} oo ku jira Wax soo saarka wuxuu barnaamijka ku qoraa wareeg baadhis: probe-ku qaybta taabta, kontoroolkuna wuxuu wareejiyaa kala-saarka shaqada (G54) farqiga u dhexeeya meesha dusha laga helay iyo meesha uu moodeelku yiraahdo waa. Howlgallada dambe waxay jari doonaan meesha qaybtu si dhab ah u taal.

**Waxan lama wada wareegin mashiin.** Dhaqdhaqaaqyada ka hor taabashada waa dhaqdhaqaaqyo caadi ah: probe-ka lama eegin ilaa dhaqdhaqaaqa baadhista laftiisa. Si tartiib ah u socodsii, hawada marka hore, gacantaaguna ha ku taalo feed hold.

## Adeegso

1. Tab-ka **Tools** howlgalka baadhista ee koowaad wuxuu ku daraa **touch probe**: dhexroorka kubbadda iyo quudinta baadhista (100 mm/min haddii aadan dejin mid).
2. Riix {{ui:More}} qalab-sanduuqa Wax soo saarka, kadibna {{ui:Probe}}, oo guji waxa la taabanayo. Mid kasta oo doorasho ah waa hal wareeg, marka ay tahay dalabka aad guujisay:

| Dooro | Wareegga | Waxa la dejiyo |
|---|---|---|
| Wejig sinaan ah oo u eeg tiirka qalabka sare | Hal taabasho oo hoos u socota | Z |
| Dhinac sinaan ah oo toosan X ama Y | Hal taabasho oo ku socota wejiga, shay yar oo ka hooseeya sareeda | X ama Y |
| God ama boss oo u socda tiirka qalabka | Afar taabasho (+X, −X, +Y, −Y) | X iyo Y ee dhexda |

3. **Natiijada**: {{ui:Set the work offset}} ama {{ui:Measure only}}.
4. **Ka bilow fogaanshahan** iyo **Ka raadi fogaanshahan dhinaca ka dambeeya** waa intee le'eg ayuu dhaqdhaqaaqa baadhistu uga bilaabmayo wejigii la filayay, iyo intee le'eg ayuu probe-ku u socon karaa ka dib markii uu ka gudbo, ka hor intaysan kontoroolku dhicin. **Qoto-dheer** waa intee le'eg ayuu kubbaddu ka hooseeyaa sareeda godka, boss-ka ama dhinaca wejiga.

Howlgalka baadhista hore u dhig, ka hor inta aan wax la jarin.

## Waxa kontoroolkasta qoro

| Kontoroolka | Taabasho | Natiijada |
|---|---|---|
| Fanuc-style | `G31`, booska lagu hayo `#101` ilaa `#104` | Doorsoomayaasha offset-ka (`#5221` ilaa `#5223`) waa la wareejiyaa farqiga laga helay − la filayay. Cabbir oo keliya: farqiga waxa lagu hayaa `#110` (iyo `#111`). |
| LinuxCNC | `G38.2`, booska lagu hayo halbeegyo magac leh | `G10 L2 P1` oo leh offset-ka cusub. Cabbir oo keliya: fariin `(DEBUG, …)`. |
| GRBL | `G38.2` | Hal taabasho ayaa tiirka dejisa oo leh `G10 L20 P1`. GRBL ma leh doorsoomayaal, sidaas darteed **ma xisaabin karo dhexda**: faylku wuxuu sheegaa taas hal faallo ah, wax ma dejiyo. |

Xisaabta waa tan post-ka, sidaas darteed waad beddeli kartaa: dhacdooyinka ah `probe-move` iyo `probe-set` ([Post processors you can edit](topic:post-processors)).

## Xaddidaadaha

- Hal kala-saar shaqo (G54). Wejiyada toosan tiirarka oo keliya: ma jiro xagal, ma jiro wareeg geeska, ma jiro leexin shaqada.
- Ma jiro tool setter, ma jiro ogaanshaha qalabka jabay, ma jiro cabbir cabbirka tolerance-ka, ma jiro warbixin.
- Spindle-ka looma bilaabo probe-ka, coolant-ku wuu damaan yahay; ma jiro wax hubinaya in qalabka spindle-ka ku jira uu yahay probe.
- Simulasho agabka ma socodsiiso waddada baadhista.
- Calibration-ka probe-ka (kubbadda offset, stylus deflection, jihada trigger) waa kan kontoroolka.
