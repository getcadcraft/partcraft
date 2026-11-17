---
title: Navrhnite prvok BimCraft a uložte ho späť
summary: Súčiastka odoslaná z BimCraft sa otvorí s budovou okolo seba, sivá a len na čítanie. Upravte ju a potom ju uložte späť, aby BimCraft mohol prijať nový tvar.
keywords: bimcraft, bim, prvok, odoslať, uložiť späť, prepojenie, budova, kontext, susedia, podpora, konzola, ifc, prijať
from: 0978fe53
---

## Čo budete robiť

Pracujte so súčiastkou, ktorá pochádza z modelu BimCraft, na jej mieste v budove, a odošlite nový tvar späť.

## Postup

1. V BimCraft vyberte prvok a zvoľte {{ui:Prepojenia súčiastky}} › {{ui:Odoslať do PartCraft}}. PartCraft ju otvorí ako novú súčiastku. Stavový riadok uvedie, že ide o prvok BIM.
2. Prvky okolo nej (do vzdialenosti 3 m) sú nakreslené sivou farbou. Slúžia ako podklad pre návrh. Nedajú sa vybrať ani meniť a nie sú uložené v súbore súčiastky.
3. Súčiastku upravte ako ktorúkoľvek inú: vystrihnite, pridajte, vyvŕtajte, zrkadlite. Jej počiatok a osi sú vlastné osi prvku, takže sa súčiastka vráti tam, kde stála.
4. Zvoľte {{ui:Súbor}} › {{ui:Export}} › {{ui:Uložiť späť do BimCraft}}. Stavový riadok uvedie, ktorú revíziu ste odoslali.
5. V BimCraft je prvok označený ako zmenený, kým ho tam niekto neprijme.

## Čo by ste mali vidieť

- Súčiastka si v súbore ponechá prepojenie. Ak ju neskôr otvoríte, stavový riadok stále uvádza, že ide o prvok BIM. Sivá budova sa vráti, kým prehliadač stále drží balík, ktorý bol odoslaný.
- Opätovné uloženie späť odošle revíziu 2, 3 a ďalšie. BimCraft ponechá najnovšiu.

## Dobre vedieť

- Tvar sa vráti ako sieť v milimetroch, vo vlastných osiach prvku. Prvky zostávajú v PartCraft.
- {{ui:Uložiť späť do BimCraft}} nič nerobí pri súčiastke, ktorá nepochádza z BimCraft.
- Súčiastka bez pevného telesa nemá nič, čo by sa dalo odoslať.
- Obe aplikácie musia byť otvorené v tom istom prehliadači: nič sa nenahráva, obe stránky si prvok odovzdávajú medzi sebou.
