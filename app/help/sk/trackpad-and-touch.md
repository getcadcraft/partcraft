---
title: Trackpad, dotyk a malé obrazovky
summary: Ako otáčať, posúvať a priblížiť pomocou trackpadu Mac alebo notebooku, čo funguje na dotykovej obrazovke a čo stále potrebuje klávesnicu, a ako sa obrazovka preusporiada na telefóne alebo úzkom okne.
keywords: trackpad, touchpad, magic mouse, mac, dotyk, tablet, ipad, telefón, pinch, dva prsty, pravé kliknutie, sekundárne kliknutie, gestá, malá obrazovka, mobil
from: 0e764fd8
---

PartCraft je navrhnutý pre myš s kolieskom a stredným tlačidlom, ale trackpad funguje dobre, keď poznáte gestá, a dotyková obrazovka funguje na pozeranie súčiastok a jednoduché náčrty.

## Trackpad

:::mac
| Ak chcete | Urobte toto |
|---|---|
| Otočiť súčiastku (3D) | Kliknite a ťahajte jedným prstom (alebo ťahajte troma prstami, ak máte zapnuté ťahanie troma prstami) |
| Posunúť (3D) | Podržte {{key:Shift}} (alebo ⌘) a kliknite-ťahajte, alebo kliknite-ťahajte so dvoma stlačenými prstami (ťahanie sekundárnym kliknutím) |
| Otočiť súčiastku prejdením | Prejdite dvoma prstami; s {{key:Shift}} prejdenie posúva. Vyžaduje, aby **Posúvanie** bolo nastavené na „Zistiť automaticky“ (začiatok) alebo „Trackpad“ |
| Priblížiť (3D a náčrt) | Stiahnutie prstov (pinch). Priblíženie smeruje k ukazovateľu. Ak je **Posúvanie** nastavené na „Koliesko myši“, aj posúvanie dvoma prstami priblíži |
| Pravé kliknutie | Kliknite dvoma prstami, alebo {{key:Ctrl}}+klik |
| Posunúť v náčrte | Prejdite dvoma prstami („Zistiť automaticky“ alebo „Trackpad“), alebo kliknite-ťahajte so dvoma stlačenými prstami. {{key:Shift}}+ťahanie v náčrte neposúva (nakreslí výberové okno) |
| Pridať do výberu v náčrte | {{key:Shift}}+klik alebo ⌘+klik |

Zapnite sekundárne kliknutie v **Nastavenia systému, Trackpad, Ukazovanie a klikanie**, ak dvojprstové kliknutie nič nerobí.
:::

:::windows linux
| Ak chcete | Urobte toto |
|---|---|
| Otočiť súčiastku (3D) | Stlačte touchpad (alebo ťuknite a podržte) a ťahajte |
| Posunúť (3D) | Podržte {{key:Shift}} alebo {{key:Ctrl}} a ťahajte, alebo ťahajte so stlačenou oblasťou pravého tlačidla |
| Otočiť súčiastku prejdením | Prejdite dvoma prstami; s {{key:Shift}} prejdenie posúva. Vyžaduje, aby **Posúvanie** bolo nastavené na „Zistiť automaticky“ (začiatok) alebo „Trackpad“ |
| Priblížiť (3D a náčrt) | Stiahnutie prstov, kde to touchpad podporuje. Priblíženie smeruje k ukazovateľu. Ak je **Posúvanie** nastavené na „Koliesko myši“, posúvanie dvoma prstami priblíži |
| Pravé kliknutie | Ťuknutie dvoma prstami, alebo spodný pravý roh touchpadu |
| Posunúť v náčrte | Prejdite dvoma prstami („Zistiť automaticky“ alebo „Trackpad“), alebo ťahajte so stlačenou oblasťou pravého tlačidla. {{key:Shift}}+ťahanie v náčrte neposúva |
| Pridať do výberu v náčrte | {{key:Shift}}+klik alebo {{key:Ctrl}}+klik |
:::

**Posúvanie** je v [nastaveniach PartCraft](topic:settings): „Zistiť automaticky“ (začiatok) považuje bočné alebo jemné posúvanie za trackpad, „Trackpad“ to robí vždy, „Koliesko myši“ nikdy. Stiahnutie prstov priblíži vo všetkých troch režimoch.

Klávesy so šípkami otáčajú 3D pohľad a {{key:Shift}} so šípkami posúva, keď ste klikli do pohľadu: pohodlné na trackpade. {{key:Plus}} a {{key:Minus}} priblížia.

## Dotykové obrazovky

