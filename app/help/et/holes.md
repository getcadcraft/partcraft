---
title: Augude ja loenduriga aukude puurimine visandipunktides
summary: Pane visandis tahule punktid, tee lihtsad, loenduriga, vastuvaagiga või keermestatud (ISO meetriline) augud igas punktis, määra läbimõõt ja sügavus ning paranda augud, mis puuritakse valesti.
keywords: auk, augunõustaja, puurimine, modelleeritud keere, 3D-printimine, loendur, loenduriga, vastuvaak, keermestatud auk, keere, keermepuur, meetriline keere, M6, läbi kogu, pimeauk, poltauk, punktid, augu keskmed
from: 8e1eef83
---

{{ui:Auk}} puurib ühe augu visandi igasse vabasse punkti. Vaba punkt on see, mis on tehtud punkti tööriistaga, mitte joone lõpp ega ringi keskpunkt.

## Puuri augud tahku

1. Klõpsa tasasel tahul, kuhu puurida, seejärel vali {{ui:Visand sellel tahul}}.
2. Vajuta {{key:P}} ja klõpsa, kuhu iga auk läheb. Mõõtmesta punktid servadest või algpunktist, kui nende asukoht on oluline (vt [Määra visand täielikult](topic:relations-dimensions)).
3. Vali {{ui:Välju}}.
4. Vali {{ui:Auk}}.

Augud lähevad detailist läbi, läbimõõt 6 mm. Parempoolne paneel näitab **Auke**: mitu tehti, „üks visandi punkti kohta“.

**Üks auk, kiiresti:** klõpsa tasasel tahul, kuhu auk läheb, ja vali parempoolsel paneelil {{ui:Auk siin}}. PartCraft lisab tahule visandi ühe punktiga, kuhu klõpsasid, ning augu detailist läbi, ühe sammuga. Sisesta kohe arv ja vajuta {{key:Enter}} selle läbimõõdu jaoks. Täpseks paigutamiseks ava uus visand ja mõõtmesta punkt.

**Milline visand kasutatakse:** just suletud või valitud visand; muidu viimane kasutamata visand, millel on vabad punktid. Kui sellist pole: „Tee kõigepealt visand punktidega, kuhu augud lähevad (Visand tahul, seejärel Punkt).“

## Sätted

| Säte | Valikud | Vaikimisi |
|---|---|---|
| **Tüüp** | Lihtne, Loendur, Vastuvaak, Keermestatud (ISO meetriline) | Lihtne |
| **Läbimõõt (mm)** | Augu läbimõõt | 6 |
| **Läbi kogu** | Märgitud: detailist täielikult läbi. Pimeaugu jaoks eemalda märge | Märgitud |
| **Sügavus (mm)** | Kuvatakse, kui Läbi kogu on eemaldatud | 10 |
| **Loenduri ⌀** | Kuvatakse loenduri korral: laiema süvendi läbimõõt | 11 |
| **Loenduri sügavus** | Kuvatakse loenduri korral | 6 |
| **Pööra suund** | Puuritakse visandi tasandi teisele poolele | Väljas |

Augud puuritakse materjali sisse, visandi tasandi suhtes risti. Pimeaugu sügavus mõõdetakse visandi tasandist; selle põhi on tasane.

## Loenduriga poltiauk

1. Tee augud ülaltoodud viisil.
2. Määra **Tüübiks** **Loendur**.
3. Määra **Läbimõõt (mm)** väärtuseks `6.6` (M6 poldi vaba mõõt), **Loenduri ⌀** väärtuseks `11` ja **Loenduri sügavus** väärtuseks `6.5`.

Loendur peab olema august laiem („Loendur peab olema august laiem.“) ja pimeaugu korral sellest madalam („Loendur peab olema august madalam.“).

## Poltide ring

Keskpunkti ümber ühtlaselt paigutatud aukude jaoks tee **üks** auk ja tee sellest muster: vali augu element ja seejärel {{ui:Ringjas}} (vt [Massiivi ja peegeldamise elemendid](topic:patterns-mirror)). Muster järgib, kui muudad augu suurust.

## Kui augud lähevad valesti

- „Visandi sellel küljel pole midagi puurida. Proovi suunda pöörata.“ Visand asub materjali kaugemal küljel. Märgi **Pööra suund**.
- „Pane visandi punktid sinna, kuhu augud lähevad (punkti tööriist), seejärel tee auk.“ Visandil pole vabu punkte. Joonte otsad ja ringide keskpunktid ei lähe arvesse.
- „Puurida pole veel midagi.“ Auk vajab tahkist. Tee kõigepealt liide.

## Augud koostudes

Igal augul on telg. Koostus võib **Keskmes** asetada liitekoha augu teljele, mis on loetletud kui „Hole1, hole 2“, nii et tihvt või poldi detail joondub sellega. Vt [Koosta koost](topic:build-assembly).

## Vastuvaagiga augud

Määra **Tüübiks** **Vastuvaak**, seejärel **Vastuvaagi ⌀** (pinnal) ja **Vastuvaagi nurk**: 90° (ISO meetrilised lameda peaga kruvid) või 82° (tolli kruvid). Võta vastuvaagi läbimõõt kruvi tootja andmetest (natuke suurem kui kruvipea läbimõõt). Koonuse tahk on paneelides nimetatud „vastuvaak“-iks.

## Keermestatud augud

Määra **Tüübiks** **Keermestatud (ISO meetriline)** ja vali **Keere**, M2 kuni M24 jäme. Auk puuritakse allolevast tabelist saadava keermepuuri suurusega (nimiläbimõõt miinus samm, puuride seeria järgi, nagu ISO 2306 loetleb 6H keerme jaoks); kasti **Läbimõõt (mm)** ei kasutata. Pimeaugu korral määrab **Keerme sügavus (mm)**, kui sügavale keere ulatub.

| Keere | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Samm | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Keermepuuri ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Keere on algul **kosmeetiline**: mudelil on puuritud auk, vaade joonistab keerme suurema läbimõõdu katkendjoontega ringidena ning jooniselehel on viide märkusena, näiteks „4× M8×1.25 - 6H, keere läbi“. STEP eksportib ainult puuritud augu.

Märgi **Modelleeritud**, et lõigata augu sisse päris spiraalkeere, 3D-printimiseks. **Vaba ruum (mm)** muudab selle igal pool nii palju suuremaks, et trükitud polt sobiks: 0.1 kuni 0.2 mm sobib enamikule printeritele. Viide lõpeb siis „(modelleeritud)“-ga. Vt [Keered võllidel ja avades, joonistatud või modelleeritud](topic:threads), mis paneb keered ka võllidele.

:::note
Vastupuuritud augud, tolli keered ja torukeered pole veel ehitatud.
:::
