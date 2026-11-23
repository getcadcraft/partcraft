---
title: Pravljenje putanja alata i G-koda (Proizvodnja)
summary: Postavite sirovac i radni početak, izaberite alate, dodajte operacije površi, džepa, konture, bušenja i obaranja ivice biranjem površi, završno obradite ceo model u 3D (paralelno, lučenje), simulirajte sirovac naspram modela zbog zadiranja i vremena ciklusa i preuzmite G-kod iz jednog od tri ugrađena postprocesora ili iz onog koji sami uredite.
keywords: tačan STEP, STEP za radionicu, radne koordinate, predaja CAM-u, paralelno, lučenje, 3D završna obrada, završna obrada, kuglasta glava, biblioteka alata, uredi postprocesor, prilagođeni postprocesor, uređivač postprocesora, prilagodljivo, prilagodljivo čišćenje, stalno angažovanje, trohoidno, hsm, glodanje velikim brzinama, proizvodnja, CAM, putanja alata, G-kod, NC, CNC, glodalica, glodanje, džep, kontura, profil, planiranje, bušenje, isprekidano bušenje, G83, G81, G73, obaranje ivice, sirovac, radni pomak, G54, postprocesor, GRBL, LinuxCNC, posmak i brzine, simulacija, zadiranje, vreme ciklusa
from: f8a03be8
---

Radni prostor Proizvodnja pretvara deo u putanje alata i zapisuje ih kao G-kod. Većina operacija je **2.5-osno** glodanje: alat ostaje uspravan, zidovi se seku pravo nadole, a dna ravno. **3D grubo** i **Ostatak** obrađuju zakrivljene delove u 3D ([3D grubo obrađivanje i obrada ostatka](topic:rough-3d)); **Paralelno** i **Lučenje** ih završno obrađuju ([3D završna obrada](topic:finish-3d)). Na mašini sa rotacionim osama bilo koja operacija može imati nagnut alat, a dve operacije pomeraju rotacione ose dok seku ([obrada na 4 i 5 osa](topic:multi-axis)). Postoje operacije za strug ([Struganje na strugu](topic:turning)) i za dodirnu sondu ([Sondiranje](topic:probing)). Radi na imenovanim površima koje jezgro mreže daje delu (vidi [Jezgro mreže](topic:solid-kernels)).

Laboratorijska verzija: proverite svaki program u simulatoru vašeg upravljača i najpre ga pustite u vazduhu iznad sirovca.

## Postavka

1. Izaberite **Proizvodnja** u birač radnog prostora, pa {{ui:Nova postavka}}.
2. Na kartici **Postavka** izaberite:
   - **Osa alata (+Z)**: u kom pravcu alat ulazi u deo. Podrazumevano je svet +Y (gore u PartCraft-u); X mašine je tada X sveta, a Y mašine je −Z sveta.
   - **Radni početak (G54)**: ugao ili centar sirovca, vrh ili dno, centar gornje strane modela ili početak modela.
   - **Sirovac**: kvadar ili valjak, ili model uvećan za pomeranja (strane, vrh, dno) ili fiksna veličina.
   - **Materijal** (postavlja početne posmake i brzine), **postprocesor** (upravljač), najveća brzina vretena mašine, brzina brzog hoda i vreme zamene alata, rashladna tečnost i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravne, kuglaste i zaobljene glodalice, svrdla, glodalice za obaranje ivica i čeone glodalice, svaka sa T brojem, prečnikom, brojem zubaca i dužinom zubaca (plus poluprečnik ugla, ugao vrha ili obaranja gde se primenjuje).

Moji alati mogu se sačuvati u pregledaču i preneti između računara kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × prečnik), posmak = n × broj zubaca × debljina strugotine (svrdla: n × posmak po obrtaju). Brojevi su oprezne početne vrednosti iz objavljenih opsega, nisu podešeni za vašu mašinu; upišite brzinu rezanja, debljinu strugotine, rpm ili posmak proizvođača alata da biste ih zamenili. Kada brzina pređe najveću vrednost mašine, zadržava se na njoj, a posmak prati, održavajući debljinu strugotine.

## Dodavanje operacija

Svako dugme na traci dodaje operaciju i, tamo gde joj treba geometrija, počinje biranje: kliknite površi ili ivice u prikazu (ponovni klik ukida jednu), zatim {{ui:Završi izbor}} ili {{key:Esc}}.

