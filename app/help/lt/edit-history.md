---
title: Keisti detalę per jos istoriją
summary: Redaguokite elementus ir eskizus jau sukūrus, blokuokite, grąžinkite iki ankstesnės būsenos, įterpkite elementus anksčiau, keiskite jų tvarką, pervadinkite ir naikinkite, bei anuliuokite bet ką iš to.
keywords: istorija, elementų medis, projektavimo medis, redaguoti elementą, redaguoti eskizą, blokuoti, atblokuoti, grąžinimas, grąžinti, eiti pirmyn, tvarka, perkelti elementą, naikinti, pervadinti, anuliuoti, perdaryti, perskaičiuoti, regeneruoti, tėvas vaikas, didelė detalė, daug elementų, lėtas perskaičiavimas, 750 elementų
from: 6f75aef4
---

PartCraft detalė – tai jos istorija: sąrašas plokštumų, eskizų ir elementų kairėje. PartCraft kiekvieną kartą, kai kas nors pasikeičia, iš naujo sukuria kietą kūną nuo viršaus iki apačios šio sąrašo. Pakeitus skaičių sąrašo pradžioje, pakinta viskas, kas ant jo pastatyta.

## Redaguoti elementą

1. Spustelėkite elementą istorijoje (arba eskizą, įtrauktą po juo).
2. Pakeiskite jo nustatymus dešiniame skydelyje. Kiekvienas pakeitimas iš karto perskaičiuojamas.

Nėra nei Gerai, nei Atšaukti: kiekvienas pakeitimas taikomas. Jei nepatiko, paspauskite {{key:Mod+Z}}.

## Keisti, kurias briaunas ar paviršius naudoja suapvalinimas, nuokarpa ar apvalkalas

Dukart spustelėkite elementą istorijoje arba jį pasirinkite ir spustelėkite {{ui:Pasirinkti briaunas}} (arba {{ui:Pasirinkti paviršius}}). Spustelėkite briaunas ar paviršius, kad juos pridėtumėte arba atmestumėte, tada spustelėkite {{ui:Atlikta}} arba {{key:Esc}}. Žr. [Suapvalinimas, nuokarpa ir įgaubimas](topic:fillet-chamfer-shell).

## Redaguoti eskizą

1. Dukart spustelėkite eskizą istorijoje arba jį pasirinkite ir dešiniame skydelyje spustelėkite {{ui:Redaguoti eskizą}} (arba {{ui:Eskizas}} įrankių juostoje).
2. Detalė grįžta į tokią būseną, kokia ji buvo sukūrus eskizą: elementai po jo redaguojant paslepiami.
3. Pakeiskite geometriją, ryšius ar matmenis.
4. Uždarykite eskizą. Visa detalė perskaičiuojama su pakeitimu.

Jei norite keisti tik dydį, eskizo atverti nereikia. Pasirinkite elementą arba eskizą ir pakeiskite skaičių dešiniame skydelyje, skyrelyje **Eskizo matmenys** (arba **Valdantieji matmenys**). Žr. [Keisti dydžius neatveriant eskizo](topic:change-sizes).

## Kai elementas nepavyksta

Jei pakeitimas padaro elementą neįmanomą, PartCraft sukuria visa kita ir pažymi problemą:

- elementas istorijoje rodo **⚠ klaida**, o jo pranešimas rodomas viršuje jo dešiniame skydelyje (užvedus pelę ant eilutės, pranešimą galima perskaityti ir čia);
- elementai, kuriems jo reikia, rodo **⚠ nesukurta**, su tekstu „Reikia Extrude2, kuris nepavyksta.";
- būsenos juostos žymė sako „1 elementas nepavyksta“.

Pašalinkite priežastį (arba anuliuokite), ir detalė vėl sukuriama. Dažniausi pranešimai ir ką daryti aprašyti [Trikčių šalinimas](topic:troubleshooting).

## Blokuoti elementą

Blokavimas išjungia elementą nenaikinant jo: naudinga išbandyti detalę be skylės ar masyvo.

1. Pasirinkite elementą.
2. Spustelėkite {{ui:Blokuoti}}. Jo eilutėje rodoma **išjungta**. Elementai, kuriems jo reikia, taip pat nesukuriami.
3. Spustelėkite {{ui:Atkurti}}, kad vėl įjungtumėte.

## Grąžinti

Grąžinimas sukuria detalę tik iki tam tikro taško, kad galėtumėte ją pamatyti tokią, kokia ji buvo, arba pridėti elementą anksčiau istorijoje.

