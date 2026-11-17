---
title: Ferilsdráttur, brú milli sniða og halli
summary: Dragðu lokað snið eftir braut úr skissulínum eða jöðrum líkans, blandaðu saman sniðum á mismunandi planum og bættu halla við fleti; með valkostunum, nákvæmu niðurstöðunum og skilaboðunum.
keywords: ferilsdráttur, dreginn stútur, dreginn skurður, rör, braut, brú milli sniða, brúaður stútur, blöndun sniða, línuleg, halli, hallahorn, mjókkandi fletir, hlutlaust plan, togstefna, mót
from: 9d637981
---

:::note
**Í þessari útgáfu** eru ferilsdráttur og brú milli sniða ekki smíðuð enn: þau þurfa nákvæman rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki. [Hvað er ekki smíðað enn](topic:not-built-yet) segir hvað skal gera í staðinn; kaflarnir Ferilsdráttur og Brú milli sniða lýsa þeim eins og þau virka með nákvæmum kjarna. **Halli virkar** á sléttum fleti: möskvakjarninn smíðar hann, með sömu niðurstöðu og nákvæmur kjarni gefur.
:::

Öll þrjú eru í {{ui:Meira}}-valmynd Eiginleikahópsins (sjá [Möskvakjarninn](topic:solid-kernels)). Hvert þeirra getur bætt efni við, skorið það, haldið aðeins skörunina (**Skerast**) eða búið til **Nýjan hlut** (ferilsdráttur og brú milli sniða: **Aðgerð** í spjaldinu).

## Ferilsdráttur

Ferilsdráttur færir lokað snið eftir braut: rör, handföng, vírgorma, teina.

1. Teiknaðu **brautina** í einni skissu: línur og bogar tengdir enda við enda (eða notaðu jaðra líkansins, hér að neðan).
2. Teiknaðu **sniðið** í annarri skissu þar sem planið fer í gegnum annan enda brautarinnar, til dæmis hring á efra planinu við upphaf brautar sem er teiknuð á framplaninu.
3. Veldu sniðsskissuna, veldu {{ui:Meira}} og síðan {{ui:Ferilsdráttur}}. Nýjasta aðra skissan verður brautin.

Í spjaldinu:

| Stilling | Hvað hún gerir |
|---|---|
| **Braut** | Hakaðu við skissurnar sem mynda brautina (nokkrar skissur tengjast enda við enda í eina þrívíða braut); **Velja jaðra líkans** bætir við jöðrum hlutarins |
| **Stefna** | Fylgja brautinni (sjálfgefið), Frenet, Föst (snið haldast samsíða sniðinu), Halda stefnu, Eftir leiðarferli |
| **Endastærð** | Sniðið stækkar eða minnkar línulega í þessa stærð í endanum (1 = stöðugt) |

Skarpar hornar í brautinni eru skáskornir. Hringur með radíus 5 sem er dreginn eftir 100 mm línu er strokkur upp á nákvæmlega 2500π mm³; eftir fjórðungsboga með radíus 50 er það fjórðungur af tórus, 625π² mm³.

## Brú milli sniða

Brú milli sniða blandar saman tveimur eða fleiri sniðum á mismunandi planum.

1. Teiknaðu hvert snið í sína skissu (eina lokaða lykkju hver), á grunnplönum, viðmiðunarplönum (sjá [Viðmiðunarplön, ása og punkta](topic:reference-geometry)) eða flötum.
2. Veldu {{ui:Meira}} og síðan {{ui:Brú milli sniða}}. Sérhver ónotuð skissa með einni lykkju verður snið, í söguröð.

Spjaldið raðar sniðunum í röð (**Upp** raðar upp á nýtt, **Fjarlægja** tekur eitt út); **Bæta við skissu** bætir annarri við og **Velja flöt** bætir sléttum fleti hlutarins við. **Beinn** býr til slétta fleti milli sniða í stað mjúkrar blöndunar. Milli tveggja ferninga er þetta sama stubbkeilan (40 mm ferningur í 20 mm ferning á 30 mm hæð: nákvæmlega 28000 mm³).

Snið með mismunandi fjölda hliða (ferningur í þríhyrning) eru pöruð af OpenCascade, sem getur snúið hliðarflötunum; eiginleikinn varar þig við. Teiknaðu snið með sama fjölda hliða, byrjaðu á samsvarandi hornum, fyrir hreinustu niðurstöðu.

