---
title: Cilësimet e PartCraft
summary: Zgjidhni cilin buton të miut e kthen pamjen, bëni që një lëvizje me prekës ta kthejë dhe ta lëvizë pjesën, ndizni ose fikni lidhjet automatike gjatë skicimit, dhe caktoni sa fije përdorin zgjidhësit e simulimit.
keywords: cilësimet, preferencat, opsionet, miu, buton i mesit, buton i rrotës, orbitim, rrotullim, kthim, prekës, touchpad, lëvizje me dy gishta, shtrëngim me dy gishta, lidhje, kufizime, lidhje automatike, ngjitje, fije, fije zgjidhësi, bërthama, procesorë, shumë-fije, zgjidhje më e shpejtë, paralel
from: 759edcaf
---

Hapni {{ui:Settings}} me ingranazhin në shiritin e aplikacionit ose me {{key:Mod+,}}. Skeda e parë, {{ui:PartCraft}}, mban cilësimet që i përkasin vetëm këtij aplikacioni; {{ui:General}} mban ato që i ndajnë të gjitha aplikacionet CadCraft (tema, shiriti i veglave, panelet). Cilësimet e PartCraft ekzistojnë vetëm në aplikacion: i ndryshoni këtu dhe ky shfletues i mban mend. {{ui:Reset PartCraft settings}} i kthen të gjitha në fillim.

## Kthimi i pamjes

- **Butoni i majtë** (fillimisht): tërhiqni me butonin e majtë për të kthyer pjesën; tërhiqni me butonin e djathtë ose të mesit për ta lëvizur.
- **Butoni i mesit**: shtypni rrotën dhe tërhiqni për të kthyer pjesën; mbani {{key:Shift}} (ose {{key:Ctrl}}, ose ⌘) me butonin e mesit, ose tërhiqni me butonin e djathtë, për të lëvizur. Butoni i majtë vetëm zgjedh sipërfaqe, brinjë dhe plane, kështu që një klikim që lëviz pak nuk e kthen kurrë pjesën. Shumë programe CAD punojnë kështu.

Rrota zmadhon te treguesi në të dyja rastet. Në një skicë, butonat e djathtë dhe të mesit lëvizin si më parë.

## Lëvizja: rrota e miut ose prekësi

- **Zbulo vetë** (fillimisht): PartCraft vëzhgon lëvizjen. Lëvizja anash ose e imët, siç e dërgon një prekës, kthen pjesën; hapat e plotë të rrotës zmadhojnë.
- **Rrota e miut**: lëvizja zmadhon gjithmonë drejt treguesit.
- **Prekësi**: rrëshqitni me dy gishta për të kthyer pjesën; mbani {{key:Shift}} dhe rrëshqitni për ta lëvizur; shtrëngoni për të zmadhuar. Në një skicë, rrëshqitja me dy gishta lëviz skicën.

Një shtrëngim me dy gishta zmadhon në çdo zgjedhje. Nëse "Zbulo vetë" gabon për miun ose prekësin tuaj, zgjidhni atë që keni. Më shumë te [Prekësi, prekja dhe ekranet e vegjël](topic:trackpad-and-touch).

## Skicimi: shto lidhje gjatë vizatimit

**Shto lidhje gjatë vizatimit** (ndezur fillimisht): një klikim që ngjitet te një pikë e bën pikën e re të lidhur me të, një klikim mbi një kurbë vendos pikën mbi atë kurbë, dhe një vijë e vizatuar pothuajse horizontale ose vertikale bëhet horizontale ose vertikale. Shih [Lidhjet dhe dimensionet](topic:relations-dimensions).

Fikeni kur doni të vendosni gjeometri pranë gjeometrisë tjetër pa e lidhur me të. Treguesi ngjitet ende te pikat dhe kurbat, por asgjë nuk bashkohet: vijat e vizatuara në zinxhir nuk i ndajnë skajet e tyre, kështu që një tërheqje mund t'i ndajë. Shtoni vetë lidhjet që doni nga paneli i djathtë. Një profil i mbyllur ekstrudohet ende kur skajet e tij takohen.

:::note
Cilësimi ndryshon vetëm atë që shton vizatimi i ri. Lidhjet që janë tashmë në një skicë mbeten, dhe mjeti i rrumbullakimit ende krijon harkun e vet tangent dhe rrezen.
:::

