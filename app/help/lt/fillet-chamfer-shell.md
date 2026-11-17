---
title: Suapvalinkite, nuožulninkite ir padarykite tuščiavidurį su Suapvalinti, Nuožulninti ir Išdrožti
summary: Pasirinkite briaunas ir pridėkite pastoviu ar kintamu spinduliu suapvalinimus bei lygius, dviejų atstumų ar atstumo ir kampo nuožulninimus, padarykite detalę tuščiavidurę su Išdrožti, pasirinkdami atidarytinus paviršius, pakeiskite, kurias briaunas ar paviršius elementas naudoja, ir ištaisykite įprastus gedimus.
keywords: suapvalinti, mišinys, nuožulninti, nuožulnumas, išdrožti, tuščiavidurė, sienelės storis, briaunos, paviršiai, pasirinkti briaunas, Shift spustelėjimas, atviras paviršius, tikslus branduolys, tinklo branduolys, nesukurta
from: e41c1c12
---

:::note
**Šioje versijoje** PartCraft kuria suapvalinimus ir nuožulninimus su tinklo branduoliu, tik **tiesiose briaunose tarp dviejų plokščių paviršių**: dėžutės briaunos ir tiesios ištraukų bei iškirpimų briaunos, išoriniai ar vidiniai kampai (vidiniame kampe medžiaga pridedama). Apvalios briaunos, pavyzdžiui skylių kraštai, ir spindulys, kuris keičiasi išilgai briaunos, dar nesukurti. Kur du suapvalinti briaunos susitinka kampe, suapvalinimai sujungiami įstrižai (susitinka aštriu lanku), o ne susilieja. {{ui:Išdrožti}} taip pat veikia: jį kuria tinklo branduolys, jis atidaro tik plokščius paviršius, skirtingo storio sienelių apvalkalai dar nesukurti, o ant detalių su daugybe apvalių paviršių jis lėtas. Žr. [Kas dar nesukurta](topic:not-built-yet).
:::

{{ui:Suapvalinti}} suapvalina briaunas, {{ui:Nuožulninti}} jas nuožulnina, o {{ui:Išdrožti}} padaro detalę tuščiavidurę. Visi trys veikia su kietojo kūno briaunomis ir paviršiais ir yra kuriami tinklo branduoliu. Jų suapvalinimai yra facetiniai, kaip ir visi apvalūs paviršiai (**Kreivės** nustato, kiek smulkiai); apvalūs paviršiai yra cilindrai, kuriuos galite pasirinkti ir išmatuoti (žr. [Tinklo branduolys](topic:solid-kernels)).

## Suapvalinkite ar nuožulninkite briaunas

### Pirmiausia pasirinkite briaunas

1. Spustelėkite detalės briauną. Visa briauna paryškinama, o dešinysis skydelis rodo **Briauna**: jos rūšį (Tiesi, Apskritimas ar lankas, Kreivė), ilgį ir paviršius, tarp kurių ji yra.
2. Norėdami pridėti daugiau briaunų, {{key:Shift}}+spustelėkite jas. Kiekviena pažymima; {{key:Shift}}+spustelėkite pažymėtą briauną, kad ją atmestumėte. Skydelio antraštė jas suskaičiuoja („4 briaunos“), o būsenos juostoje rašoma: „4 briaunos pasirinktos. Suapvalinti arba Nuožulninti suapvalins jas; Shift+spustelėjimas pasirenka daugiau, Esc išvalo.“
3. Pasirinkite {{ui:Suapvalinti}} arba {{ui:Nuožulninti}} įrankių juostoje arba tais pačiais mygtukais dešiniajame skydelyje.

Elementas pridedamas su visomis pasirinktomis briaunomis: 2 mm suapvalinimas arba 1 mm nuožulninimas. Būsenos juostoje rašoma, pavyzdžiui: „Fillet1 pridėtas (4 briaunos). Pakeiskite jo dydį dešinėje; Pasirinkti briaunas keičia, kurios.“

### Arba pirmiausia pridėkite elementą

1. Nieko nepasirinkę, pasirinkite {{ui:Suapvalinti}} arba {{ui:Nuožulninti}}.
2. PartCraft pereina į pasirinkimą: dešiniojo skydelio antraštėje rašoma „Fillet1: pasirinkimas“, detalė rodoma tokia, kokia buvo prieš suapvalinimą (skydelis tai nurodo), o įrankių juostoje rodoma {{ui:Atlikta}}.
3. Spustelėkite kiekvieną briauną, kad ją pridėtumėte; dar kartą spustelėkite, kad ją atmestumėte. Būsenos juostoje rodomas jų skaičius.
4. Pasirinkite {{ui:Atlikta}} (arba {{ui:Pasirinkimas baigtas}} skydelyje) arba paspauskite {{key:Esc}} ar {{key:Enter}}.

