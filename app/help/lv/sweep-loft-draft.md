---
title: Izvilkums, pārejas virsma un slīpums
summary: Izvelciet slēgtu profilu pa skices līniju vai modeļa malu ceļu, veidojiet pārejas virsmu cauri griezumiem dažādās plaknēs un pievienojiet slīpumu virsmām; ar iespējām, precīziem rezultātiem un ziņojumiem.
keywords: izvilkums, izvilkts izvirzījums, izvilkts izgriezums, caurule, ceļš, pārejas virsma, pārejas izvirzījums, sekciju saplūšana, taisnvirziena, slīpums, slīpuma leņķis, konusveida virsmas, neitrālā plakne, velkšanas virziens, liešana
from: 9d637981
---

:::note
**Šajā versijā** izvilkums un pārejas virsma vēl nav izveidoti: tiem vajag precīzu ģeometrijas kodolu, kura šajā PartCraft versijā nav. [Kas vēl nav izveidots](topic:not-built-yet) norāda, ko darīt tā vietā; sadaļas Izvilkums un Pārejas virsma apraksta tos, kā tie darbojas ar precīzu kodolu. **Slīpums darbojas** plakanām virsmām: tīkla kodols to veido ar tādu pašu rezultātu, kādu dod precīzs kodols.
:::

Visi trīs ir izvēlnē {{ui:Vairāk}} Funkciju grupā (skatiet [Tīkla kodols](topic:solid-kernels)). Katrs no tiem var pievienot materiālu, izgriezt to, paturēt tikai pārklāšanos (**Krustošanās**) vai izveidot **Jaunu korpusu** (izvilkumam un pārejas virsmai: **Darbība** panelī).

## Izvilkums

Izvilkums pārvieto slēgtu profilu pa ceļu: caurules, rokturus, stieples atsperes, sliedes.

1. Uzzīmējiet **ceļu** vienā skicē: taisnas līnijas un lokus, kas savienoti gals pie gala (vai izmantojiet modeļa malas, zemāk).
2. Uzzīmējiet **profilu** citā skicē, kuras plakne iet cauri ceļa vienam galam, piemēram, riņķi augšējā plaknē ceļa sākumā, kas uzzīmēts priekšējā plaknē.
3. Atlasiet profila skici un izvēlieties {{ui:Vairāk}}, pēc tam {{ui:Izvilkums}}. Jaunākā cita skice kļūst par ceļu.

Panelī:

| Iestatījums | Ko tas dara |
|---|---|
| **Ceļš** | Atzīmējiet skices, kas veido ceļu (vairākas skices savienojas gals pie gala vienā 3D ceļā); **Atlasīt modeļa malas** pievieno detaļas malas |
| **Orientācija** | Sekot ceļam (noklusējums), Freneta, Fiksēta (sekcijas paliek paralēlas profilam), Saglabāt virzienu, Pa vadošo līkni |
| **Gala mērogs** | Profils lineāri pieaug vai sarūk līdz šim izmēram galā (1 = nemainīgs) |

Asi stūri ceļā tiek sašķelti. Riņķis ar rādiusu 5, izvilkts pa 100 mm taisni, ir cilindrs ar tieši 2500π mm³; pa ceturtdaļloku ar rādiusu 50 — ceturtdaļa tora ar 625π² mm³.

## Pārejas virsma

Pārejas virsma saplūst cauri diviem vai vairākiem griezumiem dažādās plaknēs.

1. Uzzīmējiet katru griezumu savā skicē (katrā pa vienai slēgtai cilpai), uz pamatplaknēm, [atsauces plaknēm](topic:reference-geometry) vai virsmām.
2. Izvēlieties {{ui:Vairāk}}, pēc tam {{ui:Pārejas virsma}}. Katra neizmantota skice ar vienu cilpu kļūst par griezumu vēsturiskā secībā.

Panelī griezumi ir uzskaitīti secībā (**Uz augšu** maina secību, **Noņemt** noņem vienu); **Pievienot skici** pievieno vēl vienu, **Atlasīt virsmu** pievieno detaļas plakanu virsmu. **Taisnvirziena** izveido plakanas virsmas starp griezumiem, nevis gludu saplūšanu. Starp diviem kvadrātiem abi ir viena un tā pati nogrieztā piramīda (40 mm kvadrāts līdz 20 mm kvadrātam 30 mm augstumā: tieši 28000 mm³).

Griezumi ar dažādu malu skaitu (kvadrāts līdz trijstūrim) tiek saskaņoti ar OpenCascade, kas var savērpt sānu virsmas; funkcija brīdina. Zīmējiet griezumus ar vienādu malu skaitu, sākot no atbilstošiem stūriem, lai iegūtu tīrāko rezultātu.

