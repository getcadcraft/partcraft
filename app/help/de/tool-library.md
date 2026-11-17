---
title: Die Werkzeugbibliothek
summary: Speichern Sie die Werkzeuge, die Sie verwenden, im Browser, damit jedes Bauteil sie haben kann, und verschieben Sie Werkzeugbibliotheken als JSON-Datei zwischen Computern.
keywords: Werkzeugbibliothek, Werkzeuge, Exportieren, Importieren, JSON, Werkzeuge speichern, T-Nummer, Schaftfräser, Werkstattwerkzeuge
from: 8b9f2483
---

Der Reiter **Werkzeuge** der Fertigung listet die Werkzeuge des Bauteils. Unter **Werkzeugbibliothek** können Sie Ihre eigenen Werkzeuge über ein Bauteil hinaus behalten:

- {{ui:Dieses Werkzeug speichern}} fügt das gewählte Werkzeug zu **Meine gespeicherten Werkzeuge** hinzu; {{ui:Alle Werkzeuge dieses Bauteils speichern}} fügt alle hinzu. Meine gespeicherten Werkzeuge werden in diesem Browser aufbewahrt und stehen für jedes Bauteil zur Verfügung. Ein Werkzeug, das Sie bereits gespeichert haben (gleiche Art, Größe, Schneiden und Überschreibungen), wird nicht doppelt gespeichert.
- {{ui:Zu diesem Bauteil hinzufügen}} übernimmt das gewählte gespeicherte Werkzeug in das Bauteil. Ist seine T-Nummer schon von einem anderen Werkzeug im Bauteil belegt, erhält es die nächste freie Nummer, und der Bereich sagt es. {{ui:Aus meiner Bibliothek entfernen}} streicht es aus der gespeicherten Liste (nicht aus Bauteilen, die es schon haben).
- {{ui:Werkzeuge exportieren…}} schreibt die Werkzeuge des Bauteils als `.json`-Datei; {{ui:Werkzeuge importieren…}} fügt die Werkzeuge einer solchen Datei dem Bauteil hinzu, mit denselben Regeln (ein dort bereits vorhandenes Werkzeug wird übersprungen, eine belegte T-Nummer wird verschoben). Die Datei enthält Größen, Schneiden, Materialien und die Vorschub- und Drehzahl-Überschreibungen, die Sie eingegeben haben; sie enthält keine IDs. Verwenden Sie sie, um die Werkzeuge einer Werkstatt auf einen anderen Computer zu verschieben oder einem Kollegen zu geben.

Kann der Browser die Bibliothek nicht behalten (der Speicher ist aus oder voll), meldet das Speichern es, und **Werkzeuge exportieren** ist der Weg, eine Datei zu behalten. Eine Datei muss eine PartCraft-Werkzeugbibliothek dieser Version oder älter sein, mit höchstens 500 Werkzeugen gültiger Größen; alles andere wird mit dem Grund abgelehnt.

Die Schnittgeschwindigkeiten und Vorschübe pro Zahn, die einem Werkzeug beiliegen, sind Startwerte; siehe [Werkzeugwege und G-Code erstellen](topic:manufacture).
