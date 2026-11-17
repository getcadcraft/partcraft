---
title: Vytiahnutie výstupku a vystrihnutie cez neho
summary: Premeňte náčrt na teleso príkazom Vytiahnuť, nastavte hĺbku slepú, stredovú, po plochu alebo obojsmernú, zúženie alebo jeden obrys náčrtu; potom nakreslite náčrt na plochu a vystrihnite výklenok alebo priechodnú drážku.
keywords: vytiahnuť, výstupok, vytiahnutý výstupok, vystrihnúť, vytiahnuté vyrezanie, výklenok, naskrz, slepý, stredová rovina, opačný smer, hĺbka, vystrihnúť a vytiahnuť, výstupok a vytiahnuť, podložka, po plochu, po ďalšiu plochu, po vrchol, odsadenie od plochy, smer 2, dva smery, sklon pri vytiahnutí, zúženie, obrys, oblasť, vybrané obrysy
from: 3b13ff10
---

{{ui:Extrude}} vytlačí uzavretý profil náčrtu rovno zo svojej roviny a vytvorí materiál. {{ui:Cut}} robí to isté, ale materiál odoberá. Obidve sú v podstate ten istý prvok; neskôr môžete jeden zmeniť na druhý.

## Vytiahnutie výstupku

1. Nakreslite uzavretý profil a uzavrite náčrt (pozri [Nakreslite prvý náčrt](topic:sketch-basics)). Ostáva vybraný.
2. Vyberte {{ui:Extrude}}.

Objaví sa teleso s výškou 10 mm, "Extrude1" sa pridá do histórie s náčrtom odsadeným pod ním a stavový riadok hlási: "Extrude1 bolo pridané. Zmeňte jeho čísla v pravom paneli."

**Ktorý náčrt sa použije:** náčrt, ktorý ste práve uzavreli, alebo náčrt vybraný v histórii. Ak nič nie je vybrané, PartCraft zoberie najnovší náčrt, ktorý ešte nepoužíva žiadny prvok. Ak taký nie je: "Najprv vytvorte náčrt: vyberte rovinu, Náčrt, nakreslite uzavretý profil, Ukončiť."

### Nastavenie hĺbky a smeru

V pravom paneli:

| Nastavenie | Možnosti | Predvolené |
|---|---|---|
| **Operácia** | Výstupok (pridať materiál), Vyrezanie (odobrať materiál), Prienik (zachovať prekrytie), Nové teleso (v tejto verzii ešte nie je hotové: potrebuje presné jadro) | Výstupok |
| **Koniec** | Slepý (hĺbka), Stredová rovina (na obe strany), Naskrz, Po plochu alebo rovinu, Po ďalšiu plochu, Po vrchol, Odsadenie od plochy | Slepý |
| **Hĺbka (mm)** | Ľubovoľná veľkosť väčšia ako nula (zobrazuje sa pri Slepý a Stredová rovina) | 10 |
| **Opačný smer** | Rastie na druhú stranu roviny náčrtu (pri Stredová rovina sa nezobrazuje) | Vypnuté |

Zadajte číslo a stlačte {{key:Enter}} alebo {{key:Tab}}: súčiastka sa hneď prestaví. **Stredová rovina** rozdelí hĺbku na polovicu na každú stranu náčrtu.

### Po plochu, po ďalšiu plochu alebo po vrchol

V tejto verzii ešte nie je hotové: každý koniec "po" potrebuje presné jadro a prvok hlási: "Vytiahnutie po plochu, po ďalšiu plochu alebo po vrchol: ešte nie je hotové (potrebuje presné jadro)." Použite hĺbku Slepý, ktorú odmeriate. S presným jadrom fungujú konce takto:

- **Po plochu alebo rovinu**: **Po** berie rovnú plochu (Vybrať, potom na ňu kliknúť) alebo referenčnú rovinu. Plocha rovnobežná s náčrtom dá presnú hĺbku; šikmá plocha ukončí výstupok na sklone. Ak je plocha za náčrtom: "… Skúste Opačný smer."
- **Po ďalšiu plochu**: zastaví sa na prvej rovnej ploche telesa, ktorú výstupok stretne (zakrivené plochy tu nie sú podporované: program to hlási).
- **Po vrchol**: zastaví sa v úrovni vrcholu (kliknite blízko konca hrany) alebo bodového prvku.
- **Odsadenie od plochy**: ako Po plochu, ale zastaví sa o **Odsadenie (mm)** pred ňou (meria sa kolmo na plochu).

### Dva smery, zúženie, jeden obrys

