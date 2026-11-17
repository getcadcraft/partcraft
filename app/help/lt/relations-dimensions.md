---
title: Visiškai apibrėžti eskizą su ryšiais ir matmenimis
summary: Pridėkite ryšius iš dešiniojo skydelio ir matmenis matmenų įrankiu, skaitykite nepakankamai, visiškai ir per daug apibrėžtų spalvas bei ištaisykite per daug apibrėžtą eskizą.
keywords: ryšiai, apribojimai, matmenys, išmanusis matmuo, visiškai apibrėžta, nepakankamai apibrėžta, per daug apibrėžta, laisvės laipsniai, sutapimas, horizontalus, vertikalus, lygiagretumas, statmenumas, liestinė, lygumas, koncentriškumas, vidurio taškas, fiksuoti, konfliktas, perteklinis
from: e76d047a
---

Eskizas yra **visiškai apibrėžtas**, kai kiekvienas taškas ir kiekvienas dydis fiksuoti ryšiais bei matmenimis. Visiškai apibrėžtas eskizas keičiasi tik tada, kai pakeičiate skaičių, todėl detalė vėliau redaguojant elgiasi nuspėjamai. PartCraft neverčia eskizo visiškai apibrėžti, bet visada rodo, kiek arti to esate.

## Skaityti eskizo būseną

Būsena rodoma trijose vietose: žymėje viršutiniame kairiajame vaizdo kampe, pranešime dešiniojo skydelio viršuje ir vėliavėlėje istorijoje.

| Būsena | Žymė | Geometrijos spalva | Ką reiškia |
|---|---|---|---|
| Nepakankamai apibrėžta | „Nepakankamai apibrėžta · 3 laisvės laipsniai“ | Mėlyna | Dalis geometrijos dar gali judėti. Vilkite mėlyną geometriją, kad pamatytumėte kryptį |
| Visiškai apibrėžta | „Visiškai apibrėžta“ | Tušinė (juoda ant Paper, šviesi ant Model) | Kiekvienas taškas ir dydis fiksuoti |
| Per daug apibrėžta | „Per daug apibrėžta“ | Raudona ant susijusių ryšių | Kai kurie ryšiai prieštarauja vienas kitam arba vieną iš jų jau implikuoja kiti |

Konstrukcinė geometrija visada pilka ir brūkšninė, nepriklausomai nuo būsenos. Pasirinkti elementai yra oranžiniai. „Laisvės laipsnis“ – tai vienas būdas, kuriuo kas nors dar gali judėti: laisvas taškas turi du (kairėn–dešinėn ir aukštyn–žemyn), laisvas apskritimas turi tris (centras ir spindulys).

Legenda po pranešimu dešiniajame skydelyje kartoja spalvas.

## Pridėti matmenį

1. Paspauskite {{key:D}} arba pasirinkite {{ui:Matmuo}}.
2. Spustelėkite, ką matuoti:
   - **viena linija**: jos ilgis;
   - **vienas apskritimas**: jo skersmuo; **vienas lankas**: jo spindulys;
   - **du taškai** (galinis taškas, centras, laisvas taškas ar koordinačių pradžia): atstumas tarp jų;
   - **taškas ir linija**: atstumas nuo taško iki linijos;
   - **dvi lygiagrečios linijos**: atstumas tarp jų; **dvi linijos kampu**: kampas tarp jų.
3. Po pirmo elemento būsenos juostoje rašoma „Spustelėkite antrą elementą arba spustelėkite, kur turi būti matmuo.“ Spustelėkite antrą elementą arba tuščioje vietoje, kur norite matyti skaičių.
4. Atsidaro skaičiaus langelis su dabartine verte. Įveskite dydį ir paspauskite {{key:Enter}}. {{key:Esc}} palieka išmatuotą vertę.

