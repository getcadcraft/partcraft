---
title: Počnite priručnik u radnom prostoru Ilustracija
summary: Radni prostor Ilustracija pravi priručnike iz vašeg dizajna: poglede, razvučene linijske crteže sa balončićima i spiskom dijelova, uputstva korak po korak, animacije i 3D datoteku koju kupac može otvoriti bez CAD-a. Priručnik je datoteka za sebe.
keywords: ilustracija, priručnik, tehnička ilustracija, dokumentacija, rastavljeni pogled, spisak dijelova, uputstva, partcraft-manual
from: e447e0ab
---

**Ilustracija** je radni prostor za dokumente koji su ljudima potrebni uz dizajn: rastavljeni pogledi sa balončićima i spiskom dijelova, linijski crteži za priručnike, uputstva korak po korak, animacije i 3D datoteka koju kupac može otvoriti bez CAD-a. Izaberite {{ui:Ilustracija}} u prekidaču {{ui:Radni prostor}} na početku trake sa alatima.

**Priručnik** je datoteka za sebe (`<name>.partcraft-manual.json`). Čuva kopiju oblika svakog dijela, stablo proizvoda i svojstva dijelova, te vezu nazad na mjesto odakle su došli, pa možete raditi na priručniku dok dizajn ide dalje. Kad se dizajn promijeni, [Ažuriranje iz dizajna](topic:illustrate-update) unosi promjene.

## Počnite jedan

Kliknite {{ui:Novo}} u grupi {{ui:Priručnik}}, zatim:

- {{ui:Iz otvorenog dijela}}: dio otvoren u Dizajnu.
- {{ui:Iz otvorenog sklopa}}: prikazuje se umjesto toga kad je sklop otvoren; njegovi dijelovi, njihova mjesta, brojevi dijelova, materijali i rastavljeni pogledi dolaze sa njim.
- {{ui:Iz datoteke sklopa…}}: sačuvani `.partcraft-asm.json`; PartCraft prvo pravi njegove dijelove.
- {{ui:Iz druge datoteke…}}: glTF (.glb, .gltf), OBJ, STL ili 3MF. Stablo i nazivi iz datoteke se čuvaju, a kopije jednog dijela (isti oblik postavljen dvaput) postaju jedan dio sa količinom. STL i OBJ datoteke ne navode svoju jedinicu, pa se ona traži. STL datoteke se čitaju sa osom Z prema gore; glTF i 3MF navode svoju.

Dok je priručnik otvoren, Ilustracija prikazuje vlastitu kopiju dijelova priručnika; dio ili sklop otvoren u Dizajnu je skriven dok se ne vratite u Dizajn.

## Spašavanje i otvaranje

{{ui:Spasi}} u grupi {{ui:Priručnik}} (ili {{key:Mod+S}}) spašava priručnik; {{ui:Otvori}} otvara jedan. Svaka promjena u Ilustraciji je jedan korak u vlastitoj historiji priručnika: {{ui:Poništi}} i {{ui:Ponovi}} djeluju na priručnik dok je Ilustracija otvorena.

## Još nije izrađeno

- STEP datoteke se još ne otvaraju u {{ui:Iz druge datoteke…}}. Otvorite STEP u Dizajnu (dolazi kao čvrsto tijelo: vidi [Otvaranje STEP datoteke](topic:import-step)) i pokrenite priručnik sa {{ui:Iz otvorenog dijela}}, ili ga spasite kao glTF, 3MF, OBJ ili STL.
- ModelCraft i BimCraft još ne mogu direktno predati model Ilustraciji: spasite ga kao glTF (.glb) i koristite {{ui:Iz druge datoteke…}}.

Dalje: [Pogledi i izgledi](topic:illustrate-views).
