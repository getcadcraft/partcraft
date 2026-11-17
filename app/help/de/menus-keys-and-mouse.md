---
title: Menüs, Tasten und Maus
summary: Wählen Sie einen Menüstil, der zu Ihrer gewohnten Arbeitsweise passt, geben Sie jedem Befehl eine eigene Taste, verschieben Sie Befehle zwischen den Registerkarten des Menübands und legen Sie fest, was das Rad und jede Maustaste in der 3D-Ansicht tun.
keywords: Menüstil, Menüs, Menüband, Symbolleiste, Feature-Baum, Tastenkürzel, Hotkeys, Tasten, anpassen, neu belegen, Maus, Rad, invertieren, Zoomrichtung, mittlere Taste, Orbit, Pan, exportieren, importieren, Wechsel, vertraut
from: 8445b06c
---

Die Befehle von PartCraft sind gleich, egal wie Sie sie erreichen. Ein **Menüstil** legt nur fest, wo sie auf dem Bildschirm stehen, wie sie dort heißen und mit welchen Tasten sie laufen. Wählen Sie ihn unter {{ui:Einstellungen}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menüs, Tasten und Maus}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die zwei Stile

| Stil | Was Sie erhalten |
|---|---|
| {{ui:PartCraft}} | Die eigene Symbolleiste von PartCraft: der Arbeitsbereich-Umschalter, Datei, Skizze, Features, Zeichnung, Baugruppe, Bearbeiten und Ansicht. Tasten {{key:S}} Skizze, {{key:F}} einpassen, {{key:M}} messen, {{key:X}} Schnittansicht. Der Standard. |
| {{ui:Feature-Baum}} | Ein Menüband, angelegt wie bei featurebasierten mechanischen CAD-Programmen: ein Menü {{ui:Datei}} (mit allen Exporten), Schnellschaltflächen und die Registerkarten {{ui:Features}}, {{ui:Skizze}}, {{ui:Flächen}}, {{ui:Auswerten}}, {{ui:Zeichnung}}, {{ui:Baugruppe}}, {{ui:Studien}} (die Arbeitsbereiche und ihre Werkzeuge), {{ui:Illustrate}} (die manuellen Werkzeuge des Arbeitsbereichs Illustrate; seine Werkzeuge wechseln zuerst zu Illustrate) und {{ui:Ansicht}}. {{ui:Features}} beginnt mit {{ui:Skizze}}, da ein Bauteil mit einer Skizze beginnt. Zusätzliche Tasten: {{key:E}} Extrusion, {{key:H}} Bohrung, und {{key:V}} gefolgt von einem Buchstaben für eine Ansicht: {{key:V}} {{key:F}} vorne, {{key:V}} {{key:B}} hinten, {{key:V}} {{key:T}} oben, {{key:V}} {{key:O}} unten, {{key:V}} {{key:R}} rechts, {{key:V}} {{key:L}} links, {{key:V}} {{key:I}} isometrisch, {{key:V}} {{key:N}} normal zu. In der 3D-Ansicht dreht die mittlere Taste die Ansicht, {{key:Shift}} mit der mittleren Taste schwenkt, die rechte Taste schwenkt, und die linke Taste wählt nur aus. |

Jeder Stil behält {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} und {{key:Mod+A}}.

Ein Werkzeug eines anderen Arbeitsbereichs wechselt zuerst dorthin; ein Design-Werkzeug, das in einem anderen Arbeitsbereich gewählt wird, kehrt zuerst zu Design zurück. Skizzenwerkzeuge warten auf eine Skizze, die Zeichenwerkzeuge auf das Zeichnungsblatt, die Baugruppenwerkzeuge auf eine Baugruppe: Die Statusleiste sagt, was zuerst zu tun ist.

:::tip
In einer Skizze, auf dem Zeichnungsblatt, in einer Baugruppe und in den anderen Arbeitsbereichen behalten Buchstaben dort ihre eigene Bedeutung (L Linie, R Rechteck, J Verbindung …) in jedem Stil. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeile behalten immer ihre Bedeutung. Eine Taste aus dem eigenen Layout von PartCraft, die Ihr Stil einem anderen Befehl gegeben hat, tut nichts, und die Statusleiste sagt, wohin ihr Befehl gewandert ist.
:::

## Nach Ihren Wünschen anpassen

1. Wählen Sie den Stil, der Ihren Wünschen am nächsten kommt, dann klicken Sie auf {{ui:Anpassen…}}.
2. Auf {{ui:Tasten und Menüs}} finden Sie einen Befehl (das Suchfeld hilft). Wählen Sie {{ui:Taste hinzufügen}} und drücken Sie die Taste, oder zwei Tasten nacheinander. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Mit dem Menüband verschiebt {{ui:Wo er steht}} den Befehl in eine andere Registerkarte und Gruppe, in das Menü {{ui:Datei}} oder zu {{ui:Nur Tasten}}.
4. Auf {{ui:Maus}} legen Sie das Rad fest, die Tasten, die eine Skizze schwenken, und was jede Taste in der 3D-Ansicht tut.
5. Geben Sie dem Stil einen Namen und klicken Sie auf {{ui:Speichern}}.

Das Speichern eines eingebauten Stils erstellt Ihre eigene Kopie („Mein Feature-Baum“); der eingebaute bleibt unverändert. Eine Taste, die zwei Befehlen zugewiesen ist, oder eine, die ausgeführt würde, bevor eine Zweitastenkombination getippt werden kann, wird rot angezeigt und muss vor dem Speichern behoben werden.

## Maus

- **Mausrad**: {{ui:Nach oben scrollen vergrößert}} (Standard) oder {{ui:Nach oben scrollen verkleinert}}, und wie schnell. Ein Zusammenziehen auf dem Trackpad zoomt immer in die Richtung, in die sich Ihre Finger bewegen.
- **Die Skizze schwenken mit**: der mittleren Taste, der rechten Taste oder beiden. Ein Rechtsklick in einer Skizze beendet weiterhin den Schritt des Werkzeugs.
- **Ziehen in der 3D-Ansicht**: {{ui:Je Ansicht eigene}} behält die Einstellung von PartCraft ({{ui:Einstellungen}} › {{ui:PartCraft}}: links dreht, oder mitte dreht). Oder legen Sie jede Taste auf {{ui:Drehen}}, {{ui:Schwenken}}, {{ui:Zoomen}} oder nichts fest; {{key:Shift}} mit der Drehtaste schwenkt. Ein Klick ohne Ziehen wählt weiterhin aus.

## Mitnehmen

{{ui:Exportieren}} speichert den verwendeten Stil als kleine Datei `.ccinput.json`; {{ui:Importieren…}} fügt eine hinzu, von einem anderen Rechner oder aus dem Team. Eine importierte Datei kann nur auf eigene Befehle von PartCraft zeigen: Alles andere darin wird weggelassen und in der Statusleiste gezählt. {{ui:Diesen Stil löschen}} entfernt einen eigenen.

:::note
Diese Einstellungen bleiben in diesem Browser. {{ui:Diesen Stil in jeder App verwenden}} unter den Stilkarten lässt jede App in ihrem passenden Stil öffnen (eigene Symbolleiste oder ein Menüband), mit den Änderungen, die Sie dort gemacht haben. Ein anderer Stil in einer App ändert nur diese App.
:::

Verwandt: [Tasten und Maus](topic:keyboard) · [PartCraft-Einstellungen](topic:settings) · [Umstieg von einem anderen parametrischen Modellierer](topic:coming-from)
