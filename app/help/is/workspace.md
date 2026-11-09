---
title: Skjárinn í PartCraft
summary: Yfirlit yfir hverja stiku og spjald: tækjastikan og hvernig hún breytist, sagan, staðreyndir hlutarins, 3D-skjárinn, eiginleikaspjaldið og stöðustikan.
keywords: skjár, útlit, tækjastika, saga, eiginleikatré, eiginleikar, spjald, stöðustika, viðmót, ui, yfirlit, fullur skjár
from: 7394fc49
---

Skjárinn hefur fimm hluta: tækjastikuna efst, söguna vinstra megin, 3D-skjáinn í miðjunni, eiginleikaspjaldið hægra megin og stöðustikuna meðfram botninum. Fyrir ofan þá öll situr CadCraft-forritastikan.

## Forritastikan

Þunna stikan efst tilheyrir CadCraft-vefsíðunni, ekki PartCraft sjálfu. Hún sýnir heiti forritsins og hvar það keyrir, útgáfuvalmynd, **Um PartCraft**, hnappinn fyrir skjástillingu og Pappír/Líkan-þemarofann.

- **Pappír** er dökkar línur á ljósu blaði. **Líkan** eru ljósar línur á dökkum bakgrunni. Litir skissunnar fylgja þemanu.
- {{ui:Stillingar}} (gírinn, eða {{key:Mod+,}}) hefur {{ui:PartCraft}}-flipa: hvaða músarhnappur snýr skjánum, músarhjól eða snertiborð, og tengsl meðan skissað er. Sjá [Stillingar PartCraft](topic:settings).
- Skjástillingarhnappurinn, eða {{key:Ctrl+Shift+F}}, skiptir á milli venjulegs skjás, fulls skjás og fulls skjás með stikunum falnum. Með stikunum falnum skaltu færa bendilinn að efri brúninni (eða snerta þar) til að fá þær aftur. {{key:Esc}} fer aftur í venjulegan skjá. Þessi lykill er {{key:Ctrl+Shift+F}} líka á Mac, ekki ⌘.

## Tækjastikan

Tækjastikan er flokkuð. Hún breytist eftir því sem þú ert að gera, svo hún passar í eina röð:

| Flokkur | Hnappar | Hvenær |
|---|---|---|
| Skrá | {{ui:Nýtt}}, {{ui:Opna}}, {{ui:Vista}}, {{ui:Flytja út}} (valmynd) | Alltaf |
| Skissa | {{ui:Skissa}} | Þegar engin skissa er opin |
| Skissa | {{ui:Hætta}}, {{ui:Lína}}, {{ui:Rétthyrningur}}, {{ui:Hringur}}, {{ui:Bogi}}, {{ui:Punktur}}, {{ui:Miðlína}}, {{ui:Ávala}}, {{ui:Málsetning}}, {{ui:Hjálparrúmfræði}} | Aðeins meðan skissa er opin |
| Eiginleikar | {{ui:Útdráttur}}, {{ui:Klippa}}, {{ui:Snúningur}}, {{ui:Gat}}, {{ui:Línulegt}}, {{ui:Hringlaga}}, {{ui:Spegling}}, {{ui:Ávala}}, {{ui:Skábrúna}}, {{ui:Skel}}, {{ui:Meira}} (valmynd: Snúningsklipping, Flötur, Ás, Punktur, Ferilsdráttur, Brú milli sniða, Halli) | Á hlutnum, ekki meðan skissa eða teikning er opin. Ávala og skábrún virka á beinum brúnum milli tveggja flatra fleta; skel og halli á flötum fleti. Ferilsdráttur og brú milli sniða eru ekki tilbúin í þessari útgáfu (þau þurfa nákvæman kjarna); smellur á annað hvort segir það |
| Eiginleikar | {{ui:Lokið}} | Aðeins meðan þú velur brúnir eða fleti fyrir ávölu, skábrún, skel eða halla |
| Teikning | {{ui:Teikning}} | Á hlutnum (notanlegt þegar hluturinn hefur fast efni) |
| Teikning | {{ui:Viðmiðun}}, {{ui:Rammi}}, {{ui:Yfirborð}}, {{ui:Smáatriði}}, {{ui:PDF}}, {{ui:Til baka}} | Aðeins á teikniblaðinu |
| Samsetning | {{ui:Samsetning}} | Á hlutnum (notanlegt þegar hluturinn hefur fast efni) |
| Samsetning | {{ui:Bæta við afriti}}, {{ui:Setja inn}}, {{ui:Tengill}}, {{ui:Árekstur}}, {{ui:Breyta hlut}}, {{ui:Loka}} | Aðeins í samsetningu |
| Samsetning | {{ui:Til baka}} | Meðan þú breytir hlut úr samsetningu |
| Breyta | {{ui:Afturkalla}}, {{ui:Endurgera}}, {{ui:Afrita}}, {{ui:Líma}}, {{ui:Meira}} (valmynd: Klippa, Afrita, Líma, Líma á sínum stað, Tvöfalda, Eyða, Velja allt, Velja ekkert) | Alltaf; hver liður vinnur á skissunni, sögunni eða samsetningunni sem þú ert í |
| Sýn | {{ui:Passa}}, {{ui:Hornrétt á}}, {{ui:Sýn}} (valmynd: Mæla, Massaeiginleikar, Snið, Halli, Sebra, Sveigja, {{ui:Grunnfletir}}, síðan Ísómetrískt, Framsýn, Aftan, Ofan, Neðan, Hægri, Vinstri) | Alltaf |

