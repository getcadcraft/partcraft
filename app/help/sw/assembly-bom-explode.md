---
title: Orodha ya sehemu, michoro iliyotenganishwa na kusogeza sehemu
summary: Mpe sehemu za mkusanyiko nambari, maelezo na nyenzo, soma na pakua orodha ya vifaa, tengeneza michoro iliyotenganishwa kwa hatua au kiotomatiki, sogeza sehemu zisizounganishwa kwa mkono, weka mipaka ya viungio, na hamisha mkusanyiko mzima kama STL, 3MF au orodha ya vifaa.
keywords: bom, orodha ya vifaa, orodha ya sehemu, nambari ya sehemu, nyenzo, msongamano, csv, mchoro uliotenganishwa, tenganisha, kunja, mistari ya njia, sogeza sehemu, buruta, gizmo, sogeza, zungusha, mipaka ya viungio, hamisha mkusanyiko, hatua ya mkusanyiko, mchoro wa mkusanyiko, puto
from: ebc9f6f3
---

Zana hizi ziko kwenye paneli ya kulia ya mkusanyiko (ona [Jenga mkusanyiko kwa viungio](topic:build-assembly)).

## Sifa za sehemu

Chagua sehemu kwenye orodha ya kushoto. Chini ya **Sifa za sehemu** weka:

- **Nambari ya sehemu** (hadi herufi 40) na **Maelezo** (hadi 200).
- **Nyenzo**: nyenzo ya kawaida pamoja na msongamano wake, au **Custom density…** ili kuandika msongamano kwa g/cm³. Paneli kisha inaonyesha wingi wa sehemu.

Sifa ni za sehemu, kwa hiyo kila nakala yake inazishiriki. Zimehifadhiwa kwenye faili la mkusanyiko.

## Orodha ya vifaa

Bila kitu kilichochaguliwa ({{key:Esc}}), paneli inaonyesha **Orodha ya vifaa**: safu moja kwa kila sehemu, ikiwa na nambari yake ya kipengee, kiasi (nakala ngapi), nambari ya sehemu, jina, nyenzo na wingi. Nambari za vipengee zinafuata mpangilio ambao sehemu zinaonekana kwa mara ya kwanza kwenye orodha. Wingi hutumia ujazo wa kila sehemu (wa kigumu chenye pembe ambacho kernel ya mesh inajenga, kwa hiyo ni kidogo kidogo kwenye sehemu za duara) na nyenzo yake. Sehemu isiyo na nyenzo haina wingi, na kwa hiyo hakuna jumla.

{{ui:Pakua CSV}} inahifadhi orodha kama faili la CSV (pia **Hamisha nje › Orodha ya vifaa (CSV)**). Inafunguka kwenye programu yoyote ya jedwali. Maandishi yanayoanza na = au + yanapata apostrofi mbele ili jedwali lisiyatekeleze kama fomula.

## Michoro iliyotenganishwa

Mchoro uliotenganishwa huvuta sehemu mbali na nyingine kwa ajili ya picha. Haubadilishi viungio wala mahali sehemu zilipo kweli: kuhifadhi, ukaguzi wa migongano na uhamishaji hutumia nafasi halisi.

1. Bila kitu kilichochaguliwa, chagua {{ui:Mwonekano mpya}} chini ya **Michoro iliyotenganishwa**.
2. Chini ya **Ongeza hatua**, weka alama kwenye sehemu ambazo hatua hiyo inazisogeza, chagua **Mwelekeo** (+X … −Z, kawaida ya uso unaoubofya, au **Buruta mshale kwenye mwonekano**) na **Umbali**, kisha {{ui:Ongeza hatua}}. Ukichagua **Buruta**, buruta mshale kisha uachie: hatua inachukua mwelekeo na umbali ulioburuta.
3. Ongeza hatua zaidi. Zinacheza moja baada ya nyingine.
4. Buruta kitelezi kati ya **Imeunganishwa** na **Imetenganishwa** ili kuhuisha mwonekano. Mistari ya nukta-nukta inatoka kwenye nafasi ya kupumzika ya kila sehemu hadi mahali ilipo sasa.

{{ui:Otomatiki (radial)}} inasogeza kila sehemu isipokuwa ile iliyofungwa chini mbali na katikati ya mkusanyiko. {{ui:Otomatiki (viungio)}} inasogeza kila sehemu iliyounganishwa (pamoja na kila kitu kilichounganishwa chini yake) nje kwenye kawaida ya uso wa kiungio chake. Unaweza kuweka mionekano kadhaa yenye majina. Chagua moja kwenye **Mwonekano**, au **Imeunganishwa** ili kurudisha sehemu mahali pake. Mionekano imehifadhiwa kwenye faili la mkusanyiko.

## Sogeza sehemu kwa mkono

Sehemu isiyo na kiungio chochote kinachoifunga chini tu ndiyo inayosogezwa kwa mkono (sehemu iliyofungwa chini haisogei; viungio huweka nyingine). Ichague, kisha chini ya **Sogeza kwa mkono**:

- Andika **ΔX, ΔY, ΔZ** kisha chagua {{ui:Move}}, au chagua mhimili na **Pembe** kisha {{ui:Turn}} (kuzunguka katikati ya sehemu).
- {{ui:Drag to move}} inaonyesha mishale kwenye sehemu: buruta mshale ili kusogea kwenye mhimili huo, au mraba ili kusogea kwenye ndege. {{ui:Drag to turn}} inaonyesha pete za kuizungusha. Kila buruta ni hatua moja ya kutendua. {{key:Esc}} inaficha mishale.

## Mipaka ya viungio

Chagua kiungio kinachosogea na, chini ya **Mipaka**, weka alama kwenye **Shikilia … kati ya mipaka** kwa thamani yoyote kati ya zake, kisha weka **Kiwango cha chini** na **Kiwango cha juu**. Kila thamani inashikiliwa ndani ya mipaka yake yenyewe, kitelezi chake kinafunika safu hiyo tu, na {{ui:Kagua mwendo kwa migongano}} inapita ndani ya mipaka hiyo tu. Kiungio cha silinda kinaweza kuweka mipaka ya pembe yake, ya kuhama kwake, au zote mbili. Kubadilisha aina ya kiungio kunaondoa mipaka ya thamani ambazo aina mpya haina.

## Hamisha mkusanyiko mzima

Kwenye mkusanyiko, menyu ya **Hamisha nje** inaandika mkusanyiko mzima na kila sehemu mahali ilipowekwa:

- **STEP AP242 / AP214** na **Mchoro (PDF)** bado hazijajengwa katika toleo hili: zinahitaji kernel sahihi, kwa hiyo zimefifishwa. Badala yake hamisha STEP ya kila sehemu (kigumu sahihi) kutoka kwenye sehemu yenyewe.
- **STL**: mesh moja ya sehemu zote. **3MF**: kila sehemu mara moja, ikiwekwa mara moja kwa kila nakala.
- **Orodha ya vifaa (CSV)**.

## Mipaka

- Mchoro wa mkusanyiko na STEP ya mkusanyiko bado hazijajengwa katika toleo hili (zinahitaji kernel sahihi). Michoro iliyotenganishwa ni kwa picha kwenye skrini.
