---
title: Noapaļojiet, nošķeliet un iedobiet ar Noapaļojumu, Nošķelšanu un Čaulu
summary: Atlasiet malas un pievienojiet konstanta vai mainīga rādiusa noapaļojumus un vienādus, divu attālumu vai attāluma un leņķa nošķelumus; iedobiniet detaļu ar Čaulu, atlasot atverāmās virsmas, mainiet, kuras malas vai virsmas izmanto funkcija, un labojiet parastās kļūmes.
keywords: noapaļojums, noapaļot, saplūdums, nošķelšana, slīpa mala, čaula, dobums, sienas biezums, malas, virsmas, atlasīt malas, shift klikšķis, atvērta virsma, precīzs kodols, tīkla kodols, nav izveidots
from: e41c1c12
---

:::note
**Šajā versijā** PartCraft veido noapaļojumus un nošķelšanas ar tīkla kodolu, tikai uz **taisnām malām starp divām plakanām virsmām**: kastes malas un izvilkumu un griezumu taisnās malas, ārējiem vai iekšējiem stūriem (iekšējais stūris pievieno materiālu). Apaļas malas, piemēram, caurumu malas, un rādiuss, kas mainās pa malu, vēl nav izveidotas. Kur divas noapaļotas malas satiekas stūrī, noapaļojumi ir sašķelti (tie satiekas asā šķautnē), nevis saplūduši. **Čaula** arī darbojas, to veido tīkla kodols: tā atver tikai plakanas virsmas, sienas ar dažādu biezumu vēl nav izveidotas, un tā ir lēna detaļām ar daudzām apaļām virsmām. Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
:::

{{ui:Noapaļojums}} noapaļo malas, {{ui:Nošķelšana}} tās nošķeļ, un {{ui:Čaula}} iedobina detaļu. Visi trīs darbojas ar cietā ķermeņa malām un virsmām un tiek veidoti ar tīkla kodolu. To noapaļojumi ir facetēti kā katra apaļa virsma (**Līknes** nosaka, cik smalki); apaļās virsmas ir cilindri, ko var atlasīt un izmērīt (skatiet [Tīkla kodols](topic:solid-kernels)).

## Noapaļojiet vai nošķeliet malas

### Vispirms atlasiet malas

1. Noklikšķiniet uz detaļas malas. Visa mala izceļas, un labajā panelī parādās **Mala**: tās veids (Taisna, Aplis vai loks, Līkne), garums un virsmas, starp kurām tā atrodas.
2. Lai pievienotu vairāk malu, {{key:Shift}}+klikšķiniet tās. Katra tiek atzīmēta; {{key:Shift}}+klikšķiniet uz atzīmētas malas, lai to noņemtu. Paneļa virsraksts saskaita tās ("4 malas"), un statusa josla saka: "4 malas atlasītas. Noapaļojums vai Nošķelšana tās noapaļo; Shift+klikšķis atlasa vairāk, Esc notīra."
3. Izvēlieties {{ui:Noapaļojums}} vai {{ui:Nošķelšana}} rīkjoslā vai tās pašas pogas labajā panelī.

Funkcija tiek pievienota ar visām atlasītajām malām: 2 mm noapaļojums vai 1 mm nošķelums. Statusa josla saka, piemēram: "Fillet1 pievienots (4 malas). Mainiet tā izmēru labajā pusē; {{ui:Atlasīt malas}} maina, kuras."

### Vai vispirms pievienojiet funkciju

1. Ja nekas nav atlasīts, izvēlieties {{ui:Noapaļojums}} vai {{ui:Nošķelšana}}.
2. PartCraft pāriet atlasē: labā paneļa virsraksts saka "Fillet1: atlase", detaļa rādās tāda, kāda tā bija pirms noapaļojuma (panelis to norāda), un rīkjosla rāda {{ui:Gatavs}}.
3. Noklikšķiniet uz katras malas, lai to pievienotu; noklikšķiniet vēlreiz, lai to noņemtu. Statusa josla tās saskaita.
4. Izvēlieties {{ui:Gatavs}} (vai {{ui:Atlase pabeigta}} panelī), vai nospiediet {{key:Esc}} vai {{key:Enter}}.

