---
title: Brīvformas virsmas (NURBS)
summary: Gludas līknes un virsmas blakus detaļai — pārejas virsmas, izvilkumi, līkņu tīkli, četrmalu ielāpi, sajaukumi, apgriešanas — ar G0, G1 un G2 nepārtrauktību, kas mērīta uz precīzām virsmām; cietie ķermeņi ar apvienošanu, atņemšanu un krustošanu, kas ielikti detaļā; zebras un līkuma skati; virsmas no skenējuma ar mērītu kļūdu; STEP un IGES faili. Glabājas detaļas failā.
keywords: nurbs, skenējums, reversais inženierijas process, pielāgot, tīkls līdz virsmai, punktu mākonis, stl, apgriezt, apgriezts, caurums, izgriezums, ciets ķermenis, cietie ķermeņi, būla, apvienot, atņemt, krustot, starpība, savienot, slēgts, ielikt, brīvforma, virsma, virsmas, b-spline, bspline, līkne, spline, pārejas virsma, izvilkums, sliede, tīkls, coons, ielāps, sajaukums, saskaņot, nepārtrauktība, g0, g1, g2, tangence, līkums, zebra, kontroles punkti, mezgli, pakāpe, step, iges, klase A, korpuss, gludināšana
from: 64ed5196
---

Darbvieta **Surfaces** veido gludas līknes un virsmas tādas, kādas izmanto izstrādājumu apvalkiem, auto virsbūvēm un laivu korpusiem: NURBS, tā pati matemātika, ko izmanto citi virsmu modelētāji. Viss tiek mērīts uz precīzām virsmām, nekad uz trijstūriem, ko redzat. Izmēri ir milimetros, kā pārējā PartCraft.

Izvēlieties **Surfaces** lodziņā **Darbvieta**. Rīkjoslā ir {{ui:Līkne}}, {{ui:Pārejas virsma}}, {{ui:Izvilkums}}, {{ui:Saskaņot}} un {{ui:Zebra}}; katra komanda ir panelī labajā pusē. Komanda norāda, kas tai vēl vajadzīgs: noklikšķiniet līknes vai virsmas skatā (tuvu malai vai galam, ja tas prasa) vai izvēlieties tās sarakstā; ierakstiet punktus vai noklikšķiniet tos uz detaļas virsmām (ārpus detaļas tie nokrīt uz zemes plaknes), tad nospiediet <kbd>Enter</kbd>.

Līknes un virsmas tiek saglabātas detaļas failā blakus cietajam ķermenim. Tās nemaina detaļas elementus: panelim ir savs **Atsaukt** un **Atkārtot**, viens solis katrai komandai.

## Līknes

- **Līkne caur punktiem** iet caur katru punktu, uz kuru noklikšķiniet. **Līkne pēc kontroles punktiem** seko punktu režģim.
- **Ievietot mezglu**, **Paaugstināt pakāpi** un **Pazemināt pakāpi** maina līknes aprakstu, nepārvietojot to (pazemināšana atsakās, ja līkne pārvietotos vairāk par pielaidi). **Pārveidot līkni** dod tai jaunu kontroles punktu skaitu un norāda, cik tālu tā pārvietojās.
- **Saskaņot līkni** liek vienas līknes galam satikties ar citas galu ar G0 (pieskaroties), G1 (vienāds virziens) vai G2 (arī vienāds līkums). **Sajaukt līkni** pievieno jaunu līkni starp diviem galiem, G1 vai G2.

## Virsmas

- **Pārejas virsma** caur divām vai vairākām līknēm, **Taisna virsma** starp divām, **Izvilkt līkni**, **Rotēt līkni**.
- **Izvilkums pa vienu sliedi** nes profilu pa ceļu bez vērpšanas; **Izvilkums pa divām sliedēm** tur profila galus abās sliedēs. Izvilkumi tiek pielāgoti: rezultāts norāda, cik tuvu tas palika patiesajam izvilkumam.
- **Virsma no līkņu tīkla** iet caur līkņu režģi (katra krusto katru no pārējām vienu reizi). **Ielāps no četrām malām** aizpilda četras līknes, kas satiekas savos stūros.
- **Saskaņot virsmu** liek virsmas malai satikties ar kaimiņu ar G0, G1 vai G2; **Sajaukt virsmu** pievieno virsmu starp divām malām.
- **Nobīdīt virsmu**, **Pagarināt virsmu** (virsma turpinās, kā tā gāja), **Pārveidot virsmu**.

