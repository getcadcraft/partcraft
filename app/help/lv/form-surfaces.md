---
title: Brīvas formas darba vidē Forma un virsmu elementi
summary: Stumjiet un velciet gludu vadības karkasu darba vidē Forma, izveidojiet ieloces šķautnes, izmantojiet simetriju, pārbaudiet un pabeidziet to par precīzu cietu ķermeni vai virsmu, tad veidojiet ieplāksnes, loft virsmas, savīstiet, sabiezināt, nobīdiet, pagariniet un apgrieziet virsmas darba vidē Dizains. Kas ir precīzs un kas ir aptuvens.
keywords: forma, brīva forma, T-spline, subdivīzija, Catmull-Clark, karkass, kvadbumba, ieloce, simetrija, zebra, izliekums, virsma, ieplāksne, aizpildījums, loft virsma, savīt, sabiezināt, nobīdīta virsma, pagarināt, apgriezt
from: 0d326ef4
---

:::note
**Vēl nav izveidots šajā versijā.** Formas pabeigšana detaļā un virsmu elementi prasa precīzu ģeometrijas kodolu, kāda šai PartCraft versijai nav: tā visas detaļas veido ar tīkla kodolu. [Kas vēl nav izveidots](topic:not-built-yet) izskaidro, ko darīt tā vietā. Pārējā šīs lapas daļa apraksta tos, kā tie darbojas ar precīzu kodolu.
:::

Darba vide **Forma** veido organiskas formas. Jūs rediģējat **karkasu**, rupju stūru, šķautņu un virsmu tīklu. Forma ir gludā virsma, ko kontrolē karkass (tā Catmull–Clark robežvirsma), tāpēc viena stūra pārvietošana maigi saliec virsmu ap to. Kad rezultāts izskatās pareizi, **Apstrāde** pievieno to detaļas vēsturei kā *Forma* elementu, un precīzais kodols to pārvērš īstās B-spline virsmās. Pēc tam to var noapaļot, nogriezt, savienot ar citiem elementiem un eksportēt kā STEP.

Izvēlieties **Forma** sarakstā **Darba vide** rīkjoslas kreisajā pusē.

## Karkasa sākšana

1. Labajā panelī iestatiet **Izmērs** un **Dalījumi**. Dalījumi ir tas, cik virsmu iegūst katra puse.
2. Rīkjoslā noklikšķiniet uz {{ui:Kaste}}, {{ui:Kvadbumba}} vai {{ui:Plakne}}. Panelī ir arī **Cilindrs**, **Tors** un **Virsmas ar klikšķiem**.

- **Kvadbumba** ir kastes karkass, kas pielāgots tā, ka stūru punkti atrodas uz sfēras. Starp šiem punktiem virsma atrodas nedaudz sfēras iekšpusē: ar 2 dalījumiem apjoms ir aptuveni par 0.4 % mazāks.
- **Plakne** ir atvērta, tāpēc tā kļūst par virsmas ķermeni (skatiet tālāk "Virsmu elementi darba vidē Dizains").
- **Virsmas ar klikšķiem**: noklikšķiniet 4 punktus augšējā (pamata) plaknē vai uz karkasa stūriem, lai izveidotu vienu virsmu. Virsmas, kam ir kopīgi stūri, savienojas. Nospiediet {{key:Enter}} pēc 3 punktiem, lai izveidotu trijstūri, vai {{key:Esc}}, lai pārtrauktu.

Nepabeigtais karkass tiek saglabāts kopā ar detaļas failu, tāpēc varat aizvērt failu un turpināt vēlāk.

## Atlase un pārvietošana

