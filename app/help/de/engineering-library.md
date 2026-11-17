---
title: Die Ingenieurbibliothek
summary: Lehrbuchformeln als lesbare Skripte, in SI-Einheiten, jedes Ergebnis mit seiner Quelle: Rohr- und Kanalströmung, Wärmeübertragung und Wärmetauscher, Druckbauteile, Gasdynamik, Stoffwerte von Wasser und Luft, Werkstoffe und geprüfte Einheiten. Wofür jede taugt und wo sie aufhört.
keywords: Ingenieurwesen, Bibliothek, Einheiten, Darcy-Weisbach, Colebrook, Reynolds, Reibungszahl, Dittus-Boelter, Gnielinski, NTU, Effektivität, LMTD, Rippe, Barlow, Lamé, Stutzen, isentrop, Mach, kritische Strömung, Wasser, Luft, Stoffwerte, Werkstoff, Quellen
from: 786ef967
---

Die Ingenieurbibliothek ist eine Sammlung von Skripten in der Bibliothek des Skript-Arbeitsbereichs (`craftlib/eng`). Jedes ist eine Funktion, die Sie von oben nach unten lesen können, mit einer Kopfzeile, die ihre **Methode**, ihre **Einheiten**, ihre **Grenzen**, ihre **Quellen** und eine **Prüfung** mit einer durchgerechneten Zahl angibt. Sie verwenden durchgehend SI-Einheiten und geben Größen zurück, die eine **Einheit** und eine **Quelle** tragen. So kann ein Datenblatt ausgeben, woher jede Zahl stammt.

## Geprüfte Einheiten

`to_si(10, 'bar', 'Pa')` rechnet einen Wert um und lehnt eine Einheit ab, die etwas anderes misst (eine Länge, wo ein Druck erwartet wird). `from_si`, `unit_convert(1, 'bar', 'psi')` und `unit_kind('W/(m K)')` („Wärmeleitfähigkeit“) funktionieren genauso. `temp_k(25, 'C')` und `temp_from_k` rechnen Temperaturen um, die einen Versatz haben.

## Stoffwerte

- `fluid('water', T)` und `fluid('air', T, p)`: Dichte, Viskosität, Wärmeleitfähigkeit, spezifische Wärmekapazität, Prandtl-Zahl. Wasser von 0 bis 100 °C, Luft von 250 bis 600 K. Außerhalb davon bricht es ab, statt zu extrapolieren.
- `material('ss304')`: Elastizitätsmodul, Querkontraktionszahl, Dichte, Streckgrenze, Wärmeleitfähigkeit, spezifische Wärmekapazität, Ausdehnung. Das sind Werte bei Raumtemperatur aus denselben Datenblättern wie die Simulation. Eine echte Konstruktion verwendet die zertifizierten Werte des Lieferanten. Temperaturkurven sind noch nicht umgesetzt.

## Strömung in Rohren und Kanälen

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, dann die Colebrook-Gleichung für turbulente Strömung; der Bereich 2300 bis 4000 hat keine verlässliche Formel, und das sagt die Funktion), `darcy_weisbach`, `minor_loss`, `pipe_flow` (rundes Rohr, alles auf einmal) und `rect_channel` (laminare Rechteckkanäle nach der Anpassung von Shah und London).

## Wärmeübertragung

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (wählt laminar oder turbulent und nennt die Korrelation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` und `ntu_for` (die Effektivität-NTU-Beziehungen für Gegenstrom, Gleichstrom, Rohrbündel, Kreuzstrom und einen einzelnen sich ändernden Strom) und `hx_size` (die Größe UA, die eine Last braucht; es sagt, wie viel möglich ist, wenn die Last nicht erfüllt werden kann).

## Druckbauteile

`allowable_stress` (Streckgrenze geteilt durch einen Sicherheitsfaktor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, nach dem Umfangs- oder dem Schubkriterium) und `wall_sphere`. Dies sind Lehrbuch-Reserven, **keine Berechnung nach einem Druckbehälter-Regelwerk**: kein Korrosionszuschlag, kein Schweißnahtfaktor, keine Regelwerksfaktoren.

## Gasdynamik

`isentropic` (die Verhältnisse bei einer Machzahl), `mach_from_area`, `choked_flow`, `throat_area` und `exit_mach`, für ein ideales Gas ohne Reibung, Wärme oder Stöße.

## Ergebnis prüfen

`check_stress`, `check_thermal` und `check_flow` führen die eigenen Spannungs-, Wärmeleitungs- und Strömungslöser von PartCraft auf einem erzeugten Bauteil aus dem Skript aus. Sie lesen die maximale Spannung und Verschiebung, die Temperaturen und den Wärmestrom sowie die Durchlässigkeit eines Kanalnetzes zurück. Sie ändern nichts an den Lösern. Die Spannungs- und Temperaturprüfungen verwenden Voxel. Eine gekrümmte Fläche wird daher zu einer Treppe, und die Spannung an einer scharfen Innenecke oder unter einer Punktlast hängt von der Voxelgröße ab.
