---
title: Zaobljenje, Skošenje i Ljuska: zaobli, skosi i izdubi
summary: Odaberi ivice i dodaj zaobljenja konstantnog ili promjenjivog poluprečnika i jednaka, dvostruka ili ugaona skošenja, izdubi dio s Ljuskom odabirom površina koje treba otvoriti, promijeni koje ivice ili površine element koristi i popravi uobičajene greške.
keywords: zaobljenje, zaokruživanje, stapanje, skošenje, ljuska, izdubljivanje, debljina zida, ivice, površine, odaberi ivice, shift klik, otvorena površina, tačan kernel, mrežni kernel, nije izrađeno
from: e41c1c12
---

:::note
**U ovoj verziji** PartCraft gradi zaobljenja i skošenja mrežnim kernelom, samo na **ravnim ivicama između dvije ravne površine**: ivice kutije i ravne ivice istisnutih i izrezanih elemenata, vanjski ili unutrašnji uglovi (unutrašnji ugao dodaje materijal). Okrugle ivice, kao rubovi rupa, i poluprečnik koji se mijenja duž ivice nisu još izrađeni. Gdje se dvije zaobljene ivice sastaju u uglu, zaobljenja su pokošena (sastaju se u oštrom prelomu), a ne stopljena. **Ljuska** također radi, izgrađena mrežnim kernelom: otvara samo ravne površine, ljuske s različitim debljinama zidova još nisu izrađene, a spora je na dijelovima s mnogo okruglih površina. Vidi [Šta još nije izrađeno](topic:not-built-yet).
:::

{{ui:Zaobljenje}} zaobljuje ivice, {{ui:Skošenje}} ih kosi, a {{ui:Ljuska}} izdubljuje dio. Sve tri rade na ivicama i površinama čvrstog tijela i gradi ih mrežni kernel. Njihova zaobljenja su od faseta kao i svaka okrugla površina (**Krive** određuje koliko su fina); okrugle površine su cilindri koje možeš odabrati i izmjeriti (vidi [Mrežni kernel](topic:solid-kernels)).

## Zaobli ili skosi ivice

### Prvo odaberi ivice

1. Klikni ivicu dijela. Cijela ivica se označava, a desni panel kaže **Ivica**: njena vrsta (Ravna, Krug ili luk, Kriva), dužina i površine između kojih se nalazi.
2. Da dodaš još ivica, {{key:Shift}}+klik na njih. Svaka se označava; {{key:Shift}}+klik na označenu ivicu je uklanja. Naslov panela broji ih ("4 ivice"), a statusna traka kaže: "4 ivice odabrane. Zaobljenje ili Skošenje ih zaokružuje; Shift+klik bira još, Esc briše."
3. Odaberi {{ui:Zaobljenje}} ili {{ui:Skošenje}} na traci alata, ili ista dugmad u desnom panelu.

Element se dodaje sa svim odabranim ivicama: zaobljenje od 2 mm ili skošenje od 1 mm. Statusna traka kaže, na primjer: "Fillet1 dodan (4 ivice). Promijeni mu veličinu desno; Odaberi ivice mijenja koje."

### Ili prvo dodaj element

1. Bez odabira, odaberi {{ui:Zaobljenje}} ili {{ui:Skošenje}}.
2. PartCraft prelazi u odabir: naslov desnog panela kaže "Fillet1: odabir", dio se prikazuje kako je bio prije zaobljenja (panel to kaže), a traka alata prikazuje {{ui:Gotovo}}.
3. Klikni svaku ivicu da je dodaš; klikni je ponovo da je ukloniš. Statusna traka ih broji.
4. Odaberi {{ui:Gotovo}} (ili {{ui:Završi odabir}} u panelu), ili pritisni {{key:Esc}} ili {{key:Enter}}.

### Postavke

| Postavka | Zaobljenje | Skošenje |
|---|---|---|
| Veličina | **Poluprečnik (mm)**, podrazumijevano 2 | **Udaljenost (mm)** nazad od ivice na obje površine, podrazumijevano 1 |
| **Ivice** | Koliko ih je | Koliko ih je |

Spisak ispod imenuje svaku ivicu po dvije površine koje spaja, kao "Ivica 1: Extrude1 krajnja površina × Extrude1 bok". **Ukloni** briše jednu. {{ui:Odaberi ivice}} vraća na odabir. Dvostruki klik na element u historiji radi isto.

Ivice se pamte po dvije površine koje spajaju, pa ostaju na pravoj ivici kad promijeniš dimenziju ranije u historiji.

### Promjenjivi poluprečnik i vrste skošenja

- **Promjenjivi poluprečnik** (zaobljenje): još nije izrađeno u ovoj verziji ("Zaobljenje čiji se poluprečnik mijenja duž ivice: još nije izrađeno (treba tačan kernel). Daj mu jedan poluprečnik."). Uz tačan kernel: označi ga i postavi **Krajnji poluprečnik (mm)**. Poluprečnik se linearno mijenja od **Poluprečnika** na jednom kraju svake ivice do **Krajnjeg poluprečnika** na drugom; **Zamijeni krajeve** ga okreće.
- **Vrsta** (skošenje): **Jednaka udaljenost**, **Dvije udaljenosti** (**Druga udaljenost** na drugoj površini) ili **Udaljenost i ugao** (udaljenost na jednoj površini, kosina pod **Ugao (°)** prema njoj). **Zamijeni strane** stavlja prvu udaljenost na drugu površinu.

## Izdubi dio

