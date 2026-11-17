---
title: Verkfærasafnið
summary: Vistaðu verkfærin sem þú notar í vafranum svo hver hluti geti haft þau, og færðu verkfærasöfn milli tölva sem JSON-skrá.
keywords: verkfærasafn, verkfæri, útflutningur, innflutningur, JSON, vista verkfæri, T-númer, endafræsa, verkstæðisverkfæri
from: 8b9f2483
---

Flipinn **Verkfæri** í Framleiðslu sýnir verkfæri hlutarins. Undir **Verkfærasafn** geturðu geymt þín eigin verkfæri umfram einn hlut:

- {{ui:Vista þetta verkfæri}} bætir völdu verkfæri við **Vistuð verkfærin mín**; {{ui:Vista öll verkfæri þessa hlutar}} bætir þeim öllum við. Vistuð verkfæri eru geymd í þessum vafra og eru þar fyrir alla hluti. Verkfæri sem þú hefur þegar vistað (sama tegund, stærð, skurðarrif og yfirskriftir) er ekki vistað tvisvar.
- {{ui:Bæta við þennan hluta}} tekur valið vistað verkfæri inn í hlutinn. Ef T-númer þess er þegar notað af öðru verkfæri í hlutanum fær það næsta lausa númer og spjaldið segir frá því. {{ui:Fjarlægja úr safninu mínu}} tekur það af vistaða listanum (ekki af hlutum sem þegar hafa það).
- {{ui:Flytja út verkfæri…}} skrifar verkfæri hlutarins sem `.json`-skrá; {{ui:Flytja inn verkfæri…}} bætir verkfærum úr slíkri skrá við hlutinn, með sömu reglum (verkfæri sem þegar er þar er sleppt, og tekið T-númer færist). Skráin geymir stærðir, skurðarrif, efni og fóðrunar- og hraðayfirskriftirnar sem þú skrifaðir inn; hún hefur engin auðkenni. Notaðu hana til að flytja verkfæri verkstæðis í aðra tölvu eða gefa samstarfsmanni þau.

Ef vafrinn getur ekki geymt safnið (geymsla er slökkt eða full), segir vistun það og **Flytja út verkfæri** er leiðin til að geyma skrá. Skrá verður að vera PartCraft-verkfærasafn af þessari útgáfu eða eldri, með mest 500 verkfærum af gildum stærðum; annað er hafnað með ástæðunni.

Skurðarhraðinn og spónfóðrunin sem fylgja verkfæri eru upphafsgildi; sjá [Búðu til slóðir og G-kóða](topic:manufacture).
