---
title: Zaobljavanje, skošenje i šupljina: Zaobljenje, Skošenje i Ljuska
summary: Odaberite bridove i dodajte zaobljenja ili skošenja konstantnog ili promjenjivog polumjera te jednaka, dvodistancna ili kutna skošenja, izdubite dio alatom Ljuska odabirom ploha za otvaranje, promijenite koje bridove ili plohe značajka koristi i riješite uobičajene greške.
keywords: zaobljenje, zaobljavanje, ljuska, skošenje, šupljina, debljina zida, bridovi, plohe, odabir bridova, shift klik, otvorena ploha, egzaktna jezgra, mrežna jezgra, nije izrađeno
from: e41c1c12
---

:::note
**U ovoj verziji** PartCraft gradi zaobljenja i skošenja mrežnom jezgrom, i to samo na **ravnim bridovima između dviju ravnih ploha**: rubovi kutija te ravni bridovi izvlačenja i izreza, vanjski ili unutarnji kutovi (unutarnji kut dobiva dodani materijal). Okrugli bridovi, kao rubovi rupa, i polumjer koji se mijenja duž brida još nisu izrađeni. Gdje se dva zaobljena brida susreću u kutu, zaobljenja su pod kutom (spojena u oštar greben), a ne stopljena. **Ljuska** također radi, koju gradi mrežna jezgra: otvara samo ravne plohe, ljuske različitih debljina zidova još nisu izrađene, a spora je na dijelovima s mnogo okruglih ploha. Vidi [Što još nije izrađeno](topic:not-built-yet).
:::

{{ui:Zaobljenje}} zaobljuje bridove, {{ui:Skošenje}} ih kosi, a {{ui:Ljuska}} izdubljuje dio. Sve tri rade na bridovima i plohama tijela, a gradi ih mrežna jezgra. Njihova zaobljenja su facetirana kao i svaka okrugla ploha (**Krivulje** određuje koliko su fina); okrugle plohe su cilindri koje možete odabrati i izmjeriti (vidi [Mrežna jezgra](topic:solid-kernels)).

## Zaobljenje ili skošenje bridova

### Prvo odaberite bridove

1. Kliknite brid dijela. Cijeli brid se označi, a desno okno kaže **Brid**: njegovu vrstu (Ravan, Kružnica ili luk, Krivulja), duljinu i plohe između kojih leži.
2. Za dodavanje bridova, {{key:Shift}}+klik na njih. Svaki je označen; {{key:Shift}}+klik na označeni brid ga miče. Naslov panela ih broji („4 brida“), a statusna traka kaže: „4 brida odabrana. Zaobljenje ili Skošenje ih obrađuje; Shift+klik odabire više, Esc briše.“
3. Odaberite {{ui:Zaobljenje}} ili {{ui:Skošenje}} na alatnoj traci ili iste gumbe u desnom oknu.

Značajka se dodaje sa svim odabranim bridovima: zaobljenje od 2 mm ili skošenje od 1 mm. Statusna traka npr. kaže: „Fillet1 dodano (4 brida). Promijenite veličinu desno; Odaberi bridove mijenja koje.“

### Ili prvo dodajte značajku

1. Bez odabira, odaberite {{ui:Zaobljenje}} ili {{ui:Skošenje}}.
2. PartCraft prelazi u odabir: naslov desnog panela kaže „Fillet1: odabir“, dio se prikazuje kakav je bio prije zaobljenja (panel to kaže), a alatna traka prikazuje {{ui:Gotovo}}.
3. Kliknite svaki brid da ga dodate; kliknite ponovno da ga maknete. Statusna traka ih broji.
4. Odaberite {{ui:Gotovo}} (ili {{ui:Završi odabir}} u panelu), ili pritisnite {{key:Esc}} ili {{key:Enter}}.

### Postavke

| Postavka | Zaobljenje | Skošenje |
|---|---|---|
| Veličina | **Radijus (mm)**, zadano 2 | **Udaljenost (mm)** od brida na obje plohe, zadano 1 |
| **Bridovi** | Koliko ih je | Koliko ih je |

Popis ispod imenuje svaki brid po dvjema plohama koje spaja, kao „Brid 1: Extrude1 krajnja ploha × Extrude1 bočna“. **Ukloni** miče jedan. {{ui:Odaberi bridove}} vraća na odabir. Dvostruki klik na značajku u povijesti radi isto.

Bridovi se pamte po dvjema plohama koje spajaju, pa ostaju na pravom bridu kad promijenite dimenziju ranije u povijesti.

### Promjenjiva zaobljenja i vrste skošenja

- **Promjenjivi radijus** (zaobljenje): još nije izrađeno u ovoj verziji („Zaobljenje čiji se radijus mijenja duž brida: još nije izrađeno (treba egzaktna jezgra). Dajte mu jedan radijus.“). S egzaktnom jezgrom: označite i postavite **Krajnji radijus (mm)**. Radijus se linearno mijenja od **Radijusa** na jednom kraju svakog brida do **Krajnjeg radijusa** na drugom; **Zamijeni krajeve** ga okrene.
- **Vrsta** (skošenje): **Jednaka udaljenost**, **Dvije udaljenosti** (**Druga udaljenost** na drugoj plohi) ili **Udaljenost i kut** (udaljenost na jednoj plohi, skošenje pod **Kutom (°)** prema toj plohi). **Zamijeni strane** stavlja prvu udaljenost na drugu plohu.

## Ljuska dijela

