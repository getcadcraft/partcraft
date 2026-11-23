---
title: Ukuhlola: thola ingxenye usethe ukushintshwa komsebenzi
summary: Thinta ubuso obuphezulu, uhlangothi, imbobo noma i-boss ngeprobhu bese uvumela umlawuli ukuthi ahambise ukushintshwa komsebenzi kulapho ingxenye ikhona ngempela, noma alinganise kuphela. Yini umlawuli ngamunye angayenza, nokuthi yini engafakazelwe.
keywords: iprobhu, ukuhlola, iprobhu lokuthinta, ukuthinta, ukushintshwa komsebenzi, g54, g31, g38.2, skip, datum, thola isikhungo, imbobo, boss, umphetho, setha ize, linganisa, ukuhlola, g10
from: 1f718b82
---

{{ui:Probe}} ku-Manufacture ibhala umjikelezo wokuhlola kuhlelo: iprobhu ithinta ingxenye, futhi umlawuli uhambisa ukushintshwa komsebenzi (G54) ngomehluko phakathi kwalapho ubuso bathololwa khona nalapho imodeli ithi bukhona khona. Imisebenzi elandelayo ibe isika lapho ingxenye ikhona ngempela.

**Akukho lutho lapha olusebenziswe emshinini.** Izinyathelo ngaphambi kokuthinta ziyizinyathelo ezijwayelekile: iprobhu ayibhekwa kuze kube yinyathelo lokuhlola ngokwalo. Yenza kancane, emoyeni kuqala, nesandla sakho ku-feed hold.

## Sebenzisa

1. Ethebhini le-**Tools** umsebenzi wokuqala wokuhlola wengeza **iprobhu lokuthinta**: ububanzi bebhola layo nokondla kokuhlola (100 mm/min uma ungasethi enye).
2. Cindezela {{ui:More}} ku-toolbar ye-Manufacture, bese {{ui:Probe}}, bese uchofoza lokho okufanele kuthintwe. Ukukhetha ngakunye kuyinzuzo eyodwa, ngokulandelana ochofoza ngakho:

| Ukukhetha | Umjikelezo | Okusethwayo |
|---|---|---|
| Ubuso obusicaba obubheka i-eksisi yethuluzi | Ukuthinta kunye kuhle | Z |
| Ubuso obusicaba bohlangothi obuma ngokuqondile ku-X noma ku-Y | Ukuthinta kunye kuya ebusweni, kancane ngaphansi kophezulu bawo | X noma Y |
| Imbobo noma i-boss ecaleni le-eksisi yethuluzi | Ukuthinta okune (+X, −X, +Y, −Y) | X no-Y yesikhungo sawo |

3. **Ngomphumela**: {{ui:Set the work offset}} noma {{ui:Measure only}}.
4. **Qala lokhu kude** no-**Sesha lokhu kude ngemva** yizinkomba zokuthi ukunyakaza kokuhlola kuqala kude kangakanani nobuso obulindelekile, nokuthi iprobhu ingahamba kude kangakanani ngaphezu kwalo ngaphambi kokuthi umlawuli ayeke. **Ukujula** kungukuthi ibhola lehla kangakanani ngaphansi kophezulu bembobo, i-boss noma ubuso bohlangothi.

Beka umsebenzi weprobhu kuqala, ngaphambi kokuthi kukhona okusikwayo.

## Umlawuli ngamunye ukubhala

| Umlawuli | Ukuthinta | Umphumela |
|---|---|---|
| Fanuc-style | `G31`, indawo egcinwe ku-`#101` kuya ku-`#104` | Okuguquguqukayo kokushintsha (`#5221` kuya ku-`#5223`) kuyanyakaziswa ngokuthola − okulindelekile. Measure only: umehluko ushiywa ku-`#110` (no-`#111`). |
| LinuxCNC | `G38.2`, indawo egcinwe emapharamitheni amagama | `G10 L2 P1` ngokushintshwa okusha. Measure only: umlayezo we-`(DEBUG, …)`. |
| GRBL | `G38.2` | Ukuthinta kunye kusetha i-eksisi nge-`G10 L20 P1`. I-GRBL ayinakho okuguquguqukayo, ngakho **ayikwazi ukubala isikhungo**: ifayela lisho lokho ku-comment futhi ayisethi lutho. |

Ukubalwa kwenziwa yi-post, ngakho ungakushintsha: izehlakalo yi-`probe-move` ne-`probe-set` ([Ama-post processor ongawahlela](topic:post-processors)).

## Imikhawulo

- Ukushintshwa komsebenzi kunye (G54). Ubuso obuma ngokuqondile kuma-eksisi kuphela: akukho i-engeli, akukho umjikelezo wamakhona, akukho ukujikeleza komsebenzi.
- Akukho setha lethuluzi, akukho ukuhlola ithuluzi elephukile, akukho ukulinganisa usayizi nokubekezelela, akukho umbiko.
- I-spindle ayiqalisi ngenxa yeprobhu futhi i-coolant ihlala ivaliwe; akukho okuhlola ukuthi ithuluzi kwi-spindle liyiprobhu.
- Isimulator sesitoko asisebenzisi indlela yokuhlola.
- Ukulinganiswa komzimba weprobhu (ukuphambuka kwebhola, ukugoba kwesihloko, iqondiso lokuthinta) kungokomlawuli.
