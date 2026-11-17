---
title: Frjáls yfirborð (NURBS)
summary: Sléttir ferlar og yfirborð við hlið hlutarins — brú milli sniða, ferilsdráttur, ferlanet, fjögurra-jaðra plástrar, samrunar, styttingar — með G0, G1 og G2 samfellu mældri á nákvæmu yfirborðunum, föst efni með sameiningu, frádrætti og skurðpunkti færð inn í hlutinn, sebra- og sveigjusýnir, fletir sem passað er við skönnun með mældri villu, og STEP- eða IGES-skrár. Geymt í hlutaskránni.
keywords: nurbs, skönnun, öfug verkfræði, passa, möskvi í yfirborð, punktaský, stl, stytta, gat, skera, fast efni, boole, sameina, draga frá, sauma, lokað, baka, frjálst form, free-form, yfirborð, b-spline, bspline, ferill, spline, brú milli sniða, ferilsdráttur, teinn, net, coons, plástur, samruni, samræma, samfella, g0, g1, g2, snerting, sveigja, sebra, stjórnpunktar, hnútar, stig, step, iges, class a, skrokkur, mýking
from: 64ed5196
---

**Yfirborð**-vinnusvæðið smíðar slétta ferla og yfirborð af þeirri gerð sem notuð eru í vöruskeljar, bílaboddí og bátsskrokka: NURBS, sama stærðfræði og aðrir yfirborðsmótunarhugbúnaðir nota. Allt er mælt á nákvæmu yfirborðunum, aldrei á þríhyrningunum sem þú sérð. Stærðir eru í millimetrum, eins og í restinni af PartCraft.

Veldu **Yfirborð** í **Vinnusvæði**-reitnum. Verkfæristikan hefur {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}; sérhver skipun er í spjaldinu hægra megin. Skipun segir hvað hún þarfnast ennþá: smelltu á ferla eða yfirborð í sýninni (nálægt jaðri eða enda þegar hún biður um það) eða veldu þau af listanum; sláðu inn punkta, eða smelltu á þá á fleti hlutarins (utan hans lenda þeir á jarðplaninu), og ýttu síðan á Enter.

Ferlarnir og yfirborðin eru vistuð í hlutaskránni við hliðina á fasta efninu. Þau breyta ekki þáttum hlutarins: spjaldið hefur sína eigin {{ui:Undo}} og {{ui:Redo}}, eitt skref fyrir hverja skipun.

## Ferlar

- **Ferill um punkta** fer um sérhvern punkt sem þú smellir á. **Ferill eftir stjórnpunktum** fylgir í staðinn neti punkta.
- **Setja inn hnút**, **Hækka stig** og **Lækka stig** breyta því hvernig ferill er lýst án þess að færa hann (lækkun er hafnað þegar ferillinn myndi færast meira en vikmörkin). **Endursmíða feril** gefur honum nýjan fjölda stjórnpunkta og segir hversu langt hann færðist.
- **Samræma feril** lætur enda eins ferils mæta enda annars með G0 (snertingu), G1 (sömu stefnu) eða G2 (sömu sveigju líka). **Samruni ferils** bætir nýjum ferli milli tveggja enda, G1 eða G2.

## Yfirborð

- **Brú milli sniða** í gegnum tvo eða fleiri ferla, **Reglað yfirborð** milli tveggja, **Draga feril út**, **Snúa ferli**.
- **Ferilsdráttur eftir einni teini** ber snið eftir braut án þess að snúa því; **Ferilsdráttur eftir tveimur teinum** heldur endum sniðsins á báðum teinum. Ferilsdrættir eru passaðir: útkoman segir hversu nálægt hún hélst hinum raunverulega ferilsdrætti.
- **Yfirborð úr ferlaneti** fer um net ferla (hver þeirra sker hvern hinna einu sinni). **Plástur úr fjórum jöðrum** fyllir fjóra ferla sem mætast í hornum sínum.
- **Samræma yfirborð** lætur jaðar yfirborðs mæta nágranna með G0, G1 eða G2; **Samruni yfirborðs** bætir yfirborði milli tveggja jaðra.
- **Jafnfærsla yfirborðs**, **Lengja yfirborð** (yfirborðið heldur áfram eins og það var á leiðinni), **Endursmíða yfirborð**.

