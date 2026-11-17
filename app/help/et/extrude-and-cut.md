---
title: Väljapressi kühm ja lõika läbi
summary: Muuda visand tahkiseks käsuga {{ui:Väljapressimine}}, sea sügavus (kindel, keskpind, kuni või kahesuunaline), kitsenemine või visandi üks kontuur, seejärel visanda tahul ja lõika {{ui:Lõika}} abil tasku või läbilõige.
keywords: väljapressimine, kühm, väljapressitud kühm, lõige, väljapressitud lõige, tasku, läbi kõik, kindel, keskpind, pööra, sügavus, lõige-väljapressimine, kühm-väljapressimine, pealekasvatus, kuni tahuni, kuni järgmise tahuni, kuni tipuni, nihe tahust, suund 2, kaks suunda, tõmbenurk väljapressimisel, kitsenemine, kontuur, piirkond, valitud kontuurid
from: 3b13ff10
---

{{ui:Väljapressimine}} surub visandi suletud profiili sirgelt välja selle tasandist, et teha materjali. {{ui:Lõika}} teeb sama, aga eemaldab materjali. Mõlemad on alt sama element; ühe saad hiljem teiseks muuta.

## Väljapressi kühm

1. Joonista suletud profiil ja sulge visand (vt [Joonista esimene visand](topic:sketch-basics)). See jääb valituks.
2. Vali {{ui:Väljapressimine}}.

10 mm tahke ilmub, "Extrude1" lisandub ajaloole visandiga selle all taandega, ja olekuriba ütleb: "Extrude1 lisatud. Muuda selle numbreid paremal."

**Millist visandit kasutatakse:** see visand, mille just sulgesid, või ajaloos valitud visand. Kui midagi pole valitud, võtab PartCraft viimase visandi, mida ükski element veel ei kasuta. Kui sellist pole: "Tee kõigepealt visand: vali tasand, {{ui:Visand}}, joonista suletud profiil, {{ui:Välju}}."

### Sea sügavus ja suund

Paremas paneelis:

| Säte | Valikud | Vaikimisi |
|---|---|---|
| **Toiming** | Kühm (lisa materjali), Lõige (eemalda materjal), Ristumine (säilita kattuv osa), Uus keha (selles versioonis veel pole, vajab täpset tuuma) | Kühm |
| **Lõpp** | Kindel (sügavus), Keskpind (mõlemas suunas), Läbi kõik, Kuni tahuni või tasandini, Kuni järgmise tahuni, Kuni tipuni, Nihe tahust | Kindel |
| **Sügavus (mm)** | Mis tahes suurus üle nulli (näidatakse Kindla ja Keskpinna puhul) | 10 |
| **Pööra suund** | Kasvab visandi tasandi teisele poolele (Keskpinna puhul ei näidata) | Väljas |

Sisesta number ja vajuta {{key:Enter}} või {{key:Tab}}: detail ehitatakse kohe uuesti. **Keskpind** paneb poole sügavusest visandi kummalegi poole.

### Kuni tahuni, järgmise tahuni või tipuni

Selles versioonis veel pole: iga "kuni" lõpp vajab täpset tuuma ja element ütleb: "Väljapressimine kuni tahuni, järgmise tahuni või tipuni: veel pole valmis (vajab täpset tuuma)." Kasuta mõõdetud kindlat sügavust. Täpse tuumaga töötavad lõpud nii:

- **Kuni tahuni või tasandini**: **Kuni** võtab lameda tahu (Vali, seejärel klõpsa sellel) või võrdlustasandi. Visandiga paralleelne tahk annab täpse sügavuse; kaldtahk lõikab lõpu kaldpinnal. Kui tahk on visandi taga: "… Proovi {{ui:Pööra suund}}."
- **Kuni järgmise tahuni**: peatub esimese lameda tahu juures kehal, mida väljapressimine kohtab (kumerad tahud pole siin toetatud, programm ütleb seda).
- **Kuni tipuni**: peatub tipu tasemel (klõpsa serva lõpu lähedal) või punktelemendi juures.
- **Nihe tahust**: nagu Kuni tahuni, peatudes **Nihe (mm)** võrra sellest enne (mõõdetuna tahuga risti).

### Kaks suunda, kitsenemine, üks kontuur

