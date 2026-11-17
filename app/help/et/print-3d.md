---
title: Detaili ettevalmistamine 3D-printimiseks
summary: Kontrolli, et detail või koost on suletud, mahub sinu printerisse ja seisab alusel, seejärel laadi see alla STL- või 3MF-failina oma lõikeprogrammile.
keywords: 3D-printimine, 3D-printer, printimine, printer, lõikeprogramm, stl, 3mf, vesitihe, suletud, manifold, alus, aluse suurus, ehitusalus, üleulatus, toed, tugi, millimeetrid, eksport, keermed, vaba ruum
from: 90d81dff
---

Lõikeprogramm vajab suletud kuju: auke pole, iga tahk on väljapoole suunatud ja midagi ei läbi iseennast. PartCraftis ehitatud detailid on ehituselt suletud, nii et kontroll näitab peamiselt suurust, seda, kas detail mahub sinu printeri alusele, kas see seisab lamedal tahul ja kui palju see üle ulatub.

## Kontrolli ja laadi alla

1. Valikuline, üks kord: sea oma printeri alus jaotises {{ui:Settings}} › PartCraft › **3D-printer**: laius, sügavus ja kõrgus millimeetrites. Kui jätad need tühjaks, jäetakse see kontroll vahele.
2. Vali {{ui:Export}}, seejärel {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dialoog ütleb „Valmis printimiseks“ või „Pole valmis printimiseks“, loetleb kõik, mis on valesti, ning annab suuruse alusel (X × Y × Z, millimeetrites), mahu ja kolmnurkade arvu.

3. Klõpsa {{ui:Download 3MF}} või {{ui:Download STL}}. Fail on sama, mis {{ui:Export}} › {{ui:3MF, for 3D printing}} või {{ui:STL, for 3D printing}}.

Koostes võtavad kontroll ja failid kogu koosti, iga koopia sinna, kuhu see on paigutatud.

Detaili kontrollitakse nii, nagu eksport seda kirjutab: see, mis PartCraftis osutab üles (risti Ülemise tasandiga), osutab alusel üles. Ülemisel tasandil visandatud detail lamab tasaselt.

## Mida dialoog võib öelda

**Pole valmis printimiseks** (lõikeprogramm võib keelduda või printida valesti): augud (servad, millel on tahk ainult ühel pool), servad, mida jagab kolm või enam tahku, vastassuunas olevad tahud, pahupidi keha või keha, mis läbib iseennast. PartCraftis ehitatud detail ei tohiks neid kunagi näidata; kui näitab, vaata [Tõrkeotsing](topic:troubleshooting).

**Hoiatused** (see prinditakse, aga vaata enne üle):

- **Suurem kui sinu printeri alus**, isegi kui pöörata alusel 90° võrra.
- **Altpoolt ei looda ühtegi lamedat tahku**: pööra detaili oma lõikeprogrammis nii, et tahk toetub alusele, muidu on vaja toed või alusplaat.
- **Kaldub üles rohkem kui 45° kaugusele**: need tahud vajavad tuge, kui seisavad sellisena, nagu on. Muu asend võib vajada vähem.
- **Eraldi kehad kattuvad** või **puutuvad tahk-tahu vastu**: lõikeprogrammid ühendavad need tavaliselt. {{ui:Combine}} jaotises Elemendid › Veel ühendab need üheks kehaks. Vt [Kehad](topic:bodies).
- **Alla 1 mm laiune**: kontrolli detaili mõõtmeid.

## Keermed, mis prinditakse

Modelleeritud keere prinditakse päris keermena. Anna sellele mõni **Vaba ruum** (Clearance), et prinditud polt läheks prinditud mutrisse: vt [Keermed](topic:threads).

## Siledad ümarad tahud

STL ja 3MF koosnevad kolmnurkadest. Sujuvamate ümarate tahkude jaoks klõpsa tühjal ruumil nii, et midagi pole valitud, ja sea paremal paneelil **Kõverad** väärtuseks **Peen (128 pöörde kohta)** või **Väga peen (256 pöörde kohta)** enne eksportimist. Rohkem kolmnurki teeb suuremad failid.

## Suuremaks, väiksemaks või tükkideks

- **Eksport › Skaleeri printimiseks (STL või 3MF)…** salvestab detaili igas teljes skaleerituna, seda muutmata: **kahanemisvaru** protsentides (suurus × (1 + s) või täpne suurus ÷ (1 − s)) valumudeli jaoks või lihtsad tegurid, keskpunkti, madalaimast nurgast, põhja keskpunkti või nullpunkti suhtes.
- **Eksport › Jaga printimiseks (tükkide zip)…** lõikab detaili, mis on sinu printerile liiga suur, tükkideks, mis mahuvad igaüks sinu antud alusele. Tükid on ühendatud tappide, võtmete, sabaliidete, dübelaukude või magnetiaukudega (sinu seatud vaba ruumiga), iga tükk ja liitekoht on nummerdatud ning tükid salvestatakse STL- või 3MF-failidena zip-failis koos koostelehega. Detail ise ei muutu.

## Kontrollimata

Seina paksus, detailid, mis on väiksemad kui sinu düüs suudab joonistada, ja see, kuidas lõikeprogramm toed paigutab. Need näitab sinu lõikeprogramm.
