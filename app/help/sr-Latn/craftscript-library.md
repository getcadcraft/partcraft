---
title: Biblioteka analiza
summary: Biblioteka čitljivih skripti za analizu u radnom prostoru Skripte: šta je u svakoj grupi, otvaranje funkcije samo za čitanje, njeno zaglavlje sa metodom, referencama i proverom, pravljenje sopstvene kopije i kako kopija preuzima od funkcije iz biblioteke.
keywords: biblioteka, craftlib, analiza, elektromagnet, statika, modalna, toplota, optimizacija topologije, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, fluid, Bolcmanova rešetka, LBM, mreža, voxel, tetraedri, reference, provera, verifikacija, kopija, senka
from: bf993859
---

Biblioteka analiza je skup skripti, a svaka je funkcija koju možete čitati od početka do kraja: kako se sklapa matrica krutosti, gde idu granični uslovi, koji rešavač radi, kako se računaju rezultati. Ništa u njoj nije skriveno u crnoj kutiji; ugrađeni su samo brzi unutrašnji delovi (matrice elemenata, retki rešavači, mreženje).

## Počnite od primera

Grupa **Primeri** sadrži pet kratkih skripti koje koriste biblioteku od početka do kraja. Kliknite jednu, pritisnite {{ui:Otvori (samo za čitanje)}}, pa {{key:F5}}: svaka očisti prikaz, pokaže rezultat na platnu i grafik u pomoćnim prikazima.

| Primer | Šta prikazuje |
|---|---|
| Naprezanje konzole | Čelična šipka 100 × 10 × 10 mm pod silom od 100 N na vrhu: fon Misesovo naprezanje na deformisanoj šipki, i progib vrha u odnosu na teoriju grede pri četiri veličine elemenata (na grafiku) |
| Topologija MBB grede | Klasična optimizacija topologije 60 × 20: formiranje dizajna, pad usklađenosti, konačni raspored (94 iteracije, usklađenost 203.19) |
| Polje kondenzatora | Dve ploče široke 4 mm, na rastojanju 1 mm: potencijal i polje, kapacitivnost sa rasipanjem u odnosu na idealnu vrednost i Palmerovu formulu |
| Tok kroz kanal | Tok Bolcmanove rešetke oko stuba u kanalu: polje brzina i istorija konvergencije |
| Elektromagnet | Jezgro u obliku slova C sa vazdušnim procepom i kalemom: gustina fluksa, polje u procepu u odnosu na formulu magnetnog kola, induktivnost i privlačna sila preko procepa. Prolazi se kroz [Magnetno polje u 2-D](topic:magnetic-fields-2d) |
| Stalni magnet | Isto jezgro sa stalnim magnetom umesto kalema: radna tačka magneta, polje u procepu u odnosu na magnetno kolo, koliko fluksa curi, privlačna sila. U [Magnetno polje u 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupe

| Grupa | Funkcije | Šta rade |
|---|---|---|
| Mreženje | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kvadri i cilindri kao heksaedri, kocke ili tetraedri; kocke ili tetraedri bilo kog modela (deo, telo, učitan STL); zapremine elemenata i kvalitet; biranje čvorova na ravni ili površi |
| Statičko naprezanje | `static_voxel`, `static_tet` | Linearno statičko naprezanje na kockama ili na 10-čvornim tetraedrima: pomeranja, naprezanja, fon Mises, reakcije |
| Okviri | `frame3d` | 3D okviri od greda, stubova i dijagonala metodom direktne krutosti: otpuštanja krajeva, oslonci i opruge, opterećenja duž elemenata; pomeranja, reakcije, sile na krajevima elemenata. U programima DetailCraft i BimCraft naredba {{ui:Izvezi kao CraftScript}} zapisuje ceo model za nju. Pomoćno sredstvo za analizu, a ne provera propisa |
| Vibracije | `modal_tet` | Prirodne frekvencije i oblici modova |
| Toplota | `heat_steady`, `heat_transient`, `heat_system` | Stacionarno i prelazno provođenje sa fiksnim temperaturama, unosom toplote, generisanjem, fluksom i konvekcijom |
| Optimizacija topologije | `top88`, `top99`, `topopt3d` | Objavljeni 2-D kodovi od 88 i 99 linija, i ista metoda u 3-D na kockama |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potencijal, polje, kapacitivnost, naelektrisanje) i magnetostatika (vektorski potencijal, gustina fluksa, stalni magneti) |
| Tok fluida | `lbm2d`, `lbm3d` | Tok Bolcmanove rešetke: 2-D ispisan u skripti, 3-D na sopstvenom jezgru toka programa PartCraft |

