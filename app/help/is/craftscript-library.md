---
title: Greiningarsafnið
summary: Safn læsilegra greiningarskrifta í Skriftvinnusvæðinu: hvað er í hverjum hópi, opnun falls með lestrarvörn, hausinn með aðferð, tilvísunum og prófun, gerð eigin afrits, og hvernig afritið tekur við af safnfallinu.
keywords: safn, craftlib, greining, rafsegulsvið, kyrrstæður, mótun, hiti, bestun uppbyggingar, top88, SIMP, rafsegulfræði, rafstöðufræði, segulstöðufræði, vökvi, lattice Boltzmann, LBM, net, voxel, tetrahedra, tilvísanir, prófun, afrit, skuggi
from: bf993859
---

Greiningarsafnið er safn skrifta, hvert og eitt fall sem þú getur lesið frá upphafi til enda: hvernig stífleikafylkið er sett saman, hvar jaðarskilyrðin fara, hvaða leysir keyrir, hvernig niðurstöðurnar eru reiknaðar. Ekkert í því er falið í svörtum kassa; aðeins hröðu innri lykkjurnar (frumufylki, strjálir leysar, möskvun) eru innbyggðar.

## Byrjaðu með dæmi

Hópurinn **Dæmi** geymir fimm stuttar skriftur sem nota safnið frá enda til enda. Smelltu á eina, ýttu á {{ui:Opna (lesvarið)}}, og síðan á {{key:F5}}: hver hreinsar sýnina, sýnir niðurstöðu í þrívíddarsýninni og línurit í undirskjánum.

