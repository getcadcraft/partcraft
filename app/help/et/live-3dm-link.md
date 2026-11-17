---
title: Hoia .3dm-mudel elavana
summary: Muuda mudelit programmis, kus ta loodi, ja jälgi, kuidas PartCraft'i keha seda järgib Rhino 8 või Grasshopperi definitsioonist; sinu elemendid ehitatakse uuel kujul uuesti.
keywords: rhino, grasshopper, elav link, elav ühendus, 3dm, nurbs, parameetriline, link, sünkroonimine, skript, saatmine, imporditud keha
from: cf4dc9b2
---

Vormi mudelit edasi seal, kus modelleerid, ja valmista, kontrolli ning dokumenteeri seda siin. Iga muudatus teises programmis asendab PartCraftis ühe imporditud keha ning sellele järgnevad elemendid ehitatakse uuel kujul uuesti.

:::note
Link vajab sama arvutis **CadCraft Studiot**. Brauseri vahekaart ei saa ühendust luua. Midagi ei liigu interneti kaudu: skript suhtleb Studioga selle arvuti enda aadressil, tokeniga.
:::

:::warning
Seda linki on katsetatud skripti failikirjutaja ja teise programmi asendajaga, mitte veel Rhino või Grasshopperi sees. Kui seal midagi ebaõnnestub, anna meile teada, mida see ütles.
:::

## Seadistamine

1. Ava Studios PartCraft. Valikus {{ui:Sätted}} › {{ui:PartCraft}} › {{ui:Assistendid}} märgi **Luba tehisintellekti assistentidel ja skriptidel kasutada PartCraftit**, seejärel **Muuda**.
2. Studios vali {{ui:Ühenda assistent}}. See näitab aadressi ja tokenit, mille kleebid allpool.
3. Laadi skript alla: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Rhinost

1. Käivita `cadcraft_link.py` Rhino skriptiredaktoris (Python 3 Rhino 8-s).
2. Esimesel korral kleebi aadress ja token. Need hoitakse failis `.cadcraft-link.json` sinu kodukaustas, mitte kunagi mudelis. Studio teeb iga käivitumisega uue tokeni, seega küsib skript siis uuesti.

Peatamiseks käivita skript uuesti.

## Grasshopperist

Käivita skript kõigepealt üks kord Rhinos, et aadress ja token salvestuksid.

1. Lisa Script-komponent (Python 3) ja kleebi sinna kogu `cadcraft_link.py`.
2. Anna sellele need sisendid: `G` (geomeetria, loendi juurdepääsuga), `N` (nimi, valikuline), `On` (tõeväärtuse lüliti) ja `Target` (valikuline: `model` või `part`, kui mõlemad rakendused on avatud).
3. Sea `On` tõeks.

Iga lahendus saadab `G` edasi ja asendab selle, mille komponent saatis viimati.

## Kuidas see siin töötab

- **Üks keha.** Kõik mudelis nähtav muutub üheks imporditud elemendiks, nagu siis, kui [avad .3dm-faili](topic:open-3dm-files).
- **Keha peab olema suletud.** PartCraft täidab väikesed augud ja lamedad avad ning teisele programmile öeldakse, mitu neid oli. Kui mudel ikka ei sulgu, jätab PartCraft endise keha alles ja olekuriba ütleb seda. Järgmine muudatus, mis sulgeb, uuendab keha.
- **Lõpeta tegevus.** Visandis või joonisel uuendusi ei võeta vastu ja proovitakse uuesti; need jõuavad kohale, kui oled tagasi mudelis.
- **Võta tagasi.** Kahe sekundi jooksul üksteise järel tulevad uuendused jagavad ühte tagasivõtmise sammu.
- **Salvesta.** Detailifail säilitab lingi. Pärast uuesti avamist käivita skript uuesti ja sama element uueneb.

**Ainult ühes suunas.** Siin tehtud muudatused ei lähe tagasi teisele programmile.

## Kui midagi läheb valesti

- **„Ükski ModelCraft- ega PartCraft-aken seda ei luba“:** tee seadistuse 1. samm.
- **„Studio keeldus tokenist“:** Studio on taaskäivitunud. Kopeeri uus token ja käivita skript uuesti. Grasshopperi puhul käivita see kõigepealt Rhinos.
- **„CadCraft Studioga ei saa ühendust“:** Studio ei tööta või aadress on muutunud.
