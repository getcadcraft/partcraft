---
title: Vikmarkskeðjur
summary: Veldu keðju flata í gegnum hluta samsetningar og sjáðu hversu mikið bilið við enda hennar getur breyst, í versta tilfelli og RSS, með mikilvægustu víddunum raðaðar fyrst.
keywords: vikmarkskeðja, uppsöfnun, vikmarksgreining, vikmarkskeðja, víddakeðja, lykkja, bil, úthreinsun, versta tilfelli, rss, rótarsumma ferninga, tölfræðileg vikmörk, framlög, næmi, gd&t, almennt vikmark, iso 2768
from: cbdb3159
---

**Vikmarkskeðja** leggur saman víddir eftir keðju í gegnum nokkra hluta til að sjá hversu mikið niðurstaðan, venjulega bil, getur breyst þegar hver hluti er gerður hvar sem er innan vikmarka sinna.

## Veldu keðjuna

1. Opnaðu samsetningu og veldu {{ui:Vikmarkskeðja}} í Samsetningarhópnum. Spjald opnast yfir sýninni.
2. Veldu hvað keðjan er mæld **eftir**: X, Y eða Z samsetningarinnar, eða {{ui:Eðlislína fyrsta flatar}}.
3. Ýttu á {{ui:Veldu keðjuna}} og smelltu á fletina sem keðjan liggur um, **í röð**: byrjaðu á annarri hlið bilsins, farðu í gegnum hlutana og endaðu á hinni hlið bilsins.
4. Ýttu á {{ui:Lokið}} eða Enter. Backspace tekur síðasta smell til baka; {{key:Esc}} hættir við.

Tveir smellir á sama hluta gera vídd hans (fjarlægð hans eftir keðjunni). Smellur á annan hluta býr til **samskeyti** milli þeirra, þar sem hlutarnir mætast; það hefur ekkert vikmark nema þú skrifir eitt inn. Tenglarnir leggjast við eða dragast frá eftir stefnu keðjunnar, og þeir loka lykkjunni: nafnbilið er það sem líkanið sýnir.

Þú getur líka {{ui:Bæta við hlekk}} með hendi og skrifað inn nafnmál hans, vikmark og hvort hann leggst við (+) eða dregst frá (−).

## Gefðu hverjum hlekk vikmarkið sitt

Hver hlekkur hefur **efri** og **neðri** frávik (til dæmis +0.1 og −0.05). **Vikmark frá** fyllir þau inn úr hlutnum:

- **Almennt vikmark**: vikmarksreitur teikniblaðsins (sjá [Teikning í PDF](topic:drawing-pdf)), þegar hann sýnir ±0.1, +0.2/-0.1 eða ISO 2768-f, -m, -c eða -v (ISO 2768-1 línuleg vikmörk, eftir stærð hlekksins). Almennt vikmark hlutar er notað strax þegar keðjan er valin.
- **GD&T**: sérhver rúmfræðilegur vikmarksrammi á teikningu hlutarins. Staðsetningar-, sniðs- og útkastssvæði gefa ± helming vikmarksins. Stefnu- eða formvikmark liggur oftast innan stærðarvikmarksins þegar, svo bættu því aðeins við þar sem keðjan mætir yfirborðinu sem er stýrt. Með Ⓜ eða Ⓛ er svæðið tekið við tilgreinda stærð; bónusvikmarkið er ekki talið með.
- **Skrifað**: hvaða tölur sem þú skrifar inn.

## Lestu niðurstöðurnar

- **Bil, nafn** og, þegar vikmörkin eru ójöfn, **Bil, meðaltal**: +0.2/−0 og +0/−0.1 færa miðju bilsins.
- **Versta tilfelli**: sérhvert vikmark á mörkum sínum í einu. Bilið getur aldrei verið utan þessa.
- **RSS** (rótarsumma ferninga): hvert vikmark tekið sem þrjú staðalfrávik af normalskiptri dreifingu, lagt saman sem kvaðratrót af summu ferninga þeirra. Flestar samsetningar falla vel innan versta tilfellis; þetta er venjulegt mat fyrir hluti framleidda í magni.
- Gefðu **Bil að minnsta kosti** og **Bil í mesta lagi** til að sjá hvort versta tilfelli helst alltaf innan marka, og hversu margar samsetningar af milljón RSS býst við utan þeirra.
- **#**-dálkurinn raðar hlekkjunum eftir **hlutdeild** þeirra í RSS: hertu þá fyrstu til að ná mestum áhrifum.

{{ui:Vista CSV}} skrifar hlekkina, hlutdeildir þeirra og niðurstöðurnar. Vikmarkskeðjurnar eru vistaðar í samsetningarskránni, og sérhver breyting er eitt skref fyrir {{key:Mod+Z}}.

:::note
Vikmarkskeðja er í eina átt. Hún fylgir ekki hornum eða beygjum eftir keðjunni, og hún les ekki stærðarvikmörk úr skissunum: gefðu þau upp sem skrifuð vikmörk eða í gegnum teikniblaðið.
:::
