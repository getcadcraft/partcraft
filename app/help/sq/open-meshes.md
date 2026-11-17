---
title: Hap një STL, OBJ ose 3MF si trup të ngurtë
summary: Kthe një rrjetë nga një skaner, një faqe printimi 3D ose një program tjetër në një trup të ngurtë që mund ta presësh, ta shtosh dhe mbi të të skicosh; çfarë riparon PartCraft gjatë rrugës, dhe çfarë nuk mund.
keywords: stl, obj, 3mf, rrjetë, rrjetë në trup, konverto rrjetën, skanim, i mbyllur plotësisht, riparim, vrima, hendeqe, njësi, bosht lart, trup i importuar, faqe të sheshta
from: 7b948471
---

PartCraft i hap rrjetat STL, OBJ dhe 3MF si **trupa të ngurtë**. Trupi punon si çdo trup tjetër i ngurtë: e pret, e shton, e shpon, e modelon sipas skemës, e përdor në një montim ose për përpunim, dhe skicon mbi faqet e tij të sheshta. Nuk ka historik të vetin: një rrjetë është vetëm trekëndësha, kështu që madhësitë e saj nuk mund të ndryshohen, vetëm të shtohen ose të priten.

## Hap një rrjetë

1. Zgjidh {{ui:Hap}} ose shtyp {{key:Mod+O}}, dhe zgjidh skedarin `.stl`, `.obj` ose `.3mf`. Ose lëshoje mbi pamjen 3D.
2. PartCraft e lexon, riparon çfarë mund të riparojë me siguri dhe tregon çfarë gjeti: sa trekëndësha dhe pika, çdo riparim, dhe nëse rrjeta tani **mbyllet**.
3. Kontrollo **Njësitë në skedar** dhe **Lart në skedar**. STL dhe OBJ nuk e thonë njësinë e tyre, kështu që milimetrat janë supozimi; një skedar 3MF e thotë vetë. Rreshti **Madhësia këtu** tregon madhësinë e trupit me zgjedhjen tënde, kështu që një pjesë që del 25.4 herë më e vogël është e lehtë për t'u vërejtur (ishte në inç).
4. Nëse pjesa në ekran është bosh, zgjidh {{ui:Hap si trup}}. Nëse pjesa ka tashmë veçori, zgjidh **Përdore për** (shto te pjesa, pritu prej saj, ose mbaj vetëm pjesën e përbashkët), pastaj {{ui:Shtoje te kjo pjesë}}, ose {{ui:Pjesë e re}} për të nisur sërish me rrjetën.

Një veçori **Imported1** shfaqet në historik. Shiriti i statusit thotë, për shembull, "bracket.stl është një trup i ngurtë: 15200.512 mm³, 14 faqe të sheshta për të skicuar mbi to."

## Çfarë riparon PartCraft

| Riparimi | Çfarë do të thotë |
|---|---|
| Qoshet e dyfishta të bashkuara | Një STL përsërit çdo qoshe për secilin nga trekëndëshat e tij; ato bashkohen në një pikë |
| Trekëndëshat pa sipërfaqe hiqen | Copëza, qoshet e të cilave janë në një vijë |
| Trekëndëshat e dyfishtë hiqen | Një trekëndësh i shkruar dy herë mbahet një herë; dy që shikojnë në drejtime të kundërta (një mur i brendshëm) hiqen të dy |
| Hendeqet e vogla mbyllen | Brinjët që pothuajse takohen (brenda një të mijëtës së madhësisë së pjesës) bashkohen |
| Vrimat mbushen | Një hapje, kufiri i së cilës shtrihet e sheshtë, mbushet pavarësisht madhësisë; një hapje e shtrembëruar vetëm kur është e vogël |
| Trekëndëshat kthehen për të dalë jashtë | Trekëndëshat që shikojnë gabim kthehen që të pajtohen me fqinjët, dhe e gjithë sipërfaqja del jashtë |

## Kur një rrjetë nuk mbyllet

Një trup i ngurtë ka nevojë për një sipërfaqe pa hapje. Kur PartCraft nuk mund ta mbyllë një të tillë, dialogu thotë sa hapje dhe brinjë të hapura mbeten, dhe nuk ka trup për ta shtuar. Mbyll hapjet në programin që e bëri rrjetën, ose eksportoje përsëri si rrjetë të mbyllur (watertight), dhe hape përsëri.

PartCraft e le një hapje të paprekur kur mbushja mund të gabonte: një vrimë e madhe e shtrembëruar, ose dy hapje në të njëjtin plan (një faqe unazore që mungon, ku mbushja e secilit kufi do të mbulonte vrimën në mes). Një brinjë e ndarë nga më shumë se dy trekëndësha raportohet gjithashtu: një sipërfaqe e tillë nuk ka një brendësi të qartë.

## Skicon mbi faqet e sheshta

Zonat e sheshta të bëra nga shumë trekëndësha bashkohen në një **faqe të sheshtë** secila, kështu që një skicë mund të vendoset mbi to: kliko faqen dhe zgjidh {{ui:Skicë mbi këtë faqe}}. Një faqe që priet ose shtohet më vonë mbetet faqe. Zonat e rrumbullakëta (një vrimë, një rrumbullakim) mbeten trekëndësha: nuk janë faqe që mund t'i zgjedhësh, dhe pamja vizaton konturin e tyre nga këndi ndërmjet trekëndëshave.

## Ndrysho më vonë

Zgjidh **Imported1** për të parë skedarin nga erdhi, sa trekëndësha ka dhe çfarë u riparua. **Njësitë në skedar**, **Lart në skedar** dhe **Përdore për** mund të ndryshohen atje; çdo ndryshim është një hap i zhbërjes.

## Ku ruhet

Rrjeta e riparuar ruhet **brenda** skedarit `.partcraft.json`, kështu që nuk të duhet më skedari i rrjetës. Një skedar pjese me trup rrjete është version 5: një PartCraft më i vjetër e refuzon sipas versionit të tij. Një rrjetë me 200,000 trekëndësha shton rreth 1.2 MB.

## Kufijtë

- Deri në 3 milionë trekëndësha dhe 200 MB në një skedar.
- Një trup i bërë nga një rrjetë ndërtohet nga kerneli i rrjetës. Me kernelin e saktë të ndezur (vetëm për zhvilluesit), e thotë këtë dhe nuk ndërtohet.
- Materialet OBJ, koordinatat e teksturës dhe kurbat e lira lihen jashtë; ngjyrat, materialet dhe objektet mbështetëse të 3MF lihen jashtë (dialogu thotë sa objekte u anashkaluan).
- Trupi është aq i imët sa rrjeta: një STL i trashë jep faqe të rrumbullakëta të trasha. Vrimat që shpon në të janë aq të rrumbullakëta sa veçoritë e tua.
