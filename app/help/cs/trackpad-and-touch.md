---
title: Touchpad, dotyk a malé obrazovky
summary: Jak otáčet, posouvat a přibližovat touchpadem Mac nebo notebooku, co funguje na dotykové obrazovce a co stále potřebuje klávesnici, a jak se obrazovka přeskládá na telefonu nebo v úzkém okně.
keywords: touchpad, magic mouse, mac, dotyk, tablet, ipad, telefon, stažení prsty, dva prsty, pravé kliknutí, sekundární kliknutí, gesta, malá obrazovka, mobil
from: 0e764fd8
---

PartCraft je navržen pro myš s kolečkem a prostředním tlačítkem, ale touchpad funguje dobře, jakmile znáte gesta, a dotyková obrazovka se hodí na prohlížení dílů a jednoduché skicování.

## Touchpad

:::mac
| Cíl | Postup |
|---|---|
| Otočit díl (3D) | Klikněte a táhněte jedním prstem (nebo táhněte třemi prsty, pokud jste zapnuli tažení třemi prsty) |
| Posun (3D) | Podržte {{key:Shift}} (nebo ⌘) a klikněte a táhněte, nebo klikněte a táhněte dvěma přitisknutými prsty (tažení sekundárním kliknutím) |
| Otočit díl švihnutím | Švihněte dvěma prsty; s {{key:Shift}} švih posouvá. Vyžaduje **Posouvání** nastavené na „Podle situace“ (výchozí), nebo „Touchpad“ |
| Přiblížit (3D a skica) | Stáhněte prsty. Přiblížení směřuje k ukazateli. S **Posouváním** nastaveným na „Kolečko myši“ přibližuje i posun dvěma prsty |
| Pravé kliknutí | Klikněte dvěma prsty, nebo {{key:Ctrl}}+klik |
| Posun ve skice | Švihněte dvěma prsty („Podle situace“ nebo „Touchpad“), nebo klikněte a táhněte dvěma přitisknutými prsty. {{key:Shift}}+tažení ve skice neposouvá (kreslí výběrové okno) |
| Přidat do výběru ve skice | {{key:Shift}}+klik nebo ⌘+klik |

Zapněte sekundární kliknutí v **Nastavení systému, Trackpad, Ukazování a klikání**, pokud dvouprstové kliknutí nic nedělá.
:::

:::windows linux
| Cíl | Postup |
|---|---|
| Otočit díl (3D) | Stiskněte touchpad (nebo klepněte a podržte) a táhněte |
| Posun (3D) | Podržte {{key:Shift}} nebo {{key:Ctrl}} a táhněte, nebo táhněte se stisknutou oblastí pravého tlačítka |
| Otočit díl švihnutím | Švihněte dvěma prsty; s {{key:Shift}} švih posouvá. Vyžaduje **Posouvání** nastavené na „Podle situace“ (výchozí), nebo „Touchpad“ |
| Přiblížit (3D a skica) | Stáhněte prsty, kde to touchpad podporuje. Přiblížení směřuje k ukazateli. S **Posouváním** nastaveným na „Kolečko myši“ přibližuje posun dvěma prsty |
| Pravé kliknutí | Klepnutí dvěma prsty, nebo pravý dolní roh touchpadu |
| Posun ve skice | Švihněte dvěma prsty („Podle situace“ nebo „Touchpad“), nebo táhněte se stisknutou oblastí pravého tlačítka. {{key:Shift}}+tažení ve skice neposouvá |
| Přidat do výběru ve skice | {{key:Shift}}+klik nebo {{key:Ctrl}}+klik |
:::

**Posouvání** je v [nastavení PartCraftu](topic:settings): „Podle situace“ (výchozí) bere boční nebo jemné posouvání jako touchpad, „Touchpad“ to dělá vždy, „Kolečko myši“ nikdy. Stažení prsty přibližuje ve všech třech režimech.

Šipky otáčejí 3D pohled a {{key:Shift}} se šipkami posouvá, jakmile jste klikli do pohledu: užitečné na touchpadu. {{key:Plus}} a {{key:Minus}} přibližují.

## Dotykové obrazovky

