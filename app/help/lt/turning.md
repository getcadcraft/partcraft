---
title: Tekinimas tekinimo staklėse
summary: Nuvalykite, šiurkštinkite, apdailinkite, išpjaukite griovelį, atskirkite, sriegiuokite ir gręžkite tekinamą detalę pagal kontūrą, kurį detalė sudaro sukdamasi. Tekinimo įrankiai, padavimai per apsisukimą, tekinimo postprocesoriai ir ko nėra įrodyta.
keywords: tekinimas, tekinimo staklės, tekinti, paviršiaus nuvalymas, šiurkštinimas, apdaila, griovelis, griovelio išpjovimas, atskyrimas, pjovimas, sriegis, sriegimas, g32, g33, g96, pastovus paviršiaus greitis, css, antgalio spindulys, įdėklas, strypas, griebtuvas, skersmuo, padavimas per apsisukimą, g71, g76
from: d8cc53b0
---

Gamyboje yra septynios operacijos tekinimo staklėms. Jos veikia bet kuriai detalei: pjaunamas **kontūras, kurį detalė sudaro sukantis** apie ruošinio vidurį, todėl ne apvali detalė nutekinama iki apvalios formos, kuri ją laiko.

**Čia niekas nebuvo paleista tekinimo staklėse.** Takai patikrinti pagal geometriją testais; abu tekinimo postprocesoriai seka valdiklių dokumentuotus kodus. Pirmiausia įrodykite programą savo valdiklio imitatoriuje ir ore.

## Paruošimas

Skirtuke **Paruoša**:

- **Įrankio ašis** yra veleno ašis, tekinimo staklių Z. Detalės priekis yra +Z; griebtuvas laiko kitą galą.
- **Ruošinys**: pasirinkite {{ui:Cilindras}}, strypą. Jo viršutinis poslinkis yra tai, ką pašalina paviršiaus pjūvis.
- **Darbinis nulinis taškas**: ruošinio viršaus arba modelio viršaus centras padeda Z0 ant priekinio paviršiaus – įprasta vieta.
- **Valdiklis**: {{ui:Fanuc tipo tekinimo staklės (.nc)}} arba {{ui:LinuxCNC tekinimo staklės (.ngc)}}. Frezavimo postprocesorius atsisako tekinimo programos ir apie tai praneša.
- **Didžiausios veleno apsukos**: riba, kuria laikomas paviršiaus greitis.

{{ui:Daugiau}} Gamybos įrankių juostoje išvardija septynias tekinimo operacijas **Operacijos** skirtuko viršuje. Pirmoji, kurią pridedate, atneša savo įrankį: **tekinimo įdėklą** (antgalio spindulys, įdėklo kampas, pjovimo briaunos kampas) arba **griovelio peilį** (plotis, kampo spindulys, kiek giliai jis pasiekia). Keiskite juos skirtuke **Įrankiai**. Padavimai yra per apsisukimą, o apsukos yra paviršiaus greitis m/min, kurį valdiklis palaiko, kai keičiasi skersmuo; duokite įrankiui savo apsukas, kad fiksuotumėte greitį.

## Operacijos

| Operacija | Ką daro |
|---|---|
| {{ui:Paviršius}} | Nuvalo strypo priekį iki detalės, po vieną gylio žingsnį, nuo išorės iki tik už centro. |
| {{ui:Šiurkštinimas}} | Perėjimai išilgai Z kas **pjovimo gylį**, žemyn iki kontūro plius **paliekamas ruošinys**; tada vieną kartą išilgai kontūro, kad nuimtų laiptelius. Įėjimas į įdubą tarp dviejų pečių daromas įsmeigimu vienu pjovimo gyliu. |
| {{ui:Apdaila}} | Vienas perėjimas išilgai kontūro, esant daliai įrankio padavimo. |
| {{ui:Griovelis}} | Įsmeigia peilį greta vienas kito, kur tik ruošinio, kuris dar lieka, kiekis viršija ribą: griovelius, kurių tekinimo įdėklas nepasiekė. **Nuo / Iki Z** juos susiaurina. |
| {{ui:Atskirti}} | Nupjauna detalę tik už jos galinio paviršiaus, iki šiek tiek už centro, su pertraukomis, jei nustatote. |
| {{ui:Sriegis}} | Išorinis sriegis: išorinis skersmuo, žingsnis, ilgis, perėjimų skaičius. Gylis 0 reiškia 0.6134 × žingsnis (60° sriegis). Kiekvienas perėjimas paima tą patį drožlės plotą; išlyginamieji perėjimai kartoja paskutinį. |
| {{ui:Gręžimas}} | Grąžtas centrinėje linijoje iki gylio, su pertraukomis. |

## Kaip įrankis laikomas nuo detalės

Įdėklas traktuojamas kaip tai, kas jis yra: jo antgalio apskritimas, o už jo – galinė briauna, tiesi linija, kurios kampas yra 180° mažiau pjovimo briaunos kampo ir įdėklo kampo. Ta forma nuleidžiama ant kontūro kiekviename taške palei Z, o takas yra ten, kur ji sustoja. Taigi:

- **Antgalio spindulys jau įtrauktas į taką.** Postprocesoriai nerašo `G41` ar `G42`; koordinatės yra programuojamas įrankio taškas (kvadrato, apvalinto aplink antgalį, kampas).
- Įdėklas **negali sekti sienos, statesnės nei jo galinė briauna**. Griovelis už peties paliekamas ramybėje, o apdailos operacija nurodo, kiek jos dalies įrankis nepasiekė. {{ui:Griovelis}} operacija tai paima.
- Ruošinys sekamas palei Z po kiekvieno pjūvio, todėl šiurkštinimas nepjauna oro, griovelių operacija randa, kas liko, ir kiekviena operacija parodo nupjautą tūrį bei tai, ar ji įsipjovė į detalę.

## Apribojimai

- **Tik išorinis tekinimas**: be vidinio peilio, be vidinių griovelių ar sriegių, be galinių griovelių.
- Viena verpstė, detalė laikoma −Z. Be antrinės verpstės, be gyvųjų įrankių, be C ar Y ašies, be stacionariosios atramos ar užpakalinio centro judesių.
- Takai yra tiesūs judesiai: kreivės yra trumpos linijos tolerancijos ribose (be `G2`/`G3`), o šiurkštinimas ir sriegimas rašomi perėjimas po perėjimo (be `G71` ar `G76` ciklų).
- Sriegimas yra tiesūs perėjimai su tiesiu išvedimu gale; duokite sriegiui atleidimo griovelį. Sriegis nerodomas ruošinyje.
- Gręžimas centre nekeičia ruošinio modelio.
- Laikiklis, revolverinė galvutė ir griebtuvas nepatikrinami. Nustatykite **Sustoti ties Z**, kad įrankis laikytųsi nuo griebtuvo žnyplių.
- Padavimai ir apsukos yra pradiniai parametrai, kaip ir frezavimui.
