---
title: Tehničke ilustracije: linijski crteži, slike i listovi
summary: Izvezite bilo koji pogled kao vektorski linijski crtež (SVG ili PDF) sa tri debljine linija, skrivene linije isprekidane ili izostavljene, šrafirane preseke i opcionalne ispune, ili kao PNG; stavite više pogleda na jedan list.
keywords: ilustracija, linijski crtež, tehnička ilustracija, svg, pdf, png, skrivene linije, silueta, šrafura, list, izvoz
from: 0e9bea63
---

{{ui:Izvezi}} u grupi {{ui:Izlaz}} otvara dijalog za izvoz:

- {{ui:Šta}}: scena kakva je sada, jedan pogled ili svi pogledi.
- {{ui:Kao}}: **PDF** ili **SVG** (vektorski linijski crtež; oba se pišu iz istog crteža), **PNG linijskog crteža**, ili **PNG slika 3D pogleda** (do 4096 piksela u širinu), i [interaktivna 3D datoteka](topic:illustrate-interactive).
- {{ui:Stranice}}: jedan pogled po stranici, ili svi pogledi na jednom listu sa nazivom ispod. {{ui:Papir}}: A4, A3, Letter ili Tabloid.
- {{ui:Skrivene linije}}: isprekidane ili izostavljene. {{ui:Ispune}}: kako pogled izgleda, bez, ravne boje ili senčeno. {{ui:Takođe nacrtaj meke ivice}} dodaje linije detalja.

Linijski crtež ima tri debljine: konture (siluete, otvorene ivice i konture preseka), oštre ivice i linije detalja. Preseci preseka ili odsecanja kutije su šrafirani. Eksplodirani pogledi dobijaju tragove crta-tačka linijom od mesta na kom se svaki deo nalazi; baloni, napomene, spisak delova i lupa se takođe crtaju.

Linijski crtež se izračunava iz oblika delova mrežnom metodom (ista koju list crteža PartCraft-a koristi bez tačnog jezgra), pa se krive površi crtaju pomoću facete, onako kako ih model čuva.

## Još nije izrađeno

- Slike kvaliteta path tracer-a (renderer ModelCraft-a) ovde nisu ponuđene; PNG slike su sopstveni izgled 3D pogleda.
