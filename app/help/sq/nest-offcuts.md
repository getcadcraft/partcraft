---
title: Ruaj dhe ripërdor mbetjet
summary: Pas një vendosjeje, ajo që mbetet nga çdo pllakë bëhet një mbetje e numëruar në një listë stoku; vendosja e radhës përdor fillimisht mbetjet, pastaj pllakat e plota.
keywords: vendosje, mbetje, mbetje e përdorshme, stok, mbetje, pllakë, fletë, ripërdorim, material, trashësi, CSV
from: 7a68d4b8
---

Kur vendos pjesë mbi pllaka, mbetja e përdorshme e çdo pllake (jo copëza) mund të mbahet si **mbetje**: një kontur i numëruar (R-0001, R-0002 …) me materialin, trashësinë, madhësinë e vet dhe punën nga erdhi. Lista ruhet me skedarin dhe mund të ruhet si CSV.

## Përdore përsëri

Shkruaj **materialin** dhe **trashësinë**, lëre {{ui:Përdor fillimisht mbetjet}} të ndezur, dhe vendos. Mbetjet e të njëjtit material dhe trashësi provohen fillimisht ato më të voglat; pjesët që futen shkojnë mbi to, brenda konturit të vetë mbetjes dhe larg skajit të saj; ajo që nuk futet shkon mbi pllaka të reja. Raporti i punës thotë cilat mbetje u përdorën dhe çfarë mbeti. Me {{ui:Ruaj mbetjet e tepërta si mbetje}} të ndezur, {{ui:Shto këtë punë në stok}} e shkruan pastaj në listën e stokut: një mbetje që u përdor shënohet **Përdorur** (me punën) dhe nuk ofrohet më; ajo që mbetet prej saj bëhet një mbetje e re që mban mend prindin e vet.

## Çfarë llogaritet si mbetje

Mbetja matet me hapësirën që ke vendosur (asnjë pjesë nuk është më afër prerjes se kaq). Shiritat më të ngushtë se një e njëzetë e pllakës dhe copat më të vegjël se 2 % e saj janë hedhurinë; ndrysho të dy kufijtë nëse punishtja jote mban copa më të vogla. Vrimat brenda pjesëve janë të pjesëve dhe nuk mbahen. Një rul nuk ka mbetje.

## Në vizatim

DXF i një vendosjeje vizaton konturin e çdo mbetjeje në shtresën REMNANTS me numrin e saj në mes, që copat të mund të shënohen kur priten.

Nuk është ndërtuar ende: drejtimi i kokrrës së një mbetjeje, fletë me barkod ose etiketa, mbetje rulesh, stok i përbashkët ndërmjet projekteve.
