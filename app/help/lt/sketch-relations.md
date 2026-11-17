---
title: Eskizo ryšiai ir matmenys
summary: Visi PartCraft eskizo ryšiai ir matmenys, ką pasirinkti kiekvienam, jo simbolis ir elgsena sprendžiant.
keywords: ryšiai, apribojimai, sutapimas, horizontalumas, vertikalumas, lygiagretumas, statmenumas, liestinė, lygumas, koncentriškumas, vidurio taškas, fiksavimas, atstumas, horizontalus atstumas, vertikalus atstumas, spindulys, skersmuo, kampas, simboliai, ženklai
from: 9831e7be
---

Ryšiai nustato, kaip geometrija išsidėsčiusi kitos geometrijos atžvilgiu. Matmenys nustato dydžius. Norėdami pridėti ryšį, pasirinkite elementus įrankiu Pasirinkti ({{key:S}}) ir dešiniajame skydelyje spustelėkite jo mygtuką; norėdami pridėti matmenį, naudokite matmens įrankį ({{key:D}}) arba matmenų mygtukus dešiniajame skydelyje. Kaip su jais dirbti: [Visiškai apibrėžkite eskizą](topic:relations-dimensions).

Žemiau "kreivė" reiškia apskritimą arba lanką. Koordinačių pradžia skaičiuojama kaip taškas.

## Ryšiai

| Mygtukas | Simbolis | Pasirinkti | Poveikis |
|---|---|---|---|
| {{ui:• Sutapimas}} | • (rodomas tik pasirinkus arba kilus problemai) | Du taškai | Taškai sutampa |
| {{ui:• Sutapimas}} | • | Taškas ir linija | Taškas guli ant linijos (arba jos tęsinio) |
| {{ui:• Sutapimas}} | • | Taškas ir kreivė | Taškas guli ant apskritimo arba lanko |
| {{ui:H Horizontalumas}} | H | Linija arba du taškai | Linija horizontali, arba abu taškai yra tame pačiame aukštyje |
| {{ui:V Vertikalumas}} | V | Linija arba du taškai | Linija vertikali, arba taškai vienas virš kito |
| {{ui:∥ Lygiagretumas}} | ∥ | Dvi linijos | Linijos eina ta pačia kryptimi |
| {{ui:⊥ Statmenumas}} | ⊥ | Dvi linijos | Linijos susikerta stačiu kampu |
| {{ui:T Liestinė}} | T | Linija ir kreivė | Linija liečia kreivę nekirsdama jos |
| {{ui:T Liestinė}} | T | Dvi kreivės | Jos liečiasi – iš išorės arba iš vidaus, kaip nubraižyta |
| {{ui:T Liestinė}} | T | Splainas ir linija, lankas arba splainas, prisijungiantis prie vieno jo galo | Splainas išeina iš to galo kitos kreivės kryptimi |
| {{ui:= Lygumas}} | = | Dvi linijos | Vienodas ilgis |
| {{ui:= Lygumas}} | = | Dvi kreivės | Vienodas spindulys |
| {{ui:◎ Koncentriškumas}} | ◎ | Dvi kreivės | Tas pats centras |
| {{ui:◎ Koncentriškumas}} | ◎ | Taškas ir kreivė | Taškas yra kreivės centre |
| {{ui:M Vidurio taškas}} | M | Taškas ir linija | Taškas yra linijos viduryje |
| {{ui:↔ Simetriškumas}} | ↔ | Du taškai ir linija | Taškai yra veidrodiniai vaizdai linijos atžvilgiu (Veidrodis prideda šiuos ryšius) |
| {{ui:⚓ Fiksavimas}} | ⚓ | Taškas, linija, kreivė arba splainas | Fiksuoja jį tiksliai ten, kur jis yra dabar (splainą – jo taškus) |

Čia linijos apima ir ašines linijas. Braižymas kai kuriuos ryšius prideda automatiškai: prilipimas prie taško padaro jį sutampantį, prilipimas prie kreivės uždeda tašką ant jos, beveik horizontalios arba vertikalios linijos gauna H arba V, o stačiakampis ateina su keturiais sujungtais kampais – du H ir du V.

**Fiksavimas** – greitas būdas sustabdyti judėjimą, tačiau tada detalė nebegali sekti matmens pakeitimo kitur. Pirmenybę teikite matmenims iki koordinačių pradžios.

## Matmenys

