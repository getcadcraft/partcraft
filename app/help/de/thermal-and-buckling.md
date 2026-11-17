---
title: Wärme, thermische Spannung und Knicken
summary: Ermitteln Sie die Temperaturen in einem Bauteil aus festen Temperaturen, Wärmestromdichte, Wärmeleistung, Konvektion und Strahlung (stationär oder über die Zeit), belasten Sie eine Spannungsuntersuchung mit einer Temperaturerhöhung und finden Sie die Last, bei der ein schlankes Bauteil knickt, mit dem, was jede Methode zeigen kann und was nicht.
keywords: thermisch, Wärmeübertragung, Wärme, Temperatur, Wärmeleitung, Konvektion, Wärmeübergangskoeffizient, Strahlung, Emissionsgrad, Wärmestromdichte, Wärmeleistung, Wärmeerzeugung, Wärmesenke, instationär, Zeit, Abkühlen, Erwärmen, Crank-Nicolson, implizites Euler, Wärmebilanz, thermische Spannung, thermische Spannung über die Zeit, instationäre thermische Spannung, Abschrecken, Thermoschock, Spannungsverlauf, ungünstigster Zeitpunkt, Wärmeausdehnung, Ausdehnungskoeffizient, Knicken, Euler-Knicken, Lastfaktor, kritische Last, Druckstab, schlank, Eigenwert
from: 1a1b7545
---

Diese Untersuchungen liegen im Arbeitsbereich Simulation neben statischer Spannung und Eigenfrequenzen (siehe [Spannung und Durchbiegung prüfen](topic:simulation)). Wählen Sie sie im Feld **Typ** des Bereichs. Sie verwenden dasselbe Netz aus kleinen Würfeln und dieselbe Materialliste; jedes Bibliotheksmaterial hat eine Wärmeleitfähigkeit, eine spezifische Wärmekapazität und einen Ausdehnungskoeffizienten (übliche Handbuchwerte, unter **Eigenschaften** angezeigt).

## Thermisch: Wohin fließt die Wärme?

1. Wählen Sie **Thermisch (Wärmeübertragung)** als **Typ**.
2. Fügen Sie thermische Randbedingungen aus der Liste {{ui:Hinzufügen}} im Bereich hinzu und klicken Sie dann ihre Flächen an (wie bei Lagerungen und Lasten):
   - **Feste Temperatur**: Die Fläche wird auf einer Temperatur in °C gehalten.
   - **Wärmestromdichte**: W/m², die in die Fläche fließen (negativ fließt heraus). Sie wirkt auf die wahre Fläche, auch dort, wo die Würfel eine Treppe bilden.
   - **Wärmeleistung**: eine Gesamtleistung in Watt, anteilig nach Fläche auf die gewählten Flächen verteilt. Verwenden Sie sie für eine Heizung oder einen Chip mit bekannter Leistung.
   - **Konvektion**: Luft oder Flüssigkeit mit einer Temperatur führt Wärme mit h W/(m²·K) ab. Typische h-Werte: ruhende Luft 5–10, ein Ventilator 25–100, Wasser 500–10,000. PartCraft berechnet h nicht: In dieser Untersuchung gibt es keine Strömung.
   - **Strahlung**: Die Fläche strahlt mit einem Emissionsgrad von 0 bis 1 an die Umgebung mit einer Temperatur ab. Sie wird **linearisiert** (die Strahlung wird als Koeffizient geschrieben, der von der Temperatur abhängt, und wiederholt gelöst, bis sie sich einpendelt) und geht nur an die Umgebung: Flächen tauschen untereinander keine Wärme aus.
3. **Wärmeerzeugung** (W/m³) erwärmt das ganze Bauteil von innen, zum Beispiel ein widerstandsbehaftetes Teil.
4. Drücken Sie **Lösen**. Das Bauteil wird nach Temperatur eingefärbt; wählen Sie unter **Anzeigen** die **Wärmestromdichte**, um zu sehen, wohin die Wärme fließt. Zeigen Sie mit dem Mauszeiger auf das Bauteil, um beides abzulesen.

Stationärer Wärmefluss braucht einen Abfluss für die Wärme: mindestens eine feste Temperatur, Konvektion oder Strahlung. Ein Bauteil, das nur Wärme aufnimmt, hat keinen stationären Zustand; machen Sie es stattdessen instationär.

