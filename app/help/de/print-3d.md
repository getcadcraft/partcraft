---
title: Ein Bauteil für den 3D-Druck vorbereiten
summary: Prüfen Sie, ob ein Bauteil oder eine Baugruppe geschlossen ist, in Ihren Drucker passt und auf einer Grundfläche steht, und exportieren Sie es dann als STL oder 3MF für Ihren Slicer.
keywords: 3D-Druck, 3D drucken, Drucker, drucken, Slicer, stl, 3mf, wasserdicht, geschlossen, manifold, Druckbett, Druckbettgröße, Bauplatte, Überhang, Stützen, Basis, Millimeter, Export, Gewinde, Spiel
from: 90d81dff
---

Ein Slicer braucht eine geschlossene Form: keine Löcher, jede Fläche zeigt nach außen, nichts durchdringt sich selbst. Von PartCraft erstellte Bauteile sind konstruktionsbedingt geschlossen. Die Prüfung zeigt daher vor allem die Größe, ob das Bauteil auf das Druckbett Ihres Druckers passt, ob es auf einer ebenen Fläche steht und wie viel davon überhängt.

## Prüfen und herunterladen

1. Optional, einmalig: Stellen Sie das Druckbett Ihres Druckers unter {{ui:Einstellungen}} › PartCraft › **3D-Drucker** ein: Breite, Tiefe und Höhe in Millimetern. Lassen Sie die Felder leer, um diese Prüfung zu überspringen.
2. Wählen Sie {{ui:Exportieren}}, dann {{ui:Auf 3D-Druck prüfen (STL oder 3MF) …}}.

   Der Dialog zeigt „Bereit zum Drucken“ oder „Nicht bereit zum Drucken“, listet alles Fehlerhafte auf und gibt die Größe auf dem Druckbett (X × Y × Z, in Millimetern), das Volumen und die Anzahl der Dreiecke an.

3. Klicken Sie auf {{ui:3MF herunterladen}} oder {{ui:STL herunterladen}}. Die Datei ist dieselbe wie bei {{ui:Exportieren}} › {{ui:3MF, für den 3D-Druck}} bzw. {{ui:STL, für den 3D-Druck}}.

In einer Baugruppe nehmen die Prüfung und die Dateien die gesamte Baugruppe auf, jede Kopie an ihrer Position.

Das Bauteil wird so geprüft, wie der Export es schreibt: Was in PartCraft nach oben zeigt (rechtwinklig zur Oberen Ebene), zeigt auf dem Druckbett nach oben. Ein auf der Oberen Ebene skizziertes Bauteil liegt flach.

## Was der Dialog melden kann

**Nicht bereit zum Drucken** (ein Slicer könnte es ablehnen oder falsch drucken): Löcher (Kanten, an denen nur auf einer Seite eine Fläche liegt), Kanten, die von drei oder mehr Flächen geteilt werden, Flächen, die in entgegengesetzte Richtungen zeigen, ein Körper, der nach innen gestülpt ist, oder ein Körper, der sich selbst durchdringt. Ein in PartCraft erstelltes Bauteil sollte diese nie zeigen; falls doch, siehe [Fehlerbehebung](topic:troubleshooting).

**Warnungen** (es wird gedruckt, aber sehen Sie vorher nach):

- **Größer als das Druckbett Ihres Druckers**, auch um 90° gedreht.
- **Unten liegt nichts flach auf**: Drehen Sie das Bauteil im Slicer so, dass eine Fläche auf dem Druckbett liegt, sonst braucht es Stützen oder ein Raft.
- **Neigt sich mehr als 45° von der Senkrechten weg**: Diese Flächen brauchen in dieser Lage Stützen. Eine andere Lage braucht vielleicht weniger.
- **Getrennte Körper überlappen** oder **berühren sich flächig**: Slicer verbinden sie meist. {{ui:Kombinieren}} in Features › {{ui:Mehr}} verbindet sie zu einem Körper. Siehe [Körper](topic:bodies).
- **Unter 1 mm breit**: Prüfen Sie die Maße des Bauteils.

## Gewinde, die drucken

Ein modelliertes Gewinde druckt als echtes Gewinde. Geben Sie ihm etwas **Spiel**, damit eine gedruckte Schraube in eine gedruckte Mutter passt: siehe [Gewinde](topic:threads).

## Runde Flächen glätten

STL und 3MF bestehen aus Dreiecken. Für glattere runde Flächen klicken Sie auf leeren Raum, damit nichts ausgewählt ist, und stellen Sie im rechten Bereich **Kurven** auf **Fein (128 pro Umdrehung)** oder **Sehr fein (256 pro Umdrehung)**, bevor Sie exportieren. Mehr Dreiecke ergeben größere Dateien.

## Größer, kleiner oder in Teilen

- **Exportieren › Skalieren für den Druck (STL oder 3MF)…** speichert das Bauteil je Achse skaliert, ohne es zu ändern: mit einer **Schwindungszugabe** in Prozent (Maß × (1 + s) oder genaues Maß ÷ (1 − s)) für ein Gussmodell, oder mit einfachen Faktoren, bezogen auf die Mitte, die untere Ecke, die Mitte der Unterseite oder den Ursprung.
- **Exportieren › Teilen für den Druck (ZIP mit Teilen)…** schneidet ein Bauteil, das zu groß für Ihren Drucker ist, in Teile, die jeweils in das Druckbett passen. Die Teile werden über Zapfen, Keile, Schwalbenschwänze, Dübelbohrungen oder Magnettaschen verbunden (mit dem von Ihnen gewählten Spiel). Jedes Teil und jede Verbindung ist nummeriert; die Teile werden als STL oder 3MF in einer ZIP-Datei mit einem Montageblatt gespeichert. Das Bauteil selbst ändert sich nicht.

## Nicht geprüft

Wandstärke, Details, die dünner als Ihre Düse sind, und wie der Slicer Stützen setzt. Das zeigt Ihr Slicer.
