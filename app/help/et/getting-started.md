---
title: Alustamine PartCrafti abil
summary: Mida PartCraft praegu teeb, mida su brauser vajab ja esimene detail kümne minutiga, visandist salvestatud failini.
keywords: alustamine, esimene käivitamine, kiirstart, sissejuhatus, õpetus, esimene detail, plaat, parameetriline, detailide modelleerija
from: 7d43283f
---

PartCraft on CadCrafti perekonna parameetriline detailide ja koostude rakendus. Joonistad 2D-visandi, seome selle seostega ja mõõtmetega, muudad selle tahkiseks elementidega nagu väljapressimine, pööramine ja auk ning muudad hiljem mis tahes arvu: detail ehitatakse uuesti oma ajaloost. Detailid lähevad seejärel koostudesse, kus liitekohad need paigutavad ja võimaldavad liikumist kontrollida.

Mida see versioon teeb:

| Ülesanne | Mida saad |
|---|---|
| Visandid | Jooned, ristkülikud, ringid, kaared, punktid ja keskjooned koos seostega ja mõõtmetega ning reaalajas oleku: alamääratud, täielikult määratud või ülemääratud |
| Tahkise elemendid | Väljapressimine, lõikamine, pööramine, pööratud lõikamine, lihtsad ja loenduriga augud, lineaarsed ja ringjad massiivid, peegeldamine, ümardused ja faasid sirgetel servadel tasaste tahkude vahel ning kestad ja kaldenurgad tasastel tahkudel. Pühkimised, lofid ja muud elemendid, mis vajavad täpset tuuma, pole selles versioonis veel ehitatud: vt [Mida pole veel ehitatud](topic:not-built-yet) |
| Ajalugu | Muuda mis tahes elemendi arve, peida, naase tagasi, muuda järjekorda ja kustuta, tagasivõtmisega |
| Koostud | Detailid, mis on ühendatud jäikade, pöörlevate ja libisevate liigenditega, kokkupõrke kontroll ja liikumise kontroll |
| Joonised | A3-leht kolme vaate, isomeetria, lõike, detailvaate, üldmõõtmete, baaside, elemendi juhtraamide ja pinnakaredusmärkidega, eksporditud PDF-ina |
| Failid | Oma detaili- ja koostefailid; väljund STL, 3MF, täpne STEP, DXF ja PDF |

Kõik töötab sinu brauseris, sinu arvutis. **Midagi ei laadita üles.** Vaata, kuhu failid lähevad, lehelt [Failid: avamine, salvestamine ja eksport](topic:files).

## Mida vajad

- Ajakohane Chrome, Edge, Firefox või Safari, kus on sisse lülitatud **WebGL** (3D-graafika) ja **WebAssembly**. Mõlemad on vaikimisi sisse lülitatud. Tahkise geomeetria ehitab WebAssembly võrgutuum, mis laadib rakendusega koos: vt [Võrgutuum](topic:solid-kernels).
- Hiir on kõige mugavam. Puuteplaat töötab ning puuteekraanid sobivad vaatamiseks ja lihtsaks visandamiseks: vt [Puuteplaat, puuteekraan ja väikesed ekraanid](topic:trackpad-and-touch).
- Vähemalt 1280 pikslit lai ekraan näitab kogu tööriistariba ühes reas. Kitsamad aknad kerivad tööriistariba külgsuunas; telefonil avanevad paneelid lehtedena allservas olevast ribast.

:::note
PartCraft töötab brauseris ja töölaual CadCraft Studio sees. Pilvesalvestus pole veel saadaval: avad detailid oma arvutist ja salvestad need sinna tagasi failidena.
:::

Rohkem brauseritest: [Brauserid ja arvutid](common:browsers).

## Ava PartCraft

1. Ava PartCraft.
2. Oota, kuni ekraan ütleb „Tahkisetuuma laadimine…“. Esimesel korral võtab see hetke.
3. Näed tühja 3D-vaadet kolme põhitasandiga, ajalugu vasakul (Part1, seejärel Eestasand, Ülatasand, Paremtasand) ja vaates kasti pealkirjaga „Alusta detaili“.
4. Oleku riba parempoolses otsas olev silt ütleb „Võrgutuum“: PartCraft ehitab selles versioonis iga detaili võrgutuumaga, nii et ümarad tahud on tasased tahkud. Võid kohe modelleerimist alustada.

