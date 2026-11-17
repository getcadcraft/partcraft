---
title: Komdu frá öðru parametrísku líkanaforriti
summary: Hvernig venjur skrifborðsforrita fyrir parametrísk hluti yfirfærast yfir í PartCraft, og þau atriði sem valda reyndum notendum vandræðum á fyrstu klukkustundinni.
keywords: skipti, flytja, kunnuglegt, eiginleikastjóri, hönnunartré, snjallvídd, útdráttur til að bæta við, úrtak, gatagaldur, tengsl, árekstragreining, afturrúllustika, eiginleikaspjald, mús, munur
from: fbacaee1
---

Ef þú hannar hluti í SolidWorks verða flestar hugmyndir PartCraft kunnuglegar: skissur á Framplani, Toppplani og Hægra plani, tengsl og snjallvíddir, söguferill með afturrúllustiku, og samsetningar raðaðar með tengslum. Leiðin að þeim er önnur á stöðum og þessi fyrsta útgáfa gerir minna. Þessi síða sýnir hvernig venjur þínar eiga við og listar þau atriði sem koma á óvart.

## Venjur, færðar yfir

| Þú ert vanur | Í PartCraft |
|---|---|
| Hönnunartréð vinstra megin | Sagan vinstra megin: plön, síðan eiginleikar, með skissum inndregnum undir eiginleikanum sem notar þær |
| Framplan, toppplan og hægra plan | Sömu þrjú, í gegnum upphafspunktinn. Front er XY-planið, Top er XZ, Right er YZ; Y vísar upp |
| Skissa á plan eða flöt, síðan staðfestingarhorn til að hætta | {{ui:Skissa}} ({{key:S}}) á völdu plani eða sléttum fleti; {{ui:Hætta}} eða {{key:Esc}} þar til hún lokast |
| Snjallvídd | {{ui:Málsetning}} ({{key:D}}). Smelltu á einn eða tvo hluti, síðan á staðinn þar sem talan fer. Hvar þú setur hana ræður því hvort hún er lárétt, lóðrétt eða samsíða |
| Tengsl í eiginleikaspjaldinu | Veldu hluti, síðan tengslahnappana í hægra spjaldinu (Samfall, Lárétt, Samsíða, Snertill, Jafnt og svo framvegis) |
| Sjálfvirk tengsl við skissun | Smellur bæta við samfalls-, punkt-á-feril-, láréttum og lóðréttum tengslum |
| Blár / svartur / rauður litur á skissum | Sama hugmynd: blátt er vanskilgreint, svart er fullskilgreint, rautt er ofskilgreint. Merkið sýnir hve mörg frelsisstig eru eftir |
| Miðlína fyrir snúninga | {{ui:Miðlína}} ({{key:N}}); {{ui:Snúningur}} notar fyrstu miðlínuna nema þú veljir annan ás |
| Ávala í skissu | {{ui:Ávala}} ({{key:F}}) í skissu: smelltu á hornið, sláðu inn radíusinn |
| Rofi fyrir hjálparrúmfræði | {{ui:Hjálparrúmfræði}} ({{key:Q}}) |
| Útdreginn upphleðsla | {{ui:Útdráttur}}: Blint, Miðplan, Upp að fleti / næsta / hornpunkti, Forskot frá fleti, önnur stefna, halli, ein útlína (Veldu svæði) |
| Útdreginn úrtak | {{ui:Úrtak}}: byrjar sem Í gegnum allt; skiptu yfir í Blint fyrir vasa |
| Snúin upphleðsla / úrtak | {{ui:Snúningur}} / {{ui:Meira}} › {{ui:Snúið úrtak}} |
| Viðmiðsplan / ás / punktur | {{ui:Meira}} › {{ui:Plan}}, {{ui:Ás}}, {{ui:Punktur}} (sjá [Viðmiðsplön, ásar og punktar](topic:reference-geometry)) |
| Skotin / brúuð upphleðsla eða úrtak, halli | {{ui:Meira}} › {{ui:Halli}} á sléttum flötum (sjá [Sópun, brú og halli](topic:sweep-loft-draft)). {{ui:Ferilsdráttur}} og {{ui:Brú milli sniða}} eru ekki smíðuð enn í þessari útgáfu (þau þurfa nákvæman kjarna) |
| Gatagaldur | {{ui:Gat}} á hvern lausan skissupunkt: einfalt, mótsökkun, niðursökkun (90° / 82°) eða þrætt ISO-metrískt M2–M24, í gegnum eða blint |
| Línulegt / hringlaga mynstur, spegling | {{ui:Línulegt}}, {{ui:Hringlaga}}, {{ui:Spegling}} (eiginleikar eða allur líkaminn) |
| Ávalur og skábrún á brúnum | {{ui:Ávala}} / {{ui:Skábrúna}}: smelltu á brún, {{key:Shift}}+smelltu á fleiri, síðan á hnappinn. Einn radíus; jafnar, tveggja fjarlægða eða fjarlægðar-og-horns skábrúnir. Í þessari útgáfu aðeins beinar brúnir milli tveggja sléttra fleta, og ávölur sem mætast í horni eru skásettar. Ávalaðu eða skáskerðu bognar brúnir í skissunni ({{ui:Ávala}} í skissu, {{key:F}}) |
| Skel | {{ui:Skel}}: smelltu á sléttu fletina til að opna, síðan á hnappinn. Ein veggþykkt |
| Opna STEP-skrá | {{ui:Opna}}: lesin sem þríhyrningar, traustur líkami til að byggja á ([Opna STEP-skrá](topic:import-step)) |
| Breyta eiginleika, síðan Í lagi | Smelltu á eiginleikann; breyttu tölum hægra megin; hann endursmíðast meðan þú slærð inn. Ekkert Í lagi, ekkert Hætta við: notaðu {{key:Mod+Z}} |
| Breyta skissu | Tvísmelltu á skissuna í sögunni |
| Endursmíða | Sjálfvirkt eftir hverja breytingu. Það er enginn endursmíðunarlykill |
| Bæla / hætta við bælingu | {{ui:Bæla}} / {{ui:Hætta við bælingu}} í hægra spjaldinu |
| Draga afturrúllustikuna | {{ui:Rúlla til baka hingað}} á eiginleika; smelltu á „Afturrúllustika · rúllaðu áfram“ til að fara aftur |
| Draga eiginleika í trénu til að raða | {{ui:Færa upp}} / {{ui:Færa niður}} eða {{key:Alt+Up}} / {{key:Alt+Down}}; hafnað með ástæðu þegar það myndi brjóta háð |
| Breyta víddum með tvísmelli á líkanið | Veldu eiginleikann: víddir skissunnar hans eru skráðar í hægra spjaldinu |
| Tengsl: samfall, samás, fjarlægð, horn | {{ui:Tengill}} ({{key:J}}): veldu flatan flöt á hvorum hluta; tengillinn setur þá flöt á móti flöt. **Miðja á** ás virkar eins og samás; **Færsla** eins og fjarlægð; **Horn** eins og horn |
| Fastur íhlutur | Fyrsti hlutinn er jarðtengdur; {{ui:Gera hann að jarðtengda hlutnum}} breytir því |
| Setja inn íhlut | {{ui:Bæta við afriti}}, {{ui:Tvöfalda}} (annað afrit) eða {{ui:Setja inn}} (úr hlutaskrá) |
| Breyta hluta í samsetningu | {{ui:Breyta hlut}}, síðan {{ui:Til baka}} |
| Árekstragreining | {{ui:Árekstur}} |
| Færa íhlut til að sjá hreyfingu | Dragðu sleðann fyrir horn eða færslu á snúnings- eða rennitengli; {{ui:Athuga hreyfinguna fyrir árekstra}} fer í gegnum hann. Hlutur án tengils: **Færa með hendi** (örvar til að draga, eða slegin gildi) |
| Mæla / skoða | {{ui:Sýn}}, síðan {{ui:Mæla}} ({{key:M}}): fjarlægðir, horn, radíusar, flatarmál; {{ui:Massaeiginleikar}} |
| Sundurtekin sýn, efnislisti | Í samsetningu með engu völdu: **Sundurtekin sýn** og **Efnislisti** í hægra spjaldinu |
| Massaeiginleikar | Reiturinn **Hluti**: rúmmál, yfirborðsflatarmál, stærð, á þríhyrningslíkaninu (aðeins of lágt á kringlóttum hlutum). Enginn massi: engin efni eru enn til |
| Vista, Vista sem STEP | {{ui:Vista}} sækir `.partcraft.json`; {{ui:Flytja út}} hefur STL, 3MF, nákvæmt STEP (AP242 eða AP214), þríhyrnings-STEP, DXF og PDF-teikningu |
| Búa til teikningu úr hlutnum | {{ui:Teikning}}: sjálfvirkt A3-blað með þremur sýnum, samsæta, einu sniði, einu smáatriði, viðmiðum, rúmfræðilegum stjórnrömmum og frágangstáknum. Aðeins heildarstærðir eru víddaðar |
| Miðjudraga til að snúa | **Vinstri-draga** snýr hér. Miðju- eða hægridráttur færir. Hjólið aðdrar við bendilinn |
| Stefna sýnar, Normal To | {{ui:Sýn}}-valmynd; {{ui:Hornrétt á}} fyrir valinn flöt, plan eða skissu |
| Aðdráttur að passa (F) | {{key:F}}, eða {{ui:Passa}} (í skissu er {{key:F}} Ávala-verkfærið) |
| Hægri-smelluvalmyndir | Engar. Hægridráttur færir; í skissu endar hægri smellur keðju línu |