PartCraft číta dotykový vstup, takže tablety, dotykové notebooky a telefóny fungujú, s obmedzeniami.

:::touch
**Dotykové klávesy**

Keď sa dotknete obrazovky, v pravom dolnom rohu pohľadu sa objaví malý panel s klávesmi, ktoré prst nemá. Zmizne, keď použijete myš.

- {{ui:Esc}}: klávesa Esc. Zruší, čo ste začali, alebo sa vráti späť, presne ako klávesa.
- {{ui:Pridať}} (v náčrte, s nástrojom Výber): kým je zapnuté, každé ťuknutie pridá položku do výberu alebo ju z neho odoberie, ako {{key:Shift}}+klik. Ťuknite znova, aby ste sa vrátili k výberu jednej položky naraz.
- {{ui:Hotovo}} (pri kreslení reťaze úsečiek, spline alebo mnohouholníka): dokončí ho, ako pravé kliknutie.

Podržanie prsta nehybne asi pol sekundy urobí pri jednom ťuknutí to isté: pri kreslení nástrojom dokončí, čo kreslíte, a pri nástroji Výber pridá položku pod prstom do výberu alebo ju odoberie. Body a čiary sa ľahšie trafia prstom: PartCraft hľadá okolo ťuknutia asi dvakrát tak ďaleko ako okolo kliknutia.

**V 3D pohľade**

- Jeden prst: otáčať súčiastku.
- Dva prsty: stiahnutím prstov priblížite, pohybom spolu posúvate.
- Ťuknutie: vybrať plochu, hranu alebo rovinu. Pred ťuknutím sa nič nezvýrazní pri nasmerovaní.

**V náčrte**

- Ťuknutím nástrojom kreslenia umiestnite každý bod: ťuknite na začiatok a potom na koniec. Priľnutie nastane tam, kde zdvihnete prst.
- Dva prsty priblížia a posunú. Položenie druhého prsta zruší ťahanie, ktoré začal prvý prst.
- Reťaz úsečiek ukončíte ťuknutím na {{ui:Hotovo}}, podržaním prsta na mieste, alebo ťuknutím znova na {{ui:Úsečka}} (alebo iný nástroj) na paneli nástrojov.
- S nástrojom Výber ťuknutím vyberiete; ťahaním bodu alebo čiary ju presuniete; ťahaním po prázdnom priestore vytvoríte okno. Druhé ťuknutie nahradí výber, pokiaľ nie je zapnuté {{ui:Pridať}} (alebo podržíte prst na druhej položke).
- Ak chcete zmeniť kótu, použite **Upraviť** vedľa nej v pravom paneli.

**Výkresový list**

Ťuknutím umiestnite a vyberiete symboly a ťahaním symbolu ho presuniete. Stiahnutím prstov priblížite, posunom dvoch prstov posúvate, alebo ťahaním jedného prsta cez prázdny papier. Druhý prst zastaví symbol, ktorý ťaháte, a ten sa vráti na pôvodné miesto.

**Čo stále potrebuje klávesnicu**

- Písanie čísel: klávesnica obrazovky sa objaví v číselných poliach a poliach kót.
- Klávesové skratky nástrojov: použite panel nástrojov.
:::

## Malé obrazovky a telefóny

- Od 1280 pixelov šírky sa panel nástrojov zmestí do jedného riadku.
- Medzi zhruba 760 a 1100 pixelmi sa bočné panely zúžia.
- Pod zhruba 760 pixelmi (telefón alebo úzke okno) sa obrazovka zoradí pod seba: panel nástrojov (prejdite ho do strany pre viac tlačidiel), 3D pohľad, stavový riadok, potom panel vlastností a história. Posuňte stránku, aby ste sa dostali k paneľom.
- Ponuky ({{ui:Export}}, {{ui:Pohľady}}) sa otvoria na celú šírku obrazovky.

:::note
Na iPhone v prehliadači nie je režim celej obrazovky; {{key:Ctrl+Shift+F}} a tlačidlo režimu obrazovky prepínajú iba medzi normálnym režimom a skrytými lištami.
:::

Telefón je v poriadku na otvorenie súčiastky, jej otáčanie a kontrolu jej údajov. Skutočné modelovanie potrebuje väčšiu obrazovku a myš alebo trackpad.

## Prehliadače

Aktuálne Chrome, Edge, Firefox a Safari spúšťajú PartCraft na Windows, macOS a Linuxe, aj na tabletoch a telefónoch, pokiaľ sú dostupné WebGL a WebAssembly. Pozri [Prehliadače a počítače](common:browsers).
