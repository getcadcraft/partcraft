---
title: Utatuzi wa matatizo
summary: Matatizo unayoweza kukutana nayo kwenye PartCraft, kutoka app kutoanza, vipengele kushindwa, michoro isiyotatuliwa, faili zisizofunguka na viungo vinavyotenda vibaya, pamoja na ujumbe unaouona na suluhisho.
keywords: tatizo, hitilafu, msaada, haifanyi kazi, inashindwa, kuanguka, tupu, webgl, webassembly, kernel, haijajengwa, kufafanuliwa kupita kiasi, wasifu wazi, haiwezi kufunguka, hakuna kinachotokea, mwelekeo mbaya, polepole
from: 7728542c
---

Kitu kikishindwa, soma **upau wa hali** chini kwanza: PartCraft inasema hapo kwa nini ilikataa au inatarajia nini ijayo. Kipengele kinachoshindwa pia kinaonyesha ujumbe wake juu ya paneli yake ya kulia na unapoelekeza safu yake kwenye historia.

## App haianzi

### "Kivinjari hiki hakiwezi kuonyesha 3D (WebGL imezimwa au haipo), kwa hiyo PartCraft haiwezi kuendeshwa hapa."

**Sababu:** kivinjari kina picha za 3D (WebGL) zimezimwa, zimezuiwa, au hazisaidiwi na dereva wa picha.

**Suluhisho:**

:::chromium
Fungua `chrome://settings/system` (au `edge://settings/system` kwenye Edge) na uwashe "Use graphics acceleration when available", kisha uanzishe upya kivinjari. Ikiwa tayari imewashwa, angalia `chrome://gpu` kwa hali ya WebGL, na usasishe dereva wa picha.
:::

:::firefox
Fungua `about:support` na uangalie Graphics, WebGL. Ikiwa imezuiwa, sasisha dereva wa picha. Kwenye `about:config`, `webgl.disabled` lazima iwe `false`.
:::

:::safari
WebGL daima imewashwa kwenye Safari ya sasa. Sasisha macOS (Safari inasasishwa nayo). Ikiwa bado inashindwa, jaribu Chrome au Firefox kwenye Mac hiyo hiyo ili kuondoa shaka ya vifaa vya picha.
:::

Desktop za mbali na mashine pepe fulani hazina WebGL. Jaribu kwenye kompyuta yenyewe.

### "Kernel ya kigumu haikupakia: …"

**Sababu:** kernel ya jiometri (programu ya WebAssembly) haikuweza kupakuliwa au kuanzishwa. Mara nyingi muunganisho ulikatika wakati app ikipakia, WebAssembly imezimwa na sera ya kampuni au mpangilio wa usalama wa kivinjari, au kivinjari ni cha zamani sana.

**Suluhisho:** pakia ukurasa upya ukiwa mtandaoni. Ikiendelea kushindwa, jaribu kivinjari kingine cha sasa. Kwenye Firefox, `javascript.options.wasm` kwenye `about:config` lazima iwe `true`. Nje ya mtandao, app na kernel yake vinapakia tu ikiwa upau wa app ulisema **Tayari nje ya mtandao** kabla ya kupoteza muunganisho (bonyeza {{ui:Save for offline}} ukiwa mtandaoni; tazama [Kufanya kazi nje ya mtandao](common:offline)).

### Kitufe cha nje ya mtandao kinasema "Imeshindwa kuhifadhi" au "Nje ya mtandao haipatikani"

**Imeshindwa kuhifadhi**: baadhi ya faili hayakupakuliwa. Bonyeza ujaribu tena ukiwa mtandaoni; muunganisho wa polepole au wa kulipiwa unaweza kuhitaji jaribio la pili. **Nje ya mtandao haipatikani**: dirisha hili la kivinjari haliwezi kuweka nakala ya nje ya mtandao (madirisha binafsi na kompyuta fulani zinazosimamiwa zinazuia). Tumia dirisha la kawaida, au weka kichupo wazi.

### PartCraft iko nje ya mtandao lakini imepitwa na wakati

Bonyeza **Tayari nje ya mtandao** ukiwa mtandaoni na uchague {{ui:Save again (get the newest version)}}.

### "Sweep: bado haijajengwa. Inahitaji kernel sahihi, …"

