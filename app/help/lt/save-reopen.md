---
title: Įrašymas, vėl atidarymas ir darbo tęsimas
summary: Įrašykite detales ir surinkimus į kompiuterį, pavadinkite juos, atidarykite iš naujo mygtuku, klavišu ar vilkimu, saugokite versijas ir neprarandykite darbo naršyklės skirtuke.
keywords: įrašyti, atidaryti, atidaryti iš naujo, įkelti, atsisiųsti, versijos, atsarginė kopija, pervadinti, failo pavadinimas, prarastas darbas, išeiti iš svetainės, partcraft.json, partcraft-asm.json, nauja detalė
from: c18a5abc
---

PartCraft tarp apsilankymų nieko neišsaugo. Jūsų detalė gyvena naršyklės skirtuke, kol ją įrašote kaip failą, ir sugrįžta, kai atidarote tą failą.

## Detalės įrašymas

1. Pavadinkite detalę: spustelėkite tuščią vietą vaizde, kad nieko nebūtų pažymėta, tada įveskite **Pavadinimas** dešiniajame skydelyje ir paspauskite {{key:Enter}}. Istorijos antraštė pasikeičia atitinkamai.
2. Paspauskite {{key:Mod+S}} arba pasirinkite {{ui:Įrašyti}}.
3. Naršyklė atsisiunčia `<pavadinimas>.partcraft.json`. Būsenos juostoje rašoma: „Įrašyta: Bracket.partcraft.json (visa istorija; atidarykite ją čia, kad galėtumėte toliau redaguoti).“

Jei atvertas eskizas, įrašant jis pirmiausia uždaromas.

Failas saugo kiekvieną eskizą, ryšį, matmenį ir elementą, taip pat išjungtus elementus, atkūrimo juostos padėtį, brėžinio lapo parametrus ir GD&T pastabas bei visą importuoto STEP kietojo kūno tekstą. Jūsų anuliavimo sąrašas neįrašomas.

## Surinkimo įrašymas

Surinkime tas pats {{ui:Įrašyti}} arba {{key:Mod+S}} atsisiunčia `<surinkimo pavadinimas>.partcraft-asm.json`. Kiekviena detalė įrašoma į jį: atidaryti surinkimą iš naujo nereikia atskirų detalių failų.

Kol redaguojate detalę surinkimo viduje, {{key:Mod+S}} įrašo tik tą detalę atskirai kaip `.partcraft.json`. Pirmiausia pasirinkite {{ui:Atgal}}, tada įrašykite, kad įrašytumėte visą surinkimą.

## Atidarymas iš naujo

Bet kuris iš šių būdų:

- pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}}, tada pasirinkite failą;
- vilkite failą iš {{pick:mac=Finder|windows=Failų naršyklė|linux=jūsų failų tvarkyklė}} į 3D vaizdą („Vilkite PartCraft detalę, kad ją atidarytumėte“ pasirodo).

PartCraft atpažįsta detales nuo surinkimų pagal turinį, todėl abu atidaromi vienodai. `.step` arba `.stp` failas atidaromas kaip importuotas kietasis kūnas: žr. [Atidaryti STEP failą ir kurti toliau](topic:import-step). Būsenos juosta patvirtina: „Atidaryta Bracket.partcraft.json: 7 elementai.“ arba „Atidaryta Hinge.partcraft-asm.json: 3 detalės, 2 jungtys.“

Jei ekrane esanti detalė turi neįrašytų pakeitimų, PartCraft pirmiausia klausia: {{ui:Atšaukti}}, {{ui:Atmesti pakeitimus}} arba {{ui:Pirmiausia įrašyti}}.

:::warning
Prieš atidarydami detalės failą uždarykite surinkimą ({{ui:Uždaryti}}). Jei atidarote detalę, kai ekrane yra surinkimas, detalė įkeliama už surinkimo ir ją pamatysite tik uždarę surinkimą. Atidarant surinkimo failą neįrašytas surinkimas pakeičiamas be klausimo, todėl pirmiausia jį įrašykite.
:::

## Pradėti iš naujo

{{ui:Naujas}} sukuria tuščią „Part1“. Jei yra neįrašytų pakeitimų, pirmiausia klausia, ir uždaro atvirą surinkimą (klausdamas, jei jis neįrašytas).

## Versijų saugojimas

Kiekvienas įrašymas yra naujas atsisiuntimas, todėl versijas galite saugoti tiesiog išsaugodami failus:

- Prieš įrašydami pavadinime įrašykite versiją arba datą: „Bracket rev B“.
- Naršyklė gali pridėti „ (1)“, „ (2)“, kai atsisiuntimų aplanke jau yra failas tuo pačiu pavadinimu. Naujausias yra tas, kurio numeris didžiausias, arba patikrinkite datą {{pick:mac=Finder|windows=Failų naršyklė|linux=jūsų failų tvarkyklė}}.
- Baigtus failus perkelkite iš atsisiuntimų aplanko į projekto aplanką.

Kur atsisiuntimai eina kiekvienoje sistemoje, žr. [Kur keliauja jūsų failai](common:your-files).

## Neprarasti darbo

- Įrašykite prieš uždarydami skirtuką, perkraudami puslapį ar leisdami kompiuteriui ilgai miegoti. Naršyklė klausia „Palikti svetainę?“, jei bandote uždaryti su neįrašytais pakeitimais, bet strigimas ar uždarytas nešiojamas kompiuteris įspėjimo nedaro.
- Privatūs arba inkognito langai veikia, bet nieko kito nesikeičia: failas vis tiek yra vienintelė kopija.
- Įrašymas debesyje ir versijų istorija dar nepasiekiami.
