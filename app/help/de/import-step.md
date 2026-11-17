---
title: Eine STEP-Datei öffnen und darauf aufbauen
summary: Ein STEP-Modell eines Lieferanten oder eines anderen CAD-Programms als Volumenkörper in PartCraft übernehmen, als neues Bauteil oder zum aktuellen hinzufügen, die Hochachse festlegen und Skizzen und Features hinzufügen.
keywords: step, stp, übernehmen, STEP öffnen, ap203, ap214, ap242, Lieferantenmodell, Volumenkörper, Hochachse, Z oben, Y oben, Dreiecke, facettiert, Baugruppen-STEP
from: ca0eca5f
---

PartCraft öffnet STEP-Dateien (`.step` oder `.stp`, AP203, AP214 und AP242) als **Volumenkörper**, auf denen Sie skizzieren, schneiden, bohren und mit Ihren eigenen Features kombinieren können. Der Körper hat keine eigene Historie: Die Maße, mit denen er erstellt wurde, lassen sich nicht ändern; Sie können nur etwas hinzufügen oder davon abtragen.

Diese Version erstellt jedes Bauteil mit dem Mesh-Kern, daher wird eine STEP-Datei **als Dreiecke gelesen**: Ebene Flächen bleiben eben, und gekrümmte Flächen (Zylinder, Kegel, Kugeln, Tori, B-Spline-Flächen) werden zu vielen kleinen ebenen Flächen. Ihr Volumen liegt innerhalb eines Bruchteils eines Prozents des exakten Volumens. Gekrümmte Flächen exakt zu erhalten erfordert einen exakten Kern, der in dieser Version nicht enthalten ist.

## Eine STEP-Datei öffnen

1. Wählen Sie {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}} und wählen Sie die Datei `.step` oder `.stp`. Oder ziehen Sie die Datei auf die 3D-Ansicht.
2. PartCraft liest die Datei und zeigt an, was sie gefunden hat, zum Beispiel: „AP214-Datei: 1 Volumenkörper, 10 Flächen, als Dreiecke gelesen.“ Darunter stehen die Anzahl der Dreiecke, alles, was ausgelassen oder verbunden werden musste, und ob das Ergebnis geschlossen ist.
3. Prüfen Sie **Oben in der Datei**. Eine STEP-Datei gibt ihre eigene Einheit an (Millimeter, Zoll, Meter …); PartCraft rechnet sie in Millimeter um, daher zeigt **Einheiten in der Datei** Millimeter an, „die Datei gibt es so an“. **Größe hier** zeigt, wie groß das Bauteil wird.
4. Wählen Sie {{ui:Als Körper öffnen}} für ein leeres Bauteil oder {{ui:Zu diesem Bauteil hinzufügen}} / {{ui:Neues Bauteil}}, wenn das Bauteil schon Features hat. Beim Hinzufügen fragt PartCraft, was **Verwenden für** tun soll: hinzufügen, abtragen oder nur die Überschneidung behalten.

Ein Feature **Imported1** erscheint in der Historie, und die Statusleiste zeigt zum Beispiel: „plate.step ist ein Volumenkörper: 57995.937 mm³, 6 ebene Flächen zum Skizzieren.“

## Eine STEP-Baugruppe

Eine Baugruppe wird als **ein Körper** übernommen, mit jedem Bauteil dort, wo die Datei es platziert („3 in der Datei platzierte Bauteile werden dort übernommen, wo sie stehen“). Ein zweimal verwendetes Bauteil wird zweimal übernommen. Die Namen der Bauteile und der Baugruppenbaum bleiben nicht erhalten.

## Die Hochachse festlegen

Die meisten CAD-Programme verwenden Z als Hochachse; PartCraft verwendet Y. Standardmäßig dreht PartCraft die Datei so, dass ihre Z-Achse hier nach oben zeigt. Liegt das Bauteil auf der Seite, wählen Sie **Imported1** und setzen Sie **Oben in der Datei** auf **Y oben**. **Einheiten in der Datei** und **Verwenden für** lassen sich dort ebenfalls ändern; jede Änderung ist ein einzelner Schritt für {{ui:Rückgängig}}.

## Darauf aufbauen

- Klicken Sie auf eine ebene Fläche des Körpers und wählen Sie {{ui:Auf dieser Fläche skizzieren}}. Die ebenen Flächen des STEP-Modells behalten ihre Position, wenn der Körper neu aufgebaut wird.
- Fügen Sie Schnitte, Bohrungen, Aufsätze, Muster und Spiegelungen hinzu wie bei jedem anderen Bauteil.
- Prüfen Sie die Größe im Feld **Part**: Volumen, Oberfläche, Abmessungen.

