---
title: Solid FEM: kontrola napätia jednej súčiastky
summary: Zapnite doplnok Solid FEM, vytvorte sieť súčiastky, vyberte pevné plochy a zaťaženie v 3D pohľade, vyriešte a prečítajte posunutie a napätie podľa von Misesa na modeli.
keywords: solid fem, konečné prvky, fea, napätie, von mises, posunutie, pevná plocha, zaťaženie, tlak, gravitácia, vlastná frekvencia, tvar kmitu, sieť, doplnok
from: 8b7e6ba2
---

## Čo urobíte

Skontrolujte jedno teleso pod zaťažením: kde sa pohybuje a kde je napätie najvyššie. Štúdia je lineárna a pružná, takže slúži ako pomôcka na kontrolu; výsledky overí váš inžinier.

## Postup

1. Zvoľte {{ui:Nastavenia}} › {{ui:Doplnky}} a zapnite {{ui:Solid FEM}} (kým to neurobíte, je vypnutý). Otvorte kartu {{ui:Solid FEM}} na pravom paneli.
2. Pod {{ui:Materiál}} vyberte jeden, alebo zvoľte {{ui:Vlastný}} a zadajte Poissonovo číslo, hustotu a medzu klzu.
3. Stlačte {{ui:Pridať pevné plochy}}, kliknite na plochy, ktoré sú v 3D pohľade držané, a potom stlačte {{ui:Výber hotový}}.
4. Pridajte zaťaženie tlačidlom {{ui:Pridať silu}}, {{ui:Pridať tlak}} alebo {{ui:Pridať gravitáciu}} a jeho plochy vyberte rovnako.
5. Stlačte {{ui:Vytvoriť sieť súčiastky}}, potom {{ui:Vyriešiť}}. Ak chcete frekvencie, najprv zvoľte {{ui:Vlastné frekvencie}} pod {{ui:Štúdia}}.
6. Prečítajte si {{ui:Výsledky}} a {{ui:Upozornenia}}, potom stlačte {{ui:Zobraziť na modeli}}, aby sa vykreslilo napätie podľa von Misesa, posunutie alebo tvar kmitu; {{ui:Odstrániť graf}} ho odstráni.

## Poznámky

- Stránka rieši až po pevný počet prvkov; stavový riadok uvedie, keď je veľkosť prvku príliš jemná.
- Napätie na pevných plochách, bodoch zaťaženia a ostrých rohoch rastie so spresňovaním siete. Pred tým, ako sa spoľahnete na špičku, sieť spresnite a porovnajte.
- Každá zmena je jeden krok späť a nastavenia sa uložia do súboru súčiastky.
- Štúdie plastizácie a kontaktu nájdete v [Kontrola napätia a priehybu](topic:simulation).
