---
title: Tasteri i miš
summary: Svaka tastaturna prečica i radnja mišem u PartCraft-u, grupisane prema tome gde rade: svuda, kopiranje i nalepljivanje, na delu, u 3D prikazu, u skici, u istoriji i u sklopu.
keywords: tastatura, prečice, tastaturne prečice, tasteri, miš, orbit, okretanje, pomeranje, zumiranje, točkić, desni klik, opozovi, ponovi, sačuvaj, otvori, escape, izbriši, alt strelica, kopiraj, nalepi, iseci, dupliraj, izaberi sve, srednje dugme
from: 3a59c3a3
---

Tasteri ne rade dok kucate u polju u panelu, osim {{key:Mod+S}} i {{key:Mod+O}}, koji uvek rade. Slovni tasteri rade bez modifikatora.

Opšte napomene o tasterima u pregledaču i na tastaturama bez funkcijskih tastera: [Tasteri, miševi i tačpedovi](common:keys).

## Svuda

| Taster | Radnja |
|---|---|
| {{key:Mod+S}} | Sačuvaj deo (u sklopu: sklop). Prvo zatvara otvorenu skicu |
| {{key:Mod+O}} | Otvori datoteku dela ili sklopa (prvo pita ako ima nesačuvanih izmena) |
| {{key:Mod+Z}} | Opozovi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:F1}} | Otvori ili zatvori ovu pomoć (takođe {{ui:Pomoć}} u traci aplikacije). {{key:Esc}} je takođe zatvara. Na mnogim laptopovima i Mac računarima držite Fn |
| {{key:Ctrl+Shift+F}} | Režim ekrana: normalan, ceo ekran, ceo ekran sa sakrivenim trakama. Takođe Control na Mac računaru, a ne ⌘ |
| {{key:Esc}} | Izlaz iz celog ekrana (kada je na celom ekranu) |
| {{key:Mod+,}} | Podešavanja, uključujući karticu PartCraft (vidi [PartCraft podešavanja](topic:settings)) |

U polju za broj u panelu, {{key:Mod+Z}} je opozivanje teksta samog pregledača. U polju za broj iznad kote skice, opoziva u PartCraft-u.

## Kopiranje, nalepljivanje i dupliranje

Rade nad onim sa čim radite: izabranom geometrijom u otvorenoj skici, izabranim elementom u istoriji ili izabranim delom u sklopu. Pojedinosti u [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).

| Taster | Radnja |
|---|---|
| {{key:Mod+C}} | Kopiraj izbor |
| {{key:Mod+X}} | Iseci: kopiraj, pa izbriši |
| {{key:Mod+V}} | Nalepi. U skici kopija prati pokazivač: kliknite gde treba da ide |
| {{key:Mod+Shift+V}} | Nalepi na mestu: iste koordinate (u sklopu, isto mesto) |
| {{key:Mod+D}} | Dupliraj: kopiraj i nalepi u jednom koraku, ostavljajući međuspremnik netaknutim |
| {{key:Mod+A}} | Izaberi sve (u skici) |
| {{key:Esc}} | Poništi izbor (i otkaži nalepljivanje koje prati pokazivač) |

U polju za broj ovi tasteri kopiraju i nalepljuju tekst kao obično. Izabrani tekst u panelu kopira pregledač.

## Na delu (nema otvorene skice)

| Taster | Radnja |
|---|---|
| {{key:S}} | Skica na izabranoj ravni ili ravnoj površi; ako ništa nije izabrano, izaberite mesto klikom |
| {{key:F}} | Uklopi deo u prikaz |
| {{key:M}} | Izmeri, u svakom radnom prostoru i u sklopu; {{key:Esc}} briše izbor, a sledeći {{key:Esc}} zatvara (vidi [Izmerite rastojanja, uglove i masu](topic:measure)) |
| {{key:X}} | Prikaz preseka uključen ili isključen, u svakom radnom prostoru i u sklopu; {{key:Esc}} zatvara (vidi [Pogled unutra preko preseka](topic:section-view)) |
| {{key:Delete}} | Briše izabrani element (pita ako ga koriste drugi) |
| {{key:0}} … {{key:9}}, {{key:.}} | Sa izabranim elementom: unesite njegov glavni broj (dubinu Izvlačenja, prečnik Rupe, broj ponavljanja Šablona, poluprečnik Zaobljenja …), pa {{key:Enter}}. {{key:Esc}} zadržava stari |
| {{key:Backspace}} | Briše izabrani element, kada je jedan izabran |
| {{key:Esc}} | Prestaje izbor ravni skice, ili briše izbor (uključujući ivice ili površi izabrane sa {{key:Shift}}) |

## U 3D prikazu

Prvo kliknite u prikaz da bi imao fokus tastature.

| Taster | Radnja |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Okreni prikaz za 15 stepeni |
| {{key:Shift+Left}} i ostale strelice | Pomeri pogled |
| {{key:Plus}} ili {{key:=}} | Uvećaj |
| {{key:Minus}} | Umanji |