## Kvalitātes pārbaude

Tabula **Kopīgās malas** uzskaita katru malu, ko dala divas virsmas, ar spraugu (mm), leņķi starp tām (°) un līkuma lēcienu (1/mm), un to, vai tas padara G0, G1 vai G2. Mala, kas ir sliktāka nekā prasījāt, parādās **Problēmās** ar labojumu **Saskaņot**. **Zebras** svītras un **līkuma** krāsas nāk no precīzās virsmas: svītras, kas neapstājas, šķērsojot malu, nozīmē G1; svītras, kas saglabā arī savu platumu, nozīmē G2.

G0–G2 tiek mērīti 33 punktos katrā malā. **G3 un "klases A" kvalitāte netiek mērīta** un netiek apgalvota.

## Virsmas apgriešana

Grupa **Apgriešana** apgriež virsmu, nemainot tās formu: virsma saglabā visus savus kontroles punktus, un tiek rādīta, saskaitīta un rakstīta tikai daļa iekš kontūras. **Apgriezt līdz taisnstūrim** un **Apgriezt ar riņķi** darbojas ar virsmas daļu (0 līdz 1) katrā virzienā, tāpēc tiem nav vajadzīga atlase skatā; **Apgriezt ar līkni** ņem slēgtu līkni, kas atrodas uz virsmas (tā tiek projicēta virsmā, un atsakās ar vārdiem, ja tā ir atvērta vai vairāk par pielaidi attālināta). Atzīmējiet **Izgriezt caurumu**, lai noņemtu kontūras iekšpusi; atstājiet to neatzīmētu, lai paturētu tikai iekšpusi. Virsmai var būt viena paturēta kontūra un jebkurs skaits caurumu; kontūra, kas krusto citu, tiek noraidīta. **Noņemt apgriešanu** parāda visu virsmu atpakaļ. Paneļa Atsaukt atceļ apgriešanu kā jebkuru citu soli.

STEP nes apgriešanu kā sejas robežas, bet IGES kā apgrieztu virsmu (elements 144); abi to nolasa atpakaļ.

## Cietie ķermeņi un Būla operācijas

Grupa **Cietie ķermeņi** pārvērš virsmas slēgtos ķermeņos un apvieno tos. Šeit cietais ķermenis ir paneļa pašu virsmu kopa, kas kopā aizver tilpumu; tā sejas paliek precīzas NURBS virsmas ar savām apgriešanām.

- **Kastes ķermenis**, **Cilindra ķermenis** un **Lodes ķermenis** veido vienu no ievadītiem izmēriem (mm): kastu ar sešām plakanām sejām, cilindru ar apaļu sānu virsmu un divām plakanām galvām, apgrieztām pa riņķi, lodi ar vienu rotētu virsmu.
- **Ciets ķermenis no virsmām** apvieno virsmas, ko esat izveidojis pats. Izvēlieties tās vai neizvēlieties nevienu, lai izmantotu visas redzamās virsmas, kas vēl nav cietā ķermenī. Tās tiek sašūtas kopā ar pielaidi: ja tās neaizveras, nekas nemainās, un panelis saka, cik malas paliek vaļā un cik tuvu tām jāsatiekas.
- **Apvienot**, **Atņemt** (otrais cietais ķermenis tiek atņemts no pirmā) un **Krustot** (tikai to, ko abi dala) ņem divus cietos ķermeņus: noklikšķiniet katra sejas skatā vai nospiediet **Izvēlēties** sarakstā **Cietie ķermeņi**. Atzīmējiet **Paturēt abus cietos ķermeņus**, lai tie paliktu blakus rezultātam.

