---
title: Zebra a zakřivení
summary: Ověřte, jak plynule na sebe navazují plochy libovolného dílu, pomocí pruhů zebra, které sledují pohled, nebo barevné mapy střední křivosti, z nabídky {{ui:Pohledy}}.
keywords: zebra, pruhy zebra, odrazové čáry, zakřivení, mapa zakřivení, střední zakřivení, kvalita plochy, spojitost, tangenta, g1, g2, hladký, zlom, zvýrazněné čáry
from: 78fed4c3
---

Dva rychlé pohledy na to, jak hladké jsou plochy dílu, na libovolném dílu v pracovním prostoru Design (pracovní prostor Form má vlastní nástroj pro tvar, který upravujete: viz [Tvarované plochy pomocí Form](topic:form-surfaces)).

## Pruhy zebra

Otevřete {{ui:Pohledy}} a zvolte {{ui:Zebra}}. Díl ukáže odraz pruhovaného světla, jako by ho ukazovala leštěná plocha:

- Kde se dvě plochy stýkají **tečně** (zaoblení na rovině, hladká Gordonova plocha), pruhy pokračují přes spoj s ohybem.
- Kde se stýkají ve **zlomu**, pruhy se přeruší a skočí.
- Kde se shoduje i zakřivení (G2), pruhy plynou dál bez jakéhokoli zlomu.

Otočte pohled (tažením nebo za stěnu kostky pohledu): pruhy se vykreslí znovu z nového směru. **Pruhy** určuje jejich počet.

## Zakřivení

Zvolte {{ui:Zakřivení}} ve stejné nabídce. Díl je obarven podle své **střední křivosti**: modře tam, kde je dutý (konkávní), bledě tam, kde je rovný, a červeně tam, kde se vyklenuje (konvexní). Karta uvádí, při jaké křivosti barvy dosáhnou plné intenzity, v 1/mm a jako poloměr. Ostré hrany se počítají jako velmi zakřivené, proto výrazně svítí; dívejte se na plochy mezi nimi.

## Karta

Obě možnosti otevřou kartu analýzy v levém dolním rohu pohledu, která také obsahuje [analýzu úkosů](topic:draft-analysis). Přepínejte mezi nimi pomocí **Zobrazit**. Opětovným výběrem otevřené možnosti v {{ui:Pohledy}}, v {{ui:Zavřít}} nebo klávesou {{key:Esc}} ji vypnete. Barvy se řídí dílem, jak ho měníte; v díle se nic neukládá.
