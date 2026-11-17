---
title: Sastavi sklop sa spojevima
summary: Pokreni sklop od dela, ubaci kopije i druge fajlove delova, spoji ih krutim, obrtnim, kliznim, cilindričnim, ravnim, kugličnim i spojem klin-u-žlebu na ravnim površima, centriraj spojeve na osama, uredi deo na licu mesta i sačuvaj sklop.
keywords: sklop, sprezanje, spojevi, spoj, petlja, zatvorena petlja, mehanizam, veza, četvorougaona veza, kruto, obrtno, klizno, cilindrično, ravno, kuglasto, kuglični zglob, sferno, klin u žlebu, ubaci komponentu, učvršćeno, fiksno, koncentrično, poklapanje, uredi deo, u kontekstu, partcraft-asm
from: a53bbfef
---

Sklop spaja delove. U PartCraft-u, **spojevi** postavljaju delove: svaki spoj sedi na ravnoj površi svakog od dva dela i stavlja ih površ na površ. Obrtni spoj dozvoljava jednom delu da se okreće, klizni da klizi, a kruti ga drži.

## Pokreni sklop

1. Napravi deo sa čvrstim telom (prazan deo ne može u sklop: „Prvo napravi čvrsto telo, pa ga stavi u sklop.“).
2. Izaberi {{ui:Sklop}} na traci sa alatima.

Statusna traka kaže: „Sklop je pokrenut sa Part1 kao učvršćenim delom. Ubaci još delova (Dodaj kopiju, Umetni ili Uredi › Dupliraj), pa ih spoji sa Spoj.“ Levi panel sada navodi **Delove** i **Spojeve**, a traka sa alatima prikazuje alate sklopa. Alati za skicu i elemente se sakrivaju.

Prvi deo je **učvršćen**: nikad se ne pomera, a sve ostalo se postavlja u odnosu na njega.

## Ubaci delove

- {{ui:Dodaj kopiju}} ubacuje još jednu kopiju izabranog dela (ili poslednjeg). Kopije dele jedan deo: izmeni ga i svaka kopija se menja.
- {{ui:Dupliraj}} ({{key:Mod+D}}) u grupi Uredi radi isto za izabrani deo. {{key:Mod+C}} i {{key:Mod+V}} kopiraju deo i nalepe ga pored ostalih, u ovom sklopu ili drugom; {{key:Mod+Shift+V}} ga lepi na istom mestu. Vidi [Kopiranje, lepljenje i dupliranje](topic:copy-paste).
- {{ui:Umetni}} ubacuje deo iz fajla `.partcraft.json` na tvom računaru. Deo se kopira u sklop.

Novi delovi se pojavljuju 20 mm desno od svega što je već tu, i tu ostaju dok ih spoj ne postavi. Deo bez spoja može se takođe pomerati rukom: uneti brojevi ili strelice koje prevlačiš (vidi [Lista delova, razbijeni prikazi i pomeranje delova](topic:assembly-bom-explode)).

## Spoji dva dela

1. Izaberi {{ui:Spoj}} ili pritisni {{key:J}}. Desni panel kaže **Novi spoj**.
2. Klikni ravnu površ prvog dela. Ona se istakne.
3. Klikni ravnu površ drugog dela.

Drugi deo skoči tako da njegova površ naleže na površ prvog dela, okrenuta ka njoj. Spoj se pojavljuje pod **Spojevi**, na primer „Revolute1“, a desni panel prikazuje njegova podešavanja.

- Ako su obe površi nastale rotiranjem, spoj počinje kao **obrtni**; inače **kruti**. Promeni posle.
- Zakrivljene površi ne mogu da se biraju: „Ta površ je zakrivljena. Izaberi ravnu površ (da se okrećeš oko rupe ili ose rotiranja, izaberi je u spoju posle).“
- {{key:Esc}} otkazuje spoj koji si počeo (ili klikni deo na listi levo).

### Podešavanja spoja

