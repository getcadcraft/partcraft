---
title: Bauteile zu und von anderen Bauteilmodellierern übertragen
summary: Ein Bauteil als Makro an einen anderen Bauteilmodellierer senden, der es mit einem Feature-Baum neu aufbaut. Das benannte STEP und das Öffnen einer Feature-Liste, die ein anderer Modellierer geschrieben hat, sind in dieser Version noch nicht umgesetzt.
keywords: Makro, nicht umgesetzt, swb, VBA, Feature-Baum, Rundweg, Makro exportieren, cadcraft-sw.json, benanntes STEP, AP214, globale Variablen, Gleichungen, natives Bauteil
from: 97ca61da
---

PartCraft tauscht Bauteile in beide Richtungen mit SolidWorks aus, ohne ein Dateiformat, das niemand sonst lesen kann:

- **Hinaus:** ein Makro (`.swb`, Klartext), das SolidWorks ausführt, um das Bauteil selbst zu erstellen, Feature für Feature, mit seinen Skizzen, Abhängigkeiten, Bemaßungen, globalen Variablen und Gleichungen. Sie erhalten ein natives Bauteil mit lebendem Feature-Baum, keinen toten Volumenkörper.
- **Zurück:** ein Makro, das Sie in SolidWorks ausführen, schreibt die Features und Gleichungen des Bauteils in eine Datei `.cadcraft-sw.json`. Das Öffnen dieser Datei in PartCraft ist in dieser Version noch nicht umgesetzt (es braucht einen exakten Kernel).

:::warning
Nichts davon wurde bisher in SolidWorks getestet. SolidWorks läuft nur unter Windows mit einer Lizenz, und PartCraft hat diese Makros darin nie ausgeführt. Die Makros wurden anhand der SolidWorks-API-Dokumentation geschrieben und hier auf ihren Aufbau geprüft. Bitte melden Sie Probleme; das Protokoll, das das Makro schreibt, nennt den Schritt, der fehlgeschlagen ist.
:::

PartCraft kann keine `.sldprt`-Datei schreiben: Dieses Format ist geschlossen. Das Makro ist der Weg zu einem nativen Bauteil.

## Ein Bauteil als Makro senden

1. Öffnen Sie das Bauteil.
2. Wählen Sie {{ui:Exportieren}}, dann {{ui:Makro für SolidWorks (.swb)}}. PartCraft lädt `<part>.swb` herunter; die Statusleiste meldet, dass es ohne exakten Kernel geschrieben wurde.
3. Ein Dialog sagt, wie viele Features, globale Variablen und Gleichungen das Makro erstellt, und listet auf, was es weglässt. Keine STEP-Datei wird in dieser Version daneben abgelegt: Verwenden Sie {{ui:Exportieren}} und dann {{ui:STEP (facettiert, Netzkernel)}}, wenn Sie eine brauchen.
4. Wählen Sie in SolidWorks **Extras > Makro > Ausführen**, wählen Sie die `.swb`-Datei und warten Sie. Es erstellt ein neues Bauteil aus Ihrer Standardbauteilvorlage, setzt Millimeter und baut jedes Feature.
5. Am Ende zeigt eine Meldung, wie viele Schritte erledigt wurden, wie viele fehlgeschlagen sind und wie viele dem Körper von PartCraft entsprechen. Das vollständige Protokoll, `<part> macro log.txt`, wird neben dem Makro geschrieben.

Was das Makro erstellt:

| PartCraft | Im neuen Bauteil |
|---|---|
| Skizze auf der Vorderebene, der Draufsichtebene oder der Rechten Ebene | Eine Skizze auf dieser Ebene mit ihren Linien, Bögen, Kreisen, Punkten, Abhängigkeiten und Bemaßungen (benannt wie in PartCraft, etwa `k7`) |
| Skizze auf einer Fläche | Eine Skizze auf derselben Fläche, über einen Punkt auf ihr gewählt |
| Skizze auf einer festen Ebene | Eine Bezugsebene durch drei Punkte und die Skizze darauf |
| Extrusion, Ausschnitt (Blind, Durch alles, Mittelebene, zwei Richtungen, Schräge) | Basis-Extrusion oder Ausschnitt-Extrusion |
| Drehung, gedrehter Ausschnitt | Drehung um dieselbe Mittellinie |
| Bohrung (einfach, Senkung, Kegelsenkung, Gewindebohrung) | Ein oder zwei Ausschnitte mit eigenen Skizzen (eine Gewindebohrung ist ihr Kernloch; kein Gewinde) |
| Lineares und kreisförmiges Muster, Spiegeln | Lineares Muster, kreisförmiges Muster, Spiegeln (Features oder der Körper) |
| Verrundung, Fase, Schale | Verrundung, Fase und Schale an denselben Kanten und Flächen, über Punkte gewählt |
| Parameter und Gleichungen | Globale Variablen und Gleichungen an den umbenannten Bemaßungen |
| Unterdrückte Features, die Rücksetzleiste | Ebenso unterdrückt; die Rücksetzleiste an derselben Stelle |

