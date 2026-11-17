---
title: Upravljanje dijelom pomoću parametara
summary: Imenujte veličine koje su važne (širina, debljina, veličina vijka), povežite bilo koju vrijednost značajke ili dimenziju skice s njima pomoću =, i promijenite cijeli dio iz jedne tablice.
keywords: parametri, gdje se koristi, koristi se, globalne varijable, varijable, jednadžbe, namjera dizajna, upravljajuće dimenzije, veza, izraz, formula, imenovanje dimenzije, povezane vrijednosti
from: 58c646ea
---

Parametar je imenovani broj, na primjer `width = 120` ili `margin = bolt * 1.5`. Povežite dubinu, promjer rupe, broj ponavljanja uzorka ili dimenziju skice s njim, i promjena parametra mijenja sve njih u jednom koraku. Tako namjeru dizajna čuvate u samom dijelu, a ne u glavi.

## Dodavanje parametara

1. Na desnoj ploči kliknite karticu {{ui:Parameters}}.
2. Pod **Varijable** upišite naziv u polje „name“, na primjer `width`.
3. Upišite njegovu vrijednost u sljedeće polje, na primjer `120`, i pritisnite {{key:Enter}} (ili kliknite {{ui:Add}}).

Vrijednost može biti broj ili izraz drugih parametara: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Stupac **Vrijednost** pokazuje na što se to svodi. Naziv počinje slovom ili `_` i sadrži samo slova, znamenke i `_`; nazivi funkcija i jedinica (`sin`, `mm`, `pi`) se odbijaju, kao i petlja poput `a = b` uz `b = a`.

## Povezivanje broja s parametrom

1. Kliknite značajku u povijesti, na primjer „Extrude1“. Njezine postavke prikazuju se na kartici {{ui:Properties}}.
2. U okvir za broj, na primjer **Dubina (mm)**, upišite `=` i izraz: `=thick` ili `=width / 4`.
3. Pritisnite {{key:Enter}}.

Okvir sada prikazuje rezultat, a uz njegovu oznaku pojavljuje se gumb **ƒ**. Pokažite na njega da vidite jednadžbu. Dimenzije skice rade isto, i u popisu **Dimenzije skice** značajke i u okviru za dimenziju otvorene skice (dvaput kliknite dimenziju, upišite `=width` i pritisnite {{key:Enter}}).

Brojevi koje možete povezati: dubina izvlačenja, kut rotacije, promjer rupe, dubina i veličine upuštanja, broj ponavljanja, razmak i kut uzorka, polumjer zaobljenja, udaljenost skošenja, debljina stijenke ljuske, svaka dimenzija skice te veličine novijih značajki (druga dubina, sužavanje, upuštanje, udaljenost referentne ravnine, kut nagiba i druge).

## Promjena parametra

Na kartici {{ui:Parameters}} upišite novu vrijednost ili izraz u stupac **Izraz** i pritisnite {{key:Enter}}. Sve što je povezano s njim se mijenja i dio se ponovno gradi, kao jedan korak: {{key:Mod+Z}} to poništava.

Da promijenite broj s drugog kraja, vidi [Jednadžbe u oba smjera](topic:equations-two-way).

## Gdje se parametar koristi

Ispod svakog parametra na kartici {{ui:Parameters}} red kaže što ga koristi:

- brojevi koje pokreće, na primjer **Extrude1 depth** ili **Sketch1 D2 (distance)**. Kliknite jedan da odaberete njegovu značajku i prikažete njezina svojstva;
- brojevi koje pokreće **kroz** druge parametre, na primjer **Hole1 diameter (through h, d)** kad je `d = h + 2` i `h = w / 2`;
- **parametri** čiji izrazi ga koriste, **konfiguracije** koje ga postavljaju i **skripte** koje ga čitaju (vidi [Pisanje i pokretanje skripti](topic:craftscript)).

„Još nije upotrijebljeno.“ znači da ga ništa ne koristi: možete ga obrisati bez pitanja.

## Odvajanje, preimenovanje, brisanje

- **Odvojite broj:** kliknite njegov gumb **ƒ** ili {{ui:Unlink}} na popisu **Jednadžbe**. Zadržava trenutnu vrijednost i nijedan parametar ga više ne mijenja.
- **Preimenujte parametar:** upišite novi naziv u njegov okvir **Naziv**. Svaki izraz koji ga koristi se prepisuje.
- **Obrišite parametar:** kliknite × u njegovu retku. Ako ga nešto koristi, PartCraft pita želite li prvo u te izraze upisati njegovu trenutnu vrijednost.
- **Brisanje značajke** briše jednadžbe njezinih brojeva; statusna traka kaže koje.

:::note
Parametri se spremaju u datoteci `.partcraft.json` (kao verzija datoteke 3). Dio bez parametara sprema se točno kao prije.
:::

## Izrazi

| Napišite | Znači |
|---|---|
| `120`, `12.5`, `1e3` | broj (milimetri, ili stupnjevi za kut) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | duljina u drugim jedinicama, pretvorena u milimetre |
| `30deg`, `0.5rad` | kut, pretvoren u stupnjeve |
| `+ - * / %` i `^` | aritmetika; `^` je potencija, `-2^2` je −4 |
| `sin cos tan asin acos atan atan2` | trigonometrija u stupnjevima |
| `sqrt pow exp ln log abs sign` | ostale funkcije |
| `ceil floor int round(x, digits) min max` | zaokruživanje i granice |
| `if(test, a, b)` uz `< <= > >= == !=` | izbor: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Nazivi razlikuju velika i mala slova: `Width` i `width` su dva parametra.

Vidi i [Konfiguracije i tablice dizajna](topic:design-tables) i [Skripte i naredbeni redak](topic:scripts-and-cli).
