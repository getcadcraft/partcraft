---
title: Splainai, apkirpimas, poslinkis ir kiti eskizo įrankiai
summary: Braižykite splainus per taškus ir su valdymo taškais, apkirpkite ir pratęskite kreives, perkelkite grandinę poslinkiu, atvaizduokite veidrodžiu pagal ašinę liniją, pridėkite daugiakampius ir įpjovas, masyvuokite eskizo geometriją ir projektuokite modelio briaunas.
keywords: splainas, taškai, valdymo taškas, b-splainas, nurbs, kreivė, apkirpti, pratęsti, poslinkis, veidrodis, simetriškas, daugiakampis, šešiakampis, įpjova, masyvas, tiesinis masyvas, apskritiminis masyvas, projektuoti, projektuoti briauną, įtraukti, konvertuoti elementus
from: 3ecb166a
---

Šie įrankiai veikia atvirame eskize. {{ui:Splainas}} ir {{ui:Apkirpti}} yra įrankių juostoje. Kiti yra po {{ui:Daugiau}} eskizo įrankių gale. Kiekvienas įrankis yra vienas atšaukimo žingsnis, o {{key:Esc}} jį sustabdo. Pagrindinius braižymo įrankius žr. [Nubraižykite pirmąjį eskizą](topic:sketch-basics).

## Splainai

Splainas – tai lygi kreivė. Yra dviejų rūšių.

| Įrankis | Klavišas | Kaip braižyti |
|---|---|---|
| {{ui:Splainas}} | {{key:B}} | Spustelėkite taškus, per kuriuos eina kreivė. Baikite klavišu {{key:Enter}}, {{key:Esc}}, dešiniuoju pelės klavišu arba dvigubu spustelėjimu. Spustelėkite pirmąjį tašką dar kartą, kad uždarytumėte splainą |
| {{ui:Valdymo taškų splainas}} (po {{ui:Daugiau}}) | | Spustelėkite valdymo taškus. Kreivė traukiama link jų, bet liečia tik pirmą ir paskutinį. Brūkšniuotas valdymo daugiakampis rodomas braižant ir po to |

- **Taškai yra eskizo taškai.** Tempkite juos arba suteikite jiems ryšius ir matmenis kaip bet kuriam kitam taškui. Pirmasis splaino taškas gali prilipti prie linijos galo, o tada jie sujungiami sutapimo ryšiu.
- **Liestinė galuose.** Pasirinkite liniją, lanką arba splainą, prisijungiantį prie vieno splaino galo, tada patį splainą, ir pasirinkite {{ui:T Liestinė}}. Splaino galo kryptis tada seka kitą kreivę. Liestinė ne splaino galuose atmetama: "A tangent to a spline needs the line, arc or spline to meet one end of it." (Liestinė splainui reikalauja, kad linija, lankas arba splainas prisijungtų prie vieno jo galo.)
- **Galai.** Be liestinės ryšio, splaino per taškus galai yra natūralūs (paties galo kreivumas lygus nuliui). Kreivė yra kubinė ir eina per kiekvieną tašką, o tarpai tarp jų nustatomi pagal atstumus tarp taškų.
- **Uždari splainai** patys sudaro profilį. Atviri splainai jungia linijas ir lankus į uždarą kontūrą kaip bet kuri kita kreivė.
- Pašalinus tašką splaino viduje, tas taškas pašalinamas, o splainas išlieka, kol jame lieka bent du taškai (uždarame – trys).

Ištempimas ir sukimas sukuria splainą tinklo branduoliu iš trumpų tiesių atkarpų (tikslios kreivės reikalauja tikslaus branduolio: šioje versijoje dar nesukurta). DXF eksportas įrašo splainą kaip polilinija, nutolusią nuo kreivės ne daugiau kaip 0.01 mm, nes DXF R12 neturi splaino objekto.

## Apkirpimas ir pratęsimas

| Įrankis | Klavišas | Kaip |
|---|---|---|
| {{ui:Apkirpti}} | {{key:T}} | Nukreipkite į kreivę: dalis, kuri būtų pašalinta, rodoma raudonai, iki artimiausių susikirtimų. Spustelėkite, kad ją pašalintumėte. Kreivė, kuri nieko nekerta, pašalinama visa |
| {{ui:Pratęsti}} (po {{ui:Daugiau}}) | {{key:E}} | Spustelėkite liniją arba lanką netoli galo, kad pratęstumėte. Jis išauga iki kitos sutinkamos kreivės. "There is nothing for that end to reach." (Tam galui nėra ko pasiekti.) rodoma, kai nieko nekliudo |

Apkirpimas ir pratęsimas veikia linijoms, lankams, apskritimams ir splainams (pratęsimas – linijoms ir lankams).

- Apkirptas **apskritimas** tampa lanku. Jo spindulio arba skersmens matmuo perkeliamas į lanką.
- Apkirpus linijos vidurį, lieka dvi linijos, išlikusios toje pačioje tiesėje. Apkirpus lanko vidurį, lieka du lankai su tuo pačiu centru ir lygumo ryšiu.
- Apkirptas **splainas** tampa valdymo taškų splainu, tiksliai sekančiu senąją kreivę. Išsaugomame gale liestinės ryšys lieka.
- Naujas galas uždedamas ant kreivės, kuri jį nukirpo (ant linijos, lanko ar apskritimo arba sutampantis su jos galu). Splainai negali laikyti taško, todėl splainas, kuris kerta, ryšio nepridės.

