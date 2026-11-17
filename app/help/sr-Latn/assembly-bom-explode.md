---
title: Lista delova, razbijeni prikazi i pomeranje delova
summary: Dodeli delovima sklopa broj, opis i materijal, čitaj i preuzmi specifikaciju materijala, pravi razbijene prikaze koracima ili automatski, ručno pomeraj delove koji nisu spojeni, podešavaj ograničenja spojeva i izvezi ceo sklop kao STL, 3MF ili specifikaciju materijala.
keywords: specifikacija materijala, bom, lista delova, broj dela, materijal, gustina, csv, razbijeni prikaz, razbij, skupi, linije putanje, pomeri deo, prevuci, gizmo, pomeranje, rotiranje, ograničenja spojeva, izvoz sklopa, korak sklopa, crtež sklopa, balončići
from: ebc9f6f3
---

Ovi alati nalaze se na desnom panelu sklopa (vidi [Sastavi sklop](topic:build-assembly)).

## Svojstva dela

Izaberi deo na listi levo. Pod **Svojstva dela** podesi:

- **Broj dela** (do 40 znakova) i **Opis** (do 200).
- **Materijal**: uobičajen materijal sa njegovom gustinom, ili **Prilagođena gustina…** da upišeš u g/cm³. Panel zatim prikazuje masu dela.

Svojstva pripadaju delu, pa svaka kopija deli ista svojstva. Čuvaju se u fajlu sklopa.

## Specifikacija materijala

Sa ničim izabranim ({{key:Esc}}), panel prikazuje **Specifikacija materijala**: jedan red po delu sa rednim brojem, količinom (koliko kopija), brojem dela, nazivom, materijalom i masom. Redni brojevi prate redosled kojim se delovi prvi put pojavljuju na listi. Mase koriste zapreminu svakog dela (od fasetiranog tela koje gradi mrežni kernel, pomalo manje kod okruglih delova) i njegov materijal; deo bez materijala nema masu, pa tada nema ni ukupnog zbira.

{{ui:Preuzmi CSV}} čuva listu kao CSV fajl (takođe **Izvezi › Specifikacija materijala (CSV)**). Otvara se u bilo kom tabelarnom programu; tekst koji počinje sa = ili + dobija vodeći apostrof da ga tabelarni program ne bi izvršio kao formulu.

## Razbijeni prikazi

Razbijeni prikaz razdvaja delove za slike. Nikad ne menja spojeve niti gde se delovi zaista nalaze: čuvanje, provere sudara i izvoz koriste prave položaje.

1. Sa ničim izabranim izaberi {{ui:Novi prikaz}} pod **Razbijeni prikazi**.
2. Pod **Dodaj korak** označi delove koje korak pomera, izaberi **Pravac** (+X … −Z, normalu površi na koju klikneš, ili **Prevuci strelicu u prikazu**) i **Razdaljinu**, pa {{ui:Dodaj korak}}. Sa **Prevuci**, prevuci strelicu i pusti: korak preuzima pravac i razdaljinu koje si prevukao.
3. Dodaj još koraka. Oni se izvode jedan za drugim.
4. Prevuci klizač između **Sastavljeno** i **Razbijeno** da animiraš prikaz. Isprekidane linije putanje idu od položaja mirovanja svakog dela do njegovog sadašnjeg položaja.

{{ui:Auto (radijalno)}} pomera svaki deo osim učvršćenog od sredine sklopa. {{ui:Auto (spojevi)}} pomera svaki spojeni deo (sa svim što je spojeno ispod njega) duž normale površi njegovog spoja. Možeš da čuvaš više imenovanih prikaza; biraj jedan u **Prikaz**, ili **Sastavljeno** da vratiš delove na mesto. Prikazi se čuvaju u fajlu sklopa.

## Pomeri deo rukom

Samo deo bez spoja na učvršćen deo može da se pomera rukom (učvršćen deo je fiksiran; spojevi postavljaju ostale). Izaberi ga i pod **Pomeri rukom**:

- Unesi **ΔX, ΔY, ΔZ** i izaberi {{ui:Pomeranje}}, ili izaberi osu i **Ugao** i {{ui:Okreni}} (oko sredine dela).
- {{ui:Prevuci da pomeriš}} prikazuje strelice na delu: prevuci strelicu da pomeriš duž te ose, ili kvadrat da pomeriš u ravni. {{ui:Prevuci da okreneš}} prikazuje prstenove za okretanje. Svako prevlačenje je jedan korak za Opozovi. {{key:Esc}} sakriva strelice.

## Ograničenja spojeva

Izaberi spoj koji se pomera i pod **Ograničenja** označi **Zadrži … između ograničenja** za bilo koju njegovu vrednost, pa podesi **Najmanje** i **Najveće**. Svaka vrednost ostaje u svojim granicama, njen klizač pokriva samo taj opseg, a {{ui:Proveri kretanje na sudare}} prelazi samo između njih. Cilindrični spoj može da ograniči svoj ugao, pomak ili oba. Promena tipa spoja uklanja ograničenja na vrednostima koje novi tip nema.

## Izvoz celog sklopa

U sklopu meni **Izvezi** upisuje ceo sklop sa svakim delom tamo gde je postavljen:

- **STEP AP242 / AP214** i **Crtež (PDF)** još nisu napravljeni u ovoj verziji: potreban im je tačan kernel, pa su zasivljeni. Umesto toga izvezi STEP svakog dela (tačno telo) iz samog dela.
- **STL**: jedna mreža svih delova. **3MF**: svaki deo jednom, postavljen jednom po kopiji.
- **Specifikacija materijala (CSV)**.

## Ograničenja

- Crtež sklopa i STEP sklopa još nisu napravljeni u ovoj verziji (potreban im je tačan kernel). Razbijeni prikazi služe za slike na ekranu.