1. Klikni ravnu površinu koja ostaje otvorena, na primjer vrh kutije. Ili {{key:Shift}}+klik na više površina.
2. Odaberi {{ui:Ljuska}} na traci alata, ili {{ui:Ljuska, otvara ovu površinu}} u panelu površine.

Dio postaje zid od 2 mm s odabranim površinama otvorenim. Postavke:

| Postavka | Šta radi | Podrazumijevano |
|---|---|---|
| **Zid (mm)** | Debljina zida | 2 |
| **Zidovi rastu prema van (površine ostaju unutra)** | Označeno: zidovi se dodaju van, pa unutrašnjost zadržava veličinu dijela | Isključeno: zidovi idu unutra, a vani zadržava veličinu |
| **Otvorene površine** | Koliko površina se uklanja | |

Unutra, zidovi su tačno debljine zida: vanjski uglovi ostaju oštri, unutrašnji uglovi ispadnu zaobljeni (poluprečnik = zid), a rupa kroz dio dobija cijev zida oko sebe. Prema van, zidovi se dodaju izvan originalne površine, koja postaje šupljina, a vanjske ivice ispadnu zaobljene. Unutrašnje površine nose naziv po površinama od kojih su pomjerene, pa ih možeš odabrati.

Samo ravne površine mogu se otvoriti: ako odabereš zakrivljenu, kaže "Ljuska: u ovoj verziji otvara samo ravne površine (gradi je mrežni kernel)." Ljuska je spora na dijelovima s mnogo okruglih površina (nekoliko sekundi po hiljadu trouglova): koristi grublju postavku **Krive** dok projektuješ.

{{ui:Odaberi površi}} mijenja koje su površine otvorene, na isti način kao odabir ivica. Spisak imenuje svaku, kao "Površina 1: Extrude1 krajnja površina". Ljuska bez otvorenih površina nije dozvoljena: "Odaberi površine za uklanjanje (otvorene), zatim izdubi."

## Redoslijed je bitan

Elementi se grade odozgo nadolje. Zaobljenje prije ljuske se izdubljuje s dijelom, pa i unutrašnjost dobija zaobljene uglove. Zaobljenje poslije ljuske zaobljuje samo ivice koje odabereš. Elemente pomjeraj pomoću {{ui:Pomjeri gore}} i {{ui:Pomjeri dolje}} (vidi [Promijeni dio kroz njegovu historiju](topic:edit-history)).

Nizovi i zrcaljenja ne mogu kopirati zaobljenje, skošenje ili ljusku: "Fillet1 mijenja ivice ili zidove tijela; ne može se kopirati. Kopiraj elemente koji prave čvrsta tijela (istiskivanja, rotacije, rupe, uvoz)." Prvo napravi niz rupa ili izreza, zatim zaobli ivice svih kopija jednim zaobljenjem.

## Kad ne uspije

| Poruka | Šta uraditi |
|---|---|
| "Zaobljenje od 5 mm ne staje ovdje (preveliko je za površinu uz jednu od ivica, ili se ivice sastaju u uglu koji kernel ne može stopiti)." | Koristi manji poluprečnik ili zaobli manje ivica odjednom (više elemenata zaobljenja, najmanji posljednji) |
| "Ivica koju zaobljuje nestala je: ivica između Extrude1 i Cut2." | Ranija promjena je uklonila tu ivicu. Odaberi {{ui:Odaberi ivice}}, ukloni crvenu ivicu i odaberi novu |
| "Ljuska nije mogla biti napravljena s ovom debljinom (…)." | Zid je deblji od uske dionice modela ili od poluprečnika zaobljenja. Napravi zid tanji ili zaobljenja veća od zida |
| "Ta površina nema naziv koji historija može pratiti; odaberi drugu." | Odaberi površinu koju je napravio element (većina površina jeste) |
| "Zaobljenje: u ovoj verziji samo ravne ivice između dvije ravne površine (mrežni kernel ih gradi). Zaobli ili skosi zakrivljene ivice u skici." (također za Skošenje) | Odabrana ivica je okrugla, kao rub rupe, ili leži na zakrivljenoj površini. Ukloni je pomoću {{ui:Odaberi ivice}} i zaobli ili skosi taj ugao u skici |
| "Zaobljenje čiji se poluprečnik mijenja duž ivice: još nije izrađeno (treba tačan kernel). Daj mu jedan poluprečnik." | Isključi **Promjenjivi poluprečnik** |
| "Zaobljenje mrežnim kernelom: gdje se zaobljene ivice sastaju, one su pokošene, a ne stopljene." (⚠ u historiji) | Upozorenje, a ne greška: dio je izgrađen. Odabrane ivice se sastaju u uglu, a zaobljenja se tu sastaju u oštrom prelomu. Zaobli manje ivica ili prihvati prelom |
| "Ljuska: u ovoj verziji otvara samo ravne površine (gradi je mrežni kernel)." | Otvorena površina je zakrivljena. Odaberi {{ui:Odaberi površi}} i ukloni je; otvaraj samo ravne površine |

## Ograničenja

U ovoj verziji zaobljenja i skošenja rade samo na ravnim ivicama između dvije ravne površine, s jednim poluprečnikom, a zaobljenja koja se sastaju u uglu su pokošena. Ljuske otvaraju samo ravne površine. Uz tačan kernel, promjenjivo zaobljenje se linearno mijenja duž svake ivice (jedan zakon po elementu; nema poluprečnika zadanih u tačkama duž nje). Zaobljenja površina, puna okrugla zaobljenja i ljuske s različitim debljinama zidova još nisu izrađeni.
