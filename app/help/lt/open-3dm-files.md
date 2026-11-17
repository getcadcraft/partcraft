---
title: Atidaryti .3dm modelį kaip kietąjį kūną
summary: Įkelkite .3dm failo tinklus, politinkius paviršius ir blokus į PartCraft kaip vieną kietąjį kūną, kurį galima iškirpti, prie kurio galima pridėti ir ant kurio galima braižyti eskizą; iš kur atsiranda trikampiai ir kas paliekama.
keywords: 3dm, nurbs, politinis paviršius, brep, paviršiai, atvaizdavimo tinklas, ekstruzija, blokai, importas, tinklas į kietąjį kūną, vienetai, importuotas kūnas
from: 8ae9571b
---

PartCraft atidaro `.3dm` failus kaip **kietuosius kūnus** tuo pačiu būdu, kaip atidaro [STL, OBJ ar 3MF tinklą](topic:open-meshes). Kūnas veikia kaip bet kuris kitas kietasis kūnas: jį galima iškirpti, prie jo pridėti, išgręžti, pakartoti šablonu ir braižyti eskizą ant jo plokščių veidų. Savos istorijos jis neturi.

## Atidaryti failą

1. Pasirinkite {{ui:Atidaryti}} arba paspauskite {{key:Mod+O}} ir nurodykite `.3dm` failą. Arba numeskite jį ant 3D vaizdo.
2. PartCraft jį nuskaito ir parodo, ką rado: kiek objektų su veidais įeina, kiek veidų atėjo iš failo išsaugotų tinklų ir kiek PartCraft patys sutrikojo, kiekvieną taisymą ir ar rezultatas **užsidaro**.
3. Patikrinkite **Vienetai faile** (failas nurodo savo vienetus; vienetas, kurio PartCraft nepalaiko, pavyzdžiui jardai, paverčiamas milimetrais) ir **Viršus faile**.
4. Pasirinkite {{ui:Atidaryti kaip kūną}} arba **Naudoti jį** ir {{ui:Pridėti prie šios detalės}}, kai detalė jau turi elementų.

## Iš kur atsiranda trikampiai

Šioje versijoje PartCraft kuria kūnus iš trikampių, todėl kiekvienas failo paviršius tampa mažais plokščiais veidais. Kiekvienam politinio paviršiaus (ir kiekvienos ekstruzijos) veidui jis paima **atvaizdavimo tinklą, išsaugotą faile**, jei jis yra, o jei ne — **pats sutrikoja** (plokštumas, NURBS paviršius, sukimosi paviršius, ištrauktas kreives ir ekstruzijas, apkirptas pagal jų kraštus). Vieno politinio paviršiaus veidai bendrauja savo kraštų taškais, todėl uždaras politinis paviršius įeina uždarytas. Veidas paviršiaus tipo, kurio PartCraft dar nenuskaito, paliekamas, o dialogas nurodo, kiek jų ir kokio tipo; tuomet rezultatas paprastai neužsidaro.

## Visa failo medžiaga tampa vienu kūnu

Kiekvienas matomas tinklas, politinis paviršius ir ekstruzija, ir kiekviena bloko vieta patenka į **vieną** kūną ten, kur ją padeda failas. Paslėpti objektai arba objektai išjungtame sluoksnyje paliekami. Kai failas turi keletą atskirų kietųjų kūnų, kūnas turi kelias dalis: jei norite juos kaip atskirus kūnus, atidarykite kiekvieną iš savo failo.

## Kas paliekama (ir apie tai pranešama)

Kreivės, taškai, taškų debesys, tekstas, matmenys, užpildai ir šviesos paliekami: kūnas paima tik veidus. Taip pat paliekami SubD objektai (pirma paverskite juos tinklais arba politiniais paviršiais programoje, kuri sukūrė failą), blokai, susieti iš kitų failų, bei spalvos, sluoksniai ir pavadinimai (PartCraft kūnai čia neturi savųjų).

## Kai jis neužsidaro

Atviri politiniai paviršiai ir paviršiai (vienas apkirptas paviršius, forma su trūkstamu veidu) neturi vidaus, todėl negali būti kietuoju kūnu. Dialogas nurodo, kiek atvirų vietų liko, ir nieko nepridedama. Sujunkite arba uždarykite formą programoje, kuri ją sukūrė, įrašykite ir atidarykite iš naujo. Žr. [Kai tinklas neužsidaro](topic:open-meshes#when-a-mesh-does-not-close).
