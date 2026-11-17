---
title: Izdelava risbe s pogledi, prerezom in GD&T
summary: Odprite list risbe, dodajte prerez in podroben pogled, postavite referenčne podatke, okvirje kontrole lastnosti in simbole kakovosti površine, izberite velikost lista, izpolnite glavo risbe in revizije ter izvozite list kot PDF.
keywords: tabela lukenj, graf lukenj, položaji lukenj, oznake, risba, 2D risba, list, velikost lista, a4, a3, a2, a1, a0, ansi, glava risbe, revizija, blok revizij, številka risbe, material, pdf, pogledi, ortografski, tretji kot, izometrija, pogled prereza, podroben pogled, gd&t, referenčni podatek, okvir kontrole lastnosti, toleranca, položaj, ravnost, kakovost površine, hrapavost, tisk
from: 39e944c0
---

PartCraft iz dela izdela list risbe: pogled spredaj, zgoraj in desno v projekciji po tretjem kotu, izometrični pogled, skupne mere in glavo risbe na listu od A4 do A0 ali od ANSI A do E. Poleg tega lahko dodate prerez, podroben pogled in simbole GD&T. List se posodobi, ko se del spremeni, nastavitve pa se shranijo v datoteki dela.

## Odprite list risbe

1. Zgradite del. (Če ni ničesar zgrajenega: »Najprej zgradite trdno telo, nato izdelajte njegovo risbo.«)
2. V orodni vrstici izberite {{ui:Risba}}.

3D pogled nadomesti list. Orodna vrstica kaže {{ui:Baza}}, {{ui:Okvir}}, {{ui:Površinska obdelava}}, {{ui:Detajl}}, {{ui:PDF}} in {{ui:Nazaj}}, desno podokno pa ima naslov **Risba**. Vrstica stanja pove, kako so bili pogledi narejeni: »Risba (krivulje so narisane kot facete). Baza, Okvir in Površinska obdelava postavijo GD&T na pogled; podokno nastavi prerez in podroben pogled.« Pogledi so narisani iz facet mrežnega jedra, zato so zaobljeni robovi kratki ravni kosi; prave loke potrebujejo natančno jedro, ki te različice nima.

Po listu se premikate tako: kolesce za povečavo, vlečenje z desnim ali srednjim gumbom za pomik, {{key:F}} prilagodi list. Ko je list v fokusu, {{key:Plus}} in {{key:Minus}} povečata in pomanjšata, {{key:Shift}} s puščičnimi tipkami pa pomika.

Izberite {{ui:Nazaj}}, {{ui:Nazaj na model}} ali pritisnite {{key:Esc}} (ko nič ni izbrano in orodje ni aktivno), da se vrnete na 3D model.

## Kaj je na listu

- **List, ki ga izberete**, ležeč (A3, če ne izberete drugega), z obrobo in **glavo risbe**: naslov, podjetje, številka risbe, revizija, material, risal / pregledal / odobril, datum, merilo, velikost lista, »Enote: milimetri · projekcija po tretjem kotu« ter to, ali so pogledi natančni ali faceti.
- **Blok revizij** v zgornjem desnem kotu, ko dodate revizijo.
- **Pogledi spredaj, zgoraj in desno**: pogled zgoraj nad pogledom spredaj, desni pogled desno od njega. Skrite robove so črtkani.
- **Izometrični pogled**, kjer je prostor.
- **Skupne mere**: širina in višina na pogledu spredaj, globina na pogledu zgoraj.
- Eno **merilo** za glavne poglede iz serije ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), izbrano tako, da se prilegajo.

## Izberite velikost lista

Na listu risbe, ko nič ni izbrano, v desnem podoknu izberite {{ui:List}}: **A4, A3, A2, A1, A0** (ISO 216) ali **ANSI A, B, C, D, E** (11 × 8.5 do 44 × 34 in). Pogledi se ponovno razporedijo pri največjem ISO merilu, ki se prilega, zato lahko večji list pokaže del večji.

## Izpolnite glavo risbe

