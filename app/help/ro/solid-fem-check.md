---
title: Solid FEM: verificarea tensiunii unei piese
summary: Activați suplimentul Solid FEM, discretizați o piesă, alegeți fețele fixe și o sarcină în vizualizarea 3D, rezolvați și citiți deplasarea și tensiunea von Mises pe model.
keywords: solid fem, element finit, fea, tensiune, von mises, deplasare, față fixă, sarcină, presiune, gravitație, frecvență proprie, formă de mod, plasă, supliment
from: 8b7e6ba2
---

## Ce veți face

Verificați o piesă solidă sub o sarcină: unde se mișcă și unde este cea mai mare tensiune. Studiul este liniar și elastic, deci este un instrument de verificare; inginerul analizează rezultatele.

## Pași

1. Alegeți {{ui:Setări}} › {{ui:Suplimente}} și activați {{ui:Solid FEM}} (este dezactivat până îl activați). Deschideți fila {{ui:Solid FEM}} din panoul din dreapta.
2. Sub {{ui:Material}} alegeți unul, sau {{ui:Personalizat}} și introduceți coeficientul lui Poisson, densitatea și tensiunea de curgere.
3. Apăsați {{ui:Adăugare fețe fixe}}, faceți clic pe fețele care sunt ținute în vizualizarea 3D, apoi apăsați {{ui:Alegere terminată}}.
4. Adăugați o sarcină cu {{ui:Adăugare forță}}, {{ui:Adăugare presiune}} sau {{ui:Adăugare gravitație}} și alegeți fețele acesteia în același mod.
5. Apăsați {{ui:Discretizare piesă}}, apoi {{ui:Rezolvare}}. Alegeți mai întâi {{ui:Frecvențe proprii}} sub {{ui:Studiu}} dacă doriți frecvențe.
6. Citiți {{ui:Rezultate}} și {{ui:Avertismente}}, apoi apăsați {{ui:Afișare pe model}} pentru a desena tensiunea von Mises, deplasarea sau o formă de mod; {{ui:Eliminare grafic}} o înlătură.

## Note

- Pagina rezolvă până la un număr fix de elemente; linia de stare arată când dimensiunea elementului este prea fină.
- Tensiunea la fețele fixe, în punctele de sarcină și în colțurile ascuțite crește pe măsură ce discretizarea se rafinează. Rafinați și comparați înainte de a vă baza pe un vârf.
- Fiecare modificare este un pas de anulare, iar setările sunt salvate în fișierul piesei.
- Pentru studii de curgere și de contact vezi [Verificarea tensiunii și a deformării](topic:simulation).
