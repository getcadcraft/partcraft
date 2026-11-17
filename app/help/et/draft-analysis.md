---
title: Tõmbenurga kontroll vormimiseks ja valamiseks
summary: Värvi detail selle tõmbenurga järgi vormi eemaldussuuna suhtes, vaata, millised pinnad eemalduvad, millised vajavad rohkem tõmbenurka ja millised eemalduvad vormi teisest poolest, koos iga osa osakaaluga pindalast.
keywords: tõmbenurga analüüs, tõmbenurk, kalle, vorm, valuvorm, survevalu, süstevormimine, tõmbesuund, jagamisjoon, alalõige, eemaldumine, kontrolli tõmbenurka
from: 6a106f83
---

Vormis, matriitsis või liivvalus tehtud detailid vajavad **tõmbenurka**: seinad on natuke kaldu, et detail saaks välja libiseda. **Tõmbenurga analüüs** värvib iga pinna selle järgi, kui palju see kaldub eemale suunast, milles vorm avaneb (**tõmbesuund**).

## Lülita sisse

1. Design-töötsoonis ava {{ui:Vaated}} ja vali {{ui:Tõmbenurga analüüs}}.
2. Määra **Tõmbesuund**: suund, milles vorm avaneb, piki X, Y või Z kummaski suunas, või **Ristsuunas valitud pinnaga**: vajuta {{ui:Vali pind}} ja klõpsa detaili lamedal pinnal.
3. Määra **Minimaalne tõmbenurk** kraadides: väikseim kalle, mida sinu protsess vajab (sageli 1° kuni 3°).

Detail on värvitud järgmiselt:

| Värv | Tähendab |
|---|---|
| Roheline: **Positiivne tõmbenurk** | Kaldub tõmbesuunas vähemalt minimaalse nurga võrra: eemaldub vormi sellest poolest |
| Oker: **Vajab tõmbenurka** | Minimaalse piires kummaski suunas, näiteks vertikaalne sein: lisa siia tõmbenurka |
| Punane: **Negatiivne tõmbenurk** | Kaldub tõmbesuunast eemale vähemalt minimaalse nurga võrra: eemaldub vormi teisest poolest või on alalõige, kui detail peab tulema ühest poolest välja |

Iga klassi osakaal detaili pindalast on näidatud selle kõrval. **Pööra tõmbesuund** vaatab vormi teisest poolest: roheline ja punane vahetavad kohti.

Kumerad pinnad hinnatakse punkt-punktilt, nii et silinder, mis on tõmbesuunaga risti, näitab riba, mis vajab külgedel tõmbenurka.

Värvid järgivad detaili, kui sa seda muudad. {{key:Esc}} või {{ui:Sulge}} lülitab analüüsi välja; detailis ei salvestata midagi.

:::tip
Tõmbenurga lisamiseks kasuta okra pindadel elementi {{ui:Kalle}} (vt [Pühkimine, loft ja kalle](topic:sweep-loft-draft)) ja kontrolli siis uuesti.
:::
