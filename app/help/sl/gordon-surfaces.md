---
title: Ploskve prek mreže krivulj (Gordonova ploskev)
summary: Ustvarite eno gladko ploskev skozi mrežo profilnih in vodilnih krivulj, narisanih v skicah ali vzetih iz robov modela, jo zaprite v telo, ko so profili zaprti, ter kaj je natančno, kaj je prilagojeno in sporočila, ko se mreža ne prilega.
keywords: tangenta, g1, tangentna zveznost, zrcalna ravnina, gordonova ploskev, mreža krivulj, robna ploskev, mrežna ploskev, profili, vodila, vodilne krivulje, prehod z vodili, vodilne tirnice, lupina, transfinitno, coons, B-zlepkasta ploskev, prosto oblikovana ploskev
from: ada3cb8b
---

:::note
**Še ni izdelano v tej različici.** Gordonova ploskev potrebuje natančno geometrijsko jedro, ki ga ta različica PartCraft nima: vsak del gradi z mrežnim jedrom. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj storiti namesto tega. Preostanek strani opisuje, kako deluje z natančnim jedrom.
:::

**Gordonova ploskev** je ena ploskev, ki poteka skozi vsako krivuljo mreže: niz **profilov** v eno smer in niz **vodil** v drugo, ki se križata kot niti mreže. Tako oblikujete trup, blatnik ali ročaj iz nekaj prečnih krivulj, ki jih neposredno nadzorujete. Potrebuje **natančno jedro** (glejte [Mrežno jedro](topic:solid-kernels)).

## Narišite mrežo

1. Narišite **profile**: dve ali več krivulj, ki tečeta druga ob drugi, na primer prerezi na vzporednih ravninah. Delujejo črte, loki, krogi in zlepki; veriga krivulj, spojenih od konca do konca, pa šteje kot ena krivulja.
2. Narišite **vodila**: dve ali več krivulj, ki tečejo čez profile. Vsako vodilo mora vsak profil seči enkrat, vsak profil pa vsako vodilo enkrat.
3. Poskrbite, da se krivulje res stikajo. Narišite skico vodila tako, da njegova krivulja poteka skozi točke profilov (prilepite na projicirane točke ali vnesite koordinate). Mreža sprejme reže do **Toleranca** (na začetku 0.01 mm).

Ena skica lahko vsebuje več krivulj: vsaka ločena veriga v njej je svoja krivulja. Tako lahko na primer vsa vodila narišete v eni skici na zgornji ravnini.

## Izdelajte ploskev

1. V skupini Značilke izberite {{ui:Več}}, nato {{ui:Gordonova ploskev}}.
2. PartCraft vzame skice, ki jih še nihče ne uporablja: tiste na ravninah, vzporednih s prvo, postanejo **profili**, druge **vodila**. Preverite seznam na desni in vsako skico nastavite na **Profili**, **Vodila** ali **Ni v uporabi**.
3. Če želite uporabiti robove dela, kliknite **Izberi robove kot profile** (ali **kot vodila**), kliknite robove v pogledu, nato pritisnite Esc.

Rezultat je **telo ploskve**. {{ui:Odebeli}} ga spremeni v telo, {{ui:Zašij}} ga zašije na druge ploskve, {{ui:Prirezi površino}} pa ga odreže.

### Zaprite v telo

Kadar so profili zaprte krivulje (krogi, zaprti zlepki, zaprte verige) in prvi ter zadnji profil ležita vsak v svoji ravnini, označite **Zapri v telo**. Konca se pokrijeta z ravnimi ploskvami, zaprta oblika pa se združi, odreže, preseka ali postane novo telo kot katera koli druga značilka. Tako naredite prehod, ki sledi vodilnim krivuljam. Enako deluje z zaprtimi vodili.

## Tangenta na ravnino ob robu

Gordonova ploskev poteka skozi svoje krivulje, sama pa se ne ujema z nagibom tistega, na kar naleti. Če želite, da ob robu zapusti ravnino **tangentno** (G1), na primer zrcalno ravnino, da se zrcalna kopija pridruži brez preloma, ali ravno ploskev, iz katere raste:

1. Izberite značilko Gordon. Pod **Tangenta na** izberite ravnino v {{ui:Dodaj ravnino …}} (Sprednja, Zgornja, Desna ali referenčna ravnina) ali izberite ravno ploskev v pogledu in pritisnite {{ui:Dodaj izbrano ravno ploskev}}.
2. PartCraft poišče robno krivuljo mreže, ki leži v tej ravnini, in ploskev jo zapusti tangentno na ravnino.

Če ravnina vsebuje dve robni krivulji (tla pod obema koncema), jo dodajte dvakrat: vsaka kopija vzame naslednjo. Do štiri ravnine, po ena na rob.

Poročilo pove, ob kateri krivulji je vsaka ravnina naredila tangento, in največji kot, pod katerim je ploskev prej naletela na to ravnino. Vodila, ki že zapuščajo to krivuljo tangentno na ravnino, se upoštevajo natančno. Vodila, ki se od nje dvigajo, se v ozkem pasu ob robu upognejo, število „sledi vsaki krivulji znotraj“ v poročilu pa pove, za koliko: za natančno ujemanje narišite vodila, ki ob robu zapuščajo ploskev ravno.

## Kaj je natančno in kaj prilagojeno

Plošča pove, kateri od teh primerov velja in kako daleč ploskev odstopa od vaših krivulj.

- **Natančno**: ko je vsaka krivulja polinomska (črte, zlepki in njihove verige) in vodila sekajo vse profile pri istih parametrih, je ploskev natančno Gordonova ploskev teh krivulj. Mreža izoparametričnih krivulj, izrezana iz bikubične ploskve, vrne to ploskev, štiri ravne črte pa dajo ravno ali zvito (bilinearno) zaplato.
- **Prilagojeno**: loki, krogi in robovi dela niso polinomski, krivulje, ki se sekajo pri različnih parametrih, pa je treba ponovno časovno uskladiti, da se presečišča poravnajo. Te krivulje se prilagodijo s kubičnimi B-zlepki znotraj ene desetmilijonke velikosti mreže (približno 0.00001 mm za del 100 mm). Valjasta zaplata iz lokov in črt ostane znotraj 0.00001 mm od pravega valja.

Med krivuljami je ploskev tista, ki jo da metoda: profili, zmešani čez, plus vodila, zmešana čez, minus zmešanje njunih presečišč. Gladka je povsod, razen tam, kjer ima krivulja ostro oglišče. Kjer dve Gordonovi ploskvi delita robno krivuljo, se stikata rob ob robu (G0), ne tangentno.

## Ko se mreža ne prilega

| Sporočilo | Kaj storiti |
|---|---|
| „… se ne srečata: sta 0.4 mm narazen“ | Naredite, da se ta profil in vodilo sekata, ali povečajte Toleranco |
| „… se sreča … 2-krat“ | Vodilo sme vsak profil seči le enkrat: razdelite zankasto krivuljo ali uporabite manj profilov |
| „… v drugačnem vrstnem redu“ ali „se prepogne sama vase“ | Dve vodili se križata (ali dva profila). Družini morata teči druga ob drugi |
| „vsaj dva profila in dve vodili“ | Dodajte krivulje ali več skic nastavite na Profili ali Vodila |
| „mešate odprte in zaprte krivulje“ | Vse profile naredite odprte ali vse zaprte (enako za vodila) |
| „Konec … ni raven, zato ga ni mogoče pokriti“ | Prvi in zadnji zaprti profil narišite vsakega v svoji ravnini ali pustite Zapri v telo izklopljeno |

## Omejitve

- Ena B-zlepkasta ploskev na mrežo: brez tangentne zveznosti G1 ali G2 na sosednje ploskve.
- Šiv zaprte mreže pri prvem vodilu je spojen rob ob robu, ne tangentno.
- Sama značilka Prehod nima vodilnih tirnic; namesto tega uporabite Gordonovo ploskev, zaprto v telo.
- Zelo vijugaste krivulje ali križanja, zelo neenakomerno razporejena vzdolž ene krivulje v primerjavi z drugo, lahko za prilagajanje potrebujejo preveč točk; značilka to tedaj pove.
