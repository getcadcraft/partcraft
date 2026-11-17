---
title: Filetime në boshte dhe vrima, të vizatuara ose të modeluara
summary: Vendosni një filetim metrik ISO ose trapezoidal në çdo sipërfaqe rrethore, bosht ose vrimë. Mbajeni kozmetik për vizatime, ose modeloni filetimin real helikoidal për printim 3D, me një hapësirë që pjesët e printuara të përshtaten.
keywords: filetim, filetime, filetim i modeluar, helikoidal, helikë, vidë, bulon, dado, bosht, vrimë, filetim i jashtëm, filetim i brendshëm, filetim kozmetik, filetim metrik, trapezoidal, acme, vidë udhëheqëse, Tr16x4, M10, printim 3D, printo, hapësirë, përshtatje, dorë e majtë, vrimë e filetuar
from: 4f6401cc
---

{{ui:Filetim}} vendos filetime në sipërfaqet rrethore: jashtë një boshti (filetim i jashtëm) ose brenda një vrime (filetim i brendshëm). PartCraft e kupton cilin nga sipërfaqja.

Një filetim është **kozmetik** në fillim: sipërfaqja mbetet e thjeshtë, pamja e vizaton filetimin si rrathë me pika dhe fleta e vizatimit e shënon, si "M10×1.5 - 6g, filetim 20 i gjatë". Shenjoni **Të modeluar** për të prerë filetimin real helikoidal në pjesë, për printim 3D ose për një model që duhet të duket saktë.

## Filetoni një bosht ose një vrimë

1. Ndërtoni boshtin ose vrimën në madhësinë e filetimit: një bosht Ø10 për një bulon M10, ose një vrimë Ø8.5 (vrima e kërkuar për filetim) për një dado M10.
2. Klikoni sipërfaqen rrethore, pastaj zgjidhni {{ui:Më shumë}} › {{ui:Filetim}}. Pa asnjë sipërfaqe rrethore të zgjedhur, PartCraft ju kërkon të klikoni faqet, pastaj {{ui:U krye}}.
3. Në panelin e djathtë, kontrolloni **Madhësinë**. **Përshtat me sipërfaqen** e zgjedh vetë madhësinë: për një bosht, atë madhësi diametri i së cilës kryesor është i boshtit; për një vrimë, atë diametri i së cilës i vogël përshtatet.

Filetimi fillon te fundi i hapur i sipërfaqes, ku pjesa nuk vazhdon përgjatë boshtit: fundi i lirë i një boshti, goja e një vrime. **Fillo nga skaji tjetër** e kthen këtë.

## Cilësimet

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| **Forma** | Metrik ISO (60°), M1.6 deri M64 të trashë; trapezoidal (Tr, 30°), Tr8×1.5 deri Tr60×9 | Metrik ISO |
| **Madhësia** | Përshtat me sipërfaqen, ose një madhësi nga lista | Përshtat me sipërfaqen |
| **Gjithë sipërfaqja** | Hiqeni për të dhënë një **Gjatësi (mm)**, matur nga fillimi | E shenjuar |
| **Fillo nga skaji tjetër** | Filetimi shkon nga skaji tjetër i sipërfaqes | Joaktiv |
| **Dora** | Dorë e djathtë ose dorë e majtë | Dorë e djathtë |
| **Të modeluar** | Pret filetimin real helikoidal | Joaktiv |
| **Hapësira (mm)** | Shfaqet kur Të modeluar është shenjuar: sa më pak i madh është filetimi i një boshti, dhe sa më i madh i një vrime, rreth e qark | 0.1 |

Një madhësi që nuk i përshtatet sipërfaqes ndërtohet gjithsesi, e prerë sipas sipërfaqes, dhe paneli e thotë, si "Një bosht Ø12 mm nuk është Ø10 mm i M10". Disa sipërfaqe mund të ndajnë një veçori Filetim të vetme; me **Përshtat me sipërfaqen**, secila merr madhësinë e vet.

## Filetime të modeluara për printim 3D

Një filetim i modeluar ndjek profilin bazë standard: ISO 68-1 për filetime metrike (maja dhe rrënjë të sheshta, anë 60°), ISO 2901 për ato trapezoidale (anë 30°). **Hapësira** e zhvendos të gjithë profilin brenda (një bosht) ose jashtë (një vrimë), që pjesët e printuara të përshtaten me njëra-tjetrën:

- **0.1 deri 0.2 mm** përshtatet me shumicën e printerëve. Printoni së pari një bulon dhe dado provë.
- **0** është profili standard, për pjesë të punuara me makinë ose për kontrollimin e një përshtatjeje.

Një bulon dhe një dado me të njëjtën hapësirë nuk prekin kurrë njëri-tjetrin përgjatë anëve: hendeku ndërmjet tyre është dy herë hapësira, rreth e qark.

:::tip
Hapat e imët printohen dobët: M3 dhe më të vegjël, ose një hap nën 0.5 mm, është afër asaj që mund të vizatojë një hundë 0.4 mm. Modeloni filetime më të mëdha, dhe për ato të vogla përdorni një insert të ngrohur ose një vrimë të filetuar.
:::

Një filetim i modeluar është pjesë e trupit të ngurtë: eksportet STL, 3MF dhe STEP e mbajnë, dhe Measure e mat. Ai e rëndon rindërtimin e pjesës: një filetim M10 i gjatë 20 është afër 150,000 trekëndëshash.

## Vrima të filetuara

Një vrimë **Të filetuar (ISO metrik)** ka gjithashtu një ndërrues **Të modeluar**, me të njëjtën **Hapësirë**. Shih [Shponi vrima dhe zhytje në pikat e skicës](topic:holes).

## Kur një filetim nuk ndërtohet

- "Një filetim vendoset në një sipërfaqe rrethore (një cilindër): një bosht ose një vrimë." Faqja e zgjedhur është e sheshtë ose e lakuar në ndonjë mënyrë tjetër.
- "Asnjë madhësi standarde nuk përshtatet me një sipërfaqe rrethore Ø0.6 mm: zgjidhni një madhësi." Përshtat me sipërfaqen nuk gjeti asgjë brenda 12 % të sipërfaqes. Zgjidhni një **Madhësi**, ose ndryshoni sipërfaqen.
- "Një sipërfaqe mbi të cilën ishte ky filetim nuk ekziston më (…). Zgjidheni përsëri." Një ndryshim i mëparshëm e hoqi sipërfaqen. Klikoni {{ui:Përzgjidh faqet}} dhe klikoni sipërfaqen përsëri.

:::note
Filetimet në inç (UNC, UNF), filetimet e tubave, filetimet konike, mbarimet e filetimit dhe fillimet e filetimit me faskë nuk janë ndërtuar ende. Kerneli i saktë shfaq një filetim të modeluar si kozmetik.
:::
