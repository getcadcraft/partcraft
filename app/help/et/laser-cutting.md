---
title: Saada joonis laserile
summary: Vali, mida iga kiht teeb (lõika, kriipsuta, graveeri, täida, pilt), vaata pea liikumisi eelvaates, salvesta GRBL-laserrežiimi G-kood või saada see brauserist pärast töö raamimist.
keywords: laser, laserlõikur, laser-graveerija, GRBL, G-kood, graveerimine, täitmine, poolutoonimine, pildigraveerimine, kriipsutamine, lõikamine, Web Serial, Linux, raami töö, võimsus, kiirus, läbimised
from: 327b3c46
---

Paneel {{ui:Laser}} muudab joonise kihid programmiks laserile, mis töötab GRBL-iga (enamik hobi- ja väikeettevõtete diood- ja CO2-kontrollereid). PartCraftis vali {{ui:Ekspordi}} › {{ui:Laserprogramm…}}, seejärel {{ui:Lisa kontuurid DXF-ist…}}: kontuurid ja augud tulevad sisse kihil CUT. Lehtmetallidetailide lamedad mustrid (koos paindejoontega kihil BEND) vajavad täpset tuuma, mida selles versioonis ei ole. Seaded salvestatakse detaili- või koostefaili.

:::warning
Proovi iga seadet kõigepealt jäätmematerjalil, kanna oma laserile sobivaid kaitseprille, hoia kaas suletuna, kus see on, ja ära kunagi jäta töötavat laserit järelevalveta. Kihi algnumbrid on kohatäited, mitte soovitused mingi materjali jaoks.
:::

## Vali, mida iga kiht teeb

Iga joonise kiht on üks rida. {{ui:Teeb}} määrab selle väärtuseks **Lõika**, **Kriipsuta**, **Graveeri jooned**, **Täida kujundid**, **Graveeri pilt** või **Ei saadeta**, koos {{ui:Power %}}, {{ui:Speed mm/min}} ja arvuga {{ui:Passes}}.

- **Täida** põletab suletud kujundite sisemuse joontena, mille vahe on {{ui:Joonevahe}}, nurga {{ui:Angle}} all, mõlemas suunas või ühes, koos ülejooksuga, nii et laserpea on kiiruses, kui laser sisse lülitub; ristvarjutus lisab teise läbimise 90° all. Kuju, millel on auk, jääb augu kohalt avatuks.
- **Graveeri pilt** muudab pildi punktideks (Floyd–Steinberg, Atkinson, järjestatud või lihtne must-valge lävendiga) või koos *hallitoonidega* muutuvaks võimsuseks.
- Järjekord: esmalt pildid ja täited, seejärel joonte graveerimine, siis kriipsutused, siis lõiked, nii et väljalõigatud detail ei liigu graveerimise ajal. Ühe kihi piires käivad teed **seest-esimesena** (auk enne plaati, mille sees ta on), järgmisena lähim.

## Eelvaade ja seejärel salvestamine

Eelvaade joonistab, mida pea teeb: põletavad jooned värviliselt, kiired liigutused hallilt ja roheline kast kõige ümber, mis põleb. Selle all on suurus, põletuspikkus ja ajahinnang (ilma kiirenduseta; päris masin võtab kauem aega). {{ui:Salvesta G-kood…}} kirjutab GRBL-i laserrežiimi G-koodi: `$32=1`, `M4` (või `M3`) koos S-väärtustega, `G0` ja `G1` liigutused, lõpus `M5`. X0 Y0 on töö vasakpoolne alumine nurk, kui just ei vali joonise nullpunkti: seadista masina töönull sinna. G-kood järgib GRBL-i dokumenteeritud laserrežiimi; seda pole veel päris laseril proovitud.

## Saatmine brauserist

Chrome'is ja Edge'is küsib {{ui:Ühenda…}} valida laseri USB-pordi. Enne nupu vajutamist midagi ei ühendu ega saadeta. Vajuta kõigepealt {{ui:Raami töö}}: pea joonistab töö kasti ääred laseriga **välja lülitatud** (või osuti jaoks seatud madala võimsusega), et näed, kus see põletab. Alles siis muutub aktiivseks {{ui:Saada töö}} ja läheb uuesti välja, kui midagi muudad. {{ui:Paus}} seisab pea paigal, {{ui:Peata}} seisab samuti, lähtestab kontrolleri (laser lülitub välja) ja saadab `M5`. Kus Web Serial puudub (Firefox, Safari ja CadCraft Studio, mille veebivaates seda veel pole), salvesta G-kood ja saada see laseri enda programmiga.

## Veel tegemata

Teiste kontrollerite formaadid (Ruida, Marlin-laserid, tootjate failid), sillad ja sissesõidud, lõikelaiuse nihe, materjaliteegid, pöörlev ja Z-telg, kaamera joondamine.