| Miš | Radnja |
|---|---|
| Prevlačenje levim dugmetom | Okreni (orbit) prikaz |
| Prevlačenje desnim ili srednjim dugmetom | Pomeri pogled |
| {{key:Shift}}, {{key:Ctrl}} ili ⌘ držano dok prevlačite levim dugmetom | Pomeri pogled |
| Pomeranje točkića | Zumiraj na pokazivaču (od vas uvećava) |
| Dvoprsto prevlačenje na tačpedu | Okreni prikaz; sa {{key:Shift}}, pomeri pogled. Stiskanje zumira. Podešava se preko **Skrolovanje** u [PartCraft podešavanjima](topic:settings) |

Uz **Okretanje prikaza: srednje dugme** u [PartCraft podešavanjima](topic:settings), srednje dugme okreće prikaz, {{key:Shift}} sa srednjim ili desnim dugmetom pomera pogled, a levo dugme samo bira.
| Klik | Izaberi površ (ona se celom istakne), ivicu ili ravan |
| {{key:Shift}}+klik na ivicu ili površ | Skupi više ivica ili površi |
| Klik na prazan prostor | Poništi izbor |

## Dok birate ivice ili površi za zaobljenje, obaranje ivice ili ljusku

| Taster ili miš | Radnja |
|---|---|
| Klik na ivicu ili površ | Dodaj je, ili je izbaci ako je već tu |
| {{key:Esc}} ili {{key:Enter}} | Završi izbor (isto kao {{ui:Gotovo}}) |
| {{key:F}} | Uklopi |
| Strelice, sa fokusiranim prikazom | Okreni; sa {{key:Shift}}, pomeri pogled |

## Na listu crteža

| Taster | Radnja |
|---|---|
| {{key:F}} | Uklopi list |
| {{key:Plus}} / {{key:Minus}} | Zumiraj (sa fokusiranim listom) |
| {{key:Shift+Left}} i ostale strelice | Pomeri pogled (sa fokusiranim listom) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Pomeri izabrani GD&T simbol za 1 mm |
| {{key:Delete}} ili {{key:Backspace}} | Briše izabrani simbol |
| {{key:Esc}} | Prestaje postavljanje simbola; inače poništi izbor; inače se vraća na model |

| Miš | Radnja |
|---|---|
| Klik na pogled, sa izabranim Referenca, Okvir, Završna obrada ili Detalj | Postavi ga tu (prilepi se na najbližu liniju) |
| Klik na simbol | Izaberi ga |
| Prevlačenje simbola | Pomeri ga (pokazna linija ostaje na svojoj tački) |
| Pomeranje točkića | Zumiraj na pokazivaču |
| Prevlačenje desnim ili srednjim dugmetom | Pomeri pogled |

## U skici

| Taster | Radnja |
|---|---|
| {{key:L}} | Linija |
| {{key:R}} | Pravougaonik |
| {{key:C}} | Krug |
| {{key:A}} | Luk (centar, početak, kraj) |
| {{key:P}} | Tačka |
| {{key:N}} | Osna linija |
| {{key:F}} | Zaobli ugao |
| {{key:D}} | Kota |
| {{key:B}} | Splajn (kroz tačke) |
| {{key:T}} | Odseci |
| {{key:E}} | Produži |
| {{key:O}} | Ofset ({{key:B}} tokom ofseta: obe strane) |
| {{key:M}} | Ogledaj |
| {{key:S}} | Izaberi |
| {{key:Q}} | Prebaci izabrane krive na pomoćne i nazad |
| {{key:Enter}} | Završi lanac linija ili splajn |
| {{key:Delete}} ili {{key:Backspace}} | Briše izbor |
| {{key:Mod+A}} | Izaberi sve u skici |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopiraj, iseci, nalepi geometriju (nalepljivanje prati pokazivač) |
| {{key:Mod+Shift+V}} | Nalepi na istim koordinatama |
| {{key:Mod+D}} | Dupliraj izbor i postavi ga klikom |
| {{key:Esc}} | Korak nazad: otkaži polje za broj ili nalepljivanje, završi lanac linija, vrati na Izaberi, poništi izbor, pa zatvori skicu |

| Miš | Radnja |
|---|---|
| Klik | Postavlja tačke alatom za crtanje; bira sa Izaberi |
| {{key:Shift}}+klik | Dodaje u izbor ili oduzima iz njega ({{key:Ctrl}}+klik na Windows i Linux, ⌘+klik na Mac, isto) |
| Prevlačenje po praznom prostoru (Izaberi) | Prozor: bira sve što je potpuno unutra |
| Prevlačenje tačke, linije ili ivice kruga (Izaberi) | Pomera je; relacije ostaju |
| Prevlačenje broja kote (Izaberi) | Pomera oznaku |
| Dvostruki klik na kotu | Menja njenu vrednost |
| Dvostruki klik ili desni klik dok crtate linije | Završava lanac |
| Prevlačenje desnim ili srednjim dugmetom | Pomeri pogled |
| Pomeranje točkića | Zumiraj na pokazivaču |