### Leiðarar

Leiðarar eru ferlar sem hliðar brúarinnar verða að fylgja frá fyrsta sniði að því síðasta, fyrir bungu, mjóstöðu eða útflæði sem þú teiknar sjálfur.

1. Teiknaðu tvo leiðara eða fleiri: opna ferla (línur, boga, splæsur) sem liggja frá fyrsta sniði að því síðasta og skera hvert snið einu sinni. Ein skissa getur haldið nokkrum leiðurum: sérhver aðskilin keðja í henni er sinn leiðari. Teiknaðu leiðarann þannig að hann mæti hverju sniði í raun: smelltu endum hans á punkta sniðanna.
2. Í Brúar-spjaldinu, undir **Leiðarar**, hakaðu við skissurnar sem halda þeim, eða smelltu á {{ui:Veldu líkanajaðra sem leiðara}} og smelltu á jaðra hlutarins ({{key:Esc}} lýkur).

Með leiðurum er brúin Gordon-yfirborð í gegnum sniðin og leiðarana (sjá [Yfirborð í gegnum net ferla](topic:gordon-surfaces)), lokað með sléttum endum í fast efni. Spjaldið segir hversu nákvæmlega hún fylgir þeim. Hvert snið verður þá að vera skissa (punktur eða flötur getur ekki tekið leiðara), og **Beinn** á ekki við. Leiðari sem missir af sniði um meira en 0.01 mm er hafnaður, ásamt bilinu.

Prófað: tveir hringir (20 mm og 10 mm í þvermál yfir 40 mm) með fjórum beinum leiðurum gefa rúmmál keilustubbsins innan 0.000002 %; bogar sem bunga út um 5 mm gefa tunnu sem fylgir hverjum leiðara innan 0.00001 mm.

## Halli

Halli hallar flötum svo hlutur losni úr móti.

1. Veldu {{ui:Meira}} og síðan {{ui:Halli}} (eða haltu {{key:Shift}} inni og smelltu á fleti fyrst). Án valinna flata ertu í valham: smelltu á hvern flöt sem á að halla, og síðan {{ui:Lokið}}.
2. Stilltu **Horn (°)**, **Hlutlaust plan** (þar sem fletirnir halda stærð sinni) og **Togstefnu** (eðlislína hlutlausa planssins sjálfgefið).

Jákvætt horn hallar fletinum inn á við eftir togstefnunni og fjarlægir efni; neikvætt bætir því við. Hlutlaust plan byrjar sem Efra planið. Í þessari útgáfu er aðeins hægt að halla sléttum flötum: strokkur, keila eða frjáls flötur segir „Halli: í þessari útgáfu aðeins sléttir fletir (möskvakjarninn smíðar hann).“ Fjórar hliðar 100 × 100 × 50 blokkar, hallaðar um 5° um botninn, verða stubbkeila með nákvæmlega h/3·(a² + b² + ab), þar sem b = a − 2h·tan 5°.

## Skilaboð

| Skilaboð | Hvað á að gera |
|---|---|
| „Plan sniðsins verður að fara í gegnum annan enda brautarinnar …“ | Færðu sniðsskissuna að upphafi (eða enda) brautarinnar |
| „Brautin hefur bil: ferlar hennar tengjast ekki enda við enda …“ | Tengdu ferla brautarinnar; í aðskildum skissum verða endarnir að mætast nákvæmlega |
| „Snið brúar þarf nákvæmlega eina lokaða lykkju“ | Skiptu skissunni, eða fjarlægðu aukalykkjuna |
| „… er ekki hægt að halla um þetta hlutlausa plan …“ | Flöturinn er samsíða hlutlausa planinu eða mætir því ekki |
| „Halli: í þessari útgáfu aðeins sléttir fletir (möskvakjarninn smíðar hann).“ | Valinn flötur er bogadreginn. Fjarlægðu hann; hallaðu aðeins sléttum fleti |

:::note
Ekki smíðað enn: snúnir ferilsdrættir, þunnveggja- og yfirborðsferilsdrættir, leiðarar brúar og snertilína í enda, halli á strokkum, keilum og frjálsum flötum.
:::
