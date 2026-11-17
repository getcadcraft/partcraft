---
title: Draga út upphækkun og skera í gegnum hana
summary: Breyttu skissu í fast efni með Útdrætti, stilltu dýpt sem blinda, miðflata, upp að eða í tvær áttir, skástig eða eina útlínu skissunnar, og teiknaðu síðan skissu á fleti og notaðu Klippa til að búa til hol eða gegnumrauf.
keywords: útdráttur, upphækkun, útskurður, klippa, útdreginn útskurður, hol, í gegnum allt, blindur, miðflötur, snúa við, dýpt, klippa-útdráttur, upphækkunar-útdráttur, púði, upp að fleti, upp að næsta, upp að hornpunkti, forskrift frá yfirborði, átt 2, tvær áttir, skástig við útdrátt, skástig, útlína, svæði, valdar útlínur
from: 3b13ff10
---

{{ui:Útdráttur}} ýtir lokuðu sniði skissu beint út úr plani hennar til að búa til efni. {{ui:Klippa}} gerir það sama en fjarlægir efni. Báðir eru sami eiginleikinn undir yfirborðinu; þú getur skipt öðrum yfir í hinn síðar.

## Draga út upphækkun

1. Teiknaðu lokað snið og lokaðu skissunni (sjá [Teiknaðu fyrstu skissuna þína](topic:sketch-basics)). Hún helst valin.
2. Veldu {{ui:Útdráttur}}.

 10 mm fast efni birtist, "Extrude1" bætist í söguna með skissunni inndreginni undir, og stöðustikan segir "Extrude1 bætt við. Breyttu tölunum hægra megin."

**Hvaða skissa er notuð:** skissan sem þú lokaðir síðast, eða skissan sem er valin í sögunni. Ef ekkert er valið tekur PartCraft nýjustu skissuna sem engin eiginleiki notar enn. Ef engin er til: "Búðu fyrst til skissu: veldu plan, Skissa, teiknaðu lokað snið, Hætta."

### Stilltu dýpt og átt

Í hægra spjaldinu:

| Stilling | Val | Sjálfgefið |
|---|---|---|
| **Aðgerð** | Upphækkun (bætir við efni), Klippa (fjarlægir efni), Skörun (heldur skörunarsvæðinu), Nýr líkami (ekki smíðaður enn í þessari útgáfu: þarf nákvæman kjarna) | Upphækkun |
| **Endir** | Blindur (ákveðin dýpt), Miðflötur (í báðar áttir), Í gegnum allt, Upp að fleti eða plani, Upp að næsta fleti, Upp að hornpunkti, Forskrift frá fleti | Blindur |
| **Dýpt (mm)** | Hvaða stærð sem er yfir núlli (sýnt fyrir Blindur og Miðflötur) | 10 |
| **Snúa við átt** | Vex hinum megin við plan skissunnar (ekki sýnt fyrir Miðflötur) | Slökkt |

Skrifaðu tölu og ýttu á {{key:Enter}} eða {{key:Tab}}: hluturinn byggist strax upp aftur. **Miðflötur** setur helming dýptarinnar sitt hvorum megin við skissuna.

### Upp að fleti, næsta fleti eða hornpunkti

Ekki smíðað enn í þessari útgáfu: sérhver "upp að" endi þarfnast nákvæms kjarna, og eiginleikinn segir "Útdráttur upp að fleti, næsta fleti eða hornpunkti: ekki smíðað enn (það þarf nákvæman kjarna)." Notaðu blinda dýpt sem þú mælir. Með nákvæmum kjarna virka endarnir þannig:

- **Upp að fleti eða plani**: **Upp að** tekur slétt flöt (Velja, síðan smella á hann) eða viðmiðunarplan. Flötur samsíða skissunni gefur nákvæma dýpt; hallandi flötur sker endann á hallanum. Ef flöturinn er á bak við skissuna: "… Prófaðu Snúa við átt."
- **Upp að næsta fleti**: stöðvast við fyrsta slétta flöt líkamans sem útdrátturinn mætir (bogin yfirborð eru ekki studd hér: það segir það).
- **Upp að hornpunkti**: stöðvast í takt við hornpunkt (smelltu nálægt enda brúnar) eða punktseiginleika.
- **Forskrift frá fleti**: eins og Upp að fleti, en stoppar **Forskrift (mm)** fyrir framan hann (mælt hornrétt á flötinn).

### Tvær áttir, skástig, ein útlína

- **Önnur átt** (Blindur): dregur einnig út **Önnur dýpt (mm)** hinum megin við skissuna.
- **Skástig (°)**: hliðarnar halla inn þegar þær fara áfram (neikvætt: út), eins og skástig; aðeins ein átt. Ekki smíðað enn í þessari útgáfu (það þarf nákvæman kjarna): hafðu það á 0.
- **Svæði**: **Velja svæði**, síðan smelltu inni í lykkjunum sem á að draga út; aðeins þau svæði eru notuð (hringur inni í ferningi: smelltu inni í hringnum fyrir sívalning, á milli þeirra fyrir plötu með gati). **Allt** fer aftur í sérhverja lykkju.

