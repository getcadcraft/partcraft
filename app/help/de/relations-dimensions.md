---
title: Eine Skizze mit Abhängigkeiten und Bemaßungen vollständig bestimmen
summary: Abhängigkeiten im rechten Bereich und Bemaßungen mit dem Bemaßungswerkzeug hinzufügen, die Zustände unterbestimmt, vollständig bestimmt und überbestimmt an den Farben ablesen und eine überbestimmte Skizze korrigieren.
keywords: Abhängigkeiten, Bedingungen, Bemaßungen, intelligente Bemaßung, vollständig bestimmt, unterbestimmt, überbestimmt, Freiheitsgrade, deckungsgleich, horizontal, vertikal, parallel, senkrecht, tangential, gleich, konzentrisch, Mittelpunkt, fixieren, Konflikt, redundant
from: e76d047a
---

Eine Skizze ist **vollständig bestimmt**, wenn jeder Punkt und jedes Maß durch Abhängigkeiten und Bemaßungen festgelegt ist. Eine vollständig bestimmte Skizze ändert sich nur, wenn Sie eine Zahl ändern. Deshalb verhält sich das Bauteil beim späteren Bearbeiten vorhersagbar. PartCraft zwingt Sie nicht, eine Skizze vollständig zu bestimmen, zeigt aber immer an, wie nah Sie daran sind.

## Den Skizzenzustand ablesen

Der Zustand wird an drei Stellen angezeigt: im Chip oben links in der Ansicht, in der Meldung oben im rechten Bereich und in der Markierung im Verlauf.

| Zustand | Chip | Farbe der Geometrie | Bedeutung |
|---|---|---|---|
| Unterbestimmt | „Unterbestimmt · 3 Freiheitsgrade“ | Blau | Einige Geometrie kann sich noch bewegen. Ziehen Sie blaue Geometrie, um zu sehen, in welche Richtung |
| Vollständig bestimmt | „Vollständig bestimmt“ | Tinte (schwarz auf Papier, hell auf Modell) | Jeder Punkt und jedes Maß ist festgelegt |
| Überbestimmt | „Überbestimmt“ | Rot bei den betroffenen Abhängigkeiten | Einige Abhängigkeiten widersprechen sich, oder eine ergibt sich bereits aus anderen |

Konstruktionsgeometrie ist unabhängig vom Zustand grau und gestrichelt. Ausgewählte Elemente sind orange. Ein „Freiheitsgrad“ ist eine Möglichkeit, wie sich etwas noch bewegen kann: Ein freier Punkt hat zwei (links-rechts und oben-unten), ein freier Kreis hat drei (sein Zentrum und sein Radius).

Die Legende unter der Meldung im rechten Bereich wiederholt die Farben.

## Eine Bemaßung hinzufügen

1. Drücken Sie {{key:D}} oder wählen Sie {{ui:Bemaßung}}.
2. Klicken Sie auf das, was Sie messen wollen:
   - **eine Linie**: ihre Länge;
   - **ein Kreis**: sein Durchmesser; **ein Bogen**: sein Radius;
   - **zwei Punkte** (ein Endpunkt, ein Zentrum, ein loser Punkt oder der Ursprung): der Abstand zwischen ihnen;
   - **ein Punkt und eine Linie**: der Abstand vom Punkt zur Linie;
   - **zwei parallele Linien**: der Abstand zwischen ihnen; **zwei Linien im Winkel**: der Winkel zwischen ihnen.
3. Nach dem ersten Element zeigt die Statusleiste „Zweites Element anklicken oder dort klicken, wo die Bemaßung hin soll“. Klicken Sie auf ein zweites Element oder in den leeren Raum, wo die Zahl stehen soll.
4. Ein Zahlenfeld öffnet sich mit dem aktuellen Wert. Geben Sie das Maß ein und drücken Sie {{key:Enter}}. {{key:Esc}} behält den gemessenen Wert.

**Wo Sie die Zahl platzieren, bestimmt die Art** bei einer schrägen Linie oder zwei Punkten: Platzieren Sie sie oberhalb oder unterhalb, um einen horizontalen Abstand zu erhalten, links oder rechts, um einen vertikalen Abstand zu erhalten, und anderswo für den wahren (ausgerichteten) Abstand.

