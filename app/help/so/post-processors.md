---
title: Post-processors oo aad wax ka beddeli karto
summary: Post waa qoraal gaaban oo u rogaya toolpath G-code kontoroolkaaga. Nuqul mid ka mid ah posts-ka dhismay, beddel safafka aad u baahan tahay (lambarrada safka, beddelka qalabka, dhaqdhaqaaqa guriga, koodka dhammaadka), eeg G-code-ka uu qorayo markaad ku qorayso, oo ku hay qaybta.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, wax ka beddel post, post gaar ah, cpost, beddelka qalabka, M6, G43, wareeg xaddidan, lambarrada safka, modal, dhacdo, doorsoome
from: 36ab8a38
---

Isla toolpath ayaa in la qoro si kala duwan kontoroolo kala duwan: lambarrada safka ama midna, `M6` ama joojin, `G28` ama `G53`, `M30` ama `M2`. **Post** waa qoraalka gaaban ee sheegaya habka. Saddex posts-ka dhismay ee PartCraft (qaabka Fanuc, GRBL iyo LinuxCNC) waxay ku qoran yihiin qaabkan, sidaas darteed post gaar ah oo aad leedahay wuxuu ka bilaabi karaa nuqul mid ka mid ah.

Hubi wax-soo-saarka simulator-ka mashiinkaaga ka hor inta aadan jarin, oo marka hore ku orod hawada ku dhex jirta alaabta. Posts-ka dhismay waxay qoraan wax isku mid ah oo ay qorayeen ka hor inta qaabkan la abuurin (tijaabooyinku wax-soo-saarkooda bit bit ayay barbar dhigaan barnaamijyo boqollaal ah), laakiin waxan halkan ah lama caddeyn mashiinkaaga, post aad beddesho adigu waa inaad caddeysaa.

## Samee mid

Manufacture hoosta **Post**:

- {{ui:Edit post…}} ee kontoroolka dhismay wuxuu furaa **nuqulkaaga gaarka ah**. Haddii uu yahay post gaar ah oo aad leedahay, wuxuu furaa postkaas.
- {{ui:New post…}} wuxuu ka bilaabaa post madhan oo yar oo leh dhacdo kasta.
- {{ui:Import post file…}} wuxuu akhrinayaa faylka qoraalka `.cpost` (faylka aad ka heshay **U kaydi sida fayl…** tafatiraha).

Tafatiraha wuxuu muujinayaa qoraalka, khad sheegaya in la akhrin karo (iyo khadka khaldan), iyo G-code-ka post-ku qorayo, markaad ku qorayso. **Preview with** wuxuu doortaa barnaamij tusaale ah oo yar oo socodsiiya dhacdo kasta, ama barnaamijka qaybtan. {{ui:Save}} wuxuu post-ka ku kaydiyaa faylka qaybta (ilaa 20 post) wuxuuna u doortaa inuu noqdo kontoroolka. Posts-ku waxay la socdaan qaybta; si aad mid ugu isticmaasho qayb kale, u kaydi fayl oo halkaas ku soo gali.

## Post-ku sidee u eg yahay

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
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

Safafka ka bilaabma `//` iyo safafka madhan waa la iska dhaafaa. Sare waxaa yimaada dejinta; ka dib waxaa jira block `on <event>` kasta, oo lagu xidho `end`. Dhacdo aad ka tagto wax ma qori.

| Dejin | Macnaha |
|---|---|
| `post <id>` | Aqoonsiga post-ka: xarfo, lambarro, `-` iyo `_` |
| `name <text>` | Waxa liiska Control uu tusayo |
| `extension <ext>` | Fayl-kordhinta: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … safka `emit` kasta, ama midna |
| `decimal-point yes` / `no` | `10.` halkii `10` (faallooyinku waligood ma qaadaan dhibic) |
| `canned-cycles yes` / `no` | `no`: godadka waxa loo qoraa dhaqdhaqaaqyada G0/G1 ay matalaan |
| `modal <group> <words>` | Erayada koox (`modal motion G0 G1 G2 G3`) oo kaliya la qoro marka ay isbeddelaan |

