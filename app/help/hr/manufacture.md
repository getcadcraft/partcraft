---
title: Izrada putanja alata i G-koda (Manufacture)
summary: Postavite sirovac i radnu nulu, odaberite alate, dodajte operacije za plohe, džep, konturu, bušenje i skošenje odabirom ploha, završite cijeli model u 3D (paralelno, scallop), simulirajte sirovac naspram modela radi ureza i vremena ciklusa te preuzmite G-kod iz jednog od tri ugrađena postprocesora ili onog koji sami uredite.
keywords: exact step, step za radionicu, koordinate obrade, predaja cam, paralelno, scallop, 3d završna obrada, završna obrada, kuglasto glodalo, biblioteka alata, uredi postprocesor, prilagođeni postprocesor, uređivač postprocesora, prilagodljivo, prilagodljivo glodanje, konstantan zahvat, trokoidalno, hsm, glodanje velikom brzinom, manufacture, CAM, putanja alata, G-kod, NC, CNC, glodalica, glodanje, džep, kontura, profil, planiranje, bušenje, peck, G83, G81, G73, skošenje, sirovac, pomak nule, G54, postprocesor, GRBL, LinuxCNC, posmak i brzina, simulacija, urez, vrijeme ciklusa
from: beeb29aa
---

Radni prostor Manufacture pretvara dio u putanje alata za 3-osnu glodalicu i zapisuje ih kao G-kod. Većina operacija je **2,5-osna**: alat ostaje okomit, stijenke se režu ravno dolje, a dna ravno. **Paralelno** i **Scallop** završno obrađuju zakrivljene plohe u 3D (vidi [3D završna obrada](topic:finish-3d)); alat i dalje ostaje okomit (tri osi, bez naginjanja). Radi na imenovanim plohama koje jezgra mreže daje dijelu (vidi [Jezgra mreže](topic:solid-kernels)).

Laboratorijska verzija: provjerite svaki program u simulatoru vašeg upravljačkog sustava i prvo ga pokrenite u zraku iznad sirovca.

## Postavljanje

1. Odaberite **Manufacture** u preklopniku radnog prostora, zatim {{ui:Nova postavka}}.
2. Na kartici **Postavljanje** odaberite:
   - **Os alata (+Z)**: u kojem smjeru alat pokazuje u dio. Svjetski +Y (gore u PartCraftu) je zadano; tada je X stroja svjetski X, a Y stroja je svjetski −Z.
   - **Radna nula (G54)**: kut ili središte sirovca, vrh ili dno, gornje središte modela ili ishodište modela.
   - **Sirovac**: kutija ili valjak, ili model plus odmaci (strane, vrh, dno), ili fiksna veličina.
   - **Materijal** (postavlja početne posmake i brzine), **postprocesor** (upravljač), najveću brzinu vretena stroja, brzi hod i vrijeme izmjene alata, rashladno sredstvo i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravna, kuglasta i zaobljena glodala, bušilice, glodala za skošenje i čeona glodala, svako s brojem T, promjerom, žlijebovima i duljinom žlijeba (uz radijus kuta, kut vrha ili skošenja gdje se primjenjuje).

Moji alati mogu se spremiti u preglednik i prenijeti između računala kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × promjer), posmak = n × broj žlijebova × debljina strugotine (bušilice: n × posmak po okretaju). Brojevi su konzervativne početne vrijednosti iz objavljenih raspona, nisu podešeni za vaš stroj; upišite brzinu rezanja, debljinu strugotine, o/min ili posmak vašeg proizvođača alata da ih zamijenite. Kad brzina premaši najveću brzinu stroja, ona se zadržava na njoj, a posmak slijedi, održavajući debljinu strugotine.

## Dodavanje operacija

Svaki gumb na alatnoj traci dodaje operaciju i, ako treba geometriju, počinje odabir: kliknite plohe ili bridove u prikazu (kliknite ponovo da ga uklonite), zatim {{ui:Završi odabir}} ili {{key:Esc}}.

