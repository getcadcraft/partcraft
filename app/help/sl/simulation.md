---
title: Preverite napetost in upogib (simulacija)
summary: Izberite material, pritrdite ploskve, dodajte sile, tlake ali lastno težo dela, rešite in preberite napetost po von Misesu, premik, varnostni faktor, reakcije in lastne frekvence na modelu, skupaj s tem, kaj metoda lahko in česa ne more povedati.
keywords: simulacija, FEA, analiza v živo, posodobitev med urejanjem, zlomi ga, kaj se poruši prvo, faktor obremenitve, nelinearno, plastičnost, popuščanje, plastična deformacija, bilinearno, stik, par stikov, kazen, lepljeno, stik brez trenja, CalculiX, .inp, .frd, končni elementi, napetost, deformacija, von Mises, premik, upogib, varnostni faktor, faktor varnosti, meja tečenja, reakcija, obremenitev, sila, tlak, gravitacija, lastna teža, vpeto, brez trenja, podpora, omejitev, material, jeklo, aluminij, titan, ABS, PLA, najlon, lastna frekvenca, modalno, nihanje, mreža, velikost elementa, tetraedrično, tetraedri, tetraedrska mreža, voksel, kakovost mreže, glavna napetost, ekvivalentna deformacija, ocena napake, ukrivljene ploskve, izvrtine, zaokrožitve, adaptivno, adaptivno zgoščevanje, samodejno zgoščevanje, h-adaptivno, konvergenca, konvergenca mreže, natančna površina, krogla, stožec, torus, spline, prosta oblika
from: 6f2fdec1
---

Delovno okolje Simulacija odgovori na vprašanje "ali se bo upognilo ali zlomilo pod to obremenitvijo?" za del, ki ga modelirate. Je **linearna statična** študija (majhni upogibi, material ostane elastičen) ali študija **lastne frekvence**, rešena na mreži kvadratičnih tetraedrov, ki sledi ploskvam dela (ali, če tako izberete, na majhnih enakih kockah). Deluje na imenovanih ploskvah, ki jih mrežno jedro da delu (glejte [Mrežno jedro](topic:solid-kernels)).

Izberite **Simulacija** v polju **Delovno okolje** na levi strani orodne vrstice. Vaš del se ne spremeni; študija je shranjena znotraj datoteke dela, vsaka sprememba pa jo lahko razveljavi.

## Nastavite študijo

1. Pritisnite **Nova študija** v desnem podoknu.
2. Izberite **Material**. Podokno prikaže njegovo togost (E), Poissonovo število, gostoto in mejo tečenja. Vrednosti so tipične vrednosti iz priročnikov; certificirane vrednosti vašega dobavitelja se lahko razlikujejo.
3. Izberite **Mrežo**:
   - **Tetraedrična (natančna)**, privzeta: 10-vozliščni tetraedri, katerih zunanje ploskve ležijo na ploskvah dela, z ukrivljenimi robovi na izvrtinah, zaokrožitvah in drugih okroglih ploskvah. Vozlišča na ravnih, cilindričnih, stožčastih, sfernih in toroidnih ploskvah, na vrtenih in izvlečenih ploskvah ter na prosto oblikovanih (B-spline) ploskvah ležijo na natančni površini; vsaka druga vrsta ploskve sledi svojemu prikazovalnemu mrežju, rezultatna tabela pa pove, koliko ploskev je tako. Mreža se sama zgosti blizu ukrivljenih ploskev, tankih sten in ostrih robov.
   - **Voksel kocke (hitro)**: del, zapolnjen z enakimi kockami. Hitro, vendar ukrivljene ploskve postanejo stopnice. Študije, shranjene pred obstojem tetraedrične mreže, ostanejo pri tej.
4. Pustite **Velikost elementa** prazno za samodejno velikost (približno 12,000 tetraedrov ali 20,000 kock) ali vpišite velikost v mm. Podokno prikaže, približno koliko elementov to naredi, preden se dodajo natančnejša mesta. Pri tetraedrih **Manjši elementi na ukrivljenih ploskvah** (privzeto vklopljeno) zgosti izvrtine in zaokrožitve, kjer napetost običajno doseže vrh.

### Samodejno zgoščevanje