Færðu bendilinn yfir hnapp til að sjá hvað hann gerir og flýtilykil hans. Hnappur sem er grár er ekki hægt að nota núna: til dæmis eiginleikahnapparnir meðan skissa er opin, eða {{ui:Tengill}} áður en samsetningin hefur tvo hluti.

Valmyndin {{ui:Meira}} í Breyta-flokknum listar hverja breytingaaðgerð með sínum lykli. Hvað afrita og líma vinnur með fer eftir því hvar þú ert; sjá [Afrita, líma og tvöfalda](topic:copy-paste). Hluti sem er grár sýnir í tooltip hvers vegna hann getur ekki unnið núna.

{{ui:Flytja út}}-valmyndin inniheldur {{ui:STL, fyrir þrívíddarprentun}}, {{ui:3MF, fyrir þrívíddarprentun}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF af skissunni eða sléttum fleti}} og {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}}. Tveir nákvæmu STEP-liðirnir eru gráir: þeir eru ekki tilbúnir í þessari útgáfu, svo notaðu {{ui:STEP (faceted, mesh kernel)}}.

## Sagan (vinstra megin)

Spjaldið vinstra megin er eiginleikasaga hlutarins, listinn sem PartCraft smíðar aftur frá toppi til botns.

- Fyrirsögnin er heiti hlutarins („Part1“ þar til þú endurnefnir hann).
- **Framflötur**, **Efriflötur** og **Hægriflötur** koma fyrst. Smelltu á einn til að velja hann; hann lýsist upp í skjánum.
- Fyrir neðan þá eru eiginleikarnir þínir í þeirri röð sem þeir voru gerðir. Skissa sem eiginleiki notar er inndregin undir þeim eiginleika.
- Fáni lengst til hægri á röð segir þér stöðuna:

| Fáni | Merking |
|---|---|
| (enginn) | Smíðað, og skissa er fullskilgreind |
| − | Skissa sem vantar skilgreiningu (hún getur enn hreyfst) |
| + | Skissa sem er of skilgreind |
| ⚠ | Smíðað, með viðvörun (færðu bendilinn yfir til að lesa) |
| ⚠ villa | Eiginleikinn mistókst. Færðu bendilinn yfir til að lesa af hverju, eða smelltu á hann |
| ⚠ ekki tilbúið | Eiginleikinn þarf annan sem mistókst eða er slökkt á |
| slökkt | Bælt |

- Hver eiginleiki sýnir aðalstærð sína eftir heiti sínu, eins og „25 mm“ fyrir útdrátt eða „Ø6.6 thru“ fyrir gat. Tvísmelltu á töluna, eða ýttu á {{key:F2}} á röðinni, til að breyta henni þar. Sjá [Breyta stærðum](topic:change-sizes).
- Smelltu á eiginleika til að breyta honum í hægra spjaldinu. Tvísmelltu á skissu til að opna hana.
- Þegar þú rúllar til baka birtist röðin **Afturrúllustika · rúlla áfram** í listanum. Eiginleikar fyrir neðan hana eru gráir og ekki smíðaðir.
- Þegar röð er í fókus færa {{key:Up}} og {{key:Down}} þig milli raða, og {{key:Alt+Up}} / {{key:Alt+Down}} færa eiginleikann sjálfan, þar sem sagan leyfir það.