**Kur padėsite skaičių, nulemia tipą** įstrižai linijai ar dviem taškams: padėkite jį virš ar po jos, kad gautumėte horizontalų atstumą; kairėje ar dešinėje – vertikalų atstumą; kitur – tikrąjį (lygiuotą) atstumą.

Langelis priima paprastus skaičius milimetrais ar laipsniais, pavyzdžiui `25`, `12.5` ar `1e3`. Pirmasis `⌀`, `Ø` ar `R` arba paskutinis `mm` ar `°` ignoruojami. Kampai – nuo 0 iki 180 laipsnių. Skaičiavimai, pavyzdžiui `20+5`, nepriimami; norėdami susieti dydį su kintamuoju ar formule, pradėkite jį ženklu `=`.

Vėliau matmenį pakeisti galite dukart spustelėdami jo skaičių eskize arba spustelėdami **Redaguoti** šalia jo sąraše dešiniajame skydelyje.

:::tip
Taip pat galite pirmiausia pasirinkti geometriją (pasirinkimo įrankiu) ir dešiniajame skydelyje spustelėti matmenų mygtuką: {{ui:Atstumas}}, {{ui:Horizontalus atstumas}}, {{ui:Vertikalus atstumas}}, {{ui:Spindulys}}, {{ui:Skersmuo}} arba {{ui:Kampas}}. Rodomi tik tie, kurie tinka pasirinkimui. Taip apskritimui priskiriate spindulį, o ne skersmenį.
:::

## Pridėti ryšį

Ryšiai pridedami iš dešiniojo skydelio, o ne įrankiu.

1. Paspauskite {{key:S}} pasirinkimui.
2. Spustelėkite vieną elementą, tada {{key:Shift}}+spustelėkite antrą, jei ryšiui reikia dviejų. Koordinačių pradžią taip pat galima pasirinkti.
3. Dešinysis skydelis rašo „Pasirinkta: linija l3, taškas p1“ ir rodo mygtuką kiekvienam tinkamam ryšiui, pavyzdžiui {{ui:∥ Lygiagretumas}} ar {{ui:• Sutapimas}}.
4. Spustelėkite mygtuką. Eskizas iš karto išsprendžiamas.

Jei nė vienas ryšys netinka, skydelyje rašoma: „Nė vienas ryšys netinka šiam pasirinkimui. Pasirinkite vieną arba du elementus (Shift+spustelėjimas prideda).“

Pilnas ryšių sąrašas, ko kiekvienas reikalauja ir ką daro, yra [Eskizo ryšiai ir matmenys](topic:sketch-relations).

