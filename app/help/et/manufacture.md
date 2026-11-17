---
title: Tööradade ja G-koodi tegemine (Valmistamine)
summary: Seadista tooriku ja töönullpunkt, vali tööriistad, lisa tahkude, taskute, kontuuride, puurimise ja faasi toimingud tahke valides, viimistle kogu mudel 3D-s (paralleelne, lainetus), simuleeri tooriku ja mudeli vastandit vigade ja tsükliaja leidmiseks ning laadi G-kood alla ühest kolmest sisseehitatud postprotsessorist või ise muudetud postist.
keywords: täpne STEP, STEP töökojale, töökoordinaadid, CAM-ülekanne, paralleelne, lainetus, 3D-viimistlus, viimistlus, kuulfrees, tööriistateek, muuda posti, kohandatud post, posti redaktor, adaptiivne, adaptiivne eemaldamine, konstantne haardumine, trohoidaalne, HSM, kiirlõikus, valmistamine, CAM, töörada, G-kood, NC, CNC, freesimine, tasku, kontuur, profiil, tasandamine, puurimine, G83, G81, G73, faas, töönihe, G54, postprotsessor, GRBL, LinuxCNC, etteanded ja kiirused, simulatsioon, vigane lõige, tsükliaeg
from: beeb29aa
---

Tööruum Valmistamine muudab detaili 3-teljelise freesmasina tööradadeks ja kirjutab need G-koodina. Enamik toiminguid on **2.5-teljelised**: tööriist jääb vertikaalseks, seinad lõigatakse otse alla ja põhjad tasaseks. **Paralleelne** ja **Lainetus** viimistlevad kõverpindu 3D-s (vt [3D-viimistlus](topic:finish-3d)); tööriist jääb ikka vertikaalseks (kolm telge, kallutamist pole). See töötab detaili nimetatud tahkudel, mida võrgukern annab (vt [Võrgukern](topic:solid-kernels)).

Labori versioon: kontrolli iga programmi oma juhtimissüsteemi simulaatoris ja käivita see kõigepealt materjalist õhus.

## Seadistamine

