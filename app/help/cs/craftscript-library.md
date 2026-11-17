---
title: Knihovna analýz
summary: Knihovna čitelných analytických skriptů v pracovním prostoru Skript: co obsahuje každá skupina, otevření funkce jen pro čtení, její hlavička s metodou, odkazy a kontrolou, vytvoření vlastní kopie a jak kopie převezme místo funkce z knihovny.
keywords: knihovna, craftlib, analýza, elektromagnet, statická, modální, tepelná, topologická optimalizace, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, proudění, mřížková Boltzmannova metoda, LBM, síť, voxel, tetraedry, odkazy, kontrola, ověření, kopie, stín
from: bf993859
---

Knihovna analýz je sada skriptů, každý je funkce, kterou můžete číst shora dolů: jak se sestavuje matice tuhosti, kam patří okrajové podmínky, který řešič běží, jak se počítají výsledky. Nic v ní není skryto v černé skříňce; vestavěné jsou jen rychlé vnitřní smyčky (maticové prvky, řídké řešiče, sítě).

## Začněte příkladem

Skupina **Příklady** obsahuje pět krátkých skriptů, které používají knihovnu od začátku do konce. Klikněte na jeden, stiskněte {{ui:Otevřít (jen ke čtení)}}, pak {{key:F5}}: každý vymaže zobrazení, ukáže výsledek na plátně a graf ve vedlejších zobrazeních.

