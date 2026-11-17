---
title: Hap një skedar STEP dhe ndërto mbi të
summary: Sill një model STEP nga furnitori ose nga një program tjetër CAD në PartCraft si trup të ngurtë, si pjesë të re ose të shtuar te ajo aktuale, cakto cilës anë është lart, dhe shto skica dhe veçori.
keywords: step, stp, import, hap step, ap203, ap214, ap242, model furnitori, trup i ngurtë pa histori, trup i ngurtë i importuar, boshti lart, z lart, y lart, trekëndësha, me facetë, step montimi
from: ca0eca5f
---

PartCraft hap skedarë STEP (`.step` ose `.stp`, AP203, AP214 dhe AP242) si **trupa të ngurtë** mbi të cilët mund të skicosh, prish, shpon dhe kombinosh me veçoritë e tua. Trupi nuk ka histori të vetën: nuk mund të ndryshosh përmasat me të cilat u bë, vetëm mund të shtosh ose të presësh nga ai.

Ky version ndërton çdo pjesë me kernelin e rrjetës, kështu që një skedar STEP **lexohet si trekëndësha**: sipërfaqet e sheshta mbeten të sheshta, dhe sipërfaqet e lakuara (cilindra, kone, sfera, tore, sipërfaqe B-spline) bëhen shumë facetë të vogla të sheshta. Vëllimi i tij del brenda një pjesë të qindtë nga ai i saktë. Mbajtja e sipërfaqeve të lakuara saktësisht kërkon një kernel të saktë, i cili nuk është në këtë version.

## Hap një skedar STEP

1. Zgjidh {{ui:Hap}} ose shtyp {{key:Mod+O}}, dhe zgjidh skedarin `.step` ose `.stp`. Ose lëshoje mbi pamjen 3D.
2. PartCraft lexon skedarin dhe shfaq çfarë gjeti, për shembull: "Skedar AP214: 1 trup i ngurtë, 10 sipërfaqe, lexuar si trekëndësha." Më poshtë janë numri i trekëndëshave, çdo gjë që u la jashtë ose u bashkua, dhe nëse rezultati mbyllet.
3. Kontrollo **Lart në skedar**. Një skedar STEP e thotë vetë njësinë e tij (milimetra, inç, metra…); PartCraft e shndërron në milimetra, kështu që **Njësitë në skedar** shfaq Milimetra, "skedari e thotë kështu". **Madhësia këtu** tregon sa e madhe do të jetë.
4. Zgjidh {{ui:Hap si trup}} për një pjesë boshe, ose {{ui:Shtoje te kjo pjesë}} / {{ui:Pjesë e re}} kur pjesa ka tashmë veçori. Shtimi pyet se çfarë të bëjë **Përdore për**: të shtojë, të presë ose të mbajë vetëm pjesën e mbivendosur.

Një veçori **Imported1** shfaqet në histori, dhe shiriti i statusit thotë, për shembull, "plate.step është trup i ngurtë: 57995.937 mm³, 6 sipërfaqe të sheshta për skicim."

## Një STEP montimi

Një montim vjen si **një trup** me çdo pjesë aty ku e vendos skedari ("3 pjesë të vendosura në skedar vijnë aty ku qëndrojnë"). Një pjesë e përdorur dy herë vjen dy herë. Emrat e pjesëve dhe pema e montimit nuk ruhen.

## Cakto cilës anë është lart

Shumica e programeve CAD përdorin Z lart; PartCraft përdor Y lart. Si parazgjedhje PartCraft e kthen skedarin që Z të tregojë lart këtu. Nëse pjesa vjen e shtrirë anash, zgjidh **Imported1** dhe vendos **Lart në skedar** në **Y lart**. **Njësitë në skedar** dhe **Përdore për** mund të ndryshohen edhe aty; çdo ndryshim është një hap zhbërjeje.

## Ndërto mbi të

- Kliko një sipërfaqe të sheshtë të trupit dhe zgjidh {{ui:Skicë mbi këtë faqe}}. Sipërfaqet e sheshta të modelit STEP e ruajnë vendin e tyre kur trupi ri-ndërtohet.
- Shto prerje, vrima, bosse, modele dhe pasqyrime si në çdo pjesë.
- Kontrollo madhësinë e tij te kutia **Pjesa**: vëllimi, sipërfaqja dhe madhësia.

