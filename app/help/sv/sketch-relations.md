---
title: Skissvillkor och mått
summary: Varje villkor och mått en PartCraft-skiss har, vad du ska markera för varje, dess symbol och hur det beter sig vid lösning.
keywords: villkor, relationer, sammanfallande, horisontell, vertikal, parallell, vinkelrät, tangent, lika, koncentrisk, mittpunkt, fixera, avstånd, horisontellt avstånd, vertikalt avstånd, radie, diameter, vinkel, symboler, glyfer
from: 9831e7be
---

Villkor låser hur geometri ligger i förhållande till annan geometri. Mått låser storlekar. För att lägga till ett villkor markerar du objekt med verktyget Markera ({{key:S}}) och väljer dess knapp i högerpanelen; för att lägga till ett mått använder du måttverktyget ({{key:D}}) eller måttknapparna i högerpanelen. Så arbetar du med dem: [Definiera en skiss fullt ut](topic:relations-dimensions).

”Kurva” nedan betyder en cirkel eller en båge. Origo räknas som en punkt.

## Villkor

| Knapp | Symbol | Markera | Effekt |
|---|---|---|---|
| {{ui:• Sammanfallande}} | • (visas bara när den är markerad eller när något är fel) | Två punkter | Punkterna möts |
| {{ui:• Sammanfallande}} | • | En punkt och en linje | Punkten ligger på linjen (eller dess förlängning) |
| {{ui:• Sammanfallande}} | • | En punkt och en kurva | Punkten ligger på cirkeln eller bågen |
| {{ui:H Horisontell}} | H | En linje, eller två punkter | Linjen är horisontell, eller de två punkterna ligger på samma höjd |
| {{ui:V Vertikal}} | V | En linje, eller två punkter | Linjen är vertikal, eller punkterna ligger ovanför varandra |
| {{ui:∥ Parallell}} | ∥ | Två linjer | Linjerna går åt samma håll |
| {{ui:⊥ Vinkelrät}} | ⊥ | Två linjer | Linjerna möts i en rät vinkel |
| {{ui:T Tangent}} | T | En linje och en kurva | Linjen tangerar kurvan utan att korsa den |
| {{ui:T Tangent}} | T | Två kurvor | De tangerar varandra, utifrån eller inifrån, som ritat |
| {{ui:T Tangent}} | T | En spline och en linje, båge eller spline som möter en av dess ändar | Splinen lämnar den änden i den andra kurvans riktning |
| {{ui:= Lika}} | = | Två linjer | Samma längd |
| {{ui:= Lika}} | = | Två kurvor | Samma radie |
| {{ui:◎ Koncentrisk}} | ◎ | Två kurvor | Samma mittpunkt |
| {{ui:◎ Koncentrisk}} | ◎ | En punkt och en kurva | Punkten sitter i kurvans mittpunkt |
| {{ui:M Mittpunkt}} | M | En punkt och en linje | Punkten sitter mitt på linjen |
| {{ui:↔ Symmetrisk}} | ↔ | Två punkter och en linje | Punkterna är spegelbilder av varandra kring linjen ({{ui:Spegla}} lägger till dessa) |
| {{ui:⚓ Fixera}} | ⚓ | En punkt, en linje, en kurva eller en spline | Låser den exakt där den är nu (en spline: dess punkter) |

Linjer här inkluderar centrumlinjer. När du ritar läggs några villkor till åt dig: fångst till en punkt gör den sammanfallande, fångst till en kurva placerar punkten på den, nästan horisontella eller vertikala linjer får H eller V, och ett rektangel kommer med sina fyra hörn sammanfogade, två H och två V.

**Fixera** är ett snabbt sätt att stoppa rörelse, men då kan inte geometrin följa en måttändring någon annanstans. Föredra mått till origo.

## Mått

| Knapp | Markera | Mäter | Visas som |
|---|---|---|---|
| {{ui:Avstånd}} | En linje | Dess längd | Avstånd 40 |
| {{ui:Avstånd}} | Två punkter | Det räta avståndet mellan dem | Avstånd 40 |
| {{ui:Avstånd}} | En punkt och en linje | Avståndet från punkten till linjen, vinkelrätt mot den | Avstånd 40 |
| {{ui:Avstånd}} | Två parallella linjer | Avståndet mellan dem | Avstånd 40 |
| {{ui:Horisontellt avstånd}} | Två punkter, eller en linje | Endast avståndet vänster–höger | Horisontellt avstånd 40 |
| {{ui:Vertikalt avstånd}} | Två punkter, eller en linje | Endast avståndet upp–ner | Vertikalt avstånd 40 |
| {{ui:Radie}} | En cirkel eller båge | Dess radie | Radie R10 |
| {{ui:Diameter}} | En cirkel eller båge | Dess diameter | Diameter ⌀20 |
| {{ui:Vinkel}} | Två linjer som inte är parallella | Vinkeln mellan dem, 0 till 180 grader | Vinkel 30° |

Med måttverktyget väljer PartCraft typ utifrån vad du klickar på och var du placerar talet:

| Du klickar på | Du får |
|---|---|
| En linje | Dess längd; för en sned linje, horisontell om talet placeras ovanför eller under den, vertikal om det placeras åt sidan |
| En cirkel | Diameter |
| En båge | Radie |
| Två punkter | Avstånd; horisontellt eller vertikalt som för en sned linje |
| En punkt och en linje | Avstånd från punkten till linjen |
| Två linjer | Vinkel, eller avståndet om de är parallella |
| En punkt och en cirkel | Inget: ”Dessa objekt kan inte måttsättas tillsammans.” Mät i stället till cirkelns mittpunkt |

**Förskjutning** (visas som avstånd) görs med verktyget {{ui:Förskjut}}: det håller en kopierad linje parallell på det avståndet, eller en kopierad båge eller cirkel koncentrisk med en radie som är lika mycket större eller mindre. De övriga delarna i samma förskjutning får ett **O**-villkor och följer det enda förskjutningsmåttet. Se [Splines, trimma, förskjutning och andra skissverktyg](topic:sketch-tools).

Måttvärden är millimeter (eller grader), aldrig negativa. Radie och diameter måste vara större än noll. Värdet 0 är tillåtet för avstånd: två punkter 0 från varandra är sammanfallande.

## Så beter sig lösningen

- **Minsta rörelse.** När ett värde ändras flyttar lösaren geometrin så lite som möjligt. En linje vars längd ändras växer lika mycket i båda ändar om ingenting håller fast någon av dem.
- **Ingen vändning.** Avstånd från en punkt till en linje, horisontella och vertikala avstånd, vinklar och tangens kommer ihåg vilken sida de skapades på. Att ändra ett värde vänder aldrig geometrin till andra sidan.
- **Konflikter lämnar allt orört.** Om villkor motsäger varandra förblir skissen exakt som den var och de motstridiga villkoren blir röda.
- **Överflödiga villkor** (redan givna av andra) anges i statusfältet (”är redan implicerat. Ta bort det.”) och funktionen byggs ändå, med en varning.
- **Tangentfogar.** Där en rundningsbåge möter sina linjer i en gemensam ändpunkt löses tangensen i en form som förblir väldefinierad där, så att skissrundningar inte tolkas som överdefinierade.

## Finns inte ännu

Kolinjära, koradiella och genomskärningsvillkor; en punkt på en spline; styrda (referens-) mått; koordinat- och bågläng-mått; ekvationer mellan mått. Använd {{ui:Parallell}} plus ett avstånd på 0 för kolinjära linjer.
