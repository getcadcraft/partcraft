---
title: Zaoblenie, skosenie a vyhĺbenie pomocou Zaoblenia, Skosenia a Škrupiny
summary: Vyberte hrany a pridajte zaoblenia s konštantným alebo premenlivým polomerom a rovnaké, dvojvzdialenostné alebo vzdialenostno-uhlové skosenia, vyhĺbte súčiastku príkazom Škrupina výberom plôch na otvorenie, zmeňte, ktoré hrany alebo plochy prvok používa, a opravte obvyklé zlyhania.
keywords: zaoblenie, prelínanie, skosenie, zrazenie, škrupina, vyhĺbenie, hrúbka steny, hrany, plochy, výber hrán, shift klik, otvorená plocha, presné jadro, sieťové jadro, nie je hotové
from: e41c1c12
---

:::note
**V tejto verzii** PartCraft vytvára zaoblenia a skosenia sieťovým jadrom, len na **rovných hranách medzi dvoma rovnými plochami**: hrany škatule a rovné hrany vytiahnutí a vyrezaní, vonkajšie alebo vnútorné rohy (vnútorný roh dostane pridaný materiál). Okrúhle hrany, ako sú okraje otvorov, a polomer, ktorý sa mení pozdĺž hrany, ešte nie sú hotové. Tam, kde sa dve zaoblené hrany stretnú v rohu, sú zaoblenia zrezané na zlom (stretnú sa v ostrom zlome), nie spojené. **Škrupina** funguje tiež, vytvorená sieťovým jadrom: otvára len rovné plochy, škrupiny s rôznymi hrúbkami stien ešte nie sú hotové a na súčiastkach s mnohými okrúhlymi plochami je pomalá. Pozri [Čo ešte nie je hotové](topic:not-built-yet).
:::

{{ui:Fillet}} zaokrúhli hrany, {{ui:Chamfer}} ich skosí a {{ui:Shell}} vyhĺbi súčiastku. Všetky tri pracujú s hranami a plochami telesa a vytvára ich sieťové jadro. Ich zaoblenia sú fazetované ako každá okrúhla plocha (**Krivky** určuje, ako jemne); okrúhle plochy sú valce, ktoré môžete vybrať a odmerať (pozri [Sieťové jadro](topic:solid-kernels)).

## Zaoblenie alebo skosenie hrán

### Najprv vyberte hrany

1. Kliknite na hranu súčiastky. Celá hrana sa zvýrazní a pravý panel zobrazí **Hrana**: jej druh (Rovná, Kružnica alebo oblúk, Krivka), dĺžku a plochy, medzi ktorými leží.
2. Ak chcete pridať ďalšie hrany, {{key:Shift}}+kliknite na ne. Každá sa označí; {{key:Shift}}+kliknite na označenú hranu, aby sa zrušila. Nadpis panela ich spočíta ("4 hrany") a stavový riadok hlási: "4 hrany vybraté. Zaoblenie alebo Skosenie ich upraví; Shift+klik vyberie ďalšie, Esc zruší výber."
3. Vyberte {{ui:Fillet}} alebo {{ui:Chamfer}} na paneli nástrojov, alebo rovnaké tlačidlá v pravom paneli.

Prvok sa pridá so všetkými vybratými hranami: zaoblenie s polomerom 2 mm alebo skosenie 1 mm. Stavový riadok napríklad hlási: "Fillet1 bolo pridané (4 hrany). Zmeňte jeho veľkosť vpravo; Vybrať hrany mení, ktoré."

### Alebo najprv pridajte prvok

1. Bez výberu zvoľte {{ui:Fillet}} alebo {{ui:Chamfer}}.
2. PartCraft prejde do výberu: nadpis pravého panela hovorí "Fillet1: výber", súčiastka sa zobrazí tak, ako bola pred zaoblením (panel to hovorí) a na paneli nástrojov sa zobrazí {{ui:Done}}.
3. Kliknite na každú hranu, aby ste ju pridali; kliknutím znova ju odoberiete. Stavový riadok ich počíta.
4. Vyberte {{ui:Done}} (alebo {{ui:Done picking}} na paneli), alebo stlačte {{key:Esc}} či {{key:Enter}}.

