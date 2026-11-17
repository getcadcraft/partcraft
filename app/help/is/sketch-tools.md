---
title: Sveigðar línur, stytting, jöfnfæra og önnur skissuverkfæri
summary: Teiknaðu sveigðar línur með festipunktum og stjórnpunktum, styttu og framlengdu ferla, jafnfærðu keðju, speglaðu um miðlínu, bættu við marghyrningum og raufum, mynstraðu skissurúmfræði og varpaðu brúnum hlutarins.
keywords: sveigð lína, festipunktur, stjórnpunktur, b-spline, nurbs, ferill, stytta, framlengja, jafnfæra, spegla, samhverfur, marghyrningur, sexhyrningur, rifa, mynstur, línulegt mynstur, hringlaga mynstur, varpa, varpa brún, innifela, breyta hlutum
from: 3ecb166a
---

Þessi verkfæri virka í opinni skissu. {{ui:Sveigð lína}} og {{ui:Stytta}} eru í verkfæraslánni. Hin eru undir {{ui:Meira}} aftast í skissuverkfærunum. Hvert verkfæri er eitt afturköllunarskref og {{key:Esc}} stöðvar það. Fyrir grunnteikniverkfærin sjá [Teiknaðu þína fyrstu skissu](topic:sketch-basics).

## Sveigðar línur

Sveigð lína er slétt ferill. Til eru tvær gerðir.

| Verkfæri | Lykill | Hvernig á að teikna |
|---|---|---|
| {{ui:Sveigð lína}} | {{key:B}} | Smelltu á punktana sem ferillinn fer í gegnum. Ljúktu með {{key:Enter}}, {{key:Esc}}, hægrismelli eða tvísmelli. Smelltu aftur á fyrsta punktinn til að loka sveigðu línunni |
| {{ui:Sveigja með stjórnpunktum}} (undir {{ui:Meira}}) | | Smelltu á stjórnpunktana. Ferillinn dregst að þeim en snertir aðeins fyrsta og síðasta punktinn. Strikaður stjórnmarghyrningur sést meðan þú teiknar og á eftir |

- **Punktarnir eru skissupunktar.** Dragðu þá, eða gefðu þeim tengsl og málsetningar eins og hvaða öðrum punkti sem er. Fyrsti punktur sveigðrar línu getur smellst á enda línu, sem tengir þá með samfallstengslum.
- **Snerting við enda.** Veldu línu, boga eða sveigða línu sem mætir öðrum enda sveigðrar línu, síðan sveigðu línuna, og veldu {{ui:T Snertill}}. Stefna endans fylgir þá línunni. Snerting fjarri endum sveigðrar línu er hafnað: „Snerting við sveigða línu krefst þess að línan, bogi eða sveigð lína mæti öðrum enda hennar.“
- **Endar.** Án snertitengsla eru endar festipunktasveigðrar línu eðlilegir (engin bogun við allra endann). Ferillinn er þriðja stigs og fer í gegnum sérhvern punkt, en bil hans ræðst af fjarlægðunum milli punktanna.
- **Lokaðar sveigðar línur** mynda snið sjálfar. Opnar sveigðar línur tengja línur og boga í lokaða lykkju eins og hver annar ferill.
- Eyðing punkts inni í sveigðri línu fjarlægir þann punkt og heldur línunni meðan hún hefur enn að minnsta kosti tvo punkta (þrjá þegar hún er lokuð).

{{ui:Útdráttur}} og {{ui:Snúningur}} smíða sveigðu línuna með möskvakjarnanum úr stuttum beinum hlutum (raunverulegir ferlar þurfa nákvæman kjarna: ekki smíðaðir enn í þessari útgáfu). DXF-útflutningur skrifar sveigða línu sem marglínu sem helst innan 0.01 mm frá ferlinum, því DXF R12 hefur enga sveigðarlínu-einingu.

## Stytta og framlengja

| Verkfæri | Lykill | Hvernig |
|---|---|---|
| {{ui:Stytta}} | {{key:T}} | Bentu á feril: hlutinn sem færi burt sýnist rauður, upp að næstu skurðpunktum. Smelltu til að fjarlægja hann. Feril sem sker ekkert er fjarlægður í heild |
| {{ui:Framlengja}} (undir {{ui:Meira}}) | {{key:E}} | Smelltu á línu eða boga nálægt endanum til að framlengja. Hann vex þar til hann nær næsta ferli sem hann mætir. „Ekkert er fyrir þann enda að ná í.“ þegar ekkert er í veginum |

{{ui:Stytta}} og {{ui:Framlengja}} virka á línur, boga, hringi og sveigðar línur ({{ui:Framlengja}}: línur og boga).

