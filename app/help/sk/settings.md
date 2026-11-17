---
title: Nastavenia PartCraft
summary: Zvoľte, ktoré tlačidlo myši otáča zobrazenie, nastavte, aby potiahnutie prstom na touchpade otáčalo a posúvalo súčiastku, zapnite alebo vypnite automatické väzby pri kreslení náčrtu a nastavte, koľko vlákien používajú riešiče simulácie.
keywords: nastavenia, predvoľby, možnosti, myš, prostredné tlačidlo, tlačidlo kolieska, obežný pohyb, otáčanie, otáčať, touchpad, posúvanie, potiahnutie, zoom štipnutím, väzby, obmedzenia, automatické väzby, prichytávanie, splývanie, vlákna, vlákna riešiča, jadrá, procesory, viacvláknové, rýchlejšie riešenie, paralelné
from: 759edcaf
---

Otvorte {{ui:Nastavenia}} ozubeným kolieskom v hornom paneli aplikácie alebo stlačením {{key:Mod+,}}. Prvá karta, {{ui:PartCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje tie, ktoré zdieľajú všetky aplikácie CadCraft (motív, panel nástrojov, panely). Nastavenia PartCraft existujú iba v aplikácii: menia sa tu a tento prehliadač si ich pamätá. {{ui:Obnoviť nastavenia PartCraft}} vráti všetko do pôvodného stavu.

## Otáčanie zobrazenia

- **Ľavé tlačidlo** (predvolené): potiahnite ľavým tlačidlom na otočenie súčiastky; potiahnite pravým alebo prostredným tlačidlom na posun.
- **Prostredné tlačidlo**: stlačte koliesko a potiahnite na otočenie súčiastky; podržte {{key:Shift}} (alebo {{key:Ctrl}}, alebo ⌘) s prostredným tlačidlom, alebo potiahnite pravým tlačidlom, na posun. Ľavé tlačidlo iba vyberá plochy, hrany a roviny, takže kliknutie, ktoré sa trochu pohne, nikdy neotočí súčiastku. Mnohé programy CAD fungujú takto.

Koliesko približuje na miesto kurzora v oboch prípadoch. V náčrte pravé a prostredné tlačidlo posúvajú ako predtým.

## Posúvanie: koliesko myši alebo touchpad

- **Zistiť automaticky** (predvolené): PartCraft sleduje posúvanie. Bočné alebo jemné posúvanie, aké posiela touchpad, otáča súčiastku; celé kroky kolieska približujú.
- **Koliesko myši**: posúvanie vždy približuje k miestu kurzora.
- **Touchpad**: potiahnite dvoma prstami na otočenie súčiastky, podržte {{key:Shift}} a potiahnite na posun, zoom štipnutím. V náčrte posúva dvojprstové potiahnutie náčrt.

Štipnutie približuje pri každej voľbe. Ak "Zistiť automaticky" uhádne zle pre vašu myš alebo touchpad, zvoľte ten, ktorý máte. Viac v časti [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).

## Kreslenie náčrtu: pridávať väzby počas kreslenia

**Pridávať väzby počas kreslenia** (na začiatku zapnuté): kliknutie, ktoré sa prichytí k bodu, urobí nový bod splývajúci s ním, kliknutie na krivku umiestni bod na túto krivku a čiara nakreslená takmer vodorovne alebo zvisle sa stane vodorovnou alebo zvislou. Pozri [Väzby a kóty](topic:relations-dimensions).

Vypnite to, keď chcete umiestniť geometriu blízko inej geometrie bez toho, aby bola s ňou spojená. Kurzor sa stále prichytáva k bodom a krivkám, ale nič sa nespája: čiary nakreslené v reťazi nezdieľajú svoje konce, takže ich potiahnutie môže roztrhnúť. Väzby, ktoré chcete, pridajte sami z pravého panela. Uzavretý profil sa stále vytiahne, keď sa jeho konce stretnú.

:::note
Nastavenie mení iba to, čo pridáva nové kreslenie. Väzby, ktoré už sú v náčrte, zostávajú a nástroj Zaoblenie stále vytvorí svoj dotyčnicový oblúk a polomer.
:::

## Náčrt: kótovať počas kreslenia

**Kótovať počas kreslenia** (na začiatku zapnuté): kým sa kreslí čiara, obdĺžnik, kružnica alebo oblúk, zadanie čísla vyplní políčko veľkosti vedľa kurzora ({{key:Tab}} prejde na ďalšie políčko) a {{key:Enter}} nakreslí tvar s touto veľkosťou, s riadiacou kótou pre každý zadaný rozmer. Vypnuté: zadávanie čísla počas kreslenia nerobí nič a tvary sa kreslia iba kliknutiami. Pozri [Zadanie veľkosti počas kreslenia](topic:sketch-basics#type-the-size-as-you-draw).

## Indikátor v rohu

Čo sa zobrazuje v rohu 3D zobrazenia: **Kocka pohľadu** (na začiatku; vpravo hore: kliknutím na plochu, hranu alebo roh sa pozriete z tohto miesta, potiahnutím ju otáčate, potiahnutím jej kruhu kompasu otáčate model), **Ikona osí** (malý značka X, Y, Z v ľavom dolnom rohu, ktorá sa otáča s pohľadom: X červená, Y zelená, Z modrá) alebo **Žiadna**. Ani jedno sa nezobrazuje počas kreslenia náčrtu ani na liste výkresu. Pozri [Kocka pohľadu](topic:view-cube).

## Vlákna riešiča

Koľko vlákien smú používať riešiče simulácie. **Automaticky** (predvolené) použije o jedno menej než počet logických procesorov počítača (najviac 16), aby stránka zostala citlivá, kým sa štúdia rieši; alebo zvoľte číslo. Veľké štúdie voxelov, vzpernosť, napätie v čase a prúdenie sa riešia rýchlejšie na viacerých vláknach (približne 2× na 4 vláknach pre 80,000 kociek podľa našich meraní, viac na nevyťaženom počítači); modely pod približne 20,000 neznámych zostávajú na jednom vlákne, pretože spustenie vlákien stojí viac, než ušetria. Riešenie na viacerých vláknach dá rovnakú odpoveď ako na jednom vlákne (až na zaokrúhľovanie: súčty sa sčítavajú v inom poradí). Výsledky každej štúdie uvádzajú **N vlákien** alebo **1 vlákno** s dôvodom pod **Riešič**.

Vlákna vyžadujú, aby stránka bola **izolovaná podľa pôvodu (cross-origin isolated)** (prehliadač vtedy umožní pracovným procesom zdieľať pamäť). Laboratórna stránka je taká; kde nie je, nastavenie to povie ("Táto stránka nie je cross-origin izolovaná, takže riešiče bežia na jednom vlákne bez ohľadu na to, čo je tu zvolené.") a každé riešenie použije jedno vlákno. Všetko ostatné funguje rovnako a odpovede sú rovnaké.

Štúdie laminárneho prúdenia tiež používajú vlákna (približne 2.5× na 4 vláknach pre 54,000 buniek tekutiny, rovnaká odpoveď do poslednej číslice). Riešič kvadratických štvorstenov a prenos tepla bežia na jednom vlákne: rozdelenie na vlákna sa na našom testovacom počítači ukázalo pomalšie (ich riešiče sú obmedzené rýchlosťou pamäte a krokom, ktorý sa nedá rozdeliť).

### Na vlastnom webovom serveri

Ak spúšťate PartCraft z vlastného servera, funguje tak, ako je podávaný. Pre vlákna riešiča nechajte server posielať s stránkou PartCraft dve hlavičky:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

V Apache, v súbore `.htaccess` priečinka (vyžaduje mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

V nginx, v bloku `location`, ktorý obsluhuje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Obnovte stránku: Nastavenia › Vlákna riešiča potom ponúkne **Automaticky** s počtom procesorov vášho počítača. Druhá hlavička spôsobí, že prehliadač odmietne čokoľvek, čo stránka načíta z iného webu, ktorý to nepovoľuje; pre PartCraft samotný je to v poriadku (všetko načítava z vlastného priečinka).