Būla operācija paturē katru seju uz tās pašas precīzās virsmas un apgriež to ar jaunām apgriešanas kontūrām pa krustojumu. Rezultātu rinda sniedz izmērītos skaitļus: cik tālu cietā ķermeņa dzinēja punktiem bija jāpārvietojas, lai atrastos uz precīzām virsmām (nekad vairāk par pielaidi), cik tuvu krustojuma punkti atrodas abām virsmām (parasti dažas miljondaļas milimetra), tilpumu un to, vai jaunās sejas aizveras, ja tās atkal sašūj no to precīzajām virsmām. Tilpumi tiek mērīti uz trijstūriem pielaides robežās (0.05 mm, ja neiestatāt citu), tāpēc lodes vai cilindra tilpums rādās nedaudz zemāks par precīzo: mazāka pielaide tuvina. Būla operācija, ko nevar izpildīt tīri (cietie ķermeņi nedala nevienu daļu, kontūra krustotos pati ar sevi), tiek noraidīta ar vārdiem un nekas nemainās. Viena Būla operācija ir viens solis paneļa **Atsaukt**.

Sarakstā **Cietie ķermeņi** **Atgrupēt** paturē sejas kā parastas virsmas; **Miskaste** noņem cieto ķermeni un tā sejas.

## Noapaļojumi un sabiezināšana

**Noapaļojums starp virsmām** noapaļo malu, kur satiekas divas viena cietā ķermeņa sejas: izvēlieties abas sejas (skatā vai ar **Izvēlēties** sarakstā), ievadiet **rādiusu** un, ja rādiusam jāmainās pa malu, **rādiusu beigās** (0 paturē vienu rādiusu). Bumba šā rādiusa tiek ripināta pa malu, pieskaroties abām sejām; noapaļojums ir precīzā riņķa loks, ko tā atstāj katrā punktā, savienots vienā virsmā, un abas sejas tiek apgrieztas tur, kur bumba tās pieskaras. Ārējā mala zaudē materiālu, iekšējais stūris to iegūst. Rezultāta rinda sniedz izmērīto: cik tālu noapaļojuma virsma atrodas no ripinātās bumbas starp punktiem, no kuriem tā tika veidota (punkti tiek pievienoti, līdz tā ir četrās daļās no pielaides), lielāko leņķi starp noapaļojumu un katru seju pa pieskares līnijām, un tos pašus skaitļus kā Apvienošanai. Rādiuss, kas neiederas (bumba atstātu sejas vai seja liecas stingrāk nekā rādiuss), tiek noraidīts, nosaucot seju, un nekas nemainās.

**Noapaļot vairākas malas** noapaļo daudzas malas vienā solī: izvēlieties divas pirmās malas sejas, tad nākamās divas un tā tālāk (seja var būt vairākos pāros, piemēram, kastes augšējā seja četros no tiem); visas malas saņem ievadīto rādiusu. Katrs noapaļojums tiek aprēķināts uz cietā ķermeņa tādu, kāds tas bija, un tad tie tiek izgriezti vienu pēc otra, tāpēc secība nav svarīga. Kur divas noapaļotas malas satiekas stūrī, kura pārējās malas paliek asas, abi noapaļojumi saskrien pa savu krustojuma līniju (grēda). Kur trīs noapaļotas ārējās malas no trim plakanām sejām, kas savstarpēji ir taisnstūra, satiekas ar vienu rādiusu, stūris ir viens **sfēras gabals**, kas pieskaras visiem trim noapaļojumiem (noņemiet atzīmi **Stūri**, lai iegūtu grēdas stūri); mala, kur abi gali ir šādi stūri, jābūt vismaz divreiz garākai par rādiusu. Rezultāta rinda norāda, cik malu tika noapaļotas un kā izrādījās stūri. Iekšējās malas var noapaļot kopā, bet rezultāts, kas neaizveras, tiek tikai ziņots (rinda to saka), tāpēc pārbaudiet to.

**Sabiezināt līdz cietam ķermenim** piešķir virsmai biezumu: izvēlieties to, ievadiet **biezumu** un atzīmējiet **Otra puse**, lai to augtu otrādi. Nobīdītā seja tiek pielāgota virsmai un mērīta pret to (rezultāta rinda dod lielāko novirzi no biezuma); sienas seko katrai malai un katrai apgriešanas kontūrai. Ja virsma šajā pusē liecas stingrāk nekā biezums vai cita tās daļa atrodas tuvāk par biezumu, tā tiek noraidīta, nosaucot virsmu un vietu, un nekas nemainās.

