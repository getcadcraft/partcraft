---
title: Še ni izdelano
summary: Vse, česar ta gradnja PartCraft še ne počne, od zvijajočih se potegov do prikaza v palcih, kotiranja risb in podsestavov, z navedbo, kaj storiti namesto tega danes.
keywords: manjka, še ne, omejitve, omejitev, načrt razvoja, natančno jedro, zaobljenje, skosanje, lupina, potegni po poti, prehod, uvoz STEP, simulacija, izdelava, zvijajoči se potegi, tangenta na koncu prehoda, zaobljenje ploskve, enačbe, palci, kotiranje risb, podsestavi, oblak, tablica, telefon
from: 9b868162
---

PartCraft je zgodnja gradnja. Ta stran navaja, kaj ta gradnja še ne počne, da tega ne iščete, in kaj storiti namesto tega danes. Nič od tega nima datuma.

## Potrebuje natančno jedro

Ta različica gradi vsak del z mrežnim jedrom (glejte [Mrežno jedro](topic:solid-kernels)). Vse spodaj potrebuje natančno geometrijsko jedro, ki te različice še nima. Deli, shranjeni s temi značilkami, se še odprejo: značilke ostanejo v zgodovini, označene kot še ne izdelane, in se ohranijo ob shranjevanju.

| Še ni izdelano | Namesto tega, danes |
|---|---|
| {{ui:Zaobli}} in {{ui:Posnemi}} na okroglih robovih; zaobljenja, katerih polmer se spreminja vzdolž roba; zaobljenja, ki se gladko zlijejo, kjer se stikajo (mrežno jedro jih poreže pod kotom) | Zaobli in Posnemi delujeta na ravnih robovih med ravnimi ploskvami; druge vogale zaokrožite v skici, preden izvlečete ({{ui:Zaobli}} v skici, {{key:F}}) |
| {{ui:Lupina}}, ki odpre ukrivljene ploskve; stene različnih debelin | Odprte ravne ploskve; material dodajte z izvlekanji, kjer mora biti stena debelejša |
| {{ui:Potegni po poti}}, {{ui:Prehod}}, {{ui:Nagib}} na ukrivljenih ploskvah; izvlekanje do ploskve, naslednje ploskve ali oglišča; zožena izvlekanja | Izvlecite ali zavrtite, po potrebi v korakih; izvlecite do globine, ki jo izmerite |
| {{ui:Rebro}}, {{ui:Osnovna prirobnica}}, {{ui:Robna prirobnica}} in razvite oblike | Izvlecite ploščo ali profil rebra |
| Površine: dokončanje {{ui:Oblika}} v del, {{ui:Krpa}}, {{ui:Prehod površine}}, {{ui:Gordonova površina}}, {{ui:Zašij}}, {{ui:Odebeli}}, {{ui:Odmik površine}}, {{ui:Podaljšaj površino}}, {{ui:Prirezi površino}} | Ni na voljo |
| Več teles: {{ui:Združi}}, {{ui:Premakni telo}}, {{ui:Merilo telesa}}, {{ui:Vzorec po poti}}, značilke, ki naredijo novo telo | Eno telo; vzorci in zrcaljenje kopirajo značilke |
| Skice, ravnine, osi in točke na ploskvah, ki jih lahko najde samo natančno jedro (ploskev, ki jo naredi zaobljenje, stena izvrtine, ploskev uvoženega telesa) | Skice na osnovnih ravninah, referenčnih ravninah in ravnih ploskvah izvlekov in zasukov |
| Rezultat generativne zasnove, odprt kot del ali dodan k njemu (postane uvoženo telo) | Prenesite rezultat kot STL ali STEP |
| Urejanje ukrivljenih ploskev odprte datoteke STEP kot natančnih površin; natančni STEP spline, zamaknjenih in zasukanih ploskev iz datoteke STEP, spline stranic, modeliranih navojev, teles STL / OBJ / 3MF in sestavov; STEP za druge modelirnike delov | {{ui:Odpri}} bere STEP kot trikotnike in ohrani ravne ploskve, valje, stožce, krogle in tori datoteke za izvoz ([Odprite datoteko STEP](topic:import-step)); {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} zapiše vsako analitično ploskev natančno in jo ohrani kot facete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drug modelirnik delov še vedno zapisuje |
| Prave loke v pogledih risb | Pogledi in prerezi so narisani iz faset |
| Natančne prostornine, površine in razdalje | {{ui:Meri}} da številke faseta telesa, pri okroglih delih malo prenizke; bolj fina nastavitev **Krivulje** jih približa |