Pri tetraedrih, statični ali uklonski študiji (brez toplotne obremenitve), študiji lastne frekvence in stacionarni toplotni študiji ponudi **Samodejno zgoščevanje (adaptivno)**. Označite in nastavite:

- **Ciljna napaka (%)**: reševanje se ustavi, ko je ocenjena napaka pod njo (na začetku 1 %).
- **Največ prehodov**: največ reševanj, ki jih sme izvesti (na začetku 5, največ 10).

Vsak prehod reši, poišče elemente z največjo oceno napake, jih razdeli (in toliko sosedov, kolikor je potrebno, da mreža ostane celotna) in reši znova. Nova vozlišča na ukrivljenih ploskvah gredo na natančno površino. Rezultati nato prikažejo tabelo in graf z, za vsak prehod, elementi, neznankami, oceno napake ter največjo napetost (ali temperaturo) in premik (ali toplotni tok), plus vrstico, ki pove, zakaj se je ustavilo: cilj je bil dosežen, prehodi so pošli, naslednja mreža bi bila prevelika ali pa je prehod odpovedal (nato vidite zadnji dobri prehod).

Oceno berite kot oceno. (Zienkiewicz–Zhu; v primerjavi s točnimi rešitvami prebere med 0.6 in 0.95 resnične napake.) Meri napako na **celotnem delu**, zato je vrh napetosti pri izvrtini ali zaokrožitvi običajno še malo nenatančen, kadar je ocena majhna: pri koncentraciji napetosti nastavite cilj pod 1 % in opazujte, kako se vrh umirja od prehoda do prehoda. Pri ostrem notranjem kotu ali robu vpete ploskve je resnična napetost neskončna, zato ocena nikoli ne doseže cilja: prehodi pošli.

**Lastne frekvence in uklon.** Pri študiji lastne frekvence ocena pokriva vse načine, ki ste jih zahtevali, vsakega enako štetega; tabela in graf sledita prvima dvema frekvencama. Pri delu samo z ravnimi ploskvami se frekvenca lahko od prehoda do prehoda samo zniža (vsaka mreža ohrani prejšnjo); ukrivljene ploskve se tudi bolj približajo svoji pravi obliki, kar lahko frekvenco nekoliko premakne v eno ali drugo smer. Pri uklonu ocena pokriva predhodno napetost in uklonske načine, tabela pa sledi faktorjem obremenitve. Preverjeno na jeklenem nosilcu 100 × 10 × 10 mm: prva frekvenca se v štirih prehodih ustali z 812.4 na 811.9 Hz, 0.4 % pod Euler–Bernoullijevo (ki zanemari strig), faktor obremenitve stebra pa je znotraj 0.5 % Eulerjevega.

## Pritrdite in obremenite

Vsaka študija potrebuje vsaj eno podporo in za napetost eno obremenitev.

1. Pritisnite {{ui:Vpeto}} v orodni vrstici. Nova podpora je izbrana in čaka na ploskve: kliknite ploskve, ki so pritrjene (kliknite ploskev znova, da jo odstranite). Ko končate, pritisnite **Končano izbiranje** ali {{key:Esc}}. Modri stožci označujejo pritrjene ploskve.
2. Pritisnite {{ui:Sila}} in kliknite ploskve, na katere deluje sila. V podoknu vpišite **Skupno silo** v newtonih in izberite njeno **Smer**: v ploskev ali vzdolž osi. Sila se porazdeli po izbranih ploskvah glede na površino. Oranžne puščice jo prikazujejo.
3. Pritisnite {{ui:Tlak}} za tlak v MPa (N/mm²), ki potiska v izbrane ploskve; negativen tlak vleče.

Več vrst je v seznamu **Dodaj** podokna: **Ploskev brez trenja** (ploskev se lahko drsi sama ob sebi, vendar se od nje ne oddalji — uporabite jo za ravnine simetrije in gladke podpore) in **Gravitacija** (lastna teža dela, 9.81 m/s², v smeri, ki jo izberete).

Podpora, ki pusti del prosto za drsenje ali vrtenje, se zavrne, pri čemer se navede, katero gibanje je ostalo prosto.

## Rešite in preberite rezultate

Pritisnite {{ui:Reši}}. Delo teče v ozadju; **Ustavi** ga prekliče. Nato:

- Del je obarvan po **napetosti po von Misesu**; izberite **Premik** ali **Varnostni faktor** v **Prikaz**. Legenda prikaže merilo.
- Premaknite kazalec na del, da preberete vrednosti pod kazalcem.
- Označite **Deformirana oblika**, da vidite del upognjen (gibanje je povečano z **Merilom**; pravo je v tabeli).
- Tabela navaja največjo napetost in kje je, največji premik, najmanjši **varnostni faktor** (meja tečenja ÷ napetost po von Misesu; pod 1 se material upogne), uporabljeno obremenitev in **reakcije** v podporah (uravnotežijo obremenitev) ter uporabljeno mrežo.

Za **lastne frekvence** izberite to **Vrsto**, nastavite, koliko **Načinov**, in rešite. Vsak način prikaže svojo frekvenco in obliko (oblike so skalirane na 1 pri največjem gibanju).

Če spremenite del, so rezultati označeni kot zastareli: rešite znova.

## Popuščanje in stik (nelinearne študije)

Dve študiji gresta čez "material ostane elastičen":

- **Nelinearno (material popušča)** sledi ravni črti materiala do meje tečenja, nato bolj položni krivulji (**Naklon po popuščanju**, 1 % E, če je prazno). Obremenitev gre v **Korakih obremenitve**; korak, ki se ne ustali, se sam razpolovi. Rezultati dodajo **Plastično deformacijo** h grafom in povedo, koliko obremenitve je bilo prenesene. Če se korak še vedno ne ustali, se študija ustavi pri zadnjem dobrem koraku, podokno ⚠ Težave pa pove, kje: del je tam izčrpal trdnost (porušitev) ali so koraki preveliki.
- **Stik med kosi** dovoli, da se ločeni kosi dela potiskajo med seboj. Dodajte **Par stikov**, izberite ploskve strani A (ploskve, ki pritiskajo) z {{ui:Izberi ploskve}}, nato stran B z {{ui:Izberi ploskve strani B}}. **Brez trenja** kosi potiskajo, drsijo in ločujejo; **lepljeni** kosi ostanejo zlepljeni. Vsak kos je mrežen posebej, zato je majhna reža med njimi v redu. Stik je metoda kazni: kosi se malo potopijo drug v drugega (**faktor kazni** × E ÷ velikost elementa določa togost stika). Tabela prikaže najgloblje potopitev, podokno Težave pa opozori, ko je več kot 1 % velikosti elementa: povišajte faktor ali uporabite manjše elemente.

Oba uporabljata tetraedrično mrežo. Trenje, velika drsenja in velike rotacije tu niso rešeni.

## Zaženite v CalculiX

**Izvoz › Paket CalculiX (.inp)** (ali {{ui:Shrani paket CalculiX (.inp)}} v podoknu) shrani študijo kot vhodni paket za CalculiX, ločen program, ki ga namestite in zaženete sami: ista mreža, material, podpore, obremenitve in pari stikov, v mm, N in MPa. Zaženite ga, nato **Izvoz › Rezultati CalculiX (.frd)** prebere njihovo datoteko z rezultati nazaj na isto mrežo in prikaže premik (in napetost po von Misesu, če datoteka vsebuje napetosti). Če ste med tem spremenili del ali velikost elementa, mreža ni enaka in PartCraft to pove: shranite nov paket.

## Koliko ji lahko zaupate

PartCraft preveri svoj reševalnik z ročnimi formulami (konica konzole se upogne PL³/3EI znotraj 1 %, raztezek palice PL/AE natančno, prva frekvenca konzole znotraj 3 %, napetost okoli izvrtine v plošči). Kljub temu imejte v mislih te omejitve:

- **Mreža.** Pri tetraedrih PartCraft preveri upogib in upogibno napetost konzole (znotraj 0.3 %), napetost pri izvrtini v plošči (Kt, znotraj približno 1 %), debelostensko cev pod tlakom (Lamé, znotraj 0.3 %) in prvo frekvenco (znotraj 0.4 %). Tabela prikaže **kakovost mreže** (najmanjši in največji koti med ploskvami elementa; pod približno 10° je element slab) in **ocenjeno napako napetosti**: če je več kot nekaj odstotkov, rešite znova z manjšo velikostjo elementa ali pa naj to naredi **Samodejno zgoščevanje**. Na plošči z izvrtino in palici z dvema robnima zarezama je samodejno zgoščevanje doseglo 1 % od učbeniškega Kt z približno šestino neznank, ki jih je potrebovalo zgoščevanje celotne mreže. Pri voksel kockah je izvrtina ali zaokrožitev stopnica pri velikosti kocke, zato je napetost tam groba.
- **Ostri notranji koti in robovi vpetih ploskev nimajo prave konične napetosti.** Vrednost tam narašča, ko se elementi manjšajo. Napetosti berite malo stran od takšnih mest ali zaokrožite kot v modelu.
- **Rezultati za branje.** Poleg napetosti po von Misesu, premika in varnostnega faktorja tetraedrična študija prikaže **največjo in najmanjšo glavno napetost** (natezno in tlačno) ter **ekvivalentno deformacijo**. Označite **Prikaži mrežo**, da vidite elemente.
- **Statične študije so linearne in elastične.** Za popuščanje in stik uporabite zgoraj navedene nelinearne vrste študij; velikih upogibov in utrujanja ne rešuje. Toplota, toplotna napetost in linearni uklon so svoje vrste študij: glejte [Toplota, toplotna napetost in uklon](topic:thermal-and-buckling).
- **Vsak material je enak v vseh smereh.** Plastike iz 3D-tiska so šibkejše čez svoje plasti, pogosto za tretjino ali več.
- To je laboratorijska izdaja: dele, ki so pomembni, preverite še na drug način.

## Posodobite med urejanjem (v živo)

Označite **Posodobi med mojim urejanjem** v bloku Reši in odgovori simulacije sledijo vašim urejanjem. Spremenite koto, obremenitev, material ali okolje in takoj se pojavi **hiter odgovor**, narejen z elementi, štirikrat večjimi od študijskih; ko se za trenutek ustavite (približno sekundo), **natančni odgovor** študije nadomesti hitrega. Rezultati povedo, kateri odgovor gledate ("Hiter odgovor" ali "Natančen odgovor") in velikost elementa. Hitri odgovor je dober za smer in velikost: na jeklenem konzolnem nosilcu je bil v 1 % pri upogibu in približno 4 % pri napetosti natančnega. Za številke, ki jih boste uporabili, zaupajte natančnemu. Statične, lastne frekvence, toplotne in uklonske študije delujejo tako; Živo je nastavitev pogleda in se ne shrani v del. Reševanje, ki ga sami pritisnete, ostane, kakršno je, do naslednjega urejanja.

## Ugotovite, kaj se poruši prvo (Poruši)

Pri statični ali uklonski študiji pritisnite **Kaj se poruši prvo?** v bloku **Poruši**. PartCraft skalira obremenitve študije (sile, tlake in težo skupaj), dokler del ne popusti, in našteje, od najslabšega: **faktor obremenitve do prvega popuščanja** (faktor na današnjih obremenitvah, pri katerem najvišja napetost po von Misesu doseže mejo tečenja materiala, z rdečo oznako, kjer se to zgodi) in **faktor obremenitve do uklona** za iste podpore in obremenitve. Faktor 4.3 pomeni, da del prenese 4.3-kratno obremenitev, preden popusti; **faktor pod 1 pomeni, da že popusti pri tej obremenitvi**, kar se v seznamu Težave pojavi kot napaka (najšibkejša ugotovitev je prikazana kot opomba, tudi kadar vse drži). Faktorji prihajajo iz linearne študije na tetraedrih pri vaši velikosti elementa, zato so toliko dobri, kolikor je dobra ta študija: napetost na vpeti ploskvi ali ostrem kotu nima prave konične vrednosti (glejte spodaj), zato bo faktor popuščanja tam bolj previden. Vaš pomočnik lahko isto preverjanje izvede z orodjem `break_run`.

## Povezano

- [Toplota, toplotna napetost in uklon](topic:thermal-and-buckling)
- [Rast oblike iz obremenitev (generativno)](topic:generative-design)
- [Merjenje razdalj, kotov in mase](topic:measure)
- [Kaj še ni izdelano](topic:not-built-yet)
