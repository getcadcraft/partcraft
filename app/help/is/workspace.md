---
title: Skjárinn í PartCraft
summary: Ferð um hverja stiku og spjald: tækjastikuna og hvernig hún breytist, söguna, staðreyndir hlutarins, þrívíddarsýnina, eiginleikaspjaldið og stöðustikuna.
keywords: skjár, útlit, tækjastika, saga, eiginleikatré, eiginleikar, spjald, stöðustika, viðmót, ui, ferð, allur skjár
from: 5b5bb843
---

Skjárinn hefur fimm hluta: tækjastikuna efst, söguna vinstra megin, þrívíddarsýnina í miðjunni, eiginleikaspjaldið hægra megin og stöðustikuna meðfram botninum. Yfir þeim öllum situr forritsstika CadCraft.

## Forritsstikan

Mjóa stikan efst tilheyrir vefsvæði CadCraft, ekki PartCraft sjálfu. Hún sýnir heiti forritsins og hvar það keyrir, útgáfuvalmynd, **Um PartCraft**, skjástillingarhnappinn og Pappír / Líkan þemarofann.

- **Pappír** eru dökkar línur á ljósu blaði. **Líkan** eru ljósar línur á dökkum bakgrunni. Litir skissu fylgja þemanu.
- {{ui:Stillingar}} (tannhjólið, eða {{key:Mod+,}}) hefur flipann {{ui:PartCraft}}: hvaða músarhnappur snýr sýninni, músarhjól eða snertiflötur, og tengsl meðan skissað er. Sjá [Stillingar PartCraft](topic:settings).
- Skjástillingarhnappurinn, eða {{key:Ctrl+Shift+F}}, skiptir á milli venjulegs, alls skjás og alls skjás með stikunum faldar. Með stikunum faldar, færðu bendilinn að efri brúninni (eða pikkaðu þar) til að fá þær aftur. {{key:Esc}} fer aftur í venjulegt. Þessi lykill er {{key:Ctrl+Shift+F}} líka á Mac, ekki ⌘.

## Tækjastikan

Tækjastikan er í hópum. Hún breytist eftir því sem þú ert að gera, svo hún passi í eina línu:

| Hópur | Hnappar | Sýnt |
|---|---|---|
| Skrá | {{ui:Nýtt}}, {{ui:Opna}}, {{ui:Vista}}, {{ui:Flytja út}} (valmynd) | Alltaf |
| Skissa | {{ui:Skissa}} | Þegar engin skissa er opin |
| Skissa | {{ui:Hætta}}, {{ui:Lína}}, {{ui:Rétthyrningur}}, {{ui:Hringur}}, {{ui:Bogi}}, {{ui:Punktur}}, {{ui:Miðlína}}, {{ui:Ávala}}, {{ui:Málsetning}}, {{ui:Hjálparrúmfræði}} | Aðeins meðan skissa er opin |
| Eiginleikar | {{ui:Útdráttur}}, {{ui:Klippa}}, {{ui:Snúningur}}, {{ui:Gat}}, {{ui:Línulegt}}, {{ui:Hringlaga}}, {{ui:Spegling}}, {{ui:Ávala}}, {{ui:Skábrúna}}, {{ui:Skel}}, {{ui:Meira}} (valmynd: Snúningsskurður, Grunnmynd, Ás, Punktur, Ferilsdráttur, Brú milli sniða, Halli) | Á hlutanum, ekki meðan skissa eða teikning er opin. Ávala og skábrúna virka á beinum brúnum milli tveggja flatra flata; Skel og Halli á flötum fletum. Ferilsdráttur og Brú milli sniða eru ekki byggð í þessari útgáfu (þau þurfa nákvæma kjarnann); smellur á þau segir það |
| Eiginleikar | {{ui:Lokið}} | Aðeins meðan þú velur brúnir eða fleti fyrir ávölu, skábrúnu, skel eða halla |
| Teikning | {{ui:Teikning}} | Á hlutanum (virkt þegar hluturinn hefur fast efni) |
| Teikning | {{ui:Viðmiðun}}, {{ui:Rammi}}, {{ui:Frágangur}}, {{ui:Smáatriði}}, {{ui:PDF}}, {{ui:Til baka}} | Aðeins á teikniblaðinu |
| Samsetning | {{ui:Samsetning}} | Á hlutanum (virkt þegar hluturinn hefur fast efni) |
| Samsetning | {{ui:Bæta við afriti}}, {{ui:Setja inn}}, {{ui:Tengill}}, {{ui:Árekstur}}, {{ui:Breyta hlut}}, {{ui:Loka}} | Aðeins í samsetningu |
| Samsetning | {{ui:Til baka}} | Meðan þú breytir hluta úr samsetningu |
| Breyting | {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Meira}} (valmynd: Klippa, Afrita, Líma, Líma á sínum stað, Tvöfalda, Eyða, Velja allt, Velja ekkert) | Alltaf; hver aðgerð virkar á skissuna, söguna eða samsetninguna sem þú ert í |
| Sýn | {{ui:Passa}}, {{ui:Hornrétt á}}, {{ui:Sýn}} (valmynd: Mæling, Massaeiginleikar, Snið, Halli, Sebra, Sveigja, {{ui:Grunnfletir}}, síðan Jafnás, Framan, Aftan, Ofan, Neðan, Hægri, Vinstri) | Alltaf |

