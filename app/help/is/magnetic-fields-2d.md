---
title: Segulsvið í 2-D (kennsla)
summary: Reiknaðu segulsvið rafseguls eða varanlegs seguls með greiningasafninu: keyrðu dæmin, lestu flæðisþéttleikann, bilsviðið, spanstuðulinn og aðdráttinn, breyttu hönnuninni og smíðaðu þitt eigið líkan af spólum, seglum og járni.
keywords: segull, segulstöðufræði, segulsvið, flæðisþéttleiki, tesla, rafsegull, spóla, segulspóla, amperavindingar, járnkjarni, loftbil, leiðni, spanstuðull, segulkraftur, segulviðnám, segulrás, vigurmöguleiki, rafsegulfræði, endanlegt frumreikningsnet, fem, mótor, stýribúnaður, spennir, magnetostatic2d, varanlegur segull, neódým, ndfeb, ferrít, leifsegulmögnun, vinnupunktur, afturkræfni, leki, haldsegull
from: 215f6601
---

Greiningasafn PartCraft getur reiknað út segulsvið spóla og járns í 2-D: þverskurð af einhverju sem er langt og eins eftir endilöngu, eins og rafsegli, kjarna spennis, straumteini eða þverskurð af mótor. Þessi kennsla keyrir dæmi safnsins um rafsegul, les það sem það segir, breytir því, sýnir hvernig þú smíðar þitt eigið form, og bætir síðan við varanlegum segli.

Hún notar **Skriftu**-vinnusvæðið og [greiningasafnið](topic:craftscript-library). Þú þarft ekki að kunna CraftScript-málið til að fylgja henni; dæmið segir hvað hver lína gerir.

## Hvað er líkanað

C-laga járnkjarni, 100 × 80 mm að utan og 20 mm þykkur, með 2 mm loftbili í hægri fæti sínum. Spóla með 100 vindingar sem ber 10 A (1000 amperavindingar) er vafin um vinstri fótinn. Allt er langt í átt út úr skjánum, svo svörin eru **per metra dýpt**: margfaldaðu með raunverulegri dýpt fyrir raunverulegan segul.

Safnfallið `magnetostatic2d` leysir fyrir segulvigurmöguleikann á neti úr 1 mm ferningum í kassa af lofti umhverfis segulinn, og reiknar síðan út flæðisþéttleikann **B** (í teslum) úr honum.

## Keyrðu dæmið

1. Veldu **Skrift** í reitnum **Vinnusvæði** vinstra megin á tækjastikunni.
2. Opnaðu flipann **Safn** í skriftuspjaldinu, síðan **Dæmi** › **Rafsegull: svið, bil, spanstuðull**.
3. Smelltu á {{ui:Opna (lesvarið)}}, og ýttu síðan á {{key:F5}}.

Eftir eina eða tvær sekúndur sýnir strigi flæðisþéttleikann, og skipanalínan prentar:

```
B í bilinu 0.5427 T; segulrásin 0.5516 T (-1.6 %: jaðarflæði og leki)
spanstuðull 0.1539 H á metra dýpt; rásin gefur 0.1103 H/m, og sleppir flæðinu sem lekur framhjá bilinu
geymd orka 7.694 J/m; |B| nær hámarki 1.97 T í innri hornum gluggans (raunverulegt stál myndi mettast þar)
aðdráttur yfir bilið um 2343 N á metra dýpt (117.2 N fyrir 50 mm dýpt)
```

Línuritið fyrir neðan strigann er lóðrétti flæðisþéttleikinn B_y eftir miðlínu kjarnans, frá vinstri til hægri: um −0.55 T í vinstri fætinum (flæðið rennur niður hann), næstum ekkert í glugganum, og +0.55 T í hægri fætinum og yfir bilið (flæðið kemur aftur upp). Sama flæðið fer í gegnum járnið og bilið, svo fæturnir tveir og bilið sýna nærri sama gildi.

## Lestu niðurstöðurnar

