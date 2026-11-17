---
title: Trackpad, Touch und kleine Bildschirme
summary: Wie Sie mit einem Mac- oder Laptop-Trackpad drehen, verschieben und zoomen, was auf einem Touchscreen funktioniert und was weiterhin eine Tastatur braucht, und wie sich der Bildschirm auf einem Telefon oder einem schmalen Fenster anordnet.
keywords: Trackpad, Touchpad, Magic Mouse, Mac, Touch, Tablet, iPad, Telefon, Pinch, zwei Finger, Rechtsklick, Sekundärklick, Gesten, kleiner Bildschirm, mobil
from: 0e764fd8
---

PartCraft ist für eine Maus mit Rad und mittlerer Taste gemacht, aber ein Trackpad funktioniert gut, sobald Sie die Gesten kennen, und ein Touchscreen eignet sich zum Betrachten von Bauteilen und einfachem Skizzieren.

## Trackpad

:::mac
| Zum | So geht's |
|---|---|
| Das Bauteil drehen (3D) | Mit einem Finger klicken und ziehen (oder mit drei Fingern ziehen, wenn Sie das Ziehen mit drei Fingern eingeschaltet haben) |
| Verschieben (3D) | {{key:Shift}} (oder ⌘) halten, klicken und ziehen, oder mit zwei gedrückten Fingern klicken und ziehen (ein Ziehen mit Sekundärklick) |
| Das Bauteil durch Wischen drehen | Mit zwei Fingern wischen; mit {{key:Shift}} verschiebt das Wischen. Erfordert, dass **Scrollen** auf „Automatisch erkennen“ (der Anfang) oder „Trackpad“ steht |
| Zoomen (3D und Skizze) | Pinch. Der Zoom geht zum Zeiger. Steht **Scrollen** auf „Mausrad“, zoomt auch ein Scrollen mit zwei Fingern |
| Rechtsklick | Mit zwei Fingern klicken oder {{key:Ctrl}}+Klick |
| Verschieben in einer Skizze | Mit zwei Fingern wischen („Automatisch erkennen“ oder „Trackpad“), oder mit zwei gedrückten Fingern klicken und ziehen. {{key:Shift}}+Ziehen verschiebt in einer Skizze nicht (es zieht ein Auswahlfenster) |
| Zur Auswahl in einer Skizze hinzufügen | {{key:Shift}}+Klick oder ⌘+Klick |

Schalten Sie den Sekundärklick in den Systemeinstellungen unter Trackpad › Zeigen & Klicken ein, wenn der Zwei-Finger-Klick nichts bewirkt.
:::

:::windows linux
| Zum | So geht's |
|---|---|
| Das Bauteil drehen (3D) | Das Touchpad drücken (oder tippen und halten) und ziehen |
| Verschieben (3D) | {{key:Shift}} oder {{key:Ctrl}} halten und ziehen, oder mit gedrücktem rechten Tastenbereich ziehen |
| Das Bauteil durch Wischen drehen | Mit zwei Fingern wischen; mit {{key:Shift}} verschiebt das Wischen. Erfordert, dass **Scrollen** auf „Automatisch erkennen“ (der Anfang) oder „Trackpad“ steht |
| Zoomen (3D und Skizze) | Pinch, wo das Touchpad es unterstützt. Der Zoom geht zum Zeiger. Steht **Scrollen** auf „Mausrad“, zoomt ein Scrollen mit zwei Fingern |
| Rechtsklick | Zwei-Finger-Tippen oder die untere rechte Ecke des Touchpads |
| Verschieben in einer Skizze | Mit zwei Fingern wischen („Automatisch erkennen“ oder „Trackpad“), oder mit gedrücktem rechten Tastenbereich ziehen. {{key:Shift}}+Ziehen verschiebt in einer Skizze nicht |
| Zur Auswahl in einer Skizze hinzufügen | {{key:Shift}}+Klick oder {{key:Ctrl}}+Klick |
:::

**Scrollen** finden Sie in den [PartCraft-Einstellungen](topic:settings): „Automatisch erkennen“ (der Anfang) behandelt seitliches oder feines Scrollen wie ein Trackpad, „Trackpad“ tut es immer, „Mausrad“ nie. Ein Pinch zoomt in allen drei Fällen.

Die Pfeiltasten drehen die 3D-Ansicht, und {{key:Shift}} mit den Pfeiltasten verschiebt, sobald Sie in die Ansicht geklickt haben: praktisch auf einem Trackpad. {{key:Plus}} und {{key:Minus}} zoomen.

## Touchscreens

PartCraft nimmt Touch-Eingaben an, daher funktionieren Tablets, Touch-Laptops und Telefone, mit Einschränkungen.

:::touch
**Touch-Tasten**

Sobald Sie den Bildschirm berühren, erscheint unten rechts in der Ansicht eine kleine Leiste mit den Tasten, die einem Finger fehlen. Sie verschwindet, sobald Sie eine Maus verwenden.

