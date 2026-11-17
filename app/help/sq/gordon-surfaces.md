---
title: Sipërfaqe përmes një rrjete kurbash (sipërfaqja Gordon)
summary: Bëni një sipërfaqe të lëmuar përmes një rrjete profilesh dhe kurbash udhëzuese të vizatuara në skica ose të marra nga skajet e modelit, mbylleni në solid kur profilet janë të mbyllura, dhe çfarë është e saktë, çfarë është e përshtatur dhe mesazhet kur një rrjetë nuk përshtatet.
keywords: tangjente, g1, tangjencë, vazhdimësi tangjente, plan pasqyrimi, sipërfaqe gordon, rrjetë kurbash, sipërfaqe kufitare, sipërfaqe rrjete, profile, udhëzues, kurba udhëzuese, loft me udhëzues, shina udhëzuese, lëkurë, transfinite, coons, sipërfaqe b-spline, sipërfaqe e lirë
from: ada3cb8b
---

:::note
**Nuk është ndërtuar ende në këtë version.** Sipërfaqja Gordon kërkon një kernel gjeometrik të saktë, të cilin ky version i PartCraft nuk e ka: ai ndërton çdo pjesë me kernelin e rrjetit. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bëni në vend të kësaj. Pjesa tjetër e kësaj faqeje e përshkruan ashtu si punon me një kernel të saktë.
:::

Një **sipërfaqe Gordon** është një sipërfaqe që kalon nëpër çdo kurbë të një rrjete: një grup **profilesh** që shkojnë në një drejtim dhe një grup **udhëzuesish** që shkojnë në drejtimin tjetër, duke u kryqëzuar si fijet e një rrjete. Kështu formoni një trup anijeje, një parafango ose një dorezë nga disa kurba prerjeje që kontrolloni drejtpërdrejt. Kërkon **kernelin e saktë** (shih [Kerneli i rrjetit](topic:solid-kernels)).

## Vizatoni rrjetën

1. Vizatoni **profilet**: dy ose më shumë kurba që shkojnë njëra pranë tjetrës, p.sh. prerje në plane paralele. Vijat, harqet, rrathët dhe splines funksionojnë të gjitha, dhe një zinxhir kurbash të lidhura skaj më skaj numërohet si një kurbë.
2. Vizatoni **udhëzuesit**: dy ose më shumë kurba që kalojnë mbi profilet. Çdo udhëzues duhet të kryqëzojë çdo profil një herë, dhe çdo profil çdo udhëzues një herë.
3. Bëni që kurbat të takohen vërtet. Vizatoni skicën e një udhëzuesi të tillë që kurba e tij të kalojë nëpër pikat e profileve (kapni te pikat e projektuara, ose shkruani koordinatat). Rrjeta pranon boshllëqe deri te **Toleranca** (0.01 mm për të filluar).

Një skicë mund të mbajë disa kurba: çdo zinxhir i veçantë në të është kurba e vet. Kështu mund t'i vizatoni të gjithë udhëzuesit në një skicë mbi planin e sipërm, për shembull.

## Krijoni sipërfaqen

1. Zgjidhni {{ui:Më shumë}} në grupin e veçorive, pastaj {{ui:Sipërfaqe Gordon}}.
2. PartCraft merr skicat që askush nuk i përdor ende: ato në plane paralele me të parën bëhen **profile**, të tjerat **udhëzues**. Kontrolloni listën në të djathtë dhe vendosni çdo skicë në **Profile**, **Udhëzues** ose **Nuk përdoret**.
3. Për të përdorur skajet e pjesës, klikoni **Zgjidh skajet si profile** (ose **si udhëzues**), klikoni skajet në pamje, pastaj shtypni {{key:Esc}}.

Rezultati është një **trup sipërfaqeje**. {{ui:Trashëso}} e kthen atë në solid, {{ui:Qep}} e qep me sipërfaqe të tjera, dhe {{ui:Shkurto sipërfaqen}} e pret.

### Mbylleni në solid

Kur profilet janë kurba të mbyllura (rrathë, splines të mbyllura, zinxhirë të mbyllur) dhe profili i parë dhe ai i fundit shtrihen secili i sheshtë në një plan, shenjoni **Mbylle në solid**. Skajet mbyllen me faqe të sheshta dhe forma e mbyllur bashkohet, pritet, kryqëzohet ose bëhet trup i ri si çdo veçori tjetër. Kjo është si bëhet një loft që ndjek kurba udhëzuese. E njëjta punon me udhëzues të mbyllur.

## Tangjente me një plan përgjatë një skaji

Një sipërfaqe Gordon kalon nëpër kurbat e saj, por vetëm vetë nuk përputhet me pjerrësinë e asaj që takon. Për ta bërë që të largohet nga një skaj **tangjent** me një plan (G1), si një plan pasqyrimi, që kopja e pasqyruar të bashkohet pa palosje, ose një faqe e sheshtë nga e cila rritet:

