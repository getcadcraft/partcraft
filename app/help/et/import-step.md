---
title: STEP-faili avamine ja sellel edasi ehitamine
summary: Too tarnija või teise CAD-programmi STEP-mudel PartCraftis tahke kehana uue detailina või olemasoleva juurde lisatuna, määra, millises suunas on üleval, ning lisa sellele visandeid ja elemente.
keywords: step, stp, import, ava step, ap203, ap214, ap242, tarnijamudel, lihtne tahke, imporditud tahke, ülesuunaline telg, z üles, y üles, kolmnurgad, tahkudeks jaotatud, koost step
from: ca0eca5f
---

PartCraft avab STEP-failid (`.step` või `.stp`, AP203, AP214 ja AP242) **tahke kehana**, millele saab visandada, lõigata, puurida ja kombineerida oma elemente. Kehal endal pole oma ajalugu: sa ei saa muuta mõõtmeid, millega see tehti, vaid saad ainult lisada või sellest lõigata.

Selles versioonis luuakse iga detail võrgumootoriga, seega **loetakse STEP-fail kolmnurkadena**: tasased tahud jäävad tasasteks, kõverad tahud (silindrid, koonused, sfäärid, toroidid, B-spline-pinnad) muutuvad paljudeks väikesteks tasasteks. Selle maht jääb täpsest väärtusest murdosa protsendi piiresse. Kõverate tahkude täpseks hoidmiseks on vaja täpset tuuma, mida selles versioonis ei ole.

## STEP-faili avamine

1. Vali {{ui:Ava}} või vajuta {{key:Mod+O}} ja vali `.step`- või `.stp`-fail. Või lohista see 3D-vaatesse.
2. PartCraft loeb faili ja näitab, mida leidis, näiteks: „AP214 fail: 1 keha, 10 tahku, loetud kolmnurkadena.“ Allpool on kolmnurkade arv, kõik, mis tuli välja jätta või ühendada, ning see, kas tulemus on suletud.
3. Kontrolli **Üles failis** väärtust. STEP-fail ütleb oma ühiku (millimeetrid, tollid, meetrid…); PartCraft teisendab selle millimeetriteks, seega näitab **Ühikud failis** väärtust Millimeetrid, „fail nii ütleb“. **Suurus siin** näitab, kui suur see tuleb.
4. Vali {{ui:Ava kehana}} tühja detaili jaoks või {{ui:Lisa sellele detailile}} / {{ui:Uus detail}}, kui detailil on juba elemendid. Lisamisel küsitakse, mida **Kasuta seda** teha: lisada, lõigata või hoida alles ainult kattuv osa.

Ajaloos ilmub element **Imported1** ja olekuriba ütleb näiteks: „plate.step on tahke keha: 57995.937 mm³, 6 tasast tahku, millele visandada.“

## Koost STEP-failina

Koost tuleb sisse ühe kehana, kus iga detail on seal, kuhu fail selle paigutab („3 failis paigutatud detaili tulevad sisse seal, kus nad seisavad“). Kaks korda kasutatud detail tuleb sisse kaks korda. Detailide nimed ja koostupuu ei säili.

## Määra, millises suunas on üleval

Enamik CAD-programme kasutab Z-suunda üleval; PartCraft kasutab Y-suunda üleval. Vaikimisi pöörab PartCraft faili nii, et selle Z osutab siin üles. Kui detail jõuab külili, vali **Imported1** ja määra **Üles failis** väärtuseks **Y üles**. **Ühikud failis** ja **Kasuta seda** saab seal samuti muuta; iga muudatus on üks tagasivõtmise samm.

## Ehitamine edasi

- Klõpsa keha lamedal tahul ja vali {{ui:Visand sellel tahul}}. STEP-mudeli lamedad tahud säilitavad oma koha, kui keha uuesti ehitatakse.
- Lisa lõikeid, auke, ülendeid, mustreid ja peegeldusi nagu igal detailil.
- Kontrolli suurust kastis **Detail**: maht, pindala, mõõtmed.

Ümardusi, faase ja kestasid vajab täpset tuuma, nagu igal detailil selles versioonis ([Võrgutuum](topic:solid-kernels)).

## Kus see hoitakse

Kolmnurgad salvestatakse `.partcraft.json`-faili **sisse**, nii et detailifail on iseseisev: STEP-faili pole enam vaja.

## Teated

| Teade | Mida see tähendab |
|---|---|
| „part.stp“ ei ole STEP-fail (ta ei alga reaga ISO-10303-21). | Fail ei ole tavaline STEP-tekst. Küsi saatjalt AP203-, AP214- või AP242-STEP-fail |
| „STEP-faili ei saanud lugeda: selle andmeosa puudub või on kahjustatud.“ | Fail on katkine või kahjustatud. Kopeeri see uuesti |
| „STEP-failis ei ole tahket ega pinnakeha: sisse tuua pole midagi.“ | Fail sisaldab ainult jooniseid, punkte või andmeid. Küsi tahket keha |
| „See STEP-fail on siin importimiseks liiga suur (üle 60 MB).“ ja lugeja muud piirangud (kirjed, tahud, kolmnurgad) | Lihtsusta mudelit allikas või saada detailid ükshaaval |
| „… faili kahjustatud read jäeti vahele.“ | Mõned read ei saanud lugeda; ülejäänud tulid sisse. Kontrolli keha |
| „… tahke ei saanud muuta kolmnurkadeks ja need jäeti välja.“ | Need tahud jätavad augud, mida PartCraft proovib täita; kui keha ei sulgu, ei lisata seda |
| „… sellist tüüpi tahud, mida ei loeta (…), jäeti vahele.“ | Harv pinnatüüp. Küsi mudelit lihtsate või B-spline-pindadega |
| „See ei sulgu …“ | Tahud ei moodusta suletud tahket keha (pindmudel või puuduvad tahud). PartCraft näitab avausi ja ei lisa midagi |

## Piirangud

- Kõverad tahud joonistatakse ja mõõdetakse lamedate tahkudena, nagu kõik selles versioonis ehitatud detailid. PartCraft säilitab faili enda lamedad tahud, silindrid, koonused, sfäärid ja toroidid koos kehaga, seega {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab need tagasi tõeliste pindadena, augud aukudena, koos sinu lisatud elementidega. Faili poolt splainidena, pühkimispindadena või pöördepindadena antud tahud jäävad eksportis tahkudeks. Enne versiooni 0.9.1 salvestatud detailil säilitatud pindu ei ole: ava STEP-fail uuesti, et need saada.
- {{ui:Ekspordi}} › {{ui:DXF visandist või lamedast tahust}} koos valitud lameda tahuga kirjutab faili ümmarguse augu tõelise ringina.
- Värve, kehade nimesid, koostestruktuuri ja PMI-d (faili tolerantse) ei loeta.
- Lisaks STEP-ile avab PartCraft STL-, OBJ- ja 3MF-võrgud ([STL-, OBJ- või 3MF-faili avamine](topic:open-meshes)) ning `.3dm`-failid ([.3dm-mudeli avamine](topic:open-3dm-files)) tahkete kehadena. IGES-i ja teiste programmide omafaile ei toetata.
- Detail, mille STEP-keha on imporditud ehitusega, millel oli täpne tuum, säilitab STEP-teksti; see versioon jätab selle elemendi vahele („pole ehitatud“). Ava STEP-fail uuesti, et tuua see sisse kolmnurkadena.
