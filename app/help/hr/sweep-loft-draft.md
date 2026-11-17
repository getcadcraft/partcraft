---
title: Provlačenje, loft i nagib
summary: Provucite zatvoreni profil duž putanje skicnih krivulja ili bridova modela, izradite loft kroz presjeke na različitim ravninama i dodajte nagib plohama; s opcijama, točnim rezultatima i porukama.
keywords: provlačenje, provučeno izbočenje, provučeni izrez, cijev, putanja, loft, izbočenje lofta, stapanje presjeka, pravocrtno, nagib, kut nagiba, sužavanje ploha, neutralna ravnina, smjer vučenja, kalupljenje
from: 9d637981
---

:::note
**U ovoj verziji** provlačenje i loft **još nisu izrađeni**: potrebna im je egzaktna geometrijska jezgra, koju ova verzija PartCraft-a nema. [Što još nije izrađeno](topic:not-built-yet) govori što raditi umjesto toga; odjeljci Provlačenje i Loft opisuju ih onako kako rade s egzaktnom jezgrom. **Nagib radi** na ravnim plohama: jezgra mreže ga izrađuje, s istim rezultatom koji daje egzaktna jezgra.
:::

Sve tri su u grupi Značajke, u izborniku {{ui:Više}} (vidi [Jezgra mreže](topic:solid-kernels)). Svaka može spojiti materijal, izrezati ga, zadržati samo preklop (**Presjek**) ili izraditi **Novo tijelo** (provlačenje i loft: **Operacija** na ploči).

## Provlačenje

Provlačenje pomiče zatvoreni profil duž putanje: cijevi, ručke, žičane opruge, tračnice.

1. Nacrtajte **putanju** u jednoj skici: linije i lukove spojene od kraja do kraja (ili upotrijebite bridove modela, u nastavku).
2. Nacrtajte **profil** u drugoj skici čija ravnina prolazi kroz jedan kraj putanje, na primjer kružnica na gornjoj ravnini na početku putanje nacrtane na prednjoj ravnini.
3. Odaberite skicu profila i izaberite {{ui:Više}}, zatim {{ui:Provlačenje}}. Najnovija druga skica postaje putanja.

Na ploči:

| Postavka | Što radi |
|---|---|
| **Putanja** | Označite skice koje čine putanju (više skica se spaja od kraja do kraja u jednu 3D putanju); **Odaberi bridove modela** dodaje bridove dijela |
| **Orijentacija** | Prati putanju (zadano), Frenet, Fiksno (presjeci ostaju paralelni s profilom), Zadrži smjer, Duž vodilice |
| **Krajnje skaliranje** | Profil linearno raste ili se smanjuje do ove veličine na kraju (1 = stalna) |

Oštri kutovi na putanji spajaju se skosom. Krug polumjera 5 provučen duž linije od 100 mm je valjak točno 2500π mm³; duž četvrtine luka polumjera 50, četvrtina torusa od 625π² mm³.

## Loft

Loft se stapa kroz dva ili više presjeka na različitim ravninama.

1. Nacrtajte svaki presjek u vlastitoj skici (svaki s jednom zatvorenom petljom), na osnovnim ravninama, referentnim ravninama (vidi [Referentne ravnine, osi i točke](topic:reference-geometry)) ili plohama.
2. Odaberite {{ui:Više}}, zatim {{ui:Loft}}. Svaka neiskorištena skica s jednom petljom postaje presjek, redom iz povijesti.

Ploča navodi presjeke redom (**Gore** mijenja redoslijed, **Ukloni** izbacuje jedan); **Dodaj skicu** dodaje još jednu, a **Odaberi plohu** dodaje ravnu plohu dijela. **Pravocrtno** pravi ravne plohe između presjeka umjesto glatkog stapanja. Između dva kvadrata oba su ista krnja piramida (kvadrat 40 mm do kvadrata 20 mm na visini 30 mm: točno 28000 mm³).

Presjeci s različitim brojem stranica (kvadrat do trokuta) povezuje OpenCascade, što može iskriviti bočne plohe; značajka upozorava. Crtajte presjeke s jednakim brojem stranica, počevši od odgovarajućih kutova, za najčišći rezultat.

