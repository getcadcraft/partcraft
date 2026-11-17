---
title: Simulacija strujanja fluida (studija strujanja)
summary: Strujanje kroz kanale unutar dela ili oko njega u kutiji: ulazi, izlazi, vazduh, voda ili sopstveni fluid, zatim brzina i pritisak na pokretnoj presečnoj ravni, strujne linije, površinski pritisak, pad pritiska, bilans mase, otpor i uzgon, uz ono što laminarni metod može i ne može da pokaže.
keywords: strujanje, CFD, fluid, računarska dinamika fluida, simulacija strujanja, vazduh, voda, viskoznost, gustina, Rejnoldsov broj, laminarno, turbulentno, pad pritiska, gubitak visine, ulaz, izlaz, poklopac, kapa, brzina, protok, zapreminski protok, litara u minuti, statički pritisak, strujne linije, presečna ravan, ravan preseka, otpor, uzgon, koeficijent otpora, koeficijent uzgona, čeona površina, spoljašnje strujanje, unutrašnje strujanje, cev, kanal, razvodnik, mlaznica, Bolcmanova rešetka, ostatak, konvergencija
from: 7dc75f29
---

**Studija strujanja** računa kako se fluid kreće kroz kanale unutar dela (**unutrašnje**) ili oko njega (**spoljašnje**). Podrazumevano je **laminarno, nestišljivo, izotermno i njutnovsko**: glatko strujanje fluida čija gustina i viskoznost ostaju stalne, bez toplote, turbulencije i gravitacije. Postoji i **eksperimentalni** turbulentni model, samo za kvalitativne obrasce (vidi dole). Radi na imenovanim stranama koje mrežno jezgro daje delu (vidi [Mrežno jezgro](topic:solid-kernels)).

Izaberi **Simulacija** u polju **Radni prostor**, pritisni **Nova studija** ako nema nijedne, i postavi **Tip** na **Strujanje (CFD)**. **Model strujanja** je **Laminarno** (podrazumevano) ili **Turbulentno (Spalart–Allmaras, eksperimentalno)**: vidi odeljak **Turbulentno strujanje (eksperimentalno)** dole. Strukturna podešavanja studije se čuvaju, pa se može vratiti na prethodno. Podešavanja strujanja se čuvaju u datoteci dela, a svaka promena može da se opozove.

## Izbor fluida i ćelija

- **Fluid**: vazduh ili voda na 20 °C, ili **Prilagođeno** sa sopstvenom gustinom (kg/m³) i dinamičkom viskoznošću (Pa·s). Za vazduh se koristi zakon idealnog gasa i Sutherlandov zakon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); za vodu IAPWS vrednosti (998.21 kg/m³, 1.0016 mPa·s).
- **Veličina ćelije**: prostor fluida se popunjava jednakim kockama. Ostavi prazno za automatsku veličinu; panel prikazuje mrežu. Svaki otvor i kanal treba da bude **širok najmanje 8 do 10 ćelija** za korisne brojeve; manje ćelije su tačnije i sporije (dvostruko finije je oko 16 puta više posla).
- **Zidovi**: **Interpolirano** prati krivine zidova između ćelija (podrazumevano); **Odbijanje** tretira zidove kao kockastu stepenicu.

## Strujanje unutar dela

Prostor fluida mora biti zatvoren. Dodaj **Ulaz** i **Izlaz** u panelu, zatim klikni njihove strane u prikazu:

1. **Ravna strana oko otvora** — obod na kraju cevi, ravna strana priključka. PartCraft tu zatvara rupu otvora poklopcem. Svaka rupa na toj strani pripada tom otvoru, pa kad ulaz i izlaz izlaze na istoj strani, umesto toga modeluj tanku kapu preko jednog od njih.
2. **Unutrašnja strana kape** — kao u drugim CAD alatima: modeluj tanku ploču (izvlačenje) preko otvora i izaberi njenu stranu koja dodiruje fluid.

Za ulaz postavi **brzinu** (m/s, ravnomerna preko otvora, ulazi u deo) ili **zapreminski protok** (L/min). Za izlaz postavi **statički pritisak** (Pa, manometarski). Ako otvor ostane otvoren ili je zid tanji od ćelije, unutrašnjost se spaja sa spoljašnjošću i rešavanje staje sa porukom „Nema zatvorenog prostora fluida”.

## Strujanje oko dela

Postavi **Strujanje** na **Spoljašnje**, **Brzinu**, smer ka kome teče i koliko kutija seže uzvodno, nizvodno i u strane (prazno: 1, 3 i 1 puta najveća dimenzija dela). Strana kutije kroz koju strujanje ulazi je ulaz, strana kroz koju izlazi je izlaz na 0 Pa, a strane uz tok klize. Premala kutija stiska strujanje oko dela i povećava otpor. **Referentna površina** je površina koju koeficijenti otpora i uzgona koriste (prazno: čeona površina dela gledana duž toka); uzgon se meri duž +Y, osim ako se izabere drugi smer.

## Rešavanje i čitanje rezultata

Pritisni **Reši**. Rešavanje ide u pozadini, sa brojem koraka, ostatkom i grafikom ostatka; **Zaustavi** ga prekida. Staje kad je ostatak (koliko se polje brzine još menja po koraku) ispod cilja i kad se pad pritiska ili otpor smire. Ako dostigne granicu koraka pre toga, panel crveno piše **Nije konvergiralo**: brojevi su poslednje stanje, a ne ustaljen odgovor.