Ujumbe kamili ni "<Jina>: bado haijajengwa. Inahitaji kernel sahihi, ambayo toleo hili la PartCraft halina. Msaada › Kisichojengwa bado kinaeleza cha kufanya badala yake." Unauona unapochagua Sweep, Loft, Rib, flange ya karatasi ya chuma, kipengele cha uso, Unganisha, Hamisha mwili, Kuza mwili au Muundo wa njia, na kwa mambo mengine ambayo kernel sahihi pekee inaweza kuyajenga. Hakuna kibaya kwenye kivinjari chako wala sehemu yako: toleo hili la PartCraft linajenga kila sehemu kwa kernel ya matundu. Tazama [Kisichojengwa bado](topic:not-built-yet) kwa cha kufanya badala yake, na [Kernel ya matundu](topic:solid-kernels).

### "Inapakia kernel ya kigumu…" haiishi kamwe

Subiri kidogo kwenye muunganisho wa polepole: kernel na maktaba ya 3D zinapakuliwa mara ya kwanza. Kisha pakia upya. Ikiwa ukurasa wenyewe unaonyesha hitilafu, tazama hapo juu.

## Hakuna kinachotokea ninapobonyeza kitufe

- Vitufe havifanyi kazi wakati kielekezi kiko kwenye kisanduku ndani ya paneli. Bofya kwenye mwonekano wa 3D au bonyeza {{key:Esc}} baada ya kuandika (au {{key:Tab}} kutoka).
- Vitufe vya mishale na {{key:Plus}}/{{key:Minus}} vinageuza na kukuza mwonekano tu baada ya kubofya ndani ya mwonekano.
- Kisanduku cha mazungumzo kiko wazi: kijibu kwanza.
- Kwenye mchoro, {{key:F}} ni zana ya Fillet, si Fit. Tumia kitufe cha {{ui:Fit}}.

## Kitufe cha upau wa zana kimefifia

- Vitufe vya vipengele vinafifia wakati mchoro uko wazi. Funga mchoro kwanza.
- Zana za mchoro zinafanya kazi ndani ya mchoro pekee.
- {{ui:Undo}} na {{ui:Redo}} zinafifia pale kusiwe na cha kutendua au kurudia.
- {{ui:Assembly}} inahitaji sehemu yenye kigumu. {{ui:Joint}} inahitaji sehemu mbili kwenye mkusanyiko. {{ui:Edit part}} inahitaji sehemu iliyochaguliwa.
- {{ui:STEP AP242 (exact solid)}} na {{ui:STEP AP214 (exact solid)}} zimefifia kwenye mkusanyiko: hamisha kila sehemu. Programu nyingine inakataa faili sahihi: jaribu {{ui:STEP AP214 (exact solid)}}, kisha {{ui:STEP (faceted, mesh kernel)}}, na utuambie kupitia {{ui:Help}} › {{ui:Report a problem}}.
- {{ui:Sweep}}, {{ui:Loft}} na vipengele vingine vinavyohitaji kernel sahihi havififii: vinabaki vinabofyeka, vidokezo vyao vinaishia na "bado haijajengwa (inahitaji kernel sahihi)", na kubofya mojawapo kunasema hivyo kwenye upau wa hali. Tazama [Kisichojengwa bado](topic:not-built-yet).
- {{ui:Drawing}} inahitaji sehemu yenye kigumu, na inafifia wakati mchoro uko wazi.
- Vipengee vya {{ui:Export}} vimefifia kwenye mkusanyiko: mikusanyiko haiwezi kuhamishwa bado. Funga, au hariri sehemu, ili kuhamisha.

## Matatizo ya mchoro

### Mchoro hautaki kuongeza uhusiano

"Hakuna uhusiano unaolingana na uteuzi huu. Chagua kipengee kimoja au viwili (Shift+bofya inaongeza)." Uhusiano unahitaji uteuzi tofauti. Tazama [Uhusiano na vipimo vya mchoro](topic:sketch-relations) kwa kile kila kimoja kinachohitaji.

### "Juu ya kufafanuliwa: … haziwezi kutimizwa zote. Tendua, au futa moja kati yao."

**Sababu:** uhusiano au kipimo kipya kinapingana na vilivyopo tayari. Mchoro haukusogea.

**Suluhisho:** {{key:Mod+Z}}, au futa moja ya vipengee vyekundu kwenye orodha ya paneli ya kulia (chagua **Futa** kando yake).

### "Juu ya kufafanuliwa: … tayari imedokezwa. Ifute."

