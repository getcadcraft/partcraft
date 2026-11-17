---
title: Lista dijelova, rastavljeni prikazi i pomjeranje dijelova
summary: Dodijelite dijelovima sklopa broj, opis i materijal, čitajte i preuzimajte specifikaciju materijala, pravite rastavljene prikaze koracima ili automatski, pomjerajte nespojene dijelove rukom, postavljajte granice spojeva i izvozite cijeli sklop kao STL, 3MF ili specifikaciju materijala.
keywords: bom, specifikacija materijala, lista dijelova, broj dijela, materijal, gustina, csv, rastavljeni prikaz, rastavljanje, sažimanje, linije traga, pomjeri dio, povlačenje, gizmo, translacija, rotacija, granice spoja, izvoz sklopa, korak sklopa, crtež sklopa, balončići
from: ebc9f6f3
---

Ovi alati su u desnom panelu sklopa (vidi [Sastavite sklop sa spojevima](topic:build-assembly)).

## Svojstva dijela

Izaberite dio na listi lijevo. Pod **Svojstva dijela** postavite:

- **Broj dijela** (do 40 znakova) i **Opis** (do 200).
- **Materijal**: uobičajen materijal s njegovom gustinom, ili **Prilagođena gustina…** da upišete u g/cm³. Panel tada prikazuje masu dijela.

Svojstva pripadaju dijelu, pa svaka kopija dijeli iste vrijednosti. Čuvaju se u datoteci sklopa.

## Specifikacija materijala

Kad ništa nije izabrano ({{key:Esc}}), panel prikazuje **Specifikaciju materijala**: jedan red po dijelu, sa rednim brojem, količinom (koliko kopija), brojem dijela, nazivom, materijalom i masom. Redni brojevi slijede redoslijed kojim se dijelovi prvi put pojavljuju na listi. Mase koriste zapreminu svakog dijela (tijela sastavljenog od ravnih površina koje gradi mrežni kernel, pa je malo niže kod okruglih dijelova) i njegov materijal. Dio bez materijala nema masu, pa tada nema ni ukupne vrijednosti.

{{ui:Preuzmi CSV}} sprema listu kao CSV datoteku (također **Izvoz › Specifikacija materijala (CSV)**). Otvara se u bilo kojem tabelarnom programu. Tekst koji počinje sa = ili + dobija vodeći apostrof, da ga tabelarni program ne izvrši kao formulu.

## Rastavljeni prikazi

Rastavljeni prikaz razdvaja dijelove radi slika. Nikad ne mijenja spojeve ni stvarni položaj dijelova: čuvanje, provjere sudara i izvozi koriste stvarne pozicije.

1. Kad ništa nije izabrano, izaberite {{ui:Novi pogled}} pod **Rastavljeni prikazi**.
2. Pod **Dodaj korak** označite dijelove koje korak pomjera, izaberite **Smjer** (+X … −Z, normalu površine koju kliknete, ili **Povuci strelicu u prikazu**) i **Udaljenost**, pa {{ui:Dodaj korak}}. Sa **Povuci**, povucite strelicu i pustite: korak preuzima smjer i udaljenost koje ste povukli.
3. Dodajte još koraka. Izvode se jedan za drugim.
4. Povucite klizač između **Sastavljeno** i **Rastavljeno** da animirate prikaz. Isprekidane linije traga idu od položaja mirovanja svakog dijela do njegovog sadašnjeg položaja.

{{ui:Auto (radijalno)}} pomjera svaki dio osim učvršćenog od sredine sklopa. {{ui:Auto (spojevi)}} pomjera svaki spojeni dio (sa svim što je spojeno ispod njega) duž normale površine svog spoja. Možete čuvati više imenovanih prikaza; izaberite jedan u **Pogled**, ili **Sastavljeno** da vratite dijelove. Prikazi se čuvaju u datoteci sklopa.

## Pomjeranje dijela rukom

Rukom se pomjera samo dio bez spoja sa učvršćenim dijelom (učvršćeni dio je fiksiran, a spojevi postavljaju ostale). Izaberite ga i pod **Pomjeri rukom**:

- Upišite **ΔX, ΔY, ΔZ** i izaberite {{ui:Pomjeri}}, ili izaberite osu i **Ugao** pa {{ui:Okreni}} (oko sredine dijela).
- {{ui:Prevuci za pomjeranje}} prikazuje strelice na dijelu: povucite strelicu da pomjerate duž te ose, ili kvadrat da pomjerate u ravnini. {{ui:Prevuci za okretanje}} prikazuje prstene za okretanje. Svako povlačenje je jedan korak poništavanja. {{key:Esc}} sakriva strelice.

## Granice spoja

Izaberite spoj koji se pomjera i pod **Granice** označite **Zadrži … između granica** za bilo koju njegovu vrijednost, pa postavite **Najmanje** i **Najviše**. Svaka vrijednost ostaje unutar svojih granica, njen klizač pokriva samo taj opseg, a {{ui:Provjeri kretanje na sudare}} prolazi samo između njih. Cilindrični spoj može ograničiti svoj ugao, svoj pomak ili oboje. Promjena tipa spoja uklanja granice za vrijednosti koje novi tip nema.

## Izvoz cijelog sklopa

U sklopu meni **Izvoz** upisuje cijeli sklop sa svakim dijelom na njegovom mjestu:

- **STEP AP242 / AP214** i **Crtež (PDF)** još nisu izrađeni u ovoj verziji: zahtijevaju tačan kernel, pa su zasivljeni. Umjesto toga izvezite STEP svakog dijela (tačno tijelo) iz samog dijela.
- **STL**: jedna mreža svih dijelova. **3MF**: svaki dio jednom, postavljen jednom po kopiji.
- **Specifikacija materijala (CSV)**.

## Ograničenja

- Crtež sklopa i STEP sklopa još nisu izrađeni u ovoj verziji (zahtijevaju tačan kernel). Rastavljeni prikazi služe za slike na ekranu.
