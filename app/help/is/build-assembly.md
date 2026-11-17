---
title: Byggðu samsetningu með tenglum
summary: Byrjaðu samsetningu úr hluta, settu inn afrit og aðrar hlutaskrár, tengdu þá saman með föstum, snúnings-, rennu-, sívalnings-, flat-, kúlu- og festipinnatenglum á flötum flötum, miðjaðu tengla á ásum, breyttu hluta á staðnum og vistaðu samsetninguna.
keywords: samsetning, tenging, tengsl, tengill, lykkja, lokuð lykkja, hlekkur, fjórstangarhlekkur, vélbúnaður, fastur, snúningur, rennistykki, sívalningur, plan, kúla, kúlutengill, kúlulaga, festipinni í rauf, setja inn íhlut, jarðtengdur, festur, samás, samfall, breyta hluta, í samhengi, partcraft-asm
from: a53bbfef
---

Samsetning raðar hlutum saman. Í PartCraft **staðsetja tenglar** hlutina: hver tengill situr á flatum fleti á hvorum tveggja hlutanna og setur þá flöt á móti flöt. Snúningstengill leyfir einum hlut að snúast, rennitengill leyfir honum að renna, fastur tengill heldur honum.

## Byrjaðu samsetningu

1. Búðu til hlut með föstu formi (tómur hlutur getur ekki farið í samsetningu: „Smíðaðu fast form fyrst og settu það síðan í samsetningu.“).
2. Veldu {{ui:Samsetning}} á tækjastikunni.

Stöðustikan segir „Samsetning hafin með Part1 sem jarðtengdum hlut. Settu inn fleiri hluti (Bæta við afriti, Setja inn eða Breyta › Tvöfalda), tengdu þá síðan.“ Vinstra spjaldið sýnir nú **Hluti** og **Tengla**, og tækjastikan sýnir verkfæri samsetningar. Skissu- og eiginleikaverkfærin fela sig.

Fyrsti hluturinn er **jarðtengdur**: hann hreyfist aldrei og allt annað er staðsett miðað við hann.

## Settu inn hluta

- {{ui:Bæta við afriti}} setur inn öðru afriti af völdum hlut (eða síðasta hlut). Afrit deila einum hluta: breyttu honum og öll afrit breytast.
- {{ui:Tvöfalda}} ({{key:Mod+D}}) í hópnum Breyta gerir það sama fyrir valinn hlut. {{key:Mod+C}} og {{key:Mod+V}} afrita hlut og líma hann við hliðina á hinum, í þessari samsetningu eða annarri; {{key:Mod+Shift+V}} límir hann á sama stað. Sjá [Afritun, líming og tvöföldun](topic:copy-paste).
- {{ui:Setja inn}} setur inn hlut úr `.partcraft.json`-skrá á tölvunni þinni. Hluturinn er afritaður inn í samsetninguna.

Nýir hlutir birtast 20 mm til hægri við allt sem þegar er þar og haldast þar þangað til tengill staðsetur þá. Hlut án tengils má líka færa með hendi: slegin gildi eða örvar sem þú dregur (sjá [Efnislisti, sundurtekin sýn og hreyfing hluta](topic:assembly-bom-explode)).

## Tengdu tvo hluti

1. Veldu {{ui:Tengill}} eða ýttu á {{key:J}}. Hægra spjaldið segir **Nýr tengill**.
2. Smelltu á flatan flöt á fyrsta hlutanum. Hann lýsist upp.
3. Smelltu á flatan flöt á öðrum hlutanum.

Annar hluturinn hoppar þannig að flöturinn hans liggi upp við flöt fyrsta hlutans og snúi að honum. Tengillinn birtist undir **Tenglar**, til dæmis „Revolute1“, og hægra spjaldið sýnir stillingar hans.

- Ef báðir fletir voru búnir til með snúningi, byrjar tengillinn sem **snúningstengill**; annars sem **fastur**. Breyttu því síðar.
- Bognir fletir er ekki hægt að velja: „Þessi flötur er bogadreginn. Veldu flatan flöt (til að snúast um gat eða ás snúnings skaltu velja hann síðar í tenglinum).“
- {{key:Esc}} hættir við tengil sem þú hefur byrjað á (eða smelltu á hlut í listanum vinstra megin).

### Stillingar tengils

