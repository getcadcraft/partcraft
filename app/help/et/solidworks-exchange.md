---
title: Detailide viimine teistesse detailimodelleerijatesse ja sealt tagasi
summary: Saada detail teise detailimodelleerijasse makrona, mis ehitab selle uuesti elava funktsioonipuuga. Nimega STEP ja teise detailimodelleerija kirjutatud funktsioonide loendi avamine ei ole selles versioonis veel loodud.
keywords: makro, pole veel loodud, swb, vba, funktsioonipuu, edasi-tagasi, eksportimise makro, cadcraft-sw.json, nimega step, ap214, globaalsed muutujad, võrrandid, algdetail
from: 97ca61da
---

PartCraft vahetab detaile SolidWorksiga mõlemas suunas, ilma failivormingut, mida keegi teine ei loe:

- **Välja:** makro (`.swb`, lihttekst), mille SolidWorks käivitab ja mis ehitab detaili ise, funktsioon-funktsiooni kaupa, koos visanditega, seostega, mõõtudega, globaalsete muutujate ja võrranditega. Saad algdetaili elava funktsioonipuuga, mitte surnud tahkise.
- **Tagasi:** makro, mille käivitad SolidWorksis, kirjutab detaili funktsioonid ja võrrandid faili `.cadcraft-sw.json`. Selle faili avamine PartCraft-is ei ole selles versioonis veel loodud (vajab täpset tuuma).

:::warning
Seda pole veel SolidWorksis testitud. SolidWorks töötab ainult Windowsis litsentsiga ja PartCraft pole neid makroseid selles kunagi käivitanud. Makrod on kirjutatud SolidWorksi API dokumentatsiooni järgi ja kontrollitud siin ainult struktuuri poolest. Oled oodatud probleemidest teada andma; makro kirjutatud logi ütleb, milline samm ebaõnnestus.
:::

PartCraft ei saa kirjutada `.sldprt` faili: see vorming on suletud. Makro on viis saada algdetail.

## Saada detail makrona

1. Ava detail.
2. Vali {{ui:Ekspordi}}, seejärel {{ui:Makro SolidWorksile (.swb)}}. PartCraft laadib alla `<part>.swb`; olekuriba ütleb, et see kirjutati „ilma täpse tuumata“.
3. Dialoog ütleb, mitu funktsiooni, globaalset muutujat ja võrrandit makro ehitab, ning loetleb kõik, mis jäeti välja. Selle kõrvale ei tule selles versioonis STEP-faili: kui seda vajad, vali {{ui:Ekspordi}}, seejärel {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}.
4. SolidWorksis vali **Tools > Macro > Run**, vali `.swb` fail ja oota. See loob uue detaili sinu vaikedetailimallist, seab millimeetrid ja ehitab iga funktsiooni.
5. Lõpus ütleb teade, mitu sammu tehti, mitu ebaõnnestus ja mitu sobitus PartCraft-i kehaga. Täielik logi `<part> macro log.txt` kirjutatakse makro kõrvale.

Mida makro ehitab:

| PartCraft | Uues detailis |
|---|---|
| Visand tasandil Eesmine, Ülemine või Parem | Visand sellel tasandil koos oma joonte, kaarte, ringjoonte, punktide, seoste ja mõõtudega (nimetatud nagu PartCraft-is, näiteks `k7`) |
| Visand tahul | Visand samal tahul, valitud punkti järgi |
| Visand fikseeritud tasandil | Referentstasand kolme punkti kaudu ja visand sellel |
| Ekstrudeerimine, lõikamine (sügavusega, läbi kõige, keskmisel tasandil, kahes suunas, kaldega) | Boss-extrude või cut-extrude |
| Pööramine, pööratud lõige | Pööramine sama keskjoone ümber |
| Auk (lihtne, võrdlaud, loendus, keermestatud) | Üks või kaks lõiget oma visanditega (keermestatud auk on selle puurimisava; keermet ei ole) |
| Lineaarne ja ringmuster, peegeldus | Lineaarne muster, ringmuster, peegeldus (funktsioonid või keha) |
| Ümardus, faas, kest | Ümardus, faas ja kest samadel servadel ja tahkudel, valitud punktide järgi |
| Parameetrid ja võrrandid | Globaalsed muutujad ja võrrandid ümbernimetatud mõõtudel |
| Välja lülitatud funktsioonid, tagasirullimise riba | Välja lülitatud samamoodi; tagasirullimise riba samas kohas |

