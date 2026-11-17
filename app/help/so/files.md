---
title: Faylalka: fur, kaydi iyo dhoof
summary: Faylalka qaybta iyo isku-dhisnaha ee PartCraft furo oo kaydiyo, dhoofin kasta iyo waxa uu hayo, meesha faylalku tagaan, iyo waxa isbeddela marka aan khadka lagu jirin ama browser-ka kala duwan.
keywords: fur, kaydi, dhoofi, soo deji, fayl, partcraft.json, faylka isku-dhisnaha, stl, 3mf, step, dxf, pdf, faylalkaygu meeyaan yihiin, khadka ka baxsan, kaydi sida
from: e5fbc7e3
---

PartCraft wuxuu ka shaqeeyaa faylalka kombiyuutarkaaga. Qayb ma soo gudbiyo, akoon ma jiro, kaydinta gudaha ma jirto. Kaydinta cloud weli ma diyaar.

## Waxa PartCraft furo

| Faylka | Kordhinta | Sidee |
|---|---|---|
| Qayb PartCraft | `.partcraft.json` | {{ui:Fur}}, {{key:Mod+O}}, ama dhig dhinaca 3D |
| Isku-dhisnaha PartCraft | `.partcraft-asm.json` | Isla sidaas: PartCraft wuu ogaadaa nooca |
| STEP solid | `.step`, `.stp` | Jidh adag oo loo akhriyo saddex-geesood: [Fur faylka STEP oo ku dhis](topic:import-step) |

Faylalka STL, OBJ iyo 3MF waxay sidoo kale furmaan sida jidhadka adag ([Fur STL, OBJ ama 3MF](topic:open-meshes)), oo sidaas oo kale faylalka `.3dm` ([Fur moodel .3dm](topic:open-3dm-files)). DXF, IGES iyo faylalka qaybaha barnaamijyada kale lama furi karo (eeg [Waxa weli aan la dhisin](topic:not-built-yet)).

Xeerarka markii la furayo:

- Magaca faylka qaybta ama isku-dhisnaha waa inuu ku dhammaadaa `.json`, faylkuna waa inuu ka yaraado 50 MB.
- Faylalka waa la hubiyaa ka hor inta aan wax la muujin. Fayl dhacay ama la tafatiray waa la diidaa, sabab fudud oo lagu sheegay, tusaale ahaan "This is not a PartCraft file."
- Fayl ka yimid PartCraft cusub waa la diidaa: "This file was saved by a newer PartCraft (file version 3); this one reads version 2." Faylalka hore way furmaan.
- Haddii qaybta shaashadda ku jirta ay leedahay isbeddello aan la kaydin, PartCraft wuu marka hore weydiiyaa: {{ui:Jooji}}, {{ui:Iska tir isbeddellada}} ama {{ui:Marka hore kaydi}}.

## Kaydinta

{{ui:Kaydi}} ama {{key:Mod+S}} wuxuu kaydiyaa waxa shaashadda ku jira:

- Qayb ahaan: `<part name>.partcraft.json`, taariikhda oo dhan (sawir-gacmeedyada, xiriirada, cabbirrada, features, booska rollback-ka), qoraallada qaybta naqshadda, faahfaahinta iyo GD&T, iyo qoraalka oo dhan ee STEP solid kasta oo dhisme hore laga soo dhoofiyay. Features-ka nooca hadda aan dhisi karin ayaa lagu kaydiyaa siduu yahay. Jidhka ma kaydsana; PartCraft wuu dib u dhisaa taariikhda marka faylku furmo.
- Isku-dhisnaha: `<assembly name>.partcraft-asm.json`, oo **qayb kasta ku jirta gudaheeda**. Hal fayl ayaa qaadaya isku-dhisnaha oo dhan, sidaas darteed waad u diri kartaa keligiis.

Kaydintu waa **soo dejin**. Browser-kaagu wuxuu faylka u dhigaa folder-ka soo dejinta, ama wuxuu weydiin karaa meesha la geeyo haddii aad u dejiso inuu weydiiyo. Mar kale kaydinta waxay samaysaa soo dejin cusub; browser-ku wuxuu magaca u bedeli karaa `Part1 (1).partcraft.json` halkii uu ku beddeli lahaa kii hore. Magacyada ama meesha faylalka ku dhaqaaqi {{pick:mac=Finder|windows=File Explorer|linux=maareeyaha faylalkaaga}} sida aad rabto.

