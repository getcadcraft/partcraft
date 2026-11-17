---
title: Izrada sklopa sa zglobovima
summary: Započnite sklop od dijela, umetnite kopije i druge datoteke dijelova, spojite ih krutim, rotacijskim, kliznim, cilindričnim, ravninskim, kugličnim i zglobovima klin u utoru na ravnim plohama, centrirajte zglobove na osima, uređujte dio na licu mjesta i spremite sklop.
keywords: sklop, spajanje, spoj, zglob, petlja, zatvorena petlja, poluga, četverozglobni mehanizam, mehanizam, kruti, rotacijski, klizni, cilindrični, ravninski, kuglični, sferni, klin u utoru, umetni komponentu, uzemljeno, fiksno, koncentrično, podudarno, uredi dio, u kontekstu, partcraft-asm
from: a53bbfef
---

Sklop spaja dijelove. U programu PartCraft **zglobovi** postavljaju dijelove: svaki zglob leži na ravnoj plohi svakog od dvaju dijelova i stavlja ih lice uz lice. Rotacijski zglob omogućuje jednom dijelu da se okreće, klizni zglob ga pušta da kliže, a kruti zglob ga drži na mjestu.

## Pokretanje sklopa

1. Izradite dio s tijelom (prazan dio ne može ući u sklop: „Prvo izradite tijelo, zatim ga stavite u sklop.“).
2. Na alatnoj traci odaberite {{ui:Sklop}}.

Statusna traka kaže: „Sklop je pokrenut, Part1 je uzemljeni dio. Umetnite još dijelova ({{ui:Dodaj kopiju}}, {{ui:Umetni}} ili Uredi › {{ui:Dupliciraj}}), zatim ih spojite zglobovima.“ Lijeva ploča sada prikazuje **Dijelove** i **Zglobove**, a alatna traka prikazuje alate sklopa. Alati za skice i značajke se skrivaju.

Prvi dio je **uzemljen**: nikada se ne pomiče, a sve ostalo postavlja se u odnosu na njega.

## Umetanje dijelova

- {{ui:Dodaj kopiju}} umeće još jednu kopiju odabranog dijela (ili zadnjeg). Kopije dijele jedan dio: uredite ga i promijenit će se svaka kopija.
- {{ui:Dupliciraj}} ({{key:Mod+D}}) u grupi Uredi radi isto za odabrani dio. {{key:Mod+C}} i {{key:Mod+V}} kopiraju dio i zalijepe ga pokraj ostalih, u ovom sklopu ili drugom; {{key:Mod+Shift+V}} ga zalijepi na isto mjesto. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).
- {{ui:Umetni}} umeće dio iz datoteke `.partcraft.json` na vašem računalu. Dio se kopira u sklop.

Novi dijelovi pojavljuju se 20 mm desno od svega što već postoji i ostaju tu dok ih zglob ne postavi. Dio bez zgloba može se pomaknuti i rukom: upisanim vrijednostima ili strelicama koje povučete (vidi [Popis dijelova, rastavljeni prikazi i pomični dijelovi](topic:assembly-bom-explode)).

## Spajanje dvaju dijelova

1. Odaberite {{ui:Spoj}} ili pritisnite {{key:J}}. Desna ploča kaže **Novi zglob**.
2. Kliknite ravnu plohu na prvom dijelu. Ona se označi.
3. Kliknite ravnu plohu na drugom dijelu.

Drugi dio skoči tako da njegova ploha naliježe na plohu prvog dijela, okrenuta prema njoj. Zglob se pojavi pod **Zglobovi**, na primjer „Revolute1“, a desna ploča prikazuje njegove postavke.

- Ako su obje plohe nastale rotacijom, zglob počinje kao **rotacijski**; inače kao **kruti**. Poslije ga možete promijeniti.
- Zakrivljene plohe ne mogu se odabrati: „Ta ploha je zakrivljena. Odaberite ravnu plohu (za okretanje oko provrta ili osi rotacije, poslije je odaberite u zglobu).“
- {{key:Esc}} otkazuje zglob koji ste započeli (ili kliknite dio na popisu lijevo).

### Postavke zgloba

