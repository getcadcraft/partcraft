---
title: Kaj je novega v 0.9
summary: PartCraft 0.9 prinaša zaobljitve med ploskvami in zadebelitev v trdna telesa, sestave tisočih delov, trezor Documents z revizijami, dodatek Solid FEM za napetosti, deset načinov lokov, britanske jeklene profile, fazo tiskanja in dodatke za tiskanje na smolo.
keywords: kaj je novega, release notes, dnevnik sprememb, 0.9, zaobljitev med ploskvami, kotaleča krogla, zaobli več robov, zadebelitev, telo iz ploskev, lupina STEP, telo IGES, zaobljitve skeniranja, velik sestav, lahki prikaz, 20000 delov, dokumenti, trezor, prevzem, vrnitev, revizija, izdaja, kje se uporablja, povezava rhino, grasshopper, 3dm, kazalci, tovarniška hala, vrsta opravil, solid fem, končni elementi, von mises, lastna frekvenca, načini lokov, lok s 3 točkami, britanski jekleni profili, blue book, faza tiskanja, smola, goo, ctb, podloga, položi ravno, risba, kotiraj luknje, krčenje, razporejeni listi, g-koda, pomočnik, mcp, jeziki, vrstice orodne vrstice, 0.8, 0.8.1, različica, nove značilke, live analysis, posodabljaj med urejanjem, zlomi jo, faktor obremenitve, nelinearno, tečenje, plastična deformacija, stik, calculix, študija gibanja, zazor, ploskve, nurbs, zgladi, trup, zebra, engineer, generator, generirano telo, skica iz fotografije, merilo za tiskanje, razdeli za tiskanje, nested sheets, drawing
from: 96d9fbfa
---

To je, kar se je spremenilo v PartCraft 0.9 v primerjavi z 0.8.1. Prosta ploskve se zdaj zaprejo v trdna telesa, sestavi tisočih delov ostanejo uporabni, trezor Documents hrani revizije, dodatek Solid FEM pa preveri napetost v delu. Vsaka točka pove, kje jo najdete.

## Novo v 0.9.1

