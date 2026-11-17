---
title: Massiivid ja peegeldus
summary: Korda elemente reas funktsiooniga Lineaarne, pööra telje ümber funktsiooniga Ringjas ja kopeeri elemente või kogu keha tasandi üle funktsiooniga Peegeldus.
keywords: massiiv, lineaarne massiiv, ringmassiiv, polaarmassiiv, massiiv, peegeldus, sümmeetriline, kopeeri elemendid, poltide ring, algelement, peegelda keha
from: 702e9edb
---

Massiivid ja peegeldused kopeerivad juba loodud elemente. Koopiad on osa ajaloost: muuda originaali ja koopiad järgivad seda.

Kopeeritakse see, mida element teeb: lisandmaterjali lisav tõusu massiiv lisab materjali, lõige või auk eemaldab selle. Massiive saab uuesti massiivida ja peegeldada. Imporditud STEP-tahket saab kopeerida; ümardusi, faase ja kestasid ei saa.

## Lineaarne massiiv

1. Vali ajaloos kopeeritav element (näiteks Auk või Lõige). Kui midagi pole valitud, kasutatakse viimast tahkiselementi.
2. Vali {{ui:Linear}}. Ilmub kolm koopiat, mis asuvad X-telje suunas 20 mm kaugusel.
3. Parempoolsel paneelil sea:

| Säte | Mida see teeb | Vaikimisi |
|---|---|---|
| **Kopeeritavad elemendid** | Märgi iga kopeeritav element. Loendis on ainult massiivist kõrgemal olevad elemendid | Valitud element |
| **Suund** | X-telg, Y-telg, Z-telg, mis tahes varasema visandi joon või keskjoon, pöörde telg või valitud serv | X-telg |
| **Vahe (mm)** | Naabrite vaheline kaugus | 20 |
| **Arv** | Koopiate koguarv, **sh originaal** (1 kuni 1000) | 3 |
| **Pööra suund ümber** | Koopiad lähevad vastassuunas | Väljas |

### Serv suunaks

1. Klõpsa vaates detaili sirgel servel. Paneelil on kirjas **Serv** ja näidatud selle pikkus.
2. Vali {{ui:Linear}}: massiiv kulgeb mööda seda serva.

Või vali massiiv, vali serv ja vali **Suund** väärtuseks „Valitud serv (kasuta just nüüd valitud serva)“. Valitud serv on ruumis fikseeritud: see ei järgi hilisemaid muudatusi. Visandi joon järgib oma visandit.

## Ringmassiiv

1. Vali kopeeritav element (näiteks üks auk ketta serva lähedal).
2. Vali {{ui:Circular}}. Ilmub kuus koopiat, mis on võrdsete vahedega kogu ringi ulatuses.
3. Sea:

| Säte | Mida see teeb | Vaikimisi |
|---|---|---|
| **Kopeeritavad elemendid** | Nagu lineaarses massiivis | Valitud element |
| **Telg** | X-, Y- või Z-telg, visandi joon, pöörde telg või valitud serv | Viimase pöörde telg, kui see on, muidu Y-telg |
| **Nurk (°)** | 360 jaotab koopiad kogu ringi ulatuses võrdselt. Väiksem väärtus laotab need sellele nurgale, esimene ja viimane otstes | 360 |
| **Arv** | Koopiate koguarv, sh originaal | 6 |
| **Pööra suund ümber** | Keerab vastassuunas | Väljas |

Maailma teljed läbivad nullpunkti. Kui ketas ei ole nullpunkti keskel, kasuta visandi keskjoont või pöörde telge.

### Näide: laipa kaheksa poldiauku

1. Pööra laip (vt [Pööratud detaili pööramine](topic:revolve)) Y-telje ümber.
2. Visanda laibal lameda ülemise tahu peale, pane üks punkt poltide ringile ja tee auk.
3. Vali auk ja vali {{ui:Circular}}. Telg on juba „Revolve1 telg“.
4. Sea **Arv** väärtuseks `8`.

## Peegeldus

1. Vali ajaloos peegeldatav element või ära vali midagi, et peegeldada **seni ehitatud kogu keha**.
2. Vali {{ui:Mirror}}. See peegeldab üle **Parema tasandi** (Right plane).

Kui soovid kogu keha peegeldada detaili tahu üle, klõpsa enne sellel lamedal tahul ja vali seejärel {{ui:Mirror}}. (Tahu klõpsamine tühistab ajaloos valiku, nii et peegeldatakse alati kogu keha.)

Sätted paremal paneelil:

- **Peegelda**: märgi **Kogu keha (seni ehitatud kujul)** või tühjenda see ja märgi kopeeritavad elemendid.
- **Peegeldustasand**: Eesmine tasand, Ülemine tasand, Parem tasand, tahk, mida ta praegu kasutab („Extrude1 tahk“ või „Fikseeritud tasand“), või „Nüüd valitud tahk“. Valitud elementide peegeldamiseks tahu üle: vali ajaloos Mirror, klõpsa vaates tahul ja vali „Nüüd valitud tahk“.

Kui peegeldad kogu keha tahu üle, detail kahekordistub, näiteks pool konsoolist muutub terveks konsooliks.

## Teated

- „Ehita esmalt kopeeritav element.“ või „Ehita esmalt tahkis.“ Kopeerida pole veel midagi tahket.
- „Vali kopeeritavad elemendid.“ Kõik **Kopeeritavad elemendid** kastid on tühjendatud.
- „Extrude2 ei sisalda kopeeritavat tahkist.“ See element ebaõnnestus või on välja lülitatud.
- „Fillet1 muudab keha servi või seinu; seda ei saa kopeerida. Kopeeri tahkiseid tegevaid elemente (väljapressimised, pööramised, augud, imporditud osad).“ Ümardusi, faase ja kestasid ei saa massiivida ega peegeldada; kõigepealt massiivi, siis ümarda.
- „Kehal pole veel midagi peegeldada.“

:::note
Massiivi koopiaid ei saa ükshaaval vahele jätta ja massiiv ei saa järgida visandi kõverat. Visandi massiive ja peegeldusi pole veel ehitatud: korda visandi geomeetriat käsitsi või funktsiooniga **Lisa koordinaatide järgi**.
:::
