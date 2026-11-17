---
title: Mõõda kaugusi, nurki ja massi
summary: Klõpsa vaates kahele asjale, et saada minimaalne kaugus, nurk ja ΔX ΔY ΔZ; loe serva pikkust, augu läbimõõtu, tahu pindala või punkti koordinaate; saa detaili või koostu maht, mass, massikese ja inertsus.
keywords: mõõda, kaugus, minimaalne kaugus, nurk, pikkus, raadius, läbimõõt, pindala, koordinaadid, delta, kontrolli, massi omadused, mass, kaal, massikese, raskuskese, inertsus, inertsimoment, tihedus, materjal
from: 20bda0b7
---

**Mõõda** töötab mudelil igas tööruumis (Disain, Vorm, Simulatsioon, Generatiivne, Valmistamine) ja koostes. See asub rühma **Vaade** menüüs {{ui:Vaated}} või vajuta {{key:M}}. Kaart avaneb vaate vasakule ülanurgale.

## Mõõda ühte asja

Kliki tipule, servale või tahule. Kaart näitab:

- **Punkt** (tipp, serva keskpunkt või ringi keskpunkt): selle X, Y, Z.
- **Serv**: sirge, ring või kõver ja selle pikkus; ringi puhul ka raadius, läbimõõt ja keskpunkt.
- **Tahk**: lame, silinder, koonus jne ning selle pindala; lameda tahu normaal; silindri raadius ja läbimõõt (augu suurus). Pindalad on võrgukerne moodustatud tahkude omad.
- **Kogu keha**: hoia {{key:Shift}} all ja kliki detailil. Saad selle mahu, pindala, massi ja inertsi (vt allpool).

Osuti kinnitub tippudele, servade keskpunktidele ja ringi keskpunktidele 10 piksli piires; väike sinine täpp näitab kinnitust enne klikki. Augu keskpunkti valimiseks osuta augu keskele; selle serva (ringi) valimiseks osuta servale.

## Mõõda kahe asja vahel

Kliki teisele objektile. Kaart lisab:

- **Minimaalne kaugus** ja kaks lähimat punkti, joonistatud vaatesse joonega nende vahel.
- **ΔX, ΔY, ΔZ** esimesest lähimast punktist teiseni.
- **Nurk** kahe lameda tahu vahel (nende normaalide vahel, 0–180°), kahe sirge serva või telje vahel (0–90°) või serva ja tahu vahel.
- **Tasandite vahe** kahe paralleelse lameda tahu puhul, **Keskpunkt keskpunkti** kahe ringi või augu puhul, **Telg telje** kahe paralleelse augu või silindri puhul.

Kolmas klikk alustab uut paari. {{key:Esc}} tühjendab valimised; {{key:Esc}} veel kord (või {{ui:Sulge}}) sulgeb Mõõda. {{ui:Kopeeri}} paneb tulemused lõikepuhvrisse tabulaatoriga eraldatud tekstina, valmis kleepimiseks tabelarvutusse.

### Kui täpne see on

PartCraft ehitab detaili võrgukerneliga, seega arvutatakse kaugused võrgu tahkudel ja kaart ütleb **ligikaudne: tahkude järgi**: õige lameda tahu ja tippude vahel, veidi kõrvale kõverate puhul. Peenem **Kõverad** säte viib need lähemale. Täpne mõõtmine tõelistel pindadel nõuab täpset tuuma: selles versioonis veel pole.

## Massi omadused

Vali kaardil või menüüs {{ui:Vaated}} {{ui:Massi omadused}}. Detailil vali kaardil **Materjal** (teras, alumiinium, plastid ja teised tavapäraste tihedustega). Koostes kasutab iga detail oma omadustes määratud materjali (vali detail, seejärel **Materjal**) ning tulemus kehtib kõigi detailide kohta koos.

Kaart näitab massi, mahtu, pindala, massikeset, inertsitensorit (Ixx, Iyy, Izz ja korrutised Ixy, Iyz, Ixz kg·mm² ühikutes, massikeskme suhtes maailmatelgede järgi) ning põhimomente. Ilma materjalita näitab see sama ühiku tiheduse kohta (mm⁵) ega massi.

Arvud on täpsed võrgukerneli loodud tahkudeks jaotatud tahke jaoks (kõverad tahud tahkudena), seega tuleb ümar detail natuke madalam, ja kaart ütleb seda. Materjalide tihedused on tavalised käsiraamatu väärtused; päris sulam või kvaliteet võib erineda mõne protsendi võrra.

## Piirangud

- Kinnitused võivad leida punkti, mis on teise geomeetria taga peidus; kontrolli, et kaart näitab seda, mida mõtlesid.
- Mõõda suletakse, kui avad visandi või joonislehe või vahetad tööruumi.
