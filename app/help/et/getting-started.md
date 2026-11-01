---
title: PartCrafti kasutamise alustamine
summary: Mida PartCraft praegu teeb, mida su brauser vajab ja esimene osa kümne minutiga, visandist salvestatud failini.
keywords: alustamine, esimene käivitus, kiirstart, sissejuhatus, õpetus, esimene osa, plaat, parameetriline, osamodelleerija
from: 5f0a668d
---

PartCraft on CadCraft-perekonna parameetriline osade ja koostete rakendus. Joonistad 2D-visandi, seod selle seostega ja mõõtudega ning muudad selle tahkiseks elementidega nagu väljapressimine, pööramine ja auk. Iga arvu saad hiljem muuta: osa ehitatakse oma ajaloo järgi uuesti. Osad lähevad seejärel koostesse, kus liited paigutavad need ja lasevad kontrollida liikumist.

Mida see versioon teeb:

| Töö | Mida saad |
|---|---|
| Visandid | Jooned, ristkülikud, ringid, kaared, punktid ja telgjooned, seostega ja mõõtudega ning elava olekuga: alamääratud, täielikult määratud või ülemääratud |
| Tahkiselemendid | Väljapressimine, lõikamine, pööramine, pööratud lõige, lihtsad ja vastuuritud augud, lineaarsed ja ringjad massiivid, peegeldus, ümardused ja faasid sirgetel servadel lamedate tahkude vahel ning koored ja tõmbenurgad lamedatel tahkudel. Pühkimised, loftid ja muud elemendid, mis vajavad täpset tuuma, pole selles versioonis veel ehitatud: vt [Mida veel ei ole ehitatud](topic:not-built-yet) |
| Ajalugu | Muuda mis tahes elemendi arve, lülita välja, keri tagasi, järjesta ümber ja kustuta, koos tagasivõtmisega |
| Koosted | Osad, mis on ühendatud jäikade, pöörlevate ja nihkeliidetega, põrkumise kontroll ja liikumise kontroll |
| Joonised | A3 joonisleht kolme vaate, isomeetria, lõike, detailivaate, üldmõõtmete, baaside, elementide juhtraamide ja pinnaviimistluse sümbolitega, eksporditud PDF-ina |
| Failid | Oma osa- ja koostefailid; väljundina STL, 3MF, tahkudeks jaotatud STEP, DXF ja PDF |

Kõik töötab sinu brauseris ja sinu arvutis. **Midagi ei laadita üles.** Vt [Failid: avamine, salvestamine ja eksportimine](topic:files), kuhu failid lähevad.

## Mida vajad

- Ajakohane Chrome, Edge, Firefox või Safari, kus on **WebGL** (3D-graafika) ja **WebAssembly** sisse lülitatud. Mõlemad on vaikimisi sees. Tahkise geomeetria ehitab WebAssembly-võrgutuum, mis laaditakse rakendusega kaasa: vt [Võrgutuum](topic:solid-kernels).
- Hiir on kõige lihtsam. Puuteplaat sobib, ja puuteekraanid töötavad vaatamiseks ning lihtsaks visandamiseks: vt [Puuteplaat, puuteekraan ja väikesed ekraanid](topic:trackpad-and-touch).
- Vähemalt 1280 pikslit lai ekraan näitab kogu tööriistariba ühes reas. Kitsamad aknad kerivad tööriistariba küljele; telefonis avanevad paneelid lehtedena alumisest ribast.

Brauseritest lähemalt: [Brauserid ja arvutid](common:browsers).

:::note
PartCraft töötab brauseris ning töölaual CadCraft Studio sees. Pilvesalvestus pole veel saadaval: avad osad oma arvutist ja salvestad need tagasi failidena.
:::

## Ava PartCraft

1. Ava PartCraft.
2. Oota, kuni ekraanil on „Laadin tahkisetuuma…“. Esimesel korral võtab see hetke.
3. Näed tühja 3D-vaadet kolme baastasandiga, vasakul ajalugu („Part1“, seejärel Eesmine tasand, Ülemine tasand, Parem tasand) ja vaates kasti pealkirjaga „Alusta osa“.
4. Olekuriba paremas servas olev kiip ütleb „Võrgutuum“: PartCraft ehitab selles versioonis iga osa võrgutuumaga, seega on ümarad tahud lamedad. Võid kohe modelleerimist alustada.

