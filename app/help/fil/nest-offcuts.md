---
title: Itago at gamitin muli ang offcuts
summary: Pagkatapos ng nest, ang natitira sa bawat plate ay nagiging numbered remnant sa listahan ng stock; ang susunod na nest ay gumagamit muna ng mga remnant, saka ng buong plate.
keywords: nesting, offcut, remnant, stock, natitira, plate, sheet, muling paggamit, materyal, kapal, CSV
from: 7a68d4b8
---

Kapag naglalatag ka ng piyesa sa plates, ang magagamit na natitira sa bawat plate (hindi mga sliver) ay maaaring itago bilang **remnant**: isang numbered outline (R-0001, R-0002 …) kasama ang materyal, kapal, laki nito, at ang job na pinanggalingan nito. Naka-save ang listahan kasama ng file at maaaring i-save bilang CSV.

## Gamitin muli

Ilagay ang **materyal** at **kapal**, iwanang naka-on ang {{ui:Gamitin muna ang mga remnant}}, at ilatag. Sinusubukan muna ang mga remnant ng parehong materyal at kapal, mula sa pinakamaliit; ang mga piyesang kumakasya ay inilalagay sa mga ito, sa loob ng sariling outline ng remnant at malayo sa gilid nito; ang hindi kumakasya ay mapupunta sa mga bagong plate. Sinasabi ng job report kung aling mga remnant ang nagamit at ano ang natira. Kapag naka-on ang {{ui:I-save ang natira bilang remnant}}, isinusulat ng {{ui:Idagdag ang job na ito sa stock}} ito sa listahan ng stock: ang remnant na nagamit ay mamarkahang **Nagamit** (kasama ang job) at hindi na iaalok muli; ang natitira mula rito ay nagiging bagong remnant na nakatala ang pinagmulan nito.

## Ano ang binibilang na remnant

Ang natitira ay sinusukat gamit ang espasyong itinakda mo (walang piyesang mas malapit doon sa anumang putol). Ang mga strip na mas makitid sa isang ikadalawampung bahagi ng plate, at mga piraso na mas maliit sa 2 % nito, ay scrap; baguhin ang parehong limit kung mas maliliit na piraso ang itinatago ng iyong shop. Ang mga butas sa loob ng piyesa ay sa mga piyesa mismo at hindi itinatago. Walang remnant ang roll.

## Sa drawing

Iginuguhit ng DXF ng isang nest ang outline ng bawat remnant sa layer REMNANTS, kasama ang numero nito sa gitna, para mamarkahan ang mga piraso kapag pinutol ang mga ito.

Hindi pa nagagawa: grain direction ng remnant, bar-code o label sheet, mga remnant ng roll, stock na ibinabahagi sa pagitan ng mga proyekto.
