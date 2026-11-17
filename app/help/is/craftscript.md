---
title: Skrifaðu og keyrðu skriftur (Skriftvinnusvæðið)
summary: Skriftvinnusvæðið skref fyrir skref: skrifaðu CraftScript- eða Lua-skrift, keyrðu hana með F5, lestu stjórnborðið, geymdu niðurstöður í breytunum fyrir næstu skrift, birtu net, reiti og línurit, stöðvaðu keyrslu og vistaðu skriftur með hlutanum.
keywords: skrift, skriftun, skrifa skriftu meðan líkan er mótað, losa út, annar skjár, param, params, breytur í skriftum, CraftScript, Lua, kóði, forrit, ritill, stjórnborð, REPL, skipanalína, keyra, F5, keyra val, stöðva, forritsbreytur, vinnusvæði, línurit, reitur, net, skýring, undirskjár, greining, sjálfvirkni, fylki, talnagreining
from: d0003e89
---

**Forskoðun.** Skriftun er ný í PartCraft 0.3 og er forskoðun: tungumálið, safnið og hvernig skriftur eru vistaðar geta enn breyst, og skriftur sem eru skrifaðar núna gætu þurft smávægilegar breytingar síðar. Láttu okkur vita hvað bilar.

Skriftvinnusvæðið keyrir þína eigin útreikninga við hlið hlutans: litlar summur, heilar greiningar eða skriftur úr [greiningarsafninu](topic:craftscript-library). Skriftur eru skrifaðar í **CraftScript** (fylkismál, mjög líkt MATLAB, sjá [CraftScript-tungumálið](topic:craftscript-language)), í **Lua** (sjá [Skriftur í Lua](topic:craftscript-lua)) eða í **Python** (sjá [Skriftur í Python](topic:craftscript-python)).

Veldu **Skrift** í reitnum **Vinnusvæði** vinstra megin á tækjastikunni. Hlutanum er ekki breytt. Hægra spjaldið verður skriftuspjaldið (breiðara en venjulega; dragðu jaðarinn til að breyta því, eða færðu það á annan skjá með {{ui:⋯}}-valmyndinni, sjá [Raða spjöldum](common:arrange-panels)).

## Skrifaðu skriftu meðan þú mótar

Þú þarft ekki að yfirgefa Hönnun til að skrifa skriftu. Í Hönnun er hægra spjaldið með flipanum {{ui:Skrift}} sem heldur sama ritli, stjórnborði, breytum og safni, með sömu skriftum. Eiginleikatréð og sýnin virka áfram: smelltu á eiginleika til að velja hann, tvísmelltu á skissu til að breyta henni, snúðu sýninni, farðu svo aftur á flipann {{ui:Skrift}} og ýttu á {{key:F5}}.

Það sem skriftur **sýna** (net, reitir, línurit, töflur) er ekki teiknað yfir líkanið þitt í Hönnun: stjórnborðið segir það, og Skriftvinnusvæðið hefur allt þegar þú skiptir yfir.

{{ui:Losa út}}, við hliðina á {{ui:Keyra}}, færir allt spjaldið í sinn eigin glugga, til dæmis á annan skjá, þannig að ritillinn og heildarsýnin séu hlið við hlið. {{ui:Setja aftur}} festir það aftur. Sjá [Raða spjöldum](common:arrange-panels).

## Keyrðu fyrstu skriftuna

1. Skrifaðu í ritilinn, til dæmis:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Ýttu á {{key:F5}} (eða {{ui:Keyra}}). Stjórnborðið undir ritlinum sýnir það sem skriftan prentaði, og "Done in … s". Línuritið birtist í **undirskjánum** meðfram neðri hluta þrívíddarsýnarinnar.
3. Lína án semíkommu prentar gildi sitt, eins og í MATLAB: `a = 3` prentar `a = 3`; `a = 3;` prentar ekkert.
4. Til að keyra aðeins hluta skriftunnar, veldu línurnar og ýttu á {{key:Mod+Enter}} ({{ui:Val}}). Án vals keyrir hún línuna sem bendillinn er á.
5. Línan neðst í stjórnborðinu (eftir `>>`) keyrir eina setningu þegar þú ýtir á {{key:Enter}}. {{key:Up}} og {{key:Down}} sækja fyrri línur.