Kui vaade ütleb, et brauser ei suuda 3D-d näidata või tuum ei laadinud, vt [Tõrkeotsing](topic:troubleshooting#the-app-does-not-start).

## Su esimene osa: auguga plaat

Teed plaadi mõõtmetega 60 × 40 mm, paksusega 10 mm ja läbi 6 mm augu. Ühikud on millimeetrites.

### Visanda ääris

1. Klõpsa vasakul ajaloos **Eesmine tasand**. Tasand tõstetakse vaates esile.
2. Vali tööriistaribal {{ui:Visand}} või vajuta {{key:S}}. Vaade pöördub otse tasandi poole ja joone tööriist on aktiivne.
3. Vajuta {{key:R}} ristküliku tööriista jaoks.
4. Liiguta osuti alguspunkti peale (väike punane ring ristiga). Väike ruut näitab, et see haakub. Klõpsa.
5. Liigu üles ja paremale ning klõpsa uuesti. Sul on ristkülik. Selle jooned on sinised: sinine tähendab, et need saavad veel liikuda.

### Anna mõõdud

1. Vajuta {{key:D}} mõõtmise tööriista jaoks.
2. Klõpsa ülemisel joonel ja siis veidi selle kohal. Avaneb numbriväli praeguse pikkusega.
3. Kirjuta `60` ja vajuta {{key:Enter}}. Ristkülik muutub 60 mm laiuseks.
4. Klõpsa vasakul joonel ja siis veidi selle vasakul. Kirjuta `40` ja vajuta {{key:Enter}}.

Vaate vasakus ülanurgas olev kiip ütleb nüüd **Täielikult määratud** ja jooned muutuvad tindiks (Paber-teemal mustaks, Mudel-teemal heledaks). Iga punkt ja mõõt on fikseeritud.

:::tip
Kui alustasid ristkülikut alguspunktist eemal, ütleb kiip ikka „Alamääratud · 2 vabadusastet“. Vajuta {{key:S}} valiku tööriista jaoks, klõpsa ühel nurgal, {{key:Shift}}+klõps alguspunktil ja vali paremas paneelis {{ui:• Kattuv}}.
:::

### Väljapressi see

1. Vali tööriistaribal {{ui:Välju}} või vajuta {{key:Esc}}, kuni visand sulgub (tavaliselt kaks korda).
2. Vali {{ui:Väljapressimine}}. Ilmub 10 mm tahkis. Ajalukku lisandub „Extrude1“ ja „Sketch1“ on selle all taandatud.
3. Paremal paneelil on väljapressimise seaded. Paksuse muutmiseks kirjuta uus number väljale **Sügavus (mm)** ja vajuta {{key:Enter}} või {{key:Tab}}. Osa ehitatakse kohe uuesti.

### Lisa auk

1. Klõpsa plaadi esiküljel olevale suurele lamedale tahule (väljapressimise lõpp). Kogu tahk tõstetakse esile ja paremal paneelil on **Tahk**.
2. Vali paremal paneelil {{ui:Visand sellel tahul}}.
3. Vajuta {{key:P}} punkti tööriista jaoks ja klõpsa tahu keskpunkti lähedal.
4. Vali {{ui:Välju}}.
5. Vali {{ui:Auk}}. Plaadist läbi läheb 6 mm auk. Vajadusel muuda paremal paneelil väärtust **Läbimõõt (mm)**.

Vasakus alanurgas olev kast **Osa** näitab nüüd mahtu, pindala, mõõtmeid (60 × 40 × 10 mm) ja „Läbivad augud: 1“.

### Salvesta

1. Vajuta {{key:Mod+S}} või vali {{ui:Salvesta}}.
2. Sinu brauser laadib faili `Part1.partcraft.json` allalaadimiste kausta. Fail sisaldab kogu ajalugu: et edasi muuta, ava see uuesti nupu {{ui:Ava}} abil.

Osa ümbernimetamiseks klõpsa enne vaates tühjal alal, nii et midagi pole valitud, ja sisesta paremal paneelil uus **Nimi**.

## Kuhu edasi

- [Joonista esimene visand](topic:sketch-basics) ja [Määra visand täielikult](topic:relations-dimensions) selgitavad visandajat põhjalikult.
- [Muuda osa ajaloo kaudu](topic:edit-history) näitab, kuidas muuta seda, mida oled ehitanud.
- [Ümarda, faasi ja õõnesta](topic:fillet-chamfer-shell) ning [Tee joonis](topic:drawing-pdf) viimistlevad osa. [Mida veel ei ole ehitatud](topic:not-built-yet) loetleb, mida see versioon ei tee, näiteks pühkimised ja loftid.
- [Teisest parameetrilisest modelleerijast tulles](topic:coming-from) loetleb harjumused, mis siin erinevalt töötavad.
- [Klahvid ja hiir](topic:keyboard) on täielik kiirklahvide loend.
- [Selle abi kasutamine](common:help).
