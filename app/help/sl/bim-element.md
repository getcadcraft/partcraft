---
title: Oblikovanje elementa BimCraft in shranjevanje nazaj
summary: Del, poslan iz BimCraft, se odpre z zgradbo okoli sebe, siv in samo za branje. Spremenite ga in shranite nazaj, da BimCraft lahko sprejme novo obliko.
keywords: bimcraft, bim, element, pošlji, shrani nazaj, povezava, zgradba, kontekst, sosedi, podpora, nosilec, ifc, sprejmi
from: 0978fe53
---

## Kaj boste naredili

Delate na delu, ki je prišel iz modela BimCraft, na njegovem mestu v zgradbi, in novo obliko pošljete nazaj.

## Koraki

1. V BimCraft izberite element in izberite {{ui:Povezave delov}} › {{ui:Pošlji v PartCraft}}. PartCraft ga odpre kot nov del. V vrstici stanja piše „element BIM“.
2. Elementi okoli njega (v 3 m) so narisani sivo. Tu so zato, da načrtujete glede nanje. Ne morete jih izbrati ali spremeniti, in niso shranjeni v datoteki dela.
3. Spremenite del kot vsakega drugega: prirežite, dodajte, izvrtajte, zrcalite. Izhodišče in osi pripadajo elementu, zato se del vrne tja, kjer je stal.
4. Izberite {{ui:Datoteka}} › {{ui:Izvoz}} › {{ui:Shrani nazaj v BimCraft}}. V vrstici stanja piše, katero revizijo ste poslali.
5. V BimCraft je element označen kot spremenjen, dokler ga tamkajšnji uporabnik ne sprejme.

## Kaj bi morali videti

- Del v datoteki ohrani svojo povezavo. Če ga odprete pozneje, vrstica stanja še vedno pove, da gre za element BIM. Siva zgradba se vrne, dokler brskalnik še hrani paket, s katerim je bil poslan.
- Ponovno shranjevanje pošlje revizijo 2, 3 in tako naprej. BimCraft ohrani najnovejšo.

## Dobro je vedeti

- Oblika se vrne kot mreža v milimetrih, v lastnih oseh elementa. Značilke ostanejo v PartCraft.
- {{ui:Shrani nazaj v BimCraft}} ne naredi ničesar za del, ki ni prišel iz BimCraft.
- Del, ki še nima telesa, nima ničesar za pošiljanje.
- Obe aplikaciji morata biti odprti v istem brskalniku: ničesar se ne naloži, obe strani si element prenašata med seboj.
