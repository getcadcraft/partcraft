---
title: Formatet e skedarëve
summary: Çdo skedar që PartCraft lexon dhe shkruan, me zgjerimet, njësitë, boshtet dhe atë që ruan ose humbet secili.
keywords: formate, lloje skedarësh, zgjerime, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, rrjet, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, njësi, z lart
from: 4d0ecbee
---

| Formati | Zgjerimi | Hap | Ruaj ose eksporto | Njësitë | Boshti lart | Ruan |
|---|---|---|---|---|---|---|
| Pjesë PartCraft | `.partcraft.json` | Po | {{ui:Ruaj}} | mm | Y | Historikun e plotë: skicat, lidhjet, përmasat, veçoritë, pezullimin, kthimin, cilësimin e kurbave, cilësimet e vizatimit dhe GD&T, tekstin STEP të importuar në një version të mëparshëm |
| Montim PartCraft | `.partcraft-asm.json` | Po | {{ui:Ruaj}} në një montim | mm | Y | Çdo pjesë (e mbyllur brenda), kopjet dhe pozicionet e tyre, lidhjet |
| STL (binar ose tekst) | `.stl` | Po, si trup i ngurtë: [Hap një STL, OBJ ose 3MF](topic:open-meshes) | {{ui:STL, për printim 3D}} | mm (pyetet kur hapet) | Z | Vetëm trekëndëshat e trupit |
| 3MF | `.3mf` | Po, si trup i ngurtë | {{ui:3MF, për printim 3D}} | mm (thuhet në skedar) | Z | Trupin si një objekt të vetëm rrjeti |
| OBJ | `.obj` | Po, si trup i ngurtë (vetëm faqe) | Jo | pyetet kur hapet | Z ose Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Po, si trup i ngurtë i lexuar si trekëndësha (sipërfaqet e lakuara vizatohen si facetë; sipërfaqet e sheshta, cilindrat, konet, sferat dhe torët e skedarit mbahen për eksport të saktë): [Hap një skedar STEP](topic:import-step) | | mm (nga njësia e skedarit) | Z, ose Y nëse e thua | Trupat e ngurtë dhe trupat sipërfaqësorë, montimet me çdo pjesë në vend; pa ngjyra, emra, pemë montimi ose PMI |
| `.3dm` | `.3dm` | Po, si një trup i ngurtë nga rrjetat dhe sipërfaqet e tij (rrjetat e ruajtura, përndryshe të triangulizuara): [Hap një model .3dm](topic:open-3dm-files) | | Nga njësia e skedarit | Z, ose Y nëse e thua | Rrjetat, politërfaqet, zgjatimet dhe vendosjet e blloqeve si një trup; pa kurba, ngjyra, shtresa ose emra |
| STEP AP242, i saktë | `.step` | | {{ui:STEP AP242 (trup i saktë i ngurtë)}} | mm | Z | Një trup i saktë: sipërfaqe të sheshta, cilindra, konë, sfera dhe torë në sipërfaqet e tyre të vërteta, rrathë dhe vija të vërteta si skaje; anët spline, filetimet e modeluara, trupat nga skedarët e rrjetit dhe sipërfaqet spline të një skedari STEP mbeten facetë. STEP që përdoret për programe të tjera CAD dhe CAM |
| STEP AP214, i saktë | `.step` | | {{ui:STEP AP214 (trup i saktë i ngurtë)}} | mm | Z | I njëjti trup i saktë në skemën më të vjetër AP214, për programe që lexojnë vetëm atë |
| STEP AP242, me facetë | `.step` | | {{ui:STEP (me facetë, kernel rrjeti)}} | mm | Y | Një trup i mbyllur me sipërfaqe të sheshta: sipërfaqet e rrumbullakëta si facetë. Për një program që refuzon skedarin e saktë |
| STEP AP214, me facetë | `.step` | | {{ui:STEP AP214 (me facetë, kernel rrjete)}} | mm | Y | I njëjti trup në skemën më të vjetër AP214, për programe që lexojnë vetëm atë |
| Paketë USD | `.usdz` | Jo | {{ui:Paketë USD (.usdz)}} | m | Z | Trupin me materialin, vëllimin dhe masën e tij; një montim me çdo pjesë një herë dhe çdo kopje të vendosur: [Eksporto si USD](topic:usd) |
| IFC 4 | `.ifc` | Jo | {{ui:IFC 4 (me çdo veti)}} | mm | Z | Forma si trekëndësha, materiali, çdo parametër, blloku i titullit, sasitë; pjesët e një montimi si tipe dhe kopjet e tij të vendosura |
| DXF R12, skicë | `.dxf` | Jo | {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} me një skicë të zgjedhur | mm | x, y e vetë skicës | Vija, harqe dhe rrathë të vërtetë, pika; shtresat PROFILE, CONSTRUCTION, POINTS |
| DXF R12, faqe | `.dxf` | Jo | {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} me një faqe të sheshtë të zgjedhur | mm | x, y e vetë faqes | Konturet e faqes: vrimat e rrumbullakëta si rrathë të vërtetë, pjesa tjetër si polivijë të mbyllura (skajet e rrumbullakëta si facetë) |
| Vizatim PDF | `.pdf` | Jo | {{ui:Vizatim (PDF): pamjet, prerja, detaji, GD&T}} | mm në një fletë A3 | | Pamjet e përparme, të sipërme, të djathta, izometrike, prerjet dhe detajet e vizatuara nga facetat, vijat e fshehura, përmasat e përgjithshme, simbolet GD&T, blloku i titullit |

