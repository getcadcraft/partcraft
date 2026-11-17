---
title: Pirmās skices zīmēšana
summary: Atveriet skici uz plaknes vai plakanas virsmas, zīmējiet līnijas, taisnstūrus, riņķus, lokus, punktus un centrālās līnijas, noapaļojiet stūri, atlasiet, velciet un dzēsiet.
keywords: skice, zīmēt, līnija, taisnstūris, riņķis, loks, punkts, centrālā līnija, konstrukcija, noapaļojums, skices noapaļojums, noapaļot stūri, piesaiste, atlasīt, logs, vilkt, profils
from: 28be7436
---

Katrs cietais ķermenis sākas kā skice: plakans zīmējums uz plaknes. Šajā apmācībā aprakstīti zīmēšanas rīki. Skices nostiprināšana ar sakarībām un izmēriem aprakstīta sadaļā [Pilnībā definēt skici](topic:relations-dimensions).

## Skices sākšana

Skici var zīmēt uz pamatplaknes vai uz jebkuras plakanas detaļas virsmas.

1. Izvēlieties, kur zīmēt:
   - pamatplakne: vēsturē noklikšķiniet uz **Priekšējā plakne**, **Augšējā plakne** vai **Labā plakne**, vai skatā noklikšķiniet uz plaknes;
   - plakana virsma: skatā noklikšķiniet uz virsmas. Visa virsma tiek izcelta.
2. Rīkjoslā izvēlieties {{ui:Skice}} vai nospiediet {{key:S}}. (Ja ir izvēlēta virsma, varat izvēlēties arī {{ui:Skice uz šīs virsmas}} labajā panelī; ja ir izvēlēta plakne, — {{ui:Skice uz tās}}.)

Skats pagriežas taisni pret plakni, parādās skices rīki rīkjoslā, un rīks Līnija ir gatavs. Ja nospiežat {{ui:Skice}}, neko neizvēlējies, tiek rādītas pamatplaknes, un statusa joslā parādās ziņojums „Noklikšķiniet uz plaknes vai plakanas virsmas, lai zīmētu skici. Esc aptur.”

:::note
Izliektā virsmā skici nevar izveidot: „Šī virsma ir izliekta. Atlasiet plakanu virsmu vai plakni, uz kuras zīmēt skici.”
:::

**Skice uz virsmas seko šai virsmai.** Ja virsmu izveidoja skices mala vai izvilkuma gals, jaunā skice pārvietojas, kad elements mainās (dziļāks izgriezums paņem līdzi skici uz tā dibena). Ja panelī rakstīts „Fiksēta atlases vietā”, skice paliek tur, kur virsma atrodas tagad.

## Zīmēšanas rīki

Katram rīkam ir rīkjoslas poga un taustiņš. Izvēlieties to pašu pogu vēlreiz, nospiediet {{key:S}} vai nospiediet {{key:Esc}}, lai atgrieztos pie Atlasīt.

| Rīks | Taustiņš | Kā zīmēt |
|---|---|---|
| {{ui:Līnija}} | {{key:L}} | Noklikšķiniet sākumpunktu, pēc tam katru nākamo punktu. Līnijas savienojas gals pie gala. Ķēdi beidziet ar {{key:Esc}}, {{key:Enter}}, labo klikšķi vai dubultklikšķi. Noklikšķinot uz esoša punkta, ķēde arī beidzas |
| {{ui:Taisnstūris}} | {{key:R}} | Noklikšķiniet vienu stūri, pēc tam pretējo stūri. Iegūstat četras līnijas, kas savienotas stūros: divas horizontālas un divas vertikālas |
| {{ui:Riņķis}} | {{key:C}} | Noklikšķiniet centru, pēc tam punktu uz riņķa līnijas |
| {{ui:Loks}} | {{key:A}} | Noklikšķiniet centru, pēc tam sākumu un beigas. Loks iet tajā virzienā, kādā pārvietojat rādītāju ap centru |
| {{ui:Punkts}} | {{key:P}} | Noklikšķiniet. Atsevišķs punkts atzīmē cauruma centru rīkam {{ui:Caurums}} |
| {{ui:Centrālā līnija}} | {{key:N}} | Kā līnija, pa vienam segmentam. Zīmēta ar punktētu līniju; tā ir palīgģeometrija, ko izmanto kā rotācijas asi vai atsauci |
| {{ui:Noapaļojums}} | {{key:F}} | Noklikšķiniet uz stūra, kur saskaras divas līnijas, ierakstiet rādiusu un nospiediet {{key:Enter}} |
| {{ui:Splains}} | {{key:B}} | Noklikšķiniet punktus, caur kuriem iet līkne; {{key:Enter}} beidz, klikšķis uz pirmā punkta to aizver. Skatiet [Splaini, apgriešana, nobīde un citi skices rīki](topic:sketch-tools) |
| {{ui:Apgriezt}} | {{key:T}} | Noklikšķiniet uz līknes daļas, ko noņemt, līdz tuvākajiem krustpunktiem |
| {{ui:Izmērs}} | {{key:D}} | Skatiet [Pilnībā definēt skici](topic:relations-dimensions) |