### Iestatījumi

| Iestatījums | Noapaļojums | Nošķelšana |
|---|---|---|
| Izmērs | **Rādiuss (mm)**, noklusējums 2 | **Attālums (mm)** atpakaļ no malas abās virsmās, noklusējums 1 |
| **Malas** | Cik | Cik |

Saraksts zemāk nosauc katru malu pēc divām virsmām, ko tā savieno, piemēram, "Mala 1: Extrude1 end face × Extrude1 side". **Noņemt** izņem vienu. {{ui:Atlasīt malas}} atgriež atlasē. Divreiz noklikšķinot uz funkcijas vēsturē, notiek tas pats.

Malas tiek atcerētas pēc divām virsmām, ko tās savieno, tāpēc tās paliek pareizajā malā, kad mainiet izmēru agrāk vēsturē.

### Mainīga rādiusa noapaļojumi un nošķelšanas veidi

- **Mainīgs rādiuss** (noapaļojums): šajā versijā vēl nav izveidots ("Noapaļojums, kura rādiuss mainās pa malu: vēl nav izveidots (nepieciešams precīzs kodols). Dodiet vienu rādiusu."). Ar precīzu kodolu: atzīmējiet to un iestatiet **Beigu rādiuss (mm)**. Rādiuss lineāri mainās no **Rādiusa** vienā katras malas galā līdz **Beigu rādiusam** otrā; **Apmainīt galus** to apgriež.
- **Veids** (nošķelšana): **Vienāds attālums**, **Divi attālumi** (**Otrais attālums** otrā virsmā) vai **Attālums un leņķis** (attālums vienā virsmā, slīpums **Leņķis (°)** pret to). **Mainīt pusi** novieto pirmo attālumu otrā virsmā.

## Iedobiniet detaļu

1. Noklikšķiniet uz plakanas virsmas, ko atstāt atvērtu, piemēram, kastes augšdaļu. Vai {{key:Shift}}+klikšķiniet vairākas virsmas.
2. Izvēlieties {{ui:Čaula}} rīkjoslā vai {{ui:Čaula, atverot šo virsmu}} virsmas panelī.

Detaļa kļūst par 2 mm sienu ar atlasītajām virsmām atvērtām. Iestatījumi:

| Iestatījums | Ko dara | Noklusējums |
|---|---|---|
| **Siena (mm)** | Sienas biezums | 2 |
| **Sienas aug uz āru (virsmas paliek iekšpusē)** | Atzīmēts: sienas tiek pievienotas ārpusē, tāpēc iekšpuse saglabā detaļas izmēru | Izslēgts: sienas iet uz iekšu un ārpuse saglabā izmēru |
| **Atvērtās virsmas** | Cik virsmu tiek noņemtas | |

Iekšup sienas ir tieši sienas biezums: ārējie stūri paliek asi, iekšējie stūri ir apaļi (rādiuss = siena), un caurums caur detaļu iegūst cauruli ap sevi. Uz āru sienas tiek pievienotas ārpus sākotnējās virsmas, kas kļūst par dobumu, un ārējās malas ir apaļas. Iekšējās virsmas ir nosauktas pēc virsmām, ko tās nobīda, lai tās varētu atlasīt.

Atvērt var tikai plakanas virsmas: izvēloties izliektu, tiek rādīts ziņojums "Čaula: šajā versijā tā atver tikai plakanas virsmas (tīkla kodols to veido)." Čaula ir lēna detaļām ar daudzām apaļām virsmām (vairākas sekundes uz tūkstoti trijstūru): projektēšanas laikā izmantojiet rupjāku iestatījumu **Līknes**.

{{ui:Atlasīt virsmas}} maina, kuras virsmas ir atvērtas, tāpat kā malu atlasē. Saraksts nosauc katru, piemēram, "Virsma 1: Extrude1 end face". Čaula bez atvērtām virsmām nav atļauta: "Atlasiet virsmas, ko noņemt (atvērt), un tad iedobiniet."

