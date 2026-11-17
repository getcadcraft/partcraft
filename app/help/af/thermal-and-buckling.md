---
title: Hitte, termiese spanning en knik
summary: Vind die temperature in 'n onderdeel uit vaste temperature, hittevloed, hitte-krag, konveksie en straling (bestendig of oor tyd), laai 'n spanningsstudie met 'n temperatuurstyging, en vind die las waarby 'n slanke onderdeel knik, met wat elke metode kan en nie kan vertel nie.
keywords: termies, hitteoordrag, hitte, temperatuur, geleiding, konveksie, filmkoëffisiënt, straling, emissiwiteit, hittevloed, hitte-krag, hittegenerasie, hittebak, transiënt, tyd, afkoeling, verhitting, Crank-Nicolson, implisiete Euler, hitte-balans, termiese spanning, termiese spanning oor tyd, transiënte termiese spanning, blus, termiese skok, spanningsgeskiedenis, slegste tyd, termiese uitsetting, uitsettingskoëffisiënt, knik, Euler-knik, lasfaktor, kritieke las, kolom, slank, eiewaarde
from: 1a1b7545
---

Hierdie studies is in die Simulasie-werkruimte langs statiese spanning en natuurlike frekwensies (sien [Kontroleer spanning en defleksie](topic:simulation)). Kies hulle in die paneel se **Tipe**-blokkie. Hulle gebruik dieselfde maas van klein kubusse en dieselfde materiaallys; elke biblioteekmateriaal het 'n termiese geleidingsvermoë, 'n spesifieke hitte en 'n uitsettingskoëffisiënt (tipiese handboekwaardes, onder **Eienskappe** gewys).

## Termies: waarheen gaan die hitte?

