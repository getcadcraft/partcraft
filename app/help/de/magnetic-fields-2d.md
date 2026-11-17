---
title: Magnetfelder in 2-D (Anleitung)
summary: Berechnen Sie das Magnetfeld eines Elektromagneten oder eines Permanentmagneten mit der Analysebibliothek: Führen Sie die Beispiele aus, lesen Sie Flussdichte, Spaltfeld, Induktivität und Zugkraft ab, ändern Sie das Design und bauen Sie Ihr eigenes Modell aus Spulen, Magneten und Eisen.
keywords: magnetisch, Magnetostatik, Magnetfeld, Flussdichte, Tesla, Elektromagnet, Magnetspule, Spule, Amperewindungen, Eisenkern, Luftspalt, Permeabilität, Induktivität, Magnetkraft, Reluktanz, magnetischer Kreis, Vektorpotential, Elektromagnetik, Finite Elemente, FEM, Motor, Aktor, Transformator, magnetostatic2d, Permanentmagnet, Neodym, NdFeB, Ferrit, Remanenz, Arbeitspunkt, Rückstellung, Streuung, Haltemagnet
from: 215f6601
---

Die Analysebibliothek von PartCraft kann das Magnetfeld von Spulen und Eisen in 2-D berechnen: einen Querschnitt von etwas, das lang ist und entlang seiner Länge gleich bleibt, etwa ein Elektromagnet, ein Transformatorkern, eine Stromschiene oder der Querschnitt eines Motors. Diese Anleitung führt das Elektromagnet-Beispiel der Bibliothek aus, liest das Ergebnis, ändert es, zeigt, wie Sie Ihre eigene Form modellieren, und ergänzt dann einen Permanentmagneten.

Sie verwenden den Arbeitsbereich Script und die [Analysebibliothek](topic:craftscript-library). Sie müssen die Sprache CraftScript nicht kennen, um zu folgen; das Beispiel erklärt, was jede Zeile tut.

## Was modelliert wird

Ein C-förmiger Eisenkern, außen 100 × 80 mm und 20 mm dick, mit einem 2 mm breiten Luftspalt im rechten Schenkel. Um den linken Schenkel ist eine Spule mit 100 Windungen gewickelt, die 10 A führt (1000 Amperewindungen). Alles ist in Richtung aus dem Bildschirm lang, daher beziehen sich die Ergebnisse auf **pro Meter Tiefe**: Multiplizieren Sie mit der echten Tiefe für einen echten Magneten.

Die `magnetostatic2d` der Bibliothek löst das Vektorpotential auf einem Gitter aus 1-mm-Quadraten in einem Luftkasten um den Magneten und berechnet daraus die Flussdichte **B** (in Tesla).

## Das Beispiel ausführen

1. Wählen Sie **Script** im Feld **Arbeitsbereich** links in der Symbolleiste.
2. Öffnen Sie die Registerkarte **Bibliothek** des Skriptbereichs, dann **Beispiele** › **Elektromagnet: Feld, Spalt, Induktivität**.
3. Klicken Sie auf {{ui:Öffnen (schreibgeschützt)}}, dann drücken Sie {{key:F5}}.

Nach ein bis zwei Sekunden zeigt die Zeichenfläche die Flussdichte, und die Konsole gibt Folgendes aus:

```
B im Spalt 0.5427 T; magnetischer Kreis 0.5516 T (-1.6 %: Randfeld und Streuung)
Induktivität 0.1539 H pro Meter Tiefe; der Kreis ergibt 0.1103 H/m, ohne den Fluss, der am Spalt vorbeiläuft
gespeicherte Energie 7.694 J/m; |B| erreicht Spitzen von 1.97 T in den inneren Ecken des Fensters (echter Stahl würde dort sättigen)
Zugkraft über den Spalt etwa 2343 N pro Meter Tiefe (117.2 N bei 50 mm Tiefe)
```

Die Kurve unter der Zeichenfläche zeigt die senkrechte Flussdichte B_y entlang der Mittellinie des Kerns, von links nach rechts: etwa −0.55 T im linken Schenkel (der Fluss läuft ihn hinab), fast nichts im Fenster und +0.55 T im rechten Schenkel und über den Spalt (der Fluss kehrt nach oben zurück). Derselbe Fluss durchläuft das Eisen und den Spalt, daher zeigen die beiden Schenkel und der Spalt nahezu den gleichen Wert.

## Die Ergebnisse lesen

