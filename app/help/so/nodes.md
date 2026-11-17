---
title: Qanjidhada: dhis moodeel adigoo isku xidha
summary: Isku xir lambarada qodob, qodobyada qalooc, qaloocyada dusha. Haddii aad lambarka beddasho, wax walba oo ka hooseeya dib ayay u dhisaan. Qanjidh walba waa sidoo kale xariiq CraftScript, jaantuskana faylka ayaa lagu kaydiyaa.
keywords: qanjidhada, tafatiraha qanjidhada, habaynta muuqaalka, parametric, jaantus, silig, dhibcaha xidhiidhka, bilaa-qaab, nurbs, loft, extrude, revolve, goobo, qalooc, dusha, taxane, kala duwan, random, liis, script, craftscript, grasshopper
from: 3a4625de
---

Tafatiraha **Qanjidhada** wuxuu dhisaa joometriga isagoo isku xidhaya sanduuqyada. Sanduuq kastaa (qanjidh) shaqo yar oo keliya ayuu qabanayaa: samee lambar, qodob, goobo, loft. Natiijada mid waxaad ku xidhaysaa geliska mid kale, moodelkuna wuu raacayaa markaad lambar bilowga ah beddelato.

Ka fur liiska workspace-ka: {{ui:Qanjidhada}}. Waxay furaysaa daaqadda tafatirka. Qayb horey u leh jaantus ayaa muujinaysa markaad workspace-ka furto. Waa daaqad ku dul taal muuqaalka 3D: jiid cinwaankeeda si aad u dhaqaajiso, jiid geeskeeda si aad u cabbirto.

## Isku xidhka

1. Dooro qanjidh liiska bidix (ku qor sanduuqa raadinta si aad u yareyso; <kbd>Enter</kbd> wuxuu ku daraa kii ugu horreeyay ee la helo). Waxay ka soo muuqataa badhka canvas-ka.
2. Jiid dhibcaha wareegga ah ee **output** ee midig qanjidh kasta ilaa dhibcaha wareegga ah ee **input** ee bidix qanjidh kale. Dhibcuhu wuu cagaarayaa marka uu ku habboon yahay, wuuna casaysanayaa marka uusan ku habboonayn; kor ugu sii mouse-ka si aad sababta u aragto.
3. Geli oo aan wax lagu xidhin waxay muujinaysaa sanduuq qiime qoran. Qor lambar oo riix <kbd>Tab</kbd>: natiijadu dib ayay u dhisantaa.
4. Goobada yar ee cinwaanka qanjidh kasta waa **indhaheeda**. Qanjidh indhuhu furan yahay ayaa lagu sawiraa muuqaalka 3D, sida khadad qalooc, dusha oo midab lagu buuxiyay, dhibcaha qodobyada.

Qanjidh jiid cinwaankiisa. Jiid asalka si aad u wareejiso, lafo-leexi curiyaha si aad u weyneyso. <kbd>Delete</kbd> wuxuu tirtiraa qanjidha la doortay. {{ui:Nadiifi}} wuxuu qanjidhada u habeeyaa tiirar, {{ui:Ku habee}} wuxuu dhammaantood ku keenaa muuqa, {{ui:Ka noqo}} iyo {{ui:Samee mar kale}} waxay kuu dhex maraan wax ka beddelkaaga.

## Noocyada iyo unitiyada

Dhibcaha xidhiidhku noocyo leeyihiin: lambar, haa/maya, bar, vector, qalooc, dusha, mesh, jidh adag, ama "geometry" oo ah mid kasta oo ka mid ah. Bar waxay quudin kartaa geli vector ah, iyo dib. Lambarku unit buu leeyahay: **dherer** waa millimitir, **xagal** waa degree. Dherer ma quudin karo xagal, dherer x dherer (bed) waa la diidaa, sidaas darteed silig khaldan waa la joojinayaa markaad samayso.

Dhibic laba geesood ah waa **liis**. Marka liis gaadho geli qiime keli ah, qanjidhku wuxuu shaqeeyaa mar kasta shay kasta, natiijadiisuna waxay noqotaa liis. Liiska yar wuxuu ku celiyaa shayntiisa ugu dambeysa. Tusaale ahaan, **Taxane** oo joogarrada ah oo lagu geliyo **Guuri** wuxuu sameeyaa taxane nuqullo ah.

## Jidhka adag iyo Boolean-yada qanjidh ahaan

Kooxda **Jidhka adag** waxay sameysaa jidh xidhan oo ka yimid isla dusha saxda ah ee panel-ka Dusha: **Box solid**, **Cylinder solid** iyo **Sphere solid** (cabbirka mm), **Isku geyn** (Union), **Ka jar** (Subtract) iyo **Isku goys** (Intersect) (jidhka labaad waxaa laga qaadaa kan koowaad; dulqaadku waa inta ay saddexagalada engine-ka jidh adag ka durbaan dusha saxda ah), **Fillet between faces** (wejiyada iyada oo lambarkooda ku jira jidhka, 1 kan koowaad; radius, iyo sare 0 ka, radius dhamaadka), **Solid volume** (mm³) iyo **Solid to mesh** (si loo arko ama loo dubo). Jidh adag noocyo xidhiidh oo gaar ah ayuu leeyahay: bar ama lambar lama xidhi karo geli jidh adag, dhibicna waxay caatoonaysaa. Qanjidhada Boolean iyo Fillet waxay isticmaalaan engine-ka jidh adag ee barnaamijka, kaas oo la soo rarayo marka tafatiraha markii ugu horreysay la furo.

## Khaladaad

Qanjidh aan shaqadiisa qaban karin wuxuu sheegaa sababta cinwaankiisa hoosteeda, midab casaan ah ("Radius-ku waa inuu ka weyn yahay eber."), qanjidhadii ka dambeeyayna way sugaan. Isla fariintaas waxay ahaan doontaa **Dhibaato** oo ku jirta gobolka Dhibaatooyinka (Problems), sidaas darteed halkaas ayaad ka heli kartaa.

## Qanjidh walba waa xariiq script

Riix {{ui:Script}} si aad u aragto jaantuska CraftScript ahaan: hal xariiq qanjidh kasta, sida `n3 = nd_circle(n2, n1, [0 0 1]);`. Qoraalka wax ka beddel oo riix {{ui:Ka samee jaantuska qoraalkan}} si aad jaantuska dib ugu soo celiso. Shaqooyinka `nd_` isla markaa waxay ku shaqeeyaan CraftScript ku jira PartCraft, sidaas darteed jaantuska halkaas ayaa la socodsiin karaa, la wareegi karaa ama la tijaabin karaa. Tirooyinka random-ka had iyo jeer waxay qaadaan **seed**, sidaas darteed isla jaantuska wuxuu siinayaa isla natiijada kombuutar kasta.

## Lagu kaydiyo faylka

Jaantuska waxa lagu kaydiyaa faylka qaybta (ma aha taariikhda, sidaas darteed Ka noqo ee tafatiraha waa mid u gaar ah). Qanjidhadu waxay sameeyaan qaloocyo, dusha iyo mesh oo ag jidh adag ah: ma beddelayaan astaamaha qaybta.
