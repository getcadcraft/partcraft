---
title: Verige toleranc
summary: Izberite verigo ploskev skozi dele sestava in preverite, kako se lahko reža na njenem koncu spreminja, v najslabšem primeru in po RSS, z dimenzijami, ki najbolj vplivajo, na prvem mestu.
keywords: veriga toleranc, stackup, analiza toleranc, dimenzijska veriga, zanka, reža, zračnost, najslabši primer, rss, koren vsote kvadratov, statistično toleriranje, prispevki, občutljivost, gd&t, splošna toleranca, iso 2768
from: cbdb3159
---

**Veriga toleranc** sešteje dimenzije vzdolž verige skozi več delov, da vidi, koliko se lahko rezultat — običajno reža — spremeni, ko je vsak del izdelan kjerkoli znotraj svojih toleranc.

## Izberite verigo

1. Odprite sestav in izberite {{ui:Veriga toleranc}} v skupini Sestav. Nad pogledom se odpre kartica.
2. Izberite, vzdolž česa je veriga merjena: X, Y ali Z sestava, ali {{ui:Normala prve ploskve}}.
3. Pritisnite {{ui:Izberi verigo}} in kliknite ploskve, skozi katere veriga teče, **po vrsti**: začnite na eni strani reže, pojdite skozi dele in končajte na drugi strani reže.
4. Pritisnite {{ui:Končano}} ali Enter. {{key:Backspace}} vzame zadnji klik nazaj; {{key:Esc}} prekliče.

Dva klika na isti del naredita dimenzijo tega dela (njegovo razdaljo vzdolž verige). Klik na drug del naredi **stik** med njima, tam kjer se deli stikajo; nima tolerance, razen če jo vpišete. Členi se prištevajo ali odštevajo glede na smer verige in zaprejo zanko: nazivna reža je to, kar kaže model.

Lahko tudi ročno {{ui:Dodaj člen}} in vpišete njegovo nazivno vrednost, toleranco ter ali se prišteva (+) ali odšteva (−).

## Določite toleranco vsakega člena

Vsak člen ima **zgornji** in **spodnji** odklon (na primer +0.1 in −0.05). **Toleranca iz** ju vpiše iz dela:

- **Splošna toleranca**: polje Toleranca v glavi risbe dela (glejte [Risba v PDF](topic:drawing-pdf)), ko bere ±0.1, +0.2/-0.1 ali ISO 2768-f, -m, -c ali -v (ISO 2768-1 linearne tolerance, glede na velikost člena). Splošna toleranca dela se uporabi takoj, ko je veriga izbrana.
- **GD&T**: vsak okvir kontrole oblike na risbi dela. Območja položaja, profila in tekaja dajo ± polovico tolerance. Tolerance orientacije ali oblike običajno ležijo znotraj tolerance mere, ki je že tam: dodajte jo samo tam, kjer se veriga stika z nadzorovano površino. Z Ⓜ ali Ⓛ se območje vzame pri navedeni velikosti; bonus tolerance se ne šteje.
- **Vpisana**: katerakoli števila, ki jih vpišete.

## Preberite rezultate

- **Reža, nazivna** in, ko so tolerance neenake, **Reža, povprečna** — +0.2/−0 in +0/−0.1 premakneta sredino območja.
- **Najslabši primer**: vsaka tolerance na svoji meji hkrati. Reža nikoli ne more biti zunaj tega.
- **RSS** (koren vsote kvadratov): vsaka tolerance se vzame kot tri standardne odklone normalne porazdelitve in se sešteje kot kvadratni koren vsote njihovih kvadratov. Večina sestavov je znotraj najslabšega primera; to je običajna ocena za dele, izdelane v seriji.
- Vpišite **Reža vsaj** in **Reža največ**, da vidite, ali najslabši primer vedno ostane znotraj, in koliko sestavov na milijon RSS pričakuje zunaj.
- Stolpec **#** razvrsti člene po njihovem **deležu** v RSS: najprej zožite prve, da dosežete največjo razliko.

{{ui:Shrani CSV}} zapiše člene, njihove deleže in rezultate. Verige so shranjene v datoteki sestava, vsaka sprememba pa je en korak za {{key:Mod+Z}}.

:::note
Veriga toleranc teče v eno smer. Ne sledi kotom ali zavojem vzdolž verige in ne prebere tolerance velikosti iz skic: podajte jih kot vpisane tolerance ali prek glave risbe.
:::