Die Tabelle nennt die niedrigste und höchste Temperatur und wo sie liegen, den größten Wärmestrom und die **Wärmebilanz**: die Wärme in oder aus jeder Bedingung (eine feste Temperatur zählt, was sie liefern oder aufnehmen muss), die erzeugte Wärme, die Summen zu- und abgeführter Wärme und das **Ungleichgewicht**. Das Ungleichgewicht sollte ein winziger Bruchteil der zugeführten Wärme sein; ein großes bedeutet, dass dem Ergebnis nicht zu trauen ist.

### Über die Zeit (instationär)

Setzen Sie das Häkchen bei **Instationär** und geben Sie eine **Anfangstemperatur** (das ganze Bauteil beginnt dort), eine **Zeitspanne** und eine Anzahl **Zeitschritte** an. **Implizites Euler** ist robust; **Crank–Nicolson** ist bei gleichen Schritten genauer, kann aber nach einer plötzlichen Änderung nachschwingen. Nach dem Lösen ziehen Sie den Schieberegler **Zeit**, um die Temperaturen zu jedem Zeitpunkt zu sehen (die Farbskala bleibt für alle Zeitpunkte gleich). Die Wärmebilanz enthält dann auch die gespeicherte Wärme.

## Thermische Spannung: Was tut eine Temperaturänderung dem Bauteil an?

In einer Untersuchung **Statische Spannung** (oder **Knicken**) setzen Sie **Thermische Last**:

- **Gleichmäßige Temperaturänderung**: Das ganze Bauteil erwärmt (oder, mit einer negativen Zahl, abkühlt) sich um so viele Kelvin.
- **Temperaturen aus thermischen Randbedingungen**: Fügen Sie der gleichen Untersuchung thermische Randbedingungen hinzu; die stationären Temperaturen werden zuerst auf demselben Netz gelöst, dann dehnt sich das Bauteil um α·(T − die **spannungsfreie Temperatur**).
- **Temperaturen über die Zeit (instationärer Lauf)**: Fügen Sie thermische Randbedingungen hinzu und geben Sie dann eine **Anfangstemperatur**, **Zeitspanne**, **Zeitschritte** und das **Zeitschrittverfahren** an, wie bei einer instationären thermischen Untersuchung. Die Temperaturen werden über die Zeit auf demselben Netz (Würfel oder Tetraeder) gelöst, und eine statische Berechnung mit den Temperaturen jedes Zeitpunkts liefert die Spannung dieses Zeitpunkts. **Spannung bei**:
  - **Dem ungünstigsten Zeitpunkt** (dem Anfang): **Spannungsberechnungen** werden gleichmäßig über den Lauf verteilte Zeitpunkte lösen, der Anfang eingeschlossen (21, sofern Sie nichts ändern, höchstens 51). Die Ergebnisse öffnen sich beim Zeitpunkt mit der größten Vergleichsspannung nach von Mises; die Tabelle nennt ihn, ein kleines Diagramm zeigt die Spitzenspannung über die Zeit, und der Schieberegler **Zeit** zeigt die Spannung zu jedem gelösten Zeitpunkt (die Farbskala bleibt die des ungünstigsten Zeitpunkts).
  - **Einem gewählten Zeitpunkt**: ein Zeitpunkt, und zwar der Zeitschritt, der der **Zeit (s)** am nächsten liegt, die Sie angeben. Eine Knickuntersuchung nimmt immer einen gewählten Zeitpunkt (das Ende des Laufs, sofern Sie keinen festlegen).

Ein Bauteil, das abgeschreckt (aus heißem in kaltes Wasser getaucht) oder plötzlich erhitzt wird, ist am stärksten belastet, solange sich Innen und Oberfläche am stärksten unterscheiden: oft gleich am Anfang. Eine gehaltene Temperatur wirkt ab dem ersten Augenblick als plötzliche Änderung, daher hängt die Spannung ganz am Anfang von der Elementgröße ab (nur wenige Elemente sehen die Änderung). Lesen Sie das als „sehr hoch“ und sehen Sie sich die nächsten Zeitpunkte des Schiebereglers an, für Werte, die das Netz auflöst. Die Spannung ist quasistatisch: keine Trägheit, keine Schwingung durch die plötzliche Änderung.

