---
title: Otvaranje STEP datoteke i rad na njoj
summary: Uvezite STEP model dobavljača ili drugog CAD programa u PartCraft kao čvrsto tijelo, kao novi dio ili dodan trenutnom dijelu, postavite koja strana je gore, te dodajte skice i elemente.
keywords: step, stp, uvoz, otvori step, ap203, ap214, ap242, model dobavljača, prosto čvrsto tijelo, uvezeno čvrsto tijelo, osa prema gore, z gore, y gore, trouglovi, facetirano, STEP sklopa
from: ca0eca5f
---

PartCraft otvara STEP datoteke (`.step` ili `.stp`, AP203, AP214 i AP242) kao **čvrsta tijela** na koja možete skicirati, sjeći, bušiti i kombinovati ih sa vlastitim elementima. Tijelo nema vlastitu historiju: ne možete mijenjati dimenzije sa kojima je napravljeno, samo dodavati ili sjeći iz njega.

Ova verzija gradi svaki dio mrežnim kernelom, pa se STEP datoteka **čita kao trouglovi**: ravne površine ostaju ravne, a zakrivljene (cilindri, konusi, sfere, torusi, B-spline površine) postaju mnogo malih ravnih. Njena zapremina je unutar djelića procenta tačne. Čuvanje zakrivljenih površina tačno zahtijeva egzaktni kernel, a on nije u ovoj verziji.

## Otvaranje STEP datoteke

1. Izaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, i izaberite `.step` ili `.stp` datoteku. Ili je prevucite na 3D pogled.
2. PartCraft čita datoteku i prikazuje šta je našao, na primjer: "AP214 datoteka: 1 tijelo, 10 površina, čitano kao trouglovi." Ispod su broj trouglova, sve što je moralo biti izostavljeno ili spojeno, i da li se rezultat zatvara.
3. Provjerite **Gore u datoteci**. STEP datoteka navodi svoju jedinicu (milimetri, inči, metri…); PartCraft je pretvara u milimetre, pa **Jedinice u datoteci** pokazuju Milimetri, "datoteka tako kaže". **Veličina ovdje** pokazuje koliko će biti velika.
4. Izaberite {{ui:Otvori kao tijelo}} za prazan dio, ili {{ui:Dodaj u ovaj dio}} / {{ui:Novi dio}} kad dio već ima elemente. Dodavanje pita šta da radi uz **Upotrijebi za**: dodaj, odsijeci ili zadrži samo preklapanje.

Element **Imported1** se pojavljuje u historiji, a statusna traka kaže, na primjer: "plate.step je čvrsto tijelo: 57995.937 mm³, 6 ravnih površina za skiciranje."

## STEP sklopa

Sklop dolazi kao **jedno tijelo** sa svakim dijelom tamo gdje ga datoteka postavlja ("3 dijela postavljena u datoteci dolaze tamo gdje stoje"). Dio korišten dvaput dolazi dvaput. Nazivi dijelova i stablo sklopa se ne čuvaju.

## Postavljanje strane prema gore

Većina CAD programa koristi Z gore; PartCraft koristi Y gore. Podrazumijevano, PartCraft okreće datoteku tako da njena Z osa pokazuje gore ovdje. Ako dio stigne ležeći na boku, izaberite **Imported1** i postavite **Gore u datoteci** na **Y gore**. **Jedinice u datoteci** i **Upotrijebi za** se također mogu mijenjati tamo; svaka promjena je jedan korak poništavanja.

## Gradnja na njemu

- Kliknite ravnu površinu tijela i izaberite {{ui:Skica na ovoj površini}}. Ravne površine STEP modela zadržavaju svoje mjesto kad se tijelo ponovo izgradi.
- Dodajte rezove, rupe, izbočine, uzorke i ogledala kao na bilo kojem dijelu.
- Provjerite njegovu veličinu u okviru **Dio**: zapremina, površina i dimenzije.

Zaobljenja, skošenja i ljuske zahtijevaju egzaktni kernel, kao i na bilo kojem dijelu u ovoj verziji ([Mrežni kernel](topic:solid-kernels)).

## Gdje se čuva

Trouglovi se čuvaju **unutar** datoteke `.partcraft.json`, pa je datoteka dijela samostalna: STEP datoteka vam više nije potrebna.

## Poruke

| Poruka | Šta znači |
|---|---|
| '"part.stp" nije STEP datoteka (ne počinje sa ISO-10303-21).' | Datoteka nije običan STEP tekst. Zatražite od pošiljaoca STEP datoteku AP203, AP214 ili AP242 |
| "STEP datoteka se ne može pročitati: njen dio sa podacima nedostaje ili je oštećen." | Datoteka je odsječena ili oštećena. Kopirajte je ponovo |
| "STEP datoteka ne sadrži čvrsto ni površinsko tijelo: nema šta uvesti." | Datoteka sadrži samo crteže, tačke ili podatke. Zatražite čvrsto tijelo |
| "Ta STEP datoteka je prevelika (preko 60 MB) za uvoz ovdje." i ostala ograničenja čitača (unosi, površine, trouglovi) | Pojednostavite model na izvoru, ili šaljite dijelove pojedinačno |
| "… oštećeni redovi u datoteci su preskočeni." | Neki redovi se nisu mogli pročitati; ostali su uvezeni. Provjerite tijelo |
| "… površine nisu mogle biti pretvorene u trouglove i izostavljene su." | Te površine ostavljaju rupe, koje PartCraft pokušava popuniti; ako se tijelo ne zatvara, ne dodaje se |
| "… površine vrste koja se ne čita (…) su preskočene." | Rijedak tip površine. Zatražite model sa običnim ili B-spline površinama |
| "Ne zatvara se …" | Površine ne čine zatvoreno tijelo (površinski model, ili izostavljene površine). PartCraft prikazuje otvore i ne dodaje ništa |

## Ograničenja

- Zakrivljene površine se crtaju i mjere kao ravne facete, kao u svakom dijelu koji ova verzija gradi. PartCraft zadržava ravne površine, cilindre, konuse, sfere i torus datoteke uz tijelo, pa {{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} ih piše nazad kao prave površine, rupe kao rupe, zajedno sa elementima koje dodate. Površine koje datoteka daje kao splajnove, sweep (provlačenje) ili površine rotacije ostaju facete u izvozu. Dio sačuvan prije 0.9.1 nema zadržane površine: ponovo otvorite STEP datoteku da ih dobijete.
- {{ui:Izvoz}} › {{ui:DXF skice ili ravne površine}} sa izabranom ravnom površinom piše okrugle rupe datoteke kao prave kružnice.
- Boje, nazivi tijela, struktura sklopa i PMI (tolerancije u datoteci) se ne čitaju.
- Osim STEP-a, PartCraft otvara STL, OBJ i 3MF mreže ([Otvaranje STL, OBJ ili 3MF](topic:open-meshes)) i `.3dm` datoteke ([Otvaranje .3dm modela](topic:open-3dm-files)) kao čvrsta tijela. IGES i izvorne datoteke drugih programa nisu podržani.
- Dio sa STEP čvrstim tijelom uvezenim verzijom gradnje sa egzaktnim kernelom zadržava STEP tekst; ova verzija preskače taj element ("nije izgrađeno"). Ponovo otvorite STEP datoteku da je uvezete kao trouglove.
