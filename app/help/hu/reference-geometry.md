---
title: Referenciasíkok, tengelyek és pontok
summary: Síkok készítése felülettől eltolva, szögben, három ponton át, félúton, hengerre érintőlegesen, élre merőlegesen, vagy egy élen és egy ponton át; tengelyek; pontok élfelezőkön, metszéspontokon és síksarkokon; vázlat készítése rajtuk, és használatuk forgatási tengelyként, mintairányként és tükrősíkként.
keywords: alapsík, objektumok között, felezőpont, metszéspont, sík élen és ponton át, referenciasík, munkasík, szerkesztősík, eltolt sík, szögben álló sík, középsík, érintősík, referenciatengely, szerkesztőtengely, referenciapont, munkapont, vázlat síkon
from: e7eb6fc1
---

A referenciageometria az állvány, amelyre a jellemzőket építi: egy **sík**, amelyre vázlatot rajzolhat ott, ahol nincs lap; egy **tengely**, amely körül forgathat vagy mintát készíthet; egy **pont**, ahol egy kihúzást megállíthat. Saját anyaga nincs. A síkok halvány négyzetként, a tengelyek szaggatott vonalként, a pontok kis kereszttel jelennek meg a nézetben; mindhárom bekerül az előzményekbe, és követi azt, amiből készült, amikor egy korábbi méretet módosít.

A Jellemzők csoport {{ui:More}} menüjében találhatók: {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}}.

## Sík készítése

1. Kattintson egy sík lapra vagy egy alapsíkra az előzményekben, hogy onnan induljon (nem kötelező).
2. Válassza a {{ui:More}}, majd a {{ui:Plane}} gombot. A sík eltolt síkként indul, az alkatrész méretének 20%-ával a kiválasztott elemtől (vagy a felső síktól).
3. A jobb oldali panelen válassza ki a **Típust** és a hozzá tartozó hivatkozásokat:

| Típus | Hivatkozások | Számértékek |
|---|---|---|
| Eltolás síktól vagy laptól | **Kiinduló sík** | **Távolság (mm)**, a másik oldalra negatív |
| Szögben, élen vagy tengelyen át | **Kiinduló sík**, **Elforgatás tengelye** (világtengely, tengelyjellemző vagy egy kijelölt egyenes él) | **Szög (°)** |
| Három ponton át | **1. pont**, **2. pont**, **3. pont** | — |
| Középsík két sík között | **Első sík**, **Második sík** (párhuzamosnál: félúton; találkozónál: az a sík, amely felezi a szöget) | — |
| Hengerre érintőleges | **Henger** (hengeres lap), **Közeli pont** (melyik oldal) | — |
| Élre merőleges, ponthoz | **Él**, **Pontnál** (a sík átmegy az élnek a hozzá legközelebbi pontján, és ezen a ponton is) | — |
| Egy élen és egy ponton át | **Egyenes él** (vagy tengely), **Átmenő pont** | — |
| Élre merőleges a közepén | **Él** (félúton, arra merőlegesen), vagy él nélkül **1. pont** és **2. pont** (a sík a kettő között, félúton) | — |

Minden hivatkozásnál van egy **Kijelölés** gomb: válassza, majd kattintson a nézetben. Síkmezőbe alapsík, referenciasík vagy sík lap kerülhet; pontmezőbe egy él végpontja (kattintson a végpont közelében), egy pontjellemző vagy egy pont egy lapon; élmezőbe egy él. Az {{key:Esc}} billentyű megszakítja a kijelölést. A **Normális megfordítása** átfordítja a síkot (arra, amerre a rajta lévő vázlat néz).

Ebben a verzióban az élt vagy hengeres lapot igénylő mezők (a Hengerre érintőleges típus és az Él mezők) „még nincs elkészítve” választ adnak: helyette használjon pontokat vagy tengelyt.

## Vázlat síkon

Jelölje ki a síkot (az előzményekben, vagy a nézetben a négyzetére kattintva), majd válassza a {{ui:Sketch}} gombot, vagy a panelén a **Vázlat ezen** lehetőséget. A vázlat követi a síkot: ha módosítja a sík távolságát, a vázlat és az arra épülő összes jellemző is elmozdul.

## Tengelyek és pontok

- {{ui:Axis}}: két ponton át, henger vagy kúp tengelye, két sík metszésénél, egy egyenes él mentén (vagy egy körél tengelye), vagy egy lapra merőlegesen egy ponton át.
- {{ui:Point}}: koordinátákon, csúcsban vagy vázlatpontban, egy körél közepén, valamint az „objektumok között” pontok:

| Pontfajta | Hivatkozások |
|---|---|
| Él felezőpontja (vagy két pont között) | **Él** (hosszának felénél, ívekre és görbékre is), vagy él nélkül **1. pont** és **2. pont** |
| Ahol él vagy tengely találkozik lappal vagy síkkal | **Él** (egyenes vagy görbe) vagy tengely, és **Metszi a síkot** (sík vagy sík lap) vagy **Vagy lap** (sík lap vagy henger). Kör kétszer metszi a síkot, egy egyenes kétszer megy át a hengeren: a **Másik metszéspont** a második pontot adja |
| Ahol három sík találkozik | **Első**, **Második** és **Harmadik sík** (síkok vagy sík lapok) |

Mindegyik egyszerű üzenettel jelzi a hibát, ha a hivatkozások nem illenek egymáshoz: a síkkal párhuzamos egyenes, a hengert elkerülő egyenes, a síkig nem érő él, három sík, amely nem egy pontban találkozik, vagy egy pont azon az egyenesen, amellyel síkot kellene rögzítenie.

Használja ezeket más jellemzőkben:

| Hol | Hogyan |
|---|---|
| Forgatás (testté) | **Tengely**: válassza ki a tengelyjellemzőt a listából (a vázlat síkjában kell lennie) |
| Körkörös minta | **Tengely**: a tengelyjellemző |
| Lineáris minta | **Irány**: tengelyjellemző vagy egy sík (a normálisa) |
| Tükrözés | **Tükrősík**: referenciasík |
| Kihúzás | **Vég**: Lapig vagy síkig, Csúcsig (pontjellemző). Ebben a verzióban még nincs elkészítve (pontos számítási magot igényel) |
| Dőlésszög | **Semleges sík** |

## Ha egy hivatkozás megszűnik

Az a sík, amely egy már nem létező lapból készült, az azt megnevező üzenettel hibásodik, például: „Az a lap, amelyen ül, már nincs meg az Extrude1-ben.” Soha nem kerül át másik lapra. A rajta lévő vázlatok és jellemzők „nincs elkészítve” jelzést kapnak, amíg nincs új hivatkozás kijelölve; az alkatrész többi része marad, ahogy volt.

:::note
Ez a verzió minden alkatrészt hálós számítási maggal épít fel. Ez alapsíkokból, kihúzással vagy forgatással (testté) készített sík lapokból, vázlatpontokból, koordinátákból és más referenciajellemzőkből készít síkokat, tengelyeket és pontokat. Minden olyan, ami élt, egy él végpontját vagy egy görbe lapot igényel, pontos számítási magot kíván: ebben a verzióban még nincs elkészítve („A test egy lapját vagy élét használja, amelyet csak pontos számítási mag tud megtalálni: ebben a verzióban még nincs elkészítve.”).
:::
