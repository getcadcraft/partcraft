---
title: Pole: tvary jako vzdálenosti
summary: Co je pole (tvar uložený jako vzdálenost k jeho povrchu), jak z něj ve skriptu vytvořit tvar z primitiv, booleovských operací, mřížek a minimálních ploch, jak se stane tělesem a proč stejný skript vždy dá stejné bajty.
keywords: pole, znaménková vzdálenost, sdf, voxel, gyroid, tpms, mřížka, boolean, odsazení, skořepina, prolnutí, dual contouring, deterministický, vodotěsný, manifold, cihla
from: faab7480
---

**Pole** popisuje tvar vzdáleností libovolného bodu od jeho povrchu: uvnitř záporná, na povrchu nula, venku kladná. Koule o poloměru 5 je "vzdálenost od středu minus 5". Kombinování tvarů je aritmetika vzdáleností: sjednocení je menší z obou hodnot, průnik větší, odečtení jednoho tvaru od druhého je větší z první hodnoty a záporné hodnoty druhého. Zvětšení tvaru o 1 mm odečte od vzdálenosti 1; dutá stěna je vzdálenost přehnutá dovnitř.

Proto jsou pole vhodná pro mřížky, kanály a stěny s postupně se měnící tloušťkou: povrch gyroidu je "součet sinů je nula" a stěna, která se po dílu ztenčuje z 1 na 3 mm, je číslo, které se napříč dílem mění.

## Od pole k tělesu

`to_body(field, h)` vzorkuje pole na mřížce bodů vzdálených `h` milimetrů, ponechá jen body blízko povrchu (řídká mřížka po blocích 8 × 8 × 8) a povrch sestaví **dual contouring**: jeden vrchol na buňku povrchu, umístěný tam, kde se protínají roviny povrchu, takže ostrá hrana zůstane ostrá s přesností na jeden voxel. Povrch je uzavřený a každá hrana je sdílena přesně dvěma trojúhelníky; hlášení to uvádí. Prvek tenčí než asi tři voxely se může zúžit, a pak hlášení řekne, že těleso není uzavřené, místo aby to skrylo.

Velikost voxelu je přesnost: objem koule o průměru 25 voxelů napříč je přesný na několik setin procenta, stěna je přesná jen tak, jak přesné jsou její voxely. Čím hrubší mřížka, tím rychleji to běží.

## Vždy stejné bajty

Pole nemá hodiny ani náhodná čísla. Sinus a kosinus gyroidu a každá exponenciála, logaritmus a mocnina v knihovně se počítají z prostého aritmetického základu, aby Node, Chrome, Firefox a Safari dávaly stejné bity; mřížka se prochází v pevném pořadí, takže stejný skript se stejnými vstupy dá bajtově shodné sítě a datové listy na libovolném počítači a při libovolném počtu pracovních vláken. To je ověřeno, včetně prohlížeče proti Node.

## Kam dál

[Napište generátor](topic:write-a-generator) vytvoří díl pomocí polí; [Inženýrská knihovna](topic:engineering-library) jej dimenzuje.
