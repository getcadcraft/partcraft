---
title: Vizato skicën e parë
summary: Hap një skicë mbi një planimetri ose sipërfaqe të sheshtë, vizato vija, drejtkëndësha, rrathë, harqe, pika dhe vija qendrore, rrumbullako një qoshe, përzgjidh, zvarrit dhe fshi.
keywords: skicë, vizato, vijë, drejtkëndësh, rreth, hark, pikë, vijë qendrore, ndërtim, rrumbullakim, rrumbullakim skice, rrumbullako qoshen, ngjitje, përzgjidh, dritare, zvarrit, profil
from: 28be7436
---

Çdo trup fillon si një skicë: një vizatim i sheshtë mbi një planimetri. Ky udhëzues mbulon mjetet e vizatimit. Fiksimi i skicës me lidhje dhe përmasa është në [Përcakto plotësisht një skicë](topic:relations-dimensions).

## Fillo një skicë

Mund të skicosh mbi një planimetri bazë ose mbi çdo sipërfaqe të sheshtë të pjesës.

1. Zgjidh ku të skicosh:
   - një planimetri bazë: kliko **Front plane**, **Top plane** ose **Right plane** në histori, ose kliko planimetrinë në pamje;
   - një sipërfaqe e sheshtë: kliko sipërfaqen në pamje. E gjithë sipërfaqja theksohet.
2. Zgjidh {{ui:Skica}} në shiritin e veglave ose shtyp {{key:S}}. (Me një sipërfaqe të zgjedhur mund të zgjedhësh gjithashtu {{ui:Skicë mbi këtë faqe}} në panelin e djathtë; me një planimetri, {{ui:Skicë mbi të}}.)

Pamja kthehet drejt planimetrisë, mjetet e skicës shfaqen në shiritin e veglave dhe mjeti Vija është gati. Nëse shtyp {{ui:Skica}} pa zgjedhur asgjë, shfaqen planimetritë bazë dhe shiriti i gjendjes thotë "Kliko një planimetri ose një sipërfaqe të sheshtë për të skicuar. Esc ndalon."

:::note
Një sipërfaqe e lakuar nuk mund të mbajë një skicë: "Kjo sipërfaqe është e lakuar. Zgjidh një sipërfaqe të sheshtë ose një planimetri për të skicuar mbi të."
:::

**Një skicë mbi një sipërfaqe ndjek atë sipërfaqe.** Nëse sipërfaqja u krijua nga një skaj skice ose nga fundi i një ekstrudimi, skica e re zhvendoset kur ndryshon veçoria (një zhytje më e thellë e merr me vete skicën në fundin e saj). Nëse paneli thotë se sipërfaqja është "Fiksuar aty ku u zgjodh", skica mbetet aty ku është sipërfaqja tani.

## Mjetet e vizatimit

Çdo mjet ka një buton në shiritin e veglave dhe një tast. Zgjidh të njëjtin buton përsëri, shtyp {{key:S}}, ose shtyp {{key:Esc}} për t'u kthyer te Përzgjidh.

