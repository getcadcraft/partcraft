---
title: Magnetna polja u 2-D (vodič)
summary: Izračunajte magnetno polje elektromagneta ili stalnog magneta pomoću biblioteke za analizu: pokrenite primere, pročitajte gustinu fluksa, polje u procepu, induktivnost i privlačnu silu, promenite dizajn i napravite sopstveni model kalemova, magneta i gvožđa.
keywords: magnetni, magnetostatika, magnetno polje, gustina fluksa, tesla, elektromagnet, solenoid, kalem, amper-navojci, gvozdeno jezgro, vazdušni procep, permeabilnost, induktivnost, magnetna sila, reluktansa, magnetno kolo, vektorski potencijal, elektromagnetika, konačni elementi, fem, motor, aktuator, transformator, magnetostatic2d, stalni magnet, neodijum, ndfeb, ferit, remanencija, radna tačka, povratna linija, curenje, magnet za držanje
from: 215f6601
---

Biblioteka za analizu u PartCraft-u može da izračuna magnetno polje kalemova i gvožđa u 2-D: presek nečega što je dugačko i isto duž svoje dužine, na primer elektromagneta, jezgra transformatora, sabirnice ili preseka motora. Ovaj vodič pokreće primer elektromagneta iz biblioteke, čita šta on kaže, menja ga, pokazuje kako da modelujete sopstveni oblik, pa dodaje stalni magnet.

Koristi radni prostor Skripta i [biblioteku za analizu](topic:craftscript-library). Za praćenje ne morate znati jezik CraftScript; primer kaže šta svaki red radi.

## Šta se modeluje

Jezgro od gvožđa u obliku slova C, 100 × 80 mm spolja i debljine 20 mm, sa vazdušnim procepom od 2 mm u desnoj nozi. Kalem od 100 navojaka kroz koji teče 10 A (1000 amper-navojaka) namotan je oko leve noge. Sve je dugačko u smeru izvan ekrana, pa su odgovori **po metru dubine**: pomnožite sa stvarnom dubinom za pravi magnet.

`magnetostatic2d` iz biblioteke rešava magnetni vektorski potencijal na mreži kvadrata od 1 mm u kutiji vazduha oko magneta, a zatim iz njega računa gustinu fluksa **B** (u teslama).

## Pokrenite primer

1. Izaberite **Skripta** u polju **Radni prostor** s leve strane trake.
2. Otvorite karticu **Biblioteka** u panelu skripte, pa **Primeri** › **Elektromagnet: polje, procep, induktivnost**.
3. Kliknite {{ui:Otvori (samo za čitanje)}}, pa pritisnite {{key:F5}}.

Za sekund-dva platno prikazuje gustinu fluksa, a konzola ispisuje:

```
B u procepu 0.5427 T; magnetno kolo 0.5516 T (-1.6 %: rasipanje i curenje)
induktivnost 0.1539 H po metru dubine; kolo daje 0.1103 H/m, bez fluksa koji curi pored procepa
uskladištena energija 7.694 J/m; |B| doseže vrhunac 1.97 T u unutrašnjim uglovima prozora (pravi čelik bi se tu zasitio)
privlačna sila preko procepa oko 2343 N po metru dubine (117.2 N za dubinu 50 mm)
```

Grafik ispod platna je vertikalna gustina fluksa B_y duž srednje linije jezgra, s leva na desno: oko −0.55 T u levoj nozi (fluks teče naniže), gotovo ništa u prozoru, i +0.55 T u desnoj nozi i preko procepa (fluks se vraća naviše). Isti fluks prolazi kroz gvožđe i procep, pa dve noge i procep pokazuju gotovo istu vrednost.

## Pročitajte rezultate