Zīmēšanas laikā blakus rādītājam redzams neliels lodziņš ar garumu, izmēru, diametru vai rādiusu.

### Ierakstiet izmēru, zīmējot

Pēc pirmā klikšķa līnijai, taisnstūrim, riņķim vai lokam varat ierakstīt izmēru, nevis to noklikšķināt. Ierakstot skaitli, blakus rādītājam atveras lodziņš ar šo skaitli:

| Rīks | Lodziņi ({{key:Tab}} pārvieto uz nākamo) | Kas notiek pēc {{key:Enter}} |
|---|---|---|
| {{ui:Līnija}}, {{ui:Centrālā līnija}} | Garums, pēc tam Leņķis (°) no skices X ass | Līnija tiek zīmēta tik garu, virzienā uz rādītāju vai ierakstītajā leņķī; ķēde turpinās no tās gala |
| {{ui:Taisnstūris}} | Platums, pēc tam Augstums | Taisnstūris tiek zīmēts no pirmā stūra uz rādītāju; izmērs, ko neievadījāt, nāk no rādītāja |
| {{ui:Riņķis}} | Diametrs | Riņķis tiek zīmēts ar šo diametru |
| {{ui:Loks}} | Rādiuss pēc centra, pēc tam Loka leņķis (°) pēc sākuma | Sākums atrodas tik tālu no centra; tad loks iet tik tālu apkārt, tajā virzienā, kādā pārvietojāt rādītāju |

Katrs ievadītais izmērs tajā pašā solī kļūst par **vadošo izmēru**, tāpēc skice iznāk ar izmēriem: {{key:Mod+Z}} atceļ formu un tās izmērus kopā. Ja noklikšķiniet, nevis nospiežat {{key:Enter}}, paturat to, ko ievadījāt, bet pārējo ņem no klikšķa. {{key:Esc}} aizver lodziņu un atgriežas pie rādītāja.

Lai to izslēgtu, ja vēlaties zīmēt tikai ar klikšķiem, atveriet {{ui:Iestatījumi}} › {{ui:PartCraft}} › **Izmērs zīmēšanas laikā**. Skatiet [PartCraft iestatījumi](topic:settings).

{{ui:Vairāk}} skices rīku beigās ir vadības punktu splains, Pagarināt, Nobīde, Spoguļošana, Daudzstūris, Iegriezums, skices masīvi un Projicēt malu: skatiet [Splaini, apgriešana, nobīde un citi skices rīki](topic:sketch-tools).

### Piesaiste

Piesaiste pati pievieno sakarības, tāpēc skice paliek savienota, kad to pārvieto:

- Uz **gala punkta vai sākumpunkta** parādās neliels kvadrātiņš. Jaunais punkts tiek padarīts sakritīgs ar to.
- Uz **līnijas, riņķa vai loka** parādās neliels krustiņš. Jaunais punkts tiek novietots uz šīs līknes.
- Līnija, kas atrodas līdz 3 grādiem no horizontāles vai vertikāles, piesaistās tai un saņem horizontālu vai vertikālu sakarību. Uzraksts rāda „H” vai „V”.

Lai izvairītos no piesaistes, tuviniet skatu, lai noklikšķinātu tālāk no punkta vai līknes.

## Noapaļot stūri

1. Nospiediet {{key:F}} vai izvēlieties {{ui:Noapaļojums}}.
2. Noklikšķiniet uz stūra punkta, kur saskaras divas līnijas.
3. Atveras lodziņš ar ieteikto rādiusu. Ierakstiet rādiusu un nospiediet {{key:Enter}}.

Abas līnijas tiek apgrieztas un savienotas ar pieskares loku, kam ir rādiusa izmērs. Ziņojumi, ko var redzēt: „Noapaļojumam nepieciešams stūris, kur tieši divas līnijas saskaras.” un „Šis rādiuss ir par lielu šīm līnijām.”

