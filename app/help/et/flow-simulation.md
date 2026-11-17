---
title: Vedeliku voolu simuleerimine (vooluuring)
summary: Vool detaili sees olevates kanalites või selle ümber kastis: sisselasked, väljalasked, õhk, vesi või oma vedelik, seejärel kiirus ja rõhk liigutatavas lõiketasandis, voolujooned, pinnarõhk, rõhukadu, massibilanss, takistus ja tõstejõud, ning mida laminaarne meetod võib ja ei saa öelda.
keywords: vool, CFD, vedelik, arvutuslik vedelikudünaamika, vedeliku simulatsioon, õhk, vesi, viskoossus, tihedus, Reynoldsi arv, laminaarne, turbulentne, rõhukadu, peakadu, sisselase, väljalase, kaas, kork, kiirus, vooluhulk, ruumalaline vooluhulk, liitrit minutis, staatiline rõhk, voolujooned, lõiketasand, ristlõike tasand, takistus, tõstejõud, takistustegur, tõstetegur, esipindala, väline voolamine, sisemine voolamine, toru, kanal, kollektor, otsik, Boltzmanni võrk, jääkviga, konvergents
from: 7dc75f29
---

**Vooluuring** arvutab, kuidas vedelik liigub detaili sees olevates kanalites (**sisemine**) või selle ümber (**väline**). Vaikimisi on see **laminaarne, kokkusurumatu, isotermiline ja Newtoni**: sujuv voolamine vedelikus, mille tihedus ja viskoossus jäävad püsivaks, ilma soojuse, turbulentsi ja raskusjõuta. Lisaks on olemas **katsetuslik** turbulentne mudel, mis annab ainult kvalitatiivseid mustreid (vt allpool). See töötab detaili nimetatud pindadel, mille [võrgutuum](topic:solid-kernels) neile annab.

Vali kastist **Tööruum** väärtus **Simulatsioon**, vajuta **Uus uuring**, kui uuringut pole, ja määra **Tüüp** väärtuseks **Vool (CFD)**. **Voolumudel** on **Laminaarne** (vaikimisi) või **Turbulentne (Spalart–Allmaras, katsetuslik)**: vt allpool **Turbulentne voolamine (katsetuslik)**. Uuringu konstruktsioonisätted säilivad, nii et saad tagasi lülituda. Voolu sätted salvestatakse detaili faili ja iga muudatuse saab tagasi võtta.

## Vali vedelik ja kuubi suurus

- **Vedelik**: õhk või vesi temperatuuril 20 °C või **Kohandatud**, mille tihedus (kg/m³) ja dünaamiline viskoossus (Pa·s) sisestad ise. Õhus kasutatakse ideaalgaasi seadust ja Sutherlandi seadust (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); vesi kasutab IAPWS-i väärtusi (998.21 kg/m³, 1.0016 mPa·s).
- **Kuubi suurus**: vedelikuruum täidetakse võrdsete kuupidega. Automaatse suuruse jaoks jäta väli tühjaks; paneel näitab ruudustikku. Iga ava ja kanal peaks kasulike arvude saamiseks olema **vähemalt 8 kuni 10 kuubi läbimõõdus**; väiksemad kuubid on täpsemad, kuid aeglasemad (kaks korda peenem tähendab umbes 16 korda rohkem tööd).
- **Seinad**: **Interpoleeritud** järgib kuubide vahel kumerat seina (vaikimisi); **Tagasipõrge** käsitleb seinu kuubiliste astmetena.

## Vool detaili sees

Vedelikuruum peab olema suletud. Lisa paneelis **Sisselase** ja **Väljalase** ning seejärel klõpsa vaates nende pindadel:

1. **Ava ümbritsev tasapinnaline pind** — toru otsa ääris, pordi pind. PartCraft sulgeb ava augu seal kaanega. Igal sellel pinnal olval augul on kuulub sellele avale, seega kui sisselase ja väljalase avanevad samal pinnal, modelleeri selle asemel ühe neist kohale õhuke kork.
2. **Kaane sisepind** — nagu teistes CAD-tööriistades: modelleeri ava kohale õhuke plaat (väljapressimine) ja vali selle pind, mis puutub vedelikuga.

Sisselasket seadistades määra **kiirus** (m/s, ühtlane üle ava, detaili suunas) või **ruumalaline vooluhulk** (L/min). Väljalasket seadistades määra **staatiline rõhk** (Pa, ülerõhk). Kui ava jääb lahti või sein on õhem kui kuubi suurus, ühineb sisemus välisega ja arvutus peatub teatega „Suletud vedeliku ruumi ei leitud“.

## Vool detaili ümber

Määra **Vool** väärtuseks **Väline**, **Kiirus**, suund, kuhu vool liigub, ning kui kaugele kast ulatub ülesvoolu, allavoolu ja külgedele (tühi: 1, 3 ja 1 korda detaili suurim mõõde). Kastipind, kuhu vool siseneb, on sissevool, pind, millest see väljub, on 0 Pa juures väljavool ning voolu mööda kulgevad pinnad on libisemisega. Liiga väike kast surub voolu detaili mööda ja suurendab takistust. **Viitepindala** on pindala, mida takistus- ja tõstetegurid kasutavad (tühi: detaili esipindala voolu suunas vaadatuna); tõstejõud mõõdetakse piki +Y-d, kui ei vali teist suunda.

## Arvuta ja loe tulemusi

Vajuta **Arvuta**. Arvutus töötab taustal, näidates sammude arvu, jääkviga ja jääkvea graafikut; **Peata** lõpetab selle. See peatub, kui jääkviga (kui palju kiiruseväli muutub sammu kohta) jääb sihtväärtusest madalamaks ning rõhukadu või takistus on stabiliseerunud. Kui see jõuab enne sammupiirini, näitab paneel punasena **Ei konvergeerunud**: arvud on viimane olek, mitte püsiv vastus.

