---
title: Hermun vökvaflæðis (Flæðigreining)
summary: Flæði um rásir inni í hlut eða utan um hann í kassa: inntök, úttök, loft, vatn eða þinn eigin vökvi, síðan hraði og þrýstingur á hreyfanlegu skurðarsniði, straumlínur, yfirborðsþrýstingur, þrýstingsfall, massajafnvægi, viðnám og lyftikraftur, ásamt því hvað lagskipta aðferðin getur og getur ekki sagt til um.
keywords: flæði, CFD, vökvi, reiknifræði vökvaflæðis, flæðihermun, loft, vatn, seigja, eðlismassi, Reynolds-tala, lagskipt, ókyrrt, þrýstingsfall, höfuðtap, inntak, úttak, lok, hetta, hraði, rúmmálsflæði, lítrar á mínútu, stöðuþrýstingur, straumlínur, skurðarsnið, sniðplan, viðnám, lyfting, viðnámsstuðull, lyftistuðull, framflatarmál, ytra flæði, innra flæði, pípa, rás, safnrör, stútur, lattice Boltzmann, leifar, samleitni
from: 7dc75f29
---

**Flæði**-greining reiknar út hvernig vökvi fer um rásirnar inni í hlutnum þínum (**innra**) eða utan um hann (**ytra**). Sjálfgefið er það **lagskipt, þjappalaust, jafnhitað og Newton-vökvi**: slétt flæði vökva þar sem eðlismassi og seigja haldast föst, án hita, ókyrrðar og þyngdarafls. Einnig er til **tilraunalegt** ókyrrt líkan, eingöngu til eigindlegra mynstra (sjá hér neðar). Það vinnur á nafngreindum flötum sem möskvakjarninn gefur hlutnum (sjá [Möskvakjarninn](topic:solid-kernels)).

Veldu **Hermun** í **Vinnusvæði**-reitnum, ýttu á **Ný rannsókn** ef hún er ekki til, og stilltu **Gerð** á **Flæði (CFD)**. **Flæðislíkan** er **Lagskipt** (sjálfgefið) eða **Ókyrrt (Spalart–Allmaras, tilraunalegt)**: sjá **Ókyrrt flæði (tilraunalegt)** hér neðar. Byggingarstillingar rannsóknarinnar haldast, svo þú getur skipt til baka. Flæðistillingarnar eru vistaðar í hlutaskránni og hægt er að afturkalla hverja breytingu.

## Veldu vökvann og reitina

- **Vökvi**: loft eða vatn við 20 °C, eða **Sérsniðinn** með þínum eigin eðlismassa (kg/m³) og kraftfærniseigju (Pa·s). Loft notar gaslögmál hugsjónagass og lögmál Sutherlands (1,204 kg/m³, 1,813 × 10⁻⁵ Pa·s); vatn notar IAPWS-gildin (998,21 kg/m³, 1,0016 mPa·s).
- **Stærð reits**: vökvarýmið er fyllt með jafnstórum teningum. Skildu reitinn eftir auðan fyrir sjálfvirka stærð; spjaldið sýnir netið. Sérhvert op og sérhver rás ætti að vera **að minnsta kosti 8 til 10 reitir þvert yfir** til að fá nothæfar tölur; smærri reitir eru nákvæmari en hægari (tvöfalt fínni reitir kosta um 16-falda vinnu).
- **Veggir**: **Veginn milli reita** fylgir bognum veggjum milli reita (sjálfgefið); **Frákast** meðhöndlar veggi sem teningastiga.

## Flæði inni í hlutnum

Vökvarýmið verður að vera lokað. Bættu við **Inntaki** og **Úttaki** í spjaldinu og smelltu síðan á fleti þeirra í sýninni:

