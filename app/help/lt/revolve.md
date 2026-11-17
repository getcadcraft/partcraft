---
title: Sukite tekinę detalę
summary: Nubraižykite pusę profilio šalia ašinės linijos, apsukite jį į apvalią detalę, pasirinkite ašį ir kampą, o grioveliams naudokite sukamą išpjovą.
keywords: sukimas, sukta iškyša, sukta išpjova, tekinė detalė, tekinimas, velenas, ašis, ašinė linija, griovelis, kampas, sukimo išpjova
from: 593b6929
---

{{ui:Sukti}} apsuka profilį aplink ašį, kaip detalę, pagamintą tekinimo staklėse: velenai, skriemuliai, flanšai, rankenėlės. **Sukta išpjova** (Elementų grupės meniu {{ui:Daugiau}}) apsuka profilį, kad pašalintų medžiagą grioveliams ir įdubimams.

## Sukite laiptuotą veleną

1. Braižykite ant **Priekio plokštumos**.
2. Paspauskite {{key:N}}, kad gautumėte {{ui:Ašinė linija}}. Pradėkite nuo pradžios taško ir spustelėkite tašką tiesiai dešinėje, pavyzdžiui, 100 mm atstumu. Tai yra ašis. Ji brūkšninė: konstrukcinė geometrija nėra profilio dalis.
3. Paspauskite {{key:L}}, kad gautumėte Liniją. Nubraižykite **pusę** profilio virš ašinės linijos kaip vieną uždarą kontūrą: pradėkite ant ašinės linijos, eikite aukštyn, žingsniuokite ir grįžkite žemyn iki ašinės linijos, tada palei ją iki pradžios. Jos galai turi susilieti: kontūras turi būti uždaras.
4. Pamatuokite spindulius (aukščius virš ašinės linijos) ir ilgius. 10 aukštis virš ašinės linijos duoda 20 skersmenį.
5. Pasirinkite {{ui:Baigti}}.
6. Pasirinkite {{ui:Sukti}}. Atsiranda velenas, pilnas apsisukimas.

Profilis turi likti vienoje ašies pusėje. Jei jis kerta ašį: „The profile crosses the axis. Keep it on one side of the centerline.“ Profilio kraštas gali būti ant ašies.

## Nustatymai

| Nustatymas | Ką daro | Numatytoji reikšmė |
|---|---|---|
| **Operacija** | Iškyša (prideda medžiagos), Išpjova (pašalina medžiagą), Susikirtimas (palieka persidengimą) arba Naujas kūnas | Iškyša {{ui:Sukti}}, Išpjova {{ui:Daugiau}} › {{ui:Sukta išpjova}} |
| **Kampas (°)** | Kiek sukti, nuo šiek tiek virš 0 iki 360 | 360 |
| **Ašis** | Pirmoji ašinė linija arba bet kuri eskizo tiesė ar ašinė linija, išvardyta kaip „Ašinė linija 1 (l1)“ ar „Linija 3 (l3)“ | Pirmoji ašinė linija |

Dalinis kampas sukuria pleištą, sukamą nuo eskizo plokštumos viena kryptimi.

Jei eskize nėra ašinės linijos, o **Ašis** paliekama ties Pirmąja ašine linija: „Nubraižykite eskize ašinę liniją (konstrukcinę liniją), apie kurią sukti.“ Taip pat galite pasirinkti kietąją profilio liniją kaip ašį.

## Išpjaukite griovelį

1. Kai velenas jau sukurtas, atidarykite naują eskizą ant **Priekio plokštumos** (ta pati plokštuma kaip velenio eskizo).
2. Nubraižykite ašinę liniją ta pačia ašimi: pradėkite ją ant pradžios taško ir laikykite horizontaliai, kad gautų H, arba įveskite su **Pridėti pagal koordinates** (pavyzdžiui, nuo `0, 0` iki `100, 0`). Naujas eskizas negali prisitvirtinti prie kito eskizo linijų.
3. Nubraižykite mažą uždarą stačiakampį, kuris persidengia su velenio kraštu, kur eina griovelis.
4. Pasirinkite {{ui:Baigti}}, tada {{ui:Daugiau}} › {{ui:Sukta išpjova}}.

## Sukti paviršiai surinkimuose

Sukimas turi ašį, kurią gali naudoti kiti elementai ir surinkimai:

- **Apskritiminis** kartojimas pagal numatytuosius nustatymus naudoja paskutinio sukimo ašį (žr. [Kartojimai ir veidrodiniai elementai](topic:patterns-mirror));
- surinkime jungtis tarp paviršių, sukurtų sukimais, pradžioje yra **sukamoji** jungtis, o **Centruoti ant** siūlo „Axis of Revolve1“ (žr. [Surinkimo sukūrimas](topic:build-assembly)).

## Tikros kreivės ir plokšti fragmentai

PartCraft sukuria sukimą tinklelio branduoliu (būsenos juostos žymė rodo „Tinklelio branduolys“): apvalios formos yra plokšti fragmentai, pagal numatytuosius nustatymus 64 vienam apsisukimui, o tūriai šiek tiek mažesni nei tikroji vertė (apie 0,16 % esant 64). Rodinys, STL, 3MF ir STEP eksportai sudaryti iš tų fragmentų: nustatykite **Kreivės** (spustelėkite tuščią erdvę, tada dešiniajame skydelyje) į Smulkus (128) arba Labai smulkus (256), kad būtų sklandžiau. Tikri cilindrai, kūgiai ir toroidai reikalauja tikslaus branduolio: šioje versijoje dar nesukurti. Žr. [Tinklelio branduolys](topic:solid-kernels).
