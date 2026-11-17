---
title: Dokumentet dhe rishikimet (depoja)
summary: Një udhëzues hap pas hapi për një punë reale: vendos nën kontroll një dosje projekti me pjesë dhe montime, merr për redaktim një pjesë, ndryshoje, regjistroje me një shënim, lëshoje, shiko çfarë e përdor dhe listën e materialeve, çfarë sheh një person tjetër kur skedari është i bllokuar, dhe si funksionon me dosjet në cloud.
keywords: depo, dokumente, udhëzues, mësim, merr për redaktim, regjistro, rishikim, lëshim, miratim, bllokim, historik, ku përdoret, listë materialesh, bom, montim, dosje në cloud, dosje projekti, dy persona, dosje e përbashkët
from: 0a5e6983
---

## Çfarë do të bësh

Ti je Ana, që punon te Riverside Clinic me një koleg, Ben. Pjesët dhe montimet e projektit ndodhen në një dosje që të dy e keni të qasshme (një disk i përbashkët, një dosje e sinkronizuar ose një dosje në cloud). Në fund, një skedar do të ketë kaluar nga kopja e parë te rishikimi i lëshuar **A**, do të jetë ndryshuar përsëri si **B.1**, do të kesh parë kush bëri çfarë, dhe do të kesh parë çfarë sheh Ben kur ti e mban skedarin.

Gjithçka ruhet në një dosje të fshehur `.ccvault` pranë skedarëve të tu: pa server, pa asgjë të ngarkuar (dosja në cloud është përjashtimi, shih hapin e fundit). Për çdo buton dhe rregull në një vend, shih temën *Dokumentet: marrja për redaktim, rishikimet dhe lëshimi* aty ku e ka aplikacioni yt.

## 1. Përgatit dosjen e projektit

1. Zgjidh {{ui:Dokumentet…}} te grupi **Skedar** i shiritit të veglave.
2. Zgjidh {{ui:Zgjidh dosjen e projektit}} dhe përzgjidh dosjen që përmban pjesët dhe montimet e projektit. (Dosjet e projektit funksionojnë në Studio dhe në shfletuesit që mund të hapin një dosje, si Chrome dhe Edge. Në shfletues të tjerë paneli e thotë këtë.)
3. Zgjidh {{ui:Ndrysho}} pranë **Ti:** dhe shkruaj emrin tënd, `Ana` (nëse pyet, edhe emrin e këtij kompjuteri). Paneli tani thotë *Ti: Ana në* dhe kompjuterin tënd. Emri yt vendoset në çdo gjë që bën.
4. Zgjidh {{ui:Krijo një depo në këtë dosje}} dhe shkruaj emrin e projektit, `Riverside clinic`. Paneli thotë *Depoja u hap për Riverside clinic.*

## 2. Vendos një skedar nën kontroll

1. Hap **Skedarë jashtë depos** dhe zgjidh {{ui:Shto}} pranë `plates/Bracket.partcraft.json`.
2. Ai shfaqet nën **Skedarë në depo** me rishikimin **A.1**, gjendja **Punë në vazhdim**. A.1 është kopja e tij e parë; depoja mban një kopje të çdo rishikimi.

## 3. Merr për redaktim, ndrysho, regjistro

1. Zgjidh {{ui:Hap}} pranë `plates/Bracket.partcraft.json`. Pjesa hapet në PartCraft dhe paneli mbyllet që ta shohësh. Hape përsëri panelin nga {{ui:Dokumentet…}}.
2. Hape përsëri panelin dhe zgjidh {{ui:Merr për redaktim}}. Rreshti tani thotë **Marrë për redaktim nga ti**. Një skedar kyçjeje është krijuar në `.ccvault/locks`; askush tjetër nuk mund ta marrë këtë skedar për redaktim derisa ta regjistrosh.
3. Ndrysho pjesën: përpuno një dimension, shto një vrimë. Ruajtja refuzohet nëse skedari nuk është marrë për redaktim nga ti, dhe e thotë arsyen; Ruaj si funksionon gjithmonë për një kopje të jotën.
4. Hap panelin, zgjidh {{ui:Regjistro}} dhe shkruaj çfarë ndryshoi (`Lëvizi derën`). Paneli thotë *u regjistrua si A.2*. Skedari në dosjen e projektit është tani pjesa që kishe hapur, dhe kyçja është hequr. Regjistrimi pa asnjë ndryshim e ruan rishikimin.

Nëse ndryshon mendje, {{ui:Zhbëj marrjen}} e kthen skedarin pa një rishikim të ri.

## 4. Shqyrto dhe lësho

1. Zgjidh {{ui:Dërgo për shqyrtim}}. Gjendja bëhet **Për shqyrtim** dhe skedari bëhet vetëm për lexim.
2. Para miratimit, zgjidh {{ui:Cilësimet e projektit}} dhe liste kush mund të miratojë (një emër për rresht), për shembull `Ben` dhe `Carla`, dhe shëno rregullin që miratuesi duhet të jetë dikush tjetër nga autori. Zgjidh {{ui:Ruaj cilësimet}}. Tani vetë depoja refuzon çdo tjetër.
3. Ben (ose Carla) zgjedh {{ui:Miratoje}} dhe shkruan emrin e miratuesit. Gjendja bëhet **Lëshuar** dhe rishikimi bëhet **A**, me *miratuar nga* dhe emrin. Një skedar i lëshuar është vetëm për lexim. {{ui:Ktheje}} do ta kthente në **Punë në vazhdim**, me një arsye.

