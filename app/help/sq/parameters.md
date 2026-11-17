---
title: Drejto një pjesë me parametra
summary: Emëro madhësitë që kanë rëndësi (gjerësia, trashësia, madhësia e bulonit), lidh çdo numër veçorie ose dimension skice me to me =, dhe ndrysho gjithë pjesën nga një tabelë.
keywords: parametra, ku përdoret, përdoret nga, variabla globale, variabla, ekuacione, qëllimi i projektimit, dimensione drejtuese, lidhje, shprehje, formulë, emëro një dimension, vlera të lidhura
from: 58c646ea
---

Një parametër është një numër i emëruar, si `width = 120` ose `margin = bolt * 1.5`. Lidh një thellësi, një diametër vrime, një numër modeli ose një dimension skice me të, dhe ndryshimi i parametrit ndryshon të gjitha në një hap. Kështu e mban qëllimin e projektimit brenda pjesës, jo në kokën tënde.

## Shto parametra

1. Në panelin e djathtë, kliko skedën {{ui:Parametrat}}.
2. Nën **Variablat**, shkruaj një emër te kutia "emri", për shembull `width`.
3. Shkruaj vlerën e tij te kutia pasuese, për shembull `120`, dhe shtyp {{key:Enter}} (ose kliko {{ui:Shto}}).

Një vlerë mund të jetë një numër ose një shprehje e parametrave të tjerë: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolona **Vlera** tregon çfarë llogaritet. Një emër fillon me një shkronjë ose `_` dhe ka vetëm shkronja, shifra dhe `_`; emrat e funksioneve dhe njësive (`sin`, `mm`, `pi`) refuzohen, dhe po ashtu një cikël si `a = b` me `b = a`.

## Lidh një numër me një parametër

1. Kliko një veçori në historik, për shembull "Extrude1". Cilësimet e saj shfaqen në skedën {{ui:Vetitë}}.
2. Te një kuti numri, si **Thellësia (mm)**, shkruaj `=` dhe një shprehje: `=thick` ose `=width / 4`.
3. Shtyp {{key:Enter}}.

Kutia tani tregon rezultatin, dhe një buton **ƒ** shfaqet pranë etiketës së saj. Qëndro mbi të për ta parë ekuacionin. Dimensionet e skicës funksionojnë në të njëjtën mënyrë, si në listën **Dimensionet e skicës** të një veçorie ashtu edhe në kutinë e dimensionit të një skice të hapur (kliko dy herë mbi një dimension, shkruaj `=width`, shtyp {{key:Enter}}).

Numrat që mund t'i lidhësh: thellësia e nxjerrjes, këndi i rrotullimit, diametri i vrimës, thellësia dhe madhësitë e kundërvrimës, numri i modelit, hapësira dhe këndi i tij, rrezja e rrumbullakimit, distanca e qoshimit, trashësia e murit në zbrazje, çdo dimension skice, dhe madhësitë e veçorive më të reja (distanca e dytë, konusi, kundërshpimi, distanca e planit referimi, këndi i draftit dhe të tjera).

## Ndrysho një parametër

Te skeda {{ui:Parametrat}}, shkruaj një vlerë ose shprehje të re te kolona **Shprehja** dhe shtyp {{key:Enter}}. Çdo gjë e lidhur me të ndryshon dhe pjesa rindërtohet, si një hap i vetëm: {{key:Mod+Z}} e zhbën.

Për të ndryshuar një numër nga ana tjetër, shih [Ekuacionet në të dy drejtimet](topic:equations-two-way).

## Shiko ku përdoret një parametër

Nën çdo parametër në skedën {{ui:Parametrat}}, një rresht thotë çfarë e përdor:

- numrat që ai drejton, si **Extrude1 depth** ose **Sketch1 D2 (distance)**. Kliko një të tillë për të zgjedhur veçorinë dhe për të shfaqur vetitë e saj;
- numrat që ai drejton **përmes** parametrave të tjerë, si **Hole1 diameter (through h, d)** kur `d = h + 2` dhe `h = w / 2`;
- **parametrat** shprehjet e të cilëve e përdorin, **konfigurimet** që e vendosin, dhe **skriptet** që e lexojnë (shih [Shkruaj dhe ekzekuto skriptet](topic:craftscript)).

"Nuk përdoret ende." do të thotë se asgjë nuk e përdor: mund ta fshish pa pyetur.

## Shkëput, riemëro, fshi

- **Shkëput një numër:** kliko butonin e tij **ƒ**, ose {{ui:Shkëput}} në listën **Ekuacionet**. Ai mban vlerën e tanishme dhe asnjë parametër nuk e ndryshon më.
- **Riemëro një parametër:** shkruaj një emër të ri te kutia e tij **Emri**. Çdo shprehje që e përdor rishkruhet.
- **Fshi një parametër:** kliko × në rreshtin e tij. Nëse diçka e përdor, PartCraft pyet nëse të shkruajë së pari vlerën e tanishme te ato shprehje.
- **Fshirja e një veçorie** heq ekuacionet e numrave të saj; shiriti i statusit thotë cilët.

:::note
Parametrat ruhen në skedarin `.partcraft.json` (si version skedari 3). Një pjesë pa parametra ruhet saktësisht si më parë.
:::

## Shprehjet

| Shkruaj | Do të thotë |
|---|---|
| `120`, `12.5`, `1e3` | një numër (milimetra, ose gradë për një kënd) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | një gjatësi në njësi të tjera, e kthyer në milimetra |
| `30deg`, `0.5rad` | një kënd, i kthyer në gradë |
| `+ - * / %` dhe `^` | aritmetikë; `^` është fuqi, `-2^2` është −4 |
| `sin cos tan asin acos atan atan2` | trigonometri në gradë |
| `sqrt pow exp ln log abs sign` | funksione të tjera |
| `ceil floor int round(x, digits) min max` | rrumbullakim dhe kufij |
| `if(test, a, b)` me `< <= > >= == !=` | një zgjedhje: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Emrat dallojnë shkronjat e mëdha nga të vogla: `Width` dhe `width` janë dy parametra.

Shih gjithashtu [Konfigurimet dhe tabelat e projektimit](topic:design-tables) dhe [Skriptet dhe linja e komandës](topic:scripts-and-cli).
