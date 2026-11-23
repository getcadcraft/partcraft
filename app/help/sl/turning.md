---
title: Struženje na stroju za struženje
summary: Planirajte, grobo in dokončno obdelajte, zarežite utor, odrežite, izdelajte navoj in izvrtajte obrnjen del iz obrisa, ki ga ustvari, ko se vrti. Orodja za struženje, posmiki na vrtljaj, postprocesorji za struženje in kaj ni bilo dokazano.
keywords: struženje, struga, stružiti, planiranje, grobo, dokončno, utor, zarezovanje, odrez, odrezovanje, navoj, rezanje navoja, G32, G33, G96, konstantna obodna hitrost, css, polmer konice, vstavna ploščica, palica, vpenjalo, premer, posmik na vrtljaj, G71, G76
from: d8cc53b0
---

Izdelava ima sedem operacij za struge. Delujejo na katerem koli delu: reže se **obris, ki ga del tvori, ko se vrti** okoli sredine surovca, zato se del, ki ni okrogel, struži na okroglo obliko, ki ga drži.

**Nič tukaj ni bilo izvedeno na stroju za struženje.** Poti preizkusi preverijo glede na geometrijo; oba postprocesorja za struženje sledita dokumentiranim kodam krmilnikov. Program najprej dokažite v simulatorju svojega krmilnika in v zraku.

## Nastavitev

Na zavihku **Nastavitev**:

- **Os orodja** je os vretena, Z stroja za struženje. Čelo dela je pri +Z; vpenjalo drži drugi konec.
- **Surovec**: izberite {{ui:Valj}}, palico. Njegov zgornji odmik je tisto, kar odstrani rez planiranja.
- **Ničelna točka obdelovanca**: središče na vrhu surovca ali na vrhu modela postavi Z0 na čelno ploskev, običajno mesto.
- **Krmilnik**: {{ui:Stružni postprocesor v slogu Fanuc (.nc)}} ali LinuxCNC stružni postprocesor (.ngc). Postprocesor za rezkanje zavrne program za struženje in to pove.
- **Največja hitrost vretena**: meja, pod katero se drži obodna hitrost.

{{ui:Več}} v orodni vrstici Izdelave na vrhu zavihka **Operacije** našteje sedem operacij struženja. Prva, ki jo dodate, prinese svoje orodje: **struženjsko vstavno ploščico** (polmer konice, kot vstavne ploščice, kot rezalnega roba) ali **rezilo za utorjanje** (širina, polmer vogala, kako globoko seže). Spremenite ju na zavihku **Orodja**. Posmiki so na vrtljaj, hitrost pa je obodna hitrost v m/min, ki jo krmilnik ohranja, ko se premer spreminja; orodju dajte lastne vrt/min, da hitrost namesto tega fiksirate.

## Operacije

| Operacija | Kaj naredi |
|---|---|
| {{ui:Ploskev}} | Planira čelo palice do dela, po en korak v globino naenkrat, od zunaj do tik čez središče. |
| {{ui:Grobo}} | Prehodi vzdolž Z na razdalji **globine reza**, do obrisa plus **surovca za pustiti**; nato enkrat vzdolž obrisa, da odstrani stopnice. Dolino med dvema ramenoma vstopimo s potopom ene globine reza. |
| {{ui:Dokončno}} | Enkratni prehod vzdolž obrisa pri delu posmika orodja. |
| {{ui:Utor}} | Potopi rezilo drugo ob drugem, kjerkoli lahko odreže več kot mejo surovca, ki še ostaja: utore, do katerih vstavna ploščica ni mogla. **Od / Do Z** ga zoži. |
| {{ui:Odrez}} | Odreže del tik za zadnjo ploskvijo, do malo čez središče, s prekinitvami (peck), če ga nastavite. |
| {{ui:Navoj}} | Zunanji navoj: zunanji premer, korak, dolžina, število prehodov. Globina 0 pomeni 0.6134 × korak (60° navoj). Vsak prehod odvzame enako površino odrezka; prehodi izravnave ponovijo zadnjega. |
| {{ui:Vrtanje}} | Sveder na središčni črti do globine, s prekinitvami (peck). |

## Kako orodje ostane stran od dela

Vstavna ploščica je obravnavana kot to, kar je: krog njene konice in za njim zadnji rob, ravna črta, katere kot je 180° manj kot kot rezalnega roba in kot vstavne ploščice. Ta oblika se spusti na obris v vsaki točki vzdolž Z, pot pa je tam, kjer se ustavi. Torej:

- **Polmer konice je že v poti.** Postprocesorji ne zapišejo `G41` ali `G42`; koordinate so programirana točka orodja (vogal kvadrata okoli konice).
- Vstavna ploščica **ne more slediti steni, strmejši od njenega zadnjega roba**. Utor za ramenom pusti pri miru, dokončevalna operacija pa pove, koliko obrisa ni mogla doseči. Operacija {{ui:Utor}} to odstrani.
- Surovec se po vsakem rezu spremlja vzdolž Z, zato grobo struženje ne reže zraka, utorjanje najde, kar ostaja, in vsaka operacija prikaže prostornino, ki jo je odstranila, in ali je zarezala v del.

## Omejitve

- **Samo zunanje struženje**: brez vrtalne palice, brez notranjih utorov ali navojev, brez čelnih utorov.
- Eno vreteno, del vpet pri −Z. Brez podvretena, brez živih orodij, brez osi C ali Y, brez mirujoče opore ali premikov konjička.
- Poti so ravni premiki: krivulje so kratke črte znotraj tolerance (brez `G2`/`G3`), grobo struženje in navoj pa sta zapisana prehod za prehodom (brez ciklov `G71` ali `G76`).
- Navoj je izveden z ravnimi prehodi z ravnim izvlekom na koncu; navoju dodajte sprostilni utor. Navoj ni prikazan v surovcu.
- Vrtanje na središču ne spremeni modela surovca.
- Držalo, revolver in vpenjalo se ne preverjajo. Nastavite **Ustavi pri Z**, da orodje ostane stran od čeljusti.
- Posmiki in hitrosti so začetne vrednosti, enako kot pri rezkanju.