### Nustatymai

| Nustatymas | Suapvalinti | Nuožulninti |
|---|---|---|
| Dydis | **Spindulys (mm)**, numatyta 2 | **Atstumas (mm)** nuo briaunos abiejuose paviršiuose, numatyta 1 |
| **Briaunos** | Kiek jų | Kiek jų |

Sąrašas žemiau kiekvieną briauną įvardija pagal du paviršius, kuriuos ji jungia, pavyzdžiui „Briauna 1: Extrude1 galo paviršius × Extrude1 šonas“. **Pašalinti** pašalina vieną. {{ui:Pasirinkti briaunas}} grįžta į pasirinkimą. Dukart spustelėjus elementą istorijoje atliekama tas pats.

Briaunos įsimenamos pagal du paviršius, kuriuos jungia, todėl lieka teisingoje briaunoje, kai pakeičiate matmenį anksčiau istorijoje.

### Kintami suapvalinimai ir nuožulninimo tipai

- **Kintamas spindulys** (suapvalinimas): šioje versijoje dar nesukurta („Suapvalinimas, kurio spindulys keičiasi išilgai briaunos: dar nesukurta (reikia tikslaus branduolio). Nustatykite vieną spindulį.“). Su tiksliu branduoliu: pažymėkite ir nustatykite **Galinis spindulys (mm)**. Spindulys tiesiškai keičiasi nuo **Spindulys** vienoje kiekvienos briaunos pusėje iki **Galinis spindulys** kitoje; **Keisti galus vietomis** apverčia jį.
- **Tipas** (nuožulninimas): **Lygus atstumas**, **Du atstumai** (**Antras atstumas** kitame paviršiuje) arba **Atstumas ir kampas** (atstumas viename paviršiuje, nuožulnumas **Kampas (°)** tam paviršiui). **Keisti puses** pirmą atstumą perkelia į kitą paviršių.

## Išdrožkite detalę

1. Spustelėkite plokščią paviršių, kurį palikti atvirą, pavyzdžiui dėžutės viršų. Arba {{key:Shift}}+spustelėkite kelis paviršius.
2. Pasirinkite {{ui:Išdrožti}} įrankių juostoje arba {{ui:Kevalas, atidarantis šį paviršių}} to paviršiaus skydelyje.

Detalė tampa 2 mm sienele su pasirinktais atviraisiais paviršiais. Nustatymai:

| Nustatymas | Ką daro | Numatyta |
|---|---|---|
| **Sienelė (mm)** | Sienelės storis | 2 |
| **Sienelės auga į išorę (paviršiai lieka viduje)** | Pažymėta: sienelės pridedamos išorėje, todėl viduje lieka detalės dydis | Išjungta: sienelės eina į vidų, o išorė išlaiko savo dydį |
| **Atviri paviršiai** | Kiek paviršių pašalinama | |

Viduje sienelės yra tiksliai sienelės storio: išoriniai kampai lieka aštrūs, vidiniai kampai išeina suapvalinti (spindulys = sienelė), o per detalę praeinanti skylė gauna vamzdelį sienelės storio aplink save. Išorėje sienelės pridedamos prie pradinio paviršiaus, kuris tampa tuštuma, o išoriniai kraštai išeina suapvalinti. Vidiniai paviršiai pavadinami pagal paviršius, kuriuos jie perkelia, todėl galite juos pasirinkti.

Atidaryti galima tik plokščius paviršius: pasirinkus lenktą sakoma „Išdrožti: šioje versijoje atidaromi tik plokšti paviršiai (tinklo branduolys jį kuria).“ Išdrožimas ant detalių su daugybe apvalių paviršių lėtas (kelias sekundes kas tūkstantį trikampių): projektuodami naudokite grubesnį nustatymą **Kreivės**.

{{ui:Pasirinkti paviršius}} keičia, kurie paviršiai atviri, tuo pačiu būdu kaip pasirenkant briaunas. Sąraše kiekvienas nurodomas, pavyzdžiui „Paviršius 1: Extrude1 galo paviršius“. Išdrožimas be atvirų paviršių neleidžiamas: „Pasirinkite paviršius, kuriuos pašalinti (atidaryti), tada išdrožkite.“

