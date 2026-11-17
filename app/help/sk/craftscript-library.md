---
title: Knižnica analýz
summary: Knižnica čitateľných analytických skriptov v pracovnom priestore Skript: čo je v každej skupine, otvorenie funkcie len na čítanie, jej hlavička s metódou, referenciami a kontrolou, vytvorenie vlastnej kópie a ako kópia preberá funkciu z knižnice.
keywords: knižnica, craftlib, analýza, elektromagnet, statická, modálna, tepelná, optimalizácia topológie, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, prúdenie, mriežková Boltzmannova metóda, LBM, sieť, voxel, tetraedre, referencie, kontrola, overenie, kópia, tieň
from: bf993859
---

Knižnica analýz je súbor skriptov, z ktorých každý je funkcia, ktorú môžete čítať zhora nadol: ako sa zostavuje matica tuhosti, kam idú okrajové podmienky, ktorý riešič beží a ako sa počítajú výsledky. Nič v nej nie je skryté v čiernej skrinke; zabudované sú len rýchle vnútorné slučky (matice prvkov, riedke riešiče, sieťovanie).

## Začnite príkladom

Skupina **Príklady** obsahuje päť krátkych skriptov, ktoré používajú knižnicu od začiatku do konca. Kliknite na jeden, stlačte {{ui:Otvoriť (len na čítanie)}} a potom {{key:F5}}: každý vymaže zobrazenie, ukáže výsledok na plátne a graf v podzobrazeniach.

| Príklad | Čo ukazuje |
|---|---|
| Napätie v konzole | Oceľová tyč 100 × 10 × 10 mm pod 100 N zaťažením na konci: von Misesovo napätie na deformovanej tyči a priehyb konca oproti teórii nosníkov pri štyroch veľkostiach prvkov (v grafe) |
| Topológia nosníka MBB | Klasická optimalizácia topológie 60 × 20: vznik návrhu, pokles poddajnosti, konečné usporiadanie (94 iterácií, poddajnosť 203.19) |
| Pole kondenzátora | Dve dosky široké 4 mm, vzdialené 1 mm: potenciál a pole, kapacita s okrajovým efektom oproti ideálnej hodnote a Palmerovmu vzorcu |
| Prúdenie v kanáli | Prúdenie lattice Boltzmann okolo stĺpika v kanáli: pole rýchlosti a história konvergencie |
| Elektromagnet | C-jadro so vzduchovou medzerou a cievkou: hustota magnetického toku, pole v medzere oproti vzorcu magnetického obvodu, indukčnosť a príťažlivá sila cez medzeru. Prejdené v [Magnetické polia v 2-D](topic:magnetic-fields-2d) |
| Permanentný magnet | Rovnaké jadro s permanentným magnetom namiesto cievky: pracovný bod magnetu, pole v medzere oproti magnetickému obvodu, koľko toku uniká, príťažlivá sila. V [Magnetické polia v 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Skupiny

| Skupina | Funkcie | Čo robia |
|---|---|---|
| Sieťovanie | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Škatule a valce ako hexaédre, kocky alebo tetraedre; kocky alebo tetraedre ľubovoľného modelu (časti, telesa, načítaného STL); objemy a kvalita prvkov; výber uzlov na rovine alebo ploche |
| Statické napätie | `static_voxel`, `static_tet` | Lineárne statické napätie na kockách alebo na 10-uzlových tetraedroch: posuny, napätia, von Mises, reakcie |
| Rámy | `frame3d` | 3D rámy z nosníkov, stĺpov a diagonál metódou priamej tuhosti: uvoľnenia koncov, podpory a pružiny, zaťaženia pozdĺž prútov; posuny, reakcie, koncové sily prútov. {{ui:Exportovať ako CraftScript}} v DetailCraft a BimCraft zapíše pre ňu celý model. Pomôcka pri analýze, nie kontrola noriem |
| Vibrácie | `modal_tet` | Vlastné frekvencie a tvary kmitov |
| Teplo | `heat_steady`, `heat_transient`, `heat_system` | Ustálené a prechodné vedenie s pevnými teplotami, tepelným vstupom, generovaním, tokom a konvekciou |
| Optimalizácia topológie | `top88`, `top99`, `topopt3d` | Publikované 2-D kódy s 88 a 99 riadkami a rovnaká metóda v 3-D na kockách |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potenciál, pole, kapacita, náboj) a magnetostatika (vektorový potenciál, hustota toku, permanentné magnety) |
| Prúdenie tekutín | `lbm2d`, `lbm3d` | Prúdenie lattice Boltzmann: 2-D napísané priamo v skripte, 3-D na vlastnom jadre prúdenia PartCraft |

