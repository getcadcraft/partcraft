---
title: Dokumente und Revisionen (der Tresor)
summary: Eine Schritt-für-Schritt-Anleitung für einen echten Auftrag: einen Projektordner mit Bauteilen und Baugruppen unter Kontrolle bringen, ein Bauteil auschecken, ändern, mit einer Notiz einchecken und freigeben, sehen, was es verwendet und in welchen Baugruppen es steckt sowie die Stückliste, was eine zweite Person sieht, während die Datei gesperrt ist, und wie das mit Cloud-Ordnern zusammenarbeitet.
keywords: Tresor, Dokumente, Anleitung, Tutorial, Auschecken, Einchecken, Revision, Freigabe, freigeben, Sperre, Verlauf, Verwendung, Stückliste, bom, Baugruppe, Cloud-Ordner, Projektordner, zwei Personen, gemeinsamer Ordner
from: 0a5e6983
---

## Was Sie tun werden

Sie sind Ana und arbeiten am Projekt Riverside Clinic mit einem Kollegen, Ben. Die Bauteile und Baugruppen des Projekts liegen in einem Ordner, auf den Sie beide zugreifen (ein Netzlaufwerk, ein synchronisierter Ordner oder ein Cloud-Ordner). Am Ende hat eine Datei den Weg von der ersten Kopie zu einer freigegebenen Revision **A** genommen, wurde als **B.1** erneut geändert, Sie haben gesehen, wer was getan hat, und Sie haben gesehen, was Ben sieht, wenn Sie die Datei halten.

Alles wird in einem versteckten Ordner `.ccvault` neben Ihren Dateien gespeichert: kein Server, nichts hochgeladen (ein Cloud-Ordner ist die Ausnahme, siehe letzter Schritt). Alle Schaltflächen und Regeln an einer Stelle finden Sie im Thema *Dokumente: Auschecken, Revisionen und Freigabe*, sofern Ihre App es hat.

## 1. Projektordner einrichten

1. Wählen Sie {{ui:Dokumente…}} in der Gruppe **Datei** der Symbolleiste.
2. Wählen Sie {{ui:Projektordner wählen}} und wählen Sie den Ordner, der die Bauteile und Baugruppen des Projekts enthält. (Projektordner funktionieren in Studio und in Browsern, die einen Ordner öffnen können, etwa Chrome und Edge. In anderen Browsern sagt das Panel das.)
3. Wählen Sie {{ui:Ändern}} neben **Person:** und geben Sie Ihren Namen ein, `Ana` (falls abgefragt, auch den Namen dieses Computers). Das Panel zeigt jetzt *Person: Ana auf* und Ihren Computer. Ihr Name steht bei allem, was Sie tun.
4. Wählen Sie {{ui:Einen Tresor in diesem Ordner anlegen}} und geben Sie den Projektnamen ein, `Riverside clinic`. Das Panel zeigt *Tresor für Riverside clinic gestartet.*

## 2. Eine Datei unter Kontrolle bringen

1. Öffnen Sie **Dateien nicht im Tresor** und wählen Sie {{ui:Hinzufügen}} neben `plates/Bracket.partcraft.json`.
2. Sie erscheint unter **Dateien im Tresor** in der Revision **A.1**, Status **In Bearbeitung**. A.1 ist ihre erste Kopie; der Tresor speichert eine Kopie jeder Revision.

## 3. Auschecken, ändern, einchecken

1. Wählen Sie {{ui:Öffnen}} neben `plates/Bracket.partcraft.json`. Das Bauteil öffnet sich in PartCraft, und das Panel schließt sich, damit Sie es sehen. Öffnen Sie das Panel erneut über {{ui:Dokumente…}}.
2. Öffnen Sie das Panel erneut und wählen Sie {{ui:Auschecken}}. In der Zeile steht nun **An Sie ausgecheckt**. Eine Sperrdatei wurde in `.ccvault/locks` angelegt; niemand sonst kann diese Datei auschecken, bis Sie sie einchecken.
3. Ändern Sie das Bauteil: eine Bemaßung bearbeiten, eine Bohrung hinzufügen. Speichern wird verweigert, solange die Datei nicht an Sie ausgecheckt ist, und das Panel sagt warum; Speichern unter funktioniert immer für eine Kopie Ihrer eigenen.
4. Öffnen Sie das Panel, wählen Sie {{ui:Einchecken}} und geben Sie ein, was sich geändert hat (`Tür verschoben`). Das Panel meldet *eingecheckt als A.2*. Die Datei im Projektordner ist nun das Bauteil, das Sie geöffnet hatten, und die Sperre ist aufgehoben. Einchecken ohne Änderung behält die Revision bei.

Wenn Sie es sich anders überlegen, gibt {{ui:Auschecken rückgängig}} die Datei zurück, ohne neue Revision.

## 4. Prüfen und freigeben

1. Wählen Sie {{ui:Zur Prüfung geben}}. Der Status wird **Zur Prüfung**, und die Datei ist schreibgeschützt.
2. Wählen Sie vor dem Freigeben {{ui:Projekteinstellungen}} und listen Sie auf, wer freigeben darf (ein Name pro Zeile), zum Beispiel `Ben` und `Carla`. Aktivieren Sie die Regel, dass die freigebende Person nicht die Person sein darf, die die Datei erstellt hat. Wählen Sie {{ui:Einstellungen speichern}}. Jetzt lehnt der Tresor selbst alle anderen ab.
3. Ben (oder Carla) wählt {{ui:Freigeben}} und gibt den Namen der freigebenden Person ein. Der Status wird **Freigegeben**, und die Revision wird **A**, mit *Freigegeben von* und dem Namen. Eine freigegebene Datei ist schreibgeschützt. {{ui:Zurückgeben}} hätte sie mit einem Grund in den Status **In Bearbeitung** zurückversetzt.

