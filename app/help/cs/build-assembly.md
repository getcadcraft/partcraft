---
title: Sestavení sestavy pomocí vazeb
summary: Začněte sestavu z dílu, vložte kopie a další soubory dílů, spojte je pevnými, rotačními, posuvnými, válcovými, rovinnými, kulovými a čepovými vazbami v drážce na rovných plochách, střeďte vazby na osách, upravte díl na místě a uložte sestavu.
keywords: sestava, spojení, vazba, smyčka, uzavřená smyčka, mechanismus, čtyřkloub, klika, pevná, rotační, posuvná, válcová, rovinná, kulová, kulový kloub, sférická, čep v drážce, vložit komponentu, uzemněný, soustředná, koincidentní, upravit díl, v kontextu, partcraft-asm
from: a53bbfef
---

Sestava skládá díly dohromady. V PartCraftu **vazby** umisťují díly: každá vazba sedí na rovné ploše každého ze dvou dílů a přiloží je plochu na plochu. Rotační vazba umožní jednomu dílu otáčet se, posuvná jej nechá posouvat, pevná jej drží.

## Začátek sestavy

1. Vytvořte díl s tělesem. Prázdný díl nemůže jít do sestavy: „Nejdřív vytvořte těleso, pak jej vložte do sestavy."
2. Zvolte {{ui:Sestava}} na panelu nástrojů.

Stavový řádek hlásí „Sestava spuštěna s Part1 jako pevným dílem. Vložte další díly (Přidat kopii, Vložit nebo Upravit › Duplikovat), pak je spojte vazbami." Levý panel nyní vypisuje **Díly** a **Vazby** a panel nástrojů zobrazuje nástroje sestavy. Nástroje skicy a prvků se skryjí.

Prvním dílem je **pevný díl**: nikdy se nehýbe a vše ostatní se umisťuje vzhledem k němu.

## Vložení dílů

- {{ui:Přidat kopii}} vloží další kopii vybraného dílu (nebo posledního). Kopie sdílejí jeden díl: upravíte-li jej, každá kopie se změní.
- {{ui:Duplikovat}} ({{key:Mod+D}}) ve skupině Upravit udělá totéž pro vybraný díl. {{key:Mod+C}} a {{key:Mod+V}} zkopírují díl a vloží jej vedle ostatních, v této sestavě nebo v jiné. {{key:Mod+Shift+V}} vloží na stejné místo. Viz [Kopírování, vložení a duplikace](topic:copy-paste).
- {{ui:Vložit}} vloží díl ze souboru `.partcraft.json` na vašem počítači. Díl se zkopíruje do sestavy.

Nové díly se objeví 20 mm vpravo od všeho, co tam už je, a zůstanou tam, dokud je vazba neumístí. Díl bez vazby lze také přesouvat ručně: zadanými hodnotami nebo šipkami, které přetáhnete (viz [Seznam dílů, rozložené pohledy a pohyb dílů](topic:assembly-bom-explode)).

## Spojení dvou dílů

1. Zvolte {{ui:Vazba}}, nebo stiskněte {{key:J}}. Pravý panel říká **Nová vazba**.
2. Klikněte na rovnou plochu prvního dílu. Zvýrazní se.
3. Klikněte na rovnou plochu druhého dílu.

Druhý díl skočí tak, aby jeho plocha ležela na ploše prvního dílu a byla k ní přivrácena. Vazba se objeví pod **Vazby**, například „Revolute1", a pravý panel zobrazí její nastavení.

- Pokud obě plochy vznikly rotacemi, vazba začíná jako **rotační**; jinak jako **pevná**. Změňte ji později.
- Zakřivené plochy nelze vybrat: „Tato plocha je zakřivená. Vyberte rovnou plochu (pro otáčení kolem díry nebo osy rotace ji zvolte u vazby až potom)."
- {{key:Esc}} zruší začatou vazbu (nebo klikněte na díl v seznamu vlevo).

### Nastavení vazby

