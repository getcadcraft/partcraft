---
title: Vabakujulised pinnad (NURBS)
summary: Siledad kõverad ja pinnad detaili kõrval – loft, süst, kõverate võrgud, nelja serva lapid, üleminekud, lõiked – G0-, G1- ja G2-pidevus mõõdetuna täpsetel pindadel, tahked ühendamise, lahutamise ja lõikumisega detaili sisse põimituna, sebra- ja kumeruse vaated, skaneeringule sobitatud tahud koos mõõdetud veaga ning STEP- või IGES-failid. Hoitakse detailifailis.
keywords: nurbs, skaneerimine, pöördprojekteerimine, sobitamine, võrk pinnaks, punktipilv, stl, lõikamine, lõigatud, auk, lõika, tahke, tahked, boolean, ühend, lahuta, lõikumine, erinevus, õmblemine, suletud, põimimine, vabakujuline, pind, pinnad, b-splain, bsplain, kõver, splain, loft, süst, rööbas, võrk, coons, lapp, üleminek, sobitamine, pidevus, g0, g1, g2, puutuja, kumerus, sebra, juhtpunktid, sõlmed, aste, step, iges, klass a, korpus, silumine
from: 64ed5196
---

**Pindade** tööruum loob siledaid kõveraid ja pindu, mida kasutatakse toodete kestades, autokeredes ja paadikerades: NURBS, sama matemaatika, mida kasutavad teised pinnamodelleerijad. Kõik mõõdetakse täpsetel pindadel, mitte vaadatavate kolmnurkade järgi. Mõõtmed on millimeetrites, nagu ülejäänud PartCraftis.

Vali **Pinnad** kastist **Töötsoon**. Tööriistaribal on {{ui:Kõver}}, {{ui:Loft}}, {{ui:Pühkimine}}, {{ui:Ühenda}} ja {{ui:Sebra}}; iga käsk on paremal paneelis. Käsk ütleb, mida ta veel vajab: klõpsa vaates kõveraid või pindu (küsimise korral servale või otsale lähedal) või vali need loendist; sisesta punktid või klõpsa neid detaili tahkudel (detailist väljas maandub need maapinnale), ning vajuta Enter.

Kõverad ja pinnad salvestatakse detailifaili tahke keha kõrval. Need ei muuda detaili tunnuseid: paneelil on oma {{ui:Võta tagasi}} ja {{ui:Tee uuesti}}, üks samm käsu kohta.

## Kõverad

- **Kõver läbi punktide** läbib iga punkti, millele klõpsad. **Kõver juhtpunktidega** järgib selle asemel punktide raami.
- **Lisa sõlm**, **Tõsta astet** ja **Langeta astet** muudavad kõvera kirjeldust, seda liigutamata (langetamine keeldub, kui kõver liiguks rohkem kui tolerants). **Ehita kõver uuesti** annab sellele uue arvu juhtpunkte ja ütleb, kui palju see liikus.
- **Sobita kõver** viib ühe kõvera otsa kokku teisega G0 (puutumine), G1 (sama suund) või G2 (ka sama kumerus) tingimusel.
  **Ühenda kõver** lisab uue kõvera kahe otsa vahele, G1 või G2.

## Pinnad

- **Loft** läbi kahe või enama kõvera, **Joonpind** kahe vahel, **Pressi kõver välja**, **Pööra kõver**.
- **Süst ühe rööpa mööda** kannab profiili mööda teed ilma keeramata; **Süst kahe rööpa mööda** hoiab profiili otsad mõlemal rööpal.
  Süstid on sobitatud: tulemus ütleb, kui lähedal jäi tõelisele süstile.
- **Pind kõverate võrgust** läbib kõverate ruudustiku (iga kõver ristub iga teisega täpselt üks kord).
  **Lapp neljast servast** täidab neli nurkades kokku jooksvat kõverat.
- **Sobita pind** viib pinna serva naabriga kokku G0, G1 või G2 tingimusel; **Ühenda pind** lisab pinna kahe serva vahele.
- **Nihuta pinda**, **Pikenda pinda** (pind jätkub sellisena, nagu see läks), **Ehita pind uuesti**.

## Kvaliteedi kontrollimine

