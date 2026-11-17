---
title: Simulacija strujanja fluida (studija strujanja)
summary: Strujanje kroz kanale unutar dijela ili oko njega u kutiji: ulazi, izlazi, zrak, voda ili vlastiti fluid, zatim brzina i pritisak na pomjerivoj presječnoj ravni, strujnice, pritisak na površini, pad pritiska, bilans mase, otpor i uzgon, te šta laminarna metoda može a šta ne može pokazati.
keywords: strujanje, CFD, fluid, računalna dinamika fluida, simulacija strujanja, zrak, voda, viskoznost, gustoća, Rejnoldsov broj, laminarno, turbulentno, pad pritiska, gubitak visine, ulaz, izlaz, poklopac, čep, brzina, protok, volumenski protok, litara u minuti, statički pritisak, strujnice, presječna ravan, ravan presjeka, otpor, uzgon, koeficijent otpora, koeficijent uzgona, čeona površina, vanjsko strujanje, unutrašnje strujanje, cijev, kanal, razdjelnik, mlaznica, Boltzmannova metoda mreže, ostatak, konvergencija
from: 7dc75f29
---

Studija **Strujanje** određuje kako se fluid kreće kroz kanale unutar vašeg dijela (**unutrašnje**) ili oko njega (**vanjsko**). Podrazumijevano je **laminarno, nestišljivo, izotermno i njutnovsko**: glatko strujanje fluida čija gustoća i viskoznost ostaju nepromijenjene, bez toplote, bez turbulencije i bez gravitacije. Postoji i **eksperimentalni** turbulentni model, samo za kvalitativne obrasce (vidi niže). Radi na imenovanim površinama koje mrežno jezgro daje dijelu (vidi [Mrežno jezgro](topic:solid-kernels)).

Odaberite **Simulacija** u okviru **Radni prostor**, pritisnite **Nova studija** ako je nema, i postavite **Tip** na **Strujanje (CFD)**. **Model strujanja** je **Laminarni** (podrazumijevano) ili **Turbulentni (Spalart–Allmaras, eksperimentalno)**: vidi **Turbulentno strujanje (eksperimentalno)** niže. Strukturalne postavke studije se čuvaju, pa se možete vratiti. Postavke strujanja se čuvaju u datoteci dijela, a svaka promjena se može poništiti.

## Odaberite fluid i ćelije

- **Fluid**: zrak ili voda na 20 °C, ili **Prilagođeno** sa vlastitom gustoćom (kg/m³) i dinamičkim viskozitetom (Pa·s). Zrak koristi zakon idealnog gasa i Sutherlandov zakon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); voda koristi IAPWS vrijednosti (998.21 kg/m³, 1.0016 mPa·s).
- **Veličina ćelije**: prostor fluida se popunjava jednakim kockama. Ostavite prazno za automatsku veličinu; panel prikazuje mrežu. Svaki otvor i kanal treba da bude **najmanje 8 do 10 ćelija preko** za korisne brojeve; manje ćelije su tačnije, ali sporije (dvostruko finije znači oko 16 puta više posla).
- **Zidovi**: **Interpolirani** prati zakrivljene zidove između ćelija (podrazumijevano); **Odbijanje nazad** tretira zidove kao stepenastu kocku.

## Strujanje unutar dijela

Prostor fluida mora biti zatvoren. Dodajte **Ulaz** i **Izlaz** u panelu, zatim kliknite njihove površine u prikazu:

1. **Ravna površina oko otvora** — obod na kraju cijevi, površina priključka. PartCraft tu zatvara rupu otvora poklopcem. Svaka rupa na toj površini pripada tom otvoru, pa kada se ulaz i izlaz otvaraju na istoj površini, umjesto toga modelirajte tanki čep preko jednog od njih.
2. **Unutrašnja površina čepa** — kao u drugim CAD alatima: modelirajte tanku ploču (istiskivanje) preko otvora i odaberite njenu površinu koja dodiruje fluid.

Za ulaz postavite **brzinu** (m/s, ujednačenu preko otvora, u dio) ili **volumenski protok** (L/min). Za izlaz postavite **statički pritisak** (Pa, relativni). Ako je otvor ostao otvoren, ili je zid tanji od ćelije, unutrašnjost se spaja s vanjštinom i proračun se zaustavlja uz poruku „No closed fluid space”.

## Strujanje oko dijela

Postavite **Strujanje** na **Vanjsko**, zatim **Brzinu**, smjer u koji struji, i koliko kutija seže uzvodno, nizvodno i u stranu (prazno: 1, 3 i 1 put najveća dimenzija dijela). Površina kutije kroz koju strujanje ulazi je ulaz, površina kroz koju izlazi je izlaz na 0 Pa, a površine uz smjer strujanja su klizne. Premala kutija stišće strujanje oko dijela i povećava otpor. **Referentna površina** je površina koju koriste koeficijenti otpora i uzgona (prazno: čeona površina dijela gledano duž strujanja); uzgon se mjeri duž +Y, osim ako odaberete drugi smjer.

## Riješite i pročitajte rezultate

Pritisnite **Riješi**. Proračun teče u pozadini, s brojem koraka, ostatkom i grafikonom ostatka; **Zaustavi** ga prekida. Zaustavlja se kada je ostatak (koliko se polje brzine još mijenja po koraku) ispod cilja i kada su pad pritiska ili otpor ustaljeni. Ako dosegne granicu koraka prije toga, panel crveno prikazuje **Nije konvergirano**: brojevi su posljednje stanje, a ne ustaljeni odgovor.

