---
title: Baugruppe auf Kollisionen und Bewegung prüfen
summary: Finden Sie mit Kollision überlappende Bauteile, ziehen Sie an den Werten einer Verbindung, um die Bewegung zu beobachten, und fahren Sie eine Verbindung durch ihren Bereich, um zu finden, wo Bauteile kollidieren.
keywords: Überschneidung, Interferenz, Interferenzerkennung, Kollision, Überlappung, Gewindepassung, Abweichung der Gewindetiefe, berührende Flächen, ausblenden, Filter, Bewegung, Bewegungsstudie, Durchfahren, Bewegungsbereich, prüfen
from: 9c98db46
---

Zwei Prüfungen laufen auf den Bauteilen, so wie sie platziert sind: **Kollision** sucht nach überlappendem Material im Moment. Die **Bewegungsprüfung** bewegt eine Verbindung durch ihren Bereich und sucht unterwegs nach Überlappungen.

## Auf Überschneidung prüfen

1. Öffnen oder erstellen Sie eine Baugruppe (siehe [Baugruppe mit Verbindungen erstellen](topic:build-assembly)).
2. Wählen Sie {{ui:Kollision}}.

Die Statusleiste meldet das Ergebnis:

- „Keine Überschneidung zwischen 3 Bauteilen (… ms).“ Nichts überlappt.
- „Überschneidung: Flange1 und Flange2: Überlappung, 2.5 mm³.“ Für jedes Paar: welche Art von Ergebnis es ist und das gemeinsame Volumen.

Das Feld **Baugruppe** links zeigt **Überschneidung**: „Keine“, „2 Ergebnisse“ (die angezeigten) oder „Nicht geprüft“. Wenn nichts ausgewählt ist, listet das rechte Feld jedes Ergebnis unter **Überschneidung** auf.

Das Ergebnis wird gelöscht, sobald sich die Baugruppe ändert. Führen Sie {{ui:Kollision}} erneut aus, nachdem Sie eine Verbindung verschoben haben. Jedes Bauteilpaar wird gegen jedes andere geprüft, daher dauern große Baugruppen länger.

### Arten von Ergebnissen

| Art | Bedeutet |
|---|---|
| **Überlappung** | Die Bauteile teilen sich Volumen: eine echte Kollision. |
| **Abweichung der Gewindetiefe** | Das gemeinsame Volumen liegt im Gewinde des einen Bauteils, aber jenseits des anderen: ein Bolzen, der tiefer als seine Bohrung gewindet ist, oder ein glatter Schaft in einem Gewindeloch. |
| **Gewindepassung (kosmetische Gewinde)** | Das gemeinsame Volumen liegt in den Gewinden beider Bauteile: ein Bolzen in einem Gewindeloch. Kosmetische Gewinde werden in voller Gewindegröße gezeichnet, daher überlappen sie immer ein wenig. |
| **Berührende Flächen** | Kein gemeinsames Volumen, aber Flächen im Kontakt (innerhalb von 0.001 mm). |

Modellierte Gewinde (siehe [Gewinde an Wellen und Bohrungen, gezeichnet oder modelliert](topic:threads)) sind echte Geometrie. Was sie gemeinsam haben, ist eine **Überlappung**.

### Nicht Benötigtes ausblenden

Unter **Überschneidung** hat **Einblenden** ein Feld für jede Art. Entfernen Sie das Häkchen bei **Gewindepassung** und **Berührende Flächen**, um nur die Kollisionen zu sehen, die zählen. **Dieses Paar ausblenden** neben einem Ergebnis blendet dieses Bauteilpaar aus, unabhängig von der Art. Ausgeblendete Ergebnisse werden gezählt („2 Ergebnisse durch diese Filter ausgeblendet“), und **Ausgeblendete Paare wieder anzeigen** bringt die Paare zurück. Die Statusleiste zählt auch ausgeblendete Ergebnisse.

Die Filter werden mit der Baugruppe gespeichert, und jede Änderung ist ein Schritt von {{key:Mod+Z}}. **Eine Verbindung auf Kollisionen durchfahren** (unten) verwendet sie ebenfalls. Eine Baugruppe mit Filtern wird als Version 4 gespeichert. Ältere PartCraft-Versionen öffnen sie nicht, statt die Filter zu verlieren.

## Die Bewegung beobachten

1. Wählen Sie in der Liste links eine Verbindung aus, die sich bewegt (jede außer starr).
2. Ziehen Sie den Regler unter einem ihrer Werte, etwa **Winkel (°)** oder **Versatz (mm)**. Das Bauteil bewegt sich beim Ziehen.
3. Lassen Sie los. Die neue Position bleibt erhalten und kann mit {{key:Mod+Z}} rückgängig gemacht werden.

Sie können auch einen Winkel oder Versatz im Feld eingeben und {{key:Enter}} drücken.

