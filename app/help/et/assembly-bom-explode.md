---
title: Detailide loend, lahtivõetud vaated ja käsitsi liigutatavad detailid
summary: Anna koosu detailidele number, kirjeldus ja materjal, vaata ja laadi alla materjaliloend, tee lahtivõetud vaateid sammude kaupa või automaatselt, teisalda käsitsi detaile, millel ei ole liiteid, sea liidete piirangud ning ekspordi kogu koost STL-, 3MF- või materjaliloendina.
keywords: materjaliloend, BOM, detaililoend, detaili number, materjal, tihedus, csv, lahtivõetud vaade, lahtivõtmine, kokkuvolt, jäljejooned, teisalda detail, lohista, käepide, nihe, pööre, liidete piirangud, koosu eksport, koosu samm, koosu joonis, numbrimärgid
from: ebc9f6f3
---

Need tööriistad asuvad koosu paremas paneelis (vt [Koosu koostamine](topic:build-assembly)).

## Detaili omadused

Vali detail vasakpoolses loendis. Jaotises **Detaili omadused** määra:

- **Detaili number** (kuni 40 märki) ja **Kirjeldus** (kuni 200 märki).
- **Materjal**: tavaline materjal koos tihedusega või **Kohandatud tihedus…**, et sisestada tihedus g/cm³. Paneel näitab seejärel detaili massi.

Omadused kuuluvad detailile, seega jagavad neid kõik selle koopiad. Need salvestatakse koosu faili.

## Materjaliloend

Kui midagi pole valitud ({{key:Esc}}), näitab paneel **Materjaliloendit**: iga detail on eraldi real, millel on positsiooninumber, kogus (mitu koopiat), detaili number, nimi, materjal ja mass. Positsiooninumbrid järgivad järjekorda, milles detailid loendis esimest korda ilmuvad. Massid arvutatakse iga detaili mahu järgi (mesh kernel loodud tahkukujulise keha järgi, ümarate detailide puhul veidi madalam) ja materjali järgi. Detailil ilma materjalita massi ei ole ja siis ei ole ka kogusummat.

{{ui:Laadi CSV alla}} salvestab loendi CSV-failina (sama mis **Ekspordi › Materjaliloend (CSV)**). Fail avaneb mis tahes tabelarvutusprogrammis; tekst, mis algab märgiga = või +, saab ette ülakoma, et tabelarvutus seda valemina ei käivitaks.

## Lahtivõetud vaated

Lahtivõetud vaade tõmbab detailid pildi jaoks lahku. See ei muuda kunagi liiteid ega detailide tegelikku asukohta: salvestamine, kokkupõrgete kontroll ja eksport kasutavad tegelikke asukohti.

1. Kui midagi pole valitud, vali jaotises **Lahtivõetud vaated** {{ui:Uus vaade}}.
2. Jaotises **Lisa samm** märgi ära detailid, mida samm liigutab, vali **Suund** (+X … −Z, klõpsatud tahu normaal või **Lohista nool vaates**) ja **Kaugus**, seejärel {{ui:Lisa samm}}. Valikuga **Lohista** lohista noolt ja lase lahti: samm võtab üle lohistatud suuna ja kauguse.
3. Lisa veel samme. Need käivituvad üksteise järel.
4. Lohista liugurit **Kokkupandud** ja **Lahtivõetud** vahel, et vaadet animeerida. Katkendlikud jäljejooned kulgevad iga detaili algasendist praegusesse asukohta.

{{ui:Automaatne (radiaalne)}} liigutab kõiki detaile, välja arvatud kinnitatud detail, koosu keskmest eemale. {{ui:Automaatne (liited)}} liigutab iga ühendatud detaili (koos kõigi sellest allpool ühendatud detailidega) mööda liite tahu normaali välja. Võid säilitada mitu nimega vaadet; vali üks jaotises **Vaade** või **Kokkupandud**, et detailid tagasi panna. Vaated salvestatakse koosu faili.

## Detaili teisaldamine käsitsi

Käsitsi saab liigutada ainult detaili, millel ei ole liidet kinnitatud detailiga (kinnitatud detail on paigal; liited paigutavad ülejäänud). Vali detail ja jaotises **Teisalda käsitsi**:

- Sisesta **ΔX, ΔY, ΔZ** ja vali {{ui:Teisalda}}, või vali telg ja **Nurk** ning {{ui:Pööra}} (detaili keskme ümber).
- {{ui:Lohista teisaldamiseks}} näitab detailil nooli: lohista nool, et liikuda mööda telge, või ruut, et liikuda tasandil. {{ui:Lohista pööramiseks}} näitab pööramiseks ringe. Iga lohistamine on üks tagasivõtmise samm. {{key:Esc}} peidab nooled.

## Liidete piirangud

Vali liide, mis liigub, ja jaotises **Piirangud** märgi mis tahes väärtuse juures **Hoia … piiride vahel**, seejärel määra **Miinimum** ja **Maksimum**. Iga väärtus hoitakse oma piirides, selle liugur katab ainult seda vahemikku ning **Kontrolli liikumist kokkupõrgete suhtes** käib läbi ainult nende piiride vahel. Silindriline liide saab piirata oma nurka, nihet või mõlemat. Liite tüübi muutmisel kaovad piirangud väärtustelt, mida uuel tüübil ei ole.

## Kogu koosu eksportimine

Koosus kirjutab menüü **Ekspordi** kogu koosu koos kõigi detailidega nende paigutatud asukohas:

- **STEP AP242 / AP214** ja **Joonis (PDF)** ei ole selles versioonis veel valmis: need vajavad täpset tuuma, seetõttu on need hallid. Ekspordi selle asemel iga detaili STEP (täpne tahkis) detailist endast.
- **STL**: üks võrk kõigist detailidest. **3MF**: iga detail kirjutatakse ühe korra, kuid paigutatakse iga koopia kohta eraldi.
- **Materjaliloend (CSV)**.

## Piirangud

- Koosu joonis ja koosu STEP ei ole selles versioonis veel valmis (need vajavad täpset tuuma). Lahtivõetud vaated on mõeldud ainult pildiks ekraanil.
