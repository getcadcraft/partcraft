---
title: Navoji na gredeh in izvrtinah, narisani ali modelirani
summary: Na katerokoli okroglo ploskev, gred ali izvrtino dajte metrični ISO ali trapezni navoj. Obdržite ga kozmetičnega za risbe ali modelirajte pravi vijačni navoj za 3D-tiskanje, z zračnostjo, da se natisnjeni deli prilegajo.
keywords: navoj, navoji, modeliran navoj, vijačnica, spirala, vijak, matica, gred, izvrtina, zunanji navoj, notranji navoj, kozmetični navoj, metrični navoj, trapezni, acme, vodilni vijak, Tr16x4, M10, 3D-tiskanje, tiskanje, zračnost, ujem, levi navoj, izvrtina z navojem
from: 4f6401cc
---

{{ui:Navoj}} postavi navoj na okrogle ploskve: zunanjo stran gredi (zunanji navoj) ali notranjo stran izvrtine (notranji navoj). PartCraft to ugotovi iz ploskve.

Navoj je na začetku **kozmetičen**: ploskev ostane gladka, pogled nariše navoj kot črtkane kroge, risalni list pa ga označi, na primer „M10×1.5 - 6g, navoj dolg 20“. Označite **Modelirano**, da v del vrežete pravi vijačni navoj, za 3D-tiskanje ali model, ki mora izgledati pravilno.

## Navoj na gredi ali izvrtini

1. Zgradite gred ali izvrtino v velikosti navoja: gred Ø10 za vijak M10 ali izvrtino Ø8.5 (vrtalni premer) za matico M10.
2. Kliknite okroglo ploskev in izberite {{ui:Več}} › {{ui:Navoj}}. Če ni izbrane okrogle ploskve, PartCraft zahteva, da kliknete ploskve, nato {{ui:Končano}}.
3. V desnem podoknu preverite **Velikost**. **Prilagodi ploskvi** izbere velikost sam: pri gredi tisto, katere zunanji premer je premer gredi; pri izvrtini tisto, čigar notranji premer se ujema z njo.

Navoj se začne na odprtem koncu ploskve, kjer se del ne nadaljuje vzdolž osi: prosti konec gredi, ustje izvrtine. **Začni na drugem koncu** to obrne.

## Nastavitve

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| **Oblika** | ISO metrični (60°), M1.6 do M64 grobi; trapezni (Tr, 30°), Tr8×1.5 do Tr60×9 | ISO metrični |
| **Velikost** | Prilagodi ploskvi ali ena velikost s seznama | Prilagodi ploskvi |
| **Celotna ploskev** | Odznačite, da vnesete **Dolžino (mm)**, merjeno od začetka | Označeno |
| **Začni na drugem koncu** | Navoj teče od drugega konca ploskve | Izključeno |
| **Smer navoja** | Desni ali levi navoj | Desni |
| **Modelirano** | Vrežite pravi vijačni navoj | Izključeno |
| **Zračnost (mm)** | Prikazano, ko je označeno Modelirano: za koliko je navoj gredi manjši in navoj izvrtine večji, po vsem obodu | 0.1 |

Velikost, ki ne ustreza ploskvi, se vseeno izdela, prirezana na ploskev, podokno pa to pove, na primer „Gred Ø12 mm ni M10 z Ø10 mm“. Več ploskev lahko deli eno značilko Navoj; z **Prilagodi ploskvi** ima vsaka svojo velikost.

## Modelirani navoji za 3D-tiskanje

Modelirani navoj sledi standardnemu osnovnemu profilu: ISO 68-1 za metrične navoje (ravni vrhovi in korenine, boki pod 60°), ISO 2901 za trapezne (boki pod 30°). **Zračnost** premakne celoten profil navznoter (gred) ali navzven (izvrtina), da se natisnjeni deli zavijejo skupaj:

- **0.1 do 0.2 mm** ustreza večini tiskalnikov. Najprej natisnite preizkusni vijak in matico.
- **0** je standardni profil, za strojno obdelane dele ali za preverjanje ujema.

Vijak in matica z isto zračnostjo se nikoli ne dotikata vzdolž bokov: reža med njima je dvakrat večja od zračnosti, po vsem obodu.

:::tip
Fini koraki se slabo natisnejo: M3 in manjši ali korak pod 0.5 mm je blizu tistemu, kar lahko nariše šoba 0.4 mm. Modelirajte večje navoje, za majhne uporabite vgradni vložek s segrevanjem ali izvrtino z navojem.
:::

Modelirani navoj je del telesa: izvozi STL, 3MF in STEP ga vsebujejo, orodje Meri pa ga izmeri. Del je težji za ponovno izdelavo: navoj M10 dolžine 20 ima približno 150,000 trikotnikov.

## Izvrtine z navojem

Izvrtina **Z navojem (ISO metrični)** ima prav tako stikalo **Modelirano** z enako **Zračnostjo**. Glejte [Vrtanje izvrtin in razširjenih izvrtin na točkah skice](topic:holes).

## Ko navoj ni izdelan

- „Navoj gre na okroglo ploskev (valj): gred ali izvrtina.“ Izbrana ploskev je ravna ali ukrivljena na drug način.
- „Na okroglo ploskev Ø0.6 mm ni standardne velikosti: izberite velikost.“ Prilagodi ploskvi ni našel ničesar znotraj 12 % ploskve. Izberite **Velikost** ali spremenite ploskev.
- „Ploskev, na kateri je bil ta navoj, je izginila (…). Izberite jo znova.“ Prejšnja sprememba je odstranila ploskev. Kliknite {{ui:Izberi ploskve}} in ponovno kliknite ploskev.

:::note
Palčni navoji (UNC, UNF), cevni navoji, stožčasti navoji, izteki navojev in posnetni začetki navojev še niso izdelani. Točno jedro prikaže modeliran navoj kot kozmetičen.
:::
