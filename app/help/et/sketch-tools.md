---
title: Splainid, lõikamine, nihutamine ja muud visandi tööriistad
summary: Joonista punkt-läbivaid ja juhtpunktidega splaine, lõika ja pikenda kõveraid, nihuta ahelat, peegelda keskjoone suhtes, lisa hulknurki ja pesi, mustrita visandi geomeetriat ning projekteeri mudeli servi.
keywords: splain, punkt-splain, juhtpunkt, b-splain, nurbs, kõver, lõika, pikenda, nihuta, peegelda, sümmeetriline, hulknurk, kuusnurk, pesa, muster, lineaarne muster, ringmuster, projekteeri, projekteeri serv, kaasa, teisenda üksused
from: 3ecb166a
---

Need tööriistad töötavad avatud visandis. {{ui:Splain}} ja {{ui:Lõika}} on tööriistaribal. Teised asuvad jaotises {{ui:Veel}} visandi tööriistade lõpus. Iga tööriist on üks tagasivõtmise samm ja {{key:Esc}} peatab selle. Põhilised joonistustööriistad: vaata [Esimese visandi joonistamine](topic:sketch-basics).

## Splainid

Splain on sujuv kõver. On kahte liiki.

| Tööriist | Klahv | Kuidas joonistada |
|---|---|---|
| {{ui:Splain}} | {{key:B}} | Klõpsa punktid, mida kõver läbib. Lõpeta klahviga {{key:Enter}}, {{key:Esc}}, paremklõpsuga või topeltklõpsuga. Sulge splain, klõpsates uuesti esimest punkti |
| {{ui:Juhtpunktidega splain}} (jaotises {{ui:Veel}}) | | Klõpsa juhtpunktid. Kõver tõmbub nende poole, kuid puudutab ainult esimest ja viimast. Katkendlik juhtpolügon on näha joonistamise ajal ja pärast seda |

- **Punktid on visandi punktid.** Lohista neid või anna neile seoseid ja mõõte nagu igale teisele punktile. Splaini esimene punkt võib haakuda joone otsa, mis seob need ühtelangevuse seosega.
- **Puutuja otsas.** Vali joon, kaar või splain, mis kohtub splaini ühe otsaga, seejärel splain ja vali {{ui:T Puutuja}}. Splaini otsa suund järgib siis seda joont. Puutuja splaini otstest eemal keeldutakse: „Splaini puutuja vajab joont, kaart või splaini, mis kohtub selle ühe otsaga.“
- **Otsad.** Ilma puutujaseoseta on punkt-läbiva splaini otsad loomulikud (otsas ei ole kõverust). Kõver on kuupkõver ja läbib iga punkti, kusjuures vahed määravad punktide vahelised kaugused.
- **Suletud splainid** moodustavad profiili iseseisvalt. Avatud splainid ühendavad jooned ja kaared suletud ahelaks nagu iga teine kõver.
- Splaini sees oleva punkti kustutamine eemaldab selle punkti ja jätab splaini alles, kuni sellel on vähemalt kaks punkti (suletuna kolm).

Ekstrudeerimine ja pööramine ehitavad splaini võrgusilma tuumaga lühikestest sirgetest lõikudest (tõelised kõverad vajavad täpset tuuma, mida selles versioonis veel pole). DXF-eksport kirjutab splaini polyjoonena, mis jääb kõverast 0,01 mm piiresse, sest DXF R12-l ei ole splaini objekti.

## Lõikamine ja pikendamine

| Tööriist | Klahv | Kuidas |
|---|---|---|
| {{ui:Lõika}} | {{key:T}} | Osuta kõverale: tükk, mis läheks, on punane kuni lähima ristumiskohani. Klõpsa, et see eemaldada. Kõver, mis ei lõiku millegagi, eemaldatakse tervikuna |
| {{ui:Pikenda}} (jaotises {{ui:Veel}}) | {{key:E}} | Klõpsa joont või kaart otsa lähedal, et pikendada. See kasvab kuni järgmise kõverani, mida kohtab. Kui teel ei ole midagi, teatab olekuriba, et selle otsa jaoks pole kuhugi jõuda |

{{ui:Lõika}} ja {{ui:Pikenda}} töötavad joontel, kaartel, ringjoontel ja splainidel ({{ui:Pikenda}}: ainult joontel ja kaartel).

- Lõigatud **ringjoon** muutub kaareks. Selle raadiuse või läbimõõdu mõõt liigub kaarele.
- Joone keskosa lõikamine jätab kaks joont, mis jäävad samale sirgele. Kaare keskosa lõikamine jätab kaks kaart samade keskpunktidega ja võrdsusseosega.
- Lõigatud **splain** muutub juhtpunktidega splainiks, mis järgib vana kõverat täpselt. Säilinud otsas olev puutujaseos jääb alles.
- Uus ots asetatakse kõvera peale, mis selle lõikas (joonele, kaarele või ringjoonele, või ühtelangevalt selle otsaga). Splainid ei saa punkti hoida, seega lõikav splain ei lisa seost.

