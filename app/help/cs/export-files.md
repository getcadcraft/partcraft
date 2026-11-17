---
title: Export pro tisk, STEP a DXF
summary: Exportujte díl jako STL nebo 3MF pro 3D tisk, jako přesné těleso STEP pro jiné CAD a CAM programy a skicu nebo rovnou plochu jako DXF pro laserové a vodní řezání.
keywords: export, uložit jako, ifc, bim, sady vlastností, stl, 3mf, 3d tisk, slicer, step, stp, přesný step, b-rep, ap242, ap214, cam, obrobna, frézování, dxf, laser, vodní paprsek, cnc, rozvinutí plochy, profil, síť, fasetovaný
from: e1de71d5
---

Exporty jsou kopie v jiných formátech. Soubor `.partcraft.json` si ponechte také: je to jediný soubor, který může PartCraft znovu otevřít a upravit.

Všechny exporty pracují s dílem na obrazovce, v milimetrech. V sestavě exportují STL, 3MF, STEP i Výkres (PDF) celou sestavu: viz [Seznam dílů, rozložené pohledy a pohyblivé díly](topic:assembly-bom-explode). Pokud zatím není žádné těleso: "Zatím není žádné těleso k exportu."

## Pro 3D tisk: STL nebo 3MF

1. Volitelně: u hladkých kulatých ploch klikněte do prázdného prostoru, aby nic nebylo vybráno, a v pravém panelu nastavte **Křivky** na **Jemné (128 na otáčku)** nebo **Velmi jemné (256 na otáčku)**. STL a 3MF jsou vždy tvořeny trojúhelníky.
2. Vyberte {{ui:Export}}, pak {{ui:STL, pro 3D tisk}} nebo {{ui:3MF, pro 3D tisk}}.
3. Soubor se stáhne. Stavový řádek hlásí například: "Exportováno: Part1.stl (binární, mm, Z nahoru, 1536 trojúhelníků)."

Oba formáty jsou **Z nahoru**, jak tiskárny a slicery očekávají. Vlastní svět PartCraftu má Y nahoru, takže export díl otočí: co směřuje nahoru v PartCraftu (kolmo k rovině Top), směřuje nahoru i ve sliceru, a díl načrtnutý na rovině Top leží na podložce plocha. Konečnou orientaci případně nastavte ve sliceru.

3MF je novější, menší formát, který slicery čtou včetně jednotek. Pokud program 3MF nepřijímá, použijte STL.

Chcete-li nejdřív ověřit, že je díl uzavřený, vejde se na podložku tiskárny a stojí na rovné ploše, použijte {{ui:Export}} › {{ui:Kontrola pro 3D tisk (STL nebo 3MF)…}}: viz [Příprava dílu na 3D tisk](topic:print-3d).

## Pro jiné CAD programy: STEP

Vyberte {{ui:Export}}, pak {{ui:STEP AP242 (přesné těleso)}}. Zapíše díl jako jedno přesné těleso v milimetrech, otočené do osy Z nahoru. Kulaté plochy se zapíší jako skutečné válce, kužely, koule a tori, s pravými kružnicemi jako hranami, aby druhý program mohl díru rozpoznat jako díru. Těleso otevřené ze souboru STEP si zachová rovné plochy, válce, kužely, koule a tori z tohoto souboru, takže půjdou ven také přesně. Plochy bez takového povrchu (bok splajnu, modelovaný závit, těleso z meshe STL, OBJ nebo 3MF, splajn souboru STEP, tažené a rotované plochy) zůstanou rovnými fasetami ve stejném tělese a stavový řádek uvede, kolik jich je. Stavový řádek hlásí například: "Exportováno: Flange.step (AP242, přesné těleso, mm, Z nahoru): 14 ploch na skutečných površích (10 válcových, 1 kuželová, 0 kulových, 0 toroidních), 0 přizpůsobených křivek hran." Soubor obsahuje pouze těleso: žádnou historii, žádné skici, žádný výkres. Pokud druhý program čte jen AP214, vyberte {{ui:STEP AP214 (přesné těleso)}}: stejné těleso ve starším schématu.

Co je přesné a co ne:

- Rovné plochy, válce (díry, výstupky, zaoblení na přímých hranách), kužely (zahloubení, úkosy), koule a tori jsou přesné, stejně jako jejich přímé, kruhové a eliptické hrany. Nastavení **Křivky** je nemění.
- Tam, kde se protínají dvě kulaté plochy (díra vyvrtaná napříč hřídelem), je hrana hladká křivka přizpůsobená oběma plochám s odchylkou do 0.00001 mm; "přizpůsobených křivek hran" je počítá.
- Uzavřená dutina uvnitř dílu se zapíše jako prázdnota v tělese. Několik samostatných těles se zapíše jako několik těles.
- Sestava zatím jako přesný STEP zapsaná není: exportujte každý díl zvlášť.

