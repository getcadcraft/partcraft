---
title: Skriptien kirjoittaminen ja ajaminen (Skripti-työtila)
summary: Skripti-työtila vaihe vaiheelta: kirjoita CraftScript- tai Lua-skripti, aja se F5:llä, lue konsoli, säilytä tulokset muuttujissa seuraavaa skriptiä varten, näytä verkot, kentät ja kuvaajat, pysäytä ajo ja tallenna skriptit osan mukana.
keywords: skripti, skriptaus, skriptaus mallinnuksen aikana, irrota, toinen näyttö, toinen monitori, param, params, parametrit skripteissä, CraftScript, Lua, koodi, ohjelma, editori, konsoli, REPL, komentorivi, aja, F5, aja valinta, pysäytä, muuttujat, työtila, kuvaaja, kenttä, verkko, selite, alinäkymä, analyysi, automaatio, matriisi, numeerinen
from: d0003e89
---

**Esikatselu.** Skriptaus on uutta PartCraft 0.3:ssa ja se on esikatselussa: kieli, kirjasto ja tapa, jolla skriptit tallennetaan, voivat vielä muuttua, ja nyt kirjoitetut skriptit saattavat tarvita pieniä muutoksia myöhemmin. Kerro meille, mikä hajoaa.

Skripti-työtila ajaa omia laskelmiasi osan rinnalla: pieniä summia, kokonaisia analyysejä tai [analyysikirjaston](topic:craftscript-library) skriptejä. Skriptit kirjoitetaan **CraftScriptillä** (matriisikieli, hyvin MATLABin kaltainen, katso [CraftScript-kieli](topic:craftscript-language)), **Lualla** (katso [Skriptit Lua-kielellä](topic:craftscript-lua)) tai **Pythonilla** (katso [Skriptit Python-kielellä](topic:craftscript-python)).

Valitse **Skripti** **Työtila**-ruudusta työkalurivin vasemmalla puolella. Osaa ei muuteta. Oikea paneeli muuttuu skriptipaneeliksi (tavallista leveämpi; vedä sen reunaa muuttaaksesi sitä tai siirrä se toiselle näytölle sen {{ui:⋯}}-valikolla, katso [Järjestä paneelit](common:arrange-panels)).

## Skriptaus mallintaessa

Skriptin kirjoittamiseen ei tarvitse poistua **Suunnittelu**-työtilasta. Suunnittelussa oikean paneelin {{ui:Skripti}}-välilehti sisältää saman editorin, konsolin, muuttujat ja kirjaston samoilla skripteillä. Ominaisuuspuu ja näkymä toimivat edelleen: napsauta ominaisuutta valitaksesi sen, kaksoisnapsauta luonnosta muokataksesi sitä, käännä näkymää ja palaa sitten {{ui:Skripti}}-välilehdelle ja paina {{key:F5}}.

Mitä skripti **näyttää** (verkot, kentät, kuvaajat, taulukot), ei piirretä mallisi päälle Suunnittelussa: konsoli kertoo sen, ja Skripti-työtila sisältää kaiken, kun vaihdat sinne.

{{ui:Irrota}} {{ui:Aja}}-painikkeen vieressä siirtää koko paneelin omaan ikkunaansa, esimerkiksi toiselle näytölle, jolloin editori ja koko näkymä ovat rinnakkain. {{ui:Palauta}} kiinnittää sen uudelleen. Katso [Järjestä paneelit](common:arrange-panels).

## Aja ensimmäinen skriptisi

1. Kirjoita editoriin, esimerkiksi:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Paina {{key:F5}} (tai {{ui:Aja}}). Editorin alla oleva konsoli näyttää, mitä skripti tulosti, ja ”Valmis … s”. Kuvaaja näkyy 3D-näkymän alareunassa olevissa **alinäkymissä**.
3. Rivi ilman puolipistettä tulostaa arvonsa kuten MATLABissa: `a = 3` tulostaa `a = 3`; `a = 3;` ei tulosta mitään.
4. Jos haluat ajaa vain osan skriptistä, valitse rivit ja paina {{key:Mod+Enter}} ({{ui:Valinta}}). Ilman valintaa ajetaan kohdistimen rivi.
5. Konsolin alareunan rivi (`>>`:n jälkeen) ajaa yhden lauseen, kun painat {{key:Enter}}. {{key:Up}} ja {{key:Down}} palauttavat aiemmat rivit.

