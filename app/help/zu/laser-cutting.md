---
title: Thumela umdwebo ku-laser
summary: Khetha okwenziwa yi-layer ngayinye (sika, score, engrave, gcwalisa, isithombe), buka ukunyakaza kwekhanda, londoloza i-G-code ye-GRBL laser-mode, noma uyithumele kusiphequluli ngemva kokubeka umsebenzi ngohlaka.
keywords: laser, umbhali welaser, laser engraver, GRBL, G-code, engrave, gcwalisa, dither, ukuthweba isithombe, score, sika, Web Serial, Linux, bekela umsebenzi uhlaka, amandla, isivinini, ukudlula
from: 327b3c46
---

Ipaneli {{ui:Laser}} iguqula ama-layer omdwebo ibe uhlelo lweLaser oluzosebenza nge-GRBL (oluningi lwamaLaser e-hobby nawezitolo ezincane, ama-diode nama-CO2). Ku-PartCraft, khetha {{ui:Export}} › {{ui:Uhlelo lwelaser…}}, bese {{ui:Engeza izinkomba ezivela ku-DXF…}}: izinkomba nezimbobo kuzofika ku-layer CUT. Amaphethini eshidi lensimbi (anemigqa yokugoba ku-layer BEND) adinga i-exact kernel, engekho kulolu hlobo lwalolu hlelo. Izilungiselelo zigcinwa kwifayela lengxenye noma lenhlanganisela.

:::warning
Hlola zonke izilungiselelo ezibhodweni elingasetshenziswa kuqala, gqoka izibuko zokuvikela ezifanele i-laser yakho, gcina ukuvala kwesembozo lapho kukhona, futhi ungasoze washiya i-laser isebenza ungekho. Izinombolo ayiqala ngazo ilayer ngayinye ziwukubamba nje, hhayi izincomo zanoma iyiphi impahla.
:::

## Khetha okwenziwa yi-layer ngayinye

Iyonke layer yomdwebo ibe ngumugqa. {{ui:Yenza}} iyibeka ibe **Sika**, **Score**, **Engrave lines**, **Fill shapes**, **Engrave picture** noma **Not sent**, nge-{{ui:Amandla %}}, {{ui:Isivinini mm/min}} nenani lo-{{ui:Ukudlula}}.

- **Fill** ishisa ingaphakathi kwezimo ezivaliwe ngemigqa, {{ui:Isikhala somugqa}} kusukela komunye, ku-{{ui:I-engeli}}, zombili izinhlangothi noma eyodwa, nokuweqa okungaphezu ukuze ikhanda liphume ngejubane lapho i-laser ivulwa; cross-hatch yengeza ukudlula kwesibili ku-90°. Ukuma okunemgodi kuhlala kuvuliwe emgodini.
- **Engrave picture** iguqula isithombe sibe amachashaza (Floyd–Steinberg, Atkinson, ordered, noma ukumnyama nokumhlophe okulula ngomkhawulo), noma, nge-*Grey levels*, ibe amandla ayaguquguqukayo.
- Ukuhlelwa: izithombe nokugcwaliswa kuqala, bese ukuthweba imigqa, bese ama-score, bese ukusika, ukuze ingxenye esikiwe inganyakazi ngenkathi ibhalwa. Ngaphakathi kwelayer ngayinye izindlela zihamba **ngaphakathi-kuqala** (imgodi ingaphambi kwepuleti eyiyo), eseduze kuqala.

## Buka, bese ulondoloza

Ukubuka kudweba ukuthi ikhanda lenza ini: imigqa eshisayo ngemibala, ukunyakaza okusheshayo ngegrey, kanye nebhokisi eliluhlaza ozungeze konke okushisayo. Ngaphansi kwalo kukhona usayizi, ubude besishisa nesilinganiso sesikhathi (ngaphandle kokukhawulela; umshini wangempela uthatha isikhathi eside). {{ui:Londoloza i-G-code…}} ibhala i-GRBL laser-mode G-code: `$32=1`, `M4` (noma `M3`) ngamanani S, izinyathelo `G0` no-`G1`, `M5` ekugcineni. X0 Y0 yikhona kwesokunxele esingezansi komsebenzi, ngaphandle uma ukhetha imvelaphi yomdwebo: sethela ziro yomshini wakho lapho. I-G-code ilandela imodi yelaser ye-GRBL okhishwe ngayo; ayikaze ihlolwe kulaser yangempela.

## Thumela kusiphequluli

Ku-Chrome ne-Edge, {{ui:Xhuma…}} ikucela ukuthi ukhethe i-port ye-USB yelaser. Akukho okuxhumayo noma okuthunyelwayo kuze kucindezelwe inkinobho. Cindezela {{ui:Bekela umsebenzi uhlaka}} kuqala: ikhanda lilandela ibhokisi lomsebenzi nge-laser **icishe** (noma ngamandla aphansi owasethayo ukuze ubone) ukuze ubone lapho izoshisa khona. Kuphela-ke {{ui:Thumela umsebenzi}} ivuleka, futhi iyavalwa futhi uma ushintsha noma yini. {{ui:Misa}} imisa ikhanda, {{ui:Misa}} yona iyalimisa, isethe kabusha umlawuli (i-laser iyacisha) bese ithumela `M5`. Lapho i-Web Serial ingekho (i-Firefox, i-Safari, ne-CadCraft Studio, enegubhu lewebhu elingenayo okwamanje), londoloza i-G-code bese uyithumela ngohlelo lwelaser lakho.

## Akukakwakhiwa

Ezinye izifomethi zabalawuli (Ruida, ama-laser e-Marlin, amafayela abakhiqizi), amathebhu nokuhola, ukuphambuka kwe-kerf, imitapo yezinto, ama-eksisi ajikelezayo nama-Z, ukuhlanganisa ngekhamera.
