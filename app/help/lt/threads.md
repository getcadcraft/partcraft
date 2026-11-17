---
title: Sriegiai ant velenų ir angų, piešiami ar modeliuojami
summary: Uždėkite ISO metrinį ar trapecinį sriegį ant bet kurio apvalaus paviršiaus, veleno ar angos. Palikite jį vaizdinį brėžiniams arba modeliuokite tikrą spiralinį sriegį 3D spausdinimui su tarpu, kad atspausdintos detalės tiktų.
keywords: sriegis, sriegiai, modeliuotas sriegis, spiralinis sriegis, spiralė, varžtas, veržlė, velenas, anga, išorinis sriegis, vidinis sriegis, vaizdinis sriegis, metrinis sriegis, trapecinis, acme, sraigtinė pavara, Tr16x4, M10, 3D spausdinimas, spausdinimas, tarpas, tinkamumas, kairinis, sriegiama anga
from: 4f6401cc
---

{{ui:Sriegis}} uždeda sriegį ant apvalių paviršių: veleno išorės (išorinis sriegis) ar angos vidaus (vidinis sriegis). PartCraft pagal paviršių pats nustato, kuris.

Sriegis iš pradžių yra **vaizdinis**: paviršius lieka lygus, vaizde sriegis rodomas punktyriniais apskritimais, o brėžinio lape jis pažymimas, pavyzdžiui, „M10×1.5 - 6g, sriegis 20 ilgio“. Pažymėkite **Modeliuotas**, kad į detalę įpjautumėte tikrą spiralinį sriegį 3D spausdinimui ar modeliui, kuris turi atrodyti teisingai.

## Sriegis veleno ar angos

1. Pagaminkite veleną ar angą pagal sriegio dydį: Ø10 velenas M10 varžtui arba Ø8.5 anga (gręžimo grąžtas) M10 veržlei.
2. Spustelėkite apvalų paviršių, tada pasirinkite {{ui:Daugiau}} › {{ui:Sriegis}}. Jei apvalus paviršius nepasirinktas, PartCraft paprašo spustelėti paviršius, tada {{ui:Atlikta}}.
3. Dešiniajame skydelyje patikrinkite **Dydis**. **Pritaikyti prie paviršiaus** pats parenka dydį: veleno atveju dydį, kurio didysis skersmuo lygus veleno skersmeniui; angos atveju dydį, kurio mažasis skersmuo tinka angai.

Sriegis prasideda paviršiaus atvirame gale, kur detalė toliau nesitęsia ašimi: laisvas veleno galas, angos žiotys. **Pradėti kitame gale** tai pasuka.

## Nustatymai

| Parametras | Pasirinkimai | Numatytoji reikšmė |
|---|---|---|
| **Forma** | ISO metrinis (60°), M1.6 iki M64 stambus; trapecinis (Tr, 30°), Tr8×1.5 iki Tr60×9 | ISO metrinis |
| **Dydis** | Pritaikyti prie paviršiaus arba vienas dydis iš sąrašo | Pritaikyti prie paviršiaus |
| **Visas paviršius** | Išjungus, nurodykite **Ilgį (mm)**, matuojamą nuo pradžios | Pažymėta |
| **Pradėti kitame gale** | Sriegis eina nuo kito paviršiaus galo | Išjungta |
| **Kryptis** | Dešinės ar kairės krypties | Dešinė |
| **Modeliuotas** | Įpjauti tikrą spiralinį sriegį | Išjungta |
| **Tarpas (mm)** | Rodoma, kai pažymėtas Modeliuotas: kiek mažesnis yra veleno sriegis ir kiek didesnis angos sriegis, visur aplinkui | 0.1 |

Dydis, netinkantis paviršiui, vis tiek sukuriamas, pritaikytas prie paviršiaus, o skydelis tai nurodo, pavyzdžiui, „Ø12 mm velenas nėra M10 Ø10 mm“. Keli paviršiai gali naudoti vieną sriegio elementą; su **Pritaikyti prie paviršiaus** kiekvienas gauna savo dydį.

## Modeliuoti sriegiai 3D spausdinimui

Modeliuotas sriegis atitinka standartinį bazinį profilį: ISO 68-1 metriniams sriegiams (plokšti viršūnės ir šaknys, 60° šonai), ISO 2901 trapeciniams (30° šonai). **Tarpas** perkelia visą profilį į vidų (velenui) arba į išorę (angai), kad atspausdintos detalės susisuktų:

- **0.1–0.2 mm** tinka daugumai spausdintuvų. Pirmiausia atspausdinkite bandomąjį varžtą ir veržlę.
- **0** yra standartinis profilis, skirtas mechaniškai apdirbtoms detalėms ar tinkamumui tikrinti.

Varžtas ir veržlė su tuo pačiu tarpu niekada neliečia vienas kito šonais: tarpas tarp jų lygus dvigubam tarpui, visur aplinkui.

:::tip
Smulkūs žingsniai spausdinami blogai: M3 ir mažesni arba žingsnis mažesnis nei 0.5 mm yra artima tam, ką gali nubrėžti 0.4 mm antgalis. Modeliuokite didesnius sriegius, o mažiems naudokite karštai įsukamą įdėklą ar sriegtą skylę.
:::

Modeliuotas sriegis yra kieto kūno dalis: STL, 3MF ir STEP eksportai jį perduoda, o {{ui:Matuoti}} jį išmatuoja. Jis padaro detalę lėčiau perskaičiuojamą: 20 ilgio M10 sriegis turi apie 150 000 trikampių.

## Sriegtos skylės

**Sriegta (ISO metrinė)** skylė taip pat turi jungiklį **Modeliuotas** su tuo pačiu **Tarpu**. Žr. [Gręžkite skyles ir įleidimus eskizo taškuose](topic:holes).

## Kai sriegis nesukuriamas

- „Sriegis uždedamas ant apvalaus paviršiaus (cilindro): velenas ar anga.“ Pasirinktas paviršius yra plokščias ar kitaip išlenktas.
- „Nėra standartinio dydžio, tinkančio apvalaus paviršiaus Ø0.6 mm: pasirinkite dydį.“ Pritaikymas prie paviršiaus nieko neranda per 12 % nuo paviršiaus. Pasirinkite **Dydį** arba pakeiskite paviršių.
- „Paviršius, ant kurio buvo šis sriegis, dingo (…). Pasirinkite jį iš naujo.“ Ankstesnis pakeitimas pašalino paviršių. Spustelėkite {{ui:Pasirinkti paviršius}} ir spustelėkite paviršių iš naujo.

:::note
Coliniai sriegiai (UNC, UNF), vamzdžių sriegiai, koniniai sriegiai, sriegių išėjimai ir nusklembti sriegio pradžios kampai dar neįgyvendinti. Tikslus branduolys modeliuotą sriegį rodo kaip vaizdinį.
:::
