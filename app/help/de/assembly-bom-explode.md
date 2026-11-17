---
title: Stückliste, Explosionsansichten und bewegliche Bauteile
summary: Weisen Sie Baugruppenbauteilen eine Nummer, Beschreibung und ein Material zu, lesen und laden Sie die Stückliste herunter, erstellen Sie Explosionsansichten mit Schritten oder automatisch, bewegen Sie nicht verbundene Bauteile von Hand, legen Sie Verbindungsgrenzen fest und exportieren Sie die gesamte Baugruppe als STL, 3MF oder Stückliste.
keywords: bom, Stückliste, Teileliste, Teilenummer, Material, Dichte, CSV, Explosionsansicht, Zerlegen, Zusammenklappen, Spurlinien, Bauteil bewegen, ziehen, Manipulator, verschieben, drehen, Verbindungsgrenzen, Baugruppenexport, Baugruppenschritt, Baugruppenzeichnung, Ballons
from: ebc9f6f3
---

Diese Werkzeuge befinden sich im rechten Bereich einer Baugruppe (siehe [Baugruppe mit Verbindungen erstellen](topic:build-assembly)).

## Bauteileigenschaften

Wählen Sie links in der Liste ein Bauteil aus. Legen Sie unter **Bauteileigenschaften** fest:

- **Teilenummer** (bis zu 40 Zeichen) und **Beschreibung** (bis zu 200).
- **Material**: ein gängiges Material mit seiner Dichte oder **Benutzerdefinierte Dichte…**, um eine Dichte in g/cm³ einzugeben. Das Feld zeigt dann die Masse des Bauteils.

Eigenschaften gehören zum Bauteil, daher teilen sich alle Kopien davon. Sie werden in der Baugruppendatei gespeichert.

## Stückliste

Wenn nichts ausgewählt ist ({{key:Esc}}), zeigt das Feld die **Stückliste**: eine Zeile pro Bauteil mit seiner Positionsnummer, Menge (wie viele Kopien es gibt), Teilenummer, Name, Material und Masse. Die Positionsnummern folgen der Reihenfolge, in der die Bauteile erstmals in der Liste erscheinen. Massen ergeben sich aus dem Volumen jedes Bauteils (des facettierten Volumenkörpers, den der Netz-Kernel erzeugt, bei runden Bauteilen etwas zu niedrig) und seinem Material. Ein Bauteil ohne Material hat keine Masse, und dann gibt es auch keine Summe.

{{ui:CSV herunterladen}} speichert die Liste als CSV-Datei (auch **Exportieren › Stückliste (CSV)**). Sie öffnet sich in jeder Tabellenkalkulation. Text, der mit = oder + beginnt, erhält ein vorangestelltes Apostroph, damit die Tabellenkalkulation ihn nicht als Formel ausführt.

## Explosionsansichten

Eine Explosionsansicht zieht die Bauteile für Bilder auseinander. Sie ändert nie die Verbindungen oder die tatsächlichen Positionen der Bauteile: Speichern, Kollisionsprüfungen und Exporte verwenden die echten Positionen.

1. Wählen Sie bei nichts Ausgewähltem unter **Explosionsansichten** {{ui:Neue Ansicht}}.
2. Setzen Sie unter **Schritt hinzufügen** ein Häkchen bei den Bauteilen, die der Schritt bewegt. Wählen Sie eine **Richtung** (+X … −Z, die Normale einer Fläche, auf die Sie klicken, oder **Pfeil in der Ansicht ziehen**) und eine **Distanz**, dann {{ui:Schritt hinzufügen}}. Mit **Ziehen** ziehen Sie den Pfeil und lassen los: Der Schritt übernimmt die Richtung und Distanz, die Sie gezogen haben.
3. Fügen Sie weitere Schritte hinzu. Sie laufen nacheinander ab.
4. Ziehen Sie den Schieberegler zwischen **Zusammengebaut** und **Explodiert**, um die Ansicht zu animieren. Gestrichelte Spurlinien verlaufen von der Ruheposition jedes Bauteils bis zu seiner aktuellen Position.

{{ui:Auto (radial)}} bewegt jedes Bauteil außer dem festen Bauteil von der Mitte der Baugruppe weg. {{ui:Auto (Verbindungen)}} bewegt jedes verbundene Bauteil (mit allem, was darunter verbunden ist) entlang der Flächennormalen seiner Verbindung. Sie können mehrere benannte Ansichten behalten. Wählen Sie eine unter **Ansicht** aus, oder **Zusammengebaut**, um die Bauteile zurückzusetzen. Ansichten werden in der Baugruppendatei gespeichert.

## Ein Bauteil von Hand verschieben

Nur ein Bauteil ohne Verbindung zum festen Bauteil lässt sich von Hand verschieben (das feste Bauteil bleibt fixiert, Verbindungen platzieren den Rest). Wählen Sie es aus und gehen Sie unter **Von Hand verschieben** so vor:

- Geben Sie **ΔX, ΔY, ΔZ** ein und wählen Sie {{ui:Bewegen}}, oder wählen Sie eine Achse und einen **Winkel** und dann {{ui:Drehen}} (um die Mitte des Bauteils).
- {{ui:Zum Bewegen ziehen}} zeigt Pfeile am Bauteil: Ziehen Sie einen Pfeil, um entlang dieser Achse zu verschieben, oder ein Quadrat, um in einer Ebene zu verschieben. {{ui:Zum Drehen ziehen}} zeigt Ringe zum Drehen. Jedes Ziehen ist ein einzelner Schritt für {{ui:Rückgängig}}. {{key:Esc}} blendet die Pfeile aus.

## Verbindungsgrenzen

Wählen Sie eine Verbindung aus, die sich bewegt, und setzen Sie unter **Grenzen** ein Häkchen bei **… zwischen Grenzen halten** für einen ihrer Werte. Legen Sie dann ihr **Minimum** und **Maximum** fest. Jeder Wert wird innerhalb seiner eigenen Grenzen gehalten, sein Schieberegler deckt nur diesen Bereich ab, und {{ui:Die Bewegung auf Kollisionen prüfen}} prüft nur zwischen diesen Grenzen. Eine Zylinderverbindung kann ihren Winkel, ihren Versatz oder beides begrenzen. Wenn Sie den Typ der Verbindung ändern, entfallen die Grenzen für Werte, die der neue Typ nicht hat.

## Die gesamte Baugruppe exportieren

In einer Baugruppe schreibt das Menü **Exportieren** die gesamte Baugruppe, wobei jedes Bauteil dort steht, wo es platziert ist:

- **STEP AP242 / AP214** und **Zeichnung (PDF)** sind in dieser Version noch nicht umgesetzt. Sie benötigen einen exakten Kernel, daher sind sie ausgegraut. Exportieren Sie stattdessen das STEP jedes Bauteils (exakter Volumenkörper) direkt aus dem Bauteil.
- **STL**: ein Netz aus allen Bauteilen. **3MF**: jedes Bauteil einmal, je Kopie platziert.
- Stückliste (CSV).

## Einschränkungen

- Die Baugruppenzeichnung und das Baugruppen-STEP sind in dieser Version noch nicht umgesetzt (sie benötigen einen exakten Kernel). Explosionsansichten dienen Bildern auf dem Bildschirm.
