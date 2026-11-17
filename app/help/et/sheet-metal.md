---
title: Lehtmetall: flensid ja lamedaks laotud kuju
summary: Alusta lehtmetalldetaili visandist (lame plaat või painutatud profiil), sea paksus, painderaadius ja K-tegur ühe korra, painuta flensse servadest üles koos painde vabastustega ja laota see lamedaks DXF-ina lõikamiseks.
keywords: lamedaks laotud kuju, lahtivõtmine, arendus, arendatud pikkus, painde pikkus, painde joon, lehtmetall, laserlõige, DXF laserile, põhiflenss, servaflenss, flenss, painutamine, painderaadius, K-tegur, paksus, mõõt, vabastus, painde vabastus, kanal, konsool, korpus, painutatud leht
from: 144bd0f6
---

:::note
**Selles versioonis veel loomata.** Lehtmetall vajab täpset geomeetriatuuma, mida see PartCraft'i versioon ei sisalda: ta loob iga detaili võrgutuumaga. [Mis on veel loomata](topic:not-built-yet) ütleb, mida selle asemel teha. Ülejäänud lehekülg kirjeldab seda, nagu see töötab täpse tuumaga.
:::

Lehtmetalldetailid algavad **Põhiflensiga**. See määrab kogu detaili lehe: selle **paksuse**, **sisemise painderaadiuse** ja **K-teguri**. Iga järgnev **Servaflenss** painutub nende samade arvudega, nii et detail jääb üheks lehaks, mida saab lahti voltida. Mõlemad nõuavad **täpset tuuma** (vaata [Võrgutuum](topic:solid-kernels)).

## Alusta põhiflensiga

1. Joonista visand. Kasuta **suletud profiili** lameda plaadi jaoks (ristkülik või mis tahes suletud kontuur aukudega). Kasuta **ühte avatud joonte ahelat** painutatud lehe jaoks, nagu L, U või Z, mis on joonistatud lehe servavaatena.
2. Vali visand elementide ajaloos.
3. Ava {{ui:Veel}} rühmas Elemendid ja vali {{ui:Põhiflenss}}.

Paneelis paremal:

- **Paksus (mm)** on lehe mõõt.
- **Painderaadius (mm)** on iga painde sisemine raadius. 0 annab terava sisenurga; väline osa pöördub ikka raadiusega, mis on üks paksus.
- **K-tegur** ütleb, kus neutraalne kiht asub lehe sees, vahemikus 0 (sisepind) kuni 0.5 (keskpind). See määrab, kui pikk leht on lahti volditud. 0.44 on vaikimisi; sinu töökoda või materjalitarnija võib anda oma.
- **Sügavus (mm)** on see, kui kaugele painutatud profiil visandi tasandist välja läheb. Plaat seda ei arvesta.
- **Paksus väljaspool painded**: avatud profiil on lehe üks pind. Vaikimisi läheb paksus esimese painde sisemisele küljele, nii et sinu joonistatud jooned on kanali väliskülg. Märgi see, et panna jooned sisemisele küljele. Tulemus on sama, millisest otsast joonistasid.

Iga avatud ahela nurk saab paindeks. Liiga lühike joon, et oma painded kinni hoida, ütleb seda, koos vajaliku pikkusega.

## Painuta servaflenss

1. Klõpsa lehe ülemise või alumise pinna sirgel serval (pikad servad, mitte õhukesed).
2. Vali {{ui:Veel}} › {{ui:Servaflenss}}. Kui serva pole valitud, ootab PartCraft, et klõpsad ühe; {{key:Esc}} tühistab.

Flens painutub sellelt serva pinnalt üles ümber lehe sisemise raadiuse ja jääb siis sirgeks. Paneelis:

- **Nurk (°)** on, kui palju see painutub, 1 kuni 180. 90 on ruudukujuline flens.
- **Pikkus (mm)** on sirge haar pärast painet.
- **Paindu teist moodi** painutab selle teiselt pinnalt (alla, mitte üles).
- **Nihe alguses** ja **Nihe lõpus** lühendavad flenssi servast kumbastki otsast.
- **Painde vabastus**: kui otsa on nihutatud, lõigatakse lehte selle kõrvale pesa, et painutamine seal metalli ei rebiks. **Vabastuse laius** seab pesa laiuse; selle sügavus on painderaadius pluss paksus. Vali **Puudub**, et nurka mitte lõigata.

Serva muutmiseks hiljem vajuta paneelis {{ui:Vali}} ja klõpsa teist.

:::tip
Kasuta paksuse ja raadiuse jaoks parameetreid (vaata [Parameetrid ja võrrandid](topic:parameters)), et paksuse muutmine uuendaks kõiki flensse korraga.
:::

## Laota lamedaks

Mõlemad paneelid lõpevad jaotisega **Lame kuju**. Vajuta {{ui:Tasanda}}:

- Eelvaade näitab lehte lahti volditult, iga painde keskjoon on katkendlik.
- **Suurus** ja **Pindala** on lameda tühja omad.
- Iga painde loend näitab selle suunda (**üles** või **alla**, vaadatuna põhiflensi visandi poolelt), nurka ja sisemist raadiust.

Iga painde jaoks võetakse läbi selle lehe neutraalse kihi pikkus, **painde pikkus**: nurk (radiaanides) × (sisemine raadius + K-tegur × paksus). Nii lisab 90° painde 2 mm lehele 2 mm raadiuse ja K-teguriga 0.44 4.52 mm lamedat lehte.

Lamedal plaadil näitavad augud, lõiked ja painde vabastused lamedas kohas, kus nad tegelikult on, kaasa arvatud augud läbi flenssi.

Mitme lõikamiseks vajuta lameda kuju all {{ui:Paiguta lehtedele…}}: vaata [Paiguta lamedad detailid lehtedele](topic:nest-flat-parts). Painutatud põhiflens paigutub ühe ristkülikuna: selle arendatud pikkus × sügavus, painde joon igas nurgas.

{{ui:Salvesta DXF}} salvestab lameda kuju laseri, pressi või veejoa jaoks millimeetrites:

- kontuur kihil **OUTLINE** joontena, kaarte ja ringidena;
- painde jooned kihil **BEND**, katkendlikult;
- märkus iga paindel kihil **BEND_NOTES**, nagu „UP 90° R2“.

Muuda midagi ja lame kuju kaob; vajuta {{ui:Tasanda}} uuesti uue jaoks.

:::note
Kontrolli K-teguri üle oma töökojaga enne lõikamist: lameda kuju pikkus sõltub sellest ning see varieerub materjali, paksuse ja tööriistade järgi.
:::

## Teated

- **Lehtmetall vajab enne seda põhiflenssi** — servaflenss lisati enne ühtegi põhiflenssi. Liiguta see mõne põhiflenssi alla või lisa kõigepealt põhiflenss.
- **Servaflenss vajab sirget serva** — flenssid painutuvad ainult joonte järgi; kumerad servad ei saa neid veel.
- **See serv ei asu lehe paksuse pinnal** — serv kuulub pinnale, mis ei ole lehe ülemine ega alumine (näiteks augu sein). Vali ülemise või alumise pinna serv.
- **Nihked ei jäta servast midagi alles** — kaks nihet annavad kokku terve serva või rohkem.
- **Servaflenssid painutatud põhiflenssil ei saa veel lamedaks laotada** — alusta lamedast plaadist ja painuta kõik servaflenssidega üles; need lahti volditakse.
- **Painutatud põhiflenssi järel tehtud lõiked ja augud ei ole veel selle lameda kuju all näha** — painutatud profiili lame kuju on ainult selle arendatud ristkülik.