- Stytt **hringur** verður að boga. Radíus- eða þvermálsmálsetning hans færist yfir á bogann.
- Stytting miðju línu skilur eftir tvær línur sem haldast á sömu beinu línu. Stytting miðju boga skilur eftir tvo boga með sömu miðju og jöfnu tengsli.
- Stytt **sveigð lína** verður að sveigju með stjórnpunktum sem fylgir gamla ferlinum nákvæmlega. Snertitengsl við enda sem er varðveittur helst.
- Nýi endinn er settur á ferilinn sem skar hann (á línuna, bogann eða hringinn, eða fellur saman við enda hans). Sveigðar línur geta ekki haldið punkti, þannig að sveigð lína sem sker bætir engu tengslum við.

**Tengsl sem passa ekki lengur eru fjarlægð**, og stöðustikan segir hversu mörg. Til dæmis er lengdarmálsetning á styttri línu fjarlægð, en lárétt eða samsíða tengsl haldast.

## Jafnfæra

1. Veldu {{ui:Jafnfæra}} undir {{ui:Meira}} eða ýttu á {{key:O}}.
2. Smelltu á línu, boga, hring eða sveigða línu. Öll keðjan lýsist upp: allir ferlar tengdir enda við enda, upp að punkti þar sem þrír eða fleiri mætast. Til að jafnfæra aðeins hluta keðju skaltu fyrst velja þá ferla, velja síðan {{ui:Jafnfæra}} og smella á einn þeirra.
3. Færðu bendilinn á þá hlið sem afritið á að fara. Strikuð forskoðun fylgir. Ýttu á {{key:B}} fyrir báðar hliðar.
4. Smelltu, sláðu inn fjarlægðina og ýttu á {{key:Enter}}.

Línur og bogar eru jafnfærðir nákvæmlega. Hornin eru framlengd eða stytt þar til þau mætast. Afritið hefur eina **Jafnfæru**-málsetningu og hinir hlutarnir fylgja henni: tvísmelltu á málsetninguna til að breyta öllu afritinu. Fjarlægð sem er of stór fyrir keðjuna er hafnað, til dæmis „Þessi fjarlægð er of stór fyrir þessa keðju: önnur hlið myndi snúast við.“

**Sveigð lína** er jafnfærð með nýrri festipunktasveigðri línu innan 0.001 mm frá réttri jafnfærslu. Þetta afrit er fast: það fylgir ekki síðari breytingum og hefur enga Jafnfæru-málsetningu. Sveigð lína í keðju þarf slétt (snertandi) samskeyti við enda sína.

## Spegling

1. Með {{ui:Velja}} veldu hvað á að spegla.
2. Veldu {{ui:Spegling}} undir {{ui:Meira}} eða ýttu á {{key:M}}.
3. Smelltu á línuna eða miðlínuna sem speglað er um.

Sérhver speglaður punktur fær **Samhverft**-tengsl við upprunalega punktinn, þannig að afritið fylgir þegar upprunalegi punkturinn breytist. Punktar sem liggja á speglunarlínunni eru sameiginlegir, og speglaðir hringir fá {{ui:= Jafn}}-tengsl. Ef ekkert var valið, smelltu á hlutina sem á að spegla, ýttu á {{key:Enter}}, og smelltu síðan á speglunarlínuna.

## Marghyrningar og rifur

| Verkfæri | Hvernig |
|---|---|
| {{ui:Marghyrningur}} | Smelltu á miðjuna, síðan á horn, síðan sláðu inn fjölda hliða (3 til 64). Hliðarnar eru jafnar og hornin liggja á hjálparhring. Málsettu hringinn til að stilla stærð marghyrningsins |
| {{ui:Rifa}} | Smelltu á miðju annars enda, síðan á miðju hins endans, síðan smelltu til að stilla breiddina. Tvær línur, snertilar við tvo jafna hálfhringi |

## Skissumynstur

Veldu rúmfræðina fyrst, síðan:

- {{ui:Línulegt mynstur}}: smelltu á upphafspunkt, síðan á þann stað þar sem fyrsta afritið fer, og sláðu síðan inn fjölda afrita (að meðtöldu upprunalega).
- {{ui:Hringlaga mynstur}}: smelltu á miðjuna, sláðu síðan inn fjölda afrita, jafndreifðra um heilan hring.

Afritin taka með sér tengslin milli valinnar rúmfræði (hringlaga mynstur sleppir láréttum og lóðréttum tengslum). Afritin eru ekki tengd við upprunalega: breyttu einu, og hin haldast eins og þau eru.

## Varpa brúnum hlutarins

1. Veldu {{ui:Varpa brún}} undir {{ui:Meira}}.
2. Smelltu á beina eða hringlaga brún hlutarins fyrir aftan skissuna.

Brúnin er afrituð nákvæmlega á skissuflötinn og föst ({{ui:⚓ Festa}}-tengsl). Hún fylgir ekki síðari breytingum á hlutnum. Ýttu á {{key:Q}} til að gera hana að hjálparrúmfræði. Hringur sem hallar að skissuflötnum myndi varpast sem sporbaugur, þannig að honum er hafnað. Sama gildir um frjálsform brúnir og brúnir sem vísa beint út úr skissunni. Varpun þarf nákvæman kjarna: hún er ekki smíðuð enn í þessari útgáfu.
