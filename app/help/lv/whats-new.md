---
title: Kas jauns versijās 0.8 un 0.8.1
summary: PartCraft 0.8 pievieno tiešo analīzi rediģēšanas laikā, pārbaudi Kas pirmais salūst?, pakļaušanās un kontakta pētījumus ar ievades failiem ārējam risinātājam, kustības pētījumus montāžām, virsmu darba vidi brīvformas virsmām, detaļas, kas izveidotas pēc fizikas Inženiera darba vidē, attēla pārvēršanu skicē, izdrukas eksportus, izvietotās loksnes uz G-kodu un rasējumus, kuros izmērīti caurumi. 0.8.1 novērš pilnekrāna kursora iesaldēšanos.
keywords: kas jauns, jaunumi, versiju piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, analīze tiešsaistē, atjaunot rediģējot, salauzt to, kas pirmais salūst, slodzes koeficients, nelineārs, plūstamība, plastiskā deformācija, kontakts, calculix, kustības pētījums, atstarpe, virsmas, nurbs, izlīdzināt, korpuss, zebra, inženieris, ģenerators, ģenerēta detaļa, skice no fotogrāfijas, mērogs drukāšanai, sadalīt drukāšanai, saraušanās, izvietotās loksnes, g-code, rasējums, izmērīt caurumus, asistents, mcp, valodas, rīkjoslas rindas
from: 62e4dce2
---

Šīs ir izmaiņas PartCraft 0.8 un 0.8.1 versijā, salīdzinot ar 0.7. Simulācija atbild, kamēr rediģējat, un norāda, kas pirmais salūst; montāžām ir kustības pētījumi, un jaunas darba vides veido brīvformas virsmas un detaļas, kas izmērītas pēc fizikas. 0.8.1 ir neliels labojumu izlaidums.

## Jauns

### Simulācija

