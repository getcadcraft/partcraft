---
title: Rámy z ocelových profilů
summary: Položte ocelové profily podél čar jedné nebo více skic a vytvořte svařovaný rám: pokosové nebo tupé rohy, prvky ořezané na míru v místech styku, koncové krytky, výztuhy a řezný seznam s délkami a úhly konců.
keywords: svařenec, konstrukční prvek, rám, ocelový rám, trubka, čtvercová trubka, hss, rhs, shs, potrubí, chs, širokopásový profil, i-profil, w profil, ipe, hea, heb, u-profil, úhelník, pokos, pokosový spoj, tupý spoj, vykrojení, koncová krytka, výztuha, řezný seznam
from: 59071e5a
---

**Konstrukční prvek** položí ocelový profil podél každé čáry vybraných skic. Nakreslete rám jako úsečky (každá úsečka je jeden prvek), potom zvolte profil: prvky se vytvoří, jejich rohy se oříznou a prodlouží a řezný seznam uvede, jak dlouhý má být každý kus a pod jakým úhlem se řeže.

## Vytvoření rámu

1. Nakreslete rám jako úsečky ve skici, například obdélník na horní rovině. Úsečky označené jako konstrukční se vynechají.
2. Při vybrané skice zvolte {{ui:Více}} › {{ui:Konstrukční prvek}}. Každá úsečka skici dostane prvek.
3. V panelu vyberte **Řadu** a {{ui:Formát}} profilu. Řady jsou tabulky AISC (W, S, C, L, trubky HSS, Trubky (Pipe)) a EN 10365 (IPE, HEA, HEB, UPN).

### Rám ve 3D

Úsečky z několika skic tvoří jeden rám: horní obdélník nakreslený na rovině nahoře a nohy nakreslené na svislých rovinách se ve 3D setkají svými konci. Pod **Podél čar** v panelu zaškrtněte každou skicu, jejíž úsečky prvky sledují. Konce, které se setkají do jednoho mikrometru, se spojí.

## Nastavení profilu na jeho čáře

- **Otočení (°)** otáčí profil kolem jeho čáry. Nosník stojí s výškou svisle (na svislém prvku směřuje jeho výška k přední straně).
- **Na čáře** určuje, který bod profilu leží na čáře: střed, nebo roh či střed strany obrysu profilu. "Dole uprostřed" položí rám na rovinu skici místo toho, aby jí procházel.

## Rohy a spoje

| Kde se prvky setkávají | Co se stane |
|---|---|
| Dva prvky konec na konec, **Rohy: Na pokos** | Oba se řežou v rovině uprostřed mezi nimi, jako rámeček obrazu |
| Dva prvky konec na konec, **Rohy: Tupě** | První prvek pokračuje až k vzdálené ploše druhého; druhý je řezán kolmo u bližší plochy prvního |
| Prvek končí uprostřed jiného (T) | Je řezán tak, aby přiléhal k vnějšku druhého prvku |
| Tři nebo více končí v jednom bodě | První pokračuje kolmo za ostatní; ostatní jsou řezány tak, aby na něj přiléhaly |

Prvním prvkem je ten, jehož čára je první: čáry si zachovávají pořadí, v němž byly nakresleny, skicu po skice v pořadí, v jakém byly zaškrtnuty.

## Koncové krytky a výztuhy

- **Koncové krytky** uzavírají každý volný konec deskou s obrysem profilu o tloušťce, kterou nastavíte, za koncem.
- **Výztuhy** vkládají trojúhelníkovou desku do každého rohu, kde se dva prvky setkávají pod úhlem: **Velikost výztuhy** podél každého prvku od rohu, **Tloušťka výztuhy** napříč, vystředěná na rovině rohu.

## Řezný seznam

Panel vypisuje každý kus, shodné kusy jsou seskupeny: profil, délku (od dlouhého bodu k dlouhému bodu, jak byste ji vyznačili pro pilu), jak je řezán každý konec (kolmo, úhel od kolmice, nebo na přiléhání) a kterým prvkům patří. Koncové krytky a výztuhy jsou uvedeny s jejich velikostmi. {{ui:Uložit řezný seznam (CSV)}} jej uloží pro tabulkový procesor.

Prvek řezaný na přiléhání k trubce s zaoblenými rohy zasahuje trochu do zaoblení rohu této trubky, takže jeho délka od dlouhého bodu je o několik milimetrů větší než mezera mezi plochami.

## Omezení

- Prvky sledují pouze přímé čáry; oblouky a spliny ve skici se vynechají.
- Spoje jsou řezané, nikoli svařené: svarové housenky se nekreslí a rám je jedno těleso.
- Profily se kreslí z rozměrů tabulky: tvary W s kořenovým zaoblením, S a U-profily s rovnoběžnými přírubami, trubky se zaoblenými rohy; díry, úpravy konců a svarové mezery se za vás nevytvářejí.
- Konstrukční prvky se staví jádrem sítě. Při zapnutém přesném jádru (jen pro vývojáře) to uvedou a jsou označeny jako ještě není hotovo.
