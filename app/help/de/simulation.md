---
title: Spannung und Durchbiegung prüfen (Simulation)
summary: Einen Werkstoff wählen, Flächen festhalten, Kräfte, Drücke oder das Eigengewicht des Bauteils hinzufügen, lösen und Von-Mises-Spannung, Verschiebung, Sicherheitsfaktor, Lagerreaktionen und Eigenfrequenzen am Modell ablesen, mit dem, was die Methode kann und nicht kann.
keywords: Simulation, FEA, Live-Analyse, beim Bearbeiten aktualisieren, kaputt machen, was zuerst bricht, Lastfaktor, nichtlinear, Plastizität, Fließen, plastische Dehnung, bilinear, Kontakt, Kontaktpaar, Penalty, verklebt, reibungsfreier Kontakt, CalculiX, .inp, .frd, Finite Elemente, Spannung, Dehnung, Von Mises, Verschiebung, Durchbiegung, Sicherheitsfaktor, Sicherheit, Streckgrenze, Reaktion, Last, Kraft, Druck, Gravitation, Eigengewicht, fest, reibungsfrei, Lagerung, Werkstoff, Stahl, Aluminium, Titan, ABS, PLA, Nylon, Eigenfrequenz, modal, Schwingung, Netz, Elementgröße, Tetraeder, Tet-Netz, Voxel, Netzqualität, Hauptspannung, Vergleichsdehnung, Fehlerschätzung, gekrümmte Flächen, Löcher, Verrundungen, adaptiv, adaptive Verfeinerung, automatische Verfeinerung, h-adaptiv, Konvergenz, Netzkonvergenz, exakte Oberfläche, Kugel, Kegel, Torus, Spline, Freiform
from: 6f2fdec1
---

Der Arbeitsbereich Simulation beantwortet die Frage „Biegt sich das unter dieser Last, oder bricht es?“ für das Bauteil, das Sie modellieren. Es ist eine **lineare statische** Studie (kleine Verformungen, der Werkstoff bleibt elastisch) oder eine **Eigenfrequenz**-Studie. Sie wird auf einem Netz aus quadratischen Tetraedern gelöst, das den Flächen des Bauteils folgt (oder, wenn Sie es wählen, auf kleinen gleich großen Würfeln). Sie arbeitet auf den benannten Flächen, die der Netzkern dem Bauteil gibt (siehe [Der Netzkern](topic:solid-kernels)).

Wählen Sie **Simulation** im Feld **Arbeitsbereich** links in der Symbolleiste. Ihr Bauteil wird nicht verändert; die Studie wird in der Bauteildatei gespeichert, und jede Änderung daran lässt sich rückgängig machen.

## Eine Studie einrichten

1. Drücken Sie im rechten Bereich **Neue Studie**.
2. Wählen Sie den **Werkstoff**. Der Bereich zeigt seine Steifigkeit (E), die Querkontraktionszahl, die Dichte und die Streckgrenze. Die Werte sind typische Tabellenwerte; zertifizierte Werte Ihres Lieferanten können abweichen.
3. Wählen Sie das **Netz**:
   - **Tetraeder (genau)**, der Standard: 10-knotige Tetraeder, deren Außenflächen auf den Flächen des Bauteils liegen, mit gekrümmten Kanten an Löchern, Verrundungen und anderen runden Flächen. Die Knoten auf ebenen, zylindrischen, kegeligen, kugeligen und torusförmigen Flächen, auf rotierten und extrudierten Flächen sowie auf Freiformflächen (B-Spline) liegen auf der exakten Oberfläche. Jede andere Flächenart folgt ihrem Anzeigenetz, und die Ergebnistabelle zeigt, wie viele Flächen das betraf. Das Netz wird automatisch in der Nähe gekrümmter Flächen, dünner Wände und scharfer Kanten feiner.
   - **Voxel-Würfel (schnell)**: das Bauteil, gefüllt mit gleich großen Würfeln. Schnell, aber gekrümmte Flächen werden zu Stufen. Studien, die vor dem Tetraeder-Netz gespeichert wurden, behalten dieses.