- **Lõiketasand**: kiirus või staatiline rõhk mudelist läbi lõikava tasandi; vali selle normaal (X, Y või Z) ja lohista liugurit selle liigutamiseks. Väärtuste lugemiseks hoia kursor tasandi kohal.
- **Voolujooned**: sisselasetest (sisemine) või lõiketasandis kasti sissevoolu otsa üle kulgevast reast (väline).
- **Detail**: tahke, läbipaistev (et näha sees olevat tasandit), pinnarõhk või peidetud.
- **Tabel**: Reynoldsi arv, rõhukadu (keskmine staatiline rõhk sisselasetel miinus väljalasetel), iga ava vooluhulk ja keskmine rõhk, jõud detailile, takistus ja tõste koos tegurite ja viitepindalaga (väline), massibilanss (sissevool võrreldes väljavooluga), võrk ja lahendaja.

## Turbulentne voolamine (katsetuslik)

**Voolumudel › Turbulentne (Spalart–Allmaras, katsetuslik)** lahendab aja järgi keskmistatud turbulentse voolamise (püsiv RANS): Spalart–Allmarase mudel annab igas kuubis keerisviskoossuse ning seinte kõrval olevad kuubid kasutavad õhukese kihi lahendamise asemel Spaldingi seinaseadust. See on kõikjal täielikult turbulentne (laminaarseid piirkondi ega üleminekut ei ole).

**See ei läbinud oma täpsuskontrolle.** Paneel, tulemused ja tabel ütlevad seda igas turbulentses uuringus ning hoiatust ei saa sulgeda. Kasuta seda **kvalitatiivsete voolumustrite** jaoks — kus vool eraldub, ringleb või kiireneb — **mitte konstruktsiooninumbrite jaoks**.

| Kontroll | Võrdlusallikas | Tulemus |
|---|---|---|
| Tasase kanali hõõrdumine, esimene kuup y⁺ 49 / 98 | Deani korrelatsioon | +3.3 % / +4.7 % |
| Lahendatud seinaga kanal (y⁺ ≈ 3), Re_τ 180: keskmine kiirus | Moser, Kim & Mansour DNS | −1 % |
| Tasane kanal, y⁺ 7–15 või 190–380 | Deani korrelatsioon | +9 kuni +22 % |
| Toru hõõrdumine läbi kuubi, täielikult arenenud, 10–30 kuubi läbimõõdus | Colebrook | 30 kuni 34 % liiga suur |
| Taasühinemine tagasi suunatud astme taga, 6–14 kuupi astme kõrguse kohta | Driver & Seegmiller, 6.26 astme kõrgust | 21 kuni 39 % liiga lühike |

Tulemused paranevad peenemate kuubidega ainult aeglaselt. Pärast arvutamist näitab tabel **esimese kuubi y⁺** (miinimum, keskmine ja maksimum seinakuupide üle) ning hoiatab väljaspool kontrollitud vahemikku 1 kuni 400; püüa jõuda umbes 30 kuni 300. **Töö kestus:** automaatsed kuubid on mõeldud kuni mõneks minutiks ühel sülearvuti tuumal (paneel näitab ruudustiku ja sammupiiri halvimat juhtu; väike toru stabiliseerub alla 20 sekundi). Kuubi suuruse poolitamine maksab umbes 16 korda rohkem aega. Jõud detailile tulevad avade või kasti üle tehtud impulsitasakaalust.

**Seni tehtud töö:** seinakuubid sobitavad nüüd oma nihkepinged seinaseadusega, mis tõi toru- ja astmevead eespool toodud väärtusteni, muutmata tasase kanali tulemusi. See ei piisanud konstruktsiooninumbriteks. Järgmine samm on peenemad kuubid seinte lähedal.

## Mida see võib ja ei saa öelda

- **Laminaarne mudel** on ainult laminaarne. Torudes muutub vool turbulentseks Reynoldsi arvul üle umbes 2,000 kuni 4,000; nüri keha taga hakkab jälg keeriseid eraldama üle umbes 50. Paneel hoiatab nendes punktides. Turbulentse voolu laminaarne tulemus alahindab rõhukadu ja annab takistuse valesti. Katsetuslik turbulentne mudel (eespool) käsitleb turbulentset voolu kvalitatiivselt; selle arvud pole veel usaldusväärsed.
- **Meetod:** Boltzmanni võrgumeetod (D3Q19, kahe relaksatsiooniajaga põrkumine), mis viiakse püsivasse olekusse. Seest on see veidi kokkusurutav; PartCraft hoiab tiheduse muutused mõne protsendi piires. Kui vool on kuubide jaoks liiga kiire, ei alusta see ja ütleb, kui palju väiksemad kuubid peavad olema.
- **Võrreldud:** Hagen–Poiseuille'i voolamine detailist läbi viidud torus (rõhugradient 1 % piires 20 kuubi läbimõõdus), Ghia jt kaanega juhitud kaviteet (0.75 % piires kaane kiirusest) ja Schäfer–Tureki silindri etalontest (takistus 1 % piires 10 kuupi läbimõõdu kohta).
- Ei ole modelleeritud: soojusülekanne, täpsusega turbulentsus (turbulentne mudel on katsetuslik), vabad pinnad, kavitatsioon, raskusjõud, liikuvad osad, mittenjuutonilised vedelikud, karedad seinad. Laboriversioon: kontrolli olulisi tulemusi mõnel muul viisil.
