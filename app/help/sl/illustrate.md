---
title: Začnite priročnik v Illustrate
summary: Delovno okolje Illustrate pripravi priročnike iz vašega načrta: poglede, razstavljeno črtno risbo z oblački in kosovnico, navodila po korakih, animacije in interaktivno 3D-datoteko. Priročnik je datoteka zase.
keywords: illustrate, priročnik, tehnična ilustracija, dokumentacija, razstavljeni pogled, kosovnica, navodila, partcraft-manual
from: e447e0ab
---

**Illustrate** je delovno okolje za dokumente, ki jih ljudje potrebujejo ob načrtu: razstavljeni pogledi z oblački in kosovnico, črtne ilustracije za priročnike, navodila po korakih, animacije ter 3D-datoteka, ki jo stranka lahko odpre brez CAD-a. Izberite {{ui:Illustrate}} v preklopniku {{ui:Delovno okolje}} na začetku orodne vrstice.

Priročnik je datoteka zase (`<ime>.partcraft-manual.json`). Hrani kopijo oblike vsakega dela, drevo izdelka in lastnosti delov ter povezavo nazaj do njihovega izvora, tako da lahko delate na priročniku, medtem ko se načrt nadaljuje. Ko se načrt spremeni, [Posodobi iz načrta](topic:illustrate-update) prinese spremembe.

## Začetek

Kliknite {{ui:Novo}} v skupini {{ui:Priročnik}}, nato:

- {{ui:Iz odprtega dela}}: del, odprt v Načrtovanju.
- {{ui:Iz odprtega sestava}}: prikaže se namesto tega, kadar je odprt sestav; njegovi deli, njihovi položaji, številke delov, materiali in razstavljeni pogledi pridejo s seboj.
- {{ui:Iz datoteke sestava…}}: shranjena `.partcraft-asm.json`; PartCraft najprej zgradi njegove dele.
- {{ui:Iz druge datoteke…}}: glTF (.glb, .gltf), OBJ, STL ali 3MF. Drevo in imena datoteke ostanejo, kopije enega dela (ista oblika, postavljena dvakrat) pa postanejo en del s količino. Datoteki STL in OBJ ne povesta svoje enote, zato vas vprašamo. Datoteke STL se berejo z Z navzgor; glTF in 3MF povesta sama.

Medtem ko je priročnik odprt, Illustrate prikazuje lastno kopijo delov priročnika; del ali sestav, odprt v Načrtovanju, je skrit, dokler se ne vrnete v Načrtovanje.

## Shranjevanje in odpiranje

{{ui:Shrani}} v skupini {{ui:Priročnik}} (ali {{key:Mod+S}}) shrani priročnik; {{ui:Odpri}} odpre enega. Vsaka sprememba v Illustrate je en korak v zgodovini priročnika: {{ui:Razveljavi}} in {{ui:Uveljavi}} delujeta na priročniku, dokler je Illustrate odprt.

## Še ni izdelano

- Datoteke STEP v {{ui:Iz druge datoteke…}} še ne odprejo. Odprite STEP v Načrtovanju (pride kot polno telo; glejte [Odpiranje datoteke STEP](topic:import-step)) in začnite priročnik {{ui:Iz odprtega dela}}, ali ga shranite kot glTF, 3MF, OBJ ali STL.
- ModelCraft in BimCraft še ne morejo model neposredno poslati v Illustrate: shranite ga kot glTF (.glb) in uporabite {{ui:Iz druge datoteke…}}.

Naprej: [Pogledi in videz](topic:illustrate-views).
