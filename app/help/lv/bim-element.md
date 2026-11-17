---
title: Projektēt BimCraft elementu un saglabāt to atpakaļ
summary: Detaļa, kas nosūtīta no BimCraft, atveras ar ēku ap to, pelēka un tikai lasāma. Mainiet to un pēc tam saglabājiet atpakaļ, lai BimCraft varētu pieņemt jauno formu.
keywords: bimcraft, bim, elements, nosūtīt, saglabāt atpakaļ, saite, ēka, konteksts, kaimiņi, balsts, kronšteins, ifc, pieņemt
from: 0978fe53
---

## Ko jūs darīsiet

Strādājiet ar detaļu, kas nākusi no BimCraft modeļa, tās vietā ēkā, un nosūtiet jauno formu atpakaļ.

## Darbības

1. BimCraft programmā atlasiet elementu un izvēlieties {{ui:Detaļu saites}} › {{ui:Nosūtīt uz PartCraft}}. PartCraft to atver kā jaunu detaļu. Statusa joslā norādīts, ka tas ir BIM elements.
2. Elementi ap to (3 m robežās) ir attēloti pelēkā krāsā. Tie ir šeit, lai projektētu pret tiem. Tos nevar atlasīt vai mainīt, un tie netiek saglabāti detaļas failā.
3. Mainiet detaļu kā parasti: griezt, pievienot, urbt, spoguļot. Tās sākumpunkts un asis ir paša elementa, tāpēc detaļa atgriežas savā vietā.
4. Izvēlieties {{ui:Fails}} › {{ui:Eksportēt}} › {{ui:Saglabāt atpakaļ programmā BimCraft}}. Statusa joslā norādīts, kuru revīziju nosūtījāt.
5. BimCraft programmā elements tiek rādīts kā mainīts, līdz tur esošā persona to pieņem.

## Ko jums vajadzētu redzēt

- Detaļa failā saglabā savu saiti. Ja to atverat vēlāk, statusa joslā joprojām teikts, ka tas ir BIM elements. Pelēkā ēka atgriežas, kamēr pārlūkprogrammā vēl ir pakete, ar kuru tā tika nosūtīta.
- Atkārtota saglabāšana atpakaļ nosūta 2., 3. un tā tālāk revīziju. BimCraft paturēs jaunāko.

## Noderīga informācija

- Forma atgriežas kā tīkla (mesh) modelis milimetros, elementa pašu asīs. Operācijas paliek PartCraft.
- {{ui:Saglabāt atpakaļ programmā BimCraft}} neko nedara detaļai, kas nav nākusi no BimCraft.
- Detaļai bez cieta ķermeņa nav nekā, ko nosūtīt.
- Abām lietotnēm jābūt atvērtām vienā un tajā pašā pārlūkprogrammā: nekas netiek augšupielādēts, abas lapas nodod elementu cita citai.
