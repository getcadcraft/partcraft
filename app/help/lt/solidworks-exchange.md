---
title: Detalių perkėlimas į kitus modeliavimo įrankius ir iš jų
summary: Siųskite detalę kitam detalių modeliavimo įrankiui kaip makrokomandą, kuri ją atkuria su gyvu elementų medžiu. Pavadintas STEP ir kitos programos įrašyto elementų sąrašo atidarymas šioje versijoje dar nesukurti.
keywords: makrokomanda, nesukurta, swb, vba, elementų medis, grįžimas, eksportuoti makrokomandą, cadcraft-sw.json, pavadintas step, ap214, globalieji kintamieji, lygtys, gimtoji detalė
from: 97ca61da
---

PartCraft detales keičia su SolidWorks abiem kryptimis, be failo formato, kurio nieks kitas neskaitytų:

- **Išsiunčiant:** makrokomanda (`.swb`, grynasis tekstas), kurią SolidWorks paleidžia, kad pati sukurtų detalę elementas po elemento, su eskizais, ryšiais, matmenimis, globaliaisiais kintamaisiais ir lygtimis. Gaunate gimtąją detalę su gyvu elementų medžiu, o ne negyvą kietąjį kūną.
- **Grąžinant:** makrokomanda, kurią paleidžiate SolidWorks viduje, įrašo detalės elementus ir lygtis į failą `.cadcraft-sw.json`. Šio failo atidarymas PartCraft šioje versijoje dar nesukurtas (reikia tikslaus branduolio).

:::warning
Nieko iš to dar neišbandyta SolidWorks. SolidWorks veikia tik Windows sistemoje su licencija, o PartCraft šių makrokomandų jame niekada nepaleido. Makrokomandos parašytos pagal SolidWorks API dokumentaciją ir čia patikrintos tik struktūriškai. Tikėkitės, kad teks pranešti apie problemas; makrokomandos rašomas žurnalas nurodo, kuris žingsnis nepavyko.
:::

PartCraft negali įrašyti `.sldprt` failo: tas formatas uždaras. Gimtąją detalę gausite per makrokomandą.

## Siųskite detalę kaip makrokomandą

1. Atidarykite detalę.
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:Makrokomanda SolidWorks programai (.swb)}}. PartCraft atsisiunčia `<part>.swb`; būsenos juostoje rašoma, kad jis įrašytas "be tikslaus branduolio".
3. Dialogo lange rašoma, kiek elementų, globaliųjų kintamųjų ir lygčių sukuria makrokomanda, ir išvardijama, kas praleista. Šioje versijoje šalia jos STEP nebus: jei jo reikia, naudokite {{ui:Eksportuoti}}, tada {{ui:STEP (paviršiais, tinklo branduolys)}}.
4. SolidWorks programoje pasirinkite **Tools > Macro > Run**, nurodykite `.swb` failą ir palaukite. Ji sukuria naują detalę iš jūsų numatytojo detalės šablono, nustato milimetrus ir sukuria kiekvieną elementą.
5. Pabaigoje pranešime rašoma, kiek žingsnių atlikta, kiek nepavyko ir kiek atitiko PartCraft kūną. Visas žurnalas `<part> macro log.txt` įrašomas šalia makrokomandos.

Ką sukuria makrokomanda:

| PartCraft | Naujoje detalėje |
|---|---|
| Eskizas Priekinėje, Viršutinėje arba Dešiniojoje plokštumoje | Eskizas toje plokštumoje su savo linijomis, lankais, apskritimais, taškais, ryšiais ir matmenimis (pavadinti kaip PartCraft, pvz., `k7`) |
| Eskizas ant paviršiaus | Eskizas ant to paties paviršiaus, parinkto pagal tašką jame |
| Eskizas ant fiksuotos plokštumos | Nuorodinė plokštuma per tris taškus ir eskizas ant jos |
| Ištempimas, išpjova (aklas, per visą, vidurio plokštuma, dvi kryptys, nuolydis) | Boss-extrude arba cut-extrude |
| Sukimas, sukta išpjova | Sukimas apie tą pačią ašinę liniją |
| Skylė (paprasta, įleidžiama, nuleidžiama, sriegiama) | Viena ar dvi išpjovos su savo eskizais (sriegiama skylė – tai jos gręžimo skylė; sriegio nėra) |
| Tiesinis ir apskritiminis masyvas, veidrodis | Tiesinis masyvas, apskritiminis masyvas, veidrodis (elementai arba kūnas) |
| Suapvalinimas, nuožulna, išdrožimas | Suapvalinimas, nuožulna ir išdrožimas tose pačiose briaunose ir paviršiuose, parinktuose pagal taškus |
| Parametrai ir lygtys | Globalieji kintamieji ir lygtys pervadintuose matmenyse |
| Slopinti elementai, atšaukimo juosta | Slopinami tuo pačiu būdu; atšaukimo juosta toje pačioje vietoje |

