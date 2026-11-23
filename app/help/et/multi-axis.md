---
title: 4- ja 5-teljeline töötlus
summary: Ütle PartCraft'ile, millised pöörlevad teljed masinal on, kalluta tööriist iga tavalise toimingu jaoks, viimista pind kuulotsaga freesiga, mis kaldub lõigates, või keera detaili tööriista all 4. teljel. Mis kirjutatakse G-koodi ja mis pole tõestatud.
keywords: 5-telg, viietelg, 4-telg, neljas telg, mitmetelg, 3+2, indekseeritud, positsiooniline, kallutus, kallutatud tööriist, pöörlev, trunnion, laud, pea, A-telg, B-telg, C-telg, TCP, RTCP, tööriista keskpunkt, G43.4, pöördvõrdeline aeg, G93, kinemaatika, pöörlemispunkt, swarf, juhtenurk
from: c4f1c491
---

Valmistamine saab hoida tööriista nurga all ja liigutada pöörlevaid telgi lõikamise ajal. Kolm asja teeb seda, lihtsamast kuni keerukamani.

**Siin ei ole midagi masinal käivitatud.** Teed on testidega geomeetria vastu kontrollitud ja G-kood loetakse tagasi, kuid sisseehitatud postprotsessorid järgivad juhtseadmete dokumenteeritud koode, mitte ühtegi masinat, mis on meie ees. Tõesta programm oma juhtseadme simulaatoris ja õhus enne, kui see jõuab metalli.

## Masina pöörlevad teljed

Vahekaardil **Seadistus** ütleb {{ui:Pöörlevad teljed}}, mis masinal on:

| Valik | Masin |
|---|---|
| Puudub (3 telge) | Lihtne frees. Iga toiming, mis vajab tööriista kallutamist, hoiatab ja postprotsessor keeldub seda kirjutamast. |
| A (pöörleb ümber X) | Üks pöörlev telg piki X-i: 4. telje laud või indekseerija. Tööriist saab kallutuda ainult Y–Z tasandil. |
| B (pöörleb ümber Y) | Üks pöörlev telg piki Y-i. Tööriist saab kallutuda ainult X–Z tasandil. |
| A ja C | Kallutustelg ümber X, mida kannab või kannab pööre ümber Z: trunnion-laud või pea. |
| B ja C | Sama, kallutusega ümber Y. |

Seejärel:

- **Kantud**: {{ui:Laud (detail pöörleb)}} või {{ui:Pea (tööriist pöörleb)}}. Laud pöörab vastupidises suunas, et tuua sama pind tööriista alla, nii et iga nurga märk järgneb sellest.
- **Juhtseade hoiab tööriista otsa teel (TCP)**: kui sees, on programmi X Y Z tööriista ots detaili enda koordinaatides ja juhtseade teeb ülejäänu (sisseehitatud Fanuc-tüüpi ja LinuxCNC postprotsessorid kirjutavad tööriista pikkuse jaoks `G43.4`). Kui väljas, kirjutab PartCraft lauamasinal X Y Z-d nii, nagu pööratav laud kannab detaili, ümber **pöörlemiskeskme**, mille annad (töökoordinaatides; 0, 0, 0, kui töönullpunkt on keskel). Pea-masin vajab TCP-d sees: ilma selleta vajaks programm masina pöörlemispunkti pikkust, mida PartCraft ei tea.
- **Kallutuspiir**: kui kaugele kallutustelg läheb.

Masinad erinevad selle poolest, mis suunas loetakse positiivseks. Kui telg pöörleb sinu masinal valesti, muuda märki postprotsessori koopias ([Muudetavad postprotsessorid](topic:post-processors)).

## Kallutatud tööriist tavalise toimingu jaoks

Iga freesimistoimingul (tahk, tasku, adaptiivne, kontuur, puurimine, faas, paralleelne, lainetus, 3D-jäme, jääk) on **Tööriista kalle** ja **Kalle suunas**: tööriista suund ainult selle toimingu jaoks, mõõdetuna seadistuse tööriistatelje suhtes. See on 3+2 töötlus: pöörlevad teljed viiakse asendisse ja jäävad sinna, kui kolm telge lõikavad.

- Sisesta kaks nurka või vajuta {{ui:Tööriist tahku risti}} ja klõpsa lamedale tahule: tööriist osutab otse sellele.
- Vali toimingu tahud ja servad nagu tavaliselt. See, mis loetakse põhjaks või auguks, otsustatakse kallutatud tööriista suunas.
- Selle suuna toorik on kast, mis hoiab pööratud tooriku, nii et kõrgused ja kliirensid on sellest küljest ohutud.

