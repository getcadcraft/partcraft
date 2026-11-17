---
title: Rast oblike iz obremenitev (Generativno)
summary: Izberite ploskve, ki so pritrjene in obremenjene, območja za ohranitev in za prosto ohranitev, ciljne prostornine in materiale ter ustvarite izide: najtogejše oblike za vsako prostornino, ponovno preverjene kot telesa, primerjane v razpredelnici in preneseno kot STL, STEP ali nov del.
keywords: generativno oblikovanje, optimizacija topologije, SIMP, lahka konstrukcija, mrežna struktura, organska oblika, izidi, primerjava, masa, delež prostornine, ohrani, ohrani znotraj, ovira, prosto območje, projektni prostor, najmanjša velikost člena, STL, 3D-tiskanje
from: 5b91fa8e
---

Delovno okolje **Generativno** odstrani material, ki ga obremenitve ne potrebujejo. Povete, kje je del pritrjen in obremenjen, kaj mora ostati in kaj mora ostati prosto; PartCraft poišče najtogejšo obliko za vsako ciljno prostornino (**optimizacija topologije**), vsako znova preveri kot telo z realnim materialom in prikaže izide drug ob drugem. Deluje na imenovanih ploskvah, ki jih mrežno jedro daje delu (glejte [Mrežno jedro](topic:solid-kernels)).

V polju **Delovno okolje** izberite **Generativno**. Vaš del se ne spremeni; študija se shrani znotraj datoteke dela.

## Nastavitev študije

1. Na desni plošči pritisnite **Nova študija**.
2. **Prostor**: *Del, kakršen je* odstrani material iz dela; *Škatla okoli dela* ustvari obliko znotraj škatle, večje od dela, za **Rob škatle**.
3. **Velikost elementa**: pustite prazno za samodejno velikost (približno 8.000 kock) ali vnesite svojo. Drobnejše velikosti dajo drobnejše oblike in trajajo dlje.
4. **Najmanjši člen**: členi, tanjši od približno dvakratnika te vrednosti, se ne oblikujejo. Prazno pomeni eno in pol kocke.
5. Označite od ene do šest **Ciljnih prostornin** (delež projektnega prostora, ki ga oblika sme zapolniti) in od ene do štiri **Materiale**. Vsaka prostornina se ustvari enkrat; vsak material se preveri na tej obliki (najtogejša oblika ni odvisna od materiala, njena masa, napetost in varnostni faktor pa so).

## Cilji

- {{ui:Vpeto}}: kliknite ploskve, ki so pritrjene. **Ploskev brez trenja** s seznama **Dodaj** na plošči drži ploskev le v njeni ravnini (uporabite jo za ravnine simetrije).
- {{ui:Sila}}: kliknite obremenjene ploskve, nato vnesite skupno silo in na plošči izberite njeno smer. **Tlak** je na seznamu **Dodaj**.
- {{ui:Ohrani}}: kliknite ploskve, katerih okolica mora ostati polna, in nastavite, kako globoko (**Ohrani polno znotraj**) — na primer okoli lukenj za vijake. Ploskve, ki jih pritrdite ali obremenite, so vedno ohranjene.
- {{ui:Ovira}}: kliknite ploskve, katerih okolica mora ostati prazna, in nastavite, kako daleč (**Ohrani prazno znotraj**) — prostor za gred ali orodje.

Po klikanju ploskev pritisnite **Končano izbiranje** ali {{key:Esc}}. Zeleni in rdeči odtenki prikazujejo območja.

## Ustvarjanje in primerjava

Pritisnite {{ui:Ustvari}}. Plošča prikaže napredek in preostali čas; **Ustavi** prekliče. Vsak izid se pojavi v razpredelnici **Izidi**: ciljna prostornina, material, **masa**, **največja napetost**, **največji pomik** in **varnostni faktor** (meja tečenja ÷ napetost), vse iz ponovnega reševanja končane oblike kot polnih kock z realnim materialom.

Izberite izid, da ga vidite v pogledu (del je skrit; označite **Prikaži del skozi** za oba). Pod razpredelnico: koliko iteracij je potrebovalo in ali se je ustalilo, njegova togost kot telo v primerjavi z optimizatorjevo lastno vrednostjo ter njegova ploskev.

## Uporaba izida

- **STL**: zaprta trikotniška mreža, pripravljena za 3D-tiskanje.
- **STEP (fasetirano)**: enaka ploskev kot telo STEP iz ravnih ploskev.
- **Nova datoteka dela**: del PartCraft, katerega ena značilka je izid kot uvoženo telo. Odprite ga, da na njem skicirate, režete luknje ali ga preverite v Simulaciji. Je fasetiran (tisoči ravnih ploskev), ne urejljiva oblika.
- **Dodaj k temu delu** združi izid z delom; na voljo je le za projektni prostor škatle (če je prostor sam del, izid leži znotraj dela).

**Nova datoteka dela** in **Dodaj k temu delu** še nista izdelana v tej različici: izid postane uvoženo telo, ki potrebuje natančno jedro. Prenosa STL in STEP (fasetirano) delujeta.

## Koliko mu zaupati

- Optimizira **togost** za dano prostornino. Mejnih napetosti in proizvodnih pravil (previsi, smeri rezkanja, najmanjše velikosti lukenj) še ni: izbrani izid preverite v [Simulaciji](topic:simulation) in ga prilagodite.
- Tanki členi, široki eno ali dve kocki, so približki: za vitke dele uporabite manjšo velikost elementa.
- Metoda je SIMP z gostotnim filtrom, pragovno projekcijo in posodobitvami po kriterijih optimalnosti; prijavljena napetost in upogib sta izida kot kocke, kar je iskreno, a grobo na ostrih vogalih.

## Sorodno

- [Preverjanje napetosti in upogiba (Simulacija)](topic:simulation)
- [Izvoz za tiskanje, STEP in DXF](topic:export-files)
- [Kaj še ni izdelano](topic:not-built-yet)
