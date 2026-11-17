---
title: Ištempkite iškilimą ir iškirpkite per jį
summary: Paverskite eskizą kietuoju kūnu su Ištempti, nustatykite aklą, vidurio plokštumos, iki paviršiaus ar dviejų krypčių gylį, nuolydį ar vieną eskizo kontūrą, tada nubrėžkite eskizą ant paviršiaus ir Iškirpkite įdubą ar praėjimo angą.
keywords: ištempti, iškilimas, ištemptas iškilimas, iškirpti, ištempta išpjova, įduba, per visą, aklas, vidurio plokštuma, atvirkštinė kryptis, gylis, iškirpti-ištempti, iškilimas-ištempti, padas, iki paviršiaus, iki kito paviršiaus, iki viršūnės, nuokrypis nuo paviršiaus, dvi kryptys, nuolydis ištempiant, kontūras, sritis, pasirinkti kontūrai
from: 3b13ff10
---

{{ui:Ištempti}} stumia eskizo uždarą profilį tiesiai iš jo plokštumos, kad sukurtų medžiagą. {{ui:Iškirpti}} daro tą patį, bet medžiagą pašalina. Abu yra tas pats elementas; vėliau vieną galite pakeisti į kitą.

## Ištempkite iškilimą

1. Nubrėžkite uždarą profilį ir uždarykite eskizą (žr. [Nubrėžkite pirmąjį eskizą](topic:sketch-basics)). Jis lieka pasirinktas.
2. Pasirinkite {{ui:Ištempti}}.

Atsiranda 10 mm kietasis kūnas, „Extrude1“ prisijungia prie istorijos su po juo įtraukta eskizu, o būsenos juostoje rašoma: „Extrude1 pridėtas. Pakeiskite jo skaičius dešinėje.“

**Kuris eskizas naudojamas:** eskizas, kurį ką tik uždarėte, arba eskizas, pasirinktas istorijoje. Jei nieko nepasirinkta, PartCraft paima naujausią eskizą, kurio dar niekas nenaudoja. Jei tokio nėra: „Pirmiausia sukurkite eskizą: pasirinkite plokštumą, Eskizas, nubrėžkite uždarą profilį, Baigti.“

### Nustatykite gylį ir kryptį

Dešiniajame skydelyje:

| Nustatymas | Pasirinkimai | Numatyta |
|---|---|---|
| **Operacija** | Iškilimas (pridėti medžiagos), Iškirpti (pašalinti medžiagą), Sankirta (palikti persidengimą), Naujas kūnas (šioje versijoje dar nesukurta: reikia tikslaus branduolio) | Iškilimas |
| **Pabaiga** | Aklas (gylis), Vidurio plokštuma (abiem pusėmis), Per visą, Iki paviršiaus ar plokštumos, Iki kito paviršiaus, Iki viršūnės, Nuokrypis nuo paviršiaus | Aklas |
| **Gylis (mm)** | Bet koks dydis, didesnis už nulį (rodoma Aklam ir Vidurio plokštumai) | 10 |
| **Atvirkštinė kryptis** | Auga į kitą eskizo plokštumos pusę (nerodoma Vidurio plokštumai) | Išjungta |

Įveskite skaičių ir paspauskite {{key:Enter}} arba {{key:Tab}}: detalė iš karto perskaičiuojama. **Vidurio plokštuma** dedia pusę gylio į kiekvieną eskizo pusę.

### Iki paviršiaus, kito paviršiaus ar viršūnės

Šioje versijoje dar nesukurta: visoms „iki“ pabaigoms reikia tikslaus branduolio, o elementas rodo: „Ištempimas iki paviršiaus, kito paviršiaus ar viršūnės: dar nesukurta (reikia tikslaus branduolio).“ Naudokite išmatuotą aklą gylį. Su tiksliu branduoliu pabaigos veikia taip:

- **Iki paviršiaus ar plokštumos**: **Iki** priima plokščią paviršių (Pasirinkti, tada spustelėkite jį) arba atskaitos plokštumą. Paviršius, lygiagretus eskizui, duoda tikslų gylį; pasviręs paviršius pjauna galą pagal nuolydį. Jei paviršius yra už eskizo: „… Išbandykite Atvirkštinę kryptį.“
- **Iki kito paviršiaus**: sustoja ties pirmuoju plokščiu kūno paviršiumi, kurį ištempimas susikerta (lenkti paviršiai čia nepalaikomi: tai pranešama).
- **Iki viršūnės**: sustoja lygiai su viršūne (spustelėkite arti briaunos galo) arba taško elementu.
- **Nuokrypis nuo paviršiaus**: kaip Iki paviršiaus, sustojant **Nuokrypis (mm)** atstumu prieš jį (matuojant statmenai paviršiui).

### Dvi kryptys, nuolydis, vienas kontūras

