---
title: Eine eigene Analyse schreiben
summary: Eine Analyse als Skripte im Skript-Arbeitsbereich aufbauen: das Bauteil vernetzen, aufbauen und lösen, das Feld und eine Konvergenzkurve zeigen, das Ergebnis mit einer Handrechnung prüfen und die Schritte als eigene Skripte mit gemeinsamen Variablen aufbewahren.
keywords: eigene Analyse, benutzerdefinierte Analyse, FEA-Skript, Finite Elemente, aufbauen, Steifigkeit, Randbedingungen, lösen, pcg, dünnbesetzt, Feld, Nachbearbeitung, Konvergenz, Verifikation, Handrechnung, Prüfung, Arbeitsablauf
from: 0f471a8e
---

Eine Analyse im Skript-Arbeitsbereich besteht aus einigen kurzen Skripten, die sich Variablen gegenseitig übergeben. Beginnen Sie mit einer Funktion aus der [Bibliothek](topic:craftscript-library), die Ihrem Bedarf nahekommt, erstellen Sie eine Kopie und ändern Sie sie; oder bauen Sie wie unten eine eigene auf.

## 1. Ein Netz

```
model = part();                  % das Bauteil, das Sie modellieren, als Modell
m = tetmesh(model, 4);           % Tetraeder von etwa 4 mm Breite
show(m)
```

Prüfen Sie das Netz in der Ansicht, bevor Sie weitermachen: {{key:F}} passt es ein, das {{ui:Auge}} unter **Angezeigt** blendet das Bauteil aus.

## 2. Aufbauen und lösen

Schreiben Sie die Elementschleife im Skript (sie liest sich wie im Lehrbuch) und überlassen Sie die schweren Teile den eingebauten Funktionen: Elementmatrizen, dünnbesetzte Assemblierung aus Tripeln und den konjugierten Gradientenlöser mit Vorkonditionierer. Eine Bibliotheksfunktion wie `static_tet` (sobald die Bibliothek sie enthält) ist ein vollständiges Beispiel zum Abschreiben.

## 3. Das Ergebnis zeigen

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % ein Wert je Knoten
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Löser-Residuum', 'id', 'conv')
```

- Der Bereich der Legende lässt sich eintippen oder auf {{ui:Auto}} zurücksetzen.
- Klicken Sie auf das Netz, um die Werte an einem Knoten abzulesen.
- Ein Plot mit gleichbleibendem `'id'` wird an Ort und Stelle aktualisiert; geben Sie deshalb innerhalb Ihrer Schleife aus und plotten Sie, um die Konvergenz zu verfolgen.

## 4. Prüfen

Vergleichen Sie mit etwas, das Sie kennen: die Endverformung eines Kragträgers mit PL³/3EI, eine Platte mit Loch mit ihrem Spannungskonzentrationsfaktor, die Reaktionen mit den Lasten. Schreiben Sie die Prüfung als eigenes Skript, damit sie nach jeder Änderung erneut läuft:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('Ende %g mm, Balkentheorie %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Aufbewahren

- Jeder Schritt kann eine eigene Registerkarte mit Skript sein: Sie teilen sich die Variablen, also führen Sie sie nacheinander aus.
- Skripte werden im Bauteil gespeichert. Setzen Sie auf der Registerkarte Variablen den Haken bei **Variablen mit dem Bauteil speichern**, um auch die Ergebnisse zu behalten (bis zu 32 MB).
- {{ui:Speichern}} in der Gruppe Skript lädt ein Skript zum Weitergeben herunter; {{ui:Öffnen}} lädt eines herein.