| Operacija | Odabir | Što radi |
|---|---|---|
| {{ui:Face}} | ništa | Cik-cak prolazi preko cijelog sirovca, preko njegovih rubova, do vrha modela |
| {{ui:Pocket}} | ravnu plohu dna, okrugli provrt ili zatvoreni lanac bridova | Čisti područje prolazima po odmaku od unutra prema van, na svakom dubinskom koraku; otoci (plohe koje stoje uzdignuto unutar dna) ostaju; dno otvoreno sa svih strana (ništa više izvan njega) čisti se do ruba sirovca |
| {{ui:Adaptive}} | isto kao Pocket | Čisti isto područje prolazima od kojih svaki reže zadanu širinu (**Zahvat**, dio promjera), tako da alat nikada ne reže puni žlijeb, ni u kutovima; ulazi spiralom i završava stijenke na svakoj razini. Uski rezovi dopuštaju dublji korak i veći posmak |
| {{ui:Contour}} | ravnu plohu (njezin obris), okruglu plohu ili bridove | Prati obris pomaknut za radijus alata, izvana ili iznutra, s ulaznim i izlaznim lukovima i neobaveznim jezičcima |
| {{ui:Drill}} | rupe (kliknite stijenku rupe ili njezin rub) | Buši svaku rupu ugrađenim ciklusom: peck (G83), bušenje (G81) ili lom strugotine (G73); ili zadajte promjer da izbuši svaku rupu te veličine |
| {{ui:Chamfer}} | obris plohe ili bridove | Pušta glodalo za skošenje duž brida tako da reže širinu koju postavite |
| {{ui:Parallel}} | ništa (cijeli model) | 3D završna obrada paralelnim linijama pod bilo kojim kutom, prateći plohu kuglastim, zaobljenim ili ravnim glodalom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Scallop}} | ništa (cijeli model) | 3D završna obrada prolazima na zadanoj udaljenosti po plohi, tako da greben između njih ima visinu koju tražite |

Odaberite operaciju na popisu da promijenite njezin alat, visine (sigurnosna, povlačenje, visina posmaka, vrh, dno), dubinski korak, bočni korak, materijal koji se ostavlja, završni prolaz, ulazak (spirala, rampa ili uron), istosmjerno glodanje, jezičce ili ciklus. {{ui:Gore}} i {{ui:Dolje}} mijenjaju redoslijed, {{ui:Potisni}} je izostavlja, {{ui:Izbriši}} je uklanja. Sve je u povijesti poništavanja i spremljeno je u datoteku dijela.

Bočni korak džepa iznosi najviše pola promjera alata, pa je svaka točka njegova dna unutar jednog radijusa alata od nekog prolaza. Unutarnji kutovi zadržavaju radijus alata.

**Adaptivno čišćenje** održava zahvat alata blizu jedne vrijednosti. Zahvat 0,15 promjera je kut zahvata od oko 46°: luk ruba alata u materijalu. Džep s odmakom, s druge strane, reže punu širinu na prvom prolazu i omota se dalje u svakom unutarnjem kutu. Između prolaza alat ostaje spušten dok se kreće kroz rezani zrak, a inače se diže i spušta u rezanom zraku. Prolazi se računaju na finoj mreži preko područja (ćelije od oko dvanaestine radijusa alata), pa zahvat može biti do jednu ćeliju širi od postavljenog; stijenke se završavaju točno. Velika otvorena površina daje dug program s mnogo kratkih pomaka.

## Simulacija

Putanje alata izrađuju se ponovno nakon svake promjene (i dijela). {{ui:Simuliraj}} također prikazuje sirovac koji ostaje nakon cijelog programa. Ploča prikazuje:

- **Vrijeme ciklusa**: pomaci posmaka na svom posmaku, brzi hodovi kao ravne linije pri brzom hodu postavke, plus vrijeme izmjene alata. Pravi strojevi ubrzavaju, pa traju dulje.
- **Ureze**: mjesta gdje je alat otišao više od 0,02 mm ispod površine dijela. Crvene oznake ih prikazuju u prikazu.
- **Ostatak sirovca na dijelu**.

Sirovac je mapa visina vrha (Z-mapa), pa ne može prikazati podreze. Povucite **Reprodukcija** da pomaknete alat duž programa. U prikazu su pomaci posmaka puni, a brzi hodovi crtkani, jedna boja po operaciji.

