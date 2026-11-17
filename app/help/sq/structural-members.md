---
title: Korniza nga profilet e çelikut
summary: Vendos profile çeliku përgjatë vijave të një ose më shumë skicave për të bërë një kornizë të saldueshme: qoshe me pjerrësi ose me prerje të drejtë, elementë të prerë për t'u përshtatur aty ku takohen, kapakë skajesh, mbështetëse dhe një listë prerjesh me gjatësi dhe kënde skajesh.
keywords: saldim, element strukturor, kornizë, kornizë çeliku, tub, tub katror, hss, rhs, shs, chs, flanxhë e gjerë, i-beam, w beam, ipe, hea, heb, kanal, upn, kënd, pjerrësi, bashkim me prerje të drejtë, prerje ngjitjeje, kapak skaji, mbështetëse, listë prerjesh
from: 59071e5a
---

Një **element strukturor** vendos një profil çeliku përgjatë çdo vije të skicave që zgjedh. Vizato kornizën si vija (çdo vijë është një element), pastaj zgjidh profilin: elementët ndërtohen, qoshet e tyre shkurtohen dhe zgjaten, dhe një listë prerjesh tregon sa gjatë të pritet çdo copë dhe në çfarë kënde.

## Bëj një kornizë

1. Vizato kornizën si vija në një skicë, për shembull një drejtkëndësh mbi planimetrinë Top plane. Vijat e shënuara si ndërtim lihen jashtë.
2. Me skicën të përzgjedhur, zgjidh {{ui:Më shumë}} › {{ui:Element strukturor}}. Çdo vijë e skicës merr një element.
3. Në panel, zgjidh **Familjen** dhe **Madhësinë** e profilit. Familjet janë tabelat AISC (W, S, C, L, tubat HSS, Tubi) dhe EN 10365 (IPE, HEA, HEB, UPN).

### Një kornizë në 3D

Vijat nga disa skica bëjnë një kornizë: një drejtkëndësh sipër i skicuar mbi një planimetri më lart, dhe këmbët e skicuara mbi planimetri që qëndrojnë vertikalisht, takohen në skajet e tyre në 3D. Nën **Përgjatë vijave të** në panel, shëno çdo skicë, vijat e së cilës i ndjekin elementët. Skajet që takohen brenda një mikrometri bashkohen.

## Vendos profilin mbi vijën e tij

- **Rrotullo (°)** e kthen profilin rreth vijës së tij. Një trarë qëndron me thellësinë e vet vertikale (në një element vertikal, thellësia shikon drejt përparmës).
- **Mbi vijën** zgjedh cila pikë e profilit ndodhet mbi vijë: qendra, ose një qoshe ose mesi i një ane të konturit të profilit. "Mesi poshtë" e vendos kornizën mbi planimetrinë e skicës në vend që ta kalojë nëpër të.

## Qoshet dhe bashkimet

| Ku takohen elementët | Çfarë ndodh |
|---|---|
| Dy elementë skaj më skaj, **Qoshet: Me pjerrësi** | Të dy prehen në planimetrinë midis tyre, si një kornizë fotografie |
| Dy elementë skaj më skaj, **Qoshet: Me prerje të drejtë** | Elementi i parë vazhdon deri te faqja e largët e të dytit; i dyti prehet drejt te faqja e afërt e të parit |
| Një element mbaron mbi mesin e një tjetri (një T) | Pritet për t'u përshtatur te jashtësia e elementit tjetër |
| Tre ose më shumë mbarojnë në një pikë | i pari vazhdon drejt përtej të tjerëve; të tjerët pritet për t'u përshtatur me të |

Elementi i parë është ai të cilit vija vjen e para: vijat ruajnë rendin në të cilin u vizatuan, skicë pas skice, sipas rendit në të cilin u shënuan skicat.

## Kapakët e skajeve dhe mbështetëset

- **Kapakët e skajeve** mbyllin çdo skaj të lirë me një pllakë të konturit të profilit, me trashësinë që cakton, jashtë skajit.
- **Mbështetëset** vendosin një pllakë trekëndore në çdo qoshe ku takohen dy elementë me kënd: **Madhësia e mbështetëses** përgjatë çdo elementi nga qoshja, **Trashësia e mbështetëses** tërthor, e qendërzuar mbi planimetrinë e qoshes.

## Listë prerjesh

Paneli liston çdo copë, me copat e njëjta të grupuara: profilin, gjatësinë (nga pika e gjatë te pika e gjatë, siç do ta shënoje për sharrën), si prehet secili skaj (drejt, një kënd nga drejti, ose prerje për t'u përshtatur), dhe cilët elementë janë. Kapakët dhe mbështetëset listohen me madhësitë e tyre. {{ui:Ruaj listën e prerjeve (CSV)}} e ruan për një fletëllogaritëse.

Një element i prerë për t'u përshtatur me një tub me qoshe të rrumbullakosura hyn pak në rrezen e qoshes së atij tubi, kështu gjatësia e tij nga pika e gjatë është disa milimetra më shumë se hapësira midis faqeve.

## Kufizimet

- Elementët ndjekin vetëm vija të drejta; harqet dhe spline-et në skicë lihen jashtë.
- Bashkimet preren, nuk saldohen: nuk vizatohen kordona saldimi, dhe korniza është një trup i vetëm.
- Profilet vizatohen nga përmasat e tabelës: format W me rrumbullakimin e rrënjës, S dhe kanalet me flanxha paralele, tubat me rreze qoshesh; vrimat, përgatitjet e skajeve dhe hapësirat e saldimit nuk bëhen për ty.
- Elementët strukturorë ndërtohen nga kerneli i rrjetit. Me kernelin e saktë të aktivizuar (vetëm zhvilluesit), ata e thonë këtë dhe nuk ndërtohen.
