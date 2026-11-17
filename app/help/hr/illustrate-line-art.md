---
title: Tehničke ilustracije: linijske ilustracije, slike i listovi
summary: Izvezite bilo koji pogled kao vektorski linijski crtež (SVG ili PDF) s tri debljine linije, skrivenim linijama isprekidanim ili izostavljenim, šrafiranim presječnim plohama i izbornim ispunama, ili kao PNG; stavite nekoliko pogleda na jedan list.
keywords: ilustracija, linijski crtež, tehnička ilustracija, svg, pdf, png, skrivene linije, silueta, šrafura, list, izvoz
from: 0e9bea63
---

{{ui:Izvoz}} u grupi {{ui:Izlaz}} otvara dijaloški okvir za izvoz:

- {{ui:Što}}: scena kakva je sada, jedan pogled ili svi pogledi.
- {{ui:Kao}}: **PDF** ili **SVG** (vektorski linijski crtež; oba se zapisuju iz istog crteža), **PNG linijskog crteža** ili **PNG slika 3D prikaza** (do 4096 piksela u širinu), i [interaktivna 3D datoteka](topic:illustrate-interactive).
- {{ui:Stranice}}: jedan pogled po stranici ili svi pogledi na jednom listu s imenom ispod. {{ui:Papir}}: A4, A3, Letter ili Tabloid.
- {{ui:Skrivene linije}}: isprekidane ili izostavljene. {{ui:Ispune}}: kako pogled izgleda, bez, ravne boje ili sjenčano. Crtaj i meke bridove dodaje detaljne linije.

Linijski crtež ima tri debljine: obrise (siluete i otvorene rubove te obrise presjeka), oštre bridove i detaljne linije. Presječne plohe presjeka ili izreza kutije su šrafirane. Rastavljeni pogledi dobivaju tragove lančane linije od mjesta na kojem stoji svaki dio; crtaju se i baloni, bilješke, popis dijelova i povećalo.

Linijski crtež izračunava se iz oblika dijelova mrežnom metodom (istom koju list crteža programa PartCraft koristi bez egzaktnog kernela), pa se zakrivljene plohe crtaju poligonima kako ih model drži.

## Još nije izrađeno

- Slike kvalitete path tracera (renderera programa ModelCraft) ovdje nisu ponuđene; PNG slike su izgled samog 3D prikaza.
