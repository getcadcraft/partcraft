---
title: Nuokrypių grandinės
summary: Pasirinkite paviršių grandinę per surinkimo detales ir pamatykite, kiek gali kisti tarpas jos gale: blogiausiu atveju ir RSS, su svarbiausiais matmenimis, surikiuotais pirmiausia.
keywords: nuokrypių grandinė, grandinė, tolerancijų analizė, tolerancijų grandinė, matmenų grandinė, kilpa, tarpas, leistinas tarpas, blogiausias atvejis, rss, kvadratinė šaknis iš kvadratų sumos, statistinis tolerancijavimas, dalyviai, jautrumas, gd&t, bendra tolerancija, iso 2768
from: cbdb3159
---

**Nuokrypių grandinė** sudeda matmenis išilgai grandinės per kelias detales, kad pamatytumėte, kiek gali kisti rezultatas, paprastai tarpas, kai kiekviena detalė pagaminta bet kur savo tolerancijų ribose.

## Pasirinkite grandinę

1. Atidarykite surinkimą ir pasirinkite {{ui:Nuokrypių grandinė}} Surinkimo grupėje. Virš vaizdo atsidaro kortelė.
2. Pasirinkite, išilgai ko matuojama grandinė: surinkimo X, Y ar Z, arba {{ui:Pirmojo paviršiaus normalė}}.
3. Paspauskite {{ui:Pasirinkti grandinę}} ir spustelėkite paviršius, per kuriuos eina grandinė, **eilės tvarka**: pradėkite vienoje tarpo pusėje, eikite per detales ir baikite kitoje tarpo pusėje.
4. Paspauskite {{ui:Atlikta}} arba Enter. Backspace atšaukia paskutinį spustelėjimą; Esc nutraukia.

Du spustelėjimai toje pačioje detalėje nustato tos detalės matmenį (atstumą išilgai grandinės). Spustelėjimas kitoje detalėje sukuria **sąsają** tarp jų, kur detalės susiliečia; ji neturi tolerancijos, nebent įvesite. Grandys prideda arba atima pagal tai, kaip eina grandinė, ir jos uždaro kilpą: nominalus tarpas yra tai, ką rodo modelis.

Galite ir rankiniu būdu {{ui:Pridėti grandį}} ir įvesti jos nominalą, toleranciją bei tai, ar ji prideda (+), ar atima (−).

## Kiekvienai grandžiai nurodykite toleranciją

Kiekviena grandis turi **viršutinį** ir **apatinį** nuokrypį (pavyzdžiui, +0.1 ir −0.05). **Tolerancija iš** užpildo juos iš detalės:

- **Bendra tolerancija**: detalės antraštės bloko lauko Tolerancija reikšmė (žr. [Brėžinys į PDF](topic:drawing-pdf)), kai ji nurodo ±0.1, +0.2/-0.1 ar ISO 2768-f, -m, -c ar -v (ISO 2768-1 linijiniai nuokrypiai pagal grandies dydį). Detalės bendra tolerancija naudojama iš karto, kai pasirenkama grandinė.
- **GD&T**: bet kuris geometrinių matmenų ir nuokrypių rėmelis detalės brėžinyje. Padėties, profilio ir nubėgimo zonos duoda ± pusę tolerancijos. Orientacijos ar formos tolerancija paprastai yra jau esančios matmens tolerancijos viduje: pridėkite ją tik ten, kur grandinė liečia kontroliuojamą paviršių. Su Ⓜ ar Ⓛ zona imama pagal nurodytą dydį; papildoma tolerancija neskaičiuojama.
- **Įvesta**: bet kurie skaičiai, kuriuos įvedate.

## Skaitykite rezultatus

- **Tarpas, nominalus** ir, kai tolerancijos nevienodos, **Tarpas, vidurkis** – +0.2/−0 ir +0/−0.1 perkelia intervalo vidurį.
- **Blogiausias atvejis**: visos tolerancijos vienu metu ties ribomis. Tarpas niekada negali išeiti už šio.
- **RSS** (kvadratinė šaknis iš kvadratų sumos): kiekviena tolerancija laikoma trimis normaliojo pasiskirstymo standartiniais nuokrypiais, sudedama kaip kvadratinė šaknis iš jų kvadratų sumos. Dauguma surinkimų gerokai patenka į blogiausią atvejį; tai įprastas įvertis detalėms, gaminamoms masiškai.
- Nurodykite **Tarpas bent** ir **Tarpas daugiausia**, kad pamatytumėte, ar blogiausias atvejis visada lieka ribose, ir kiek surinkimų iš milijono pagal RSS tikimasi išeinančių.
- Stulpelis **#** surikiuoja grandis pagal jų **dalį** RSS: pirmąsias griežtinkite, kad pasiektumėte didžiausią skirtumą.

{{ui:Įrašyti CSV}} įrašo grandis, jų dalis ir rezultatus. Nuokrypių grandinės išsaugomos surinkimo faile, o kiekvienas pakeitimas yra vienas žingsnis {{key:Mod+Z}}.

:::note
Nuokrypių grandinė yra vienakryptė. Ji nesekia kampų ar posūkių išilgai grandinės ir neskaito matmenų tolerancijų iš eskizų: pateikite jas įvesdami rankiniu būdu arba per antraštės bloką.
:::
