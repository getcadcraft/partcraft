---
title: Kaj še ni izdelano
summary: Vse, česar ta različica PartCraft še ne počne, od zvitih potegov po poti do prikaza v palcih, kotiranja risb in podsestavov, ter kaj namesto tega storiti danes.
keywords: manjka, še ne, omejitve, omejitev, načrt razvoja, natančno jedro, zaobljitev, posnetje, lupina, prehod, uvoz STEP, simulacija, izdelava, zvit potegni po poti, tangenca na koncu prehoda, zaobljitev ploskev, enačbe, palci, kotiranje risb, podsestavi, oblak, tablični računalnik, telefon
from: 97b10a29
---

PartCraft je zgodnja različica. Ta stran našteva, česa še ne počne, da tega ne boste iskali, in kaj namesto tega storite danes. Za nič od tega ni določen datum.

## Potrebuje natančno jedro

Ta različica vsak del gradi z jedrom mreže (glejte [Jedro mreže](topic:solid-kernels)). Vse spodaj potrebuje natančno geometrijsko jedro, ki ga ta različica še nima. Deli, shranjeni s temi značilkami, se še vedno odprejo: značilke ostanejo v zgodovini, označene kot neizdelane, in se ohranijo pri shranjevanju.

| Še ni izdelano | Namesto tega, danes |
|---|---|
| {{ui:Zaobli}} in {{ui:Posnemi}} na okroglih robovih; zaobljitve, katerih polmer se spreminja vzdolž roba; zaobljitve, gladko zlite tam, kjer se srečajo (jedro mreže jih stika pod kotom) | {{ui:Zaobli}} in {{ui:Posnemi}} delujeta na ravnih robovih med ravnimi ploskvami; druge vogale zaokrožite v skici, preden iztisnete ({{ui:Zaobli}} v skici, {{key:F}}) |
| {{ui:Lupina}} odpiranje ukrivljenih ploskev; stene različnih debelin | Odprite ravne ploskve; dodajte material z iztisom tam, kjer mora biti stena debelejša |
| {{ui:Potegni po poti}}, {{ui:Prehod}}, {{ui:Nagib}} na ukrivljenih ploskvah; iztisni do ploskve, naslednje ploskve ali oglišča; stožčasti iztisi | Iztisnite ali zavrtite, po potrebi v korakih; iztisnite do globine, ki jo izmerite |
| {{ui:Rebro}}, {{ui:Osnovna prirobnica}}, {{ui:Robna prirobnica}} in razvite oblike | Iztisnite ploščo ali profil rebra |
| Ploskve: dokončanje {{ui:Oblika}} v del, {{ui:Krpa}}, {{ui:Prehod površine}}, {{ui:Gordonova površina}}, {{ui:Zašij}}, {{ui:Odebeli}}, {{ui:Odmik površine}}, {{ui:Podaljšaj površino}}, {{ui:Prirezi površino}} | Ni na voljo |
| Več teles: {{ui:Združi}}, {{ui:Premakni telo}}, {{ui:Merilo telesa}}, {{ui:Vzorec po poti}}, značilke, ki ustvarijo novo telo | Eno telo; vzorci in zrcaljenje kopirajo značilke |
| Skice, ravnine, osi in točke na ploskvah, ki jih lahko najde samo natančno jedro (ploskev, nastala z zaobljitvijo, stena luknje, ploskev uvoženega telesa) | Skicirajte na osnovnih ravninah, referenčnih ravninah in ravnih ploskvah iztisov in zavrtij |
| Rezultat generativnega oblikovanja, odprt kot del ali dodan vanj (postane uvoženo telo) | Prenesite rezultat kot STL ali STEP |
| Urejanje ukrivljenih ploskev odprte datoteke STEP kot natančnih površin; natančni STEP zlepkovih, potegnjenih in zavrtenih ploskev iz datoteke STEP, stranice zlepkov, modelirani navoji, telesa STL / OBJ / 3MF in sestavi; STEP za druge modelirnike delov | {{ui:Odpri}} bere STEP kot trikotnike in za izvoz ohrani ravne ploskve, valje, stožce, krogle in tori datoteke ([Odprite datoteko STEP](topic:import-step)); {{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} zapiše vsako analitično ploskev natančno in te ohrani kot fasete ([Izvoz](topic:export-files#for-other-cad-programs-step)); makro za drug modelirnik delov še vedno zapisuje |
| Pravi loki v pogledih risbe | Pogledi in prerezni pogledi so narisani iz fasetov |
| Natančne prostornine, površine in razdalje | {{ui:Meri}} da številke fasetiranega telesa, na okroglih delih nekoliko nižje; finejša nastavitev **Krivulje** jih približa |

Nekatere vrstice v tabelah spodaj predlagajo eno od teh značilk kot pot okoli nečesa drugega. Ti predlogi veljajo, ko se natančno jedro vrne.

## Značilke

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Zaobljitve ploskev, polne zaobljitve, zaobljitve s polmeri, nastavljenimi v točkah vzdolž roba | Konstantna ali linearno spremenljiva {{ui:Zaobli}}; več značilk zaobljitve |
| Lupine z različnimi debelinami sten | Ena debelina {{ui:Lupina}}; dodajte material z iztisi tam, kjer mora biti stena debelejša |
| Nagib na prostoobličnih (zlepkovih) ploskvah | {{ui:Nagib}} deluje na ravnih, valjastih in stožčastih ploskvah |
| Zviti potegi po poti, potegi tankih sten in površinski potegi; tangenca na koncu značilke {{ui:Prehod}}; prehod z eno vodilno tirnico; poti zlepkov | {{ui:Potegni po poti}} s fiksno usmerjenostjo ali končnim merilom; prehod z dvema ali več vodilnima tirnicama: glejte [Potegni po poti, prehod in nagib](topic:sweep-loft-draft) |
| Rebra iz lokov ali zlepkov; rebra, ki zrastejo pravokotno na skico (iz tlorisa); nagib na rebrih; več reber iz ene skice | {{ui:Rebro}} iz ene verige črt v lastni ravnini rebra: glejte [Rebra in podpornice](topic:rib) |
| „Do“ ukrivljene ploskve, „do naslednje“ ob ukrivljeni ploskvi | Do ravne ploskve ali referenčne ravnine |
| Poglobljene luknje, palčni in cevni navoji, stožčasti navoji, izteki navojev in posneti začetki navojev | Poglobitev z majhno globino; metrični ISO in trapezni navoji, kozmetični ali modelirani: glejte [Navoji na gredeh in vrtinah, risani ali modelirani](topic:threads) |
| Iztisi tankih značilk | Narišite obe stranici profila |
| Preskočene kopije vzorca posamezno, vzorci polnil | Uporabite ločene značilke; vzorci vzdolž krivulje: {{ui:Vzorec po poti}} |
| Kopiranje vzorcev, zrcaljenj, zaobljitev, posnetij, lupin in uvoženih teles | Kopirajte skico ali značilko, na kateri temeljijo, ali naredite vzorec iz nje |
| Natančna (G1) tangenca v izjemnih točkah oblike; združevanje krp oblike v večje ploskve | Povišajte stopnjo oblike: približane krpe so manjše; glejte [Prostoobličnimi oblikami z ukazom Oblika](topic:form-surfaces) |
| Oblika iz več ločenih zaprtih kosov v eni značilki; mostovi med oblikami | Ena zaprta oblika na značilko Oblika; združite jih s {{ui:Spoji}} |
| Izbiranje teles ploskev v pogledu (razen točk prireza in krp); zaobljitve ploskev; odprava prireza; krpe G2; Gordonove površine, tangentne na ukrivljene sosednje (tangentnost na ravnine in ravne ploskve je izdelana) | Izberite jih po imenu v plošči značilke; najprej odebelite, nato zaobljite telo |
| Seznam teles v zgodovini; izpuščanje skritih teles iz izvozov | Preimenujte in skrijte telesa na seznamu teles v plošči dela; izbrišite ali zaduširajte značilko, ki je ustvarila telo, da ga izpustite |
| Neenakomerno merilo, ki ohrani valje in stožce analitične; neenakomerno spreminjanje merila odmaknjenih ploskev | {{ui:Merilo telesa}} spremeni ukrivljene ploskve v B-zlepke (znotraj 0.0000004 mm); enakomerno merilo ostane natančno |
| Združevanje teles ploskev; Minkowskijeve vsote | Najprej {{ui:Zašij}} ali {{ui:Odebeli}}, nato {{ui:Združi}} |
| Analiza toleranc: verige, ki zavijejo (2D in 3D vektorske zanke), občutljivosti, izračunane iz geometrije, Monte Carlo z drugimi porazdelitvami, tolerance velikosti na kotah skice, bonus tolerance iz pogojev materiala | {{ui:Veriga toleranc}} v sestavu: ena smer, najslabši primer in RSS, tolerance vpisane, iz splošne tolerance v glavi risbe ali iz okvirjev GD&T: glejte [Verige toleranc](topic:tolerance-stackup) |
| Razporejanje (nesting): vrstni red rezanja in vstopnih poti, skupni robovi enkrat, deli, ki morajo ostati skupaj; ostanki zvitkov, surovec, deljen med projekti | {{ui:Razporedi ploske dele na liste…}} z razmiki, robovi, obrati in smerjo vlaken: glejte [Razporejanje ploskih delov na liste](topic:nest-flat-parts); preostale plošče se hranijo in uporabijo prve: glejte [Hranjenje in ponovna uporaba odreskov](topic:nest-offcuts); načrtujte rez v programski opremi vašega rezalnika |
| Pločevina: zavihki, zamiki, poševne in konturne prirobnice; prirobnice na ukrivljenih robovih ali na ploskvah upognjene osnovne prirobnice; skicirani upogibi; zaključki vogalov; oblikovna orodja; pretvorba telesa v pločevino; ravna oblika upognjene osnovne prirobnice z izrezi; tabele upogibov | {{ui:Osnovna prirobnica}} (plošča ali upognjen profil), {{ui:Robna prirobnica}} na ravnih robovih plošče z razbremenitvami upogibov in razvita oblika s K-faktorjem: glejte [Pločevina](topic:sheet-metal) |
| Analiza nagiba na sestavih; iskanje ločilne črte; analiza debeline stene | {{ui:Analiza nagiba}} na delu v Oblikovanju: glejte [Preverite nagib za litje in brizganje](topic:draft-analysis); odprite vsak del sestava in ga preverite |

## Skice

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Elipse, tangentni loki, stožnice, zlepki z nastavljeno stopnjo ali utežmi (NURBS) | Zlepki (kubični), loki in krožnice s tangentnimi omejitvami |
| Točka na zlepku (relacija), relacije ukrivljenosti (G2) | Postavite lastno točko zlepka tja, kjer mora potekati |
| Zamaknjene kopije zlepkov, ki sledijo poznejšim spremembam; odmiki verig z ostrimi vogali zlepkov | Po spremembi znova naredite odmik; najprej zaokrožite vogal |
| Kopije vzorca, ki ostanejo povezane z izvirnikom; vzorci vzdolž krivulje | Po spremembi naredite vzorec znova |
| Projiciranje prostoobličnih ali nagnjenih krožnih robov, projicirana geometrija, ki sledi delu | Projicirajte ravne in vzporedne krožne robove, nato kotirajte |
| Vodene (referenčne) kote | Preberite mere s plošče ali z lastnosti dela |
| Kolinearne relacije | Vzporednost z razdaljo 0 |
| Prilepljanje v drug program (sistemsko odložišče) | Izvozite DXF, STEP, STL ali 3MF |
| Vpisovanje lokov, relativnih ali polarnih koordinat | Vpišite črte in krožnice; loke rišite z orodjem {{ui:Lok}} |
| Izbiranje geometrije brez kazalca | Potrebuje klik ali dotik |

## Parametri in enote

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Konfiguracije, ki spremenijo materiale; tabela zasnove CSV, ki izklopi značilke | Konfiguracije nastavijo parametre in vklopijo ali izklopijo značilke: glejte [Konfiguracije in tabele zasnove](topic:design-tables); `partcraft variants` zgradi shranjene konfiguracije po imenu, tudi z izklopljenimi značilkami: glejte [Naredite paket različic iz svojih konfiguracij](topic:variant-pack) |
| Enačbe na številkah lastnih plošč najnovejših značilk (ravnina, potegni po poti, nagib in podobno) | Zapišite jih v skript ali z `partcraft set` ([Skripti in ukazna vrstica](topic:scripts-and-cli)) |
| Del, prikazan v palcih | Mere so prikazane v milimetrih; v številsko polje ali izraz vpišite `2in`, in postane 50.8 |

## Datoteke

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Urejanje lastnih značilk uvoženega telesa STEP (prispe brez zgodovine) | Dodajte ali odrežite material z lastnimi značilkami |
| Branje barv, imen, strukture sestava in PMI iz STEP | Ni na voljo |
| Izvoz glTF, OBJ, IGES, Parasolid; DWG 3D dela (DWG zapiše samo paket različic: risalni list) | STL ali 3MF za mreže; STEP za telesa; DXF za 2D |
| Odpiranje IGES, DXF ali lastnih datotek drugih programov (datoteke `.3dm` se odprejo kot eno telo: [Odprite model .3dm kot telo](topic:open-3dm-files)) | Zahtevajte STEP ali zaprto mrežo STL, OBJ ali 3MF: [Odprite STL, OBJ ali 3MF](topic:open-meshes) |
| Struktura sestava (drevo z imeni delov) v izvoženem STEP | STEP sestava je en sestavljen element postavljenih teles |
| Shranjevanje v mapo po izbiri brez prenosa brskalnika | Vklopite „vprašaj, kam shraniti“ v nastavitvah prenosov brskalnika |

## Risbe

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Kote poleg treh splošnih mer (velikosti lukenj, položaji, tolerance mer) | Označite PDF ali izvozite DXF in kotirajte v 2D CAD programu |
| Več kot en prerez ali detajl; poravnani, izrezani in pomožni pogledi | En prerez in en detajl na risbo |
| Prosto besedilo, opombe in tabele na listu (razen naslovnega in revizijskega bloka) | Opomba o površinski obdelavi ali besedilo, dodano na PDF |
| Projekcija po prvem kotu, premikajoči se pogledi, pokončni listi | Tretji kot, samodejna postavitev, ležeči listi A4–A0 in ANSI A–E |
| Prerezni pogled v živo: več ravnin ali prerezni kvader hkrati, obris okoli reza, shranjevanje prereza v datoteko | Ena ravnina naenkrat iz {{ui:Pogledi}} › {{ui:Prerezni pogled}}; glejte [Poglejte v notranjost s prereznim pogledom](topic:section-view) |
| Risbe sestavov z več pogledi, kotami ali premičnimi oznakami | En izometrični (ali razstavljen) pogled s samodejnimi oznakami in seznamom delov |
| Kopiranje in prilepljanje simbolov GD&T in površinske obdelave | Vsakega postavite z {{ui:Baza}}, {{ui:Okvir}} ali {{ui:Površinska obdelava}} |
| Priročniki: datoteke STEP v {{ui:Iz druge datoteke…}} programa Illustrate, model, predan neposredno iz ModelCraft ali BimCraft, slike v kakovosti sledilnika poti, interaktivni 3D v PDF | Odprite STEP v Oblikovanju in začnite priročnik z {{ui:Iz odprtega dela}}; shranite model kot glTF (.glb); slike 3D pogleda v PNG; interaktivna 3D datoteka: glejte [Začnite priročnik v Illustrate](topic:illustrate) |

## Sestavi

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Zobniški, zobata letev, krmilni in vijačni sklepi; kroglični sklep, omejen na stožec; sklepi na ukrivljenih ploskvah ali med točkami | Togi, vrtljivi, drsni, valjasti, ravninski, kroglični in sklepi s čepom v utoru na ravnih ploskvah, vsaka vrednost z lastnimi mejami: glejte [Sestavite sestav](topic:build-assembly) |
| Razstavljalni koraki, ki zavrtijo dele, in vlečenje delov, ki jih postavijo sklepi | Ravni koraki razstavljanja; odstranite sklep, da del premaknete z roko |
| Podsestavi | Samo ena raven delov |
| Zobniki, krilca, stik | Ni na voljo |

## Izdelava

| Še ni izdelano | Namesto tega, danes |
|---|---|
| 3D prilagodljivo čiščenje in grobo rezkanje z odmiki v 3D; dokončevanje po stalnem z (vodna linija), čiščenje kotov, radialno in spiralno dokončevanje; prilagodljivi prehodi, zapisani kot loki | 3D grobo rezkanje v ravnih vrstah in obdelava ostankov: glejte [3D grobo rezkanje in obdelava ostankov](topic:rough-3d); dokončevanje z {{ui:Vzporedno}} in {{ui:Grebenasto}}: glejte [3D dokončevanje](topic:finish-3d); 2.5-osno planiranje, žep, 2D prilagodljivo, kontura, vrtanje in posnetje: glejte [Ustvarjanje poti orodja in G-kode](topic:manufacture) |
| Rezanje s stranico (swarf), poti s tokovnicami in večosno grobo rezkanje, kode nagnjene delovne ravnine (G68.2), preverjanje trkov držala in stroja; simulacija 5-osnih in rotacijskih rezov | Nagnjeno orodje za katero koli operacijo, 5-osno dokončevanje s kroglično rezkalo in 4-osno rotacijsko dokončevanje: glejte [4- in 5-osna obdelava](topic:multi-axis) |
| Vrtanje in notranji navoji na stroju za struženje, cikli G71/G76, loki v poteh struženja, živa orodja, podvreteno | Zunanje struženje: planiranje, grobo, dokončno, utor, odrez, navoj, vrtanje na središču: glejte [Struženje na stroju za struženje](topic:turning) |
| Tipanje kota ali vogala, naprava za nastavitev orodja, merjenje mere glede na toleranco | Tipanje ploskve, strani, luknje ali čepa za nastavitev ničelne točke obdelovanca: glejte [Tipanje](topic:probing) |
| Preverjanje trkov držala in stebla | Spremljajte opozorila o dolžini žlebov in preverite v simulatorju krmilnika |
| Cikli življenjske dobe orodja in podprogramov v postprocesorju; nalaganje postprocesorskih datotek drugih programov | Zapišite ali spremenite postprocesor v lastni obliki PartCraft: glejte [Postprocesorji, ki jih lahko urejate](topic:post-processors) |
| Palčna G-koda (G20) | Samo milimetri (G21) |

## Simulacija in generativno oblikovanje

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Nelinearne študije: plastično tečenje, velike upogibe, stik med deli, utrujenost | Linearna statika in lastne frekvence: glejte [Preverite napetost in upogib](topic:simulation); varnostni faktor naj bo precej nad 1 |
| Nelinearni uklon (nepopolnosti, uklon po uklonu, preskok) | Linearni faktorji obremenitve uklona z velikodušno rezervo: glejte [Toplota, toplotna napetost in uklon](topic:thermal-and-buckling) |
| Sevanje med ploskvami (faktorji pogleda), kontaktna upornost, materiali, odvisni od temperature, vztrajnost v toplotni napetosti (toplotni udarni valovi) | Sevanje v okolico, stacionarna ali kvazistatična toplotna napetost skozi čas, konstantne lastnosti: glejte [Toplota, toplotna napetost in uklon](topic:thermal-and-buckling) |
| Samodejno zgoščevanje za prehodno toploto in študije s toplotno obremenitvijo; mreža, redkejša tam, kjer je napaka majhna; cilj na lokalni količini (največja napetost na eni točki) | **Samodejno zgosti** za statične, uklonske, lastnofrekvenčne in stacionarne toplotne študije, glede na napako na celotnem delu: glejte [Preverite napetost in upogib](topic:simulation); sicer zmanjšajte velikost elementa |
| Obremenitve ležajev in vijakov, oddaljene sile, momenti, vzmeti, predpisani pomiki | Sile in tlaki na ploskvah, gravitacija; vpete ploskve in ploskve brez trenja |
| Simulacija sestavov; materiali, ki se razlikujejo po smeri (natisnjene plasti, kompoziti) | En del, en izotropni material |
| Več niti reševalnika za tetraedrske študije, prenos toplote in generativno oblikovanje; niti na strani, ki ni izolirana za izvor (cross-origin) | Študije vokselov, uklon, napetost skozi čas in laminarni tok uporabljajo niti, kjer to stran dovoljuje: glejte [Nastavitve PartCraft](topic:settings) |
| Turbulentni tok z natančnostjo za načrtovanje (model Spalart–Allmaras je vključen kot eksperimentalen: trenje v cevi za 30 do 34 % večje, ponovna pritrditev za stopnico za 21 do 39 % krajša; načrtovano: fini celice ob stenah), toplota v toku, nestacionarni (časovno natančni) tok, proste površine, neniutnovske tekočine, vrteči se deli | Laminarni, stacionarni, izotermni tok Newtonske tekočine ali eksperimentalni turbulentni model za kakovostne vzorce: glejte [Simulacija pretoka tekočin](topic:flow-simulation); plošča opozori, ko je Reynoldsovo število nad laminarnim |
| Meje napetosti in proizvodna pravila (previsi, smeri rezkanja) v generativnem oblikovanju; več materialov v eni obliki | Najtrša oblika za prostornino; rezultat preverite v Simulaciji: glejte [Zrasti obliko iz obremenitev](topic:generative-design) |
| Rezultat kot urejljivo (gladko, parametrično) telo | STL, fasetni STEP ali del z rezultatom kot uvoženim fasetnim telesom |
| Zasnova električnih strojev: rotor, ki se vrti v statorju, navor glede na kot, nasičeno jeklo, magneti, ki izgubijo moč po kolenu, vrtinčni tokovi ter izgube v železu in bakru; magnetna polja v 3-D ali na ukrivljenih mrežah | Linearna 2-D magnetostatika na mreži v knjižnici analiz: tuljave, železo, trajni magneti na svoji povratni črti, reže, induktivnost in privlak: glejte [Magnetna polja v 2-D](topic:magnetic-fields-2d) |

## Skripti

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Pomoč ob zadržanju kazalca, prekinitvene točke in korakanje v urejevalniku skript | Iskanje, zlaganje in dopolnjevanje so na voljo (glejte [Pišite in zaženite skripte](topic:craftscript)); za ostalo uporabite svoj urejevalnik: {{ui:Shrani}} in {{ui:Odpri}} v skupini Skript preneseta skripte noter in ven; vgrajene funkcije so navedene v [Jezik CraftScript](topic:craftscript-language) |
| Prekinitvene točke in korakanje skozi skript | `disp` in `fprintf` med potekom; {{key:Mod+Enter}} zažene nekaj izbranih vrstic naenkrat |
| Polja in grafi, ki jih skript prikaže v delovnem okolju Oblikovanje; skripti, ki spreminjajo parametre dela | Prikažejo se v delovnem okolju Skript; skripti berejo parametre z `param` (glejte [Pišite in zaženite skripte](topic:craftscript)), spreminjajo pa jih na zavihku {{ui:Parametri}} |
| Slike in tabele ob grafih; urejanje grafa (povečava, meje osi) pred shranjevanjem | Drug ob drugem prikaže grafe; shranite graf kot PNG, SVG ali CSV in ga dokončajte drugje |
| numpy in drugi paketi Python; Python brez povezave; zlaganje Pythona v urejevalniku; Pascal Script | Standardna knjižnica Pythona, CraftScript in Lua: glejte [Skripti v Pythonu](topic:craftscript-python) |
| Posredovanje funkcij Lua vgrajenim funkcijam; klic funkcije knjižnice iz Lua po imenu, sestavljenem med izvajanjem skripta | Zapišite ime funkcije knjižnice v skript (`cs.static_tet(…)`) ali jo pokličite iz skripta CraftScript |

## Aplikacija

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Shranjevanje v oblak, deljenje in zgodovina različic | Še ni na voljo. Shranjujte datoteke v računalnik in hranite različice po imenu |
| PartCraft kot nameščena aplikacija na iPadu in iPhonu | Uporabljajte PartCraft v brskalniku naprave; na Androidu in na namizju deluje tudi v CadCraft Studiu (getcadcraft.com/download) |
| Kontekstni (desni klik) meniji | Orodna vrstica in desna plošča |
| Popolnoma delo brez povezave od začetka | Samo, ko je bila aplikacija shranjena za uporabo brez povezave: glejte [Delo brez povezave](common:offline) |

Najbolj pogrešano sporočite prek strani za podporo na spletnem mestu: ta oblikuje, kaj pride naslednje.

## Inženirstvo (generatorji in polja)

| Še ni izdelano | Namesto tega, danes |
|---|---|
| Glave, priključki in fitingi na ustvarjenem toplotnem izmenjevalniku; krivulje temperature za trdnost materiala; izgube T-kosov v razdelilniku | Generatorji zgradijo jedro in cevi; fitinge dodajte v Oblikovanju; uporabite vrednosti materiala pri sobni temperaturi z varnostnim faktorjem |
| Dodajanje generatorjev iz imenika dodatkov z enim klikom | {{ui:Odpri}} v delovnem okolju Inženirstvo doda generator iz datoteke |
| Datoteka polja, finejša od lastne velikosti voksla generatorja; branje datotek `.vdb` | Shranite finejše polje iz skripta; `.vdb` se zapisuje, ne bere |
| Izračuni po standardu za tlačne posode | Učbeniške formule za tanke in debele stene z varnostnim faktorjem, ki ga izberete; ne rezerva po standardu |
| Generatorji za druge aplikacije | Samo PartCraft v tej različici |
