---
title: Dolazak iz drugog parametarskog modelera
summary: Kako navike desktop parametarskih modelera za dijelove odgovaraju PartCraft-u, i razlike koje zbune iskusne korisnike u prvom satu.
keywords: prelazak, migracija, poznato, upravljač značajkama, stablo dizajna, pametna kota, izvlačenje izbočine, izvlačenje izreza, čarobnjak za rupe, spojevi, otkrivanje smetnji, traka za vraćanje, upravljač svojstvima, miš, razlike
from: fbacaee1
---

Ako dizajnirate dijelove u SolidWorks-u, većina PartCraft ideja će vam biti poznata: skice na prednjoj, gornjoj i desnoj ravnini, relacije i pametne kote, historija značajki sa trakom za vraćanje, i sklopovi postavljeni spojevima. Način kako do njih dolazite razlikuje se na nekim mjestima, a ova prva verzija radi manje. Ova stranica preslikava vaše navike i navodi iznenađenja.

## Navike, preslikane

| Navikli ste se na | U PartCraft-u |
|---|---|
| Stablo dizajna lijevo | Historija lijevo: ravnine, zatim značajke, skice uvučene ispod značajke koja ih koristi |
| Prednju, gornju i desnu ravninu | Iste tri, kroz ishodište. Prednja je XY ravnina, Gornja je XZ, Desna je YZ; Y pokazuje gore |
| Skica na ravnini ili površini, zatim ugaoni potvrdni znak za izlazak | {{ui:Sketch}} ({{key:S}}) na izabranoj ravnini ili ravnoj površini; {{ui:Izađi}} ili {{key:Esc}} dok se ne zatvori |
| Pametna kota | {{ui:Dimension}} ({{key:D}}). Kliknite jednu ili dvije stavke, zatim gdje ide broj. Mjesto na kojem ga postavite bira vodoravnu, vertikalnu ili poravnatu |
| Dodaj relacije u panelu svojstava | Izaberite stavke, zatim dugmad relacija u desnom panelu (Poklapanje, Vodoravno, Paralelno, Tangenta, Jednako i tako dalje) |
| Automatske relacije pri skiciranju | Hvatanje dodaje poklapanje, tačku na krivoj, vodoravne i vertikalne relacije |
| Plave / crne / crvene boje skice | Ista ideja: plavo ako nije potpuno definisano, crno potpuno definisano, crveno previše definisano. Oznaka pokazuje preostale stepene slobode |
| Središnja linija za rotiranja | {{ui:Centerline}} ({{key:N}}); {{ui:Revolve}} koristi prvu osnu liniju, osim ako ne izaberete drugu osu |
| Zaobljenje u skici | {{ui:Fillet}} ({{key:F}}) u skici: kliknite ugao, upišite poluprečnik |
| Prekidač konstrukcione geometrije | {{ui:Construction}} ({{key:Q}}) |
| Izvučena izbočina | {{ui:Extrude}}: Slijepo, Srednja ravnina, Do površine / sljedeće / tjemena, Ofset od površine, drugi smjer, nagib, jedan kontur (Izaberi područja) |
| Izvučeni izrez | {{ui:Cut}}: počinje kao Kroz sve; prebacite na Slijepo za džep |
| Rotirana izbočina / izrez | {{ui:Revolve}} / {{ui:More}} › {{ui:Revolved cut}} |
| Referentna ravnina / osa / tačka | {{ui:More}} › {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}} (vidi [Referentne ravnine, ose i tačke](topic:reference-geometry)) |
| Provučena / prelazna izbočina ili izrez, nagib | {{ui:More}} › {{ui:Draft}} na ravnim površinama (vidi [Provlačenje, prelaz i nagib](topic:sweep-loft-draft)). {{ui:Sweep}} i {{ui:Loft}} još nisu izrađeni u ovoj verziji (zahtijevaju tačan kernel) |
| Čarobnjak za rupe | {{ui:Hole}} na svakoj slobodnoj tački skice: jednostavna, upuštena, upuštena stožasto (90° / 82°) ili navojna ISO metrička M2–M24, kroz ili slijepa |
| Linearni / kružni uzorak, ogledalo | {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}} (značajke ili cijelo tijelo) |
| Zaobljenje i skošenje na ivicama | {{ui:Fillet}} / {{ui:Chamfer}}: kliknite ivicu, Shift+klik za još, zatim dugme. Jedan poluprečnik; jednaki, dvo-udaljenosni ili udaljenost-ugao skošenja. U ovoj verziji samo prave ivice između dvije ravne površine, a zaobljenja koja se sastaju u uglu se ukošavaju. Zaokružite ili skosite zakrivljene ivice u skici ({{ui:Fillet}} u skici, {{key:F}}) |
| Ljuska | {{ui:Shell}}: kliknite ravne površine da se otvore, zatim dugme. Jedna debljina zida |
| Otvorite STEP datoteku | {{ui:Open}}: čita se kao trouglovi, čvrsto tijelo na kojem se gradi ([Otvorite STEP datoteku](topic:import-step)) |
| Uredi značajku, zatim U redu | Kliknite značajku; mijenjajte brojeve desno; ponovo se gradi dok kucate. Nema U redu, nema Otkaži: koristite {{key:Mod+Z}} |
| Uredi skicu | Dvaput kliknite skicu u historiji |
| Ponovno građenje | Automatski nakon svake promjene. Nema tastera za ponovno građenje |
| Isključi / uključi | {{ui:Suppress}} / {{ui:Unsuppress}} u desnom panelu |
| Povucite traku za vraćanje | {{ui:Roll back to here}} na značajki; kliknite "Traka za vraćanje · napredak" da se vratite |
| Povucite značajku u stablu da promijenite redoslijed | {{ui:Move up}} / {{ui:Move down}} ili {{key:Alt+Up}} / {{key:Alt+Down}}; odbijeno uz razlog kad bi prekinulo zavisnost |
| Uređivanje kota dvostrukim klikom na model | Izaberite značajku: kote njene skice navedene su u desnom panelu |
| Spojevi: poklapanje, koncentričnost, udaljenost, ugao | {{ui:Joint}} ({{key:J}}): izaberite ravnu površinu na svakom dijelu; spoj ih postavlja čelo uz čelo. **Centriraj na** osu djeluje kao koncentričnost; **Pomak** kao udaljenost; **Ugao** kao ugao |
| Fiksna komponenta | Prvi dio je učvršćen; {{ui:Make it the grounded part}} to mijenja |
| Umetni komponentu | {{ui:Add copy}} ili {{ui:Duplicate}} (još jedna kopija) ili {{ui:Insert}} (iz datoteke dijela) |
| Uredi dio u sklopu | {{ui:Edit part}}, zatim {{ui:Back}} |
| Otkrivanje smetnji | {{ui:Clash}} |
| Pomjeranje komponente da se vidi kretanje | Povucite klizač ugla ili pomaka rotacionog ili kliznog spoja; {{ui:Check the motion for clashes}} ga provlači. Dio bez spoja: **Pomjeri rukom** (strelice za povlačenje, ili upisane vrijednosti) |
| Mjerenje / pregled | {{ui:Views}}, zatim {{ui:Measure}} ({{key:M}}): udaljenosti, uglovi, poluprečnici, površine; {{ui:Mass properties}} |
| Rastavljeni prikaz, specifikacija materijala | U sklopu, kad ništa nije izabrano: **Rastavljeni prikazi** i **Specifikacija materijala** u desnom panelu |
| Svojstva mase | Polje **Dio**: zapremina, površina, veličina ravnog čvrstog tijela (malo niže kod okruglih dijelova). Nema mase: još nema materijala |
| Spasi, Spasi kao STEP | {{ui:Save}} preuzima `.partcraft.json`; {{ui:Export}} ima STL, 3MF, tačan STEP (AP242 ili AP214), STEP sa ravnim površinama, DXF i PDF crtež |
| Napravite crtež iz dijela | {{ui:Drawing}}: automatski A3 list sa tri pogleda, izometrijom, jednim presjekom, jednim detaljem, referentnim tačkama, okvirima kontrole oblika i simbolima završne obrade. Dimenzionišu se samo ukupne veličine |
| Rotiranje srednjim tasterom | **Povlačenje lijevim** rotira ovdje. Srednjim ili desnim pomjera. Točkić zumira na pokazivaču |
| Orijentacija pogleda, Normalno na | Meni {{ui:Views}}; {{ui:Normal to}} za izabranu površinu, ravninu ili skicu |
| Zumiraj da stane (F) | {{key:F}}, ili {{ui:Fit}} (u skici, {{key:F}} je alat Zaobljenje) |
| Meniji desnim klikom | Nema. Povlačenje desnim pomjera; u skici, desni klik završava lanac linija |

