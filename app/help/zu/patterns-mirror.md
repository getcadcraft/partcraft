---
title: Izici zokuphinda nezibuko
summary: Phinda izici ngomugqa nge-Olayini, zijikeleze i-axis nge-Ngokujikeleza, futhi ukopishe izici noma umzimba wonke ngaphesheya kwendiza nge-Isibuko.
keywords: phinda, ukuphinda komugqa, ukuphinda okujikelezayo, polar array, uhlu, isibuko, okufanayo, kopisha izici, umjikelezo wamabhawodi, imbewu, isibuko somzimba
from: 702e9edb
---

Izinkambu nezibuko zikopisha izici osewuzakhile. Izikopi ziyingxenye yomlando: uma ushintsha okokuqala, izikopi zilandela.

Okukopishwayo kungokwenza isici: inkambu ye-boss yengeza impahla, inkambu yokusika noma yesimbobo iyisusa. Izinkambu zingaphinda zenziwe futhi zibonisiwe futhi. Inqwaba ye-STEP engenisiwe nayo ingakopishwa; ama-fillet, ama-chamfer nama-shell akwazi.

## Inkambu yomugqa

1. Khetha isici okuzokopishwa emlandweni (isibonelo i-Hole noma i-Cut). Uma kungekho okukhethiwe, kusetshenziswa isici esiqinile sokugcina.
2. Khetha {{ui:Olayini}}. Izikopi ezintathu zivela zihlukaniswe ngama-20 mm ecaleni kwe-X.
3. Ohlangothini lwesokudla, setha:

| Isilungiselelo | Okwenzayo | Okuzenzakalelayo |
|---|---|---|
| **Izici zokukopisha** | Thikha zonke izici ozozikopisha. Izici ezingaphezulu kwenkambu kuphela ziyabhalwa | Isici esikhethiwe |
| **Inkombandlela** | I-X axis, i-Y axis, i-Z axis, umugqa noma umugqa wesisekelo kusikethi esingaphambilini, i-axis ye-revolve, noma umphetho okhethiwe | I-X axis |
| **Ibanga (mm)** | Ibanga phakathi kwamakhelwane | 20 |
| **Inani** | Inani eliphelele, **kubandakanya okokuqala** (1 kuya ku-1000) | 3 |
| **Phendula inkombandlela** | Izikopi ziya ngakolunye uhlangothi | Akuvulekile |

### Sebenzisa umphetho njengenkombandlela

1. Chofoza umphetho oqondile wengxenye ku-view. Uhlangothi lwesokudla luthi **Umphetho** futhi lukhombise ubude baw.
2. Khetha {{ui:Olayini}}: inkambu ihamba kuleyo mphetho.

Noma khetha inkambu, khetha umphetho, bese ukhetha "Umphetho okhethiwe (sebenzisa leyo okhethwe manje)" ku-**Inkombandlela**. Umphetho okhethiwe umi endaweni ngokuqinile: awulandeli izinguquko ezilandelayo. Umugqa wesikethi ulandela isikethi sawo.

## Inkambu ngokujikeleza

1. Khetha isici okuzokopishwa (isibonelo isimbobo esisodwa eduze komphetho wediski).
2. Khetha {{ui:Ngokujikeleza}}. Izikopi eziyisithupha zivela zilinganiswe ngokulinganayo ngokuzungeza.
3. Setha:

| Isilungiselelo | Okwenzayo | Okuzenzakalelayo |
|---|---|---|
| **Izici zokukopisha** | Njengakwe-Olayini | Isici esikhethiwe |
| **I-axis** | I-X, i-Y noma i-Z axis, umugqa wesikethi, i-axis ye-revolve, noma umphetho okhethiwe | I-axis ye-revolve yokugcina uma ikhona, kungenjalo i-Y axis |
| **I-engeli (°)** | 360 ibeka izikopi ngokulinganayo ngokuzungeza. Ngaphansi kwalokho ziyasabalala ngaleyo ngeengeli, okokuqala nokokugcina emaphethelweni | 360 |
| **Inani** | Inani eliphelele, kubandakanya okokuqala | 6 |
| **Phendula inkombandlela** | Ihamba ngakolunye uhlangothi | Akuvulekile |

Ama-axis omhlaba adlula emvelophezulu. Uma idiski ingagxilile emvelophezulu, sebenzisa umugqa wesisekelo wesikethi noma i-axis ye-revolve.

### Isibonelo: izimbobo eziyisishiyagalombili zefulenji

1. Jikeleza ifulenji (bheka [Jikeleza ingxenye ejikelezayo](topic:revolve)) ngokuzungeza i-Y axis.
2. Dweba esikhethweni phezulu kwefulenji, beka iphoyinti emjikelezweni wamabhawodi, bese wenza i-Hole.
3. Ngenkathi i-Hole ikhethiwe, khetha {{ui:Ngokujikeleza}}. I-**I-axis** isivele ithi "Axis of Revolve1".
4. Setha **Inani** libe `8`.

## Isibuko

1. Khetha isici okuzosibonisa emlandweni, noma ungakhethi lutho ukuze ubonise **umzimba wonke njengoba wakhiwe kuze kube manje**.
2. Khetha {{ui:Isibuko}}. Sibonisa ngaphesheya kwe-**Right plane**.

Ukuze ubonise umzimba wonke ngaphesheya kobuso bengxenye, chofoza leso busweni obuqinile kuqala, bese ukhetha {{ui:Isibuko}}. (Ukuchofoza ubuso kususa ukukhethwa komlando, ngakho lokhu kubonisa umzimba wonke njalo.)

Izilungiselelo ohlangothini lwesokudla:

- **Isibuko**: thikha **Umzimba wonke (njengoba wakhiwe kuze kube manje)**, noma ususe lokho bese uthikha izici ozozikopisha.
- **Indiza yesibuko**: Indiza yangaphambili (Front plane), Indiza ephezulu (Top plane), Indiza yesokudla (Right plane), ubuso obusetshenziswa manje ("A face of Extrude1" noma "A fixed plane"), noma "The face picked now". Ukubonisa izici ezikhethiwe ngaphesheya kobuso: khetha i-Mirror emlandweni, chofoza ubuso ku-view, bese ukhetha "The face picked now".

Ukubonisa umzimba wonke ngaphesheya kobuso kuphindaphinda ingxenye, isibonelo ibhulaketi lohhafu libe ibhulaketi eligcwele.

## Imilayezo

- "Yakha isici ukuze ukopishe kuqala." noma "Yakha umzimba oqinile kuqala." Akukho okuqinile okungakopishwa okwamanje.
- "Khetha izici ozozikopisha." Zonke amabhokisi **Izici zokukopisha** ziyasulwa.
- "Extrude2 has no solid to copy." I-Extrude2 ayinawo umzimba oqinile wokukopisha. Leso sici sehlulekile noma sivinjiwe.
- "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Fillet1 ishintsha imiphetho noma izindonga zomzimba; ayikwazi ukukopishwa. Kopisha izici ezenza izinto eziqinile (ama-extrude, ama-revolve, izimbobo, okungenisiwe). Ama-fillet, ama-chamfer nama-shell awakwazi ukuphindwa noma ukubonisiwa; phinda kuqala, bese wenza i-fillet.
- "There is no body to mirror yet." Akukho mzimba wokubonisa okwamanje.

:::note
Izikopi zenkambu azikwazi ukudlulwa ngayinye, futhi inkambu ayikwazi ukulandela ijika lesikethi. Izinkambu zesikethi nezibuko azikakwakhiwa: dweba ijika elipheli ngesandla noma nge-**Add by coordinates**.
:::