Nach jedem Volumen-Feature vergleicht das Makro Volumen und Größe des Körpers mit denen von PartCraft. Weichen sie ab, dreht es die Richtung dieses Features einmal um und prüft erneut; ist das nicht besser, dreht es sie zurück und schreibt „Prüfen“ in das Protokoll.

### Was weggelassen wird

Der Dialog und der Anfang des Makros listen alles auf, was nicht übernommen wird, mit dem Grund. Derzeit sind das: importierte Volumenkörper (fügen Sie stattdessen das STEP ein), Sweeps, Lofts, Formschrägen, Bezugsachsen und -punkte, Endbedingungen „Bis zu“, Extrusion nur einiger Konturen und alles, was davon abhängt. Splines werden zu Kurven durch ihre Punkte. Diese Version hat keinen exakten Kernel, daher werden auch Skizzen auf Flächen und die Features, die Kanten oder Flächen auswählen, weggelassen.

## Ein benanntes STEP senden

In dieser Version noch nicht umgesetzt: {{ui:STEP für SolidWorks (benannt, AP214)}} braucht einen exakten Kernel, und bei Auswahl erscheint „STEP für SolidWorks: noch nicht umgesetzt. …“. Mit einem exakten Kernel trägt die Datei den Namen des Bauteils, Millimeter und die Bauteilfarbe und richtet Y nach oben aus, so wie SolidWorks Bauteile zeigt (der einfache Export {{ui:STEP AP214 (exakter Volumenkörper)}} richtet Z nach oben aus). Buchstaben mit Akzenten verlieren im Namen ihre Akzente, andere Zeichen außerhalb von reinem ASCII werden zu `_`.

## Ein Bauteil zurückholen

Das Öffnen der Datei in PartCraft (Schritt 3) ist in dieser Version noch nicht umgesetzt: Es meldet „Öffnen eines SolidWorks-Exports: noch nicht umgesetzt. …“. Die Zeichnungs-App CadCraft öffnet die Datei weiterhin und übernimmt ihre Skizzen.

1. Wählen Sie {{ui:Datei}} > {{ui:Exportieren}} > {{ui:Makro zum Zurückholen von Bauteilen exportieren (.swb)}}, um `CadCraftExport.swb` herunterzuladen, und legen Sie es neben Ihre Bauteile.
2. Öffnen Sie in SolidWorks das Bauteil, wählen Sie **Extras > Makro > Ausführen** und wählen Sie `CadCraftExport.swb`. Es schreibt `<part>.cadcraft-sw.json` neben das Bauteil und ändert daran nichts.
3. Wählen Sie in PartCraft {{ui:Öffnen}} und die Datei aus, oder ziehen Sie sie auf die 3D-Ansicht.
4. Mit einem exakten Kernel erstellt PartCraft das Bauteil Feature für Feature neu und zeigt, was es getan hat: zum Beispiel „5 von 5 Features aus SolidWorks übernommen (Flange.SLDPRT)“, jedes Feature, das es nicht übernehmen konnte („Nicht übernommen: Sweep1 (Sweep).“), und ob das Volumen mit dem von SolidWorks geschriebenen übereinstimmt.
5. Speichern Sie es als PartCraft-Bauteil mit {{ui:Speichern}}.

Skizzen landen auf einer Grundebene, wenn sie auf einer liegen, auf der passenden ebenen Fläche des Bauteils, wenn es eine gibt (so folgen sie späteren Änderungen), und sonst auf einer festen Ebene. Kanten und Flächen von Verrundungen, Fasen und Schalen werden über Punkte gefunden und als benannte Referenzen behalten. Globale Variablen werden zu Parametern (Namen mit Leerzeichen erhalten Unterstriche: „Bolt count“ wird zu `Bolt_count`), und Gleichungen werden zu Gleichungen an denselben Bemaßungen. Nichts wird geraten: Was kein Gegenstück hat, wird aufgelistet.

Die Zeichnungs-App CadCraft öffnet dieselbe Datei und übernimmt ihre Skizzen.

:::note
Das Format ist `cadcraft-sw-export` in Version 1, reines JSON in Millimetern und Grad. Eine Datei aus einem neueren Makro oder eine ungültige Datei wird mit dem Grund abgelehnt.
:::
