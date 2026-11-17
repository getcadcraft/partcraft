---
title: Simulacija strujanja fluida (studija strujanja)
summary: Strujanje kroz kanale unutar dijela ili oko njega u kutiji: ulazi, izlazi, zrak, voda ili vlastiti fluid, zatim brzina i tlak na pomičnoj presječnoj ravnini, strujnice, tlak na površini, pad tlaka, bilanca mase, otpor i uzgon, uz ono što laminarna metoda može i ne može pokazati.
keywords: strujanje, CFD, fluid, dinamika fluida, simulacija strujanja, zrak, voda, viskoznost, gustoća, Reynoldsov broj, laminarno, turbulentno, pad tlaka, gubitak tlaka, ulaz, izlaz, poklopac, čep, brzina, protok, volumni protok, litara u minuti, statički tlak, strujnice, presječna ravnina, ravnina presjeka, otpor, uzgon, koeficijent otpora, koeficijent uzgona, čeona površina, vanjsko strujanje, unutarnje strujanje, cijev, kanal, razdjelnik, mlaznica, lattice Boltzmann, rezidual, konvergencija
from: 7dc75f29
---

Studija **Strujanje** izračunava kako se fluid kreće kroz kanale unutar vašeg dijela (**unutarnje**) ili oko njega (**vanjsko**). Standardno je **laminarna, nestlačiva, izotermna i Newtonovska**: glatko strujanje fluida čija gustoća i viskoznost ostaju stalne, bez topline, turbulencije i gravitacije. Dostupan je i **eksperimentalni** turbulentni model, samo za kvalitativne obrasce (vidi niže). Radi na imenovanim plohama koje mrežna jezgra daje dijelu (vidi [Mrežna jezgra](topic:solid-kernels)).

Odaberite **Simulacija** u okviru **Radni prostor**, pritisnite **Nova studija** ako nema nijedne, i postavite **Vrsta** na **Strujanje (CFD)**. **Model strujanja** je **Laminarni** (standardno) ili **Turbulentni (Spalart–Allmaras, eksperimentalno)**: vidi **Turbulentno strujanje (eksperimentalno)** niže. Konstrukcijske postavke studije se čuvaju, pa se možete vratiti. Postavke strujanja spremaju se u datoteku dijela i svaka se promjena može poništiti.

## Odaberite fluid i ćelije

- **Fluid**: zrak ili voda na 20 °C, ili **Prilagođeno** s vlastitom gustoćom (kg/m³) i dinamičkom viskoznošću (Pa·s). Za zrak se koriste zakon idealnog plina i Sutherlandov zakon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); za vodu vrijednosti IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Veličina ćelije**: prostor fluida ispunjen je jednakim kockama. Ostavite prazno za automatsku veličinu; ploča prikazuje mrežu. Svaki otvor i kanal treba biti **najmanje 8 do 10 ćelija** širok za upotrebljive brojeve; manje ćelije su točnije, ali sporije (dvostruko finije je oko 16 puta više posla).
- **Stijenke**: **Interpolirane** prate zakrivljene stijenke među ćelijama (standardno); **Bounce-back** tretira stijenke kao stepenastu kocku.

## Strujanje unutar dijela

Prostor fluida mora biti zatvoren. Dodajte **Ulaz** i **Izlaz** na ploči, zatim kliknite njihove plohe u prikazu:

1. **Ravna ploha oko otvora** — rub na kraju cijevi, ploha priključka. PartCraft tamo zatvara rupu otvora poklopcem. Svaka rupa na toj plohi pripada tom otvoru, pa kad se ulaz i izlaz otvore na istoj plohi, umjesto toga modelirajte tanki čep preko jednog od njih.
2. **Unutarnja ploha čepa** — kao u drugim CAD alatima: modelirajte tanku ploču (izvlačenje) preko otvora i odaberite njezinu plohu koja dodiruje fluid.

Za ulaz postavite **brzinu** (m/s, jednoliko kroz otvor, u dio) ili **volumni protok** (L/min). Za izlaz postavite **statički tlak** (Pa, relativni). Ako je otvor ostavljen otvorenim ili je stijenka tanja od ćelije, unutrašnjost se spaja s vanjštinom i izračun se zaustavlja uz poruku „Nema zatvorenog prostora fluida”.

## Strujanje oko dijela

Postavite **Strujanje** na **Vanjsko**, zatim **Brzinu**, smjer u koji struji, i koliko kutija seže uzvodno, nizvodno i u stranama (prazno: 1, 3 i 1 puta najveća veličina dijela). Ploha kutije kroz koju strujanje ulazi je ulaz, ploha kroz koju izlazi je izlaz pri 0 Pa, a plohe uz smjer strujanja klize. Premala kutija stišće strujanje oko dijela i povećava otpor. **Referentna površina** je površina koju koriste koeficijenti otpora i uzgona (prazno: čeona površina dijela gledano duž strujanja); uzgon se mjeri duž +Y osi, osim ako odaberete drugi smjer.

## Izračunajte i čitajte rezultate

Pritisnite **Izračunaj**. Izračun se odvija u pozadini, s brojem koraka, reziduala i grafom reziduala; **Zaustavi** ga prekida. Zaustavlja se kad je rezidual (koliko se polje brzine još mijenja po koraku) ispod cilja i kad se pad tlaka ili otpor ustali. Ako prvo dosegne ograničenje koraka, ploča crveno prikazuje **Nije konvergirano**: brojevi su posljednje stanje, a ne ustaljen odgovor.

