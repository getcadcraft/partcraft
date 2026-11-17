---
title: Ekspordi printimiseks, STEP ja DXF
summary: Ekspordi detail 3D-printimiseks STL-ina või 3MF-ina, täpse STEP-tahkisena teistele CAD- ja CAM-programmidele ning visand või lame tahk DXF-ina laser- ja veejet-lõikamiseks.
keywords: eksport, salvesta nimega, ifc, bim, omaduste kogumid, stl, 3mf, 3D-printimine, viilutaja, step, stp, täpne step, b-rep, ap242, ap214, cam, masinatöökoda, freespingi, dxf, laser, veejet, cnc, lame lõikemuster, profiil, võrk, tahkudeks jaotatud
from: e1de71d5
---

Eksportfailid on koopiad teistes vormingutes. Alles jäta ka `.partcraft.json` fail: see on ainus fail, mida PartCraft saab uuesti avada ja muuta.

Kõik eksportid töötavad ekraanil oleval detailil, millimeetrites. Koostes eksportivad STL, 3MF, STEP ja {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}} terve koosta: vaata [Detailide loend, lahtivõetud vaated ja liikuvad osad](topic:assembly-bom-explode). Kui tahket veel pole: "Eksportimiseks pole veel tahket."

## Printimiseks 3D-printerile: STL või 3MF

1. Valikuline: sujuvate ümarate pindade jaoks klõpsa tühjal alal, et midagi poleks valitud, ja sea paremas paneelis **Kõverad** väärtuseks **Peen (128 pöörde kohta)** või **Väga peen (256 pöörde kohta)**. STL ja 3MF koosnevad alati kolmnurkadest.
2. Vali {{ui:Ekspordi}}, seejärel {{ui:STL, 3D-printimiseks}} või {{ui:3MF, 3D-printimiseks}}.
3. Fail laaditakse alla. Olekuriba ütleb näiteks: "Eksporditud Part1.stl (binaarne, mm, Z üles, 1536 kolmnurka)."

Mõlemad vormingud on **Z üles**, nagu printerid ja viilutajad ootavad. PartCrafti oma ruum on Y üles, seega eksport pöörab detaili: see, mis PartCraftis osutab üles (on risti ülemise tasandiga), osutab üles ka viilutajas ning ülemisel tasandil visandatud detail lebab printimisalusel lamedalt. Vajadusel sea lõplik asend viilutajas.

3MF on uuem ja väiksem vorming, mida viilutajad loevad koos mõõtühikuga. Kui programm 3MF-i ei võta, kasuta STL-i.

Enne printimist kontrolli, kas detail on suletud, mahub printeri alusele ja seisab lamedal tahul: vali {{ui:Ekspordi}} › {{ui:Kontrolli 3D-printimiseks (STL või 3MF)…}}, vt [Valmista detail 3D-printimiseks](topic:print-3d).

## Teistele CAD-programmidele: STEP

Vali {{ui:Ekspordi}}, seejärel {{ui:STEP AP242 (täpne tahke)}}. See kirjutab detaili ühe täpse tahkisena millimeetrites, pööratuna Z üles. Ümarad tahud kirjutatakse tõeliste silindrite, koonuste, sfääride ja toruste kujul ning nende servad tõeliste ringidena, nii et teine programm saab augu märkida august. STEP-failist avatud keha säilitab selle faili lamedad tahud, silindrid, koonused, sfäärid ja torused, seega need lähevad välja samuti täpsetena. Tahud, millel pole sellist pinda (splain-serv, modelleeritud keere, STL-, OBJ- või 3MF-võrgust pärit keha, STEP-faili splain-tahud, pühitud ja pööratud tahud), jäävad samasse tahkisse lamedate fassettidena, ja olekuriba ütleb, mitu neid on. Olekuriba ütleb näiteks: "Eksporditud Flange.step (AP242, täpne tahke, mm, Z üles): 14 tahku oma tõelistel pindadel (10 silindrilist, 1 koonilist, 0 sfäärilist, 0 toroidset), 0 sobitatud servakõverat." Fail sisaldab ainult tahkist: ei ajalugu, visandeid ega jooniseid. Kui teine programm loeb ainult AP214-d, vali {{ui:STEP AP214 (täpne tahke)}}: sama tahke selles vanemas skeemis.

Mis on täpne ja mis mitte:

- Lamedad tahud, silindrid (augud, kühmud, ümardused sirgetel servadel), koonused (vastuaugud, kitsenemised), sfäärid ja torused on täpsed, samuti nende sirged, ringjad ja elliptilised servad. **Kõverad** seade neid ei muuda.
- Kui kaks ümarat tahku ristuvad (võlli läbi puuritud auk), on serv sile kõver, mis on sobitatud mõlema pinnaga täpsusega 0.00001 mm; "sobitatud servakõverad" loeb need.
- Detaili sees olev suletud õõnsus kirjutatakse tahkise tühimikuna. Mitu eraldi keha kirjutatakse mitme tahkisena.
- Koostu ei kirjutata veel täpse STEP-ina: ekspordi iga detail eraldi.