- **Druhý smer** (Slepý): vytiahne aj **Hĺbku druhého smeru (mm)** na druhú stranu náčrtu.
- **Zúženie (°)**: bočné steny sa pri ďalšom pohybe nakláňajú dovnútra (záporná hodnota: von), ako sklon; len v jednom smere. V tejto verzii ešte nie je hotové (potrebuje presné jadro): nechajte 0.
- **Oblasti**: **Vybrať oblasti**, potom kliknite do slučiek, ktoré chcete vytiahnuť; použijú sa len tieto oblasti (kruh vnútri štvorca: kliknite do kruhu pre valec, medzi ne pre platňu s dierou). **Všetky** sa vrátia ku každej slučke.

Pod tým **Kóty náčrtu** zobrazuje riadiace kóty náčrtu, takže veľkosti profilu môžete meniť bez otvorenia náčrtu.

:::note
**Naskrz platí iba pre vyrezania.** Výstupok nastavený na Naskrz zlyhá s hlásením: "Naskrz je len pre vyrezania. Pre výstupok použite hĺbku." Prepnutie prvku z Vyrezanie späť na Výstupok zmení Naskrz na Slepý automaticky.
:::

## Vystrihnutie výklenku

1. Kliknite na rovnú plochu, do ktorej chcete vystrihnúť. Zvýrazní sa a pravý panel zobrazí **Plocha**.
2. Vyberte {{ui:Sketch on this face}} (alebo {{ui:Sketch}} na paneli nástrojov).
3. Nakreslite obrys výklenku, napríklad obdĺžnik, a okótujte ho.
4. Vyberte {{ui:Exit}}.
5. Vyberte {{ui:Cut}}. Začne ako **Naskrz**: odoberie materiál úplne cez súčiastku.
6. Pri výklenku nastavte **Koniec** na **Slepý (hĺbka)** a zadajte **Hĺbku (mm)**.

Vyrezanie ide do materiálu, preč od plochy, na ktorú ste kreslili. Ak stavový riadok hlási "Na tej strane náčrtu nie je nič na vystrihnutie. Skúste opačný smer.", zaškrtnite **Opačný smer**.

Náčrt na dne výklenku sleduje dno: zmeňte hĺbku výklenku a náčrt sa s ním posunie.

## Vytiahnutie alebo zatlačenie celej plochy

Ak chcete, aby plocha vystupovala ďalej alebo sa prepadla, nemusíte kresliť jej obrys. Kliknite na rovnú plochu a potom v pravom paneli:

- {{ui:Extrude from it}} vytiahne plochu: PartCraft pridá náčrt s jej obrysom (otvory v ploche zostanú otvormi) a Vytiahnutie o 10 mm.
- {{ui:Cut into it}} zatlačí plochu dovnútra: rovnaký náčrt a Vyrezanie do polovice súčiastky.

Obidva sú jeden krok: {{key:Mod+Z}} odstráni náčrt aj prvok naraz. Nový prvok je vybratý, takže hneď zadajte číslo a stlačte {{key:Enter}} pre jeho hĺbku. Obrys sa skopíruje ako pevné čiary a oblúky: nesleduje neskoršie zmeny plochy. Ak sa časť obrysu nedá skopírovať (voľná krivka), otvorí sa náčrt s tým, čo sa skopírovať dalo; dokončite ho, potom vyberte {{ui:Exit}} a {{ui:Extrude}} alebo {{ui:Cut}}.

## Profily s ostrovmi

Náčrt môže obsahovať niekoľko uzavretých slučiek. Slučky vedľa seba sa stanú samostatnými výstupkami (alebo vyrezaniami); slučka vnútri inej sa stane dierou cez výstupok. Napríklad obdĺžnik s dvoma kružnicami vnútri sa vytiahne ako platňa s dvoma dierami.

Ak chcete použiť len niektoré slučky, vyberte ich pomocou **Oblastí** (vyššie); iný prvok môže použiť ostatné slučky toho istého náčrtu.

## Úprava neskôr

- Kliknite na "Extrude1" v histórii, aby sa vrátili jeho nastavenia.
- Dvojklikom na jeho náčrt (odsadený pod ním) otvorte náčrt; zatvorením sa prepočíta.
- Pozri [Zmena súčiastky cez jej históriu](topic:edit-history) pre potlačenie, návrat, zmenu poradia a mazanie.

## Časté hlásenia

| Hlásenie | Čo robiť |
|---|---|
| "Náčrt nemá uzavretý profil na vytiahnutie." | Náčrt nemá uzavretú slučku z plných čiar. Uzavrite medzery alebo vráťte konštrukčné čiary späť klávesom {{key:Q}} |
| "Profil je otvorený: koniec v (x, y) nie je na nič napojený." | Otvorte náčrt a napojte ten koniec na nasledujúcu čiaru |
| "Zatiaľ nie je čo vystrihnúť." | Vystrihnutie potrebuje teleso, z ktorého odoberá. Najprv vytvorte výstupok |
| "Zo súčiastky po tomto nezostalo nič." | Vystrihnutie odstránilo všetko. Skontrolujte jeho veľkosť a smer |

Viac v [Riešenie problémov](topic:troubleshooting).
