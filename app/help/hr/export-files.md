---
title: Izvoz za ispis, STEP i DXF
summary: Izvezite dio kao STL ili 3MF za 3D ispis, kao točno STEP tijelo za druge CAD i CAM programe te skicu ili ravnu plohu kao DXF za lasersko i vodenomlazno rezanje.
keywords: izvoz, spremi kao, ifc, bim, skupovi svojstava, stl, 3mf, 3d ispis, slicer, step, stp, točni step, b-rep, ap242, ap214, cam, strojna radionica, glodanje, dxf, laser, vodeni mlaz, cnc, ravni uzorak, profil, mreža, facetirano
from: e1de71d5
---

Izvozi su kopije u drugim formatima. Zadržite i datoteku `.partcraft.json`: to je jedina datoteka koju PartCraft može ponovno otvoriti i uređivati.

Svi izvozi rade na dijelu na zaslonu, u milimetrima. U sklopu STL, 3MF, STEP i Crtež (PDF) izvoze cijeli sklop: vidi [Popis dijelova, rastavljeni pogledi i pomični dijelovi](topic:assembly-bom-explode). Ako tijelo još ne postoji: „Još nema tijela za izvoz.“

## Za 3D ispis: STL ili 3MF

1. Neobavezno: za glatke okrugle plohe kliknite prazan prostor da ništa nije odabrano i u desnom oknu postavite **Krivulje** na **Fino (128 po krugu)** ili **Vrlo fino (256 po krugu)**. STL i 3MF se uvijek sastoje od trokuta.
2. Odaberite {{ui:Izvoz}}, zatim {{ui:STL, za 3D ispis}} ili {{ui:3MF, za 3D ispis}}.
3. Datoteka se preuzima. Statusna traka npr. kaže: „Izvezeno: Part1.stl (binarno, mm, Z gore, 1536 trokuta).“

Oba formata su **Z gore**, kako pisači i slicer očekuju. PartCraftov svijet je Y gore, pa izvoz okreće dio: što u PartCraftu pokazuje prema gore (okomito na ravninu Top) pokazuje prema gore i u slicer-u, a dio skiciran na ravnini Top leži ravno na podlozi. Po potrebi postavite konačnu orijentaciju u svom slicer-u.

3MF je noviji i manji format koji slicer čita s uključenim jedinicama. Upotrijebite STL ako program ne prihvaća 3MF.

Da prije ispisa provjerite je li dio zatvoren, staje li na podlogu pisača i stoji li na ravnoj plohi, upotrijebite {{ui:Izvoz}} › {{ui:Provjera za 3D ispis (STL ili 3MF)…}}: vidi [Pripremite dio za 3D ispis](topic:print-3d).

## Za druge CAD programe: STEP

Odaberite {{ui:Izvoz}}, zatim {{ui:STEP AP242 (egzaktno tijelo)}}. Dio se zapisuje kao jedno egzaktno tijelo, u milimetrima, okrenuto na Z gore. Okrugle plohe zapisuju se kao pravi cilindri, stošci, kugle i torusi, s pravim kružnicama za bridove, pa drugi program može odabrati rupu kao rupu. Tijelo otvoreno iz STEP datoteke zadržava ravne plohe, cilindre, stošce, kugle i toruse te datoteke, pa i one izlaze egzaktno. Plohe bez takve površine (bok splajna, modelirani navoj, tijelo iz STL, OBJ ili 3MF mreže, splajn iz STEP datoteke, provučene i rotirane plohe) ostaju ravne facete u istom tijelu, a statusna traka kaže koliko ih je. Statusna traka npr. kaže: „Izvezeno: Flange.step (AP242, egzaktno tijelo, mm, Z gore): 14 ploha na pravim površinama (10 cilindričnih, 1 konična, 0 sfernih, 0 torusnih), 0 prilagođenih rubnih krivulja.“ Sadrži samo tijelo: bez povijesti, bez skica, bez crteža. Ako drugi program čita samo AP214, odaberite {{ui:STEP AP214 (egzaktno tijelo)}}: isto tijelo u starijoj shemi.

Što je egzaktno, a što nije:

- Ravne plohe, cilindri (rupe, izbočine, zaobljenja na ravnim bridovima), stošci (upuštanja, nagibi), kugle i torusi su egzaktni, kao i njihovi ravni, kružni i eliptični bridovi. Postavka **Krivulje** ih ne mijenja.
- Gdje se dvije okrugle plohe sijeku (rupa probušena kroz osovinu), brid je glatka krivulja prilagođena obje plohe unutar 0.00001 mm; „prilagođene rubne krivulje“ ih broje.
- Zatvorena šupljina unutar dijela zapisuje se kao praznina tijela. Više odvojenih tijela zapisuje se kao više tijela.
- Sklop se još ne zapisuje kao egzaktni STEP: izvezite svaki dio.