:::tip
Skices noapaļojums noapaļo profila stūri, tātad izvilkumam iegūst noapaļotas vertikālas malas. Lai noapaļotu paša ķermeņa malas (piemēram, plāksnes augšējās malas), detaļā izmantojiet elementu {{ui:Noapaļojums}}: skatiet [Noapaļot, nošķelt un izdobt](topic:fillet-chamfer-shell). Skicē rīkjoslas {{ui:Noapaļojums}} ir skices rīks; detaļā tas ir elements.
:::

## Palīgģeometrija

Palīglīnijas, riņķi un loki ir punktēti un pelēki. Tie vada skici, bet nav daļa no profila, ko izvelk vai rotē.

1. Atlasiet līnijas, riņķus vai lokus.
2. Nospiediet {{key:Q}} vai izvēlieties {{ui:Konstrukcija}}. Nospiediet vēlreiz, lai atgrieztu.

## Atlasīt, vilkt un dzēst

Nospiediet {{key:S}} (vai {{key:Esc}}, līdz neviens rīks nav aktīvs), lai izvēlētos rīku Atlasīt.

- Noklikšķiniet uz punkta, līnijas, riņķa, loka, sakarības simbola vai izmēra, lai to atlasītu. {{key:Shift}}+klikšķis pievieno atlasei vai noņem no tās. Windows un Linux sistēmās {{key:Ctrl}}+klikšķis dara to pašu; Mac datorā ⌘+klikšķis.
- Velciet tukšā vietā, lai zīmētu atlases logu: tiek atlasīts viss, kas ir pilnībā tajā.
- Velciet punktu vai līniju, lai to pārvietotu. Risinātājs pārvietošanas laikā saglabā katru sakarību un izmēru, tāpēc pārvietojas tikai brīvā ģeometrija. Velciet riņķa malu, lai mainītu tā rādiusu.
- Velciet izmēra skaitli, lai pārvietotu uzrakstu.
- Nospiediet {{key:Delete}} vai {{key:Backspace}} vai labajā panelī izvēlieties {{ui:Dzēst}}, lai dzēstu atlasi. Dzēšot ģeometriju, dzēšas arī uz tās balstītās sakarības.

## Tālummaiņa un panoramēšana skicē

- Ritiniet riteni, lai tuvinātu pie rādītāja.
- Velciet ar vidējo vai labo pogu, lai panoramētu.
- {{ui:Pielāgot}} rīkjoslā vai labajā panelī pielāgo skici skatam. Skicē taustiņš {{key:F}} ir rīks Noapaļojums, nevis Pielāgot.

## Skices aizvēršana

Rīkjoslā izvēlieties {{ui:Iziet}} vai labajā panelī {{ui:Iziet no skices}}, vai nospiediet {{key:Esc}}, līdz skice aizveras. Katrs {{key:Esc}} vispirms atceļ to, kas ir procesā, pēc tam atgriežas pie Atlasīt, tad notīra atlasi, un nākamais aizver skici.

Skice paliek atlasīta, tāpēc nākamais {{ui:Izvilkt}} vai {{ui:Rotēt}} to izmanto.

## Kas veido labu profilu

{{ui:Izvilkt}} un {{ui:Rotēt}} izmanto katru slēgto cilpu, ko veido skices līnijas, riņķi, loki un splaini (bez palīgģeometrijas). Cilpas cilpās kļūst par caurumiem.

- Katram galam jāsaskaras tieši ar vienu citu galu. „Profils ir atvērts: gals punktā (12.5, 40) nav savienots ar neko.” norāda vietu.
- Vienā punktā nedrīkst saskarties trīs gali: „Profils sazarojas punktā (0, 20): tur saskaras vairāk nekā divi gali.”
- Profils ignorē punktus un palīgģeometriju.

Nākamais: [Pilnībā definēt skici ar sakarībām un izmēriem](topic:relations-dimensions).

## Skice no fotogrāfijas

**Elementi › Vairāk › Skice no fotogrāfijas…** (vai grupa Skice elementu koka lentē) izseko plakanas detaļas attēlu uz vienkāršas pamatnes — tās kontūru un caurumus — vai pildspalvas zīmējumu, pārvēršot to skicē ar līnijām, lokiem un riņķiem. Norādiet vienu garumu (platumu, augstumu vai garāko malu), lai skicei būtu pareizais izmērs, pārbaudiet priekšskatījumā atrasto un izvēlieties **Izveidot skici**; to var arī izvilkt tajā pašā atsaukšanas solī. Izsekošana notiek šajā datorā. Stūru rādiusi atgriežas aptuveni 5 % robežās, viena vai divu pikseļu detaļas pazūd, un fotogrāfija, kas uzņemta slīpi vai ar ēnām pāri detaļai, netiek izlīdzināta: fotografējiet detaļu taisni no priekšas ar vienmērīgu apgaismojumu.
