---
title: Seznam delov, razstavljeni pogledi in premikanje delov
summary: Dajte delom sestava številko, opis in material, preberite in prenesite kosovnico, ustvarite razstavljene poglede s koraki ali samodejno, premaknite nespojene dele z roko, nastavite omejitve spojev in izvozite celoten sestav kot STL, 3MF ali kosovnico.
keywords: kosovnica, bom, seznam delov, številka dela, material, gostota, csv, razstavljeni pogled, razstavi, strni, sledilne črte, premakni del, povleci, gizmo, premik, zasuk, omejitve spoja, izvoz sestava, korak sestava, risba sestava, oblački
from: ebc9f6f3
---

Ta orodja so v desnem podoknu sestava (glejte [Sestavite sestav s spoji](topic:build-assembly)).

## Lastnosti dela

Izberite del v seznamu na levi. Pod **Lastnosti dela** nastavite:

- **Številka dela** (do 40 znakov) in **Opis** (do 200).
- **Material**: pogost material z gostoto ali **Gostota po meri…**, da vnesete gostoto v g/cm³. Podokno nato prikaže maso dela.

Lastnosti pripadajo delu, zato jih vse njegove kopije delijo. Shranjene so v datoteki sestava.

## Kosovnica

Če nič ni izbrano ({{key:Esc}}), podokno prikaže **Kosovnico**: po eno vrstico na del s številko postavke, količino (koliko kopij), številko dela, ime, material in maso. Številke postavk sledijo vrstnemu redu, v katerem se deli prvič pojavijo v seznamu. Mase uporabljajo prostornino vsakega dela (ploskovnega telesa, ki ga zgradi mrežno jedro; pri okroglih delih nekoliko nižje) in njegov material. Del brez materiala nima mase, tedaj tudi ni skupne vsote.

{{ui:Prenesi CSV}} shrani seznam kot datoteko CSV (enako kot **Izvoz › Kosovnica (CSV)**). Odpre se v katerem koli preglednici. Besedilo, ki se začne z = ali +, dobi na začetku apostrof, da preglednica tega ne izvede kot formule.

## Razstavljeni pogledi

Razstavljeni pogled razmakne dele za slike. Nikoli ne spremeni spojev ali dejanskega položaja delov: shranjevanje, preverjanje kolizij in izvozi uporabljajo prave položaje.

1. Ko nič ni izbrano, izberite {{ui:Nov pogled}} pod **Razstavljeni pogledi**.
2. Pod **Dodaj korak** označite dele, ki jih korak premakne, izberite **Smer** (+X … −Z, normala ploskve, ki jo kliknete, ali **Povlecite puščico v pogledu**) in **Razdaljo**, nato {{ui:Dodaj korak}}. Pri **Povleci** povlecite puščico in jo spustite: korak prevzame smer in razdaljo, ki ste jo povlekli.
3. Dodajte še korake. Izvajajo se drug za drugim.
4. Povlecite drsnik med **Sestavljeno** in **Razstavljeno**, da animirate pogled. Od položaja vsakega dela do njegovega sedanjega položaja potekajo črtkane sledilne črte.

{{ui:Samodejno (radialno)}} premakne vse dele razen pritrjenega stran od sredine sestava. {{ui:Samodejno (spoji)}} premakne vsak spojen del (skupaj z vsem, kar je spojeno pod njim) ven vzdolž normale ploskve svojega spoja. Shranite lahko več poimenovanih pogledov; izberete enega v **Pogled** ali **Sestavljeno**, da dele vrnete na mesto. Pogledi so shranjeni v datoteki sestava.

## Ročno premikanje dela

Ročno se premakne samo del brez spoja s pritrjenim delom (pritrjeni del je fiksen; spoji postavijo ostale). Izberite ga in pod **Ročni premik**:

- Vnesite **ΔX, ΔY, ΔZ** in izberite {{ui:Premik}}, ali izberite os, **Kot** in {{ui:Zasukaj}} (okoli središča dela).
- {{ui:Povlecite za premik}} prikaže puščice na delu: povlecite puščico za premik vzdolž osi ali kvadrat za premik v ravnini. {{ui:Povlecite za zasuk}} prikaže obroče za zasuk. Vsak vlek je en korak razveljavitve. {{key:Esc}} skrije puščice.

## Omejitve spoja

Izberite spoj, ki se premika, in pod **Omejitve** označite **Zadrži … med omejitvama** za katero koli njegovo vrednost, nato nastavite **Najmanj** in **Največ**. Vsaka vrednost ostane znotraj svojih omejitev, njen drsnik pokriva samo to območje, {{ui:Preveri gibanje glede kolizij}} pa preverja samo med njima. Valjasti spoj lahko omeji svoj kot, odmik ali oboje. Če spremenite vrsto spoja, se omejitve vrednosti, ki jih novi tip nima, odstranijo.

## Izvoz celotnega sestava

V sestavu meni **Izvoz** zapiše celoten sestav z vsakim delom na njegovem mestu:

- **STEP AP242 / AP214** in **Risba (PDF)** v tej različici še nista izdelana: potrebujeta natančno jedro, zato sta sivo označena. Namesto tega izvozite STEP vsakega dela (natančno telo) iz samega dela.
- **STL**: ena mreža vseh delov. **3MF**: vsak del enkrat, postavljen po enkrat za vsako kopijo.
- **Kosovnica (CSV)**.

## Omejitve

- Risba sestava in STEP sestava v tej različici še nista izdelana (potrebujeta natančno jedro). Razstavljeni pogledi so namenjeni slikam na zaslonu.
