---
title: Fillo me PartCraft
summary: Çfarë bën PartCraft sot, çfarë i duhet shfletuesit tuaj, dhe një pjesë e parë në dhjetë minuta, nga skica deri te skedari i ruajtur.
keywords: fillim, ekzekutimi i parë, nisje e shpejtë, hyrje, udhëzues, pjesa e parë, pllakë, parametrik, modelues pjesësh
from: 7d43283f
---

PartCraft është aplikacioni i pjesëve parametrike dhe i montimeve i familjes CadCraft. Ju vizatoni një skicë 2D, e lidhni me relacione dhe përmasa, ektrudoni, rrotulloni dhe bëni vrima për ta kthyer në solid me veçori si ekstrudimi, rrotullimi dhe vrima, dhe ndryshoni çdo numër më vonë: pjesa rindërtohet nga historia e saj. Pjesët më pas hyjnë në montime, ku lidhjet i vendosin dhe ju lejojnë të kontrolloni lëvizjen.

Çfarë bën ky version:

| Punë | Çfarë merrni |
|---|---|
| Skicat | Vija, drejtkëndësha, rrathë, harqe, pika dhe boshte qendrore, me relacione dhe përmasa, dhe një gjendje të drejtpërdrejtë: nën, plotësisht ose mbi përcaktuar |
| Veçoritë solide | Ekstrudim, prerje, rrotullim, prerje me rrotullim, vrima të thjeshta dhe me zgjerim, model linear dhe rrethor, pasqyrim, rrumbullakime dhe prerje këndi në skaje të drejta midis faqeve të sheshta, dhe guaska dhe pjerrësi në faqe të sheshta. Sweep-et, loft-et dhe veçoritë e tjera që kërkojnë një kernel të saktë nuk janë ndërtuar ende në këtë version: shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet) |
| Historia | Redaktoni numrat e çdo veçorie, pezulloni,ktheni mbrapsht, rirenditni dhe fshini, me zhbërje |
| Montimet | Pjesë të lidhura me lidhje të ngurta, rrotulluese dhe rrëshqitëse, një kontroll përplasjesh dhe një kontroll lëvizjeje |
| Vizatimet | Një fletë A3 me tre pamje, një izometrike, një prerje, një pamje detaji, përmasa të përgjithshme, datum-e, korniza të kontrollit të veçorisë dhe simbole të përfundimit të sipërfaqes, të eksportuara si PDF |
| Skedarët | Skedarët e vet të pjesëve dhe montimeve; dalje STL, 3MF, STEP i saktë, DXF dhe PDF |

Gjithçka punon në shfletuesin tuaj, në kompjuterin tuaj. **Asgjë nuk ngarkohet.** Shih [Skedarët: hapja, ruajtja dhe eksportimi](topic:files) për vendin ku shkojnë skedarët.

## Çfarë ju nevojitet

- Një Chrome, Edge, Firefox ose Safari aktual me **WebGL** (grafikë 3D) dhe **WebAssembly** të ndezur. Të dyja janë të ndezura si parazgjedhje. Gjeometria solide ndërtohet nga një kernel rrjete WebAssembly që ngarkohet me aplikacionin: shih [Kerneli i rrjetit](topic:solid-kernels).
- Një miu është më i lehti. Një trackpad funksionon, dhe ekranet me prekje funksionojnë për shikim dhe skicim të thjeshtë: shih [Trackpad, prekja dhe ekrane të vegjël](topic:trackpad-and-touch).
- Një ekran të paktën 1280 piksela i gjerë shfaq të gjithë shiritin e veglave në një rresht. Dritaret më të ngushta lëvizin shiritin anash; në telefon panelet hapen si fletë nga një shirit në fund.

Më shumë për shfletuesit: [Shfletuesit dhe kompjuterët](common:browsers).

:::note
PartCraft punon në shfletues, dhe në desktop brenda CadCraft Studio. Ruajtja në re nuk është ende e disponueshme: ju hapni pjesët nga kompjuteri juaj dhe i ruani përsëri në të si skedarë.
:::

## Hapni PartCraft

1. Hapni PartCraft.
2. Prisni derisa ekrani të thotë "Po ngarkohet kerneli i solidit…". Kjo merr pak kohë herën e parë.
3. Shihni një pamje 3D bosh me tre plane bazë, historinë në të majtë ("Part1", pastaj Plani i përparmë, Plani i sipërm, Plani i djathtë) dhe një kuti me titull "Fillo një pjesë" në pamje.
4. Chip-i afër skajit të djathtë të shiritit të gjendjes thotë "Kerneli i rrjetit": PartCraft ndërton çdo pjesë me kernelin e rrjetit në këtë version, kështu që faqet e rrumbullakëta janë facetë të sheshta. Mund të filloni modelimin menjëherë.

