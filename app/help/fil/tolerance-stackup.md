---
title: Mga tolerance stack-up
summary: Pumili ng chain ng face sa mga piyesa ng isang assembly at tingnan kung gaano kalaki ang maaaring magbago ng gap sa dulo nito, worst case at RSS, na may pinakamahalagang dimensyon na nasa itaas.
keywords: tolerance stack-up, stackup, pagsusuri ng tolerance, chain ng tolerance, chain ng dimensyon, loop, gap, clearance, worst case, rss, root sum square, statistical tolerancing, mga nag-aambag, sensitivity, gd&t, general tolerance, iso 2768
from: cbdb3159
---

Ang **stack-up** ay nagdadagdag ng mga dimensyon sa kahabaan ng chain sa iba't ibang piyesa para makita kung gaano kalaki ang maaaring magbago ng resulta, kadalasang gap, kapag bawat piyesa ay ginawa saanmang bahagi sa loob ng tolerance nito.

## Piliin ang chain

1. Magbukas ng assembly at piliin ang {{ui:Stack-up}} sa Assembly group. Bubukas ang isang card sa ibabaw ng view.
2. Piliin kung ano ang sinusukat **kasama**: X, Y o Z ng assembly, o {{ui:The first face's normal}}.
3. Pindutin ang {{ui:Pick the chain}} at i-click ang mga face na dinadaanan ng chain, **ayon sa pagkakasunod**: magsimula sa isang gilid ng gap, dumaan sa mga piyesa, at magtapos sa kabilang gilid ng gap.
4. Pindutin ang {{ui:Done}} o Enter. Ibinabalik ng Backspace ang huling click; kinakansela ito ng Esc.

Ang dalawang click sa iisang piyesa ay gumagawa ng dimensyon ng piyesang iyon (ang distansya nito sa kahabaan ng chain). Ang click sa ibang piyesa ay gumagawa ng **interface** sa pagitan nila, kung saan nagtatagpo ang mga piyesa; wala itong tolerance maliban kung mag-type ka ng isa. Nagdaragdag o nag-aalis ng halaga ang mga link ayon sa direksyon ng chain, at isinasara nila ang loop: ang nominal gap ang ipinapakita ng modelo.

Maaari ka ring {{ui:Add a link}} nang manu-mano at i-type ang nominal nito, ang tolerance nito, at kung dinadagdag (+) o inaalis (−) ito.

## Bigyan ng tolerance ang bawat link

Bawat link ay may **upper** at **lower** na deviation (halimbawa +0.1 at −0.05). Pinupunan ito ng **Tolerance from** mula sa piyesa:

- **General tolerance**: ang field na Tolerance ng title block ng piyesa (tingnan ang [Drawing sa PDF](topic:drawing-pdf)), kapag binabasa nito ang ±0.1, +0.2/-0.1 o ISO 2768-f, -m, -c o -v (linear tolerances ng ISO 2768-1, ayon sa laki ng link). Agad ginagamit ang pangkalahatang tolerance ng piyesa kapag napili ang chain.
- **GD&T**: anumang feature control frame sa drawing ng piyesa. Ang position, profile at runout zones ay nagbibigay ng ± kalahati ng tolerance. Karaniwang nasa loob na ng size tolerance ang orientation o form tolerance: idagdag lang ito kung saan humahawak ang chain sa kinokontrol na surface. Kapag may Ⓜ o Ⓛ, kinukuha ang zone sa nakasaad nitong laki; hindi binibilang ang bonus tolerance.
- **Typed**: anumang numerong i-type mo.

## Basahin ang mga resulta

- **Gap, nominal** at, kapag hindi pantay ang mga tolerance, **Gap, mean**: ang +0.2/−0 at +0/−0.1 ay nagpapagalaw sa gitna ng saklaw.
- **Worst case**: bawat tolerance ay nasa limit nito nang sabay. Hindi kailanman lalampas ang gap sa halagang ito.
- **RSS** (root sum square): bawat tolerance ay itinuturing na tatlong standard deviation ng normal na pagkalat, at dinadagdag bilang square root ng kabuuan ng mga parisukat nila. Karamihan sa mga assembly ay nasa loob ng worst case; ito ang karaniwang tantiya para sa mga piyesang ginagawa nang maramihan.
- Ibigay ang **Gap at least** at **Gap at most** para makita kung palaging nananatili sa loob ang worst case, at ilang assembly sa isang milyon ang inaasahan ng RSS na nasa labas.
- Niraranggo ng column na **#** ang mga link ayon sa **share** nila sa RSS: higpitan ang unang mga ito para sa pinakamalaking pagbabago.

{{ui:Save CSV}} ay nagsusulat ng mga link, ang kanilang share at ang mga resulta. Naka-save ang mga stack-up sa assembly file, at bawat pagbabago ay isang hakbang para sa {{key:Mod+Z}}.

:::note
Isang direksyon lang ang stack-up. Hindi nito sinusundan ang mga anggulo o pagliko sa kahabaan ng chain, at hindi nito binabasa ang size tolerances mula sa mga sketch: ibigay ang mga iyon bilang typed tolerances o sa pamamagitan ng title block.
:::
