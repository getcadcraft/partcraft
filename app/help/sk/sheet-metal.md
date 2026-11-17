---
title: Plechy: príruby a rozvinutý tvar
summary: Začnite plechovú súčiastku z náčrtu (plochá doska alebo ohnutý profil), nastavte raz jej hrúbku, polomer ohybu a K-faktor, ohnite príruby z jej hrán s odľahčením ohybov a rozviňte ju ako DXF na rezanie.
keywords: rozvinutý tvar, rozvinutie, rozvinutá dĺžka, prídavok na ohyb, čiara ohybu, DXF pre laser, laserové rezanie, plech, základná príruba, hranová príruba, príruba, ohyb, polomer ohybu, K-faktor, hrúbka plechu, odľahčenie, odľahčenie ohybu, kanál, držiak, kryt, ohnutý plech
from: 144bd0f6
---

:::note
**Ešte nie je hotové v tejto verzii.** Plechy potrebujú presné geometrické jadro, ktoré táto verzia PartCraft nemá: všetky súčiastky stavia pomocou jadra siete. [Čo ešte nie je hotové](topic:not-built-yet) hovorí, čo robiť namiesto toho. Zvyšok tejto stránky popisuje, ako to funguje s presným jadrom.
:::

Plechové súčiastky začínajú **Základnou prírubou**. Nastavuje plech pre celú súčiastku: jej **hrúbku**, **vnútorný polomer ohybu** a **K-faktor**. Každá **Hranová príruba** za ňou sa ohýba s rovnakými hodnotami, takže súčiastka zostáva jedným plechom, ktorý sa dá rozvinúť. Obe vyžadujú **presné jadro** (pozri [Jadro siete](topic:solid-kernels)).

## Začiatok so základnou prírubou

1. Nakreslite náčrt. Použite **uzavretý profil** pre plochú dosku (obdĺžnik alebo ľubovoľný uzavretý obrys s dierami). Použite **jednu otvorenú reťaz čiar** pre ohnutý plech, napríklad L, U alebo Z nakreslené ako pohľad na hranu plechu.
2. Vyberte náčrt v histórii prvkov.
3. Otvorte {{ui:Viac}} v skupine Prvky a zvoľte {{ui:Základná príruba}}.

V pravom paneli:

- **Hrúbka (mm)** je hrúbka plechu.
- **Polomer ohybu (mm)** je vnútorný polomer každého ohybu. 0 dá ostrý vnútorný roh; vonkajšia strana sa stále ohne s polomerom rovnajúcim sa jednej hrúbke.
- **K-faktor** určuje, kde leží neutrálna vrstva vnútri plechu, od 0 (vnútorná plocha) po 0.5 (stred). Rozhoduje o tom, aká dlhá je plech po rozložení. 0.44 je predvolené; váš výrobca alebo dodávateľ materiálu vám dá svoj.
- **Hĺbka (mm)** je, ako ďaleko ohnutý profil vybieha z roviny náčrtu. Doska ju ignoruje.
- **Hrúbka mimo ohybov**: otvorený profil je jedna plocha plechu. Predvolene hrúbka ide na vnútornú stranu prvého ohybu, takže čiary, ktoré ste nakreslili, sú vonkajšou stranou kanála. Zaškrtnutím ju dáte na vnútornú stranu. Výsledok je rovnaký, odkiaľ ste začali kresliť.

Každý roh otvorenej reťaze sa stane ohybom. Čiara, ktorá je príliš krátka na svoje ohyby, to oznámi spolu s dĺžkou, ktorú potrebuje.

## Ohnutie hranovej príruby

1. Kliknite na rovnú hranu hornej alebo spodnej plochy plechu (dlhé hrany, nie tenké).
2. Zvoľte {{ui:Viac}} › {{ui:Hranová príruba}}. Ak nie je vybraná žiadna hrana, PartCraft počká, kým na jednu kliknete; {{key:Esc}} zruší.

Príruba sa ohne nahor od plochy tej hrany okolo vnútorného polomera plechu a potom pokračuje rovno. V paneli:

