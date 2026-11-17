---
title: Napravi putanje alata i G-kod (Manufacture)
summary: Postavi pripremak i radni ishodište, izaberi alate, dodaj operacije površine, džepa, konture, bušenja i skošenja biranjem površina, završi cijeli model u 3D (paralelno, scallop), simuliraj pripremak naspram modela zbog grešaka i vremena ciklusa, i preuzmi G-kod iz jednog od tri ugrađena posta ili onog koji sam uređuješ.
keywords: tačan STEP, STEP za radionicu, radne koordinate, CAM predaja, paralelno, scallop, 3D završna obrada, završna obrada, kuglasta glava, biblioteka alata, uredi post, prilagođeni post, uređivač posta, adaptivno, adaptivno čišćenje, konstantno angažovanje, trohoidalno, hsm, obrada velikim brzinama, manufacture, CAM, putanja alata, G-kod, NC, CNC, glodalica, glodanje, džep, kontura, profil, planiranje, bušenje, peck, G83, G81, G73, skošenje, pripremak, radni ofset, G54, post procesor, GRBL, LinuxCNC, posmak i brzine, simulacija, zarez, vrijeme ciklusa
from: beeb29aa
---

Radni prostor Manufacture pretvara dio u putanje alata za glodalicu sa tri ose i upisuje ih kao G-kod. Većina operacija je **2.5-osna**: alat ostaje vertikalan, zidovi se režu ravno dolje, a podovi ravno. **Paralelno** i **Scallop** završavaju zakrivljene površine u 3D (vidi [3D završna obrada](topic:finish-3d)); alat i dalje ostaje vertikalan (tri ose, bez naginjanja). Radi nad imenovanim površinama koje mesh kernel daje dijelu (vidi [Mesh kernel](topic:solid-kernels)).

Probna verzija: provjeri svaki program u simulatoru svog upravljača i prvo ga pokreni u zraku iznad pripremka.

## Postavljanje

1. Odaberi **Manufacture** u prebacivaču radnog prostora, zatim {{ui:Novo podešavanje}}.
2. Na kartici **Podešavanje** odaberi:
   - **Osa alata (+Z)**: u kom smjeru alat ulazi u dio. Svijet +Y (gore u PartCraft-u) je podrazumijevan; X mašine je tada X svijeta, a Y mašine je −Z svijeta.
   - **Radni ishodište (G54)**: ugao ili centar pripremka, gore ili dolje, gornji centar modela ili ishodište modela.
   - **Pripremak**: kutija ili valjak, ili model plus odmaci (bočno, gore, dolje) ili fiksna veličina.
   - **Materijal** (postavlja početne posmake i brzine), **post** (upravljač), maksimalnu brzinu vretena mašine, brzinu brzog hoda i vrijeme promjene alata, rashladno sredstvo i broj programa.

## Alati

Kartica **Alati** sadrži biblioteku: ravne, kuglaste i bull nose glodalice, burgije, glodalice za skošenje i čeone glodalice, svaka sa T brojem, prečnikom, brojem žljebova i dužinom žljeba (plus radijus ugla, ugao vrha ili skošenja gdje se primjenjuje).

Moji alati mogu se sačuvati u pretraživaču i prenijeti između računara kao datoteka: vidi [Biblioteka alata](topic:tool-library).

Brzina vretena i posmak dolaze iz materijala: n = 1000 × brzina rezanja / (π × prečnik), posmak = n × žljebovi × opterećenje strugotine (burgije: n × posmak po okretaju). Brojevi su konzervativne početne vrijednosti iz objavljenih opsega, nisu podešene za tvoju mašinu; upiši brzinu rezanja, opterećenje strugotine, o/min ili posmak proizvođača alata da ih prepišeš. Kad brzina pređe maksimum mašine, ostaje na njemu, a posmak prati, održavajući opterećenje strugotine.

## Dodaj operacije

Svako dugme na traci dodaje operaciju i, gdje treba geometriju, počinje odabir: klikni površine ili ivice u pogledu (klikni ponovo da ukloniš jednu), zatim {{ui:Završi odabir}} ili {{key:Esc}}.

