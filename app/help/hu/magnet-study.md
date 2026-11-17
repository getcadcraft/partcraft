---
title: Vázlat mágneses vizsgálata
summary: Alakítsa a vázlatai zárt profiljait lapos mágneses modellé (vas, mágnesek, tekercsek), tekintse meg a teret, és olvassa le az erőt és a nyomatékot egy testen.
keywords: mágnes, mágneses, magnetosztatika, tér, fluxussűrűség, erő, nyomaték, tekercs, járom, vas, B–H görbe, állandó mágnes, működtető, motor, szolenoid, maxwell
from: 604efc3b
---

Használja a Jellemzők eszköztár {{ui:Továbbiak}} › {{ui:Vázlatok mágneses vizsgálata…}} menüpontját olyan alkatrészen, amelyhez vázlatok tartoznak. A kipipált vázlatok minden zárt alakzata a lapos modell egy-egy tartománya; a vizsgálat kiszámolja a B mágneses teret, valamint az erőt és a nyomatékot a kiválasztott testen.

## Lépések

1. Rajzolja meg a testeket zárt alakzatokként vázlatokban: egy vasjármot, egy mágnest, egy tekercset. Az érintkező testek közös élt osztanak, ezért különböző vázlatokba tegye őket; az egymástól elválasztott, vagy egymásban lévő testek (például egy ablak egy járomban) egy vázlatban is lehetnek. A vázlatokat ugyanarra a síkra tegye.
2. Nyissa meg a vizsgálatot, és jelölje ki a használandó vázlatokat. Minden zárt profil kap egy sort, számozva. Adja meg, mi az: {{ui:Levegő}}, {{ui:Vas}} (a permeabilitás, vagy B–H görbe, párokban megadva: B tesla, H A/m egységben), {{ui:Állandó mágnes}} (Br tesla egységben, az iránya a vázlat x tengelyétől mért szögként, és a visszahajlási permeabilitása) vagy {{ui:Tekercs}} (a profilon átfolyó összes áram: menetszám szorozva amperekkel; az előjel mutatja, melyik irányban folyik).
3. Jelölje be a {{ui:Erő és nyomaték ezen a testen}} lehetőséget azokhoz a testekhez, amelyekre szükség van. Adja meg az alkatrész mélységét a vázlat síkjából kifelé.
4. Válassza ki a hálót és a modell körüli levegőt, majd a {{ui:Futtatás}} gombot.

## Ezt kell látnia

- A fluxussűrűség |B| a modellen: sötétkéktől az alacsony értéknél a pirosig a magas értéknél, a profilok számozva.
- A legerősebb tér és annak helye, a háromszögek száma, és minden kijelölt testhez az x és y irányú erő, valamint a nyomaték a közepe körül, a megadott mélységre.
- Az {{ui:Eredmények mentése (CSV)}} menti a számokat.

## Jó tudni

- Lapos, állandósult modell: minden érték mélységi méterre vonatkozik, örvényáramok és hiszterézis nélkül, a mágnes pedig egyenes visszahajlási vonal (nem lehet lemágnesezni).
- A modell egy levegődobozban áll, amelynek széle falként viselkedik. Hasonlítsa össze a levegődoboz két méretét, valamint a Normál és a Finom hálót: a test körüli térből számolt erő csak annyira pontos, mint az ott lévő háló.
- A csak permeabilitással megadott vas soha nem telítődik. Ha a tér meghaladja a 2 T-t, a vizsgálat ⚠ jelet tesz a Problémák listájában: adjon a vasnak B–H görbét. Az új sor számai példák (vas μr 2000, 1,2 T-s mágnes), nem egy anyag adatlapja.
- Egy testnek legyen hely körülötte az erő felvételéhez: ha másik test túl közel van, a vizsgálat ezt jelzi.
- Rajzolási segédeszköz, nem mérnöki jóváhagyás.

## Tovább

- [Mágneses terek 2D-ben (oktatóanyag)](topic:magnetic-fields-2d)
