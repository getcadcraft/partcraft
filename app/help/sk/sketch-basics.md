---
title: Nakreslite prvý náčrt
summary: Otvorte náčrt na rovine alebo na rovnej ploche, kreslite úsečky, obdĺžniky, kružnice, oblúky, body a osi, zaoblite roh, vyberajte, ťahajte a mažte.
keywords: náčrt, kreslenie, úsečka, obdĺžnik, kružnica, oblúk, bod, os, konštrukcia, zaoblenie, zaoblenie náčrtu, zaoblený roh, prichytávanie, výber, okno, presun, profil
from: 28be7436
---

Každé teleso začína ako náčrt: plochý výkres na rovine. Tento postup popisuje kresliace nástroje. Ako náčrt ukotviť väzbami a kótami, je opísané v [Úplné určenie náčrtu](topic:relations-dimensions).

## Spustenie náčrtu

Náčrt môžete vytvoriť na základnej rovine alebo na ktorejkoľvek rovnej ploche súčiastky.

1. Vyberte, kde chcete náčrt vytvoriť:
   - základnú rovinu: kliknite na **Predná rovina**, **Horná rovina** alebo **Pravá rovina** v histórii, alebo kliknite na rovinu v pohľade;
   - rovnú plochu: kliknite na plochu v pohľade. Celá plocha sa zvýrazní.
2. Na paneli nástrojov zvoľte {{ui:Náčrt}} alebo stlačte {{key:S}}. (Ak je vybraná plocha, môžete na pravom paneli zvoliť aj {{ui:Náčrt na tejto ploche}}; pri rovine {{ui:Náčrt na nej}}.)

Pohľad sa otočí kolmo na rovinu, na paneli nástrojov sa zobrazia nástroje náčrtu a nástroj Úsečka je pripravený. Ak stlačíte {{ui:Náčrt}} bez výberu, zobrazia sa základné roviny a stavový riadok hlási: "Kliknite na rovinu alebo rovnú plochu, na ktorej chcete kresliť. Esc ukončí."

:::note
Zakrivená plocha nemôže niesť náčrt: "Táto plocha je zakrivená. Vyberte rovnú plochu alebo rovinu, na ktorú chcete kresliť."
:::

**Náčrt na ploche nasleduje túto plochu.** Ak bola plocha vytvorená hranou náčrtu alebo koncom vytiahnutia, nový náčrt sa posunie pri zmene prvku (hlbšia vyrezaná dutina so sebou odnesie aj náčrt na svojom dne). Ak panel uvádza, že plocha je "Pevné na mieste výberu", náčrt zostane tam, kde je plocha teraz.

## Kresliace nástroje

Každý nástroj má tlačidlo na paneli nástrojov a klávesovú skratku. Opätovným zvolením tohto tlačidla, stlačením {{key:S}} alebo {{key:Esc}} sa vrátite na Vybrať.