1. Zgjidhni veçorinë Gordon. Nën **Tangjente me**, zgjidhni një plan te {{ui:Shto një plan…}} (Përpara, Sipër, Djathtas ose një plan referimi), ose zgjidhni një faqe të sheshtë në pamje dhe shtypni {{ui:Shto sipërfaqen e sheshtë të zgjedhur}}.
2. PartCraft gjen kurbën kufitare të rrjetës që shtrihet në atë plan, dhe sipërfaqja largohet tangjente me planin.

Nëse një plan mban dy kurba kufitare (një dysheme nën të dy skajet), shtojeni dy herë: çdo kopje merr të radhës. Deri në katër plane, një për skaj.

Raporti thotë përgjatë cilës kurbe bëri secili plan tangjencën dhe këndin më të pjerrët që sipërfaqja takoi atë plan më parë. Udhëzuesit që tashmë largojnë atë kurbë tangjente me planin ndiqen saktësisht. Udhëzuesit që ngjiten larg saj përkulen në një brez të ngushtë pranë skajit, dhe shifra "ndjek çdo kurbë brenda" e raportit thotë sa: vizatoni udhëzuesit që largohen nga skaji të sheshtë për një përshtatje të saktë.

## Çfarë është e saktë dhe çfarë përshtatet

Paneli thotë cili nga këto zbatohet, dhe sa larg devion sipërfaqja nga kurbat tuaja.

- **E saktë**: kur çdo kurbë është polinomiale (vija, splines dhe zinxhirë të tyre) dhe udhëzuesit kryqëzojnë të gjitha profilet në të njëjtat parametra, sipërfaqja është saktësisht sipërfaqja Gordon e atyre kurbave. Një rrjetë kurbash izo e prerë nga një sipërfaqe bikubike e kthen atë sipërfaqe, dhe katër vija të drejta japin një arnim të sheshtë ose të përdredhur (bilinear).
- **E përshtatur**: harqet, rrathët dhe skajet e pjesës nuk janë polinomiale, dhe kurbat që kryqëzohen në parametra të ndryshëm duhet të rikohohen që kryqëzimet të përputhen. Ato kurba përshtaten me B-spline kubike brenda një të dhjetë milionit të madhësisë së rrjetës (rreth 0.00001 mm për një pjesë 100 mm). Një copëz cilindrike nga harqe dhe vija qëndron brenda 0.00001 mm nga cilindri i vërtetë.

Midis kurbave, sipërfaqja është ajo që jep metoda: profilet e përzier përgjatë, plus udhëzuesit e përzier përgjatë, minus përzierja e pikave të tyre të kryqëzimit. Është e lëmuar kudo, përveç aty ku një kurbë ka një cep të mprehtë. Aty ku dy sipërfaqe Gordon ndajnë një kurbë kufitare, takohen skaj më skaj (G0), jo tangjent.

## Kur një rrjetë nuk përshtatet

| Mesazhi | Çfarë të bëni |
|---|---|
| "… nuk takohen: kalojnë 0.4 mm larg" | Bëni atë profil dhe udhëzues të kryqëzohen, ose ngrini Tolerancën |
| "… takon … 2 herë" | Një udhëzues mund të kryqëzojë çdo profil vetëm një herë: ndajeni një kurbë që lak, ose përdorni më pak profile |
| "… në një rend tjetër" ose "palosët mbi vetveten" | Dy udhëzues kryqëzohen (ose dy profile). Familjet duhet të shkojnë njëra pranë tjetrës |
| "të paktën dy profile dhe dy udhëzues" | Shtoni kurba, ose vendosni më shumë skica në Profile ose Udhëzues |
| "përzien kurba të hapura dhe të mbyllura" | Bëni të gjitha profilet të hapura ose të gjitha të mbyllura (e njëjta gjë për udhëzuesit) |
| "Një skaj … nuk është i sheshtë, kështu që nuk mund të mbyllet" | Vizatoni profilin e parë dhe të fundit të mbyllur në një plan secili, ose lëreni Mbylle në solid të pashënuar |

## Kufizimet

- Një faqe B-spline për rrjetë: pa tangjencë G1 ose G2 me sipërfaqet fqinje.
- Qepja e një rrjete të mbyllur, te udhëzuesi i parë, është e bashkuar skaj më skaj por jo tangjente.
- Vetë veçoria Loft nuk ka shina udhëzuese; përdorni në vend të kësaj një sipërfaqe Gordon të mbyllur në solid.
- Kurbat shumë të valëzuara, ose kryqëzimet shumë të shpërndara në mënyrë të pabarabartë përgjatë një kurbe krahasuar me një tjetër, mund të kërkojnë shumë pika për t'u përshtatur; veçoria atëherë e thotë këtë.
