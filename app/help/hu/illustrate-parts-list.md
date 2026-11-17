---
title: Alkatrészlista és pozíciószámok
summary: A pozíciószámok egyszer kapnak számot, és soha nem használják fel újra. Egy kattintással az adott nézetben látható minden alkatrészt megszámozhat, a nézetre szűrt alkatrészlistát megjelenítheti, kiválaszthatja az oszlopait, és CSV-ként mentheti.
keywords: illusztrálás, anyagjegyzék, alkatrészlista, pozíciószám, cikkszám, mennyiség, csv, táblázat
from: 414332a8
---

Az {{ui:Alkatrészlista}} szakasz felsorolja az alkatrészeket: soronként egy alkatrész a mennyiségével (egy alkatrész példányai, illetve az azonos alkatrészszámú és alakú alkatrészek egy sorba kerülnek). A {{ui:Lista}} beállítás dönti el, hogy ebben a nézetben látható (nem rejtett, nem szellem) alkatrészek vagy minden alkatrész szerepeljen-e.

## Pozíciószámok

A {{ui:A megjelenített alkatrészek pozíciószámozása}} minden sorhoz számot rendel (a következő szabad számot), és az alkatrész példányai közül a legközelebbihez egy pozíciószámot tesz, a modell körüli körön. A pozíciószámot húzással mozgathatja.

Egy szám mindig ugyanahhoz az alkatrészhez tartozik: ha később alkatrészek kerülnek be, azok új számot kapnak, és egy számot akkor sem adnak másik alkatrésznek, ha az eredeti alkatrészt már eltávolították.

## A nézetben és CSV-ként

Jelölje be az {{ui:Az alkatrészlista megjelenítése ebben a nézetben}} beállítást, hogy a táblázat a képen legyen (húzással sarokba helyezhető). Az {{ui:Oszlopok}} pontban válassza ki a megjelenítendő oszlopokat (az alkatrész saját tulajdonságai is felajánlva), és azt, hogy a nézet alkatrészeit vagy minden alkatrészt listázza-e. A {{ui:Mentés CSV-ként}} gomb a listát táblázatkezelőbe írja; a képletre hasonlóan kezdődő szöveget úgy írja, hogy a táblázatkezelő ne hajtsa végre.
