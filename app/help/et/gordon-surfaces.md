---
title: Pinnad kõverate võrgustikust (Gordoni pind)
summary: Tee üks sile pind läbi profiili- ja juhtkõverate võrgu, mis on joonistatud visanditesse või võetud detaili servadest; sulge tahkiseks, kui profiilid on suletud, ning mis on täpne, mis on sobitatud, ja teated, kui võrk ei sobi.
keywords: puutuja, G1, puutujapidevus, peegeltasand, Gordoni pind, kõverate võrk, piirpind, võrgupind, profiilid, juhtjooned, juhtkõverad, lofti juhtrööbad, juhtrööbas, nahk, transfiniitne, Coons, B-spliini pind, vabakujuline pind
from: ada3cb8b
---

:::note
**Seda versiooni pole veel ehitatud.** Gordoni pind vajab täpset geomeetriatuuma, mida selles PartCrafti versioonis pole: see ehitab iga detaili võrgutuumaga. [Mida pole veel ehitatud](topic:not-built-yet) ütleb, mida selle asemel teha. Ülejäänud lehekülg kirjeldab seda nii, nagu see töötab täpse tuumaga.
:::

**Gordoni pind** on üks pind, mis läbib kõiki võrgu kõveraid: ühele poole suunatud **profiilide** ja teisele poole suunatud **juhtjoonte** komplekt, mis ristuvad nagu võrgu niidid. Nii kujundad kere, tiiva või käepideme mõne lõikekõvera abil, mida otse juhid. See vajab **täpset tuuma** (vt [Võrgutuum](topic:solid-kernels)).

## Joonista võrk

1. Joonista **profiilid**: kaks või enam kõverat külg-külje kõrval, näiteks lõiked paralleelsetel tasanditel. Sobivad jooned, kaared, ringid ja splainid, ning otsast otsa ühendatud kõverate ahel loetakse üheks kõveraks.
2. Joonista **juhtjooned**: kaks või enam kõverat, mis kulgevad profiilidest üle. Iga juhtjoon peab ristuma iga profiiliga üks kord ja iga profiil iga juhtjoonega üks kord.
3. Tee kõverad tõeliselt kokku. Joonista juhtjoone visand nii, et selle kõver läbib profiilide punkte (haakudes projitseeritud punktidesse või sisestades koordinaadid). Võrk aktsepteerib vahed kuni **Tolerantsini** (alguses 0.01 mm).

Ühes visandis võib olla mitu kõverat: iga eraldi ahel selles on oma kõver. Nii saad näiteks joonistada kõik juhtjooned ühte visandisse ülatasandil.

## Tee pind

1. Vali elementide rühmas {{ui:Veel}}, seejärel {{ui:Gordoni pind}}.
2. PartCraft võtab visandid, mida keegi veel ei kasuta: need, mis on paralleelsetel tasanditel esimesega, muutuvad **profiilideks**, ülejäänud **juhtjoonteks**. Kontrolli paremal olevat loendit ja määra iga visand väärtusele **Profiilid**, **Juhtjooned** või **Ei kasutata**.
3. Detaili servade kasutamiseks klõpsa **Vali servad profiilidena** (või **juhtjoontena**), klõpsa servi vaates ja seejärel vajuta Esc.

Tulemus on **pinnakeha**. {{ui:Paksenda}} muudab selle tahkiseks, {{ui:Õmble}} õmbleb selle teiste pindadega ja {{ui:Lõika pinda}} lõikab selle.

### Sulge tahkiseks

Kui profiilid on suletud kõverad (ringid, suletud splainid, suletud ahelad) ja esimene ning viimane profiil lamavad kumbki tasandil, märgi **Sulge tahkiseks**. Otsad kaetakse tasaste tahkudega ning suletud kuju ühineb, lõigatakse, ristub või muutub uueks kehaks nagu iga teine element. Nii teed lofti, mis järgib juhtkõveraid. Sama töötab ka suletud juhtjoonte korral.

## Puutuja tasandiga mööda serva

Gordoni pind läbib oma kõveraid, kuid üksi ei sobitu see sellega, mida ta kohtab, kalde järgi. Et see väljuks servast **puutujana** tasandile (G1), näiteks peegeltasandile, nii et peegeldatud koopia ühineb ilma voldita, või tasasele tahule, millest see kasvab:

1. Vali Gordoni element. Jaotises **Puutuja tasandile** vali tasand loendist {{ui:Lisa tasand…}} (Eestasand, Ülatasand, Paremtasand või viitetasand) või vali vaates tasane tahk ja vajuta {{ui:Lisa valitud tasapinnaline pind}}.
2. PartCraft leiab võrgu piirkõvera, mis asub selles tasandis, ja pind väljub sellest tasandiga puutujana.

Kui tasandil on kaks piirkõverat (põrand mõlema otsa all), lisa see kaks korda: iga koopia võtab järgmise. Kuni neli tasandit, üks iga serva kohta.

Aruanne ütleb, mööda millist kõverat iga tasand puutujaks tegi ja kui järsk nurk pind enne selle tasandiga kohtus. Juhtjooned, mis juba väljuvad selle kõvera puutujana tasandile, järgitakse täpselt. Juhtjooned, mis sellest eemale tõusevad, painutatakse serva lähedal kitsas ribas, ja aruande „järgib iga kõverat piires“ arv ütleb, kui palju: joonista juhtjooned, mis väljuvad servast tasaselt, täpse sobivuse saavutamiseks.

## Mis on täpne ja mis on sobitatud

Paneel ütleb, mis neist kehtib ja kui kaugele pind su kõveratest kõrvale kaldub.

- **Täpne**: kui iga kõver on polünoomiline (jooned, splainid ja nende ahelad) ning juhtjooned ristuvad kõigi profiilidega samadel parameetritel, on pind täpselt nende kõverate Gordoni pind. Bikuupsest pinnast lõigatud isokõverate võrk annab selle pinna tagasi ja neli sirget joont annavad tasase või keerdunud (bilineaarse) lapi.
- **Sobitatud**: kaared, ringid ja detaili servad ei ole polünoomilised ning erinevatel parameetritel ristuvad kõverad tuleb ajastada uuesti, et ristumised joonduksid. Need kõverad sobitatakse kuupiliste B-splainidega võrgu suuruse ühe kümnemiljondiku piires (umbes 0.00001 mm 100 mm detaili puhul). Kaarte ja joontega tehtud silindrilapp jääb tõelise silindri 0.00001 mm piiresse.

Kõverate vahel on pind see, mida meetod annab: profiilid segatud üle, pluss juhtjooned segatud üle, miinus nende ristumispunktide segu. See on kõikjal sile, välja arvatud kohtades, kus kõveral on terav nurk. Kus kaks Gordoni pinda jagavad piirkõverat, kohtuvad nad serv-serva kaupa (G0), mitte puutujana.

## Kui võrk ei sobi

| Teade | Mida teha |
|---|---|
| „… ei kohtu: need on 0.4 mm kaugusel“ | Tee see profiil ja juhtjoon ristuma või tõsta Tolerantsi |
| „… kohtub … 2 korda“ | Juhtjoon tohib iga profiiliga ristuda ainult korra: jaga silmuslik kõver või kasuta vähem profiile |
| „… teises järjekorras“ või „voldib end üle“ | Kaks juhtjoont ristuvad (või kaks profiili). Perekondade peavad kulgema külg-külje kõrval |
| „vähemalt kaks profiili ja kaks juhtjoont“ | Lisa kõveraid või määra rohkem visandeid väärtusele Profiilid või Juhtjooned |
| „segab avatud ja suletud kõveraid“ | Tee kõik profiilid avatuks või kõik suletuks (juhtjoontega sama) |
| „Ots … ei ole tasane, seega seda ei saa katta“ | Joonista esimene ja viimane suletud profiil kumbki ühele tasandile või jäta Sulge tahkiseks välja |

## Piirangud

- Üks B-spliini tahk võrgu kohta: ei ole G1- ega G2-puutujat naaberpindadega.
- Suletud võrgu õmblus esimesel juhtjoonel on ühendatud serv-serva kaupa, kuid mitte puutujana.
- Lofti element ise ei oma juhtrööpaid; kasuta selle asemel Gordoni pinda, mis on suletud tahkiseks.
- Väga lainelised kõverad või ristumised, mis on ühe kõvera kohal teisega võrreldes väga ebaühtlaselt paigutatud, võivad sobitamiseks vajada liiga palju punkte; element ütleb sellest siis.
