---
title: Plokščių detalių išdėstymas lakštuose
summary: Išklokite plokščias detales ant plokščių ar ritinio su kuo mažesnėmis atliekomis, kiek PartCraft gali rasti, niekada arčiau nei nurodytas tarpas, ir įrašykite išdėstymą kaip DXF lazeriui, plazmai, vandens pjovimui ar frezavimo staklėms.
keywords: išdėstymas, išdėstyti, lakštas, plokštė, ritinys, lazeris, plazma, vandens pjūvis, frezavimas, pjovimas, išeiga, medžiagos naudojimas, laužas, atliekos, tarpas, pjūvio plotis, valcavimo kryptis, dxf, plokščia išklotinė, kontūrai
from: 8dcce1a6
---

**Išdėstymas** sudeda daug plokščių detalių ant lakšto taip, kad liktų kuo mažiau medžiagos. PartCraft dėlioja detales vieną po kitos, kiekvieną ten, kur lakšto naudojamas ilgis yra trumpiausias, išbando kelias eilės tvarkas, skaičiavimas užtrunka kelias sekundes ir pasirenkamas geriausias variantas. Detalės gali tilpti viena kitos skylėse ir L ar U formos įduboje.

## Atidaryti

- {{ui:Eksportuoti}} › {{ui:Išdėstyti plokščias detales lakštuose…}} atidaro ją su detalės plokščia išklotine arba, surinkime, su kiekvienos lakštinio metalo detalės plokščia išklotine, kiek yra kopijų.
- Lakštinio metalo detalėje — {{ui:Išklioti plokštumoje}}, o po plokščia išklotine — {{ui:Išdėstymas lakštuose…}}.
- {{ui:Pridėti kontūrus iš DXF…}} prideda kiekvieną uždarą kontūrą DXF faile kaip detalę: brėžinį iš CadCraft, įrašytą kaip DXF, arba failą iš pjovimo įrangos programos. Kontūras kito kontūro viduje yra skylė jame. Linijos ir lankai, sujungti galas į galą, skaičiuojami kaip vienas kontūras. Failai coliais, centimetrais ar metrais paverčiami į milimetrus.

:::note
Lakštinio metalo išklotinei reikalinga tiksli geometrijos branduolys (žr. [Lakštinis metalas](topic:sheet-metal)). Kontūrai iš DXF failo visada veikia.
:::

## Nustatyti

Kiekvienai detalei nurodykite **kiek** jos reikia ir jos **kryptį**: {{ui:Bet kuri kryptis}}, {{ui:Išilgai lakšto (kaip nubrėžta)}} lakštui, kuris turi eiti viena kryptimi, pvz., šlifuotam ar valcuotam, arba {{ui:Skersai lakšto}}.

Skiltyje **Lakštai**:

- **Atsargos**: {{ui:Plokštės}} nurodyto ilgio ir pločio (ir kiek jų turite; 0 = kiek reikia), arba {{ui:Ritinys}} nurodyto pločio, kiek reikia ilgio.
- **Krašto paraštė** paliekama tuščia prie kiekvieno lakšto krašto (spaustuvams arba nelygiam kraštui).
- **Tarpas tarp detalių** yra mažiausias atstumas tarp dviejų pjovimo linijų: bent jau jūsų pjovimo įrankio pjūvio plotis, plius tai, ko reikia medžiagai.
- **Pasukimai**: kampai, kuriais detalę galima pasukti; pagal numatytuosius nustatymus kas 90°. Mažiau pasukimų veikia greičiau; daugiau gali geriau panaudoti lakštą.
- **Detales galima apversti** leidžia detalę išdėstyti apverstą. Lakštiniam metalui išjunkite: apversta išklotinė lenkiasi kita kryptimi.

Spauskite {{ui:Išdėstyti}}. Peržiūra rodo kiekvieną lakštą; faktai parodo, kiek plokščių (ar kiek ritinio) panaudota ir kiek medžiagos užima detalės. Nesutilpusios detalės įvardijamos.

## Įrašyti

{{ui:Įrašyti DXF}} įrašo išdėstymą kaip DXF (R12, milimetrais), vieną lakštą po kito: lakštų kontūrai sluoksnyje SHEET, detalės — sluoksnyje PARTS (lankai išlieka lankais), kiekvienos detalės pavadinimas — sluoksnyje LABELS.

:::tip
Kelių skirtingų detalių išdėstymas paprastai pavyksta geriau nei daugybė vienos detalės kopijų: mažos detalės užpildo tarpus tarp didelių.
:::

## Pjauti lakštus (G-kodas)

**Eksportuoti › Išdėstytus lakštus į G-kodą** nuskaito išdėstymo DXF (šį arba Cabinets priedo lakštus CadCraft) ir kiekvienam lakštui sukuria atskirą programą per pasirinktą postprocesorių: pirma skylės ir išpjovos, tada kontūrai; kiekvienas pjūvis atliekamas įrankio spindulio atstumu už detalės, per visą lakštą ir dar 1 mm, su laikikliais, jei juos paprašysite. Postprocesorių sąrašas — įmontuoti postprocesoriai ir jūsų gamybos tyrimo postprocesoriai. Prieš vykdydami kiekvieną programą patikrinkite ją imitatoriuje: gręžimas ir kišenės nėra daromi.

## Ką patikrinti

PartCraft dar kartą patikrina kiekvieną išdėstymą pagal tikras formas (ne pagal tinklelį, kuriuo ieškojo): jokios dvi detalės nėra arčiau nei tarpas, niekas nepatenka į paraštes. Pjovimo plano PartCraft nesudaro: įvedimo linijos, pjovimo tvarka, bendrų kraštų pjovimas vieną kartą ir likusio lakšto išsaugojimas yra jūsų pjovimo įrangos programos darbas. Prieš pjaudami patikrinkite DXF ten.
