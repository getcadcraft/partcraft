---
title: Përsëritje dhe pasqyrime të veçorive
summary: Përsërit veçoritë në rresht me Lineare, rrotullo rreth një boshti me Rrethore, dhe kopjo veçoritë ose trupin e plotë përmes një plani me Pasqyrimi.
keywords: përsëritje, përsëritje lineare, përsëritje rrethore, varg polar, varg, pasqyrim, simetrik, kopjo veçori, rreth vrimash, farë, pasqyro trupin
from: 702e9edb
---

Përsëritjet dhe pasqyrimet kopjojnë veçoritë që ke ndërtuar tashmë. Kopjet janë pjesë e historisë: nëse ndryshon origjinalin, kopjet ndjekin.

Ajo që kopjohet është ajo që bën veçoria: një përsëritje e bllokut shton material, ndërsa një përsëritje prerjeje ose vrime e heq atë. Përsëritjet mund të përsëriten dhe të pasqyrohen përsëri. Një trup STEP i importuar mund të kopjohet gjithashtu; rrumbullakimet, skajet e prera dhe guaskat nuk mund.

## Përsëritje lineare

1. Përzgjidh veçorinë për të kopjuar në histori (për shembull një Vrimë ose një Prerje). Pa asgjë të përzgjedhur, përdoret veçoria e fundit e ngurtë.
2. Zgjidh {{ui:Linear}}. Tre kopje shfaqen 20 mm larg njëra-tjetrës përgjatë X.
3. Në panelin e djathtë, cakto:

| Cilësimi | Çfarë bën | Parazgjedhja |
|---|---|---|
| **Veçoritë për t'u kopjuar** | Shëno çdo veçori për t'u kopjuar. Listohen vetëm veçoritë mbi përsëritjen | Veçoria e përzgjedhur |
| **Drejtimi** | Boshti X, boshti Y, boshti Z, një vijë ose vijë qendrore nga çdo skicë e mëparshme, boshti i një rrotullimi, ose një brinjë e zgjedhur | Boshti X |
| **Hapësira (mm)** | Distanca midis fqinjëve | 20 |
| **Numri** | Numri total, **duke përfshirë origjinalin** (nga 1 deri në 1000) | 3 |
| **Kthe drejtimin** | Kopjet shkojnë në drejtim tjetër | Joaktiv |

### Përdor një brinjë si drejtim

1. Kliko një brinjë të drejtë të pjesës në pamje. Paneli i djathtë thotë **Brinjë** dhe tregon gjatësinë e saj.
2. Zgjidh {{ui:Linear}}: përsëritja shkon përgjatë asaj brinjeje.

Ose përzgjidh përsëritjen, zgjidh një brinjë dhe zgjidh "Brinja e zgjedhur (përdor atë të zgjedhur tani)" te **Drejtimi**. Një brinjë e zgjedhur është fikse në hapësirë: nuk ndjek ndryshimet e mëvonshme. Një vijë skice ndjek skicën e saj.

## Përsëritje rrethore

1. Përzgjidh veçorinë për t'u kopjuar (për shembull një vrimë pranë buzës së një disku).
2. Zgjidh {{ui:Circular}}. Gjashtë kopje shfaqen të barabarta rreth gjithë rrethit.
3. Cakto:

| Cilësimi | Çfarë bën | Parazgjedhja |
|---|---|---|
| **Veçoritë për t'u kopjuar** | Si te Linear | Veçoria e përzgjedhur |
| **Boshti** | Boshti X, Y ose Z, një vijë skice, boshti i një rrotullimi, ose një brinjë e zgjedhur | Boshti i rrotullimit të fundit nëse ka, përndryshe boshti Y |
| **Këndi (°)** | 360 i shpërndan kopjet në mënyrë të barabartë rreth gjithë rrethit. Më pak i shpërndan ato brenda atij këndi, i pari dhe i fundit në skaje | 360 |
| **Numri** | Numri total, duke përfshirë origjinalin | 6 |
| **Kthe drejtimin** | Kthehet në drejtim tjetër | Joaktiv |

Boshtet botërore kalojnë nga origjina. Për një disk që nuk është i qendërzuar te origjina, përdor një vijë qendrore skice ose boshtin e një rrotullimi.

### Shembull: tetë vrimat e flanxhës

1. Rrotullo flanxhën (shih [Rrotullo një pjesë të tornuar](topic:revolve)) rreth boshtit Y.
2. Skico mbi sipërfaqen e sipërme të sheshtë të flanxhës, vendos një pikë në rrethin e bulonave dhe bëj një Vrimë.
3. Me Vrimën të përzgjedhur, zgjidh {{ui:Circular}}. Boshti është tashmë "Axis of Revolve1".
4. Vendos **Numri** në `8`.

## Pasqyrim

1. Përzgjidh veçorinë për të pasqyruar në histori, ose mos përzgjidh asgjë për të pasqyruar **të gjithë trupin siç është ndërtuar deri tani**.
2. Zgjidh {{ui:Mirror}}. Pasqyrohet përmes **Planit të djathtë**.

Për të pasqyruar të gjithë trupin përmes një faqeje të pjesës, kliko më parë atë faqe të sheshtë, pastaj zgjidh {{ui:Mirror}}. (Klikimi i një faqeje pastron përzgjedhjen e historisë, kështu që kjo pasqyron gjithmonë të gjithë trupin.)

Cilësimet në panelin e djathtë:

- **Pasqyro**: shëno **Të gjithë trupi (siç është ndërtuar deri tani)**, ose hiqe shenjën dhe shëno veçoritë për t'u kopjuar.
- **Plani i pasqyrimit**: Plani i përparmë, Plani i sipërm, Plani i djathtë, faqja që përdor tani ("Një faqe e Extrude1" ose "Një plan fiks"), ose "Faqja e zgjedhur tani". Për të pasqyruar veçori të zgjedhura përmes një faqeje: përzgjidh Pasqyrimin në histori, kliko faqen në pamje dhe zgjidh "Faqja e zgjedhur tani".

Pasqyrimi i të gjithë trupit përmes një faqeje e dyfishon pjesën, për shembull një mbajtëse gjysmë në një mbajtëse të plotë.

## Mesazhet

- "Ndërto një veçori për t'u kopjuar së pari." ose "Ndërto një trup së pari." Nuk ka ende asgjë të ngurtë për të kopjuar.
- "Zgjidh veçoritë për t'u kopjuar." Çdo kutizë **Veçoritë për t'u kopjuar** është pastruar.
- "Extrude2 nuk ka trup për të kopjuar." Ajo veçori dështoi ose është pezulluar.
- "Fillet1 ndryshon brinjët ose muret e trupit; nuk mund të kopjohet. Kopjo veçoritë që krijojnë trupa (nxjerrje, rrotullime, vrima, importe)." Rrumbullakimet, skajet e prera dhe guaskat nuk mund të përsëriten ose të pasqyrohen; përsërit së pari, pastaj rrumbullako.
- "Nuk ka ende trup për të pasqyruar."

:::note
Kopjet e përsëritjes nuk mund të anashkalohen një nga një, dhe një përsëritje nuk mund të ndjekë një kurbë skice. Përsëritjet dhe pasqyrimet e skicës nuk janë ndërtuar ende: vizato gjeometrinë e përsëritur të skicës me dorë ose me **Shto sipas koordinatave**.
:::
