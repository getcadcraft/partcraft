---
title: Reťazce tolerancií
summary: Vyberte reťaz plôch cez súčiastky zostavy a zistite, ako veľmi sa môže meniť medzera na jej konci, pri najhoršom prípade a RSS, pričom najdôležitejšie rozmery sú zoradené na prvom mieste.
keywords: reťazec tolerancií, reťazec, analýza tolerancií, tolerančný reťaz, rozmerový reťazec, slučka, medzera, vôľa, najhorší prípad, rss, odmocnina zo súčtu štvorcov, štatistické tolerovanie, príspevky, citlivosť, gd&t, všeobecná tolerancia, iso 2768
from: cbdb3159
---

**Reťazec tolerancií** sčítava rozmery pozdĺž reťaze cez viac súčiastok, aby ukázal, ako veľmi sa môže — zvyčajne medzera — meniť, keď je každá súčiastka vyrobená kdekoľvek v rámci svojich tolerancií.

## Výber reťaze

1. Otvorte zostavu a zvoľte {{ui:Reťazec}} v skupine Zostava. Nad pohľadom sa otvorí karta.
2. Zvoľte, pozdĺž čoho sa reťaz meria: X, Y alebo Z zostavy, alebo {{ui:Normála prvej plochy}}.
3. Stlačte {{ui:Vybrať reťazec}} a kliknite na plochy, ktorými reťaz prechádza, **v poradí**: začnite na jednej strane medzery, prejdite cez súčiastky a skončite na druhej strane medzery.
4. Stlačte {{ui:Hotovo}} alebo Enter. Backspace vráti posledné kliknutie späť; Esc zruší.

Dve kliknutia na tú istú súčiastku vytvoria rozmer tejto súčiastky (jej vzdialenosť pozdĺž reťaze). Kliknutie na inú súčiastku vytvorí **rozhranie** medzi nimi, kde sa súčiastky stýkajú; nemá toleranciu, pokiaľ nezadáte jednu. Články sa pripočítavajú alebo odpočítavajú podľa smeru reťaze a uzavrú slučku: menovitá medzera je to, čo model ukazuje.

Môžete tiež {{ui:Pridať článok}} ručne a zadať jeho menovitú hodnotu, toleranciu a to, či pridáva (+) alebo odpočítava (−).

## Priraďte každému článku toleranciu

Každý článok má **hornú** a **dolnú** odchýlku (napríklad +0.1 a −0.05). **Tolerancia z** ich vyplní zo súčiastky:

- **Všeobecná tolerancia**: pole Tolerancia v popisovom poli súčiastky (pozri [Výkres do PDF](topic:drawing-pdf)), keď hodnota je ±0.1, +0.2/-0.1 alebo ISO 2768-f, -m, -c alebo -v (lineárne tolerancie ISO 2768-1 podľa veľkosti článku). Všeobecná tolerancia súčiastky sa použije hneď, keď sa reťaz vyberie.
- **GD&T**: ľubovoľný rámček riadenia tvaru na výkrese súčiastky. Zóny polohy, profilu a obehu dávajú ± polovicu tolerancie. Tolerancia orientácie alebo tvaru leží zvyčajne vo vnútri už existujúcej tolerancie rozmeru: pridajte ju iba tam, kde reťaz zasahuje riadenú plochu. S Ⓜ alebo Ⓛ sa zóna berie pri jej uvedenej veľkosti; bonusová tolerancia sa nepočíta.
- **Zadané**: ľubovoľné čísla, ktoré napíšete.

## Čítanie výsledkov

- **Medzera, menovitá** a, keď sú tolerancie nerovnaké, **Medzera, stredná** — +0.2/−0 a +0/−0.1 posúvajú stred rozsahu.
- **Najhorší prípad**: každá tolerancia na svojom limite naraz. Medzera nikdy nemôže byť mimo tohto rozsahu.
- **RSS** (odmocnina zo súčtu štvorcov): každá tolerancia sa berie ako tri štandardné odchýlky normálneho rozptylu a sčíta sa ako odmocnina zo súčtu ich štvorcov. Väčšina zostáv leží hlboko vo vnútri najhoršieho prípadu; toto je obvyklý odhad pre súčiastky vyrábané vo veľkom.
- Zadajte **Medzera aspoň** a **Medzera najviac**, aby ste videli, či najhorší prípad vždy zostáva vnútri, a koľko zostáv z milióna podľa RSS očakávame mimo.
- Stĺpec **#** zoradí články podľa ich **podielu** na RSS: sprísnite prvé, aby ste dosiahli najväčší rozdiel.

{{ui:Uložiť CSV}} zapíše články, ich podiely a výsledky. Reťazce tolerancií sa uložia do súboru zostavy a každá zmena je jedným krokom vrátenia ({{key:Mod+Z}}).

:::note
Reťazec tolerancií je jednosmerný. Nesleduje uhly ani zákruty pozdĺž reťaze a nečíta tolerancie rozmerov zo náčrtov: zadajte ich ako ručne zadané tolerancie alebo cez popisové pole.
:::