Das Feld akzeptiert einfache Zahlen in Millimetern oder Grad, zum Beispiel `25`, `12.5` oder `1e3`. Ein führendes `⌀`, `Ø` oder `R` sowie ein nachgestelltes `mm` oder `°` werden ignoriert. Winkel liegen zwischen 0 und 180 Grad. Rechenausdrücke wie `20+5` werden nicht akzeptiert. Um ein Maß mit einer Variablen oder Formel zu verknüpfen, beginnen Sie es mit `=`.

Um eine Bemaßung später zu ändern, doppelklicken Sie auf ihre Zahl in der Skizze, oder wählen Sie neben ihr in der Liste im rechten Bereich **Bearbeiten**.

:::tip
Sie können auch zuerst Geometrie auswählen (Auswahlwerkzeug) und im rechten Bereich eine Bemaßungsschaltfläche wählen: {{ui:Abstand}}, {{ui:Horizontaler Abstand}}, {{ui:Vertikaler Abstand}}, {{ui:Radius}}, {{ui:Durchmesser}} oder {{ui:Winkel}}. Nur die zur Auswahl passenden werden angezeigt. So geben Sie einem Kreis einen Radius statt eines Durchmessers.
:::

## Eine Abhängigkeit hinzufügen

Abhängigkeiten werden im rechten Bereich hinzugefügt, nicht mit einem Werkzeug.

1. Drücken Sie {{key:S}} für das Auswahlwerkzeug.
2. Klicken Sie auf ein Element, dann auf ein zweites mit {{key:Shift}}+Klick, falls die Abhängigkeit zwei braucht. Auch der Ursprung kann ausgewählt werden.
3. Der rechte Bereich zeigt „Ausgewählt: Linie l3, Punkt p1“ und eine Schaltfläche für jede passende Abhängigkeit, zum Beispiel {{ui:∥ Parallel}} oder {{ui:• Deckungsgleich}}.
4. Klicken Sie auf die Schaltfläche. Die Skizze wird sofort gelöst.

Passt keine Abhängigkeit, zeigt der Bereich „Keine Abhängigkeit passt zu dieser Auswahl. Wählen Sie ein oder zwei Elemente aus (Shift+Klick fügt hinzu).“

Die vollständige Liste der Abhängigkeiten, was jede braucht und was sie bewirkt, steht unter [Skizzenabhängigkeiten und Bemaßungen](topic:sketch-relations).