- {{ui:Esc}}: die Esc-Taste. Sie bricht ab, was Sie begonnen haben, oder geht einen Schritt zurück, genau wie die Taste.
- {{ui:Hinzufügen}} (in einer Skizze, mit Auswählen): Solange sie aktiv ist, fügt jedes Tippen ein Element zur Auswahl hinzu oder nimmt es heraus, wie {{key:Shift}}+Klick. Tippen Sie erneut darauf, um wieder ein Element nach dem anderen zu wählen.
- {{ui:Fertig}} (während Sie eine Linienkette, einen Spline oder ein Polygon zeichnen): beendet sie, wie ein Rechtsklick.

Einen Finger etwa eine halbe Sekunde ruhig zu halten, hat bei einem Tippen dieselbe Wirkung: Mit einem Zeichenwerkzeug beendet es, was Sie zeichnen, und mit Auswählen fügt es das Element unter Ihrem Finger zur Auswahl hinzu oder nimmt es heraus. Punkte und Linien treffen Sie mit dem Finger leichter: PartCraft sucht etwa doppelt so weit um ein Tippen herum wie um einen Klick.

**In der 3D-Ansicht**

- Ein Finger: das Bauteil drehen.
- Zwei Finger: Pinch zum Zoomen, gemeinsam bewegen zum Verschieben.
- Tippen: eine Fläche, eine Kante oder eine Ebene wählen. Vor dem Tippen gibt es kein Hervorheben beim Darüberfahren.

**In einer Skizze**

- Tippen Sie mit einem Zeichenwerkzeug, um jeden Punkt zu setzen: Tippen Sie auf den Anfang, dann auf das Ende. Der Fang greift dort, wo Sie den Finger heben.
- Zwei Finger zoomen und verschieben. Einen zweiten Finger aufzusetzen bricht ein Ziehen ab, das der erste Finger begonnen hat.
- Um eine Linienkette zu beenden, tippen Sie auf {{ui:Fertig}}, halten den Finger ruhig oder tippen erneut auf {{ui:Linie}} (oder auf ein anderes Werkzeug) in der Symbolleiste.
- Mit Auswählen tippen Sie zum Wählen; ziehen Sie einen Punkt oder eine Linie zum Verschieben; ziehen Sie auf leerer Fläche für ein Fenster. Ein zweites Tippen ersetzt die Auswahl, außer {{ui:Hinzufügen}} ist aktiv (oder Sie halten den Finger beim zweiten Element ruhig).
- Um eine Bemaßung zu ändern, verwenden Sie **Bearbeiten** daneben im rechten Bereich.

**Das Zeichnungsblatt**

Tippen Sie, um Symbole zu setzen und auszuwählen, und ziehen Sie ein Symbol, um es zu verschieben. Zoomen Sie mit Pinch, verschieben Sie mit zwei Fingern, oder ziehen Sie mit einem Finger über leeres Papier. Ein zweiter Finger stoppt ein Symbol, das Sie gerade ziehen, und es springt an seinen Platz zurück.

**Was weiterhin eine Tastatur braucht**

- Zahlen eingeben: Die Bildschirmtastatur erscheint in Zahlenfeldern und Bemaßungsfeldern.
- Tastenkürzel für Werkzeuge: verwenden Sie die Symbolleiste.
:::

## Kleine Bildschirme und Telefone

- Ab 1280 Pixel Breite passt die Symbolleiste in eine Zeile.
- Zwischen etwa 760 und 1100 Pixeln werden die seitlichen Bereiche schmaler.
- Unterhalb von etwa 760 Pixeln (ein Telefon oder ein schmales Fenster) ordnet sich der Bildschirm untereinander: Symbolleiste (seitlich wischen für mehr Schaltflächen), die 3D-Ansicht, die Statusleiste, dann der Eigenschaftenbereich und der Verlauf. Scrollen Sie die Seite, um die Bereiche zu erreichen.
- Menüs ({{ui:Exportieren}}, {{ui:Ansichten}}) öffnen sich über die volle Breite des Bildschirms.

:::note
Auf dem iPhone gibt es im Browser keinen Vollbildmodus; {{key:Ctrl+Shift+F}} und die Schaltfläche für den Bildschirmmodus wechseln nur zwischen normal und ausgeblendeten Leisten.
:::

Ein Telefon eignet sich zum Öffnen eines Bauteils, zum Drehen und zum Prüfen seiner Angaben. Echtes Modellieren braucht einen größeren Bildschirm und eine Maus oder ein Trackpad.

## Browser

Aktuelle Versionen von Chrome, Edge, Firefox und Safari führen PartCraft unter Windows, macOS und Linux sowie auf Tablets und Telefonen aus, solange WebGL und WebAssembly verfügbar sind. Siehe [Browser und Computer](common:browsers).