| Stilling | Hvað hún gerir |
|---|---|
| **Gerð** | Einn af tenglunum í töflunni hér að neðan |
| **Horn (°)** | Snýr seinni hlutanum um ás tengilsins (ferhyrnt á fletina) |
| **Færsla (mm)** | Færir seinni hlutann eftir ásnum, frá fletinum (neikvæð gildi þrýsta inn í hann) |
| **Eftir X**, **Eftir Y**, **Halli um X**, **Halli um Y**, **Eftir raufinni**, **Stefna raufar** | Hin gildin, sýnd fyrir tenglana sem nota þau |
| **Miðja á** (fyrir hverja hlið) | Þar sem ás tengilsins sker flötinn: „Eigin uppruni flatarins“, ás snúnings („Axis of Revolve1“) eða ás eins gats („Hole1, hole 2“) |

Hvert gildi sem tengill leyfir að hreyfist hefur sleða undir boxinu sínu; hin eru stillt einu sinni.

| Tengill | Hvað hreyfist | Stillt einu sinni |
|---|---|---|
| **Fastur** | ekkert | Horn, færsla |
| **Snúningstengill** | Horn (lömun) | Færsla |
| **Rennitengill** | Færsla (skúffa) | Horn |
| **Sívalningstengill** | Horn og færsla (öxull í legu) | |
| **Flattengill** | Eftir X, Eftir Y yfir flötinn, og Horn (hlutur sem rennur á borði) | |
| **Kúlutengill** | Horn (snúningur) og Halli um X og Y, um miðju tengilsins (kúluliður) | |
| **Festipinni í rauf** | Eftir raufinni og Horn (festipinni í beinni rauf) | Stefna raufar: horn raufarinnar frá X flatarins |

X og Y flatarins eru þau sem fyrsta hlutans flötur hefur; miðja tengilsins er stillt með **Miðja á**.

„Eigin uppruni flatarins“ er upphafspunktur hlutans varpaður á flötinn, sem er oft ekki þar sem þú vilt að hlutarnir stillist saman. Fyrir kringlótta hluti og pinna skaltu stilla **Miðja á** á ás snúnings eða gats á báðum hliðum: ásarnir stillast þá saman, eins og samáss-tengsl.

### Dæmi: tveir flansar boltaðir flöt á móti fleti

1. Opnaðu flanshlutinn (snúningur með hringlaga mynstri af götum) og veldu {{ui:Samsetning}}.
2. Veldu {{ui:Bæta við afriti}}.
3. Ýttu á {{key:J}}, smelltu á flata flötinn á diski fyrsta flansins (fletinum sem boltagötin byrja á), og síðan á sama flöt á öðrum flansinum. Fletirnir voru búnir til með snúningi, þannig að tengillinn er snúningstengill.
4. Stilltu **Miðja á** á „Axis of Revolve1“ fyrir báðar hliðar. Flansarnir deila nú ás.
5. Skrifaðu `22.5` í **Horn (°)** til að stilla boltagötin saman, eða dragðu sleðann.

## Lokaðar lykkjur: hlekkir

Hlutir tengdir í hring (fjórstangarhlekkur, sveif og rennistykki, rammi stífaður báðum megin) mynda **lykkju**. PartCraft leysir hverja lykkju þannig að hún lokist: tenglarnir á henni taka þau gildi sem loka hringnum og hreyfast eins lítið og hægt er frá fyrri stöðu.

- **Settu eða dragðu** gildi tengils á lykkju og restin af lykkjunni fylgir. Fyrir fjórstangarhlekk dregurðu **Horn** sveifarinnar og tengistöngin og slöngustöngin hreyfast með. Gildið sem þú setur helst; hin eru reiknuð út frá því.
- Í listanum er tengill á lykkju sem getur enn hreyfst **blár**: annað gildi gæti verið sett. Lykkja sem getur ekki hreyfst (stífaður rammi) helst svört. Lykkja sem getur ekki lokast er **rauð**.
- Reiturinn **Hluti** sýnir **Lykkjur**: hversu margar eru lokaðar og hversu mörg gildi geta enn hreyfst, til dæmis „1 lokuð; 1 gildi getur enn hreyfst“.
- {{ui:Athuga hreyfinguna fyrir árekstra}} fer í gegnum tengil á lykkju með lykkjuna á eftir sér, skref fyrir skref (sjá [Athugaðu samsetningu fyrir árekstra og hreyfingu](topic:check-assembly)).

Flatur hlekkur úr flötum stöngum verður að stemma í dýpt: tveir hlutir tengdir flötur á móti fleti beggja megin við hring þurfa sömu staflahæð í báðar áttir. Notaðu **Færslu** tengils til að lyfta hluta þar sem staflan gengur ekki upp, annars lokast lykkjan ekki.

