---
title: Hiti, varmaálag og knik
summary: Finndu hitastig í hluta út frá föstu hitastigi, varmaflæði, varmaafli, varmaburði og geislun (stöðugt eða yfir tíma), reiknaðu álagsgreiningu með hitabreytingu, og finndu álagið sem grannur hlutur gefur sig við í knik, með því hvað hver aðferð getur og getur ekki sagt þér.
keywords: varmi, varmaflutningur, hiti, hitastig, leiðni, varmaburður, burðarstuðull, geislun, losunarstuðull, varmaflæði, varmaafl, varmamyndun, hitavaskur, óstöðugt, tími, kæling, hitun, Crank-Nicolson, implicit Euler, varmajöfnuður, varmaálag, varmaálag yfir tíma, óstöðugt varmaálag, slökkun, varmaáfall, álagssaga, versti tími, varmaþensla, þenslustuðull, knik, Euler-knik, álagsþáttur, mikilvægt álag, súla, grannur, eiginlausn
from: 1a1b7545
---

Þessar greiningar eru í Hermunarvinnusvæðinu við hlið stöðugs álags og eiginsveiflutíðna (sjá [Athugaðu álag og aflögun](topic:simulation)). Veldu þær í **Gerð**-reitnum í spjaldinu. Þær nota sama möskva úr smákubbum og sama efnalista; sérhvert efni á listanum hefur varmaleiðni, eðlisvarma og þenslustuðul (dæmigerð gildi úr handbókum, sýnd undir **Eiginleikar**).

## Varmi: hvert fer hitinn?

1. Veldu **Varmi (varmaflutningur)** sem **Gerð**.
2. Bættu varmaskilyrðum við úr **Bæta við**-listanum í spjaldinu og smelltu síðan á fleti þeirra (eins og fyrir stuðninga og álag):
   - **Fast hitastig**: flöturinn er haldinn við hitastig, í °C.
   - **Varmaflæði**: W/m² sem flæða inn í flötinn (neikvætt flæðir út). Það verkar á raunverulegt flatarmál flatarins, líka þar sem kubbarnir mynda þrep.
   - **Varmaafl**: heildarafl í vöttum, dreift á valda fleti eftir flatarmáli. Notaðu það fyrir hitara eða flögu með þekkt afl.
   - **Varmaburður**: loft eða vökvi við hitastigi ber hitann burt með h W/(m²·K). Dæmigert h: kyrrt loft 5–10, vifta 25–100, vatn 500–10,000. PartCraft reiknar ekki h: það er ekkert vökvaflæði í þessari greiningu.
   - **Geislun**: flöturinn geislar til umhverfis við hitastigi, með losunarstuðli frá 0 til 1. Hún er **línuvædd** (geislunin er skrifuð sem stuðull sem fer eftir hitastigi og leyst aftur þar til hann jafnast) og fer aðeins til umhverfisins: fletir skiptast ekki á hita sín á milli.
3. **Varmamyndun** (W/m³) hitar allan hlutinn innan frá, til dæmis hlut sem hitnar við viðnám.
4. Ýttu á **Leysa**. Hluturinn er litaður eftir hitastigi; veldu **Varmaflæði** í **Sýna** til að sjá hvert hitinn flæðir. Bentu á hlutinn til að lesa hvort tveggja.

Stöðugt varmaflæði þarf stað þar sem hitinn getur farið: að minnsta kosti eitt fast hitastig, varmaburð eða geislun. Hlutur sem aðeins tekur við hita hefur ekkert stöðugt ástand; gerðu hann tímaháðan í staðinn.

Taflan sýnir lægsta og hæsta hitastig og hvar þau eru, mesta varmaflæðið og **varmajöfnuðinn**: hitann inn í eða út úr hverju skilyrði (fast hitastig telur hvað það þarf að láta í té eða taka í sig), myndaðan hita, samtölur inn og út, og **ójafnvægið**. Ójafnvægið ætti að vera agnarlítill hluti af hitanum inn; stórt ójafnvægi þýðir að ekki má treysta niðurstöðunni.

### Yfir tíma (tímaháð)

Hakaðu við **Tímaháð** og gefðu **Upphafshitastig** (allur hlutinn byrjar þar), **Tímabil** og fjölda **Tímaskrefa**. **Implicit Euler** er traust; **Crank–Nicolson** er nákvæmari með sömu skrefum en getur bylgjast eftir skyndilega breytingu. Eftir lausn skaltu draga **Tíma**-sleðann til að sjá hitastigin á hverju augnabliki (litakvarðinn helst sá sami fyrir öll augnablik). Varmajöfnuðurinn tekur þá einnig með varmann sem er geymdur.

## Varmaálag: hvað gerir hitabreyting hlutnum?

Í **Stöðugu álagi** (eða **Knik**)-greiningu skaltu stilla **Varmaálag**:

