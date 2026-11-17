---
title: Površine kroz mrežu krivulja (Gordonova površina)
summary: Izradite jednu glatku površinu kroz mrežu profilnih i vodećih krivulja nacrtanih u skicama ili uzetih iz bridova modela, zatvorite je u čvrsto tijelo kad su profili zatvoreni, te što je točno, što je prilagođeno i koje poruke se pojavljuju kad se mreža ne uklapa.
keywords: tangenta, g1, tangentnost, tangentna neprekidnost, ravnina zrcaljenja, Gordonova površina, mreža krivulja, rubna površina, mrežna površina, profili, vodilice, vodeće krivulje, loft s vodilicama, transfinite, Coons, B-spline površina, slobodna površina
from: ada3cb8b
---

:::note
**Još nije izrađeno u ovoj verziji.** Gordonova površina zahtijeva egzaktnu geometrijsku jezgru, a ova verzija aplikacije PartCraft je nema: svaki dio gradi s mrežnom jezgrom. [Što još nije izrađeno](topic:not-built-yet) govori što raditi umjesto toga. Ostatak ove stranice opisuje kako to radi s egzaktnom jezgrom.
:::

**Gordonova površina** je jedna površina koja prolazi kroz svaku krivulju mreže: skup **profila** koji idu jednim smjerom i skup **vodilica** koji idu drugim, prelazeći se poput niti mreže. Tako oblikujete trup, blatobran ili ručku iz nekoliko presječnih krivulja koje izravno kontrolirate. Potrebna je **egzaktna jezgra** (vidi [Mrežna jezgra](topic:solid-kernels)).

## Nacrtajte mrežu

1. Nacrtajte **profile**: dvije ili više krivulja koje idu jedna uz drugu, na primjer presjeci na paralelnim ravninama. Linije, lukovi, kružnice i splajnovi svi rade, a lanac krivulja spojenih kraj o kraj broji se kao jedna krivulja.
2. Nacrtajte **vodilice**: dvije ili više krivulja koje idu preko profila. Svaka vodilica mora presjeći svaki profil jednom, a svaki profil svaku vodilicu jednom.
3. Neka se krivulje stvarno sastanu. Nacrtajte skicu vodilice tako da njezina krivulja prolazi kroz točke profila (hvatanje na projicirane točke ili upišite koordinate). Mreža prihvaća praznine do **Tolerancije** (0.01 mm za početak).

Jedna skica može sadržavati nekoliko krivulja: svaki zasebni lanac u njoj je zasebna krivulja. Tako možete nacrtati sve vodilice u jednoj skici, na primjer na gornjoj ravnini.

## Napravite površinu

1. Odaberite {{ui:Više}} u grupi Značajke, zatim {{ui:Gordonova površina}}.
2. PartCraft uzima skice koje još nitko ne koristi: one u ravninama paralelnim s prvom postaju **profili**, ostale **vodilice**. Provjerite popis desno i postavite svaku skicu na **Profili**, **Vodilice** ili **Nije korišteno**.
3. Da koristite bridove dijela, kliknite **Odaberi bridove kao profile** (ili **kao vodilice**), kliknite bridove u prikazu, zatim pritisnite {{key:Esc}}.

Rezultat je **tijelo površine**. {{ui:Zadebljaj}} ga pretvara u čvrsto tijelo, {{ui:Zašij}} ga šije s drugim površinama, a {{ui:Skrati površinu}} ga presijeca.

### Zatvorite u čvrsto tijelo

Kad su profili zatvorene krivulje (kružnice, zatvoreni splajnovi, zatvoreni lanci) i kad prvi i zadnji profil svaki leži ravno u ravnini, označite **Zatvori u čvrsto tijelo**. Krajevi se pokrivaju ravnim plohama, a zatvoreni oblik se spaja, izrezuje, presijeca ili postaje novo tijelo kao svaka druga značajka. Tako se radi loft koji prati vodeće krivulje. Isto vrijedi i za zatvorene vodilice.

## Tangenta na ravninu duž brida

Gordonova površina prolazi kroz svoje krivulje, ali sama po sebi ne odgovara nagibu onoga na što nailazi. Da je navedete da napusti brid **tangentno** na ravninu (G1), na primjer ravninu zrcaljenja, kako bi se zrcalna kopija spojila bez pregiba, ili ravnu plohu iz koje raste:

1. Odaberite značajku Gordon. Pod **Tangentno na** odaberite ravninu u {{ui:Dodaj ravninu…}} (Prednja, Gornja, Desna ili referentnu ravninu), ili odaberite ravnu plohu u prikazu i pritisnite {{ui:Dodaj odabranu ravnu plohu}}.
2. PartCraft pronalazi rubnu krivulju mreže koja leži u toj ravnini, a površina je napušta tangentno na ravninu.

Ako ravnina sadrži dvije rubne krivulje (pod s obje strane), dodajte je dvaput: svaka kopija uzima sljedeću. Do četiri ravnine, jedna po bridu.

Izvješće kaže duž koje krivulje je svaka ravnina učinila tangentnom i najstrmiji kut pod kojim je površina prije toga dodirivala ravninu. Vodilice koje već napuštaju tu krivulju tangentno na ravninu slijede se točno. Vodilice koje se uspinju od nje savijaju se u uskom pojasu uz brid, a brojka „slijedi svaku krivulju unutar” u izvješću kaže koliko: nacrtajte vodilice koje ravno napuštaju brid za točno uklapanje.

## Što je točno, a što je prilagođeno

Ploča kaže koja se od ovih primjenjuje i koliko površina odstupa od vaših krivulja.

- **Točno**: kad su sve krivulje polinomske (linije, splajnovi i njihovi lanci) i vodilice presijecaju sve profile pri istim parametrima, površina je točno Gordonova površina tih krivulja. Mreža izokrivulja izrezana iz bikubične površine vraća tu površinu, a četiri ravne linije daju ravnu ili uvijenu (bilinearnu) zakrpu.
- **Prilagođeno**: lukovi, kružnice i bridovi dijela nisu polinomski, a krivulje koje se sijeku pri različitim parametrima moraju se ponovno vremenski uskladiti da se presjeci poravnaju. Te krivulje se prilagođavaju kubičnim B-splajnovima unutar jedne desetmilijuntinke veličine mreže (oko 0.00001 mm za dio od 100 mm). Zakrpa cilindra napravljena od lukova i linija ostaje unutar 0.00001 mm od pravog cilindra.

Između krivulja površina je ono što metoda daje: profili stopljeni preko, plus vodilice stopljene preko, minus stapanje njihovih točaka presjeka. Glatka je svugdje osim gdje krivulja ima oštar kut. Gdje dvije Gordonove površine dijele rubnu krivulju, spajaju se brid na brid (G0), a ne tangentno.

## Kad se mreža ne uklapa

| Poruka | Što učiniti |
|---|---|
| „… se ne sastaju: prolaze 0.4 mm jedan od drugoga” | Učinite da se taj profil i vodilica sijeku ili povećajte Toleranciju |
| „… sastaje se … 2 puta” | Vodilica smije presjeći svaki profil samo jednom: razdvojite krivulju koja se petlja ili koristite manje profila |
| „… u drugačijem redoslijedu” ili „preklapa se sam sa sobom” | Dvije vodilice se sijeku (ili dva profila). Obitelji moraju ići jedna uz drugu |
| „najmanje dva profila i dvije vodilice” | Dodajte krivulje ili postavite više skica na Profili ili Vodilice |
| „miješa otvorene i zatvorene krivulje” | Učinite sve profile otvorenima ili sve zatvorenima (isto za vodilice) |
| „Kraj … nije ravan, pa ga nije moguće zatvoriti” | Nacrtajte prvi i zadnji zatvoreni profil svaki u jednoj ravnini ili isključite Zatvori u čvrsto tijelo |

## Ograničenja

- Jedna B-spline ploha po mreži: nema G1 ni G2 tangentnosti na susjedne površine.
- Šav zatvorene mreže, na prvoj vodilici, spojen je brid na brid, ali nije tangentan.
- Sama značajka Loft nema šina vodilica; umjesto toga koristite Gordonovu površinu zatvorenu u čvrsto tijelo.
- Vrlo valovite krivulje ili presjeci vrlo neravnomjerno razmaknuti duž jedne krivulje u odnosu na drugu mogu trebati previše točaka za prilagodbu; značajka to tada kaže.