Tabel **Jagatud servad** loetleb iga serva, mida kaks pinda jagavad, koos vahega (mm), nendevahelise nurga (°) ja kumeruse hüppega (1/mm), ning ütleb, kas see on G0, G1 või G2. Serv, mis on halvem kui sa nõudsid, ilmub paneelil **Probleemid** koos parandusega **Sobita**.
**Sebra** triibud ja **kumeruse** värvid tulevad täpsest pinnast: triibud, mis kulgevad ilma katkemata üle serva, tähendavad G1; triibud, mis säilitavad ka oma laiuse, tähendavad G2.

G0–G2 mõõdetakse 33 punktis serva kohta. **G3 ja „klass A“ kvaliteeti ei mõõdeta** ega väideta.

## Pinna lõikamine

Grupp **Lõige** lõikab pinna ilma kuju muutmata: pind säilitab kõik oma juhtpunktid ja näidatakse, loendatakse ja kirjutatakse ainult kontuuri sees olev osa. **Lõika ristkülikuga** ja **Lõika ringiga** töötavad pinna osa järgi igas suunas (0 kuni 1), nii et vaates valimist pole vaja; **Lõika kõveraga** võtab suletud kõvera, mis asub pinnal (see projitseeritakse pinda, ja lükatakse sõnadega tagasi, kui see on lahti või tolerantsist kaugemal). Märgi **Lõika auk**, et eemaldada kontuuri seest; jäta märkimata, et jätta alles ainult sisemine osa. Pinnal võib olla üks säilitatav kontuur ja mis tahes arv auke; kontuur, mis lõikub teisega, keeldutakse. **Eemalda lõige** näitab kogu pinda uuesti. Paneeli {{ui:Võta tagasi}} tühistab lõikamise nagu iga teise sammu.

STEP kannab lõike tahu piirjoontena ja IGES lõigatud pinnana (olem 144); mõlemad loevad selle tagasi.

## Tahked ja Boolean-tehted

Grupp **Tahked** muudab pinnad suletud kehadeks ja ühendab need. Tahke on siin paneeli enda pindade hulk, mis koos sulgevad mahu; selle tahud jäävad täpseteks NURBS-pindadeks koos lõigetega.

- **Kasti tahke**, **Silindri tahke** ja **Sfääri tahke** teevad ühe sisestatud mõõtmetest (mm): kast kuue lameda tahuga, silinder ümara külje ja kahe lameda otsaga, lõigatud ringiks, sfäär ühe pööratud pinnaga.
- **Tahke pindadest** grupeerib pinnad, mille sa ise tegid. Vali need või ära vali ühtegi, et kasutada kõiki näidatud pindu, mis pole veel tahkes. Need õmmeldakse kokku tolerantsi piires: kui need ei sulgu, ei muutu midagi ja paneel ütleb, mitu serva jääb lahti ja kui lähedal peavad need kokku tulema.
- **Ühend**, **Lahuta** (teine tahke võetakse esimesest ära) ja **Lõikumine** (ainult see, mis mõlemal on ühine) võtavad kaks tahket: klõpsa vaates kummagi tahku ühte tahku või vajuta **Vali** nimekirjas **Tahked**. Märgi **Hoia kaks tahket**, et jätta need tulemuse kõrvale.

Boolean hoiab iga tahu oma täpsel pinnal ja lõikab selle uute lõikejoontega mööda lõikumisjoont. Tulemuse rida annab mõõdetud numbrid: kui kaugele tahke mootori punktid pidid liikuma, et asuda täpsetel pindadel (mitte kunagi rohkem kui tolerants), kui lähedal lõikumispunktid mõlemale pinnale on (tavaliselt mõne miljondiku millimeetri piires), maht ja kas uued tahud sulguvad uuesti, kui need õmmeldakse värskelt nende täpsetest pindadest. Mahud mõõdetakse kolmnurkadel tolerantsi piires (0,05 mm, kui sa ei sea teist), nii et palli või silindri maht näitab veidi alla täpse väärtuse: väiksem tolerants läheneb sellele. Boolean, mida ei saa puhtalt teha (tahked ei jaga midagi, kontuur lõikuks iseendaga), keeldutakse sõnadega ega muudeta midagi. Üks Boolean on paneeli **Võta tagasi** üks samm.

Nimekirjas **Tahked** **Eralda** jätab tahud lihtsate pindadena; prügikast eemaldab tahke ja selle tahud.

## Ümardused ja paksendamine

