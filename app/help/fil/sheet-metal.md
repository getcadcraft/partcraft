---
title: Sheet metal: flanges at ang flat pattern
summary: Simulan ang sheet metal na piyesa mula sa sketch (patag na plato o baluktot na profile), itakda minsan ang kapal, bend radius at K-factor, i-bend ang mga flange pataas mula sa mga gilid nito na may bend relief, at ilatag ito nang patag bilang DXF para sa pagputol.
keywords: flat pattern, unfold, development, developed length, bend allowance, bend line, dxf para sa laser, laser cutting, sheet metal, base flange, edge flange, flange, bend, bend radius, k-factor, k factor, kapal, gauge, relief, bend relief, channel, bracket, enclosure, baluktot na sheet
from: 144bd0f6
---

:::note
**Hindi pa nabubuo sa bersyong ito.** Kailangan ng sheet metal ng exact geometry kernel, na wala sa bersyong ito ng PartCraft: bumubuo ito ng bawat piyesa gamit ang mesh kernel. Sinasabi ng [Ano ang hindi pa nabubuo](topic:not-built-yet) kung ano ang gagawin sa halip. Inilalarawan ng natitirang pahina ito ayon sa paggana nito sa exact kernel.
:::

Nagsisimula ang sheet metal na piyesa sa **Base flange**. Itinatakda nito ang sheet para sa buong piyesa: ang **kapal** nito, ang **inside bend radius** at ang **K-factor**. Bumabaluktot ang bawat **Edge flange** pagkatapos nito gamit ang parehong mga numerong iyon, kaya nananatiling isang sheet ang piyesa na maaaring i-unfold. Kailangan ng dalawa ang **exact kernel** (tingnan ang [The mesh kernel](topic:solid-kernels)).

## Magsimula sa base flange

1. Gumuhit ng sketch. Gumamit ng **saradong profile** para sa patag na plato (rectangle, o anumang saradong balangkas na may butas). Gumamit ng **isang bukas na chain ng linya** para sa baluktot na sheet, gaya ng L, U o Z na iginuhit bilang edge view ng sheet.
2. Piliin ang sketch sa feature history.
3. Buksan ang {{ui:More}} sa grupong Features at piliin ang {{ui:Base flange}}.

Sa panel sa kanan:

- **Kapal (mm)** ang gauge ng sheet.
- **Radius ng bend (mm)** ang inside radius ng bawat bend. Ang 0 ay nagbibigay ng matalas na inside corner; lumiliko pa rin ang outside na may radius na isang kapal.
- **K-factor** ang nagsasabi kung nasaan ang neutral layer sa loob ng sheet, mula 0 (ang inside face) hanggang 0.5 (ang gitna). Tinutukoy nito kung gaano kahaba ang sheet kapag nakalatag nang patag. Ang 0.44 ang default; maibibigay ng iyong shop o supplier ng materyal ang sa kanila.
- **Lalim (mm)** ang gaano kalayo tumatakbo ang baluktot na profile palabas sa sketch plane. Hindi ito pinapansin ng plato.
- **Kapal sa labas ng mga bend**: ang bukas na profile ay isang face ng sheet. Bilang default, nasa inside ng unang bend ang kapal, kaya ang mga linyang iginuhit mo ay ang outside ng channel. Lagyan ng tsek ito para ilagay ang mga linya sa inside. Pareho ang sagot anuman ang dulong pinagmulan ng pagguhit.

Bawat sulok ng bukas na chain ay nagiging bend. Sasabihin ng linyang masyadong maikli para hawakan ang mga bend nito kung gaano kahaba ang kailangan nito.

## Mag-bend ng edge flange

1. I-click ang tuwid na edge ng top o bottom face ng sheet (ang mahahabang edge, hindi ang manipis).
2. Piliin ang {{ui:More}} › {{ui:Edge flange}}. Kapag walang napiling edge, hihintayin ng PartCraft na mag-click ka ng isa; kakanselahin ito ng Esc.

Bumabaluktot paitaas ang flange mula sa face ng edge na iyon sa paligid ng inside radius ng sheet, pagkatapos ay tumatakbo nang tuwid. Sa panel:

