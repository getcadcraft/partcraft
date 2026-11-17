---
title: Athugaðu samsetningu fyrir árekstra og hreyfingu
summary: Finndu hluta sem skarast með Árekstur, dragðu gildi hvers tengils til að fylgjast með hreyfingunni, og farðu í gegnum allt svið tengils til að finna hvar hlutir rekast saman.
keywords: truflun, greining á truflun, árekstur, klessa, skörun, þráðarpassun, þráðardýptarmismunur, snertifletir, fela, sía, hreyfing, hreyfirannsókn, ferill, hreyfisvið, athuga
from: 9c98db46
---

Tvær athuganir keyra á hlutunum eins og þeir eru staðsettir: **Árekstur** leitar að skarandi efni núna, og **hreyfiathugunin** færir einn tengil í gegnum allt svið sitt og leitar að skörun á leiðinni.

## Athugaðu með tilliti til truflunar

1. Opnaðu eða byggðu samsetningu (sjá [Byggðu samsetningu með tenglum](topic:build-assembly)).
2. Veldu {{ui:Árekstur}}.

Stöðustikan segir frá niðurstöðunni:

- „Engin truflun á milli 3 hluta (… ms).“ Ekkert skarast.
- „Truflun: Flange1 og Flange2: Skörun, 2.5 mm³.“ Hvert par, hvers konar niðurstaða það er og rúmmálið sem þau deila.

Reiturinn **Samsetning** vinstra megin sýnir **Truflun**: „Engin“, „2 niðurstöður“ (þær sem sýndar eru), eða „Ekki athugað“. Ef ekkert er valið listar hægra spjaldið hverja niðurstöðu undir **Truflun**.

Niðurstaðan hreinsast alltaf þegar samsetningin breytist. Keyrðu {{ui:Árekstur}} aftur eftir að þú færir tengil. Sérhvert par hluta er borið saman við hvert annað, þannig að stórar samsetningar taka lengri tíma.

### Tegundir niðurstaðna

| Tegund | Merking |
|---|---|
| **Skörun** | Hlutirnir deila rúmmáli: raunverulegur árekstur. |
| **Þráðardýptarmismunur** | Sameiginlega rúmmálið er inni í þræði annars hlutarins en handan við þráð hins: bolti með þræði dýpra en gatið hans, eða slétt skaft í þráðuðu gati. |
| **Þráðarpassun (útlitsþræðir)** | Sameiginlega rúmmálið er inni í þráðum beggja hluta: bolti í þráðuðu gati. Útlitsþræðir eru teiknaðir í fullri stærð þráðarins, þannig að þeir skarast alltaf örlítið. |
| **Snertifletir** | Ekkert sameiginlegt rúmmál, en fletir í snertingu (innan 0.001 mm). |

Mótaðir þræðir (sjá [Þræðir á skaftum og borunum, teiknaðir eða mótaðir](topic:threads)) eru raunveruleg rúmfræði: það sem þeir deila er **Skörun**.

### Fela það sem þú þarft ekki að sjá

Undir **Truflun** hefur **Sýna** reit fyrir hverja tegund: afhakaðu **Þráðarpassun** og **Snertifleti** til að sjá aðeins þá árekstra sem skipta máli. **Fela þetta par** við hlið niðurstöðu felur það par hluta hver sem tegundin er. Faldar niðurstöður eru taldar („2 niðurstöður faldar af þessum síum“), og **Sýna aftur földu pörin** skilar þeim. Stöðustikan telur líka faldar niðurstöður.

Síurnar eru vistaðar með samsetningunni, og hver breyting er eitt skref í {{key:Mod+Z}}. {{ui:Athuga hreyfinguna fyrir árekstra}} (hér að neðan) notar þær líka. Samsetning með síum er vistuð sem útgáfa 4, sem eldri útgáfur PartCraft neita að opna frekar en að tapa síunum.

## Fylgstu með hreyfingunni

1. Veldu tengil sem hreyfist (allt nema fastir) í listanum vinstra megin.
2. Dragðu sleðann undir einu af gildum hans, til dæmis **Horn (°)** eða **Færsla (mm)**. Hluturinn hreyfist meðan þú dregur.
3. Slepptu. Nýja staðan er geymd og hægt er að afturkalla hana með {{key:Mod+Z}}.

Þú getur líka slegið inn horn eða færslu í reitinn og ýtt á {{key:Enter}}.

