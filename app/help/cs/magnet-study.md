---
title: Magnetická studie skici
summary: Proměňte uzavřené profily skic na plochý magnetický model (železo, magnety, cívky), zobrazte pole a přečtěte sílu a moment na tělese.
keywords: magnet, magnetický, magnetostatický, pole, hustota toku, síla, moment, cívka, jho, železo, křivka B–H, permanentní magnet, pohon, motor, solenoid, maxwell
from: 604efc3b
---

Použijte {{ui:More}} na panelu nástrojů Prvky › {{ui:Magnetická studie skic…}} u dílu, který má skici. Každý uzavřený tvar ve skicách, které zaškrtnete, je jedna oblast plochého modelu; studie spočítá magnetické pole B, sílu a moment na tělese, které zvolíte.

## Postup

1. Nakreslete tělesa jako uzavřené tvary ve skicách: železné jho, magnet, cívku. Tělesa, která se dotýkají, sdílejí hranu, proto je dejte do různých skic; tělesa, která jsou od sebe, nebo jsou jedno v druhém (okno v jhu), mohou být v jedné. Skici držte ve stejné rovině.
2. Otevřete studii a zaškrtněte skici k použití. Každý uzavřený profil dostane očíslovaný řádek. Určete, co je: {{ui:Vzduch}}, {{ui:Železo}} (permeabilita, nebo křivka B–H zadaná jako dvojice B v teslách a H v A/m), {{ui:Permanentní magnet}} (Br v teslách, jeho směr jako úhel od osy x skici a jeho zpětná permeabilita), nebo {{ui:Cívka}} (celkový proud přes jeho profil, počet závitů krát ampéry; znaménko říká, kterým směrem teče).
3. Zaškrtněte {{ui:Síla a moment na toto těleso}} u těles, na která je chcete. Zadejte hloubku dílu kolmo na skicu.
4. Zvolte síť a vzduch kolem modelu, pak {{ui:Spustit}}.

## Co uvidíte

- Hustota toku |B| přes model, od tmavě modré (nízká) po červenou (vysoká), s očíslovanými profily.
- Nejsilnější pole a kde je, počet trojúhelníků a pro každé zaškrtnuté těleso síla podél x a y a moment kolem jeho středu pro zadanou hloubku.
- {{ui:Uložit výsledky (CSV)}} zapíše čísla.

## Dobré vědět

- Je to plochý, ustálený model: vše je na metr hloubky, bez vířivých proudů a bez hystereze a magnet je přímka zpětné linie (nelze jej odmagnetovat).
- Model leží v krabici vzduchu, jejíž okraj je stěna. Porovnejte dvě velikosti vzduchové krabice a sítě Normální a Jemná: síla určená z pole kolem tělesa je jen tak dobrá, jak dobrá je tam síť.
- Železo pouze s permeabilitou se nikdy nenasytí. Když pole překročí 2 T, studie zobrazí ⚠ v seznamu Problémy: dejte železu křivku B–H. Čísla v novém řádku jsou příklady (železo μr 2000, magnet 1.2 T), nikoli katalogový list materiálu.
- Těleso potřebuje kolem sebe prostor, aby přijalo sílu: pokud je jiné těleso příliš blízko, studie to řekne.
- Pomůcka pro kreslení, ne inženýrské schválení.

## Dále

- [Magnetická pole ve 2D (návod)](topic:magnetic-fields-2d)