- **Presečna ravan**: brzina ili statički pritisak na ravni kroz model; izaberi njenu normalu (X, Y ili Z) i prevuci klizač da je pomeriš. Zadrži pokazivač da pročitaš vrednosti.
- **Strujne linije**: iz ulaza (unutrašnje) ili iz niza sondi preko ulaznog kraja kutije u presečnoj ravni (spoljašnje).
- **Deo**: čvrsto, providno (da se vidi ravan unutra), površinski pritisak ili sakriveno.
- **Tabela**: Rejnoldsov broj, pad pritiska (srednji statički pritisak na ulazima minus na izlazima), protok i srednji pritisak svakog otvora, sila na deo, otpor i uzgon sa koeficijentima i referentnom površinom (spoljašnje), bilans mase (ulaz naspram izlazu), mreža i rešavač.

## Turbulentno strujanje (eksperimentalno)

**Model strujanja › Turbulentno (Spalart–Allmaras, eksperimentalno)** rešava osrednjeno turbulentno strujanje (stacionarni RANS): Spalart–Allmaras model daje vrtložnu viskoznost u svakoj ćeliji, a ćelije uz zidove koriste Spaldingov zakon zida umesto razrešavanja tanjeg sloja. Svuda je potpuno turbulentno (nema laminarnih oblasti, nema prelaza).

**Nije prošlo provere tačnosti.** Panel, rezultati i tabela to navode za svaku turbulentnu studiju, a upozorenje ne može da se zatvori. Koristi ga za **kvalitativne obrasce strujanja** — gde se strujanje odvaja, cirkuliše ili ubrzava — **ne za projektne brojeve**.

| Provera | Referenca | Rezultat |
|---|---|---|
| Trenje u ravnom kanalu, prva ćelija na y⁺ 49 / 98 | Dean-ova korelacija | +3.3 % / +4.7 % |
| Kanal sa razrešenim zidom (y⁺ ≈ 3), Re_τ 180: srednja brzina | DNS, Moser, Kim i Mansour | −1 % |
| Ravni kanal, y⁺ 7–15 ili 190–380 | Dean-ova korelacija | +9 do +22 % |
| Trenje cevi kroz kockaste ćelije, potpuno razvijeno, 10–30 ćelija preko | Colebrook | 30 do 34 % previše |
| Ponovno prianjanje iza stepenice, 6–14 ćelija po visini stepenice | Driver i Seegmiller, 6.26 visina stepenice | 21 do 39 % prekratko |

Rezultati se poboljšavaju samo sporo sa finijim ćelijama. Posle rešavanja tabela prikazuje **y⁺ prve ćelije** (min, srednju i max preko zidnih ćelija) i upozorava van proverenog opsega 1 do 400; cilj je oko 30 do 300. **Vreme rada:** automatske ćelije su dimenzionisane za nekoliko minuta na najviše jednom jezgru laptopa (panel prikazuje najgori slučaj za mrežu i granicu koraka; mala cev se umiri za manje od 20 sekundi). Prepolovljavanje veličine ćelije traje oko 16 puta duže. Sile na delu dolaze iz bilansa količine kretanja preko otvora ili kutije.

**Rad na tome do sada:** zidne ćelije sada usklađuju sopstveni smičući napon sa zakonom zida, što je smanjilo greške za cev i stepenicu na brojke iznad, bez menjanja rezultata za ravni kanal. To nije bilo dovoljno za projektne brojeve. Sledeći korak su finije ćelije uz zidove.

## Šta može, a šta ne može da kaže

- **Laminarni model** je samo laminaran. U cevima strujanje postaje turbulentno iznad Rejnoldsovog broja od oko 2,000 do 4,000; iza tupih tela trag počinje da odbacuje vrtloge iznad oko 50. Panel upozorava na ove tačke. Laminarni rezultat za turbulentno strujanje potcenjuje pad pritiska i pogrešno računa otpor. Eksperimentalni turbulentni model (iznad) kvalitativno pokriva turbulentno strujanje; njegovi brojevi još nisu pouzdani.
- **Metoda**: metoda Bolcmanove rešetke (lattice Boltzmann, D3Q19, sudar sa dva vremena relaksacije) izvedena do stacionarnog stanja. Unutra je blago stišljiva; PartCraft drži promene gustine na nekoliko procenata. Ako je strujanje prebrzo za ćelije, odbija da krene i kaže koliko moraju biti manje ćelije.
- **Provereno prema**: strujanju Hagen–Poiseuille u cevi kroz deo (gradijent pritiska u okviru 1 % pri 20 ćelija preko), šupljini sa pokretnim poklopcem Ghia i saradnika (u okviru 0.75 % brzine poklopca) i Schäfer–Turek benčmarku cilindra (otpor u okviru 1 % pri 10 ćelija po prečniku).
- Nije modelovano: prenos toplote, turbulencija sa projektnom tačnošću (turbulentni model je eksperimentalan), slobodne površine, kavitacija, gravitacija, pokretni delovi, nenjutnovski fluidi, hrapavi zidovi. Laboratorijska verzija: važne rezultate proveri na drugi način.