Nekatere vrstice v spodnjih tabelah predlagajo eno od teh značilk kot način, kako obiti nekaj drugega. Te predloge veljajo, ko se natančno jedro vrne.

## Značilke

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Zaobljenja ploskev, polnoobla zaobljenja, zaobljenja z nastavljenimi polmeri v točkah vzdolž roba | Konstanten ali linearno spremenljiv {{ui:Zaobli}}; več značilk zaobljenja |
| Lupine z različnimi debelinami sten | Ena debelina {{ui:Lupina}}; material dodajte z izvlekanji, kjer mora biti stena debelejša |
| Nagib na prostih (spline) ploskvah | {{ui:Nagib}} deluje na ravnih, valjastih in stožčastih ploskvah |
| Zvijajoči se potegi, tankostenski in potegi površin; tangenta na koncu značilke {{ui:Prehod}}; prehod z eno vodilno tirnico; poti spline | {{ui:Potegni po poti}} s fiksno usmeritvijo ali končnim merilom; prehod z dvema ali več vodilnimi tirnicami: glejte [Potegi, prehodi in nagibi](topic:sweep-loft-draft) |
| Rebra iz lokov ali spline; rebra, zrasla kvadratno na skico (iz pogleda z vrha); nagib na rebrih; več reber iz ene skice | {{ui:Rebro}} iz ene verige črt v lastni ravnini rebra: glejte [Rebra in podpore](topic:rib) |
| „Do“ ukrivljene površine, „do naslednje“ z ustavitvijo na ukrivljeni ploskvi | Do ravne ploskve ali referenčne ravnine |
| Protiizvrtane luknje, palčni in cevni navoji, stožčasti navoji, izteki navojev in skošeni začetki navojev | Protivrtanje z majhno globino; ISO metrični in trapezni navoji, kozmetični ali modelirani: glejte [Navoji na gredeh in luknjah, risani ali modelirani](topic:threads) |
| Izvlekanja tankih značilk | Narišite obe steni profila |
| Vzorčne kopije, izpuščene posamično; polnilni vzorci | Uporabite ločene značilke; vzorci vzdolž krivulje: {{ui:Vzorec po poti}} |
| Kopiranje vzorcev, zrcaljenja, zaobljenja, skosanja, lupine in uvožena telesa | Kopirajte skico ali značilko, na kateri temeljijo, ali jo vzorčite |
| Natančna (G1) tangenta na izrednih točkah oblike; združevanje zaplat oblike v večje ploskve | Dvignite stopnjo {{ui:Oblika}}: približane zaplate postanejo manjše; glejte [Prostoročne oblike z Oblika](topic:form-surfaces) |
| Oblika iz več ločenih zaprtih kosov v eni značilki; mostovi med oblikami | Ena zaprta zaplata na značilko Oblika; spojite jih z Join |
| Izbira ploskovnih teles v pogledu (razen točk prireza in zaplate); ploskovna zaobljenja; odprt prirez; G2 zaplate; Gordonove površine, tangentne na ukrivljene sosede (tangentne na ravnine in ravne ploskve so izdelane) | Izberite jih po imenu v plošči značilke; najprej odebelite, nato zaobljite telo |
| Seznam teles v zgodovini; izpuščanje skritih teles iz izvozov | Preimenujte in skrijte telesa na seznamu teles v plošči dela; izbrišite ali zatrite značilko, ki je naredila telo, da ga izpustite |
| Nelinearno merilo, ki ohrani valje in stožce analitične; nelinearno skaliranje odmaknjenih površin | {{ui:Merilo telesa}} naredi ukrivljene ploskve zaprte B-spline (znotraj 0.0000004 mm); enakomerno merilo ostane natančno |
| Združevanje ploskovnih teles; Minkowski vsote | Najprej {{ui:Zašij}} ali {{ui:Odebeli}}, nato {{ui:Združi}} |
| Analiza toleranc: sklopi verig, ki zavijejo za kote (2D in 3D vektorske zanke), občutljivosti, izračunane iz geometrije, Monte Carlo z drugimi porazdelitvami, tolerance velikosti na dimenzijah skice, bonus tolerance iz pogojev materiala | {{ui:Veriga toleranc}} v sestavu: ena smer, najslabši primer in RSS, tolerance vpisane, iz splošne tolerance glave risbe ali iz okvirjev GD&T: glejte [Verige toleranc](topic:tolerance-stackup) |
| Razporejanje: vrstni red reza in uvodni rezi, enkratno rezanje skupnih robov, deli, ki morajo ostati skupaj; ostanki zvitkov, zaloga, deljena med projekti | {{ui:Razporedi ploske dele na liste…}} z razmikom, robovi, obrati in smerjo vlaken: glejte [Razporejanje ploskih delov na liste](topic:nest-flat-parts); preostale plošče se hranijo in najprej uporabijo: glejte [Hranite in ponovno uporabite odrezke](topic:nest-offcuts); načrt reza naredite v lastni programski opremi rezalnika |
| Pločevina: robovi, zavihki (hems), zamiki (jogs), zarezane (miter) in konturne prirobnice; prirobnice na ukrivljenih robovih ali na ploskvah upognjene osnovne prirobnice; skicirani upogibi; zaprtja kotov; oblikovalna orodja; pretvorba telesa v pločevino; ravna površina upognjene osnovne prirobnice z izrezi; tabele upogibov | {{ui:Osnovna prirobnica}} (plošča ali upognjen profil), {{ui:Robna prirobnica}} na ravnih robovih plošče z razbremenitvami upogiba in razvita oblika s faktorjem K: glejte [Pločevina](topic:sheet-metal) |
| Analiza nagiba na sestavih; iskanje ločnice; analiza debeline sten | {{ui:Analiza nagiba}} na delu v Design: glejte [Preverite nagib za brizganje in litje](topic:draft-analysis); odprite vsak del sestava, da ga preverite |

