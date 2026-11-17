---
title: Meniji, tipke in miška
summary: Izberite slog menija, ki ustreza vašemu načinu dela, dajte kateremu koli ukazu svojo tipko, premaknite ukaze med zavihki traku ter nastavite, kaj počne kolesce in vsak gumb miške v 3D-pogledu.
keywords: slog menija, meniji, trak, orodna vrstica, drevo značilk, bližnjice, tipke, bližnjične tipke, po meri, preslikava, miška, kolesce, obrni, smer povečave, srednji gumb, orbita, pomik, izvoz, uvoz, preklop, znano
from: 8445b06c
---

Ukazi v PartCraftu so enaki, ne glede na to, kako do njih pridete. **Slog menija** le določa, kje so na zaslonu, kako se imenujejo tam in s katerimi tipkami se zaženejo. Izberete ga v {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Meniji, tipke in miška}}; sprememba je takojšnja, ta brskalnik si jo zapomni.

## Dva sloga

| Slog | Kaj dobite |
|---|---|
| {{ui:PartCraft}} | Lastna orodna vrstica PartCraft: preklopnik delovnih okolij, Datoteka, Skica, Značilke, Risba, Sestav, Uredi in Pogled. Tipke {{key:S}} skica, {{key:F}} prilagodi, {{key:M}} meri, {{key:X}} prerezni pogled. Začetni slog. |
| {{ui:Drevo značilk}} | Trak, razporejen tako, kot ga imajo programi za strojništvo na podlagi značilk: meni {{ui:Datoteka}} (z vsemi izvozi), hitri gumbi in zavihki {{ui:Značilke}}, {{ui:Skica}}, {{ui:Površine}}, {{ui:Vrednoti}}, {{ui:Risba}}, {{ui:Sestav}}, {{ui:Študije}} (delovna okolja in njihova orodja), {{ui:Illustrate}} (ročna orodja delovnega okolja Illustrate; njegova orodja najprej preklopijo na Illustrate) in {{ui:Pogled}}. {{ui:Značilke}} se začnejo s {{ui:Skica}}, saj se del začne s skico. Dodatne tipke: {{key:E}} izvlek, {{key:H}} izvrtina in {{key:V}}, nato črka za pogled: {{key:V}} {{key:F}} spredaj, {{key:V}} {{key:B}} zadaj, {{key:V}} {{key:T}} zgoraj, {{key:V}} {{key:O}} spodaj, {{key:V}} {{key:R}} desno, {{key:V}} {{key:L}} levo, {{key:V}} {{key:I}} izometrično, {{key:V}} {{key:N}} pravokotno na. V 3D-pogledu srednji gumb orbitira, {{key:Shift}} in srednji gumb pomikata, desni gumb pomika, levi gumb pa samo izbira. |

Vsak slog ohrani {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} in {{key:Mod+A}}.

Orodje drugega delovnega okolja najprej preklopi nanj; orodje Oblikovanje, izbrano v drugem delovnem okolju, se najprej vrne v Oblikovanje. Orodja skice čakajo na skico, risalna orodja na risalni list, orodja sestava na sestav: vrstica stanja pove, kaj je treba narediti najprej.

:::tip
Znotraj skice, na risalnem listu, v sestavu in v drugih delovnih okoljih imajo črke tam svoj pomen ({{key:L}} črta, {{key:R}} pravokotnik, {{key:J}} sklep …) v vsakem slogu. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščice vedno ohranijo svoj pomen. Tipka iz lastne postavitve PartCraft, ki jo je vaš slog dodelil drugemu ukazu, ne naredi nič, vrstica stanja pa pove, kam je njen ukaz šel.
:::

## Naredite po svoje

1. Izberite slog, ki je najbližje temu, kar želite, nato kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke in meniji}} poiščite ukaz (iskalno polje pomaga). {{ui:Dodaj tipko}} in pritisnite tipko ali dve tipki zapored. Kliknite tipko, da jo odstranite.
3. Pri traku {{ui:Kje je}} premakne ukaz na drug zavihek in podokno, v meni {{ui:Datoteka}} ali na {{ui:Samo tipke}}.
4. Na {{ui:Miška}} nastavite kolesce, gumbe, ki pomikajo skico, in kaj počne vsak gumb v 3D-pogledu.
5. Dajte mu ime in kliknite {{ui:Shrani}}.

Shranjevanje vgrajenega sloga naredi vašo kopijo („Moje drevo značilk“); vgrajeni slog se nikoli ne spremeni. Tipka, dodeljena dvema ukazoma, ali tista, ki bi se izvedla, preden lahko vtipkate dvočrkovno bližnjico, je prikazana rdeče in jo morate popraviti, preden lahko shranite.

## Miška

- **Kolesce miške**: {{ui:Drsenje navzgor poveča}} (začetni) ali {{ui:Drsenje navzgor pomanjša}}, in kako hitro. Stiskanje sledilne ploščice vedno povečuje v smeri gibanja prstov.
- **Pomik skice z**: srednjim gumbom, desnim gumbom ali obema. Desni klik v skici še vedno konča korak orodja.
- **Povlek v 3D-pogledu**: {{ui:Vsak pogled po svoje}} ohrani nastavitev PartCraft ({{ui:Nastavitve}} › {{ui:PartCraft}}: levi orbitira ali srednji orbitira). Ali nastavite vsak gumb na orbito, pomik, povečavo ali nič; {{key:Shift}} z gumbom za orbito pomika. Klik brez povleka še vedno izbere.

## Vzemite s seboj

{{ui:Izvoz}} shrani uporabljeni slog kot majhno datoteko `.ccinput.json`; {{ui:Uvozi …}} doda enega, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže samo na ukaze PartCraft: vse drugo v njej se izpusti in se prešteje v vrstici stanja. {{ui:Izbriši ta slog}} odstrani enega od vaših.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Uporabi ta slog v vseh programih}} pod karticami slogov naredi, da se vsak program odpre v ustreznem slogu (lastna orodna vrstica ali trak), s spremembami, ki ste jih naredili v vsakem. Izbira drugega sloga v enem programu spremeni samo tega.
:::

Povezano: [Tipke in miška](topic:keyboard) · [Nastavitve PartCraft](topic:settings) · [Prihod iz drugega parametričnega modelirnika](topic:coming-from)
