---
title: Atgriezumu saglabāšana un atkārtota izmantošana
summary: Pēc izvietošanas tas, kas paliek pāri katrai plāksnei, kļūst par numurētu atgriezumu krājuma sarakstā; nākamā izvietošana vispirms izmanto atgriezumus, tad pilnas plāksnes.
keywords: izvietošana, atgriezums, atlikums, krājums, plāksne, loksne, atkārtota izmantošana, materiāls, biezums, CSV
from: 7a68d4b8
---

Izvietojot detaļas uz plāksnēm, katras plāksnes derīgo atlikumu (ne skaidas) var saglabāt kā **atgriezumu**: numurētu kontūru (R-0001, R-0002 …) ar materiālu, biezumu, izmēru un darbu, no kura tas radies. Saraksts tiek saglabāts kopā ar failu, un to var saglabāt kā CSV.

## Atkārtota izmantošana

Ievadiet **materiālu** un **biezumu**, atstājiet {{ui:Vispirms izmantot atgriezumus}} ieslēgtu un izvietojiet. Vienāda materiāla un biezuma atgriezumi tiek izmēģināti no mazākā uz lielāko. Detaļas, kas iederas, tiek novietotas uz tiem, atgriezuma pašas kontūras iekšpusē un atstarpē no tā malas; kas neiederas, iet uz jaunām plāksnēm. Darba pārskatā norādīts, kuri atgriezumi izmantoti un kas palika.

Ja ieslēgts {{ui:Saglabāt atlikumus kā atgriezumus}}, tad {{ui:Pievienot šo darbu krājumam}} to ieraksta krājuma sarakstā: izmantots atgriezums tiek atzīmēts kā **Izmantots** (ar darbu) un vairs netiek piedāvāts; tā atlikums kļūst par jaunu atgriezumu, kas atceras savu sākotnējo.

## Kas ir atgriezums

Atlikums tiek mērīts ar jūsu iestatīto atstarpi (neviena detaļa nav tuvāk griezumam par to). Joslas, kas šaurākas par plāksnes divdesmito daļu, un gabali, kas mazāki par 2 % no tās, ir atkritumi; mainiet abus robežlielumus, ja jūsu darbnīca glabā mazākus gabalus. Caurumi detaļu iekšpusē pieder detaļām un netiek saglabāti. Rullim atgriezumu nav.

## Zīmējumā

Izvietojuma DXF uzzīmē katra atgriezuma kontūru slānī REMNANTS, ar tā numuru vidū, lai gabalus varētu iezīmēt, kad tos griež.

Vēl nav izveidots: atgriezuma šķiedras virziens, svītrkoda vai etiķešu lapa, ruļļu atgriezumi, krājums, ko kopīgi izmanto vairāki projekti.
