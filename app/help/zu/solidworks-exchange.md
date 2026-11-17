---
title: Hambisa izingxenye ukuya nokusuka kubenzi bezingxenye abanye
summary: Thumela ingxenye kumenzi wezingxenye omunye njenge-macro eyakha kabusha ngomugqa wezici ophilayo. I-STEP egciniwe nokuvula uhlu lwezici olubhalwe ngomenzi omunye akukakhiwa kule nguqulo.
keywords: macro, akukakhiwa, swb, vba, umugqa wezici, buyisela, thumela i-macro, cadcraft-sw.json, i-STEP egciniwe, ap214, izinguquko zomhlaba, izibalo, ukuguqula
from: 97ca61da
---

I-PartCraft ithumela futhi ibuyisa izingxenye ne-SolidWorks zombili izindlela, ngaphandle kwefomethi yefayela abanye abangayifunda:

- **Phandle:** i-macro (`.swb`, umbhalo ovulekile) ye-SolidWorks esebenza ukuyakha ingxenye yayo ngokwayo, isici ngesici, nezikethi zayo, izixhumanisi, izilinganiso, izinguquko zomhlaba nezibalo. Uthola ingxenye yomdabuko enomugqa wezici ophilayo, hhayi isolidi elifile.
- **Ukubuya:** i-macro oyisebenzisa ngaphakathi kwe-SolidWorks ibhala izici nezibalo zengxenye efayeleni `.cadcraft-sw.json`. Ukuvula lelo fayela ku-PartCraft akukakhiwa kule nguqulo (kudinga i-exact kernel).

:::warning
Lokhu akukahlolwa ku-SolidWorks. I-SolidWorks isebenza kuphela ku-Windows nangelayisensi, futhi i-PartCraft ayikaze isebenzise lezi ma-macro kuyo. Ama-macro abhalwe ngokwemibhalo ye-API ye-SolidWorks futhi ahlolwa ngokwesakhiwo lapha. Lindele ukubika izinkinga; ilogi i-macro eyibhalayo itshela ukuthi yiliphi isinyathelo esehlulekile.
:::

I-PartCraft ayikwazi ukubhala ifayela le-`.sldprt`: leyo fomethi ivaliwe. I-macro yindlela yokuthola ingxenye yomdabuko.

## Thumela ingxenye njenge-macro

1. Vula ingxenye.
2. Khetha {{ui:Thumela}}, bese {{ui:I-macro ye-SolidWorks (.swb)}}. I-PartCraft ilanda `<part>.swb`; ibha yesimo ithi yabhalwa "ngaphandle kwe-exact kernel".
3. Ingxoxo ikutshela ukuthi i-macro yakha izici, izinguquko zomhlaba nezibalo ezingaki, futhi ibala okungafakiwe. Ayikho i-STEP ehamba nayo kule nguqulo: sebenzisa {{ui:Thumela}}, bese {{ui:STEP (ngobuso, kernel yemeshi)}} uma udinga eyodwa.
4. Ku-SolidWorks, khetha **Tools > Macro > Run**, khetha ifayela `.swb` bese ulinda. Yenza ingxenye entsha kusuka ku-template yakho yengxenye ezenzakalelayo, ibeke amamilimitha futhi yakhe zonke izici.
5. Ekugcineni umyalezo uthi izinyathelo ezingaki eziqedile, eziyizinkinga ezingaki, nokuthi ezingaki zifana nomzimba we-PartCraft. Ilogi egcwele, `<part> macro log.txt`, ibhalwa eduze kwe-macro.

Okwakhiwa yi-macro:

| I-PartCraft | Engxenyeni entsha |
|---|---|
| Isikethi endizeni yangaphambili, engaphezulu noma yangakwesokudla | Isikethi kuleyo ndiza, nemigqa, amasumo, amaphoyinti, izixhumanisi nezilinganiso zaso (zibizwa njengakwi-PartCraft, njengo `k7`) |
| Isikethi ebusweni | Isikethi ebusweni obufanayo, sikhethwe ngephoyinti kulo |
| Isikethi endizeni ebekiwe | Indiza yesikhombisi ethi ngamaphoyinti amathathu, nesikethi kuyo |
| Extrude, cut (blind, through all, mid-plane, two directions, taper) | Boss-extrude noma cut-extrude |
| Revolve, revolved cut | Jikeleza ngomugqa wesisekelo ofanayo |
| Hole (simple, counterbore, countersink, tapped) | Ukusika okukodwa noma amabili anezikethi zawo (imbobo ethayiwe iyinhlakula yayo yokuthaya; akukho ucingo) |
| Linear and circular pattern, mirror | Linear pattern, circular pattern, mirror (izici noma umzimba) |
| Fillet, chamfer, shell | Fillet, chamfer neshell ezimiphetheni nasebusweni obufanayo, okukhethwe ngamaphoyinti |
| Parameters and equations | Izinguquko zomhlaba nezibalo ezilinganisweni eziqanjwe kabusha |
| Suppressed features, the rollback bar | Ivalwe ngendlela efanayo; ibha yokuhlehlisa ibe endaweni efanayo |

