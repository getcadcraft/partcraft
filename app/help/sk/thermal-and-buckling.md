---
title: Teplo, tepelné napätie a vybočenie
summary: Zistite teploty v súčiastke z pevných teplôt, tepelného toku, tepelného výkonu, konvekcie a žiarenia (ustálene alebo v čase), zaťažte štúdiu napätia nárastom teploty a zistite zaťaženie, pri ktorom sa štíhla súčiastka vybočí, spolu s tým, čo každá metóda dokáže a nedokáže povedať.
keywords: tepelný, prenos tepla, teplo, teplota, vedenie, konvekcia, súčiniteľ prestupu tepla, žiarenie, emisivita, tepelný tok, tepelný výkon, vnútorný zdroj tepla, chladič, nestacionárny, čas, chladnutie, ohrev, Crank–Nicolson, implicit Euler, tepelná bilancia, tepelné napätie, tepelné napätie v čase, nestacionárne tepelné napätie, prudké ochladenie, história napätia, najhorší čas, tepelná rozťažnosť, súčiniteľ rozťažnosti, vybočenie, Eulerovo vybočenie, faktor zaťaženia, kritické zaťaženie, stĺp, štíhly, vlastné číslo
from: 1a1b7545
---

Tieto štúdie sú v pracovnom priestore Simulation vedľa statického napätia a vlastných frekvencií (pozri [Kontrola napätia a deformácie](topic:simulation)). Vyberte ich v poli **Typ** v paneli. Používajú rovnakú sieť malých kociek a rovnaký zoznam materiálov; každý materiál z knižnice má tepelnú vodivosť, merné teplo a súčiniteľ rozťažnosti (typické hodnoty z tabuliek, zobrazené pod **Vlastnosti**).

## Tepelná: kam ide teplo?

1. Zvoľte **Tepelná (prenos tepla)** ako **Typ**.
2. Pridajte tepelné podmienky zo zoznamu {{ui:Pridať}} v paneli, potom kliknite na ich plochy (ako pri podperách a zaťaženiach):
   - **Pevná teplota**: plocha je udržiavaná na teplote v °C.
   - **Tepelný tok**: W/m² vtekajúce do plochy (záporná hodnota vyteká). Pôsobí na skutočnú plochu plochy, aj tam, kde kocky tvoria schodíky.
   - **Tepelný výkon**: celkový výkon vo wattoch, rozdelený na vybrané plochy podľa plochy. Použite ho pre ohrievač alebo čip so známym výkonom.
   - **Konvekcia**: vzduch alebo kvapalina s teplotou odvádza teplo rýchlosťou h W/(m²·K). Typické h: stojaci vzduch 5–10, ventilátor 25–100, voda 500–10,000. PartCraft h nevypočítava: v tejto štúdii nie je žiadny prúd tekutiny.
   - **Žiarenie**: plocha vyžaruje do okolia s danou teplotou a emisivitou od 0 do 1. Je **linearizované** (žiarenie sa zapíše ako koeficient, ktorý závisí od teploty, a znovu sa vypočíta, kým sa neustáli) a smeruje iba do okolia: plochy si navzájom teplo nevymieňajú.
3. **Vnútorný zdroj tepla** (W/m³) ohrieva celú súčiastku zvnútra, napríklad odporový diel.
4. Stlačte {{ui:Vypočítať}}. Súčiastka je zafarbená podľa teploty; zvoľte **Tepelný tok** v **Zobraziť**, aby ste videli, kam teplo prúdi. Ukážte myšou na súčiastku, aby ste odčítali obe hodnoty.

Ustálený tok tepla potrebuje miesto, kam teplo odíde: aspoň jednu pevnú teplotu, konvekciu alebo žiarenie. Súčiastka, ktorá iba prijíma teplo, nemá ustálený stav; spravte ju nestacionárnu.

Tabuľka uvádza najnižšiu a najvyššiu teplotu a kde sú, najväčší tepelný tok a **tepelnú bilanciu**: teplo vstupujúce alebo vystupujúce z každej podmienky (pevná teplota uvádza, čo musí dodať alebo pohltiť), vytvorené teplo, súčty dnu a von a **nerovnováhu**. Nerovnováha má byť malý zlomok tepla vstupujúceho; veľká hodnota znamená, že výsledku sa nedá dôverovať.

### V čase (nestacionárne)

Zaškrtnite **Nestacionárny** a zadajte **Počiatočnú teplotu** (celá súčiastka na nej začína), **Časový rozsah** a **Počet časových krokov**. **Implicit Euler** je robustná; **Crank–Nicolson** je pri rovnakom počte krokov presnejšia, ale po náhlej zmene môže kmitať. Po výpočte posuňte posuvník **Čas** a pozrite si teploty v každom okamihu (farebná škála zostáva rovnaká pre každý okamih). Tepelná bilancia potom zahŕňa aj uskladňované teplo.

## Tepelné napätie: čo zmena teploty robí so súčiastkou?

V štúdii **Statické napätie** (alebo **Vybočenie**) nastavte **Tepelné zaťaženie**:

- **Rovnomerná zmena teploty**: celá súčiastka sa ohreje (alebo ochladí so záporným číslom) o toľko kelvinov.
- **Teploty z tepelných podmienok**: pridajte tepelné podmienky do tej istej štúdie; ustálené teploty sa najprv vypočítajú na rovnakej sieti, potom sa súčiastka rozťahuje o α·(T − **teplota bez napätia**).
- **Teploty v čase (nestacionárny beh)**: pridajte tepelné podmienky, potom zadajte **Počiatočnú teplotu**, **Časový rozsah**, **Počet časových krokov** a **Spôsob krokovania** ako pri nestacionárnej tepelnej štúdii. Teploty sa počítajú v čase na rovnakej sieti (kocky alebo štvorsteny) a statický výpočet na teplotách každého okamihu dá napätie v tom okamihu. **Napätie pri**:
  - **Najhoršom čase** (začiatok): **Výpočty napätia** rozložia okamihy rovnomerne cez beh, vrátane začiatku (predvolene 21, najviac 51). Výsledky sa otvoria v okamihu s najväčším von Misesovým napätím; tabuľka ho pomenuje, malý graf ukáže špičkové napätie v čase a posuvník **Čas** ukáže napätie v každom vypočítanom okamihu (farebná škála zostáva ako pre najhorší okamih).
  - **Jeden zvolený čas**: jeden okamih, časový krok najbližší k **Čas (s)**, ktorý zadáte. Štúdia vybočenia vždy berie jeden zvolený čas (koniec behu, pokiaľ nenastavíte iný).

Súčiastka, ktorá je prudko ochladená (ponorená z horúca do studena) alebo náhle ohriata, je najviac napätá, keď sa vnútro a povrch najviac líšia: často hneď na začiatku. Udržiavaná teplota platí od prvého okamihu ako náhla zmena, takže napätie na samom začiatku závisí od veľkosti prvku (iba niekoľko prvkov zachytí zmenu). Čítajte to ako „veľmi vysoké“ a pozrite si ďalšie okamihy na posuvníku pre hodnoty, ktoré sieť rozlíši. Napätie je kvázi-statické: bez zotrvačnosti, bez kmitania od náhlej zmeny.

Súčiastka, ktorá sa môže voľne rozťahovať, nemá tepelné napätie: podoprite ju len natoľko, aby sa nehýbala (napríklad tri hladké plochy v pravom uhle). Ak je zovretá medzi dvoma stenami, je stlačená: oceľová tyč ohriata o 50 K medzi tuhými stenami nesie asi 117 MPa. Tepelné zaťaženia sa vyrovnávajú samé, takže reakcie sa stále vyrovnávajú iba s mechanickými zaťaženiami.

## Vybočenie: kedy sa štíhla súčiastka vybočí?

1. Zvoľte **Vybočenie (lineárne)** ako **Typ** a pridajte podpory a zaťaženia ako pri statickej štúdii.
2. Nastavte **Faktory zaťaženia na nájdenie** (koľko tvarov vybočenia).
3. Stlačte {{ui:Vypočítať}}. Každý tvar má **faktor zaťaženia**: násobok vašich zaťažení, pri ktorom ideálna súčiastka vybočí. Faktor 3 znamená trojnásobok vašich zaťažení; **faktor pod 1 znamená, že vybočí pri zaťaženiach, ktoré ste zadali**. Tabuľka uvádza aj celkové zaťaženie pri každom faktore. Tvar vybočenia ukazuje, ako sa súčiastka vybočí (jej veľkosť nič neznamená).

**Lineárne vybočenie nadhodnocuje skutočné kritické zaťaženie.** Predpokladá dokonalú súčiastku: dokonale rovnú, bez zvyškového napätia a pružnú. Skutočné súčiastky majú malé nedokonalosti a môžu sa najprv plasticky poddať, a tenkostenné škrupiny sa môžu vybočiť pri zlomku lineárnej hodnoty. Používajte dostatočnú rezervu a faktor blízky 3 alebo nižší pri tenkej škrupine považujte za varovanie.

## Ako tomu dôverovať

PartCraft kontroluje tieto riešiče voči ručným vzorcom: tyč medzi dvoma teplotami (presne), chladiace rebro (do 0.3 K), doska, ktorá sa ohrieva sama (presne), kocka chladnúca v čase (do 0.1 % s Crank–Nicolson), tyč náhle ohriata na jednom konci, voľná ohriata tyč (bez napätia, ΔL = αLΔT), tyč medzi stenami (σ = −EαΔT), prudko ochladená doska v čase oproti klasickému radovému riešeniu (do 1 % na kockách, 2.1 % na štvorstenoch v strede dosky; 0.5 % na jej povrchu), posledný okamih dlhého behu oproti ustálenému tepelnému napätiu (rovnaké na milióntinu) a Eulerove stĺpy (do 1 % pevný–voľný, 1.5 % kĺbový–kĺbový). Majte na pamäti:

- **Konštantné materiálové hodnoty.** Vodivosť, merné teplo a rozťažnosť sa tu s teplotou nemenia; pri niekoľkých stovkách stupňov sa môžu zmeniť o 10–30 %. Tuhosť sa tiež nemení.
- **Napätie v čase je kvázi-statické a pružné**: každý okamih je statický výpočet (bez zotrvačnosti) a bez plastického poddania, takže prudké ochladenie, ktoré by povrch plasticky poddalo, ukáže napätie nad medzou klzu.
- **Koeficienty konvekcie sú vaše vstupy**, nie sú vypočítané z prúdenia vzduchu alebo vody.
- **Žiadny kontaktný odpor**: súčiastka je jedno teleso.
- **Iba lineárne vybočenie**: žiadne nedokonalosti, žiadne plastické poddanie, žiadne správanie po vybočení.
- Schodíky kociek a ostré vnútorné rohy ovplyvňujú tepelné napätia rovnako ako iné napätia (pozri [Kontrola napätia a deformácie](topic:simulation)).
- Toto je laboratórna verzia: súčiastky, na ktorých záleží, overte iným spôsobom.

## Súvisiace

- [Kontrola napätia a deformácie (Simulation)](topic:simulation)
- [Čo ešte nie je hotové](topic:not-built-yet)
