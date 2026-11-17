---
title: Kehade ühendamine, teisaldamine ja skaleerimine; teekonnamustrid
summary: Tee eraldi kehad ja ühenda, lõika või leia nende ühisosa hiljem; teisalda, pööra, joonda või kopeeri neid; skaleeri ühtlaselt või X, Y ja Z järgi; kopeeri elemente või kehasid mööda kõverat.
keywords: keha, kehad, mitmekehaline, uus keha, ühenda, bool, liida, lõika, lõikumine, lahuta, säilita tööriistad, teisalda keha, kopeeri keha, pööra keha, joonda, nihe, skaleeri, mittühtlane skaleerimine, venita, afiinne, teekonnamuster, muster mööda kõverat, massiiv mööda teekonda, kõverapõhine muster
from: 6b1ea820
---

:::note
**Ei ole selles versioonis veel valmis.** Mitme kehaga töötamine vajab täpset geomeetriatuuma, mida PartCraft selles versioonis ei oma: ta loob kõik detailid võrgusilma tuumaga (mesh kernel). [Mis ei ole veel valmis](topic:not-built-yet) ütleb, mida selle asemel teha. Lehe ülejäänud osa kirjeldab seda nii, nagu see töötab täpse tuumaga.
:::

Detail võib sisaldada mitut tahkist. Iga eraldi tahkis on **keha**. Enamik elemente lisab igale kehale, mida nad puudutavad, või lõikab sealt; sellel lehel kirjeldatud tööriistad töötavad terviklike kehade kaupa, mille sina valid. Need asuvad elementide rühma menüüs {{ui:Veel}}: {{ui:Ühenda}}, {{ui:Teisalda keha}}, {{ui:Skaleeri keha}} ja {{ui:Teekonnamuster}}. Kõik need vajavad täpset tuuma (OpenCascade).

## Tee eraldi keha

Määra väljapressimise või pööramise **Toiming** paremas paneelis väärtuseks **Uus keha** (ka pühkimistel ja sülestustel on see). Uus tahkis jääb eraldiseisvaks ka seal, kus ta kattub teistega. **Ühisosa** säilitab ainult uue kuju ja olemasoleva ühisosa.

Kehad saavad nime elemendi järgi, mis need alustas: „Extrude2“. Koopia saab nime originaali ja elemendi järgi, mis selle kopeeris: „Extrude2, copy 1 of Move1“. Nimed jäävad samaks, kui muudad eelnevaid mõõte, nii et kehi kasutavad elemendid leiavad need endiselt üles. Kui kehi on kaks või rohkem, loetleb detailipaneel (klõpsa tühjal alal) need koos mahtudega.

## Keha ümbernimetamine või peitmine

Vaates tühjale alale klõpsates näed detailipaneeli. Selle kehade loendis (mis kuvatakse, kui detailil on kaks või rohkem kehta) on igal real nimeväli ja nupp {{ui:Peida}}.

- **Ümbernimetamine:** sisesta väljale uus nimi ja vajuta {{key:Enter}} või klõpsa mujale. Seda nime kasutavad seejärel kõik paneelid: Ühenda, Teisalda keha, mustrid. Väljal tühjendamine taastab nime elemendilt, mis keha tegi.
- **Peitmine:** klõpsa rea nupul {{ui:Peida}}. Keha lahkub vaatest ja klõpsud läbivad selle, nii et saad valida selle taga olevaid tahke. {{ui:Näita}} toob selle tagasi; {{ui:Näita kõiki}} toob tagasi kõik peidetud kehad.

Peitmine muudab ainult vaadet. Peidetud keha on endiselt loodud, arvestatud mahus ja mõõtmistes ning salvestatud STL-, 3MF- ja STEP-eksportides. Nimed ja peidetud kehad salvestatakse detailifaili ning iga muudatus on üks samm {{ui:Võta tagasi}}.

## Kehade ühendamine

1. {{key:Shift}}+klõps **sihtkeha** tahul, seejärel iga **tööriistakeha** tahul.
2. Vali {{ui:Veel}}, seejärel {{ui:Ühenda}}.
3. Vali paremas paneelis **Toiming**:

| Toiming | Tulemus |
|---|---|
| Ühenda | Sihtkeha ja tööriistad muutuvad üheks kehaks |
| Lõika | Tööriistad eemaldatakse sihtkehast |
| Ühisosa | Säilib ainult see, mida sihtkeha ja kõik tööriistad ühiselt jagavad |

