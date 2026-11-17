---
title: Lamedate detailide paigutamine lehtedele
summary: Paiguta lamedad detailid plaatidele või rullile nii vähese jäätmega, nagu PartCraft suudab leida, ning ei kunagi lähemale kui sina määrad. Salvesta paigutus DXF-failina lasermasina, plasmalõikuri, veejoalõikuri või freesi jaoks.
keywords: paigutamine, paigutada, leht, plaat, rull, laser, plasma, veejoa, freesmasin, lõikamine, saagis, materjalikasutus, jäätmed, vahe, lõikelaius, kiudsuund, valtsimissuund, dxf, tasandatud kuju, kontuurid
from: 8dcce1a6
---

**Paigutamine** asetab palju lamedaid detaile lehele nii, et materjali jääb võimalikult vähe üle. PartCraft paigutab detailid ühekaupa, igaüks sinna, kus lehe kasutatud pikkus jääb kõige lühemaks. Ta proovib mitut järjekorda ja pööret mõne sekundiga ning jätab parima. Detailid võivad asuda teiste detailide aukudes ning L- või U-kujulise õõnsuse sees.

## Avamine

- {{ui:Ekspordi}} › {{ui:Paiguta lamedad detailid lehtedele…}} avab selle detaili tasandatud kujuga või koostes iga lehtmetalldetaili tasandatud kujuga, niipalju kordi kui neid koopiatena on.
- Lehtmetalldetailil: {{ui:Tasanda}} ja seejärel {{ui:Paiguta lehtedele…}} tasandatud kuju all.
- {{ui:Lisa kontuurid DXF-ist…}} lisab iga suletud kontuuri DXF-failis detailina. See võib olla CadCraftis DXF-ina salvestatud joonis või faili lõikuri enda tarkvarast. Kontuur teise kontuuri sees on selle auk. Otsast otsa ühinevad jooned ja kaared loevad üheks kontuuriks. Tollides, sentimeetrites või meetrites failid teisendatakse millimeetriteks.

:::note
Lehtmetalli tasandamine nõuab täpset geomeetriamootorit (vt [Lehtmetall](topic:sheet-metal)). Kontuurid DXF-failist töötavad alati.
:::

## Seadistamine

Iga detaili kohta anna **mitu** sul vaja on ja selle **kiudsuund**: {{ui:Suvaline suund}}, {{ui:Piki lehte (nagu joonistatud)}} harjatud või valtsitud lehe jaoks, mis peab kulgema ühes suunas, või {{ui:Risti lehega}}.

Jaotises **Lehed**:

- **Laos**: {{ui:Plaadid}} antud pikkuse ja laiusega (ning mitu sul on; 0 = nii palju kui vaja), või {{ui:Rull}} antud laiusega, nii pikk kui vaja.
- **Servavaru** jääb lehe igast servast vabaks (klambrite jaoks või ebaühtlase serva jaoks).
- **Detailidevaheline vahe** on kahe lõikejoone väikseim kaugus: vähemalt sinu lõikuri lõikelaius pluss see, mida materjal nõuab.
- **Pöörded**: nurgad, mille võrra detaili võib pöörata; vaikimisi iga 90°. Vähem pöördeid töötab kiiremini, rohkem võib lehte paremini ära kasutada.
- **Detaile võib ümber pöörata** lubab detaili paigutada pea alaspidi. Lehtmetalli puhul jäta see välja: pea alaspidi paigutatud tasandatud kuju paindub vastassuunas.

Vajuta {{ui:Paiguta}}. Eelvaates on näha iga leht; näitajad ütlevad, mitu plaati (või kui palju rullist) kasutati ning kui suure osa materjalist detailid hõivavad. Kõik, mis ei mahtunud, on nimetatud.

## Salvestamine

{{ui:Salvesta DXF}} kirjutab paigutuse DXF-ina (R12, millimeetrites), üks leht teise järel. Lehtede kontuurid on kihil SHEET, detailid kihil PARTS (kaared jäävad kaarteks) ja iga detaili nimi kihil LABELS.

:::tip
Erinevate detailide segamine paigutub tavaliselt paremini kui ühe detaili palju koopiaid: väikesed detailid täidavad suurte vahed.
:::

## Lehtede lõikamine (G-kood)

**Ekspordi › Paigutatud lehed G-koodiks** loeb paigutatud DXF-i (seda või Kappide lisandmooduli lehti CadCraftis) ja teeb valitud postprotsessori kaudu ühe programmi lehe kohta: enne augud ja väljalõiked, seejärel kontuurid, kusjuures iga lõige on tööriista raadiuse võrra detailist väljaspool, läbi lehe ja 1 mm rohkem, vajadusel sildadega. Postprotsessorite loend koosneb sisseehitatud postprotsessoritest ja sinu valmistamise uuringu omadest. Kontrolli iga programmi simulaatoris enne käivitamist: puurimist ja taskuid ei tehta.

## Mida kontrollida

PartCraft kontrollib iga paigutust uuesti tegelike kujude järgi (mitte ruudustiku järgi, millega ta otsis): ükski kaks detaili pole lähemal kui vahe ja miski ei ulatu varudesse. Lõikeplaani ta ei koosta. Sisselõiked, lõikejärjekord, ühiste servade lõikamine ainult üks kord ja jääklehe säilitamine on sinu lõikuri tarkvara ülesanded. Kontrolli DXF-i seal enne lõikamist.