| Nastavení | Co dělá |
|---|---|
| **Typ** | Jedna z vazeb v tabulce níže |
| **Úhel (°)** | Otočí druhý díl kolem osy vazby (kolmo na plochy) |
| **Odsazení (mm)** | Posune druhý díl podél osy, pryč od plochy (záporné hodnoty tlačí dovnitř) |
| **Podél X**, **Podél Y**, **Náklon kolem X**, **Náklon kolem Y**, **Podél drážky**, **Směr drážky** | Ostatní hodnoty, zobrazené u vazeb, které je používají |
| **Střed na** (pro každou stranu) | Kde osa vazby protíná plochu: „Vlastní počátek plochy", osa rotace („Osa Revolve1"), nebo osa jedné díry („Hole1, díra 2") |

Každou hodnotu, kterou vazba umožňuje měnit, má posuvník pod polem. Ostatní se nastavují jednou.

| Vazba | Co se pohybuje | Nastaví se jednou |
|---|---|---|
| **Pevná** | nic | Úhel, Odsazení |
| **Rotační** | Úhel (závěs) | Odsazení |
| **Posuvná** | Odsazení (šuplík) | Úhel |
| **Válcová** | Úhel a Odsazení (hřídel v kluzném ložisku) | |
| **Rovinná** | Podél X, Podél Y přes plochu a Úhel (díl klouzající po stole) | |
| **Kulová** | Úhel (otáčení) a Náklon kolem X a Y, kolem středu vazby (kulový kloub) | |
| **Čep v drážce** | Podél drážky a Úhel (čep v přímé drážce) | Směr drážky: úhel drážky od X plochy |

X a Y plochy jsou ty první plochy prvního dílu. Střed vazby se nastavuje pomocí **Střed na**.

„Vlastní počátek plochy" je průmět počátku dílu na plochu, což často není místo, kde chcete díly zarovnat. U kulatých dílů a čepů nastavte **Střed na** na osu rotace nebo díry na obou stranách: osy pak splynou, jako soustředné spojení.

### Příklad: dvě příruby přišroubované plochu na plochu

1. Otevřete díl příruby (rotace s kruhovým vzorem děr) a zvolte {{ui:Sestava}}.
2. Zvolte {{ui:Přidat kopii}}.
3. Stiskněte {{key:J}}, klikněte na rovnou plochu disku první příruby (plochu, ze které začínají šroubové díry), pak na stejnou plochu druhé příruby. Plochy vznikly rotací, takže vazba je rotační.
4. Nastavte **Střed na** na „Osa Revolve1" pro obě strany. Příruby nyní sdílejí osu.
5. Zadejte `22.5` do **Úhel (°)**, abyste zarovnali šroubové díry, nebo přetáhněte posuvník.

## Uzavřené smyčky: mechanismy

Díly spojené do kruhu (čtyřkloubový mechanismus, klika a posuvník, rám vyztužený z obou stran) tvoří **smyčku**. PartCraft řeší každou smyčku tak, aby se uzavřela: vazby na ní nabývají hodnot, které kruh spojí, a pohybují se co nejméně od místa, kde byly.

- **Nastavte nebo přetáhněte** hodnotu vazby na smyčce a zbytek smyčky ji sleduje. U čtyřkloubového mechanismu přetáhněte **Úhel** kliky a spojka i kyvadlo se pohnou s ní. Hodnota, kterou nastavíte, se zachová; ostatní se z ní dopočítají.
- V seznamu je vazba na smyčce, která se ještě může pohybovat, **modrá**: lze nastavit další hodnotu. Smyčka, která se nemůže pohybovat (vyztužený rám), zůstane černá. Smyčka, kterou nelze uzavřít, je **červená**.
- Pole **Díl** zobrazuje **Smyčky**: kolik je uzavřených a kolik hodnot se může ještě pohybovat, například „1 uzavřená; 1 hodnotu lze ještě pohnout".
- {{ui:Zkontrolovat pohyb na kolize}} projede vazbu na smyčce se smyčkou, která ji sleduje, krok za krokem (viz [Kontrola sestavy na kolize a pohyb](topic:check-assembly)).

Rovinný mechanismus složený z plochých tyčí musí souhlasit v hloubce: dva díly spojené plochu na plochu na obou stranách kruhu potřebují stejnou výšku sestavy oběma směry. Použijte **Odsazení** vazby, abyste díl zvedli tam, kde se výška nesčítá. Jinak se smyčka neuzavře.

## Práce s díly

Klikněte na díl v pohledu nebo v seznamu, abyste jej vybrali. Pravý panel zobrazuje jeho název, počet kopií, objem, jeho vazby a to, zda je pevný, nastavený svými vazbami, nebo „Nespojeno: zůstává, kde byl umístěn". Tlačítka:

- {{ui:Upravit tento díl}} (nebo {{ui:Upravit díl}} na panelu nástrojů, nebo dvojklik na díl v seznamu): otevře díl k úpravám;
- {{ui:Vložit kopii}};
- {{ui:Nastavit jako pevný díl}};
- {{ui:Odebrat}}: odstraní také jeho vazby, po potvrzení.

Sestava musí obsahovat aspoň jeden díl: „Sestava musí obsahovat aspoň jeden díl. Místo toho ji zavřete."

### Úprava dílu na místě

1. Vyberte díl a zvolte {{ui:Upravit díl}}. Díl se otevře se svou historií; nadpis říká „Bracket (v sestavě Bracket)".
2. Upravte jej jako každý jiný díl.
3. Zvolte {{ui:Zpět}} na panelu nástrojů. Sestava se aktualizuje: každá kopie toho dílu se změní a vazby na plochách vytvořených hranami skic se řídí změnou.

Vrácení změny je jeden krok v seznamu zpět sestavy.

## Zpět, uložení a zavření

- Sestava má vlastní seznam zpět: {{key:Mod+Z}} a {{key:Mod+Y}} působí na vazby, vložení a nastavení.
- {{ui:Uložit}} nebo {{key:Mod+S}} stáhne `<název sestavy>.partcraft-asm.json` se všemi díly uvnitř. Otevřete jej později pomocí {{ui:Otevřít}}.
- {{ui:Zavřít}} zavře sestavu a vrátí vás na díl, ze kterého jste začali. Není-li sestava uložena, zeptá se: {{ui:Zrušit}}, {{ui:Zahodit sestavu}} nebo {{ui:Nejdřív uložit}}.
- Přejmenování sestavy: klikněte do prázdného prostoru, aby nic nebylo vybráno, a změňte **Název** na pravém panelu.

## Velké sestavy

Sestava může obsahovat tisíce kopií několika dílů. Kopie jednoho dílu se kreslí společně. Vazba, kterou otáčíte, umisťuje jen díly za sebou a seznam dílů zobrazuje první řádky s tlačítkem „Zobrazit více" pod nimi (vybraný díl je vždy uveden).

- Při otáčení nebo přibližování pohledu se sestava s více než asi 300 000 trojúhelníky kreslí jako jeden kvádr na díl a teprve chvíli po zastavení celá.
- {{ui:Pohledy}} › {{ui:Odlehčené zobrazení}} ponechá kvádry zapnuté stále. Výběr dílů a vazeb stále používá skutečné díly.
- Jak rychle se otáčí, závisí také na grafické kartě. Čísla, která PartCraft změřil, jsou v poznámkách k vydání u počítače, ze kterého pocházejí.

## Problémy s vazbami

- Díl, který žádná vazba nedosáhne, je v seznamu uveden jako **volný** a panel říká „Bracket2 není spojen s pevným dílem, takže zůstává, kde byl umístěn."
- Smyčka, kterou nelze uzavřít (délky nedosáhnou, mez zastaví vazbu, plochy nesouhlasí v hloubce): „Revolute3 uzavírá smyčku, kterou nelze uzavřít: je mimo o 2.000 mm. Zkontrolujte plochy, odsazení a meze vazeb ve smyčce." Její vazby zčervenají.
- Pokud plocha nebo osa, kterou vazba používá, po úpravě dílu zmizí: „Plocha, kterou tato vazba používá, v dílu Bracket už není." Odeberte vazbu a vytvořte ji znovu.

Dále: [Kontrola sestavy na kolize a pohyb](topic:check-assembly).
