---
title: Treimine treipingil
summary: Otsa, jämedus, viimistlus, soon, eraldamine, keere ja puurimine pööratud detailil, lähtudes kontuurist, mille detail moodustab pöörlemisel. Treitööriistad, söötmised pöörde kohta, treipingi postprotsessorid ja mis pole tõestatud.
keywords: treimine, treipink, keeramine, otsa lõikamine, jämedus, viimistlus, soon, soonimine, eraldamine, lõikamine, keere, keermestamine, g32, g33, g96, pidev pinnakiirus, css, nina raadius, tera, varras, kinnitus, läbimõõt, söötmine pöörde kohta, g71, g76
from: d8cc53b0
---

Valmistamises on seitse toimingut treipingile. Need töötavad igal detailil: lõigatakse **kontuur, mille detail moodustab pöörlemisel** toorikuvarda ümber, nii et mitte-ümmargune detail treitakse ümara kujuni, mis seda hoiab.

**Siin ei ole midagi treipingil käivitatud.** Teed on testidega geomeetria vastu kontrollitud; kaks treipingi postprotsessorit järgivad juhtseadmete dokumenteeritud koode. Tõesta programm oma juhtseadme simulaatoris ja esmalt õhus.

## Seadista

Vahekaardil **Seadistus**:

- **Tööriista telg** on spindli telg, treipingi Z. Detaili esikülg on +Z-l; kinnitus hoiab teist otsa.
- **Toorik**: vali {{ui:Silinder}}, varras. Selle ülaosa nihe on see, mida otsa lõikamine eemaldab.
- **Töönullpunkt**: toorikuülaosa või mudeli ülaosa keskpunkt paneb Z0 esikülje peale, tavaline koht.
- **Juhtseade**: {{ui:Fanuc-tüüpi treipink (.nc)}} või LinuxCNC treipink (.ngc). Freesi postprotsessor keeldub treiprogrammist ja ütleb seda.
- **Max spindli kiirus**: piir, mille all pinnakiirus hoitakse.

{{ui:Veel}} Valmistamise tööriistaribal loetleb seitse treitoimingut vahekaardi **Toimingud** ülaosas. Esimene, mille lisad, toob oma tööriista: **treitera** (nina raadius, tera nurk, lõikeserva nurk) või **soonimisterä** (laius, nurga raadius, kui sügavale ulatub). Muudad neid vahekaardil **Tööriistad**. Söötmised on pöörde kohta ja kiirus on pinnakiirus m/min, mida juhtseade hoiab, kui läbimõõt muutub; anna tööriistale oma p/min, et kiirus fikseerida.

## Toimingud

| Toiming | Mida ta teeb |
|---|---|
| {{ui:Tahk}} | Tasandab varda ees detaili suunas, sammu kaupa, väljast kuni just keskpunktini. |
| {{ui:Jäme}} | Läbikäigud piki Z-d **lõikesügavuse** kaupa, kuni kontuurini pluss **jäetav ülemõõt**; seejärel kord mööda kontuuri, et astmed maha võtta. Kahe õla vahelist orgu sisestatakse ühe lõikesügavuse sukeldamisega. |
| {{ui:Viimistlus}} | Üks läbik mööda kontuuri murdosa tööriista söötmisest. |
| {{ui:Soon}} | Sukeldab tera kõrvuti kõikjal, kus see võib võtta rohkem kui jäänud ülemõõdu piir: soonid, mida treitera ei ulatunud. **Alates / kuni Z** kitsendab seda. |
| {{ui:Eralda detail}} | Lõikab detaili lahti selle tagumise tahu taha, kuni veidi üle keskpunkti, koos tõmmetega, kui need on seadistatud. |
| Keere | Välimine keere: suur läbimõõt, samm, pikkus, läbikäikude arv. Sügavus 0 tähendab 0.6134 × sammu (60° keere). Iga läbik võtab sama laastupinna; kevadläbikud kordavad viimast. |
| {{ui:Puurimine}} | Puur keskjoonel sügavuseni, tõmmetega. |

## Kuidas tööriist hoitakse detailist eemal

Tera on käsitletud sellisena, nagu ta on: selle nina ring ja selle taga tagumine serv, sirge joon, mille nurk on 180° miinus lõikeserva nurk ja tera nurk. See kuju lastakse kontuurile igas punktis piki Z-d ja tee on koht, kus see jääb seisma. Seega:

- **Nina raadius on juba teel.** Postprotsessorid ei kirjuta `G41` ega `G42`; koordinaadid on tööriista programmeeritud punkt (ruudu nurk ümber nina).
- Tera **ei saa järgida seina, mis on järsem kui tema tagumine serv**. Õla taga olev soon jäetakse rahule ja viimistlustoiming ütleb, kui suure osa kontuurist ta ei jõudnud. {{ui:Soon}}-toiming võtab selle.
- Toorikut jälgitakse piki Z-d pärast iga lõiget, nii et jämedus ei lõika õhku, soonimine leiab, mis jäi, ja iga toiming näitab eemaldatud mahtu ning seda, kas ta lõikas detaili sisse.

## Piirangud

- **Ainult välississetreimine**: ei ole puurimistööriista, sisemisi soone ega keeri, ei ole otsasoone.
- Üks spindel, detail hoitud −Z-s. Ei ole alamspindlit, elavaid tööriistu, C- ega Y-telge, stabiilset toetust ega vastutuugi liigutusi.
- Teed on sirgjooned: kõverad on lühikesed jooned tolerantsi piires (ei `G2`/`G3`), ja jämedus ning keermestamine kirjutatakse läbiku kaupa (ei `G71` ega `G76` tsükleid).
- Keermestamine on sirged läbikud sirge väljatõmbega lõpus; anna keermele vabastussoon. Keere ei ole toorikus näidatud.
- Puurimine keskel ei muuda toorikumudelit.
- Hoidik, revolver ja kinnitus ei ole kontrollitud. Seadista **Peata Z juures**, et hoida tööriist kinnitusest eemal.
- Söötmised ja kiirused on alguspunktid, nagu freesimisel.