### U polju za broj

| Taster | Radnja |
|---|---|
| {{key:Enter}} | Primeni vrednost |
| {{key:Esc}} | Zatvori bez promene |

Klik pored takođe primenjuje vrednost.

## U listi istorije

| Taster | Radnja |
|---|---|
| {{key:Tab}} | Dođi do liste |
| {{key:Up}} / {{key:Down}} | Pređi između redova |
| {{key:Enter}} ili {{key:Space}} | Izaberi red |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Pomeri izabrani element gore ili dole, gde istorija dozvoljava |
| {{key:F2}} | Menja glavni broj elementa u njegovom redu; {{key:Enter}} ga postavlja, {{key:Esc}} zadržava stari |

| Miš | Radnja |
|---|---|
| Klik | Izaberi ravan ili element |
| Dvostruki klik na skicu | Otvori je |
| Dvostruki klik na broj elementa | Promeni ga u redu |

## U sklopu

| Taster | Radnja |
|---|---|
| {{key:J}} | Počni spoj: zatim kliknite ravnu površ na svakom od dva dela |
| {{key:F}} | Uklopi |
| {{key:Esc}} | Otkaži započeti spoj ili poništi izbor |
| {{key:Delete}} | Ukloni izabrani deo ili spoj |
| {{key:Backspace}} | Ukloni izabrani deo ili spoj |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Opozovi i ponovi u sopstvenoj listi sklopa |
| {{key:Mod+D}} | Dupliraj izabrani deo (isti deo, pored ostalih) |
| {{key:Mod+C}}, zatim {{key:Mod+V}} ili {{key:Mod+Shift+V}} | Kopiraj deo, nalepi ga pored ostalih ili na istom mestu |

Miš u prikazu: kao u 3D prikazu iznad. Kliknite deo da ga izaberete. Dvostruki klik na deo u listi ga menja.

## U radnom prostoru Skripta

| Taster | Radnja |
|---|---|
| {{key:F5}} | Pokreni skriptu (u uređivaču, panelu ili prikazu) |
| {{key:Mod+Enter}} | Pokreni izabrane redove ili red na kome je kursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Uvuci / izvuci izabrane redove. Da napustite uređivač tastaturom, pritisnite {{key:Esc}}, pa {{key:Tab}} |
| {{key:Mod+/}} | Zakomentariši izabrane redove ili ih vrati |
| {{key:Mod+F}} / {{key:Mod+H}} | Traži / traži i zameni u skripti; {{key:Enter}} ili {{key:F3}} sledeći pogodak, {{key:Shift+Enter}} ili {{key:Shift+F3}} prethodni, {{key:Esc}} zatvara |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Sažmi / raširi blok na kome je kursor (funkciju, if, for, while … end) |
| {{key:Mod+Space}} | Prikaži dovršavanja za ime koje kucate (otvara se i posle dva slova); {{key:Up}} / {{key:Down}} biraju, {{key:Enter}} ili {{key:Tab}} uzima jedno, {{key:Esc}} zatvara |
| {{key:Enter}} u redu ispod konzole | Izvrši taj jedan iskaz; {{key:Up}} i {{key:Down}} vraćaju ranije |
| {{key:F}} | Uklopi prikaz u ono što skripte prikazuju |

Vidi [Pišite i pokrećite skripte](topic:craftscript).

## Prečice koje pregledač može da preuzme

- {{key:Mod+Y}} u Safari pregledaču može da otvori istoriju: koristite {{key:Mod+Shift+Z}} za ponovo.
- {{key:Mod+D}} je taster za obeleživače pregledača: PartCraft ga preuzima dok je aplikacija u fokusu, a ostavlja ga kada kucate u polju.
- {{key:F11}} i {{key:Mod+Plus}} / {{key:Mod+Minus}} su pun ekran i zumiranje stranice pregledača, a ne PartCraft-ovi. Koristite {{key:Ctrl+Shift+F}} za pun ekran i točkić za model.
- Funkcijski tasteri na mnogim laptopovima i Mac računarima traže taster Fn: pritisnite Fn+{{key:F1}} za pomoć, ili koristite dugme {{ui:Pomoć}}.

Gestovi na dodir i tačpedu: [Tačped, dodir i mali ekrani](topic:trackpad-and-touch).

## Gde je Pomeranje

{{ui:Pomeranje}} se nalazi u grupi {{ui:Osobine}} u meniju {{ui:Više}} kao {{ui:Pomeri telo}}, u polju {{ui:Pomeranje}} u koje kucate ΔX, ΔY i ΔZ, i kao strelice {{ui:Prevuci da pomeriš}} na delu.