| Operacija | Odabir | Šta radi |
|---|---|---|
| {{ui:Površina}} | ništa | Cik-cak prolazi preko cijelog pripremka, preko njegovih ivica, do gornje strane modela |
| {{ui:Džep}} | ravna površina poda, okrugla rupa, ili zatvoren lanac ivica | Čisti oblast prolazima ofseta iznutra prema van, na svakom koraku dubine; ostrva (površine koje stoje uzdignuto unutar poda) ostaju; pod otvoren sa svih strana (ništa više izvan njega) čisti se do ivice pripremka |
| {{ui:Adaptivno}} | isto kao Džep | Čisti istu oblast u prolazima od kojih svaki reže zadatu širinu (**Angažovanje**, dio prečnika), tako da se glodalo nikad ne zaglavi u punoj širini utora, ni u uglovima; ulazi heliksom i završava zidove na svakom nivou. Uski rezovi dozvoljavaju dublji korak i veći posmak |
| {{ui:Kontura}} | ravna površina (njen obris), okrugla površina, ili ivice | Prati obris ofsetovan radijusom alata, spolja ili iznutra, sa lukovima uvoda i izlaza i opcionim mostovima |
| {{ui:Bušenje}} | rupe (klikni zid rupe ili njen obod) | Buši svaku rupu ugrađenim ciklusom: peck (G83), bušenje (G81) ili lomljenje strugotine (G73); ili zadaj prečnik da izbuši svaku rupu te veličine |
| {{ui:Skošenje}} | obris površine ili ivice | Vodi glodalo za skošenje duž ivice tako da reže širinu koju postaviš |
| {{ui:Paralelno}} | ništa (cijeli model) | 3D završna obrada paralelnim linijama pod bilo kojim uglom, prateći površinu kuglastim, bull-nose ili ravnim glodalom. Vidi [3D završna obrada](topic:finish-3d) |
| {{ui:Scallop}} | ništa (cijeli model) | 3D završna obrada prolazima na zadatoj udaljenosti preko površine, tako da greben između njih ima visinu koju tražiš |

Odaberi operaciju na listi da promijeniš njen alat, visine (zazor, uvlačenje, visina posmaka, gore, dolje), korak dubine, korak bočno, pripremak koji ostaje, završni prolaz, ulaz (heliks, rampa ili uranjanje), glodanje u penjanju, mostove ili ciklus. {{ui:Gore}} i {{ui:Dolje}} mijenjaju redoslijed, {{ui:Isključi}} je izostavlja, {{ui:Izbriši}} je uklanja. Sve je u historiji poništavanja i sačuvano u datoteci dijela.

Korak bočno džepa je najviše pola prečnika alata, pa je svaka tačka njegovog poda unutar jednog radijusa alata od nekog prolaza. Unutrašnji uglovi zadržavaju radijus alata.

**Adaptivno čišćenje** održava angažovanje glodala blizu jedne vrijednosti. Angažovanje od 0.15 prečnika je ugao angažovanja oko 46°: luk ivice glodala u materijalu. Ofset džep, nasuprot tome, reže punu širinu na prvom prolazu i obuhvata se dalje u svakom unutrašnjem uglu. Između prolaza alat ostaje spušten dok se kreće kroz već isječen prostor, a inače se podiže i spušta u isječenom prostoru. Prolazi se računaju na finoj mreži preko oblasti (ćelije oko dvanaestine radijusa alata), pa angažovanje može biti do oko jedne ćelije šire od zadatog; zidovi se završavaju tačno. Velika otvorena oblast pravi dug program sa mnogo kratkih kretanja.

## Simuliraj

Putanje se ponovo prave nakon svake promjene (i dijela). {{ui:Simuliraj}} takođe prikazuje pripremak koji ostaje nakon cijelog programa. Panel prikazuje:

- **Vrijeme ciklusa**: posmačna kretanja pri svom posmaku, brza kretanja kao prave linije pri brzini brzog hoda podešavanja, plus vrijeme promjene alata. Prave mašine ubrzavaju, pa traju duže.
- **Zarezi**: mjesta gdje je alat išao više od 0.02 mm ispod površine dijela. Crvene oznake ih prikazuju u pogledu.
- **Pripremak koji ostaje na dijelu**.

Pripremak je mapa visina gornje strane (Z-mapa), pa ne može prikazati podreze. Prevuci **Reprodukcija** da pomjeriš alat duž programa. U pogledu, posmačna kretanja su puna, a brza isprekidana, jedna boja po operaciji.

