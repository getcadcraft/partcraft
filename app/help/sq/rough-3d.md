---
title: Trashja 3D dhe makinimi i mbetjes
summary: Pastro materialin rreth gjithë modelit nivel për nivel me një freza të sheshtë, me hundë të rrumbullakët ose me top, duke lënë material për përfundim, pastaj lër një vegël më të vogël të presë vetëm aty ku e para la material. Çfarë garantojnë shtigjet dhe çfarë nuk garantojnë.
keywords: trashje 3D, trashje, trash, makinim mbetjeje, trashje mbetjeje, material i mbetur, material për t'u lënë, hap në thellësi, nivele, nivel z, vijë uji, rampë, zhytje, gërvishtje, vegël më e vogël
from: 29ddc266
---

Dy operacione në Prodhimi, nën {{ui:Më shumë}} në shiritin e tyre, pastrojnë materialin nga **gjithë modeli** në 3D, me veglën të mbajtur vertikalisht (ose përgjatë [drejtimit të veglës](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) të operacionit). Nuk kërkojnë përzgjedhje.

## Trashja 3D

{{ui:3D i trashë}} punon poshtë nga maja e materialit një **hap në thellësi** në një herë. Në çdo nivel pastron gjithçka që vegla mund ta arrijë pa prekur modelin: rreshta të drejtë larg njëri-tjetrit një **hap anësor** (një pjesë e diametrit të veglës), pastaj një herë rreth skajit të asaj që mund të arrijë, që muret të ndiqen dhe të mos lihen si një rresht shkallësh në plan.

- **Material për t'u lënë**: sa larg mbetet vegla nga modeli kudo, për kalimin e përfundimit (parazgjedhja 0,5 mm).
- **Një nivel në çdo faqe të sheshtë**: një nivel shtesë në lartësinë e çdo faqeje të sheshtë të modelit (plus materiali për t'u lënë), që një dysheme të mos mbetet pothuajse një hap i tërë i lartë.
- **Injoro materialin më të hollë se**: materiali më i hollë se kjo, lart ose anash, nuk vlen një kalim (0,05 mm për trashjen, 0,5 mm për mbetjen, që një fije material e lënë përgjatë një muri të mos e dërgojë veglën më të vogël rreth çdo muri).
- **Fundi**: asgjë nuk pritet nën këtë lartësi. Bosh do të thotë fundi i modelit.

Ai nis nga materiali **siç e lanë operacionet para tij**: pas një kalimi faqeje nuk pret ajrin aty ku ka kaluar frezë e faqes.

Zbritja: aty ku vegla do të takonte material gjatë zbritjes, ajo bën një rampë përgjatë kalimit të vet me **këndin e rampës**, përpara dhe prapa mbi më së shumti dy diametra vegle. Një kalim shumë i shkurtër për atë zhytet drejt poshtë me avancimin e zhytjes; operacioni i numëron dhe paralajmëron, sepse një vegël që nuk pret në qendrën e saj nuk duhet ta bëjë këtë.

## Makinimi i mbetjes

{{ui:Mbetje}} është e njëjta strategji për një **vegël më të vogël pas një më të madhe**. Lexon simulimin e materialit dhe pret vetëm aty ku material është ende në këmbë: qoshe të brendshme ku vegla më e madhe nuk mund të hynte, brazda që nuk i ngjanin, shkallët që la në pjerrësi. Kudo tjetër nuk bën asgjë, kështu që shtegu i tij është një pjesë e vogël e asaj që do të merrte e njëjta vegël mbi material të ri.

Vendose pas operacionit të trashjes dhe zgjidh veglën më të vogël. Ka nevojë për simulimin e materialit të operacioneve para tij, që hapësira e punës e ekzekuton gjithmonë.

## Sa të mira janë shtigjet

- **Pa gërvishtje.** Pozicionet e veglës llogariten në një rrjet, me frezën të marrë pak më të madhe se ç'është (me 1,4 qeliza rrjeti anash, dhe me materialin për t'u lënë), kështu që kudo që qëndron, është e pastër nga modeli. Testet kontrollojnë çdo pikë prerjeje kundrejt veglës së saktë mbi rrjetin e saktë, dhe simulimi i materialit pas çdo ekzekutimi: asnjë gërvishtje, asnjë lëvizje e shpejtë përmes materialit.
- **Çmimi i kësaj**: muret mbajnë pak më shumë se materialin për t'u lënë, deri në shumën e treguar si "Material shtesë në mure" te operacioni (rreth 0,5 mm për një vegël Ø6, më pak për një më të vogël). Kalimi i përfundimit e merr atë.

Çfarë nuk janë këto shtigje:

- Rreshtat janë vija të drejta, jo ofset të formës së pjesës ose kurba me angazhim konstant. Bëjnë më shumë ngritje dhe lëvizje në ajër sesa një strategji ofsetesh ose adaptive, dhe rreshti i parë në çdo nivel pret gjerësinë e plotë të veglës. Për xhepa me dysheme të sheshta, [Adaptiv](topic:manufacture) është trashja më e mirë.
- Bishti dhe mbajtësi i veglës nuk kontrollohen. Një paralajmërim thotë kur prerja është më e thellë se gjatësia e brinjës.
- Nën-prerjet nuk shihen: modeli është ajo që vegla takon duke zbritur përgjatë boshtit të saj. Për të trashur një anë, jep një operacion të dytë një [drejtim të pjerrët të veglës](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Makinimi i mbetjes e njeh materialin vetëm aq sa e njeh rrjeti i simulimit (qeliza 0,1 deri 2 mm, sipas madhësisë së pjesës).
- Në një pjesë të madhe programi është i gjatë (mbi 100 000 lëvizje për një flanxh 200 mm me një vegël Ø6) dhe merr rreth një minutë për t'u llogaritur, dhe çdo ndryshim në hapësirën e punës e llogarit përsëri gjithë programin. Për trashjen përdor vegël sa më të madhe që përshtatet.
- Kontrollo daljen në simulatorin e makinës tënde përpara prerjes.