### Nastavenia

| Nastavenie | Zaoblenie | Skosenie |
|---|---|---|
| Veľkosť | **Polomer (mm)**, predvolene 2 | **Vzdialenosť (mm)** od hrany na oboch plochách, predvolene 1 |
| **Hrany** | Koľko | Koľko |

Zoznam pod tým pomenúva každú hranu podľa dvoch plôch, ktoré spája, napríklad "Hrana 1: Extrude1 koncová plocha × Extrude1 bočná". **Odstrániť** jednu odoberie. {{ui:Pick edges}} sa vráti k výberu. Dvojklik na prvok v histórii robí to isté.

Hrany sa pamätajú podľa dvoch plôch, ktoré spájajú, takže zostanú na správnej hrane, keď zmeníte rozmer skôr v histórii.

### Premenlivé zaoblenia a typy skosenia

- **Premenlivý polomer** (zaoblenie): v tejto verzii ešte nie je hotové ("Zaoblenie, ktorého polomer sa mení pozdĺž hrany: ešte nie je hotové (potrebuje presné jadro). Nastavte jeden polomer."). S presným jadrom: zaškrtnite ho a nastavte **Koncový polomer (mm)**. Polomer sa lineárne mení od **Polomeru** na jednom konci každej hrany ku **Koncovému polomeru** na druhom; **Prehodiť konce** to otočí.
- **Typ** (skosenie): **Rovnaká vzdialenosť**, **Dve vzdialenosti** (**Druhá vzdialenosť** na druhej ploche) alebo **Vzdialenosť a uhol** (vzdialenosť na jednej ploche, skos pod **Uhlom (°)** voči nej). **Prehodiť strany** dá prvú vzdialenosť na druhú plochu.

## Vyhĺbenie súčiastky príkazom Škrupina

1. Kliknite na rovnú plochu, ktorá zostane otvorená, napríklad hornú stranu škatule. Alebo {{key:Shift}}+kliknite na viac plôch.
2. Vyberte {{ui:Shell}} na paneli nástrojov, alebo {{ui:Shell, opening this face}} v paneli plochy.

Súčiastka sa stane stenou hrúbky 2 mm s vybratými otvorenými plochami. Nastavenia:

| Nastavenie | Čo robí | Predvolené |
|---|---|---|
| **Stena (mm)** | Hrúbka steny | 2 |
| **Steny rastú von (plochy zostanú vnútri)** | Zaškrtnuté: steny sa pridajú von, takže vnútro si zachová veľkosť súčiastky | Vypnuté: steny idú dovnútra a vonkajšok si zachová veľkosť |
| **Otvorené plochy** | Koľko plôch sa odstráni | |

Dovnútra majú steny presne hrúbku steny: vonkajšie rohy zostanú ostré, vnútorné rohy vyjdú zaoblené (polomer = stena) a diera cez súčiastku dostane okolo seba trubicu steny. Von sa steny pridajú mimo pôvodného povrchu, ktorý sa stane dutinou, a vonkajšie hrany vyjdú zaoblené. Vnútorné plochy sú pomenované podľa plôch, ktoré odsádzajú, takže ich môžete vybrať.

Iba rovné plochy možno otvoriť: ak vyberiete zakrivenú, zobrazí sa: "Škrupina: v tejto verzii otvára iba rovné plochy (vytvorí ju sieťové jadro)." Škrupina je na súčiastkach s mnohými okrúhlymi plochami pomalá (niekoľko sekúnd na tisíc trojuholníkov): počas návrhu použite hrubšie nastavenie **Krivky**.

{{ui:Pick faces}} mení, ktoré plochy sú otvorené, rovnakým spôsobom ako výber hrán. Zoznam ich pomenuje, napríklad "Plocha 1: Extrude1 koncová plocha". Škrupina bez otvorených plôch nie je povolená: "Vyberte plochy, ktoré sa majú odstrániť (otvoriť), a potom použite škrupinu."

