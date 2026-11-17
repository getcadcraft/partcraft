---
title: Vytažení výstupku a vyjmutí jím
summary: Proměňte skicu v těleso pomocí Vytáhnout, nastavte slepou hloubku, střední rovinu, až k nebo obousměrnou hloubku, úkos nebo jeden obrys skici, pak načrtněte skicu na ploše a vyjměte kapsu nebo průchozí drážku.
keywords: vytáhnout, výstupek, vytažený výstupek, vyjmout, vytažený výřez, kapsa, skrz vše, slepý, střední rovina, obrátit, hloubka, vyjmout-vytáhnout, výstupek-vytáhnout, podložka, až k ploše, až k další ploše, až k vrcholu, odsazení od plochy, směr 2, dva směry, úkos při vytahování, úkos, obrys, oblast, vybrané obrysy
from: 3b13ff10
---

{{ui:Vytáhnout}} vytlačí uzavřený profil skici kolmo z její roviny a vytvoří materiál. {{ui:Vyjmout}} dělá totéž, ale materiál odebírá. Obojí je ve své podstatě tentýž prvek; později můžete jeden přepnout na druhý.

## Vytažení výstupku

1. Nakreslete uzavřený profil a uzavřete skicu (viz [Nakreslete svou první skicu](topic:sketch-basics)). Zůstane vybraná.
2. Vyberte {{ui:Vytáhnout}}.

Objeví se těleso 10 mm, "Extrude1" se připojí do historie se skicou odsazenou pod ním, a stavový řádek hlásí "Extrude1 přidán. Čísla změníte vpravo."

**Která skica se použije:** skica, kterou jste právě uzavřeli, nebo skica vybraná v historii. Pokud nic vybráno není, PartCraft vezme nejnovější skicu, kterou žádný prvek zatím nepoužívá. Pokud žádná není: "Nejdřív vytvořte skicu: vyberte rovinu, Skica, nakreslete uzavřený profil, Konec."

### Nastavení hloubky a směru

V pravém panelu:

| Nastavení | Volby | Výchozí |
|---|---|---|
| **Operace** | Výstupek (přidá materiál), Vyjmout (odebere materiál), Průnik (ponechá překryv), Nové těleso (v této verzi zatím není hotové: vyžaduje přesné jádro) | Výstupek |
| **Konec** | Slepý (hloubka), Střední rovina (oběma směry), Skrz vše, Až k ploše nebo rovině, Až k další ploše, Až k vrcholu, Odsazení od plochy | Slepý |
| **Hloubka (mm)** | Jakákoli velikost nad nulou (zobrazeno pro Slepý a Střední rovinu) | 10 |
| **Obrátit směr** | Roste na druhou stranu roviny skici (nezobrazeno pro Střední rovinu) | Vypnuto |

Zadejte číslo a stiskněte {{key:Enter}} nebo {{key:Tab}}: díl se hned přestaví. **Střední rovina** rozdělí hloubku napůl na obě strany skici.

### Až k ploše, další ploše nebo vrcholu

V této verzi zatím není hotové: každý konec "až k" vyžaduje přesné jádro a prvek hlásí "Vytahování až k ploše, další ploše nebo vrcholu: zatím není hotové (vyžaduje přesné jádro)." Použijte slepou hloubku, kterou změříte. S přesným jádrem konce fungují takto:

- **Až k ploše nebo rovině**: **Až k** bere rovnou plochu (Vybrat, pak na ni klikněte) nebo referenční rovinu. Plocha rovnoběžná se skicou dá přesnou hloubku; šikmá plocha ukončí konec na svahu. Pokud je plocha za skicou: "… Zkuste Obrátit směr."
- **Až k další ploše**: zastaví se na první rovné ploše tělesa, kterou vytahování protne (zakřivené plochy zde nejsou podporovány; program to oznámí).
- **Až k vrcholu**: zastaví se na úrovni vrcholu (klikněte blízko konce hrany) nebo bodového prvku.
- **Odsazení od plochy**: jako Až k ploše, ale zastaví se o **Odsazení (mm)** před ní (měřeno kolmo k ploše).

### Dva směry, úkos, jeden obrys