PartCraft čte dotykový vstup, takže tablety, dotykové notebooky a telefony fungují, s omezeními.

:::touch
**Dotykové klávesy**

Jakmile se dotknete obrazovky, v pravém dolním rohu pohledu se objeví malý pruh s klávesami, které prst nemá. Zmizí, když použijete myš.

- {{ui:Esc}}: klávesa Esc. Zruší, co jste začali, nebo se vrátí zpět, přesně jako klávesa.
- {{ui:Přidat}} (ve skice, s Výběrem): dokud je zapnuto, každé klepnutí přidá položku do výběru nebo ji z něj vyjme, jako {{key:Shift}}+klik. Klepněte znovu, abyste se vrátili k výběru jedné položky najednou.
- {{ui:Hotovo}} (při kreslení řetězu úseček, spline nebo mnohoúhelníku): dokončí jej, jako pravé kliknutí.

Podržení prstu na půl sekundy bez pohybu dělá totéž pro jedno klepnutí: s kreslicím nástrojem dokončí to, co kreslíte, a s Výběrem přidá položku pod prstem do výběru nebo ji z něj vyjme. Body a úsečky se trefují prstem snáze: PartCraft hledá přibližně dvakrát tak daleko kolem klepnutí jako kolem kliknutí.

**V 3D pohledu**

- Jeden prst: otočit díl.
- Dva prsty: stažením přiblížit, společným pohybem posunout.
- Klepnutí: vybrat plochu, hranu nebo rovinu. Před klepnutím se při najetí nic nezvýrazní.

**Ve skice**

- Klepněte nástrojem pro kreslení, abyste umístili každý bod: klepněte na začátek, pak na konec. Přichycení nastane tam, kde zvednete prst.
- Dva prsty přibližují a posouvají. Položení druhého prstu zruší tažení, které začal první prst.
- Pro ukončení řetězu úseček klepněte na {{ui:Hotovo}}, držte prst bez pohybu, nebo klepněte znovu na {{ui:Úsečka}} (nebo jiný nástroj) na panelu nástrojů.
- S Výběrem klepněte pro výběr; přetažením bodu nebo čáry je posunete; přetažením přes prázdné místo vytvoříte okno. Druhé klepnutí nahradí výběr, pokud není zapnuto {{ui:Přidat}} (nebo prst nedržíte bez pohybu na druhé položce).
- Pro změnu kóty použijte **Upravit** vedle ní v pravém panelu.

**List výkresu**

Klepnutím umisťujte a vybírejte symboly a přetažením symbolu jej posunete. Stažením přibližte, pohybem dvou prstů posouvejte, nebo táhněte jedním prstem přes prázdný papír. Druhý prst zastaví symbol, který jste táhli, a ten se vrátí zpět.

**Co stále potřebuje klávesnici**

- Psaní čísel: klávesnice obrazovky se objeví v polích pro čísla a kóty.
- Klávesové zkratky nástrojů: použijte panel nástrojů.
:::

## Malé obrazovky a telefony

- Od 1280 pixelů výše se panel nástrojů vejde na jeden řádek.
- Mezi zhruba 760 a 1100 pixely se boční panely zúží.
- Pod zhruba 760 pixely (telefon nebo úzké okno) se obrazovka poskládá: panel nástrojů (přejetím do strany pro další tlačítka), 3D pohled, stavový řádek, pak panel vlastností a historie. Posuňte stránku, abyste se k panelům dostali.
- Nabídky ({{ui:Export}}, {{ui:Pohledy}}) se otevírají přes celou šířku obrazovky.

:::note
Na iPhonu v prohlížeči není režim celé obrazovky; {{key:Ctrl+Shift+F}} a tlačítko režimu obrazovky přepínají jen mezi normálním zobrazením a skrytými lištami.
:::

Telefon je v pořádku na otevření dílu, jeho otočení a kontrolu údajů. Skutečné modelování potřebuje větší obrazovku a myš nebo touchpad.

## Prohlížeče

Aktuální Chrome, Edge, Firefox a Safari spouštějí PartCraft na Windows, macOS a Linuxu, na tabletech a telefonech, pokud jsou dostupné WebGL a WebAssembly. Viz [Prohlížeče a počítače](common:browsers).
