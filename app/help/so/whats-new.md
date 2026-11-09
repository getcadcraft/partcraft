---
title: Waxa cusub ee 0.8 iyo 0.8.1
summary: PartCraft 0.8 wuxuu ku daraa falanqayn toos ah intaad wax beddelayso, hubin "Waa maxay marka hore jabta", daraasadaha hoos u dhaca iyo xiriirka oo leh faylal deck ah oo solver dibadda ah, daraasadaha dhaqdhaqaaqa isku-dhiskyada, workspace Surfaces oo dusha xor ah, qaybaha fiisigiska laga qaado ee workspace Injineer, sawir ka sawir-gacmeed, dhoofinta daabacaadda, xaashiyada la habeeyay ilaa G-code iyo naqshado godadkooda cabbira. 0.8.1 wuxuu hagaajiyaa cursorka shaashadda buuxda oo qabsada.
keywords: waxa cusub, waxa isbeddelay, sii deynta, changelog, isbeddello, 0.8, 0.8.1, nooca, astaamo cusub, cusboonaysii intaan wax beddelayo, jebi, waa maxay marka hore jabta, culeys, yield, plastic strain, xiriir, calculix, daraasad dhaqdhaqaaq, is-jar, dusha, nurbs, fair, hull, zebra, injineer, generator, jidh adag la dhisay, sawir ka sawir-gacmeed, miisaan daabacaadda, kala-jar, xaashiyada, g-code, naqshad, cabbir godadka, caawiye, mcp, luqadaha, safafka qalabka
from: 62e4dce2
---

Waxa isbeddelay PartCraft 0.8 iyo 0.8.1, marka loo barbar dhigo 0.7. Simulation-ku wuxuu jawaabaa intaad wax beddelayso wuxuuna kuu sheegayaa waxa marka hore jabi doona, isku-dhiskyadu waxay helayaan daraasadaha dhaqdhaqaaqa, shaqooyinka cusub waxay sameeyaan dusha xor ah iyo qaybo cabbirkooda ka helaya fiisigiska. 0.8.1 waa sii deyn yar oo hagaajin ah.

## Cusub

### Simulation

