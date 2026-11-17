---
title: Käivita USB-mälupulgalt
summary: Mida inseneritööriistad kirjutavad ja kuhu, et CadCraft Studio saaks töötada USB-mälupulgalt või mis tahes kaustast ilma installerita ja ilma administraatori õigusteta: sätted, generaatorid, vahemälud ja detailifailid ning see, mis jääb mälupulgale.
keywords: usb, kaasaskantav, installerita, administraator, admin, sätted, andmekaust, generaatorid, kuhu failid kirjutatakse, võrguta, privaatsus, riistvarale juurdepääs
from: 263efc79
---

Inseneritööriistad (generaatorid, inseneriteek, kontrollid ja andmefailid) **ei vaja administraatori õigusi** ega **installerit**. Need kirjutavad ainult siin loetletud asju ja mitte midagi muud.

| Mis | Kus see hoitakse |
|---|---|
| Sinu detailid koos nende genereeritud kehade, andmelehtede ja kontrollidega | Detailifail (`.partcraft.json`), kuhu sa selle salvestad. |
| Generaatorid, mille avasid failidest | Rakenduse enda salvestusruumis: veebilehel brauseri kohalikus salvestusruumis ja kaasaskantavas Studios programmi kõrval asuvas kaustas `data`. Kõige rohkem 20. |
| Sätted (sinu määratud vokselisuurused, lahendaja lõimed, paigutus) | Sama rakenduse salvestusruum. |
| Andmelehed, väljad, võrgud | Ainult seal, kuhu need salvestad: allalaadimine läheb sinu valitud kohta. |

Tööriistad **ei tee ise võrgupäringuid**: kaasas olevad generaatorid on rakenduse enda kaustas olevad failid, teek ja kontrollid töötavad sinu arvutis töötajas, millel pole võrgupääsu, ning inseneriandmed (vee ja õhu omadused, materjalid) on rakenduse sees. Failist avatud generaator loetakse sinu arvutis ja ei lähe kuhugi.

## Kaasaskantav Windowsi zip ja Linux

Kaasaskantav Studio Windowsi jaoks hoiab sätted, vahemälud ja lisandmoodulid programmi kõrval asuvas kaustas `data`. Linuxi AppImage hoiab need enda kõrval, kui selle kõrval on fail nimega `portable`; ilma selleta kasutab see sinu kodukausta. Kaasaskantavat Maci vormi ei ole: süsteem hoiab allalaaditud rakendust takistamas kirjutamist enda kõrvale. Kesta enda kaasaskantavuse märkmed (`Studio` abi) loetlevad, mida programm kirjutab.

## Riistvarale juurdepääs

Siin ei küsita riistvarale juurdepääsu. Printerid, jadamasinad ja USB-seadmed on eraldi: nad küsivad, kui töö neid vajab, iga seadme kohta üks kord, ja generaatorid ega kontrollid ei puuduta neid üldse.
