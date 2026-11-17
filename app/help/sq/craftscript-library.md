---
title: Biblioteka e analizës
summary: Biblioteka e skripteve të lexueshme të analizës në Hapësirën e skriptit: çfarë ka në secilin grup, hapja e një funksioni vetëm për lexim, koka e tij me metodën, referencat dhe një kontroll, bërja e kopjes së vet, dhe si kopja e merr përsipër nga funksioni i bibliotekës.
keywords: bibliotekë, craftlib, analizë, elektromagnet, statik, modal, termik, optimizim topologjie, top88, SIMP, elektromagnetikë, elektrostatikë, magnetostatikë, fluid, Boltzmann me rrjetë, LBM, rrjetë, voksel, tetraedra, referenca, kontroll, verifikim, kopje, hije
from: bf993859
---

Biblioteka e analizës është një grup skriptesh, secili një funksion që mund ta lexoni nga lart poshtë: si ndërtohet matrica e ngurtësisë, ku vendosen kushtet kufitare, cili zgjidhës ekzekutohet, si llogariten rezultatet. Asgjë në të nuk është e fshehur në një kuti të zezë; vetëm qarqet e brendshme të shpejta (matricat e elementeve, zgjidhësit e rrallë, rrjetëzimi) janë të integruara.

## Filloni me një shembull

Grupi **Shembuj** mban pesë skripte të shkurtra që përdorin bibliotekën nga fillimi në fund. Klikoni një, shtypni {{ui:Hap (vetëm për lexim)}}, pastaj {{key:F5}}: secili pastron pamjen, shfaq një rezultat mbi kanavacë dhe një grafik te nën-panelet.

