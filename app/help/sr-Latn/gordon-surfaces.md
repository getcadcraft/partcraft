---
title: Površi kroz mrežu krivih (Gordonova površina)
summary: Napravi jednu glatku površ kroz mrežu profilnih i vodećih krivih nacrtanih u skicama ili uzetih sa ivica modela, zatvori je u čvrsto telo kad su profili zatvoreni, i šta je tačno, šta je uklopljeno i poruke kad mreža ne odgovara.
keywords: tangenta, G1, tangentnost, tangentna neprekidnost, ravan ogledala, Gordonova površina, mreža krivih, granična površ, mrežna površ, profili, vodilice, vodeće krive, lofting sa vodilicama, vodeće šine, opna, transfinitna, Coons, B-spline površ, slobodna površ
from: ada3cb8b
---

:::note
**Još nije napravljeno u ovoj verziji.** Gordonova površina zahteva tačno geometrijsko jezgro, koje ova verzija PartCraft-a nema: svaki deo pravi mrežnim jezgrom. [Šta još nije napravljeno](topic:not-built-yet) kaže šta da se radi umesto toga. Ostatak stranice opisuje kako radi sa tačnim jezgrom.
:::

**Gordonova površina** je jedna površ koja prolazi kroz svaku krivu mreže: skup **profila** koji idu jednim pravcem i skup **vodilica** koji idu drugim, ukrštajući se kao niti mreže. Tako se oblikuje trup, branik ili ručka iz nekoliko preseka krivih kojima se direktno upravlja. Potrebno je **tačno jezgro** (vidi [Mrežno jezgro](topic:solid-kernels)).

## Nacrtaj mrežu

1. Nacrtaj **profile**: dve ili više krivih koje idu jedna pored druge, na primer preseci na paralelnim ravnima. Linije, lukovi, krugovi i splajnovi rade, a lanac krivih spojenih jedan za drugim računa se kao jedna kriva.
2. Nacrtaj **vodilice**: dve ili više krivih koje idu preko profila. Svaka vodilica mora da preseče svaki profil jednom, a svaki profil svaku vodilicu jednom.
3. Učini da se krive zaista sretnu. Nacrtaj skicu vodilice tako da njena kriva prolazi kroz tačke profila (hvataj za projektovane tačke, ili upiši koordinate). Mreža prihvata praznine do **Tolerancije** (0.01 mm za početak).

Jedna skica može sadržati više krivih: svaki odvojeni lanac u njoj je sopstvena kriva. Tako se sve vodilice mogu nacrtati u jednoj skici, na primer na gornjoj ravni.

## Napravi površ

1. Izaberi {{ui:Više}} u grupi Karakteristike, zatim {{ui:Gordonova površina}}.
2. PartCraft uzima skice koje još niko ne koristi: one u ravnima paralelnim sa prvom postaju **profili**, ostale **vodilice**. Proveri listu desno i postavi svaku skicu na **Profili**, **Vodilice** ili **Ne koristi se**.
3. Da bi se koristile ivice dela, klikni **Izaberi ivice kao profile** (ili **kao vodilice**), klikni ivice u prikazu, zatim pritisni Esc.

Rezultat je **površinsko telo**. {{ui:Zadebljaj}} ga pretvara u čvrsto telo, {{ui:Sašij}} ga šije sa drugim površima, a {{ui:Skrati površinu}} ga seče.

### Zatvori u čvrsto telo

Kad su profili zatvorene krive (krugovi, zatvoreni splajnovi, zatvoreni lanci) i prvi i poslednji profil leže ravno, svaki u svojoj ravni, označi **Zatvori u čvrsto telo**. Krajevi se zatvaraju ravnim stranama, a zatvoreni oblik se spaja, seče, preseca ili postaje novo telo kao i svaka druga karakteristika. Tako se pravi lofting koji prati vodeće krive. Isto važi i za zatvorene vodilice.

## Tangentno na ravan duž ivice

Gordonova površina prolazi kroz svoje krive, ali sama po sebi ne poklapa nagib onoga na šta nailazi. Da bi napustila ivicu **tangentno** na ravan (G1), kao što je ogledalna ravan, tako da se ogledana kopija spoji bez preloma, ili ravnu stranu iz koje raste:

1. Izaberi Gordonovu karakteristiku. Pod **Tangentno na**, izaberi ravan u {{ui:Dodaj ravan…}} (Prednja, Gornja, Desna ili referentna ravan), ili izaberi ravnu stranu u prikazu i pritisni {{ui:Dodaj izabranu ravnu površinu}}.
2. PartCraft pronalazi graničnu krivu mreže koja leži u toj ravni, i površ je napušta tangentno na ravan.

Ako ravan drži dve granične krive (pod sa obe strane), dodaj je dvaput: svaka kopija uzima sledeću. Do četiri ravni, po jedna za svaku ivicu.

Izveštaj kaže duž koje krive je svaka ravan napravila tangentnost i najstrmiji ugao pod kojim je površ ranije sretala tu ravan. Vodilice koje već napuštaju tu krivu tangentno na ravan prate se tačno. Vodilice koje se penju od nje savijaju se u uskoj traci blizu ivice, a brojka „prati svaku krivu unutar” u izveštaju kaže za koliko. Za tačno uklapanje nacrtaj vodilice koje napuštaju ivicu ravno.

## Šta je tačno, a šta je uklopljeno

Panel kaže koje od ovoga važi i koliko površ odstupa od krivih.

- **Tačno**: kad je svaka kriva polinomska (linije, splajnovi i njihovi lanci) i vodilice seku sve profile pri istim parametrima, površ je tačno Gordonova površina tih krivih. Mreža izo-krivih izrezanih iz bikubične površi vraća tu površ, a četiri prave linije daju ravnu ili uvijenu (bilinearnu) zakrpu.
- **Uklopljeno**: lukovi, krugovi i ivice dela nisu polinomski, a krive koje se seku pri različitim parametrima moraju biti ponovo vremenski usklađene da se preseci poklope. Te krive se uklapaju kubičnim B-splajnovima unutar jedne desetmilijarditne veličine mreže (oko 0.00001 mm za deo od 100 mm). Cilindrična zakrpa napravljena od lukova i linija ostaje unutar 0.00001 mm od pravog cilindra.

Između krivih površ je ono što metod daje: profili stopljeni preko, plus vodilice stopljene preko, minus stapanje njihovih preseka. Glatka je svuda osim gde kriva ima oštar ugao. Gde dve Gordonove površi dele graničnu krivu, spajaju se ivica uz ivicu (G0), a ne tangentno.

## Kad mreža ne odgovara

| Poruka | Šta da se radi |
|---|---|
| „… se ne sastaju: prolaze 0.4 mm jedan od drugog” | Učini da taj profil i vodilica se seku, ili povećaj Toleranciju |
| „… se sastaje … 2 puta” | Vodilica sme da preseče svaki profil samo jednom: podeli krivu koja se vija, ili koristi manje profila |
| „… u drugom redosledu” ili „prelama se preko sebe” | Dve vodilice se seku (ili dva profila). Porodice moraju da idu jedna pored druge |
| „najmanje dva profila i dve vodilice” | Dodaj krive, ili postavi više skica na Profili ili Vodilice |
| „meša otvorene i zatvorene krive” | Učini sve profile otvorenim ili sve zatvorenim (isto važi za vodilice) |
| „Kraj … nije ravan, pa ne može da se zatvori” | Nacrtaj prvi i poslednji zatvoreni profil, svaki u jednoj ravni, ili ostavi Zatvori u čvrsto telo isključeno |

## Ograničenja

- Jedna B-spline strana po mreži: nema G1 ni G2 tangentnosti na susedne površi.
- Šav zatvorene mreže, na prvoj vodilici, spojen je ivica uz ivicu, ali nije tangentan.
- Sama karakteristika Lofting nema vodeće šine; umesto toga koristi se Gordonova površina zatvorena u čvrsto telo.
- Veoma vijugave krive, ili preseci neravnomerno raspoređeni duž jedne krive u odnosu na drugu, mogu zahtevati previše tačaka za uklapanje; karakteristika to tada kaže.
