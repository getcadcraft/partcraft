---
title: Kopjo, ngjit dhe dyfisho
summary: Kopjo gjeometrinë e skicës, veçoritë dhe pjesët e montimit; ngjit aty ku klikon ose në të njëjtin vend; dyfisho në një hap; dhe çfarë vjen me një kopje dhe çfarë jo.
keywords: kopjo, ngjit, prit, dyfisho, kujtesë, ngjit në vend, përzgjidh të gjitha, mos përzgjidh asnjë, fshi, ctrl c, ctrl v, ctrl d, instancë, komponent, kopjo skicën, kopjo veçorinë, kopjo pjesën
from: 611307d7
---

Grupi {{ui:Ndrysho}} në shiritin e veglave mban {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}} dhe një menu {{ui:Më shumë}} me {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dyfisho}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}} dhe {{ui:Mos përzgjidh asnjë}}, secili me tastin e vet. Ajo që kopjohet varet nga vendi ku je: gjeometri në një skicë të hapur, një veçori në histori, ose një pjesë në një montim.

Një artikull i zbehur nuk mund të veprojë tani. Vendose treguesin mbi të: teksti i tij thotë pse, për shembull "Zgjidh së pari gjeometrinë e skicës" ose "Kujtesa mban Sketch2 dhe Extrude2: veçoritë ngjiten në histori, prandaj dil nga skica më parë".

| Veprimi | Tasti | Në një skicë | Në histori | Në një montim |
|---|---|---|---|---|
| Kopjo | {{key:Mod+C}} | Pikat dhe kurbat e zgjedhura | Skica, ekstrudimi, rrotullimi ose vrima e zgjedhur (me skicën e saj) | Pjesa e zgjedhur |
| Prit | {{key:Mod+X}} | Kopjo, pastaj fshi ato | Kopjo, pastaj fshi veçorinë | Kopjo, pastaj hiq pjesën |
| Ngjit | {{key:Mod+V}} | Kopja ndjek treguesin; kliko aty ku shkon | Shton kopjen në fund të historisë | Një kopje e re pranë pjesëve të tjera |
| Ngjit në vend | {{key:Mod+Shift+V}} | Në të njëjtat koordinata | Njësoj si Ngjit | Në të njëjtin vend me pjesën e kopjuar |
| Dyfisho | {{key:Mod+D}} | Kopjo dhe zhvendos në një hap; kujtesa mbetet e paprekur | Një kopje e dytë menjëherë pas teje | Një kopje e dytë pranë pjesëve të tjera |
| Fshi | {{key:Delete}} | Përzgjedhja | Veçoria (pyet nëse të tjera e përdorin) | Pjesa ose lidhja |
| Përzgjidh të gjitha | {{key:Mod+A}} | Gjithçka në skicë | Nuk ofrohet | Nuk ofrohet |
| Mos përzgjidh asnjë | {{key:Esc}} | Pastron përzgjedhjen | Pastron përzgjedhjen dhe zgjedhjet | Pastron përzgjedhjen |

Çdo ngjitje, dyfishim dhe prerje është një hap në listën e zhbërjeve: {{key:Mod+Z}} e merr mbrapsht, {{key:Mod+Y}} e kthen.

## Në një skicë

1. Zgjidh çfarë do të kopjosh: kliko, {{key:Shift}}+klik për më shumë, tërhiq një dritare, ose shtyp {{key:Mod+A}} për gjithçka.
2. Shtyp {{key:Mod+C}} ose zgjidh {{ui:Kopjo}}. Shiriti i statusit thotë çfarë u kopjua.
3. Shtyp {{key:Mod+V}} ose zgjidh {{ui:Ngjit}}. Një kopje me pika ndjek treguesin, e mbajtur nga mesi i saj. Kapet te pikat: vendos qendrën e një rrethi të kopjuar mbi një pikë duke klikuar atë pikë.
4. Kliko aty ku shkon. Gjeometria e ngjitur mbetet e zgjedhur, që mund ta tërheqësh ose t'i shtosh lidhje menjëherë. {{key:Esc}} e anulon ngjitjen.

Çfarë vjen me kopjen:

- Një vijë, rreth ose hark i kopjuar sjell pikat e veta fundore dhe qendrën.
- Lidhjet dhe përmasat **midis elementeve të kopjuar** vijnë me kopjen: një drejtkëndësh i kopjuar mbetet drejtkëndësh, me madhësitë e veta.
- Lidhjet **me gjeometri që nuk e kopjove**, dhe me origjinën, hiqen. Shiriti i statusit i numëron: "2 lidhje me gjeometri jashtë kopjes nuk do të vijnë me të". Kështu që një kopje e ngjitur është e lirë të lëvizë derisa ta lidhësh me lidhje ose përmasa.
- Një pikë e fiksuar mbetet e fiksuar, në pozicionin e saj të ri.