## Vinna með hlutunum

Smelltu á hlut í sýninni eða í listanum til að velja hann. Hægra spjaldið sýnir heiti hlutarins, hversu mörg afrit eru til, rúmmál hans, tengla hans, og hvort hann er jarðtengdur, ákvarðaður af tenglum sínum, eða „Ekki tengt: stendur þar sem það var sett“. Hnappar:

- {{ui:Breyta þessum hluta}} (eða {{ui:Breyta hlut}} á tækjastikunni, eða tvísmelltu á hlutinn í listanum): opnar hlutinn til breytinga;
- {{ui:Setja inn afrit}};
- {{ui:Gera hann að jarðtengda hlutnum}};
- {{ui:Fjarlægja}}: fjarlægir líka tengla hans, eftir staðfestingu.

Ef þú reynir að fjarlægja síðasta hlutinn segir samsetningin: „Samsetning heldur að minnsta kosti einum hluta. Lokaðu henni í staðinn.“

### Breyttu hluta á staðnum

1. Veldu hlut og veldu {{ui:Breyta hlut}}. Hlutinn opnast með sögu sinni; fyrirsögnin segir „Bracket (í samsetningunni Bracket)“.
2. Breyttu honum eins og öðrum hlut.
3. Veldu {{ui:Til baka}} á tækjastikunni. Samsetningin uppfærist: sérhvert afrit af þeim hlut breytist, og tenglar á fleti sem gerðir eru úr skissubrúnum fylgja með.

Að skila breytingunni er eitt skref í afturköllunarlista samsetningarinnar.

## Afturköllun, vistun og lokun

- Samsetningin hefur sinn eigin afturköllunarlista: {{key:Mod+Z}} og {{key:Mod+Y}} virka á tengla, innsetningar og stillingar.
- {{ui:Vista}} eða {{key:Mod+S}} sækir `<nafn samsetningar>.partcraft-asm.json` með öllum hlutum innan í. Opnaðu hana síðar með {{ui:Opna}}.
- {{ui:Loka}} lokar samsetningunni og fer aftur í hlutinn sem þú byrjaðir á. Ef samsetningin er óvistuð spyr hún: {{ui:Hætta við}}, {{ui:Henda samsetningunni}} eða {{ui:Vista fyrst}}.
- Til að endurnefna samsetninguna smellirðu á tómt rými svo ekkert sé valið og breytir **Heiti** í hægra spjaldinu.

## Stórar samsetningar

Samsetning getur haldið þúsundum afrita af fáeinum hlutum. Afrit af einum hlut eru teiknuð saman, tengill sem þú snýrð staðsetur aðeins hlutina sem eru á bak við hann, og hlutalistinn sýnir fyrstu raðirnar með hnappinum „Sýna meira“ undir sér (valinn hlutur er alltaf á listanum).

- Meðan þú snýrð eða aðdrar sýnina er samsetning með meira en um 300.000 þríhyrninga teiknuð sem einn kassi á hvern hlut, og síðan í fullri mynd stuttu eftir að þú hættir.
- {{ui:Sýn}} › {{ui:Létt birting}} heldur kössunum alltaf. Að velja hluti og tengla notar samt raunverulegu hlutina.
- Hversu hratt hún snýst veltur líka á skjákortinu þínu. Tölurnar sem PartCraft hefur mælt eru í útgáfuskýringunum ásamt vélinni sem þær komu frá.

## Vandamál með tengla

- Hlutur sem enginn tengill nær til er skráður sem **laus** og spjaldið segir: „Bracket2 er ekki tengdur jarðtengda hlutanum, þannig að hann stendur þar sem hann var settur.“
- Lykkja sem getur ekki lokast (lengdirnar ná ekki, takmörk stöðva tengil, fletirnir stemma ekki í dýpt): „Revolute3 lokar lykkju sem getur ekki lokast: hún er 2.000 mm af. Athugaðu fleti, færslur og takmörk tengla lykkjunnar.“ Tenglar hennar verða rauðir.
- Ef flötur eða ás sem tengill notar er horfinn eftir breytingu á hlut: „Flöturinn sem þessi tengill notar er horfinn úr Bracket.“ Fjarlægðu tengilinn og búðu hann til aftur.

Næst: [Athugaðu samsetningu fyrir árekstra og hreyfingu](topic:check-assembly).