Rrumbullimet, pjerrësitë dhe guaskat kërkojnë kernelin e saktë, si në çdo pjesë në këtë version ([Kerneli i rrjetës](topic:solid-kernels)).

## Ku ruhet

Trekëndëshat ruhen **brenda** skedarit `.partcraft.json`, kështu që skedari i pjesës është i plotë: nuk të duhet më skedari STEP.

## Mesazhet

| Mesazhi | Çfarë do të thotë |
|---|---|
| '"part.stp" nuk është skedar STEP (nuk fillon me ISO-10303-21).' | Skedari nuk është tekst i thjeshtë STEP. Kërko nga dërguesi një skedar STEP AP203, AP214 ose AP242 |
| "Skedari STEP nuk mund të lexohet: seksioni i tij i të dhënave mungon ose është dëmtuar." | Skedari është i prerë ose i dëmtuar. Kopjoje përsëri |
| "Skedari STEP nuk mban asnjë trup të ngurtë ose sipërfaqe: nuk ka çfarë të sillet." | Skedari mban vetëm vizatime, pika ose të dhëna. Kërko një trup të ngurtë |
| "Ai skedar STEP është shumë i madh (mbi 60 MB) për t'u importuar këtu." dhe kufijtë e tjerë të lexuesit (hyrje, sipërfaqe, trekëndësha) | Thjeshto modelin në burim, ose dërgo pjesët një nga një |
| "… rreshta të dëmtuar në skedar u kaluan." | Disa rreshta nuk u lexuan; pjesa tjetër u importua. Kontrollo trupin |
| "… sipërfaqe nuk mund të shndërroheshin në trekëndësha dhe u lanë jashtë." | Ato sipërfaqe lënë vrima, të cilat PartCraft përpiqet t'i mbushë; nëse trupi nuk mbyllet, nuk shtohet |
| "… sipërfaqe të një lloji që nuk lexohet (…) u kaluan." | Një lloj i rrallë sipërfaqeje. Kërko modelin me sipërfaqe të thjeshta ose B-spline |
| "Nuk mbyllet …" | Sipërfaqet nuk formojnë një trup të mbyllur (një model sipërfaqesh, ose sipërfaqe të lëna jashtë). PartCraft tregon hapjet dhe nuk shton asgjë |

## Kufijtë

- Sipërfaqet e lakuara vizatohen dhe matën si facetë të sheshta, si në çdo pjesë që ndërton ky version. PartCraft mban me trupin sipërfaqet e sheshta, cilindrat, konet, sferat dhe toret e skedarit, kështu që {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} i shkruan përsëri si sipërfaqe të vërteta, vrimat si vrima, bashkë me veçoritë që shton. Sipërfaqet që skedari i jep si spline, sweep ose sipërfaqe rrotullimi mbeten facetë në eksport. Një pjesë e ruajtur para 0.9.1 nuk ka sipërfaqe të mbajtura: hap përsëri skedarin STEP për t'i marrë ato.
- {{ui:Eksporto}} › {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} me një sipërfaqe të sheshtë të zgjedhur shkruan një vrimë rrethore të skedarit si rreth të vërtetë.
- Ngjyrat, emrat e trupave, struktura e montimit dhe PMI (tolerancat në skedar) nuk lexohen.
- Përveç STEP, PartCraft hap rrjetat STL, OBJ dhe 3MF ([Hap një STL, OBJ ose 3MF](topic:open-meshes)) dhe skedarët `.3dm` ([Hap një model .3dm](topic:open-3dm-files)) si trupa të ngurtë. IGES dhe skedarët e tjerë vendas të programeve të tjera nuk mbështeten.
- Një pjesë me një trup STEP të importuar nga një ndërtim që kishte kernelin e saktë e mban tekstin STEP; ky version e kalon këtë veçori ("nuk është ndërtuar"). Hap përsëri skedarin STEP për ta sjellë si trekëndësha.
