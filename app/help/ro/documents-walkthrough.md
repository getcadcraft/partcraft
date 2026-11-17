---
title: Documente și revizii (vault)
summary: Un exemplu pas cu pas, dintr-o lucrare reală: puneți un dosar de proiect cu piese și ansambluri sub control, extrageți o piesă, modificați-o, depuneți-o cu o notă, lansați-o, vedeți ce o utilizează și lista de materiale, ce vede a doua persoană cât fișierul este blocat și cum funcționează cu dosarele cloud.
keywords: vault, documente, ghid pas cu pas, tutorial, extragere, depunere, revizie, lansare, aprobare, blocare, istoric, unde este utilizat, listă de materiale, bom, ansamblu, dosar cloud, dosar de proiect, două persoane, dosar partajat
from: 0a5e6983
---

## Ce veți face

Sunteți Ana, lucrați la Riverside Clinic împreună cu un coleg, Ben. Piesele și ansamblurile proiectului se află într-un singur dosar la care aveți acces amândoi (o unitate partajată, un dosar sincronizat sau un dosar cloud). Până la final, un fișier va trece de la prima copie la o revizie lansată **A**, va fi modificat din nou ca **B.1**, veți vedea cine a făcut ce și veți vedea ce vede Ben atunci când fișierul este deținut de Ana.

Totul se păstrează într-un dosar ascuns `.ccvault`, alături de fișiere: fără server, nimic nu se încarcă (un dosar cloud face excepție, vezi ultimul pas). Pentru toate butoanele și regulile, într-un singur loc, consultați subiectul *Documente: extragere, revizii și lansare*, acolo unde aplicația îl are.

## 1. Configurați dosarul de proiect

1. Apăsați {{ui:Documente…}} în grupul **Fișier** din bara de instrumente.
2. Apăsați {{ui:Alegeți dosarul de proiect}} și selectați dosarul care conține piesele și ansamblurile proiectului. (Dosarele de proiect funcționează în Studio și în browserele care pot deschide un dosar, precum Chrome și Edge. În alte browsere, panoul spune asta.)
3. Apăsați {{ui:Schimbare}} lângă **Utilizator:** și scrieți numele, `Ana` (dacă se cere, și numele acestui computer). Panoul afișează acum *Utilizator: Ana pe* și computerul. Numele apare pe tot ce se face.
4. Apăsați {{ui:Pornire vault în acest dosar}} și scrieți numele proiectului, `Riverside clinic`. Panoul afișează *Vault pornit pentru Riverside clinic.*

## 2. Puneți un fișier sub control

1. Deschideți **Fișiere care nu sunt în vault** și apăsați {{ui:Adăugare}} lângă `plates/Bracket.partcraft.json`.
2. Fișierul apare sub **Fișiere în vault** la revizia **A.1**, starea **În lucru**. A.1 este prima sa copie; vault-ul păstrează o copie a fiecărei revizii.

## 3. Extrageți, modificați, depuneți

1. Apăsați {{ui:Deschidere}} lângă `plates/Bracket.partcraft.json`. Piesa se deschide în PartCraft, iar panoul se închide ca să o vedeți. Deschideți din nou panoul din {{ui:Documente…}}.
2. Deschideți din nou panoul și apăsați {{ui:Extragere}}. Rândul afișează acum **Extras către utilizatorul curent**. A fost creat un fișier de blocare în `.ccvault/locks`; nimeni altcineva nu poate extrage acest fișier până nu este depus.
3. Modificați piesa: editați o cotă, adăugați o gaură. Salvarea este refuzată dacă fișierul nu este extras pe numele utilizatorului curent, iar panoul spune de ce; {{ui:Salvare ca}} funcționează mereu pentru o copie proprie.
4. Deschideți panoul, apăsați {{ui:Depunere}} și scrieți ce s-a schimbat (`Am mutat ușa`). Panoul afișează *depus ca A.2*. Fișierul din dosarul proiectului este acum piesa deschisă, iar blocarea dispare. Depunerea fără modificări păstrează revizia.

Dacă renunțați, {{ui:Anularea extragerii}} restituie fișierul fără o revizie nouă.

## 4. Verificare și lansare

1. Apăsați {{ui:Trimitere spre verificare}}. Starea devine **Spre verificare**, iar fișierul devine doar pentru citire.
2. Înainte de aprobare, apăsați {{ui:Setările proiectului}} și enumerați cine poate aproba (un nume pe rând), de exemplu `Ben` și `Carla`. Bifați regula conform căreia aprobatorul trebuie să fie altcineva decât autorul. Apăsați {{ui:Salvare setări}}. Acum vault-ul însuși refuză pe oricine altcineva.
3. Ben (sau Carla) apasă {{ui:Aprobare}} și scrie numele aprobatorului. Starea devine **Lansat**, iar revizia devine **A**, cu *aprobat de* și numele. Un fișier lansat este doar pentru citire. {{ui:Trimitere înapoi}} l-ar fi returnat la starea În lucru, cu un motiv.

