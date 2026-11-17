---
title: Provlačenje, prelaz i nagib
summary: Provucite zatvoreni profil duž putanje skicnih krivulja ili ivica modela, napravite prelaz kroz presjeke na različitim ravnima i dodajte nagib površima; sa opcijama, tačnim rezultatima i porukama.
keywords: provlačenje, provučeni izbočenik, provučeni rez, cijev, putanja, prelaz, prelazni izbočenik, miješanje presjeka, pravolinijski, nagib, ugao nagiba, suženje površi, neutralna ravan, smjer povlačenja, kalupljenje
from: 9d637981
---

:::note
**U ovoj verziji** provlačenje i prelaz još nisu napravljeni: potrebna im je tačna geometrijska jezgra, a ova verzija PartCraft-a je nema. [Šta još nije napravljeno](topic:not-built-yet) kaže šta raditi umjesto toga; odjeljci Provlačenje i Prelaz opisuju ih kako rade sa tačnom jezgrom. **Nagib radi** na ravnim površima: jezgra mreže ga izrađuje, sa istim rezultatom kao tačna jezgra.
:::

Sve tri su u meniju {{ui:Više}} grupe Elementi (vidi [Jezgra mreže](topic:solid-kernels)). Svaka može dodati materijal, izrezati ga, zadržati samo preklapanje (**Presjek**) ili napraviti **Novo tijelo** (provlačenje i prelaz: **Operacija** u panelu).

## Provlačenje

Provlačenje pomjera zatvoreni profil duž putanje: cijevi, ručke, opruge od žice, šine.

1. Nacrtajte **putanju** u jednoj skici: linije i lukove spojene od kraja do kraja (ili upotrijebite ivice modela, dolje).
2. Nacrtajte **profil** u drugoj skici čija ravan prolazi kroz jedan kraj putanje, na primjer krug na gornjoj ravni na početku putanje nacrtane na prednjoj ravni.
3. Izaberite skicu profila i izaberite {{ui:Više}}, zatim {{ui:Provlačenje}}. Najnovija druga skica postaje putanja.

U panelu:

| Postavka | Šta radi |
|---|---|
| **Putanja** | Označite skice koje čine putanju (više skica se spaja od kraja do kraja u jednu 3D putanju); **Odaberi ivice modela** dodaje ivice dijela |
| **Orijentacija** | Prati putanju (zadano), Frenet, Fiksno (presjeci ostaju paralelni sa profilom), Zadrži smjer, Duž vodeće krive |
| **Krajnje skaliranje** | Profil raste ili se smanjuje linearno do ove veličine na kraju (1 = konstantno) |

Oštri uglovi na putanji su skošeni. Krug radijusa 5, provučen duž linije od 100 mm, je cilindar tačno 2500π mm³; duž četvrtine luka radijusa 50, četvrtina torusa od 625π² mm³.

## Prelaz

Prelaz se miješa kroz dva ili više presjeka na različitim ravnima.

1. Nacrtajte svaki presjek u svojoj skici (jedna zatvorena petlja svaka), na osnovnim ravnima, referentnim ravnima (vidi [Referentne ravni, ose i tačke](topic:reference-geometry)) ili površima.
2. Izaberite {{ui:Više}}, zatim {{ui:Prelaz}}. Svaka neiskorištena skica sa jednom petljom postaje presjek, po redoslijedu historije.

Panel navodi presjeke redom (**Gore** mijenja redoslijed, **Ukloni** izbacuje jedan); **Dodaj skicu** dodaje još jednu, **Odaberi površ** dodaje ravnu površ dijela. **Pravolinijski** pravi ravne površi između presjeka umjesto glatkog miješanja. Između dva kvadrata oba su ista krnja piramida (kvadrat 40 mm do kvadrata 20 mm, na visini 30 mm: tačno 28000 mm³).