Verrundungen, Fasen und Schalen benötigen wie bei jedem Bauteil in dieser Version den exakten Kern ([Der Mesh-Kern](topic:solid-kernels)).

## Wo sie gespeichert wird

Die Dreiecke werden **innerhalb** der Datei `.partcraft.json` gespeichert, sodass die Bauteildatei in sich geschlossen ist: Die STEP-Datei wird danach nicht mehr benötigt.

## Meldungen

| Meldung | Bedeutung |
|---|---|
| '„part.stp“ ist keine STEP-Datei (sie beginnt nicht mit ISO-10303-21).' | Die Datei ist kein reiner STEP-Text. Fragen Sie den Absender nach einer STEP-Datei AP203, AP214 oder AP242 |
| „Die STEP-Datei konnte nicht gelesen werden: Ihr Datenabschnitt fehlt oder ist beschädigt.“ | Die Datei ist abgeschnitten oder beschädigt. Kopieren Sie sie erneut |
| „Die STEP-Datei enthält keinen Volumen- oder Flächenkörper: Es gibt nichts zu übernehmen.“ | Die Datei enthält nur Zeichnungen, Punkte oder Daten. Fordern Sie einen Volumenkörper an |
| „Diese STEP-Datei ist zu groß (über 60 MB), um sie hier zu übernehmen.“ und die übrigen Grenzen des Lesers (Einträge, Flächen, Dreiecke) | Vereinfachen Sie das Modell an der Quelle oder senden Sie die Bauteile einzeln |
| „… beschädigte Zeilen in der Datei wurden übersprungen.“ | Einige Zeilen konnten nicht gelesen werden; der Rest wurde übernommen. Prüfen Sie den Körper |
| „… Flächen konnten nicht in Dreiecke umgewandelt werden und wurden ausgelassen.“ | Diese Flächen hinterlassen Lücken, die PartCraft zu füllen versucht; schließt sich der Körper nicht, wird er nicht übernommen |
| „… Flächen einer Art, die nicht gelesen wird (…), wurden übersprungen.“ | Ein seltener Flächentyp. Fordern Sie das Modell mit einfachen oder B-Spline-Flächen an |
| „Der Körper schließt sich nicht …“ | Die Flächen ergeben keinen geschlossenen Volumenkörper (ein Flächenmodell oder fehlende Flächen). PartCraft zeigt die Öffnungen an und übernimmt nichts |

## Grenzen

- Gekrümmte Flächen werden wie bei jedem Bauteil dieser Version als ebene Facetten gezeichnet und vermessen. PartCraft behält die eigenen ebenen Flächen, Zylinder, Kegel, Kugeln und Tori der Datei beim Körper, daher schreibt {{ui:Exportieren}} › {{ui:STEP AP242 (exakter Volumenkörper)}} sie als echte Flächen zurück, Bohrungen als Bohrungen, zusammen mit den Features, die Sie hinzufügen. Flächen, die die Datei als Splines, Sweeps oder Rotationsflächen angibt, bleiben beim Export Facetten. Ein Bauteil, das vor 0.9.1 gespeichert wurde, hat keine gespeicherten Flächen: Öffnen Sie die STEP-Datei erneut, um sie zu erhalten.
- {{ui:Exportieren}} › {{ui:DXF der Skizze oder ebenen Fläche}} schreibt bei gewählter ebener Fläche eine runde Bohrung der Datei als echten Kreis.
- Farben, Namen der Körper, Baugruppenstruktur und PMI (Toleranzen in der Datei) werden nicht gelesen.
- Neben STEP öffnet PartCraft STL-, OBJ- und 3MF-Netze ([STL, OBJ oder 3MF öffnen](topic:open-meshes)) und `.3dm`-Dateien ([Ein .3dm-Modell öffnen](topic:open-3dm-files)) als Volumenkörper. IGES und native Dateien anderer Programme werden nicht unterstützt.
- Ein Bauteil mit einem STEP-Volumenkörper, der von einer Version mit exaktem Kern übernommen wurde, behält den STEP-Text; diese Version überspringt dieses Feature („noch nicht umgesetzt“). Öffnen Sie die STEP-Datei erneut, um sie als Dreiecke zu übernehmen.