- **Atjaunot, kamēr rediģēju.** Atzīmējiet {{ui:Atjaunot, kamēr rediģēju}} bloķī Atrisināt, un atbildes seko jūsu izmaiņām. Mainiet izmēru, slodzi vai materiālu, un uzreiz parādās ātra atbilde, aprēķināta ar elementiem, kas ir četras reizes lielāki; kad apstājaties apmēram uz vienu sekundi, pētījuma pašas precizētā atbilde aizstāj to. Rezultātos ir norādīts, kuru no abām jūs skatāties. Konsoles sijā ātrā atbilde bija līdz 1 % precīza attiecībā uz nobīdi un ap 4 % attiecībā uz spriegumu, salīdzinot ar precizēto. Skatiet [Pārbaudīt spriegumu un nobīdi](topic:simulation#update-while-you-edit-live).
- **Kas pirmais salūst.** Statiskam vai izliekšanās pētījumam {{ui:Kas pirmais salūst?}} bloķī **Salauzt to** mērogo slodzes, līdz detaļa padodas. Tas saraksta, sākot ar sliktāko, slodzes koeficientu līdz pirmajai plūstamībai (ar sarkanu marķieri, kur spriegums sasniedz maksimumu) un koeficientu līdz izliekšanās. Koeficients zem 1 nozīmē, ka detaļa jau padodas ar pašreizējo slodzi, un Problēmās tiek rādīta kļūda. Koeficienti nāk no lineāra pētījuma, tāpēc tie ir tikpat precīzi, cik pats pētījums. Skatiet [Pārbaudīt spriegumu un nobīdi](topic:simulation#find-out-what-breaks-first-break-it).
- **Plūstamība un kontakts.** Divi papildu pētījumu veidi: nelineārs, kurā materiāls seko savai taisnei līdz plūstamības spriegumam un pēc tam lēzenākam slīpumam, ar attēloto plastisko deformāciju; un kontakta pētījums, kurā atsevišķas daļas spiež viena otru (bez berzes) vai paliek saķērušās (saistītas). Slodžu solis, kas nevar nostabilizēties, vai daļas, kas iekļūst viena otrā pārāk dziļi, tiek rādītas Problēmu panelī. Berze, lielas slīdēšanas, lieli pagriezieni, lielas nobīdes un nogurums nav atrisināti. Skatiet [Pārbaudīt spriegumu un nobīdi](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ievades faili CalculiX.** {{ui:Eksportēt}} › {{ui:CalculiX ievades fails (.inp)}} saglabā pētījumu CalculiX, atsevišķai programmai, ko instalējat un palaižat paši; {{ui:Eksportēt}} › {{ui:CalculiX rezultāti (.frd)}} nolasa tās rezultātu failu atpakaļ uz to pašu tīklu. PartCraft nekad nepalaiž šo programmu, un tas par to paziņo, ja detaļa ir mainījusies kopš ievades faila saglabāšanas.

### Montāžas

- **Kustības pētījumi.** {{ui:Montāža}} › {{ui:Kustība}} vada viena savienojuma vērtību noteiktā laikā, ko norādāt (nemainīgs ātrums, izlīdzināts, sinusoīda vai uz priekšu un atpakaļ), novieto montāžu katrā solī ar tās savienojumiem un slēgtajām cilpām un ziņo, kas sadursies un cik tuvu daļas nonāk. {{ui:Pievienot punktu}} attēlo punkta pozīciju, ātrumu un paātrinājumu, savienojuma vērtību un atstarpi laikā; {{ui:Saglabāt CSV}} un {{ui:Saglabāt grafiku}} tos saglabā failos. Pēc {{ui:Palaist}} soļošana palaišanas joslā pārvieto montāžu uz jebkuru soli. Pētījuma iestatījumi tiek saglabāti montāžas failā. Ātrums un paātrinājums tiek aprēķināti no ierakstītajām pozīcijām, tāpēc, ja asa virsotne parādās zema, izmantojiet vairāk soļu. Skatiet [Pārbaudīt montāžu sadursmēm un kustībai](topic:check-assembly#a-motion-study).

### Virsmas un detaļas no fizikas

- **Virsmu darba vide.** Izvēlieties {{ui:Virsmas}} lodziņā {{ui:Darba vide}}, lai blakus detaļai izmantotu NURBS līknes un virsmas: {{ui:Līkne}}, {{ui:Pārejas virsma}}, {{ui:Izvilkums}}, {{ui:Saskaņot}} un {{ui:Zebra}}, ar nepārtrauktību (G0, G1 vai G2), kas mērīta uz precīzām virsmām, un malu, kas ir sliktāka par pieprasīto, uzskaitītu Problēmās ar Saskaņošanas labojumu. {{ui:Izlīdzināt}} mēra korpusa līnijas, meklējot pārlūzumus un līknuma lēcienus, un pārveido nelīdzenās līnijas jūsu pielaidē. Virsmas tiek saglabātas detaļas failā un nemaina detaļas elementus. Skatiet [Brīvformas virsmas (NURBS)](topic:nurbs-surfaces).
- **Inženiera darba vide.** Izvēlieties {{ui:Inženieris}} darba vides pārslēdzējā, izvēlieties ģeneratoru un noklikšķiniet {{ui:Jauns}}: skripts izmēro detaļu pēc tā, kas tai jādara (siltuma pārnese, plūsmas, spiediens, materiāls, drukas process), izmantojot mācību grāmatas formulas, un to uzbūvē, pēc tam atdod izmantotos skaitļus ar to avotiem, tās ražošanas pārbaudes un failus analīzes rīkiem. Tie paši ievaddati dod to pašu detaļu jebkurā datorā. Ģenerators tiek glabāts detaļā, un detaļas atvēršana nekad neizpilda skriptu. Skatiet [Detaļas no fizikas: ģeneratori](topic:engineer-generators) un [Ģeneratora izveide](topic:write-a-generator).

### Skices, rasējumi un izgatavošana

- **Skice no fotogrāfijas.** {{ui:Elementi}} › {{ui:Vairāk}} › {{ui:Skice no fotogrāfijas…}} izseko plakanas detaļas attēlu uz vienkārša fona (kontūra un caurumi) vai zīmuļa zīmējumu līnijās, lokos un riņķos. Ievadiet vienu garumu, pārbaudiet priekšskatījumu un izveidojiet skici. Skatiet [Skices pamati](topic:sketch-basics#a-sketch-from-a-photo).
- **Mērogs un sadalījums drukāšanai.** {{ui:Eksportēt}} › {{ui:Mērogs drukāšanai (STL vai 3MF)…}} mērogo pa asīm, nemainot detaļu, piemēram, pēc saraušanās pielaides. {{ui:Eksportēt}} › {{ui:Sadalīt drukāšanai (zip ar daļām)…}} sagriež detaļu, kas ir par lielu jūsu drukas platformai, numurētās daļās, kas savienotas ar tapām, atslēgām, astu savienojumiem, tapu caurumiem vai magnētu ligzdām. Skatiet [Drukāt 3D](topic:print-3d).
- **Izvietotās loksnes uz G-kodu.** {{ui:Eksportēt}} › {{ui:Izvietotās loksnes uz G-kodu}} nolasa izvietotu DXF un izveido vienu programmu katrai loksnei caur izvēlēto postprocesoru: vispirms caurumi un izgriezumi, pēc tam kontūras. Tas neplāno ieejas līnijas, griešanas secību vai kopīgās malas. Skatiet [Izvietot plakanas detaļas uz loksnēm](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rasējumi, kas paši dara vairāk.** {{ui:Lapa}} › {{ui:Automātiski}} izvēlas mazāko A formāta lapu, kas satur skatus lielākajā standarta mērogā līdz 1:1. {{ui:Izmērīt caurumus}} uzliek centra atzīmi katram caurumam, vienu norādi katram izmēram un pozīcijas no skata apakšējā kreisā stūra. Skatiet [Izveidot rasējumu](topic:drawing-pdf).

### Visās lietotnēs

- **Valodas.** Lietotnes ir pieejamas 54 valodās. Tās, kas nav angļu valodā, ir mašīntulkojumi, līdz tos izlasa dzimtās valodas runātājs.
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas Ietīt (kā iepriekš), 2 rindas vai 1 rindu; josla, kas nesatilpst, ritina sāniski. PartCraft elementu lente rāda visbiežāk lietoto rīku lielu un paslēpj variantus aiz sadalītas pogas.
- **Savienojiet savu AI.** Studio ir centrs, kur pieslēgt savu asistentu visām astoņām lietotnēm, ar atļauju tikai lasīt, ieteikt vai rediģēt katrai lietotnei. Pieslēgtais asistents var izmērīt detaļu pēc teikuma, piemēram, kronšteins slodzei, parādīt savu darbu un visas pārbaudes un to uzbūvēt; tas ziņo, ko nav pārbaudījis (spriegumu koncentrācija, nogurums, rāpošana plastmasās). Skatiet [Lietot PartCraft ar AI asistentu](topic:use-with-ai-assistants).

## Izlabots 0.8.1 versijā

- **Pilnekrāna kursora iesaldēšana.** Peles uzvilkšanas atlase tagad ir ierobežota. Cēlonis ir mūsu labākais skaidrojums, un tas nav apstiprināts ar personu, kas to ziņoja.
- **Valoda izpildes laikā.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; agrāk tā bija tikai angļu valoda. Tas vēl nav pārbaudīts visās platformās: paziņojiet mums, ja valoda nemainās.

## Vēl nav šajā versijā

- Savienošana ar savu AI nav pabeigta: vienas pogas pieslēgšana Studio iekšienē, mitinātais savienotājs pārlūka AI, jūsu pašu API atslēga Studio iekšienē un publicētā MCP pakete nav solīti. Studio pats nav AI.
- Studio nav koda parakstīts: Windows var brīdināt, un macOS prasa noklikšķināt ar peles labo pogu un pēc tam izvēlēties Atvērt. Skatiet [Problēmu novēršana](topic:troubleshooting).
- Pielaižu ķēdes joprojām ir vienvirziena: skatiet [Pielaižu ķēdes](topic:tolerance-stackup).
- Pārējais ir uzskaitīts [Kas vēl nav izveidots](topic:not-built-yet).

Iepriekšējās izmaiņas ir aprakstītas [Kas jauns versijā 0.7](topic:whats-new-0-7).