| Podešavanje | Šta radi |
|---|---|
| **Tip** | Jedan od spojeva iz tabele ispod |
| **Ugao (°)** | Okreće drugi deo oko ose spoja (normalno na površi) |
| **Pomak (mm)** | Pomera drugi deo duž ose, dalje od površi (negativne vrednosti guraju u nju) |
| **Duž X**, **Duž Y**, **Nagib oko X**, **Nagib oko Y**, **Duž žleba**, **Smer žleba** | Ostale vrednosti, prikazane za spojeve koji ih koriste |
| **Centriraj na** (za svaku stranu) | Gde osa spoja seče površ: „Sopstveni početak površi“, osa rotiranja („Osa Revolve1“) ili osa jedne rupe („Hole1, rupa 2“) |

Svaka vrednost koju spoj dozvoljava da se menja ima klizač za prevlačenje ispod svog polja; ostale se postavljaju jednom.

| Spoj | Šta se pomera | Postavlja se jednom |
|---|---|---|
| **Kruti** | ništa | Ugao, Pomak |
| **Obrtni** | Ugao (šarka) | Pomak |
| **Klizni** | Pomak (fioka) | Ugao |
| **Cilindrični** | Ugao i Pomak (osovina u običnom ležištu) | |
| **Ravni** | Duž X, Duž Y preko površi, i Ugao (deo koji klizi po stolu) | |
| **Kuglasti** | Ugao (vrtnja) i Nagib oko X i Y, oko centra spoja (kuglasti zglob) | |
| **Klin u žlebu** | Duž žleba i Ugao (klin u pravom žlebu) | Smer žleba: ugao žleba od X površi |

X i Y površi su one prvog dela; centar spoja postavlja **Centriraj na**.

„Sopstveni početak površi“ je početak dela projektovan na površ, što često nije mesto gde želiš da se delovi poravnaju. Za okrugle delove i klinove postavi **Centriraj na** na osu rotiranja ili rupe na obe strane: ose se tada poravnavaju, kao koncentrično sprezanje.

### Primer: dve prirubnice spojene površ na površ

1. Otvori deo prirubnice (rotiranje sa kružnim obrascem rupa) i izaberi {{ui:Sklop}}.
2. Izaberi {{ui:Dodaj kopiju}}.
3. Pritisni {{key:J}}, klikni ravnu površ diska prve prirubnice (površ odakle polaze rupe za zavrtnje), pa istu površ na drugoj prirubnici. Površi su nastale rotiranjem, pa je spoj obrtni.
4. Postavi **Centriraj na** na „Osa Revolve1“ za obe strane. Prirubnice sada dele osu.
5. Unesi `22.5` u **Ugao (°)** da poravnaš rupe za zavrtnje, ili prevuci klizač.

## Zatvorene petlje: veze

Delovi spojeni u prsten (četvorougaona veza, ručica i klizač, okvir ukrućen s obe strane) čine **petlju**. PartCraft rešava svaku petlju tako da se zatvori: spojevi na njoj uzimaju vrednosti koje spajaju prsten, krećući se što manje od mesta gde su bili.

- **Postavi ili prevuci** vrednost spoja na petlji, a ostatak petlje prati. Za četvorougaonu vezu prevuci **Ugao** ručice, a spojnica i klackalica se pomeraju s njom. Vrednost koju si postavio ostaje; ostale se izračunavaju iz nje.
- Na listi, spoj na petlji koja se još može pomerati je **plav**: može se postaviti još neka vrednost. Petlja koja ne može da se pomera (okvir sa ukrštanjima) ostaje crna. Petlja koja se ne može zatvoriti je **crvena**.
- Polje **Deo** prikazuje **Petlje**: koliko ih je zatvoreno i koliko vrednosti još mogu da se pomeraju, na primer „1 zatvorena; 1 vrednost još može da se pomeri“.
- {{ui:Proveri kretanje na sudare}} prelazi spoj na petlji dok petlja prati, korak po korak (vidi [Proveri sklop na sudare i kretanje](topic:check-assembly)).

Ravna veza složena od ravnih traka mora se slagati po dubini: dva dela spojena površ na površ sa obe strane prstena moraju imati istu visinu slaganja u oba smera. Koristi **Pomak** spoja da podigneš deo gde se slaganje ne sabira, inače petlja ne može da se zatvori.

