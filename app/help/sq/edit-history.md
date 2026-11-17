---
title: Ndrysho një pjesë përmes historisë së saj
summary: Modifiko veçoritë dhe skicat pas faktit, pezullo, kthehu mbrapa, fut veçori më herët, rirendit, riemëro dhe fshi, dhe zhbëj çdo gjë nga këto.
keywords: historia, pema e veçorive, pema e projektimit, modifiko veçorinë, modifiko skicën, pezullo, riaktivizo, kthim mbrapa, kthehu mbrapa, ribëj përpara, rirendit, zhvendos veçorinë, fshi, riemëro, zhbëj, ribëj, rindërto, rigjeneroj, prind fëmijë, pjesë e madhe, shumë veçori, rindërtim i ngadaltë, 750 veçori
from: 6f75aef4
---

Një pjesë PartCraft është historia e saj: lista e planeve, skicave dhe veçorive në të majtë. PartCraft e ndërton përsëri trupin e ngurtë nga maja e kësaj liste sa herë që ndryshon diçka. Ndryshimi i një numri në fillim të listës ndryshon çdo gjë që është ndërtuar mbi të.

## Modifiko një veçori

1. Kliko veçorinë në histori (ose skicën e thelluar nën të).
2. Ndrysho cilësimet e saj në panelin e djathtë. Çdo ndryshim rindërton menjëherë.

Nuk ka OK ose Anulo: çdo ndryshim aplikohet. Nëse nuk të pëlqen, shtyp {{key:Mod+Z}}.

## Ndrysho cilat brinjë ose faqe përdor një rrumbullim, prerje këndore ose guaskë

Kliko dy herë veçorinë në histori, ose përzgjidhe dhe zgjidh {{ui:Përzgjidh brinjët}} (ose {{ui:Përzgjidh faqet}}). Kliko brinjë ose faqe për t'i shtuar ose hequr, pastaj {{ui:U krye}} ose {{key:Esc}}. Shiko [Rrumbullim, prerje skaji dhe zbrazje](topic:fillet-chamfer-shell).

## Modifiko një skicë

1. Kliko dy herë skicën në histori, ose përzgjidhe dhe zgjidh {{ui:Modifiko skicën}} në panelin e djathtë (ose {{ui:Skica}} në shiritin e veglave).
2. Pjesa kthehet si ishte kur u bë skica: veçoritë pas saj fshihen ndërsa modifikon.
3. Ndrysho gjeometrinë, lidhjet ose përmasat.
4. Mbyll skicën. E gjithë pjesa rindërtohet me ndryshimin.

Për të ndryshuar vetëm një madhësi, nuk të duhet të hapësh skicën. Përzgjidh veçorinë ose skicën dhe ndrysho numrin nën **Përmasat e skicës** (ose **Përmasat drejtuese**) në panelin e djathtë. Shiko [Ndrysho madhësitë pa hapur skicën](topic:change-sizes).

## Kur një veçori dështon

Nëse një ndryshim e bën një veçori të pamundur, PartCraft ndërton gjithçka tjetër dhe shënon problemin:

- veçoria shfaq **⚠ gabim** në histori, dhe mesazhi i saj është në krye të panelit të djathtë (kalo mbi rresht për ta lexuar edhe);
- veçoritë që e kërkojnë shfaqin **⚠ nuk është ndërtuar**, me "Kërkon Extrude2, që po dështon.";
- çipi i shiritit të gjendjes thotë "1 veçori dështon".

Rregullo shkakun (ose zhbëj), dhe pjesa ndërtohet përsëri. Mesazhet e zakonshme dhe çfarë të bësh janë në [Zgjidhja e problemeve](topic:troubleshooting).

## Pezullo një veçori

Pezullimi e fik një veçori pa e fshirë: i dobishëm për të provuar një pjesë pa një vrimë ose model.

1. Përzgjidh veçorinë.
2. Zgjidh {{ui:Pezullo}}. Rreshti i saj shfaq **fikur**. Veçoritë që e kërkojnë gjithashtu nuk ndërtohen.
3. Zgjidh {{ui:Riaktivizo}} për ta ndezur sërish.

## Kthehu mbrapa

Kthimi mbrapa e ndërton pjesën vetëm deri në një pikë, që ta shohësh siç ishte, ose të shtosh një veçori më herët në histori.