Emri i miratuesit është emri i shkruar në panel; është një regjistër i kujt e nënshkroi, jo një provë identiteti.

## 5. Një rishikim i ri

1. Te skedari i lëshuar, zgjidh {{ui:Rishikim i ri}}. Ai të rezervohet për shkronjën e radhës.
2. Ndrysho, pastaj {{ui:Regjistro}}. Rishikimi është **B.1**, punë në vazhdim. Lësho sipas të njëjtës mënyrë dhe bëhet **B**. {{ui:Zhbëj marrjen}} përpara regjistrimit të parë e le në **A**.

Shkronjat e rishikimit ndjekin A, B … Z, AA, AB. Nëse standardi yt lë jashtë disa shkronja, cilësimi i projektit *Përdor sekuencën ASME Y14.35* kalon I, O, Q, S, X dhe Z për rishikimet e ardhshme.

## 6. Shiko çfarë ndodhi

Zgjidh emrin e skedarit për të hapur detajet e tij:

- **{{ui:Historiku}}**: çdo ngjarje, më e reja e para, me kush, cilin kompjuter dhe kur: *Regjistroi A.2* nga Ana, *Lëshuar* nga Ben, e kështu me radhë.
- **{{ui:Rishikimet}}**: tabela e rishikimeve: çdo rishikim i ruajtur, me datën, kush e regjistroi, shënimin dhe kush e miratoi. Depoja mban një kopje të secilit në `.ccvault/revs`.
- **{{ui:Përdor}}**: pjesët e një montimi.
- **{{ui:Përdoret nga}}**: Përdoret nga liston çdo montim në depo që mban këtë pjesë: ndrysho një mbajtëse dhe di cilat montime të kontrollosh.

## Montimet: çfarë përdorin dhe lista e materialeve

Vendos një montim (`.partcraft.json`, i ruajtur nga modaliteti Montim) në dosje dhe shtoje. Zgjidh emrin e tij: **Përdor** liston pjesët që mban, me rishikimin dhe gjendjen e secilës; **Përdoret nga** te një pjesë liston çdo montim që e mban. {{ui:Listë materialesh (CSV)}} ruan të gjithë listën e pjesëve, nivel pas niveli, me sasitë, rishikimet dhe gjendjet, për një fletëllogaritëse. Ndrysho një mbajtëse dhe **Përdoret nga** të tregon cilët montime të shikosh.

## 7. Çfarë sheh Ben kur ti e mban skedarin

Tani merr përsëri skedarin për redaktim, dhe kërkoje Ben-it të hapë të njëjtën dosje projekti në kompjuterin e tij dhe të hapë panelin. Në rreshtin e skedarit ai sheh **Marrë për redaktim nga Ana në** kompjuterin tënd **që nga** ora, dhe nuk ka buton {{ui:Merr për redaktim}}. Nëse prapëseprapë përpiqet, depoja refuzon: kyçja është një skedar që sistemi nuk e krijon dy herë, kështu që dy persona nuk mund ta mbajnë skedarin njëkohësisht, edhe në të njëjtën pjesë sekonde, kur dosja është në disk në Studio. (Në shfletues dosja lejon vetëm një përpjekje të mirëfilltë, dhe paneli e thotë këtë nën **Dosja**.)

Nëse Ana është larg dhe Ben ka nevojë për skedarin, {{ui:Thyeje marrjen}} e liron. Ai duhet të shkruajë një arsye; ajo shkon në regjistër me emrin e kujt ishte marrja. Kur projekti liston administratorë, vetëm ata mund ta bëjnë. Një marrje më e vjetër se kufiri i vjetërsisë (si parazgjedhje 14 ditë) shënohet *një kohë e gjatë*. Pas thyerjes, regjistrimi me vonesë i Anës refuzohet, kështu që ju dy nuk mund ta mbishkruani njëri-tjetrin.

## 8. Dosjet në cloud

Një dosje në cloud është një dosje projekti e mbajtur në depozitimin cloud të ekipit tuaj, kështu që ekipi nuk ka nevojë për disk të përbashkët. Në Studio, i hyrë në llogarinë tënde CadCraft, paneli shfaq {{ui:Hap një dosje në cloud}} pranë {{ui:Zgjidh dosjen e projektit}}. Zgjidhe dhe përzgjidh dosjen, e listuar si hapësirë pune / dosje. Pronari i hapësirës së punës e krijon dosjen së pari, dhe depozitimi cloud i ekipit duhet të jetë aktiv. Gjithçka më sipër funksionon njësoj; serveri e krijon kyçjen, e cila është e rreptë mes personave. Nëse nuk je hyrë, paneli të kërkon të hysh. Në një skedë shfletuesi të zakonshme butoni cloud nuk ofrohet; përdor Studio.

## Provoje

Bëji tetë hapat më sipër me një kopje të një skedari real. Për hapat me dy persona të nevojitet një person tjetër, ose dy dritare me dy emra. Nëse e provon me një dosje të përbashkët reale, faqja Testimi i komunitetit ka një kontroll që pyet pikërisht këtë, dhe pranon rezultate.
