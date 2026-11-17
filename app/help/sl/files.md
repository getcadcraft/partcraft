---
title: Datoteke: odpiranje, shranjevanje in izvoz
summary: Datoteke dela in sestava, ki jih PartCraft odpira in shranjuje, vsak izvozni format in kaj ohrani, kam gredo datoteke ter kaj se spremeni brez povezave ali med brskalniki.
keywords: odpri, shrani, izvozi, prenesi, datoteka, partcraft.json, datoteka sestava, stl, 3mf, step, dxf, pdf, kje so moje datoteke, brez povezave, shrani kot
from: e5fbc7e3
---

PartCraft dela z datotekami na vašem računalniku. Nikoli ne naloži dela in ne vključuje računa ali shrambe v oblaku. Shranjevanje v oblak še ni na voljo.

## Kaj PartCraft odpre

| Datoteka | Končnica | Kako |
|---|---|---|
| Del PartCraft | `.partcraft.json` | {{ui:Odpri}}, {{key:Mod+O}}, ali ga spustite v 3D pogled |
| Sestav PartCraft | `.partcraft-asm.json` | Enako: PartCraft ve, katera vrsta je |
| Telo STEP | `.step`, `.stp` | Telo, prebrano kot trikotniki: [Odprite datoteko STEP in gradite nanjo](topic:import-step) |

STL, OBJ in 3MF mreže se prav tako odprejo kot telesa ([Odprite STL, OBJ ali 3MF](topic:open-meshes)), enako datoteke `.3dm` ([Odprite model .3dm](topic:open-3dm-files)). DXF, IGES in lastnih datotek delov drugih programov ni mogoče odpreti (glejte [Kaj še ni izdelano](topic:not-built-yet)).

Pravila pri odpiranju:

- Ime datoteke dela ali sestava se mora končati z `.json`, datoteka pa mora biti manjša od 50 MB.
- Datoteke se preverijo, preden se kaj prikaže. Poškodovana ali urejena datoteka je zavrnjena z jasnim razlogom, na primer "To ni datoteka PartCraft."
- Datoteka, shranjena z novejšim PartCraft, je zavrnjena: "Ta datoteka je shranjena z novejšim PartCraft (različica datoteke 3); ta bere različico 2." Starejše datoteke se odprejo.
- Če ima del na zaslonu neshranjene spremembe, PartCraft najprej vpraša: {{ui:Prekliči}}, {{ui:Zavrzi spremembe}} ali {{ui:Najprej shrani}}.

## Shranjevanje

{{ui:Shrani}} ali {{key:Mod+S}} shrani, kar je na zaslonu:

- Pri delu: `<ime dela>.partcraft.json`, celotna zgodovina (skice, relacije, mere, značilke, položaj povrnitve), opombe o prerezu, detajlu in GD&T lista risbe ter celotno besedilo vsakega telesa STEP, uvoženega v prejšnji različici. Značilke, ki jih ta različica ne more zgraditi, se shranijo nespremenjene. Samo telo se ne shrani; PartCraft ga ob odpiranju datoteke obnovi iz zgodovine.
- V sestavu: `<ime sestava>.partcraft-asm.json`, z **vsemi deli znotraj**. Ena datoteka nosi cel sestav, zato ga lahko pošljete samostojno.

Shranjevanje je **prenos**. Brskalnik da datoteko v svojo mapo za prenose ali vpraša, kam jo shraniti, če ste to nastavili. Ponovno shranjevanje ustvari nov prenos; brskalnik lahko poimenuje `Part1 (1).partcraft.json` namesto zamenjave stare. Datoteke preimenujte ali premaknite v {{pick:mac=Finder|windows=Raziskovalec|linux=upravitelj datotek}}, kakor želite.

Znaki, razen črk, številk, presledkov, `_`, `.` in `-`, v imenu dela postanejo `_` v imenu datoteke.

:::tip
Večina brskalnikov ima nastavitev, ki vpraša, kam shraniti vsak prenos. Vklopite jo, če želite izbiro „Shrani kot“ vsakič: v Chrome in Edge je pod Prenosi v nastavitvah; v Firefoxu pod Splošno, Datoteke in aplikacije; v Safariju pod Splošno, lokacija prenosa datotek.
:::

Več o tem, kam gredo prenosi in kako varno hraniti datoteke: [Kje so vaše datoteke](common:your-files).

## Izvoz

Meni {{ui:Izvoz}} zapiše druge formate. Vsak je prenos in se poimenuje po delu.

| Element menija | Datoteka | Kaj je v njej |
|---|---|---|
| {{ui:STL, za 3D-tiskanje}} | `<ime>.stl` | Binarni STL trikotnikov telesa, milimetri, **Z navzgor** |
| {{ui:3MF, za 3D-tiskanje}} | `<ime>.3mf` | 3MF s telesom kot enim predmetom, milimetri, **Z navzgor** |
| {{ui:STEP AP242 (točno telo)}} | `<ime>.step` | Eno točno telo, milimetri, Z navzgor: okrogle ploskve kot pravi valji, stožci, krogle in tori. STEP za druge programe CAD in CAM |
| {{ui:STEP AP214 (točno telo)}} | `<ime>.step` | Isto točno telo v starejši shemi AP214 |
| {{ui:STEP (fasetiran, mrežno jedro)}} | `<ime>.step` | Telo iz ravnih ploskev iz mreže: **okrogle površine so mnogo majhnih ravnih fasetov**. Milimetri, v lastnih oseh PartCraft (Y navzgor). Za program, ki zavrne točno datoteko |
| {{ui:DXF skice ali ravne ploskve}} | `<ime> - <skica>.dxf` ali `<ime> - face.dxf` | DXF R12. Skica: črte, loki, krogi in točke v lastnih koordinatah skice, na slojih PROFILE, CONSTRUCTION in POINTS. Izbrana ravna ploskev: njeni obrisi kot zaprte polilinije (okrogli robovi kot njihovi fasete) |
| {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}} | `<ime> - drawing.pdf` | List risbe A3: trije pogledi, izometrija, prerez in detajl, če sta nastavljena, skupne mere, simboli GD&T, glava risbe |

