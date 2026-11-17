---
title: Kopiranje, lepljenje in podvajanje
summary: Kopirajte geometrijo skice, značilke in dele sestava; prilepite tja, kamor kliknete, ali na isto mesto; podvojite v enem koraku ter zvedite, kaj gre s kopijo in kaj ne.
keywords: kopiraj, prilepi, izreži, podvoji, odložišče, prilepi na isto mesto, izberi vse, prekliči izbor, izbriši, ctrl c, ctrl v, ctrl d, primerek, komponenta, kopiraj skico, kopiraj značilko, kopiraj del
from: 611307d7
---

Skupina {{ui:Uredi}} v orodni vrstici vsebuje {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}} in meni {{ui:Več}} z {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji}}, {{ui:Izbriši}}, {{ui:Izberi vse}} in {{ui:Prekliči izbor}}, vsakega s svojo tipko. Kaj kopirajo, je odvisno od tega, kje ste: geometrija v odprti skici, značilka v zgodovini ali del v sestavu.

Sivo označen element trenutno ne more delovati. Premaknite kazalec nanj: njegov namig pove razlog, na primer „Najprej izberite geometrijo skice“ ali „Odložišče vsebuje Sketch2 in Extrude2: značilke se prilepijo v zgodovino, zato najprej zapustite skico“.

| Dejanje | Tipka | V skici | V zgodovini | V sestavu |
|---|---|---|---|---|
| Kopiraj | {{key:Mod+C}} | Izbrane točke in krivulje | Izbrana skica, iztisnitev, zavrtitev ali izvrtina (s svojo skico) | Izbrani del |
| Izreži | {{key:Mod+X}} | Kopiraj, nato izbriši | Kopiraj, nato izbriši značilko | Kopiraj, nato odstrani del |
| Prilepi | {{key:Mod+V}} | Kopija sledi kazalcu; kliknite, kamor naj gre | Doda kopijo na konec zgodovine | Nova kopija poleg drugih delov |
| Prilepi na isto mesto | {{key:Mod+Shift+V}} | Na enakih koordinatah | Enako kot Prilepi | Na istem mestu kot kopirani del |
| Podvoji | {{key:Mod+D}} | Kopiraj in premakni v enem koraku; odložišče ostane nedotaknjeno | Druga kopija takoj za izbrano značilko | Druga kopija poleg drugih delov |
| Izbriši | {{key:Delete}} | Izbor | Značilka (vpraša, če jo uporabljajo druge) | Del ali spoj |
| Izberi vse | {{key:Mod+A}} | Vse v skici | Ni na voljo | Ni na voljo |
| Prekliči izbor | {{key:Esc}} | Počisti izbor | Počisti izbor in izbire | Počisti izbor |

Vsako lepljenje, podvajanje in rezanje je en korak v seznamu razveljavitev: {{key:Mod+Z}} ga vzame nazaj, {{key:Mod+Y}} ga vrne.

## V skici

1. Izberite, kaj kopirati: kliknite, {{key:Shift}}+klik za več, povlecite okno ali pritisnite {{key:Mod+A}} za vse.
2. Pritisnite {{key:Mod+C}} ali izberite {{ui:Kopiraj}}. Vrstica stanja pove, kaj je bilo kopirano.
3. Pritisnite {{key:Mod+V}} ali izberite {{ui:Prilepi}}. Črtkana kopija sledi kazalcu in jo držite za sredino. Prilepi se na točke: središče kopirane krožnice postavite na točko tako, da kliknete to točko.
4. Kliknite, kamor naj gre. Prilepljena geometrija ostane izbrana, zato jo lahko takoj povlečete ali nanjo dodate relacije. {{key:Esc}} prekliče lepljenje.

S kopijo gre:

- Kopirana črta, krožnica ali lok prinese svoje končne točke in središče.
- Relacije in kote **med kopiranimi elementi** gredo z njimi: kopiran pravokotnik ostane pravokotnik, s svojimi merami.
- Relacije **do geometrije, ki je niste kopirali**, in do izhodišča, se opustijo. Vrstica stanja jih šteje: „2 relaciji do geometrije zunaj kopije ne gresta z njo“. Prilepljena kopija se torej lahko prosto premika, dokler je ne povežete z relacijami ali kotami.
- Nepremična točka ostane nepremična, na svojem novem položaju.

