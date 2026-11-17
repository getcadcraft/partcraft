---
title: Frjáls form með Mótun og yfirborðseiginleikar
summary: Ýttu og togaðu sléttu stýrigrindina í Mótun-vinnusvæðinu, beygðu brúnir, notaðu samhverfu, athugaðu og kláraðu hana í nákvæmt fast efni eða yfirborð, og síðan plástraðu, lóftaðu, saumaðu, þykktu, færðu og styttu yfirborð í Hönnun. Hvað er nákvæmt og hvað er nálgað.
keywords: mótun, frjálst form, t-spline, undirskipting, catmull-clark, grind, quadball, brot, samhverfa, zebra, sveigja, yfirborð, plástur, fylling, lóftað yfirborð, sauma, þykkva, offset-yfirborð, framlengja, stytta
from: 0d326ef4
---

:::note
**Ekki enn tiltækt í þessari útgáfu.** Að ljúka formi inn í hlutinn, og yfirborðseiginleikar, þarf nákvæman rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki: hún smíðar alla hluti með möskvakjarnanum. [Það sem er ekki enn tiltækt](topic:not-built-yet) segir hvað skal gera í staðinn. Restin af þessari síðu lýsir þeim eins og þeir virka með nákvæmum kjarna.
:::

**Mótun**-vinnusvæðið býr til lífræn form. Þú breytir **grind**, grófu neti hornpunkta, brúna og flata. Formið er slétta yfirborðið sem grindin stýrir (Catmull–Clark-takmarksyfirborðið hennar), þannig að þegar einn hornpunktur er færður beygist yfirborðið mjúklega um hann. Þegar það lítur rétt út bætir **Ljúka** því við sögu hlutarins sem *Form*-eiginleika, og nákvæmi kjarninn breytir því í sönn B-spline-yfirborð. Þá má rúnda það, skera það, tengja það öðrum eiginleikum og flytja það út sem STEP.

Veldu **Mótun** í **Vinnusvæði**-listanum vinstra megin á tækjastikunni.

## Byrjaðu grind

1. Stilltu **Stærð** og **Skiptingar** í hægra spjaldinu. Skiptingar eru hversu marga fleti hver hlið fær.
2. Smelltu á {{ui:Kassi}}, {{ui:Quadball}} eða {{ui:Plan}} á tækjastikunni. Spjaldið hefur einnig **Strokk**, **Snúð** og **Fleti eftir smellum**.

- **Quadball** er kassagrind sem er löguð þannig að hornpunktar hennar liggja á kúlu. Á milli þeirra situr yfirborðið örlítið innan kúlunnar: um 0,4 % minna rúmmál með 2 skiptingum.
- **Plan** er opið, þannig að það verður yfirborðshlutur (sjá „Yfirborðseiginleikar í Hönnun“ hér neðar).
- **Fletir eftir smellum**: smelltu á 4 punkta á efra (jarðar) planinu eða á hornpunkta grindarinnar til að búa til einn flöt. Fletir sem deila hornpunktum tengjast saman. Ýttu á {{key:Enter}} eftir 3 punkta fyrir þríhyrning, eða {{key:Esc}} til að hætta.

Ófullkláraða grindin þín er vistuð með hlutaskránni, svo þú getur lokað skránni og haldið áfram síðar.

## Veldu og færðu

- Smelltu á hornpunkt, brún eða flöt grindarinnar. {{key:Shift}}+smellur bætir við eða fjarlægir hluti. {{key:Esc}} hreinsar valið.
- Stýritæki birtist í miðju valsins. Dragðu ör til að færa eftir henni, eða ferning til að færa í því plani. Ýttu á {{key:W}} til að færa, {{key:E}} til að snúa og {{key:R}} til að skala, eða notaðu hnappana í spjaldinu. {{ui:Stýritæki}} á tækjastikunni flettir á milli þeirra.
- **Mjúkt fall** (mm) dregur einnig hornpunktana innan þeirrar fjarlægðar og dofnar mjúklega í ekkert við brún þeirrar fjarlægðar.
- Sérhver dráttur er eitt afturköllunarskref: {{key:Ctrl+Z}} og {{key:Ctrl+Y}} virka eins og venjulega.

## Breyttu grindinni

Hnapparnir **Breyta** í spjaldinu vinna á valinu:

| Hnappur | Hvað hann gerir |
|---|---|
| {{ui:Útdráttur}} | Völdu fletirnir færast út um **Fjarlægð útdráttar**, eftir normölum sínum, með nýjum hliðarflötum. Völdu opnu brúnirnar stækka með nýjum flötum út á við. |
| {{ui:Lykkja á brúnum}} / Setja brúnalykkju inn | Klýfur hring ferhyrndra flata sem þverar valda brún, á miðri leið. Fleiri lykkjur gefa þéttari bogaferla. |
| Setja punkt inn | Bætir hornpunkti á miðja völdu brúnina. |
| Undirskipta | Klýfur hvern valinn flöt í ferhyrnda fleti umhverfis miðju sína. |
| Brú | Tengir tvo valda fleti, eða tvö op (veldu eina opna brún á hvoru), með rör af flötum. Báðir þurfa sama fjölda brúna. |
| Fylla gat | Lokar opinu gegnum valda opna brún með einum fleti. |
| Sjóða saman | Sameinar völdu hornpunktana í einn, á miðju þeirra. |
| Fletja | Færir völdu hornpunktana á planið sem passar þeim best. |
| Eyða | Fjarlægir völdu fleti, brúnir (tveir fletir sameinast) eða hornpunkta. |

## Skarpar brúnir, samhverfa og birting