Iga tahkisfunktsiooni järel võrdleb makro keha mahtu ja suurust PartCraft-i omaga. Kui need erinevad, pöörab makro selle funktsiooni suuna korra ringi ja kontrollib uuesti; kui see ei ole parem, pöörab tagasi ja kirjutab logisse „Check“.

### Mis jäetakse välja

Dialoog ja makro algus loetlevad kõik, mida ei viida üle, koos põhjusega. Praegu on see: imporditud tahkised (sisesta STEP selle asemel), pühkimised, loftid, tõmbed, referentstelgad ja -punktid, lõpptingimused „kuni“, ainult osa kontuuride ekstrudeerimine ja kõik, mis neist sõltub. Splainid muutuvad läbivate punktide kaudu kõverateks. Selles versioonis pole täpset tuuma, seega jäetakse välja ka visandid tahkudel ja funktsioonid, mis valivad servi või tahke.

## Saada nimega STEP

Selles versioonis pole veel loodud: {{ui:STEP SolidWorksile (nimega, AP214)}} vajab täpset tuuma ja selle valimine ütleb: „STEP SolidWorksile: pole veel loodud. …“. Täpse tuumaga kannab fail detaili nime, millimeetreid ja detaili värvi ning seab Y püsti, nagu SolidWorks detaile näitab (tavaline {{ui:STEP AP214 (täpne tahkis)}} eksport seab Z püsti). Täpitähed kaotavad nimes täpid ja muud märgid väljaspool lihtsat ASCII-d muutuvad `_`-ks.

## Too detail tagasi

Faili avamine PartCraft-is (samm 3) ei ole selles versioonis veel loodud: rakendus ütleb „SolidWorksi ekspordi avamine: pole veel loodud. …“. CadCraft-i joonistusrakendus avab faili siiski ja võtab selle visandid.

1. Vali {{ui:Fail}} > {{ui:Ekspordi}} > {{ui:Ekspordi makro detailide tagasitoomiseks (.swb)}}, et laadida alla `CadCraftExport.swb` ja asetada see oma detailide kõrvale.
2. SolidWorksis ava detail, vali **Tools > Macro > Run** ja vali `CadCraftExport.swb`. See kirjutab detaili kõrvale faili `<part>.cadcraft-sw.json` ega muuda detaili ise.
3. PartCraft-is vali {{ui:Ava}} ja vali see fail või lohista see 3D-vaatele.
4. Täpse tuumaga ehitab PartCraft detaili funktsioonhaaval uuesti ja näitab, mida tegi: näiteks „5 funktsioonist 5 viidi üle SolidWorksist (Flange.SLDPRT)“, iga funktsiooni, mida ei saanud üle viia („Ei viidud üle: Sweep1 (Sweep).“), ja kas maht vastab sellele, mille SolidWorks kirjutas.
5. Salvesta see PartCraft-i detailina käsuga {{ui:Salvesta}}.

Visandid asetatakse baastasandile, kui nad sellel asuvad, detaili vastavale lamedale tahule, kui see on olemas (nii järgivad need hilisemaid muudatusi), ja muidu fikseeritud tasandile. Ümardustes, faasides ja kestades olevad servad ja tahud leitakse punktide järgi ning hoitakse nimega viidetena. Globaalsed muutujad muutuvad parameetriteks (tühikuga nimed saavad alakriipsud: „Bolt count“ muutub `Bolt_count`-iks) ja võrrandid muutuvad võrranditeks samadel mõõtudel. Midagi ei oletata: see, millel vastet pole, on loetletud.

CadCraft-i joonistusrakendus avab sama faili ja võtab selle visandid.

:::note
Vorming on `cadcraft-sw-export` versioon 1: lihtne JSON millimeetrites ja kraadides. Uuema makro fail või vigane fail keeldutakse koos põhjusega.
:::