Polja **Glava risbe** v desnem podoknu gredo naravnost na list: {{ui:Naslov}}, {{ui:Št. risbe}}, {{ui:Revizija}}, {{ui:Podjetje}}, {{ui:Risal}}, {{ui:Pregledal}}, {{ui:Odobril}}, {{ui:Datum}} (leto-mesec-dan), {{ui:Splošna toleranca}} in {{ui:Površinska obdelava}} (zadnji dve se natisneta tik nad glavo risbe). Vpišite v polje in pritisnite {{key:Enter}} ali kliknite drugam. Prazno polje pusti celico prazno, razen:

- **Naslov** prikaže ime dela, dokler ga ne vpišete.
- **Datum** prikaže današnji datum, dokler ga ne vpišete.
- **Revizija** prikaže najnovejšo revizijo na seznamu, dokler je ne vpišete.

**Material** pride iz dela: kliknite prazen prostor v modelu, nato izberite {{ui:Material}} v podoknu Del. Isti material da gostoti lastnosti mase iz Merjenja.

## Dodajte revizije

Pod **Revizije** kliknite {{ui:Dodaj revizijo}}. Vsaka nova vrstica dobi naslednjo črko (A, B, C …; po Z pride AA) in današnji datum. Vpišite, kaj se je spremenilo, in kdo je spremembo naredil. {{ui:Izbriši}} odstrani vrstico. Blok revizij v zgornjem desnem kotu lista jih našteje, najstarejšo prvo, do 20.

Velikost lista, glava risbe, revizije in material se shranijo v datoteko dela, vsaka sprememba pa je en korak za {{ui:Razveljavi}}.

## Dodajte prerezni pogled

Del prereže ravnina, prerez pa je šrafiran. Tudi prerez je, kot drugi pogledi, narisan iz facet, zato so zaobljeni robovi kratki ravni kosi.

1. V desnem podoknu nastavite **Prerez A-A** na **Iz pogleda spredaj**, **Iz pogleda zgoraj** ali **Iz desnega pogleda**.
2. Prerez se pojavi na listu, šrafiran tam, kjer rez seka material, z rezno črto in njenimi puščicami »A« na pogledu, iz katerega je vzet.
3. Nastavite **Rez pri (mm)**, da premaknete rezno ravnino. Začne se na sredini dela.

Nastavite **Prerez A-A** nazaj na **Brez**, da ga odstranite.

## Dodajte podroben pogled

1. Nastavite **Detajl B** na pogled, ki ga želite povečati (ali izberite {{ui:Detajl}} v orodni vrstici).
2. Kliknite središče območja, ki ga želite povečati, na tem pogledu. Krog z oznako »B« ga označi, povečani »Detajl B« pa se pojavi na listu z lastnim merilom, na primer »Detajl B (2:1)«.
3. Nastavite **Polmer detajla (mm)** za velikost kroga in **Merilo detajla** za povečavo: 2, 4, 5 ali 10 ×, glede na list.

Detajl je mogoče vzeti iz pogleda spredaj, zgoraj, desno ali prereza, ne pa iz izometričnega. Če ni prostora za vse poglede, podokno pove: »Na listu ni prostora za: detajl. Naredite detajl manjši ali opustite pogled.«

## Dodajte tabelo lukenj

Tabela lukenj našteje luknje dela z njihovimi položaji, za vrtanje ali CNC: v podoknu izberite **Tabela lukenj** › **Iz pogleda zgoraj** (ali spredaj, ali desno).

- Vsaka luknja, vidna od konca v tem pogledu, dobi oznako ob sebi: **A1**, **A2** … za prvo velikost, **B1** … za naslednjo.
- Tabela našteje vsako oznako, njen **X** in **Y** v milimetrih ter njeno velikost: »Ø14 SKOZI«, »Ø6.6 × 10 GLOBOKO«, nagreznjeno ali pogreznjeno, ali oznako navoja pri navojni luknji.
- X in Y sta merjena od spodnjega levega kota obrisa pogleda, označenega **X0 Y0** na listu.
- Luknje, narejene z vzorci, so vključene. Luknje, ki niso pravokotne na pogled, so prešteté v podoknu in izpuščene iz tabele.

Tabela gre na prosto območje lista in v PDF.

## Postavite simbole GD&T in kakovosti površine

1. Izberite {{ui:Baza}}, {{ui:Okvir}} (okvir kontrole lastnosti) ali {{ui:Površinska obdelava}} (simbol kakovosti površine).
2. Kliknite točko na pogledu, kjer se pripne. Pripne se na najbližjo narisano črto v razdalji 2.5 mm.
3. Simbol se pojavi z vodilko, izbran, desno podokno pa kaže njegove nastavitve.