Ryšiai eskize rodomi kaip maži simboliai šalia geometrijos (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Sutapimo taškai paslepiami, nebent geometrija pasirinkta arba ryšys yra problemiškas. Spustelėkite simbolį, kad pasirinktumėte ryšį.

## Darbo pavyzdys: L formos laikiklio profilis

1. Braižykite ant **Priekinė plokštuma**. Linijos įrankiu pradėkite nuo koordinačių pradžios ir spustelėkite šešis L kampus, baigdami vėl koordinačių pradžioje. Grandinė baigiasi pati, kai spustelite pirmą tašką.
2. Linijos, nubrėžtos beveik horizontaliai ar vertikaliai, jau turi H ir V ryšius, išskyrus paskutinę: linija, kuri baigiasi ant esamo taško, automatinio ryšio negauna. Paspauskite {{key:S}}, spustelėkite tą paskutinę liniją ir dešiniajame skydelyje pasirinkite {{ui:V Vertikalus}}. Žymėje rašoma „Nepakankamai apibrėžta · 4 laisvės laipsniai“.
3. Paspauskite {{key:D}}. Spustelėkite apatinę liniją, spustelėkite žemiau jos, įveskite `80` ir {{key:Enter}}.
4. Spustelėkite kairiąją liniją, spustelėkite kairėje nuo jos, įveskite `60` ir {{key:Enter}}.
5. Viršutinę trumpą liniją pamatuokite `20`, o vidinę vertikalią liniją `45` tuo pačiu būdu.
6. Žymėje dabar rašoma **Visiškai apibrėžta**, o visas L tampa tušinis.

## Ištaisyti per daug apibrėžtą eskizą

Kai naujas ryšys ar matmuo prieštarauja kitiems, PartCraft nieko nejuda. Geometrija lieka tokia, kokia buvo, susiję ryšiai tampa raudoni, o būsenos juostoje jie įvardijami:

- „Per daug apibrėžta: Horizontalus, Atstumas 40 negali būti patenkinti visi kartu. Anuliuokite arba vieną iš jų naikinkite.“ Ryšiai prieštarauja vienas kitam.
- „Per daug apibrėžta: Lygiagretumas jau išplaukia. Naikinkite jį.“ Ryšys nieko nepridės: kiti jau jį užtikrina. (Pavyzdžiui, stačiakampio kraštinės jau yra lygiagrečios.)

Kad ištaisytumėte:

1. Paspauskite {{key:Mod+Z}}, kad anuliuotumėte paskutinį pakeitimą, arba
2. Dešiniojo skydelio sąraše **Ryšiai ir matmenys** raskite raudoną elementą (grupė, kurią jis yra, atidaryta ir pavadinta raudonai) ir šalia jo spustelėkite **Naikinti**. Taip pat galite spustelėti jo simbolį ar skaičių eskize ir paspausti {{key:Delete}}.

:::note
Šioje versijoje nėra „vedamųjų“ (atskaitos) matmenų. Matmuo, kuris tik parodytų dydį, jau nustatytą kitų ryšių, laikomas per daug apibrėžtu. Vietoje to dydžius skaitykite skydelyje: pasirinkite liniją ir pažiūrėkite į matmenų mygtukus arba po ištraukimo patikrinkite detalės duomenis.
:::

Per daug apibrėžtas eskizas, turintis tikrą konfliktą, lemia, kad elementas, kuris jį naudoja, nepavyksta („Per daug apibrėžta: 1 ryšys negali būti patenkintas.“), o istorijoje jis pažymimas **⚠ klaida**. Eskizas, kuriame yra tik perteklinių ryšių, vis tiek sukuriamas, su ⚠ įspėjimu.

## Ieškoti, kas laisva, vilkimu

Pasirinkimo įrankiu vilkite bet kurį mėlyną tašką ar liniją. Sprendiklis perkelia ją kuo mažiau, išlaikydamas visus ryšius. Jei vilkimas pažeistų ryšį, geometrija grįžta atgal. Tai greičiausias būdas pamatyti, kuris matmuo dar trūksta.

## Ryšių sąrašas

Kai nieko nepasirinkta, dešiniajame skydelyje rodomas sąrašas **Ryšiai ir matmenys**. Kiekvienoje eilutėje yra:

- **Redaguoti** (tik matmenims): atidaro skaičiaus langelį;
- **Pasirinkti**: pažymi jį eskize;
- **Naikinti**: pašalina jį.

To paties tipo ryšiai, pasikartojantys daugiau nei vieną kartą, turi bendrą eilutę, pavyzdžiui „Sutapimas × 5“ stačiakampiui, susietam su koordinačių pradžia. Spustelėkite eilutę, kad ją atidarytumėte: kiekvienas ryšys išvardytas pagal tai, ką jis sieja (taškas p2, taškas p4), su savo **Pasirinkti** ir **Naikinti**. Pati eilutė turi:

- **Pasirinkti**: pažymi visus jos ryšius eskize;
- **Naikinti visus**: pašalina visus vienu žingsniu ({{key:Mod+Z}} juos grąžina).

Grupė, kurioje yra per daug apibrėžtas ryšys, atsidaro pati, o jos pavadinimas rodomas raudonai. Matmenys visada išvardyti po vieną eilutėje su savo vertėmis.

Kai pasirinkta geometrija, sąraše rodomi tik **Ryšiai pasirinkime**.