Hlavička každej funkcie uvádza jej presné argumenty. Jednotky sú tie zo štúdií PartCraft, pokiaľ hlavička nehovorí inak: milimetre, newtony, megapascaly, tony na kubický milimeter pre hustotu, watty a kelviny pre teplo. Elektromagnetické funkcie a funkcie lattice Boltzmann pracujú v ľubovoľných konzistentných jednotkách; ich hlavičky uvádzajú, ako.

## Ako je knižnica overovaná

Hlavička každej funkcie končí **kontrolou**: malým prípadom so známym výsledkom. Testy PartCraft spúšťajú všetky a tam, kde má PartCraft vlastnú štúdiu na rovnakú úlohu, sa výsledok skriptu porovná s touto štúdiou na rovnakej sieti:

- priehyb konca konzoly oproti teórii nosníkov (do 0.2 % s kockami, 0.05 % s tetraedrami) a oproti riešičom pracovného priestoru **Simulácia** na rovnakej sieti (rovnaké na mnoho desatinných miest);
- prvá frekvencia konzoly oproti teórii nosníkov (o 0.24 % nižšia, ako sa čaká pri krátkom nosníku) a oproti modálnemu riešiču **Simulácie**;
- teplo: rovná vyhrievaná stena presne, malé teleso chladnúce podľa vzorca so sústredenou kapacitou, teplota platne zanikajúca podľa teórie;
- optimalizácia topológie: `top88` reprodukuje 94 iterácií z článku a poddajnosť 203.1925 (a 218.8032 s filtrom hustoty); `topopt3d` skončí pri rovnakej poddajnosti ako pracovný priestor **Generatívny** s rovnakými nastaveniami;
- kapacita kondenzátora a pole dlhého solenoidu oproti učebnicovým hodnotám, pole v medzere elektromagnetu oproti vzorcu magnetického obvodu a permanentné magnety oproti guľatému magnetu vo vzduchu a magnetu uzavretému železným uzáverom;
- prúdenie v kanáli oproti presnému parabolickému profilu.

## Prečítajte si funkciu

1. Otvorte kartu {{ui:Knižnica}} panela skriptov.
2. Kliknite na funkciu. Jej hlavička ukazuje: čo počíta, metódu, jednotky, predpoklady a obmedzenia, **referencie** (knihu alebo článok, s číslami rovníc) a **kontrolu** — malý prípad so známym výsledkom, ktorý spúšťajú vlastné testy PartCraft.
3. {{ui:Otvoriť (len na čítanie)}} otvorí celý skript na karte s prerušovaným okrajom. Môžete ho spustiť, vybrať a spustiť jeho časti, ale nie zmeniť.

## Zmeňte ju

Stlačte {{ui:Vytvoriť kópiu}} (alebo **Vytvoriť kópiu na úpravu** nad kartou len na čítanie). Kópia je skript vo vašej časti s rovnakým názvom, takže sa uloží spolu s časťou, a **každé volanie tej funkcie teraz používa vašu kópiu** — editor to uvedie nad skriptom. Ak chcete mať obidve, premenujte kópiu.

## Použite ju

Volajte funkciu knižnice z ľubovoľného skriptu jej názvom, rovnako ako vstavanú funkciu:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Výsledky sa vrátia ako hodnoty v pracovnom priestore; grafy a polia, ktoré zobrazia, sa objavia v zobrazení a podzobrazeniach.

Statická analýza otvorenej časti napríklad zaberie niekoľko riadkov:

```
v = voxel_mesh(part(), 2);                   % kocky 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % podopretie spodku
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N smerom nadol na hornej strane
r = static_voxel(v, 210000, 0.3, bc);       % oceľ
```

`r` obsahuje posuny, napätia a reakcie; von Misesovo napätie sa kreslí na deformovanej časti. Pre zakrivené časti použite `tet_mesh` a `static_tet`, ktoré dokážu zaťažiť a podoprieť aj celé plochy (`face_nodes`).

:::note
Funkcie knižnice sú napísané v CraftScripte a skript v Lua ich volá cez `cs` rovnako ako vstavané funkcie: `cs.static_tet(t, 200000, 0.3, bc)` (pozri [Skripty v Lua](topic:craftscript-lua)). Každá funkcia rieši jeden materiál a jeden prípad zaťaženia; hlavičky uvádzajú, čo ešte nie je pokryté.
:::
