---
title: Problēmu novēršana
summary: Problēmas, ar kurām var saskarties PartCraft, no lietotnes nesākšanās līdz neizdevušām funkcijām, skicēm, kuras neatrisinās, failiem, kurus nevar atvērt, un savienojumiem, kas uzvedas nepareizi, ar redzamo ziņojumu un labojumu.
keywords: problēma, kļūda, palīdzība, nestrādā, neizdodas, avārija, tukšs, webgl, webassembly, kodols, nav izveidots, pārmērīgi noteikts, atvērts profils, nevar atvērt, nekas nenotiek, nepareizs virziens, lēns
from: 7728542c
---

Kad kaut kas nedarbojas, vispirms izlasiet **statusa joslu** apakšā: PartCraft tur saka, kāpēc tas atteicās vai ko sagaida tālāk. Neizdevusies funkcija arī rāda savu ziņojumu sava labā paneļa augšā un tad, kad virzāt rādītāju pāri tās rindai vēsturē.

## Lietotne nesākas

### "Šī pārlūkprogramma nevar rādīt 3D (WebGL ir izslēgts vai trūkst), tāpēc PartCraft šeit nevar darboties."

**Cēlonis:** pārlūkā 3D grafika (WebGL) ir izslēgta, bloķēta vai nav atbalstīta grafikas draiverī.

**Labojums:**

:::chromium
Atveriet `chrome://settings/system` (vai `edge://settings/system` Edge) un ieslēdziet "Izmantot grafikas paātrinājumu, kad tas ir pieejams", pēc tam restartējiet pārlūku. Ja tas jau ir ieslēgts, pārbaudiet WebGL statusu `chrome://gpu` un atjauniniet grafikas draiveri.
:::

:::firefox
Atveriet `about:support` un skatiet Graphics, WebGL. Ja tas ir bloķēts, atjauniniet grafikas draiveri. `about:config` `webgl.disabled` jābūt `false`.
:::

:::safari
WebGL pašreizējā Safari vienmēr ir ieslēgts. Atjauniniet macOS (Safari atjauninās kopā ar to). Ja joprojām neizdodas, izmēģiniet Chrome vai Firefox tajā pašā Mac, lai izslēgtu grafikas aparatūru.
:::

Attālās darbvirsmas un dažas virtuālās mašīnas nav WebGL. Izmēģiniet datorā pašā.

### "Cietā ķermeņa kodols netika ielādēts: …"

**Cēlonis:** ģeometrijas kodolu (WebAssembly programmu) nevarēja ielādēt vai palaist. Parasti savienojums pārtrūka lapas ielādes laikā, WebAssembly ir izslēgts uzņēmuma politikas vai pārlūka drošības iestatījuma dēļ, vai pārlūks ir ļoti vecs.

**Labojums:** pārlādējiet lapu, esot tiešsaistē. Ja tas turpina neizdoties, izmēģiniet citu pašreizējo pārlūku. Firefox `about:config` `javascript.options.wasm` jābūt `true`. Bezsaistē lietotne un tās kodols ielādējas tikai tad, ja lietotnes joslā pirms savienojuma zaudēšanas bija **Gatavs darbam bezsaistē** ({{ui:Saglabāt bezsaistei}} tiešsaistē; skatiet [Darbs bezsaistē](common:offline)).

### Bezsaistes poga saka "Nevarēja saglabāt" vai "Bezsaistē nav pieejams"

**Nevarēja saglabāt**: daži faili nelejupielādējās. Noklikšķiniet, lai mēģinātu vēlreiz, esot tiešsaistē; lēns vai ar maksu apliekams savienojums var prasīt otru mēģinājumu. **Bezsaistē nav pieejams**: šis pārlūka logs nevar saglabāt bezsaistes kopiju (privātie logi un daži pārvaldīti datori to bloķē). Izmantojiet parastu logu vai atstājiet cilni atvērtu.

### PartCraft ir bezsaistē, bet novecojis

Noklikšķiniet uz **Gatavs darbam bezsaistē**, esot tiešsaistē, un izvēlieties {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}}.

### "Izvilkums: vēl nav izveidots. Tam vajag precīzu kodolu, …"

