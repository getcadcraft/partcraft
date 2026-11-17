---
title: Kontrola úkosu pro formy a odlitky
summary: Obarvěte díl podle jeho úhlu úkosu vůči směru tahu formy, zjistěte, které plochy se uvolní, které potřebují více úkosu a které se uvolní z druhé poloviny formy, s podílem každé na ploše.
keywords: analýza úkosů, úkos, kužel, forma, mold, tlakové lití, vstřikování, směr tahu, dělicí rovina, podříznutí, uvolnění, kontrola úkosu
from: 6a106f83
---

Díly vyrobené ve formě, kokile nebo pískovém odlitku potřebují **úkos**: stěny mírně nakloněné, aby díl vyklouzl ven. **Analýza úkosů** obarví každou plochu podle toho, jak moc se odklání od směru, ve kterém se forma otevírá (**tah**).

## Zapněte ji

1. V pracovním prostoru Design otevřete {{ui:Pohledy}} a vyberte {{ui:Analýza úkosů}}.
2. Nastavte **Tah**: směr, ve kterém se forma otevírá, podél X, Y nebo Z oběma směry, nebo **Kolmo k vybrané ploše**: stiskněte {{ui:Vybrat plochu}} a klikněte na rovnou plochu dílu.
3. Nastavte **Minimální úkos** ve stupních: nejmenší náklon, který váš proces potřebuje (často 1° až 3°).

Díl je obarven:

| Barva | Význam |
|---|---|
| Zelená: **Kladný úkos** | Nakloněno směrem k tahu alespoň o minimum: uvolní se z této poloviny formy |
| Okrová: **Potřebuje úkos** | V rámci minima na obě strany, například svislá stěna: přidejte zde úkos |
| Červená: **Záporný úkos** | Nakloněno proti tahu alespoň o minimum: uvolní se z druhé poloviny formy, nebo je podříznutí, pokud má díl vyjít z jedné poloviny |

Podíl plochy každé třídy na povrchu dílu je zobrazen vedle ní. **Obrátit tah** se dívá z druhé poloviny formy: zelená a červená se prohodí.

Zakřivené plochy se posuzují bod po bodu, takže válec ležící napříč tahu ukáže pás, který potřebuje úkos podél svých stran.

Barvy sledují díl, jak jej měníte. {{key:Esc}} nebo {{ui:Zavřít}} analýzu vypne; v dílu se nic neukládá.

:::tip
Chcete-li přidat úkos, použijte prvek {{ui:Úkos}} na okrových plochách (viz [Tažení, lofting a úkos](topic:sweep-loft-draft)) a pak kontrolu zopakujte.
:::
