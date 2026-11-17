---
title: Toplota, termičko naprezanje i izvijanje
summary: Nađite temperature u dijelu iz fiksnih temperatura, toplotnog fluksa, toplotne snage, konvekcije i zračenja (ustaljeno ili kroz vrijeme), opteretite studiju naprezanja porastom temperature i nađite opterećenje pri kojem vitki dio izvija, sa onim što svaka metoda može a što ne može reći.
keywords: termički, prijenos toplote, toplota, temperatura, provođenje, konvekcija, koeficijent prijelaza, zračenje, emisivnost, toplotni fluks, toplotna snaga, generisanje toplote, hladnjak, prelazno, vrijeme, hlađenje, zagrijavanje, Crank-Nicolson, implicitni Ojler, toplotni bilans, termičko naprezanje, naprezanje kroz vrijeme, prelazno termičko naprezanje, gašenje, termički udar, historija naprezanja, najgori trenutak, toplotno širenje, koeficijent širenja, izvijanje, Ojlerovo izvijanje, faktor opterećenja, kritično opterećenje, stub, vitak, svojstvena vrijednost
from: 1a1b7545
---

Ove studije žive u radnom prostoru Simulacija, pored statičkog naprezanja i prirodnih frekvencija (vidi [Provjera naprezanja i progiba (Simulacija)](topic:simulation)). Biraju se u kutiji **Vrsta** na panelu. Koriste istu mrežu malih kockica i istu listu materijala; svaki materijal iz biblioteke ima toplotnu provodljivost, specifičnu toplotu i koeficijent širenja (tipične vrijednosti iz priručnika, prikazane pod **Svojstva**).

## Toplota: kuda ide toplota?

1. Izaberite **Toplotna (prijenos toplote)** kao **Vrsta**.
2. Dodajte toplotne uslove iz liste **{{ui:Dodaj}}** na panelu, zatim kliknite njihove površi (kao kod oslonaca i opterećenja):
   - **Fiksna temperatura**: površ je držana na temperaturi, u °C.
   - **Toplotni fluks**: W/m² koji ulazi u površ (negativno izlazi). Djeluje na stvarnu površinu, čak i tamo gdje kockice prave stepenice.
   - **Toplotna snaga**: ukupno u vatima, raspodijeljeno na izabrane površi po površini. Koristi se za grijač ili čip poznate snage.
   - **Konvekcija**: zrak ili tečnost na temperaturi odnosi toplotu brzinom h W/(m²·K). Tipično h: mirni zrak 5–10, ventilator 25–100, voda 500–10,000. PartCraft ne računa h: u ovoj studiji nema strujanja fluida.
   - **Zračenje**: površ zrači prema okolini na temperaturi, sa emisivnošću od 0 do 1. Ono je **linearizovano** (zračenje je zapisano kao koeficijent koji zavisi od temperature i ponovo se rješava dok se ne ustali) i ide samo u okolinu: površi ne razmjenjuju toplotu međusobno.
3. **Generisanje toplote** (W/m³) zagrijava cijeli dio iznutra, na primjer otporni dio.
4. Pritisnite **Riješi**. Dio je obojen temperaturom; izaberite **Toplotni fluks** u **Prikaži** da vidite kuda teče toplota. Pokažite na dio da pročitate oboje.

Ustaljeni toplotni tok treba mjesto kamo toplota ide: bar jednu fiksnu temperaturu, konvekciju ili zračenje. Dio koji samo prima toplotu nema ustaljeno stanje; napravite ga prelaznim.

Tabela navodi najnižu i najvišu temperaturu i gdje su, najveći toplotni fluks i **toplotni bilans**: toplotu koja ulazi ili izlazi kroz svaki uslov (fiksna temperatura broji koliko mora dati ili upiti), generisanu toplotu, ukupno ulaz i izlaz, i **neravnotežu**. Neravnoteža treba biti mali dio ulazne toplote; velika znači da se rezultatu ne može vjerovati.

### Kroz vrijeme (prelazno)

Označite **Prelazno** i unesite **Početnu temperaturu** (cijeli dio počinje od nje), **Vremenski raspon** i broj **Vremenskih koraka**. **Implicitni Ojler** je robustan; **Crank–Nicolson** je tačniji za iste korake, ali može da oscilira nakon naglе promjene. Nakon rješavanja pomjerite klizač **Vrijeme** da vidite temperature u svakom trenutku (skala boja ostaje ista za svaki trenutak). Bilans toplote tada uključuje toplotu koja se uskladištila.

## Termičko naprezanje: šta promjena temperature radi dijelu?

U studiji **Statičko naprezanje** (ili **Izvijanje**) postavite **Termičko opterećenje**:

- **Ujednačena promjena temperature**: cijeli dio se zagrije (ili ohladi, sa negativnim brojem) za toliko kelvina.
- **Temperature iz toplotnih uslova**: dodajte toplotne uslove istoj studiji; ustaljene temperature se prvo rješavaju na istoj mreži, zatim se dio širi za α·(T − **temperatura bez naprezanja**).
- **Temperature kroz vrijeme (prelazni proračun)**: dodajte toplotne uslove, zatim unesite **Početnu temperaturu**, **Vremenski raspon**, **Vremenske korake** i **Vremensku shemu** kao za prelaznu toplotnu studiju. Temperature se rješavaju kroz vrijeme na istoj mreži (kockice ili tetraedri), a statičko rješenje na temperaturama svakog trenutka daje naprezanje tog trenutka. **Naprezanje u**:
  - **Najgorem trenutku** (početku): **Rješenja naprezanja** raspoređuju trenutke ravnomjerno kroz period, uključujući početak (21, osim ako ne promijenite, najviše 51). Rezultati se otvaraju u trenutku sa najvećim von Misesovim naprezanjem; tabela ga imenuje, mali grafikon prikazuje vršno naprezanje u odnosu na vrijeme, a klizač **Vrijeme** prikazuje naprezanje u svakom riješenom trenutku (skala boja ostaje ona najgoreg trenutka).
  - **Jednom izabranom vremenu**: jedan trenutak, korak vremena najbliži **Vremenu (s)** koje date. Studija izvijanja uvijek uzima jedan izabrani trenutak (kraj perioda, ako ne postavite drugi).

Dio koji se gasi (uroni se iz vrućeg u hladno) ili naglo zagrije najviše je naprezan dok se unutrašnjost i površina najviše razlikuju: često baš na početku. Držana temperatura djeluje od prvog trenutka, kao nagla promjena, pa naprezanje na samom početku zavisi od veličine elemenata (samo nekoliko elemenata vidi promjenu). Čitajte to kao „veoma visoko“ i gledajte naredne trenutke klizača za vrijednosti koje mreža razlikuje. Naprezanje je kvazistatičko: bez inercije, bez vibracija od nagle promjene.

Dio koji slobodno raste nema termičko naprezanje: pridržite ga samo toliko da se ne pomjera (na primjer tri bezfrikciona lica pod pravim uglovima). Držan između dva zida je stisnut: čelična šipka zagrijana za 50 K između krutih zidova nosi oko 117 MPa. Termička opterećenja se sama uravnotežuju, pa se reakcije i dalje uravnotežuju samo sa mehaničkim opterećenjima.

## Izvijanje: kada se vitki dio slomi?

1. Izaberite **Izvijanje (linearno)** kao **Vrsta**, i dodajte oslonce i opterećenja kao za statičku studiju.
2. Postavite **Faktore opterećenja za pronalaženje** (koliko oblika izvijanja).
3. Pritisnite **Riješi**. Svaki oblik ima **faktor opterećenja**: umnožak vaših opterećenja pri kojem idealan dio izvija. Faktor 3 znači tri puta vaša opterećenja; **faktor opterećenja manji od 1 znači da izvija pod opterećenjima koja ste zadali**. Tabela daje i ukupno opterećenje pri svakom faktoru. Oblik pokazuje kako izvija (njegova veličina ne znači ništa).

**Linearno izvijanje precjenjuje stvarno opterećenje izvijanja.** Pretpostavlja savršen dio: savršeno ravan, bez zaostalog naprezanja i elastičan. Stvarni dijelovi imaju male nesavršenosti i mogu prvo popustiti, a tankozidne ljuske mogu izviti pri djeliću linearne vrijednosti. Koristite široku rezervu, a faktor opterećenja blizu ili ispod 3 za tanku ljusku smatrajte upozorenjem.

## Koliko mu vjerovati

PartCraft provjerava ove rješavače naspram formula izvedenih rukom: šipka između dvije temperature (tačno), rebro hlađenja (unutar 0.3 K), ploča koja se sama zagrijava (tačno), kocka koja se hladi kroz vrijeme (unutar 0.1 % uz Crank–Nicolson), šipka naglo zagrijana na jednom kraju, slobodna šipka zagrijana (bez naprezanja, ΔL = αLΔT), šipka držana između zidova (σ = −EαΔT), ploča gašena kroz vrijeme naspram klasičnog rješenja u redu (unutar 1 % na kockama, 2.1 % na tetraedrima u centru ploče; 0.5 % na površini), posljednji trenutak duge studije naspram ustaljenog termičkog naprezanja (isto do milioniti dio) i Ojlerovi stubovi (unutar 1 % fiksno–slobodno, 1.5 % zglobno–zglobno). Imajte na umu:

- **Konstantne vrijednosti materijala.** Provodljivost, specifična toplota i širenje se ovdje ne mijenjaju sa temperaturom; na nekoliko stotina stepeni mogu se promijeniti za 10–30 %. Ni krutost se ne mijenja.
- **Naprezanje kroz vrijeme je kvazistatičko i elastično**: svaki trenutak je statičko rješenje (bez inercije), i nema popuštanja, pa gašenje koje bi popustilo površinu pokazuje naprezanje iznad granice popuštanja.
- **Koeficijenti konvekcije su vaš unos**, a ne izračunati iz strujanja zraka ili vode.
- **Nema kontaktnog otpora**: dio je jedno tijelo.
- **Samo linearno izvijanje**: bez nesavršenosti, bez popuštanja, bez ponašanja nakon izvijanja.
- Stepenasti oblik kockica i oštri unutrašnji uglovi utiču na termička naprezanja isto kao i na druga naprezanja (vidi [Provjera naprezanja i progiba (Simulacija)](topic:simulation)).
- Ovo je laboratorijska verzija: dijelove koji su bitni provjerite na drugi način.

## Povezano

- [Provjera naprezanja i progiba (Simulacija)](topic:simulation)
- [Šta još nije napravljeno](topic:not-built-yet)
