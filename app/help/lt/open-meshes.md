---
title: Atidaryti STL, OBJ ar 3MF kaip kietąjį kūną
summary: Paverskite skeneriu, 3D spausdinimo svetaine ar kita programa sukurtą tinklą kietuoju kūnu, kurį galima iškirpti, prie kurio galima pridėti ir ant kurio galima braižyti eskizą; ką PartCraft taiso ir ko negali.
keywords: stl, obj, 3mf, tinklas, tinklas į kietąjį kūną, konvertuoti tinklą, skenavimas, vandeniui atsparus, taisymas, skylės, tarpai, vienetai, aukštyn ašis, importuotas kūnas, plokšti veidai
from: 7b948471
---

PartCraft atidaro STL, OBJ ir 3MF tinklus kaip **kietuosius kūnus**. Kūnas veikia kaip bet kuris kitas kietasis kūnas: jį galima iškirpti, prie jo pridėti, išgręžti, pakartoti šablonu, naudoti surinkime ar apdirbimui ir braižyti eskizą ant jo plokščių veidų. Savos istorijos jis neturi: tinklas yra tik trikampiai, todėl jo dydžio pakeisti negalima, galima tik pridėti ar iškirpti.

## Atidaryti tinklą

1. Pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}} ir nurodykite `.stl`, `.obj` ar `.3mf` failą. Arba numeskite jį ant 3D vaizdo.
2. PartCraft jį nuskaito, pataiso tai, ką gali saugiai pataisyti, ir parodo, ką rado: kiek trikampių ir taškų, kiekvieną taisymą ir ar tinklas dabar **užsidaro**.
3. Patikrinkite **Vienetai faile** ir **Viršus faile**. STL ir OBJ nenurodo savo vienetų, todėl laikoma, kad tai milimetrai; 3MF failas nurodo savo. Eilutė **Dydis čia** rodo kūno dydį pagal jūsų pasirinkimą, todėl detalę, kuri atkeliauja 25,4 karto per maža (ji buvo coliais), lengva pastebėti.
4. Jei ekrane esanti detalė tuščia, pasirinkite {{ui:Atidaryti kaip kūną}}. Jei ji jau turi elementų, pasirinkite **Naudoti jį** (pridėti prie detalės, išpjauti iš jos arba palikti tik sutapimą), tada {{ui:Pridėti prie šios detalės}}, arba {{ui:Nauja detalė}}, kad pradėtumėte iš naujo su tinklu.

Istorijoje atsiranda elementas **Imported1**. Būsenos juostoje rodoma, pavyzdžiui: „bracket.stl yra kietasis kūnas: 15200.512 mm³, 14 plokščių veidų eskizui.“

## Ką PartCraft taiso

| Taisymas | Ką tai reiškia |
|---|---|
| Dubliuoti kampai sujungti | STL kiekvienam savo trikampiui kartoja kiekvieną kampą; jie sujungiami į vieną tašką |
| Trikampiai be ploto pašalinti | Skiautelės, kurių kampai guli vienoje linijoje |
| Dvigubi trikampiai pašalinti | Trikampis, įrašytas du kartus, paliekamas vieną kartą; du, žiūrintys priešingomis kryptimis (vidinė siena), pašalinami abu |
| Maži tarpai uždaryti | Kraštai, kurie beveik susitinka (per tūkstantąją detalės dydžio dalį), sujungiami |
| Skylės užpildytos | Anga, kurios kraštas guli plokščiai, užpildoma nepriklausomai nuo dydžio; išlenkta — tik kai maža |
| Trikampiai atsukti į išorę | Trikampiai, žiūrintys ne ta kryptimi, pasukami, kad sutaptų su kaimynais, o visas paviršius nukreipiamas į išorę |

## Kai tinklas neužsidaro

Kietajam kūnui reikia paviršiaus be angų. Kai PartCraft negali jo uždaryti, dialogas nurodo, kiek angų ir atvirų kraštų liko, ir kūno, kurį galima būtų pridėti, nėra. Uždarykite angas programoje, kuri sukūrė tinklą, arba eksportuokite jį iš naujo kaip uždarą (vandeniui atsparų) tinklą ir atidarykite dar kartą.

PartCraft palieka angą nepaliestą, kai jos užpildymas galėtų klaidingai atspėti: didelė išlenkta skylė arba dvi angos toje pačioje plokštumoje (trūkstamas žiedinis veidas, kur kiekvieno krašto užpildymas uždengtų vidurinę skylę). Kraštas, bendras daugiau nei dviem trikampiams, taip pat pranešamas: toks paviršius neturi vieno aiškaus vidaus.

## Braižykite eskizą ant plokščių veidų

Plokšti plotai, sudaryti iš daugelio trikampių, sujungiami į vieną **plokštų veidą** kiekvienas, kad ant jų būtų galima dėti eskizą: spustelėkite veidą ir pasirinkite {{ui:Eskizas ant šio paviršiaus}}. Veidas, kuris vėliau iškerpamas arba prie kurio kas pridedama, lieka veidu. Apvalūs plotai (skylė, suapvalinimas) lieka trikampiais: jie nėra veidai, kuriuos galima pasirinkti, o vaizdas piešia jų kontūrą iš kampo tarp trikampių.

## Pakeiskite vėliau

Pasirinkite **Imported1**, kad pamatytumėte failą, iš kurio jis atėjo, kiek jis turi trikampių ir kas buvo pataisyta. **Vienetus faile**, **Viršų faile** ir **Naudoti jį** galima pakeisti ten; kiekvienas pakeitimas yra vienas atšaukimo žingsnis.

## Kur jis laikomas

Pataisytas tinklas saugomas **viduje** `.partcraft.json` failo, todėl tinklo failo nebereikia. Detalės failas su tinklo kūnu yra 5 versijos: senesnė PartCraft versija jį atmeta pagal versiją. 200 000 trikampių tinklas prideda apie 1,2 MB.

## Ribos

- Daugiausia 3 milijonai trikampių ir 200 MB viename faile.
- Iš tinklo sukurtas kūnas kuriamas tinklo branduoliu. Su įjungtu tiksliu branduoliu (tik kūrėjams) apie tai pranešama ir kūnas nekuriamas.
- OBJ medžiagos, tekstūros koordinatės ir laisvos formos kreivės paliekamos; 3MF spalvos, medžiagos ir atraminiai objektai paliekami (dialogas nurodo, kiek objektų praleista).
- Kūnas tiek smulkus, kiek tinklas: grubus STL duoda grubius apvalius veidus. Skylės, kurias į jį gręžiate, yra tiek apvalios, kiek apvalūs jūsų pačių elementai.