| Shembull | Çfarë shfaq |
|---|---|
| Stresi i konzolës | Një shufër çeliku 100 × 10 × 10 mm nën një ngarkesë 100 N në majë: stresi von Mises mbi shufrën e deformuar, dhe shtrirja e majës krahasuar me teorinë e traut në katër madhësi elementesh (me grafik) |
| Topologjia e traut MBB | Optimizimi klasik i topologjisë 60 × 20: formimi i projektit, rënia e fleksibilitetit, shtresimi përfundimtar (94 iteracione, fleksibiliteti 203.19) |
| Fusha e kondensatorit | Dy pllaka 4 mm të gjera, 1 mm larg njëra-tjetrës: potenciali dhe fusha, kapaciteti me efektin e skajeve krahasuar me vlerën ideale dhe formulën e Palmer |
| Rrjedha në kanal | Rrjedhja Boltzmann me rrjetë rreth një shtylle në një kanal: fusha e shpejtësisë dhe historia e konvergjencës |
| Elektromagneti | Një bërthamë hekuri në formë C me një hapësirë ajri dhe një bobinë: dendësia e fluksit, fusha në hapësirë krahasuar me formulën e qarkut magnetik, induktiviteti dhe tërheqja përgjatë hapësirës. Shpjegohet në [Fushat magnetike në 2-D](topic:magnetic-fields-2d) |
| Magneti i përhershëm | E njëjta bërthamë me një magnet të përhershëm në vend të bobinës: pika e punës e magnetit, fusha në hapësirë krahasuar me qarkun magnetik, sa fluks rrjedh jashtë, tërheqja. Në [Fushat magnetike në 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupet

| Grupi | Funksionet | Çfarë bëjnë |
|---|---|---|
| Rrjetëzimi | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kuti dhe cilindra si heksaedra, kube ose tetraedra; kube ose tetraedra të çdo modeli (pjesa, një trup, një STL i ngarkuar); vëllimet dhe cilësia e elementeve; zgjedhja e nyjeve mbi një plan ose sipërfaqe |
| Stresi statik | `static_voxel`, `static_tet` | Stres statik linear mbi kube ose mbi tetraedra 10-nyjëshe: zhvendosjet, stresat, von Mises, reaksionet |
| Kornizat | `frame3d` | Korniza 3D të trarëve, kolonave dhe mbajtëseve me metodën e drejtpërdrejtë të ngurtësisë: lirimet e skajeve, mbështetjet dhe sprungjet, ngarkesat përgjatë anëtarëve; zhvendosjet, reaksionet, forcat në skajet e anëtarëve. {{ui:Eksporto si CraftScript}} i DetailCraft dhe BimCraft shkruan për të një model të plotë. Është një ndihmës analize, jo një kontroll kodi |
| Vibrimi | `modal_tet` | Frekuencat natyrore dhe format e modeve |
| Nxehtësia | `heat_steady`, `heat_transient`, `heat_system` | Përcjellje e qëndrueshme dhe kalimtare me temperatura fikse, hyrje nxehtësie, prodhim, fluks dhe konveksion |
| Optimizimi i topologjisë | `top88`, `top99`, `topopt3d` | Kodet 2-D të botuara me 88 dhe 99 rreshta, dhe e njëjta metodë në 3-D mbi kube |
| Elektromagnetikë | `poisson2d`, `magnetostatic2d` | Elektrostatikë 2-D (potencial, fushë, kapacitet, ngarkesë) dhe magnetostatikë (potencial vektorial, dendësi fluksi, magnetë të përhershëm) |
| Rrjedha e fluideve | `lbm2d`, `lbm3d` | Rrjedhje Boltzmann me rrjetë: 2-D e shkruar plotësisht në skript, 3-D mbi kernelin e vet të rrjedhës të PartCraft |

Koka e çdo funksioni jep argumentet e tij të sakta. Njësitë janë ato të studimeve të PartCraft, përveç nëse koka thotë ndryshe: milimetra, njutonë, megapaskalë, tonë për milimetër kub për densitetin, vat dhe kelvin për nxehtësinë. Funksionet elektromagnetike dhe Boltzmann me rrjetë punojnë me çfarëdo njësish të qëndrueshme; kokat e tyre thonë si.

## Si kontrollohet biblioteka

Koka e çdo funksioni mbaron me një **kontroll**: një rast i vogël me përgjigje të njohur. Testet e PartCraft i ekzekutojnë të gjitha, dhe aty ku PartCraft ka studimin e vet për të njëjtën detyrë, përgjigja e skriptit krahasohet me atë studim në të njëjtën rrjetë:

- shtrirja e majës së konzolës krahasuar me teorinë e traut (brenda 0,2 % me kube, 0,05 % me tetraedra), dhe me zgjidhësit e hapësirës **Simulimi** në të njëjtën rrjetë (të njëjtat deri në shumë shifra);
- frekuenca e parë e konzolës krahasuar me teorinë e traut (0,24 % më e ulët, siç pritet për një trar të shkurtër), dhe me zgjidhësin modal të **Simulimit**;
- nxehtësia: një mur i sheshtë i nxehur saktësisht, një trup i vogël që ftohet siç thotë formula e kapacitetit të përqendruar, temperatura e një pllake që shuhet siç thotë teoria;
- optimizimi i topologjisë: `top88` riprodhon 94 iteracionet e punimit dhe vlerën 203.1925 të fleksibilitetit (dhe 218.8032 me filtrin e dendësisë); `topopt3d` përfundon me të njëjtin fleksibilitet si hapësira **Gjenerimi** me të njëjtat cilësime;
- kapaciteti i një kondensatori dhe fusha e një solenoidi të gjatë krahasuar me vlerat e tyre nga tekstet; fusha në hapësirën e elektromagnetit krahasuar me formulën e qarkut magnetik, dhe magnetët e përhershëm krahasuar me një magnet të rrumbullakët në ajër dhe me një magnet të mbyllur nga një mbajtës hekuri;
- rrjedha në kanal krahasuar me profilin e saktë parabolik.

## Lexoni një funksion

1. Hapni skedën **Bibliotekë** të panelit të skriptit.
2. Klikoni një funksion. Koka e tij tregon: çfarë llogarit, metodën, njësitë, supozimet dhe kufijtë, **referencat** (libri ose punimi, me numrat e ekuacioneve) dhe një **kontroll**: një rast i vogël me përgjigje të njohur, që ekzekutojnë testet e vetë PartCraft.
3. {{ui:Hap (vetëm për lexim)}} hap skriptin e plotë në një skedë me kufi me viza. Mund ta ekzekutoni, të zgjidhni dhe ekzekutoni pjesë të tij, por nuk mund ta ndryshoni.

## Ndryshoni një

Shtypni {{ui:Bëj një kopje}} (ose **Bëj një kopje për ndryshim** mbi një skedë vetëm për lexim). Kopja është një skript në pjesën tuaj me të njëjtin emër, kështu ruhet me pjesën, dhe **çdo thirrje e atij funksioni tani përdor kopjen tuaj**: redaktuesi e thotë këtë mbi skript. Riemërtoni kopjen për t'i mbajtur të dyja.

## Përdorni një

Thirrni një funksion biblioteke nga çdo skript me emrin e tij, si një funksion të integruar:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultatet kthehen si vlera në hapësirën e punës; grafikët dhe fushat që shfaq shfaqen në pamje dhe në nën-panelet.

Një analizë statike e pjesës së hapur, për shembull, zë disa rreshta:

```
v = voxel_mesh(part(), 2);                   % kube 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % mbaj fundin
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N poshtë mbi majën
r = static_voxel(v, 210000, 0.3, bc);       % çelik
```

`r` mban zhvendosjet, stresat dhe reaksionet; stresi von Mises vizatohet mbi pjesën e deformuar. Për pjesët e lakuara përdorni `tet_mesh` dhe `static_tet`, që mund të ngarkojnë dhe mbajnë edhe sipërfaqe të tëra (`face_nodes`).

:::note
Funksionet e bibliotekës shkruhen në CraftScript, dhe një skript Lua i thërret ato përmes `cs` si funksionet e integruara: `cs.static_tet(t, 200000, 0.3, bc)` (shih [Skriptet në Lua](topic:craftscript-lua)). Çdo funksion zgjidh një material dhe një rast ngarkese; kokat listojnë çfarë tjetër nuk mbulohet.
:::