## Finna, fella og klára

- **Leita og skipta út.** Ýttu á {{key:Mod+F}} (eða {{key:Mod+H}} til að skipta líka út). Stika opnast fyrir ofan kóðann: skrifaðu það sem þú leitar að; samsvarandi staðir lýsast upp og teljarinn segir hvar þú ert. Hnapparnir við reitinn passa við hástafi (**Aa**), finna aðeins heil orð (**W**) og nota reglulega segð (**.\***; í útskiptunum setur `$1` aftur það sem fyrsti hópurinn passaði við). {{ui:Skipta út}} skiptir út núverandi samsvörun, {{ui:Allt}} skiptir út hverri samsvörun í einu skrefi, sem fer til baka með {{key:Mod+Z}}.
- **Felling.** Smelltu á ▾ við línunúmer, eða ýttu á {{key:Mod+Shift+[}} með bendilinn á `function`, `if`, `for`, `while`, `switch` eða `try` línu (Lua: `function`, `do`, `if`, `repeat`), til að fela innri línur hennar; línan segir hversu margar. ▸ eða {{key:Mod+Shift+]}} opnar hana aftur. Felling felur aðeins línur: Keyra, Vista, afritun og línunúmerin telja allar línur áfram, og ritun á felldri línu opnar hana fyrst.
- **Útfyllingar.** Skrifaðu tvo stafi af nafni, eða ýttu á {{key:Mod+Space}}: listi sýnir breyturnar sem þú hefur, föll tungumálsins (með röksemdum sínum), lykilorð og nöfn sem þegar eru í skriftunni. Veldu með örvunum og ýttu á {{key:Enter}} eða {{key:Tab}}.

## Þegar eitthvað fer úrskeiðis

- Villa nefnir vandamálið og línuna sína: línan verður rauð í ritlinum, og **Lína n** í stjórnborðinu fer með þig þangað.
- Lykkja sem endar aldrei: ýttu á {{ui:Stöðva}} (tækjastika eða spjald). Skriftan stöðvast strax; breyturnar halda gildunum sem þær höfðu fyrir þá keyrslu.
- Sérhver keyrsla hefur líka skrefamörk (2 milljarða skref sjálfgefið; breyttu þeim undir **Keyrsluvalkostir** í spjaldinu). Keyrsla sem fer yfir þau stöðvast með skilaboðum.

## Breytur flytjast milli skrifta

Sérhver efsta-stigs breyta sem skrifta býr til lendir í flipanum **Forritsbreytur** (nafn, tegund, stærð, minnsta og stærsta gildi) og situr þar fyrir næstu skriftu, á hvoru tungumálinu sem er. Þannig möskvar ein skrift, sú næsta leysir og sú þriðja teiknar.

- Smelltu á breytu til að birta hana: net, reitir og líkön í þrívíddarsýninni, fylki sem tafla (auk línurits fyrir vigur eða litakorts fyrir fylki) í undirskjánum.
- {{ui:Vista sem JSON}}, {{ui:Vista sem CSV}} (tafla af tölum) og {{ui:Vista sem HDF5}} sækja hana; {{ui:Eyða}} fjarlægir hana; {{ui:Hreinsa allt}} tæmir vinnusvæðið.
- Hakaðu við **Vista forritsbreyturnar með hlutanum** til að geyma þær í hlutaskránni (allt að 32 MB; stærri gildi haldast aðeins í þessari heimsókn). Þegar þú opnar slíkan hlut býður spjaldið upp á að hlaða þeim inn.

## Net, reitir og línurit

