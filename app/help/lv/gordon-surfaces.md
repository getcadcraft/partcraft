---
title: Virsmas caur līkņu tīklu (Gordona virsma)
summary: Izveidojiet vienu gludu virsmu caur profilu un vadlīniju līkņu režģi, kas zīmētas skicēs vai ņemtas no modeļa šķautnēm; aizveriet to līdz cietam ķermenim, ja profili ir slēgti, un kas ir precīzs, kas pielāgots, un ziņojumi, kad tīkls neiederas.
keywords: tangenss, g1, tangences, tangenciāla nepārtrauktība, spoguļa plakne, Gordona virsma, līkņu tīkls, robežvirsma, tīkla virsma, profili, vadlīnijas, vadlīniju līknes, loft ar vadlīnijām, vadlīniju sliedes, apvalks, transfinite, Coons, B-spline virsma, brīva forma virsma
from: ada3cb8b
---

:::note
**Vēl nav izveidots šajā versijā.** Gordona virsmai vajadzīgs precīzs ģeometrijas kodols, kāda šai PartCraft versijai nav: tā visas detaļas veido ar tīkla kodolu. [Kas vēl nav izveidots](topic:not-built-yet) izskaidro, ko darīt tā vietā. Pārējā šīs lapas daļa apraksta to, kā tā darbojas ar precīzu kodolu.
:::

**Gordona virsma** ir viena virsma, kas iet cauri katrai tīkla līknei: **profilu** kopa vienā virzienā un **vadlīniju** kopa otrā, krustojoties kā tīkla pavedieni. Ar to veido korpusu, spārnu vai rokturi no dažām šķēluma līknēm, ko kontrolējat tieši. Tai vajadzīgs **precīzais kodols** (skatiet [Tīkla kodols](topic:solid-kernels)).

## Tīkla zīmēšana

1. Zīmējiet **profilus**: divas vai vairāk līknes, kas iet blakus, piemēram, griezumi paralēlās plaknēs. Darbojas līnijas, loki, riņķi un splainī, un līkņu ķēde, kas savienota gali pret galu, skaitās kā viena līkne.
2. Zīmējiet **vadlīnijas**: divas vai vairāk līknes, kas iet šķērsām pāri profiliem. Katrai vadlīnijai jāšķērso katrs profils vienreiz, un katram profilam katra vadlīnija vienreiz.
3. Panāciet, lai līknes tiešām savienojas. Zīmējiet vadlīnijas skici tā, lai tās līkne iet caur profilu punktiem (piesaistiet projicētiem punktiem vai ierakstiet koordinātes). Tīkls pieņem spraugas līdz **Pieļaujamajai novirzei** (sākumā 0.01 mm).

Viena skice var saturēt vairākas līknes: katra atsevišķa ķēde tajā ir sava līkne. Tātad, piemēram, visas vadlīnijas varat zīmēt vienā skicē augšējā plaknē.

## Virsmas izveide

1. Izvēlieties {{ui:Vairāk}} grupā Elementi, pēc tam {{ui:Gordona virsma}}.
2. PartCraft ņem skices, ko neviens vēl neizmanto: tās, kas atrodas plaknēs paralēli pirmajai, kļūst par **profiliem**, pārējās — par **vadlīnijām**. Pārbaudiet sarakstu labajā pusē un katru skici iestatiet uz **Profili**, **Vadlīnijas** vai **Netiek izmantots**.
3. Lai izmantotu detaļas šķautnes, noklikšķiniet **Atlasīt šķautnes kā profilus** (vai **kā vadlīnijas**), noklikšķiniet uz šķautnēm skatā un pēc tam nospiediet Esc.

Rezultāts ir **virsmas ķermenis**. {{ui:Sabiezināt}} pārvērš to cietā ķermenī, {{ui:Savīt}} savieno to ar citām virsmām, un {{ui:Apgriezt virsmu}} to nogriež.

### Aizvēršana līdz cietam ķermenim

Ja profili ir slēgtas līknes (riņķi, slēgti splainī, slēgtas ķēdes) un pirmais un pēdējais profils katrs guļ plaknē, atzīmējiet **Aizvērt līdz cietam ķermenim**. Gali tiek noslēgti ar plakanām virsmām, un slēgtā forma savienojas, izgriež, krustojas vai kļūst par jaunu ķermeni kā jebkurš cits elements. Tā jūs veidojat loftu, kas seko vadlīniju līknēm. Tas pats darbojas ar slēgtām vadlīnijām.

## Tangenciāli pret plakni pa šķautni

Gordona virsma iet caur savām līknēm, bet pati par sevi neatbilst slīpumam, ar ko saskaras. Lai tā atstātu šķautni **tangenciāli** pret plakni (G1), piemēram, spoguļa plakni, lai spoguļa kopija savienojas bez ieloces, vai plakanu virsmu, no kuras tā aug:

1. Atlasiet Gordona elementu. Sadaļā **Tangenciāli pret** izvēlieties plakni {{ui:Pievienot plakni…}} (Priekšējā, Augšējā, Labās puses vai atsauces plakne) vai atlasiet plakanu virsmu skatā un nospiediet {{ui:Pievienot atlasīto plakano virsmu}}.
2. PartCraft atrod tīkla robežlīkni, kas atrodas šajā plaknē, un virsma to atstāj tangenciāli pret plakni.

Ja plaknē ir divas robežlīknes (grīda abos galos), pievienojiet to divreiz: katra kopija ņem nākamo. Līdz četrām plaknēm, pa vienai uz šķautni.

Pārskatā norādīts, pa kuru līkni katra plakne padarīja tangenciālu un kādu stāvāko leņķi virsma pirms tam saskārās ar šo plakni. Vadlīnijas, kas jau atstāj šo līkni tangenciāli pret plakni, tiek precīzi ievērotas. Vadlīnijas, kas no tās pāri paceļas, tiek saliektas šaurā joslā pie šķautnes, un pārskata rādītājs "seko katrai līknei ar novirzi līdz" parāda, par cik: zīmējiet vadlīnijas, kas atstāj šķautni plakani, lai iegūtu precīzu atbilstību.

## Kas ir precīzs un kas ir pielāgots

Panelis norāda, kurš no šiem attiecas, un cik tālu virsma novirzās no jūsu līknēm.

- **Precīzi**: ja katra līkne ir polinoms (līnijas, splaini un to ķēdes) un vadlīnijas šķērso visus profilus vienādos parametros, virsma ir precīzi šo līkņu Gordona virsma. Izoliniju tīkls, kas izgriezts no bikubiskas virsmas, atdod šo virsmu, un četras taisnas līnijas dod plakanu vai savītu (bilineāru) ieplāksni.
- **Pielāgoti**: loki, riņķi un detaļas šķautnes nav polinomi, un līknes, kas krustojas dažādos parametros, jāpārlaiko, lai krustojumi sakristu. Šīs līknes tiek pielāgotas ar kubiskiem B-splainiem ar novirzi ne vairāk kā vienas desmitmiljondaļas robežās no tīkla izmēra (aptuveni 0.00001 mm 100 mm detaļai). Cilindra ieplāksne, kas veidota no lokiem un līnijām, paliek 0.00001 mm robežās no patiesā cilindra.

Starp līknēm virsma ir tāda, kādu dod metode: profili, sajaukti šķērsām, plus vadlīnijas, sajauktas šķērsām, mīnus to krustojumu punktu sajaukums. Tā ir gluda visur, izņemot vietas, kur līknei ir asa stūris. Ja divas Gordona virsmas dalās robežlīknē, tās saskaras šķautne pret šķautni (G0), nevis tangenciāli.

## Kad tīkls neiederas

| Ziņojums | Ko darīt |
|---|---|
| "… nesaskaras: tie iet 0.4 mm attālumā" | Panāciet, lai šis profils un vadlīnija krustojas, vai paaugstiniet Pieļaujamo novirzi |
| "… saskaras … 2 reizes" | Vadlīnija var šķērsot katru profilu tikai vienreiz: sadaliet cilpojošu līkni vai izmantojiet mazāk profilu |
| "… citā secībā" vai "pārlokās pats pār sevi" | Divas vadlīnijas šķērso viena otru (vai divi profili). Ģimenēm jāiet blakus |
| "vismaz divi profili un divas vadlīnijas" | Pievienojiet līknes vai iestatiet vairāk skices uz Profili vai Vadlīnijas |
| "sajauc atvērtas un slēgtas līknes" | Padariet visus profilus atvērtus vai visus slēgtus (tas pats attiecas uz vadlīnijām) |
| "Gals … nav plakans, tāpēc to nevar noslēgt" | Zīmējiet pirmo un pēdējo slēgto profilu katru vienā plaknē vai atstājiet Aizvērt līdz cietam ķermenim izslēgtu |

## Ierobežojumi

- Viena B-spline virsma uz tīklu: nav G1 vai G2 tangences ar blakus virsmām.
- Slēgta tīkla šuve pie pirmās vadlīnijas ir savienota šķautne pret šķautni, bet ne tangenciāli.
- Pats loft elements nav vadlīniju sliedu; tā vietā izmantojiet Gordona virsmu, aizvērtu līdz cietam ķermenim.
- Ļoti līkumotas līknes vai krustojumi, kas vienā līknē izvietoti ļoti nevienmērīgi salīdzinājumā ar citu, var prasīt pārāk daudz punktu, lai pielāgotos; tad elements to norāda.
