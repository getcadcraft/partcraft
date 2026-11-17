---
title: Stillingar PartCraft
summary: Veldu hvaða músarhnappur snýr sýninni, láttu strokhreyfingu á snertiborði snúa hlutnum og hliðra honum, kveiktu eða slökktu á sjálfvirkum tengslum meðan skissa er teiknuð, og stilltu hversu marga þræði hermunarlausnararnir nota.
keywords: stillingar, valkostir, mús, miðhnappur, hjólhnappur, snúa, hringsnúa, snertiborð, skruna, strjúka, klípa, tengsl, þvinganir, sjálfvirk tengsl, smella, samfallandi, þræðir, þræðir lausnara, kjarnar, örgjörvar, fjölþráða, hraðari lausn, samhliða
from: 759edcaf
---

Opnaðu {{ui:Stillingar}} með gírnum í forritastikunni eða {{key:Mod+,}}. Fyrsti flipinn, {{ui:PartCraft}}, geymir stillingarnar sem tilheyra þessu forriti; {{ui:Almennt}} geymir þær sem öll CadCraft-forrit deila (þema, tækjastika, spjöld). Stillingar PartCraft eru aðeins í forritinu: þú breytir þeim hér, og þessi vafri man þær. {{ui:Endurstilla PartCraft-stillingar}} setur allt aftur í upphafsstöðu.

## Snúa sýninni

- **Vinstri hnappur** (upphafsstillingin): dragðu með vinstri hnappi til að snúa hlutnum; dragðu með hægri eða miðhnappi til að hliðra.
- **Miðhnappur**: ýttu á hjólið og dragðu til að snúa hlutnum; haltu inni {{key:Shift}} (eða {{key:Ctrl}}, eða ⌘) með miðhnappi, eða dragðu með hægri hnappi, til að hliðra. Vinstri hnappurinn velur aðeins fleti, jaðra og plön, þannig að smellur sem hreyfist lítið snýr aldrei hlutnum. Mörg CAD-forrit vinna svona.

Hjólið gefur aðdrátt að bendlinum í báðum tilvikum. Í skissu hliðra hægri og miðhnappur eins og áður.

## Skrun: músarhjól eða snertiborð

- **Finndu út** (upphafið): PartCraft fylgist með skruninni. Hliðar- eða fínkornuð skrun, eins og snertiborð sendir, snýr hlutnum; heilir smellir á hjólinu gefa aðdrátt.
- **Músarhjól**: skrun gefur alltaf aðdrátt að bendlinum.
- **Snertiborð**: strjúktu með tveimur fingrum til að snúa hlutnum, haltu inni {{key:Shift}} og strjúktu til að hliðra, klíptu til að gefa aðdrátt. Í skissu hliðrar tveggja fingra strok skissunni.

Klípa gefur aðdrátt í öllum valkostum. Ef „Finndu út“ giskar rangt fyrir músina eða snertiborðið þitt, veldu það sem þú átt. Meira í [Snertiborð, snerting og litlir skjáir](topic:trackpad-and-touch).

## Skissun: bæta við tengslum meðan teiknað er

**Bæta við tengslum meðan teiknað er** (kveikt í upphafi): smellur sem smellur á punkt gerir nýja punktinn samfallandi við hann, smellur á feril setur punktinn á þann feril, og lína sem er nánast lárétt eða lóðrétt verður lárétt eða lóðrétt. Sjá [Tengsl og víddir](topic:relations-dimensions).

Slökktu á því þegar þú vilt staðsetja rúmfræði nálægt annarri rúmfræði án þess að tengja hana við hana. Bendillinn smellist enn á punkta og ferla, en ekkert er tengt: línur sem eru teiknaðar í keðju deila ekki endum sínum, þannig að dráttur getur togað þær í sundur. Bættu við tengslunum sem þú vilt sjálfur úr hægra spjaldinu. Lokaður prófíll er enn útpressaður þegar endar hans mætast.

