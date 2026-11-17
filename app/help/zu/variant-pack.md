---
title: Yenza iphekhi yamavarianti kusuka ezilungiselelweni zakho
summary: Yakha yonke ukulungiselelwa kwengxenye, noma eziningana ozikhethele, ngesikhathi esisodwa njenge-STEP, IFC, DWG kanye nesibonelo ngasinye, nethebula lezimingcele zazo, nengxenye njengento eyodwa yomtapo nezivarianti zayo.
keywords: iphekhi yamavarianti, amavarianti, ukulungiselela, umndeni wezingxenye, ukuthumela ngebhetshi, zonke usayizi, step, ifc, dwg, isibonelo, ithebula, csv, json, umtapo, umlungiseleli, ikhathalogu, item json
from: 9a6db99f
---

## Okuzokwenza

Nikeza **yonke usayizi wengxenye ngesikhathi esisodwa**: i-STEP, i-IFC ne-DWG eyodwa kanye nesithombe sokulungiselelwa ngakunye, ithebula elisho ukuthi yiliphi ngalinye, nento yomtapo esanda konke ekhasini elilodwa.

Udinga ingxenye enokulungiselelwa **kuqala** (bona [Ukulungiselelwa namathebula okuklama](topic:design-tables)). Ukulungiselelwa okuvala isakhiwo, njengepuleti elinemigodi nelingenayo, kuba yivarianti yalo.

## Izinyathelo

1. Vula ingxenye. Ku-thebhu ye-{{ui:Imingcele}}, thola **Ukulungiselelwa**.
2. Chofoza {{ui:Iphekhi yamavarianti…}}.
3. Thika ukulungiselelwa okuzokwakhiwa (konke kuthikiwe) nemafayela okuzobhalwa: STEP, IFC, DWG, isibonelo, nento yomtapo.
4. Chofoza {{ui:Yenza iphekhi}}. Umugqa wesimo ubala amavarianti njengoba eyakhiwa; ingxenye yakho ayishintshwa.
5. Kulandwa i-zip eyodwa: `<part> variants.zip`.

## Okusemgodini we-zip

| Ifayela | Yini |
|---|---|
| `<name>.step` | Ukulungiselelwa njengesolidi ye-STEP. |
| `<name>.ifc` | I-IFC4, isakhiwo esisodwa esinomzimba owakhiwe nezimingcele zengxenye njengezakhiwo; inani ngalinye liyelalokho kulungiselelwa. |
| `<name>.dwg` | Imibono ephambili, ephezulu, yesokudla kanye ne-isometric njengeshidi lokudweba ngosayizi ogcwele. |
| `<name>.svg` | Isithombe somugqa we-isometric salo. |
| `variants.csv`, `variants.json` | Ithebula lezimingcele: i-id yevarianti ngayinye, igama, inani lazo zonke izimingcele, izakhiwo ezivalwa yiyo, amafayela ayo, ivolumu yayo nosayizi wayo. |
| `<part>.item.json` | Ingxenye njengento eyodwa yomtapo nezivarianti zayo (bona ngezansi). |
| `README.txt` | Okwenziwe, izinikezo ezingezansi, nanoma yini engakhiwanga. |

Amafayela anikezwa amagama ngokulungiselelwa. Ukulungiselelwa okungakhiwa (isakhiwo esingenziwa ngalezo zinani) akufakwa emafayeleni nasethebuleni, kudweshwe ku-README nasemyalezweni ngemva kokugcinwa kwe-zip; ezinye zisabhalwa.

## Okufanele ukwazi

- **I-STEP** iyinembile uma i-exact kernel ivuliwe kulolu hlobo. Ngaphandle kwayo i-STEP ibhikiwe (izinxantathu eziqondile), futhi i-README iyasho lokho.
- **I-DWG** ingeshidi lokudweba, hhayi imodeli ye-3D. Imigqa yayo ivela ku-mesh, ngakho umphetho ojikelezayo ungemigqa emifushane eminingi.
- **Into yomtapo** iphethe umzimba owodwa nesisekelo esisodwa ngevarianti ngayinye, ngokwamagatsha womtapo: Z ephezulu, ingaphambili ibheke −Y, nendawo yokufaka iphakathi kwasemuva, ngaphansi. Ipulani iyinxande ozungezile levarianti ngayinye. Into ikhawulelwe ku-8 MB, ngakho ivarianti esindayo kakhulu iba yibhokisi losayizi walo, futhi i-README ithi zingaki.
- Ukulungiselelwa okusebenzayo kwengxenye kuyiyona varianti ezenzakalelayo yento.
- Amachweba (izindawo zokuxhuma zamapayipi namadakhithi) akasethwa kusuka ku-PartCraft.

## Faka amavarianti ekhasini lomtapo

Layisha `<part>.item.json` ku-**Umtapo › Layisha** kuwebhusayithi. Khetha isigaba sayo, ilayisense nombolo yakho yokunikela, bese iba yinto yomtapo enamavarianti ayo. Ku-BimCraft, ukuyibeka kubuza ukuthi yiyiphi ivarianti, futhi i-Shintsha inikeza ezinye. Ikhasi lapho izivakashi zikhetha izinketho, zibone i-3D futhi zilande ivarianti, kuwukubuka **kwesibonelo sabasebenzi** okwamanje: alivulelwe abantu bonke okwamanje.

## Ku-command line

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` iqamba izilungiselelo, `--formats` noma yiluphi kwalezi: `step`, `ifc`, `dwg`, `preview`; `--no-item` ishiya into yomtapo ngaphandle. Ibhala ifolda, i-zip noma zombili, futhi iphuma ngo-1 uma ivarianti yehlulekile ukwakhiwa. Bona [Izikripthi nomugqa womyalo](topic:scripts-and-cli).
