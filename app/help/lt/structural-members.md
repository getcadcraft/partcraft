---
title: Rėmai iš plieninių profilių
summary: Padėkite plieninius profilius palei vieno ar kelių eskizų linijas, kad gautumėte suvirintą rėmą: įstrižas arba sandūros kampų jungtis, elementus, pjaunamus pagal sujungimus, galinius dangtelius, sutvirtinimus ir pjovimo sąrašą su ilgiais ir galų kampais.
keywords: konstrukcinis elementas, rėmas, plieninis rėmas, vamzdis, kvadratinis vamzdis, hss, rhs, shs, chs, plataus flanšo, dvitavris, w sija, ipe, hea, heb, kanalas, upn, kampinis profilis, įstrižinis pjūvis, sandūra, išpjovimas, galinis dangtelis, sutvirtinimas, pjovimo sąrašas
from: 59071e5a
---

**Konstrukcinis elementas** uždeda plieninį profilį palei kiekvieną pasirinktų eskizų liniją. Nubraižykite rėmą linijomis (kiekviena linija – vienas elementas), tada pasirinkite profilį: elementai sukuriami, jų kampai apkerpami ir pratęsiami, o pjovimo sąraše nurodoma, kiek ilgio kiekvieną gabalą pjauti ir kokiu kampu.

## Sukurkite rėmą

1. Nubraižykite rėmą linijomis eskize, pavyzdžiui, stačiakampį viršutinėje plokštumoje. Pažymėtos kaip konstrukcinės linijos praleidžiamos.
2. Su pasirinktu eskizu pasirinkite {{ui:Daugiau}} › {{ui:Konstrukcinis elementas}}. Kiekviena eskizo linija gauna elementą.
3. Skydelyje pasirinkite profilio **Šeimą** ir **Dydį**. Šeimos – tai AISC lentelės (W, S, C, L, HSS vamzdžiai, Pipe) ir EN 10365 (IPE, HEA, HEB, UPN).

### Rėmas 3D erdvėje

Kelių eskizų linijos sudaro vieną rėmą: viršutinis stačiakampis, nubraižytas aukščiau esančioje plokštumoje, ir kojos, nubraižytos vertikaliose plokštumose, susitinka 3D erdvėje savo galais. Skydelio skiltyje **Palei linijas** pažymėkite kiekvieną eskizą, kurio linijas seka elementai. Galai, susitinkantys per mikrometrą, sujungiami.

## Nustatykite profilį ant jo linijos

- **Pasukimas (°)** pasuka profilį apie jo liniją. Sija stovi su aukščiu vertikaliai (vertikaliame elemente aukštis nukreiptas į priekį).
- **Ant linijos** pasirenkama, kuris profilio taškas guli ant linijos: centras, kampas arba profilio kontūro kraštinės vidurys. "Bottom middle" (Apatinis vidurys) padeda rėmą ant eskizo plokštumos, o ne per ją.

## Kampai ir jungtys

| Kur susitinka elementai | Kas vyksta |
|---|---|
| Du elementai galas į galą, **Kampai: Įstrižai** | Abu pjaunami plokštumoje tarp jų per pusę, kaip paveikslo rėmas |
| Du elementai galas į galą, **Kampai: Sandūra** | Pirmasis elementas tęsiasi iki tolimojo antrojo paviršiaus; antrasis pjaunamas statmenai prie pirmojo artimojo paviršiaus |
| Elementas baigiasi kito elemento viduryje (T) | Jis pjaunamas taip, kad priglustų prie kito elemento išorės |
| Trys ar daugiau baigiasi viename taške | Pirmasis statmenai tęsiasi pro kitus; kiti pjaunami taip, kad priglustų prie jo |

Pirmasis elementas yra tas, kurio linija pirmoji: linijos išlaiko braižymo tvarką, eskizas po eskizo tokia tvarka, kokia eskizai buvo pažymėti.

## Galiniai dangteliai ir sutvirtinimai

- **Galiniai dangteliai** uždaro kiekvieną laisvą galą plokštele pagal profilio kontūrą, jūsų nustatyto storio, už galo.
- **Sutvirtinimai** deda trikampę plokštelę į kiekvieną kampą, kuriame du elementai susitinka kampu: **Sutvirtinimo dydis** palei kiekvieną elementą nuo kampo, **Sutvirtinimo storis** skersai, centruotas kampo plokštumoje.

## Pjovimo sąrašas

Skydelyje išvardijami visi gabalai, identiški sugrupuoti: profilis, ilgis (ilgasis taškas iki ilgojo taško, kaip pažymėtumėte pjūklui), kaip pjaunamas kiekvienas galas (statmenai, kampu nuo statmens arba pjaunama pagal vietą) ir kokie tai elementai. Galiniai dangteliai ir sutvirtinimai įtraukiami su savo dydžiais. {{ui:Įrašyti pjovimo sąrašą (CSV)}} įrašo jį skaičiuoklei.

Elementas, pjaunamas pagal apvalių kampų vamzdį, šiek tiek įsiremia į to vamzdžio kampo spindulį, todėl jo ilgasis taško ilgis yra keliais milimetrais didesnis už tarpą tarp paviršių.

## Apribojimai

- Elementai seka tik tiesias linijas; lankai ir splainai eskize praleidžiami.
- Jungtys pjaunamos, bet ne suvirinamos: suvirinimo siūlių nebraižoma, o rėmas yra vienas kietasis kūnas.
- Profiliai braižomi pagal lentelės matmenis: W profiliai su šakninio suapvalinimu, S ir kanalai su lygiagrečiais flanšais, vamzdžiai su kampų spinduliais; skylės, galų paruošimas ir suvirinimo tarpai nekuriami automatiškai.
- Konstrukciniai elementai sukuriami tinklo branduoliu. Įjungus tikslų branduolį (tik kūrėjams), jie tai nurodo ir nėra sukuriami.