Ngemva kwesici ngasinye solid, i-macro iqhathanisa ivolumu nosayizi womzimba nowe-PartCraft. Uma kwahlukile, iphendula indlela yesici kanye bese ihlola futhi; uma lokho kungcono kancane, iyibuyisela emuva futhi ibhale "Check" ilogini.

### Lokho okushiyiwe

Ingxoxo nesiqalo se-macro sidweba lonke okungaphethwe nesizathu. Okwamanje lokho kuyizinto ezingeniswe njengezixazululo zesolidi (faka i-STEP esikhundleni), i-sweep, i-loft, amadrafti, amaaksi namaphoyinti wereferensi, izimo ze-"up to", ukukhipha kwezinye kuphela zamakhonco, nanoma yini ecasha kulokho. Ama-spline aba amagculo adlula kumaphoyinti awo. Le nguqulo ayinayo i-exact kernel, ngakho izikethi ebusweni namazici akhetha imiphetho noma ubuso nawo ayashiywa.

## Thumela i-STEP enegama

Akukakhiwa kule nguqulo: {{ui:STEP ye-SolidWorks (egciniwe, AP214)}} idinga i-exact kernel, futhi ukukhetha kwayo kuthi "STEP ye-SolidWorks: akukakhiwa. …". Nge-exact kernel, ifayela linegama lengxenye, amamilimitha nombala wengxenye, futhi limisa u-Y njengoba i-SolidWorks ikhombisa izingxenye (i-{{ui:STEP AP214 (exact solid)}} evamile imisa u-Z). Izinhlamvu ezinamabhokoshi ziyalahleka egameni, nezinye izinhlamvu ezingaphandle kwe-ASCII ziba `_`.

## Buyisa ingxenye

Ukuvula ifayela ku-PartCraft (isinyathelo 3) akukakhiwa kule nguqulo: kuthi "Ukuvula ukuthunyelwa kwe-SolidWorks: akukakhiwa. …". Uhlelo lokudweba lwe-CadCraft lusavula ifayela futhi luthathe izikethi zalo.

1. Khetha {{ui:Ifayela}} > {{ui:Thumela}} > {{ui:Ifayela le-macro lokubuyisa izingxenye (.swb)}} ukuze ulande `CadCraftExport.swb`, bese uyibeka eduze kwezingxenye zakho.
2. Ku-SolidWorks, vula ingxenye, khetha **Tools > Macro > Run** bese ukhetha `CadCraftExport.swb`. Ibhala `<part>.cadcraft-sw.json` eduze kwengxenye futhi ayishintshi lutho kuyo.
3. Ku-PartCraft, khetha {{ui:Vula}} bese ukhetha leyo fayela, noma uyiwise embonakalweni ye-3D.
4. Nge-exact kernel, i-PartCraft yakha kabusha ingxenye isici ngesici futhi ibonisa okwenzile: isibonelo "izici ezi-5 kwezi-5 zithwelwe kusuka ku-SolidWorks (Flange.SLDPRT)", inani ngalinye elingathwalwanga ("Akuthwelwanga: Sweep1 (Sweep)."), nokuthi ivolumu iyahambisana yini nalena ebhalwe yi-SolidWorks.
5. Yilondoloze njengengxenye ye-PartCraft nge-{{ui:Londoloza}}.

Izikethi zifika endizeni eyisisekelo uma zikhona, endaweni efanayo yengxenye ebusweni obuthe tshe uma ikhona (ngakho zilandela izinguquko zamuva), futhi endizeni engashintshi uma kungenjalo. Imiphetho nobuso bamafillet, ama-chamfer neshell itholakala ngamaphoyinti futhi igcinwa njengezinkomba ezibizwayo. Izinguquko zomhlaba ziba amapharamitha (amagama anezikhala athola izikhala ezingaphansi: "Bolt count" aba `Bolt_count`) nezibalo ziba yizibalo ezilinganisweni ezifanayo. Akukho okuqagelwayo: okungenayo okufanayo kuyadwetshwa.

Uhlelo lokudweba lwe-CadCraft luvula ifayela elifanayo luthathe izikethi zalo.

:::note
Ifomethi yi-`cadcraft-sw-export` inguqulo 1, i-JSON evulekile ngamamilimitha namadigri. Ifayela elivela ku-macro entsha, noma elingavumelekile, liyenqatshwa ngesizathu.
:::
