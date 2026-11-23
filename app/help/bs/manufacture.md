---
title: Izradi putanje alata i G-kod (Izrada)
summary: Postavi sirovac i radni početak, izaberi alate, dodaj operacije lica, džepa, konture, bušenja i skošenja odabirom površina, završi cijeli model u 3D (paralelno, scallop), simuliraj sirovac naspram modela radi urezivanja i vremena ciklusa, i preuzmi G-kod s jednog od tri ugrađena postprocesora ili onog koji sami uredite.
keywords: exact step, step za radionicu, radne koordinate, cam predaja, paralelno, scallop, 3d završna obrada, završna obrada, kuglasto glodalo, biblioteka alata, uredi postprocesor, prilagođeni postprocesor, uređivač postprocesora, adaptive, adaptivno čišćenje, konstantan angažman, trochoidal, hsm, glodanje velikom brzinom, izrada, CAM, putanja alata, G-kod, NC, CNC, glodalica, glodanje, džep, kontura, profil, planiranje lica, bušenje, peck, G83, G81, G73, skošenje, sirovac, pomak radnog koordinatnog sistema, G54, postprocesor, GRBL, LinuxCNC, brzine i posmaci, simulacija, urezivanje, vrijeme ciklusa
from: f8a03be8
---

Radni prostor Izrada pretvara dio u putanje alata i zapisuje ih kao G-kod. Većina operacija je **2,5-osno** glodanje: alat ostaje vertikalan, zidovi se režu ravno dolje, a podovi su ravni. **3D grubo** i **{{ui:Ostatak}}** čiste zakrivljene dijelove u 3D ([3D grubo obrađivanje i obrada preostalog materijala](topic:rough-3d)); **{{ui:Paralelno}}** i **{{ui:Scallop}}** ih završavaju ([3D završna obrada](topic:finish-3d)). Na mašini s rotacionim osama bilo koja operacija može imati nagnut alat, a dvije operacije pomjeraju rotacione ose dok režu ([4- i 5-osna obrada](topic:multi-axis)). Postoje operacije za tokarilicu ([Struganje](topic:turning)) i za dodirnu sondu ([Sondiranje](topic:probing)). Radi na imenovanim površinama koje mrežni kernel daje dijelu (vidi [Mrežni kernel](topic:solid-kernels)).

Laboratorijska verzija: provjerite svaki program u simulatoru vaše upravljačke jedinice i prvo ga pustite u zraku iznad sirovca.

## Postavljanje

1. Izaberite **Izrada** u prekidaču radnog prostora, zatim {{ui:Novo podešavanje}}.
2. Na kartici **Podešavanje** izaberite:
   - **Osa alata (+Z)**: u kojem smjeru alat ulazi u dio. Svjetski +Y (gore u PartCraftu) je zadano; tada je mašinski X svjetski X, a mašinski Y je svjetski −Z.
   - **Radni početak (G54)**: ugao ili centar sirovca, gornja ili donja strana, gornji centar modela ili početak modela.
   - **Sirovac**: kocka ili valjak, bilo model plus dodaci (strane, vrh, dno) ili fiksna veličina.
   - **Materijal** (postavlja početne brzine i posmake), **postprocesor** (upravljačka jedinica), maksimalnu brzinu vretena mašine, brzi hod i vrijeme promjene alata, rashladno sredstvo i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravna, kuglasta i polukružna glodala, bušilice, glodala za skošenje i čeona glodala, svako s T brojem, prečnikom, žlijebovima i dužinom žlijeba (plus poluprečnik ugla, vrh ili ugao skošenja gdje se primjenjuju).

Moji alati mogu se sačuvati u pregledaču i prenositi između računara kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × prečnik), posmak = n × broj žlijebova × debljina strugotine (bušilice: n × posmak po okretaju). Brojevi su oprezne početne vrijednosti iz objavljenih raspona, nisu podešene za vašu mašinu; unesite brzinu rezanja, debljinu strugotine, o/min ili posmak vašeg proizvođača alata da ih zamijenite. Kad brzina pređe maksimum mašine, zadržava se na njemu, a posmak je prati, čime se održava debljina strugotine.

## Dodavanje operacija

Svako dugme na alatnoj traci dodaje operaciju i, gdje treba geometriju, počinje odabir: kliknite površine ili ivice u prikazu (ponovo kliknite da ih ukinete), zatim {{ui:Završi odabir}} ili {{key:Esc}}.

