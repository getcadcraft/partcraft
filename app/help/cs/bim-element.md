---
title: Navržení prvku BimCraft a uložení zpět
summary: Díl odeslaný z BimCraft se otevře s budovou kolem sebe, šedý a jen pro čtení. Změňte ho a pak ho uložte zpět, aby BimCraft mohl přijmout nový tvar.
keywords: bimcraft, bim, prvek, odeslání, uložení zpět, odkaz, budova, kontext, sousedé, podpora, držák, ifc, přijetí
from: 0978fe53
---

## Co uděláte

Pracujete na dílu, který přišel z modelu BimCraft, na jeho místě v budově, a nový tvar pošlete zpět.

## Postup

1. V aplikaci BimCraft vyberte prvek a zvolte {{ui:Odkazy na díl}} › {{ui:Odeslat do PartCraft}}. PartCraft ho otevře jako nový díl. Stavový řádek říká, že jde o prvek BIM.
2. Prvky kolem něj (do 3 m) jsou vykresleny šedě. Slouží k navrhování. Nelze je vybrat ani měnit a do souboru dílu se neukládají.
3. Měňte díl jako jakýkoli jiný: řežte, přidávejte, vrtejte, zrcadlete. Jeho počátek a osy jsou vlastní osy prvku, takže se díl vrátí tam, kde stál.
4. Zvolte {{ui:Soubor}} › {{ui:Export}} › {{ui:Uložit zpět do BimCraft}}. Stavový řádek říká, kterou revizi jste odeslali.
5. V aplikaci BimCraft se prvek zobrazí jako změněný, dokud ho tam osoba nepřijme.

## Co byste měli vidět

- Díl si v souboru uchovává odkaz. Když ho později otevřete, stavový řádek stále říká, že jde o prvek BIM. Šedá budova se vrátí, dokud prohlížeč drží balíček, se kterým byl odeslán.
- Opětovné uložení zpět odešle revizi 2, 3 a tak dále. BimCraft uchová nejnovější.

## Dobré vědět

- Tvar se vrací jako síť v milimetrech, v jeho vlastních osách. Prvky zůstávají v PartCraft.
- {{ui:Uložit zpět do BimCraft}} nic nedělá u dílu, který nepřišel z BimCraft.
- Díl bez pevného tělesa nemá nic k odeslání.
- Obě aplikace musí být otevřené ve stejném prohlížeči: nic se nenahrává, obě stránky si prvek předávají mezi sebou.
