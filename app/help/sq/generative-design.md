---
title: Krijo një formë nga ngarkesat (Gjeneruese)
summary: Zgjidhni faqet që mbahen dhe ngarkohen, zonat që duhen mbajtur dhe ato që duhen mbajtur të lira, vëllimet dhe materialet e synuara, dhe gjeneroni rezultate: format më të forta të gjetura për çdo vëllim, të kontrolluara përsëri si solide, të krahasuara në një tabelë dhe të shkarkuara si STL, STEP ose pjesë e re.
keywords: projektim gjenerues, optimizim topologjik, SIMP, i lehtë, rrjetë, formë organike, rezultate, krahasim, masë, pjesë e vëllimit, ruaj, mbaj brenda, pengesë, mbaj jashtë, hapësirë projektimi, madhësia minimale e anëtarit, STL, printim 3D
from: 5b91fa8e
---

Hapësira **Gjeneruese** heq materialin që ngarkesat nuk e kanë nevojë. Ju thoni ku mbahet dhe ngarkohet pjesa, çfarë duhet të mbetet dhe çfarë duhet të mbetet e lirë; PartCraft gjen formën më të fortë për çdo vëllim të synuar (**optimizim topologjik**), kontrollon secilën përsëri si solid me materialin real, dhe shfaq rezultatet krah për krah. Punon mbi faqet e emërtuara që i jep kerneli i rrjetit pjesës (shih [Kerneli i rrjetit](topic:solid-kernels)).

Zgjidhni **Gjeneruese** te kutia **Hapësira e punës**. Pjesa juaj nuk ndryshon; studimi ruhet brenda skedarit të pjesës.

## Konfiguroni një studim

1. Shtypni **Studim i ri** në panelin e djathtë.
2. **Hapësira**: *Pjesa siç është* heq materialin nga pjesa juaj; *Një kuti rreth pjesës* rritet në një formë brenda një kutie më të madhe se pjesa, me **Margjinën e kutisë**.
3. **Madhësia e elementit**: lëreni bosh për madhësi automatike (rreth 8,000 kube), ose shkruani një. Madhësitë më të holla japin forma më të holla dhe marrin më shumë kohë.
4. **Anëtari minimal**: anëtarët më të hollë se rreth dy herë kjo nuk formohen. Bosh do të thotë një e gjysmë kube.
5. Shenjoni një deri në gjashtë **Vëllime të synuara** (pjesa e hapësirës së projektimit që forma mund ta mbushë) dhe një deri në katër **Materiale**. Çdo vëllim gjenerohet një herë; çdo material kontrollohet mbi atë formë (forma më e fortë nuk varet nga materiali, por masa, stresi dhe faktori i sigurisë i saj varen).

## Qëllimet

- {{ui:Fiksuar}}: klikoni faqet që mbahen. Një **Faqe pa fërkim** nga lista **Shto** e panelit mban një faqe vetëm përgjatë vetes (përdoreni për planet e simetrisë).
- {{ui:Forcë}}: klikoni faqet e ngarkuara, pastaj shkruani forcën totale dhe zgjidhni drejtimin e saj në panel. **Presioni** është në listën **Shto**.
- {{ui:Ruaj}}: klikoni faqet rrethinat e të cilave duhet të mbeten të ngurta, dhe vendosni sa thellë (**Mbaj të ngurtë brenda**) — për shembull rreth vrimave të bulonave. Faqet që fiksoni ose ngarkoni mbahen gjithmonë.
- {{ui:Pengesë}}: klikoni faqet rrethinat e të cilave duhet të mbeten bosh, dhe vendosni sa larg (**Mbaj bosh brenda**) — hapësirë për një bosht ose një vegël.

Shtypni **Mbaro zgjedhjen** ose {{key:Esc}} pasi të klikoni faqet. Nuancat jeshile dhe të kuqe tregojnë zonat.

## Gjenero dhe krahaso

Shtypni {{ui:Gjenero}}. Paneli shfaq progresin dhe kohën e mbetur; **Ndalo** anulon. Çdo rezultat shfaqet në tabelën **Rezultatet**: vëllimi i synuar, materiali, **masa**, **stresi më i madh**, **zhvendosja më e madhe** dhe **faktori i sigurisë** (rendimenti ÷ stresi), të gjitha nga rillogaritja e formës së përfunduar si kube solide me materialin real.

Zgjidhni një rezultat për ta parë në pamje (pjesa fshihet; shenjoni **Shfaq pjesën përmes tij** për t'i parë të dyja). Poshtë tabelës: sa iterime u desh dhe nëse u qetësua, ngurtësia e tij si solid kundrejt shifrës së vet të optimizuesit, dhe sipërfaqja e tij.

## Përdorni një rezultat

- **STL**: një rrjetë trekëndëshash e mbyllur, gati për printim 3D.
- **STEP (me faqe)**: e njëjta sipërfaqe si një solid STEP i përbërë nga faqe të sheshta.
- **Skedar i ri pjese**: një pjesë PartCraft, veçoria e vetme e së cilës është rezultati si solid i importuar. Hapeni për të skicuar mbi të, për të prerë vrima ose për ta kontrolluar në Simulim. Është me faqe (mijëra faqe të sheshta), jo një formë e redaktueshme.
- **Shto te kjo pjesë** e bashkon rezultatin me pjesën; është aktiv vetëm për një dizajn me kuti hapësire (kur vetë pjesa është hapësira, rezultati shtrihet brenda pjesës).

**Skedari i ri pjese** dhe **Shto te kjo pjesë** nuk janë ndërtuar ende në këtë version: rezultati bëhet një solid i importuar, gjë që kërkon një kernel të saktë. Shkarkimet STL dhe STEP (me faqe) funksionojnë.

## Sa t'i besoni

- Optimizon **ngurtësinë** për vëllimin e dhënë. Nuk ka ende kufij stresi dhe as rregulla prodhimi (konsole, drejtime frezimi, madhësi minimale vrimash): kontrolloni një rezultat të zgjedhur te [Simulimi](topic:simulation) dhe rregulloni.
- Anëtarët e hollë një ose dy kube të gjerë janë përafrime: përdorni një madhësi elementi më të vogël për pjesët e hollë.
- Metoda është SIMP me një filtër dendësie, një projeksion pragu dhe përditësime me kriter optimaliteti; stresi dhe deformimi i raportuar janë të rezultatit si kube, gjë që është e ndershme por e trashë te cepat e mprehta.

## Lidhur me këtë

- [Kontrolloni stresin dhe deformimin (Simulim)](topic:simulation)
- [Eksportoni për printim, STEP dhe DXF](topic:export-files)
- [Çfarë nuk është ndërtuar ende](topic:not-built-yet)
