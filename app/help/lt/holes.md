---
title: Gręžkite skyles ir įgilinimus eskizo taškuose
summary: Dėkite taškus eskize ant paviršiaus, sukurkite paprastas, įgilintas, nuleistas ar sriegiuotas (ISO metrinius) skyles kiekviename taške, nustatykite skersmenį ir gylį bei ištaisykite skyles, gręžiamas neteisinga kryptimi.
keywords: skylė, skylių vedlys, gręžimas, modeliuotas sriegis, 3D spausdinimas, įgilinimas, counterbore, cbore, nuleidimas, countersink, csink, sriegiuota skylė, sriegis, griežtuvo gręžimo skersmuo, metrinis sriegis, M6, per visą, aklinė skylė, varžto skylė, taškai, skylių centrai
from: 8e1eef83
---

{{ui:Skylė}} išgręžia po vieną skylę kiekviename laisvame eskizo taške. Laisvas taškas – tas, kuris sukurtas taško įrankiu, o ne linijos galas ar apskritimo centras.

## Gręžkite skyles paviršiuje

1. Spustelėkite plokščią paviršių, į kurį gręšite, tuomet pasirinkite {{ui:Eskizas ant šio paviršiaus}}.
2. Spauskite {{key:P}} ir spustelėkite, kur eina kiekviena skylė. Jei jų padėtis svarbi, nustatykite taškų matmenis nuo briaunų ar pradžios taško (žr. [Visiškai apibrėžkite eskizą](topic:relations-dimensions)).
3. Pasirinkite {{ui:Baigti}}.
4. Pasirinkite {{ui:Skylė}}.

Skylės praeina per detalę, 6 mm skersmens. Dešiniame skydelyje rodoma **Skylės**: kiek jų padaryta, „viena kiekvienam eskizo taškui“.

**Viena skylė, greitai:** spustelėkite plokščią paviršių, kur eina skylė, ir dešiniame skydelyje pasirinkite {{ui:Skylė čia}}. PartCraft vienu žingsniu prideda eskizą ant paviršiaus su vienu tašku ten, kur spustelėjote, ir skylę per detalę. Iš karto įveskite skaičių ir spauskite {{key:Enter}}, kad nustatytumėte jos skersmenį. Norėdami ją tiksliai padėti, atidarykite naują eskizą ir nustatykite taško matmenis.

**Kuris eskizas naudojamas:** ką tik uždarytas arba pasirinktas eskizas; kitu atveju naujausias nenaudotas eskizas, turintis laisvų taškų. Jei tokio nėra: „Pirmiausia sukurkite eskizą su taškais, kur eina skylės (Eskizas ant paviršiaus, tuomet Taškas).“

## Nustatymai

| Nustatymas | Pasirinkimai | Numatytasis |
|---|---|---|
| **Tipas** | Paprasta, Įgilinta, Nuleista, Sriegiuota (ISO metrinis) | Paprasta |
| **Skersmuo (mm)** | Skylės skersmuo | 6 |
| **Per visą** | Pažymėta: visiškai per detalę. Nuimkite žymę aklinei skylei | Pažymėta |
| **Gylis (mm)** | Rodoma, kai Per visą nepažymėta | 10 |
| **Įgilinimo ⌀** | Rodoma Įgilintai: platesnio įgilinimo skersmuo | 11 |
| **Įgilinimo gylis** | Rodoma Įgilintai | 6 |
| **Atvirkštinė kryptis** | Gręžia į kitą eskizo plokštumos pusę | Išjungta |

Skylės gręžiamos į medžiagą, statmenai eskizo plokštumai. Aklinės skylės gylis matuojamas nuo eskizo plokštumos; jos dugnas plokščias.

## Įgilinta varžto skylė

1. Padarykite skyles, kaip aukščiau.
2. Nustatykite **Tipas** į **Įgilinta**.
3. Nustatykite **Skersmuo (mm)** į `6.6` (laisvis M6 varžtui), **Įgilinimo ⌀** į `11` ir **Įgilinimo gylis** į `6.5`.

