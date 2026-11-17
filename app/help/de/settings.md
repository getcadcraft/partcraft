---
title: PartCraft-Einstellungen
summary: Wählen Sie, welche Maustaste die Ansicht dreht, lassen Sie eine Wischgeste auf dem Trackpad das Bauteil drehen und verschieben, schalten Sie das automatische Setzen von Abhängigkeiten beim Skizzieren ein oder aus und legen Sie fest, wie viele Threads die Simulationslöser verwenden.
keywords: Einstellungen, Voreinstellungen, Optionen, Maus, mittlere Taste, Radtaste, Orbit, drehen, Trackpad, Touchpad, Scrollen, Wischen, Pinch, Abhängigkeiten, Zwangsbedingungen, automatische Abhängigkeiten, Fang, deckungsgleich, Threads, Solver-Threads, Kerne, Prozessoren, mehrere Threads, schnelleres Lösen, parallel
from: 759edcaf
---

Öffnen Sie {{ui:Einstellungen}} über das Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Der erste Reiter, {{ui:PartCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält die, die alle CadCraft-Apps gemeinsam nutzen (Design, Symbolleiste, Bereiche). Die Einstellungen von PartCraft gelten nur in der App: Sie ändern sie hier, und dieser Browser merkt sie sich. {{ui:PartCraft-Einstellungen zurücksetzen}} stellt alles auf den Ausgangszustand zurück.

## Ansicht drehen

- **Linke Taste** (Ausgangswert): Ziehen mit der linken Taste dreht das Bauteil; Ziehen mit der rechten oder mittleren Taste verschiebt die Ansicht (Pan).
- **Mittlere Taste**: Drücken Sie das Rad und ziehen Sie, um das Bauteil zu drehen. Halten Sie {{key:Shift}} (oder {{key:Ctrl}} oder ⌘) mit der mittleren Taste gedrückt, oder ziehen Sie mit der rechten Taste, um die Ansicht zu verschieben (Pan). Die linke Taste wählt nur Flächen, Kanten und Ebenen aus, sodass ein Klick, der sich ein wenig bewegt, das Bauteil nie dreht. Viele CAD-Programme arbeiten so.

Das Rad zoomt in beiden Fällen an der Zeigerposition. In einer Skizze verschieben die rechte und die mittlere Taste die Ansicht wie bisher.

## Scrollen: Mausrad oder Trackpad

- **Automatisch erkennen** (Ausgangswert): PartCraft beobachtet das Scrollen. Seitliches oder feines Scrollen, wie es ein Trackpad sendet, dreht das Bauteil; ganze Rastungen des Rads zoomen.
- **Mausrad**: Scrollen zoomt immer zum Zeiger.
- **Trackpad**: Wischen Sie mit zwei Fingern, um das Bauteil zu drehen. Halten Sie {{key:Shift}} und wischen Sie, um zu verschieben, und zoomen Sie mit einer Pinch-Geste. In einer Skizze verschiebt ein Zwei-Finger-Wischen die Skizze.

Eine Pinch-Geste zoomt bei jeder Auswahl. Wenn „Automatisch erkennen“ bei Ihrer Maus oder Ihrem Trackpad falsch liegt, wählen Sie das, was Sie haben. Mehr unter [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).

## Skizzieren: Abhängigkeiten beim Zeichnen hinzufügen

**Abhängigkeiten beim Zeichnen hinzufügen** (Ausgangswert: ein): Ein Klick, der an einen Punkt einrastet, macht den neuen Punkt deckungsgleich mit ihm, ein Klick auf eine Kurve legt den Punkt auf diese Kurve, und eine fast waagerecht oder senkrecht gezeichnete Linie wird waagerecht oder senkrecht. Siehe [Abhängigkeiten und Bemaßungen](topic:relations-dimensions).

Schalten Sie es aus, wenn Sie Geometrie nahe an anderer Geometrie platzieren wollen, ohne sie daran zu binden. Der Zeiger rastet weiterhin an Punkten und Kurven ein, aber nichts wird verbunden: Linien, die in einer Kette gezeichnet werden, teilen ihre Enden nicht, sodass ein Ziehen sie auseinanderreißen kann. Fügen Sie die gewünschten Abhängigkeiten selbst im rechten Bereich hinzu. Ein geschlossenes Profil wird weiterhin extrudiert, wenn seine Enden sich treffen.

:::note
Die Einstellung ändert nur, was neues Zeichnen hinzufügt. Bestehende Abhängigkeiten in einer Skizze bleiben, und das Werkzeug Verrundung erstellt weiterhin seinen tangentialen Bogen und Radius.
:::

## Skizzieren: Bemaßung beim Zeichnen

**Bemaßung beim Zeichnen** (Ausgangswert: ein): Während eine Linie, ein Rechteck, ein Kreis oder ein Bogen gezeichnet wird, füllt eine eingegebene Zahl das Maßfeld neben dem Zeiger aus ({{key:Tab}} springt zum nächsten Feld), und {{key:Enter}} zeichnet die Form in dieser Größe, mit einer steuernden Bemaßung für jedes eingegebene Maß. Ausgeschaltet: Eine Zahl beim Zeichnen bewirkt nichts, und Formen werden nur mit Klicks gezeichnet. Siehe [Die Größe beim Zeichnen eingeben](topic:sketch-basics#type-the-size-as-you-draw).

## Eckanzeige

Was in der Ecke der 3D-Ansicht erscheint: **ViewCube** (Ausgangswert; oben rechts. Klicken Sie auf eine Fläche, Kante oder Ecke, um von dort aus zu sehen. Ziehen Sie ihn, um die Ansicht zu drehen, und ziehen Sie seinen Kompassring, um das Modell zu drehen), **Achssymbol** (ein kleines X-, Y-, Z-Zeichen unten links, das sich mit der Ansicht dreht: X rot, Y grün, Z blau) oder **Keine**. Beides wird nicht angezeigt, während Sie skizzieren oder auf dem Zeichenblatt sind. Siehe [Der ViewCube](topic:view-cube).

## Solver-Threads

Wie viele Threads die Simulationslöser verwenden dürfen. **Automatisch** (Ausgangswert) nimmt einen weniger als die logischen Prozessoren des Computers (höchstens 16), damit die Seite während eines Lösens reagiert; oder wählen Sie eine Zahl. Große Voxel-Studien, Knickung, Spannung über die Zeit und Strömung lösen sich auf mehreren Threads schneller (etwa 2× auf 4 Threads bei 80,000 Würfeln laut unseren Messungen, mehr auf einem leerlaufenden Computer). Modelle mit weniger als etwa 20,000 Unbekannten bleiben bei einem Thread, weil das Starten der Threads mehr kostet, als sie sparen. Ein Lösen mit mehreren Threads liefert dasselbe Ergebnis wie mit einem Thread (bis auf Rundung: Die Summen werden in einer anderen Reihenfolge addiert). Die Ergebnisse jeder Studie zeigen **N Threads** oder **1 Thread** mit dem Grund unter **Solver**.

Threads brauchen, dass die Seite **cross-origin-isoliert** ist (der Browser lässt Worker nur dann Speicher teilen). Die Labor-Seite ist es; wo nicht, sagt die Einstellung es („Diese Seite ist nicht cross-origin-isoliert, daher laufen die Löser unabhängig von der hier gewählten Option auf einem Thread.“), und jedes Lösen verwendet einen Thread. Alles andere funktioniert gleich, und die Antworten sind dieselben.

Laminare Strömungsstudien nutzen die Threads ebenfalls (etwa 2.5× auf 4 Threads bei 54,000 Fluidzellen, dieselbe Antwort bis auf die letzte Stelle). Der Löser für quadratische Tetraeder und die Wärmeübertragung laufen auf einem Thread: Die Parallelisierung war auf unserem Testcomputer langsamer (ihre Löser sind durch die Speichergeschwindigkeit und durch einen Schritt begrenzt, der sich nicht aufteilen lässt).

### Auf Ihrem eigenen Webserver

Wenn Sie PartCraft auf Ihrem eigenen Server betreiben, funktioniert es so, wie es bereitgestellt wird. Für die Solver-Threads lassen Sie den Server zwei Header mit der Seite von PartCraft senden:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Unter Apache, in der `.htaccess` des Ordners (benötigt mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Unter nginx, im `location`-Block, der PartCraft ausliefert:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Laden Sie die Seite neu: Einstellungen › Solver-Threads bietet dann **Automatisch** mit der Anzahl der Prozessoren Ihres Computers an. Der zweite Header bewirkt, dass der Browser alles ablehnt, was die Seite von einer anderen Website lädt und das nicht erlaubt; für PartCraft allein ist das in Ordnung, denn es lädt alles aus seinem eigenen Ordner.