Pilnais ziņojums ir "<Nosaukums>: vēl nav izveidots. Tam vajag precīzu kodolu, kuru šī PartCraft versija nesatur. Palīdzība › Kas vēl nav izveidots saka, ko darīt tā vietā." To redzat, kad izvēlaties Izvilkums, Pārejas virsma, Ribas, lokšņu metāla atloku, virsmas elementu, Apvienot, Pārvietot korpusu, Mērogot korpusu vai Ceļa rakstu, kā arī citas lietas, kurām vajag tikai precīzu kodolu. Ar jūsu pārlūku vai detaļu nekas nav nepareizi: šī PartCraft versija veido visas detaļas ar tīkla kodolu. Skatiet [Kas vēl nav izveidots](topic:not-built-yet), kas darāms tā vietā, un [Tīkla kodols](topic:solid-kernels).

### "Ielādē cietā ķermeņa kodolu…" nekad nepāriet

Nedaudz pagaidiet lēnā savienojumā: kodols un 3D bibliotēka pirmo reizi tiek lejupielādēti. Pēc tam pārlādējiet lapu. Ja pati lapa rāda kļūdu, skatiet iepriekš.

## Nekas nenotiek, kad nospiežu taustiņu

- Taustiņi nedarbojas, kamēr kursors ir lodziņā panelī. Noklikšķiniet 3D skatā vai pēc ierakstīšanas nospiediet {{key:Esc}} (vai {{key:Tab}}, lai izietu).
- Bultiņu taustiņi un {{key:Plus}}/{{key:Minus}} pagriež un tuvina skatu tikai pēc tam, kad esat noklikšķinājis skatā.
- Ir atvērts dialogs: vispirms atbildiet uz to.
- Skicē {{key:F}} ir Noapaļojuma rīks, nevis Pielāgot. Izmantojiet pogu {{ui:Fit}}.

## Rīkjoslas poga ir pelēka

- Funkciju pogas ir pelēkas, kamēr skice ir atvērta. Vispirms aizveriet skici.
- Skices rīki darbojas tikai skicē.
- {{ui:Undo}} un {{ui:Redo}} ir pelēkas, kad nav ko atsaukt vai atkārtot.
- {{ui:Assembly}} prasa detaļu ar cietu ķermeni. {{ui:Joint}} prasa divas detaļas montāžā. {{ui:Edit part}} prasa atlasītu detaļu.
- {{ui:STEP AP242 (exact solid)}} un {{ui:STEP AP214 (exact solid)}} ir pelēkas montāžā: eksportējiet katru detaļu atsevišķi. Cita programma atsakās no precīzā faila: izmēģiniet {{ui:STEP AP214 (exact solid)}}, pēc tam {{ui:STEP (faceted, mesh kernel)}}, un pastāstiet mums caur {{ui:Help}} › {{ui:Report a problem}}.
- {{ui:Sweep}}, {{ui:Loft}} un citas funkcijas, kam vajag precīzu kodolu, nav pelēkas: tās paliek klikšķināmas, to rīksavedienos beidzas ar "vēl nav izveidots (vajag precīzu kodolu)", un, noklikšķinot uz vienas, tas tiek pateikts statusa joslā. Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
- {{ui:Drawing}} prasa detaļu ar cietu ķermeni, un tas ir pelēks, kamēr skice ir atvērta.
- {{ui:Export}} vienumi ir pelēki montāžā: montāžas vēl nevar eksportēt. Aizveriet to vai rediģējiet detaļu, lai eksportētu.

## Skices problēmas

### Skice neļauj pievienot attiecību

"Nav attiecības, kas der šai atlasei. Atlasiet vienu vai divus vienumus (Shift+klikšķis pievieno)." Attiecībai vajag citu atlasi. Skatiet [Skices attiecības un izmēri](topic:sketch-relations), kas vajadzīgs katrai.

### "Pārmērīgi noteikts: … nav iespējams izpildīt visus. Atsaukt vai izdzēst vienu no tiem."

**Cēlonis:** jaunā attiecība vai izmērs ir pretrunā ar jau esošajiem. Skice nav pārvietojusies.

**Labojums:** {{key:Mod+Z}} vai izdzēsiet vienu no sarkanajiem vienumiem labā paneļa sarakstā (izvēlieties blakus **Dzēst**).

### "Pārmērīgi noteikts: … jau ir izrietošs. Izdzēsiet to."

**Cēlonis:** attiecība nedod nekā jauna: citas jau to nosaka (piemēram, paralēlisms divām taisnstūra malām vai izmērs, kas jau ir fiksēts). Šajā versijā nav vadītu izmēru.