Færðu bendilinn yfir hnapp til að sjá hvað hann gerir og flýtilykil hans. Hnappur sem er grár er ekki hægt að nota núna: til dæmis eiginleikahnapparnir meðan skissa er opin, eða {{ui:Tengill}} áður en samsetningin hefur tvo hluta.

Valmyndin {{ui:Meira}} í hópnum Breyting listar hverja breytingaaðgerð með flýtilykli sínum. Það sem afrita og líma virka á fer eftir því hvar þú ert; sjá [Afrita, líma og tvöfalda](topic:copy-paste). Ábending hlutar sem er grár segir hvers vegna hann getur ekki virkað núna.

Valmyndin {{ui:Flytja út}} geymir {{ui:STL, fyrir þrívíddarprentun}}, {{ui:3MF, fyrir þrívíddarprentun}}, {{ui:STEP AP242 (nákvæmt fast efni)}}, {{ui:STEP AP214 (nákvæmt fast efni)}}, {{ui:STEP (facetað, möskvakjarni)}}, {{ui:STEP AP214 (facetað, möskvakjarni)}}, {{ui:DXF af skissunni eða sléttum fleti}} og {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}}. Nákvæmu STEP-atriðin skrifa bogaða fleti á sönnum yfirborðum sínum; þau facetuðu skrifa þá sem flata þríhyrninga.

## Sagan (vinstri)

Spjaldið vinstra megin er eiginleikasaga hlutans, listinn sem PartCraft byggir upp frá toppi til botns.

- Fyrirsögnin er heiti hlutarins („Part1“ þar til þú endurnefnir hann).
- **Framflötur**, **Ofanflötur** og **Hægri flötur** eru fyrst. Smelltu á einn til að velja hann; hann lýsist upp í sýninni.
- Fyrir neðan þá eru eiginleikarnir þínir í þeirri röð sem þeir voru gerðir. Skissa sem eiginleiki notar er inndregin undir þeim eiginleika.
- Fáni við hægri enda raðar segir til um stöðu hans:

| Fáni | Merking |
|---|---|
| (ekkert) | Byggt, og skissa er fullskilgreind |
| − | Skissa sem er undirskilgreind (hún getur enn hreyfst) |
| + | Skissa sem er ofurskilgreind |
| ⚠ | Byggt, með viðvörun (færðu bendilinn til að lesa) |
| ⚠ villa | Eiginleikinn mistókst. Færðu bendilinn til að sjá hvers vegna, eða smelltu á hann |
| ⚠ ekki byggt | Eiginleikinn þarf annan sem mistókst eða er slökktur |
| slökkt | Bældur |

