---
title: Zaobljenje, obaranje ivice i ljuska
summary: Izaberi ivice i dodaj zaobljenja konstantnog ili promenljivog poluprečnika i obaranja jednake, dve udaljenosti ili udaljenost i ugao; napravi šupljinu sa Ljuskom biranjem površi za otvaranje, promeni koje ivice ili površi element koristi i popravi uobičajene greške.
keywords: zaobljenje, zaokruživanje, mešanje, obaranje ivice, kosina, ljuska, šupljina, debljina zida, ivice, površi, izaberi ivice, shift klik, otvorena površ, tačno jezgro, mrežno jezgro, nije izgrađeno
from: e41c1c12
---

:::note
**U ovoj verziji** PartCraft gradi zaobljenja i obaranja mrežnim jezgrom, samo na **pravim ivicama između dve ravne površi**: ivice kutije i prave ivice izvlačenja i useka, spoljašnji ili unutrašnji uglovi (unutrašnji ugao dobija dodat materijal). Okrugle ivice, kao obod rupe, i poluprečnik koji se menja duž ivice još nisu izgrađeni. Gde se dve zaobljene ivice spajaju u uglu, zaobljenja se seku pod uglom (sastaju se u oštar prelom), a ne stapaju. **Ljuska** takođe radi, a gradi je mrežno jezgro: otvara samo ravne površi, ljuske različitih debljina zidova još nisu izgrađene, a spora je na delovima sa mnogo okruglih površi. Pogledaj [Šta još nije izgrađeno](topic:not-built-yet).
:::

{{ui:Zaobljenje}} zaobljuje ivice, {{ui:Obaranje ivice}} ih kosi, a {{ui:Ljuska}} pravi šupljinu u delu. Sva tri rade na ivicama i površima tela, a grade ih mrežno jezgro. Njihova zaobljenja su fasetirana kao svaka okrugla površ (**Krivine** određuje koliko su fina); okrugle površi su cilindri koje možeš izabrati i izmeriti (pogledaj [Mrežno jezgro](topic:solid-kernels)).

## Zaobljenje ili obaranje ivica

### Prvo izaberi ivice

1. Klikni ivicu dela. Cela ivica se označava, a desni panel kaže **Ivica**: njenu vrstu (Prava, Kružnica ili luk, Kriva), dužinu i površi između kojih leži.
2. Da dodaš još ivica, {{key:Shift}}+klik na njih. Svaka je označena; {{key:Shift}}+klik na označenu ivicu je uklanja. Naslov panela ih broji („4 ivice“), a statusna traka kaže: „4 ivice izabrane. Zaobljenje ili Obaranje ivice ih zaokružuje; Shift+klik bira još, Esc briše.“
3. Izaberi {{ui:Zaobljenje}} ili {{ui:Obaranje ivice}} na traci sa alatkama, ili ista dugmad u desnom panelu.

Element se dodaje sa svim izabranim ivicama: zaobljenje od 2 mm ili obaranje od 1 mm. Statusna traka kaže, na primer: „Fillet1 dodat (4 ivice). Promeni mu veličinu desno; Izaberi ivice menja koje.“

### Ili prvo dodaj element

1. Bez izabranih ivica, izaberi {{ui:Zaobljenje}} ili {{ui:Obaranje ivice}}.
2. PartCraft ulazi u biranje: naslov desnog panela kaže „Fillet1: biranje“, deo se prikazuje kao što je bio pre zaobljenja (panel to kaže), a traka sa alatkama prikazuje {{ui:Gotovo}}.
3. Klikni svaku ivicu da je dodaš; klikni je ponovo da je ukloniš. Statusna traka ih broji.
4. Izaberi {{ui:Gotovo}} (ili {{ui:Završi izbor}} u panelu), ili pritisni {{key:Esc}} ili {{key:Enter}}.

### Podešavanja

| Podešavanje | Zaobljenje | Obaranje ivice |
|---|---|---|
| Veličina | **Poluprečnik (mm)**, podrazumevano 2 | **Udaljenost (mm)** od ivice na obe površi, podrazumevano 1 |
| **Ivice** | Koliko | Koliko |

Spisak ispod imenuje svaku ivicu po dve površi koje spaja, kao „Ivica 1: Extrude1 krajnja površ × Extrude1 bočna“. **Ukloni** briše jednu. {{ui:Izaberi ivice}} vraća na biranje. Dvostruki klik na element u istoriji radi isto.

Ivice se pamte po dve površi koje spajaju, pa ostaju na pravoj ivici kada promeniš dimenziju ranije u istoriji.

### Promenljiva zaobljenja i tipovi obaranja

- **Promenljiv poluprečnik** (zaobljenje): još nije izgrađen u ovoj verziji („Zaobljenje čiji se poluprečnik menja duž ivice: još nije izgrađeno (potrebno je tačno jezgro). Daj mu jedan poluprečnik.“). Uz tačno jezgro: označi ga i postavi **Krajnji poluprečnik (mm)**. Poluprečnik se linearno menja od **Poluprečnika** na jednom kraju svake ivice do **Krajnjeg poluprečnika** na drugom; **Zameni krajeve** to okreće.
- **Tip** (obaranje): **Jednaka udaljenost**, **Dve udaljenosti** (**Druga udaljenost** na drugoj površi) ili **Udaljenost i ugao** (udaljenost na jednoj površi, kosina pod **Ugao (°)** prema toj površi). **Okreni strane** stavlja prvu udaljenost na drugu površ.

## Napravi ljusku od dela