## Skedarët e PartCraft

Të dyja janë tekst i thjeshtë (JSON). Trupi nuk ruhet kurrë: PartCraft e rindërton nga historiku, kështu që skedarët mbeten të vegjël dhe përputhen gjithmonë me historikun.

- Çdo skedar ka një numër versioni. Ky version shkruan çdo skedar pjese me versionin më të ulët që mban atë që përdor (2 deri në 5; një trup i bërë nga një rrjet kërkon 5) dhe hap çdo version më të vjetër. Një skedar nga një PartCraft më i ri refuzohet me një mesazh që i emërton të dy versionet.
- Çdo vlerë kontrollohet kur hapet skedari. Emrat humbin karakteret e kontrollit; numrat jashtë intervalit, referencat ndaj veçorive që mungojnë dhe llojet e panjohura të veçorive refuzohen me një arsye të thjeshtë.
- Mos i modifiko këto skedarë me dorë përveç nëse e njeh formatin. Një skedar që nuk kalon kontrollet nuk hapet.
- Një pjesë me një trup të madh STEP të importuar në një version të mëparshëm mund të kalojë 50 MB, më shumë se sa hap PartCraft si skedar pjese (shih [Zgjidhja e problemeve](topic:troubleshooting#file-problems)).

## Faceta dhe saktësia

STL dhe 3MF janë gjithmonë të përbërë nga facetë, sipas cilësimit **Kurbat**, dhe kështu është edhe DXF i faqes, përveç vrimave të rrumbullakëta, që janë rrathë të vërtetë. DXF i skicës ka harqe dhe rrathë të vërtetë, sepse vjen direkt nga skica. Ky version ndërton çdo pjesë me kernelin e rrjetit, prandaj pamjet e vizatimit (përfshirë prerjet) janë gjithashtu me facetë. Eksporti STEP i saktë është përjashtimi: kerneli di sipërfaqen e vërtetë të çdo faqeje nga skica (ose nga skedari STEP nga i cili u hap një trup), kështu që sipërfaqet e rrumbullakëta shkruhen si cilindra, konë, sfera dhe torë të vërtetë, pavarësisht se si është vendosur **Kurbat** (shih [Eksportimi për printim, STEP dhe DXF](topic:export-files#for-other-cad-programs-step)).

## Nuk mbështetet në këtë version

| Formati | Gjendja |
|---|---|
| glTF, IGES, Parasolid, ACIS (hyrje ose dalje); eksporti OBJ | Nuk është ndërtuar |
| DWG | Shkruhet vetëm nga [paketa e variantëve](topic:variant-pack), si fleta e vizatimit të çdo konfigurimi. Nuk lexohet, dhe nuk ka eksport tjetër. Eksporto DXF; çdo program CAD hap DXF R12 |
| STEP i montimit dhe vizatimi i një montimi | Nuk është ndërtuar ende. Eksporto çdo pjesë si STEP të saktë; STL, 3MF dhe lista e materialeve eksportohen nga një montim |
| Skedarët e veçantë të pjesëve dhe montimeve të programeve të tjera (përveç `.3dm`, që hapet si një trup) | Nuk është ndërtuar |

Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
