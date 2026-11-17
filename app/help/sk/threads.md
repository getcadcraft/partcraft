---
title: Závity na hriadeľoch a dierach, nakreslené alebo namodelované
summary: Pridajte metrický alebo lichobežníkový závit podľa ISO na ľubovoľnú okrúhlu plochu, hriadeľ alebo dieru. Ponechajte ho kozmetický pre výkresy, alebo namodelujte skutočný špirálový závit pre 3D tlač s vôľou, aby sa vytlačené súčiastky dali zaskrutkovať.
keywords: závit, závity, namodelovaný závit, špirála, skrutka, skrutka s maticou, hriadeľ, diera, vonkajší závit, vnútorný závit, kozmetický závit, metrický závit, lichobežníkový, Acme, vodiaca skrutka, Tr16x4, M10, 3D tlač, tlač, vôľa, uloženie, ľavý smer, závitový otvor
from: 4f6401cc
---

{{ui:Závit}} nanáša závity na okrúhle plochy: vonkajšok hriadeľa (vonkajší závit) alebo vnútro diery (vnútorný závit). PartCraft podľa plochy rozpozná, ktorý ide.

Závit je na začiatku **kozmetický**: plocha zostáva hladká, pohľad kreslí závit ako prerušované kružnice a výkresový list ho zaznamená, napríklad „M10×1.5 - 6g, závit dlhý 20“. Zaškrtnite **Namodelovaný**, aby sa do súčiastky vyrezal skutočný špirálový závit, pre 3D tlač alebo model, ktorý musí vyzerať správne.

## Závit na hriadeli alebo diere

1. Vytvorte hriadeľ alebo dieru v rozmere závitu: hriadeľ Ø10 pre skrutku M10, alebo dieru Ø8.5 (vŕtaný otvor) pre maticu M10.
2. Kliknite na okrúhlu plochu a zvoľte {{ui:Viac}} › {{ui:Závit}}. Ak nie je vybraná okrúhla plocha, PartCraft vás vyzve kliknúť na plochy a potom na {{ui:Hotovo}}.
3. V pravom paneli skontrolujte **Veľkosť**. **Prispôsobiť ploche** vyberie veľkosť sama: pre hriadeľ veľkosť, ktorej vonkajší priemer zodpovedá priemeru hriadeľa; pre dieru veľkosť, ktorej vnútorný priemer do nej pasuje.

Závit začína na otvorenom konci plochy, kde súčiastka ďalej nepokračuje pozdĺž osi: voľný koniec hriadeľa, ústie diery. **Začať na druhom konci** to otočí.

## Nastavenia

| Nastavenie | Voľby | Predvolené |
|---|---|---|
| **Tvar** | ISO metrický (60°), M1.6 až M64 hrubý; lichobežníkový (Tr, 30°), Tr8×1.5 až Tr60×9 | ISO metrický |
| **Veľkosť** | Prispôsobiť ploche, alebo jedna veľkosť zo zoznamu | Prispôsobiť ploche |
| **Celá plocha** | Zrušte, aby ste zadali **Dĺžku (mm)** meranú od začiatku | Zaškrtnuté |
| **Začať na druhom konci** | Závit beží od druhého konca plochy | Vypnuté |
| **Smer** | Pravotočivý alebo ľavotočivý | Pravotočivý |
| **Namodelovaný** | Vyrezať skutočný špirálový závit | Vypnuté |
| **Vôľa (mm)** | Zobrazí sa, keď je zaškrtnuté Namodelovaný: o koľko je závit hriadeľa menší a závit diery väčší, po celom obvode | 0.1 |

Veľkosť, ktorá plochu nepasuje, sa aj tak vytvorí, orezaná na plochu, a panel to povie, napríklad „Hriadeľ Ø12 mm nie je Ø10 mm pre M10“. Viac plôch môže zdieľať jeden prvok Závit; pri **Prispôsobiť ploche** dostane každá vlastnú veľkosť.

## Namodelované závity pre 3D tlač

Namodelovaný závit sleduje štandardný základný profil: ISO 68-1 pre metrické závity (ploché vrcholy a dná, boky 60°), ISO 2901 pre lichobežníkové (boky 30°). **Vôľa** posúva celý profil dovnútra (hriadeľ) alebo von (diera), aby sa vytlačené súčiastky dali zaskrutkovať:

- **0.1 až 0.2 mm** vyhovuje väčšine tlačiarní. Najprv vytlačte skúšobnú skrutku a maticu.
- **0** je štandardný profil pre obrobené súčiastky alebo na kontrolu uloženia.

Skrutka a matica s rovnakou vôľou sa nikdy nedotýkajú na bokoch: medzera medzi nimi je dvojnásobok vôle po celom obvode.

:::tip
Jemné stúpania sa tlačia zle: M3 a menšie, alebo stúpanie pod 0.5 mm, sú takmer na hranici toho, čo dokáže tryska 0.4 mm vytlačiť. Namodelujte väčšie závity a pre malé použite vložku zaliatu teplom alebo závitový otvor.
:::

Namodelovaný závit je súčasťou telesa: exporty STL, 3MF a STEP ho obsahujú a Meranie ho meria. Súčiastku spomaľuje pri prepočte: závit M10 dlhý 20 má asi 150,000 trojuholníkov.

## Závitové otvory

**Závitový otvor (ISO metrický)** má tiež prepínač **Namodelovaný** s rovnakou **Vôľou**. Pozri [Vŕtanie dier a zahĺbených dier v bodoch náčrtu](topic:holes).

## Keď sa závit nedá vytvoriť

- „Závit patrí na okrúhlu plochu (valec): hriadeľ alebo diera.“ Vybraná plocha je rovná alebo zakrivená iným spôsobom.
- „Pre okrúhlu plochu Ø0.6 mm nie je žiadna štandardná veľkosť: zvoľte veľkosť.“ Prispôsobenie ploche nenašlo nič do 12 % plochy. Zvoľte **Veľkosť** alebo zmeňte plochu.
- „Plocha, na ktorej bol tento závit, zmizla (…). Vyberte ju znova.“ Predchádzajúca zmena plochu odstránila. Kliknite na {{ui:Vybrať plochy}} a kliknite na plochu znova.

:::note
Palcové závity (UNC, UNF), rúrkové závity, kužeľové závity, výbehy závitu a zrazené začiatky závitov ešte nie sú hotové. Presné jadro zobrazuje namodelovaný závit ako kozmetický.
:::