{{ui:Prilepi na isto mesto}} postavi kopijo natanko na koordinate izvirnika, v tej ali drugi skici: uporabno za prenos profila iz ene skice v drugo. V isti skici kopija leži na izvirniku; odvlecite jo stran.

{{ui:Podvoji}} ({{key:Mod+D}}) kopira izbor in ga takoj začne postavljati, ne da bi se dotaknil tega, kar je na odložišču.

:::tip
Če želite središče izvrtine ali utor ponoviti večkrat, ga kopirajte enkrat in ga prilepite večkrat: vsak {{key:Mod+V}} začne novo kopijo, ki sledi kazalcu.
:::

## V zgodovini

1. V zgodovini kliknite skico, iztisnitev, zavrtitev ali izvrtino.
2. {{key:Mod+C}} jo kopira. Značilka, ki temelji na skici, se kopira skupaj s svojo skico.
3. {{key:Mod+V}} doda kopijo na konec zgodovine (na vrstico povrnitve, če ste se povrnili nazaj), z novimi imeni, na primer Sketch3 in Extrude2.

Kopija leži na isti ravnini ali ploskvi kot izvirnik, zato se gradi na njem in del je videti enako. Če želite kopijo premakniti, izberite novo skico in spremenite njeno ravnino v desnem podoknu, ali jo odprite in povlecite ali na novo kotirajte profil.

- Prilepite v **drug del**: odprite ta del in pritisnite {{key:Mod+V}}. Če je bila skica kopije na ploskvi, ki je ta del nima, gre na sprednjo ravnino, vrstica stanja pa to pove.
- {{ui:Podvoji}} kopira in prilepi v enem koraku znotraj istega dela.
- {{ui:Izreži}} kopira značilko, nato jo izbriše (najprej vpraša, če jo uporabljajo druge značilke).

Vzorcev, zrcaljenj, zaobljenj, posnetij, lupin in uvoženih teles ni mogoče kopirati: visijo na robovih, ploskvah ali značilkah, izbranih v tem delu. Namesto tega kopirajte skico ali značilko, na kateri temeljijo, ali jih razporedite z {{ui:Linearno}} ali {{ui:Krožno}}.

## V sestavu

1. Kliknite del v pogledu ali v seznamu na levi.
2. Izberite {{ui:Podvoji}} ({{key:Mod+D}}) ali {{key:Mod+C}}, nato {{key:Mod+V}}.

Nova kopija je **isti del**: če urejate enega, se spremeni vsaka kopija. Pojavi se 20 mm desno od vsega, kar je že v sestavu, obrnjena enako kot kopirani del, in tam ostane, dokler je spoj ne postavi. {{ui:Prilepi na isto mesto}} ({{key:Mod+Shift+V}}) jo postavi natanko tja, kjer je kopirani del; povežite jo, da jo premaknete (odmik drsnega spoja jo potisne vzdolž).

Lepljenje dela, kopiranega iz drugega sestava, prinese del s seboj, enako kot {{ui:Vstavi}} iz njegove datoteke. {{ui:Dodaj kopijo}} v skupini Sestav naredi isto kot {{ui:Podvoji}} in deluje tudi, ko nič ni izbrano (kopira zadnji del).

## Odložišče

- Je odložišče PartCraft, ne računalnika: geometrije PartCraft ne morete prilepiti v drug program, niti besedila v poglede PartCraft.
- Hrani se v tem brskalniku, zato lahko drugi zavihek PartCraft prilepi, kar ste kopirali. Prebere se in preveri kot odprta datoteka; poškodovano ali iz druge različice se zavrne.
- Del z veliko uvoženo datoteko STEP je morda prevelik, da bi ga brskalnik lahko hranil: tedaj se prilepi samo v tem zavihku.
- V polju števila ali pri iskanju pomoči {{key:Mod+C}} in {{key:Mod+V}} kopirata in prilepita besedilo kot običajno.

Na listu risbe kopiranje in lepljenje še nista na voljo; {{ui:Izbriši}} in {{ui:Prekliči izbor}} delujeta na izbranem simbolu. Glejte [Še ni izdelano](topic:not-built-yet).