## Athugun á gæðum

Taflan **Sameiginlegir jaðrar** sýnir hvern jaðar sem tvö yfirborð deila, með bilinu (mm), horninu á milli þeirra (°) og sveigjustökkinu (1/mm), og hvort það gerir hann að G0, G1 eða G2. Jaðar sem er verri en þú baðst um birtist í **Vandamál** með **Samræma**-lagfæringu. **Sebra**-rendur og sveigjulitir koma frá nákvæma yfirborðinu: rendur sem ganga óslitnar yfir jaðar þýða G1; rendur sem halda líka breidd sinni þýða G2.

G0–G2 eru mæld í 33 punktum á jaðar. **G3 og gæði „class A“ eru ekki mæld** og ekki er fullyrt um þau.

## Stytta yfirborð

**Stytting**-hópurinn sker yfirborð án þess að breyta lögun þess: yfirborðið heldur öllum stjórnpunktum sínum og aðeins sá hluti sem er innan útlínunnar er sýndur, talinn og skrifaður. **Stytta í rétthyrning** og **Stytta með hring** virka á hlutfalli (0 til 1) yfirborðsins í hverri átt, þannig að þau þurfa ekki val í sýninni; **Stytta með ferli** tekur lokaðan feril sem liggur á yfirborðinu (hann er varpaður inn á yfirborðið, og hafnað með skýringu þegar hann er opinn eða meira en vikmörkin frá því). Hakaðu í **Skera gat** til að fjarlægja innan útlínunnar; skildu hann eftir ómerktan til að halda aðeins innra svæðinu. Yfirborð getur haft eina útlínu sem er haldið og hvaða fjölda gata sem er; útlína sem sker aðra er hafnað. **Fjarlægja styttingu** sýnir allt yfirborðið aftur. Afturkalla spjaldsins tekur styttingu til baka eins og hvert annað skref.

STEP ber styttinguna sem mörk flatarins og IGES sem stytt yfirborð (eining 144); bæði lesa hana til baka.

## Föst efni og Boole-aðgerðir

**Föst efni**-hópurinn breytir yfirborðum í lokaða líkama og sameinar þá. Fast efni hér er safn yfirborða spjaldsins sem saman loka rúmmáli; fletir þess haldast nákvæm NURBS-yfirborð með styttingum sínum.

- **Kassi úr föstu efni**, **Strokkur úr föstu efni** og **Kúla úr föstu efni** búa til eitt úr slegnum stærðum (í mm): kassi úr sex flötum flötum, strokkur úr einni kringlóttri hlið og tveimur flötum endum stytt að hringnum, kúla úr einu snúnu yfirborði.
- **Fast efni úr yfirborðum** safnar yfirborðum sem þú bjóst til sjálfur. Veldu þau, eða veldu ekkert til að nota hvert sýnilegt yfirborð sem er ekki í föstu efni enn. Þau eru saumuð saman innan vikmarkanna: ef þau lokast ekki breytist ekkert og spjaldið segir hversu margir jaðrar eru opnir og hversu nálægt þeir þurfa að mætast.
- **Sameining**, **Frádráttur** (annað fasta efnið er tekið frá því fyrsta) og **Skurðpunktur** (aðeins það sem bæði eiga) taka tvö föst efni: smelltu á flöt hvors í sýninni, eða ýttu á **Velja** í listanum **Föst efni**. Hakaðu í **Halda báðum föstu efnunum** til að skilja þau eftir við hlið niðurstöðunnar.

