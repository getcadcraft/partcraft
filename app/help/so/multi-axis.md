---
title: Jarista 4- iyo 5-tiir
summary: U sheeg PartCraft tiirarka wareega ee mashiinka, leexi qalabka howl kasta oo caadi ah, dhamaystir dusha adigoo isticmaalaya kubbad bar dhamaad oo leexata markii la jarayo, ama ka wareeg qaybta qalabka hoosteeda tiirka 4-aad. Waxa lagu qoro G-code-ka, iyo waxa aan wali la caddeynin.
keywords: 5 axis, five axis, 4 axis, fourth axis, multi axis, multiaxis, 3+2, indexed, positional, tilt, tilted tool, rotary, trunnion, table, head, a axis, b axis, c axis, tcp, rtcp, tool centre point, g43.4, inverse time, g93, kinematics, pivot, swarf, lead angle
from: c4f1c491
---

Wax soo saarka wuxuu qalabka ku hayn karaa xagal, wuxuuna tiirarka wareega ku dhaqaajin karaa intii la jarayo. Saddex waxyaabood ayaa sidaas sameeya, oo ka soo bilaabma kan ugu fudud.

**Waxan lama wada wareegin mashiin.** Waddooyinka waxaa lagu hubiyaa joomatariga tijaabooyinka, G-code-na waa la akhriyaa, laakiin post-yada dhex-ku-jira waxay raacaan koodhadhka dukumintiga ee xakameeyayaasha, ma aha mashiin kasta oo nagu hor jira. Barnaamijka ku caddee simulator-ka xakameeyahaaga iyo hawada ka hor inta aanu taabanin birta.

## Tiirarka wareega ee mashiinka

Tab-ka **Dejin**, {{ui:Rotary axes}} wuxuu sheegaa waxa mashiinku leeyahay:

| Doorasho | Mashiinka |
|---|---|
| Midna (3 tiir) | Mill caadi ah. Howlgal kasta oo u baahan in qalabka la leexiyo wuu digayaa, post-ka ma qori doono. |
| A (wareega X-ka agtiisa) | Hal tiir wareeg oo X ku dhex jira: miis 4-aad ama indexer. Qalabku wuxuu leexan karaa diyaarada Y–Z oo keliya. |
| B (wareega Y-ka agtiisa) | Hal tiir wareeg oo Y ku dhex jira. Qalabku wuxuu leexan karaa diyaarada X–Z oo keliya. |
| A iyo C | Tiir leexin oo X ku dhex jira oo ku xambaaysan, ama xambaaysiya, wareeg Z ku dhex jira: miis trunnion, ama madax. |
| B iyo C | Isla sida oo leexinta ku dhex jirta Y. |

Markaas:

- **Ku xambaaysan**: {{ui:The table (the part turns)}} ama {{ui:The head (the tool turns)}}. Miiska wuxuu wareegaa jihada ka soo horjeedda si uu usoo keeno isla wejigii qalabka hoosteeda, sidaas darteed calaamada xagal kasta waxay ka timaadaa tan.
- **Kontoroolku wuxuu ilaaliyaa barta qalabka ee waddada (TCP)**: markuu on yahay, X Y Z ee barnaamijka waa barta qalabka oo ku jirta isku-xidhka qaybta, kontoroolku wuu sameeyaa kuwa kale (post-yada Fanuc-style iyo LinuxCNC ee caadiga ah waxay qoraan `G43.4` dhererka qalabka). Markuu off yahay, mashiinka miiska, PartCraft wuxuu qoraa X Y Z sida miiska wareegaya uu qaybta u qaado, oo ku saabsan **dhexda wareega** aad bixisay (kala-saarka shaqada; 0, 0, 0 markii asalka shaqada uu ku yaal dhexda). Mashiin madax ah wuxuu u baahan yahay TCP on: haddii kale barnaamijku wuxuu u baahan doonaa dherer pivot-ka mashiinka, PartCraft-na ma garto.
- **Xadka leexinta**: intee le'eg ayuu tiirka leexinta u socdaa.

Mashiinadu way kala duwan yihiin jihada ay ugu tiriyaan inay togan yihiin. Haddii tiir kuu wareego jihada qaldan mashiinkaaga, beddel calaamada nuqul post ah ([Post processors you can edit](topic:post-processors)).

## Qalab leexan oo howl caadi ah

Howl kasta oo jarid (face, pocket, adaptive, contour, drill, chamfer, parallel, scallop, 3D rough, rest) waxay leedahay **Tool tilt** iyo **Tilt towards**: jihada qalabka howlgaladaas oo keliya, oo la cabbiro tiirka qalabka ee setup-ka. Tani waa 3+2 machining: tiirarka wareega waxay u gudbaan booska oo sii joogaan intii saddex tiir ay jarayaan.

- Ku qor laba xagal, ama riix {{ui:Tool square to a face}} oo guji wejig sinaan ah: qalabku wuxuu si toos ah ugu tilmaamayaa.
- Dooro wejiyada iyo geesaha howlgalka sida caadiga ah. Waxa loo tiriyo sagxad ama godyo waxa lagu xukumaa iyada oo la eegayo qalabka leexan.
- Agabka jihadaas waa sanduuqa ku hayaa agabka la wareegay, sidaas darteed dherer iyo masaafooyinku way ammaan yihiin dhinacaas.