Magaca qaybta xarfaha aan ahayn xarfo, tiro, space, `_`, `.` iyo `-` waxay noqdaan `_` magaca faylka.

:::tip
Browser-ka badankiis wuxuu leeyahay dejin weydiiso meesha loo kaydinayo soo dejin kasta: hagaaji haddii aad rabto doorashada "Save as" mar kasta: Chrome iyo Edge waxay ku jirtaa Downloads settings-ka; Firefox General, Files and Applications; Safari General, File download location.
:::

Wax dheeraad ah oo ku saabsan meesha soo dejintu tagto iyo sida faylalkaaga loo ilaaliyo: [Meesha faylalkaagu tagaan](common:your-files).

## Dhoofinta

Menu-ka {{ui:Dhoofi}} wuxuu qoraa qaababka kale. Mid kasta waa soo dejin, magaceeda waxaa lagu magacaabaa qaybta.

| Waxa menu-ka ku jira | Faylka | Waxa ku jira |
|---|---|---|
| {{ui:STL, daabacaadda 3D}} | `<name>.stl` | STL binary oo saddex-geesoodka jidhka, millimitir, **Z sare** |
| {{ui:3MF, daabacaadda 3D}} | `<name>.3mf` | 3MF oo jidhka ku jira hal object, millimitir, **Z sare** |
| {{ui:STEP AP242 (jidh adag oo saxda ah)}} | `<name>.step` | Hal jidh adag oo saxda ah, millimitir, Z sare: wejiyada wareegsan sida silinder, koonn, kubbad iyo torus oo run ah. STEP-ka loo isticmaalo barnaamijyada CAD iyo CAM kale |
| {{ui:STEP AP214 (jidh adag oo saxda ah)}} | `<name>.step` | Isla jidhka adag ee saxda ah schema-ga hore AP214 |
| {{ui:STEP (fasedyo, kernel-ka mesh)}} | `<name>.step` | Jidh ka samaysan wejiyo toosan oo mesh-ka ka yimid: **wejiyada wareegsan waa facets yar yar**. Millimitir, axes-ka PartCraft (Y sare). Barnaamij diida faylka saxda ah |
| {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}} | `<name> - <sketch>.dxf` ama `<name> - face.dxf` | DXF R12. Sawir-gacmeed: xariiqyo, qaansooyin, goobo iyo barar isku-xirnaanta sawir-gacmeedka, oo ku jira layers PROFILE, CONSTRUCTION iyo POINTS. Wejig toosan la doortay: qaabkiisa oo polyline xidhan (geesaha wareegsan sida facets) |
| {{ui:Naqshad (PDF): muuqaallada, qaybta, faahfaahinta, GD&T}} | `<name> - drawing.pdf` | Xaashida naqshadda A3: saddex muuqaal, isometric, qaybta iyo faahfaahinta haddii la dejiyo, cabbirrada guud, calaamadaha GD&T, blokka cinwaanka |

:::note
{{ui:STEP AP242 (jidh adag oo saxda ah)}} wuxuu qoraa godad, bosses, fillets, koonno, kubbado iyo torusyo wejigooda run ah, si barnaamij kale u dooran karo god sida silinder; **Qalloocyada** ma beddelayso. Geesaha spline-ka, xarka la moodeelay iyo meshes-ka la soo dhoofiyay ma leeyihiin wejig saxda ah oo waxay ku sii jiraan facets isla jidhka; xaaladda xagga hoose waxay tirinaysaa. {{ui:STEP (fasedyo, kernel-ka mesh)}} wuxuu qoraa wejiyada wareegsan oo dhan sida facets.
:::

- Dhoofinta waa qaybta shaashadda ku jirta. Dhoofintu waa la damiyay isku-dhisnaha; ma jiro dhoofin isku-dhisnaha weli.
- STL, 3MF, STEP-ka facet iyo DXF-ka wejiga had iyo jeer waxay ka samaysan yihiin facets. Dejinta **Qalloocyada** (panelka midig marka waxba la dooran) ayaa go'aaminta inta ay fiican yihiin, 32 ilaa 256 facet wareeg kasta. Dooro Fiican ama Aad u fiican ka hor inta aadan dhoofin STL ama 3MF si uu daabacaadu u siman yahay.
- Naqshadda PDF waxay isticmaashaa font-ka Helvetica ee akhriyuhu ku dhex jiro. Xarfaha aan muuqan karin waxay daabacaan "?".