Uz uključeno **Prikaži simulirani pripremak**, pripremak je obojen naspram modela, ćelija po ćelija: **zeleno** gdje je na modelu (unutar 0.02 mm), **crveno** gdje je alat zarezao u model, a gdje pripremak ostaje na modelu **žuto** za tanku koru, **narandžasto** za više, prelazeći u **sivo** neobrađenog pripremka na 1 mm ili više. Boje se ponovo prave sa svakom promjenom, iz iste mape visina kao brojevi na panelu, pa se zeleno i crveno slažu sa linijom Zarezi. Skošenje namjerno zarezuje u model i pokazuje crveno duž svoje ivice.

## Post-procesiranje G-koda

Odaberi upravljač pod **Post** i pritisni {{ui:Preuzmi G-kod}} (ili {{ui:Post-procesor}} na traci):

| Upravljač | Datoteka | Napomene |
|---|---|---|
| Fanuc-style ISO | .nc | %, O broj, brojevi linija, T M6 sa G43 H, ugrađeni ciklusi |
| GRBL | .nc | Bez mijenjača alata i ugrađenih ciklusa: promjena alata pauzira sa M0, bušenje se piše kao obična kretanja |
| LinuxCNC | .ngc | T M6 sa G43 H, ugrađeni ciklusi, M2 |
| Vlastiti | bilo koja | Post koji si napisao ili promijenio: {{ui:Uredi postprocesor…}}, {{ui:Novi postprocesor…}}, {{ui:Uvezi datoteku postprocesora…}} |

Svaka datoteka počinje komentarima za program, pripremak, radni ofset i alate. Koordinate su u milimetrima sa 3 decimale. {{ui:CSV putanje alata}} i {{ui:JSON putanje alata}} izvoze same pokrete.

**Provjeri izlaz u simulatoru svoje mašine prije rezanja, i prvo ga pokreni u zraku iznad pripremka.** Tri ugrađena posta su polazne tačke koje prate dokumentovano ponašanje upravljača; nisu dokazane ni na jednoj konkretnoj mašini. Post koji promijeniš je tvoj da dokažeš. Kako napisati jedan: [Post procesori](topic:post-processors).

## Tačan STEP za radionicu

Ispod dugmadi za G-kod na kartici **Operacije**, {{ui:Tačan STEP (radne koordinate)}} preuzima `<part>-work.step`: dio kao tačno čvrsto tijelo (prave cilindre za rupe i izbočine, prave krugove za njihove ivice) sa ishodištem u radnom ishodištu ovog podešavanja i Z duž ose alata. To su koordinate koje G-kod koristi, pa CAM program ili provjerivač radionice poravnava model sa programom bez pomjeranja. Datoteka sadrži samo dio, ne pripremak ni putanje alata.

{{ui:Izvoz}} › {{ui:STEP AP242 (tačno čvrsto tijelo)}} piše isto tijelo u vlastitom položaju dijela (Z gore): vidi [Izvoz za štampu, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograničenja

- Džepovi, konture, bušenje i skošenja su 2.5-osni. Zakrivljene površine mogu se završiti u 3D ([paralelno i scallop](topic:finish-3d)), ali ne i grubo obraditi u 3D (konus ostaje kao stepenice dok ga ne završiš), i nema obrade ostatka. Adaptivno čišćenje je 2D (ravni podovi).
- Samo tri ose: bez naginjanja, bez struganja, bez inspekcije.
- Držači i drške se ne provjeravaju za sudare; upozorenje se pojavljuje kad je rez dublji od dužine žljeba.
- Posmaci i brzine su početne vrijednosti. Post je tekst koji možeš uređivati, ali samo odlučuje kako se kretanja pišu; ne može promijeniti putanju alata, dodati ose niti znati tvoju mašinu ([Post procesori](topic:post-processors) navodi šta ne može).

## Pošalji program mašini

U CadCraft Studio u desktop verziji, sa mašinom podešenom u Studiu, **Pošalji mašini…** se pojavljuje pored **Preuzmi G-kod** i učitava isti program na mašinu u tvojoj mreži. Nikad se ne pokreće iz PartCraft-a: pokreni ga na mašini kad je jasno. U pretraživaču dugme nije prikazano (web stranica ne može doseći mašinu u tvojoj mreži): umjesto toga preuzmi program.
