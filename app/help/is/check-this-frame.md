---
title: Athuga þessa grind
summary: Taktu stálbitana úr suðusamsetningu (sleða, stand, grind úr rörum og sniðum), settu tækin á fæturna og stuðningana á gólfið og sjáðu hversu mikið af hverjum bita og hverri suðu er notað samkvæmt AISC 360-16 eða EN 1993. Hjálpartæki þar til verkfræðingur hefur yfirfarið það.
keywords: grind, suðusamsetning, sleði, dæluspjald, burðarhluti, suða, suður, athuga, AISC 360, EN 1993, nýting, stuðningur, tæki, álag, holt snið, HSS, RHS, CHS, verkfræðingur
from: 032e34ee
---

{{ui:Athuga þessa grind}} tekur beina stálbita suðusamsetningar, byggir grind úr þeim, leysir hana undir þyngd stálsins og tækjanna sem þú setur á hana, og prófar sérhvern bita og sérhverja suðu þar sem bitar mætast. Ein keyrsla, ein tafla.

:::warning
Það er **hjálpartæki þar til verkfræðingur hefur yfirfarið það**. Það er ekki stimpill, og staðist próf er ekki hönnun. Það notar miðlínur bitanna eins og þeir eru teiknaðir, telur hverja tengingu soðna allan hringinn um sniðið, tekur fótinn á suðunni úr vegg sniðsins (allt að 8 mm) nema þú stillir það, og athugar ekki bolta, plötur, undirplötur, akkeri, þrýstiþol undir legu, skurðþol blokkar, þreytu né lyftingu.
:::

## Keyra það

1. Teiknaðu bitana með {{ui:Burðarhluti}} (sniðin koma úr sniðtöflunni).
2. Opnaðu {{ui:Sýn}} › {{ui:Athuga þessa grind}}. Segðu hvar grindin stendur (**stuðningur** við hvern fót: lamaður, fastur eða rúlla; {{ui:Lamaðir stuðningar við fæturna}} setur einn við hvern lægsta bitaenda) og hvað stendur á henni (**tæki**: massi, þyngdarmiðja, punktarnir þar sem það er boltað niður, og valkvæður lárétt þrýstingur).
3. Veldu staðalinn: **ASCE 7 + AISC 360-16** eða **EN 1990 + EN 1993**. Stilltu stálgæðið og, fyrir AISC, styrk suðumálmsins (482,6 MPa er E70).
4. Ýttu á {{ui:Athuga}}. {{ui:Vista skýrsluna sem CSV}} skrifar allar töflurnar, með línunni um að hún sé ekki yfirfarin fyrst.

Grindin er lesin í millimetrum með lóðrétta ás hlutans upp. Stuðningar og tækjapunktar eru skráðir sem x y z í sama ramma, með z sem hæðina.

Endi bita sem lendir á miðju annars bita klýfur hann þar, eins og fótur eða boltunarpunktur á línu bita gerir. Þyngd er skipt yfir boltunarpunktana sem stífan líkama; þyngdarmiðja utan fótanna, eða lyftikraftur á fót, er sögð, aldrei falin.

## Hvað þú færð

- Mest notaði liðurinn og hvort eitthvað bregst. Liðir sem athugunin getur ekki dæmt (snið sem er ekki í töflunni, stál án stuðuls í staðlinum) eru taldir og nefndir, aldrei taldir standast.
- Ein röð fyrir hvern bita og hverja suðuhóp: hversu mikið er notað, ráðandi athugun og grein, og álagssamsetningin sem réð.
- Sömu töflur í skýrslunni.

## Hvað er athugað

Holir snið (RHS, SHS, CHS, rör) og I-snið fyrir tog, þrýsting, beygju, skurð og samspil þeirra; hornsuðu og fullþrengda suðu eftir teygjanlegu vigraðferðinni. Þéttir veggir eru aðeins athugaðir í beygju fyrir holt snið; grannir veggir eru sagðir ekki athugaðir. Sum gildi hafa verið skrifuð upp úr stöðlunum en ekki enn borin saman við prentað eintak; skýrslan telur upp hverja heimild.

Sjá [Grindur úr stálsniðum](topic:structural-members) til að teikna bitana og skurðlistann þeirra.