**Ümardus tahkude vahel** ümardab serva, kus ühe tahke kaks tahku kohtuvad: vali kaks tahku (vaates või nupuga **Vali** loendis), sisesta **raadius** ja, kui raadius muutub mööda serva, **raadius lõpus** (0 jätab ühe raadiuse). Sellele raadiusele vastav kuul veeretatakse mööda serva, puudutades mõlemat tahku; ümardus on täpne ringikujuline kaar, mis tekib igas punktis, ühendatud üheks pinnaks, ja kaks tahku lõigatakse seal, kus kuul neid puudutab. Väline serv kaotab materjali, sisenurk saab juurde. Tulemuse rida annab mõõdetud numbrid: kui kaugel on ümarduspind veeretatavast kuulist punktide vahel, millest see ehitati (punkte lisatakse, kuni see on neljandiku tolerantsist piires), suurim nurk ümarduse ja iga tahu vahel mööda puutejooni ning samad numbrid nagu Ühendil. Raadius, mis ei sobi (kuul lahkuks tahult või tahk kõverdub raadiusest tihedamalt), keeldutakse, tahk nimetatud, ja midagi ei muutu.

**Ümarda mitu serva** ümardab mitu serva ühe sammuga: vali esimese serva kaks tahku, siis järgmise serva kaks tahku jne (tahk võib olla mitmes paaris, näiteks kasti ülemine tahk neljas neist); kõik servad saavad sisestatud raadiuse. Iga ümardus arvutatakse tahkul nii, nagu see oli, ja siis lõigatakse need ükshaaval, nii et järjekord ei loe. Kus kaks ümardatud serva kohtuvad nurgas, mille teised servad jäävad teravaks, jooksevad kaks ümardust kokku mööda oma lõikumisjoont (voldi). Kus kolm ümardatud välisserva kolmest lamedast tahust, mis on üksteise suhtes ristis, kohtuvad ühe raadiusega, on nurk üks **sfäärilõik**, puutuja kõigile kolmele ümardusele (eemalda linnuke **Nurgad**, et saada selle asemel voldiga nurk); serv peab olema vähemalt kaks korda raadiusest pikem, kus mõlemad otsad on sellised nurgad. Tulemuse rida ütleb, mitu serva ümardati ja kuidas nurgad välja tulid. Sisemisi servi saab ka koos ümardada, kuid tulemus, mis ei sulgu uuesti, on ainult teatatud (rida ütleb seda), nii et kontrolli seda.

**Paksenda tahkeks** annab pinnale paksuse: vali see, sisesta **paksus** ja märgi **Teine pool**, et kasvatada see teist moodi. Nihutatud tahk sobitatakse pinnale ja mõõdetakse selle vastu (tulemuse rida annab suurima erinevuse paksusest); seinad järgivad iga serva ja iga lõikekontuuri. Kui pind kõverdub selles suunas tihedamalt kui paksus või mõni teine osa jääb paksusest lähemale, keeldutakse, nimetades pinna ja koha, ning midagi ei muutu.

## Pind tahkeks detailis

**Sisesta** (pindade tööriistaribal) või **Sisesta detailisse** nimekirjas **Tahked** teeb tahke detaili kehaks, nagu avatud STL kehaks saab: vali tahke, otsusta, kas see **lisatakse** detailile, **lõigatakse** sellest või **lõikub** sellega, ning sisesta tolerants (kui kaugel kolmnurgad võivad olla täpsetest pindadest). See on ühe sammu võrra detaili {{ui:Võta tagasi}}, ja ilmub tunnuste loendis imporditud tunnusena, mille nimi on tahke järgi. Detail hoiab kolmnurki, nii et see avaneb ja ehitatakse ilma pindadeta; täpne tahke jääb Pindadesse, nii et saab seda muudatuse järel uuesti sisestada.

## Skaneeringust tehtud pinnad (pöördprojekteerimine)

