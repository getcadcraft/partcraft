---
title: Provjerite naprezanje i progib (simulacija)
summary: Izaberite materijal, učvrstite površine, dodajte sile, pritiske ili vlastitu težinu dijela, riješite, i pročitajte von Mises naprezanje, pomjeranje, faktor sigurnosti, reakcije i prirodne frekvencije na modelu, uz ono što metoda može i ne može reći.
keywords: simulacija, FEA, analiza uživo, ažuriraj dok uređujete, slomi ga, šta prvo puca, faktor opterećenja, nelinearno, plastičnost, tečenje, plastična deformacija, bilinearno, kontakt, kontaktni par, kazneni, vezano, kontakt bez trenja, CalculiX, .inp, .frd, konačni elementi, naprezanje, deformacija, von Mises, pomjeranje, progib, faktor sigurnosti, granica tečenja, reakcija, opterećenje, sila, pritisak, gravitacija, sopstvena težina, učvršćeno, bez trenja, oslonac, ograničenje, materijal, čelik, aluminij, titan, ABS, PLA, najlon, prirodna frekvencija, modalno, vibracija, mreža, veličina elementa, tetraedarski, tetraedri, tet mreža, voksel, kvalitet mreže, glavno naprezanje, ekvivalentna deformacija, procjena greške, zakrivljene površine, rupe, zaobljenja, adaptivno, adaptivno profinjavanje, automatsko profinjavanje, h-adaptivno, konvergencija, konvergencija mreže, tačna površina, sfera, konus, torus, spline, slobodna forma
from: 6f2fdec1
---

Radni prostor Simulacija odgovara na pitanje „hoće li se saviti ili slomiti pod ovim opterećenjem?“ za dio koji modelirate. To je **linearna statička** studija (mali progibi, materijal ostaje elastičan) ili studija **prirodnih frekvencija**, riješena na mreži kvadratnih tetraedara koja prati površine dijela (ili, ako izaberete, malih jednakih kocki). Radi na imenovanim površinama koje mrežno jezgro daje dijelu (vidi [Mrežno jezgro](topic:solid-kernels)).

Odaberite **Simulacija** u kutiji **Radni prostor** lijevo na traci s alatima. Vaš dio se ne mijenja; studija se čuva unutar datoteke dijela, a svaka promjena u njoj može se poništiti.

## Postavite studiju

1. Pritisnite **Nova studija** u desnom panelu.
2. Odaberite **Materijal**. Panel prikazuje njegovu krutost (E), Poissonov koeficijent, gustinu i granicu tečenja. Vrijednosti su tipične iz priručnika; ovjerene vrijednosti vašeg dobavljača mogu se razlikovati.
3. Odaberite **Mrežu**:
   - **Tetraedarska (tačna)**, podrazumijevana: 10-čvornih tetraedara čije vanjske površine leže na površinama dijela, sa zakrivljenim ivicama na rupama, zaobljenjima i drugim okruglim površinama. Čvorovi na ravnim, cilindričnim, konusnim, sfernim i torusnim površinama, rotiranim i izvučenim površinama i površinama slobodne forme (B-spline) leže na tačnoj površini; svaka druga vrsta površine prati svoju prikaznu mrežu, a tabela rezultata kaže koliko ih je tako. Mreža se sama profinjava blizu zakrivljenih površina, tankih zidova i oštrih ivica.
   - **Voksel kocke (brzo)**: dio ispunjen jednakim kockama. Brzo, ali zakrivljene površine postaju stepenice. Studije sačuvane prije postojanja tetraedarske mreže zadržavaju ovo.
4. Ostavite **Veličinu elementa** praznu za automatsku veličinu (oko 12.000 tetraedara ili 20.000 kocki), ili upišite jednu u milimetrima. Panel prikazuje otprilike koliko elemenata to pravi prije dodavanja finijih mjesta. Kod tetraedara, **Manji elementi na zakrivljenim površinama** (uključeno podrazumijevano) profinjava rupe i zaobljenja, gdje naprezanje obično dostiže vrh.

### Automatsko profinjavanje

Kod tetraedara, statička ili izvijajuća studija (bez toplotnog opterećenja), studija prirodnih frekvencija i stacionarna toplotna studija nude **Automatsko profinjavanje (adaptivno)**. Označite ga i postavite:

- **Ciljna greška (%)**: rješavanje staje kada je procijenjena greška ispod nje (1 % na početku).
- **Najviše prolaza**: najviše rješavanja koje može izvesti (5 na početku, najviše 10).

Svaki prolaz rješava, pronalazi elemente s najvećom procijenjenom greškom, dijeli ih (i onoliko susjeda koliko treba da mreža ostane cjelovita) i rješava ponovo. Novi čvorovi na zakrivljenim površinama idu na tačnu površinu. Rezultati zatim prikazuju tabelu i grafikon s, za svaki prolaz, elementima, nepoznatima, procijenjenom greškom i vršnim naprezanjem (ili temperaturom) i pomjeranjem (ili toplotnim fluksom), te red koji kaže zašto je stalo: cilj je ispunjen, prolazi su ponestali, sljedeća mreža bi bila prevelika, ili je prolaz pao (tada vidite posljednji dobar prolaz).

Procjenu čitajte kao procjenu. Ona (Zienkiewicz–Zhu, koja u poređenju s tačnim odgovorima pokazuje oko 0,6 do 0,95 stvarne greške) mjeri grešku preko **cijelog dijela**, pa je vršno naprezanje na rupi ili zaobljenju obično još malo netačno kada procjena izgleda mala: za koncentraciju naprezanja postavite cilj ispod 1 % i pratite kako se vrh stabilizuje od prolaza do prolaza. Na oštrom unutrašnjem uglu ili na ivici učvršćene površine stvarno naprezanje je beskonačno, pa procjena tamo nikada ne stigne: prolazi tada ponestanu.

**Prirodne frekvencije i izvijanje.** Za studiju prirodnih frekvencija procjena pokriva svaki mod koji ste tražili, svaki brojan jednako; tabela i grafikon prate prve dvije frekvencije. Na dijelu s samo ravnim površinama frekvencija može od prolaza do prolaza samo opadati (svaka mreža zadržava prethodnu); zakrivljene površine također se približavaju svom stvarnom obliku, što može pomjeriti frekvenciju malo na jednu ili drugu stranu. Za izvijanje procjena pokriva predopterećenje i modove izvijanja, a tabela prati faktore opterećenja. Provjereno na čeličnoj šipki 100 × 10 × 10 mm: prva frekvencija se stabilizuje od 812,4 do 811,9 Hz kroz četiri prolaza, 0,4 % ispod Euler–Bernoullija (koji zanemaruje smicanje), a faktor opterećenja stupa unutar 0,5 % od Eulera.

## Učvrstite i opteretite

Svaka studija treba bar jedan oslonac i, za naprezanje, jedno opterećenje.

1. Pritisnite {{ui:Učvrsti}} na traci s alatima. Novi oslonac je odabran i čeka površine: kliknite površine koje se drže nepomično (kliknite površinu ponovo da je otpustite). Pritisnite **Završi odabir** ili {{key:Esc}} kada završite. Plavi konusi označavaju držane površine.
2. Pritisnite {{ui:Sila}} i kliknite površine na koje sila djeluje. U panelu upišite **Ukupnu silu** u njutnima i odaberite **Smjer**: u površinu ili duž ose. Sila se dijeli na odabrane površine prema površini. Narandžaste strelice je prikazuju.
3. Pritisnite {{ui:Pritisak}} za pritisak u MPa (N/mm²) koji gura u odabrane površine; negativan pritisak vuče.

Više vrsta je na listi **Dodaj** u panelu: **Površina bez trenja** (površina može kliziti sama po sebi, ali se ne može odmaknuti od nje — koristite je za ravni simetrije i glatke oslonce) i **Gravitacija** (sopstvena težina dijela, 9,81 m/s², u smjeru koji izaberete).

Oslonac koji ostavlja dio slobodnim da kliže ili se okreće se odbija, uz navođenje koje je kretanje ostalo slobodno.

## Riješite i čitajte rezultate

Pritisnite {{ui:Riješi}}. Posao se izvodi u pozadini; **Zaustavi** ga otkazuje. Zatim:

- Dio je obojen prema **von Mises naprezanju**; izaberite **Pomjeranje** ili **Faktor sigurnosti** u **Prikaži**. Legenda daje skalu.
- Pokažite na dio da pročitate vrijednosti ispod pokazivača.
- Označite **Deformisani oblik** da vidite dio savijen (kretanje je uvećano **Skalom**; stvarno je u tabeli).
- Tabela navodi najveće naprezanje i gdje je, najveće pomjeranje, najmanji **faktor sigurnosti** (granica tečenja ÷ von Mises naprezanje; ispod 1 materijal popušta), primijenjeno opterećenje i **reakcije** na osloncima (one uravnotežuju opterećenje), te korištenu mrežu.

Za **prirodne frekvencije** izaberite taj **Tip**, postavite koliko **Modova** i riješite. Svaki mod prikazuje svoju frekvenciju i oblik (oblici se skaliraju na 1 na njihovom najvećem kretanju).

Ako promijenite dio, rezultati se označe kao zastarjeli: riješite ponovo.

## Tečenje i kontakt (nelinearne studije)

Dva dodatna tipa studije idu dalje od „materijal ostaje elastičan“:

- **Nelinearno (materijal popušta)** prati pravu liniju materijala do njegove granice tečenja, pa zatim blažu nagib (**Nagib poslije tečenja**, 1 % od E ako ostane prazno). Opterećenje ide u **Korake opterećenja**; korak koji se ne smiri sam se prepolovi. Rezultati dodaju **Plastičnu deformaciju** grafikonima i kažu koliko je opterećenja preuzeto. Ako se korak i dalje ne smiri, studija staje na posljednjem dobrom koraku, a panel ⚠ Problemi kaže gdje: dio je tamo ostao bez čvrstoće (kolaps), ili su koraci preveliki.
- **Kontakt između komada** dopušta odvojenim komadima dijela da guraju jedan na drugi. Dodajte **Kontaktni par**, odaberite površine strane A (površine koje pritišću) pomoću {{ui:Odaberi površi}}, zatim stranu B pomoću {{ui:Odaberi površine strane B}}. Komadi **bez trenja** guraju, klize i odvajaju se; **vezani** komadi ostaju zalijepljeni. Svaki komad se mreži zasebno, pa je mali razmak među njima u redu. Kontakt je kaznena metoda: komadi se malo utope jedan u drugi (**faktor kazne** × E ÷ veličina elementa određuje koliko je kontakt krut). Tabela prikazuje najdublje utapanje, a panel Problemi upozorava kada je ono veće od 1 % veličine elementa: povećajte faktor ili koristite manje elemente.

Oba koriste tetraedarsku mrežu. Trenje, veliko klizanje i velike rotacije ovdje nisu rješavani.

## Pokrenite u CalculiX

**Izvoz › {{ui:Spasi CalculiX ulaz (.inp)}}** (ili isto dugme u panelu) sprema studiju kao ulaznu datoteku za CalculiX, zaseban program koji sami instalirate i pokrećete: ista mreža, materijal, oslonci, opterećenja i kontaktni parovi, u mm, N i MPa. Pokrenite ga, zatim **Izvoz › CalculiX rezultati (.frd)** čita njegovu datoteku s rezultatima nazad na istu mrežu i prikazuje pomjeranje (i von Mises naprezanje kada datoteka sadrži naprezanja). Ako ste u međuvremenu promijenili dio ili veličinu elementa, mreža nije ista i PartCraft to kaže: spasite novi ulaz.

## Koliko mu vjerovati

PartCraft provjerava svoj rješavač s formulama iz priručnika (progib vrha konzole PL³/3EI unutar 1 %, izduženje šipke PL/AE tačno, prva frekvencija konzole unutar 3 %, naprezanje oko rupe u ploči). Ipak, držite na umu ova ograničenja:

- **Mreža.** Kod tetraedara PartCraft provjerava progib i savojno naprezanje konzole (unutar 0,3 %), naprezanje na rupi u ploči (Kt, unutar oko 1 %), debelu cijev pod pritiskom (Lamé, unutar 0,3 %) i prvu frekvenciju (unutar 0,4 %). Tabela prikazuje **kvalitet mreže** (najmanji i najveći uglovi između površina elemenata; ispod oko 10° element je loš) i **procijenjenu grešku naprezanja**: ako je veća od nekoliko procenata, riješite ponovo s manjom veličinom elementa, ili pustite da **Automatsko profinjavanje** to uradi. Na ploči s rupom i šipki s dva bočna zareza, automatsko profinjavanje dostiglo je unutar 1 % udžbeničkog Kt uz oko šestinu nepoznatih koje je trebalo cijelu mrežu učiniti finijom. Kod voksel kocki rupa ili zaobljenje je stepenica na veličini kocke, pa je naprezanje tamo grubo.
- **Oštri unutrašnji uglovi i ivice učvršćenih površina nemaju stvarni vrh naprezanja.** Vrijednost tamo raste kako elementi postaju manji. Čitajte naprezanja malo podalje od takvih mjesta, ili zaokružite ugao u modelu.
- **Rezultati za čitanje.** Osim von Mises naprezanja, pomjeranja i faktora sigurnosti, tetraedarska studija prikazuje **najveće i najmanje glavno naprezanje** (zatezanje i pritisak) i **ekvivalentnu deformaciju**. Označite **Prikaži mrežu** da vidite elemente.
- **Statičke studije su linearne i elastične.** Za tečenje i kontakt koristite nelinearne tipove studija iznad; veliki progibi i zamor nisu rješavani. Toplota, toplotno naprezanje i linearno izvijanje su zasebni tipovi studija: vidi [Toplota, toplotno naprezanje i izvijanje](topic:thermal-and-buckling).
- **Svaki materijal je isti u svim smjerovima.** Plastike iz 3D štampe su slabije preko svojih slojeva, često za trećinu ili više.
- Ovo je laboratorijska verzija: provjerite dijelove koji su bitni nekim drugim načinom.

## Ažurirajte dok uređujete (Uživo)

Označite **Ažuriraj dok uređujem** u bloku Riješi i odgovori simulacije prate vaše izmjene. Promijenite kotu, opterećenje, materijal ili okruženje i odmah se pojavljuje **brz odgovor**, izračunat elementima četiri puta većim od onih u studiji; kada stanete na trenutak (otprilike sekundu), vlastiti **precizni odgovor** studije zamjenjuje ga. Rezultati kažu koji od ta dva gledate ("Brz odgovor" ili "Precizan odgovor") i veličinu elementa. Brz odgovor je dobar za smjer i veličinu: na čeličnoj konzoli bio je unutar 1 % na progibu i oko 4 % na naprezanju u odnosu na precizni. Preciznom vjerujte za brojke koje ćete koristiti. Statičke, prirodne frekvencije, toplotne i studije izvijanja rade ovako; Uživo je postavka prikaza i ne čuva se u dijelu. Rješavanje koje sami pritisnete ostaje kakvo jeste do sljedeće izmjene.

## Saznajte šta prvo puca (Slomi ga)

Za statičku ili izvijajuću studiju pritisnite **Šta prvo puca?** u bloku **Slomi ga**. PartCraft skalira opterećenja studije (sile, pritiske i težinu zajedno) dok dio ne popusti i navodi, od najgoreg, **faktor opterećenja do prvog tečenja** (faktor na današnjim opterećenjima pri kojem najveće von Mises naprezanje dostiže granicu tečenja materijala, s crvenom oznakom gdje se to dešava) i **faktor opterećenja do izvijanja** za iste oslonce i opterećenja. Faktor 4,3 znači da dio podnosi 4,3 puta svoje opterećenje prije tečenja; **faktor ispod 1 znači da već popušta pod ovim opterećenjem**, i to se pojavljuje na listi Problema kao greška (najslabiji nalaz prikazan je kao napomena čak i kada je sve u redu). Faktori dolaze iz linearne studije na tetraedrima pri vašoj veličini elementa, pa su dobri koliko je ta studija: naprezanje na učvršćenoj površini ili oštrom uglu nema stvarni vrh (vidi dolje), pa će faktor tečenja tamo biti na opreznoj strani. Vaš asistent može pokrenuti istu provjeru alatom `break_run`.

## Povezano

- [Toplota, toplotno naprezanje i izvijanje](topic:thermal-and-buckling)
- [Stvorite oblik iz opterećenja (Generativno)](topic:generative-design)
- [Izmjerite udaljenosti, uglove i masu](topic:measure)
- [Šta još nije izgrađeno](topic:not-built-yet)
