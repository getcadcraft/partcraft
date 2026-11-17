---
title: Rakstīt un palaist skriptus (Skripta darbvieta)
summary: Skripta darbvieta soli pa solim — uzrakstiet CraftScript vai Lua skriptu, palaidiet to ar F5, lasiet konsoli, glabājiet rezultātus mainīgajos nākamajam skriptam, rādiet tīklus, laukus un grafikus, apturiet palaišanu un saglabājiet skriptus kopā ar daļu.
keywords: skripts, skriptēšana, skripts modelēšanas laikā, atdalīt, otrais ekrāns, otrais monitors, param, params, parametri skriptos, CraftScript, Lua, kods, programma, redaktors, konsole, REPL, komandrinda, palaist, F5, palaist atlasi, apturēt, mainīgie, darbvieta, grafiks, lauks, tīkls, legenda, apakšdispleja, analīze, automatizācija, matrica, skaitliskais
from: d0003e89
---

**Priekšskatījums.** Skriptēšana ir jauna PartCraft 0.3 versijā un ir priekšskatījums: valoda, bibliotēka un veids, kā skripti tiek saglabāti, vēl var mainīties, un skripti, kas rakstīti tagad, var prasīt nelielas izmaiņas vēlāk. Pastāstiet mums, kas nestrādā.

Skripta darbvieta palaiž jūsu pašu aprēķinus blakus daļai: mazas summas, veselas analīzes vai skriptus no [analīzes bibliotēkas](topic:craftscript-library). Skripti tiek rakstīti **CraftScript** (matricu valoda, ļoti līdzīga MATLAB, skat. [CraftScript valoda](topic:craftscript-language)), vai **Lua** (skat. [Skripti Lua valodā](topic:craftscript-lua)), vai **Python** (skat. [Skripti Python valodā](topic:craftscript-python)).

Izvēlieties **Skripts** lodziņā **Darbvieta** rīkjoslas kreisajā pusē. Daļa netiek mainīta. Labais panelis kļūst par skripta paneli (platāks nekā parasti; velciet tā malu, lai to mainītu, vai pārvietojiet to uz otru ekrānu ar tā {{ui:⋯}} izvēlni, skat. [Izkārtot paneļus](common:arrange-panels)).

## Skriptēšana modelēšanas laikā

Lai rakstītu skriptu, jums nav jāpamet projektēšanas darbvieta. Projektēšanā labā paneļa cilne {{ui:Skripts}} satur to pašu redaktoru, konsoli, mainīgos un bibliotēku, ar tiem pašiem skriptiem. Funkciju koks un skats turpina darboties: noklikšķiniet uz funkcijas, lai to atlasītu, divreiz noklikšķiniet uz skices, lai to rediģētu, pagrieziet skatu, tad atgriezieties cilnē {{ui:Skripts}} un nospiediet {{key:F5}}.

Ko skripts **parāda** (tīklus, laukus, grafikus, tabulas), projektēšanā netiek zīmēts pāri jūsu modelim: konsole to saka, un Skripta darbvieta to visu rāda, kad pārslēdzaties uz to.

{{ui:Atdalīt}}, blakus {{ui:Palaist}}, pārvieto visu paneli uz atsevišķu logu, piemēram, uz otru ekrānu, lai redaktors un pilnais skats atrastos blakus. {{ui:Atgriezt}} to atkal piestiprina. Skat. [Izkārtot paneļus](common:arrange-panels).

## Palaidiet pirmo skriptu

1. Rakstiet redaktorā, piemēram:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Nospiediet {{key:F5}} (vai {{ui:Palaist}}). Konsole zem redaktora rāda, ko skripts izdrukāja, un "Pabeigts … s". Grafiks parādās **apakšdisplejos** gar 3D skata apakšu.
3. Rinda bez semikola izdrukā savu vērtību, kā MATLAB: `a = 3` izdrukā `a = 3`; `a = 3;` neizdrukā neko.
4. Lai palaistu tikai daļu skripta, atlasiet rindas un nospiediet {{key:Mod+Enter}} ({{ui:Atlase}}). Ja nekas nav atlasīts, tiek palaista rinda, kurā atrodas kursors.
5. Rinda konsoles apakšā (pēc `>>`) palaiž vienu paziņojumu, kad nospiežat {{key:Enter}}. {{key:Up}} un {{key:Down}} atgriež iepriekšējās rindas.

