---
title: Referenčné roviny, osi a body
summary: Vytvárajte roviny odsadené od plochy, v uhle, cez tri body, v strede, dotyčnice k valcu, kolmo na hranu alebo cez hranu a bod; osi; body v stredoch hrán, priesečníkoch a rohoch rovín; náčrt na nich a ich použitie ako osi rotácie, smerov vzoru a rovín zrkadlenia.
keywords: referencia, medzi objektmi, stred, priesečník, rovina cez hranu a bod, referenčná rovina, pracovná rovina, konštrukčná rovina, referenčná rovina odsadenia, rovina v uhle, stredová rovina, dotyčná rovina, referenčná os, konštrukčná os, referenčný bod, pracovný bod, náčrt na rovine
from: e7eb6fc1
---

Referenčná geometria je pomocná konštrukcia, na ktorej stavate prvky: **rovina**, na ktorú kreslíte náčrt tam, kde nie je žiadna plocha; **os**, okolo ktorej rotujete alebo vzorujete; **bod**, na ktorom zastavíte vytiahnutie. Nemá vlastný materiál. Roviny sa v zobrazení ukazujú ako bledé štvorce, osi ako prerušované čiary, body ako malé krížiky. Všetky tri sa zaradia do histórie a pri zmene rozmeru vyššie v histórii sledujú, z čoho vznikli.

Nachádzajú sa v ponuke {{ui:Viac}} skupiny Prvky: {{ui:Rovina}}, {{ui:Os}}, {{ui:Bod}}.

## Vytvorenie roviny

1. Kliknite na rovnú plochu alebo na základnú rovinu v histórii, aby ste z nej vychádzali (nepovinné).
2. Zvoľte {{ui:Viac}}, potom {{ui:Rovina}}. Začína ako rovina odsadenia 20 % veľkosti súčiastky od toho, čo ste vybrali (alebo od hornej roviny).
3. V pravom paneli zvoľte **Typ** a jeho odkazy:

| Typ | Odkazy | Čísla |
|---|---|---|
| Odsadenie od roviny alebo plochy | **Z roviny** | **Vzdialenosť (mm)**, záporná pre opačnú stranu |
| V uhle, cez hranu alebo os | **Z roviny**, **Otočiť okolo** (svetová os, prvok osi alebo vybraná priama hrana) | **Uhol (°)** |
| Cez tri body | **Bod 1**, **Bod 2**, **Bod 3** | — |
| Stredová rovina medzi dvoma | **Prvá rovina**, **Druhá rovina** (rovnobežné: v polovici; pretínajúce sa: rovina, ktorá rozpoľuje uhol) | — |
| Dotyčnica k valcu | **Valec** (valcová plocha), **Blízky bod** (ktorá strana) | — |
| Kolmo na hranu v bode | **Hrana**, **V bode** (rovina prechádza bodom hrany najbližším k nemu a tiež cez bod) | — |
| Cez hranu a bod | **Priama hrana** (alebo os), **Cez bod** | — |
| Kolmo na hranu v jej strede | **Hrana** (v polovici jej dĺžky, kolmo na ňu), alebo bez hrany **Bod 1** a **Bod 2** (rovina v polovici medzi nimi) | — |

Každý odkaz má tlačidlo **Vybrať**: zvoľte ho a potom kliknite v zobrazení. Odkaz na rovinu prijme základnú rovinu, referenčnú rovinu alebo rovnú plochu; odkaz na bod prijme koniec hrany (kliknite blízko tohto konca), bod prvku alebo miesto na ploche; odkaz na hranu prijme hranu. {{key:Esc}} zruší výber. **Prevrátiť normálu** prevráti rovinu (teda smer, ktorým smeruje náčrt na nej).

V tejto verzii odpovedá odkaz, ktorý potrebuje hranu alebo valcovú plochu (Dotyčnica k valcu a odkazy Hrana), hlásením "ešte nie je hotové": namiesto toho použite body alebo os.

## Náčrt na rovine

Vyberte rovinu (v histórii alebo kliknutím na jej štvorec v zobrazení) a zvoľte {{ui:Náčrt}}, alebo **Náčrt na nej** v jej paneli. Náčrt nasleduje rovinu: keď zmeníte vzdialenosť roviny, náčrt aj všetky prvky na ňom sa posunú tiež.

## Osi a body

- {{ui:Os}}: cez dva body, os valca alebo kužeľa, tam, kde sa stretnú dve roviny, pozdĺž priamej hrany (alebo osi kruhovej hrany), alebo kolmo na plochu cez bod.
- {{ui:Bod}}: v súradniciach, vo vrchole alebo bode náčrtu, v strede kruhovej hrany, plus body "medzi objektmi":

| Typ bodu | Odkazy |
|---|---|
| Stred hrany (alebo medzi dvoma bodmi) | **Hrana** (v polovici jej dĺžky, aj pre oblúky a krivky), alebo bez hrany **Bod 1** a **Bod 2** |
| Kde hrana alebo os pretína plochu alebo rovinu | **Hrana** (priama alebo zakrivená) alebo os, a **Pretína rovinu** (rovina alebo rovná plocha), alebo **Alebo plocha** (rovná plocha alebo valec). Kružnica pretína rovinu dvakrát a priamka prechádza valcom dvakrát: **Druhý priesečník** berie druhý |
| Kde sa stretnú tri roviny | **Prvá**, **Druhá** a **Tretia rovina** (roviny alebo rovné plochy) |

Každý z nich zlyhá s jednoduchou správou, keď sa jeho odkazy nehodia: priamka rovnobežná s rovinou, priamka, ktorá minie valec, hrana, ktorá nedosahuje rovinu, tri roviny, ktoré sa nestretnú v jednom bode, alebo bod na priamke, ktorá by mala rovinu určiť.

Použitie v ďalších prvkoch:

| Kde | Ako |
|---|---|
| Rotačné teleso | **Os**: vyberte prvok osi zo zoznamu (musí ležať v rovine náčrtu) |
| Kruhový vzor | **Os**: prvok osi |
| Lineárny vzor | **Smer**: prvok osi alebo rovina (jej normála) |
| Zrkadlenie | **Rovina zrkadlenia**: referenčná rovina |
| Vytiahnutie | **Koniec**: Po plochu alebo rovinu, Po vrchol (prvok bodu). V tejto verzii ešte nie je hotové (potrebuje presné jadro) |
| Sklon | **Neutrálna rovina** |

## Keď odkaz zanikne

Rovina vytvorená z plochy, ktorá už neexistuje, zlyhá so správou, ktorá ju pomenuje, napríklad "Plocha, na ktorej leží, už nie je v Extrude1." Nikdy sa nepresunie na inú plochu. Náčrty a prvky na nej sú označené ako "nezostavené", kým nevyberiete nový odkaz; zvyšok súčiastky zostane taký, aký bol.

:::note
Táto verzia zostavuje každú súčiastku sieťovým jadrom, ktoré vytvára roviny, osi a body zo základných rovín, rovných plôch vytvorených vytiahnutím alebo rotáciou, bodov náčrtu, súradníc a ďalších referenčných prvkov. Všetko, čo potrebuje hranu, koniec hrany alebo zakrivenú plochu, potrebuje presné jadro: v tejto verzii ešte nie je hotové ("Používa plochu alebo hranu telesa, ktorú dokáže nájsť iba presné jadro: ešte nie je hotové v tejto verzii.").
:::
