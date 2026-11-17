---
title: Vienādojumi abos virzienos
summary: Mainiet parametru, un detaļa seko; ierakstiet jaunu izmēru atvasinātajā skaitlī, un PartCraft aprēķina parametru aiz tā, jautājot, kurš no tiem var mainīties, ja var mainīties vairāki.
keywords: vienādojumi, risināt atpakaļ, atvasināts izmērs, divvirzienu, apgriezts, mērķa meklēšana, parametri, saistītās vērtības, kurš parametrs
from: 82dc0269
---

Vienādojums, piemēram, **Extrude1 depth = thick + extra**, darbojas abos virzienos.

## Uz priekšu: mainiet parametru

Cilnē {{ui:Parameters}} mainiet `thick` no 20 uz 30. Extrude1 dziļums kļūst par 30 + extra, un detaļa tiek pārbūvēta.

## Atpakaļ: mainiet atvasināto skaitli

1. Noklikšķiniet uz "Extrude1" vēsturē. Tā lodziņš **Dziļums (mm)** rāda **ƒ**: vienādojums to vada.
2. Ierakstiet izmēru, ko vēlaties, piemēram, `40`, un nospiediet {{key:Enter}}.

PartCraft risina parametru aiz vienādojuma, cik soļu vajag (`depth = hub_h`, `hub_h = disc_t + 50`: ierakstot augstumu, mainās `disc_t`). Statusa josla saka, kas mainījās, piemēram, ka extra no 5 mainījās uz 15.

Ja vairāki parametri vada skaitli, lodziņš jautā **Kuram parametram jāmainās?** un tos uzskaita. Noklikšķiniet uz viena; pārējie saglabā savas vērtības. {{ui:Cancel}} neko nemaina.

Tas pats darbojas skicē: veiciet dubultklikšķi uz atvasināta izmēra, ierakstiet vērtību un nospiediet {{key:Enter}}. Tas darbojas arī kolonnā **Vērtība** parametru tabulā, parametram, kas pats ir izteiksme.

## Kad tas nav iespējams

- Skaitli, kam jābūt veselam (šablonas skaits) vai kas jāsaglabā diapazonā (leņķis līdz 360°), noraida, pirms kaut kas mainās.
- Vienādojums, kurā ir tikai fiksēti skaitļi (`=40`), nav parametra, ko mainīt: ierakstītais skaitlis to aizstāj.
- Ja nav parametra vērtības, kas dotu ierakstīto izmēru, statusa josla to saka, un nekas nemainās.
- Skice, ko nevar atrisināt ar jauno vērtību, paturi iepriekšējās vērtības, un statusa josla norāda skici.

Katra izmaiņa, jebkurā virzienā, ir viens solis {{key:Mod+Z}} un {{key:Mod+Y}} darbībai.
