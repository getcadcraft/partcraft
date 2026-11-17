---
title: Shkruani dhe ekzekutoni skriptet (Hapësira e skriptit)
summary: Hapësira e skriptit hap pas hapi: shkruani një skript CraftScript ose Lua, ekzekutojeni me F5, lexoni konsolën, mbani rezultatet në variabla për skriptin tjetër, shfaqni rrjetat, fushat dhe grafikët, ndaloni një ekzekutim, dhe ruani skriptet me pjesën.
keywords: skript, skriptim, skriptim gjatë modelimit, nxirr jashtë, ekran i dytë, monitor i dytë, param, params, parametra në skripte, CraftScript, Lua, kod, program, redaktues, konsolë, REPL, vijë komandash, ekzekuto, F5, ekzekuto zgjedhjen, ndalo, variabla, hapësirë pune, grafik, fushë, rrjetë, legjendë, nën-panel, analizë, automatizim, matricë, numerik
from: d0003e89
---

**Paraprake.** Skriptimi është i ri në PartCraft 0.3 dhe është paraprak: gjuha, biblioteka dhe mënyra si ruhen skriptet mund të ndryshojnë ende, dhe skriptet e shkruara tani mund të kenë nevojë për ndryshime të vogla më vonë. Na tregoni çfarë prishet.

Hapësira e skriptit ekzekuton llogaritjet tuaja pranë pjesës: shuma të vogla, analiza të plota, ose skriptet e [bibliotekës së analizës](topic:craftscript-library). Skriptet shkruhen në **CraftScript** (një gjuhë matricash shumë e ngjashme me MATLAB, shih [Gjuha CraftScript](topic:craftscript-language)) ose në **Lua** (shih [Skriptet në Lua](topic:craftscript-lua)) ose në **Python** (shih [Skriptet në Python](topic:craftscript-python)).

Zgjidhni **Skript** te kutia **Hapësira e punës** në të majtë të shiritit të veglave. Pjesa nuk ndryshohet. Paneli i djathtë bëhet paneli i skriptit (më i gjerë se zakonisht; tërhiqeni anën e tij për ta ndryshuar, ose zhvendoseni në një ekran të dytë me menunë {{ui:⋯}}, shih [Rregulloni panelet](common:arrange-panels)).

## Skriptoni ndërsa modelooni

Nuk keni nevojë të dilni nga hapësira Dizajn për të shkruar një skript. Në Dizajn, skeda {{ui:Skript}} e panelit të djathtë mban të njëjtin redaktues, konsolë, variabla dhe bibliotekë, me të njëjtët skripte. Pema e veçorive dhe pamja vazhdojnë të punojnë: klikoni një veçori për ta zgjedhur, klikoni dy herë një skicë për ta ndryshuar, rrotulloni pamjen, pastaj kthehuni te skeda {{ui:Skript}} dhe shtypni {{key:F5}}.

Çfarë **shfaq** një skript (rrjeta, fusha, grafikë, tabela) nuk vizatohet mbi modelin tuaj në Dizajn: konsola e thotë këtë, dhe Hapësira e skriptit i ka të gjitha kur kaloni te ajo.

{{ui:Nxirr jashtë}}, pranë {{ui:Ekzeko}}, e zhvendos të gjithë panelin në një dritare të vetën, për shembull në një ekran të dytë, që redaktuesi dhe pamja e plotë të jenë njëra pranë tjetrës. {{ui:Kthe}} e fut sërish. Shih [Rregulloni panelet](common:arrange-panels).

## Ekzekutoni skriptin tuaj të parë

1. Shkruani në redaktues, për shembull:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Shtypni {{key:F5}} (ose {{ui:Ekzeko}}). Konsola nën redaktues tregon çfarë shtypi skripti, dhe "U krye në … s". Grafiku shfaqet te **nën-panelet** përgjatë fundit të pamjes 3D.
3. Një rresht pa pikëpresje shfaq vlerën e vet, si në MATLAB: `a = 3` shfaq `a = 3`; `a = 3;` nuk shfaq asgjë.
4. Për të ekzekutuar vetëm një pjesë të skriptit, zgjidhni rreshtat dhe shtypni {{key:Mod+Enter}} ({{ui:Përzgjedhja}}). Pa asgjë të zgjedhur, ekzekutohet rreshti ku është kursori.
5. Rreshti në fund të konsolës (pas `>>`) ekzekuton një deklaratë sapo shtypni {{key:Enter}}. {{key:Up}} dhe {{key:Down}} sjellin përsëri rreshtat e mëparshëm.

