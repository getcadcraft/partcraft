---
title: Rahmen aus Stahlprofilen
summary: Stahlprofile entlang der Linien einer oder mehrerer Skizzen legen, um einen geschweißten Rahmen zu bilden: Gehrungs- oder Stumpfecken, Stäbe passend an den Stößen geschnitten, Endkappen, Knotenbleche und eine Zuschnittsliste mit Längen und Endwinkeln.
keywords: Schweißkonstruktion, Tragwerksstab, Rahmen, Stahlrahmen, Rohr, Quadrat-Hohlprofil, HSS, RHS, SHS, CHS, Breitflansch, I-Träger, W-Träger, IPE, HEA, HEB, U-Profil, UPN, Winkel, Gehrung, Stumpfstoß, Ausklinkung, Endkappe, Knotenblech, Zuschnittsliste
from: 59071e5a
---

Ein **Tragwerksstab** legt ein Stahlprofil entlang jeder Linie der gewählten Skizzen. Zeichnen Sie den Rahmen als Linien (jede Linie ist ein Stab), wählen Sie dann das Profil: Die Stäbe werden erstellt, ihre Ecken gestutzt und verlängert, und eine Zuschnittsliste sagt, wie lang jedes Stück geschnitten werden muss und in welchem Winkel.

## Einen Rahmen erstellen

1. Zeichnen Sie den Rahmen als Linien in einer Skizze, zum Beispiel ein Rechteck auf der Draufsichtebene. Linien, die als Konstruktion markiert sind, werden weggelassen.
2. Wählen Sie bei gewählter Skizze {{ui:Mehr}} › {{ui:Tragwerksstab}}. Jede Linie der Skizze erhält einen Stab.
3. Wählen Sie im Bereich die **Familie** und das **Format** des Profils. Die Familien sind die AISC-Tabellen (W, S, C, L, HSS-Hohlprofile, Rohr) und EN 10365 (IPE, HEA, HEB, UPN).

### Ein Rahmen in 3D

Linien aus mehreren Skizzen bilden einen Rahmen: Ein oberes Rechteck, auf einer Ebene darüber skizziert, und die Stützen, auf aufrechten Ebenen skizziert, treffen sich an ihren Enden in 3D. Setzen Sie im Bereich unter **Entlang der Linien von** bei jeder Skizze ein Häkchen, deren Linien die Stäbe folgen. Enden, die sich innerhalb eines Mikrometers treffen, werden verbunden.

## Das Profil auf seiner Linie setzen

- **Drehen (°)** dreht das Profil um seine Linie. Ein Träger steht mit seiner Höhe aufrecht (bei einem senkrechten Stab zeigt die Höhe nach vorn).
- **Auf der Linie** wählt, welcher Punkt des Profils auf der Linie liegt: die Mitte oder eine Ecke oder die Mitte einer Seite des Profilumrisses. „Unten Mitte“ setzt einen Rahmen auf die Skizzenebene statt durch sie hindurch.

## Ecken und Verbindungen

| Wo Stäbe zusammentreffen | Was geschieht |
|---|---|
| Zwei Stäbe enden aneinander, **Ecken: Gehrung** | Beide werden auf der Ebene halbiert zwischen ihnen geschnitten, wie bei einem Bilderrahmen |
| Zwei Stäbe enden aneinander, **Ecken: Stumpf** | Der erste Stab läuft bis zur fernen Fläche des zweiten; der zweite wird rechtwinklig an der nahen Fläche des ersten geschnitten |
| Ein Stab endet auf der Mitte eines anderen (ein T) | Er wird passend an der Außenseite des anderen Stabes geschnitten |
| Drei oder mehr enden an einem Punkt | Der erste läuft rechtwinklig über die anderen hinaus; die anderen werden passend an ihm geschnitten |

Der erste Stab ist der, dessen Linie zuerst kommt: Linien behalten die Reihenfolge, in der sie gezeichnet wurden, Skizze für Skizze in der Reihenfolge, in der die Skizzen angehakt wurden.

## Endkappen und Knotenbleche

- **Endkappen** verschließen jedes freie Ende mit einer Platte aus dem Profilumriss, in der von Ihnen eingestellten Dicke, außen vor dem Ende.
- **Knotenbleche** setzen eine dreieckige Platte in jede Ecke, an der sich zwei Stäbe in einem Winkel treffen: **Knotenblechgröße** entlang jedes Stabes von der Ecke aus, **Knotenblechdicke** quer, zentriert auf der Ebene der Ecke.

## Die Zuschnittsliste

Die Liste führt jedes Stück auf, gleiche Stücke sind gruppiert: das Profil, die Länge (von langer Spitze zu langer Spitze, wie Sie sie fürs Sägen anzeichnen), wie jedes Ende geschnitten ist (rechtwinklig, ein Winkel zur Rechtwinkligen oder passend geschnitten) und zu welchen Stäben sie gehören. Endkappen und Knotenbleche werden mit ihren Größen aufgeführt. {{ui:Zuschnittsliste speichern (CSV)}} speichert sie für eine Tabellenkalkulation.

Ein passend geschnittener Stab reicht ein wenig in den Eckradius dieses Hohlprofils hinein, daher ist seine Länge von langer Spitze zu langer Spitze einige Millimeter größer als der Abstand zwischen den Flächen.

## Grenzen

- Stäbe folgen nur geraden Linien; Bögen und Splines in der Skizze werden weggelassen.
- Die Verbindungen sind geschnitten, nicht geschweißt: Es werden keine Schweißraupen gezeichnet, und der Rahmen ist ein Volumenkörper.
- Die Profile werden aus den Maßen der Tabelle gezeichnet: W-Profile mit ihrer Wurzelausrundung, S-Profile und U-Profile mit parallelen Flanschen, Hohlprofile mit Eckradien; Löcher, Stabenden und Schweißspalte werden nicht für Sie erstellt.
- Tragwerksstäbe werden vom Netzkernel erstellt. Ist der exakte Kernel eingeschaltet (nur für Entwickler), zeigen sie das an und werden nicht erstellt.