Tengill á lokaðri lykkju (hlekk) færir alla lykkjuna: gildið sem þú dregur er geymt og hinir tenglar lykkjunnar fylgja með (sjá [Lokaðar lykkjur](topic:build-assembly#closed-loops-linkages)).

## Athugaðu tengil fyrir árekstra

1. Veldu tengil sem hreyfist.
2. Fyrir tengil með mörgum gildum (sívalnings-, flat-, kúlu-, festipinna í rauf) velurðu hvaða gildi á að fara í gegnum í **Athuga færslur**.
3. Veldu {{ui:Athuga hreyfinguna fyrir árekstra}}.

PartCraft færir það gildi í gegnum 25 stöður í 24 jöfnum skrefum, hin gildin standa kyrr: horn frá −180° til 180° (halli frá −90° til 90°), lengd frá mínus til plús stærð stærsta hlutarins. Það skilar:

- „Enginn árekstur hvar sem er fyrir Horn (°) frá -180 til 180 (25 stöður athugaðar).“
- „6 af 25 stöðum rekast saman, fyrst við Horn (°) 45 (12.4 mm³).“ Fyrsta staðan sem rekst saman, og skörunin þar.

Hnappurinn er grár fyrir fasta tengla, sem hreyfast ekki. Athugunin skoðar aðeins stöðurnar, ekki leiðina á milli þeirra: þunnur hlutur gæti farið í gegnum annan á milli tveggja skrefa.

:::note
Snerting og þyngdarafl eru ekki smíðuð. Án takmarka nær athugunin yfir allt sviðið; gefðu gildinu **Takmörk** (sjá [Efnislisti, sundurtekin sýn og hreyfing hluta](topic:assembly-bom-explode)) og athugunin nær aðeins yfir þau, þannig að lömun sem opnast um 90° er athuguð yfir 90°.
:::

## Hreyfirannsókn

**Samsetning › Hreyfing** keyrir gildi eins tengils frá upphafi til enda á tíma sem þú gefur (fastur hraði, mjúkur, sínus eða út og til baka), setur samsetninguna í hverju skrefi með tenglum sínum og lokuðum lykkjum, og skýrir frá hvað rekst á og hversu nálægt hlutirnir koma. **Bæta við punkti** fylgir miðju hluta eða punkti sem þú smellir á hann, og kortið sýnir stöðu hans, hraða og hröðun, gildi tengilsins og bilið að árekstri eftir tíma; **Vista CSV** og **Vista graf** skrifa þau út. Hraði og hröðun koma úr skráðum stöðum, þannig að skarpur toppur á milli skrefa birtist lágur: notaðu fleiri skref.

Eftir **Keyra** færir stikan **Stíga í gegnum keyrsluna** samsetninguna á hvaða skref sem er (tíminn, gildið og hvort hlutar rekast saman þar sjást við hliðina); tengillinn heldur sínu gildi, og **Aftur í líkanið** setur samsetninguna aftur. Stillingar rannsóknarinnar eru vistaðar í samsetningarskránni; niðurstöðurnar eru endurgerðar með **Keyra**.

## Snertirannsókn

**Samsetning › Snerting** sýnir hvernig samsetning ber álag þar sem hlutar þrýsta hver á annan. Hver hluti kemur með sínar stuðninga, álag og efni úr eigin **Hermun**-rannsókn (fastur flötur á einum hluta, kraftur á öðrum); hér velurðu pörin. **Bæta við pari**, og síðan **Velja hlið A** og smelltu á fleti eins hluta, **Velja hlið B** og smelltu á fleti annars hluta (smellur á valinn flöt tekur hann af; Esc eða **Lokið** lýkur valinu). Par er **Núningslaust** (hlutirnir þrýsta en renna) eða **Bundið** (þeir haldast saman); stífleikastuðullinn ræður hversu fast snertingin stendur á móti því að sökkva inn (20 er góður upphafspunktur, 1000 fyrir stífan stálstafla).

**Leysa** keyrir álagið í skrefum og sýnir snertikraftinn, dýpstu innsökkun, mesta færslu og mesta spennu. Hluti án pars er skilinn út og spjaldið segir það. Núningslaus snerting heldur ekki hlut til hliðar: gefðu hverjum hluta stuðning í eigin Hermun-rannsókn, eða bindðu hann, annars gætu skrefin ekki stillst. Pörin og stillingarnar eru vistaðar í samsetningarskránni.

**Flytja út CalculiX-skrá** skrifar sama líkan sem CalculiX-inntaksskrá (.inp). CalculiX er sérstakt forrit sem þú setur upp og keyrir sjálf(ur); **Lesa CalculiX-niðurstöður (.frd)** les færslurnar síðan til baka á möskva þessarar samsetningar og hafnar skrá sem var gerð fyrir annan möskva. Lausnin hér ræður við plastíska hegðun en ekki sprengikraftsgreiningu, og ekkert hér er vottuð greining: láttu verkfræðing yfirfara allt sem skiptir máli.
