---
title: Skryf en loop skripte (Skrip-werkruimte)
summary: Die Skrip-werkruimte stap vir stap: skryf 'n CraftScript- of Lua-skrip, loop dit met F5, lees die konsole, hou resultate in die veranderlikes vir die volgende skrip, wys maas, velde en grafieke, stop 'n lopie, en stoor skripte saam met die onderdeel.
keywords: skrip, skripwerk, skrip terwyl jy modelleer, trek uit, tweede skerm, tweede monitor, param, params, parameters in skripte, CraftScript, Lua, kode, program, redigeerder, konsole, REPL, opdraglyn, loop, F5, loop seleksie, stop, veranderlikes, werkruimte, grafiek, veld, maas, legenda, sub-vertoning, analise, outomatisering, matriks, numeries
from: d0003e89
---

**Voorskou.** Skripwerk is nuut in PartCraft 0.3 en is 'n voorskou: die taal, die biblioteek en die manier waarop skripte gestoor word, kan nog verander, en skripte wat nou geskryf word, kan later klein wysigings nodig hê. Laat ons weet wat breek.

Die Skrip-werkruimte loop jou eie berekeninge langs die onderdeel: klein somme, hele analises, of die skripte in die [analise-biblioteek](topic:craftscript-library). Skripte word in **CraftScript** geskryf ('n matrikstaal baie soos MATLAB, sien [Die CraftScript-taal](topic:craftscript-language)) of in **Lua** (sien [Skripte in Lua](topic:craftscript-lua)) of **Python** (sien [Skripte in Python](topic:craftscript-python)).

Kies **Skrip** in die **Werkruimte**-kassie links op die nutsbalk. Die onderdeel word nie verander nie. Die regterpaneel word die skripspaneel (breër as gewoonlik; sleep sy rand om dit te verander, of skuif dit na 'n tweede skerm met sy {{ui:⋯}}-kieslys, sien [Rangskik die panele](common:arrange-panels)).

## Skrip terwyl jy modelleer

Jy hoef nie die Ontwerp-werkruimte te verlaat om 'n skrip te skryf nie. In Ontwerp hou die regterpaneel se {{ui:Skrip}}-blad dieselfde redigeerder, konsole, veranderlikes en biblioteek, met dieselfde skripte. Die kenmerkboom en die aansig bly werk: klik op 'n kenmerk om dit te kies, dubbelklik op 'n skets om dit te wysig, draai die aansig, en gaan dan terug na die {{ui:Skrip}}-blad en druk {{key:F5}}.

Wat 'n skrip **wys** (maas, velde, grafieke, tabelle) word nie oor jou model in Ontwerp geteken nie: die konsole sê so, en die Skrip-werkruimte het alles wanneer jy daarheen oorskakel.

{{ui:Trek uit}}, langs {{ui:Voer uit}}, skuif die hele paneel na 'n eie venster, byvoorbeeld op 'n tweede skerm, sodat die redigeerder en die volle aansig langs mekaar staan. {{ui:Plaas terug}} dok dit weer. Sien [Rangskik die panele](common:arrange-panels).

## Loop jou eerste skrip

1. Tik in die redigeerder, byvoorbeeld:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Druk {{key:F5}} (of {{ui:Voer uit}}). Die konsole onder die redigeerder wys wat die skrip gedruk het, en "Done in … s". Die grafiek verskyn in die **sub-vertonings** langs die onderkant van die 3D-aansig.
3. 'n Reël sonder 'n kommapunt druk sy waarde, soos in MATLAB: `a = 3` druk `a = 3`; `a = 3;` druk niks.
4. Om net deel van 'n skrip te loop, kies die reëls en druk {{key:Mod+Enter}} ({{ui:Seleksie}}). As niks gekies is nie, loop dit die reël waarop die kursor staan.
5. Die reël onderaan die konsole (ná `>>`) loop een stelling wanneer jy {{key:Enter}} druk. {{key:Up}} en {{key:Down}} haal vroeër reëls terug.

## Soek, vou en voltooi

- **Soek en vervang.** Druk {{key:Mod+F}} (of {{key:Mod+H}} om ook te vervang). 'n Balk gaan oop bo die kode: tik wat gesoek moet word; die treffers lig op en die telling sê waar jy is. Die knoppe langs die kassie pas hoofletters by (**Aa**), soek net hele woorde (**W**) en gebruik 'n reguliere uitdrukking (**.\***; in die vervanging stel `$1` terug wat die eerste groep gepas het). {{ui:Vervang}} vervang die huidige treffer, {{ui:Alles}} vervang elke treffer as een stap van {{key:Mod+Z}}.
- **Vou.** Klik op die ▾ langs 'n reëlnommer, of druk {{key:Mod+Shift+[}} met die kursor op 'n `function`, `if`, `for`, `while`, `switch` of `try`-reël (Lua: `function`, `do`, `if`, `repeat`), om sy binnereëls weg te vou; die reël sê hoeveel. ▸ of {{key:Mod+Shift+]}} maak dit weer oop. Vou versteek net reëls: Voer uit, Stoor, kopiëring en die reëlnommers tel almal steeds elke reël, en as jy op 'n gevoude reël tik, maak dit eers oop.
- **Voltooiings.** Tik twee letters van 'n naam, of druk {{key:Mod+Space}}: 'n lys wys die veranderlikes wat jy het, die taal se funksies (met hul argumente), sleutelwoorde en name wat alreeds in die skrip is. Kies met die pyltjies en druk {{key:Enter}} of {{key:Tab}}.

## Wanneer iets verkeerd gaan

- 'n Fout noem die probleem en sy reël: die reël word rooi in die redigeerder gemerk, en **Reël n** in die konsole neem jou daarheen.
- 'n Lus wat nooit eindig nie: druk {{ui:Stop}} (nutsbalk of paneel). Die skrip stop onmiddellik; die veranderlikes hou die waardes wat hulle vóór daardie lopie gehad het.
- Elke lopie het ook 'n stapbegroting (2 miljard stappe by verstek; verander dit onder **Voer uit-opsies** in die paneel). 'n Lopie wat dit oorskry, stop met 'n boodskap.

## Veranderlikes dra van skrip na skrip

Elke veranderlike op die boonste vlak wat 'n skrip maak, beland op die **Veranderlikes**-blad (naam, tipe, grootte, kleinste en grootste waarde) en bly daar vir die volgende skrip, in enige taal. So maas een skrip, los die volgende op, en teken 'n derde grafiek.

- Klik op 'n veranderlike om dit te wys: maas, velde en modelle in die 3D-aansig, skikkings as 'n tabel (plus 'n lyngrafiek vir 'n vektor of 'n kleurkaart vir 'n matriks) in die sub-vertonings.
- {{ui:Stoor as JSON}}, {{ui:Stoor as CSV}} ('n tabel van getalle) en {{ui:Stoor as HDF5}} laai dit af; {{ui:Skrap}} verwyder dit; {{ui:Maak alles skoon}} maak die werkruimte leeg.
- Merk **Stoor die veranderlikes saam met die onderdeel** om hulle in die onderdeellêer te hou (tot 32 MB; groter bly net vir hierdie besoek). Wanneer jy so 'n onderdeel oopmaak, bied die paneel aan om hulle te laai.

## Maas, velde en grafieke

- `show(m)` teken 'n maas; `show(f)` kleur 'n veld op sy maas met 'n legenda. Die **Gewys**-lys links bo in die aansig versteek ({{ui:oog}}) of verwyder elke item, en versteek of wys die onderdeel self. Onder die legenda, tik 'n reeks (**Van**, **tot**) of druk {{ui:Outo}}; 'n vektor- of spanningsveld bied ook aan watter komponent om te wys.
- `show(f, 'deform', u, 'scale', 50)` teken die maas verplaas deur 'n verplasingsveld `u`, 50 keer vergroot (sonder `scale`, ongeveer 8 % van die model se grootte).
- Klik op 'n gewyse maas: die naaste node, die element en die veldwaardes daar verskyn in die sub-vertonings (**Gekies**).
- `plot`, `imagesc` en `table` plaas 'n lyngrafiek, 'n kleurkaart van 'n 2-D-skikking of 'n tabel in die sub-vertonings. 'n Grafiek met dieselfde `'id'` (of titel) as 'n vroeëre een vervang dit, so 'n lus kan een konvergensiegrafiek bywerk; `'append', true` voeg 'n kurwe daarby. {{ui:Maak skoon}} maak die sub-vertonings leeg; die pyltjie vou hulle weg.
- Met twee of meer grafieke wys {{ui:Naas mekaar}} hulle almal op een slag (die nuutste ses); as jy op 'n tabel se of prent se blad klik, wys dit daardie een alleen weer.
- Elke grafiek het {{ui:PNG}}, {{ui:SVG}} en {{ui:CSV}} daaronder. PNG en SVG druk dit op wit in die papierkleure, ongeag die tema (PNG 1600 × 1000 pixels; SVG skaal sonder om vaag te word); CSV hou sy getalle met elke syfer: een kolom x en 'n kolom per kurwe wanneer die kurwes dieselfde x deel, anders een ry per punt met die kurwe se naam.
- {{key:F}} of {{ui:Pas pas}} pas die aansig by wat gewys word.

## Lêers

- {{ui:Maak oop}} in die Skrip-groep (of sleep lêers op die aansig of die paneel): `.craft`-, `.lua`- en `.py`-lêers maak oop as nuwe skripte (hulle loop nie); datalêers (STL, OBJ, CSV, JSON, NPY, HDF5) laai in die veranderlikes onder hul lêernaam.
- {{ui:Stoor}} in die Skrip-groep laai die huidige skrip af as 'n lêer.
- {{ui:Nuut}} in die Skrip-groep (of {{ui:+}} by die blaaie) begin 'n ander skrip. Dubbelklik op 'n blad om dit te hernoem; sy {{ui:×}} verwyder dit (jy kan dit ontdoen).

## Lees die onderdeel se parameters

'n Skrip lees die onderdeel se parameters (sien [Beheer 'n onderdeel met parameters](topic:parameters)) volgens naam:

```
w = param('width');     % een parameter se waarde, in mm (of grade, of 'n gewone getal)
p = params();           % almal, as 'n struct: p.width, p.height
```

In Lua en Python is hulle `cs.param('width')` en `cs.params()`. Skripte lees net parameters: verander hulle op die {{ui:Parameters}}-blad. Onder die skrip se blad lys 'n reël die parameters wat dit met `param('…')` lees, en merk enige wat die onderdeel nie het nie; die {{ui:Parameters}}-blad lys die skrip onder elkeen. 'n Naam wat terwyl die skrip loop gebou word, soos `param(name)`, word nie gelys nie.

## Skripte word in die onderdeel gestoor

Elke skrip in die blaaie word in die onderdeel gehou, so {{ui:Stoor}} in die Lêer-groep stoor hulle saam daarmee en veranderings daaraan kan ontdoen word. Om 'n onderdeel oop te maak **loop nooit sy skripte nie**: die konsole sê hoeveel dit dra, en hulle loop net wanneer jy Voer uit druk. 'n Onderdeel van iemand anders kan enige skrip hê: lees dit voordat jy dit loop. Skripte loop op die agtergrond op hierdie rekenaar sonder netwerktoegang en kan nie die bladsy raak nie.

## Verwante

- [Die CraftScript-taal](topic:craftscript-language)
- [Skripte in Lua](topic:craftscript-lua)
- [Skripte in Python](topic:craftscript-python)
- [Die analise-biblioteek](topic:craftscript-library)
- [Skryf jou eie analise](topic:craftscript-own-analysis)
