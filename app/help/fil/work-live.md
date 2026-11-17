---
title: I-model ang isang part kasama ang Live TeamWork
summary: Ano ang nagbabago sa PartCraft habang nasa Live TeamWork session ka mula sa CadCraft Studio: lahat ng feature sa iisang tree, bawat window ay bumubuo ng parehong solid, sarili mong undo, at pagsali mula sa browser sa parehong network.
keywords: live, live teamwork, studio live, magkasama, collaborate, session, share live, join, feature tree, history, rebuild, cursor, pointer, makita ang isa't isa, pangalan, kulay, selection, undo, host
from: 1809b96c
---

## Ano ang matututunan mo

Ano ang nangyayari sa isang part habang sabay-sabay itong minomodelo ng ilang tao. Sinisimulan at sinasalihan ng CadCraft Studio ang Live TeamWork session (Share, Join); tungkol sa mismong part ang pahinang ito.

## Lahat ay nagmo-model nang sabay

Lahat ay gumagawa sa iisang feature tree: mga sketch, extrude, butas, pattern, fillet, parameter. Agad lumalabas ang sarili mong mga pag-edit; lumilitaw ang sa ibang tao ilang sandali pagkatapos nilang gawin ang mga ito. Ang tree lang ang naglalakbay: bawat window ay bumubuo ng solid mismo, at ang kernel ng PartCraft ang bumubuo ng parehong solid mula sa parehong tree sa bawat window.

- **Dalawang tao ang nagbago ng iisang feature:** magkaibang setting (isa ang lalim, ang isa ang end condition) ay parehong pinapanatili; ang parehong setting ay mapupunta sa mas huling pagbabago.
- **Ang sketch** ay naglalakbay nang buo: kapag dalawang tao ang nag-edit ng iisang sketch nang sabay, ang mas huling edit ang mananaig. Pag-usapan kung sino ang gumuguhit ng aling sketch.
- **Ang feature na nakabatay sa binurang bagay** (extrude ng tinanggal na sketch, butas sa tinanggal na face) ay binabawi, at sinasabi ng status bar kung bakit.
- **Ang pag-aayos muli ng tree** ay sinusuri: kung dalawang tao ang mag-drag ng feature nang sabay, mababawi ang pangalawang galaw.

## Nakikita ang isa't isa

May sariling kulay ang bawat tao sa session. Nakikita mo ang pointer ng bawat isa bilang arrow sa kanilang kulay na may pangalan sa tabi, sa face na itinuturo nila. Kapag may napiling feature sila sa tree, lumalabas ang pangalan nito pagkatapos ng kanila.

Ang mga pointer, pangalan at pagpili ay para lang sa session: hindi sila nasa-save sa file at hindi napupunta sa undo ng sinuman. Dumudulas sila papunta sa kinaroroonan ng bawat tao, kaya nananatiling maayos ang galaw kahit mabagal ang koneksyon.

## Binabawi ng undo ang sarili mong gawa

Binabawi ng {{key:Mod+Z}} ang huling edit mo lang at hindi ginagalaw ang sa iba. Kapag may nagbago ng parehong bagay mula noon, walang mababawi at sinasabi ng status bar kung sino ang nagbago nito.

## Sumali mula sa browser

Ang teammate na walang Studio ay maaaring i-scan ang larawan sa ilalim ng code ng host gamit ang phone, tablet o computer sa parehong network. Bubukas ang PartCraft sa browser, mapupuno ng part ng host kapag pinapasok ka ng host, at bubuuin ito. Ang invite link ay nagbibigay-daan sa taong sumali mula sa ibang network: kailangan ng host ng Team Cloud Plan seat para sa app, libre ang iba na sumali, at gumagana lang ang link habang bukas ang session ng host.

## Kapag natapos ang session

Ang host lang ang nagsasave ng part. Ang iba ay may hindi naka-save na kopya: i-save ito kung gusto mong itago.

:::note
Hindi pa ibinabahagi sa session ang mga assembly: buksan ang mismong part para magtrabaho rito nang magkasama.
:::