Boole-aðgerð heldur sérhverjum fleti á sínu nákvæma yfirborði og sker hann með nýjum styttingarútlínum eftir skurðlínunni. Niðurstöðulínan gefur mældu tölurnar: hversu langt punktar vélar fasta efnisins þurftu að færast til að liggja á nákvæmu yfirborðunum (aldrei meira en vikmörkin), hversu nálægt skurðpunktarnir eru báðum yfirborðum (venjulega nokkrar milljónustu úr millimetra), rúmmálið, og hvort nýju fletirnir lokist aftur þegar þeir eru saumaðir upp á nýtt frá nákvæmu yfirborðunum. Rúmmál eru mæld á þríhyrningum innan vikmarkanna (0.05 mm nema þú stillir annað), þannig að rúmmál kúlu eða strokks er aðeins lægra en hið nákvæma: minna vikmark kemst nær. Boole-aðgerð sem ekki er hægt að framkvæma hreinlega (föstu efnin eiga ekkert sameiginlegt, útlína myndi skera sjálfa sig) er hafnað með orðum og engu breytt. Ein Boole-aðgerð er eitt skref í **Afturkalla** spjaldsins.

Í listanum **Föst efni** heldur **Taka úr hópi** fletinum sem venjulegum yfirborðum; ruslafatan fjarlægir fasta efnið og fleti þess.

## Ávölur og þykknun

**Ávala milli flata** ávalar jaðarinn þar sem tveir fletir eins fasta efnis mætast: veldu flötina tvo (í sýninni, eða með **Velja** í listanum), sláðu inn **radíus** og, fyrir radíus sem breytist eftir jaðrinum, **radíus í endanum** (0 heldur einum radíus). Kúla með þeim radíus er rúllað eftir jaðrinum og snertir báða fletina; ávölunin er nákvæmi hringbogi sem hún skilur eftir á hverjum punkti, tengdur í eitt yfirborð, og flatarnir tveir eru styttir þar sem kúlan snertir þá. Ytri jaðar missir efni, innra horn fær það. Niðurstöðulínan gefur það sem var mælt: hversu langt ávölunarflöturinn er frá veltandi kúlunni milli punktanna sem hann var smíðaður úr (punktum er bætt við þar til hann er innan fjórðungs vikmarkanna), stærsta horn milli ávölunarinnar og hvers flatar eftir snertilínunum, og sömu tölur og í Sameiningu. Radíus sem passar ekki (kúlan myndi yfirgefa flöt, eða flötur beygist þrengra en radíusinn) er hafnað, flatarins nefnt, og engu breytt.

**Ávala nokkra jaðra** ávalar marga jaðra í einu skrefi: veldu flatana tvo á fyrsta jaðrinum, síðan flatana tvo á þeim næsta, og svo framvegis (flötur getur verið í nokkrum pörum, til dæmis efri flötur kassa í fjórum þeirra); allir jaðrar fá radíusinn sem þú slærð inn. Hver ávöl er reiknuð út á fasta efninu eins og það var, síðan eru þær skornar hver á eftir annarri, þannig að röðin skiptir ekki máli. Þar sem tveir ávalaðir jaðrar mætast í horni þar sem hinir jaðrarnir haldast skarpir, renna ávölurnar tvær saman eftir skurðferlinum sínum (fellingu). Þar sem þrír ávalaðir ytri jaðrar þriggja flatra flata sem eru hornrétt hver á annan mætast með einum radíus, er hornið eitt **kúluplástur** sem snertir allar þrjár ávölurnar (afhakaðu **Horn** til að fá fellda hornið í staðinn); jaðar verður að vera að minnsta kosti tvöfalt radíusinn að lengd þar sem báðir endar hans eru slík horn. Niðurstöðulínan segir hversu margir jaðrar voru ávalaðir og hvernig hornin komu út. Innri jaðrar má líka ávala saman, en niðurstaða sem lokast ekki aftur er aðeins tilkynnt (línan segir það), svo athugaðu hana.

**Þykkna í fast efni** gefur yfirborði þykkt: veldu það, sláðu inn **þykktina**, og hakaðu í **Hinum megin** til að láta það vaxa hinum megin. Jafnfærði flöturinn er passaður við yfirborðið og mældur gegn því (niðurstöðulínan gefur stærsta mismun frá þykktinni); veggir fylgja öllum jöðrum og öllum styttingarútlínum. Ef yfirborðið beygist þrengra en þykktin á þeirri hlið, eða annar hluti þess liggur nær en þykktin, er því hafnað, yfirborðið og staðurinn nefndir, og engu breytt.