| Operacija | Izbor | Šta radi |
|---|---|---|
| {{ui:Površ}} | ništa | Cik-cak prolazi preko celog sirovca, preko njegovih ivica, do vrha modela |
| {{ui:Džep}} | ravnu površ dna, okruglu rupu ili zatvoreni lanac ivica | Čisti područje pomaknutim prolazima od unutra ka spolja, na svakom koraku dubine; ostrva (površi koje se dižu unutar dna) ostaju; dno otvoreno sa svih strana (ništa više spolja) čisti se do ivice sirovca |
| {{ui:Adaptivno}} | isto kao za Džep | Čisti isto područje prolazima koji seku zadatu širinu (**Angažovanje**, deo prečnika), tako da glodalo nikad ne uzme žleb pune širine, čak ni u uglovima; ulazi spiralom i završava zidove na svakom nivou. Uske reze dozvoljavaju dublji korak i veći posmak |
| {{ui:Kontura}} | ravnu površ (njen obris), okruglu površ ili ivice | Prati obris pomaknut za poluprečnik alata, spolja ili iznutra, sa lukovima za ulaz i izlaz i opcionim jezičcima |
| {{ui:Bušenje}} | rupe (kliknite zid rupe ili njen obod) | Buši svaku rupu fiksnim ciklusom: isprekidano bušenje (G83), bušenje (G81) ili lomljenje strugotine (G73); ili zadajte prečnik da se izbuše sve rupe te veličine |
| {{ui:Obaranje ivice}} | obris ili ivice površi | Vodi glodalo za obaranje ivice duž ivice tako da seče širinu koju zadate |
| {{ui:Paralelno}} | ništa (ceo model) | 3D završna obrada paralelnim linijama pod bilo kojim uglom, prateći površinu kuglastim, zaobljenim ili ravnim glodalom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Lučenje}} | ništa (ceo model) | 3D završna obrada prolazima na zadatom rastojanju preko površine, tako da greben između njih ima visinu koju tražite |

Izaberite operaciju na spisku da promenite njen alat, visine (zazor, uvlačenje, visina posmaka, vrh, dno), korak dubine, korak prelaza, ostavljeni višak, prolaz završne obrade, ulaz (spirala, rampa ili uranjanje), glodanje u istom smeru, jezičce ili ciklus. {{ui:Gore}} i {{ui:Dole}} menjaju redosled, {{ui:Isključi}} je izostavlja, {{ui:Izbriši}} je uklanja. Sve je u istoriji poništavanja i sačuvano je u datoteci dela.

Korak prelaza džepa je najviše polovina prečnika alata, pa je svaka tačka njegovog dna unutar jednog poluprečnika alata od prolaza. Unutrašnji uglovi zadržavaju poluprečnik alata.

**Prilagodljivo čišćenje** održava angažovanje glodala blizu jedne vrednosti. Angažovanje od 0.15 prečnika je ugao angažovanja od oko 46°: luk ivice glodala u materijalu. Pomaknuti džep, nasuprot tome, seče punu širinu na prvom prolazu i obilazi dalje u svakom unutrašnjem uglu. Između prolaza alat ostaje spušten tamo gde prolazi kroz isečeni vazduh, a inače se podiže i spušta u isečenom vazduhu. Prolazi se računaju na finoj mreži preko područja (ćelije oko dvanaestine poluprečnika alata), pa angažovanje može biti za oko jednu ćeliju šire od zadatog; zidovi se završavaju tačno. Veliko otvoreno područje pravi dugačak program sa mnogo kratkih kretanja.

## Simulacija

Putanje alata se ponovo prave posle svake promene (i one dela). {{ui:Simuliraj}} takođe prikazuje sirovac koji ostaje posle celog programa. Panel prikazuje:

- **Vreme ciklusa**: radna kretanja po svom posmaku, brzi hodovi kao prave linije po brzini brzog hoda iz postavke, plus vreme zamene alata. Prave mašine ubrzavaju, pa traju duže.
- **Zadiranja**: mesta gde je alat otišao više od 0.02 mm ispod površine dela. Crvene oznake ih prikazuju u prikazu.
- **Sirovac koji ostaje na delu**.

Sirovac je mapa visina vrha (Z-mapa), pa ne može da prikaže podsečenja. Prevucite **Reprodukcija** da pomerate alat duž programa. U prikazu su radna kretanja puna, a brzi hodovi isprekidani, jedna boja po operaciji.

