---
title: Pekplatta, touch och små skärmar
summary: Så vrider, panorerar och zoomar du med en pekplatta på Mac eller bärbar dator, vad som fungerar på en touchskärm och vad som fortfarande kräver tangentbord, och hur skärmen ordnas om på en telefon eller ett smalt fönster.
keywords: pekplatta, touchpad, magic mouse, mac, touch, surfplatta, ipad, telefon, nyp, två fingrar, högerklick, sekundärklick, gester, liten skärm, mobil
from: 0e764fd8
---

PartCraft är gjort för en mus med hjul och en mittknapp, men en pekplatta fungerar bra när du känner till gesterna, och en touchskärm fungerar för att titta på delar och göra enkla skisser.

## Pekplatta

:::mac
| För att | Gör så här |
|---|---|
| Vrida delen (3D) | Klicka och dra med ett finger (eller dra med tre fingrar, om du slagit på dra med tre fingrar) |
| Panorera (3D) | Håll {{key:Shift}} (eller ⌘) och klicka-dra, eller klicka-dra med två fingrar nedtryckta (ett sekundärklick-drag) |
| Vrida delen, med svep | Svep med två fingrar; med {{key:Shift}} panorerar svepet. Kräver att **Rullning** står på "Räkna ut" (start) eller "Pekplatta" |
| Zooma (3D och skiss) | Nyp. Zoomen går mot pekaren. Med **Rullning** på "Mushjul" zoomar även en tvåfingerrullning |
| Högerklick | Klicka med två fingrar, eller {{key:Ctrl}}+klick |
| Panorera i en skiss | Svep med två fingrar ("Räkna ut" eller "Pekplatta"), eller klicka-dra med två fingrar nedtryckta. {{key:Shift}}+drag panorerar inte i en skiss (det ritar ett markeringsfönster) |
| Lägg till i ett urval i en skiss | {{key:Shift}}+klick eller ⌘+klick |

Slå på sekundärklick i **Systeminställningar, Trackpad, Peka och klicka** om tvåfingerklick inte gör något.
:::

:::windows linux
| För att | Gör så här |
|---|---|
| Vrida delen (3D) | Tryck på pekplattan (eller tryck och håll) och dra |
| Panorera (3D) | Håll {{key:Shift}} eller {{key:Ctrl}} och dra, eller dra med högerknappens område nedtryckt |
| Vrida delen, med svep | Svep med två fingrar; med {{key:Shift}} panorerar svepet. Kräver att **Rullning** står på "Räkna ut" (start) eller "Pekplatta" |
| Zooma (3D och skiss) | Nyp där pekplattan stöder det. Zoomen går mot pekaren. Med **Rullning** på "Mushjul" zoomar en tvåfingerrullning |
| Högerklick | Tryck med två fingrar, eller nedre högra hörnet på pekplattan |
| Panorera i en skiss | Svep med två fingrar ("Räkna ut" eller "Pekplatta"), eller dra med högerknappens område nedtryckt. {{key:Shift}}+drag panorerar inte i en skiss |
| Lägg till i ett urval i en skiss | {{key:Shift}}+klick eller {{key:Ctrl}}+klick |
:::

**Rullning** finns i [PartCraft-inställningar](topic:settings): "Räkna ut" (start) behandlar sidledes eller finkornig rullning som en pekplatta, "Pekplatta" gör alltid det, "Mushjul" gör det aldrig. En nypning zoomar i alla tre.

Piltangenterna vrider 3D-vyn och {{key:Shift}} med piltangenterna panorerar, när du har klickat i vyn: bra på en pekplatta. {{key:Plus}} och {{key:Minus}} zoomar.

## Touchskärmar

PartCraft läser touchindata, så surfplattor, touchbärbara datorer och telefoner fungerar, med begränsningar.

:::touch
**Touchtangenter**

När du rör vid skärmen visas en liten rad nere till höger i vyn med de tangenter ett finger saknar. Den försvinner när du använder en mus.

- {{ui:Esc}}: Esc-tangenten. Den avbryter det du började eller går ett steg tillbaka, precis som tangenten gör.
- {{ui:Lägg till}} (i en skiss, med Markera): medan den är på lägger varje tryck till ett objekt i urvalet eller tar bort det, som {{key:Shift}}+klick. Tryck igen för att gå tillbaka till ett objekt i taget.
- {{ui:Klar}} (medan du ritar en linjekedja, en spline eller en polygon): avslutar den, som ett högerklick.

Att hålla ett finger stilla i ungefär en halv sekund gör detsamma för ett tryck: med ett ritverktyg avslutar det det du ritar, och med Markera lägger det objektet under fingret till urvalet eller tar bort det. Punkter och linjer är lättare att träffa med ett finger: PartCraft tittar ungefär dubbelt så långt runt ett tryck som runt ett klick.

**I 3D-vyn**

- Ett finger: vrid delen.
- Två fingrar: nyp för att zooma, rör dem tillsammans för att panorera.
- Tryck: välj en yta, en kant eller ett plan. Det finns ingen markering vid hovring innan du trycker.

**I en skiss**

- Tryck med ett ritverktyg för att placera varje punkt: tryck på starten, tryck sedan på slutet. Fångsten sker där du lyfter fingret.
- Två fingrar nyper och panorerar. Att sätta ner ett andra finger avbryter ett drag som det första fingret började.
- För att avsluta en linjekedja: tryck på {{ui:Klar}}, håll fingret stilla, eller tryck på {{ui:Linje}} igen (eller ett annat verktyg) i verktygsfältet.
- Med Markera: tryck för att markera; dra en punkt eller linje för att flytta den; dra på tomt utrymme för ett fönster. Ett andra tryck ersätter urvalet om inte {{ui:Lägg till}} är på (eller du håller fingret stilla på det andra objektet).
- För att ändra ett mått: använd **Redigera** bredvid det i högerpanelen.

**Ritbladet**

Tryck för att placera och markera symboler, och dra en symbol för att flytta den. Nyp för att zooma, flytta två fingrar för att panorera, eller dra ett finger över tomt papper. Ett andra finger stoppar en symbol du drog i, och den går tillbaka.

**Det som fortfarande kräver tangentbord**

- Att skriva in siffror: skärmtangentbordet visas i sifferrutor och måttfält.
- Tangentbordsgenvägar för verktyg: använd verktygsfältet.
:::

## Små skärmar och telefoner

- Vid 1280 pixlar eller bredare får verktygsfältet plats på en rad.
- Mellan cirka 760 och 1100 pixlar blir sidopanelerna smalare.
- Under cirka 760 pixlar (en telefon, eller ett smalt fönster) staplas skärmen: verktygsfältet (svep det åt sidan för fler knappar), 3D-vyn, statusfältet, sedan egenskapspanelen och historiken. Rulla sidan för att nå panelerna.
- Menyer ({{ui:Exportera}}, {{ui:Vyer}}) öppnas över hela skärmens bredd.

:::note
På iPhone finns inget helskärmsläge i webbläsaren; {{key:Ctrl+Shift+F}} och knappen för skärmläge växlar bara mellan normalt läge och läget med dolda rader.
:::

En telefon duger för att öppna en del, vrida den och kontrollera dess fakta. Riktig modellering kräver en större skärm och en mus eller pekplatta.

## Webbläsare

Aktuella versioner av Chrome, Edge, Firefox och Safari kör PartCraft på Windows, macOS och Linux, och på surfplattor och telefoner, så länge WebGL och WebAssembly finns. Se [Webbläsare och datorer](common:browsers).
