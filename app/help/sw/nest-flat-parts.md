---
title: Panga sehemu bapa kwenye karatasi
summary: Weka sehemu bapa kwenye bamba au roli kwa taka ndogo kadiri PartCraft inavyoweza kupata, kamwe karibu zaidi ya nafasi unayoweka, kisha hifadhi mpangilio kama DXF kwa laser, plasma, waterjet au router.
keywords: kupanga, panga, karatasi, bamba, roli, laser, plasma, waterjet, router, kukata, mavuno, matumizi ya nyenzo, chakavu, taka, nafasi, kerf, mwelekeo wa nyuzi, mwelekeo wa kuviringisha, dxf, muundo bapa, mistari ya nje
from: 8dcce1a6
---

**Kupanga** huweka sehemu nyingi bapa kwenye karatasi ili nyenzo kidogo iwezekanavyo ibaki. PartCraft huweka sehemu moja moja, kila moja mahali ambapo hufupisha zaidi urefu uliotumika wa karatasi, hujaribu mpangilio kadhaa na kugeuza kwa sekunde chache, kisha huweka bora zaidi. Sehemu zinaweza kukaa ndani ya mashimo ya kila moja na ndani ya tundu la L au U.

## Fungua

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} hufungua kwa muundo bapa wa sehemu, au — katika mkusanyiko — kwa muundo bapa wa kila sehemu ya chuma-bamba, kwa idadi ya nakala zote.
- Kwenye sehemu ya chuma-bamba, {{ui:Lay flat}} kisha {{ui:Nest on sheets…}} chini ya muundo bapa.
- {{ui:Add outlines from a DXF…}} huongeza kila mtaro uliofungwa katika faili la DXF kama sehemu: mchoro kutoka CadCraft uliohifadhiwa kama DXF, au faili kutoka programu ya mashine yako ya kukatia. Mtaro ndani ya mwingine ni shimo ndani yake. Mistari na matao yanayounganishwa mwisho kwa mwisho huhesabiwa kama mtaro mmoja. Faili zenye vipimo kwa inchi, sentimita au mita hubadilishwa kuwa milimita.

:::note
Kutandaza chuma-bamba kunahitaji kernel sahihi ya jiometri (angalia [Chuma-bamba](topic:sheet-metal)). Mistari ya nje kutoka faili la DXF hufanya kazi kila wakati.
:::

## Weka mipangilio

Kwa kila sehemu toa **idadi** unayohitaji na **mwelekeo wa nyuzi** wake: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} kwa chuma kilichosuguliwa au kuviringishwa kinachopaswa kwenda upande mmoja, au {{ui:Across the sheet}}.

Chini ya **Karatasi**:

- **Hisa**: {{ui:Plates}} za urefu na upana fulani (na ngapi unazo; 0 = nyingi kadiri inavyohitajika), au {{ui:A roll}} ya upana fulani, ndefu kadiri inavyohitajika.
- **Pambizo ya ukingo** huachwa wazi kwenye kila ukingo wa karatasi (kwa klampu, au ukingo usio sawa).
- **Nafasi kati ya sehemu** ni umbali mdogo kabisa kati ya mistari miwili ya kukata: angalau upana wa kukata wa mashine yako (kerf), pamoja na kile ambacho nyenzo inahitaji.
- **Mizunguko**: pembe ambazo sehemu inaweza kugeuzwa, kila 90° kwa chaguo-msingi. Mizunguko michache huendesha haraka; mingi inaweza kutumia karatasi vizuri zaidi.
- **Sehemu zinaweza kugeuzwa** huruhusu sehemu kuwekwa juu chini. Iache imezimwa kwa chuma-bamba: muundo bapa uliowekwa juu chini hukunjwa upande mwingine.

Bonyeza {{ui:Nest}}. Onyesho la kukagua linaonyesha kila karatasi; takwimu zinaonyesha bamba ngapi zimetumika (au sehemu gani ya roli) na sehemu ya nyenzo ambayo sehemu zinachukua. Chochote kisichotoshea kinatajwa kwa jina.

## Hifadhi

{{ui:Save DXF}} huandika mpangilio kama DXF (R12, milimita), karatasi moja chini ya nyingine: mistari ya nje ya karatasi kwenye tabaka SHEET, sehemu kwenye PARTS (matao yakibaki matao), na jina la kila sehemu kwenye LABELS.

:::tip
Kuchanganya sehemu kadhaa kwa kawaida hupanga vizuri zaidi kuliko nakala nyingi za sehemu moja: sehemu ndogo hujaza mapengo kati ya kubwa.
:::

## Kata karatasi (G-code)

**Hamisha nje › Karatasi zilizopangwa hadi G-code** husoma DXF iliyopangwa (hii, au karatasi za nyongeza ya Cabinets katika CadCraft) na kutengeneza programu moja kwa kila karatasi kupitia post unayochagua: mashimo na kupunguzwa kwanza, kisha mistari ya nje, kila kata ikiwa nje ya sehemu kwa radius ya chombo, ikipitia karatasi na 1 mm zaidi, pamoja na vichupo ukiviomba. Orodha ya post ni post zilizojengwa ndani pamoja na za masomo yako ya Manufacture. Kagua kila programu kwenye simulator kabla ya kuiendesha: kuchimba na mifuko hazifanywi.

## Angalia

PartCraft huangalia kila mpangilio tena kwenye maumbo halisi (si gridi iliyotumika kutafuta): hakuna sehemu mbili zilizo karibu zaidi ya nafasi, hakuna kitu kwenye pambizo. Haipangi kata: mistari ya kuingia (lead-ins), mpangilio wa kukata, kukata kingo zinazoshirikiwa mara moja na kuweka karatasi iliyobaki ni kazi ya programu ya mashine yako. Kagua DXF huko kabla ya kukata.