| Postavka | Što radi |
|---|---|
| **Vrsta** | Jedan od zglobova u tablici ispod |
| **Kut (°)** | Okreće drugi dio oko osi zgloba (okomito na plohe) |
| **Odmak (mm)** | Pomiče drugi dio duž osi, od plohe (negativne vrijednosti guraju u nju) |
| **Duž X**, **Duž Y**, **Nagib oko X**, **Nagib oko Y**, **Duž utora**, **Smjer utora** | Ostale vrijednosti, prikazane za zglobove koji ih koriste |
| **Središte na** (za svaku stranu) | Mjesto gdje os zgloba prolazi kroz plohu: „Vlastito ishodište plohe“, os rotacije („Axis of Revolve1“) ili os jednog provrta („Hole1, hole 2“) |

Svaka vrijednost koju zglob dopušta pomicati ima klizač za povlačenje ispod svoga polja; ostale se postavljaju jednom.

| Zglob | Što se pomiče | Postavlja se jednom |
|---|---|---|
| **Kruti** | ništa | Kut, Odmak |
| **Rotacijski** | Kut (šarka) | Odmak |
| **Klizni** | Odmak (ladica) | Kut |
| **Cilindrični** | Kut i Odmak (osovina u kliznom ležaju) | |
| **Ravninski** | Duž X, Duž Y preko plohe i Kut (dio koji klizi po stolu) | |
| **Kuglični** | Kut (vrtnja) i Nagib oko X i Y, oko središta zgloba (kuglični zglob) | |
| **Klin u utoru** | Duž utora i Kut (klin u ravnom utoru) | Smjer utora: kut utora od X plohe |

X i Y plohe jesu oni prvog dijela; središte zgloba postavlja se s **Središte na**.

„Vlastito ishodište plohe“ je ishodište dijela projicirano na plohu, što često nije mjesto na kojem želite poravnati dijelove. Za okrugle dijelove i klinove postavite **Središte na** na os rotacije ili provrta s obje strane: osi se tada poravnaju, kao koncentrično spajanje.

### Primjer: dvije prirubnice spojene lice uz lice

1. Otvorite dio prirubnice (rotacija s kružnim uzorkom provrta) i odaberite {{ui:Sklop}}.
2. Odaberite {{ui:Dodaj kopiju}}.
3. Pritisnite {{key:J}}, kliknite ravnu plohu diska prve prirubnice (plohu od koje počinju provrti za vijke), zatim istu plohu na drugoj prirubnici. Plohe su nastale rotacijom, pa je zglob rotacijski.
4. Postavite **Središte na** na „Axis of Revolve1“ s obje strane. Prirubnice sada dijele os.
5. Upišite `22.5` u **Kut (°)** da poravnate provrte za vijke, ili povucite klizač.

## Zatvorene petlje: mehanizmi

Dijelovi spojeni u prsten (četverozglobni mehanizam, ručica i klizač, okvir ukrućen s obje strane) tvore **petlju**. PartCraft rješava svaku petlju tako da se zatvori: zglobovi na njoj poprimaju vrijednosti koje zatvaraju prsten, pomičući se što manje od položaja u kojem su bili.

- **Postavite ili povucite** vrijednost zgloba na petlji, a ostatak petlje slijedi. Za četverozglobni mehanizam povucite **Kut** ručice, pa se spojnica i klackalica pomiču s njom. Vrijednost koju ste postavili ostaje; ostale se izračunavaju iz nje.
- Na popisu je zglob na petlji koja se još može pomicati **plav**: još se može postaviti neka druga vrijednost. Petlja koja se ne može pomicati (ukrućeni okvir) ostaje crna. Petlja koja se ne može zatvoriti je **crvena**.
- Okvir **Dio** prikazuje **Petlje**: koliko ih je zatvoreno i koliko vrijednosti se još može pomicati, na primjer „1 zatvorena; 1 vrijednost se još može pomicati“.
- {{ui:Provjerite sudaraju li se dijelovi tijekom gibanja}} pomiče zglob na petlji zajedno s petljom, korak po korak (vidi [Provjera sklopa na sudare i gibanje](topic:check-assembly)).