Ověřeno čtením souborů zpět v OpenCascade, který hlásí platná tělesa s objemy spočtenými ručně. Zatím nebylo otevřeno v každém CAD nebo CAM programu; pokud některý soubor odmítne, {{ui:STEP (fasetovaný, síťové jádro)}} zapíše stejný tvar jako rovné plochy (ve vlastních osách PartCraftu, Y nahoru). Dejte nám prosím vědět přes {{ui:Nápověda}} › {{ui:Nahlásit problém}}.

Pro obrábění zapíše pracovní prostor Manufacture přesné těleso také v pracovních souřadnicích upnutí: viz [Tvorba drah nástroje a G-kódu](topic:manufacture#exact-step-for-the-shop).

## Pro BIM programy: IFC se všemi vlastnostmi

Vyberte {{ui:Export}}, pak {{ui:IFC 4 (se všemi vlastnostmi)}}. Zapíše díl jako prvek IFC 4 pro stavební a provozní modely, jeho tvar jako trojúhelníky (Z nahoru, milimetry) a to, co PartCraft o dílu ví, jako sady vlastností:

| Sada vlastností | Obsahuje |
|---|---|
| **PartCraft_Part** | Název, materiál a jeho hustota, aktivní konfigurace, počet těles; v sestavě také číslo dílu a popis |
| **PartCraft_Parameters** | Každý parametr dílu s jeho hodnotou; výraz vzorce a poznámka jsou v popisu vlastnosti |
| **PartCraft_TitleBlock** | Pole razítka výkresu, která jste vyplnili (název, číslo výkresu, revize, firma, kreslil, zkontroloval a schválil, datum, povrchová úprava, obecná tolerance), a formát listu |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Objem, plocha povrchu, hmotnost (s materiálem) a celkové rozměry |

Materiál je připojen jako materiál IFC a číslo výkresu je značkou prvku. V sestavě je každý díl zapsán jednou jako typ s vlastnostmi a každá kopie je umístěna tam, kam ji sestava dá, se svými hodnotami v **PartCraft_Instance**: název, položkové číslo v kusovníku a to, zda jde o pevně uchycený díl.

## Pro profily pro laser, vodní paprsek nebo CNC: DXF

Dva druhy DXF, oba ve verzi R12, kterou otevře každý CAD i CAM program:

### Skica

1. Vyberte skicu v historii (nebo ji mějte otevřenou).
2. Vyberte {{ui:Export}}, pak {{ui:DXF skici nebo rovné plochy}}. (Pravý panel skici má také {{ui:Exportovat jako DXF}}.)

Dostanete `<part> - <sketch>.dxf` ve vlastních souřadnicích skici: úsečky, pravé oblouky a kružnice na vrstvě **PROFILE**, konstrukční geometrie na **CONSTRUCTION**, volné body na **POINTS**.

### Rovná plocha tělesa

1. Klikněte na rovnou plochu v pohledu (například na horní stranu plechu s dírami).
2. V pravém panelu vyberte {{ui:Exportovat plochu jako DXF}}, nebo {{ui:Export}}, pak {{ui:DXF skici nebo rovné plochy}}.

Dostanete `<part> - face.dxf`: obrys plochy a každou díru v ní. Kulatá díra (celá kružnice tam, kde válec protíná plochu: vyvrtaná díra, nebo díra z otevřeného souboru STEP) se zapíše jako pravá kružnice se středem a poloměrem díry. Každý jiný obrys je uzavřená mnohočára a její kulaté hrany (rohy zaoblení, drážky, oblouky) jsou jeho fasety, takže pokud je fréza bude přesně sledovat, nejdřív nastavte **Křivky** na Jemné. Stavový řádek hlásí, kolik je obrysů, kolik z nich jsou pravé kružnice a jaká je plocha.

Pokud není vybrána ani skica, ani rovná plocha: "Otevřete nebo vyberte skicu, nebo vyberte rovnou plochu, abyste mohli exportovat DXF."

## Výkres

Výkres PDF má vlastní postup: [Tvorba listu výkresu](topic:drawing-pdf).

## Nepodporované formáty

glTF, OBJ, IGES a Parasolid se v této verzi neexportují. DWG zapisuje pouze variantní balíček, jako list výkresu: viz [Tvorba balíčku variant z konfigurací](topic:variant-pack). Viz [Formáty souborů](topic:file-formats).