## Skicimi: vendos dimensione ndërsa vizaton

**Vendos dimensione ndërsa vizaton** (ndezur fillimisht): ndërsa vizatohet një vijë, drejtkëndësh, rreth ose hark, shkrimi i një numri plotëson kutinë e madhësisë pranë treguesit ({{key:Tab}} shkon te kutia tjetër) dhe {{key:Enter}} vizaton formën me atë madhësi, me një dimension drejtues për çdo madhësi që keni shkruar. Fikur: shkrimi i një numri gjatë vizatimit nuk bën asgjë, dhe format vizatohen vetëm me klikime. Shih [Shkruaj madhësinë gjatë vizatimit](topic:sketch-basics#type-the-size-as-you-draw).

## Tregues në cep

Ç'shfaqet në cepin e pamjes 3D: **Kubi i pamjes** (fillimisht; lart djathtas — klikoni një sipërfaqe, brinjë ose cep për të parë nga aty, tërhiqeni për të orbituar, tërhiqeni unazën e busullës për ta kthyer modelin), **Ikona e boshtit** (një shenjues i vogël X, Y, Z poshtë majtas që ndryshon me pamjen: X e kuqe, Y e gjelbër, Z e kaltër) ose **Asnjë**. Asnjëri nuk shfaqet gjatë skicimit ose në fletën e vizatimit. Shih [Kubi i pamjes](topic:view-cube).

## Fijet e zgjidhësit

Sa fije mund të përdorin zgjidhësit e simulimit. **Automatike** (fillimisht) merr një më pak se procesorët logjikë të kompjuterit (më së shumti 16), kështu që faqja mbetet e përgjegjshme ndërsa një studim zgjidhet; ose zgjidhni një numër. Studimet e mëdha me vokselë, buckling, stresi me kohën dhe rrjedha zgjidhen më shpejt në disa fije (rreth 2× në 4 fije për 80,000 kube sipas matjeve tona, më shumë në një kompjuter të lirë); modelet nën rreth 20,000 të panjohura mbeten në një fije, sepse nisja e fijeve kushton më shumë se sa kursejnë. Një zgjidhje me fije jep të njëjtën përgjigje si një fije (deri te rrumbullakimi: shumat mblidhen në rend tjetër). Rezultatet e çdo studimi listojnë **N fije** ose **1 fije** me arsyen nën **Zgjidhësi**.

Fijet kërkojnë që faqja të jetë **e izoluar me origjinë të kryqëzuar** (shfletuesi lejon punëtorët të ndajnë memorien vetëm atëherë). Faqja e laboratorit është e tillë; aty ku nuk është, cilësimi e thotë këtë ("Kjo faqe nuk është e izoluar me origjinë të kryqëzuar, kështu që zgjidhësit punojnë në një fije, sado që të zgjidhet këtu.") dhe çdo zgjidhje përdor një fije. Gjithçka tjetër funksionon njësoj, dhe përgjigjet janë të njëjta.

Studimet e rrjedhës laminare përdorin gjithashtu fijet (rreth 2.5× në 4 fije për 54,000 qeliza fluidi, e njëjta përgjigje deri në shifrën e fundit). Zgjidhësi kuadratik-tetraedër dhe transferimi i nxehtësisë punojnë në një fije: ndarja në fije u matë më e ngadaltë në kompjuterin tonë të testimit (zgjidhësit e tyre kufizohen nga shpejtësia e memories dhe nga një hap që nuk mund të ndahet).

### Në serverin tuaj web

Nëse e ekzekutoni PartCraft nga serveri juaj, funksionon ashtu siç shërbehet. Për fijet e zgjidhësit, bëjeni që serveri të dërgojë dy header me faqen e PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Në Apache, në `.htaccess` të dosjes (kërkon mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Në nginx, në `location` që shërben PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Rifreskoni faqen: Cilësimet › Fijet e zgjidhësit ofrojnë atëherë **Automatike** me numrin e kompjuterit tuaj. Header-i i dytë e bën shfletuesin të refuzojë çdo gjë që faqja ngarkon nga një sajt tjetër që nuk e lejon; kjo është në rregull për PartCraft në vetvete, sepse ai ngarkon gjithçka nga dosja e vet.