1. **Flati flöturinn umhverfis opið** — brúnin við pípuenda eða tengiflöt. PartCraft lokar gatinu á opinu með loki. Sérhvert gat á þeim fleti tilheyrir því opi, svo þegar inntak og úttak opnast á sama fleti skaltu í staðinn móta þunna hettu yfir annað þeirra.
2. **Innri flötur hettu** — eins og í öðrum CAD-forritum: móta þunna plötu (útdrátt) yfir opið og velja þann flöt hennar sem snertir vökvann.

Fyrir inntak skal stilla **hraða** (m/s, jafnan yfir opið, inn í hlutinn) eða **rúmmálsflæði** (L/min). Fyrir úttak skal stilla **stöðuþrýsting** (Pa, mælikvarði). Ef op er opið, eða ef veggur er þynnri en reitur, sameinast innra og ytra rýmið og reikningurinn stöðvast með skilaboðunum „Ekkert lokað vökvarými“.

## Flæði utan um hlutinn

Stilltu **Flæði** á **Ytra**, **Hraða**, þá átt sem flæðið stefnir í, og hversu langt kassinn nær upp straums, niður straums og til hliðanna (auð gildi: 1, 3 og 1 sinnum stærsta mál hlutarins). Flöturinn á kassanum sem flæðið kemur inn um er innstreymi, flöturinn sem það fer út um er útstreymi við 0 Pa, og flatirnir meðfram flæðinu renna. Of lítill kassi þjappar flæðinu framhjá hlutnum og hækkar viðnám. **Viðmiðunarflötur** er flöturinn sem viðnáms- og lyftistuðlar nota (auð gildi: framflatarmál hlutarins séð meðfram flæðinu); lyfting er mæld meðfram +Y nema þú veljir aðra stefnu.

## Reiknaðu og lestu niðurstöðurnar

Ýttu á **Reikna**. Reikningurinn keyrir í bakgrunni með fjölda skrefa, leifum og leifaritinu; **Stöðva** lýkur honum. Hann stöðvast þegar leifarnar (hversu mikið hraðasviðið breytist enn í hverju skrefi) eru undir markgildinu og þrýstingsfallið eða viðnámið hefur sest. Ef hann nær skrefamörkunum fyrst sýnir spjaldið **Ekki samleitt** með rauðu: tölurnar eru síðasta ástand, ekki stöðugt svar.

- **Skurðarsnið**: hraði eða stöðuþrýstingur á plani gegnum líkanið; veldu normal þess (X, Y eða Z) og dragðu sleðann til að færa það. Svífðu yfir það til að lesa gildin.
- **Straumlínur**: frá inntökunum (innra) eða frá grind yfir innstreymisenda kassans í skurðarsniðinu (ytra).
- **Hlutur**: heilfylltur, gegnsær (til að sjá planið inni í honum), yfirborðsþrýstingur, eða falinn.
- **Tafla**: Reynolds-tala, þrýstingsfall (meðal stöðuþrýstingur við inntökin mínus við úttökin), flæði og meðalþrýstingur hvers op, kraftur á hlutinn, viðnám og lyfting með stuðlum sínum og viðmiðunarfleti (ytra), massajafnvægi (innstreymi á móti útstreymi), reitir og reiknir.

## Ókyrrt flæði (tilraunalegt)

**Flæðislíkan › Ókyrrt (Spalart–Allmaras, tilraunalegt)** reiknar tímameðaltalað ókyrrt flæði (stöðugt RANS). Spalart–Allmaras-líkanið gefur hvirilseigju í hverjum reit og reitirnir við veggi nota lögmál Spalding um vegg í stað þess að leysa þunna lagið þar. Það er alls staðar fullkomlega ókyrrt (engin lagskipt svæði, engin umskipti).

**Það stóðst ekki nákvæmnisprófanir sínar.** Spjaldið, niðurstöðurnar og taflan segja það á hverri ókyrrri rannsókn, og viðvörunin verður ekki lokuð. Notaðu það fyrir **eigindleg flæðimynstur** — þar sem flæðið skilur sig, hringsnýst eða hraðar sér — **ekki fyrir hönnunartölur**.

