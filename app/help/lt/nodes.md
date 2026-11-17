---
title: Mazgai: modelio kūrimas jungiant
summary: Sujunkite skaičius į taškus, taškus į kreives, kreives į paviršius. Pakeitus skaičių, viskas po jo persikuria. Kiekvienas mazgas taip pat yra CraftScript eilutė, o grafas įrašomas faile.
keywords: mazgai, mazgų redaktorius, vizualus programavimas, parametrinis, grafas, laidai, jungtys, laisva forma, nurbs, ekstruzija, sukimas, apskritimas, kreivė, paviršius, seka, intervalas, atsitiktinis, sąrašas, scenarijus, craftscript, grasshopper
from: 3a4625de
---

**Mazgų** redaktorius kuria geometriją jungdamas dėžutes. Kiekviena dėžutė (mazgas) atlieka vieną mažą darbą: sukuria skaičių, tašką, apskritimą, perėjimą. Rezultatą vieno mazgo jungiate su kito įėjimu, ir modelis seka paskui, kai pakeičiate skaičių pradžioje.

Atidarykite iš darbo sričių sąrašo: {{ui:Mazgai}}. Atsidaro redaktoriaus langas. Detalė, jau turinti grafą, jį parodo atidarius darbo sritį. Tai langas virš 3D vaizdo: vilkite jo antraštės juostą, kad perkeltumėte, vilkite kampą, kad pakeistumėte dydį.

## Jungimas

1. Pasirinkite mazgą iš kairiojo sąrašo (įrašykite paieškos lauke, kad susiaurintumėte; <kbd>Enter</kbd> prideda pirmą atitikmenį). Jis atsiranda drobės viduryje.
2. Vilkite nuo apvalaus **išėjimo** taško dešinėje vieno mazgo iki apvalaus **įėjimo** taško kairėje kito. Taškas tampa žaliu, kai tinka, ir raudonu, kai ne; užveskite pelę, kad pamatytumėte priežastį.
3. Įėjimas, prie kurio nieko nejungta, rodo langelį įvestai reikšmei. Įveskite skaičių ir paspauskite <kbd>Tab</kbd>: rezultatas persikuria.
4. Mažas apskritimas mazgo antraštės juostoje yra jo **akis**. Mazgas su įjungta akimi piešiamas 3D vaizde: kreivės — linijomis, paviršiai — šešėliuoti, taškai — taškais.

Vilkite mazgą už antraštės juostos. Vilkite foną, kad slinktumėte, sukite ratuką, kad keistumėte mastelį. <kbd>Delete</kbd> pašalina pažymėtą mazgą. {{ui:Sutvarkyti}} išdėsto mazgus stulpeliais, {{ui:Pritaikyti}} visus sutalpina į vaizdą, {{ui:Anuliuoti}} ir {{ui:Perdaryti}} žingsniuoja per jūsų pakeitimus.

## Tipai ir vienetai

Jungtys turi tipą: skaičius, taip/ne, taškas, vektorius, kreivė, paviršius, tinklas, kietasis kūnas arba „geometry“ bet kuriam iš jų. Taškas gali būti įvedamas į vektoriaus įėjimą ir atgal. Skaičiai turi vienetą: **ilgis** — milimetrais, o **kampas** — laipsniais. Ilgio negalima įvesti į kampą, o ilgis, padaugintas iš ilgio (plotas), atmetamas, todėl klaidinga jungtis sustabdoma jau tada, kai ją padarote.

Kvadratinis taškas yra **sąrašas**. Kai sąrašas pasiekia vienos reikšmės įėjimą, mazgas paleidžiamas kartą kiekvienam elementui, ir jo rezultatas tampa sąrašu. Trumpesnis sąrašas kartoja savo paskutinį elementą. Pavyzdžiui, **Seka** aukščių, įvesta į **Perkelti**, sukuria kopijų krūvą.

## Kietieji kūnai ir Būlio operacijos kaip mazgai

Grupė **Kietieji kūnai** kuria uždarus kūnus iš tų pačių tikslių paviršių, kaip Paviršių skydelis: **Dėžės kietasis kūnas**, **Cilindro kietasis kūnas** ir **Sferos kietasis kūnas** (dydžiai mm), **Sąjunga**, **Atimti** ir **Sankirta** (antrasis kietasis kūnas imamas iš pirmojo; tolerancija — kiek kietojo kūno variklio trikampiai gali nukrypti nuo tikslių paviršių), **Suapvalinimas tarp paviršių** (paviršiai nurodomi pagal jų numerį kietajame kūne, 1 — pirmasis; spindulys ir, jei didesnis nei 0, spindulys gale), **Kietojo kūno tūris** (mm³) ir **Kietasis kūnas į tinklą** (kad pamatytumėte arba įrašytumėte jį). Kietasis kūnas turi savo jungties tipą: taško ar skaičiaus negalima įjungti į kietojo kūno įėjimą, ir taškas lieka raudonas. Būlio ir suapvalinimo mazgai naudoja programos kietojo kūno variklį, kuris įkeliamas pirmą kartą atidarius redaktorių.

## Klaidos

Mazgas, kuris negali atlikti savo darbo, pasako priežastį po savo pavadinimu raudonai („Spindulys turi būti didesnis už nulį.“), o po jo esantys mazgai laukia. Ta pati žinutė yra Problema Problemų skydelyje, todėl ją galite rasti ten.

## Kiekvienas mazgas yra scenarijaus eilutė

Paspauskite {{ui:Scenarijus}}, kad pamatytumėte grafą kaip CraftScript: po vieną eilutę kiekvienam mazgui, pavyzdžiui `n3 = nd_circle(n2, n1, [0 0 1]);`. Redaguokite tekstą ir paspauskite {{ui:Sukurti grafą pagal šį scenarijų}}, kad jis vėl taptų grafu. Tos pačios `nd_` funkcijos veikia ir CraftScript scenarijuje PartCraft, todėl grafą ten galima paleisti, ciklinti ar tikrinti. Atsitiktiniai skaičiai visada priima **sėklą**, todėl tas pats grafas visuose kompiuteriuose duoda tą patį rezultatą.

## Įrašoma kartu su failu

Grafas įrašomas detalės faile (ne istorijoje, todėl {{ui:Anuliuoti}} redaktoriuje veikia atskirai). Mazgai sukuria kreives, paviršius ir tinklus šalia kietojo kūno: jie nekeičia detalės elementų.