4. Lassen Sie **Elementgröße** leer für eine automatische Größe (etwa 12,000 Tetraeder oder 20,000 Würfel) oder geben Sie eine Größe in Millimetern ein. Der Bereich zeigt an, wie viele Elemente das etwa ergibt, bevor die feineren Stellen hinzugefügt werden. Bei Tetraedern verfeinert **Kleinere Elemente auf gekrümmten Flächen** (standardmäßig an) Löcher und Verrundungen, wo die Spannung meist ihren Höchstwert erreicht.

### Automatisch verfeinern

Bei Tetraedern bieten eine statische oder Knickstudie (ohne thermische Last), eine Eigenfrequenz-Studie und eine stationäre Wärmestudie **Automatisch verfeinern (adaptiv)** an. Setzen Sie den Haken und stellen Sie ein:

- **Zielfehler (%)**: Das Lösen stoppt, sobald der geschätzte Fehler darunter liegt (zunächst 1 %).
- **Höchstzahl an Durchläufen**: die meisten Lösungen, die ausgeführt werden dürfen (zunächst 5, höchstens 10).

Jeder Durchlauf löst, findet die Elemente mit dem größten geschätzten Fehler, teilt sie (und so wenige Nachbarn wie nötig, damit das Netz geschlossen bleibt) und löst erneut. Neue Knoten auf gekrümmten Flächen gehen auf die exakte Oberfläche. Die Ergebnisse zeigen dann eine Tabelle und ein Diagramm mit den Elementen, den Unbekannten, dem geschätzten Fehler und der Spitzenspannung (oder Temperatur) sowie der Verschiebung (oder dem Wärmestrom) für jeden Durchlauf, und eine Zeile, die begründet, warum es gestoppt hat: Das Ziel wurde erreicht, die Durchläufe sind aufgebraucht, das nächste Netz wäre zu groß, oder ein Durchlauf ist fehlgeschlagen (dann sehen Sie den letzten guten Durchlauf).

Lesen Sie die Schätzung als Schätzung. Sie (Zienkiewicz–Zhu; verglichen mit exakten Lösungen liegt sie bei etwa 0.6 bis 0.95 des wahren Fehlers) misst den Fehler über das **ganze Bauteil**. Deshalb ist eine Spitzenspannung an einem Loch oder einer Verrundung meist noch etwas ungenau, wenn die Schätzung klein aussieht. Bei einer Spannungskonzentration setzen Sie das Ziel unter 1 % und beobachten, wie sich der Spitzenwert von Durchlauf zu Durchlauf einpendelt. An einer scharfen Innenecke oder am Rand einer festen Fläche ist die wahre Spannung unendlich, daher erreicht die Schätzung das nie: Die Durchläufe gehen dann aus.

**Eigenfrequenzen und Knicken.** Bei einer Eigenfrequenz-Studie deckt die Schätzung jede gewünschte Eigenform ab, jede gleich gewertet; die Tabelle und das Diagramm folgen den ersten beiden Frequenzen. Bei einem Bauteil mit nur ebenen Flächen kann eine Frequenz von Durchlauf zu Durchlauf nur sinken (jedes Netz enthält das vorherige). Gekrümmte Flächen kommen ihrer wahren Form außerdem näher, was eine Frequenz etwas in eine der beiden Richtungen verschieben kann. Beim Knicken deckt die Schätzung die Vorspannung und die Knickformen ab, und die Tabelle folgt den Lastfaktoren. Geprüft an einem Stahlstab 100 × 10 × 10 mm: Die erste Frequenz pendelt sich über vier Durchläufe von 812.4 auf 811.9 Hz ein, 0.4 % unter Euler–Bernoulli (das die Schubverformung vernachlässigt), und der Lastfaktor der Säule liegt innerhalb von 0.5 % von Euler.

## Festhalten und belasten

Jede Studie braucht mindestens eine Lagerung und für die Spannung eine Last.