Kui vaates öeldakse, et brauser ei saa 3D-d näidata, või tuum ei laadinud, vt [Tõrkeotsing](topic:troubleshooting#the-app-does-not-start).

## Sinu esimene detail: auguga plaat

Teed 60 × 40 mm plaadi, mis on 10 mm paks ja millesse on 6 mm auk läbi. Ühikud on millimeetrites.

### Visandi kontuur

1. Klõpsa vasakul ajaloos **Eestasand**. Tasand tõstetakse vaates esile.
2. Vali tööriistaribal {{ui:Visand}} või vajuta {{key:S}}. Vaade pöördub tasandi otse poole ja joone tööriist on aktiivne.
3. Vajuta {{key:R}} ristküliku tööriista jaoks.
4. Liiguta kursor algpunkti peale (väike punane ring ristiga). Väike ruut näitab, et see haakub. Klõpsa.
5. Liigu üles ja paremale ning klõpsa uuesti. Sul on ristkülik. Selle jooned on sinised: sinine tähendab, et need saavad veel liikuda.

### Anna mõõdud

1. Vajuta {{key:D}} mõõtmise tööriista jaoks.
2. Klõpsa ülemisel joonel ja seejärel veidi selle kohal. Avaneb numbriväli praeguse pikkusega.
3. Sisesta `60` ja vajuta {{key:Enter}}. Ristkülik muutub 60 mm laiaks.
4. Klõpsa vasakul joonel ja seejärel veidi selle vasakul. Sisesta `40` ja vajuta {{key:Enter}}.

Vaate vasakus ülanurgas olev silt ütleb nüüd **Täielikult määratud** ning jooned muutuvad tindiks (Paber-teemal mustaks, Mudel-teemal heledaks). Iga punkt ja mõõde on fikseeritud.

:::tip
Kui alustasid ristkülikut algpunktist eemal, ütleb silt endiselt „Alamääratud · 2 vabadusastet“. Vajuta {{key:S}} valiku jaoks, klõpsa ühel nurgal, {{key:Shift}}+klõps algpunktil ja vali parempoolsel paneelil {{ui:• Ühtelangev}}.
:::

### Väljapressi see

1. Vali tööriistaribal {{ui:Välju}} või vajuta {{key:Esc}}, kuni visand sulgub (tavaliselt kaks korda).
2. Vali {{ui:Väljapressimine}}. Ilmub 10 mm tahkis. Ajalukku lisandub Extrude1, mille all on taandatud Sketch1.
3. Parempoolne paneel näitab väljapressimise sätteid. Paksuse muutmiseks sisesta uus arv väljale **Sügavus (mm)** ja vajuta {{key:Enter}} või {{key:Tab}}. Detail ehitatakse kohe uuesti.

### Lisa auk

1. Klõpsa plaadi esiküljel olevat suurt tasast pinda (väljapressimise lõpp). Kogu pind tõstetakse esile ja parempoolne paneel ütleb **Tahk**.
2. Vali parempoolsel paneelil {{ui:Visand sellel tahul}}.
3. Vajuta {{key:P}} punkti tööriista jaoks ja klõpsa tahu keskme lähedal.
4. Vali {{ui:Välju}}.
5. Vali {{ui:Auk}}. Plaadist läbi läheb 6 mm auk. Soovi korral muuda parempoolsel paneelil **Läbimõõt (mm)**.

Vasakus alanurgas olev **Detail** kast näitab nüüd ruumalat, pindala, mõõtmeid (60 × 40 × 10 mm) ja „Läbivaid auke: 1“.

### Salvesta see

1. Vajuta {{key:Mod+S}} või vali {{ui:Salvesta}}.
2. Sinu brauser laadib faili `Part1.partcraft.json` oma allalaadimiste kausta. Fail sisaldab kogu ajalugu: ava see uuesti nupuga {{ui:Ava}}, et muutmist jätkata.

Detaili nime muutmiseks klõpsa esmalt vaates tühjal alal, et midagi poleks valitud, ja sisesta parempoolsel paneelil uus **Nimi**.

## Kuhu edasi

- [Joonista esimene visand](topic:sketch-basics) ja [Määra visand täielikult](topic:relations-dimensions) selgitavad visandajat põhjalikult.
- [Muuda detaili ajaloo kaudu](topic:edit-history) näitab, kuidas muuta ehitatut.
- [Ümarda, faasi ja õõnesta](topic:fillet-chamfer-shell) ja [Tee joonis](topic:drawing-pdf) viimistlevad detaili. [Mida pole veel ehitatud](topic:not-built-yet) loetleb, mida see versioon ei tee, nagu pühkimised ja lofid.
- [Tulek teisest parameetrilisest modelleerijast](topic:coming-from) loetleb harjumused, mis siin toimivad teisiti.
- [Klahvid ja hiir](topic:keyboard) on kiirklahvide täielik loend.
- [Selle abi kasutamine](common:help).
