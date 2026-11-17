---
title: Geymdu og endurnýttu afganga
summary: Eftir raðningu verður það sem eftir er af hverri plötu að númeruðum afgangi í lagerlista; næsta raðning notar fyrst afgangana, síðan heilar plötur.
keywords: raðning, afgangur, úrgangsstykki, lager, plata, blað, endurnýting, efni, þykkt, CSV
from: 7a68d4b8
---

Þegar þú raðar hlutum á plötur má geyma nothæfan afgang hverrar plötu (ekki flísar) sem **afgang**: númeraða útlínu (R-0001, R-0002 …) með efninu, þykktinni, stærð sinni og verkinu sem hann kom úr. Listinn er vistaður með skránni og má vista hann sem CSV.

## Nota þá aftur

Sláðu inn **efni** og **þykkt**, hafðu {{ui:Use remnants first}} kveikt og raðaðu. Afgangar með sama efni og þykkt eru reyndir minnstir fyrst; hlutirnir sem passa fara á þá, innan eigin útlínu afgangsins og ekki nær jaðri hans; það sem passar ekki fer á nýjar plötur. Verkskýrslan segir hvaða afgangar voru notaðir og hvað varð eftir. Ef {{ui:Save the leftovers as remnants}} er kveikt, skrifar {{ui:Add this job to the stock}} verkið síðan í lagerlistann: afgangur sem var notaður er merktur **Notað** (ásamt verkinu) og er ekki boðinn aftur; það sem eftir er af honum verður nýr afgangur sem man hvaðan hann er kominn.

## Hvað telst afgangur

Afgangurinn er mældur með því bili sem þú stillir (enginn hluti er nær skurði en það). Ræmur mjórri en tuttugasti hluti plötunnar og stykki minni en 2 % hennar eru úrgangur; breyttu báðum mörkunum ef verkstæðið þitt geymir smærri stykki. Göt inni í hlutum tilheyra hlutunum sjálfum og eru ekki geymd. Rúlla hefur enga afganga.

## Á teikningunni

DXF-skrá raðaðs skipulags teiknar útlínu hvers afgangs á laginu REMNANTS með númerinu í miðjunni, svo hægt sé að merkja stykkin þegar þau eru skorin.

Ekki smíðað ennþá: kornastefna afgangs, strikamerkja- eða merkimiðablað, afgangar af rúllum, lager sem deilt er milli verkefna.