- **Presječna ravan**: brzina ili statički pritisak na ravni kroz model; odaberite njenu normalu (X, Y ili Z) i povucite klizač da je pomjerite. Zadržite pokazivač da pročitate vrijednosti.
- **Strujnice**: od ulaza (unutrašnje) ili od rešetke preko ulaznog kraja kutije u presječnoj ravni (vanjsko).
- **Dio**: puno, prozirno (da se vidi ravan unutra), pritisak na površini, ili skriveno.
- **Tabela**: Rejnoldsov broj, pad pritiska (srednji statički pritisak na ulazima minus onaj na izlazima), protok i srednji pritisak svakog otvora, sila na dio, otpor i uzgon s koeficijentima i referentnom površinom (vanjsko), bilans mase (ulaz naspram izlazu), mreža i rješavač.

## Turbulentno strujanje (eksperimentalno)

**Model strujanja › Turbulentni (Spalart–Allmaras, eksperimentalno)** rješava vremenski osrednjeno turbulentno strujanje (ustaljeni RANS): Spalart–Allmarasov model daje turbulentnu viskoznost u svakoj ćeliji, a ćelije uz zidove koriste Spaldingov zakon zida umjesto razlaganja tankog sloja tamo. Svuda je potpuno turbulentno (nema laminarnih područja, nema prijelaza).

**Nije prošao provjere tačnosti.** Panel, rezultati i tabela to kažu za svaku turbulentnu studiju, a upozorenje se ne može zatvoriti. Koristite ga za **kvalitativne obrasce strujanja** — gdje se strujanje odvaja, cirkuliše ili ubrzava — **ne za projektne brojeve**.

| Provjera | Referenca | Rezultat |
|---|---|---|
| Trenje ravnog kanala, prva ćelija na y⁺ 49 / 98 | Deanova korelacija | +3.3 % / +4.7 % |
| Kanal s razriješenim zidom (y⁺ ≈ 3), Re_τ 180: srednja brzina | Moser, Kim & Mansour DNS | −1 % |
| Ravni kanal, y⁺ 7–15 ili 190–380 | Deanova korelacija | +9 do +22 % |
| Trenje cijevi kroz kockaste ćelije, potpuno razvijeno, 10–30 ćelija preko | Colebrook | 30 do 34 % preveliko |
| Ponovno prianjanje iza stepenice okrenute unazad, 6–14 ćelija po visini stepenice | Driver & Seegmiller, 6.26 visina stepenice | 21 do 39 % prekratko |

Rezultati se poboljšavaju tek sporo s finijim ćelijama. Nakon rješavanja, tabela prikazuje **y⁺ prve ćelije** (min, srednju i max preko ćelija zida) i upozorava van provjerenog opsega od 1 do 400; ciljajte na oko 30 do 300. **Vrijeme proračuna:** automatske ćelije su dimenzionirane za nekoliko minuta na najviše jednoj jezgri laptopa (panel prikazuje najgori slučaj za mrežu i granicu koraka; mala cijev se ustali za manje od 20 sekundi). Prepolovljavanje veličine ćelije traje oko 16 puta duže. Sile na dijelu dolaze iz bilansa količine kretanja preko otvora ili kutije.

**Rad na tome do sada:** ćelije uz zid sada usklađuju svoje smično naprezanje sa zakonom zida, što je smanjilo greške za cijev i stepenicu na brojke gore, bez promjene rezultata za ravni kanal. To nije bilo dovoljno za projektne brojeve. Sljedeći korak su finije ćelije uz zidove.

## Šta može a šta ne može reći

- **Laminarni model** je samo laminaran. U cijevima strujanje postaje turbulentno iznad Rejnoldsovog broja od oko 2.000 do 4.000; iza tupih tijela vrtlozi se počinju odvajati iznad oko 50. Panel upozorava na ove tačke. Laminarni rezultat za turbulentno strujanje potcjenjuje pad pritiska i pogrešno računa otpor. Eksperimentalni turbulentni model (gore) kvalitativno pokriva turbulentno strujanje; njegovi brojevi još nisu pouzdani.
- **Metoda:** Boltzmannova metoda mreže (D3Q19, sudar s dva vremena relaksacije) pokrenuta do ustaljenog stanja. Unutra je blago stišljiva; PartCraft zadržava promjene gustoće na nekoliko procenata. Ako je strujanje prebrzo za ćelije, ne počinje, nego kaže za koliko moraju biti manje.
- **Provjereno prema:** Hagen–Poiseuilleovom strujanju u cijevi kroz dio (gradijent pritiska unutar 1 % pri 20 ćelija preko), šupljini Ghia i saradnika vođenoj poklopcem (unutar 0.75 % brzine poklopca) i Schäfer–Turekovom benčmarku cilindra (otpor unutar 1 % pri 10 ćelija po prečniku).
- Nije modelirano: prijenos toplote, turbulencija s projektnom tačnošću (turbulentni model je eksperimentalan), slobodne površine, kavitacija, gravitacija, pokretni dijelovi, nenjutnovski fluidi, hrapavi zidovi. Laboratorijska verzija: važne rezultate provjerite na drugi način.
