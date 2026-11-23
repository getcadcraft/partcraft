---
title: Tee tööradu ja G-kood (Valmistamine)
summary: Seadista toorik ja töönullpunkt, vali tööriistad, lisa tahu-, tasku-, kontuuri-, puurimis- ja faasitoimingud valides pindu, viimista kogu mudel 3D-s (paralleelne, lainetus), simuleeri toorikut mudeli vastu ülelõigete ja tsükliaja jaoks ning laadi G-kood alla ühelt kolmest sisseehitatud postprotsessorist või ühelt, mille ise muudad.
keywords: täpne STEP, STEP tsehhile, töökoordinaadid, CAM-üleandmine, paralleelne, lainetus, 3d-viimistlus, viimistlus, kuulotsaga frees, tööriistakogu, muuda postprotsessorit, kohandatud postprotsessor, postprotsessori redaktor, adaptiivne, adaptiivne puhastus, konstantne kaasamine, trohoidaalne, hsm, kiirfreesimine, valmistamine, CAM, tööradu, G-kood, NC, CNC, frees, freesimine, tasku, kontuur, profiil, tasandamine, puurimine, vaheldumisi puurimine, G83, G81, G73, faas, toorik, töönihe, G54, postprotsessor, GRBL, LinuxCNC, söötmine ja kiirused, simulatsioon, ülelõige, tsükliaeg
from: f8a03be8
---

Töökeskkond Valmistamine muudab detaili tööradadeks ja kirjutab need G-koodiks. Enamik toiminguid on **2.5-teljelised** freesimised: tööriist seisab vertikaalselt, seinad lõigatakse otse alla ja põhjad on tasased. **3D-jäme** ja **Jääk** freesivad kõverad detailid 3D-s ([3D-jämedus ja jääk-freesimine](topic:rough-3d)); **Paralleelne** ja **Lainetus** viimistlevad need ([3D-viimistlus](topic:finish-3d)). Masinal, millel on pöörlevad teljed, saab iga toimingu teha kallutatud tööriistaga ning kaks toimingut liigutavad pöörlevaid telgi lõikamise ajal ([4- ja 5-teljeline töötlus](topic:multi-axis)). Treipingi jaoks on toimingud ([Treimine](topic:turning)) ja puutesondi jaoks ([Sondimine](topic:probing)). See töötab detaili nimetatud pindadega, mida võrgutuum annab (vt [Võrgutuum](topic:solid-kernels)).

Laboriversioon: kontrolli iga programmi oma juhtseadme simulaatoris ja käivita see esmalt õhus toorikust kõrgemal.

## Seadista

