---
title: Ukuhlanza nge-3D nokusala okusele
summary: Hlanza isitoko esizungeze imodeli yonke ngoleveli ngoleveli ngethuluzi elisicaba, elinebull-nose noma elibhola, ushiye isitoko sokuqeda, bese uvumela ithuluzi elincane lisike kuphela lapho okokuqala lushiya khona impahla. Yini amapasi aqinisekisa, nokuthi yini angayiqinisekisi.
keywords: ukuhlanza nge-3d, ukuhlanza, rough, ukusala okusele, insalela yesitoko, isitoko esizoshiya, stepdown, amazinga, z level, waterline, ramp, plunge, gouge, ithuluzi elincane
from: 29ddc266
---

Imisebenzi emibili ku-Manufacture, ngaphansi kwe-{{ui:More}} kwi-toolbar yayo, ihlanza isitoko kusuka **kumodeli yonke** ngo-3D, ithuluzi libekwe lime (noma kuyisiqondiso sethuluzi somsebenzi ngokwawo, [ukuthambeka kwethuluzi](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Azidingi ukukhetha.

## Ukuhlanza nge-3D

{{ui:3D rough}} isebenza isuka phezulu kwesitoko ngesinyathelo esisodwa se-**stepdown** ngesikhathi. Ezingeni ngalinye ihlanza konke ithuluzi elingakufinyelela lingathintanga imodeli: imigqa eqondile ehlukaniswe ngesinyathelo se-**stepover** (ingxenyana yobubanzi bethuluzi), bese kanye ezungeze umphetho walokho elingakufinyelela, ukuze izindonga zilandelwe futhi zingasali njengomugqa wezinyathelo ngepulani.

- **Isitoko esizoshiya**: ithuluzi lihlala kangakanani kude nemodeli lapho lonke, ukuze kube nokuqeda (okuzenzakalelayo 0.5 mm).
- **Izinga elilodwa ngaleyo ndawo esicaba**: izinga elengeziwe ngokuphakama kobuso bemodeli ngayinye esicaba (kanye nesitoko esizoshiya), ukuze isisekelo singaphiwa siphezulu nge-stepdown eyodwa.
- **Ungahlanzi isitoko esincane kune**: impahla encane kulena, phezulu noma ecaleni, ayifanelekile ukudlula (0.05 mm ukuhlanza, 0.5 mm ukusala okusele, ukuze umugqa oncane ongasele odongeni ungathumeli ithuluzi elincane odongeni ngalunye).
- **Ezansi**: akukho okusikwa ngaphansi kwalobu bukhulu. Okuyize kusho ukuthi phansi kwemodeli.

Iqala ngesitoko **njengoba imisebenzi ngaphambi kwayo ikushiye**: ngemva kwedlulo lobuso alisiki umoya lapho i-face mill isidlule khona.

Ukwehla: lapho ithuluzi lizohlangana nesitoko endleleni ephansi lizama isibhakabhaka ngendlela yalo yokudlula ku-**ramp angle**, phambili nemuva kuze kube ngamabubanzi amabili ethuluzi ngaphezulu. Idlulo elifushane kakhulu kulokho libhodwa qondile phansi ngokondla kwe-plunge; umsebenzi uyawabala futhi uyakwaxwayisa, ngoba ithuluzi elingasiki ngesikhungo salo akufanele lenze lokho.

## Ukusala okusele

{{ui:Rest}} iyisu elifanayo nalelo lesikhathi **sethuluzi elincane ngemva kwelikhulu**. Lifunda isimulator sesitoko futhi lisika kuphela lapho impahla isasele khona: emakhoneni angaphakathi ithuluzi elikhulu lalingakwazi ukuthatha, izilotha lalingakwazi ukugcwalisa, nezinyathelo elazishiya emagqumeni. Kwezinye zonke alenzi lutho, ngakho indlela yalo iyingxenyana encane yalokho ithuluzi elifanayo elizokuthatha ngesitoko esisha.

Lisebenze ngemva komsebenzi wokuhlanza futhi ukhethe ithuluzi elincane. Ludinga isimulator sesitoko semisebenzi ngaphambi kwalo, esihlale siyisebenzisa indawo yokusebenza.

## Ukuthi izindlela zinhle kangakanani

- **Akukho ukugawuka.** Izikhundla zethuluzi zinqunywa kugridi, nethuluzi lenziwe likhulu kancane kunalokho lalikunjalo (ngama-grid cell angu-1.4 ngakwesokudla nangakwesobunxele, nangesitoko esizoshiya), ukuze noma ikuphi lapho limi khona likhululekile emodelini. Izivivinyo zihlola wonke amaphuzu okusika ngethuluzi elinembile emeshini enembile, nesimulator sesitoko ngemva kwesinyathelo ngasinye: akukho ukugawuka, akukho ukuhamba ngokushesha ngesitoko.
- **Intengo yakho**: izindonga zigcina okungaphezu kancane kwesitoko esizoshiya, kuze kufike ekusalayo okubonakalayo ku-"Extra stock on walls" ku-operation (cishe 0.5 mm ethuluzini lika-Ø6, ocishe ubuncane ngelincane). Ukuqeda kuyakuthatha.

Lezi zindlela akuzona:

- Imigqa ingumugqa oqondile, hhayi okuphambene noyisimo sengxenye noma amajika alingana. Yenza ukuphuma nokuhamba emoyeni okuningi kunendlela ye-offset noma ye-adaptive, futhi isinyathelo sokuqala ngaphansi kwesinyathelo ngasinye sisika ububanzi bethuluzi obugcwele. Kumapocket anesisekelo esicaba, [I-Adaptive](topic:manufacture) yiyona ehlanzayo kangcono.
- Isigoba sethuluzi nemgoqo awahlolwa. Isexwayiso siyavela uma ukusika kujule kunobude be-flute.
- Ukugoba okungaphansi akubonwa: imodeli ilingana nalokho ithuluzi elihlangana nakho lehla ngeleti layo. Ukuhlanza uhlangothi, nikeza umsebenzi wesibili [ukuqondisa kwethuluzi okuthambekile](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Ukusala okusele kwazi isitoko njengoba nje kwazi isimulator esigridini (amaseli angu-0.1 kuya ku-2 mm, ngosayizi wengxenye).
- Engxenyeni enkulu uhlelo lude (ngaphezu kwama-100,000 wokuhamba ngeflange elingu-200 mm nethuluzi lika-Ø6) futhi lithatha cishe umzuzu ukuthi lisebenze, futhi noma yiluphi ushintsho esikhaleni sokusebenza luphinde lusebenze wonke uhlelo. Sebenzisa ithuluzi elikhulu elingena ukuze uhlanze.
- Hlola okuphumayo ngesimulator somshini wakho ngaphambi kokusika.