:::note
Stillingin breytir aðeins því sem ný teikning bætir við. Tengsl sem þegar eru í skissu haldast, og Fillet-verkfærið býr enn til sinn snertiboga og radíus.
:::

## Skissun: víddir meðan teiknað er

**Víddir meðan teiknað er** (kveikt í upphafi): meðan lína, rétthyrningur, hringur eða bogi er teiknaður, fyllir það að skrifa tölu í stærðarreitinn við hliðina á bendlinum ({{key:Tab}} fer í næsta reit) og {{key:Enter}} teiknar formið í þeirri stærð, með drífandi vídd fyrir hverja stærð sem þú skrifaðir. Slökkt: að skrifa tölu meðan þú teiknar gerir ekkert, og form eru teiknuð aðeins með smellum. Sjá [Skrifaðu stærðina meðan þú teiknar](topic:sketch-basics#type-the-size-as-you-draw).

## Horn-vísir

Það sem birtist í horninu á þrívíddarsýninni: **Sýniteningur** (upphafið; efst hægra megin — smelltu á flöt, jaðar eða horn til að horfa þaðan, dragðu hann til að snúa, dragðu áttavitahring hans til að snúa líkaninu), **Ásatákn** (lítið X, Y, Z merki neðst til vinstri sem snýst með sýninni: X rautt, Y grænt, Z blátt) eða **Ekkert**. Hvorugt birtist meðan þú teiknar skissu eða á teikniblaðinu. Sjá [Sýniteningurinn](topic:view-cube).

## Þræðir lausnara

Hversu marga þræði hermunarlausnararnir mega nota. **Sjálfvirkt** (upphafið) tekur einum færri en rökrænna örgjörva tölvunnar (í mesta lagi 16), svo síðan haldist viðbragðsfús meðan rannsókn leysist; eða veldu tölu. Stórar voxel-rannsóknir, knékun, álag yfir tíma og flæði leysast hraðar á nokkrum þráðum (um 2× á 4 þráðum fyrir 80.000 teninga í mælingum okkar, meira á tölvu í hvíld); líkön undir um 20.000 óþekktum eru á einum þræði, því að ræsa þræði kostar meira en þeir spara. Lausn með mörgum þráðum gefur sama svar og einn þráður (upp að námundun: summurnar eru lagðar saman í annarri röð). Niðurstöður hverrar rannsóknar sýna **N þræðir** eða **1 þráður** ásamt ástæðunni undir **Lausnari**.

Þræðir krefjast þess að síðan sé **krosseinangruð** (vafrinn leyfir vinnsluferlum að deila minni aðeins þá). Rannsóknarsíðan er það; þar sem hún er það ekki segir stillingin það („Þessi síða er ekki krosseinangruð, þannig að lausnarar keyra á einum þræði, hvað sem er valið hér.“) og sérhver lausn notar einn þráð. Allt annað virkar eins, og svörin eru þau sömu.

Lagskipt flæðisrannsóknir nota þræðina líka (um 2.5× á 4 þráðum fyrir 54.000 vökvasellur, sama svar upp í síðasta tölustaf). Lausnarinn fyrir annars stigs fjórflötunga og varmaflutningur keyra á einum þræði: þráðun þeirra mældist hægari á prófunartölvunni okkar (þeir eru takmarkaðir af minnishraða og af skrefi sem ekki er hægt að skipta).

### Á þínum eigin vefþjóni

Ef þú keyrir PartCraft af þínum eigin þjóni virkar það eins og það er þjónað. Fyrir lausnarþræði skaltu láta þjóninn senda tvo hausa með PartCraft-síðunni:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Á Apache, í `.htaccess` möppunnar (þarf mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Á nginx, í `location` sem þjónar PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Endurhlaðið síðunni: Stillingar › Þræðir lausnara bjóða þá **Sjálfvirkt** með fjölda örgjörva tölvunnar þinnar. Seinni hausinn fær vafrann til að hafna öllu sem síðan sækir frá annarri síðu sem leyfir það ekki, sem er í lagi fyrir PartCraft eitt og sér (það sækir allt úr eigin möppu).