## Etsi, taita ja täydennä

- **Etsi ja korvaa.** Paina {{key:Mod+F}} (tai {{key:Mod+H}} korvataksesi myös). Koodin yläpuolelle avautuu palkki: kirjoita etsittävä; osumat syttyvät ja laskuri kertoo, missä olet. Ruudun vieressä olevat painikkeet vastaavat kirjainkokoa (**Aa**), etsivät vain kokonaisia sanoja (**W**) ja käyttävät säännöllistä lauseketta (**.\***; korvauksessa `$1` palauttaa sen, mitä ensimmäinen ryhmä vastasi). {{ui:Korvaa}} korvaa nykyisen osuman, {{ui:Kaikki}} korvaa jokaisen osuman yhtenä vaiheena, jonka voi kumota {{key:Mod+Z}}:lla.
- **Taittaminen.** Napsauta rivinumeron vieressä olevaa ▾-merkkiä tai paina {{key:Mod+Shift+[}} kohdistin `function`-, `if`-, `for`-, `while`-, `switch`- tai `try`-rivillä (Lua: `function`, `do`, `if`, `repeat`), piilottaaksesi sen sisärivit; rivi kertoo, kuinka monta. ▸ tai {{key:Mod+Shift+]}} avaa sen uudelleen. Taittaminen vain piilottaa rivit: ajo, tallennus, kopiointi ja rivinumerot laskevat kaikki rivit edelleen, ja taitetulle rivillä kirjoittaminen avaa sen ensin.
- **Täydennykset.** Kirjoita kaksi kirjainta nimeä, tai paina {{key:Mod+Space}}: luettelo näyttää muuttujasi, kielen funktiot (argumentteineen), avainsanat ja skriptissä jo olevat nimet. Valitse nuolilla ja paina {{key:Enter}} tai {{key:Tab}}.

## Kun jokin menee pieleen

- Virhe nimeää ongelman ja sen rivin: rivi merkitään punaisella editorissa, ja konsolin **Rivi n** vie sinne.
- Ikuinen silmukka: paina {{ui:Pysäytä}} (työkalurivi tai paneeli). Skripti pysähtyy heti; muuttujat säilyttävät arvonsa, jotka niillä oli ennen tuota ajoa.
- Jokaisella ajolla on myös vaiheraja (oletuksena 2 miljardia vaihetta; muuta sitä kohdassa **Ajoasetukset** paneelissa). Ajo, joka ylittää sen, pysähtyy ilmoituksen kanssa.

## Muuttujat siirtyvät skriptistä toiseen

Jokainen skriptin tekemä ylätason muuttuja päätyy **Muuttujat**-välilehdelle (nimi, tyyppi, koko, pienin ja suurin arvo) ja pysyy siellä seuraavaa skriptiä varten, kummalla kielellä tahansa. Näin yksi skripti verkottaa, seuraava ratkaisee ja kolmas piirtää.

- Napsauta muuttujaa näyttääksesi sen: verkot, kentät ja mallit 3D-näkymässä, taulukot taulukkona alinäkymissä (lisäksi viivakuvaaja vektorille tai värikartta matriisille).
- {{ui:Tallenna JSON:ina}}, {{ui:Tallenna CSV:nä}} (lukutaulukko) ja {{ui:Tallenna HDF5:nä}} lataavat sen; {{ui:Poista}} poistaa sen; {{ui:Tyhjennä kaikki}} tyhjentää työtilan.
- Valitse **Tallenna muuttujat osan mukana**, jotta ne säilyvät osatiedostossa (enintään 32 MB; suuremmat jäävät vain tälle käynnille). Kun avaat tällaisen osan, paneeli tarjoaa niiden lataamista.

## Verkot, kentät ja kuvaajat