- **Polje u procepu** iznosi 0.543 T. Računanje rukom tretira jezgro kao jedno magnetno kolo, B = μ0 N I / (g + l / μr), gde je g procep, l dužina puta kroz gvožđe, a μr relativna permeabilnost gvožđa; daje 0.552 T. Polje je malo niže od računanja rukom zato što se fluks izbočuje oko procepa (rasipanje) i deo fluksa skreće prečicom preko prozora (curenje). Sa manjim procepom ili finijom mrežom, vrednosti su bliže.
- **Induktivnost** kalema od 100 navojaka iznosi 0.154 H po metru dubine, iz energije uskladištene u polju. Formula za kolo daje manje (0.110 H/m) jer računa samo fluks kroz procep, a ne fluks koji curi pored njega.
- **Privlačna sila** koja zatvara procep iznosi B² w / (2 μ0) za lice procepa širine w: oko 2300 N po metru, ili 117 N za magnet dubine 50 mm.
- **Vrhunac** od 1.97 T nalazi se u unutrašnjim uglovima prozora, gde fluks naglo skreće. Model tretira gvožđe kao linearno; pravi električni čelik se zasiće na oko 1.5 do 2 T, pa vrednosti iznad toga tretirajte kao upozorenje, a ne kao odgovor.

:::note
Sopstveni testovi biblioteke pokreću ovaj primer i proveravaju polje u procepu u odnosu na formulu magnetnog kola pri svakoj promeni u PartCraft-u. Metod, njegove reference i ostale provere (dug solenoid, solenoid sa gvozdenim jezgrom) nalaze se u zaglavlju `magnetostatic2d`: kliknite ga u biblioteci.
:::

## Promenite dizajn

1. Kliknite {{ui:Napravi kopiju}} iznad skripte samo za čitanje. Kopija se čuva uz vaš deo.
2. Promenite vrednost pri vrhu i ponovo pritisnite {{key:F5}}. Probajte:
   - `g = 0.001;` — polovina procepa: polje u procepu skoro se udvostruči, i privlačna sila takođe (ide sa B²).
   - `mur = 200;` — lošije jezgro: više amper-navojaka troši se u gvožđu.
   - `N = 200;` — dvostruko navojaka: dvostruko polje, četiri puta veća induktivnost.
   - `h = 0.0005;` — finija mreža: tačniji odgovori, oko četiri puta više vremena.

Svako pokretanje zamenjuje platno. Promenljive koje skripta pravi (na primer `Bgap`, `L`, `F`) ostaju u listi **Promenljive** za vaše sopstvene račune.

## Napravite sopstveni oblik

Primer sve gradi iz tri liste, po jedna vrednost za svaki kvadrat mreže, što možete napraviti za bilo koji oblik nacrtan pravim linijama duž mreže:

- **Gde je gvožđe:** `iron` je tačno za kvadrate unutar jezgra. Primer ga gradi od pravougaonika: `frame & ~window & ~gap` znači „u okviru, ne u prozoru, ne u procepu“.
- **Permeabilnost:** `1 + (mur - 1) * iron` je 1 u vazduhu i `mur` u gvožđu. Za više materijala dajte im sopstvene vrednosti na isti način.
- **Struja:** `J` je gustina struje u amperima po kvadratnom metru, pozitivna izvan ekrana, negativna u njega. Kalem ima dve strane sa suprotnim znacima; primer računa `J0` tako da jedna strana nosi N I.

Zatim `r = magnetostatic2d(m, permeability, J)` ga rešava. `r.B` je gustina fluksa u svakom kvadratu (dve kolone, x i y), `r.Bmag` njen intenzitet, `r.energy` uskladištena energija po metru. `plot(x, y)` crta liniju.

Biblioteka radi u metrima, a prikaz u milimetrima, pa bi polje prikazano kakvo jeste bilo nacrtano hiljadu puta premalo. Primer ga prikazuje na kopiji mreže u milimetrima (`mm = quadGrid(…)`, pa `show(field(mm, …))`): kopirajte ta dva reda.

