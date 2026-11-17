---
title: Napíšte a spustite skripty (pracovný priestor Skript)
summary: Pracovný priestor Skript krok za krokom: napíšte skript CraftScript alebo Lua, spustite ho klávesom F5, čítajte konzolu, uchovajte výsledky v premenných pre ďalší skript, zobrazte siete, polia a grafy, zastavte beh a ukladajte skripty spolu s časťou.
keywords: skript, skriptovanie, skriptovanie počas modelovania, vybrať do okna, druhá obrazovka, druhý monitor, param, params, parametre v skriptoch, CraftScript, Lua, kód, program, editor, konzola, REPL, príkazový riadok, spustiť, F5, spustiť výber, zastaviť, premenné, pracovný priestor, graf, pole, sieť, legenda, podzobrazenie, analýza, automatizácia, matica, numerický
from: d0003e89
---

**Ukážka.** Skriptovanie je nové v PartCraft 0.3 a je to ukážka: jazyk, knižnica aj spôsob ukladania skriptov sa môžu ešte zmeniť a skripty napísané teraz môžu neskôr potrebovať malé úpravy. Dajte nám vedieť, čo sa pokazí.

Pracovný priestor Skript spúšťa vaše vlastné výpočty vedľa časti: malé súčty, celé analýzy alebo skripty z [knižnice analýz](topic:craftscript-library). Skripty sa píšu v **CraftScripte** (maticový jazyk veľmi podobný MATLABu, pozri [Jazyk CraftScript](topic:craftscript-language)), v **Lua** (pozri [Skripty v Lua](topic:craftscript-lua)) alebo v **Pythone** (pozri [Skripty v Pythone](topic:craftscript-python)).

Vyberte {{ui:Skript}} v poli **Pracovný priestor** na ľavej strane panela nástrojov. Časť sa nezmení. Pravý panel sa stane panelom skriptov (širším ako zvyčajne; potiahnite jeho okraj, ak ho chcete zmeniť, alebo ho presuňte na druhú obrazovku cez jeho ponuku {{ui:⋯}}, pozri [Usporiadanie panelov](common:arrange-panels)).

## Skriptujte počas modelovania

Nemusíte opustiť pracovný priestor Návrh, aby ste napísali skript. V Návrhu obsahuje pravý panel kartu {{ui:Skript}} s rovnakým editorom, konzolou, premennými a knižnicou, s tými istými skriptami. Strom prvkov a zobrazenie fungujú ďalej: kliknutím vyberte prvok, dvojklikom na náčrt ho upravte, otáčajte pohľad, potom sa vráťte na kartu {{ui:Skript}} a stlačte {{key:F5}}.

Čo skript **zobrazí** (siete, polia, grafy, tabuľky), sa v Návrhu nekreslí nad vaším modelom: konzola to uvedie a pracovný priestor Skript má všetko, keď prepnete naň.

{{ui:Vybrať do okna}}, vedľa {{ui:Spustiť}}, presunie celý panel do vlastného okna, napríklad na druhú obrazovku, takže editor a celé zobrazenie budú vedľa seba. {{ui:Vrátiť späť}} ho opäť ukotví. Pozri [Usporiadanie panelov](common:arrange-panels).

## Spustite prvý skript

1. Napíšte do editora, napríklad:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Stlačte {{key:F5}} (alebo {{ui:Spustiť}}). Konzola pod editorom ukáže, čo skript vypísal, a „Hotovo za … s“. Graf sa objaví v **podzobrazeniach** pozdĺž spodku 3D zobrazenia.
3. Riadok bez bodkočiarky vypíše svoju hodnotu, ako v MATLABe: `a = 3` vypíše `a = 3`; `a = 3;` nevypíše nič.
4. Ak chcete spustiť len časť skriptu, vyberte jeho riadky a stlačte {{key:Mod+Enter}} ({{ui:Výber}}). Bez výberu sa spustí riadok, na ktorom je kurzor.
5. Riadok na spodku konzoly (za `>>`) spustí jeden príkaz, keď stlačíte {{key:Enter}}. {{key:Up}} a {{key:Down}} vrátia predchádzajúce riadky.

