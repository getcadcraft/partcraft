---
title: Soojus, termiline pinge ja nõtkumine
summary: Leia detaili temperatuurid fikseeritud temperatuuride, soojusvoo, soojusvõimsuse, konvektsiooni ja kiirguse abil (püsivalt või ajas), koorma staatilise pingeanalüüsi temperatuuritõusuga ja leia koorma, mille juures saled detail nõtkub, koos sellega, mida iga meetod võib ja ei saa öelda.
keywords: termiline, soojusülekanne, soojus, temperatuur, juhtivus, konvektsioon, soojusülekandetegur, kiirgus, emissioonitegur, soojusvoog, soojusvõimsus, soojuse tekitamine, soojusneelaja, üleminek, aeg, jahtumine, soojenemine, Crank-Nicolson, implitsiitne Euler, soojusbilanss, termiline pinge, termiline pinge ajas, ülemineku termiline pinge, karastamine, termiline šokk, pingeajalugu, halvim aeg, soojuspaisumine, paisumistegur, nõtkumine, Euleri nõtkumine, koormustegur, kriitiline koormus, post, sale, omaväärtus
from: 1a1b7545
---

Need uuringud elavad Simulatsiooni töökeskkonnas staatilise pinge ja loodusliku sageduse kõrval (vt [Kontrolli pinget ja läbipainet](topic:simulation)). Vali need paneelil kasti **Tüüp** abil. Need kasutavad sama väikeste kuubikute võrku ja sama materjalide loendit; iga teegi materjalil on soojusjuhtivus, erisoojus ja paisumistegur (tüüpilised tabeliväärtused, näidatud jaotises **Omadused**).

## Soojus: kuhu soojus läheb?

1. Vali **Tüüp**-ks **Soojus (soojusülekanne)**.
2. Lisa soojustingimused paneeli **Lisa** loendist, siis klõpsa nende tahke (nagu toetuste ja koormuste puhul):
   - **Fikseeritud temperatuur**: tahk hoitakse temperatuuril, °C-des.
   - **Soojusvoog**: W/m², mis voolab tahku (negatiivne väljub). See mõjub tahu tegelikule pinnale, ka seal, kus kuubikud moodustavad treppe.
   - **Soojusvõimsus**: koguväärtus vattides, jagatakse valitud tahkude vahel pindala järgi. Kasuta seda kütteseadme või teatud võimsusega kiibi puhul.
   - **Konvektsioon**: õhk või vedelik temperatuuril viib soojust ära h W/(m²·K) järgi. Tüüpilised h: vaikne õhk 5–10, ventilaator 25–100, vesi 500–10,000. PartCraft ei arvuta h-d: selles uuringus ei ole vedeliku voolu.
   - **Kiirgus**: tahk kiirgab ümbrusele temperatuuril, emissioonitegur 0 kuni 1. See on **lineariseeritud** (kiirgus kirjutatakse koefitsiendina, mis sõltub temperatuurist ja lahendatakse uuesti, kuni see stabiliseerub) ja läheb ainult ümbrusesse: tahud ei vaheta omavahel soojust.
3. **Soojuse tekitamine** (W/m³) soojendab kogu detaili seest, näiteks takistuslikku detaili.
4. Vajuta **Lahenda**. Detail on värvitud temperatuuri järgi; vali **Soojusvoog** valikust **Näita**, et näha, kuhu soojus voolab. Osuta detailile, et lugeda mõlemat.

Püsiv soojusvoog vajab kohta, kuhu soojus läheb: vähemalt ühte fikseeritud temperatuuri, konvektsiooni või kiirgust. Detail, mis ainult soojust sisse võtab, ei saavuta püsivat olekut; tee see selle asemel üleminekuliseks.

Tabel näitab madalaimat ja kõrgeimat temperatuuri ja kust need on, suurimat soojusvoogu ning **soojusbilanssi**: iga tingimuse sisse või välja minev soojus (fikseeritud temperatuur arvestab, mida peab andma või neelama), tekitatud soojus, sisse ja välja summad ning **lahknevus**. Lahknevus peaks olema väike murdosa sisenevast soojusest; suur lahknevus tähendab, et tulemusele ei saa loota.

### Ajas (üleminek)

Märgi **Üleminek** ja anna **Algtemperatuur** (kogu detail algab sellest), **Ajavahemik** ja **Ajasammude** arv. **Implitsiitne Euler** on vastupidav; **Crank–Nicolson** on sama sammudega täpsem, kuid võib pärast äkilist muutust lainetada. Pärast lahendamist lohista **Aja** liugurit, et näha temperatuure igal hetkel (värviskaala jääb iga hetke jaoks samaks). Soojusbilanss sisaldab siis ka salvestatavat soojust.

## Termiline pinge: mida temperatuurimuutus detailile teeb?

Staatilise pinge (või Nõtkumise) uuringus määra **Termiline koormus**:

- **Ühtlane temperatuurimuutus**: kogu detail soojeneb (või jahtub, negatiivse arvu korral) nii mitme kelvini võrra.
- **Temperatuurid soojustingimustest**: lisa soojustingimused samasse uuringusse; püsivad temperatuurid lahendatakse esmalt samal võrgul, siis detail paisub α·(T − **pingevaba temperatuur**) võrra.
- **Temperatuurid ajas (üleminekuline käik)**: lisa soojustingimused, siis anna **Algtemperatuur**, **Ajavahemik**, **Ajasammud** ja **Ajasammu valik** nagu üleminekulise soojusuuringu puhul. Temperatuurid lahendatakse ajas samal võrgul (kuubikud või tetraeedrid) ja staatiline lahendus iga hetke temperatuuridel annab selle hetke pinge. **Pinge hetkel**:
  - **Halvim aeg** (algus): **Pinge lahendused** jaotuvad ühtlaselt üle käigu, algus kaasa arvatud (21, kui ei muuda, kuni 51). Tulemused avanevad hetkel, mille von Mises'i pinge on suurim; tabel nimetab selle, väike diagramm näitab tippvärvi pinget ajas ja **Aja** liugur näitab pinget igal lahendatud hetkel (värviskaala jääb halvima hetke oma).
  - **Üks valitud aeg**: üks hetk, see ajasamm, mis on kõige lähemal sinu antud **Aeg (s)**-ile. Nõtkumise uuring võtab alati ühe valitud aja (käigu lõpu, kui sa ei määra teist).

Detail, mis on karastatud (kuumast külma sisse kastetud) või äkki kuumutatud, on kõige rohkem pingestatud siis, kui sisemus ja pind kõige rohkem erinevad: sageli kohe alguses. Püsiv temperatuur mõjub esimesest hetkest kui äkiline muutus, nii et pinge algusel sõltub elemendi suurusest (ainult mõni element näeb muutust). Loe seda kui „väga kõrget“ ja vaata liugurilt järgmisi hetki väärtuste jaoks, mida võrk lahendab. Pinge on kvaasistaatiline: inertsi ega äkilisest muutusest tulenevat vibratsiooni ei ole.

Detail, mis saab vabalt paisuda, ei oma termilist pinget: hoia seda ainult nii palju, et ta ei liiguks (näiteks kolm hõõrdevaba tahku täisnurga all). Kui see on kahe seina vahel kinni, surutakse see kokku: 50 K võrra soojendatud terasvarras rigiidsete seinte vahel kannab umbes 117 MPa. Termilised koormused tasakaalustuvad ise, seega reaktsioonid tasakaalustuvad ikka ainult mehaaniliste koormustega.

## Nõtkumine: millal saled detail alla annab?

1. Vali **Tüüp**-ks **Nõtkumine (lineaarne)** ja lisa toed ja koormused nagu staatilise uuringu puhul.
2. Määra **Leitavad koormustegurid** (mitu nõtkumisvormi).
3. Vajuta **Lahenda**. Igal vormil on **koormustegur**: mitu korda sinu koormusi, mille juures ideaalne detail nõtkub. Koormustegur 3 tähendab kolmekordset koormust; **koormustegur alla 1 tähendab, et detail nõtkub sinu rakendatud koormuste all**. Tabel annab ka kogukoormuse igal teguril. Vormi kuju näitab, kuidas see nõtkub (selle suurusel pole tähendust).

**Lineaarne nõtkumine ülehindab tegelikku nõtkumiskoormust.** See eeldab ideaalset detaili: täiesti sirget, jääkpingeta ja elastset. Tegelikel detailidel on väikesed ebatäpsused ja nad võivad enne voolata ning õhukeseseinalised kestad võivad nõtkuda murdosal lineaarsest väärtusest. Kasuta suurt varu ning käsitle õhukese kesta koormustegurit lähedal 3 või sellest madalamal hoiatusena.

## Kui palju sellele usaldada

PartCraft kontrollib neid lahendajaid käsitsi arvutatud valemitega: vardas kahe temperatuuri vahel (täpne), jahutusribi (0.3 K täpsusega), iseend soojendav plaat (täpne), kuubik, mis jahtub ajas (0.1 % täpsusega Crank–Nicolsoniga), varras, mis äkki kuumutatakse ühest otsast, vaba varras, mis soojendatakse (pinget ei ole, ΔL = αLΔT), varras kahe seina vahel (σ = −EαΔT), karastatud plaat ajas klassikalise jadalahendusega võrreldes (1 % täpsusega kuubikutel, 2.1 % tetraeedritel plaadi keskpunktis; 0.5 % pinnal), pika käigu viimane hetk võrreldes püsiva termilise pingega (sama kuni miljondikuni) ja Euleri postid (1 % fikseeritud–vaba, 1.5 % liigendatud–liigendatud). Pea meeles:

- **Konstantsed materjaliväärtused.** Juhtivus, erisoojus ja paisumine ei muutu siin temperatuuriga; mõne sajakraadiga võivad need muutuda 10–30 %. Jäikus ka ei muutu.
- **Pinge ajas on kvaasistaatiline ja elastne**: iga hetk on staatiline lahendus (inertsita) ega ole voolamist, nii et karastus, mis voolaks pinna, näitab selle asemel voolavusest kõrgemat pinget.
- **Konvektsiooni koefitsiendid on sinu sisend**, mitte arvutatud õhu- või vedelikuvoolust.
- **Kontaktitakistust ei ole**: detail on üks tahke.
- **Ainult lineaarne nõtkumine**: ei ole ebatäpsusi, voolamist ega käitumist pärast nõtkumist.
- Kuubikute trepp ja teravad sisenurgad mõjutavad termilisi pingeid samamoodi nagu teisi pingeid (vt [Kontrolli pinget ja läbipainet](topic:simulation)).
- See on labori versioon: kontrolli olulisi detaile mõne muu meetodiga.

## Seotud

- [Kontrolli pinget ja läbipainet (Simulatsioon)](topic:simulation)
- [Mis pole veel valmis](topic:not-built-yet)
