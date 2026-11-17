---
title: Die Analysebibliothek
summary: Die Bibliothek lesbarer Analyseskripte im Skript-Arbeitsbereich: was in jeder Gruppe steckt, eine Funktion schreibgeschützt öffnen, ihr Kopf mit Methode, Referenzen und Prüfung, eine eigene Kopie anlegen und wie eine Kopie die Bibliotheksfunktion ersetzt.
keywords: Bibliothek, craftlib, Analyse, Elektromagnet, statisch, modal, thermisch, Topologieoptimierung, top88, SIMP, Elektromagnetik, Elektrostatik, Magnetostatik, Strömung, Gitter-Boltzmann, LBM, Netz, Voxel, Tetraeder, Referenzen, Prüfung, Verifikation, Kopie, Überschattung
from: bf993859
---

Die Analysebibliothek ist eine Sammlung von Skripten, jedes eine Funktion, die Sie von oben nach unten lesen können: wie die Steifigkeitsmatrix aufgebaut wird, wo die Randbedingungen hinkommen, welcher Löser läuft und wie die Ergebnisse berechnet werden. Nichts darin ist als Blackbox verborgen; nur die schnellen inneren Schleifen (Elementmatrizen, dünnbesetzte Löser, Vernetzung) sind eingebaut.

## Mit einem Beispiel beginnen

Die Gruppe **Beispiele** enthält fünf kurze Skripte, die die Bibliothek durchgehend nutzen. Klicken Sie eines an, drücken Sie {{ui:Öffnen (schreibgeschützt)}}, dann {{key:F5}}: Jedes leert die Ansicht, zeigt ein Ergebnis in der Ansicht und einen Plot in den Nebenanzeigen.