## Hľadanie, zbaľovanie a dopĺňanie

- **Hľadanie a nahradenie.** Stlačte {{key:Mod+F}} (alebo {{key:Mod+H}} na nahradenie). Nad kódom sa otvorí lišta: napíšte, čo hľadať; zhody sa zvýraznia a počet ukáže, kde ste. Tlačidlá vedľa poľa rozlišujú veľkosť písmen (**Aa**), hľadajú len celé slová (**W**) a používajú regulárny výraz (**.\***; v nahradení `$1` vráti to, čo zachytila prvá skupina). {{ui:Nahradiť}} nahradí aktuálnu zhodu, {{ui:Všetky}} nahradí každú zhodu ako jeden krok {{key:Mod+Z}}.
- **Zbaľovanie.** Kliknite na ▾ vedľa čísla riadku alebo stlačte {{key:Mod+Shift+[}} s kurzorom na riadku `function`, `if`, `for`, `while`, `switch` alebo `try` (Lua: `function`, `do`, `if`, `repeat`), aby sa jeho vnútorné riadky schovali; riadok povie, koľko ich je. ▸ alebo {{key:Mod+Shift+]}} ho znova otvorí. Zbalenie len skrýva riadky: Spustiť, Uložiť, kopírovanie aj čísla riadkov stále rátajú všetky riadky a písanie na zbalenom riadku ho najprv otvorí.
- **Dopĺňanie.** Napíšte dve písmená názvu alebo stlačte {{key:Mod+Space}}: zobrazí sa zoznam premenných, funkcií jazyka (s ich argumentmi), kľúčových slov a názvov už použitých v skripte. Vyberajte šípkami a potvrďte {{key:Enter}} alebo {{key:Tab}}.

## Keď sa niečo pokazí

- Chyba pomenuje problém a svoj riadok: riadok sa v editore označí červenou a **Riadok n** v konzole vás tam zavedie.
- Slučka, ktorá nikdy neskončí: stlačte {{ui:Zastaviť}} (na paneli nástrojov alebo v paneli). Skript sa zastaví okamžite; premenné si ponechajú hodnoty, ktoré mali pred tým behom.
- Každý beh má aj rozpočet krokov (predvolene 2 miliardy krokov; zmeňte ho v **Možnosti spustenia** v paneli). Beh, ktorý ho prekročí, sa zastaví s hlásením.

## Premenné sa prenášajú zo skriptu do skriptu

Každá premenná najvyššej úrovne, ktorú skript vytvorí, sa objaví na karte **Premenné** (názov, typ, veľkosť, najmenšia a najväčšia hodnota) a zostáva tam pre ďalší skript, v ktoromkoľvek jazyku. Vďaka tomu jeden skript vytvorí sieť, ďalší ju vyrieši a tretí vykreslí graf.

- Kliknutím na premennú ju zobrazíte: siete, polia a modely v 3D zobrazení, polia ako tabuľka (plus čiarový graf pre vektor alebo farebná mapa pre maticu) v podzobrazeniach.
- {{ui:Uložiť ako JSON}}, {{ui:Uložiť ako CSV}} (tabuľka čísel) a {{ui:Uložiť ako HDF5}} ju stiahnu; {{ui:Zmazať}} ju odstráni; {{ui:Vymazať všetko}} vyprázdni pracovný priestor.
- Zaškrtnite **Uložiť premenné spolu s časťou**, aby sa uchovali v súbore časti (až 32 MB; väčšie zostanú len pre túto návštevu). Keď otvoríte takú časť, panel ponúkne ich načítanie.

## Siete, polia a grafy