Ravna poluga složena od ravnih traka mora se slagati u dubini: dva dijela spojena lice uz lice s obje strane prstena moraju imati istu visinu slaganja u oba smjera. Koristite **Odmak** zgloba da podignete dio tamo gdje se slaganje ne zbraja, inače se petlja ne može zatvoriti.

## Rad s dijelovima

Kliknite dio u prikazu ili na popisu da ga odaberete. Desna ploča prikazuje naziv dijela, koliko ima kopija, njegov volumen, njegove zglobove te je li uzemljen, postavljen zglobovima ili „Nije spojen: ostaje gdje je postavljen“. Gumbi:

- {{ui:Uredi ovaj dio}} (ili {{ui:Uredi dio}} na alatnoj traci, ili dvostruki klik na dio na popisu): otvara dio za uređivanje;
- {{ui:Umetni kopiju}};
- {{ui:Učini ga uzemljenim dijelom}};
- {{ui:Ukloni}}: uklanja i njegove zglobove, nakon potvrde.

Sklop zadržava barem jedan dio: „Sklop mora zadržati barem jedan dio. Umjesto toga zatvorite ga.“

### Uređivanje dijela na licu mjesta

1. Odaberite dio i odaberite {{ui:Uredi dio}}. Dio se otvara s povijesti; naslov kaže „Bracket (u sklopu Bracket)“.
2. Promijenite ga kao svaki dio.
3. Na alatnoj traci odaberite {{ui:Natrag}}. Sklop se ažurira: mijenja se svaka kopija tog dijela, a zglobovi na plohama nastalima od bridova skice prate promjenu.

Vraćanje promjene jedan je korak na popisu poništavanja sklopa.

## Poništavanje, spremanje i zatvaranje

- Sklop ima vlastiti popis poništavanja: {{key:Mod+Z}} i {{key:Mod+Y}} rade sa zglobovima, umetanjima i postavkama.
- {{ui:Spremi}} ili {{key:Mod+S}} preuzima `<assembly name>.partcraft-asm.json`, sa svakim dijelom unutra. Otvorite ga kasnije s {{ui:Otvori}}.
- {{ui:Zatvori}} zatvara sklop i vraća vas na dio s kojim ste počeli. Ako sklop nije spremljen, pita: {{ui:Odustani}}, {{ui:Odbaci sklop}} ili {{ui:Prvo spremi}}.
- Za preimenovanje sklopa kliknite prazan prostor da ništa nije odabrano i promijenite **Naziv** u desnoj ploči.

## Veliki sklopovi

Sklop može sadržavati tisuće kopija nekoliko dijelova. Kopije jednog dijela crtaju se zajedno, zglob koji okrećete postavlja samo dijelove iza sebe, a popis dijelova prikazuje prvih nekoliko redaka s gumbom „Prikaži više“ ispod (odabrani dio uvijek je na popisu).

- Dok okrećete ili zumirate prikaz, sklop s više od oko 300,000 trokuta crta se kao jedan okvir po dijelu, a zatim se potpuno prikaže kratko nakon što prestanete.
- {{ui:Pogledi}} › {{ui:Pojednostavljeni prikaz}} zadržava okvire stalno. Odabir dijela i zglobova i dalje koristi stvarne dijelove.
- Brzina okretanja ovisi i o vašoj grafičkoj kartici. Brojke koje je PartCraft izmjerio nalaze se u bilješkama o izdanju uz računalo s kojeg potječu.

## Problemi sa zglobovima

- Dio do kojeg nijedan zglob ne dolazi navodi se kao **slobodan**, a ploča kaže „Bracket2 nije spojen s uzemljenim dijelom, pa ostaje gdje je postavljen.“
- Petlja koja se ne može zatvoriti (duljine ne dosižu, granica zaustavlja zglob, plohe se ne slažu u dubini): „Revolute3 zatvara petlju koja se ne može zatvoriti: odstupa za 2.000 mm. Provjerite plohe, odmake i granice zglobova na petlji.“ Njezini zglobovi postaju crveni.
- Ako nakon uređivanja dijela nestane ploha ili os koju zglob koristi: „Ploha koju ovaj zglob koristi nestala je iz Bracket.“ Uklonite zglob i ponovno ga izradite.

Dalje: [Provjera sklopa na sudare i gibanje](topic:check-assembly).