- **Cusboonaysii intaan wax beddelayo.** Calaamadee {{ui:Cusboonaysii intaan wax beddelayo}} block-ka Xalli dhexdiisa, jawaabahana waxay raacaan wax beddelkaaga. Beddel cabbir, culeys ama walxda, jawaab degdeg ah, oo lagu sameeyay curiyayaal afar jeer ka weyn, ayaa isla markiiba soo muuqda; markaad joojiso qiyaastii hal ilbiriqsi, jawaabta cilmiga ah ee la hagaajiyay ayaa beddelaysa. Natiijooyinku waxay sheegaan kan aad eegayso. Cantilever bir ah oo ah, jawaabta degdegga ahi waxay ku jirtay 1 % dhexdeeda foororka iyo qiyaastii 4 % xoogga jawaabta la hagaajiyay. Eeg [Hubi xoogga iyo foororka](topic:simulation#update-while-you-edit-live).
- **Waa maxay marka hore jabta.** Daraasadda xaaladda taagan ama buckling-ka, {{ui:Waa maxay marka hore jabta?}} oo ku jira block-ka **Jebi** culeysyada ayuu miisaamaa ilaa qaybtu bixiso. Waxa ay liistaa, ugu xumaanta marka hore, factor-ka culeyska ee yield-ka ugu horreeya (oo leh calaamad cas meesha xoogga uu ugu sareeyo) iyo factor-ka culeyska ee buckling-ka. Factor ka yar 1 wuxuu macneeyaa qaybtu hore ayay u bixisaa culeyska hadda la saaray, Dhibaatooyinka waxa uu muujinayaa khalad. Factor-yada waxa laga helay daraasad toos ah, sidaas darteed waxay sax yihiin sida daraasaddu sax tahay. Eeg [Hubi xoogga iyo foororka](topic:simulation#find-out-what-breaks-first-break-it).
- **Yield iyo xiriir.** Laba nooc oo daraasad oo dheeraad ah: mid aan toosnayn oo walxdu ku raacdo khadkeeda toosan ilaa xoogga yield-ka, kadibna jiifka ka yar, oo leh plastic strain la sawiro; iyo mid xiriir ah oo qaybaha kala go'ay ku riixaan midba midka kale (aan kaxaysi lahayn) ama ku xidhan yihiin (bonded). Tallaabo culeys oo aan degin, ama qaybo aad isu gal u galaan, waxay ka muuqdaan panelka Dhibaatooyinka. Friction, socod weyn, wareeg weyn, foororka weyn iyo fatigue lama xaliyo. Eeg [Hubi xoogga iyo foororka](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck-yada CalculiX.** {{ui:Dhoofi}} › {{ui:CalculiX deck (.inp)}} wuxuu daraasadda ku kaydiyaa CalculiX, barnaamij gaar ah oo aad rakibto oo aad isha ku shaqeyso; {{ui:Dhoofi}} › {{ui:CalculiX results (.frd)}} wuxuu faylka natiijadiisa dib ugu akhriyaa isla mesh-ka. PartCraft ma bilaabo barnaamijkaas, wuxuuna sheegaa haddii qaybtu isbeddesho ka dib markii deck-ka la kaydiyay.

### Isku-dhiskyada

- **Daraasadaha dhaqdhaqaaqa.** {{ui:Isku-dhis}} › {{ui:Dhaqdhaqaaq}} wuxuu wax u qabta qiimaha hal isku-xidh wakhti aad siiso (xawaare joogto ah, si tartiib ah loo dhaqaaqo, sine, ama bixid iyo soo noqod), wuxuuna isku-dhiska meel kasta oo tallaabo ah ku dhigaa isku-xidhyadiisa iyo wareegyada xidhan, wuxuuna sheegaa waxa is-jaraya iyo sida qaybaha u dhow yihiin. {{ui:Ku dar bar}} wuxuu sawiraa booska barta, xawaaraha iyo xawaaraha kordhaya, qiimaha isku-xidhka iyo fogaanshaha wakhtiga; {{ui:Kaydi CSV}} iyo {{ui:Kaydi garaafka}} ayaa qoraa. Ka dib {{ui:Socodsii}}, Tallaabada bar-ka socodka ayaa isku-dhiska u geeya tallaabo kasta. Dejinta daraasadda waxa lagu kaydiyaa faylka isku-dhiska. Xawaaraha iyo xawaaraha kordhaya waxay ka imanayaan booska la duubay, sidaas darteed tallaabo badan u isticmaal haddii dhibic degan ay yar u muuqato. Eeg [Hubi isku-dhiska is-jarka iyo dhaqdhaqaaqa](topic:check-assembly#a-motion-study).

### Dusha iyo qaybaha fiisigiska ka timaada

- **Workspace-ka Surfaces.** Dooro {{ui:Wejiyada}} sanduuqa {{ui:Meel shaqo}} NURBS curves iyo surfaces ee qaybta ku xigta: {{ui:Qalooc}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} iyo {{ui:Zebra}}, oo leh continuity (G0, G1 ama G2) lagu cabbiro dusha sax ah, geesaha ka xun inta aad weyddiisay ayaana lagu liisanayaa Dhibaatooyinka oo leh hagaajin Match ah. {{ui:Fair}} wuxuu cabbiraa khadadka hull-ka oo ku raadinayaa inflection-yada iyo kor u kac curvature-ka, wuxuuna dib u dhisaa kuwa aan siman iyada oo ku dhex jirta dulqaadkaaga. Dusha waxa lagu kaydiyaa faylka qaybta, mana beddelaan astaamaha qaybta. Eeg [Dusha xor ah (NURBS)](topic:nurbs-surfaces).
- **Workspace-ka Injineer.** Dooro {{ui:Injineer}} beddelaha workspace-ka, dooro generator oo guji {{ui:Cusub}}: script ayaa qayb u cabbiraa waxa ay u baahan tahay inay sameyso (kulayl si ay u dhaqaaqdo, socodyo, cadaadis, walxda, habka daabacaadda) iyadoo isticmaalaysa qaacidooyinka buugaagta, kadibna dhisa; markaas dib ayuu siiyaa tirooyinka uu isticmaalay iyo isha ay ka yimaadeen, hubinnada wax soo saarka, iyo faylasha loogu talagalay qalabka falanqaynta. Geliyo isku mid ah waxay bixiyaan qayb isku mid ah kombiyuutar kasta. Generator-ka waxa lagu kaydiyaa qaybta, furidda qaybna weligeed ma socodsiiso script. Eeg [Qaybo fiisigiska ka timaada: generators](topic:engineer-generators) iyo [Qor generator](topic:write-a-generator).

### Sawir-gacmeed, naqshad iyo samaynta

- **Sawir-gacmeed sawir ka.** {{ui:Astaanno}} › {{ui:Wax dheeraad ah}} › {{ui:Sawir-gacmeed sawir ka…}} wuxuu u beddelaa sawirka qayb fidsan oo dhul fudud ku taal (khadka dibadda iyo godad) ama sawir qalin ah khadad, qaansooyin iyo goobooyin. Waxaad siisaa hal dherer, hubisaa muuqaalka hore oo samaysaa sawir-gacmeedka. Eeg [Aasaaska sawir-gacmeedka](topic:sketch-basics#a-sketch-from-a-photo).
- **Miisaan iyo kala-jarid daabacaadda.** {{ui:Dhoofi}} › {{ui:Miisaan daabacaadda (STL ama 3MF)…}} wuxuu miisaamaa qaybta jihada kasta isagoo aan qaybta la beddelin, tusaale ahaan iyadoo la siinayo dhimasho lagu qiyaasay. {{ui:Dhoofi}} › {{ui:Kala-jar daabacaadda (zip oo qeybo ah)…}} wuxuu jarayaa qayb ka weyn saxankaaga daabacaadda qeybo lambar leh oo lagu xidhayo gacmo, furayaal, dovetail, godad dowel ama godad magnet. Eeg [Daabac 3D](topic:print-3d).
- **Xaashiyada la habeeyay ilaa G-code.** {{ui:Dhoofi}} › {{ui:Xaashiyada la habeeyay u dhoofi G-code}} wuxuu akhriyaa DXF la habeeyay oo wuxuu sameeyaa hal barnaamij xaashi kasta iyada oo loo marayo post-ka aad doorato: marka hore godadka iyo jarista, kadibna dhinacyada. Ma qorsho lead-in-ka, amarka jarista ama geesaha la wadaago. Eeg [Ku habee qaybaha fidsan xaashiyada](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Naqshado iskood u samaysta badan.** {{ui:Xaashi}} › {{ui:Si toos ah}} wuxuu doortaa xaashiga A-ga ugu yar ee muuqaallada ku habboon, oo leh miisaanka caadiga ah ee ugu weyn ilaa 1:1. {{ui:Godadka cabbiri}} wuxuu dhigaa calaamad dhexe god kasta, hal callout oo mid kasta cabbir ahaan, iyo booska laga bilaabo geeska hoose bidix ee muuqaalka. Eeg [Samee naqshad](topic:drawing-pdf).

### Dhammaan app-yada

- **Luqadaha.** App-yada waxay yimaaddaan 54 luqadood. Kuwa ka sii badan Ingiriisiga waa qoraallo mashiin ah ilaa qof dhalasho ahaan ku hadla uu akhriyo.
- **Safafka qalabka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safafka qalabka}} wuxuu doortaa Duub (sida hore), 2 safaf ama 1 safaf; bar aan ku habboonayn wuu dhinac u shubmaa. Feature ribbon-ka PartCraft wuxuu muujiyaa qalabka ugu badan ee la isticmaalo oo weyn, kuwa kale waxay ku qarsan yihiin badhan kala qaybsan.
- **Ku xir AI-gaaga.** Studio waa xudunta lagu xidho caawiye aad leedahay dhammaan siddeed app-yada, iyadoo app kasta uu leeyahay ogolaansho akhri kaliya, talo ama wax beddel. Caawiye la xidhay wuxuu qayb ka sameeyaa jumlad sida bracket culeys ah, wuxuuna muujiyaa shaqadiisa iyo hubinta oo dhan, kadibna dhisaa; wuxuu sheegaa waxa uusan hubin (xoog-diiradda, fatigue, creep ee plastic-ka). Eeg [Isticmaal PartCraft caawiye AI](topic:use-with-ai-assistants).

## La hagaajiyay 0.8.1

- **Cursorka shaashadda buuxda oo qabsada.** Dooridda hover-ka hadda waa la xakameeyay. Sababta waa akhrintayada ugu fiican ee aynu haysanno, mana loo xaqiijin qofkii soo sheegay.
- **Luqadda marka la socodsiinayo.** Studio iyo nooca la xirmay waxay luqadda beddeli karaan intay socdaan; hore waxay ahaayeen Ingiriisi keliya. Tani weli lama tijaabin dhammaan madbacadaha: noo sheeg haddii luqaddu ku isbeddelin.

## Weli nooca tan ma ku jirto

- Ku xir AI-gaaga weli ma dhammaystirnin: xidhiidh hal-guji ah gudaha Studio, connector-ka martida ee AI-ga browser-ka, furaha API-gaaga gudaha Studio iyo xirmada MCP ee la daabacay lama ballan qaadi karo. Studio ma leh AI u gaar ah.
- Studio uma saxeexna koodka: Windows wuu digi karaa, macOS wuxuu weydiiyaa midig-guji kadibna Fur. Eeg [Xallinta dhibaatooyinka](topic:troubleshooting).
- Stack-ups weli waa hal jihood: eeg [Isku-tiirinta dulqaadka](topic:tolerance-stackup).
- Kuwa kale waxa lagu liistay [Waxa weli lama dhisin](topic:not-built-yet).

Isbeddelada hore waxa ku jira [Waxa cusub ee 0.7](topic:whats-new-0-7).
