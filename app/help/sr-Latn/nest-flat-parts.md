---
title: Raspoređivanje ravnih delova na listovima
summary: Raspoređuje ravne delove na limovima ili roli uz što manje otpada koji PartCraft može da nađe, nikad bliže od razmaka koji zadate, i čuva raspored kao DXF za laser, plazmu, vodeni mlaz ili glodalicu.
keywords: raspoređivanje, razmeštanje, list, lim, rola, laser, plazma, vodeni mlaz, glodalica, sečenje, iskorišćenje, potrošnja materijala, otpad, razmak, širina reza, smer vlakana, smer valjanja, dxf, ravan razvoj, konture
from: 8dcce1a6
---

**Raspoređivanje** stavlja mnogo ravnih delova na list tako da ostane što manje materijala. PartCraft postavlja delove jedan po jedan, svaki tamo gde najkraća iskorišćena dužina lista, isprobava više redosleda i završi za nekoliko sekundi, i zadržava najbolji. Delovi mogu da stoje u rupama jedni drugih i u šupljini slova L ili U.

## Otvaranje

- {{ui:Izvezi}} › {{ui:Raspoređivanje ravnih delova na listovima…}} otvara ga sa ravnim razvojem dela ili — u sklopu — sa ravnim razvojem svakog dela od lima, koliko ima kopija.
- Na delu od lima, {{ui:Ravnaj}} pa {{ui:Poređaj na listovima…}} pod ravnim razvojem.
- {{ui:Dodaj konture iz DXF-a…}} dodaje svaku zatvorenu konturu u DXF datoteci kao deo: crtež iz CadCraft-a sačuvan kao DXF ili datoteka iz sopstvenog softvera vašeg rezača. Kontura unutar druge je rupa u njoj. Linije i lukovi koji se spajaju kraj na kraj računaju se kao jedna kontura. Datoteke u inčima, centimetrima ili metrima pretvaraju se u milimetre.

:::note
Razvijanje lima u ravan traži tačan geometrijski kernel (vidi [Lim](topic:sheet-metal)). Konture iz DXF datoteke uvek rade.
:::

## Podešavanje

Za svaki deo zadajte **koliko** komada vam treba i njegov **smer vlakana**: {{ui:Bilo koji smer}}, {{ui:Duž lista (kao nacrtano)}} za brušen ili valjan lim koji mora da ide u jednom smeru, ili {{ui:Preko lista}}.

Pod **Listovi**:

- **Zaliha**: {{ui:Limovi}} zadate dužine i širine (i koliko imate; 0 = koliko god treba), ili {{ui:Rola}} zadate širine, dugačka koliko treba.
- **Margina ivice** ostaje slobodna na svakoj ivici lista (za stezaljke ili neravnu ivicu).
- **Razmak između delova** je najmanje rastojanje između dve linije reza: najmanje širina reza vašeg rezača, plus što materijal traži.
- **Okreti**: uglovi za koje deo sme da se okrene, na svakih 90° podrazumevano. Manje okreta radi brže; više može bolje da iskoristi list.
- **Delovi smeju da se prevrnu** dozvoljava da deo bude položen naopako. Ostavite isključeno za lim: ravan razvoj položen naopako savija se u suprotnom smeru.

Pritisnite {{ui:Razmesti}}. Pregled prikazuje svaki list; podaci kažu koliko limova (ili koliko role) je upotrebljeno i koliki deo materijala zauzimaju delovi. Sve što nije stalo je navedeno po imenu.

## Čuvanje

{{ui:Sačuvaj DXF}} upisuje raspored kao DXF (R12, milimetri), jedan list ispod drugog: konture listova na sloju SHEET, delovi na PARTS (lukovi ostaju lukovi), a ime svakog dela na LABELS.

:::tip
Mešanje više delova obično bolje raspoređuje nego mnogo kopija jednog: mali delovi popunjavaju praznine između velikih.
:::

## Sečenje listova (G-kod)

**Izvezi › Raspoređeni listovi u G-kod** čita raspoređeni DXF (ovaj, ili listove dodatka Cabinets u CadCraft-u) i pravi jedan program za svaki list preko postprocesora koji izaberete: prvo rupe i izrezi, pa konture; svaki rez ide za poluprečnik alata izvan dela, kroz list i 1 mm dalje, sa držačima ako ih tražite. Lista postprocesora čine ugrađeni postprocesori i sopstveni postprocesori vaše studije Manufacture. Proverite svaki program u simulatoru pre pokretanja: bušenje i džepovi se ne prave.

## Šta proveriti

PartCraft ponovo proverava svaki raspored na pravim oblicima (ne na mreži po kojoj je pretraživao): nijedna dva dela nisu bliža od razmaka, ništa nije u marginama. Ne planira rez: uvodni potezi, redosled sečenja, sečenje zajedničkih ivica jednom i čuvanje preostalog lista su posao softvera vašeg rezača. Proverite DXF tamo pre sečenja.
