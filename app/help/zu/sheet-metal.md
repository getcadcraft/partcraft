---
title: Insimbi yeshidi: amaflange nephethini eyisicaba
summary: Qala ingxenye yensimbi yeshidi ngesikethi (ipuleti eliyisicaba noma iphrofayili egobile), setha ubukhulu bayo, iradiyasi yokugoba ne-K-factor kanye, goba amaflange phezulu emaphethelweni ayo nezinciphisi zokugoba, bese uyilinganisa ibe yi-DXF yokusika.
keywords: iphethini eyisicaba, ukuvula, ukuthuthukiswa, ubude obuthuthukisiwe, umugqa wokugoba, i-DXF yelaser, ukusika nge-laser, insimbi yeshidi, iflange yesisekelo, iflange yomphetho, iflange, ukugoba, iradiyasi yokugoba, k-factor, ubukhulu, igeyji, ukuphumuza, bend relief, ichaneli, ibhulaketi, ivalo, ishidi eligobile
from: 144bd0f6
---

:::note
**Akukakwakhiwa kulolu hlobo.** Insimbi yeshidi idinga i-geometry kernel eqondile, into le-PartCraft le-weqo elingayinaki: yakha yonke ingxenye nge-mesh kernel. [Okungakakwakhiwa](topic:not-built-yet) kuchaza okufanele wenze esikhundleni. Leli khasi elisele lichaza njengoba lisebenza nge-exact kernel.
:::

Izingxenye zensimbi yeshidi ziqala nge-**Iflange yesisekelo**. Iseta ishidi lengxenye yonke: **ubukhulu** bayo, **iradiyasi yokugoba yangaphakathi** ne-**K-factor**. Yonke **Iflange yomphetho** elandelayo igoba ngalezo zinombolo ezifanayo, ngakho ingxenye ihlala iyishidi elilodwa elingavulwa. Zombili zidinga i-**exact kernel** (bheka [I-mesh kernel](topic:solid-kernels)).

## Qala ngeflange yesisekelo

1. Dweba isikethi. Sebenzisa **iphrofayili evaliwe** ipuleti eliyisicaba (irektangela, noma noma yisiphi isakhiwo esivaliwe nezimbobo). Sebenzisa **ishena eyodwa evulekile yemigqa** weshidi elogobile, njengo-L, U noma Z odwetshwe njengombono wephethelo lweshidi.
2. Khetha isikethi komlando wezici.
3. Vula {{ui:More}} eqenjini le-Features bese ukhetha {{ui:Base flange}}.

Kwipaneli esesigabeni sakwesokudla:

- **Ubukhulu (mm)** ngukuthi igeyji yeshidi ibukeka kanjani.
- **Iradiyasi yokugoba (mm)** ingu-iradiyasi yangaphakathi yakho konke ukugoba. 0 inikeza ikhona elibukhali elingaphakathi; ngaphandle kugingqa nakho ngeradiyasi yobukhulu obubodwa.
- **K-factor** ibonisa lapho ungqimba olungathathi hlangothi luhlezi khona ngaphakathi kweshidi, kusukela ku-0 (ubuso bangaphakathi) kuya ku-0.5 (maphakathi). Inquma ukuthi ishidi lide kangakanani lapho lilinganiswa libe ngumbhalo osicaba. I-0.44 ngeyokuzenzakalelayo; umkhiqizi wakho noma umhlinzeki wezinto zakho angakunika owakhe.
- **Ukujula (mm)** ngukuthi iphrofayili egobile imile kangakanani kusuka endizeni yesikethi. Ipuleti alinaki lokho.
- **Ubukhulu ngaphandle kwezigoba**: iphrofayili evulekile iyinhlangothi eyodwa yeshidi. Ngokuzenzakalelayo ubukhulu bubekwa ngaphakathi kokugoba kokuqala, ngakho imigqa oyidwetshe iwumphetho wangaphandle wechaneli. Khetha ukuze ubeke imigqa ngaphakathi. Impendulo ifanayo noma ukudweba usuka kuphi.

Yonke ikhona lesishena evulekile liba ukugoba. Umugqa omfushane kakhulu ukuba ubambe izigoba zawo uyakutshela, nobude obudingekayo.

## Goba iflange yomphetho

1. Chofoza umphetho oqondile wobuso obuphezulu noma obuphansi beshidi (imiphetho emide, hhayi eminyene).
2. Khetha {{ui:More}} › {{ui:Edge flange}}. Uma kungakhethwanga umphetho, i-PartCraft ilinda uchofoze omunye; {{key:Esc}} iyakhansela.

Iflange igoba iphuma ebusweni balowo mphetho ngokuzungeza iradiyasi yangaphakathi yeshidi, bese iqonde. Kwipaneli:

- **Ikona (°)** ngukuthi igoba kangakanani, kusukela ku-1 kuya ku-180. 90 iyiflange yesikwele.
- **Ubude (mm)** ngumlenze oqondile ngemva kokugoba.
- **Goba ngolunye uhlangothi** igoba isuka ebusweni obunye (phansi esikhundleni sokuphezulu).
- **Ukushintshwa ekuqaleni** nokuthi **Ukushintshwa ekugcineni** kufinyeza iflange kusuka emaphethelweni womphetho.
- **Ukuphumuza ukugoba**: lapho kushintshwa umphetho, kusikwa isilotha esiseduze kweshidi ukuze ukugoba kungadweshuli insimbi lapho. **Ububanzi bokuphumuza** bumisa ububanzi besilotha; ukujula kwayo kungu-iradiyasi yokugoba kanye nobukhulu. Khetha **Lutho** ukuze ushiye ikhona lingasikiwe.

Ukushintsha umphetho kamuva, cindezela {{ui:Pick}} kwipaneli bese uchofoza omunye.

:::tip
Sebenzisa amapharamitha obukhulu neradiyasi (bheka [Amapharamitha nezibalo](topic:parameters)) ukuze ushintsho lwegeyji lubuyekeze ama-flange onke ngesikhathi esisodwa.
:::

## Yilinganise

Zombili izipaneli ziphela nge-**Iphethini eyisicaba**. Cindezela {{ui:Lay flat}}:

- Ukubuka kuqala kukhombisa ishidi eliguqukile, nomugqa wephakathi wokugoba ngamunye udashiwe.
- **Usayizi** ne-**Indawo** yesampula eyisicaba.
- Ukugoba ngakunye kudwetshwe nendlela yakho (**phezulu** noma **phansi**, kubonwa kusuka ohlangothini lwesikethi seflange yesisekelo), ikona neradiyasi yangaphakathi.

Ukugoba ngakunye kuthatha ubude bongqimba olungathathi hlangothi lweshidi kuwo, i-**bend allowance**: ikona (ngama-radian) × (iradiyasi yangaphakathi + K-factor × ubukhulu). Ngakho ukugoba kwe-90° kweshidi lama-2 mm, neradiyasi engu-2 mm ne-K-factor engu-0.44 kwengeza i-4.52 mm yeshidi elicabile.

Kupuleti eliyisicaba, izimbobo, izinsika nezinciphisi zokugoba zibonakala ephethini eyisicaba lapho zikhona ngempela, kubandakanya izimbobo ezidlula kuflange.

Ukusika izinto eziningi, cindezela {{ui:Nest on sheets…}} ngaphansi kwephethini eyisicaba: bheka [Hlela izingxenye ezicabile ezishidini](topic:nest-flat-parts). Iflange yesisekelo egobile ilinganiswa ibe yirektangela eyodwa: ubude bayo obuthuthukisiwe × ukujula kwayo, nomugqa wokugoba ngakunye ekhoneni.

{{ui:Save DXF}} ilondoloza iphethini eyisicaba yelaser, ipontshi noma i-waterjet, ngamamilimitha:

- umbandela ongqimbeni **OUTLINE**, njengemigqa, imimnsalo nezindilinga;
- imigqa yokugoba ongqimbeni **BEND**, edashiwe;
- inothi ekugobeni ngakunye ongqimbeni **BEND_NOTES**, njengo "UP 90° R2".

Shintsha noma yini bese iphethini eyisicaba iyanyamalala; cindezela {{ui:Lay flat}} futhi ukuze uthole entsha.

:::note
Hlola i-K-factor nomkhiqizi wakho ngaphambi kokusika: ubude beshidi elicabile luncike kuyo, futhi luyahluka ngezinto, ubukhulu nezinsimbi zokusebenza.
:::

## Imilayezo

- **Insimbi yeshidi idinga iflange yesisekelo ngaphambi kwayo** — iflange yomphetho yengezwe ngaphambi kwanoma yiliphi iflange yesisekelo. Yehlisela ngaphansi kwesisekelo, noma engeza iflange yesisekelo kuqala.
- **Iflange yomphetho idinga umphetho oqondile** — ama-flange agoba emigqeni kuphela; imiphetho egobile ayikwazi ukuwamukela okwamanje.
- **Lowo mphetho awusebusweni bobukhulu beshidi** — umphetho ungowobuso obungakhi phezulu noma phansi kweshidi (isibonelo udonga lwesimbobo). Khetha umphetho webuso eliphezulu noma elingezansi.
- **Ukushintshwa akushiyi lutho womphetho** — ukushintshwa kwombili kwenza umphetho wonke noma ngaphezulu.
- **Ama-flange omphetho ku-flange yesisekelo egobile akakwazi ukulinganiswa okwamanje** — qala ngepuleti eliyisicaba bese ugoba konke phezulu ngama-flange omphetho, avulwa.
- **Izinsika nezimbobo ezenziwe ngemva kwe-flange yesisekelo egobile akukakabonakali ephethini yayo eyisicaba** — iphethini eyisicaba yephrofayili egobile iyirektangela yayo ethuthukisiwe kuphela.
