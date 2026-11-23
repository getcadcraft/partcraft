---
title: Kaj je novega v 0.9 (prej)
summary: PartCraft 0.9 dodaja zaobljitve med ploskvami in zgoščevanje v telesa, sestave na tisoče delov, trezor Dokumenti z revizijami, dodatek Solid FEM za napetosti, deset metod lokov, britanske jeklene profile, fazo tiskanja ter dodatke za tiskanje s smolo.
keywords: kaj je novega 0.9, prejšnja izdaja, kaj je novega, opombe ob izdaji, dnevnik sprememb, 0.9, zaobljitev med ploskvami, kotaljenje krogle, zaobljitev več robov, zgostitev, telo iz ploskev, lupina STEP, telo IGES, zaobljitve iz skeniranja, velik sestav, lahki prikaz, 20000 delov, dokumenti, trezor, prevzem, revizija, izdaja, kje uporabljeno, povezava Rhino, Grasshopper, 3dm, kazalci, tovarniška tla, vrsta opravil, Solid FEM, končni elementi, von Mises, lastna frekvenca, metode lokov, 3-točkovni lok, britanski jekleni profili, modra knjiga, faza tiskanja, smola, GOO, CTB, podlaga, položi ploščato, 0.8, 0.8.1, različica, nove funkcije, analiza v živo, posodobi med urejanjem, kaj se zlomi prvo, faktor obremenitve, nelinearno, tečenje, plastična deformacija, stik, CalculiX, študija gibanja, odmik, ploskve, NURBS, zgladi, trup, zebra, inženirstvo, generator, generirano telo, skica iz fotografije, merilo za tiskanje, razdeli za tiskanje, krčenje, razporejeni listi, G-koda, risba, kotiraj luknje, pomočnik, MCP, jeziki, vrstice orodne vrstice
from: 1dafd7c8
---

To se je spremenilo v PartCraft 0.9 v primerjavi z 0.8.1. Prostooblične ploskve se zdaj zaprejo v telesa, sestavi z na tisoče deli ostanejo uporabni, trezor Dokumenti hrani revizije, dodatek Solid FEM pa preverja napetost v delu. Vsaka točka pove, kje jo najdete.

## Novo v 0.9.1

