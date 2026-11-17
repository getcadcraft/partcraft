---
title: Sastavite sklop sa spojevima
summary: Pokrenite sklop iz dijela, umetnite kopije i druge datoteke dijelova, spojite ih krutim, rotacionim, kliznim, cilindričnim, ravninskim, kugličnim i spojevima klin u utoru na ravnim površinama, centrirajte spojeve na osama, uređujte dio na mjestu i spasite sklop.
keywords: sklop, spoj, spojevi, zatvorena petlja, mehanizam, veza, četverozglobna veza, krut, rotacioni, klizni, cilindrični, ravninski, kuglični, klin u utoru, umetni komponentu, učvršćen, fiksiran, koncentričan, poklapanje, uredi dio, u kontekstu, partcraft-asm
from: a53bbfef
---

Sklop spaja dijelove. U PartCraft-u, **spojevi** postavljaju dijelove: svaki spoj sjedi na ravnoj površini svakog od dva dijela i dovodi ih površina na površinu. Rotacioni spoj omogućava jednom dijelu da se okreće, klizni da klizi, a kruti ga drži.

## Pokretanje sklopa

1. Napravite dio sa čvrstim tijelom (prazan dio ne može ući u sklop: "Prvo izradite čvrsto tijelo, pa ga stavite u sklop.").
2. Izaberite {{ui:Sklop}} na alatnoj traci.

Statusna traka kaže: "Sklop je pokrenut sa Part1 kao učvršćenim dijelom. Umetnite još dijelova (Dodaj kopiju, Umetni ili Uredi › Dupliciraj), zatim ih spojite." Lijevo se sada navode **Dijelovi** i **Spojevi**, a alatna traka prikazuje alate sklopa. Alati za skicu i značajke se sakrivaju.

Prvi dio je **učvršćen**: nikad se ne pomjera, a sve ostalo se postavlja u odnosu na njega.

## Umetanje dijelova

- {{ui:Dodaj kopiju}} umeće još jednu kopiju izabranog dijela (ili zadnjeg). Kopije dijele jedan dio: uredite ga i svaka kopija se mijenja.
- {{ui:Dupliciraj}} ({{key:Mod+D}}) u grupi Uredi radi isto za izabrani dio. {{key:Mod+C}} i {{key:Mod+V}} kopiraju dio i zalijepe ga pored ostalih, u ovom ili drugom sklopu; {{key:Mod+Shift+V}} ga zalijepi na isto mjesto. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).
- {{ui:Umetni}} umeće dio iz `.partcraft.json` datoteke na vašem računaru. Dio se kopira u sklop.

Novi dijelovi se pojavljuju 20 mm desno od svega što već postoji i ostaju tu dok ih spoj ne postavi. Dio bez spoja može se pomjeriti i rukom: upisanim vrijednostima ili strelicama koje povlačite (vidi [Lista dijelova, rastavljeni prikazi i pomjeranje dijelova](topic:assembly-bom-explode)).

## Spajanje dva dijela

1. Izaberite {{ui:Spoj}} ili pritisnite {{key:J}}. Desni panel kaže **Novi spoj**.
2. Kliknite ravnu površinu na prvom dijelu. Ona se označava.
3. Kliknite ravnu površinu na drugom dijelu.

Drugi dio skoči tako da njegova površina naliježe na površinu prvog dijela, okrenuta prema njoj. Spoj se pojavljuje pod **Spojevi**, npr. "Revolute1", a desni panel prikazuje njegove postavke.

- Ako su obje površine napravljene rotacijama, spoj počinje kao **rotacioni**; inače **kruti**. Promijenite ga poslije.
- Zakrivljene površine ne mogu se izabrati: "Ta površina je zakrivljena. Izaberite ravnu površinu (da se okrećete oko rupe ili ose rotacije, izaberite je kasnije u postavkama spoja)."
- {{key:Esc}} otkazuje započeti spoj (ili kliknite dio na listi lijevo).

### Postavke spoja