## Skice

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Elipse, tangentni loki, stožnice, spline z nastavljeno stopnjo ali utežmi (NURBS) | Spline (kubični), loki in krožnice s tangentnimi relacijami |
| Točka na splinu (relacija), relacije ukrivljenosti (G2) | Postavite točko spline tja, kjer mora potekati |
| Odmiki kopij spline, ki sledijo poznejšim spremembam; odmiki verig z ostrimi koti spline | Odmaknite znova po spremembi; najprej zaokrožite kot |
| Kopije vzorcev, ki ostanejo povezane z izvirnikom; vzorci vzdolž krivulje | Ponovno vzorčite po spremembi |
| Projiciranje prostoročnih ali nagnjenih krožnih robov; projicirana geometrija, ki sledi delu | Projicirajte ravne in vzporedne krožne robove, nato kotirajte |
| Gnane (referenčne) kote | Preberite velikosti iz plošče ali dejstev o delu |
| Kolinearne relacije | Vzporedno z razdaljo 0 |
| Lepljenje v drug program (sistemsko odložišče) | Izvozite DXF, STEP, STL ali 3MF |
| Vpisovanje lokov, relativnih ali polarnih koordinat | Vpišite črte in krožnice; loke rišite z orodjem Lok |
| Izbira geometrije brez kazalca | Potrebuje klik ali dotik |

## Parametri in enote

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Konfiguracije, ki spreminjajo materiale; tabela oblikovanja v CSV, ki izklaplja značilke | Konfiguracije nastavijo parametre in vklapljajo ter izklapljajo značilke: glejte [Konfiguracije in tabele oblikovanja](topic:design-tables); `partcraft variants` izdela shranjene konfiguracije po imenu, tudi tiste z izklopljenimi značilkami: glejte [Naredite paket različic iz konfiguracij](topic:variant-pack) |
| Enačbe na številkah v ploščah najnovejših značilk (ravnina, potegni po poti, nagib in podobno) | Zapišite jih v skript ali z `partcraft set` ([Skripti in ukazna vrstica](topic:scripts-and-cli)) |
| Del, prikazan v palcih | Velikosti so prikazane v milimetrih; vpišite `2in` v polje za število ali izraz in postane 50.8 |

