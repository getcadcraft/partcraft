---
title: Hlutar úr eðlisfræði: smíðaforrit
summary: Engineer-vinnusvæðið og eiginleikinn Myndaður búkur: veldu smíðaforrit, stilltu inntök þess (flæði, þrýsting, hitastig, efni, prentara) og fáðu hluta stærðaðan út frá kennslubókarformúlum, með gagnablaði sínu, framleiðsluprófunum og skrám fyrir greiningarverkfæri. Sömu inntök skila alltaf sama hlutanum.
keywords: engineer, smíðaforrit, myndaður búkur, eðlisfræði, reglur, varmaskiptir, greinir, stútur, grind, gyroid, gagnablað, inntök, ákvarðanlegt, sömu inntök sami hlutur, framleiðsluprófanir, þrívíddarprentun, duftbeð
from: 5a387dc0
---

**Smíðaforrit** er handrit sem stærðar hluta út frá kröfum þínum og smíðar hann. Varmaskiptis-smíðaforrit tekur við varmanum sem flytja á, flæðunum tveimur og hitastigi þeirra, þrýstingnum og efninu; það reiknar út hversu stór kjarninn þarf að vera og hversu þykkur veggur hans er, smíðar hann, og segir þér tölurnar sem það notaði og hvaðan hver þeirra kom. Breyttu inntaki og hluturinn fylgir.

Niðurstaðan er venjulegur búkur í hlutnum: hann er á listanum yfir eiginleika, hann prentast og hann flyst út. Smíðaforritið sjálft er líka geymt í hlutnum, þannig að skrá opnast á hvaða tölvu sem er án þess að smíðaforritið sé uppsett, og **opnun hluta keyrir aldrei handrit**.

## Smíðaðu búk

1. Ýttu á {{ui:Engineer}}-vinnusvæðið í vinnusvæðarofanum.
2. Veldu smíðaforrit á listanum (þau sem fylgja PartCraft, og síðan þau sem þú opnaðir úr skrá) og ýttu á {{ui:Nýtt}}.
3. Handritið keyrir. Þegar því lýkur birtist búkurinn í útsýninu og spjaldið sýnir inntök hans, **gagnablað** og **athuganir**.

Þú getur líka bætt við einum úr Design: {{ui:Eiginleikar}} › {{ui:Meira}} › {{ui:Myndaður búkur}}.

## Breyttu honum

Breyttu hvaða inntaki sem er og búkurinn er smíðaður aftur stuttu eftir að þú hættir að skrifa. Spjaldið segir hvaða af þremur staðhæfingum er sönn:

- **Uppfært**: búkurinn samsvarar handritinu og inntökum þess.
- **Inntökin breyttust**: búkurinn í hlutnum er frá fyrri inntökum; hann er smíðaður aftur núna, eða ýttu á {{ui:Keyra}}.
- **Ekki keyrt ennþá** eða **Síðasta keyrsla mistókst**: villa í handritinu er sýnd ásamt línunni sinni.

{{ui:Stöðva}} stöðvar keyrslu sem tekur of langan tíma. {{ui:Afturkalla}} fer eitt skref í einu: keyrsla er eitt skref, inntak er eitt skref.

## Gagnablaðið

Sérhver tala sem smíðaforritið reiknaði út er skráð með **einingu** sinni og **hvaðan hún kemur** (kennslubókarjöfnu, staðli, gagnablaði). Ekkert er falinn fastur. Blaðið er hluti af skránni, þannig að það er eins á næstu tölvu. [Gagnaútflutningur](topic:data-out) segir hvernig á að vista það sem JSON eða PDF.

## Athuganirnar

Smíðaforrit getur athugað sinn eigin hlut á móti prentunarferli: veggi og bil þynnri en ferlið ræður við, lausa hluta, holrými sem gildra duft eða plastefni, göt sem eru of þröng til að hreinsa þau, og yfirhengi sem þurfa stuðning. Niðurstöðurnar eru í spjaldinu og á listanum {{ui:Vandamál}} (⚠-hnappurinn), og þær eru vistaðar með hlutnum.

Ferlatölurnar eru ávalar tölur sem opinberar hönnunarleiðbeiningar gefa fyrir ferlið almennt (FDM, SLA, SLS, málmduftbeð). Þær eru **ekki forskrift vélarinnar þinnar**: skiptu þeim út fyrir tölur verkstæðisins þíns áður en þú treystir athuguninni. Athugunin vinnur á rúmneti úr voxlum, þannig að hún er nákvæm upp á um einn voxel: veggur er aðeins tilkynntur ef hann er þynnri en takmarkið um meira en einn voxel.

## Hvað fylgir

| Smíðaforrit | Það sem það smíðar |
|---|---|
| Gyroid-kubbur | Kubb fylltan með gyroid, Schwarz P eða demantsblöðu: einfaldasta grindin |
| Gyroid-varmaskiptir | Kjarni tvívökva varmaskipta, stærðaður út frá álaginu með verkunarstuðli-NTU aðferðinni, veggurinn út frá þrýstingnum; getur athugað þrýstingsfallið með flæðisrannsókn á einu hólfi |
| Dreifigreinir | Haus og greinar, sérhvert rör stærðað út frá flæðinu sem það ber |
| Þrepuð grindarbiti | Grind sem veggurinn þykknar þar sem fínstilling efnis segir að efni þurfi |

Þau eru öll fyrstu mat byggt á kennslubókarformúlum. [Verkfræðisafnið](topic:engineering-library) skráir formúlurnar og takmörk þeirra. Keyrðu Simulation, Thermal eða Flow á niðurstöðunni áður en þú treystir henni.

## Útflutningseftirlit

Gagnablöð og smíðaforrit Engineer bera tilkynningu um útflutningseftirlit og viðskiptaþvinganir. Lestu hana í [Engineer og útflutningseftirlit](topic:engineer-export-notice); hún er líka neðst á hverju gagnablaði.

## Ekki smíðað enn

- Hauskar, tengi og festingar á varmaskiptakjarnanum: hann er aðeins kjarninn.
- Hitaferlar fyrir styrk efna: efnin eru við stofuhita.
- Tapar í T-tengjum og skipting flæðis milli útganga í greininum.
- Að bæta smíðaforritum við úr viðbótaskránni með einum smelli; að opna skrá bætir einu við þennan vafra.
- Smíðaforrit fyrir hin forritin.
