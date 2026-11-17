---
title: Skriv och kör skript (skriptarbetsytan)
summary: Skriptarbetsytan steg för steg: skriv ett CraftScript- eller Lua-skript, kör det med F5, läs konsolen, behåll resultat i variablerna för nästa skript, visa nät, fält och grafer, stoppa en körning och spara skript med delen.
keywords: skript, skriptning, skript medan du modellerar, lyft ut, andra skärmen, andra bildskärm, param, params, parametrar i skript, CraftScript, Lua, kod, program, redigerare, konsol, REPL, kommandorad, kör, F5, kör markering, stopp, variabler, arbetsyta, graf, fält, nät, teckenförklaring, underdisplay, analys, automation, matris, numerisk
from: d0003e89
---

**Förhandsvisning.** Skriptning är nytt i PartCraft 0.3 och är en förhandsvisning: språket, biblioteket och sättet skript sparas på kan fortfarande ändras, och skript som skrivs nu kan behöva små ändringar senare. Berätta för oss vad som går sönder.

Skriptarbetsytan kör dina egna beräkningar bredvid delen: små summor, hela analyser eller skripten i [analysbiblioteket](topic:craftscript-library). Skript skrivs i **CraftScript** (ett matrisspråk ganska likt MATLAB, se [CraftScript-språket](topic:craftscript-language)), i **Lua** (se [Skript i Lua](topic:craftscript-lua)) eller i **Python** (se [Skript i Python](topic:craftscript-python)).

Välj **Skript** i rutan **Arbetsyta** till vänster i verktygsfältet. Delen ändras inte. Den högra panelen blir skriptpanelen (bredare än vanligt; dra i kanten för att ändra den, eller flytta den till en andra skärm med menyn {{ui:⋯}}, se [Ordna panelerna](common:arrange-panels)).

## Skripta medan du modellerar

Du behöver inte lämna arbetsytan Konstruktion för att skriva ett skript. I Konstruktion innehåller den högra panelens flik {{ui:Skript}} samma redigerare, konsol, variabler och bibliotek, med samma skript. Funktionsträdet och vyn fungerar som vanligt: klicka på en funktion för att markera den, dubbelklicka på en skiss för att redigera den, vrid vyn, gå sedan tillbaka till fliken {{ui:Skript}} och tryck på {{key:F5}}.

Vad ett skript **visar** (nät, fält, grafer, tabeller) ritas inte över din modell i Konstruktion: konsolen säger det, och skriptarbetsytan har allt när du byter dit.

{{ui:Lyft ut}}, bredvid {{ui:Kör}}, flyttar hela panelen till ett eget fönster, till exempel på en andra skärm, så att redigeraren och hela vyn ligger sida vid sida. {{ui:Lägg tillbaka}} dockar den igen. Se [Ordna panelerna](common:arrange-panels).

## Kör ditt första skript

1. Skriv i redigeraren, till exempel:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Tryck på {{key:F5}} (eller {{ui:Kör}}). Konsolen under redigeraren visar vad skriptet skrev ut, och "Klart på … s". Grafen visas i **underpanelerna** längs nedre delen av 3D-vyn.
3. En rad utan semikolon skriver ut sitt värde, som i MATLAB: `a = 3` skriver ut `a = 3`; `a = 3;` skriver inget.
4. För att köra bara en del av ett skript markerar du raderna och trycker på {{key:Mod+Enter}} ({{ui:Markering}}). Utan något markerat körs raden där markören står.
5. Raden längst ned i konsolen (efter `>>`) kör en sats när du trycker på {{key:Enter}}. {{key:Up}} och {{key:Down}} hämtar tidigare rader.

## Sök, fäll ihop och komplettera

- **Sök och ersätt.** Tryck på {{key:Mod+F}} (eller {{key:Mod+H}} för att ersätta också). En rad öppnas ovanför koden: skriv vad du söker; träffarna lyser upp och räknaren visar var du är. Knapparna bredvid rutan gör att skiftläge matchar (**Aa**), söker bara hela ord (**W**) och använder reguljära uttryck (**.\***; i ersättningen återställer `$1` det den första gruppen matchade). {{ui:Ersätt}} ersätter den aktuella träffen, och {{ui:Alla}} ersätter varje träff som ett steg i {{key:Mod+Z}}.
- **Hopfällning.** Klicka på ▾ bredvid ett radnummer, eller tryck på {{key:Mod+Shift+[}} med markören på en rad med `function`, `if`, `for`, `while`, `switch` eller `try` (Lua: `function`, `do`, `if`, `repeat`), för att vika undan dess inre rader; raden anger hur många. ▸ eller {{key:Mod+Shift+]}} öppnar den igen. Hopfällning döljer bara rader: Kör, Spara, kopiering och radnumren räknar fortfarande alla rader, och om du skriver på en hopfälld rad öppnas den först.
- **Komplettering.** Skriv två bokstäver av ett namn, eller tryck på {{key:Mod+Space}}: en lista visar variablerna du har, språkets funktioner (med deras argument), nyckelord och namn som redan finns i skriptet. Välj med piltangenterna och tryck på {{key:Enter}} eller {{key:Tab}}.

## När något går fel

