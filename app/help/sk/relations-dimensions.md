---
title: Úplné určenie náčrtu väzbami a kótami
summary: Pridajte väzby z pravého panela a kóty nástrojom Kóta, čítajte farby nedostatočne, úplne a preurčene určeného náčrtu a opravte náčrt, ktorý je preurčený.
keywords: väzby, obmedzenia, kóty, inteligentná kóta, úplne určené, nedostatočne určené, preurčené, stupne voľnosti, splývajúce, vodorovné, zvislé, rovnobežné, kolmé, dotyčnica, rovnaké, sústredné, stred, zafixovať, konflikt, nadbytočné
from: e76d047a
---

Náčrt je **úplne určený**, keď sú každý bod a každý rozmer pevne určené väzbami a kótami. Úplne určený náčrt sa mení len vtedy, keď zmeníte číslo, takže sa súčiastka pri neskoršej úprave správa predvídateľne. PartCraft vás nenúti náčrt úplne určiť, ale vždy ukazuje, ako ďaleko ste.

## Čítanie stavu náčrtu

Stav sa zobrazuje na troch miestach: čip v ľavom hornom rohu zobrazenia, správa v hornej časti pravého panela a značka v histórii.

| Stav | Čip | Farba geometrie | Význam |
|---|---|---|---|
| Nedostatočne určené | "Nedostatočne určené · 3 stupne voľnosti" | Modrá | Niektorá geometria sa ešte môže hýbať. Potiahnite modrú geometriu a uvidíte, ktorým smerom |
| Úplne určené | "Úplne určené" | Tmavá (čierna na Papier, svetlá na Model) | Každý bod a rozmer je pevne určený |
| Preurčené | "Preurčené" | Červená na zapojených väzbách | Niektoré väzby si odporujú alebo je jedna už implikovaná inými |

Konštrukčná geometria je bez ohľadu na stav sivá a prerušovaná. Vybrané položky sú oranžové. "Stupeň voľnosti" je jeden spôsob, akým sa niečo ešte môže pohnúť: voľný bod ich má dva (doľava–doprava a nahor–nadol), voľná kružnica tri (jej stred a polomer).

Legenda pod správou v pravom paneli farby opakuje.

## Pridanie kóty

1. Stlačte {{key:D}} alebo zvoľte {{ui:Kóta}}.
2. Kliknite na to, čo chcete zmerať:
   - **jedna čiara**: jej dĺžka;
   - **jedna kružnica**: jej priemer; **jeden oblúk**: jeho polomer;
   - **dva body** (koncový bod, stred, voľný bod alebo počiatok): vzdialenosť medzi nimi;
   - **bod a čiara**: vzdialenosť od bodu k čiare;
   - **dve rovnobežné čiary**: vzdialenosť medzi nimi; **dve čiary v uhle**: uhol medzi nimi.
3. Po prvej položke stavový riadok hovorí "Kliknite na druhú položku alebo na miesto, kam kóta patrí." Kliknite na druhú položku alebo do prázdneho priestoru, kde chcete číslo.
4. Otvorí sa políčko s číslom a aktuálnou hodnotou. Zadajte veľkosť a stlačte {{key:Enter}}. {{key:Esc}} ponechá zmeranú hodnotu.

**Miesto, kam umiestnite číslo, určí druh** pri šikmej čiare alebo dvoch bodoch: umiestnite ho nad alebo pod čiaru, aby ste dostali vodorovnú vzdialenosť, doľava alebo doprava, aby ste dostali zvislú vzdialenosť, a inde, aby ste dostali skutočnú (zarovnanú) vzdialenosť.

Políčko prijíma obyčajné čísla v milimetroch alebo stupňoch, napríklad `25`, `12.5` alebo `1e3`. Úvodné `⌀`, `Ø` alebo `R` a koncové `mm` alebo `°` sa ignorujú. Uhly sú od 0 do 180 stupňov. Aritmetika, napríklad `20+5`, sa neprijíma; ak chcete veľkosť prepojiť s premennou alebo vzorcom, začnite ju znakom `=`.

Kótu neskôr zmeníte dvojitým kliknutím na jej číslo v náčrte alebo zvolením **Upraviť** vedľa nej v zozname v pravom paneli.

:::tip
Geometriu môžete najprv vybrať (nástroj Vybrať) a v pravom paneli zvoliť tlačidlo kóty: {{ui:Vzdialenosť}}, {{ui:Vodorovná vzdialenosť}}, {{ui:Zvislá vzdialenosť}}, {{ui:Polomer}}, {{ui:Priemer}} alebo {{ui:Uhol}}. Zobrazia sa len tie, ktoré sa hodia k výberu. Takto dáte kružnici polomer namiesto priemeru.
:::

## Pridanie väzby

Väzby sa pridávajú z pravého panela, nie nástrojom.

1. Stlačte {{key:S}} pre Vybrať.
2. Kliknite na jednu položku, potom {{key:Shift}}+kliknutie na druhú, ak väzba potrebuje dve. Počiatok sa dá tiež vybrať.
3. Pravý panel hovorí "Vybraté: čiara l3, bod p1" a zobrazí tlačidlo pre každú vhodnú väzbu, napríklad {{ui:∥ Rovnobežné}} alebo {{ui:• Splývajúce}}.
4. Zvoľte tlačidlo. Náčrt sa okamžite vyrieši.