1. Vali tööruumide lülitist **Valmistamine** ja seejärel {{ui:Uus seadistus}}.
2. Vahekaardil **Seadistus** vali:
   - **Tööriista telg (+Z)**: mis suunas tööriist detaili sisse osutab. Vaikimisi on maailma +Y (PartCraft'i üles); siis on masina X maailma X ja masina Y maailma −Z.
   - **Töönullpunkt (G54)**: tooriku nurk või keskpunkt, ülemine või alumine, mudeli ülemine keskpunkt või mudeli nullpunkt.
   - **Tooriku**: kast või silinder, kas mudel plus nihked (küljed, ülaosa, alumine) või fikseeritud mõõt.
   - **Materjal** (määrab alguse etteanded ja kiirused), **postprotsessor** (juhtimine), masina maksimaalne spindli kiirus, kiirliikumise kiirus ja tööriista vahetuse aeg, jahutusvedelik ning programmi number.

## Tööriistad

Vahekaart **Tööriistad** sisaldab teeki: lame-, kuul- ja nurgaraadiusega otsfreesid, puurid, faasifreesid ja tahkfreesid, igaühel T-number, läbimõõt, rihid ja rihvi pikkus (lisaks nurgaraadius, tipu- või faasinurk, kus see kohaldub).

Enda tööriistu saab salvestada brauserisse ja viia failina arvutist arvutisse: vt [Tööriistateek](topic:tool-library).

Spindli kiirus ja etteanne tulevad materjalist: n = 1000 × lõikekiirus / (π × läbimõõt), etteanne = n × rihid × lastukoormus (puuridel: n × etteanne pöörde kohta). Arvud on konservatiivsed alguspunktid avaldatud vahemikest, mitte sinu masina järgi häälestatud; sisesta oma tööriistatootja lõikekiirus, lastukoormus, pöörded või etteanne, et neid asendada. Kui kiirus ületab masina maksimumi, hoitakse see seal ja etteanne järgib, säilitades lastukoormuse.

## Toimingute lisamine

Iga tööriistariba nupp lisab toimingu ja kus see vajab geomeetriat, alustab valimist: kliki vaates tahkudele või servadele (uuesti klikk eemaldab ühe), seejärel {{ui:Valik on tehtud}} või {{key:Esc}}.

| Toiming | Valik | Mida see teeb |
|---|---|---|
| {{ui:Tahk}} | ei midagi | Siksakilised läbikäigud üle kogu tooriku, üle selle servade, alla mudeli ülaosani |
| {{ui:Tasku}} | lame põhjatahk, ümar auk või suletud servaahel | Puhastab piirkonna nihkega läbikäikudena seest välja, igal süvenemisel; saared (põhjast püsti seisvad tahud) jäetakse alles; põhi, mis on igast küljest avatud (väljaspool pole midagi kõrgemat), puhastatakse välja tooriku servani |
| {{ui:Adaptiivne}} | sama mis {{ui:Tasku}} | Puhastab sama piirkonna läbikäikudega, millest igaüks lõikab kindla laiuse (**Haardumine**, osa läbimõõdust), nii et lõikur ei võta kunagi täislaiust soont, isegi nurkades; sisse läheb spiraalina ning viimistleb seinad igal tasemel. Kitsad lõiked lubavad sügavamat süvenemist ja kõrgemat etteannet |
| {{ui:Kontuur}} | lame tahk (selle kontuur), ümar tahk või servad | Järgib kontuuri, mis on nihutatud tööriista raadiusega, väljas või seespool, sissesõidu- ja väljasõidukaaride ning valikuliste sildadega |
| {{ui:Puurimine}} | augud (kliki augu seinale või servale) | Puurib iga augu fikseeritud tsükliga: lükkeldus (G83), puurimine (G81) või laastu purustus (G73); või anna läbimõõt, et puurida iga selle suurusega auk |
| {{ui:Faas}} | tahu kontuur või servad | Viib faasifreesi mööda serva nii, et see lõikab sinu määratud laiuse |
| {{ui:Paralleelne}} | ei midagi (kogu mudel) | 3D-viimistlus paralleelsete joontena mis tahes nurga all, järgides pinda kuul-, nurgaraadiusega või lame otsfrees. Vt [3D-viimistlus](topic:finish-3d) |
| {{ui:Lainetus}} | ei midagi (kogu mudel) | 3D-viimistlus läbikäikudena, mis on määratud kauguse kaugusel üksteisest üle pinna, nii et nendevaheline hari on sinu nõutud kõrgusega |

Vali toiming loendist, et muuta selle tööriista, kõrgusi (vabakäik, tagasitõmme, etteandekõrgus, ülaosa, alumine), sügavuse sammu, sammuvahet, jäetavat tooriku ruumi, viimistlusläbimist, sisenemist (spiraal, rambp või sukeldus), kaasfreesimist, sildu või tsüklit. {{ui:Üles}} ja {{ui:Alla}} järjestavad ümber, {{ui:Lülita välja}} jätab välja, {{ui:Kustuta}} eemaldab. Kõik on tagasivõtmise ajaloos ja salvestatud detailifaili.

Tasku sammuvahe on kõige rohkem pool tööriista läbimõõdust, nii et iga punkt selle põhjas jääb ühe tööriista raadiuse piiresse läbikäigust. Seespoolsed nurgad säilitavad tööriista raadiuse.

**Adaptiivne eemaldamine** hoiab lõikuri haardumise ühe väärtuse lähedal. 0.15 läbimõõdust haardumine on umbes 46° haardenurk: lõikuri serva kaar materjalis. Nihutatud tasku seevastu lõikab esimesel läbikäigul täislaiuses ja keerab iga seespoolse nurga ümber kaugemale. Läbikäikude vahel jääb tööriist allapoole seal, kus liigub läbi lõigatud õhu, ja tõuseb ning laskub mujal lõigatud õhus. Läbikäigud arvutatakse piirkonnal peenel võrgul (lahtrid umbes kaheteistkümnendik tööriista raadiusest), nii et haardumine võib minna kuni umbes ühe lahtri võrra seatust laiemaks; seinad viimistletakse täpselt. Suur avatud piirkond teeb pika programmi paljude lühikeste liigutustega.

## Simuleeri

Tööradu tehakse iga muudatuse järel uuesti (ka detaili oma). {{ui:Simuleeri}} näitab lisaks tooriku jääki pärast kogu programmi. Paneel näitab:

- **Tsükliaeg**: etteandeliikumised oma etteandel, kiirliikumised sirgete joontena seadistuse kiirliikumise kiirusel, pluss tööriista vahetuse aeg. Päris masinad kiirenevad, seega võtavad kauem aega.
- **Vigastused**: kohad, kus tööriist läks detaili pinnast rohkem kui 0.02 mm allapoole. Punased märgid näitavad neid vaates.
- **Tooriku jääk detailil**.

Toorik on ülaosa kõrgusekaart (Z-kaart), seega ei saa see näidata alalõikeid. Lohista **Esitust**, et liigutada tööriista mööda programmi. Vaates on etteandeliikumised tahked ja kiirliikumised katkendlikud, iga toimingu kohta üks värv.

Kui **Näita simuleeritud toorikut** on sees, värvitakse toorik mudeli järgi lahtri kaupa: **roheline**, kus see on mudelil (0.02 mm piires), **punane**, kus tööriist lõikas mudelisse, ning kus mudelile jääb tooriku materjali, **kollane** õhukese kihi korral, **oranž** rohkema korral, hallumas kuni **halli** lõikamata toorikuni 1 mm või rohkem. Värvid tehakse iga muudatusega uuesti samast kõrgusekaardist mis paneeli arvud, nii et roheline ja punane ühtivad rea Vigastused järgi. Faas lõikab mudelisse tahtlikult ja näitab oma serval punast.

## G-koodi postitamine

Vali juhtimine jaotisest **Postprotsessor** ja vajuta {{ui:Laadi G-kood alla}} (või tööriistaribal {{ui:Järeltöötlus}}):

| Juhtimine | Fail | Märkused |
|---|---|---|
| Fanuc-tüüpi ISO | .nc | %, O-number, rearvunumbrid, T M6 koos G43 H-ga, fikseeritud tsüklid |
| GRBL | .nc | Tööriistavahetajat ega fikseeritud tsükleid pole: tööriista vahetus peatub käsuga M0, puurimine kirjutatakse lihtsate liigutustena |
| LinuxCNC | .ngc | T M6 koos G43 H-ga, fikseeritud tsüklid, M2 |
| Oma | mis tahes | Postprotsessor, mille kirjutasid või muutsid: {{ui:Muuda postprotsessorit…}}, {{ui:Uus postprotsessor…}}, {{ui:Impordi postprotsessori fail…}} |

Iga fail algab kommentaaridega programmi, tooriku, töönihke ja tööriistade kohta. Koordinaadid on millimeetrites, 3 kohaga pärast koma. {{ui:Tööraja CSV}} ja {{ui:Tööraja JSON}} ekspordivad liigutused ise.

**Kontrolli väljundit oma masina enda simulaatoris enne lõikamist ja käivita see kõigepealt materjalist õhus.** Kolm sisseehitatud postprotsessorit on lähtepunktid, mis järgivad juhtimissüsteemide dokumenteeritud käitumist; neid pole tõestatud ühelgi kindlal masinal. Post, mida muudad, on sinu enda tõestada. Kuidas kirjutada: [Postprotsessorid](topic:post-processors).

## Täpne STEP töökojale

G-koodi nuppude all vahekaardil **Toimingud** laeb {{ui:Täpne STEP (töökoordinaadid)}} alla `<part>-work.step`: detail täpse tahkisena (augud ja ülendid on tõelised silindrid, nende servad tõelised ringid), mille nullpunkt on selle seadistuse töönullpunkt ja Z on tööriista telje suunas. Need on koordinaadid, mida G-kood kasutab, nii et töökoja enda CAM-programm või kontrollija joondab mudeli programmiga ilma seda liigutamata. Fail sisaldab ainult detaili, mitte toorikut ega tööradu.

{{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab sama tahke detaili enda asendis (Z üles): vt [Ekspordi printimiseks, STEP ja DXF](topic:export-files#for-other-cad-programs-step).

## Piirangud

- Taskud, kontuurid, puurimine ja faasid on 2.5-teljelised. Kõverpinnad saab 3D-s viimistleda ([paralleelne ja lainetus](topic:finish-3d)), kuid mitte 3D-s karedalt töödelda (koonus jääb astmetena, kuni viimistled), ega ole jäägi töötlemist. Adaptiivne eemaldamine on 2D (lamedad põhjad).
- Ainult kolm telge: pole kallutamist, pole keeramist, pole kontrolli.
- Hoidikuid ja kaelu ei kontrollita kokkupõrgete suhtes; hoiatus ilmub, kui lõige on sügavam kui rihi pikkus.
- Etteanded ja kiirused on alguspunktid. Postprotsessor on tekst, mida saad muuta, kuid see otsustab ainult, kuidas liigutused kirjutatakse; ta ei saa muuta tööteed, lisada telgi ega tunda sinu masinat ([Postprotsessorid](topic:post-processors) loetleb, mida ta ei saa teha).

## Saada programm masinale

CadCraft Studio töölauarakenduses, kus masin on Studios seadistatud, ilmub **Saada masinale…** nupu **Laadi G-kood alla** kõrvale ja laeb sama programmi sinu võrgus olevale masinale. Seda ei käivitata kunagi PartCraftist: käivita see masina juures, kui on selge. Brauseris nuppu ei näidata (veebileht ei pääse sinu võrgus oleva masinani): laadi programm selle asemel alla.