Podrazumevano ivica kutije zadržava polje: nijedan fluks ne izlazi kroz nju. Napravite kutiju bar dva ili tri puta veću od magneta da ovo ne bi stisnulo polje. Za simetričan magnet možete modelovati polovinu: zaglavlje `magnetostatic2d` kaže koji granični uslov da koristite na liniji simetrije.

## Stalni magneti

Drugi primer, **Primeri** › **Stalni magnet u gvozdenom jezgru: radna tačka, curenje, privlačenje**, je isto jezgro bez kalema i sa 10 mm isečka leve noge zamenjenog magnetom, namagnetisanim nagore. Pokrenite ga sa {{key:F5}}. Ispisuje:

```
magnet radi na B = 1.036 T, H = -124 kA/m (na svojoj povratnoj liniji B = Br + μ0 μr H)
B u procepu 0.6778 T; magnetno kolo bez curenja 0.9692 T (-30.1 %)
faktor curenja 1.53: od fluksa koji izlazi iz magneta, 65 % prelazi procep između polnih lica
privlačna sila preko procepa oko 3656 N po metru dubine (182.8 N za dubinu 50 mm)
```

- **Radna tačka.** Magnet se opisuje svojom **remanencijom** Br (poljem koje zadržava kada ga gvožđe kratko spoji: oko 1.2 T za sinterovani NdFeB magnet, 0.4 T za ferit) i svojom povratnom permeabilnošću (oko 1.05 i 1.1). Otvaranje procepa spušta ga niz njegovu povratnu liniju: ovde na 1.04 T, sa H usmerenim suprotno od B unutar njega.
- **Curenje.** Računanje rukom bez curenja daje 0.97 T u procepu; model daje 0.68 T. Magnet tera svoj fluks snažnim potiskom na kratkoj dužini, pa veliki deo ide pravo nazad preko prozora umesto kroz procep. Faktor curenja kaže koliko: ovde 1.53. Postavite `g = 0;` za zatvoreni držač: magnet tada radi unutar pola procenta od računanja rukom.
- **Magneti u sopstvenom modelu.** Dajte `magnetostatic2d` magnete kao `struct('Br', Br)`, gde `Br` ima po jedan red za svaki kvadrat mreže, sa remanencijom duž x i y u teslama (nula van magneta), i dajte kvadratima magneta njihovu povratnu permeabilnost u listi permeabilnosti:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T nagore u kvadratima gde je mag tačno
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Za magnet namagnetisan pod uglom, stavite `Br·cos(angle)` i `Br·sin(angle)` u dve kolone; za prsten namagnetisan ka spolja, izračunajte smer svakog kvadrata iz njegovog položaja. `r.H` daje jačinu polja H u svakom kvadratu.

Model drži magnet na njegovoj pravoj povratnoj liniji ma koliko jako bio pogonjen. Pravi magnet pogonjen preko svog kolena (velikim procepom, jakim kalemom ili toplotom) trajno gubi deo jačine; proverite radnu tačku prema krivoj proizvođača za klasu i temperaturu.

Testovi biblioteke proveravaju magnete u odnosu na dva računska rezultata: okrugao magnet na otvorenom vazduhu (unutar njega B = Br / (1 + μr)) i magnet zatvoren gvozdenim držačem (magnetno kolo), oba unutar 1 %.

## Šta još ne radi

- **Zasićenje.** Gvožđe je linearno: dvostruka struja, dvostruko polje, bez granice.
- **Razmagnetisanje.** Magneti ostaju na svojoj pravoj povratnoj liniji (vidi iznad).
- **Vrtložne struje** i **gubici** (gubici u gvožđu, gubici u bakru).
- **Pokretni delovi i moment.** Nema rotora koji se okreće u statoru, nema momenta u odnosu na ugao.
- **Okrugli oblici.** Mreža je od jednakih kvadrata, pa krive konture izlaze stepenaste.
- **3-D.** Sve je presek nečega dugačkog.

Projektovanje motora (rotirajući rotor, moment i gubici u 2-D) razmatra se za kasniju verziju. Vidi [Još nije urađeno](topic:not-built-yet).