**Labojums:** izdzēsiet to. Funkcija tik un tā tiek izveidota, ar brīdinājumu.

### "Šos vienumus nevar kopā izmērīt."

Jūs noklikšķinājāt, piemēram, uz punkta un riņķa. Izmēriet līdz riņķa centra punktam.

### "Noapaļojumam vajag stūri, kur tieši divas līnijas saskaras." / "Šis rādiuss ir par lielu šīm līnijām."

Noklikšķiniet tieši uz diviem cieto līniju stūra punkta. Izmantojiet mazāku rādiusu, nekā pieļauj īsākā līnija.

### Ģeometrija atlec atpakaļ, kad to velkat

Velkšana pārtrauktu attiecību vai izmēru, tāpēc PartCraft to atgriež. Pārvietot var tikai zilu (nepilnīgi noteiktu) ģeometriju.

### "Šo skici nevar atvērt: Vajag Extrude2, kas neizdodas."

Skice atrodas uz funkcijas virsmas, kas nav izveidota. Vispirms salabojiet šo funkciju, atceliet tās apslēpšanu vai virzieties uz priekšu.

## Funkciju problēmas

| Ziņojums | Cēlonis | Labojums |
|---|---|---|
| "Vispirms izveidojiet skici: izvēlieties plakni, Skice, zīmējiet slēgtu profilu, Iziet." | Nav neizmantotas skices ar līknēm, un neviena nav atlasīta | Uzzīmējiet skici vai atlasiet vēsturē skici, ko izmantot |
| "Skicē nav slēgta profila, ko izvilkt." (vai "ko apgriezt") | Nav slēgtas cilpas no cietām līnijām | Aizveriet spraugas; atgrieziet konstrukcijas līnijas ar {{key:Q}} |
| "Profils ir atvērts: gals punktā (x, y) nav nekam pievienots." | Sprauga šajā punktā | Atveriet skici, velciet galu uz kaimiņa, lai tas piespraustos |
| "Profils sazarojas punktā (x, y): tur saskaras vairāk nekā divi gali." | Trīs vai vairāk līniju saskaras vienā punktā | Izdzēsiet papildu līniju vai pārslēdziet to uz konstrukciju |
| "Slēgtai cilpai vajag vismaz trīs malas vai līkni." | Divas līnijas uz priekšu un atpakaļ | Pārzīmējiet cilpu |
| "Caur visu paredzēts izgriezumiem. Izvirzījumam izmantojiet dziļumu." | Izvirzījums iestatīts uz Caur visu | Iestatiet Beigas uz Aklu vai Vidusplakni |
| "Skices šajā pusē nav, ko izgriezt. Izmēģiniet otru virzienu." | Izgriezums ir vērsts prom no materiāla | Atzīmējiet Mainīt virzienu |
| "Vēl nav, ko izgriezt." / "Vēl nav, ko urbt." | Pirms šīs funkcijas nav cieta ķermeņa | Vispirms izveidojiet izvirzījumu vai pārvietojiet funkciju uz leju |
| "Zīmējiet centrālo līniju (konstrukcijas līniju) skicē, ap kuru apgriezt." | Apgriešana bez ass | Pievienojiet centrālo līniju vai izvēlieties līniju sadaļā Ass |
| "Profils šķērso asi. Turiet to vienā centrālās līnijas pusē." | Profils abās ass pusēs | Pārzīmējiet pusi no profila |
| "Novietojiet skices punktus, kur būs caurumi (Punkta rīks), tad izveidojiet caurumu." | Skicē nav brīvu punktu | Pievienojiet punktus ar {{key:P}} |
| "Paplašinātajam urbumam jābūt platākam par caurumu." | Paplašinājuma ⌀ nav lielāks par Diametru | Padariet paplašinājumu platāku |
| "Paplašinātajam urbumam jābūt seklākam par caurumu." | Paplašinājums dziļāks par aklu caurumu | Padariet to seklāku vai caurumu dziļāku |
| "Izvēlieties kopējamās funkcijas." | Raksts vai spogulis bez atzīmētām funkcijām | Atzīmējiet funkciju zem Kopējamās funkcijas |
| "Extrude2 nav cieta ķermeņa, ko kopēt." | Kopējamā funkcija neizdevās vai ir izslēgta | Salabojiet vai atceliet apslēpšanu |
| "Vajag Sketch3, kas neizdodas." | Funkcija, no kuras tā ir atkarīga, nav izveidota | Salabojiet funkciju, ko tas nosauc |
| "Virsma, uz kuras tā atrodas, ir pazudusi (Extrude1 nav izveidots)." | Skices virsma vairs neeksistē | Salabojiet šo funkciju vai izdzēsiet skici un zīmējiet atkal |
| "Pēc šī no detaļas nekas nav palicis." | Izgriezums noņēma visu materiālu | Pārbaudiet izgriezuma izmēru un virzienu |
| "Cietā ķermeņa kodols nevarēja izveidot šo (…)." vai "Cietā ķermeņa kodols nevarēja apvienot šo ar korpusu." | Kodols noraidīja ģeometriju | Atsaukt vai nedaudz mainiet izmērus; precīzi saskaroties virsmām, tas var izraisīt |
| "Izvilkums: vēl nav izveidots. Tam vajag precīzu kodolu, kuru šai PartCraft versijai nav." (arī Pārejas virsma, Ribas un citas) | Funkcija, kas izveidota agrākā versijā un ko var izveidot tikai precīzs kodols. Tā paliek vēsturē un tiek saglabāta atpakaļ nemainīta | Apslēpiet vai izdzēsiet; skatiet [Kas vēl nav izveidots](topic:not-built-yet), kas darāms tā vietā |
| "5 mm apaļojums šeit neietilpst (…)." / "2 mm nošķelums …" | Izmērs ir par lielu virsmai blakus malai, vai stūri nevar saplūdināt | Mazāks izmērs vai mazāk malu katrā funkcijā |
| "Noapaļojums: šajā versijā tikai taisnas malas starp divām plakanām virsmām (tīkla kodols tās veido). Noapaļojiet vai nošķeliet izliektās malas skicē." (arī Nošķelums) | Atlasītā mala ir apaļa, piemēram, cauruma mala, vai atrodas uz izliektas virsmas | {{ui:Pick edges}} un noņemiet to; noapaļojiet vai nošķeliet šo stūri skicē |
| "Noapaļojums, kura rādiuss mainās gar malu: vēl nav izveidots (tam vajag precīzu kodolu). Norādiet vienu rādiusu." | Atzīmēts **Mainīgs rādiuss** | Noņemiet atzīmi un norādiet vienu rādiusu |
| "Noapaļojums ar tīkla kodolu: kur noapaļotās malas saskaras, tās tiek nošķeltas, nevis saplūdinātas." (⚠, brīdinājums) | Atlasītās malas saskaras stūrī; noapaļojumi tur veido asu kroku | Nav ko labot: detaļa ir izveidota. Noapaļojiet mazāk malu, ja kroka ir svarīga |
| "Mala, ko tas noapaļo, ir pazudusi: mala starp Extrude1 un Cut2." | Iepriekšēja izmaiņa noņēma malu | {{ui:Pick edges}}, noņemiet sarkano malu, atlasiet jauno |
| "Atlasiet malas skatā, pēc tam pievienojiet tās." | Noapaļojumam vai nošķelumam nav malu | {{ui:Pick edges}} |
| "Atlasiet virsmas, ko noņemt (atvērtas), pēc tam izveidojiet čaulu." | Čaulai nav atvērtu virsmu | {{ui:Pick faces}} |
| "Čaulu nevarēja izveidot ar šo biezumu (…)." | Siena ir biezāka par plānu detaļas daļu vai noapaļojuma rādiusu | Plānāka siena vai lielāki noapaļojumi |
| "Čaula: šajā versijā tā atver tikai plakanas virsmas (tīkla kodols to veido)." | Atvērta virsma ir izliekta | {{ui:Pick faces}} un noņemiet to; atveriet tikai plakanas virsmas |
| "Slīpums: šajā versijā tikai plakanas virsmas (tīkla kodols to veido)." | Slīpota virsma ir cilindrs, konuss vai brīvas formas virsma | Noņemiet to; slīpojiet tikai plakanas virsmas |
| "Virsma, ko tā atver, ir pazudusi (…)." | Iepriekšēja izmaiņa noņēma virsmu | {{ui:Pick faces}} vēlreiz |
| "Fillet1 maina korpusa malas vai sienas; to nevar kopēt. …" | Raksts vai spogulis kopē noapaļojumu, nošķelumu vai čaulu | Noņemiet atzīmi; vispirms veidojiet rakstu no izgriezumiem, pēc tam noapaļojiet |
| "Tā atrodas uz virsmas, ko var atrast tikai precīzs kodols: šajā versijā vēl nav izveidots." | Skice uz virsmas, ko tīkla kodols nevar atrast, piemēram, izveidota agrākā versijā | Zīmējiet uz pamatplaknes vai izvilkuma plakanas virsmas un novietojiet ar izmēriem |
| "Tā izmanto virsmu vai malu no cietā ķermeņa, ko var atrast tikai precīzs kodols: šajā versijā vēl nav izveidots." | Atsauces plakne, ass vai punkts uz cietā ķermeņa virsmas vai malas | Izveidojiet to no pamatplaknēm, skices punktiem vai koordinātēm |
| "Izspiešana līdz virsmai, nākamajai virsmai vai virsotnei: vēl nav izveidots (tam vajag precīzu kodolu)." / "Konuss: vēl nav izveidots (tam vajag precīzu kodolu)." | Beigu nosacījums vai konuss, ko izveido tikai precīzs kodols | Izmantojiet Aklo vai Vidusplaknes dziļumu, ko izmērāt; atstājiet Konusu 0 |

