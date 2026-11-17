---
title: Pielaižu virknes
summary: Izvēlieties ķēdi caur montāžas detaļu virsmām un redziet, cik var mainīties atstarpe tās galā, sliktākajā gadījumā un RSS, ar izmēriem, kas visvairāk ietekmē, rangā pirmie.
keywords: pielaižu virkne, pielaižu ķēde, pielaižu analīze, izmēru ķēde, cilpa, atstarpe, piegulšana, sliktākais gadījums, rss, kvadrātsakne no summas, statistiskā pielaide, ieguldītāji, jutība, gd&t, vispārīgā pielaide, iso 2768
from: cbdb3159
---

**Pielaižu virkne** saskaita izmērus pa ķēdi caur vairākām detaļām, lai redzētu, cik var mainīties rezultāts — parasti atstarpe —, ja katra detaļa ir izgatavota jebkur savu pielaižu robežās.

## Izvēlieties ķēdi

1. Atveriet montāžu un izvēlieties {{ui:Pielaižu virkne}} montāžas grupā. Virs skata atveras kartīte.
2. Izvēlieties, pa ko ķēde tiek mērīta: montāžas X, Y vai Z, vai {{ui:Pirmās virsmas normāle}}.
3. Nospiediet {{ui:Atlasīt ķēdi}} un noklikšķiniet uz virsmām, caur kurām iet ķēde, **pēc kārtas**: sāciet vienā atstarpes pusē, ejiet cauri detaļām un beidziet otrā atstarpes pusē.
4. Nospiediet {{ui:Gatavs}} vai {{key:Enter}}. {{key:Backspace}} atceļ pēdējo klikšķi; {{key:Esc}} atceļ.

Divi klikšķi uz vienas detaļas veido šīs detaļas izmēru (tās attālumu pa ķēdi). Klikšķis uz citas detaļas veido **saskarni** starp tām, kur detaļas saskaras; tai nav pielaides, ja vien neievadāt to. Saites pieskaita vai atņem atkarībā no ķēdes virziena, un tās slēdz cilpu: nominālā atstarpe ir tā, ko rāda modelis.

Jūs varat arī {{ui:Pievienot saiti}} ar roku un ierakstīt tās nominālo vērtību, pielaidi un to, vai tā pieskaitās (+) vai atņemas (−).

## Piešķiriet katrai saitei pielaidi

Katrai saitei ir **augšējā** un **apakšējā** novirze (piemēram, +0.1 un −0.05). **Pielaide no** tās aizpilda pēc detaļas:

- **Vispārīgā pielaide**: detaļas rasējuma bloka lauks Pielaide (skatiet [Rasējums uz PDF](topic:drawing-pdf)), kad tas nolasa ±0.1, +0.2/-0.1 vai ISO 2768-f, -m, -c vai -v (ISO 2768-1 lineārās pielaides atkarībā no saites izmēra). Detaļas vispārīgo pielaidi izmanto uzreiz, kad ķēde ir izvēlēta.
- **GD&T**: jebkurš elementa kontroles rāmis uz detaļas rasējuma. Pozīcijas, profila un izsitumu zonas dod ± pusi no pielaides. Orientācijas vai formas pielaide parasti jau ietilpst izmēra pielaidē: pievienojiet to tikai tad, ja ķēde saskaras ar kontrolēto virsmu. Ar Ⓜ vai Ⓛ zona tiek ņemta pēc tās norādītā izmēra; bonusa pielaide netiek skaitīta.
- **Ierakstīta**: jebkuri skaitļi, ko ierakstāt.

## Lasiet rezultātus

- **Atstarpe, nominālā** un, kad pielaides nav vienādas, **Atstarpe, vidējā** — +0.2/−0 un +0/−0.1 pārvieto diapazona vidu.
- **Sliktākais gadījums**: visas pielaides vienlaikus to robežās. Atstarpe nekad nevar būt ārpus šī.
- **RSS** (kvadrātsakne no summas): katra pielaide tiek ņemta kā trīs standartnovirzes normāla izkliede un saskaitīta kā kvadrātsakne no to kvadrātu summas. Lielākā daļa montāžu ir labi zem sliktākā gadījuma; šī ir parastā aplēse detaļām, kas ražotas lielos daudzumos.
- Ievadiet **Atstarpe vismaz** un **Atstarpe ne vairāk kā**, lai redzētu, vai sliktākais gadījums vienmēr paliek iekšā un cik no miljona montāžām pēc RSS sagaidāms ārpusē.
- Kolonna **#** sarindo saites pēc to **daļas** RSS: pievelciet pirmās, lai panāktu lielāko atšķirību.

{{ui:Saglabāt CSV}} ieraksta saites, to daļas un rezultātus. Pielaižu virknes tiek saglabātas montāžas failā, un katra izmaiņa ir viens solis priekš {{key:Mod+Z}}.

:::note
Pielaižu virkne ir viena virziena. Tā neseko leņķiem vai pagriezieniem pa ķēdi, un tā nenolasa izmēru pielaides no skicēm: dodiet tās kā ierakstītas pielaides vai caur bloka lauku.
:::
