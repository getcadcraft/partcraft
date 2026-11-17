---
title: Inseneriteek
summary: Õpikuvalemid loetavate skriptidena SI-ühikutes, iga tulemus koos allikaga: toru- ja kanaliivool, soojusülekanne ja soojusvahetid, rõhuga koormatud osad, gaasidünaamika, vee ja õhu omadused, materjalid ning kontrollitud ühikud. Mis on mille jaoks hea ja kus see lõpeb.
keywords: insener, teek, inseneriteek, ühikud, Darcy-Weisbach, Colebrook, Reynolds, hõõrdetegur, Dittus-Boelter, Gnielinski, NTU, efektiivsus, LMTD, ribi, Barlow, Lamé, otsik, isentroopne, Mach, ummistunud vool, vesi, õhk, omadused, materjal, allikad
from: 786ef967
---

Inseneriteek on skriptide kogu Script-tööruumi teegis (`craftlib/eng`). Iga skript on funktsioon, mida saad lugeda ülevalt alla, ja selle päises on selle **meetod**, **ühikud**, **piirid**, **viited** ning **kontroll** töötava arvuga. Need kasutavad kogu ulatuses SI-ühikuid ja tagastavad suurusi, millel on **ühik** ja **allikas**, nii et andmeleht saab trükkida, kust iga number tuli.

## Kontrollitud ühikud

`to_si(10, 'bar', 'Pa')` teisendab väärtuse ja keeldub ühikust, mis mõõdab midagi muud (pikkus, kui oodatakse rõhku). `from_si`, `unit_convert(1, 'bar', 'psi')` ja `unit_kind('W/(m K)')` („soojusjuhtivus“) töötavad samamoodi. `temp_k(25, 'C')` ja `temp_from_k` teisendavad temperatuure, millel on nihe.

## Omadused

- `fluid('water', T)` ja `fluid('air', T, p)`: tihedus, viskoossus, juhtivus, erisoojus, Prandtli arv. Vesi 0 kuni 100 °C, õhk 250 kuni 600 K; väljaspool seda peatub see ega ekstrapoleeri.
- `material('ss304')`: Youngi moodul, Poissoni tegur, tihedus, voolavuspiir, juhtivus, erisoojus, paisumine: toatemperatuuri väärtused samadest andmelehtedest, mis Simulation. Päris disain kasutab tarnija sertifitseeritud arve. Temperatuurikõverad pole veel ehitatud.

## Vool torudes ja kanalites

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminaarne, seejärel turbulentse voolu korral Colebrooki võrrand; vahemikul 2300 kuni 4000 pole usaldusväärset valemit ja skript ütleb seda), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ümmargune toru, kõik korraga) ja `rect_channel` (laminaarsed ristkülikukujulised kanalid Shah ja London'i sobitusega).

## Soojusülekanne

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (valib laminaarse või turbulentse ja nimetab korrelatsiooni), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ja `ntu_for` (efektiivsus-NTU seosed vastuvoolu, paralleelvoolu, kesta-toru, ristvoolu ja ühe muutuva voolu jaoks) ning `hx_size` (suurus UA, mida koormus vajab; see ütleb, kui palju on võimalik, kui koormust ei saa täita).

## Rõhuga koormatud osad

`allowable_stress` (voolavuspiir jagatud ohutustegurile), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, rõngaspinge või nihke kriteeriumi järgi) ja `wall_sphere`. Need on õpikumarginaalid, **mitte rõhunõudlike anumate normi arvutus**: korrosioonivaru, liitekoefitsient ja normitegurid puuduvad.

## Gaasidünaamika

`isentropic` (suhted Macha arvul), `mach_from_area`, `choked_flow`, `throat_area` ja `exit_mach` täiuslikule gaasile ilma hõõrdumise, soojuse ja löökideta.

## Kontrolli tulemust

`check_stress`, `check_thermal` ja `check_flow` käivitavad PartCraftis oma pinge-, juhtivus- ja vooluanalüsaatorid skriptist genereeritud detailil ning loevad tagasi maksimaalse pinge ja nihke, temperatuurid ja soojusvoo ning kanalivõrgu läbilaskvuse. Need ei muuda analüsaatoreid. Pinge- ja temperatuurikontrollid kasutavad vokseleid, nii et kumer pind on trepp ja terava sisenurga pinge või punktkoormuse all sõltub see vokseli suurusest.
