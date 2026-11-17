---
title: Tööriistakogu
summary: Salvesta brauseris tööriistad, mida kasutad, et iga detail saaks neid kasutada, ja vii tööriistakogud arvutite vahel JSON-failina.
keywords: tööriistakogu, tööriistad, eksport, import, JSON, salvesta tööriistad, T-number, otsfrees, töökoja tööriistad
from: 8b9f2483
---

Valmistuse vahekaart **Tööriistad** loetleb detaili tööriistad. Jaotises **Tööriistakogu** saad hoida oma tööriistu üle ühe detaili:

- {{ui:Salvesta see tööriist}} lisab valitud tööriista **Minu salvestatud tööriistad** hulka; {{ui:Salvesta kõik selle osa tööriistad}} lisab kõik need. Minu salvestatud tööriistad hoitakse selles brauseris ja on olemas igal detailil. Tööriista, mille oled juba salvestanud (sama liik, suurus, soonte arv ja ülekirjutused), ei salvestata kaks korda.
- {{ui:Lisa sellele detailile}} võtab valitud salvestatud tööriista detaili. Kui selle T-number on detailis juba mõne muu tööriista poolt kasutusel, saab see järgmise vaba numbri ja paneel ütleb seda. {{ui:Eemalda minu kogust}} eemaldab selle salvestatud loendist (mitte detailidelt, millel see juba on).
- {{ui:Ekspordi tööriistad…}} kirjutab detaili tööriistad `.json`-faili; {{ui:Impordi tööriistad…}} lisab selle faili tööriistad detailile samade reeglite järgi (olemasolev tööriist jäetakse vahele, hõivatud T-number liigub). Fail sisaldab suurusi, soonte arvu, materjale ja sisestatud söötmis- ja kiiruse ülekirjutusi; ID-sid sellel ei ole. Kasuta seda, et viia töökoja tööriistad teise arvutisse või anda kolleegile.

Kui brauser ei suuda kogu hoida (salvestus on väljas või täis), teatab salvestamine sellest ja **Ekspordi tööriistad** on viis faili alles hoida. Fail peab olema PartCrafti tööriistakogu sellest või vanemast versioonist, kuni 500 tööriistaga, kehtiva suurusega; kõik muu lükatakse tagasi põhjusega.

Tööriistaga kaasasolevad lõikekiirused ja laastukoormused on algväärtused; vt [Tee tööteid ja G-koodi](topic:manufacture).
