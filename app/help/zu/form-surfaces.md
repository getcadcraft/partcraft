---
title: Izakhiwo ezigobile ngeFomu, nezici zobuso
summary: Phusha nokoke ikheji elibushelelezi lokulawula ku-workspace yeFomu, gobela imiphetho, sebenzisa ukulingana, hlola bese uqeda ibe yisisekelo esiqondile noma ubuso obuqondile, bese uqhobosha, ulayishe, uluka, ujiyise, ukhulise futhi usike ubuso ku-Design. Okuqondile nokulinganiselwe.
keywords: fomu, ezigobile, t-spline, subdivision, catmull-clark, ikheji, quadball, umphetho, ukulingana, izibuthanwe, ukugoba, ubuso, ukugqoka, ukugcwalisa, ubuso bokulayisha, ukuthunga, ukusewula, ukujiyisa, ubuso bokusumaza, ukwelula, ukusika
from: 0d326ef4
---

:::note
**Akukakwakhiwa okwamanje kulolu hlobo.** Ukuqedela ifomu ngaphakathi engxenyeni, nezici zobuso, kudinga ikhestelo lejiyometri eliqondile, okungelona elaseleyo kulolu hlobo lwe-PartCraft: yakha zonke izingxenye ngekhestelo le-mesh. [Okungakakwakhiwa](topic:not-built-yet) kuchaza okufanele wenze esikhundleni salokho. Lo khasi usala uchaza kanjani lokhu kusebenza ngekhestelo eliqondile.
:::

I-workspace ye-**Form** yakha izimo ezingahlelekile. Uhlela i-**cage**, inethiwekhi eyinhlamvu yamakhona, imiphetho nezinhlangothi. Isimo yiso ubuso obushelelezi okulawulwa yi-cage (ubuso bayo be-Catmull–Clark limit), ngakho ukuhudula ikhona kancane ibuthanise ubuso ozungezile. Lapho sekukuhle, **Finish** iyengeza emlandweni wengxenye njengesici se-*Form*, futhi ikhestelo eliqondile liyiguqula libe ubuso be-B-spline begalelo. Usuke ungayilungisa ngefillet, uyisike, uyihlanganise nezici zangaphambili futhi uyiphume njenge-STEP.

Khetha **Form** kuhlu lwe-**Workspace** ngakwesobunxele se-toolbar.

## Qala i-cage

1. Setha **Size** ne-**Divisions** ngakwesokudla iphaneli. I-Divisions yinani lezinhlangothi ezinikezwa ngalinye uhlangothi.
2. Chofoza {{ui:Box}}, {{ui:Quadball}} noma {{ui:Plane}} ku-toolbar. Iphaneli inayo futhi i-**Cylinder**, i-**Torus** ne-**Faces by clicks**.

- I-**quadball** iyi-cage yebhokisi elilingana ngendlela yokuthi amaphoyinti amakhona ahlala ebhodweni. Phakathi kwala maphoyinti ubuso buhlala kancane ngaphakathi kwebhola: cishe ngama-0.4 % wevolumu encane ngama-divisions amabili.
- I-**plane** ivulekile, ngakho iba ngumzimba wobuso (bheka "Surface features in Design" ngezansi).
- **Faces by clicks**: chofoza amaphoyinti ama-4 ephlanethi eyisisekelo (phansi) noma emakhoneni e-cage ukuze wenze ubuso obubodwa. Ubuso obuhlanganyela amakhona ayahlanganiswa. Cindezela {{key:Enter}} ngemva kwamaphoyinti ama-3 ukuze uthole unxantathu, noma {{key:Esc}} ukuze umise.

I-cage yakho engakaqedi igcinwa ngefayela lengxenye, ngakho ungavala ifayela bese uqhubeka kamuva.

## Khetha bese uhambisa

- Chofoza ikhona, umphetho noma ubuso be-cage. {{key:Shift}}+chofoza yengeza noma yehlisa izinto. {{key:Esc}} isula ukukhetha.
- I-gizmo ivela phakathi kokukhethiwe. Donsa umcibisholo ukuze uhambe ngawo, noma isikwele ukuze uhambe endizeni yaso. Cindezela {{key:W}} ukuze uhambe, {{key:E}} ukuze uzungeze no {{key:R}} ukuze ulinganise, noma sebenzisa izinkinobho eziphaneli. {{ui:Gizmo}} ku-toolbar idlulisa kuzo.
- **Soft falloff** (mm) nayo idonsa amakhona aphakathi kwalobo bude, ancipha kancane aze anyamalale emkhawulweni walobo bude.
- Yonke idonsa iyisinyathelo esisodwa sokuhlehlisa: {{key:Ctrl+Z}} no-{{key:Ctrl+Y}} zisebenza njengoba zijwayelekile.