Fyrir neðan þetta sýnir **Skissumálsetningar** stýrandi málsetningar skissunnar, svo þú getur breytt stærðum sniðsins án þess að opna skissuna.

:::note
**Í gegnum allt er aðeins fyrir úrtök.** Upphækkun sem er stillt á Í gegnum allt mistekst með "Í gegnum allt er fyrir úrtök. Notaðu dýpt fyrir upphækkun." Þegar eiginleiki er skipt úr Klippa aftur í Upphækkun breytist Í gegnum allt í Blindur fyrir þig.
:::

## Skera holu

1. Smelltu á sléttan flötinn sem þú vilt skera inn í. Hann lýsist upp og hægra spjaldið segir **Flötur**.
2. Veldu {{ui:Skissa á þessum fleti}} (eða {{ui:Skissa}} á tækjastikunni).
3. Teiknaðu útlínu holunnar, til dæmis rétthyrning, og settu á hana málsetningar.
4. Veldu {{ui:Hætta}}.
5. Veldu {{ui:Klippa}}. Hún byrjar sem **Í gegnum allt**: hún fjarlægir efni alveg í gegnum hlutinn.
6. Fyrir hol, stilltu **Endir** á **Blindur (ákveðin dýpt)** og skrifaðu **Dýpt (mm)**.

Úrtak fer inn í efnið, frá fletinum sem þú teiknaðir á. Ef stöðustikan segir "Það er ekkert til að skera á þessari hlið skissunnar. Prófaðu hina áttina.", merktu við **Snúa við átt**.

Skissa á botni holunnar fylgir botninum: breyttu dýpt holunnar og skissan færist með henni.

## Draga eða ýta öllum fleti

Til að láta flöt standa lengra út eða sökkva inn þarftu ekki að teikna útlínu hans. Smelltu á sléttan flötinn, síðan í hægra spjaldinu:

- {{ui:Draga út úr honum}} dregur flötinn út: PartCraft bætir við skissu á fletinum sem heldur útlínu hans (göt í fletinum haldast göt) og 10 mm útdrætti.
- {{ui:Skera inn í hann}} ýtir fletinum inn: sama skissa og Klippa hálfa leið inn í hlutinn.

Bæði er eitt skref: {{key:Mod+Z}} fjarlægir skissuna og eiginleikann saman. Nýi eiginleikinn er valinn, svo skrifaðu tölu strax og ýttu á {{key:Enter}} fyrir dýptina. Útlínan er afrituð sem föstar línur og bogar: hún fylgir ekki síðari breytingum á fletinum. Ef hluti útlínunnar er ekki hægt að afrita (frjáls ferill), opnast skissan í staðinn með því sem hægt var að afrita; ljúktu henni, veldu síðan {{ui:Hætta}} og {{ui:Útdráttur}} eða {{ui:Klippa}}.

## Snið með eyjum

Skissa getur haldið nokkrum lokuðum lykkjum. Lykkjur hlið við hlið verða aðskildar upphækkanir (eða úrtök); lykkja inni í annarri verður gat í gegnum upphækkunina. Til dæmis dregst rétthyrningur með tveimur hringjum inni í sér út sem plata með tveimur götum.

Til að nota aðeins sumar lykkjur, veldu þær með **Svæði** (hér fyrir ofan); annar eiginleiki getur notað hinar lykkjur sömu skissu.

## Breyttu því síðar

- Smelltu á "Extrude1" í sögunni til að sækja stillingarnar aftur.
- Tvísmelltu á skissuna (inndregna undir því) til að opna hana; lokaðu henni til að byggja upp aftur.
- Sjá [Breyttu hlut í gegnum sögu hans](topic:edit-history) fyrir bælingu, afturrúllun, endurröðun og eyðingu.

## Algeng skilaboð

| Skilaboð | Hvað á að gera |
|---|---|
| "Skissan hefur ekkert lokað snið til að draga út." | Skissan hefur enga lokaða lykkju úr heilum línum. Lokaðu eyðunum, eða skiptu hjálparlínum til baka með {{key:Q}} |
| "Sniðið er opið: endi við (x, y) er ekki tengdur neinu." | Opnaðu skissuna og tengdu þann enda við næstu línu |
| "Það er ekkert til að skera ennþá." | Úrtak þarf fast efni til að skera. Búðu fyrst til upphækkun |
| "Ekkert er eftir af hlutanum eftir þetta." | Úrtakið fjarlægði allt. Athugaðu stærð þess og átt |

Meira í [Úrræðaleit](topic:troubleshooting).
