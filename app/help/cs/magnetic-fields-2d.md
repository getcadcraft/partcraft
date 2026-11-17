---
title: Magnetická pole ve 2D (návod)
summary: Spočítejte magnetické pole elektromagnetu nebo permanentního magnetu pomocí výpočetní knihovny: spusťte příklady, přečtěte hustotu toku, pole v mezeře, indukčnost a přítažlivou sílu, změňte návrh a vytvořte vlastní model cívek, magnetů a železa.
keywords: magnetický, magnetostatika, magnetické pole, hustota toku, tesla, elektromagnet, solenoid, cívka, ampérzávity, železné jádro, vzduchová mezera, permeabilita, indukčnost, magnetická síla, reluktance, magnetický obvod, vektorový potenciál, elektromagnetika, konečné prvky, fem, motor, pohon, transformátor, magnetostatic2d, permanentní magnet, neodym, ndfeb, ferit, remanence, pracovní bod, zpětná linie, únik, držák magnet
from: 215f6601
---

Výpočetní knihovna PartCraftu umí spočítat magnetické pole cívek a železa ve 2D: příčný řez něčím dlouhým a stejným po celé délce, jako elektromagnet, jádro transformátoru, přípojnice nebo příčný řez motoru. Tento návod spustí příklad elektromagnetu z knihovny, přečte, co říká, ukáže, jak příklad změnit a jak modelovat vlastní tvar, a pak přidá permanentní magnet.

Používá pracovní prostor Script a [výpočetní knihovnu](topic:craftscript-library). Abyste ho mohli sledovat, nemusíte znát jazyk CraftScript; příklad říká, co dělá každý řádek.

## Co se modeluje

Železné jádro tvaru C, venku 100 × 80 mm a tlusté 20 mm, s 2 mm vzduchovou mezerou v pravém rameni. Cívka o 100 závitech s proudem 10 A (1000 ampérzávitů) je navinuta kolem levého ramene. Všechno je dlouhé ve směru kolmo na obrazovku, takže odpovědi jsou **na metr hloubky**: pro skutečný magnet je vynásobte skutečnou hloubkou.

Funkce `magnetostatic2d` knihovny řeší magnetický vektorový potenciál na síti čtverců 1 mm v krabici vzduchu kolem magnetu a z něj pak spočítá hustotu toku **B** (v teslách).

## Spuštění příkladu

1. Vyberte **Script** v poli **Pracovní prostor** vlevo na panelu nástrojů.
2. Otevřete záložku **Knihovna** v panelu skriptu, pak **Příklady** › **Elektromagnet: pole, mezera, indukčnost**.
3. Klikněte na {{ui:Otevřít (jen ke čtení)}} a stiskněte {{key:F5}}.

Za sekundu nebo dvě plátno zobrazí hustotu toku a konzole vypíše:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Graf pod plátnem je svislá hustota toku B_y podél střední čáry jádra zleva doprava: asi −0.55 T v levém rameni (tok jím teče dolů), téměř nic v okně a +0.55 T v pravém rameni a přes mezeru (tok se vrací nahoru). Stejný tok prochází železem i mezerou, takže obě ramena a mezera ukazují téměř stejnou hodnotu.

## Čtení výsledků

- **Pole v mezeře** je 0.543 T. Výpočet z ruky bere jádro jako jeden magnetický obvod, B = μ0 N I / (g + l / μr), kde g je mezera, l délka dráhy železem a μr relativní permeabilita železa; dává 0.552 T. Pole je o něco nižší než výpočet z ruky, protože tok se vyboulí kolem mezery (okrajový jev) a část toku se zkratuje přes okno (únik). Při menší mezeře nebo jemnější síti se obě hodnoty přiblíží.
- **Indukčnost** cívky o 100 závitech je 0.154 H na metr hloubky, z energie uložené v poli. Vzorec obvodu dává méně (0.110 H/m), protože počítá jen tok přes mezeru, ne tok, který mezerou uniká.
- **Přítažlivá síla**, která mezeru uzavírá, je B² w / (2 μ0) pro stěnu mezery širokou w: asi 2300 N na metr, nebo 117 N pro magnet hluboký 50 mm.
- **Špička** 1.97 T je ve vnitřních rozích okna, kde se tok prudce láme. Model bere železo jako lineární; skutečný elektrotechnický plech se nasycuje asi při 1.5 až 2 T, takže hodnoty nad tím berte jako varování, ne jako odpověď.

:::note
Vlastní testy knihovny spouštějí tento příklad a při každé změně PartCraftu kontrolují pole v mezeře proti vzorci magnetického obvodu. Metoda, její odkazy a další kontroly (dlouhý solenoid, solenoid s železným jádrem) jsou v záhlaví `magnetostatic2d`: klikněte na něj v knihovně.
:::

## Změna návrhu

1. Klikněte na {{ui:Vytvořit kopii}} nad skriptem jen ke čtení. Kopie se uloží s vaším dílem.
2. Změňte hodnotu nahoře a znovu stiskněte {{key:F5}}. Zkuste:
   - `g = 0.001;` — poloviční mezera: pole v mezeře téměř zdvojnásobí a stejně tak síla (roste s B²).
   - `mur = 200;` — horší jádro: více ampérzávitů se spotřebuje v železe.
   - `N = 200;` — dvojnásobek závitů: dvojnásobné pole, čtyřnásobná indukčnost.
   - `h = 0.0005;` — jemnější síť: přesnější odpovědi, asi čtyřnásobný čas.

