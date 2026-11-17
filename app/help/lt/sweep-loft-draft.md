---
title: Perstūmimas išilgai kelio, sujungimas (loft) ir nuolydis
summary: Perstumkite uždarą profilį išilgai eskizo kreivių ar modelio briaunų kelio, sujunkite per pjūvius skirtingose plokštumose ir pridėkite nuolydį paviršiams; su parinktimis, tiksliais rezultatais ir pranešimais.
keywords: perstūmimas, perstumtas iškilimas, perstumtas pjūvis, vamzdis, kelias, sujungimas, loft, sujungtas iškilimas, sumaišyti pjūviai, tiesinis, nuolydis, nuolydžio kampas, nuolydžio paviršiai, neutrali plokštuma, traukimo kryptis, formavimas
from: 9d637981
---

:::note
**Šioje versijoje** perstūmimas ir sujungimas dar neįgyvendinti: jiems reikia tikslaus geometrijos branduolio, kurio šiai PartCraft versijai nėra. [Kas dar neįgyvendinta](topic:not-built-yet) nurodo, ką daryti vietoje; skyriuose Perstūmimas išilgai kelio ir Sujungimas (loft) aprašyta, kaip jie veikia su tiksliu branduoliu. **Nuolydis veikia** plokštiems paviršiams: jį sukuria tinklo branduolys, o rezultatas toks pat kaip su tiksliu branduoliu.
:::

Visi trys yra {{ui:Daugiau}} meniu Elementų grupėje (žr. [Tinklo branduolys](topic:solid-kernels)). Kiekvienas gali prijungti medžiagą, ją išpjauti, palikti tik sutapimą (**Sankirta**) arba sukurti **Naują kūną** (perstūmimui ir sujungimui: **Operacija** skydelyje).

## Perstūmimas išilgai kelio

Perstūmimas perstumia uždarą profilį išilgai kelio: vamzdžiai, rankenos, vielos spyruoklės, bėgiai.

1. Nubrėžkite **kelią** viename eskize: tiesias linijas ir lankus, sujungtus galas į galą (arba naudokite modelio briaunas, žr. žemiau).
2. Nubrėžkite **profilį** kitame eskize, kurio plokštuma eina per vieną kelio galą, pavyzdžiui, apskritimą viršutinėje plokštumoje kelio pradžioje, kuris nubrėžtas priekinėje plokštumoje.
3. Pasirinkite profilio eskizą ir spustelėkite {{ui:Daugiau}}, tada {{ui:Perstūmimas išilgai kelio}}. Naujausias kitas eskizas tampa keliu.

Skydelyje:

| Parametras | Ką daro |
|---|---|
| **Kelias** | Pažymėkite eskizus, sudarančius kelią (keli eskizai sujungiami galas į galą į vieną 3D kelią); **Pasirinkti modelio briaunas** prideda detalės briaunas |
| **Orientacija** | Sekti kelią (numatytoji), Frenet, Fiksuota (pjūviai lieka lygiagretūs profiliui), Išlaikyti kryptį, Palei vedančiąją kreivę |
| **Galinis mastelis** | Profilis tiesiškai didėja arba mažėja iki šio dydžio gale (1 = pastovus) |

Aštrūs kelio kampai nusklembiami. Apskritimas, kurio spindulys 5, perstumtas išilgai 100 mm tiesės, yra cilindras, kurio tūris tiksliai 2500π mm³; išilgai ketvirtinio lanko, kurio spindulys 50, – ketvirtinis toras, kurio tūris 625π² mm³.

## Sujungimas (loft)

Sujungimas tolygiai pereina per du ar daugiau pjūvių, esančių skirtingose plokštumose.

1. Nubrėžkite kiekvieną pjūvį atskirame eskize (po vieną uždarą kontūrą), ant bazinių plokštumų, pagalbinių plokštumų (žr. [Pagalbinės plokštumos, ašys ir taškai](topic:reference-geometry)) arba paviršių.
2. Pasirinkite {{ui:Daugiau}}, tada {{ui:Sujungimas (loft)}}. Kiekvienas nenaudotas eskizas su vienu kontūru tampa pjūviu, pagal istorijos tvarką.

Skydelyje pjūviai išvardijami eilės tvarka (**Aukštyn** pertvarko, **Pašalinti** pašalina vieną); **Pridėti eskizą** prideda kitą, **Pasirinkti paviršių** prideda plokščią detalės paviršių. **Tiesinis** sukuria plokščius paviršius tarp pjūvių vietoj lygaus perėjimo. Tarp dviejų kvadratų abu rezultatai yra tas pats nupjautinis kūgis (40 mm kvadratas į 20 mm kvadratą per 30 mm: tiksliai 28000 mm³).