- **Das Feld im Spalt** beträgt 0.543 T. Eine Handrechnung behandelt den Kern als einen magnetischen Kreis, B = μ0 N I / (g + l / μr), wobei g der Spalt ist, l die Länge des Wegs durch das Eisen und μr die relative Permeabilität des Eisens; sie ergibt 0.552 T. Das Feld ist etwas niedriger als die Handrechnung, weil der Fluss um den Spalt ausbaucht (Randfeld) und ein Teil des Flusses im Fenster eine Abkürzung nimmt (Streuung). Mit einem kleineren Spalt oder einem feineren Gitter kommen beide näher zusammen.
- **Die Induktivität** der Spule mit 100 Windungen beträgt 0.154 H pro Meter Tiefe, berechnet aus der im Feld gespeicherten Energie. Die Kreisformel ergibt weniger (0.110 H/m), weil sie nur den Fluss durch den Spalt zählt, nicht den Fluss, der daran vorbeiläuft.
- **Die Zugkraft**, die den Spalt schließt, ist B² w / (2 μ0) für eine Spaltfläche der Breite w: etwa 2300 N pro Meter oder 117 N für einen Magneten von 50 mm Tiefe.
- **Der Spitzenwert** von 1.97 T liegt in den inneren Ecken des Fensters, wo der Fluss scharf abbiegt. Das Modell behandelt das Eisen als linear; echter Elektroblech-Stahl sättigt bei etwa 1.5 bis 2 T. Behandeln Sie Werte darüber daher als Warnung, nicht als Antwort.

:::note
Die Tests der Bibliothek führen dieses Beispiel aus und prüfen das Spaltfeld bei jeder Änderung an PartCraft gegen die Formel des magnetischen Kreises. Die Methode, ihre Quellen und ihre übrigen Prüfungen (eine lange Zylinderspule, eine Spule mit Eisenkern) stehen im Kopf von `magnetostatic2d`: Klicken Sie es in der Bibliothek an.
:::

## Das Design ändern

1. Klicken Sie auf {{ui:Kopie erstellen}} über dem schreibgeschützten Skript. Die Kopie wird mit Ihrem Bauteil gespeichert.
2. Ändern Sie einen Wert nahe dem Anfang und drücken Sie erneut {{key:F5}}. Probieren Sie:
   - `g = 0.001;` — halber Spalt: das Spaltfeld nahezu verdoppelt sich, und mit ihm die Zugkraft (sie geht mit B² einher).
   - `mur = 200;` — ein schlechterer Kern: mehr Amperewindungen werden im Eisen verbraucht.
   - `N = 200;` — doppelt so viele Windungen: doppeltes Feld, vierfache Induktivität.
   - `h = 0.0005;` — ein feineres Gitter: genauere Ergebnisse, etwa die vierfache Zeit.

Jeder Lauf ersetzt die Zeichenfläche. Die Variablen, die das Skript erzeugt (wie `Bgap`, `L`, `F`), bleiben in der Liste **Variablen** für Ihre eigenen Rechnungen.

## Ihre eigene Form modellieren

Das Beispiel baut alles aus drei Listen auf, mit einem Wert pro Gitterquadrat. Sie können das für jede Form erstellen, die mit geraden Linien entlang des Gitters gezeichnet ist:

- **Wo das Eisen ist:** `iron` ist für die Quadrate im Kern wahr. Das Beispiel baut es aus Rechtecken auf: `frame & ~window & ~gap` bedeutet „im Rahmen, nicht im Fenster, nicht im Spalt“.
- **Die Permeabilität:** `1 + (mur - 1) * iron` ist 1 in Luft und `mur` im Eisen. Geben Sie mehreren Materialien auf dieselbe Weise eigene Werte.
- **Der Strom:** `J` ist die Stromdichte in Ampere pro Quadratmeter, positiv aus dem Bildschirm heraus, negativ in ihn hinein. Eine Spule hat zwei Seiten mit entgegengesetzten Vorzeichen; das Beispiel berechnet `J0` so, dass eine Seite N I führt.

Dann löst `r = magnetostatic2d(m, permeability, J)` das Problem. `r.B` ist die Flussdichte in jedem Quadrat (zwei Spalten, x und y), `r.Bmag` ihre Größe, `r.energy` die gespeicherte Energie pro Meter. `plot(x, y)` zeichnet eine Linie.

Die Bibliothek rechnet in Metern, die Ansicht in Millimetern; ein Feld so, wie es ist, gezeichnet, wäre tausendmal zu klein. Das Beispiel zeigt es auf einer Kopie des Gitters in Millimetern (`mm = quadGrid(…)`, dann `show(field(mm, …))`): Kopieren Sie diese beiden Zeilen.

