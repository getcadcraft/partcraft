---
title: Ein Bauteil gemeinsam mit Live TeamWork modellieren
summary: Was sich in PartCraft ändert, während Sie in einer Live-TeamWork-Sitzung aus CadCraft Studio sind: die Features aller in einem Baum, jedes Fenster baut denselben Volumenkörper, Ihr eigenes Rückgängig und das Beitreten aus einem Browser im selben Netzwerk.
keywords: live, live teamwork, studio live, gemeinsam, zusammenarbeiten, sitzung, live teilen, beitreten, feature-baum, historie, neu aufbauen, cursor, zeiger, einander sehen, namen, farbe, auswahl, rückgängig, host
from: 1809b96c
---

## Was Sie lernen

Was mit einem Bauteil passiert, während mehrere Personen es gleichzeitig modellieren. CadCraft Studio startet und betritt die Live-TeamWork-Sitzung (Teilen, Beitreten); diese Seite handelt vom Bauteil selbst.

## Alle modellieren gleichzeitig

Alle arbeiten am selben Feature-Baum: Skizzen, Extrusionen, Bohrungen, Muster, Verrundungen, Parameter. Ihre eigenen Änderungen erscheinen sofort; die der anderen erscheinen kurz nach dem Ändern. Nur der Baum wird übertragen: Jedes Fenster baut den Volumenkörper selbst, und der Kernel von PartCraft baut in jedem Fenster aus demselben Baum denselben Volumenkörper.

- **Zwei Personen ändern ein Feature:** unterschiedliche Einstellungen (die eine die Tiefe, die andere die Endbedingung) bleiben beide erhalten; dieselbe Einstellung gilt für die spätere Änderung.
- **Eine Skizze** wird als Ganzes übertragen: Wenn zwei Personen dieselbe Skizze gleichzeitig bearbeiten, gewinnt die spätere Änderung. Vereinbaren Sie, wer welche Skizze zeichnet.
- **Ein Feature, das auf einem eben gelöschten aufbaut** (eine Extrusion einer entfernten Skizze, eine Bohrung auf einer entfernten Fläche), wird zurückgenommen, und die Statusleiste sagt, warum.
- **Den Baum umordnen** wird geprüft: Ziehen zwei Personen Features im selben Moment, wird der zweite Verschiebevorgang zurückgenommen.

## Einander sehen

Jede Person in der Sitzung hat eine eigene Farbe. Sie sehen den Zeiger jeder Person als Pfeil in deren Farbe mit ihrem Namen daneben, auf der Fläche, auf die sie zeigt. Wenn sie ein Feature im Baum ausgewählt hat, erscheint dessen Name nach ihrem.

Zeiger, Namen und Auswahlen gelten nur für die Sitzung: Sie werden nie in der Datei gespeichert und gehen nie in jemandes Rückgängig ein. Sie gleiten dorthin, wo sich jede Person befindet, sodass sie auch bei einer langsamen Verbindung flüssig bleiben.

## Rückgängig nimmt nur Ihre eigene Arbeit zurück

{{key:Mod+Z}} nimmt Ihre eigene letzte Änderung zurück und lässt die der anderen unberührt. Hat jemand seitdem dasselbe geändert, wird nichts zurückgenommen, und die Statusleiste sagt, wer es war.

## Aus einem Browser beitreten

Ein Teammitglied ohne Studio kann das Bild unter dem Code des Hosts mit einem Telefon, Tablet oder Computer im selben Netzwerk scannen. PartCraft öffnet sich im Browser, füllt sich mit dem Bauteil des Hosts, sobald der Host Sie hereinlässt, und baut es auf. Ein Einladungslink erlaubt es jemandem, aus einem anderen Netzwerk beizutreten: Der Host braucht einen Arbeitsplatz im Team-Cloud-Tarif für die App, alle anderen treten kostenlos bei, und der Link funktioniert nur, solange die Sitzung des Hosts offen ist.

## Wenn die Sitzung endet

Nur der Host speichert das Bauteil. Alle anderen behalten eine nicht gespeicherte Kopie: Speichern Sie sie, wenn Sie sie behalten möchten.

:::note
Baugruppen werden in einer Sitzung noch nicht geteilt: Öffnen Sie das Bauteil selbst, um gemeinsam daran zu arbeiten.
:::