- Hver eiginleiki sýnir sína aðalstærð eftir heitinu, eins og „25 mm“ fyrir útdrátt eða „Ø6.6 thru“ fyrir gat. Tvísmelltu á stærðina, eða ýttu á {{key:F2}} á línunni, til að breyta henni þar. Sjá [Breyta stærðum](topic:change-sizes).
- Smelltu á eiginleika til að breyta honum í hægra spjaldinu. Tvísmelltu á skissu til að opna hana.
- Þegar þú rúllar til baka birtist röðin **Afturrúllunarstika · rúlla áfram** í listanum. Eiginleikar fyrir neðan hana eru gráir og ekki byggðir.
- Þegar röð er í fókus færa {{key:Up}} og {{key:Down}} milli raða, og {{key:Alt+Up}} / {{key:Alt+Down}} færa eiginleikann sjálfan, þar sem sagan leyfir það.

Í samsetningu sýnir sama spjald **Hluti** (sá fyrsti er merktur „festur“) og **Liði** í staðinn.

### Staðreyndir hlutarins

Undir sögunni listar reiturinn **Hlutur** **Rúmmál**, **Flatarmál yfirborðs**, **Stærð (X × Y × Z)**, **Göt í gegn**, **Fastir hlutar**, **Þríhyrningar**, fjölda **Eiginleika** og hve margir eru **Mistakast**. Rúmmál og flatarmál eru af facetaða fasta hlutanum sem möskvakjarninn byggir, aðeins minna en hið sanna gildi fyrir ávöl form (sjá [Eiginleikar og valkostir](topic:features#curves-resolution)).

Í samsetningu heitir reiturinn **Samsetning**: Hlutir, Tilvik, Liðir, Ótengt og Skörun.

## Þrívíddarsýnin (miðja)

Sýnin sýnir fasta hlutann, grunnflatirnar og allar skissur sem eiginleiki notar ekki enn.

Grunnflatirnir eru teiknaðir að fullu meðan hluturinn er tómur. Þegar hann hefur fast efni draga þeir sig til baka: teiknaðir daufir, svo þeir hylji ekki hlutinn, og smellir fara í gegnum þá að hlutanum. Þeir koma aftur að fullu meðan þú velur hvar á að skissa ({{ui:Skissa}} án þess að velja neitt) og þegar þú velur einn í sögunni. {{ui:Sýn}} › {{ui:Grunnfletir}} felur þá alveg; þeir sjást samt meðan þú velur hvar á að skissa. PartCraft man það val.

- Dragðu til að snúa hlutnum, hægri- eða miðjudragðu til að hliðra, og rúllaðu hjólinu til að aðdraga að bendlinum. Nánar í [Lyklar og mús](topic:keyboard).
- Færðu bendilinn yfir flöt, brún eða grunnflöt til að sjá hana lýsast upp. Smelltu til að velja hana. Fletir lýsast í heild og brúnir eru teiknaðar og valdar í heild. {{key:Shift}}+smellur safnar nokkrum brúnum eða flötum. Þau haldast merkt.
- Sýnarteningurinn efst hægra megin snýst með hlutanum: smelltu á flöt, brún eða horn til að horfa þaðan, dragðu hann til að snúa, og húshnappurinn fer aftur í upphafið. Sjá [Sýnarteninginn](topic:view-cube).
- Valinn útdráttur sýnir appelsínugula ör á endaflötnum sínum, og snúningur bogaða ör við enda snúningsins: dragðu hana til að breyta dýpt eða horni, eða skrifaðu í reitinn við hliðina á henni. Sjá [Breyta stærðum](topic:change-sizes#drag-it-in-the-view).
- Þegar hluti er tómur sýnir reitur með fyrirsögninni **Byrja hlut** fyrstu skrefin.
- Slepptu skrá `.partcraft.json` eða `.partcraft-asm.json` hvar sem er á sýninni til að opna hana. Skrá `.step`, `.stp`, `.stl`, `.obj`, `.3mf` eða `.3dm` sem er sleppt þar opnast sem fastur hlutur.

### Meðan þú velur brúnir eða fleti

Eftir {{ui:Ávala}}, {{ui:Skábrúna}} eða {{ui:Skel}} án þess að neitt sé valið (eða {{ui:Velja brúnir}} á slíkum eiginleika), sýnir hlutinn sig eins og hann var áður en þessi eiginleiki kom. Smelltu á brúnir eða fleti til að bæta þeim við eða taka þá út; merkin þeirra sýna hvað er í. {{ui:Lokið}} eða {{key:Esc}} klárar. Sjá [Ávala, skábrúna og skel](topic:fillet-chamfer-shell).

### Á teikniblaðinu

{{ui:Teikning}} skiptir 3D-sýninni út fyrir A3 teikniblaðið. Hjólið aðdregur, hægri- eða miðjudragið hliðrar, og {{key:F}} passar. Sjá [Gera teikningu](topic:drawing-pdf).

### Meðan skissa er opin

Sýnin snýr beint að skissuplaninu og tvílaga 2D-skissulag birtist ofan á. Hluturinn sýnir aðeins þá eiginleika sem gerðir voru fyrir þessa skissu. Ræma efst vinstra megin sýnir ástandsmerki skissunnar („Fullskilgreind“, „Undirskilgreind · 3 frelsisgráður“ og svo framvegis) og nafn hennar, eins og „Sketch2 á fleti í Extrude1“.

## Eiginleikaspjaldið (hægri)

Spjaldið hægra megin sýnir það sem er valið, og fyrirsögn þess nefnir það:

- **Hlutur** (ekkert valið): **Heiti** hlutarins og stillingin **Ferlar**.
- Flötur: {{ui:Skissa á því}}-hnappur.
- **Flötur**: hvers konar hann er (flatur flötur, strokkur með radíus sínum og ás, keila, kúla eða tórus), flatarmál hans, hvaða eiginleiki gerði hann, og fyrir flatan flöt {{ui:Skissa á þessum fleti}}, {{ui:Hornrétt á}}, {{ui:Flytja flöt út sem DXF}}, {{ui:Draga út úr honum}}, {{ui:Skera inn í hann}} og {{ui:Gat hér}} (sjá [Ýta eða toga allan flöt](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Brún**: hvers konar hún er (bein, hringur með miðju og radíus, eða ferill), lengd hennar og flatarnir tveir sem hún liggur á milli (eins og „Extrude1 endaflötur og Extrude1 hliðarflötur“), með hnöppunum {{ui:Ávala}} og {{ui:Skábrúna}}.
- Nokkrar brúnir eða fletir valdir með {{key:Shift}}: hversu margir, með {{ui:Ávala}} og {{ui:Skábrúna}} fyrir brúnir, og {{ui:Hreinsa}}.
- **Eiginleiki**: tölur hans og valkostir, víddir skissu hans, síðan {{ui:Bæla}}, {{ui:Rúlla til baka hingað}}, {{ui:Færa upp}}, {{ui:Færa niður}}, {{ui:Eyða}} og **Heiti** hans.
- **Opin skissa**: ástand hennar, tengslin sem þú getur bætt við valið, listi yfir tengsl og víddir, **Bæta við eftir hnitum**, og {{ui:Hætta í skissu}}, {{ui:Passa}} og {{ui:Flytja út sem DXF}}.
- Á teikniblaðinu: snið- og smáatriðastillingarnar, eða valið GD&T-tákn.
- Í samsetningu: samsetningin, valinn hluti eða valinn liður.

Hver reitur fyrir tölu tekur gildi þegar þú ýtir á {{key:Enter}} eða {{key:Tab}}, eða smellir út fyrir hann. Hluturinn endurbyggist strax; það er enginn hnappur **Í lagi**. Notaðu {{key:Mod+Z}} til að fara til baka.

## Stöðustikan (neðst)

- Vinstra megin hnit bendilsins í skissunni (aðeins meðan skissa er opin).
- Í miðjunni skilaboð: hvað á að gera næst, og hvers vegna einhverju var hafnað. Lestu þau þegar ekkert virðist gerast.
- Nálægt hægri endanum er kjarnamerkið: alltaf „Möskvakjarni“ í þessari útgáfu. Færðu bendilinn yfir það til að sjá hvað það þýðir. Sjá [Möskvakjarninn](topic:solid-kernels).
- Hægra megin, merki: „Endurbyggi…“ meðan hluturinn endurbyggist, svo „Endurbyggt á … ms“ þegar allt er í lagi, eða „1 eiginleiki mistekst“. Í samsetningu segir það „Sett í … ms“ eða telur vandamál með liði.

Sjá einnig [Byrja handbók í Myndskreytingu](topic:illustrate): vinnusvæðið sem býr til samsetningahandbækur úr hlutum þínum og samsetningum.
