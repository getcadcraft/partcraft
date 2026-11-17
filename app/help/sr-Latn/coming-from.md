---
title: Dolaziš iz drugog parametarskog modelera
summary: Kako navike desktop parametarskih modelera za delove odgovaraju PartCraft-u, i razlike zbog kojih se iskusni korisnici spotaknu u prvom satu.
keywords: prebacivanje, migracija, poznato, stablo elemenata, stablo dizajna, pametna kota, izvlačenje, sečenje izvlačenjem, čarobnjak za rupe, spojevi, otkrivanje smetnji, traka za vraćanje, upravljač svojstvima, miš, razlike
from: fbacaee1
---

Ako delove projektuješ u SolidWorks-u, većina ideja PartCraft-a biće ti poznata: skice na ravnima Front, Top i Right, relacije i pametne kote, istorija elemenata sa trakom za vraćanje, i sklopovi postavljeni spojevima. Način da do njih dođeš se na mestima razlikuje, a ova prva verzija radi manje. Ova stranica preslikava tvoje navike i navodi iznenađenja.

## Navike, preslikane

| Navikao si se na | U PartCraft-u |
|---|---|
| Stablo dizajna levo | Istorija levo: ravni, pa elementi, skice uvučene ispod elementa koji ih koristi |
| Ravni Front, Top i Right | Iste tri, kroz početnu tačku. Front je ravan XY, Top je XZ, Right je YZ; Y pokazuje naviše |
| Skica na ravni ili površi, pa ugao za potvrdu za izlaz | {{ui:Skica}} ({{key:S}}) na izabranoj ravni ili ravnoj površi; {{ui:Izađi}} ili {{key:Esc}} dok se ne zatvori |
| Pametna kota | {{ui:Kota}} ({{key:D}}). Klikni jednu ili dve stavke, pa gde ide broj. Mesto gde ga postaviš bira vodoravnu, uspravnu ili poravnatu |
| Dodaj relacije u panelu svojstava | Izaberi stavke, pa dugmad relacija na desnom panelu (Poklapanje, Vodoravno, Paralelno, Tangenta, Jednako i tako dalje) |
| Automatske relacije pri skiciranju | Hvatanja dodaju poklapanje, tačku na krivoj, vodoravne i uspravne relacije |
| Plava / crna / crvena boja skice | Ista ideja: plavo kad nije potpuno definisano, crno kad je potpuno definisano, crveno kad je preodređeno. Oznaka pokazuje preostale stepene slobode |
| Osna linija za rotiranja | {{ui:Osna linija}} ({{key:N}}); {{ui:Rotiranje}} koristi prvu osnu liniju osim ako ne izabereš drugu osu |
| Zaobljenje skice | {{ui:Zaobljenje}} ({{key:F}}) u skici: klikni ugao, upiši poluprečnik |
| Prekidač konstrukcione geometrije | {{ui:Konstrukcija}} ({{key:Q}}) |
| Izvučeni izbočen deo | {{ui:Izvlačenje}}: Slepo, Srednja ravan, Do površi / sledeće / temena, Ofset od površi, drugi smer, nagib, jedan kontur (Izaberi oblasti) |
| Izvučeno sečenje | {{ui:Sečenje}}: počinje kao Kroz sve; prebaci na Slepo za džep |
| Rotirani izbočen deo / sečenje | {{ui:Rotiranje}} / {{ui:Više}} › {{ui:Rotirani usek}} |
| Referentna ravan / osa / tačka | {{ui:Više}} › {{ui:Ravan}}, {{ui:Osa}}, {{ui:Tačka}} (vidi [Referentne ravni, ose i tačke](topic:reference-geometry)) |
| Provučen / preliven izbočen deo ili sečenje, nagib | {{ui:Više}} › {{ui:Nagib}} na ravnim površima (vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft)). {{ui:Provlačenje}} i {{ui:Prelaz}} još nisu napravljeni u ovoj verziji (potreban im je tačan kernel) |
| Čarobnjak za rupe | {{ui:Rupa}} na svakoj slobodnoj tački skice: prosta, upuštena, upuštena pod uglom (90° / 82°) ili navojena ISO metrička M2–M24, kroz ili slepo |
| Linearni / kružni obrazac, simetrija | {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Simetrija}} (elementi ili celo telo) |
| Zaobljenje i obaranje ivica | {{ui:Zaobljenje}} / {{ui:Obaranje ivice}}: klikni ivicu, {{key:Shift}}+klik za još, pa dugme. Jedan poluprečnik; jednaki, dvorazdaljinski ili razdaljina-ugao obaranja. U ovoj verziji samo prave ivice između dve ravne površi, a zaobljenja koja se sreću u uglu su pokošena. Zaobli ili skosi zakrivljene ivice u skici ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| Ljuska | {{ui:Ljuska}}: klikni ravne površi za otvaranje, pa dugme. Jedna debljina zida |
| Otvori STEP fajl | {{ui:Otvori}}: čita se kao trouglovi, čvrsto telo na kojem se gradi ([Otvori STEP fajl](topic:import-step)) |
| Uredi element, pa U redu | Klikni element; promeni brojeve desno; gradi se ponovo dok kucaš. Nema U redu, nema Otkaži: koristi {{key:Mod+Z}} |
| Uredi skicu | Dvostruki klik na skicu u istoriji |
| Ponovo izgradi | Automatski posle svake promene. Nema tastera za ponovno građenje |
| Potisni / vrati | {{ui:Isključi}} / {{ui:Vrati element}} na desnom panelu |
| Prevuci traku za vraćanje | {{ui:Vrati istoriju do ovde}} na elementu; klikni „Traka za vraćanje · napred“ da se vratiš |
| Prevuci element u stablu da promeniš redosled | {{ui:Pomeri gore}} / {{ui:Pomeri dole}} ili {{key:Alt+Up}} / {{key:Alt+Down}}; odbijeno uz razlog kad bi slomio zavisnost |
| Uredi kote dvostrukim klikom na model | Izaberi element: kote njegove skice navedene su u desnom panelu |
| Spojevi: poklapanje, koncentrično, razdaljina, ugao | {{ui:Spoj}} ({{key:J}}): izaberi ravnu površ na svakom delu; spoj ih stavlja površ na površ. **Centriraj na** osu deluje kao koncentrično; **Pomak** kao razdaljina; **Ugao** kao ugao |
| Fiksna komponenta | Prvi deo je učvršćen; {{ui:Postavi ga kao učvršćen deo}} to menja |
| Ubaci komponentu | {{ui:Dodaj kopiju}} ili {{ui:Dupliraj}} (još jedna kopija) ili {{ui:Umetni}} (iz fajla dela) |
| Uredi deo u sklopu | {{ui:Uredi deo}}, pa {{ui:Nazad}} |
| Otkrivanje smetnji | {{ui:Sudar}} |
| Pomeranje komponente da se vidi kretanje | Prevuci klizač ugla ili pomaka obrtnog ili kliznog spoja; {{ui:Proveri kretanje na sudare}} ga prolazi. Deo bez spoja: **Pomeri rukom** (strelice za prevlačenje, ili unete vrednosti) |
| Mera / pregled | {{ui:Pogledi}}, pa {{ui:Mere}} ({{key:M}}): razdaljine, uglovi, poluprečnici, površine; {{ui:Svojstva mase}} |
| Eksplodirani prikaz, specifikacija materijala | U sklopu bez ičega izabranog: **Razbijeni prikazi** i **Specifikacija materijala** na desnom panelu |
| Svojstva mase | Polje **Deo**: zapremina, površina, veličina fasetiranog tela (pomalo manje kod okruglih delova). Nema mase: materijali još ne postoje |
| Čuvanje, Sačuvaj kao STEP | {{ui:Sačuvaj}} preuzima `.partcraft.json`; {{ui:Izvezi}} ima STL, 3MF, tačan STEP (AP242 ili AP214), fasetirani STEP, DXF i PDF crtež |
| Crtež iz dela | {{ui:Crtež}}: automatski A3 list sa tri pogleda, izometrijski, jedan presek, jedan detalj, referentne tačke, okviri kontrole oblika i simboli obrade. Kote su samo ukupne veličine |
| Rotiranje srednjim tasterom | **Levi taster** rotira ovde. Srednji ili desni taster pomera. Točkić zumira na mestu pokazivača |
| Orijentacija pogleda, Normalno na | Meni {{ui:Pogledi}}; {{ui:Normalno na}} za izabranu površ, ravan ili skicu |
| Zum da stane (F) | {{key:F}}, ili {{ui:Uklopi}} (u skici, {{key:F}} je alat Zaobljenje) |
| Desni klik meniji | Nema. Desni taster pomera; u skici, desni klik završava lanac linija |

