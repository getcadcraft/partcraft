---
title: Chuma cha karatasi: flensi na mchoro bapa
summary: Anza sehemu ya chuma cha karatasi kutoka mchoro wa awali (sahani bapa au wasifu uliopinda), weka unene, radius ya kupinda na K-factor mara moja, pinda flensi juu kutoka kingo zake pamoja na nafasi za kupunguza kupinda, kisha ikunjue bapa kama DXF kwa kukatwa.
keywords: mchoro bapa, kufunua, maendeleo, urefu ulioendelezwa, posho ya kupinda, mstari wa kupinda, dxf ya leza, kukata kwa leza, chuma cha karatasi, flensi ya msingi, flensi ya ukingo, flensi, kupinda, radius ya kupinda, k-factor, unene, kipimo cha unene, kupunguza, nafasi ya kupunguza kupinda, chaneli, mabano, kifuniko, karatasi iliyopinda
from: 144bd0f6
---

:::note
**Bado haijajengwa katika toleo hili.** Chuma cha karatasi kinahitaji kernel sahihi ya jiometria, ambayo toleo hili la PartCraft halina: linajenga kila sehemu kwa kernel ya matundu. [Kisichojengwa bado](topic:not-built-yet) kinasema cha kufanya badala yake. Ukurasa uliobaki unaeleza jinsi inavyofanya kazi kwa kernel sahihi.
:::

Sehemu za chuma cha karatasi huanza na **Flensi ya msingi**. Inaweka karatasi kwa sehemu nzima: **unene** wake, **radius ya ndani ya kupinda** na **K-factor**. Kila **Flensi ya ukingo** baada yake hupinda kwa namba hizo hizo, kwa hiyo sehemu inabaki karatasi moja inayoweza kukunjuliwa. Zote mbili zinahitaji **kernel sahihi** (angalia [Kernel ya matundu](topic:solid-kernels)).

## Anza na flensi ya msingi

1. Chora mchoro wa awali. Tumia **wasifu uliofungwa** kwa sahani bapa (mstatili, au muhtasari wowote uliofungwa wenye mashimo). Tumia **mnyororo mmoja wazi wa mistari** kwa karatasi iliyopinda, kama L, U au Z iliyochorwa kama mwonekano wa ukingo wa karatasi.
2. Chagua mchoro kwenye historia ya vipengele.
3. Fungua {{ui:More}} kwenye kikundi cha **Vipengele** na uchague {{ui:Base flange}}.

Kwenye paneli ya kulia:

- **Unene (mm)** ni kipimo cha karatasi.
- **Radius ya kupinda (mm)** ni radius ya ndani ya kila kupinda. 0 hutoa kona kali ya ndani; sehemu ya nje bado inageuka kwa radius ya unene mmoja.
- **K-factor** inasema safu ya upande wowote ilipo ndani ya karatasi, kutoka 0 (uso wa ndani) hadi 0.5 (katikati). Huamua karatasi ilivyo ndefu inapokunjuliwa bapa. 0.44 ndiyo chaguo-msingi; kiwanda chako au muuzaji wa nyenzo anaweza kukupa chako.
- **Kina (mm)** ni umbali ambao wasifu uliopinda unaenda nje ya ndege ya mchoro. Sahani haitilii maanani.
- **Unene nje ya mikunjo**: wasifu wazi ni uso mmoja wa karatasi. Kwa chaguo-msingi unene huenda ndani ya kupinda cha kwanza, kwa hiyo mistari uliyochora ndiyo nje ya chaneli. Weka tiki ili kuweka mistari ndani badala yake. Jibu ni lilelile kutoka upande wowote ulioanzia.

Kila kona ya mnyororo wazi inakuwa kupinda. Mstari mfupi mno kushikilia vipinda vyake unasema hivyo, pamoja na urefu unaohitaji.

## Pinda flensi ya ukingo

1. Bofya ukingo ulio sawa wa uso wa juu au wa chini wa karatasi (kingo ndefu, si nyembamba).
2. Chagua {{ui:More}} › {{ui:Edge flange}}. Ikiwa hakuna ukingo uliochaguliwa, PartCraft inasubiri ubofye mmoja; Esc inaghairi.

Flensi inapinda juu kutoka uso wa ukingo huo kuzunguka radius ya ndani ya karatasi, kisha inaenda sawa. Kwenye paneli:

