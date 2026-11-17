---
title: Eiginleikar og valkostir þeirra
summary: Sérhver eiginleiki á tækjastikunni með stillingum, sjálfgefnum gildum og takmörkunum, frá útdrætti til ávala, skeljar og innfluttra STEP-fastra efna, aðgerðunum sem allir eiginleikar deila, og hlutastillingunum.
keywords: eiginleikar, útdráttur, klippa, snúningur, snúið úrtak, hol, skúffugat, línulegt mynstur, hringlaga mynstur, spegill, ávali, skábrún, skel, innflutningur, valkostir, sjálfgefið, stillingar, upplausn, bogar, fasetur, bæling, afturrúlla
from: ab3a598e
---

Eiginleikar eru skráðir í sögunni í þeirri röð sem þeir voru gerðir og byggðir upp aftur ofan frá og niður. Hver þeirra er nefndur eftir gerð sinni með númeri: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft smíðar alla eiginleika með möskvakjarnanum. Ávali og skábrún virka á beinum brúnum milli tveggja sléttra flata, og Skel opnar slétta fleti. Innflutt föst efni þurfa nákvæman kjarna, sem þessi útgáfa hefur ekki: þau eru ekki smíðuð enn, og kaflinn hér fyrir neðan lýsir þeim sem hluta sem hluti gerður í eldri útgáfu heldur. Sjá [Möskvakjarninn](topic:solid-kernels) og [Hvað er ekki smíðað enn](topic:not-built-yet).

## Skissa

| Stilling | Athugasemdir |
|---|---|
| Plan | Framplan, Efra plan eða Hægra plan, eða sléttur flötur. Sýnt, ekki breytt: til að færa skissu, búðu til nýja |
| Staða | Fullskilgreint, Vanskilgreint (með frelsisgráðunum), Ofskilgreint eða Tómt |
| Rúmfræði, Tengsl | Hversu margir ferlar, punktar og tengsl |
| Stýrandi málsetningar | Sérhver málsetning skissunnar, breytanleg |

Hnappar: {{ui:Breyta skissu}}, {{ui:Flytja út sem DXF}}.

## Útdráttur og Klippa

{{ui:Útdráttur}} og {{ui:Klippa}} búa til sama eiginleikann, með mismunandi upphafsstillingum.

| Stilling | Val | Útdráttur byrjar á | Klippa byrjar á |
|---|---|---|---|
| Aðgerð | Upphækkun (bætir við efni), Klippa (fjarlægir efni), Skörun (heldur skörunarsvæðinu), Nýr líkami (ekki smíðaður enn í þessari útgáfu) | Upphækkun | Klippa |
| Endir | Blindur (ákveðin dýpt), Miðflötur (í báðar áttir), Í gegnum allt | Blindur | Í gegnum allt |
| Dýpt (mm) | Yfir 0, upp í 1.000.000 | 10 | 10 |
| Snúa við átt | Slökkt / kveikt | Slökkt | Slökkt |

- Snið: sérhver lokuð lykkja úr heilum línum, hringjum og bogum í skissunni. Lykkjur inni í lykkjum eru göt.
- Í gegnum allt virkar aðeins fyrir úrtök. Það nær alveg í gegnum hlutinn á völdu hliðinni.
- Úrtak fer inn í efnið, frá útvísandi hlið plans skissunnar; Snúa við snýr því við.

## Snúningur og snúið úrtak

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Aðgerð | Upphækkun, Klippa | Upphækkun ({{ui:Snúningur}}), Klippa ({{ui:Meira}} › {{ui:Snúið úrtak}}) |
| Horn (°) | Yfir 0, upp í 360 | 360 |
| Ás | Fyrsta miðlína, hvaða lína eða miðlína skissunnar sem er, eða ásseiginleiki sem liggur í plani skissunnar | Fyrsta miðlína |

- Sniðið verður að vera öðrum megin við ásinn. Það má snerta hann.
- Ás snúnings má nota í hringlaga mynstrum og samsetningartengjum.

## Hol

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Gerð | Einfalt, Skúffugat | Einfalt |
| Þvermál (mm) | Yfir 0 | 6 |
| Í gegnum allt | Kveikt / slökkt | Kveikt |
| Dýpt (mm) | Þegar Í gegnum allt er slökkt | 10 |
| Skúffugat ⌀ | Breiðara en gatið | 11 |
| Dýpt skúffugats | Grynnra en blindgat | 6 |
| Snúa við átt | Slökkt / kveikt | Slökkt |

