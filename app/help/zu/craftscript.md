---
title: Bhala futhi uqhube ama-script (i-Script workspace)
summary: I-Script workspace ngesinyathelo ngesinyathelo: bhala i-script ye-CraftScript noma ye-Lua, uyiqhube ngo-F5, funda ikhonsoli, gcina imiphumela kokuguquguqukayo ze-script elandelayo, bonisa imesh, izinsimu namagrafu, misa ukuqhuba, bese ugcina ama-script ngengxenye.
keywords: script, ukubhala ama-script, ama-script ngesikhathi somklamo, khipha, isikrini sesibili, second monitor, param, params, imingcele ku-scripts, CraftScript, Lua, ikhodi, uhlelo, umhleli, ikhonsoli, REPL, command line, qhuba, F5, qhuba okukhethiwe, misa, okuguquguqukayo, workspace, igrafu, insimu, imesh, legend, sub-display, ukuhlaziya, ukwenza ngokuzenzakalelayo, matrix, izibalo
from: d0003e89
---

**Ukubuka kuqala.** Ukubhala ama-script kusha ku-PartCraft 0.3 futhi kungumbukiso wokuqala: ulimi, umtapo nendlela ama-script agcinwa ngayo kungashintsha, futhi ama-script abhalwe manje angase adinge ukuhlelwa okuncane kamuva. Sitshele okuphuka.

I-Script workspace iqhuba izibalo zakho eduze kwengxenye: izifingqo ezincane, ukuhlaziya okuphelele, noma ama-script [omtapo wokuhlaziya](topic:craftscript-library). Ama-script abhalwa ku-**CraftScript** (ulimi lwe-matrix olufana kakhulu ne-MATLAB, bheka [Ulimi lwe-CraftScript](topic:craftscript-language)) noma ku-**Lua** (bheka [Ama-script ku-Lua](topic:craftscript-lua)) noma ku-**Python** (bheka [Ama-script ku-Python](topic:craftscript-python)).

Khetha **Script** ebhokisini le-**Workspace** ngakwesobunxele se-toolbar. Ingxenye ayishintshwa. Iphaneli yesokudla iba yiphaneli ye-script (ibanzi kunavamile; hudula umphetho wayo ukuze uyishintshe, noma uyidlulisele esikrinini sesibili nge-menyu yayo {{ui:⋯}}, bheka [Hlela amaphaneli](common:arrange-panels)).

## Script ngesikhathi somklamo

Akudingeki uphume ku-Umklamo workspace ukuze ubhale i-script. Ku-Umklamo, ithebhu ethi {{ui:Script}} yephaneli yesokudla ibamba umhleli, ikhonsoli, okuguquguqukayo nomtapo ofanayo, nama-script afanayo. Umuthi wezici nombono kuyaqhubeka nokusebenza: chofoza isici ukuze uyikhethe, cofa kabili isikethi ukuze uhlele, guqula umbono, bese ubuyela ethebhini le-{{ui:Script}} uphinde ucindezele {{key:F5}}.

Okubonisiwe yi-script (imesh, izinsimu, amagrafu, amathebula) akudwetshwa phezu komodeli yakho ku-Umklamo: ikhonsoli iyasho lokho, futhi i-Script workspace inakho konke lapho ushintsha kuyo.

{{ui:Khipha}}, eduze kwe-{{ui:Qalisa}}, ihambisa iphaneli yonke iye kwiwindow layo, isibonelo esikrinini sesibili, ukuze umhleli nombono ogcwele kuhlale ecaleni komunye nomunye. {{ui:Buyisela}} iyifake futhi. Bheka [Hlela amaphaneli](common:arrange-panels).

## Qhuba i-script yakho yokuqala