- **Natančen izvoz STEP.** {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} in {{ui:STEP AP214 (točno telo)}} zdaj delujeta. Luknje, čepi, zaobljitve, stožci, krogle in tori so zapisani na njihovih pravih ploskvah s pravimi krožnicami kot robovi, zato lahko drug CAD ali CAM program luknjo prepozna kot luknjo. Stranice zlepkov, modelirani navoji in uvožene mreže ostanejo ravne fasete v istem telesu. Glejte [Izvoz za tiskanje, STEP in DXF](topic:export-files#for-other-cad-programs-step).
- **STEP noter, natančen STEP ven.** Datoteka STEP, ki jo odprete, ohrani svoje ravne ploskve, valje, stožce, krogle in tori, zato jih {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} zapiše nazaj kot prave površine namesto fasetov: nosilec dobavitelja z vijačnimi luknjami gre ven z enakimi ploskvami, s katerimi je prišel, plus vsem, kar ste vanj zarezali. Zlepkaste, potegnjene in zavrtene ploskve datoteke ostanejo fasete, prav tako telesa iz STL, OBJ in 3MF. Za del, shranjen prej, znova odprite datoteko STEP. Glejte [Odprite datoteko STEP in nadaljujte](topic:import-step).
- **Prave krožnice v DXF ploskve.** {{ui:Izvoz}} › {{ui:DXF skice ali ravne ploskve}} z izbrano ravno ploskvijo zdaj zapiše okrogle luknje kot krožnice, z lastnim središčem in polmerom luknje, za mizo z laserjem, plazmo ali vodnim curkom. Drugi okrogli robovi so še vedno fasete.
- **Natančen STEP za delavnico.** V {{ui:Izdelava}}: {{ui:Natančni STEP (delovne koordinate)}} zapiše del z izhodiščem v ničelni točki obdelovanca nastavitve in Z vzdolž osi orodja, to so koordinate, ki jih uporablja G-koda. Glejte [Ustvarjanje poti orodja in G-kode](topic:manufacture#exact-step-for-the-shop).

## Novo

### Ploskve in telesa

- **Zaobljitev med ploskvama.** Izberite {{ui:Ploskve}} v polju {{ui:Delovno okolje}}, nato {{ui:Zaobljitev med ploskvami}}. Izberite dve ploskvi enega telesa, vpišite polmer (in {{ui:Polmer na koncu (mm, 0 = enak)}} za polmer, ki se spreminja vzdolž roba). Vrstica z rezultatom pove, kako daleč je zaobljitev od idealne kotalne krogle; polmer, ki ne ustreza, je zavrnjen z navedbo ploskve. {{ui:Zaobljitev več robov}} zaobli veliko robov v enem koraku; označite {{ui:Vogali (krogelna krpa, kjer se stekajo trije)}} za krogelni vogal, kjer se srečajo tri zaobljeni robovi ravnih ploskev. Glejte [Prostooblične ploskve (NURBS)](topic:nurbs-surfaces).
- **Zadebelitev v telo.** {{ui:Zadebelitev v telo}} v istem delovnem okolju da ploskvi debelino; {{ui:Druga stran}} jo razširi v drugo smer. Guba ali samopresek je zavrnjen, pri čemer sta ploskev in mesto navedena.
- **Telesa iz ploskev.** Prirezane ploskve je mogoče združiti z unijo, odštevanjem in presekom ter vgraditi v del kot en korak razveljavitve. STEP zapiše telo kot eno zaprto lupino, IGES kot eno telo; oboje se pri branju prebere kot telo. Če se ploskve ne ujemajo rob za rob, datoteka dobi ločene ploskve in vrstica stanja to pove. Telesa je mogoče narediti tudi v urejevalniku vozlišč; glejte [Urejevalnik vozlišč](topic:nodes).
- **Robne in spremenljive zaobljitve v skeniranjih.** Ko ploskve prilagajate skeniranju, se iščejo tudi robne zaobljitve (tori) in zaobljitve s spremenljivim polmerom vzdolž precej ravnega roba ter navedejo s svojim polmerom. Preizkušeno je samo na umetnih skeniranjih.

### Sestavi, dokumenti in povezave

- **Veliki sestavi.** Deli, ki so kopije, delijo eno mrežo, {{ui:Pogledi}} › {{ui:Lahki prikaz}} pa riše kvadre, da pogled ostane gibljiv (sam se vklopi pri zelo velikih sestavih; izbiranje in sklepi še vedno uporabljajo prave dele). Drevo delov prikaže svoje prve vrstice in gumb {{ui:Pokaži še 700}} za ostale. Datoteke sestavov lahko hranijo do 50.000 primerkov in 100.000 sklepov. Glejte [Sestavite sestav](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti …}} v skupini **Datoteka** odpre pogovorno okno nad mapo projekta: prevzem in vrnitev, črke revizij, stanja (v delu, za pregled, izdano, zastarelo), zgodovina, kje uporabljeno in kosovnica. Glejte [Dokumenti in revizije (trezor)](topic:documents-walkthrough).
- **Povezava Rhino v živo.** En skript, `cadcraft_link.py`, spremlja dokument Rhino ali Grasshopper in v PartCraft pošlje samo tisto, kar se je spremenilo; uvožena značilka se nato obnovi na novi obliki. Povezava deluje samo v eno smer in potrebuje Studio. Glejte [Povezava .3dm v živo](topic:live-3dm-link).
- **Videti kazalce drug drugega.** V skupni seji se kazalec vsake osebe prikaže z njenim imenom in značilko, ki jo je izbrala. Glejte [Delo v živo z drugimi](topic:work-live).
- **Tovarniška tla.** Vklopite dodatek Tovarniška tla v {{ui:Nastavitve}} › {{ui:Dodatki}}. Po objavi programa v {{ui:Izdelava}} lahko njegov zavihek {{ui:Dodaj v čakalno vrsto opravil}} ali {{ui:Shrani kot datoteko opravila}}. Nikoli ne pošlje ali zažene stroja.

### Analiza in deli

- **Dodatek Solid FEM.** Vklopite {{ui:Solid FEM}} v {{ui:Nastavitve}} › {{ui:Dodatki}} (dokler ga ne vklopite, je izklopljen) in v desni plošči se prikaže zavihek {{ui:Solid FEM}}. {{ui:Naredi mrežo dela}}, izberite vpete ploskve in obremenitve v 3D pogledu, {{ui:Reši}}, in narišite pomik, napetost po von Mises ali lastno obliko z {{ui:Prikaži na modelu}}. Glejte [Solid FEM: preverjanje napetosti](topic:solid-fem-check).
- **Lok v skicah, na deset načinov.** Puščica poleg {{ui:Lok}} v orodni vrstici skice našteje: 3-točkovni, Začetek Središče Konec, Začetek Središče Kot, Začetek Središče Dolžina, Začetek Konec Kot, Začetek Konec Smer, Začetek Konec Polmer, Središče Začetek Konec, Središče Začetek Kot, Središče Začetek Dolžina in Nadaljuj. Glejte [Narišite lok na deset metod](topic:sketch-arc-methods).
- **Britanske jeklene mere.** Varjenci lahko uporabijo 976 britanskih profilov (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); vpišite mero, na primer `305x165x40 UB`. Glejte [Konstrukcijski elementi](topic:structural-members).

### Tiskanje

- **Faza tiskanja.** Gumb {{ui:Faza tiskanja}} v orodni vrstici (dodatek 3D-tiskanje, privzeto vklopljen) postavi telesa vašega dela na črtkano podlago: {{ui:Razvij}}, {{ui:Zasukaj za 90°}}, {{ui:Razporedi na podlagi}}, {{ui:Prilagodi vse na podlago}}, {{ui:Predogled plasti}}, nato {{ui:Pošlji na 3D-tiskalnik}} prek USB, Klipper (Moonraker), OctoPrint ali PrusaLink. Nič se ne pošlje, dokler ne potrdite, in vaš del se nikoli ne spremeni. Za datoteko STL ali 3MF glejte [Pripravite del za 3D-tiskanje](topic:print-3d).
- **Tiskanje s smolo.** Dodatki v {{ui:Nastavitve}} › {{ui:Dodatki}}, vsi izklopljeni, dokler jih ne vklopite: rezalnik za smolo, preizkus osvetlitve in formati datotek Elegoo GOO, SL1, Chitubox CBDDLP/CTB in Anycubic. Rezanje teče v ozadju, zato stran ostaja odzivna.

## V vseh aplikacijah

- Vsak namig ob kazalcu je Bootstrap nasvet.
- Začetni nasvet ima gumb za zapiranje; ostane zaprt.
- Vrsta zavihkov plošče, ki se ne prilega, se pomika vodoravno namesto da bi bila odrezana.
- Zavihek brskalnika najprej prikaže ime odprtega dokumenta, pred PartCraft | CadCraft.
- {{ui:Nastavitve}} prikažejo {{ui:Postavitev}} delovnega okolja kot spustni seznam izbir, polje za jezik pa našteje vse jezike, ki jih ta različica ima.
- Teža in temperatura sta vrsti enot v nastavitvah enot.

## Popravljeno

- Meni Lok v skici zdaj našteje vse metode.
- Orodna vrstica dodatkov in naslov zavihka brskalnika sta bila popravljena 2026-11-09.

## Poštene omejitve

- Natančni STEP so v OpenCascade prebrali nazaj (veljavna telesa, prostornine enake tistim, izračunanim ročno). Še ni bil odprt v vseh CAD ali CAM programih, sestav pa ni zapisan kot natančni STEP.
- Nič še ni natisnjeno na pravem tiskalniku. Rezanje, G-koda in datoteke za smolo so bile prebrane nazaj z našimi programi ali nadomestnim tiskalnikom; nobeden od formatov za smolo ni bil naložen na tiskalnik, velikosti tiskalnikov in osvetlitve pa so izhodiščne vrednosti.
- Solid FEM je linearen, izotropen in elastičen, en material na del, brez stika, tečenja ali uklona. Napetost na vpetih ploskvah in ostrih vogalih je odvisna od mreže. Je pripomoček za preverjanje, ni pa ga pregledal inženir.
- Časi za velike sestave prihajajo iz strežnika brez GPU; okvir s polno podrobnostjo 20.000 delov tam še vedno traja sekunde.
- Zaobljitve delujejo na parih ploskev; ni splošnega zlivanja oglišč in ni zaobljitve med ploskvami, ki se ne srečajo.
- Povezava Rhino še nikoli ni tekla znotraj pravega Rhina ali Grasshopperja. Dokumenti so bili preizkušeni z dvema programoma na eni mapi, ne z dvema osebama na omrežni mapi.
- Prilagajanje ploskev pravemu skeniranju še ni bilo ročno preverjeno. Jeziki razen angleščine so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo, slika diska za macOS pa ni overjena. Glejte [Odpravljanje težav](topic:troubleshooting).

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).

