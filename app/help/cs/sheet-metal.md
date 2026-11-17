---
title: Plech: příruby a rozvinutí
summary: Začněte díl z plechu skicou (rovná deska nebo ohnutý profil), jednou nastavte jeho tloušťku, poloměr ohybu a K-faktor, ohněte příruby z jeho hran s odlehčením ohybů a rozložte jej do roviny jako DXF pro řezání.
keywords: rozvinutí, rozložení, rozvinutá délka, přídavek na ohyb, osa ohybu, DXF pro laser, laserové řezání, plech, plechový díl, základní příruba, hranová příruba, příruba, ohyb, poloměr ohybu, K-faktor, K faktor, tloušťka, měřidlo, odlehčení, odlehčení ohybu, žlab, držák, kryt, ohnutý plech
from: 144bd0f6
---

:::note
**Ještě není hotovo v této verzi.** Plech potřebuje přesné geometrické jádro, které tato verze PartCraft nemá: všechny díly staví pomocí jádra sítí. [Co zatím není hotovo](topic:not-built-yet) říká, co dělat místo toho. Zbytek této stránky popisuje, jak to funguje s přesným jádrem.
:::

Díly z plechu začínají **základní přírubou**. Nastavuje plech pro celý díl: jeho **tloušťku**, **vnitřní poloměr ohybu** a **K-faktor**. Každá **hranová příruba** za ní se ohýbá se stejnými hodnotami, takže díl zůstane jedním plechem, který jde rozložit. Obě potřebují **přesné jádro** (viz [Jádro sítí](topic:solid-kernels)).

## Začátek se základní přírubou

1. Nakreslete skicu. Pro rovnou desku použijte **uzavřený profil** (obdélník nebo libovolný uzavřený obrys s otvory). Pro ohnutý plech použijte **jeden otevřený řetěz úseček**, například L, U nebo Z nakreslené jako pohled na hranu plechu.
2. Vyberte skicu v historii prvků.
3. Otevřete {{ui:Více}} ve skupině **Prvky** a zvolte {{ui:Základní příruba}}.

V pravém panelu:

- **Tloušťka (mm)** je tloušťka plechu.
- **Poloměr ohybu (mm)** je vnitřní poloměr každého ohybu. 0 dá ostrý vnitřní roh; vnější strana se stále ohýbá s poloměrem jedné tloušťky.
- **K-faktor** říká, kde leží neutrální vrstva uvnitř plechu, od 0 (vnitřní plocha) do 0.5 (střed). Rozhoduje o tom, jak dlouhý je plech, když se rozloží do roviny. 0.44 je výchozí hodnota; vaše dílna nebo dodavatel materiálu vám může dát jejich.
- **Hloubka (mm)** je, jak daleko ohnutý profil vybíhá z roviny skicy. Deska ji ignoruje.
- **Tloušťka mimo ohyby**: otevřený profil je jedna plocha plechu. Ve výchozím stavu tloušťka jde na vnitřní stranu prvního ohybu, takže čáry, které jste nakreslili, jsou vnější stranou žlabu. Zaškrtněte to, aby čáry byly místo toho na vnitřní straně. Výsledek je stejný, z kterého konce jste kreslili.

Každý roh otevřeného řetězu se stane ohybem. Úsečka, která je příliš krátká na své ohyby, to řekne i s délkou, kterou potřebuje.

## Ohyb hranové příruby

1. Klikněte na rovnou hranu horní nebo spodní plochy plechu (dlouhé hrany, ne tenké).
2. Zvolte {{ui:Více}} › {{ui:Hranová příruba}}. Pokud není vybrána žádná hrana, PartCraft čeká, až na jednu kliknete; Esc zruší.

Příruba se ohne nahoru z plochy této hrany kolem vnitřního poloměru plechu a pak pokračuje rovně. V panelu:

