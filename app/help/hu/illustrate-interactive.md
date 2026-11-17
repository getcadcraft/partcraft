---
title: Az interaktív 3D-fájl
summary: A kézikönyv exportálása egyetlen HTML-fájlba, amely bármely böngészőben offline megnyílik, telepítés, fiók és követés nélkül: a modell, a nézetek, az alkatrészlista (mindkét irányban összekötve), az animáció és a nagyító.
keywords: illusztrálás, interaktív, 3D-fájl, html, offline, megjelenítő, megosztás, vevő, gyártócsarnok
from: 4de4e074
---

Válassza az {{ui:Exportálás}} parancsot, majd a {{ui:Formátum}} beállításnál az {{ui:Interaktív 3D fájl (HTML, offline megnyílik)}} lehetőséget: ez egyetlen `.html` fájlt ment. Küldje el e-mailben, tegye USB-pendrive-ra vagy megosztott mappába: bármely böngészőben megnyílik, amely támogatja a WebGL 2-t, számítógépen, táblagépen vagy telefonon.

A fájlban:

- Húzással forgatható a modell; jobb egérgombbal húzva vagy a {{key:Shift}}+húzással eltolható; görgővel vagy csippentéssel nagyítható.
- Kattintson a listában egy nézetre: a kamera oda ér, az alkatrészek pedig felveszik az adott nézet helyzetét, megjelenését, kivágását és nagyítóját.
- Az alkatrészlista egy sorára kattintva kiemelődnek a sor alkatrészei; egy alkatrészre kattintva kiemelődik a sora.
- Ha a kézikönyvben van animáció, a modell alatti sáv lejátssza, szünetelteti és végigléptethető vele.

A fájl mindent magában hordoz, amire szüksége van (a modellt, a megjelenítőt és a three.js-t, az MIT licenc alatt), és tiltja a külső kéréseket: nem érheti el az internetet, nincs fiókja és nincs követése.

Interaktív 3D tartalom PDF-ben nem érhető el: a böngészők és a legtöbb PDF-olvasó nem jeleníti meg, a képes olvasóban pedig alapértelmezetten ki van kapcsolva. Az interaktív megoldás a HTML-fájl.
