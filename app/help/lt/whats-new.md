---
title: Kas naujo 0.8 ir 0.8.1 versijoje
summary: PartCraft 0.8 prideda analizę gyvai, kol redaguojate, patikrinimą „Kas pirmiausia sulūš?“, takumo ir kontakto tyrimus su įvesties failais išoriniam sprendikliui, judesio tyrimus surinkimams, darbo sritį „Paviršiai“ laisvos formos paviršiams, detales, kurių matmenys nustatyti pagal fiziką darbo srityje „Inžinierius“, nuotrauka į eskizą, spausdinimo eksportą, išdėstytus lakštus į G-kodą ir brėžinius, kuriuose išmatuojamos skylės. 0.8.1 ištaiso viso ekrano žymeklio užšalimą.
keywords: kas naujo, išleidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, nauji elementai, analizė gyvai, atnaujinti redaguojant, sulūš, kas pirmiausia sulūš, apkrovos koeficientas, netiesiškumas, takumas, plastinė deformacija, kontaktas, calculix, judesio tyrimas, tarpas, paviršiai, nurbs, lyginimas, korpusas, zebra, inžinierius, generatorius, generuotas korpusas, eskizas iš nuotraukos, mastelis spausdinimui, padalijimas spausdinimui, susitraukimas, išdėstyti lakštai, g-code, brėžinys, skylių matavimas, asistentas, mcp, kalbos, įrankių juostos eilutės
from: 62e4dce2
---

Tai, kas pasikeitė PartCraft 0.8 ir 0.8.1 versijose, palyginti su 0.7. Simuliacija atsako, kol redaguojate, ir praneša, kas pirmiausia sulūš; surinkimams atsirado judesio tyrimai, o naujos darbo sritys leidžia kurti laisvos formos paviršius ir detales, kurių matmenys nustatyti pagal fiziką. 0.8.1 – nedidelis taisymų leidimas.

## Naujovės

### Simuliacija

