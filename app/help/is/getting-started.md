---
title: Byrjaðu með PartCraft
summary: Hvað PartCraft gerir í dag, hvað vafrinn þinn þarf og fyrsti hlutur á tíu mínútum, frá skissu til vistaðrar skrár.
keywords: byrja, fyrsta keyrsla, flýtibyrjun, inngangur, kennsla, fyrsti hluti, plata, parametrískt, hlutalíkanagerð
from: 5f0a668d
---

PartCraft er parametrískt hluta- og samsetningarforrit CadCraft-fjölskyldunnar. Þú teiknar 2D-skissu, festir hana með tengslum og víddum, breytir henni í fast efni með eiginleikum eins og útdrætti, snúningi og gati, og breytir hvaða tölu sem er síðar: hluturinn smíðast aftur úr sögunni sinni. Hlutar fara síðan í samsetningar, þar sem tenglar staðsetja þá og leyfa þér að athuga hreyfinguna.

Það sem þessi útgáfa gerir:

| Verkefni | Það sem þú færð |
|---|---|
| Skissur | Línur, rétthyrningar, hringir, bogar, punktar og miðlínur, með tengslum og víddum og lifandi stöðu: vantar skilgreiningu, fullskilgreint eða of skilgreint |
| Eiginleikar í föstu efni | Útdráttur, klipping, snúningur, snúningsklipping, einföld göt og göt með sökkum, línuleg og hringlaga mynstur, spegling, ávalar og skábrúnir á beinum brúnum milli flatra fleta, og skeljar og hallar á flötum fleti. Ferilsdráttur, brú milli sniða og aðrir eiginleikar sem þurfa nákvæman kjarna eru ekki tilbúnir enn í þessari útgáfu: sjá [Það sem er ekki tilbúið enn](topic:not-built-yet) |
| Saga | Breyta tölum hvers eiginleika, bæla, rúlla til baka, endurraða og eyða, með afturköllun |
| Samsetningar | Hlutir tengdir með stífum, snúnings- og rennitenglum, árekstrarathugun og hreyfiathugun |
| Teikningar | A3-blað með þremur útlitum, ísómetrískri mynd, snið, smáatriðisútlit, heildarstærðir, viðmiðanir, ramma fyrir rúmfræðileg mál og yfirborðsgæðatákn, flutt út sem PDF |
| Skrár | Eigin hluta- og samsetningarskrár; STL, 3MF, fasetað STEP, DXF og PDF út |

Allt keyrir í vafranum þínum, á tölvunni þinni. **Ekkert er sent upp.** Sjá [Opna, vista og flytja út skrár](topic:files) um hvert skrárnar fara.

## Það sem þú þarft

- Nýlegan Chrome, Edge, Firefox eða Safari með **WebGL** (þrívíddargrafík) og **WebAssembly** kveikt. Hvort tveggja er kveikt sjálfgefið. Fasta rúmfræðin er smíðuð af WebAssembly-möskvakjarna sem hleðst með forritinu: sjá [Möskvakjarninn](topic:solid-kernels).
- Mús er auðveldust. Snertiborð virkar, og snertiskjáir virka til að skoða og gera einfaldar skissur: sjá [Snertiborð, snerting og litlir skjáir](topic:trackpad-and-touch).
- Skjár sem er að minnsta kosti 1280 pixlar á breidd sýnir alla tækjastikuna í einni röð. Þrengri gluggar skruna tækjastikunni til hliðar; í síma opnast spjöldin sem blöð frá stiku neðst.

Meira um vafra: [Vafrar og tölvur](common:browsers).

:::note
PartCraft keyrir í vafranum, og á skjáborðinu inni í CadCraft Studio. Skýjavistun er ekki í boði enn: þú opnar hluta úr tölvunni þinni og vistar þá aftur í hana sem skrár.
:::

## Opnaðu PartCraft

1. Opnaðu PartCraft.
2. Bíddu á meðan skjárinn segir „Hleð fast efnis kjarnann…“. Þetta tekur smástund í fyrsta skipti.
3. Þú sérð tóman þrívíddarskjá með þremur grunnflötum, söguna vinstra megin (Part1, síðan Framflötur, Efriflötur, Hægriflötur) og kassa í skjánum með fyrirsögninni „Byrja hluta“.
4. Merkið lengst til hægri á stöðustikunni segir „Möskvakjarni“: PartCraft smíðar alla hluta með möskvakjarnanum í þessari útgáfu, svo kringlóttir fletir eru flatar fasetur. Þú getur byrjað að líkana strax.