- **Presječna ravnina**: brzina ili statički tlak na ravnini kroz model; odaberite njezinu normalu (X, Y ili Z) i povucite klizač da je pomaknete. Zadržite pokazivač iznad nje da pročitate vrijednosti.
- **Strujnice**: iz ulaza (unutarnje) ili iz rešetke preko ulazne strane kutije u presječnoj ravnini (vanjsko).
- **Dio**: puno, prozirno (da vidite ravninu unutra), tlak na površini ili skriveno.
- **Tablica**: Reynoldsov broj, pad tlaka (srednji statički tlak na ulazima minus onaj na izlazima), protok i srednji tlak svakog otvora, sila na dio, otpor i uzgon s koeficijentima i referentnom površinom (vanjsko), bilanca mase (ulaz naspram izlazu), mreža i rješavač.

## Turbulentno strujanje (eksperimentalno)

**Model strujanja › Turbulentni (Spalart–Allmaras, eksperimentalno)** rješava vremenski osrednjeno turbulentno strujanje (stacionarni RANS): Spalart–Allmaras model daje vrtložnu viskoznost u svakoj ćeliji, a ćelije uz stijenke koriste Spaldingov zakon stijenke umjesto razlučivanja tankog sloja. Posvuda je potpuno turbulentno (nema laminarnih područja, nema prijelaza).

**Nije prošao provjere točnosti.** Ploča, rezultati i tablica to navode za svaku turbulentnu studiju, a upozorenje se ne može zatvoriti. Koristite ga za **kvalitativne obrasce strujanja** — gdje se strujanje odvaja, vrtloži ili ubrzava — **ne za projektantske brojeve**.

| Provjera | Referenca | Rezultat |
|---|---|---|
| Ravni kanal, trenje, prva ćelija na y⁺ 49 / 98 | Deanova korelacija | +3.3 % / +4.7 % |
| Kanal s razlučenom stijenkom (y⁺ ≈ 3), Re_τ 180: srednja brzina | Moser, Kim & Mansour DNS | −1 % |
| Ravni kanal, y⁺ 7–15 ili 190–380 | Deanova korelacija | +9 do +22 % |
| Trenje u cijevi kroz ćelije kocke, potpuno razvijeno, 10–30 ćelija široko | Colebrook | 30 do 34 % preveliko |
| Ponovno prijanjanje iza stepenice okrenute unatrag, 6–14 ćelija po visini stepenice | Driver & Seegmiller, 6.26 visina stepenice | 21 do 39 % prekratko |

Rezultati se samo polako poboljšavaju s finijim ćelijama. Nakon izračuna tablica prikazuje **y⁺ prve ćelije** (min, srednju i maks. vrijednost preko ćelija uz stijenke) i upozorava izvan provjerenog raspona 1 do 400; cilj je oko 30 do 300. **Vrijeme izvođenja:** automatske ćelije dimenzionirane su za najviše nekoliko minuta na jednoj jezgri prijenosnog računala (ploča prikazuje najgori slučaj za mrežu i ograničenje koraka; mala cijev se ustali za manje od 20 sekundi). Prepolovljavanje veličine ćelije traje oko 16 puta duže. Sile na dio dolaze iz bilance količine gibanja preko otvora ili kutije.

**Rad na tome do sada:** ćelije uz stijenke sada usklađuju vlastito posmično naprezanje sa zakonom stijenke, što je smanjilo pogreške za cijev i stepenicu na gore navedene brojke, bez promjene rezultata za ravni kanal. To nije bilo dovoljno za projektantske brojeve. Sljedeći korak je finija mreža ćelija uz stijenke.

## Što može, a što ne može reći

- **Laminarni model** je samo laminaran. U cijevima strujanje postaje turbulentno iznad Reynoldsova broja od oko 2,000 do 4,000; iza tupih tijela vrtlozi se počinju odvajati iznad oko 50. Ploča upozorava na tim točkama. Laminarni rezultat za turbulentno strujanje podcjenjuje pad tlaka i pogrešno računa otpor. Eksperimentalni turbulentni model (gore) kvalitativno pokriva turbulentno strujanje; njegovi brojevi još nisu pouzdani.
- **Metoda:** metoda rešetke Boltzmanna (lattice Boltzmann; D3Q19, sudar s dva vremena relaksacije) izvedena do ustaljenog stanja. Unutra je blago stlačiva; PartCraft zadržava promjene gustoće na nekoliko posto. Ako je strujanje prebrzo za ćelije, odbija započeti i kaže koliko moraju biti manje.
- **Provjereno prema:** Hagen–Poiseuilleovo strujanje u cijevi kroz dio (gradijent tlaka unutar 1 % pri 20 ćelija), šupljina pokretana poklopcem Ghia i dr. (unutar 0.75 % brzine poklopca) i Schäfer–Turekov test cilindra (otpor unutar 1 % pri 10 ćelija po promjeru).
- Nije modelirano: prijenos topline, turbulencija s projektantskom točnošću (turbulentni model je eksperimentalan), slobodne površine, kavitacija, gravitacija, pokretni dijelovi, nenjutnovski fluidi, hrapave stijenke. Laboratorijska verzija: važne rezultate provjerite na drugi način.