- **Druhý směr** (Slepý): vytáhne také **Druhou hloubku (mm)** na druhou stranu skici.
- **Úkos (°)**: boky se při pohybu naklánějí dovnitř (záporná hodnota: ven), jako úkos; pouze jeden směr. V této verzi zatím není hotové (vyžaduje přesné jádro): ponechte 0.
- **Oblasti**: **Vybrat oblasti**, pak klikněte dovnitř smyček, které chcete vytáhnout; použijí se jen tyto oblasti (kruh uvnitř čtverce: klikněte do kruhu pro válec, mezi ně pro plech s dírou). **Vše** vrátí všechny smyčky.

Pod těmito nastaveními **Kóty skici** vypisuje řídicí kóty skici, takže můžete měnit rozměry profilu, aniž byste skicu otevřeli.

:::note
**Skrz vše je pouze pro vyjmutí.** Výstupek nastavený na Skrz vše selže s hláškou "Skrz vše je pro vyjmutí. U výstupku použijte hloubku." Přepnutí prvku z Vyjmout zpět na Výstupek změní Skrz vše na Slepý za vás.
:::

## Vyjmutí kapsy

1. Klikněte na rovnou plochu, do které chcete řezat. Zvýrazní se a pravý panel ukáže **Plocha**.
2. Vyberte {{ui:Skica na této ploše}} (nebo {{ui:Skica}} v panelu nástrojů).
3. Nakreslete obrys kapsy, například obdélník, a zakótujte jej.
4. Vyberte {{ui:Konec}}.
5. Vyberte {{ui:Vyjmout}}. Začne jako **Skrz vše**: odebere materiál přes celý díl.
6. U kapsy nastavte **Konec** na **Slepý (hloubka)** a zadejte **Hloubku (mm)**.

Vyjmutí jde do materiálu, pryč od plochy, na kterou jste kreslili. Pokud stavový řádek hlásí "Na této straně skici není nic k vyjmutí. Zkuste druhý směr.", zaškrtněte **Obrátit směr**.

Skica na dně kapsy sleduje dno: změníte hloubku kapsy a skica se posune s ní.

## Vytažení nebo vtlačení celé plochy

Abyste plochu vytáhli dál nebo ji zapustili, nemusíte kreslit její obrys. Klikněte na rovnou plochu a pak v pravém panelu:

- {{ui:Vytáhnout z ní}} plochu vytáhne: PartCraft přidá skicu na plochu s jejím obrysem (díry v ploše zůstanou dírami) a Vytažení o 10 mm.
- {{ui:Vyříznout do ní}} plochu vtlačí: stejná skica a Vyjmutí zhruba do poloviny dílu.

Obojí je jeden krok: {{key:Mod+Z}} odebere skicu i prvek najednou. Nový prvek je vybrán, takže hned zadejte číslo a pro jeho hloubku stiskněte {{key:Enter}}. Obrys se zkopíruje jako pevné čáry a oblouky: nesleduje pozdější změny plochy. Pokud nejde zkopírovat část obrysu (volná křivka), otevře se místo toho skica s tím, co kopírovat šlo; dokončete ji, pak vyberte {{ui:Konec}} a {{ui:Vytáhnout}} nebo {{ui:Vyjmout}}.

## Profily s ostrovy

Skica může obsahovat několik uzavřených smyček. Smyčky vedle sebe se stanou samostatnými výstupky (nebo výřezy); smyčka uvnitř jiné se stane dírou skrz výstupek. Například obdélník se dvěma kružnicemi uvnitř se vytáhne jako plech se dvěma dírami.

Chcete-li použít jen některé smyčky, vyberte je pomocí **Oblastí** (výše); jiný prvek může použít ostatní smyčky téže skici.

## Úprava později

- Kliknutím na "Extrude1" v historii vyvoláte její nastavení.
- Dvojklikem na její skicu (odsazenou pod ní) skicu otevřete; zavřením ji přestavíte.
- Potlačení, návrat, změnu pořadí a mazání popisuje [Změna dílu přes jeho historii](topic:edit-history).

## Běžné hlášky

| Hláška | Co dělat |
|---|---|
| "The sketch has no closed profile to extrude." | Skica nemá uzavřenou smyčku z plných čar. Uzavřete mezery, nebo přepněte konstrukční čáry zpět klávesou {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Otevřete skicu a napojte tento konec na další čáru |
| "There is nothing to cut yet." | Vyjmutí potřebuje těleso, které lze vyjmout. Nejdřív vytvořte výstupek |
| "Nothing is left of the part after this." | Vyjmutí odebralo vše. Zkontrolujte jeho velikost a směr |

Více v [Řešení potíží](topic:troubleshooting).