Kad je uključeno **Prikaži simulirani sirovac**, sirovac je obojen naspram modela, ćeliju po ćeliju: **zeleno** gdje je na modelu (unutar 0,02 mm), **crveno** gdje je alat zarezao u model, a gdje na modelu ostaje sirovac, **žuto** za tanku kožu, **narančasto** za više, prelazeći u **sivo** neobrađenog sirovca od 1 mm ili više. Boje se ponovno izrađuju pri svakoj promjeni, iz iste mape visina kao brojevi na ploči, pa se zeleno i crveno slažu s retkom Ureze. Skošenje namjerno reže u model i pokazuje crveno duž svog brida.

## Spremanje G-koda

Odaberite upravljač pod **Postprocesor** i pritisnite {{ui:Preuzmi G-kod}} (ili {{ui:Postprocesor}} na alatnoj traci):

| Upravljač | Datoteka | Napomene |
|---|---|---|
| Fanuc-slično ISO | .nc | %, broj O, brojevi redaka, T M6 s G43 H, ugrađeni ciklusi |
| GRBL | .nc | Nema mijenjača alata ni ugrađenih ciklusa: izmjena alata pauzira s M0, bušenje je zapisano kao obični pomaci |
| LinuxCNC | .ngc | T M6 s G43 H, ugrađeni ciklusi, M2 |
| Vlastiti | bilo koji | Postprocesor koji ste napisali ili promijenili: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, sirovac, radni pomak i alate. Koordinate su u milimetrima s 3 decimale. {{ui:Toolpath CSV}} i {{ui:Toolpath JSON}} izvoze same pomake.

**Prije rezanja provjerite izlaz u simulatoru vašeg stroja i prvo ga pokrenite u zraku iznad sirovca.** Tri ugrađena postprocesora su polazne točke koje slijede dokumentirano ponašanje upravljača; nisu dokazana ni na jednom određenom stroju. Postprocesor koji promijenite vaš je za dokazati. Kako ga napisati: [Postprocesori](topic:post-processors).

## Egzaktni STEP za radionicu

Ispod gumba G-koda na kartici **Operacije**, {{ui:Egzaktni STEP (koordinate obrade)}} preuzima `<part>-work.step`: dio kao egzaktno tijelo (pravi cilindri za rupe i izbočine, prave kružnice za njihove bridove) s ishodištem u radnoj nuli ovog postavljanja i Z duž osi alata. To su koordinate koje koristi G-kod, pa vlastiti CAM program ili provjera radionice poravnava model s programom bez pomicanja. Datoteka sadrži samo dio, ne sirovac ni putanje alata.

{{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} zapisuje isto tijelo na položaju samog dijela (Z gore): vidi [Izvoz za ispis, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i skošenja su 2,5-osni. Zakrivljene plohe mogu se završno obraditi u 3D ([paralelno i scallop](topic:finish-3d)), ali ne grubo u 3D (stožac ostaje u stepenicama dok ga ne završite), a nema ni obrade zaostalog materijala. Adaptivno čišćenje je 2D (ravna dna).
- Samo tri osi: bez naginjanja, bez tokarenja, bez inspekcije.
- Držači i drške se ne provjeravaju za sudare; upozorenje se pojavi kad je rez dublji od duljine žlijeba.
- Posmak i brzine su početne vrijednosti. Postprocesor je tekst koji možete uređivati, ali odlučuje samo kako se pomaci zapisuju; ne može promijeniti putanju alata, dodati osi niti poznavati vaš stroj ([Postprocesori](topic:post-processors) navodi što ne može).

## Pošaljite program na stroj

U CadCraft Studiju na računalu, uz stroj postavljen u Studiju, **Pošalji na stroj…** se pojavi pored **Preuzmi G-kod** i učitava isti program na stroj u vašoj mreži. Nikada ga ne pokreće PartCraft: pokrenite ga na stroju kad je jasno da je sigurno. U pregledniku se gumb ne prikazuje (web stranica ne može doseći stroj u vašoj mreži): umjesto toga preuzmite program.