Ak sa žiadna väzba nehodí, panel hovorí: "Žiadna väzba sa nehodí na tento výber. Vyberte jednu alebo dve položky (Shift+kliknutie pridá)."

Úplný zoznam väzieb, čo každá potrebuje a čo robí, je v [Väzby a kóty náčrtu](topic:sketch-relations).

Väzby sa v náčrte zobrazujú ako malé symboly vedľa geometrie (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Body splývania sú skryté, pokiaľ nie je geometria vybraná alebo väzba nemá problém. Kliknutím na symbol vyberiete väzbu.

## Príklad: profil konzoly tvaru L

1. Kreslite na **Predná rovina**. Nástrojom Úsečka začnite na počiatku a kliknite na šesť rohov tvaru L, pričom skončite opäť na počiatku. Reťazec sa ukončí sám, keď kliknete na prvý bod.
2. Čiary nakreslené takmer vodorovne alebo zvisle už majú väzby H a V, okrem poslednej: čiara, ktorá končí na existujúcom bode, žiadnu automatickú väzbu nedostane. Stlačte {{key:S}}, kliknite na poslednú čiaru a zvoľte {{ui:V Zvislé}} v pravom paneli. Čip hovorí "Nedostatočne určené · 4 stupne voľnosti".
3. Stlačte {{key:D}}. Kliknite na spodnú čiaru, kliknite pod ňu, zadajte `80` a stlačte {{key:Enter}}.
4. Kliknite na ľavú čiaru, kliknite vľavo od nej, zadajte `60` a stlačte {{key:Enter}}.
5. Rovnakým spôsobom okótujte hornú krátku čiaru `20` a vnútornú zvislú čiaru `45`.
6. Čip teraz hovorí **Úplne určené** a celý tvar L sa zmení na tmavú farbu.

## Oprava preurčeného náčrtu

Keď nová väzba alebo kóta odporuje ostatným, PartCraft nič nepresúva. Geometria zostane presne taká, aká bola, zapojené väzby sa sfarbia načerveno a stavový riadok ich pomenuje:

- "Preurčené: Vodorovné, Vzdialenosť 40 sa nedajú splniť naraz. Vráťte späť alebo zmažte jednu z nich." Väzby si odporujú.
- "Preurčené: Rovnobežné je už implikované. Zmažte ho." Väzba nič nepridáva: ostatné ju už vynucujú. (Napríklad strany obdĺžnika sú už rovnobežné.)

Na opravu:

1. Stlačte {{key:Mod+Z}}, čím vrátite späť poslednú zmenu, alebo
2. nájdite červenú položku v zozname **Väzby a kóty** v pravom paneli (skupina, ktorá ju obsahuje, je otvorená a červená) a vedľa nej zvoľte **Zmazať**. Môžete tiež kliknúť na jej symbol alebo číslo v náčrte a stlačiť {{key:Delete}}.

:::note
V tejto verzii nie sú "riadené" (referenčné) kóty. Kóta, ktorá by len hlásila rozmer, ktorý už ostatné väzby určujú, sa považuje za preurčenú. Rozmery čítajte radšej v paneli: vyberte čiaru a pozrite sa na tlačidlá kóty, alebo po vytiahnutí skontrolujte údaje o súčiastke.
:::

Preurčený náčrt so skutočným konfliktom spôsobí zlyhanie prvku, ktorý ho používa ("Preurčené: 1 väzba sa nedá splniť naraz."), a história ho označí **⚠ chyba**. Náčrt, ktorý je len nadbytočný, sa ešte zostaví, ale s **⚠ upozornením**.

## Potiahnutie na zistenie voľných prvkov

Vo Vybrať potiahnite ľubovoľný modrý bod alebo čiaru. Riešič ju posunie čo najmenej, pričom zachová každú väzbu. Ak by potiahnutie porušilo väzbu, geometria sa vráti späť. Je to najrýchlejší spôsob, ako zistiť, ktorá kóta ešte chýba.

## Zoznam väzieb

Keď nič nie je vybrané, pravý panel vypisuje **Väzby a kóty**. Každý riadok obsahuje:

- **Upraviť** (len kóty): otvorí políčko s číslom;
- **Vybrať**: vyberie ho v náčrte;
- **Zmazať**: odstráni ho.

Väzby jedného druhu, ktoré sa objavujú viackrát, zdieľajú jeden riadok, napríklad "Splývajúce × 5" pre obdĺžnik spojený s počiatkom. Kliknutím na riadok ho otvoríte: každá väzba je uvedená podľa toho, čo spája ("bod p2, bod p4"), s vlastným **Vybrať** a **Zmazať**. Samotný riadok má:

- **Vybrať**: vyberie všetky v náčrte;
- **Zmazať všetko**: odstráni všetky naraz ({{key:Mod+Z}} ich vráti späť).

Skupina, ktorá obsahuje preurčenú väzbu, sa otvorí sama, s názvom načerveno. Kóty sú vždy vypísané po jednej na riadok, s ich hodnotami.

Keď je vybraná geometria, zoznam zobrazuje len **Väzby na výbere**.
