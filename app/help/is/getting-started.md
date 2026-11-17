---
title: Byrjun með PartCraft
summary: Hvað PartCraft gerir í dag, hvað vafrinn þinn þarf, og fyrsti hluti á tíu mínútum, frá skissu til vistaðrar skráar.
keywords: byrjun, fyrsta keyrsla, skjót byrjun, kynning, kennsla, fyrsti hluti, plata, parametrískt, hlutalíkanari
from: 7d43283f
---

PartCraft er parametrískt forrit fyrir hluti og samsetningar í CadCraft-fjölskyldunni. Þú teiknar 2D-skissu, bindur hana með tengslum og málum, breytir henni í fast efni með eiginleikum eins og útdrætti, snúningi og gati, og breytir hvaða tölu sem er síðar: hluturinn smíðast aftur út frá sögu sinni. Hlutir fara síðan í samsetningar, þar sem tengingar staðsetja þá og leyfa þér að athuga hreyfinguna.

Það sem þessi smíð gerir:

| Verkefni | Það sem þú færð |
|---|---|
| Skissur | Línur, rétthyrningar, hringir, bogar, punktar og miðlínur, með tengslum og málum, og lifandi stöðu: ófullskilgreint, fullskilgreint eða ofskilgreint |
| Eiginleikar fasts efnis | Útdráttur, skurður, snúningur, snúinn skurður, einföld og skeggjuð göt, línulegt og hringlaga mynstur, spegling, rúnnanir og skábrúnir á beinum brúnum milli flatra flata, og skeljar og hallar á flötum flötum. Slægjur, lóftanir og aðrir eiginleikar sem þurfa nákvæman kjarna eru ekki enn tiltækir í þessari útgáfu: sjá [Það sem er ekki enn tiltækt](topic:not-built-yet) |
| Saga | Breyttu tölum hvers eiginleika, gerðu óvirkan, farðu aftur, raðaðu upp á nýtt og eyddu, með afturköllun |
| Samsetningar | Hlutar tengdir með stífum, snúningstengdum og rennitengdum tengingum, árekstrarathugun og hreyfingarathugun |
| Teikningar | A3-blað með þremur sýnum, samskoti, sniði, nákvæmnissýn, heildarmálum, viðmiðum, eiginleikarömmum og yfirborðsáferðartáknum, flutt út sem PDF |
| Skrár | Eigin hluta- og samsetningarskrár; útflutningur í STL, 3MF, nákvæmt STEP, DXF og PDF |

Allt keyrir í vafranum þínum, á tölvunni þinni. **Ekkert er sent upp.** Sjá [Skrár: opna, vista og flytja út](topic:files) um hvert skrárnar fara.

## Það sem þú þarft

- Nýlegan Chrome, Edge, Firefox eða Safari með **WebGL** (þrívíddargrafík) og **WebAssembly** kveikt. Hvort tveggja er kveikt sjálfgefið. Rúmfræði fasta efnisins er smíðuð af WebAssembly-möskvakjarna sem hleðst með forritinu: sjá [Möskvakjarninn](topic:solid-kernels).
- Mús er auðveldust. Snertiflötur virkar, og snertiskjáir virka til skoðunar og einfaldrar skissu: sjá [Snertiflötur, snerting og lítil skjáir](topic:trackpad-and-touch).
- Skjár sem er að minnsta kosti 1280 pixlar á breidd sýnir alla tækjastikuna í einni röð. Þrengri gluggar fletta tækjastikunni til hliðar; í síma opnast spjöld sem blöð úr stiku neðst.

Meira um vafra: [Vafrar og tölvur](common:browsers).

:::note
PartCraft keyrir í vafranum, og á skjáborðinu innan CadCraft Studio. Skýjavistun er ekki tiltæk enn: þú opnar hluti úr tölvunni þinni og vistar þá aftur þangað sem skrár.
:::

## Opnaðu PartCraft

1. Opnaðu PartCraft.
2. Bíddu meðan skjárinn segir „Hleð traustkjarnann…“. Þetta tekur smá stund í fyrsta skipti.
3. Þú sérð tóma þrívíddarsýn með þremur grunnplönum, söguna vinstra megin („Part1“, síðan Framplan, Yfirplan, Hliðarplan) og kassa í sýninni með fyrirsögninni „Byrjaðu hlut“.
4. Merkið nálægt hægri enda stöðustikunnar segir „Möskvakjarni“: PartCraft smíðar alla hluti með möskvakjarnanum í þessari útgáfu, þannig að kúluflatir eru flatar flísar. Þú getur byrjað að móta strax.

