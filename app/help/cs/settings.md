---
title: Nastavení PartCraft
summary: Zvolte, které tlačítko myši otáčí zobrazení, nastavte, aby tah na touchpadu otáčel a posouval díl, zapněte nebo vypněte automatické vazby při skicování a nastavte počet vláken, které používají řešiče simulace.
keywords: nastavení, předvolby, možnosti, myš, prostřední tlačítko, tlačítko kolečka, orbit, otočit, otáčení, touchpad, rolování, tah, přiblížení, vazby, omezení, automatické vazby, přichycení, koincidence, vlákna, vlákna řešiče, jádra, procesory, vícevláknové, rychlejší řešení, paralelní
from: 759edcaf
---

Otevřete {{ui:Nastavení}} ozubeným kolečkem v liště aplikace nebo klávesou {{key:Mod+,}}. První karta, {{ui:PartCraft}}, obsahuje nastavení, která patří této aplikaci; {{ui:Obecné}} obsahuje ta, která sdílí každá aplikace CadCraft (motiv, panel nástrojů, panely). Nastavení PartCraft existují jen v aplikaci: měníte je zde a tento prohlížeč si je pamatuje. {{ui:Obnovit nastavení PartCraft}} vrátí všechno na začátek.

## Otáčení zobrazení

- **Levé tlačítko** (výchozí): tažením levým tlačítkem otočíte díl; tažením pravým nebo prostředním tlačítkem posouváte.
- **Prostřední tlačítko**: stiskněte kolečko a tažením otočte díl; podržte {{key:Shift}} (nebo {{key:Ctrl}}, nebo ⌘) s prostředním tlačítkem, nebo tahejte pravým tlačítkem, abyste posouvali. Levé tlačítko jen vybírá plochy, hrany a roviny, takže kliknutí, které se mírně pohne, nikdy díl neotočí. Mnoho CAD programů pracuje tímto způsobem.

Kolečko v obou případech přibližuje k ukazateli. Ve skice pravé a prostřední tlačítko posouvají jako dříve.

## Rolování: kolečko myši nebo touchpad

- **Rozpoznat automaticky** (výchozí): PartCraft sleduje rolování. Boční nebo jemné rolování, jaké posílá touchpad, otáčí díl; celé zarážky kolečka přibližují.
- **Kolečko myši**: rolování vždy přibližuje k ukazateli.
- **Touchpad**: tažením dvěma prsty díl otočíte, podržte {{key:Shift}} a táhněte pro posun, sevřením prstů přibližujete. Ve skice tah dvěma prsty posouvá skicu.

Sevření prstů přibližuje v každé volbě. Pokud "Rozpoznat automaticky" pro vaši myš nebo touchpad uhodne špatně, vyberte tu, kterou máte. Více v [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).

## Skicování: přidávání vazeb během kreslení

**Přidávat vazby při kreslení** (výchozí zapnuto): klik, který přichytí k bodu, udělá nový bod s ním shodný, klik na křivku umístí bod na tuto křivku a úsečka nakreslená téměř vodorovně nebo svisle se stane vodorovnou nebo svislou. Viz [Vazby a kóty](topic:relations-dimensions).

Vypněte ji, když chcete umístit geometrii blízko jiné geometrie, aniž byste ji k ní připojili. Ukazatel se stále přichytává k bodům a křivkám, ale nic se nespojí: úsečky nakreslené v řetězu nesdílejí své konce, takže je tažení může roztrhnout. Požadované vazby přidejte sami z pravého panelu. Uzavřený profil se stále vytáhne, když se jeho konce setkají.

:::note
Nastavení mění jen to, co přidává nové kreslení. Vazby, které už jsou ve skice, zůstanou, a nástroj Zaoblení stále vytvoří svůj tečný oblouk a poloměr.
:::

## Skicování: kótování během kreslení

**Kótovat během kreslení** (výchozí zapnuto): zatímco kreslíte úsečku, obdélník, kružnici nebo oblouk, zadání čísla vyplní pole velikosti vedle ukazatele ({{key:Tab}} přejde na další pole) a {{key:Enter}} nakreslí tvar v této velikosti, přičemž pro každou zadanou velikost vznikne řídicí kóta. Vypnuto: zadání čísla při kreslení nedělá nic a tvary se kreslí jen kliknutím. Viz [Zadání velikosti při kreslení](topic:sketch-basics#type-the-size-as-you-draw).

## Indikátor v rohu

Co se zobrazí v rohu 3D zobrazení: **Kostka pohledu** (výchozí; vpravo nahoře — klikněte na plochu, hranu nebo roh a podívejte se odtud, tažením ji otáčejte, tažením jejího kompasového kruhu otočíte model), **Ikona os** (malá značka X, Y, Z vlevo dole, která se otáčí s pohledem: X červená, Y zelená, Z modrá), nebo **Žádný**. Ani jedno se nezobrazí při skicování nebo na listu výkresu. Viz [Kostka pohledu](topic:view-cube).

## Vlákna řešiče

Kolik vláken smějí řešiče simulace použít. **Automaticky** (výchozí) použije o jedno méně, než je logických procesorů počítače (nejvýše 16), aby stránka zůstala odezvová, dokud studie řeší; nebo vyberte číslo. Velké voxelové studie, vzpěr, napětí v čase a proudění se řeší rychleji na několika vláknech (asi 2× na 4 vláknech pro 80,000 krychlí podle našich měření, více na nečinném počítači); modely s méně než zhruba 20,000 neznámými zůstávají na jednom vláknu, protože spuštění vláken stojí víc, než ušetří. Řešení na vláknech dá stejný výsledek jako na jednom vláknu (až na zaokrouhlení: součty se přičítají v jiném pořadí). Výsledky každé studie uvádějí **N vláken**, nebo **1 vlákno** s důvodem pod **Řešič**.

Vlákna vyžadují, aby stránka byla **izolovaná napříč původy** (prohlížeč pak dovolí workerům sdílet paměť). Laboratorní stránka to splňuje; kde ne, nastavení to řekne ("Tato stránka není izolovaná napříč původy, takže řešiče běží na jednom vláknu bez ohledu na zde zvolenou hodnotu.") a každé řešení používá jedno vlákno. Vše ostatní funguje stejně a výsledky jsou stejné.

Studie laminárního proudění využívají vlákna také (asi 2.5× na 4 vláknech pro 54,000 buněk kapaliny, stejný výsledek až do poslední číslice). Řešič kvadratických čtyřstěnů a přenos tepla běží na jednom vláknu: rozdělení na vlákna se na našem zkušebním počítači ukázalo pomalejší (jejich řešiče omezuje rychlost paměti a krok, který nelze rozdělit).

### Na vlastním webovém serveru

Pokud spouštíte PartCraft z vlastního serveru, funguje tak, jak je servírován. Pro vlákna řešiče nechte server posílat dvě hlavičky se stránkou PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Na Apache, v souboru `.htaccess` složky (vyžaduje mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Na nginx, v bloku `location`, který servíruje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Stránku znovu načtěte: Nastavení › Vlákna řešiče pak nabídne **Automaticky** s počtem vašeho počítače. Druhá hlavička způsobí, že prohlížeč odmítne cokoli, co stránka načte z jiného webu, který to nepovoluje; pro PartCraft samotný je to v pořádku (načítá vše ze své vlastní složky).