:::tip
Ako su vaše ruke naučile SolidWorks, izaberite stil menija {{ui:Feature tree}} u {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Menus, keys and mouse}}: traka sa karticama Značajke, Skica, Površine, Procjena, Crtež, Sklop i Prikaz. Srednje dugme orbitira, {{key:Shift}} i srednje dugme pomjeraju, a lijevo dugme samo bira. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
:::

## Razlike koje zbunjuju ljude

**Cijela skica je profil.** Izvlačenje i rotiranje koriste svaku zatvorenu petlju u skici. Ne možete izabrati jedno područje ili jedan kontur skice za značajku. Koristite jednu skicu po značajki.

**Koju skicu značajka uzima.** Značajka koristi skicu koju ste upravo zatvorili ili onu izabranu u historiji. Kad ništa nije izabrano, uzima najnoviju skicu koju nijedna značajka još ne koristi. Ako dobijete pogrešnu, izaberite pravu skicu i ponovo izaberite značajku.

**Promjene se primjenjuju dok kucate.** Nema dijaloga značajke sa U redu i Otkaži. Svaki broj se odmah ponovo gradi, a {{key:Mod+Z}} je put nazad. Lista poništavanja obuhvata izmjene skice, značajke i postavke.

**Previše definisano se nikad ne dopušta mirno.** Nema upravljanih (referentnih) kota. Kota koju već određuju ostale relacije prijavljuje se kao previše definisana ("je već podrazumijevana. Izbrišite je."). Sukobljena ostavlja geometriju netaknutom i postaje crvena. Izbrišite jednu, ili poništite.

