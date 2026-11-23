---
title: 3D apdaila: lygiagrečiai ir banguotumas
summary: Apdailinkite visą modelio kreivą paviršių rutuliniu, pusapvaliu arba plokščiu galiniu frezu, lygiagrečiomis linijomis bet kuriuo kampu arba perėjimais, nutolusiais per nustatytą atstumą, kad tarp jų likusios keterės išlaikytų jūsų nurodytą aukštį. Ką garantuoja takai ir ko – ne.
keywords: 3d apdaila, apdaila, lygiagrečiai, rastras, banguotumas, pastovus banguotumas, keterė, rutulinis frezas, pusapvalis frezas, paviršius, tolerancija, žingsnis tarp eilių, nuolydis, paliekamas ruošinys, frezo nuleidimas, įpjova
from: 942d2341
---

Dvi Gamyboje operacijos pjauna **visą modelio paviršių**, įrankiui išlaikant vertikalią padėtį (trys ašys). Jos nereikalauja pasirinkimų: dirba su visa modelio dalimi, matoma iš viršaus. Pirmiausia nušiurkštinkite detalę (Adaptyvus arba Kišenė); apdailos perėjimas per neapdorotą ruošinį įspės, kad pjaus per giliai.

## Lygiagretumas

Tiesios linijos per modelį **kampu**, kurį nustatote, su **žingsniu tarp eilių** (dalis įrankio skersmens). Kiekviena linija seka paviršių: frezo galiukas yra tiek aukštai, kiek būtina, kad nė viena frezo dalis nenusileistų žemiau modelio, o linija pjaunama smulkiau ten, kur paviršius linksta. Įjungus **Zigzagas**, įrankis lieka įleistas tarp linijų tose vietose, kur tai saugu (tikrinama išilgai judesio); kitu atveju jis pakyla.

- **Tolerancija**: kiek tiesi linijos dalis gali nukrypti nuo tikro galiuko aukščio (kiekvienos dalies viduryje kaip riba naudojama pusė šios reikšmės). Numatytoji reikšmė 0.01 mm.
- **Tik ten, kur paviršius yra bent … ir ne daugiau kaip … (°)**: apdailinkite tik lėkščias arba tik statesnes sritis. Kur paviršius yra už intervalo, linija praleidžiama, o įrankis pakyla.
- **Paliekamas ruošinys**: modelis, paslinktas per tą atstumą (frezas tiek pat padidintas: tiksliai rutuliniams ir pusapvaliems įrankiams; plokščias įrankis palieka bent tiek).
- **Apačia**: nieko nepjaunama žemiau šios z koordinatės.

## Banguotumas

Perėjimai, išlaikantys pastovų atstumą paviršiuje vienas nuo kito, todėl keterė (banguotumas) tarp dviejų gretimų perėjimų turi nurodytą **aukštį**. Atstumas apskaičiuojamas pagal aukštį ir rutulio spindulį: s = 2·√(2·R·h − h²); pavyzdžiui, apie 0.69 mm tarp perėjimų Ø6 rutuliui ir 0.02 mm keterei. Pusapvalis įrankis naudoja savo kampo spindulį. Plokščias galinis frezas atmetamas: jis neturi keterės, kurią būtų galima apskaičiuoti.

Perėjimai pradedami **nuo modelio krašto, einant į vidų**, arba **nuo jo viršaus, einant žemyn**. Tai yra atstumo paviršiumi kontūrai (ne aukščio kontūrai), todėl ant nuolydžio jie plane arti vienas kito, o ant lygumos – toli. Atstumas matuojamas tinklelyje virš paviršiaus ir yra tikslus maždaug iki 1 %; keterės aukštis tikslus ten, kur paviršius lygus arba švelniai išlenktas, ir apytikslis ten, kur jis greitai linksta. **Sinchroninis frezavimas** išlaiko aukštesnę paviršiaus pusę frezo dešinėje.

## Kaip geri takai

Ką patikrina testai, naudodami uždarąsias formules arba nepriklausomą frezo pėdsakų perrinkimą:

- Galiuko aukštis po įrankiu yra tikslus rutuliniam, pusapvaliam ir plokščiam įrankiui ant tinklo paviršių, kraštų ir kampų ir niekada nėra didesnis už tikrąjį aukštį; lygiagrečioms linijoms takas išlieka tolerancijos ribose, be įpjovos, gilesnės nei ta riba.
- Takų ilgiai ant pasvirusios plokštumos sutampa su uždarąja formule; banguotumo perėjimai plokštumoje yra prašomu atstumu vienas nuo kito, o tarp jų likusi keterė yra prašomo aukščio.
- Ruošinio imitavimas po perėjimo nerodo įpjovų į detalę ir parodo likusias keteres.

Tai nėra visa, ką siūlo gamybinė sistema: tai pagrindiniai apdailos perėjimai.

- Neįgyvendinta: vandens linijos (pastovaus z) apdaila, pieštuko ir kampų valymas, spinduliniai ir spiraliniai perėjimai, kreivės projektavimas ant paviršiaus, plokščių sričių aptikimas, laikiklio ir kočio susidūrimų tikrinimas. Šiurkštinimas ir likučio apdirbimas yra atskiros operacijos ([3D šiurkštinimas ir likučio apdirbimas](topic:rough-3d)); įrankis, kuris pasviręs, yra [5 ašių apdaila](topic:multi-axis#5-axis-finishing).
- Įrankio centras lieka virš modelio: takai sustoja ties modelio kraštu, o ne išeina už jo, todėl vertikali siena tiesiai prie krašto nėra apdailinama iki pat pagrindo.
- Paslėpti paviršiai (undercut) nematomi: paviršius yra tai, ką įrankis pasiekia iš viršaus.
- Modelis yra tinklas iš branduolio, todėl takai seka tinklą (jo akordo tolerancija apie 0.0002 detalės įstrižainės), o ne tikrąjį paviršių.
- Didelio modelio apdaila smulkia tolerancija sukuria ilgą programą su daugybe trumpų judesių. Prieš pjaudami patikrinkite išvestį savo staklių imitatoriuje.
