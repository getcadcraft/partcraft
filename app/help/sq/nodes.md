---
title: Nyjet: ndërto një model duke lidhur
summary: Lidh numrat në pika, pikat në kurba, kurbat në sipërfaqe. Ndrysho një numër dhe gjithçka pas tij rindërtohet. Çdo nyje është gjithashtu një rresht CraftScript, dhe grafi ruhet në skedar.
keywords: nyje, redaktor nyjesh, programim vizual, parametrik, grafik, tela, porta, forma e lirë, freeform, nurbs, loft, nxjerrje, rrotullim, rreth, kurbë, sipërfaqe, seri, interval, rastësor, listë, skript, craftscript, grasshopper
from: 3a4625de
---

Redaktori **Nyjet** ndërton gjeometrinë duke lidhur kutitë me tela. Çdo kuti (një nyje) bën një punë të vogël: krijon një numër, një pikë, një rreth, një loft. Lidh rezultatin e njërës me hyrjen e tjetrës, dhe modeli ndjek kur ndryshon një numër në fillim.

Hape nga lista e hapësirave të punës: {{ui:Nyjet}}. Hapet dritarja e redaktorit. Një pjesë që ka tashmë një grafik e shfaq kur hap hapësirën e punës. Është një dritare mbi pamjen 3D: tërhiq shiritin e titullit për ta zhvendosur, tërhiq këndin për ta ndryshuar madhësinë.

## Lidhja

1. Zgjidh një nyje nga lista në të majtë (shkruaj në kutinë e kërkimit për ta ngushtuar; <kbd>Enter</kbd> shton rezultatin e parë). Ajo shfaqet në mes të fushës së punës.
2. Tërhiq nga një pikë e rrumbullakët **dalëse** në të djathtë të një nyjeje te një pikë e rrumbullakët **hyrëse** në të majtë të një tjetre. Pika bëhet e gjelbër kur përshtatet dhe e kuqe kur jo; qëndro mbi të për arsyen.
3. Një hyrje pa asgjë të lidhur shfaq një kuti për një vlerë të shkruar. Shkruaj një numër dhe shtyp <kbd>Tab</kbd>: rezultati rindërtohet.
4. Rrethi i vogël në shiritin e titullit të nyjes është **syri** i saj. Një nyje me syrin të ndezur vizatohet në pamjen 3D: si vija për kurbat, e hijezuar për sipërfaqet, si pika për pikat.

Tërhiq një nyje nga shiriti i titullit. Tërhiq sfondin për ta lëvizur pamjen, rrotullo rrotën për zmadhim. <kbd>Delete</kbd> heq nyjen e zgjedhur. {{ui:Rregullo}} i rregullon nyjet në kolona, {{ui:Përshtat}} i sjell të gjitha në pamje, {{ui:Zhbëj}} dhe {{ui:Ribëj}} kalojnë nëpër ndryshimet e tua.

## Llojet dhe njësitë

Portat kanë një lloj: numër, po/jo, pikë, vektor, kurbë, sipërfaqe, rrjetë, trup, ose "gjeometri" për çdo nga këto. Një pikë mund të hyjë në një hyrje vektori dhe anasjelltas. Numrat mbajnë një njësi: një **gjatësi** është në milimetra dhe një **kënd** është në gradë. Një gjatësi nuk mund të hyjë në një kënd, dhe një gjatësi shumëzuar me një gjatësi (një sipërfaqe) refuzohet, kështu që një tel i gabuar ndalohet kur e bën.

Një pikë katrore është një **listë**. Kur një listë arrin një hyrje me një vlerë të vetme, nyja ekzekutohet një herë për çdo element, dhe rezultati i saj bëhet listë. Lista më e shkurtër përsërit elementin e fundit të saj. Për shembull, një **Seri** lartësish në **Zhvendos** bën një stivë kopjesh.

## Trupat dhe Boolean-et si nyje

Grupi **Trupat** bën trupa të mbyllur nga të njëjtat sipërfaqe të sakta si paneli i Sipërfaqeve: **Trup kutie**, **Trup cilindri** dhe **Trup sfere** (madhësitë në mm), **Bashkim**, **Zbritje** dhe **Kryqëzim** (trupi i dytë merret nga i pari; toleranca është sa larg mund të jenë trekëndëshat e motorit të trupit nga sipërfaqet e sakta), **Rrumbullakim mes faqeve** (faqet sipas numrit të tyre në trup, 1 për të parën; një rreze dhe, mbi 0, një rreze në fund), **Vëllimi i trupit** (mm³) dhe **Trupi në rrjetë** (për ta parë ose për ta fiksuar). Një trup ka llojin e vet të portës: një pikë ose një numër nuk mund të lidhet me një hyrje trupi, dhe pika mbetet e kuqe. Nyjet Boolean dhe Rrumbullakim përdorin motorin e vet të trupave të programit, që ngarkohet herën e parë që hapet redaktori.

## Gabimet

Një nyje që nuk mund ta bëjë punën e vet thotë arsyen nën emrin e saj, me të kuqe ("Rrezja duhet të jetë më e madhe se zero."), dhe nyjet pas saj presin. I njëjti mesazh është një Problem në panelin **Problemet**, kështu mund ta gjesh nga atje.

## Çdo nyje është një rresht skripti

Shtyp {{ui:Skript}} për ta parë grafikun si CraftScript: një rresht për çdo nyje, si `n3 = nd_circle(n2, n1, [0 0 1]);`. Ndrysho tekstin dhe shtyp {{ui:Bëje grafikun nga ky skript}} për ta sjellë përsëri si grafik. Të njëjtat funksione `nd_` punojnë edhe në një CraftScript në PartCraft, kështu që një grafik mund të ekzekutohet, të përsëritet ose të testohet atje. Numrat e rastit marrin gjithmonë një **farë**, kështu që i njëjti grafik jep të njëjtin rezultat në çdo kompjuter.

## Ruhet me skedarin

Grafi ruhet në skedarin e pjesës (jo në historik, kështu që Zhbëj në redaktor është e veçantë). Nyjet bëjnë kurba, sipërfaqe dhe rrjeta pranë trupit: nuk ndryshojnë veçoritë e pjesës.