## Atrast, savilkt un pabeigt

- **Meklēt un aizstāt.** Nospiediet {{key:Mod+F}} (vai {{key:Mod+H}}, lai aizstātu arī). Virs koda atveras josla: ierakstiet, ko meklēt; atbilstības iezīmējas, un skaitītājs rāda, kur atrodaties. Pogas blakus lodziņam atbilst reģistram (**Aa**), meklē tikai veselus vārdus (**W**) un izmanto regulāro izteiksmi (**.\***; aizstāšanā `$1` ieliek atpakaļ to, ko atbilstīgi pirmā grupa). {{ui:Aizstāt}} aizstāj pašreizējo atbilstību, {{ui:Visas}} aizstāj katru atbilstību kā vienu soli {{key:Mod+Z}}.
- **Savilkšana.** Noklikšķiniet uz ▾ blakus rindas numuram vai nospiediet {{key:Mod+Shift+[}}, kad kursors ir uz rindas `function`, `if`, `for`, `while`, `switch` vai `try` (Lua: `function`, `do`, `if`, `repeat`), lai paslēptu tās iekšējās rindas; rinda norāda, cik to ir. ▸ vai {{key:Mod+Shift+]}} to atkal atver. Savilkšana tikai paslēpj rindas: palaišana, saglabāšana, kopēšana un rindu numuri joprojām skaita katru rindu, un rakstīšana savilktā rindā vispirms to atver.
- **Pabeigšana.** Ierakstiet divus burtus nosaukumā vai nospiediet {{key:Mod+Space}}: saraksts rāda jūsu mainīgos, valodas funkcijas (ar to argumentiem), atslēgvārdus un nosaukumus, kas jau ir skriptā. Izvēlieties ar bultiņām un nospiediet {{key:Enter}} vai {{key:Tab}}.

## Kad kaut kas noiet greizi

- Kļūda nosauc problēmu un tās rindu: rinda redaktorā ir iezīmēta sarkana, un **Rinda n** konsolē tur jūs aizved.
- Cilpa, kas nekad nebeidzas: nospiediet {{ui:Apturēt}} (rīkjosla vai panelis). Skripts apstājas uzreiz; mainīgie paturē vērtības, kādas tiem bija pirms šīs palaišanas.
- Katrai palaišanai ir arī soļu budžets (pēc noklusējuma 2 miljardi soļu; mainiet to sadaļā **Palaišanas opcijas** panelī). Palaišana, kas to pārsniedz, apstājas ar ziņojumu.

## Mainīgie pāriet no skripta uz skriptu

Katrs augstākā līmeņa mainīgais, ko skripts izveido, nonāk cilnē **Mainīgie** (nosaukums, tips, izmērs, mazākā un lielākā vērtība) un paliek tur nākamajam skriptam abās valodās. Tā viens skripts veido tīklu, nākamais atrisina, un trešais zīmē grafiku.

- Noklikšķiniet uz mainīgā, lai to parādītu: tīkli, lauki un modeļi 3D skatā, masīvi kā tabula (plus līniju grafiks vektoram vai krāsu karte matricai) apakšdisplejos.
- {{ui:Saglabāt kā JSON}}, {{ui:Saglabāt kā CSV}} (skaitļu tabula) un {{ui:Saglabāt kā HDF5}} to lejupielādē; {{ui:Dzēst}} to noņem; {{ui:Notīrīt visu}} iztukšo darbvietu.
- Atzīmējiet **Saglabāt mainīgos kopā ar daļu**, lai tos paturētu daļas failā (līdz 32 MB; lielāki paliek tikai šim apmeklējumam). Kad atverat šādu daļu, panelis piedāvā tos ielādēt.

## Tīkli, lauki un grafiki