- **Atnaujinti, kol redaguoju.** Pažymėkite {{ui:Atnaujinti, kol redaguoju}} bloke Solve, ir atsakymai seks jūsų pakeitimus. Pakeiskite matmenį, apkrovą ar medžiagą – iš karto pasirodo greitas atsakymas, apskaičiuotas naudojant keturis kartus didesnius elementus; kai sustojate maždaug sekundei, paties tyrimo patikslintas atsakymas pakeičia jį. Rezultatuose nurodyta, kurį iš jų matote. Plieninėje konsolėje greitas atsakymas nukrypo ne daugiau kaip 1 % pagal poslinkį ir apie 4 % pagal įtempį, palyginti su patikslintu. Žr. [Patikrinkite įtempį ir poslinkį](topic:simulation#update-while-you-edit-live).
- **Kas pirmiausia sulūš?** Statiniam ar stabilumo tyrimui bloke **Sulaužyk** {{ui:Kas pirmiausia sulūš?}} didina apkrovas, kol detalė pasiduoda. Ji išvardija nuo blogiausio: apkrovos koeficientą iki pirmojo takumo (raudonas žymeklis, kur įtempis didžiausias) ir apkrovos koeficientą iki stabilumo praradimo. Koeficientas, mažesnis nei 1, reiškia, kad detalė esant dabartinei apkrovai jau pasiduoda, ir skydelyje Problemos rodoma klaida. Koeficientai gaunami iš tiesinio tyrimo, todėl jie tiek tikslūs, kiek tikslus tas tyrimas. Žr. [Patikrinkite įtempį ir poslinkį](topic:simulation#find-out-what-breaks-first-break-it).
- **Takumas ir kontaktas.** Du nauji tyrimų tipai: netiesinis, kai medžiaga seka tiesią liniją iki takumo įtempio, o paskui – plokštesnį nuolydį, su nubraižyta plastine deformacija; ir kontaktinis, kai atskiros dalys spaudžia viena kitą (be trinties) arba lieka prilipusios (sujungtos). Apkrovos žingsnis, kuris nepasiekia pusiausvyros, arba dalys, kurios per daug įsminga viena į kitą, rodomi skydelyje Problemos. Trintis, dideli slydimai, dideli sukimai, dideli poslinkiai ir nuovargis neskaičiuojami. Žr. [Patikrinkite įtempį ir poslinkį](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Įvesties failai CalculiX.** {{ui:Eksportuoti}} › {{ui:CalculiX įvesties failas (.inp)}} įrašo tyrimą CalculiX – atskiroje programoje, kurią įdiegiate ir paleidžiate patys; {{ui:Eksportuoti}} › {{ui:CalculiX rezultatai (.frd)}} nuskaito jos rezultatų failą atgal į tą patį tinklelį. PartCraft tos programos niekada nepaleidžia ir praneša, jei detalė pakeista nuo įvesties failo įrašymo.

### Surinkimai

- **Judesio tyrimai.** {{ui:Surinkimas}} › {{ui:Judėjimas}} valdo vienos jungties reikšmę per jūsų nurodytą laiką (pastovus greitis, sušvelninimas, sinusoidė arba pirmyn ir atgal), išdėsto surinkimą kiekviename žingsnyje su jungtimis ir uždaromis grandinėmis bei praneša, kas susikerta ir kaip arti vienas kito priartėja dalys. {{ui:Pridėti tašką}} braižo taško padėtį, greitį ir pagreitį, jungties reikšmę ir tarpą laikui bėgant; {{ui:Įrašyti CSV}} ir {{ui:Įrašyti grafiką}} juos įrašo. Po {{ui:Paleisti}} juostoje „Step through the run bar“ galite perkelti surinkimą į bet kurį žingsnį. Tyrimo nustatymai įrašomi surinkimo faile. Greitis ir pagreitis apskaičiuojami iš įrašytų padėčių, todėl, jei aštrus smailės taškas rodomas per mažai, naudokite daugiau žingsnių. Žr. [Patikrinkite surinkimą dėl susikirtimų ir judesio](topic:check-assembly#a-motion-study).

### Paviršiai ir detalės pagal fiziką

- **Paviršių darbo sritis.** Pasirinkite {{ui:Paviršiai}} lauke {{ui:Darbo sritis}}, kad greta detalės gautumėte NURBS kreives ir paviršius: {{ui:Kreivė}}, {{ui:Sujungimas (loft)}}, {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungti}} ir {{ui:Zebra}}, su tęstinumu (G0, G1 arba G2), išmatuotu tiksliuose paviršiuose, ir kraštu, prastesniu nei prašėte, išvardytu skydelyje Problemos su taisymu „Sujungti“. {{ui:Išlyginti}} matuoja korpuso linijas ieškodamas perlinkių ir kreivumo šuolių bei perstato netinkamas pagal jūsų toleranciją. Paviršiai įrašomi detalės faile ir nekeičia detalės elementų. Žr. [Laisvos formos paviršiai (NURBS)](topic:nurbs-surfaces).
- **Darbo sritis Inžinierius.** Pasirinkite {{ui:Inžinierius}} darbo srities perjungiklyje, pasirinkite generatorių ir spustelėkite {{ui:Naujas}}: skriptas nustato detalės matmenis pagal tai, ką ji turi atlikti (šilumos perdavimas, srautai, slėgis, medžiaga, spausdinimo procesas), naudodamas vadovėlines formules, ir ją sukuria; tada grąžina naudotus skaičius su jų šaltiniais, gamybos patikrinimus ir failus analizės įrankiams. Tos pačios įvestys duoda tą pačią detalę bet kuriame kompiuteryje. Generatorius saugomas detalėje, o detalės atidarymas niekada nepaleidžia skripto. Žr. [Detalės pagal fiziką: generatoriai](topic:engineer-generators) ir [Parašykite generatorių](topic:write-a-generator).

### Eskizavimas, brėžiniai ir gamyba

- **Eskizas iš nuotraukos.** {{ui:Elementai}} › {{ui:Daugiau}} › {{ui:Eskizas iš nuotraukos…}} perkelia plokščios detalės paveikslėlį paprastame fone (kontūras ir skylės) arba rašikliu nupieštą brėžinį į linijas, lankus ir apskritimus. Įvedate vieną ilgį, patikrinate peržiūrą ir sukuriate eskizą. Žr. [Eskizavimo pagrindai](topic:sketch-basics#a-sketch-from-a-photo).
- **Mastelis ir padalijimas spausdinimui.** {{ui:Eksportuoti}} › {{ui:Mastelis spausdinimui (STL arba 3MF)…}} keičia mastelį pagal ašis nekeisdamas detalės, pavyzdžiui, pagal susitraukimo leidimą. {{ui:Eksportuoti}} › {{ui:Padalyti spausdinimui (dalių zip archyvas)…}} supjausto per didelę spausdintuvo stalui detalę į sunumeruotas dalis, sujungiamas kaiščiais, lamelėmis, uodegėlėmis, kaiščių skylėmis arba magnetų lizdais. Žr. [Spausdinimas 3D](topic:print-3d).
- **Išdėstyti lakštai į G-kodą.** {{ui:Eksportuoti}} › {{ui:Išdėstytus lakštus į G-kodą}} nuskaito išdėstytą DXF ir sukuria po vieną programą kiekvienam lakštui pagal jūsų pasirinktą postprocesorių: pirma skyles ir iškirpimus, paskui kontūrus. Ji neplanuoja įvedimo linijų, pjovimo tvarkos ar bendrų kraštų. Žr. [Išdėstykite plokščias detales ant lakštų](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Brėžiniai, kurie daugiau daro patys.** {{ui:Lapas}} › {{ui:Automatinis}} parenka mažiausią A formato lapą, kuriame telpa vaizdai, didžiausiu standartiniu mastelių iki 1:1. {{ui:Pamatuoti skyles}} kiekvienai skylei uždeda centro žymę, po vieną nuorodą kiekvienam dydžiui ir padėtis nuo vaizdo apatinio kairiojo kampo. Žr. [Sukurkite brėžinį](topic:drawing-pdf).

### Visose programose

- **Kalbos.** Programos pateikiamos 54 kalbomis. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol gimtoji kalba jų neperskaito.
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} pasirenka Laužyti eilutėmis (kaip anksčiau), 2 eilutes arba 1 eilutę; juosta, kuri netelpa, slenka į šonus. PartCraft elementų juostoje dažniausiai naudojamas įrankis rodomas didelis, o variantai paslepiami už padalyto mygtuko.
- **Prijunkite savo DI.** Studio yra centras, kuriame prijungiate savo asistentą prie visų aštuonių programų, su tik skaitymo, siūlymo arba redagavimo leidimu kiekvienai programai. Prijungtas asistentas gali apskaičiuoti detalės matmenis pagal sakinį, pavyzdžiui, laikiklį apkrovai, parodyti savo darbą ir visus patikrinimus bei ją sukurti; jis praneša, ko nepatikrino (įtempių koncentracijos, nuovargio, plastikų šliaužimo). Žr. [Naudokite PartCraft su DI asistentu](topic:use-with-ai-assistants).

## Ištaisyta 0.8.1 versijoje

- **Viso ekrano žymeklio užšalimas.** Žymeklio pasirinkimas užvedant dabar riboja dažnį. Priežastis – geriausias mūsų įvertinimas; jos nepatvirtinome su pranešusiu asmeniu.
- **Kalba veikimo metu.** Studio ir supakuoti leidimai gali keisti kalbą veikdami; anksčiau jie buvo tik anglų kalba. Tai dar neišbandyta visose platformose: praneškite, jei kalba nesikeičia.

## Dar neįgyvendinta šioje versijoje

- Funkcija „Prijunkite savo DI“ dar nebaigta: vieno paspaudimo prijungimas Studio viduje, talpinama naršyklės DI jungtis, jūsų pačių API raktas Studio viduje ir paskelbtas MCP paketas nėra pažadėti. Studio neturi savo DI.
- Studio nėra pasirašytas kodu: Windows gali įspėti, o macOS prašo dešiniuoju pelės klavišu spustelėti, tada Atidaryti. Žr. [Trikčių šalinimas](topic:troubleshooting).
- Tolerancijų grandinės dar tik viena kryptimi: žr. [Tolerancijų grandinės](topic:tolerance-stackup).
- Likusieji išvardyti [Kas dar nepadaryta](topic:not-built-yet).

Ankstesni pakeitimai aprašyti [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