**Sababu:** uhusiano hauongezi chochote: wengine tayari wanaulazimisha (kwa mfano Parallel kwenye pande mbili za mstatili, au kipimo kilichokwisha kurekebishwa). Hakuna vipimo vinavyoendeshwa (driven) katika toleo hili.

**Suluhisho:** ifute. Kipengele kinajengwa hata hivyo, kwa onyo.

### "Vipengee hivyo haviwezi kupimwa pamoja."

Ulibofya, kwa mfano, pointi na duara. Pima hadi kwenye pointi ya katikati ya duara badala yake.

### "Fillet inahitaji kona ambapo mistari miwili hasa inakutana." / "Radius hiyo ni kubwa mno kwa mistari hii."

Bonyeza hasa kwenye pointi ya kona ya mistari miwili imara. Tumia radius ndogo kuliko mstari mfupi zaidi unaoruhusu.

### Jiometri inarudi nyuma ninapoiburuta

Buruta ingevunja uhusiano au kipimo, kwa hiyo PartCraft inairudisha. Ni jiometri ya bluu (chini ya kufafanuliwa) pekee ndiyo inayoweza kusogezwa.

### "Mchoro huu hauwezi kufunguka: Inahitaji Extrude2, ambayo inashindwa."

Mchoro uko kwenye uso wa kipengele ambacho hakijajengwa. Rekebisha kipengele hicho kwanza, au ondoa kizuizi chake (unsuppress), au sogeza mbele kwenye historia.

## Matatizo ya kipengele

