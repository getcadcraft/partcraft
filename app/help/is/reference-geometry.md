---
title: Viðmiðunarplön, ásar og punktar
summary: Búðu til plön sem eru færð frá fleti, í horni, gegnum þrjá punkta, miðja vegu, snertandi strokk, hornrétt á brún eða gegnum brún og punkt; ása; punkta á miðjum brúnum, skurðpunktum og hornum plana; teiknaðu skissur á þeim og notaðu þá sem snúningsása, stefnur mynstra og speglunarplön.
keywords: viðmið, milli hluta, miðpunktur, skurðpunktur, plan gegnum brún og punkt, viðmiðunarplan, vinnuplan, byggingarplan, færð plan, plan í horni, miðplan, snertiplan, viðmiðunarás, byggingarás, viðmiðunarpunktur, vinnupunktur, skissa á plan
from: e7eb6fc1
---

Viðmiðunarrúmfræði er stoðgrindin sem þú byggir eiginleika á: **plan** til að teikna á þar sem enginn flötur er, **ás** til að snúa eða mynstra um, **punkt** til að stöðva útdrátt á. Hún hefur ekkert efni í sjálfri sér. Plön birtast í sýninni sem ljósir ferningar, ásar sem strikaðar línur og punktar sem litlir krossar. Öll þrjú bætast í söguna og fylgja því sem þau voru gerð út frá þegar þú breytir stærð fyrir ofan.

Þau eru í {{ui:More}}-valmynd Eiginleikahópsins: {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}}.

## Búa til plan

1. Smelltu á flatan flöt, eða grunnplan í sögunni, til að byrja þaðan (valfrjálst).
2. Veldu {{ui:More}}, og síðan {{ui:Plane}}. Það byrjar sem færð plan í 20 % af stærð hlutarins frá því sem þú valdir (eða frá efsta planinu).
3. Veldu **Gerð** og viðmiðanir hennar í hægra spjaldinu:

| Gerð | Viðmiðanir | Tölur |
|---|---|---|
| Færð frá plani eða fleti | **Frá plani** | **Fjarlægð (mm)**, neikvæð fyrir hina hliðina |
| Í horni, gegnum brún eða ás | **Frá plani**, **Snúast um** (heimsás, ássögn eiginleiki eða valin bein brún) | **Horn (°)** |
| Gegnum þrjá punkta | **Punktur 1**, **Punktur 2**, **Punktur 3** | — |
| Miðplan milli tveggja | **Fyrsta plan**, **Annað plan** (samsíða: mitt á milli; mætast: planið sem deilir horninu) | — |
| Snertandi strokk | **Strokkur** (strokkfletur), **Nálægur punktur** (hvorum megin) | — |
| Hornrétt á brún, í punkti | **Brún**, **Í punkti** (planið fer í gegnum þann punkt brúnarinnar sem er næst því, og í gegnum punktinn líka) | — |
| Gegnum brún og punkt | **Bein brún** (eða ás), **Gegnum punkt** | — |
| Hornrétt á brún við miðju hennar | **Brún** (mitt á lengd hennar, hornrétt þar), eða án brúnar **Punktur 1** og **Punktur 2** (planið mitt á milli þeirra) | — |

Sérhver viðmiðun hefur **Velja**-hnapp: veldu hann og smelltu síðan í sýnina. Plan-rauf tekur grunnplan, viðmiðunarplan eða flatan flöt. Punktarauf tekur enda brúnar (smelltu nálægt þeim enda), punkteiginleika eða blett á fleti. Brúnarauf tekur brún. {{key:Esc}} hættir við val. **Snúa normal-stefnu** snýr planinu við (í hvora átt skissa á því snýr).

Í þessari útgáfu svarar rauf sem þarf brún eða strokkflöt (Snertandi strokk og brúnaraufirnar) „ekki byggt enn“: notaðu punkta eða ás í staðinn.

## Teikna skissu á plan

Veldu planið (í sögunni eða með því að smella á ferninginn í sýninni) og veldu {{ui:Sketch}}, eða **Teikna skissu á það** í spjaldi þess. Skissan fylgir planinu: breyttu fjarlægð planssins og skissan, og allir eiginleikar á henni, færast líka.

## Ásar og punktar

- {{ui:Axis}}: gegnum tvo punkta, ás strokks eða keilu, þar sem tvö plön mætast, eftir beinni brún (eða ás hringlaga brúnar), eða hornrétt á flöt gegnum punkt.
- {{ui:Point}}: í hnitum, á hornpunkti eða skissupunkti, eða í miðju hringlaga brúnar, auk punkta „á milli hluta“:

| Gerð punkts | Viðmiðanir |
|---|---|
| Miðja brúnar (eða milli tveggja punkta) | **Brún** (mitt á lengd hennar, einnig fyrir boga og ferla), eða án brúnar **Punktur 1** og **Punktur 2** |
| Þar sem brún eða ás mætir fleti eða plani | **Brún** (bein eða bogin) eða ás, og **Mætir plani** (plan eða flatur flötur) eða **Eða flötur** (flatur flötur eða strokkur). Hringur sker plan tvisvar og lína fer í gegnum strokk tvisvar: **Hinn skurðpunkturinn** tekur þann síðari |
| Þar sem þrjú plön mætast | **Fyrsta**, **Annað** og **Þriðja plan** (plön eða flatir fletir) |

Hver þeirra mistekst með skýru skilaboðum þegar viðmiðanir passa ekki: lína samsíða plani, lína sem hittir ekki strokkinn, brún sem nær ekki planinu, þrjú plön sem mætast ekki í einum punkti, eða punktur á línu sem hann ætti að festa plan með.

Notaðu þá í öðrum eiginleikum:

| Hvar | Hvernig |
|---|---|
| Snúningur | **Ás**: veldu ásseiginleikann af listanum (hann verður að liggja í plani skissunnar) |
| Hringlaga mynstur | **Ás**: ásseiginleikinn |
| Línulegt mynstur | **Stefna**: ásseiginleiki, eða plan (normal þess) |
| Spegling | **Speglunarplan**: viðmiðunarplan |
| Útdráttur | **Endi**: Upp að fleti eða plani, Upp að hornpunkti (punkteiginleiki). Ekki byggt enn í þessari útgáfu (það þarf nákvæman kjarna) |
| Halli | **Hlutlaust plan** |

## Þegar viðmiðun er horfin

Plan sem gert er úr fleti sem er ekki lengur til mistekst með skilaboðum sem nefna hann, til dæmis „Flöturinn sem það liggur á er horfinn úr Extrude1.“ Því er aldrei varpað yfir á annan flöt. Skissur og eiginleikar á því eru merktir „ekki byggt“ þar til þú velur nýja viðmiðun. Restin af hlutanum er eins og hún var.

:::note
Þessi útgáfa byggir alla hluti með möskvakjarnanum, sem býr til plön, ása og punkta úr grunnplönum, flötum fleti sem Extrude eða Revolve býr til, skissupunktum, hnitum og öðrum viðmiðunareiginleikum. Allt sem þarf brún, endapunkt brúnar eða bogaðan flöt þarf nákvæman kjarna: ekki byggt enn í þessari útgáfu („Það notar flöt eða brún hlutans, sem aðeins nákvæmur kjarni getur fundið: ekki byggt enn í þessari útgáfu.“).
:::
