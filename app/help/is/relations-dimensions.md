---
title: Fullskilgreindu skissu með tengslum og málsetningum
summary: Bættu við tengslum úr hægra spjaldinu og málsetningum með málsetningatólinu, lestu litina undirskilgreint, fullskilgreint og ofskilgreint, og lagaðu skissu sem er ofskilgreind.
keywords: tengsl, skorður, málsetningar, snjallmálsetning, fullskilgreint, undirskilgreint, ofskilgreint, frelsisgráður, samfall, lárétt, lóðrétt, samsíða, hornrétt, snerting, jöfn, sammiðja, miðpunktur, festa, árekstur, óþarfi
from: e76d047a
---

Skissa er **fullskilgreind** þegar sérhver punktur og stærð er fest með tengslum og málsetningum. Fullskilgreind skissa breytist aðeins þegar þú breytir tölu, svo hluturinn hegðar sér fyrirsjáanlega þegar þú breytir honum síðar. PartCraft neyðir þig ekki til að fullskilgreina skissu, en það sýnir alltaf hversu nálægt þú ert.

## Lesa stöðu skissunnar

Staðan birtist á þremur stöðum: merkinu efst vinstra megin í sýninni, skilaboðunum efst í hægra spjaldinu og fánanum í sögunni.

| Staða | Merki | Litur rúmfræði | Hvað það þýðir |
|---|---|---|---|
| Undirskilgreind | "Undirskilgreind · 3 frelsisgráður" | Blátt | Sum rúmfræði getur enn hreyfst. Dragðu bláa rúmfræði til að sjá í hvaða átt |
| Fullskilgreind | "Fullskilgreind" | Blek (svart á Paper, ljóst á Model) | Sérhver punktur og stærð er föst |
| Ofskilgreind | "Ofskilgreind" | Rautt á tengslunum sem koma við sögu | Sum tengsl stangast á, eða eitt þeirra er þegar gefið af öðrum |

Hjálparrúmfræði er alltaf grá og strikuð, hver sem staðan er. Valdir hlutir eru appelsínugulir. „Frelsisgráða“ er ein leið sem eitthvað getur enn hreyfst: frjáls punktur hefur tvær (vinstri-hægri og upp-niður), frjáls hringur hefur þrjár (miðju sína og radíus).

Skýringin undir skilaboðunum í hægra spjaldinu endurtekur litina.

## Bæta við málsetningu

1. Ýttu á {{key:D}} eða veldu {{ui:Dimension}}.
2. Smelltu á það sem á að mæla:
   - **ein lína**: lengd hennar;
   - **einn hringur**: þvermál hans; **einn bogi**: radíus hans;
   - **tveir punktar** (endapunktur, miðja, laus punktur eða upphafspunktur): fjarlægðin á milli þeirra;
   - **punktur og lína**: fjarlægðin frá punktinum að línunni;
   - **tvær samsíða línur**: fjarlægðin á milli þeirra; **tvær línur í horni**: hornið á milli þeirra.
3. Eftir fyrsta hlutinn segir stöðustikan „Smelltu á annan hlut, eða smelltu þar sem málsetningin á að vera.“ Smelltu á annan hlut, eða smelltu í autt rými þar sem þú vilt hafa töluna.
4. Talnareitur opnast með núverandi gildi. Skrifaðu stærðina og ýttu á {{key:Enter}}. {{key:Esc}} heldur mældu gildinu.

**Hvar þú setur töluna ræður gerðinni** fyrir skáhalla línu eða tvo punkta: settu hana fyrir ofan eða neðan til að fá lárétta fjarlægð, til vinstri eða hægri til að fá lóðrétta fjarlægð, og annars staðar fyrir raunverulega (jöfnuðu) fjarlægð.

Reiturinn tekur einföld tölugildi í millimetrum eða gráðum, svo sem `25`, `12.5` eða `1e3`. Forskeyti `⌀`, `Ø` eða `R`, eða viðskeytið `mm` eða `°`, er hunsað. Horn eru 0 til 180 gráður. Reikningur eins og `20+5` er ekki tekinn gildur. Til að tengja stærð við breytu eða formúlu skaltu byrja hana á `=`.

Til að breyta málsetningu síðar tvísmellirðu á töluna í skissunni, eða velur **Breyta** við hlið hennar í listanum í hægra spjaldinu.

:::tip
Þú getur líka valið rúmfræðina fyrst (Velja-tólið) og valið málsetningarhnapp í hægra spjaldinu: {{ui:Distance}}, {{ui:Horizontal distance}}, {{ui:Vertical distance}}, {{ui:Radius}}, {{ui:Diameter}} eða {{ui:Angle}}. Aðeins þeir sem passa við valið birtast. Þetta er leiðin til að gefa hring radíus í stað þvermáls.
:::

## Bæta við tengslum

Tengsl eru bætt við úr hægra spjaldinu, ekki með tóli.

1. Ýttu á {{key:S}} fyrir Velja.
2. Smelltu á einn hlut, og síðan {{key:Shift}}+smelltu á annan ef tengslið þarf tvo. Upphafspunktinn (origin) má líka velja.
3. Hægra spjaldið segir „Valið: line l3, point p1“ og sýnir hnapp fyrir hvert tengsl sem passa, svo sem {{ui:∥ Samsíða}} eða {{ui:• Samfall}}.
4. Veldu hnappinn. Skissan leysist strax.