1. Drücken Sie {{ui:Fest}} in der Symbolleiste. Die neue Lagerung ist ausgewählt und wartet auf Flächen: Klicken Sie auf die Flächen, die still gehalten werden (klicken Sie eine Fläche erneut, um sie zu entfernen). Drücken Sie **Auswahl abschließen** oder {{key:Esc}}, wenn Sie fertig sind. Blaue Kegel markieren die gehaltenen Flächen.
2. Drücken Sie {{ui:Kraft}} und klicken Sie auf die Flächen, auf die die Kraft wirkt. Geben Sie im Bereich die **Gesamtkraft** in Newton ein und wählen Sie ihre **Richtung**: in die Fläche hinein oder entlang einer Achse. Die Kraft wird nach Fläche auf die gewählten Flächen verteilt. Orangefarbene Pfeile zeigen sie an.
3. Drücken Sie {{ui:Druck}} für einen Druck in MPa (N/mm²), der in die gewählten Flächen drückt; ein negativer Druck zieht.

Weitere Arten finden Sie in der Liste **Hinzufügen** des Bereichs: eine **reibungsfreie Fläche** (die Fläche darf an sich selbst entlanggleiten, sich aber nicht von ihr wegbewegen; verwenden Sie sie für Symmetrieebenen und glatte Lagerungen) und **Gravitation** (das Eigengewicht des Bauteils, 9.81 m/s², in der Richtung, die Sie wählen).

Eine Lagerung, die dem Bauteil erlaubt zu gleiten oder sich zu drehen, wird abgelehnt, mit dem Hinweis, welche Bewegung frei bleibt.

## Lösen und die Ergebnisse lesen

Drücken Sie {{ui:Lösen}}. Die Arbeit läuft im Hintergrund; **Stopp** bricht sie ab. Danach:

- Das Bauteil wird nach **Von-Mises-Spannung** eingefärbt; wählen Sie **Verschiebung** oder **Sicherheitsfaktor** unter **Anzeigen**. Die Legende gibt die Skala an.
- Zeigen Sie auf das Bauteil, um die Werte unter dem Zeiger abzulesen.
- Setzen Sie den Haken bei **Verformte Form**, um das gebogene Bauteil zu sehen (die Bewegung wird mit dem **Maßstab** vergrößert; die reale steht in der Tabelle).
- Die Tabelle listet die größte Spannung und wo sie liegt, die größte Verschiebung, den kleinsten **Sicherheitsfaktor** (Streckgrenze ÷ Von-Mises-Spannung; unter 1 fließt der Werkstoff), die aufgebrachte Last und die **Reaktionen** an den Lagerungen (sie gleichen die Last aus) sowie das verwendete Netz.

Für **Eigenfrequenzen** wählen Sie diesen **Typ**, legen die Anzahl der **Eigenformen** fest und lösen. Jede Eigenform zeigt ihre Frequenz und Form (Formen werden so skaliert, dass ihre größte Bewegung 1 ist).

Ändern Sie das Bauteil, werden die Ergebnisse als veraltet markiert: Lösen Sie erneut.

## Fließen und Kontakt (nichtlineare Studien)

Zwei weitere Studienarten gehen über „der Werkstoff bleibt elastisch“ hinaus:

- **Nichtlinear (Werkstoff fließt)** folgt der Geraden des Werkstoffs bis zu seiner Streckgrenze und dann einer flacheren Steigung (**Steigung nach dem Fließen**, 1 % von E, wenn leer gelassen). Die Last steigt in **Lastschritten**; ein Schritt, der sich nicht einpendelt, wird selbstständig halbiert. Die Ergebnisse ergänzen **Plastische Dehnung** in den Diagrammen und zeigen, wie viel der Last getragen wurde. Wenn ein Schritt sich immer noch nicht einpendelt, stoppt die Studie am letzten guten Schritt, und der Bereich ⚠ Probleme zeigt, wo: Das Bauteil hat dort seine Festigkeit erschöpft (ein Versagen), oder die Schritte sind zu groß.
- **Kontakt zwischen Teilen** lässt getrennte Teile des Bauteils aufeinander drücken. Fügen Sie ein **Kontaktpaar** hinzu, wählen Sie die Flächen von Seite A (die Flächen, die drücken) mit {{ui:Flächen wählen}}, dann Seite B mit {{ui:Flächen der Seite B wählen}}. **Reibungsfreie** Teile drücken, gleiten und trennen sich; **verklebte** Teile bleiben haften. Jedes Teil wird für sich vernetzt, daher ist ein kleiner Spalt zwischen ihnen in Ordnung. Der Kontakt ist eine Penalty-Methode: Die Teile sinken ein wenig ineinander (der **Penalty-Faktor** × E ÷ Elementgröße bestimmt, wie steif der Kontakt ist). Die Tabelle zeigt das tiefste Einsinken, und der Bereich Probleme warnt, wenn es mehr als 1 % der Elementgröße beträgt: Erhöhen Sie den Faktor oder verwenden Sie kleinere Elemente.

Beide verwenden das Tetraeder-Netz. Reibung, große Gleitbewegungen und große Drehungen werden hier nicht gelöst.

## In CalculiX ausführen

**Export › CalculiX-Deck (.inp)** (oder {{ui:Ein CalculiX-Deck speichern (.inp)}} im Bereich) speichert die Studie als Eingabedatei für CalculiX, ein separates Programm, das Sie selbst installieren und ausführen: dasselbe Netz, derselbe Werkstoff, dieselben Lagerungen, Lasten und Kontaktpaare, in mm, N und MPa. Führen Sie es aus, dann liest **Export › CalculiX-Ergebnisse (.frd)** die Ergebnisdatei zurück auf dasselbe Netz und zeigt die Verschiebung (und die Von-Mises-Spannung, wenn die Datei Spannungen enthält). Haben Sie das Bauteil oder die Elementgröße dazwischen geändert, ist das Netz nicht mehr dasselbe, und PartCraft sagt das: Speichern Sie ein neues Deck.

## Wie weit Sie ihr trauen können

PartCraft prüft seinen Löser gegen Handformeln (die Spitzendurchbiegung eines Kragträgers PL³/3EI innerhalb von 1 %, die Dehnung eines Stabs PL/AE exakt, die erste Frequenz eines Kragträgers innerhalb von 3 %, die Spannung um ein Loch in einer Platte). Dennoch sollten Sie diese Grenzen im Blick behalten:

- **Das Netz.** Bei Tetraedern prüft PartCraft die Durchbiegung und Biegespannung eines Kragträgers (innerhalb von 0.3 %), die Spannung an einem Loch in einer Platte (Kt, innerhalb von etwa 1 %), ein dickes Rohr unter Druck (Lamé, innerhalb von 0.3 %) und die erste Frequenz (innerhalb von 0.4 %). Die Tabelle zeigt die **Netzqualität** (die kleinsten und größten Winkel zwischen Elementflächen; unter etwa 10° ist ein Element schlecht) und einen **geschätzten Spannungsfehler**. Liegt er über einigen Prozent, lösen Sie mit einer kleineren Elementgröße erneut oder lassen Sie **Automatisch verfeinern** das übernehmen. An einer Platte mit Loch und einem Stab mit zwei Randkerben kam die automatische Verfeinerung mit etwa einem Sechstel der Unbekannten, die eine feinere Gesamtnetzung brauchte, auf 1 % des Lehrbuch-Kt. Bei Voxel-Würfeln ist ein Loch oder eine Verrundung auf der Würfelgröße eine Treppe, daher ist die Spannung dort grob.
- **Scharfe Innenecken und die Kanten fester Flächen haben keine wahre Spitzenspannung.** Der Wert dort wächst weiter, je kleiner die Elemente werden. Lesen Sie Spannungen ein wenig abseits solcher Stellen oder runden Sie die Ecke im Modell.
- **Ergebnisse zum Ablesen.** Neben der Von-Mises-Spannung, Verschiebung und dem Sicherheitsfaktor zeigt eine Tetraeder-Studie die **größte und kleinste Hauptspannung** (Zug und Druck) und die **Vergleichsdehnung**. Setzen Sie den Haken bei **Netz anzeigen**, um die Elemente zu sehen.
- **Statische Studien sind linear und elastisch.** Für Fließen und Kontakt verwenden Sie die oben genannten nichtlinearen Studienarten; große Verformungen und Ermüdung werden nicht gelöst. Wärme, thermische Spannung und lineares Knicken sind eigene Studienarten: siehe [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling).
- **Jeder Werkstoff ist in alle Richtungen gleich.** Gedruckte Kunststoffe sind quer zu ihren Schichten schwächer, oft um ein Drittel oder mehr.
- Dies ist ein Laborbau: Prüfen Sie Bauteile, die wichtig sind, auf andere Weise.

