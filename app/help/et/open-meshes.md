---
title: Ava STL, OBJ või 3MF tahke kehana
summary: Muuda skanneri, 3D-printimise saidi või teise programmi võrk tahkeks, mida saab lõigata, millele saab lisada ja millele saab visandada; mida PartCraft selle käigus parandab ja mida ta ei suuda.
keywords: stl, obj, 3mf, võrk, võrk tahkeks, võrgu teisendamine, skaneering, veekindel, parandus, augud, lüngad, ühikud, üles telg, imporditud keha, lamedad tahud
from: 7b948471
---

PartCraft avab STL-, OBJ- ja 3MF-võrgud **tahke kehana**. Keha töötab nagu iga teine tahke: seda saab lõigata, sellele lisada, puurida, mustriks teha, kasutada koostes või töötlemisel ning visandada selle lamedatele tahkudele. Sel ei ole oma ajalugu: võrk on ainult kolmnurgad, nii et selle mõõtmeid ei saa muuta, ainult lisada või sellest lõigata.

## Võrgu avamine

1. Vali {{ui:Ava}} või vajuta {{key:Mod+O}} ja vali `.stl`-, `.obj`- või `.3mf`-fail. Või lohista see 3D-vaatele.
2. PartCraft loeb faili, parandab turvaliselt parandatava ja näitab, mida leidis: mitu kolmnurka ja punkti, iga parandus ja kas võrk nüüd **sulgub**.
3. Kontrolli **Ühikud failis** ja **Üles failis**. STL ja OBJ ei ütle oma ühikuid, nii et millimeeter on oletus; 3MF-fail ütleb oma ise. Rida **Suurus siin** näitab keha suurust sinu valikuga, nii et detail, mis tuleb 25,4 korda liiga väikesena, on kergesti märgatav (see oli tollides).
4. Kui ekraanil olev detail on tühi, vali {{ui:Ava kehana}}. Kui sellel on juba tunnused, vali **Kasuta seda** (lisa detailile, lõika sellest või hoia ainult kattuv osa), siis {{ui:Lisa sellele detailile}}, või {{ui:Uus detail}}, et alustada võrguga uuesti.

Ajalukku ilmub tunnus **Imported1**. Olekuriba ütleb näiteks: „bracket.stl on tahke keha: 15200.512 mm³, 14 lamedat tahku visandamiseks.“

## Mida PartCraft parandab

| Parandus | Mida see tähendab |
|---|---|
| Topelt tipud ühendatud | STL kordab iga tipu iga oma kolmnurga jaoks; need ühendatakse üheks punktiks |
| Pindalata kolmnurgad eemaldatud | Killud, mille tipud asuvad ühel joonel |
| Topelt kolmnurgad eemaldatud | Kolmnurk kirjutatud kaks korda hoitakse ühena; kaks vastassuunas (sisemine sein) eemaldatakse mõlemad |
| Väikesed lüngad suletud | Servad, mis peaaegu kohtuvad (detaili suuruse tuhandiku piires), ühendatakse |
| Augud täidetud | Ava, mille ääris on lame, täidetakse ükskõik kui suur; kõverdunud ava ainult siis, kui see on väike |
| Kolmnurgad pööratud väljapoole | Valesti suunatud kolmnurgad pööratakse naabritega kokku sobivaks, ja kogu pind pööratakse väljapoole |

## Kui võrk ei sulgu

Tahke vajab pinda ilma avausteta. Kui PartCraft ei suuda seda sulgeda, ütleb dialoog, mitu avausust ja avatud serva jäi, ning keha ei ole lisada. Sulge avaused programmis, mis võrgu tegi, või ekspordi see uuesti suletud (veekindla) võrguna ja ava uuesti.

PartCraft jätab avause rahule, kui täitmine võiks valesti arvata: suur kõverdunud auk või kaks avaust samal tasandil (puuduv rõngakujuline tahk, kus iga ääre täitmine kataks keskel oleva augu). Serv, mida jagab rohkem kui kaks kolmnurka, on samuti teatatud: selline pind ei oma ühte selget sisemust.

## Visandamine lamedatel tahkudel

Lamedad alad, mis koosnevad paljudest kolmnurkadest, ühendatakse igaüks üheks **lamedaks tahuks**, nii et visand saab nende peal olla: klõpsa tahul ja vali {{ui:Visand sellel tahul}}. Tahk, mida hiljem lõigatakse või millele lisatakse, jääb tahuks. Ümarad alad (auk, ümardus) jäävad kolmnurkadeks: need ei ole tahud, mida saaks valida, ja vaade joonistab nende kontuuri nurga järgi kolmnurkade vahel.

## Muuda hiljem

Vali **Imported1**, et näha faili, millest see tuli, mitu kolmnurka sellel on ja mida parandati. **Ühikuid failis**, **Üles failis** ja **Kasuta seda** saab seal muuta; iga muudatus on üks võtmise samm.

## Kus see hoitakse

Parandatud võrk salvestatakse faili `.partcraft.json` **sisse**, nii et võrgufaili ei ole vaja uuesti. Võrgukehaga detailifail on versioon 5: vanem PartCraft keeldub sellest selle versiooni järgi. 200 000 kolmnurgaga võrk lisab umbes 1,2 MB.

## Piirangud

- Kuni 3 miljonit kolmnurka ja 200 MB ühes failis.
- Võrgust tehtud keha ehitab võrgutuum. Täpse tuuma sisselülitamisel (ainult arendajatele) ütleb see seda ja keha ei ehitata.
- OBJ-materjalid, tekstuuri koordinaadid ja vabakujulised kõverad jäetakse välja; 3MF-värvid, materjalid ja toetusobjektid jäetakse välja (dialoog ütleb, mitu objekti jäeti vahele).
- Keha on sama peen kui võrk: jäme STL annab jämedad ümarad tahud. Sellesse puuritud augud on sama ümarad kui sinu enda tunnused.
