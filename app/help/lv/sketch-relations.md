---
title: Skices sakarības un izmēri
summary: Katra PartCraft skices sakarība un izmērs, ko atlasīt katram, tā simbols un uzvedība risināšanas laikā.
keywords: sakarības, ierobežojumi, sakritība, horizontāls, vertikāls, paralēls, perpendikulārs, pieskare, vienāds, koncentrisks, viduspunkts, fiksēt, attālums, horizontālais attālums, vertikālais attālums, rādiuss, diametrs, leņķis, simboli, zīmes
from: 9831e7be
---

Sakarības nosaka, kā ģeometrija atrodas attiecībā pret citu ģeometriju. Izmēri nosaka lielumus. Lai pievienotu sakarību, atlasiet objektus ar rīku Atlasīt ({{key:S}}) un izvēlieties tās pogu labajā panelī; lai pievienotu izmēru, izmantojiet rīku Izmērs ({{key:D}}) vai izmēru pogas labajā panelī. Kā ar tiem strādāt: [Pilnībā definēt skici](topic:relations-dimensions).

Zemāk „līkne” nozīmē riņķi vai loku. Sākumpunkts skaitās kā punkts.

## Sakarības

| Poga | Simbols | Atlasīt | Efekts |
|---|---|---|---|
| {{ui:• Sakrītošs}} | • (redzams tikai atlasot vai kad ir problēma) | Divus punktus | Punkti sakrīt |
| {{ui:• Sakrītošs}} | • | Punktu un līniju | Punkts atrodas uz līnijas (vai tās turpinājuma) |
| {{ui:• Sakrītošs}} | • | Punktu un līkni | Punkts atrodas uz riņķa vai loka |
| {{ui:H Horizontāls}} | H | Līniju vai divus punktus | Līnija ir horizontāla vai abiem punktiem ir vienāds augstums |
| {{ui:V Vertikāls}} | V | Līniju vai divus punktus | Līnija ir vertikāla vai punkti atrodas viens virs otra |
| {{ui:∥ Paralēls}} | ∥ | Divas līnijas | Līnijas iet vienā virzienā |
| {{ui:⊥ Perpendikulārs}} | ⊥ | Divas līnijas | Līnijas saskaras taisnā leņķī |
| {{ui:T Pieskare}} | T | Līniju un līkni | Līnija pieskaras līknei, to nešķeļot |
| {{ui:T Pieskare}} | T | Divas līknes | Tās pieskaras, ārēji vai iekšēji, kā zīmētas |
| {{ui:T Pieskare}} | T | Splainu un līniju, loku vai splainu, kas saskaras ar vienu no tā galiem | Splains no šā gala iziet tās otras līknes virzienā |
| {{ui:= Vienāds}} | = | Divas līnijas | Vienāds garums |
| {{ui:= Vienāds}} | = | Divas līknes | Vienāds rādiuss |
| {{ui:◎ Koncentrisks}} | ◎ | Divas līknes | Viens un tas pats centrs |
| {{ui:◎ Koncentrisks}} | ◎ | Punktu un līkni | Punkts atrodas līknes centrā |
| {{ui:M Viduspunkts}} | M | Punktu un līniju | Punkts atrodas līnijas vidū |
| {{ui:↔ Simetrisks}} | ↔ | Divus punktus un līniju | Punkti ir spoguļattēli attiecībā pret līniju (Spoguļošana pievieno šīs sakarības) |
| {{ui:⚓ Fiksēt}} | ⚓ | Punktu, līniju, līkni vai splainu | Tur to tieši tur, kur tas atrodas tagad (splainu — tā punktus) |

Šeit līnijas ietver centrālās līnijas. Zīmējot, daļu sakarību pievieno automātiski: piesaistot punktam, tas kļūst sakritīgs; piesaistot līknei, punkts tiek novietots uz tās; gandrīz horizontālas vai vertikālas līnijas saņem H vai V; taisnstūrim četri stūri ir savienoti, divas H un divas V.

**Fiksēt** ir ātrs veids, kā apturēt kaut ko kustēties, bet tad detaļa nevar sekot izmaiņām izmērā citur. Dodiet priekšroku izmēriem attiecībā pret sākumpunktu.

## Izmēri

