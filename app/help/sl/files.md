---
title: Datoteke: odpiranje, shranjevanje in izvoz
summary: Datoteke delov in sestavov, ki jih PartCraft odpira in shranjuje, vsaka izvozna oblika in kaj vsebuje, kam gredo datoteke ter kaj se spremeni brez povezave in med brskalniki.
keywords: odpri, shrani, izvozi, prenesi, datoteka, partcraft.json, datoteka sestava, stl, 3mf, step, dxf, pdf, kje so moje datoteke, brez povezave, shrani kot
from: c15c2c48
---

PartCraft dela z datotekami na vašem računalniku. PartCraft nikoli ne naloži nobenega dela, računa in shrambe v oblaku ni. Shranjevanje v oblak še ni na voljo.

## Kaj PartCraft odpira

| Datoteka | Končnica | Kako |
|---|---|---|
| Del PartCraft | `.partcraft.json` | {{ui:Odpri}}, {{key:Mod+O}} ali jo spustite na 3D pogled |
| Sestav PartCraft | `.partcraft-asm.json` | Enako: PartCraft sam prepozna, za katero vrsto gre |
| Trdno telo STEP | `.step`, `.stp` | Trdno telo, prebrano kot trikotniki: [Odprite datoteko STEP in gradite nanjo](topic:import-step) |

Mreže STL, OBJ in 3MF se prav tako odprejo kot trdna telesa ([Odprite STL, OBJ ali 3MF](topic:open-meshes)), enako datoteke `.3dm` ([Odprite model .3dm](topic:open-3dm-files)). Datotek DXF, IGES in datotek delov drugih programov ni mogoče odpreti (glejte [Kaj še ni izdelano](topic:not-built-yet)).

Pravila pri odpiranju:

- Ime datoteke dela ali sestava mora končati na `.json`, datoteka pa mora biti manjša od 50 MB.
- Datoteke se preverijo, preden se kaj prikaže. Poškodovana ali urejena datoteka se zavrne s kratkim razlogom, na primer „To ni datoteka PartCraft.“
- Datoteka, shranjena z novejšim PartCraft, se zavrne: „Ta datoteka je shranjena z novejšim PartCraft (različica datoteke 3); ta podpira različico 2.“ Starejše datoteke se odprejo.
- Če ima del na zaslonu neshranjene spremembe, PartCraft najprej vpraša: {{ui:Prekliči}}, {{ui:Zavrzi spremembe}} ali {{ui:Najprej shrani}}.

## Shranjevanje

{{ui:Shrani}} ali {{key:Mod+S}} shrani, kar je na zaslonu:

- Pri delu: `<ime dela>.partcraft.json`, celotna zgodovina (skice, relacije, kote, značilke, položaj povrnitve), odsek lista risbe, podrobnosti in opombe GD&T ter celotno besedilo vsakega telesa STEP, uvoženega v prejšnji različici. Značilke, ki jih ta različica ne more izdelati, se shranijo nespremenjene. Samo trdno telo se ne shrani; PartCraft ga ob odpiranju datoteke ponovno izdela iz zgodovine.
- Pri sestavu: `<ime sestava>.partcraft-asm.json`, z **vsemi deli v njem**. Ena datoteka vsebuje ves sestav, zato jo lahko pošljete samostojno.

Shranjevanje je **prenos**. Brskalnik datoteko shrani v mapo za prenose ali vpraša, kam naj jo shrani, če ste to tako nastavili. Ponovno shranjevanje ustvari nov prenos; brskalnik lahko datoteko poimenuje `Part1 (1).partcraft.json` in ne zamenja stare. Datoteke preimenujte ali premaknite v {{pick:mac=Finder|windows=Raziskovalec datotek|linux=vašem upravitelju datotek}}, kot želite.

Znaki, razen črk, številk, presledkov, `_`, `.` in `-`, se v imenu dela v imenu datoteke spremenijo v `_`.

:::tip
Večina brskalnikov ima nastavitev, ki vpraša, kam shraniti vsak prenos. Vklopite jo, če želite pri vsakem shranjevanju izbiro „Shrani kot“: v Chromu in Edgeu je pod Prenosi v nastavitvah; v Firefoxu pod Splošno, Datoteke in aplikacije; v Safariju pod Splošno, Lokacija prenosa datotek.
:::

Več o tem, kam gredo prenosi in kako varno hraniti datoteke: [Kam gredo vaše datoteke](common:your-files).

## Izvoz

Meni {{ui:Izvoz}} zapiše druge oblike. Vsaka je prenos, poimenovan po delu.

| Element menija | Datoteka | Kaj je v njej |
|---|---|---|
| {{ui:STL, za 3D-tiskanje}} | `<ime>.stl` | Binarni STL trikotnikov trdnega telesa, milimetri, **Z navzgor** |
| {{ui:3MF, za 3D-tiskanje}} | `<ime>.3mf` | 3MF s trdnim telesom kot enim predmetom, milimetri, **Z navzgor** |
| {{ui:STEP AP242 (točno telo)}} | `<ime>.step` | V tej različici še ni izdelano (zatemnjeno): potrebuje točno jedro |
| {{ui:STEP AP214 (točno telo)}} | `<ime>.step` | V tej različici še ni izdelano (zatemnjeno) |
| {{ui:STEP (fasetiran, mrežno jedro)}} | `<ime>.step` | Trdno telo iz ravnih ploskev iz mreže: **okrogle površine so mnogo majhnih ravnih faset**. Milimetri, v lastnih osah PartCraft (Y navzgor). STEP za druge programe CAD v tej različici |
| {{ui:DXF skice ali ravne ploskve}} | `<ime> - <skica>.dxf` ali `<ime> - face.dxf` | DXF R12. Skica: črte, loki, krožnice in točke v koordinatah skice, na slojih PROFILE, CONSTRUCTION in POINTS. Izbrana ravna ploskev: njeni obrisi kot zaprte polilinije (okrogli robovi kot fasete) |
| {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}} | `<ime> - drawing.pdf` | List risbe formata A3: trije pogledi, izometrija, prerez in detajl, če sta nastavljena, skupne mere, simboli GD&T, glava risbe |

