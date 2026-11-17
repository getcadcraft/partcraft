---
title: Athugaðu spennu og beygju (Hermun)
summary: Veldu efni, festu fleti, bættu við kröftum, þrýstingi eða eigin þyngd hlutarins, leystu, og lestu von Mises-spennu, færslu, öryggisstuðul, viðbrögð og eigintíðnir á líkaninu, ásamt því sem aðferðin getur og getur ekki sagt þér.
keywords: hermun, FEA, lifandi greining, uppfæra meðan breytt er, brjóta það, hvað brotnar fyrst, álagsstuðull, ólínulegt, plastískt, gefa sig, plastísk tognun, tvílínulegt, snerting, snertipar, refsing, bundið, núningslaus snerting, CalculiX, .inp, .frd, endanlegt stak, spenna, tognun, von Mises, færsla, beygja, öryggisstuðull, flæðimörk, viðbragð, álag, kraftur, þrýstingur, þyngdarafl, eigin þyngd, fest, núningslaus, stuðningur, þvingun, efni, stál, ál, títan, ABS, PLA, nylon, eigintíðni, titringur, möskvi, stærð staks, fjórflötungar, voxel-teningar, gæði möskva, höfuðspenna, jafngild tognun, villumat, bognir fletir, göt, bogar, aðlögunarhæf fínstilling, samleitni, samleitni möskva, nákvæmt yfirborð, kúla, keila, tórus, spline, frjálst form
from: 6f2fdec1
---

Vinnusvæði hermunar svarar spurningunni „gefur hlutinn sig eða brotnar hann undir þessu álagi?“ fyrir hlutinn sem þú ert að móta. Það er **línuleg stöðurannsókn** (litlar beygjur, efnið er teygjanlegt) eða **eigintíðnirannsókn**, leyst á möskva úr annars stigs fjórflötungum sem fylgir flötum hlutarins (eða, ef þú velur, úr litlum jafnstórum teningum). Hún virkar á nefndu flötunum sem möskvakjarninn gefur hlutnum (sjá [Möskvakjarninn](topic:solid-kernels)).

Veldu **Hermun** í reitnum **Vinnusvæði** vinstra megin á tækjastikunni. Hluturinn þinn breytist ekki; rannsóknin er vistuð inni í hlutaskránni og sérhver breyting á henni er hægt að afturkalla.

## Settu upp rannsókn

1. Ýttu á **Ný rannsókn** í hægra spjaldinu.
2. Veldu **Efni**. Spjaldið sýnir stífleika þess (E), Poisson-stuðul, eðlismassa og flæðimörk. Gildin eru dæmigerð handbókargildi; vottuð gildi birgis þíns geta verið önnur.
3. Veldu **Möskva**:
   - **Fjórflötungar (nákvæmt)**, sjálfgefið: 10 hnúta fjórflötungar þar sem ytri fletirnir liggja á fleti hlutarins, með bognum jöðrum á götum, fellingum og öðrum ávölum flötum. Hnútarnir á sléttum, sívalningslaga, keilulaga, kúlulaga og tórusflötum, snúnum og útpressuðum flötum og frjálsformsflötum (B-spline) liggja á nákvæma yfirborðinu; sérhver annar flötur fylgir birtingarmöskva sínum, og niðurstöðutaflan segir hversu margir flatir gerðu það. Möskvinn verður þéttari sjálfkrafa nálægt bognum flötum, þunnum veggjum og skörpum jöðrum.
   - **Voxel-teningar (hratt)**: hluturinn fylltur með jöfnum teningum. Fljótlegt, en bognir fletir verða að þrepum. Rannsóknir vistaðar áður en fjórflötungsmöskvinn var til halda þessu.
4. Skildu **Stærð staks** eftir auða fyrir sjálfvirka stærð (um 12.000 fjórflötunga, eða 20.000 teninga), eða skrifaðu eina í mm. Spjaldið sýnir um hversu mörg stök það gerir áður en þéttari blettirnir bætast við. Með fjórflötungum **Smærri stök á bognum flötum** (kveikt sjálfgefið) fínstillir göt og fellingar, þar sem álag yfirleitt nær hámarki.

### Fínstilla sjálfkrafa

Með fjórflötungum, stöðu- eða knékunarrannsókn (án hitaálags), eigintíðnirannsókn og stöðugri varmarannsókn býðst **Fínstilla sjálfkrafa (aðlögunarhæft)**. Hakaðu við og stilltu:

- **Markvilla (%)**: lausnin stöðvast þegar áætlaða villan er undir henni (1 % til að byrja með).
- **Flestar umferðir**: mesti fjöldi lausna sem hún má keyra (5 til að byrja með, í mesta lagi 10).

Hver umferð leysir, finnur stökin með stærstu áætluðu villuna, skiptir þeim (og eins fáum nágrönnum og þarf til að halda möskvanum heilum), og leysir aftur. Nýir hnútar á bognum flötum fara á nákvæma yfirborðið. Niðurstöðurnar sýna þá töflu og línurit með, fyrir hverja umferð, stökunum, óþekktu stærðunum, áætluðu villunni og hámarksspennunni (eða hitastiginu) og færslunni (eða varmaflæðinu), ásamt línu sem segir hvers vegna hún stöðvaðist: markinu var náð, umferðirnar kláruðust, næsti möskvi yrði of stór, eða umferð mistókst (þá sérðu síðustu góðu umferðina).

Lestu áætlunina sem áætlun. Hún (Zienkiewicz–Zhu; borin saman við nákvæm svör er hún um 0.6 til 0.95 af raunverulegu villunni) mælir villuna yfir **allan hlutinn**, þannig að hámarksspenna við gat eða fellingu er yfirleitt enn örlítið röng þegar áætlunin virðist lítil: fyrir spennuþéttni skaltu setja markið undir 1 % og fylgjast með því hvernig hámarkið sest frá umferð til umferðar. Við skarpt innra horn eða jaðar fasts flatar er raunverulega spennan óendanleg, þannig að áætlunin nær þangað aldrei: umferðirnar klárast í staðinn.

**Eigintíðnir og knékun.** Fyrir eigintíðnirannsókn nær áætlunin til allra hama sem þú baðst um, hver talinn jafnt; taflan og línuritið fylgja fyrstu tveimur tíðnunum. Á hluta með aðeins sléttum flötum getur tíðni aðeins lækkað frá umferð til umferðar (hver möskvi geymir þann á undan); bognir fletir nálgast líka sína raunverulegu lögun, sem getur fært tíðni örlítið í hvora áttina sem er. Fyrir knékun nær áætlunin til forspennunnar og knékunarhamanna, og taflan fylgir álagsstuðlunum. Prófað á 100 × 10 × 10 mm stálstöng: fyrsta tíðnin sest frá 812.4 í 811.9 Hz á fjórum umferðum, 0.4 % undir Euler–Bernoulli (sem hunsar skurð), og álagsstuðull súlunnar innan 0.5 % af Euler.

## Festu og hladdu

Sérhver rannsókn þarf að minnsta kosti einn stuðning og, fyrir spennu, eitt álag.

1. Ýttu á {{ui:Fest}} á tækjastikunni. Nýi stuðningurinn er valinn og bíður eftir flötum: smelltu á þá fleti sem haldast kyrrir (smelltu aftur á flöt til að sleppa honum). Ýttu á **Lokið við val** eða {{key:Esc}} þegar þú ert búinn. Bláir keilur merkja föstu flatina.
2. Ýttu á {{ui:Kraftur}} og smelltu á þá fleti sem krafturinn verkar á. Í spjaldinu skrifarðu **Heildarkraft** í njútonum og velur **Stefnu**: inn í flötinn, eða eftir ás. Krafturinn skiptist á valdu flötina eftir flatarmáli. Appelsínugular örvar sýna hann.
3. Ýttu á {{ui:Þrýstingur}} fyrir þrýsting í MPa (N/mm²) sem þrýstir inn í valdu flötina; neikvæður þrýstingur togar.

Fleiri gerðir eru í listanum **Bæta við** í spjaldinu: **Núningslaus flötur** (flöturinn má renna eftir sjálfum sér en ekki færast frá honum — notaðu hann fyrir samhverfuplön og mjúka stuðninga) og **Þyngdarafl** (eigin þyngd hlutarins, 9.81 m/s², í þeirri stefnu sem þú velur).

Stuðningur sem skilur hlutinn eftir laustan til að renna eða snúast er hafnaður, og sagt er hvaða hreyfing er laus.

## Leystu og lestu niðurstöðurnar

Ýttu á {{ui:Leysa}}. Vinnan keyrir í bakgrunni; **Stöðva** hættir við hana. Síðan:

