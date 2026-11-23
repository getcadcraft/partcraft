---
title: 3D dokončevanje: vzporedno in grebenasto
summary: Dokončajte ukrivljeno površino celotnega modela s krogličnim, z zaobljenim robom ali ravnim čelnim rezkalom, v vzporednih črtah pod poljubnim kotom ali v prehodih na nastavljeni razdalji, tako da grebeni med njimi ohranijo zahtevano višino. Kaj poti zagotavljajo in česa ne.
keywords: 3d dokončevanje, dokončevanje, vzporedno, rastrsko, grebenasto, konstantni greben, greben, kroglično rezkalo, zaobljen rob, površina, toleranca, korak prehoda, naklon, surovec za pustiti, spust orodja, vdor
from: 942d2341
---

Dve operaciji v Izdelavi režeta **celotno površino modela** z orodjem, ki ga držimo navpično (tri osi). Ne zahtevata izbire: delujeta na vsem delu modela, ki ga je mogoče videti od zgoraj. Najprej grobo obdelajte del (prilagodljivo ali žep); dokončevalni prehod nad neobdelanim surovcem opozori, da bi režal globoko.

## Vzporedno

Ravne črte čez model pod **kotom**, ki ga nastavite, na razdalji **koraka prehoda** (delež premera orodja). Vsaka črta sledi površini: konica orodja je tako visoko, kot mora biti, da noben del rezkala ne gre pod model, črta pa je rezana tem natančneje, kjer se površina krivi. Ob vklopljenem **Cikcak** orodje ostane spuščeno med črtami, kjer lahko to varno stori (preverjeno vzdolž premika); sicer se dvigne.

- **Toleranca**: kako daleč sme biti ravni del črte od prave višine konice (polovica se uporabi kot meja na sredini vsakega dela). Privzeto 0.01 mm.
- **Samo kjer je površina vsaj … in največ … (°)**: dokončajte samo položna ali samo strma območja. Kjer je površina zunaj območja, se črta izpusti in orodje se dvigne.
- **Surovec za pustiti**: model, zamaknjen za to razdaljo (rezkalo se poveča za to; natančno za kroglična orodja in orodja z zaobljenim robom; ravno rezkalo pusti vsaj toliko).
- **Dno**: pod to z-koordinato se ne reže.

## Grebenasto

Prehodi, ki med seboj ohranjajo konstantno razdaljo po površini, tako da ima greben (grebenasta izboklina), ki ostane med dvema sosednjima prehodoma, **višino**, ki jo zahtevate. Razdalja sledi iz višine in polmera kroglice: s = 2·√(2·R·h − h²); na primer približno 0.69 mm med prehodi za kroglo Ø6 in greben 0.02 mm. Orodje z zaobljenim robom uporablja polmer svojega vogala. Ravno čelno rezkalo je zavrnjeno: nima grebena, ki bi ga bilo mogoče dimenzionirati.

Prehodi se začnejo **z roba modela, navznoter** ali **z vrha modela, navzdol**. So konture razdalje po površini (ne višine), zato so na strmini v tlorisu blizu, na ravnem pa daleč narazen. Razdalja je merjena na mreži nad površino in je natančna na približno 1 %; višina grebena je natančna tam, kjer je površina ravna ali rahlo ukrivljena, in približna tam, kjer se hitro krivi. **Sovpadajoče**: ohrani višjo stran površine na desni strani rezkala.

## Kako dobre so poti

Kaj preizkusi preverjajo, z zaprtimi formulami ali z neodvisnim iskanjem s silo po odtisu rezkala:

- Višina konice pod orodjem je natančna za kroglično orodje, orodje z zaobljenim robom in ravno orodje na ploskvah, robovih in vogalih mreže ter nikoli ni nad pravo višino; pri vzporednih črtah pot ostane znotraj tolerance, brez vdora, globljega od nje.
- Dolžine poti na nagnjeni ravnini se ujemajo z zaprto formulo; grebenasti prehodi na ravnini so na zahtevani razdalji, greben med njimi pa ima zahtevano višino.
- Simulacija surovca po prehodu ne kaže vdora in prikaže grebene, ki ostanejo.

Te poti niso vse, kar lahko ponudi proizvodni sistem: so osnovni dokončevalni prehodi.

- Še ni izdelano: dokončevanje po stalnem z (vodna linija), čiščenje kotov (pencil), radialni in spiralni prehodi, projiciranje krivulje na površino, zaznavanje ravnih območij, preverjanje trkov držala in stebla. Grobo obdelavo in obdelavo ostankov opravljata ločeni operaciji ([3D grobo rezkanje in obdelava ostankov](topic:rough-3d)); nagnjeno orodje pa je [5-osno dokončevanje](topic:multi-axis#5-axis-finishing).
- Središče orodja ostane nad modelom: poti se ustavijo na robu modela, namesto da bi šle čez, zato navpična stena tik ob robu ni dokončana do svojega vznožja.
- Podrezi niso zaznani (površina je tisto, kar orodje sreča od zgoraj).
- Model je mreža iz jedra, zato poti sledijo mreži (njena tetivna toleranca je približno 0.0002 diagonale dela), ne natančni površini.
- Dokončevanje velikega modela pri fini toleranci naredi dolg program z mnogo kratkimi premiki. Pred rezanjem preverite izhod v simulatorju svojega stroja.