1. Thayipha emhleleni, isibonelo:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Igrafu ye-sine')
   disp(max(y))
   ```

2. Cindezela {{key:F5}} (noma {{ui:Qalisa}}). Ikhonsoli ngaphansi komhleli ibonisa okuphrintwe yi-script, ne-"Kuqediwe ku… s". Igrafu ivela ku-**sub-displays** ngaphansi kombono we-3D.
3. Umugqa ongenalo `;` ubonisa inani lawo, njenge-MATLAB: `a = 3` ibonisa `a = 3`; `a = 3;` ayibonisi lutho.
4. Ukuqhuba ingxenye ye-script kuphela, khetha imigqa bese ucindezela {{key:Mod+Enter}} ({{ui:Okukhethiwe}}). Uma kungakhethwanga lutho iqhuba umugqa okhethwe yi-cursor.
5. Umugqa ongaphansi kwekhonsoli (ngemva kwe-`>>`) uqhuba isitatimende esisodwa uma ucindezela {{key:Enter}}. {{key:Up}} no {{key:Down}} zibuyisa imigqa yangaphambilini.

## Thola, goqa, uphelelise

- **Thola nshintsha.** Cindezela {{key:Mod+F}} (noma {{key:Mod+H}} ukuze nashintsha). Ibha ivula phezu kwekhodi: thayipha okuzofunwa; okufanayo kuyakhanya futhi inani likutshela lapho oyikhona. Izinkinobho ezisecaleni kwebhokisi zifanisa icala (**Aa**), zithola amagama aphelele kuphela (**W**) futhi zisebenzisa i-regular expression (**.\***; ekushintshweni, `$1` ibuyisela lokho igrubu lokuqala lalifanisa). {{ui:Shintsha}} ishintsha okufanayo okwamanje, {{ui:Konke}} ishintsha okufanayo konke njengesinyathelo esisodwa se-{{key:Mod+Z}}.
- **Ukugoqa.** Chofoza ▾ eduze kwenombolo yomugqa, noma cindezela {{key:Mod+Shift+[}} ngesikhombi ku-umugqa we-`function`, `if`, `for`, `while`, `switch` noma `try` (Lua: `function`, `do`, `if`, `repeat`), ukuze ufihle imigqa yangaphakathi; umugqa uthi zingaki. ▸ noma {{key:Mod+Shift+]}} iyavula futhi. Ukugoqa kufihla imigqa kuphela: Run, Londoloza, ukukopisha nezinombolo zemigqa konke kubala yonke imigqa, nokuthayipha emugqeni ogoqiwe kuqala kuyawuvula.
- **Ukuphelelisa.** Thayipha izinhlamvu ezimbili zegama, noma cindezela {{key:Mod+Space}}: uhlu lubonisa okuguquguqukayo onakho, imisebenzi yolimi (nezimpikiswano zayo), amagama okhiye namagama asevele ku-script. Khetha ngamacibisholo bese ucindezela {{key:Enter}} noma {{key:Tab}}.

## Uma kukhona okungahambi kahle

- Iphutha lichaza inkinga nomugqa wayo: umugqa umakwa mpofu emhleleni, futhi **Umugqa n** ekhonsoleni ikuyisa lapho.
- Ilophu engaphelelwa: cindezela {{ui:Misa}} (i-toolbar noma iphaneli). I-script imisa ngokushesha; okuguquguqukayo kugcina amanani ayenawo ngaphambi kwalokho kuqhuba.
- Ukuqhuba ngakunye kunesabelo sezinyathelo (izinyathelo ezi-2 billion ngokuzenzakalela; shintsha ngaphansi kwe-**Izinketho zokuqhuba** kwiphaneli). Ukuqhuba okudlula kuso kuyima ngomyalezo.

## Okuguquguqukayo kudlulela kwi-script ukuya kwenye

Konke okuguquguqukayo okwenziwe yi-script kufika ethebhini le-**Okuguquguqukayo** (igama, uhlobo, usayizi, inani elincane nelikhulu) kuhlale lapho kwi-script elandelayo, kunoma yiluphi ulimi. Ngale ndlela enye i-script yenza imesh, leyo elandelayo ixazulule, nesithathu ifake amagrafu.

- Chofoza okuguquguqukayo ukuze ukubonise: imesh, izinsimu nemodeli embonweni we-3D, ama-array njengethebhula (kanye negrafu yomugqa we-vector noma imephu yemibala ye-matrix) kuma-sub-display.
- {{ui:Londoloza njenge-JSON}}, {{ui:Londoloza njenge-CSV}} (ithebhula lezinombolo) ne-{{ui:Londoloza njenge-HDF5}} ziyilanda; {{ui:Susa}} iyisusa; {{ui:Sula konke}} ihlanza i-workspace.
- Khetha **Londoloza okuguquguqukayo nengxenye** ukuze uzigcine kufayela lengxenye (kuze kube ngama-32 MB; okukhulu kuhlala lapho lokhu kuvakasha kuphela). Uma uvula ingxenye enjalo, iphaneli inikeza ukuyilayisha.

## Imesh, izinsimu namagrafu

- `show(m)` idweba imesh; `show(f)` idaya insimu ebusweni bayo ngelejendi. Uhlu lwe-**Okubonisiwe** oluphezulu kwesobunxele sombono luyafihla ({{ui:ihlo}}) noma lususe ngalunye, futhi luyafihla noma libonise ingxenye ngokwayo. Ngaphansi kwe-legend, thayipha ububanzi (**Kusuka**, **kuya**) noma cindezela {{ui:Ozenzakalelayo}}; i-vector noma insimu yokucindezeleka nayo inikeza ukuthi yiliphi icala okufanele libonakale.
- `show(f, 'deform', u, 'scale', 50)` idweba imesh ehanjiswe yinsimu yokunyakaza `u`, ikhulisiwe izikhathi ezingu-50 (ngaphandle kwe-`scale`, cishe ama-8 %osayizi wemodeli).
- Chofoza imesh ebonisiwe: i-node eseduze, isakhi namanani ensimu lapho avela ku-sub-displays (**Ikhethiwe**).
- `plot`, `imagesc` no `table` zibeka igrafu yomugqa, imephu yemibala ye-array ye-2-D noma ithebhula ku-sub-displays. Igrafu enesi-`'id'` (noma isihloko) esifanayo nesangaphambili iyayishintsha, ngakho ilophu ingavuselela igrafu eyodwa yokuhlangana; `'append', true` yengeza ijika kuyo. {{ui:Sula}} ihlanza ama-sub-display; umcibisholo uwagoqa.
- Uma kukhona amagrafu amabili noma ngaphezulu, {{ui:Ngaseceleni nangaseceleni}} ibonisa wonke kanye (ayisithupha yakamuva); ukuchofoza ithebhu yethebhula noma yesithombe kubonisa lowo kuphela futhi.
- Igrafu ngayinye inazo {{ui:PNG}}, {{ui:SVG}} no {{ui:CSV}} ngaphansi kwayo. I-PNG ne-SVG ziyishicilela ngesimo esimhlophe ngemibala yephepha, nanoma yisiphi isihloko (i-PNG ama-pixel angu-1600 × 1000; i-SVG iyanda ngaphandle kokuthambisa); i-CSV igcina izinombolo zayo ngawo wonke amadijithi: ikholomu eyodwa ye-x nekholomu ngejika uma amajika ehlanganyela i-x, kungenjalo umugqa ngamunye ngephoyinti ngalinye negama lejika.
- {{key:F}} noma {{ui:Lingana}} ilinganisa umbono kokubonisiwe.

## Amafayela

- {{ui:Vula}} eqenjini le-Script (noma wehlise amafayela embonweni noma ephaneli): amafayela `.craft`, `.lua` no `.py` avulwa njengama-script amasha (awaqhubi); amafayela edatha (STL, OBJ, CSV, JSON, NPY, HDF5) alayishela okuguquguqukayo ngaphansi kwegama lefayela lawo.
- {{ui:Londoloza}} eqenjini le-Script ilanda i-script yamanje njengefayela.
- {{ui:Okusha}} eqenjini le-Script (noma {{ui:+}} eduze kwamathebhu) iqala enye i-script. Cofa kabili ithebhu ukuze uyiqamba kabusha; i-{{ui:×}} yayo iyisusa (ungayihlehlisa lokho).

## Funda imingcele yengxenye

I-script ifunda imingcele yengxenye (bheka [Qhuba ingxenye ngemingcele](topic:parameters)) ngegama:

```
w = param('width');     % inani lengcele eyodwa, ngo-mm (noma amadigri, noma inombolo evamile)
p = params();           % zonke, njenge-struct: p.width, p.height
```

Ku-Lua ne-Python zithi `cs.param('width')` no `cs.params()`. Ama-script afunda imingcele kuphela: shintsha kuthebhu le-{{ui:Imingcele}}. Ngaphansi kwethebhu ye-script, umugqa uhlu lwemingcele eyifundayo nge-`param('…')`, futhi umaka noma yimuphi ongekho engxenyeni; ithebhu le-{{ui:Imingcele}} ihlu le-script ngaphansi kwalowo nalowo. Igama elakhiwa ngenkathi i-script iqhuba, njenge-`param(name)`, alibhalwanga.

## Ama-script agcinwa engxenyeni

Yonke i-script ezithebhini igcinwa engxenyeni, ngakho {{ui:Londoloza}} eqenjini Lefayela iyagcina nazo nezinguquko zazo zingahlehliswa. Ukuvula ingxenye **akuqhubi ama-script ayo**: ikhonsoli ithi zingaki ezithwele, futhi ziqhuba kuphela lapho ucindezela {{ui:Qalisa}}. Ingxenye evela komunye umuntu ingaba nanoma yiluphi uhlelo: yifunde ngaphambi kokuqhuba. Ama-script aqhuba ngemuva kwalolu khompyutha ngaphandle kokufinyelela kwenethiwekhi futhi awakwazi ukuthinta ikhasi.

## Okuhlobene

- [Ulimi lwe-CraftScript](topic:craftscript-language)
- [Ama-script ku-Lua](topic:craftscript-lua)
- [Ama-script ku-Python](topic:craftscript-python)
- [Umtapo wokuhlaziya](topic:craftscript-library)
- [Bhala ukuhlaziya kwakho](topic:craftscript-own-analysis)
