---
title: Popis dijelova, rastavljeni prikazi i pomični dijelovi
summary: Dajte dijelovima sklopa broj, opis i materijal, čitajte i preuzimajte sastavnicu, izrađujte rastavljene prikaze s koracima ili automatski, pomičite nespojene dijelove rukom, postavljajte granice zglobova i izvezite cijeli sklop kao STL, 3MF ili sastavnicu.
keywords: sastavnica, popis dijelova, broj dijela, materijal, gustoća, csv, rastavljeni prikaz, rastavljanje, sažimanje, linije traga, pomicanje dijela, povlačenje, ručka, pomak, granice zgloba, izvoz sklopa, korak sklopa, crtež sklopa, balončići
from: ebc9f6f3
---

Ti su alati na desnoj ploči sklopa (vidi [Izrada sklopa sa zglobovima](topic:build-assembly)).

## Svojstva dijela

Odaberite dio na popisu lijevo. Pod **Svojstva dijela** postavite:

- **Broj dijela** (do 40 znakova) i **Opis** (do 200).
- **Materijal**: uobičajeni materijal s njegovom gustoćom ili **Prilagođena gustoća…** za upis vrijednosti u g/cm³. Ploča tada prikazuje masu dijela.

Svojstva pripadaju dijelu, pa ih svaka njegova kopija dijeli. Spremaju se u datoteku sklopa.

## Sastavnica

Ako ništa nije odabrano ({{key:Esc}}), ploča prikazuje **Sastavnicu**: po jedan redak za svaki dio s rednim brojem, količinom (koliko ima kopija), brojem dijela, nazivom, materijalom i masom. Redni brojevi slijede redoslijed kojim se dijelovi prvi put pojavljuju na popisu. Mase se računaju prema volumenu svakog dijela (fasetiranog tijela koje gradi mrežno jezgro, pa su na okruglim dijelovima malo niže) i njegovu materijalu; dio bez materijala nema masu, pa tada nema ni ukupne vrijednosti.

{{ui:Preuzmi CSV}} sprema popis kao CSV datoteku (također **Izvoz › Sastavnica (CSV)**). Otvara se u bilo kojoj tablici; tekst koji počinje znakom = ili + dobiva vodeći apostrof kako tablični program ne bi to pokrenuo kao formulu.

## Rastavljeni prikazi

Rastavljeni prikaz razdvaja dijelove radi slika. Nikada ne mijenja zglobove ni stvarni položaj dijelova: spremanje, provjere sudara i izvozi koriste stvarne položaje.

1. Ako ništa nije odabrano, odaberite {{ui:Novi pogled}} pod **Rastavljeni prikazi**.
2. Pod **Dodaj korak** označite dijelove koje korak pomiče, odaberite **Smjer** (+X … −Z, normalu plohe koju kliknete ili **Povucite strelicu u prikazu**) i **Udaljenost**, zatim {{ui:Dodaj korak}}. Uz **Povuci** povucite strelicu i pustite: korak preuzima smjer i udaljenost koju ste povukli.
3. Dodajte još koraka. Izvode se jedan za drugim.
4. Povucite klizač između **Sastavljeno** i **Rastavljeno** da animirate prikaz. Isprekidane linije traga idu od mirnog položaja svakog dijela do njegova trenutnog položaja.

{{ui:Auto (radijalno)}} pomiče svaki dio osim uzemljenog od sredine sklopa. {{ui:Auto (spojevi)}} pomiče svaki spojeni dio (sa svim što je spojeno ispod njega) van duž normale plohe njegova zgloba. Možete zadržati nekoliko imenovanih prikaza; odaberite jedan pod **Pogled** ili **Sastavljeno** da dijelovi vrate na mjesto. Prikazi se spremaju u datoteku sklopa.

## Pomicanje dijela rukom

Rukom se pomiče samo dio bez zgloba s uzemljenim dijelom (uzemljeni dio je fiksan; zglobovi postavljaju ostale). Odaberite ga i pod **Pomakni rukom**:

- Upišite **ΔX, ΔY, ΔZ** i odaberite {{ui:Pomakni}}, ili odaberite os i **Kut** pa {{ui:Okreni}} (oko središta dijela).
- {{ui:Povuci za pomak}} prikazuje strelice na dijelu: povucite strelicu za pomak duž te osi ili kvadrat za pomak u ravnini. {{ui:Povuci za okretanje}} prikazuje prstenove za okretanje. Svako povlačenje jedan je korak poništavanja. {{key:Esc}} sakriva strelice.

## Granice zglobova

Odaberite zglob koji se pomiče i pod **Granice** označite **Zadrži … između granica** za bilo koju njegovu vrijednost, zatim postavite **Najmanja** i **Najveća**. Svaka vrijednost zadržava se unutar vlastitih granica, njezin klizač pokriva samo taj raspon, a **Provjerite sudaraju li se dijelovi tijekom gibanja** provjerava samo između njih. Cilindrični zglob može ograničiti svoj kut, svoj pomak ili oboje. Promjena vrste zgloba briše granice za vrijednosti koje nova vrsta nema.

## Izvoz cijelog sklopa

U sklopu izbornik **Izvoz** zapisuje cijeli sklop sa svakim dijelom na mjestu gdje je postavljen:

- **STEP AP242 / AP214** i **Crtež (PDF)** još nisu izrađeni u ovoj verziji: trebaju točno jezgro, pa su zasivljeni. Umjesto toga izvezite STEP svakog dijela (točno tijelo) iz samog dijela.
- **STL**: jedna mreža svih dijelova. **3MF**: svaki dio jednom, a postavljen za svaku kopiju.
- **Sastavnica (CSV)**.

## Ograničenja

- Crtež sklopa i STEP sklopa još nisu izrađeni u ovoj verziji (trebaju točno jezgro). Rastavljeni prikazi služe za slike na zaslonu.
