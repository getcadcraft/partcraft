---
title: Izrada putanja alata i G-koda (Proizvodnja)
summary: Postavite sirovac i radnu nulu, odaberite alate, dodajte operacije ravnine, džepa, konture, bušenja i skošenja odabirom ploha, završno obradite cijeli model u 3D (paralelno, scallop), simulirajte sirovac naspram modela radi zareza i vremena ciklusa te preuzmite G-kod iz jednog od tri ugrađena postprocesora ili onog koji sami uredite.
keywords: točni step, step za radionicu, koordinate obrade, predaja CAM-u, paralelno, scallop, 3D završna obrada, završna obrada, kuglasta glava, biblioteka alata, uredi postprocesor, prilagođeni postprocesor, uređivač postprocesora, prilagodljivo, prilagodljivo čišćenje, stalni zahvat, trohoidalno, hsm, glodanje velikom brzinom, proizvodnja, CAM, putanja alata, G-kod, NC, CNC, glodalo, glodanje, džep, kontura, profil, planiranje ravnine, bušenje, peck, G83, G81, G73, skošenje, sirovac, radni pomak, G54, postprocesor, GRBL, LinuxCNC, posmak i brzina, simulacija, zarez, vrijeme ciklusa
from: f8a03be8
---

Radni prostor Proizvodnja pretvara dio u putanje alata i zapisuje ih kao G-kod. Većina operacija je **glodanje 2.5 osi**: alat ostaje okomit, stijenke se režu ravno dolje, a dna ravno. **3D grubo** i **Dorada** grubo obrađuju zakrivljene dijelove u 3D ([3D grubo obrađivanje i dorada ostataka](topic:rough-3d)); **Paralelno** i **Scallop** ih završno obrađuju ([3D završna obrada](topic:finish-3d)). Na stroju s rotacijskim osima bilo koja operacija može imati nagnut alat, a dvije operacije pomiču rotacijske osi tijekom rezanja ([4- i 5-osna obrada](topic:multi-axis)). Postoje operacije za tokarilicu ([Tokarenje](topic:turning)) i za dodirnu sondu ([Ticanje](topic:probing)). Radi s imenovanim plohama koje jezgra mreže daje dijelu (vidi [Jezgra mreže](topic:solid-kernels)).

Laboratorijska izvedba: provjerite svaki program u simulatoru vlastitog upravljača i prvo ga pokrenite u zraku iznad sirovca.

## Postavljanje

1. Odaberite **Proizvodnja** u birač radnog prostora, zatim {{ui:Nova postavka}}.
2. Na kartici **Postavljanje** odaberite:
   - **Os alata (+Z)**: u kojem smjeru alat ulazi u dio. Zadano je svjetski +Y (gore u PartCraftu); tada je X stroja svjetski X, a Y stroja je svjetski −Z.
   - **Radna nulta točka (G54)**: kut ili središte sirovca, gore ili dolje, gornje središte modela ili ishodište modela.
   - **Sirovac**: kvadar ili valjak, bilo model plus odmaci (bočno, gore, dolje) bilo fiksna veličina.
   - **Materijal** (postavlja početne posmake i brzine), **postprocesor** (upravljač), najveću brzinu vretena stroja, brzinu brzog hoda i vrijeme izmjene alata, rashladno sredstvo i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravna, kuglasta i zaobljena glodala, svrdla, glodala za skošenje i čeona glodala, svako s T brojem, promjerom, brojem zubaca i duljinom zubaca (uz polumjer kuta, kut vrha ili skošenja gdje se primjenjuju).

Moji alati mogu se spremiti u pregledniku i premještati između računala kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × promjer), posmak = n × broj zubaca × opterećenje strugotine (svrdla: n × posmak po okretaju). Brojke su oprezne početne vrijednosti iz objavljenih raspona, nisu podešene za vaš stroj; upišite brzinu rezanja, opterećenje strugotine, o/min ili posmak proizvođača alata da ih zamijenite. Kad brzina premaši najveću vrijednost stroja, ostaje na njoj, a posmak se prilagođava kako bi se zadržalo opterećenje strugotine.

## Dodavanje operacija

Svaki gumb na alatnoj traci dodaje operaciju i, ako joj treba geometrija, počinje s odabirom: kliknite plohe ili bridove u prikazu (ponovnim klikom odbacujete), zatim {{ui:Završi odabir}} ili {{key:Esc}}.

