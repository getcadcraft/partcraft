---
title: Shtrirja, ndërlidhja dhe Draft
summary: Shtrini një profil të mbyllur përgjatë një shtegu me kurba skice ose brinjë modeli, ndërlidhni nëpër seksione në plane të ndryshme, dhe shtoni draft faqeve; me opsionet, rezultatet e sakta dhe mesazhet.
keywords: shtrirje, shtrirje me bosht, prerje me shtrirje, tub, shteg, ndërlidhje, bosht me ndërlidhje, përzierje seksionesh, me vija drejta, draft, kënd draft, faqe konike, plan neutral, drejtim tërheqjeje, kallëp
from: 9d637981
---

:::note
**Në këtë version** shtrirja dhe ndërlidhja nuk janë ndërtuar ende: ato kërkojnë një kernel gjeometrik të saktë, që ky version i PartCraft nuk e ka. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bëni në vend të tyre; seksionet Shtrirja dhe Ndërlidhja i përshkruajnë ashtu si funksionojnë me një kernel të saktë. **Draft funksionon** në faqet e sheshta: kerneli i rrjetës e ndërton, me të njëjtin rezultat që jep një kernel i saktë.
:::

Të tre janë në menynë {{ui:Më shumë}} të grupit Features (shih [Kerneli i rrjetës](topic:solid-kernels)). Secili mund të bashkojë material, ta presë, të mbajë vetëm pjesën e përbashkët (**Kryqëzim**) ose të bëjë një **Trup i ri** (shtrirja dhe ndërlidhja: **Veprimi** në panel).

## Shtrirja

Shtrirja zhvendos një profil të mbyllur përgjatë një shtegu: tubacione, doreza, sprova teli, shina.

1. Vizatoni **shtegun** në një skicë: vija dhe harqe të lidhura skaj më skaj (ose përdorni brinjë modeli, më poshtë).
2. Vizatoni **profilin** në një skicë tjetër, plani i së cilës kalon nëpër njërin skaj të shtegut, për shembull një rreth në planin e sipërm në fillim të një shtegu të vizatuar në planin e përparmë.
3. Zgjidhni skicën e profilit dhe zgjidhni {{ui:Më shumë}}, pastaj {{ui:Shtrirja}}. Skica tjetër më e fundit bëhet shtegu.

Në panel:

| Cilësimi | Çfarë bën |
|---|---|
| **Shtegu** | Shenjoni skicat që përbëjnë shtegun (disa skica lidhen skaj më skaj në një shteg 3D të vetëm); **Përzgjidh brinjët** shton brinjë të pjesës |
| **Orientimi** | Ndjek shtegun (parazgjedhje), Frenet, Fiks (seksionet mbeten paralele me profilin), Ruaj një drejtim, Përgjatë një kurbe udhëzuese |
| **Shkalla në fund** | Profili rritet ose zvogëlohet në mënyrë lineare deri në këtë madhësi në fund (1 = konstante) |

Këndet e mprehta në shteg priten me prerje në përgjysmë. Një rreth me rreze 5 i shtrirë përgjatë një vije 100 mm është një cilindër me vëllim saktësisht 2500π mm³; përgjatë një harku të katërtës së rrethit me rreze 50, një torus katërtësor me 625π² mm³.

## Ndërlidhja

Ndërlidhja bashkon dy ose më shumë seksione në plane të ndryshme.

1. Vizatoni çdo seksion në skicën e vet (një lak i mbyllur), në plane bazë, plane referimi (shih [Plane referimi, boshtet dhe pikat](topic:reference-geometry)) ose faqe.
2. Zgjidhni {{ui:Më shumë}}, pastaj {{ui:Ndërlidhja}}. Çdo skicë me një lak të vetëm që nuk është përdorur bëhet seksion, sipas radhës së historikut.

Paneli i liston seksionet sipas radhës (**Lart** i rirendit, **Hiq** heq një); **Shto një skicë** shton një tjetër, **Zgjidh një faqe** shton një faqe të sheshtë të pjesës. **Me vija drejta** bën faqe të sheshta ndërmjet seksioneve në vend të një përzierjeje të lëmuar. Ndërmjet dy katrorësh, të dy janë i njëjti trung piramide (një katror 40 mm në një katror 20 mm mbi 30 mm: saktësisht 28000 mm³).

Seksionet me numër të ndryshëm anësh (një katror me një trekëndësh) përputhen nga OpenCascade, që mund t'i përdredhë faqet anësore; veçoria ju paralajmëron. Vizatoni seksione me të njëjtin numër anësh, duke filluar nga kënde që përputhen, për rezultatin më të pastër.

