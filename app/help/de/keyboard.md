---
title: Tasten und Maus
summary: Jeder Tastenkürzel und jede Mausaktion in PartCraft, gruppiert nach dem Ort, an dem sie wirken: überall, Kopieren und Einfügen, am Bauteil, in der 3D-Ansicht, in einer Skizze, im Verlauf und in einer Baugruppe.
keywords: Tastatur, Tastenkürzel, Hotkeys, Tasten, Maus, Orbit, drehen, Pan, Zoom, Rad, Rechtsklick, rückgängig, wiederholen, speichern, öffnen, Esc, löschen, Alt-Pfeil, kopieren, einfügen, ausschneiden, duplizieren, alles auswählen, mittlere Taste
from: 3a59c3a3
---

Tasten wirken nicht, während Sie in einem Feld eines Bereichs tippen, außer {{key:Mod+S}} und {{key:Mod+O}}, die immer wirken. Buchstabentasten wirken ohne Zusatztaste.

Allgemeine Hinweise zu Tasten im Browser und auf Tastaturen ohne Funktionstasten: [Tasten, Mäuse und Trackpads](common:keys).

## Überall

| Taste | Aktion |
|---|---|
| {{key:Mod+S}} | Bauteil speichern (in einer Baugruppe: die Baugruppe). Schließt zuerst eine offene Skizze |
| {{key:Mod+O}} | Eine Bauteil- oder Baugruppendatei öffnen (fragt zuerst, wenn es nicht gespeicherte Änderungen gibt) |
| {{key:Mod+Z}} | {{ui:Rückgängig}} |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen |
| {{key:F1}} | Diese Hilfe öffnen oder schließen (auch {{ui:Hilfe}} in der Appleiste). {{key:Esc}} schließt sie ebenfalls. Auf vielen Laptops und Mac-Tastaturen Fn gedrückt halten |
| {{key:Ctrl+Shift+F}} | Bildschirmmodus: normal, Vollbild, Vollbild mit ausgeblendeten Leisten. Auf dem Mac ebenfalls Ctrl, nicht ⌘ |
| {{key:Esc}} | Vollbild verlassen (wenn im Vollbild) |
| {{key:Mod+,}} | {{ui:Einstellungen}}, einschließlich der Registerkarte PartCraft (siehe [PartCraft-Einstellungen](topic:settings)) |

Im Zahlenfeld eines Bereichs ist {{key:Mod+Z}} das eigene Rückgängig des Browsers für Text. Im Zahlenfeld über einer Skizzenbemaßung macht es den Schritt in PartCraft rückgängig.

## Kopieren, Einfügen und Duplizieren

