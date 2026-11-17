---
title: Ponuky, klávesy a myš
summary: Vyberte štýl ponuky, ktorý sa hodí k tomu, ako už pracujete, priraďte ľubovoľnému príkazu vlastný kláves, presuňte príkazy medzi karty pásu a nastavte, čo robí koliesko a každé tlačidlo myši v 3D zobrazení.
keywords: štýl ponuky, ponuky, pás, panel nástrojov, strom prvkov, klávesové skratky, horúce klávesy, klávesy, prispôsobiť, premapovať, myš, koliesko, obrátiť, smer priblíženia, stredné tlačidlo, obiehanie, posun, export, import, prepínanie, známe
from: 8445b06c
---

Príkazy PartCraft sú rovnaké, bez ohľadu na to, ako sa k nim dostanete. **Štýl ponuky** len rozhoduje, kde sú na obrazovke, ako sa tam volajú a ktoré klávesy ich spúšťajú. Vyberte ho v {{ui:Nastavenia}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Ponuky, klávesy a myš}}; zmena je okamžitá a tento prehliadač si ju pamätá.

## Dva štýly

| Štýl | Čo dostanete |
|---|---|
| {{ui:PartCraft}} | Vlastný panel nástrojov PartCraft: prepínač pracovných priestorov, Súbor, Náčrt, Prvky, Výkres, Zostava, Upraviť a Zobrazenie. Klávesy {{key:S}} náčrt, {{key:F}} prispôsobiť, {{key:M}} merať, {{key:X}} rezný pohľad. Východisko. |
| {{ui:Strom prvkov}} | Pás usporiadaný tak, ako majú svoje pásy programy mechanického CAD založené na prvkoch: ponuka {{ui:Súbor}} (so všetkými exportmi), rýchle tlačidlá a karty {{ui:Prvky}}, {{ui:Náčrt}}, {{ui:Plochy}}, {{ui:Vyhodnotiť}}, {{ui:Výkres}}, {{ui:Zostava}}, {{ui:Štúdie}} (pracovné priestory a ich nástroje), {{ui:Ilustrácia}} (ručné nástroje pracovného priestoru Ilustrácia; jeho nástroje najprv prepnú na Ilustráciu) a {{ui:Zobrazenie}}. {{ui:Prvky}} začína s {{ui:Náčrt}}, lebo súčiastka začína náčrtom. Dodatočné klávesy: {{key:E}} vytiahnutie, {{key:H}} diera a {{key:V}} potom písmeno pre pohľad: {{key:V}} {{key:F}} predný, {{key:V}} {{key:B}} zadný, {{key:V}} {{key:T}} horný, {{key:V}} {{key:O}} spodný, {{key:V}} {{key:R}} pravý, {{key:V}} {{key:L}} ľavý, {{key:V}} {{key:I}} izometrický, {{key:V}} {{key:N}} kolmo na. V 3D zobrazení stredné tlačidlo obieha, {{key:Shift}} so stredným alebo pravým tlačidlom posúva, pravé tlačidlo posúva a ľavé len vyberá. |

Každý štýl si ponecháva {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} a {{key:Mod+A}}.

Nástroj iného pracovného priestoru najprv prepne na jeho pracovný priestor; nástroj Návrh vybraný v inom pracovnom priestore najprv vráti do Návrhu. Nástroje náčrtu čakajú na náčrt, kreslené nástroje na list výkresu, nástroje zostavy na zostavu: stavový riadok povie, čo treba urobiť najprv.

:::tip
V náčrte, na liste výkresu, v zostave a v ostatných pracovných priestoroch si písmená zachovávajú svoj význam ({{key:L}} úsečka, {{key:R}} obdĺžnik, {{key:J}} spoj …) vo všetkých štýloch. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šípky si vždy zachovávajú svoj význam. Kláves z rozloženia PartCraft, ktorý váš štýl dal inému príkazu, nerobí nič, a stavový riadok povie, kam sa jeho príkaz presunul.
:::

## Prispôsobte si to

1. Vyberte štýl, ktorý sa najviac blíži tomu, čo chcete, potom kliknite na {{ui:Prispôsobiť…}}.
2. Na {{ui:Klávesy a ponuky}} nájdite príkaz (pomôže vyhľadávacie pole). {{ui:Pridať kláves}} a stlačte kláves, alebo dva klávesy za sebou. Kliknutím na kláves ho odstránite.
3. Pri páse {{ui:Kde sa nachádza}} presuňte príkaz na inú kartu a panel, do ponuky {{ui:Súbor}} alebo na {{ui:Iba klávesy}}.
4. Na {{ui:Myš}} nastavte koliesko, tlačidlá, ktoré posúvajú náčrt, a čo robí každé tlačidlo v 3D zobrazení.
5. Dajte mu názov a kliknite na {{ui:Uložiť}}.

Uložením vstavaného štýlu vznikne vaša vlastná kópia („Môj strom prvkov“); vstavaný sa nikdy nezmení. Kláves priradený dvom príkazom, alebo taký, ktorý by sa spustil skôr, než sa dá napísať dvojpísmenový kláves, sa zobrazí červene a pred uložením ho treba opraviť.

## Myš

- **Koliesko myši**: {{ui:Posun nahor priblíži}} (východisko) alebo {{ui:Posun nahor oddiali}}, a ako rýchlo. Štipnutie na touchpade vždy priblíži podľa pohybu prstov.
- **Posun náčrtu**: stredným tlačidlom, pravým, alebo oboma. Pravé kliknutie v náčrte stále ukončí krok nástroja.
- **Ťahanie v 3D zobrazení**: {{ui:Podľa zobrazenia}} zachováva nastavenie PartCraft ({{ui:Nastavenia}} › {{ui:PartCraft}}: ľavé obieha, alebo stredné obieha). Alebo nastavte každé tlačidlo na obiehanie, posun, priblíženie alebo nič; {{key:Shift}} s tlačidlom obiehania posúva. Kliknutie bez ťahania stále vyberá.

## Vezmite si to so sebou

{{ui:Export}} uloží používaný štýl ako malý súbor `.ccinput.json`; {{ui:Importovať…}} ho pridá, z iného počítača alebo od kolegu. Importovaný súbor môže ukazovať len na vlastné príkazy PartCraft: čokoľvek iné sa vynechá a v stavovom riadku sa spočíta. {{ui:Zmazať tento štýl}} odstráni niektorý z vašich vlastných.

:::note
Tieto nastavenia zostávajú v tomto prehliadači. {{ui:Použiť tento štýl v každej aplikácii}} pod kartami štýlov zaistí, že každá aplikácia sa otvorí v zodpovedajúcom štýle (vlastný panel nástrojov alebo pás), so zmenami, ktoré ste urobili v každej aplikácii. Voľba iného štýlu v jednej aplikácii mení len tú jednu.
:::

Súvisiace: [Klávesy a myš](topic:keyboard) · [Nastavenia PartCraft](topic:settings) · [Prechod z iného parametrického modelára](topic:coming-from)
