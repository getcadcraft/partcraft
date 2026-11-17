---
title: Izvoz za tiskanje, STEP in DXF
summary: Izvozite del kot STL ali 3MF za 3D-tiskanje, kot točno telo STEP za druge programe CAD in CAM ter skico ali ravno ploskev kot DXF za lasersko in vodno rezanje.
keywords: izvoz, shrani kot, ifc, bim, nabori lastnosti, stl, 3mf, 3d-tiskanje, slicer, step, stp, točni step, b-rep, ap242, ap214, cam, strojna delavnica, rezkanje, dxf, laser, vodni curek, cnc, ravni vzorec, profil, mreža, fasetirano
from: e1de71d5
---

Izvozi so kopije v drugih formatih. Datoteko `.partcraft.json` shranite tudi: edina je, ki jo PartCraft lahko ponovno odpre in ureja.

Vsi izvozi veljajo za del na zaslonu, v milimetrih. V sestavu STL, 3MF, STEP in Risba (PDF) izvozijo celoten sestav: glejte [Seznam delov, razstavljeni pogledi in premični deli](topic:assembly-bom-explode). Če telesa še ni: "Za izvoz še ni telesa."

## Za 3D-tiskanje: STL ali 3MF

1. Neobvezno: pri gladkih okroglih površinah kliknite prazen prostor, da nič ni izbrano, in v desnem podoknu nastavite **Krivulje** na **Fina (128 na obrat)** ali **Zelo fina (256 na obrat)**. STL in 3MF sta vedno sestavljena iz trikotnikov.
2. Izberite {{ui:Izvoz}}, nato {{ui:STL, za 3D-tiskanje}} ali {{ui:3MF, za 3D-tiskanje}}.
3. Datoteka se prenese. Vrstica stanja na primer prikaže „Izvoženo: Part1.stl (binarno, mm, Z navzgor, 1536 trikotnikov).“

Obe obliki sta **Z navzgor**, kot pričakujejo tiskalniki in rezalniki. Svet PartCraft je Y navzgor, zato izvoz del zasuka: kar v PartCraft kaže navzgor (pravokotno na ravnino Tloris), v rezalniku kaže navzgor, del, skiciran na ravnini Tloris, pa leži ravno na podlagi. Po potrebi nastavite končno usmerjenost v rezalniku.

3MF je novejši, manjši format, ki ga rezalniki berejo z enotami. Uporabite STL, če program ne sprejme 3MF.

Da prej preverite, ali je del zaprt, ali se prilega podlagi vašega tiskalnika in stoji na ravni ploskvi, uporabite {{ui:Izvoz}} › {{ui:Preveri za 3D-tiskanje (STL ali 3MF) …}}: glejte [Pripravite del za 3D-tiskanje](topic:print-3d).

## Za druge programe CAD: STEP

Izberite {{ui:Izvoz}}, nato {{ui:STEP AP242 (točno telo)}}. Del zapiše kot eno točno telo, v milimetrih, zasukano na Z navzgor. Okrogle ploskve so zapisane kot pravi valji, stožci, krogle in tori, z ustreznimi krožnicami za robove, tako da lahko drug program izvrtino prepozna kot izvrtino. Telo, odprto iz datoteke STEP, ohrani ravne ploskve, valje, stožce, krogle in tori te datoteke, zato gredo tudi ti ven točno. Ploskve brez take površine (stranica zlepka, modeliran navoj, telo iz mrežne datoteke STL, OBJ ali 3MF, zlepek datoteke STEP, potegnjene po poti in zavrte ploskve) ostanejo ravni fasetni v istem telesu, vrstica stanja pa pove, koliko jih je. Vrstica stanja na primer prikaže „Izvoženo: Flange.step (AP242, točno telo, mm, Z navzgor): 14 ploskev na pravih površinah (10 cilindričnih, 1 stožčasta, 0 sferičnih, 0 toroidnih), 0 prilagojenih krivulj robov.“

Zapiše samo telo: brez zgodovine, skic in risbe. Če drug program bere samo AP214, izberite {{ui:STEP AP214 (točno telo)}}: isto telo v starejši shemi.

Kaj je točno in kaj ni:

- Ravne ploskve, valji (izvrtine, izbokline, zaokrožitve na ravnih robovih), stožci (ponori, zožitve), krogle in tori so točni, prav tako njihovi ravni, krožni in elipsasti robovi. Nastavitev **Krivulje** tega ne spremeni.
- Kjer se dve okrogli ploskvi sekata (izvrtina, prečno skozi gred), je rob gladka krivulja, prilagojena obema površinama z natančnostjo 0,00001 mm; „prilagojene krivulje robov“ jih štejejo.
- Zaprta votlina znotraj dela je zapisana kot praznina telesa. Več ločenih teles je zapisanih kot več teles.
- Sestav še ni zapisan kot točni STEP: izvozite vsak del posebej.