1. Pasirinkite elementą ir spustelėkite {{ui:Grąžinti iki čia}}. Tas elementas ir visi žemiau esantys pilki ir nesukurti. Eilutė **Grąžinimo juosta · eiti pirmyn** žymi vietą.
2. Bet koks elementas, kurį dabar pridedate, įrašomas **prie juostos**, prieš pilkus.
3. Spustelėkite **Grąžinimo juosta · eiti pirmyn**, kad vėl sukurtumėte viską.

Grąžinimo padėtis įrašoma į failą.

## Keisti elementų tvarką

1. Pasirinkite elementą.
2. Spustelėkite {{ui:Perkelti aukštyn}} arba {{ui:Perkelti žemyn}}, arba, kai elemento istorijos eilutė aktyvi, paspauskite {{key:Alt+Up}} arba {{key:Alt+Down}}.

Elementas niekada negali pakilti aukščiau to, ką naudoja. Mygtukas pilkas, o užvedus pelę (arba bandant klavišą) pateikiama priežastis, pavyzdžiui: „Extrude2 naudoja Sketch2, todėl Sketch2 turi būti pirmas.“

Ką elementas naudoja: jo eskizą; paviršių, ant kurio stovi jo eskizas; elementus, kuriuos kopijuoja masyvas ar atspindys; eskizo liniją ar sukimą, naudojamus kaip kryptį ar ašį.

## Naikinti elementą

1. Pasirinkite elementą ir dešiniame skydelyje arba įrankių juostoje spustelėkite {{ui:Naikinti}}, arba paspauskite {{key:Delete}}.
2. Jei kiti elementai jį naudoja, PartCraft klausia: „Extrude3, Hole1 naudoja Extrude1 ir taip pat bus ištrinti.“ Pasirinkite {{ui:Naikinti visus}} arba {{ui:Atšaukti}}.

Naikinant elementą, eskizas neištrinamas: jis vaizde vėl pasirodo kaip nenaudojamas eskizas, paruoštas kitam elementui. Jei eskizo nebereikia, naikinkite jį atskirai.

## Pervadinti

Pasirinkite elementą ir dešiniame skydelio apačioje įveskite naują **Pavadinimą** (iki 60 simbolių). Detalės pavadinimas rodomas dešiniame skydelyje, kai nieko nepasirinkta.

## Detalės su šimtais elementų

Detalė su šimtais elementų išbandyta su 750. PartCraft išsaugo kietą kūną, kuris buvo istorijos viduryje, todėl pakeitimas istorijos pabaigoje perskaičiuoja tik vėlesnius elementus; pakeitimas istorijos pradžioje perskaičiuoja viską, kas ant jo pastatyta, ir tai trunka ilgiausiai. Anuliavimas ir perdarymas perskaičiuoja tik nuo to taško, kuriame dvi būsenos skiriasi. Kad didelę detalę dirbtumėte greičiau, grąžinkite iki vietos, kurioje dirbate (žr. aukščiau Grąžinimas), arba blokuokite tai, ko šiuo metu nereikia. Kelios nepersidengiančios pjūvių ir išspaudimų grupės taikomos kartu, todėl detalė iš daugelio atskirų skylių ir išspaudimų sukuriama greičiau, nei rodo elementų skaičius.

Didelė detalė perskaičiuojama fone: apačioje esanti žymė rodo **Perskaičiuojama…** ir kiek pažengta, o vaizdas, skydeliai ir meniu tuo metu veikia. Ekrane rodoma paskutinė sukurta detalė, kol nauja bus paruošta. Jei kas nors vėl pakeičiama perskaičiuojant, PartCraft sukuria naujausią versiją ir atmeta vykdomą. Maža detalė perskaičiuojama iš karto.

## Anuliuoti ir perdaryti

- {{key:Mod+Z}} arba {{ui:Anuliuoti}} anuliuoja paskutinį pakeitimą: elementą, nustatymą, eskizo redagavimą, tempimą. Būsenos juostoje rašoma, ką, pavyzdžiui: „Anuliuota: keisti matmenį.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} arba {{ui:Perdaryti}} perdaro.
- PartCraft išsaugo paskutinius 200 žingsnių (labai didelė detalė, kurios 200 kopijos užimtų daug atminties, išsaugo mažiau, bet ne mažiau nei naujausius 20). Pakeitimai brėžinio lape (pjūvis, perkeltas GD&T simbolis) yra tame pačiame sąraše. Atidarius failą arba pradėjus naują detalę, sąrašas išvalomas.

:::mac
Mac kompiuteryje perdarymui naudokite ⇧⌘Z. Safari naršyklėje ⌘Y gali atverti naršyklės istoriją.
:::
