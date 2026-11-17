---
title: Plötumálmur: flansar og flatt mynstur
summary: Byrjaðu plötumálmshlut á skissu (flatri plötu eða beygðu prófíli), stilltu þykkt hans, beygjuradíus og K-stuðul einu sinni, beygðu flansa upp úr jöðrum hans með beygjulosunum, og fletjið hann út sem DXF til skurðar.
keywords: flatt mynstur, fletja út, þróun, þróuð lengd, beygjuleyfi, beygjulína, dxf fyrir leysi, leysiskurður, plötumálmur, grunnflans, jaðarflans, flans, beyging, beygjuradíus, k-stuðull, k stuðull, þykkt, þykktarmál, losun, beygjulosun, rás, festing, hýsing, beygð plata
from: 144bd0f6
---

:::note
**Ekki smíðað enn í þessari útgáfu.** Plötumálmur þarf nákvæman rúmfræðikjarna, sem þessi útgáfa PartCraft hefur ekki: hún smíðar alla hluti með möskvakjarnanum. [Það sem er ekki smíðað enn](topic:not-built-yet) segir hvað eigi að gera í staðinn. Restin af þessari síðu lýsir honum eins og hann virkar með nákvæmum kjarna.
:::

Plötumálmshlutir byrja á **Grunnflansi**. Hann setur plötuna fyrir allan hlutinn: **þykkt** hennar, **innri beygjuradíus** og **K-stuðulinn**. Sérhver **jaðarflans** eftir hann beygist með sömu tölum, þannig að hlutinn helst ein plata sem hægt er að fletja út. Hvort tveggja krefst **nákvæma kjarnans** (sjá [Möskvakjarninn](topic:solid-kernels)).

## Byrjaðu með grunnflansi

1. Teiknaðu skissu. Notaðu **lokaðan prófíl** fyrir flata plötu (rétthyrning, eða hvaða lokaða útlínu sem er með götum). Notaðu **eina opna keðju af línum** fyrir beygða plötu, eins og L, U eða Z dregið sem jaðarsýn plötunnar.
2. Veldu skissuna í eiginleikaferlinum.
3. Opnaðu {{ui:Meira}} í hópnum Eiginleikar og veldu {{ui:Grunnflans}}.

Í spjaldinu hægra megin:

- **Þykkt (mm)** er þykktarmál plötunnar.
- **Beygjuradíus (mm)** er innri radíus hverrar beygju. 0 gefur skarpt innra horn; ytri hlutinn beygist samt með radíus sem er ein þykkt.
- **K-stuðull** segir hvar hlutlausa lagið liggur innan plötunnar, frá 0 (innri flöturinn) til 0.5 (miðjan). Hann ákvarðar hversu löng platan er þegar hún er flött út. 0.44 er sjálfgefið; birgir þinn eða efnisbirgir getur gefið þér sinn.
- **Dýpt (mm)** er hversu langt beygður prófíll gengur út úr skissuplaninu. Plata hunsar hana.
- **Þykkt utan beygjanna**: opinn prófíll er ein hlið plötunnar. Sjálfgefið fer þykktin innan á fyrstu beygjuna, þannig að línurnar sem þú teiknaðir eru ytri hlið rennunnar. Hakaðu við til að setja línurnar innan á í staðinn. Svarið er það sama hvorum megin þú teiknaðir frá.

Sérhvert horn á opinni keðju verður beygja. Lína sem er of stutt til að bera beygjur sínar segir það, ásamt lengdinni sem hún þarf.

## Beygðu jaðarflans

1. Smelltu á beina brún á efri eða neðri fleti plötunnar (löngu brúnirnar, ekki þunnu).
2. Veldu {{ui:Meira}} › {{ui:Jaðarflans}}. Ef engin brún er valin bíður PartCraft eftir að þú smellir á eina; Esc hættir við.

Flansinn beygist upp frá fleti þeirrar brúnar um innri radíus plötunnar, og gengur svo beint. Í spjaldinu:

- **Horn (°)** er hversu mikið hann beygist, frá 1 til 180. 90 er ferhyrndur flans.
- **Lengd (mm)** er beini leggurinn eftir beygjuna.
- **Beygja hina leiðina** beygir hann frá hinum fletinum (niður í stað upp).
- **Frávik í upphafi** og **Frávik í enda** stytta flansinn frá hvorum enda brúnarinnar.
- **Beygjulosun**: þegar endi er færður til hliðar er rauf skorin í plötuna við hliðina á honum, svo beygjan rífi málminn ekki þar. **Breidd losunar** stillir breidd raufarinnar; dýpt hennar er beygjuradíusinn plús þykktin. Veldu **Ekkert** til að skilja hornið eftir óskorið.

Til að breyta brúninni seinna, ýttu á {{ui:Velja}} í spjaldinu og smelltu á aðra.

:::tip
Notaðu breytur fyrir þykkt og radíus (sjá [Breytur og jöfnur](topic:parameters)) þannig að breyting á þykktarmáli uppfærir alla flansa í einu.
:::

## Fletja út

Bæði spjöld enda á **Flatt mynstur**. Ýttu á {{ui:Fletja út}}:

- Forskoðun sýnir plötuna útflatta, með miðlínu hverrar beygju strikaða.
- **Stærð** og **Flatarmál** eru þau sömu og á flata ómótaða hlutnum.
- Hver beygja er skráð með stefnu sinni (**upp** eða **niður**, séð frá skissuhlið grunnflansins), horni og innri radíus.

Sérhver beygja tekur lengd hlutlausa lags plötunnar í gegnum hana, **beygjuleyfið**: horn (í radíönum) × (innri radíus + K-stuðull × þykkt). Þannig bætir 90° beygja á 2 mm plötu með 2 mm radíus og K-stuðli 0.44 við 4.52 mm af flatri plötu.

Á flatri plötu birtast göt, skurðir og beygjulosanir í fletinum þar sem þau raunverulega eru, þar með talin göt í gegnum flans.

Til að skera marga hluti, ýttu á {{ui:Raða á blöð…}} undir flata mynstrinu: sjá [Raða flötum hlutum á blöð](topic:nest-flat-parts). Beygður grunnflans fletst út sem einn rétthyrningur: þróuð lengd hans × dýpt hans, með beygjulínu við hvert horn.

{{ui:Vista DXF}} vistar flata mynstrið fyrir leysi, gat eða vatnsskurðarvél, í millimetrum:

- útlínuna á laginu **OUTLINE**, sem línur, boga og hringi;
- beygjulínurnar á laginu **BEND**, strikaðar;
- athugasemd við hverja beygju á laginu **BEND_NOTES**, eins og "UP 90° R2".

Breyttu einhverju og flöturinn hverfur; ýttu aftur á {{ui:Fletja út}} fyrir nýjan.

:::note
Athugaðu K-stuðulinn hjá verkstæðinu þínu áður en þú skerð: lengd flatarins fer eftir honum, og hann breytist eftir efni, þykkt og verkfærum.
:::

## Skilaboð

- **Plötumálmur þarf grunnflans á undan sér** — jaðarflans var bætt við áður en nokkur grunnflans var til. Færðu hann neðar en einn, eða bættu við grunnflansi fyrst.
- **Jaðarflans þarf beina brún** — flansar beygjast aðeins eftir línum; bognar brúnir geta ekki tekið við honum enn.
- **Sú brún er ekki á fleti þykktar plötunnar** — brúnin tilheyrir fleti sem er ekki efri eða neðri hlið plötunnar (til dæmis veggur göts). Veldu brún á efri eða neðri fletinum.
- **Frávikin skilja ekkert eftir af brúninni** — frávikin tvö leggjast saman í alla brúnina eða meira.
- **Jaðarflansa á beygðum grunnflansi er ekki hægt að fletja út enn** — byrjaðu á flatri plötu og beygðu allt upp með jaðarflönsum, sem fletjast út.
- **Skurðir og göt sem gerð eru eftir beygðan grunnflans birtast ekki í fletinum hans enn** — flatt mynstur beygðs prófíls er aðeins þróaði rétthyrningurinn hans.
