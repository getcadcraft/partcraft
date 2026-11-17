---
title: Kuza umbo kutokana na mizigo (Generative)
summary: Chagua nyuso zinazoshikiliwa na zinazobebeshwa mzigo, maeneo ya kubaki na yale ya kubaki wazi, ujazo lengwa na vifaa, kisha tengeneza matokeo: umbo gumu zaidi lililopatikana kwa kila ujazo, likikaguliwa tena kama kigumu, likilinganishwa kwenye jedwali na kupakuliwa kama STL, STEP au sehemu mpya.
keywords: generative design, topology optimization, topology optimisation, SIMP, nyepesi, lattice, umbo hai, matokeo, linganisha, uzito, sehemu ya ujazo, preserve, keep-in, obstacle, keep-out, nafasi ya usanifu, ukubwa mdogo wa mwanachama, STL, uchapishaji wa 3D
from: 5b91fa8e
---

Nafasi ya kazi ya Generative huondoa nyenzo ambazo mizigo haihitaji. Unasema mahali sehemu inaposhikiliwa na kubebeshwa mzigo, kipi kinapaswa kubaki na kipi kinapaswa kubaki wazi; PartCraft hupata umbo gumu zaidi kwa kila ujazo lengwa (**topology optimisation**), huukagua tena kama kigumu chenye nyenzo halisi, na huonyesha matokeo kando kwa kando. Inafanya kazi kwenye nyuso zilizopewa majina ambazo mesh kernel hutoa kwa sehemu (angalia [The mesh kernel](topic:solid-kernels)).

Chagua **Generative** kwenye kisanduku cha **Workspace**. Sehemu yako haibadiliki; utafiti huhifadhiwa ndani ya faili ya sehemu.

## Weka utafiti

1. Bonyeza **New study** kwenye paneli ya kulia.
2. **Space**: *The part as it is* huondoa nyenzo kutoka kwenye sehemu yako; *A box around the part* hukuza umbo ndani ya kisanduku kikubwa kuliko sehemu kwa **Box margin**.
3. **Element size**: iache tupu kwa ukubwa wa kiotomatiki (takriban ujazo 8,000), au andika moja. Ukubwa mdogo hutoa maumbo mazuri zaidi na huchukua muda mrefu.
4. **Minimum member**: vipengele vyembamba kuliko takriban mara mbili ya hii havifanyiki. Tupu humaanisha nusu ya ujazo 1.5.
5. Weka alama kwenye **Target volumes** moja hadi sita (sehemu ya nafasi ya usanifu ambayo umbo linaruhusiwa kujaza) na **Materials** moja hadi nne. Kila ujazo huzalishwa mara moja; kila nyenzo hukaguliwa kwenye umbo hilo (umbo gumu zaidi halitegemei nyenzo, lakini uzito wake, msongo na kipengele cha usalama hutegemea).

## Malengo

- {{ui:Fixed}}: bonyeza nyuso zinazoshikiliwa. **Frictionless face** kutoka orodha ya **Add** ya paneli hushikilia uso kwa kuvuka tu yenyewe (itumie kwa ndege za ulinganifu).
- {{ui:Force}}: bonyeza nyuso zinazobebeshwa mzigo, kisha andika nguvu jumla na uchague mwelekeo wake kwenye paneli. **Pressure** iko kwenye orodha ya **Add**.
- {{ui:Preserve}}: bonyeza nyuso ambazo mazingira yake lazima yabaki kigumu, kisha weka kina chake (**Keep solid within**) — kwa mfano kuzunguka matundu ya bolti. Nyuso ulizoshikilia au kubebeshea mzigo daima hubakizwa.
- {{ui:Obstacle}}: bonyeza nyuso ambazo mazingira yake lazima yabaki tupu, kisha weka umbali wake (**Keep empty within**) — nafasi ya shimoni au chombo.

Bonyeza **Done picking** au {{key:Esc}} baada ya kubofya nyuso. Rangi ya kijani na nyekundu huonyesha maeneo.

## Tengeneza na linganisha

Bonyeza {{ui:Generate}}. Paneli inaonyesha maendeleo na muda uliobaki; **Stop** huighairi. Kila matokeo huonekana kwenye jedwali la **Outcomes**: ujazo lengwa, nyenzo, **mass** (uzito), **largest stress** (msongo mkubwa zaidi), **largest displacement** (mwendo mkubwa zaidi) na **safety factor** (mavuno ÷ msongo), vyote kutokana na kutatua tena umbo lililokamilika kama ujazo mgumu kwa nyenzo halisi.

Chagua matokeo ili kuyaona kwenye mwonekano (sehemu imefichwa; weka alama kwenye **Show the part through it** kuona vyote viwili). Chini ya jedwali: idadi ya marudio iliyochukua na kama imetulia, ugumu wake kama kigumu dhidi ya takwimu ya kiboreshaji chenyewe, na uso wake.

## Tumia matokeo

- **STL**: wavu wa pembetatu uliofungwa, tayari kwa uchapishaji wa 3D.
- **STEP (faceted)**: uso uleule kama kigumu cha STEP kilichotengenezwa kwa nyuso tambarare.
- **New part file**: faili ya sehemu ya PartCraft ambayo kipengele chake kimoja ni matokeo kama kigumu kilichoingizwa. Ifungue ili kuchora juu yake, kukata matundu au kukagua kwenye Simulation. Ina nyuso nyingi tambarare (maelfu), si umbo linaloweza kuhaririwa.
- **Add to this part** huunganisha matokeo kwenye sehemu; inawashwa kwa muundo wa nafasi ya kisanduku pekee (kwa sehemu yenyewe kama nafasi, matokeo yanakaa ndani ya sehemu).

**New part file** na **Add to this part** bado hazijajengwa katika toleo hili: matokeo huwa kigumu kilichoingizwa, jambo linalohitaji kernel sahihi. Upakuaji wa STL na STEP (faceted) unafanya kazi.

## Kiasi gani cha kuamini

- Inaboresha **ugumu** kwa ujazo uliopewa. Hakuna mipaka ya msongo wala kanuni za utengenezaji (mikunjo ya juu, mwelekeo wa kusaga, ukubwa wa chini wa tundu) bado: kagua matokeo uliyochagua kwenye [Simulation](topic:simulation) na urekebishe.
- Vipengele vembamba vya seli moja au mbili upana ni makadirio: tumia ukubwa mdogo wa kipengele kwa sehemu nyembamba.
- Mbinu ni SIMP yenye kichujio cha msongamano, makadirio ya kizingiti na masasisho ya vigezo vya uboreshaji; msongo na mkengeuko vinavyoripotiwa ni vya matokeo kama ujazo, ambayo ni ya kweli lakini ni mbaya kidogo kwenye pembe kali.

## Vinavyohusiana

- [Kagua msongo na mkengeuko (Simulation)](topic:simulation)
- [Hamisha kwa uchapishaji, STEP na DXF](topic:export-files)
- [Kisichojengwa bado](topic:not-built-yet)
