---
title: Faylasha: fur, kaydi iyo dhoofi
summary: Faylasha qaybta iyo isku-dhiska ee PartCraft furi karo oo kaydin karo, dhammaan qaababka dhoofinta iyo waxa ay haysaa, meelaha faylashu ku tagaan, iyo waxa isbedela markii khadka ka baxsan la shaqeynayo ama browser-yada dhexdooda.
keywords: fur, kaydi, dhoofi, soo dejiso, fayl, partcraft.json, fayl isku-dhis, stl, 3mf, step, dxf, pdf, faylashaydu halkee ku jiraan, khadka ka baxsan, u kaydi sida
from: c15c2c48
---

PartCraft wuxuu ku shaqeeyaa faylal ku yaal kombiyutarkaaga. Qayb ma soo dira abid, akoon ma leh, kaydna daruur ma ku lahan. Kaydinta daruurta weli ma diyaar aha.

## Waxa PartCraft furi karo

| Fayl | Kordhinta | Sidee |
|---|---|---|
| Qayb PartCraft | `.partcraft.json` | {{ui:Fur}}, {{key:Mod+O}}, ama ku dhig muuqaalka 3D |
| Isku-dhis PartCraft | `.partcraft-asm.json` | Isla sidaas: PartCraft wuxuu ogaadaa nooca uu yahay |
| Jidh adag STEP | `.step`, `.stp` | Jidh adag oo loo akhriyo saddex-geesle: [Fur fayl STEP oo ku dhis](topic:import-step) |

Mashkiinnada STL, OBJ iyo 3MF sidoo kale waxay furmaan sida jidh adag ([Fur STL, OBJ ama 3MF](topic:open-meshes)), oo sidaas oo kale faylasha `.3dm` ([Fur moodeel .3dm](topic:open-3dm-files)). DXF, IGES iyo faylasha qaybta ee barnaamijyada kale lama furi karo (eeg [Waxa weli lama dhisin](topic:not-built-yet)).

Xeerarka markii la furayo:

- Magaca faylka qayb ama isku-dhis waa inuu ku dhammaado `.json`, faylkuna waa inuu ka yaraado 50 MB.
- Faylasha waa la hubiyaa ka hor inta aan wax la muujin. Fayl dhaawacan ama la beddelay waa la diidaa, iyadoo sabab fudud la sheegayo, tusaale ahaan "Tani ma aha fayl PartCraft ah."
- Fayl ay kaydisay PartCraft cusub waa la diidaa: "Faylkan waxaa kaydiyay PartCraft cusub (nooca faylka 3); kan waxa uu akhrinayaa nooca 2." Faylasha hore way furmaan.
- Haddii qaybta shaashadda ku jirta ay leedahay isbeddello aan la kaydin, PartCraft marka hore wuu weydiiyaa: {{ui:Jooji}}, {{ui:Iska tir isbeddellada}} ama {{ui:Marka hore kaydi}}.

## Kaydinta

{{ui:Kaydi}} ama {{key:Mod+S}} wuxuu kaydiyaa waxa shaashadda ku jira:

- Qayb: `<magaca qaybta>.partcraft.json`, taariikhda oo dhan (sawir-gacmeedyada, xidhiidhada, cabbiraadyada, astaamaha, meesha dib-u-celinta), qaybta, faahfaahinta iyo qoraallada GD&T ee xaashida naqshadda, iyo qoraalka oo dhan ee jidh adag STEP oo la soo dhoofiyay dhismihii hore. Astaamaha nooca tan aan dhisi karin waxa dib loo kaydiyaa iyadoo aan la beddelin. Jidh adagta laftiisa lama kaydiyo; PartCraft wuxuu ku dhisaa taariikhda markii faylka la furo.
- Isku-dhis: `<magaca isku-dhiska>.partcraft-asm.json`, oo leh **qayb kasta oo ku jirta**. Hal fayl ayaa qaadaya isku-dhiska oo dhan, sidaas darteed waad u diri kartaa keligiis.

Kaydintu waa **soo dejin**. Browser-kaagu faylka wuxuu geynayaa galkiisa soo dejinta, ama wuu weydiin doonaa meesha uu ku kaydiyo haddii aad u habaysay inuu weydiiyo. Mar kale kaydinta waxay samaysaa soo dejin cusub; browser-ku wuxuu magacaabi karaa `Part1 (1).partcraft.json` halkii uu ku beddeli lahaa kii hore. Magacyada ama goobaha faylasha ka beddel ama u guuri {{pick:mac=Finder|windows=File Explorer|linux=maamulaha faylalkaaga}} sida aad doonayso.