:::note
{{ui:STEP AP242 (točno telo)}} zapiše izvrtine, izboklina, zaokrožitve, stožce, krogle in tori na njihovih pravih površinah, tako da lahko drug program izvrtino izbere kot valj; **Krivulje** tega ne spremenijo. Stranice zlepkov, modelirani navoji in uvožene mreže nimajo točne površine in ostanejo ravni fasetni v istem telesu; vrstica stanja pove, koliko jih je. {{ui:STEP (fasetiran, mrežno jedro)}} zapiše vsako okroglo ploskev kot fasete.
:::

- Izvozi so dela na zaslonu. Izvoz je v sestavu onemogočen; izvoz sestava še ni na voljo.
- STL, 3MF, fasetirani STEP in fasetna DXF ploskev so vedno sestavljeni iz fasetov. Nastavitev **Krivulje** (v desnem podoknu, ko nič ni izbrano) določa, kako fini so, od 32 do 256 fasetov na obrat. Pred izvozom STL ali 3MF za gladek tisk izberite Fina ali Zelo fina.
- PDF risba uporablja vgrajeno pisavo Helvetica bralnika. Znaki, ki jih ne more prikazati, se natisnejo kot "?".

Korak za korakom: [Izvoz za tiskanje, STEP in DXF](topic:export-files) in [Izdelava lista risbe](topic:drawing-pdf).

## Neshranjeno delo

- PartCraft hrani kopijo za obnovitev odprtega dela ali sestava v tem brskalniku kmalu po vsaki spremembi, da zrušitev ali zaprt zavihek ne izgubita dela: naslednjič, ko odprete PartCraft, vpraša "Obnovim vaše delo?". To ni shranjevanje: shranite v datoteko, da ohranite delo. Glejte [Obnovitev neshranjenega dela](common:recover).
- Če poskusite zapreti zavihek ali ponovno naložiti stran z neshranjenimi spremembami, brskalnik vpraša "Zapustim spletno mesto?". To je okno brskalnika; PartCraft ne more spremeniti njegovega besedila.
- {{ui:Novo}}, {{ui:Odpri}} in zapiranje sestava vprašajo, preden zavržejo neshranjene spremembe.

## Na spletu in brez povezave

Vse se zgodi na vašem računalniku: mrežno jedro (program WebAssembly) se naloži z aplikacijo in gradi geometrijo lokalno, datoteke pa se berejo in pišejo na vaš disk. Noben podatek o delu ne gre prek omrežja. Glejte [Mrežno jedro](topic:solid-kernels).

Za delo brez povezave shranite PartCraft za delo brez povezave, medtem ko ste na spletu: v vrstici aplikacije izberite {{ui:Shrani za delo brez povezave}} in počakajte, medtem ko šteje ("Shranjujem 40 od 212"), dokler ne piše **Pripravljeno za delo brez povezave**. Shranjena kopija vsebuje knjižnico 3D in mrežno jedro, zato potem delujejo modeliranje, shranjevanje, vsi izvozi in risbe tudi brez povezave. Če piše **Shranjevanje ni uspelo**, kliknite, da poskusite znova na spletu; **Ni na voljo brez povezave** pomeni, da to okno brskalnika ne more hraniti kopije (zasebna okna in nekateri upravljani računalniki). Ko je kopija shranjena, klik na **Pripravljeno za delo brez povezave** ponudi {{ui:Shrani znova (pridobi najnovejšo različico)}} in {{ui:Odstrani kopijo brez povezave}}. Podrobnosti: [Delo brez povezave](common:offline).

:::online
Ste na spletu. Tudi brez shranjevanja za delo brez povezave lahko, ko se PartCraft naloži in oznaka "Mrežno jedro" v vrstici stanja, delate naprej, če povezava pade. Samo ne ponovno nalagajte strani, dokler ne ste spet na spletu.
:::

:::offline
Ste brez povezave. Če je PartCraft že odprt, delate naprej; shranjevanje in izvoz še delujeta. Če vrstica aplikacije piše **Pripravljeno za delo brez povezave**, se PartCraft odpre tudi od začetka brez povezave; sicer ne ponovno nalagajte tega zavihka.
:::

## Razlike med brskalniki

- **Prenosi.** Vsak brskalnik ima svojo mapo za prenose in svoj način vprašanja. Če brskalnik vpraša, ali sme to spletno mesto prenašati datoteke, dovolite, sicer shranjevanje in izvoz ne delujeta.
- **Povleci in spusti** datoteke na pogled delujejo v Chrome, Edge, Firefox in Safari.
- **Datoteke s telefona ali tablice.** Na iPhone in iPad Odpri pokaže aplikacijo Datoteke; shranjene datoteke gredo v Datoteke, Prenosi. Na Androidu gredo v mapo Prenosi.

Vsebina datotek se med brskalniki ali operacijskimi sistemi ne razlikuje.
