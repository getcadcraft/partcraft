---
title: 3D grubo obrađivanje i dorada ostataka
summary: Očistite sirovac oko cijelog modela razinu po razinu ravnim, zaobljenim ili kuglastim glodalom, ostavljajući materijal za završnu obradu, zatim neka manji alat reže samo tamo gdje je prvi ostavio materijal. Što putanje jamče, a što ne.
keywords: 3D grubo, grubo, dorada ostataka, preostali materijal, ostavljeni materijal, korak dubine, razine, z razina, waterline, rampa, uranjanje, zarez, manji alat
from: 29ddc266
---

Dvije operacije u Proizvodnji, pod {{ui:Više}} na njezinoj alatnoj traci, čiste sirovac s **cijelog modela** u 3D, s alatom koji drži okomito (ili duž vlastitog [smjera alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operacije). Ne traže odabir.

## 3D grubo obrađivanje

{{ui:3D grubo}} radi od vrha sirovca dolje, jednu **dubinu prolaza** po jednu. Na svakoj razini čisti sve što alat može dosegnuti bez dodirivanja modela: ravni redovi na razmaku **razmaka prolaza** (dio promjera alata), zatim jednom po rubu onoga što smije dosegnuti, tako da se stijenke prate i ne ostaju kao niz stepenica u tlocrtu.

- **Ostavljeni materijal**: koliko daleko alat ostaje od modela svuda, za završni prolaz (zadano 0.5 mm).
- **Razina na svakoj ravnoj plohi**: dodatna razina na visini svake ravne plohe modela (plus ostavljeni materijal), tako da dno ne ostane gotovo cijelu dubinu prolaza visoko.
- **Zanemari sirovac tanji od**: materijal tanji od ovoga, prema gore ili u stranu, nije vrijedan prolaza (0.05 mm za grubo, 0.5 mm za doradu, da vlas ostavljena uz stijenku ne šalje manji alat oko svake stijenke).
- **Dno**: ništa se ne reže ispod ove visine. Prazno znači dno modela.

Počinje od sirovca **kakav ga su ostavile operacije prije nje**: nakon prolaza ravnanja ne reže zrak tamo gdje je prošlo čeono glodalo.

Spuštanje: gdje bi alat na putu dolje naišao na sirovac, spušta se po vlastitom prolazu pod **kutom rampe**, naprijed-natrag na najviše dva promjera alata. Prolaz prekratak za to uranja se ravno dolje posmakom uranjanja; operacija ih broji i upozorava, jer alat koji ne reže na svom središtu ne bi to smio činiti.

## Dorada ostataka

{{ui:Dorada}} je ista strategija za **manji alat nakon većeg**.

Čita simulaciju sirovca i reže samo tamo gdje materijal još stoji: u unutarnjim kutovima u koje veći alat nije mogao ući, utorima u koje nije stao, stepenicama koje je ostavio na kosinama. Svugdje drugdje ne radi ništa, pa je njegova putanja mali dio onoga što bi isti alat uzeo na svježem sirovcu.

Stavite je nakon operacije grubog obrađivanja i odaberite manji alat. Treba simulaciju sirovca operacija prije nje, koju radni prostor uvijek pokreće.

## Koliko su putanje dobre

- **Bez zareza.** Položaji alata računaju se na mreži, a glodalo se uzima malo većim nego što jest (za 1.4 ćelije mreže postrance i za ostavljeni materijal), tako da je svugdje gdje stoji slobodno od modela. Testovi provjeravaju svaku točku rezanja naspram točnog alata na točnoj mreži, a simulacija sirovca nakon svakog prolaza: nema zareza, nema brzog pomaka kroz sirovac.
- **Cijena toga**: stijenke zadržavaju malo više od ostavljenog materijala, do iznosa prikazanog kao „Dodatni materijal na stijenkama“ na operaciji (oko 0.5 mm za alat Ø6, manje za manji). Završni prolaz ga uklanja.

Ovo nisu te putanje:

- Redovi su ravne linije, a ne odmaci oblika dijela ili krivulje stalnog zahvata. Imaju više podizanja i zračnih pomaka nego odmak ili prilagodljiva strategija, a prvi red na svakoj razini reže punu širinu alata. Za džepove s ravnim dnom, bolje grubo obrađivanje je [Prilagodljivo](topic:manufacture).
- Prihvat i držač alata se ne provjeravaju. Upozorenje kaže kad je rez dublji od duljine zubaca.
- Podrezi se ne vide: model je ono što alat susreće dok silazi duž svoje osi. Za grubo obrađivanje bočne strane, drugoj operaciji dajte [nagnuti smjer alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Dorada ostataka poznaje sirovac samo onoliko dobro koliko mreža simulacije (ćelije od 0.1 do 2 mm, prema veličini dijela).
- Na velikom dijelu program je dug (preko 100.000 pomaka za prirubnicu od 200 mm s alatom Ø6) i izračunava se oko minute, a svaka promjena u radnom prostoru ponovno izračunava cijeli program. Za grubo obrađivanje koristite najveći alat koji stane.
- Provjerite izlaz u simulatoru vašeg stroja prije rezanja.
