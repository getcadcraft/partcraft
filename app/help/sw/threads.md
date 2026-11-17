---
title: Nyuzi kwenye shafti na matundu, zilizochorwa au zilizoundwa
summary: Weka uzi wa ISO metric au trapezoidal kwenye uso wowote wa duara, shafti au tundu. Iweke ya kipodozi kwa michoro, au unda uzi halisi wa helikali kwa uchapishaji wa 3D, pamoja na nafasi ili sehemu zilizochapishwa zitoshee.
keywords: uzi, nyuzi, uzi ulioundwa, modelled thread, modeled thread, helikali, helix, skrubu, bolti, nati, shafti, tundu, uzi wa nje, uzi wa ndani, uzi wa kipodozi, uzi wa metric, trapezoidal, acme, skrubu ya kuongoza, Tr16x4, M10, uchapishaji wa 3D, print, nafasi, kutoshea, mkono wa kushoto, tapped
from: 4f6401cc
---

{{ui:Thread}} inaweka uzi kwenye nyuso za duara: nje ya shafti (uzi wa nje) au ndani ya tundu (uzi wa ndani). PartCraft inatambua ni ipi kutoka kwa uso.

Uzi ni **wa kipodozi** mwanzoni: uso unabaki wazi, mwonekano unachora uzi kama duara zenye mistari-mistari, na karatasi ya michoro inaandika, kama "M10×1.5 - 6g, uzi wa urefu 20". Tiki **Imeundwa** ili kukata uzi halisi wa helikali kwenye sehemu, kwa uchapishaji wa 3D au modeli inayopaswa kuonekana sahihi.

## Weka uzi kwenye shafti au tundu

1. Jenga shafti au tundu kwa ukubwa wa uzi: shafti ya Ø10 kwa bolti ya M10, au tundu la Ø8.5 (kipenyo cha kuchimba kwa bomba) kwa nati ya M10.
2. Bofya uso wa duara, kisha uchague {{ui:More}} › {{ui:Thread}}. Bila uso wa duara uliochaguliwa, PartCraft inakuomba ubofye nyuso, kisha {{ui:Done}}.
3. Kwenye paneli ya kulia, kagua **Size**. **Lingana na uso** inachagua ukubwa yenyewe: kwa shafti, ukubwa ambao kipenyo chake kikuu ni cha shafti; kwa tundu, ukubwa ambao kipenyo chake kidogo kinalingana nalo.

Uzi unaanzia kwenye mwisho wazi wa uso, pale sehemu haiendelei kwenye mhimili: ncha huru ya shafti, mdomo wa tundu. **Anza upande mwingine** unageuza hilo.

## Mipangilio

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| **Umbo** | ISO metric (60°), M1.6 hadi M64 coarse; trapezoidal (Tr, 30°), Tr8×1.5 hadi Tr60×9 | ISO metric |
| **Size** | Lingana na uso, au ukubwa mmoja kutoka orodha | Lingana na uso |
| **Uso mzima** | Ondoa tiki ili kutoa **Urefu (mm)**, unaopimwa kutoka mwanzo | Imetiwa tiki |
| **Anza upande mwingine** | Uzi unaendelea kutoka upande wa pili wa uso | Imezimwa |
| **Mkono** | Mkono wa kulia au mkono wa kushoto | Mkono wa kulia |
| **Imeundwa** | Kata uzi halisi wa helikali | Imezimwa |
| **Nafasi (mm)** | Inaonekana Imeundwa inapotiwa tiki: uzi wa shafti ni mdogo kiasi gani, na wa tundu ni mkubwa kiasi gani, pande zote | 0.1 |

Ukubwa usiolingana na uso unajengwa hata hivyo, umekatwa kulingana na uso, na paneli inasema hivyo, kwa mfano "Shafti ya Ø12 mm si Ø10 mm ya M10". Nyuso kadhaa zinaweza kushiriki kipengele kimoja cha Thread; kwa **Lingana na uso**, kila moja inapata ukubwa wake.

## Nyuzi zilizoundwa kwa uchapishaji wa 3D

Uzi uliouundwa unafuata wasifu wa msingi wa kawaida: ISO 68-1 kwa nyuzi za metric (vilele na mizizi bapa, pande za 60°), ISO 2901 kwa za trapezoidal (pande za 30°). **Nafasi** inasogeza wasifu wote ndani (shafti) au nje (tundu) ili sehemu zilizochapishwa ziunganike kwa kuzungushwa:

- **0.1 hadi 0.2 mm** inafaa printa nyingi. Chapisha bolti na nati ya majaribio kwanza.
- **0** ni wasifu wa kawaida, kwa sehemu zilizotengenezwa kwa mashine au kwa kukagua kutoshea.

Bolti na nati zenye nafasi ile ile hazigusani kamwe kwenye pande zao: pengo kati yao ni mara mbili ya nafasi, pande zote.

:::tip
Pitch nzuri zinachapishwa vibaya: M3 na ndogo zaidi, au pitch chini ya 0.5 mm, ziko karibu na kile pua ya 0.4 mm inachoweza kuchora. Modeli nyuzi kubwa zaidi, na tumia insert ya kuwekwa kwa joto au tundu la bomba kwa ndogo.
:::

Uzi uliouundwa ni sehemu ya kigumu: mauzo ya STL, 3MF na STEP yanaubeba, na Measure unaupima. Unafanya sehemu kuwa nzito kujengwa upya: uzi wa M10 wa urefu 20 ni takriban pembetatu 150,000.

## Mashimo yaliyopigwa bomba

Shimo la **Tapped (ISO metric)** lina swichi ya **Imeundwa** pia, pamoja na **Nafasi** ile ile. Tazama [Chimba mashimo na counterbore kwenye pointi za mchoro](topic:holes).

## Uzi usipojengwa

- "Uzi unawekwa kwenye uso wa duara (silinda): shafti au tundu." Uso uliochaguliwa ni bapa au umepinda kwa namna nyingine.
- "Hakuna ukubwa wa kawaida unaolingana na uso wa duara wa Ø0.6 mm: chagua ukubwa." Lingana na uso haukupata chochote ndani ya 12 % ya uso. Chagua **Size**, au badilisha uso.
- "Uso ambao uzi huu ulikuwa juu yake umepotea (…). Uchague tena." Badiliko la awali liliondoa uso. Bofya {{ui:Pick faces}} na ubofye uso tena.

:::note
Nyuzi za inchi (UNC, UNF), nyuzi za bomba, nyuzi za koni, mwisho wa kukimbia kwa uzi na mianzo ya uzi iliyokatwa pembe bado hazijajengwa. Kernel sahihi inaonyesha uzi uliouundwa kama wa kipodozi.
:::
