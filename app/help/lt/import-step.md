---
title: STEP failo atidarymas ir tolesnis kūrimas
summary: Atneškite tiekėjo ar kitos CAD programos STEP modelį į PartCraft kaip kietąjį kūną, kaip naują detalę arba pridėtą prie esamos, nustatykite, kuri kryptis yra viršuje, ir pridėkite eskizus bei elementus.
keywords: step, stp, importas, atidaryti step, ap203, ap214, ap242, tiekėjo modelis, kietasis kūnas, importuotas kietasis kūnas, be istorijos kietasis kūnas, viršutinė ašis, z aukštyn, y aukštyn, trikampiai, fasetinis, surinkimo step
from: ca0eca5f
---

PartCraft atidaro STEP failus (`.step` arba `.stp`, AP203, AP214 ir AP242) kaip **kietuosius kūnus**, ant kurių galite braižyti eskizus, pjauti, gręžti ir jungti su savo elementais. Kūnas neturi savos istorijos: negalite pakeisti matmenų, kuriais jis buvo sukurtas, galite tik pridėti prie jo arba iš jo išpjauti.

Šioje versijoje kiekviena detalė kuriama tinklelių branduoliu, todėl STEP failas **nuskaitomas kaip trikampiai**: plokšti paviršiai lieka plokšti, o lenkti paviršiai (cilindrai, kūgiai, sferos, toroidai, B-splaino paviršiai) tampa daugeliu mažų plokščių. Jo tūris nuo tikslaus skiriasi tik procento dalimis. Lenkiamus paviršius tiksliai išlaikyti reikia tikslaus branduolio, kurio šioje versijoje nėra.

## Atidaryti STEP failą

1. Pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}} ir pasirinkite `.step` arba `.stp` failą. Arba numeskite jį ant 3D vaizdo.
2. PartCraft nuskaito failą ir parodo, ką rado, pavyzdžiui: „AP214 failas: 1 kietasis kūnas, 10 paviršių, nuskaitytas kaip trikampiai.“ Žemiau pateikiamas trikampių skaičius, visa, ką teko praleisti ar sujungti, ir ar rezultatas uždaromas.
3. Patikrinkite **Viršus faile**. STEP failas nurodo savo vienetus (milimetrai, coliai, metrai…); PartCraft konvertuoja juos į milimetrus, todėl **Vienetai faile** rodo Milimetrai, „failas taip nurodo“. **Dydis čia** parodo, koks jis bus.
4. Pasirinkite {{ui:Atidaryti kaip kūną}}, kad gautumėte tuščią detalę, arba {{ui:Pridėti prie šios detalės}} / {{ui:Nauja detalė}}, kai detalė jau turi elementų. Pridedant klausiama, ką daryti su **Naudoti tam**: pridėti, išpjauti arba palikti tik persidengimą.

Istorijoje atsiranda elementas **Imported1**, o būsenos juostoje rašoma, pavyzdžiui: „plate.step yra kietasis kūnas: 57995.937 mm³, 6 plokšti paviršiai, ant kurių galima braižyti eskizą.“

## STEP surinkimas

Surinkimas įkeliamas kaip **vienas kūnas**, kuriame kiekviena detalė yra ten, kur ją nurodo failas („3 faile išdėstytos detalės įkeliamos ten, kur stovi“). Detalė, naudota du kartus, įkeliama du kartus. Detalių pavadinimai ir surinkimo medis neišlaikomi.

## Nustatyti, kuri kryptis yra viršuje

Dauguma CAD programų naudoja Z aukštyn; PartCraft naudoja Y aukštyn. Numatytai PartCraft pasuka failą taip, kad jo Z ašis rodytų aukštyn. Jei detalė atkeliauja gulėdama ant šono, pasirinkite **Imported1** ir nustatykite **Viršus faile** į **Y aukštyn**. **Vienetai faile** ir **Naudoti tam** taip pat galima pakeisti ten; kiekvienas pakeitimas yra vienas anuliavimo žingsnis.

## Kurti toliau

