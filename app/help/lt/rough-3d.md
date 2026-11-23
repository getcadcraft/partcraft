---
title: 3D šiurkštinimas ir likučio apdirbimas
summary: Išvalykite ruošinį aplink visą modelį lygis po lygio plokščiu, pusapvaliu arba rutuliniu galiniu frezu, paliekant medžiagą apdailai, tada leiskite mažesniam įrankiui pjauti tik ten, kur pirmasis paliko medžiagos. Ką garantuoja takai ir ko – ne.
keywords: 3d šiurkštinimas, šiurkštinimas, likučio apdirbimas, likęs ruošinys, paliekamas ruošinys, gylio žingsnis, lygiai, z lygis, vandens linija, nuožulnus įvedimas, įsmeigimas, įpjova, mažesnis įrankis
from: 29ddc266
---

Dvi Gamybos operacijos, esančios po {{ui:Daugiau}} įrankių juostoje, išvalo ruošinį iš **viso modelio** 3D, įrankiui laikant vertikalią padėtį (arba išilgai operacijos [įrankio krypties](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Joms nereikia pasirinkimų.

## 3D šiurkštinimas

{{ui:3D šiurkštinimas}} dirba nuo ruošinio viršaus po vieną **gylio žingsnį**. Kiekviename lygyje išvalo viską, ką įrankis gali pasiekti nesiliesdamas prie modelio: tiesias eiles, nutolusias per **žingsnį tarp eilių** (dalis įrankio skersmens), tada kartą aplink pasiekiamos srities kraštą, kad sienos būtų sekamos, o ne paliekamos kaip eilė laiptelių plane.

- **Paliekamas ruošinys**: kiek įrankis visur lieka nuo modelio apdailos perėjimui (numatytoji 0.5 mm).
- **Lygis prie kiekvieno plokščio paviršiaus**: papildomas lygis kiekvieno plokščio modelio paviršiaus aukštyje (plius paliekamas ruošinys), kad dugnas nebūtų paliktas beveik visu gylio žingsniu aukštyje.
- **Ignoruoti ruošinį plonesnį nei**: medžiaga, plonesnė nei tai, aukštyn ar į šonus, nevertas perėjimo (0.05 mm šiurkštinimui, 0.5 mm likučio apdirbimui, kad plaukelis palei sieną neverstų mažesnio įrankio aplink kiekvieną sieną).
- **Apačia**: nieko nepjaunama žemiau šio aukščio. Tuščia reiškia modelio apačią.

Pradeda nuo ruošinio **tokio, kokį jį paliko ankstesnės operacijos**: po paviršiaus perėjimo jis nepjauna oro ten, kur paviršiaus frezas jau praėjo.

Leidimasis žemyn: kur įrankis sutiktų ruošinį, jis nuožulniai įeina palei savo perėjimą **nuožulnumo kampu**, pirmyn ir atgal ne daugiau kaip dviejų įrankio skersmenų. Per trumpas perėjimas įsmeigiamas tiesiai žemyn **įsmeigimo padavimu**; operacija tuos atvejus suskaičiuoja ir įspėja, nes įrankis, kuris nepjauna savo centre, neturėtų taip daryti.

## Likučio apdirbimas

{{ui:Likutis}} yra ta pati strategija **mažesniam įrankiui po didesnio**. Ji skaito ruošinio imitavimą ir pjauna tik ten, kur medžiaga dar stovi: vidiniuose kampuose, į kuriuos didesnis įrankis negalėjo įsisukti, įpjovose, į kurias jis netilpo, pakopose, kurias jis paliko ant nuolydžių. Visur kitur ji nieko nedaro, todėl jos takas yra nedidelė dalis to, ką tas pats įrankis paimtų ant švieže ruošinio.

Padėkite ją po šiurkštinimo operacijos ir pasirinkite mažesnį įrankį. Jai reikia prieš ją esančių operacijų ruošinio imitavimo, kurį darbo sritis visada paleidžia.

## Kaip geri takai

- **Jokių įpjovų.** Įrankio pozicijos skaičiuojamos tinklelyje, su frezu šiek tiek didesniu nei jis yra (1.4 tinklelio langelio į šonus ir paliekamas ruošinys), kad bet kur kur jis stovi, jis būtų aiškus nuo modelio. Testai kiekvieną pjovimo tašką patikrina su tiksliu įrankiu ant tikslaus tinklelio, o ruošinio imitavimas – po kiekvieno paleidimo: jokių įpjovų, jokių greitųjų judesių per ruošinį.
- **Tos kainos**: sienos palieka šiek tiek daugiau nei paliekamas ruošinys, iki sumos, parodytos operacijoje kaip „Papildomas ruošinys ant sienų“ (apie 0.5 mm Ø6 frezui, mažiau mažesniam). Apdailos perėjimas ją paima.

Ko šie takai nėra:

- Eilės yra tiesios linijos, ne figūros kontūrai ar pastovaus įsitraukimo kreivės. Jos daro daugiau pakėlimų ir oro judesių, nei kontūrinė ar adaptyvi strategija, o pirma eilė kiekviename lygyje pjauna pilną įrankio plotį. Plokščiadugniams kišenėms geresnis šiurkštinimas yra [Adaptyvus](topic:manufacture).
- Įrankio kotas ir laikiklis nepatikrinami. Įspėjimas nurodo, kai pjūvis gilesnis nei rievės ilgis.
- Įpjovos (undercut) nematomos: modelis yra tai, ką įrankis sutinka leisdamasis išilgai savo ašies. Norėdami šiurkštinti šoną, duokite antrai operacijai [pasvirusią įrankio kryptį](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Likučio apdirbimas žino ruošinį tik tiek, kiek gerai jį atvaizduoja tinklelis imitavime (0.1–2 mm langeliai, pagal detalės dydį).
- Didelėje detalėje programa ilga (daugiau nei 100 000 judesių 200 mm flanšui su Ø6 frezu) ir apskaičiuojama apie minutę, o kiekvienas pakeitimas darbo srityje apskaičiuoja visą programą iš naujo. Šiurkštinimui naudokite didžiausią tinkantį įrankį.
- Patikrinkite išvestį savo staklių imitatoriuje prieš pjaudami.