Ef sýnin segir að vafrinn geti ekki sýnt þrívídd, eða kjarninn hlaðst ekki, sjá [Bilanaleit](topic:troubleshooting#the-app-does-not-start).

## Fyrsti hluti þinn: plata með gati

Þú munt búa til 60 × 40 mm plötu, 10 mm þykka, með 6 mm gati í gegnum hana. Mál eru í millimetrum.

### Teiknaðu útlínuna

1. Smelltu á **Framplan** í sögunni vinstra megin. Planið lýsist upp í sýninni.
2. Veldu {{ui:Skissa}} á tækjastikunni, eða ýttu á {{key:S}}. Sýnin snýr beint að planinu og línuverkfærið er virkt.
3. Ýttu á {{key:R}} fyrir rétthyrningsverkfærið.
4. Færðu bendilinn á upphafspunktinn (litla rauða hringinn með krossi). Lítill ferningur sýnir að hann smellur. Smelltu.
5. Færðu upp og til hægri og smelltu aftur. Þú hefur rétthyrning. Línurnar eru bláar: blátt þýðir að þær geta enn hreyfst.

### Gefðu þeim stærðir

1. Ýttu á {{key:D}} fyrir málsetningarverkfærið.
2. Smelltu á efstu línuna og síðan aðeins fyrir ofan hana. Talnareitur opnast með núverandi lengd.
3. Skrifaðu `60` og ýttu á {{key:Enter}}. Rétthyrningurinn breytist í 60 mm á breidd.
4. Smelltu á vinstri línuna og síðan aðeins til vinstri við hana. Skrifaðu `40` og ýttu á {{key:Enter}}.

Merkið efst til vinstri í sýninni segir nú **Fullskilgreint** og línurnar verða svartar (svartar á Paper-þemanu, ljósar á Model-þemanu). Sérhver punktur og stærð er föst.

:::tip
Ef þú byrjaðir rétthyrninginn fjarri upphafspunktinum, segir merkið samt „Ófullskilgreint · 2 frelsisgráður“. Ýttu á {{key:S}} fyrir Velja, smelltu á eitt horn, {{key:Shift}}+smelltu á upphafspunktinn, og veldu síðan {{ui:• Samfallandi}} í hægra spjaldinu.
:::

### Dragðu hann út

1. Veldu {{ui:Hætta}} á tækjastikunni, eða ýttu á {{key:Esc}} þar til skissan lokast (venjulega tvisvar).
2. Veldu {{ui:Útdráttur}}. Hiti 10 mm fast efni birtist. „Extrude1“ bætist við söguna, með „Sketch1“ inndregið undir honum.
3. Hægra spjaldið sýnir stillingar útdráttarins. Til að breyta þykktinni skaltu skrifa nýja tölu í **Dýpt (mm)** og ýta á {{key:Enter}} eða {{key:Tab}}. Hluturinn smíðast aftur strax.

### Bættu við gatinu

1. Smelltu á stóra flata flötinn framan á plötunni (enda útdráttarins). Allur flöturinn lýsist upp og hægra spjaldið segir **Flötur**.
2. Veldu {{ui:Skissa á þessum fleti}} í hægra spjaldinu.
3. Ýttu á {{key:P}} fyrir punktverkfærið og smelltu nálægt miðju flatarins.
4. Veldu {{ui:Hætta}}.
5. Veldu {{ui:Gat}}. 6 mm gat fer í gegnum plötuna. Breyttu **Þvermál (mm)** í hægra spjaldinu ef þú vilt.

Reiturinn **Hluti** neðst til vinstri sýnir nú rúmmál, yfirborðsflatarmál, stærðina (60 × 40 × 10 mm) og „Göt í gegn: 1“.

### Vistaðu hann

1. Ýttu á {{key:Mod+S}} eða veldu {{ui:Vista}}.
2. Vafrinn þinn sækir `Part1.partcraft.json` í niðurhalsmöppuna sína. Skráin geymir alla söguna: opnaðu hana aftur með {{ui:Opna}} til að halda áfram að breyta.

Til að endurnefna hlutinn fyrst, smelltu á autt svæði í sýninni svo ekkert sé valið og skrifaðu nýtt **Heiti** í hægra spjaldið.

## Hvert á að fara næst

- [Teiknaðu þína fyrstu skissu](topic:sketch-basics) og [Fullskilgreindu skissu](topic:relations-dimensions) útskýra skissuritilinn almennilega.
- [Breyttu hluta í gegnum sögu hans](topic:edit-history) sýnir hvernig þú breytir því sem þú smíðaðir.
- [Rúnnaðu, skástu og holaðu](topic:fillet-chamfer-shell) og [Gerðu teikningu](topic:drawing-pdf) klára hlutinn. [Það sem er ekki enn tiltækt](topic:not-built-yet) telur upp það sem þessi útgáfa gerir ekki, svo sem slægjur og lóftanir.
- [Frá öðrum parametrískum líkanara](topic:coming-from) telur upp venjur sem virka öðruvísi hér.
- [Lyklar og mús](topic:keyboard) er heildarlisti yfir flýtilykla.
- [Notkun þessarar hjálpar](common:help).
