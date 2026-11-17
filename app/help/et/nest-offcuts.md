---
title: Ülejääkide säilitamine ja taaskasutamine
summary: Pärast paigutamist muutub iga plaadi jääk nummerdatud jääkmaterjaliks laoloendis. Järgmine paigutus kasutab kõigepealt jääkmaterjali ja seejärel terveid plaate.
keywords: paigutamine, ülejääk, jääkmaterjal, laos, jääk, plaat, leht, taaskasutus, materjal, paksus, CSV
from: 7a68d4b8
---

Kui paigutad detaile plaatidele, saab iga plaadi kasutatava jäägi (mitte killud) salvestada **jääkmaterjalina**: nummerdatud kontuurina (R-0001, R-0002 …) koos materjali, paksuse, mõõtmete ja tööga, millest see pärineb. Loend salvestatakse faili koos ja seda saab salvestada CSV-na.

## Taaskasutamine

Sisesta **materjal** ja **paksus**, jäta {{ui:Kasuta kõigepealt jäägid}} sisselülitatuks ja paiguta. Sama materjali ja paksusega jääkmaterjale proovitakse kõige väiksemast alustades. Detailid, mis mahuvad, lähevad nende peale, jääkmaterjali enda kontuuri sisse ja selle servast eemale. Mis ei mahu, läheb uutele plaatidele. Töö aruanne ütleb, millised jääkmaterjalid kasutati ja mis neist alles jäi. Kui {{ui:Salvesta ülejäägid jääkmaterjalina}} on sisse lülitatud, kirjutab {{ui:Lisa see töö laoseisu}} selle laoloendisse: kasutatud jääkmaterjal on märgitud **Kasutatud** (koos tööga) ega pakuta enam uuesti. Sellest alles jäänud osa muutub uueks jääkmaterjaliks, mis mäletab oma lähtekohta.

## Mis loetakse jääkmaterjaliks

Jääk mõõdetakse sinu määratud vahega (ükski detail pole lõikest sellest lähemal). Ribad, mis on kitsamad kui kahekümnendik plaadist, ja tükid, mis on väiksemad kui 2 % plaadist, on jäätmed. Kui sinu töökoda hoiab väiksemaid tükke, muuda mõlemat piirangut. Detailide sees olevad augud kuuluvad detailidele endile ega jää alles. Rullil jääkmaterjali ei ole.

## Joonisel

Paigutuse DXF joonistab iga jääkmaterjali kontuuri kihile REMNANTS, numbriga keskel, et tükid saaks lõikamisel märgistada.

Veel ei ole loodud: jääkmaterjali kiudsuund, vöötkoodi- või sildilehed, rullide jääkmaterjal, projektide vahel jagatud laos.
