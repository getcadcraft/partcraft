---
title: Magnetstudie einer Skizze
summary: Machen Sie die geschlossenen Profile Ihrer Skizzen zu einem flachen Magnetmodell (Eisen, Magnete, Spulen), sehen Sie das Feld und lesen Sie Kraft und Drehmoment auf einem Körper ab.
keywords: Magnet, magnetisch, Magnetostatik, Feld, Flussdichte, Kraft, Drehmoment, Spule, Joch, Eisen, B-H-Kurve, Permanentmagnet, Aktor, Motor, Magnetspule, Maxwell
from: 604efc3b
---

Verwenden Sie {{ui:Mehr}} in der Symbolleiste Features › {{ui:Magnetstudie von Skizzen…}} an einem Bauteil, das Skizzen hat. Jede geschlossene Form in den Skizzen, die Sie ankreuzen, ist eine Region eines flachen Modells; die Studie berechnet das magnetische Feld B sowie Kraft und Drehmoment auf einem Körper Ihrer Wahl.

## Schritte

1. Zeichnen Sie die Körper als geschlossene Formen in Skizzen: ein Eisenjoch, einen Magneten, eine Spule. Körper, die sich berühren, haben eine gemeinsame Kante, legen Sie sie daher in verschiedene Skizzen. Körper, die getrennt stehen oder ineinander liegen (ein Fenster in einem Joch), können in einer Skizze liegen. Halten Sie die Skizzen auf derselben Ebene.
2. Öffnen Sie die Studie und kreuzen Sie die Skizzen an, die Sie verwenden wollen. Jedes geschlossene Profil erhält eine nummerierte Zeile. Benennen Sie es: {{ui:Air}}, {{ui:Iron}} (eine Permeabilität oder eine B–H-Kurve als Paare aus B in Tesla und H in A/m), ein {{ui:Permanent magnet}} (Br in Tesla, seine Richtung als Winkel zur x-Achse der Skizze und seine Rückstellpermeabilität) oder eine {{ui:Coil}} (der Gesamtstrom durch ihr Profil, Windungen mal Ampere; das Vorzeichen zeigt die Flussrichtung).
3. Setzen Sie den Haken bei {{ui:Force and torque on this body}} bei den Körpern, für die Sie beides wollen. Geben Sie die Tiefe des Bauteils senkrecht zur Skizze an.
4. Wählen Sie das Netz und die Luft um das Modell, dann {{ui:Run}}.

## Was Sie sehen sollten

- Die Flussdichte |B| über dem Modell, von dunkelblau (niedrig) bis rot (hoch), mit nummerierten Profilen.
- Das stärkste Feld und wo es liegt, die Anzahl der Dreiecke und für jeden angekreuzten Körper die Kraft in x und y sowie das Drehmoment um seine Mitte, für die angegebene Tiefe.
- {{ui:Save results (CSV)}} schreibt die Zahlen.

## Gut zu wissen

- Es ist ein flaches, stationäres Modell: Alles gilt pro Meter Tiefe, ohne Wirbelströme und ohne Hysterese, und ein Magnet ist eine gerade Rückstelllinie (er lässt sich nicht entmagnetisieren).
- Das Modell liegt in einem Luftkasten, dessen Kante eine Wand ist. Vergleichen Sie zwei Größen des Luftkastens sowie die Netze Normal und Fein: Eine Kraft, die aus dem Feld um einen Körper herum berechnet wird, ist nur so gut wie das Netz dort.
- Eisen mit nur einer Permeabilität sättigt nie. Wenn das Feld 2 T überschreitet, setzt die Studie ein ⚠ in die Problemliste: Geben Sie dem Eisen eine B–H-Kurve. Die Zahlen in einer neuen Zeile sind Beispiele (Eisen μr 2000, ein Magnet von 1.2 T), keine Datenblattwerte eines Materials.
- Ein Körper braucht Platz um sich, um die Kraft aufzunehmen: Steht ein anderer Körper zu nah, meldet die Studie das.
- Ein Hilfsmittel für die Konstruktion, keine technische Freigabe.

## Weiter

- [Magnetfelder in 2-D (Anleitung)](topic:magnetic-fields-2d)