Sie wirken auf das, woran Sie gerade arbeiten: die ausgewählte Geometrie in einer offenen Skizze, das ausgewählte Feature im Verlauf oder das ausgewählte Bauteil in einer Baugruppe. Details unter [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

| Taste | Aktion |
|---|---|
| {{key:Mod+C}} | Auswahl {{ui:Kopieren}} |
| {{key:Mod+X}} | Ausschneiden: kopieren, dann löschen |
| {{key:Mod+V}} | Einfügen. In einer Skizze folgt die Kopie dem Zeiger: an der gewünschten Stelle klicken |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen: gleiche Koordinaten (in einer Baugruppe am gleichen Ort) |
| {{key:Mod+D}} | Duplizieren: kopieren und einfügen in einem Schritt, die Zwischenablage bleibt unberührt |
| {{key:Mod+A}} | Alles auswählen (in einer Skizze) |
| {{key:Esc}} | Auswahl aufheben (und ein Einfügen abbrechen, das dem Zeiger folgt) |

In einem Zahlenfeld kopieren und einfügen diese Tasten Text wie üblich. Ausgewählter Text in einem Bereich wird vom Browser kopiert.

## Am Bauteil (keine Skizze offen)

| Taste | Aktion |
|---|---|
| {{key:S}} | Skizze auf der gewählten Ebene oder ebenen Fläche; ist nichts gewählt, den Ort per Klick bestimmen |
| {{key:F}} | Bauteil in der Ansicht einpassen |
| {{key:M}} | {{ui:Messen}} in jedem Arbeitsbereich und in einer Baugruppe; {{key:Esc}} hebt die Wahl auf, ein zweites {{key:Esc}} schließt das Messen (siehe [Abstände, Winkel und Masse messen](topic:measure)) |
| {{key:X}} | Schnittansicht ein oder aus, in jedem Arbeitsbereich und in einer Baugruppe; {{key:Esc}} schließt sie (siehe [Mit einer Schnittansicht hineinsehen](topic:section-view)) |
| {{key:Delete}} | Ausgewähltes Feature löschen (fragt nach, wenn andere es verwenden) |
| {{key:0}} … {{key:9}}, {{key:.}} | Bei ausgewähltem Feature: seine Hauptzahl eingeben (die Tiefe einer Extrusion, der Durchmesser einer Bohrung, die Anzahl eines Musters, der Radius einer Verrundung …), dann {{key:Enter}}. {{key:Esc}} behält den alten Wert |
| {{key:Backspace}} | Ausgewähltes Feature löschen, wenn eines gewählt ist |
| {{key:Esc}} | Auswahl einer Skizzenebene beenden oder die Auswahl aufheben (einschließlich Kanten oder Flächen, die mit {{key:Shift}} gewählt wurden) |

## In der 3D-Ansicht

Klicken Sie zuerst in die Ansicht, damit sie den Tastaturfokus hat.

| Taste | Aktion |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Ansicht um 15 Grad drehen |
| {{key:Shift+Left}} und die anderen Pfeile | {{ui:Pan}} |
| {{key:Plus}} oder {{key:=}} | Hineinzoomen |
| {{key:Minus}} | Herauszoomen |

| Maus | Aktion |
|---|---|
| Mit der linken Taste ziehen | Ansicht drehen (Orbit) |
| Mit der rechten oder mittleren Taste ziehen | {{ui:Pan}} |
| {{key:Shift}}, {{key:Ctrl}} oder ⌘ gehalten beim Ziehen mit der linken Taste | {{ui:Pan}} |
| Am Rad drehen | Zoom am Zeiger (von Ihnen weg vergrößert) |
| Zweifingerwischen auf dem Trackpad | Ansicht drehen; mit {{key:Shift}} schwenken. Zusammenziehen zoomt. Eingestellt über **Scrollen** in [PartCraft-Einstellungen](topic:settings) |

Mit **Ansicht drehen: Mittlere Taste** in [PartCraft-Einstellungen](topic:settings) dreht die mittlere Taste die Ansicht, {{key:Shift}} mit der mittleren oder der rechten Taste schwenkt, und die linke Taste wählt nur aus.
| Klick | Eine Fläche wählen (sie wird ganz hervorgehoben), eine Kante oder eine Ebene |
| {{key:Shift}}+Klick auf eine Kante oder Fläche | Mehrere Kanten oder Flächen sammeln |
| Auf leeren Raum klicken | Wahl aufheben |

## Beim Wählen von Kanten oder Flächen für eine Verrundung, Fase oder Schale

| Taste oder Maus | Aktion |
|---|---|
| Auf eine Kante oder Fläche klicken | Hinzufügen, oder entfernen, wenn sie schon gewählt ist |
| {{key:Esc}} oder {{key:Enter}} | Wählen beenden (wie {{ui:Fertig}}) |
| {{key:F}} | {{ui:Einpassen}} |
| Pfeiltasten, wenn die Ansicht den Fokus hat | Drehen; mit {{key:Shift}} schwenken |

## Auf dem Zeichnungsblatt

| Taste | Aktion |
|---|---|
| {{key:F}} | Blatt einpassen |
| {{key:Plus}} / {{key:Minus}} | Zoom (wenn das Blatt den Fokus hat) |
| {{key:Shift+Left}} und die anderen Pfeile | {{ui:Pan}} (wenn das Blatt den Fokus hat) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Ausgewähltes GD&T-Symbol um 1 mm verschieben |
| {{key:Delete}} oder {{key:Backspace}} | Ausgewähltes Symbol löschen |
| {{key:Esc}} | Platzieren eines Symbols beenden; sonst Auswahl aufheben; sonst zurück zum Modell |

| Maus | Aktion |
|---|---|
| Auf eine Ansicht klicken, wenn Bezug, Rahmen, Oberflächenangabe oder Detail gewählt ist | Dort platzieren (rastet auf die nächste Linie ein) |
| Auf ein Symbol klicken | Auswählen |
| Ein Symbol ziehen | Verschieben (die Führungslinie bleibt an ihrem Punkt) |
| Am Rad drehen | Zoom am Zeiger |
| Mit der rechten oder mittleren Taste ziehen | {{ui:Pan}} |

## In einer Skizze

| Taste | Aktion |
|---|---|
| {{key:L}} | Linie |
| {{key:R}} | Rechteck |
| {{key:C}} | Kreis |
| {{key:A}} | Bogen (Mittelpunkt, Anfang, Ende) |
| {{key:P}} | Punkt |
| {{key:N}} | Mittellinie |
| {{key:F}} | Ecke abrunden |
| {{key:D}} | Bemaßung |
| {{key:B}} | Spline (Passpunkte) |
| {{key:T}} | Stutzen |
| {{key:E}} | Dehnen |
| {{key:O}} | Versetzen ({{key:B}} während des Versetzens: beide Seiten) |
| {{key:M}} | Spiegeln |
| {{key:S}} | Wählen |
| {{key:Q}} | Ausgewählte Kurven zu Konstruktionsgeometrie umschalten und zurück |
| {{key:Enter}} | Linienzug oder Spline beenden |
| {{key:Delete}} oder {{key:Backspace}} | Auswahl löschen |
| {{key:Mod+A}} | Alles in der Skizze auswählen |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Geometrie kopieren, ausschneiden, einfügen (das Einfügen folgt dem Zeiger) |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen (gleiche Koordinaten) |
| {{key:Mod+D}} | Auswahl duplizieren und mit einem Klick platzieren |
| {{key:Esc}} | Schrittweise zurück: Zahlenfeld oder Einfügen abbrechen, Linienzug beenden, zurück zu Wählen, Auswahl aufheben, dann die Skizze schließen |

| Maus | Aktion |
|---|---|
| Klick | Punkte mit einem Zeichenwerkzeug setzen; mit Wählen auswählen |
| {{key:Shift}}+Klick | Zur Auswahl hinzufügen oder daraus entfernen ({{key:Ctrl}}+Klick unter Windows und Linux, ⌘+Klick auf dem Mac, ebenso) |
| Auf leerem Raum ziehen (Wählen) | Fenster: wählt alles, was vollständig innen liegt |
| Einen Punkt, eine Linie oder eine Kreiskante ziehen (Wählen) | Verschieben; Abhängigkeiten bleiben erhalten |
| Die Zahl einer Bemaßung ziehen (Wählen) | Die Beschriftung verschieben |
| Doppelklick auf eine Bemaßung | Ihren Wert ändern |
| Beim Zeichnen von Linien doppelklicken oder rechtsklicken | Linienzug beenden |
| Mit der rechten oder mittleren Taste ziehen | {{ui:Pan}} |
| Am Rad drehen | Zoom am Zeiger |

### Im Zahlenfeld

| Taste | Aktion |
|---|---|
| {{key:Enter}} | Wert übernehmen |
| {{key:Esc}} | Ohne Änderung schließen |

Ein Klick daneben übernimmt den Wert ebenfalls.

## Im Verlauf

| Taste | Aktion |
|---|---|
| {{key:Tab}} | Zur Liste springen |
| {{key:Up}} / {{key:Down}} | Zwischen Zeilen wechseln |
| {{key:Enter}} oder {{key:Space}} | Zeile auswählen |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Ausgewähltes Feature nach oben oder unten verschieben, soweit der Verlauf es zulässt |
| {{key:F2}} | Hauptzahl des Features in seiner Zeile ändern; {{key:Enter}} übernimmt sie, {{key:Esc}} behält die alte |

| Maus | Aktion |
|---|---|
| Klick | Ebene oder Feature auswählen |
| Doppelklick auf eine Skizze | Öffnen |
| Doppelklick auf die Zahl eines Features | In der Zeile ändern |

## In einer Baugruppe

| Taste | Aktion |
|---|---|
| {{key:J}} | Verbindung beginnen: danach auf eine ebene Fläche an jedem von zwei Bauteilen klicken |
| {{key:F}} | {{ui:Einpassen}} |
| {{key:Esc}} | Begonnene Verbindung abbrechen oder die Auswahl aufheben |
| {{key:Delete}} | Ausgewähltes Bauteil oder ausgewählte Verbindung entfernen |
| {{key:Backspace}} | Ausgewähltes Bauteil oder ausgewählte Verbindung entfernen |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Rückgängig und Wiederholen in der eigenen Liste der Baugruppe |
| {{key:Mod+D}} | Ausgewähltes Bauteil duplizieren (gleiches Bauteil, neben den anderen) |
| {{key:Mod+C}}, dann {{key:Mod+V}} oder {{key:Mod+Shift+V}} | Bauteil kopieren, dann neben den anderen oder an derselben Stelle einfügen |

Maus in der Ansicht: wie in der 3D-Ansicht oben. Klicken Sie ein Bauteil an, um es auszuwählen. Doppelklicken Sie ein Bauteil in der Liste, um es zu bearbeiten.

## Im Arbeitsbereich Script

| Taste | Aktion |
|---|---|
| {{key:F5}} | Skript ausführen (im Editor, im Bereich oder in der Ansicht) |
| {{key:Mod+Enter}} | Ausgewählte Zeilen ausführen oder die Zeile mit dem Cursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Ausgewählte Zeilen einrücken / ausrücken. Um den Editor mit der Tastatur zu verlassen, {{key:Esc}} drücken, dann {{key:Tab}} |
| {{key:Mod+/}} | Ausgewählte Zeilen auskommentieren oder wieder aktivieren |
| {{key:Mod+F}} / {{key:Mod+H}} | Suchen / Suchen und Ersetzen im Skript; {{key:Enter}} oder {{key:F3}} springt zum nächsten Treffer, {{key:Shift+Enter}} oder {{key:Shift+F3}} zum vorherigen, {{key:Esc}} schließt |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Block unter dem Cursor einklappen / ausklappen (eine Funktion, if, for, while … end) |
| {{key:Mod+Space}} | Vervollständigungen für den Namen anzeigen, den Sie tippen (öffnet sich auch nach zwei Buchstaben); {{key:Up}} / {{key:Down}} wählen, {{key:Enter}} oder {{key:Tab}} übernimmt eine, {{key:Esc}} schließt |
| {{key:Enter}} in der Zeile unter der Konsole | Diese eine Anweisung ausführen; {{key:Up}} und {{key:Down}} holen frühere zurück |
| {{key:F}} | Ansicht auf das einpassen, was Skripte anzeigen |

Siehe [Skripte schreiben und ausführen](topic:craftscript).

## Tastenkürzel, die der Browser übernehmen kann

- {{key:Mod+Y}} in Safari kann den Verlauf öffnen: Zum Wiederholen {{key:Mod+Shift+Z}} verwenden.
- {{key:Mod+D}} ist die Lesezeichen-Taste des Browsers: PartCraft nutzt sie, solange die App den Fokus hat, und lässt sie in Feldern unberührt, in denen Sie tippen.
- {{key:F11}} und {{key:Mod+Plus}} / {{key:Mod+Minus}} sind Vollbild und Seitenzoom des Browsers, nicht die von PartCraft. Verwenden Sie {{key:Ctrl+Shift+F}} für Vollbild und das Rad für das Modell.
- Funktionstasten auf vielen Laptops und Macs benötigen die Fn-Taste: Drücken Sie Fn+{{key:F1}} für Hilfe oder nutzen Sie die Schaltfläche {{ui:Hilfe}}.

Touch- und Trackpad-Gesten: [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).

## Wo Bewegen zu finden ist

{{ui:Bewegen}} ist im Menü {{ui:Mehr}} der Gruppe Features als {{ui:Körper bewegen}} zu finden, im Feld {{ui:Bewegen}}, in dem Sie ΔX, ΔY und ΔZ eingeben, und als Pfeile {{ui:Zum Bewegen ziehen}} am Bauteil.