- `show(m)` zīmē tīklu; `show(f)` iekrāso lauku uz tā tīkla ar legendu. Saraksts **Redzamie** skata augšējā kreisajā stūrī paslēpj ({{ui:acs}}) vai noņem katru vienumu un paslēpj vai parāda pašu daļu. Zem legendas ierakstiet diapazonu (**No**, **līdz**) vai nospiediet {{ui:Auto}}; vektora vai sprieguma laukam piedāvā arī to, kuru komponenti rādīt.
- `show(f, 'deform', u, 'scale', 50)` zīmē tīklu, ko pārvieto pārvietojuma lauks `u`, palielinātu 50 reizes (bez `scale` — ap 8 % no modeļa izmēra).
- Noklikšķiniet uz rādīta tīkla: tuvākais mezgls, elements un lauka vērtības tajā parādās apakšdisplejos (**Atlasītais**).
- `plot`, `imagesc` un `table` apakšdisplejos ievieto līniju grafiku, divdimensiju masīva krāsu karti vai tabulu. Grafiks ar tādu pašu `'id'` (vai nosaukumu) kā iepriekšējais to aizstāj, tāpēc cilpa var atjaunināt vienu konverģences grafiku; `'append', true` pievieno tam līkni. {{ui:Notīrīt}} iztukšo apakšdisplejus; bultiņa tos savelk.
- Ja ir divi vai vairāk grafiki, {{ui:Blakus}} parāda tos visus uzreiz (jaunākos sešus); noklikšķinot uz tabulas vai attēla cilnes, tiek rādīts tikai tas.
- Zem katra grafika ir {{ui:PNG}}, {{ui:SVG}} un {{ui:CSV}}. PNG un SVG to drukā uz balta fona papīra krāsās neatkarīgi no motīva (PNG 1600 × 1000 pikseļi; SVG mērogojas bez izplūšanas). CSV glabā tā skaitļus ar visiem cipariem: viena kolonna x un kolonna katrai līknei, ja līknēm ir kopīgs x, citādi viena rinda katram punktam ar līknes nosaukumu.
- {{key:F}} vai {{ui:Pielāgot}} pielāgo skatu tam, kas ir rādīts.

## Faili

- {{ui:Atvērt}} Skripta grupā (vai nometiet failus uz skata vai paneļa): `.craft`, `.lua` un `.py` faili atveras kā jauni skripti (tie netiek palaisti); datu faili (STL, OBJ, CSV, JSON, NPY, HDF5) ielādējas mainīgajos zem sava faila nosaukuma.
- {{ui:Saglabāt}} Skripta grupā lejupielādē pašreizējo skriptu kā failu.
- {{ui:Jauns}} Skripta grupā (vai {{ui:+}} blakus cilnēm) sāk citu skriptu. Veiciet dubultklikšķi uz cilnes, lai to pārdēvētu; tās {{ui:×}} to noņem (to var atsaukt).

## Lasiet daļas parametrus

Skripts nolasa daļas parametrus (skat. [Vadīt daļu ar parametriem](topic:parameters)) pēc nosaukuma:

```
w = param('width');     % viena parametra vērtība mm (vai grādos, vai vienkāršs skaitlis)
p = params();           % visi, kā struktūra: p.width, p.height
```

Lua un Python tie ir `cs.param('width')` un `cs.params()`. Skripti tikai lasa parametrus: mainiet tos cilnē {{ui:Parametri}}. Zem skripta cilnes rinda uzskaita parametrus, ko tas nolasa ar `param('…')`, un atzīmē tos, kurus daļai nav; cilnē {{ui:Parametri}} zem katra parametra ir uzskaitīts skripts. Nosaukums, kas tiek veidots skripta darbības laikā, piemēram, `param(name)`, sarakstā neparādās.

## Skripti tiek saglabāti daļā

Katrs skripts cilnēs tiek glabāts daļā, tāpēc {{ui:Saglabāt}} grupā **Fails** saglabā tos kopā ar to, un izmaiņas tajos var atsaukt. Daļas atvēršana **nekad nepalaiž tās skriptus**: konsole saka, cik tādu tā satur, un tie tiek palaisti tikai tad, kad nospiežat Palaist. Svešas daļas skripts var būt jebkas: izlasiet to pirms palaišanas. Skripti darbojas fonā šajā datorā bez tīkla piekļuves un nevar aizskart lapu.

## Saistītie

- [CraftScript valoda](topic:craftscript-language)
- [Skripti Lua valodā](topic:craftscript-lua)
- [Skripti Python valodā](topic:craftscript-python)
- [Analīzes bibliotēka](topic:craftscript-library)
- [Savas analīzes rakstīšana](topic:craftscript-own-analysis)