## Während der Bearbeitung aktualisieren (Live)

Setzen Sie im Block Lösen den Haken bei **Beim Bearbeiten aktualisieren**, und die Simulation folgt Ihren Änderungen. Ändern Sie eine Bemaßung, eine Last, den Werkstoff oder die Umgebung, und sofort erscheint eine **Schnellantwort**, berechnet mit Elementen, die viermal größer sind als die der Studie. Wenn Sie einen Moment innehalten (etwa eine Sekunde), ersetzt die eigene **verfeinerte Antwort** der Studie sie. Die Ergebnisse zeigen an, welche Sie sehen („Schnellantwort“ oder „Verfeinerte Antwort“), und die Elementgröße. Die Schnellantwort taugt für Richtung und Größe: Bei einem Stahlkragträger lag sie bei der Durchbiegung innerhalb von 1 % und bei der Spannung bei etwa 4 % der verfeinerten. Vertrauen Sie der verfeinerten Antwort für Zahlen, die Sie verwenden wollen. Statische, Eigenfrequenz-, thermische und Knickstudien arbeiten so. Live ist eine Ansichtseinstellung und wird nicht im Bauteil gespeichert. Ein Lösen, das Sie selbst drücken, bleibt bis zur nächsten Änderung unverändert.

## Herausfinden, was zuerst bricht (Bruchtest)

Für eine statische oder Knickstudie drücken Sie im Block **Bruchtest** auf **Was bricht zuerst?**. PartCraft skaliert die Lasten der Studie (Kräfte, Drücke und Gewicht zusammen), bis das Bauteil nachgibt, und listet, das Schlimmste zuerst, **den Lastfaktor bis zum ersten Fließen** (der Faktor auf den heutigen Lasten, bei dem die höchste Von-Mises-Spannung die Streckgrenze des Werkstoffs erreicht, mit einer roten Markierung dort, wo es geschieht) und **den Lastfaktor bis zum Knicken** für dieselben Lagerungen und Lasten. Ein Faktor von 4.3 bedeutet, dass das Bauteil das 4.3-Fache seiner Last trägt, bevor es fließt. **Ein Faktor unter 1 bedeutet, dass es schon unter der aktuellen Last nachgibt**, und das erscheint in der Problemliste als Fehler (die schwächste Feststellung wird als Hinweis angezeigt, auch wenn alles hält). Die Faktoren stammen aus einer linearen Studie auf Tetraedern bei Ihrer Elementgröße und sind so gut wie diese Studie: Die Spannung an einer festen Fläche oder einer scharfen Ecke hat keinen wahren Spitzenwert (siehe oben), und der Fließfaktor liegt dort auf der vorsichtigen Seite. Ihr Assistent kann dieselbe Prüfung mit dem Werkzeug `break_run` ausführen.

## Verwandt

- [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling)
- [Aus Lasten eine Form wachsen lassen (Generativ)](topic:generative-design)
- [Abstände, Winkel und Masse messen](topic:measure)
- [Was noch nicht umgesetzt ist](topic:not-built-yet)