- **Angle (°)** ang gaano kalaki ang bend, mula 1 hanggang 180. Ang 90 ay square flange.
- **Length (mm)** ang tuwid na binti pagkatapos ng bend.
- **Bend the other way** ay bumabaluktot mula sa kabilang face (pababa sa halip na pataas).
- **Offset at the start** at **Offset at the end** ay nagpapaikli sa flange mula sa bawat dulo ng edge.
- **Bend relief**: kapag may offset ang isang dulo, may puwang na hihiwain sa sheet sa tabi nito para hindi mapunit ng bend ang metal doon. Itinatakda ng **Relief width** ang lapad ng puwang; ang lalim nito ay ang bend radius plus ang kapal. Piliin ang **None** para iwanang hindi nahiwa ang sulok.

Para baguhin ang edge sa susunod, pindutin ang {{ui:Pick}} sa panel at i-click ang isa pa.

:::tip
Gumamit ng parameter para sa kapal at radius (tingnan ang [Parameters at equations](topic:parameters)) para ma-update ng pagbabago ng gauge ang bawat flange nang sabay-sabay.
:::

## Ilatag nang patag

Parehong nagtatapos ang mga panel sa **Flat pattern**. Pindutin ang {{ui:Lay flat}}:

- Nagpapakita ang preview ng sheet na naka-unfold, na may putol na linya ang centre line ng bawat bend.
- **Size** at **Area** ang sa flat blank.
- Nakalista ang bawat bend kasama ang direksyon nito (**up** o **down**, tingnan mula sa sketch side ng base flange), anggulo at inside radius.

Bawat bend ay kumukuha ng haba ng neutral layer ng sheet sa pagdaan nito, ang **bend allowance**: anggulo (sa radian) × (inside radius + K-factor × kapal). Kaya ang 90° na bend ng 2 mm na sheet na may 2 mm radius at K-factor na 0.44 ay nagdaragdag ng 4.52 mm ng flat na sheet.

Sa patag na plato, ang mga butas, hiwa at bend relief ay makikita sa flat kung nasaan talaga sila, kasama ang mga butas na dumadaan sa flange.

Para mag-cut ng marami, pindutin ang {{ui:Nest on sheets…}} sa ilalim ng flat pattern: tingnan ang [Mag-nest ng flat na piyesa sa sheets](topic:nest-flat-parts). Ang baluktot na base flange ay nagla-layout bilang isang rectangle: ang developed length nito × ang lalim nito, na may bend line bawat sulok.

{{ui:Save DXF}} ay nagse-save ng flat pattern para sa laser, punch o waterjet, sa millimetro:

- ang outline sa layer na **OUTLINE**, bilang linya, arko at bilog;
- ang bend line sa layer na **BEND**, putol-putol;
- isang tala sa bawat bend sa layer na **BEND_NOTES**, gaya ng "UP 90° R2".

Kapag may binago ka, mawawala ang flat; pindutin ulit ang {{ui:Lay flat}} para sa bago.

:::note
I-check ang K-factor kasama ng shop mo bago mag-cut: nakadepende rito ang haba ng flat, at nag-iiba ito ayon sa materyal, kapal at tooling.
:::

## Mga mensahe

- **Kailangan ng sheet metal ng base flange bago nito** — may idinagdag na edge flange bago ang anumang base flange. Ilipat ito sa ibaba ng isa, o magdagdag muna ng base flange.
- **Kailangan ng edge flange ng tuwid na edge** — bumabaluktot ang mga flange sa mga linya lamang; hindi pa kayang tanggapin ng mga curved edge ang isa.
- **Hindi nasa face ng kapal ng sheet ang edge na iyon** — nasa face na hindi top o bottom ng sheet ang edge (halimbawa ang pader ng butas). Pumili ng edge ng top o bottom face.
- **Walang iniwan ang mga offset sa edge** — ang dalawang offset ay nagdaragdag sa buong edge o higit pa.
- **Hindi pa maaaring ilatag nang patag ang mga edge flange sa baluktot na base flange** — magsimula sa patag na plato at i-bend ang lahat paitaas gamit ang edge flange, na nag-u-unfold.
- **Hindi pa ipinapakita sa flat nito ang mga hiwa at butas na ginawa pagkatapos ng baluktot na base flange** — ang flat ng baluktot na profile ay ang developed rectangle lamang nito.
