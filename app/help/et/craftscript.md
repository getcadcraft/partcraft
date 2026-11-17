---
title: Kirjuta ja käivita skriptid (Skripti tööruum)
summary: Skripti tööruum samm-sammult: kirjuta CraftScripti või Lua skript, käivita see klahviga F5, loe konsooli, hoia tulemused muutujates järgmise skripti jaoks, näita võrke, välju ja graafikuid, peata käivitus ning salvesta skriptid detailiga.
keywords: skript, skriptimine, skriptimine modelleerimise ajal, eraldi aken, teine ekraan, teine monitor, param, params, parameetrid skriptides, CraftScript, Lua, kood, programm, redaktor, konsool, REPL, käsurida, käivita, F5, käivita valik, peata, muutujad, tööruum, graafik, väli, võrk, legend, alamvaade, analüüs, automatiseerimine, maatriks, arvuline
from: d0003e89
---

**Eelvaade.** Skriptimine on PartCraft 0.3-s uus ja on eelvaates: keel, teek ning viis, kuidas skripte salvestatakse, võivad veel muutuda ja praegu kirjutatud skriptid võivad hiljem vajada väikeseid muudatusi. Ütle meile, mis katki läheb.

Skripti tööruum käivitab sinu enda arvutused detaili kõrval: väikesed summad, terved analüüsid või [analüüsiteegi](topic:craftscript-library) skriptid. Skriptid on kirjutatud **CraftScriptis** (maatriksikeel, väga sarnane MATLABile, vt [CraftScripti keel](topic:craftscript-language)) või **Lua** keeles (vt [Lua skriptid](topic:craftscript-lua)) või **Pythonis** (vt [Skriptid Pythonis](topic:craftscript-python)).

Vali tööriistariba vasakus servas olevast kastist **Tööruum** väärtus **Skript**. Detail ei muutu. Parem paneel muutub skriptipaneeliks (tavalisest laiemaks; lohista servast, et suurust muuta, või vii see teisele ekraanile selle {{ui:⋯}} menüüst, vt [Paneelide paigutus](common:arrange-panels)).

## Skriptimine modelleerimise ajal

Skripti kirjutamiseks ei pea sa Disaini tööruumist lahkuma. Disainis sisaldab parema paneeli vahekaart {{ui:Skript}} sama redaktorit, konsooli, muutujaid ja teeki, samade skriptidega. Detailipuu ja vaade töötavad edasi: klõpsa elemendile, et see valida, topeltklõpsa eskiisil, et seda muuta, pööra vaadet, siis mine tagasi vahekaardile {{ui:Skript}} ja vajuta {{key:F5}}.

Mida skript **kuvab** (võrgud, väljad, graafikud, tabelid), seda Disainis sinu mudeli peale ei joonistata: konsool ütleb seda ning skripti tööruumis on kõik näha, kui sinna lähed.

{{ui:Eraldi aknasse}}, {{ui:Käivita}} kõrval, viib terve paneeli oma aknasse, näiteks teisele ekraanile, nii et redaktor ja täisvaade on kõrvuti. {{ui:Tagasi}} dokib paneeli uuesti. Vt [Paneelide paigutus](common:arrange-panels).

## Käivita esimene skript

1. Kirjuta redaktorisse, näiteks:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Vajuta {{key:F5}} (või {{ui:Käivita}}). Redaktori all olev konsool näitab, mida skript printis, ja "Valmis ajaga … s". Graafik ilmub 3D-vaate all olevatesse **alamvaadetesse**.
3. Rida ilma semikoolonita prindib oma väärtuse, nagu MATLABis: `a = 3` prindib `a = 3`; `a = 3;` ei prindi midagi.
4. Osa skriptist käivitamiseks vali read ja vajuta {{key:Mod+Enter}} ({{ui:Valik}}). Kui midagi pole valitud, käivitab see rea, kus kursor on.
5. Konsooli all olev rida (pärast `>>`) käivitab ühe lause, kui vajutad {{key:Enter}}. {{key:Up}} ja {{key:Down}} toovad tagasi varasemad read.

