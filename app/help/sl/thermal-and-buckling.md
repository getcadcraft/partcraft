---
title: Segrevanje, toplotna napetost in uklon
summary: Poiščite temperature v delu iz fiksnih temperatur, toplotnega toka, toplotne moči, konvekcije in sevanja (stacionarno ali skozi čas), obremenite študijo napetosti s temperaturnim porastom in poiščite obremenitev, pri kateri se vitek del upogne, z opisom, kaj vsaka metoda lahko in česa ne more povedati.
keywords: toplotno, prenos toplote, toplota, temperatura, prevajanje, konvekcija, koeficient prestopa, sevanje, emisivnost, toplotni tok, toplotna moč, proizvajanje toplote, toplotni ponor, prehodno, čas, hlajenje, segrevanje, Crank-Nicolson, implicitni Euler, toplotna bilanca, toplotna napetost, toplotna napetost skozi čas, prehodna toplotna napetost, pogasitev, toplotni šok, zgodovina napetosti, najslabši čas, toplotno raztezanje, koeficient raztezanja, uklon, Eulerjev uklon, faktor obremenitve, kritična obremenitev, vitek, lastna vrednost
from: 1a1b7545
---

Te študije so v delovnem okolju Simulacija poleg statične napetosti in lastnih frekvenc (glejte [Preverjanje napetosti in upogiba](topic:simulation)). Izberete jih v polju **Vrsta** v podoknu. Uporabljajo isto mrežo majhnih kock in isti seznam materialov; vsak material iz knjižnice ima toplotno prevodnost, specifično toploto in koeficient raztezanja (tipične vrednosti iz priročnikov, prikazane pod **Lastnosti**).

## Toplotno: kam gre toplota?

1. Izberite **Toplotno (prenos toplote)** kot **Vrsta**.
2. Dodajte toplotne pogoje iz seznama **Dodaj** v podoknu, nato kliknite njihove ploskve (kot pri podporah in obremenitvah):
   - **Fiksna temperatura**: ploskev je držana na temperaturi v °C.
   - **Toplotni tok**: W/m² vstopa v ploskev (negativen izstopa). Deluje na dejanski površini ploskve, tudi tam, kjer kocke tvorijo stopnice.
   - **Toplotna moč**: skupna moč v vatih, razdeljena na izbrane ploskve glede na površino. Uporabite jo za grelec ali čip z znano močjo.
   - **Konvekcija**: zrak ali tekočina s temperaturo odvaja toploto pri h W/(m²·K). Tipični h: mirujoč zrak 5–10, ventilator 25–100, voda 500–10,000. PartCraft ne izračuna h: v tej študiji ni pretoka tekočine.
   - **Sevanje**: ploskev seva v okolico s temperaturo z emisivnostjo od 0 do 1. Je **linearizirano** (sevanje je zapisano kot koeficient, ki je odvisen od temperature, in ponovno rešeno, dokler se ne ustali) in gre samo v okolico: ploskve med seboj ne izmenjujejo toplote.
3. **Proizvajanje toplote** (W/m³) segreva ves del od znotraj, na primer upornostni del.
4. Pritisnite **Reši**. Del je obarvan po temperaturi; izberite **Toplotni tok** v **Prikaži**, da vidite, kam teče toplota. Pokažite na del, da preberete oboje.

Stacionarni toplotni tok potrebuje kam oditi toploti: vsaj eno fiksno temperaturo, konvekcijo ali sevanje. Del, ki samo sprejema toploto, nima stacionarnega stanja; namesto tega ga naredite prehodnega.

Tabela navaja najnižjo in najvišjo temperaturo ter kje sta, največji toplotni tok in **toplotno bilanco**: toploto, ki vstopa v vsak pogoj ali izstopa iz njega (fiksna temperatura šteje, koliko mora dobaviti ali vpiti), proizvedeno toploto, skupne vsote vstopa in izstopa ter **neravnovesje**. Neravnovesje mora biti majhen delež vstopajoče toplote; veliko neravnovesje pomeni, da rezultatu ni mogoče zaupati.

### Skozi čas (prehodno)

Označite **Prehodno** in vnesite **Začetno temperaturo** (ves del se začne pri njej), **Časovni razpon** in število **Časovnih korakov**. **Implicitni Euler** je zanesljiv; **Crank–Nicolson** je pri enakih korakih natančnejši, vendar lahko po nenadni spremembi zanihava. Po reševanju povlecite drsnik **Čas**, da vidite temperature v vsakem trenutku (barvna lestvica ostane enaka za vse trenutke). Toplotna bilanca nato vključuje shranjeno toploto.

## Toplotna napetost: kaj sprememba temperature naredi delu?

V študiji **Statična napetost** (ali **Uklon**) nastavite **Toplotno obremenitev**:

- **Enakomerna sprememba temperature**: ves del se segreje (ali ohladi, z negativnim številom) za toliko kelvinov.
- **Temperature iz toplotnih pogojev**: dodajte toplotne pogoje k isti študiji; stacionarne temperature se najprej rešijo na isti mreži, nato se del razteza za α·(T − **temperatura brez napetosti**).
- **Temperature skozi čas (prehodni zagon)**: dodajte toplotne pogoje, nato vnesite **Začetno temperaturo**, **Časovni razpon**, **Časovne korake** in **Časovno korakanje** kot pri prehodni toplotni študiji. Temperature se rešijo skozi čas na isti mreži (kocke ali tetraedri), statično reševanje na temperaturah vsakega trenutka pa da napetost tega trenutka. **Napetost pri**:
  - **Najslabši čas** (začetek): **Reševanja napetosti** razporedijo trenutke enakomerno po zagonu, vključno z začetkom (21, če ne spremenite, največ 51). Rezultati se odprejo v trenutku z največjo von Misesovo napetostjo; tabela ga navede, majhen grafikon prikazuje najvišjo napetost v odvisnosti od časa, drsnik **Čas** pa prikazuje napetost v vsakem rešenem trenutku (barvna lestvica ostane tista najslabšega trenutka).
  - **En izbrani čas**: en trenutek, časovni korak najbližji **Času (s)**, ki ga vnesete. Študija uklona vedno vzame en izbrani čas (konec zagona, če ne nastavite drugega).

Del, ki je pogašen (potopljen iz vročega v hladno) ali nenadoma segret, je najbolj obremenjen, dokler se notranjost in površina najbolj razlikujeta: pogosto takoj na začetku. Držana temperatura velja od prvega trenutka kot nenadna sprememba, zato napetost na samem začetku je odvisna od velikosti elementa (le nekaj elementov zazna spremembo). Preberite jo kot „zelo visoko“ in si oglejte naslednje trenutke na drsniku za vrednosti, ki jih mreža razloči. Napetost je kvazistatična: brez vztrajnosti, brez nihanja zaradi nenadne spremembe.

Del, ki se lahko prosto razteza, nima toplotne napetosti: držite ga samo toliko, da se ne premika (na primer tri gladke ploskve pod pravim kotom). Če je med dvema stenama vpet, je stisnjen: jeklena palica, segreta za 50 K med togima stenama, nosi okoli 117 MPa. Toplotne obremenitve se uravnotežijo same, zato se reakcije še vedno uravnotežijo samo z mehanskimi obremenitvami.

## Uklon: kdaj se vitek del poruši?

1. Izberite **Uklon (linearno)** kot **Vrsto** in dodajte podpore in obremenitve kot pri statični študiji.
2. Nastavite **Faktorje obremenitve za iskanje** (koliko načinov uklona).
3. Pritisnite **Reši**. Vsak način ima **faktor obremenitve**: večkratnik vaših obremenitev, pri katerem idealen del uklone. Faktor obremenitve 3 pomeni trikratnik vaših obremenitev; **faktor obremenitve pod 1 pomeni, da se del upogne pri obremenitvah, ki ste jih nanesli**. Tabela navaja tudi skupno obremenitev pri vsakem faktorju. Oblika načina kaže, kako se upogne (njena velikost nima pomena).

**Linearni uklon precenjuje pravo kritično obremenitev.** Predpostavlja popoln del: popolnoma raven, brez zaostale napetosti in elastičen. Pravi deli imajo majhne nepravilnosti in se lahko najprej plastično deformirajo, lupine s tankimi stenami pa se lahko upognejo pri delu linearne vrednosti. Uporabite veliko varnostno rezervo in obravnavajte faktor obremenitve blizu 3 ali manj za tanko lupino kot opozorilo.

## Kako daleč zaupati

PartCraft preverja te reševalnike z ročnimi formulami: palica med dvema temperaturama (natančno), hladilno rebro (znotraj 0.3 K), plošča, ki se sama segreva (natančno), kocka, ki se hladi skozi čas (znotraj 0.1 % s Crank–Nicolsonom), palica, ki je nenadoma segreta na enem koncu, prosto segreta palica (brez napetosti, ΔL = αLΔT), palica, vpeta med stenami (σ = −EαΔT), pogašena plošča skozi čas proti klasični vrstni rešitvi (znotraj 1 % na kockah, 2.1 % na tetraedrih v središču plošče; 0.5 % na njeni površini), zadnji trenutek dolgega zagona proti stacionarni toplotni napetosti (enako do milijoninke) in Eulerjevi stebri (znotraj 1 % vpet–prost, 1.5 % členkasto–členkasto). Upoštevajte:

- **Stalne vrednosti materiala.** Prevodnost, specifična toplota in raztezanje se tu ne spreminjajo s temperaturo; pri nekaj sto stopinjah se lahko spremenijo za 10–30 %. Togost se prav tako ne spreminja.
- **Napetost skozi čas je kvazistatična in elastična**: vsak trenutek je statično reševanje (brez vztrajnosti) in brez plastičnega tečenja, zato pogasitev, ki bi povzročila tečenje površine, namesto tega pokaže napetost nad mejo tečenja.
- **Koeficienti konvekcije so vaš vnos**, niso izračunani iz pretoka zraka ali vode.
- **Brez kontaktnega upora**: del je eno telo.
- **Samo linearni uklon**: brez nepravilnosti, brez plastičnega tečenja, brez obnašanja po uklonu.
- Stopničasti vzorec kock in ostri notranji vogali vplivajo na toplotne napetosti enako kot na druge napetosti (glejte [Preverjanje napetosti in upogiba](topic:simulation)).
- To je laboratorijska različica: pomembne dele preverite na drug način.

## Povezano

- [Preverjanje napetosti in upogiba (Simulacija)](topic:simulation)
- [Kaj še ni izdelano](topic:not-built-yet)