| Operacija | Odabir | Šta radi |
|---|---|---|
| {{ui:Površina}} | ništa | Zig-zag prolazi preko cijelog sirovca, preko njegovih ivica, do gornje strane modela |
| {{ui:Džep}} | ravna donja površina, okrugla rupa ili zatvoren lanac ivica | Čisti područje ofset prolazima iznutra prema van, na svakom koraku dubine; ostrva (površine koje stoje unutar dna) ostaju; dno otvoreno sa svih strana (ništa više izvan njega) čisti se do ivice sirovca |
| {{ui:Adaptivno}} | isto kao Džep | Čisti isto područje prolazima od kojih svaki reže zadanu širinu (**Angažman**, dio prečnika), tako da glodalo nikad ne uzme puni utor, ni u uglovima; ulazi heliksom i završava zidove na svakom nivou. Uski rezovi dozvoljavaju dublji korak i veći posmak |
| {{ui:Kontura}} | ravna površina (njen obris), okrugla površina ili ivice | Prati obris ofsetovan poluprečnikom alata, spolja ili iznutra, s lučnim ulaskom i izlaskom i opcionim držačima |
| {{ui:Bušenje}} | rupe (kliknite zid ili obod rupe) | Buši svaku rupu standardnim ciklusom: isprekidano (G83), bušenje (G81) ili lomljenje strugotine (G73); ili zadajte prečnik da izbušite svaku rupu te veličine |
| {{ui:Skošenje}} | obris površine ili ivice | Vodi glodalo za skošenje duž ivice tako da reže širinu koju postavite |
| {{ui:Paralelno}} | ništa (cijeli model) | 3D završna obrada paralelnim linijama pod bilo kojim uglom, prateći površinu kuglastim, polukružnim ili ravnim glodalom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Scallop}} | ništa (cijeli model) | 3D završna obrada u prolazima na zadanoj udaljenosti preko površine, tako da greben između njih ima visinu koju tražite |

Izaberite operaciju na listi da promijenite njen alat, visine (zazor, uvlačenje, visinu posmaka, vrh, dno), korak dubine, korak, materijal za ostavljanje, završni prolaz, ulazak (heliks, rampa ili uranjanje), glodanje u smjeru posmaka, držače ili ciklus. {{ui:Gore}} i {{ui:Dolje}} mijenjaju redoslijed, {{ui:Isključi}} je izostavlja, {{ui:Izbriši}} je uklanja. Sve je u historiji poništavanja i čuva se u datoteci dijela.

Korak džepa je najviše polovina prečnika alata, pa je svaka tačka njegovog dna unutar jednog poluprečnika alata od nekog prolaza. Unutrašnji uglovi zadržavaju poluprečnik alata.

**Adaptivno čišćenje** održava angažman glodala blizu jedne vrijednosti. Angažman od 0,15 prečnika je ugao angažmana od oko 46°: luk ivice glodala u materijalu. Ofset džep, nasuprot tome, reže punu širinu na prvom prolazu i obuhvata još više u svakom unutrašnjem uglu. Između prolaza alat ostaje spušten gdje prolazi kroz rezani zrak, a podiže se i spušta u rezanom zraku drugdje. Prolazi se računaju na finoj mreži preko područja (ćelije oko dvanaestine poluprečnika alata), pa angažman može biti širi od zadanog za oko jednu ćeliju; zidovi se završavaju tačno. Veliko otvoreno područje daje dug program s mnogo kratkih pomaka.

## Simulacija

Putanje se ponovo prave nakon svake promjene (i dijela). {{ui:Simuliraj}} takođe prikazuje sirovac koji ostaje nakon cijelog programa. Panel prikazuje:

- **Vrijeme ciklusa**: pomaci posmaka na svom posmaku, brzi hodi kao prave linije na brzini hoda iz podešavanja, plus vrijeme promjene alata. Prave mašine ubrzavaju, pa traju duže.
- **Urezivanja**: mjesta gdje je alat otišao više od 0,02 mm ispod površine dijela. Crvene oznake ih prikazuju u prikazu.
- **Materijal koji ostaje na dijelu**.

Sirovac je mapa visina vrha (Z-mapa), pa ne može prikazati podreze. Povucite **Reprodukcija** da pomjerate alat duž programa. U prikazu su pomaci posmaka puni, a brzi hodi isprekidani, s jednom bojom po operaciji.

