---
title: Ein Variantenpaket aus Ihren Konfigurationen erstellen
summary: Erstellen Sie alle Konfigurationen eines Bauteils oder einige ausgewählte in einem Durchgang als STEP, IFC, DWG und jeweils eine Vorschau, mit einer Tabelle ihrer Parameter und dem Bauteil als ein Bibliothekselement mit seinen Varianten.
keywords: variantenpaket, varianten, konfigurationen, teilefamilie, stapelexport, jede größe, step, ifc, dwg, vorschau, tabelle, csv, json, bibliothek, konfigurator, produktkonfigurator, katalog, element-json
from: 9a6db99f
---

## Was Sie tun

Stellen Sie **jede Größe eines Bauteils auf einmal** bereit: eine STEP-, IFC- und DWG-Datei und ein Bild für jede Konfiguration, eine Tabelle, die sagt, was jede davon ist, und ein Bibliothekselement, das alle auf einer Seite zeigt.

Sie brauchen zuerst ein Bauteil mit **Konfigurationen** (siehe [Konfigurationen und Konstruktionstabellen](topic:design-tables)). Eine Konfiguration, die ein Feature ausschaltet, etwa eine Platte mit und ohne Bohrungen, wird zu einer eigenen Variante.

## Schritte

1. Öffnen Sie das Bauteil. Suchen Sie auf der Registerkarte {{ui:Parameter}} die **Konfigurationen**.
2. Klicken Sie auf {{ui:Variantenpaket…}}.
3. Setzen Sie Häkchen bei den Konfigurationen, die erstellt werden sollen (alle sind angehakt), und bei den Dateien, die geschrieben werden sollen: STEP, IFC, DWG, eine Vorschau und das Bibliothekselement.
4. Klicken Sie auf {{ui:Paket erstellen}}. Die Statuszeile zählt die Varianten, während sie erstellt werden; Ihr Bauteil wird nicht verändert.
5. Eine ZIP-Datei wird heruntergeladen: `<part> variants.zip`.

## Was im ZIP-Archiv enthalten ist

| Datei | Was sie ist |
|---|---|
| `<name>.step` | Die Konfiguration als STEP-Volumenkörper. |
| `<name>.ifc` | IFC4, ein Element mit dem aufgebauten Körper und den Parametern des Bauteils als Eigenschaften; der Wert ist der eigene der Konfiguration. |
| `<name>.dwg` | Vorne-, Oben-, Rechts- und isometrische Ansicht als Zeichnungsblatt in voller Größe. |
| `<name>.svg` | Ein isometrisches Linienbild davon. |
| `variants.csv`, `variants.json` | Die Parametertabelle: ID, Name und Wert jedes Parameters je Variante, die Features, die sie ausschaltet, ihre Dateien, ihr Volumen und ihre Größe. |
| `<part>.item.json` | Das Bauteil als ein Bibliothekselement mit seinen Varianten (siehe unten). |
| `README.txt` | Was erstellt wurde, die Hinweise unten und alles, was nicht erstellt wurde. |

Dateien werden nach der Konfiguration benannt. Eine Konfiguration, die sich nicht erstellen lässt (ein Feature, das mit diesen Werten nicht erzeugt werden kann), fehlt in den Dateien und in der Tabelle; sie steht in der README und in einer Meldung, nachdem das ZIP gespeichert wurde. Die übrigen werden trotzdem geschrieben.

## Gut zu wissen

- **STEP** ist exakt, wenn der exakte Kernel in Ihrer Version eingeschaltet ist. Ohne ihn ist das STEP facettiert (ebene Dreiecke), und die README sagt das.
- **DWG** ist das Zeichnungsblatt, kein 3D-Modell. Die Linien stammen aus dem Netz, daher besteht eine gekrümmte Kante aus vielen kurzen Linien.
- **Das Bibliothekselement** enthält je Variante einen Körper und einen Grundriss, in den eigenen Achsen der Bibliothek: Z nach oben, die Vorderseite zu −Y, und der Einfügepunkt in der Mitte der Rückseite unten. Der Plan ist das umschließende Rechteck jeder Variante. Ein Element ist auf 8 MB begrenzt; eine sehr schwere Variante wird deshalb zu einem Quader in ihrer Größe, und die README sagt, wie viele es sind.
- Die aktive Konfiguration des Bauteils wird zur Standardvariante des Elements.
- Anschlüsse (Verbindungspunkte für Rohre und Kanäle) werden nicht aus PartCraft gesetzt.

## Die Varianten auf einer Bibliotheksseite anzeigen

Laden Sie `<part>.item.json` unter **Bibliothek › Hochladen** auf der Website hoch. Wählen Sie Kategorie, Lizenz und Ihre Quellenangabe, dann wird es zu einem Bibliothekselement mit seinen Varianten. In BimCraft fragt das Platzieren, welche Variante, und Tauschen bietet die anderen an. Die Seite, auf der Besucher Optionen wählen, das 3D-Modell sehen und eine Variante herunterladen, ist vorerst eine **Mitarbeitervorschau**: Sie ist noch nicht öffentlich.

## Von der Kommandozeile

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nennt die Konfigurationen, `--formats` mit einem oder mehreren von `step`, `ifc`, `dwg`, `preview`; `--no-item` lässt das Bibliothekselement weg. Es schreibt einen Ordner, ein ZIP oder beides und endet mit Code 1, wenn eine Variante nicht erstellt werden konnte. Siehe [Skripte und Kommandozeile](topic:scripts-and-cli).
