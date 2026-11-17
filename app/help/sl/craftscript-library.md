---
title: Knjižnica za analizo
summary: Knjižnica berljivih skriptov za analizo v delovnem okolju Skript: kaj je v vsaki skupini, odpiranje funkcije samo za branje, njena glava z metodo, viri in preverjanjem, izdelava lastne kopije ter način, kako kopija prevzame funkcijo knjižnice.
keywords: knjižnica, craftlib, analiza, elektromagnet, statika, modalna, toplota, optimizacija topologije, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, tekočine, Boltzmannova mreža, LBM, mreža, voksel, tetraedri, viri, preverjanje, verifikacija, kopija, senca
from: bf993859
---

Knjižnica za analizo je zbirka skriptov, vsak je funkcija, ki jo lahko preberete od zgoraj navzdol: kako se sestavi togostna matrika, kam gredo robni pogoji, kateri reševalec teče, kako se izračunajo rezultati. Nič v njej ni skrito v črni skrinjici; hitre notranje zanke (matrike elementov, redki reševalci, mreženje) so vgrajene.

## Začnite s primerom

Skupina **Examples** vsebuje pet kratkih skriptov, ki uporabljajo knjižnico od začetka do konca. Kliknite enega, pritisnite {{ui:Odpri (samo za branje)}}, nato {{key:F5}}: vsak počisti pogled, pokaže rezultat na platnu in graf v podprikazih.

