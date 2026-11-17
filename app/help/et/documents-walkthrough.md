---
title: Dokumendid ja muudatused (hoidla)
summary: Samm-sammuline läbikäik ühest päris tööst: pane projektikausta detailid ja koosted kontrolli alla, võta detail välja, muuda seda, kontrolli sisse märkmega, vabasta, vaata, mis seda kasutab ja materjalinimekirja, mida näeb teine inimene, kui detail on lukus, ning kuidas see töötab pilvekaustadega.
keywords: hoidla, dokumendid, juhend, õpetus, võta välja, kontrolli sisse, muudatus, vabastamine, kinnita, lukk, ajalugu, kus kasutatakse, materjalinimekiri, bom, koost, pilvekaust, projektikaust, kaks inimest, jagatud kaust
from: 0a5e6983
---

## Mida sa teed

Oled Ana ja töötad koos kolleegi Benjaminiga projekti Riverside Clinic kallal. Projekti detailid ja koosted asuvad ühes kaustas, millele te mõlemad pääsete (jagatud draiv, sünkroonitud kaust või pilvekaust). Lõpuks on üks fail jõudnud esimesest koopiast vabastatud muudatuseni **A**, seda on muudetud veel kord muudatusena **B.1**, sa oled näinud, kes mida tegi, ja näed, mida Ben näeb, kui sina faili hoiad.

Kõik hoitakse peidetud kaustas `.ccvault` sinu failide kõrval: serverit pole, midagi ei laadita üles (pilvekaust on erand, vt viimast sammu). Iga nupu ja reegli kohta ühes kohas vaata teemat *Dokumendid: väljavõtmine, muudatused ja vabastamine*, kui sinu rakendusel see on.

## 1. Projektikausta seadistamine

1. Vali tööriistariba rühmas **Fail** {{ui:Dokumendid…}}.
2. Vali {{ui:Vali projektikaust}} ja vali kaust, kus on projekti detailid ja koosted. (Projektikaustad töötavad Studios ja brauserites, mis oskavad kausta avada, nagu Chrome ja Edge. Teistes brauserites paneel ütleb seda.)
3. Vali rea **Sina:** juures {{ui:Muuda}} ja sisesta oma nimi, `Ana` (kui küsitakse, siis ka selle arvuti nimi). Paneel näitab nüüd *Sina: Ana, arvutis* ja sinu arvuti nime. Sinu nimi läheb kõige juurde, mida teed.
4. Vali {{ui:Alusta selles kaustas hoidlat}} ja sisesta projekti nimi `Riverside clinic`. Paneel ütleb *Hoidla on alustatud projektile Riverside clinic.*

## 2. Faili võtmine kontrolli alla

1. Ava **Failid, mida hoidlas ei ole** ja vali faili `plates/Bracket.partcraft.json` kõrvalt {{ui:Lisa}}.
2. See ilmub jaotisse **Hoidlas olevad failid** muudatusega **A.1** ja olekuga **Töös**. A.1 on esimene koopia; hoidla hoiab iga muudatuse koopiat.

## 3. Võta välja, muuda, kontrolli sisse

1. Vali faili `plates/Bracket.partcraft.json` kõrvalt {{ui:Ava}}. Detail avaneb PartCraftis ja paneel sulgub, et sa näeksid detaili. Ava paneel uuesti menüüst {{ui:Dokumendid…}}.
2. Ava paneel uuesti ja vali {{ui:Võta välja}}. Rea olekuks on nüüd **Sinu poolt välja võetud**. Kausta `.ccvault/locks` on loodud lukufail; keegi teine ei saa seda faili välja võtta enne, kui sa selle sisse kontrollid.
3. Muuda detaili: redigeeri mõõtu, lisa auk. Salvestamine keeldub, kui fail pole sinu poolt välja võetud, ja ütleb põhjuse. Salvesta nimega töötab alati, sest see loob sinu enda koopia.
4. Ava paneel, vali {{ui:Kontrolli sisse}} ja kirjuta, mis muutus (`Nihutasin ust`). Paneel ütleb *kontrolliti sisse muudatusena A.2*. Projektikaustas olev fail on nüüd detail, mille sa avatuna hoidsid, ja lukk on eemaldatud. Kui midagi ei muudetud, muudatus ei muutu.

Kui mõtled ümber, annab {{ui:Võta väljavõtmine tagasi}} faili tagasi ilma uue muudatuseta.

## 4. Ülevaatus ja vabastamine

1. Vali {{ui:Saada ülevaatamisele}}. Olekuks saab **Ülevaatamisel** ja fail muutub ainult lugemiseks.
2. Enne kinnitamist vali {{ui:Projekti sätted}} ja loetle, kes võib kinnitada (üks nimi reale), näiteks `Ben` ja `Carla`, ning märgi reegel, et kinnitaja peab olema keegi muu kui autor. Vali {{ui:Salvesta sätted}}. Nüüd keeldub hoidla ise kõigist teistest.
3. Ben (või Carla) valib {{ui:Kinnita}} ja sisestab kinnitaja nime. Olekuks saab **Vabastatud** ja muudatuseks **A**, koos reaga *kinnitas* ja nimega. Vabastatud fail on ainult lugemiseks. {{ui:Saada tagasi}} oleks saatnud faili tagasi olekusse Töös, koos põhjusega.

