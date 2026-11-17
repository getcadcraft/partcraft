---
title: Pööratud detaili pööramine
summary: Visanda pool profiilist keskjoone kõrvale, pööra see ümaraks detailiks, vali telg ja nurk ning kasuta pööratud lõiget soonte jaoks.
keywords: pööramine, pööratud liide, pööratud lõige, pööratud detail, treipink, võll, telg, keskjoon, soon, nurk, pöörde lõige
from: 593b6929
---

{{ui:Revolve}} pöörab profiili ümber telje, nagu detail treipingil: võllid, rihmarattad, flantsid, nupud. {{ui:Revolved cut}} (elementide grupi menüüs {{ui:More}}) pöörab profiili materjali eemaldamiseks, soonte ja süvendite jaoks.

## Pööra astmeline võll

1. Visanda **Esitasandil**.
2. Vajuta {{key:N}} jaoks {{ui:Centerline}}. Alusta nullpunktist ja klõpsa punkti otse paremal, näiteks 100 mm kaugusel. See on telg. See on katkendjooneline: konstruktsioonigeomeetria ei ole osa profiilist.
3. Vajuta {{key:L}} jaoks Joon. Joonista **pool** profiilist keskjoone kohale ühe suletud ahelana: alusta keskjoonel, mine üles, astu edasi ja tule tagasi keskjoonele ning siis mööda seda algpunkti. Otsad peavad kokku saama: ahel peab olema suletud.
4. Mõõtmesta raadiused (kõrgused keskjoonest) ja pikkused. Keskjoonest 10 kõrgus teeb läbimõõduks 20.
5. Vali {{ui:Exit}}.
6. Vali {{ui:Revolve}}. Võll ilmub, täispöörde võrra.

Profiil peab jääma telje ühele küljele. Kui see ristub teljega, ütleb PartCraft: „Profiil ristub teljega. Hoia see keskjoone ühel küljel.“ Profiili serv võib asuda teljel.

## Sätted

| Säte | Mida see teeb | Vaikimisi |
|---|---|---|
| **Toiming** | Liide (lisab materjali), Lõige (eemaldab materjali), Ühisosa (säilitab kattuva osa) või Uus keha | Liide {{ui:Revolve}} jaoks, Lõige {{ui:More}} › {{ui:Revolved cut}} jaoks |
| **Nurk (°)** | Kui palju pöörata, alates just üle 0 kuni 360 | 360 |
| **Telg** | Esimene keskjoon või mis tahes joon või keskjoon visandis, loetletud kui „Keskjoon 1 (l1)“ või „Joon 3 (l3)“ | Esimene keskjoon |

Osaline nurk teeb kiilu, mis on pööratud visandi tasandist ühes suunas.

Kui visandil pole keskjoont ja jätad **Telg** väärtuseks Esimene keskjoon, ütleb PartCraft: „Joonista visandisse keskjoon (konstruktsioonijoon), mille ümber pöörata.“ Võid ka valida profiili tahke joone telje.

## Lõika soon

1. Kui võll on ehitatud, ava uus visand **Esitasandil** (sama tasand, mis võlli visandil).
2. Joonista keskjoon samale teljele: alusta nullpunktist ja hoia see horisontaalselt, nii et see saab H-seose, või sisesta see **Lisa koordinaatide järgi** (näiteks `0, 0` kuni `100, 0`). Uus visand ei saa klammerduda teise visandi joontele.
3. Joonista väike suletud ristkülik, mis kattub võlli servaga soone kohas.
4. Vali {{ui:Exit}}, seejärel {{ui:More}} › {{ui:Revolved cut}}.

## Pööratud tahud koostes

Pööramisel on telg, mida teised elemendid ja koosted saavad kasutada:

- **Ringmassiiv** kasutab vaikimisi viimase pöörde telge (vt [Massiivid ja peegeldus](topic:patterns-mirror));
- koosus algab pööramisega tehtud tahkude vaheline liide **pöörleva** liitena ning **Tsentreeri** pakub „Revolve1 telg“ (vt [Koosta koost](topic:build-assembly)).

## Tõelised kõverad ja tahud

PartCraft ehitab pööramise võrgutuumaga (olekuriba märk ütleb „Mesh kernel“): ümarad kujud on lamedad tahud, vaikimisi 64 pöörde kohta, ja mahud on veidi alla tõelise väärtuse (umbes 0.16 % 64 juures). Vaade ning STL-, 3MF- ja STEP-eksport koosnevad nendest tahkudest: sea **Kõverad** (klõpsa tühjal alal, siis paremal paneelil) väärtuseks Peen (128) või Väga peen (256) sujuvamate jaoks. Tõelised silindrid, koonused ja toroidid nõuavad täpset tuuma: selles versioonis veel ei ehitata. Vt [Võrgutuum](topic:solid-kernels).
