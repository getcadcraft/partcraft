---
title: Površine kroz mrežu krivulja (Gordonova površina)
summary: Napravite jednu glatku površinu kroz mrežu profilnih i vodećih krivulja nacrtanih u skicama ili uzetih iz ivica modela, zatvorite je u čvrsto tijelo kada su profili zatvoreni, te šta je tačno, šta je prilagođeno i poruke kada mreža ne odgovara.
keywords: tangenta, G1, tangentnost, tangentni kontinuitet, ravan ogledala, Gordonova površina, mreža krivulja, granična površina, mrežna površina, profili, vodilice, vodeće krivulje, prijelaz s vodilicama, vodeće šine, koža, transfinitna, Coons, B-spline površina, slobodna površina
from: ada3cb8b
---

:::note
**Još nije izgrađeno u ovoj verziji.** Gordonova površina zahtijeva tačno geometrijsko jezgro, koje ova verzija PartCraft-a nema: svaki dio gradi mrežnim jezgrom. [Šta još nije izgrađeno](topic:not-built-yet) kaže šta uraditi umjesto toga. Ostatak ove stranice opisuje je onako kako radi s tačnim jezgrom.
:::

A **Gordonova površina** je jedna površina koja prolazi kroz svaku krivulju mreže: skup **profila** koji idu jednim smjerom i skup **vodilica** koji idu drugim, ukrštajući se kao niti mreže. Tako oblikujete trup, blatobran ili dršku iz nekoliko presječnih krivulja koje direktno kontrolišete. Potrebno joj je **tačno jezgro** (vidi [Mrežno jezgro](topic:solid-kernels)).

## Nacrtajte mrežu

1. Nacrtajte **profile**: dvije ili više krivulja koje idu jedna pored druge, na primjer presjeke na paralelnim ravnima. Linije, lukovi, krugovi i splajnovi svi rade, a lanac krivulja spojenih kraj na kraj računa se kao jedna krivulja.
2. Nacrtajte **vodilice**: dvije ili više krivulja koje idu preko profila. Svaka vodilica mora presjeći svaki profil jednom, a svaki profil svaku vodilicu jednom.
3. Učinite da se krivulje zaista sastaju. Nacrtajte skicu vodilice tako da njena krivulja prolazi kroz tačke profila (privucite na projicirane tačke ili upišite koordinate). Mreža prihvata praznine do **Tolerancije** (0.01 mm za početak).

Jedna skica može sadržavati više krivulja: svaki zasebni lanac u njoj je sopstvena krivulja. Tako možete nacrtati sve vodilice u jednoj skici na gornjoj ravni, na primjer.

## Napravite površinu

1. Odaberite {{ui:More}} u grupi Značajke, zatim {{ui:Gordon surface}}.
2. PartCraft uzima skice koje niko još ne koristi: one na ravnima paralelnim s prvom postaju **profili**, ostale **vodilice**. Provjerite listu desno i postavite svaku skicu na **Profili**, **Vodilice** ili **Nije korišteno**.
3. Da koristite ivice dijela, kliknite **Odaberi ivice kao profile** (ili **kao vodilice**), kliknite ivice u prikazu, zatim pritisnite {{key:Esc}}.

Rezultat je **tijelo površine**. {{ui:Thicken}} ga pretvara u čvrsto tijelo, {{ui:Stitch}} ga sašiva s drugim površinama, a {{ui:Trim surface}} ga siječe.

### Zatvorite u čvrsto tijelo

Kada su profili zatvorene krivulje (krugovi, zatvoreni splajnovi, zatvoreni lanci) i prvi i posljednji profil leže ravno, svaki u svojoj ravni, označite **Zatvori u čvrsto tijelo**. Krajevi se pokrivaju ravnim površinama i zatvoreni oblik se spaja, siječe, presjeca ili postaje novo tijelo kao svaka druga značajka. Tako pravite prijelaz koji prati vodeće krivulje. Isto radi i sa zatvorenim vodilicama.

## Tangenta na ravan duž ivice

Gordonova površina prolazi kroz svoje krivulje, ali sama po sebi ne odgovara nagibu onoga što dodiruje. Da je natjerate da napusti ivicu **tangentno** na ravan (G1), kao što je ravan ogledala, tako da se zrcalna kopija spoji bez preloma, ili ravna površina iz koje raste:

1. Odaberite Gordonovu značajku. Pod **Tangenta na**, odaberite ravan u {{ui:Add a plane…}} (Prednja, Gornja, Desna ili referentna ravan), ili odaberite ravnu površinu u prikazu i pritisnite {{ui:Dodaj izabranu ravnu površinu}}.
2. PartCraft pronalazi graničnu krivulju mreže koja leži u toj ravni, i površina je napušta tangentno na ravan.

Ako ravan sadrži dvije granične krivulje (na primjer pod s oba kraja), dodajte je dva puta: svaka kopija uzima sljedeću. Do četiri ravni, po jedna za ivicu.

Izvještaj kaže duž koje krivulje je svaka ravan napravila tangentu i najstrmiji ugao pod kojim je površina ranije dodirivala tu ravan. Vodilice koje već napuštaju tu krivulju tangentno na ravan prate se tačno. Vodilice koje se udaljavaju od nje savijaju se u uskom pojasu blizu ivice, a brojka „prati svaku krivulju unutar” u izvještaju kaže koliko: nacrtajte vodilice koje napuštaju ivicu ravno za tačno uklapanje.

## Šta je tačno, a šta je prilagođeno

Panel kaže koje od ovoga važi i koliko površina odstupa od vaših krivulja.

- **Tačno**: kada je svaka krivulja polinomska (linije, splajnovi i njihovi lanci) i vodilice presijecaju sve profile na istim parametrima, površina je tačno Gordonova površina tih krivulja. Mreža izo-krivulja izrezanih iz bikubične površine vraća tu površinu, a četiri prave linije daju ravnu ili uvrnutu (bilinearnu) krpu.
- **Prilagođeno**: lukovi, krugovi i ivice dijela nisu polinomski, a krivulje koje se sijeku na različitim parametrima moraju biti ponovo vremenski usklađene da se presjeci poravnaju. Te krivulje se prilagođavaju kubičnim B-splajnovima unutar jedne desetmilionitog dijela veličine mreže (oko 0.00001 mm za dio od 100 mm). Cilindrična krpa napravljena od lukova i linija ostaje unutar 0.00001 mm od pravog cilindra.

Između krivulja površina je ono što metoda daje: profili stopljeni preko, plus vodilice stopljene preko, minus stopljeni njihovi presjeci. Glatka je svuda osim gdje krivulja ima oštar ugao. Gdje dvije Gordonove površine dijele graničnu krivulju, spajaju se ivica do ivice (G0), ne tangentno.

## Kada mreža ne odgovara

| Poruka | Šta uraditi |
|---|---|
| „… se ne sastaju: prolaze 0.4 mm jedna od druge” | Učinite da se taj profil i vodilica sijeku, ili podignite Toleranciju |
| „… se sastaje … 2 puta” | Vodilica smije presijecati svaki profil samo jednom: podijelite krivulju koja se petlja, ili koristite manje profila |
| „… u drugačijem redoslijedu” ili „savija se preko sebe” | Dvije vodilice se međusobno sijeku (ili dva profila). Porodice moraju ići jedna pored druge |
| „najmanje dva profila i dvije vodilice” | Dodajte krivulje, ili postavite više skica na Profili ili Vodilice |
| „miješaju otvorene i zatvorene krivulje” | Učinite sve profile otvorenim ili sve zatvorenim (isto za vodilice) |
| „Kraj … nije ravan, pa se ne može pokriti” | Nacrtajte prvi i posljednji zatvoreni profil svaki u jednoj ravni, ili ostavite Zatvori u čvrsto tijelo isključeno |

## Ograničenja

- Jedna B-spline površina po mreži: nema G1 ili G2 tangentnosti na susjedne površine.
- Šav zatvorene mreže, na prvoj vodilici, spojen je ivica do ivice, ali nije tangentan.
- Sama značajka Prijelaz nema šina vodilica; umjesto toga koristite Gordonovu površinu zatvorenu u čvrsto tijelo.
- Vrlo vijugave krivulje, ili presjeci neravnomjerno raspoređeni duž jedne krivulje u odnosu na drugu, mogu trebati previše tačaka za prilagođavanje; značajka to tada kaže.
