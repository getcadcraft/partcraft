---
title: Simulácia prúdenia tekutín (štúdia prúdenia)
summary: Prúdenie cez kanály vnútri súčiastky alebo okolo nej v kváderi: vstupy, výstupy, vzduch, voda alebo vaša vlastná tekutina; potom rýchlosť a tlak na posuvnej rezovej rovine, prúdnice, tlak na povrchu, pokles tlaku, bilancia hmotnosti, odpor a vztlak, a to, čo laminárna metóda dokáže a čo nie.
keywords: prúdenie, CFD, tekutina, výpočtová dynamika tekutín, simulácia prúdenia, vzduch, voda, viskozita, hustota, Reynoldsovo číslo, laminárne, turbulentné, pokles tlaku, strata výšky, vstup, výstup, veko, záslepka, rýchlosť, prietok, objemový prietok, litre za minútu, statický tlak, prúdnice, rezová rovina, rovina rezu, odpor, vztlak, súčiniteľ odporu, súčiniteľ vztlaku, čelná plocha, vonkajšie prúdenie, vnútorné prúdenie, potrubie, kanál, rozdeľovač, dýza, mriežková Boltzmannova metóda, reziduum, konvergencia
from: 7dc75f29
---

Štúdia **Prúdenie** určí, ako sa tekutina pohybuje cez kanály vnútri vašej súčiastky (**vnútorné**) alebo okolo nej (**vonkajšie**). Štandardne je **laminárna, nestlačiteľná, izotermická a newtonovská**: plynulé prúdenie tekutiny, ktorej hustota a viskozita zostávajú konštantné, bez tepla, bez turbulencie a bez gravitácie. Je tu aj **experimentálny** turbulentný model, ktorý slúži len na kvalitatívne vzory (pozri nižšie). Pracuje na pomenovaných plochách, ktoré súčiastke dáva jadro siete (pozri [Jadro siete](topic:solid-kernels)).

Vyberte **Simulácia** v **Pracovnom priestore**, stlačte **Nová štúdia**, ak žiadna nie je, a nastavte **Typ** na **Prúdenie (CFD)**. **Model prúdenia** je **Laminárny** (predvolený) alebo **Turbulentný (Spalart–Allmaras, experimentálny)**: pozri **Turbulentné prúdenie (experimentálne)** nižšie. Štruktúrne nastavenia štúdie sa zachovajú, takže sa môžete vrátiť späť. Nastavenia prúdenia sa uložia do súboru súčiastky a každú zmenu možno vrátiť späť.

## Výber tekutiny a buniek

- **Tekutina**: vzduch alebo voda pri 20 °C, alebo **Vlastná** s vlastnou hustotou (kg/m³) a dynamickou viskozitou (Pa·s). Vzduch používa zákon ideálneho plynu a Sutherlandov zákon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); voda používa hodnoty IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Veľkosť bunky**: priestor tekutiny sa vyplní rovnakými kockami. Ak ho necháte prázdny, veľkosť sa určí automaticky; panel zobrazí mriežku. Každý otvor a kanál by mal mať **aspoň 8 až 10 buniek v priemere**, aby boli čísla použiteľné; menšie bunky sú presnejšie, ale pomalšie (dvakrát jemnejšie je približne 16-krát väčšia práca).
- **Steny**: **Interpolované** sleduje zakrivené steny medzi bunkami (predvolené); **Spätný odraz** považuje steny za schodovitý tvar kociek.

## Prúdenie vnútri súčiastky

Priestor tekutiny musí byť uzavretý. Na paneli pridajte **Vstup** a **Výstup** a potom kliknite na ich plochy v pohľade:

1. **Rovná plocha okolo otvoru** — okraj na konci potrubia, plocha prípojky. PartCraft tam otvor uzavrie vekom. Každý otvor v tejto ploche patrí tomuto otvoru, takže ak sa vstup a výstup otvárajú na tej istej ploche, namodelujte namiesto toho tenkú záslepku nad jedným z nich.
2. **Vnútorná plocha záslepky** — ako v iných CAD nástrojoch: namodelujte tenký plát (vytiahnutie) nad otvorom a vyberte jeho plochu, ktorá sa dotýka tekutiny.

Pre vstup nastavte **rýchlosť** (m/s, rovnomerná cez celý otvor, dnu do súčiastky) alebo **objemový prietok** (L/min). Pre výstup nastavte **statický tlak** (Pa, pretlak). Ak je otvor ponechaný otvorený alebo je stena tenšia ako bunka, vnútro sa spojí s vonkajškom a výpočet sa zastaví s hláškou „Nie je uzavretý priestor tekutiny“.

## Prúdenie okolo súčiastky

Nastavte **Prúdenie** na **Vonkajšie**, **Rýchlosť**, smer, ktorým tečie, a ako ďaleko kváder siaha proti prúdu, po prúde a do strán (prázdne: 1, 3 a 1-násobok najväčšieho rozmeru súčiastky). Stena kvádra, cez ktorú prúdenie vstupuje, je vtok, stena, cez ktorú vystupuje, je výtok pri 0 Pa, a plochy pozdĺž prúdenia sú voľne kĺzavé. Príliš malý kváder stlačí prúdenie okolo súčiastky a zvýši odpor. **Referenčná plocha** je plocha, ktorú používajú súčinitele odporu a vztlaku (prázdne: čelná plocha súčiastky pozdĺž prúdenia); vztlak sa meria v smere +Y, pokiaľ nevyberiete iný smer.

## Výpočet a čítanie výsledkov

