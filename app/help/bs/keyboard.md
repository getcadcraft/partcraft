---
title: Tipke i miš
summary: Svaka prečica na tastaturi i radnja mišem u PartCraft-u, grupisana prema tome gdje radi: svuda, kopiranje i lijepljenje, na dijelu, u 3D pogledu, u skici, u historiji i u sklopu.
keywords: tastatura, prečice, vruće tipke, tipke, miš, orbita, rotiraj, pomjeri pogled, zumiranje, točkić, desni klik, poništi, ponovi, spasi, otvori, escape, izbriši, alt strelica, kopiraj, zalijepi, izreži, dupliraj, odaberi sve, srednje dugme
from: 3a59c3a3
---

Tipke ne rade dok kucaš u polju na nekom panelu, osim {{key:Mod+S}} i {{key:Mod+O}}, koje uvijek rade. Tipke slova rade bez modifikatora.

Opšte napomene o tipkama u pretraživaču i na tastaturama bez funkcijskih tipki: [Tipke, miševi i touchpadovi](common:keys).

## Svuda

| Tipka | Radnja |
|---|---|
| {{key:Mod+S}} | Spasi dio (u sklopu: sklop). Prvo zatvara otvorenu skicu |
| {{key:Mod+O}} | Otvori datoteku dijela ili sklopa (prvo pita ako ima nespašenih promjena) |
| {{key:Mod+Z}} | Poništi |
| {{key:Mod+Y}} ili {{key:Mod+Shift+Z}} | Ponovi |
| {{key:F1}} | Otvara ili zatvara ovu pomoć (također {{ui:Pomoć}} na traci aplikacije). {{key:Esc}} je također zatvara. Na mnogim laptopima i Mac tastaturama drži Fn |
| {{key:Ctrl+Shift+F}} | Režim ekrana: normalno, cijeli ekran, cijeli ekran sa sakrivenim trakama. Ctrl i na Mac-u, ne ⌘ |
| {{key:Esc}} | Izlaz iz cijelog ekrana (kad je u cijelom ekranu) |
| {{key:Mod+,}} | Postavke, uključujući karticu PartCraft (vidi [PartCraft postavke](topic:settings)) |

U polju za broj na panelu, {{key:Mod+Z}} je vlastito poništavanje teksta pretraživača. U polju za broj iznad kote skice poništava u PartCraft-u.

## Kopiranje, lijepljenje i dupliranje