- Eitt gat á hverjum lausum punkti skissunnar (punktum búnum til með Punktverkfærinu). Spjaldið sýnir hversu mörg.
- Göt eru boruð hornrétt á plan skissunnar, inn í efnið.
- Ás hvers gats má nota í samsetningartengjum ("Hole1, hole 2").

## Línulegt mynstur

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Eiginleikar til að afrita | Hvaða föst eiginleikar sem er fyrir ofan hann | Valinn eiginleiki, annars síðasti fasti eiginleikinn |
| Stefna | X-ás, Y-ás, Z-ás; lína úr fyrri skissu; ás snúnings; valin brún | X-ás (eða brúnin sem valin var þegar hann var bættur við) |
| Bil (mm) | Hvaða tala sem er | 20 |
| Fjöldi | 1 til 1000, þar með talið upprunalega | 3 |
| Snúa við átt | Slökkt / kveikt | Slökkt |

## Hringlaga mynstur

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Eiginleikar til að afrita | Eins og fyrir Línulegt | Eins og fyrir Línulegt |
| Ás | Eins og fyrir Stefna hér fyrir ofan | Ás síðasta snúnings, annars Y-ás (eða valin brún) |
| Horn (°) | Yfir 0, upp í 360. 360 dreifir eintökunum jafnt allan hringinn; minna dreifir þeim yfir hornið | 360 |
| Fjöldi | 1 til 1000, þar með talið upprunalega | 6 |
| Snúa við átt | Slökkt / kveikt | Slökkt |

## Spegill

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Spegla | Allur líkaminn (eins og hann er byggður hingað til), eða valdir eiginleikar | Valinn eiginleiki, annars allur líkaminn |
| Speglunarplan | Framplan, Efra plan eða Hægra plan; sléttur flötur | Hægra plan, eða slétti flöturinn sem var valinn þegar hann var bættur við |

## Ávali og skábrún

Í þessari útgáfu smíðar möskvakjarninn þá á beinum brúnum milli tveggja sléttra flata (ytri eða innri horn), með einum radíus. Ávöl brún segir "Ávali: í þessari útgáfu aðeins beinar brúnir milli tveggja sléttra flata (möskvakjarninn smíðar þær). Ávalaðu eða skábrúnaðu bogadregnar brúnir í skissunni."; þar sem ávalar brúnir mætast í horni eru þær skáskornar, og eiginleikinn varar við "Ávali með möskvakjarnanum: þar sem ávalar brúnir mætast eru þær skáskornar, ekki blandaðar." Allar gerðir skábrúna (jöfn fjarlægð, tvær fjarlægðir, fjarlægð og horn, með **Snúa hliðum**) virka. Sjá [Ávala, skábrúna og hola með Ávala, Skábrúna og Skel](topic:fillet-chamfer-shell).

| Stilling | Ávali | Skábrún |
|---|---|---|
| Radíus (mm) (Ávali) / Fjarlægð (mm) (Skábrún) | Yfir 0 | Yfir 0, sú sama á báðum flötum |
| Sjálfgefið | 2 | 1 |
| Brúnir | Valdar brúnir, hver skráð eftir flötunum tveimur sem hún tengir ("Extrude1 endaflötur × Extrude1 hlið"), með **Fjarlægja** | Brúnirnar sem valdar voru þegar hann var bættur við |

- Veldu brúnir áður en þú velur hnappinn ({{key:Shift}}+smella fyrir nokkrar), eða veldu hann án þess að velja neitt og smelltu á brúnir síðar.
- {{ui:Velja brúnir}} (eða tvísmelltu á eiginleikann) breytir brúnunum.
- Brúnir eru geymdar eftir flötunum tveimur sem þær tengja, svo þær lifa af stærðarbreytingar fyrir ofan.

## Skel

Möskvakjarninn smíðar hana. Aðeins sléttir fletir geta opnast ("Skel: í þessari útgáfu opnar hún aðeins slétta fleti (möskvakjarninn smíðar hana)."); veggir með mismunandi þykkt eru ekki smíðaðir enn. Sjá [Ávala, skábrúna og hola með Ávala, Skábrúna og Skel](topic:fillet-chamfer-shell).

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Veggur (mm) | Yfir 0 | 2 |
| Veggir vaxa út á við (fletirnir haldast innan) | Slökkt: veggir fara inn á við. Kveikt: veggir fara út á við | Slökkt |
| Opnir fletir | Fletirnir sem fjarlægðir eru, að minnsta kosti einn, með **Fjarlægja** | Fletirnir sem valdir voru þegar hann var bættur við |

{{ui:Velja fleti}} breytir opnu flötunum.

## Innflutt fast efni

