---
title: Sameina, færa og skala líkama; mynstur á braut
summary: Búðu til aðskilda líkama, sameinaðu þá, skerðu þá úr eða taktu skurðarmengi eftir á, færðu, snúðu, jafnaðu eða afritaðu þá, skalaðu jafnt eða eftir X, Y og Z, og afritaðu eiginleika eða líkama eftir feril.
keywords: líkami, líkamar, fjölliði, nýr líkami, sameina, boolean, tengja, skera, skurðarmengi, draga frá, sameining, halda verkfærum, færa líkama, afrita líkama, snúa líkama, jafna, skala, skala ójafnt, teygja, affín, mynstur á braut, mynstur eftir ferli, fylki eftir braut, mynstur drifið af ferli
from: 6b1ea820
---

:::note
**Ekki smíðað enn í þessari útgáfu.** Að vinna með marga líkama krefst nákvæms rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki: hún smíðar alla hluti með möskvakjarnanum. [Það sem er ekki smíðað enn](topic:not-built-yet) segir hvað skal gera í staðinn. Restin af þessari síðu lýsir virkninni eins og hún væri með nákvæmum kjarna.
:::

Hlutur getur haldið fleiri en einu þrívíðu formi. Hvert aðskilið form er **líkami**. Flest atriði bæta við eða skera úr öllum líkömum sem þau snerta; verkfærin á þessari síðu vinna með heilum líkömum sem þú velur. Þau eru í valmyndinni **Meira** í hópnum Eiginleikar: {{ui:Sameina}}, {{ui:Færa líkama}}, {{ui:Skala líkama}} og {{ui:Mynstur á braut}}. Þau öll þurfa nákvæma kjarnann (OpenCascade).

## Búðu til aðskilinn líkama

Stilltu **Aðgerð** á útdrætti eða snúningi í hægra spjaldinu á **Nýr líkami** (sópanir og brýr hafa hana líka). Nýja formið helst aðskilið jafnvel þar sem það skarast hinum. **Skurður** heldur aðeins þeim hluta þar sem nýja formið og það sem fyrir er skarast.

Líkamar fá nafn af eiginleikanum sem bjó þá til: „Extrude2“. Afrit fær nafn af upprunalega og eiginleikanum sem afritaði það: „Extrude2, afrit 1 af Move1“. Nöfnin haldast þegar þú breytir stærðum ofar í sögunni, þannig að eiginleikar sem nota líkama finna hann áfram. Með tvo eða fleiri líkama sýnir hlutaspjaldið (smelltu á tómt rými) þá ásamt rúmmálum þeirra.

## Endurnefna eða fela líkama

Smelltu á tómt rými í sýninni til að sjá hlutaspjaldið. Líkamalistinn þess (sýndur þegar hlutur hefur tvo eða fleiri líkama) hefur nafnreit og {{ui:Fela}} hnapp á hverri röð.

- **Endurnefna:** skrifaðu nýtt nafn í reitinn og ýttu á {{key:Enter}} eða smelltu annars staðar. Öll spjöld nota það þá: Sameina, Færa líkama, mynstrin. Hreinsaðu reitinn til að fara aftur í nafnið frá eiginleikanum sem bjó til líkamann.
- **Fela:** smelltu á {{ui:Fela}} á röðinni. Líkaminn hverfur úr sýninni og smellir fara í gegnum hann, svo þú getur valið fleti þar að baki. {{ui:Sýna}} skilar honum; {{ui:Sýna allt}} skilar öllum földum líkömum.

Fela breytir aðeins sýninni. Falinn líkami er enn smíðaður, telst með í rúmmáli og mælingum, og er vistaður í STL-, 3MF- og STEP-útflutningum. Heiti og faldir líkamar eru vistaðir í hlutaskránni, og hver breyting er eitt skref í {{ui:Afturkalla}}.

## Sameina líkama

1. Shift+smelltu á flöt **markmiðslíkamans**, og síðan á flöt hvers **verkfæraslíkama**.
2. Veldu {{ui:Meira}}, síðan {{ui:Sameina}}.
3. Í hægra spjaldinu velurðu **Aðgerð**:

| Aðgerð | Niðurstaða |
|---|---|
| Tengja | Markmiðið og verkfærin verða einn líkami |
| Skera | Verkfærunum er tekið úr markmiðinu |
| Skurður | Aðeins það sem markmiðið og hvert verkfæri eiga sameiginlegt er haldið |