## Datoteke

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Urejanje lastnih značilk uvoženega telesa STEP (pride brez zgodovine) | Dodajte ali odrežite material z lastnimi značilkami |
| Branje barv, imen, strukture sestava in PMI iz STEP | Ni na voljo |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dela (samo paket različic zapiše DWG: list risbe) | STL ali 3MF za mreže; STEP za telesa; DXF za 2D |
| Odpiranje IGES, DXF ali lastnih datotek drugih programov (datoteke `.3dm` se odprejo kot eno telo: [Odprite model .3dm kot telo](topic:open-3dm-files)) | Zahtevajte STEP ali zaprto mrežo STL, OBJ ali 3MF: [Odprite STL, OBJ ali 3MF](topic:open-meshes) |
| Struktura sestava (drevo z imeni delov) v izvoženem STEP | Sestavni STEP je ena sestavljena celota nameščenih teles |
| Shranjevanje v mapo po vaši izbiri brez prenosa brskalnika | Vklopite „vprašaj, kam shraniti“ v nastavitvah prenosa brskalnika |

## Risbe

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Mere poleg treh splošnih velikosti (velikosti lukenj, položaji, tolerance velikosti) | Označite PDF ali izvozite DXF in kotirajte v 2D CAD programu |
| Več kot en prerez ali detajl; poravnani, izrezani in pomožni pogledi | Po en prerez in en detajl na risbo |
| Prosto besedilo, opombe in tabele na listu (razen naslovnih in revizijskih blokov) | Opomba o obdelavi ali besedilo, dodano v PDF |
| Projekcija prvega kota, premikajoči se pogledi, pokončni listi | Tretji kot, samodejna postavitev, vodoravni listi A4–A0 in ANSI A–E |
| Živi prerezni pogled: več ravnin ali prerezni kvader naenkrat, obris okoli reza, shranjevanje prereza v datoteko | Ena ravnina naenkrat iz {{ui:Pogledi}} › {{ui:Prerezni pogled}}; glejte [Poglejte v notranjost s prereznim pogledom](topic:section-view) |
| Sestavne risbe z več pogledi, merami ali oznakami, ki jih lahko premaknete | En izometrični (ali razstavljen) pogled s samodejnimi oznakami in seznamom delov |
| Kopiranje in lepljenje simbolov GD&T in površinskih oznak | Vsak postavite z Datum, Frame ali Finish |
| Priročniki: datoteke STEP v {{ui:Iz druge datoteke…}} v Illustrate, model, poslan neposredno iz ModelCraft ali BimCraft, slike v kakovosti sledilnika poti, interaktivni 3D v PDF | Odprite STEP v Design in začnite priročnik {{ui:Iz odprtega dela}}; shranite model kot glTF (.glb); slike PNG 3D pogleda; interaktivna 3D datoteka: glejte [Začnite priročnik v Illustrate](topic:illustrate) |

## Sestavi

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Zobniški, zobatični, nosni in vijačni sklepi; kroglični sklep, omejen na stožec; sklepi na ukrivljenih ploskvah ali med točkami | Togi, vrtljivi, drsni, valjasti, ravninski, kroglični in zatični v utor sklepi na ravnih ploskvah, vsaka vrednost z lastnimi mejami: glejte [Izdelava sestava](topic:build-assembly) |
| Koraki razstavljanja, ki zasukajo dele, in vlečenje delov, ki jih postavljajo sklepi | Ravni koraki razstavljanja; odstranite sklep, da del premaknete ročno |
| Podsestavi | Samo ena raven delov |
| Zobniki, nosilci, kontakt | Ni na voljo |

## Izdelava