Eine Verbindung auf einer geschlossenen Schleife (einem Getriebe) bewegt die ganze Schleife: Der Wert, den Sie ziehen, bleibt erhalten, und die anderen Verbindungen der Schleife folgen (siehe [Geschlossene Schleifen](topic:build-assembly#closed-loops-linkages)).

## Eine Verbindung auf Kollisionen durchfahren

1. Wählen Sie eine Verbindung aus, die sich bewegt.
2. Bei einer Verbindung mit mehreren Werten (Zylinder, Ebene, Kugel, Stift im Schlitz) wählen Sie unter **Bewegungen prüfen**, welcher Wert durchfahren werden soll.
3. Wählen Sie {{ui:Die Bewegung auf Kollisionen prüfen}}.

PartCraft bewegt diesen Wert in 24 gleichen Schritten durch 25 Positionen. Die anderen bleiben unverändert: ein Winkel von −180° bis 180° (eine Neigung von −90° bis 90°), eine Länge von minus bis plus der Größe des größten Bauteils. Es meldet:

- „Keine Kollision für Winkel (°) von -180 bis 180 (25 Positionen geprüft).“
- „6 von 25 Positionen kollidieren, zuerst bei Winkel (°) 45 (12.4 mm³).“ Die erste kollidierende Position und die Überlappung dort.

Der Button ist bei starren Verbindungen ausgegraut, da diese sich nicht bewegen. Das Durchfahren prüft nur die Positionen, nicht den Weg dazwischen. Ein dünnes Bauteil könnte zwischen zwei Schritten durch ein anderes hindurchgehen.

:::note
Kontakt und Schwerkraft sind nicht umgesetzt. Ohne Grenzen deckt das Durchfahren den gesamten Bereich ab. Geben Sie dem Wert **Grenzen** (siehe [Stückliste, Explosionsansichten und bewegliche Bauteile](topic:assembly-bom-explode)), und das Durchfahren deckt nur diese ab. So wird ein Scharnier, das sich um 90° öffnet, über 90° geprüft.
:::

## Eine Bewegungsstudie

**Baugruppe › Bewegung** steuert den Wert einer Verbindung von einem Start- zu einem Endwert über eine von Ihnen festgelegte Zeit (konstante Geschwindigkeit, sanft, sinusförmig oder hin und zurück). Dabei platziert es die Baugruppe bei jedem Schritt mit ihren Verbindungen und geschlossenen Schleifen und meldet, welche Kollisionen auftreten und wie nah sich die Bauteile kommen. **Punkt hinzufügen** folgt der Mitte eines Bauteils oder einem Punkt, den Sie darauf anklicken. Die Karte stellt seine Position, Geschwindigkeit und Beschleunigung sowie den Wert der Verbindung und den Abstand über der Zeit dar. **CSV speichern** und **Diagramm speichern** schreiben sie heraus. Geschwindigkeit und Beschleunigung ergeben sich aus den aufgezeichneten Positionen. Ein scharfer Spitzenwert zwischen zwei Schritten wirkt daher zu niedrig: Verwenden Sie mehr Schritte.

Nach **Ausführen** bewegt die Leiste **Schrittweise durch den Lauf** die Baugruppe zu jedem Schritt. Zeit, Wert und ob Bauteile dort kollidieren, werden daneben angezeigt. Die Verbindung behält ihren eigenen Wert, und **Zurück zum Modell** setzt die Baugruppe wieder ein. Die Einstellungen der Studie werden in der Baugruppendatei gespeichert. Ihre Ergebnisse werden durch **Ausführen** neu erstellt.

## Eine Kontaktstudie

**Baugruppe › Kontakt** zeigt, wie eine Baugruppe ihre Lasten dort trägt, wo Bauteile aufeinander drücken. Jedes Bauteil bringt seine eigenen Lager, Lasten und sein Material aus seiner eigenen **Simulation**-Studie mit, zum Beispiel eine feste Fläche an einem Bauteil oder eine Kraft an einem anderen. Hier wählen Sie die Paare. **Ein Paar hinzufügen**, dann **Seite A wählen** und Flächen eines Bauteils anklicken, dann **Seite B wählen** und Flächen eines anderen Bauteils anklicken. Ein Klick auf eine gewählte Fläche nimmt sie zurück. Esc oder **Fertig** beendet die Auswahl. Ein Paar ist **Reibungsfrei** (die Bauteile drücken aufeinander, rutschen aber) oder **Verbunden** (sie bleiben zusammen). Der Steifigkeitsfaktor legt fest, wie stark der Kontakt dem Eindringen widersteht: 20 ist ein guter Start, 1000 für einen steifen Stahlstapel.

**Lösen** führt die Last in Schritten aus und zeigt die Kontaktkraft, die tiefste Eindringtiefe, die größte Bewegung und die größte Spannung. Ein Bauteil ohne Paar wird ausgelassen, und die Karte sagt das. Reibungsfreier Kontakt hält ein Bauteil nicht seitlich. Geben Sie jedem Bauteil eine Lagerung in seiner eigenen Simulationsstudie oder verbinden Sie es, sonst kommen die Schritte möglicherweise nicht zur Ruhe. Die Paare und Einstellungen werden in der Baugruppendatei gespeichert.

**CalculiX-Eingabedatei exportieren** schreibt dasselbe Modell als CalculiX-Eingabedatei (.inp). CalculiX ist ein eigenständiges Programm, das Sie selbst installieren und ausführen. **CalculiX-Ergebnisse (.frd) lesen** liest danach die Verschiebungen zurück auf das Netz dieser Baugruppe und verweigert eine Datei, die für ein anderes Netz erstellt wurde. Der Löser hier kann plastisch rechnen, ist aber keine explizite Dynamik. Nichts hier ist eine zertifizierte Analyse: Lassen Sie alles Wichtige von einem Ingenieur prüfen.