## Secība ir svarīga

Funkcijas tiek pārbūvētas no augšas uz leju. Noapaļojums pirms čaulas tiek iedobināts kopā ar detaļu, tāpēc arī iekšpusē ir noapaļoti stūri. Noapaļojums pēc čaulas noapaļo tikai tās malas, ko atlasāt. Pārvietojiet funkcijas ar {{ui:Pārvietot augšup}} un {{ui:Pārvietot lejup}} (skatiet [Mainiet detaļu caur tās vēsturi](topic:edit-history)).

Šablonus un spoguļus nevar kopēt noapaļojumu, nošķelšanu vai čaulu: "Fillet1 maina ķermeņa malas vai sienas; to nevar kopēt. Kopējiet funkcijas, kas veido cietos ķermeņus (izvilkumus, rotācijas, caurumus, importus)." Vispirms veidojiet caurumu vai griezumu rakstus, tad noapaļojiet visu kopiju malas vienā noapaļojumā.

## Kad neizdodas

| Ziņojums | Ko darīt |
|---|---|
| "5 mm noapaļojums šeit neiekļaujas (tas ir pārāk liels virsmai blakus vienai no malām vai malas satiekas stūrī, ko kodols nevar saplūdināt)." | Izmantojiet mazāku rādiusu vai noapaļojiet mazāk malu vienlaikus (vairākas noapaļojuma funkcijas, mazākā pēdējā) |
| "Mala, ko tā noapaļo, ir zudusi: mala starp Extrude1 un Cut2." | Iepriekšēja izmaiņa noņēma šo malu. Izvēlieties {{ui:Atlasīt malas}}, noņemiet sarkano malu un atlasiet jauno |
| "Čaulu nevarēja izveidot ar šādu biezumu (…)." | Siena ir biezāka par šauru modeļa daļu vai par noapaļojuma rādiusu. Padariet sienu plānāku vai noapaļojumus lielākus par sienu |
| "Šai virsmai nav nosaukuma, ko vēsture var izsekot; izvēlieties citu." | Atlasiet virsmu, ko izveidojusi funkcija (lielākā daļa virsmu ir tādas) |
| "Noapaļojums: šajā versijā tikai taisnas malas starp divām plakanām virsmām (tīkla kodols tās veido). Noapaļojiet vai nošķeliet izliektas malas skicē." (arī Nošķelšanai) | Atlasītā mala ir apaļa, piemēram, caurumu mala, vai atrodas uz izliektas virsmas. Noņemiet to ar {{ui:Atlasīt malas}} un noapaļojiet vai nošķeliet šo stūri skicē |
| "Noapaļojums, kura rādiuss mainās pa malu: vēl nav izveidots (nepieciešams precīzs kodols). Dodiet vienu rādiusu." | Noņemiet atzīmi no **Mainīgs rādiuss** |
| "Noapaļojums ar tīkla kodolu: vietās, kur noapaļotās malas satiekas, tās ir sašķeltas, nevis saplūdušas." (⚠ vēsturē) | Brīdinājums, nevis kļūda: detaļa ir izveidota. Atlasītās malas satiekas stūrī, un noapaļojumi tur satiekas asā šķautnē. Noapaļojiet mazāk malu vai pieņemiet šķautni |
| "Čaula: šajā versijā tā atver tikai plakanas virsmas (tīkla kodols to veido)." | Atvērtā virsma ir izliekta. {{ui:Atlasīt virsmas}} un noņemiet to; atveriet tikai plakanas virsmas |

## Ierobežojumi

Šajā versijā noapaļojumi un nošķelšanas darbojas tikai ar taisnām malām starp divām plakanām virsmām, ar vienu rādiusu, un noapaļojumi, kas satiekas stūrī, ir sašķelti. Čaulas atver tikai plakanas virsmas. Ar precīzu kodolu mainīgs noapaļojums mainās lineāri pa katru malu (viens likums katrai funkcijai; nav rādiusa punktos gar to). Virsmu noapaļojumi, pilni apaļie noapaļojumi un čaulas ar dažādu sienu biezumu vēl nav izveidoti.
