---
title: Raamid terasprofiilidest
summary: Pane terasprofiilid ühe või mitme visandi joontele, et teha keevitatud raam: nurgad mitreeritud või otsaliitega, elemendid lõigatud kokkusobivaks, otsakaaned, nurgaplaadid ja lõikenimekiri pikkuste ja otsanurkadega.
keywords: keevituskoost, konstruktsioonielement, raam, terasraam, toru, ruuttoru, hss, rhs, shs, toru, chs, lai flänss, i-profiil, w-profiil, ipe, hea, heb, kanalprofiil, upn, nurkprofiil, mitre, mitreeritud, otsaliide, lõige, otsakaas, nurgaplaat, lõikenimekiri
from: 59071e5a
---

{{ui:Konstruktsioonielement}} paneb terasprofiili iga joonele, mille valid visandites. Joonista raam joontena (iga joon on üks element), seejärel vali profiil: elemendid luuakse, nende nurgad lõigatakse ja pikendatakse ning lõikenimekiri ütleb, kui pikaks ja millise nurga all igat tükki lõigata.

## Raami tegemine

1. Joonista raam visandis joontena, näiteks ristkülik ülemisel tasandil. Konstruktsioonina märgitud jooni ei arvestata.
2. Visand valituna vali {{ui:Veel}} › {{ui:Konstruktsioonielement}}. Iga visandi joon saab elemendi.
3. Paneelil vali profiili **Perekond** ja **Formaat**. Perekonnad on AISC tabelid (W, S, C, L, HSS-torud, Toru) ja EN 10365 (IPE, HEA, HEB, UPN).

### Raam 3D-s

Mitme visandi jooned moodustavad ühe raami: ülemine ristkülik visandatakse kõrgemal tasandil ja jalad visandatakse püstistele tasanditele; need kohtuvad otstes 3D-s. Paneelil jaotises **Mööda jooni** märgi iga visand, mille jooni elemendid järgivad. Otsad, mis kohtuvad mikromeetri piires, ühendatakse.

## Sea profiil oma joonel

- **Pööra (°)** pöörab profiili oma joone ümber. Tala seisab sügavusega püsti (püstisel elemendil osutab sügavus eesmise poole).
- **Joonel** valib, milline profiili punkt jääb joonele: keskpunkt, nurk või külje keskpunkt. **Alumine keskpunkt** paneb raami visandi tasandile, mitte läbi selle.

## Nurgad ja liitekohad

| Kus elemendid kohtuvad | Mis juhtub |
|---|---|
| Kaks elementi otsast otsa, **Nurgad: mitreeritud** | Mõlemad lõigatakse tasandil nende vahel poolel teel, nagu pildiraamil |
| Kaks elementi otsast otsa, **Nurgad: otsaliide** | Esimene element jookseb edasi teise elemendi kaugele pinnani; teine lõigatakse ruudu järgi esimese lähedase pinna järgi |
| Element lõpeb teise keskel (T-liide) | See lõigatakse vastu teise elemendi välispinda sobituma |
| Kolm või enam lõpevad ühes punktis | Esimene jookseb ruudus üle teistest mööda; teised lõigatakse selle vastu sobituma |

Esimene element on see, kelle joon tuleb esimesena: jooned säilitavad joonistamise järjekorra, visand visandi kaupa märgitud järjekorras.

## Otsakaaned ja nurgaplaadid

- **Otsakaaned** sulgevad iga vaba otsa plaadiga, mis on profiili kontuuri kujuga, sinu seatud paksusega, otsast väljaspool.
- **Nurgaplaadid** paigutavad kolmnurkse plaadi igasse nurka, kus kaks elementi kohtuvad nurga all: **Nurgaplaadi suurus** mööda elementi nurgast, **Nurgaplaadi paksus** risti, tsentreeritud nurga tasandil.

## Lõikenimekiri

Paneel loetleb iga tüki, identsed tükid grupeeritud: profiil, pikkus (pikk punkt pikale punktile, nagu märgitakse saega), kuidas iga ots lõigatakse (ruudu järgi, nurk ruudust või kohandatud), ja milliste elementidega need on seotud. Otsakaaned ja nurgaplaadid on loetletud oma suurustega. {{ui:Salvesta lõikenimekiri (CSV)}} salvestab selle tabelarvutuseks.

Ümara nurgaga toru jaoks lõigatud element ulatub veidi selle toru nurgaraadiusesse, nii et tema pika punkti pikkus on mõne millimeetri võrra suurem kui pindade vaheline vahe.

## Piirangud

- Elemendid järgivad ainult sirgeid jooni; kaared ja splainid visandis jäetakse välja.
- Liitekohad on lõigatud, mitte keevitatud: keevisõmblusi ei joonistata ja raam on üks tahkis.
- Profiilid joonistatakse tabeli mõõtude järgi: W-profiilid oma juurekeevisega, S- ja kanalprofiilid paralleelsete flänssidega, torud nurgaraadiustega; auke, otsa ettevalmistusi ja keevituspilusid ei tehta sinu eest.
- Konstruktsioonielemente ehitab võrgusilma tuum. Kui täpne tuum on sisse lülitatud (ainult arendajatele), teatavad need seda ega ehitu.