Xarfaha aan ahayn xarfo, lambaro, meel bannaan, `_`, `.` iyo `-` ee magaca qaybta waxay noqdaan `_` magaca faylka.

:::tip
Browser-yada badankood waxay leeyihiin dejin weydiisa meesha ay soo dejinta kasta ku kaydiyaan. Shid haddii aad rabto doorasho "U kaydi sida" mar kasta: Chrome iyo Edge waxay ku jirtaa dejinta Downloads; Firefox waxay ku jirtaa General, Files and Applications; Safari waxay ku jirtaa General, File download location.
:::

Wax dheeraad ah oo ku saabsan meelaha soo dejintu tagto iyo sida faylasha loo ilaaliyo: [Halkee faylashaadu tagaan](common:your-files).

## Dhoofinta

Liiska {{ui:Dhoofi}} wuxuu qoraa qaababka kale. Mid kastaa waa soo dejin, oo magaca qaybta ku salaysan.

| Shayga liiska | Fayl | Waxa ku jira |
|---|---|---|
| {{ui:STL, daabacaadda 3D}} | `<name>.stl` | STL binary ah oo saddex-geesleha jidh adagta ku jira, millimitir, **Z kor ayuu u taagan** |
| {{ui:3MF, daabacaadda 3D}} | `<name>.3mf` | 3MF oo jidh adagta hal shay ahaan ku jira, millimitir, **Z kor ayuu u taagan** |
| {{ui:STEP AP242 (jidh adag oo saxda ah)}} | `<name>.step` | Weli lama dhisin nooca tan (midabka ifka laga qaaday): waxay u baahan tahay kernel sax ah |
| {{ui:STEP AP214 (jidh adag oo saxda ah)}} | `<name>.step` | Weli lama dhisin nooca tan (midabka ifka laga qaaday) |
| {{ui:STEP (fasedyo, kernel-ka mesh)}} | `<name>.step` | Jidh adag oo ka samaysan dusha fidsan ee mesh-ka: **wareegyada waa dusha fidsan oo yaryar**. Millimitir, dhinacyada PartCraft u gaarka ah (Y kor). STEP-ka la isticmaalo barnaamijyada CAD kale nooca tan |
| {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}} | `<name> - <sketch>.dxf` ama `<name> - face.dxf` | DXF R12. Sawir-gacmeed: khadadka, qaansooyinka, goobooyinka iyo bararka oo ku jira nidaamkooda sawir-gacmeedka, layerrada PROFILE, CONSTRUCTION iyo POINTS. Dusha fidsan ee la doortay: khadadkeeda go'an oo ah polilayn go'an (geesaha wareegsan iyaga oo ah dusha yaryar) |
| {{ui:Naqshad (PDF): muuqaallada, qaybta, faahfaahinta, GD&T}} | `<name> - drawing.pdf` | Xaashida naqshadda A3: saddex muuqaal, isometric, qaybta iyo faahfaahinta haddii la dejiyo, cabbirrada guud, calaamadaha GD&T, iyo bloogga cinwaanka |

:::note
{{ui:STEP AP242 (jidh adag oo saxda ah)}} iyo {{ui:STEP AP214 (jidh adag oo saxda ah)}} weli lama dhisin nooca tan: isticmaal {{ui:STEP (fasedyo, kernel-ka mesh)}}. Waxay leedahay qaabka iyo mugga saxda ah, laakiin dusha wareegsan kasta waa dusha fidsan oo badan, sidaas darteed barnaamijyada kale ma dooran karaan god ahaan silinder. Haddii taasi muhiim tahay, marka hore **Qalooca** ka dhig mid aad u fiican.
:::

- Dhoofinta waxay ka timaadaa qaybta shaashadda ku jirta. Dhoofinta isku-dhiska waa la damiyay; weli ma jirto dhoofinta isku-dhiska.
- STL, 3MF, STEP-ka dusha fidsan iyo DXF-ka dusha had iyo jeer dusha fidsan ayay ka samaysan yihiin. Dejinta **Qalooca** (panelka midig marka aan wax la dooran) ayaa go'aamisa sida ay u fiican yihiin, 32 ilaa 256 dusha fidsan wareeg kasta. Dooro Fiican ama Aad u fiican ka hor inta aadan dhoofin STL ama 3MF si daabacaaddu u noqoto mid siman.
- Naqshadda PDF-ka waxay isticmaashaa foontiga Helvetica ee akhristaha ku jira. Xarfaha aan la muujin karin waxay ku daabacmaan "?".

Tallaabo tallaabo: [Dhoofi daabacaadda, STEP iyo DXF](topic:export-files) iyo [Samee xaashi naqshad](topic:drawing-pdf).

