---
title: Prihod iz drugega parametričnega modelirnika
summary: Kako navade namiznih parametričnih modelirnikov za dele ustrezajo PartCraftu in razlike, ki v prvi uri presenetijo izkušene uporabnike.
keywords: preklop, selitev, poznano, upravitelj značilk, drevo oblikovanja, pametna kota, iztisnitev za dodajanje, iztisnitev reza, čarovnik za izvrtine, spoji, zaznavanje kolizij, vrstica povrnitve, upravitelj lastnosti, miška, razlike
from: fbacaee1
---

Če dele oblikujete v SolidWorksu, bo večina zamisli PartCraft poznana: skice na ravninah Sprednja, Zgornja in Desna, relacije in pametne kote, zgodovina značilk z vrstico povrnitve ter sestavi, postavljeni s spoji. Pot do njih je na nekaterih mestih drugačna, ta prva različica pa zmore manj. Ta stran preslika vaše navade in navede presenečenja.

## Navade, preslikane

| Na to ste navajeni | V PartCraftu |
|---|---|
| Drevo oblikovanja levo | Zgodovina levo: ravnine, nato značilke, skice, zamaknjene pod značilko, ki jih uporablja |
| Ravnine Sprednja, Zgornja in Desna | Enake tri, skozi izhodišče. Sprednja je ravnina XY, Zgornja je XZ, Desna je YZ; Y kaže navzgor |
| Skica na ravnini ali ploskvi, nato potrditveni vogal za izhod | {{ui:Skica}} ({{key:S}}) na izbrani ravnini ali ravni ploskvi; {{ui:Izhod}} ali {{key:Esc}}, dokler se ne zapre |
| Pametna kota | {{ui:Kota}} ({{key:D}}). Kliknite en ali dva elementa, nato, kam gre število. Glede na mesto, kamor ga postavite, se izbere vodoravna, navpična ali poravnana kota |
| Dodaj relacije v podoknu lastnosti | Izberite elemente, nato gumbe za relacije v desnem podoknu (Sovpadanje, Vodoravno, Vzporedno, Tangenta, Enako in tako naprej) |
| Samodejne relacije med skiciranjem | Lovljenja dodajo relacije sovpadanja, točke na krivulji, vodoravnosti in navpičnosti |
| Modra / črna / rdeča barva skice | Enaka zamisel: modra pomeni premalo določeno, črna popolnoma določeno, rdeča preveč določeno. Čip prikazuje preostale prostostne stopnje |
| Središčna črta za zavrtitve | {{ui:Osna črta}} ({{key:N}}); {{ui:Zavrti}} uporabi prvo osno črto, razen če izberete drugo os |
| Zaobljenje skice | {{ui:Zaobli}} ({{key:F}}) v skici: kliknite vogal, vnesite polmer |
| Preklop konstrukcijske geometrije | {{ui:Pomožno}} ({{key:Q}}) |
| Iztisnjena izboklina | {{ui:Iztisni}}: Slepo, Srednja ravnina, Do ploskve / naslednje / oglišča, Odmik od ploskve, druga smer, zožitev, en obris (Izberi območja) |
| Iztisnjen izrez | {{ui:Izreži}}: začne kot Skozi vse; za žep preklopite na Slepo |
| Zavrtena izboklina / izrez | {{ui:Zavrti}} / {{ui:Več}} › {{ui:Zavrteni izrez}} |
| Referenčna ravnina / os / točka | {{ui:Več}} › {{ui:Ravnina}}, {{ui:Os}}, {{ui:Točka}} (glejte [Referenčne ravnine, osi in točke](topic:reference-geometry)) |
| Potegnjena ali prehodna izboklina ali izrez, nagib | {{ui:Več}} › {{ui:Nagib}} na ravnih ploskvah (glejte [Potegni, prehod in nagib](topic:sweep-loft-draft)). {{ui:Potegni po poti}} in {{ui:Prehod}} še nista izdelana v tej različici (potrebujeta natančno jedro) |
| Čarovnik za izvrtine | {{ui:Izvrtina}} na vsaki prosti točki skice: preprosta, pogreznjena, stožčasto pogreznjena (90° / 82°) ali z navojem ISO metrično M2–M24, skozi ali slepo |
| Linearni / krožni vzorec, zrcaljenje | {{ui:Linearno}}, {{ui:Krožno}}, {{ui:Zrcali}} (značilke ali celotno telo) |
| Zaobljenje in posnetje robov | {{ui:Zaobli}} / {{ui:Posnemi}}: kliknite rob, {{key:Shift}}+klik za več, nato gumb. En polmer; enaki, dvo-razdaljni ali razdalja-kot posnetki. V tej različici samo ravni robovi med dvema ravnima ploskvama, zaobljenja, ki se srečajo v vogalu, pa so zarezana pod kotom. Ukrivljene robove zaobljite ali posnemite v skici ({{ui:Zaobli}} v skici, {{key:F}}) |
| Lupina | {{ui:Lupina}}: kliknite ravne ploskve za odprtje, nato gumb. Ena debelina stene |
| Odpri datoteko STEP | {{ui:Odpri}}: prebere se kot trikotniki, telo, na katerem lahko gradite ([Odprite datoteko STEP](topic:import-step)) |
| Uredi značilko, nato V redu | Kliknite značilko; spremenite števila desno; obnovi se med tipkanjem. Ni V redu, ni Prekliči: uporabite {{key:Mod+Z}} |
| Uredi skico | Dvokliknite skico v zgodovini |
| Obnovi | Samodejno po vsaki spremembi. Ni tipke za obnovo |
| Zaduši / ukini dušenje | {{ui:Zaduši}} / {{ui:Ukini dušenje}} v desnem podoknu |
| Povlecite vrstico povrnitve | {{ui:Povrni nazaj do sem}} na značilki; kliknite „Vrstica povrnitve · naprej“, da se vrnete |
| Povlecite značilko v drevesu za preureditev | {{ui:Premakni više}} / {{ui:Premakni niže}} ali {{key:Alt+Up}} / {{key:Alt+Down}}; zavrnjeno z razlogom, če bi to prekinilo odvisnost |
| Uredi kote z dvoklikom na model | Izberite značilko: kote njene skice so našteti v desnem podoknu |
| Spoji: sovpadanje, koncentričnost, razdalja, kot | {{ui:Spoj}} ({{key:J}}): izberite ravno ploskev na vsakem delu; spoj ju postavi ploskev ob ploskvi. **Središče na** osi deluje kot koncentričnost; **Odmik** kot razdalja; **Kot** kot kot |
| Fiksna komponenta | Prvi del je pritrjen; {{ui:Naredi ga za pritrjeni del}} ga spremeni |
| Vstavi komponento | {{ui:Dodaj kopijo}} ali {{ui:Podvoji}} (še ena kopija) ali {{ui:Vstavi}} (iz datoteke dela) |
| Uredi del v sestavu | {{ui:Uredi del}}, nato {{ui:Nazaj}} |
| Zaznavanje medsebojnih vplivov | {{ui:Kolizija}} |
| Premikanje komponente, da vidite gibanje | Povlecite drsnik kota ali odmika vrtljivega ali drsnega spoja; {{ui:Preveri gibanje glede kolizij}} ga premakne skozi območje. Del brez spoja: **Ročni premik** (puščice za vlečenje ali vnesene vrednosti) |
| Meri / pregled | {{ui:Pogledi}}, nato {{ui:Meri}} ({{key:M}}): razdalje, kote, polmere, površine; {{ui:Masne lastnosti}} |
| Razstavljen pogled, kosovnica | V sestavu, kjer nič ni izbrano: **Razstavljeni pogledi** in **Kosovnica** v desnem podoknu |
| Masne lastnosti | Polje **Del**: prostornina, površina, velikost ploskovnega telesa (pri okroglih delih nekoliko nižje). Ni mase: materialov še ni |
| Shrani, Shrani kot STEP | {{ui:Shrani}} prenese `.partcraft.json`; {{ui:Izvoz}} ima STL, 3MF, natančni STEP (AP242 ali AP214), ploskovni STEP, DXF in risbo PDF |
| Naredi risbo iz dela | {{ui:Risba}}: samodejni list A3 s tremi pogledi, izometrijo, enim prerezom, enim detajlom, referenčnimi bazami, okvirji kontrole značilk in simboli obdelave površine. Kotirane so samo skupne mere |
| Srednji vlek za vrtenje | **Vlek z levo** vrti tukaj. Srednji ali desni vlek premakne pogled. Kolesce povečuje na kazalcu |
| Usmeritev pogleda, Pravokotno na | Meni {{ui:Pogledi}}; {{ui:Pravokotno na}} za izbrano ploskev, ravnino ali skico |
| Povečaj na obseg (F) | {{key:F}} ali {{ui:Prilagodi}} (v skici je {{key:F}} orodje Zaobljenje) |
| Kontekstni meniji z desnim klikom | Ni. Desni vlek premakne pogled; v skici desni klik konča verigo črt |

