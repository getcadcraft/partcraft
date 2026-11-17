---
title: Solid FEM: kontrola napětí jednoho dílu
summary: Zapněte doplněk Solid FEM, vytvořte síť dílu, ve 3D pohledu vyberte pevné plochy a zatížení, spočítejte úlohu a přečtěte posunutí a von Misesovo napětí na modelu.
keywords: solid fem, konečné prvky, fea, MKP, napětí, von mises, posunutí, pevná plocha, zatížení, tlak, gravitace, vlastní frekvence, tvar kmitání, síť, doplněk
from: 8b7e6ba2
---

## Co uděláte

Zkontrolujete jedno těleso dílu při zatížení: kde se pohybuje a kde je napětí nejvyšší. Výpočet je lineární a pružný, takže slouží jako pomůcka pro kontrolu; výsledky zkontroluje váš inženýr.

## Postup

1. Zvolte {{ui:Nastavení}} › {{ui:Doplňky}} a zapněte {{ui:Solid FEM}} (dokud to neuděláte, je vypnutý). Otevřete kartu {{ui:Solid FEM}} v pravém panelu.
2. Pod {{ui:Materiál}} zvolte jeden, nebo {{ui:Vlastní}} a zadejte Poissonovo číslo, hustotu a mez kluzu.
3. Stiskněte {{ui:Přidat pevné plochy}}, klikněte na plochy, které jsou ve 3D pohledu držené, a potom stiskněte {{ui:Výběr hotov}}.
4. Přidejte zatížení tlačítkem {{ui:Přidat sílu}}, {{ui:Přidat tlak}} nebo {{ui:Přidat gravitaci}} a jeho plochy vyberte stejným způsobem.
5. Stiskněte {{ui:Vytvořit síť dílu}}, potom {{ui:Řešit}}. Pokud chcete frekvence, nejprve zvolte pod {{ui:Studie}} položku {{ui:Vlastní frekvence}}.
6. Přečtěte si {{ui:Výsledky}} a {{ui:Varování}}, potom stiskněte {{ui:Zobrazit na modelu}}, aby se vykreslilo von Misesovo napětí, posunutí nebo tvar kmitání; {{ui:Odstranit graf}} jej odstraní.

## Poznámky

- Stránka počítá až do pevného počtu prvků; stavový řádek upozorní, když je velikost prvku příliš jemná.
- Napětí na pevných plochách, v místech zatížení a na ostrých rozích roste se zjemňováním sítě. Před spolehnutím na maximum síť zjemněte a porovnejte.
- Každá změna je jeden krok pro zpět a nastavení se ukládají do souboru dílu.
- Pro studie plasticity a kontaktu viz [Kontrola napětí a průhybu](topic:simulation).