Nëse pamja thotë se shfletuesi nuk mund të shfaqë 3D, ose kerneli nuk u ngarkua, shih [Zgjidhja e problemeve](topic:troubleshooting#the-app-does-not-start).

## Pjesa juaj e parë: një pllakë me vrimë

Do të bëni një pllakë 60 × 40 mm, 10 mm të trashë, me një vrimë 6 mm përmes saj. Njësitë janë milimetra.

### Skiconi konturin

1. Klikoni **Planin e përparmë** në histori. Plani nxirret në pah në pamje.
2. Zgjidhni {{ui:Skica}} në shiritin e veglave, ose shtypni {{key:S}}. Pamja kthehet për të parë drejt planit, dhe veglja Vijë është aktive.
3. Shtypni {{key:R}} për veglën Drejtkëndësh.
4. Lëvizni treguesin mbi origjinën (rrethi i vogël i kuq me kryq). Një katror i vogël tregon që po kapet. Klikoni.
5. Lëvizni lart dhe djathtas dhe klikoni përsëri. Keni një drejtkëndësh. Vijat e tij janë blu: blu do të thotë se mund të lëvizin akoma.

### Vendosni përmasat

1. Shtypni {{key:D}} për veglën Përmasë.
2. Klikoni vijën e sipërme, pastaj klikoni pak mbi të. Hapet një kuti numri me gjatësinë aktuale.
3. Shkruani `60` dhe shtypni {{key:Enter}}. Drejtkëndëshi ndryshon në 60 mm gjerësi.
4. Klikoni vijën e majtë, pastaj klikoni pak në të majtë të saj. Shkruani `40` dhe shtypni {{key:Enter}}.

Chip-i në krye majtas të pamjes tani thotë **Plotësisht i përcaktuar** dhe vijat kthehen në bojë (e zezë në temën Paper, e çelët në temën Model). Çdo pikë dhe madhësi është fiksuar.

:::tip
Nëse e keni nisur drejtkëndëshin larg origjinës, chip-i akoma thotë "Nën-përcaktuar · 2 shkallë lirie". Shtypni {{key:S}} për Përzgjedhje, klikoni një cep, {{key:Shift}}+klikoni origjinën, pastaj zgjidhni {{ui:• Përkon}} në panelin e djathtë.
:::

### Ekstrudoni

1. Zgjidhni {{ui:Dil}} në shiritin e veglave, ose shtypni {{key:Esc}} derisa skica të mbyllet (zakonisht dy herë).
2. Zgjidhni {{ui:Ekstrudo}}. Shfaqet një solid 10 mm. "Ekstrudimi1" shtohet në histori, me "Skica1" të zhvendosur nën të.
3. Paneli i djathtë shfaq cilësimet e ekstrudimit. Për të ndryshuar trashësinë, shkruani një numër të ri te **Thellësia (mm)** dhe shtypni {{key:Enter}} ose {{key:Tab}}. Pjesa rindërtohet menjëherë.

### Shtoni vrimën

1. Klikoni faqen e madhe të sheshtë përpara pllakës (fundi i ekstrudimit). E gjithë faqja nxirret në pah dhe paneli i djathtë thotë **Faqe**.
2. Zgjidhni {{ui:Skicë mbi këtë faqe}} në panelin e djathtë.
3. Shtypni {{key:P}} për veglën Pikë dhe klikoni pranë mesit të faqes.
4. Zgjidhni {{ui:Dil}}.
5. Zgjidhni {{ui:Vrimë}}. Një vrimë 6 mm kalon përmes pllakës. Ndryshoni **Diametrin (mm)** në panelin e djathtë nëse dëshironi.

Kutia **Pjesa** poshtë majtas tani shfaq një vëllim, një sipërfaqe, madhësinë (60 × 40 × 10 mm) dhe "Vrima përmes: 1".

### Ruajeni

1. Shtypni {{key:Mod+S}} ose zgjidhni {{ui:Ruaj}}.
2. Shfletuesi shkarkon `Part1.partcraft.json` në dosjen e shkarkimeve. Skedari mban historinë e plotë: hapeni përsëri me {{ui:Hap}} për të vazhduar redaktimin.

Për ta riemërtuar pjesën së pari, klikoni hapësirën bosh në pamje, që të mos zgjidhet asgjë, dhe shkruani një **Emër** të ri në panelin e djathtë.

## Ku të shkoni më pas

- [Vizatoni skicën tuaj të parë](topic:sketch-basics) dhe [Përcaktoni plotësisht një skicë](topic:relations-dimensions) shpjegojnë skicuesin siç duhet.
- [Ndryshoni një pjesë përmes historisë së saj](topic:edit-history) tregon si të redaktoni atë që keni ndërtuar.
- [Rrumbullakoni, pjerrësoni dhe zbraztni](topic:fillet-chamfer-shell) dhe [Bëni një vizatim](topic:drawing-pdf) e përfundojnë pjesën. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) liston çfarë nuk bën ky version, si sweep-et dhe loft-et.
- [Ardhur nga një modelues tjetër parametrik](topic:coming-from) liston zakonet që funksionojnë ndryshe këtu.
- [Tastet dhe miu](topic:keyboard) është lista e plotë e shkurtoreve.
- [Si ta përdorni këtë ndihmë](common:help).