:::tip
Ako ti ruke već znaju SolidWorks, izaberi stil menija {{ui:Stablo elemenata}} u {{ui:Podešavanja}} › {{ui:PartCraft}} › {{ui:Meniji, tasteri i miš}}: traka sa karticama Elementi, Skica, Površi, Procena, Crtež, Sklop i Pogled, srednje dugme okreće, {{key:Shift}} i srednje dugme pomeraju, a levo dugme samo bira. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
:::

## Razlike koje muče ljude

**Cela skica je profil.** Izvlačenje i rotiranje koriste svaku zatvorenu petlju u skici. Ne možeš izabrati jednu oblast ili jedan kontur skice za element. Koristi jednu skicu po elementu.

**Koju skicu element uzima.** Element koristi skicu koju si upravo zatvorio ili onu izabranu u istoriji. Bez izbora uzima najnoviju skicu koju nijedan element još ne koristi. Ako dobiješ pogrešnu, izaberi pravu skicu i ponovo izaberi element.

**Promene se primenjuju dok kucaš.** Nema dijaloga elementa sa U redu i Otkaži. Svaki broj odmah gradi ponovo, a {{key:Mod+Z}} je put nazad. Lista poništavanja obuhvata izmene skica, elemenata i podešavanja.

**Preodređeno nikad ne sme mirno da stoji.** Nema upravljanih (referentnih) kota. Kota koju već određuju ostale relacije prijavljuje se kao preodređena („već je podrazumevana. Obriši je.“). Suprotstavljena kota ostavlja geometriju netaknutom i postaje crvena. Obriši jednu, ili poništi.