- **Pembe (°)** ni umbali wa kupinda, kutoka 1 hadi 180. 90 ni flensi ya mraba.
- **Urefu (mm)** ni mguu ulionyoka baada ya kupinda.
- **Pinda upande mwingine** huipinda kutoka uso mwingine (chini badala ya juu).
- **Kiasi cha kupunguza mwanzoni** na **Kiasi cha kupunguza mwishoni** hufupisha flensi kutoka kila ncha ya ukingo.
- **Nafasi ya kupunguza kupinda**: pale mwisho mmoja unapopunguzwa, nafasi hukatwa kwenye karatasi kando yake ili kupinda kusirarue chuma pale. **Upana wa nafasi** huweka upana wake; kina chake ni radius ya kupinda pamoja na unene. Chagua **Hakuna** kuacha kona bila kukatwa.

Ili kubadilisha ukingo baadaye, bonyeza {{ui:Pick}} kwenye paneli kisha ubofye mwingine.

:::tip
Tumia vigezo kwa unene na radius (angalia [Vigezo na milinganyo](topic:parameters)) ili mabadiliko ya kipimo yasasishe kila flensi kwa mara moja.
:::

## Ikunjue bapa

Paneli zote mbili zinaishia na **Mchoro bapa**. Bonyeza {{ui:Lay flat}}:

- Onyesho la kukagua linaonyesha karatasi ikiwa imekunjuliwa, na mstari wa katikati wa kila kupinda ukiwa wa nukta.
- **Ukubwa** na **Eneo** ni vya kipande bapa.
- Kila kupinda kinaorodheshwa pamoja na mwelekeo wake (**juu** au **chini**, kama inavyoonekana kutoka upande wa mchoro wa flensi ya msingi), pembe na radius ya ndani.

Kila kupinda kinachukua urefu wa safu ya upande wowote kupitia humo, **posho ya kupinda**: pembe (kwa radiani) × (radius ya ndani + K-factor × unene). Kwa hiyo kupinda kwa 90° cha karatasi ya 2 mm chenye radius ya 2 mm na K-factor 0.44 huongeza 4.52 mm ya karatasi bapa.

Kwenye sahani bapa, mashimo, kata na nafasi za kupunguza kupinda huonekana kwenye bapa mahali zilipo kweli, ikiwa ni pamoja na mashimo kupitia flensi.

Ili kukata vingi, bonyeza {{ui:Nest on sheets…}} chini ya mchoro bapa: angalia [Panga sehemu bapa kwenye karatasi](topic:nest-flat-parts). Flensi ya msingi iliyopinda hupangwa kama mstatili mmoja: urefu wake ulioendelezwa × kina chake, pamoja na mstari wa kupinda kwa kila kona.

{{ui:Save DXF}} huhifadhi mchoro bapa kwa leza, mashine ya kupiga (punch) au kukata kwa maji, kwa milimita:

- kontua kwenye tabaka **OUTLINE**, kama mistari, arc na duara;
- mistari ya kupinda kwenye tabaka **BEND**, yenye nukta;
- dokezo kwa kila kupinda kwenye tabaka **BEND_NOTES**, kama "UP 90° R2".

Ukibadilisha chochote, bapa hutoweka; bonyeza {{ui:Lay flat}} tena kwa mpya.

:::note
Angalia K-factor pamoja na kiwanda chako kabla ya kukata: urefu wa bapa unategemea hiyo, na hutofautiana kulingana na nyenzo, unene na zana.
:::

## Ujumbe

- **Chuma cha karatasi kinahitaji flensi ya msingi kabla yake** — flensi ya ukingo iliongezwa kabla ya flensi yoyote ya msingi. Isogeze chini ya moja, au ongeza flensi ya msingi kwanza.
- **Flensi ya ukingo inahitaji ukingo ulio sawa** — flensi zinapinda kando ya mistari pekee; kingo zilizopinda haziwezi kuchukua moja bado.
- **Ukingo huo haupo kwenye uso wa unene wa karatasi** — ukingo ni wa uso usio juu wala chini ya karatasi (kwa mfano ukuta wa shimo). Chagua ukingo wa uso wa juu au wa chini.
- **Vipunguzo vinaacha ukingo bila chochote** — viwango vyote viwili vinaongeza hadi ukingo mzima au zaidi.
- **Flensi za ukingo kwenye flensi ya msingi iliyopinda haziwezi kukunjuliwa bado** — anza na sahani bapa na pinda kila kitu juu kwa flensi za ukingo, ambazo hukunjuliwa.
- **Kata na mashimo yaliyofanywa baada ya flensi ya msingi iliyopinda hayaonekani kwenye bapa lake bado** — bapa la wasifu uliopinda ni mstatili wake ulioendelezwa tu.
