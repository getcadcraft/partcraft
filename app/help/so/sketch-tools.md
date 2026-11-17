---
title: Splaynada, jarista, kala-raris iyo qalabyada naqshadda kale
summary: Samee splaynada barta-xakamaynta iyo barta-ku-habaynta, jar oo ballaadhi qalooca, kala-raris silsilad, muraayad ku dhig xariir dhexe, ku dar poligon iyo slot, qaababka naqshadda, oo mashruuc geesaha moodelka.
keywords: splayn, barta ku-habaynta, barta xakamaynta, b-spline, nurbs, qalooc, jar, ballaadhi, kala-raris, muraayad, isku-ekaan, poligon, lix-geesle, slot, qaab, qaab toosan, qaab wareegsan, mashruuc, geesta mashruuca, ku dar, beddel unugyada
from: 3ecb166a
---

Qalabyadan waxay shaqeeyaan naqshad furan. {{ui:Splayn}} iyo {{ui:Jar}} waxay ku jiraan qalabka. Kuwa kale waxay ku jiraan {{ui:Wax dheeraad ah}} dhamaadka qalabyada naqshadda. Qalab kasta waa hal tallaabo oo ka noqoshada, {{key:Esc}} wuu joojiyaa. Qalabyada sawirka aasaasiga ah eeg [Naqshadda ugu horreysa](topic:sketch-basics).

## Splaynada

Splayn waa qalooc siman. Laba nooc ayaa jira.

| Qalab | Fure | Sida loo sawiro |
|---|---|---|
| {{ui:Splayn}} | {{key:B}} | Guji dhibcaha ay qaloocdu mareyso. Dhammee {{key:Enter}}, {{key:Esc}}, midig-guji ama laba jeer guji. Guji dhibcaha koowaad mar kale si aad u xidho splayn-ka |
| {{ui:Splayn barta-xakamaynta}} (hoosta {{ui:Wax dheeraad ah}}) | | Guji barta xakamaynta. Qalooca waa la jiidaa ugu wareegta, laakiin wuxuu taabanayaa oo keliya kii hore iyo kii ugu dambeeya. Poligon-ka xakamaynta ee jajaban wuxuu muuqdaa intaad sawirayso iyo kadib |

- **Barooyinku waa barooyin naqshad.** Jiid iyaga, ama ku sii xiriir iyo cabbir sida barta kale kasta. Barta koowaad ee splayn-ka ayaa lagu isku dhejin karaa dhamaadka xariir, taasoo isku xidhta xiriir isku meel ah.
- **Taabasho dhamaadka.** Dooro xariir, qaanso ama splayn ku kulma hal dhamaad oo splayn, kadibna splayn-ka, kadibna dooro {{ui:T Taabasho}}. Jihada dhamaadka splayn-ka ayaa markaas raacaysa xariirka. Taabasho ka fog dhamaadka splayn-ka waa la diidaa: "Taabasho splayn ahaan waxay u baahan tahay xariir, qaanso ama splayn ku kulma hal dhamaad oo ka mid ah."
- **Dhamaadyada.** Xiriir taabasho lama hayo, dhamaadyada splayn ku-habaynta waa dabiici (ma jiro qallooc dhamaadka ugu dambeeya). Qalooca waa sadex-darajo oo wuxuu mareyaa dhibic kasta, masaafada u dhaxaysa barooyinka ayaa dhigaysa fogaantooda.
- **Splaynada xiran** waxay sameeyaan profile keligood. Splaynada furan waxay isku xidhaan xariirrada iyo qaansooyinka wareeg xiran sida qalooca kale.
- Tirtirka barta ku jirta splayn-ka waxay tirtirtaa bartaas oo waxay ilaaliyaa splayn-ka, inta uu weli leeyahay ugu yaraan laba barood (saddex marka uu xiran yahay).

Soo saar iyo wareeg splayn-ka waxay ka dhisaan xariiro gaaban oo toosan iyada oo loo isticmaalayo mesh kernel (qalooca dhabta ah wuxuu u baahan yahay kernel saxda ah: weli lama dhisin nooca hadda). Dhoofinta DXF wuxuu qoraa splayn sida polyline oo ku jira 0.01 mm qalooca, sababtoo ah DXF R12 ma lahan unug splayn.

## Jar iyo ballaadhin

| Qalab | Fure | Sida |
|---|---|---|
| {{ui:Jar}} | {{key:T}} | Barta qalooca: qaybta ka baxda ayaa cas, ilaa isgoysyada ugu dhow. Guji si aad u saarto. Qalooca aan wax gooyin ma sameynin waa la saaraa oo dhan |
| {{ui:Ballaadhi}} (hoosta {{ui:Wax dheeraad ah}}) | {{key:E}} | Guji xariir ama qaanso oo u dhow dhamaadka si aad u ballaadhiso. Wuxuu ku kordhaa ilaa qalooca xiga ee uu la kulmo. "Waxba ma jiro oo dhamaadkaas gaadhsiiya." marka wax jid ah aan jirin |

Jar iyo Ballaadhin waxay ku shaqeeyaan xariiro, qaansooyin, goobooyin iyo splayn (Ballaadhin: xariiro iyo qaansooyin).