:::tip
Če so vaše roke vajene SolidWorksa, v {{ui:Nastavitve}} › {{ui:PartCraft}} › {{ui:Meniji, tipke in miška}} izberite slog menija {{ui:Drevo značilk}}: trak zavihkov Značilke, Skica, Ploskve, Vrednotenje, Risba, Sestav in Pogled. Srednji gumb kroži, {{key:Shift}} in srednji gumb premikata pogled, levi gumb pa samo izbira. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).
:::

## Razlike, ki begajo ljudi

**Celotna skica je profil.** Iztisni in Zavrti uporabita vsak zaprt obris v skici. Za značilko ne morete izbrati ene površine ali enega obrisa skice. Uporabite eno skico za vsako značilko.

**Katero skico značilka vzame.** Značilka uporabi skico, ki ste jo pravkar zaprli, ali tisto, izbrano v zgodovini. Če nič ni izbrano, vzame najnovejšo skico, ki je še ne uporablja nobena značilka. Če dobite napačno, izberite pravo skico in znova izberite značilko.

**Spremembe se uveljavijo med tipkanjem.** Ni pogovornega okna značilke z V redu in Prekliči. Vsako število se takoj obnovi, nazaj pa vodi {{key:Mod+Z}}. Seznam razveljavitev zajema urejanje skic, značilke in nastavitve enako.

