---
title: 3D-viimistlus: paralleelne ja lainetus
summary: Viimista kogu mudeli kõver pind kuulotsaga, ümarotsaga või lameotsaga freesiga paralleelsete joontega mis tahes nurga all või läbikäikudena, mis on üksteisest määratud kaugusel, nii et nendevahelised harjad jäävad soovitud kõrgusele. Mida teekonnad tagavad ja mida mitte.
keywords: 3d-viimistlus, viimistlus, paralleelne, raster, lainetus, konstantne lainetus, hari, kuulotsaga frees, ümarotsaga frees, pind, toleranss, sammu vahe, kalle, jäetav ülemõõt, langev lõikur, ülelõige
from: 942d2341
---

Kaks toimingut Valmistamises lõikavad **kogu mudeli pinda**, hoides tööriista vertikaalselt (kolm telge). Need ei vaja valikuid: nad töötavad kogu mudelil, mis on ülevalt nähtav. Esmalt tee detailist jäme lõige (adaptiivne või tasku); viimistlusläbik lõikamata toorikul hoiatab, et see lõikaks sügavale.

## Paralleelne

Sirged jooned üle mudeli **nurga** all, mille seate, **sammu vahe** kaugusel (murdosa tööriista läbimõõdust). Iga joon järgib pinda: freesi ots on nii kõrgel, kui peab olema, et ükski osa lõikurist ei jääks mudelist allapoole, ning joont lõigatakse peenemalt seal, kus pind kõverdub. Kui **Siksak** on sisse lülitatud, jääb tööriist joonte vahel alla seal, kus see saab turvaliselt (kontrollitud mööda liikumist); muidu tõuseb üles.

- **Toleranss**: kui kaugel võib joone sirge lõik olla tõelisest ottsa kõrgusest (selle pool kasutatakse piirina iga lõigu keskel). Vaikimisi 0.01 mm.
- **Ainult kohas, kus pind on vähemalt … ja kõige rohkem … (°)**: viimistle ainult lamedaid või ainult järske alasid. Kus pind on vahemikust väljas, jäetakse joon välja ja tööriist tõuseb.
- **Jäetav ülemõõt**: mudel nihutatud selle kauguse võrra (lõikur kasvab selle võrra: täpne kuul- ja ümarotsaga tööriistade puhul; lametööriist jätab vähemalt nii palju).
- **Põhi**: mitte midagi ei lõigata alla selle z-koordinaadi.

## Lainetus

Läbikäigud, mis hoiavad pinnal üksteisest konstantset kaugust, nii et kahe naaberläbiku vahele jääv hari (lainetus) on soovitud **kõrgusega**. Kaugus tuleneb kõrgusest ja kuuli raadiusest: s = 2·√(2·R·h − h²); näiteks umbes 0.69 mm läbikäikude vahel Ø6 kuuli ja 0.02 mm hari korral. Ümarotsaga tööriist kasutab oma nurgaraadiust. Lametööriist on tagasi lükatud, sest sellel ei ole harja, mida mõõta.

Läbikäigud algavad **mudeli servast, sissepoole** või **mudeli ülaosast, allapoole**. Need on pinna kauguse kontuurid (mitte kõrguse), nii et kaldel on need plaanis lähedal ja tasasel alal laialt. Kaugust mõõdetakse pinna peal oleval ruudustikul ja see on täpne umbes 1 %; harja kõrgus on täpne seal, kus pind on tasane või aeglaselt kõver, ja ligikaudne seal, kus see kõverdub kiiresti. **Päripidi lõige** hoiab pinna kõrgemat poolt lõikuri paremal küljel.

## Kui head teekonnad on

Mida testid kontrollivad, kas suletud valemite või sõltumatu jõulise otsinguga lõikuri jalajäljest:

- Tööriista all olev otsa kõrgus on täpne kuul-, ümar- ja lametööriista puhul tahkudel, servadel ja nurkades ning ei ole kunagi üle tõelise kõrguse; paralleelsete joonte puhul jääb teekond sellest tolerantsi piiresse, ilma ülelõiketa sügavamalt kui see.
- Teekonna pikkused kaldtasandil vastavad suletud valemile; läbikäigud tasandil on küsitud kaugusel ja nendevaheline hari tuleb välja küsitud kõrgusel.
- Toorikusimulatsioon ei näita pärast läbikäiku ülelõiget ja näitab järelejäänud harju.

Need teekonnad **ei ole** kõik, mida tootmissüsteem pakub: need on põhilised viimistlusläbikud.

- **Pole ehitatud**: veetaseme (konstantne z) viimistlus, pliiatsi- ja nurgapuhastus, radiaalsed ja spiraalsed läbikäigud, kõvera projitseerimine pinnale, lamedate alade tuvastamine, hoidiku ja varre kokkupõrkekontrollid. Jämedat ja jäägilõiget käsitletakse eraldi toimingutena ([3D-jämedus ja jääk-freesimine](topic:rough-3d)); kallutatud tööriist on [5-teljeline viimistlus](topic:multi-axis#5-axis-finishing).
- Tööriista keskpunkt jääb mudeli kohale: teekonnad peatuvad mudeli servas, selle asemel et sõita sellest üle, nii et vertikaalne sein täpselt servas ei ole viimistletud kuni jalani.
- Alalõiked ei ole nähtavad (pind on see, mida tööriist kohtab ülevalt).
- Mudel on võrgutuumast tulev võrk, nii et teekonnad järgivad võrku (selle kõõlu tolerants on umbes 0.0002 detaili diagonaalist), mitte täpset pinda.
- Suure mudeli viimistlus peene tolerantsiga teeb pika programmi paljude lühikeste liikumistega. Kontrolli väljundit oma masina simulaatoris enne lõikamist.
