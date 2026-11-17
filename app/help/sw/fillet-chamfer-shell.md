---
title: Zungusha, kata kwa pembe na tupu kwa Fillet, Chamfer na Shell
summary: Chagua kingo kisha ongeza fillet za radius ya kudumu au inayobadilika na chamfer za umbali sawa, umbali mbili au umbali na pembe; tupu sehemu kwa Shell kwa kuchagua nyuso za kufungua; badilisha kingo au nyuso ambazo kipengele kinatumia, na urekebishe hitilafu za kawaida.
keywords: fillet, zungusha, changanya, chamfer, kata kwa pembe, shell, tupu, unene wa ukuta, kingo, nyuso, chagua kingo, shift bofya, uso wazi, kernel sahihi, kernel ya matundu, bado haijajengwa
from: e41c1c12
---

:::note
**Katika toleo hili** PartCraft hujenga fillet na chamfer kwa kernel ya matundu, kwenye **kingo zilizonyooka kati ya nyuso mbili bapa** pekee: kingo za sanduku na kingo zilizonyooka za tolea na kata, pembe za nje au za ndani (pembe ya ndani hupata nyenzo iliyoongezwa). Kingo zilizozungushwa kama ukingo wa tundu, na radius inayobadilika kando ya ukingo, bado hazijajengwa. Pale kingo mbili zilizozungushwa zinapokutana kwenye kona, zungusho hukatwa (hukutana kwenye mpasuko mkali), si kuchanganywa. **Shell** nayo inafanya kazi, imejengwa na kernel ya matundu: inafungua nyuso bapa pekee, shell zenye unene tofauti wa ukuta bado hazijajengwa, na ni polepole kwenye sehemu zenye nyuso nyingi za duara. Tazama [Bado hakijajengwa](topic:not-built-yet).
:::

{{ui:Fillet}} huzungusha kingo, {{ui:Chamfer}} huzikata kwa pembe, na {{ui:Shell}} huifanya sehemu kuwa tupu. Zote tatu hufanya kazi kwenye kingo na nyuso za kigumu na hujengwa na kernel ya matundu. Zungusho zao zina facet kama nyuso zote za duara (**Mikunjo** huweka ulaini wake); nyuso za duara ni silinda unazoweza kuchagua na kupima (tazama [Kernel ya matundu](topic:solid-kernels)).

## Zungusha au kata kingo

### Chagua kingo kwanza

1. Bofya ukingo wa sehemu. Ukingo mzima unaangaziwa, na paneli ya kulia inasema **Ukingo**: aina yake (Nyoofu (Straight), Duara au arc, au Mkunjo (Curve)), urefu, na nyuso unazokaa kati yake.
2. Ili kuongeza kingo zaidi, {{key:Shift}}+bofya. Kila moja inawekwa alama; {{key:Shift}}+bofya ukingo uliowekwa alama ili kuuondoa. Kichwa cha paneli kinahesabu ("kingo 4"), na upau wa hali unasema "kingo 4 zimechaguliwa. Fillet au Chamfer zinazungusha; Shift+bofya huchagua zaidi, Esc hufuta."
3. Chagua {{ui:Fillet}} au {{ui:Chamfer}} kwenye upau wa zana, au vitufe hivyo hivyo kwenye paneli ya kulia.

Kipengele kinaongezwa na kingo zote zilizochaguliwa: zungusho ya 2 mm, au chamfer ya 1 mm. Upau wa hali unasema, kwa mfano, "Fillet1 imeongezwa (kingo 4). Badilisha ukubwa wake upande wa kulia; Chagua kingo hubadilisha zipi."

### Au ongeza kipengele kwanza

1. Bila kitu kilichochaguliwa, chagua {{ui:Fillet}} au {{ui:Chamfer}}.
2. PartCraft huingia kwenye uchaguzi: kichwa cha paneli ya kulia kinasema "Fillet1: inachagua", sehemu inaonyeshwa kama ilivyokuwa kabla ya fillet (paneli inasema hivyo), na upau wa zana unaonyesha {{ui:Imekamilika}}.
3. Bofya kila ukingo ili kuuongeza; bofya tena ili kuuondoa. Upau wa hali unahesabu.
4. Chagua {{ui:Imekamilika}} (au {{ui:Imekamilika kuchagua}} kwenye paneli), au bonyeza {{key:Esc}} au {{key:Enter}}.