Í samsetningu sýnir sama spjald **Hluta** (sá fyrsti er merktur „festur“) og **Tengla** í staðinn.

### Staðreyndir hlutarins

Undir sögunni sýnir **Hlutur**-kassinn **Rúmmál**, **Yfirborðsflatarmál**, **Stærð (X × Y × Z)**, **Göt í gegn**, **Búkar**, **Þríhyrninga**, fjölda **Eiginleika** og hve margir eru **Mistakast**. Rúmmál og flatarmál eru af föstu efni úr fasetum sem möskvakjarninn smíðar, örlítið undir réttu gildi fyrir kringlótt form (sjá [Eiginleikar og valkostir þeirra](topic:features#curves-resolution)).

Í samsetningu er kassinn undir fyrirsögninni **Samsetning**: Hlutar, Tilvik, Tenglar, Ekki tengt og Truflun.

## 3D-skjárinn (miðjan)

Skjárinn sýnir fasta efnið, grunnflötina og allar skissur sem eiginleiki hefur ekki enn notað.

Grunnflöturnar eru teiknaðir að fullu meðan hluturinn er tómur. Þegar hann hefur fast efni stíga þeir til baka: teiknaðir daufir, svo þeir hylji ekki hlutinn, og smellir fara í gegnum þá til hlutans. Þeir koma aftur í fullum mæli meðan þú velur hvar á að skissa ({{ui:Skissa}} án þess að neitt sé valið) og þegar þú velur einn í sögunni. {{ui:Sýn}} › {{ui:Grunnfletir}} felur þá alveg; þeir sjást samt meðan þú velur hvar á að skissa. PartCraft man þetta val.

- Dragðu til að snúa hlutnum, hægri- eða miðdragðu til að hliðra, og rúllaðu hjólinu til aðdráttar við bendilinn. Nánar í [Lyklar og mús](topic:keyboard).
- Færðu bendilinn yfir flöt, brún eða plan til að sjá það lýsast upp. Smelltu til að velja. Fletir lýsast upp í heild og brúnir eru teiknaðar og valdar í heild. {{key:Shift}}+smelltu safnar nokkrum brúnum eða flötum. Þau haldast merkt.
- Útsýnisteningurinn efst hægra megin snýst með hlutnum: smelltu á flöt, brún eða horn til að líta þaðan, dragðu til að snúa, og húshnappurinn fer aftur í upphafið. Sjá [Útsýnisteningurinn](topic:view-cube).
- Valinn útdráttur sýnir appelsínugula ör á endaflatinum sínum, og snúningur bogadregna ör við enda snúnings síns: dragðu hana til að breyta dýpt eða horni, eða skrifaðu í reitinn við hliðina. Sjá [Breyta stærðum](topic:change-sizes#drag-it-in-the-view).
- Þegar hlutur er tómur listar reitur með fyrirsögninni **Byrja hluta** fyrstu skrefin.
- Slepptu `.partcraft.json` eða `.partcraft-asm.json` skrá hvar sem er á skjáinn til að opna hana. Skrá `.step`, `.stp`, `.stl`, `.obj`, `.3mf` eða `.3dm` sem er sleppt þar opnast sem fast efnishlutur.

### Meðan þú velur brúnir eða fleti

Eftir {{ui:Ávala}}, {{ui:Skábrúna}} eða {{ui:Skel}} án þess að neitt sé valið (eða {{ui:Velja brúnir}} á slíkum eiginleika), sýnir hluturinn sig eins og hann var áður en sá eiginleiki var gerður. Smelltu á brúnir eða fleti til að bæta þeim við eða taka þá út; merkin sýna hvað er í valinu. {{ui:Lokið}} eða {{key:Esc}} klárar. Sjá [Ávalaðu, skáðu og holaðu](topic:fillet-chamfer-shell).

### Á teikniblaðinu

{{ui:Teikning}} kemur í stað 3D-skjásins fyrir A3-teikniblaðið. Hjólið stækkar og minnkar, hægri- eða miðdrag hliðrar, og {{key:F}} passar. Sjá [Gerðu teikningu](topic:drawing-pdf).

### Meðan skissa er opin

Skjárinn snýst til að horfa beint á skissuplanið og 2D-skissulag birtist ofan á honum. Hluturinn sýnir aðeins eiginleikana sem gerðir voru áður en þessi skissa var gerð. Ræma efst til vinstri sýnir stöðukubb skissunnar („Fullskilgreint“, „Vantar skilgreiningu · 3 frígráður“ og svo framvegis) og heiti hennar, eins og „Sketch2 á fleti Extrude1“.

## Eiginleikaspjaldið (hægra megin)

Spjaldið hægra megin sýnir það sem er valið, og fyrirsögn þess nefnir það:

- **Hlutur** (ekkert valið): **Heiti** hlutarins og stillingin **Ferlar**.
- Plan: hnappur {{ui:Skissa á því}}.
- **Flötur**: hvaða tegund hann er (sléttur flötur, sívalningur með radíus og ás sínum, keila, kúla eða tóróíð), flatarmál hans, hvaða eiginleiki bjó hann til, og fyrir sléttan flöt {{ui:Skissa á þessum fleti}}, {{ui:Hornrétt á}}, {{ui:Flytja flöt út sem DXF}}, {{ui:Draga út úr honum}}, {{ui:Skera inn í hann}} og {{ui:Gat hér}} (sjá [Ýta eða toga allan flötinn](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Brún**: tegund hennar (bein, hringur með miðju og radíus, eða ferill), lengd hennar og flatarnir tveir sem hún liggur á milli (eins og „Extrude1 endaflötur og Extrude1 hlið“), með hnöppunum {{ui:Ávala}} og {{ui:Skábrúna}}.
- Nokkrar brúnir eða fletir valdir með {{key:Shift}}: hversu mörg, með {{ui:Ávala}} og {{ui:Skábrúna}} fyrir brúnir, og {{ui:Hreinsa}}.
- Eiginleiki: tölur hans og valkostir, víddir skissu hans, síðan {{ui:Bæla}}, {{ui:Rúlla til baka hingað}}, {{ui:Færa upp}}, {{ui:Færa niður}}, {{ui:Eyða}} og **Heiti** hans.
- Opin skissa: staða hennar, tengslin sem þú getur bætt við valið, listi yfir tengsl og víddir, **Bæta við eftir hnitum**, og {{ui:Hætta í skissu}}, {{ui:Passa}} og {{ui:Flytja út sem DXF}}.
- Á teikniblaðinu: snið- og smáatriðastillingar, eða valið GD&T-tákn.
- Í samsetningu: samsetningin, valinn hluti eða valinn tengill.

Hver talnareitur tekur gildi þegar þú ýtir á {{key:Enter}} eða {{key:Tab}}, eða smellir annars staðar. Hluturinn smíðast strax; það er enginn OK-hnappur. Notaðu {{key:Mod+Z}} til að fara til baka.

## Stöðustikan (neðst)

- Vinstra megin hnit bendilsins í skissunni (aðeins meðan skissa er opin).
- Í miðjunni skilaboð: hvað á að gera næst, og af hverju einhverju var hafnað. Lestu þau þegar ekkert virðist gerast.
- Nálægt hægri endanum, kjarnamerkið: alltaf „Möskvakjarni“ í þessari útgáfu. Færðu bendilinn yfir það til að sjá hvað það þýðir. Sjá [Möskvakjarninn](topic:solid-kernels).
- Hægra megin, kubbur: „Endursmíða…“ meðan hluturinn er smíðaður aftur, síðan „Endursmíðað á … ms“ þegar allt er í lagi, eða „1 eiginleiki bilar“. Í samsetningu segir hann „Staðsett á … ms“ eða telur vandamál með tengla.

Sjá einnig [Byrjaðu handbók í vinnusvæðinu Myndskreyting](topic:illustrate): vinnusvæðið sem býr til samsetningarhandbækur úr hlutum og samsetningum þínum.

## Á þröngum skjá

Allt að 760 pixlum á breidd, eins og í síma, heldur skjárinn skjánum: tækjastikan er ein röð sem skrunar til hliðar, og spjöldin opnast sem blöð frá stiku neðst. {{ui:Verkfæri}} felur tækjastikuna og {{ui:Færa}} setur hana neðst. Sjá [Snertiborð, snerting og litlir skjáir](topic:trackpad-and-touch).