## Otsi, voldi ja täida

- **Otsi ja asenda.** Vajuta {{key:Mod+F}} (või {{key:Mod+H}}, et ka asendada). Koodi kohale avaneb riba: kirjuta, mida otsida; vasted süttivad ja loendur ütleb, kus sa oled. Kasti kõrval olevad nupud arvestavad suurtähti (**Aa**), otsivad ainult terveid sõnu (**W**) ja kasutavad regulaaravaldist (**.\***; asendustekstis paneb `$1` tagasi selle, mida esimene grupp vastas). {{ui:Asenda}} asendab praeguse vaste, {{ui:Kõik}} asendab kõik vasted ühe sammuna {{key:Mod+Z}}.
- **Kokkuvoltimine.** Klõpsa rea numbri kõrval olevat ▾ või vajuta {{key:Mod+Shift+[}}, kui kursor on rea `function`, `if`, `for`, `while`, `switch` või `try` peal (Lua: `function`, `do`, `if`, `repeat`), et selle sisemised read peita; rida ütleb, mitu neid on. ▸ või {{key:Mod+Shift+]}} avab selle uuesti. Kokkuvoltimine ainult peidab read: käivitamine, salvestamine, kopeerimine ja rea numbrid arvestavad ikka kõiki ridu ning kokkuvoltitud reale kirjutamisel avatakse see esmalt.
- **Täiendused.** Kirjuta nime kaks tähte või vajuta {{key:Mod+Space}}: loend näitab sinu muutujaid, keele funktsioone (koos argumentidega), märksõnu ja skriptis juba olevaid nimesid. Vali nooltega ja vajuta {{key:Enter}} või {{key:Tab}}.

## Kui midagi läheb valesti

- Viga nimetab probleemi ja selle rea: rida on redaktoris punaseks märgitud ning konsooli **Rida n** viib sinna.
- Lõpmatu tsükkel: vajuta {{ui:Peata}} (tööriistariba või paneel). Skript peatub kohe; muutujad säilitavad väärtused, mis neil olid enne seda käivitust.
- Igal käivitusel on ka sammueelarve (vaikimisi 2 miljardit sammu; muuda seda paneelis **Käivitussuvandid** all). Käivitus, mis seda ületab, peatub teatega.

## Muutujad liiguvad skriptist skriptisse

Iga ülemise taseme muutuja, mille skript teeb, jõuab vahekaardile **Muutujad** (nimi, tüüp, suurus, väikseim ja suurim väärtus) ja jääb sinna järgmise skripti jaoks, kummas keeles tahes. Nii üks skript võrgustab, järgmine lahendab ja kolmas joonistab.

- Klõpsa muutujal, et seda näidata: võrgud, väljad ja mudelid 3D-vaates, massiivid tabelina (plus joongraafik vektorile või värvikaart maatriksile) alamvaadetes.
- {{ui:Salvesta JSON-ina}}, {{ui:Salvesta CSV-na}} (arvude tabel) ja {{ui:Salvesta HDF5-na}} laadivad muutuja alla; {{ui:Kustuta}} eemaldab selle; {{ui:Tühjenda kõik}} tühjendab tööruumi.
- Märgi **Salvesta muutujad detailiga**, et need detailifailis alles hoida (kuni 32 MB; suuremad jäävad ainult sellele külastusele). Kui avad sellise detaili, pakub paneel nende laadimist.

## Võrgud, väljad ja graafikud