## Záleží na poradí

Prvky sa vytvárajú zhora nadol. Zaoblenie pred škrupinou sa vyhĺbi spolu so súčiastkou, takže aj vnútro dostane zaoblené rohy. Zaoblenie za škrupinou zaoblí iba hrany, ktoré vyberiete. Prvky presúvajte tlačidlami {{ui:Move up}} a {{ui:Move down}} (pozri [Zmena súčiastky cez jej históriu](topic:edit-history)).

Polia a zrkadlá nemôžu kopírovať zaoblenie, skosenie ani škrupinu: "Fillet1 mení hrany alebo steny telesa; nedá sa skopírovať. Skopírujte prvky, ktoré tvoria telesá (vytiahnutia, rotácie, diery, importy)." Najprv vytvorte pole dier alebo vyrezaní a potom jedným zaoblením zaoblite hrany všetkých kópií.

## Keď to zlyhá

| Hlásenie | Čo robiť |
|---|---|
| "Zaoblenie 5 mm tu nepasuje (je príliš veľké pre plochu vedľa jednej z hrán alebo sa hrany stretnú v rohu, ktorý jadro nedokáže spojiť)." | Použite menší polomer alebo zaoblite menej hrán naraz (viac prvkov zaoblenia, najmenší posledný) |
| "Hrana, ktorú zaobľuje, zmizla: hrana medzi Extrude1 a Cut2." | Predchádzajúca zmena túto hranu odstránila. Vyberte {{ui:Pick edges}}, odstráňte červenú hranu a vyberte novú |
| "Škrupinu sa nepodarilo vytvoriť s touto hrúbkou (…)." | Stena je hrubšia ako úzka časť modelu alebo ako polomer zaoblenia. Zmenšite stenu alebo zväčšite zaoblenia nad hrúbku steny |
| "Táto plocha nemá názov, ktorý história dokáže sledovať; vyberte inú." | Vyberte plochu vytvorenú prvkom (väčšina plôch) |
| "Zaoblenie: v tejto verzii len rovné hrany medzi dvoma rovnými plochami (vytvorí ich sieťové jadro). Zaoblite alebo zrazte zakrivené hrany v náčrte." (aj Skosenie) | Vybratá hrana je okrúhla, napríklad okraj diery, alebo leží na zakrivenej ploche. Odstráňte ju pomocou {{ui:Pick edges}} a zaoblite alebo skoste ten roh v náčrte |
| "Zaoblenie, ktorého polomer sa mení pozdĺž hrany: ešte nie je hotové (potrebuje presné jadro). Nastavte jeden polomer." | Zrušte začiarknutie **Premenlivý polomer** |
| "Zaoblenie sieťovým jadrom: kde sa zaoblené hrany stretnú, sú zrezané na zlom, nie spojené." (⚠ v histórii) | Upozornenie, nie chyba: súčiastka je vytvorená. Vybrané hrany sa stretajú v rohu a zaoblenia sa tam stretnú v ostrom zlome. Zaoblite menej hrán alebo tento zlom prijmite |
| "Škrupina: v tejto verzii otvára iba rovné plochy (vytvorí ju sieťové jadro)." | Otvorená plocha je zakrivená. Použite {{ui:Pick faces}} a odstráňte ju; otvárajte len rovné plochy |

## Obmedzenia

V tejto verzii zaoblenia a skosenia fungujú len na rovných hranách medzi dvoma rovnými plochami, s jedným polomerom, a zaoblenia stretajúce sa v rohu sú zrezané na zlom. Škrupiny otvárajú len rovné plochy. S presným jadrom sa premenlivé zaoblenie mení lineárne pozdĺž každej hrany (jeden zákon na prvok; žiadny polomer v bodoch pozdĺž nej). Zaoblenia plôch, plné polkruhové zaoblenia a škrupiny s rôznymi hrúbkami stien ešte nie sú hotové.
