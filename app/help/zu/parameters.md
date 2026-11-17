---
title: Qhuba ingxenye ngemingcele
summary: Qamba izilinganiso ezibalulekile (ububanzi, ukuqina, usayizi wesikulufo), uxhumanise noma yiluphi inombolo yesici noma isilinganiso seskethi kuzo nge-=, bese uguqula yonke ingxenye kusuka etafuleni elilodwa.
keywords: imingcele, lapho kusetshenziswa, okusetshenziswa yi, imingcele yomhlaba wonke, izinguquki, izibalo, inhloso yedizayini, izilinganiso eziqhubayo, xhuma, isisho, qamba isilinganiso, izinani ezixhunyiwe
from: 58c646ea
---

Ingcele ayinombolo eqanjiwe, njengo `width = 120` noma `margin = bolt * 1.5`. Xhumanisa ukujula, ububanzi bembobo, inani lephethini noma isilinganiso seskethi kuyo, bese ushintsha imingcele, ushintsha konke ngesinyathelo esisodwa. Yiyo lena indlela yokugcina inhloso yedizayini engxenyeni kunasekhanda lakho.

## Engeza imingcele

1. Ephaneli esekudla, chofoza ithebhu le-{{ui:Imingcele}}.
2. Ngaphansi kwe-**Izinguquki**, thayipha igama ebhokisini "igama", isibonelo `width`.
3. Thayipha inani lalo ebhokisini elilandelayo, isibonelo `120`, bese ucindezela {{key:Enter}} (noma uchofoze {{ui:Engeza}}).

Inani lingaba yinombolo noma isisho sezinye izingcele: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Ikholomu ye-**Inani** ibonisa lokho okuphuma kukho. Igama liqala ngohlamvu noma `_` futhi linezinhlamvu, izinombolo kanye `_` kuphela; amagama wemisebenzi nezinyunithi (`sin`, `mm`, `pi`) ayenqatshwa, futhi kanjalo nokuzungeza okufana no `a = b` no `b = a`.

## Xhumanisa inombolo nengcele

1. Chofoza isici emlandweni, isibonelo "Extrude1". Izilungiselelo zaso zibonakala ethebhulethini le-{{ui:Izakhiwo}}.
2. Ebhokisini lenombolo, njengo **Ukujula (mm)**, thayipha `=` kanye nesisho: `=thick` noma `=width / 4`.
3. Cindezela {{key:Enter}}.

Ibhokisi manje likhombisa umphumela, futhi inkinobho ye-**ƒ** ivela eceleni kwelebula layo. Chofoza phezu kwayo ukuze ubone isibalo. Izilinganiso zeskethi zisebenza ngendlela efanayo, kokubili kuhlu lwe-**Izilinganiso zeskethi** lwesici nasebhokisini lesilinganiso seskethi evuliwe (chofoza kabili isilinganiso, thayipha `=width`, cindezela {{key:Enter}}).

Izinombolo ongazixhumanisa: ukujula kwe-extrude, ikhono le-revolve, ububanzi bembobo, ubujula nosayizi wecounterbore, inani lephethini, ibanga nekhona lephethini, iradiyasi ye-fillet, ibanga le-chamfer, ukuqina kodonga le-shell, yonke into eseskethini, nosayizi wezici ezintsha (ujula lwesibili, ukuncipha, i-countersink, ibanga lendiza yereferensi, i-engeli ye-draft nezinye).

## Shintsha ingcele

Ethebhulethini le-{{ui:Imingcele}}, thayipha inani elisha noma isisho ekholomini le-**Isisho** bese ucindezela {{key:Enter}}. Konke okuxhunyiwe kuyashintsha futhi ingxenye iyakhiwa kabusha, njengesinyathelo esisodwa: {{key:Mod+Z}} iyakuhlehlisa.

Ukushintsha inombolo ngokuphambene, bona [Izibalo ngazo zombili izindlela](topic:equations-two-way).

## Bona lapho ingcele isetshenziswa khona

Ngaphansi kwengcele ngayinye ethebhulethini le-{{ui:Imingcele}}, umugqa uthi yini esiyisebenzisayo:

- izinombolo eziqhubayo, njengo **Extrude1 depth** noma **Sketch1 D2 (distance)**. Chofoza enye ukuze ukhethe isici bese ubonisa izakhiwo zaso;
- izinombolo eziqhubayo **ngokudlula** kwezinye izingcele, njengo **Hole1 diameter (through h, d)** lapho `d = h + 2` kanye `h = w / 2`;
- **izingcele** ezisebenzisa isisho sayo, **ukulungiselelwa** okuyisethayo, nama-**script** afunda kuyo (bona [Write and run scripts](topic:craftscript)).

"Not used yet." kusho ukuthi akukho okusebenzisayo: ungayisusa ngaphandle kokubuza.

## Xhumula, qamba kabusha, susa

- **Xhumula inombolo:** chofoza inkinobho yayo ye-**ƒ**, noma {{ui:Xhumula}} ohlwini lwe-**Izibalo**. Igcina inani lalo lamanje futhi akusekho ngcele eyishintshayo.
- **Qamba kabusha ingcele:** thayipha igama elisha ebhokisini layo le-**Igama**. Yonke isisho esiyisebenzisayo siyabhalwa kabusha.
- **Susa ingcele:** chofoza × emugqeni wayo. Uma okuthile kuyisebenzisa, i-PartCraft iyabuza ukuthi ibhale inani layo lamanje kuyo yonke lezo zisho kuqala.
- **Ukususa isici** kususa izibalo zezinombolo zaso; ibha yesimo ithi yiziphi.

:::note
Imingcele igcinwa efayelini le-`.partcraft.json` (njengenguqulo yefayela 3). Ingxenye engenamingcele igcinwa njengakuqala.
:::

## Izisho

| Bhala | Kusho |
|---|---|
| `120`, `12.5`, `1e3` | inombolo (amamilimitha, noma amadigri kwi-engeli) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | ubude ngezinye iziyunithi, eguqulwa ibe ngamamilimitha |
| `30deg`, `0.5rad` | i-engeli, eguqulwa ibe ngamadigri |
| `+ - * / %` kanye `^` | izibalo; `^` ingamandla, `-2^2` ngu −4 |
| `sin cos tan asin acos atan atan2` | i-trigonometry ngamadigri |
| `sqrt pow exp ln log abs sign` |Eminye imisebenzi |
| `ceil floor int round(x, digits) min max` | ukuzungeza nemikhawulo |
| `if(test, a, b)` nge `< <= > >= == !=` | ukukhetha: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Amagama acwaninga uhlamvu: `Width` no `width` yimingcele emibili ehlukene.

Bona futhi [Izinhlobo nethebhula lemiklamo](topic:design-tables) kanye [Ama-script nomugqa womyalo](topic:scripts-and-cli).
