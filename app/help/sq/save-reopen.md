---
title: Ruaj, rihap dhe vazhdo punën
summary: Ruani pjesët dhe montimet në kompjuterin tuaj, emërtojini, rihapini me buton, tast ose me tërheqje, mbani versione dhe mos e humbni punën në një skedë shfletuesi.
keywords: ruaj, hap, rihap, ngarko, shkarko, versione, kopje rezervë, riemërto, emri i skedarit, punë e humbur, largohu nga faqja, partcraft.json, partcraft-asm.json, pjesë e re
from: c18a5abc
---

PartCraft nuk ruan asgjë midis vizitave. Pjesa juaj jeton në skedën e shfletuesit deri sa ta ruani si skedar, dhe kthehet kur hapni atë skedar.

## Ruaj një pjesë

1. Emërtoni pjesën: klikoni hapësirën bosh në pamje, që të mos zgjidhet asgjë, pastaj shkruani **Emrin** te paneli i djathtë dhe shtypni {{key:Enter}}. Titulli i historikut ndryshon që të përshtatet.
2. Shtypni {{key:Mod+S}} ose zgjidhni {{ui:Save}}.
3. Shfletuesi shkarkon `<emri>.partcraft.json`. Shiriti i statusit thotë "U ruajt Bracket.partcraft.json (gjithë historiku; rihape këtu për të vazhduar redaktimin)."

Nëse një skicë është e hapur, ruajtja e mbyll më parë.

Skedari mban çdo skicë, lidhje, dimension dhe veçori, plus veçoritë e pezulluara, pozicionin e shiritit rollback, cilësimet e fletës së vizatimit dhe shënimet GD&T, dhe tekstin e plotë të çdo trupi STEP të importuar. Lista juaj e zhbërjeve nuk ruhet.

## Ruaj një montim

Në një montim, i njëjti {{ui:Save}} ose {{key:Mod+S}} shkarkon `<emri i montimit>.partcraft-asm.json`. Çdo pjesë ruhet brenda tij: nuk keni nevojë për skedarët e veçantë të pjesëve për ta rihapur.

Ndërsa redaktoni një pjesë nga brenda një montimi, {{key:Mod+S}} e ruan atë pjesë veçmas si `.partcraft.json`. Zgjidhni {{ui:Back}} më parë, pastaj ruani, për të ruajtur montimin e plotë.

## Rihap

Çdo nga këto:

- zgjidhni {{ui:Open}} ose shtypni {{key:Mod+O}}, pastaj zgjidhni skedarin;
- tërhiqni skedarin nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} mbi pamjen 3D ("Lëshoni një pjesë PartCraft për ta hapur" shfaqet).

PartCraft i dallon pjesët nga montimet sipas asaj që ka brenda, kështu që të dyja hapen në të njëjtën mënyrë. Një skedar `.step` ose `.stp` hapet si trup i importuar: shih [Hap një skedar STEP dhe ndërto mbi të](topic:import-step). Shiriti i statusit konfirmon: "U hap Bracket.partcraft.json: 7 veçori." ose "U hap Hinge.partcraft-asm.json: 3 pjesë, 2 lidhje."

Nëse pjesa në ekran ka ndryshime të pa ruajtura, PartCraft pyet më parë: {{ui:Cancel}}, {{ui:Discard changes}} ose {{ui:Save first}}.

:::warning
Mbyllni një montim ({{ui:Close}}) përpara se të hapni një skedar pjese. Nëse hapni një pjesë ndërsa një montim është në ekran, pjesa ngarkohet pas montimit dhe e shihni vetëm pasi ta mbyllni montimin. Hapja e një skedari montimi zëvendëson gjithashtu një montim të pa ruajtur pa pyetur, kështu që ruajeni më parë.
:::

## Nis nga e para

{{ui:New}} hap një "Part1" bosh. Pyet më parë nëse ka ndryshime të pa ruajtura, dhe mbyll një montim të hapur (duke pyetur nëse është i pa ruajtur).

## Mban versione

Çdo ruajtje është një shkarkim i ri, kështu që mund të mbani versione thjesht duke i mbajtur skedarët:

- Vendosni një version ose datë në emër para ruajtjes: "Bracket rev B".
- Shfletuesi mund të shtojë " (1)", " (2)" kur një skedar me të njëjtin emër është tashmë në dosjen e shkarkimeve. Më i riu është ai me numrin më të lartë, ose kontrolloni datën te {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}}.
- Zhvendosni skedarët e përfunduar nga dosja e shkarkimeve në dosjen e projektit tuaj.

Shih [Ku shkojnë skedarët tuaj](common:your-files) për ku shkojnë shkarkimet në çdo sistem.

## Mos e humb punën

- Ruajeni para se të mbyllni skedën, të rifreskoni faqen ose ta lini kompjuterin të flejë për gjatë. Shfletuesi pyet nëse doni të largoheni nga faqja kur provoni ta mbyllni me ndryshime të pa ruajtura, por një përplasje ose një laptop i mbyllur nuk jep asnjë paralajmërim.
- Dritaret private ose incognito funksionojnë, por nuk ndryshon asgjë tjetër: skedari është gjithmonë i vetmi kopje.
- Ruajtja në cloud dhe historiku i versioneve nuk janë ende të disponueshme.
