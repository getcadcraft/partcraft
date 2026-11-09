---
title: Bilow PartCraft
summary: Waxa PartCraft hadda sameeya, waxa browser-kaagu u baahan yahay, iyo qayb koowaad oo daqiiqadaha 10 ah, laga bilaabo sawir-gacmeed ilaa fayl la kaydiyay.
keywords: bilow, orodka koowaad, bilaabid degdeg ah, hordhac, casharro, qaybta koowaad, saxan bir, parametric, moodeelka qaybta
from: 5f0a668d
---

PartCraft waa app qayb parametric ah iyo isku-dhis ah oo qoyska CadCraft. Waxaad sawir-gacmeed 2D ah ka sawirtaa, waxaad ku xidhaa xidhiidho iyo cabbiro, waxaad u beddeshaa jidh adag astaamo sida extrude, revolve iyo hole, oo tiro kasta oo dambe ayaad beddeli kartaa: qaybtu waxay dib u dhisaa taariikhdeeda. Qaybaha ka dib waxay galaan isku-dhiskyada, halkaas oo isku-xidhyadu ay meeleeyaan oo ay kuu oggolaadaan inaad hubiso dhaqdhaqaaqa.

Waxa dhismahan sameeyaa:

| Shaqo | Waxa aad heleysa |
|---|---|
| Sawir-gacmeedyo | Khadad, afar-geesle, goobooyin, qaansooyin, bar iyo khadad dhexe, oo leh xidhiidho iyo cabbiro, iyo xaalad toos ah: ka hooseeya, si buuxda loo qeexay ama ka sarreeya |
| Astaamaha jidh adagta | Extrude, goo, revolve, revolved cut, god fudud iyo god ku qarsan, qaabab toosan iyo wareeg, muraayad, fillet iyo chamfer geesaha toosan ee u dhexeeya dusha fidsan, iyo shell iyo draft dusha fidsan. Sweep, loft iyo astaamaha kale ee u baahan kernel sax ah weli lama dhisin nooca tan: eeg [Waxa weli lama dhisin](topic:not-built-yet) |
| Taariikh | Wax beddel tirooyinka astaam kasta, damin, dib u celin, dib-u-habayn iyo tirtir, iyo ka noqo |
| Isku-dhiskyo | Qayb ay ku xirnaadaan xidhiidho adag, wareeg iyo siyaadi, iyo hubin is-jarka iyo hubin dhaqdhaqaaqa |
| Naqshado | Xaashi A3 oo leh saddex muuqaal, isometric, qayb, muuqaal faahfaahin, cabbirrada guud, datums, fareemo kontoroolka joogsiga iyo calaamadaha dusha, oo loo dhoofiyo PDF |
| Fayl | Faylashiisa qaybta iyo isku-dhiska; STL, 3MF, STEP dusha fidsan, DXF iyo PDF oo la bixiyo |

Waxaan oo dhan ku shaqeeyaan browser-kaaga, kombiyutarkaaga. **Waxba lama soo gelin.** Eeg [Faylasha: fur, kaydi iyo dhoofi](topic:files) meelaha faylashu tagaan.

## Waxa aad u baahan tahay

- Chrome, Edge, Firefox ama Safari oo casriga ah oo leh **WebGL** (grafikada 3D) iyo **WebAssembly** la shido. Labaduba caadi ahaan way shidan yihiin. Geometry-ga jidh adagta waxa dhisa mesh kernel WebAssembly oo app-ka la soo rarto: eeg [Mesh kernel-ka](topic:solid-kernels).
- Mouse-ka ayaa ugu fudud. Trackpad-ku waa shaqeeyaa, shaashadaha taabashada waxay shaqeeyaan muuqaal eegista iyo sawir-gacmeed fudud: eeg [Trackpad, taabasho iyo shaashadaha yaryar](topic:trackpad-and-touch).
- Shaashad ugu yaraan 1280 pixel ballac leh ayaa qalabka oo dhan hal safka muujisa. Daaqadaha ka yar qalabka ayay dhinac u shubaan; taleefanka panelada waxay ka furmaan xaashiyo bar-ka hoose ka.

Wax dheeraad ah oo ku saabsan browser-yada: [Browser-yada iyo kombiyuutarada](common:browsers).

:::note
PartCraft wuxuu ku shaqeeyaa browser-ka, iyo desktop-ka gudaha CadCraft Studio. Kaydinta daruurta weli ma diyaar aha: qaybaha kombiyutarkaaga ayaad ka furtaa oo waxaad ku kaydisaa sidii fayl.
:::

## Furo PartCraft

1. Furo PartCraft.
2. Sug inta shaashaddu tidhi "Kernel-ka jidh adagta ayaa la soo rarayaa…". Tani waqti ayay qaadataa markii ugu horreysay.
3. Waxaad aragtaa muuqaal 3D madhan oo leh saddex diyaarad aasaasi ah, taariikhda bidix ("Part1", kadibna Diyaaradda hore, Diyaaradda sare, Diyaaradda midig) iyo sanduuq muuqaalka ku jira oo madaxa leh "Bilow qayb".
4. Chip-ka ku dhow dhamaadka midig ee status bar-ka wuxuu tidhi "Mesh kernel": PartCraft wuxuu qayb kasta ku dhisaa mesh kernel-ka nooca tan, sidaas darteed dusha wareegsan waa dusha fidsan. Hadda ayaad bilaabi kartaa moodeelka.