## Baka fast efni inn í hlutinn

**Baka** (í verkfæristiku yfirborða), eða **Baka inn í hlutinn** í listanum **Föst efni**, gerir fasta efnið að líkama hlutarins, eins og opnaður STL verður að einum: veldu fasta efnið, hvort það er **bætt við** hlutinn, **skorið** úr honum eða **skorið við** hann, og vikmörkin (hversu langt þríhyrningarnir mega vera frá nákvæmu yfirborðunum). Það er eitt skref í Afturkalla hlutans og birtist í listanum yfir þætti sem innflutningur sem heitir eftir fasta efninu. Hluturinn geymir þríhyrningana, þannig að hann opnast og endurbyggist án yfirborðanna; nákvæma fasta efnið er áfram í Yfirborði, þannig að þú getur bakað það aftur eftir breytingu.

## Skrár

Flyttu út **STEP** (AP242) eða **IGES** með ferlunum og yfirborðunum nákvæmlega eins og þau eru (B-spline-ferlar og yfirborð, ekkert breytt í þríhyrninga). Sérhvert yfirborð er sinn eigin flötur, með styttingu sinni; fast efni er skrifað sem eitt lokað skel, hver jaðar deilt af tveimur flötum sínum eins og önnur CAD-forrit búast við (stöðulínan segir hversu mörg föst efni fóru þannig út). Í IGES er sama fasta efnið eitt manifold solid B-rep (eining 186 yfir lokaðri skel 514, flötum 510, lykkjum 508, einum jaðrlista 504 og einum hornalista 502); fast efni þar sem flatir passa ekki jaðar fyrir jaðar er skrifað sem aðskildir fletir, og línan segir það. **Flytja inn…** les slíkt fast efni til baka sem fast efni, úr STEP og úr IGES.

## Mýking skrokklína

**Mýkja** (í verkfæristiku yfirborða) mælir sérhvern feril á nákvæmri lögun sinni — beygjupunkta (þar sem hann skiptir úr því að beygjast á annan veg yfir í hinn), mestu sveigju, sveigjustökk við hnúta sína og ójöfnu hans — og endursmíðar þá sem hafa beygjupunkt eða stökk með sem fæstum stjórnpunktum sem haldast innan vikmarkanna sem þú gefur og bæta engum beygjupunkti við. Teiknaðu stöðvar, vatnslínur og rassalínur sem ferla, mýktu þá, síðan **Brú milli sniða** á skrokkinn í gegnum stöðvarnar og athugaðu hann með **Sebra**. Ómýktir ferlar birtast líka í **Vandamál** með lagfæringunni **Mýkja þennan feril**. Lína sem á að skipta um stefnu (S-laga snið) heldur þeim eina beygjupunkti. Vatnsrými skrokksins, miðjur og réttiarmar koma úr fasta hlutanum: sjá vatnstöðutólið.

## Yfirborð úr skönnun (öfug verkfræði)

Opnaðu hlutann sem geymir skönnuðu möskvann (opnaðan STL eða bakaðan líkama), veldu **Yfirborð** í **Vinnusvæði**-reitnum, og í **Skönnun**-hópnum veldu **Passa fleti við skönnunina**; smíðaði möskvi hlutans er skönnunin.

Verkfærið leitar að **plönum**, **sívölum**, **kúlum** og **keilum** (nákvæmu yfirborðunum sem vélaður hluti er gerður úr; hver röð sýnir radíus eða hálfhorn sem það fann), finnur **ávölur** (ávalir jaðrar og horn: lítill strokkur eða kúla sem liggur snertandi inn í tvo eða fleiri aðra fleti, sýndur með radíus sínum og flötunum sem hann tengir), **hringávölur** (tórus: ávalur jaðar þar sem flatur flötur mætir strokki eða keilu, sýndur með radíus sínum og hringradíus) og **breytilegar ávölur** (ávalur jaðar sem breytir radíus eftir sér, sýndur með radíus í hverjum enda), passar **einn frjálsan plástur** við sléttan, lítillega bogadreginn bút, og sker hvern flöt að útlínu þess hluta skönnunarinnar sem hann kom úr, þannig að göt og horn haldast. Valkostir: **vikmörkin** (hversu langt, í mm, skönnunarpunktur má vera frá plani eða strokki og samt tilheyra honum, og markmiðið fyrir frjálsan plástur), **minnsta stykkið** (hlutfall af yfirborðsflatarmáli) og **flestir fletir**. Sama skönnun og sömu valkostir gefa alltaf sömu fleti.