## Gjeni, palosni dhe plotësoni

- **Gjej dhe zëvendëso.** Shtypni {{key:Mod+F}} (ose {{key:Mod+H}} për të zëvendësuar gjithashtu). Hapet një shirit mbi kod: shkruani çfarë të gjeni; përputhjet ndriçojnë dhe numërimi tregon ku jeni. Butonat pranë kutisë përputhin shkronjat e madhe me të voglat (**Aa**), gjejnë vetëm fjalë të plota (**W**) dhe përdorin një shprehje të rregullt (**.\***; në zëvendësim, `$1` kthen atë që grupi i parë përputhi). {{ui:Zëvendëso}} zëvendëson përputhjen aktuale, {{ui:Të gjitha}} zëvendëson çdo përputhje si një hap të vetëm të {{key:Mod+Z}}.
- **Palosja.** Klikoni ▾ pranë një numri rreshti, ose shtypni {{key:Mod+Shift+[}} me kursorin te një rresht `function`, `if`, `for`, `while`, `switch` ose `try` (Lua: `function`, `do`, `if`, `repeat`), për ta palosur rreshtat e tij të brendshëm; rreshti thotë sa janë. ▸ ose {{key:Mod+Shift+]}} e hap përsëri. Palosja vetëm fsheh rreshta: Ekzekutimi, Ruajtja, kopjimi dhe numrat e rreshtave ende i numërojnë të gjithë rreshtat, dhe shkrimi në një rresht të palosur e hap së pari.
- **Plotësimet.** Shkruani dy shkronja të një emri, ose shtypni {{key:Mod+Space}}: shfaqet një listë me variablat që keni, funksionet e gjuhës (me argumentet e tyre), fjalët kyçe dhe emrat që janë tashmë në skript. Zgjidhni me shigjetat dhe shtypni {{key:Enter}} ose {{key:Tab}}.

## Kur diçka shkon keq

- Një gabim emëron problemin dhe rreshtin e tij: rreshti shënohet me të kuqe në redaktues, dhe **Rreshti n** në konsolë ju çon atje.
- Një lak që nuk mbaron kurrë: shtypni {{ui:Ndalo}} (shiriti i veglave ose paneli). Skripti ndalet menjëherë; variablat mbajnë vlerat që kishin përpara atij ekzekutimi.
- Çdo ekzekutim ka edhe një buxhet hapash (2 miliardë hapa si parazgjedhje; ndryshojeni te **Opsionet e ekzekutimit** në panel). Një ekzekutim që e kalon ndalet me një mesazh.

## Variablat kalojnë nga skripti në skript

Çdo variabël e nivelit të sipërm që bën një skript arrin te skeda **Variablat** (emri, lloji, madhësia, vlera më e vogël dhe më e madhe) dhe qëndron aty për skriptin tjetër, në çdo gjuhë. Kështu një skript bën rrjetëzimin, tjetri zgjidh, e i treti vizaton.

- Klikoni një variabël për ta shfaqur: rrjetat, fushat dhe modelet te pamja 3D, vargjet si tabelë (plus një grafik vijë për një vektor ose një hartë ngjyrash për një matricë) te nën-panelet.
- {{ui:Ruaj si JSON}}, {{ui:Ruaj si CSV}} (një tabelë numrash) dhe {{ui:Ruaj si HDF5}} e shkarkojnë; {{ui:Fshi}} e heq; {{ui:Pastro të gjitha}} e zbraz hapësirën e punës.
- Vendosni shenjën **Ruaj variablat me pjesën** për t'i mbajtur në skedarin e pjesës (deri në 32 MB; ato më të mëdha qëndrojnë vetëm për këtë vizitë). Kur hapni një pjesë të tillë, paneli ofron t'i ngarkojë.

## Rrjetat, fushat dhe grafikët

