---
title: Biblioteka analiza
summary: Biblioteka čitljivih skripti za analizu u radnom prostoru za skripte: šta je u svakoj grupi, otvaranje funkcije samo za čitanje, njeno zaglavlje s metodom, referencama i provjerom, pravljenje sopstvene kopije i kako kopija preuzima od funkcije iz biblioteke.
keywords: biblioteka, craftlib, analiza, elektromagnet, statika, modalna, termička, optimizacija topologije, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, fluid, lattice Boltzmann, LBM, mreža, voksel, tetraedri, reference, provjera, verifikacija, kopija, zasjenjenje
from: bf993859
---

Biblioteka analiza je skup skripti, od kojih je svaka funkcija koju možeš čitati od vrha do dna: kako se sastavlja matrica krutosti, gdje idu rubni uslovi, koji rješavač se pokreće, kako se rezultati računaju. Ništa u njoj nije skriveno u crnu kutiju; ugrađeni su samo brzi unutrašnji dijelovi (matrice elemenata, rijetki rješavači, mreženje).

## Počni s primjerom

Grupa **Primjeri** sadrži pet kratkih skripti koje koriste biblioteku od početka do kraja. Klikni jednu, pritisni {{ui:Otvori (samo za čitanje)}}, zatim {{key:F5}}: svaka čisti prikaz, prikazuje rezultat na platnu i grafikon u pod-prikazima.

| Primjer | Šta prikazuje |
|---|---|
| Naprezanje konzole | Čelična greda 100 × 10 × 10 mm pod silom od 100 N na vrhu: von Mises naprezanje na deformisanoj gredi, i progib vrha u odnosu na teoriju grede pri četiri veličine elemenata (grafikon) |
| Optimizacija topologije grede MBB | Klasična optimizacija topologije 60 × 20: formiranje dizajna, pad popustljivosti, konačni raspored (94 iteracije, popustljivost 203.19) |
| Polje kondenzatora | Dvije ploče široke 4 mm, udaljene 1 mm: potencijal i polje, kapacitivnost s rubnim efektom u odnosu na idealnu vrijednost i Palmerovu formulu |
| Strujanje u kanalu | Lattice Boltzmann strujanje oko stuba u kanalu: polje brzina i historija konvergencije |
| Elektromagnet | C-oblično željezno jezgro sa zračnim zazorom i namotajem: gustina fluksa, polje u zazoru u odnosu na formulu magnetskog kola, induktivnost i sila privlačenja preko zazora. Prođeno u [Magnetska polja u 2-D](topic:magnetic-fields-2d) |
| Stalni magnet | Isto jezgro sa stalnim magnetom umjesto namotaja: radna tačka magneta, polje u zazoru u odnosu na magnetsko kolo, koliko fluksa curi, sila privlačenja. U [Magnetska polja u 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupe

| Grupa | Funkcije | Šta rade |
|---|---|---|
| Mreženje | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kutije i cilindri kao heksaedri, kocke ili tetraedri; kocke ili tetraedri bilo kojeg modela (dio, tijelo, učitan STL); zapremine i kvalitet elemenata; biranje čvorova na ravni ili površini |
| Statičko naprezanje | `static_voxel`, `static_tet` | Linearno statičko naprezanje na kockama ili na 10-čvornim tetraedrima: pomjeranja, naprezanja, von Mises, reakcije |
| Okviri | `frame3d` | 3D okviri od greda, stubova i dijagonala metodom direktne krutosti: otpuštanja krajeva, oslonci i opruge, opterećenja duž elemenata; pomjeranja, reakcije, sile na krajevima elemenata. {{ui:Izvezi kao CraftScript}} u DetailCraft i BimCraft zapisuje cijeli model za njega. Pomoćno sredstvo za analizu, a ne provjera propisa |
| Vibracije | `modal_tet` | Prirodne frekvencije i oblici modova |
| Toplota | `heat_steady`, `heat_transient`, `heat_system` | Stacionarna i prelazna provodljivost sa fiksnim temperaturama, dovođenjem toplote, generisanjem, fluksom i konvekcijom |
| Optimizacija topologije | `top88`, `top99`, `topopt3d` | Objavljeni 2-D kodovi od 88 i 99 linija, i ista metoda u 3-D na kockama |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potencijal, polje, kapacitivnost, naboj) i magnetostatika (vektorski potencijal, gustina fluksa, stalni magneti) |
| Strujanje fluida | `lbm2d`, `lbm3d` | Lattice Boltzmann strujanje: 2-D ispisano u skripti, 3-D na vlastitom jezgru za strujanje u PartCraft-u |

