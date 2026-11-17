---
title: Joonise tegemine vaadete, lõike ja GD&T-ga
summary: Ava joonislehe, lisa lõige ja detailvaade, aseta baasid, mõõtmetolerantsi raamid ja pinnakaredusmärgid, vali lehe suurus, täida tiitelplokk ja muudatused ning ekspordi leht PDF-ina.
keywords: aukude tabel, augutabel, aukude asukohad, sildid, joonis, 2D-joonis, leht, lehe suurus, a4, a3, a2, a1, a0, ansi, tiitelplokk, muudatus, muudatusplokk, joonise number, materjal, pdf, vaated, ortograafiline, kolmas nurk, isomeetriline, lõike vaade, detailvaade, gd&t, baas, mõõtmetolerantsi raam, tolerants, asend, tasasus, pinnakaredus, karedus, printimine
from: 39e944c0
---

PartCraft teeb detailist joonislehe: esi-, pealt- ja paremvaate kolmandas nurgas projektsioonis, isomeetrilise vaate, üldmõõdud ja tiitelploki lehel A4 kuni A0 või ANSI A kuni E. Selle peale saad lisada lõike, detailvaate ja GD&T-sümbolid. Leht uueneb, kui detail muutub, ja selle seaded salvestatakse detailifaili.

## Ava joonislehe

1. Ehita detail. (Kui midagi pole ehitatud: „Esmalt ehita tahkis, seejärel tee selle joonis.“)
2. Vali tööriistaribal {{ui:Joonis}}.

3D-vaate asemel on nüüd leht. Tööriistaribal on {{ui:Baas}}, {{ui:Raam}}, {{ui:Viimistlus}}, {{ui:Detail}}, {{ui:PDF}} ja {{ui:Tagasi}} ning parempoolne paneel on pealkirjaga **Joonis**. Olekuriba ütleb, kuidas vaated tehti: „Joonis (kumerad jooned on joonistatud fassettidena). Baas, Raam ja Viimistlus paigutavad GD&T vaatele; paneel määrab lõike ja detailvaate.“ Vaated on joonistatud mesh-tuuma fassettidest, nii et ümarad servad on lühikesed sirged tükid; tõelised kaared vajavad täpset tuuma, mida see versioon ei sisalda.

Liigu lehel ringi: keera ratast suumimiseks, lohista parema või keskmise nupuga nihutamiseks, vajuta {{key:F}}, et leht mahutada. Kui leht on fookuses, suumivad {{key:Plus}} ja {{key:Minus}} ning {{key:Shift}} koos nooleklahvidega nihutab.

Vali {{ui:Tagasi}}, {{ui:Tagasi mudelisse}} või vajuta {{key:Esc}} (kui midagi pole valitud ja ükski tööriist pole aktiivne), et naasta 3D-mudelisse.

## Mis lehel on

- **Valitud leht**, rõhtpaigutuses (vaikimisi A3, kui sa teist ei vali), raamiga ja **tiitelplokiga**: pealkiri, ettevõte, joonise number, muudatus, materjal, joonistas / kontrollis / kinnitas, kuupäev, mõõtkava, lehe suurus, „Ühikud: millimeetrid · kolmas nurk“ ja kas vaated on täpsed või fassetiga.
- **Muudatusplokk** paremas ülanurgas, kui oled muudatuse lisanud.
- **Esi-, pealt- ja paremvaade**: pealtvaade esivaate kohal, paremvaade selle paremal. Peidetud servad on katkendjoonega.
- **Isomeetriline vaade**, kui on ruumi.
- **Üldmõõdud**: laius ja kõrgus esivaatel, sügavus pealtvaatel.
- Peamiste vaadete üks **mõõtkava** ISO seeriast (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), valitud nii, et need mahuksid.

## Vali lehe suurus

Kui lehel pole midagi valitud, vali paneelis {{ui:Leht}}: **A4, A3, A2, A1, A0** (ISO 216) või **ANSI A, B, C, D, E** (11 × 8.5 kuni 44 × 34 tolli). Vaated paigutatakse uuesti suurimasse ISO mõõtkavasse, mis mahub, nii et suurem leht võib detaili suuremalt näidata.

## Täida tiitelplokk

