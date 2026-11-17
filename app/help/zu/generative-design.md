---
title: Khulisa isimo ngemithwalo (Generative)
summary: Khetha ubuso obubanjiwe nobulayishwe, izindawo ezigcinwa nezigcinwa zicwebile, ama-ivolumu anjongiwe nezinto zokwakha, bese uzikhiqiza: izimo eziqinile kakhulu ezitholakala ngevolumu ngayinye, ezihlolwa futhi njengezisekelo, ziqhathaniswe ethebuleni bese ziphakanyiselwa nge-STL, STEP noma ingxenye entsha.
keywords: ukwakha okungeziwe, ukulungiswa kwetopology, SIMP, ukukhanya, lattice, isimo sezinto eziphilayo, imiphumela, qhathanisa, ubuningi, inani le-volumu, gcina, gcina ngaphakathi, isithiyo, gcina ngaphandle, indawo yokwakha, usayizi omncane wesakhiwo, STL, ukuphrinta ngo-3D
from: 5b91fa8e
---

I-workspace ye-Generative isusa izinto ezingadingeki imithwalo. Uthi ingxenye ibanjwe kuphi futhi ilayishwe kuphi, yini okufanele ihlale ibambekile nokufanele ihlale ingenalutho; i-PartCraft ithola isimo esiqinile kakhulu ngevolumu ngayinye enjongiwe (**topology optimisation**), siphinde sihlolwe njengesisekelo nezinto zangempela, bese imiphumela ibonakala ndawonye. Isebenza ezinhlangothini ezibizwa ngamagama ikhestelo le-mesh elinikeza ingxenye (bheka [Ikhestelo le-mesh](topic:solid-kernels)).

Khetha **Generative** kubhokisi le-**Workspace**. Ingxenye yakho ayishintshi; isifundo sigcinwa ngaphakathi kwefayela lengxenye.

## Setha isifundo

1. Cindezela **New study** ephaneli ngakwesokudla.
2. **Space**: *The part as it is* isusa izinto engxenyeni yakho; *A box around the part* ikhulisa isimo ngaphakathi kwebhokisi elikhulu kunengxenye ngo-**Box margin**.
3. **Element size**: yishiye ingenalutho ukuze kube usayizi ozenzakalelayo (cishe amaqembu ama-8,000), noma uthayiphe owodwa. Usayizi omncane unika izimo ezinemininingwane eminingi kodwa uthatha isikhathi eside.
4. **Minimum member**: izinto ezincane kakhulu kunalokhu cishe kabili azakhiwa. Ukungabi nalutho kusho amaseli ayisigamu nesisodwa.
5. Chofoza okungu-1 kuya kwayisithupha **Target volumes** (ingxenye yesikhala sokwakha isimo esingagcwalisa) nezinto ezingu-1 kuya kwezine **Materials**. Ivolumu ngayinye ikhiqizwa kanye; ngayinye yezinto ihlolwa ngalowo mumo (isimo esiqinile kakhulu aseshintshi ngenxa yezinto, kodwa ubuningi bayo, uxinzelelo kanye nesilinganiso sokuphepha kuyashintsha).

## Izinhloso

- {{ui:Fixed}}: chofoza ubuso obubanjiwe. **Frictionless face** ohlwini lwe-**Add** lwephaneli ibamba ubuso kuphela ngokwawo (isebenzise ezindizeni zokulingana).
- {{ui:Force}}: chofoza ubuso obulayishwe, bese uthayipha amandla aphelele bese ukhetha indlela yawo ephaneli. **Pressure** isohlwini lwe-**Add**.
- {{ui:Preserve}}: chofoza ubuso okufanele izindawo zalo ezizungezile zihlale ziqinile, bese usetha ukuthi zijule kangakanani (**Keep solid within**) — isibonelo ezungeze izimbobo zamabhawodi. Ubuso obubanjiwe noma obulayishwe buhlala bugcinwa njalo.
- {{ui:Obstacle}}: chofoza ubuso okufanele izindawo zalo ezizungezile zihlale zingenalutho, bese usetha ukuthi kude kangakanani (**Keep empty within**) — indawo yesiphambano noma ithuluzi.

Cindezela **Done picking** noma {{key:Esc}} ngemva kokuchofoza ubuso. Imibala eluhlaza nebomvu ikhombisa izindawo.

## Khiqiza bese uqhathanisa

Cindezela {{ui:Generate}}. Iphaneli ikhombisa intuthuko nesikhathi esisele; **Stop** iyayiphelisa. Umphumela ngamunye uvela ethebuleni le-**Outcomes**: ivolumu enjongiwe, into, **mass**, **largest stress**, **largest displacement** kanye **safety factor** (yield ÷ stress), konke ngokuphinda kuxazulule isimo esiphelile njengamaseli aqinile nezinto zangempela.

Khetha umphumela ukuze uwubone embonweni (ingxenye iyafihlwa; ticka **Show the part through it** ukuze ubone kokubili). Ngaphansi kwethebula: ukuthi kuthathe izinyathelo ezingaki nokuthi kuzinze yini, ukuqina kwawo njengesisekelo ngokumelene nesibalo somlungisi, nobuso bawo.

## Sebenzisa umphumela

- **STL**: imeshi yonxantathu evaliwe, ilungele ukuphrinta nge-3D.
- **STEP (faceted)**: ubuso obufanayo njengesisekelo se-STEP esenziwe ngobuso obuqondile.
- **New part file**: ingxenye ye-PartCraft lapho isici sayo esisodwa umphumela njengesisekelo esiphuthunjwe. Yivule ukuze uhlele kuwo, usike izimbobo noma uhlole ku-Simulation. Yenziwe ngobuso obuqondile (izinkulungwane zobuso obuqondile), hhayi isimo esihleleka.
- **Add to this part** ihlanganisa umphumela engxenyeni; ivulwa kuphela ebhokisini lokwakha (ngengxenye ngokwayo njengesikhala, umphumela uhlala ngaphakathi engxenyeni).

**New part file** no **Add to this part** akukakwakhiwa kulolu hlobo: umphumela uba yisisekelo esiphuthunjwe, okudinga ikhestelo eliqondile. Ukulandwa kwe-STL nemifaniswano ye-STEP (faceted) kuyasebenza.

## Ukwethemba kangakanani

- Ilungisa **ukuqina** ngevolumu enikeziwe. Ayikho imikhawulo yokucindezeleka nemithetho yokukhiqiza (okuphuma, izindlela zokusila, usayizi omncane wezimbobo) okwamanje: hlola umphumela okhethiwe ku-[Ukulingisa](topic:simulation) bese uguqula.
- Izinto ezibhityile ezinamaseli amabili noma amathathu ububanzi ziyisilinganiso: sebenzisa usayizi omncane weseli ezingxenyeni ezincane.
- Indlela iyi-SIMP enesihlungi sokuminyana, ukuprojekta kothenjwa nokuvuselelwa kwezinqumo ezilungile; ukucindezeleka nokuguqukela okubikwayo kwalokho okuphumayo njengamaseli, okuqinisekile kodwa okungakahlelwa emakhoneni abukhali.

## Okuhlobene

- [Hlola ukucindezeleka nokuguquka (Ukulingisa)](topic:simulation)
- [Hlinzeka ngokuphrinta, i-STEP ne-DXF](topic:export-files)
- [Okungakakwakhiwa](topic:not-built-yet)