## Tvarka svarbu

Elementai kuriami iš viršaus į apačią. Suapvalinimas prieš išdrožimą išdrožiamas kartu su detale, todėl ir vidus gauna suapvalintus kampus. Suapvalinimas po išdrožimo suapvalina tik jūsų pasirinktas briaunas. Elementus perkelkite su {{ui:Perkelti aukštyn}} ir {{ui:Perkelti žemyn}} (žr. [Keiskite detalę per jos istoriją](topic:edit-history)).

Kartojimai ir veidrodiniai atspindžiai negali kopijuoti suapvalinimo, nuožulninimo ar išdrožimo: „Fillet1 keičia kūno briaunas ar sienelės; jo negalima kopijuoti. Kopijuokite elementus, kurie sukuria kietuosius kūnus (ištraukas, sukimus, skyles, importus).“ Pirmiausia kartokite skyles ar iškirpimus, tada suapvalinkite visų kopijų briaunas vienu suapvalinimu.

## Kai nepavyksta

| Pranešimas | Ką daryti |
|---|---|
| „5 mm suapvalinimas čia netelpa (jis per didelis paviršiui šalia vienos iš briaunų arba briaunos susitinka kampe, kurio branduolys negali sumaišyti).“ | Naudokite mažesnį spindulį arba suapvalinkite mažiau briaunų vienu kartu (kelis suapvalinimo elementus, mažiausią paskutinį) |
| „Briauna, kurią jis suapvalina, dingo: briauna tarp Extrude1 ir Cut2.“ | Ankstesnis pakeitimas pašalino tą briauną. Pasirinkite {{ui:Pasirinkti briaunas}}, pašalinkite raudoną briauną ir pasirinkite naują |
| „Išdrožti su šiuo storiu nepavyko (…).“ | Sienelė storesnė nei siauresnė modelio dalis arba nei suapvalinimo spindulys. Padarykite sienelę plonesnę arba suapvalinimus didesnius už sienelę |
| „Tas paviršius neturi pavadinimo, kurio istorija galėtų sekti; pasirinkite kitą.“ | Pasirinkite paviršių, sukurtą elemento (dauguma paviršių) |
| „Suapvalinimas: šioje versijoje tik tiesios briaunos tarp dviejų plokščių paviršių (tinklo branduolys jas kuria). Suapvalinkite arba nuožulninkite lenktas briaunas eskize.“ (taip pat Nuožulninti) | Pasirinkta briauna apvali, pavyzdžiui skylės kraštas, arba guli ant lenkto paviršiaus. Pašalinkite ją su {{ui:Pasirinkti briaunas}} ir vietoj to suapvalinkite ar nuožulninkite tą kampą eskize |
| „Suapvalinimas, kurio spindulys keičiasi išilgai briaunos: dar nesukurta (reikia tikslaus branduolio). Nustatykite vieną spindulį.“ | Išjunkite **Kintamas spindulys** |
| „Suapvalinimas tinklo branduoliu: kur suapvalintos briaunos susitinka, jos sujungiamos įstrižai, o ne susilieja.“ (⚠ istorijoje) | Įspėjimas, o ne klaida: detalė sukurta. Pasirinktos briaunos susitinka kampe, o suapvalinimai ten susitinka aštriu lanku. Suapvalinkite mažiau briaunų arba sutikite su lanku |
| „Išdrožti: šioje versijoje atidaromi tik plokšti paviršiai (tinklo branduolys jį kuria).“ | Atviras paviršius yra lenktas. Pasirinkite {{ui:Pasirinkti paviršius}} ir jį pašalinkite; atidarykite tik plokščius paviršius |

## Ribos

Šioje versijoje suapvalinimai ir nuožulninimai veikia tik tiesiose briaunose tarp dviejų plokščių paviršių, su vienu spinduliu, o briaunos, susitinkančios kampe, sujungiamos įstrižai. Išdrožimai atidaro tik plokščius paviršius. Su tiksliu branduoliu kintamas suapvalinimas tiesiškai keičiasi išilgai kiekvienos briaunos (vienas dėsnis elementui; nėra spindulio reikšmių taškuose išilgai jos). Paviršių suapvalinimai, pilni suapvalinimai ir sienelės su skirtingu storiu dar nesukurti.
