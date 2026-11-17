---
title: Magnetväljad 2-D-s (õpetus)
summary: Arvuta elektromagneti või püsimagneti magnetväli analüüsiteegiga: käivita näited, loe magnetvoo tihedust, õhupilu välja, induktiivsust ja tõmmet, muuda konstruktsiooni ning ehita oma mudel mähistest, magnetitest ja rauast.
keywords: magnetiline, magnetostaatika, magnetväli, magnetvoo tihedus, tesla, elektromagnet, solenoid, mähis, amprikeerud, raudsüdamik, õhupilu, läbilaskvus, induktiivsus, magnetjõud, reluktants, magnetahel, vektorpotentsiaal, elektromagnetism, lõplikud elemendid, FEM, mootor, aktuaator, trafo, magnetostatic2d, püsimagnet, neodüüm, NdFeB, ferriit, remanents, tööpunkt, tagasipööre, leke, hoidemagnet
from: 215f6601
---

PartCraft'i analüüsiteek suudab arvutada mähiste ja raua magnetvälja 2-D-s: ristlõige millestki pikast, mis on kogu pikkuses ühesugune, näiteks elektromagnet, trafo südamik, sinevõru või mootori ristlõige. See õpetus käivitab teegi elektromagneti näite, loeb, mida see ütleb, muudab seda, näitab, kuidas modelleerida oma kuju, ning lisab seejärel püsimagneti.

See kasutab tööruumi Skript ja [analüüsiteeki](topic:craftscript-library). Järgimiseks ei pea tundma CraftScripti keelt; näide ütleb, mida iga rida teeb.

## Mida modelleeritakse

C-kujuline raudsüdamik, välismõõtmetega 100 × 80 mm ja paksusega 20 mm, parempoolses jalas 2 mm õhupilu. Vasakule jalale on keeratud 100-keerdune mähis, mida läbib 10 A (1000 amprikeeru). Kõik on pikk ekraanist välja suunas, seega on vastused **meetri sügavuse kohta**: tegeliku magneti puhul korruta tegeliku sügavusega.

Teegi `magnetostatic2d` lahendab magnetilise vektorpotentsiaali 1 mm ruutudest võrgul magnetit ümbritseva õhukasti sees ning arvutab sellest magnetvoo tiheduse **B** (teslades).

## Käivita näide

1. Vali **Skript** tööriistariba vasakus servas olevast kastist **Tööruum**.
2. Ava skriptipaneeli vahekaart **Teek**, seejärel **Näited** › **Elektromagnet: väli, vahe, induktiivsus**.
3. Klõpsa {{ui:Ava (ainult lugemiseks)}}, seejärel vajuta {{key:F5}}.

Sekundi või kahe pärast näitab lõuend magnetvoo tihedust ja konsool trükib:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Graafik lõuendi all on vertikaalne magnetvoo tihedus B_y mööda südamiku keskjoont vasakult paremale: umbes −0.55 T vasakus jalas (voog kulgeb seal alla), peaaegu mitte midagi aknas ja +0.55 T paremas jalas ning üle õhupilu (voog tuleb tagasi üles). Sama voog läbib rauda ja õhupilu, seega näitavad kaks jalga ja õhupilu peaaegu sama väärtust.

## Tulemuste lugemine

- **Väli õhupilus** on 0.543 T. Käsitsi arvutus käsitleb südamikku ühe magnetahelana, B = μ0 N I / (g + l / μr), kus g on õhupilu, l on raua läbiva tee pikkus ja μr raua suhteline läbilaskvus; see annab 0.552 T. Väli on käsitsi arvutusest natuke madalam, sest voog paisub õhupilu ümber (servaefekt) ja osa voost lõikab aknast lühema tee (leke). Väiksema õhupilu või peenema võrgu korral lähenevad need kaks.
- **Induktiivsus** 100-keerdulisel mähisel on 0.154 H meetri sügavuse kohta, arvutatuna välja salvestatud energiast. Ahelavalem annab vähem (0.110 H/m), sest see arvestab ainult õhupilu läbivat voogu, mitte mööda lekkivat voogu.
- **Tõmme**, mis õhupilu sulgeb, on B² w / (2 μ0) õhupilu tahu laiusega w: umbes 2300 N meetri kohta ehk 117 N 50 mm sügavuse magneti puhul.
- **Tipp** 1.97 T asub akna sisenurkades, kus voog pöördub järsult. Mudel käsitleb rauda lineaarsena; päris elektriterasest küllastub see umbes 1.5 kuni 2 T juures, seega käsitle sellest suuremaid väärtusi hoiatusena, mitte vastusena.

:::note
Teegi enda testid käivitavad selle näite ja kontrollivad õhupilu välja magnetahela valemi vastu igal PartCraft'i muutmisel. Meetod, selle viited ja muud kontrollid (pikk solenoid, raudsüdamikuga solenoid) on `magnetostatic2d` päises: klõpsa sellel teegis.
:::

## Muuda konstruktsiooni

1. Klõpsa lugemiseks ainult skripti kohal {{ui:Tee koopia}}. Koopia salvestatakse koos sinu detailiga.
2. Muuda väärtust ülaosas ja vajuta uuesti {{key:F5}}. Proovi:
   - `g = 0.001;` — pool õhupilu: õhupilu väli peaaegu kahekordistub ja samuti tõmme (see käib B² järgi).
   - `mur = 200;` — halvem südamik: rohkem amprikeeru kulub raual.
   - `N = 200;` — kaks korda rohkem keerde: kaks korda suurem väli, neli korda suurem induktiivsus.
   - `h = 0.0005;` — peenem võrk: täpsemad vastused, umbes neli korda rohkem aega.

