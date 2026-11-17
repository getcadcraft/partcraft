---
title: Razporedite ploske dele na liste
summary: Razporedite ploske dele na plošče ali zvitek z čim manj odpadka, ki ga PartCraft lahko najde, nikoli bližje kot razmik, ki ga nastavite, in shranite postavitev kot DXF za laser, plazmo, vodni curek ali usmerjevalnik.
keywords: razporejanje, nesting, razporedi, list, plošča, zvitek, laser, plazma, vodni curek, usmerjevalnik, rezanje, izkoristek, poraba materiala, odpadek, razmik, širina reza, smer vlaken, smer valjanja, dxf, razvita oblika, obrisi
from: 8dcce1a6
---

**Razporejanje (nesting)** postavi veliko ploskih delov na list tako, da ostane čim manj materiala. PartCraft postavlja dele enega za drugim, vsakega tja, kjer je uporabljena dolžina lista najkrajša, preizkusi več vrstnih redov, traja nekaj sekund in obdrži najboljšega. Deli lahko sedijo v izvrtinah drugih delov in v votlini črke L ali U.

## Odprite ga

- {{ui:Izvoz}} › {{ui:Razporedi ploske dele na liste…}} ga odpre z razvito obliko dela ali – v sestavu – z razvitimi oblikami vseh delov iz pločevine, kolikor je izvodov.
- Pri delu iz pločevine {{ui:Razvij}} in nato pod razvito obliko {{ui:Razporedi na liste…}}.
- {{ui:Dodaj obrise iz DXF…}} doda vsak zaprt obris v datoteki DXF kot del: risbo iz CadCraft, shranjeno kot DXF, ali datoteko iz programske opreme vašega rezalnika. Obris znotraj drugega je v njem izvrtina. Črte in loki, ki se stikajo od konca do konca, štejejo kot en obris. Datoteke v palcih, centimetrih ali metrih se pretvorijo v milimetre.

:::note
Razvitje pločevine zahteva natančno geometrijsko jedro (glejte [Pločevina](topic:sheet-metal)). Obrisi iz datoteke DXF vedno delujejo.
:::

## Nastavite ga

Pri vsakem delu vpišite **koliko** potrebujete in njegovo **smer vlaken**: {{ui:Poljubna smer}}, {{ui:Vzdolž plošče (kot narisano)}} za krtačeno ali valjano pločevino, ki mora teči v eni smeri, ali {{ui:Počez po plošči}}.

Pod **Listi**:

- **Zaloga**: {{ui:Plošče}} določene dolžine in širine (ter koliko jih imate; 0 = toliko, kolikor je potrebno), ali {{ui:Zvitek}} določene širine, dolg, kolikor je potrebno.
- **Robni rob** ostane prost ob vsakem robu lista (za stezalke ali neenakomeren rob).
- **Razmik med deli** je najmanjša razdalja med dvema reznima črtama: vsaj širina reza vašega rezalnika in tisto, kar potrebuje material.
- **Obrati**: koti, za katere se del lahko zasuče, privzeto vsakih 90°. Manj obratov teče hitreje; več jih lahko bolje izkoristi list.
- **Dovoli obračanje delov** omogoča, da se del položi na glavo. Za pločevino pustite izklopljeno: razvita oblika, položena na glavo, se upogne v drugo smer.

Pritisnite {{ui:Razporedi}}. Predogled pokaže vsak list; v povzetku je navedeno, koliko plošč (ali koliko zvitka) je bilo uporabljenih in koliko materiala zavzamejo deli. Vse, kar ni prišlo na list, je navedeno po imenu.

## Shranite ga

{{ui:Shrani DXF}} zapiše postavitev kot DXF (R12, milimetri), en list pod drugim: obrisi listov na sloju SHEET, deli na PARTS (loki ostanejo loki), ime vsakega dela na LABELS.

:::tip
Mešanje več delov je običajno boljše od mnogih izvodov enega: majhni deli zapolnijo vrzeli med velikimi.
:::

## Režite liste (G-koda)

**Izvoz › Gnezdeni listi v G-kodo** prebere gnezdeno datoteko DXF (to ali liste dodatka Cabinets v CadCraft) in za vsak list naredi en program prek postprocesorja, ki ga izberete: najprej luknje in izrezi, nato obrisi; vsak rez je za polmer orodja zunaj dela, skozi list in še 1 mm čez, z mostički, če jih zahtevate. Seznam postprocesorjev vsebuje vgrajene postprocesorje in postprocesorje vaše študije Manufacture. Vsak program preverite v simulatorju, preden ga zaženete: vrtanje in žepi se ne izdelajo.

## Preverite

PartCraft vsako postavitev znova preveri na pravih oblikah (ne na mreži, ki jo je iskal): nobena dva dela nista bližje kot razmik, nič ni v robovih. Rezne poti ne načrtuje: uvodni rezi, vrstni red reza, enkratni rez skupnih robov in ohranjanje preostalega lista so naloga programske opreme vašega rezalnika. Datoteko DXF tam preverite, preden režete.