- Noklikšķiniet uz karkasa stūra, šķautnes vai virsmas. {{key:Shift}}+klikšķis pievieno vai noņem vienumus. {{key:Esc}} notīra atlasi.
- Atlases vidū parādās gizmo. Velciet bultiņu, lai pārvietotu pa to, vai kvadrātu, lai pārvietotu tā plaknē. Nospiediet {{key:W}}, lai pārvietotu, {{key:E}}, lai pagrieztu, un {{key:R}}, lai mērogotu, vai izmantojiet pogas panelī. {{ui:Gizmo}} rīkjoslā pārslēdz tos.
- **Mīkstais izkliedums** (mm) arī velk stūrus šajā attālumā, pakāpeniski izzūdot līdz nullei šī attāluma malā.
- Katrs vilkšanas solis ir viens atsaukšanas solis: {{key:Ctrl+Z}} un {{key:Ctrl+Y}} darbojas kā parasti.

## Karkasa mainīšana

Panelī esošās **Mainīt** pogas darbojas ar atlasi:

| Poga | Ko dara |
|---|---|
| {{ui:Izvilkt}} | Atlasītās virsmas pārvietojas uz āru par **Izvilkuma attālumu** pa savām normālēm, veidojot jaunas sānu virsmas. Atlasītās atvērtās šķautnes izaug jaunām virsmām uz āru. |
| {{ui:Šķautņu cilpa}} / Ievietot šķautņu cilpu | Sadala četrstūru virsmu gredzenu, kas šķērso atlasīto šķautni, pa vidu. Vairāk cilpu dod šaurākas līknes. |
| Ievietot punktu | Pievieno stūri atlasītās šķautnes vidū. |
| Sadalīt | Sadala katru atlasīto virsmu četrstūru virsmās ap tās vidu. |
| Tilts | Savieno divas atlasītas virsmas vai divas atveres (katrā atlasiet vienu atvērtu šķautni) ar virsmu cauruli. Abām vajadzīgs vienāds šķautņu skaits. |
| Aizpildīt caurumu | Aizver atveri caur atlasīto atvērto šķautni ar vienu virsmu. |
| Sakausēt | Apvieno atlasītos stūrus vienā to vidū. |
| Izlīdzināt | Pārvieto atlasītos stūrus uz plakni, kas tiem vislabāk atbilst. |
| Dzēst | Noņem atlasītās virsmas, šķautnes (divas virsmas apvienojas) vai stūrus. |

## Asās šķautnes, simetrija un attēlojums

- {{ui:Ieloce}} padara atlasītās šķautnes asas. **Ieloces svars** 10 ir pilnīgi ass. Mazāks svars paliek ass tik precizēšanas soļos un pēc tam mīkstinās, dodot šauru noapaļojumu, nevis cietu saliekumu. **Noņemt ieloci** padara tās atkal gludas. **Ass virsotne** piesprauž stūri, lai virsma ar punktu iet cauri tam.
- **Simetrija** spoguļo karkasu pār X, Y vai Z = 0. Tā saglabā pozitīvo pusi, to atspoguļo un savieno abas puses. Pēc tam izmaiņa jebkurā pusē notiek abās. Spoguļa plaknē esoši stūri paliek tajā.
- {{ui:Attēlojums}} pārslēdz starp **Gluds** (virsma, kāda elements būs) un **Kaste** (pats karkasa virsmas).
- **Analīze**: **Zebras svītras** atspoguļo svītrainu gaismu no pašreizējā skata. Tās gludi līkst pār gludu virsmu un pārtrūkst pie ieloces. **Vidējā līkums** iekrāso izliektās vietas sarkanas, ieliektās zilas un plakanās baltas. To mēra attēlotajā tīklā ar kotangensa formulu, tāpēc tas ir norādījums, nevis mērījums.

## Pārbaude un pabeigšana

- **Pārbaudīt precīzi** pārvērš karkasu precīzajā kodolā, nemainot jūsu detaļu. Tas parāda, cik B-spline ieplāksnes veido karkasu, cik no tām ir precīzas un vai rezultāts ir slēgts, derīgs ciets ķermenis, un tā tilpumu.
- {{ui:Apstrāde}} pievieno vēsturei *Forma* elementu vai atjaunina formu, ko rediģējāt, un atgriež jūs darba vidē Dizains. Slēgts karkass kļūst par cietu ķermeni. Tā **Darbība** Dizaina panelī var būt Jauns ķermenis, Savienot, Izgriezt vai Krustot. Atvērts karkass kļūst par virsmas ķermeni.
- Lai vēlāk mainītu formu, atlasiet to vēsturē un noklikšķiniet uz **Rediģēt formā**. Izveidotais ķermenis ir paslēpts, kamēr rediģējat tā karkasu.
- **Atmest** izmet karkasu, neskarot vēsturi.

