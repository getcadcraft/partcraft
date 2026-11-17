---
title: 3D-dokončna obdelava: vzporedno in scallop
summary: Dokončajte celotno ukrivljeno površino modela s kroglastim, zaobljenim ali ravnim rezkalom, v vzporednih črtah pod poljubnim kotom ali v prehodih na nastavljeni razdalji, tako da grebeni med njimi ohranijo višino, ki jo zahtevate. Kaj zagotavljajo poti in kaj ne.
keywords: 3d-dokončna obdelava, dokončanje, vzporedno, raster, scallop, konstantni scallop, greben, kroglasto rezkalo, rezkalo z zaobljenim vrhom, površina, toleranca, korak, naklon, pustiti material, spustni rezkalo, vdor
from: e1587d0a
---

Dve operaciji v Izdelava režeta **celotno površino modela** z rezkalom, ki ostane navpičen (tri osi). Ne zahtevata izbir: delata na vsem delu modela, ki ga je mogoče videti od zgoraj. Del najprej zgrobo obdelajte (prilagodljivo ali žep); dokončavanje čez nedelan material opozori, da bi rezalo pregloboko.

## Vzporedno

Ravne črte čez model pod **kotom**, ki ga nastavite, z **korakom** med njimi (delež premera rezkala). Vsaka črta sledi površini: konica rezkala je tako visoko, kot mora biti, da noben del rezkala ne pade pod model, črta pa je rezana tem finejše, kjer se površina ukrivi. Z vključenim **Cikcak** rezkalo ostane spuščeno med črtami, kjer to lahko varno stori (preverjeno vzdolž premika); sicer se dvigne.

- **Toleranca**: kako daleč sme biti ravni kos črte od prave višine konice (njena polovica se uporabi kot meja na sredini vsakega kosa). Privzeto 0.01 mm.
- **Samo kjer je površina vsaj ... in največ ... (°)**: dokončajte samo plitva ali samo strma področja. Kjer je površina zunaj območja, je črta izpuščena in rezkalo se dvigne.
- **Pustiti material**: model, zamaknjen za to razdaljo (rezkalo povečano za to: natančno za kroglasta in zaobljena orodja; ravno orodje pusti vsaj toliko).
- **Dno**: nič se ne reže pod to z.

## Scallop

Prehodi, ki med seboj ohranjajo konstantno razdaljo po površini, tako da ima greben (scallop), ki ostane med dvema sosednjima prehodoma, **višino**, ki jo zahtevate. Razdalja izhaja iz višine in polmera kroglice: s = 2·√(2·R·h − h²), na primer približno 0.69 mm med prehodi za kroglo Ø6 in greben 0.02 mm. Orodje z zaobljenim vrhom uporabi polmer svojega vogala. Ravni končni rezkalo je zavrnjen: nima grebena, ki bi ga lahko dimenzionirali.

Prehodi začnejo **od roba modela, navznoter** ali **od vrha modela, navzdol**. So konture razdalje po površini (ne višine), zato so na naklonu blizu v tlorisu, na ravnem pa široko narazen. Razdalja se meri na mreži po površini in je dobra do približno 1 %; višina grebena je natančna tam, kjer je površina ravna ali rahlo ukrivljena, in približna tam, kjer se hitro ukrivi. **Sovpadajoče** ohrani višjo stran površine na desni strani rezkala.

## Kako dobre so poti

Kaj preizkusi test, z zaprtimi oblikami ali neodvisnim iskanjem odtisa rezkala z grobo silo:

- Višina konice pod orodjem je natančna za kroglasto, zaobljeno in ravno orodje na ploskvah, robovih in kotih mreže, nikoli pa ne nad pravo višino; za vzporedne črte pot ostane znotraj tolerance od nje, brez vdora globljega od te.
- Dolžine poti na nagnjeni ravnini se ujemajo z zaprto obliko; prehodi scallop na ravnini so na zahtevani razdalji med seboj, greben med njimi pa pride ven na zahtevani višini.
- Simulacija zaloge ne kaže vdora po prehodu in kaže grebene, ki ostanejo.

Te poti niso vse, kar ponuja proizvodni sistem: so osnovni dokončevalni prehodi.

- Še ni izdelano: konturna obdelava (konstantna z), čiščenje svinčnika in vogalov, radialni in spiralni prehodi, projekcija krivulje na površino, zaznavanje ravnih področij, obdelava ostanka, preverjanje trkov držala in vratu ter kakršen koli nagib orodja.
- Središče orodja ostane nad modelom: poti se ustavijo na robu modela namesto da bi tekle čez, zato navpična stena tik ob robu ni dokončana do svojega dna.
- Podrezi se ne vidijo (površina je to, kar orodje sreča od zgoraj).
- Model je mreža iz jedra, zato poti sledijo mreži (njena toleranca tetive je približno 0.0002 diagonale dela), ne točni površini.
- Dokončevanje velikega modela pri fini toleranci naredi dolg program z mnogo kratkimi premiki. Preverite izhod v simulatorju vašega stroja, preden režete.
