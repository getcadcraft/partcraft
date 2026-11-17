---
title: Magnetické polia v 2D (návod)
summary: Vypočítajte magnetické pole elektromagnetu alebo trvalého magnetu s analytickou knižnicou: spustite príklady, prečítajte hustotu toku, pole v medzere, indukčnosť a prítlak, zmeňte návrh a vytvorte vlastný model cievok, magnetov a železa.
keywords: magnetický, magnetostatika, magnetické pole, hustota toku, tesla, elektromagnet, solenoid, cievka, ampérzávity, železné jadro, vzduchová medzera, permeabilita, indukčnosť, magnetická sila, reluktancia, magnetický obvod, vektorový potenciál, elektromagnetika, konečné prvky, fem, motor, aktuátor, transformátor, magnetostatic2d, trvalý magnet, neodým, NdFeB, ndfeb, ferit, remanencia, pracovný bod, spätný chod, únik, držiak magnetu
from: 215f6601
---

Analytická knižnica PartCraft dokáže vypočítať magnetické pole cievok a železa v 2D: prierez niečoho, čo je dlhé a po celej dĺžke rovnaké, napríklad elektromagnetu, jadra transformátora, prúžku zbernice alebo prierezu motora. Tento návod spustí príklad elektromagnetu z knižnice, prečíta, čo hovorí, ho zmení, ukáže, ako modelovať vlastný tvar, a potom pridá trvalý magnet.

Používa pracovný priestor Skript a [analytickú knižnicu](topic:craftscript-library). Na sledovanie nemusíte poznať jazyk CraftScript; príklad vysvetľuje, čo robí každý riadok.

## Čo sa modeluje

Jadro v tvare C, vonkajšie rozmery 100 × 80 mm a hrúbka 20 mm, so vzduchovou medzerou 2 mm v pravom ramene. Cievka so 100 závitmi s prúdom 10 A (1000 ampérzávitov) je navinutá okolo ľavého ramena. Všetko je dlhé v smere von z obrazovky, takže odpovede sú **na meter hĺbky**: na skutočný magnet ich vynásobte skutočnou hĺbkou.

`magnetostatic2d` z knižnice rieši magnetický vektorový potenciál na mriežke štvorcov 1 mm v boxe vzduchu okolo magnetu a potom z neho vypočíta hustotu toku **B** (v teslách).

## Spustenie príkladu

1. Vyberte **Skript** v poli **Pracovný priestor** naľavo na paneli nástrojov.
2. Otvorte kartu **Knižnica** v paneli skriptu, potom **Príklady** › **Elektromagnet: pole, medzera, indukčnosť**.
3. Kliknite na {{ui:Otvoriť (len na čítanie)}}, potom stlačte {{key:F5}}.

Za sekundu-dve plátno zobrazí hustotu toku a konzola vypíše:

```
B v medzere 0.5427 T; magnetický obvod 0.5516 T (-1.6 %: rozptyl a únik)
indukčnosť 0.1539 H na meter hĺbky; obvod dáva 0.1103 H/m, bez toku, ktorý uniká cez medzeru
uložená energia 7.694 J/m; |B| dosahuje 1.97 T vo vnútorných rohoch okna (skutočná oceľ by tam saturovala)
prítlak cez medzeru asi 2343 N na meter hĺbky (117.2 N pre hĺbku 50 mm)
```

Graf pod plátnom je vertikálna hustota toku B_y pozdĺž strednej čiary jadra, zľava doprava: asi −0.55 T v ľavom ramene (tok ním ide dole), takmer nič v okne a +0.55 T v pravom ramene a cez medzeru (tok sa vracia hore). Ten istý tok prechádza železom aj medzerou, takže obe ramená a medzera ukazujú takmer rovnakú hodnotu.

## Čítanie výsledkov

