---
title: Solid FEM: detaili pingekontroll
summary: Lülita sisse lisamoodul Solid FEM, võrgusta detail, vali 3D-vaates kinnitatud tahud ja koormus, lahenda ning loe mudelilt nihe ja von Mises'i pinge.
keywords: solid fem, lõplike elementide meetod, fea, pinge, von Mises, nihe, kinnitatud tahk, koormus, rõhk, raskusjõud, omasagedus, võnkekuju, võrgusilm, lisamoodul
from: 8b7e6ba2
---

## Mida sa teed

Kontrolli ühte tahkist detaili koormuse all: kus see liigub ja kus pinge on kõige suurem. Uuring on lineaarne ja elastne, seega on see kontrolli abivahend; sinu insener vaatab tulemused üle.

## Sammud

1. Vali {{ui:Sätted}} › {{ui:Lisandmoodulid}} ja lülita sisse {{ui:Solid FEM}} (see on väljas, kuni sa seda ei tee). Ava paremal paneelil vahekaart {{ui:Solid FEM}}.
2. Jaotises {{ui:Materjal}} vali üks materjal või {{ui:Kohandatud}} ja sisesta Poissoni arv, tihedus ja voolavuspinge.
3. Vajuta {{ui:Lisa kinnitatud tahud}}, klõpsa 3D-vaates kinnitatud tahkudel ja vajuta seejärel {{ui:Valik on tehtud}}.
4. Lisa koormus nupuga {{ui:Lisa jõud}}, {{ui:Lisa rõhk}} või {{ui:Lisa raskusjõud}} ja vali selle tahud samamoodi.
5. Vajuta {{ui:Võrgusta detail}}, seejärel {{ui:Lahenda}}. Kui soovid sagedusi, vali kõigepealt jaotises {{ui:Uuring}} {{ui:Omasagedused}}.
6. Loe {{ui:Tulemused}} ja {{ui:Hoiatused}}, seejärel vajuta {{ui:Näita mudelil}}, et joonistada mudelile von Mises'i pinge, nihe või võnkekuju; {{ui:Eemalda graafik}} eemaldab selle.

## Märkused

- Leht lahendab kuni kindla arvu elemente; olekurida ütleb, kui sinu elemendisuurus on liiga peen.
- Pinge kinnitatud tahkudel, koormuspunktides ja teravates nurkades kasvab võrgusilma täpsustamisel. Täpsusta ja võrdle, enne kui tugineda tippväärtusele.
- Iga muudatus on üks tagasivõtmise samm ning seaded salvestatakse detailifaili.
- Plastsuse ja kontaktuuringute kohta vaata [Pinge ja läbipainde kontroll](topic:simulation).