| Še ni izdelano | Namesto tega, danes |
|---|---|
| 3D grobo rezkanje ukrivljenih ploskev, 3D prilagodljivo čiščenje, obdelava ostankov; zaključna obdelava z vodno črto, svinčnikom, radialno in spiralno; prilagodljivi prehodi, zapisani kot loki | 2.5-osna ploskev, žep, 2D prilagodljivo, kontura, vrtanje in posnemanje: glejte [Naredite poti orodja in G-kodo](topic:manufacture); vzporedna in Scallop zaključna obdelava celotnega modela: glejte [3D zaključna obdelava](topic:finish-3d) |
| Osi 4 in 5, struženje, tipanje | Nastavite eno stran naenkrat z osjo orodja na zavihku Postavitev |
| Preverjanje trkov držala in oprijemala | Opozorila o dolžini utorov; preverite v simulatorju vašega krmilnika |
| Tipanje, cikli življenjske dobe orodij in podprogrami; osi 4 in 5 ter kode struženja v postprocesorju; nalaganje datotek postprocesorjev drugih programov | Pišite ali spremenite postprocesor v lastnem formatu PartCraft: glejte [Postprocesorji, ki jih lahko urejate](topic:post-processors) |
| G-koda v palcih (G20) | Samo milimetri (G21) |

## Simulacija in generativna zasnova

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Nelinearne študije: plastičnost, velike deformacije, stik med deli, utrujenost | Linearna statika in lastne frekvence: glejte [Preverite napetost in upogib](topic:simulation); varnostni faktor naj bo daleč nad 1 |
| Nelinearno uklanjanje (imperfekcije, zadkritično vedenje, preskok) | Faktorji linearne kritične obremenitve z veliko rezervo: glejte [Toplota, toplotna napetost in uklanjanje](topic:thermal-and-buckling) |
| Sevanje med ploskvami (faktorji oblike), kontaktna upornost, materiali, odvisni od temperature, vztrajnost v toplotni napetosti (toplotni udarni valovi) | Sevanje v okolico, stacionarna ali kvazistatična toplotna napetost v času, konstantne lastnosti: glejte [Toplota, toplotna napetost in uklanjanje](topic:thermal-and-buckling) |
| Samodejno izboljšanje za prehodno segrevanje in študije s toplotno obremenitvijo; redčenje mreže tam, kjer je napaka majhna; cilj na lokalni količini (največja napetost na eni točki) | **Samodejno izboljšaj** za statične, uklanjalne, lastnofrekvenčne in stacionarne toplotne študije, na napaki čez celoten del: glejte [Preverite napetost in upogib](topic:simulation); sicer zmanjšajte velikost elementa |
| Ležajne in vijačne obremenitve, oddaljene sile, momenti, vzmeti, predpisani pomiki | Sile in tlaki na ploskvah, gravitacija; fiksne in brezfrikcijske ploskve |
| Simulacija sestavov; materiali, ki se razlikujejo po smeri (natisnjene plasti, kompoziti) | En del, en izotropni material |
| Več niti za tetraedrske študije, prenos toplote in generativno zasnovo; katere koli niti na strani, ki ni izolirana med izvori | Študije vokslov, uklanjanje, napetost v času in laminarni tok uporabljajo niti, kjer stran dovoli: glejte [Nastavitve PartCraft](topic:settings) |
| Turbulentni tok z natančnostjo za zasnovo (model Spalart–Allmaras je vključen kot eksperimentalen: trenje v cevi 30 do 34 % preveliko, ponovna pritrditev za korakom 21 do 39 % prekratka; načrtovano: finejše celice ob stenah), toplota v toku, nestacionarni tok, proste površine, nenewtonske tekočine, vrteči se deli | Laminarni, stacionarni, izotermni tok newtonske tekočine ali eksperimentalni turbulentni model za kakovostne vzorce: glejte [Simulirajte tok tekočin](topic:flow-simulation); plošča opozori, ko je Reynoldsovo število nad laminarnim |
| Omejitve napetosti in proizvodna pravila (previsi, smeri rezkanja) v generativni zasnovi; več materialov v eni obliki | Najtogejša oblika za prostornino; preverite rezultat v Simulaciji: glejte [Zrasti oblika iz obremenitev](topic:generative-design) |
| Rezultat kot urejljivo (gladko, parametrično) telo | STL, STEP s facetami ali del z rezultatom kot uvoženim telesom iz faset |
| Oblikovanje elektromotorjev: rotor, ki se vrti v statorju, navor glede na kot, nasičeno jeklo, magneti, ki izgubijo moč za svojim kolenom, vrtinčni tokovi in izgube v železu in bakru; magnetna polja v 3D ali na ukrivljenih mrežah | Linearna 2D magnetostatika na mreži v analitični knjižnici: tuljave, železo, trajni magneti na svoji črti povratka, reže, induktivnost in privlak: glejte [Magnetna polja v 2D](topic:magnetic-fields-2d) |