**Izvlačenja i prelazi još nisu izrađeni; zaobljenja, skošenja, ljuske i nagibi imaju ograničenja.** Ova verzija PartCraft-a gradi svaki dio mrežnim kernelom; oznaka u statusnoj traci uvijek kaže "Mesh kernel". Zaobljenja i skošenja rade na pravim ivicama između dvije ravne površine, a gdje se zaobljenja sastaju u uglu, ona se ukošavaju, ne stapaju. Ljuske se otvaraju, a nagibi naginju samo ravne površine. Značajke koje zahtijevaju tačan kernel ostaju kliknute, ali kažu "još nije izrađeno" kad se izaberu. Vidi [Mrežni kernel](topic:solid-kernels) i [Šta još nije izrađeno](topic:not-built-yet).

**Dva dugmeta zvana Zaobljenje.** U skici, {{ui:Fillet}} ({{key:F}}) zaobljuje ugao skice. Na dijelu, {{ui:Fillet}} u grupi Značajke zaobljuje ivice čvrstog tijela (prave ivice između ravnih površina u ovoj verziji). Nema provlačenja ni prelaza u ovoj verziji: vidi [Šta još nije izrađeno](topic:not-built-yet).

**Rupama trebaju slobodne tačke.** {{ui:Hole}} buši na tačkama napravljenim alatom Tačka. Središta krugova i krajevi linija se ne računaju.

**Kroz sve je samo za izreze.** Izbočina treba dubinu. Nema završnih uslova "do tjemena / površine / sljedeće" još.

**Čvrsto tijelo je izlomljeno.** Mrežni kernel gradi okrugle površine od ravnih ploha, pa su prikaz, zapremine, STL i 3MF izvozi od njih: **Krivine** u panelu dijela ih čine finijim. Tačan STEP izvoz nije takav: piše okrugle površine na njihovim pravim površinama.

**Samo milimetri.** Još nema postavke za inče. Pomnožite veličine u inčima sa 25.4 kad ih upisujete.

**Y je gore.** Prednja ravnina gleda na vas, a Gornja gleda dolje na dio, kako očekujete, ali gornja osa svijeta je Y. STL, 3MF i tačni STEP izvozi su okrenuti na Z gore; izlomljeni STEP zadržava Y gore.

**Spojevi su površine, ne parovi geometrije.** Spoj uvijek počinje od dvije ravne površine postavljene čelo uz čelo. Za klin u rupi, izaberite ravnu površinu oko rupe i rame klina, pa postavite **Centriraj na** na osu rupe i osu rotacije klina. Dijelovi koje spojevi ne dosegnu ostaju gdje su umetnuti; ne možete ih povlačiti. Spojevi u petlji se ne rješavaju.

**Čuvanje je preuzimanje.** Nema datoteke koju stalno prepisujete. Svako čuvanje je nova datoteka u vašoj fascikli za preuzimanja. Prvo nazovite dio, i držite datoteke u fascikli projekta.

**Nema kontekstnih menija, nema kartica upravljača naredbama.** Sve je na alatnoj traci i desnom panelu, a alatna traka se mijenja sa onim što radite: alati skice se pojavljuju samo u skici, alati sklopa samo u sklopu.

**Tasteri su jednostruka slova unutar skice.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} i {{key:S}} biraju alate bez modifikatora. Vidi [Tasteri i miš](topic:keyboard).
