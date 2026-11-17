---
title: Von einem USB-Stick ausführen
summary: Was die Ingenieurwerkzeuge schreiben und wohin, damit CadCraft Studio ohne Installationsprogramm und ohne Administratorrechte von einem USB-Stick oder aus jedem beliebigen Ordner laufen kann: Einstellungen, Generatoren, Zwischenspeicher und Bauteildateien und was auf dem Stick bleibt.
keywords: USB, portabel, ohne Installationsprogramm, Administrator, Admin, Einstellungen, Datenordner, Generatoren, wo Dateien geschrieben werden, offline, Datenschutz, Host-Zugriff
from: 263efc79
---

Die Ingenieurwerkzeuge (Generatoren, die Ingenieursbibliothek, die Prüfungen und die Datendateien) benötigen **keine Administratorrechte** und **kein Installationsprogramm**. Sie schreiben nur das, was hier aufgeführt ist, und sonst nichts.

| Was | Wo es gespeichert wird |
|---|---|
| Ihre Bauteile mit ihren erzeugten Körpern, Datenblättern und Prüfungen | Die Bauteildatei (`.partcraft.json`), dort wo Sie sie speichern. |
| Generatoren, die Sie aus Dateien geöffnet haben | Im eigenen Speicher der App: der lokale Speicher des Browsers auf einer Webseite und der Ordner `data` neben dem Programm in der portablen Studio-Version. Höchstens 20. |
| Einstellungen (von Ihnen gesetzte Voxelgrößen, Solver-Threads, das Layout) | Derselbe Speicher der App. |
| Datenblätter, Felder, Netze | Nur dort, wo Sie sie speichern: Der Download landet, wo Sie es wählen. |

Die Werkzeuge führen **keine eigenen Netzwerkaufrufe** aus: Die mitgelieferten Generatoren sind Dateien im eigenen Ordner der App, die Bibliothek und die Prüfungen laufen auf Ihrem Computer in einem Worker, der das Netzwerk nicht erreichen kann, und die technischen Daten (Eigenschaften von Wasser und Luft, Werkstoffe) befinden sich in der App. Ein Generator, den Sie aus einer Datei öffnen, wird auf Ihrem Computer gelesen und verlässt ihn nicht.

## Die portable Windows-Version und Linux

Die portable Studio-Version für Windows speichert ihre Einstellungen, Zwischenspeicher und Add-ons in einem Ordner `data` neben dem Programm. Das Linux-AppImage behält sie neben sich, wenn eine Datei namens `portable` daneben liegt; ohne diese Datei nutzt es Ihren Basisordner. Es gibt keine portable Mac-Version: Das System verhindert, dass eine heruntergeladene App neben sich schreibt. Die portablen Hinweise der Shell selbst (Hilfe zu „Studio“) listen auf, was das Programm schreibt.

## Host-Zugriff

Hier wird nie nach Host-Zugriff gefragt. Drucker, serielle Maschinen und USB-Geräte sind getrennt: Sie fragen nach, wenn ein Auftrag sie braucht, einmal pro Gerät, und die Generatoren oder die Prüfungen greifen niemals darauf zu.