| Ujumbe | Sababu | Suluhisho |
|---|---|---|
| "Tengeneza mchoro kwanza: chagua ndege, Sketch, chora wasifu uliofungwa, Exit." | Hakuna mchoro usiotumika wenye mikunjo, na hakuna uliochaguliwa | Chora mchoro, au chagua mchoro wa kutumia kwenye historia |
| "Mchoro hauna wasifu uliofungwa wa kutoa." (au "wa kuzungusha") | Hakuna kitanzi kilichofungwa cha mistari imara | Funga mapengo; rudisha mistari ya ujenzi kwa {{key:Q}} |
| "Wasifu uko wazi: ncha kwenye (x, y) haijaunganishwa na chochote." | Pengo kwenye pointi hiyo | Fungua mchoro, buruta ncha hadi kwenye jirani yake ili ijishikize |
| "Wasifu unagawanyika kwenye (x, y): zaidi ya ncha mbili zinakutana hapo." | Mistari mitatu au zaidi inakutana kwenye pointi moja | Futa mstari wa ziada, au ubadilishe kuwa wa ujenzi |
| "Kitanzi kilichofungwa kinahitaji pande tatu angalau au curve." | Mistari miwili inarudi na kurudi | Chora kitanzi upya |
| "Through all ni kwa kukata. Tumia kina kwa boss." | Boss imewekwa Through all | Weka End kuwa Blind au Mid-plane |
| "Hakuna cha kukata upande huo wa mchoro. Jaribu mwelekeo mwingine." | Kata inaelekea mbali na nyenzo | Weka tiki kwenye Reverse direction |
| "Bado hakuna cha kukata." / "Bado hakuna cha kuchimba." | Hakuna kigumu kabla ya kipengele hiki | Tengeneza boss kwanza, au sogeza kipengele chini |
| "Chora mstari wa katikati (mstari wa ujenzi) kwenye mchoro wa kuzungushia." | Kuzungusha bila mhimili | Ongeza centerline, au chagua mstari kwenye Axis |
| "Wasifu unavuka mhimili. Uweke upande mmoja wa centerline." | Wasifu uko pande zote mbili za mhimili | Chora upya nusu ya wasifu |
| "Weka pointi za mchoro mahali mashimo yanapokwenda (zana ya Point), kisha tengeneza shimo." | Hakuna pointi huru kwenye mchoro | Ongeza pointi kwa {{key:P}} |
| "Counterbore lazima iwe pana kuliko shimo." | Counterbore ⌀ si kubwa kuliko Diameter | Fanya counterbore ipane zaidi |
| "Counterbore lazima iwe ya kina kidogo kuliko shimo." | Counterbore ni ya kina kuliko shimo la kipofu | Ifanye ya kina kidogo, au shimo liwe la kina zaidi |
| "Chagua vipengele vya kunakili." | Muundo au kioo bila kitu kilichotiwa tiki | Weka tiki kwenye kipengele chini ya Features to copy (Vipengele vya kunakili) |
| "Extrude2 haina kigumu cha kunakili." | Kipengele kilichonakiliwa kimeshindwa au kimezimwa | Kirekebishe au kiwashe |
| "Inahitaji Sketch3, ambayo inashindwa." | Kipengele inachoitegemea hakijajengwa | Rekebisha kipengele kilichotajwa |
| "Uso inamokaa umepotea (Extrude1 haijajengwa)." | Uso wa mchoro haupo tena | Rekebisha kipengele hicho, au futa mchoro na uchore upya |
| "Hakuna kilichosalia cha sehemu baada ya hili." | Kata moja iliondoa nyenzo zote | Angalia ukubwa na mwelekeo wa kata |
| "Kernel ya kigumu haikuweza kujenga hili (…)." au "Kernel ya kigumu haikuweza kuunganisha hili na mwili." | Kernel imekataa jiometri | Tendua, au badilisha ukubwa kidogo; nyuso zinazogusana hasa zinaweza kusababisha hili |
| "Sweep: bado haijajengwa. Inahitaji kernel sahihi, ambayo toleo hili la PartCraft halina." (pia Loft, Rib na nyinginezo) | Kipengele kilichotengenezwa kwenye toleo la awali ambacho kernel sahihi pekee inaweza kujenga. Kinabaki kwenye historia na kinahifadhiwa tena bila kubadilika | Zuia au futa; tazama [Kisichojengwa bado](topic:not-built-yet) kwa cha kufanya badala yake |
| "Mviringo wa 5 mm haulingani hapa (…)." / "Chamfer ya 2 mm …" | Ukubwa ni mkubwa mno kwa uso karibu na kingo, au kona haiwezi kuchanganywa | Ukubwa mdogo, au kingo chache kwa kila kipengele |
| "Fillet: katika toleo hili kingo zilizonyooka tu kati ya nyuso mbili bapa (kernel ya matundu inazijenga). Zungusha au ukate kingo zilizopinda kwenye mchoro." (pia Chamfer) | Kingo iliyochaguliwa ni ya duara, kama ukingo wa shimo, au iko kwenye uso uliopinda | {{ui:Pick edges}} na uiondoe; zungusha au kata kona hiyo kwenye mchoro badala yake |
| "Fillet yenye radius inayobadilika kando ya kingo: bado haijajengwa (inahitaji kernel sahihi). Ipe radius moja." | **Variable radius** imewekwa tiki | Ondoa tiki na upe radius moja |
| "Fillet kwa kernel ya matundu: pale kingo zilizozungushwa zinapokutana zimekatwa kwa mshazari, si kuchanganywa." (⚠, onyo) | Kingo zilizochaguliwa zinakutana kwenye kona; mizunguko inakutana hapo kwenye mkunjo mkali | Hakuna cha kurekebisha: sehemu imejengwa. Zungusha kingo chache ikiwa mkunjo unajali |
| "Kingo ambayo inaizungusha imepotea: kingo kati ya Extrude1 na Cut2." | Badiliko la awali liliondoa kingo | {{ui:Pick edges}}, ondoa kingo nyekundu, chagua mpya |
| "Chagua kingo kwenye mwonekano, kisha ziongeze." | Fillet au chamfer haina kingo | {{ui:Pick edges}} |
| "Chagua nyuso za kuondoa (wazi), kisha shell." | Shell haina nyuso wazi | {{ui:Pick faces}} |
| "Shell haikuweza kutengenezwa kwa unene huu (…)." | Ukuta ni mnene kuliko sehemu nyembamba ya modeli au radius ya fillet | Ukuta mwembamba, au fillet kubwa zaidi |
| "Shell: katika toleo hili inafungua nyuso bapa tu (kernel ya matundu inaijenga)." | Uso wazi umepinda | {{ui:Pick faces}} na uiondoe; fungua nyuso bapa tu |
| "Mteremko: katika toleo hili nyuso bapa tu (kernel ya matundu inaijenga)." | Uso ulioteremshwa ni silinda, koni au uso huru | Uondoe; teremsha nyuso bapa tu |
| "Uso inaofungua umepotea (…)." | Badiliko la awali liliondoa uso | {{ui:Pick faces}} tena |
| "Fillet1 inabadilisha kingo au kuta za mwili; haiwezi kunakiliwa. …" | Muundo au kioo kinanakili fillet, chamfer au shell | Iondoe tiki; weka muundo wa kupunguzwa kwanza, kisha fillet |
| "Inakaa kwenye uso ambao kernel sahihi pekee inaweza kuupata: bado haijajengwa katika toleo hili." | Mchoro kwenye uso ambao kernel ya matundu haiwezi kuupata, kama uliotengenezwa kwenye toleo la awali | Chora kwenye ndege ya msingi au uso bapa wa extrude, kisha uweke kwa vipimo |
| "Inatumia uso au kingo ya kigumu, ambayo kernel sahihi pekee inaweza kuipata: bado haijajengwa katika toleo hili." | Ndege, mhimili au pointi ya marejeo kwenye uso au kingo ya kigumu | Itengeneze kutoka ndege za msingi, pointi za mchoro au kuratibu |
| "Kutoa hadi uso, uso unaofuata au vertex: bado haijajengwa (inahitaji kernel sahihi)." / "Taper: bado haijajengwa (inahitaji kernel sahihi)." | Sharti la mwisho au taper ambalo kernel sahihi pekee inajenga | Tumia kina cha Blind au Mid-plane unachopima; acha Taper kuwa 0 |