- **Sviðið í bilinu** er 0.543 T. Handreikningur meðhöndlar kjarnann sem eina segulrás, B = μ0 N I / (g + l / μr), þar sem g er bilið, l lengd leiðarinnar í gegnum járnið og μr hlutfallsleiðni járnsins; hann gefur 0.552 T. Sviðið er örlítið lægra en handreikningurinn því flæðið bungar út umhverfis bilið (jaðarflæði) og hluti flæðisins tekur stuttan krók yfir gluggann (leki). Með minna bili eða fínna neti nálgast þau hvort annað.
- **Spanstuðullinn** á 100 vindinga spólunni er 0.154 H á metra dýpt, úr orkunni sem geymd er í sviðinu. Rásarformúlan gefur minna (0.110 H/m) því hún telur aðeins flæðið í gegnum bilið, ekki flæðið sem lekur framhjá því.
- **Aðdrátturinn** sem lokar bilinu er B² w / (2 μ0) fyrir bilflöt w á breidd: um 2300 N á metra, eða 117 N fyrir segul sem er 50 mm djúpur.
- **Hámarkið** 1.97 T er í innri hornum gluggans, þar sem flæðið beygir snögglega. Líkanið meðhöndlar járnið sem línulegt; raunverulegt rafstál mettast við um 1.5 til 2 T, svo meðhöndlaðu gildi yfir því sem viðvörun, ekki svar.

:::note
Eigin prófanir safnsins keyra þetta dæmi og bera bilsviðið saman við formúlu segulrásarinnar í hvert sinn sem PartCraft breytist. Aðferðin, heimildir hennar og hinar prófanirnar (langur spólustrengur, járnkjarnaður spólustrengur) eru í haus `magnetostatic2d`: smelltu á hann í safninu.
:::

## Breyttu hönnuninni

1. Smelltu á {{ui:Búa til afrit}} fyrir ofan skrifvörðu skriftuna. Afritið er vistað með hlutanum þínum.
2. Breyttu gildi nálægt efst og ýttu aftur á {{key:F5}}. Prófaðu:
   - `g = 0.001;` — helmingi minna bil: sviðið í bilinu nærri tvöfaldast, og aðdrátturinn líka (hann fylgir B²).
   - `mur = 200;` — lélegri kjarni: meira af amperavindingunum fer í járnið.
   - `N = 200;` — tvöfaldar vindingar: tvöfalt sviðið, fjórfaldur spanstuðullinn.
   - `h = 0.0005;` — fínna net: nákvæmari svör, um fjórum sinnum lengri tími.

Hver keyrsla kemur í stað strigans. Breyturnar sem skriftan bjó til (eins og `Bgap`, `L`, `F`) haldast í listanum **Breytur** fyrir þína eigin útreikninga.

## Smíðaðu þitt eigið form

Dæmið byggir allt úr þremur listum, eitt gildi á hvern netferning, sem þú getur búið til fyrir hvaða form sem er teiknað með beinum línum eftir netinu:

- **Hvar járnið er:** `iron` er satt fyrir ferningana innan kjarnans. Dæmið byggir það úr rétthyrningum: `frame & ~window & ~gap` þýðir „í römmunum, ekki í glugganum, ekki í bilinu“.
- **Leiðnin:** `1 + (mur - 1) * iron` er 1 í lofti og `mur` í járninu. Gefðu mörgum efnum sín eigin gildi á sama hátt.
- **Straumurinn:** `J` er straumþéttleikinn í amperum á fermetra, jákvæður út úr skjánum, neikvæður inn í hann. Spóla hefur tvær hliðar með gagnstæðum formerkjum; dæmið reiknar út `J0` svo að önnur hliðin beri N I.

Síðan leysir `r = magnetostatic2d(m, permeability, J)` það. `r.B` er flæðisþéttleikinn í hverjum ferningi (tveir dálkar, x og y), `r.Bmag` stærð hans, `r.energy` geymd orka á metra. `plot(x, y)` teiknar línu.

Safnið vinnur í metrum og sýnin í millimetrum, svo svið sem birt væri óbreytt yrði teiknað þúsund sinnum of smátt. Dæmið sýnir það á afriti af netinu í millimetrum (`mm = quadGrid(…)`, síðan `show(field(mm, …))`): afritaðu þessar tvær línur.

Sjálfgefið heldur jaðar kassans sviðinu inni: enginn flæði fer út. Gerðu kassann að minnsta kosti tvisvar til þrisvar sinnum stærri en segullinn svo að það þjappi ekki sviðinu saman. Fyrir samhverfan segul geturðu líkanað helminginn af honum: haus `magnetostatic2d` segir hvaða jaðarskilyrði skal nota á samhverfulínu.

