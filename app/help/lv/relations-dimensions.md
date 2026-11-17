---
title: Pilnībā definēt skici ar relācijām un izmēriem
summary: Pievienojiet relācijas no labā paneļa un izmērus ar izmēra rīku, lasiet nepietiekami, pilnībā un pārāk definēto krāsas un labojiet pārāk definētu skici.
keywords: relācijas, ierobežojumi, izmēri, viedais izmērs, pilnībā definēts, nepietiekami definēts, pārāk definēts, brīvības pakāpes, sakrītošs, horizontāls, vertikāls, paralēls, perpendikulārs, pieskares, vienāds, koncentrisks, viduspunkts, fiksēt, konflikts, lieks
from: e76d047a
---

Skice ir **pilnībā definēta**, kad katrs punkts un katrs izmērs ir nofiksēts ar relācijām un izmēriem. Pilnībā definēta skice mainās tikai tad, kad maināt skaitli, tāpēc detaļa vēlāk rediģējot uzvedas paredzami. PartCraft neliek jums pilnībā definēt skici, bet vienmēr parāda, cik tuvu esat.

## Skices stāvokļa lasīšana

Stāvoklis ir redzams trīs vietās: čipā skata augšējā kreisajā stūrī, ziņojumā labā paneļa augšā un karodziņā vēsturē.

| Stāvoklis | Čips | Ģeometrijas krāsa | Ko tas nozīmē |
|---|---|---|---|
| Nepietiekami definēta | "Nepietiekami definēta · 3 brīvības pakāpes" | Zila | Daļa ģeometrijas vēl var pārvietoties. Velciet zilo ģeometriju, lai redzētu, kurā virzienā |
| Pilnībā definēta | "Pilnībā definēta" | Tinte (melna uz Paper, gaiša uz Model) | Katrs punkts un izmērs ir nofiksēts |
| Pārāk definēta | "Pārāk definēta" | Sarkana uz iesaistītajām relācijām | Dažas relācijas viena otru noliedz, vai kāda jau izriet no citām |

Konstrukcijas ģeometrija ir pelēka un punktēta neatkarīgi no stāvokļa. Atlasītie vienumi ir oranži. "Brīvības pakāpe" ir viens veids, kā kaut kas vēl var pārvietoties: brīvam punktam ir divas (pa kreisi–pa labi un augšup–lejup), brīvam aplim trīs (tā centrs un rādiuss).

Leģenda ziņojuma apakšā labajā panelī atkārto krāsas.

## Izmēra pievienošana

1. Nospiediet {{key:D}} vai izvēlieties {{ui:Izmērs}}.
2. Noklikšķiniet uz tā, ko mērīt:
   - **viena līnija**: tās garums;
   - **viens aplis**: tā diametrs; **viens loks**: tā rādiuss;
   - **divi punkti** (gala punkts, centrs, brīvs punkts vai sākumpunkts): attālums starp tiem;
   - **punkts un līnija**: attālums no punkta līdz līnijai;
   - **divas paralēlas līnijas**: attālums starp tām; **divas līnijas leņķī**: leņķis starp tām.
3. Pēc viena vienuma statusa joslā rakstīts: "Noklikšķiniet uz otrā vienuma vai tur, kur jāatrodas izmēram." Noklikšķiniet uz otrā vienuma vai tukšā vietā, kur vēlaties skaitli.
4. Atveras skaitļa lodziņš ar pašreizējo vērtību. Ierakstiet izmēru un nospiediet {{key:Enter}}. {{key:Esc}} saglabā izmērīto vērtību.

**Vietas izvēle nosaka veidu** slīpai līnijai vai diviem punktiem: novietojiet to virs vai zem, lai iegūtu horizontālu attālumu; pa kreisi vai pa labi, lai iegūtu vertikālu attālumu; un citur, lai iegūtu patieso (izlīdzināto) attālumu.

Lodziņš pieņem vienkāršus skaitļus milimetros vai grādos, piemēram, `25`, `12.5` vai `1e3`. Vadošais `⌀`, `Ø` vai `R`, vai beigu `mm` vai `°` tiek ignorēts. Leņķi ir no 0 līdz 180 grādiem. Aritmētika, piemēram, `20+5`, netiek pieņemta; lai saistītu izmēru ar mainīgo vai formulu, sāciet to ar `=`.

Lai vēlāk mainītu izmēru, veiciet dubultklikšķi uz tā skaitļa skicē, vai labajā panelī sarakstā izvēlieties blakus esošo **Rediģēt**.

:::tip
Varat arī vispirms atlasīt ģeometriju (Atlasīt rīkā) un labajā panelī izvēlēties izmēra pogu: {{ui:Attālums}}, {{ui:Horizontālais attālums}}, {{ui:Vertikālais attālums}}, {{ui:Rādiuss}}, {{ui:Diametrs}} vai {{ui:Leņķis}}. Rāda tikai tās, kas atbilst atlasei. Tas ir veids, kā aplim dot rādiusu, nevis diametru.
:::

## Relācijas pievienošana

Relācijas tiek pievienotas no labā paneļa, nevis ar rīku.

1. Nospiediet {{key:S}}, lai atlasītu.
2. Noklikšķiniet uz viena vienuma, tad {{key:Shift}}+klikšķis uz otra, ja relācijai vajadzīgi divi. Sākumpunktu var atlasīt arī.
3. Labajā panelī rakstīts "Atlasīts: līnija l3, punkts p1" un parādīta poga katrai derīgai relācijai, piemēram, {{ui:∥ Paralēls}} vai {{ui:• Sakrītošs}}.
4. Izvēlieties pogu. Skice tiek atrisināta uzreiz.