## Shintsha i-cage

Izinkinobho ze-**Modify** eziphaneli zisebenza ngokukhethiwe:

| Inkinobho | Yenzani |
|---|---|
| {{ui:Extrude}} | Ubuso okukhethwe ngabo buphuma ngesilinganiso se-**Extrude distance**, ngokuya ku-normal yabo, nobuso bohlangothi obusha. Imiphetho evulekile ekhethiwe ikhulisa ubuso obusha ngaphandle. |
| {{ui:Edge loop}} / Insert edge loop | Ihlukanisa umsele wobuso obuneziqu okuwela umphetho okhethiwe, kuhhafu wendlela. Imisele eminingi yenza amajika aqinile kakhulu. |
| Insert point | Yengeza ikhona emaphakathi somphetho okhethiwe. |
| Subdivide | Ihlukanisa ubuso ngabunye okukhethiwe ibe ubuso obuneziqu obuzungeze maphakathi nabo. |
| Bridge | Ihlanganisa ubuso ababili okukhethiwe, noma imbobo ababili (khetha umphetho ovulekile oyodwa ngamunye), ngomsele wobuso. Bobabili badinga inani elifanayo lemiphetho. |
| Fill hole | Ivala imbobo ngomphetho ovulekile okhethiwe ngobuso obubodwa. |
| Weld | Ihlanganisa amakhona akhethiwe abe yodwa, emaphakathini awo. |
| Flatten | Ihambisa amakhona akhethiwe ephlanethini elilingana kangcono nawo. |
| Delete | Isusa ubuso, imiphetho (ubuso ababili buhlangana) noma amakhona akhethiwe. |

## Imiphetho ebukhali, ukulingana nokubonakala

- {{ui:Crease}} yenza imiphetho ekhethiwe ibe mibukhali. **Crease weight** ka-10 ibukhali ngokugcwele. Isisindo esincane sihlala sibukhali amanyathelo amaningana okucacisa bese sithamba, okunikeza ijika elibukhali esikhundleni sokugoqa okuqinile. **Uncrease** iyenza ibushelelezi futhi. **Sharp vertex** iphinde ikhona ukuze ubuso budlule kuyo ngephoyinti.
- **Symmetry** ibonisa i-cage ngokuphambene ku-X, Y noma Z = 0. Igcina uhlangothi olumahhala, ilibonise, bese ihlanganisa izingxenye ezimbili. Ngemuva kwalokho, ukuhlela ohlangothini olulodwa kwenzeka ezinhlangothini zombili. Amakhona endizeni yokubonisa ahlala kuyo.
- {{ui:Display}} iguqula phakathi kwe-**Smooth** (ubuso isici sizoba kuso) ne-**Box** (ubuso be-cage ngokwabo).
- **Analysis**: **Zebra stripes** zibonisa ukukhanya okunemigqa kusuka ekubukeni kwamanje. Zigoba kancane ebusweni obushelelezi futhi ziphuke emphethweni ogobile. **Mean curvature** ikhanyisa izindawo ezigobile zibe bomvu, izindawo ezingena ngaphakathi zibe mpunga, nezindawo ezilingana zibe mhlophe. Ilinganiswa ku-mesh ebonisiwe ngefomula ye-cotangent, ngakho ingumhlahlandlela, hhayi ukulinganisa okuqinile.

## Hlola bese uqeda

- **Check exact** iguqula i-cage ekhestelweni eliqondile ngaphandle kokushintsha ingxenye yakho. Ibika ukuthi i-cage yenza izingxenye zeB-spline ezingaki, ezingaki ezinembile, nokuthi umphumela uyisisekelo esivaliwe nesisebenzayo yini nevolumu yaso.
- {{ui:Finish}} yengeza isici se-*Form* emlandweni, noma ibuyekeze ifomu owayehlela, bese ikubuyisela ku-Design. I-cage evaliwe iba yisisekelo esiqinile. Ukusebenza kwayo **Operation** ephaneli ye-Design kungaba New body, Join, Cut noma Intersect. I-cage evulekile iba umzimba wobuso.
- Ukushintsha ifomu kamuva, khetha kumlando bese uchofoza **Edit in Form**. Umzimba owakhiwe ufihliwe lapho uhlela i-cage yawo.
- **Discard** ilahla i-cage ngaphandle kokuthinta umlando.