G-koodis tõuseb tööriist enne toimingut üles, pöörlevad teljed pööravad ja tööriist laskub oma esimese punkti kohale. Lauamasinal ilma TCP-ta jäävad kaared kaarteks ja kanoonilised puurimistsüklid tsükliteks (kirjutatud raam on ainult ümber Z pööratud). TCP-ga kallutatud tasandil muutuvad kaared lühikesteks joonteks ja tsüklid liikumisteks, mida nad esindavad.

Toorikusimulatsioon käitab kallutatud suunda **iseseisvalt**: see näitab, mida see toiming lõikab kogu toorikust selle küljelt vaadatuna ning leiab sealt ülelõiked, kuid teistest suundadest tehtud lõikeid ei kanta üle.

## 5-teljeline viimistlus

{{ui:Veel}} Valmistamise tööriistaribal loetleb selle toimingu ja järgmise toimingu vahekaardi **Toimingud** ülaosas.

{{ui:5-telg}} on [paralleelne viimistlusläbik](topic:finish-3d) **kuulotsaga freesiga, mis kaldub liikudes**. Kuul lõikab sfääriga ja sfäär on sama, mis suunas tööriist oma keskpunkti ümber ka ei kalluks, nii et kuul järgib täpselt seda rada, mille annaks 3-teljeline läbik, ja muutub ainult tööriista suund:

- **Pinna poole**: 1 = pinnaga risti, 0 = püsti, vahepeal mis iganes.
- **Kalle ette**: kraadid lõike suunas, nii et kuuli seisev keskpunkt ei ole see, mis lõikab.
- **Suurim kallak**: tööriist ei kallu kunagi sellest kaugemale seadistuse teljest.

Kohas, kus varras puudutaks mudelit, lõigatakse kallutus tagasi, kuni see on vaba, ja toiming ütleb, mitmes punktis. Iga läbik sisenetakse ja väljutakse sirge tõstmisega.

## Pöörlev viimistlus (4. telg)

{{ui:Pöörlev}} on detaili jaoks, mida hoitakse **töö X-i** järgi pöörleval teljel. Detail pöördub ja kuulotsaga frees, mis on alati telge suunatud, järgib selle pinda:

- **Läbikäigud**: {{ui:Piki telge}} (jooned X-i suunas, üks sammu pööre vahe) või {{ui:Ümber detaili}} (rõngad, üks sammu X-i vahe).
- **Telg Y / Z juures**: kus telg on. Tühi tähendab toorikut keskel. Lauamasinal ilma TCP-ta peab see olema pöörlemiskese seadistuses; toiming hoiatab, kui ei ole.
- **Alates / kuni X** ja **Alates / kuni nurk**: detaili osa pikkusest ja pöördest, mida lõigata.

Kuuli kõrgus telje kohal igas punktis on sfääri täpne langus detaili võrgule sellest küljest.

## Piirangud

- 5-telje ja pöörleva viimistluse jaoks võetakse ainult **kuulotsaga frees**. Puudub külgfreesimine (tööriista külg kaldseinal), puuduvad voolujooned piki pinna enda suundi, puudub mitmeteljeline jämedus ja puudub automaatne kalde valik kokkupõrke vältimiseks.
- 5-telje ja pöörlevaid teid **ei käivitata toorikusimulatsioonis**, mis on kõrgusekaart ja ei suuda hoida kallutatud lõiget.
- Varrast kontrollitakse 5-teljelises viimistluses mudelit ülevalt vaadates; hoidikut, spindlit ja masinat ennast ei kontrollita kusagil.
- Pöörlev viimistlus lõikab ainult seda, mida tööriist näeb telge vaadates.
- 5-teljeline viimistlus võtab suurel detailil minuti või rohkem arvutamiseks: varda kontrollitakse igas läbiku punktis.
- Kui pöörlevad teljed liiguvad lineaarsetega ja TCP on väljas, kirjutavad sisseehitatud postprotsessorid edasiandmise pöördvõrdelise ajana (`G93`) ja naasevad seejärel `G94`-le.
- Kallutatud töötasandi koode (`G68.2` ja sarnaseid) ei kirjutata ning masinaspetsiifilisi piiranguid, lahtikeerdumist ega kokkupõrkevööndeid ei ole teada.
