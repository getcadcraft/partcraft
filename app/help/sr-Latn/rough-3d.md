---
title: 3D grubo obrađivanje i obrada ostatka
summary: Očistite sirovac oko celog modela nivo po nivo ravnim, zaobljenim ili kuglastim glodalom, ostavljajući višak za završnu obradu, pa neka manji alat seče samo tamo gde je prvi ostavio materijal. Šta putanje garantuju, a šta ne.
keywords: 3D grubo obrađivanje, grubo, grubo obrađivanje, obrada ostatka, ostatak materijala, ostavljeni višak, korak dubine, nivoi, z nivo, waterline, rampa, uranjanje, zadiranje, manji alat
from: 29ddc266
---

Dve operacije u Proizvodnji, pod {{ui:Više}} na njenoj traci, čiste sirovac sa **celog modela** u 3D, sa alatom održavanim uspravno (ili duž sopstvenog [pravca alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operacije). Ne traže nikakav izbor.

## 3D grubo obrađivanje

{{ui:3D grubo}} radi od vrha sirovca nadole, jedan **korak dubine** po jedan. Na svakom nivou čisti sve što alat može da dosegne bez dodirivanja modela: prave redove razmaknute za **korak prelaza** (deo prečnika alata), zatim jednom po ivici onoga što sme da dosegne, pa se zidovi prate i ne ostavljaju kao red stepenica u tlocrtu.

- **Ostavljeni višak**: koliko alat svuda ostaje daleko od modela, za završnu obradu (podrazumevano 0.5 mm).
- **Nivo na svakoj ravnoj površi**: dodatni nivo na visini svake ravne površi modela (plus ostavljeni višak), pa dno nije ostavljeno skoro celim korakom dubine visoko.
- **Zanemari sirovac tanji od**: materijal tanji od ovoga, nagore ili u stranu, nije vredan prolaza (0.05 mm za grubo, 0.5 mm za obradu ostatka, da dlaka ostavljena uz zid ne šalje manji alat oko svakog zida).
- **Dno**: ništa se ne seče ispod ove visine. Prazno znači dno modela.

Kreće od sirovca **kakav su ga ostavile operacije pre nje**: posle prolaza čeonom glodalicom ne seče vazduh tamo gde je čeona glodalica prošla.

Spuštanje: gde bi alat na putu nadole naišao na sirovac, ide rampom duž svog prolaza pod **uglom rampe**, napred-nazad najviše dva prečnika alata. Prolaz prekratak za to se uranja pravo nadole pri **posmaku uranjanja**; operacija broji takve i upozorava, jer alat koji ne seče na svom centru ne bi to smeo da radi.

## Obrada ostatka

{{ui:Ostatak}} je ista strategija za **manji alat posle većeg**. Čita simulaciju sirovca i seče samo tamo gde materijal još stoji: u unutrašnjim uglovima u koje veći alat nije mogao da uđe, žlebovima u koje nije stao, stepenicama koje je ostavio na nagibima. Svuda drugde ne radi ništa, pa je njegova putanja mali deo onoga što bi isti alat uzeo na svežem sirovcu.

Stavite je posle operacije grubog obrađivanja i izaberite manji alat. Treba joj simulacija sirovca operacija pre nje, koju radni prostor uvek pokreće.

## Koliko su putanje dobre

- **Nema zadiranja.** Položaji alata računaju se na mreži, sa glodalom uzetim malo većim nego što jeste (za 1.4 ćelije mreže u stranu, i za ostavljeni višak), tako da je gde god stoji čisto od modela. Testovi proveravaju svaku tačku reza u odnosu na tačan alat na tačnoj mreži, a simulacija sirovca posle svakog pokretanja: nema zadiranja, nema brzog hoda kroz sirovac.
- **Cena toga**: zidovi zadržavaju malo više od ostavljenog viška, do iznosa prikazanog kao „Dodatni višak na zidovima“ na operaciji (oko 0.5 mm za alat Ø6, manje za manji). Završna obrada to uzima.

Šta ove putanje nisu:

- Redovi su prave linije, a ne ofseti oblika dela ni krive konstantnog angažovanja. Imaju više podizanja i praznih kretanja nego strategija ofseta ili prilagodljiva, a prvi red na svakom nivou seče punu širinu alata. Za džepove sa ravnim dnom, [Prilagodljivo](topic:manufacture) je bolje grubo obrađivanje.
- Držač i drška alata se ne proveravaju. Upozorenje kaže kada je rez dublji od dužine zubaca.
- Podsečenja se ne vide: model je ono što alat sretne spuštajući se niz svoju osu. Da grubo obradite bok, dajte drugoj operaciji [nagnut pravac alata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obrada ostatka zna sirovac samo onoliko dobro koliko mreža simulacije (ćelije 0.1 do 2 mm, po veličini dela).
- Na velikom delu program je dug (preko 100,000 kretanja za prirubnicu od 200 mm sa alatom Ø6) i traje oko minut da se izračuna, a svaka promena u radnom prostoru računa ceo program ponovo. Za grubo obrađivanje koristite najveći alat koji stane.
- Proverite izlaz u simulatoru vaše mašine pre sečenja.
