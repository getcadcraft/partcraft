---
title: Vadiet detaļu ar parametriem
summary: Nosauciet svarīgos izmērus (platums, biezums, skrūves izmērs), savienojiet jebkuru elementa numuru vai skices izmēru ar tiem ar =, un mainiet visu detaļu no vienas tabulas.
keywords: parametri, kur izmantots, izmanto, globālie mainīgie, mainīgie, vienādojumi, dizaina nolūks, vadošie izmēri, saite, izteiksme, formula, nosaukt izmēru, saistītās vērtības
from: 58c646ea
---

Parametrs ir nosaukts skaitlis, piemēram, `width = 120` vai `margin = bolt * 1.5`. Savienojiet dziļumu, urbuma diametru, masīva skaitu vai skices izmēru ar to, un, mainot parametru, mainās visi vienā solī. Tā jūs saglabājat dizaina nolūku detaļā, nevis galvā.

## Parametru pievienošana

1. Labajā panelī noklikšķiniet cilni {{ui:Parametri}}.
2. Zem **Mainīgie** ierakstiet nosaukumu lodziņā "name", piemēram, `width`.
3. Nākamajā lodziņā ierakstiet tā vērtību, piemēram, `120`, un nospiediet {{key:Enter}} (vai noklikšķiniet {{ui:Pievienot}}).

Vērtība var būt skaitlis vai citu parametru izteiksme: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolonna **Vērtība** rāda, ko tas aprēķina. Nosaukums sākas ar burtu vai `_` un satur tikai burtus, ciparus un `_`; funkciju un vienību nosaukumi (`sin`, `mm`, `pi`) tiek noraidīti, tāpat kā cilpa, piemēram, `a = b` ar `b = a`.

## Skaitļa saistīšana ar parametru

1. Noklikšķiniet elementu vēsturē, piemēram, "Extrude1". Tā iestatījumi rādās cilnē {{ui:Rekvizīti}}.
2. Skaitļa lodziņā, piemēram, **Depth (mm)**, ierakstiet `=` un izteiksmi: `=thick` vai `=width / 4`.
3. Nospiediet {{key:Enter}}.

Lodziņā tagad redzams rezultāts, un blakus etiķetei parādās poga **ƒ**. Norādiet uz to, lai redzētu vienādojumu. Skices izmēri darbojas tāpat: gan elementa sarakstā **Skices izmēri**, gan atvērtas skices izmēru lodziņā (divreiz noklikšķiniet izmēru, ierakstiet `=width`, nospiediet {{key:Enter}}).

Skaitļi, ko var saistīt: izvilkuma dziļums, rotācijas leņķis, urbuma diametrs, urbuma un iegrimes dziļums un izmēri, masīva skaits, solis un leņķis, noapaļojuma rādiuss, nošķelšanas attālums, čaulas sienas biezums, katrs skices izmērs un jaunāko elementu izmēri (otrais dziļums, konuss, iegrime, atsauces plaknes attālums, slīpuma leņķis un citi).

## Parametra maiņa

Cilnē {{ui:Parametri}} ierakstiet jaunu vērtību vai izteiksmi kolonnā **Izteiksme** un nospiediet {{key:Enter}}. Viss, kas ar to saistīts, mainās un detaļa pārbūvējas vienā solī: {{key:Mod+Z}} to atsauc.

Lai mainītu skaitli no otra gala, skatiet [Vienādojumi abos virzienos](topic:equations-two-way).

## Parametra izmantojuma skatīšana

Zem katra parametra cilnē {{ui:Parametri}} rinda parāda, ko tas izmanto:

- skaitļi, ko tas vada, piemēram, **Extrude1 depth** vai **Sketch1 D2 (distance)**. Noklikšķiniet vienu, lai atlasītu tā elementu un parādītu rekvizītus;
- skaitļi, ko tas vada **caur** citiem parametriem, piemēram, **Hole1 diameter (through h, d)**, kad `d = h + 2` un `h = w / 2`;
- **parametri**, kuru izteiksmes to izmanto, **konfigurācijas**, kas to iestata, un **skripti**, kas to nolasa (skatiet [Rakstiet un palaidiet skriptus](topic:craftscript)).

"Vēl nav izmantots." nozīmē, ka to nekas neizmanto: to var dzēst bez jautājuma.

## Atsaistīšana, pārdēvēšana, dzēšana

- **Skaitļa atsaistīšana:** noklikšķiniet tā pogu **ƒ** vai {{ui:Atsaistīt}} sarakstā **Vienādojumi**. Tas paturēs pašreizējo vērtību, un neviens parametrs to vairs nemainīs.
- **Parametra pārdēvēšana:** ierakstiet jaunu nosaukumu tā lodziņā **Nosaukums**. Katra izteiksme, kas to izmanto, tiek pārrakstīta.
- **Parametra dzēšana:** noklikšķiniet × savā rindā. Ja to kaut kas izmanto, PartCraft jautā, vai vispirms ierakstīt tā pašreizējo vērtību šajās izteiksmēs.
- **Elementa dzēšana** dzēš tā skaitļu vienādojumus; statusa josla saka, kuri.

:::note
Parametri tiek saglabāti failā `.partcraft.json` (faila versija 3). Detaļa bez parametriem tiek saglabāta tieši kā agrāk.
:::

## Izteiksmes

| Raksta | Nozīmē |
|---|---|
| `120`, `12.5`, `1e3` | skaitlis (milimetri vai grādi leņķim) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | garums citās vienībās, pārvērsts milimetros |
| `30deg`, `0.5rad` | leņķis, pārvērsts grādos |
| `+ - * / %` un `^` | aritmētika; `^` ir pakāpe, `-2^2` ir −4 |
| `sin cos tan asin acos atan atan2` | trigonometrija grādos |
| `sqrt pow exp ln log abs sign` | citas funkcijas |
| `ceil floor int round(x, digits) min max` | noapaļošana un robežas |
| `if(test, a, b)` ar `< <= > >= == !=` | izvēle: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nosaukumi ir reģistrjutīgi: `Width` un `width` ir divi parametri.

Skatiet arī [Konfigurācijas un dizaina tabulas](topic:design-tables) un [Skripti un komandrinda](topic:scripts-and-cli).