## Atlases problēmas

- "Šī virsma ir izliekta. Atlasiet plakanu virsmu vai plakni, lai zīmētu." Skicēm vajag plakanu virsmu. Zīmējiet uz pamatplaknes un novietojiet skici ar izmēriem.
- Virsma saka "Fiksēta, kur atlasīta": tā netika izveidota ar skices malu (piemēram, rakstu kopijas virsma), tāpēc skice uz tās paliek vietā, kad detaļa mainās.
- Malas ir grūti trāpīt: tuviniet. Mala uzvar blakus esošo virsmu, kad rādītājs ir tieši uz tās.

## Failu problēmas

| Ziņojums | Labojums |
|---|---|
| 'PartCraft atver savus .partcraft.json failus, eksportus no CadCraft makro SolidWorks (.cadcraft-sw.json) un STEP failus. "bracket.igs" nav neviens no tiem.' | Atpazīti ir tikai šie faili (un STL, OBJ un 3MF tīkli, kā arī `.3dm` faili) |
| '"part.stp" nav STEP fails (tas nesākas ar ISO-10303-21).' | Fails nav STEP teksts |
| "Šis STEP fails ir par lielu (virs 60 MB), lai to importētu šeit." | Vienkāršojiet to avotā |
| "Šis fails ir par lielu, lai būtu PartCraft detaļa." jūsu pašu saglabātā detaļā | Liels STEP cietais ķermenis, kas importēts agrākā versijā, padarīja detaļas failu lielāku par 50 MB. Izmantojiet agrāku kopiju bez tā |
| "Šis fails ir par lielu, lai būtu PartCraft detaļa." | Fails ir lielāks par 50 MB; tas nav PartCraft fails |
| "Šis nav PartCraft fails (tas nav JSON)." / "Šis nav PartCraft fails." | Fails ir bojāts vai pieder citai programmai |
| "Šo failu saglabāja jaunāks PartCraft (faila versija …); šis lasa versiju …" | Atveriet to jaunākajā PartCraft |
| "Extrude2: dziļums ir nederīgs." (vai cita vērtība) | Fails ir rediģēts ar rokām vai bojāts. Izmantojiet agrāku kopiju |
| Ievietošana montāžā saka "Part1.partcraft.json nav cieta ķermeņa, ko ievietot." | Detaļas failā nav cieta ķermeņa. Atveriet, izveidojiet cietu ķermeni, saglabājiet un ievietojiet atkal |

