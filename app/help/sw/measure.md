---
title: Pima umbali, pembe na uzito
summary: Bofya vitu viwili kwenye mwonekano kwa umbali wa chini kabisa, pembe na ΔX ΔY ΔZ; soma urefu wa kingo, kipenyo cha shimo, eneo la uso au viwianishi vya nukta; pata ujazo, uzito, kituo cha uzito na inertia ya sehemu au mkusanyiko.
keywords: pima, umbali, umbali wa chini kabisa, pembe, urefu, radius, kipenyo, eneo, viwianishi, delta, kagua, sifa za uzito, uzito, wingi, kituo cha uzito, kituo, inertia, moment of inertia, msongamano, nyenzo
from: 20bda0b7
---

**Pima** hufanya kazi kwenye modeli katika kila eneo la kazi (Design, Form, Simulation, Generative, Manufacture) na katika mkusanyiko. Iko kwenye menyu ya {{ui:Mionekano}} ya kikundi cha {{ui:Mwonekano}}, au bonyeza {{key:M}}. Kadi hufunguka juu kushoto ya mwonekano.

## Pima kitu kimoja

Bofya kipeo, kingo au uso. Kadi inaonyesha:

- **Nukta** (kipeo, katikati ya kingo au kituo cha duara): X, Y, Z yake.
- **Kingo**: moja kwa moja, duara au curve, na urefu wake; kwa duara pia radius, kipenyo na kituo.
- **Uso**: bapa, silinda, koni na kadhalika, na eneo lake; kawaida ya uso bapa; radius na kipenyo cha silinda (ukubwa wa shimo). Maeneo ni ya facets ambazo mesh kernel inajenga.
- **Mwili mzima**: shikilia {{key:Shift}} kisha bofya sehemu. Unapata ujazo wake, eneo, uzito na inertia (tazama hapa chini).

Kiashiria hushikamana na vipeo, katikati ya kingo na vituo vya duara ndani ya pikseli 10; nukta ndogo ya bluu huonyesha ushikamano kabla ya kubofya. Ili kuchagua kituo cha shimo, elekeza katikati ya shimo; ili kuchagua ukingo wake (duara), elekeza ukingoni.

## Pima kati ya vitu viwili

Bofya kitu cha pili. Kadi inaongeza:

- **Umbali wa chini kabisa** na nukta mbili zilizo karibu zaidi, zinazochorwa kwenye mwonekano na mstari kati yao.
- **ΔX, ΔY, ΔZ** kutoka nukta ya kwanza iliyo karibu zaidi hadi ya pili.
- **Pembe** kati ya nyuso mbili bapa (kati ya kawaida zao, 0–180°), kati ya kingo mbili zilizonyooka au mihimili (0–90°), au kati ya kingo na uso.
- **Pengo kati ya ndege** kwa nyuso mbili bapa sambamba, **Kituo hadi kituo** kwa duara mbili au mashimo, **Mhimili hadi mhimili** kwa mashimo au silinda mbili sambamba.

Bofya ya tatu huanza jozi mpya. {{key:Esc}} hufuta vichaguo; {{key:Esc}} tena (au {{ui:Funga}}) hufunga Pima. {{ui:Nakili}} huweka matokeo kwenye ubao wa kunakili kama maandishi yaliyotenganishwa na tabo, tayari kubandikwa kwenye lahajedwali.

### Usahihi wake

PartCraft hujenga sehemu kwa mesh kernel, kwa hivyo umbali hukokotolewa kwenye facets za mesh, na kadi inasema **takriban: kwa facets**: sahihi kwa nyuso bapa na kati ya vipeo, kidogo nje kwa nyuso zilizopinda. Mpangilio wa **Curves** mzuri zaidi huzileta karibu. Kupima kwa usahihi kwenye nyuso halisi kunahitaji exact kernel: bado haijajengwa katika toleo hili.

## Sifa za uzito

Chagua {{ui:Sifa za uzito}} kwenye kadi au kwenye menyu ya {{ui:Mionekano}}. Kwenye sehemu, chagua **Nyenzo** kwenye kadi (chuma, alumini, plastiki na nyingine, kwa msongamano wao wa kawaida). Kwenye mkusanyiko kila sehemu hutumia nyenzo iliyowekwa kwenye sifa zake (chagua sehemu, kisha **Nyenzo**), na matokeo ni kwa sehemu zote pamoja.

Kadi inaonyesha uzito, ujazo, eneo, kituo cha uzito, tensor ya inertia (Ixx, Iyy, Izz na bidhaa Ixy, Iyz, Ixz, kwa kg·mm², kuhusu kituo cha uzito kando ya mihimili ya dunia) na momenti kuu. Bila nyenzo inaonyesha vile vile kwa kila msongamano wa kitengo (mm⁵) na bila uzito.

Nambari ni sahihi kwa kiwili kilichotengenezwa na mesh kernel (nyuso zilizopinda kama facets), kwa hivyo sehemu ya duara hutoka kidogo chini, na kadi inasema hivyo. Misongamano ya nyenzo ni thamani za kawaida za vitabu; aloi au daraja halisi linaweza kutofautiana kwa asilimia chache.

## Mipaka

- Vipengele vinaweza kupata nukta iliyofichwa nyuma ya jiometri nyingine; hakikisha kadi inaonyesha ulichokusudia.
- Pima hufungwa unapofungua mchoro wa awali au karatasi ya mchoro, au unapobadilisha eneo la kazi.
