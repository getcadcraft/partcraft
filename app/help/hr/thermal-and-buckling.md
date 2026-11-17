---
title: Toplina, toplinsko naprezanje i izvijanje
summary: Pronađite temperature u dijelu iz zadanih temperatura, toplinskog toka, toplinske snage, konvekcije i zračenja (ustaljeno ili tijekom vremena), opteretite studiju naprezanja porastom temperature te pronađite opterećenje pri kojem se vitki dio izvija, uz ono što svaka metoda može i ne može pokazati.
keywords: toplinski, prijenos topline, toplina, temperatura, vođenje, konvekcija, koeficijent prijelaza, zračenje, emisivnost, toplinski tok, toplinska snaga, stvaranje topline, toplinski ponor, prijelazni, vrijeme, hlađenje, zagrijavanje, Crank-Nicolson, implicitni Euler, toplinska bilanca, toplinsko naprezanje, toplinsko naprezanje tijekom vremena, prijelazno toplinsko naprezanje, gašenje, toplinski udar, povijest naprezanja, najgori trenutak, toplinsko širenje, koeficijent širenja, izvijanje, Eulerovo izvijanje, faktor opterećenja, kritično opterećenje, stup, vitak, svojstvena vrijednost
from: 1a1b7545
---

Ove studije žive u radnom prostoru Simulation, uz statičko naprezanje i prirodne frekvencije (vidi [Provjera naprezanja i progiba](topic:simulation)). Biraju se u kutiji **Vrsta** na ploči. Koriste istu mrežu malih kockica i isti popis materijala; svaki materijal iz popisa ima toplinsku vodljivost, specifičnu toplinu i koeficijent širenja (tipične vrijednosti iz priručnika, prikazane pod **Svojstva**).

## Toplina: kamo ide toplina?

1. Odaberite **Toplinska (prijenos topline)** kao **Vrsta**.
2. Dodajte toplinske uvjete s popisa **Dodaj** na ploči, zatim kliknite njihove plohe (kao kod oslonaca i opterećenja):
   - **Fiksna temperatura**: ploha je održavana na temperaturi, u °C.
   - **Toplinski tok**: W/m² koji ulazi u plohu (negativan izlazi). Djeluje na stvarnu površinu plohe, čak i tamo gdje kockice tvore stepenice.
   - **Toplinska snaga**: ukupno u vatima, raspodijeljeno na odabrane plohe prema površini. Koristite za grijač ili čip poznate snage.
   - **Konvekcija**: zrak ili tekućina na temperaturi odvodi toplinu brzinom h W/(m²·K). Tipični h: mirni zrak 5–10, ventilator 25–100, voda 500–10,000. PartCraft ne računa h: u ovoj studiji nema protoka fluida.
   - **Zračenje**: ploha zrači prema okolini na zadanoj temperaturi, s emisivnošću od 0 do 1. Ono je **linearizirano** (zračenje je zapisano kao koeficijent koji ovisi o temperaturi i ponovno se rješava dok se ne ustali) i ide samo u okolinu: plohe ne razmjenjuju toplinu međusobno.
3. **Stvaranje topline** (W/m³) grije cijeli dio iznutra, na primjer otporni dio.
4. Pritisnite **Riješi**. Dio je obojen prema temperaturi; odaberite **Toplinski tok** u **Prikaži** da vidite kamo teče toplina. Pokažite na dio da očitate oboje.

Ustaljeni toplinski tok treba mjesto kamo toplina ide: barem jednu fiksnu temperaturu, konvekciju ili zračenje. Dio koji samo prima toplinu nema ustaljeno stanje; napravite ga prijelaznim.

Tablica navodi najnižu i najvišu temperaturu i gdje su, najveći toplinski tok te **toplinsku bilancu**: toplinu koja ulazi ili izlazi kroz svaki uvjet (fiksna temperatura broji što mora dati ili upiti), generiranu toplinu, ukupne ulaze i izlaze te **neravnotežu**. Neravnoteža treba biti sićušan dio ulazne topline; velika znači da se rezultatu ne smije vjerovati.

### Tijekom vremena (prijelazno)

Označite **Prijelazno** i zadajte **Početnu temperaturu** (cijeli dio počinje od nje), **Trajanje** i broj **Koraka vremena**. **Implicitni Euler** je robustan; **Crank–Nicolson** je točniji za iste korake, ali može titrati nakon iznenadne promjene. Nakon rješavanja povucite klizač **Vrijeme** da vidite temperature u svakom trenutku (skala boja ostaje ista za svaki trenutak). Bilanca topline tada uključuje toplinu koja se pohranjuje.

## Toplinsko naprezanje: što promjena temperature čini dijelu?

U studiji **Statičko naprezanje** (ili **Izvijanje**) postavite **Toplinsko opterećenje**:

- **Jednolika promjena temperature**: cijeli dio se zagrijava (ili hladi, s negativnim brojem) za toliko kelvina.
- **Temperature iz toplinskih uvjeta**: dodajte toplinske uvjete istoj studiji; ustaljene temperature se prvo rješavaju na istoj mreži, zatim se dio širi za α·(T − **temperaturu bez naprezanja**).
- **Temperature tijekom vremena (prijelazna studija)**: dodajte toplinske uvjete, zatim zadajte **Početnu temperaturu**, **Trajanje**, **Korake vremena** i **Vremensko koračanje** kao kod prijelazne toplinske studije. Temperature se rješavaju tijekom vremena na istoj mreži (kockice ili tetraedri), a statičko rješenje za temperature svakog trenutka daje naprezanje tog trenutka. **Naprezanje u**:
  - **Najgorem trenutku** (početku): **Rješenja naprezanja** raspoređuju trenutke ravnomjerno kroz trajanje, uključujući početak (21 ako ne promijenite, najviše 51). Rezultati se otvaraju u trenutku s najvećim von Misesovim naprezanjem; tablica ga navodi, mali grafikon prikazuje vršno naprezanje u odnosu na vrijeme, a klizač **Vrijeme** prikazuje naprezanje u svakom riješenom trenutku (skala boja ostaje ona najgoreg trenutka).
  - **Jednom odabranom trenutku**: jedan trenutak, korak vremena najbliži **Vremenu (s)** koje zadate. Studija izvijanja uvijek uzima jedan odabrani trenutak (kraj trajanja, osim ako ne zadate drugi).

Dio koji se gasi (uranja iz vruće u hladno) ili iznenada grije najviše je naprezan dok se unutrašnjost i površina najviše razlikuju: često odmah na početku. Držana temperatura primjenjuje se od prvog trenutka, kao iznenadna promjena, pa naprezanje na samom početku ovisi o veličini elementa (samo nekoliko elemenata vidi promjenu). Čitajte to kao „vrlo visoko“ i pogledajte sljedeće trenutke na klizaču za vrijednosti koje mreža razlučuje. Naprezanje je kvazistatično: nema inercije, nema vibracija od iznenadne promjene.

Dio koji je slobodan da raste nema toplinsko naprezanje: držite ga samo toliko da se ne miče (na primjer tri plohe bez trenja pod pravim kutom). Stisnut između dva zida je stisnut: čelična šipka zagrijana za 50 K između krutih zidova nosi oko 117 MPa. Toplinska opterećenja se sama uravnotežuju, pa reakcije i dalje uravnotežuju samo mehanička opterećenja.

## Izvijanje: kada se vitki dio slama?

1. Odaberite **Izvijanje (linearno)** kao **Vrstu** i dodajte oslonce i opterećenja kao kod statičke studije.
2. Postavite **Faktore opterećenja za pronalaženje** (koliko oblika izvijanja).
3. Pritisnite **Riješi**. Svaki oblik ima **faktor opterećenja**: višekratnik vaših opterećenja pri kojem idealan dio izvija. Faktor 3 znači tri puta vaša opterećenja; **faktor opterećenja manji od 1 znači da se izvija pod opterećenjima koja ste primijenili**. Tablica također daje ukupno opterećenje pri svakom faktoru. Oblik izvijanja pokazuje kako se izvija (njegova veličina ne znači ništa).

**Linearno izvijanje precjenjuje stvarno opterećenje izvijanja.** Pretpostavlja savršen dio: savršeno ravan, bez zaostalog naprezanja i elastičan. Pravi dijelovi imaju male nesavršenosti i mogu prvo popustiti, a tankostijene ljuske se mogu izviti pri djeliću linearne vrijednosti. Koristite široku rezervu, a faktor opterećenja blizu ili ispod 3 za tanku ljusku smatrajte upozorenjem.

## Koliko mu vjerovati

PartCraft provjerava ove rješavače prema formulama s papira: šipka između dvije temperature (točno), hladeći rebro (unutar 0.3 K), ploča koja se sama grije (točno), kocka koja se hladi tijekom vremena (unutar 0.1 % s Crank–Nicolsonom), šipka iznenada zagrijana na jednom kraju, slobodna šipka zagrijana (bez naprezanja, ΔL = αLΔT), šipka držana između zidova (σ = −EαΔT), ploha koja se gasi tijekom vremena naspram klasičnog rješenja u redu (unutar 1 % na kockicama, 2.1 % na tetraedrima u središtu ploče; 0.5 % na njezinoj površini), posljednji trenutak dugog izvođenja naspram ustaljenog toplinskog naprezanja (isto do milijuntog dijela) i Eulerovi stupovi (unutar 1 % učvršćen–slobodan, 1.5 % zglobno–zglobni). Imajte na umu:

- **Stalne vrijednosti materijala.** Vodljivost, specifična toplina i širenje ovdje se ne mijenjaju s temperaturom; na nekoliko stotina stupnjeva mogu se promijeniti za 10–30 %. Ni krutost se ne mijenja.
- **Naprezanje tijekom vremena je kvazistatično i elastično**: svaki trenutak je statičko rješenje (bez inercije), i nema popuštanja, pa gašenje koje bi popustilo površinu pokazuje naprezanje iznad granice popuštanja.
- **Koeficijenti konvekcije su vaš unos**, nisu izračunati iz protoka zraka ili vode.
- **Nema kontaktnog otpora**: dio je jedno tijelo.
- **Samo linearno izvijanje**: nema nesavršenosti, nema popuštanja, nema ponašanja nakon izvijanja.
- Stepenasti oblik kockica i oštri unutarnji kutovi utječu na toplinska naprezanja isto kao i na druga naprezanja (vidi [Provjera naprezanja i progiba](topic:simulation)).
- Ovo je laboratorijska verzija: dijelove koji su bitni provjerite na drugi način.

## Povezano

- [Provjera naprezanja i progiba (Simulation)](topic:simulation)
- [Što još nije izrađeno](topic:not-built-yet)
