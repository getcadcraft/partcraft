---
title: Viitegeomeetria: tasandid, teljed ja punktid
summary: Tee tasandeid tahust nihutatult, nurga all, läbi kolme punkti, keskelt, silindrile puutujana, serva suhtes risti või läbi serva ja punkti; teljed; punktid serva keskel, lõikepunktides ja tasandite nurkades; visand nende peal ning kasutamine pöörde telgedena, mustrite suundadena ja peegelduse tasanditena.
keywords: andmik, objektide vahel, keskpunkt, lõikepunkt, serva ja punkti kaudu tasand, viitetasand, töötasand, konstruktsioonitasand, andmiku tasand, nihutatud tasand, nurga all tasand, keskmine tasand, puutuv tasand, viitetelg, konstruktsioonitelg, andmiku telg, viitepunkt, töö punkt, visand tasandil
from: e7eb6fc1
---

Viitegeomeetria on tellingud, millele elemendid ehitatakse: **tasand**, millele joonistada seal, kus tahku ei ole, **telg**, mille ümber pöörata või mustrit teha, ning **punkt**, kuhu väljapressimine peatada. Sellel endal ei ole materjali. Tasandid kuvatakse vaates heledate ruutudena, teljed katkendjoontena ja punktid väikeste ristidena. Kõik kolm lisanduvad ajalukku ja järgivad seda, millest nad tehti, kui muudad eelnevat mõõtu.

Need asuvad Funktsioonide rühma menüüs {{ui:Veel}}: {{ui:Tasand}}, {{ui:Telg}}, {{ui:Punkt}}.

## Tasandi tegemine

1. Klõpsa tasast tahku või ajaloos baastasandit, et sellest alustada (valikuline).
2. Vali {{ui:Veel}}, seejärel {{ui:Tasand}}. Tasand algab nihutatud tasandina, mis on detaili suurusest 20 % kaugusel valitust (või ülemisest tasandist).
3. Vali paremas paneelis **Tüüp** ja selle viited:

| Tüüp | Viited | Arvud |
|---|---|---|
| Nihutatud tasandist või tahust | **Tasandist** | **Kaugus (mm)**, negatiivne teisele poolele |
| Nurga all, läbi serva või telje | **Tasandist**, **Pöörle ümber** (maailmatelg, telgelement või valitud sirge serv) | **Nurk (°)** |
| Läbi kolme punkti | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Keskmine tasand kahe vahel | **Esimene tasand**, **Teine tasand** (paralleelsed: poolel teel; kokkujooksvad: tasand, mis poolitab nurga) | — |
| Puutuja silindrile | **Silinder** (silindriline tahk), **Lähim punkt** (millisel pool) | — |
| Serva suhtes risti punktis | **Serv**, **Punktis** (tasand läbib serva punkti, mis on sellele lähim, ja ka punkti) | — |
| Läbi serva ja punkti | **Sirge serv** (või telg), **Läbi punkti** | — |
| Serva suhtes risti keskel | **Serv** (poolel teel selle pikkusest, sellega risti seal) või ilma servata **Punkt 1** ja **Punkt 2** (tasand nende vahel poolel teel) | — |

Igal viitel on nupp **Vali**: vali see ja klõpsa vaates. Tasandi pesa võtab baastasandi, viitetasandi või tasase tahu; punkti pesa võtab serva otsa (klõpsa selle otsa lähedale), punktielemendi või punkti tahul; serva pesa võtab serva. {{key:Esc}} katkestab valimise. **Pööra normaali** pöörab tasandi ümber (mis suunas sellel olev visand näeb).

Selles versioonis annab pesa, mis vajab serva või silindrilist tahku (Puutuja silindrile ja serva pesad), vastuseks „pole veel ehitatud“. Kasuta selle asemel punkte või telge.

## Visandi tegemine tasandil

Vali tasand (ajaloos või klõpsates vaates selle ruutu) ja vali {{ui:Visand}} või paneelis **Visand sellel**. Visand järgib tasandit: kui muudad tasandi kaugust, liiguvad visand ja kõik sellel olevad elemendid kaasa.

## Teljed ja punktid

- {{ui:Telg}}: läbi kahe punkti, silindri või koonuse telg, kohas, kus kaks tasandit kohtuvad, mööda sirget serva (või ringserva telg) või risti tahule läbi punkti.
- {{ui:Punkt}}: koordinaatides, tipus või visandipunktis, ringserva keskmes ning lisaks „objektide vahelised“ punktid:

| Punkti tüüp | Viited |
|---|---|
| Serva keskpunkt (või kahe punkti vahel) | **Serv** (poolel teel selle pikkusest, kehtib ka kaarte ja kõverate kohta) või ilma servata **Punkt 1** ja **Punkt 2** |
| Kus serv või telg kohtub tahu või tasandiga | **Serv** (sirge või kõver) või telg ja **Kohtub tasandiga** (tasand või tasane tahk) või **Või tahk** (tasane tahk või silinder). Ring lõikub tasandiga kaks korda ja sirge läbib silindrit kaks korda: **Teine lõikepunkt** võtab teise |
| Kus kolm tasandit kohtuvad | **Esimene**, **Teine** ja **Kolmas tasand** (tasandid või tasased tahud) |

Igaüks ebaõnnestub lihtsa sõnumiga, kui viited ei sobi: joon on tasandiga paralleelne, joon ei jõua silindrini, serv ei ulatu tasandini, kolm tasandit ei kohtu ühes punktis või punkt asub joonel, millega peaks tasandit fikseerima.

Kasuta neid teistes elementides:

| Kus | Kuidas |
|---|---|
| Pööramine | **Telg**: vali telgelement nimekirjast (see peab asuma visandi tasandil) |
| Ringmuster | **Telg**: telgelement |
| Lineaarmuster | **Suund**: telgelement või tasand (selle normaal) |
| Peegeldus | **Peegeldustasand**: viitetasand |
| Väljapressimine | **Lõpp**: Kuni tahuni või tasandini, Kuni tipuni (punktielement). Selles versioonis veel ehitamata (vajab täpset tuuma) |
| Kalle | **Neutraaltasand** |

## Kui viide on kadunud

Tasand, mis on tehtud tahust, mida enam ei ole, ebaõnnestub sõnumiga, mis seda nimetab, näiteks „Tahk, millel see asub, on elemendist Extrude1 kadunud.“ Seda ei liigutata kunagi teisele tahule. Sellel olevad visandid ja elemendid on märgitud „pole ehitatud“, kuni valid uue viite; ülejäänud detail jääb samaks.

:::note
Selles versioonis ehitatakse kõik detailid võrgutuumaga, mis teeb tasandid, teljed ja punktid baastasanditest, väljapressimise või pööramise abil tehtud tasastest tahkudest, visandipunktidest, koordinaatidest ja muudest viiteelementidest. Kõik, mis vajab serva, serva otsa või kumerat tahku, vajab täpset tuuma: selles versioonis pole see veel ehitatud („Kasutab detaili tahku või serva, mida leiab ainult täpne tuum: pole selles versioonis veel ehitatud.“).
:::