## Kas ir precīzs un kas ir aptuvens

Katra karkasa četrstūra virsma, vajadzības gadījumā precizēta, kļūst par vienu bikubisku B-spline ieplāksni.

- Ja katrs virsmas stūris ir *regulārs* (četras šķautnes saiet virsmas iekšpusē vai trīs atvērtā šķautnē vai pa ieloci), ieplāksne ir **precīzi** dalītā virsma. Pārbaudes to pārbauda līdz 1e-9 mm.
- Ap **ārkārtas punktu** (trīs, piecas vai vairāk šķautņu saiet, trīs vai piecstūra virsmas stūris vai ieloces gals) nav precīzas polinomiālas ieplāksnes. Tur ieplāksne ņem precīzu punktu un tangenšu plakni šajā stūrī un kaimiņu šķautņu līknes, tāpēc ieplāksnes joprojām savienojas bez spraugas. Tangenciālā nepārtrauktība pār šķautnēm, kas saiet punktā, ir aptuvena. Formas panelis un elementa panelis parāda lielāko leņķi, parasti zem 2°. Augstāks **Līmenis** elementa panelī padara šīs ieplāksnes mazākas un tuvākas.
- Asās ieloces ir reālas cieta ķermeņa šķautnes, tāpēc tās var noapaļot.
- Katra ieplāksne ir sava virsma, tāpēc formai ir daudz virsmu un starp tām tiek zīmētas līnijas.

## Virsmu elementi darba vidē Dizains

Virsmu komandas atrodas darba vides Dizains izvēlnē {{ui:Vairāk}} zem elementiem. Tām vajadzīgs precīzais kodols. Virsmu ķermeņi tiek zīmēti caurspīdīgi zilā krāsā. Tie nav daļa no cietā ķermeņa, kamēr tos nesabiezināt vai nesavīstiet.

| Komanda | Ko dara |
|---|---|
| Ieplāksne | Aizpilda slēgtu šķautņu cilpu. Vispirms {{key:Shift}}+klikšķis uz cieta ķermeņa šķautnēm vai atlasiet virsmas ķermeni, lai aizpildītu tā atveri. **Tangenciāli (G1)** liek ieplāksnei gludi saskarties ar šo virsmu. |
| Loft virsma | Virsma caur vienu līkņu ķēdi katrā skicē (atvērtu vai slēgtu), vēstures secībā. |
| Savīt | Savieno virsmu ķermeņus pa to kopīgajām šķautnēm. Ja tie noslēdzas, rezultāts ir ciets ķermenis ar Darbību kā citiem elementiem. |
| Sabiezināt | Piešķir virsmas ķermenim biezumu: pa tā normāli, pret to vai pusi katrā virzienā. Rezultāts ir ciets ķermenis. |
| Nobīdīt virsmu | Virsmas ķermeņa kopija, pārvietota pa tā normālēm. Oriģināls paliek. |
| Pagarināt virsmu | Palielina vienas virsmas virsmu pāri izvēlētajām šķautnēm. |
| Apgriezt virsmu | Apgriež virsmas ķermeni vietā, kur to šķērso cits virsmas ķermenis vai cietais ķermenis. Noklikšķiniet **Atlasīt punktu uz daļas**, lai izvēlētos, kuru daļu paturēt, vai paturiet visu pārējo. |

Savīt, Sabiezināt, Pagarināt un Apgriezt izmanto virsmas ķermeni, no kura sākas. Vēlākie elementi izmanto jauno.

Pašreizējie ierobežojumi: formas ar vairākām atsevišķām slēgtām daļām nepārvēršas vienā cietā ķermenī; regulārie laukumi nav apvienoti lielākās virsmās; un skatiet [Kas vēl nav izveidots](topic:not-built-yet).
