---
title: PartCraft parametrai
summary: Pasirinkite, kuris pelės mygtukas sukasi vaizdą, padarykite, kad jutiklinės plokštelės gestas sukasi ir slenka detalę, įjunkite ar išjunkite automatinius ryšius braižant eskizą ir nustatykite, kiek gijų naudoja modeliavimo sprendikliai.
keywords: parametrai, nuostatos, parinktys, pelė, vidurinis mygtukas, ratuko mygtukas, orbita, sukimas, pasukti, jutiklinė plokštelė, slinkimas, brūkštelėjimas, suspaudimas, ryšiai, apribojimai, automatiniai ryšiai, prisitraukimas, sutapimas, gijos, sprendiklio gijos, branduoliai, procesoriai, daugiagijis, greitesnis sprendimas, lygiagretus
from: 759edcaf
---

Atverkite {{ui:Parametrai}} su krumpliaračio piktograma programos juostoje arba su {{key:Mod+,}}. Pirmasis skirtukas, {{ui:PartCraft}}, saugo šiai programai priklausančius parametrus, o {{ui:Bendra}} saugo tuos, kuriuos bendrai naudoja visos CadCraft programos (tema, įrankių juosta, skydeliai). PartCraft parametrai egzistuoja tik programoje: keičiate juos čia, ir ši naršyklė juos prisimena. {{ui:Atstatyti PartCraft parametrus}} viską grąžina į pradinę būseną.

## Vaizdo sukimas

- **Kairysis mygtukas** (pradžioje): vilkite kairiuoju mygtuku, kad pasuktumėte detalę; vilkite dešiniuoju arba vidurinio mygtuku, kad slinktumėte.
- **Vidurinis mygtukas**: paspauskite ratuką ir vilkite, kad pasuktumėte detalę; laikykite {{key:Shift}} (arba {{key:Ctrl}}, arba ⌘) su vidurinio mygtuku, arba vilkite dešiniuoju mygtuku, kad slinktumėte. Kairysis mygtukas tik parenka paviršius, briaunas ir plokštumas, todėl spustelėjimas, kuris šiek tiek pajudina, detalės niekada nepasuka. Daugelis CAD programų veikia taip.

Ratuko priartinimas ar nutolinimas visada vyksta į žymeklio vietą. Eskize dešinysis ir vidurinis mygtukai slenka kaip anksčiau.

## Slinkimas: pelės ratukas ar jutiklinė plokštelė

- **Automatiškai nustatyti** (pradžioje): PartCraft stebi slinkimą. Šoninis arba smulkus slinkimas, kurį siunčia jutiklinė plokštelė, sukasi detalę; pilni ratuko žingsniai priartina.
- **Pelės ratukas**: slinkimas visada priartina ar nutolina į žymeklio vietą.
- **Jutiklinė plokštelė**: braukite dviem pirštais, kad pasuktumėte detalę; laikykite {{key:Shift}} ir braukite, kad slinktumėte; suspauskite pirštus, kad priartintumėte. Eskize dviejų pirštų braukimas slenka eskizą.

Suspaudimo gestas priartina visais atvejais. Jei „Automatiškai nustatyti“ neteisingai atspėja jūsų pelę ar jutiklinę plokštelę, pasirinkite tą, kurią turite. Daugiau: [Jutiklinė plokštelė, lietimas ir maži ekranai](topic:trackpad-and-touch).

## Eskizavimas: ryšiai braižant

**Pridėti ryšius braižant** (pradžioje įjungta): spustelėjimas, prisitraukiantis prie taško, padaro naują tašką su juo sutampantį, spustelėjimas ant kreivės uždeda tašką ant tos kreivės, o linija, nubraižyta beveik horizontaliai ar vertikaliai, tampa horizontali ar vertikali. Žr. [Ryšiai ir matmenys](topic:relations-dimensions).

Išjunkite, kai norite išdėstyti geometriją šalia kitos geometrijos, nesusiedami jos su ja. Žymeklis vis tiek prisitraukia prie taškų ir kreivių, bet nieko nesujungiama: linijos, nubraižytos grandine, nesidalija galais, todėl tempimas gali juos atitraukti. Ryšius, kurių norite, pridėkite patys iš dešiniojo skydelio. Uždaras kontūras vis tiek išstumiamas, kai jo galai susiliečia.