Kada je uključeno **Prikaži simulirani sirovac**, sirovac se boji u odnosu na model, ćeliju po ćeliju: **zeleno** gde je na modelu (u granici 0.02 mm), **crveno** gde je alat zasekao model, a gde sirovac ostaje na modelu **žuto** za tanku koru, **narandžasto** za više, postepeno prelazeći u **sivo** neobrađenog sirovca na 1 mm ili više. Boje se ponovo prave pri svakoj promeni, iz iste mape visina kao brojevi u panelu, pa se zeleno i crveno slažu sa linijom Zadiranja. Obaranje ivice namerno seče model i pokazuje crveno duž svoje ivice.

## Postprocesiranje G-koda

Izaberite upravljač pod **Postprocesor** i pritisnite {{ui:Preuzmi G-kod}} (ili {{ui:Postprocesor}} na traci):

| Upravljač | Datoteka | Napomene |
|---|---|---|
| Fanuc-stil ISO | .nc | %, O broj, brojevi redova, T M6 sa G43 H, fiksni ciklusi |
| GRBL | .nc | Nema menjača alata ni fiksnih ciklusa: zamena alata pauzira sa M0, bušenje se piše kao obična kretanja |
| LinuxCNC | .ngc | T M6 sa G43 H, fiksni ciklusi, M2 |
| Fanuc-stil strug | .nc | Za programe struganja: X kao prečnik, posmak po obrtaju, G96 uz G50 ograničenje, G32 navoj |
| LinuxCNC strug | .ngc | Za programe struganja: G7 prečnici, G95, G96, G33 navoj; ne piše kretanje na početnu poziciju |
| Sopstveni | bilo koja | Postprocesor koji ste napisali ili izmenili: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, sirovac, radni pomak i alate. Koordinate su u milimetrima sa 3 decimale. {{ui:CSV putanje alata}} i {{ui:JSON putanje alata}} izvoze same pokrete.

**Proverite izlaz u simulatoru vaše mašine pre sečenja i najpre ga pustite u vazduhu iznad sirovca.** Tri ugrađena postprocesora su polazne tačke koje prate dokumentovano ponašanje upravljača; nisu dokazana ni na jednoj konkretnoj mašini. Postprocesor koji izmenite je vaš da dokažete. Kako ga napisati: [Postprocesori koje možete menjati](topic:post-processors).

## Tačan STEP za radionicu

Ispod dugmadi G-koda na kartici **Operacije**, {{ui:Tačan STEP (radne koordinate)}} preuzima `<part>-work.step`: deo kao tačno puno telo (prave cilindre za rupe i izbočine, prave krugove za njihove ivice), sa početkom u radnom početku ove postavke i Z duž ose alata. To su koordinate koje G-kod koristi, pa radionički sopstveni CAM program ili kontrolor poravnava model sa programom bez pomeranja. Datoteka sadrži samo deo, ne sirovac ni putanje alata.

{{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} piše isto telo u sopstvenom položaju dela (Z gore): vidi [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i obaranje ivica su 2.5-osni. Zakrivljene delove grubo obrađuju i završno obrađuju u 3D njihove sopstvene operacije ([3D grubo obrađivanje i obrada ostatka](topic:rough-3d), [3D završna obrada](topic:finish-3d)). Prilagodljivo čišćenje je 2D (ravna dna).
- Nagnuti alati, 5-osna i 4-osna završna obrada, struganje i sondiranje su tu, svaki sa sopstvenim ograničenjima, i **nijedan nije pušten na mašini**: vidi [Obrada na 4 i 5 osa](topic:multi-axis), [Struganje na strugu](topic:turning) i [Sondiranje](topic:probing).
- Držači i drške se ne proveravaju na sudare; upozorenje se pojavi kada je rez dublji od dužine zubaca.
- Posmaci i brzine su početne vrednosti. Postprocesor je tekst koji možete menjati, ali samo odlučuje kako se pokreti pišu; ne može da promeni putanju alata, doda ose ili zna vašu mašinu ([Postprocesori](topic:post-processors) navodi šta ne može).

## Slanje programa na mašinu

U CadCraft Studio na radnoj površini, sa mašinom podešenom u Studiju, **Pošalji na mašinu…** se pojavljuje pored {{ui:Preuzmi G-kod}} i šalje isti program mašini u vašoj mreži. Nikad se ne pokreće iz PartCraft-a: pokrenite ga na mašini kada je jasno. U pregledaču dugme se ne prikazuje (veb stranica ne može da dostigne mašinu u vašoj mreži): umesto toga preuzmite program.
