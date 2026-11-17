---
title: Eine Anleitung in Illustrate beginnen
summary: Der Arbeitsbereich Illustrate erstellt Anleitungen aus Ihrem Entwurf: Ansichten, Explosionslinienzeichnungen mit Ballons und einer Stückliste, Schritt-für-Schritt-Anleitungen, Animationen und eine 3D-Datei, die ein Kunde ohne CAD öffnen kann. Eine Anleitung ist eine eigene Datei.
keywords: illustrate, Anleitung, technische Illustration, Dokumentation, Explosionsansicht, Stückliste, Anweisungen, partcraft-manual
from: e447e0ab
---

**Illustrate** ist der Arbeitsbereich für die Dokumente, die rund um einen Entwurf gebraucht werden: Explosionsansichten mit Ballons und einer Stückliste, Linienzeichnungen für Anleitungen, Schritt-für-Schritt-Anleitungen, Animationen und eine 3D-Datei, die ein Kunde ohne CAD öffnen kann. Wählen Sie {{ui:Illustrate}} im Umschalter {{ui:Arbeitsbereich}} am Anfang der Symbolleiste.

Eine **Anleitung** ist eine eigene Datei (`<name>.partcraft-manual.json`). Sie enthält eine Kopie der Form jedes Bauteils, den Produktbaum und die Eigenschaften der Bauteile sowie einen Verweis auf ihre Herkunft, sodass Sie an der Anleitung arbeiten können, während der Entwurf weiterläuft. Ändert sich der Entwurf, übernimmt [Aus dem Entwurf aktualisieren](topic:illustrate-update) die Änderungen.

## Eine Anleitung beginnen

Klicken Sie in der Gruppe {{ui:Anleitung}} auf {{ui:Neu}} und dann:

- {{ui:Aus dem geöffneten Bauteil}}: das im Entwurf geöffnete Bauteil.
- {{ui:Aus der geöffneten Baugruppe}}: wird stattdessen angezeigt, wenn eine Baugruppe geöffnet ist; ihre Bauteile, deren Positionen, Teilenummern, Materialien und Explosionsansichten werden übernommen.
- {{ui:Aus einer Baugruppendatei…}}: eine gespeicherte `.partcraft-asm.json`; PartCraft erstellt zuerst deren Bauteile.
- {{ui:Aus einer anderen Datei…}}: glTF (.glb, .gltf), OBJ, STL oder 3MF. Der Baum und die Namen der Datei bleiben erhalten, und Kopien eines Bauteils (dieselbe Form zweimal platziert) werden zu einem Bauteil mit einer Menge. STL- und OBJ-Dateien geben ihre Einheit nicht an, daher wird nachgefragt. STL-Dateien werden mit Z als Hochachse gelesen; glTF und 3MF geben ihre eigene an.

Solange eine Anleitung geöffnet ist, zeigt Illustrate die eigene Kopie der Bauteile der Anleitung; das im Entwurf geöffnete Bauteil oder die Baugruppe wird ausgeblendet, bis Sie zum Entwurf zurückkehren.

## Speichern und Öffnen

{{ui:Speichern}} in der Gruppe {{ui:Anleitung}} (oder {{key:Mod+S}}) speichert die Anleitung; {{ui:Öffnen}} öffnet eine. Jede Änderung in Illustrate ist ein Schritt im eigenen Verlauf der Anleitung: {{ui:Rückgängig}} und {{ui:Wiederholen}} wirken auf die Anleitung, solange Illustrate geöffnet ist.

## Noch nicht umgesetzt

- STEP-Dateien lassen sich noch nicht über {{ui:Aus einer anderen Datei…}} öffnen. Öffnen Sie die STEP-Datei stattdessen im Entwurf (sie wird als Volumenkörper übernommen, siehe [Eine STEP-Datei öffnen](topic:import-step)) und starten Sie die Anleitung mit {{ui:Aus dem geöffneten Bauteil}}, oder speichern Sie sie als glTF, 3MF, OBJ oder STL.
- ModelCraft und BimCraft können ein Modell noch nicht direkt an Illustrate übergeben: Speichern Sie es als glTF (.glb) und verwenden Sie {{ui:Aus einer anderen Datei…}}.

Weiter: [Ansichten und Aussehen](topic:illustrate-views).
