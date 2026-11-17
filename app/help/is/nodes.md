---
title: Hnútar: smíðaðu líkan með tengingum
summary: Tengdu tölur í punkta, punkta í ferla, ferla í yfirborð. Breyttu tölu og allt sem fylgir endurbyggist. Sérhver hnútur er líka lína í CraftScript, og myndin er vistuð í skránni.
keywords: hnútar, hnútaritill, sjónræn forritun, breytilegt, mynd, tengingar, tengi, frjálst form, freeform, nurbs, brú milli sniða, útdráttur, snúningur, hringur, ferill, yfirborð, röð, bil, handahófskennt, listi, skrift, craftscript, grasshopper
from: 3a4625de
---

**Hnútaritillinn** smíðar rúmfræði með því að tengja kassa saman. Hver kassi (hnútur) vinnur eitt lítið verk: býr til tölu, punkt, hring, brú milli sniða. Þú tengir útkomu eins við inntak þess næsta og líkanið fylgir þegar þú breytir tölu í upphafi.

Opnaðu hann úr vinnusvæðalistanum: {{ui:Nodes}}. Hann opnar ritilgluggann. Hluti sem þegar hefur mynd sýnir hana þegar þú opnar vinnusvæðið. Þetta er gluggi yfir þrívíddarsýninni: dragðu titilstikuna til að færa hann og dragðu hornið til að breyta stærð hans.

## Tengingar

1. Veldu hnút úr listanum vinstra megin (skrifaðu í leitarreitinn til að þrengja hann, <kbd>Enter</kbd> bætir við fyrstu samsvöruninni). Hann birtist í miðjum striganum.
2. Dragðu frá hringlaga **útgangspunkti** hægra megin á einum hnúti að hringlaga **inntakspunkti** vinstra megin á öðrum. Punkturinn verður grænn þegar hann passar og rauður þegar hann gerir það ekki; bentu á hann til að sjá ástæðuna.
3. Inntak sem er ekki tengt sýnir reit fyrir slegið gildi. Sláðu inn tölu og ýttu á <kbd>Tab</kbd>: útkoman endurbyggist.
4. Litli hringurinn á titilstiku hnúts er **augað** hans. Hnútur með kveikt auga er teiknaður í þrívíddarsýninni: sem línur fyrir ferla, skyggður fyrir yfirborð, sem punktar fyrir punkta.

Dragðu hnút með titilstikunni. Dragðu bakgrunninn til að hliðra, snúðu hjólinu til aðdráttar. <kbd>Delete</kbd> eyðir völdum hnúti. {{ui:Tidy}} raðar hnútunum í dálka, {{ui:Fit}} færir þá alla í sýn, {{ui:Undo}} og {{ui:Redo}} fara skref fyrir skref í gegnum breytingar þínar.

## Gerðir og einingar

Tengin hafa gerð: tala, já/nei, punktur, vigur, ferill, yfirborð, möskvi, fast efni, eða „rúmfræði“ fyrir hvaða þeirra sem er. Punktur getur matað vigurinntak og öfugt. Tölur bera einingu: **lengd** er í millimetrum og **horn** er í gráðum. Lengd getur ekki matað horn, og lengd sinnum lengd (flatarmál) er hafnað, þannig að röng tenging stöðvast þegar þú gerir hana.

Ferkantaður punktur er **listi**. Þegar listi nær inntaki með einu gildi keyrir hnúturinn einu sinni fyrir hvert atriði og útkoman verður listi. Styttri listinn endurtekur síðasta atriði sitt. Til dæmis býr **Röð** af hæðum sem fer í **Færa** til stafla af eintökum.

## Föst efni og Boole-aðgerðir sem hnútar

Hópurinn **Föst efni** býr til lokaða hluti úr sömu nákvæmu yfirborðum og yfirborðsspjaldið: **Kassi úr föstu efni**, **Strokkur úr föstu efni** og **Kúla úr föstu efni** (stærðir í mm), **Sameining**, **Frádráttur** og **Skurðpunktur** (annað fasta efnið er tekið úr því fyrsta; vikmörkin eru hversu langt þríhyrningar fasta efnis-vélarinnar mega víkja frá nákvæmu yfirborðunum), **Ávala milli flata** (flötin eftir númeri sínu í fasta efninu, 1 fyrir það fyrsta; radíus og, ef hærra en 0, radíus í endanum), **Rúmmál fasts efnis** (mm³) og **Fast efni í möskva** (til að sjá það eða baka það). Fast efni hefur sína eigin tengigerð: punktur eða tala er ekki hægt að tengja við inntak fasts efnis, og punkturinn helst rauður. Boole- og ávölunarhnútarnir nota eigin vél forritsins fyrir fast efni, sem er hlaðin í fyrsta skipti sem ritillinn opnast.

## Villur

Hnútur sem getur ekki unnið verkið sitt segir hvers vegna undir nafni sínu, með rauðu („Radíusinn verður að vera hærri en núll.“), og hnútarnir á eftir bíða. Sömu skilaboð eru Vandamál í Vandamálaspjaldinu, svo þú finnur þau þaðan.

## Sérhver hnútur er lína í skrift

Ýttu á {{ui:Script}} til að sjá myndina sem CraftScript: ein lína fyrir hvern hnút, eins og `n3 = nd_circle(n2, n1, [0 0 1]);`. Breyttu textanum og ýttu á {{ui:Make the graph from this script}} til að færa hann aftur yfir í mynd. Sömu `nd_`-föllin virka í CraftScript í PartCraft, þannig að mynd má keyra, endurtaka eða prófa þar. Slembitölur taka alltaf **upphafsgildi**, þannig að sama mynd gefur sömu niðurstöðu í hverri tölvu.

## Vistað með skránni

Myndin er vistuð í hlutaskránni (ekki í sögunni, þannig að Afturkalla í ritlinum er sér). Hnútarnir búa til ferla, yfirborð og möskva við hliðina á fasta efninu: þeir breyta ekki þáttum hlutarins.