Po kiekvieno kieto elemento makrokomanda palygina kūno tūrį ir dydį su PartCraft. Jeigu jie skiriasi, ji vieną kartą apverčia to elemento kryptį ir tikrina dar kartą; jei nuo to nepagerėja, ją grąžina atgal ir žurnale įrašo "Check".

### Kas praleidžiama

Dialogo lange ir makrokomandos pradžioje išvardijama viskas, kas neperkelta, su priežastimi. Šiuo metu tai: importuoti kietieji kūnai (vietoj jų įdėkite STEP), išvedimai palei kelią, perėjimai tarp profilių, nuolydžiai, nuorodinės ašys ir taškai, pabaigos sąlygos "iki", ištempimas tik dalies kontūrų ir viskas, kas nuo jų priklauso. Splainai tampa kreivėmis per savo taškus. Šioje versijoje nėra tikslaus branduolio, todėl eskizai ant paviršių ir elementai, kurie parenka briaunas ar paviršius, taip pat praleidžiami.

## Siųskite pavadintą STEP

Šioje versijoje dar nesukurta: {{ui:STEP SolidWorks programai (pavadintas, AP214)}} reikia tikslaus branduolio, o pasirinkus jį rašoma "STEP for SolidWorks: not built yet. …". Su tikslu branduoliu failas turi detalės pavadinimą, milimetrus ir detalės spalvą ir stato Y ašį aukštyn, kaip SolidWorks rodo detales (paprastas {{ui:STEP AP214 (tikslus kietasis kūnas)}} eksportas stato Z ašį aukštyn). Pavadinime raidės praranda diakritinius ženklus, o kiti simboliai, ne paprasto ASCII, virsta `_`.

## Grąžinkite detalę

Failo atidarymas PartCraft (3 žingsnis) šioje versijoje dar nesukurtas: rašoma "Opening a SolidWorks export: not built yet. …" (Atidaromas SolidWorks eksportas: dar nesukurta. …). CadCraft braižymo programa vis dar atidaro failą ir perima jo eskizus.

1. Pasirinkite {{ui:Failas}} > {{ui:Eksportuoti}} > {{ui:Eksporto makrokomanda detalėms grąžinti (.swb)}}, kad atsisiųstumėte `CadCraftExport.swb`, ir įdėkite jį šalia savo detalių.
2. SolidWorks programoje atidarykite detalę, pasirinkite **Tools > Macro > Run** ir nurodykite `CadCraftExport.swb`. Ji įrašo `<part>.cadcraft-sw.json` šalia detalės ir jos nekeičia.
3. PartCraft programoje pasirinkite {{ui:Atidaryti}} ir nurodykite tą failą arba numeskite jį į 3D vaizdą.
4. Su tikslu branduoliu PartCraft detalę atkuria elementas po elemento ir parodo, ką padarė: pavyzdžiui, "5 of 5 features carried over from SolidWorks (Flange.SLDPRT)" (5 iš 5 elementų perkelta iš SolidWorks (Flange.SLDPRT)), kiekvieną elementą, kurio nepavyko perkelti ("Not carried over: Sweep1 (Sweep)." Neperkelta: Sweep1 (Sweep).), ir ar tūris sutampa su tuo, kurį įrašė SolidWorks.
5. Įrašykite kaip PartCraft detalę su {{ui:Įrašyti}}.

Eskizai atsiduria pagrindinėje plokštumoje, kai jie yra ant jos, ant atitinkamo plokščio detalės paviršiaus, jei toks yra (todėl seka vėlesnius pakeitimus), o kitu atveju – ant fiksuotos plokštumos. Suapvalinimų, nuožulnų ir išdrožimų briaunos bei paviršiai randami pagal taškus ir išlaikomi kaip pavadintos nuorodos. Globalieji kintamieji tampa parametrais (vardai su tarpais gauna pabraukimus: "Bolt count" tampa `Bolt_count`), o lygtys tampa lygtimis tuose pačiuose matmenyse. Nieko nespėliojama: tai, ko neturi atitikmens, išvardijama.

CadCraft braižymo programa atidaro tą patį failą ir perima jo eskizus.

:::note
Formatas yra `cadcraft-sw-export` 1 versija, grynasis JSON milimetrais ir laipsniais. Failas iš naujesnės makrokomandos arba netinkamas failas atmetamas, ir nurodoma priežastis.
:::
