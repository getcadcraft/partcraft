---
title: Provlačenje, prelaz i nagib
summary: Provucite zatvoreni profil duž putanje od krivih skice ili ivica modela, napravite prelaz kroz preseke na različitim ravnima i dodajte nagib površinama; uz opcije, tačne rezultate i poruke.
keywords: provlačenje, provučeno izbočenje, provučeno sečenje, cev, putanja, prelaz, prelazno izbočenje, mešanje preseka, pravolinijski, nagib, ugao nagiba, sužavanje površina, neutralna ravan, pravac vučenja, kalup
from: 9d637981
---

:::note
**U ovoj verziji** provlačenje i prelaz još nisu izgrađeni: potreban im je tačan geometrijski kernel, koji ova verzija PartCraft-a nema. [Šta još nije izgrađeno](topic:not-built-yet) kaže šta da radite umesto toga; odeljci Provlačenje i Prelaz opisuju ih kako rade uz tačan kernel. **Nagib radi** na ravnim površinama: mrežni kernel ga izrađuje, sa istim rezultatom koji daje tačan kernel.
:::

Sve tri su u meniju {{ui:Više}} grupe Funkcije (pogledajte [Mrežni kernel](topic:solid-kernels)). Svaka može da spoji materijal, da ga iseče, da zadrži samo preklapanje (**Presek**) ili da napravi **Novo telo** (provlačenje i prelaz: **Operacija** na panelu).

## Provlačenje

Provlačenje pomera zatvoreni profil duž putanje: cevi, ručke, žičane opruge, šine.

1. Nacrtajte **putanju** u jednoj skici: linije i lukovi spojeni od kraja do kraja (ili upotrebite ivice modela, u nastavku).
2. Nacrtajte **profil** u drugoj skici čija ravan prolazi kroz jedan kraj putanje, na primer krug na gornjoj ravni na početku putanje nacrtane na prednjoj ravni.
3. Izaberite skicu profila, pa {{ui:Više}}, zatim {{ui:Provlačenje}}. Najnovija druga skica postaje putanja.

Na panelu:

| Podešavanje | Šta radi |
|---|---|
| **Putanja** | Označite skice koje čine putanju (više skica se spaja od kraja do kraja u jednu 3D putanju); **Izaberi ivice modela** dodaje ivice dela |
| **Orijentacija** | Prati putanju (podrazumevano), Frenet, Fiksno (preseci ostaju paralelni sa profilom), Zadrži pravac, Duž vodeće krive |
| **Krajnja razmera** | Profil linearno raste ili se smanjuje do ove veličine na kraju (1 = konstantno) |

Oštri uglovi u putanji su skošeni. Krug poluprečnika 5 provučen duž linije od 100 mm je cilindar tačno 2500π mm³; duž četvrtine luka poluprečnika 50, četvrtina torusa od 625π² mm³.

## Prelaz

Prelaz se stapa kroz dva ili više preseka na različitim ravnima.

1. Nacrtajte svaki presek u sopstvenoj skici (po jednu zatvorenu petlju), na osnovnim ravnima, referentnim ravnima (pogledajte [Referentne ravni, ose i tačke](topic:reference-geometry)) ili površinama.
2. Izaberite {{ui:Više}}, pa {{ui:Prelaz}}. Svaka neiskorišćena skica sa jednom petljom postaje presek, redom iz istorije.

Panel prikazuje preseke po redu (**Gore** menja redosled, **Ukloni** briše jedan); **Dodaj skicu** dodaje još jednu, **Izaberi površinu** dodaje ravnu površinu dela. **Pravolinijski** pravi ravne površine između preseka umesto glatkog stapanja. Između dva kvadrata oba su ista zarubljena piramida (kvadrat 40 mm do kvadrata 20 mm na visini 30 mm: tačno 28000 mm³).