- **Jöfn hitabreyting**: allur hlutinn hitnar (eða kólnar, með neikvæðri tölu) um svo mörg kelvin.
- **Hitastig frá varmaskilyrðum**: bættu varmaskilyrðum við sömu greiningu; stöðugt hitastig er fyrst leyst á sama möskva, síðan þenst hluturinn út um α·(T − **hitastig án álags**).
- **Hitastig yfir tíma (tímaháð keyrsla)**: bættu varmaskilyrðum við, gefðu síðan **Upphafshitastig**, **Tímabil**, **Tímaskref** og **Tímaskrefun** eins og í tímaháðri varmagreiningu. Hitastigin eru leyst yfir tíma á sama möskva (kubbar eða fjórflötungar), og stöðug lausn á hitastigum hvers augnabliks gefur álagið á því augnabliki. **Álag við**:
  - **Versta tímann** (upphafið): **Álagslausnir** dreifa augnablikum jafnt yfir keyrsluna, upphafið meðtalið (21 nema þú breytir því, mest 51). Niðurstöðurnar opnast á augnablikinu með mesta von Mises-álagið; taflan nefnir það, lítið línurit sýnir hámarksálagið á móti tíma, og **Tíma**-sleðinn sýnir álagið á hverju augnabliki sem leyst var (litakvarðinn helst sá sem átti við versta augnablikið).
  - **Einn valinn tíma**: eitt augnablik, tímaskrefið næst **Tíma (s)** sem þú gefur. Knik-greining tekur alltaf einn valinn tíma (lok keyrslunnar nema þú stillir annan).

Hlutur sem er slökktur (dýfður úr heitu í kalt) eða skyndilega hitaður er mest álagður þegar innri hluti og yfirborð eru ólíkust: oft strax í byrjun. Haldið hitastig gildir frá fyrsta augnabliki, sem skyndileg breyting, svo álagið í allra fyrstu byrjun ræðst af stærð frumefna (aðeins fá frumefni sjá breytinguna). Lestu það sem „mjög hátt“ og skoðaðu næstu augnablik sleðans fyrir gildi sem möskvinn greinir. Álagið er kvasi-stöðugt: enginn massi, engin titringur af skyndilegu breytingunni.

Hlutur sem má þenjast frjálst hefur ekkert varmaálag: haltu honum rétt nógu mikið til að hann hreyfist ekki (til dæmis þremur núningslausum flötum í rétt horn). Milli tveggja veggja er hann kraminn: stálstöng sem er hituð um 50 K milli stífra veggja ber um 117 MPa. Varmaálag jafnar sig sjálft, þannig að viðbrögðin jafnast enn aðeins út á vélræna álagið.

## Knik: hvenær gefur grannur hlutur sig?

1. Veldu **Knik (línulegt)** sem **Gerð** og bættu við stuðningum og álagi eins og í stöðugri greiningu.
2. Stilltu **Álagsþætti sem finna á** (hversu margar knikhamir).
3. Ýttu á **Leysa**. Hver hamur hefur **álagsþátt**: margfeldið af álögunum þínum sem hinn fullkomni hlutur gefur sig við. Álagsþáttur 3 þýðir þrisvar sinnum álögin þín; **álagsþáttur undir 1 þýðir að hann gefur sig undir álögunum sem þú settir á**. Taflan gefur einnig heildarálagið við hvern þátt. Hamsformið sýnir hvernig hann gefur sig (stærð þess þýðir ekkert).

**Línulegt knik ofmetur raunverulegt knikálag.** Það gerir ráð fyrir fullkomnum hlut: fullkomlega beinum, án leifarálags og teygjanlegum. Raunverulegir hlutir hafa litla ófullkomleika og geta gefið eftir (flætt) fyrst, og þunnveggja skeljar geta knikað við brot af línulega gildinu. Hafðu rúma framlegð, og líttu á álagsþátt nálægt eða undir 3 fyrir þunna skel sem viðvörun.

## Hversu mikið má treysta þessu

PartCraft ber þessa lausnara saman við handreiknaðar formúlur: stöng milli tveggja hitastiga (nákvæm), kæliugga (innan 0.3 K), plata sem hitar sjálfa sig (nákvæm), kubbur sem kólnar yfir tíma (innan 0.1 % með Crank–Nicolson), stöng sem er skyndilega hituð í öðrum enda, frjáls stöng sem er hituð (ekkert álag, ΔL = αLΔT), stöng milli veggja (σ = −EαΔT), slökkt plata yfir tíma gegn klassísku raðlausninni (innan 1 % á kubbum, 2.1 % á fjórflötungum í miðju plötunnar; 0.5 % á yfirborði hennar), síðasta augnablik langrar keyrslu gegn stöðugu varmaálagi (það sama upp á milljónasta hluta), og Euler-súlur (innan 1 % fast–laust, 1.5 % lamir–lamir). Hafðu eftirfarandi í huga:

- **Fastir efniseiginleikar.** Leiðni, eðlisvarmi og þensla breytast ekki með hitastigi hér; við nokkur hundruð gráður geta þau breyst um 10–30 %. Stífleiki breytist ekki heldur.
- **Álag yfir tíma er kvasi-stöðugt og teygjanlegt**: hvert augnablik er stöðug lausn (enginn massi), og engin eftirgjöf, svo slökkun sem myndi láta yfirborðið gefa eftir sýnir álag yfir flæðimörkum í staðinn.
- **Varmaburðarstuðlar eru þín inntök**, ekki reiknaðir út frá loft- eða vatnsflæði.
- **Engin snertimótstaða**: hluturinn er eitt fast efni.
- **Aðeins línulegt knik**: engir ófullkomleikar, engin eftirgjöf, engin hegðun eftir knik.
- Kubbaþrepin og skarpir innri hornar hafa áhrif á varmaálag á sama hátt og á annað álag (sjá [Athugaðu álag og aflögun](topic:simulation)).
- Þetta er tilraunasmíð: athugaðu hluti sem skipta máli á annan hátt.

## Tengt

- [Athugaðu álag og aflögun (Hermun)](topic:simulation)
- [Hvað er ekki smíðað enn](topic:not-built-yet)