Stlačte **Riešiť**. Výpočet beží na pozadí s počtom krokov, reziduom a grafom rezidua; **Zastaviť** ho ukončí. Zastaví sa, keď je reziduum (koľko sa pole rýchlosti ešte mení za krok) pod cieľovou hodnotou a pokles tlaku alebo odpor sa ustálil. Ak najprv dosiahne limit krokov, panel červeno zobrazí **Nie je konvergované**: čísla sú posledný stav, nie ustálená odpoveď.

- **Rezová rovina**: rýchlosť alebo statický tlak na rovine prechádzajúcej modelom; zvoľte jej normálu (X, Y alebo Z) a posuvníkom ju posuňte. Ukážte na ňu myšou a prečítajte si hodnoty.
- **Prúdnice**: z vstupov (vnútorné) alebo z radu bodov naprieč vtokovým koncom kvádra v rezovej rovine (vonkajšie).
- **Súčiastka**: plná, priehľadná (aby ste videli rovinu vnútri), tlak na povrchu alebo skrytá.
- **Tabuľka**: Reynoldsovo číslo, pokles tlaku (priemerný statický tlak na vstupoch mínus na výstupoch), prietok a priemerný tlak každého otvoru, sila na súčiastku, odpor a vztlak s ich súčiniteľmi a referenčnou plochou (vonkajšie), bilancia hmotnosti (vtok oproti výtoku), sieť a riešič.

## Turbulentné prúdenie (experimentálne)

**Model prúdenia › Turbulentný (Spalart–Allmaras, experimentálny)** rieši časovo spriemerované turbulentné prúdenie (ustálené RANS): model Spalart–Allmaras dáva vírovú viskozitu v každej bunke a bunky pri stenách používajú Spaldingov zákon steny namiesto riešenia tenkej vrstvy. Je všade plne turbulentné (žiadne laminárne oblasti, žiadny prechod).

**Neprešiel kontrolami presnosti.** Panel, výsledky a tabuľka to uvádzajú pri každej turbulentnej štúdii a upozornenie sa nedá zavrieť. Používajte ho na **kvalitatívne vzory prúdenia** — kde sa prúdenie odtrháva, cirkuluje alebo zrýchľuje — **nie na návrhové čísla**.

| Kontrola | Referencia | Výsledok |
|---|---|---|
| Trenie v rovnom kanáli, prvá bunka pri y⁺ 49 / 98 | Deanova korelácia | +3.3 % / +4.7 % |
| Kanál s riešenou stenou (y⁺ ≈ 3), Re_τ 180: objemová rýchlosť | Moser, Kim & Mansour DNS | −1 % |
| Rovný kanál, y⁺ 7–15 alebo 190–380 | Deanova korelácia | +9 až +22 % |
| Trenie v potrubí cez kockové bunky, plne vyvinuté, 10–30 buniek v priemere | Colebrook | o 30 až 34 % príliš vysoké |
| Znovupripojenie za spätným schodom, 6–14 buniek na výšku schodu | Driver & Seegmiller, 6.26 výšky schodu | o 21 až 39 % krátke |

Výsledky sa s jemnejšími bunkami zlepšujú len pomaly. Po výpočte tabuľka zobrazí **y⁺ prvej bunky** (minimum, priemer a maximum cez bunky pri stene) a upozorní, ak je mimo kontrolovaného rozsahu 1 až 400; cieľte na približne 30 až 300. **Čas výpočtu:** automatické bunky sú dimenzované najviac na pár minút na jednom jadre notebooku (panel zobrazí najhorší prípad pre mriežku a limit krokov; malé potrubie sa ustáli za menej ako 20 sekúnd). Zmenšenie veľkosti bunky na polovicu trvá približne 16-krát dlhšie. Sily na súčiastke vychádzajú z bilancie hybnosti cez otvory alebo kváder.

**Doterajší stav:** bunky pri stenách teraz zodpovedajú svojmu vlastnému šmykovému napätiu podľa zákona steny, čo znížilo chyby pre potrubie a schod na hodnoty uvedené vyššie bez zmeny výsledkov pre rovný kanál. Pre návrhové čísla to nestačilo. Ďalším krokom sú jemnejšie bunky pri stenách.

## Čo dokáže a čo nedokáže

- **Laminárny model** je iba laminárny. V potrubiach sa prúdenie stáva turbulentným nad Reynoldsovým číslom približne 2,000 až 4,000; za tupými telesami sa úplav začína odlučovať od vírov nad približne 50. Panel na tieto body upozorní. Laminárny výsledok pre turbulentné prúdenie podhodnocuje pokles tlaku a zle určuje odpor. Experimentálny turbulentný model (vyššie) kvalitatívne pokrýva turbulentné prúdenie; jeho čísla zatiaľ nie sú spoľahlivé.
- **Metóda:** mriežková Boltzmannova metóda (D3Q19, zrážka s dvoma relaxačnými časmi) spustená do ustáleného stavu. Vnútri je mierne stlačiteľná; PartCraft udržiava zmeny hustoty na niekoľkých percentách. Ak je prúdenie pre bunky príliš rýchle, výpočet sa nespustí a povie, o koľko musia byť bunky menšie.
- **Overené voči:** Hagen–Poiseuilleovo prúdenie v potrubí cez súčiastku (gradient tlaku do 1 % pri 20 bunkách v priemere), dutina poháňaná vekom podľa Ghia a kol. (do 0.75 % rýchlosti veka) a benchmark valca Schäfer–Turek (odpor do 1 % pri 10 bunkách na priemer).
- Nemodeluje sa: prenos tepla, turbulencia s návrhovou presnosťou (turbulentný model je experimentálny), voľné hladiny, kavitácia, gravitácia, pohyblivé časti, nenewtonovské tekutiny, drsné steny. Laboratórna verzia: dôležité výsledky overte iným spôsobom.
