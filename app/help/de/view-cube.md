---
title: Der ViewCube
summary: Klicken Sie auf eine Fläche, Kante oder Ecke des Würfels in der Ecke der Ansicht, um von dort aus zu schauen. Ziehen Sie ihn, um die Ansicht zu drehen, drehen Sie den Kompassring, wechseln Sie schrittweise um eine frontale Ansicht und kehren Sie in die Startansicht zurück.
keywords: viewcube, würfel, kompass, norden, startansicht, standardansichten, oben, vorne, rechts, iso, ecke, kante, orbit, ansicht drehen, achsensymbol, eckanzeige, navigation
from: afc33dc7
---

Der ViewCube sitzt oben rechts in der 3D-Ansicht (nicht beim Skizzieren oder auf dem Zeichnungsblatt). Er dreht sich mit der Ansicht, sodass er immer zeigt, in welche Richtung Sie schauen: {{ui:Oben}} ist die +Y-Seite des Bauteils (die Ebene Oben), {{ui:Vorne}} die +Z-Seite (die Ebene Vorne zeigt zu Ihnen, wenn Sie darauf schauen), {{ui:Rechts}} die +X-Seite. Er bleibt durchsichtig, bis Sie mit dem Zeiger darauf zeigen.

## Von einer Seite, einer Kante oder einer Ecke aus schauen

1. Zeigen Sie auf den Würfel. Der Bereich des Würfels unter dem Zeiger leuchtet auf: die Mitte einer Fläche, eine Kante (sie leuchtet auf beiden Flächen, die sie teilen) oder eine Ecke (auf allen drei Flächen).
2. Klicken Sie darauf. Die Ansicht dreht sich, um von dort aus zu schauen, und behält dieselbe Mitte und denselben Zoom bei.

Es gibt 26 Stellen zum Anklicken: 6 Flächen ({{ui:Oben}}, {{ui:Unten}}, {{ui:Vorne}}, {{ui:Zurück}}, {{ui:Links}}, {{ui:Rechts}}), 12 Kanten und 8 Ecken. Eine Ecke ergibt die klassische Dreiviertelansicht; eine Kante schaut halbwegs zwischen zwei Flächen.

Ein Klick auf {{ui:Vorne}}, {{ui:Oben}} oder {{ui:Rechts}} ergibt dieselben Ansichten wie {{ui:Ansichten}} in der Symbolleiste, ohne den Zoom auf {{ui:Einpassen}}.

## Durch Ziehen des Würfels drehen

Ziehen Sie den Würfel, um die Ansicht zu drehen, genau wie beim Kreisen in der Ansicht selbst. Ein Ziehen wird nie als Klick gewertet, daher können Sie den Würfel überall anfassen.

## Der Kompassring

Der Ring unter dem Würfel trägt N, O, S und W.

- **Ziehen Sie den Ring**, um das Modell um die vertikale Achse zu drehen, als stünde es auf einem Drehteller. Der Ring folgt dem Zeiger.
- **Klicken Sie auf einen Buchstaben**, um von dieser Seite aus zu schauen, und dabei den Winkel beizubehalten, unter dem Sie nach unten sehen. In einer Ansicht von genau oben rückt der angeklickte Buchstabe an den unteren Bildrand.

## Frontalansichten: Pfeile

Wenn Sie direkt auf eine Fläche schauen, erscheinen kleine Pfeile um den Würfel:

- Die vier **Dreiecke** bringen die Fläche auf dieser Seite nach vorn: Das Dreieck über dem Würfel zeigt die Fläche, die oben war, und so weiter.
- Die zwei **gebogenen Pfeile** oben rechts drehen das Bild um eine Vierteldrehung im oder gegen den Uhrzeigersinn, ohne die Fläche zu ändern, auf die Sie schauen. Nutzen Sie sie, um einen Plan so zu drehen, dass eine lange Wand quer über den Bildschirm verläuft.

## Startansicht

Die Haus-Schaltfläche oben links am Würfel kehrt zur Dreiviertelansicht zurück und passt das Bauteil ein. {{key:Home}} tut dasselbe, solange der Würfel den Tastaturfokus hat.

## Mit der Tastatur

Mit {{key:Tab}} zum Würfel wechseln, dann:

| Taste | Wirkung |
|---|---|
| {{key:left}} / {{key:right}} | eine Seite, Kante oder Ecke um den Würfel wählen, in Achtelschritten (Bildschirmleser sagen, welche) |
| {{key:up}} / {{key:down}} | eine höhere oder tiefere wählen, bis {{ui:Oben}} oder bis {{ui:Unten}} |
| {{key:Enter}} oder {{key:Space}} | von der gewählten aus schauen |
| {{key:Shift+left}} / {{key:Shift+right}} | die Ansicht um eine Vierteldrehung um die vertikale Achse drehen |
| {{key:Home}} | die Startansicht |
| {{key:Esc}} | den Würfel verlassen |

Tasten, die auf dem Würfel gedrückt werden, bleiben beim Würfel: Sie starten keine PartCraft-Werkzeuge.

## Achsensymbol oder nichts stattdessen

Öffnen Sie {{ui:Einstellungen}} ({{key:Mod+,}}), die Registerkarte {{ui:PartCraft}}, und stellen Sie **Eckanzeige** auf {{ui:ViewCube}} (der Standard), {{ui:Achsensymbol}} (ein kleines X-, Y-, Z-Zeichen unten links: X rot, Y grün, Z blau) oder {{ui:Kein}}. Dieser Browser merkt sich die Auswahl. Siehe [PartCraft-Einstellungen](topic:settings#corner-indicator).

:::note
Der Würfel zeigt das Bauteil so, wie PartCraft es aufbaut: Y nach oben, daher ist {{ui:Oben}} des Würfels die Ebene Oben. Die Kompassbuchstaben dienen nur zum Drehen; ein Bauteil hat keinen Norden.
:::