Paneeli **Tiitelplokk** väljad lähevad otse lehele: {{ui:Pealkiri}}, {{ui:Joonise nr}}, {{ui:Muudatus}}, {{ui:Ettevõte}}, {{ui:Joonistas}}, {{ui:Kontrollis}}, {{ui:Kinnitas}}, {{ui:Kuupäev}} (aasta-kuu-päev), {{ui:Üldine tolerants}} ja {{ui:Viimistlus}} (kaks viimast prinditakse tiitelploki kohe kohale). Kirjuta kasti ja vajuta {{key:Enter}} või klõpsa kõrvale. Tühi kast jätab lahtri tühjaks, välja arvatud:

- **Pealkiri** näitab detaili nime, kuni sa kirjutad ise.
- **Kuupäev** näitab tänast, kuni sa kirjutad ise.
- **Muudatus** näitab nimekirjas viimast muudatust, kuni sa kirjutad ise.

**Materjal** tuleb detailist: klõpsa mudeli tühjal alal ja vali osade paneelis {{ui:Materjal}}. Sama materjal annab Measure'i massiomadustele tiheduse.

## Lisa muudatused

Jaotises **Muudatused** klõpsa {{ui:Lisa muudatus}}. Iga uus rida võtab järgmise tähe (A, B, C …, pärast Z tuleb AA) ja tänase kuupäeva. Kirjuta, mis muudeti ja kes muutis. {{ui:Kustuta}} eemaldab rea. Muudatusplokk lehe paremas ülanurgas loetleb need, vanimad esimesena, kuni 20.

Lehe suurus, tiitelplokk, muudatused ja materjal salvestatakse detailifaili ning iga muudatus on üks samm sammu kaupa {{ui:Võta tagasi}}.

## Lisa lõikevaade

Detail lõigatakse tasandiga ja lõige on viirutatud. Nagu teised vaated, joonistatakse ka lõige fassettidest, nii et ümarad servad on lühikesed sirged tükid.

1. Paneelis sea **Lõige A-A** väärtuseks **Esivaate järgi**, **Pealtvaate järgi** või **Paremvaate järgi**.
2. Lõige ilmub lehele, viirutatult kohtades, kus lõikejoon läbib materjali, koos lõikejoone ja selle „A“ noolega vaatel, millelt see võetakse.
3. Sea **Lõige kohas (mm)**, et liigutada lõikepinda. See algab detaili keskelt.

Lõike eemaldamiseks sea **Lõige A-A** tagasi väärtuseks **Puudub**.

## Lisa detailvaade

1. Sea **Detail B** vaatele, mida suurendada (või vali tööriistaribal {{ui:Detail}}).
2. Klõpsa suurendatava ala keskel sellel vaatel. Ring tähisega „B“ märgib seda ja suurendatud **Detail B** ilmub lehele oma mõõtkavaga, näiteks „Detail B (2:1)“.
3. Sea **Detaili raadius (mm)** ringi suuruseks ja **Detaili mõõtkava** suurenduseks: 2, 4, 5 või 10 ×.

Detaili saab võtta esi-, pealt-, parem- või lõikevaatelt, mitte isomeetrilisest vaatest. Kui kõigile vaadetele pole lehel ruumi, ütleb paneel: „Lehel pole ruumi: detail. Tee detail väiksemaks või jäta vaade välja.“

## Lisa aukude tabel

Aukude tabel loetleb detaili augud koos asukohtadega puurimiseks või CNC-ks: vali paneelis **Aukude tabel** › **Pealtvaate järgi** (või esi- või paremvaate järgi).

- Iga selles vaates otsast nähtav auk saab kõrvale sildi: **A1**, **A2** … esimesele suurusele, **B1** … järgmisele.
- Tabel loetleb iga sildi, selle **X** ja **Y** millimeetrites ning suuruse: „Ø14 LÄBI“, „Ø6.6 × 10 SÜGAV“, vastuurk või vastusüvis või keermestatud augu keermemärge.
- X ja Y mõõdetakse vaate ääriskontuuri vasakust alanurgast, mis on lehel märgitud **X0 Y0**.
- Mustrite tehtud augud on kaasatud. Augud, mis pole vaatega risti, loetakse paneelis kokku ja jäetakse tabelist välja.

Tabel läheb lehe vabasse ossa ja PDF-i.

## Paiguta GD&T ja pinnakaredusmärgid

1. Vali {{ui:Baas}}, {{ui:Raam}} (mõõtmetolerantsi raam) või {{ui:Viimistlus}} (pinnakaredusmärk).
2. Klõpsa vaatel punkti, kuhu see kinnitub. See tõmbub lähima joonistatud joone külge 2.5 mm piires.
3. Sümbol ilmub joonega ja valituna ning parem paneel näitab selle seadeid.