**Seosed, mis enam ei sobi, eemaldatakse** ja olekuriba ütleb, mitu. Näiteks lõigatud joone pikkuse mõõt eemaldatakse, kuid horisontaalsed või paralleelsed seosed jäävad alles.

## Nihutamine

1. Vali jaotisest {{ui:Veel}} {{ui:Nihuta}} või vajuta {{key:O}}.
2. Klõpsa joont, kaart, ringjoont või splaini. Kogu selle ahel tõstetakse esile: kõik otsast otsa ühendatud kõverad kuni punktini, kus kohtub kolm või enam. Et nihutada ainult osa ahelast, vali esmalt need kõverad, seejärel vali {{ui:Nihuta}} ja klõpsa ühte neist.
3. Liiguta osuti sinna poole, kuhu koopia läheb. Katkendlik eelvaade liigub kaasa. Vajuta {{key:B}}, et mõlemad pooled.
4. Klõpsa, sisesta kaugus ja vajuta {{key:Enter}}.

Jooni ja kaari nihutatakse täpselt. Nurki pikendatakse või lõigatakse, kuni nad kohtuvad. Koopial on üks **Nihuta** mõõt ja teised tükid järgivad seda: topeltklõpsa mõõdul, et muuta kogu koopiat. Ahela jaoks liiga suur kaugus keeldutakse, näiteks: „See kaugus on selle ahela jaoks liiga suur: külg pöörduks pahupidi.“

**Splain** nihutatakse uue punkt-läbiva splainiga 0,001 mm täpsusega tõelisest nihkest. See koopia on fikseeritud: see ei järgi hilisemaid muudatusi ja sellel ei ole nihkemõõtu. Ahelas olev splain vajab oma otstes sujuvaid (puutuvaid) liitekohti.

## Peegeldus

1. Vali valimistööriistaga, mida peegeldada.
2. Vali jaotisest {{ui:Veel}} {{ui:Peegeldus}} või vajuta {{key:M}}.
3. Klõpsa joont või telgjoont, mille suhtes peegeldada.

Iga peegeldatud punkt saab originaaliga **Sümmeetrilise** seose, nii et koopia järgib, kui originaal muutub. Peegeljoonel olevad punktid on jagatud ja peegeldatud ringjoontel on Võrdsuse seos. Kui midagi ei olnud valitud, klõpsa peegeldatavaid esemeid, vajuta {{key:Enter}} ja seejärel klõpsa peegeljoont.

## Hulknurgad ja pesad

| Tööriist | Kuidas |
|---|---|
| {{ui:Hulknurk}} | Klõpsa keskpunkt, seejärel nurk, seejärel sisesta külgede arv (3 kuni 64). Küljed on võrdsed ja nurgad asuvad konstruktsiooniringjoonel. Mõõda ringjoont, et hulknurk saaks suuruse |
| {{ui:Pesa}} | Klõpsa ühe otsa keskpunkt, seejärel teise otsa keskpunkt, seejärel klõpsa laiuse määramiseks. Kaks joont, puutuvad kahele võrdsele poolringile |

## Visandi mustrid

Vali esmalt geomeetria, seejärel:

- {{ui:Lineaarne muster}}: klõpsa alguspunkt, seejärel koht, kuhu esimene koopia läheb, seejärel sisesta koopiate arv (sealhulgas originaal).
- {{ui:Ringmuster}}: klõpsa keskpunkt, seejärel sisesta koopiate arv, jaotatuna ühtlaselt täisringile.

Koopiad toovad kaasa valitud geomeetria vahelised seosed (ringmuster jätab välja horisontaalsed ja vertikaalsed). Koopiad ei ole originaaliga seotud: muuda ühte ja teised jäävad samaks.

## Detaili servade projekteerimine

1. Vali jaotisest {{ui:Veel}} {{ui:Projekteeri serv}}.
2. Klõpsa visandi taga oleva detaili sirget või ringjoonelist serva.

Serv kopeeritakse täpselt visandi tasandile ja fikseeritakse ({{ui:⚓ Lukusta}} seos). See ei järgi hilisemaid detaili muudatusi. Vajuta {{key:Q}}, et sellest saaks konstruktsioonigeomeetria. Visandi tasandi suhtes kallutatud ringjoon projekteeruks ellipsiks, seega seda keeldutakse. Nii on ka vabakujulised servad ja servad, mis osutavad otse visandist välja. Projekteerimine vajab täpset tuuma, mida selles versioonis veel pole.