### Vadņi

Vadņi ir līknes, pa kurām pārejas virsmas sānu malām jāiet no pirmā līdz pēdējam griezumam, lai izveidotu izliekumu, sašaurinājumu vai paplašinājumu, ko zīmējat paši.

1. Uzzīmējiet divus vai vairāk vadņus: atvērtas līknes (taisnes, lokus, splainus), kas iet no pirmā griezuma līdz pēdējam un katru griezumu šķērso vienreiz. Vienā skicē var būt vairāki vadņi: katra atsevišķa ķēde tajā ir savs vadnis. Zīmējiet vadni tā, lai tas patiesi saskartos ar katru griezumu: piespraudiet tā galus pie griezumu punktiem.
2. Pārejas virsmas panelī zem **Vadņi** atzīmējiet skices, kurās tie atrodas, vai noklikšķiniet uz {{ui:Izvēlēties modeļa malas kā vadņus}} un noklikšķiniet uz detaļas malām ({{key:Esc}} beidz).

Ar vadņiem pārejas virsma ir Gordona virsma cauri griezumiem un vadņiem (skatiet [Virsmas caur līkņu tīklu](topic:gordon-surfaces)), no abiem galiem aizvērta ar plakanām virsmām, un iegūst cietu ķermeni. Panelī ir norādīts, cik precīzi tā tiem seko. Katram griezumam tad jābūt skicei (punkts vai virsma nevar pieņemt vadni), un **Taisnvirziena** nav piemērojama. Vadnis, kas nokļūst garām griezumam vairāk nekā par 0.01 mm, tiek noraidīts, un tiek norādīts atstarpes lielums.

Pārbaudīts: divi riņķi (20 mm un 10 mm diametrā, 40 mm attālumā) ar četriem taisniem vadņiem dod nogrieztā konusa tilpumu ar precizitāti līdz 0.000002 %; loki, kas izliecas uz āru par 5 mm, dod mucu, kas seko katram vadnim ar precizitāti līdz 0.00001 mm.

## Slīpums

Slīpums sašķauj virsmas, lai detaļu varētu izņemt no veidnes.

1. Izvēlieties {{ui:Vairāk}}, pēc tam {{ui:Slīpums}} (vai vispirms atzīmējiet virsmas ar {{key:Shift}}+klikšķi). Ja nekas nav atlasīts, esat atlases režīmā: noklikšķiniet uz katras virsmas, ko sašķaut, un pēc tam uz {{ui:Gatavs}}.
2. Iestatiet **Leņķis (°)**, **Neitrālā plakne** (kur virsmas saglabā savu izmēru) un **Velkšanas virziens** (pēc noklusējuma neitrālās plaknes normāle).

Pozitīvs leņķis noliec virsmu iekšup gar velkšanas virzienu un noņem materiālu; negatīvs to pievieno. Neitrālā plakne sākumā ir Augšējā plakne. Šajā versijā slīpot var tikai plakanas virsmas: cilindram, konusam vai brīvas formas virsmai parādās ziņojums "Slīpums: šajā versijā tikai plakanas virsmas (tīkla kodols to veido)." Četras 100 × 100 × 50 bloka malas, kas sašķautas par 5° ap apakšu, kļūst par nogrieztu piramīdu ar tieši h/3·(a² + b² + ab), kur b = a − 2h·tan 5°.

## Ziņojumi

| Ziņojums | Ko darīt |
|---|---|
| "Profila plaknei jāiet cauri ceļa vienam galam …" | Pārvietojiet profila skici uz ceļa sākumu (vai beigām) |
| "Ceļam ir sprauga: tā līknes nesavienojas gals pie gala …" | Savienojiet ceļa līknes; atsevišķās skicēs to galiem precīzi jāsakrīt |
| "Pārejas virsmas griezumam vajag tieši vienu slēgtu cilpu" | Sadaliet skici vai noņemiet papildu cilpu |
| "… nevar slīpot attiecībā pret šo neitrālo plakni …" | Virsma ir paralēla neitrālajai plaknei vai to nešķeļ |
| "Slīpums: šajā versijā tikai plakanas virsmas (tīkla kodols to veido)." | Atlasītā virsma ir izliekta. Noņemiet to; slīpojiet tikai plakanas virsmas |

:::note
Vēl nav izveidots: vijīgi izvilkumi, plānsienu un virsmu izvilkumi, pārejas virsmas vadņi un galu tangences, slīpums uz cilindriem, konusiem un brīvas formas virsmām.
:::