Lohista sümbolit, et seda liigutada; selle joon jääb punkti külge. Kui sümbol on valitud, nihutavad nooleklahvid seda 1 mm. {{key:Delete}} või {{key:Backspace}} (või paneelis {{ui:Kustuta}}) eemaldab selle; {{ui:Valmis}} või {{key:Esc}} tühistab valiku. Iga muudatus on tagasivõtmise nimekirjas.

### Baas

**Täht**: A kuni Z, ilma I, O ja Q-ta (need loetakse kui 1, 0 ja O). Iga uus baas võtab järgmise vaba tähe.

### Mõõtmetolerantsi raam

| Seade | Valikud |
|---|---|
| **Tolerants** | Sirgus, Tasasus, Ringikujulisus, Silindrilisus, Joone profiil, Pinna profiil, Ristsus, Nurksus, Paralleelsus, Asend, Koaksiaalsus ja Sümmeetria (mõlemad eemaldatud Y14.5-2018-st ja märgitud nii), Ringikujuline väljalöök, Üldine väljalöök |
| **Tsoon (mm)** | Tolerantsi väärtus, vaikimisi 0.1 |
| **Läbimõõdu tsoon (⌀)** | Omadustele silindrilise tsooniga; vaikimisi sees asendi puhul |
| **Materjal** | RFS (puudub), MMC (Ⓜ), LMC (Ⓛ), kui omadus seda lubab |
| **Esmane / Teisene / Kolmas baas** | Kuni kolm baastähte, igaühel **… modifikaator** (MMB, LMB), kui lubatud |

PartCraft kontrollib raami ASME Y14.5 reeglite järgi ja ütleb paneeli ülaosas, mis on valesti, näiteks „Tasasus on kujutolerants: see ei võta baasviiteid.“ või „Asend vajab vähemalt ühte baasviidet.“ Rida **Tõlgendus** selgitab raami sõnadega.

### Pinnakaredus

| Seade | Valikud | Vaikimisi |
|---|---|---|
| **Ra (µm)** | Keskmine karedus | 1.6 |
| **Protsess** | suvaline protsess, töödeldud, materjali eemaldamata | töödeldud |
| **Märkus** | kuni 40 tähemärki, näiteks lõikesuund või protsess | |

Kui midagi pole valitud, loetleb paneel **Märkused lehel**, igaüks nupuga **Vali**.

## Ekspordi PDF-ina

Vali tööriistaribal {{ui:PDF}}, paneelis {{ui:Ekspordi PDF}} või {{ui:Ekspordi}}, siis mudelist {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}}. PDF laetakse alla failina `<part name> - drawing.pdf` ja olekuriba loetleb, mis sellel on.

Prindi see suurusega „Tegelik suurus“ paberile, mis vastab lehe suurusele, et mõõtkava jääks õigeks.

## Piirangud

| Veel ehitamata | Tee praegu |
|---|---|
| Muud mõõdud kui kolm üldmõõtu | Lisa need PDF-ile märgistusrakendusega või ekspordi eskiis või pind DXF-na ja mõõtmesta see 2D CAD-programmis |
| Rohkem kui üks lõige või detail; katkestatud, abi- ja projitseeritud vaated | Pole saadaval |
| Esimese nurga projektsioon, liikuvad vaated, portreelehed | Kolmas nurk, automaatne paigutus, rõhtpaigutus |
| Vabateksti märkmed ja tabelid lehel (peale pealkirja- ja muudatusplokkide) | Kasuta pinnakaredusmärkust või lisa tekst PDF-ile |
| Kokkupanekute joonised | Pole saadaval |

Lääne-Euroopa tähestikust väljaspool olevad tähemärgid prinditakse kui „?“ (PDF kasutab lugeja sisseehitatud fonti Helvetica). GD&T-sümbolid joonistatakse joontena, nii et need prinditakse igas lugejas.

## Lase lehel teha

- **Leht › Automaatne** valib paberi sinu eest: suurim standardne mõõtkava kuni 1:1, väikseimal A-suuruses lehel, mis hoiab vaated sellel mõõtkaval (loend näitab, millise ta võttis).
- **Märgi augud mõõtmetega** märgib augud vaatel, mis näeb neid enamikku otsast: keskmärk igaühel, üks tähis suuruse kohta („2× Ø6 LÄBI“ noolega) ja nende asukohad mõõdetuna vaate vasakust alanurgast. Üldlaius, kõrgus ja sügavus on alati olemas.