## Varanlegir seglar

Annað dæmið, **Dæmi** › **Varanlegur segull í járnkjarna: vinnupunktur, leki, aðdráttur**, er sami kjarni með spólunni fjarlægða og 10 mm sneið af vinstri fætinum skipt út fyrir segul, segulmagnaðan upp á við. Keyrðu það með {{key:F5}}. Það prentar:

```
segullinn vinnur við B = 1.036 T, H = -124 kA/m (á afturkræfri línu sinni B = Br + μ0 μr H)
B í bilinu 0.6778 T; segulrásin án leka 0.9692 T (-30.1 %)
lekastuðull 1.53: af flæðinu sem fer úr seglinum fer 65 % yfir bilið milli pólflatanna
aðdráttur yfir bilið um 3656 N á metra dýpt (182.8 N fyrir 50 mm dýpt)
```

- **Vinnupunkturinn.** Segull er lýstur með **leifsegulmögnun** Br (sviðinu sem hann heldur þegar járn skammhleypir hann: um 1.2 T fyrir sintraðan NdFeB-segul, 0.4 T fyrir ferrít) og afturkræfri leiðni sinni (um 1.05 og 1.1). Að opna bil færir hann niður afturkræfu línu sína: hér í 1.04 T, með H sem bendir gegn B inni í honum.
- **Leki.** Handreikningurinn án leka gefur 0.97 T í bilinu; líkanið gefur 0.68 T. Segull knýr flæði sitt með sterkum þrýstingi yfir stutta lengd, svo mikið af því fer beint til baka yfir gluggann í stað þess að fara í gegnum bilið. Lekastuðullinn segir hversu mikið: 1.53 hér. Settu `g = 0;` fyrir lokaðan haldara: segullinn vinnur þá innan hálfs prósents frá handreikningnum.
- **Seglar í þínu eigin líkani.** Gefðu `magnetostatic2d` seglana sem `struct('Br', Br)`, þar sem `Br` hefur eina röð á hvern netferning með leifsegulmögnuninni eftir x og y í teslum (núll utan seglanna), og gefðu segulferningunum afturkræfu leiðni þeirra í leiðnilistanum:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upp á við í ferningunum þar sem mag er satt
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Fyrir segul sem er segulmagnaður í horni, settu `Br·cos(angle)` og `Br·sin(angle)` í dálkana tvo; fyrir hringsegul sem er segulmagnaður út á við, reiknaðu stefnu hvers fernings út frá staðsetningu hans. `r.H` gefur styrk sviðsins H í hverjum ferningi.

Líkanið heldur segli á beinni afturkræfu línu sinni hversu fast sem keyrt er á hann. Raunverulegur segull sem er keyrður yfir hnéð sitt (af stóru bili, sterkri spólu eða hita) tapar hluta af styrk sínum að eilífu; athugaðu vinnupunktinn á móti feril framleiðandans fyrir gæðaflokkinn og hitastigið.

Prófanir safnsins athuga segla á móti tveimur handreikningsniðurstöðum: hringlaga segli í opnu lofti (inni í honum er B = Br / (1 + μr)) og seglinum lokuðum af járnhaldara (segulrásinni), báðum innan 1 %.

## Það sem það gerir ekki enn

- **Mettun.** Járnið er línulegt: tvöfaldaðu strauminn, tvöfaldast sviðið, án takmarka.
- **Afsegulmögnun.** Seglar haldast á beinni afturkræfri línu sinni (sjá að ofan).
- **Straumhvirflar** og **tap** (járntap, koparstapt).
- **Hreyfanlegir hlutar og tog.** Enginn snúningshluti í stator, ekkert tog á móti horni.
- **Hringlaga form.** Netið er gert úr jöfnum ferningum, svo bogadregnar útlínur koma stigaðar.
- **3-D.** Allt er þverskurður af einhverju löngu.

Hönnun mótora (snúningshluti, tog og tap í 2-D) er skoðuð fyrir síðari útgáfu. Sjá [Ekki smíðað enn](topic:not-built-yet).
