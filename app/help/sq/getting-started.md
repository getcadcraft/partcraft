---
title: Filloni me PartCraft
summary: Ç'bën PartCraft sot, ç'i duhet shfletuesit tuaj, dhe një pjesë e parë në dhjetë minuta, nga skica deri te skedari i ruajtur.
keywords: fillim, ekzekutimi i parë, nisje e shpejtë, hyrje, udhëzues, pjesa e parë, pllakë, parametrike, modelues pjesësh
from: 5f0a668d
---

PartCraft është aplikacioni parametrik i pjesëve dhe montimeve të familjes CadCraft. Vizatoni një skicë 2D, e lidhni me lidhje dhe përmasa, e shndërroni në trup të ngurtë me veçori si ekstrudo, rrotullo dhe vrimë, dhe ndryshoni çdo numër më vonë: pjesa rindërtohet nga historia e saj. Pjesët më pas hyjnë në montime, ku lidhjet i vendosin dhe ju lejojnë të kontrolloni lëvizjen.

Ç'bën ky version:

| Detyra | Ç'merrni |
|---|---|
| Skicat | Vija, drejtkëndësha, rrathë, harqe, pika dhe vija qendrore, me lidhje dhe përmasa, dhe një gjendje të drejtpërdrejtë: nën-përcaktuar, plotësisht ose mbi-përcaktuar |
| Veçoritë e trupit të ngurtë | Ekstrudo, prerje, rrotullo, prerje e rrotulluar, vrima të thjeshta dhe me kthesë, modele lineare dhe rrethore, pasqyrim, rrumbullakime dhe qoshime në brinjë të drejta ndërmjet faqeve të sheshta, dhe zbrazje dhe Draft në faqe të sheshta. Tërheqja përgjatë, lidhja e profileve dhe veçoritë e tjera që kërkojnë një kernel të saktë nuk janë ndërtuar ende në këtë version: shih [Ç'nuk është ndërtuar ende](topic:not-built-yet) |
| Historia | Redakto numrat e çdo veçorie, fiko, kthehu mbrapsht, rirendit dhe fshi, me zhbërje |
| Montimet | Pjesë të lidhura me lidhje të ngurta, rrotulluese dhe rrëshqitëse, një kontroll përplasjeje dhe një kontroll lëvizjeje |
| Vizatimet | Një fletë A3 me tri pamje, një izometrike, një prerje, një pamje detaji, përmasa të përgjithshme, bazat, kornizat e tolerancave dhe simbolet e përfundimit të sipërfaqes, të eksportuara si PDF |
| Skedarët | Skedarët e vet të pjesëve dhe montimeve; STL, 3MF, STEP me facetë, DXF dhe PDF jashtë |

Gjithçka funksionon në shfletuesin tuaj, në kompjuterin tuaj. **Asgjë nuk ngarkohet.** Shih [Skedarët: hapja, ruajtja dhe eksportimi](topic:files) për vendet ku shkojnë skedarët.

## Ç'ju duhet

- Një Chrome, Edge, Firefox ose Safari të përditësuar me **WebGL** (grafikë 3D) dhe **WebAssembly** të aktivizuar. Të dyja janë të aktivizuara si parazgjedhje. Gjeometria e trupit të ngurtë ndërtohet nga një kernel rrjete WebAssembly që ngarkohet me aplikacionin: shih [Kerneli i rrjetës](topic:solid-kernels).
- Miu është më i lehtë. Një trackpad funksionon, dhe ekranet me prekje funksionojnë për shikim dhe skicim të thjeshtë: shih [Trackpad, prekja dhe ekranet e vegjël](topic:trackpad-and-touch).
- Një ekran të paktën 1280 pixel gjerë e shfaq të gjithë shiritin e veglave në një rresht. Dritaret më të ngushta e lëvizin shiritin e veglave anash; në telefon panelet hapen si fletë nga një shirit në fund.

Më shumë për shfletuesit: [Shfletuesit dhe kompjuterët](common:browsers).

:::note
PartCraft funksionon në shfletues, dhe në desktop brenda CadCraft Studio. Ruajtja në re nuk është e disponueshme ende: hapni pjesët nga kompjuteri juaj dhe ruajini mbrapsht si skedarë.
:::

## Hapni PartCraft

1. Hapni PartCraft.
2. Prisni derisa ekrani të thotë "Duke ngarkuar kernelin e trupit të ngurtë…". Kjo zgjat pak herën e parë.
3. Shihni një pamje 3D bosh me tre rrafshe bazë, historinë në të majtë ("Part1", pastaj Rrafshi i përparmë, Rrafshi i sipërm, Rrafshi i djathtë) dhe një kuti në pamje me titull "Nis një pjesë".
4. Çipi afër skajit të djathtë të shiritit të statusit thotë "Mesh kernel": PartCraft ndërton çdo pjesë me kernelin e rrjetës në këtë version, kështu që faqet e rrumbullakëta janë facetë të sheshta. Mund të filloni modelimin menjëherë.

Nëse pamja thotë se shfletuesi nuk mund të shfaqë 3D, ose kerneli nuk u ngarkua, shih [Zgjidhja e problemeve](topic:troubleshooting#the-app-does-not-start).

## Pjesa juaj e parë: një pllakë me një vrimë

Do të bëni një pllakë 60 × 40 mm, 10 mm të trashë, me një vrimë 6 mm që kalon nëpër të. Njësitë janë milimetra.

### Skiconi konturin

1. Klikoni **Rrafshi i përparmë** në historinë në të majtë. Rrafshi thekselohet në pamje.
2. Zgjidhni {{ui:Skica}} në shiritin e veglave, ose shtypni {{key:S}}. Pamja kthehet drejt e nga rrafshi, dhe vegla Vijë është aktive.
3. Shtypni {{key:R}} për veglën Drejtkëndësh.
4. Lëvizni treguesin mbi origjinën (rrethi i vogël i kuq me kryq). Një katror i vogël tregon se ngjitet. Klikoni.
5. Lëvizni lart dhe djathtas dhe klikoni përsëri. Keni një drejtkëndësh. Vijat e tij janë blu: blu do të thotë se mund të lëvizin ende.

### Jepini përmasa

1. Shtypni {{key:D}} për veglën Përmasë.
2. Klikoni vijën e sipërme, pastaj klikoni pak mbi të. Hapet një kuti numri me gjatësinë aktuale.
3. Shkruani `60` dhe shtypni {{key:Enter}}. Drejtkëndëshi bëhet 60 mm gjerë.
4. Klikoni vijën e majtë, pastaj klikoni pak në të majtë të saj. Shkruani `40` dhe shtypni {{key:Enter}}.

Çipi në skajin e sipërm majtas të pamjes tani thotë **Plotësisht e përcaktuar**, dhe vijat kthehen në bojë (të zezë në temën Paper ose të çelët në temën Model). Çdo pikë dhe madhësi është e fiksuar.

:::tip
Nëse e nisët drejtkëndëshin larg origjinës, çipi ende thotë "Nën-përcaktuar · 2 shkallë lirie". Shtypni {{key:S}} për Përzgjidh, klikoni një qoshe, {{key:Shift}}+klikoni origjinën, pastaj zgjidhni {{ui:• Përputhje}} në panelin e djathtë.
:::

### Nxirreni (ekstrudo)

1. Zgjidhni {{ui:Dil}} në shiritin e veglave, ose shtypni {{key:Esc}} derisa skica të mbyllet (zakonisht dy herë).
2. Zgjidhni {{ui:Ekstrudo}}. Shfaqet një trup i ngurtë 10 mm. "Extrude1" shtohet në histori, me "Sketch1" të zhvendosur nën të.
3. Paneli i djathtë tregon cilësimet e ekstrudimit. Për të ndryshuar trashësinë, shkruani një numër të ri te **Thellësia (mm)** dhe shtypni {{key:Enter}} ose {{key:Tab}}. Pjesa rindërtohet menjëherë.

### Shtoni vrimën

1. Klikoni sipërfaqen e madhe të sheshtë në përpara të pllakës (fundi i ekstrudimit). E gjithë faqja thekselohet, dhe paneli i djathtë thotë **Faqe**.
2. Zgjidhni {{ui:Skicë mbi këtë faqe}} në panelin e djathtë.
3. Shtypni {{key:P}} për veglën Pikë dhe klikoni afër mesit të faqes.
4. Zgjidhni {{ui:Dil}}.
5. Zgjidhni {{ui:Vrimë}}. Një vrimë 6 mm kalon nëpër pllakë. Ndryshoni **Diametri (mm)** në panelin e djathtë nëse dëshironi.

Kutia **Pjesa** poshtë majtas tani lexon një vëllim, një sipërfaqe, madhësinë (60 × 40 × 10 mm) dhe "Vrima kalimtare: 1".

### Ruajeni

1. Shtypni {{key:Mod+S}} ose zgjidhni {{ui:Ruaj}}.
2. Shfletuesi shkarkon `Part1.partcraft.json` në dosjen e shkarkimeve. Skedari mban të gjithë historinë: hapeni përsëri me {{ui:Hap}} për të vazhduar redaktimin.

Për ta riemërtuar pjesën së pari, klikoni hapësirën bosh në pamje që të mos zgjidhet asgjë, pastaj shkruani një **Emër** të ri në panelin e djathtë.

## Ku të shkoni më pas

- [Vizato skicën e parë](topic:sketch-basics) dhe [Plotëso plotësisht një skicë](topic:relations-dimensions) shpjegojnë skicuesin siç duhet.
- [Ndrysho një pjesë përmes historisë së saj](topic:edit-history) tregon si të redaktoni atë që keni ndërtuar.
- [Rrumbullakim, qoshim dhe zbrazje](topic:fillet-chamfer-shell) dhe [Bëj një vizatim](topic:drawing-pdf) e përfundojnë pjesën. [Ç'nuk është ndërtuar ende](topic:not-built-yet) liston ç'nuk bën ky version, si tërheqja përgjatë dhe lidhja e profileve.
- [Kalimi nga një modelues tjetër parametrik](topic:coming-from) liston zakonet që funksionojnë ndryshe këtu.
- [Tastet dhe miu](topic:keyboard) është lista e plotë e shkurtoreve.
- [Si të përdorni këtë ndihmë](common:help).