### Shinat udhëzuese

Shinat udhëzuese janë kurba që anët e ndërlidhjes duhet t'i ndjekin nga seksioni i parë deri te i fundit, për një fryrje, një mesi ose një zgjerim që vizatoni vetë.

1. Vizatoni dy ose më shumë shina: kurba të hapura (vija, harqe, spline) që shkojnë nga seksioni i parë deri te i fundit dhe kalojnë çdo seksion një herë. Një skicë mund të mbajë disa shina: çdo zinxhir i veçantë brenda saj është shina e vet. Vizatoni një shinë që takon me të vërtetë çdo seksion: lidhni skajet e saj me pikat e seksioneve.
2. Në panelin Ndërlidhja, nën **Shinat udhëzuese**, shenjoni skicat që i mbajnë, ose klikoni {{ui:Përzgjidh brinjët}} si shina dhe klikoni brinjët e pjesës ({{key:Esc}} përfundon).

Me shina, ndërlidhja është një sipërfaqe Gordon që kalon nëpër seksione dhe shina (shih [Sipërfaqet nëpër një rrjet kurbash](topic:gordon-surfaces)), e mbyllur e sheshtë në të dy skajet në një trup të ngurtë. Paneli thotë sa ngushtë i ndjek. Çdo seksion duhet atëherë të jetë skicë (një pikë ose një faqe nuk mund të pranojë një shinë), dhe **Me vija drejta** nuk zbatohet. Një shinë që i shmanget një seksioni më shumë se 0.01 mm refuzohet, me hendekun.

Kontrolluar: dy rrathë (me diametra 20 mm dhe 10 mm, 40 mm larg) me katër shina të drejta japin vëllimin e trungut të konit me saktësi deri në 0.000002 %; harqe që fryhen 5 mm japin një fuçi që ndjek çdo shinë brenda 0.00001 mm.

## Draft

Draft-i i jep faqeve një pjerrësi, që pjesa të dalë nga një kallëp.

1. Zgjidhni {{ui:Më shumë}}, pastaj {{ui:Draft}} (ose {{key:Shift}}+klik mbi faqet më parë). Pa asgjë të zgjedhur jeni në modalitetin e përzgjedhjes: klikoni çdo faqe për ta pjerrësuar, pastaj {{ui:U krye}}.
2. Vendosni **Këndi (°)**, **Plani neutral** (ku faqet ruajnë madhësinë) dhe **Drejtimi i tërheqjes** (normalja e planit neutral si parazgjedhje).

Një kënd pozitiv e prin faqen brenda përgjatë tërheqjes dhe heq material; një negativ shton. Plani neutral fillon si plani i sipërm. Në këtë version vetëm faqet e sheshta mund të zhdrejtohen: një cilindër, kon ose faqe e lirë shfaq "Draft: në këtë version vetëm faqe të sheshta (kerneli i rrjetës e ndërton)." Katër anët e një blloku 100 × 100 × 50, të pjerrësuar 5° rreth bazës së tij, bëhen një trung piramide me vëllim saktësisht h/3·(a² + b² + ab), ku b = a − 2h·tan 5°.

## Mesazhet

| Mesazhi | Çfarë të bëni |
|---|---|
| "Plani i profilit duhet të kalojë nëpër njërin skaj të shtegut …" | Zhvendosni skicën e profilit në fillim (ose fund) të shtegut |
| "Shtegu ka një hendek: kurbat e tij nuk lidhen skaj më skaj …" | Lidhni kurbat e shtegut; në skica të ndara skajet e tyre duhet të takohen saktë |
| "Një seksion ndërlidhjeje kërkon saktësisht një lak të mbyllur" | Ndajeni skicën, ose hiqni lakun e tepërt |
| "… nuk mund të pjerrësohet rreth këtij plani neutral …" | Faqja është paralele me planin neutral ose nuk e takon atë |
| "Draft: në këtë version vetëm faqe të sheshta (kerneli i rrjetës e ndërton)." | Një faqe e zgjedhur është e lakuar. Hiqeni; pjerrësoni vetëm faqe të sheshta |

:::note
Nuk është ndërtuar ende: shtrirjet e përdredhura, shtrirjet me mur të hollë dhe me sipërfaqe, shinat udhëzuese të ndërlidhjes dhe tangjenca në skaj, pjerrësimi i cilindrave, koneve dhe faqeve të lira.
:::
