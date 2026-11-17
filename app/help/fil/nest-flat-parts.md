---
title: Ilatag ang flat na piyesa sa mga sheet
summary: Ilatag ang flat na piyesa sa mga plate o roll nang may pinakakaunting sayang na kayang hanapin ng PartCraft, hindi kailanman mas malapit kaysa sa espasyong ibinigay mo, at i-save ang layout bilang DXF para sa laser, plasma, waterjet o router.
keywords: nesting, ilatag, sheet, plate, roll, laser, plasma, waterjet, router, pagputol, yield, paggamit ng materyal, scrap, basura, espasyo, kerf, grain, direksyon ng rolling, dxf, flat pattern, outlines
from: 8dcce1a6
---

Ang **Nesting** ay naglalagay ng maraming flat na piyesa sa isang sheet para kaunti lang ang materyal na natitira. Inilalagay ng PartCraft ang mga piyesa isa-isa, bawat isa sa pwestong pinakamaikli ang nagamit na haba ng sheet, sumusubok ng ilang pagkakasunod-sunod at natatapos sa loob ng ilang segundo, at itinatago ang pinakamahusay. Puwedeng nakapasok ang mga piyesa sa butas ng isa't isa at sa loob ng L o U.

## Buksan ito

- {{ui:Export}} › {{ui:Ilatag ang flat na parts sa sheets…}} ay binubuksan ito kasama ang flat pattern ng piyesa, o, sa assembly, kasama ang flat pattern ng bawat sheet metal na piyesa, kasing dami ng kopya nito.
- Sa isang sheet metal na piyesa, {{ui:Ilatag nang patag}} at pagkatapos ay {{ui:Nest sa sheets…}} sa ilalim ng flat pattern.
- {{ui:Magdagdag ng outlines mula sa DXF…}} ay nagdaragdag ng bawat saradong outline sa isang DXF file bilang piyesa: isang drawing mula sa CadCraft na na-save bilang DXF, o file mula sa sariling software ng iyong cutter. Ang outline sa loob ng isa pa ay butas dito. Ang mga linya at arko na nagdurugtong dulo sa dulo ay binibilang bilang isang outline. Ang mga file na nasa inches, centimetres o metres ay ginagawang millimetres.

:::note
Ang paglalatag ng sheet metal ay nangangailangan ng exact geometry kernel (tingnan ang [Sheet metal](topic:sheet-metal)). Laging gumagana ang outlines mula sa DXF file.
:::

## Itakda ito

Para sa bawat piyesa, ilagay kung **ilan** ang kailangan mo at ang **grain** nito: {{ui:Anumang direksyon}}, {{ui:Kasabay ng sheet (gaya ng iginuhit)}} para sa brushed o rolled na sheet na dapat tumakbo sa isang direksyon, o {{ui:Pahalang sa sheet}}.

Sa ilalim ng **Sheets**:

- **Stock**: {{ui:Plates}} na may ibinigay na haba at lapad (at kung ilan ang mayroon ka; 0 = kasing dami ng kailangan), o {{ui:Isang roll}} na may ibinigay na lapad, kasing haba ng kailangan.
- **Edge margin** ay pinananatiling bakante sa bawat gilid ng sheet (para sa clamps, o sa sirang gilid).
- **Space between parts** ang pinakamaliit na distansya sa pagitan ng dalawang cut line: hindi bababa sa kerf ng iyong cutter, dagdag pa ang kailangan ng materyal.
- **Turns**: ang mga anggulong puwedeng paikutan ang piyesa, bawat 90° bilang default. Mas mabilis tumakbo ang kaunting turns; mas mahusay gamitin ang sheet ang mas maraming turns.
- **Parts may be flipped** ay nagpapahintulot na ilatag nang nakabaligtad ang piyesa. Iwanang naka-off para sa sheet metal: ang flat pattern na nakabaligtad ay liliko sa kabilang direksyon.

Pindutin ang {{ui:Ilatag}}. Ipinapakita ng preview ang bawat sheet; sinasabi ng mga impormasyon kung ilang plate (o gaano karami ng roll) ang nagamit at gaano karaming materyal ang tinatakpan ng mga piyesa. Pinangalanan ang anumang hindi kumasya.

## I-save ito

{{ui:I-save ang DXF}} ay nagsusulat ng layout bilang DXF (R12, millimetres), isang sheet sa ilalim ng susunod: ang mga outline ng sheet sa layer SHEET, ang mga piyesa sa PARTS (nananatiling arko ang mga arko), at ang pangalan ng bawat piyesa sa LABELS.

:::tip
Karaniwang mas mahusay maglatag ang paghahalo ng ilang piyesa kaysa sa maraming kopya ng iisa: pinupunan ng maliliit na piyesa ang mga puwang sa pagitan ng malalaki.
:::

## Putulin ang mga sheet (G-code)

**Export › Nested sheets sa G-code** ay bumabasa ng nested na DXF (ito, o ang sheets ng Cabinets add-on sa CadCraft) at gumagawa ng isang programa bawat sheet sa pamamagitan ng post na pipiliin mo: unang ang mga butas at cut-out, saka ang mga outline; bawat putol ay nasa labas ng piyesa nang radius ng tool, dumadaan sa sheet at 1 mm pa, may tabs kung hihingin mo ang mga ito. Ang listahan ng post ay ang mga built-in na post at ang sarili ng Manufacture study mo. Suriin ang bawat programa sa simulator bago patakbuhin: hindi ginagawa ang drilling at pockets.

## Ano ang titingnan

Muling sinusuri ng PartCraft ang bawat layout sa totoong hugis (hindi sa grid na hinanap nito): walang dalawang piyesang mas malapit sa espasyo, walang nasa margin. Hindi nito pinaplano ang putol: ang lead-ins, ang pagkakasunod ng pagputol, ang pagputol ng magkakabahaging edge nang isang beses, at ang pag-iingat ng natitirang sheet ay trabaho ng software ng iyong cutter. Suriin doon ang DXF bago putulin.
