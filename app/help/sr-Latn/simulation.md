---
title: Provera napona i progiba (Simulacija)
summary: Izaberite materijal, učvrstite strane, dodajte sile, pritiske ili sopstvenu težinu dela, rešite, i pročitajte fon Mizesov napon, pomeranje, faktor sigurnosti, reakcije i sopstvene frekvencije na modelu, uz ono što metoda može i ne može da vam kaže.
keywords: simulacija, MKE, analiza uživo, ažuriraj dok menjaš, slomi ga, šta puca prvo, faktor opterećenja, nelinearno, plastičnost, popuštanje, plastična deformacija, bilinearno, kontakt, par kontakta, kaznena metoda, lepljeno, kontakt bez trenja, CalculiX, .inp, .frd, konačni elementi, napon, deformacija, von Mises, pomeranje, progib, faktor sigurnosti, granica tečenja, reakcija, opterećenje, sila, pritisak, gravitacija, sopstvena težina, učvršćeno, bez trenja, oslonac, ograničenje, materijal, čelik, aluminijum, titan, ABS, PLA, najlon, sopstvena frekvencija, modalno, vibracija, mreža, veličina elementa, tetraedarska, tetraedri, tet mreža, voksel, kvalitet mreže, glavni napon, ekvivalentna deformacija, procena greške, zakrivljene strane, rupe, zaobljenja, adaptivno, adaptivno zgušnjavanje, automatsko zgušnjavanje, h-adaptivno, konvergencija, konvergencija mreže, tačna površina, sfera, konus, torus, spline, slobodna forma
from: 6f2fdec1
---

Radni prostor Simulacija odgovara na pitanje „da li će se savijati ili puknuti pod ovim opterećenjem?“ za deo koji modelujete. To je **linearna statička** studija (male deformacije, materijal ostaje elastičan) ili studija **sopstvene frekvencije**, rešena na mreži kvadratnih tetraedara koja prati strane dela (ili, ako izaberete, na malim jednakim kockama). Radi na imenovanim stranama koje mrežno jezgro daje delu (pogledajte [Mrežno jezgro](topic:solid-kernels)).

Izaberite **Simulacija** u polju **Radni prostor** levo na traci alata. Deo se ne menja; studija se čuva unutar datoteke dela, a svaka izmena može se opozvati.

## Podešavanje studije

1. Pritisnite **Nova studija** u desnom panelu.
2. Izaberite **Materijal**. Panel prikazuje njegovu krutost (E), Poasonov koeficijent, gustinu i granicu tečenja. Vrednosti su tipične tablične brojke; sertifikovane vrednosti vašeg dobavljača mogu se razlikovati.
3. Izaberite **Mrežu**:
   - **Tetraedarska (tačna)**, podrazumevano: tetraedri sa 10 čvorova čije spoljne strane leže na stranama dela, sa zakrivljenim ivicama na rupama, zaobljenjima i drugim okruglim stranama. Čvorovi na ravnim, cilindričnim, konusnim, sfernim i toroidnim stranama, rotiranim i izvučenim stranama i slobodnim (B-spline) stranama leže na tačnoj površini; svaka druga vrsta strane prati svoju prikaznu mrežu, a tabela rezultata kaže koliko je strana tako. Mreža se sama zgušnjava blizu zakrivljenih strana, tankih zidova i oštrih ivica.
   - **Voksel kocke (brzo)**: deo popunjen jednakim kockama. Brzo, ali zakrivljene strane postaju stepenice. Studije sačuvane pre postojanja tetraedarske mreže zadržavaju ovu.
4. Ostavite **Veličina elementa** praznu za automatsku veličinu (oko 12,000 tetraedara, ili 20,000 kocki), ili ukucajte jednu u milimetrima. Panel prikazuje približno koliko elemenata to pravi pre dodavanja finijih mesta. Sa tetraedrima, **Manji elementi na zakrivljenim stranama** (uključeno podrazumevano) zgušnjava rupe i zaobljenja, gde napon obično dostiže vrh.

### Automatsko zgušnjavanje

Sa tetraedrima, statičkom ili izvijajućom studijom (bez toplotnog opterećenja), studijom sopstvene frekvencije i stacionarnom toplotnom studijom nudi se **Automatski zgusni (adaptivno)**. Štiklirajte ga i postavite:

- **Ciljna greška (%)**: rešavanje staje kada je procenjena greška ispod nje (1 % za početak).
- **Najviše prolaza**: najviše rešavanja koje sme da izvede (5 za početak, najviše 10).

Svaki prolaz rešava, pronalazi elemente sa najvećom procenjenom greškom, deli ih (i onoliko suseda koliko treba da mreža ostane celina), i ponovo rešava. Novi čvorovi na zakrivljenim stranama idu na tačnu površinu. Rezultati zatim prikazuju tabelu i grafikon sa, za svaki prolaz, elementima, nepoznatim, procenjenom greškom, vrhom napona (ili temperature) i pomeranjem (ili toplotnim fluksom), plus red koji kaže zašto je stao: cilj je ispunjen, prolazi su ponestali, sledeća mreža bi bila prevelika, ili prolaz nije uspeo (tada vidite poslednji dobar prolaz).

Procenu čitajte kao procenu. Ona (Zienkiewicz–Zhu; u poređenju sa tačnim rešenjima, čita oko 0.6 do 0.95 stvarne greške) meri grešku na **celom delu**, pa je vrh napona na rupi ili zaobljenju obično još malo netačan kada procena izgleda mala: za koncentraciju napona postavite cilj ispod 1 % i pratite kako se vrh stabilizuje od prolaza do prolaza. Na oštrom unutrašnjem uglu ili ivici učvršćene strane stvarni napon je beskonačan, pa procena nikada ne stiže tamo: prolazi tada ponestanu.

**Sopstvene frekvencije i izvijanje.** Za studiju sopstvene frekvencije, procena pokriva svaki režim koji ste tražili, svaki računat jednako; tabela i grafikon prate prve dve frekvencije. Na delu sa samo ravnim stranama frekvencija može samo da opadne od prolaza do prolaza (svaka mreža zadržava onu pre); zakrivljene strane se takođe približavaju svom pravom obliku, što može pomeriti frekvenciju malo u bilo kom smeru. Za izvijanje procena pokriva predopterećenje i režime izvijanja, a tabela prati faktore opterećenja. Proveren na čeličnoj šipki 100 × 10 × 10 mm: prva frekvencija se stabilizuje sa 812.4 na 811.9 Hz u četiri prolaza, 0.4 % ispod Ojler–Bernulijeve (koja zanemaruje smicanje), a faktor opterećenja stuba unutar 0.5 % od Ojlera.

## Držanje i opterećenje

Svaka studija zahteva bar jedan oslonac i, za napon, jedno opterećenje.

1. Pritisnite {{ui:Učvršćeno}} na traci alata. Novi oslonac je izabran i čeka strane: kliknite strane koje se drže nepomično (kliknite stranu ponovo da je otpustite). Pritisnite **Završi izbor** ili {{key:Esc}} kada završite. Plavi konusi označavaju držane strane.
2. Pritisnite {{ui:Sila}} i kliknite strane na koje sila deluje. U panelu ukucajte **Ukupnu silu** u njutnima i izaberite **Smer**: u stranu ili duž ose. Sila se deli na izabrane strane po površini. Narandžaste strelice je prikazuju.
3. Pritisnite {{ui:Pritisak}} za pritisak u MPa (N/mm²) koji gura u izabrane strane; negativan pritisak vuče.

Više vrsta je na listi **Dodaj** u panelu: **Strana bez trenja** (strana može da klizi duž sebe, ali ne može da se odvoji od nje — koristite je za ravni simetrije i glatke oslonce) i **Gravitacija** (sopstvena težina dela, 9.81 m/s², u smeru koji izaberete).

Oslonac koji ostavlja deo slobodnim da klizi ili se okreće se odbija, uz navođenje kog kretanja je ostalo slobodno.

## Rešavanje i čitanje rezultata

Pritisnite {{ui:Reši}}. Posao radi u pozadini; **Zaustavi** ga otkazuje. Zatim:

- Deo je obojen po **fon Mizesovom naponu**; izaberite **Pomeranje** ili **Faktor sigurnosti** u **Prikaži**. Legenda daje razmeru.
- Pokažite na deo da pročitate vrednosti ispod pokazivača.
- Štiklirajte **Deformisani oblik** da vidite deo savijen (kretanje se uvećava **Razmerom**; stvarno je u tabeli).
- Tabela navodi najveći napon i gde je, najveće pomeranje, najmanji **faktor sigurnosti** (granica tečenja ÷ fon Mizesov napon; ispod 1 materijal popušta), primenjeno opterećenje i **reakcije** na osloncima (uravnotežuju opterećenje), i korišćenu mrežu.

Za **sopstvene frekvencije** izaberite taj **Tip**, postavite koliko **Režima**, i rešite. Svaki režim pokazuje svoju frekvenciju i oblik (oblici se skaliraju na 1 na svom najvećem kretanju).

Ako promenite deo, rezultati se označavaju kao zastareli: rešite ponovo.

## Popuštanje i kontakt (nelinearne studije)

Dva dodatna tipa studije idu dalje od „materijal ostaje elastičan“:

- **Nelinearna (materijal popušta)** prati pravu liniju materijala do njegove granice tečenja, pa blaži nagib (**Nagib posle popuštanja**, 1 % od E kada je prazno). Opterećenje ide u **Korake opterećenja**; korak koji se ne stabilizuje sam se prepolovljuje. Rezultati dodaju **Plastičnu deformaciju** u grafikone i kažu koliko je opterećenja preneto. Ako korak i dalje ne može da se stabilizuje, studija staje na poslednjem dobrom koraku, a panel ⚠ Problemi kaže gde: deo je tu ostao bez čvrstoće (kolaps), ili su koraci preveliki.
- **Kontakt između delova** dozvoljava da odvojeni delovi dela guraju jedan drugi. Dodajte **Par kontakta**, izaberite strane strane A (strane koje pritiskaju) sa {{ui:Izaberi površine}}, zatim stranu B sa {{ui:Izaberi lica strane B}}. **Bez trenja** delovi guraju, klize i odvajaju se; **lepljeni** delovi ostaju zalepljeni. Svaki deo je mrežen zasebno, pa je mali razmak između njih u redu. Kontakt je kaznena metoda: delovi se malo utiskuju jedan u drugi (**faktor kazne** × E ÷ veličina elementa određuje koliko je kontakt krut). Tabela prikazuje najdublje utiskivanje, a panel Problemi upozorava kada je ono više od 1 % veličine elementa: povećajte faktor ili koristite manje elemente.

Obe koriste tetraedarsku mrežu. Trenje, veliko klizanje i velike rotacije ovde nisu rešeni.

## Pokretanje u CalculiX-u

**Izvoz › CalculiX ulaz (.inp)** (ili {{ui:Sačuvaj CalculiX ulaz (.inp)}} u panelu) čuva studiju kao ulaznu datoteku za CalculiX, zaseban program koji sami instalirate i pokrećete: ista mreža, materijal, oslonci, opterećenja i parovi kontakta, u mm, N i MPa. Pokrenite ga, zatim **Izvoz › CalculiX rezultati (.frd)** čita njegovu datoteku sa rezultatima nazad na istu mrežu i prikazuje pomeranje (i fon Mizesov napon kada datoteka ima napone). Ako ste u međuvremenu promenili deo ili veličinu elementa, mreža nije ista i PartCraft to kaže: sačuvajte novi ulaz.

## Koliko mu verovati

PartCraft proverava svoj rešavač u odnosu na ručne formule (ugib slobodnog kraja nosača PL³/3EI u okviru 1 %, izduženje šipke PL/AE tačno, prva frekvencija nosača u okviru 3 %, napon oko rupe u ploči). Ipak, imajte na umu ova ograničenja:

- **Mreža.** Sa tetraedrima, PartCraft proverava ugib i napon savijanja nosača (u okviru 0.3 %), napon na rupi u ploči (Kt, u okviru oko 1 %), debelu cev pod pritiskom (Lamé, u okviru 0.3 %) i prvu frekvenciju (u okviru 0.4 %). Tabela prikazuje **kvalitet mreže** (najmanji i najveći uglovi između strana elemenata; ispod oko 10° element je loš) i **procenjenu grešku napona**: ako je veća od nekoliko procenata, rešite ponovo sa manjom veličinom elementa, ili pustite da **Automatski zgusni** to uradi. Na ploči sa rupom i šipki sa dva zarezna ruba, automatsko zgušnjavanje dostiglo je unutar 1 % udžbeničkog Kt sa oko šestinom nepoznatih koje je celokupna finija mreža zahtevala. Sa voksel kockama, rupa ili zaobljenje su stepenice na veličini kocke, pa je napon tu grub.
- **Oštri unutrašnji uglovi i ivice učvršćenih strana nemaju pravi vrh napona.** Vrednost tu neprestano raste kako elementi postaju manji. Čitajte napone malo dalje od takvih mesta, ili zaobljite ugao u modelu.
- **Rezultati za čitanje.** Osim fon Mizesovog napona, pomeranja i faktora sigurnosti, tetraedarska studija prikazuje **najveći i najmanji glavni napon** (zatezanje i pritisak) i **ekvivalentnu deformaciju**. Štiklirajte **Prikaži mrežu** da vidite elemente.
- **Statičke studije su linearne i elastične.** Za popuštanje i kontakt koristite nelinearne tipove studija iznad; velike deformacije i zamor nisu rešeni. Toplota, toplotni napon i linearno izvijanje su sopstveni tipovi studija: pogledajte [Toplota, toplotni napon i izvijanje](topic:thermal-and-buckling).
- **Svi materijali su isti u svim pravcima.** Plastike iz 3D štampe slabije su preko svojih slojeva, često za trećinu ili više.
- Ovo je laboratorijska verzija: proverite delove koji su bitni na drugi način.

## Ažuriranje dok menjate (Uživo)

Štiklirajte **Ažuriraj dok menjam** u bloku Reši, i odgovori simulacije prate vaše izmene. Promenite kotu, opterećenje, materijal ili okruženje i odmah se pojavi **brz odgovor**, napravljen sa elementima četiri puta većim od onih u studiji; kada stanete na trenutak (sekundu-dve), sopstveni **precizni odgovor** studije zamenjuje ga. Rezultati kažu koji gledate („Brz odgovor“ ili „Precizan odgovor“) i veličinu elementa. Brz odgovor dobar je za pravac i veličinu: na čeličnom nosaču bio je u okviru 1 % za progib i oko 4 % za napon u odnosu na precizni. Verujte preciznom za brojke koje ćete koristiti. Statičke, sopstvene frekvencije, toplotne i izvijajuće studije rade ovako; Uživo je podešavanje prikaza i ne čuva se u delu. Rešavanje koje sami pritisnete ostaje kakvo jeste do sledeće izmene.

## Otkrivanje šta puca prvo (Testiraj lom)

Za statičku ili izvijajuću studiju pritisnite **Šta puca prvo?** u bloku **Testiraj lom**. PartCraft skalira opterećenja studije (sile, pritiske i težinu zajedno) dok deo ne popusti, i navodi, od najgoreg, **faktor opterećenja do prvog popuštanja** (faktor na današnjim opterećenjima pri kome najveći fon Mizesov napon dostiže granicu tečenja materijala, sa crvenim markerom gde se to dešava) i **faktor opterećenja do izvijanja** za iste oslonce i opterećenja. Faktor 4.3 znači da deo podnosi 4.3 puta svoje opterećenje pre popuštanja; **faktor ispod 1 znači da već popušta pri ovom opterećenju**, i to se pojavljuje na listi Problema kao greška (najslabiji nalaz se prikazuje kao napomena čak i kada je sve u redu). Faktori dolaze iz linearne studije na tetraedrima pri vašoj veličini elementa, pa su dobri koliko je ta studija: napon na fiksiranoj strani ili oštrom uglu nema pravi vrh (pogledajte gore), a faktor popuštanja će tu biti na opreznoj strani. Vaš asistent može izvesti istu proveru alatom `break_run`.

## Povezano

- [Toplota, toplotni napon i izvijanje](topic:thermal-and-buckling)
- [Oblikovanje oblika iz opterećenja (Generativno)](topic:generative-design)
- [Merenje rastojanja, uglova i mase](topic:measure)
- [Šta još nije izgrađeno](topic:not-built-yet)
