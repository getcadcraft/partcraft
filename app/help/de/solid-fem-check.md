---
title: Solid FEM: Spannungsprüfung eines Bauteils
summary: Das Add-on Solid FEM einschalten, ein Bauteil vernetzen, feste Flächen und eine Last in der 3D-Ansicht wählen, lösen und Verschiebung und Von-Mises-Spannung am Modell ablesen.
keywords: Solid FEM, Finite Elemente, FEM, Spannung, Von Mises, Verschiebung, feste Fläche, Last, Druck, Schwerkraft, Eigenfrequenz, Eigenform, Netz, Add-on
from: 8b7e6ba2
---

## Was Sie tun

Prüfen Sie ein einzelnes Volumenbauteil unter einer Last: wo es sich verschiebt und wo die Spannung am höchsten ist. Die Untersuchung ist linear und elastisch, sie ist also eine Prüfhilfe; Ihr Ingenieur prüft die Ergebnisse.

## Schritte

1. Wählen Sie {{ui:Einstellungen}} › {{ui:Add-ons}} und schalten Sie {{ui:Solid FEM}} ein (bis Sie es tun, ist es aus). Öffnen Sie die Registerkarte {{ui:Solid FEM}} im rechten Bereich.
2. Wählen Sie unter {{ui:Werkstoff}} einen aus, oder {{ui:Eigener}} und geben Sie Querkontraktionszahl, Dichte und Streckgrenze ein.
3. Drücken Sie {{ui:Feste Flächen hinzufügen}}, klicken Sie die Flächen an, die in der 3D-Ansicht gehalten werden, und drücken Sie dann {{ui:Wählen beenden}}.
4. Fügen Sie eine Last hinzu mit {{ui:Kraft hinzufügen}}, {{ui:Druck hinzufügen}} oder {{ui:Schwerkraft hinzufügen}} und wählen Sie deren Flächen auf dieselbe Weise.
5. Drücken Sie {{ui:Bauteil vernetzen}}, dann {{ui:Lösen}}. Wählen Sie zuerst unter {{ui:Studie}} {{ui:Eigenfrequenzen}}, wenn Sie Frequenzen möchten.
6. Lesen Sie {{ui:Ergebnisse}} und {{ui:Warnungen}}, drücken Sie dann {{ui:Am Modell anzeigen}}, um die Von-Mises-Spannung, die Verschiebung oder eine Eigenform zu zeichnen; {{ui:Darstellung entfernen}} nimmt sie wieder weg.

## Hinweise

- Die Seite löst bis zu einer festen Anzahl von Elementen; die Statuszeile sagt, wenn Ihre Elementgröße zu fein ist.
- Die Spannung an festen Flächen, Lastpunkten und scharfen Ecken steigt beim Verfeinern des Netzes. Verfeinern und vergleichen Sie, bevor Sie sich auf einen Spitzenwert verlassen.
- Jede Änderung ist ein Rückgängig-Schritt, und die Einstellungen werden in der Bauteildatei gespeichert.
- Für Fließ- und Kontaktuntersuchungen siehe [Spannung und Durchbiegung prüfen](topic:simulation).