## Matatizo ya kuchagua

- "Uso huo umepinda. Chagua uso bapa au ndege ya kuchorea." Michoro inahitaji uso bapa. Chora kwenye ndege ya msingi na uweke mchoro kwa vipimo badala yake.
- Uso unasema "Imewekwa pale ilipochaguliwa": haukutengenezwa kwa kingo ya mchoro (kwa mfano uso wa nakala ya muundo), kwa hiyo mchoro juu yake unabaki pale unapobadilika sehemu.
- Kingo ni ngumu kugusa: kuza ndani. Kingo inashinda uso jirani pale kielekezi kiko juu yake hasa.

## Matatizo ya faili

| Ujumbe | Kurekebisha |
|---|---|
| 'PartCraft inafungua faili zake za .partcraft.json, mauzo kutoka macro ya CadCraft kwa SolidWorks (.cadcraft-sw.json) na faili za STEP. "bracket.igs" si yoyote kati ya hizo.' | Faili hizo tu ndizo zinatambuliwa (na meshi za STL, OBJ na 3MF, na faili za `.3dm`) |
| '"part.stp" si faili la STEP (haianzi na ISO-10303-21).' | Faili si maandishi ya STEP |
| "Faili hiyo ya STEP ni kubwa mno (zaidi ya MB 60) kuingizwa hapa." | Ipunguze kwenye chanzo |
| "Faili hilo ni kubwa mno kuwa sehemu ya PartCraft." kwenye sehemu yako iliyohifadhiwa | Kigumu kikubwa cha STEP kilichoingizwa kwenye toleo la awali kilifanya faili la sehemu kuwa zaidi ya MB 50. Tumia nakala ya awali isiyo nacho |
| "Faili hilo ni kubwa mno kuwa sehemu ya PartCraft." | Faili lina zaidi ya MB 50; si faili la PartCraft |
| "Hili si faili la PartCraft (si JSON)." / "Hili si faili la PartCraft." | Faili limeharibika au ni la programu nyingine |
| "Faili hili limehifadhiwa na PartCraft mpya zaidi (toleo la faili …); hili linasoma toleo …" | Ifungue kwenye PartCraft mpya zaidi |
| "Extrude2: kina ni kibaya." (au thamani nyingine) | Faili limehaririwa kwa mkono au limeharibika. Tumia nakala ya awali |
| Ingiza kwenye mkusanyiko inasema "Part1.partcraft.json haina kigumu cha kuingiza." | Faili la sehemu halina kigumu. Lifungue, jenga kigumu, hifadhi, kisha ingiza tena |

**Faili langu lililohifadhiwa halipo ulipotarajia.** Kuhifadhi ni upakuaji: angalia folda ya upakuaji wa kivinjari chako, au fungua orodha ya upakuaji kutoka upau wa zana wa kivinjari. Tazama [Faili zako zinakwenda wapi](common:your-files).

**Nilifungua sehemu lakini mkusanyiko bado uko kwenye skrini.** Sehemu ilipakia nyuma ya mkusanyiko. Chagua {{ui:Close}} kufunga mkusanyiko na kuona sehemu. Funga mikusanyiko kabla ya kufungua faili za sehemu.

