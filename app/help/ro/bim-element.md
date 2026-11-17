---
title: Proiectarea unui element BimCraft și salvarea lui înapoi
summary: O piesă trimisă din BimCraft se deschide cu clădirea în jurul ei, cenușie și doar pentru citire. Modificați-o, apoi salvați-o înapoi, ca BimCraft să poată accepta noua formă.
keywords: bimcraft, bim, element, trimitere, salvare înapoi, legătură, clădire, context, vecini, reazem, consolă, ifc, acceptare
from: 0978fe53
---

## Ce veți face

Lucrați la o piesă care provine dintr-un model BimCraft, în locul ei din clădire, și trimiteți înapoi noua formă.

## Pași

1. În BimCraft alegeți un element și selectați {{ui:Legături piesă}} › {{ui:Trimitere către PartCraft}}. PartCraft îl deschide ca piesă nouă. Bara de stare indică faptul că este un element BIM.
2. Elementele din jur (în 3 m) sunt desenate cenușiu. Ele există ca să proiectați în raport cu ele. Nu le puteți selecta sau modifica, iar ele nu sunt salvate în fișierul piesei.
3. Modificați piesa ca pe orice altă piesă: tăiați, adăugați, găuriți, oglindiți. Originea și axele ei sunt ale elementului, deci piesa revine la locul pe care îl avea.
4. Alegeți {{ui:Fișier}} › {{ui:Export}} › {{ui:Salvare înapoi în BimCraft}}. Bara de stare indică ce revizie ați trimis.
5. În BimCraft, elementul apare ca modificat până când persoana de acolo îl acceptă.

## Ce ar trebui să vedeți

- Piesa își păstrează legătura în fișier. Dacă o deschideți mai târziu, bara de stare tot indică faptul că este un element BIM. Clădirea cenușie revine cât timp browserul mai păstrează pachetul cu care a fost trimisă.
- Salvarea din nou trimite revizia 2, 3 și așa mai departe. BimCraft păstrează cea mai nouă.

## De reținut

- Forma se trimite înapoi ca plasă în milimetri, în axele proprii ale elementului. Operațiile rămân în PartCraft.
- {{ui:Salvare înapoi în BimCraft}} nu face nimic pentru o piesă care nu provine din BimCraft.
- O piesă fără solid încă nu are nimic de trimis.
- Ambele aplicații trebuie deschise în același browser: nu se încarcă nimic, cele două pagini își transmit elementul între ele.