Provjereno je čitanjem datoteka u OpenCascadeu, koji prijavljuje ispravna tijela s volumenima izračunatima ručno. Još nije otvoreno u svakom CAD ili CAM programu. Ako jedan odbije datoteku, {{ui:STEP (stranični, mrežna jezgra)}} zapisuje isti oblik kao ravne plohe (u PartCraftovim osima, Y gore). Javite nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.

Za obradu, radni prostor Manufacture također zapisuje egzaktno tijelo u radnim koordinatama postavke: vidi [Izrada putanja alata i G-kod](topic:manufacture#exact-step-for-the-shop).

## Za BIM programe: IFC sa svim svojstvima

Odaberite {{ui:Izvoz}}, zatim {{ui:IFC 4 (sa svakim svojstvom)}}. Dio se zapisuje kao IFC 4 element za zgrade i postrojenja, a njegov oblik kao trokuti (Z gore, milimetri), s onim što PartCraft o njemu zna, kao skupovima svojstava:

| Skup svojstava | Sadrži |
|---|---|
| **PartCraft_Part** | Naziv, materijal i njegova gustoća, aktivna konfiguracija, broj tijela; u sklopu i broj dijela i opis |
| **PartCraft_Parameters** | Svaki parametar dijela s vrijednošću; izraz formule i bilješka nalaze se u opisu svojstva |
| **PartCraft_TitleBlock** | Polja zaglavlja crteža koja ste ispunili (naslov, broj crteža, revizija, tvrtka, nacrtao, provjerio i odobrio, datum, obrada, opća tolerancija) i veličina lista |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, površina, masa (s materijalom) i ukupne dimenzije |

Materijal se pridružuje kao IFC materijal, a broj crteža je oznaka elementa. U sklopu se svaki dio zapisuje jednom kao tip koji sadrži njegova svojstva, a svaka kopija postavlja se tamo gdje je sklop postavlja, sa svojim vrijednostima u **PartCraft_Instance**: njezin naziv, broj stavke u sastavnici i je li to fiksirani dio.

## Za lasersko, vodenomlazno ili CNC profile: DXF

Dvije vrste DXF-a, obje verzije R12, koje otvara svaki CAD i CAM program:

### Skica

1. Odaberite skicu u povijesti (ili je neka bude otvorena).
2. Odaberite {{ui:Izvoz}}, zatim {{ui:DXF skice ili ravne plohe}}. (Desno okno skice također ima {{ui:Izvezi kao DXF}}.)

Dobijete `<part> - <sketch>.dxf` u vlastitim koordinatama skice: linije, prave lukove i kružnice na sloju **PROFILE**, konstrukcijsku geometriju na **CONSTRUCTION**, samostalne točke na **POINTS**.

### Ravna ploha tijela

1. Kliknite ravnu plohu u prikazu (npr. vrh ploče s rupama).
2. U desnom oknu odaberite {{ui:Izvezi plohu kao DXF}}, ili {{ui:Izvoz}}, zatim {{ui:DXF skice ili ravne plohe}}.

Dobijete `<part> - face.dxf`: obris plohe i svaku rupu u njoj. Okrugla rupa (cijela kružnica gdje cilindar susreće plohu: probušena rupa ili rupa iz otvorene STEP datoteke) zapisuje se kao prava kružnica sa središtem i polumjerom same rupe. Svaki drugi obris je zatvorena polilinija, a njezini okrugli bridovi (kutovi zaobljenja, utori, lukovi) su facete, pa prije izvoza postavite **Krivulje** na Fino ako ih alat točno slijedi. Statusna traka kaže koliko ima obrisa, koliko ih je pravih kružnica i površinu plohe.

Ako nije odabrana ni skica ni ravna ploha: „Otvorite ili odaberite skicu ili odaberite ravnu plohu za izvoz DXF-a.“

## Crtež

Crtež u PDF-u ima vlastiti vodič: [Izrada lista crteža](topic:drawing-pdf).

## Nedostupni formati

glTF, OBJ, IGES i Parasolid se u ovoj verziji ne izvoze. DWG zapisuje samo paket varijanti, kao list crteža: vidi [Napravite paket varijanti iz svojih konfiguracija](topic:variant-pack). Vidi [Formati datoteka](topic:file-formats).