**Mans saglabātais fails nav tur, kur gaidīju.** Saglabāšana ir lejupielāde: meklējiet pārlūka lejupielāžu mapē vai atveriet lejupielāžu sarakstu no pārlūka rīkjoslas. Skatiet [Kur nonāk jūsu faili](common:your-files).

**Atvēru detaļu, bet montāža joprojām ir ekrānā.** Detaļa ielādējās aiz montāžas. Izvēlieties {{ui:Close}}, lai aizvērtu montāžu un redzētu detaļu. Aizveriet montāžas pirms detaļu failu atvēršanas.

## Rasējuma problēmas

| Ziņojums | Labojums |
|---|---|
| "Vispirms izveidojiet cietu ķermeni, pēc tam veidojiet tā rasējumu." | Vispirms izveidojiet detaļu |
| "Lapā nav vietas: detaļa. Padariet detaļu mazāku vai noņemiet skatu." | Mazāks **Detaļas rādiuss** vai **Detaļas mērogs**, vai noņemiet griezumu |
| "Detaļa tiek ņemta no priekšējā, augšējā, labā vai griezuma skata." | Noklikšķiniet uz viena no šiem skatiem |
| "Noklikšķiniet uz viena no skatiem." | Klikšķis bija uz tukša papīra |
| "Pozīcijai vajag vismaz vienu datuma atsauci." un citi rāmja ziņojumi | Iestatiet datumus, ko paneļis prasa, vai izvēlieties citu raksturlielumu |
| "Rasējuma skatus nevarēja izveidot: …" | Atsaukt pēdējo izmaiņu. Ja tas atkārtojas, saglabājiet, pārlādējiet un atveriet detaļu atkal |

