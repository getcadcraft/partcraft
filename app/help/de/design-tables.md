---
title: Konfigurationen und Design-Tabellen
summary: Mehrere Größen und Versionen eines Bauteils als benannte Konfigurationen in der Bauteildatei halten, mit je ein- oder ausgeschalteten Features; mit einem Klick umschalten, als CSV-Design-Tabelle ein- oder ausführen oder alle über die Befehlszeile erzeugen.
keywords: Design-Tabelle, Konfigurationen, Konfiguration, Größen, Teilefamilie, csv, Tabellenkalkulation, Varianten, tabellengesteuert, unterdrücken, unterdrückt, Feature ausschalten, Optionen, mit oder ohne, Konfigurator
from: 17249afb
---

Eine **Konfiguration** ist eine Größe des Bauteils: eine benannte Gruppe von Werten für seine Parameter. Das Bauteil hält seine Konfigurationen in seiner eigenen Datei, sodass sie mit ihm wandern. Eine **Design-Tabelle** ist dasselbe als CSV-Datei, eine Zeile je Konfiguration.

Konfigurationen setzen **Parameter**, legen Sie diese also zuerst an (siehe [Ein Bauteil über Parameter steuern](topic:parameters)). Eine Konfiguration speichert die Parameter, die einfache Zahlen sind; Parameter, die aus anderen berechnet werden (etwa `area = w * d`), folgen von selbst.

## Eine Konfiguration speichern

1. Stellen Sie auf der Registerkarte {{ui:Parameter}} die Parameter für eine Größe des Bauteils ein.
2. Geben Sie unter **Konfigurationen** einen Namen ein (zum Beispiel `Groß`) und drücken Sie {{ui:Aktuelle Werte speichern}} oder {{key:Enter}}.

Die neue Konfiguration ist als **aktiv** markiert. Ändern Sie danach einen Parameter, steht dort **aktiv, seitdem geändert**, damit Sie wissen, dass das Bauteil nicht mehr dazu passt.

## Umschalten, aktualisieren, umbenennen, löschen

- {{ui:Anwenden}} setzt die Parameter auf die Werte dieser Konfiguration und erstellt das Bauteil neu.
- {{ui:Aktualisieren}} speichert die aktuellen Werte in diese Konfiguration.
- Zum Umbenennen geben Sie den neuen Namen in ihr Feld ein und drücken {{key:Enter}}.
- {{ui:Löschen}} entfernt die Konfiguration. Die Parameter behalten ihre Werte.

Jede dieser Aktionen ist ein Schritt: {{key:Mod+Z}} macht sie rückgängig. Wenn Sie einen Parameter umbenennen, folgt ihm jede Konfiguration unter dem neuen Namen; wenn Sie einen Parameter löschen, fällt er aus allen Konfigurationen heraus.

## Features in einer Konfiguration ein- und ausschalten

Eine Konfiguration hält außerdem fest, welche Features ausgeschaltet sind, sodass ein Bauteil Varianten **mit** und **ohne** etwas haben kann: Befestigungsbohrungen, eine Fase, einen Aufsatz.

1. Schalten Sie das Feature aus: Klicken Sie es im Verlauf an und dann {{ui:Unterdrücken}} unter {{ui:Eigenschaften}}.
2. Speichern Sie die Konfiguration wie üblich, zum Beispiel `Ohne Bohrungen`. Ihre Zeile listet auf, was sie ausschaltet.
3. Schalten Sie das Feature wieder ein ({{ui:Unterdrückung aufheben}}) und speichern Sie eine weitere Konfiguration, zum Beispiel `Mit Bohrungen`.

Sobald eine Konfiguration ein Feature ausschaltet, schaltet das Anwenden einer Konfiguration deren Features aus und **alle anderen Features ein**, zusammen mit ihren Parameterwerten, in einem Schritt. Eine Konfiguration, die vor dem Ausschalten von Features in einer davon gespeichert wurde, gilt als „alles ein“. {{ui:Aktualisieren}} speichert die Features so, wie sie jetzt sind, mit den Werten.

Ein Bauteil, dessen Konfigurationen Features ausschalten, wird als neuere Dateiversion gespeichert: Ein älteres PartCraft meldet, dass die Datei von einer neueren Version stammt, anstatt sie ohne diese Features zu öffnen.

:::note
Die CSV-Design-Tabelle enthält nur Parameterwerte. Das Importieren einer Tabelle über eine Konfiguration ändert deren Werte und behält die Features bei, die sie ausschaltet; `--table` der Befehlszeile erzeugt nur die Werte.
:::

Die Bauteildatei wird mit den Konfigurationen und mit der jeweils aktiven gespeichert. Das Bauteil öffnet sich mit den Werten, mit denen es gespeichert wurde.

## Eine Design-Tabelle importieren oder exportieren

Eine Design-Tabelle ist eine CSV-Datei mit einer Spalte für jeden Parameter und einer Zeile für jede Konfiguration:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Die erste Spalte darf `name`, `config` oder `configuration` heißen; jede andere Spalte muss der Name eines Parameters des Bauteils sein. Zellen sind Zahlen, mit Einheiten, falls Sie möchten (`8in`). Eine leere Zelle lässt diesen Parameter in der Zeile aus.

- {{ui:CSV importieren}} fügt jede Zeile als Konfiguration hinzu. Eine Zeile mit dem Namen einer vorhandenen Konfiguration ersetzt sie. Das Importieren ist ein Schritt.
- {{ui:CSV exportieren}} schreibt die Konfigurationen heraus. Gibt es noch keine, schreibt es eine Zeile mit den aktuellen Werten, als Ausgangspunkt für eine Tabellenkalkulation.

Ein Konfigurationsname, den eine Tabellenkalkulation als Formel lesen würde (beginnend mit `=`, `+`, `-` oder `@`), wird mit einem führenden `'` geschrieben.

## Alle Größen auf einmal

{{ui:Variantenpaket…}} unter **Konfigurationen** erstellt jede Konfiguration oder eine ausgewählte Auswahl als STEP, IFC, DWG und Vorschau in einer ZIP-Datei, mit einer Tabelle ihrer Parameter: siehe [Ein Variantenpaket aus Ihren Konfigurationen erstellen](topic:variant-pack).

Das Befehlszeilenwerkzeug erstellt eine Datei je Zeile einer CSV-Design-Tabelle:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exportieren Sie die Konfigurationen zuerst als CSV und übergeben Sie dann diese Datei mit `--table`. Siehe [Skripte und Befehlszeile](topic:scripts-and-cli). Ein als Skript gespeichertes Bauteil behält seine Konfigurationen in einer Zeile `configs json …`.