- `show(m)` piirtää verkon; `show(f)` värittää kentän verkollaan selitteen kanssa. **Näytetyt**-luettelo näkymän vasemmassa yläkulmassa piilottaa ({{ui:silmä}}) tai poistaa kunkin kohteen sekä piilottaa tai näyttää osan itsensä. Selitteen alla kirjoita väli (**Alkaen**, **asti**) tai paina {{ui:Auto}}; vektori- tai jännityskenttä tarjoaa myös sen, mikä komponentti näytetään.
- `show(f, 'deform', u, 'scale', 50)` piirtää verkon, jota siirtää siirtymäkenttä `u` ja joka on suurennettu 50-kertaiseksi (ilman `scale`:a noin 8 % mallin koosta).
- Napsauta näytettyä verkkoa: lähin solmu, elementti ja siinä olevat kenttäarvot ilmestyvät alinäkymiin (**Poimitut**).
- `plot`, `imagesc` ja `table` asettavat viivakuvaajan, 2D-taulukon värikartan tai taulukon alinäkymiin. Kuvaaja, jolla on sama `'id'` (tai nimi) kuin aiemmalla, korvaa sen, joten silmukka voi päivittää yhden lähentymiskuvaajan; `'append', true` lisää siihen käyrän. {{ui:Tyhjennä}} tyhjentää alinäkymät; nuoli taittaa ne pois.
- Kahdella tai useammalla kuvaajalla {{ui:Vierekkäin}} näyttää ne kaikki kerralla (uusimmat kuusi); taulukon tai kuvan välilehden napsautus näyttää sen taas yksin.
- Jokaisen kuvaajan alla on {{ui:PNG}}, {{ui:SVG}} ja {{ui:CSV}}. PNG ja SVG tulostavat sen valkoiselle paperivärein teemasta riippumatta (PNG 1600 × 1000 pikseliä; SVG skaalautuu ilman sumentumista); CSV sisältää sen luvut kaikilla numeroilla: yksi x-sarake ja sarake jokaiselle käyrälle, kun käyrät jakavat x:n, muuten yksi rivi pistettä kohden käyrän nimen kanssa.
- {{key:F}} tai {{ui:Sovita}} sovittaa näkymän näytettyyn sisältöön.

## Tiedostot

- {{ui:Avaa}} Skripti-ryhmässä (tai pudota tiedostoja näkymään tai paneeliin): `.craft`-, `.lua`- ja `.py`-tiedostot avautuvat uusina skripteinä (eivät aja); datatiedostot (STL, OBJ, CSV, JSON, NPY, HDF5) latautuvat muuttujiin tiedostonsa nimellä.
- {{ui:Tallenna}} Skripti-ryhmässä lataa nykyisen skriptin tiedostona.
- {{ui:Uusi}} Skripti-ryhmässä (tai {{ui:+}} välilehtien vieressä) aloittaa toisen skriptin. Kaksoisnapsauta välilehteä nimetäksesi sen uudelleen; sen {{ui:×}} poistaa sen (sen voi kumota).

## Lue osan parametrit

Skripti lukee osan parametrit ([katso Ohjaa osaa parametreilla](topic:parameters)) nimellä:

```
w = param('width');     % yhden parametrin arvo, mm:ssä (tai asteina tai tavallisena lukuna)
p = params();           % kaikki, structina: p.width, p.height
```

Lua- ja Python-kielellä ne ovat `cs.param('width')` ja `cs.params()`. Skriptit vain lukevat parametreja: muuta niitä {{ui:Parametrit}}-välilehdellä. Skriptin välilehden alla rivi luettelee parametrit, jotka se lukee `param('…')`-kutsulla, ja merkitsee ne, joita osalla ei ole; {{ui:Parametrit}}-välilehti listaa skriptin jokaisen parametrin alla. Ajon aikana rakennettua nimeä, kuten `param(name)`, ei luetella.

## Skriptit tallennetaan osan mukana

Jokainen välilehtien skripti säilytetään osassa, joten Tiedosto-ryhmän {{ui:Tallenna}} tallentaa ne sen mukana ja niihin tehdyt muutokset voi kumota. Osan avaaminen **ei koskaan aja sen skriptejä**: konsoli kertoo, kuinka monta niitä on, ja ne ajetaan vain, kun painat Aja. Toisen tekemä osa voi sisältää mitä tahansa skriptiä: lue se ennen ajamista. Skriptit ajetaan taustalla tällä tietokoneella ilman verkkoyhteyttä eivätkä ne voi koskea sivuun.

## Aiheeseen liittyvää

- [CraftScript-kieli](topic:craftscript-language)
- [Skriptit Lua-kielellä](topic:craftscript-lua)
- [Skriptit Python-kielellä](topic:craftscript-python)
- [Analyysikirjasto](topic:craftscript-library)
- [Oman analyysin kirjoittaminen](topic:craftscript-own-analysis)
