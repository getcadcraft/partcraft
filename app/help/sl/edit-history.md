---
title: Spreminjanje dela prek zgodovine
summary: Urejanje značilk in skic po dejstvu, dušenje, povrnitev nazaj, vstavljanje značilk prej, preurejanje, preimenovanje in brisanje ter razveljavitev česar koli od tega.
keywords: zgodovina, drevo značilk, drevo oblikovanja, uredi značilko, uredi skico, zaduši, ukini dušenje, povrni nazaj, povrni naprej, preuredi, premakni značilko, izbriši, preimenuj, razveljavi, uveljavi, ponovno izdelaj, regeneriraj, nadrejeni podrejeni, velik del, veliko značilk, počasno ponovno izdelovanje, 750 značilk
from: 6f75aef4
---

Del v PartCraft je njegova zgodovina: seznam ravnin, skic in značilk na levi. PartCraft ob vsaki spremembi telo ponovno izdela od vrha tega seznama. Sprememba števila na začetku seznama spremeni vse, kar je na njem zgrajeno.

## Urejanje značilke

1. Kliknite značilko v zgodovini (ali skico pod njo, zamaknjeno).
2. Spremenite njene nastavitve v desnem podoknu. Vsaka sprememba se takoj ponovno izdela.

Gumbov V redu in Prekliči ni: vsaka sprememba se uveljavi. Če vam ni všeč, pritisnite {{key:Mod+Z}}.

## Spreminjanje robov ali ploskev, ki jih uporabljajo zaobli, posnemi ali lupina

Dvokliknite značilko v zgodovini ali jo izberite in izberite {{ui:Izberi robove}} (ali {{ui:Izberi ploskve}}). Kliknite robove ali ploskve, da jih dodate ali odstranite, nato {{ui:Končano}} ali {{key:Esc}}. Glejte [Zaobljenje, posnetje in votlina](topic:fillet-chamfer-shell).

## Urejanje skice

1. Dvokliknite skico v zgodovini ali jo izberite in v desnem podoknu izberite {{ui:Uredi skico}} (ali {{ui:Skica}} na orodni vrstici).
2. Del se vrne v stanje, kakršno je bilo, ko je bila skica narejena: značilke za njo so med urejanjem skrite.
3. Spremenite geometrijo, relacije ali kote.
4. Zaprite skico. Ves del se ponovno izdela s spremembo.

Če želite spremeniti samo velikost, skice ni treba odpreti. Izberite značilko ali skico in spremenite število pod **Kote skice** (ali **Vodilne kote**) v desnem podoknu. Glejte [Spreminjanje velikosti brez odpiranja skice](topic:change-sizes).

## Ko značilka odpove

Če sprememba naredi značilko nemogoče, PartCraft izdela vse drugo in označi težavo:

- značilka v zgodovini prikaže **⚠ napaka**, njeno sporočilo pa je na vrhu desnega podokna (če se z miško ustavite nad vrstico, sporočilo lahko preberete tudi tam);
- značilke, ki jo potrebujejo, prikažejo **⚠ ni izdelano**, z sporočilom „Potrebuje Extrude2, ki odpoveduje.“;
- značka v vrstici stanja pravi „1 značilka odpoveduje“.

Odpravite vzrok (ali razveljavite), in del se spet izdela. Pogosta sporočila in kaj storiti so v [Odpravljanje težav](topic:troubleshooting).

## Dušenje značilke

Dušenje značilko izklopi, ne da bi jo izbrisalo: uporabno, če želite preizkusiti del brez izvrtine ali razpostavitve.

1. Izberite značilko.
2. Izberite {{ui:Zaduši}}. Njena vrstica kaže **izklopljeno**. Značilke, ki jo potrebujejo, prav tako niso izdelane.
3. Izberite {{ui:Ukini dušenje}}, da jo znova vklopite.

## Povrnitev nazaj

Povrnitev nazaj izdela del samo do določene točke, tako da ga lahko vidite, kakršen je bil, ali dodate značilko prej v zgodovini.