## Shaqada aan la kaydin

- PartCraft wuxuu browser-kan ku haynaa nuqul soo celin ah oo qaybta ama isku-dhiska furan, wax yar ka dib isbeddel kasta, si shil ama tab la xiray aanu shaqada u lumin: markii xigta ee aad PartCraft furto wuxuu weydiin doonaa "Ma soo celiyaa shaqadaada?". Taasi ma aha kaydin: u kaydi fayl si aad shaqadaada u ilaaliso. Eeg [Soo celi shaqada aan la kaydin](common:recover).
- Haddii aad isku daydo inaad tab-ka xirto ama dib u soo rogto isbeddello aan la kaydin, browser-ku wuxuu weydiin doonaa "Ka tag goobta?". Taasi waa sanduuqa browser-ka laftiisa; PartCraft ma beddeli karo qoraalkiisa.
- {{ui:Cusub}}, {{ui:Fur}} iyo xirista isku-dhiska waxay weydiiyaan ka hor inta aan isbeddello aan la kaydin la tirtirin.

## Khadka ku jira iyo khadka ka baxsan

Waxyaabaha oo dhan kombiyutarkaaga ayay ku dhacaan: mesh kernel-ka (barnaamij WebAssembly) app-ka ayaa lagu soo dejiyaa, geometry-ga meel ahaan ayuu ku dhisaa, faylashana waxa laga akhriyaa oo lagu qoraa diskkaaga. Xog qayb ah shabakad uma marto. Eeg [Mesh kernel-ka](topic:solid-kernels).

Si aad uga shaqeyso iyada oo aan xiriir lahayn, PartCraft u kaydi khadka ka baxsan intaad khadka ku jirtid: dooro {{ui:Kaydi khadka ka baxsan}} bar-ka app-ka oo sug inta ay tirinayso ("Kaydinta 40 ka mid ah 212") ilaa ay tidhi **Diyaar khadka ka baxsan**. Nuqulka la kaydiyay wuxuu ku jiraa maktabadda 3D iyo mesh kernel-ka, sidaas darteed ka dib nidaaminta, kaydinta, dhoofinta oo dhan iyo naqshadaha oo dhan khadka ka baxsan ayay shaqeeyaan. Haddii ay tidhi **Lama kaydin karo**, guji si aad mar kale ugu daydo intaad khadka ku jirtid. **Khadka ka baxsan lama heli karo** waxa uu macneeyaa daaqaddan browser-ka ma kaydin karto nuqul (daaqadaha gaarka ah iyo kombiyuutarada qaar oo la maamulo). Marka nuqulka la kaydiyo, markaad gujiso **Diyaar khadka ka baxsan** waxay soo bandhigtaa {{ui:Mar kale kaydi (hel nooca ugu dambeeya)}} iyo {{ui:Ka saar nuqulka khadka ka baxsan}}. Faahfaahin: [Shaqaynta khadka ka baxsan](common:offline).

:::online
Khadka ku jirtaa. Xitaa haddii aadan khadka ka baxsan u kaydin, marka PartCraft la soo rarto oo chip-ka status bar-ka uu tidhi "Mesh kernel", wali waad shaqeysan kartaa haddii xiriirku go'o. Bal ha dib u rogin bogga ilaa aad khadka ku soo noqoto.
:::

:::offline
Khadka ka baxsan baad tahay. Haddii PartCraft hore loo furay, sii wad shaqada; kaydinta iyo dhoofintu weli way shaqeeyaan. Haddii app bar-ku tidhi **Diyaar khadka ka baxsan**, PartCraft wuxuu sidoo kale ka furmi doonaa bilowga ah iyadoo aan xiriir lahayn; haddii kale ha dib u rogin tab-kan.
:::

## Browser-yada kala duwan

- **Soo dejinta.** Browser kasta wuxuu leeyahay galkiisa soo dejinta iyo habkiisa weydiinta. Haddii browser-ku weydiiyo in goobtan fayl soo dejin karto, oggolow; haddii kale kaydinta iyo dhoofintu ma shaqeyn karaan.
- **Jiid oo dhig** fayl ku dhejinta muuqaalka wuxuu ku shaqeeyaa Chrome, Edge, Firefox iyo Safari.
- **Faylal taleefan ama tablet ah.** Kombiyuutarada iPhone iyo iPad, Fur wuxuu muujiyaa app-ka Files; faylasha la kaydiyay waxay tagaan Files, Downloads. Android-ka waxay tagaan galka Downloads.

Faylasha waxa ay ku jiraan ma kala duwana browser-yada ama nidaamyada hawlgalka.
