---
title: Baguhin ang part sa pamamagitan ng history nito
summary: I-edit ang feature at sketch pagkatapos gawin, i-suppress, i-rollback, magpasok ng feature sa unahan, i-reorder, palitan ang pangalan at burahin, at i-undo ang alinman dito.
keywords: history, feature tree, design tree, i-edit ang feature, i-edit ang sketch, suppress, unsuppress, rollback, ibalik, roll forward, i-reorder, ilipat ang feature, burahin, palitan ang pangalan, undo, redo, rebuild, regenerate, magulang anak, malaking part, maraming feature, mabagal na rebuild, 750 feature
from: 6f75aef4
---

Ang part sa PartCraft ay ang history nito: ang listahan ng mga plane, sketch at feature sa kaliwa. Muling bino-build ng PartCraft ang solid mula sa itaas ng listahang ito tuwing may magbabago. Ang pagbabago ng numero sa unahan ng listahan ay nakaaapekto sa lahat ng nakabatay dito.

## I-edit ang feature

1. I-click ang feature sa history (o ang sketch na naka-indent sa ilalim nito).
2. Baguhin ang mga setting nito sa kanang panel. Agad na nire-rebuild sa bawat pagbabago.

Walang OK o Kanselahin: agad na ina-apply ang bawat pagbabago. Kung hindi mo ito gusto, pindutin ang {{key:Mod+Z}}.

## Baguhin kung aling edge o face ang gamit ng fillet, chamfer o shell

I-double-click ang feature sa history, o piliin ito at piliin ang {{ui:Pumili ng mga edge}} (o {{ui:Pumili ng mga face}}). I-click ang mga edge o face para idagdag o alisin ang mga ito, saka {{ui:Tapos}} o {{key:Esc}}. Tingnan ang [Round, bevel at hollow](topic:fillet-chamfer-shell).

## I-edit ang sketch

1. I-double-click ang sketch sa history, o piliin ito at piliin ang {{ui:I-edit ang sketch}} sa kanang panel (o {{ui:Sketch}} sa toolbar).
2. Bumabalik ang part sa itsura nito noong ginawa ang sketch: nakatago ang mga feature pagkatapos nito habang nag-e-edit ka.
3. Baguhin ang geometry, relations o dimensions.
4. Isara ang sketch. Muling bino-build ang buong part kasama ang pagbabago.

Kung size lang ang babaguhin, hindi mo kailangang buksan ang sketch. Piliin ang feature o ang sketch at baguhin ang numero sa ilalim ng **Sketch dimensions** (o **Driving dimensions**) sa kanang panel. Tingnan ang [Baguhin ang mga sukat nang hindi binubuksan ang sketch](topic:change-sizes).

## Kapag nabigo ang isang feature

Kung ang isang pagbabago ay nagiging imposible ang feature, bino-build ng PartCraft ang lahat ng iba pa at minamarkahan ang problema:

- lalabas na **⚠ error** ang feature sa history, at nasa itaas ng kanang panel nito ang mensahe (i-hover din ang row para mabasa ito);
- ang mga feature na nangangailangan nito ay magpapakitang **⚠ not built**, na may "Kailangan ng Extrude2, na nabibigo.";
- ang chip sa status bar ay magsasabing "1 feature ang nabibigo".

Ayusin ang sanhi (o i-undo), at muling bubuuin ang part. Ang mga karaniwang mensahe at ang dapat gawin ay nasa [Troubleshooting](topic:troubleshooting).

## I-suppress ang feature

Ang pag-suppress ay pinapatay ang feature nang hindi ito binubura: kapaki-pakinabang para subukan ang part nang walang butas o pattern.

1. Piliin ang feature.
2. Piliin ang {{ui:Suppress}}. Magpapakitang **off** ang row nito. Hindi rin bino-build ang mga feature na nangangailangan nito.
3. Piliin ang {{ui:Unsuppress}} para ibalik ito sa on.

## Ibalik sa dating estado (rollback)

Ang rollback ay bumubuo lang sa part hanggang sa isang punto, para makita mo ito sa dating itsura, o makapagdagdag ng feature sa unahan ng history.

1. Piliin ang feature at piliin ang {{ui:Ibalik dito}}. Ang feature na iyon at ang lahat ng nasa ibaba nito ay mao-gray at hindi bino-build. May markang row na **Rollback bar · roll forward** sa lugar na iyon.
2. Anumang feature na idadagdag mo ngayon ay ilalagay **sa bar**, bago ang mga naka-gray.
3. I-click ang **Rollback bar · roll forward** para muling buuin ang lahat.