- `show(m)` joonistab võrgu; `show(f)` värvib välja selle võrgul koos legendiga. Vaate vasakus ülanurgas olev **Kuvatud** nimekiri peidab ({{ui:silm}}) või eemaldab iga üksuse ning peidab või näitab detaili ennast. Legendi all sisesta vahemik (**Alates**, **kuni**) või vajuta {{ui:Auto}}; vektor- või pingeväli pakub ka, millist komponenti näidata.
- `show(f, 'deform', u, 'scale', 50)` joonistab võrgu, mida nihutab nihkeväli `u`, suurendatuna 50 korda (ilma `scale`-ta umbes 8 % mudeli suurusest).
- Klõpsa näidatud võrgul: lähim sõlm, element ja seal olevad väljaväärtused ilmuvad alamvaadetesse (**Valitud**).
- `plot`, `imagesc` ja `table` panevad joongraafiku, 2-D massiivi värvikaardi või tabeli alamvaadetesse. Sama `'id'`-ga (või pealkirjaga) graafik asendab varasema, nii et tsükkel saab uuendada ühte konvergentsigraafikut; `'append', true` lisab kõverale joone. {{ui:Tühjenda}} tühjendab alamvaated; nool voldib need kokku.
- Kahe või enama graafikuga näitab {{ui:Kõrvuti}} neid kõiki korraga (uusimad kuus); tabeli või pildi vahekaardi klõpsamine näitab ainult seda.
- Igal graafikul on all {{ui:PNG}}, {{ui:SVG}} ja {{ui:CSV}}. PNG ja SVG trükivad selle valgele paberivärvides, sõltumata teemast (PNG 1600 × 1000 pikslit; SVG skaleerub ilma hägustumata); CSV hoiab oma arve täies täpsuses: üks x-veerg ja veerg iga kõvera kohta, kui kõverad jagavad x-i, muidu üks rida punkti kohta koos kõvera nimega.
- {{key:F}} või {{ui:Mahuta}} mahutab vaate näidatud sisu järgi.

## Failid

- {{ui:Ava}} rühmas **Skript** (või lohista failid vaatele või paneelile): `.craft`, `.lua` ja `.py` failid avanevad uute skriptidena (need ei käivitu); andmefailid (STL, OBJ, CSV, JSON, NPY, HDF5) laadivad muutujatesse oma failinime all.
- {{ui:Salvesta}} rühmas **Skript** laadib praeguse skripti alla failina.
- {{ui:Uus}} rühmas **Skript** (või {{ui:+}} vahekaartide kõrval) alustab teist skripti. Topeltklõpsa vahekaardil, et seda ümber nimetada; selle {{ui:×}} eemaldab selle (selle võib tagasi võtta).

## Loe detaili parameetreid

Skript loeb detaili parameetreid (vt [Juhi detaili parameetritega](topic:parameters)) nime järgi:

```
w = param('width');     % ühe parameetri väärtus mm-des (või kraadides, või lihtne arv)
p = params();           % kõik need struktuurina: p.width, p.height
```

Lua ja Pythonis on need `cs.param('width')` ja `cs.params()`. Skriptid ainult loevad parameetreid: muuda neid vahekaardil {{ui:Parameetrid}}. Skripti vahekaardi all loetleb rida parameetrid, mida see loeb `param('…')`-ga, ning märgib need, mida detail ei oma; vahekaart {{ui:Parameetrid}} loetleb skripti iga parameetri all. Nime, mis koostatakse skripti töötamise ajal, nagu `param(name)`, ei loetleta.

## Skriptid salvestatakse detaili sisse

Kõik vahekaartide skriptid hoitakse detailis, nii et {{ui:Salvesta}} failirühmas salvestab need koos sellega ning muudatused neisse saab tagasi võtta. Detaili avamine **ei käivita kunagi selle skripte**: konsool ütleb, mitu neid on, ja need käivituvad ainult siis, kui vajutad Käivita. Võõras detail võib sisaldada mis tahes skripti, seega loe see enne käivitamist. Skriptid käivituvad taustal selles arvutis ilma võrguühenduseta ega saa lehte puutuda.

## Seotud

- [CraftScripti keel](topic:craftscript-language)
- [Lua skriptid](topic:craftscript-lua)
- [Skriptid Pythonis](topic:craftscript-python)
- [Analüüsiteek](topic:craftscript-library)
- [Kirjuta oma analüüs](topic:craftscript-own-analysis)
