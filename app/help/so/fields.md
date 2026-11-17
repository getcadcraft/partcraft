---
title: Fields: qaabab ahaan masaafooyin
summary: Waa maxay field (qaab loo kaydiyo sida masaafada ilaa wejigiisa), sida loo dhiso mid laga bilaabo primitives-ka, booleans, lattices iyo minimal surfaces script ah, sida ay u noqoto jidh, iyo sababta script isku mid ah had iyo jeer u bixiyo byte isku mid ah.
keywords: field, signed distance, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, deterministic, watertight, manifold, brick
from: faab7480
---

**Field** wuxuu qaabka ku sharaxaa masaafada ka dhex dhaxaysa barta kasta iyo wejigiisa: taban gudaha, eber wejiga dushiisa, mid togan dibadda. Silinder-ka radius 5 ah waa "masaafada ilaa dhexda ka dhimo 5". Isku-darka qaababka waa xisaab masaafooyinka: isku-darka waa midka ka yar labada, isgoyska midka ka weyn, iyo ka jaridda mid kale waa midka ugu weyn ee hore iyo kan labaad oo taban. Qaabka oo 1 mm loo weyneeyo waxay ka jaraa 1 masaafada; darbiga god ah waa masaafada oo la rogay.

Taasi waa sababta fields-ku u wanaagsan yihiin lattices, kanaallada iyo darbiyada heerka ah: wejiga gyroid-ka waa "isku-darka sine-ka waa eber", darbi ka qaro-weyn 1 mm ilaa 3 mm qaybta oo dhan waa lambar kaas oo qaybta oo dhan ku beddela.

## Field ilaa jidh

`to_body(field, h)` wuxuu field-ka ku sampleeyaa grid ah barar `h` mm ka fogaan, isagoo kaliya hayaa barar u dhow wejiga (grid sparse ah oo 8 × 8 × 8 bricks), oo wejiga wuxuu dhisaa **dual contouring** ka: hal vertex unug wejig kasta, meesha ay diyaarado wejiga kulmaan, sidaas darteed geesta adag waxay adag tahay ilaa hal voxel. Wejigu waa xidhan, geesta kasta waxaa wadaaga saddex-geesood gaar ah; warbixinta waa sheegtaa. Qaabka ka dhuuban ~saddex voxel ayaa laga yaabaa inuu gacan-kabo, markaas warbixinta waxay sheegtaa jidhka inuusan ahayn jidh xidhan iyo inaanay qarin.

Cabbirka voxel-ka waa saxnaanta: mugga kuraha 25 voxel ballaadhka ah wuxuu ku dhex jiraa dhowr boqolkiiba ee kun, darbi waa run sida voxels-keeda oo kale. Grid-ka sii weyn ayaa sii dhakhso badan.

## Had iyo jeer byte isku mid ah

Field-ku ma leh saac ama lambar random. Sine iyo cosine-ka gyroid-ka, iyo exponential, logarithm iyo power kasta maktabadda, waxaa lagu xisaabiyaa xisaab fudud si Node, Chrome, Firefox iyo Safari ay u siiyaan bitisa isku mid ah; grid-ka waxaa lagu soo maraa nidaam go'an, sidaas darteed script isku mid ah oo leh gelin isku mid ah wuxuu soo saaraa mesh-yo iyo xog-xaashiyo byte-ka isku mid ah, kombiyuutar kasta oo kasta, iyo threads-ka worker-ka oo kasta. Taasi waa la tijaabiyey, oo ay ku jirto browser iyo Node.

## Meesha aad u tagi karto

[Qor generator](topic:write-a-generator) wuxuu dhisaa qayb adigoo isticmaalaya fields; [Maktabadda injineeriyadda](topic:engineering-library) wuxuu cabbiraa.
