---
title: Novinky vo verziách 0.8 a 0.8.1
summary: PartCraft 0.8 prináša živú analýzu počas úprav, kontrolu Čo sa rozbije ako prvé, štúdie plasticity a kontaktu so vstupnými súbormi pre externý riešiteľ, štúdie pohybu pre zostavy, pracovný priestor Plochy pre voľné plochy, súčiastky dimenzované podľa fyziky v pracovnom priestore Inžinier, náčrt z fotografie, exporty pre tlač, rozmiestnené tabule do G-kódu a výkresy, ktoré okótujú svoje otvory. 0.8.1 opravuje zamrznutie kurzora na celej obrazovke.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, živá analýza, aktualizácia počas úprav, zlomiť to, čo sa rozbije ako prvé, faktor zaťaženia, nelineárne, medza klzu, plastická deformácia, kontakt, calculix, štúdia pohybu, vôľa, plochy, nurbs, vyhladiť, trup, zebra, inžinier, generátor, generované teleso, náčrt z fotografie, mierka pre tlač, rozdeliť pre tlač, zmrštenie, rozmiestnené tabule, g-code, výkres, okótovanie otvorov, asistent, mcp, jazyky, riadky panela nástrojov
from: 62e4dce2
---

Toto je zoznam zmien vo verziách PartCraft 0.8 a 0.8.1 v porovnaní s verziou 0.7. Simulácia odpovedá počas vašich úprav a hovorí vám, čo sa rozbije ako prvé. Zostavy dostali štúdie pohybu a nové pracovné priestory vytvárajú voľné plochy a súčiastky dimenzované podľa fyziky. Verzia 0.8.1 je malé opravné vydanie.

## Nové

### Simulácia

