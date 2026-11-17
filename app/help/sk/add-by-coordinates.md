---
title: Pridanie geometrie náčrtu zadaním súradníc
summary: Použite Pridať podľa súradníc na paneli náčrtu na presné umiestnenie úsečiek, osí, obdĺžnikov, kružníc a bodov, iba pomocou klávesnice.
keywords: súradnice, zadávanie z klávesnice, zadávanie čísel, presná poloha, x y, absolútne súradnice, prístupnosť, bez myši
from: 5e6c1656
---

Keď poznáte čísla, ich zadanie je rýchlejšie než klikanie a kótovanie. **Pridať podľa súradníc** je na pravom paneli vždy, keď je otvorený náčrt. Umožňuje tiež vytvoriť náčrt úplne bez ukazovacieho zariadenia.

Súradnice sú v milimetroch, v osiach samotného náčrtu: x smeruje doprava a y smeruje nahor, keď sa pozeráte na náčrt, a (0, 0) je začiatok (červený kruh s krížom).

## Pridanie tvaru

1. Otvorte náčrt (pozri [Nakreslenie prvého náčrtu](topic:sketch-basics)).
2. Na pravom paneli prejdite k **Pridať podľa súradníc**.
3. Vyberte tvar v **Pridať**: Úsečka, Os, Obdĺžnik, Kružnica alebo Bod.
4. Vyplňte polia:

| Tvar | Polia |
|---|---|
| Úsečka | **Od x, y** a **Do x, y** |
| Os | **Od x, y** a **Do x, y** |
| Obdĺžnik | **Roh x, y** a **Protiľahlý roh x, y** |
| Kružnica | **Stred x, y** a **Polomer** |
| Bod | **V x, y** |

5. Vyberte {{ui:Pridať}}, alebo stlačte {{key:Enter}} v ľubovoľnom poli.

Tvar sa objaví a stavový riadok napríklad zobrazí "Obdĺžnik bol pridaný." Polia sa vyprázdnia, pripravené na ďalší tvar. Každé pridanie je jeden krok späť.

Dvojicu zadajte ako dve čísla oddelené čiarkou alebo medzerou: `0, 0`, `25 -10` alebo `12.5,40`. Záporné čísla a desatinné čísla sú v poriadku. Polomer musí byť väčší ako nula. Ak niečo nie je čítané ako číslo, stavový riadok zobrazí: 'Súradnice zadajte ako "x, y" a polomer väčší ako nula.'

## Príklad: obrys platne s drážkou, zadaný z klávesnice

1. Otvorte náčrt na **Prednej rovine**.
2. **Pridať**: Obdĺžnik. **Roh x, y**: `-50, -30`. **Protiľahlý roh x, y**: `50, 30`. {{key:Enter}}.
3. **Pridať**: Kružnica. **Stred x, y**: `-30, 0`. **Polomer**: `5`. {{key:Enter}}.
4. **Stred x, y**: `30, 0`. **Polomer**: `5`. {{key:Enter}}.
5. Vyberte {{ui:Ukončiť náčrt}}, potom {{ui:Vytiahnuť}}: platňa 100 × 60 s dvoma otvormi s priemerom 10 mm.

## Zadaná geometria je umiestnená, nie zviazaná

Zadané súradnice umiestnia geometriu na správne miesto, ale **nie sú to väzby**. Tvary zostanú modré (nedourčené) a mohli by sa pohnúť, ak ich potiahnete alebo zmeníte inú kótu:

- zadaný obdĺžnik má vlastné rohy a vodorovné a zvislé väzby ako nakreslený, ale nič ho neviaže na začiatok;
- zadaná úsečka nemá vodorovnú ani zvislú väzbu, aj keď ste zadali vodorovnú čiaru;
- stred zadanej kružnice je voľný.

Ak chcete náčrt úplne určiť, pridajte potom kóty a väzby (pozri [Úplné určenie náčrtu](topic:relations-dimensions)). Napríklad vyberte roh obdĺžnika a začiatok a zvoľte {{ui:• Splynutie}}, alebo okótujte stredy kružníc od začiatku.

:::note
Bez ukazovacieho zariadenia sa dostanete až sem: pomocou {{key:Tab}} a šípok prejdite na riadok roviny v histórii, stlačte {{key:Enter}} na jej výber, stlačte {{key:S}} na náčrt, pridajte tu tvary a pomocou {{key:Tab}} sa dostanete na **Upraviť** pri každej kóte a na {{ui:Ukončiť náčrt}}. Výber geometrie, a teda pridávanie väzieb alebo nových kót, v tomto vydaní stále vyžaduje kliknutie alebo dotyk.
:::

## Obmedzenia

- Oblúky zatiaľ nie je možné zadať. Nakreslite ich nástrojom Oblúk alebo zadajte kružnicu a použite väzby.
- V tomto poli nie sú relatívne súradnice (od posledného bodu) ani polárne súradnice (dĺžka a uhol).
- Zadaná geometria sa neprichytáva k existujúcim bodom. Ak majú zostať spojené, zadajte rovnaké súradnice ako existujúci bod a potom medzi nimi pridajte väzbu {{ui:• Splynutie}}.