| Operacija | Odabir | Što radi |
|---|---|---|
| {{ui:Ploha}} | ništa | Prolazi cik-cak preko cijelog sirovca, izvan njegovih rubova, do vrha modela |
| {{ui:Džep}} | ravna ploha dna, okrugla rupa ili zatvoreni lanac bridova | Čisti područje odmaknutim prolazima iznutra prema van, na svakoj dubini prolaza; otoci (plohe koje stoje uspravno unutar dna) ostaju; dno otvoreno sa svih strana (ništa više izvan njega) čisti se do ruba sirovca |
| {{ui:Prilagodljivo}} | isto kao Džep | Čisti isto područje prolazima od kojih svaki reže zadanu širinu (**Zahvat**, dio promjera), pa glodalo nikad ne uzima utor pune širine, ni u kutovima; ulazi spiralom i završno obrađuje stijenke na svakoj razini. Uski rezovi dopuštaju dublji prolaz i veći posmak |
| {{ui:Kontura}} | ravna ploha (njezin obris), okrugla ploha ili bridovi | Prati obris odmaknut za polumjer alata, izvana ili iznutra, s lukovima ulaza i izlaza i neobaveznim jezičcima |
| {{ui:Bušenje}} | rupe (kliknite stijenku rupe ili njezin rub) | Buši svaku rupu gotovim ciklusom: peck (G83), bušenje (G81) ili lomljenje strugotine (G73); ili zadajte promjer da se buše sve rupe te veličine |
| {{ui:Skošenje}} | obris ili bridovi plohe | Vodi glodalo za skošenje duž brida tako da reže širinu koju postavite |
| {{ui:Paralelno}} | ništa (cijeli model) | 3D završna obrada paralelnim linijama pod bilo kojim kutom, prateći plohu kuglastim, zaobljenim ili ravnim glodalom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Zubasto (scallop)}} | ništa (cijeli model) | 3D završna obrada prolazima na zadanoj udaljenosti preko plohe, pa greben između njih ima visinu koju zatražite |

Odaberite operaciju na popisu da promijenite njezin alat, visine (razmak, uvlačenje, visina posmaka, gornja, donja), dubinu prolaza, razmak prolaza, ostavljeni materijal, završni prolaz, ulaz (spirala, rampa ili uranjanje), istosmjerno glodanje, jezičce ili ciklus. {{ui:Gore}} i {{ui:Dolje}} mijenjaju redoslijed, {{ui:Potisni}} je izostavlja, {{ui:Izbriši}} je uklanja. Sve je u povijesti poništavanja i sprema se u datoteku dijela.

Razmak prolaza džepa najviše je pola promjera alata, pa je svaka točka njegova dna unutar jednog polumjera alata od nekog prolaza. Unutarnji kutovi zadržavaju polumjer alata.

**Prilagodljivo čišćenje** održava zahvat glodala blizu jedne vrijednosti. Zahvat od 0.15 promjera jest kut zahvata od oko 46°: luk brida glodala u materijalu. Odmaknuti džep, nasuprot tome, reže punu širinu u prvom prolazu i u svakom unutarnjem kutu obuhvaća se dalje. Između prolaza alat ostaje spušten gdje se kreće kroz izrezani zrak, a inače se podiže i spušta u izrezanom zraku. Prolazi se računaju na finoj mreži preko područja (ćelije od oko dvanaestine polumjera alata), pa zahvat može biti za oko jednu ćeliju širi od zadanog; stijenke se završno obrađuju točno. Veliko otvoreno područje daje dug program s mnogo kratkih pomaka.

## Simulacija

Putanje se ponovno izrađuju nakon svake promjene (i putanje dijela). {{ui:Simuliraj}} također prikazuje sirovac preostao nakon cijelog programa. Ploča prikazuje:

- **Vrijeme ciklusa**: posmačni pomaci po svom posmaku, brzi hodovi kao ravne linije pri brzini brzog hoda iz postavljanja, uz vrijeme izmjene alata. Pravi strojevi ubrzavaju, pa traju dulje.
- **Zarezi**: mjesta gdje je alat išao više od 0.02 mm ispod plohe dijela. Crvene oznake ih prikazuju u prikazu.
- **Sirovac preostao na dijelu**.

Sirovac je karta visina gornje strane (Z-karta), pa ne može prikazati podreze. Povucite **Reprodukcija** da pomičete alat duž programa. U prikazu su posmačni pomaci puni, a brzi hodovi isprekidani, jedna boja po operaciji.