:::note
Nustatymas keičia tik tai, ką prideda nauja braižymo veika. Eskize jau esantys ryšiai lieka, o apvalinimo įrankis vis tiek sukuria savo liestinį lanką ir spindulį.
:::

## Eskizavimas: matmuo braižant

**Matmuo braižant** (pradžioje įjungta): kol braižoma linija, stačiakampis, apskritimas ar lankas, įvedus skaičių užpildomas dydžio langelis šalia žymeklio ({{key:Tab}} eina į kitą langelį), o {{key:Enter}} nubraižo figūrą tokio dydžio, su valdančiu matmeniu už kiekvieną įvestą dydį. Išjungta: įvedus skaičių braižant, nieko nevyksta, o figūros braižomos tik spustelėjimais. Žr. [Įveskite dydį braižant](topic:sketch-basics#type-the-size-as-you-draw).

## Kampo indikatorius

Ką rodo 3D vaizdo kampe: **Vaizdo kubas** (pradžioje; viršuje dešinėje – spustelėkite paviršių, briauną ar kampą, kad žiūrėtumėte iš ten, vilkite jį, kad suktumėte vaizdą, vilkite jo kompaso žiedą, kad pasuktumėte modelį), **Ašių piktograma** (mažas X, Y, Z žymeklis apatiniame kairiajame kampe, kuris sukasi kartu su vaizdu: X raudona, Y žalia, Z mėlyna) arba **Nėra**. Nė vienas nerodomas braižant eskizą ar brėžinio lape. Žr. [Vaizdo kubas](topic:view-cube).

## Sprendiklio gijos

Kiek gijų gali naudoti modeliavimo sprendikliai. **Automatiškai** (pradžioje) paima vienu mažiau nei kompiuterio loginių procesorių (daugiausia 16), kad puslapis liktų jautrus, kol skaičiuojamas tyrimas; arba pasirinkite skaičių. Dideli vokselių tyrimai, bukliavimas, įtempiai laike ir tėkmė sprendžiami greičiau keliomis gijomis (pagal mūsų matavimus apie 2× su 4 gijomis 80,000 kubų, daugiau nenaudojamame kompiuteryje); modeliai iki maždaug 20,000 nežinomųjų lieka vienoje gijoje, nes gijų paleidimas kainuoja daugiau, nei sutaupo. Gijomis gautas sprendimas duoda tą patį atsakymą kaip viena gija (iki apvalinimo: sumos sudedamos kita tvarka). Kiekvieno tyrimo rezultatų sąraše po **Sprendiklis** rodoma **N gijų** arba **1 gija** su priežastimi.

Gijoms puslapis turi būti **kryžminės kilmės izoliuotas** (naršyklė leidžia darbininkams dalytis atmintimi tik tada). Laboratorijos puslapis toks yra; kur ne, nustatymas tai pasako („Šis puslapis nėra kryžminės kilmės izoliuotas, todėl sprendikliai veikia vienoje gijoje, kad ir kas čia pasirinkta.“), ir kiekvienas skaičiavimas naudoja vieną giją. Viskas kita veikia taip pat, o atsakymai tie patys.

Laminarinės tėkmės tyrimai taip pat naudoja gijas (apie 2.5× su 4 gijomis 54,000 skysčio ląstelių, tas pats atsakymas iki paskutinio skaitmens). Kvadratinio tetraedro sprendiklis ir šiluminis perdavimas veikia vienoje gijoje: jų gijinimas mūsų bandymo kompiuteryje buvo išmatuotas lėtesnis (jų sprendikliai ribojami atminties greičio ir žingsnio, kurio negalima padalinti).

### Jūsų savo tinklalapio serveryje

Jei PartCraft paleidžiate savo serveryje, jis veikia kaip pateiktas. Sprendiklių gijoms serveris turi siųsti du antraštės laukus su PartCraft puslapiu:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache serveryje, aplanko `.htaccess` faile (reikia mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx serveryje, `location` bloke, kuris teikia PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Perkraukite puslapį: Parametrai › Sprendiklio gijos tada siūlo **Automatiškai** su jūsų kompiuterio skaičiumi. Antroji antraštė priverčia naršyklę atmesti viską, ką puslapis įkelia iš kitos svetainės, jei ji to neleidžia; tai tinka PartCraft, nes jis įkelia viską iš savo aplanko.
