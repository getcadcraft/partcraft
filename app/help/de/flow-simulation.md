---
title: Flüssigkeitsströmung simulieren (Strömungsstudie)
summary: Strömung durch die Kanäle in einem Bauteil oder um es herum in einem Quader: Ein- und Auslässe, Luft, Wasser oder eigene Flüssigkeit, dann Geschwindigkeit und Druck auf einer beweglichen Schnittebene, Stromlinien, Oberflächendruck, Druckabfall, Massenbilanz, Widerstand und Auftrieb, mit dem, was die laminare Methode kann und was nicht.
keywords: Strömung, CFD, Fluid, numerische Strömungsmechanik, Strömungssimulation, Luft, Wasser, Viskosität, Dichte, Reynolds-Zahl, laminar, turbulent, Druckabfall, Druckverlust, Einlass, Auslass, Deckel, Kappe, Geschwindigkeit, Durchflussmenge, Volumenstrom, Liter pro Minute, statischer Druck, Stromlinien, Schnittebene, Widerstand, Auftrieb, Widerstandsbeiwert, Auftriebsbeiwert, Stirnfläche, äußere Strömung, innere Strömung, Rohr, Kanal, Verteiler, Düse, lattice Boltzmann, Residuum, Konvergenz
from: 7dc75f29
---

Eine **Strömungs**-Studie berechnet, wie sich eine Flüssigkeit durch die Kanäle in Ihrem Bauteil (**intern**) oder um es herum (**extern**) bewegt. Standardmäßig ist sie **laminar, inkompressibel, isotherm und newtonsch**: gleichmäßige Strömung einer Flüssigkeit, deren Dichte und Viskosität konstant bleiben, ohne Wärme, ohne Turbulenz und ohne Schwerkraft. Ein **experimentelles** turbulentes Modell ist ebenfalls vorhanden, nur für qualitative Muster (siehe unten). Es arbeitet auf den benannten Flächen, die der Mesh-Kernel dem Bauteil gibt (siehe [Der Mesh-Kernel](topic:solid-kernels)).

Wählen Sie **Simulation** im Feld **Arbeitsbereich**, drücken Sie **Neue Studie**, falls keine vorhanden ist, und setzen Sie **Typ** auf **Strömung (CFD)**. **Strömungsmodell** ist **Laminar** (Standard) oder **Turbulent (Spalart–Allmaras, experimentell)**: siehe **Turbulente Strömung (experimentell)** unten. Die strukturellen Einstellungen der Studie bleiben erhalten, sodass Sie zurückwechseln können. Die Strömungseinstellungen werden in der Bauteildatei gespeichert, und jede Änderung lässt sich rückgängig machen.

## Flüssigkeit und Zellen festlegen

- **Flüssigkeit**: Luft oder Wasser bei 20 °C, oder **Benutzerdefiniert** mit eigener Dichte (kg/m³) und dynamischer Viskosität (Pa·s). Luft verwendet das ideale Gasgesetz und die Sutherland-Formel (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); Wasser verwendet die IAPWS-Werte (998.21 kg/m³, 1.0016 mPa·s).
- **Zellgröße**: Der Flüssigkeitsraum wird mit gleich großen Würfeln gefüllt. Leer lassen für eine automatische Größe; das Panel zeigt das Raster. Jede Öffnung und jeder Kanal sollte **mindestens 8 bis 10 Zellen breit** sein, damit die Zahlen brauchbar sind; kleinere Zellen sind genauer und langsamer (doppelt so fein bedeutet etwa den 16-fachen Aufwand).
- **Wände**: **Interpoliert** folgt gekrümmten Wänden zwischen den Zellen (Standard); **Rückprall** behandelt Wände als Würfeltreppe.

## Strömung im Bauteil

Der Flüssigkeitsraum muss geschlossen sein. Fügen Sie im Panel einen **Einlass** und einen **Auslass** hinzu und klicken Sie dann ihre Flächen in der Ansicht an:

1. **Die ebene Fläche um eine Öffnung** — der Rand an einem Rohrende, eine Anschlussfläche. PartCraft verschließt das Loch der Öffnung dort mit einem Deckel. Jede Bohrung in dieser Fläche gehört zu dieser Öffnung; wenn sich ein Einlass und ein Auslass auf derselben Fläche öffnen, modellieren Sie stattdessen eine dünne Kappe über einer davon.
2. **Die Innenfläche einer Kappe** — wie in anderen CAD-Programmen: Modellieren Sie eine dünne Platte (eine Extrusion) über der Öffnung und wählen Sie deren Fläche, die die Flüssigkeit berührt.

Für einen Einlass setzen Sie eine **Geschwindigkeit** (m/s, gleichmäßig über die Öffnung, in das Bauteil hinein) oder einen **Volumenstrom** (L/min). Für einen Auslass setzen Sie den **statischen Druck** (Pa, Überdruck). Ist eine Öffnung offen oder eine Wand dünner als eine Zelle, verbindet sich das Innere mit dem Außen, und die Berechnung stoppt mit „Kein geschlossener Flüssigkeitsraum“.

## Strömung um das Bauteil

Setzen Sie **Strömung** auf **Extern**, die **Geschwindigkeit**, die Richtung, in die sie strömt, und wie weit der Quader stromauf, stromab und seitlich reicht (leer: 1, 3 und 1-fache größte Abmessung des Bauteils). Die Quaderfläche, durch die die Strömung eintritt, ist ein Zufluss, die Fläche, durch die sie austritt, ein Abfluss mit 0 Pa, und die Flächen entlang der Strömung sind Gleitflächen. Ein zu kleiner Quader drückt die Strömung am Bauteil vorbei und erhöht den Widerstand. **Bezugsfläche** ist die Fläche, die die Widerstands- und Auftriebsbeiwerte verwenden (leer: die Stirnfläche des Bauteils in Strömungsrichtung); der Auftrieb wird entlang +Y gemessen, sofern Sie keine andere Richtung wählen.

## Berechnen und Ergebnisse lesen

Drücken Sie **Berechnen**. Die Berechnung läuft im Hintergrund mit Schrittzahl, Residuum und einem Residuendiagramm; **Stopp** beendet sie. Sie stoppt, wenn das Residuum (wie stark sich das Geschwindigkeitsfeld pro Schritt noch ändert) unter dem Zielwert liegt und Druckabfall oder Widerstand sich eingependelt haben. Erreicht sie zuerst die Schrittgrenze, zeigt das Panel **Nicht konvergiert** in Rot: Die Zahlen sind der letzte Zustand, keine stationäre Lösung.

- **Schnittebene**: Geschwindigkeit oder statischer Druck auf einer Ebene durch das Modell; wählen Sie ihre Normale (X, Y oder Z) und ziehen Sie den Schieberegler, um sie zu verschieben. Fahren Sie mit der Maus darüber, um die Werte zu lesen.
- **Stromlinien**: von den Einlässen (intern) oder von einem Rechen über das Zuflussende des Quaders in der Schnittebene (extern).
- **Bauteil**: massiv, durchsichtig (um die Ebene darin zu sehen), Oberflächendruck oder ausgeblendet.
- **Tabelle**: Reynolds-Zahl, Druckabfall (mittlerer statischer Druck an den Einlässen minus an den Auslässen), Durchfluss und mittlerer Druck jeder Öffnung, die Kraft auf das Bauteil, Widerstand und Auftrieb mit ihren Beiwerten und der Bezugsfläche (extern), die Massenbilanz (Zufluss gegen Abfluss), das Netz und der Löser.

## Turbulente Strömung (experimentell)

**Strömungsmodell › Turbulent (Spalart–Allmaras, experimentell)** löst die zeitgemittelte turbulente Strömung (stationäre RANS). Das Spalart–Allmaras-Modell liefert in jeder Zelle eine Wirbelviskosität, und die Zellen an den Wänden verwenden das Spalding-Wandgesetz, statt die dünne Schicht dort aufzulösen. Überall ist die Strömung voll turbulent (keine laminaren Bereiche, kein Übergang).