Presjeci sa različitim brojem stranica (kvadrat do trougla) usklađuju se pomoću OpenCascade, što može uvrnuti bočne površi; element upozorava. Crtajte presjeke sa istim brojem stranica, počevši od odgovarajućih uglova, za najčistiji rezultat.

### Vodeće šine

Vodeće šine su krive koje bočne strane prelaza moraju pratiti od prvog do posljednjeg presjeka, za izbočinu, suženje ili proširenje koje sami nacrtate.

1. Nacrtajte dvije ili više šina: otvorene krive (linije, lukove, splajnove) koje idu od prvog do posljednjeg presjeka i sijeku svaki presjek jednom. Jedna skica može sadržavati više šina: svaki odvojeni lanac u njoj je zasebna šina. Nacrtajte šinu tako da stvarno dodiruje svaki presjek: privucite njene krajeve na tačke presjeka.
2. U panelu Prelaz, pod **Vodeće šine**, označite skice koje ih sadrže, ili kliknite {{ui:Odaberi ivice modela kao šine}} i kliknite ivice dijela ({{key:Esc}} završava).

Sa šinama prelaz je Gordonova površ kroz presjeke i šine (vidi [Površi kroz mrežu krivih](topic:gordon-surfaces)), zatvorena ravno na oba kraja u čvrsto tijelo. Panel kaže koliko je tačno prati. Svaki presjek tada mora biti skica (tačka ili površ ne mogu primiti šinu), a **Pravolinijski** se ne primjenjuje. Šina koja promaši presjek za više od 0.01 mm se odbija, uz naveden razmak.

Provjereno: dva kruga (prečnika 20 mm i 10 mm, na razmaku 40 mm) sa četiri prave šine daju zapreminu krnjeg konusa do 0.000002 %; lukovi koji se izbočuju 5 mm daju bure koje prati svaku šinu unutar 0.00001 mm.

## Nagib

Nagib naginje površi tako da dio izađe iz kalupa.

1. Izaberite {{ui:Više}}, zatim {{ui:Nagib}} (ili prvo {{key:Shift}}+klik na površi). Ako ništa nije odabrano, u režimu odabira ste: kliknite svaku površ koju nagibate, zatim {{ui:Gotovo}}.
2. Postavite **Ugao (°)**, **Neutralnu ravan** (gdje površi zadržavaju veličinu) i **Smjer povlačenja** (podrazumijevano normala neutralne ravni).

Pozitivan ugao naginje površ prema unutra duž povlačenja i uklanja materijal; negativan ga dodaje. Neutralna ravan počinje kao gornja ravan. U ovoj verziji mogu se nagibati samo ravne površi: cilindar, konus ili slobodna površ dobija poruku „Nagib: u ovoj verziji samo ravne površi (izrađuje jezgra mreže).“ Četiri strane bloka 100 × 100 × 50, nagnutog za 5° oko donje ivice, postaju krnja piramida tačne zapremine h/3·(a² + b² + ab), uz b = a − 2h·tan 5°.

## Poruke

| Poruka | Šta raditi |
|---|---|
| „Ravan profila mora proći kroz jedan kraj putanje …“ | Pomjerite skicu profila na početak (ili kraj) putanje |
| „Putanja ima prazninu: njene krive se ne spajaju od kraja do kraja …“ | Spojite krive putanje; u odvojenim skicama njihovi krajevi se moraju tačno sastati |
| „Presjek prelaza mora imati tačno jednu zatvorenu petlju“ | Podijelite skicu ili uklonite višak petlje |
| „… ne može se nagnuti oko ove neutralne ravni …“ | Površ je paralelna sa neutralnom ravni ili je ne siječe |
| „Nagib: u ovoj verziji samo ravne površi (izrađuje jezgra mreže).“ | Izabrana površ je zakrivljena. Uklonite je; nagibajte samo ravne površi |

:::note
Još nije napravljeno: uvrnuta provlačenja, provlačenja tankih zidova i površina, vodeće šine prelaza i tangentnost na kraju, nagib na cilindrima, konusima i slobodnim površima.
:::