### Mipangilio

| Mpangilio | Fillet | Chamfer |
|---|---|---|
| Ukubwa | **Radius (mm)**, chaguo-msingi 2 | **Umbali (mm)** nyuma ya ukingo kwenye nyuso zote mbili, chaguo-msingi 1 |
| **Kingo** | Ngapi | Ngapi |

Orodha iliyo chini inataja kila ukingo kwa nyuso mbili unazounganisha, kama "Ukingo 1: Extrude1 uso wa mwisho × Extrude1 upande". **Ondoa** huondoa moja. {{ui:Chagua kingo}} hurudisha kwenye uchaguzi. Kubofya mara mbili kipengele kwenye historia hufanya hivyo hivyo.

Kingo zinakumbukwa kwa nyuso mbili zinazoziunganisha, kwa hiyo zinabaki kwenye ukingo sahihi unapobadilisha kipimo kilicho juu yake kwenye historia.

### Fillet zinazobadilika na aina za chamfer

- **Radius inayobadilika** (fillet): bado haijajengwa katika toleo hili ("Fillet yenye radius inayobadilika kando ya ukingo: bado haijajengwa (inahitaji kernel sahihi). Weka radius moja."). Kwa kernel sahihi: weka alama na uweke **Radius ya mwisho (mm)**. Radius hubadilika kwa mstari kutoka **Radius** kwenye ncha moja ya kila ukingo hadi **Radius ya mwisho** kwenye nyingine; **Badilisha ncha** huzigeuza.
- **Aina** (chamfer): **Umbali sawa**, **Umbali mbili** (**Umbali wa pili** kwenye uso mwingine), au **Umbali na pembe** (umbali kwenye uso mmoja, na mteremko wa **Pembe (°)** kwa uso huo). **Geuza pande** huweka umbali wa kwanza kwenye uso mwingine.

## Tupu sehemu (Shell)

1. Bofya uso bapa wa kuacha wazi, kwa mfano juu ya sanduku. Au {{key:Shift}}+bofya nyuso kadhaa.
2. Chagua {{ui:Shell}} kwenye upau wa zana, au {{ui:Shell, inafungua uso huu}} kwenye paneli ya uso.

Sehemu inakuwa ukuta wa 2 mm wenye nyuso zilizochaguliwa zikiwa wazi. Mipangilio:

| Mpangilio | Kinafanya nini | Chaguo-msingi |
|---|---|---|
| **Ukuta (mm)** | Unene wa ukuta | 2 |
| **Kuta zinakua nje (nyuso zinabaki ndani)** | Imewekwa alama: kuta zinaongezwa nje, kwa hiyo ndani unabaki na ukubwa wa sehemu | Imezimwa: kuta zinaenda ndani na nje unabaki na ukubwa wake |
| **Nyuso zilizo wazi** | Idadi ya nyuso zinazoondolewa | |

Ndani, kuta ni unene wa ukuta haswa: pembe za nje hubaki kali, pembe za ndani hutoka zimezungushwa (radius = ukuta), na tundu linalopitia sehemu hupata bomba la ukuta kuzunguka. Nje, kuta zinaongezwa nje ya uso wa awali, ambao unakuwa tupu, na kingo za nje hutoka zimezungushwa. Nyuso za ndani zimepewa majina kulingana na nyuso zinazozihamisha, kwa hiyo unaweza kuzichagua.

Ni nyuso bapa pekee zinazoweza kufunguliwa: ukichagua iliyopinda, inasema "Shell: katika toleo hili inafungua nyuso bapa pekee (kernel ya matundu huijenga)." Shell ni polepole kwenye sehemu zenye nyuso nyingi za duara (sekunde kadhaa kwa kila elfu ya pembetatu): tumia mpangilio wa **Mikunjo** mbaya zaidi unapobuni.

{{ui:Chagua nyuso}} hubadilisha nyuso zilizo wazi kwa njia ile ile kama kuchagua kingo. Orodha inataja kila moja, kwa mfano "Uso 1: Extrude1 uso wa mwisho". Shell bila nyuso zilizo wazi hairuhusiwi: "Chagua nyuso za kuondoa (wazi), kisha tupu."

