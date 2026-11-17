---
title: Biblioteka analiza
summary: Biblioteka čitljivih skripti za analizu u radnom prostoru Skripta: što je u svakoj grupi, otvaranje funkcije samo za čitanje, njezino zaglavlje s metodom, referencama i provjerom, izrada vlastite kopije i kako kopija preuzima od funkcije iz biblioteke.
keywords: biblioteka, craftlib, analiza, elektromagnet, statički, modalni, toplinski, optimizacija topologije, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, strujanje, lattice Boltzmann, LBM, mreža, voksel, tetraedri, reference, provjera, verifikacija, kopija, sjena
from: bf993859
---

Biblioteka analiza skup je skripti, pri čemu je svaka funkcija koju možete čitati od početka do kraja: kako se sastavlja matrica krutosti, gdje idu rubni uvjeti, koji se rješavač pokreće, kako se računaju rezultati. Ništa u njoj nije skriveno u crnoj kutiji; ugrađeni su samo brzi unutarnji dijelovi (matrice elemenata, rijetki rješavači, mreženje).

## Počnite s primjerom

Grupa **Primjeri** sadrži pet kratkih skripti koje koriste biblioteku od početka do kraja. Kliknite jednu, pritisnite {{ui:Otvori (samo za čitanje)}}, zatim {{key:F5}}: svaka očisti prikaz, prikaže rezultat na platnu i graf u podprikazima.