Ein Bauteil, das frei wachsen kann, hat keine thermische Spannung: Halten Sie es gerade so fest, dass es sich nicht bewegt (zum Beispiel drei reibungsfreie Flächen im rechten Winkel). Zwischen zwei Wänden eingespannt wird es gestaucht: Ein Stahlstab, um 50 K zwischen starren Wänden erwärmt, trägt etwa 117 MPa. Thermische Lasten gleichen sich selbst aus, daher gleichen die Reaktionen weiterhin nur die mechanischen Lasten aus.

## Knicken: Wann gibt ein schlankes Bauteil nach?

1. Wählen Sie **Knicken (linear)** als **Typ** und fügen Sie Lagerungen und Lasten hinzu wie bei einer statischen Untersuchung.
2. Legen Sie **Zu findende Lastfaktoren** fest (wie viele Knickformen).
3. Drücken Sie **Lösen**. Jede Form hat einen **Lastfaktor**: das Vielfache Ihrer Lasten, bei dem das ideale Bauteil knickt. Ein Lastfaktor von 3 heißt das Dreifache Ihrer Lasten; **ein Lastfaktor unter 1 bedeutet, dass es unter den aufgebrachten Lasten knickt**. Die Tabelle nennt auch die Gesamtlast bei jedem Faktor. Die Knickform zeigt, wie es knickt (ihre Größe bedeutet nichts).

**Lineares Knicken überschätzt die reale Knicklast.** Es setzt ein perfektes Bauteil voraus: vollkommen gerade, ohne Eigenspannung und elastisch. Reale Bauteile haben kleine Abweichungen und können zuerst fließen, und dünnwandige Schalen können bei einem Bruchteil des linearen Werts knicken. Rechnen Sie mit einer großzügigen Reserve, und betrachten Sie einen Lastfaktor nahe oder unter 3 bei einer dünnen Schale als Warnung.

## Wie weit man ihm trauen kann

PartCraft prüft diese Löser gegen Handformeln: ein Stab zwischen zwei Temperaturen (exakt), eine Kühlrippe (innerhalb von 0.3 K), eine Platte, die sich selbst erwärmt (exakt), ein Würfel, der über die Zeit abkühlt (innerhalb von 0.1 % mit Crank–Nicolson), ein Stab, der an einem Ende plötzlich erwärmt wird, ein frei erwärmter Stab (keine Spannung, ΔL = αLΔT), ein zwischen Wänden gehaltener Stab (σ = −EαΔT), eine abgeschreckte Platte über die Zeit gegen die klassische Reihenlösung (innerhalb von 1 % auf Würfeln, 2.1 % auf Tetraedern im Mittelpunkt der Platte; 0.5 % an ihrer Oberfläche), der letzte Zeitpunkt eines langen Laufs gegen die stationäre thermische Spannung (bis auf ein Millionstel gleich) und Euler-Stäbe (innerhalb von 1 % fest–frei, 1.5 % gelenkig–gelenkig). Beachten Sie:

- **Konstante Materialwerte.** Leitfähigkeit, spezifische Wärme und Ausdehnung ändern sich hier nicht mit der Temperatur; bei einigen hundert Grad können sie sich um 10–30 % ändern. Auch die Steifigkeit ändert sich nicht.
- **Spannung über die Zeit ist quasistatisch und elastisch**: Jeder Zeitpunkt ist eine statische Berechnung (ohne Trägheit), und es gibt kein Fließen. Eine Abschreckung, die die Oberfläche zum Fließen bringen würde, zeigt deshalb eine Spannung über der Fließgrenze.
- **Konvektionskoeffizienten sind Ihre Eingabe**, sie werden nicht aus einer Luft- oder Wasserströmung berechnet.
- **Kein Kontaktwiderstand**: Das Bauteil ist ein einziger Körper.
- **Nur lineares Knicken**: keine Abweichungen, kein Fließen, kein Verhalten nach dem Knicken.
- Die Treppenform der Würfel und scharfe Innenecken wirken auf thermische Spannungen genauso wie auf andere Spannungen (siehe [Spannung und Durchbiegung prüfen](topic:simulation)).
- Dies ist eine Laborversion: Prüfen Sie wichtige Bauteile auf andere Weise.

## Verwandt

- [Spannung und Durchbiegung prüfen (Simulation)](topic:simulation)
- [Was noch nicht umgesetzt ist](topic:not-built-yet)