### Vodilice

Vodilice su krivulje po kojima bočne plohe lofta moraju ići od prvog do zadnjeg presjeka, za izbočenje, suženje ili proširenje koje sami nacrtate.

1. Nacrtajte dvije ili više vodilica: otvorene krivulje (linije, lukovi, splajnovi) koje idu od prvog do zadnjeg presjeka i sijeku svaki presjek jednom. Jedna skica može sadržavati više vodilica: svaki zasebni lanac u njoj je zasebna vodilica. Nacrtajte vodilicu tako da stvarno dodiruje svaki presjek: privucite njezine krajeve na točke presjeka.
2. U ploči Loft, pod **Vodilice**, označite skice koje ih sadrže ili kliknite {{ui:Odaberite bridove modela kao šine}} i kliknite bridove dijela ({{key:Esc}} završava).

Uz vodilice loft je Gordonova ploha kroz presjeke i vodilice (vidi [Plohe kroz mrežu krivulja](topic:gordon-surfaces)), zatvorena ravno na oba kraja u puno tijelo. Ploča kaže koliko točno je prati. Svaki presjek tada mora biti skica (točka ili ploha ne može primiti vodilicu), a **Pravocrtno** se ne primjenjuje. Vodilica koja promaši presjek za više od 0.01 mm se odbija, uz prikaz razmaka.

Provjereno: dva kruga (promjera 20 mm i 10 mm, na udaljenosti 40 mm) s četiri ravne vodilice daju volumen krnjeg stošca s odstupanjem manjim od 0.000002 %; lukovi koji se ispupče za 5 mm daju bačvu koja prati svaku vodilicu unutar 0.00001 mm.

## Nagib

Nagib naginje plohe tako da dio izlazi iz kalupa.

1. Odaberite {{ui:Više}}, zatim {{ui:Nagib}} (ili prvo {{key:Shift}}+klik na plohe). Dok ništa nije odabrano, u načinu odabira ste: kliknite svaku plohu koju želite nagnuti, zatim {{ui:Gotovo}}.
2. Postavite **Kut (°)**, **Neutralnu ravninu** (gdje plohe zadržavaju svoju veličinu) i **Smjer vučenja** (po zadanom normala neutralne ravnine).

Pozitivan kut naginje plohu prema unutra duž vučenja i uklanja materijal; negativan ga dodaje. Neutralna ravnina počinje kao Gornja ravnina. U ovoj verziji mogu se nagnuti samo ravne plohe: valjak, stožac ili slobodna ploha javlja poruku „Nagib: u ovoj verziji samo ravne plohe (izrađuje ih jezgra mreže).“ Četiri stranice bloka 100 × 100 × 50 nagnute za 5° oko donje strane postaju krnja piramida točnog volumena h/3·(a² + b² + ab), uz b = a − 2h·tan 5°.

## Poruke

| Poruka | Što učiniti |
|---|---|
| „Ravnina profila mora prolaziti kroz jedan kraj putanje …“ | Pomaknite skicu profila na početak (ili kraj) putanje |
| „Putanja ima prazninu: njezine krivulje se ne spajaju od kraja do kraja …“ | Spojite krivulje putanje; u zasebnim skicama krajevi se moraju točno dodirivati |
| „Presjek lofta treba točno jednu zatvorenu petlju“ | Podijelite skicu ili uklonite višak petlje |
| „… ne može se nagnuti oko ove neutralne ravnine …“ | Ploha je paralelna s neutralnom ravninom ili je ne siječe |
| „Nagib: u ovoj verziji samo ravne plohe (izrađuje ih jezgra mreže).“ | Odabrana ploha je zakrivljena. Uklonite je; nagnite samo ravne plohe |

:::note
Još nije izrađeno: uvijena provlačenja, provlačenja tankih stijenki i površinska provlačenja, vodilice lofta i tangencija na kraju, nagib na cilindrima, stošcima i slobodnim plohama.
:::
