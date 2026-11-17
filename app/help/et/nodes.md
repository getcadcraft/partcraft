---
title: Sõlmed: mudeli koostamine juhtmestamise teel
summary: Ühenda arvud punktideks, punktid kõverateks ja kõverad pindadeks. Muuda arvu ja kõik allavoolu ehitatakse uuesti. Iga sõlm on ka CraftScripti rida ning graaf salvestatakse faili sisse.
keywords: sõlmed, sõlmede redaktor, visuaalne programmeerimine, parameetriline, graaf, juhtmed, pordid, vabakujuline, nurbs, koonus, kaar, kõver, pind, jada, vahemik, juhuslik, nimekiri, skript, craftscript, grasshopper
from: 3a4625de
---

**Sõlmede** redaktor koostab geomeetria, ühendades kastid juhtmetega. Iga kast (sõlm) teeb ühe väikese töö: loob arvu, punkti, ringi või lofti. Ühendad ühe tulemuse järgmise sisendiga ning mudel järgneb, kui muudad algust arvu.

Ava see töötsoonide loendist: {{ui:Sõlmed}}. See avab redaktori akna. Detail, millel on juba graaf, näitab seda, kui avad töötsooni. See on akna vaade 3D-vaate kohal: lohista pealkirjaribast liigutamiseks, nurgast suuruse muutmiseks.

## Juhtmestamine

1. Vali sõlm vasakul loendist (kirjuta otsingukasti, et loendit kitsendada; <kbd>Enter</kbd> lisab esimese vaste). Sõlm ilmub lõuendi keskele.
2. Lohista ühe sõlme paremal pool olevast ümmargusest **väljundpunktist** teise sõlme vasakul pool olevasse ümmargusse **sisendpunkti**. Punkt muutub roheliseks, kui see sobib, ja punaseks, kui ei sobi; põhjuse näed, kui viid kursori punkti kohale.
3. Sisend, millele pole midagi ühendatud, näitab kasti sisestatud väärtuse jaoks. Kirjuta arv ja vajuta <kbd>Tab</kbd>: tulemus ehitatakse uuesti.
4. Väike ring sõlme pealkirjaribal on selle **silm**. Sõlm, mille silm on sisse lülitatud, joonistatakse 3D-vaates: kõverad joontena, pinnad varjutatuna, punktid täppidena.

Lohista sõlme pealkirjaribast. Lohista tausta, et vaadet nihutada, keri ratast, et suumida. <kbd>Delete</kbd> eemaldab valitud sõlme. {{ui:Korrasta}} paigutab sõlmed veergudesse, {{ui:Mahuta}} toob need kõik vaatesse, {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} liiguvad läbi sinu muudatuste.

## Tüübid ja ühikud

Pordil on tüüp: arv, jah/ei, punkt, vektor, kõver, pind, võrk, tahke keha või „geomeetria“ mis tahes neist. Punkt võib sööta vektori sisendit ja vastupidi. Arvudel on ühik: **pikkus** on millimeetrites ja **nurk** kraadides. Pikkus ei saa sööta nurka ning pikkus korrutatuna pikkusega (pindala) keeldutakse, nii et vale juhe peatatakse juba selle tegemisel.

Ruudukujuline punkt on **nimekiri**. Kui nimekiri jõuab ühe väärtusega sisendini, jookseb sõlm iga elemendi jaoks eraldi ja tema tulemus muutub nimekirjaks. Lühem nimekiri kordab oma viimast elementi. Näiteks kõrguste **Jada** sisendiga **Teisalda** teeb koopiate virna.

## Tahked ja Boolean-tehted sõlmedena

Grupp **Tahked** teeb suletud kehi samadest täpsetest pindadest, mis pindade paneelil: **Kasti tahke**, **Silindri tahke** ja **Sfääri tahke** (mõõtmed mm-des), **Ühend**, **Lahuta** ja **Lõikumine** (teine tahke võetakse esimesest; täpsus on see, kui kaugel võivad tahke mootori kolmnurgad täpsetest pindadest olla), **Tahkete vaheline ümardus** (tahud nende numbri järgi tahkes, 1 on esimene; raadius ja, kui see on üle 0, raadius lõpus), **Tahke maht** (mm³) ja **Tahke võrguks** (et seda näha või salvestada). Tahkel on oma pordi tüüp: punkti ega arvu ei saa tahke sisendisse juhtida ning punkt jääb punaseks. Boolean- ja ümardussõlmed kasutavad programmi enda tahkemootorit, mis laaditakse redaktori esimesel avamisel.

## Vead

Sõlm, mis ei suuda oma tööd teha, ütleb selle oma nime all punaselt, miks (näiteks „Raadius peab olema suurem kui null.“), ning järgnevad sõlmed ootavad. Sama teade on probleem paneelil Probleemid, nii et leiad selle sealt.

## Iga sõlm on skriptirida

Vajuta {{ui:Skript}}, et näha graafi CraftScriptina: üks rida sõlme kohta, näiteks `n3 = nd_circle(n2, n1, [0 0 1]);`. Muuda teksti ja vajuta {{ui:Koosta graafik sellest skriptist}}, et see uuesti graafiks tuua. Samad `nd_` funktsioonid töötavad PartCraftis CraftScripti sees, nii et graafi saab seal käivitada, tsüklisse panna või testida. Juhuarvud võtavad alati **seemne**, nii et sama graaf annab igal arvutil sama tulemuse.

## Salvestatud faili sees

Graaf salvestatakse detailifaili sisse (mitte ajalukku, nii et redaktori {{ui:Võta tagasi}} on omaette). Sõlmed teevad kõverad, pinnad ja võrgud tahke kehaga kõrvuti: need ei muuda detaili tunnuseid.