| Postavka | Šta radi |
|---|---|
| **Tip** | Jedan od spojeva u tabeli ispod |
| **Ugao (°)** | Okreće drugi dio oko ose spoja (okomito na površine) |
| **Pomak (mm)** | Pomjera drugi dio duž ose, dalje od površine (negativne vrijednosti guraju u nju) |
| **Duž X**, **Duž Y**, **Nagib oko X**, **Nagib oko Y**, **Duž utora**, **Smjer utora** | Ostale vrijednosti, prikazane za spojeve koji ih koriste |
| **Centriraj na** (za svaku stranu) | Gdje os spoja siječe površinu: "Vlastito ishodište površine", os rotacije ("Axis of Revolve1") ili osa jedne rupe ("Hole1, hole 2") |

Svaka vrijednost koju spoj dozvoljava da se pomjera ima klizač za povlačenje ispod svog polja. Ostale se postavljaju jednom.

| Spoj | Šta se pomjera | Postavlja se jednom |
|---|---|---|
| **Kruti** | ništa | Ugao, Pomak |
| **Rotacioni** | Ugao (šarka) | Pomak |
| **Klizni** | Pomak (ladica) | Ugao |
| **Cilindrični** | Ugao i Pomak (osovina u običnom ležaju) | |
| **Ravninski** | Duž X, Duž Y preko površine i Ugao (dio koji klizi po stolu) | |
| **Kuglični** | Ugao (rotacija) i Nagib oko X i Y, oko centra spoja (kuglični zglob) | |
| **Klin u utoru** | Duž utora i Ugao (klin u ravnom utoru) | Smjer utora: ugao utora od X površine |

X i Y površine su one prvog dijela. Centar spoja postavlja **Centriraj na**.

"Vlastito ishodište površine" je ishodište dijela projicirano na površinu, što često nije mjesto gdje želite da se dijelovi poravnaju. Za okrugle dijelove i klinove, postavite **Centriraj na** na os rotacije ili rupe na obje strane: osi se tada poravnavaju, kao koncentrični spoj.

### Primjer: dvije prirubnice spojene čelo uz čelo

1. Otvorite dio prirubnice (rotacija sa kružnim uzorkom rupa) i izaberite {{ui:Sklop}}.
2. Izaberite {{ui:Dodaj kopiju}}.
3. Pritisnite {{key:J}}, kliknite ravnu površinu diska prve prirubnice (površinu odakle počinju rupe za vijke), pa istu površinu na drugoj prirubnici. Površine su napravljene rotacijom, pa je spoj rotacioni.
4. Postavite **Centriraj na** na "Axis of Revolve1" za obje strane. Prirubnice sada dijele osu.
5. Upišite `22.5` u **Ugao (°)** da poravnate rupe za vijke, ili povucite klizač.

## Zatvorene petlje: mehanizmi

Dijelovi spojeni u prsten (četverozglobna veza, ručica i klizač, okvir ukrućen s obje strane) čine **petlju**. PartCraft rješava svaku petlju tako da se zatvori: spojevi na njoj uzimaju vrijednosti koje spajaju prsten, pomjerajući se što je manje moguće od mjesta gdje su bili.

- **Postavite ili povucite** vrijednost spoja na petlji, i ostatak petlje slijedi. Za četverozglobnu vezu povucite **Ugao** ručice, pa se spojnica i ljuljaška pomjeraju s njom. Vrijednost koju postavite ostaje; ostale se računaju iz nje.
- Na listi, spoj na petlji koja se još može pomjerati je **plav**: može se postaviti još neka vrijednost. Petlja koja se ne može pomjeriti (ukrućen okvir) ostaje crna. Petlja koja se ne može zatvoriti je **crvena**.
- Polje **Dio** prikazuje **Petlje**: koliko ih je zatvoreno i koliko vrijednosti se još može pomjerati, npr. "1 zatvorena; 1 vrijednost se još može pomjeriti".
- {{ui:Provjeri kretanje na sudare}} prolazi kroz spoj na petlji, sa petljom koja ga prati, korak po korak (vidi [Provjerite sklop na sudare i kretanje](topic:check-assembly)).

