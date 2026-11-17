---
title: Atgriešanās un virzīšanās pa vēsturi
summary: Pārvietojiet atgriešanās joslu uz augšu un uz leju pa vienam elementam, lai skatītu detaļas veidošanos, ievietotu elementus vidū un atgrieztos līdz beigām.
keywords: atgriešanās, atgriezties, virzīties uz priekšu, atgriešanās josla, soļot pa vēsturi, ievietot elementu, iesaldēt, vēsture
from: 9a366cae
---

Atgriešanās josla nosaka, cik daudz vēstures ir veidots. Elementi zem tās ir pelēki un nav veidoti; jauni elementi tiek ievietoti joslā.

## Soļot pa vienam elementam

Ar detaļu ekrānā (nav atvērta skice vai rasējums):

| Darbība | Rezultāts |
|---|---|
| {{key:[}} vai augšupvērstās bultiņas poga blakus detaļas nosaukumam | Josla pārvietojas augšup par vienu elementu |
| {{key:]}} vai lejupvērstās bultiņas poga | Josla pārvietojas lejup par vienu elementu |
| {{key:End}} vai poga "joslu līdz galam" | Katrs elements tiek atkal veidots |

Statusa josla rāda, kur atrodas josla, piemēram, "Atgriešanās josla pēc Sketch1: 1 no 2 elementiem veidots." Pogas ir izslēgtas, ja josla šajā virzienā tālāk nevar pārvietoties.

Varat arī izvēlēties {{ui:Atgriezties līdz šeit}} jebkurā elementā vai noklikšķināt uz **Atgriešanās josla · virzīties uz priekšu** vēsturē.

## Ievietot elementu vidū

1. Pārvietojiet joslu atpakaļ, līdz tā atrodas tur, kur jāiet jaunajam elementam.
2. Pievienojiet elementu: tas tiek ievietots joslā.
3. Nospiediet {{key:End}}, lai veidotu pārējo vēsturi virs tā.

Katrs joslas pārvietojums ir solis, ko varat atsaukt ar {{key:Mod+Z}}. Joslas vieta tiek saglabāta failā, tāpēc detaļu var nosūtīt atgrieztu. Komandrindas rīks to arī pārvieto: `partcraft rollback part.json` un `partcraft forward part.json --end`.
