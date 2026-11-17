---
title: Pühkimine, loft ja kalle
summary: Pühi suletud profiil mööda visandikõverate või mudeli servade trajektoori, lõika läbi lõikude tasapindadel ja lisa tahkudele kalle; valikud, täpsed tulemused ja teated.
keywords: pühkimine, pühitud pulk, pühitud lõige, toru, trajektoor, loft, loft-pulk, ümardavad lõigud, joonpind, kalle, kaldenurk, kaldpinnad, neutraaltasand, tõmbesuund, vormimine
from: 9d637981
---

:::note
**Selles versioonis** pühkimist ja lofti veel ei ole: need vajavad täpset geomeetriatuuma, mida selles PartCrafti versioonis pole. [Mis pole veel valmis](topic:not-built-yet) ütleb, mida selle asemel teha; Pühkimise ja Lofti osad kirjeldavad neid nii, nagu nad töötavad täpse tuumaga. **Kalle töötab** lamedatel tahkudel: võrgusilma tuum ehitab selle, sama tulemusega, mida annab täpne tuum.
:::

Kõik kolm asuvad funktsioonide rühma menüüs {{ui:Veel}} (vt [Võrgusilma tuum](topic:solid-kernels)). Igaüks võib materjali ühendada, sellest välja lõigata, alles jätta ainult ülekattuva osa (**Lõikumine**) või teha **Uus keha** (pühkimine ja loft: **Toiming** paneelil).

## Pühkimine

Pühkimine liigutab suletud profiili mööda trajektoori: torud, käepidemed, traatsed vedrud, juhikud.

1. Joonista **trajektoor** ühte visandisse: otsast otsa ühendatud jooned ja kaared (või kasuta allpool kirjeldatud mudeli servi).
2. Joonista **profiil** teise visandisse, mille tasapind läbib trajektoori ühe otsa, näiteks ringjoon ülemisel tasapinnal trajektoori alguses, mis on joonistatud esitasapinnal.
3. Vali profiili visand ja vali {{ui:Veel}}, siis {{ui:Pühkimine}}. Viimane muu visand muutub trajektoori.

Paneelis:

| Seade | Mida ta teeb |
|---|---|
| **Trajektoor** | Märgi visandid, mis moodustavad trajektoori (mitu visandit ühenduvad otsast otsa üheks 3D-trajektooriks); **Vali mudeli servad** lisab detaili servi |
| **Orientatsioon** | Järgi trajektoori (vaikimisi), Frenet, Fikseeritud (lõigud jäävad profiiliga paralleelseks), Hoia suunda, Mööda juhtkõverat |
| **Lõppmõõtkava** | Profiil kasvab või kahaneb lineaarselt selle suuruseni lõpus (1 = konstantne) |

Trajektoori teravad nurgad lõigatakse nurga alla. Raadiusega 5 ring, mida pühitakse mööda 100 mm joont, on täpselt 2500π mm³ suurune silinder; mööda raadiusega 50 veerandkaart on see 625π² mm³ suurune veerandtoroid.

## Loft

Loft ühendab sujuvalt kaks või enam lõiku erinevatel tasapindadel.

1. Joonista iga lõik omas visandis (üks suletud silmus igaüks), põhitasapindadel, abitasapindadel (vt [Abitasapinnad, teljed ja punktid](topic:reference-geometry)) või tahkudel.
2. Vali {{ui:Veel}}, siis {{ui:Loft}}. Iga kasutamata ühe silmusega visand muutub lõiguks ajaloo järjekorras.

Paneel loetleb lõigud järjekorras (**Üles** muudab järjekorda, **Eemalda** eemaldab ühe); **Lisa visand** lisab veel ühe, **Vali tahk** lisab detaili lameda tahu. **Joonpind** teeb lõikude vahele lamedad tahud sujuva ühenduse asemel. Kahe ruudu vahel on mõlemad sama kärbitud püramiid (40 mm ruut kuni 20 mm ruut 30 mm kõrguselt: täpselt 28000 mm³).

Erinevate külgede arvuga lõigud (ruut kolmnurgaks) seostatakse OpenCascade'i poolt, mis võib külgtahud keerutada; funktsioon hoiatab sellest. Joonista lõigud sama arvu külgedega, alustades vastavatest nurkadest, siis on tulemus kõige puhtam.

