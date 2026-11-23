---
title: 3D-grovbearbetning och restbearbetning
summary: Rensa råmaterialet runt hela modellen nivå för nivå med en plan-, hörnradie- eller kulfräs och lämna material till finbearbetningen. Låt sedan en mindre fräs skära bara där den första lämnade material. Vad banorna garanterar och vad de inte gör.
keywords: 3D-grovning, grovning, grov, restbearbetning, restgrovning, kvarvarande råmaterial, material att lämna, nedsteg, nivåer, z-nivå, vattenlinje, ramp, stick, överskärning, mindre verktyg
from: 29ddc266
---

Två operationer i Tillverkning, under {{ui:More}} i dess verktygsfält, rensar råmaterial från **hela modellen** i 3D, med verktyget hållet lodrätt (eller längs operationens egen [verktygsriktning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). De tar inga val.

## 3D-grovning

{{ui:3D rough}} arbetar sig ner från råmaterialets överkant ett **nedsteg** i taget. På varje nivå rensar den allt verktyget kan nå utan att röra modellen: raka rader ett **stegavstånd** isär (en bråkdel av verktygets diameter), och sedan ett varv längs kanten av det den får nå, så att väggar följs och inte lämnas som en rad steg i planen.

- **Material att lämna**: hur långt verktyget håller sig från modellen överallt, för finbearbetningsgången (standard 0.5 mm).
- **En nivå vid varje plan yta**: en extra nivå på höjden för varje plan yta på modellen (plus material att lämna), så att ett golv inte lämnas nästan ett helt nedsteg högt.
- **Ignorera material tunnare än**: material tunnare än detta, uppåt eller åt sidan, är inte värt en gång (0.05 mm för grovning, 0.5 mm för restbearbetning, så att ett hårstrå kvar längs en vägg inte skickar det mindre verktyget runt varje vägg).
- **Botten**: inget skärs under denna höjd. Tomt betyder modellens botten.

Den startar från råmaterialet **så som operationerna före den lämnade det**: efter en planfräsning skär den inte luften där planfräsen varit.

Att komma ner: där verktyget skulle möta material på väg nedåt rampar det längs sin egen gång i **rampvinkeln**, fram och tillbaka över högst två verktygsdiametrar. En gång som är för kort för det sticks rakt ner med **stickmatningen**; operationen räknar sådana och varnar, eftersom ett verktyg som inte skär i sitt centrum inte bör göra det.

## Restbearbetning

{{ui:Rest}} är samma strategi för ett **mindre verktyg efter ett större**. Den läser materialsimuleringen och skär bara där material fortfarande står kvar: inre hörn som det större verktyget inte kunde vända i, spår det inte fick plats i, och stegen det lämnade i sluttningar. Överallt annars gör den ingenting, så dess bana är en liten del av vad samma verktyg skulle ta på nytt råmaterial.

Lägg den efter grovningsoperationen och välj det mindre verktyget. Den behöver materialsimuleringen av operationerna före den, som arbetsytan alltid kör.

## Hur bra banorna är

- **Ingen överskärning.** Verktygets positioner räknas ut på ett rutnät, med fräsen tagen lite större än den är (med 1.4 rutnätsceller åt sidan, och med material att lämna), så att den är fri från modellen var den än står. Testerna kontrollerar varje skärpunkt mot det exakta verktyget på det exakta nätet, och materialsimuleringen efter varje körning: ingen överskärning, ingen snabbgång genom material.
- **Priset för det**: väggar behåller lite mer än material att lämna, upp till beloppet som visas som "Extra material på väggar" på operationen (ungefär 0.5 mm för ett Ø6-verktyg, mindre för ett mindre). Finbearbetningsgången tar det.

Vad de här banorna inte är:

- Rader är raka linjer, inte förskjutningar av delens form eller kurvor med konstant ingrepp. De gör fler lyft och luftrörelser än en förskjuten eller adaptiv strategi, och första raden på varje nivå skär verktygets hela bredd. För fickor med plant golv är [Adaptiv](topic:manufacture) bättre grovning.
- Verktygets skaft och hållare kontrolleras inte. En varning säger när skäret är djupare än spiralängden.
- Underskärningar ses inte: modellen är det verktyget möter när det kommer ner längs sin axel. För att grova en sida, ge en andra operation en [lutad verktygsriktning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Restbearbetning känner till råmaterialet bara så väl som simuleringens rutnät (celler på 0.1 till 2 mm, efter delens storlek).
- På en stor del blir programmet långt (över 100 000 rörelser för en 200 mm fläns med ett Ø6-verktyg) och tar ungefär en minut att räkna ut, och varje ändring i arbetsytan räknar hela programmet på nytt. Använd det största verktyg som får plats för grovningen.
- Kontrollera utdata i din maskins egna simulator före skärning.
