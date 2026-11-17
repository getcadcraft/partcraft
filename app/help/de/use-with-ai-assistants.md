---
title: PartCraft mit einem Assistenten verwenden
summary: Lassen Sie Ihren eigenen Assistenten oder ein Skript am geöffneten Bauteil arbeiten: Features, Parameter und Masse lesen, einen Parameter ändern und neu aufbauen, ein Skript ausführen, exportieren und speichern. Ausgeschaltet, bis Sie es einschalten.
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisierung, parameter, masseneigenschaften, stl, step, 3mf, berechtigungen, trennen, aktivität, ordner
from: e66d3470
---

## Was Sie hier lernen

Wie Sie einen Assistenten (oder ein selbst geschriebenes Skript) das geöffnete Bauteil ansehen, seine Parameter ändern, ein Skript ausführen und das Bauteil exportieren lassen, und wie Sie festlegen, was er berühren darf.

PartCraft hat **keine eigene KI** und sendet nichts irgendwohin. Den Assistenten bringen Sie mit: jedes Programm, das das Model Context Protocol (MCP) spricht. PartCraft stellt ihm nur Werkzeuge zur Verfügung, und Sie wählen aus, welche.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zur Registerkarte {{ui:PartCraft}}.
2. Setzen Sie unter {{ui:Assistenten}} ein Häkchen bei **Assistenten und Skripten erlauben, PartCraft zu verwenden**. Bis dahin ist das ausgeschaltet.
3. Legen Sie fest, was er tun darf. **Lesen** ist zu Beginn aktiviert; setzen Sie die anderen Häkchen nur, wenn Sie sie brauchen.
4. Damit er in einen Ordner exportieren und dort speichern kann, wählen Sie unter **Ordner, die er verwenden darf** {{ui:Einen Ordner hinzufügen…}} und wählen den Ordner im Dialogfeld von Studio aus.

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio zeigt die Adresse und das Token, das Sie in den Assistenten einfügen. Ein Browser-Tab kann für einen Assistenten keine Verbindung öffnen.

## Was ein Assistent anfordern kann

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `part_describe`, `features_list` | Lesen | Die Features in Reihenfolge mit dem, was erstellt wurde und was fehlschlug, das Material, das Volumen und die Größe des Volumenkörpers |
| `params_list` | Lesen | Die Parameter und jede Zahl, die eine Gleichung steuern kann, mit ihren Werten |
| `mass_properties` | Lesen | Volumen, Fläche, Schwerpunkt und die Trägheit darum; die Masse, wenn das Bauteil ein Material hat |
| `param_set` | Bearbeiten | Setzt einen Parameter oder die Zahl eines Features und baut neu auf. Ein Schritt, den Sie rückgängig machen können |
| `script_run` | Bearbeiten | Führt ein CraftScript-, Lua- oder Python-Skript so aus, wie der Arbeitsbereich {{ui:Skript}} es tut: abgeschottet, ohne Dateien und ohne Netzwerk. Das Bauteil ändert sich nicht |
| `part_export` | Exportieren | STL, 3MF, STEP oder OpenUSD (.usdz, .usda, .usdc), so wie {{ui:Datei}} › {{ui:Exportieren}} sie schreibt |
| `link_push` | Bearbeiten | Aktualisiert ein Modell, das aus einem anderen Programm verknüpft ist (siehe [.3dm-Modell live halten](topic:live-3dm-link)) |
| `link_status` | Lesen | Meldet, ob ein verknüpftes Modell noch vorhanden ist und wann es zuletzt aktualisiert wurde |
| `part_save` | Speichern | Das eigene {{ui:Speichern}} von PartCraft |
| `illustrate_export` | Exportieren | Eine Anleitung aus dem Arbeitsbereich {{ui:Illustrate}} als PDF oder SVG-Strichzeichnung ihrer Ansichten, als interaktive 3D-Datei oder ihre Anweisungen als PDF oder Webseite, so wie die Menüs {{ui:Exportieren}} und {{ui:Anweisungen}} des Arbeitsbereichs sie schreiben ([Anleitungen](topic:illustrate)) |

:::note
Diese Version verwendet den Netzkernel: Volumen kommen aus den Dreiecken (etwas unter einem echten gekrümmten Volumenkörper), und STEP wird facettiert geschrieben, mit Dreiecken statt exakter Flächen.
:::

## Sie behalten die Kontrolle

- **Jede Änderung ist ein Rückgängig-Schritt**, für den Assistenten gekennzeichnet, zum Beispiel „Assistent: l = 45 gesetzt“. Drücken Sie {{key:Mod+Z}}, um sie zurückzunehmen.
- **Sie sehen, wenn einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist. Klicken Sie darauf, um zu sehen, was er darf, oder um ihn zu **Trennen**.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:PartCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf auf; {{ui:Protokoll speichern}} legt eine Kopie an.
- **Ordner.** Er liest und schreibt Dateien nur in den Ordnern, die Sie hinzugefügt haben; {{ui:Entfernen}} entzieht einen Ordner sofort wieder.

## Ohne PartCraft zu öffnen

Der CadCraft-Dateiserver für Assistenten (`npx @getcadcraft/mcp`) und die Kommandozeile `cadcraft` öffnen `.partcraft.json`-Bauteile mit dem eigenen Code und Netzkernel von PartCraft, ohne Fenster: dieselben Lesewerkzeuge, Parameter setzen, CraftScript-Skripte, Exporte (auch OpenUSD) und Speichern. `cadcraft convert bracket.partcraft.json bracket.stl` baut ein Bauteil auf und schreibt es von der Kommandozeile aus. Anleitungen (`.partcraft-manual.json`) werden dort ebenfalls exportiert: `illustrate_export` oder `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (fügen Sie `--instructions` für die Anweisungen hinzu).

## Wenn etwas nicht funktioniert

- **„Berechtigung zum Bearbeiten erforderlich“:** setzen Sie unter {{ui:Assistenten}} ein Häkchen bei **Bearbeiten** und fragen Sie dann erneut.
- **„von der Gleichung gesteuert“:** diese Zahl folgt einem Parameter; bitten Sie den Assistenten, stattdessen den Parameter zu setzen.
- **Die Änderung war falsch:** drücken Sie {{key:Mod+Z}}.

## Siehe auch

- [Rezepte für Assistenten](common:assistants-recipes): Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
