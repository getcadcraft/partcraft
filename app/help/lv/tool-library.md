---
title: Instrumentu bibliotēka
summary: Saglabājiet pārlūkā instrumentus, ko izmantojat, lai katra detaļa tos varētu izmantot, un pārvietojiet instrumentu bibliotēkas starp datoriem kā JSON failu.
keywords: instrumentu bibliotēka, instrumenti, eksports, imports, JSON, saglabāt instrumentus, T numurs, galu frēze, darbnīcas instrumenti
from: 8b9f2483
---

Ražošanas cilnē **Instrumenti** ir uzskaitīti detaļas instrumenti. Sadaļā **Instrumentu bibliotēka** jūs varat turēt savus instrumentus ārpus vienas detaļas:

- {{ui:Saglabāt šo instrumentu}} pievieno atlasīto instrumentu sarakstam **Mani saglabātie instrumenti**; {{ui:Saglabāt visus šīs detaļas instrumentus}} pievieno visus. Mani saglabātie instrumenti tiek glabāti šajā pārlūkā un ir pieejami katrai detaļai. Instruments, ko jau esat saglabājis (tāds pats veids, izmērs, rievu skaits un pārrakstītās vērtības), netiek saglabāts divreiz.
- {{ui:Pievienot šai detaļai}} ieliek izvēlēto saglabāto instrumentu detaļā. Ja tā T numurs jau izmantots citam detaļas instrumentam, tas saņem nākamo brīvo numuru, un panelis to saka. {{ui:Noņemt no manas bibliotēkas}} izņem to no saglabāto saraksta (nevis no detaļām, kurām tas jau ir).
- {{ui:Eksportēt instrumentus…}} ieraksta detaļas instrumentus kā `.json` failu; {{ui:Importēt instrumentus…}} pievieno tāda faila instrumentus detaļai ar tiem pašiem noteikumiem (instruments, kas tur jau ir, tiek izlaists; aizņemts T numurs tiek pārvietots). Fails satur izmērus, rievas, materiālus un ievadītās padeves un ātruma pārrakstītās vērtības; identifikatoru tajā nav. Izmantojiet to, lai pārvietotu veikala instrumentus uz citu datoru vai nodotu kolēģim.

Ja pārlūks neļauj glabāt bibliotēku (glabāšana ir izslēgta vai pilna), saglabāšana to paziņo, un {{ui:Eksportēt instrumentus}} ir veids, kā saglabāt failu. Failam jābūt PartCraft instrumentu bibliotēkai no šīs versijas vai vecākas, ar ne vairāk kā 500 instrumentiem ar derīgiem izmēriem; viss cits tiek noraidīts ar iemeslu.

Griešanas ātrumi un skaidu padeves, kas nāk kopā ar instrumentu, ir sākuma vērtības; skatiet [Veidot apstrādes ceļus un G-kodu](topic:manufacture).