Iga käivitus asendab lõuendi. Skripti loodud muutujad (näiteks `Bgap`, `L`, `F`) jäävad loendisse **Muutujad** sinu enda arvutusteks.

## Modelleeri oma kuju

Näide ehitab kõik kolmest loendist, ühe väärtuse ruudu kohta; neid saad teha mis tahes kujule, mis on joonistatud võrgu sirgete joontega:

- **Kus on raud:** `iron` on tõene südamiku sees olevate ruutude puhul. Näide ehitab selle ristkülikutest: `frame & ~window & ~gap` tähendab „raamis, mitte aknas, mitte õhupilus“.
- **Läbilaskvus:** `1 + (mur - 1) * iron` on õhus 1 ja raua puhul `mur`. Mitme materjali korral anna neile samal viisil oma väärtused.
- **Vool:** `J` on voolutihedus amprites ruutmeetri kohta, positiivne ekraanist välja, negatiivne sisse. Mähisel on kaks külge vastandmärgiga; näide arvutab `J0` nii, et ühel küljel kulgeb N I.

Seejärel `r = magnetostatic2d(m, permeability, J)` lahendab selle. `r.B` on magnetvoo tihedus igas ruudus (kaks veergu, x ja y), `r.Bmag` selle suurus, `r.energy` salvestatud energia meetri kohta. `plot(x, y)` joonistab joone.

Teek töötab meetrites ja vaade millimeetrites, seega joonistataks väli, kui seda näidataks nii nagu on, tuhat korda liiga väikesena. Näide kuvab selle millimeetrites võrgu koopial (`mm = quadGrid(…)`, seejärel `show(field(mm, …))`): kopeeri need kaks rida.

Vaikimisi hoiab kasti serv välja kinni: ükski voog ei lahku sealt. Tee kast vähemalt kaks-kolm korda magneti suurune, et see väli ei kitsendaks. Sümmeetrilise magneti puhul võid modelleerida poole sellest: `magnetostatic2d` päis ütleb, millist servatingimust sümmeetriajoonel kasutada.

## Püsimagnetid

Teine näide, **Näited** › **Püsimagnet raudsüdamikus: tööpunkt, leke, tõmme**, on sama südamik ilma mähiseta, kusjuures vasaku jala 10 mm tükk on asendatud magnetiga, mis on magnetiseeritud üles. Käivita see klahviga {{key:F5}}. See trükib:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Tööpunkt.** Magnetit kirjeldab tema **remanents** Br (väli, mis tal jääb, kui raud on ta lühistanud: umbes 1.2 T paagutatud NdFeB-magnetil, 0.4 T ferriitmagnetil) ning tema tagasipöördejoone läbilaskvus (umbes 1.05 ja 1.1). Õhupilu avamine lükkab selle alla mööda tagasipöördejoont: siin 1.04 T-ni, kusjuures H on magneti sees B-ga vastassuunas.
- **Leke.** Käsitsi arvutus ilma lekketa annab õhupilus 0.97 T; mudel annab 0.68 T. Magnet ajab oma voo lühikesel lõigul tugeva tõukega, seega suur osa sellest läheb otse tagasi üle akna, mitte läbi õhupilu. Lekketegur ütleb, kui palju: siin 1.53. Suletud hoidja jaoks sea `g = 0;`: siis töötab magnet käsitsi arvutusega 0.5 % piires.
- **Magnetid sinu enda mudelis.** Anna `magnetostatic2d`-le magnetid kujul `struct('Br', Br)`, kus `Br` on igas võrguruudus üks rida, mille remanents x ja y suunas on teslades (magnetite väliselt null), ning anna magnetiruutudele nende tagasipöördejoone läbilaskvus läbilaskvuse loendis:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T üles ruutudes, kus mag on tõene
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Nurga all magnetiseeritud magneti puhul pane `Br·cos(angle)` ja `Br·sin(angle)` kahte veergu; väljapoole magnetiseeritud rõnga puhul arvuta iga ruudu suund selle asukohast. `r.H` annab väljatugevuse H igas ruudus.

Mudel hoiab magnetit sirgel tagasipöördejoonel, olenemata sellest, kui kõvasti teda ajatakse. Päris magnet, mida ajatakse üle oma põlve (suure õhupilu, tugeva mähise või kuumuse tõttu), kaotab osa tugevusest jäädavalt; kontrolli tööpunkti tootja kõvera järgi kvaliteedi ja temperatuuri jaoks.

Teegi testid kontrollivad magneteid kahe käsitsi tulemuse vastu: ümmargune magnet vabas õhus (selle sees B = Br / (1 + μr)) ja raudhoidjaga suletud magnet (magnetahel), mõlemad 1 % piires.

## Mida see veel ei tee

- **Küllastumine.** Raud on lineaarne: kahekordne vool, kahekordne väli, piiranguteta.
- **Demagnetiseerimine.** Magnetid jäävad sirgele tagasipöördejoonele (vt ülal).
- **Pöisvoolud** ja **kaod** (raua kadu, vase kadu).
- **Liikuvad osad ja pöördemoment.** Pole rootorit, mis pöörleks staatoris, pole pöördemomenti nurga järgi.
- **Ümarad kujud.** Võrk koosneb võrdsetest ruutudest, seega tulevad kõverjoonelised kontuurid astmelistena.
- **3-D.** Kõik on midagi pika ristlõige.

Mootori konstruktsiooni (pöörlev rootor, pöördemoment ja kaod 2-D-s) vaadatakse hilisemas versioonis. Vt [Veel tegemata](topic:not-built-yet).
