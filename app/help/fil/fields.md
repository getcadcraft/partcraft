---
title: Mga field: mga hugis bilang distansya
summary: Ano ang field (hugis na nakaimbak bilang distansya sa surface nito), paano ito bubuuin mula sa primitive, boolean, lattice at minimal surface sa script, paano ito nagiging katawan, at bakit palaging pareho ang bytes ng parehong script.
keywords: field, signed distance, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, deterministiko, watertight, manifold, brick
from: faab7480
---

Inilalarawan ng **field** ang isang hugis sa pamamagitan ng distansya mula sa anumang punto papunta sa surface nito: negatibo sa loob, zero sa surface, positibo sa labas. Ang sphere na may radius 5 ay ang "distansya sa sentro na binawasan ng 5". Ang pagsasama ng mga hugis ay aritmetika sa mga distansya: ang union ay ang mas maliit sa dalawa, ang intersection ang mas malaki, at ang pagbawas ng isang hugis sa isa pa ay ang mas malaki sa una at minus ang ikalawa. Ang pagpapalaki ng hugis ng 1 mm ay nagbabawas ng 1 sa distansya; ang guwang na pader ay ang distansya, na tinupi pabalik.

Kaya magaling ang field para sa lattice, channel at unti-unting pader: ang surface ng gyroid ay "ang sine sum ay zero", at ang pader na lumalapot mula 1 hanggang 3 mm sa buong piyesa ay isang numerong nagbabago sa buong piyesa.

## Mula field patungong katawan

`to_body(field, h)` ay kumukuha ng sample ng field sa grid ng mga punto na `h` millimetro ang layo sa isa't isa, tinatanggap lang ang mga punto malapit sa surface (isang sparse grid ng 8 × 8 × 8 brick), at binubuo ang surface sa pamamagitan ng **dual contouring**: isang vertex bawat surface cell, nakalagay kung saan nagtatagpo ang mga eroplano ng surface, kaya nananatiling matalas ang matalas na edge sa loob ng isang voxel. Sarado ang surface at bawat edge ay pinagsasaluhan ng eksaktong dalawang triangle; sinasabi ito ng report. Ang feature na mas manipis sa humigit-kumulang tatlong voxel ay maaaring kumurot, at kapag nangyari iyon, sinasabi ng report na hindi ito saradong solid sa halip na itago ito.

Ang laki ng voxel ang katumpakan: ang volume ng sphere na 25 voxel ang lapad ay nasa loob ng ilang sandaang bahagi ng isang porsyento; ang pader ay kasing-tama lang ng mga voxel nito. Mas magaspang ang grid, mas mabilis ito.

## Palaging pareho ang bytes

Walang orasan at walang random na numero ang field. Ang sine at cosine ng gyroid, at bawat exponential, logarithm at power sa library, ay kinukuwenta mula sa payak na aritmetika para magbigay ng parehong bits ang Node, Chrome, Firefox at Safari; ang grid ay dinadaanan sa nakapirming pagkakasunod-sunod, kaya ang parehong script na may parehong input ay nagbibigay ng magkaparehong-byte na mesh at data sheet, sa anumang kompyuter at sa anumang bilang ng worker thread. Nasubok ito, kasama ang browser laban sa Node.

## Saan pupunta sa susunod

[Sumulat ng generator](topic:write-a-generator) ay bumubuo ng piyesa gamit ang mga field; sinusukat ito ng [Ang engineering library](topic:engineering-library).