- **Pole v medzere** je 0.543 T. Ručný výpočet berie jadro ako jeden magnetický obvod, B = μ0 N I / (g + l / μr), kde g je medzera, l dĺžka dráhy cez železo a μr relatívna permeabilita železa; dáva 0.552 T. Pole je o trochu nižšie než ručný výpočet, lebo tok sa vyklenie okolo medzery (rozptyl) a časť toku si skráti cestu cez okno (únik). S menšou medzerou alebo jemnejšou mriežkou sa obe hodnoty priblížia.
- **Indukčnosť** cievky so 100 závitmi je 0.154 H na meter hĺbky, z energie uloženej v poli. Vzorec obvodu dáva menej (0.110 H/m), lebo počíta len tok cez medzeru, nie tok, ktorý ju obchádza.
- **Prítlak**, ktorý uzatvára medzeru, je B² w / (2 μ0) pre čelo medzery šírky w: asi 2300 N na meter alebo 117 N pre magnet hĺbky 50 mm.
- **Vrchol** 1.97 T je vo vnútorných rohoch okna, kde tok prudko zatáča. Model považuje železo za lineárne; skutočný elektroplech saturuje pri asi 1.5 až 2 T, takže hodnoty nad tým berte ako varovanie, nie ako odpoveď.

:::note
Testy knižnice spúšťajú tento príklad a pri každej zmene PartCraft kontrolujú pole v medzere voči vzorcu magnetického obvodu. Metóda, jej referencie a ďalšie kontroly (dlhý solenoid, solenoid s železným jadrom) sú v hlavičke `magnetostatic2d`: kliknite na ňu v knižnici.
:::

## Zmena návrhu

1. Kliknite na {{ui:Vytvoriť kópiu}} nad skriptom len na čítanie. Kópia sa uloží so súčiastkou.
2. Zmeňte hodnotu v hornej časti a znova stlačte {{key:F5}}. Skúste:
   - `g = 0.001;` — polovica medzery: pole v medzere takmer zdvojnásobí a s ním aj prítlak (ide s B²).
   - `mur = 200;` — horšie jadro: viac ampérzávitov sa minie v železe.
   - `N = 200;` — dvojnásobok závitov: dvojnásobné pole, štvornásobná indukčnosť.
   - `h = 0.0005;` — jemnejšia mriežka: presnejšie výsledky, asi štvornásobný čas.

Každý beh nahradí plátno. Premenné, ktoré skript vytvoril (napríklad `Bgap`, `L`, `F`), zostanú v zozname **Premenné** pre vaše vlastné výpočty.

## Vytvorenie vlastného tvaru

Príklad postaví všetko z troch zoznamov, jedna hodnota na štvorec mriežky, a takto môžete postaviť ľubovoľný tvar nakreslený priamymi čiarami pozdĺž mriežky:

- **Kde je železo:** `iron` je pravda pre štvorce vo vnútri jadra. Príklad ho postaví z obdĺžnikov: `frame & ~window & ~gap` znamená „v ráme, nie v okne, nie v medzere“.
- **Permeabilita:** `1 + (mur - 1) * iron` je 1 vo vzduchu a `mur` v železe. Viac materiálov dostane svoje hodnoty rovnakým spôsobom.
- **Prúd:** `J` je hustota prúdu v ampéroch na meter štvorcový, kladná von z obrazovky, záporná dnu. Cievka má dve strany s opačnými znamienkami; príklad vypočíta `J0` tak, aby jedna strana niesla N I.

Potom `r = magnetostatic2d(m, permeability, J)` ho vyrieši. `r.B` je hustota toku v každom štvorci (dva stĺpce, x a y), `r.Bmag` jej veľkosť, `r.energy` uložená energia na meter. `plot(x, y)` nakreslí čiaru.

Knižnica pracuje v metroch a zobrazenie v milimetroch, takže pole zobrazené tak, ako je, by bolo nakreslené tisíckrát menšie. Príklad ho ukazuje na kópii mriežky v milimetroch (`mm = quadGrid(…)`, potom `show(field(mm, …))`): skopírujte tieto dva riadky.

Štandardne okraj boxu drží pole vnútri: žiadny tok z neho neunikne. Urobte box aspoň dvo- alebo trojnásobne väčší než magnet, aby to pole nestlačilo. Pre symetrický magnet môžete modelovať polovicu: hlavička `magnetostatic2d` hovorí, akú okrajovú podmienku použiť na osi symetrie.