| Dæmi | Hvað það sýnir |
|---|---|
| Einsendabiti: spenna | Stálstöng 100 × 10 × 10 mm undir 100 N álagi á enda: von Mises-spenna á aflöguðu stönginni, og endabeygjan borin saman við bjálkafræði á fjórum frumustærðum (teiknað) |
| MBB-bjálki, bestun uppbyggingar | Hin klassíska 60 × 20 bestun uppbyggingar: hönnunin myndast, eftirgefanleikinn lækkar, lokaútlitið (94 endurtekningar, eftirgefanleiki 203.19) |
| Þéttisvið | Tvær plötur 4 mm breiðar, 1 mm á milli: spennumunur og svið, þéttigeta með jaðaráhrifum borin saman við kjörgildið og formúlu Palmers |
| Rennsli í rás | Lattice Boltzmann-rennsli framhjá staur í rás: hraðasviðið og samleitnisferillinn |
| Rafsegull | C-laga járnkjarni með loftbili og spólu: segulflæðisþéttleiki, sviðið í bilinu borið saman við formúlu segulrásarinnar, spanmiðið og dráttarkrafturinn yfir bilið. Farið í gegnum í [Segulsvið í 2-D](topic:magnetic-fields-2d) |
| Varanlegur segull | Sami kjarni með varanlegum segli í stað spólunnar: vinnupunktur segulsins, sviðið í bilinu borið saman við segulrásina, hversu mikið flæðið lekur og dráttarkrafturinn. Í [Segulsvið í 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Hópar

| Hópur | Föll | Hvað þau gera |
|---|---|---|
| Möskvun | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kassar og strokkar sem sexflötungar, teningar eða fjórflötungar; teningar eða fjórflötungar af hvaða líkani sem er (hlutnum, búk, hlöðnum STL); rúmmál og gæði frumna; val hnúta á plani eða fleti |
| Kyrrstæð spenna | `static_voxel`, `static_tet` | Línuleg kyrrstæð spenna á teningum eða 10-hnúta fjórflötungum: tilfærslur, spennur, von Mises, viðbrögð |
| Grindur | `frame3d` | 3D-grindur úr bjálkum, súlum og styrkingum með beinni stífleikaaðferð: losun enda, stuðningar og gormar, álag eftir stöngum; tilfærslur, viðbrögð, endakraftar stanga. {{ui:Flytja út sem CraftScript}} í DetailCraft og BimCraft skrifar heilt líkan fyrir hana. Greiningarhjálp, ekki kóðaskoðun |
| Titringur | `modal_tet` | Eiginlegar tíðnir og mótunarform |
| Hiti | `heat_steady`, `heat_transient`, `heat_system` | Stöðug og breytileg varmaleiðsla með föstu hitastigi, hitainntaki, myndun, flæði og varmaflutningi |
| Bestun uppbyggingar | `top88`, `top99`, `topopt3d` | Birtu 88- og 99-línu 2-D kóðarnir, og sama aðferð í 3-D á teningum |
| Rafsegulfræði | `poisson2d`, `magnetostatic2d` | 2-D rafstöðufræði (spennumunur, svið, þéttigeta, hleðsla) og segulstöðufræði (vigurspennumunur, segulflæðisþéttleiki, varanlegir seglar) |
| Vökvaflæði | `lbm2d`, `lbm3d` | Lattice Boltzmann-flæði: 2-D skrifað út í skriftunni, 3-D á eigin flæðikjarna PartCraft |

Hver hausi falls gefur nákvæmar röksemdir þess. Einingarnar eru þær sem gilda um rannsóknir PartCraft nema hausinn segi annað: millimetrar, njútonar, megapaskal, tonn á rúmmillimetra fyrir eðlismassa, vött og kelvin fyrir hita. Rafsegul- og lattice Boltzmann-föllin vinna í hvaða samræmdu einingum sem er; hausarnir segja til um það.

## Hvernig safnið er prófað

Haus hvers falls endar á **prófun**: lítið tilvik með þekktri niðurstöðu. Prófanir PartCraft keyra þær allar, og þar sem PartCraft hefur sína eigin rannsókn á sama verkefni er niðurstaða skriftunnar borin saman við hana á sama möskva:

- endabeygja einsendabitans gegn bjálkafræði (innan 0,2 % með teningum, 0,05 % með fjórflötungum), og gegn lausnum **Simulation**-vinnusvæðisins á sama möskva (eins upp í marga aukastafi);
- fyrsta tíðni einsendabitans gegn bjálkafræði (0,24 % lægri, eins og við er að búast fyrir stuttan bita) og gegn mótunarlausn **Simulation**;
- varmi: heitur veggur á sléttu plani nákvæmlega, lítill búkur sem kólnar eins og lumped-capacity-formúlan segir til um, hitastig plötu sem deyr út eins og kenningin segir;
- bestun uppbyggingar: `top88` endurtekur 94 endurtekningar og eftirgefanleika 203.1925 úr greininni (og 218.8032 með þéttisíu); `topopt3d` endar á sama eftirgefanleika og **Generative**-vinnusvæðið með sömu stillingum;
- þéttigeta þéttis og svið langrar spólu gegn kennslubókargildum, bilsvið rafsegulsins gegn formúlu segulrásarinnar, og varanlegir seglar gegn kringlóttum segli í lofti og segli lokuðum með járnlokun;
- rennsli í rás gegn nákvæmu parabólusniði.

## Lestu fall

1. Opnaðu flipann **Safn** í skriftuspjaldinu.
2. Smelltu á fall. Hausinn sýnir: hvað það reiknar, aðferðina, einingar, forsendur og takmörk, **tilvísanir** (bók eða grein, með jöfnunúmerum) og **prófun**, lítið tilvik með þekktri niðurstöðu sem prófanir PartCraft keyra.
3. {{ui:Opna (lesvarið)}} opnar alla skriftuna í flipa með strikaðri brún. Þú getur keyrt hana, valið og keyrt hluta hennar, en ekki breytt henni.

## Breyttu einu

Ýttu á {{ui:Búa til afrit}} (eða **Búa til afrit til breytinga** fyrir ofan lesvarinn flipa). Afritið er skrift í hlutanum þínum með sama nafni, þannig að það vistast með hlutanum, og **sérhvert kall á það fall notar nú afritið þitt**. Ritillinn segir það fyrir ofan skriftuna. Endurnefndu afritið til að geyma bæði.

## Notaðu eitt

Kallaðu á fall úr safninu úr hvaða skriftu sem er með nafni þess, eins og innbyggt fall:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Niðurstöður koma til baka sem gildi í vinnusvæðinu; línurit og reitir sem þau sýna birtast í sýninni og undirskjánum.

Kyrrstæð greining á opna hlutanum, til dæmis, tekur nokkrar línur:

```
v = voxel_mesh(part(), 2);                   % 2 mm teningar
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % halda botninum
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N niður á toppinn
r = static_voxel(v, 210000, 0.3, bc);       % stál
```

`r` geymir tilfærslurnar, spennurnar og viðbrögðin; von Mises-spennan er teiknuð á aflöguðum hlutanum. Fyrir bogin form notaðu `tet_mesh` og `static_tet`, sem geta líka álagt og haldið heilum flötum (`face_nodes`).

:::note
Föll safnsins eru skrifuð í CraftScript, og Lua-skrift kallar á þau í gegnum `cs` eins og innbyggðu föllin: `cs.static_tet(t, 200000, 0.3, bc)` (sjá [Skriftur í Lua](topic:craftscript-lua)). Hvert fall leysir eitt efni og eitt álagstilvik; hausarnir telja upp hvað annað er ekki þekjað.
:::
