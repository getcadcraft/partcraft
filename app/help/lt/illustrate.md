---
title: Vadovo kūrimas darbo srityje Iliustracija
summary: Iliustracijos darbo sritis kuria vadovus iš jūsų projekto: vaizdus, išskleistą linijinę grafiką su balionais ir detalių sąrašu, žingsnis po žingsnio instrukcijas, animacijas ir 3D failą, kurį klientas gali atidaryti be CAD. Vadovas yra atskiras failas.
keywords: iliustracija, vadovas, techninė iliustracija, dokumentacija, išskleistas vaizdas, detalių sąrašas, instrukcijos, partcraft-manual
from: e447e0ab
---

**Iliustracija** – tai darbo sritis dokumentams, kurių reikia aplink projektą: išskleistiems vaizdams su balionais ir detalių sąrašu, linijinės grafikos iliustracijoms vadovams, žingsnis po žingsnio instrukcijoms, animacijoms ir 3D failui, kurį klientas gali atidaryti be CAD. Pasirinkite {{ui:Iliustracija}} įrankių juostos pradžioje esančiame {{ui:Darbo sritis}} perjungiklyje.

**Vadovas** yra atskiras failas (`<name>.partcraft-manual.json`). Jame saugoma kiekvienos detalės formos kopija, produktų medis, detalių savybės ir nuoroda į jų šaltinį, todėl galite dirbti su vadovu, kol projektas tęsiasi. Pasikeitus projektui, [Atnaujinti pagal projektą](topic:illustrate-update) perkelia pakeitimus.

## Pradėti vadovą

Spustelėkite {{ui:Naujas}} grupėje {{ui:Vadovas}}, tada:

- {{ui:Iš atidarytos detalės}}: detalė, atidaryta projektavime.
- {{ui:Iš atidaryto surinkimo}}: rodoma vietoj jos, kai atidarytas surinkimas; jo detalės, jų vietos, detalių numeriai, medžiagos ir išskleisti vaizdai perkeliami kartu.
- {{ui:Iš surinkimo failo…}}: įrašytas `.partcraft-asm.json`; PartCraft pirmiausia sukuria jo detales.
- {{ui:Iš kito failo…}}: glTF (.glb, .gltf), OBJ, STL arba 3MF. Failo medis ir pavadinimai išlaikomi, o vienos detalės kopijos (ta pati forma įdėta du kartus) tampa viena detale su kiekiu. STL ir OBJ failai nenurodo savo matavimo vieneto, todėl jo klausiama. STL failai nuskaitomi su Z ašimi viršuje; glTF ir 3MF nurodo savo.

Kol vadovas atidarytas, Iliustracija rodo paties vadovo detalių kopijas; detalė arba surinkimas, atidaryti projektavime, paslepiami, kol negrįšite į projektavimą.

## Įrašymas ir atidarymas

{{ui:Įrašyti}} grupėje {{ui:Vadovas}} (arba {{key:Mod+S}}) įrašo vadovą; {{ui:Atidaryti}} atidaro vieną. Kiekvienas pakeitimas Iliustracijoje yra vienas žingsnis vadovo istorijoje: {{ui:Anuliuoti}} ir {{ui:Perdaryti}} veikia vadovą, kol Iliustracija atidaryta.

## Dar neįgyvendinta

- STEP failai dar neatsidaro per {{ui:Iš kito failo…}}. Atidarykite STEP projektavime (jis įkeliamas kaip kietasis kūnas: žr. [Atidaryti STEP failą](topic:import-step)) ir pradėkite vadovą {{ui:Iš atidarytos detalės}}, arba įrašykite jį kaip glTF, 3MF, OBJ ar STL.
- ModelCraft ir BimCraft dar negali tiesiogiai perduoti modelio Iliustracijai: įrašykite jį kaip glTF (.glb) ir naudokite {{ui:Iš kito failo…}}.

Toliau: [Vaizdai ir išvaizda](topic:illustrate-views).
