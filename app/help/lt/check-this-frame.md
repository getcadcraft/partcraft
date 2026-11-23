---
title: Tikrinti šį rėmą
summary: Paimkite plieninius konstrukcijos elementus (pagrindą, stovą, vamzdžių ir profilių rėmą), padėkite įrangą ant kojų ir atramas ant grindų ir pamatykite, kiek kiekvieno elemento ir kiekvienos suvirinimo siūlės yra naudojama pagal AISC 360-16 arba EN 1993. Pagalba, kol inžinierius jos neperžiūrėjo.
keywords: rėmas, suvirinta konstrukcija, pagrindas, siurblio pagrindas, konstrukcinis elementas, suvirinimo siūlė, siūlės, tikrinimas, AISC 360, EN 1993, panaudojimas, atrama, įranga, apkrova, tuščiavidurė sija, HSS, RHS, CHS, inžinierius
from: 032e34ee
---

{{ui:Tikrinti šį rėmą}} paima tiesius plieninius suvirinto konstrukcijos elementus, sudaro iš jų rėmą, sprendžia jį pagal plieno ir jame padėtos įrangos svorį ir patikrina kiekvieną elementą bei kiekvieną suvirinimo siūlę, kur elementai susitinka. Vienas paleidimas, viena lentelė.

:::warning
Tai **pagalba, kol inžinierius ją peržiūrės**. Tai nėra patvirtinimas, o praėjimas nėra projektas. Ji naudoja elementų centrines linijas taip, kaip nubraižyta, kiekvieną jungtį laiko suvirinta aplink visą profilį, kampinės siūlės kraštinę ima iš profilio sienelės (iki 8 mm), nebent nustatote kitaip, ir netikrina varžtų, plokščių, pagrindo plokščių, inkarų, gulimo, bloko šlyties, nuovargio ar kėlimo.
:::

## Paleidimas

1. Nubrėžkite elementus su {{ui:Konstrukcinis elementas}} (profiliai ateina iš profilių lentelės).
2. Atidarykite {{ui:Vaizdai}} › {{ui:Tikrinti šį rėmą}}. Nurodykite, kur rėmas stovi (**atrama** ties kiekvienu gale: šarnyrinė, įtvirtinta arba velenėlinė; {{ui:Šarnyrinės atramos ties kojomis}} deda vieną ties kiekvienu žemiausiu elemento galu) ir kas ant jo stovi (**įranga**: masė, svorio centras, taškai, kuriais ji prisukama prie grindų, ir pasirinktinai horizontali stūmimo jėga).
3. Pasirinkite kodą: **ASCE 7 + AISC 360-16** arba **EN 1990 + EN 1993**. Nustatykite plieno markę ir, AISC atveju, suvirinimo metalo stiprumą (482.6 MPa yra E70).
4. Spauskite {{ui:Tikrinti}}. {{ui:Įrašyti ataskaitą kaip CSV}} įrašo kiekvieną lentelę, o pirmoji eilutė – ta, kad dar neperžiūrėta.

Rėmas skaitomas milimetrais, su vertikalia detalės ašimi aukštyn. Atramos ir įrangos taškai įvedami kaip x y z toje pačioje sistemoje, su z kaip aukščiu.

Elemento galas, kuris patenka ant kito elemento vidurio, jį padalija tenai, kaip ir koja arba prisukimo taškas ant elemento linijos. Svoris paskirstomas per prisukimo taškus kaip standusis kūnas; svorio centras už kojų ribų arba kėlimo jėga ties koja yra pasakomi, niekada nepaslepiami.

## Ką gausite

- Labiausiai naudojamas elementas ir ar kas nors nepraeina. Elementai, kurių patikrinimas negali įvertinti (profilis, kurio nėra lentelėje, plienas be koeficiento kode), suskaičiuojami ir įvardijami, niekada neskaičiuojami kaip praeinantys.
- Viena eilutė kiekvienam elementui ir suvirinimo grupei: kiek panaudota, lemiantis patikrinimas ir taisyklė, ir apkrovos derinys, kuris lėmė.
- Tos pačios lentelės ataskaitoje.

## Ką tikrinama

Tuščiavidurės sekcijos (RHS, SHS, CHS, vamzdis) ir I profiliai – dėl tempimo, gniuždymo, lenkimo, šlyties ir jų sąveikos; kampinės ir visiškai įlydytos siūlės – elastiniu vektorių metodu. Kompaktiškos sienelės tikrinamos tik lenkimui tuščiavidurėms sekcijoms; plonos sienelės pažymimos kaip netikrinamos. Kai kurios konstantos buvo perrašytos iš standartų ir dar nepalygintos su spausdintu egzemplioriumi; ataskaitoje išvardytas kiekvienas šaltinis.

Žr. [Rėmai iš plieninių profilių](topic:structural-members), kur braižomi elementai ir sudaromas jų pjovimo sąrašas.