- `show(m)` kreslí sieť; `show(f)` vyfarbí pole na jeho sieti s legendou. Zoznam **Zobrazené** vľavo hore v zobrazení skryje ({{ui:oko}}) alebo odstráni každú položku a skryje alebo zobrazí samotnú časť. Pod legendou napíšte rozsah (**Od**, **do**) alebo stlačte {{ui:Auto}}; vektorové alebo napäťové pole ponúka aj výber zložky na zobrazenie.
- `show(f, 'deform', u, 'scale', 50)` kreslí sieť posunutú poľom posunov `u`, zväčšenú 50-krát (bez `scale` asi 8 % veľkosti modelu).
- Kliknite na zobrazenú sieť: najbližší uzol, prvok a hodnoty poľa v ňom sa objavia v podzobrazeniach (**Vybrané**).
- `plot`, `imagesc` a `table` dajú čiarový graf, farebnú mapu 2-D poľa alebo tabuľku do podzobrazení. Graf s rovnakým `'id'` (alebo názvom) ako predchádzajúci ho nahradí, takže slučka môže aktualizovať jediný graf konvergencie; `'append', true` k nemu pridá krivku. {{ui:Vymazať}} vyprázdni podzobrazenia; šípka ich zbalí.
- Pri dvoch alebo viacerých grafoch zobrazí {{ui:Vedľa seba}} všetky naraz (najnovších šesť); kliknutie na záložku tabuľky alebo obrázka zobrazí len ju.
- Každý graf má pod sebou {{ui:PNG}}, {{ui:SVG}} a {{ui:CSV}}. PNG a SVG ho vytlačia na bielo v farbách papiera bez ohľadu na motív (PNG 1600 × 1000 pixelov; SVG sa škáluje bez rozmazania); CSV obsahuje jeho čísla so všetkými číslicami: jeden stĺpec x a stĺpec pre každú krivku, keď krivky zdieľajú x, inak jeden riadok na bod s menom krivky.
- {{key:F}} alebo {{ui:Prispôsobiť}} prispôsobí zobrazenie tomu, čo je zobrazené.

## Súbory

- {{ui:Otvoriť}} v skupine Skript (alebo pretiahnite súbory na zobrazenie či panel): súbory `.craft`, `.lua` a `.py` sa otvoria ako nové skripty (nespustia sa); dátové súbory (STL, OBJ, CSV, JSON, NPY, HDF5) sa načítajú do premenných pod svojím názvom súboru.
- {{ui:Uložiť}} v skupine Skript stiahne aktuálny skript ako súbor.
- {{ui:Nový}} v skupine Skript (alebo {{ui:+}} pri kartách) spustí ďalší skript. Dvojklikom na kartu ju premenujte; jej {{ui:×}} ju odstráni (dá sa to vrátiť späť).

## Čítanie parametrov časti

Skript číta parametre časti (pozri [Riadenie časti parametrami](topic:parameters)) podľa názvu:

```
w = param('width');     % hodnota jedného parametra v mm (alebo stupne, alebo obyčajné číslo)
p = params();           % všetky, ako štruktúra: p.width, p.height
```

V Lua a Pythone sú to `cs.param('width')` a `cs.params()`. Skripty len čítajú parametre: menia sa na karte {{ui:Parametre}}. Pod kartou skriptu riadok uvádza parametre, ktoré číta cez `param('…')`, a označí tie, ktoré časť nemá; karta {{ui:Parametre}} uvádza skript pri každom z nich. Názov vytvorený počas behu skriptu, napríklad `param(name)`, sa v zozname nezobrazí.

## Skripty sa ukladajú v časti

Každý skript na kartách sa uchová v časti, takže {{ui:Uložiť}} v skupine Súbor ich uloží spolu s ňou a zmeny v nich sa dajú vrátiť späť. Otvorenie časti **nikdy nespustí jej skripty**: konzola povie, koľko ich obsahuje, a spustia sa, až keď stlačíte {{ui:Spustiť}}. Časť od niekoho iného môže obsahovať akýkoľvek skript: prečítajte si ho skôr, než ho spustíte. Skripty bežia na tomto počítači na pozadí bez prístupu na sieť a nemôžu siahnuť na stránku.

## Súvisiace

- [Jazyk CraftScript](topic:craftscript-language)
- [Skripty v Lua](topic:craftscript-lua)
- [Skripty v Pythone](topic:craftscript-python)
- [Knižnica analýz](topic:craftscript-library)
- [Napíšte vlastnú analýzu](topic:craftscript-own-analysis)