Ravni mehanizam slagan od ravnih traka mora se slagati po dubini: dva dijela spojena čelo uz čelo sa obje strane prstena zahtijevaju istu visinu slaganja u oba smjera. Koristite **Pomak** spoja da podignete dio tamo gdje se slaganje ne slaže, inače se petlja ne može zatvoriti.

## Rad sa dijelovima

Kliknite dio u prikazu ili na listi da ga izaberete. Desni panel prikazuje njegov naziv, koliko ima kopija, zapreminu, spojeve, i da li je učvršćen, postavljen spojevima, ili "Nije spojen: ostaje gdje je postavljen". Dugmad:

- {{ui:Uredi ovaj dio}} (ili {{ui:Uredi dio}} na alatnoj traci, ili dvostruki klik na dio na listi): otvara dio za uređivanje;
- {{ui:Umetni kopiju}};
- {{ui:Postavi kao učvršćeni dio}};
- {{ui:Ukloni}}: uklanja i njegove spojeve, nakon potvrde.

Sklop mora imati bar jedan dio: "Sklop mora imati bar jedan dio. Zatvorite ga umjesto toga."

### Uređivanje dijela na mjestu

1. Izaberite dio i izaberite {{ui:Uredi dio}}. Dio se otvara sa svojom historijom; naslov kaže "Bracket (u sklopu Bracket)".
2. Promijenite ga kao svaki dio.
3. Izaberite {{ui:Nazad}} na alatnoj traci. Sklop se ažurira: svaka kopija tog dijela se mijenja, a spojevi na površinama napravljenim ivicama skice slijede.

Vraćanje promjene je jedan korak u listi poništavanja sklopa.

## Poništavanje, čuvanje i zatvaranje

- Sklop ima svoju listu poništavanja: {{key:Mod+Z}} i {{key:Mod+Y}} rade sa spojevima, umetanjima i postavkama.
- {{ui:Spasi}} ili {{key:Mod+S}} preuzima `<ime sklopa>.partcraft-asm.json`, sa svakim dijelom unutra. Otvorite ga kasnije sa {{ui:Otvori}}.
- {{ui:Zatvori}} zatvara sklop i vraća vas na dio sa kojim ste počeli. Ako sklop nije sačuvan, pita: {{ui:Otkaži}}, {{ui:Odbaci sklop}} ili {{ui:Prvo spasi}}.
- Da preimenujete sklop, kliknite prazan prostor da ništa nije izabrano, pa promijenite **Naziv** u desnom panelu.

## Veliki sklopovi

Sklop može imati hiljade kopija nekoliko dijelova. Kopije jednog dijela se crtaju zajedno. Spoj koji okrećete pomjera samo dijelove iza njega, a lista dijelova prikazuje prve redove sa dugmetom "Prikaži više" ispod (izabrani dio je uvijek na listi).

- Dok okrećete ili zumirate prikaz, sklop sa više od oko 300.000 trouglova crta se kao jedna kutija po dijelu, a zatim u punom obliku tren nakon što prestanete.
- {{ui:Prikazi}} › {{ui:Pojednostavljeni prikaz}} zadržava kutije uvijek. Izbor dijela i spojeva i dalje koristi stvarne dijelove.
- Koliko brzo se okreće zavisi i od vaše grafičke kartice. Brojke koje je PartCraft izmjerio su u napomenama o izdanju, uz računar na kojem su izmjerene.

## Problemi sa spojevima

- Dio koji nijedan spoj ne dosegne označen je kao **slobodan**, a panel kaže "Bracket2 nije spojen sa učvršćenim dijelom, pa ostaje gdje je postavljen."
- Petlja koja se ne može zatvoriti (dužine ne dosežu, granica zaustavlja spoj, površine se ne slažu po dubini): "Revolute3 zatvara petlju koja se ne može zatvoriti: odstupa za 2.000 mm. Provjerite površine, pomake i granice spojeva petlje." Njeni spojevi postaju crveni.
- Ako površina ili osa koju spoj koristi nestane nakon uređivanja dijela: "Površina koju ovaj spoj koristi nestala je iz Bracket." Uklonite spoj i napravite ga ponovo.

Sljedeće: [Provjerite sklop na sudare i kretanje](topic:check-assembly).
