---
title: Speichern, erneut öffnen und weiterarbeiten
summary: Bauteile und Baugruppen auf Ihrem Computer speichern, benennen, per Schaltfläche, Taste oder Ziehen erneut öffnen, Versionen behalten und den Verlust von Arbeit in einem Browser-Tab vermeiden.
keywords: speichern, öffnen, erneut öffnen, laden, herunterladen, Versionen, Sicherung, umbenennen, Dateiname, verlorene Arbeit, Seite verlassen, partcraft.json, partcraft-asm.json, neues Bauteil
from: c18a5abc
---

PartCraft behält nichts zwischen den Besuchen. Ihr Bauteil lebt im Browser-Tab, bis Sie es als Datei speichern, und kehrt zurück, wenn Sie diese Datei öffnen.

## Ein Bauteil speichern

1. Benennen Sie das Bauteil: Klicken Sie in der Ansicht auf leeren Raum, damit nichts ausgewählt ist, geben Sie dann den **Namen** im rechten Bereich ein und drücken Sie {{key:Enter}}. Die Überschrift des Verlaufs ändert sich entsprechend.
2. Drücken Sie {{key:Mod+S}} oder wählen Sie {{ui:Speichern}}.
3. Der Browser lädt `<name>.partcraft.json` herunter. In der Statusleiste steht: „Bracket.partcraft.json gespeichert (der vollständige Verlauf; hier erneut öffnen, um weiter zu bearbeiten).“

Ist eine Skizze geöffnet, wird sie beim Speichern zuerst geschlossen.

Die Datei enthält jede Skizze, Abhängigkeit, Bemaßung und jedes Feature, außerdem unterdrückte Features, die Position der Rücksetzleiste, die Einstellungen des Zeichenblatts und die GD&T-Angaben sowie den vollständigen Text jedes importierten STEP-Volumenkörpers. Ihre Liste für Rückgängig wird nicht gespeichert.

## Eine Baugruppe speichern

In einer Baugruppe lädt dasselbe {{ui:Speichern}} oder {{key:Mod+S}} `<Name der Baugruppe>.partcraft-asm.json` herunter. Jedes Bauteil ist darin gespeichert: Sie brauchen die einzelnen Bauteildateien nicht, um die Baugruppe erneut zu öffnen.

Während Sie ein Bauteil innerhalb einer Baugruppe bearbeiten, speichert {{key:Mod+S}} nur dieses Bauteil für sich als `.partcraft.json`. Wählen Sie zuerst {{ui:Zurück}} und speichern Sie dann, um die ganze Baugruppe zu speichern.

## Erneut öffnen

Auf eine der folgenden Arten:

- Wählen Sie {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}} und wählen Sie dann die Datei;
- ziehen Sie die Datei aus {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateiverwaltungsprogramm}} auf die 3D-Ansicht („Ein PartCraft-Bauteil zum Öffnen hier ablegen“ erscheint).

PartCraft unterscheidet Bauteile von Baugruppen anhand des Inhalts, daher öffnen sich beide gleich. Eine `.step`- oder `.stp`-Datei öffnet sich als importierter Volumenkörper: siehe [STEP-Datei öffnen und darauf aufbauen](topic:import-step). Die Statusleiste bestätigt: „Bracket.partcraft.json geöffnet: 7 features.“ oder „Hinge.partcraft-asm.json geöffnet: 3 parts, 2 joints.“

Hat das Bauteil auf dem Bildschirm ungespeicherte Änderungen, fragt PartCraft zuerst: {{ui:Abbrechen}}, {{ui:Änderungen verwerfen}} oder {{ui:Zuerst speichern}}.

:::warning
Schließen Sie eine Baugruppe ({{ui:Schließen}}), bevor Sie eine Bauteildatei öffnen. Wenn Sie ein Bauteil öffnen, während eine Baugruppe auf dem Bildschirm ist, wird das Bauteil hinter der Baugruppe geladen, und Sie sehen es erst, wenn Sie die Baugruppe schließen. Das Öffnen einer Baugruppendatei ersetzt außerdem eine ungespeicherte Baugruppe ohne Nachfrage; speichern Sie sie daher vorher.
:::

## Neu beginnen

{{ui:Neu}} startet ein leeres „Part1“. Es fragt zuerst nach, wenn ungespeicherte Änderungen vorliegen, und schließt eine geöffnete Baugruppe (und fragt nach, wenn diese ungespeichert ist).

## Versionen behalten

Jedes Speichern ist ein neuer Download. Sie behalten Versionen daher einfach, indem Sie die Dateien aufbewahren:

- Setzen Sie vor dem Speichern eine Version oder ein Datum in den Namen: „Bracket rev B“.
- Ihr Browser kann „ (1)“, „ (2)“ anhängen, wenn im Downloads-Ordner bereits eine Datei gleichen Namens liegt. Die neueste ist diejenige mit der höchsten Nummer, oder prüfen Sie das Datum unter {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateiverwaltungsprogramm}}.
- Verschieben Sie fertige Dateien aus dem Downloads-Ordner in Ihren Projektordner.

Wo Ihre Downloads auf jedem System landen, steht unter [Wo Ihre Dateien landen](common:your-files).

## Arbeit nicht verlieren

- Speichern Sie, bevor Sie den Tab schließen, die Seite neu laden oder den Computer längere Zeit in den Ruhezustand schalten. Der Browser fragt „Seite verlassen?“, wenn Sie mit ungespeicherten Änderungen schließen wollen, aber bei einem Absturz oder einem zugeklappten Laptop gibt es keine Warnung.
- Private oder Inkognito-Fenster funktionieren, aber sonst ändert sich nichts: Die Datei bleibt die einzige Kopie.
- Speichern in der Cloud und Versionsverlauf sind noch nicht umgesetzt.
