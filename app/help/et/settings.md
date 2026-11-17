---
title: PartCraft'i sätted
summary: Vali, milline hiirenupp vaadet pöörab, tee puuteplaadi pühkimine detaili pööramiseks ja nihutamiseks, lülita automaatsed seosed visandamisel sisse või välja ning määra, mitu lõime lahendajad kasutavad.
keywords: sätted, eelistused, valikud, hiir, keskmine nupp, ratta nupp, orbiit, pööra, keera, puuteplaat, kerimine, pühkimine, nipsutus, nipistamine, seosed, piirangud, automaatne piiramine, automaatsed seosed, tabamine, koinkident, lõimed, lahendaja lõimed, tuumad, protsessorid, mitmelõimeline, kiirem lahendus, paralleelne
from: 759edcaf
---

Ava {{ui:Sätted}} rakenduse ribal oleva hammasratta või klahvikombinatsiooniga {{key:Mod+,}}. Esimene vahekaart, {{ui:PartCraft}}, sisaldab selle rakenduse sätteid; {{ui:Üldine}} sisaldab neid, mida kõik CadCraft'i rakendused jagavad (teema, tööriistariba, paneelid). PartCraft'i sätted kehtivad ainult rakenduses: muudad neid siin ja see brauser mäletab neid. {{ui:Lähtesta PartCraft'i sätted}} seab kõik algseisu.

## Vaate pööramine

- **Vasak nupp** (algseis): lohista vasaku nupuga detaili pööramiseks; lohista parema või keskmise nupuga nihutamiseks.
- **Keskmine nupp**: vajuta ratast ja lohista detaili pööramiseks; hoia all {{key:Shift}} (või {{key:Ctrl}}, või ⌘) keskmise nupuga või lohista parema nupuga nihutamiseks. Vasak nupp valib ainult pindu, servi ja tasandeid, nii et väike liigutusega klõps ei pööra detaili. Paljud CAD-programmid töötavad nii.

Ratas suurendab kursori kohal mõlemal juhul. Visandis nihutavad parem ja keskmine nupp nagu varem.

## Kerimine: hiireratas või puuteplaat

- **Selgita välja** (algseis): PartCraft jälgib kerimist. Külgsuunaline või peen kerimine, nagu puuteplaat saadab, pöörab detaili; terved ratta sammud suurendavad.
- **Hiireratas**: kerimine suurendab alati kursori suunas.
- **Puuteplaat**: pühi kahe sõrmega detaili pööramiseks, hoia all {{key:Shift}} ja pühi nihutamiseks, nipista suurendamiseks. Visandis nihutab kahe sõrmega pühkimine visandit.

Nipistamine suurendab igas valikus. Kui „Selgita välja“ arvab sinu hiire või puuteplaadi kohta valesti, vali see, mis sul on. Lisaks vaata [Puuteplaat, puuteekraan ja väikesed ekraanid](topic:trackpad-and-touch).

## Visandamine: seosed joonistamise ajal

**Lisa seosed joonistamise ajal** (algselt sisse): klõps, mis tabab punkti, muudab uue punkti sellega koinkidentseks; klõps kõvera peal paneb punkti sellele kõverale; ja peaaegu horisontaalne või vertikaalne joon muutub horisontaalseks või vertikaalseks. Vaata [Seosed ja mõõtmed](topic:relations-dimensions).

Lülita see välja, kui tahad geomeetriat paigutada teiste lähedale ilma seda neist sõltuma panemata. Kursor tabab ikka punkte ja kõveraid, kuid midagi ei ühendata: ahelana joonistatud jooned ei jaga oma otsi, nii et lohistamine võib need lahti tõmmata. Lisa soovitud seosed ise parempoolsest paneelist. Suletud profiil ekstrudeerub ikka, kui selle otsad kokku puutuvad.

:::note
Seade muudab ainult seda, mida uus joonistamine lisab. Visandi olemasolevad seosed jäävad alles ning nurgaviimistlus teeb endiselt oma puutujakaare ja raadiuse.
:::

## Visandamine: mõõtmine joonistamise ajal

**Mõõtmine joonistamise ajal** (algselt sisse): kui joont, ristkülikut, ringi või kaart joonistatakse, täidab arvu sisestamine kursori kõrval oleva suuruskasti ({{key:Tab}} viib järgmisesse kasti) ja {{key:Enter}} joonistab kuju selles suuruses, iga sisestatud suuruse kohta juhtiva mõõtmega. Väljas: arvu sisestamine joonistamise ajal ei tee midagi ja kujud joonistatakse ainult klõpsudega. Vaata [Sisesta suurus joonistamise ajal](topic:sketch-basics#type-the-size-as-you-draw).

## Nurgaindikaator

Mida 3D-vaate nurgas näidatakse: **Vaatekuup** (algseis; üleval paremal — klõpsa pinnale, servale või nurgale, et sealt vaadata; lohista seda orbiidiks; lohista selle kompassi rõngast mudeli pööramiseks), **Telje ikoon** (väike X, Y, Z märk all vasakul, mis pöördub vaatega: X punane, Y roheline, Z sinine) või **Puudub**. Kumbagi ei näidata visandamise ajal ega joonislehel. Vaata [Vaatekuup](topic:view-cube).

## Lahendaja lõimed

Mitu lõime simulatsioonilahendajad tohivad kasutada. **Automaatne** (algseis) võtab ühe vähem kui arvuti loogilisi protsessoreid (kõige rohkem 16), nii et leht jääb reageerivaks, kui uuring lahendab; või vali number. Suured vokselitööd, nõtkumine, pinge aja jooksul ja voog lahenduvad mitmel lõimel kiiremini (meie mõõtmiste järgi umbes 2× 4 lõimel 80,000 kuubi puhul, rohkem tühjal arvutil). Alla umbes 20,000 tundmatu jäävad mudelid ühele lõimele, sest lõimede käivitamine maksab rohkem, kui säästab. Lõimitud lahendus annab sama vastuse kui üks lõim (ümardamiseni: summad liidetakse teises järjekorras). Iga uuringu tulemuste loend näitab **N lõime** või **1 lõim** koos põhjusega jaotises **Lahendaja**.

Lõimed nõuavad, et leht oleks **ristpäritolu isoleeritud** (brauser lubab töötajatel mälu jagada ainult siis). Labori leht on; kus ei ole, ütleb see seade seda („See leht pole ristpäritolu isoleeritud, seega lahendajad töötavad ühel lõimel, olenemata siin valitust.“) ja iga lahendus kasutab ühte lõime. Kõik muu töötab samamoodi ja vastused on samad.

Laminaarse voo uuringud kasutavad samuti lõimi (umbes 2.5× 4 lõimel 54,000 vedelikuraku puhul, sama vastus viimase numbrini). Kvadraatilise tetraeedri lahendaja ja soojusülekanne töötavad ühel lõimel: nende lõimimine mõõdeti meie katsearvutis aeglasemaks, sest nende lahendajaid piirab mälu kiirus ja samm, mida ei saa jagada.

### Oma veebiserveril

Kui käitad PartCraft'i oma serverist, töötab see nagu serveeritud. Lahendaja lõimede jaoks peab server saatma PartCraft'i lehele kaks päist:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache puhul kausta `.htaccess`-is (vajab mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx puhul `location`-is, mis PartCraft'i serveerib:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Lae leht uuesti: Sätted › Lahendaja lõimed pakub siis **Automaatne** koos sinu arvuti arvuga. Teine päis takistab brauserit laadimast midagi teisest saidist, mis seda ei luba, mis on PartCraft'i jaoks iseseisvalt korras, sest see laeb kõik oma kaustast.