Pjūviai su skirtingu kraštinių skaičiumi (kvadratas ir trikampis) sulyginami OpenCascade, kuris gali iškreipti šonines paviršius; funkcija įspėja. Nubrėžkite pjūvius su vienodu kraštinių skaičiumi, pradedant nuo atitinkamų kampų, kad rezultatas būtų švariausias.

### Vedančiosios kreivės

Vedančiosios kreivės – tai kreivės, kurias sujungimo šonai turi sekti nuo pirmo pjūvio iki paskutinio, pavyzdžiui, išsipūtimą, susiaurėjimą ar išplatėjimą, kurį nubrėžiate patys.

1. Nubrėžkite dvi ar daugiau vedančiųjų kreivių: atviras kreives (tieses, lankus, splainus), einančias nuo pirmo pjūvio iki paskutinio ir kertančias kiekvieną pjūvį vieną kartą. Viename eskize gali būti kelios vedančiosios kreivės: kiekviena atskira grandinė yra atskira vedančioji kreivė. Nubrėžkite kreivę taip, kad ji tikrai susitiktų su kiekvienu pjūviu: pritraukite jos galus prie pjūvių taškų.
2. Sujungimo skydelyje, skyriuje **Vedančiosios kreivės**, pažymėkite eskizus, kuriuose jos yra, arba spustelėkite {{ui:Pasirinkti modelio briaunas kaip vedančiąsias}} ir spustelėkite detalės briaunas ({{key:Esc}} baigia).

Su vedančiosiomis kreivėmis sujungimas yra Gordono paviršius per pjūvius ir kreives (žr. [Paviršiai per kreivių tinklą](topic:gordon-surfaces)), uždengtas plokščiai abiejuose galuose į kietąjį kūną. Skydelyje nurodoma, kiek tiksliai jis jas seka. Tuomet kiekvienas pjūvis turi būti eskizas (taškas ar paviršius negali priimti vedančiosios kreivės), o **Tiesinis** netaikomas. Kreivė, kuri nepasiekia pjūvio daugiau nei 0.01 mm, atmetama su tarpu.

Patikrinta: du apskritimai (20 mm ir 10 mm skersmens per 40 mm) su keturiomis tiesiomis vedančiosiomis duoda nupjautinio kūgio tūrį iki 0.000002 %; lankai, išsipučiantys 5 mm, duoda statinę, kuri seka kiekvieną vedančiąją iki 0.00001 mm.

## Nuolydis

Nuolydis pasvirina paviršius, kad detalė išeitų iš formos.

1. Pasirinkite {{ui:Daugiau}}, tada {{ui:Nuolydis}} (arba pirmiausia {{key:Shift}}+spustelėkite paviršius). Jei nieko nepasirinkta, esate pasirinkimo režime: spustelėkite kiekvieną paviršių, kurį norite pasvirti, tada {{ui:Atlikta}}.
2. Nustatykite **Kampas (°)**, **Neutrali plokštuma** (kur paviršiai išlaiko savo dydį) ir **Traukimo kryptis** (pagal numatymą neutraliosios plokštumos normalė).

Teigiamas kampas pasvirina paviršių į vidų pagal traukimą ir pašalina medžiagą; neigiamas – prideda. Neutrali plokštuma iš pradžių yra Viršutinė plokštuma. Šioje versijoje nuolydį galima taikyti tik plokštiems paviršiams: cilindras, kūgis ar laisvosios formos paviršius praneša „Nuolydis: šioje versijoje tik plokšti paviršiai (tinklo branduolys jį sukuria).“ Keturios 100 × 100 × 50 bloko šonės, pasvirtos 5° apie apačią, tampa nupjautiniu kūgiu, kurio tūris tiksliai h/3·(a² + b² + ab), kai b = a − 2h·tan 5°.

## Pranešimai

| Pranešimas | Ką daryti |
|---|---|
| „Profilio plokštuma turi eiti per vieną kelio galą …“ | Perkelkite profilio eskizą į kelio pradžią (ar galą) |
| „Kelyje yra tarpas: jo kreivės nesisujungia galas į galą …“ | Sujunkite kelio kreives; atskiruose eskizuose jų galai turi tiksliai susilieti |
| „Sujungimo pjūviui reikia lygiai vieno uždaro kontūro“ | Padalinkite eskizą arba pašalinkite papildomą kontūrą |
| „… negali būti pasvirtas apie šią neutralią plokštumą …“ | Paviršius lygiagretus neutraliai plokštumai arba jos nekerta |
| „Nuolydis: šioje versijoje tik plokšti paviršiai (tinklo branduolys jį sukuria).“ | Pasirinktas paviršius išlenktas. Pašalinkite jį; pasvirkite tik plokščius paviršius |

:::note
Dar neįgyvendinta: sukamieji perstūmimai, plonasienių ir paviršinių perstūmimai, vedančiųjų kreivių galinis liestiškumas, nuolydis cilindrams, kūgiams ir laisvosios formos paviršiams.
:::
