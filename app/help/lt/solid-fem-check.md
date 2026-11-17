---
title: Solid FEM: vienos detalės įtempių patikra
summary: Įjunkite Solid FEM priedą, suskaidykite detalę tinklu, 3D vaizde pasirinkite fiksuotus paviršius ir apkrovą, skaičiuokite ir skaitykite poslinkį bei von Mises įtempį modelyje.
keywords: solid fem, baigtinių elementų metodas, fea, įtempis, von Mises, poslinkis, fiksuotas paviršius, apkrova, slėgis, gravitacija, natūralusis dažnis, virpesių forma, tinklas, priedas
from: 8b7e6ba2
---

## Ką darysite

Patikrinkite vieną kietąją detalę veikiant apkrovai: kur ji juda ir kur įtempis didžiausias. Tyrimas tiesinis ir tamprusis, todėl tai patikros priemonė; rezultatus peržiūri jūsų inžinierius.

## Žingsniai

1. Pasirinkite {{ui:Parametrai}} › {{ui:Priedai}} ir įjunkite {{ui:Solid FEM}} (kol to nepadarysite, jis išjungtas). Atidarykite {{ui:Solid FEM}} skirtuką dešiniajame skydelyje.
2. Po {{ui:Medžiaga}} pasirinkite vieną, arba {{ui:Pasirinktinė}} ir įveskite Puasono koeficientą, tankį ir takumo ribą.
3. Paspauskite {{ui:Pridėti fiksuotus paviršius}}, 3D vaizde spustelėkite paviršius, kurie laikomi, tada paspauskite {{ui:Pasirinkimas baigtas}}.
4. Pridėkite apkrovą su {{ui:Pridėti jėgą}}, {{ui:Pridėti slėgį}} arba {{ui:Pridėti gravitaciją}} ir pasirinkite jos paviršius tuo pačiu būdu.
5. Paspauskite {{ui:Suskaidyti detalę tinklu}}, tada {{ui:Skaičiuoti}}. Jei norite dažnių, pirmiausia po {{ui:Tyrimas}} pasirinkite {{ui:Natūralieji dažniai}}.
6. Peržiūrėkite {{ui:Rezultatai}} ir {{ui:Įspėjimai}}, tada paspauskite {{ui:Rodyti modelyje}}, kad nubrėžtumėte von Mises įtempį, poslinkį arba virpesių formą; {{ui:Pašalinti grafiką}} jį pašalina.

## Pastabos

- Puslapis skaičiuoja iki fiksuoto elementų skaičiaus; būsenos eilutėje rašoma, kada elemento dydis per smulkus.
- Įtempis fiksuotuose paviršiuose, apkrovos taškuose ir aštriuose kampuose didėja tinklui smulkėjant. Prieš remdamiesi didžiausia verte, patikslinkite tinklą ir palyginkite.
- Kiekvienas pakeitimas yra vienas atšaukimo žingsnis, o parametrai įrašomi detalės faile.
- Takumui ir kontakto tyrimams žr. [Patikrinkite įtempį ir linkį](topic:simulation).
