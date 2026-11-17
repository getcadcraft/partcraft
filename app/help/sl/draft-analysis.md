---
title: Preverjanje nagiba za litje v kalup
summary: Pobarvajte del glede na kot njegovega nagiba proti smeri izvleka kalupa in poglejte, katere ploskve se sprostijo, katerim je potreben več nagiba in katere se sprostijo iz druge polovice kalupa, z deležem površine vsake.
keywords: analiza nagiba, nagib, zožitev, kalup, litje v kalup, tlačno litje, smer izvleka, ločilna črta, podrez, sprostitev, preveri nagib
from: 6a106f83
---

Deli, izdelani v kalupu, v tlačnem litju ali v litju v pesek, potrebujejo **nagib**: stene, nagnjene nekoliko, da del zdrsne ven. **Analiza nagiba** pobarva vsako ploskev glede na to, koliko se nagiba stran od smeri, v kateri se kalup odpira (**smer izvleka**).

## Vklop

1. V delovnem okolju Design odprite {{ui:Pogledi}} in izberite {{ui:Analiza nagiba}}.
2. Nastavite **Smer izvleka**: smer, v kateri se kalup odpira, vzdolž X, Y ali Z v eno ali drugo stran, ali **Pravokotno na izbrano ploskev**: pritisnite {{ui:Izberi ploskev}} in kliknite ravno ploskev dela.
3. Nastavite **Najmanjši nagib** v stopinjah: najmanjši nagib, ki ga vaš postopek potrebuje (pogosto 1° do 3°).

Del je pobarvan:

| Barva | Pomeni |
|---|---|
| Zelena: **Pozitiven nagib** | Nagnjen proti smeri izvleka za vsaj najmanjšo vrednost: se sprosti iz te polovice kalupa |
| Oker: **Potreben nagib** | V najmanjši vrednosti v eno ali drugo smer, na primer navpična stena: tukaj dodajte nagib |
| Rdeča: **Negativen nagib** | Nagnjen stran od smeri izvleka za vsaj najmanjšo vrednost: se sprosti iz druge polovice kalupa ali je podrez, če naj del izide iz ene polovice |

Delež površine dela za vsak razred je prikazan ob njem. **Obrni smer izvleka** pogleda z druge polovice kalupa: zelena in rdeča se zamenjata.

Ukrivljene ploskve so presojene točko za točko, zato valj, ki leži prečno na smer izvleka, pokaže pas, ki potrebuje nagib vzdolž svojih stranic.

Barve sledijo delu, ko ga spreminjate. {{key:Esc}} ali {{ui:Zapri}} analizo izklopi; v samem delu se ne shrani nič.

:::tip
Za dodajanje nagiba uporabite značilko {{ui:Nagib}} na oker ploskvah (glejte [Potegni po poti, prehod in nagib](topic:sweep-loft-draft)), nato znova preverite.
:::