## Rad sa delovima

Klikni deo u prikazu ili na listi da ga izabereš. Desni panel prikazuje njegovo ime, koliko ima kopija, zapreminu, spojeve, i da li je učvršćen, postavljen spojevima, ili „Nije spojen: ostaje gde je postavljen“. Dugmad:

- {{ui:Uredi ovaj deo}} (ili {{ui:Uredi deo}} na traci sa alatima, ili dvostruki klik na deo na listi): otvara deo za uređivanje;
- {{ui:Umetni kopiju}};
- {{ui:Postavi ga kao učvršćen deo}};
- {{ui:Ukloni}}: uklanja i njegove spojeve, nakon pitanja.

Sklop zadržava najmanje jedan deo: „Sklop zadržava najmanje jedan deo. Zatvori ga umesto toga.“

### Uredi deo na licu mesta

1. Izaberi deo i izaberi {{ui:Uredi deo}}. Deo se otvara sa svojom istorijom; naslov kaže „Bracket (u sklopu Bracket)“.
2. Menjaj ga kao bilo koji deo.
3. Izaberi {{ui:Nazad}} na traci sa alatima. Sklop se ažurira: svaka kopija tog dela se menja, a spojevi na površima nastalim ivicama skice prate.

Vraćanje promene u sklop je jedan korak u listi za Opozovi sklopa.

## Poništavanje, čuvanje i zatvaranje

- Sklop ima sopstvenu listu za poništavanje: {{key:Mod+Z}} i {{key:Mod+Y}} rade sa spojevima, umecima i podešavanjima.
- {{ui:Sačuvaj}} ili {{key:Mod+S}} preuzima `<ime sklopa>.partcraft-asm.json`, sa svakim delom unutra. Otvori ga kasnije sa {{ui:Otvori}}.
- {{ui:Zatvori}} zatvara sklop i vraća te na deo sa kojim si počeo. Ako sklop nije sačuvan, pita: {{ui:Otkaži}}, {{ui:Odbaci sklop}} ili {{ui:Prvo sačuvaj}}.
- Da preimenuješ sklop, klikni prazan prostor da ništa nije izabrano i promeni **Ime** u desnom panelu.

## Veliki sklopovi

Sklop može da sadrži hiljade kopija nekoliko delova. Kopije jednog dela crtaju se zajedno, spoj koji okrećeš postavlja samo delove iza njega, a lista delova prikazuje prve redove sa dugmetom „Prikaži više“ ispod (izabrani deo je uvek na listi).

- Dok okrećeš ili zumiraš prikaz, sklop sa više od oko 300,000 trouglova crta se kao jedna kutija po delu, a zatim u punom obliku kratko posle zaustavljanja.
- {{ui:Pogledi}} › {{ui:Pojednostavljen prikaz}} zadržava kutije stalno. Izbor dela i spojeva i dalje koristi prave delove.
- Koliko brzo se okreće zavisi i od tvoje grafičke kartice. Brojevi koje je PartCraft izmerio nalaze se u napomenama o izdanju, uz mašinu sa koje potiču.

## Problemi sa spojevima

- Deo koji nijedan spoj ne dostiže prikazuje se kao **slobodan** i panel kaže „Bracket2 nije spojen sa učvršćenim delom, pa ostaje gde je postavljen.“
- Petlja koja se ne može zatvoriti (dužine ne dosežu, ograničenje zaustavlja spoj, površi se ne slažu po dubini): „Revolute3 zatvara petlju koja se ne može zatvoriti: odstupa za 2.000 mm. Proveri površi, pomake i ograničenja spojeva petlje.“ Njeni spojevi postaju crveni.
- Ako površ ili osa koju spoj koristi nestane posle uređivanja dela: „Površ koju ovaj spoj koristi nestala je iz Bracket.“ Ukloni spoj i napravi ga ponovo.

Sledeće: [Proveri sklop na sudare i kretanje](topic:check-assembly).