- **Úhel (°)** je, o kolik se ohne, od 1 do 180. 90 je pravoúhlá příruba.
- **Délka (mm)** je rovné rameno za ohybem.
- **Ohnout opačným směrem** ohne ji z druhé plochy (dolů místo nahoru).
- **Odsazení na začátku** a **Odsazení na konci** zkrátí přírubu z každého konce hrany.
- **Odlehčení ohybu**: když je konec odsazen, vedle něj se do plechu vyřízne drážka, aby ohyb tam kov netrhal. **Šířka odlehčení** nastavuje šířku drážky; její hloubka je poloměr ohybu plus tloušťka. Zvolte **Žádné**, aby roh zůstal neuříznutý.

Hranu později změníte tak, že v panelu stisknete {{ui:Vybrat}} a kliknete na jinou.

:::tip
Pro tloušťku a poloměr používejte parametry (viz [Parametry a rovnice](topic:parameters)), aby změna tloušťky aktualizovala všechny příruby najednou.
:::

## Rozložení do roviny

Oba panely končí **rozvinutím**. Stiskněte {{ui:Rozložit do roviny}}:

- Náhled ukazuje rozložený plech, osa každého ohybu je čárkovaná.
- **Velikost** a **Plocha** jsou hodnoty rovného polotovaru.
- Každý ohyb je uveden se svým směrem (**nahoru** nebo **dolů**, při pohledu ze strany skicy základní příruby), úhlem a vnitřním poloměrem.

Každý ohyb zabere délku neutrální vrstvy plechu, **přídavek na ohyb**: úhel (v radiánech) × (vnitřní poloměr + K-faktor × tloušťka). Takže 90° ohyb plechu o tloušťce 2 mm s poloměrem 2 mm a K-faktorem 0.44 přidá 4.52 mm rovného plechu.

U rovné desky se otvory, řezy a odlehčení ohybů ukazují v rozvinutí tam, kde skutečně jsou, včetně otvorů procházejících přírubou.

Pro řezání více dílů stiskněte pod rozvinutím {{ui:Rozmístit na listy…}}: viz [Rozmístění rovných dílů na listech](topic:nest-flat-parts). Ohnutá základní příruba se rozloží jako jeden obdélník: jeho rozvinutá délka × jeho hloubka, s osou ohybu u každého rohu.

{{ui:Uložit DXF}} uloží rozvinutí pro laser, děrovací lis nebo vodní paprsek, v milimetrech:

- obrys na vrstvě **OUTLINE**, jako úsečky, oblouky a kružnice;
- čáry ohybů na vrstvě **BEND**, čárkované;
- poznámka u každého ohybu na vrstvě **BEND_NOTES**, například "UP 90° R2".

Cokoli změníte a rozvinutí zmizí; pro nové stiskněte {{ui:Rozložit do roviny}} znovu.

:::note
Před řezáním si K-faktor ověřte s dílnou: délka rozvinutí na něm závisí a mění se podle materiálu, tloušťky a nástrojů.
:::

## Hlášení

- **Plech potřebuje předem základní přírubu** — hranová příruba byla přidána před jakoukoli základní přírubu. Přesuňte ji pod ni, nebo nejdřív přidejte základní přírubu.
- **Hranová příruba potřebuje rovnou hranu** — příruby se ohýbají jen podél přímek; zakřivené hrany zatím nepřijmou.
- **Tato hrana není na ploše tloušťky plechu** — hrana patří ploše, která není horní nebo spodní plochou plechu (například stěna otvoru). Vyberte hranu horní nebo spodní plochy.
- **Odsazení nenechají z hrany nic** — obě odsazení dohromady dají celou hranu nebo víc.
- **Hranové příruby na ohnuté základní přírubě zatím nejdou rozložit do roviny** — začněte z rovné desky a všechno ohněte hranovými přírubami, které se rozloží.
- **Řezy a otvory vytvořené po ohnuté základní přírubě se zatím v jejím rozvinutí nezobrazují** — rozvinutí ohnutého profilu je jen jeho rozvinutý obdélník.
