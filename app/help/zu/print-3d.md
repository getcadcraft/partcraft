---
title: Lungiselela ingxenye ukuze iprintwe nge-3D
summary: Hlola ukuthi ingxenye noma i-assembly ivaliwe, ilingana nomshini wakho wokuprinta futhi imi phezu kwesisekelo, bese uyilanda njenge-STL noma i-3MF ye-slicer yakho.
keywords: print 3d, ukuprinta nge-3d, iprinta, ukuprinta, slicer, stl, 3mf, ivaliwe, vala, manifold, ibhedi, usayizi webhedi, ipuleti lokwakha, ukuqhamuka, izinsekelo, isisekelo, amamilimitha, ukuthumela, izintambo, ikhilaransi
from: 90d81dff
---

I-slicer idinga isimo esivaliwe: akukho zimbobo, zonke izindawo zibheke ngaphandle, akukho okudlula kuso. Izingxenye ezakhiwe yi-PartCraft zivaliwe ngokwakhiwa, ngakho ukuhlola kakhulu kukutshela usayizi, ukuthi ingxenye iyalingana yini nebhedi lomshini wakho wokuprinta, ukuthi imi phezu kobuso obulingene yini, nokuthi iqhamuka kangakanani.

## Hlola ulande

1. Okungakhethwa, kanye kuphela: setha ibhedi lomshini wakho wokuprinta ku-{{ui:Izilungiselelo}} › PartCraft › **3D printer**: ububanzi, ukujula nokuphakama ngamamilimitha. Zishiye zingenalutho ukuze udlule kulolo hlolo.
2. Khetha {{ui:Thumela}}, bese {{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}}.

   Ibhokisi lithi "Ilungele ukuprinta" noma "Ayilungele ukuprinta", ibala okungalungile, futhi linikeza usayizi ebhedini (X × Y × Z, ngamamilimitha), ivolumu nenani lamatriyangela.

3. Chofoza {{ui:Download 3MF}} noma {{ui:Download STL}}. Ifayela lifana ne-{{ui:Thumela}} › {{ui:3MF, ukuze kuphrintwe nge-3D}} noma {{ui:STL, ukuze kuphrintwe nge-3D}}.

Ku-assembly, ukuhlola namafayela kuthatha i-assembly yonke, zonke izikopi lapho zibekwe khona.

Ingxenye ihlolwa imi njengoba ukuthumela kuyibhala: okubheka phezulu ku-PartCraft (kuqondile ku-Top plane) kubheka phezulu ebhedini. Ingxenye edwetshwe ku-Top plane ilala phansi.

## Okungathi ingxoxo ingakusho

**Ayilungele ukuprinta** (i-slicer ingayenqaba noma ingayiprinta ngokungalungile): izimbobo (imiphetho enobuso ohlangothini olulodwa kuphela), imiphetho eyabelwana ngezindawo ezintathu noma ngaphezulu, izindawo ezibheke ngakolunye uhlangothi, umzimba ophenduliwe, noma umzimba udlula kuwo wona. Ingxenye eyakhelwe ku-PartCraft akufanele iwabonise lawa; uma kukhona, bheka [Ukuxazulula izinkinga](topic:troubleshooting).

**Izexwayiso** (iyaprinta, kodwa bheka kuqala):

- **Ikhulu kunebhedi lomshini wakho wokuprinta**, noma uma ijikelezwe ngama-90° kuyo.
- **Akukho lapho ilala phansi ngokuthe xaxa**: jikeleza ingxenye ku-slicer yakho ukuze ubuso buhlale ebhedini, noma kuzodingeka izinsekelo noma i-raft.
- **Iyathambekela ngaphezu kuka-45° ngaphandle kokuma ngqo**: lezo zindawo zidinga ukusekelwa, ngokuma njengoba kunjalo. Enye indlela yokuma ingadinga okuncane.
- **Imizimba ehlukene iyahlanganisa** noma **ihlangana ngobuso**: ama-slicer ngokuvamile ayahlanganisa. {{ui:Hlanganisa}} ku-Features › More ihlanganisa ibe umzimba owodwa. Bheka [Imizimba](topic:bodies).
- **Ngaphansi kwe-1 mm ubude bonke**: hlola usayizi wengxenye.

## Izintambo eziprintwayo

Intambo emodelwe iprinta njengentambo yangempela. Yinike **Ikhilaransi** ethile ukuze i-bolt eprintiwe ingene ku-nut eprintiwe: bheka [Izintambo](topic:threads).

## Bushelelezi ubuso obujikelezayo

I-STL ne-3MF yakhiwe ngonxantathu. Ukuze uthole ubuso obujikelezayo obushelelezi, chofoza endaweni engenalutho ukuze kungakhethwa lutho, bese usetha **Amajika** ibe **Kuhle (128 ngokujikeleza)** noma **Kuhle kakhulu (256 ngokujikeleza)** ohlangothini lwesokudla ngaphambi kokuthumela. Onxantathu abaningi benza amafayela amakhulu.

## Okukhulu, okuncane, noma ngezingcezu

- **Thumela › Linganisa ukuze kuprintwe (STL noma 3MF)…** igcina ingxenye ilinganiswe ngamanani ngokwe-axis ngaphandle kokuyishintsha: **ukuvumela ukuncipha** ngamaphesenti (usayizi × (1 + s), noma usayizi oqondile ÷ (1 − s)) ye-casting pattern, noma izinto ezilula, ezungeze maphakathi, esisekelweni esiphansi, phakathi nobuso obuphansi noma emvelophezulu.
- **Thumela › Hlukanisa ukuze kuprintwe (izingcezu ku-zip)…** isika ingxenye enkulu kakhulu kumshini wakho wokuprinta ibe yizingcezu ezilingana ngabanye nebhedi oyinikezayo, ezixhunywe ngezikhonkwane, izikhiye, ama-dovetail, izimbobo ze-dowel noma izikhala zamagnethi (ngekhilaransi osethile), kuthi isiqephu ngasinye nendawo yokuhlangana zibalwe, futhi izingcezu zigcinwe njenge-STL noma i-3MF ku-zip nephepha le-assembly. Ingxenye ngokwayo ayishintshi.

## Akuhlolwanga

Ukuminyana kwezindonga, imininingwane emincane kunenozzle yakho ngaphandle kokuthi ingayidweba, nokuthi i-slicer izobeka kanjani izinsekelo. I-slicer yakho iyazibonisa lezo.