## Cietā ķermeņa ielikšana detaļā

**Ielikt detaļā** (Surfaces rīkjoslā) vai **Ielikt detaļā** sarakstā **Cietie ķermeņi** padara cieto ķermeni par detaļas korpusu, tāpat kā atvērtais STL kļūst par vienu: izvēlieties cieto ķermeni, to, vai tas tiek **pievienots** detaļai, **izgriezts** no tās vai **krustots** ar to, un pielaidi (cik tālu trijstūri drīkst atrasties no precīzajām virsmām). Tas ir viens solis detaļas Atsaukt un parādās elementu sarakstā kā imports ar cietā ķermeņa nosaukumu. Detaļa paturēs trijstūrus, tāpēc tā atveras un pārbūvējas bez virsmām; precīzais ciētais ķermenis paliek Surfaces, tāpēc pēc izmaiņas to var ielikt vēlreiz.

## Faili

Eksportējiet **STEP** (AP242) vai **IGES** ar līknēm un virsmām tieši tādā formā, kāda tās ir (B-spline līknes un virsmas, nekas nepārvērsts trijstūros). Katra virsma ir sava seja ar savu apgriešanu; cietais ķermenis tiek rakstīts kā viens slēgts apvalks, katra mala dalīta ar savām divām sejām, kā sagaida citas CAD programmas (statusa rinda saka, cik cieto ķermeņu tā izgāja). IGES tas pats cietais ķermenis ir viens vienkāršs cietais B-rep (elements 186 pāri slēgtam apvalkam 514, sejas 510, cilpas 508, viens malu saraksts 504 un viens virsotņu saraksts 502); ciētais ķermenis, kura sejas nesapārojas mala pa malai, tiek rakstīts kā atsevišķas sejas, un rinda to saka. **Imports…** nolasa šādu cieto ķermeni atpakaļ kā cieto ķermeni, gan no STEP, gan no IGES.

## Korpusa līniju gludināšana

**Gludināt** (Surfaces rīkjoslā) mēra katru līkni uz tās precīzās formas — pārliekumus (kur tā maina liekšanos no vienas puses uz otru), lielāko līkumu, līkuma lēcienus tās mezglos un tās raupjumu — un pārveido tās, kam ir pārliekums vai lēciens, ar mazāko kontroles punktu skaitu, kas paliek pielaides robežās, ko dodat, un nepievieno pārliekumu. Zīmējiet špangas, ūdenslīnijas un sānu līnijas kā līknes, gludiniet tās, tad **Pārejas virsma** korpusu caur špangām un pārbaudiet to ar **Zebra**. Nelīdzenās līknes parādās arī **Problēmās** ar labojumu **Gludināt šo līkni**. Līnija, kam jāmaina virziens (S formas griezums), paturē šo vienu pārliekumu. Korpusa izspaidi, centri un atjaunošanas svira nāk no cietās detaļas: skatiet hidrostatikas rīku.

## Virsmas no skenējuma (reversais inženierijas process)

Atveriet detaļu, kurā ir skenētais tīkls (atvērts STL vai ielikts korpuss), izvēlieties **Surfaces** lodziņā **Darbvieta** un grupā **Skenējums** izvēlieties **Pielāgot virsmas skenējumam**; detaļas izveidotais tīkls ir skenējums. Rīks meklē **plaknes**, **cilindrus**, **sfēras** un **konusus** (precīzās virsmas, no kurām veidota apstrādāta detaļa; katra rinda rāda rādiusu vai pusleņķi, ko tā atrada), atrod **noapaļojumus** (noapaļotas malas un stūrus: mazu cilindru vai sfēru, kas pieskaras divām vai vairākām citām sejām, un rāda ar rādiusu un sejām, ko tas savieno), **malu noapaļojumus** (tors: noapaļotu malu, kur plakana seja satiek cilindru vai konusu, un rāda ar rādiusu un gredzena rādiusu) un **mainīgus noapaļojumus** (noapaļotu malu, kuras rādiuss mainās pa to, un rāda rādiusu katrā galā), pielāgo **vienu brīvformas ielāpu** gludam, viegli liektam gabalam un apgriež katru seju līdz skenējuma daļas kontūrai, no kuras tā nākusi, tāpēc caurumi un stūri paliek. Iespējas: **pielaide** (cik tālu, mm, skenējuma punkts drīkst atrasties no plaknes vai cilindra un joprojām piederēt tam, un mērķis brīvformas ielāpam), **mazākais gabals** (virsmas laukuma daļa) un **vairākas sejas**. Tas pats skenējums un tās pašas iespējas vienmēr dod tās pašas sejas.

