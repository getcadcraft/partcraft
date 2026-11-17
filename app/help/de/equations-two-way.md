---
title: Gleichungen in beide Richtungen
summary: Ändern Sie einen Parameter, und das Bauteil folgt. Geben Sie eine neue Größe in eine Referenzbemaßung ein, und PartCraft berechnet den Parameter dahinter und fragt nach, welcher, wenn mehrere sich ändern könnten.
keywords: Gleichungen, rückwärts lösen, Referenzbemaßung, zwei Richtungen, umkehren, Zielwertsuche, Parameter, verknüpfte Werte, welcher Parameter
from: 82dc0269
---

Eine Gleichung wie **Extrude1 Tiefe = thick + extra** funktioniert in beide Richtungen.

## Vorwärts: den Parameter ändern

Ändern Sie auf der Registerkarte {{ui:Parameter}} `thick` von 20 auf 30. Die Tiefe von Extrude1 wird 30 + extra, und das Bauteil baut sich neu auf.

## Rückwärts: die Referenzbemaßung ändern

1. Klicken Sie im Verlauf auf „Extrude1“. Sein Feld **Tiefe (mm)** zeigt **ƒ**: eine Gleichung steuert es.
2. Geben Sie die gewünschte Größe ein, zum Beispiel `40`, und drücken Sie {{key:Enter}}.

PartCraft löst nach dem Parameter hinter der Gleichung auf, über so viele Schritte, wie nötig (`depth = hub_h`, `hub_h = disc_t + 50`: Die Eingabe einer Höhe ändert `disc_t`). Die Statusleiste sagt, was sich geändert hat, zum Beispiel dass extra von 5 auf 15 gewechselt ist.

Wenn zwei oder mehr Parameter die Zahl steuern, fragt ein Feld **Welcher Parameter soll sich ändern?** und listet sie auf. Klicken Sie auf einen; die anderen behalten ihre Werte. {{ui:Abbrechen}} ändert nichts.

Dasselbe funktioniert in einer Skizze: Doppelklicken Sie auf eine Referenzbemaßung, geben Sie einen Wert ein und drücken Sie {{key:Enter}}. Es funktioniert auch in der Spalte **Wert** der Parametertabelle, für einen Parameter, der selbst ein Ausdruck ist.

## Wenn es nicht geht

- Eine Zahl, die ganzzahlig sein muss (eine Anzahl bei einem Muster) oder in einem Bereich bleiben muss (ein Winkel bis 360°), wird abgelehnt, bevor sich etwas ändert.
- Eine Gleichung nur mit festen Zahlen (`=40`) hat keinen Parameter zum Ändern: Die Zahl, die Sie eingeben, ersetzt sie.
- Wenn kein Wert des Parameters die eingegebene Größe ergibt, sagt die Statusleiste es, und nichts ändert sich.
- Eine Skizze, die mit dem neuen Wert nicht lösbar ist, behält ihre bisherigen Werte, und die Statusleiste nennt die Skizze.

Jede Änderung, gleich in welche Richtung, ist ein Schritt für {{key:Mod+Z}} und {{key:Mod+Y}}.