- Hluturinn er litaður eftir **von Mises-spennu**; veldu **Færsla** eða **Öryggisstuðul** í **Sýna**. Skýringin gefur kvarðann.
- Bentu á hlutinn til að lesa gildin undir bendlinum.
- Hakaðu við **Aflöguð lögun** til að sjá hlutinn beygðan (hreyfingin er stækkuð með **Mælikvarða**; sú raunverulega er í töflunni).
- Taflan sýnir mestu spennuna og hvar hún er, mestu færsluna, minnsta **öryggisstuðul** (flæðimörk ÷ von Mises-spenna; undir 1 gefur efnið sig), beitt álagið og **viðbrögðin** við stuðningunum (þau jafna álagið), og möskvann sem notaður var.

Fyrir **eigintíðnir**, veldu þá **Gerð**, stilltu hversu marga **Hami**, og leystu. Hver hamur sýnir tíðni sína og lögun (lögun eru skalaðar í 1 við mesta hreyfingu sína).

Ef þú breytir hlutnum eru niðurstöðurnar merktar úreltar: leystu aftur.

## Gefa sig og snerting (ólínulegar rannsóknir)

Tvær rannsóknargerðir til viðbótar fara lengra en „efnið helst teygjanlegt“:

- **Ólínulegt (efnið gefur sig)** fylgir beinni línu efnisins upp að flæðimörkum þess, og svo flatari halla (**Halli eftir flæði**, 1 % af E ef autt). Álagið heldur áfram í **Álagsskrefum**; skref sem nær ekki jafnvægi er helmingað sjálfkrafa. Niðurstöðurnar bæta **Plastískri tognun** við línuritin og segja hversu stór hluti álagsins var borinn. Ef skref nær enn ekki jafnvægi stöðvast rannsóknin við síðasta góða skref og spjaldið ⚠ Vandamál segir hvar: hluturinn hefur klárað styrk sinn þar (hrun), eða skrefin eru of stór.
- **Snerting milli hluta** leyfir aðskildum hlutum hlutarins að þrýsta hver á annan. Bættu við **Snertipari**, veldu fleti hliðar A (flatina sem þrýsta) með {{ui:Velja fleti}}, og síðan hliðar B með {{ui:Velja fleti hliðar B}}. **Núningslausir** hlutar þrýsta, renna og aðskiljast; **bundnir** hlutar haldast fastir. Hver hluti er möskvaður fyrir sig, þannig að lítið bil á milli þeirra er í lagi. Snerting er refsiaðferð: hlutarnir sökkva örlítið hver inn í annan (**refsistuðullinn** × E ÷ stærð staks ákvarðar hversu stíf snertingin er). Taflan sýnir dýpsta inngröftinn, og spjaldið Vandamál varar við þegar hann er meira en 1 % af stærð staksins: hækkaðu stuðulinn eða notaðu smærri stök.

Báðar nota fjórflötungsmöskvann. Núningur, mikil renna og miklir snúningar eru ekki leyst hér.

## Keyrðu í CalculiX

**Flytja út › CalculiX-skrá (.inp)** (eða {{ui:Vista CalculiX-skrá (.inp)}} í spjaldinu) vistar rannsóknina sem inntaksskrá fyrir CalculiX, sérstakt forrit sem þú setur upp og keyrir sjálf: sama möskva, efni, stuðningar, álag og snertipör, í mm, N og MPa. Keyrðu hana, og **Flytja út › CalculiX-niðurstöður (.frd)** les niðurstöðuskrá hennar aftur yfir sama möskva og sýnir færsluna (og von Mises-spennu þegar skráin inniheldur spennur). Ef þú breyttir hlutnum eða stærð staksins þar á milli er möskvinn ekki sá sami, og PartCraft segir það: vistaðu nýja skrá.

## Hversu mikið má treysta henni

PartCraft athugar lausnarann sinn á handreiknuðum formúlum (beygju á enda stöng PL³/3EI innan 1 %, teygju stangar PL/AE nákvæmlega, fyrstu tíðni stöngar innan 3 %, spennuna umhverfis gat í plötu). Samt skaltu hafa þessi takmörk í huga:

- **Möskvinn.** Með fjórflötungum athugar PartCraft beygju og beygjuspennu stöngar (innan 0.3 %), spennuna við gat í plötu (Kt, innan um 1 %), þykkt rör undir þrýstingi (Lamé, innan 0.3 %) og fyrstu tíðni (innan 0.4 %). Taflan sýnir **gæði möskva** (minnstu og stærstu horn milli flata staksins; undir um 10° er stakið lélegt) og **áætlaða spennuvillu**: ef hún er meira en nokkur prósent skaltu leysa aftur með minni stærð staks, eða láta **Fínstilla sjálfkrafa** gera það. Á plötu með gati og stöng með tveimur jaðarskorum náði sjálfvirk fínstilling innan 1 % af kennslubókar-Kt með um sjöttungi óþekktra stærða sem það þurfti til að gera allan möskvann þéttari. Með voxel-teningum er gat eða felling stigi í stærð teningsins, þannig að spennan þar er gróf.
- **Skörp innri horn og jaðrar fastra flata hafa ekkert raunverulegt hámarksálag.** Gildið þar heldur áfram að vaxa eftir því sem stökin minnka. Lestu spennur örlítið frá slíkum stöðum, eða ávalaðu hornið í líkaninu.
- **Niðurstöður til lestrar.** Auk von Mises-spennu, færslu og öryggisstuðuls sýnir fjórflötungsrannsókn **mesta og minnsta höfuðspennu** (tog og þjöppun) og **jafngilda tognun**. Hakaðu við **Sýna möskva** til að sjá stökin.
- **Stöðurannsóknir eru línulegar og teygjanlegar.** Fyrir gefa sig og snertingu notaðu ólínulegu rannsóknargerðirnar hér að ofan; stórar beygjur og þreyta eru ekki leyst. Hiti, hitaspenna og línuleg knékun eru sínar eigin rannsóknargerðir: sjá [Hiti, hitaspenna og knékun](topic:thermal-and-buckling).
- **Sérhvert efni er eins í allar áttir.** Þrívíddarprentuð plast eru veikari þvert á lögin sín, oft um þriðjung eða meira.
- Þetta er tilraunasmíð: athugaðu hluti sem skipta máli á annan hátt.

## Uppfæra meðan þú breytir (Live)

Hakaðu við **Uppfæra meðan ég breyti** í Leysa-blokkinni og svör Hermunar fylgja breytingum þínum. Breyttu víddu, álagi, efninu eða umhverfinu og **skjót niðurstaða** birtist strax, gerð með stökum fjórum sinnum stærri en stærð rannsóknarinnar; þegar þú stoppar í smástund (um sekúndu) kemur **nákvæm niðurstaða** rannsóknarinnar í staðinn. Niðurstöðurnar segja hvora þú ert að skoða („Skjót niðurstaða“ eða „Nákvæm niðurstaða“) og stærð staksins. Skjót niðurstaða er góð fyrir stefnu og stærðargráðu: á stálkraganum var hún innan 1 % í beygju og um 4 % í spennu miðað við nákvæmu niðurstöðuna. Treystu þeirri nákvæmu fyrir tölur sem þú ætlar að nota. Stöðu-, eigintíðni-, hita- og knékunarrannsóknir virka þannig; Live er skoðunarstilling og er ekki vistuð í hlutnum. Leysa sem þú ýtir á sjálfur helst eins þar til næsta breyting kemur.

## Finndu út hvað brotnar fyrst (Brjóta það)

Fyrir stöðu- eða knékunarrannsókn, ýttu á **Hvað brotnar fyrst?** í **Brjóta það**-blokkinni. PartCraft skalar álag rannsóknarinnar (krafta, þrýsting og þyngd saman) þar til hluturinn gefur sig og sýnir, verst fyrst, **álagsstuðulinn að fyrstu flæði** (stuðulinn á núverandi álagi þar sem mesta von Mises-spenna nær flæðimörkum efnisins, með rauðu merki þar sem það gerist) og **álagsstuðulinn að knékun** fyrir sömu stuðninga og álag. Stuðull 4.3 þýðir að hluturinn þolir 4.3 sinnum álag sitt áður en hann gefur sig; **stuðull undir 1 þýðir að hann gefur sig þegar er hann er hlaðinn**, og það birtist í Vandamálalistanum sem villa (veikasta niðurstaðan er sýnd sem athugasemd jafnvel þegar allt stenst). Stuðlarnir koma úr línulegri rannsókn á fjórflötungum við þína stærð staks, þannig að þeir eru jafn góðir og sú rannsókn er: spennan við fastan flöt eða skarpt horn hefur ekkert raunverulegt hámark (sjá að neðan), og flæðistuðullinn verður þar á varfærna kantinum. Aðstoðarmaðurinn þinn getur keyrt sömu athugun með verkfærinu `break_run`.

## Tengt

- [Hiti, hitaspenna og knékun](topic:thermal-and-buckling)
- [Vaxtu lögun úr álagi (Generative)](topic:generative-design)
- [Mældu fjarlægðir, horn og massa](topic:measure)
- [Það sem er ekki smíðað enn](topic:not-built-yet)
