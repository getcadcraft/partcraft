---
title: Formschräge für Form und Guss prüfen
summary: Das Bauteil nach seinem Formschrägenwinkel gegen die Ziehrichtung einer Form einfärben; sehen, welche Flächen sich entformen lassen, welche mehr Formschräge brauchen und welche von der anderen Formhälfte entformt werden, mit dem Flächenanteil jeder Klasse.
keywords: Formschrägenanalyse, Formschräge, Verjüngung, Form, Gussform, Druckguss, Spritzguss, Ziehrichtung, Trennebene, Hinterschnitt, Entformung, Formschräge prüfen
from: 6a106f83
---

Teile, die in einer Form, einem Druckgusswerkzeug oder einem Sandguss entstehen, brauchen **Formschräge**: leicht geneigte Wände, damit das Teil herausgleitet. Die **Formschrägenanalyse** färbt jede Fläche danach, wie stark sie von der Richtung abweicht, in der sich die Form öffnet (die **Ziehrichtung**).

## Einschalten

1. Öffnen Sie im Arbeitsbereich Design {{ui:Ansichten}} und wählen Sie {{ui:Formschrägenanalyse}}.
2. Stellen Sie **Ziehrichtung** ein: die Richtung, in der sich die Form öffnet, entlang X, Y oder Z in beide Richtungen, oder **Senkrecht zu einer gewählten Fläche**. Drücken Sie dafür {{ui:Fläche wählen}} und klicken Sie auf eine ebene Fläche des Bauteils.
3. Stellen Sie **Mindestformschräge** in Grad ein: die kleinste Neigung, die Ihr Verfahren braucht (oft 1° bis 3°).

Das Bauteil wird eingefärbt:

| Farbe | Bedeutung |
|---|---|
| Grün: **Positive Formschräge** | Um mindestens das Minimum zur Ziehrichtung geneigt: entformt aus dieser Formhälfte |
| Ocker: **Formschräge nötig** | Innerhalb des Minimums in beide Richtungen, etwa eine senkrechte Wand: hier Formschräge hinzufügen |
| Rot: **Negative Formschräge** | Um mindestens das Minimum von der Ziehrichtung weg geneigt: entformt aus der anderen Formhälfte, oder ein Hinterschnitt, wenn das Teil aus einer Hälfte kommen soll |

Der Anteil jeder Klasse an der Oberfläche des Bauteils wird daneben angezeigt. **Ziehrichtung umkehren** zeigt die Sicht von der anderen Formhälfte: Grün und Rot tauschen.

Gekrümmte Flächen werden Punkt für Punkt beurteilt, sodass ein Zylinder quer zur Ziehrichtung ein Band zeigt, das an seinen Seiten Formschräge braucht.

Die Farben folgen dem Bauteil, wenn Sie es ändern. {{key:Esc}} oder {{ui:Schließen}} schaltet die Analyse aus; im Bauteil wird nichts gespeichert.

:::tip
Um Formschräge hinzuzufügen, verwenden Sie das Feature {{ui:Formschräge}} auf den ockerfarbenen Flächen (siehe [Sweep, Loft und Formschräge](topic:sweep-loft-draft)) und prüfen Sie dann erneut.
:::