| Mygtukas | Pasirinkti | Matuoja | Rodoma kaip |
|---|---|---|---|
| {{ui:Atstumas}} | Linija | Jos ilgį | Atstumas 40 |
| {{ui:Atstumas}} | Du taškai | Tiesų atstumą tarp jų | Atstumas 40 |
| {{ui:Atstumas}} | Taškas ir linija | Atstumą nuo taško iki linijos, statmenai jai | Atstumas 40 |
| {{ui:Atstumas}} | Dvi lygiagrečios linijos | Tarpą tarp jų | Atstumas 40 |
| {{ui:Horizontalus atstumas}} | Du taškai arba linija | Tik kairės–dešinės atstumą | Horizontalus atstumas 40 |
| {{ui:Vertikalus atstumas}} | Du taškai arba linija | Tik aukštyn–žemyn atstumą | Vertikalus atstumas 40 |
| {{ui:Spindulys}} | Apskritimas arba lankas | Jo spindulį | Spindulys R10 |
| {{ui:Skersmuo}} | Apskritimas arba lankas | Jo skersmenį | Skersmuo ⌀20 |
| {{ui:Kampas}} | Dvi nelygiagrečios linijos | Kampą tarp jų, nuo 0 iki 180 laipsnių | Kampas 30° |

Naudodamas matmens įrankį, PartCraft parenka tipą pagal tai, ką spustelėjate, ir kur padedate skaičių:

| Spustelite | Gaunate |
|---|---|
| Vieną liniją | Jos ilgį; įstrižai linijai – horizontalų, jei skaičius padedamas virš arba po ja, vertikalų, jei šone |
| Vieną apskritimą | Skersmenį |
| Vieną lanką | Spindulį |
| Du taškus | Atstumą; horizontalų arba vertikalų, kaip įstrižai linijai |
| Tašką ir liniją | Atstumą nuo taško iki linijos |
| Dvi linijas | Kampą, arba atstumą, jei jos lygiagrečios |
| Tašką ir apskritimą | Nieko: "Those items cannot be dimensioned together." (Šių elementų negalima matuoti kartu.) Vietoj to matuokite iki apskritimo centro taško |

**Poslinkis** (rodomas kaip atstumas) sukuriamas poslinkio įrankiu: jis išlaiko nukopijuotą liniją lygiagrečią tam atstumui arba nukopijuotą lanką ar apskritimą – koncentrišką, su spinduliu, tiek didesniu arba mažesniu. Kitos to paties poslinkio dalys turi **O** ryšį ir seka vieną poslinkio matmenį. Žr. [Splainai, apkirpimas, poslinkis ir kiti eskizo įrankiai](topic:sketch-tools).

Matmenų reikšmės yra milimetrais (arba laipsniais) ir niekada nėra neigiamos. Spindulys ir skersmuo turi būti didesni už nulį. Atstumams leidžiama reikšmė 0: du taškai, nutolę per 0, sutampa.

## Kaip veikia sprendimas

- **Mažiausias judesys.** Pakeitus reikšmę, sprendiklis perkelia geometriją kuo mažiau. Linija, kurios ilgis keičiasi, auga abiem galais vienodai, jei nieko nelaiko nei vieno galo.
- **Be apsiverčiamo.** Atstumai nuo taško iki linijos, horizontalūs ir vertikalūs atstumai, kampai ir liestinumas prisimena, kurioje pusėje buvo sukurti. Pakeitus reikšmę, geometrija niekada neapsiverčia į kitą pusę.
- **Konfliktai nieko nekeičia.** Jei ryšiai prieštarauja vieni kitiems, eskizas lieka visiškai toks, koks buvo, o prieštaraujantys tampa raudoni.
- **Pertekliniai ryšiai** (jau išplaukiantys iš kitų) įvardijami būsenos juostoje ("is already implied. Delete it.", jau išplaukia iš kitų. Ištrinkite jį.), o elementas vis tiek sukuriamas, su įspėjimu.
- **Liestinės jungtys.** Kur suapvalinimo lankas susitinka su savo linijomis bendrame galiniame taške, liestinumas sprendžiamas taip, kad ten išliktų aiškiai apibrėžtas, todėl eskizo suapvalinimai nelaikomi perteklinai apibrėžtais.

## Dar neprieinama

Kolinearūs, koradialūs ir perdūrimo ryšiai; taškas ant splaino; valdomi (nuorodiniai) matmenys; koordinačių ir lanko ilgio matmenys; lygtys tarp matmenų. Kolinearioms linijoms naudokite Lygiagretumas ir 0 atstumą.