Ava detail, mis sisaldab skaneeritud võrku (avatud STL või kihistatud keha), vali **Pinnad** kastist **Töötsoon** ja grupis **Skaneering** vali **Sobita pinnad skaneeringuga**; detaili ehitatud võrk ongi skaneering. Tööriist otsib **tasapindu**, **silindreid**, **sfääre** ja **koonuseid** (täpsed pinnad, millest töödeldud detail koosneb; iga rida näitab leitud raadiust või poolnurka), leiab **ümardusi** (ümarad servad ja nurgad: väike silinder või sfäär, mis jookseb puutuvalt kahte või enamat teist tahku, näidatakse selle raadiuse ja tahkudega, mida see ühendab), **ringümardusi** (toru: ümar serv, kus lame tahk kohtub silindri või koonusega, näidatakse selle raadiuse ja rõnga raadiusega) ja **muutuvaid ümardusi** (ümar serv, mille raadius muutub mööda seda, näidatakse raadiust igas otsas), sobitab **ühe vabakujulise lapi** siledale, kergelt kõverale tükile ning lõikab iga tahu kontuurile detaili osani skaneeringust, kust see tuli, nii et augud ja nurgad jäävad alles. Valikud: **tolerants** (kui kaugel mm-des võib skaneeringupunkt olla tasapinnast või silindrist ja ikka kuuluda sellele, ning sihtmärk vabakujulisele lapile), **väikseim tükk** (osa pindalast) ja **kõige rohkem tahke**. Sama skaneering ja samad valikud annavad alati samad tahud.

Tulemus on tabel, üks rida tahu kohta: selle liik, mitmest kolmnurgast see tuli ja **viga, mõõdetuna skaneeringust tahuni** (ruutkeskmine, suurim ja osa punktidest tolerantsi piires). Mõõdetud punktid on skaneeringu tipud ja iga kolmnurga keskpunkt. Viga ei mõõdeta teist pidi (tahust skaneeringuni), nii et tahk, mis ulatub skaneeringust kaugemale, ei paista. Tabeli all olev märkus ütleb ka, kui suur osa pindalast oli liiga väike sobitamiseks. Vaates on skaneeringu punktid värvitud nende **kõrvalekallekaardi** järgi: sinine tahul, roheline poolel teel tolerantsini, punane tolerantsil või rohkem (eemalda linnuke **Näita kõrvalekallekaarti**, et seda peita). Tükid, mis voldivad end tagasi (näiteks suletud toru, millele on sobitatud vabakujulised lapid), loetletakse sobitamata, neid ei sunnita ühe pinna kujule.

**Õmble skaneeringu pinnad tahkeks** õmbleb kokku iga näidatud pinna, mis pole veel tahkes, üheks suletud tahkeks. Skaneeringu tahud kohtuvad ainult skaneeringu enda vea piires, nii et tööriist proovib väikseimat ühenduskaugust, mis sulgub (mitte kunagi rohkem kui sinu määratud **õmblemiskaugus**), ning keeldub sõnadega, kui tahud ei sulgu. Ta ei paranda lünka kunagi. Ümarate servadega kast õmmeldakse, kui selle ümardused leiti eraldi tahkudena; ühenduskaugus, mis sulgus, on tulemuses. Tahke töötab siis Ühendi, Lahutamise, Lõikumise ja **Sisesta detailisse** käsuga.

Mida see ei tee: **ringümardus** (toru) otsitakse ainult juba leitud silindri või koonuse teljel, ja **muutuv ümardus** ainult üsna sirge serva ümber (selle lõiked on lõigatud ruudu ühe suuna järgi); mujal tulevad need välja vabakujuliste lappidena, kui need on piisavalt siledad, ja muidu jäetakse välja; sfäärid, koonused ja ümardused leitakse juhusliku valimisega, nii et väga väike (mõne kolmnurga suurune) võib jääda märkamata; kõrvalekallekaart näitab kaugust skaneeringust tahkudeni, mitte vastupidi; väga suured skaneeringud (üle 300 000 kolmnurga) keeldutakse siin. Täissõõrmelise silindri tahud lõigatakse aukude ümber, õmblus pannakse sinna, kus auku pole. Kontrolli iga tahku oma skaneeringu vastu enne sõltumist.

## Veel valmis pole

Kõvera tahkude nurgas kokku jooksvate servade või erinevate raadiustega ümardamine (tipu segu), ümardus tahkude vahel, mis ei kohtu, sisemine ümardus, mis lõpeb kaldus või kumeral tahul, Booleanid ja ümardused, mis arvutatakse pindadel ilma kolmnurkadeta (siin töötab tahke mootor tolerantsi piires olevate kolmnurkadega ja iga punkt pannakse siis tagasi täpsetele pindadele), kihistatud keha, mis järgib pindu, kui need muutuvad, pinna lõikamine teise pinnaga väljaspool Booleani, kuue või enama küljega aukude täitmine, kõverate projitseerimine pindadele.
