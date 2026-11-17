---
title: Meranie vzdialeností, uhlov a hmotnosti
summary: Kliknite na dve veci v zobrazení pre minimálnu vzdialenosť, uhol a ΔX ΔY ΔZ; prečítajte dĺžku hrany, priemer diery, plochu plochy alebo súradnice bodu; získajte objem, hmotnosť, ťažisko a zotrvačnosť súčiastky alebo zostavy.
keywords: meranie, vzdialenosť, minimálna vzdialenosť, uhol, dĺžka, polomer, priemer, plocha, súradnice, delta, kontrola, hmotnostné vlastnosti, hmotnosť, ťažisko, zotrvačnosť, moment zotrvačnosti, hustota, materiál
from: 20bda0b7
---

**Merať** funguje na modeli vo všetkých pracovných priestoroch (Návrh, Tvar, Simulácia, Generatívny, Výroba) a v zostave. Je v skupine **Zobrazenie** v ponuke {{ui:Pohľady}}, alebo stlačte {{key:M}}. Karta sa otvorí nad ľavým horným rohom zobrazenia.

## Meranie jednej veci

Kliknite na vrchol, hranu alebo plochu. Karta zobrazí:

- **Bod** (vrchol, stred hrany alebo stred kružnice): jeho X, Y, Z.
- **Hranu**: priamu, kružnicu alebo krivku a jej dĺžku; pre kružnicu aj polomer, priemer a stred.
- **Plochu**: rovnú, valcovú, kužeľovú a podobne a jej plochu; normálu rovnej plochy; polomer a priemer valca (veľkosť diery). Plochy sa počítajú z fasiet, ktoré tvorí jadro sietí.
- **Celé teleso**: podržte {{key:Shift}} a kliknite na súčiastku. Dostanete jej objem, plochu, hmotnosť a zotrvačnosť (pozri nižšie).

Ukazovateľ sa prichytáva k vrcholom, stredom hrán a stredom kružníc do 10 pixelov; malá modrá bodka ukáže prichytenie pred kliknutím. Ak chcete vybrať stred diery, ukážte na stred diery; ak jej okraj (kružnicu), ukážte na okraj.

## Meranie medzi dvoma vecami

Kliknite na druhú položku. Karta pridá:

- **Minimálnu vzdialenosť** a dva najbližšie body, nakreslené v zobrazení s čiarou medzi nimi.
- **ΔX, ΔY, ΔZ** od prvého najbližšieho bodu k druhému.
- **Uhol** medzi dvoma rovnými plochami (medzi ich normálami, 0–180°), medzi dvoma priamymi hranami alebo osami (0–90°), alebo medzi hranou a plochou.
- **Medzeru medzi rovinami** pre dve rovnobežné rovné plochy, **Stred na stred** pre dve kružnice alebo diery, **Os na os** pre dve rovnobežné diery alebo valce.

Tretie kliknutie začne nový pár. {{key:Esc}} zruší výbery; ďalší {{key:Esc}} (alebo {{ui:Zavrieť}}) zavrie Merať. {{ui:Kopírovať}} dá výsledky do schránky ako text oddelený tabulátorom, pripravený na vloženie do tabuľky.

### Aká je presnosť

PartCraft postaví súčiastku jadrom sietí, takže vzdialenosti sa počítajú na fasetách siete a karta uvádza **približne: podľa fasiet**. To platí pre rovné plochy a medzi vrcholmi; pri zakrivených je to mierne mimo. Jemnejšie nastavenie **Krivky** ich priblíži. Presné meranie na skutočných plochách potrebuje presné jadro: v tejto verzii ešte nie je.

## Hmotnostné vlastnosti

Zvoľte {{ui:Hmotnostné vlastnosti}} na karte alebo v ponuke {{ui:Pohľady}}. Pri súčiastke vyberte **Materiál** na karte (oceľ, hliník, plasty a ďalšie s ich obvyklými hustotami). V zostave každá súčiastka používa materiál nastavený vo svojich vlastnostiach (vyberte súčiastku, potom **Materiál**) a výsledok platí pre všetky súčiastky spolu.

Karta zobrazuje hmotnosť, objem, plochu, ťažisko, tenzor zotrvačnosti (Ixx, Iyy, Izz a súčiny Ixy, Iyz, Ixz, v kg·mm², okolo ťažiska pozdĺž svetových osí) a hlavné momenty. Bez materiálu zobrazí to isté na jednotku hustoty (mm⁵) a žiadnu hmotnosť.

Čísla sú presné pre teleso z trojuholníkovej siete, ktoré jadro sietí postaví (zakrivené plochy ako fasety), takže okrúhla súčiastka vyjde o niečo nízko, a karta to uvádza. Hustoty materiálov sú typické hodnoty z príručiek; skutočná zliatina alebo trieda sa môže líšiť o niekoľko percent.

## Limity

- Prichytávanie môže nájsť bod skrytý za inou geometriou; skontrolujte, že karta hovorí to, čo ste mysleli.
- Merať sa zatvorí, keď otvoríte náčrt alebo list výkresu, alebo prepnete pracovný priestor.