Ef skjárinn segir að vafrinn geti ekki sýnt 3D, eða kjarninn hlóðst ekki, sjá [Úrræðaleit](topic:troubleshooting#the-app-does-not-start).

## Fyrsti hluturinn þinn: plata með gati

Þú munt búa til 60 × 40 mm plötu, 10 mm þykka, með 6 mm gat í gegnum hana. Einingar eru millimetrar.

### Teiknaðu útlínuna

1. Smelltu á **Framflötur** í sögunni vinstra megin. Flöturinn lýsist upp í skjánum.
2. Veldu {{ui:Skissa}} á tækjastikunni, eða ýttu á {{key:S}}. Skjárinn snýst til að horfa beint á flötinn, og Línuverkfærið er virkt.
3. Ýttu á {{key:R}} fyrir Rétthyrningsverkfærið.
4. Færðu bendilinn á upphafspunktinn (litla rauða hringinn með krossi). Lítill ferningur sýnir að hann smellur. Smelltu.
5. Færðu upp og til hægri og smelltu aftur. Þú átt rétthyrning. Línurnar eru bláar: blátt þýðir að þær geta enn hreyfst.

### Gefðu honum mál

1. Ýttu á {{key:D}} fyrir Málsetningarverkfærið.
2. Smelltu á efri línuna, og smelltu síðan aðeins fyrir ofan hana. Tölureitur opnast með núverandi lengd.
3. Skrifaðu `60` og ýttu á {{key:Enter}}. Rétthyrningurinn verður 60 mm á breidd.
4. Smelltu á vinstri línuna og smelltu síðan aðeins til vinstri við hana. Skrifaðu `40` og ýttu á {{key:Enter}}.

Chip efst til vinstri í skjánum sýnir nú **Fullskilgreint** og línurnar verða að bleki (svörtum í þema Pappír, ljósum í þema Líkan). Sérhver punktur og stærð er föst.

:::tip
Ef þú byrjaðir rétthyrninginn fjarri upphafspunktinum segir chip-ið samt „Vantar skilgreiningu · 2 frígráður“. Ýttu á {{key:S}} fyrir Velja, smelltu á eitt horn, {{key:Shift}}+smelltu á upphafspunktinn og veldu síðan {{ui:• Samfall}} í hægra spjaldinu.
:::

### Dragðu út

1. Veldu {{ui:Hætta}} á tækjastikunni, eða ýttu á {{key:Esc}} þar til skissan lokast (venjulega tvisvar).
2. Veldu {{ui:Útdráttur}}. 10 mm fast efni birtist. „Extrude1“ bætist við söguna, með „Sketch1“ inndregið undir honum.
3. Hægra spjaldið sýnir stillingar útdráttarins. Til að breyta þykktinni skrifarðu nýja tölu í **Dýpt (mm)** og ýtir á {{key:Enter}} eða {{key:Tab}}. Hluturinn smíðast aftur strax.

### Bættu við gatinu

1. Smelltu á stóra sléttan flötinn framan á plötunni (endi útdráttarins). Allur flöturinn lýsist upp og hægra spjaldið segir **Flötur**.
2. Veldu {{ui:Skissa á þessum fleti}} í hægra spjaldinu.
3. Ýttu á {{key:P}} fyrir Punktverkfærið og smelltu nálægt miðju flatarins.
4. Veldu {{ui:Hætta}}.
5. Veldu {{ui:Gat}}. 6 mm gat fer í gegnum plötuna. Breyttu **Þvermál (mm)** í hægra spjaldinu ef þú vilt.

**Hlutur**-kassinn neðst til vinstri sýnir núna rúmmál, yfirborðsflatarmál, stærðina (60 × 40 × 10 mm) og „Göt í gegn: 1“.

### Vistaðu hann

1. Ýttu á {{key:Mod+S}} eða veldu {{ui:Vista}}.
2. Vafrinn þinn sækir `Part1.partcraft.json` í niðurhalsmöppuna sína. Skráin geymir alla söguna: opnaðu hana aftur með {{ui:Opna}} til að halda áfram að breyta.

Til að endurnefna hlutinn fyrst smellirðu á autt svæði í skjánum svo ekkert sé valið, og skrifar nýtt **Heiti** í hægra spjaldinu.

## Hvert skal haldið næst

- [Teiknaðu þína fyrstu skissu](topic:sketch-basics) og [Fullskilgreindu skissu](topic:relations-dimensions) útskýra skissuverkfærið almennilega.
- [Breyttu hlut í gegnum söguna hans](topic:edit-history) sýnir hvernig þú breytir því sem þú smíðaðir.
- [Ávalaðu, skáðu og holaðu](topic:fillet-chamfer-shell) og [Búðu til teikningu](topic:drawing-pdf) klára hlutinn. [Það sem er ekki tilbúið enn](topic:not-built-yet) listar það sem þessi útgáfa gerir ekki, eins og ferilsdrátt og brýr milli sniða.
- [Ef þú kemur frá öðru parametrísku líkanaforriti](topic:coming-from) listar venjur sem virka öðruvísi hér.
- [Lyklar og mús](topic:keyboard) er full skrá yfir flýtilykla.
- [Notkun hjálparinnar](common:help).