Zaglavlje svake funkcije daje tačne argumente. Jedinice su one iz studija programa PartCraft, osim ako zaglavlje ne kaže drugačije: milimetri, njutni, megapaskali, tone po kubnom milimetru za gustinu, vati i kelvini za toplotu. Elektromagnetske funkcije i funkcije Bolcmanove rešetke rade u bilo kojim doslednim jedinicama; u njihovim zaglavljima piše kako.

## Kako se biblioteka proverava

Zaglavlje svake funkcije se završava **proverom**: malim slučajem sa poznatim rešenjem. Testovi programa PartCraft pokreću svaku od njih, a tamo gde PartCraft ima sopstvenu studiju za isti posao, odgovor skripte se poredi s tom studijom na istoj mreži:

- progib vrha konzole u odnosu na teoriju grede (unutar 0.2 % sa kockama, 0.05 % sa tetraedrima), i u odnosu na rešavače radnog prostora **Simulacija** na istoj mreži (isti do više cifara);
- prva frekvencija konzole u odnosu na teoriju grede (0.24 % niža, što se očekuje za kratku gredu) i u odnosu na modalni rešavač **Simulacije**;
- toplota: zidna ravan sa zagrevanjem tačno, malo telo koje se hladi kako kaže formula sa sabranom masom, temperatura ploče koja jenjava kako kaže teorija;
- optimizacija topologije: `top88` reprodukuje 94 iteracije i usklađenost 203.1925 (i 218.8032 uz filter gustine); `topopt3d` završava na istoj usklađenosti kao radni prostor **Generativno** sa istim podešavanjima;
- kapacitivnost kondenzatora i polje dugačkog solenoida u odnosu na udžbeničke vrednosti, polje procepa elektromagneta u odnosu na formulu magnetnog kola, i stalni magneti u odnosu na okrugli magnet u vazduhu i magnet zatvoren gvozdenim zatvaračem;
- tok kanala u odnosu na tačan parabolični profil.

## Pročitajte funkciju

1. Otvorite karticu **Biblioteka** u panelu skripti.
2. Kliknite funkciju. Njeno zaglavlje pokazuje: šta računa, metodu, jedinice, pretpostavke i ograničenja, **reference** (knjiga ili rad, sa brojevima jednačina) i **proveru**: mali slučaj sa poznatim rešenjem koji pokreću sopstveni testovi programa PartCraft.
3. {{ui:Otvori (samo za čitanje)}} otvara celu skriptu u jezičku sa isprekidanom ivicom. Možete je pokrenuti, izabrati i pokrenuti delove, ali ne i menjati.

## Promenite jednu

Pritisnite {{ui:Napravi kopiju}} (ili **Napravi kopiju za uređivanje** iznad jezička samo za čitanje). Kopija je skripta u vašem delu sa istim imenom, pa se čuva uz deo, i **svaki poziv te funkcije sada koristi vašu kopiju**; uređivač to kaže iznad skripte. Preimenujte kopiju da biste zadržali oba.

## Koristite jednu

Pozovite funkciju iz biblioteke iz bilo koje skripte po imenu, kao ugrađenu funkciju:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultati se vraćaju kao vrednosti u radnom prostoru; grafici i polja koja prikaže pojavljuju se u prikazu i pomoćnim prikazima.

Statička analiza otvorenog dela, na primer, zauzima nekoliko redova:

```
v = voxel_mesh(part(), 2);                   % kocke od 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % učvrsti dno
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N nadole na vrhu
r = static_voxel(v, 210000, 0.3, bc);       % čelik
```

`r` drži pomeranja, naprezanja i reakcije; fon Misesovo naprezanje se crta na deformisanom delu. Za zakrivljene delove koristite `tet_mesh` i `static_tet`, koji mogu i da opterete i učvrste cele površi (`face_nodes`).

:::note
Funkcije biblioteke su napisane u CraftScript-u, a Lua skripta ih poziva preko `cs` kao i ugrađene funkcije: `cs.static_tet(t, 200000, 0.3, bc)` (vidi [Skripte u jeziku Lua](topic:craftscript-lua)). Svaka funkcija rešava jedan materijal i jedan slučaj opterećenja; zaglavlja navode šta drugo nije obuhvaćeno.
:::