Niðurstaðan er tafla, ein röð fyrir hvern flöt: tegund hans, hversu margir þríhyrningar hann kom úr, og villan **mæld frá skönnuninni að fletinum** (rms, sú stærsta, og hlutfall punkta innan vikmarkanna). Mældu punktarnir eru hornpunktar skönnunarinnar og miðja hvers þríhyrnings. Villan er ekki mæld hina leiðina (flötur að skönnun), þannig að flötur sem nær út fyrir skönnunina myndi ekki sjást. Athugasemdin undir töflunni segir líka hversu mikið af flatarmálinu var of lítið til að passa. Í sýninni er skönnunarpunktunum litað eftir **frávikakorti** þeirra: blátt á fletinum, grænt hálfa leið að vikmörkunum, rautt við vikmörkin eða yfir (afhakaðu **Sýna frávikakortið** til að fela það). Stykki sem brotna aftur á sjálfa sig (lokað rör passað með frjálsum plástrum, til dæmis) eru skráð sem ópassuð, aldrei þvinguð í eitt yfirborð.

**Sauma yfirborðin í fast efni** saumar sérhvert sýnilegt yfirborð sem er ekki í föstu efni í eitt lokað fast efni. Skönnunarfletir mætast aðeins innan eigin villu skönnunarinnar, þannig að það reynir minnstu sameiningarfjarlægðina sem lokar (aldrei meira en **saumafjarlægðina** sem þú stillir) og hafnar með orðum þegar fletirnir lokast ekki. Það lappar aldrei yfir bil. Kassi með ávölum jöðrum saumast þegar ávölur hans fundust sem sérflettir; sameiningarfjarlægðin sem lokaði er í niðurstöðunni. Fasta efnið vinnur þá með Sameiningu, Frádrætti, Skurðpunkti og **Baka inn í hlutinn**.

Það sem það gerir ekki: **hringávöl** (tórus) er aðeins leitað umhverfis ás strokks eða keilu sem þegar hefur fundist, og **breytileg ávöl** aðeins eftir nokkuð beinum jaðri (snið þess eru skorin ferhyrnd við eina stefnu); annars koma þau út sem frjálsir plástrar þegar þau eru nógu slétt, og eru annars látin falla út; kúlur, keilur og ávölur finnast með handahófskenndri sýnatöku, þannig að mjög lítil (nokkur þríhyrningar) getur sloppið; frávikakortið sýnir fjarlægðina frá skönnuninni að fletinum, ekki hina leiðina; mjög stórar skannanir (yfir 300.000 þríhyrninga) eru hafnaðar hér. Flatir heils snúnings strokks eru skornir umhverfis göt, með saumnum settum þar sem ekkert gat er. Athugaðu sérhvern flöt gegn skönnuninni áður en þú treystir á hann.

## Ekki smíðað ennþá

Ávölun jaðra sem mætast í horni bogadreginna flata eða með mismunandi radíusa (hornblanda), ávala milli flata sem mætast ekki, innri ávala sem endar á skáhalla eða bogadregnum fleti, Boole-aðgerðir og ávölur reiknaðar á yfirborðunum án þríhyrninga (hér vinnur vél fasta efnisins á þríhyrningum innan vikmarkanna og hver punktur er síðan settur aftur á nákvæmu yfirborðin), bakaður líkami sem fylgir yfirborðunum þegar þau breytast, stytting yfirborðs með öðru yfirborði utan Boole-aðgerðar, fylling gata með fleiri en fjórum hliðum, varpun ferla á yfirborð.