| Primjer | Što prikazuje |
|---|---|
| Konzolno naprezanje | Čelična greda 100 × 10 × 10 mm pod vršnim opterećenjem 100 N: von Misesovo naprezanje na deformiranoj gredi i progib vrha u odnosu na teoriju grede pri četiri veličine elemenata (u grafu) |
| Optimizacija topologije MBB grede | Klasična optimizacija topologije 60 × 20: oblikovanje dizajna, pad popustljivosti, konačni raspored (94 iteracije, popustljivost 203.19) |
| Polje kondenzatora | Dvije ploče široke 4 mm, na razmaku 1 mm: potencijal i polje, kapacitet s rubnim efektom u odnosu na idealnu vrijednost i Palmerovu formulu |
| Strujanje u kanalu | Strujanje lattice Boltzmann oko stupića u kanalu: polje brzine i povijest konvergencije |
| Elektromagnet | C-jezgra od željeza sa zračnim rasporom i zavojnicom: gustoća magnetskog toka, polje u rasporu u odnosu na formulu magnetskog kruga, induktivitet i privlačna sila preko raspora. Prođeno u [Magnetska polja u 2D](topic:magnetic-fields-2d) |
| Trajni magnet | Ista jezgra s trajnim magnetom umjesto zavojnice: radna točka magneta, polje u rasporu u odnosu na magnetski krug, koliki se tok rasipa, privlačna sila. U [Magnetska polja u 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupe

| Grupa | Funkcije | Što rade |
|---|---|---|
| Mreženje | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kutije i cilindri kao heksaedri, kocke ili tetraedri; kocke ili tetraedri bilo kojeg modela (dio, tijelo, učitani STL); volumeni elemenata i kvaliteta; odabir čvorova na ravnini ili plohi |
| Statičko naprezanje | `static_voxel`, `static_tet` | Linearno statičko naprezanje na kockama ili na 10-čvornim tetraedrima: pomaci, naprezanja, von Mises, reakcije |
| Okviri | `frame3d` | 3D okviri greda, stupova i dijagonala metodom direktne krutosti: otpuštanja krajeva, oslonci i opruge, opterećenja duž štapova; pomaci, reakcije, sile na krajevima štapova. Naredba {{ui:Izvezi kao CraftScript}} u DetailCraftu i BimCraftu zapisuje cijeli model za nju. Pomoćno sredstvo za analizu, a ne provjera propisa |
| Vibracije | `modal_tet` | Vlastite frekvencije i oblici modova |
| Toplina | `heat_steady`, `heat_transient`, `heat_system` | Stacionarno i prijelazno vođenje topline s fiksnim temperaturama, unosom topline, generiranjem, tokom i konvekcijom |
| Optimizacija topologije | `top88`, `top99`, `topopt3d` | Objavljeni 2D kodovi od 88 i 99 redaka i ista metoda u 3D na kockama |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2D elektrostatika (potencijal, polje, kapacitet, naboj) i magnetostatika (vektorski potencijal, gustoća magnetskog toka, trajni magneti) |
| Strujanje fluida | `lbm2d`, `lbm3d` | Strujanje lattice Boltzmann: 2D zapisano u skripti, 3D na vlastitoj jezgri za strujanje u PartCraftu |

Zaglavlje svake funkcije navodi točne argumente. Jedinice su one iz studija PartCraft-a, osim ako zaglavlje ne kaže drukčije: milimetri, njutni, megapaskali, tone po kubnom milimetru za gustoću, vati i kelvini za toplinu. Elektromagnetske funkcije i funkcije lattice Boltzmann rade u bilo kojim dosljednim jedinicama; njihova zaglavlja navode koje.

## Kako se biblioteka provjerava

Zaglavlje svake funkcije završava **provjerom**: malim slučajem s poznatim rješenjem. Testovi PartCraft-a izvode svaki od njih, a tamo gdje PartCraft ima vlastitu studiju za isti posao, rezultat skripte uspoređuje se s tom studijom na istoj mreži:

- progib vrha konzole u odnosu na teoriju grede (unutar 0.2 % s kockama, 0.05 % s tetraedrima) i u odnosu na rješavače radnog prostora **Simulacija** na istoj mreži (isti na mnogo znamenki);
- prva frekvencija konzole u odnosu na teoriju grede (0.24 % niža, kako se i očekuje za kratku gredu) i u odnosu na modalni rješavač **Simulacije**;
- toplina: zagrijani ravni zid točno, malo tijelo koje se hladi kako kaže formula s koncentriranim kapacitetom, temperatura ploče koja nestaje kako kaže teorija;
- optimizacija topologije: `top88` reproducira 94 iteracije iz rada i popustljivost 203.1925 (i 218.8032 s filtrom gustoće); `topopt3d` završava na istoj popustljivosti kao radni prostor **Generativno** s istim postavkama;
- kapacitet kondenzatora i polje dugog solenoida u odnosu na udžbeničke vrijednosti, polje u rasporu elektromagneta u odnosu na formulu magnetskog kruga, a trajni magneti u odnosu na okrugli magnet u zraku i magnet zatvoren željeznim zatvaračem;
- strujanje kanalom u odnosu na točan paraboličan profil.

## Pročitajte funkciju

1. Otvorite karticu **Biblioteka** panela skripti.
2. Kliknite funkciju. Njezino zaglavlje prikazuje: što računa, metodu, jedinice, pretpostavke i ograničenja, **reference** (knjiga ili rad, s brojevima jednadžbi) i **provjeru**, mali slučaj s poznatim rješenjem koji izvode vlastiti testovi PartCraft-a.
3. {{ui:Otvori (samo za čitanje)}} otvara cijelu skriptu u kartici s crtkanim okvirom. Možete je pokrenuti, odabrati i pokrenuti dijelove, ali ne i mijenjati.

## Promijenite jednu

Pritisnite {{ui:Napravi kopiju}} (ili **Napravi kopiju za uređivanje** iznad kartice samo za čitanje). Kopija je skripta u vašem dijelu s istim imenom, pa se sprema s dijelom, i **svaki poziv te funkcije sada koristi vašu kopiju**; uređivač to kaže iznad skripte. Preimenujte kopiju da zadržite obje.

## Upotrijebite jednu

Pozovite funkciju biblioteke iz bilo koje skripte po njezinu imenu, kao ugrađenu funkciju:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultati se vraćaju kao vrijednosti u radnom prostoru; crteži i polja koja se prikažu pojavljuju se u prikazu i podprikazima.

Statička analiza otvorenog dijela, na primjer, zauzima nekoliko redaka:

```
v = voxel_mesh(part(), 2);                   % kocke od 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % pridržava dno
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N prema dolje na vrhu
r = static_voxel(v, 210000, 0.3, bc);       % čelik
```

`r` sadrži pomake, naprezanja i reakcije; von Misesovo naprezanje crta se na deformiranom dijelu. Za zakrivljene dijelove koristite `tet_mesh` i `static_tet`, koji mogu opteretiti i učvrstiti cijele plohe (`face_nodes`).

:::note
Funkcije biblioteke napisane su u CraftScriptu, a Lua skripta ih poziva preko `cs` kao i ugrađene funkcije: `cs.static_tet(t, 200000, 0.3, bc)` (vidi [Skripte u jeziku Lua](topic:craftscript-lua)). Svaka funkcija rješava jedan materijal i jedan slučaj opterećenja; zaglavlja navode što nije obuhvaćeno.
:::