Zaglavlje svake funkcije daje njene tačne argumente. Jedinice su one iz PartCraft studija osim ako zaglavlje ne kaže drugačije: milimetri, njutni, megapaskali, tone po kubnom milimetru za gustinu, vati i kelvini za toplotu. Elektromagnetske funkcije i funkcije Lattice Boltzmann rade u bilo kojim usaglašenim jedinicama; njihova zaglavlja kažu koje.

## Kako se biblioteka provjerava

Zaglavlje svake funkcije završava **provjerom**: malim slučajem sa poznatim rješenjem. PartCraft-ovi testovi pokreću svaku od njih, a tamo gdje PartCraft ima vlastitu studiju za isti posao, odgovor skripte se poredi s tom studijom na istoj mreži:

- progib vrha konzole u odnosu na teoriju grede (unutar 0.2 % s kockama, 0.05 % s tetraedrima), i u odnosu na rješavače radnog prostora **Simulacija** na istoj mreži (isto do mnogo cifara);
- prva frekvencija konzole u odnosu na teoriju grede (0.24 % niža, kako se očekuje za kratku gredu) i u odnosu na modalni rješavač **Simulacije**;
- toplota: zagrijani ravni zid tačno, malo tijelo koje se hladi kako kaže formula sa skupljenim kapacitetom, temperatura ploče koja se gasi kako kaže teorija;
- optimizacija topologije: `top88` reprodukuje 94 iteracije i popustljivost 203.1925 iz rada (i 218.8032 s filterom gustine); `topopt3d` završava na istoj popustljivosti kao radni prostor **Generativno** s istim postavkama;
- kapacitivnost kondenzatora i polje dugog solenoida u odnosu na udžbeničke vrijednosti, polje u zazoru elektromagneta u odnosu na formulu magnetskog kola, a stalni magneti u odnosu na okrugli magnet u vazduhu i magnet zatvoren željeznim čuvarom;
- strujanje u kanalu u odnosu na tačan parabolički profil.

## Pročitaj funkciju

1. Otvori karticu **Biblioteka** panela skripti.
2. Klikni funkciju. Njeno zaglavlje pokazuje: šta računa, metodu, jedinice, pretpostavke i ograničenja, **reference** (knjiga ili rad, s brojevima jednačina) i **provjeru**, mali slučaj sa poznatim rješenjem koji pokreću PartCraft-ovi vlastiti testovi.
3. {{ui:Otvori (samo za čitanje)}} otvara cijelu skriptu u kartici s isprekidanim okvirom. Možeš je pokrenuti, odabrati i pokrenuti dijelove, ali ne i mijenjati.

## Promijeni jednu

Pritisni {{ui:Napravi kopiju}} (ili **Napravi kopiju za uređivanje** iznad kartice samo za čitanje). Kopija je skripta u tvom dijelu s istim imenom, pa se čuva sa dijelom, a **svaki poziv te funkcije sada koristi tvoju kopiju**; uređivač to kaže iznad skripte. Preimenuj kopiju da zadržiš oboje.

## Koristi jednu

Pozovi funkciju iz biblioteke iz bilo koje skripte po imenu, kao ugrađenu funkciju:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultati se vraćaju kao vrijednosti u radnom prostoru; crteži i polja koja se prikažu pojavljuju se u prikazu i pod-prikazima.

Statička analiza otvorenog dijela, na primjer, zauzima nekoliko redova:

```
v = voxel_mesh(part(), 2);                   % kocke od 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % drži dno
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N nadolje na vrhu
r = static_voxel(v, 210000, 0.3, bc);       % čelik
```

`r` drži pomjeranja, naprezanja i reakcije; von Mises naprezanje se crta na deformisanom dijelu. Za zakrivljene dijelove koristi `tet_mesh` i `static_tet`, koji mogu da opterete i drže cijele površine (`face_nodes`).

:::note
Funkcije biblioteke su napisane u CraftScript-u, a Lua skripta ih poziva preko `cs` kao i ugrađene funkcije: `cs.static_tet(t, 200000, 0.3, bc)` (vidi [Skripte u Lua](topic:craftscript-lua)). Svaka funkcija rješava jedan materijal i jedan slučaj opterećenja; zaglavlja navode šta još nije pokriveno.
:::