| Athugun | Viðmiðun | Niðurstaða |
|---|---|---|
| Núningur í sléttri rás, fyrsti reitur við y⁺ 49 / 98 | Dean-fylgni | +3,3 % / +4,7 % |
| Rás með upplausnum vegg (y⁺ ≈ 3), Re_τ 180: meðalhraði | Moser, Kim & Mansour DNS | −1 % |
| Slétt rás, y⁺ 7–15 eða 190–380 | Dean-fylgni | +9 til +22 % |
| Núningur í pípu gegnum teningareitina, fullþróað, 10–30 reitir þvert yfir | Colebrook | 30 til 34 % of hátt |
| Endurtenging á bak við bakvísandi þrep, 6–14 reitir á hverja þrephæð | Driver & Seegmiller, 6,26 þrephæðir | 21 til 39 % of stutt |

Niðurstöðurnar batna aðeins hægt með fínni reitum. Eftir reikning sýnir taflan **y⁺ fyrsta reits** (lágmark, meðaltal og hámark yfir veggreitina) og varar við utan athugaða bilsins 1 til 400; stefndu að um 30 til 300. **Keyrslutími:** sjálfvirku reitirnir eru stilltir þannig að þeir taki nokkrar mínútur í mesta lagi á einum kjarna í fartölvu (spjaldið sýnir versta tilfelli fyrir netið og skrefamörkin; lítil pípa sest á innan við 20 sekúndum). Ef reitastærðin er helminguð kostar það um 16-falt lengri tíma. Kraftar á hlutinn koma úr skriðþungajafnvægi yfir opin eða kassann.

**Vinna í gangi enn:** veggreitirnir samsvara nú eigin skurðarálagi sínu við veggjalögmálið, sem færði villur pípu og þreps niður í tölurnar hér að ofan án þess að breyta niðurstöðum sléttu rásarinnar. Það var ekki nóg fyrir hönnunartölur. Næsta skref er fínni reitir nálægt veggjunum.

## Hvað líkanið getur og getur ekki sagt til um

- **Lagskipta líkanið** er eingöngu lagskipt. Í pípum verður flæðið ókyrrt yfir Reynolds-tölu um 2.000 til 4.000; á bak við stumpa líkama byrja vakir að losna yfir um 50. Spjaldið varar við á þessum punktum. Lagskipt niðurstaða fyrir ókyrrt flæði vanmetur þrýstingsfall og ræður rangt við viðnám. Tilraunalega ókyrrta líkanið (að ofan) nær eigindlega yfir ókyrrt flæði; tölur þess eru ekki áreiðanlegar enn.
- **Aðferð:** Lattice Boltzmann-aðferðin (D3Q19, tveggja slökunartíma árekstrarlíkan) keyrð að stöðugu ástandi. Hún er örlítið þjappanleg inni í hlutnum; PartCraft heldur breytingum á eðlismassa við nokkur prósent. Ef flæðið er of hratt fyrir reitina neitar það að byrja og segir hversu miklu minni reitirnir þurfa að vera.
- **Borið saman við:** Hagen–Poiseuille-flæði í pípu gegnum hlut (þrýstihalli innan 1 % við 20 reiti þvert yfir), lokuðu hólfinu með hreyfðu loki frá Ghia o.fl. (innan 0,75 % af hraða loksins) og Schäfer–Turek-viðmiði sívalningsins (viðnám innan 1 % við 10 reiti á þvermál).
- Ekki líkanað: varmaflutningur, ókyrrð með hönnunarnákvæmni (ókyrrta líkanið er tilraunalegt), frjáls yfirborð, kavitun, þyngdarafl, hreyfanlegir hlutar, ónewtonskir vökvar, grófir veggir. Tilraunaútgáfa: athugaðu mikilvægar niðurstöður á annan hátt.