Abhängigkeiten werden in der Skizze als kleine Symbole neben der Geometrie angezeigt (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Deckungspunkte sind ausgeblendet, außer die Geometrie ist ausgewählt oder die Abhängigkeit hat ein Problem. Klicken Sie auf ein Symbol, um die Abhängigkeit auszuwählen.

## Ein Beispiel: Profil einer L-förmigen Konsole

1. Skizzieren Sie auf der **Vorderebene**. Starten Sie mit dem Linienwerkzeug am Ursprung, klicken Sie sechs Ecken eines L an und enden Sie wieder am Ursprung. Die Kette endet von selbst, wenn Sie den ersten Punkt anklicken.
2. Linien, die nahezu horizontal oder vertikal gezeichnet werden, haben bereits H- und V-Abhängigkeiten, außer der letzten: Eine Linie, die auf einem bestehenden Punkt endet, erhält keine automatische Abhängigkeit. Drücken Sie {{key:S}}, klicken Sie auf diese letzte Linie und wählen Sie im rechten Bereich {{ui:V Vertikal}}. Der Chip zeigt „Unterbestimmt · 4 Freiheitsgrade“.
3. Drücken Sie {{key:D}}. Klicken Sie auf die untere Linie, klicken Sie darunter, geben Sie `80` ein und drücken Sie {{key:Enter}}.
4. Klicken Sie auf die linke Linie, klicken Sie links davon, geben Sie `60` ein und drücken Sie {{key:Enter}}.
5. Bemaßen Sie die obere kurze Linie mit `20` und die innere vertikale Linie mit `45` auf dieselbe Weise.
6. Der Chip zeigt jetzt **Vollständig bestimmt**, und das ganze L wird tintenfarben.

## Eine überbestimmte Skizze korrigieren

Widerspricht eine neue Abhängigkeit oder Bemaßung den anderen, verschiebt PartCraft nichts. Die Geometrie bleibt genau, wie sie war, die betroffenen Abhängigkeiten werden rot, und die Statusleiste nennt sie:

- „Überbestimmt: Horizontal, Abstand 40 können nicht alle erfüllt werden. Rückgängig machen oder eine davon löschen.“ Die Abhängigkeiten stehen in Konflikt.
- „Überbestimmt: Parallel ergibt sich bereits. Löschen Sie sie.“ Die Abhängigkeit bringt nichts: Die anderen erzwingen sie bereits. (Die Seiten eines Rechtecks sind zum Beispiel bereits parallel.)

So beheben Sie es:

1. Drücken Sie {{key:Mod+Z}}, um die letzte Änderung rückgängig zu machen, oder
2. suchen Sie das rote Element in der Liste **Abhängigkeiten und Bemaßungen** im rechten Bereich (eine Gruppe, die es enthält, ist geöffnet und rot) und wählen Sie daneben **Löschen**. Sie können auch auf sein Symbol oder seine Zahl in der Skizze klicken und {{key:Delete}} drücken.

:::note
In diesem Build gibt es keine „getriebenen“ (Referenz-)Bemaßungen. Eine Bemaßung, die nur ein Maß angibt, das die anderen Abhängigkeiten bereits festlegen, wird als überbestimmt behandelt. Lesen Sie Maße stattdessen im Bereich ab: Wählen Sie eine Linie aus und sehen Sie sich die Bemaßungsschaltflächen an, oder prüfen Sie die Bauteilfakten nach dem Extrudieren.
:::

Eine überbestimmte Skizze mit einem echten Konflikt lässt das Feature, das sie verwendet, fehlschlagen („Überbestimmt: 1 Abhängigkeit kann nicht alle erfüllt werden.“), und der Verlauf markiert es als **⚠ Fehler**. Eine Skizze, die nur redundant ist, wird trotzdem aufgebaut, mit einer ⚠-Warnung.

## Durch Ziehen finden, was frei ist

Ziehen Sie im Auswahlwerkzeug einen beliebigen blauen Punkt oder eine blaue Linie. Der Löser bewegt sie so wenig wie möglich und behält jede Abhängigkeit bei. Würde ein Ziehen eine Abhängigkeit brechen, springt die Geometrie zurück. Das ist der schnellste Weg zu sehen, welche Bemaßung noch fehlt.

## Die Liste der Abhängigkeiten

Ohne Auswahl listet der rechte Bereich **Abhängigkeiten und Bemaßungen**. Jede Zeile hat:

- **Bearbeiten** (nur Bemaßungen): öffnet das Zahlenfeld;
- **Auswählen**: wählt sie in der Skizze aus;
- **Löschen**: entfernt sie.

Abhängigkeiten derselben Art, die mehrfach vorkommen, teilen sich eine Zeile, zum Beispiel „Deckungsgleich × 5“ für ein Rechteck, das am Ursprung befestigt ist. Klicken Sie auf die Zeile, um sie zu öffnen: Jede Abhängigkeit wird nach dem aufgelistet, was sie verbindet („Punkt p2, Punkt p4“), mit eigenem **Auswählen** und **Löschen**. Die Zeile selbst hat:

- **Auswählen**: wählt alle davon in der Skizze aus;
- **Alle löschen**: entfernt alle in einem Schritt ({{key:Mod+Z}} stellt sie wieder her).

Eine Gruppe, die eine überbestimmte Abhängigkeit enthält, öffnet sich von selbst, mit ihrem Namen in Rot. Bemaßungen werden immer einzeln pro Zeile mit ihren Werten aufgelistet.

Ist Geometrie ausgewählt, zeigt die Liste nur die **Abhängigkeiten der Auswahl**.