1. Izberite značilko in izberite {{ui:Povrni nazaj do sem}}. Ta značilka in vse pod njo so zatemnjene in niso izdelane. Mesto označuje vrstica **Vrstica povrnitve · naprej**.
2. Vsaka značilka, ki jo zdaj dodate, gre **na vrstico povrnitve**, pred zatemnjene.
3. Kliknite **Vrstica povrnitve · naprej**, da spet izdelate vse.

Položaj povrnitve je shranjen v datoteki.

## Preurejanje značilk

1. Izberite značilko.
2. Izberite {{ui:Premakni više}} ali {{ui:Premakni niže}}, ali pa s fokusom na vrstici v zgodovini pritisnite {{key:Alt+Up}} ali {{key:Alt+Down}}.

Značilka se nikoli ne more premakniti nad nekaj, kar uporablja. Gumb je zatemnjen, če se z miško ustavite nad njim (ali poskusite tipko), pa boste izvedeli razlog, na primer „Extrude2 uporablja Sketch2, zato mora biti Sketch2 prej.“

Značilka uporablja: svojo skico; ploskev, na kateri stoji njena skica; značilke, ki jih razpostavitev ali zrcaljenje kopira; črto skice ali zavrtitev, uporabljeno kot smer ali os.

## Brisanje značilke

1. Izberite značilko in izberite {{ui:Izbriši}} v desnem podoknu ali orodni vrstici, ali pritisnite {{key:Delete}}.
2. Če jo uporabljajo druge značilke, PartCraft vpraša: „Extrude3, Hole1 uporabljata Extrude1 in bosta tudi izbrisani.“ Izberite {{ui:Izbriši vse}} ali {{ui:Prekliči}}.

Brisanje značilke ne izbriše njene skice: skica se v pogledu znova pojavi kot neuporabljena skica, pripravljena za drugo značilko. Skico izbrišite ločeno, če je ne potrebujete.

## Preimenovanje

Izberite značilko in vnesite novo **Ime** na dnu desnega podokna (do 60 znakov). Ime samega dela je v desnem podoknu, kadar nič ni izbrano.

## Deli s stotinami značilk

Del s stotinami značilk je preizkušen pri 750 značilkah. PartCraft hrani telo, kakršno je imel sredi zgodovine, zato sprememba proti koncu zgodovine ponovno izdela samo značilke za njo; sprememba blizu vrha ponovno izdela vse, kar je nanjo zgrajeno, in to traja najdlje. Razveljavitev in uveljavitev ponovno izdelata samo od mesta, kjer se stanji razlikujeta. Za hitrejše delo na velikem delu se povrnite nazaj do mesta, kjer delate (glejte zgoraj Povrnitev nazaj), ali zadušite tisto, kar zaenkrat ne potrebujete. Več rezov in izboklin, ki se med seboj ne dotikajo, se uveljavi skupaj, zato se del iz mnogo ločenih izvrtin in izboklin izdeluje hitreje, kot kaže število značilk.

Velik del se ponovno izdeluje v ozadju: na dnu značka izdelave pokaže **Ponovno izdelovanje…** in koliko je že napredovalo, pogled, podokna in meniji pa med tem delujejo naprej. Del na zaslonu je zadnji izdelani, dokler novi ni pripravljen. Če med ponovnim izdelovanjem kaj znova spremenite, PartCraft izdela najnovejšo različico in opusti tisto, ki je v teku. Majhen del se še vedno ponovno izdela takoj.

## Razveljavitev in uveljavitev

- {{key:Mod+Z}} ali {{ui:Razveljavi}} razveljavi zadnjo spremembo: značilko, nastavitev, urejanje skice, vlečenje. V vrstici stanja piše, kaj, na primer „Razveljavljeno: sprememba kote.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ali {{ui:Uveljavi}} jo uveljavi.
- PartCraft hrani zadnjih 200 korakov (zelo velik del, pri katerem bi 200 kopij porabilo preveč pomnilnika, jih hrani manj, vendar nikoli manj kot zadnjih 20). Spremembe na risalnem listu (prerez, premaknjen simbol GD&T) so na istem seznamu. Odprtje datoteke ali začetek novega dela seznam izprazni.

:::mac
Na Macu za uveljavitev uporabite ⇧⌘Z. V Safariju lahko ⌘Y namesto tega odpre zgodovino brskalnika.
:::
