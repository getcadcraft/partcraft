---
title: Detaļu saraksts, izjauktie skati un detaļu pārvietošana
summary: Piešķiriet mezgla detaļām numuru, aprakstu un materiālu, lasiet un lejupielādējiet materiālu sarakstu, veidojiet izjauktus skatus ar soļiem vai automātiski, pārvietojiet nesavienotas detaļas ar roku, iestatiet savienojumu ierobežojumus un eksportējiet visu mezglu kā STL, 3MF vai materiālu sarakstu.
keywords: bom, materiālu saraksts, detaļu saraksts, detaļas numurs, materiāls, blīvums, csv, izjauktais skats, izjaukt, savilkt, trajektorijas līnijas, pārvietot detaļu, vilkt, rokturis, translācija, pagriezt, savienojuma ierobežojumi, mezgla eksports, mezgla solis, mezgla rasējums, baloni
from: ebc9f6f3
---

Šie rīki atrodas mezgla labajā panelī (skatiet [Izveidojiet mezglu](topic:build-assembly)).

## Detaļas rekvizīti

Atlasiet detaļu kreisajā sarakstā. Zem **Detaļas rekvizīti** iestatiet:

- **Detaļas numurs** (līdz 40 rakstzīmēm) un **Apraksts** (līdz 200).
- **Materiāls**: parasts materiāls ar tā blīvumu vai **Pielāgots blīvums…**, lai ierakstītu to g/cm³. Panelī tad rādās detaļas masa.

Rekvizīti pieder detaļai, tāpēc katra tās kopija tos koplieto. Tie tiek saglabāti mezgla failā.

## Materiālu saraksts

Kad nekas nav atlasīts ({{key:Esc}}), panelī rādās **Materiālu saraksts**: viena rinda katrai detaļai ar tās pozīcijas numuru, daudzumu (cik kopiju), detaļas numuru, nosaukumu, materiālu un masu. Pozīciju numuri seko secībai, kādā detaļas pirmo reizi parādās sarakstā. Masas izmanto katras detaļas tilpumu (no šķautņotās cietvielas, ko veido tīkla kodols; apaļām detaļām nedaudz zemāks) un tās materiālu. Detaļai bez materiāla nav masas, un tad nav arī kopsummas.

{{ui:Lejupielādēt CSV}} saglabā sarakstu kā CSV failu (tāpat **Eksportēt › Materiālu saraksts (CSV)**). To var atvērt jebkurā izklājlapā. Teksts, kas sākas ar = vai +, saņem vadošu apostrofu, lai izklājlapa to neizpildītu kā formulu.

## Izjauktie skati

Izjauktais skats atdala detaļas attēliem. Tas nekad nemaina savienojumus vai to, kur detaļas patiesībā atrodas: saglabāšana, sadursmju pārbaudes un eksporti izmanto īstās pozīcijas.

1. Kad nekas nav atlasīts, zem **Izjauktie skati** izvēlieties {{ui:Jauns skats}}.
2. Zem **Pievienot soli** atzīmējiet detaļas, ko solis pārvieto, izvēlieties **Virziens** (+X … −Z, noklikšķinātās virsmas normāle vai **Vilkt bultiņu skatā**) un **Attālums**, tad {{ui:Pievienot soli}}. Ar **Vilkt** velciet bultiņu un atlaidiet: solis pieņem virzienu un attālumu, ko vilkāt.
3. Pievienojiet vēl soļus. Tie tiek atskaņoti viens pēc otra.
4. Velciet slīdni starp **Samontēts** un **Izjaukts**, lai animētu skatu. Punktētas trajektorijas līnijas ved no katras detaļas atpūtas pozīcijas līdz tās pašreizējai vietai.

{{ui:Auto (radiāli)}} pārvieto katru detaļu, izņemot nostiprināto, prom no mezgla vidus. {{ui:Auto (pa savienojumiem)}} pārvieto katru savienoto detaļu (kopā ar visu, kas zem tās savienots) ārā pa tās savienojuma virsmas normāli. Var saglabāt vairākus nosauktus skatus; izvēlieties vienu sadaļā **Skats** vai **Samontēts**, lai atgrieztu detaļas. Skati tiek saglabāti mezgla failā.

## Detaļas pārvietošana ar roku

Ar roku var pārvietot tikai detaļu, kurai nav savienojuma ar nostiprināto detaļu (nostiprinātā detaļa ir fiksēta; savienojumi novieto pārējās). Atlasiet to un zem **Pārvietot ar roku**:

- Ierakstiet **ΔX, ΔY, ΔZ** un izvēlieties {{ui:Pārvietot}}, vai izvēlieties asi un **Leņķis** un {{ui:Pagriezt}} (ap detaļas vidu).
- {{ui:Vilkt, lai pārvietotu}} parāda bultiņas uz detaļas: velciet bultiņu, lai pārvietotos pa šo asi, vai kvadrātu, lai pārvietotos plaknē. {{ui:Vilkt, lai pagrieztu}} parāda gredzenus, lai to pagrieztu. Katra vilkšana ir viens atsaukšanas solis. {{key:Esc}} paslēpj bultiņas.

## Savienojumu ierobežojumi

Atlasiet savienojumu, kas kustas, un zem **Ierobežojumi** atzīmējiet **Turēt … starp ierobežojumiem** jebkurai tā vērtībai, tad iestatiet tās **Minimums** un **Maksimums**. Katra vērtība tiek turēta savos ierobežojumos, tās slīdnis aptver tikai šo diapazonu, un {{ui:Pārbaudīt kustību sadursmēm}} pārbauda tikai starp tiem. Cilindrisks savienojums var ierobežot savu leņķi, nobīdi vai abus. Mainot savienojuma tipu, tiek noņemti ierobežojumi vērtībām, kādu jaunajam tipam nav.

## Eksportēt visu mezglu

Mezgla izvēlnē **Eksportēt** tiek ierakstīts viss mezgls ar katru detaļu tur, kur tā novietota:

- **STEP AP242 / AP214** un **Rasējums (PDF)** šajā versijā vēl nav izveidoti: tiem vajadzīgs precīzs kodols, tāpēc tie ir pelēki. Eksportējiet katras detaļas STEP (precīzu cietvielu) no pašas detaļas.
- **STL**: viens tīkls visām detaļām. **3MF**: katra detaļa vienreiz, novietota katrai kopijai.
- **Materiālu saraksts (CSV)**.

## Ierobežojumi

- Mezgla rasējums un mezgla STEP šajā versijā vēl nav izveidoti (tiem vajadzīgs precīzs kodols). Izjauktie skati ir paredzēti attēliem ekrānā.