| Příklad | Co ukazuje |
|---|---|
| Napětí konzoly | Ocelová tyč 100 × 10 × 10 mm pod silou 100 N na konci: von Mises napětí na deformované tyči a průhyb konce proti teorii nosníků při čtyřech velikostech prvků (vykresleno) |
| Topologická optimalizace MBB | Klasická topologická optimalizace 60 × 20: vznik návrhu, pokles poddajnosti, konečné uspořádání (94 iterací, poddajnost 203.19) |
| Kapacitor, pole | Dvě desky široké 4 mm, 1 mm od sebe: potenciál a pole, kapacita s okrajovým jevem proti ideální hodnotě a Palmerovu vzorci |
| Proudění v kanálu | Proudění mřížkovou Boltzmannovou metodou kolem sloupku v kanálu: pole rychlostí a průběh konvergence |
| Elektromagnet | C-jádro se vzduchovou mezerou a cívkou: hustota magnetického toku, pole v mezeře proti vzorci magnetického obvodu, indukčnost a přitažlivost přes mezeru. Probráno v [Magnetická pole ve 2D](topic:magnetic-fields-2d) |
| Permanentní magnet | Stejné jádro, ale s permanentním magnetem místo cívky: pracovní bod magnetu, pole v mezeře proti magnetickému obvodu, kolik toku uniká, přitažlivost. V [Magnetická pole ve 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Skupiny

| Skupina | Funkce | Co dělají |
|---|---|---|
| Sítě | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Krabice a válce jako hexaedry, krychle nebo tetraedry; krychle či tetraedry libovolného modelu (díl, těleso, načtený STL); objemy prvků a kvalita; výběr uzlů na rovině nebo ploše |
| Statické napětí | `static_voxel`, `static_tet` | Lineární statické napětí na krychlích nebo na 10uzlových tetraedrech: posuny, napětí, von Mises, reakce |
| Rámy | `frame3d` | 3D rámy z nosníků, sloupů a ztužidel metodou přímé tuhosti: koncová uvolnění, podpory a pružiny, zatížení podél prutů; posuny, reakce, koncové síly prutů. Příkaz {{ui:Exportovat jako CraftScript}} v DetailCraft a BimCraft zapíše celý model pro ni. Pomůcka pro analýzu, ne kontrola norem |
| Kmitání | `modal_tet` | Vlastní frekvence a tvary kmitů |
| Teplo | `heat_steady`, `heat_transient`, `heat_system` | Ustálené a přechodné vedení tepla s pevnými teplotami, přívodem tepla, generováním, tokem a prouděním |
| Topologická optimalizace | `top88`, `top99`, `topopt3d` | Publikované 2D kódy o 88 a 99 řádcích a stejná metoda ve 3D na krychlích |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2D elektrostatika (potenciál, pole, kapacita, náboj) a magnetostatika (vektorový potenciál, hustota toku, permanentní magnety) |
| Proudění tekutin | `lbm2d`, `lbm3d` | Proudění mřížkovou Boltzmannovou metodou: 2D zapsané ve skriptu, 3D na vlastním jádru proudění PartCraft |

Hlavička každé funkce uvádí přesné argumenty. Jednotky jsou jednotky studií PartCraft, pokud hlavička neříká jinak: milimetry, newtony, megapascaly, tuny na krychlový milimetr u hustoty, watty a kelviny u tepla. Elektromagnetické funkce a funkce mřížkové Boltzmannovy metody pracují v libovolných konzistentních jednotkách; jejich hlavičky říkají, jakých.

## Jak se knihovna kontroluje

Hlavička každé funkce končí **kontrolou**: malým případem se známým výsledkem. Testy PartCraft spouštějí všechny, a kde má PartCraft vlastní studii pro stejný úkol, výsledek skriptu se porovná s touto studií na téže síti:

- průhyb konce konzoly proti teorii nosníků (do 0.2 % s krychlemi, 0.05 % s tetraedry) a proti řešičům pracovního prostoru **Simulace** na téže síti (shodné na mnoho číslic);
- první frekvence konzoly proti teorii nosníků (o 0.24 % nižší, jak se očekává u krátkého nosníku) a proti modálnímu řešiči **Simulace**;
- teplo: ohřívaná rovinná stěna přesně, malé těleso chladnoucí podle vzorce se soustředěnou kapacitou, teplota desky doznívající podle teorie;
- topologická optimalizace: `top88` reprodukuje 94 iterací a poddajnost 203.1925 z článku (a 218.8032 s filtrem hustoty); `topopt3d` skončí na stejné poddajnosti jako pracovní prostor **Generativní** se stejným nastavením;
- kapacita kondenzátoru a pole dlouhé cívky proti učebnicovým hodnotám, pole v mezeře elektromagnetu proti vzorci magnetického obvodu, a permanentní magnety proti kulatému magnetu na vzduchu a magnetu uzavřenému železným uzávěrem;
- proudění v kanálu proti přesnému parabolickému profilu.

## Přečíst funkci

1. Otevřete kartu **Knihovna** v panelu skriptů.
2. Klikněte na funkci. Její hlavička ukazuje: co počítá, metodu, jednotky, předpoklady a meze, **odkazy** (knihu nebo článek s čísly rovnic) a **kontrolu** — malý případ se známým výsledkem, který spouštějí vlastní testy PartCraft.
3. {{ui:Otevřít (jen ke čtení)}} otevře celý skript na kartě s čárkovaným okrajem. Můžete ho spustit, vybrat a spustit jeho části, ale neměnit ho.

## Změnit funkci

Stiskněte {{ui:Vytvořit kopii}} (nebo **Vytvořit kopii k úpravě** nad kartou jen pro čtení). Kopie je skript ve vašem dílu se stejným názvem, takže se uloží s dílem, a **každé volání té funkce teď používá vaši kopii** — editor to uvádí nad skriptem. Přejmenujte kopii, abyste si ponechali obojí.

## Použít funkci

Zavolejte funkci z knihovny z libovolného skriptu jejím jménem, jako vestavěnou funkci:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Výsledky se vrátí jako hodnoty v pracovním prostoru; grafy a pole, které zobrazí, se objeví v zobrazení a ve vedlejších zobrazeních.

Statická analýza otevřeného dílu například zabere několik řádků:

```
v = voxel_mesh(part(), 2);                   % krychle 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % uchytit spodek
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N dolů na horní plochu
r = static_voxel(v, 210000, 0.3, bc);       % ocel
```

`r` obsahuje posuny, napětí a reakce; von Mises napětí je vykresleno na deformovaném dílu. Pro zakřivené díly použijte `tet_mesh` a `static_tet`, které umějí zatížit a uchytit i celé plochy (`face_nodes`).

:::note
Funkce knihovny jsou napsány v CraftScriptu a skript Lua je volá přes `cs` jako vestavěné funkce: `cs.static_tet(t, 200000, 0.3, bc)` (viz [Skripty v Lua](topic:craftscript-lua)). Každá funkce řeší jeden materiál a jeden zatěžovací případ; hlavičky uvádějí, co dalšího není pokryto.
:::
