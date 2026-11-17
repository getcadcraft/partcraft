---
title: 3D-viimistlus: paralleelne ja kaarjoonis
summary: Viimista kogu mudeli kõver pind kuul-, poolringi- või lameda otsfrees­iga paralleelsete joontena mis tahes nurga all või kindla vahega käikudena, nii et nendevaheline hari jääb sinu soovitud kõrgusele. Mida rajad tagavad ja mida mitte.
keywords: 3D-viimistlus, viimistlus, paralleelne, rasterjoon, kaarjoonis, konstantne kaarjoonis, hari, kuulfrees, poolringfrees, pind, tolerants, sammuvahe, kalle, jätta materjali, langev lõikur, sissesöök
from: e1587d0a
---

Kaks toimingut tootmistööruumis lõikavad **kogu mudeli pinda**, hoides tööriista vertikaalsena (kolm telge). Need ei võta valikuid: nad töötavad kogu mudeli kohal, mida saab ülevalt näha. Karestada detail esmalt (adaptiivselt või taskuga); viimistlus lõikamata materjali peal hoiatab, et see lõikaks sügavalt.

## Paralleelne

Sirged jooned üle mudeli sea **nurgaga**, **sammuvahega** (osa freesi läbimõõdust). Iga joon järgib pinda: tööriista tipp on nii kõrgel, et ükski lõikuri osa ei lähe mudelist allapoole, ja joon lõigatakse peenemaks seal, kus pind kõverdub. Kui **Sikk-sakk** on sees, jääb tööriist joonte vahel alla, kus see saab turvaliselt (kontrollitakse liigutuse ulatuses); muidu ta tõuseb.

- **Tolerants**: kui kaugel võib joone sirge lõik olla tõelisest tipukõrgusest (pool sellest kasutatakse piirina iga lõigu keskel). Vaikimisi 0.01 mm.
- **Ainult kus pind on vähemalt … ja kõige rohkem … (°)**: viimista ainult lamedaid või ainult järske alasid. Kus pind on vahemikust väljas, jäetakse joon välja ja tööriist tõuseb.
- **Jätta materjali**: mudel nihutatud selle kauguse võrra (lõikur kasvatatud selle võrra; täpne kuul- ja poolringtööriistadele, lame tööriist jätab vähemalt nii palju).
- **Põhi**: midagi ei lõigata selle z alla.

## Kaarjoonis

Käigud, mis hoiavad pinna peal konstantset kaugust üksteisest, nii et nende kahe lähima käigu vahele jääv hari (kaarjoonis) on soovitud **kõrgusega**. Kaugus tuleneb kõrgusest ja kuuli raadiusest: s = 2·√(2·R·h − h²), näiteks umbes 0.69 mm käikude vahel Ø6 kuuli ja 0.02 mm hari puhul. Poolringtööriist kasutab oma nurga raadiust. Lame otsfrees lükatakse tagasi: sellel pole harja, mida suurustada.

Käigud algavad **mudeli servast, sissepoole** või **mudeli tipust, allapoole**. Need on kauguse kontuurid üle pinna (mitte kõrguse omad), seega kaldel on nad planeeringus lähestikku ja tasasel alal laialt. Kaugus mõõdetakse pinna kohal olevas ruudustikus ja on täpne umbes 1 %; hari kõrgus on täpne seal, kus pind on tasane või kergelt kõverdunud, ja ligikaudne seal, kus see kõverdub kiiresti. **Päripidi** hoiab pinna kõrgemat külge lõikuri paremal küljel.

## Kui head rajad on

Mida testid kontrollivad suletud valemite või sõltumatu jõulise otsinguga lõikuri jalajäljest:

- Tööriista all olev tipukõrgus on täpne kuul-, poolring- ja lame tööriistale mudeli tahkudel, servadel ja nurkades ning ei ole kunagi tõelisest kõrgusest kõrgem; paralleelsete joonte puhul jääb rada tolerantsi piiresse, sissesöögid pole sügavamad kui see.
- Rajapikkused tasasel tasapinnal vastavad suletud valemile; kaarjoonise käigud tasapinnal on nõutud kauguse kaugusel ja nendevaheline hari tuleb välja nõutud kõrgusega.
- Materjali simulatsioon ei näita pärast käiku sissesööki ja näitab järelejäänud harjasid.

Mida need rajad **ei ole**: need on põhilised viimistluskäigud, mitte kogu, mida tootmissüsteem pakub.

- Pole veel ehitatud: vesilinjalõige (konstantne z), pliiatsi- ja nurgapuhastus, radiaalsed ja spiraalsed käigud, kõvera projitseerimine pinnale, lameda ala tuvastus, järelejäänud materjali töötlemine, hoidiku ja varre kokkupõrke kontroll ning tööriista kallutamine.
- Tööriista keskpunkt jääb mudeli kohale: rajad peatuvad mudeli servas, selle asemel et joosta sellest üle, seega ei viimistleta vertikaalset seina servas kuni selle jalani.
- Allalõikeid ei näe (pind on see, mida tööriist ülevalt kohtab).
- Mudel on võrgusilma tuumast tulev võrk, seega rajad järgivad võrku (selle kõõluse tolerants on umbes 0.0002 detaili diagonaalist), mitte täpset pinda.
- Suure mudeli viimistlemine peenel tolerantsil teeb pika programmi paljude lühikeste liigutustega. Kontrolli väljundit oma masina enda simulaatoris enne lõikamist.
