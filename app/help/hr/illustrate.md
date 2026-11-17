---
title: Početak priručnika u Ilustraciji
summary: Radni prostor Ilustracija pravi priručnike iz vašeg dizajna: poglede, rastavljene linijske crteže s balonima i popisom dijelova, upute korak po korak, animacije i 3D datoteku koju kupac može otvoriti bez CAD-a. Priručnik je zasebna datoteka.
keywords: ilustracija, priručnik, tehnička ilustracija, dokumentacija, rastavljeni pogled, popis dijelova, upute, partcraft-manual
from: e447e0ab
---

**Ilustracija** je radni prostor za dokumente koji su ljudima potrebni uz dizajn: rastavljene poglede s balonima i popisom dijelova, linijske ilustracije za priručnike, upute korak po korak, animacije i 3D datoteku koju kupac može otvoriti bez CAD-a. Odaberite {{ui:Ilustracija}} u preklopniku {{ui:Radni prostor}} na početku trake s alatima.

**Priručnik** je zasebna datoteka (`<name>.partcraft-manual.json`). Čuva kopiju oblika svakog dijela, stablo proizvoda i svojstva dijelova te vezu natrag na mjesto odakle dolaze, pa možete raditi na priručniku dok dizajn ide dalje. Kad se dizajn promijeni, [Ažuriraj iz dizajna](topic:illustrate-update) unosi promjene.

## Početak

Kliknite {{ui:Novo}} u grupi {{ui:Priručnik}}, zatim:

- {{ui:Iz otvorenog dijela}}: dio otvoren u Dizajnu.
- {{ui:Iz otvorenog sklopa}}: prikazuje se umjesto toga kad je sklop otvoren; njegovi dijelovi, njihovi položaji, brojevi dijelova, materijali i rastavljeni pogledi dolaze sa sobom.
- {{ui:Iz datoteke sklopa…}}: spremljena `.partcraft-asm.json`; PartCraft prvo izrađuje njezine dijelove.
- {{ui:Iz druge datoteke…}}: glTF (.glb, .gltf), OBJ, STL ili 3MF. Stablo i nazivi datoteke ostaju sačuvani, a kopije jednog dijela (isti oblik postavljen dvaput) postaju jedan dio s količinom. STL i OBJ datoteke ne navode svoju jedinicu, pa se od vas traži. STL datoteke se čitaju s Z prema gore; glTF i 3MF navode svoje.

Dok je priručnik otvoren, Ilustracija prikazuje vlastitu kopiju dijelova priručnika; dio ili sklop otvoren u Dizajnu skriven je dok se ne vratite u Dizajn.

## Spremanje i otvaranje

{{ui:Spremi}} u grupi {{ui:Priručnik}} (ili {{key:Mod+S}}) sprema priručnik; {{ui:Otvori}} otvara jedan. Svaka promjena u Ilustraciji je jedan korak u vlastitoj povijesti priručnika: {{ui:Poništi}} i {{ui:Ponovi}} djeluju na priručnik dok je Ilustracija otvorena.

## Još nije izrađeno

- Datoteke STEP se još ne otvaraju u {{ui:Iz druge datoteke…}}. Otvorite STEP u Dizajnu (dolazi kao puno tijelo: vidi [Otvaranje STEP datoteke i rad na njoj](topic:import-step)) i pokrenite priručnik {{ui:Iz otvorenog dijela}}, ili ga spremite kao glTF, 3MF, OBJ ili STL.
- ModelCraft i BimCraft još ne mogu izravno predati model Ilustraciji: spremite ga kao glTF (.glb) i upotrijebite {{ui:Iz druge datoteke…}}.

Sljedeće: [Pogledi i izgledi](topic:illustrate-views).