**Sihtkeha** on see, mis säilitab oma nime. Märgi või eemalda märk **Tööriistakehadelt** või kasuta **Vali vaates** ja klõpsa nende tahkudel. **Säilita tööriistakehad** jätab tööriistad samuti paigale (kasulik vormi ja selle südamiku puhul). Kui tööriistakeha on juba kasutatud varasema ühendamisega, ütleb paneel seda, selle asemel et valida mõni teine keha.

## Keha teisaldamine või kopeerimine

1. Vali {{ui:Veel}}, seejärel {{ui:Teisalda keha}}. Uusim keha on märgitud; märgi need, mida teisaldada.
2. Vali **Teisaldamise** tüüp:

| Teisaldamine | Mida määrad |
|---|---|
| Nihe | **ΔX**, **ΔY**, **ΔZ** millimeetrites |
| Punktist punkti | **Algus** ja **Lõpp**: klõpsa serva otsa lähedal, punktielemendil või tahu kohal |
| Pööre ümber telje | **Telg** (X, Y, Z, teljeelement või **Vali**: sirge serv, ring või silinder) ja **Nurk (°)** |
| Joondamine tahu või tasandi järgi | **Liigutatav tahk** (keha tasane tahk), **Peale** (tasane tahk või tasand) |

Joondamine pöörab keha nii, et selle tahk asetub teisele tahule, tahk tahu vastu, ning libistab seejärel ainult mööda selle tahu normaali. **Samas suunas** pöörab selle vastupidi. **Kopeeri** säilitab originaali ja lisab teisaldatud koopia uue kehana.

## Keha skaleerimine

1. Vali {{ui:Veel}}, seejärel {{ui:Skaleeri keha}} ja märgi kehad.
2. Sisesta **Skaala** või eemalda märk **Ühtlane** ja sisesta **Skaala X**, **Skaala Y** ja **Skaala Z** (mööda maailma telgi).
3. **Ümber** on punkt, mis jääb paigale: kehade kasti keskpunkt või valitud punkt.

Ühtlane skaleerimine on täpne. Mittühtlane skaleerimine muudab ringid ellipsiks: silinder muutub elliptiliseks silindriks, mida ükski analüütiline pind ei kirjelda. Seetõttu muutuvad kumerad tahud B-spline-pindadeks, mis jäävad täpsest kujust 0.0000004 mm piiresse; tasased tahud ja sirged servad jäävad täpseks. Paneel ütleb, mis juhtus. Skaleerimistegurid peavad olema suuremad kui null (selle asemel peegelda {{ui:Peegeldus}}).

## Kopeerimine mööda teekonda

1. Vali ajaloost kopeeritav element või ära vali midagi, et kopeerida uusim keha.
2. Vali {{ui:Veel}}, seejärel {{ui:Teekonnamuster}}. Teekonnaks võetakse uusim kasutamata visand.
3. Määra paremas paneelis:

| Seade | Mida see teeb |
|---|---|
| **Kopeeri** | Kehad (iga koopia on uus keha) või Elemendid (ühendatakse või lõigatakse nagu originaal) |
| **Teekond** | Märgi visandid või **Vali mudeli servad**; osad peavad olema otsast otsani ühendatud |
| **Arv** | Koguarv, originaal kaasa arvatud |
| **Vahe** | Võrdne (laotatud avatud teekonna lõpuni või suletud teekonna ümber) või kindel kaugus |
| **Orientatsioon** | Järgi teekonda (iga koopia pöördub koos sellega) või Fikseeritud (koopiad jäävad paralleelseks) |
| **Pööra suund ümber** | Liigu teekonnal vastupidi |

Koopiad algavad kohast, kus teekond läheb originaalile kõige lähemale, ja on paigutatud kõvera pikkuse järgi.

Lineaarsed ja ringmustrid saavad kopeerida ka kehi: märgi nende paneelis **Kopeeri kehad** ja vali kehad; iga koopia on uus keha.

## Piirangud

- Kehad vajavad täpset tuuma; mesh kernel jätab ühe tahkise alles ja ütleb seda.
- Mittühtlane skaleerimine muudab kumerad tahud lähendatud B-spline-pindadeks (vt ülal), mitte täpseteks silinderiteks või koonusteks; nihkepindu ei saa nii skaleerida.
- Keerdus 3D-kõveral teekonnal järgimine kannab koopiat ilma seda keeramata; tasastel teekondadel on pööre täpne.
- Ühenda töötab ainult tahkistega. Pinnakehad ühendatakse {{ui:Õmble}} abil.

Vaata ka [Abitasandid, teljed ja punktid](topic:reference-geometry) punktide ja tasandite kohta „objektide vahel“ ning [Mustri- ja peegeldamiselemendid](topic:patterns-mirror).