Koodka G-code-ka, howlgalka ka hor qalabku wuu kor u kacaa, tiirarka wareega ayaa leexdaan, qalabkuna wuxuu hoos ugu imaa barta uu marka hore ku bilaabayo. Miis mashiin ah oo aan TCP lahayn, qoysaska waxay ahaan doonaan qoysas, godinta caadiga ahna waxay ahaan doontaa godinta caadiga ah (frame-ka la qoray wuxuu kaliya ku leexan yahay Z). Markuu TCP yahay diyaarad leexan, qoysaska waxay noqdaan dhaqdhaqaaqyo gaagaaban oo toos ah, wareegyadana dhaqdhaqaaqyada ay matalaan.

Simulasho agabka waxay ku shaqeysaa jihada leexan **keligeed**: wuxuu muujiyaa waxa howlgalkaas ka jarayo agabka oo dhan oo laga arko dhinaceeda, wuxuuna ka helaa godanka halkaas, laakiin jarista laga sameeyay jihooyin kale lama qaado.

## Dhamaystirka 5-tiir

{{ui:More}} qalab-sanduuqa Wax soo saarka wuxuu liistaa howlgalkaan iyo kan xiga sare tab-ka **Howlgallada**.

{{ui:5-axis}} waa [marinka isbarbar ee dhamaystirka](topic:finish-3d) oo leh **kubbad bar dhamaad oo leexata markay socoto**. Kubbadda waxay jaraa iyadoo adeegsanaysa kubbad, kubbaduna waa isku mid xagaaga oo kasta oo qalabku ku leexdo barta dhexe, sidaas darteed kubbaddu waxay raacaysaa waddada uu marin 3-tiir ah siin lahaa, oo kaliya jihada qalabka ayaa isbedela:

- **Ku wajahan dusha**: 1 = toosan dusha, 0 = sare, wax u dhexeeya.
- **Hore u leex**: darajooyin dhinaca jarista, si dhexda kubbadda ee taagan aysan u tahay wixii jarista sameeya.
- **Leexinta ugu badan**: qalabku waligiis kama leexan doono ka badan tan tiirka setup-ka.

Meelaha qolka qalabka ku dhaqan karta moodeelka leexinta waa la jari doonaa ilaa uu nadiifo, howlgaluna wuxuu sheegaa meelaha ay tahay intee le'eg. Marin kasta waxaa lagu soo galaa oo laga baxaa kor u kac toosan.

## Dhamaystirka wareega (tiirka 4-aad)

{{ui:Rotary}} waa qaybta lagu hayo **work X** tiir wareeg. Qaybtu way wareegaysaa, kubbad bar dhamaad ah oo had iyo jeer tiirka u tilmaamaysa ayaa raacaysa dusheeda:

- **Marinnada**: {{ui:Along the axis}} (xariiqyo X ku dhex jira, hal tallaabo oo leexin oo kala fog) ama {{ui:Round the part}} (giraanta, hal tallaabo oo X ah oo kala fog).
- **Tiirka ku yaal Y / Z**: meesha tiirku ku yaallo. Madhan waxa uu ka dhigan yahay dhexda agabka. Mashiinka miiska oo aan TCP lahayn, tani waa in ay noqotaa dhexda wareega ee Dejinta; howlgalku wuu digayaa haddii aanu taasi ahayn.
- **Ka / Ilaa X** iyo **Ka / Ilaa xagal**: qaybta dhererka iyo wareegga ee la jarayo.

Dhererka kubbadda ka sarreeya tiirka barta kasta waa dhererka saxda ah ee kubbad ku dhacday mesh-ka qaybta, jihada aad ka eegayso.

## Xaddidaadaha

- 5-tiir iyo dhamaystirka wareega waxay qaataan **kubbad bar dhamaad** oo keliya. Ma jiro jarista swarf (dhinaca qalabka ee derbi toosan), ma jiro xariiqyada socodka ee jihooyinka wejiga gaarka ah, ma jiro roughing multi-axis, ma jiro doorashada otomaatiga ah ee leexinta si looga fogaado isku dhac.
- Waddooyinka 5-tiir iyo kuwa wareega **lama socodsiiyo simulasho agabka**, kaas oo ah khariidad dhererka oo aan qori karin jar leexan.
- Gees-hoosta waxaa lagu hubiyaa dhamaystirka 5-tiir marka loo eego moodeelka dushiisa; holder-ka, spindle-ka iyo mashiinka qudhiisa meel kasta lama hubin.
- Dhamaystirka wareega wuxuu jaraa oo keliya wixii qalabku arki karo oo ka eegaya tiirka.
- Dhamaystirka 5-tiir wuxuu qaadan karaa daqiiqad ama ka badan si uu u xisaabiyo qaybta weyn: gees-hoosta waa la hubiyaa barta kasta oo marin kasta.
- Markii tiirarka wareega ay la socdaan tiirarka toosan oo TCP lahayn off yahay, post-yada caadiga ah waxay quudinta u qoraan wakhti rogan (`G93`), kadibna waxay ku noqdaan `G94`.
- Ma qorayo koodka diyaarada shaqada leexan (`G68.2` iyo kuwa la mid ah), ma garanayo xuduudo gaar mashiin ah, unwinding ama aagag isku dhac.