Der Name der freigebenden Person ist der Name, der im Panel eingegeben wird. Er ist ein Nachweis, wer abgezeichnet hat, kein Identitätsnachweis.

## 5. Eine neue Revision

1. Wählen Sie an der freigegebenen Datei {{ui:Neue Revision}}. Sie reservieren damit den nächsten Buchstaben.
2. Ändern Sie die Datei und wählen Sie {{ui:Einchecken}}. Die Revision ist **B.1**, In Bearbeitung. Geben Sie sie auf dieselbe Weise frei, dann wird sie **B**. {{ui:Auschecken rückgängig}} vor dem ersten Einchecken lässt sie bei **A**.

Die Revisionsbuchstaben laufen A, B … Z, AA, AB. Lässt Ihr Standard einige Buchstaben aus, überspringt die Projekteinstellung *Die ASME-Y14.35-Reihenfolge verwenden* für die nächsten Revisionen die Buchstaben I, O, Q, S, X und Z.

## 6. Nachsehen, was passiert ist

Wählen Sie den Namen der Datei, um ihre Details zu öffnen:

- **{{ui:Verlauf}}**: jedes Ereignis, neueste zuerst, mit Person, Computer und Zeitpunkt: *Als A.2 eingecheckt* von Ana, *Freigegeben* von Ben, und so weiter.
- **{{ui:Revisionen}}**: die Revisionstabelle: jede gespeicherte Revision mit Datum, wer sie eingecheckt hat, der Notiz und wer sie freigegeben hat. Der Tresor speichert eine Kopie jeder Revision in `.ccvault/revs`.
- **{{ui:Verwendet}}**: die Bauteile einer Baugruppe.
- **{{ui:Verwendet von}}**: *Verwendet von* listet jede Baugruppe im Tresor, die dieses Bauteil enthält. Ändern Sie eine Halterung, und Sie wissen, welche Baugruppen Sie prüfen müssen.

## Baugruppen: was sie verwenden und die Stückliste

Legen Sie eine Baugruppe (`.partcraft.json`, im Modus Baugruppe gespeichert) in den Ordner und fügen Sie sie hinzu. Wählen Sie ihren Namen: **Verwendet** listet die Bauteile auf, die sie enthält, mit Revision und Status jedes Bauteils; **Verwendet von** bei einem Bauteil listet jede Baugruppe, die es enthält. {{ui:Stückliste (CSV)}} speichert die ganze Teileliste, Ebene für Ebene, mit Mengen, Revisionen und Status, für eine Tabellenkalkulation. Ändern Sie eine Halterung, und **Verwendet von** zeigt Ihnen, welche Baugruppen Sie prüfen sollten.

## 7. Was Ben sieht, während Sie die Datei halten

Checken Sie die Datei nun erneut aus und bitten Sie Ben, denselben Projektordner auf seinem Computer zu öffnen und das Panel zu öffnen. In der Zeile der Datei sieht er **Ausgecheckt von Ana auf** Ihrem Computer **seit** der Uhrzeit, und keine Schaltfläche {{ui:Auschecken}}. Versucht er es trotzdem, verweigert der Tresor es: Die Sperre ist eine Datei, die das System nicht zweimal anlegt. Daher können zwei Personen die Datei nicht beide halten, auch nicht im selben Augenblick, wenn der Ordner in Studio auf der Festplatte liegt. (In einem Browser erlaubt der Ordner nur eine bestmögliche Sperre, und das Panel sagt es unter **Ordner**.)

Wenn Ana abwesend ist und Ben die Datei braucht, gibt {{ui:Auschecken aufheben}} sie frei. Er muss einen Grund eingeben; dieser kommt ins Protokoll mit dem Hinweis, wessen Auscheckung es war. Wenn das Projekt Administratoren festlegt, können nur sie das. Eine Auscheckung, die älter als die Grenze für veraltete Auscheckungen ist (standardmäßig 14 Tage), wird als *lange* markiert. Nach dem Aufheben wird Anas verspätetes Einchecken abgelehnt, sodass Sie sich nicht gegenseitig überschreiben können.

## 8. Cloud-Ordner

Ein Cloud-Ordner ist ein Projektordner, der im Cloud-Speicher Ihres Teams liegt, sodass das Team kein gemeinsames Laufwerk braucht. In Studio, angemeldet mit Ihrem CadCraft-Konto, zeigt das Panel {{ui:Cloud-Ordner öffnen}} neben {{ui:Projektordner wählen}}. Wählen Sie es und dann den Ordner, der als Arbeitsbereich / Ordner aufgeführt wird. Ein Eigentümer des Arbeitsbereichs legt den Ordner zuerst an, und der Cloud-Speicher des Teams muss eingerichtet sein. Alles oben Beschriebene funktioniert gleich; der Server erzeugt die Sperre, die über Personen hinweg streng ist. Wenn Sie nicht angemeldet sind, fordert das Panel zur Anmeldung auf. In einem gewöhnlichen Browser-Tab wird die Cloud-Schaltfläche nicht angeboten; verwenden Sie Studio.

## Ausprobieren

Führen Sie die acht Schritte oben mit einer Kopie einer echten Datei durch. Für die Schritte zu zweit brauchen Sie eine weitere Person oder zwei Fenster mit zwei Namen. Wenn Sie es mit einem echten gemeinsamen Ordner ausprobieren, listet die Seite *Community-Tests* eine Prüfung, die genau das abfragt, und nimmt Ergebnisse entgegen.
