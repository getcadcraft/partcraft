---
title: Der Netzkernel
summary: Diese Version von PartCraft baut jedes Bauteil mit einem Netzkernel, der in Ihrem Browser läuft. Was das für runde Flächen, Volumen und Dateien bedeutet, wie Sie erkennen, dass er arbeitet, und welche Features auf einen exakten Kernel warten.
keywords: Kernel, Netz, Manifold, exakt, B-Rep, facettiert, Kurven, OpenCascade, OCCT, Verrundung braucht exakt, nicht umgesetzt, offline, WebAssembly
from: f931645c
---

Ein Geometriekernel ist die Engine, die Ihren Verlauf in einen Volumenkörper verwandelt. Diese Version von PartCraft hat einen: den **Netzkernel** (manifold-3d). Er läuft auf Ihrem Computer als kleines WebAssembly-Programm und ist kurz nach dem Öffnen der App bereit. Nichts an Ihrem Bauteil wird irgendwohin gesendet.

| | Netzkernel |
|---|---|
| Runde Formen | Ebene Facetten. **Kurven** im Bauteilbereich legt fest, wie fein |
| Volumen und Flächen | Vom facettierten Volumenkörper, bei runden Bauteilen etwas zu klein |
| Skizzen, Extrusion, Schnitt, Drehung, Bohrungen, Muster, Spiegeln, Bezugsebenen | Ja |
| Verrundung und Fase | An geraden Kanten zwischen ebenen Flächen; Verrundungen, die aufeinandertreffen, werden auf Gehrung geschnitten |
| Schale und Formschräge | Schale öffnet ebene Flächen (exakte Wandstärke); Formschräge neigt ebene Flächen |
| Exporte | STL, 3MF, STEP (exakt: runde Flächen auf ihren wahren Oberflächen geschrieben; oder facettiert), Zeichnungs-PDF und DXF |
| Zeichnungsansichten | Aus den Facetten gezeichnet, Schnittansichten eingeschlossen |
| Flächen und Kanten | Benannt und nach Art erkannt (eben, Zylinder, Kegel, Kugel, Torus; gerade, Kreis), aus den Skizzen übernommen: die Arbeitsbereiche Simulation, Generativ und Fertigung, Messen, Auswahl und die Bohrungstabelle verwenden sie |

Das Feld rechts unten in der Statusleiste zeigt **Netzkernel**, während es Ihr Bauteil erstellt.

## Was auf einen exakten Kernel wartet

Ein exakter (B-Rep-)Kernel behält echte Kreise, Zylinder und Kegel bei und bietet glatte Verrundungen an jeder Kante, Sweeps, Lofts, Flächen, Blech, Rippen, mehrere Körper und den STEP-Import mit gekrümmten Flächen als exakte Geometrie; all das baut auf einem solchen Kernel auf. (Der exakte STEP-Export wartet nicht darauf: Der Netzkernel kennt die wahre Oberfläche jeder Fläche aus der Skizze, und der Export schreibt sie.) Frühere Laborversionen von PartCraft verwendeten dafür OpenCascade. Dessen Lizenz (die LGPL) passt nicht zu dieser Ausgabe, in der jede App unter Apache-2.0 steht und nur freizügig lizenzierte Bibliotheken verwendet, daher ist er nicht enthalten. Für nichts hier gibt es ein Datum.

Bis dahin sagen diese Features **Noch nicht umgesetzt**, wenn Sie sie wählen: Die Statusleiste nennt den Grund, und die Quickinfo ihrer Schaltflächen endet mit „noch nicht umgesetzt (benötigt einen exakten Kernel)“. [Was noch nicht umgesetzt ist](topic:not-built-yet) listet jedes mit der Alternative auf.

Ein Bauteil, das damit in einer früheren Version erstellt wurde, lässt sich weiterhin öffnen. Diese Features bleiben im Verlauf, als nicht umgesetzt markiert (fahren Sie darüber für den Grund); der Rest des Bauteils wird erstellt, und beim Speichern bleiben sie unverändert.

## Runde Flächen und Kurven

Der Netzkernel zeichnet einen Kreis als Vieleck. **Kurven** im Bauteilbereich legt fest, wie viele Seiten ein voller Kreis erhält; mehr Seiten wirken glatter und messen näher am wahren Wert, brauchen aber länger zum Erstellen. Volumen, Flächen und Abstände aus {{ui:Messen}} stammen vom facettierten Volumenkörper: Bei einer Bohrung oder einem Aufsatz sind sie etwas kleiner als bei der runden Form.

## Online und offline

Der Netzkernel ist Teil des eigenen Downloads der App. Um ohne Verbindung zu arbeiten, speichern Sie PartCraft für die Offline-Nutzung, solange Sie online sind: Wählen Sie {{ui:Für Offline speichern}} in der App-Leiste und warten Sie, bis **Offline bereit** erscheint. Details: [Offline arbeiten](common:offline).