See on kontrollitud, lugedes faile tagasi OpenCascade'iga, mis teatab kehtivatest tahkistest, mille mahud on käsitsi välja arvutatud. Seda pole veel avatud igas CAD- ega CAM-programmis; kui mõni programm keeldub failist, kirjutab {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}} sama kuju lamedate tahkudena (PartCrafti enda telgedes, Y üles). Palun teata sellest {{ui:Abi}} › {{ui:Teata probleemist}} kaudu.

Freespingiks kirjutab ka tootmise tööruum täpse tahkise seadistuse enda töökoordinaatides: vt [Tee tööradu ja G-kood](topic:manufacture#exact-step-for-the-shop).

## BIM-programmidele: IFC koos kõigi omadustega

Vali {{ui:Ekspordi}}, seejärel {{ui:IFC 4 (koos kõigi omadustega)}}. See kirjutab detaili IFC 4 elemendina hoone- ja tehnosüsteemide mudelitele, kuju kolmnurkadena (Z üles, millimeetrites), ning PartCrafti teadaolevad andmed omaduste kogumitena:

| Omaduste kogum | Sisaldab |
|---|---|
| **PartCraft_Part** | Nimi, materjal ja selle tihedus, aktiivne konfiguratsioon, kehade arv; koostes ka detaili number ja kirjeldus |
| **PartCraft_Parameters** | Iga detaili parameeter koos väärtusega; valemi avaldis ja märkus on omaduse kirjelduses |
| **PartCraft_TitleBlock** | Joonise pealdisploki väljad, mille sa täitsid (pealkiri, joonise number, redaktsioon, ettevõte, koostas, kontrollis ja kinnitas, kuupäev, viimistlus, üldine tolerants), ja lehe suurus |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Maht, pindala, mass (koos materjaliga) ja üldmõõtmed |

Materjal lisatakse IFC-materjalina ja joonise number on elemendi silt. Koostes kirjutatakse iga detail korra tüübina koos oma omadustega ning iga koopia asetatakse sinna, kuhu koost ta paigutab, oma väärtustega omaduste kogumis **PartCraft_Instance**: tema nimi, materjalide loendi positsiooninumber ja see, kas ta on aluse detail.

## Laseri-, veejet- või CNC-profiilidele: DXF

Kaks DXF-tüüpi, mõlemad versioonis R12, mida avab iga CAD- ja CAM-programm:

### Visand

1. Vali visand ajaloos (või ole see avatud).
2. Vali {{ui:Ekspordi}}, seejärel {{ui:DXF visandist või lamedast tahust}}. (Visandi paremas paneelis on ka {{ui:Ekspordi DXF-ina}}.)

Saad faili `<part> - <sketch>.dxf` visandi enda koordinaatides: jooned, tõelised kaared ja ringid kihil **PROFILE**, konstruktsioonigeomeetria kihil **CONSTRUCTION**, vabad punktid kihil **POINTS**.

### Detaili lame tahk

1. Klõpsa vaates lamedat tahku (näiteks augudega plaadi ülemist pinda).
2. Vali paremas paneelis {{ui:Ekspordi tahk DXF-ina}} või {{ui:Ekspordi}}, seejärel {{ui:DXF visandist või lamedast tahust}}.

Saad faili `<part> - face.dxf`: tahu äärejoone ja kõik selles olevad augud. Ümmargune auk (terve ring, kus silinder kohtub tahuga: puuritud auk või avatud STEP-faili auk) kirjutatakse tõelise ringina augu oma keskpunkti ja raadiusega. Iga muu äärejoon on suletud polüjoon, ja selle ümarad servad (ümardused, pesad, kaared) on fassetid, seega sea enne **Kõverad** väärtuseks Peen, kui lõikur neid tihedalt järgib. Olekuriba ütleb, mitu äärejoont on, mitu neist on tõelised ringid ja tahu pindala.

Kui pole valitud ei visandit ega lamedat tahku: "Ava või vali visand või vali lame tahk, et DXF eksportida."

## Joonis

PDF-joonisel on oma juhend: [Koosta joonisleht](topic:drawing-pdf).

## Vormingud, mida pole saadaval

glTF, OBJ, IGES ja Parasolid selles versioonis ei eksportita. DWG kirjutab ainult [variandipakk](topic:variant-pack), joonislehena. Vt [Failivormingud](topic:file-formats).
