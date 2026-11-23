---
title: Post processors oo aad tafatiri karto
summary: Post waa fayl qoraal gaaban oo jaharta waddada qalabka u beddela G-code kontoroolkaaga. Nuqul ka mid ah post-yada dhex-ku-jira, beddel safafka aad u baahan tahay (lambarada safka, beddelka qalabka, dhaqdhaqaaqyada home, koodka dhamaadka), ku arag G-code-ka uu qorayo markaad qorayso, oo ku hay qaybta.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, tafatir post, post caadi ah, cpost, beddelka qalabka, M6, G43, wareeg hore loo qoray, lambarada safka, modal, dhacdo, doorsoomaha
from: c78d0cae
---

Isla waddada qalabku waa in loo qoro siday u kala duwan yihiin kontoroolada kala duwan: lambarada safka ama midna, `M6` ama joojin, `G28` ama `G53`, `M30` ama `M2`. **Post** waa qoraalka gaaban ee sheegaya sida. Saddexda post ee dhex-ku-jira ee PartCraft (Fanuc-style, GRBL iyo LinuxCNC) qaabkan ayay ku qoran yihiin, sidaas darteed post aad leedahay wuxuu ka bilaabi karaa nuqul mid ka mid ah.

Barnaamijka ku caddee simulator-ka mashiinkaaga ka hor inta aanad jarin, oo marka hore ku orod hawada kor ka agabka. Post-yada dhex-ku-jira waxay qorayaan wixii ay qori jireen ka hor inta qaabkan la abuurin (tijaabooyinka waxa ay isbarbar dhigaan natiijadooda bit-bit barnaamijyo badan), laakiin wax kasta oo halkan ku jira ma caddaysan mashiinkaaga, post aad beddeshay waa mid adiga kuu gaar ah oo adigu caddaynaysaa.

## Samee mid

Wax soo saarka, hoosta **Post**:

- {{ui:Edit post…}} kontoroolka dhex-ku-jira wuxuu furaa **nuqulkaaga adiga kuu gaar ah**. Post aad leedahay ayuu furaa post-kaas.
- {{ui:New post…}} wuxuu ka bilaabaa post madhan oo yar oo leh dhacdo kasta oo ku jirta.
- {{ui:Import post file…}} wuxuu akhriyaa fayl qoraal `.cpost` ah (faylka aad ka heshay **Save as a file…** tafatiraha).

Tafatiruhu wuxuu muujiyaa qoraalka, safka sheegaya in la akhrin karo (iyo safka qaldan), iyo G-code-ka post-ku qorayo markaad qorayso. **Hor-eeg** wuxuu dooranayaa barnaamij tusaale yar oo socda dhacdo kasta, ama barnaamijka qaybtan. {{ui:Save}} wuxuu post-ka ku kaydiyaa faylka qaybta (ilaa 20 post) wuxuuna doortaa kontoroolka. Post-yadu waxay raacaan qaybta; si aad ugu isticmaasho qayb kale, u kaydi fayl ahaan oo qaybta kale ku soo gali.

## Post waxa uu u egyahay

```
post mymill
name Mill-kayga (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Barnaamij {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Safaf bilaabma `//` iyo safaf madhan ayaa la iska dhegtaa. Sare waxa ku yaala dejimaha; kadibna block `on <event>` kasta oo loo baahan yahay, oo lagu xidho `end`. Dhacdo aad ka tagto ma qoraa wax.

| Dejinta | Macnaha |
|---|---|
| `post <id>` | Aqoonsiga post-ka: xarfo, lambar, `-` iyo `_` |
| `name <text>` | Waxa liiska Control muujiyo |
| `extension <ext>` | Kordhinta faylka: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … safaf `emit` kasta, ama midna |
| `decimal-point yes` / `no` | `10.` halkii `10` (faallooyinku waligood ma qaataan dhibicda) |
| `canned-cycles yes` / `no` | `no`: godyada waxa loo qoraa dhaqdhaqaaqyada G0/G1 ee ay matalaan |
| `modal <group> <words>` | Erayada kooxda (`modal motion G0 G1 G2 G3`) oo kaliya la qoro markay isbeddelaan |

## Dhacdooyinka

Waxay socdaan amarkan barnaamij kasta: `start`; kadibna howlgal kasta `operation`, `tool-change` (markii qalabku isbeddelo), `spindle` (markii xawaaruhu isbeddelo), `approach` (dhaqdhaqaaqa ilaa barta koowaad, ka hor rapid-ka koowaad), `coolant-on`, kadibna dhaqdhaqaaqyadiisa sida `rapid`, `feed` iyo `arc`, iyo wareeg hore loo qoray kasta sida `cycle-start`, hal `cycle-hole` oo godkasta u gaar ah, iyo `cycle-end`; ugu dambeyntii `end`.

Dhacdooyin dheeraad ah, oo ah waxa ka baxsan saddex tiir (post-ka aan lahayn dhacdadaas wuu diidaa barnaamijkaas oo wuxuu magacaabaa dhacdada uu ka maqan yahay):