1. Kliknite ravnu plohu koja ostaje otvorena, npr. vrh kutije. Ili {{key:Shift}}+klik na više ploha.
2. Odaberite {{ui:Ljuska}} na alatnoj traci ili {{ui:Ljuska, otvara ovu plohu}} u panelu plohe.

Dio postaje zid od 2 mm s odabranim otvorenim plohama. Postavke:

| Postavka | Što radi | Zadano |
|---|---|---|
| **Zid (mm)** | Debljina zida | 2 |
| **Zidovi rastu prema van (plohe ostaju unutra)** | Označeno: zidovi se dodaju vani, pa unutrašnjost zadržava veličinu dijela | Isključeno: zidovi idu unutra, a vanjština zadržava veličinu |
| **Otvorene plohe** | Koliko ploha se uklanja | |

Unutra, zidovi su točno debljine zida: vanjski kutovi ostaju oštri, unutarnji kutovi izlaze zaobljeni (polumjer = zid), a rupa kroz dio dobije cijev zida oko sebe. Vani, zidovi se dodaju izvan izvorne površine, koja postaje šupljina, a vanjski bridovi izlaze zaobljeni. Unutarnje plohe nazvane su po plohama čiji se pomak prati, pa ih možete odabrati.

Samo ravne plohe mogu se otvoriti: odabir zakrivljene kaže: „Ljuska: u ovoj verziji otvara samo ravne plohe (gradi je mrežna jezgra).“ Ljuska je spora na dijelovima s mnogo okruglih ploha (nekoliko sekundi po tisuću trokuta): koristite grublje **Krivulje** dok dizajnirate.

{{ui:Odaberi plohe}} mijenja koje su plohe otvorene, na isti način kao odabir bridova. Popis imenuje svaku, npr. „Ploha 1: Extrude1 krajnja ploha“. Ljuska bez otvorenih ploha nije dopuštena: „Odaberite plohe za uklanjanje (otvorene), zatim izdubite.“

## Redoslijed je važan

Značajke se grade odozgo prema dolje. Zaobljenje prije ljuske izdubljuje se zajedno s dijelom, pa i unutrašnjost dobije zaobljene kutove. Zaobljenje nakon ljuske zaobljuje samo bridove koje odaberete. Značajke pomičite s {{ui:Pomakni gore}} i {{ui:Pomakni dolje}} (vidi [Promijenite dio kroz njegovu povijest](topic:edit-history)).

Uzorci i zrcaljenja ne mogu kopirati zaobljenje, skošenje ili ljusku: „Fillet1 mijenja bridove ili zidove tijela; ne može se kopirati. Kopirajte značajke koje stvaraju tijela (izvlačenja, rotacije, rupe, uvozi).“ Prvo uzorkujte rupe ili izreze, zatim zaobljujte sve bridove kopija jednim zaobljenjem.

## Kad ne uspije

| Poruka | Što učiniti |
|---|---|
| „Zaobljenje od 5 mm ne staje ovdje (preveliko je za plohu uz jedan od bridova ili se bridovi sastaju u kutu koji jezgra ne može stopiti).“ | Upotrijebite manji polumjer ili zaobljujte manje bridova odjednom (više značajki zaobljenja, najmanja zadnja) |
| „Brid koji se zaobljuje više ne postoji: brid između Extrude1 i Cut2.“ | Ranija promjena je uklonila taj brid. Odaberite {{ui:Odaberi bridove}}, uklonite crveni brid i odaberite novi |
| „Ljuska se ne može napraviti s ovom debljinom (…).“ | Zid je deblji od uske točke modela ili od polumjera zaobljenja. Napravite zid tanji ili zaobljenja veća od zida |
| „Ta ploha nema naziv koji povijest može pratiti; odaberite drugu.“ | Odaberite plohu koju je napravila značajka (većina ploha je) |
| „Zaobljenje: u ovoj verziji samo ravni bridovi između dviju ravnih ploha (mrežna jezgra ih gradi). Okrugle ili zakrivljene bridove zaobljite ili skosite u skici.“ (također Skošenje) | Odabrani brid je okrugao, kao rub rupe, ili leži na zakrivljenoj plohi. Uklonite ga s {{ui:Odaberi bridove}} i zaobljite ili skosite taj kut u skici |
| „Zaobljenje čiji se radijus mijenja duž brida: još nije izrađeno (treba egzaktna jezgra). Dajte mu jedan radijus.“ | Isključite **Promjenjivi radijus** |
| „Zaobljenje mrežnom jezgrom: gdje se zaobljeni bridovi sastaju, spojeni su pod kutom, a ne stopljeni.“ (⚠ u povijesti) | Upozorenje, ne greška: dio je izgrađen. Odabrani bridovi se sastaju u kutu i zaobljenja se tamo spajaju u oštar greben. Zaobljujte manje bridova ili prihvatite greben |
| „Ljuska: u ovoj verziji otvara samo ravne plohe (gradi je mrežna jezgra).“ | Otvorena ploha je zakrivljena. {{ui:Odaberi plohe}} i uklonite je; otvarajte samo ravne plohe |

## Ograničenja

U ovoj verziji zaobljenja i skošenja rade samo na ravnim bridovima između dviju ravnih ploha, s jednim polumjerom, a zaobljenja koja se sastaju u kutu spojena su pod kutom. Ljuske otvaraju samo ravne plohe. S egzaktnom jezgrom promjenjivo zaobljenje se linearno mijenja duž svakog brida (jedan zakon po značajki; bez polumjera postavljenih u točkama duž njega). Zaobljenja ploha, puna okrugla zaobljenja i ljuske različitih debljina zidova još nisu izrađeni.