**Preveč določeno ni nikoli dovoljeno, da bi ostalo nemoteno.** Ni vodenih (referenčnih) kot. Kota, ki jo že določajo druge relacije, je prijavljena kot preveč določena („je že določena. Izbrišite jo.“). Nasprotujoča kota pusti geometrijo nedotaknjeno in postane rdeča. Izbrišite eno ali razveljavite.

**Potegni po poti in prehodi še nista izdelana; zaobljenja, posnetja, lupine in nagibi imajo omejitve.** Ta različica PartCraft gradi vsak del z mrežnim jedrom; čip v vrstici stanja vedno pravi „Mesh kernel“. Zaobljenja in posnetja delujejo na ravnih robovih med dvema ravnima ploskvama, kjer se zaobljenja srečajo v vogalu, so zarezana pod kotom, ne zmešana. Lupine se odprejo, nagibi pa nagnejo samo ravne ploskve. Značilke, ki potrebujejo natančno jedro, ostanejo klikabilne, ob izbiri pa pravijo „še ni izdelano“. Glejte [Mrežno jedro](topic:solid-kernels) in [Kaj še ni izdelano](topic:not-built-yet).

**Dva gumba, imenovana Zaobli.** V skici {{ui:Zaobli}} ({{key:F}}) zaobli vogal skice. Na delu {{ui:Zaobli}} v skupini Značilke zaobli robove telesa (v tej različici ravne robove med ravnima ploskvama). V tej različici ni potega ali prehoda: glejte [Kaj še ni izdelano](topic:not-built-yet).

**Izvrtine potrebujejo proste točke.** {{ui:Izvrtina}} vrta na točkah, ustvarjenih z orodjem {{ui:Točka}}. Središča krožnic in konci črt se ne štejejo.

**Skozi vse je samo za reze.** Izboklina potrebuje globino. Pogoji konca „do oglišča / ploskve / naslednje“ še niso na voljo.

**Telo je razdeljeno na ploskve.** Mrežno jedro gradi okrogle ploskve iz ravnih ploskev, zato so pogled, prostornine ter izvozi STL in 3MF iz njih: **Krivulje** v podoknu dela jih naredijo finejše. Natančni izvoz STEP ni tak: zapiše okrogle ploskve na njihovih pravih površinah.

**Samo milimetri.** Nastavitve za palce še ni. Pri vnosu velikosti v palcih jih pomnožite z 25.4.

**Y kaže navzgor.** Sprednja ravnina je obrnjena proti vam in Zgornja gleda na del od zgoraj, kot pričakujete, toda navzgor kaže os Y. Izvozi STL, 3MF in natančni STEP so obrnjeni tako, da Z kaže navzgor; ploskovni STEP ohrani Y navzgor.

**Spoji so ploskve, ne pari geometrije.** Spoj vedno začne z dvema ravnima ploskvama, postavljenima ploskev ob ploskvi. Za zatič v izvrtini izberite ravno ploskev okoli izvrtine in ramenski del zatiča, nato nastavite **Središče na** na os izvrtine in os zavrtitve zatiča. Deli, do katerih spoji ne segajo, ostanejo tam, kamor so bili vstavljeni; ne morete jih povleči. Spoji v zanki niso rešeni.

**Shranjevanje je prenos.** Ni datoteke, ki bi jo nenehno prepisovali. Vsako shranjevanje je nova datoteka v mapi prenosov. Najprej poimenujte del in svoje datoteke hranite v mapi projekta.

**Ni kontekstnih menijev, ni zavihkov upravitelja ukazov.** Vse je v orodni vrstici in desnem podoknu, orodna vrstica pa se spreminja glede na to, kaj počnete: orodja za skico se pojavijo samo v skici, orodja za sestav samo v sestavu.

**Tipke so posamezne črke v skici.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} in {{key:S}} izberejo orodja brez tipke za spremembo. Glejte [Tipke in miška](topic:keyboard).
