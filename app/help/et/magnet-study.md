---
title: Visandi magnetuuring
summary: Muuda visandite suletud profiilid lameda magnetmudeliks (raud, magnetid, mähised), vaata välja ning loe jõudu ja pöördemomenti valitud kehal.
keywords: magnet, magnetiline, magnetostaatika, väli, magnetvoo tihedus, jõud, pöördemoment, mähis, jugu, raud, B–H kõver, püsimagnet, aktuaator, mootor, solenoid, maxwell
from: 604efc3b
---

Kasuta detailil, millel on visandeid, elementide tööriistaribal {{ui:Veel}} › {{ui:Visandite magnetuuring…}}. Iga märgitud visandi suletud kuju on lameda mudeli üks piirkond; uuring arvutab magnetvälja B, jõu ja valitud keha pöördemomendi.

## Sammud

1. Joonista kehad visanditesse suletud kujunditena: raudjugu, magnet, mähis. Puutuvatel kehadel on ühine serv, seega pane need eri visanditesse; eraldi seisvad või üksteise sees olevad kehad (aken jugus) võivad jagada ühte visandit. Hoia visandid samal tasandil.
2. Ava uuring ja märgi kasutatavad visandid. Iga suletud profiil saab rea, nummerdatult. Ütle, mis see on: {{ui:Õhk}}, {{ui:Raud}} (läbilaskvus või B–H kõver, sisestatuna paaridena B teslades ja H A/m-des), {{ui:Püsimagnet}} (Br teslades, selle suund nurgana visandi x-teljest ja selle läbilaskvus tagasipöördel) või {{ui:Mähis}} (profiili läbiv kogu vool, keerud korda amprid; märk ütleb, mis suunas see kulgeb).
3. Märgi {{ui:Jõud ja pöördemoment sellele kehale}} kehade jaoks, mille jaoks neid soovid. Sisesta detaili sügavus visandi tasandist välja.
4. Vali mudeli võrk ja selle ümbruse õhk, seejärel {{ui:Käivita}}.

## Mida peaksid nägema

- Magnetvoo tihedus |B| mudeli kohal: tumesinine madal, punane kõrge; profiilid on nummerdatud.
- Tugevaim väli ja selle asukoht, kolmnurkade arv ning iga märgitud keha kohta jõud piki x ja y ning pöördemoment selle keskpunkti ümber antud sügavusel.
- {{ui:Salvesta tulemused (CSV)}} kirjutab arvud faili.

## Hea teada

- See on lame, staatiline mudel: kõik on arvutatud meetri sügavuse kohta, ilma pöisvooludeta ja hüstereesita, ning magnet on sirge tagasipöördejoon (seda ei saa demagnetiseerida).
- Mudel asub õhukastis, mille serv on sein. Võrdle kahte õhukasti suurust ning tavalist ja peent võrku: keha ümbritsevast väljast arvutatud jõud on sama hea kui seal olev võrk.
- Raud, millel on ainult läbilaskvus, ei küllastu kunagi. Kui väli ületab 2 T, tõstab uuring probleemide loendis ⚠: anna raual B–H kõver. Uue rea arvud on näited (raud μr 2000, magnet 1.2 T), mitte materjali andmeleht.
- Keha vajab jõu võtmiseks ruumi enda ümber: kui mõni teine keha on liiga lähedal, ütleb uuring seda.
- Joonistusabi, mitte insenerilik kinnitus.

## Järgmine

- [Magnetväljad 2-D-s (õpetus)](topic:magnetic-fields-2d)