1. Vali töölülitist **Valmistamine**, seejärel {{ui:Uus seadistus}}.
2. Vahekaardil **Seadistus** vali:
   - **Tööriista telg (+Z)**: mis suunas tööriist detaili sisse osutab. Maailma +Y (PartCraft'i üles) on vaikimisi; masina X on siis maailma X ja masina Y on maailma −Z.
   - **Töönullpunkt (G54)**: toorikunurk või keskpunkt, ülemine või alumine, mudeli ülaosa keskpunkt või mudeli nullpunkt.
   - **Toorik**: kast või silinder, kas mudel pluss nihked (küljed, ülaosa, alaosa) või fikseeritud mõõt.
   - **Materjal** (määrab alguse söötmised ja kiirused), **Järeltöötlus** (juhtseade), masina maksimaalne spindli kiirus, kiirliikumise kiirus ja tööriista vahetuse aeg, jahutusvedelik ning programmi number.

## Tööriistad

Vahekaart **Tööriistad** hoiab kogu: lame-, kuul- ja ümarotsaga freesid, puurid, faasifreesid ja tasandusfreesid, igaühel T-number, läbimõõt, soonte arv ja soonte pikkus (lisaks nurgaraadius, tipp- või faasinurk, kus need kohalduvad).

Minu tööriistad saab salvestada brauserisse ja liigutada arvutite vahel failina: vt [Tööriistakogu](topic:tool-library).

Spindli kiirus ja edasiandmine tulevad materjalist: n = 1000 × lõikekiirus / (π × läbimõõt), edasiandmine = n × soonte arv × lõikekoormus (puuride puhul: n × edasiandmine pöörde kohta). Arvud on konservatiivsed alguspunktid avaldatud vahemikest, mitte teie masinale häälestatud; sisesta tööriistatootja lõikekiirus, lõikekoormus, p/min või edasiandmine, et neid üle kirjutada. Kui kiirus ületab masina maksimumi, hoitakse seda seal ja edasiandmine järgib, säilitades lõikekoormuse.

## Lisa toiminguid

Iga tööriistariba nupp lisab toimingu ja seal, kus see vajab geomeetriat, alustab valimist: klõpsa vaates pindu või servi (uuesti klõpsates eemaldad ühe), seejärel {{ui:Valik on tehtud}} või {{key:Esc}}.

| Toiming | Valik | Mida ta teeb |
|---|---|---|
| {{ui:Tahk}} | ei midagi | Siksak-läbikäigud üle kogu tooriku, üle selle servade, kuni mudeli ülaosani |
| {{ui:Tasku}} | lame põhjapind, ümmargune auk või suletud servaahel | Puhastab piirkonna nihkega läbikäikudes seest välja, igal sammul allalõikel; saared (tahud, mis seisavad põhja sees) jäetakse alles; põhi, mis on igast küljest avatud (väljaspool pole midagi kõrgemat), puhastatakse kuni toorikuservani |
| {{ui:Adaptiivne}} | sama mis Tasku | Puhastab sama piirkonna läbikäikudega, mis igaüks lõikab kindla laiuse (**Kaasamine**, osa läbimõõdust), nii et lõikur ei võta kunagi täislaiust soont, isegi nurkades; siseneb spiraaliga ja viimistleb seinad igal tasemel. Kitsad lõiked lubavad sügavamat allalõiget ja suuremat edasiandmist |
| {{ui:Kontuur}} | lame tahk (selle piirjoon), ümmargune tahk või servad | Järgib piirjoont, nihutatuna tööriista raadiuse võrra, väljapoole või sissepoole, sisse- ja väljasõidukaartega ning valikuliste sildadega |
| {{ui:Puurimine}} | augud (klõpsa augu seinal või serval) | Puurib iga augu fikseeritud tsükliga: vaheldumisi puurimine (G83), puurimine (G81) või laastu purustamine (G73); või anna läbimõõt, et puurida iga selle suurusega auk |
| {{ui:Faas}} | tahu piirjoon või servad | Käivitab faasifreesi mööda serva nii, et see lõikab seadistatud laiuse |
| {{ui:Paralleelne}} | ei midagi (kogu mudel) | 3D-viimistlus paralleelsete joontega mis tahes nurga all, järgides pinda kuul-, ümar- või lameotsaga freesiga. Vt [3D-viimistlus](topic:finish-3d) |
| {{ui:Lainetus}} | ei midagi (kogu mudel) | 3D-viimistlus läbikäikudega, mis on pinnal määratud kaugusel, nii et nendevaheline hari on soovitud kõrgusega |

Vali toiming loendis, et muuta selle tööriista, kõrgusi (vabanemine, tagasitõmme, söötmiskõrgus, ülemine, alumine), allalõiget, sammu, jäetavat ülemõõtu, viimistlusläbikut, sisenemist (spiraal, kaldrada või sukeldamine), päripidi lõiget, sildu või tsüklit. {{ui:Üles}} ja {{ui:Alla}} järjestavad ümber, {{ui:Lülita välja}} jätab välja, {{ui:Kustuta}} eemaldab. Kõik on tagasivõtmise ajaloos ja salvestatud detailifailis.

Tasku sammu laius on kõige rohkem pool tööriista läbimõõdust, nii et iga punkt selle põhjas jääb ühe tööriista raadiuse piiresse läbikäigust. Sisenurgad jäävad tööriista raadiuse võrra ümaraks.

**Adaptiivne puhastus** hoiab lõikuri kaasamise lähedal ühel väärtusel. Kaasamine 0.15 läbimõõdust on kaasamisnurk umbes 46°: lõikuri serva kaar materjalis. Nihkega tasku seevastu lõikab esimesel läbikäigul täislaiuses ja keerleb iga sisenurgas kaugemale. Läbikäikude vahel jääb tööriist alla seal, kus see liigub läbi lõigatud õhu, ja tõuseb ning laskub lõigatud õhus mujal. Läbikäigud arvutatakse peenel ruudustikul piirkonnas (lahtrid umbes kaksteistkümnendik tööriista raadiusest), nii et kaasamine võib minna kuni umbes ühe lahtri võrra laiemaks kui seatud; seinad viimistletakse täpselt. Suur avatud piirkond teeb pika programmi paljude lühikeste liikumistega.

## Simuleeri

Tööradu tehakse pärast iga muudatust uuesti (ka detaili oma). {{ui:Simuleeri}} näitab ka tooriku jäänud osa pärast kogu programmi. Paneel näitab:

- **Tsükliaeg**: edasiandmise liikumised oma kiirusel, kiirliikumised sirgjoontena seadistuse kiirliikumise kiirusel, pluss tööriista vahetuse aeg. Päris masinad kiirendavad, nii et nad võtavad kauem.
- **Ülelõiked**: kohad, kuhu tööriist läks rohkem kui 0.02 mm detaili pinnast allapoole. Punased märgid näitavad neid vaates.
- **Detailile jäänud toorik**.

Toorik on ülaosa kõrgusekaart (Z-kaart), seega ei saa see näidata alalõikeid. Lohista **Esitus**, et liigutada tööriista mööda programmi. Vaates on edasiandmise liikumised tahked ja kiirliikumised katkendjoonega, üks värv toimingu kohta.

Kui **Näita simuleeritud toorikut** on sisse lülitatud, värvitakse toorik mudeli suhtes lahter-lahtrilt: **roheline**, kus see on mudelil (0.02 mm piires); **punane**, kus tööriist lõikas mudelisse; ning kus toorik on mudelil jäänud, **kollane** õhukese kihi korral, **oranž** rohkem, tuhmudes **halliks** lõikamata toorikuks 1 mm või rohkem. Värvid tehakse iga muudatusega uuesti samast kõrgusekaardist, mis annab paneeli arvud, nii et roheline ja punane ühtivad reaga Ülelõiked. Kiirkaart lõikab mudelisse tahtlikult ja näitab servas punast.

## Postita G-kood

Vali juhtseade jaotises **Järeltöötlus** ja vajuta {{ui:Laadi G-kood alla}} (või tööriistaribal {{ui:Järeltöötlus}}):

| Juhtseade | Fail | Märkused |
|---|---|---|
| Fanuc-tüüpi ISO | .nc | %, O-number, reanumbrid, T M6 koos G43 H-ga, fikseeritud tsüklid |
| GRBL | .nc | Tööriistavahetajat ega fikseeritud tsükleid ei ole: tööriista vahetus peatub käsuga M0, puurimine kirjutatakse lihtsate liikumistena |
| LinuxCNC | .ngc | T M6 koos G43 H-ga, fikseeritud tsüklid, M2 |
| Fanuc-tüüpi treipink | .nc | Treiprogrammide jaoks: X läbimõõduna, edasiandmine pöörde kohta, G96 G50 piiri all, G32 keermestamine |
| LinuxCNC treipink | .ngc | Treiprogrammide jaoks: G7 läbimõõdud, G95, G96, G33 keermestamine; ei kirjuta lähtepunkti liikumist |
| Oma | mis tahes | Ise kirjutatud või muudetud postprotsessor: {{ui:Muuda postprotsessorit…}}, {{ui:Uus postprotsessor…}}, {{ui:Impordi postprotsessori fail…}} |

Iga fail algab kommentaaridega programmi, tooriku, töönihke ja tööriistade kohta. Koordinaadid on millimeetrites kolme komakohaga. {{ui:Tööraja CSV}} ja {{ui:Tööraja JSON}} eksportivad liikumised ise.

**Kontrolli väljundit oma masina simulaatoris enne lõikamist ja käivita see esmalt õhus toorikust kõrgemal.** Kolm sisseehitatud postprotsessorit on lähtepunktid, mis järgivad juhtseadmete dokumenteeritud käitumist; neid ei ole tõestatud ühelgi kindlal masinal. Postprotsessor, mida muudad, on sinu enda tõestada. Kuidas üks kirjutada: [Muudetavad postprotsessorid](topic:post-processors).

## Täpne STEP tsehhile

Vahekaardi **Toimingud** G-koodi nuppude all laadib {{ui:Täpne STEP (töökoordinaadid)}} alla `<part>-work.step`: detail täpse tahkisena (tõelised silindrid aukude ja tappide jaoks, tõelised ringid nende servade jaoks), mille nullpunkt on selle seadistuse töönullpunktis ja Z on mööda tööriista telge. Need on koordinaadid, mida G-kood kasutab, nii et tsehhi enda CAM-programm või kontrollija joondab mudeli programmiga ilma seda liigutamata. Fail sisaldab ainult detaili, mitte toorikut ega tööradu.

{{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab sama tahkise detaili enda asendis (Z üles): vt [Eksport printimiseks, STEP ja DXF](topic:export-files#for-other-cad-programs-step).

## Piirangud

- Tasku, kontuur, puurimine ja faas on 2.5-teljelised. Kõverad detailid jämedatakse ja viimistletakse 3D-s oma toimingutega ([3D-jämedus ja jääk-freesimine](topic:rough-3d), [3D-viimistlus](topic:finish-3d)). Adaptiivne puhastus on 2D (lamedad põhjad).
- Kallutatud tööriistad, 5-teljeline ja 4. telje viimistlus, treimine ja sondimine on olemas, igaühel oma piirangud, ja **ükski neist ei ole käivitatud masinal**: vt [4- ja 5-teljeline töötlus](topic:multi-axis), [Treimine](topic:turning) ja [Sondimine](topic:probing).
- Hoidikuid ja varsi ei kontrollita kokkupõrgete suhtes; hoiatus ilmub, kui lõige on sügavam kui soone pikkus.
- Söötmised ja kiirused on alguspunktid. Postprotsessor on muudetav tekst, kuid see otsustab ainult selle, kuidas liikumised kirjutatakse; ta ei saa muuta tööradu, lisada telge ega teada sinu masinast ([Muudetavad postprotsessorid](topic:post-processors) loetleb, mida ta ei suuda).

## Saada programm masinale

CadCraft Studio töölaua versioonis, kui masin on Studios seadistatud, ilmub nupu {{ui:Laadi G-kood alla}} kõrvale **Saada masinale…** ja laeb sama programmi üles sinu võrgus olevale masinale. Seda ei käivitata kunagi PartCraftist: käivita see masina juures, kui on selge. Brauseris nuppu ei näidata (veebileht ei pääse sinu võrgus masinani): laadi programm selle asemel alla.