## Prej: 0.8 in 0.8.1

To se je spremenilo v PartCraft 0.8 in 0.8.1 v primerjavi z 0.7. Simulacija odgovarja med urejanjem in pove, kaj se zlomi prvo, sestavi dobijo študije gibanja, novi delovni okolji pa naredita prostoblične ploskve in dele, dimenzionirane po fiziki. 0.8.1 je majhna popravljena izdaja.

### Novo

**Simulacija**

- **Posodobi med urejanjem.** Označite {{ui:Posodabljaj med urejanjem}} v bloku Reši in odgovori sledijo vašim spremembam. Spremenite mero, obremenitev ali material in hitri odgovor, narejen z elementi štirikrat večjimi, se pojavi takoj; ko se ustavite za približno sekundo, ga nadomesti lastni natančnejši odgovor študije. Rezultati povedo, kateri od obeh gledate. Na jeklenem konzolnem nosilcu je bil hitri odgovor pri pomiku znotraj 1 %, pri napetosti pa približno 4 % od natančnejšega. Glejte [Preverite napetost in upogib](topic:simulation#update-while-you-edit-live).
- **Kaj se zlomi prvo.** Pri statični študiji ali študiji uklona {{ui:Kaj se zlomi prvo?}} v bloku **Zlomi ga** skalira obremenitve, dokler del ne popusti. Našteje, od najslabšega, faktor obremenitve do prvega tečenja (z rdečo oznako, kjer napetost vrhunca) in faktor obremenitve do uklona. Faktor pod 1 pomeni, da del že popusti pri obremenitvi, plošča Težave pa prikaže napako. Faktorji prihajajo iz linearne študije, zato so samo toliko dobri kot ona. Glejte [Preverite napetost in upogib](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje in stik.** Dve novi vrsti študij: nelinearna, pri kateri material sledi svoji ravni črti do meje tečenja in nato bolj položnemu naklonu, z izrisano plastično deformacijo, ter stična, pri kateri se ločeni kosi potiskajo (brez trenja) ali ostanejo povezani (vezani). Korak obremenitve, ki se ne more umiriti, ali kosi, ki se preveč pogreznejo drug v drugega, se prikažejo na plošči Težave. Trenje, veliko drsenje, velike rotacije, veliki upogibi in utrujenost niso rešeni. Glejte [Preverite napetost in upogib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Datoteke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX vhodna datoteka (.inp)}} shrani študijo za CalculiX, ločen program, ki ga namestite in zaženete sami; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} prebere njegovo datoteko z rezultati nazaj na isto mrežo. PartCraft tega programa nikoli ne zažene in to tudi pove, če se je del spremenil od shranjevanja datoteke.

