---
title: Verschnitt aufbewahren und wiederverwenden
summary: Nach einer Verschachtelung wird der Rest jeder Platte zu einem nummerierten Reststück in einer Bestandsliste; die nächste Verschachtelung verwendet zuerst die Reststücke, dann ganze Platten.
keywords: Verschachtelung, Verschnitt, Reststück, Bestand, Rest, Platte, Tafel, wiederverwenden, Material, Dicke, CSV
from: 7a68d4b8
---

Wenn Sie Teile auf Platten verschachteln, kann der nutzbare Rest jeder Platte (keine Splitter) als **Reststück** aufbewahrt werden: eine nummerierte Kontur (R-0001, R-0002 …) mit dem Material, der Dicke, ihrer Größe und dem Auftrag, aus dem sie stammt. Die Liste wird mit der Datei gespeichert und kann als CSV gespeichert werden.

## Wieder verwenden

Geben Sie das **Material** und die **Dicke** ein, lassen Sie {{ui:Zuerst Reststücke verwenden}} eingeschaltet und verschachteln Sie. Reststücke mit gleichem Material und gleicher Dicke werden vom kleinsten an zuerst probiert; die passenden Teile kommen auf sie, innerhalb der eigenen Kontur des Reststücks und mit Abstand zu dessen Kante; was nicht passt, kommt auf neue Platten. Der Auftragsbericht nennt, welche Reststücke verwendet wurden und was übrig blieb. Wenn {{ui:Übriges als Reststücke speichern}} eingeschaltet ist, schreibt {{ui:Diesen Auftrag in den Bestand übernehmen}} ihn danach in die Bestandsliste: ein verwendetes Reststück wird mit **Verwendet** (samt Auftrag) markiert und nicht erneut angeboten; was davon übrig bleibt, wird ein neues Reststück, das sich sein Ursprungsstück merkt.

## Was als Reststück gilt

Der Rest wird mit dem eingestellten Abstand gemessen (kein Teil liegt näher als dieser Abstand an einem Schnitt). Streifen, die schmaler als ein Zwanzigstel der Platte sind, und Stücke, die kleiner als 2 % der Platte sind, gelten als Verschnitt; ändern Sie beide Grenzen, wenn Ihre Werkstatt kleinere Stücke aufbewahrt. Löcher in Teilen gehören zu den Teilen selbst und werden nicht aufbewahrt. Eine Rolle hat keine Reststücke.

## In der Zeichnung

Die DXF einer Verschachtelung zeichnet die Kontur jedes Reststücks auf dem Layer REMNANTS mit seiner Nummer in der Mitte, damit die Stücke beim Schneiden gekennzeichnet werden können.

Noch nicht umgesetzt: Faserrichtung eines Reststücks, Strichcode- oder Etikettenbogen, Reststücke von Rollen, Bestand, der zwischen Projekten geteilt wird.