- **Uhol (°)** je, ako veľmi sa ohne, od 1 do 180. 90 je štvorcová príruba.
- **Dĺžka (mm)** je rovná časť za ohybom.
- **Ohnúť opačným smerom** ju ohne z druhej plochy (nadol namiesto nahor).
- **Odsadenie na začiatku** a **Odsadenie na konci** skrátia prírubu z každého konca hrany.
- **Odľahčenie ohybu**: keď je koniec odsadený, do plechu sa vyreže štrbina vedľa neho, aby ohyb tam plech neroztrhol. **Šírka odľahčenia** nastavuje šírku štrbiny; jej hĺbka je polomer ohybu plus hrúbka. Zvoľte **Žiadne**, ak chcete roh nechať nevyrezaný.

Hranu zmeníte neskôr tak, že v paneli stlačíte {{ui:Vybrať}} a kliknete na inú.

:::tip
Na hrúbku a polomer používajte parametre (pozri [Parametre a rovnice](topic:parameters)), aby zmena hrúbky aktualizovala všetky príruby naraz.
:::

## Rozvinutie

Obe panely končia **Rozvinutým tvarom**. Stlačte {{ui:Rozvinúť}}:

- Náhľad ukáže plech rozložený, so strednou čiarou každého ohybu prerušovanou.
- **Veľkosť** a **Plocha** sú hodnoty rovného polotovaru.
- Každý ohyb je uvedený so svojím smerom (**nahor** alebo **nadol**, pozerané zo strany náčrtu základnej príruby), uhlom a vnútorným polomerom.

Každý ohyb zaberá dĺžku neutrálnej vrstvy plechu, **prídavok na ohyb**: uhol (v radiánoch) × (vnútorný polomer + K-faktor × hrúbka). Takže 90° ohyb 2 mm plechu s polomerom 2 mm a K-faktorom 0.44 pridá 4.52 mm rovného plechu.

Na plochej doske sa diery, vyrezania a odľahčenia ohybov ukážu v rozvinutí tam, kde skutočne sú, vrátane dier cez prírubu.

Ak chcete rezať viacero dielov, stlačte pod rozvinutým tvarom {{ui:Rozmiestniť na tabule…}}: pozri [Rozmiestnenie rozvinutých dielov na tabuliach](topic:nest-flat-parts). Ohnutá základná príruba sa rozloží ako jeden obdĺžnik: jej rozvinutá dĺžka × jej hĺbka, s čiarou ohybu pre každý roh.

{{ui:Uložiť DXF}} uloží rozvinutý tvar pre laser, lis alebo vodný lúč, v milimetroch:

- obrys na vrstve **OUTLINE**, ako čiary, oblúky a kružnice;
- čiary ohybov na vrstve **BEND**, prerušované;
- poznámka pri každom ohybe na vrstve **BEND_NOTES**, napríklad "UP 90° R2".

Keď čokoľvek zmeníte, rozvinutie zmizne; pre nové stlačte znova {{ui:Rozvinúť}}.

:::note
Pred rezaním skontrolujte K-faktor s vašou dielňou: dĺžka rozvinutia od neho závisí a mení sa podľa materiálu, hrúbky a náradia.
:::

## Hlásenia

- **Plech potrebuje pred ním základnú prírubu** — hranová príruba bola pridaná pred akoukoľvek základnou prírubou. Presuňte ju pod jednu z nich alebo najprv pridajte základnú prírubu.
- **Hranová príruba potrebuje rovnú hranu** — príruby sa ohýbajú iba pozdĺž čiar; zakrivené hrany zatiaľ nemôžu mať prírubu.
- **Táto hrana nie je na ploche hrúbky plechu** — hrana patrí ploche, ktorá nie je horná ani spodná plocha plechu (napríklad stena diery). Vyberte hranu hornej alebo spodnej plochy.
- **Odsadenia nenechajú nič z hrany** — obe odsadenia spolu zaberú celú hranu alebo viac.
- **Hranové príruby na ohnutej základnej prírube sa zatiaľ nedajú rozvinúť** — začnite z plochej dosky a všetko ohnite hranovými prírubami, ktoré sa rozvinú.
- **Vyrezania a diery vytvorené po ohnutej základnej prírube sa zatiaľ v jej rozvinutí nezobrazujú** — rozvinutie ohnutého profilu je iba jeho rozvinutý obdĺžnik.
