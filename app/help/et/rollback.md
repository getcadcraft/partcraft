---
title: Ajaloos tagasi ja edasi kerimine
summary: Liiguta tagasikerimise riba ühe elemendi kaupa üles ja alla, et jälgida detaili ehitamist, lisa elemente keskele ja naase lõppu.
keywords: tagasikerimine, tagasi kerimine, edasi kerimine, tagasikerimise riba, ajaloos sammhaaval, lisa element, külmuta, ajalugu
from: 9a366cae
---

Tagasikerimise riba otsustab, kui palju ajaloost on ehitatud. Riba all olevad elemendid on hallid ja ehitamata; uued elemendid lisatakse riba kohale.

## Samm-sammult, ühe elemendi kaupa

Detail on ekraanil (ükski visand ega joonis pole avatud):

| Tee | Tulemus |
|---|---|
| {{key:[}} või üles-noole nupp detaili nime kõrval | Riba liigub ühe elemendi võrra üles |
| {{key:]}} või alla-noole nupp | Riba liigub ühe elemendi võrra alla |
| {{key:End}} või riba lõpu nupp | Iga element ehitatakse uuesti |

Olekuriba ütleb, kus riba on, näiteks „Tagasikerimise riba pärast Sketch1: 1 2-st elemendist on ehitatud“. Nupud on välja lülitatud, kui riba ei saa selles suunas enam liikuda.

Sa võid ka valida mis tahes elemendil {{ui:Roll back to here}} või klõpsata ajaloos **Tagasikerimise riba · keri edasi**.

## Lisa element keskele

1. Keri riba tagasi, kuni see seisab kohas, kuhu uus element kuulub.
2. Lisa element: see läheb riba juurde.
3. Vajuta {{key:End}}, et ehitada ülejäänud ajalugu uue elemendi peale.

Iga riba liigutus on samm, mille saab tagasi võtta {{key:Mod+Z}}-ga. Riba asukoht salvestatakse faili, nii et detail võib olla saadetud tagasi kerituna. Käsurea tööriist liigutab seda samuti: `partcraft rollback part.json` ja `partcraft forward part.json --end`.