:::tip
Ef hendurnar þekkja SolidWorks, veldu valmyndarstílinn {{ui:Eiginleikatré}} í {{ui:Stillingar}} › {{ui:PartCraft}} › {{ui:Valmyndir, takkar og mús}}: borða með flipunum Eiginleikar, Skissa, Yfirborð, Meta, Teikning, Samsetning og Sýn, miðjuhnappurinn snýr, {{key:Shift}} og miðjuhnappurinn færa, og vinstri hnappurinn velur aðeins. Sjá [Valmyndir, takkar og mús](topic:menus-keys-and-mouse).
:::

## Atriði sem valda vandræðum

**Öll skissan er sniðið.** Útdráttur og snúningur nota allar lokuðu lykkjur í skissunni. Þú getur ekki valið eitt svæði eða eina útlínu skissu fyrir eiginleika. Notaðu eina skissu fyrir hvern eiginleika.

**Hvaða skissu eiginleiki tekur.** Eiginleiki notar skissuna sem þú lokaðir rétt áður eða þá sem er valin í sögunni. Með engu valið tekur hann nýjustu skissuna sem enginn eiginleiki notar ennþá. Ef þú fær ranga skissu skaltu velja réttu skissuna og velja eiginleikann aftur.

**Breytingar gilda meðan þú slærð inn.** Það er enginn eiginleikagluggi með Í lagi og Hætta við. Sérhver tala endursmíðar strax, og {{key:Mod+Z}} er leiðin til baka. Afturköllunarlistinn nær yfir breytingar á skissum, eiginleikum og stillingum jafnt.