:::note
{{ui:STEP AP242 (točno telo)}} in {{ui:STEP AP214 (točno telo)}} še nista izdelana v tej različici: uporabite {{ui:STEP (fasetiran, mrežno jedro)}}. Ima pravo obliko in prostornino, vendar je vsaka okrogla ploskev mnogo ravnih faset, zato drugi programi ne morejo izbrati izvrtine kot valja. Če je to pomembno, najprej nastavite **Krivulje** na višjo vrednost.
:::

- Izvozi so iz dela, ki je na zaslonu. Izvoz je v sestavu izklopljen; izvoza sestava še ni.
- STL, 3MF, fasetiran STEP in DXF ploskve so vedno iz faset. Nastavitev **Krivulje** (v desnem podoknu, ko nič ni izbrano) določa, kako fini so: od 32 do 256 faset na obrat. Pred izvozom STL ali 3MF za gladek izpis izberite Fine ali Very fine.
- PDF risba uporablja vgrajeno pisavo Helvetica bralnika. Znaki, ki jih ne more prikazati, se natisnejo kot „?“.

Korak za korakom: [Izvoz za tiskanje, STEP in DXF](topic:export-files) in [Izdelava lista risbe](topic:drawing-pdf).

## Neshranjeno delo

- PartCraft po vsaki spremembi kratek čas hrani obnovitveno kopijo odprtega dela ali sestava v tem brskalniku, zato se ob zrušitvi ali zaprtem zavihku delo ne izgubi: ob naslednjem odprtju PartCraft vpraša „Obnovi vaše delo?“. To ni shranjevanje: za ohranitev dela ga shranite v datoteko. Glejte [Obnovitev neshranjenega dela](common:recover).
- Če poskusite zapreti zavihek ali ga ponovno naložiti z neshranjenimi spremembami, brskalnik vpraša „Zapustiti spletno mesto?“. To je okno brskalnika; PartCraft ne more spremeniti njegovega besedila.
- {{ui:Novo}}, {{ui:Odpri}} in zapiranje sestava pred zavrženjem neshranjenih sprememb vprašajo.

## Na spletu in brez povezave

Vse poteka na vašem računalniku: jedro mreže (program WebAssembly) se naloži skupaj z aplikacijo in gradi geometrijo lokalno, datoteke pa se berejo z diska in pišejo nanj. Nobeni podatki o delu ne gredo preko omrežja. Glejte [Jedro mreže](topic:solid-kernels).

Za delo brez kakršne koli povezave shranite PartCraft za uporabo brez povezave, medtem ko ste na spletu: v vrstici aplikacije izberite {{ui:Shrani za delo brez povezave}} in počakajte, medtem ko šteje („Shranjevanje 40 od 212“), dokler ne piše **Pripravljeno za delo brez povezave**. Shranjena kopija vključuje 3D knjižnico in jedro mreže, zato so potem na voljo modeliranje, shranjevanje, vsi izvozi in risbe tudi brez povezave. Če piše **Shranjevanje ni uspelo**, kliknite in poskusite znova med povezavo; **Delo brez povezave ni na voljo** pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki). Ko je kopija shranjena, klik na **Pripravljeno za delo brez povezave** ponudi {{ui:Shrani znova (pridobi najnovejšo različico)}} in {{ui:Odstrani kopijo brez povezave}}. Podrobnosti: [Delo brez povezave](common:offline).

:::online
Povezava je vzpostavljena. Tudi brez shranjevanja za delo brez povezave lahko, ko se PartCraft naloži in vrstica stanja prikaže „Jedro mreže“, nadaljujete z delom, če povezava pade. Samo stran ne nalagajte znova, dokler spet niste na spletu.
:::

:::offline
Povezave ni. Če je PartCraft že odprt, delo nadaljujte; shranjevanje in izvoz še delujeta. Če vrstica aplikacije piše **Pripravljeno za delo brez povezave**, se PartCraft odpre tudi brez povezave; sicer tega zavihka ne nalagajte znova.
:::

## Razlike med brskalniki

- **Prenosi.** Vsak brskalnik ima svojo mapo za prenose in svoj način, kako vpraša. Če brskalnik vpraša, ali to spletno mesto sme prenašati datoteke, dovolite; sicer shranjevanje in izvoz ne moreta delovati.
- **Povleci in spusti** datoteko na pogled delujeta v Chromu, Edgeu, Firefoxu in Safariju.
- **Datoteke s telefona ali tabličnega računalnika.** Na iPhoneu in iPadu Odpri pokaže aplikacijo Datoteke; shranjene datoteke gredo v Datoteke, Prenosi. Na Androidu gredo v mapo Prenosi.

Vsebina datotek se med brskalniki ali operacijskimi sistemi ne razlikuje.
