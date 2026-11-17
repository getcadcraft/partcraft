---
title: Reitir: form sem fjarlægðir
summary: Hvað reitur er (form geymt sem fjarlægðin að yfirborði þess), hvernig á að byggja hann úr frumformum, aðgerðum, grindum og lágmarksflötum í skriftu, hvernig hann verður að líkama, og af hverju sama skrifta gefur alltaf sömu bæti.
keywords: reitur, fjarlægð með formerkjum, sdf, voxel, gyroid, tpms, grind, aðgerð, offset, skel, blanda, dual contouring, ákveðið, vatnsþétt, manifold, kubbur
from: faab7480
---

**Reitur** lýsir formi með fjarlægðinni frá hvaða punkti sem er að yfirborði þess: neikvæð inni, núll á yfirborðinu, jákvæð utan þess. Kúla með radíus 5 er "fjarlægðin að miðjunni mínus 5". Að setja form saman er reikningur á fjarlægðum: sameiningin er sú minni af tveimur, skurðpunkturinn sá stærri, og að draga eitt form frá öðru er það stærra af því fyrsta og mínus það annað. Að stækka form um 1 mm dregur 1 frá fjarlægðinni; holur veggur er fjarlægðin, brotin saman.

Þess vegna henta reitir vel fyrir grindur, rásir og veggi með breytilegri þykkt: yfirborð gyroid er "summa sínusanna er núll", og veggur sem þykknar úr 1 í 3 mm yfir hlutann er tala sem breytist yfir hlutann.

## Frá reit í líkama

`to_body(field, h)` tekur sýni af reitnum á rist punkta sem eru `h` millimetrum á milli, og heldur aðeins punktunum nálægt yfirborðinu (strjál rist af 8 × 8 × 8 kubbum), og smíðar yfirborðið með **dual contouring**: einn hornpunktur á hverja yfirborðsfrumu, staðsettur þar sem yfirborðsplönin mætast, svo skörp brún helst skörp innan einnar voxel. Yfirborðið er lokað og sérhver brún er deild af nákvæmlega tveimur þríhyrningum; skýrslan segir það. Eiginleiki þynnri en um þrjár voxel getur klemmst, og þá segir skýrslan að líkaminn sé ekki lokað fast efni í stað þess að fela það.

Stærð voxel er nákvæmnin: rúmmál kúlu sem er 25 voxel þvert er innan nokkurra hundraðshluta prósents, og veggur er aðeins eins réttur og voxel hans. Því grófari sem ristin er, því hraðar gengur það.

## Alltaf sömu bætin

Reitur hefur enga klukku og enga slembitölu. Sínus og kósínus gyroid, og sérhver veldisvísis-, lógariþma- og veldisaðgerð í safninu, eru reiknuð úr einfaldri reikningsaðgerð svo Node, Chrome, Firefox og Safari gefi sömu bitana; ristin er farin í fastri röð, svo sama skrifta með sömu inntökum gefur bæti-eins möskva og gagnablöð, á hvaða tölvu sem er og yfir hvaða fjölda vinnuþráða sem er. Það er prófað, þar með talið vafri gegn Node.

## Hvert á að fara næst

[Skrifaðu rafal](topic:write-a-generator) smíðar hlut með reitum; [Verkfræðisafnið](topic:engineering-library) mælir hann.
