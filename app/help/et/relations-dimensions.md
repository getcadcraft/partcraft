---
title: Visandi täielik määramine seostega ja mõõtmetega
summary: Lisa seosed paremast paneelist ja mõõtmed mõõtmisriista abil, loe alla-, täielikult ja üle määratud värve ning paranda üle määratud visand.
keywords: seosed, piirangud, mõõdud, nutikas mõõt, täielikult määratud, alamääratud, ülemääratud, vabadusastmed, kokkulangev, horisontaalne, vertikaalne, paralleelne, risti, puutuja, võrdne, kontsentriline, keskpunkt, fikseeri, konflikt, üleliigne
from: e76d047a
---

Visand on **täielikult määratud**, kui iga punkt ja iga mõõt on fikseeritud seoste ja mõõtmetega. Täielikult määratud visand muutub ainult siis, kui muudad arvu, nii et detail käitub hiljem muutmisel ettearvatavalt. PartCraft ei sunni sind visandit täielikult määrama, kuid näitab alati, kui lähedal sa oled.

## Loe visandi olekut

Olek kuvatakse kolmes kohas: vaate vasakus ülanurgas olevas märgis, paremas paneelis ülal olevas sõnumis ja ajaloo lipus.

| Olek | Märk | Geomeetria värv | Mida see tähendab |
|---|---|---|---|
| Alamääratud | "Alamääratud · 3 vabadusastet" | Sinine | Mõni geomeetria võib veel liikuda. Lohista sinist geomeetriat, et näha, mis suunas |
| Täielikult määratud | "Täielikult määratud" | Tint (Paperil must, Modelil hele) | Iga punkt ja mõõt on fikseeritud |
| Ülemääratud | "Ülemääratud" | Punane, seotud seostel | Mõned seosed on vastuolus või on üks juba teiste poolt tuletatud |

Konstruktsioonigeomeetria on hall ja katkendlik, olenemata olekust. Valitud üksused on oranžid. „Vabadusaste“ on üks viis, kuidas midagi veel liikuda saab: vaba punkt omab kahte (vasak-parem ja üles-alla), vaba ring kolme (keskpunkt ja raadius).

Paneeli sõnumi all olev legend kordab värve.

## Lisa mõõt

1. Vajuta {{key:D}} või vali {{ui:Mõõt}}.
2. Klõpsa, mida mõõta:
   - **üks joon**: selle pikkus;
   - **üks ring**: selle läbimõõt; **üks kaar**: selle raadius;
   - **kaks punkti** (otspunkt, keskpunkt, vaba punkt või algpunkt): nende vaheline kaugus;
   - **punkt ja joon**: kaugus punktist joonele;
   - **kaks paralleelset joont**: nendevaheline kaugus; **kaks nurga all olevat joont**: nendevaheline nurk.
3. Pärast ühte üksust ütleb staatusriba: „Klõpsa teist üksust või klõpsa kohta, kuhu mõõt läheb.“ Klõpsa teist üksust või tühjas kohas, kuhu soovid arvu.
4. Avaneb arvukast praeguse väärtusega. Kirjuta suurus ja vajuta {{key:Enter}}. {{key:Esc}} säilitab mõõdetud väärtuse.

**Koht, kuhu arvu paned, määrab liigi** kaldu joone või kahe punkti puhul: aseta see ülevale või alla, et saada horisontaalne kaugus, vasakule või paremale, et saada vertikaalne kaugus, ja mujale, et saada tõeline (joondatud) kaugus.

Kast võtab lihtsad arvud millimeetrites või kraadides, nagu `25`, `12.5` või `1e3`. Ees olevat `⌀`, `Ø` või `R` ning lõpus olevat `mm` või `°` ignoreeritakse. Nurgad on 0 kuni 180 kraadi. Arvutusi nagu `20+5` ei võeta vastu; mõõdu sidumiseks muutuja või valemiga alusta seda märgiga `=`.

Mõõdu muutmiseks hiljem topeltklõpsa visandis selle arvu või vali paremas paneelis nimekirjas selle kõrval **Muuda**.

:::tip
Võid ka kõigepealt valida geomeetria (valimisriist) ja vajutada paremas paneelis mõõtmenuppu: {{ui:Kaugus}}, {{ui:Horisontaalne kaugus}}, {{ui:Vertikaalne kaugus}}, {{ui:Raadius}}, {{ui:Läbimõõt}} või {{ui:Nurk}}. Näidatakse ainult valikule sobivaid. Nii saab ringile anda raadiuse läbimõõdu asemel.
:::

## Lisa seos

Seosed lisatakse paremast paneelist, mitte tööriistaga.

1. Vajuta {{key:S}} valimise jaoks.
2. Klõpsa ühte üksust, seejärel {{key:Shift}}+klõps teist, kui seos vajab kahte. Ka algpunkti võib valida.
3. Paremas paneelis on tekst „Valitud: joon l3, punkt p1“ ja iga sobiva seose nupp, nagu {{ui:∥ Paralleelne}} või {{ui:• Kokkulangev}}.
4. Vali nupp. Visand lahendub kohe.

