---
title: Ndrysho përmasat pa hapur skicën
summary: Drejto një pjesë nga numrat në panelin e djathtë: përmasat e skicës, thellësitë, numrat dhe këndet, si të planifikosh një pjesë që numrat e duhur ta drejtojnë, dhe ku marrin fjalën parametrat dhe ekuacionet.
keywords: parametra, përmasa drejtuese, qëllim projektimi, ndrysho përmasën, ekuacione, variabla globale, tabelë projektimi, konfigurime, ndrysho madhësinë, ndrysho përmasën
from: c2ae1a32
---

Çdo përmasë në një pjesë PartCraft është një numër që mund ta ndryshosh më vonë: përmasat në skicat e saj dhe cilësimet e veçorive. Nuk ke nevojë të hapësh një skicë për të ndryshuar përmasat e saj.

## Ndrysho një përmasë skice nga paneli

1. Kliko një veçori në histori, për shembull "Extrude1".
2. Nën cilësimet e vetë ekstrudimit, **Përmasat e skicës (Sketch1)** liston çdo përmasë të skicës së tij: "Distanca", "Diametri", "Kënd (°)" e kështu me radhë.
3. Shkruaj një vlerë të re në një kuti dhe shtyp {{key:Enter}} ose {{key:Tab}}.

Skica zgjidhet me vlerën e re, dhe e gjithë pjesa rindërtohet. Zgjedhja e vetë skicës shfaq të njëjtën listë si **Përmasat drejtuese**.

Një rreze ose diametër duhet të jetë më i madh se zero, dhe një kënd është midis 0 dhe 180 gradë; shiriti i statusit e thotë nëse jo.

:::tip
Cila kuti është cila? Kutitë listohen sipas radhës sipas së cilës u bënë përmasat. Nëse nuk je i sigurt, hap skicën (kliko dy herë mbi të), kliko dy herë përmasën në vizatim dhe ndryshoje atje.
:::

## Shkruaj numrin kryesor menjëherë

Zgjidh një veçori në histori (ose thjesht shtoje) dhe shkruaj një numër: ai shkon në kutinë kryesore të veçorisë, atë që ndryshon më shumë (**Thellësia** e një Ekstrudimi, **Kënd** i një Rrotullimi, **Diametër** i një Vrime, **Numri** i një modeli, **Rreze** e një Rrumbullakimi, muri i një Zbrazjeje). Shtyp {{key:Enter}} për ta vendosur, ose {{key:Esc}} për ta mbajtur vjetrin. Shtimi i një Ekstrudimi e thotë këtë në shiritin e statusit: "Extrude1 u shtua. Ndrysho numrat e tij djathtas, ose shkruaj tani një numër për thellësinë e tij."

## Ndrysho numrin në histori

Rreshti i çdo veçorie në histori shfaq numrin e tij kryesor pranë emrit: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Kliko dy herë numrin (ose zgjidh rreshtin dhe shtyp {{key:F2}}) dhe hapet një kuti aty. Shkruaj vlerën e re dhe shtyp {{key:Enter}}; {{key:Esc}} e mban vjetrën. Funksionon saktësisht si kutia e veçorisë djathtas: të njëjtat kufij, `=` për të shkruar një ekuacion si `=width/2`, dhe një hap për ta zhbërë.

Te një Ekstrudim, një Vrimë ose një model, një klikim i dyfishtë kudo në rresht hap kutinë. Te një Rrumbullakim, Pjerrësi, Zbrazje, Draft ose Filet, një klikim i dyfishtë mbi emër të çon akoma te zgjedhja e brinjëve ose sipërfaqeve, prandaj kliko dy herë vetë numrin. Skicat nuk kanë numër në rresht: një klikim i dyfishtë hap skicën.

## Tërhiqe në pamje

