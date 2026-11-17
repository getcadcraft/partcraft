---
title: Salvesta, ava uuesti ja jätka tööd
summary: Salvesta detailid ja koosteid arvutisse, nimeta need, ava need uuesti nupu, klahvi või lohistamisega, hoia versioone ja väldi töö kadumist brauseri vahelehel.
keywords: salvesta, ava, ava uuesti, laadi, allalaadimine, versioonid, varukoopia, ümbernimetamine, failinimi, kadunud töö, lahku lehelt, partcraft.json, partcraft-asm.json, uus detail
from: c18a5abc
---

PartCraft ei hoia midagi külastuste vahel. Sinu detail elab brauseri vahelehel, kuni salvestad selle failina, ja tuleb tagasi, kui selle faili avad.

## Detaili salvestamine

1. Nimeta detail: klõpsa vaates tühjale alale, et midagi poleks valitud, kirjuta paremas paneelis **Nimi** ja vajuta {{key:Enter}}. Ajaloo pealkiri muutub vastavalt.
2. Vajuta {{key:Mod+S}} või vali {{ui:Salvesta}}.
3. Brauser laadib alla faili `<nimi>.partcraft.json`. Olekuriba ütleb: „Salvestatud Bracket.partcraft.json (kogu ajalugu; ava see siin uuesti, et jätkata muutmist).“

Kui visand on avatud, sulgeb salvestamine selle enne.

Fail sisaldab iga visandit, seost, mõõtu ja elementi, samuti peidetud elemente, tagasikerimise asendit, joonislehe sätteid ja GD&T märkmeid ning imporditud STEP-tahke täielikku teksti. Sinu tagasivõtmise nimekirja ei salvestata.

## Koosteti salvestamine

Koosteti puhul laadib {{ui:Salvesta}} või {{key:Mod+S}} alla faili `<koosteti nimi>.partcraft-asm.json`. Iga detail on selle sees salvestatud: koosteti uuesti avamiseks pole vaja eraldi detailifaile.

Kui muudad detaili koosteti seest, salvestab {{key:Mod+S}} selle detaili eraldi failina `.partcraft.json`. Kogu koosteti salvestamiseks vali enne {{ui:Tagasi}} ja salvesta siis.

## Uuesti avamine

Mõni neist:

- vali {{ui:Ava}} või vajuta {{key:Mod+O}} ja vali fail;
- lohista fail {{pick:mac=Finder|windows=Windowsi Explorer|linux=failihaldur}} 3D-vaatele („Lohista PartCraft'i detail avamiseks siia“ ilmub).

PartCraft eristab detaile koosteist sisu järgi, nii et mõlemad avanevad samamoodi. Fail `.step` või `.stp` avaneb imporditud tahkena: vaata [Ava STEP-fail ja ehita selle põhjal](topic:import-step). Olekuriba kinnitab: „Avatud Bracket.partcraft.json: 7 elementi.“ või „Avatud Hinge.partcraft-asm.json: 3 detaili, 2 liidest.“

Kui ekraanil olev detail sisaldab salvestamata muudatusi, küsib PartCraft kõigepealt: {{ui:Loobu}}, {{ui:Loobu muudatustest}} või {{ui:Salvesta kõigepealt}}.

:::warning
Sulge kooste ({{ui:Sulge}}) enne detailifaili avamist. Kui avad detaili, kui koosteti on ekraanil, laaditakse detail koosteti taha ja näed seda alles pärast koosteti sulgemist. Koosteti faili avamine asendab salvestamata koosteti ilma küsimata, seega salvesta see enne.
:::

## Alustamine otsast

{{ui:Uus}} alustab tühja detailiga „Part1“. See küsib enne, kui on salvestamata muudatusi, ja sulgeb avatud koosteti (küsides, kui see on salvestamata).

## Versioonide hoidmine

Iga salvestus on uus allalaadimine, nii et versioone saab hoida lihtsalt failide alles jätmisega:

- Lisa nimele enne salvestamist versioon või kuupäev: „Bracket rev B“.
- Brauser võib lisada „ (1)“, „ (2)“, kui samanimeline fail on allalaadimiste kaustas juba olemas. Uusim on see, mille number on suurim, või vaata kuupäeva kohast {{pick:mac=Finder|windows=Windowsi Explorer|linux=failihaldur}}.
- Liiguta valminud failid allalaadimiste kaustast oma projektikausta.

Vaata [Kuhu sinu failid lähevad](common:your-files), kus allalaadimised igas süsteemis asuvad.

## Ära kaota tööd

- Salvesta enne vahelehe sulgemist, lehe uuesti laadimist või enne, kui arvuti pikemaks ajaks unerežiimi läheb. Brauser küsib „Lahku lehelt?“, kui proovid sulgeda salvestamata muudatustega, aga krahh või suletud sülearvuti ei anna mingit hoiatust.
- Privaatsed ja inkognito aknad töötavad, kuid muud ei erine: fail on ikka ainus koopia.
- Pilvesalvestus ja versioonide ajalugu pole veel saadaval.