Kad je uključeno **Prikaži simulirani sirovac**, sirovac se boji u odnosu na model, ćeliju po ćeliju: **zeleno** gdje je na modelu (unutar 0.02 mm), **crveno** gdje je alat ušao u model, a gdje na modelu ostaje sirovac, **žuto** za tanku kožu, **narančasto** za više, prelazeći u **sivo** neobrađenog sirovca od 1 mm ili više. Boje se ponovno izrađuju pri svakoj promjeni, iz iste karte visina kao i brojevi na ploči, pa se zeleno i crveno slažu s retkom Zarezi. Skošenje namjerno reže u model i uz svoj rub prikazuje crveno.

## Postprocesiranje G-koda

Odaberite upravljač pod **Postprocesor** i pritisnite {{ui:Preuzmi G-kod}} (ili {{ui:Postprocesor}} na alatnoj traci):

| Upravljač | Datoteka | Napomene |
|---|---|---|
| Fanuc-style ISO | .nc | %, broj O, brojevi redaka, T M6 s G43 H, gotovi ciklusi |
| GRBL | .nc | Bez izmjenjivača alata i gotovih ciklusa: izmjena alata zaustavlja se s M0, bušenje se zapisuje kao obični pomaci |
| LinuxCNC | .ngc | T M6 s G43 H, gotovi ciklusi, M2 |
| Fanuc-style lathe | .nc | Za programe tokarenja: X kao promjer, posmak po okretaju, G96 uz ograničenje G50, G32 navoj |
| LinuxCNC lathe | .ngc | Za programe tokarenja: promjeri G7, G95, G96, G33 navoj; ne zapisuje pomak na referentnu točku |
| Vlastiti | bilo koja | Postprocesor koji ste napisali ili promijenili: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, sirovac, radni pomak i alate. Koordinate su u milimetrima s 3 decimale. {{ui:CSV putanje alata}} i {{ui:JSON putanje alata}} izvoze same pomake.

**Provjerite izlaz u simulatoru vašeg stroja prije rezanja i prvo ga pokrenite u zraku iznad sirovca.** Tri ugrađena postprocesora polazne su točke koje slijede dokumentirano ponašanje upravljača; nisu dokazane ni na jednom određenom stroju. Postprocesor koji promijenite vaš je za dokazati. Kako ga napisati: [Postprocesori](topic:post-processors).

## Točni STEP za radionicu

Ispod gumba za G-kod na kartici **Operacije**, {{ui:Točni STEP (koordinate obrade)}} preuzima `<part>-work.step`: dio kao točno tijelo (pravi valjci za rupe i izbočine, prave kružnice za njihove bridove) s ishodištem u radnoj nuli ovog postavljanja i Z duž osi alata. To su koordinate koje G-kod koristi, pa vlastiti CAM program ili provjera radionice poravnava model s programom bez pomicanja. Datoteka sadrži samo dio, ne sirovac ni putanje alata.

{{ui:Izvoz}} › {{ui:STEP AP242 (egzaktno tijelo)}} zapisuje isto tijelo u vlastitom položaju dijela (Z gore): vidi [Izvoz za ispis, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i skošenja su 2.5-osni. Zakrivljene dijelove grubo i završno obrađuju u 3D njihove vlastite operacije ([3D grubo obrađivanje i dorada ostataka](topic:rough-3d), [3D završna obrada](topic:finish-3d)). Prilagodljivo čišćenje je 2D (ravna dna).
- Nagnuti alati, 5-osna i 4.-osna završna obrada, tokarenje i sondiranje postoje, svaki sa svojim ograničenjima, i **nijedno nije pokrenuto na stroju**: vidi [4- i 5-osna obrada](topic:multi-axis), [Tokarenje](topic:turning) i [Ticanje](topic:probing).
- Držači i prihvati ne provjeravaju se za sudare; upozorenje se pojavi kad je rez dublji od duljine zubaca.
- Posmaci i brzine su početne vrijednosti. Postprocesor je tekst koji možete uređivati, ali samo odlučuje kako se pomaci zapisuju; ne može promijeniti putanju alata, dodati osi ni znati vaš stroj ([Postprocesori](topic:post-processors) navodi što ne može).

## Slanje programa na stroj

U aplikaciji CadCraft Studio na radnoj površini, uz stroj postavljen u aplikaciji Studio, **Pošalji na stroj…** pojavljuje se pored **Preuzmi G-kod** i učitava isti program na stroj u vašoj mreži. Nikad se ne pokreće iz PartCraft-a: pokrenite ga na stroju kad je jasno. U pregledniku se gumb ne prikazuje (web stranica ne može doseći stroj u vašoj mreži): umjesto toga preuzmite program.
