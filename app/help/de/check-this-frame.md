---
title: Diesen Rahmen prüfen
summary: Nehmen Sie die geraden Stahlstäbe einer Schweißbaugruppe (eine Kufe, ein Ständer, ein Rahmen aus Rohren und Profilen), stellen Sie die Ausrüstung auf ihre Füße und die Lager auf den Boden, und sehen Sie, wie stark jeder Stab und jede Schweißnaht nach AISC 360-16 oder EN 1993 ausgenutzt ist. Eine Hilfe, bis ein Ingenieur sie geprüft hat.
keywords: Rahmen, Schweißbaugruppe, Kufe, Pumpenkufe, Tragwerksstab, Schweißnaht, Schweißnähte, prüfen, AISC 360, EN 1993, Ausnutzung, Auslastung, Lager, Ausrüstung, Last, Hohlprofil, HSS, RHS, CHS, Ingenieur
from: 032e34ee
---

{{ui:Diesen Rahmen prüfen}} nimmt die geraden Stahlstäbe einer Schweißbaugruppe, baut daraus einen Rahmen, berechnet ihn unter dem Gewicht des Stahls und der Ausrüstung, die Sie darauf stellen, und prüft jeden Stab und jede Schweißnaht, an der Stäbe zusammentreffen. Ein Lauf, eine Tabelle.

:::warning
Es ist eine **Hilfe, bis ein Ingenieur sie geprüft hat**. Sie ist kein Prüfvermerk, und das Bestehen ist keine Bemessung. Sie verwendet die Mittellinien der Stäbe wie gezeichnet, behandelt jede Verbindung als rundum geschweißt über den Querschnitt, nimmt das Schweißnahtmaß aus der Wand des Profils (bis 8 mm), sofern Sie nichts festlegen, und prüft keine Schrauben, Bleche, Fußplatten, Anker, Auflagerpressung, Blockscherbruch, Ermüdung oder Anschlagen.
:::

## Ausführen

1. Zeichnen Sie die Stäbe mit {{ui:Tragwerksstab}} (die Profile kommen aus der Profiltabelle).
2. Öffnen Sie {{ui:Ansichten}} › {{ui:Diesen Rahmen prüfen}}. Legen Sie fest, wo der Rahmen steht (ein **Lager** an jedem Fuß: gelenkig, eingespannt oder als Rollenlager; {{ui:Gelenklager an den Füßen}} setzt eines an jedes unterste Stabende), und was darauf steht (**Ausrüstung**: Masse, Schwerpunkt, die Punkte, an denen sie festgeschraubt wird, und optional eine horizontale Schubkraft).
3. Wählen Sie die Norm: **ASCE 7 + AISC 360-16** oder **EN 1990 + EN 1993**. Stellen Sie die Stahlgüte und für AISC die Festigkeit des Schweißguts ein (482.6 MPa entspricht E70).
4. Drücken Sie {{ui:Prüfen}}. {{ui:Bericht als CSV speichern}} schreibt jede Tabelle, mit dem Hinweis auf die fehlende Prüfung zuerst.

Der Rahmen wird in Millimetern gelesen, mit der vertikalen Achse des Teils nach oben. Lager- und Ausrüstungspunkte werden als x y z im selben Koordinatensystem eingegeben, wobei z die Höhe ist.

Ein Stabende, das auf der Mitte eines anderen Stabes liegt, teilt diesen dort, ebenso ein Fuß oder ein Befestigungspunkt auf der Linie eines Stabes. Eine Masse wird als starrer Körper auf die Befestigungspunkte verteilt. Ein Schwerpunkt außerhalb der Füße oder eine Abhebekraft an einem Fuß wird angegeben, nie verborgen.

## Ergebnisse

- Das am stärksten ausgenutzte Element und ob etwas versagt. Elemente, die die Prüfung nicht beurteilen kann (ein Profil, das nicht in der Tabelle steht, ein Stahl ohne Faktor in der Norm), werden gezählt und genannt, nie als bestanden gewertet.
- Eine Zeile je Stab und je Schweißnahtgruppe: wie stark ausgenutzt, die maßgebende Prüfung und Klausel sowie die maßgebende Lastkombination.
- Dieselben Tabellen im Bericht.

## Was geprüft wird

Hohlprofile (RHS, SHS, CHS, Rohr) und I-Profile auf Zug, Druck, Biegung, Querkraft und deren Zusammenwirken; Kehlnähte und Durchschweißungen nach dem elastischen Vektorverfahren. Kompakte Wände nur bei Biegung und nur bei Hohlprofilen; schlanke Wände werden als nicht geprüft angegeben. Einige Konstanten wurden aus den Normen übernommen und noch nicht mit einem gedruckten Exemplar verglichen; der Bericht nennt jede Quelle.

Siehe [Rahmen aus Stahlprofilen](topic:structural-members) zum Zeichnen der Stäbe und ihrer Zuschnittsliste.
