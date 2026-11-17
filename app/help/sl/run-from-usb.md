---
title: Zagon z USB-ključka
summary: Kaj inženirska orodja zapisujejo in kam, da lahko CadCraft Studio deluje z USB-ključka ali poljubne mape brez namestitvenega programa in brez skrbniških pravic: nastavitve, generatorji, predpomnilniki in datoteke delov ter kaj ostane na ključku.
keywords: usb, prenosno, brez namestitve, skrbnik, admin, nastavitve, podatkovna mapa, generatorji, kam se zapisujejo datoteke, brez povezave, zasebnost, dostop gostitelja
from: 263efc79
---

Inženirska orodja (generatorji, inženirska knjižnica, preverjanja in podatkovne datoteke) ne potrebujejo **skrbniških pravic** in **namestitvenega programa**. Zapisujejo samo tisto, kar je navedeno tukaj, in nič drugega.

| Kaj | Kje je shranjeno |
|---|---|
| Vaši deli, z ustvarjenimi telesi, podatkovnimi listi in preverjanji | Datoteka dela (`.partcraft.json`), kamor jo shranite. |
| Generatorji, ki ste jih odprli iz datotek | V lastni shrambi aplikacije: lokalna shramba brskalnika na spletni strani in mapa `data` poleg programa v prenosnem Studiu. Največ 20. |
| Nastavitve (velikosti voksla, ki ste jih nastavili, niti reševalnika, postavitev) | Ista shramba aplikacije. |
| Podatkovni listi, polja, mreže | Samo tam, kamor jih shranite: prenos gre tja, kamor izberete. |

Orodja ne opravljajo lastnih klicev omrežja: generatorji, ki so priloženi, so datoteke v mapi aplikacije, knjižnica in preverjanja pa tečejo na vašem računalniku v delovnem procesu, ki ne more dostopiti do omrežja, inženirski podatki (lastnosti vode in zraka, materiali) pa so v aplikaciji. Generator, ki ga odprete iz datoteke, se prebere na vašem računalniku in nikamor ne odide.

## Prenosni zip za Windows in Linux

Prenosni Studio za Windows hrani nastavitve, predpomnilnike in dodatke v mapi `data` poleg programa. AppImage za Linux jih hrani poleg sebe, kadar je poleg njega datoteka z imenom `portable`; brez te datoteke uporablja vašo domačo mapo. Prenosne oblike za Mac ni: sistem ne dovoli, da bi prenesena aplikacija pisala poleg sebe. Opombe o prenosni različici ovoja aplikacije (pomoč `Studio`) navajajo, kaj program zapisuje.

## Dostop gostitelja

Tukaj ni zahtevan dostop gostitelja. Tiskalniki, serijski stroji in naprave USB so ločeni: zahtevajo ga, kadar opravilo potrebuje napravo, enkrat za vsako napravo, generatorji ali preverjanja pa se jih ne dotikajo.