Tallaab tallaab: [Dhoofinta daabacaadda, STEP iyo DXF](topic:export-files) iyo [Samee xaashi naqshad](topic:drawing-pdf).

## Shaqada aan la kaydin

- PartCraft wuxuu hayaa nuqul soo kabasho ah oo qaybta ama isku-dhisnaha furan browser-kan wakhti yar kadib isbeddel kasta, sidaas darteed crash ama tab la xidhay shaqada ma lumiyo: markii dambe ee aad furto PartCraft wuxuu weydiinayaa "Recover your work?". Taasi ma aha kaydin: ku kaydi fayl si aad shaqadaadu u ilaaliso. Eeg [Soo kabso shaqada aan la kaydin](common:recover).
- Haddii aad isku dayayso inaad tab-ka xidho ama dib u soo rogto isbeddello aan la kaydin, browser-ku wuxuu weydiinayaa "Leave site?". Taasi waa sanduuqa browser-ka laftiisa; PartCraft ma beddeli karo qoraalkiisa.
- {{ui:Cusub}}, {{ui:Fur}} iyo xidhida isku-dhisnaha waxay weydiiyaan ka hor intaysan tirtirin isbeddellada aan la kaydin.

## Online iyo offline

Waxa oo dhan kombiyuutarkaaga ayay ka dhacaan: mesh kernel-ka (barnaamij WebAssembly ah) waxa lagu soo dejiyaa app-ka oo geometry-ga wuxuu dhisaa kombiyuutarkaaga, faylalkana waxaa laga akhriyaa oo lagu qoraa diskkaaga. Xog qaybeed ma marto shabakadda. Eeg [Mesh kernel-ka](topic:solid-kernels).

Si aad u shaqeyso xidhiidh la'aan, kaydi PartCraft si loo isticmaalo offline markaad online tahay: dooro {{ui:Kaydi khadka ka baxsan}} app bar-ka oo sug inta ay tirinayso ("Saving 40 of 212") ilaa ay tidhi **Offline ready**. Nuqulka la kaydiyay wuxuu ku jiraa maktabadda 3D iyo mesh kernel-ka, sidaas darteed kadibna modeling, kaydinta, dhoofinta oo dhan iyo naqshadaha oo dhan way shaqeeyaan offline. Haddii ay tidhi **Could not save**, guji si aad mar kale isku daydo markaad online tahay; **Offline not available** macnaheedu waa daaqadan browser-ka ma kaydin karto nuqul (daaqadaha gaarka ah iyo kombiyuutarrada la maamulo qaarkood). Nuqulka la kaydiyay markaad guujiso **Offline ready**, wuxuu soo bandhigaa {{ui:Mar kale kaydi (hel nooca ugu dambeeya)}} iyo {{ui:Ka saar nuqulka khadka ka baxsan}}. Faahfaahin: [Shaqada offline](common:offline).

:::online
Waad online tahay. Xitaa haddii aanad kaydin offline isticmaalka, markii PartCraft uu soo dejiyo oo status bar chip-ku yidhi "Mesh kernel", wali waad shaqayn kartaa xidhiidhku haddii uu go'o. Bogga ha dib u soo rogin ilaa aad mar kale online tahay.
:::

:::offline
Waad offline tahay. Haddii PartCraft hore loo furay, wali shaqayn kartaa; kaydinta iyo dhoofintu weli way shaqeeyaan. Haddii app bar-ku yidhi **Offline ready**, PartCraft wuxuu sidoo kale bilaabmaa xidhiidh la'aan; haddii kale ha dib u soo rogin tab-kan.
:::

## Browser-yada kala duwan

- **Soo dejinta.** Browser kasta wuxuu leeyahay folder soo dejin gaar ah iyo habkiisa weydiinta. Haddii browser-ku weydiiyo inuu site-kani soo dejin karo faylal, oggolow, haddii kale kaydinta iyo dhoofintu ma shaqayn karaan.
- **Jiid oo dhig** fayl dhinaca muuqaalka wuxuu shaqeeyaa Chrome, Edge, Firefox iyo Safari.
- **Faylalka telefoon ama tablet-ka.** iPhone iyo iPad, Fur wuxuu muujiyaa app-ka Files; faylalka la kaydiyay waxay tagaan Files, Downloads. Android, waxay tagaan folder-ka Downloads.

Browser-yada ama nidaamyada hawlgalka kala duwan, waxa faylalku ka kooban yihiin isma duwana.