- **Točen izvoz STEP.** {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} in {{ui:STEP AP214 (točno telo)}} zdaj delujeta. Luknje, izbokline, zaobljitve, stožci, krogle in tori so zapisani na pravih površinah, s pravimi krogi kot robovi, da lahko drug CAD ali CAM program luknjo prepozna kot luknjo. Robovi splajnov, modelirani navoji in uvožene mreže ostanejo ravne fasete v istem telesu. Glejte [Izvoz za tiskanje, STEP in DXF](topic:export-files#for-other-cad-programs-step).
- **STEP noter, točen STEP ven.** Datoteka STEP, ki jo odprete, ohrani svoje ravne ploskve, valje, stožce, krogle in tori, zato {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} jih zapiše nazaj kot prave površine namesto fasetov: nosilec dobavitelja z vijačnimi luknjami gre ven z enakimi ploskvami, s katerimi je prišel, plus vse, kar ste vanj izrezali. Splajn, potegnjene po poti in zavrtene ploskve iz datoteke ostanejo fasete, prav tako telesa iz STL, OBJ in 3MF. Ponovno odprite datoteko STEP za del, shranjen prej. Glejte [Odprite datoteko STEP in nadaljujte z gradnjo](topic:import-step).
- **Pravi krogi v DXF ploskve.** {{ui:Izvoz}} › {{ui:DXF skice ali ravne ploskve}} z izbrano ravno ploskvijo zdaj zapiše okrogle luknje kot kroge, s središčem in polmerom luknje, za laser, plazemsko ali vodno rezalno mizo. Drugi okrogli robovi ostanejo fasete.
- **Točen STEP za delavnico.** V {{ui:Izdelava}} {{ui:Natančni STEP (delovne koordinate)}} zapiše del z izhodiščno točko delovne postavitve in Z vzdolž osi orodja, s koordinatami, ki jih uporablja G-koda. Glejte [Izdelava poti orodja in G-kode](topic:manufacture#exact-step-for-the-shop).

## Novo

### Ploskve in trdna telesa

- **Zaobljitev med ploskvami.** Izberite {{ui:Površine}} v polju {{ui:Delovno okolje}}, nato {{ui:Zaobljitev med ploskvama}}. Izberite dve ploskvi enega telesa in vpišite polmer ({{ui:Polmer na koncu (mm, 0 = enak)}} za polmer, ki se spreminja vzdolž roba). Rezultatna vrstica pove, kako daleč je zaobljitev od idealne kotaleče krogle; polmer, ki ne ustreza, je zavrnjen z imenom ploskve. {{ui:Zaobljitev več robov}} zaobli mnogo robov v enem koraku; označite {{ui:Vogali (krogelna krpa, kjer se stekajo trije)}} za krogelni vogal, kjer se trije zaobljeni robovi ravnih ploskev stekajo. Glejte [Proste ploskve (NURBS)](topic:nurbs-surfaces).
- **Zadebelitev v telo.** {{ui:Zadebelitev v telo}} v istem delovnem okolju da ploskvi debelino; {{ui:Druga stran}} jo poveča v drugo smer. Zguba ali samokrižanje je zavrnjeno s ploskvijo in navedenim mestom.
- **Telesa iz ploskev.** Obrezane ploskve je mogoče združiti z unijo, odštevanjem in presekom ter vpeti v del kot en korak razveljavitve. STEP zapiše telo kot eno zaprto lupino, IGES kot eno telo; oboje se prebere nazaj kot telo. Če se ploskve ne ujemajo rob za rob, datoteka dobi ločene ploskve, vrstica stanja pa to pove. Telesa lahko izdelate tudi v urejevalniku vozlišč; glejte [Urejevalnik vozlišč](topic:nodes).
- **Zaobljitve in spremenljive zaobljitve v skeniranjih.** Ko prilagajate ploskve skeniranju, iščejo tudi obodne zaobljitve (tori) in zaobljitve spremenljivega polmera vzdolž precej ravnega roba ter jih naštejejo s polmerom. Preizkušeno samo na izmišljenih skeniranjih.

### Sestavi, dokumenti in povezave

- **Veliki sestavi.** Deli, ki so kopije, delijo eno mrežo, {{ui:Pogledi}} › {{ui:Lahki prikaz}} pa riše škatle, da pogled ostane gibljiv (sam se vklopi pri zelo velikih sestavih; izbiranje in spoji še vedno uporabljajo prave dele). Drevo delov pokaže prvih nekaj vrstic in gumb {{ui:Pokaži še 700}} za ostale. Datoteke sestavov lahko hranijo do 50.000 primerkov in 100.000 spojev. Glejte [Izdelava sestava](topic:build-assembly).
- **Dokumenti.** {{ui:Dokumenti …}} v skupini **Datoteka** odpre pogovorno okno nad mapo projekta: prevzem in vrnitev, revizijske črke, stanja (v delu, za pregled, izdano, zastarelo), zgodovina, kje se uporablja in kosovnica. Glejte [Dokumenti in revizije (trezor)](topic:documents-walkthrough).
- **Živa povezava Rhino.** En skript, `cadcraft_link.py`, spremlja dokument Rhino ali Grasshopper in v PartCraft potisne samo spremembe; uvožena značilka se nato ponovno izdela na novi obliki. Je enosmerna in potrebuje Studio. Glejte [Živa povezava .3dm](topic:live-3dm-link).
- **Videti kazalce drug drugega.** V skupni seji se kazalec vsake osebe prikaže z njenim imenom in značilko, ki jo ima izbrano. Glejte [Delajte v živo z drugimi](topic:work-live).
- **Tovarniška hala.** Vklopite dodatek Tovarniška hala v {{ui:Nastavitve}} › {{ui:Dodatki}}. Ko objavite program v {{ui:Izdelava}}, njegov zavihek lahko {{ui:Dodaj v vrsto opravil tovarniške hale}} ali {{ui:Shrani kot datoteko opravila}}. Nikoli ne pošlje ali zažene stroja.

### Analiza in deli

- **Dodatek Solid FEM.** Vklopite {{ui:Solid FEM}} v {{ui:Nastavitve}} › {{ui:Dodatki}} (izklopljen je, dokler ga ne vklopite), v desnem podoknu pa se pojavi zavihek {{ui:Solid FEM}}. {{ui:Razdeli del v mrežo}}, izberite fiksne ploskve in obremenitve v 3D pogledu, {{ui:Reši}} in narišite pomik, napetost von Mises ali lastno nihajno obliko z {{ui:Prikaži na modelu}}. Glejte [Solid FEM: preverjanje napetosti](topic:solid-fem-check).
- **Lok v skicah, na deset načinov.** Puščica poleg {{ui:Lok}} v orodni vrstici skice našteje: tri točke, Začetek Središče Konec, Začetek Središče Kot, Začetek Središče Dolžina, Začetek Konec Kot, Začetek Konec Smer, Začetek Konec Polmer, Središče Začetek Konec, Središče Začetek Kot, Središče Začetek Dolžina in Nadaljuj. Glejte [Narišite lok na deset načinov](topic:sketch-arc-methods).
- **Britanski jekleni profili.** Konstrukcijski elementi lahko uporabljajo 976 britanskih profilov (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); vpišite velikost, na primer `305x165x40 UB`. Glejte [Konstrukcijski elementi](topic:structural-members).

### Tiskanje

- **Faza tiskanja.** Gumb {{ui:Faza tiskanja}} v orodni vrstici (dodatek 3D tiskanje, privzeto vklopljen) da telesa vašega dela na črtkano podlogo: {{ui:Položi ravno}}, {{ui:Obrni 90°}}, {{ui:Razporedi na podlogo}}, {{ui:Prilagodi vse na podlogo}}, {{ui:Predogled slojev}}, nato {{ui:Pošlji na 3D-tiskalnik}} prek USB, Klipper (Moonraker), OctoPrint ali PrusaLink. Nič se ne pošlje, dokler ne potrdite, in vaš del se nikoli ne spremeni. Za datoteko STL ali 3MF glejte [Pripravite del za 3D-tiskanje](topic:print-3d).
- **Tiskanje na smolo.** Dodatki v {{ui:Nastavitve}} › {{ui:Dodatki}}, vsi izklopljeni, dokler jih ne vklopite: rezalnik za smolo, preizkus osvetlitve in formati datotek Elegoo GOO, SL1, Chitubox CBDDLP/CTB in Anycubic. Rezanje teče v ločeni delovni niti, zato stran ostane odzivna.

## V vseh aplikacijah

- Vsak namig ob premiku miške je Bootstrap tooltip.
- Začetni namig ima gumb za zapiranje; ostane zaprt.
- Vrsta zavihkov podokna, ki se ne prilega, se pomika vstran in ni odrezana.
- Zavihek brskalnika prikaže ime odprtega dokumenta pred PartCraft | CadCraft.
- {{ui:Nastavitve}} prikažejo delovno postavitev {{ui:Razporeditev}} kot spustni seznam možnosti, polje jezika pa našteje vse jezike, ki jih izdaja vsebuje.
- Teža in temperatura sta vrsti enot v nastavitvah {{ui:Enote}}.

## Popravljeno

- Meni loka v skici zdaj našteje vsako metodo.
- Orodna vrstica dodatka in naslov zavihka brskalnika sta bila popravljena 2026-11-09.

## Iskreno o omejitvah

- Točen STEP je bil prebran nazaj v OpenCascade (veljavna telesa, prostornine enake tistim, izračunanim ročno). Še ni bil odprt v vseh CAD ali CAM programih, sestav pa ni zapisan kot točen STEP.
- Nič ni bilo natisnjeno na pravem tiskalniku. Rezanje, G-koda in datoteke za smolo so bile prebrane z našimi programi ali nadomestnim tiskalnikom; nobena od oblik za smolo še ni bila naložena na tiskalnik, velikosti tiskalnikov in osvetlitve pa so izhodišča.
- Solid FEM je linearen, izotropen in elastičen, en material na del, brez stikov, popuščanja ali zvijanja. Napetost pri vpetih ploskvah in ostrih vogalih je odvisna od mreže. Je pripomoček za preverjanje in ga ni pregledal inženir.
- Časi za velike sestave so iz strežnika brez GPU; polna podrobnost okvirja z 20.000 deli še vedno traja sekunde.
- Zaobljitve delujejo na parih ploskev; ni splošnega mešanja oglišč in ni zaobljitve med ploskvami, ki se ne stikajo.
- Povezava Rhino še nikoli ni tekla v pravem Rhino ali Grasshopperju. Documents je bil preizkušen z dvema programoma na eni mapi, ne z dvema osebama na omrežni mapi.
- Prilagajanje ploskev pravemu skeniranju še ni bilo ročno preverjeno. Jeziki razen angleščine so strojni osnutki.
- Namestitveni programi za Windows niso podpisani s kodo, slika diska za macOS pa ni notarizirana. Glejte [Odpravljanje težav](topic:troubleshooting).

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).

## Prej: 0.8 in 0.8.1

To je, kar se je spremenilo v PartCraft 0.8 in 0.8.1 v primerjavi z 0.7. Simulacija odgovarja med urejanjem in pove, kaj se zlomi prvo, sestavi dobijo študije gibanja, nova delovna okolja pa naredijo proste ploskve in dele, dimenzionirane po fiziki. 0.8.1 je majhna popravna izdaja.

### Novo

**Simulacija**

- **Posodabljaj med urejanjem.** Označite {{ui:Posodabljaj med urejanjem}} v bloku Reši in odgovori sledijo vašim urejanjem. Spremenite mero, obremenitev ali material in hitri odgovor, narejen z elementi štirikrat večjimi, se pojavi takoj; ko se ustavite za približno sekundo, nadomesti odgovor študije njen natančnejši odgovor. Rezultati povedo, kateri odgovor gledate. Na jeklenem konzolnem nosilcu je bil hitri odgovor v 1 % pri upogibu in okoli 4 % pri napetosti natančnega. Glejte [Preverite napetost in upogib](topic:simulation#update-while-you-edit-live).
- **Kaj se zlomi prvo.** Za statično ali uklonsko študijo {{ui:Kaj se zlomi prvo?}} v bloku **Zlomi jo** skalira obremenitve, dokler del ne popusti. Našteje, najslabše prvo, faktor obremenitve do prve meje tečenja (z rdečim označevalcem, kjer napetost vrhuna) in faktor obremenitve do uklona. Faktor pod 1 pomeni, da del že popusti kot obremenjen, podokno Težave pa prikaže napako. Faktorji prihajajo iz linearne študije, zato so toliko dobri, kolikor je ona. Glejte [Preverite napetost in upogib](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje in stik.** Dve študiji več: nelinearna, kjer material sledi svoji ravni črti do meje tečenja in nato bolj položnemu naklonu, z izrisano plastično deformacijo, in kontaktna, kjer se ločeni kosi potiskajo (brez trenja) ali ostanejo sprijeti (vezano). Korak obremenitve, ki se ne ustali, ali kosi, ki se preveč potopijo drug v drugega, se pokažejo v podoknu Težave. Trenje, veliko drsenje, velike rotacije, veliki upogibi in utrujenost niso rešeni. Glejte [Preverite napetost in upogib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Datoteke za CalculiX.** {{ui:Izvoz}} › {{ui:Datoteka CalculiX (.inp)}} shrani študijo za CalculiX, ločen program, ki ga namestite in zaženete sami; {{ui:Izvoz}} › {{ui:Rezultati CalculiX (.frd)}} prebere njegovo rezultatno datoteko nazaj na isto mrežo. PartCraft tega programa nikoli ne zažene in pove, če se je del spremenil od shranjevanja datoteke.

**Sestavi**

- **Študije gibanja.** {{ui:Sestav}} › {{ui:Gibanje}} poganja vrednost enega spoja skozi čas, ki ga določite (konstantna hitrost, nalahno, sinus ali naprej in nazaj), postavi sestav na vsakem koraku s spoji in zankami ter poroča, kateri deli trčijo in kako blizu se približajo. {{ui:Dodaj točko}} nariše položaj točke, hitrost in pospešek, vrednost spoja in odmik v odvisnosti od časa; {{ui:Shrani CSV}} in {{ui:Shrani graf}} jih zapišeta. Po {{ui:Zaženi}} premakne vrstica Korak skozi zagon sestav na poljuben korak. Nastavitve študije so shranjene v datoteki sestava. Hitrost in pospešek prihajata iz zapisanih položajev, zato uporabite več korakov, če ostra konica bere prenizko. Glejte [Preverite sestav za trke in gibanje](topic:check-assembly#a-motion-study).

**Ploskve in deli iz fizike**

- **Delovno okolje Površine.** Izberite {{ui:Površine}} v polju {{ui:Delovno okolje}} za krivulje in ploskve NURBS poleg dela: {{ui:Krivulja}}, {{ui:Prehod}}, {{ui:Potegni po poti}}, {{ui:Uskladi}} in {{ui:Zebra}}, z zveznostjo (G0, G1 ali G2), izmerjeno na točnih ploskvah, in rob, slabši od zahtevanega, naveden v Težavah s popravkom Uskladi. {{ui:Zgladi}} meri linije trupa za prevoje in skoke ukrivljenosti ter ponovno izdela nepravilne v vaših tolerancah. Ploskve so shranjene v datoteki dela in ne spremenijo značilk dela. Glejte [Proste ploskve (NURBS)](topic:nurbs-surfaces).
- **Delovno okolje Engineer.** Izberite {{ui:Engineer}} v preklopniku delovnega okolja, izberite generator in kliknite {{ui:Novo}}: skript dimenzionira del glede na to, kaj mora početi (segrevanje za premik, tokovi, tlak, material, postopek tiskanja), z učbeniškimi formulami in ga izdela, nato vrne številke, ki jih je uporabil, z njihovimi viri, svoja proizvodna preverjanja in datoteke za analitska orodja. Enaki vhodi dajo isti del na poljubnem računalniku. Generator je shranjen v delu, odpiranje dela pa nikoli ne zažene skripta. Glejte [Deli iz fizike: generatorji](topic:engineer-generators) in [Napišite generator](topic:write-a-generator).

**Skiciranje, risbe in izdelava**

- **Skica iz fotografije.** {{ui:Značilke}} › {{ui:Več}} › {{ui:Skica iz fotografije …}} sledi sliki ravnega dela na enostavni podlagi (obris in luknje) ali risbi s peresom v črte, loke in kroge. Podate eno dolžino, preverite predogled in naredite skico. Glejte [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Merilo in razdelitev za tiskanje.** {{ui:Izvoz}} › {{ui:Merilo za tiskanje (STL ali 3MF) …}} skalira po oseh, ne da bi spremenil del, na primer za dodatek za krčenje. {{ui:Izvoz}} › {{ui:Razdeli za tiskanje (zip kosov) …}} razreže del, ki je prevelik za vašo podlogo, na oštevilčene kose, povezane s tulci, ključi, lastovičinimi repi, luknjami za tulce ali magnetnimi žepki. Glejte [Tiskanje v 3D](topic:print-3d).
- **Razporejeni listi v G-kodo.** {{ui:Izvoz}} › {{ui:Razporejeni listi v G-kodo}} prebere razporejen DXF in izdela en program na list prek postprocesorja, ki ga izberete: najprej luknje in izrezi, nato konture. Ne načrtuje vstopnih odsekov, vrstnega reda rezanja ali skupnih robov. Glejte [Razporedite ravne dele na liste](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Risbe, ki naredijo več same.** {{ui:List}} › {{ui:Samodejno}} izbere najmanjši list formata A, ki sprejme pogled pri največjem standardnem merilu do 1:1. {{ui:Kotiraj luknje}} postavi središčno oznako na vsako luknjo, en klic na velikost in položaje od spodnjega levega kota pogleda. Glejte [Izdelava risbe](topic:drawing-pdf).

**V vseh aplikacijah**

- **Jeziki.** Aplikacije so v 54 jezikih. Tisti, ki so poleg angleščine, so strojni osnutki, dokler jih ne prebere domači govorec.
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} izbere prelom (kot prej), 2 vrstici ali 1 vrstico; vrstica, ki se ne prilega, se pomika vstran. Trak značilk PartCraft prikaže najpogosteje uporabljeno orodje veliko, bolj redka pa skrije za razdeljen gumb.
- **Povežite svojo AI.** Studio je središče za povezavo lastnega pomočnika z vsemi osmimi aplikacijami, z dovoljenjem samo za branje, predlaganje ali urejanje za vsako aplikacijo. Povezan pomočnik lahko dimenzionira del iz stavka, na primer nosilec za obremenitev, pokaže svoje delo in vse preverbe ter ga izdela; pove, kaj ni preveril (koncentracija napetosti, utrujenost, lezenje v plastiki). Glejte [Uporaba PartCraft z AI pomočnikom](topic:use-with-ai-assistants).

### Popravljeno v 0.8.1

- **Zamrznitev kazalca na celem zaslonu.** Izbira kazalca ob premiku je zdaj zajeta. Vzrok je naše najboljše branje in ni bil potrjen z osebo, ki je poročala.
- **Jezik med izvajanjem.** Studio in pakirane izdaje lahko med delovanjem zamenjajo jezik; prej so bile samo v angleščini. To še ni preizkušeno na vseh platformah: sporočite nam, če se jezik ne spremeni.

### Še ni v tej različici

- Povežite svojo AI še ni dokončano: enoklikovna povezava v Studiu, gostujoči konektor za AI v brskalniku, lastni API ključ v Studiu in objavljen paket MCP niso obljubljeni. Studio nima lastne AI.
- Studio ni podpisan s kodo: Windows lahko opozori, macOS pa zahteva desni klik in Odpri. Glejte [Odpravljanje težav](topic:troubleshooting).
- Tolerančni sklopi so še vedno enosmerni: glejte [Tolerančni sklopi](topic:tolerance-stackup).
- Ostalo je navedeno v [Kaj še ni izdelano](topic:not-built-yet).

Prejšnje spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
