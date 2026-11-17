---
title: Forma të lira me Form dhe veçori sipërfaqesh
summary: Shtyni dhe tërhiqni një kafaz kontrolli të lëmuar në hapësirën e punës Form, palosni skajet, përdorni simetrinë, kontrolloni dhe përfundoni në një solid ose sipërfaqe të saktë, pastaj lyeni, ngrini, qepni, trashësoni, zhvendosni, zgjasni dhe shkurtoni sipërfaqet te Projektimi. Çfarë është e saktë dhe çfarë është e përafruar.
keywords: form, formë e lirë, T-spline, nënndarje, Catmull–Clark, kafaz, kuadsferë, palosje, simetri, zebra, lakueshmëri, sipërfaqe, lyerje, mbushje, sipërfaqe loft, qepje, trashje, sipërfaqe e zhvendosur, zgjatje, shkurtim
from: 0d326ef4
---

:::note
**Nuk është ndërtuar ende në këtë version.** Përfundimi i një forme në pjesë, dhe veçoritë e sipërfaqes, kërkojnë një kernel gjeometrik të saktë, të cilin ky version i PartCraft nuk e ka: ai ndërton çdo pjesë me kernelin e rrjetit. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bëni në vend të kësaj. Pjesa tjetër e kësaj faqeje i përshkruan ato ashtu siç punojnë me një kernel të saktë.
:::

Hapësira e punës **Form** bën forma organike. Ju redaktoni një **kafaz**, një rrjet i trashë cepash, skajesh dhe faqesh. Forma është sipërfaqja e lëmuar që kontrollon kafazi (kufiri i saj Catmull–Clark), kështu që lëvizja e një cepi përkul butësisht sipërfaqen rreth tij. Kur duket mirë, **Përfundimi** e shton në historinë e pjesës si veçori *Form*, dhe kerneli i saktë e kthen atë në sipërfaqe të vërteta B-spline. Mund ta rrumbullakoni, ta prisni, ta lidhni me veçori të tjera dhe ta eksportoni si STEP.

Zgjidhni **Form** te lista **Hapësira e punës** në anën e majtë të shiritit të veglave.

## Nisni një kafaz

1. Vendosni **Madhësinë** dhe **Ndarjet** në panelin e djathtë. Ndarjet janë sa faqe merr secila anë.
2. Klikoni {{ui:Kuti}}, {{ui:Kuadsferë}} ose {{ui:Plani}} në shiritin e veglave. Paneli ka gjithashtu **Cilindër**, **Torus** dhe **Faqe me klikime**.

- Një **kuadsferë** është një kafaz kutie i përshtatur në mënyrë që pikat e cepave të tij të shtrihen mbi një sferë. Midis atyre pikave sipërfaqja qëndron pak brenda sferës: rreth 0.4 % më pak vëllim me 2 ndarje.
- Një **plan** është i hapur, prandaj bëhet një trup sipërfaqeje (shih "Veçoritë e sipërfaqes te Projektimi" më poshtë).
- **Faqe me klikime**: klikoni 4 pika në planin e sipërm (tokësor) ose në cepat e kafazit për të bërë një faqe. Faqet që ndajnë cepa lidhen. Shtypni {{key:Enter}} pas 3 pikash për një trekëndësh, ose {{key:Esc}} për të ndalur.

Kafazi juaj i pa përfunduar ruhet me skedarin e pjesës, kështu që mund ta mbyllni skedarin dhe të vazhdoni më vonë.

## Zgjidhni dhe lëvizni

- Klikoni një cep, një skaj ose një faqe të kafazit. {{key:Shift}}+klikimi shton ose heq elemente. {{key:Esc}} pastron përzgjedhjen.
- Një gizmo shfaqet në mes të përzgjedhjes. Tërhiqni një shigjetë për të lëvizur përgjatë saj, ose një katror për të lëvizur në atë plan. Shtypni {{key:W}} për të lëvizur, {{key:E}} për të rrotulluar dhe {{key:R}} për të ndryshuar shkallën, ose përdorni butonat në panel. {{ui:Gizmo}} në shiritin e veglave kalon ndër to.
- **Zbutja e rënies** (mm) tërheq gjithashtu cepat brenda kësaj largësie, duke u zbehur butësisht deri në zero në skajin e kësaj largësie.
- Çdo tërheqje është një hap zhbërjeje: {{key:Ctrl+Z}} dhe {{key:Ctrl+Y}} funksionojnë si zakonisht.

