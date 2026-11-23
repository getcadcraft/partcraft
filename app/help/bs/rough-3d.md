---
title: 3D grubo obrađivanje i obrada preostalog materijala
summary: Očistite sirovac oko cijelog modela nivo po nivo ravnim, polukružnim ili kuglastim glodalom, ostavljajući materijal za završnu obradu, zatim pustite manji alat da reže samo tamo gdje je prvi ostavio materijal. Šta putanje garantuju, a šta ne.
keywords: 3d grubo, grubo, obrada preostalog materijala, ostatak materijala, materijal za ostavljanje, korak dubine, nivoi, z nivo, waterline, rampa, uranjanje, urezivanje, manji alat
from: 29ddc266
---

Dvije operacije u Izradi, pod {{ui:Više}} na njenoj alatnoj traci, čiste materijal s **cijelog modela** u 3D, s alatom koji ostaje vertikalan (ili duž [smjera alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) te operacije). Ne traže odabir.

## 3D grubo obrađivanje

{{ui:3D grubo}} radi od vrha sirovca dolje, jedan **korak dubine** po put. Na svakom nivou čisti sve što alat može dohvatiti bez dodirivanja modela: prave redove na **koraku** jedan od drugog (dio prečnika alata), zatim jednom uokolo ivice onoga što sme dohvatiti, tako da se zidovi prate i ne ostaju kao red stepenica u tlocrtu.

- **Materijal za ostavljanje**: koliko je alat udaljen od modela svuda, za završnu obradu (zadano 0,5 mm).
- **Nivo na svakoj ravnoj površini**: dodatni nivo na visini svake ravne površine modela (plus materijal za ostavljanje), pa dno nije ostavljeno skoro cijeli korak dubine visoko.
- **Zanemari sirovac tanji od**: materijal tanji od ovoga, gore ili u stranu, nije vrijedan prolaza (0,05 mm za grubo, 0,5 mm za obradu preostalog materijala, tako da dlaka duž zida ne šalje manji alat uokolo svakog zida).
- **Dno**: ništa se ne reže ispod ove visine. Prazno znači dno modela.

Počinje od sirovca **kakav su ga ostavile operacije prije njega**: nakon prolaza lica ne reže zrak tamo gdje je prošlo glodalo za lice.

Spuštanje: gdje bi alat na putu dolje naišao na materijal, ide po svom prolazu pod **uglom rampe**, naprijed-nazad preko najviše dva prečnika alata. Prolaz prekratak za to se uranja pravo dolje pri posmaku uranjanja; operacija ih broji i upozorava, jer alat koji ne reže na svom centru ne bi to trebao raditi.

## Obrada preostalog materijala

{{ui:Ostatak}} je ista strategija za **manji alat nakon većeg**. Čita simulaciju sirovca i reže samo tamo gdje materijal još stoji: unutrašnji uglovi u koje veći alat nije mogao ući, utori u koje nije stao, stepenice koje je ostavio na kosinama. Svuda drugdje ne radi ništa, pa je njena putanja mali dio onoga što bi isti alat uzeo na svježem sirovcu.

Stavite je nakon operacije grubog obrađivanja i izaberite manji alat. Treba joj simulacija sirovca operacija prije nje, koju radni prostor uvijek pokreće.

## Koliko su putanje dobre

- **Nema urezivanja.** Položaji alata računaju se na mreži, s reznikom uzetim malo većim nego što jeste (za 1,4 ćelije mreže u stranu, i za materijal za ostavljanje), tako da je, gdje god stoji, čist od modela. Testovi provjeravaju svaku tačku reza naspram tačnog alata na tačnoj mreži, i simulacija sirovca nakon svakog pokretanja: nema urezivanja, nema brzog hoda kroz materijal.
- **Cijena toga**: zidovi zadržavaju malo više od materijala za ostavljanje, do iznosa prikazanog kao „Višak materijala na zidovima” na operaciji (oko 0,5 mm za alat Ø6, manje za manji). Završni prolaz ga uzima.

Ove putanje nisu:

- Redovi su prave linije, a ne ofseti oblika dijela niti krive stalnog angažmana. Imaju više podizanja i praznih kretanja nego ofset ili adaptivna strategija, a prvi red na svakom nivou reže punu širinu alata. Za džepove s ravnim dnom bolje grubo obrađivanje je [Adaptivno](topic:manufacture).
- Držač i vrat alata se ne provjeravaju. Upozorenje kaže kad je rez dublji od dužine žlijeba.
- Podrezi se ne vide: model je ono što alat dodirne spuštajući se niz svoju osu. Za grubo obrađivanje strane, dajte drugoj operaciji [nagnut smjer alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obrada preostalog materijala zna sirovac samo onoliko koliko ga zna mreža simulacije (ćelije od 0,1 do 2 mm, prema veličini dijela).
- Na velikom dijelu program je dug (preko 100.000 pomaka za prirubnicu od 200 mm s alatom Ø6) i traje oko minut da se izračuna, a svaka promjena u radnom prostoru ponovo računa cijeli program. Za grubo obrađivanje koristite najveći alat koji stane.
- Provjerite izlaz u simulatoru vaše mašine prije rezanja.