| Poga | Atlasīt | Mēra | Attēlots kā |
|---|---|---|---|
| {{ui:Attālums}} | Līniju | Tās garumu | Attālums 40 |
| {{ui:Attālums}} | Divus punktus | Taisno attālumu starp tiem | Attālums 40 |
| {{ui:Attālums}} | Punktu un līniju | Attālumu no punkta līdz līnijai, taisni pret to | Attālums 40 |
| {{ui:Attālums}} | Divas paralēlas līnijas | Atstarpi starp tām | Attālums 40 |
| {{ui:Horizontālais attālums}} | Divus punktus vai līniju | Tikai attālumu pa labi-pa kreisi | Horizontālais attālums 40 |
| {{ui:Vertikālais attālums}} | Divus punktus vai līniju | Tikai attālumu augšā-lejā | Vertikālais attālums 40 |
| {{ui:Rādiuss}} | Riņķi vai loku | Tā rādiusu | Rādiuss R10 |
| {{ui:Diametrs}} | Riņķi vai loku | Tā diametru | Diametrs ⌀20 |
| {{ui:Leņķis}} | Divas līnijas, kas nav paralēlas | Leņķi starp tām, no 0 līdz 180 grādiem | Leņķis 30° |

Ar rīku Izmērs PartCraft izvēlas tipu pēc tā, ko noklikšķināt, un pēc tā, kur novietojat skaitli:

| Noklikšķināt | Iegūstat |
|---|---|
| Vienu līniju | Tās garumu; slīpai līnijai — horizontālu, ja skaitlis atrodas virs vai zem tās, vertikālu, ja sānos |
| Vienu riņķi | Diametru |
| Vienu loku | Rādiusu |
| Divus punktus | Attālumu; horizontālu vai vertikālu kā slīpai līnijai |
| Punktu un līniju | Attālumu no punkta līdz līnijai |
| Divas līnijas | Leņķi, vai attālumu, ja tās ir paralēlas |
| Punktu un riņķi | Neko: „Šos objektus nevar izmērīt kopā.” Izmēriet līdz riņķa centra punktam |

**Nobīde** (rādīta kā attālums) tiek veidota ar rīku Nobīde: tas notur kopētu līniju paralēli šim attālumam vai kopētu loku vai riņķi koncentriski ar rādiusu, kas ir tikpat daudz lielāks vai mazāks. Pārējiem tās pašas nobīdes elementiem ir sakarība **O** un tie seko vienam nobīdes izmēram. Skatiet [Splaini, apgriešana, nobīde un citi skices rīki](topic:sketch-tools).

Izmēru vērtības ir milimetri (vai grādi), nekad negatīvas. Rādiuss un diametrs jābūt lielākam par nulli. Vērtība 0 ir atļauta attālumiem: divi punkti 0 attālumā ir sakritīgi.

## Kā darbojas risināšana

- **Vismazākā kustība.** Mainoties vērtībai, risinātājs pārvieto ģeometriju pēc iespējas mazāk. Līnija, kuras garums mainās un kuras neviens gals nav fiksēts, izaug vienādi abos galos.
- **Bez apgriešanās.** Attālumi no punkta līdz līnijai, horizontālie un vertikālie attālumi, leņķi un pieskare atceras, kurā pusē tie tika izveidoti. Vērtības maiņa nekad nepārvieto ģeometriju uz otru pusi.
- **Konflikti neskar neko.** Ja sakarības viena otrai pretrunā, skice paliek tieši tāda, kāda bija, un pretrunīgās kļūst sarkanas.
- **Liekas sakarības** (kuras jau nozīmē citas) tiek nosauktas statusa joslā („jau ir ietverta. Dzēsiet to.”), un elements tiek veidots tāpat, bet ar brīdinājumu.
- **Pieskares savienojumi.** Tur, kur noapaļojuma loks saskaras ar savām līnijām kopīgā galā, pieskare tiek risināta formā, kas tur ir labi noteikta, tāpēc skices noapaļojumi nelasās kā pārmērīgi definēti.

## Vēl nav pieejams

Kolineāras, koradiālas un krustošanās sakarības; punkts uz splaina; vadītie (atsauces) izmēri; koordinātu un loka garuma izmēri; vienādojumi starp izmēriem. Kolineārām līnijām lietojiet Paralēls un 0 attālumu.
