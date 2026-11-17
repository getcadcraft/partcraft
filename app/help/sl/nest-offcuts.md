---
title: Hranite in ponovno uporabite odrezke
summary: Po razporeditvi, kar ostane od vsake plošče, postane oštevilčen ostanek v seznamu zaloge; naslednja razporeditev najprej uporabi ostanke, nato cele plošče.
keywords: razporejanje, nesting, odrezek, ostanek, zaloga, preostanek, plošča, list, ponovna uporaba, material, debelina, CSV
from: 7a68d4b8
---

Ko razporejate dele na plošče, lahko uporabni preostanek vsake plošče (ne drobci) ohranite kot **ostanek**: oštevilčen obris (R-0001, R-0002 …) z materialom, debelino, velikostjo in nalogom, iz katerega izvira. Seznam se shrani skupaj z datoteko in ga lahko shranite kot CSV.

## Uporabite jih znova

Vpišite **material** in **debelino**, pustite {{ui:Najprej uporabi ostanke}} vklopljeno in razporedite. Ostanki istega materiala in debeline se preizkusijo od najmanjšega. Deli, ki gredo noter, pridejo nanje, znotraj lastnega obrisa ostanka in stran od njegovega roba; kar ne gre, pride na nove plošče. Poročilo o nalogu navede, kateri ostanki so bili uporabljeni in kaj je ostalo. Ko je vklopljeno {{ui:Shrani preostanek kot ostanke}}, {{ui:Dodaj ta nalog v zalogo}} to zapiše v seznam zaloge: uporabljen ostanek je označen z **Uporabljeno** (z nalogom) in ni več ponujen; to, kar ostane od njega, postane nov ostanek, ki si zapomni svojega prednika.

## Kaj šteje za ostanek

Preostanek se meri z razmikom, ki ste ga nastavili (noben del ni bližje od tega reza). Trakovi, ožji od dvajsetine plošče, in kosi, manjši od 2 % plošče, so odpadek; obe meji spremenite, če vaša delavnica hrani manjše kose. Izvrtine v delih so last delov in se ne ohranijo. Zvitek nima ostankov.

## V risbi

DXF razporeditve nariše obris vsakega ostanka na sloju REMNANTS s številko na sredini, da je kose mogoče označiti, ko se režejo.

Še ni izdelano: smer vlaken ostanka, črtna koda ali list z nalepkami, ostanki zvitkov, zaloga, deljena med projekti.
