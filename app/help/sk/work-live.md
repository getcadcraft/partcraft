---
title: Modelovanie jednej súčiastky spolu v Live TeamWork
summary: Čo sa mení v PartCraft počas relácie Live TeamWork v CadCraft Studio: prvky všetkých v jednom strome, každé okno zostavuje to isté teleso, vlastný krok späť a pripojenie z prehliadača v tej istej sieti.
keywords: live, live teamwork, studio live, spolu, spolupráca, relácia, zdieľať naživo, pripojiť, strom prvkov, história, prepočítanie, kurzor, ukazovateľ, vidieť jeden druhého, mená, farba, výber, späť, hostiteľ
from: 1809b96c
---

## Čo sa naučíte

Čo sa deje so súčiastkou, keď na nej modeluje naraz viacero ľudí. CadCraft Studio spustí a pripojí reláciu Live TeamWork (Zdieľať, Pripojiť); táto stránka je o samotnej súčiastke.

## Všetci modelujú naraz

Všetci pracujú na tom istom strome prvkov: náčrty, vytiahnutia, otvory, vzory, zaoblenia, parametre. Vaše vlastné úpravy sa zobrazia hneď; úpravy ostatných sa objavia chvíľu po tom, ako ich urobia. Cestuje iba strom: každé okno zostaví teleso samo a jadro PartCraft zostaví rovnaké teleso z rovnakého stromu v každom okne.

- **Dvaja ľudia zmenia jeden prvok:** rôzne nastavenia (jeden hĺbku, druhý podmienku konca) sa zachovajú obe; rovnaké nastavenie platí pre neskoršiu zmenu.
- **Náčrt** cestuje celý: keď dvaja ľudia upravia jeden náčrt naraz, vyhrá neskoršia úprava. Dohodnite sa, kto kreslí ktorý náčrt.
- **Prvok postavený na niečom, čo niekto práve zmazal** (vytiahnutie odstráneného náčrtu, otvor na odstránenej ploche), sa vráti späť a stavový riadok povie prečo.
- **Zmena poradia stromu** sa kontroluje: ak dvaja ľudia potiahnu prvky v rovnakom okamihu, druhý presun sa vráti späť.

## Vidieť jeden druhého

Každý v relácii má vlastnú farbu. Ukazovateľ každej osoby vidíte ako šípku v jej farbe s jej menom vedľa, na ploche, na ktorú ukazuje. Keď má v strome vybraný prvok, za jej menom sa zobrazí jeho názov.

Ukazovatele, mená a výbery platia iba pre reláciu: nikdy sa neukladajú v súbore a nikdy sa nedostanú do ničieho kroku späť. Plynule sa presúvajú na miesto, kde je každý, takže zostávajú hladké aj na pomalom pripojení.

## Krok späť vráti vašu vlastnú prácu

{{key:Mod+Z}} vráti späť vašu vlastnú poslednú úpravu a ostatné nechá na pokoji. Keď niekto medzitým zmenil to isté, nič sa nevráti späť a stavový riadok povie, kto.

## Pripojenie z prehliadača

Člen tímu bez Studia môže naskenovať obrázok pod kódom hostiteľa telefónom, tabletom alebo počítačom v tej istej sieti. PartCraft sa otvorí v prehliadači, po tom, ako hostiteľ vás pustí dnu, naplní sa súčiastkou hostiteľa a zostaví ju. Pozvánkový odkaz umožní pripojiť sa z inej siete: hostiteľ potrebuje miesto v pláne Team Cloud pre aplikáciu, ostatní sa pripájajú zadarmo, a odkaz funguje iba kým je relácia hostiteľa otvorená.

## Keď relácia skončí

Súčiastku uloží iba hostiteľ. Všetci ostatní si ponechajú neuloženú kópiu: ak ju chcete zachovať, uložte ju.

:::note
Zostavy sa v relácii zatiaľ nezdieľajú: na spoločnú prácu otvorte samotnú súčiastku.
:::
