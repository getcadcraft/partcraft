---
title: Fushat: format si distanca
summary: Çfarë është një fushë (një formë e ruajtur si distanca deri te sipërfaqja e saj), si ndërtohet një nga primitivët, operacionet booleane, rrjetat dhe sipërfaqet minimale në një skript, si bëhet trup, dhe pse i njëjti skript jep gjithmonë të njëjtat bajte.
keywords: fushë, distancë me shenjë, sdf, voksel, gyroid, tpms, rrjetë, boolean, zhvendosje, guaskë, përzierje, kontur dual, përcaktuese, e mbyllur, manifold, tullë
from: faab7480
---

Një **fushë** përshkruan një formë me distancën nga çdo pikë deri te sipërfaqja e saj: negative brenda, zero në sipërfaqe, pozitive jashtë. Një sferë me rreze 5 është "distanca deri te qendra minus 5". Kombinimi i formave është aritmetikë me distanca: bashkimi është më i vogli nga dy, prerja është më i madhi, dhe zbritja e një forme nga një tjetër është më i madhi i së parës dhe minus i së dytës. Zmadhimi i një forme me 1 mm zbret 1 nga distanca; një mur i zbrazët është distanca, e palosur mbi vetveten.

Prandaj fushat janë të mira për rrjeta, kanale dhe mure të gradualë: sipërfaqja e një gyroidi është "shuma e sinusit është zero", dhe një mur që trashet nga 1 në 3 mm përgjatë pjesës është një numër që ndryshon në të gjithë pjesën.

## Nga fusha te trupi

`to_body(field, h)` e mostron fushën në një rrjetë pikash `h` milimetra larg njëra-tjetrës, duke mbajtur vetëm pikat pranë sipërfaqes (një rrjetë e rrallë brinjësh 8 × 8 × 8), dhe e ndërton sipërfaqen me **kontur dual**: një kulm për çdo qelizë sipërfaqeje, i vendosur aty ku takohen rrafshet e sipërfaqes, kështu që një skaj i mprehtë mbetet i mprehtë brenda një vokseli. Sipërfaqja është e mbyllur dhe çdo skaj ndahet nga saktësisht dy trekëndësha; raporti e thotë këtë. Një veçori më e hollë se rreth tre voksele mund të shtrëngohet, dhe atëherë raporti thotë se trupi nuk është një trup i mbyllur, në vend që ta fshehë.

Madhësia e vokselit është saktësia: vëllimi i një sfere 25 voksele në diametër është brenda disa qindra të përqindjes, dhe një mur është vetëm aq i saktë sa vokselët e tij. Sa më e trashë të jetë rrjeta, aq më shpejt shkon.

## Gjithmonë të njëjtat bajte

Një fushë nuk ka orë dhe nuk ka numër të rastësishëm. Sinusi dhe kosinusi i një gyroidi, dhe çdo eksponencial, logaritëm dhe fuqi në bibliotekë, llogariten nga aritmetika e thjeshtë, në mënyrë që Node, Chrome, Firefox dhe Safari të japin të njëjtët bit; rrjeta kalohet në një rend të fiksuar, kështu që i njëjti skript me të njëjtat të dhëna jep rrjeta dhe fletë të dhënash identike bit për bit, në çdo kompjuter dhe mbi çdo numër fijesh pune. Kjo është testuar, përfshirë një shfletues kundrejt Node.

## Ku të shkosh më pas

[Shkruaj një gjenerator](topic:write-a-generator) ndërton një pjesë me fusha; [Biblioteka inxhinierike](topic:engineering-library) i përcakton përmasat e saj.
