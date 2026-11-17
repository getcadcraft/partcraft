---
title: Slaganje ravnih dijelova na limove
summary: Složite ravne dijelove na pločama ili na roli s što manje otpada koji PartCraft može pronaći, nikad bliže od zadanog razmaka, i spremite raspored kao DXF za laser, plazmu, vodeni mlaz ili glodalicu.
keywords: nesting, slaganje, lim, ploča, rola, laser, plazma, vodeni mlaz, glodalica, rezanje, iskorištenje, upotreba materijala, otpad, razmak, zarez rezanja, smjer vlakana, dxf, ravni uzorak, obrisi
from: 8dcce1a6
---

**Nesting** raspoređuje mnoge ravne dijelove na lim tako da ostane što manje materijala. PartCraft slaže dijelove jedan po jedan, svaki tamo gdje najviše skraćuje iskorištenu duljinu lima, isprobava nekoliko redoslijeda, rezultat dobiva za nekoliko sekundi i zadržava najbolji. Dijelovi mogu ulaziti u rupe drugih dijelova i u šupljinu slova L ili U.

## Otvaranje

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} otvara ga s ravnim uzorkom dijela ili, u sklopu, s ravnim uzorkom svakog dijela od lima, koliko god ih ima primjeraka.
- Za dio od lima: {{ui:Lay flat}}, a zatim {{ui:Nest on sheets…}} pod ravnim uzorkom.
- {{ui:Add outlines from a DXF…}} dodaje svaki zatvoreni obrub u DXF datoteci kao dio: crtež iz CadCrafta spremljen kao DXF ili datoteku iz vlastitog softvera za rezač. Obris unutar drugog je rupa u njemu. Linije i lukovi koji se spajaju kraj na kraj računaju se kao jedan obris. Datoteke u inčima, centimetrima ili metrima pretvaraju se u milimetre.

:::note
Razvijanje lima u ravninu zahtijeva egzaktnu geometrijsku jezgru (vidi [Lim](topic:sheet-metal)). Obrisi iz DXF datoteke uvijek rade.
:::

## Postavljanje

Za svaki dio upišite **koliko** vam treba i njegov **smjer vlakana**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} za brušeni ili valjani lim koji mora ići u jednom smjeru, ili {{ui:Across the sheet}}.

Pod **Limovi**:

- **Zaliha**: {{ui:Plates}} zadane duljine i širine (i koliko ih imate; 0 = koliko god treba), ili {{ui:A roll}} zadane širine, duljine koliko treba.
- **Margina ruba** ostaje slobodna uz svaki rub lima (za stezaljke ili nepravilan rub).
- **Razmak između dijelova** je najmanja udaljenost između dviju linija reza: barem zarez rezanja vašeg rezača, plus ono što materijal traži.
- **Okreti**: kutovi za koje se dio smije zakrenuti, prema zadanom svakih 90°. Manje okreta radi brže; više može bolje iskoristiti lim.
- **Dijelovi se smiju preokrenuti** dopušta da se dio položi naopako. Za lim ga isključite: ravni uzorak položen preokrenuto savija se u drugu stranu.

Pritisnite {{ui:Nest}}. Pregled prikazuje svaki lim; podaci kažu koliko je ploča (ili koliko role) upotrijebljeno i koliki dio materijala zauzimaju dijelovi. Svaki dio koji nije stao je imenovan.

## Spremanje

{{ui:Save DXF}} zapisuje raspored kao DXF (R12, milimetri), jedan lim ispod drugoga: obrisi limova su na sloju SHEET, dijelovi na PARTS (lukovi ostaju lukovi), a naziv svakog dijela na LABELS.

:::tip
Miješanje više različitih dijelova obično slaže bolje nego mnogo primjeraka jednoga: mali dijelovi popunjavaju praznine između velikih.
:::

## Rezanje limova (G-kod)

**Izvoz › Složeni limovi u G-kod** čita složeni DXF (ovaj, ili listove dodatka Cabinets u CadCraftu) i izrađuje jedan program po listu kroz postprocesor koji odaberete: prvo rupe i izreske, zatim obrise, svaki rez za polumjer alata izvan dijela, kroz lim i 1 mm dalje, s jezičcima ako ih zatražite. Popis postprocesora čine ugrađeni postprocesori i vaši vlastiti postprocesori iz studije Manufacture. Provjerite svaki program u simulatoru prije pokretanja: bušenje i džepovi nisu izrađeni.

## Što provjeriti

PartCraft ponovno provjerava svaki raspored na stvarnim oblicima (ne na mreži po kojoj je tražio): nijedna dva dijela nisu bliža od razmaka, ništa nije u marginama. Ne planira rez: uvodne poteze, redoslijed rezanja, rezanje zajedničkih rubova jednom i zadržavanje ostatka lima prepušteni su softveru vašeg rezača. Provjerite DXF tamo prije rezanja.