- **Teine suund** (Kindel): väljapressib ka **Teine sügavus (mm)** visandi teisele poolele.
- **Kitsenemine (°)**: küljed kalduvad kokku, kui edasi minnakse (negatiivne: laiali), nagu tõmbenurk; ainult üks suund. Selles versioonis veel pole (vajab täpset tuuma): jäta 0-le.
- **Piirkonnad**: **Vali piirkonnad**, seejärel klõpsa väljapressitavate silmuste sees; kasutatakse ainult neid piirkondi (ring ruudu sees: klõpsa ringi sisse silindri jaoks, nende vahele augustatud plaadi jaoks). **Kõik** läheb tagasi kõigi silmuste juurde.

Nende all loetleb **Visandi mõõtmed** visandi juhtmõõtmed, nii et profiili mõõtmeid saab muuta visandit avamata.

:::note
**Läbi kõik on ainult lõigete jaoks.** Kühm, mis on seatud Läbi kõik peale, ebaõnnestub teatega "Läbi kõik on lõigete jaoks. Kühme jaoks kasuta sügavust." Elemendi lülitamine Lõikest tagasi Kühmuks muudab Läbi kõik sinu eest Kindlaks.
:::

## Lõika tasku

1. Klõpsa lamedal tahul, millesse tahad lõigata. See särab ja paremas paneelis on **Tahk**.
2. Vali {{ui:Visand sellel tahul}} (või tööriistaribal {{ui:Visand}}).
3. Joonista tasku äärejoon, näiteks ristkülik, ja pane mõõtmed.
4. Vali {{ui:Välju}}.
5. Vali {{ui:Lõika}}. See algab seadetega **Läbi kõik**: eemaldab materjali detailist läbi.
6. Tasku puhul sea **Lõpp** väärtuseks **Kindel (sügavus)** ja sisesta **Sügavus (mm)**.

Lõige läheb materjali sisse, eemale visandatud tahust. Kui olekuriba ütleb: "Selle visandi küljel pole midagi lõigata. Proovi teist suunda.", märgi linnukesega **Pööra suund**.

Tasku põhjal oleva visand järgib põhja: muuda tasku sügavust ja visand liigub koos sellega.

## Tõmba või suru terve tahk

Et tahk paistaks rohkem välja või vajuks sisse, ei pea sa selle äärejoont joonistama. Klõpsa lamedal tahul ja siis paremas paneelis:

- {{ui:Väljapressi sellest}} tõmbab tahu välja: PartCraft lisab tahule visandi, mis hoiab selle äärejoont (augud tahus jäävad aukudeks), ja 10 mm väljapressimise.
- {{ui:Lõika sisse}} surub tahu sisse: sama visand ja Lõige pooleni detailis.

Mõlemad on ühe sammuga: {{key:Mod+Z}} võtab ära nii visandi kui elemendi. Uus element on valitud, nii et sisesta kohe number ja vajuta {{key:Enter}} sügavuse jaoks. Äärejoon kopeeritakse fikseeritud joontena ja kaartena: see ei järgi hilisemaid tahu muudatusi. Kui osa äärejoonest ei saa kopeerida (vaba kuju kõver), avaneb visand selle asemel osaga, mis kopeeritud sai; viimista see, seejärel vali {{ui:Välju}} ja {{ui:Väljapressimine}} või {{ui:Lõika}}.

## Profiilid saartega

Visandis võib olla mitu suletud silmust. Kõrvuti olevad silmused muutuvad eraldi kühmudeks (või lõigeteks); silmus teise sees muutub läbi kühmu avaks. Näiteks ristkülik, mille sees on kaks ringi, väljapressitakse plaadina kahe avaga.

Kui tahad kasutada ainult mõnda silmust, vali need **Piirkondade** abil (ülal); teine element saab sama visandi teisi silmuseid kasutada.

## Muuda hiljem

- Klõpsa ajaloos "Extrude1", et tuua tagasi selle seaded.
- Topeltklõpsa selle visandil (taandega selle all), et visand avada; sulge see, et uuesti ehitada.
- Vt [Muuda detaili ajaloo kaudu](topic:edit-history) peatamise, tagasikerimise, järjestamise ja kustutamise kohta.

## Levinud teated

| Teade | Mida teha |
|---|---|
| "Visandil pole suletud profiili, mida väljapressida." | Visandil pole suletud silmust tugevatest joontest. Sulge lüngad või pööra konstruktsioonijooned tagasi klahviga {{key:Q}} |
| "Profiil on lahti: otspunkt (x, y) pole millegagi ühendatud." | Ava visand ja ühenda see ots järgmise joonega |
| "Lõikamiseks pole veel midagi." | Lõige vajab tahket, mida lõigata. Tee enne kühm |
| "Pärast seda ei jää detailist midagi alles." | Lõige eemaldas kõik. Kontrolli selle suurust ja suunda |

Rohkem: [Tõrkeotsing](topic:troubleshooting).
