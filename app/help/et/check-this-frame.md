---
title: Kontrolli seda raami
summary: Võta keevisdetaili terasliikmed (alus, statiiv, torude ja profiilide raam), aseta seadmed jalgadele ja toed põrandale ning vaata, kui palju igast liikmest ja igast keevisõmblusest on kasutusel standardi AISC 360-16 või EN 1993 järgi. Abivahend, kuni insener on selle üle vaadanud.
keywords: raam, keevisdetail, alus, pumba alus, konstruktsioonielement, keevis, keevisõmblused, kontroll, AISC 360, EN 1993, kasutusaste, tugi, seade, koormus, õõnes profiil, HSS, RHS, CHS, insener
from: 032e34ee
---

{{ui:Kontrolli seda raami}} võtab keevisdetaili sirged terasliikmed, ehitab neist raami, lahendab selle terase ja raamile pandud seadmete kaalu all ning kontrollib iga liiget ja iga keevisõmblust, kus liikmed kohtuvad. Üks käik, üks tabel.

:::warning
See on **abivahend, kuni insener on selle üle vaadanud**. See ei ole pitser ja läbimine ei ole disain. See kasutab liikmete keskjooni nii, nagu need on joonistatud, käsitleb iga liitekohta kui ümber profiili täielikult keevitatut, võtab nurkõmbluse jala profiili seinast (kuni 8 mm), kui seda ei seadistata, ning ei kontrolli poltide, plaatide, alusplaatide, ankrute, surve toetuse, lõikeploki, väsimuse ega tõstmise kohta.
:::

## Käivita

1. Joonista liikmed {{ui:Konstruktsioonielement}} abil (profiilid tulevad profiilitabelist).
2. Ava {{ui:Vaated}} › {{ui:Kontrolli seda raami}}. Ütle, kus raam seisab (**tugi** igal jalal: liigendtoega, jäigalt kinnitatud või rulltoega; {{ui:Liigendtoed jalgadel}} paneb ühe igasse madalaimasse liikme otsa) ja mis sellel seisab (**seadmed**: mass, raskuskese, punktid, kus need on poltidega kinnitatud, ja valikuline horisontaalne surve).
3. Vali kood: **ASCE 7 + AISC 360-16** või **EN 1990 + EN 1993**. Määra terase klass ja AISC puhul keevismetalli tugevus (482.6 MPa on E70).
4. Vajuta {{ui:Kontrolli}}. {{ui:Salvesta aruanne CSV-na}} kirjutab iga tabeli, kusjuures esimene rida on ülevaatamata märge.

Raam loetakse millimeetrites, detaili vertikaaltelg üleval. Toed ja seadmete punktid kirjutatakse x y z-na samas raamis, kus z on kõrgus.

Liikme ots, mis asub teise liikme keskel, jagab selle seal, nagu teeb ka jala või poltkinnituse punkt liikme joonel. Koormus jagatakse poltkinnituspunktide vahel jäiga kehana; raskuskese jalgade välisküljel või tõsteseade jala juures öeldakse välja, mitte ei peideta.

## Mida saad

- Kõige enam kasutatud üksus ja see, kas miski ebaõnnestub. Üksused, mida kontroll ei suuda hinnata (profiil, mida tabelis ei ole, või teras ilma teguri koodita), loetakse ja nimetatakse, mitte ei arvestata läbituna.
- Üks rida liikme ja keevisgrupi kohta: kui palju on kasutatud, määravad kontrolli ja punkti ning koormuskombinatsiooni, mis valitses.
- Samad tabelid aruandes.

## Mida kontrollitakse

Õõnsad profiilid (RHS, SHS, CHS, toru) ja I-profiilid tõmbe, surve, paindumise, nihke ja nende koosmõju jaoks; nurk- ja täieliku läbitungimisega keevised elastse vektormeetodiga. Kompaktsed seinad ainult paindes õõnsate profiilide jaoks; saledad seinad öeldakse kui mittekontrollitud. Mõned konstandid on kirjutatud standarditest ja pole veel võrreldud trükitud koopiaga; aruanne loetleb iga allika.

Vt [Raamid terasprofiilidest](topic:structural-members) liikmete joonistamise ja nende lõikenimekirja kohta.