| Primer | Kaj prikaže |
|---|---|
| Cantilever stress | Jeklena palica 100 × 10 × 10 mm pod 100 N obremenitvijo na konici: von Misesova napetost na deformirani palici in pomik konice v primerjavi s teorijo nosilcev pri štirih velikostih elementov (na grafu) |
| MBB beam topology | Klasična optimizacija topologije 60 × 20: nastajanje zasnove, padanje podajnosti, končna postavitev (94 iteracij, podajnost 203.19) |
| Capacitor field | Dve plošči široki 4 mm, oddaljeni 1 mm: potencial in polje, kapacitivnost z robnim efektom v primerjavi z idealno vrednostjo in Palmerjevo formulo |
| Channel flow | Tok po Boltzmannovi mrežni metodi (LBM) okoli stebra v kanalu: hitrostno polje in zgodovina konvergence |
| Electromagnet | Jedro v obliki črke C z zračno režo in tuljavo: gostota magnetnega pretoka, polje v reži v primerjavi s formulo magnetnega kroga, induktivnost in privlačna sila čez režo. Predstavljeno v [Magnetna polja v 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Isto jedro s trajnim magnetom namesto tuljave: delovna točka magneta, polje v reži v primerjavi z magnetnim krogom, koliko pretoka pušča, privlačna sila. V [Magnetna polja v 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Skupine

| Skupina | Funkcije | Kaj delajo |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kvadri in valji kot heksaedri, kocke ali tetraedri; kocke ali tetraedri poljubnega modela (del, telo, naložen STL); prostornine elementov in kakovost; izbira vozlišč na ravnini ali ploskvi |
| Static stress | `static_voxel`, `static_tet` | Linearna statična napetost na kockah ali na 10-vozliščnih tetraedrih: pomiki, napetosti, von Mises, reakcije |
| Frames | `frame3d` | 3D-okvirji nosilcev, stebrov in diagonal po metodi neposredne togosti: sprostitve členkov, podpore in vzmeti, obremenitve vzdolž elementov; pomiki, reakcije, sile na koncih elementov. Ukaz {{ui:Izvozi kot CraftScript}} v DetailCraft in BimCraft zapiše celoten model zanj. Pomoč pri analizi, ne preverjanje skladnosti s predpisi |
| Vibration | `modal_tet` | Lastne frekvence in lastne oblike |
| Heat | `heat_steady`, `heat_transient`, `heat_system` | Stacionarna in prehodna prevodnost s fiksnimi temperaturami, dovodom toplote, generiranjem, tokom in konvekcijo |
| Topology optimization | `top88`, `top99`, `topopt3d` | Objavljeni 2-D kodi z 88 in 99 vrsticami ter ista metoda v 3-D na kockah |
| Electromagnetics | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potencial, polje, kapacitivnost, naboj) in magnetostatika (vektorski potencial, gostota magnetnega pretoka, trajni magneti) |
| Fluid flow | `lbm2d`, `lbm3d` | Tok po Boltzmannovi mrežni metodi: 2-D zapisan v skriptu, 3-D na lastnem jedru toka PartCraft |

Glava vsake funkcije navaja točne argumente. Enote so enote študij PartCraft, razen če glava pove drugače: milimetri, njutoni, megapaskali, tone na kubični milimeter za gostoto, vati in kelvini za toploto. Elektromagnetne funkcije in funkcije Boltzmannove mrežne metode delajo v katerih koli skladnih enotah; njihove glave povedo, kateri.

## Kako je knjižnica preverjena

Glava vsake funkcije se konča s **preverjanjem**: majhen primer z znanim rezultatom. Preizkusi PartCraft jih zaženejo vse, kjer ima PartCraft lastno študijo za isto nalogo, pa se rezultat skripta primerja s to študijo na isti mreži:

- pomik konice konzole v primerjavi s teorijo nosilcev (znotraj 0,2 % s kockami, 0,05 % s tetraedri) in z reševalci delovnega okolja **Simulation** na isti mreži (enako na več mest);
- prva frekvenca konzole v primerjavi s teorijo nosilcev (0,24 % nižja, kot pričakovano za kratek nosilec) in z modalnim reševalcem **Simulation**;
- toplota: ogrevana ravna stena natančno, majhno telo, ki se hladi, kot pravi formula s sosredotočeno kapaciteto, temperatura plošče, ki izumira, kot pravi teorija;
- optimizacija topologije: `top88` ponovi 94 iteracij iz članka in podajnost 203.1925 (in 218.8032 z gostotnim filtrom); `topopt3d` konča pri isti podajnosti kot delovno okolje **Generative** z enakimi nastavitvami;
- kapacitivnost kondenzatorja in polje dolgega solenoida v primerjavi s učbeniškimi vrednostmi, polje v reži elektromagneta v primerjavi s formulo magnetnega kroga ter trajni magneti v primerjavi z okroglim magnetom na zraku in magnetom, zaprtim z železnim zapirom;
- tok v kanalu v primerjavi s točnim paraboličnim profilom.

## Preberite funkcijo

1. Odprite zavihek **Knjižnica** podokna skriptov.
2. Kliknite funkcijo. Njena glava prikaže: kaj izračuna, metodo, enote, predpostavke in omejitve, **vire** (knjigo ali članek, z numeracijo enačb) ter **preverjanje** — majhen primer z znanim rezultatom, ki ga zaženejo lastni preizkusi PartCraft.
3. {{ui:Odpri (samo za branje)}} odpre celoten skript v zavihku s črtkanim robom. Lahko ga zaženete, izberete in zaženete dele, ne morete pa ga spremeniti.

## Spremenite funkcijo

Pritisnite {{ui:Naredi kopijo}} (ali **Naredi kopijo za urejanje** nad zavihkom samo za branje). Kopija je skript v vašem delu z istim imenom, zato se shrani skupaj z delom, in **vsak klic te funkcije zdaj uporablja vašo kopijo** — urejevalnik to pove nad skriptom. Kopijo preimenujte, če želite ohraniti oba.

## Uporabite funkcijo

Funkcijo knjižnice iz katerega koli skripta pokličite po imenu, kot vgrajeno funkcijo:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultati se vrnejo kot vrednosti v delovnem okolju; grafi in polja, ki jih prikaže, se pojavijo v pogledu in podprikazih.

Statična analiza odprtega dela na primer zahteva nekaj vrstic:

```
v = voxel_mesh(part(), 2);                   % kocke po 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % spodnji del držite
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N navzdol na zgornjem delu
r = static_voxel(v, 210000, 0.3, bc);       % jeklo
```

`r` hrani pomike, napetosti in reakcije; von Misesova napetost se nariše na deformiranem delu. Za ukrivljene dele uporabite `tet_mesh` in `static_tet`, ki lahko obremenita in podprejo tudi cele ploskve (`face_nodes`).

:::note
Funkcije knjižnice so napisane v CraftScript, skript Lua pa jih kliče prek `cs`, kot vgrajene funkcije: `cs.static_tet(t, 200000, 0.3, bc)` (glejte [Skripti v jeziku Lua](topic:craftscript-lua)). Vsaka funkcija reši en material in en primer obremenitve; glave navajajo, kaj ostane nepokrito.
:::