## Mpangilio ni muhimu

Vipengele hujengwa kutoka juu hadi chini. Fillet kabla ya shell hutupwa pamoja na sehemu, kwa hiyo ndani nako kunapata pembe zilizozungushwa. Fillet baada ya shell huzungusha kingo ulizochagua tu. Sogeza vipengele kwa {{ui:Sogeza juu}} na {{ui:Sogeza chini}} (tazama [Badilisha sehemu kupitia historia yake](topic:edit-history)).

Mifumo na vioo haviwezi kunakili fillet, chamfer au shell: "Fillet1 hubadilisha kingo au kuta za mwili; haiwezi kunakiliwa. Nakili vipengele vinavyotengeneza vigumu (tolea, zungusha, matundu, uingizaji)." Tengeneza matundu au kata za mfumo kwanza, kisha fillet kingo zote za nakala kwa fillet moja.

## Inaposhindwa

| Ujumbe | Cha kufanya |
|---|---|
| "Zungusho ya mm 5 haitoshei hapa (ni kubwa mno kwa uso karibu na mojawapo ya kingo, au kingo zinakutana kwenye kona ambayo kernel haiwezi kuchanganya)." | Tumia radius ndogo, au zungusha kingo chache kwa wakati mmoja (vipengele kadhaa vya fillet, cha mwisho kikiwa kidogo zaidi) |
| "Ukingo unaozungushwa umepotea: ukingo kati ya Extrude1 na Cut2." | Badiliko la awali liliondoa ukingo huo. Chagua {{ui:Chagua kingo}}, ondoa ukingo mwekundu na uchague mpya |
| "Shell haikuweza kutengenezwa kwa unene huu (…)." | Ukuta ni mnene kuliko sehemu nyembamba ya modeli, au kuliko radius ya fillet. Fanya ukuta uwe mwembamba, au fillet ziwe kubwa kuliko ukuta |
| "Uso huo hauna jina ambalo historia inaweza kulifuata; chagua mwingine." | Chagua uso uliotengenezwa na kipengele (nyuso nyingi ni hivyo) |
| "Fillet: katika toleo hili ni kingo zilizonyooka kati ya nyuso mbili bapa pekee (kernel ya matundu huzijenga). Zungusha au ukate kingo zilizopinda kwenye mchoro." (pia Chamfer) | Kingo iliyochaguliwa ni ya duara, kama ukingo wa tundu, au iko kwenye uso uliopinda. Iondoe kwa {{ui:Chagua kingo}}, kisha zungusha au kata kona hiyo kwenye mchoro |
| "Fillet yenye radius inayobadilika kando ya ukingo: bado haijajengwa (inahitaji kernel sahihi). Weka radius moja." | Ondoa alama ya **Radius inayobadilika** |
| "Fillet kwa kernel ya matundu: pale kingo zilizozungushwa zinakutana zimekatwa, si kuchanganywa." (⚠ kwenye historia) | Onyo, si hitilafu: sehemu imejengwa. Kingo zilizochaguliwa zinakutana kwenye kona, na zungusho hukutana hapo kwenye mpasuko mkali. Fillet kingo chache, au kubali mpasuko huo |
| "Shell: katika toleo hili inafungua nyuso bapa pekee (kernel ya matundu huijenga)." | Uso wazi umepinda. Chagua {{ui:Chagua nyuso}} na uuondoe; fungua nyuso bapa pekee |

## Mipaka

Katika toleo hili fillet na chamfer hufanya kazi kwenye kingo zilizonyooka kati ya nyuso mbili bapa pekee, kwa radius moja, na zungusho zinazokutana kwenye kona hukatwa. Shell hufungua nyuso bapa pekee. Kwa kernel sahihi, fillet inayobadilika hubadilika kwa mstari kando ya kila ukingo (sheria moja kwa kila kipengele; hakuna radius iliyowekwa kwenye pointi kando yake). Fillet za nyuso, fillet kamili za duara na shell zenye unene tofauti wa kuta bado hazijajengwa.
