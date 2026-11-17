---
title: Ein Normteil öffnen
summary: Ein Bauteil aus Schraube, Mutter, Scheibe, Stift, Lager oder Passfeder beginnen, deren Maße aus der Norm stammen, mit jeder Größe der Normtabelle als Konfiguration.
keywords: Normteil, Normteile, Schraube, Bolzen, Sechskant, Mutter, Scheibe, Stift, Lager, Rillenkugellager, Passfeder, Befestigungselement, ISO 4017, ISO 4014, ISO 4032, ISO 7089, ISO 2338, ISO 15, DIN 6885, ASME, Vorlage, Bibliothek
from: b9e2811f
---

PartCraft öffnet gängige Maschinenbauteile fertig vorbereitet: Die Maße stammen aus den Tabellen der Normen, und jede Größe der Tabelle ist eine Konfiguration, zu der Sie wechseln können.

## Eines öffnen

1. Klicken Sie {{ui:Normteil}} in der Gruppe {{ui:Datei}}.
2. Wählen Sie unter {{ui:Bauteil}} die Art, zum Beispiel {{ui:Sechskantschraube (ISO 4017)}}.
3. Wählen Sie unter {{ui:Format}} die Größe, zum Beispiel `M10 × 40`.
4. Klicken Sie {{ui:Öffnen}}.

Das Bauteil öffnet sich als neues, nicht gespeichertes Bauteil. Speichern Sie es, um es zu behalten ({{key:Mod+S}}).

| Bauteil | Norm | Parameter |
|---|---|---|
| Sechskantschraube, Sechskantbolzen | ISO 4017, ISO 4014, ASME B18.2.1 (Zoll) | `d` Gewindegröße, `s` Schlüsselweite, `k` Kopfhöhe, `l` Länge |
| Sechskantmutter | ISO 4032, ASME B18.2.2 (Zoll) | `d`, `s`, `height` Höhe |
| Flache Scheibe | ISO 7089 | `d1` innen, `d2` außen, `h` Dicke |
| Zylinderstift | ISO 2338 | `d`, `l` |
| Rillenkugellager | ISO 15 | `d` Bohrung, `D` außen, `B` Breite |
| Parallelpassfeder | DIN 6885-1, Form A | `b` Breite, `h` Höhe, `l` Länge |

## Die Größe ändern

Jede Größe ist eine Konfiguration (siehe [Konfigurationen und Konstruktionstabellen](topic:design-tables)): Öffnen Sie {{ui:Parameter}} und wählen Sie eine andere, oder ändern Sie einen Parameter, etwa `l` für eine längere Schraube, und speichern Sie sie als eigene Konfiguration.

## Was modelliert ist

- Schrauben und Bolzen: der Sechskantkopf und ein glatter Schaft. Muttern: das Sechskant mit einer Bohrung in der Nenngröße des Gewindes. Gewinde sind nicht modelliert; fügen Sie eines mit {{ui:Gewinde}} hinzu, falls Sie es brauchen (siehe [Gewinde](topic:threads)).
- Stifte: ein glatter Zylinder; die Endfasen fehlen.
- Lager: nur die äußere Hülle (ein Ring der Bohrung, der Außendurchmesser und die Breite), was Sie zum Platzieren brauchen.
- Passfedern: die Passfeder mit runden Enden.

Der Werkstoff des Bauteils ist Stahl, daher zeigt das Massenfeld das Gewicht. Zahnräder sind hier noch nicht vorhanden: PartCraft hat kein Zahnfeature, und eine Scheibe ist kein Zahnrad. CadCraft zeichnet Zahnräder nach der Zeichnungskonvention, und die Bibliothek hat sie als Zeichnungen.