Kad je uključeno **Prikaži simulirani sirovac**, sirovac se boji naspram modela, ćeliju po ćeliju: **zeleno** gdje je na modelu (unutar 0,02 mm), **crveno** gdje je alat zašao u model, a gdje materijal ostaje na modelu **žuto** za tanku kožu, **narandžasto** za više, prelazeći u **sivo** neobrađenog sirovca na 1 mm ili više. Boje se ponovo prave pri svakoj promjeni, iz iste mape visina kao brojevi u panelu, pa se zeleno i crveno slažu s redom Urezivanja. Skošenje namjerno zalazi u model i na svojoj ivici prikazuje crveno.

## Postprocesiranje G-koda

Izaberite upravljačku jedinicu pod **Post-procesor** i pritisnite {{ui:Preuzmi G-kod}} (ili {{ui:Post-procesor}} na alatnoj traci):

| Upravljačka jedinica | Datoteka | Napomene |
|---|---|---|
| Fanuc-style ISO | .nc | %, O broj, brojevi redova, T M6 s G43 H, standardni ciklusi |
| GRBL | .nc | Nema mijenjača alata ni standardnih ciklusa: promjena alata pauzira s M0, bušenje je zapisano kao obični pomaci |
| LinuxCNC | .ngc | T M6 s G43 H, standardni ciklusi, M2 |
| Tokarilica tipa Fanuc | .nc | Za programe struganja: X kao prečnik, posmak po okretaju, G96 pod ograničenjem G50, G32 navoj |
| LinuxCNC tokarilica | .ngc | Za programe struganja: G7 prečnici, G95, G96, G33 navoj; ne zapisuje pomak na početni položaj |
| Vaš vlastiti | bilo koja | Postprocesor koji ste napisali ili promijenili: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, sirovac, pomak radnog koordinatnog sistema i alate. Koordinate su u milimetrima s 3 decimale. {{ui:Toolpath CSV}} i {{ui:Toolpath JSON}} izvoze same pomake.

**Provjerite izlaz u simulatoru vaše mašine prije rezanja i prvo ga pustite u zraku iznad sirovca.** Tri ugrađena postprocesora su polazne tačke koje slijede dokumentovano ponašanje upravljačkih jedinica; nisu dokazana ni na jednoj konkretnoj mašini. Postprocesor koji promijenite je vaš i na vama je da ga dokažete. Kako ga napisati: [Postprocesori](topic:post-processors).

## Tačan STEP za radionicu

Ispod dugmadi G-koda na kartici **Operacije**, {{ui:Tačan STEP (radne koordinate)}} preuzima `<dio>-work.step`: dio kao tačno čvrsto tijelo (pravi valjci za rupe i izbočine, prave kružnice za njihove ivice) s početkom u radnom početku ovog podešavanja i Z duž osi alata. To su koordinate koje koristi G-kod, pa CAM program ili provjerivač radionice poravnava model s programom bez pomjeranja. Datoteka sadrži samo dio, bez sirovca i putanja alata.

{{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} zapisuje isto tijelo u vlastitom položaju dijela (Z gore): vidi [Izvoz za štampanje, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i skošenja su 2,5-osni. Zakrivljene dijelove grubo obrađuju i završavaju u 3D njihove vlastite operacije ([3D grubo obrađivanje i obrada preostalog materijala](topic:rough-3d), [3D završna obrada](topic:finish-3d)). Adaptivno čišćenje je 2D (ravna dna).
- Nagnuti alati, 5-osna i završna obrada 4. osom, struganje i sondiranje postoje, svako sa svojim ograničenjima, i **nijedno nije pokrenuto na mašini**: vidi [4- i 5-osna obrada](topic:multi-axis), [Struganje](topic:turning) i [Sondiranje](topic:probing).
- Držači i vrat alata se ne provjeravaju za sudare; upozorenje se pojavljuje kad je rez dublji od dužine žlijeba.
- Posmaci i brzine su početne vrijednosti. Postprocesor je tekst koji možete uređivati, ali samo odlučuje kako se pomaci zapisuju; ne može promijeniti putanju alata, dodati ose niti znati vašu mašinu ([Postprocesori](topic:post-processors) navodi šta ne može).

## Slanje programa na mašinu

U CadCraft Studiju na računaru, s mašinom podešenom u Studiju, {{ui:Pošalji na mašinu…}} se pojavljuje pored {{ui:Preuzmi G-kod}} i šalje isti program na mašinu u vašoj mreži. Nikad se ne pokreće iz PartCrafta: pokrenite ga na mašini kad je jasno da je sve spremno. U pregledaču dugme se ne prikazuje (web stranica ne može doći do mašine u vašoj mreži): umjesto toga preuzmite program.
