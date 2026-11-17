---
title: Detaļu pārsūtīšana uz citiem detaļu modelētājiem un no tiem
summary: Nosūtiet detaļu uz citu detaļu modelētāju kā makro, kas to atkārtoti izveido ar dzīvu elementu koku. Nosauktais STEP un citu modelētāju izveidota elementu saraksta atvēršana šajā versijā vēl nav izveidota.
keywords: makro, nav izveidots, swb, vba, elementu koks, pārsūtīšana uz priekšu un atpakaļ, eksportēt makro, cadcraft-sw.json, nosauktais step, ap214, globālie mainīgie, vienādojumi, pamata detaļa
from: 97ca61da
---

PartCraft apmainās ar detaļām ar SolidWorks abos virzienos, bez faila formāta, ko neviens cits nevar nolasīt:

- **Uz āru:** makro (`.swb`, vienkāršs teksts), ko SolidWorks izpilda, lai pats izveidotu detaļu, elements pa elementam, ar tās skicēm, sakarībām, izmēriem, globālajiem mainīgajiem un vienādojumiem. Jūs iegūstat vietēju detaļu ar dzīvu elementu koku, nevis nedzīvu ķermeni.
- **Atpakaļ:** makro, ko palaižat SolidWorks iekšienē, ieraksta detaļas elementus un vienādojumus failā `.cadcraft-sw.json`. Šī faila atvēršana PartCraft šajā versijā vēl nav izveidota (tai nepieciešams precīzs kodols).

:::warning
Nekas no tā vēl nav pārbaudīts SolidWorks. SolidWorks darbojas tikai Windows sistēmā ar licenci, un PartCraft šos makro tajā nekad nav palaidis. Makro rakstīti pēc SolidWorks API dokumentācijas un pārbaudīti šeit tikai struktūras ziņā. Gaidāms, ka ziņosiet par problēmām; makro ierakstītais žurnāls norāda, kurš solis neizdevās.
:::

PartCraft nevar rakstīt failu `.sldprt`: šis formāts ir slēgts. Makro ir ceļš uz vietēju detaļu.

## Nosūtīt detaļu kā makro

1. Atveriet detaļu.
2. Izvēlieties {{ui:Eksportēt}}, tad {{ui:Makro SolidWorks vajadzībām (.swb)}}. PartCraft lejupielādē `<part>.swb`; statusa josla saka, ka tas ir uzrakstīts „bez precīzā kodola”.
3. Dialogs saka, cik elementu, globālo mainīgo un vienādojumu makro izveido, un uzskaita visu, ko tas neiekļauj. Līdzās tam šajā versijā STEP nav: ja vajag, izvēlieties {{ui:Eksportēt}}, tad {{ui:STEP (facetēts, tīkla kodols)}}.
4. SolidWorks izvēlieties **Tools > Macro > Run**, atlasiet `.swb` failu un uzgaidiet. Tas izveido jaunu detaļu no jūsu noklusējuma detaļu veidnes, iestata milimetrus un izveido katru elementu.
5. Beigās ziņojums saka, cik soļu izpildīti, cik neizdevās un cik atbilst PartCraft ķermenim. Pilns žurnāls, `<part> macro log.txt`, tiek rakstīts blakus makro.

Ko makro izveido:

| PartCraft | Jaunajā detaļā |
|---|---|
| Skice uz priekšējās, augšējās vai labās plaknes | Skice uz šīs plaknes ar tās līnijām, lokiem, riņķiem, punktiem, sakarībām un izmēriem (nosaukti kā PartCraft, piemēram, `k7`) |
| Skice uz virsmas | Skice uz tās pašas virsmas, atlasīta ar punktu uz tās |
| Skice uz fiksētas plaknes | Atsauces plakne caur trim punktiem un skice uz tās |
| Izvilkums, izgriezums (akls, cauri visam, vidusplakne, divi virzieni, konuss) | Pieaugošais izvilkums vai izgriezuma izvilkums |
| Rotācija, rotēts izgriezums | Rotācija ap to pašu centrālo līniju |
| Caurums (vienkāršs, cilindrisks paplašinājums, konusveida paplašinājums, vītnēts) | Viens vai divi griezumi ar savām skicēm (vītnētais caurums ir tā urbja izmērs; vītne nav) |
| Lineārs un cirkulārs masīvs, spoguļošana | Lineārs masīvs, cirkulārs masīvs, spoguļošana (elementi vai ķermenis) |
| Noapaļojums, nošķelšana, čaula | Noapaļojums, nošķelšana un čaula uz tām pašām malām un virsmām, atlasītām ar punktiem |
| Parametri un vienādojumi | Globālie mainīgie un vienādojumi pārdēvētajos izmēros |
| Apturētie elementi, atgriešanās josla | Apturēti tāpat; atgriešanās josla tajā pašā vietā |

