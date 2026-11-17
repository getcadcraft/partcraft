---
title: Hap një model .3dm si trup të ngurtë
summary: Sjell rrjetat, poligonet e sipërfaqeve dhe blloqet e një skedari .3dm në PartCraft si një trup të ngurtë që mund ta presësh, ta shtosh dhe mbi të të skicosh; nga vijnë trekëndëshat, dhe çfarë lihet jashtë.
keywords: 3dm, nurbs, poligon sipërfaqesh, brep, sipërfaqe, rrjetë vizatimi, nxjerrje, blloqe, importim, rrjetë në trup, njësi, trup i importuar
from: 8ae9571b
---

PartCraft i hap skedarët `.3dm` si **trupa të ngurtë**, në të njëjtën mënyrë si hap një [rrjetë STL, OBJ ose 3MF](topic:open-meshes). Trupi punon si çdo trup tjetër i ngurtë: e pret, e shton, e shpon, e modelon sipas skemës dhe skicon mbi faqet e tij të sheshta. Nuk ka historik të vetin.

## Hap skedarin

1. Zgjidh {{ui:Hap}} ose shtyp {{key:Mod+O}}, dhe zgjidh skedarin `.3dm`. Ose lëshoje mbi pamjen 3D.
2. PartCraft e lexon dhe tregon çfarë gjeti: sa objekte me faqe hyjnë, sa faqe erdhën nga rrjetat e ruajtura në skedar dhe sa PartCraft i ndau vetë në trekëndësha, çdo riparim, dhe nëse rezultati **mbyllet**.
3. Kontrollo **Njësitë në skedar** (skedari e thotë vetë; një njësi që PartCraft nuk e liston, si jardat, kthehet në milimetra) dhe **Lart në skedar**.
4. Zgjidh {{ui:Hap si trup}}, ose **Përdore për** dhe {{ui:Shtoje te kjo pjesë}} kur pjesa ka tashmë veçori.

## Nga vijnë trekëndëshat

PartCraft ndërton trupa nga trekëndësha në këtë version, kështu që çdo sipërfaqe në skedar bëhet shumë faqe të vogla të sheshta. Për çdo faqe të një poligoni sipërfaqesh (dhe çdo nxjerrjeje) merr **rrjetën e vizatimit të ruajtur në skedar** kur ekziston, përndryshe **e ndan vetë** (plane, sipërfaqe NURBS, sipërfaqe rrotullimi, kurba të nxjerra dhe nxjerrje, të prera nga brinjët e tyre). Faqet e një poligoni sipërfaqesh ndajnë pikat e brinjëve të tyre, kështu që një poligon i mbyllur hyn i mbyllur. Një faqe mbi një lloj sipërfaqeje që PartCraft nuk e lexon akoma lihet jashtë, dhe dialogu thotë sa janë dhe çfarë lloji; rezultati zakonisht atëherë nuk mbyllet.

## Gjithçka në skedar bëhet një trup

Çdo rrjetë, poligon sipërfaqesh dhe nxjerrje e dukshme, dhe çdo vendosje e një blloku, hyn në **një** trup aty ku e vendos skedari. Objektet e fshehura, ose në një shtresë të fikur, lihen jashtë. Kur skedari mban disa trupa të ndarë, trupi ka disa copa: hap çdo njërin nga skedari i vet nëse i do si trupa të veçantë.

## Çfarë lihet jashtë (dhe thuhet)

Kurbat, pikat, retë e pikave, teksti, dimensionet, shraffimet dhe dritat lihen jashtë: një trup merr vetëm faqe. Po ashtu objektet SubD (shndërroji në rrjeta ose poligone sipërfaqesh në programin që e bëri skedarin më parë), blloqet e lidhura nga skedarë të tjerë, dhe ngjyrat, shtresat dhe emrat (trupat e PartCraft nuk kanë të vetat këtu).

## Kur nuk mbyllet

Poligonet dhe sipërfaqet e hapura (një sipërfaqe e vetme e shkurtuar, një formë me një faqe që mungon) nuk kanë brendësi, kështu që nuk mund të jenë trup i ngurtë. Dialogu thotë sa hapje mbeten dhe nuk shton asgjë. Bashko ose mbyll formën në programin që e bëri, ruaje, dhe hape përsëri. Shih [Kur një rrjetë nuk mbyllet](topic:open-meshes#when-a-mesh-does-not-close).