Ef ekkert tengsl passa segir spjaldið „Ekkert tengsl passar við þetta val. Veldu einn eða tvo hluti (Shift+smellur bætir við).“

Allan listann yfir tengsl, hvað hvert þeirra þarfnast og hvað það gerir er í [Tengsl og málsetningar skissu](topic:sketch-relations).

Tengsl birtast í skissunni sem litlir táknar við rúmfræðina (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Samfallspunktar eru faldir nema rúmfræðin sé valin eða tengslið sé í vanda. Smelltu á tákn til að velja tengslið.

## Dæmi: sniðið af L-laga festingu

1. Teiknaðu á **Front plane** (Framplan). Með línutólinu byrjarðu á upphafspunktinum, smellir á sex horn á L-inu og endar aftur á upphafspunktinum. Keðjan endar sjálf þegar þú smellir á fyrsta punktinn.
2. Línur sem eru teiknaðar nálægt láréttu eða lóðréttu hafa þegar H- og V-tengsl, nema sú síðasta: lína sem endar á þegar til staðar punkti fær ekkert sjálfvirkt tengsl. Ýttu á {{key:S}}, smelltu á síðustu línuna og veldu {{ui:V Lóðrétt}} í hægra spjaldinu. Merkið segir „Undirskilgreind · 4 frelsisgráður“.
3. Ýttu á {{key:D}}. Smelltu á neðri línuna, smelltu fyrir neðan hana, skrifaðu `80` og ýttu á {{key:Enter}}.
4. Smelltu á vinstri línuna, smelltu vinstra megin við hana, skrifaðu `60` og ýttu á {{key:Enter}}.
5. Málsettu stuttu efri línuna `20` og innri lóðréttu línuna `45` á sama hátt.
6. Merkið segir nú **Fullskilgreind** og allur L-inn verður svartur.

## Lagfæra ofskilgreinda skissu

Þegar nýtt tengsl eða málsetning stangast á við hin hreyfir PartCraft ekkert. Rúmfræðin helst nákvæmlega eins og hún var, tengslin sem koma við sögu verða rauð, og stöðustikan nefnir þau:

- „Ofskilgreint: Lárétt og Fjarlægð 40 er ekki hægt að uppfylla bæði. Afturkallaðu, eða eyddu öðru þeirra.“ Tengslin stangast á.
- „Ofskilgreint: Samsíða er þegar gefið. Eyddu því.“ Tengslið bætir engu við: hin tengslin þvinga það þegar. (Hliðar rétthyrnings eru til dæmis þegar samsíða.)

Til að laga það:

1. Ýttu á {{key:Mod+Z}} til að afturkalla síðustu breytingu, eða
2. Finndu rauða atriðið í listanum **Tengsl og málsetningar** í hægra spjaldinu (hópurinn sem geymir það er opinn og rauður) og veldu **Eyða** við hlið þess. Þú getur líka smellt á táknið eða töluna í skissunni og ýtt á {{key:Delete}}.

:::note
Það eru engar viðmiðunarmálsetningar (driven) í þessari smíði. Málsetning sem myndi aðeins sýna stærð sem hin tengslin ákvarða nú þegar er meðhöndluð sem ofskilgreind. Lestu stærðir í spjaldinu í staðinn: veldu línu og skoðaðu málsetningarhnappana, eða athugaðu upplýsingar hlutarins eftir útdrátt.
:::

Skissa sem er ofskilgreind með raunverulegum árekstri gerir eiginleikann sem notar hana óhæfan („Ofskilgreint: 1 tengsl er ekki hægt að uppfylla öll.“), og sagan merkir hann **⚠ villa**. Skissa sem er aðeins óþörf byggist samt, með ⚠ viðvörun.

## Dragðu til að finna hvað er laust

Í Velja-ham dregurðu hvaða bláa punkt eða línu sem er. Lausnin færir hana eins lítið og hægt er meðan hvert tengsl helst. Ef dragið myndi rjúfa tengsl hrekkur rúmfræðin til baka. Þetta er fljótlegasta leiðin til að sjá hvaða málsetning vantar enn.

## Listinn yfir tengsl

Þegar ekkert er valið sýnir hægra spjaldið **Tengsl og málsetningar**. Hver röð hefur:

- **Breyta** (aðeins málsetningar): opnar talnareitinn;
- **Velja**: velur hana í skissunni;
- **Eyða**: fjarlægir hana.

Tengsl af sömu gerð sem koma oftar en einu sinni deila einni röð, til dæmis „Samfall × 5“ fyrir rétthyrning tengdan við upphafspunktinn. Smelltu á röðina til að opna hana: hvert tengsl er skráð eftir því hverju það tengir („point p2, point p4“) með eigin **Velja** og **Eyða**. Röðin sjálf hefur:

- **Velja**: velur þau öll í skissunni;
- **Eyða öllu**: fjarlægir þau öll í einu skrefi ({{key:Mod+Z}} skilar þeim til baka).

Hópur sem geymir ofskilgreint tengsl opnast af sjálfu sér, með heitinu sínu í rauðu. Málsetningar eru alltaf skráðar ein í röð, með gildum sínum.

Ef rúmfræði er valin sýnir listinn aðeins **Tengsl á valinu**.
