---
title: Vzorci in zrcaljenje značilk
summary: Ponovite značilke v vrsti z Linearno, zavrtite jih okoli osi s Krožno ali prekopirajte značilke oziroma celotno telo čez ravnino z Zrcali.
keywords: vzorec, linearni vzorec, krožni vzorec, polarna razporeditev, razporeditev, zrcali, simetrično, kopiraj značilke, krog vijakov, izvorna značilka, zrcali telo
from: 702e9edb
---

Vzorci in zrcaljenja kopirajo značilke, ki ste jih že zgradili. Kopije so del zgodovine: če spremenite original, se kopije prilagodijo.

Kopira se to, kar značilka počne: vzorec nadstavka doda material, vzorec izreza ali izvrtine ga odstrani. Vzorce lahko znova razporedite in zrcalite. Uvoženo STEP-telo lahko kopirate, zaobljitev, posnetij in lupin pa ne.

## Linearni vzorec

1. V zgodovini izberite značilko za kopiranje (na primer izvrtino ali izrez). Če nič ni izbrano, se uporabi zadnja polna značilka.
2. Izberite {{ui:Linearno}}. Vzdolž osi X se pojavijo tri kopije, vsaka 20 mm narazen.
3. V desnem podoknu nastavite:

| Nastavitev | Kaj naredi | Privzeto |
|---|---|---|
| **Značilke za kopiranje** | Označite vsako značilko za kopiranje. Naštete so le značilke nad vzorcem | Izbrana značilka |
| **Smer** | Os X, os Y, os Z, premica ali osna črta iz katere koli prejšnje skice, os zavrtitve ali izbrani rob | Os X |
| **Razmik (mm)** | Razdalja med sosednjima kopijama | 20 |
| **Število** | Skupno število, **vključno z izvirnikom** (od 1 do 1000) | 3 |
| **Obrni smer** | Kopije gredo v nasprotno smer | Izklopljeno |

### Rob kot smer

1. V pogledu kliknite ravni rob dela. Desno podokno pove **Rob** in prikaže njegovo dolžino.
2. Izberite {{ui:Linearno}}: vzorec teče vzdolž tega roba.

Ali pa izberite vzorec, izberite rob in pri **Smer** izberite „Izbrani rob (uporabi pravkar izbranega)“. Izbrani rob je fiksen v prostoru: ne sledi poznejšim spremembam. Premica skice pa sledi svoji skici.

## Krožni vzorec

1. Izberite značilko za kopiranje (na primer eno izvrtino ob robu diska).
2. Izberite {{ui:Krožno}}. Po obodu se enakomerno razporedi šest kopij.
3. Nastavite:

| Nastavitev | Kaj naredi | Privzeto |
|---|---|---|
| **Značilke za kopiranje** | Enako kot pri linearnem vzorcu | Izbrana značilka |
| **Os** | Os X, Y ali Z, premica skice, os zavrtitve ali izbrani rob | Os zadnje zavrtitve, če obstaja, sicer os Y |
| **Kot (°)** | 360 razporedi kopije enakomerno po obodu. Manj jih razporedi na ta kot, prva in zadnja sta na krajiščih | 360 |
| **Število** | Skupno število, vključno z izvirnikom | 6 |
| **Obrni smer** | Obrne v nasprotno smer | Izklopljeno |

Osi sveta potekajo skozi izhodišče. Za disk, ki ni centriran na izhodišču, uporabite osno črto skice ali os zavrtitve.

### Primer: osem vijačnih lukenj prirobnice

1. Zavrtite prirobnico (glejte [Zavrtenje obrnjenega dela](topic:revolve)) okoli osi Y.
2. Na ravni zgornji ploskvi prirobnice naredite skico, na krog vijakov postavite eno točko in izdelajte izvrtino.
3. Z izbrano izvrtino izberite {{ui:Krožno}}. Os je že „Os zavrtitve 1“.
4. Nastavite **Število** na `8`.

## Zrcaljenje

1. V zgodovini izberite značilko za zrcaljenje ali pa ničesar ne izberite, če želite zrcaliti **celotno telo, zgrajeno do zdaj**.
2. Izberite {{ui:Zrcali}}. Zrcali se čez **desno ravnino**.

Če želite zrcaliti celotno telo čez ploskev dela, najprej kliknite to ravno ploskev, nato izberite {{ui:Zrcali}}. (Klik na ploskev izbriše izbor v zgodovini, zato se vedno zrcali celotno telo.)

Nastavitve v desnem podoknu:

- **Zrcali**: označite **Celotno telo (zgrajeno do zdaj)** ali to odznačite in označite značilke za kopiranje.
- **Ravnina zrcaljenja**: sprednja ravnina, zgornja ravnina, desna ravnina, ploskev, ki jo uporablja zdaj („Ploskev za Extrude1“ ali „Fiksna ravnina“), ali „Ploskev, izbrana zdaj“. Če želite zrcaliti izbrane značilke čez ploskev: v zgodovini izberite Zrcali, v pogledu kliknite ploskev in izberite „Ploskev, izbrana zdaj“.

Zrcaljenje celotnega telesa čez ploskev podvoji del, na primer polovični nosilec spremeni v celotnega.

## Sporočila

- „Najprej zgradite značilko za kopiranje.“ ali „Najprej zgradite telo.“ Še ni ničesar polnega za kopiranje.
- „Izberite značilke za kopiranje.“ Vsa polja **Značilke za kopiranje** so izpraznjena.
- „Extrude2 nima polnega telesa za kopiranje.“ Ta značilka ni uspela ali je potlačena.
- „Fillet1 spreminja robove ali stene telesa; ne more se kopirati. Kopirajte značilke, ki ustvarjajo telesa (iztisnitve, zavrtitve, izvrtine, uvoz).“ Zaobljitev, posnetja in lupin ni mogoče razporediti ali zrcaliti; najprej razporedite, nato zaobljite.
- „Za zrcaljenje še ni telesa.“

:::note
Kopij vzorca ni mogoče preskočiti posamično, vzorec pa ne more slediti krivulji skice. Vzorci in zrcaljenja skic še niso izdelani: ponovljeno geometrijo skice narišite ročno ali z **Dodaj s koordinatami**.
:::