**Yfirskilgreining er aldrei látin standa þegjandi.** Það eru engar stýrðar (tilvísunar-)víddir. Vídd sem hin tengslin ákvarða nú þegar er skráð sem ofskilgreind („er þegar gefið til kynna. Eyddu því.“). Stangandi vídd skilur rúmfræðina eftir óhreyfða og verður rauð. Eyddu einni þeirra, eða afturkallaðu.

**Sópanir og brýr eru ekki smíðaðar enn; ávölur, skábrúnir, skeljar og hallar hafa takmarkanir.** Þessi útgáfa PartCraft smíðar alla hluti með möskvakjarna; stöðustikuflísin segir alltaf „Möskvakjarni“. Ávölur og skábrúnir virka á beinum brúnum milli tveggja sléttra fleta, og þar sem ávölur mætast í horni eru þær skásettar, ekki blandaðar. Skeljar opnast, og hallar halla aðeins sléttum fleti. Eiginleikar sem þurfa nákvæman kjarna eru áfram smellanlegir en segja „ekki smíðað enn“ þegar þeir eru valdir. Sjá [Möskvakjarninn](topic:solid-kernels) og [Það sem er ekki smíðað enn](topic:not-built-yet).

**Tvítakkar kallaðir Ávala.** Í skissu ávalar {{ui:Ávala}} ({{key:F}}) hornpunkta skissunnar. Á hlutnum ávalar {{ui:Ávala}} í hópnum Eiginleikar fastar brúnir (beinar brúnir milli sléttra fleta í þessari útgáfu). Það er engin sópun eða brú í þessari útgáfu: sjá [Það sem er ekki smíðað enn](topic:not-built-yet).

