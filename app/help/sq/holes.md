---
title: Shponi vrima dhe vrima me zgjerim te pikat e skicës
summary: Vendosni pika në një skicë mbi një faqe, bëni vrima të thjeshta, me zgjerim, konike ose të filetuara (ISO metrike) te çdo pikë, vendosni diametrin dhe thellësinë, dhe rregulloni vrimat që shpohen në drejtimin e gabuar.
keywords: vrimë, magjistari i vrimës, shpim, filetim i modeluar, printim 3D, zgjerim, cbore, konicitet, csink, vrimë e filetuar, filetim, shpim për filetim, filetim metrik, M6, përmes gjithë, vrimë e verbër, vrimë bulonash, pika, qendrat e vrimave
from: 8e1eef83
---

{{ui:Vrimë}} shpon një vrimë te çdo pikë e lirë e një skice. Një pikë e lirë është një pikë e bërë me veglën Pikë, jo fundi i një vije ose qendra e një rrethi.

## Shponi vrima në një faqe

1. Klikoni faqen e sheshtë ku do të shpohet, pastaj zgjidhni {{ui:Skicë mbi këtë faqe}}.
2. Shtypni {{key:P}} dhe klikoni ku shkon çdo vrimë. Përmasoni pikat nga skajet ose origjina nëse pozicioni i tyre ka rëndësi (shih [Përcaktoni plotësisht një skicë](topic:relations-dimensions)).
3. Zgjidhni {{ui:Dil}}.
4. Zgjidhni {{ui:Vrimë}}.

Vrimat kalojnë përmes pjesës, 6 mm në diametër. Paneli i djathtë shfaq **Vrimat**: sa u bënë, "një për pikë skice".

**Një vrimë, shpejt:** klikoni faqen e sheshtë ku shkon vrima dhe zgjidhni {{ui:Vrimë këtu}} në panelin e djathtë. PartCraft shton një skicë mbi faqe me një pikë aty ku klikuat dhe një Vrimë përmes pjesës, në një hap. Shkruani menjëherë një numër dhe shtypni {{key:Enter}} për diametrin e saj. Për ta vendosur saktë, hapni skicën e re dhe përmasoni pikën.

**Cila skicë përdoret:** skica që sapo mbyllët ose ajo e zgjedhur; përndryshe skica më e fundit e pa përdorur me pika të lira. Nëse s'ka asnjë: "Bëni fillimisht një skicë me pika aty ku shkojnë vrimat (Skicë mbi një faqe, pastaj Pikë)."

## Cilësimet

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| **Lloji** | E thjeshtë, Zgjerim, Konicitet, Filetuar (ISO metrike) | E thjeshtë |
| **Diametri (mm)** | Diametri i vrimës | 6 |
| **Përmes gjithë** | E zgjedhur: krejt përmes pjesës. Hiqeni për një vrimë të verbër | E zgjedhur |
| **Thellësia (mm)** | Shfaqet kur Përmes gjithë është e pazgjedhur | 10 |
| **Diametri i zgjerimit ⌀** | Shfaqet për Zgjerim: diametri i zgjerimit më të gjerë | 11 |
| **Thellësia e zgjerimit** | Shfaqet për Zgjerim | 6 |
| **Drejtimi i kundërt** | Shpon në anën tjetër të planit të skicës | Çaktivizuar |

Vrimat shpohen në materialin, pingul me planin e skicës. Thellësia e një vrime të verbër matet nga plani i skicës; fundi i saj është i sheshtë.

## Një vrimë bulloni me zgjerim

1. Bëni vrimat siç u tregua më sipër.
2. Vendosni **Lloji** në **Zgjerim**.
3. Vendosni **Diametri (mm)** në `6.6` (hapësirë për një bulon M6), **Diametri i zgjerimit ⌀** në `11` dhe **Thellësia e zgjerimit** në `6.5`.

Zgjerimi duhet të jetë më i gjerë se vrima ("Zgjerimi duhet të jetë më i gjerë se vrima.") dhe, për një vrimë të verbër, më i cekët se ajo ("Zgjerimi duhet të jetë më i cekët se vrima.").

## Një rreth bulonash

Për vrima të shpërndara barabar rreth një qendre, bëni **një** vrimë dhe modelojeni: zgjidhni veçorinë Vrimë, pastaj zgjidhni {{ui:Rrethore}} (shih [Modele dhe pasqyrim](topic:patterns-mirror)). Modeli ndjek kur ndryshoni madhësinë e vrimës.

## Kur vrimat shkojnë në drejtimin e gabuar

- "Nuk ka asgjë për shpuar në atë anë të skicës. Provoni të ktheni drejtimin." Skica ndodhet në anën e largët të materialit. Shenjoni **Drejtimi i kundërt**.
- "Vendosni pika skice aty ku shkojnë vrimat (veglë Pikë), pastaj bëni vrimën." Skica nuk ka pika të lira. Skajet e vijave dhe qendrat e rrathëve nuk numërohen.
- "Nuk ka asgjë për shpuar akoma." Një vrimë kërkon një solid. Bëni më parë një pjesë të dalë (boss).

## Vrimat në montime

Çdo vrimë ka një bosht. Në një montim, **Qendërso në** mund të vendosë një lidhje në boshtin e një vrime, e listuar si "Vrima1, vrima 2", kështu që një kunj ose bulon përshtatet me të. Shih [Ndërtoni një montim](topic:build-assembly).

## Vrima konike

Vendosni **Lloji** në **Konicitet**, pastaj **Diametri i konicitetit ⌀** (në sipërfaqe) dhe **Këndi i konicitetit**: 90° (vida me kokë të sheshtë ISO metrike) ose 82° (vida inç). Merreni diametrin e konicitetit nga të dhënat e prodhuesit të vidës (pak më shumë se diametri i kokës së vidës). Faqja e konusit emërtohet "konicitet" në panele.

## Vrima të filetuara

Vendosni **Lloji** në **Filetuar (ISO metrike)** dhe zgjidhni **Filetimin**, M2 deri M24 me hap të trashë. Vrima shpohet me madhësinë e shpimit për filetim nga tabela më poshtë (diametri nominal minus hapi, në serinë e shpuesve, siç liston ISO 2306 për një filetim 6H); kutia **Diametri (mm)** nuk përdoret. Për një vrimë të verbër, **Thellësia e filetit (mm)** vendos sa thellë shkon filetimi.

| Filetimi | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hapi | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Shpimi për filetim ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Filetimi është **kozmetik** në fillim: modeli ka vrimën e shpuar, pamja vizaton diametrin kryesor të filetit si rrathë me vija, dhe fleta e vizatimit mban thirrjen si shënim, si "4× M8×1.25 - 6H, thread through". STEP eksporton vetëm vrimën e shpuar.

Shenjoni **Modeluar** për të prerë filetin e vërtetë spirale në vrimë, për printim 3D. **Hapësira (mm)** e bën atë aq më të madh përreth, që një bulon i printuar të përshtatet: 0.1 deri 0.2 mm i përshtatet shumicës së printerëve. Thirrja mbaron atëherë me "(modeluar)". Shih [Filetet në boshte dhe vrima, të vizatuara ose të modeluara](topic:threads), që vendos filete edhe në boshte.

:::note
Vrimat me shpim të dytë (counterdrilled), filetet në inç dhe filetet e tubave nuk janë ndërtuar ende.
:::
