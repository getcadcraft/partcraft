---
title: Opnaðu .3dm-líkan sem fast efni
summary: Færðu möskva, marghliða og kubba úr .3dm-skrá inn í PartCraft sem eitt fast efni sem þú getur skorið, bætt við og skissað á; hvaðan þríhyrningarnir koma og hvað er skilið eftir.
keywords: 3dm, nurbs, marghliði, brep, yfirborð, birtingarmöskvi, útdráttur, kubbar, innflutningur, möskvi í fast efni, einingar, innfluttur líkami
from: 8ae9571b
---

PartCraft opnar `.3dm`-skrár sem **fasta líkama**, á sama hátt og það opnar [STL-, OBJ- eða 3MF-möskva](topic:open-meshes). Líkaminn virkar eins og hvert annað fast efni: skera hann, bæta við hann, bora í hann, gera mynstur úr honum og skissa á flata fleti hans. Hann hefur enga sögu sjálfur.

## Opna skrána

1. Veldu {{ui:Open}} eða ýttu á {{key:Mod+O}}, og veldu `.3dm`-skrána. Eða slepptu henni á þrívíddarsýnina.
2. PartCraft les hana og sýnir það sem það fann: hversu margir hlutir með flötum koma inn, hversu margir fletir komu úr möskvunum sem vistaðir eru í skránni og hversu marga PartCraft útbjó sjálft þríhyrninga, hverja lagfæringu, og hvort útkoman **lokast**.
3. Athugaðu **Einingar í skránni** (skráin segir sjálf til um það; eining sem PartCraft listar ekki, svo sem yards, er breytt í millimetra) og **Upp í skránni**.
4. Veldu {{ui:Open as a body}}, eða **Nota það til** og {{ui:Add to this part}} þegar hluturinn hefur þegar þætti.

## Hvaðan þríhyrningarnir koma

PartCraft smíðar líkama úr þríhyrningum í þessari útgáfu, þannig að sérhver flötur í skránni verður að litlum flötum flötum. Fyrir hvern flöt marghliða (og hvern útdrátt) tekur það **birtingarmöskvann sem er vistaður í skránni** þegar hann er til, annars **þríhyrnir það sjálft** (plön, NURBS-yfirborð, snúningsyfirborð, útdregna ferla og útdrætti, stytt eftir jöðrum sínum). Flatir eins marghliða deila jaðarpunktum sínum, þannig að lokaður marghliði kemur inn lokaður. Flötur á tegund yfirborðs sem PartCraft les ekki enn er skilinn eftir og glugginn segir hversu margir og af hvaða tegund; útkoman lokast þá yfirleitt ekki.

## Allt í skránni verður einn líkami

Sérhver sýnilegur möskvi, marghliði og útdráttur, og sérhver staðsetning kubbs, fer í **einn** líkama þar sem skráin setur hann. Hlutir sem eru faldir, eða á lagi sem er slökkt á, eru skildir eftir. Þegar skráin geymir nokkur aðskilin föst efni hefur líkaminn nokkra hluta: opnaðu hvern þeirra úr eigin skrá ef þú vilt þá sem aðskilda líkama.

## Hvað er skilið eftir (og sagt frá)

Ferlar, punktar, punktaský, texti, mál, skyggingar og ljós eru skilin eftir: líkami tekur aðeins fleti. Eins SubD-hlutir (breyttu þeim í möskva eða marghliða í forritinu sem bjó til skrána fyrst), kubbar sem tengjast öðrum skrám, og litir, lög og heiti (PartCraft-líkamar hafa enga eigin hér).

## Þegar hann lokast ekki

Opnir marghliðar og yfirborð (einn stýttur flötur, form með vantandi fleti) hafa enga innri hlið, þannig að þau geta ekki verið fast efni. Glugginn segir hversu mörg op eru eftir og bætir engu við. Tengdu eða lokaðu forminu í forritinu sem bjó það til, vistaðu og opnaðu aftur. Sjá [Þegar möskvi lokast ekki](topic:open-meshes#when-a-mesh-does-not-close).