- **Aktualizovať počas úprav.** Zaškrtnite {{ui:Aktualizovať počas úprav}} v bloku Riešenie a odpovede budú nasledovať vaše úpravy. Ak zmeníte kótu, zaťaženie alebo materiál, rýchla odpoveď, vypočítaná s prvkami štyrikrát väčšími, sa zobrazí okamžite. Keď prestanete na asi sekundu, spresnená odpoveď štúdie ju nahradí. Vo výsledkoch je uvedené, ktorú z nich práve vidíte. Pri oceľovom konzolovom nosníku bola rýchla odpoveď v rámci 1 % pri priehybe a asi 4 % pri napätí oproti spresnenej odpovedi. Pozri [Kontrola napätia a priehybu](topic:simulation#update-while-you-edit-live).

- **Čo sa rozbije ako prvé.** Pri statickej alebo vzpernej štúdii {{ui:Čo sa rozbije ako prvé?}} v bloku **Rozbiť to** škáluje zaťaženia, kým súčiastka nepovolí. Zoraďuje od najhoršieho: faktor zaťaženia po prvú medzu klzu (s červenou značkou tam, kde napätie vrcholí) a faktor zaťaženia po vzpernú stratu stability. Faktor menší ako 1 znamená, že súčiastka už pri zaťažení povoľuje, a panel Problémy zobrazí chybu. Faktory pochádzajú z lineárnej štúdie, takže sú len také dobré, aká je táto štúdia. Pozri [Kontrola napätia a priehybu](topic:simulation#find-out-what-breaks-first-break-it).

- **Plasticita a kontakt.** Pridali sa dva ďalšie typy štúdií: nelineárna, pri ktorej materiál sleduje priamku až po medzu klzu a potom strmšiu časť, pričom sa vykresľuje plastická deformácia, a kontaktná, pri ktorej sa oddelené kusy tlačia na seba (bez trenia) alebo zostávajú spojené. Krok zaťaženia, ktorý sa nedá ustáliť, alebo kusy, ktoré do seba prenikajú príliš hlboko, sa zobrazia v paneli Problémy. Trenie, veľké kĺzanie, veľké otočenia, veľké priehyby a únava materiálu nie sú riešené. Pozri [Kontrola napätia a priehybu](topic:simulation#yielding-and-contact-nonlinear-studies).

- **Vstupné súbory pre CalculiX.** {{ui:Export}} › {{ui:CalculiX vstupný súbor (.inp)}} uloží štúdiu pre CalculiX, samostatný program, ktorý nainštalujete a spustíte sami. {{ui:Export}} › {{ui:Výsledky CalculiX (.frd)}} načíta jeho výsledkový súbor späť na tú istú sieť. PartCraft ten program nikdy nespúšťa a upozorní vás, ak sa súčiastka zmenila od uloženia vstupného súboru.

### Zostavy

- **Štúdie pohybu.** {{ui:Zostava}} › {{ui:Pohyb}} poháňa hodnotu jedného kĺbu počas času, ktorý zadáte (konštantná rýchlosť, plynulá, sínusová alebo tam a späť). Zostavu umiestni v každom kroku s jej kĺbmi a uzavretými slučkami a hlási, ktoré časti kolidujú a ako blízko sa dostanú k sebe. {{ui:Pridať bod}} vykreslí polohu, rýchlosť a zrýchlenie bodu, hodnotu kĺbu a vôľu v čase. {{ui:Uložiť CSV}} a {{ui:Uložiť graf}} ich zapíšu do súboru. Po {{ui:Spustiť}} sa pomocou ovládania Krokovať cez beh na lište behu presuniete do ľubovoľného kroku. Nastavenia štúdie sa uložia v súbore zostavy. Rýchlosť a zrýchlenie sa počítajú zo zaznamenaných polôh, takže ak ostrý vrchol vyjde nízko, použite viac krokov. Pozri [Kontrola zostavy na kolízie a pohyb](topic:check-assembly#a-motion-study).

### Plochy a súčiastky z fyziky

- **Pracovný priestor Plochy.** Vyberte {{ui:Plochy}} v poli {{ui:Pracovný priestor}} a získate NURBS krivky a plochy vedľa súčiastky: {{ui:Krivka}}, {{ui:Loft}}, {{ui:Ťahanie po dráhe}}, {{ui:Prispôsobiť}} a {{ui:Zebra}}. Spojitosť (G0, G1 alebo G2) sa meria na presných plochách a hrana, ktorá je horšia, než ste požadovali, sa uvedie v paneli Problémy s opravou Prispôsobiť. {{ui:Vyhladiť}} meria línie trupu na inflexie a skoky krivosti a prebuduje nehladké časti v rámci vašej tolerancie. Plochy sa ukladajú do súboru súčiastky a nemenia prvky súčiastky. Pozri [Voľné plochy (NURBS)](topic:nurbs-surfaces).

- **Pracovný priestor Inžinier.** Vyberte {{ui:Inžinier}} v prepínači pracovných priestorov, zvoľte generátor a kliknite na {{ui:Nový}}. Skript dimenzuje súčiastku podľa toho, čo musí robiť (prenos tepla, prúdenia, tlak, materiál, spôsob tlače), pomocou vzorcov z učebníc a vytvorí ju. Potom vráti použité čísla spolu s ich zdrojmi, svoje kontroly výrobnosti a súbory pre analytické nástroje. Rovnaké vstupy dajú rovnakú súčiastku na ľubovoľnom počítači. Generátor sa uchováva v súčiastke a otvorenie súčiastky nikdy nespustí žiadny skript. Pozri [Súčiastky z fyziky: generátory](topic:engineer-generators) a [Písanie generátora](topic:write-a-generator).

### Náčrty, výkresy a výroba

- **Náčrt z fotografie.** {{ui:Prvky}} › {{ui:Viac}} › {{ui:Náčrt z fotografie…}} obkreslí obrázok plochej súčiastky na jednoduchom podklade (obrys a otvory) alebo kresbu perom na čiary, oblúky a kružnice. Zadáte jednu dĺžku, skontrolujete náhľad a vytvoríte náčrt. Pozri [Základy náčrtov](topic:sketch-basics#a-sketch-from-a-photo).

- **Mierka a rozdelenie pre tlač.** {{ui:Export}} › {{ui:Mierka pre tlač (STL alebo 3MF)…}} škáluje podľa osí bez zmeny súčiastky, napríklad o prídavok na zmrštenie. {{ui:Export}} › {{ui:Rozdeliť pre tlač (zip kusov)…}} rozreže súčiastku, ktorá je príliš veľká pre vašu tlačovú plochu, na očíslované kusy spojené kolíkmi, kľúčmi, lastovičími chvostmi, otvormi pre kolíky alebo magnetickými vybraniami. Pozri [Tlač v 3D](topic:print-3d).

- **Rozmiestnené tabule do G-kódu.** {{ui:Export}} › {{ui:Rozmiestnené tabule do G-kódu}} načíta vnorené DXF a vytvorí jeden program na tabuľu cez postprocesor, ktorý zvolíte: najprv diery a vyrezania, potom obrysy. Nenaplánuje nábehy rezu, poradie rezania ani spoločné hrany. Pozri [Rozmiestnenie plochých súčiastok na tabuliach](topic:nest-flat-parts#cut-the-sheets-g-code).

- **Výkresy, ktoré robia viac sami.** {{ui:List}} › {{ui:Automaticky}} vyberie najmenší list formátu A, ktorý pojme pohľady, pri najväčšej štandardnej mierke až do 1:1. {{ui:Okótovať otvory}} umiestni stredovú značku na každý otvor, jednu výnosku pre každú veľkosť a polohy od ľavého dolného rohu pohľadu. Pozri [Vytvorenie výkresu](topic:drawing-pdf).

### Vo všetkých aplikáciách

- **Jazyky.** Aplikácie sú dostupné v 54 jazykoch. Jazyky okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovorca.

- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} vyberá Zalomiť (ako predtým), 2 riadky alebo 1 riadok. Lišta, ktorá sa nezmestí, sa posúva do strán. Lišta Prvky v PartCraft zobrazuje najpoužívanejší nástroj veľký a varianty ukrýva za rozdelené tlačidlo.

- **Pripojte svojho AI asistenta.** Studio je centrum na pripojenie vlastného asistenta ku všetkým ôsmim aplikáciám, s oprávnením iba na čítanie, navrhovanie alebo úpravu pre každú aplikáciu. Pripojený asistent dokáže dimenzovať súčiastku podľa jednej vety, napríklad držiak na zaťaženie, ukázať svoj postup a všetky kontroly a vytvoriť ju. Oznámi, čo nekontroloval (koncentráciu napätia, únavu, dotvarovanie plastov). Pozri [Používanie PartCraft s AI asistentom](topic:use-with-ai-assistants).

## Opravené vo verzii 0.8.1

- **Zamrznutie kurzora na celej obrazovke.** Výber pri prejdení kurzorom je teraz obmedzený na určitú frekvenciu. Príčina je podľa nášho najlepšieho odhadu a nebola potvrdená s osobou, ktorá problém nahlásila.

- **Jazyk počas behu.** Studio a balené vydania môžu počas behu prepnúť jazyk; predtým boli iba v angličtine. Toto ešte nie je otestované na každej platforme. Dajte nám vedieť, ak sa jazyk nemení.

## Ešte nie je v tejto verzii

- Pripojenie AI nie je dokončené: pripojenie jedným kliknutím v Studiu, hostiteľský konektor pre AI v prehliadači, váš vlastný API kľúč v Studiu a publikovaný balík MCP nie sú sľúbené. Studio nemá vlastnú AI.
- Studio nie je podpísané kódom: Windows môže zobraziť upozornenie a macOS vyžaduje kliknutie pravým tlačidlom a potom Otvoriť. Pozri [Riešenie problémov](topic:troubleshooting).
- Tolerančné reťazce sú stále jednosmerné: pozri [Tolerančné reťazce](topic:tolerance-stackup).
- Zvyšok je uvedený v [Čo ešte nie je hotové](topic:not-built-yet).

Staršie zmeny sú v [Novinky vo verzii 0.7](topic:whats-new-0-7).
