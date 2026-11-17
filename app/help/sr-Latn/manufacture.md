---
title: Pravi putanje alata i G-kod (Obrada)
summary: Postavite sirovinu i radnu nulu, izaberite alate, dodajte operacije ravni, džep, konturu, bušenje i obaranje ivice birajući površi, završite ceo model u 3D (paralelno, lučenje), simulirajte sirovinu naspram modela radi grešaka i vremena ciklusa, i preuzmite G-kod iz jednog od tri ugrađena postprocesora ili onog koji sami uredite.
keywords: tačan STEP, STEP za radionicu, radne koordinate, CAM predaja, paralelno, lučenje, 3D završna obrada, završna obrada, kuglasta glava, biblioteka alata, uredi postprocesor, prilagođeni postprocesor, uređivač postprocesora, adaptivno, adaptivno čišćenje, konstantan angažman, trohoidalno, hsm, obrada velikom brzinom, obrada, CAM, putanja alata, G-kod, NC, CNC, glodanje, džep, kontura, profil, planiranje, bušenje, peck, G83, G81, G73, obaranje ivice, sirovina, radni pomak, G54, postprocesor, GRBL, LinuxCNC, posmak i brzina, simulacija, greška rezanja, vreme ciklusa
from: beeb29aa
---

Radni prostor Obrada pretvara deo u putanje alata za tronosu glodalicu i piše ih kao G-kod. Većina operacija je **2.5-osna**: alat ostaje uspravan, zidovi se seku ravno nadole, a podovi ravno. **Paralelno** i **Lučenje** završno obrađuju zakrivljene površi u 3D (vidi [3D završna obrada](topic:finish-3d)); alat i dalje ostaje uspravan (tri ose, bez naginjanja). Radi nad imenovanim površima koje jezgro mreže daje delu (vidi [Jezgro mreže](topic:solid-kernels)).

Laboratorijska verzija: proverite svaki program u sopstvenom simulatoru upravljača, i prvo ga pokrenite u vazduhu iznad sirovine.

## Podešavanje

1. Izaberite **Obrada** u prebacivaču radnih prostora, pa {{ui:Nova postavka}}.
2. Na kartici **Postavka** izaberite:
   - **Osa alata (+Z)**: u kom smeru alat ulazi u deo. Svet +Y (gore u PartCraft-u) je podrazumevan; X mašine je tada X sveta, a Y mašine je −Z sveta.
   - **Radna nula (G54)**: ugao ili centar sirovine, gornja ili donja strana, gornji centar modela ili nula modela.
   - **Sirovina**: kutija ili valjak, ili model plus dodaci (bokovi, vrh, dno) ili fiksna veličina.
   - **Materijal** (postavlja početne posmake i brzine), **postprocesor** (upravljač), maksimalnu brzinu vretena mašine, brzinu brzog hoda i vreme promene alata, rashladnu tečnost i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravne, kuglaste i glodalice sa zaobljenim vrhom, bušilice, glodalice za obaranje ivica i čeone glodalice, svaka sa T brojem, prečnikom, brojem žlebova i dužinom žleba (plus radijus ugla, ugao vrha ili obaranja gde se primenjuje).

Moji alati mogu da se sačuvaju u pregledaču i prenesu između računara kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × prečnik), posmak = n × broj žlebova × opterećenje čipa (bušilice: n × posmak po obrtaju). Brojevi su konzervativne početne vrednosti iz objavljenih opsega, nisu podešene za vašu mašinu; ukucajte brzinu rezanja, opterećenje čipa, o/min ili posmak proizvođača alata da ih prepišete. Kada brzina pređe maksimum mašine, drži se tu, a posmak prati, održavajući opterećenje čipa.

## Dodajte operacije

Svako dugme na traci dodaje operaciju i, gde treba geometrija, počinje biranje: kliknite površi ili ivice u prikazu (kliknite ponovo da izbacite jednu), pa {{ui:Završi izbor}} ili {{key:Esc}}.