Kui ükski seos ei sobi, ütleb paneel: „Selle valiku jaoks ei sobi ükski seos. Vali üks või kaks üksust (Shift+klõps lisab).“

Täielik seoste loend, mida igaüks nõuab ja mida ta teeb, on jaotises [Visandi seosed ja mõõdud](topic:sketch-relations).

Seosed kuvatakse visandis geomeetria kõrval väikeste sümbolitena (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Kokkulangevuse punktid on peidetud, välja arvatud juhul, kui geomeetria on valitud või seos on probleemis. Seose valimiseks klõpsa selle sümbolil.

## Töötatud näide: L-kujuline profiil

1. Visanda **Esitasandil**. Joone tööriistaga alusta algpunktist ja klõpsa L-i kuut nurka, lõpetades uuesti algpunktis. Ahel lõpeb iseenesest, kui klõpsad esimesel punktil.
2. Peaaegu horisontaalsed või vertikaalsed joonistatud read saavad juba seosed H ja V, välja arvatud viimane: olemasoleva punkti otsa jõudev joon ei saa automaatset seost. Vajuta {{key:S}}, klõpsa seda viimast joont ja vali paremas paneelis {{ui:V Vertikaalne}}. Märk ütleb „Alamääratud · 4 vabadusastet“.
3. Vajuta {{key:D}}. Klõpsa alumist joont, klõpsa selle alla, kirjuta `80` ja vajuta {{key:Enter}}.
4. Klõpsa vasakpoolset joont, klõpsa selle vasakule, kirjuta `60` ja vajuta {{key:Enter}}.
5. Mõõdusta ülemine lühike joon `20`-ga ja sisemine vertikaalne joon `45`-ga samamoodi.
6. Märk ütleb nüüd **Täielikult määratud** ja kogu L muutub mustaks.

## Paranda ülemääratud visand

Kui uus seos või mõõt on teistega vastuolus, ei liiguta PartCraft midagi. Geomeetria jääb täpselt samaks, asjaomased seosed muutuvad punaseks ja staatusriba nimetab need:

- „Ülemääratud: Horisontaalne, Kaugus 40 ei saa kõik korraga täidetud olla. Võta tagasi või kustuta üks neist.“ Seosed on vastuolus.
- „Ülemääratud: Paralleelne on juba tuletatud. Kustuta see.“ Seos ei lisa midagi, sest teised nõuavad seda juba. (Näiteks ristküliku küljed on juba paralleelsed.)

Parandamiseks:

1. Vajuta {{key:Mod+Z}}, et viimane muudatus tagasi võtta, või
2. Leia paremas paneelis jaotisest **Seosed ja mõõdud** punane üksus (rühm, mis seda sisaldab, on lahti ja punane) ja vali selle kõrval **Kustuta**. Võid ka klõpsata selle sümbolil või arvul visandis ja vajutada {{key:Delete}}.

:::note
Selles versioonis ei ole „juhtivaid“ (viite-) mõõtmeid. Mõõt, mis ainult näitaks suurust, mida teised seosed juba fikseerivad, käsitletakse ülemääratuna. Loe suurusi hoopis paneelist: vali joon ja vaata mõõtmenuppe või kontrolli detaili andmeid pärast väljapressimist.
:::

Ülemääratud visand, millel on päris konflikt, paneb sellest sõltuva elemendi ebaõnnestuma („Ülemääratud: 1 seost ei saa kõiki täita.“), ja ajalugu märgib selle **⚠ viga**-ga. Visand, mis on ainult üleliigne, ehitatakse ikka, koos ⚠ hoiatusega.

## Lohista, et leida vaba

Valimisrežiimis lohista mis tahes sinist punkti või joont. Lahendaja liigutab seda nii vähe kui võimalik, säilitades kõik seosed. Kui lohistamine rikuks seose, geomeetria hüppab tagasi. See on kiireim viis näha, millist mõõtu veel puudub.

## Seoste loend

Kui midagi pole valitud, loetleb parem paneel **Seosed ja mõõdud**. Igal real on:

- **Muuda** (ainult mõõdud): avab arvukasti;
- **Vali**: valib selle visandis;
- **Kustuta**: eemaldab selle.

Ühte liiki seosed, mis esinevad rohkem kui üks kord, jagavad ühte rida, näiteks „Kokkulangev × 5“ ristküliku puhul, mis on seotud algpunktiga. Klõpsa reale, et seda avada: iga seos on loetletud selle järgi, mida see seob („punkt p2, punkt p4“), oma nupuga **Vali** ja **Kustuta**. Rea enda juures on:

- **Vali**: valib kõik need visandis;
- **Kustuta kõik**: eemaldab kõik ühe sammuga ({{key:Mod+Z}} toob need tagasi).

Rühm, mis sisaldab ülemääratud seost, avaneb ise, nimi punasena. Mõõtmed on alati loetletud ükshaaval koos väärtustega.

Kui geomeetria on valitud, näitab loend ainult **Valiku seoseid**.
