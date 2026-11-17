---
title: Počnite uputstvo u Ilustraciji
summary: Radni prostor Ilustracija pravi uputstva iz vašeg dizajna: pogledi, eksplodirani linijski crteži sa balonima i spiskom delova, uputstva korak po korak, animacije i 3D datoteka koju kupac može da otvori bez CAD-a. Uputstvo je datoteka za sebe.
keywords: ilustracija, uputstvo, tehnička ilustracija, dokumentacija, eksplodirani pogled, spisak delova, uputstva, partcraft-manual
from: e447e0ab
---

**Ilustracija** je radni prostor za dokumente koji su potrebni uz dizajn: eksplodirani pogledi sa balonima i spiskom delova, linijski crteži za uputstva, uputstva korak po korak, animacije i 3D datoteka koju kupac može da otvori bez CAD-a. Izaberite {{ui:Ilustracija}} u prekidaču {{ui:Radni prostor}} na početku alatne trake.

**Uputstvo** je datoteka za sebe (`<name>.partcraft-manual.json`). Čuva kopiju oblika svakog dela, stablo proizvoda i svojstva delova, i vezu nazad ka mestu odakle su došli, tako da možete raditi na uputstvu dok dizajn ide dalje. Kada se dizajn promeni, [Ažuriraj iz dizajna](topic:illustrate-update) unosi promene.

## Započnite jedno

Kliknite {{ui:Nova}} u grupi {{ui:Uputstvo}}, zatim:

- {{ui:Iz otvorenog dela}}: deo otvoren u Dizajnu.
- {{ui:Iz otvorenog sklopa}}: prikazuje se umesto toga kada je sklop otvoren; njegovi delovi, njihovi položaji, brojevi delova, materijali i eksplodirani pogledi dolaze sa njim.
- {{ui:Iz datoteke sklopa…}}: sačuvani `.partcraft-asm.json`; PartCraft prvo pravi njegove delove.
- {{ui:Iz druge datoteke…}}: glTF (.glb, .gltf), OBJ, STL ili 3MF. Stablo i nazivi iz datoteke se čuvaju, a kopije jednog dela (isti oblik postavljen dvaput) postaju jedan deo sa količinom. STL i OBJ datoteke ne navode svoju jedinicu, pa se od vas traži. STL datoteke se čitaju sa osom Z nagore; glTF i 3MF to navode sami.

Dok je uputstvo otvoreno, Ilustracija prikazuje sopstvenu kopiju delova uputstva; deo ili sklop otvoren u Dizajnu je sakriven dok se ne vratite u Dizajn.

## Čuvanje i otvaranje

{{ui:Sačuvaj}} u grupi {{ui:Uputstvo}} (ili {{key:Mod+S}}) čuva uputstvo; {{ui:Otvori}} otvara jedno. Svaka promena u Ilustraciji je jedan korak u sopstvenoj istoriji uputstva: {{ui:Opozovi}} i {{ui:Ponovi}} deluju na uputstvo dok je Ilustracija otvorena.

## Još nije izrađeno

- Datoteke STEP se još ne otvaraju u {{ui:Iz druge datoteke…}}. Otvorite STEP u Dizajnu (dolazi kao čvrsto telo: vidi [Otvaranje STEP datoteke](topic:import-step)) i pokrenite uputstvo pomoću {{ui:Iz otvorenog dela}}, ili ga sačuvajte kao glTF, 3MF, OBJ ili STL.
- ModelCraft i BimCraft još ne mogu direktno da predaju model Ilustraciji: sačuvajte ga kao glTF (.glb) i koristite {{ui:Iz druge datoteke…}}.

Sledeće: [Pogledi i izgledi](topic:illustrate-views).