### Juhtjooned

Juhtjooned on kõverad, mida loft'i küljed peavad järgima esimesest lõigust viimaseni, näiteks välja paisuv, kitsenev või laienev kuju, mille joonistad ise.

1. Joonista kaks või enam juhtjoont: avatud kõverad (jooned, kaared, splain-kõverad), mis lähevad esimesest lõigust viimaseni ja ristuvad iga lõiguga täpselt üks kord. Ühes visandis võib olla mitu juhtjoont: iga eraldi ahel on oma juhtjoon. Joonista juhtjoon nii, et see tegelikult kohtub igas lõigus: kinnita selle otsad lõikude punktidele.
2. Lofti paneelis, all **Juhtjooned**, märgi visandid, mis neid sisaldavad, või klõpsa {{ui:Vali mudeli servad juhtjoontena}} ja klõpsa detaili servi ({{key:Esc}} lõpetab).

Juhtjoontega on loft Gordoni pind läbi lõikude ja juhtjoonte (vt [Pinnad kõvera võrgustiku kaudu](topic:gordon-surfaces)), mille mõlemad otsad on tasaselt kinni, et saada tahke. Paneel ütleb, kui täpselt see neid järgib. Iga lõik peab siis olema visand (punkt või tahk ei saa juhtjoont võtta) ja **Joonpind** ei rakendu. Juhtjoon, mis jääb lõigust mööda rohkem kui 0.01 mm, lükatakse tagasi koos vahega.

Kontrollitud: kaks ringjoont (läbimõõdud 20 mm ja 10 mm, 40 mm kaugusel) nelja sirge juhtjoonega annavad koonilise kärbitud koonuse ruumala täpsusega 0.000002 %; 5 mm väljapaisuvad kaared annavad tünni, mis järgib iga juhtjoont täpsusega 0.00001 mm.

## Kalle

Kalle kallutab tahke, et detail saaks vormist välja tulla.

1. Vali {{ui:Veel}}, siis {{ui:Kalle}} (või vali kõigepealt tahud, hoides {{key:Shift}} all klõpsamist). Kui midagi pole valitud, oled valikurežiimis: klõpsa iga tahku, mida kallutada, ja siis {{ui:Valmis}}.
2. Määra **Nurk (°)**, **Neutraaltasand** (kus tahud säilitavad oma suuruse) ja **Tõmbesuund** (vaikimisi neutraaltasandi normaal).

Positiivne nurk kallutab tahku tõmbesuunas sissepoole ja eemaldab materjali; negatiivne lisab seda. Neutraaltasand algab ülemisest tasapinnast. Selles versioonis saab kallutada ainult lameda tahke: silinder, koonus või vabakujuline tahk ütleb „Kalle: selles versioonis ainult lamedad tahud (võrgusilma tuum ehitab selle).“ 100 × 100 × 50 ploki neli külge, mis on kallutatud 5° alt põhjast, muutuvad täpselt kärbitud püramiidiks h/3·(a² + b² + ab), kus b = a − 2h·tan 5°.

## Teated

| Teade | Mida teha |
|---|---|
| „Profiili tasapind peab läbima trajektoori ühe otsa …“ | Liiguta profiili visand trajektoori algusesse (või lõppu) |
| „Trajektooril on lünk: selle kõverad ei ole otsast otsa ühendatud …“ | Ühenda trajektoori kõverad; eraldi visandites peavad nende otsad täpselt kokku minema |
| „Loft-lõik vajab täpselt ühte suletud silmust“ | Jaga visand või eemalda üleliigne silmus |
| „… ei saa kallutada selle neutraaltasandi suhtes …“ | Tahk on neutraaltasandiga paralleelne või ei ulatu sinna |
| „Kalle: selles versioonis ainult lamedad tahud (võrgusilma tuum ehitab selle).“ | Valitud tahk on kumer. Eemalda see; kalda ainult lameda tahke |

:::note
Pole veel valmis: keerdpühkimised, õhukeseseinalised ja pinnapühkimised, lofti juhtjooned ja lõpu puutuvus, kalle silindritel, koonustel ja vabakujulistel tahkudel.
:::