- Spustelėkite plokščią kūno paviršių ir pasirinkite {{ui:Eskizas ant šio paviršiaus}}. STEP modelio plokšti paviršiai išlieka savo vietoje, kai kūnas perskaičiuojamas.
- Pridėkite pjūvius, skyles, iškilimus, raštus ir veidrodinius atvaizdus kaip ant bet kurios detalės.
- Patikrinkite jo dydį lange **Detalė**: tūris, paviršiaus plotas, matmenys.

Suapvalinimams, nuožulnoms ir apvalkalams reikia tikslaus branduolio, kaip ir bet kuriai šios versijos detalei ([Tinklelių branduolys](topic:solid-kernels)).

## Kur tai saugoma

Trikampiai saugomi **viduje** `.partcraft.json` failo, todėl detalės failas yra savarankiškas: STEP failo nebereikia.

## Pranešimai

| Pranešimas | Ką tai reiškia |
|---|---|
| '„part.stp“ nėra STEP failas (jis neprasideda ISO-10303-21).' | Failas nėra paprastas STEP tekstas. Paprašykite siuntėjo AP203, AP214 ar AP242 STEP failo |
| „STEP failo nepavyko nuskaityti: jo duomenų skyrius trūksta arba sugadintas.“ | Failas nukirstas arba sugadintas. Nukopijuokite jį iš naujo |
| „STEP faile nėra nei kietojo, nei paviršiaus kūno: nėra ką įkelti.“ | Failas turi tik brėžinius, taškus ar duomenis. Paprašykite kietojo kūno |
| „Šis STEP failas per didelis (daugiau nei 60 MB), kad būtų importuotas čia.“ ir kitos skaitytuvo ribos (įrašai, paviršiai, trikampiai) | Supaprastinkite modelį šaltinyje arba siųskite detales po vieną |
| „… failo sugadintos eilutės buvo praleistos.“ | Kai kurių eilučių nepavyko nuskaityti; likusios įkeltos. Patikrinkite kūną |
| „… paviršių nepavyko paversti trikampiais, todėl jie praleisti.“ | Tie paviršiai palieka tuščias vietas, kurias PartCraft bando užpildyti; jei kūnas neuždaromas, jis nepridedamas |
| „… tokio tipo paviršiai, kurių nenuskaitoma (…), buvo praleisti.“ | Retas paviršiaus tipas. Paprašykite modelio su paprastais arba B-splaino paviršiais |
| „Neuždaroma …“ | Paviršiai nesudaro uždaro kietojo kūno (paviršių modelis arba praleisti paviršiai). PartCraft parodo angas ir nieko nepridės |

## Ribos

- Lenkti paviršiai piešiami ir matuojami kaip plokščios fasetės, kaip ir kiekviena šioje versijoje kuriama detalė. PartCraft išlaiko failo plokščius paviršius, cilindrus, kūgius, sferas ir toroidus kartu su kūnu, todėl {{ui:Eksportuoti}} › {{ui:STEP AP242 (tikslus kietasis kūnas)}} įrašo juos atgal kaip tikrus paviršius, skyles – kaip skyles, kartu su jūsų pridėtais elementais. Paviršiai, kuriuos failas pateikia kaip splainus, ištęsimus (sweeps) ar sukimo paviršius, eksporte lieka fasetėmis. Detalė, įrašyta prieš 0.9.1 versiją, neturi išlaikytų paviršių: atidarykite STEP failą iš naujo, kad juos gautumėte.
- {{ui:Eksportuoti}} › {{ui:DXF eskizo arba plokščio paviršiaus}}, pasirinkus plokštį paviršių, įrašo apvalią failo skylę kaip tikrą apskritimą.
- Spalvos, kūnų pavadinimai, surinkimo struktūra ir PMI (failo tolerancijos) nenuskaitomi.
- Be STEP, PartCraft atidaro STL, OBJ ir 3MF tinklelius ([Atidaryti STL, OBJ ar 3MF](topic:open-meshes)) ir `.3dm` failus ([Atidaryti .3dm modelį](topic:open-3dm-files)) kaip kietuosius kūnus. IGES ir kitų programų vietiniai failai nepalaikomi.
- Detalė su STEP kietuoju kūnu, importuotu versija, turėjusia tikslųjį branduolį, išlaiko STEP tekstą; ši versija tą elementą praleidžia („nesukurta“). Atidarykite STEP failą iš naujo, kad jis būtų įkeltas kaip trikampiai.
