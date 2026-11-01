---
title: Der Netzkernel
summary: Diese Version von PartCraft baut jedes Bauteil mit einem Netzkernel, der in Ihrem Browser läuft. Was das für runde Flächen, Volumen und Dateien bedeutet, woran Sie erkennen, dass er arbeitet, und welche Features auf einen exakten Kernel warten.
from: 68d32d16
keywords: Kernel, Netz, Manifold, exakt, B-Rep, facettiert, Kurven, OpenCascade, OCCT, Verrundung braucht exakt, nicht vorhanden, offline, WebAssembly
---

Ein Geometriekernel ist die Engine, die Ihren Verlauf in einen Volumenkörper verwandelt. Diese Version von PartCraft hat einen: den **Netzkernel** (manifold-3d). Er läuft als kleines WebAssembly-Programm auf Ihrem Computer und ist einen Moment nach dem Öffnen der Anwendung bereit. Nichts von Ihrem Bauteil wird irgendwohin gesendet.

| | Netzkernel |
|---|---|
| Runde Formen | Ebene Facetten. **Kurven** im Bauteilbereich legt fest, wie fein |
| Volumen und Flächeninhalte | Die des facettierten Volumenkörpers, bei runden Bauteilen etwas zu niedrig |
| Skizzen, Extrusion, Ausschnitt, Drehung, Bohrungen, Muster, Spiegeln, Bezugsebenen | Ja |
| Verrundung und Fase | An geraden Kanten zwischen ebenen Flächen; aufeinandertreffende Rundungen werden auf Gehrung geschnitten |
| Schale und Formschräge | Schale öffnet ebene Flächen (exakte Wandstärke); Formschräge neigt ebene Flächen |
| Exporte | STL, 3MF, STEP (facettiert), Zeichnungs-PDF und DXF |
| Zeichnungsansichten | Aus den Facetten gezeichnet, Schnittansichten eingeschlossen |
| Flächen und Kanten | Benannt und nach Art bekannt (eben, Zylinder, Kegel, Kugel, Torus; gerade, Kreis), aus den Skizzen übernommen: die Arbeitsbereiche Simulation, Generativ und Fertigung, Messen, das Wählen und die Bohrungstabelle nutzen sie |

Das Kürzel nahe dem rechten Ende der Statusleiste lautet **Netzkernel**, solange er Ihr Bauteil aufbaut.

## Was auf einen exakten Kernel wartet

Ein exakter (B-Rep-)Kernel behält echte Kreise, Zylinder und Kegel sowie glatte Verrundungen an jeder Kante; Sweeps, Lofts, Oberflächen, Blech, Rippen, mehrere Körper, STEP-Import und exakter STEP-Export bauen darauf auf. Frühere Lab-Stände von PartCraft nutzten dafür OpenCascade. Dessen Lizenz (die LGPL) passt nicht zu diesem Release, in dem jede Anwendung unter Apache-2.0 steht und nur freizügig lizenzierte Bibliotheken verwendet, also ist er nicht enthalten. Hier gibt es kein Datum.

Bis dahin melden diese Features **Noch nicht vorhanden**, wenn Sie sie wählen: Die Statusleiste nennt den Grund, und die Kurzinfos ihrer Schaltflächen enden mit „noch nicht vorhanden (braucht einen exakten Kernel)“. [Was noch nicht vorhanden ist](topic:not-built-yet) listet jedes mit einer Alternative auf.

Ein Bauteil, das in einem früheren Stand mit ihnen erstellt wurde, öffnet sich weiterhin. Diese Features bleiben im Verlauf als nicht aufgebaut markiert (zeigen Sie auf eines, um den Grund zu sehen), der Rest des Bauteils wird aufgebaut, und beim Speichern bleiben sie unverändert erhalten.

## Runde Flächen und Kurven

Der Netzkernel zeichnet einen Kreis als Polygon. **Kurven** im Bauteilbereich legt fest, wie viele Seiten ein ganzer Kreis bekommt; mehr Seiten sehen glatter aus und messen näher am wahren Wert, brauchen aber länger zum Aufbauen. Volumen, Flächeninhalte und Abstände von {{ui:Messen}} beziehen sich auf diesen facettierten Volumenkörper: Bei einer Bohrung oder einem Aufsatz sind sie etwas kleiner als die der runden Form.

## Online und offline

Der Netzkernel gehört zum eigenen Download der Anwendung. Um ohne Verbindung zu arbeiten, speichern Sie PartCraft für die Offline-Nutzung, solange Sie online sind: Wählen Sie in der Anwendungsleiste {{ui:Für Offline speichern}} und warten Sie, bis **Offline bereit** erscheint. Einzelheiten: [Offline arbeiten](common:offline).