1. Klikni ravnu površ koja ostaje otvorena, na primer vrh kutije. Ili {{key:Shift}}+klik više površi.
2. Izaberi {{ui:Ljuska}} na traci sa alatkama, ili {{ui:Ljuska, otvara ovu površ}} u panelu površi.

Deo postaje zid od 2 mm sa izabranim površima otvorenim. Podešavanja:

| Podešavanje | Šta radi | Podrazumevano |
|---|---|---|
| **Zid (mm)** | Debljina zida | 2 |
| **Zidovi rastu napolje (površi ostaju unutra)** | Označeno: zidovi se dodaju spolja, pa unutrašnjost zadržava veličinu dela | Isključeno: zidovi idu unutra, a spoljašnjost zadržava veličinu |
| **Otvorene površi** | Koliko površi se uklanja | |

Unutra, zidovi su tačno debljine zida: spoljašnji uglovi ostaju oštri, unutrašnji uglovi ispadaju zaobljeni (poluprečnik = zid), a rupa kroz deo dobija cev zida oko sebe. Spolja, zidovi se dodaju van prvobitne površi, koja postaje šupljina, a spoljašnje ivice ispadaju zaobljene. Unutrašnje površi su nazvane po površima čiji su pomak, pa ih možeš izabrati.

Samo ravne površi mogu da se otvore: izbor zakrivljene javlja: „Ljuska: u ovoj verziji otvara samo ravne površi (gradi je mrežno jezgro).“ Ljuska je spora na delovima sa mnogo okruglih površi (nekoliko sekundi po hiljadu trouglova): koristi grublje podešavanje **Krivine** dok projektuješ.

{{ui:Izaberi površine}} menja koje su površi otvorene, na isti način kao biranje ivica. Spisak imenuje svaku, na primer „Površ 1: Extrude1 krajnja površ“. Ljuska bez otvorenih površi nije dozvoljena: „Izaberi površi koje treba ukloniti (otvoriti), pa zatim ljuska.“

## Redosled je važan

Elementi se grade odozgo nadole. Zaobljenje pre ljuske se ljuska zajedno sa delom, pa i unutrašnjost dobija zaobljene uglove. Zaobljenje posle ljuske zaobljuje samo ivice koje izabereš. Pomeri elemente sa {{ui:Pomeri gore}} i {{ui:Pomeri dole}} (pogledaj [Promeni deo kroz njegovu istoriju](topic:edit-history)).

Nizovi i ogledala ne mogu kopirati zaobljenje, obaranje ili ljusku: „Fillet1 menja ivice ili zidove tela; ne može da se kopira. Kopiraj elemente koji prave čvrsta tela (izvlačenja, rotiranja, rupe, uvoz).“ Prvo napravi niz rupa ili useka, pa zaobljenjem zaobli sve ivice kopija u jednom zaobljenju.

## Kada ne uspe

| Poruka | Šta da uradiš |
|---|---|
| „Zaobljenje od 5 mm ne staje ovde (prevelik je za površ pored jedne od ivica, ili se ivice sastaju u uglu koji jezgro ne može da stopi).“ | Koristi manji poluprečnik, ili zaobli manje ivica odjednom (više elemenata zaobljenja, najmanji poslednji) |
| „Ivica koju zaokružuje nestala je: ivica između Extrude1 i Cut2.“ | Ranija izmena je uklonila tu ivicu. Izaberi {{ui:Izaberi ivice}}, ukloni crvenu ivicu i izaberi novu |
| „Ljuska ne može da se napravi sa ovom debljinom (…).“ | Zid je deblji od uskog dela modela, ili od poluprečnika zaobljenja. Napravi zid tanji, ili zaobljenja veća od zida |
| „Ta površ nema ime koje istorija može da prati; izaberi drugu.“ | Izaberi površ koju je napravio element (većina površi jeste) |
| „Zaobljenje: u ovoj verziji samo prave ivice između dve ravne površi (gradi ih mrežno jezgro). Zaokruži ili zakosi krive ivice u skici.“ (takođe Obaranje ivice) | Izabrana ivica je okrugla, kao obod rupe, ili leži na zakrivljenoj površi. Ukloni je sa {{ui:Izaberi ivice}}, pa zaokruži ili zakosi taj ugao u skici |
| „Zaobljenje čiji se poluprečnik menja duž ivice: još nije izgrađeno (potrebno je tačno jezgro). Daj mu jedan poluprečnik.“ | Isključi **Promenljiv poluprečnik** |
| „Zaobljenje mrežnim jezgrom: gde se zaobljene ivice spajaju, one se seku pod uglom, a ne stapaju.“ (⚠ u istoriji) | Upozorenje, ne greška: deo je izgrađen. Izabrane ivice se spajaju u uglu, a zaobljenja se tamo seku u oštar prelom. Zaobli manje ivica, ili prihvati prelom |
| „Ljuska: u ovoj verziji otvara samo ravne površi (gradi je mrežno jezgro).“ | Otvorena površ je zakrivljena. Izaberi {{ui:Izaberi površine}} i ukloni je; otvaraj samo ravne površi |

## Ograničenja

U ovoj verziji zaobljenja i obaranja rade samo na pravim ivicama između dve ravne površi, sa jednim poluprečnikom, a zaobljenja koja se sastaju u uglu seku se pod uglom. Ljuske otvaraju samo ravne površi. Uz tačno jezgro, promenljivo zaobljenje se linearno menja duž svake ivice (jedan zakon po elementu; nema poluprečnika postavljenih u tačkama duž nje). Zaobljenja površi, puna okrugla zaobljenja i ljuske sa različitim debljinama zidova još nisu izgrađene.