- `show(m)` teiknar net; `show(f)` litar reit á netinu hans með skýringu. Listinn **Sýnt** efst vinstra megin í sýninni felur ({{ui:eye}}) eða fjarlægir hvert atriði, og felur eða sýnir hlutinn sjálfan. Undir skýringunni má skrifa inn bil (**Frá**, **til**) eða ýta á {{ui:Sjálfvirkt}}; vigur- eða álagsreitur býður einnig upp á hvaða þátt á að sýna.
- `show(f, 'deform', u, 'scale', 50)` teiknar netið fært með tilfærslureitnum `u`, stækkað 50 sinnum (án `scale` um 8 % af stærð líkansins).
- Smelltu á net sem er sýnt: næsti hnútur, frumuna og reitgildin þar birtast í undirskjánum (**Valið**).
- `plot`, `imagesc` og `table` setja línurit, litakort af tvívíðu fylki eða töflu í undirskjáinn. Línurit með sama `'id'` (eða titli) og eitt áður kemur í stað þess, þannig að lykkja getur uppfært eitt samleitnilínurit; `'append', true` bætir ferli við það. {{ui:Hreinsa}} tæmir undirskjáinn; örin felur hann.
- Með tvö eða fleiri línurit sýnir {{ui:Hlið við hlið}} þau öll í einu (þau sex nýjustu); smellur á flipa töflu eða myndar sýnir hana eina aftur.
- Sérhvert línurit hefur {{ui:PNG}}, {{ui:SVG}} og {{ui:CSV}} undir sér. PNG og SVG prenta það á hvítt í pappírslitum, óháð þema (PNG 1600 × 1000 dílar; SVG skalar án þess að verða óskýrt). CSV geymir tölur sínar með öllum tölustöfum: einn dálkur af x og dálkur fyrir hverja feril þegar ferlar deila x, annars ein röð fyrir hvern punkt með nafni ferilsins.
- {{key:F}} eða {{ui:Passa}} passar sýnina að því sem er sýnt.

## Skrár

- {{ui:Opna}} í Skrift-hópnum (eða slepptu skrám á sýnina eða spjaldið): `.craft`, `.lua` og `.py` skrár opnast sem nýjar skriftur (þær keyra ekki); gagnaskrár (STL, OBJ, CSV, JSON, NPY, HDF5) hlaðast í breyturnar undir heiti skráarinnar.
- {{ui:Vista}} í Skrift-hópnum sækir núverandi skriftu sem skrá.
- {{ui:Nýtt}} í Skrift-hópnum (eða {{ui:+}} við flipana) byrjar aðra skriftu. Tvísmelltu á flipa til að endurnefna hann; {{ui:×}} fjarlægir hann (þú getur afturkallað það).

## Lestu breytur hlutans

Skriftur lesa breytur hlutans (sjá [Stýrðu hluta með breytum](topic:parameters)) eftir nafni:

```
w = param('width');     % gildi einnar breytu, í mm (eða gráður, eða venjuleg tala)
p = params();           % allar, sem strúktúr: p.width, p.height
```

Í Lua og Python eru þær `cs.param('width')` og `cs.params()`. Skriftur lesa aðeins breytur: breyttu þeim á flipanum {{ui:Breytur}}. Undir flipa skriftunnar listar lína þær breytur sem hún les með `param('…')`, og merkir þær sem hlutinn hefur ekki. Flipinn {{ui:Breytur}} skráir skriftuna undir hverri þeirra. Nafn sem er sett saman meðan skriftan keyrir, eins og `param(name)`, er ekki skráð.

## Skriftur eru vistaðar í hlutanum

Sérhver skrift í flipunum er geymd í hlutanum, þannig að {{ui:Vista}} í Skrá-hópnum vistar þær með honum, og breytingar á þeim má afturkalla. Að opna hlut **keyrir aldrei skriftur hans**: stjórnborðið segir hversu margar hann ber, og þær keyra aðeins þegar þú ýtir á Keyra. Hlutur frá öðrum getur geymt hvaða skrift sem er, svo lestu hana áður en þú keyrir hana. Skriftur keyra í bakgrunni á þessari tölvu án netaðgangs og geta ekki snert síðuna.

## Tengt

- [CraftScript-tungumálið](topic:craftscript-language)
- [Skriftur í Lua](topic:craftscript-lua)
- [Skriftur í Python](topic:craftscript-python)
- [Greiningarsafnið](topic:craftscript-library)
- [Skrifaðu þína eigin greiningu](topic:craftscript-own-analysis)
