---
title: Sukurkite variantų paketą iš savo konfigūracijų
summary: Sukurkite visas detalės konfigūracijas arba pasirinktas kelias vienu metu kaip STEP, IFC, DWG ir peržiūrą kiekvienai, su jų parametrų lentele ir detale kaip vienu bibliotekos elementu su variantais.
keywords: variantų paketas, variantai, konfigūracijos, detalių šeima, paketinis eksportas, visi dydžiai, step, ifc, dwg, peržiūra, lentelė, csv, json, biblioteka, konfigūratorius, produktų konfigūratorius, katalogas, elemento json
from: 9a6db99f
---

## Ką darysite

Perduokite **visus detalės dydžius vienu metu**: vieną STEP, IFC ir DWG failą bei paveikslėlį kiekvienai konfigūracijai, lentelę, kuri nurodo, kas yra kiekviena, ir bibliotekos elementą, kuris visus jų talpina vienoje vietoje.

Pirmiausia reikia detalės su **konfigūracijomis** (žr. [Konfigūracijos ir projektavimo lentelės](topic:design-tables)). Konfigūracija, kuri išjungia elementą, pavyzdžiui plokštė su skylėmis ir be jų, tampa savo variantu.

## Žingsniai

1. Atidarykite detalę. Skirtuke {{ui:Parametrai}} raskite **Konfigūracijos**.
2. Spustelėkite {{ui:Variantų paketas…}}.
3. Pažymėkite konfigūracijas, kurias sukurti (visos pažymėtos), ir failus, kuriuos rašyti: STEP, IFC, DWG, peržiūrą ir bibliotekos elementą.
4. Spustelėkite {{ui:Sukurti paketą}}. Būsenos eilutė skaičiuoja variantus, kai jie kuriami; jūsų detalė nekeičiama.
5. Atsisiunčiamas vienas zip failas: `<part> variants.zip`.

## Ką talpina zip failas

| Failas | Ką jis reiškia |
|---|---|
| `<name>.step` | Konfigūracija kaip STEP kietasis kūnas. |
| `<name>.ifc` | IFC4, vienas elementas su sukurtu korpusu ir detalės parametrais kaip savybėmis; reikšmė yra tos konfigūracijos. |
| `<name>.dwg` | Priekis, viršus, dešinė ir izometrija kaip brėžinio lapas pilnu mastu. |
| `<name>.svg` | Izometrinis linijinis jos paveikslėlis. |
| `variants.csv`, `variants.json` | Parametrų lentelė: kiekvieno varianto id, pavadinimas ir kiekvieno parametro reikšmė, elementai, kuriuos jis išjungia, jo failai, tūris ir dydis. |
| `<part>.item.json` | Detalė kaip vienas bibliotekos elementas su variantais (žr. žemiau). |
| `README.txt` | Kas sukurta, toliau pateiktos pastabos ir tai, kas nebuvo sukurta. |

Failai pavadinami pagal konfigūraciją. Konfigūracija, kurios nepavyksta sukurti (elementas negali būti pagamintas su tomis reikšmėmis), praleidžiama failuose ir lentelėje, nurodoma README faile ir pranešime, parodytame po zip išsaugojimo; kitos vis tiek įrašomos.

## Verta žinoti

- **STEP** yra tikslus, kai jūsų versijoje įjungtas tikslusis branduolys. Be jo STEP yra facetuotas (plokšti trikampiai), ir README tai nurodo.
- **DWG** yra brėžinio lapas, o ne 3D modelis. Jo linijos ateina iš tinklelio, todėl kreivas kraštas yra daug trumpų linijų.
- **Bibliotekos elementas** talpina po vieną korpusą ir vieną pėdsaką kiekvienam variantui bibliotekos ašių sistemoje: Z aukštyn, priekis į −Y, o įterpimo taškas – galo vidurys apačioje. Planas yra kiekvieno varianto ribojantis stačiakampis. Elementas ribojamas 8 MB, todėl labai sunkus variantas tampa savo dydžio dėže, o README nurodo, kiek jų tokių yra.
- Aktyvi detalės konfigūracija yra elemento numatytasis variantas.
- Prievadai (vamzdžių ir ortakių jungčių taškai) iš PartCraft nenustatomi.

## Padėkite variantus į bibliotekos puslapį

Įkelkite `<part>.item.json` svetainės **Biblioteka › Įkelti** skiltyje. Pasirinkite jo kategoriją, licenciją ir savo autorystės eilutę, ir jis tampa Bibliotekos elementu su variantais. BimCraft programoje jį įdėjus klausiama, kurį variantą, o {{ui:Pakeisti}} pasiūlo kitus. Puslapis, kuriame lankytojai pasirenka parinktis, mato 3D ir atsisiunčia variantą, dabar yra **tik darbuotojų peržiūra**: jis dar neatviras visuomenei.

## Iš komandinės eilutės

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nurodo konfigūracijas, `--formats` – bet kurį iš `step`, `ifc`, `dwg`, `preview`; `--no-item` bibliotekos elementą palieka. Ji rašo aplanką, zip arba abu ir baigiasi kodu 1, kai variantas negali būti sukurtas. Žr. [Scenarijai ir komandinė eilutė](topic:scripts-and-cli).