1. Kies **Termies (hitteoordrag)** as die **Tipe**.
2. Voeg termiese voorwaardes by vanaf die paneel se **Voeg by**-lys, en klik dan op hul vlakke (soos vir steunpunte en laste):
   - **Vaste temperatuur**: die vlak word op 'n temperatuur gehou, in °C.
   - **Hittevloed**: W/m² wat in die vlak vloei (negatief vloei uit). Dit werk op die vlak se ware oppervlakte, selfs waar die kubusse 'n trap maak.
   - **Hitte-krag**: 'n totaal in watt, verdeel oor die gekose vlakke volgens oppervlakte. Gebruik dit vir 'n verwarmer of 'n skyfie van bekende krag.
   - **Konveksie**: lug of vloeistof by 'n temperatuur voer hitte weg teen h W/(m²·K). Tipiese h: stil lug 5–10, 'n waaier 25–100, water 500–10,000. PartCraft bereken nie h nie: daar is geen vloeistofvloei in hierdie studie nie.
   - **Straling**: die vlak straal na die omgewing by 'n temperatuur, met 'n emissiwiteit van 0 tot 1. Dit is **gelineariseer** (die straling word geskryf as 'n koëffisiënt wat van die temperatuur afhang en weer opgelos word totdat dit stabiliseer) en gaan slegs na die omgewing: vlakke wissel nie onderling hitte uit nie.
3. **Hitte-generasie** (W/m³) verwarm die hele onderdeel van binne, byvoorbeeld 'n weerstandsonderdeel.
4. Druk **Los op**. Die onderdeel word volgens temperatuur gekleur; kies **Hittevloed** in **Wys** om te sien waar die hitte vloei. Hou die muis oor die onderdeel om albei te lees.

Bestendige hitteoordrag benodig 'n plek waarheen die hitte kan gaan: ten minste een vaste temperatuur, konveksie of straling. 'n Onderdeel wat net hitte intrek, het geen bestendige toestand nie; maak dit eerder transiënt.

Die tabel lys die laagste en hoogste temperatuur en waar hulle is, die grootste hittevloed, en die **hitte-balans**: die hitte in of uit by elke voorwaarde ('n vaste temperatuur tel wat dit moet lewer of opneem), die hitte wat gegenereer word, die totale in en uit, en die **wanbalans**. Die wanbalans behoort 'n klein breukdeel van die hitte in te wees; 'n groot een beteken die resultaat kan nie vertrou word nie.

### Oor tyd (transiënt)

Merk **Transiënt** en gee 'n **Begintemperatuur** (die hele onderdeel begin daar), 'n **Tydsduur** en 'n aantal **Tydstappe**. **Implisiete Euler** is robuust; **Crank–Nicolson** is meer akkuraat vir dieselfde stappe, maar kan rimpel na 'n skielike verandering. Na oplossing, sleep die **Tyd**-skuifbalk om die temperature op elke oomblik te sien (die kleurskaal bly dieselfde vir elke oomblik). Die hitte-balans sluit dan die hitte in wat geberg word.

## Termiese spanning: wat doen 'n temperatuurverandering aan die onderdeel?

In 'n **Statiese spanning**- (of **Knik**-)studie, stel **Termiese las**:

- **Eenvormige temperatuurverandering**: die hele onderdeel warm op (of koel af, met 'n negatiewe getal) met soveel kelvin.
- **Temperature uit termiese voorwaardes**: voeg termiese voorwaardes by dieselfde studie; die bestendige temperature word eers op dieselfde maas opgelos, dan sit die onderdeel uit met α·(T − die **spanningsvrye temperatuur**).
- **Temperature oor tyd (transiënte lopie)**: voeg termiese voorwaardes by, gee dan 'n **Begintemperatuur**, **Tydsduur**, **Tydstappe** en **Tydstapping** soos vir 'n transiënte termiese studie. Die temperature word oor tyd op dieselfde maas opgelos (kubusse of tetraëders), en 'n statiese oplossing op elke oomblik se temperature gee daardie oomblik se spanning. **Spanning by**:
  - **Die slegste tyd** (die begin): **Spanningsoplossings** oomblikke wat eweredig oor die lopie versprei is, die begin ingesluit (21 tensy jy dit verander, hoogstens 51). Die resultate open by die oomblik met die grootste von Mises-spanning; die tabel noem dit, 'n klein grafiek wys die piekspanning teen tyd, en die **Tyd**-skuifbalk wys die spanning op elke oomblik wat opgelos is (die kleurskaal bly dié van die slegste oomblik).
  - **Een gekose tyd**: een oomblik, die tydstap naaste aan die **Tyd (s)** wat jy gee. 'n Knikstudie neem altyd 'n gekose tyd (die einde van die lopie tensy jy een stel).

'n Onderdeel wat geblus word (van warm na koud ingedompel) of skielik verhit, word die sterkste gespan terwyl die binnekant en die oppervlak die meeste verskil: dikwels reg aan die begin. 'n Vasgehoue temperatuur geld vanaf die eerste oomblik, as 'n skielike verandering, so die spanning op die allerbegin hang af van die elementgrootte (slegs 'n paar elemente sien die verandering). Lees dit as "baie hoog", en kyk na die skuifbalk se volgende oomblikke vir waardes wat die maas oplos. Die spanning is kwasi-statiese: geen traagheid, geen vibrasie van die skielike verandering nie.

'n Onderdeel wat vry is om te groei, het geen termiese spanning nie: hou dit net genoeg vas om te keer dat dit beweeg (byvoorbeeld drie wrywinglose vlakke in regte hoeke). Tussen twee mure vasgeklem word dit saamgedruk: 'n staalstaaf wat 50 K tussen starre mure verhit is, dra ongeveer 117 MPa. Termiese laste balanseer hulself, so die reaksies balanseer steeds slegs die meganiese laste.

## Knik: wanneer gee 'n slanke onderdeel toe?

1. Kies **Knik (lineêr)** as die **Tipe**, en voeg steunpunte en laste by soos vir 'n statiese studie.
2. Stel **Lasfaktore om te vind** (hoeveel knikmodusse).
3. Druk **Los op**. Elke modus het 'n **lasfaktor**: die veelvoud van jou laste waarby die ideale onderdeel knik. 'n Lasfaktor van 3 beteken drie keer jou laste; **'n lasfaktor onder 1 beteken dit knik onder die laste wat jy aangewend het**. Die tabel gee ook die totale las by elke faktor. Die modusvorm wys hoe dit knik (die grootte daarvan beteken niks nie).

**Lineêre knik oorskat die werklike knikbelasting.** Dit neem 'n perfekte onderdeel aan: perfek reguit, geen reserwespanning nie, en elasties. Werklike onderdele het klein onvolmaakthede en kan eers vloei, en dunwandige skille kan teen 'n breukdeel van die lineêre waarde knik. Gebruik 'n ruim marge, en behandel 'n lasfaktor naby of onder 3 vir 'n dun skil as 'n waarskuwing.

## Hoe ver om dit te vertrou

PartCraft toets hierdie oplossers teen handformules: 'n staaf tussen twee temperature (presies), 'n verkoelende vin (binne 0.3 K), 'n plak wat homself verhit (presies), 'n kubus wat oor tyd afkoel (binne 0.1 % met Crank–Nicolson), 'n staaf wat skielik aan een punt verhit is, 'n vrye staaf wat verhit is (geen spanning nie, ΔL = αLΔT), 'n staaf tussen mure vasgehou (σ = −EαΔT), 'n geblusde plaat oor tyd teen die klassieke reeksoplossing (binne 1 % op kubusse, 2.1 % op tetraëders by die plaat se middelpunt; 0.5 % by sy oppervlak), 'n lang lopie se laaste oomblik teen die bestendige termiese spanning (dieselfde tot 'n miljoenste), en Euler-kolomme (binne 1 % vas–vry, 1.5 % pen–pen). Hou in gedagte:

- **Konstante materiaalwaardes.** Geleidingsvermoë, spesifieke hitte en uitsetting verander hier nie met temperatuur nie; by 'n paar honderd grade kan hulle met 10–30 % verander. Styfheid verander ook nie.
- **Spanning oor tyd is kwasi-statiese en elasties**: elke oomblik is 'n statiese oplossing (geen traagheid), en geen vloei nie, so 'n blus wat die oppervlak sou laat vloei, wys eerder 'n spanning bo vloeispanning.
- **Konveksiekoëffisiënte is jou invoer**, nie uit 'n lug- of watervloei bereken nie.
- **Geen kontakweerstand nie**: die onderdeel is een soliede stuk.
- **Slegs lineêre knik**: geen onvolmaakthede, geen vloei nie, geen gedrag na knik nie.
- Die kubustrap en skerp binnehoeke raak termiese spanning op dieselfde manier as ander spannings (sien [Kontroleer spanning en defleksie](topic:simulation)).
- Dit is 'n laboratoriumweergawe: kontroleer onderdele wat saak maak op 'n ander manier.

## Verwant

- [Kontroleer spanning en defleksie (Simulasie)](topic:simulation)
- [Wat nog nie gebou is nie](topic:not-built-yet)