## Dhacdooyinka

Waxay ku socdaan dalabkan barnaamij kasta: `start`; kadib hawlgal kasta `operation`, `tool-change` (marka qalabka la beddelo), `spindle` (marka xawaaraha la beddelo), `approach` (dhaqdhaqaaqa ilaa barta koowaad, ka hor `rapid` ka horreeya), `coolant-on`, kadibna dhaqdhaqaaqyadiisa sida `rapid`, `feed` iyo `arc`, iyo wareeg kasta oo xaddidan sida `cycle-start`, hal `cycle-hole` god kasta, iyo `cycle-end`; ugu dambeyn `end`.

Dhacdo kasta wuxuu isticmaali karaa doorsoomayaasha nooca dhaqdhaqaaqiisa, oo lagu qoro `{name}`: barnaamijka (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), alaabta (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), qalabka (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), hawlgalka (`op.name`, `op.type`), `rpm`, barta dhaqdhaqaaqa (`x`, `y`, `z`, `f`, iyo `moved`: true marka axis uu isbeddelo), arcs (`arc.g` 2 ama 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) iyo godad (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Liiska **Dhacdooyinka iyo doorsoomayaasha** ee tafatiraha wuxuu muujinayaa dhacdo kasta waxa arka. Gobolka la akhrin karo oo la dejin karo: `cool`, `offset`, iyo `at.x`, `at.y`, `at.z`, `at.f` (qiyamkii ugu dambeeyay ee la qoray).

## Warbixinada

| Warbixin | Waxa ay sameyso |
|---|---|
| `raw TEXT` | Safka sida loo qoray oo kaliya (lambar safka la'aan) |
| `comment TEXT` | `(TEXT)` oo laga saaray xarfaha aan ASCII ahayn iyo qoosaska |
| `emit WORD WORD …` | Safka erayada; erayada madhan waa la iska dhaafaa; ereyo la'aan, safka ma jiro |
| `word WORD …` | Ku dar erayada safka la dhisayo; `emit` oo kaliya ayaa dhamaystira |
| `if EXPR` … `else` … `end` | Shuruudaha: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, haddii kale b) |
| `for tool in tools` … `end` | Mar kasta qalab kasta oo barnaamijku isticmaalo |
| `set NAME EXPR` | Xusuusso qiime (`set offset tool.number`) |
| `reset NAME …` | Illoobi erayada modal (koox, xarf ciwaan sida `Z`, ama `at.z`) |
| `do rapid X Y Z` | Socodsii dhacdada `rapid` barta |

Eray waa qoraal la qoray oo leh godad `{variable|filter}`. Filters-ka waa `upper`, `lower`, `pad:N` (buuxinta eber), `cut:N` (N xarfood oo horay), `safe` (ASCII amaan u ah faallooyinka) iyo `int`. Eray dhammaanta `~` waa **modal**: waa la qoraa kaliya marka uu ka duwan yahay waxa ugu dambeyntii la qoray (`G1~`, `X{x}~`). Eray dhammaanta `~!` waa la qoraa mar kasta, oo waa la xasuustaa. Magac aan doorsoome ahayn waa qoraal caadi ah (`G81`, `mist`). Tirooyinka waxa loo wareejiyaa 0.001 mm, oo waa la qoraa iyada oo aan eber dambe lahayn.

## Waxa post-ku aan awoodin

Wuxuu go'aaminayaa sida dhaqdhaqaaqyada loo qoro, wax kale ma aha. Ma beddeli karo toolpath, ma dalbado hawlgallada, ma jebin karo arc, ma ku dari karo axis, ma garan karo socodka mashiinkaaga ama kinematics-kiisa, ma xisaabin karo koorarka (ma jiro `+`). Probing, wareegyada nolosha qalabka iyo barnaamij-hoosaadka, wax-soo-saarka axis-ka 4aad iyo 5aad, iyo koodhadhka lathe-ka lama dhisin. Faylka post-ka qaabka `.cps` ee barnaamij kale ma soo gali karo: tan waa qaab kale oo, oo ka fudud.