**Sweep i loft još nisu napravljeni; zaobljenja, obaranja, ljuske i nagibi imaju ograničenja.** Ova verzija PartCraft-a gradi svaki deo mrežnim kernelom; oznaka u statusnoj traci uvek kaže „Mesh kernel“. Zaobljenja i obaranja rade na pravim ivicama između dve ravne površi, a tamo gde se zaobljenja sreću u uglu, pokošena su, ne stopljena. Ljuske se otvaraju, a nagibi naginju samo ravne površi. Elementi koji trebaju tačan kernel ostaju klikabilni, ali kažu „još nije napravljeno“ kad se izaberu. Vidi [Mrežni kernel](topic:solid-kernels) i [Šta još nije napravljeno](topic:not-built-yet).

**Dva dugmeta zvana Zaobljenje.** U skici, {{ui:Zaobljenje}} ({{key:F}}) zaobljuje ugao skice. Na delu, {{ui:Zaobljenje}} u grupi Elementi zaobljuje ivice tela (prave ivice između ravnih površi u ovoj verziji). Nema provlačenja ni prelaza u ovoj verziji: vidi [Šta još nije napravljeno](topic:not-built-yet).

**Rupe trebaju slobodne tačke.** {{ui:Rupa}} buši na tačkama napravljenim alatom Tačka. Centri krugova i krajevi linija se ne računaju.

**Kroz sve je samo za sečenja.** Izbočen deo treba dubinu. Uslova kraja „do temena / površi / sledeće“ još nema.

**Telo je fasetirano.** Mrežni kernel pravi zaobljene površi od ravnih faseta, pa su prikaz, zapremine, STL i 3MF izvozi od njih: **Krive** u panelu dela ih čini finijim. Tačan STEP izvoz nije takav: piše zaobljene površi na njihovim pravim površima.

**Samo milimetri.** Još nema podešavanja za inče. Pomnoži veličine u inčima sa 25.4 kad ih kucaš.

**Y je naviše.** Ravan Front gleda ka tebi, a Top gleda dole na deo, kako očekuješ, ali osa „gore“ sveta je Y. STL, 3MF i tačni STEP izvozi okreću se na Z naviše; fasetirani STEP zadržava Y naviše.

**Spojevi su površi, ne parovi geometrije.** Spoj uvek kreće od dve ravne površi stavljene površ na površ. Za klin u rupi, izaberi ravnu površ oko rupe i rame klina, pa postavi **Centriraj na** na osu rupe i osu rotiranja klina. Delovi koje spojevi ne dostižu ostaju gde su ubačeni; ne možeš ih prevlačiti. Spojevi u petlji se ne rešavaju.

**Čuvanje je preuzimanje.** Nema fajla koji stalno prepisuješ. Svako čuvanje je novi fajl u tvojoj fascikli za preuzimanja. Prvo imenuj deo i čuvaj fajlove u fascikli projekta.

**Bez kontekstnih menija, bez kartica upravljača komandama.** Sve je na traci sa alatima i desnom panelu, a traka se menja prema onome što radiš: alati za skicu se pojavljuju samo u skici, a alati sklopa samo u sklopu.

**Tasteri su pojedinačna slova unutar skice.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} i {{key:S}} biraju alate bez modifikatora. Vidi [Tasteri i miš](topic:keyboard).