| Dhacdo | Goorta | Doorsoomayaashiisa |
|---|---|---|
| `index` | Ka hor howlgal oo jihada qalabkiisa ka duwan tan ugu dambeysay, iyo ka hor howlgalka koowaad mashiin leh tiirarka wareega | `rot.a`, `rot.b`, `rot.c` (booska loo tagayo; madhan tiir kasta oo mashiinku ma lahayn), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Dhaqdhaqaaqyada howlgal tiirarkiisa wareega ay dhaqaajiyaan intii uu jarayo | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (haa markii quudintu tahay wakhti rogan), `invf` (1/daqiiqado) |
| `rotary-end` | Ka dib howlgal sidaas oo kale | |
| `probe-move` | Dhaqdhaqaaq joogsada markii probe-ku taabto | `x`, `y`, `z`, `f`, `probe.n` (1 ilaa 4), `probe.axis` (x, y ama z), `probe.k` (1, 2 ama 3) |
| `probe-set` | Ka dib taabashooyinka hal wareeg baadhis | `probe.kind` (`"z"`, `"x"`, `"y"` ama `centre`), `probe.action` (`set` ama `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Dhaqdhaqaaq dhuunto oo kharaad ah | `x`, `z`, `thread.lead` |

Dhacdo kasta ayaa sidoo kale isticmaali karta: `kin` (none, a, b, ac, bc), `rotary` iyo `tcp` (yes ama no, mashiinka Setup-ka ka yimaadda), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` iyo `op.turn` howlgalka, iyo kharaadada `spin.mode` (css ama rpm), `spin.css`, `spin.max` iyo `tool.nose`. Erayga xarfaha ah ee qiimihiisu madhan yahay, sida `A{rot.a}` mashiin aan tiir A lahayn, waa laga tagaa safka. Ku barbar dhig x, y iyo z sida qoraal oo xigmado ku jira (`if probe.kind == "z"`): iyaga oo laga reebay, waa isku-xirka dhaqdhaqaaqa.

Laba safood oo dheeraad ah sare ee post-ka ayaa ka dhigaya post kharaad: `machine lathe` (markaas wuxuu qoraa X iyo Z oo keliya, wuxuuna diidaa waddooyinka jarista sida post jarista uu diido waddooyinka khaaraadda) iyo `lathe-x diameter` ama `lathe-x radius`.

Dhacdo kasta waxay isticmaali kartaa doorsoomayaasha nooca dhaqdhaqaaqyadeeda, oo lagu qoro `{name}`: barnaamijka (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), agabka (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), qalabka (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), howlgalka (`op.name`, `op.type`), `rpm`, barta dhaqdhaqaaqa (`x`, `y`, `z`, `f`, iyo `moved`: run markii tiir uu isbeddelay), qaansooyinka (`arc.g` 2 ama 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) iyo godyada (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Liiska **Dhacdooyinka iyo doorsoomayaasha** ee tafatiruhu wuxuu muujinayaa dhacdo kasta waxa ay aragto. Gobolka aad akhrin karto oo deji karto: `cool`, `offset`, iyo `at.x`, `at.y`, `at.z`, `at.f` (qiimaha ugu dambeeya ee la qoray).

## Warbixinta

| Warbixin | Waxa ay sameyso |
|---|---|
| `raw TEXT` | Safka sida loo qoray (lambar safka la'aan) |
| `comment TEXT` | `(TEXT)` oo laga saaray xarfaha aan ASCII ahayn iyo qawsyada |
| `emit WORD WORD …` | Safka erayada; erayada madhan waa la reebaa; eray ma jiro, safka ma jiro |
| `word WORD …` | Ku dar erayada safka la dhisayo; `emit` madhan wuu dhammeeyaa |
| `if EXPR` … `else` … `end` | Shuruudo: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, haddii kale b) |
| `for tool in tools` … `end` | Mar kasta qalab uu barnaamijku isticmaalo |
| `set NAME EXPR` | Xusuuso qiime (`set offset tool.number`) |
| `reset NAME …` | Illow erayada modal-ka (kooxda, xarfaha ciwaanka sida `Z`, ama `at.z`) |
| `do rapid X Y Z` | Socodsii dhacdada `rapid` barta |

Eray waa qoraal la qoray oo leh godad `{variable|filter}`. Filtarrada waa `upper`, `lower`, `pad:N` (buuxinta eber), `cut:N` (N xarfood oo horreeya), `safe` (ASCII ammaan u ah faallada) iyo `int`. Eray dhamaadkiisa `~` waa **modal**: waxa lagu qoraa kaliya markii uu ka duwanaado waxa ugu dambeyntii la qoray (`G1~`, `X{x}~`). Eray dhamaadkiisa `~!` waxa lagu qoraa mar kasta oo waana la xasuustaa. Magac aan doorsoome ahayn waa qoraal caadi ah (`G81`, `mist`). Tirooyinka waa la wareejiyaa 0.001 mm waxaana lagu qoraa iyada oo aan eber dambe lahayn.

## Waxa post aanu samayn karin

Waxa uu go'aaminayaa sida dhaqdhaqaaqyada loo qoro, wax ka badan ma samayn karo. Ma beddeli karo waddada qalabka, ma dalbi karo howlgallada, ma jebin karo qaansoo, ma ku dari karo tiir, ma garanayo socodka iyo kinematics-ka mashiinkaaga, ama ma samayn karo xisaab ku saabsan isku-xidhka (ma jiro `+`). Meelaha leexinta qudhooda waxay ka yimaadaan mashiinka lagu sharaxay Setup, ma aha post-ka: post-ku wuxuu beddeli karaa calaamadooda ama xarfahooda, laakiin ma beddeli karo kinematics-ka. Nolosha qalabka iyo barnaamijyada hoosaadka lama dhisin. Fayl post oo nooca `.cps` ah oo barnaamij kale laga soo qaaday ma soo-saari karo: tani waa qaab kale oo fudud.
