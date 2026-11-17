---
title: Zoznam súčiastok, rozložené zobrazenia a pohyb súčiastok
summary: Pridelite súčiastkam číslo, popis a materiál, čítajte a stiahnite kusovník, vytvárajte rozložené zobrazenia krokmi alebo automaticky, posúvajte súčiastky, ktoré nie sú spojené, nastavujte limity kĺbov a exportujte celú zostavu ako STL, 3MF alebo kusovník.
keywords: kusovník, zoznam súčiastok, číslo súčiastky, materiál, hustota, csv, rozložené zobrazenie, rozložiť, zbaliť, stopové čiary, presun súčiastky, ťahanie, gizmo, posun, otočenie, limity kĺbov, export zostavy, krok zostavy, výkres zostavy, bubliny
from: ebc9f6f3
---

Tieto nástroje sú na pravom paneli zostavy (pozri [Vytvorenie zostavy s kĺbmi](topic:build-assembly)).

## Vlastnosti súčiastky

Vyberte súčiastku v zozname vľavo. V časti **Vlastnosti súčiastky** nastavte:

- **Číslo súčiastky** (najviac 40 znakov) a **Popis** (najviac 200).
- **Materiál**: bežný materiál s jeho hustotou, alebo **Vlastná hustota…** na zadanie hodnoty v g/cm³. Panel potom zobrazí hmotnosť súčiastky.

Vlastnosti patria súčiastke, takže ich zdieľajú všetky jej kópie. Ukladajú sa v súbore zostavy.

## Kusovník

Ak nič nie je vybrané ({{key:Esc}}), panel zobrazí **Kusovník**: jeden riadok na súčiastku s jej poradovým číslom, množstvom (koľko kópií), číslom súčiastky, názvom, materiálom a hmotnosťou. Poradové čísla nasledujú poradie, v akom sa súčiastky prvýkrát objavia v zozname. Hmotnosti sa počítajú z objemu každej súčiastky (z fazetovaného telesa, ktoré vytvára sieťové jadro, pri guľatých súčiastkach je to o niečo menej) a jej materiálu; súčiastka bez materiálu nemá hmotnosť a vtedy nie je k dispozícii ani celkový súčet.

{{ui:Stiahnuť CSV}} uloží zoznam ako súbor CSV (alebo **Export › Kusovník (CSV)**). Otvorí sa v ľubovoľnom tabuľkovom editore; text, ktorý začína znakom = alebo +, dostane na začiatku apostrof, aby ho tabuľkový editor nespustil ako vzorec.

## Rozložené zobrazenia

Rozložené zobrazenie rozťahuje súčiastky pre obrázky. Nikdy nemení kĺby ani skutočnú polohu súčiastok: ukladanie, kontroly kolízií a exporty používajú skutočné polohy.

1. Ak nič nie je vybrané, vyberte {{ui:Nový pohľad}} v časti **Rozložené zobrazenia**.
2. V časti **Pridať krok** označte súčiastky, ktoré krok posúva, vyberte **Smer** (+X … −Z, normálu plochy, na ktorú kliknete, alebo **Potiahnite šípku v pohľade**) a **Vzdialenosť**, potom {{ui:Pridať krok}}. Pri **Ťahaním** potiahnite šípku a pustite: krok prevezme smer a vzdialenosť, o ktoré ste potiahli.
3. Pridajte ďalšie kroky. Prehrávajú sa jeden za druhým.
4. Posuvníkom medzi **Zostavené** a **Rozložené** animujte zobrazenie. Prerušované stopové čiary vedú od kľudovej polohy každej súčiastky k jej aktuálnej polohe.

{{ui:Auto (radiálne)}} posúva každú súčiastku okrem pevnej preč od stredu zostavy. {{ui:Auto (kĺby)}} posúva každú spojenú súčiastku (spolu so všetkým, čo je k nej naviazané pod ňou) von pozdĺž normály plochy jej kĺbu. Môžete si ponechať viacero pomenovaných zobrazení; vyberte jedno v **Zobrazenie**, alebo **Zostavené** na vrátenie súčiastok späť. Zobrazenia sa ukladajú v súbore zostavy.

## Presun súčiastky rukou

Ručne sa dá posúvať len súčiastka bez kĺbu k pevnej súčiastke (pevná súčiastka je pevne ukotvená; kĺby umiestňujú ostatné). Vyberte ju a v časti **Presunúť rukou**:

- Zadajte **ΔX, ΔY, ΔZ** a vyberte {{ui:Presun}}, alebo vyberte os a **Uhol** a {{ui:Otočiť}} (okolo stredu súčiastky).
- {{ui:Ťahaním presunúť}} zobrazí na súčiastke šípky: potiahnutím šípky sa posuniete pozdĺž danej osi, alebo štvorca v rovine. {{ui:Ťahaním otočiť}} zobrazí krúžky na otáčanie. Každé potiahnutie je jeden krok späť. {{key:Esc}} šípky skryje.

## Limity kĺbov

Vyberte kĺb, ktorý sa hýbe, a v časti **Limity** označte **Udržiavať … medzi limitmi** pri ktorejkoľvek jeho hodnote, potom nastavte **Minimum** a **Maximum**. Každá hodnota zostáva v rámci svojich limitov, jej posuvník pokrýva len tento rozsah a {{ui:Skontrolovať pohyb na kolízie}} prechádza iba medzi nimi. Valcový kĺb môže obmedziť svoj uhol, svoje posunutie alebo obe. Zmena typu kĺbu zruší limity hodnôt, ktoré nový typ nemá.

## Export celej zostavy

V zostave zapisuje ponuka **Export** celú zostavu so všetkými súčiastkami na ich mieste:

- **STEP AP242 / AP214** a **Výkres (PDF)** v tejto verzii ešte nie sú hotové: vyžadujú presné jadro, preto sú zašedené. Namiesto toho exportujte STEP každej súčiastky (presné teleso) priamo zo súčiastky.
- **STL**: jedna sieť všetkých súčiastok. **3MF**: každá súčiastka raz, umiestnená raz na každú kópiu.
- **Kusovník (CSV)**.

## Obmedzenia

- Výkres zostavy a STEP zostavy v tejto verzii ešte nie sú hotové (vyžadujú presné jadro). Rozložené zobrazenia slúžia na obrázky na obrazovke.