- **Antroji kryptis** (Aklas): taip pat ištempia **Antrasis gylis (mm)** į kitą eskizo pusę.
- **Nuolydis (°)**: šonai pasvyra link galo, kaip ištraukos nuolydis (neigiamas: išorėn); tik viena kryptimi. Šioje versijoje dar nesukurta (reikia tikslaus branduolio): palikite 0.
- **Sritys**: **Pasirinkti sritis**, tada spustelėkite vidų kilpų, kurias ištempti; naudojamos tik tos sritys (apskritimas kvadrate: spustelėkite apskritimo viduje cilindrui arba tarp jų plokštei su skyle). **Visos** grąžina visas kilpas.

Žemiau šių **Eskizo matmenys** rodo eskizo valdančiuosius matmenis, kad galėtumėte keisti profilio dydžius neatidarę eskizo.

:::note
**Per visą – tik iškirpimams.** Kūnui nustatytas Per visą nepavyksta su pranešimu: „Per visą – tik iškirpimams. Kūnui naudokite gylį.“ Perjungus elementą iš Iškirpti atgal į Iškilimas, Per visą automatiškai pakeičiama į Aklas.
:::

## Iškirpkite įdubą

1. Spustelėkite plokščią paviršių, į kurį norite įpjauti. Jis paryškinamas, o dešinysis skydelis rodo **Paviršius**.
2. Pasirinkite {{ui:Eskizas ant šio paviršiaus}} (arba {{ui:Eskizas}} įrankių juostoje).
3. Nubrėžkite įdubos kontūrą, pavyzdžiui, stačiakampį, ir nurodykite matmenis.
4. Pasirinkite {{ui:Baigti}}.
5. Pasirinkite {{ui:Iškirpti}}. Ji prasideda kaip **Per visą**: pašalina medžiagą per visą detalę.
6. Įdubai nustatykite **Pabaiga** į **Aklas (gylis)** ir įveskite **Gylis (mm)**.

Iškirpimas eina į medžiagą, nuo paviršiaus, ant kurio piešėte. Jei būsenos juostoje rašoma: „Toje eskizo pusėje nėra ko iškirpti. Išbandykite kitą kryptį.“, pažymėkite **Atvirkštinė kryptis**.

Eskizas įdubos dugne seka dugną: pakeitus įdubos gylį, eskizas pajuda kartu.

## Patraukti arba įspausti visą paviršių

Norėdami, kad paviršius labiau išsikištų arba įsigilintų, nereikia piešti jo kontūro. Spustelėkite plokščią paviršių, tada dešiniajame skydelyje:

- {{ui:Ištempti iš jo}} ištraukia paviršių: PartCraft prideda eskizą ant paviršiaus su jo kontūru (paviršiaus skylės lieka skylėmis) ir 10 mm Ištempimą.
- {{ui:Įpjauti į jį}} įspaudžia paviršių: tas pats eskizas ir Iškirpimas per pusę detalės.

Abu yra vienas veiksmas: {{key:Mod+Z}} pašalina eskizą ir elementą kartu. Naujas elementas pasirinktas, todėl iš karto įveskite skaičių ir paspauskite {{key:Enter}}, kad nustatytumėte jo gylį. Kontūras nukopijuojamas kaip fiksuotos linijos ir lankai: jis nesekia vėlesnių paviršiaus pakeitimų. Jei dalies kontūro nepavyksta nukopijuoti (laisva kreivė), eskizas atsidaro su tuo, kas nukopijuota; baikite jį, tada pasirinkite {{ui:Baigti}} ir {{ui:Ištempti}} arba {{ui:Iškirpti}}.

## Profiliai su salelėmis

Eskizas gali turėti kelias uždaras kilpas. Greta esančios kilpos tampa atskirais iškilimais (ar iškirpimais), o kilpa kitos viduje tampa skyle per iškilimą. Pavyzdžiui, stačiakampis su dviem apskritimais viduje ištempiamas kaip plokštė su dviem skylėmis.

Norėdami naudoti tik kai kurias kilpas, pasirinkite jas su **Sritys** (aukščiau); kitas elementas tame pačiame eskize gali naudoti kitas kilpas.

## Redaguokite vėliau

- Spustelėkite „Extrude1“ istorijoje, kad grąžintumėte jo nustatymus.
- Dukart spustelėkite jo eskizą (įtrauktą po juo), kad atidarytumėte eskizą; uždarykite, kad perskaičiuotų.
- Žr. [Keiskite detalę per jos istoriją](topic:edit-history) blokavimui, grąžinimui, perrikiavimui ir trynimui.

## Dažni pranešimai

| Pranešimas | Ką daryti |
|---|---|
| „Eskizas neturi uždaro profilio, kurį būtų galima ištempti.“ | Eskize nėra uždaros kilpos iš vientisų linijų. Uždarykite tarpus arba grąžinkite konstrukcines linijas klavišu {{key:Q}} |
| „Profilis atviras: galas taške (x, y) nieko nejungia.“ | Atidarykite eskizą ir sujunkite tą galą su kita linija |
| „Dar nėra ko iškirpti.“ | Iškirpimui reikia kietojo kūno. Pirmiausia sukurkite iškilimą |
| „Po to detalės nebeliko.“ | Iškirpimas pašalino viską. Patikrinkite jo dydį ir kryptį |

Daugiau – [Trikčių šalinimas](topic:troubleshooting).