- {{ui:Skerpa}} gerir völdu brúnirnar skarpar. **Þyngd skerpu** 10 er að fullu skörp. Minni þyngd helst skörp í þann fjölda fínpússunarskrefa og mýkist síðan, sem gefur þétta kringlu í stað harðs brots. **Afskerpa** gerir þær mjúkar aftur. **Skarpur hornpunktur** festir hornpunkt svo yfirborðið fari í gegnum hann með punkti.
- **Samhverfa** speglar grindina yfir X, Y eða Z = 0. Hún heldur jákvæðu hliðinni, speglar hana og tengir helmingana tvo. Eftir það gerist breyting á annarri hliðinni á báðum. Hornpunktar á speglunarplaninu haldast á því.
- {{ui:Birting}} skiptir á milli **Slétt** (yfirborðið sem eiginleikinn verður) og **Kassi** (flatir grindarinnar sjálfrar).
- **Greining**: **Zebra-rendur** endurkasta röndóttu ljósi úr núverandi sýn. Þær beygjast mjúklega yfir slétt yfirborð og brotna við skurð. **Meðalsveigja** litar kúpt svæði rauð, íhvolf blá og flöt hvít. Hún er mæld á birta möskvanum með kotangens-formúlunni, þannig að hún er leiðarvísir, ekki mæling.

## Athugaðu og kláraðu

- **Athuga nákvæmlega** breytir grindinni í nákvæma kjarnanum án þess að breyta hlutnum þínum. Það tilkynnir hversu marga B-spline-plástra grindin býr til, hversu margir eru nákvæmir og hvort niðurstaðan er lokað, gilt fast efni, og rúmmál þess.
- {{ui:Ljúka}} bætir *Form*-eiginleika við söguna, eða uppfærir formið sem þú varst að breyta, og fer með þig aftur í Hönnun. Lokuð grind verður fast efni. **Aðgerð** hennar í Hönnunarspjaldinu getur verið Nýr hlutur, Sameina, Skera eða Skerast. Opin grind verður yfirborðshlutur.
- Til að breyta formi síðar skaltu velja það í sögunni og smella á **Breyta í Mótun**. Smíðaði hluturinn er falinn á meðan þú breytir grindinni hans.
- **Henda** fleygir grindinni án þess að snerta söguna.

## Hvað er nákvæmt og hvað er nálgað

Sérhver ferhyrndur flötur grindarinnar, betrumbættur þegar þörf krefur, verður einn tvíkúbískur B-spline-plástur.

- Þar sem sérhver hornpunktur flatar er *reglulegur* (fjórar brúnir mætast innan yfirborðsins, eða þrjár á opinni brún eða meðfram broti), er plásturinn **nákvæmlega** undirskiptingaryfirborðið. Prófanirnar athuga þetta niður í 1e-9 mm.
- Umhverfis **óreglulegan punkt** (þrjár, fimm eða fleiri brúnir sem mætast, hornpunktur á þríhyrndum eða fimmhyrndum fleti, eða endi brots) er enginn nákvæmur margliðuplástur. Þar tekur plásturinn nákvæman punkt og snertiplan á þeim hornpunkti og brúnarferla nágrannanna, þannig að plástrarnir mætast enn án bils. Snertiskilyrði (tangent) yfir brúnirnar sem mætast í punktinum er nálgað. Mótunarspjaldið og spjald eiginleikans gefa stærsta hornið, venjulega undir 2°. Hærra **Stig** í spjaldi eiginleikans gerir þessa plástra minni og nákvæmari.
- Skarpar brot eru raunverulegar brúnir fasta efnisins, þannig að þú getur rúnnað þær.
- Hver plástur er sinn eigin flötur, þannig að form hefur marga fleti og línur eru dregnar milli þeirra.

## Yfirborðseiginleikar í Hönnun

Yfirborðsskipanirnar eru í valmyndinni {{ui:Meira}} í Hönnun, undir eiginleikunum. Þær þurfa nákvæma kjarnann. Yfirborðshlutir eru teiknaðir gegnsæir í bláu. Þeir eru ekki hluti af fasta efninu fyrr en þú þykkir þá eða saumar þá.

| Skipun | Hvað hún gerir |
|---|---|
| Plástur | Fyllir lokaða lykkju af brúnum. {{key:Shift}}+smelltu á brúnir fasta efnisins fyrst, eða veldu yfirborðshlut til að fylla op hans. **Snertilegt (G1)** lætur plásturinn mætast því yfirborði mjúklega. |
| Lóftað yfirborð | Yfirborð gegnum eina keðju ferla á hverri skissu (opna eða lokaða), í röð sögunnar. |
| Sauma | Saumar yfirborðshluti saman eftir sameiginlegum brúnum. Ef þeir lokast verður niðurstaðan fast efni, með **Aðgerð** eins og aðrir eiginleikar. |
| Þykkva | Gefur yfirborðshlut þykkt: eftir normal hans, á móti honum, eða helming í hvora átt. Niðurstaðan er fast efni. |
| Offset-yfirborð | Afrit af yfirborðshlut færðu eftir normölum hans. Upprunalegi hluturinn helst. |
| Framlengja yfirborð | Stækkar eins flatar yfirborð út fyrir þær brúnir sem þú velur. |
| Stytta yfirborð | Sker yfirborðshlut þar sem annar yfirborðshlutur, eða fasta efnið, sker það. Smelltu á **Veldu punkt á bitanum** til að velja hvaða bita skal halda, eða haltu öllu öðru. |

Sauma, Þykkva, Framlengja og Stytta nota upp yfirborðshlutinn sem þær byrja á. Síðari eiginleikar nota þann nýja.

Takmarkanir í dag: form með nokkrum aðskildum lokuðum hlutum breytast ekki í eitt fast efni; reglulegum svæðum er ekki sameinað í stærri yfirborð; og sjá [Það sem er ekki enn tiltækt](topic:not-built-yet).