Kinnitaja nimi on paneelile sisestatud nimi; see on kirje, kes kinnitas, mitte isikutõend.

## 5. Uus muudatus

1. Vabastatud failil vali {{ui:Uus muudatus}}. Sa hoiad seda järgmise tähe jaoks.
2. Muuda seda ja vali {{ui:Kontrolli sisse}}. Muudatuseks saab **B.1**, olekuga Töös. Vabasta see samal viisil ja see saab muudatuseks **B**. {{ui:Võta väljavõtmine tagasi}} enne esimest sisse kontrollimist jätab faili tasemele **A**.

Muudatustähed käivad A, B … Z, AA, AB. Kui sinu standard jätab mõned tähed välja, jätab projekti säte *Kasuta ASME Y14.35 järjestust* järgmistes muudatustes vahele I, O, Q, S, X ja Z.

## 6. Vaata, mis juhtus

Vali faili nimi, et avada selle üksikasjad:

- **{{ui:Ajalugu}}**: iga sündmus, uuemad esimesena, koos sellega, kes, millisel arvutil ja millal: *Kontrolli sisse A.2*, Ana; *Vabastatud*, Ben jne.
- **{{ui:Muudatused}}**: muudatuste tabel: iga hoitud muudatus koos kuupäeva, selle sisse kontrollija, märkmega ja kinnitajaga. Hoidla hoiab iga muudatuse koopiat kaustas `.ccvault/revs`.
- **{{ui:Kasutab}}**: koosteosad.
- **{{ui:Kasutatakse}}**: loetleb iga hoidla koosteni, mis seda detaili sisaldab: muuda kinnitust ja tead, milliseid koosteid kontrollida.

## Koosted: mida need kasutavad ja materjalinimekiri

Pane koost (`.partcraft.json`, salvestatud Assembly-režiimist) kausta ja lisa see. Vali selle nimi: **Kasutab** loetleb osad, mida see sisaldab, koos iga osa muudatuse ja olekuga; detaili juures **Kasutatakse** loetleb iga koosteni, mis seda sisaldab. {{ui:Materjalinimekiri (CSV)}} salvestab kogu osade loendi tasemete kaupa koos kogustega, muudatuste ja olekutega tabelarvutusse. Muuda kinnitust ja **Kasutatakse** ütleb, milliseid koosteid vaadata.

## 7. Mida Ben näeb, kui sina faili hoiad

Nüüd võta fail uuesti välja ja palu Benil avada sama projektikaust oma arvutis ning avada paneel. Faili real näeb ta **Ana poolt välja võetud** sinu arvutis **alates** ajast ja nuppu {{ui:Võta välja}} ei ole. Kui ta ikkagi proovib, hoidla keeldub: lukk on fail, mida süsteem ei tee kaks korda, nii et kaks inimest ei saa faili omada, isegi samal sekundil, kui kaust on Studios kettal. (Brauseris lubab kaust ainult parima pingutuse ja paneel ütleb seda jaotises **Kaust**.)

Kui Ana on eemal ja Ben vajab faili, vabastab {{ui:Katkesta väljavõtmine}} selle. Ta peab sisestama põhjuse; see läheb logisse koos sellega, kelle väljavõtmine see oli. Kui projekt loetleb administraatorid, saavad ainult nad seda teha. Väljavõtmine, mis on vanem kui aegumispiir (vaikimisi 14 päeva), märgitakse *pikka aega*. Pärast katkestamist lükatakse Ana hiline sisse kontrollimine tagasi, nii et te ei kirjuta teineteise muudatusi üle.

## 8. Pilvekaustad

Pilvekaust on projektikaust, mida hoitakse meeskonna pilvesalvestuses, nii et meeskonnal pole vaja jagatud draivi. Studios, kui oled sisse logitud oma CadCraft-kontoga, näitab paneel {{ui:Ava pilvekaust}} nupu {{ui:Vali projektikaust}} kõrval. Vali see ja vali kaust, mis on kuvatud kujul tööruum / kaust. Tööruumi omanik loob kausta esimesena ja meeskonna pilvesalvestus peab olema kehtiv. Kõik ülal kirjeldatu töötab samamoodi; lukku teeb server ja see on inimeste vahel range. Kui pole sisse logitud, ütleb paneel, et logi sisse. Tavalises brauseri vahelehes pilvenuppu ei pakuta; kasuta Studiot.

## Proovi

Tee ülal kirjeldatud kaheksa sammu päris faili koopiaga. Kahe inimese sammud vajavad teist inimest või kahte akent kahe nimega. Kui proovid päris jagatud kaustaga, loetleb kogukonna testimise leht kontrolli, mis küsib täpselt seda, ja võtab tulemusi vastu.
