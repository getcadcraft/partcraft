---
title: Odoslanie výkresu na laser
summary: Vyberte, čo robí každá hladina (rezať, rýhovať, gravírovať, vyplniť, obrázok), zobrazte náhľad pohybov hlavy, uložte G-kód režimu lasera GRBL alebo ho pošlite z prehliadača po orámovaní zákazky.
keywords: laser, laserová rezačka, laserový gravírovač, GRBL, G-kód, gravírovanie, výplň, rozptyľovanie, gravírovanie obrázka, rýhovanie, rezanie, Web Serial, Linux, orámovať zákazku, výkon, rýchlosť, prechody
from: 327b3c46
---

Panel {{ui:Laser}} mení hladiny výkresu na program pre laser s riadiacou jednotkou GRBL (väčšina hobby a malých dielní s diódovými a CO2 ovládačmi). V PartCraft zvoľte {{ui:Export}} › {{ui:Program pre laser…}}, potom {{ui:Pridať obrysy z DXF…}}: obrysy a diery sa načítajú na hladinu CUT. Ploché rozvinutia plechových súčiastok (s čiarami ohybov na hladine BEND) potrebujú presné jadro, ktoré táto verzia nemá. Nastavenia sa uložia do súboru súčiastky alebo zostavy.

:::warning
Každé nastavenie najprv vyskúšajte na odpadovom materiáli, noste ochranné okuliare vhodné pre váš laser, kde je veko, nechajte ho zatvorené a nikdy nenechávajte bežiaci laser bez dozoru. Čísla, s ktorými hladina začína, sú zástupné hodnoty, nie odporúčania pre žiadny materiál.
:::

## Určte, čo robí každá hladina

Každá hladina výkresu je jeden riadok. {{ui:Robí}} ju nastaví na **Rezať**, **Rýhovať**, **Gravírovať čiary**, **Vyplniť tvary**, **Gravírovať obrázok** alebo **Neposielať**, s {{ui:Výkon %}}, {{ui:Rýchlosť mm/min}} a počtom {{ui:Prechody}}.

- **Vyplniť** vypaľuje vnútro uzavretých tvarov čiarami, vzdialenými {{ui:Rozstup čiar}}, pod {{ui:Uhol}}, v oboch smeroch alebo v jednom, s presahom, aby mala hlava rýchlosť, keď sa laser zapne; krížová šrafa pridá druhý prechod pod 90°. Tvar s dierou zostane na mieste diery otvorený.
- **Gravírovať obrázok** premení obrázok na bodky (Floyd–Steinberg, Atkinson, usporiadané, alebo čierno-biele s prahom) alebo, s *Úrovne šedej*, na premenlivý výkon.
- Poradie: najprv obrázky a výplne, potom gravírovanie čiar, potom rýhy, potom rezy, aby sa vyrezaná súčiastka nehýbala, kým sa gravíruje. V rámci jednej hladiny idú dráhy **zvnútra** (otvor pred doskou, v ktorej je), vždy na najbližšiu.

## Zobrazte náhľad, potom uložte

Náhľad ukazuje, čo hlava robí: vypaľované čiary farebne, rýchle presuny sivo a zelený rámček okolo všetkého, čo sa vypaľuje. Pod ním sú rozmer, dĺžka vypaľovania a odhad času (bez zrýchlenia; skutočný stroj trvá dlhšie). {{ui:Uložiť G-kód…}} zapíše G-kód režimu lasera GRBL: `$32=1`, `M4` (alebo `M3`) s hodnotami S, pohyby `G0` a `G1`, na konci `M5`. X0 Y0 je ľavý dolný roh zákazky, pokiaľ nezvolíte začiatok výkresu: nastavte tam nulu práce vášho stroja. G-kód sa riadi zdokumentovaným režimom lasera GRBL; na skutočnom lasery zatiaľ nebol vyskúšaný.

## Odoslanie z prehliadača

V Chrome a Edge sa po stlačení {{ui:Pripojiť…}} opýta, aby ste vybrali USB port lasera. Nič sa nepripojí ani neodošle, kým nestlačíte tlačidlo. Najprv stlačte {{ui:Orámovať zákazku}}: hlava obkreslí rámček zákazky s laserom **vypnutým** (alebo pri nízkom výkone, ktorý nastavíte pre ukazovateľ), aby ste videli, kde bude vypaľovať. Až potom sa zapne {{ui:Odoslať zákazku}}, a ak niečo zmeníte, zase sa vypne. {{ui:Pozastaviť}} podrží hlavu, {{ui:Zastaviť}} ju tiež podrží, resetuje riadiacu jednotku (laser sa vypne) a pošle `M5`. Tam, kde chýba Web Serial (Firefox, Safari a CadCraft Studio, ktorého webové zobrazenie ho zatiaľ nemá), uložte G-kód a pošlite ho vlastným programom lasera.

## Ešte nie je hotové

Formáty iných riadiacich jednotiek (Ruida, lasery Marlin, súbory výrobcov), záložky a nábehy, odsadenie šírky rezu (kerf), knižnice materiálov, rotačná a osi Z, zarovnanie kamerou.