| Beispiel | Was es zeigt |
|---|---|
| Kragträger-Spannung | Ein Stahlstab 100 × 10 × 10 mm unter einer Endlast von 100 N: Vergleichsspannung nach von Mises am verformten Stab und die Endverformung gegenüber der Balkentheorie bei vier Elementgrößen (geplottet) |
| MBB-Balken-Topologie | Die klassische Topologieoptimierung 60 × 20: die Entstehung des Entwurfs, das Sinken der Nachgiebigkeit, das endgültige Layout (94 Iterationen, Nachgiebigkeit 203.19) |
| Kondensatorfeld | Zwei Platten, 4 mm breit, 1 mm voneinander entfernt: Potenzial und Feld, die Kapazität mit Randfeld gegenüber dem Idealwert und der Palmer-Formel |
| Kanalströmung | Gitter-Boltzmann-Strömung um einen Pfosten in einem Kanal: das Geschwindigkeitsfeld und der Konvergenzverlauf |
| Elektromagnet | Ein C-förmiger Eisenkern mit Luftspalt und Spule: die Flussdichte, das Feld im Spalt gegenüber der Formel für den magnetischen Kreis, die Induktivität und die Zugkraft über den Spalt. Schritt für Schritt erklärt in [Magnetfelder in 2-D](topic:magnetic-fields-2d) |
| Permanentmagnet | Derselbe Kern mit einem Permanentmagneten statt der Spule: der Arbeitspunkt des Magneten, das Feld im Spalt gegenüber dem magnetischen Kreis, wie viel Fluss streut, die Zugkraft. In [Magnetfelder in 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Gruppen

| Gruppe | Funktionen | Was sie tun |
|---|---|---|
| Vernetzung | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Quader und Zylinder als Hexaeder, Würfel oder Tetraeder; Würfel oder Tetraeder jedes Modells (des Bauteils, eines Körpers, einer geladenen STL); Elementvolumen und Qualität; Auswahl von Knoten auf einer Ebene oder einer Fläche |
| Statische Spannung | `static_voxel`, `static_tet` | Lineare statische Spannung an Würfeln oder an 10-Knoten-Tetraedern: Verschiebungen, Spannungen, von Mises, Reaktionen |
| Rahmen | `frame3d` | 3D-Rahmen aus Balken, Stützen und Verbänden nach der direkten Steifigkeitsmethode: Stabendlösungen, Lager und Federn, Lasten entlang der Stäbe; Verschiebungen, Reaktionen, Stabendkräfte. Das {{ui:Als CraftScript exportieren}} von DetailCraft und BimCraft schreibt dafür ein ganzes Modell. Ein Analysehilfsmittel, keine Normprüfung |
| Schwingung | `modal_tet` | Eigenfrequenzen und Eigenformen |
| Wärme | `heat_steady`, `heat_transient`, `heat_system` | Stationäre und instationäre Wärmeleitung mit festen Temperaturen, Wärmeeintrag, Erzeugung, Fluss und Konvektion |
| Topologieoptimierung | `top88`, `top99`, `topopt3d` | Die veröffentlichten 2-D-Codes mit 88 und 99 Zeilen und dieselbe Methode in 3-D auf Würfeln |
| Elektromagnetik | `poisson2d`, `magnetostatic2d` | 2-D-Elektrostatik (Potenzial, Feld, Kapazität, Ladung) und Magnetostatik (Vektorpotenzial, Flussdichte, Permanentmagnete) |
| Strömung | `lbm2d`, `lbm3d` | Gitter-Boltzmann-Strömung: 2-D im Skript ausgeschrieben, 3-D auf dem eigenen Strömungskern von PartCraft |

Der Kopf jeder Funktion nennt ihre genauen Argumente. Die Einheiten sind die der Studien von PartCraft, sofern der Kopf nichts anderes angibt: Millimeter, Newton, Megapascal, Tonnen pro Kubikmillimeter für die Dichte, Watt und Kelvin für Wärme. Die elektromagnetischen Funktionen und die Gitter-Boltzmann-Funktionen arbeiten mit beliebigen, aber konsistenten Einheiten; ihre Köpfe sagen, wie.

## So wird die Bibliothek geprüft

Der Kopf jeder Funktion endet mit einer **Prüfung**: einem kleinen Fall mit bekannter Lösung. Die Tests von PartCraft führen alle aus, und wo PartCraft für dieselbe Aufgabe eine eigene Studie hat, wird die Antwort des Skripts mit dieser Studie auf demselben Netz verglichen:

- die Endverformung des Kragträgers gegenüber der Balkentheorie (innerhalb von 0.2 % bei Würfeln, 0.05 % bei Tetraedern) und gegenüber den Lösern des **Simulation**-Arbeitsbereichs auf demselben Netz (bis auf viele Stellen gleich);
- die erste Frequenz des Kragträgers gegenüber der Balkentheorie (0.24 % niedriger, wie bei einem kurzen Balken erwartet) und gegenüber dem modalen Löser von **Simulation**;
- Wärme: eine beheizte ebene Wand exakt, ein kleiner Körper, der sich laut der Formel für die konzentrierte Kapazität abkühlt, die Temperatur einer Platte, die wie die Theorie vorhersagt abklingt;
- Topologieoptimierung: `top88` reproduziert die 94 Iterationen und die Nachgiebigkeit 203.1925 der Veröffentlichung (und 218.8032 mit dem Dichtefilter); `topopt3d` endet bei derselben Nachgiebigkeit wie der **Generativ**-Arbeitsbereich mit denselben Einstellungen;
- Kapazität eines Kondensators und Feld einer langen Spule gegenüber ihren Lehrbuchwerten, das Spaltfeld des Elektromagneten gegenüber der Formel für den magnetischen Kreis, sowie Permanentmagnete gegenüber einem runden Magneten in Luft und einem Magneten, der durch einen Eisenanker geschlossen ist;
- Kanalströmung gegenüber dem exakten parabolischen Profil.

## Eine Funktion lesen

1. Öffnen Sie die Registerkarte **Bibliothek** des Skript-Bedienfelds.
2. Klicken Sie eine Funktion an. Ihr Kopf zeigt: was sie berechnet, die Methode, Einheiten, Annahmen und Grenzen, die **Referenzen** (Buch oder Artikel, mit Gleichungsnummern) und eine **Prüfung** — einen kleinen Fall mit bekannter Lösung, den die eigenen Tests von PartCraft ausführen.
3. {{ui:Öffnen (schreibgeschützt)}} öffnet das ganze Skript in einer Registerkarte mit gestricheltem Rand. Sie können es ausführen, Teile davon auswählen und ausführen, aber nicht ändern.

## Eine ändern

Drücken Sie {{ui:Kopie erstellen}} (oder **Zum Bearbeiten kopieren** über einer schreibgeschützten Registerkarte). Die Kopie ist ein Skript in Ihrem Bauteil mit demselben Namen; sie wird deshalb mit dem Bauteil gespeichert, und **jeder Aufruf dieser Funktion verwendet jetzt Ihre Kopie** — der Editor zeigt das über dem Skript an. Benennen Sie die Kopie um, um beide zu behalten.

## Eine verwenden

Rufen Sie eine Bibliotheksfunktion aus jedem Skript mit ihrem Namen auf, wie eine eingebaute Funktion:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Die Ergebnisse kommen als Werte im Arbeitsbereich zurück; Plots und Felder, die sie zeigt, erscheinen in der Ansicht und in den Nebenanzeigen.

Eine statische Analyse des geöffneten Bauteils braucht zum Beispiel nur wenige Zeilen:

```
v = voxel_mesh(part(), 2);                   % 2-mm-Würfel
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % unten festhalten
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N nach unten auf der Oberseite
r = static_voxel(v, 210000, 0.3, bc);       % Stahl
```

`r` enthält die Verschiebungen, Spannungen und Reaktionen; die Vergleichsspannung nach von Mises wird auf dem verformten Bauteil gezeichnet. Für gekrümmte Bauteile verwenden Sie `tet_mesh` und `static_tet`; sie können auch ganze Flächen belasten und festhalten (`face_nodes`).

:::note
Die Funktionen der Bibliothek sind in CraftScript geschrieben, und ein Lua-Skript ruft sie über `cs` auf, wie die eingebauten Funktionen: `cs.static_tet(t, 200000, 0.3, bc)` (siehe [Skripte in Lua](topic:craftscript-lua)). Jede Funktion löst einen Werkstoff und einen Lastfall; die Köpfe nennen, was sonst nicht abgedeckt ist.
:::
