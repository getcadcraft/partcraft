---
title: Samee xirmada kala duwanaanshaha habaynteeda
summary: Dhis habayn kasta oo qayb ah, ama kuwa aad doorato oo kaliya, hal mar oo ah STEP, IFC, DWG iyo muuqaal kasta, oo leh miis halbeegyadooda, iyo qaybta oo ah hal shay maktabad oo leh kala duwanaanshaheeda.
keywords: xirmada kala duwanaanshaha, kala duwanaansho, habayn, qoyska qaybaha, dhoofin batch ah, cabbir kasta, step, ifc, dwg, muuqaal, miis, csv, json, maktabad, habeeye, katalog, item json
from: 9a6db99f
---

## Waxa aad samayn doontid

Gudbi **cabbir kasta oo qayb ah hal mar**: hal fayl STEP, IFC iyo DWG iyo sawir habayn kasta, miis oo sheegaysa waxa mid kasta yahay, iyo shay maktabad oo dhigaysa dhammaantood bog hal ah.

Waxaad u baahan tahay qayb leh **habayn** marka hore (eeg [Habaynta iyo miisaska naqshadeynta](topic:design-tables)). Habayn kasta oo astaan damisa, sida dhano leh iyo aan lahayn godad, waxay noqonaysaa kala duwanaanshaheeda.

## Tallaabooyinka

1. Fur qaybta. Tab-ka {{ui:Halbeegyada}}, raadi **Habayn**.
2. Riix {{ui:Xirmada kala duwanaanshaha…}}.
3. Calaamadi habaynta la dhisayo (dhammaantood waa la calaamadiyay) iyo faylalka la qorayo: STEP, IFC, DWG, muuqaal, iyo shayga maktabadda.
4. Riix {{ui:Samee xirmada}}. Khadka xaaladda wuxuu tirinayaa kala duwanaanshaha markii la dhisayo; qaybtaadu ma beddelmayso.
5. Hal zip ayaa soo dejisa: `<part> variants.zip`.

## Waxa ku jira zip-ka

| Fayl | Waa maxay |
|---|---|
| `<name>.step` | Habaynta oo ah jidh STEP ah. |
| `<name>.ifc` | IFC4, hal walax oo leh jidhka la dhisay iyo halbeegyada qaybta oo ah guryo; qiimaha waa midka habaynta u gaarka ah. |
| `<name>.dwg` | Muuqaalada hore, sare, midig iyo isometric oo ah xaashi naqshad oo cabbir buuxa. |
| `<name>.svg` | Sawir khad isometric ah oo ka mid ah. |
| `variants.csv`, `variants.json` | Miiska halbeegyada: aqoonsiga kala duwanaanshaha, magaciisa iyo qiimaha halbeeg kasta, astaamaha uu damiyo, faylalkiisa, mugga iyo cabbirka. |
| `<part>.item.json` | Qaybta oo ah hal shay maktabad oo leh kala duwanaanshaheeda (eeg hoosta). |
| `README.txt` | Waxa la sameeyay, xusuusta hoose, iyo wax kasta oo aan la dhisin. |

Faylalka magacooda waxaa lagu magacaabaa habaynta. Habayn aan la dhisi karin (astaan aan lagu samayn karin qiimahaas) waa laga tagaa faylalka iyo miiska, waxaana lagu taxay README-ga iyo fariin kadib markii zip-ka la kaydiyo; kuwa kale ayaa weli la qoraa.

## Waa in la ogaadaa

- **STEP** waa saxda marka exact kernel-ka uu ku shaqeeyo dhismahaaga. Haddii kale STEP-ku waa fasedyo (saddex-geesle fidsan), README-gana wuu sheegaa.
- **DWG** waa xaashi naqshad, ma aha moodel 3D. Khadadkiisu waxay ka imanayaan mesh-ka, sidaas darteed geesta khamiiska ah waa khado gaagaaban oo badan.
- **Shayga maktabadda** wuxuu sidaas u qaadaa hal jidh iyo hal raad kala duwanaansho kasta, oo ku jira dhidibada maktabadda: Z kor u, hore oo u jeeda −Y, iyo barta gelinta oo ku taal dhexda dhabarka hoose. Qorshuhu waa afar-geesle xuddun kasta. Shayga waxa lagu xaddidaa 8 MB, sidaas darteed kala duwanaansho aad culus waxay noqonaysaa sanduuq cabbirkiisa, README-gana wuu sheegaa inta ay tahay.
- Habaynta firfircoon ee qaybta waxay noqotaa kala duwanaanshaha caadiga ah ee shayga.
- Ports (barta xiriirka tuubooyinka iyo tuubooyinka hawada) PartCraft kama dejinayo.

## Dhig kala duwanaanshaha bog maktabad

Soo rar `<part>.item.json` ee goobta at **Maktabad › Soo rar**. Dooro qaybtiisa, shatiga iyo sharraxaada xaqa aad leedahay, ka dibna waxay noqonaysaa shay Maktabad oo leh kala duwanaanshaheeda. BimCraft, marka la dhigo waxay weydiinaysaa kala duwanaansho ee, Is beddel wuxuu soo bandhigaa kuwa kale. Bogga ay obbiyaashu doortaan ikhtiyaarrada, ay ku arkaan 3D-ga oo ay soo dejiyaan kala duwanaansho waa **muuqaal shaqaalaha** hadda: looma furin dadweynaha weli.

## Sadarka amarka

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` wuxuu magacaabaa habaynta, `--formats` waa wax kasta oo ka mid ah `step`, `ifc`, `dwg`, `preview`, `--no-item` wuxuu ka tagaa shayga maktabadda. Wuxuu qoraa galka, zip-ka ama labadooda, wuuna baxaa 1 marka kala duwanaansho aan la dhisin. Eeg [Scripts-ka iyo sadarka amarka](topic:scripts-and-cli).
