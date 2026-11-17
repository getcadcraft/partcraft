---
title: Segulrannsókn á skissu
summary: Breyttu lokuðum útlínum skissanna þinna í flatt segullíkan (járn, seglar, spólur), sjáðu sviðið og lestu kraftinn og togið á hlut.
keywords: segull, segulmagnaður, segulstöðufræði, svið, flæðisþéttleiki, kraftur, tog, spóla, ok, járn, B-H-ferill, varanlegur segull, stýribúnaður, mótor, segulspóla, maxwell
from: 604efc3b
---

Notaðu {{ui:Meira}} í Eiginleikastikunni › {{ui:Segulrannsókn skissa…}} á hluta sem hefur skissur. Hvert lokað form í skissunum sem þú hakar við er eitt svæði í flatri líkani; rannsóknin reiknar út segulsviðið B, kraftinn og togið á hlut sem þú velur.

## Skref

1. Teiknaðu hlutina sem lokuð form í skissum: járnok, segul, spólu. Hlutir sem snertast deila brún, svo settu þá í mismunandi skissur; hlutir sem standa aðskildir, eða sitja hver inni í öðrum (gluggi í oki), mega deila einni. Hafðu skissurnar á sama fleti.
2. Opnaðu rannsóknina og hakaðu við skissurnar sem nota skal. Sérhver lokuð útlína fær röð, númeraða. Segðu hvað hún er: {{ui:Loft}}, {{ui:Járn}} (leiðni, eða B–H-ferill skrifaður sem pör af B í teslum og H í A/m), {{ui:Varanlegur segull}} (Br í teslum, stefna hans sem horn frá x-ás skissunnar, og afturkræf leiðni hans) eða {{ui:Spóla}} (heildarstraumur í gegnum útlínu hennar, vindingar sinnum amper; formerkið segir í hvora átt hún rennur).
3. Hakaðu við {{ui:Kraftur og tog á þennan hlut}} fyrir hlutina sem þú vilt fá þau á. Gefðu dýpt hlutans út úr skissunni.
4. Veldu möskvann og loftið umhverfis líkanið, og ýttu síðan á {{ui:Keyra}}.

## Það sem þú átt að sjá

- Flæðisþéttleikann |B| yfir líkanið, dökkblátt lágt til rautt hátt, með númeruðum útlínum.
- Sterkasta sviðið og hvar það er, fjölda þríhyrninga, og fyrir hvern hlut sem þú hakaðir við kraftinn eftir x og y og togið um miðju hans, fyrir dýptina sem þú gafst.
- {{ui:Vista niðurstöður (CSV)}} skrifar tölurnar.

## Gott að vita

- Þetta er flatt, stöðugt líkan: allt er per metra dýpt, án straumhvirfla og án hysteresis, og segull er bein afturkræf lína (hann er ekki hægt að afsegulmagna).
- Líkanið situr í kassa af lofti sem jaðarinn er veggur. Berðu saman tvær stærðir loftkassans, og Normal- og Fine-möskvana: kraftur sem tekinn er úr sviðinu umhverfis hlut er aðeins jafn góður og möskvinn þar.
- Járn með aðeins leiðni mettast aldrei. Þegar sviðið fer yfir 2 T setur rannsóknin ⚠ í Vandamálalistann: gefðu járninu B–H-feril. Tölurnar í nýrri röð eru dæmi (járn μr 2000, segull 1.2 T), ekki gögn úr efnisblaði.
- Hlutur þarf rými umhverfis sig til að taka kraftinn: ef annar hlutur er of nálægt, segir rannsóknin það.
- Hjálpartæki við teikningu, ekki verkfræðileg samþykkt.

## Næst

- [Segulsvið í 2-D (kennsla)](topic:magnetic-fields-2d)