**Göt þurfa lausa punkta.** {{ui:Gat}} borar í punkta sem búnir eru til með Punkt-verkfærinu. Miðjur hringja og endar lína telja ekki.

**Í gegnum allt er aðeins fyrir úrtök.** Útstæða þarf dýpt. Það eru engin endaskilyrði „upp að hornpunkti / yfirborði / næsta“ enn.

**Hluturinn er þríhyrndur.** Möskvakjarninn smíðar kringlótta fleti úr sléttum þríhyrningum, þannig að sýnin, rúmmál, STL- og 3MF-útflutningar eru gerð úr þeim: **Ferlar** í spjaldi hlutarins gerir þá fínni. Nákvæmi STEP-útflutningurinn er ekki þannig: hann skrifar kringlótta fleti á sínum réttu yfirborðum.

**Millimetrar eingöngu.** Engin tommustilling er enn til. Margfaldaðu tommustærðir með 25.4 þegar þú slærð þær inn.

**Y vísar upp.** Framplanið snýr að þér og Topp horfir niður á hlutinn, eins og þú býst við, en heimsásinn sem vísar upp er Y. STL-, 3MF- og nákvæmir STEP-útflutningar eru snúnir þannig að Z vísi upp; þríhyrnings-STEP heldur Y uppi.

**Tengsl eru fletir, ekki rúmfræðipör.** Tengill byrjar alltaf frá tveimur sléttum flötum sem settir eru flötur á móti fleti. Fyrir pinna í gati veldu þú sléttan flöt umhverfis gatið og öxlina á pinnanum, og stilltu síðan **Miðja á** á ás gatsins og ás snúnings pinnans. Hlutir sem tenglar ná ekki til haldast þar sem þeir voru settir inn; ekki er hægt að draga þá. Tenglar í lykkju eru ekki leystir.

**Vistun er niðurhal.** Það er engin skrá sem þú yfirskrifar stöðugt. Hver vistun er ný skrá í niðurhalsmöppunni þinni. Nefndu hlutinn fyrst, og geymdu skrárnar í verkefnamöppu.

**Engar samhengisvalmyndir, engir skipanaflipar.** Allt er á tækjastikunni og hægra spjaldinu, og tækjastikan breytist eftir því sem þú ert að gera: skissuverkfærin birtast aðeins í skissu, samsetningarverkfærin aðeins í samsetningu.

**Takkar eru stafir inni í skissu.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} og {{key:S}} velja verkfæri án breytitakka. Sjá [Lyklar og mús](topic:keyboard).
