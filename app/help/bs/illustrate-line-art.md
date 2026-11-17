---
title: Tehnički crteži: linijski crteži, slike i listovi
summary: Izvezite bilo koji pogled kao vektorski linijski crtež (SVG ili PDF) sa tri debljine linija, skrivenim linijama crtkanim ili izostavljenim, šrafiranim presječenim površinama i opcionim ispunama, ili kao PNG; stavite više pogleda na jedan list.
keywords: ilustracija, linijski crtež, tehnička ilustracija, svg, pdf, png, skrivene linije, silueta, šrafura, list, izvoz
from: 0e9bea63
---

{{ui:Izvoz}} u grupi {{ui:Izlaz}} otvara dijalog za izvoz:

- {{ui:Šta}}: scena kakva je sada, jedan pogled, ili svi pogledi.
- {{ui:Kao}}: **PDF** ili **SVG** (vektorski linijski crtež; oba se pišu iz istog crteža), **PNG linijskog crteža**, ili **PNG slika 3D pogleda** (do 4096 piksela u širinu), i [interaktivna 3D datoteka](topic:illustrate-interactive).
- {{ui:Stranice}}: jedan pogled po stranici, ili svi pogledi na jednom listu sa nazivom ispod. {{ui:Papir}}: A4, A3, Letter ili Tabloid.
- {{ui:Skrivene linije}}: crtkane ili izostavljene. {{ui:Ispune}}: kako pogled izgleda, nijedna, ravne boje ili sjenčano. {{ui:Također crtaj meke ivice}} dodaje linije detalja.

Linijski crtež ima tri debljine: obrise (siluete, otvorene ivice i obrise presjeka), oštre ivice i linije detalja. Presječene površine presjeka ili izreza kutije su šrafirane. Razvučeni pogledi dobijaju linije crta-tačka putanje od mjesta na kojem svaki dio stoji; baloni, napomene, spisak dijelova i lupa se također crtaju.

Linijski crtež se računa iz oblika dijelova metodom mreže (istom koju list crteža u PartCraftu koristi bez egzaktnog kernela), pa se zakrivljene površine crtaju svojim facetama, onako kako ih model čuva.

## Još nije izrađeno

- Slike kvaliteta path tracer renderera ModelCrafta ovdje nisu ponuđene; PNG slike su vlastiti izgled 3D pogleda.