Rezultāts ir tabula, viena rinda katrai sejai: tās veids, cik trijstūru tā nākusi, un kļūda, **izmērīta no skenējuma līdz sejai** (rms, lielākā un to punktu daļa, kas ir pielaides robežās). Mērītie punkti ir skenējuma virsotnes un katra trijstūra vidus. Kļūda netiek mērīta otrādi (sejas līdz skenējumam), tāpēc seja, kas sniedzas pāri skenējumam, neparādītos. Piezīme zem tabulas saka arī, cik lielas daļas laukums bija par mazu, lai to pielāgotu. Skatā skenējuma punkti tiek krāsoti pēc to **novirzes kartes**: zili uz sejas, zaļi pusceļā līdz pielaidei, sarkani pielaidē vai virs tās (noņemiet atzīmi **Rādīt novirzes karti**, lai to paslēptu). Gabali, kas salokās paši uz sevi (piemēram, slēgta caurule, pielāgota ar brīvformas ielāpiem), tiek uzskaitīti kā nepielāgoti, nekad nespiesti vienā virsmā.

**Savīt virsmas ciētā ķermenī** sašuj katru redzamo virsmu, kas vēl nav cietā ķermenī, vienā slēgtā cietā ķermenī. Skenējuma sejas saskaras tikai līdz skenējuma pašai kļūdai, tāpēc tas izmēģina mazāko savienojuma attālumu, kas aizveras (nekad vairāk par **savienojuma attālumu**, ko iestatāt), un atsakās ar vārdiem, ja sejas neaizveras. Tas nekad neaizlāpa spraugu. Kastei ar noapaļotām malām savīšana izdodas, ja tās noapaļojumi tika atrasti kā atsevišķas sejas; savienojuma attālums, kas aizvēra, ir rezultātā. Cietais ķermenis pēc tam darbojas ar Apvienot, Atņemt, Krustot un **Ielikt detaļā**.

Ko tas nedara: **malu noapaļojums** (tors) tiek meklēts tikai ap jau atrasta cilindra vai konusa asi, un **mainīgs noapaļojums** tikai gar samērā taisnu malu (tā griezumi ir nogriezti taisni pret vienu virzienu); citur tie iznāk kā brīvformas ielāpi, ja pietiekami gludi, un citādi tiek atstāti ārpusē; sfēras, konusi un noapaļojumi tiek atrasti ar nejaušu paraugu ņemšanu, tāpēc ļoti mazs (dažus trijstūrus) var palikt nepamanīts; novirzes karte rāda attālumu no skenējuma līdz sejām, nevis otrādi; ļoti lieli skenējumi (vairāk par 300 000 trijstūriem) šeit tiek noraidīti. Sejas pilna apgrieziena cilindram tiek izgrieztas ap caurumiem, ar šuvi novietotu tur, kur nav cauruma. Pārbaudiet katru seju pret savu skenējumu, pirms uz to paļaujaties.

## Vēl nav izveidots

Malu noapaļošana, kas satiekas stūrī izliektām virsmām vai ar dažādiem rādiusiem (virsotnes sajaukums); noapaļojums starp sejām, kas nesatiekas; iekšējs noapaļojums, kas beidzas uz slīpas vai izliektas sejas; Būla operācijas un noapaļojumi, kas aprēķināti uz virsmām bez trijstūriem (šeit cietā ķermeņa dzinējs strādā uz trijstūriem pielaides robežās, un katrs punkts tad tiek ielikts atpakaļ uz precīzajām virsmām); ielikts korpuss, kas seko virsmām, kad tās mainās; virsmas apgriešana ar citu virsmu ārpus Būla operācijas; caurumu aizpildīšana ar vairāk nekā četrām malām; līkņu projicēšana uz virsmām.