Pēc katra cietā elementa makro salīdzina ķermeņa tilpumu un izmērus ar PartCraft. Ja tie atšķiras, tas vienreiz apgriež šī elementa virzienu un pārbauda atkārtoti; ja tas nav labāk, to atgriež un žurnālā raksta „Check”.

### Kas nav iekļauts

Dialogs un makro sākums uzskaita visu, kas nav pārnests, ar iemeslu. Šobrīd tie ir: importētie cietie ķermeņi (ievietojiet STEP), pārvilkumi, lokšķi, slīpumi, atsauces asis un punkti, beigu nosacījumi „līdz”, izvilkums tikai dažiem kontūriem un viss, kas no tiem ir atkarīgs. Splaini kļūst par līknēm caur saviem punktiem. Šai versijai nav precīza kodola, tāpēc skices uz virsmām un elementi, kas izvēlas malas vai virsmas, arī netiek iekļauti.

## Nosūtīt nosaukto STEP

Šajā versijā vēl nav izveidots: {{ui:STEP SolidWorks vajadzībām (nosaukts, AP214)}} nepieciešams precīzs kodols, un to izvēloties, parādās „STEP SolidWorks vajadzībām: vēl nav izveidots. …”. Ar precīzu kodolu fails satur detaļas nosaukumu, milimetrus un detaļas krāsu, un stāv Y asī augšup, tā kā SolidWorks rāda detaļas (vienkāršais {{ui:STEP AP214 (precīzs cietais ķermenis)}} eksports stāv Z asī augšup). Burti ar akcentiem nosaukumā zaudē tos, un citas rakstzīmes ārpus vienkāršā ASCII kļūst par `_`.

## Atgriezt detaļu

Faila atvēršana PartCraft (3. solis) šajā versijā vēl nav izveidota: tā saka „SolidWorks eksporta atvēršana: vēl nav izveidota. …”. CadCraft rasējumu lietotne joprojām atver failu un ņem tā skices.

1. Izvēlieties {{ui:Fails}} > {{ui:Eksportēt}} > {{ui:Eksporta makro detaļu atgriešanai (.swb)}}, lai lejupielādētu `CadCraftExport.swb`, un ievietojiet to blakus savām detaļām.
2. SolidWorks atveriet detaļu, izvēlieties **Tools > Macro > Run** un atlasiet `CadCraftExport.swb`. Tas raksta `<part>.cadcraft-sw.json` blakus detaļai un neko tajā nemaina.
3. PartCraft izvēlieties {{ui:Atvērt}} un atlasiet šo failu vai nometiet to 3D skatā.
4. Ar precīzu kodolu PartCraft atjauno detaļu elementu pa elementam un parāda, ko tas darīja, piemēram: „5 no 5 elementiem pārnesti no SolidWorks (Flange.SLDPRT)”, katru elementu, ko nevarēja pārnest („Nav pārnests: Sweep1 (Sweep).”), un to, vai tilpums sakrīt ar SolidWorks ierakstīto.
5. Saglabājiet to kā PartCraft detaļu ar {{ui:Saglabāt}}.

Skices nonāk uz pamatplaknes, ja tās atrodas uz tādas, uz atbilstošās plakanās detaļas virsmas, ja tāda ir (tādā veidā tās seko vēlākiem labojumiem), un citādi uz fiksētas plaknes. Noapaļojumu, nošķelšanu un čaulu malas un virsmas tiek atrastas pēc punktiem un saglabātas kā nosauktas atsauces. Globālie mainīgie kļūst par parametriem (nosaukumos ar atstarpēm atstarpes aizstāj ar `_`: „Bolt count” kļūst par `Bolt_count`), un vienādojumi kļūst par vienādojumiem tajos pašos izmēros. Nekas netiek minēts: viss, kam nav atbilstības, tiek uzskaitīts.

CadCraft rasējumu lietotne atver to pašu failu un ņem tā skices.

:::note
Formāts ir `cadcraft-sw-export` versija 1: vienkāršs JSON milimetros un grādos. Fails no jaunāka makro vai nederīgs fails tiek noraidīts ar iemeslu.
:::
