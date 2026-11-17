---
title: Atvērt .3dm modeli kā cietu korpusu
summary: Ievietojiet .3dm faila tīklus, polivirsmas un blokus PartCraft kā vienu cietu korpusu, ko var griezt, pievienot un skicēt; kur ir trijstūri un kas netiek ņemts vērā.
keywords: 3dm, nurbs, polivirsma, brep, virsmas, renderēšanas tīkls, izvilkums, bloki, imports, tīkls par cietu, vienības, importēts korpuss
from: 8ae9571b
---

PartCraft atver `.3dm` failus kā **cietus korpusus**, tāpat kā atver [STL, OBJ vai 3MF tīklu](topic:open-meshes). Korpuss darbojas kā jebkurš ciets ķermenis: griezt, pievienot, urbt, veidot masīvu un skicēt uz tā plakanajām virsmām. Tam nav savas vēstures.

## Faila atvēršana

1. Izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}} un izvēlieties `.3dm` failu. Vai nometiet to 3D skatā.
2. PartCraft nolasa to un parāda, ko atrada: cik objektu ar virsmām ienāk, cik virsmu nāk no failā saglabātajiem tīkliem un cik PartCraft pats sadalīja trijstūros, katru labojumu un to, vai rezultāts **slēdzas**.
3. Pārbaudiet **Vienības failā** (fails norāda pats; vienība, ko PartCraft nesaprot, piemēram, jardi, tiek pārvērsta milimetros) un **Augšup failā**.
4. Izvēlieties {{ui:Atvērt kā korpusu}} vai **Izmantot to** un {{ui:Pievienot šai detaļai}}, ja detaļai jau ir elementi.

## No kurienes nāk trijstūri

Šajā versijā PartCraft veido korpusus no trijstūriem, tāpēc katra virsma failā kļūst par mazām plakanām virsmām. Katrai polivirsmas virsmai (un katram izvilkumam) tas ņem **failā saglabāto renderēšanas tīklu**, ja tāds ir; citādi **pats sadala** to (plaknes, NURBS virsmas, rotācijas virsmas, izvilktas līknes un izvilkumi, apgriezti pēc savām malām). Polivirsmas virsmas dala savus malu punktus, tāpēc slēgta polivirsma ienāk slēgta. Virsma uz veida, ko PartCraft vēl nenolasa, tiek izlaista, un dialogs saka, cik un kāda veida; rezultāts parasti nesaslēdzas.

## Viss failā kļūst par vienu korpusu

Katrs redzamais tīkls, polivirsma un izvilkums, un katrs bloka novietojums ieiet **vienā** korpusā tur, kur fails to novieto. Objekti, kas paslēpti vai uz izslēgta slāņa, tiek izlaisti. Ja failā ir vairāki atsevišķi cieti ķermeņi, korpusam ir vairākas daļas: ja tos vēlaties kā atsevišķus korpusus, atveriet katru no sava faila.

## Kas tiek izlaists (un par to ziņots)

Līknes, punkti, punktu mākoņi, teksts, izmēri, šrafējumi un gaismas tiek izlaisti: korpuss ņem tikai virsmas. Tāpat tiek izlaisti SubD objekti (vispirms pārvērtiet tos tīklos vai polivirsmās programmā, kas izveidoja failu), bloki, kas saistīti no citiem failiem, un krāsas, slāņi un nosaukumi (PartCraft korpusiem šeit nav savu).

## Kad tas nesaslēdzas

Atvērtām polivirsmām un virsmām (viena apgriezta virsma, forma ar trūkstošu virsmu) nav iekšpuses, tāpēc tās nevar būt ciets ķermenis. Dialogs saka, cik atveru paliek, un nepievieno nekā. Savienojiet vai aizveriet formu programmā, kas to izveidoja, saglabājiet un atveriet vēlreiz. Skatiet [Kad tīkls nesaslēdzas](topic:open-meshes#when-a-mesh-does-not-close).
