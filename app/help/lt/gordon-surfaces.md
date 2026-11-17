---
title: Paviršiai per kreivių tinklą (Gordono paviršius)
summary: Sukurkite vieną lygų paviršių per profilių ir vadovų kreivių tinklą, nubraižytą eskizuose arba paimtą iš modelio briaunų, uždarykite jį į kietą kūną, kai profiliai uždari, ir sužinokite, kas tiksliai, kas pritaikyta bei kokie pranešimai pasirodo, kai tinklas netinka.
keywords: liestinė, G1, liestinumas, veidrodinė plokštuma, Gordono paviršius, kreivių tinklas, ribinis paviršius, tinklo paviršius, profiliai, vadovai, vadovaujančios kreivės, lofto su vadovais, vadovaujantys bėgiai, apvalkalas, transfinitinis, Coons, B-spline paviršius, laisvos formos paviršius
from: ada3cb8b
---

:::note
**Dar neįgyvendinta šioje versijoje.** Gordono paviršiui reikia tikslaus geometrijos branduolio, kurio šioje PartCraft versijoje nėra: ji kiekvieną detalę kuria su tinklo branduoliu. [Kas dar neįgyvendinta](topic:not-built-yet) nurodo, ką daryti vietoj to. Likusioje šio puslapio dalyje aprašoma, kaip tai veikia su tiksliu branduoliu.
:::

**Gordono paviršius** – vienas paviršius, einantis per kiekvieną tinklo kreivę: **profiliai**, einantys viena kryptimi, ir **vadovai**, einantys kita kryptimi, susikertantys kaip tinklo gijos. Taip iš kelių tiesiogiai valdomų pjūvio kreivių formuojamas korpusas, sparnas ar rankena. Jam reikia **tikslaus branduolio** (žr. [Tinklo branduolys](topic:solid-kernels)).

## Nubraižykite tinklą

1. Nubraižykite **profilius**: dvi ar daugiau kreivių, einančių greta, pavyzdžiui, pjūviai lygiagrečiose plokštumose. Tinka linijos, lankai, apskritimai ir splainai, o grandinė kreivių, sujungtų galas į galą, laikoma viena kreive.
2. Nubraižykite **vadovus**: dvi ar daugiau kreivių, einančių per profilius. Kiekvienas vadovas turi kirsti kiekvieną profilį vieną kartą, o kiekvienas profilis – kiekvieną vadovą vieną kartą.
3. Pasirūpinkite, kad kreivės tikrai susijungtų. Nubraižykite vadovo eskizą taip, kad jo kreivė eitų per profilių taškus (prisitraukite prie projektuotų taškų arba įveskite koordinates). Tinklas priima tarpus iki **Tolerancijos** (iš pradžių 0.01 mm).

Viename eskize gali būti kelios kreivės: kiekviena atskira grandinė jame yra atskira kreivė. Taigi, pavyzdžiui, visus vadovus galite nubraižyti viename eskize viršutinėje plokštumoje.

## Sukurkite paviršių

1. Elementų grupėje pasirinkite {{ui:Daugiau}}, tuomet {{ui:Gordono paviršius}}.
2. PartCraft paima eskizus, kurių niekas dar nenaudoja: tie, kurie yra plokštumose, lygiagrečiose pirmajai, tampa **profiliais**, kiti – **vadovais**. Patikrinkite dešinėje esantį sąrašą ir kiekvieną eskizą nustatykite į **Profiliai**, **Vadovai** arba **Nenaudojama**.
3. Norėdami naudoti detalės briaunas, spustelėkite **Pasirinkti briaunas kaip profilius** (arba **kaip vadovus**), spustelėkite briaunas vaizde, tuomet spauskite Esc.

Rezultatas – **paviršiaus kūnas**. {{ui:Storinti}} paverčia jį kietuoju kūnu, {{ui:Siūti}} susiuva su kitais paviršiais, o {{ui:Apkirpti paviršių}} jį nupjauna.

### Uždarykite į kietą kūną

Kai profiliai yra uždarios kreivės (apskritimai, uždari splainai, uždaros grandinės), o pirmas ir paskutinis profilis kiekvienas guli plokštumoje, pažymėkite **Uždaryti į kietą kūną**. Galai uždengiami plokščiais paviršiais, o uždara forma sujungiama, išpjaunama, kertama arba tampa nauju kūnu kaip ir bet kuris kitas elementas. Taip padaromas lofto paviršius, sekantis vadovų kreives. Tas pats veikia ir su uždarais vadovais.

## Liestinė plokštumai palei briauną

Gordono paviršius eina per savo kreives, bet savaime neatitinka to, ką sutinka, nuolydžio. Norėdami, kad jis išeitų iš briaunos **liestinis** plokštumai (G1), pavyzdžiui, veidrodinei plokštumai, kad atspindėta kopija susijungtų be lūžio, arba plokščiam paviršiui, iš kurio jis auga:

1. Pasirinkite Gordono elementą. Skiltyje **Liestinis prie** pasirinkite plokštumą sąraše {{ui:Pridėti plokštumą…}} (Priekinė, Viršutinė, Dešinioji arba atskaitos plokštuma) arba vaizde pasirinkite plokščią paviršių ir spauskite {{ui:Pridėti pasirinktą plokščią paviršių}}.
2. PartCraft suranda tinklo ribinę kreivę, esančią toje plokštumoje, ir paviršius iš jos išeina liestinis plokštumai.

Jei plokštumoje yra dvi ribinės kreivės (grindys po abiem galais), pridėkite ją du kartus: kiekviena kopija paima kitą kreivę. Iki keturių plokštumų, po vieną briaunai.

Ataskaitoje nurodoma, palei kurią kreivę kiekviena plokštuma padarė liestinį ir kokiu didžiausiu kampu paviršius prieš tai sutiko tą plokštumą. Vadovai, kurie jau išeina iš tos kreivės liestiniai plokštumai, sekami tiksliai. Vadovai, kurie nuo jos kyla aukštyn, lenkiami siaurame juostoje prie briaunos, o ataskaitos skaičius „seka kiekvieną kreivę per“ nurodo, kiek: nubraižykite vadovus, išeinančius iš briaunos plokščiai, kad gautumėte tikslų atitikimą.

## Kas tiksliai, o kas pritaikyta

Skydelyje nurodoma, kuris iš šių taikomas ir kiek paviršius nukrypsta nuo jūsų kreivių.

- **Tiksliai**: kai visos kreivės yra polinominės (tiesės, splainai ir jų grandinės), o vadovai kerta visus profilius tais pačiais parametrais, paviršius yra tiksliai tų kreivių Gordono paviršius. Izokreivių tinklas, iškirptas iš bikubinio paviršiaus, grąžina tą patį paviršių, o keturios tiesios linijos duoda plokščią ar susuktą (bilinijinį) lopą.
- **Pritaikyta**: lankai, apskritimai ir detalės briaunos nėra polinominiai, o kreivės, kertančios skirtingais parametrais, turi būti perskaičiuotos, kad susikirtimai sutaptų. Tos kreivės pritaikomos kubinėmis B-splainais su nuokrypiu ne didesniu kaip dešimties milijonųjų tinklo dydžio (apie 0.00001 mm 100 mm detalei). Cilindro lopas, sudarytas iš lankų ir tiesių, lieka per 0.00001 mm nuo tikro cilindro.

Tarp kreivių paviršius yra tai, ką duoda metodas: profiliai, suliejami skersai, plius vadovai, suliejami skersai, minus jų susikirtimo taškų mišinys. Jis lygus visur, išskyrus vietas, kur kreivė turi aštrų kampą. Kur du Gordono paviršiai dalijasi ribine kreive, jie susiglaudžia briauna su briauna (G0), o ne liestiniai.

## Kai tinklas netinka

| Pranešimas | Ką daryti |
|---|---|
| „… nesusitinka: jie yra 0.4 mm atstumu“ | Padarykite, kad tas profilis ir vadovas susikirstų, arba padidinkite Toleranciją |
| „… susitinka … 2 kartus“ | Vadovas gali kirsti kiekvieną profilį tik vieną kartą: padalykite kilpinę kreivę arba naudokite mažiau profilių |
| „… kita tvarka“ arba „lankstosi pats per save“ | Du vadovai kerta vienas kitą (arba du profiliai). Šeimos turi eiti greta |
| „bent du profiliai ir du vadovai“ | Pridėkite kreivių arba daugiau eskizų nustatykite į Profiliai ar Vadovai |
| „sumaišytos atviros ir uždaros kreivės“ | Visus profilius padarykite atvirus arba visus uždarus (lygiai taip pat vadovams) |
| „Galas … nėra plokščias, todėl negali būti uždengtas“ | Nubraižykite pirmą ir paskutinį uždarą profilį kiekvieną vienoje plokštumoje arba palikite Uždaryti į kietą kūną išjungtą |

## Apribojimai

- Vienas B-spline paviršius vienam tinklui: nėra G1 ar G2 liestinumo su gretimais paviršiais.
- Uždaro tinklo siūlė prie pirmo vadovo sujungta briauna su briauna, bet ne liestiniai.
- Pats lofto elementas neturi vadovaujančių bėgių; vietoj jo naudokite Gordono paviršių, uždarytą į kietą kūną.
- Labai vingiuotoms kreivėms arba susikirtimams, kurie vienoje kreivėje išdėstyti labai netolygiai, palyginti su kita, gali prireikti per daug taškų pritaikymui; tuomet elementas tai pasako.