| Operacija | Izbor | Šta radi |
|---|---|---|
| {{ui:Površ}} | ništa | Cik-cak prolazi preko cele sirovine, pored njenih ivica, do vrha modela |
| {{ui:Džep}} | ravna površ poda, okrugla rupa ili zatvoren lanac ivica | Čisti oblast ofset prolazima iznutra ka spolja, na svakom spuštanju; ostrva (površi koje stoje uspravno unutar poda) ostaju; pod otvoren sa svih strana (ništa više spolja) čisti se do ivice sirovine |
| {{ui:Adaptivno}} | isto kao Džep | Čisti istu oblast u prolazima od kojih svaki seče zadatu širinu (**Angažman**, deo prečnika), pa rezač nikad ne uzima punu širinu žleba, čak ni u uglovima; ulazi heliksom i završava zidove na svakom nivou. Uski rezovi dozvoljavaju dublje spuštanje i veći posmak |
| {{ui:Kontura}} | ravna površ (njen obris), okrugla površ ili ivice | Prati obris ofsetovan poluprečnikom alata, spolja ili iznutra, sa lučnim ulaznim i izlaznim lukovima i opcionim mostovima |
| {{ui:Bušenje}} | rupe (kliknite zid rupe ili njen obod) | Buši svaku rupu gotovim ciklusom: peck (G83), bušenje (G81) ili prelom čipa (G73); ili zadajte prečnik da izbušite svaku rupu te veličine |
| {{ui:Obaranje ivice}} | obris površi ili ivice | Vodi glodalicu za obaranje ivice duž ivice tako da seče širinu koju postavite |
| {{ui:Paralelno}} | ništa (ceo model) | 3D završna obrada paralelnim linijama pod bilo kojim uglom, prateći površ kuglastom, zaobljenom ili ravnom glodalicom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Lučenje}} | ništa (ceo model) | 3D završna obrada u prolazima na zadatom razmaku preko površi, tako da greben između njih ima visinu koju tražite |

Izaberite operaciju u listi da promenite njen alat, visine (zazor, uvlačenje, visina posmaka, vrh, dno), spuštanje, korak, sirovinu koju ostavljate, završni prolaz, ulaz (heliks, rampa ili uron), glodanje u penjanju, mostove ili ciklus. {{ui:Gore}} i {{ui:Dole}} menjaju redosled, {{ui:Isključi}} je isključuje, {{ui:Izbriši}} je uklanja. Sve je u istoriji opozivanja i sačuvano u datoteci dela.

Korak džepa je najviše polovina prečnika alata, pa je svaka tačka njegovog poda unutar jednog poluprečnika alata od prolaza. Unutrašnji uglovi zadržavaju poluprečnik alata.

**Adaptivno čišćenje** održava angažman rezača blizu jedne vrednosti. Angažman od 0.15 prečnika je ugao angažovanja od oko 46°: luk ivice rezača u materijalu. Ofset džep, nasuprot tome, seče punu širinu u prvom prolazu i obilazi dalje u svakom unutrašnjem uglu. Između prolaza alat ostaje spušten dok se kreće kroz već isečen vazduh, a inače se podiže i spušta u isečenom vazduhu. Prolazi se računaju na finoj mreži preko oblasti (ćelije oko dvanaestine poluprečnika alata), pa angažman može biti širi do oko jedne ćelije od zadatog; zidovi se završavaju tačno. Velika otvorena oblast pravi dug program sa mnogo kratkih pomeranja.

## Simulacija

Putanje alata se ponovo prave posle svake promene (i delova). {{ui:Simuliraj}} takođe prikazuje sirovinu koja ostaje posle celog programa. Panel prikazuje:

- **Vreme ciklusa**: radna kretanja po svom posmaku, brza kretanja kao prave linije pri brzini brzog hoda iz postavke, plus vreme promene alata. Prave mašine ubrzavaju, pa traju duže.
- **Greške rezanja**: mesta gde je alat prošao više od 0.02 mm ispod površine dela. Crvene oznake ih prikazuju u prikazu.
- **Sirovina koja ostaje na delu**.

Sirovina je mapa visina vrha (Z-mapa), pa ne može da prikaže podrezivanja. Prevucite **Reprodukcija** da pomerate alat duž programa. U prikazu, radna kretanja su puna, a brza isprekidana, jedna boja po operaciji.

