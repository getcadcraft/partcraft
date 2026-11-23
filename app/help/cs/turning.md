---
title: Soustružení na soustruhu
summary: Čelo, hrubování, dokončení, zapichování, upichnutí, závit a vrtání soustruženého dílu podle obrysu, který díl vytváří při otáčení. Soustružnické nástroje, posuvy na otáčku, soustružnické postprocesory a co nebylo ověřeno.
keywords: soustružení, soustruh, soustružit, čelní soustružení, hrubování, dokončování, zapichování, drážka, upichnutí, závit, závitování, g32, g33, g96, konstantní řezná rychlost, css, poloměr hrotu, destička, tyč, sklíčidlo, průměr, posuv na otáčku, g71, g76
from: d8cc53b0
---

Výroba má pro soustruh sedm operací. Fungují na jakémkoli dílu: řeže se **obrys, který díl vytváří, když se točí** kolem středu polotovaru, takže díl, který není kulatý, se obrobí dolů na kulatý tvar, který jej drží.

**Zde nic nebylo spuštěno na soustruhu.** Dráhy jsou ověřeny geometrií testy; dva soustružnické postprocesory sledují zdokumentované kódy řídicích systémů. Nejdřív program ověřte v simulátoru vašeho řídicího systému a ve vzduchu.

## Upnutí

Na kartě **Upnutí**:

- **Osa nástroje** je osa vřetena, Z soustruhu. Čelo dílu je na +Z; sklíčidlo drží druhý konec.
- **Polotovar**: zvolte {{ui:Válec}}, tyč. Její horní odsazení je to, co odstraní čelní řez.
- **Počátek obrobku**: střed horní strany polotovaru nebo modelu dá Z0 na čelní plochu, což je obvyklé místo.
- **Řízení**: {{ui:Fanuc-style lathe (.nc)}} nebo {{ui:LinuxCNC lathe (.ngc)}}. Frézovací postprocesor soustružnický program odmítne a řekne to.
- **Max. otáčky vřetena**: limit, pod který je udržována povrchová rychlost.

{{ui:Více}} na panelu nástrojů Výroby vypíše sedm soustružnických operací nahoře na kartě **Operace**. První, kterou přidáte, přinese vlastní nástroj: **soustružnickou destičku** (poloměr hrotu, úhel destičky, úhel řezné hrany) nebo **zapichovací nůž** (šířka, poloměr rohu, jak hluboko dosáhne). Změňte je na kartě **Nástroje**. Posuvy jsou na otáčku a rychlost je povrchová rychlost v m/min, kterou řídicí systém drží při změně průměru; dejte nástroji vlastní ot./min, chcete-li rychlost pevně.

## Operace

| Operace | Co dělá |
|---|---|
| {{ui:Face}} | Čelo tyče až dolů k dílu, po hloubce přísuvu, od vnějšku až kousek za střed. |
| {{ui:Rough}} | Průchody po Z, každý o **hloubku řezu** od sebe, dolů k obrysu plus **ponechaný přídavek**; pak jednou po obrysu, aby se odstranily schody. Údolí mezi dvěma rameny se vstoupí zanořením o jednu hloubku řezu. |
| {{ui:Finish}} | Jeden průchod po obrysu při zlomku posuvu nástroje. |
| {{ui:Groove}} | Zapichuje nůž vedle sebe všude, kde může odebrat víc, než je ponechaného polotovaru: drážky, které soustružnická destička nedosáhla. **Od / Do Z** je zúží. |
| {{ui:Part off}} | Odřízne díl těsně za jeho zadní stranou, až kousek za střed, s zanořováním, pokud nastavíte. |
| {{ui:Thread}} | Vnější závit: vnější průměr, stoupání, délka, počet průchodů. Hloubka 0 znamená 0,6134 × stoupání (závit 60°). Každý průchod odebere stejnou plochu třísky; průchody bez přísuvu opakují poslední. |
| {{ui:Drill}} | Vrták na ose středu do hloubky, s zanořováním. |

## Jak se nástroj drží mimo díl

Destička se bere jako to, čím je: její špička (kružnice hrotu) a za ní zadní hrana, rovná čára, jejíž úhel je 180° minus úhel řezné hrany a úhel destičky. Ten tvar se spouští na obrys v každém bodě podél Z a dráha je místo, kde dosedne. Tedy:

- **Poloměr hrotu je už v dráze.** Postprocesory nezapisují `G41` ani `G42`; souřadnice jsou naprogramovaný bod nástroje (roh čtverce kolem hrotu).
- Destička **nemůže jít po stěně strmější, než je její zadní hrana**. Drážka za ramenem zůstane nedotčena a dokončovací operace řekne, kolik obrysu nemohla dosáhnout. Operace {{ui:Zapichování}} ji zpracuje.
- Polotovar se po každém řezu sleduje podél Z, takže hrubování neřeže vzduch, zapichování najde, co zbylo, a každá operace ukáže objem, který odebrala, a to, zda zasáhla díl.

## Omezení

- **Pouze vnější soustružení**: žádný vyvrtávací nůž, žádné vnitřní drážky ani závity, žádné čelní drážky.
- Jedno vřeteno, díl držen na −Z. Žádné podvřeteno, žádné živé nástroje, žádné osy C ani Y, žádné pohyby opěrky nebo koníku.
- Dráhy jsou přímé pohyby: křivky jsou krátké čáry v toleranci (bez `G2`/`G3`) a hrubování a závitování se zapisují průchod po průchodu (bez cyklů `G71` nebo `G76`).
- Závitování jsou přímé průchody s přímým vyjetím na konci; dejte závitu odlehčovací drážku. Závit se v polotovaru nezobrazuje.
- Vrtání na středu nemění model polotovaru.
- Držák, věž a sklíčidlo se nekontrolují. Nastavte **Zastavit na Z**, aby nástroj zůstal daleko od čelistí.
- Posuvy a otáčky jsou výchozí hodnoty, stejně jako u frézování.
