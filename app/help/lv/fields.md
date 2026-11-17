---
title: Lauki: formas kā attālumi
summary: Kas ir lauks (forma, kas saglabāta kā attālums līdz tās virsmai), kā to izveidot no primitīviem, Būla operācijām, režģiem un minimālajām virsmām skriptā, kā tas kļūst par ķermeni un kāpēc tas pats skripts vienmēr dod tos pašus baitus.
keywords: lauks, parakstītais attālums, sdf, vokselis, žiroīds, tpms, režģis, būla, nobīde, čaula, saplūšana, dual contouring, deterministisks, hermētisks, manifold, ķieģelis
from: faab7480
---

**Lauks** apraksta formu ar attālumu no jebkura punkta līdz tās virsmai: iekšpusē negatīvs, uz virsmas nulle, ārpusē pozitīvs. Sfēra ar rādiusu 5 ir "attālums līdz centram mīnus 5". Formu apvienošana ir aritmētika ar attālumiem: savienojums ir mazākais no diviem, krustojums lielākais, un viena formas atņemšana no otras ir lielākais no pirmās un mīnus otrās. Formas palielināšana par 1 mm atņem 1 no attāluma; dobā siena ir attālums, kas salocīts.

Tieši tāpēc laukumi ir labi režģiem, kanāliem un pakāpeniski mainīgām sienām: žiroīda virsma ir "sinusu summa ir nulle", un siena, kas biezinās no 1 līdz 3 mm pa visu detaļu, ir skaitlis, kas mainās pa detaļu.

## No lauka līdz ķermenim

`to_body(field, h)` paraugo lauku režģī punktos, kas atrodas `h` milimetru attālumā, paturot tikai punktus tuvu virsmai (retu režģi 8 × 8 × 8 ķieģeļos), un veido virsmu ar **dual contouring**: vienu virsotni katrā virsmas šūnā, novietotu tur, kur virsmas plaknes satiekas, tāpēc asa mala paliek asa līdz vienam vokselim. Virsma ir slēgta, un katru malu dala tieši divi trijstūri; pārskats to norāda. Plāns elements, kas ir plānāks par aptuveni trim vokseļiem, var sašaurināties, un tad pārskats norāda, ka ķermenis nav slēgts cietais ķermenis, nevis to slēpj.

Vokseļa izmērs ir precizitāte: sfēras tilpums ar 25 vokseļiem pāri ir precīzs līdz dažām simtdaļām procenta, un siena ir tikai tik precīza, cik tās vokseļi. Jo rupjāks režģis, jo ātrāk tas iet.

## Vienmēr tie paši baiti

Laukam nav pulksteņa un nav nejaušu skaitļu. Žiroīda sinuss un kosinuss un katra eksponenciāle, logaritms un pakāpe bibliotēkā tiek aprēķināti no vienkāršas aritmētikas, lai Node, Chrome, Firefox un Safari dotu tos pašus bitus. Režģis tiek apstaigāts fiksētā secībā, tāpēc tas pats skripts ar tiem pašiem ievaddatiem dod identiski baitiskus tīkla modeļus un datu lapas, uz jebkura datora un jebkurā skaitā darba pavedienu. Tas ir pārbaudīts, tostarp pārlūkprogrammā salīdzinot ar Node.

## Kur doties tālāk

[Uzrakstiet ģeneratoru](topic:write-a-generator) veido detaļu ar laukiem; [Inženiertehniskā bibliotēka](topic:engineering-library) to izmēro.
