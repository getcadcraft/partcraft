---
title: U dir sawir laser-ka
summary: Dooro waxa layer kasta samaynayo (gooy, score, qor, buuxi, sawir), hubi dhaqdhaqaaqa madaxa, kaydi laser-mode G-code oo GRBL ah, ama u dir browser-ka kadib markaad qaabayso shaqada.
keywords: laser, jarista laser-ka, qorista laser-ka, GRBL, G-code, qorid, buuxin, dither, qorida sawirka, score, gooy, Web Serial, Linux, qaabee shaqada, awoodda, xawaaraha, mararka
from: 327b3c46
---

Panel-ka {{ui:Laser}} wuxuu layers-ka sawirka u beddelaa barnaamij laser ah oo socda GRBL (inta badan kontoroolada laser-ka ee hobby-ga iyo shirkadaha yaryar ee diode iyo CO2). PartCraft gudahiisa, dooro {{ui:Export}} › {{ui:Laser program…}}, kadibna {{ui:Add outlines from a DXF…}}: geesaha iyo godadka ayaa soo gala layer-ka CUT. Qaybaha sheet metal-ka ee flat patterns-ka (oo leh khadadka foorarka ee layer-ka BEND) waxay u baahan yihiin kernel sax ah, taas oo nooca hadda ma leh. Dejinta waxaa lagu kaydiyaa faylka qaybta ama assembly-ga.

:::warning
Tijaabi dejin kasta xaashi qashin ah marka hore, ilaali indhahaaga oo daboolo, dhig daboolka xidh meel kasta oo uu leeyahay, mana tagto laser socda oo keli ah. Tirooyinka layer kasta ku bilaabato waa meelo ku meel gaar ah, ma aha talo ee alaabta.
:::

## Dooro waxa layer kasta samaynayo

Layer kasta oo sawirka ka mid ah waa hal safaf. {{ui:Does}} wuxuu u dejiyaa **Cut**, **Score**, **Engrave lines**, **Fill shapes**, **Engrave picture** ama **Not sent**, oo leh {{ui:Power %}}, {{ui:Speed mm/min}} iyo tiro {{ui:Passes}}.

- **Fill** wuxuu gubaa gudaha qaabab xidhan oo xariiqyo ah, oo {{ui:Line spacing}} ka fogaaday, {{ui:Angle}} ku jira, labada jihoo ama mid keliya, oo leh overscan si madaxu u dhaqso marka laser-ku shido; cross-hatch wuxuu ku daraa mar labaad oo 90°. Qaabka leh god wuxuu ku sii furan yahay godka.
- **Engrave picture** wuxuu sawirka u beddelaa dhibcooyin (Floyd–Steinberg, Atkinson, ordered, ama madow iyo cad oo heer xad ah), ama, *Grey levels* la doortay, awood isbedeleysa.
- Dalabka: sawirrada iyo buuxinta marka hore, kadibna qorida xariiqyada, kadibna scores, kadibna gooyada, si qaybta la gooyay aanay u dhaqdhaqmin markay la qoraysanayo. Layer kasta gudahiisa jidadku waxay socdaan **inside-first** (god hore qaybta ku jirta), kadibna kan ugu dhow.

## Hor eeg, kadibna kaydi

Hor eeg wuxuu muujinayaa waxa madaxu sameeyo: xariiqyada gubaya midab, dhaqdhaqaaqyada degdegga ah midab cawl, iyo sanduuq cagaar ah oo ku wareegsan wax kasta oo gubaya. Hoosteeda waxaa ah cabbirka, dherer gubista iyo qiyaas waqti (aan xisaabin xawaarihii la kordhiyay; mashiin dhab ah waa ka dheer). {{ui:Save G-code…}} wuxuu qoraa GRBL laser-mode G-code: `$32=1`, `M4` (ama `M3`) oo leh qiimayaasha S, dhaqdhaqaaqyada `G0` iyo `G1`, `M5` dhamaadka. X0 Y0 waa geeska hoose ee bidix ee shaqada, haddii aadan dooran asalka sawirka: dejinta zero-ga mashiinkaaga halkaas. G-code-ku wuxuu raacaa laser mode-ka GRBL ee dukumeentiga; weli lama isticmaalin laser dhab ah.

## U dir browser-ka

Chrome iyo Edge, {{ui:Connect…}} wuxuu kugu weydiinayaa inaad dooratid port-ka USB ee laser-ka. Waxba ma xidhmo ama u dirmo ilaa aad badhan riixdo. Marka hore riix {{ui:Frame the job}}: madaxu wuxuu raadiyaa sanduuqa shaqada iyadoo laser-ku **damaysan** yahay (ama awood hooseeya oo aad u dejisay tilmaame), si aad u aragto meesha uu gubi doono. Markaas kaliya ayaa {{ui:Send job}} furmaa, wuuna dib u xirmaa haddii aad wax badashid. {{ui:Pause}} wuxuu madaxa hakiyaa, {{ui:Stop}} wuu hakiyaa, dib u dejiyaa kontoroolka (laser-ku wuu damaa) wuuna diraa `M5`. Meelaha Web Serial aanu jirin (Firefox, Safari, iyo CadCraft Studio, kaas oo web view-kiisu weli lahayn), kaydi G-code-ka oo u dir barnaamijka laser-kaaga.

## Weli lama dhisin

Qaababka kontoroolada kale (Ruida, Marlin lasers, faylasha iibiyaha), tabs iyo lead-ins, kerf offset, maktabadaha alaabta, rotary iyo Z axes, isku-hagaajinta kamarada.
