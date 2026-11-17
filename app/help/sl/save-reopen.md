---
title: Shranjevanje, ponovno odpiranje in nadaljevanje dela
summary: Shranite dele in sestave na svoj računalnik, jih poimenujte, ponovno odprite z gumbom, tipko ali s povlečenjem, hranite različice in se izognite izgubi dela v zavihku brskalnika.
keywords: shrani, odpri, ponovno odpri, naloži, prenesi, različice, varnostna kopija, preimenuj, ime datoteke, izgubljeno delo, zapusti spletno mesto, partcraft.json, partcraft-asm.json, nov del
from: c18a5abc
---

PartCraft med obiskoma ničesar ne hrani. Vaš del živi v zavihku brskalnika, dokler ga ne shranite kot datoteko, in se vrne, ko to datoteko odprete.

## Shranjevanje dela

1. Poimenujte del: kliknite prazen prostor v pogledu, tako da nič ni izbrano, nato v desnem podoknu vpišite **Ime** in pritisnite {{key:Enter}}. Glava zgodovine se spremeni, da ustreza.
2. Pritisnite {{key:Mod+S}} ali izberite {{ui:Shrani}}.
3. Brskalnik prenese `<ime>.partcraft.json`. Vrstica stanja pokaže: "Shranjeno: Bracket.partcraft.json (celotna zgodovina; ponovno jo odprite tukaj, da nadaljujete urejanje)."

Če je odprta skica, jo shranjevanje najprej zapre.

Datoteka vsebuje vsako skico, relacijo, koto in značilko, potlačene značilke, položaj vrnitve, nastavitve lista risbe in opombe GD&T ter celotno besedilo vsakega uvoženega telesa STEP. Vaš seznam razveljavitev se ne shrani.

## Shranjevanje sestave

V sestavi isti {{ui:Shrani}} ali {{key:Mod+S}} prenese `<ime sestave>.partcraft-asm.json`. Vsak del je shranjen v njej: za ponovno odprtje ne potrebujete ločenih datotek delov.

Medtem ko urejate del znotraj sestave, {{key:Mod+S}} shrani ta del sam kot `.partcraft.json`. Najprej izberite {{ui:Nazaj}}, nato shranite, da shranite celotno sestavo.

## Ponovno odpiranje

Kateri koli od teh načinov:

- izberite {{ui:Odpri}} ali pritisnite {{key:Mod+O}}, nato izberite datoteko;
- povlecite datoteko iz {{pick:mac=Finder|windows=Raziskovalec|linux=upravitelj datotek}} na 3D-pogled (prikaže se "Spustite datoteko dela PartCraft, da jo odprete").

PartCraft loči dele od sestav po vsebini, zato se oboje odpre enako. Datoteka `.step` ali `.stp` se odpre kot uvoženo telo: glejte [Odprite datoteko STEP in nadaljujte z gradnjo](topic:import-step). Vrstica stanja potrdi: "Odprto: Bracket.partcraft.json: 7 značilk." ali "Odprto: Hinge.partcraft-asm.json: 3 deli, 2 spoja."

Če ima del na zaslonu neshranjene spremembe, PartCraft najprej vpraša: {{ui:Prekliči}}, {{ui:Zavrzi spremembe}} ali {{ui:Najprej shrani}}.

:::warning
Pred odpiranjem datoteke dela zaprite sestavo ({{ui:Zapri}}). Če odprete del, medtem ko je sestava na zaslonu, se del naloži za sestavo in ga vidite šele po zaprtju sestave. Odpiranje datoteke sestave tudi nadomesti neshranjeno sestavo brez vprašanja, zato jo najprej shranite.
:::

## Začni znova

{{ui:Novo}} začne prazen "Part1". Če so neshranjene spremembe, najprej vpraša, in zapre odprto sestavo (če je neshranjena, tudi to vpraša).

## Hranjenje različic

Vsako shranjevanje je nov prenos, zato različice hranite preprosto tako, da hranite datoteke:

- Pred shranjevanjem dodajte različico ali datum v ime: "Bracket rev B".
- Brskalnik lahko doda " (1)" ali " (2)", kadar je datoteka z istim imenom že v mapi za prenose. Najnovejša je tista z največjo številko; lahko pa preverite datum v {{pick:mac=Finder|windows=Raziskovalec|linux=upravitelj datotek}}.
- Dokončane datoteke premaknite iz mape za prenose v mapo projekta.

Glejte [Kam gredo vaše datoteke](common:your-files), kje so prenosi na posameznem sistemu.

## Ne izgubite dela

- Shranite, preden zaprete zavihek, ponovno naložite stran ali pustite računalnik dlje časa v spanju. Brskalnik vpraša "Zapusti spletno mesto?", če poskusite zapreti z neshranjenimi spremembami, vendar sesutje ali zaprt prenosnik ne dasta nobenega opozorila.
- Zasebna ali inkognito okna delujejo, vendar nič drugega ni drugače: datoteka je še vedno edina kopija.
- Shranjevanje v oblak in zgodovina različic še nista na voljo.
