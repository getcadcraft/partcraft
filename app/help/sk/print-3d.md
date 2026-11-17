---
title: Pripravte diel na 3D tlač
summary: Skontrolujte, či je diel alebo zostava uzavretá, zmestí sa na vašu tlačiareň a stojí na podložke; potom ju stiahnite ako STL alebo 3MF pre váš slicer.
keywords: 3D tlač, tlač 3D, tlačiareň, tlačiť, slicer, stl, 3mf, vodotesný, uzavretý, manifold, podložka, rozmer podložky, tlačová plocha, previs, podpery, základňa, milimetre, export, závity, vôľa
from: 90d81dff
---

Slicer potrebuje uzavretý tvar: žiadne diery, každá plocha smeruje von a nič neprechádza cez seba. Diely, ktoré PartCraft vytvorí, sú uzavreté už pri konštrukcii, takže kontrola väčšinou ukazuje veľkosť, to, či sa diel zmestí na podložku vašej tlačiarne, či stojí na rovnej ploche a koľko z neho presahuje.

## Kontrola a stiahnutie

1. Voliteľne, raz: nastavte podložku tlačiarne v {{ui:Settings}} › PartCraft › **3D tlačiareň**: šírku, hĺbku a výšku v milimetroch. Ak ich necháte prázdne, táto kontrola sa preskočí.
2. Zvoľte {{ui:Export}}, potom {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dialóg hlási "Pripravené na tlač" alebo "Nie je pripravené na tlač", vypíše, čo je zle, a uvedie veľkosť na podložke (X × Y × Z, v milimetroch), objem a počet trojuholníkov.

3. Kliknite na {{ui:Download 3MF}} alebo {{ui:Download STL}}. Súbor je rovnaký ako {{ui:Export}} › {{ui:3MF, for 3D printing}} alebo {{ui:STL, for 3D printing}}.

V zostave kontrola a súbory berú celú zostavu, každú kópiu tam, kde je umiestnená.

Diel sa kontroluje tak, ako ho export zapisuje: to, čo smeruje hore v PartCraft (kolmo na Hornú rovinu), smeruje hore na podložke. Diel nakreslený na Hornej rovine leží plocho.

## Čo môže kontrola uviesť

**Nie je pripravené na tlač** (slicer ho môže odmietnuť alebo vytlačiť zle): diery (hrany s plochou iba na jednej strane), hrany spoločné pre tri alebo viac plôch, plochy smerujúce opačne, teleso naruby alebo teleso prechádzajúce cez seba. Diel vytvorený v PartCraft by ich nikdy nemal mať; ak sa objavia, pozrite [Riešenie problémov](topic:troubleshooting).

**Upozornenia** (vytlačí sa, ale najprv sa pozrite):

- **Väčšie ako podložka tlačiarne**, ani keď je otočený o 90° na nej.
- **Na spodku nič neleží plocho**: otočte diel v slicer tak, aby plocha ležala na podložke, inak bude potrebovať podpery alebo raft.
- **Vybočuje viac ako 45° od kolmice**: tieto plochy potrebujú podporu v tomto stave. Iný smer môže potrebovať menej.
- **Oddelené telesá sa prekrývajú** alebo **stretávajú plochou**: slicer ich zvyčajne zlúči. {{ui:Combine}} v Prvky › {{ui:More}} ich spojí do jedného telesa. Pozri [Telesá](topic:bodies).
- **Menej ako 1 mm na šírku**: skontrolujte rozmery dielu.

## Závity, ktoré sa vytlačia

Modelovaný závit sa vytlačí ako skutočný závit. Dajte mu nejakú **Vôľu**, aby sa vytlačená skrutka zmestila do vytlačenej matice: pozri [Závity](topic:threads).

## Hladšie okrúhle plochy

STL a 3MF sú zložené z trojuholníkov. Pre hladšie okrúhle plochy kliknite na prázdny priestor, aby nič nebolo vybrané, a v pravom paneli nastavte **Krivky** na **Jemné (128 na otáčku)** alebo **Veľmi jemné (256 na otáčku)** pred exportom. Viac trojuholníkov znamená väčšie súbory.

## Väčšie, menšie alebo na kusy

- **Export › Škálovať pre tlač (STL alebo 3MF)…** uloží diel zmenený podľa osí bez zmeny jeho tvaru: **prídavok na zmrštenie** v percentách (veľkosť × (1 + s), alebo presná veľkosť ÷ (1 − s)) pre odliatok, alebo jednoduché koeficienty, vzhľadom na stred, najnižší roh, stred spodku alebo počiatok.
- **Export › Rozdeliť na tlač (zip s kúskami)…** rozreže diel, ktorý je príliš veľký pre vašu tlačiareň, na kusy, každý zmestiteľný na podložku, ktorú zadáte. Kusy sú spojené kolíkmi, klinmi, lastovičími chvostmi, kolíkovými otvormi alebo magnetickými vreckami (s vôľou, ktorú nastavíte). Každý kus a spoj je očíslovaný a kusy sa uložia ako STL alebo 3MF v zip súbore s prehľadom zostavy. Samotný diel sa nezmení.

## Nekontroluje sa

Hrúbka steny, detaily menšie, ako dokáže vaša dýza nakresliť, a spôsob, akým slicer umiestni podpery. Tieto zobrazí váš slicer.
