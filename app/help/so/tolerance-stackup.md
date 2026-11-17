---
title: Isu-dhiska tolerance-ka
summary: Dooro silsilad wejiyo ah oo ka mid ah qaybaha isku-dhiska, oo arag inta ay farqiga ku dhamaadka silsiladda u kala duwanaan karto, worst case iyo RSS, iyadoo cabbirrada ugu muhiimsan ay kowaad ku taal.
keywords: isu-dhiska tolerance-ka, stackup, falanqaynta tolerance-ka, silsiladda tolerance-ka, silsiladda cabbirka, loop, farqiga, cidhiidhi, worst case, rss, root sum square, tolerance-ka tirakoobka, contributors, sensitivity, gd&t, general tolerance, iso 2768
from: cbdb3159
---

**Stack-up** wuxuu isku daraa cabbirrada silsiladda ka dhex-marta qaybo badan si uu u arko inta ay farqiga — badanaa gap — u kala duwanaan karto marka qayb kasta la sameeyo meel kasta oo gudaha tolerance-keeda ah.

## Dooro silsiladda

1. Fur isku-dhis oo dooro {{ui:Stack-up}} kooxda Assembly. Kaar ayaa furmaya aragtida dushiisa.
2. Dooro waxa silsiladdu **lagu** cabbiro: X, Y ama Z ee isku-dhiska, ama {{ui:The first face's normal}}.
3. Riix {{ui:Pick the chain}} oo guji wejiyada silsiladdu ka dhex-marto, **si tartiib ah**: ka bilow hal dhinac oo farqiga ah, dhex mari qaybaha, oo ku dhamaad dhinaca kale ee farqiga.
4. Riix {{ui:Done}} ama Enter. Backspace wuxuu dib u qaadaa gujinta ugu dambeysa; Esc waa joojiyaa.

Laba guji oo isla qayb ah ayaa dhigaya cabbirka qaybtaas (masaafadeeda silsiladda). Guji qayb kale wuxuu sameeyaa **interface** u dhexeeya qaybaha, meesha ay kulmaan; ma laha tolerance haddii aadan qorin mid. Xidhiidhadu waxay ku daraan ama ka jaraan siday silsiladdu u socoto, waxayna xidhaan loop-ka: nominal gap waa waxa moodeelku tusayo.

Waxaad sidoo kale {{ui:Add a link}} gacanta, oo qortid nominal-kiisa, tolerance-kiisa, iyo inuu ku dareeyo (+) ama ka jaro (−).

## Ku sii tolerance-ka xidhiid kasta

Xidhiid kasta waxaa leh **upper** iyo **lower** deviation (tusaale +0.1 iyo −0.05). **Tolerance laga helo** wuxuu buuxiyaa iyaga qaybta:

- **General tolerance**: goobta title block-ka ee qaybta Tolerance (eeg [Drawing to PDF](topic:drawing-pdf)), markay akhrinayso ±0.1, +0.2/-0.1 ama ISO 2768-f, -m, -c ama -v (ISO 2768-1 tolerances-ka toosan, sida cabbirka xidhiidhka). General tolerance-ka qaybta ayaa si degdeg ah loo isticmaalaa markii silsiladda la doortay.
- **GD&T**: wax kasta oo feature control frame ah oo ku yaal sawirka qaybta. Goobaha Position, profile iyo runout waxay bixiyaan ± nus tolerance-ka. Tolerance-ka orientation ama form wuxuu badanaa ku jiraa tolerance-ka cabbirka hore: ku dar kaliya meesha silsiladdu ay kulanto wejiga la xakameeyay. Ⓜ ama Ⓛ ka dib, goobta waxaa loo qaadaa cabbirkeeda la sheegay; tolerance-ka bonus-ka lama tirinayo.
- **Typed**: lambarada aad qortid.

## Akhri natiijooyinka

- **Gap, nominal** iyo, marka tolerances-ku kala duwan yihiin, **Gap, mean** — +0.2/−0 iyo +0/−0.1 waxay dhaqaajiyaan dhexda kala duwanaanshaha.
- **Worst case**: dhammaan tolerances ay isku mar gaadhaan xaddigooda. Farqiga weligiis kama bixi karo.
- **RSS** (root sum square): tolerance kasta waxaa loo qaadaa sida saddex deviation oo caadi ah oo ka mid ah faafid caadi ah, waxaana lagu daraa sida isku xidhka fargadaadka ee wadarta. Inta badan isku-dhisyada waxay ku jiraan worst case-ka; tani waa qiyaasta caadiga ah qaybaha la sameeyo tiro badan.
- Bixi **Gap at least** iyo **Gap at most** si aad u aragto in worst case-ku had iyo jeer ku jiro xaddiga, iyo inta isku-dhis ee milyan ka mid ah RSS uu filayo inay ka baxaan.
- Tiirka **#** wuxuu u kala saaraa xidhiidhada iyadoo la eegayo **share**-kooda RSS: adkee kuwa hore si aad u sameysid farqiga ugu weyn.

{{ui:Save CSV}} wuxuu qoraa xidhiidhada, qaybahooda iyo natiijooyinka. Stack-ups-ka waxaa lagu kaydiyaa faylka isku-dhiska, isbeddel kasta waa hal tallaabo oo {{key:Mod+Z}}.

:::note
Stack-up waa hal jihooyin. Ma raacayo xagal ama leexasho silsiladda, mana akhrinayo tolerances-ka cabbirka ee sketches-ka: ku qor kuwaas sida typed tolerances ama title block-ka.
:::