## Skripti

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Pomoč ob lebdenju, prekinitvene točke in korakanje v urejevalniku skriptov | Iskanje, zlaganje in dopolnjevanje so vključeni (glejte [Pišite in zaganjajte skripte](topic:craftscript)); za drugo uporabite svoj urejevalnik: {{ui:Shrani}} in {{ui:Odpri}} v skupini Skript premikata skripte ven in noter; vgrajene funkcije so navedene v [Jezik CraftScript](topic:craftscript-language) |
| Prekinitvene točke in korakanje skozi skript | `disp` in `fprintf` vmes; {{key:Mod+Enter}} zažene nekaj izbranih vrstic naenkrat |
| Polja in grafi, ki jih skript prikaže v delovnem okolju Design; skripti, ki spreminjajo parametre dela | Prikažejo se v delovnem okolju Skript; skripti berejo parametre z `param` (glejte [Pišite in zaganjajte skripte](topic:craftscript)), spreminjajo jih na zavihku {{ui:Parametri}} |
| Slike in tabele poleg grafov; urejanje grafa (povečava, meje osi) pred shranjevanjem | Poleg drug drugega prikaže grafe; shranite graf kot PNG, SVG ali CSV in dokončajte drugje |
| numpy in drugi paketi Python; Python brez povezave; zlaganje Pythona v urejevalniku; Pascal Script | Standardna knjižnica Pythona, CraftScript in Lua: glejte [Skripti v Pythonu](topic:craftscript-python) |
| Predajanje funkcij Lua vgrajenim funkcijam; klic knjižnične funkcije iz Lua po imenu, zgrajenem med izvajanjem skripta | Zapišite ime knjižnične funkcije v skript (`cs.static_tet(…)`) ali jo pokličite iz skripta CraftScript |

## Aplikacija

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Shranjevanje v oblak, deljenje in zgodovina različic | Še ni na voljo. Shranjujte datoteke v računalnik in hranite različice po imenih |
| PartCraft kot nameščena aplikacija na iPad in iPhone | Uporabite PartCraft v brskalniku naprave; na Androidu in namizju teče tudi v CadCraft Studio (getcadcraft.com/download) |
| Kontekstni (desni klik) meniji | Orodna vrstica in desna plošča |
| Popolno delo brez povezave ob prvem zagonu | Samo, ko je aplikacija shranjena za delo brez povezave: glejte [Delo brez povezave](common:offline) |

Kaj najbolj pogrešate, sporočite prek strani za podporo na spletnem mestu: to oblikuje, kaj bo sledilo.

## Engineer (generatorji in polja)

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Glave, priključki in fitingi na ustvarjenem toplotnem izmenjevalniku; krivulje temperature za trdnost materiala; izgube kolen v razdelilniku | Generatorji izdelajo jedro in cevi; fitinge dodajte v Design; uporabite vrednosti materiala pri sobni temperaturi z varnostnim faktorjem |
| Dodajanje generatorjev iz imenika dodatkov z enim klikom | {{ui:Odpri}} v delovnem okolju Engineer doda generator iz datoteke |
| Datoteka polja, finejša od lastne voksel velikosti generatorja; branje datotek `.vdb` | Shranite finejše polje iz skripta; `.vdb` se zapisuje, ne bere |
| Izračuni po tlačnih predpisih za posode pod tlakom | Učbeniške formule za tanko in debelo steno z izbranim varnostnim faktorjem; ne kodne rezerve |
| Generatorji za druge aplikacije | Samo PartCraft v tej različici |