- `show(m)` vizaton një rrjetë; `show(f)` ngjyros një fushë mbi rrjetën e saj me legjendë. Lista **Shfaqur** lart majtas të pamjes fsheh ({{ui:syri}}) ose heq çdo artikull, dhe fsheh ose shfaq vetë pjesën. Nën legjendë, shkruani një interval (**Nga**, **deri**) ose shtypni {{ui:Auto}}; një fushë vektoriale ose stresi ofron edhe zgjedhjen e komponentit për t'u shfaqur.
- `show(f, 'deform', u, 'scale', 50)` vizaton rrjetën e zhvendosur nga një fushë zhvendosjeje `u`, e zmadhuar 50 herë (pa `scale`, rreth 8 % e madhësisë së modelit).
- Klikoni një rrjetë të shfaqur: nyja më e afërt, elementi dhe vlerat e fushës atje shfaqen te nën-panelet (**Zgjedhur**).
- `plot`, `imagesc` dhe `table` vendosin një grafik vijë, një hartë ngjyrash të një vargu 2-D, ose një tabelë te nën-panelet. Një grafik me të njëjtin `'id'` (ose titull) si një i mëparshëm e zëvendëson, kështu që një cikël mund të përditësojë një grafik të vetëm konvergjence; `'append', true` shton një kurbë në të. {{ui:Pastro}} zbraz nën-panelet; shigjeta i palos.
- Me dy ose më shumë grafikë, {{ui:Njëra pranë tjetrës}} i shfaq të gjithë njëherësh (gjashtë më të rinjtë); klikimi i skedës së një tabele ose figure e shfaq atë vetëm përsëri.
- Çdo grafik ka nën vete {{ui:PNG}}, {{ui:SVG}} dhe {{ui:CSV}}. PNG dhe SVG e printojnë në bardhë me ngjyrat e letrës, pavarësisht nga tema (PNG 1600 × 1000 piksel; SVG shkallëzohet pa u turbulluar); CSV mban numrat e tij me çdo shifër: një kolonë x dhe një kolonë për çdo kurbë kur kurbat ndajnë x, përndryshe një rresht për pikë me emrin e kurbës.
- {{key:F}} ose {{ui:Përshtat}} e përshtat pamjen me atë që shfaqet.

## Skedarët

- {{ui:Hap}} te grupi Skript (ose lëshoni skedarë mbi pamjen ose panelin): skedarët `.craft`, `.lua` dhe `.py` hapen si skripta të rinj (nuk ekzekutohen); skedarët e të dhënave (STL, OBJ, CSV, JSON, NPY, HDF5) ngarkohen te variablat nën emrin e skedarit.
- {{ui:Ruaj}} te grupi Skript shkarkon skriptin aktual si skedar.
- {{ui:E re}} te grupi Skript (ose {{ui:+}} pranë skedave) fillon një skript tjetër. Klikoni dy herë një skedë për ta riemërtuar; {{ui:×}} e heq (mund ta zhbësh).

## Lexoni parametrat e pjesës

Një skript i lexon parametrat e pjesës (shih [Drejtoni një pjesë me parametra](topic:parameters)) sipas emrit:

```
w = param('width');     % vlera e një parametri, në mm (ose gradë, ose një numër i thjeshtë)
p = params();           % të gjithë, si strukturë: p.width, p.height
```

Në Lua dhe Python ato janë `cs.param('width')` dhe `cs.params()`. Skriptet vetëm lexojnë parametrat: ndryshojini te skeda {{ui:Parametrat}}. Nën skedën e skriptit, një rresht liston parametrat që lexon me `param('…')`, dhe shënon çfarëdo që pjesa nuk e ka; skeda {{ui:Parametrat}} e liston skriptin nën secilin prej tyre. Një emër i ndërtuar gjatë ekzekutimit të skriptit, si `param(name)`, nuk listohet.

## Skriptet ruhen në pjesë

Çdo skript në skeda mbahet në pjesë, kështu që {{ui:Ruaj}} te grupi Skedar e ruan me të dhe ndryshimet në to mund të zhbëhen. Hapja e një pjesë **nuk ekzekuton kurrë skriptet e saj**: konsola thotë sa mbart, dhe ato ekzekutohen vetëm kur shtypni {{ui:Ekzeko}}. Një pjesë nga dikush tjetër mund të mbajë çfarëdo skripti: lexojeni para se ta ekzekutoni. Skriptet ekzekutohen në sfond në këtë kompjuter, pa qasje në rrjet dhe pa mundësi të prekin faqen.

## Të lidhura

- [Gjuha CraftScript](topic:craftscript-language)
- [Skriptet në Lua](topic:craftscript-lua)
- [Skriptet në Python](topic:craftscript-python)
- [Biblioteka e analizës](topic:craftscript-library)
- [Shkruani analizën tuaj](topic:craftscript-own-analysis)
