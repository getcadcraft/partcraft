---
title: Koormustest kasvatatud kuju (generatiivne)
summary: Vali kinnitatud ja koormatud pinnad, alad, mida hoida ja hoida vabana, sihtruumalad ja materjalid ning genereeri tulemused: iga ruumala jaoks leitud jäigemad kujud, mis kontrollitakse uuesti tahkisena, võrreldakse tabelis ja laetakse alla STL- või STEP-vormingus või uue detailina.
keywords: generatiivne disain, topoloogia optimeerimine, SIMP, kergkaal, võrestik, orgaaniline kuju, tulemused, võrdle, mass, ruumalaosa, hoia, hoia sees, takistus, hoia vaba, disainiruum, minimaalne liikme suurus, STL, 3D-printimine
from: 5b91fa8e
---

**Generatiivne** tööruum eemaldab materjali, mida koormused ei vaja. Sa ütled, kus detail on kinnitatud ja koormatud, mis peab jääma ja mis peab jääma vabaks; PartCraft leiab iga sihtruumala jaoks kõige jäigema kuju (**topoloogia optimeerimine**), kontrollib iga kuju uuesti tahkisena tegeliku materjaliga ja näitab tulemusi kõrvuti. See töötab detaili nimetatud pindadel, mille [võrgutuum](topic:solid-kernels) neile annab.

Vali kastist **Tööruum** väärtus **Generatiivne**. Sinu detaili ei muudeta; uuring salvestatakse detaili faili sisse.

## Seadista uuring

1. Vajuta parempoolsel paneelil **Uus uuring**.
2. **Ruum**: *Detail sellisena, nagu ta on* eemaldab materjali sinu detailist; *Kast detaili ümber* kasvatab kuju kasti sees, mis on detailist suurem **kasti varu** võrra.
3. **Elemendi suurus**: jäta tühjaks automaatse suuruse jaoks (umbes 8,000 kuupi) või sisesta üks. Peenemad suurused annavad peenemad kujud ja võtavad kauem aega.
4. **Minimaalne liige**: liikmed, mis on umbes kaks korda sellest õhemad, ei teki. Tühi tähendab ühte ja poolt kuupi.
5. Märgi üks kuni kuus **Sihtruumalat** (osa disainiruumist, mida kuju võib täita) ja üks kuni neli **Materjali**. Iga ruumala genereeritakse üks kord; iga materjal kontrollitakse sellel kujul (kõige jäigem kuju ei sõltu materjalist, aga selle mass, pinge ja ohutustegur sõltuvad).

## Eesmärgid

- {{ui:Kinnitus}}: klõpsa kinnitatud pindadel. **Hõõrdevaba pind** paneeli loendist **Lisa** hoiab pinda ainult enda ulatuses (kasuta seda sümmeetriatasanditel).
- {{ui:Jõud}}: klõpsa koormatud pindadel, seejärel sisesta kogu jõud ja vali selle suund paneelil. **Rõhk** on loendis **Lisa**.
- {{ui:Hoia}}: klõpsa pindadel, mille ümbrus peab jääma tahkeks, ja määra, kui sügavalt (**Hoia tahke sees**) — näiteks poltide aukude ümber. Pinnad, mida kinnitad või koormad, jäävad alati alles.
- {{ui:Takistus}}: klõpsa pindadel, mille ümbrus peab jääma tühjaks, ja määra, kui kaugele (**Hoia tühi sees**) — ruum võlli või tööriista jaoks.

Vajuta pärast pindade klõpsamist **Valik valmis** või {{key:Esc}}. Rohelised ja punased toonid näitavad piirkondi.

## Genereeri ja võrdle

Vajuta {{ui:Genereeri}}. Paneel näitab edenemist ja jäänud aega; **Peata** tühistab. Iga tulemus ilmub tabelisse **Tulemused**: sihtruumala, materjal, **mass**, **suurim pinge**, **suurim nihe** ja **ohutustegur** (voolavuspiir ÷ pinge), kõik valmis kuju uuesti lahendamisest tahkete kuubidena tegeliku materjaliga.

Vali tulemus, et seda vaates näha (detail on peidetud; märgi **Näita detaili läbi selle**, et näha mõlemat). Tabeli all: mitu iteratsiooni see võttis ja kas see stabiliseerus, selle jäikus tahkisena võrreldes optimeerija enda näitajaga ning selle pind.

## Kasuta tulemust

- **STL**: suletud kolmnurkvõrk, valmis 3D-printimiseks.
- **STEP (tahuline)**: sama pind STEP-tahkisena, mis koosneb tasastest tahkudest.
- **Uus detailifail**: PartCrafti detail, mille ainus element on tulemus imporditud tahkisena. Ava see, et sellele visandada, teha auke või seda Simulatsioonis kontrollida. See on tahuline (tuhandeid tasaseid tahke), mitte muudetav kuju.
- **Lisa sellele detailile** ühendab tulemuse detailiga; see on saadaval ainult kasti disainiruumi puhul (kui ruumiks on detail ise, asub tulemus detaili sees).

**Uus detailifail** ja **Lisa sellele detailile** pole selles versioonis veel ehitatud: tulemus muutub imporditud tahkiseks, mis vajab täpset tuuma. STL- ja STEP (tahuline) allalaadimised töötavad.

## Kui palju sellele loota

- See optimeerib **jäikust** antud ruumala jaoks. Piirangud pingele ja tootmisreeglid (üleulatused, freesimissuunad, minimaalsed aukude suurused) puuduvad veel: kontrolli valitud tulemust [Simulatsioonis](topic:simulation) ja kohanda.
- Üks kuni kaks kuupi laiad õhukesed liikmed on ligikaudsed: peene detaili jaoks kasuta väiksemat elemendi suurust.
- Meetod on SIMP koos tiheusfiltri, läviprojektsiooni ja optimaalsuskriteeriumide uuendustega; teatatud pinge ja läbipaine on tulemuse kohta kuubina, mis on aus, kuid teravate nurkade juures jäme.

## Seotud

- [Kontrolli pinget ja läbipainet (Simulatsioon)](topic:simulation)
- [Eksport printimiseks, STEP ja DXF](topic:export-files)
- [Mida pole veel ehitatud](topic:not-built-yet)