Vlecite simbol, da ga premaknete; njegova vodilka ostane na točki. Ko je simbol izbran, puščične tipke ga premaknejo za 1 mm. {{key:Delete}} ali {{key:Backspace}} (ali {{ui:Izbriši}} v podoknu) ga odstrani; {{ui:Končano}} ali {{key:Esc}} ga odizbere. Vsaka sprememba je v seznamu razveljavitev.

### Baza

**Črka**: od A do Z, brez I, O in Q (berejo se kot 1, 0 in O). Vsaka nova baza dobi naslednjo prosto črko.

### Okvir kontrole lastnosti

| Nastavitev | Izbire |
|---|---|
| **Toleranca** | Ravnost premice, Ravnost ploskve, Okroglost, Valjastost, Profil črte, Profil ploskve, Pravokotnost, Kotnost, Vzporednost, Položaj, Koncentričnost in Simetrija (obe odstranjeni v Y14.5-2018 in tako označeni), Krožni tek, Skupni tek |
| **Območje (mm)** | Vrednost tolerance, privzeto 0.1 |
| **Premer območja (⌀)** | Za značilnosti s cilindričnim območjem; privzeto vklopljeno za Položaj |
| **Material** | RFS (brez), MMC (Ⓜ), LMC (Ⓛ), kjer značilnost to dovoljuje |
| **Primarna / sekundarna / terciarna baza** | Do tri črke baze, vsaka z **… modifikatorjem** (MMB, LMB), kjer je dovoljen |

PartCraft preveri okvir po pravilih ASME Y14.5 in na vrhu podokna pove, kaj je narobe, na primer »Ravnost je oblikovna toleranca: ne prejme referenc na bazo.« ali »Položaj potrebuje vsaj eno referenco na bazo.« Vrstica **Prebrano** razloži okvir z besedami.

### Površinska obdelava

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| **Ra (µm)** | Povprečna hrapavost | 1.6 |
| **Postopek** | poljuben postopek, obdelano, brez odstranjevanja materiala | obdelano |
| **Opomba** | Do 40 znakov, na primer smer ali postopek | |

Ko nič ni izbrano, podokno našteje **Opombe na listu**, vsaka z **Izberi**.

## Izvozite PDF

Izberite {{ui:PDF}} v orodni vrstici, {{ui:Izvozi PDF}} v podoknu ali {{ui:Izvoz}}, nato {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}} iz modela. PDF se prenese kot `<ime dela> - drawing.pdf`, vrstica stanja pa našteje, kaj je na njem.

Natisnite ga pri »Dejanska velikost« na papir velikosti lista, da ohranite pravo merilo.

## Omejitve

| Še ni izdelano | Naredite to danes |
|---|---|
| Mere, razen treh skupnih mer | Dodajte jih na PDF z aplikacijo za označevanje ali izvozite skico ali ploskev kot DXF in jo kotirajte v 2D CAD programu |
| Več kot en prerez ali podroben pogled; izrezani, pomožni in projicirani pogledi | Ni na voljo |
| Projekcija po prvem kotu, premikajoči se pogledi, pokončni listi | Tretji kot, samodejna razporeditev, ležeče |
| Prosti tekst in tabele na listu (razen blokov naslova in revizij) | Uporabite opombo o površinski obdelavi ali dodajte besedilo v PDF |
| Risbe sestavov | Ni na voljo |

Znaki zunaj nabora Zahodne Evrope se natisnejo kot »?« (PDF uporablja vgrajeni Helvetica bralnika). Simboli GD&T so narisani kot črte, zato se natisnejo v vsakem bralniku.

## Naj list opravi

- **List › Samodejno** izbere papir za vas: največje standardno merilo do 1:1, na najmanjšem A-listu, ki pri tem merilu drži poglede (seznam pokaže, kateri je vzel).
- **Kotiraj luknje** kotira luknje na pogledu, ki jih najbolj vidi od konca: oznaka središča pri vsaki, ena oznaka za vsako velikost (»2× Ø6 SKOZI« z vodilko), njihovi položaji pa so merjeni od spodnjega levega kota pogleda. Skupna širina, višina in globina so vedno prisotne.