## Ndryshoni kafazin

Butonat **Modifiko** në panel veprojnë mbi përzgjedhjen:

| Butoni | Çfarë bën |
|---|---|
| {{ui:Ekstrudo}} | Faqet e zgjedhura zhvendosen jashtë me **Largësinë e ekstrudimit**, sipas normaleve të tyre, me faqe anësore të reja. Skajet e hapura të zgjedhura rritin faqe të reja nga jashtë. |
| {{ui:Unazë brinjësh}} / Fut unazë skajesh | Ndan unazën e faqeve katërkëndëshe që kalon nëpër skajin e zgjedhur, në mes të rrugës. Më shumë unaza japin kurba më të ngushta. |
| Fut pikë | Fut një cep në mes të skajit të zgjedhur. |
| Nënndaj | Ndan çdo faqe të zgjedhur në faqe katërkëndëshe rreth mesit të saj. |
| Lidh | Lidh dy faqe të zgjedhura, ose dy hapje (zgjidhni një skaj të hapur në secilën), me një tub faqesh. Të dyja kërkojnë të njëjtin numër skajesh. |
| Mbush vrimën | Mbyll hapjen përmes skajit të hapur të zgjedhur me një faqe. |
| Saldim | Bashkon cepat e zgjedhur në një, në mesin e tyre. |
| Sheshto | Zhvendos cepat e zgjedhur në planin që u përshtatet më mirë. |
| Fshi | Heq faqet, skajet (dy faqe bashkohen) ose cepat e zgjedhur. |

## Skajet e mprehta, simetria dhe shfaqja

- {{ui:Palos}} bën skajet e zgjedhura të mprehta. **Pesha e palosjes** 10 është plotësisht e mprehtë. Një peshë më e vogël mbetet e mprehtë për aq hapa përmirësimi dhe pastaj zbutet, gjë që jep një rreth të ngushtë në vend të një palosjeje të ashpër. **Hiq palosjen** i bën ato përsëri të lëmuara. **Cep i mprehtë** fikson një cep, kështu që sipërfaqja kalon nëpër të me një pikë.
- **Simetria** pasqyron kafazin përgjatë X, Y ose Z = 0. Mban anën pozitive, e pasqyron dhe bashkon dy gjysmat. Pas kësaj, një ndryshim në njërën anë ndodh në të dyja. Cepat në planin e pasqyrimit mbeten mbi të.
- {{ui:Shfaqja}} ndërron midis **Të lëmuar** (sipërfaqja që do të jetë veçoria) dhe **Kuti** (vetë faqet e kafazit).
- **Analiza**: **Vijat zebra** reflektojnë një dritë me vija nga pamja aktuale. Ato përkulen butësisht mbi një sipërfaqe të lëmuar dhe thyhen te një palosje. **Lakueshmëria mesatare** ngjyros zonat konvekse të kuqe, ato konkave blu dhe zonat e sheshta të bardha. Matet mbi rrjetën e shfaqur me formulën kotangjente, kështu që është një udhëzues, jo një matje.

## Kontrolloni dhe përfundoni

- **Kontrollo saktë** konverton kafazin në kernelin e saktë pa ndryshuar pjesën tuaj. Raporton sa copëza B-spline bën kafazi, sa prej tyre janë të sakta, dhe nëse rezultati është një solid i mbyllur dhe i vlefshëm, dhe vëllimin e tij.
- {{ui:Përfundimi}} shton një veçori *Form* në histori, ose përditëson formën që po redaktonit, dhe ju kthen te Projektimi. Një kafaz i mbyllur bëhet solid. **Veprimi** i tij te paneli i Projektimit mund të jetë Trup i ri, Bashko, Prit ose Kryqëzo. Një kafaz i hapur bëhet një trup sipërfaqeje.
- Për të ndryshuar një formë më vonë, zgjidheni në histori dhe klikoni **Redakto në Form**. Trupi i ndërtuar fshihet ndërsa redaktoni kafazin e tij.
- **Hidh** e heq kafazin pa prekur historinë.