Naka-save sa file ang posisyon ng rollback.

## I-reorder ang mga feature

1. Piliin ang feature.
2. Piliin ang {{ui:Ilipat pataas}} o {{ui:Ilipat pababa}}, o kung naka-focus ang row nito sa history, pindutin ang {{key:Alt+Up}} o {{key:Alt+Down}}.

Hindi kailanman makakalipat ang feature sa itaas ng bagay na ginagamit nito. Naka-gray ang button, at kapag itinapat mo rito ang mouse (o sinubukan ang key), ipinaliliwanag ang dahilan, halimbawa: "Gumagamit ang Extrude2 ng Sketch2, kaya dapat mauna ang Sketch2."

Ang ginagamit ng feature: ang sketch nito; ang face kung saan nakapatong ang sketch nito; ang mga feature na kinokopya ng pattern o mirror; ang sketch line o revolve na ginagamit bilang direksyon o axis.

## Burahin ang feature

1. Piliin ang feature at piliin ang {{ui:Burahin}} sa kanang panel o sa toolbar, o pindutin ang {{key:Delete}}.
2. Kung may ibang feature na gumagamit nito, magtatanong ang PartCraft: "Ginagamit ng Extrude3, Hole1 ang Extrude1 at buburahin din ang mga iyon." Piliin ang {{ui:Burahin lahat}} o {{ui:Kanselahin}}.

Ang pagbura ng feature ay hindi bumubura sa sketch nito: lalabas muli ang sketch sa view bilang hindi nagagamit na sketch, handa para sa ibang feature. Burahin nang hiwalay ang sketch kung hindi mo na ito kailangan.

## Palitan ang pangalan

Piliin ang feature at i-type ang bagong **Pangalan** sa ibaba ng kanang panel (hanggang 60 character). Nasa kanang panel ang sariling pangalan ng part kapag walang napili.

## Mga part na may daan-daang feature

Ang part na may daan-daang feature ay sinubukan sa 750. Itinatago ng PartCraft ang solid na mayroon ito sa kalagitnaan ng history, kaya ang pagbabagong ginawa sa huli ng history ay bumubuo lamang sa mga feature pagkatapos nito; ang pagbabagong malapit sa itaas ay muling bumubuo sa lahat ng nakabatay dito, at ito ang pinakamatagal. Ang undo at redo ay bumubuo lamang mula sa punto kung saan nagkakaiba ang dalawang estado. Para mas mabilis magtrabaho sa malaking part, i-rollback hanggang sa kinaroroonan mo (tingnan ang Ibalik sa dating estado sa itaas) o i-suppress ang hindi mo pa kailangan. Ilang cut at boss na hindi nagdidikit sa isa't isa ay sabay na ina-apply, kaya mas mabilis mabuo ang part na may maraming hiwalay na butas at boss kaysa sa bilang ng feature na ipinahihiwatig.

Ang malaking part ay muling binubuo sa background: ipinapakita ng build chip sa ibaba ang **Muling binubuo…** kasama kung gaano na ito kalayo, at patuloy na gumagana ang view, mga panel at menu habang tumatakbo ito. Ang part sa screen ay ang huling nabuo hanggang handa ang bago. Kung may babaguhin ka muli habang nire-rebuild, bubuuin ng PartCraft ang pinakabagong bersyon at itatapon ang kasalukuyang ginagawa. Agad pa ring nire-rebuild ang maliit na part.

## I-undo at i-redo

- {{key:Mod+Z}} o {{ui:I-undo}} ang nag-u-undo sa huling pagbabago: feature, setting, pag-edit ng sketch, drag. Sinasabi ng status bar kung ano, halimbawa "Na-undo ang pagbabago ng dimension."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} o {{ui:I-redo}} ang nag-re-redo nito.
- Tinatandaan ng PartCraft ang huling 200 hakbang (ang part na sobrang laki para sa 200 kopya ay gumagamit ng maraming memory kaya mas kaunti ang tinatandaan, pero hindi kailanman mas mababa sa pinakabagong 20). Kasama sa parehong listahan ang mga pagbabago sa drawing sheet (section, GD&T symbol na nailipat). Ang pagbubukas ng file o pagsisimula ng bagong part ay nagbubura nito.

:::mac
Sa Mac, gamitin ang ⇧⌘Z para mag-redo. Sa Safari, maaaring buksan ng ⌘Y ang history ng browser.
:::
