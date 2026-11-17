---
title: Biblioteca de scule
summary: Salvați sculele pe care le folosiți în browser, ca fiecare piesă să le poată avea, și mutați bibliotecile de scule între calculatoare ca fișier JSON.
keywords: bibliotecă de scule, scule, export, import, JSON, salvare scule, număr T, freză cilindrică, scule de atelier
from: 8b9f2483
---

Fila **Scule** din Manufacture listează sculele piesei. Sub **Biblioteca de scule** puteți păstra propriile scule dincolo de o singură piesă:

- {{ui:Salvare această sculă}} adaugă scula selectată la **Sculele mele salvate**; {{ui:Salvare toate sculele acestei piese}} le adaugă pe toate. Sculele salvate rămân în acest browser și sunt disponibile pentru fiecare piesă. O sculă deja salvată (același tip, aceeași dimensiune, aceleași caneluri și aceleași suprascrieri) nu se salvează de două ori.
- {{ui:Adăugare la această piesă}} aduce în piesă scula salvată aleasă. Dacă numărul ei T este deja folosit de altă sculă din piesă, primește următorul număr liber, iar panoul o spune. {{ui:Eliminare din biblioteca mea}} o scoate din lista salvată (nu din piesele care o au deja).
- {{ui:Export scule…}} scrie sculele piesei ca fișier `.json`; {{ui:Import scule…}} adaugă sculele unui astfel de fișier la piesă, cu aceleași reguli (o sculă deja prezentă este sărită, un număr T ocupat se mută). Fișierul conține dimensiuni, caneluri, materiale și suprascrierile de avans și de viteză pe care le-ați tastat; nu are identificatori. Folosiți-l ca să mutați sculele unui atelier pe alt calculator sau ca să le dați unui coleg.

Dacă browserul nu poate păstra biblioteca (stocarea este dezactivată sau plină), salvarea o spune, iar {{ui:Export scule}} este modalitatea de a păstra un fișier. Un fișier trebuie să fie o bibliotecă de scule PartCraft din această versiune sau mai veche, cu cel mult 500 de scule cu dimensiuni valide; orice altceva este refuzat, cu motivul.

Vitezele de tăiere și avansurile pe dinte care vin cu o sculă sunt valori de start; vezi [Realizarea traseelor de sculă și a codului G](topic:manufacture).