Búið til með því að opna STEP, STL, OBJ eða 3MF skrá: fast líkami úr þríhyrningum án eigin sögu ([Opnaðu STEP-skrá](topic:import-step), [Opnaðu STL, OBJ eða 3MF](topic:open-meshes)). Það sýnir skrána sem það kom úr og hvað innflutningurinn lagfærði; **Einingar í skránni**, **Upp í skránni** og **Nota það til** eru áfram breytanleg. Fast STEP-efni sem eldri útgáfa með nákvæmum kjarna flutti inn er áfram í sögunni merkt sem ekki smíðað; opnaðu STEP-skrána aftur til að flytja það inn sem þríhyrninga.

| Stilling | Val | Sjálfgefið |
|---|---|---|
| Upp í skránni | Z upp (flest CAD), Y upp | Z upp |

Mynstur og speglar geta afritað innflutt fast efni, en ekki ávala, skábrún eða skel.

## Það sem sérhver eiginleiki hefur

Neðst í spjaldi hvers eiginleika:

| Hnappur | Gerir |
|---|---|
| {{ui:Bæla}} / {{ui:Hætta við bælingu}} | Slekkur á honum eða kveikir. Eiginleikar sem þurfa hann eru ekki smíðaðir á meðan hann er slökktur |
| {{ui:Rúlla til baka hingað}} | Smíðar aðeins eiginleikana fyrir ofan þennan. Nýir eiginleikar fara inn á afturrúllustikuna |
| {{ui:Færa upp}} / {{ui:Færa niður}} | Endurraðar, þegar ekkert sem hann notar myndi lenda fyrir neðan hann. Grátt með ástæðunni annars |
| {{ui:Eyða}} | Eyðir honum, og (eftir spurningu) sérhverjum eiginleika sem notar hann |
| Heiti | Endurnefnir hann (allt að 60 stafir) |

Eiginleikar með skissu skrá einnig **Skissumálsetningar**, breytanlegar á staðnum.

## Stöður í sögunni

| Staða | Birtist sem | Merking |
|---|---|---|
| Smíðaður | Venjulegt | Allt í lagi |
| Viðvörun | ⚠ | Smíðaður, með einhverju til að athuga: "Ofskilgreint: 1 tengsl er ekki þörf." eða "Ekkert er eftir af hlutanum eftir þetta." |
| Villa | ⚠ villa, rautt | Ekki hægt að smíða; skilaboðin segja af hverju |
| Ekki smíðað | ⚠ ekki smíðað | Þarfnast eiginleika sem mistókst, er bældur eða afturrúllaður, eða þarfnast nákvæms kjarna, sem þessi útgáfa hefur ekki ("Ferilsdráttur: ekki smíðað enn. …") |
| Bældur | slökkt | Slökkt á |
| Afturrúllaður | grátt, fyrir neðan afturrúllustikuna | Ekki smíðaður fyrr en þú rúllar áfram |

## Hlutastillingar

Smelltu á autt svæði svo ekkert sé valið. Hægra spjaldið sýnir **Hlutur**:

- **Heiti**: heiti hlutarins, notað fyrir skráarheiti og titilreit teikningarinnar (allt að 120 stafir).
- **Bogar**: sjá hér fyrir neðan.

### Upplausn bogar

Möskvakjarninn smíðar fasta efnið sjálft úr sléttum fasetum, svo myndin, STL, 3MF, facetaða STEP, rúmmálið og teikningarmyndirnar fylgja öllum **Bogar**: hversu margar fasetur eru á heilum hring.

| Stilling | Fasetur á hring | Rúmmál ávölrar lögunar |
|---|---|---|
| Gróft (32 á hring) | 32 | Um 0,64 % undir raungildinu |
| Venjulegt (64 á hring) | 64 | Um 0,16 % undir (sjálfgefið) |
| Fínt (128 á hring) | 128 | Um 0,04 % undir |
| Mjög fínt (256 á hring) | 256 | Um 0,01 % undir |

Fínni bogar gefa sléttari útflutninga og myndir, og hægari endurbyggingar. Stillingin er vistuð í hlutaskránni.

## Ekki smíðað enn

Ávalar með breytilegum radíus, ávalar og skábrúnir á ávölum brúnum, skeljar sem opna bogadregna fleti, skástig á bogadregnum fleti, ferilsdráttur, lofthleðsla, rif, STEP-föst efni með nákvæmum bogadregnum flötum, nýir líkamar, skástig, "upp að" fleti eða hornpunkti, og tilvísanir á flötum og brúnum fasta efnisins þurfa nákvæman kjarna, sem þessi útgáfa hefur ekki. Einnig ekki smíðað: skrúfuð göt og skálgöt. Sjá [Hvað er ekki smíðað enn](topic:not-built-yet).