## Montāžas problēmas

| Ziņojums | Labojums |
|---|---|
| "Vispirms izveidojiet cietu ķermeni, pēc tam ievietojiet to montāžā." | Detaļai vēl nav cieta ķermeņa |
| "Vispirms ievietojiet otru detaļu (Pievienot kopiju, Ievietot vai Rediģēt › Dublēt)." | Savienojumam vajag divas detaļas |
| "Atlasiet virsmu citā detaļā." | Abām savienojuma virsmām jābūt uz dažādām detaļām |
| "Virsma ir izliekta. Atlasiet plakanu virsmu …" | Savienojumi sākas no plakanām virsmām. Caurumam vai rotācijas asij tad izmantojiet **Centrēt uz** |
| "Bracket2 nav savienots ar iezemēto detaļu, tāpēc tas paliek tur, kur tika novietots." | Pievienojiet savienojumu no tā uz novietotu detaļu |
| "Revolute3 noslēdz cilpu, kas nevar noslēgties: tā ir nobīdīta par 2.000 mm. Pārbaudiet cilpas savienojumu virsmas, nobīdes un ierobežojumus." | Detaļas nevar visas saskarties: pārbaudiet garumus, katra savienojuma izmantotās virsmas, nobīdes (virsmu pēc virsmas sakrautām detaļām jāsakrīt dziļumā) un ierobežojumus; vai noņemiet vienu savienojumu no cilpas |
| "Virsma, ko izmanto šis savienojums, ir pazudusi no Bracket." / "Ass, ko izmanto šis savienojums, ir pazudusi no Bracket." | Detaļa tika rediģēta. Noņemiet savienojumu un veidojiet to atkal |
| "Ass iet gar virsmu, tāpēc tā nevar noteikt savienojuma centru." | Izvēlieties asi, kas šķērso virsmu, vai "Virsmas pašas sākumpunkts" |
| "Montāžā paliek vismaz viena detaļa. Tā vietā aizveriet to." | Izmantojiet {{ui:Close}} |

**Detaļas ir savienotas, bet nepareizā vietā.** Iestatiet **Centrēt uz** abām savienojuma pusēm uz caurumiem vai rotācijas asīm, kurām vajadzētu sakrist, pēc tam pielāgojiet **Leņķi (°)** un **Nobīdi (mm)**.

## Tas ir lēni

- Modelējot iestatiet **Līknes** uz Parasti vai Rupji; pirms eksporta pārslēdzieties uz Smalki.
- Lieli rakstu skaitļi (simtiem kopiju) prasa laiku, lai pārbūvētu katrā izmaiņā. Apslēpiet rakstu, kamēr strādājat pie citām funkcijām.
- Sadursmju un kustības pārbaude salīdzina katru detaļu pāri; lielas montāžas aizņem ilgāk.
- Aizveriet citas smagas cilnes. PartCraft darbojas uz jūsu datora procesora un grafikas.

## Joprojām iestrēdzis

Vispirms saglabājiet failu ({{key:Mod+S}}), pēc tam pārlādējiet lapu un atveriet to atkal. Ja funkcija joprojām neizdodas, atlasiet to, izlasiet ziņojumu un izmēģiniet {{key:Mod+Z}}, lai atgrieztos pie pēdējā labā stāvokļa.