Uz uključeno **Prikaži simuliranu sirovinu**, sirovina se boji u odnosu na model, ćeliju po ćeliju: **zeleno** gde je na modelu (unutar 0.02 mm), **crveno** gde je alat zaseko u model, a gde sirovina ostaje na modelu **žuto** za tanak sloj, **narandžasto** za više, prelazeći u **sivo** netaknute sirovine na 1 mm ili više. Boje se ponovo prave pri svakoj promeni, iz iste mape visina kao i brojevi u panelu, pa se zeleno i crveno slažu sa redom Greške rezanja. Obaranje ivice namerno seče u model i duž svoje ivice prikazuje crveno.

## Postprocesiranje G-koda

Izaberite upravljač pod **Postprocesor** i pritisnite {{ui:Preuzmi G-kod}} (ili {{ui:Postprocesor}} na traci):

| Upravljač | Datoteka | Napomene |
|---|---|---|
| Fanuc-stil ISO | .nc | %, O broj, brojevi redova, T M6 sa G43 H, gotovi ciklusi |
| GRBL | .nc | Nema menjača alata ni gotovih ciklusa: promena alata pauzira sa M0, bušenje se piše kao obična kretanja |
| LinuxCNC | .ngc | T M6 sa G43 H, gotovi ciklusi, M2 |
| Sopstveni | bilo koja | Postprocesor koji ste napisali ili izmenili: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, sirovinu, radni pomak i alate. Koordinate su u milimetrima sa 3 decimale. {{ui:CSV putanje alata}} i {{ui:JSON putanje alata}} izvoze same pokrete.

**Proverite izlaz u sopstvenom simulatoru mašine pre sečenja, i prvo ga pokrenite u vazduhu iznad sirovine.** Tri ugrađena postprocesora su polazne tačke koje prate dokumentovano ponašanje upravljača; nisu dokazane ni na jednoj konkretnoj mašini. Postprocesor koji izmenite je vaš da ga dokažete. Kako ga napisati: [Postprocesori](topic:post-processors).

## Tačan STEP za radionicu

Ispod dugmadi za G-kod na kartici **Operacije**, {{ui:Tačan STEP (radne koordinate)}} preuzima `<part>-work.step`: deo kao tačno čvrsto telo (pravi cilindri za rupe i izbočine, prave kružnice za njihove ivice), sa nulom u radnoj nuli ove postavke i Z duž ose alata. To su koordinate koje koristi G-kod, pa CAM program ili provera radionice poravnava model sa programom bez pomeranja. Datoteka sadrži samo deo, ne sirovinu ili putanje alata.

{{ui:Izvezi}} › {{ui:STEP AP242 (tačno čvrsto telo)}} upisuje isto telo na sopstvenom položaju dela (Z gore): vidi [Izvoz za štampu, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i obaranje ivica su 2.5-osni. Zakrivljene površi mogu da se završno obrade u 3D ([paralelno i lučenje](topic:finish-3d)), ali ne i grubo obrade u 3D (konus ostaje kao stepenice dok ga ne završite), i nema obrade ostatka. Adaptivno čišćenje je 2D (ravni podovi).
- Samo tri ose: bez naginjanja, bez struganja, bez kontrole.
- Držači i drške se ne proveravaju na sudare; upozorenje se pojavljuje kada je rez dublji od dužine žleba.
- Posmaci i brzine su početne vrednosti. Postprocesor je tekst koji možete uređivati, ali samo odlučuje kako se pokreti pišu; ne može da promeni putanju alata, doda ose ili zna vašu mašinu ([Postprocesori](topic:post-processors) navodi šta ne može).

## Pošaljite program mašini

U CadCraft Studio na računaru, sa mašinom podešenom u Studio-u, **Pošalji mašini…** se pojavljuje pored **Preuzmi G-kod** i otprema isti program na mašinu u vašoj mreži. Nikad se ne pokreće iz PartCraft-a: pokrenite ga na mašini kada je jasno. U pregledaču dugme se ne prikazuje (veb stranica ne može da dođe do mašine u vašoj mreži): umesto toga preuzmite program.