Každé spuštění nahradí plátno. Proměnné, které skript vytvořil (například `Bgap`, `L`, `F`), zůstanou v seznamu **Proměnné** pro vaše vlastní výpočty.

## Vlastní tvar

Příklad staví vše ze tří seznamů, jedna hodnota na čtverec sítě, které můžete vytvořit pro libovolný tvar nakreslený přímkami podél sítě:

- **Kde je železo:** `iron` je pravda pro čtverce uvnitř jádra. Příklad jej vytvoří z obdélníků: `frame & ~window & ~gap` znamená "v rámu, ne v okně, ne v mezeře".
- **Permeabilita:** `1 + (mur - 1) * iron` je 1 ve vzduchu a `mur` v železe. Několik materiálů dostane vlastní hodnoty stejným způsobem.
- **Proud:** `J` je proudová hustota v ampérech na metr čtvereční, kladná směrem z obrazovky, záporná do ní. Cívka má dvě strany s opačnými znaménky; příklad spočítá `J0` tak, aby jedna strana nesla N I.

Pak `r = magnetostatic2d(m, permeability, J)` ji vyřeší. `r.B` je hustota toku v každém čtverci (dva sloupce, x a y), `r.Bmag` její velikost, `r.energy` uložená energie na metr. `plot(x, y)` nakreslí čáru.

Knihovna pracuje v metrech a pohled v milimetrech, takže pole zobrazené tak, jak je, by se nakreslilo tisíckrát menší. Příklad jej ukazuje na kopii sítě v milimetrech (`mm = quadGrid(…)`, pak `show(field(mm, …))`): zkopírujte tyto dva řádky.

Ve výchozím nastavení okraj krabice pole zadrží: žádný tok jí neopustí. Udělejte krabici alespoň dvakrát nebo třikrát větší než magnet, aby to pole nestlačilo. U symetrického magnetu můžete modelovat jen jeho polovinu: záhlaví `magnetostatic2d` říká, jakou okrajovou podmínku použít na ose symetrie.

## Permanentní magnety

Druhý příklad, **Příklady** › **Permanentní magnet v železném jádře: pracovní bod, únik, přítažlivá síla**, je stejné jádro bez cívky, kde je 10mm plátek levého ramene nahrazen magnetem zmagnetovaným nahoru. Spusťte jej klávesou {{key:F5}}. Vypíše:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Pracovní bod.** Magnet je popsán svou **remanencí** Br (polem, které si zachová, když je zkratován železem: asi 1.2 T pro slinutý NdFeB magnet, 0.4 T pro ferit) a svou zpětnou permeabilitou (asi 1.05 a 1.1). Otevření mezery jej posune dolů po jeho zpětné linii: zde na 1.04 T, s H směřujícím proti B uvnitř něj.
- **Únik.** Výpočet z ruky bez úniku dává v mezeře 0.97 T; model dává 0.68 T. Magnet žene svůj tok silným tlakem na krátké délce, takže velká jeho část se vrací přímo přes okno místo mezerou. Faktor úniku říká, kolik: zde 1.53. Pro uzavřený zámek nastavte `g = 0;`: magnet pak pracuje do půl procenta od výpočtu z ruky.
- **Magnety ve vlastním modelu.** Předejte `magnetostatic2d` magnety jako `struct('Br', Br)`, kde `Br` má jeden řádek na čtverec sítě s remanencí podél x a y v teslách (nula mimo magnety), a čtvercům magnetu dejte jejich zpětnou permeabilitu v seznamu permeability:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T nahoru ve čtvercích, kde je mag pravda
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  U magnetu zmagnetovaného pod úhlem dejte do dvou sloupců `Br·cos(angle)` a `Br·sin(angle)`; u prstence zmagnetovaného směrem ven spočítejte směr každého čtverce z jeho polohy. `r.H` dává intenzitu pole H v každém čtverci.

Model udrží magnet na jeho přímé zpětné linii, ať je poháněn jakkoli silně. Skutečný magnet, který je poháněn za své koleno (velkou mezerou, silnou cívkou nebo teplem), ztratí část své síly navždy; zkontrolujte pracovní bod podle křivky výrobce pro daný typ a teplotu.

Testy knihovny kontrolují magnety proti dvěma výsledkům z ruky: kulatý magnet na volném vzduchu (uvnitř B = Br / (1 + μr)) a magnet uzavřený železným zámkem (magnetický obvod), obojí do 1 %.

## Co zatím nedělá

- **Nasycení.** Železo je lineární: dvojnásobný proud, dvojnásobné pole, bez omezení.
- **Odmagnetování.** Magnety zůstávají na přímé zpětné linii (viz výše).
- **Vířivé proudy** a **ztráty** (ztráty v železe, ztráty v mědi).
- **Pohyblivé části a moment.** Žádný rotor otáčející se ve statoru, žádný moment proti úhlu.
- **Kulaté tvary.** Síť je ze stejných čtverců, takže zakřivené obrysy vyjdou schodovitě.
- **3D.** Vše je příčný řez něčím dlouhým.

Návrh motoru (otáčející se rotor, moment a ztráty ve 2D) se zvažuje pro pozdější verzi. Viz [Ještě není hotovo](topic:not-built-yet).