## Trvalé magnety

Druhý príklad, **Príklady** › **Trvalý magnet v železnom jadre: pracovný bod, únik, prítlak**, je to isté jadro bez cievky, s 10 mm plátkom ľavého ramena nahradeným magnetom zmagnetizovaným nahor. Spustite ho s {{key:F5}}. Vypíše:

```
magnet pracuje pri B = 1.036 T, H = -124 kA/m (na svojej spätnej čiare B = Br + μ0 μr H)
B v medzere 0.6778 T; magnetický obvod bez úniku 0.9692 T (-30.1 %)
faktor úniku 1.53: z toku opúšťajúceho magnet 65 % prechádza medzerou medzi pólovými plochami
prítlak cez medzeru asi 3656 N na meter hĺbky (182.8 N pre hĺbku 50 mm)
```

- **Pracovný bod.** Magnet je opísaný **remanenciou** Br (pole, ktoré si zachová, keď je skratovaný železom: asi 1.2 T pre spekaný NdFeB magnet, 0.4 T pre ferit) a svojou spätnou permeabilitou (asi 1.05 a 1.1). Otvorenie medzery ho posunie dole po jeho spätnej čiare: tu na 1.04 T, pričom H smeruje proti B vnútri neho.
- **Únik.** Ručný výpočet bez úniku dáva v medzere 0.97 T; model dáva 0.68 T. Magnet žene svoj tok silným tlakom na krátkej dĺžke, takže veľa z neho ide priamo späť cez okno namiesto cez medzeru. Faktor úniku hovorí, koľko: tu 1.53. Nastavte `g = 0;` pre uzavretý držiak: magnet potom pracuje do pol percenta ručného výpočtu.
- **Magnety vo vlastnom modeli.** Dajte `magnetostatic2d` magnety ako `struct('Br', Br)`, kde `Br` má jeden riadok na štvorec mriežky s remanenciou pozdĺž x a y v teslách (nula mimo magnetov), a štvorcom magnetov dajte ich spätnú permeabilitu v zozname permeabilít:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T nahor v štvorcoch, kde je mag pravda
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Pre magnet zmagnetizovaný pod uhlom dajte `Br·cos(angle)` a `Br·sin(angle)` do dvoch stĺpcov; pre prstenec zmagnetizovaný smerom von vypočítajte smer každého štvorca z jeho polohy. `r.H` dáva silu poľa H v každom štvorci.

Model drží magnet na jeho priamej spätnej čiare bez ohľadu na to, ako silno je poháňaný. Skutočný magnet poháňaný za svoje koleno (veľkou medzerou, silnou cievkou alebo teplom) stratí časť svojej sily navždy; pracovný bod overte voči krivke výrobcu pre daný typ a teplotu.

Testy knižnice kontrolujú magnety voči dvom ručným výsledkom: okrúhly magnet na voľnom priestranstve (vnútri B = Br / (1 + μr)) a magnet uzavretý železným držiakom (magnetický obvod), oba v rámci 1 %.

## Čo zatiaľ nerobí

- **Saturácia.** Železo je lineárne: dvojnásobný prúd, dvojnásobné pole, bez obmedzenia.
- **Odmagnetizovanie.** Magnety zostávajú na priamej spätnej čiare (pozri vyššie).
- **Vírivé prúdy** a **straty** (strata v železe, strata v medi).
- **Pohyblivé časti a moment.** Žiadny rotor otáčajúci sa v statore, žiadny moment voči uhlu.
- **Okrúhle tvary.** Mriežka je zložená z rovnakých štvorcov, takže zakrivené obrysy vyjdú schodovito.
- **3D.** Všetko je prierez niečoho dlhého.

Návrh motora (otáčajúci sa rotor, moment a straty v 2D) sa zvažuje pre neskoršiu verziu. Pozri [Ešte nie je hotové](topic:not-built-yet).
