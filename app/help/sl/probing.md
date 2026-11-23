---
title: Tipanje: poiščite del in nastavite ničelno točko obdelovanca
summary: Dotaknite se zgornje ploskve, strani, luknje ali čepa s tipalom in naj krmilnik premakne ničelno točko obdelovanca tja, kjer je del dejansko, ali samo izmeri. Kaj zmore vsak krmilnik in kaj ni bilo dokazano.
keywords: tipalo, tipanje, tipalo za dotik, dotik za nastavitev, ničelna točka obdelovanca, g54, g31, g38.2, preskok, referenca, najdi središče, izvrtina, čep, rob, nastavi nič, izmeri, pregled, g10
from: 1f718b82
---

{{ui:Tipalo}} v Izdelavi zapiše cikel tipanja v program: tipalo se dotakne dela, krmilnik pa premakne ničelno točko obdelovanca (G54) za razliko med tem, kje je bila površina najdena, in tem, kje jo kaže model. Kasnejše operacije nato režejo tam, kjer je del dejansko.

**Nič tukaj ni bilo izvedeno na stroju.** Premiki pred dotikom so običajni premiki: tipalo se ne spremlja do samega premika tipanja. Zaženite počasi, najprej v zraku, z roko na zadržanju posmika.

## Uporaba

1. Na zavihku **Orodja** prva operacija tipanja doda **tipalo za dotik**: premer kroglice in posmik tipanja (100 mm/min, če ga ne nastavite).
2. Pritisnite {{ui:Več}} v orodni vrstici Izdelave, nato {{ui:Tipalo}} in kliknite, česar se dotakniti. Vsaka izbira je en cikel, v vrstnem redu klikov:

| Izbira | Cikel | Kaj se nastavi |
|---|---|---|
| Ravna ploskev, ki gleda v smer osi orodja | En dotik navzdol | Z |
| Ravna stranska ploskev, pravokotna na X ali Y | En dotik proti ploskvi, malo pod njenim vrhom | X ali Y |
| Luknja ali čep vzdolž osi orodja | Štirje dotiki (+X, −X, +Y, −Y) | X in Y njegovega središča |

3. **Z rezultatom**: {{ui:Nastavi ničelno točko obdelovanca}} ali {{ui:Samo meri}}.
4. **Začni tako daleč** in **Išči tako daleč čez** pove, kako daleč od pričakovane površine se začne premik tipanja in kako daleč onkraj nje sme tipalo potovati, preden krmilnik odneha. **Globina** je, kako daleč pod vrhom luknje, čepa ali stranske ploskve gre kroglica.

Operacijo tipanja postavite na začetek, pred vse, kar reže.

## Kaj zapiše vsak krmilnik

| Krmilnik | Dotik | Rezultat |
|---|---|---|
| Fanuc-style | `G31`, položaj shranjen v `#101` do `#104` | Spremenljivke ničelne točke (`#5221` do `#5223`) se premaknejo za najdeno − pričakovano. Samo meri: razlika ostane v `#110` (in `#111`). |
| LinuxCNC | `G38.2`, položaj shranjen v imenovanih parametrih | `G10 L2 P1` z novo ničelno točko. Samo meri: sporočilo `(DEBUG, …)`. |
| GRBL | `G38.2` | En dotik nastavi os z `G10 L20 P1`. GRBL nima spremenljivk, zato **ne more izračunati središča**: datoteka to pove v komentarju in ne nastavi ničesar. |

Računanje je v postprocesorju, zato ga lahko spremenite: dogodka sta `probe-move` in `probe-set` ([Postprocesorji, ki jih lahko urejate](topic:post-processors)).

## Omejitve

- Ena ničelna točka obdelovanca (G54). Samo ploskve, pravokotne na osi: brez kota, brez cikla vogala, brez zasuka obdelovanca.
- Ni naprave za nastavitev orodja, ni preverjanja zlomljenega orodja, ni merjenja mere glede na toleranco, ni poročila.
- Vreteno se za tipalo ne zažene in hladilna tekočina ostane izklopljena; nič ne preveri, ali je orodje v vretenu tipalo.
- Simulacija surovca ne izvaja poti tipanja.
- Lastno baždarjenje tipala (zamik kroglice, upogib konice, smer sprožitve) je v pristojnosti krmilnika.
