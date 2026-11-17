---
title: Pārbaudiet spriegumu un novirzi (Simulācija)
summary: Izvēlieties materiālu, nofiksējiet virsmas, pievienojiet spēkus, spiedienus vai detaļas paša svaru, atrisiniet un nolasiet fon Mīzesa spriegumu, pārvietojumu, drošības koeficientu, reakcijas un dabiskās frekvences uz modeļa, kopā ar to, ko metode var un nevar pateikt.
keywords: simulācija, FEA, tiešraides analīze, atjaunot rediģējot, salauzt, kas salūst pirmais, slodzes koeficients, nelineārs, plastiskums, plūšana, plūšanas robeža, plastiskā deformācija, bilineārs, kontakts, kontakta pāris, soda metode, saistīts, bezberzes kontakts, CalculiX, .inp, .frd, galīgo elementu, spriegums, deformācija, fon Mīzesa, pārvietojums, novirze, drošības koeficients, drošības faktors, reakcija, slodze, spēks, spiediens, gravitācija, pašsvars, fiksēts, bezberzes, balsts, ierobežojums, materiāls, tērauds, alumīnijs, titāns, ABS, PLA, neilons, dabiskā frekvence, modālā, vibrācija, tīkls, elementa izmērs, tetraedrs, tetraedri, tīkls no tetraedriem, voksels, tīkla kvalitāte, galvenais spriegums, ekvivalentā deformācija, kļūdas novērtējums, izliektas virsmas, caurumi, noapaļojumi, adaptīvs, adaptīvā precizēšana, automātiskā precizēšana, h-adaptīvs, konverģence, tīkla konverģence, precīza virsma, sfēra, konuss, tors, splains, brīvforma
from: 6f2fdec1
---

Simulācijas darbvieta atbild uz jautājumu "vai tā saliecas vai salūst zem šīs slodzes?" detaļai, ko modelējat. Tā ir **lineāra statiska** analīze (mazas novirzes, materiāls paliek elastīgs) vai **dabiskās frekvences** analīze, kas atrisināta uz kvadrātisku tetraedru tīkla, kas seko detaļas virsmām (vai, ja izvēlaties, uz maziem vienādiem kubiem). Tā darbojas ar nosauktajām virsmām, ko tīkla kodols dod detaļai (skatiet [Tīkla kodols](topic:solid-kernels)).

Izvēlieties **Simulācija** rīkjoslas kreisajā pusē esošajā lodziņā **Darbvieta**. Jūsu detaļa netiek mainīta; pētījums tiek saglabāts detaļas failā, un katru izmaiņu var atsaukt.

## Pētījuma sagatavošana

1. Labajā panelī nospiediet **Jauns pētījums**.
2. Izvēlieties **Materiālu**. Panelī redzama tā stingums (E), Puasona koeficients, blīvums un plūšanas robeža. Vērtības ir tipiskas uzziņas vērtības; jūsu piegādātāja sertificētās vērtības var atšķirties.
3. Izvēlieties **Tīklu**:
   - **Tetraedrisks (precīzs)**, noklusējums: 10 mezglu tetraedri, kuru ārējās virsmas atrodas uz detaļas virsmām, ar liektām malām caurumos, noapaļojumos un citās apaļās virsmās. Mezgli uz plakanām, cilindriskām, konusveida, sfēriskām un toroidālām virsmām, rotētām un izvilktām virsmām un brīvformas (B-splain) virsmām atrodas uz precīzas virsmas; jebkurš cits virsmas veids seko savam attēlojuma tīklam, un rezultātu tabulā ir rādīts, cik virsmu tā darīja. Tīkls pats par sevi tiek padarīts smalkāks netālu no izliektām virsmām, plāniem sieniņiem un asām malām.
   - **Vokseļu kubi (ātrs)**: detaļa, aizpildīta ar vienādiem kubiem. Ātrs, bet izliektas virsmas kļūst par pakāpieniem. Pētījumi, kas saglabāti, pirms tetraedriskais tīkls pastāvēja, to saglabā.
4. Atstājiet **Elementa izmērs** tukšu automātiskam izmēram (aptuveni 12,000 tetraedru vai 20,000 kubu), vai ierakstiet vienu milimetros. Panelī redzams aptuvenais elementu skaits, pirms tiek pievienotas smalkākās vietas. Ar tetraedriem **Mazāki elementi uz izliektām virsmām** (pēc noklusējuma ieslēgts) precizē caurumus un noapaļojumus, kur spriegums parasti ir lielākais.

### Automātiska precizēšana

Ar tetraedriem statiskais vai izliekšanās pētījums (bez termiskās slodzes), dabiskās frekvences pētījums un stacionārs termiskais pētījums piedāvā **Automātiski precizēt (adaptīvi)**. Atzīmējiet to un iestatiet:

- **Mērķa kļūda (%)**: risināšana apstājas, kad aplēstā kļūda ir zem tās (sākumā 1 %).
- **Lielākais ciklu skaits**: visvairāk risinājumu, ko tas drīkst veikt (sākumā 5, ne vairāk kā 10).

Katrs cikls atrisina, atrod elementus ar lielāko aplēsto kļūdu, sadala tos (un tik kaimiņus, cik vajadzīgs, lai tīkls paliktu vesels) un risina vēlreiz. Jauni mezgli uz izliektām virsmām tiek novietoti uz precīzas virsmas. Rezultātos tiek rādīta tabula un grafiks ar katru ciklu: elementi, nezināmie, aplēstā kļūda un maksimālais spriegums (vai temperatūra) un pārvietojums (vai siltuma plūsma), kā arī rindiņa, kas skaidro, kāpēc apstājās: mērķis sasniegts, cikli beidzās, nākamais tīkls būtu pārāk liels, vai cikls neizdevās (tad redzams pēdējais labais cikls).

Lasiet aplēsumu kā aplēsumu. Tas (Zienkiewicz–Zhu; salīdzinot ar precīzām atbildēm, tas rāda aptuveni 0.6 līdz 0.95 no patiesās kļūdas) mēra kļūdu visai **detaļai**, tāpēc spriegums caurumā vai noapaļojumā parasti vēl ir mazliet nenoteikts, kad aplēsums izskatās mazs: spriegumu koncentrācijai iestatiet mērķi zem 1 % un vērojiet, kā maksimums nostabilizējas no cikla uz ciklu. Asā iekšējā stūrī vai fiksētas virsmas malā patiesais spriegums ir bezgalīgs, tāpēc aplēsums tur nekad nesasniedz mērķi: cikli beidzas.

**Dabiskās frekvences un izliekšanās.** Dabiskās frekvences pētījumā aplēsums attiecas uz katru pieprasīto modi, katru skaitot vienādi; tabula un grafiks seko pirmajām divām frekvencēm. Detaļā tikai ar plakanām virsmām frekvence no cikla uz ciklu var tikai samazināties (katrs tīkls paglabā iepriekšējo); izliektas virsmas arī tuvojas savai patiesajai formai, kas var frekvenci nedaudz pārvietot jebkurā virzienā. Izliekšanās gadījumā aplēsums attiecas uz pirmspriegumu un izliekšanās modiem, un tabula seko slodzes koeficientiem. Pārbaudīts uz 100 × 10 × 10 mm tērauda stieņa: pirmā frekvence nostabilizējas no 812.4 līdz 811.9 Hz četros ciklos, 0.4 % zem Eilera–Bernulli (kas ignorē bīdi), un kolonnas slodzes koeficients ir 0.5 % robežās no Eilera.

## Turiet un slogojiet

Katram pētījumam vajadzīgs vismaz viens balsts un, spriegumam, viena slodze.

1. Rīkjoslā nospiediet {{ui:Fiksēts}}. Jaunais balsts ir atlasīts un gaida virsmas: noklikšķiniet uz virsmām, kas tiek turētas nekustīgas (noklikšķiniet uz virsmas vēlreiz, lai to noņemtu). Kad pabeidzat, nospiediet **Pabeigt atlasi** vai {{key:Esc}}. Zilie konusi atzīmē turētās virsmas.
2. Nospiediet {{ui:Spēks}} un noklikšķiniet uz virsmām, uz kurām darbojas spēks. Panelī ierakstiet **Kopējo spēku** ņūtonos un izvēlieties tā **Virzienu**: iekšā virsmā vai pa asi. Spēks tiek sadalīts pa atlasītajām virsmām proporcionāli laukumam. Oranži bultiņas to parāda.
3. Nospiediet {{ui:Spiediens}}, lai ievadītu spiedienu MPa (N/mm²), kas spiež atlasītajās virsmās; negatīvs spiediens velk.

Citi veidi ir panelī sarakstā **Pievienot**: **Bezberzes virsma** (virsma var slīdēt pa sevi, bet nevar attālināties no tās — izmantojiet to simetrijas plaknēm un gludiem balstiem) un **Gravitācija** (detaļas pašsvars, 9.81 m/s², virzienā, ko izvēlaties).

Balsts, kas atstāj detaļu brīvu slīdēt vai griezties, tiek noraidīts, norādot, kura kustība paliek brīva.

## Atrisiniet un nolasiet rezultātus

Nospiediet {{ui:Atrisināt}}. Darbs notiek fonā; **Apturēt** to atceļ. Pēc tam:

- Detaļa tiek krāsota pēc **fon Mīzesa sprieguma**; izvēlieties **Pārvietojumu** vai **Drošības koeficientu** sadaļā **Rādīt**. Legenda dod mērogu.
- Norādiet uz detaļu, lai nolasītu vērtības zem rādītāja.
- Atzīmējiet **Deformēta forma**, lai redzētu saliektu detaļu (kustība tiek palielināta ar **Mērogu**; īstā vērtība ir tabulā).
- Tabulā uzskaitīts lielākais spriegums un tā vieta, lielākais pārvietojums, mazākais **drošības koeficients** (plūšanas robeža ÷ fon Mīzesa spriegums; zem 1 materiāls plūst), pielietotā slodze un **reakcijas** balstos (tās līdzsvaro slodzi) un izmantotais tīkls.

**Dabiskajām frekvencēm** izvēlieties šo **Tipu**, iestatiet **Modu** skaitu un atrisiniet. Katrs modis rāda savu frekvenci un formu (formas tiek mērogotas uz 1 pie lielākās kustības).

Ja mainīsiet detaļu, rezultāti tiek atzīmēti kā novecojuši: atrisiniet vēlreiz.

## Plūšana un kontakts (nelineārie pētījumi)

Vēl divi pētījumu veidi iet tālāk par "materiāls paliek elastīgs":

- **Nelineārs (materiāls plūst)** seko materiāla taisnajai līnijai līdz tā plūšanas spriegumam, pēc tam lēzenākai slīpei (**Slīpe pēc plūšanas**, 1 % no E, ja atstāts tukšs). Slodze tiek pielikta **Slodzes soļos**; solis, kas neizlīdzinās, pats par sevi tiek pārdalīts uz pusēm. Rezultātos grafikiem pievieno **Plastisko deformāciju** un norāda, cik daļa slodzes tika pārnesta. Ja solis joprojām nevar nostabilizēties, pētījums apstājas pie pēdējā labā soļa un ⚠ Problēmu panelis norāda, kur: detaļa tur ir zaudējusi izturību (sabrukums) vai soļi ir pārāk lieli.
- **Kontakts starp daļām** ļauj atsevišķām detaļas daļām spiest viena otru. Pievienojiet **Kontakta pāri**, izvēlieties A puses virsmas (virsmas, kas spiež) ar {{ui:Atlasīt virsmas}}, tad B pusi ar {{ui:Izvēlēties B puses virsmas}}. **Bezberzes** daļas spiež, slīd un atdalās; **saistītas** daļas paliek sastingušas. Katra daļa tiek tīklota atsevišķi, tāpēc neliela sprauga starp tām ir normāla. Kontakts ir soda metode: daļas nedaudz iegrimst viena otrā (**soda koeficients** × E ÷ elementa izmērs nosaka kontakta stingumu). Tabulā rādīta lielākā iegrimšana, un Problēmu panelis brīdina, kad tā ir vairāk nekā 1 % no elementa izmēra: palieliniet koeficientu vai izmantojiet mazākus elementus.

Abi izmanto tetraedrisko tīklu. Berze, lielas slīdēšanas un lielas rotācijas šeit nav atrisinātas.

## Palaist CalculiX

**Eksportēt › CalculiX ievades fails (.inp)** (vai {{ui:Saglabāt CalculiX ievades failu (.inp)}} panelī) saglabā pētījumu kā ievades failu CalculiX, atsevišķai programmai, ko instalējat un palaižat paši: tas pats tīkls, materiāls, balsti, slodzes un kontakta pāri, mm, N un MPa. Palaidiet to, tad **Eksportēt › CalculiX rezultāti (.frd)** nolasa tā rezultātu failu atpakaļ uz to pašu tīklu un parāda pārvietojumu (un fon Mīzesa spriegumu, ja failā ir spriegumi). Ja starplaikā mainījāt detaļu vai elementa izmēru, tīkls vairs nav tas pats, un PartCraft to pasaka: saglabājiet jaunu ievades failu.

## Cik lielā mērā tam uzticēties

PartCraft pārbauda savu risinātāju pret rokas formulām (konsoles gala novirze PL³/3EI 1 % robežās, stieņa izstiepe PL/AE precīzi, konsoles pirmā frekvence 3 % robežās, spriegums ap caurumu plāksnē). Tomēr ņemiet vērā šīs robežas:

- **Tīkls.** Ar tetraedriem PartCraft pārbauda konsoles novirzi un lieces spriegumu (0.3 % robežās), spriegumu pie cauruma plāksnē (Kt, aptuveni 1 % robežās), biezu cauruli zem spiediena (Lamé, 0.3 % robežās) un pirmo frekvenci (0.4 % robežās). Tabulā rādīta **tīkla kvalitāte** (mazākais un lielākais leņķis starp elementu virsmām; zem aptuveni 10° elements ir vājš) un **aplēstā spriegumu kļūda**: ja tā ir vairāk nekā daži procenti, atrisiniet vēlreiz ar mazāku elementa izmēru vai ļaujiet **Automātiski precizēt** to izdarīt. Plāksnei ar caurumu un stieņam ar divām malas iegriezumiem automātiskā precizēšana tuvojās mācību grāmatas Kt 1 % robežās ar aptuveni sesto daļu nezināmo, kas būtu vajadzīgi, lai visu tīklu padarītu smalkāku. Ar vokseļu kubiem caurums vai noapaļojums ir pakāpiens kuba izmērā, tāpēc spriegums tur ir aptuvens.
- **Asiem iekšējiem stūriem un fiksētu virsmu malām nav patiesa maksimālā sprieguma.** Vērtība tur turpina augt, kamēr elementi kļūst mazāki. Lasiet spriegumus mazliet attālāk no šādām vietām vai noapaļojiet stūri modelī.
- **Rezultāti, ko lasīt.** Papildus fon Mīzesa spriegumam, pārvietojumam un drošības koeficientam tetraedru pētījums rāda **maksimālo un minimālo galveno spriegumu** (stiepe un spiede) un **ekvivalento deformāciju**. Atzīmējiet **Rādīt tīklu**, lai redzētu elementus.
- **Statiskie pētījumi ir lineāri un elastīgi.** Plūšanai un kontaktam izmantojiet augstāk minētos nelineāros pētījumu tipus; lielas novirzes un nogurums nav atrisināti. Siltums, termiskais spriegums un lineārā izliekšanās ir atsevišķi pētījumu tipi: skatiet [Siltums, termiskais spriegums un izliekšanās](topic:thermal-and-buckling).
- **Katrs materiāls ir vienāds visos virzienos.** 3D drukātas plastmasas ir vājākas pāri saviem slāņiem, bieži par trešdaļu vai vairāk.
- Šī ir laboratorijas versija: pārbaudiet detaļas, kas ir svarīgas, citā veidā.

## Atjaunot rediģējot (Live)

Atzīmējiet **Atjaunot, kamēr rediģēju** risināšanas blokā, un Simulācijas atbildes seko jūsu izmaiņām. Mainiet izmēru, slodzi, materiālu vai vidi, un uzreiz parādās **ātrā atbilde**, kas veidota ar elementiem, kas ir četras reizes lielāki par pētījuma elementiem; kad apstājaties uz brīdi (aptuveni sekundi), pētījuma pašu **precizēto atbildi** aizstāj ar to. Rezultāti norāda, ko skatāties ("Ātrā atbilde" vai "Precizētā atbilde") un elementa izmēru. Ātrā atbilde ir labi virzienam un lielumam: uz tērauda konsoles tā bija 1 % robežās pēc novirzes un aptuveni 4 % pēc sprieguma salīdzinājumā ar precizēto. Precizētajai atbildei uzticieties skaitļiem, ko izmantosiet. Statiskie, dabiskās frekvences, termiskie un izliekšanās pētījumi darbojas tā; Live ir skata iestatījums un netiek saglabāts detaļā. Risināšana, ko nospiežat pats, paliek kā ir līdz nākamajai izmaiņai.

## Noskaidrojiet, kas salūst pirmais (Salaušana)

Statiskam vai izliekšanās pētījumam nospiediet **Kas salūst pirmais?** blokā **Salaušana**. PartCraft mērogo pētījuma slodzes (spēkus, spiedienus un svaru kopā), līdz detaļa padodas, un sarakstā, sākot ar sliktāko, uzskaita **slodzes koeficientu līdz pirmajai plūšanai** (koeficients pie šodienas slodzēm, kad augstākais fon Mīzesa spriegums sasniedz materiāla plūšanas robežu, ar sarkanu marķieri vietā, kur tas notiek) un **slodzes koeficientu līdz izliekšanās** tiem pašiem balstiem un slodzēm. Koeficients 4.3 nozīmē, ka detaļa iztur 4.3 reizes savu slodzi, pirms plūst; **koeficients zem 1 nozīmē, ka tā jau padodas ar pašreizējo slodzi**, un tas parādās Problēmu sarakstā kā kļūda (vājākais atradums tiek rādīts kā piezīme pat tad, ja viss ir kārtībā). Koeficienti nāk no lineāra pētījuma uz tetraedriem jūsu elementa izmērā, tāpēc tie ir tikpat labi, cik šis pētījums: spriegums fiksētas virsmas vai asa stūra vietā nav patiesa maksimuma (skatiet zemāk), un plūšanas koeficients tur būs piesardzības pusē. Jūsu asistents var veikt to pašu pārbaudi ar rīku `break_run`.

## Saistītie

- [Siltums, termiskais spriegums un izliekšanās](topic:thermal-and-buckling)
- [Veidot formu no slodzēm (Ģeneratīvais)](topic:generative-design)
- [Mērīt attālumus, leņķus un masu](topic:measure)
- [Kas vēl nav izveidots](topic:not-built-yet)