## Çfarë është e saktë dhe çfarë është e përafruar

Çdo faqe katërkëndëshe e kafazit, e rafinuar kur nevojitet, bëhet një copëz bikubike B-spline.

- Kur çdo cep i një faqeje është *i rregullt* (katër skaje takohen brenda sipërfaqes, ose tre në një skaj të hapur ose përgjatë një palosjeje), copëza është **saktësisht** sipërfaqja e nënndarjes. Testet e kontrollojnë këtë deri në 1e-9 mm.
- Rreth një **pike të jashtëzakonshme** (tre, pesë ose më shumë skaje që takohen, një cep i një faqeje me tre ose pesë anë, ose fundi i një palosjeje) nuk ka copëz polinomiale të saktë. Atje copëza merr pikën dhe planin tangent të saktë në atë cep dhe kurbat e skajeve fqinje, kështu që copëzat ende takohen pa hapësirë. Tangjenca midis skajeve që takohen në pikë është e përafruar. Paneli i Form dhe paneli i veçorisë japin këndin më të madh, zakonisht nën 2°. Një **Nivel** më i lartë në panelin e veçorisë i bën këto copëza më të vogla dhe më të afërta.
- Palosjet e mprehta janë skaje të vërteta të solidit, kështu që mund t'i rrumbullakoni.
- Çdo copëz është faqja e vet, kështu që një formë ka shumë faqe dhe vija vizatohen midis tyre.

## Veçoritë e sipërfaqes te Projektimi

Komandat e sipërfaqes janë në menynë {{ui:Më shumë}} të Projektimit, nën veçoritë. Ato kërkojnë kernelin e saktë. Trupat e sipërfaqes vizatohen transparentë, në blu. Nuk janë pjesë e solidit derisa t'i trashësoni ose qepni.

| Komanda | Çfarë bën |
|---|---|
| Lyerje | Mbush një unazë të mbyllur skajesh. Shtypni fillimisht {{key:Shift}}+klikim te skajet e solidit, ose zgjidhni një trup sipërfaqeje për të mbushur hapjen e tij. **Tangjente (G1)** e bën lyerjen të takohet me atë sipërfaqe në mënyrë të butë. |
| Sipërfaqe loft | Një sipërfaqe përmes një zinxhiri kurbash për skicë (të hapura ose të mbyllura), sipas radhës së historisë. |
| Qepje | Qep trupat e sipërfaqes përgjatë skajeve të tyre të përbashkëta. Nëse mbyllen, rezultati është një solid, me një Veprim si veçoritë e tjera. |
| Trashje | I jep një trupi sipërfaqeje trashësi: sipas normales së tij, kundër saj, ose gjysmën në secilën anë. Rezultati është një solid. |
| Sipërfaqe e zhvendosur | Një kopje e një trupi sipërfaqeje e zhvendosur sipas normaleve të tij. Origjinali mbetet. |
| Zgjat sipërfaqen | Rrit një sipërfaqe me një faqe përtej skajeve që zgjidhni. |
| Shkurto sipërfaqen | Pret një trup sipërfaqeje aty ku e kryqëzon një trup tjetër sipërfaqeje, ose solidi. Klikoni **Zgjidh një pikë në pjesë** për të zgjedhur cilën pjesë ta mbani, ose mbaj gjithçka tjetër. |

Qepja, Trashja, Zgjatja dhe Shkurtimi e harxhojnë trupin e sipërfaqes nga i cili nisin. Veçoritë e mëvonshme përdorin të renë.

Kufizimet sot: format me disa pjesë të veçanta të mbyllura nuk shndërrohen në një solid të vetëm; zonat e rregullta nuk bashkohen në sipërfaqe më të mëdha; dhe shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