- Ett fel anger problemet och dess rad: raden markeras röd i redigeraren, och **Rad n** i konsolen tar dig dit.
- En loop som aldrig tar slut: tryck på {{ui:Stopp}} (verktygsfältet eller panelen). Skriptet stannar direkt; variablerna behåller de värden de hade före den körningen.
- Varje körning har också en stegbudget (2 miljarder steg som standard; ändra den under **Körinställningar** i panelen). En körning som passerar den stoppas med ett meddelande.

## Variabler följer med från skript till skript

Varje variabel på översta nivån som ett skript skapar hamnar i fliken **Variabler** (namn, typ, storlek, minsta och största värde) och stannar där för nästa skript, på valfritt språk. Så nätar ett skript, nästa löser och ett tredje plottar.

- Klicka på en variabel för att visa den: nät, fält och modeller i 3D-vyn, arrayer som en tabell (plus en linjegraf för en vektor eller en färgkarta för en matris) i underpanelerna.
- {{ui:Spara som JSON}}, {{ui:Spara som CSV}} (en tabell med tal) och {{ui:Spara som HDF5}} laddar ner den; {{ui:Ta bort}} tar bort den; {{ui:Rensa allt}} tömmer arbetsytan.
- Bocka för **Spara variablerna med delen** för att behålla dem i delfilen (upp till 32 MB; större stannar för det här besöket). När du öppnar en sådan del erbjuder panelen att läsa in dem.

## Nät, fält och grafer

- `show(m)` ritar ett nät; `show(f)` färglägger ett fält på sitt nät med en teckenförklaring. Listan **Visade** längst upp till vänster i vyn döljer ({{ui:eye}}) eller tar bort varje post, och döljer eller visar själva delen. Under teckenförklaringen skriver du ett intervall (**Från**, **till**) eller trycker på {{ui:Auto}}; ett vektor- eller spänningsfält erbjuder också vilken komponent som ska visas.
- `show(f, 'deform', u, 'scale', 50)` ritar nätet förskjutet av ett förskjutningsfält `u`, förstorat 50 gånger (utan `scale` ungefär 8 % av modellens storlek).
- Klicka på ett visat nät: närmaste nod, elementet och fältvärdena där visas i underpanelerna (**Vald**).
- `plot`, `imagesc` och `table` lägger en linjegraf, en färgkarta över en 2D-array eller en tabell i underpanelerna. En graf med samma `'id'` (eller titel) som en tidigare ersätter den, så en loop kan uppdatera en konvergensgraf; `'append', true` lägger till en kurva i den. {{ui:Rensa}} tömmer underpanelerna; pilen fäller ihop dem.
- Med två eller fler grafer visar {{ui:Sida vid sida}} alla på en gång (de sex senaste); klick på en tabells eller bilds flik visar den ensam igen.
- Varje graf har {{ui:PNG}}, {{ui:SVG}} och {{ui:CSV}} under sig. PNG och SVG skriver ut den på vitt i pappersfärgerna, oavsett tema (PNG 1600 × 1000 bildpunkter; SVG skalar utan att bli suddig). CSV innehåller dess tal med alla siffror: en kolumn med x och en kolumn per kurva när kurvorna delar x, annars en rad per punkt med kurvans namn.
- {{key:F}} eller {{ui:Anpassa}} anpassar vyn till det som visas.

## Filer

- {{ui:Öppna}} i gruppen Skript (eller släpp filer på vyn eller panelen): `.craft`-, `.lua`- och `.py`-filer öppnas som nya skript (de körs inte); datafiler (STL, OBJ, CSV, JSON, NPY, HDF5) läses in i variablerna under sitt filnamn.
- {{ui:Spara}} i gruppen Skript laddar ner det aktuella skriptet som en fil.
- {{ui:Ny}} i gruppen Skript (eller {{ui:+}} bredvid flikarna) startar ett annat skript. Dubbelklicka på en flik för att byta namn; dess {{ui:×}} tar bort den (du kan ångra det).

## Läs delens parametrar

Ett skript läser delens parametrar (se [Styr en del med parametrar](topic:parameters)) med namn:

```
w = param('width');     % en parameters värde, i mm (eller grader, eller ett vanligt tal)
p = params();           % alla, som en struktur: p.width, p.height
```

I Lua och Python heter de `cs.param('width')` och `cs.params()`. Skript läser bara parametrar: ändra dem på fliken {{ui:Parametrar}}. Under skriptets flik listar en rad de parametrar den läser med `param('…')` och markerar de som delen inte har; fliken {{ui:Parametrar}} listar skriptet under var och en. Ett namn som byggs medan skriptet körs, till exempel `param(name)`, listas inte.

## Skript sparas i delen

Varje skript i flikarna sparas i delen, så {{ui:Spara}} i gruppen Fil sparar dem tillsammans med den, och ändringar i dem kan ångras. Att öppna en del **kör aldrig dess skript**: konsolen säger hur många den innehåller, och de körs bara när du trycker på Kör. En del från någon annan kan innehålla vilket skript som helst, så läs det innan du kör det. Skript körs i bakgrunden på den här datorn utan nätverksåtkomst och kan inte röra sidan.

## Relaterat

- [CraftScript-språket](topic:craftscript-language)
- [Skript i Lua](topic:craftscript-lua)
- [Skript i Python](topic:craftscript-python)
- [Analysbiblioteket](topic:craftscript-library)
- [Skriv en egen analys](topic:craftscript-own-analysis)