Rade nad onim u čemu radiš: odabrana geometrija u otvorenoj skici, odabrani element u historiji ili odabrani dio u sklopu. Detalji u [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

| Tipka | Radnja |
|---|---|
| {{key:Mod+C}} | Kopiraj odabir |
| {{key:Mod+X}} | Izreži: kopiraj, pa izbriši |
| {{key:Mod+V}} | Zalijepi. U skici kopija prati pokazivač: klikni gdje ide |
| {{key:Mod+Shift+V}} | Zalijepi na istom mjestu: iste koordinate (u sklopu, isto mjesto) |
| {{key:Mod+D}} | Dupliraj: kopiraj i zalijepi u jednom koraku, ne mijenjajući privremenu memoriju |
| {{key:Mod+A}} | Odaberi sve (u skici) |
| {{key:Esc}} | Ukloni odabir (i otkaži lijepljenje koje prati pokazivač) |

U polju za broj ove tipke kopiraju i lijepe tekst kao i obično. Odabrani tekst na panelu kopira pretraživač.

## Na dijelu (nema otvorene skice)

| Tipka | Radnja |
|---|---|
| {{key:S}} | Skica na odabranoj ravni ili ravnoj površini; ako ništa nije odabrano, izaberi klikom gdje |
| {{key:F}} | Uklopi dio u pogled |
| {{key:M}} | Izmjeri, u svakom radnom prostoru i u sklopu; {{key:Esc}} briše odabire, {{key:Esc}} ponovo zatvara (vidi [Izmjeri razdaljine, uglove i masu](topic:measure)) |
| {{key:X}} | Pogled presjeka uključen ili isključen, u svakom radnom prostoru i u sklopu; {{key:Esc}} ga zatvara (vidi [Pogled kroz presjek](topic:section-view)) |
| {{key:Delete}} | Briše odabrani element (pita ako ga koriste drugi) |
| {{key:0}} … {{key:9}}, {{key:.}} | Sa odabranim elementom: upiši njegov glavni broj (dubina izvlačenja, prečnik rupe, broj ponavljanja obrasca, poluprečnik zaobljenja …), pa {{key:Enter}}. {{key:Esc}} zadržava stari |
| {{key:Backspace}} | Briše odabrani element, kad je odabran |
| {{key:Esc}} | Prekida odabir ravni skice ili briše odabir (uključujući ivice ili površine odabrane sa {{key:Shift}}) |

## U 3D pogledu

Prvo klikni u pogled da dobije fokus tastature.

| Tipka | Radnja |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Okreće pogled za 15 stepeni |
| {{key:Shift+Left}} i ostale strelice | Pomjera pogled |
| {{key:Plus}} ili {{key:=}} | Zumira unutra |
| {{key:Minus}} | Zumira van |

| Miš | Radnja |
|---|---|
| Prevuci lijevim dugmetom | Okreće (orbita) pogled |
| Prevuci desnim ili srednjim dugmetom | Pomjera pogled |
| {{key:Shift}}, {{key:Ctrl}} ili ⌘ držano dok prevlačiš lijevim dugmetom | Pomjera pogled |
| Okreni točkić | Zumira na pokazivaču (od sebe zumira unutra) |
| Dvoprsti pomak na touchpadu | Okreće pogled; sa {{key:Shift}}, pomjera. Štipanje zumira. Podešava se sa **Skrolanje** u [PartCraft postavkama](topic:settings) |

Uz **Okretanje pogleda: srednje dugme** u [PartCraft postavkama](topic:settings), srednje dugme okreće pogled, {{key:Shift}} sa srednjim dugmetom ili desno dugme pomjera pogled, a lijevo dugme samo odabire.
| Klik | Odaberi površinu (ona se cijela označi), ivicu ili ravan |
| {{key:Shift}}+klik na ivicu ili površinu | Skupi više ivica ili površina |
| Klik na prazan prostor | Poništi odabir |

## Dok odabiraš ivice ili površine za zaobljenje, skošenje ili ljusku


| Tipka ili miš | Radnja |
|---|---|
| Klik na ivicu ili površinu | Dodaje je, ili je izbacuje ako je već tu |
| {{key:Esc}} ili {{key:Enter}} | Završava odabir (isto kao {{ui:Gotovo}}) |
| {{key:F}} | Uklopi |
| Strelice, sa fokusiranim pogledom | Okreće; sa {{key:Shift}}, pomjera |

## Na listu crteža

| Tipka | Radnja |
|---|---|
| {{key:F}} | Uklopi list |
| {{key:Plus}} / {{key:Minus}} | Zumiranje (sa fokusiranim listom) |
| {{key:Shift+Left}} i ostale strelice | Pomjera (sa fokusiranim listom) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Pomjera odabrani GD&T simbol za 1 mm |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabrani simbol |
| {{key:Esc}} | Prekida postavljanje simbola; inače poništava odabir; inače se vraća na model |

| Miš | Radnja |
|---|---|
| Klik na pogled, sa odabranim Baza, Okvir, Završna obrada ili Detalj | Postavlja ga tamo (hvata se na najbližu liniju) |
| Klik na simbol | Odabire ga |
| Prevuci simbol | Pomjera ga (vodilica ostaje na svojoj tački) |
| Okreni točkić | Zumira na pokazivaču |
| Prevuci desnim ili srednjim dugmetom | Pomjera pogled |

## U skici

| Tipka | Radnja |
|---|---|
| {{key:L}} | Linija |
| {{key:R}} | Pravougaonik |
| {{key:C}} | Krug |
| {{key:A}} | Luk (centar, početak, kraj) |
| {{key:P}} | Tačka |
| {{key:N}} | Osna linija |
| {{key:F}} | Zaobli ugao |
| {{key:D}} | Kota |
| {{key:B}} | Spline (tačke uklapanja) |
| {{key:T}} | Odsijeci |
| {{key:E}} | Produži |
| {{key:O}} | Ofset ({{key:B}} dok ofsetuješ: obje strane) |
| {{key:M}} | Zrcali |
| {{key:S}} | Odaberi |
| {{key:Q}} | Pređi odabrane krive na konstrukcijske i nazad |
| {{key:Enter}} | Završava lanac linija ili spline |
| {{key:Delete}} ili {{key:Backspace}} | Briše odabir |
| {{key:Mod+A}} | Odabire sve u skici |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopira, izreže, zalijepi geometriju (lijepljenje prati pokazivač) |
| {{key:Mod+Shift+V}} | Zalijepi na istim koordinatama |
| {{key:Mod+D}} | Dupliraj odabir i postavi ga klikom |
| {{key:Esc}} | Korak nazad: otkaži polje za broj ili lijepljenje, završi lanac linija, vrati na Odaberi, poništi odabir, zatim zatvori skicu |

| Miš | Radnja |
|---|---|
| Klik | Postavlja tačke alatom za crtanje; odabire alatom Odaberi |
| {{key:Shift}}+klik | Dodaje u odabir ili uzima iz njega ({{key:Ctrl}}+klik na Windows i Linux, ⌘+klik na Mac-u, isto) |
| Prevuci na praznom prostoru (Odaberi) | Prozor: odabire sve što je u potpunosti unutra |
| Prevuci tačku, liniju ili ivicu kruga (Odaberi) | Pomjera je; relacije ostaju |
| Prevuci broj kote (Odaberi) | Pomjera oznaku |
| Dvoklik na kotu | Mijenja njenu vrijednost |
| Dvoklik ili desni klik dok crtaš linije | Završava lanac |
| Prevuci desnim ili srednjim dugmetom | Pomjera pogled |
| Okreni točkić | Zumira na pokazivaču |

### U polju za broj

| Tipka | Radnja |
|---|---|
| {{key:Enter}} | Primjenjuje vrijednost |
| {{key:Esc}} | Zatvara bez promjene |

Klik izvan polja također primjenjuje vrijednost.

## U historiji

| Tipka | Radnja |
|---|---|
| {{key:Tab}} | Dolazi do liste |
| {{key:Up}} / {{key:Down}} | Kreće se između redova |
| {{key:Enter}} ili {{key:Space}} | Odabire red |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Pomjera odabrani element gore ili dolje, gdje historija to dozvoljava |
| {{key:F2}} | Mijenja glavni broj elementa u njegovom redu; {{key:Enter}} ga postavlja, {{key:Esc}} zadržava stari |

| Miš | Radnja |
|---|---|
| Klik | Odabire ravan ili element |
| Dvoklik na skicu | Otvara je |
| Dvoklik na broj elementa | Mijenja ga u redu |

## U sklopu

| Tipka | Radnja |
|---|---|
| {{key:J}} | Počinje spoj: zatim klikni ravnu površinu na svakom od dva dijela |
| {{key:F}} | Uklopi |
| {{key:Esc}} | Otkazuje započeti spoj ili briše odabir |
| {{key:Delete}} | Uklanja odabrani dio ili spoj |
| {{key:Backspace}} | Uklanja odabrani dio ili spoj |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Poništi i ponovi u vlastitoj listi sklopa |
| {{key:Mod+D}} | Dupliraj odabrani dio (isti dio, pored ostalih) |
| {{key:Mod+C}}, zatim {{key:Mod+V}} ili {{key:Mod+Shift+V}} | Kopira dio, zalijepi ga pored ostalih ili na istom mjestu |

Miš u pogledu: kao u 3D pogledu iznad. Klikni dio da ga odabereš. Dvoklikni dio na listi da ga uređuješ.

## U radnom prostoru Skripta

| Tipka | Radnja |
|---|---|
| {{key:F5}} | Pokreće skriptu (u uređivaču, na panelu ili u pogledu) |
| {{key:Mod+Enter}} | Pokreće odabrane linije, ili liniju na kojoj je kursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Uvlači / izvlači odabrane linije. Da napustiš uređivač tastaturom, pritisni {{key:Esc}}, pa {{key:Tab}} |
| {{key:Mod+/}} | Komentariše odabrane linije ili ih vraća |
| {{key:Mod+F}} / {{key:Mod+H}} | Traži / traži i zamijeni u skripti; {{key:Enter}} ili {{key:F3}} sljedeće podudaranje, {{key:Shift+Enter}} ili {{key:Shift+F3}} prethodno, {{key:Esc}} zatvara |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Sklapa / otvara blok na kojem je kursor (funkciju, if, for, while … end) |
| {{key:Mod+Space}} | Nudi dovršetke za ime koje kucaš (otvara se i nakon dva slova); {{key:Up}} / {{key:Down}} biraju, {{key:Enter}} ili {{key:Tab}} uzima jedan, {{key:Esc}} zatvara |
| {{key:Enter}} u liniji ispod konzole | Pokreće tu jednu naredbu; {{key:Up}} i {{key:Down}} vraćaju ranije |
| {{key:F}} | Uklapa pogled na ono što skripte prikazuju |

Vidi [Pisanje i pokretanje skripti](topic:craftscript).

## Prečice koje pretraživač može preuzeti

- {{key:Mod+Y}} u Safari-ju može otvoriti historiju: za ponavljanje koristi {{key:Mod+Shift+Z}}.
- {{key:Mod+D}} je tipka za zabilješke pretraživača: PartCraft je preuzima dok aplikacija ima fokus, a ostavlja je kad kucaš u polju.
- {{key:F11}} i {{key:Mod+Plus}} / {{key:Mod+Minus}} su cijeli ekran i zumiranje stranice pretraživača, a ne PartCraft-ovi. Za cijeli ekran koristi {{key:Ctrl+Shift+F}}, a za model točkić.
- Funkcijske tipke na mnogim laptopima i Mac-ovima traže tipku Fn: pritisni Fn+{{key:F1}} za pomoć, ili koristi dugme {{ui:Pomoć}}.

Gestovi dodirom i na touchpadu: [Touchpad, dodir i mali ekrani](topic:trackpad-and-touch).

## Gdje je Pomjeri

Pomjeri se nalazi u meniju {{ui:Više}} grupe Elementi kao {{ui:Pomjeri tijelo}}, u polju {{ui:Pomjeri}} gdje upisuješ ΔX, ΔY i ΔZ, i kao strelice {{ui:Prevuci za pomjeranje}} na dijelu.