1. Përzgjidh një veçori dhe zgjidh {{ui:Kthehu deri këtu}}. Ajo veçori dhe çdo veçori poshtë saj bëhen gri dhe nuk ndërtohen. Një rresht **Shiriti i kthimit · vazhdo përpara** shënon vendin.
2. Çdo veçori që shton tani shkon **te shiriti**, para atyre gri.
3. Kliko **Shiriti i kthimit · vazhdo përpara** për ta ndërtuar gjithçka përsëri.

Pozicioni i kthimit ruhet në skedar.

## Rirendit veçoritë

1. Përzgjidh veçorinë.
2. Zgjidh {{ui:Zhvendos lart}} ose {{ui:Zhvendos poshtë}}, ose, me rreshtin e saj në histori të fokusuar, shtyp {{key:Alt+Up}} ose {{key:Alt+Down}}.

Një veçori nuk mund të kalojë kurrë mbi diçka që përdor. Butoni shfaqet gri, dhe kur kalon mbi të (ose provon tastin) jep arsyen, për shembull "Extrude2 përdor Sketch2, prandaj Sketch2 duhet të vijë së pari."

Çfarë përdor një veçori: skicën e saj; faqen mbi të cilën ndodhet skica e saj; veçoritë që kopjon një model ose pasqyrim; një vijë skice ose rrotullim e përdorur si drejtim ose bosht.

## Fshi një veçori

1. Përzgjidh veçorinë dhe zgjidh {{ui:Fshi}} në panelin e djathtë ose në shiritin e veglave, ose shtyp {{key:Delete}}.
2. Nëse veçori të tjera e përdorin, PartCraft pyet: "Extrude3, Hole1 përdorin Extrude1 dhe do të fshihen edhe ato." Zgjidh {{ui:Fshi të gjitha}} ose {{ui:Anulo}}.

Fshirja e një veçorie nuk e fshin skicën e saj: skica del përsëri në pamje si skicë e papërdorur, gati për një veçori tjetër. Fshije skicën veç e veç nëse nuk të duhet.

## Riemëro

Përzgjidh veçorinë dhe shkruaj një **Emër** të ri në fund të panelit të djathtë (deri në 60 karaktere). Emri i vetë pjesës shfaqet në panelin e djathtë kur nuk ka asgjë të zgjedhur.

## Pjesë me qindra veçori

Një pjesë me qindra veçori testohet deri në 750. PartCraft mban trupin e ngurtë që kishte në mes të historisë, kështu që një ndryshim vonë në histori rindërton vetëm veçoritë pas tij; një ndryshim afër majës rindërton gjithçka të ndërtuar mbi të, gjë që zgjat më shumë. Zhbërja dhe ribërja rindërtojnë vetëm nga pika ku ndryshojnë dy gjendjet. Për të punuar më shpejt në një pjesë të madhe, kthehu mbrapa deri ku po punon (shiko Kthehu mbrapa më lart) ose pezullo ç'nuk të duhet tani. Disa prerje dhe ngritje që nuk prekin njëra-tjetrën aplikohen bashkë, kështu që një pjesë me shumë vrima dhe ngritje të veçanta ndërtohet më shpejt se sa sugjeron numri i veçorive.

Një pjesë e madhe rindërtohet në sfond: çipi i ndërtimit në fund shfaq **Po rindërtohet…** me sa ka përparuar, dhe pamja, panelet dhe menutë vazhdojnë të punojnë ndërkohë. Pjesa në ekran është e fundit e ndërtuar deri sa të jetë gati e reja. Nëse ndryshon diçka përsëri ndërsa rindërtohet, PartCraft ndërton versionin më të ri dhe lë pa u përfunduar atë që ishte në punë. Një pjesë e vogël rindërtohet menjëherë.

## Zhbëj dhe ribëj

- {{key:Mod+Z}} ose {{ui:Zhbëj}} zhbën ndryshimin e fundit: një veçori, një cilësim, një modifikim skice, një tërheqje. Shiriti i gjendjes thotë çfarë, për shembull "U zhbë ndryshimi i përmasës."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ose {{ui:Ribëj}} e ribën.
- PartCraft mban 200 hapat e fundit (një pjesë kaq e madhe sa 200 kopje do të përdornin shumë memorie mban më pak, por kurrë më pak se 20 më të rejat). Ndryshimet në fletën e vizatimit (një prerje, një simbol GD&T i zhvendosur) janë në të njëjtën listë. Hapja e një skedari ose fillimi i një pjese të re e pastron.

:::mac
Në Mac, përdor ⇧⌘Z për ribërje. Në Safari, ⌘Y mund të hapë historinë e shfletuesit.
:::