**Markmiðslíkami** er sá sem heldur nafni sínu. Hakaðu við eða afhakaðu **Verkfæralíkamar**, eða notaðu **Veldu í sýninni** og smelltu á fleti þeirra. **Halda verkfæralíkömum** skilur verkfærin eftir á sínum stað líka (hentugt fyrir mót og kjarna þess). Ef verkfæralíkami var þegar notaður af fyrri Sameina segir spjaldið það í stað þess að velja annan líkama.

## Færa eða afrita líkama

1. Veldu {{ui:Meira}}, síðan {{ui:Færa líkama}}. Nýjasti líkaminn er hakaður; hakaðu við þá sem þú vilt færa.
2. Veldu **Færsla** (tegund):

| Færsla | Það sem þú stillir |
|---|---|
| Þýða | **ΔX**, **ΔY**, **ΔZ** í millimetrum |
| Punktur á punkt | **Frá** og **Til**: smelltu nálægt enda brúnar, á punkt sem eiginleiki bjó til, eða á stað á fleti |
| Snúa um ás | **Ás** (X, Y, Z, ásaeiginleiki, eða **Velja**: bein brún, hringur eða sívalningur) og **Horn (°)** |
| Jafna flöt við flöt eða plan | **Flötur til að færa** (flatur flötur líkamans), **Á** (flatur flötur eða plan) |

Jöfnun snýr líkamanum þannig að flöturinn liggi á hinum fletinum, flötur á móti fleti, og rennir honum síðan eingöngu eftir normal þess flatar. **Sama átt** snýr honum hina leiðina. **Afrita** heldur upprunalega og bætir færða afritinu við sem nýjum líkama.

## Skala líkama

1. Veldu {{ui:Meira}}, síðan {{ui:Skala líkama}}, og hakaðu við líkamana.
2. Sláðu inn **Skali**, eða afhakaðu **Jafnt** og sláðu inn **Skali X**, **Skali Y** og **Skali Z** (eftir heimsásunum).
3. **Um** er punkturinn sem helst á sínum stað: miðja kassa líkamanna, eða punktur sem þú velur.

Jafn skali er nákvæmur. Ójafn skali breytir hringjum í sporbauga: sívalningur verður sporbaugssívalningur, sem ekkert greiningarflötur getur haldið, þannig að bognir fletir verða B-spline-fletir sem haldast innan 0.0000004 mm frá nákvæmu lögun; flatir fletir og beinar brúnir haldast nákvæmir. Spjaldið segir hvað gerðist. Skalaþættir verða að vera meiri en núll (speglaðu með {{ui:Spegling}} í staðinn).

## Afrita eftir braut

1. Veldu eiginleikann sem á að afrita í sögunni, eða láttu ekkert vera valið til að afrita nýjasta líkamann.
2. Veldu {{ui:Meira}}, síðan {{ui:Mynstur á braut}}. Nýjasta ónotaða skissan er tekin sem braut.
3. Í hægra spjaldinu stillirðu:

| Stilling | Hvað hún gerir |
|---|---|
| **Afrita** | Líkamar (hvert afrit verður nýr líkami) eða Eiginleikar (tengdir eða skornir eins og upprunalegi) |
| **Braut** | Hakaðu við skissur, eða **Veldu brúnir líkans**; hlutarnir verða að tengjast enda við enda |
| **Fjöldi** | Heildarfjöldi, þar með talið upprunalega |
| **Bil** | Jafnt (dreift til enda opinnar brautar, eða allan hringinn á lokaðri) eða ákveðin fjarlægð |
| **Stefna** | Fylgja brautinni (hvert afrit snýst með henni) eða Föst (afrit haldast samsíða) |
| **Snúa stefnu** | Farðu hina leiðina eftir brautinni |

Afritin byrja þar sem brautin liggur næst upprunalega og eru dreifð eftir lengd á ferlinum.

Línuleg og hringlaga mynstur geta líka afritað líkama: hakaðu við **Afrita líkama** í spjaldi þeirra og veldu líkamana; hvert afrit verður nýr líkami.

## Takmarkanir

- Líkamar þurfa nákvæma kjarnann; möskvakjarninn heldur einu formi og segir það.
- Ójafn skali breytir bognum flötum í nálganir með B-spline-fleti (sjá að ofan), ekki nákvæmum sívalningum eða keilum; forskiptir fletir er ekki hægt að skala þannig enn.
- Að fylgja braut á snúnum þrívíðum ferli flytur afritið án þess að snúa því; á flötum brautum er snúningurinn nákvæmur.
- Sameina virkar aðeins á föstum formum. Yfirborðslíkamar eru tengdir með {{ui:Sauma}}.

Sjá einnig [Viðmiðsplön, ásar og punktar](topic:reference-geometry) fyrir punkta og plön „á milli hluta“, og [Mynstur og spegling eiginleika](topic:patterns-mirror).
