---
title: Derulare înapoi și înainte prin istoric
summary: Mutați bara de derulare în sus și în jos câte un element pe rând ca să urmăriți construirea piesei, inserați elemente la mijloc și reveniți la capăt.
keywords: derulare, derulare înapoi, derulare înainte, bară de derulare, parcurgere istoric, inserare element, înghețare, istoric
from: 9a366cae
---

Bara de derulare decide cât din istoric este construit. Elementele de sub ea sunt cenușii și nu sunt construite; elementele noi se adaugă la bară.

## Parcurgeți câte un element

Cu piesa pe ecran (fără schiță sau desen deschis):

| Acțiune | Rezultat |
|---|---|
| {{key:[}} sau butonul cu săgeată în sus de lângă numele piesei | Bara urcă cu un element |
| {{key:]}} sau butonul cu săgeată în jos | Bara coboară cu un element |
| {{key:End}} sau butonul de bară până la capăt | Fiecare element este construit din nou |

Bara de stare spune unde se află bara, de exemplu „Bara de derulare după Sketch1: 1 din 2 operații construite”. Butoanele sunt dezactivate când bara nu mai poate merge mai departe în acea direcție.

Puteți și să alegeți {{ui:Derulare înapoi până aici}} pe orice element sau să faceți clic pe **Bara de derulare · derulare înainte** în istoric.

## Inserați un element la mijloc

1. Derulați bara înapoi până ajunge acolo unde trebuie să fie noul element.
2. Adăugați elementul: el intră la bară.
3. Apăsați {{key:End}} pentru a construi restul istoricului peste el.

Fiecare mutare a barei este un pas pe care îl puteți anula cu {{key:Mod+Z}}. Poziția barei este salvată în fișier, deci o piesă poate fi trimisă derulată înapoi. Instrumentul din linia de comandă o mută și el: `partcraft rollback part.json` și `partcraft forward part.json --end`.