Ja neviena relācija neder, panelī rakstīts: "Neviena relācija neatbilst šai atlasei. Atlasiet vienu vai divus vienumus (Shift+klikšķis pievieno)."

Pilns relāciju saraksts, ko katra prasa un ko tā dara, ir sadaļā [Skices relācijas un izmēri](topic:sketch-relations).

Relācijas skicē redzamas kā mazi simboli blakus ģeometrijai (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Sakrītības punkti ir paslēpti, ja vien ģeometrija nav atlasīta vai relācijai nav problēmu. Noklikšķiniet uz simbola, lai atlasītu relāciju.

## Darba piemērs: L formas kronšteina profils

1. Skicējiet uz **Front plane**. Ar līnijas rīku sāciet sākumpunktā un noklikšķiniet uz sešiem L stūriem, beidzot atkal sākumpunktā. Ķēde beidzas pati, kad noklikšķiniet uz pirmā punkta.
2. Līnijas, kas zīmētas gandrīz horizontāli vai vertikāli, jau ir H un V relācijas, izņemot pēdējo: līnija, kas beidzas esošā punktā, automātisku relāciju nesaņem. Nospiediet {{key:S}}, noklikšķiniet uz šīs pēdējās līnijas un labajā panelī izvēlieties {{ui:V Vertikāls}}. Čipā rakstīts "Nepietiekami definēta · 4 brīvības pakāpes".
3. Nospiediet {{key:D}}. Noklikšķiniet uz apakšējās līnijas, noklikšķiniet zem tās, ierakstiet `80`, {{key:Enter}}.
4. Noklikšķiniet uz kreisās līnijas, noklikšķiniet pa kreisi no tās, ierakstiet `60`, {{key:Enter}}.
5. Dimensionējiet augšējo īso līniju ar `20` un iekšējo vertikālo līniju ar `45` tādā pašā veidā.
6. Čipā tagad rakstīts **Pilnībā definēta**, un viss L kļūst tintes krāsā.

## Pārāk definētas skices labošana

Kad jauna relācija vai izmērs konfliktē ar citiem, PartCraft neko nepārvieto. Ģeometrija paliek tieši tāda, kāda bija, iesaistītās relācijas kļūst sarkanas, un statusa josla tās nosauc:

- "Pārāk definēta: Horizontāls, Attālums 40 nevar visi izpildīties. Atsauciet vai dzēsiet vienu no tām." Relācijas konfliktē.
- "Pārāk definēta: Paralēlisms jau izriet. Dzēsiet to." Relācija nekā nepievieno: citas to jau nosaka. (Piemēram, taisnstūra malas jau ir paralēlas.)

Lai to labotu:

1. nospiediet {{key:Mod+Z}}, lai atsauktu pēdējo izmaiņu, vai
2. atrodiet sarkano vienumu sarkanajā sarakstā **Relācijas un izmēri** labajā panelī (grupa, kas to satur, ir atvērta un sarkana) un izvēlieties blakus esošo **Dzēst**. Varat arī noklikšķināt uz tā simbola vai skaitļa skicē un nospiest {{key:Delete}}.

:::note
Šajā versijā nav "vadāmu" (atsauces) izmēru. Izmērs, kas tikai parādītu lielumu, ko jau nosaka citas relācijas, tiek uzskatīts par pārāk definētu. Izmērus lasiet panelī: atlasiet līniju un apskatiet izmēra pogas, vai pārbaudiet detaļas faktus pēc izvilkšanas.
:::

Pārāk definēta skice ar reālu konfliktu liek elementam, kas to izmanto, neizdoties ("Pārāk definēta: 1 relāciju nevar izpildīt visas."), un vēsturē tas atzīmēts kā **⚠ kļūda**. Skice, kas ir tikai lieka, joprojām tiek pārbūvēta, ar ⚠ brīdinājumu.

## Velciet, lai atrastu, kas ir brīvs

Atlasīt režīmā velciet jebkuru zilu punktu vai līniju. Risinātājs to pārvieto pēc iespējas mazāk, saglabājot visas relācijas. Ja vilkšana pārkāptu relāciju, ģeometrija atgriežas. Tas ir ātrākais veids, kā redzēt, kurš izmērs vēl trūkst.

## Relāciju saraksts

Ja nekas nav atlasīts, labajā panelī redzams **Relācijas un izmēri**. Katrā rindā ir:

- **Rediģēt** (tikai izmēriem): atver skaitļa lodziņu;
- **Atlasīt**: atlasa to skicē;
- **Dzēst**: noņem to.

Viena veida relācijas, kas parādās vairāk nekā vienu reizi, dala vienu rindu, piemēram, "Sakrītošs × 5" taisnstūrim, kas piesaistīts sākumpunktam. Noklikšķiniet uz rindas, lai to atvērtu: katra relācija uzskaitīta pēc tā, ko tā saista ("punkts p2, punkts p4"), ar savu **Atlasīt** un **Dzēst**. Pati rindā ir:

- **Atlasīt**: atlasa visas skicē;
- **Dzēst visu**: noņem visas vienā solī ({{key:Mod+Z}} tās atjauno).

Grupa, kurā ir pārāk definēta relācija, atveras pati, ar nosaukumu sarkanā krāsā. Izmēri vienmēr uzskaitīti pa vienam rindā, ar to vērtībām.

Ja ģeometrija ir atlasīta, sarakstā redzamas tikai **Atlasē esošās relācijas**.
