---
title: Provjera naprezanja i progiba (Simulacija)
summary: Odaberite materijal, učvrstite plohe, dodajte sile, tlakove ili vlastitu težinu dijela, riješite i očitajte von Misesovo naprezanje, pomak, faktor sigurnosti, reakcije i prirodne frekvencije na modelu, uz ono što metoda može i ne može reći.
keywords: simulacija, MKE, analiza uživo, ažuriraj dok uređujete, slomi ga, što prvo puca, faktor opterećenja, nelinearno, plastičnost, popuštanje, plastična deformacija, bilinearno, kontakt, par kontakta, penalizacija, vezano, kontakt bez trenja, CalculiX, .inp, .frd, konačni elementi, naprezanje, deformacija, von Mises, pomak, progib, faktor sigurnosti, granica popuštanja, reakcija, opterećenje, sila, tlak, gravitacija, vlastita težina, učvršćeno, bez trenja, oslonac, ograničenje, materijal, čelik, aluminij, titan, ABS, PLA, najlon, prirodna frekvencija, modalno, vibracije, mreža, veličina elementa, tetraedarski, tetraedri, tet mreža, voksel, kvaliteta mreže, glavno naprezanje, ekvivalentna deformacija, procjena pogreške, zakrivljene plohe, rupe, zaobljenja, prilagodljivo, automatsko profinjenje, h-prilagodba, konvergencija, konvergencija mreže, točna ploha, sfera, stožac, torus, spline, slobodna forma
from: 6f2fdec1
---

Radni prostor Simulacija odgovara na pitanje „hoće li se ovo savinuti ili slomiti pod ovim opterećenjem?” za dio koji modelirate. To je **linearna statička** studija (male deformacije, materijal ostaje elastičan) ili studija **prirodne frekvencije**, rješava se na mreži kvadratnih tetraedara koja prati plohe dijela (ili, ako odaberete, na malim jednakim kockama). Radi na imenovanim plohama koje mu mrežna jezgra daje (pogledajte [Mrežna jezgra](topic:solid-kernels)).

Odaberite **Simulacija** u okviru **Radni prostor** lijevo na alatnoj traci. Vaš dio se ne mijenja; studija se sprema unutar datoteke dijela, a svaka promjena na njoj može se poništiti.

## Postavljanje studije

1. Pritisnite **Nova studija** u desnoj ploči.
2. Odaberite **Materijal**. Ploča prikazuje njegovu krutost (E), Poissonov koeficijent, gustoću i granicu popuštanja. Vrijednosti su tipične tablične vrijednosti; ovjerene vrijednosti vašeg dobavljača mogu se razlikovati.
3. Odaberite **Mrežu**:
   - **Tetraedarska (točna)**, zadano: tetraedri s 10 čvorova čije vanjske plohe leže na plohama dijela, sa zakrivljenim bridovima na rupama, zaobljenjima i drugim okruglim plohama. Čvorovi na ravnim, cilindričnim, stožastim, sfernim i torusnim plohama, rotiranim i izvučenim plohama te slobodnim (B-spline) plohama leže na točnoj površini; svaka druga vrsta plohe prati svoju prikaznu mrežu, a tablica rezultata kaže koliko ih je tako. Mreža se sama profinjuje blizu zakrivljenih ploha, tankih stijenki i oštrih bridova.
   - **Voksel kocke (brzo)**: dio ispunjen jednakim kockama. Brzo, ali zakrivljene plohe postaju stepenice. Studije spremljene prije nego što je postojala tetraedarska mreža zadržavaju ovu.
4. Ostavite **Veličinu elementa** praznu za automatsku veličinu (oko 12,000 tetraedara, odnosno 20,000 kocaka) ili upišite jednu u milimetrima. Ploča prikazuje otprilike koliko elemenata to čini prije dodavanja finijih mjesta. Kod tetraedara **Manji elementi na zakrivljenim plohama** (zadano uključeno) profinjuje rupe i zaobljenja, gdje naprezanje obično dostiže vrhunac.

### Automatsko profinjenje

Kod tetraedara statička ili studija izvijanja (bez toplinskog opterećenja), studija prirodne frekvencije i stacionarna toplinska studija nude **Automatsko profinjenje (prilagodljivo)**. Označite je i postavite:

- **Ciljna pogreška (%)**: rješavanje staje kada je procijenjena pogreška ispod nje (na početku 1 %).
- **Najviše prolaza**: najviše rješavanja koje smije izvesti (na početku 5, najviše 10).

Svaki prolaz rješava, pronalazi elemente s najvećom procijenjenom pogreškom, dijeli ih (i onoliko susjeda koliko je potrebno da mreža ostane cjelovita) i ponovno rješava. Novi čvorovi na zakrivljenim plohama idu na točnu površinu. Rezultati zatim prikazuju tablicu i grafikon s, za svaki prolaz, elementima, nepoznanicama, procijenjenom pogreškom te vršnim naprezanjem (ili temperaturom) i pomakom (ili toplinskim tokom), te redak koji kaže zašto je stalo: cilj je ispunjen, prolazi su ponestali, sljedeća mreža bi bila prevelika, ili je prolaz pao (tada vidite zadnji dobri prolaz).

Procjenu čitajte kao procjenu. Ona (Zienkiewicz–Zhu; u usporedbi s točnim rješenjima pokazuje otprilike 0.6 do 0.95 stvarne pogreške) mjeri pogrešku preko **cijelog dijela**, pa je vršno naprezanje na rupi ili zaobljenju obično još malo netočno kad se procjena čini malom: za koncentraciju naprezanja postavite cilj ispod 1 % i pratite kako se vrh stabilizira od prolaza do prolaza. Na oštrom unutarnjem kutu ili na rubu učvršćene plohe pravo naprezanje je beskonačno, pa procjena nikada ne stigne do toga: prolazi tada ponestanu.

**Prirodne frekvencije i izvijanje.** Za studiju prirodne frekvencije procjena obuhvaća svaki traženi oblik, svaki računat jednako; tablica i grafikon prate prve dvije frekvencije. Kod dijela s isključivo ravnim plohama frekvencija od prolaza do prolaza može samo padati (svaka mreža zadržava prethodnu); zakrivljene plohe također se približavaju svom stvarnom obliku, što može frekvenciju pomaknuti malo u jednom ili drugom smjeru. Za izvijanje procjena obuhvaća prednaprezanje i oblike izvijanja, a tablica prati faktore opterećenja. Provjereno na čeličnoj šipki 100 × 10 × 10 mm: prva frekvencija stabilizira se od 812.4 do 811.9 Hz kroz četiri prolaza, 0.4 % ispod Euler–Bernoullija (koji zanemaruje posmik), a faktor opterećenja stupa unutar 0.5 % od Eulera.

## Učvrstite i opteretite

Svaka studija treba barem jedan oslonac i, za naprezanje, jedno opterećenje.

1. Pritisnite {{ui:Fiksno}} na alatnoj traci. Novi oslonac je odabran i čeka plohe: kliknite plohe koje se drže nepomično (ponovnim klikom na plohu uklanjate je). Kada završite, pritisnite **Gotovo** ili {{key:Esc}}. Plave stošce označavaju učvršćene plohe.
2. Pritisnite {{ui:Sila}} i kliknite plohe na koje sila djeluje. U ploči upišite **Ukupnu silu** u njutnima i odaberite njezin **Smjer**: u plohu ili duž osi. Sila se raspodjeljuje na odabrane plohe prema površini. Narančaste strelice je prikazuju.
3. Pritisnite {{ui:Tlak}} za tlak u MPa (N/mm²) koji gura u odabrane plohe; negativan tlak vuče.

Više vrsta je na popisu **Dodaj** u ploči: **Ploha bez trenja** (ploha može kliziti sama po sebi, ali se ne može odmaknuti od nje — upotrijebite je za ravnine simetrije i glatke oslonce) i **Gravitacija** (vlastita težina dijela, 9.81 m/s², u smjeru koji odaberete).

Oslonac koji dijelu ostavlja slobodu klizanja ili vrtnje se odbija, uz poruku koje je gibanje ostalo slobodno.

## Riješite i očitajte rezultate

Pritisnite {{ui:Riješi}}. Posao se izvodi u pozadini; **Zaustavi** ga otkazuje. Zatim:

- Dio je obojen prema **von Misesovom naprezanju**; u **Prikaži** odaberite **Pomak** ili **Faktor sigurnosti**. Legenda daje mjerilo.
- Pokažite na dio da očitate vrijednosti ispod pokazivača.
- Označite **Deformirani oblik** da vidite savijeni dio (pomak je uvećan **Mjerilom**; stvarni je onaj iz tablice).
- Tablica navodi najveće naprezanje i gdje je, najveći pomak, najmanji **faktor sigurnosti** (granica popuštanja ÷ von Misesovo naprezanje; ispod 1 materijal popušta), primijenjeno opterećenje i **reakcije** u osloncima (uravnotežuju opterećenje) te korištenu mrežu.

Za **prirodne frekvencije** odaberite tu **Vrstu**, postavite koliko **Oblika** i riješite. Svaki oblik prikazuje svoju frekvenciju i oblik (oblici su skalirani na 1 pri najvećem gibanju).

Ako promijenite dio, rezultati se označavaju kao zastarjeli: riješite ponovo.

## Popuštanje i kontakt (nelinearne studije)

Dvije vrste studija idu dalje od „materijal ostaje elastičan”:

- **Nelinearna (materijal popušta)** prati pravac materijala do granice popuštanja, a zatim blaži nagib (**Nagib nakon popuštanja**, 1 % od E ako je prazno). Opterećenje ide u **Korake opterećenja**; korak koji se ne stabilizira sam se prepolovi. Rezultati dodaju **Plastičnu deformaciju** dijagramima i navode koliki je dio opterećenja nosio. Ako se korak i dalje ne može stabilizirati, studija staje na zadnjem dobrom koraku, a ploča ⚠ Problemi pokazuje gdje: dio je tu iscrpio čvrstoću (kolaps) ili su koraci preveliki.
- **Kontakt između dijelova** omogućuje da odvojeni dijelovi dijela pritišću jedan drugi. Dodajte **Par kontakta**, odaberite plohe strane A (plohe koje pritišću) pomoću {{ui:Odaberi plohe}}, zatim stranu B pomoću {{ui:Odaberi plohe strane B}}. Dijelovi **bez trenja** pritišću, kližu i odvajaju se; **vezani** dijelovi ostaju zalijepljeni. Svaki dio se mreži zasebno, pa je mali razmak među njima u redu. Kontakt je metoda kazne: dijelovi se malo utisnu jedan u drugi (**faktor kazne** × E ÷ veličina elementa određuje koliko je kontakt krut). Tablica pokazuje najdublje utiskivanje, a ploča Problemi upozorava kada je ono više od 1 % veličine elementa: povećajte faktor ili upotrijebite manje elemente.

Obje koriste tetraedarsku mrežu. Trenje, veliko klizanje i velike rotacije ovdje se ne rješavaju.

## Pokrenite u CalculiXu

**Izvoz › CalculiX ulazna datoteka (.inp)** (ili {{ui:Spremi CalculiX ulaznu datoteku (.inp)}} u ploči) sprema studiju kao ulaznu datoteku za CalculiX, zasebni program koji sami instalirate i pokrećete: ista mreža, materijal, oslonci, opterećenja i parovi kontakta, u mm, N i MPa. Pokrenite ga, zatim **Izvoz › CalculiX rezultati (.frd)** učitava njegovu datoteku s rezultatima natrag na istu mrežu i prikazuje pomak (te von Misesovo naprezanje kada datoteka sadrži naprezanja). Ako ste u međuvremenu promijenili dio ili veličinu elementa, mreža nije ista i PartCraft to kaže: spremite novu datoteku.

## Koliko mu vjerovati

PartCraft provjerava svoj rješavač prema formulama iz priručnika (progib vrha konzole PL³/3EI unutar 1 %, istezanje šipke PL/AE točno, prva frekvencija konzole unutar 3 %, naprezanje oko rupe u ploči). Ipak, imajte na umu ova ograničenja:

- **Mreža.** Uz tetraedre PartCraft provjerava progib i savojno naprezanje konzole (unutar 0.3 %), naprezanje na rupi u ploči (Kt, unutar oko 1 %), debeli cilindar pod tlakom (Lamé, unutar 0.3 %) i prvu frekvenciju (unutar 0.4 %). Tablica prikazuje **kvalitetu mreže** (najmanji i najveći kutovi između ploha elemenata; ispod oko 10° element je loš) i **procijenjenu pogrešku naprezanja**: ako je veća od nekoliko postotaka, ponovno riješite s manjom veličinom elementa ili neka to učini **Automatsko profinjenje**. Na ploči s rupom i šipki s dva bočna zareza automatsko profinjenje dođe unutar 1 % od udžbeničkog Kt s oko šestine nepoznanica koje je trebalo cijelu mrežu učiniti finijom. S vokselskim kockama rupa ili zaobljenje su stepenice veličine kocke, pa je naprezanje tu grubo.
- **Oštri unutarnji kutovi i rubovi učvršćenih ploha nemaju pravi vrh naprezanja.** Vrijednost tu raste kako elementi postaju manji. Očitavajte naprezanja malo podalje od takvih mjesta ili zaobljite kut u modelu.
- **Rezultati za čitanje.** Osim von Misesova naprezanja, pomaka i faktora sigurnosti, tetraedarska studija prikazuje **najveće i najmanje glavno naprezanje** (vlak i tlak) te **ekvivalentnu deformaciju**. Označite **Prikaži mrežu** da vidite elemente.
- **Statičke studije su linearne i elastične.** Za popuštanje i kontakt upotrijebite nelinearne vrste studija iznad; velike deformacije i zamor nisu rješavani. Toplina, toplinsko naprezanje i linearno izvijanje su zasebne vrste studija: pogledajte [Toplina, toplinsko naprezanje i izvijanje](topic:thermal-and-buckling).
- **Svaki materijal je jednak u svim smjerovima.** Plastika iz 3D pisača slabija je preko svojih slojeva, često za trećinu ili više.
- Ovo je laboratorijska izvedba: dijelove koji su važni provjerite i na drugi način.

## Ažuriranje dok uređujete (Uživo)

Označite **Ažuriraj dok uređujem** u bloku Riješi i odgovori simulacije slijede vaše promjene. Promijenite kotu, opterećenje, materijal ili okolinu i odmah se pojavi **brzi odgovor**, izrađen elementima četiri puta većim od onih u studiji; kada stanete na trenutak (otprilike sekundu), vlastiti **precizni odgovor** studije ga zamjenjuje. Rezultati kažu koji od njih gledate („Brzi odgovor” ili „Precizni odgovor”) i veličinu elementa. Brzi odgovor dobar je za smjer i veličinu: na čeličnoj konzoli bio je unutar 1 % u progibu i oko 4 % u naprezanju u odnosu na precizni. Precizni odgovor vjerujte za brojke koje ćete koristiti. Statičke, prirodne frekvencije, toplinske studije i studije izvijanja rade na ovaj način; Uživo je postavka prikaza i ne sprema se u dio. Riješi koje sami pritisnete ostaje takav do sljedeće promjene.

## Saznajte što prvo puca (Slomi ga)

Za statičku studiju ili studiju izvijanja pritisnite **Što prvo puca?** u bloku **Slomi ga**. PartCraft skalira opterećenja studije (sile, tlakove i težinu zajedno) dok dio ne popusti i navodi, od najgoreg, **faktor opterećenja do prvog popuštanja** (faktor na današnjim opterećenjima pri kojem najveće von Misesovo naprezanje dosegne granicu popuštanja materijala, s crvenom oznakom gdje se to događa) i **faktor opterećenja do izvijanja** za iste oslonce i opterećenja. Faktor 4.3 znači da dio podnosi 4.3 puta veće opterećenje prije nego što popusti; **faktor manji od 1 znači da već pod opterećenjem popušta**, a to se pojavljuje na popisu Problemi kao pogreška (najslabiji nalaz prikazuje se kao napomena čak i kada sve zadovoljava). Faktori dolaze iz linearne studije na tetraedrima pri vašoj veličini elementa, pa su dobri koliko i ta studija: naprezanje na učvršćenoj plohi ili oštrom kutu nema pravi vrh (vidi dolje), a faktor popuštanja tu će biti na opreznoj strani. Vaš pomoćnik može izvesti istu provjeru alatom `break_run`.

## Povezano

- [Toplina, toplinsko naprezanje i izvijanje](topic:thermal-and-buckling)
- [Izrada oblika iz opterećenja (generativno)](topic:generative-design)
- [Mjerenje udaljenosti, kutova i mase](topic:measure)
- [Što još nije izrađeno](topic:not-built-yet)