{{ui:Ngjit në vend}} e vendos kopjen saktësisht mbi koordinatat e origjinalit, në këtë skicë ose në një tjetër: e dobishme për të sjellë një profil nga një skicë në tjetrën. Në të njëjtën skicë, kopja shtrihet mbi origjinalin; tërhiqe larg.

{{ui:Dyfisho}} ({{key:Mod+D}}) kopjon përzgjedhjen dhe fillon ta vendosë menjëherë, pa prekur atë që është në kujtesë.

:::tip
Për të përsëritur një qendër vrime ose një brazdë disa herë, kopjoje një herë dhe ngjite disa herë: çdo {{key:Mod+V}} fillon një kopje të re që ndjek treguesin.
:::

## Në histori

1. Kliko një skicë, një ekstrudim, një rrotullim ose një vrimë në histori.
2. {{key:Mod+C}} e kopjon. Një veçori e bazuar në skicë kopjohet bashkë me skicën e saj.
3. {{key:Mod+V}} shton kopjen në fund të historisë (te shiriti i kthimit kur ke kthyer mbrapa), me emra të rinj si Sketch3 dhe Extrude2.

Kopja qëndron në të njëjtin plan ose sipërfaqe si origjinali, kështu që ndërtohet mbi të dhe pjesa duket njësoj. Zgjidh skicën e re dhe ndrysho planin e saj në panelin e djathtë, ose hape dhe tërhiq ose ri-përmaso profilin, për të zhvendosur kopjen.

- Ngjit në **një pjesë tjetër**: hap atë pjesë dhe shtyp {{key:Mod+V}}. Kur skica e kopjes ishte mbi një sipërfaqe që ajo pjesë nuk e ka, shkon në plan Front, dhe shiriti i statusit e thotë këtë.
- {{ui:Dyfisho}} kopjon dhe ngjit në një hap, brenda së njëjtës pjesë.
- {{ui:Prit}} e kopjon veçorinë, pastaj e fshin atë (duke pyetur së pari nëse veçori të tjera e përdorin).

Modelet, pasqyrimet, rrumbullakimet, pjerrësitë, zbrazjet dhe solidet e importuara nuk mund të kopjohen: varen nga brinjët, sipërfaqet ose veçoritë e zgjedhura në këtë pjesë. Kopjo skicën ose veçorinë mbi të cilën janë ndërtuar, ose modeloje me {{ui:Lineare}} ose {{ui:Rrethore}}.

## Në një montim

1. Kliko një pjesë në pamje ose në listën në të majtë.
2. Zgjidh {{ui:Dyfisho}} ({{key:Mod+D}}), ose {{key:Mod+C}} pastaj {{key:Mod+V}}.

Kopja e re është e **njëjta pjesë**: redakto njërën dhe çdo kopje ndryshon. Shfaqet 20 mm djathtas të gjithçkaje që ka tashmë në montim, e kthyer si kopja, dhe qëndron aty derisa një lidhje ta vendosë. {{ui:Ngjit në vend}} ({{key:Mod+Shift+V}}) e vendos saktësisht aty ku është pjesa e kopjuar; lidhe për ta zhvendosur (zhvendosja e një lidhjeje rrëshqitëse e shtyn përgjatë saj).

Ngjitja e një pjese të kopjuar nga një montim tjetër e sjell pjesën me vete, njëlloj si {{ui:Fut}} nga skedari i saj. {{ui:Shto kopje}} në grupin Montim bën të njëjtën gjë si {{ui:Dyfisho}}, dhe funksionon edhe kur nuk ka asgjë të zgjedhur (kopjon pjesën e fundit).

## Kujtesa e kopjimit

- Është kujtesa e kopjimit të PartCraft, jo ajo e kompjuterit: nuk mund të ngjitësh gjeometri PartCraft në një program tjetër, ose tekst në pamjet e PartCraft.
- Mbahet në këtë shfletues, kështu që një skedë tjetër e PartCraft mund të ngjisë atë që kopjove. Lexohet përsëri dhe kontrollohet si një skedar i hapur; çdo gjë e dëmtuar ose nga një version tjetër refuzohet.
- Një pjesë me një skedar STEP të madh të importuar mund të jetë shumë e madhe për t'u mbajtur nga shfletuesi: atëherë ngjitet vetëm në këtë skedë.
- Në një kuti numri ose në kërkimin e ndihmës, {{key:Mod+C}} dhe {{key:Mod+V}} kopjojnë dhe ngjisin tekst si zakonisht.

Në fletën e vizatimit, kopjimi dhe ngjitja nuk ofrohen ende; {{ui:Fshi}} dhe {{ui:Mos përzgjidh asnjë}} veprojnë mbi simbolin e zgjedhur. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