Numele aprobatorului este cel scris în panou; este o înregistrare a celui care a semnat, nu o dovadă a identității.

## 5. O revizie nouă

1. Pe fișierul lansat, apăsați {{ui:Revizie nouă}}. Astfel rezervați litera următoare.
2. Modificați fișierul, apoi apăsați {{ui:Depunere}}. Revizia este **B.1**, în lucru. Lansați-o la fel și devine **B**. {{ui:Anularea extragerii}} înainte de prima depunere lasă revizia la **A**.

Literele de revizie merg A, B … Z, AA, AB. Dacă standardul omite unele litere, setarea proiectului *Utilizare secvență ASME Y14.35* sare peste I, O, Q, S, X și Z pentru reviziile următoare.

## 6. Vedeți ce s-a întâmplat

Apăsați numele fișierului pentru a deschide detaliile:

- **{{ui:Istoric}}**: fiecare eveniment, cel mai nou primul, cu cine, de pe ce computer și când: *Depus A.2* de Ana, *Lansat* de Ben și așa mai departe.
- **{{ui:Revizii}}**: tabelul reviziilor: fiecare revizie păstrată, cu data ei, cine a depus-o, nota și cine a aprobat-o. Vault-ul păstrează o copie a fiecăreia în `.ccvault/revs`.
- **{{ui:Utilizează}}**: piesele unui ansamblu.
- **{{ui:Utilizat de}}**: lista tuturor ansamblurilor din vault care conțin această piesă. Modificați un suport și știți ce ansambluri să verificați.

## Ansambluri: ce utilizează și lista de materiale

Puneți un ansamblu (`.partcraft.json`, salvat din modul Ansamblu) în dosar și adăugați-l. Apăsați numele lui: **Utilizează** listează piesele pe care le conține, cu revizia și starea fiecăreia; **Utilizat de**, pe o piesă, listează fiecare ansamblu care o conține. {{ui:Listă de materiale (CSV)}} salvează întreaga listă de piese, nivel cu nivel, cu cantități, revizii și stări, pentru o foaie de calcul. Modificați un suport și **Utilizat de** vă spune ce ansambluri să verificați.

## 7. Ce vede Ben cât timp fișierul este extras

Extrageți din nou fișierul și cereți lui Ben să deschidă același dosar de proiect pe computerul lui, apoi să deschidă panoul. Pe rândul fișierului vede **Extras de Ana pe** computerul ei **din** momentul indicat și nu vede butonul {{ui:Extragere}}. Dacă totuși încearcă, vault-ul refuză: blocarea este un fișier pe care sistemul nu îl poate crea de două ori, astfel încât două persoane nu pot deține fișierul simultan, chiar în aceeași fracțiune de secundă, atunci când dosarul este pe disc în Studio. (Într-un browser, dosarul permite doar o încercare cât mai bună, iar panoul spune asta la **Dosar**.)

Dacă Ana este plecată și Ben are nevoie de fișier, {{ui:Întrerupere extragere}} îl eliberează. Trebuie scris un motiv; acesta merge în jurnal, împreună cu extragerea căreia îi aparține. Dacă proiectul are administratori enumerați, doar ei pot face asta. O extragere mai veche decât limita de expirare (implicit 14 zile) este marcată *de mult timp*. După întrerupere, depunerea târzie a Anei este refuzată, astfel încât niciunul nu poate suprascrie modificările celuilalt.

## 8. Dosare cloud

Un dosar cloud este un dosar de proiect păstrat în spațiul de stocare cloud al echipei, astfel încât echipa nu are nevoie de o unitate partajată. În Studio, conectat la contul CadCraft, panoul afișează {{ui:Deschidere dosar cloud}} lângă {{ui:Alegeți dosarul de proiect}}. Apăsați-l și selectați dosarul, listat ca spațiu de lucru / dosar. Proprietarul spațiului de lucru creează mai întâi dosarul, iar stocarea în cloud a echipei trebuie să fie activă. Totul funcționează la fel; serverul creează blocarea, care este strictă între persoane. Dacă nu sunteți conectat, panoul cere conectarea. Într-un tab de browser obișnuit butonul cloud nu este oferit; folosiți Studio.

## Încercați

Faceți cei opt pași de mai sus cu o copie a unui fișier real. Pentru pașii cu două persoane aveți nevoie de altă persoană sau de două ferestre cu două nume. Dacă încercați cu un dosar partajat real, pagina Testare comunitară are o verificare care cere exact asta și primește rezultate.
