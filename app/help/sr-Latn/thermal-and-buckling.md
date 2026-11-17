---
title: Toplota, toplotni napon i izvijanje
summary: Nađite temperature u delu iz fiksnih temperatura, toplotnog fluksa, toplotne snage, konvekcije i zračenja (stacionarno ili tokom vremena), opteretite studiju napona porastom temperature i nađite opterećenje pri kom se vitak deo izvija, uz to šta svaka metoda može i ne može da kaže.
keywords: toplota, prenos toplote, temperatura, provođenje, konvekcija, koeficijent prelaza, zračenje, emisivnost, toplotni fluks, toplotna snaga, generisanje toplote, toplotni ponor, prelazno, vreme, hlađenje, zagrevanje, Krank–Nikolson, implicitni Ojler, toplotni bilans, toplotni napon, toplotni napon tokom vremena, prelazni toplotni napon, kaljenje, toplotni udar, istorija napona, najgori trenutak, toplotno širenje, koeficijent širenja, izvijanje, Ojlerovo izvijanje, faktor opterećenja, kritično opterećenje, stub, vitak, sopstvena vrednost
from: 1a1b7545
---

Ove studije su u radnom okruženju Simulacija, uz statički napon i prirodne frekvencije (pogledajte [Provera napona i progiba](topic:simulation)). Biraju se u polju **Vrsta** na panelu. Koriste istu mrežu malih kocaka i istu listu materijala; svaki materijal iz biblioteke ima toplotnu provodljivost, specifičnu toplotu i koeficijent širenja (tipične vrednosti iz priručnika, prikazane pod **Svojstva**).

## Toplotno: kuda ide toplota?

1. Izaberite **Toplotno (prenos toplote)** kao **Vrstu**.
2. Dodajte toplotne uslove iz liste **Dodaj** na panelu, pa kliknite njihove površine (kao za oslonce i opterećenja):
   - **Fiksna temperatura**: površina se drži na temperaturi, u °C.
   - **Toplotni fluks**: W/m² koji ulazi u površinu (negativno izlazi). Deluje na stvarnu površinu, čak i tamo gde kocke prave stepenicu.
   - **Toplotna snaga**: ukupno u vatima, raspoređeno na izabrane površine srazmerno površini. Koristi se za grejač ili čip poznate snage.
   - **Konvekcija**: vazduh ili tečnost na temperaturi odnosi toplotu pri h W/(m²·K). Tipično h: mirni vazduh 5–10, ventilator 25–100, voda 500–10,000. PartCraft ne računa h: u ovoj studiji nema strujanja fluida.
   - **Zračenje**: površina zrači ka okolini na temperaturi, sa emisivnošću od 0 do 1. Ono je **linearizovano** (zračenje se zapisuje kao koeficijent koji zavisi od temperature i ponovo rešava dok se ne ustali) i ide samo ka okolini: površine ne razmenjuju toplotu međusobno.
3. **Generisanje toplote** (W/m³) greje ceo deo iznutra, na primer otporan deo.
4. Pritisnite **Reši**. Deo je obojen prema temperaturi; izaberite **Toplotni fluks** u **Prikaži** da vidite kuda teče toplota. Pređite pokazivačem preko dela da pročitate oba.

Stacionarnom toplotnom toku treba mesto gde toplota može da ode: bar jedna fiksna temperatura, konvekcija ili zračenje. Deo koji samo prima toplotu nema stacionarno stanje; učinite ga prelaznim.

Tabela navodi najnižu i najvišu temperaturu i gde su, najveći toplotni fluks i **toplotni bilans**: toplotu koja ulazi ili izlazi kroz svaki uslov (fiksna temperatura beleži koliko mora da dovede ili upije), generisanu toplotu, ukupno na ulazu i izlazu i **neravnotežu**. Neravnoteža treba da bude mali deo toplote na ulazu; velika znači da se rezultatu ne može verovati.

### Tokom vremena (prelazno)

Označite **Prelazno** i zadajte **Početnu temperaturu** (ceo deo tu počinje), **Vremenski interval** i broj **Vremenskih koraka**. **Implicitni Ojler** je robustan; **Krank–Nikolson** je tačniji za iste korake, ali može da talasa nakon nagle promene. Posle rešavanja prevucite klizač **Vreme** da vidite temperature u svakom trenutku (skala boja ostaje ista za svaki trenutak). Toplotni bilans tada uključuje toplotu koja se skladišti.

## Toplotni napon: šta promena temperature radi delu?

U studiji **Statički napon** (ili **Izvijanje**), podesite **Toplotno opterećenje**:

- **Ravnomerna promena temperature**: ceo deo se zagreva (ili hladi, sa negativnim brojem) za toliko kelvina.
- **Temperature iz toplotnih uslova**: dodajte toplotne uslove istoj studiji; stacionarne temperature se prvo rešavaju na istoj mreži, pa se deo širi za α·(T − **temperaturu bez napona**).
- **Temperature tokom vremena (prelazni tok)**: dodajte toplotne uslove, pa zadajte **Početnu temperaturu**, **Vremenski interval**, **Vremenske korake** i **Korake vremena** kao za prelaznu toplotnu studiju. Temperature se rešavaju tokom vremena na istoj mreži (kocke ili tetraedri), a statičko rešenje za temperature svakog trenutka daje napon tog trenutka. **Napon u**:
  - **Najgorem trenutku** (početak): **Rešenja napona** raspoređuju trenutke ravnomerno kroz tok, uključujući početak (21, osim ako ne promenite, najviše 51). Rezultati se otvaraju u trenutku sa najvećim fon Mizesovim naponom; tabela ga imenuje, mali grafikon prikazuje vršni napon u odnosu na vreme, a klizač **Vreme** prikazuje napon u svakom rešenom trenutku (skala boja ostaje ona najgoreg trenutka).
  - **Jednom izabranom trenutku**: jedan trenutak, korak vremena najbliži **Vremenu (s)** koje zadate. Studija izvijanja uvek uzima jedan izabrani trenutak (kraj toka, osim ako ne zadate drugi).

Deo koji je kaljen (uronjen iz vrućeg u hladno) ili naglo zagrejan najviše je opterećen dok se unutrašnjost i površina najviše razlikuju: često odmah na početku. Držana temperatura važi od prvog trenutka, kao nagla promena, pa napon na samom početku zavisi od veličine elementa (samo nekoliko elemenata vidi promenu). Čitajte to kao „veoma visoko“ i pogledajte sledeće trenutke na klizaču za vrednosti koje mreža razlaže. Napon je kvazi-statički: nema inercije, nema vibracija usled nagle promene.

Deo koji može slobodno da raste nema toplotni napon: držite ga samo toliko da ne može da se pomera (na primer tri površine bez trenja pod pravim uglom). Stegnut između dva zida, on je stisnut: čelična šipka zagrejana za 50 K između krutih zidova nosi oko 117 MPa. Toplotna opterećenja se sama uravnotežuju, pa reakcije i dalje uravnotežuju samo mehanička opterećenja.

## Izvijanje: kada se vitak deo izvije?

1. Izaberite **Izvijanje (linearno)** kao **Vrstu**, i dodajte oslonce i opterećenja kao za statičku studiju.
2. Podesite **Faktore opterećenja za traženje** (koliko modova izvijanja).
3. Pritisnite **Reši**. Svaki mod ima **faktor opterećenja**: umnožak vaših opterećenja pri kom idealan deo izvija. Faktor opterećenja 3 znači tri puta vaša opterećenja; **faktor opterećenja ispod 1 znači da se izvija pod opterećenjima koja ste primenili**. Tabela takođe daje ukupno opterećenje pri svakom faktoru. Oblik moda pokazuje kako se izvija (njegova veličina ne znači ništa).

**Linearno izvijanje precenjuje stvarno opterećenje izvijanja.** Pretpostavlja savršen deo: savršeno prav, bez zaostalog napona i elastičan. Stvarni delovi imaju male nesavršenosti i mogu prvo da popuste, a tanke ljuske mogu da se izviju pri delu linearne vrednosti. Koristite široku marginu, a faktor opterećenja blizu ili ispod 3 za tanku ljusku tretirajte kao upozorenje.

## Koliko mu verovati

PartCraft proverava ove rešavače u odnosu na ručne formule: šipka između dve temperature (tačno), hladeće rebro (unutar 0.3 K), ploča koja se greje sama (tačno), kocka koja se hladi tokom vremena (unutar 0.1 % uz Krank–Nikolson), šipka naglo zagrejana na jednom kraju, slobodna šipka zagrejana (bez napona, ΔL = αLΔT), šipka stegnuta između zidova (σ = −EαΔT), kaljena ploča tokom vremena u odnosu na klasično rešenje u redovima (unutar 1 % na kockama, 2.1 % na tetraedrima u središtu ploče; 0.5 % na površini), poslednji trenutak dugog toka u odnosu na stacionarni toplotni napon (isti do milionitog dela) i Ojlerovi stubovi (unutar 1 % fiksno–slobodno, 1.5 % zglobno–zglobno). Imajte na umu:

- **Konstantne vrednosti materijala.** Provodljivost, specifična toplota i širenje se ovde ne menjaju sa temperaturom; na nekoliko stotina stepeni mogu da se promene za 10–30 %. Ni krutost se ne menja.
- **Napon tokom vremena je kvazi-statički i elastičan**: svaki trenutak je statičko rešenje (bez inercije), i nema popuštanja, pa kaljenje koje bi popustilo površinu pokazuje napon iznad granice tečenja.
- **Koeficijente konvekcije unosite vi**, ne računaju se iz strujanja vazduha ili vode.
- **Nema kontaktnog otpora**: deo je jedno čvrsto telo.
- **Samo linearno izvijanje**: bez nesavršenosti, bez popuštanja i bez ponašanja posle izvijanja.
- Stepenasti oblik kocaka i oštri unutrašnji uglovi utiču na toplotne napone na isti način kao i na druge napone (pogledajte [Provera napona i progiba](topic:simulation)).
- Ovo je laboratorijska verzija: proverite delove koji su važni na drugi način.

## Povezano

- [Provera napona i progiba (Simulacija)](topic:simulation)
- [Šta još nije izgrađeno](topic:not-built-yet)
