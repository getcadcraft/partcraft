---
title: Spustenie z USB disku
summary: Čo inžinierske nástroje zapisujú a kam, aby CadCraft Studio mohol bežať z USB kľúča alebo z ľubovoľného priečinka bez inštalátora a bez práv správcu: nastavenia, generátory, pomocné súbory (cache) a súbory súčiastok a to, čo zostáva na kľúči.
keywords: usb, prenosný, bez inštalátora, správca, admin, nastavenia, priečinok data, generátory, kam sa zapisujú súbory, offline, súkromie, prístup k hostiteľskému systému
from: 263efc79
---

Inžinierske nástroje (generátory, inžinierska knižnica, kontroly a dátové súbory) **nepotrebujú práva správcu** a **nepotrebujú inštalátor**. Zapisujú iba to, čo je uvedené tu, a nič iné.

| Čo | Kde sa uchováva |
|---|---|
| Vaše súčiastky spolu s vygenerovanými telesami, dátovými listami a kontrolami | Súbor súčiastky (`.partcraft.json`), kam ho uložíte. |
| Generátory, ktoré ste otvorili zo súborov | V úložisku aplikácie: lokálne úložisko prehliadača na webovej stránke a priečinok `data` vedľa programu v prenosnom Studiu. Najviac 20. |
| Nastavenia (veľkosti voxelov, ktoré ste nastavili, vlákna riešiča, rozloženie) | To isté úložisko aplikácie. |
| Dátové listy, polia, siete | Iba tam, kam ich uložíte: stiahnutie ide tam, kam zvolíte. |

Nástroje **nevykonávajú vlastné sieťové volania**: generátory, ktoré sa dodávajú, sú súbory v priečinku aplikácie, knižnica a kontroly bežia na vašom počítači v pracovnom procese (worker), ktorý nemá prístup k sieti, a inžinierske dáta (vlastnosti vody a vzduchu, materiály) sú vnútri aplikácie. Generátor, ktorý otvoríte zo súboru, sa načíta na vašom počítači a nikam neodchádza.

## Prenosný ZIP pre Windows a Linux

Prenosné Studio pre Windows uchováva nastavenia, pomocné súbory (cache) a doplnky v priečinku `data` vedľa programu. AppImage pre Linux ich uchováva vedľa seba, keď vedľa neho leží súbor s názvom `portable`; bez tohto súboru používa váš domovský priečinok. Prenosná verzia pre Mac neexistuje: systém nedovolí aplikácii, ktorá bola stiahnutá, zapisovať vedľa seba. Poznámky k prenosnej verzii shellu (pomocník `Studio`) uvádzajú, čo program zapisuje.

## Prístup k hostiteľskému systému

Tu sa nič nepýta na prístup k hostiteľskému systému. Tlačiarne, sériové zariadenia a zariadenia USB sú oddelené: pýtajú sa, keď ich úloha potrebuje, raz pre každé zariadenie, a generátory ani kontroly sa ich nedotýkajú.