| Nástroj | Klávesa | Ako kresliť |
|---|---|---|
| {{ui:Úsečka}} | {{key:L}} | Kliknite na začiatok a potom na každý ďalší bod. Úsečky sa reťazia koniec na koniec. Reťaz ukončíte stlačením {{key:Esc}}, {{key:Enter}}, pravým tlačidlom myši alebo dvojitým kliknutím. Kliknutím na existujúci bod sa reťaz tiež ukončí |
| {{ui:Obdĺžnik}} | {{key:R}} | Kliknite na jeden roh a potom na protiľahlý roh. Získate štyri úsečky spojené v rohoch, dve vodorovné a dve zvislé |
| {{ui:Kružnica}} | {{key:C}} | Kliknite na stred a potom na bod na kružnici |
| {{ui:Oblúk}} | {{key:A}} | Kliknite na stred, potom na začiatok a potom na koniec. Oblúk sa vytvorí v smere, akým pohybujete kurzorom okolo stredu |
| {{ui:Bod}} | {{key:P}} | Kliknite. Samostatný bod označuje stred otvoru pre {{ui:Otvor}} |
| {{ui:Os}} | {{key:N}} | Ako úsečka, po jednom segmente. Kreslí sa prerušovane; je to konštrukčná geometria, používaná ako os rotácie alebo referencia |
| {{ui:Zaoblenie}} | {{key:F}} | Kliknite na roh, kde sa stretávajú dve úsečky, zadajte polomer a stlačte {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Kliknite na body, ktorými krivka prechádza; {{key:Enter}} ukončí kreslenie, kliknutie na prvý bod ho uzavrie. Pozrite [Splajny, orezanie, odsadenie a ďalšie nástroje náčrtu](topic:sketch-tools) |
| {{ui:Orezať}} | {{key:T}} | Kliknite na časť krivky, ktorú chcete odstrániť, až po najbližšie priesečníky |
| {{ui:Kóta}} | {{key:D}} | Pozrite [Úplné určenie náčrtu](topic:relations-dimensions) |

Počas kreslenia malé okno vedľa kurzora zobrazuje dĺžku, veľkosť, priemer alebo polomer.

### Zadanie veľkosti počas kreslenia

Po prvom kliknutí pri úsečke, obdĺžniku, kružnici alebo oblúku môžete veľkosť zadať namiesto klikania. Po zadaní čísla sa vedľa kurzora otvorí okno s týmto číslom:

| Nástroj | Polia ({{key:Tab}} prejde na ďalšie) | Čo sa stane po stlačení {{key:Enter}} |
|---|---|---|
| {{ui:Úsečka}}, {{ui:Os}} | Dĺžka, potom Uhol (°) od osi X náčrtu | Úsečka sa nakreslí danej dĺžky, smerom ku kurzoru alebo pod zadaným uhlom; reťaz pokračuje od jej konca |
| {{ui:Obdĺžnik}} | Šírka, potom Výška | Obdĺžnik sa nakreslí od prvého rohu smerom ku kurzoru; veľkosť, ktorú ste nezadali, sa určí podľa kurzora |
| {{ui:Kružnica}} | Priemer | Kružnica sa nakreslí s týmto priemerom |
| {{ui:Oblúk}} | Polomer po strede, potom Uhol oblúka (°) po začiatku | Začiatok je v tejto vzdialenosti od stredu; potom oblúk pokračuje o tento uhol v smere, akým ste pohybovali kurzorom |

Každá veľkosť, ktorú zadáte, sa v tom istom kroku stane **riadiacou kótou**, takže náčrt má správnu veľkosť: {{key:Mod+Z}} odstráni tvar aj jeho kóty naraz. Ak namiesto stlačenia {{key:Enter}} kliknete, zadané hodnoty sa zachovajú a zvyšok sa prevezme z kliknutia. {{key:Esc}} zavrie okno a vrátite sa ku kurzoru.

Ak chcete kresliť iba kliknutiami, vypnite to v {{ui:Nastavenia}} › {{ui:PartCraft}} › **Kóta pri kreslení**. Pozrite [Nastavenia PartCraft](topic:settings).

{{ui:Viac}} na konci nástrojov náčrtu obsahuje Spline s riadiacimi bodmi, Predĺžiť, Odsadenie, Zrkadliť, Mnohouholník, Drážka, vzory náčrtu a Premietnuť hranu: pozrite [Splajny, orezanie, odsadenie a ďalšie nástroje náčrtu](topic:sketch-tools).

### Prichytávanie

Prichytávanie vytvára väzby za vás, takže náčrt zostane spojený pri pohybe:

- Na **koncovom bode alebo počiatku** sa zobrazí malý štvorček. Nový bod sa stotožní s ním.
- Na **úsečke, kružnici alebo oblúku** sa zobrazí malý kríž. Nový bod sa umiestni na túto krivku.
- Úsečka do 3 stupňov od vodorovnej alebo zvislej polohy sa k nej prichytí a dostane vodorovnú alebo zvislú väzbu. Štítok zobrazuje "H" alebo "V".

Ak chcete prichytávaniu zabrániť, priblížte pohľad, aby ste klikali ďalej od bodu alebo krivky.

## Zaoblenie rohu

1. Stlačte {{key:F}} alebo zvoľte {{ui:Zaoblenie}}.
2. Kliknite na bod rohu, kde sa stretávajú dve úsečky.
3. Otvorí sa okno s navrhovaným polomerom. Zadajte polomer a stlačte {{key:Enter}}.

Obe úsečky sa orežú a spoja dotyčným oblúkom s polomerovou kótou. Správy, ktoré môžete vidieť: "Zaoblenie vyžaduje roh, kde sa stretávajú práve dve úsečky." a "Tento polomer je pre tieto úsečky príliš veľký."

:::tip
Zaoblenie náčrtu zaokrúhli roh profilu, takže vytiahnutie dostane zaoblené zvislé hrany. Ak chcete zaoblit hrany samotného telesa (napríklad horné hrany plechu), použite namiesto toho prvok {{ui:Zaoblenie}} na súčiastke: pozrite [Zaoblenie, skosenie a dutina](topic:fillet-chamfer-shell). V náčrte je Zaoblenie na paneli nástrojov nástrojom náčrtu; na súčiastke je to prvok.
:::

## Konštrukčná geometria

Konštrukčné úsečky, kružnice a oblúky sú prerušované a sivé. Vedú náčrt, ale nie sú súčasťou profilu, ktorý sa vytiahne alebo rotuje.

1. Vyberte úsečky, kružnice alebo oblúky.
2. Stlačte {{key:Q}} alebo zvoľte {{ui:Konštrukčná}}. Opätovným stlačením ich vrátite späť.

## Výber, presun a mazanie

Pre Vybrať stlačte {{key:S}} (alebo {{key:Esc}}, kým nie je aktívny žiadny nástroj).

- Kliknutím na bod, úsečku, kružnicu, oblúk, symbol väzby alebo kótu ich vyberiete. {{key:Shift}}+kliknutie pridá do výberu alebo z neho odoberie. Vo Windows a Linuxe to robí {{key:Ctrl}}+kliknutie; na Macu ⌘+kliknutie.
- Ťahaním po prázdnom priestore nakreslite okno: vyberie sa všetko, čo je v ňom úplne vnútri.
- Ťahaním bodu alebo úsečky ju presuniete. Riešiteľ pri pohybe zachováva každú väzbu a kótu, takže sa hýbe iba voľná geometria. Ťahaním okraja kružnice zmeníte jej polomer.
- Ťahaním čísla kóty presuniete popisku.
- Výber odstránite stlačením {{key:Delete}} alebo {{key:Backspace}}, alebo zvolením {{ui:Zmazať}} na pravom paneli. Zmazaním geometrie sa zmažú aj väzby na nej.

## Zväčšenie a posun v náčrte

- Otáčaním kolieska priblížite alebo oddialite pri kurzore.
- Ťahaním so stredným alebo pravým tlačidlom posuniete pohľad.
- {{ui:Prispôsobiť}} na paneli nástrojov alebo na pravom paneli prispôsobí náčrt pohľadu. V náčrte je klávesa {{key:F}} nástroj Zaoblenie, nie Prispôsobiť.

## Zatvorenie náčrtu

Zvoľte {{ui:Ukončiť}} na paneli nástrojov alebo {{ui:Ukončiť náčrt}} na pravom paneli, prípadne stláčajte {{key:Esc}}, kým sa náčrt nezatvorí. Každé {{key:Esc}} najprv zruší rozpracovanú činnosť, potom sa vráti na Vybrať, potom zruší výber a ďalšie stlačenie zavrie náčrt.

Náčrt zostane vybratý, takže ho ďalšie {{ui:Vytiahnuť}} alebo {{ui:Rotácia}} použije.

## Čo tvorí dobrý profil

{{ui:Vytiahnuť}} a {{ui:Rotácia}} používajú **každú uzavretú slučku** z (nekonštrukčných) úsečiek, kružníc, oblúkov a splajnov náčrtu. Slučky vnútri slučiek sa stanú otvormi.

- Každý koniec sa musí stretnúť práve s jedným iným koncom. Správa "Profil je otvorený: koniec v (12.5, 40) nie je s ničím spojený." uvádza miesto.
- V jednom bode sa nesmú stretnúť tri konce: "Profil sa vetví v (0, 20): stretáva sa tu viac ako dva konce."
- Body a konštrukčná geometria sa pri profile ignorujú.

Ďalej: [Úplné určenie náčrtu väzbami a kótami](topic:relations-dimensions).

## Náčrt z fotografie

**Prvky › Viac › Náčrt z fotografie…** (alebo skupina Náčrt na páse stromu prvkov) obkreslí fotografiu plochej súčiastky na jednoduchom podklade — jej obrys a otvory — alebo kresbu perom do náčrtu úsečiek, oblúkov a kružníc. Zadajte jednu dĺžku (šírku, výšku alebo najdlhšiu stranu), aby mal náčrt správnu veľkosť, skontrolujte, čo našiel, v ukážke a zvoľte **Vytvoriť náčrt**; môže ho aj vytiahnuť, v tom istom kroku späť. Obkreslenie prebieha na tomto počítači. Polomery rohov sú v rozsahu asi 5 %, detaily o pixel alebo dva sa stratia a fotografia urobená naklonene alebo s tieňmi cez súčiastku sa nevyrovná: fotografujte súčiastku kolmo, pri rovnomernom osvetlení.