## Matatizo ya michoro

| Ujumbe | Kurekebisha |
|---|---|
| "Jenga kigumu kwanza, kisha tengeneza mchoro wake." | Jenga sehemu kwanza |
| "Hakuna nafasi kwenye karatasi kwa: detail. Fanya detail iwe ndogo au ondoa mwonekano." | **Detail radius** au **Detail scale** ndogo zaidi, au ondoa sehemu-mtambuka |
| "Detail inachukuliwa kutoka mwonekano wa mbele, juu, kulia au sehemu-mtambuka." | Bofya kwenye mojawapo ya mionekano hiyo |
| "Bofya kwenye mojawapo ya mionekano." | Bofyo lilikuwa kwenye karatasi tupu |
| "Nafasi inahitaji marejeo angalau moja ya datum." na ujumbe mwingine wa fremu | Weka datums ambazo paneli inauliza, au chagua sifa nyingine |
| "Mionekano ya mchoro haikuweza kutengenezwa: …" | Tendua badiliko la mwisho. Ikiendelea, hifadhi, pakia upya na ufungue tena sehemu |

## Matatizo ya mkusanyiko

| Ujumbe | Kurekebisha |
|---|---|
| "Jenga kigumu kwanza, kisha ukiweke kwenye mkusanyiko." | Sehemu bado haina kigumu |
| "Ingiza sehemu ya pili kwanza (Add copy, Insert, au Edit › Duplicate)." | Kiungio kinahitaji sehemu mbili |
| "Chagua uso kwenye sehemu tofauti." | Nyuso zote mbili za kiungio lazima ziwe kwenye sehemu tofauti |
| "Uso huo umepinda. Chagua uso bapa …" | Viungio huanza kutoka nyuso bapa. Kisha tumia **Centre on** kwa shimo au mhimili wa kuzungusha |
| "Bracket2 haijaunganishwa na sehemu iliyowekwa chini, kwa hiyo inabaki pale ilipowekwa." | Ongeza kiungio kutoka kwake hadi sehemu iliyowekwa |
| "Revolute3 inafunga kitanzi ambacho hakiwezi kufungwa: kimetoka kwa 2.000 mm. Angalia nyuso, offsets na mipaka ya viungio vya kitanzi." | Sehemu haziwezi kukutana zote: angalia urefu, nyuso ambazo kila kiungio kinatumia, offsets (sehemu zilizopangwa uso kwa uso lazima zikubaliane kwa kina) na mipaka; au ondoa kiungio kimoja cha kitanzi |
| "Uso ambao kiungio hiki kinatumia umepotea kutoka Bracket." / "Mhimili ambao kiungio hiki kinatumia umepotea kutoka Bracket." | Sehemu ilihaririwa. Ondoa kiungio na ukitengeneze tena |
| "Mhimili unapita kando ya uso, kwa hiyo hauwezi kuweka kituo cha kiungio." | Chagua mhimili unaovuka uso, au "The face's own origin" (asili ya uso wenyewe) |
| "Mkusanyiko unabaki na sehemu angalau moja. Ufunge badala yake." | Tumia {{ui:Close}} |

**Sehemu zimeungana lakini mahali pasipo sahihi.** Weka **Centre on** kwa pande zote mbili za kiungio kwenye mashimo au mihimili ya kuzungusha inayopaswa kupangana, kisha urekebishe **Angle (°)** na **Offset (mm)**.

## Ni polepole

- Weka **Curves** iwe Normal au Coarse wakati wa kumodeli; badilisha iwe Fine kabla ya kuhamisha.
- Idadi kubwa za muundo (nakala mia kadhaa) zinachukua muda kujengwa upya kila badiliko. Zuia muundo wakati unafanyia kazi vipengele vingine.
- Clash na ukaguzi wa mwendo zinalinganisha kila jozi ya sehemu; mikusanyiko mikubwa inachukua muda zaidi.
- Funga vichupo vingine vizito. PartCraft inaendeshwa kwenye kichakataji na picha za kompyuta yako mwenyewe.

## Bado umekwama

Hifadhi faili lako kwanza ({{key:Mod+S}}), kisha pakia upya ukurasa na ulifungue tena. Kipengele bado kikishindwa, kichague, soma ujumbe wake, na ujaribu {{key:Mod+Z}} kurudi kwenye hali ya mwisho iliyofanya kazi.
