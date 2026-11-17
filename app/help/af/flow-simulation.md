---
title: Simuleer vloeistofvloei (Vloeistudie)
summary: Vloei deur die kanale binne in 'n onderdeel of om dit in 'n boks: intlaat, uitlaat, lug, water of jou eie vloeistof, dan spoed en druk op 'n beweegbare snitvlak, stroomlyne, oppervlakdruk, drukval, massabalans, sleur en lig, met wat die laminêre metode kan en nie kan sê nie.
keywords: vloei, CFD, vloeistof, berekeningsvloeistofdinamika, vloeisimulasie, lug, water, viskositeit, digtheid, Reynolds number, laminêr, turbulent, drukval, drukverlies, intlaat, uitlaat, deksel, dop, spoed, vloeitempo, volumevloei, liter per minuut, statiese druk, stroomlyne, snitvlak, sleur, lig, sleurkoëffisiënt, ligkoëffisiënt, frontale oppervlakte, eksterne vloei, interne vloei, pyp, kanaal, spruitstuk, spuitmond, lattice Boltzmann, residu, konvergensie
from: 7dc75f29
---

'n **Vloei**-studie bereken hoe 'n vloeistof beweeg deur die kanale binne in jou onderdeel (**intern**) of om dit (**ekstern**). By verstek is dit **laminêr, onsaamdrukbaar, isotermies en Newtoniaans**: gladde vloei van 'n vloeistof waarvan die digtheid en viskositeit vas bly, sonder hitte, turbulensie of swaartekrag. 'n **Eksperimentele** turbulente model is ook daar, slegs vir kwalitatiewe patrone (sien hieronder). Dit werk op die benoemde vlakke wat die maaskern aan die onderdeel gee (sien [Die maaskern](topic:solid-kernels)).

Kies **Simulasie** in die **Werkruimte**-blokkie, druk **Nuwe studie** as daar geen is nie, en stel **Tipe** op **Vloei (CFD)**. **Vloeimodel** is **Laminêr** (die verstek) of **Turbulent (Spalart–Allmaras, eksperimenteel)**: sien **Turbulente vloei (eksperimenteel)** hieronder. Die strukturele instellings van die studie word behou, sodat jy terug kan skakel. Die vloei-instellings word in die onderdeellêer gestoor, en elke verandering kan ongedaan gemaak word.

## Kies die vloeistof en die selle

- **Vloeistof**: lug of water by 20 °C, of **Pasgemaak** met jou eie digtheid (kg/m³) en dinamiese viskositeit (Pa·s). Lug gebruik die ideale gaswet en Sutherland se wet (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); water gebruik die IAPWS-waardes (998.21 kg/m³, 1.0016 mPa·s).
- **Selgrootte**: die vloeistofruimte word met gelyke kubusse gevul. Laat dit leeg vir 'n outomatiese grootte; die paneel wys die rooster. Elke opening en kanaal behoort **minstens 8 tot 10 selle breed** te wees vir bruikbare getalle; kleiner selle is meer akkuraat en stadiger (twee keer so fyn is ongeveer 16 keer die werk).
- **Mure**: **Geïnterpoleer** volg geboë mure tussen selle (die verstek); **Terugkaats** behandel mure as die kubustrap.

## Vloei binne die onderdeel

Die vloeistofruimte moet gesluit wees. Voeg 'n **Intlaat** en 'n **Uitlaat** in die paneel by, en klik dan op hul vlakke in die aansig:

1. **Die plat vlak rondom 'n opening** — die rand by 'n pypeinde, 'n poortvlak. PartCraft sluit die opening se gat daar met 'n deksel. Elke gat in daardie vlak behoort aan daardie opening, so wanneer 'n intlaat en 'n uitlaat op dieselfde vlak oopmaak, modelleer eerder 'n dun dop oor een van hulle.
2. **Die binnevlak van 'n dop** — soos in ander CAD-gereedskap: modelleer 'n dun plaat (' n ekstrusie) oor die opening en kies die vlak daarvan wat die vloeistof raak.

Vir 'n intlaat stel 'n **snelheid** (m/s, eenvormig oor die opening, die onderdeel in) of 'n **volumevloei** (L/min). Vir 'n uitlaat stel die **statiese druk** (Pa, meting). As 'n opening oop gelaat word, of 'n muur dunner is as 'n sel, sluit die binnekant by die buitekant aan en stop die oplossing met "Geen geslote vloeistofruimte nie".

## Vloei om die onderdeel

Stel **Vloei** op **Ekstern**, die **Spoed**, die rigting waarheen dit vloei, en hoe ver die boks stroomop, stroomaf en na die kante reik (leeg: 1, 3 en 1 keer die onderdeel se grootste afmeting). Die boksvlak waardeur die vloei ingaan, is 'n invloei, die vlak waardeur dit uitgaan 'n uitvloei by 0 Pa, en die vlakke langs die vloei glip. 'n Boks wat te klein is, pers die vloei verby die onderdeel en verhoog die sleur. **Verwysingsoppervlakte** is die oppervlakte wat die sleur- en ligkoëffisiënte gebruik (leeg: die onderdeel se frontale oppervlakte gesien langs die vloei); lig word langs +Y gemeet tensy jy 'n ander rigting kies.

## Los op en lees die resultate

Druk **Los op**. Die oplossing loop op die agtergrond met die stapgetal, die residu en 'n residuplot; **Stop** beëindig dit. Dit stop wanneer die residu (hoeveel die spoedveld per stap nog verander) onder die teiken is en die drukval of sleur gestabiliseer het. As dit eers die stapgrens bereik, sê die paneel **Nie gekonvergeer nie** in rooi: die getalle is die laaste toestand, nie 'n stabiele antwoord nie.

- **Snitvlak**: spoed of statiese druk op 'n vlak deur die model; kies sy normaal (X, Y of Z) en sleep die skuiwer om dit te skuif. Hou daaroor om die waardes te lees.
- **Stroomlyne**: vanaf die intlaatte (intern) of vanaf 'n rooster oor die invloei-einde van die boks in die snitvlak (ekstern).
- **Onderdeel**: soliede, deursigtig (om die vlak binne te sien), oppervlakdruk, of verborge.
- **Tabel**: Reynolds number, drukval (gemiddelde statiese druk by die intlaatte minus dié by die uitlaatte), die vloei en gemiddelde druk van elke opening, die krag op die onderdeel, sleur en lig met hul koëffisiënte en verwysingsoppervlakte (ekstern), die massabalans (invloei teenoor uitvloei), die maas en die oplosser.

## Turbulente vloei (eksperimenteel)

**Vloeimodel › Turbulent (Spalart–Allmaras, eksperimenteel)** los die tyd-gemiddelde turbulente vloei op (bestendige RANS): die Spalart–Allmaras-model gee 'n werwelviskositeit in elke sel, en die selle langs mure gebruik Spalding se muurwet in plaas daarvan om die dun laag daar op te los. Dit is oral volledig turbulent (geen laminêre gebiede, geen oorgang nie).

**Dit het nie sy akkuraatheidstoetse geslaag nie.** Die paneel, die resultate en die tabel sê dit op elke turbulente studie, en die waarskuwing kan nie gesluit word nie. Gebruik dit vir **kwalitatiewe vloeipatrone** — waar vloei skei, terugsirkuleer of versnel — **nie vir ontwerpgetalle nie**.

| Kontrole | Verwysing | Resultaat |
|---|---|---|
| Platkanaalwrywing, eerste sel by y⁺ 49 / 98 | Dean's correlation | +3.3 % / +4.7 % |
| Kanaal met opgeloste muur (y⁺ ≈ 3), Re_τ 180: bulksnelheid | Moser, Kim & Mansour DNS | −1 % |
| Platkanaal, y⁺ 7–15 of 190–380 | Dean's correlation | +9 tot +22 % |
| Pypwrywing deur die kubusselle, volledig ontwikkel, 10–30 selle breed | Colebrook | 30 tot 34 % te hoog |
| Herhegting agter 'n agtergerigte trap, 6–14 selle per staphoogte | Driver & Seegmiller, 6.26 staphoogtes | 21 tot 39 % te kort |

Resultate verbeter net stadig met fyner selle. Na oplossing wys die tabel die **eerste-sel y⁺** (min, gemiddeld en maks oor die muursels) en waarsku buite die getoetste reeks van 1 tot 400; mik vir ongeveer 30 tot 300. **Looptyd:** die outomatiese selle is so groot dat dit hoogstens 'n paar minute op een skootrekenaarkern neem (die paneel wys die ergste geval vir die rooster en stapgrens; 'n klein pyp bedaar in minder as 20 sekondes). Die halvering van die selgrootte kos ongeveer 16 keer soveel tyd. Kragte op die onderdeel kom uit 'n momentumbalans oor die openings of die boks.

**Werk daaraan tot dusver:** die muursels pas nou hul eie skuifspanning aan die muurwet aan, wat die pyp- en trapfoute tot die syfers hierbo laat daal het sonder om die platkanaalresultate te verander. Dit was nie genoeg vir ontwerpgetalle nie. Die volgende stap is fyner selle naby die mure.

## Wat dit kan en nie kan sê nie

- **Die laminêre model** is slegs laminêr. In pype word die vloei turbulent bo 'n Reynolds number van ongeveer 2,000 tot 4,000; agter stomp liggame begin die nawerking werwels afskud bo ongeveer 50. Die paneel waarsku op hierdie punte. 'n Laminêre resultaat vir turbulente vloei onderskat die drukval en kry die sleur verkeerd. Die eksperimentele turbulente model (hierbo) dek turbulente vloei kwalitatief; sy getalle is nog nie betroubaar nie.
- **Metode:** die lattice Boltzmann-metode (D3Q19, twee-ontspanningstyd-botsing) wat tot 'n bestendige toestand uitgevoer word. Dit is binne effens saamdrukbaar; PartCraft hou digtheidsveranderinge tot 'n paar persent. As die vloei te vinnig is vir die selle, begin dit nie en sê hoeveel kleiner die selle moet wees nie.
- **Getoets teen:** Hagen–Poiseuille-vloei in 'n pyp deur 'n onderdeel (drukgradiënt binne 1 % by 20 selle breed), die deksel-aangedrewe holte van Ghia et al. (binne 0.75 % van die deksel se spoed), en die Schäfer–Turek-silindermaatstaf (sleur binne 1 % by 10 selle per deursnee).
- Nie gemodelleer nie: hitteoordrag, turbulensie met ontwerpakkuraatheid (die turbulente model is eksperimenteel), vrye oppervlaktes, kavitasie, swaartekrag, bewegende dele, nie-Newtoniaanse vloeistowwe, ruwe mure. Laboratoriumweergawe: kontroleer belangrike resultate op 'n ander manier.