| Mjeti | Tasti | Si të vizatosh |
|---|---|---|
| {{ui:Vija}} | {{key:L}} | Kliko fillimin, pastaj kliko çdo pikë të radhës. Vijat lidhen njëra pas tjetrës. Mbyll zinxhirin me {{key:Esc}}, {{key:Enter}}, një klik me butonin e djathtë ose një klik të dyfishtë. Klikimi mbi një pikë ekzistuese e mbyll gjithashtu |
| {{ui:Drejtkëndësh}} | {{key:R}} | Kliko një qoshe, pastaj qoshen e kundërt. Merr katër vija të lidhura në qoshe, dy horizontale dhe dy vertikale |
| {{ui:Rreth}} | {{key:C}} | Kliko qendrën, pastaj një pikë në rreth |
| {{ui:Hark}} | {{key:A}} | Kliko qendrën, pastaj fillimin, pastaj fundin. Harku shkon në drejtimin që lëviz treguesi rreth qendrës |
| {{ui:Pikë}} | {{key:P}} | Kliko. Një pikë e vetme shënon qendrën e një vrime për {{ui:Vrimë}} |
| {{ui:Vija qendrore}} | {{key:N}} | Si një vijë, një segment në çdo herë. Vizatohet me pika; është gjeometri ndërtimi, e përdorur si bosht rrotullimi ose referencë |
| {{ui:Rrumbullakim}} | {{key:F}} | Kliko një qoshe ku takohen dy vija, shkruaj rrezen, shtyp {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Kliko pikat nëpër të cilat kalon kurba; {{key:Enter}} mbaron, një klik mbi pikën e parë e mbyll. Shih [Spline, shkurtim, ofset dhe mjete të tjera skice](topic:sketch-tools) |
| {{ui:Shkurto}} | {{key:T}} | Kliko pjesën e kurbës që do të hiqet, deri te kryqëzimet më të afërta |
| {{ui:Përmasë}} | {{key:D}} | Shih [Përcakto plotësisht një skicë](topic:relations-dimensions) |

Ndërsa vizaton, një kutizë e vogël pranë treguesit tregon gjatësinë, madhësinë, diametrin ose rrezen.

### Shkruaj madhësinë ndërsa vizaton

Pas klikimit të parë të një vije, drejtkëndëshi, rrethi ose harku, mund të shkruash madhësinë në vend që ta klikosh. Shkrimi i një numri hap kutinë pranë treguesit me atë numër brenda:

| Mjeti | Kutitë ({{key:Tab}} shkon te tjetra) | Çfarë ndodh me {{key:Enter}} |
|---|---|---|
| {{ui:Vija}}, {{ui:Vija qendrore}} | Gjatësi, pastaj Këndi (°) nga boshti X i skicës | Vija vizatohet aq e gjatë, drejt treguesit ose në këndin e shkruar; zinxhiri vazhdon nga fundi i saj |
| {{ui:Drejtkëndësh}} | Gjerësi, pastaj Lartësi | Drejtkëndëshi vizatohet nga qoshja e parë drejt treguesit; një madhësi që nuk e shkrove vjen nga treguesi |
| {{ui:Rreth}} | Diametri | Rrethi vizatohet me atë diametër |
| {{ui:Hark}} | Rrezja pas qendrës, pastaj Këndi i harkut (°) pas fillimit | Fillimi shkon aq larg nga qendra; pastaj harku shkon aq larg rreth, në drejtimin që lëviz treguesi |

Çdo madhësi që shkruan bëhet një **përmasë drejtuese** në të njëjtin hap, kështu skica del me përmasa: {{key:Mod+Z}} heq formën dhe përmasat e saj së bashku. Klikimi në vend që të shtypësh {{key:Enter}} ruan atë që shkrove dhe e merr pjesën tjetër nga klikimi. {{key:Esc}} mbyll kutinë dhe kthehet te treguesi.

Fikeni këtë në {{ui:Cilësimet}} › {{ui:PartCraft}} › **Përmasa gjatë vizatimit** nëse dëshiron të vizatosh vetëm me klikime. Shih [Cilësimet e PartCraft](topic:settings).

{{ui:Më shumë}}, në fund të mjeteve të skicës, përmban spline-in me pika kontrolli, {{ui:Zgjat}}, {{ui:Ofset}}, {{ui:Pasqyrimi}}, {{ui:Shumëkëndësh}}, {{ui:Slot}}, modelet e skicës dhe {{ui:Projekto skajin}}: shih [Spline, shkurtim, ofset dhe mjete të tjera skice](topic:sketch-tools).

### Ngjitja

Ngjitja shton lidhje për ty, që skica të mbetet e lidhur kur lëviz:

- Te një **pikë fundi ose origjina**, shfaqet një katror i vogël. Pika e re bëhet bashkë me të.
- Mbi një **vijë, rreth ose hark**, shfaqet një kryq i vogël. Pika e re vendoset mbi atë kurbë.
- Një vijë brenda 3 gradëve nga horizontale ose vertikale ngjitet te ajo dhe merr një lidhje horizontale ose vertikale. Etiketa shfaq "H" ose "V".

Për të shmangur ngjitjen, zmadho që të klikosh më larg pikës ose kurbës.

## Rrumbullako një qoshe

1. Shtyp {{key:F}} ose zgjidh {{ui:Rrumbullakim}}.
2. Kliko pikën e qoshes ku takohen dy vija.
3. Hapet një kuti me një rreze të sugjeruar. Shkruaj rrezen dhe shtyp {{key:Enter}}.

Të dyja vijat shkurtohen dhe lidhen me një hark tangjent me një përmasë rrezeje. Mesazhe që mund të shohësh: "Një rrumbullakim kërkon një qoshe ku takohen saktësisht dy vija." dhe "Ajo rreze është shumë e madhe për këto vija."

:::tip
Rrumbullakimi i skicës rrumbullakos një qoshe të profilit, kështu ekstrudimi merr skaje vertikale të rrumbullakosura. Për të rrumbullakosur skajet e vetë trupit (për shembull skajet e sipërme të një pllake), përdor veçorinë {{ui:Rrumbullakim}} mbi pjesën: shih [Rrumbullako, pjerrëso dhe zbraz](topic:fillet-chamfer-shell). Në një skicë, Rrumbullakimi i shiritit të veglave është mjeti i skicës; mbi pjesën, është veçoria.
:::

## Gjeometria e ndërtimit

Vijat, rrethet dhe harqet e ndërtimit janë me pika dhe gri. Ato e udhëzojnë skicën, por nuk janë pjesë e profilit që ekstrudohet ose rrotullohet.

1. Përzgjidh vijat, rrethet ose harqet.
2. Shtyp {{key:Q}} ose zgjidh {{ui:Ndërtim}}. Shtypeni përsëri për t'i kthyer mbrapsht.

## Përzgjidh, zvarrit dhe fshi

Shtyp {{key:S}} (ose {{key:Esc}} derisa të mos jetë aktiv asnjë mjet) për Përzgjidh.

- Kliko një pikë, vijë, rreth, hark, simbol lidhjeje ose përmasë për ta përzgjedhur. {{key:Shift}}+klikim shton te përzgjedhja ose heq nga ajo. Në Windows dhe Linux {{key:Ctrl}}+klikimi bën të njëjtën gjë; në Mac, ⌘+klikim.
- Zvarrit në hapësirë boshe për të vizatuar një dritare përzgjedhjeje: përzgjidhet çdo gjë që është plotësisht brenda saj.
- Zvarrit një pikë ose një vijë për ta zhvendosur. Zgjidhësi mban çdo lidhje dhe përmasë ndërsa lëviz, kështu lëviz vetëm gjeometria e lirë. Zvarrit skajin e një rrethi për të ndryshuar rrezen e tij.
- Zvarrit numrin e një përmase për të zhvendosur etiketën.
- Shtyp {{key:Delete}} ose {{key:Backspace}}, ose zgjidh {{ui:Fshi}} në panelin e djathtë, për të fshirë përzgjedhjen. Fshirja e gjeometrisë fshin edhe lidhjet mbi të.

## Zmadho dhe lëviz pamjen në skicë

- Rrotullo rrotën për të zmadhuar te treguesi.
- Zvarrit me butonin e mesit ose të djathtë për të lëvizur pamjen.
- {{ui:Përshtat}} në shiritin e veglave ose në panelin e djathtë e përshtat skicën në pamje. Në një skicë tasti {{key:F}} është mjeti Rrumbullakim, jo Përshtat.

## Mbyll skicën

Zgjidh {{ui:Dil}} në shiritin e veglave ose {{ui:Dil nga skica}} në panelin e djathtë, ose shtyp {{key:Esc}} derisa skica të mbyllet. Çdo {{key:Esc}} fillimisht anulon atë që është në progres, pastaj kthehet te Përzgjidh, pastaj pastron përzgjedhjen, dhe i radhituri e mbyll skicën.

Skica mbetet e përzgjedhur, kështu {{ui:Ekstrudo}} ose {{ui:Rrotullo}} e radhës e përdor atë.

## Çfarë e bën një profil të mirë

{{ui:Ekstrudo}} dhe {{ui:Rrotullo}} përdorin **çdo lak të mbyllur** të vijave, rretheve, harqeve dhe spline-ve (jo të ndërtimit) të skicës. Lakët brenda lakeve bëhen vrima.

- Çdo skaj duhet të takojë saktësisht një skaj tjetër. "Profili është i hapur: një skaj te (12.5, 40) nuk është i lidhur me asgjë." tregon vendin.
- Asnjë tre skaje nuk duhet të takohen në një pikë: "Profili degëzohet te (0, 20): më shumë se dy skaje takohen aty."
- Pikat dhe gjeometria e ndërtimit injorohen nga profili.

Më pas: [Përcakto plotësisht një skicë me lidhje dhe përmasa](topic:relations-dimensions).

## Skicë nga një foto

**Veçori › Më shumë › Skicë nga një foto…** (ose grupi Skica në shiritin e pemës së veçorive) gjurmon një foto të një pjese të sheshtë mbi një sfond të thjeshtë — konturin dhe vrimat e saj — ose një vizatim me stilolaps në një skicë vijash, harkesh dhe rrethesh. Thuaj një gjatësi (gjerësinë, lartësinë ose anën më të gjatë) që skica të ketë madhësinë e duhur, kontrollo çfarë gjeti në pamjen paraprake, dhe zgjidh **Bëj skicën**; mund ta ekstrudosh edhe atë, në të njëjtin hap anulimi. Gjurmohet në këtë kompjuter. Rrezet e cepave kthehen brenda rreth 5 %, detajet prej një ose dy pikselësh humbin, dhe një foto e marrë me pjerrësi ose me hije mbi pjesën nuk drejtohet: fotografo pjesën drejt përballë, me dritë të barabartë.