**Es hat seine Genauigkeitsprüfungen nicht bestanden.** Das Panel, die Ergebnisse und die Tabelle weisen bei jeder turbulenten Studie darauf hin, und die Warnung lässt sich nicht schließen. Verwenden Sie es für **qualitative Strömungsmuster** — wo die Strömung sich ablöst, zurückströmt oder beschleunigt — **nicht für Konstruktionswerte**.

| Prüfung | Referenz | Ergebnis |
|---|---|---|
| Ebener Kanal, Reibung, erste Zelle bei y⁺ 49 / 98 | Deans Korrelation | +3.3 % / +4.7 % |
| Kanal mit aufgelöster Wand (y⁺ ≈ 3), Re_τ 180: mittlere Geschwindigkeit | Moser, Kim & Mansour DNS | −1 % |
| Ebener Kanal, y⁺ 7–15 oder 190–380 | Deans Korrelation | +9 bis +22 % |
| Rohrreibung durch die Würfelzellen, voll entwickelt, 10–30 Zellen breit | Colebrook | 30 bis 34 % zu hoch |
| Wiederanlegung hinter einer rückspringenden Stufe, 6–14 Zellen pro Stufenhöhe | Driver & Seegmiller, 6.26 Stufenhöhen | 21 bis 39 % zu kurz |

Die Ergebnisse verbessern sich mit feineren Zellen nur langsam. Nach der Berechnung zeigt die Tabelle die **y⁺ der ersten Zelle** (Min, Mittel und Max über die Wandzellen) und warnt außerhalb des geprüften Bereichs von 1 bis 400; Ziel sind etwa 30 bis 300. **Rechenzeit:** Die automatischen Zellen sind so bemessen, dass sie höchstens wenige Minuten auf einem Laptop-Kern benötigen (das Panel zeigt den ungünstigsten Fall für Raster und Schrittgrenze; ein kleines Rohr ist in unter 20 Sekunden fertig). Eine Halbierung der Zellgröße kostet etwa das 16-fache der Zeit. Kräfte auf das Bauteil stammen aus einer Impulsbilanz über die Öffnungen oder den Quader.

**Stand der Arbeit:** Die Wandzellen stimmen jetzt ihre eigene Schubspannung mit dem Wandgesetz ab, was die Fehler bei Rohr und Stufe auf die oben genannten Werte senkte, ohne die Ergebnisse des ebenen Kanals zu ändern. Das reicht für Konstruktionswerte noch nicht. Der nächste Schritt sind feinere Zellen nahe den Wänden.

## Was es sagen kann und was nicht

- **Das laminare Modell** ist nur laminar. In Rohren wird die Strömung ab einer Reynolds-Zahl von etwa 2,000 bis 4,000 turbulent; hinter stumpfen Körpern beginnt die Wirbelablösung ab etwa 50. Das Panel warnt an diesen Punkten. Ein laminares Ergebnis für turbulente Strömung unterschätzt den Druckabfall und liefert einen falschen Widerstand. Das experimentelle turbulente Modell (oben) deckt turbulente Strömung qualitativ ab; seine Zahlen sind noch nicht verlässlich.
- **Methode:** die lattice-Boltzmann-Methode (D3Q19, Zwei-Relaxationszeiten-Kollision), bis zu einem stationären Zustand gerechnet. Sie ist im Inneren leicht kompressibel; PartCraft hält Dichteänderungen auf wenige Prozent. Ist die Strömung für die Zellen zu schnell, startet sie nicht und sagt, wie viel kleiner die Zellen sein müssen.
- **Geprüft gegen:** Hagen–Poiseuille-Strömung in einem Rohr durch ein Bauteil (Druckgradient innerhalb 1 % bei 20 Zellen Breite), die deckelgetriebene Kavität von Ghia et al. (innerhalb 0.75 % der Deckelgeschwindigkeit) und den Zylinder-Benchmark von Schäfer–Turek (Widerstand innerhalb 1 % bei 10 Zellen pro Durchmesser).
- Nicht modelliert: Wärmeübertragung, Turbulenz mit Konstruktionsgenauigkeit (das turbulente Modell ist experimentell), freie Oberflächen, Kavitation, Schwerkraft, bewegte Teile, nicht-newtonsche Flüssigkeiten, raue Wände. Labor-Version: Wichtige Ergebnisse auf andere Weise prüfen.