Haddii muuqaalku tidhi browser-ku ma muujin karo 3D, ama kernel-ka ma soo rarnayn, eeg [Xallinta dhibaatooyinka](topic:troubleshooting#the-app-does-not-start).

## Qaybtaadii koowaad: saxan oo leh god

Waxaad samaysan doontaa saxan 60 × 40 mm ah, dhumuc 10 mm, oo ay ku jirto god 6 mm ah oo gudubta. Halbeegyada waa millimitir.

### Sawir-gacmeedka dhibcaha

1. Guji **Diyaaradda hore** taariikhda bidix. Diyaaraddu muuqaalka waa ay iftiimaysaa.
2. Dooro {{ui:Naqshad}} qalabka, ama riix {{key:S}}. Muuqaalku wuxuu si toos ah u eegaa diyaaradda, qalabka Xarriiqa ayaana shaqeeya.
3. Riix {{key:R}} qalabka Afar-geesle.
4. U dhaqaaji cursorka bilowga (goobta yar ee casaanka ah oo leh calaamad jeex). Labajib yar ayaa muujinaysa inuu ku dhejiyay. Guji.
5. Kor u dhaqaaji oo midig u dhaqaaji, kadibna mar kale guji. Afar-geesle ayaad heshay. Khadadkiisu waa buluug: buluugu wuxuu macneeyaa weli way dhaqaaqi karaan.

### Siiso cabbirro

1. Riix {{key:D}} qalabka Cabbir.
2. Guji khadka sare, kadibna guji wax yar oo ka sarreeya. Sanduuq lambar ah ayaa furmaa oo leh dhererka hadda jira.
3. Ku qor `60` oo riix {{key:Enter}}. Afar-geeslaha wuxuu noqonayaa 60 mm ballac.
4. Guji khadka bidix, kadibna guji wax yar oo bidixda ka ah. Ku qor `40` oo riix {{key:Enter}}.

Chip-ka ku yaal geeska bidix sare ee muuqaalka hadda wuxuu tidhi **Si buuxda loo qeexay**, khadadkuna waxay u beddelmaan midab tiro (madow mawduuca Paper, iftiin mawduuca Model). Dhibcaha iyo cabbirrada oo dhan way go'an yihiin.

:::tip
Haddii afar-geeslaha uu ka bilaabmay meel ka fog bilowga, chip-ka wali wuxuu tidhi "Qeex ka hooseeya · 2 darajo oo xor ah". Riix {{key:S}} Dooro, guji hal geesood, {{key:Shift}}+guji bilowga, kadibna dooro {{ui:• Isku-beegan}} panelka midig.
:::

### Soo saar qaybta

1. Dooro {{ui:Ka bax}} qalabka, ama riix {{key:Esc}} ilaa sawir-gacmeedku xirmo (badanaa laba jeer).
2. Dooro {{ui:Soo saar}}. Jidh adag oo 10 mm ah ayaa soo muuqda. "Extrude1" waxa lagu daraa taariikhda, "Sketch1" na waxa uu hoosta ugu jiraa gelin ahaan.
3. Panelka midig wuxuu muujinayaa dejinta soo saarka. Si aad dhumucda u beddesho, ku qor lambar cusub **Qoto (mm)** oo riix {{key:Enter}} ama {{key:Tab}}. Qaybtu si degdeg ah ayay dib u dhisaysaa.

### Ku dar god

1. Guji dusha fidsan ee weyn ee saxanka hore (dhamaadka soo saarka). Dusha oo dhan ayaa iftiimaya, panelka midigna wuxuu tidhi **Dusha**.
2. Dooro {{ui:Sawir-gacmeed wejiggan ku yaal}} panelka midig.
3. Riix {{key:P}} qalabka Bar, oo guji meel u dhow dhexda dusha.
4. Dooro {{ui:Ka bax}}.
5. Dooro {{ui:God}}. God 6 mm ah ayaa saxanka gudbaysa. Beddel **Dhexroor (mm)** panelka midig haddii aad jeclaatid.

Sanduuqa **Qayb** ee hoose bidix hadda wuxuu akhrinayaa mugga, dusha, cabbirka (60 × 40 × 10 mm) iyo "Godad gudba: 1".

### Kaydi

1. Riix {{key:Mod+S}} ama dooro {{ui:Kaydi}}.
2. Browser-kaagu wuxuu soo dejinayaa `Part1.partcraft.json` galkiisa soo dejinta. Faylku wuxuu haystaa taariikhda oo dhan: mar kale ku fur {{ui:Fur}} si aad u sii wadato wax beddelka.

Si aad qaybta marka hore magac u beddesho, guji meel madhan muuqaalka si wax aan la dooran, kadibna ku qor **Magac** cusub panelka midig.

## Meelaha xiga ee aad tagi karto

- [Sawir sawirkaaga koowaad](topic:sketch-basics) iyo [Si buuxda u qeex sawir-gacmeed](topic:relations-dimensions) waxay si sax ah u sharxayaan sawir-gacmeeyaha.
- [Qayb u beddel taariikhdeeda](topic:edit-history) waxa ay tusinaysaa sida wax aad dhistay loo tafatiro.
- [Wareeg, bevel iyo god](topic:fillet-chamfer-shell) iyo [Samee naqshad](topic:drawing-pdf) ayaa dhammeeya qaybta. [Waxa weli lama dhisin](topic:not-built-yet) waxa uu liistaa waxa nooca tan aan samayn, sida sweeps iyo lofts.
- [Ka imaanaya moodeelka parametric kale](topic:coming-from) waxa uu liistaa dabeecadaha halkan si kale u shaqeeya.
- [Furayaasha iyo mouse-ka](topic:keyboard) waa liiska buuxa ee gaabin-furayaasha.
- [Sida caawintan loo isticmaalo](common:help).