Standardmäßig hält der Rand des Kastens das Feld zurück: Kein Fluss verlässt ihn. Machen Sie den Kasten mindestens zwei- bis dreimal so groß wie den Magneten, damit er das Feld nicht einengt. Bei einem symmetrischen Magneten können Sie die Hälfte modellieren: Der Kopf von `magnetostatic2d` nennt die passende Randbedingung auf einer Symmetrielinie.

## Permanentmagnete

Das zweite Beispiel, **Beispiele** › **Permanentmagnet in einem Eisenkern: Arbeitspunkt, Streuung, Zugkraft**, ist derselbe Kern, ohne die Spule und mit einer 10 mm dicken Scheibe des linken Schenkels, die durch einen nach oben magnetisierten Magneten ersetzt ist. Führen Sie es mit {{key:F5}} aus. Es gibt aus:

```
der Magnet arbeitet bei B = 1.036 T, H = -124 kA/m (auf seiner Rückstelllinie B = Br + μ0 μr H)
B im Spalt 0.6778 T; der magnetische Kreis ohne Streuung 0.9692 T (-30.1 %)
Streufaktor 1.53: von dem Fluss, der den Magneten verlässt, überquert 65 % den Spalt zwischen den Polflächen
Zugkraft über den Spalt etwa 3656 N pro Meter Tiefe (182.8 N bei 50 mm Tiefe)
```

- **Der Arbeitspunkt.** Ein Magnet wird durch seine **Remanenz** Br beschrieben (das Feld, das er behält, wenn Eisen ihn kurzschließt: etwa 1.2 T für einen gesinterten NdFeB-Magneten, 0.4 T für Ferrit) und durch seine Rückstellpermeabilität (etwa 1.05 bzw. 1.1). Das Öffnen eines Spalts drückt ihn auf seiner Rückstelllinie nach unten: hier auf 1.04 T, wobei H im Magneten gegen B zeigt.
- **Streuung.** Die Handrechnung ohne Streuung ergibt 0.97 T im Spalt; das Modell ergibt 0.68 T. Ein Magnet treibt seinen Fluss mit starkem Druck über eine kurze Strecke, daher geht viel davon direkt durch das Fenster zurück statt durch den Spalt. Der Streufaktor sagt, wie viel: hier 1.53. Setzen Sie `g = 0;` für einen geschlossenen Rückschluss: Der Magnet arbeitet dann innerhalb eines halben Prozents der Handrechnung.
- **Magnete in Ihrem eigenen Modell.** Übergeben Sie `magnetostatic2d` die Magnete als `struct('Br', Br)`, wobei `Br` eine Zeile pro Gitterquadrat hat mit der Remanenz in x und y in Tesla (null außerhalb der Magnete). Geben Sie den Magnetquadraten ihre Rückstellpermeabilität in der Permeabilitätsliste:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T nach oben in den Quadraten, in denen mag wahr ist
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Bei einem Magneten, der unter einem Winkel magnetisiert ist, tragen Sie `Br·cos(angle)` und `Br·sin(angle)` in die beiden Spalten ein; bei einem Ring, der nach außen magnetisiert ist, berechnen Sie die Richtung jedes Quadrats aus seiner Position. `r.H` liefert die Feldstärke H in jedem Quadrat.

Das Modell hält einen Magneten auf seiner geraden Rückstelllinie, egal wie stark er ausgesteuert wird. Ein echter Magnet, der über sein Knie hinaus ausgesteuert wird (durch einen großen Spalt, eine starke Spule oder Hitze), verliert dauerhaft einen Teil seiner Stärke; prüfen Sie den Arbeitspunkt gegen die Kennlinie des Herstellers für Sorte und Temperatur.

Die Tests der Bibliothek prüfen Magnete gegen zwei Handergebnisse: einen runden Magneten in freier Luft (innen gilt B = Br / (1 + μr)) und einen Magneten, der durch einen Eisen-Rückschluss geschlossen ist (der magnetische Kreis), beide innerhalb von 1 %.

## Was es noch nicht kann

- **Sättigung.** Das Eisen ist linear: doppelter Strom, doppeltes Feld, ohne Grenze.
- **Entmagnetisierung.** Magnete bleiben auf ihrer geraden Rückstelllinie (siehe oben).
- **Wirbelströme** und **Verluste** (Eisenverluste, Kupferverluste).
- **Bewegliche Teile und Drehmoment.** Kein Läufer, der sich in einem Stator dreht, kein Drehmoment über dem Winkel.
- **Runde Formen.** Das Gitter besteht aus gleichen Quadraten, daher erscheinen gekrümmte Konturen gestuft.
- **3-D.** Alles ist ein Querschnitt von etwas Langem.

Motorauslegung (ein drehender Läufer, Drehmoment und Verluste in 2-D) wird für eine spätere Version geprüft. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