**Ryšiai, kurie nebetinka, pašalinami**, o būsenos juostoje sakoma, kiek jų. Pavyzdžiui, apkirptos linijos ilgio matmuo pašalinamas, o horizontalumo arba lygiagretumo ryšiai išlieka.

## Poslinkis

1. Pasirinkite {{ui:Poslinkis}} po {{ui:Daugiau}} arba paspauskite {{key:O}}.
2. Spustelėkite liniją, lanką, apskritimą arba splainą. Visa jo grandinė paryškinama: visos kreivės, sujungtos galas į galą, iki taško, kuriame susitinka trys ar daugiau. Norėdami perkelti tik dalį grandinės, pirmiausia pasirinkite tas kreives, tada pasirinkite Poslinkis ir spustelėkite vieną iš jų.
3. Perkelkite žymeklį į tą pusę, kur eis kopija. Seka brūkšniuota peržiūra. Paspauskite {{key:B}}, kad būtų abi pusės.
4. Spustelėkite, įveskite atstumą ir paspauskite {{key:Enter}}.

Linijos ir lankai perkeliami tiksliai. Kampai pratęsiami arba apkerpami, kol susitinka. Kopija turi vieną **Poslinkio** matmenį, o kitos dalys seka jį: dukart spustelėkite matmenį, kad pakeistumėte visą kopiją. Per didelis atstumas grandinei atmetamas, pavyzdžiui: "That distance is too big for this chain: a side would turn inside out." (Šis atstumas per didelis šiai grandinei: viena pusė apsivertų į vidų.)

**Splainas** perkeliamas nauju splainu per taškus, ne toliau kaip 0.001 mm nuo tikro poslinkio. Ši kopija fiksuota: ji nesekia vėlesnių pakeitimų ir neturi Poslinkio matmens. Splainas grandinėje reikalauja lygių (liestinių) jungčių galuose.

## Veidrodis

1. Su Pasirinkti pasirinkite, ką atvaizduoti veidrodžiu.
2. Pasirinkite {{ui:Veidrodis}} po {{ui:Daugiau}} arba paspauskite {{key:M}}.
3. Spustelėkite liniją arba ašinę liniją, kurios atžvilgiu atvaizduojama.

Kiekvienas atvaizduotas taškas gauna **Simetriškumo** ryšį su originalu, todėl kopija seka originalą, kai šis keičiasi. Taškai, esantys veidrodinėje linijoje, yra bendri, o atvaizduoti apskritimai gauna Lygumo ryšį. Jei nieko nepasirinkta, spustelėkite elementus, kuriuos atvaizduoti, paspauskite {{key:Enter}}, tada spustelėkite veidrodinę liniją.

## Daugiakampiai ir įpjovos

| Įrankis | Kaip |
|---|---|
| {{ui:Daugiakampis}} | Spustelėkite centrą, tada kampą, tada įveskite kraštinių skaičių (nuo 3 iki 64). Kraštinės lygios, o kampai guli ant konstrukcinio apskritimo. Pamatuokite apskritimą, kad nustatytumėte daugiakampio dydį |
| {{ui:Įpjova}} | Spustelėkite vieno galo centrą, tada kito galo centrą, tada spustelėkite, kad nustatytumėte plotį. Dvi linijos, liečiančios dvi lygius pusapskritimius |

## Eskizo masyvai

Pirmiausia pasirinkite geometriją, tada:

- {{ui:Tiesinis masyvas}}: spustelėkite pradžios tašką, tada vietą, kur eis pirmoji kopija, tada įveskite kopijų skaičių (įskaitant originalą).
- {{ui:Apskritiminis masyvas}}: spustelėkite centrą, tada įveskite kopijų skaičių, tolygiai išdėstytų per visą apsisukimą.

Kopijos perima ryšius tarp pasirinktos geometrijos (apskritiminis masyvas neperima horizontalumo ir vertikalumo ryšių). Kopijos nėra susietos su originalu: pakeitus vieną, kiti lieka tokie, kokie buvo.

## Detalės briaunų projektavimas

1. Pasirinkite {{ui:Projektuoti briauną}} po {{ui:Daugiau}}.
2. Spustelėkite tiesią arba apskritimo formos detalės briauną, esančią už eskizo.

Briauna tiksliai nukopijuojama į eskizo plokštumą ir fiksuojama (Fiksavimo ryšys). Ji nesekia vėlesnių detalės pakeitimų. Paspauskite {{key:Q}}, kad ji taptų konstrukcine geometrija. Apskritimas, pasviręs eskizo plokštumos atžvilgiu, projektuotųsi kaip elipsė, todėl jis atmetamas. Taip pat atmetamos laisvos formos briaunos ir briaunos, kurios tiesiai išeina iš eskizo. Projektavimui reikalingas tikslus branduolys: šioje versijoje dar nesukurta.