- **Goobo** la jaray wuxuu noqdaa qaanso. Cabbirka radius-ka ama dhexroorkeeda wuxuu u guurayaa qaansada.
- Jarista dhexda xariir waxay ka tagtaa laba xariir oo ku sii jira isla xariirka toosan. Jarista dhexda qaanso waxay ka tagtaa laba qaanso oo isku dhexe ah iyo xiriir siman.
- **Splayn** la jaray wuxuu noqdaa splayn barta-xakamaynta oo si sax ah u raacda qalooca hore. Xiriirka taabashada dhamaadka ee la ilaaliyo ayaa sii jira.
- Dhamaadka cusub waxaa lagu dhejiyaa qalooca gooyay (xariirka, qaansada ama goobada, ama isku meel la socda dhamaadkiisa). Splaynadu ma hayn karaan bar, sidaas darteed splayn gooya ma darto xiriir.

**Xiriirrada aan waxba u qaadan waa la tirtiraa**, status bar-kana wuxuu sheegaa tirada. Tusaale ahaan, cabbirka dherer ee xariir la jaray waa la tirtiraa, laakiin xiriirrada fidsan ama isu-dhigan way sii jiraan.

## Kala-raris

1. Dooro {{ui:Kala-raris}} hoosta {{ui:Wax dheeraad ah}} ama riix {{key:O}}.
2. Guji xariir, qaanso, goobo ama splayn. Silsiladdiisa oo dhan ayaa iftiimaya: qalooc kasta oo dhamaad-ilaa-dhamaad isku xidhan, ilaa barta uu saddex ama ka badan ku kulmaan. Si aad uga kala-rarto qayb kaliya silsilad, marka hore dooro qalooca, kadibna dooro Kala-raris oo guji mid ka mid ah.
3. Tusaha u dhaqaaji dhinaca ay nuqulku u tagayso. Hordhac dhibcooyin ah ayaa raacda. Riix {{key:B}} labada dhinac.
4. Guji, qor masaafada, oo riix {{key:Enter}}.

Xariiro iyo qaansooyin waa la kala-rarayaa si sax ah. Geesaha waa la ballaadhiyaa ama la jaraa ilaa ay kulmaan. Nuqulku wuxuu leeyahay hal cabbir **Kala-raris**, qaybaha kale way raacaan: laba jeer guji cabbirka si aad u beddesho nuqulka oo dhan. Masaafo weyn silsiladda aan lagu oggolaan, tusaale "Masaafadaas weyn bay u tahay silsiladdan: dhinac wuxuu u rogi lahaa gudaha oo dibadda ku soo baxa."

**Splayn** waxaa lagu kala-raraa splayn ku-habayn cusub oo ku jira 0.001 mm kala-rarka runta ah. Nuqulkan waa go'an: ma raacayo isbeddelada soo socda, wayna lahayn cabbir Kala-raris. Splayn silsilad ku jirta waxay u baahan tahay isku xidhmo siman (taabasho) dhamaadkeeda.

## Muraayad

1. Dooro, si aad u doorato wax la muraayadeynayo.
2. Dooro {{ui:Muraayad}} hoosta {{ui:Wax dheeraad ah}} ama riix {{key:M}}.
3. Guji xariirka ama khadka dhexe ee lagu muraayadeynayo.

Bar kasta oo la muraayadeeyey wuxuu helaa xiriir **Isku-ekaan** oo ay la leedahay asalkeeda, sidaas darteed nuqulku wuxuu raacaa marka asalku beddelo. Barooyinka ku taal xariirka muraayadda waa la wadaagaa, goobooyinka la muraayadeeyey waxay helaan xiriir Siman. Haddii wax la dooran waynay, guji waxyaabaha la muraayadeynayo, riix {{key:Enter}}, kadibna guji xariirka muraayadda.

## Poligonnada iyo slot-yada

| Qalab | Sida |
|---|---|
| {{ui:Poligon}} | Guji dhexe, kadibna geesle, kadibna qor tirada dhinacyada (3 ilaa 64). Dhinacyadu waa isle'eg, geesuhuna waxay ku yaalaan goobo dhismo. Goobada cabbir si aad u sizeeyso poligonka |
| {{ui:Slot}} | Guji dhexda hal dhamaad, kadibna dhexda dhamaadka kale, kadibna guji si aad u dejiso ballaca. Laba xariir, oo taabanaya laba nus-goobo oo isle'eg |

## Qaababka naqshadda

Marka hore dooro joomatariga, kadibna:

- {{ui:Qaab toosan}}: guji bar bilow, kadibna meesha nuqulka koowaad tagayso, kadibna qor tirada nuqullada (oo ay ku jirto asalka).
- {{ui:Qaab wareegsan}}: guji dhexe, kadibna qor tirada nuqullada, si siman loo kala faafiyo wareeg buuxa.

Nuqullada waxay la socdaan xiriirrada u dhexeeya joomatariga la doortay (qaab wareegsan wuxuu ka tagaa kuwa fidsan iyo istaagga). Nuqullada lama xidhna asalka: mid beddel, kuwa kale way sii joogaan sidii ay ahaayeen.

## Geesaha qaybta ee mashruuca

1. Dooro {{ui:Geesta mashruuca}} hoosta {{ui:Wax dheeraad ah}}.
2. Guji geesta toosan ama wareega qaybta ee naqshadda ka dambeeya.

Geesta waa la koobiyeeyaa diyaarada naqshadda si sax ah oo waa go'an tahay (xiriirka Hagaaji). Ma raacayso isbeddelada dambe ee qaybta. Riix {{key:Q}} si aad uga dhigto joomatari dhismo. Goobo la janjeeyey diyaarada naqshadda waxay u noqon lahayd ellipse, sidaas darteed waa la diidaa. Sidaas oo kale geesaha xor u ah iyo geesaha toos uga soo baxa naqshadda ka baxa. Mashruucu wuxuu u baahan yahay kernel saxda ah: weli lama dhisin nooca hadda.