Preverjeno je bilo z branjem datotek nazaj v OpenCascade, ki poroča o veljavnih telesih z volumni, izračunanimi ročno. Še ni bilo odprto v vsakem programu CAD ali CAM. Če kateri datoteko zavrne, {{ui:STEP (fasetiran, mrežno jedro)}} zapiše isto obliko kot ravne ploskve (v lastnih oseh PartCraft, Y navzgor). Sporočite nam prek {{ui:Pomoč}} › {{ui:Prijavite težavo}}.

Za obdelavo delovno okolje Izdelava zapiše točno telo tudi v delovnih koordinatah nastavitve: glejte [Izdelava obdelovalnih poti in G-kode](topic:manufacture#exact-step-for-the-shop).

## Za programe BIM: IFC z vsemi lastnostmi

Izberite {{ui:Izvoz}}, nato {{ui:IFC 4 (z vsemi lastnostmi)}}. Del zapiše kot element IFC 4 za stavbne in procesne modele, njegova oblika pa kot trikotniki (Z navzgor, milimetri), z vsem, kar PartCraft ve o njem, kot nabori lastnosti:

| Nabor lastnosti | Vsebuje |
|---|---|
| **PartCraft_Part** | Ime, material in njegova gostota, aktivna konfiguracija, število teles; v sestavu tudi številko dela in opis |
| **PartCraft_Parameters** | Vsak parameter dela z vrednostjo; izraz formule in opomba sta v opisu lastnosti |
| **PartCraft_TitleBlock** | Polja glave risbe, ki ste jih izpolnili (naslov, številka risbe, revizija, podjetje, narisal, preveril in odobril, datum, obdelava, splošna toleranca), in velikost lista |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Prostornina, površina, masa (z materialom) in skupne mere |

Material je priložen kot material IFC, številka risbe pa je oznaka elementa. V sestavu je vsak del zapisan enkrat kot tip z lastnostmi, vsak izvod pa je postavljen tam, kjer ga postavi sestav, z lastnimi vrednostmi v **PartCraft_Instance**: ime, zaporedna številka v kosovnici in ali je to pritrjeni del.

## Za lasersko, vodno ali CNC profile: DXF

Dve vrsti DXF, obe različice R12, ki jo odpre vsak program CAD in CAM:

### Skica

1. Izberite skico v zgodovini (ali jo imejte odprto).
2. Izberite {{ui:Izvoz}}, nato {{ui:DXF skice ali ravne ploskve}}. (Desno podokno skice ima tudi {{ui:Izvozi kot DXF}}.)

Dobite `<part> - <sketch>.dxf` v lastnih koordinatah skice: črte, pravi loki in krožnice na sloju **PROFILE**, konstrukcijska geometrija na **CONSTRUCTION**, proste točke na **POINTS**.

### Ravna ploskev telesa

1. Kliknite ravno ploskev v pogledu (na primer vrh plošče z luknjami).
2. V desnem podoknu izberite {{ui:Izvozi ploskev kot DXF}}, ali {{ui:Izvoz}}, nato {{ui:DXF skice ali ravne ploskve}}.

Dobite `<part> - face.dxf`: obris ploskve in vsako izvrtino v njej. Okrogla izvrtina (cel krog, kjer valj seka ploskev: izvrtana luknja ali izvrtina odprte datoteke STEP) je zapisana kot pravi krog s središčem in polmerom izvrtine. Vsak drug obris je zaprta polilinija, njeni okrogli robovi (zaokrožitveni koti, utori, loki) pa so fasete, zato najprej nastavite **Krivulje** na Fina, če orodje natančno sledi njim. Vrstica stanja pove, koliko je obrisov, koliko jih je pravih krogov in površino ploskve.

Če nista izbrani ne skica ne ravna ploskev: "Odprite ali izberite skico ali izberite ravno ploskev za izvoz DXF."

## Risba

Risba PDF ima svoj vodnik: [Izdelava lista risbe](topic:drawing-pdf).

## Formati, ki niso na voljo

glTF, OBJ, IGES in Parasolid v tej različici niso izvoženi. DWG zapiše samo [paket variant](topic:variant-pack), kot list risbe: glejte [Izdelava paketa variant iz konfiguracij](topic:variant-pack). Glejte [Formati datotek](topic:file-formats).
