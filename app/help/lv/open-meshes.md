---
title: Atvērt STL, OBJ vai 3MF kā cietu korpusu
summary: Pārvērtiet tīklu no skenera, 3D drukas vietnes vai citas programmas par cietu korpusu, ko var griezt, pievienot un skicēt; ko PartCraft labo un ko nevar.
keywords: stl, obj, 3mf, tīkls, tīkls par cietu korpusu, pārvērst tīklu, skenēšana, ūdensnecaurlaidīgs, labošana, caurumi, spraugas, vienības, augšup asis, importēts korpuss, plakanas virsmas
from: 7b948471
---

PartCraft atver STL, OBJ un 3MF tīklus kā **cietus korpusus**. Korpuss darbojas kā jebkurš cits ciets ķermenis: griezt, pievienot, urbt, veidot masīvu, izmantot montāžā vai apstrādei un skicēt uz tā plakanām virsmām. Tam nav savas vēstures: tīkls ir tikai trijstūri, tāpēc tā izmērus nevar mainīt, tikai pievienot tam vai no tā griezt.

## Tīkla atvēršana

1. Izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}} un izvēlieties `.stl`, `.obj` vai `.3mf` failu. Vai nometiet to 3D skatā.
2. PartCraft nolasa to, labo to, ko drošīgi var, un parāda, ko atrada: cik trijstūru un punktu, katru labojumu un to, vai tīkls tagad **slēdzas**.
3. Pārbaudiet **Vienības failā** un **Augšup failā**. STL un OBJ nenorāda savas vienības, tāpēc par pieņēmumu ir milimetri; 3MF fails norāda pats. Rinda **Izmērs šeit** rāda korpusa izmēru ar jūsu izvēli, tāpēc detaļu, kas ienāk 25.4 reizes par mazu, ir viegli pamanīt (tā bija collās).
4. Ja detaļa ekrānā ir tukša, izvēlieties {{ui:Atvērt kā korpusu}}. Ja tai jau ir elementi, izvēlieties **Izmantot to** (pievienot detaļai, izgriezt no tās vai paturēt tikai pārklājumu), tad {{ui:Pievienot šai detaļai}}, vai {{ui:Jauna detaļa}}, lai sāktu no jauna ar tīklu.

Vēsturē parādās elements **Imported1**. Statusa josla saka, piemēram: "bracket.stl ir ciets korpuss: 15200.512 mm³, 14 plakanas virsmas skicēšanai."

## Ko PartCraft labo

| Labojums | Ko tas nozīmē |
|---|---|
| Dubultie stūri savienoti | STL atkārto katru stūri katram trijstūrim; tie tiek savienoti vienā punktā |
| Trijstūri bez laukuma noņemti | Skaidas, kuru stūri guļ uz vienas līnijas |
| Dubultie trijstūri noņemti | Trijstūris, kas rakstīts divreiz, paturēts vienreiz; divi, kas vērsti pretēji (iekšējā siena), abi tiek noņemti |
| Mazas spraugas aizvērtas | Malas, kas gandrīz satiekas (tūkstošdaļas robežās no detaļas izmēra), tiek savienotas |
| Caurumi aizpildīti | Atvere, kuras mala guļ plakani, tiek aizpildīta neatkarīgi no tās izmēra; sašķiebtu tikai tad, ja tā ir maza |
| Trijstūri pagriezti uz āru | Trijstūri, kas vērsti nepareizi, tiek pagriezti, lai saskanētu ar kaimiņiem, un viss virsmas laukums tiek pavērsts uz āru |

## Kad tīkls neslēdzas

Cietam korpusam vajag virsmu bez atverēm. Ja PartCraft nevar to aizvērt, dialogs saka, cik atveru un atvērtu malu paliek, un korpusa nav ko pievienot. Aizveriet atveres programmā, kas izveidoja tīklu, vai eksportējiet to vēlreiz kā slēgtu (ūdensnecaurlaidīgu) tīklu un atveriet vēlreiz.

PartCraft atstāj atveri neskartu, kad aizpildīšana varētu nepareizi uzminēt: liela sašķiebta atvere vai divas atveres vienā plaknē (trūkst gredzenveida virsma, kur katras malas aizpildīšana pārklātu vidus caurumu). Malu, ko dala vairāk nekā divi trijstūri, arī ziņo: šādai virsmai nav viena skaidra iekšpuses.

## Skicēšana uz plakanām virsmām

Plakanas vietas, kas sastāv no daudziem trijstūriem, tiek apvienotas katra vienā **plakanā virsmā**, lai uz tām varētu skicēt: noklikšķiniet virsmu un izvēlieties {{ui:Skice uz šīs virsmas}}. Virsma, kas vēlāk tiek griezta vai pievienota, paliek virsma. Apaļas vietas (caurums, noapaļojums) paliek trijstūri: tās nav virsmas, ko var izvēlēties, un skats zīmē to kontūru pēc leņķa starp trijstūriem.

## Mainiet vēlāk

Izvēlieties **Imported1**, lai redzētu failu, no kura tas nācis, cik trijstūru tam ir un ko labots. **Vienības failā**, **Augšup failā** un **Izmantot to** var mainīt tur; katra izmaiņa ir viens atsaukšanas solis.

## Kur tas glabājas

Labotais tīkls tiek saglabāts `.partcraft.json` faila **iekšpusē**, tāpēc tīkla fails vairs nav vajadzīgs. Detaļas fails ar tīkla korpusu ir versija 5: vecāka PartCraft versija to noraida pēc versijas. Tīkls ar 200 000 trijstūriem pievieno apmēram 1.2 MB.

## Ierobežojumi

- Ne vairāk kā 3 miljoni trijstūru un 200 MB vienā failā.
- Korpusu no tīkla veido tīkla kodols. Ar precīzo kodolu ieslēgtu (tikai izstrādātājiem) tas to norāda un neveido.
- OBJ materiāli, tekstūru koordinātes un brīvformas līknes netiek ņemtas vērā; 3MF krāsas, materiāli un atbalsta objekti netiek ņemti vērā (dialogs saka, cik objektu izlaists).
- Korpuss ir tikpat smalks kā tīkls: rupjš STL dod rupjas apaļas virsmas. Caurumi, ko urbjat tajā, ir tikpat apaļi kā jūsu paši elementi.
