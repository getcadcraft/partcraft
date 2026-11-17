---
title: Pjesë nga fizika: gjeneratorët
summary: Hapësira e punës Inxhinieri dhe veçoria Trup i gjeneruar: zgjidh një gjenerator, cakto hyrjet e tij (rrjedha, presioni, temperaturat, materiali, printeri), dhe merr një pjesë të përmasuar nga formulat e tekstit, me fletën e saj të të dhënave, kontrollet e prodhimit dhe skedarët për mjetet e analizës. Të njëjtat hyrje japin gjithmonë të njëjtën pjesë.
keywords: inxhinieri, gjenerator, trup i gjeneruar, fizikë, rregulla, shkëmbyes nxehtësie, kolektor, nozzle, rrjetë, gyroid, fletë të dhënash, hyrje, deterministik, të njëjtat hyrje të njëjta pjesë, kontrolle prodhimi, printim 3D, shtrat pluhuri
from: 5a387dc0
---

Një **gjenerator** është një skriptë që përmason një pjesë nga kërkesat e tua dhe e ndërton. Një gjenerator i shkëmbyesit të nxehtësisë merr nxehtësinë për të lëvizur, dy rrjedhat dhe temperaturat e tyre, presionin dhe materialin; llogarit sa e madhe duhet të jetë bërthama dhe sa e trashë muri i saj, e ndërton, dhe të tregon numrat që përdori dhe nga vjen secili. Ndrysho një hyrje dhe pjesa ndjek.

Rezultati është një trup i zakonshëm në pjesë: është në listën e veçorive, printohet, eksportohet. Vetë gjeneratori mbahet gjithashtu në pjesë, kështu që një skedar hapet në çdo kompjuter pa qenë i instaluar gjeneratori, dhe **hapja e një pjese nuk ekzekuton kurrë një skriptë**.

## Bëj një trup

1. Zgjidh hapësirën e punës {{ui:Inxhinieri}} te ndërrimi.
2. Zgjidh një gjenerator në listë (ato që vijnë me PartCraft, pastaj çdo gjenerator që ke hapur nga një skedar) dhe kliko {{ui:E re}}.
3. Skripta ekzekutohet. Kur mbaron, trupi është në pamje dhe paneli shfaq hyrjet e tij, **fletën e të dhënave** dhe **kontrollet**.

Mund ta shtosh edhe nga Dizajni: {{ui:Veçori}} › {{ui:Më shumë}} › {{ui:Trup i gjeneruar}}.

## Ndrysho

Ndrysho çdo hyrje dhe trupi bëhet përsëri një çast pasi të ndalosh së shkruari. Paneli thotë cila nga tri gjërat është e vërtetë:

- **I përditësuar**: trupi përputhet me skriptën dhe hyrjet e saj.
- **Hyrjet ndryshuan**: trupi në pjesë është nga hyrjet e mëparshme; po bëhet përsëri, ose shtyp {{ui:Ekzeko}}.
- **Nuk është ekzekutuar ende** ose **Ekzekutimi i fundit dështoi**: shfaqet një gabim skripte me rreshtin e tij.

{{ui:Ndalo}} ndërpret një ekzekutim që zgjat shumë. {{ui:Zhbëj}} kthehet një hap në çdo herë: një ekzekutim është një hap, një hyrje është një hap.

## Fleta e të dhënave

Çdo numër që gjeneratori llogariti listohet me **njësinë** e tij dhe **nga vjen** (një ekuacion teksti, një standard, një fletë të dhënash). Asgjë nuk është një konstante e fshehur. Fleta është pjesë e skedarit, kështu që është e njëjtë në kompjuterin tjetër. [Të dhënat jashtë](topic:data-out) shpjegon si ta ruash si JSON ose PDF.

## Kontrollet

Një gjenerator mund ta kontrollojë vetë pjesën e tij kundrejt një procesi printimi: muret dhe hapësirat më të holla se sa mban procesi, copëza të lira, zbrazëtira që kapin pluhurin ose rrëshirën, vrima shumë të ngushta për t'u pastruar, dhe konsola që kanë nevojë për mbështetje. Gjetjet janë në panel dhe në listën {{ui:Problemet}} (butoni ⚠), dhe ruhen me pjesën.

Shifrat e procesit janë numrat e rrumbullakët që udhëzuesit publikë të dizajnit japin për procesin në përgjithësi (FDM, SLA, SLS, shtrat pluhuri metalik). **Nuk janë specifikimi i makinës sate**: zëvendësoji me shifrat e punishtes tënde përpara se të mbështetesh në një kontroll. Kontrolli punon mbi një rrjet vokselesh, kështu që është i saktë deri në afërsisht një voksel: një mur raportohet vetëm kur është më i hollë se kufiri me më shumë se një voksel.

## Çfarë vjen me të

| Gjenerator | Çfarë bën |
|---|---|
| Bllok gyroid | Një bllok i mbushur me gyroid, Schwarz P ose fletë diamanti: rrjeta më e thjeshtë |
| Shkëmbyes nxehtësie gyroid | Bërthama e një shkëmbyesi me dy fluide, e përmasuar nga detyra me metodën effectiveness-NTU, muri i tij nga presioni; mund të kontrollojë rënien e presionit me një studim rrjedhe në një qelizë |
| Shpërndarës | Një kolektor dhe degë, çdo tub i përmasuar nga rrjedha që mban |
| Rrjetë me trare të gradueshëm | Një rrjetë, muri i së cilës trashet aty ku një optimizim topologjik thotë se nevojitet material |

Të gjitha janë vlerësime të para të ndërtuara mbi formula teksti. [Biblioteka e inxhinierisë](topic:engineering-library) liston formulat dhe kufijtë e tyre. Ekzekuto Simulation, Thermal ose Flow mbi rezultatin përpara se të mbështetesh mbi të.

## Kontrollet e eksportit

Gjeneratorët dhe fletët e të dhënave të Inxhinierisë mbartin një njoftim për kontrollet e eksportit dhe sanksionet. Lexoje te [Kontrollet e eksportit për Inxhinieri](topic:engineer-export-notice); është edhe në fund të çdo fletë të dhënash.

## Ende nuk është ndërtuar

- Kolektorët, portat dhe lidhjet në bërthamën e shkëmbyesit të nxehtësisë: është vetëm bërthama.
- Kurba të temperaturës për forcën e materialit: materialet janë në temperaturën e dhomës.
- Humbjet e tee-ve dhe ndarja e rrjedhës mes daljeve në kolektor.
- Shtimi i gjeneratorëve nga direktoria e shtojcave me një klik; hapja e një skedari shton një te ky shfletues.
- Gjeneratorë për aplikacionet e tjera.