**Sestavi**

- **Študije gibanja.** {{ui:Sestav}} › {{ui:Gibanje}} poganja vrednost enega sklepa skozi čas, ki ga podate (konstantna hitrost, mehko, sinusno ali naprej in nazaj), postavi sestav na vsakem koraku s sklepi in zaprtimi zankami ter poroča, kateri deli trčijo in kako blizu si pridejo. {{ui:Dodaj točko}} riše položaj, hitrost in pospešek točke, vrednost sklepa in odmik v odvisnosti od časa; {{ui:Shrani CSV}} in {{ui:Shrani graf}} jih zapišeta ven. Po {{ui:Zaženi}} premakne vrstica Korak skozi zagon sestav na poljuben korak. Nastavitve študije se shranijo v datoteko sestava. Hitrost in pospešek prihajata iz zabeleženih položajev, zato uporabite več korakov, če se ostra konica prebere prenizko. Glejte [Preverite sestav za trke in gibanje](topic:check-assembly#a-motion-study).

**Ploskve in deli iz fizike**

- **Delovno okolje Ploskve.** Izberite {{ui:Ploskve}} v polju {{ui:Delovno okolje}} za krivulje in ploskve NURBS poleg dela: {{ui:Krivulja}}, {{ui:Prehod}}, {{ui:Potegni po poti}}, {{ui:Uskladi}} in {{ui:Zebra}}, s zveznostjo (G0, G1 ali G2), izmerjeno na natančnih ploskvah, in rob, ki je slabši od zahtevanega, naveden na plošči Težave z popravkom Uskladi. {{ui:Zgladi}} meri trupne črte glede na pregibe in skoke ukrivljenosti ter obnovi neugladne v okviru vaše tolerance. Ploskve se shranijo v datoteko dela in ne spremenijo značilk dela. Glejte [Prostooblične ploskve (NURBS)](topic:nurbs-surfaces).
- **Delovno okolje Inženirstvo.** V preklopniku delovnih okolij izberite {{ui:Inženirstvo}}, izberite generator in kliknite {{ui:Novo}}: skript dimenzionira del glede na to, kar mora narediti (prenos toplote, tokovi, tlak, material, postopek tiskanja), z učbeniškimi formulami in ga zgradi, nato vrne uporabljene številke z njihovimi viri, svoje proizvodne preglede in datoteke za orodja analize. Enaki vhodi dajo isti del na vsakem računalniku. Generator se ohrani v delu, odpiranje dela pa nikoli ne zažene skripta. Glejte [Deli iz fizike: generatorji](topic:engineer-generators) in [Napišite generator](topic:write-a-generator).

**Skiciranje, risbe in izdelava**

- **Skica iz fotografije.** {{ui:Značilke}} › {{ui:Več}} › {{ui:Skica iz fotografije …}} sledi sliki ravnega dela na enobarvni podlagi (obris in luknje) ali risbi s peresom v črte, loke in krožnice. Vnesete eno dolžino, preverite predogled in naredite skico. Glejte [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Merilo in razdelitev za tiskanje.** {{ui:Izvoz}} › {{ui:Merilo za tiskanje (STL ali 3MF) …}} spreminja merilo po osi brez spremembe dela, na primer za dodatek za krčenje. {{ui:Izvoz}} › {{ui:Razdeli za tiskanje (zip kosov) …}} razreže del, prevelik za vašo podlago, na oštevilčene kose, povezane z vponkami, zatiči, lastovičjimi repi, luknjami za čepe ali žepi za magnete. Glejte [Tiskanje v 3D](topic:print-3d).
- **Razporejeni listi v G-kodo.** {{ui:Izvoz}} › {{ui:Razporejeni listi v G-kodo}} prebere razporejeni DXF in naredi en program na list prek postprocesorja, ki ga izberete: najprej luknje in izrezi, nato obrisi. Ne načrtuje vstopnih poti, vrstnega reda rezanja ali skupnih robov. Glejte [Razporejanje ploskih delov na liste](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Risbe, ki naredijo več same.** {{ui:List}} › {{ui:Samodejno}} izbere najmanjši list velikosti A, ki sprejme poglede pri največjem standardnem merilu do 1:1. {{ui:Kotiraj luknje}} postavi središčno oznako na vsako luknjo, eno oznako na velikost in položaje od spodnjega levega vogala pogleda. Glejte [Naredite risbo](topic:drawing-pdf).

**V vseh aplikacijah**

- **Jeziki.** Aplikacije so na voljo v 54 jezikih. Tisti, ki presegajo angleščino, so strojni osnutki, dokler jih ne prebere materni govorec.
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} izbere Prelom (kot prej), 2 vrstici ali 1 vrstico; vrstica, ki se ne prilega, se pomika vodoravno. Trak značilk PartCraft prikaže najbolj uporabljeno orodje veliko, variante pa skrije za razdeljen gumb.
- **Povežite svojo umetno inteligenco.** Studio je zbirališče za povezavo lastnega pomočnika z vsemi osmimi aplikacijami, z dovoljenjem samo za branje, predlaganje ali urejanje za vsako aplikacijo. Povezan pomočnik lahko dimenzionira del iz stavka, na primer nosilca za obremenitev, pokaže svoje delo in vse preglede ter ga zgradi; poroča, česar ni preveril (koncentracija napetosti, utrujenost, lezenje v plastiki). Glejte [Uporaba PartCraft z AI pomočnikom](topic:use-with-ai-assistants).

### Popravljeno v 0.8.1

- **Zamrznitev kazalca v celozaslonskem načinu.** Izbiranje ob kazalcu je zdaj omejeno. Vzrok je naše najboljše branje in ni bil potrjen z osebo, ki je to prijavila.
- **Jezik med zagonom.** Studio in zapakirane izdaje lahko med delovanjem preklopijo jezik; prej so bile samo v angleščini. To še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.

### Še ni v tej različici

- Povezava z umetno inteligenco ni končana: povezava z enim klikom v Studiu, gostiteljski priključek za AI v brskalniku, lasten ključ API v Studiu in objavljeni paket MCP niso obljubljeni. Studio nima lastne umetne inteligence.
- Studio ni podpisan s kodo: Windows lahko opozori, macOS pa zahteva desni klik in nato Odpri. Glejte [Odpravljanje težav](topic:troubleshooting).
- Verige toleranc so še vedno v eni smeri: glejte [Verige toleranc](topic:tolerance-stackup).
- Ostalo je navedeno v [Kaj še ni izdelano](topic:not-built-yet).

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