Įgilinimas turi būti platesnis už skylę („Įgilinimas turi būti platesnis už skylę.“) ir, aklinei skylei, seklesnis už ją („Įgilinimas turi būti seklesnis už skylę.“).

## Varžtų apskritimas

Skylėms, tolygiai išdėstytoms aplink centrą, padarykite **vieną** skylę ir sukurkite masyvą: pasirinkite Skylės elementą, tuomet {{ui:Apskritiminis}} (žr. [Masyvo ir veidrodinio atspindžio elementai](topic:patterns-mirror)). Masyvas seka, kai pakeičiate skylės dydį.

## Kai skylės gręžiamos neteisinga kryptimi

- „Toje eskizo pusėje nėra ką gręžti. Pabandykite pakeisti kryptį.“ Eskizas guli priešingoje medžiagos pusėje. Pažymėkite **Atvirkštinė kryptis**.
- „Eskizo taškus dėkite ten, kur eina skylės (taško įrankis), tuomet darykite skylę.“ Eskize nėra laisvų taškų. Linijų galai ir apskritimų centrai neskaičiuojami.
- „Gręžti dar nėra ko.“ Skylei reikia kieto kūno. Pirmiausia sukurkite iškyšą.

## Skylės surinkimuose

Kiekviena skylė turi ašį. Surinkime **Centruoti ant** gali uždėti jungtį ant skylės ašies, sąraše pažymėtą kaip „Hole1, hole 2“, kad kaištis ar varžto detalė su ja sutaptų. Žr. [Sukurkite surinkimą](topic:build-assembly).

## Nuleistos skylės

Nustatykite **Tipas** į **Nuleista**, tuomet **Nuleidimo ⌀** (paviršiuje) ir **Nuleidimo kampas**: 90° (ISO metriniams plokščiagalviams varžtams) arba 82° (coliniams varžtams). Nuleidimo skersmenį imkite iš varžto gamintojo duomenų (šiek tiek didesnį nei varžto galvutės skersmuo). Kūgio paviršius skydeliuose pavadintas „countersink“.

## Sriegiuotos skylės

Nustatykite **Tipas** į **Sriegiuota (ISO metrinis)** ir pasirinkite **Sriegis**, M2–M24 stambus. Skylė gręžiama griežtuvo gręžimo dydžiu iš lentelės žemiau (nominalus skersmuo minus žingsnis, iki gręžtuvų serijos, kaip ISO 2306 nurodo 6H sriegiui); lauko **Skersmuo (mm)** nenaudojamas. Aklinei skylei **Sriegio gylis (mm)** nustato, kiek giliai eina sriegis.

| Sriegis | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Žingsnis | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Griežtuvo gręžimo ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Sriegis iš pradžių yra **kosmetinis**: modelyje yra išgręžta skylė, vaizde sriegio didysis skersmuo rodomas brūkšninėmis apskritimo linijomis, o brėžinio lape žymė pateikiama kaip pastaba, pavyzdžiui, „4× M8×1.25 - 6H, sriegis per visą“. STEP eksportuoja tik išgręžtą skylę.

Pažymėkite **Modeliuotas**, kad į skylę įpjautumėte tikrą spiralinį sriegį 3D spausdinimui. **Laisvis (mm)** padaro skylę tiek didesnę aplink, kad atspausdintas varžtas tilptų: 0.1–0.2 mm tinka daugumai spausdintuvų. Žymė tuomet baigiasi „(modeliuota)“. Žr. [Sriegiai velenuose ir angose, nubraižyti ar modeliuoti](topic:threads), kurie sriegius deda ir ant velenų.

:::note
Dvipusės įgilintos skylės, coliniai sriegiai ir vamzdžių sriegiai dar neįgyvendinti.
:::