## Okuqondile nokulinganiselwe

Ubuso ngabunye obune-ngaseceleni ezine be-cage, uma kudingeka buhlanganiswe kabusha, bube yi-bicubic B-spline patch eyodwa.

- Lapho wonke amakhona obuso eyi-*regular* (imiphetho emine ihlangana ngaphakathi kobuso, noma emithathu emphethweni ovulekile noma ngaphansi kwegoqa), i-patch **ngokuqondile** iyi-subdivision surface. Izivivinyo zihlola lokhu kuze kube ngu-1e-9 mm.
- Ezungeze **iphoyinti elingajwayelekile** (imiphetho emithathu, emihlanu noma ngaphezulu ihlangana, ikhona yobuso obunezinhlangothi ezintathu noma ezinhlanu, noma ukuphela kwegoqa) akukho patch yepolynomial eqondile. Lapho i-patch ithatha iphoyinti eliqondile kanye nendiza yokuthinta kulowo khona, nemigqa yomakhelwane yemiphetho, ngakho ama-patch ahlangana ngaphandle kwesikhala. Ukuthinta okuqhubekayo emiphetheni ehlangana kuleliphoyinti kuyinganiselo. Iphaneli ye-Form neyesici ibonisa i-engeli enkulu kakhulu, ngokuvamile ngaphansi kuka-2°. I-**Level** ephezulu kuphaneli yesici yenza lawo ma-patch abe mancane futhi aseduze.
- Ugobo olubukhali liyimiphetho yangempela yesisekelo, ngakho ungayilungisa ngefillet.
- Ipatch ngalinye lingubuso bayo, ngakho ifomu linobuso obuningi futhi imigqa itshalwa phakathi kwabo.

## Izici zobuso ku-Design

Imiyalo yobuso itholakala ku-menyu ye-{{ui:More}} ye-Design, ngaphansi kwezici. Idinga ikhestelo eliqondile. Imizimba yobuso idwetshwa ibonakala ngokuqhamuka ngombala oluhlaza. Abayisici sesisekelo size usibambe ngokuthunga noma ukujiyisa.

| Umyalo | Wenzani |
|---|---|
| Patch | Igcwalisa umjikelezo ovaliwe wemiphetho. Cindezela {{key:Shift}}+chofoza imiphetho yesisekelo kuqala, noma khetha umzimba wobuso ukuze ugcwalise imbobo yawo. **Tangent (G1)** yenza i-patch ihlangane nalobo buso ngokubushelelezi. |
| Loft surface | Ubuso oludlula kuchungechunge olulodwa lwamajika ngesikethi ngasinye (oluvulekile noma olu valiwe), ngokuhlelwa komlando. |
| Stitch | Ithungela izimbobo zobuso ngemiphetho yabo ehlanganyelwe. Uma zivala, umphumela uba yisisekelo, nge-Operation njengezinye izici. |
| Thicken | Inika umzimba wobuso ukuqina: ngokuya ku-normal yawo, ngokumelene nawo, noma ingxenye ngayinye ngaseceleni. Umphumela uyisisekelo. |
| Offset surface | Ikhophi yomzimba wobuso ehanjiswe ngokuya ku-normals zawo. Ukuqala kuyahlala. |
| Extend surface | Yandisa ubuso obunobuso bubodwa ngaphesheya kwemiphetho ekhethwe. |
| Trim surface | Isika umzimba wobuso lapho umzimba wobuso omunye, noma isisekelo, udlula kuwo. Chofoza **Pick a point on the piece** ukuze ukhethe ingxenye ogcina yona, noma gcina konke okunye. |

Stitch, Thicken, Extend ne-Trim zisebenzisa umzimba wobuso oqala kuwo. Izici ezilandelayo zisebenzisa okusha.

Imikhawulo yamanje: amafomu ahlanganisa izingxenye eziningana ezivaliwe ngeke aguquke ube yisisekelo esisodwa; izindawo ezijwayelekile azihlanganiswa zibe ubuso obukhulu; futhi bheka [Okungakakwakhiwa](topic:not-built-yet).