Zgjidh një Ekstrudim në histori (ose kliko mbi të në pamje, pastaj rreshtin e tij) dhe një shigjetë portokalli qëndron mbi sipërfaqen e tij fundore, me thellësinë në një kuti pranë saj. Tërhiq shigjetën: pjesa ndjek ndërsa tërheq, dhe kur lësho vendoset thellësia e re si një hap i vetëm ({{key:Mod+Z}} e kthen). Shtyp {{key:Esc}} gjatë tërheqjes për t'u kthyer aty ku nisët. Thellësia lëviz me hapa të një të dhjetës së madhësisë së saj: 1 mm te një ekstrudim 25 mm, 0.1 mm te një 3 mm.

Një Rrotullim ka një shigjetë të lakuar në fund të rrotullimit të tij: tërhiqe rreth boshtit për të ndryshuar këndin, në gradë të plota nga 1° në 360°.

Ose kliko në kutinë pranë shigjetës, shkruaj një vlerë (ose `=` dhe një ekuacion) dhe shtyp {{key:Enter}}. Nuk ka shigjetë te një Ekstrudim që shkon **Përmes gjithë** ose deri në një sipërfaqe, ose te një vlerë që e drejton një ekuacion: ndryshoji ato djathtas.

## Numrat që drejtojnë një pjesë

| Ku | Çfarë mund të ndryshosh |
|---|---|
| Skica | Çdo përmasë: gjatësi, distanca, rreze, diametra, kënde |
| Ekstrudim dhe Prerje | Thellësia, kushti i fundit, drejtimi, shtesë (boss) ose prerje |
| Rrotullim dhe prerje e rrotulluar | Kënd, bosht, shtesë ose prerje |
| Vrimë | Diametri, thellësia, përmes gjithë, diametri dhe thellësia e numërimit |
| Rrumbullakim, Pjerrësi, Zbrazje | Rreze, distancë, trashësia e murit dhe drejtimi, dhe cilat brinjë ose sipërfaqe |
| Lineare dhe Rrethore | Numri, hapësira ose kënd, drejtimi ose bosht |
| Pjesa | Kurbat (sa imët faceton format e rrumbullakëta) |
| Vizatimi | Ku pret prerja, madhësia e detajit dhe shkalla, vlerat GD&T |

## Planifiko pjesën që numrat e duhur ta drejtojnë

Numrat që jep janë ata që mund t'i ndryshosh. Disa zakone bëjnë që ndryshimet e mëvonshme të sillen mirë:

- **Përmaso atë që ka rëndësi për punën.** Nëse një vrimë duhet të mbetet 15 mm larg një skaji, përmaso nga ai skaj, jo nga origjina.
- **Përcakto plotësisht skicat.** Atëherë një ndryshim lëviz vetëm atë që duhet (shih [Përcakto plotësisht një skicë](topic:relations-dimensions)).
- **Përdor lidhje për qëllim.** Barabarte mes dy vrimave do të thotë që një diametër drejton të dyja. Forma simetrike: vendos origjinën në vijën qendrore, ose përdor Mesi.
- **Skicoje mbi sipërfaqe të bëra nga veçori.** Një skicë mbi sipërfaqen fundore të një ekstrudimi lëviz kur ndryshon thellësia.
- **Modelo në vend që të kopjosh.** Një vrimë e modeluar tetë herë ka një diametër për të ndryshuar.

## Përtej numrave të vetëm

- **Një numër që drejton disa:** përdor parametra dhe ekuacione: [Drejto një pjesë me parametra](topic:parameters).
- **Disa madhësi të një pjese:** ruaje secilën si [konfigurim](topic:design-tables); ruhen në skedarin e pjesës.
- **Aritmetikë në një kuti numri:** shkruaj `=40/2` ose `=width / 2`. Kjo bën një ekuacion; shih [Ekuacionet në të dy drejtimet](topic:equations-two-way).
- **Njësitë në inç:** pjesa shfaq milimetra. Në një kuti numri me `=`, ose në një parametër, `2in` kthehet në 50.8.

Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