Preseci sa različitim brojem stranica (kvadrat i trougao) uparuju se pomoću OpenCascade, što može da uvrne bočne površine; funkcija upozorava. Za najčistiji rezultat, crtajte preseke sa istim brojem stranica, počevši od odgovarajućih uglova.

### Vodeće šine

Vodeće šine su krive koje bočne strane prelaza moraju pratiti od prvog do poslednjeg preseka, za ispupčenje, suženje ili proširenje koje sami nacrtate.

1. Nacrtajte dve ili više šina: otvorenih krivih (linija, lukova, splajnova) koje idu od prvog do poslednjeg preseka i seku svaki presek jednom. Jedna skica može sadržati više šina: svaki zasebni lanac u njoj je posebna šina. Nacrtajte šinu tako da se stvarno susreće sa svakim presekom: privucite njene krajeve na tačke preseka.
2. U panelu Prelaz, pod **Vodeće šine**, označite skice koje ih sadrže ili kliknite {{ui:Izaberi ivice modela kao šine}} i kliknite ivice dela (Esc završava).

Sa šinama, prelaz je Gordonova površ kroz preseke i šine (pogledajte [Površi kroz mrežu krivih](topic:gordon-surfaces)), zatvorena ravno na oba kraja u čvrsto telo. Panel kaže koliko tačno ih prati. Svaki presek tada mora biti skica (tačka ili površina ne mogu da prime šinu), a **Pravolinijski** se ne primenjuje. Šina koja promaši presek za više od 0.01 mm se odbija, uz prikaz razmaka.

Provereno: dva kruga (20 mm i 10 mm u prečniku, na 40 mm) sa četiri prave šine daju zapreminu zarubljenog kupa sa greškom manjom od 0.000002 %; lukovi koji se ispupče 5 mm daju bure koje prati svaku šinu unutar 0.00001 mm.

## Nagib

Nagib naginje površine tako da deo izlazi iz kalupa.

1. Izaberite {{ui:Više}}, pa {{ui:Nagib}} (ili prvo držite {{key:Shift}}+klik na površine). Ako ništa nije izabrano, u režimu izbora ste: kliknite svaku površinu koju naginjete, pa {{ui:Gotovo}}.
2. Podesite **Ugao (°)**, **Neutralnu ravan** (gde površine zadržavaju svoju veličinu) i **Pravac vučenja** (podrazumevano normala neutralne ravni).

Pozitivan ugao naginje površinu ka unutra duž vučenja i uklanja materijal; negativan ga dodaje. Neutralna ravan počinje kao gornja ravan. U ovoj verziji samo ravne površine mogu da se naginju: cilindar, konus ili slobodna površina prikazuju poruku „Nagib: u ovoj verziji samo ravne površine (izrađuje mrežni kernel).“ Četiri strane bloka 100 × 100 × 50 nagnute za 5° oko donje strane postaju zarubljena piramida tačno h/3·(a² + b² + ab), uz b = a − 2h·tan 5°.

## Poruke

| Poruka | Šta da radite |
|---|---|
| „Ravan profila mora da prolazi kroz jedan kraj putanje …“ | Pomerite skicu profila na početak (ili kraj) putanje |
| „Putanja ima prazninu: njene krive se ne spajaju od kraja do kraja …“ | Spojite krive putanje; u zasebnim skicama krajevi se moraju tačno sastajati |
| „Presek prelaza zahteva tačno jednu zatvorenu petlju“ | Podelite skicu ili uklonite višak petlje |
| „… ne može da se nagne oko ove neutralne ravni …“ | Površina je paralelna sa neutralnom ravni ili je ne seče |
| „Nagib: u ovoj verziji samo ravne površine (izrađuje mrežni kernel).“ | Izabrana površina je zakrivljena. Uklonite je; naginjite samo ravne površine |

:::note
Još nije izgrađeno: uvrtanje provlačenja, provlačenje tankih zidova i površina, vodeće šine prelaza i tangentnost na kraju, nagib na cilindrima, konusima i slobodnim površinama.
:::
