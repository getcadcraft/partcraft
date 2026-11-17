---
title: Prosto oblikovane oblike z delovnim okoljem Oblika in značilke ploskev
summary: Potiskanje in vlečenje gladke kontrolne mreže v delovnem okolju Oblika, ostri robovi, simetrija, preverjanje in dokončanje v natančno telo ali ploskev, nato zakrpe, prehodi, zašivanje, odebelitev, odmik, podaljšanje in prirezovanje ploskev v Zasnovi. Kaj je natančno in kaj je približano.
keywords: oblika, prosta oblika, t-spline, delitev, subdivision, Catmull-Clark, kontrolna mreža, quadball, ostri rob, simetrija, zebra, ukrivljenost, ploskev, zakrpa, zapolnitev, prehodna ploskev, zašij, šivanje, odebeli, odmik ploskve, podaljšaj, prireži
from: 0d326ef4
---

:::note
**Še ni izdelano v tej različici.** Dokončanje oblike v del in značilke ploskev zahtevata natančno geometrijsko jedro, ki ga ta različica PartCraft nima: vsak del gradi z mrežnim jedrom. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj storiti namesto tega. Preostanek strani opisuje, kako to deluje z natančnim jedrom.
:::

Delovno okolje **Oblika** ustvarja organske oblike. Urejate **kontrolno mrežo**, grobo mrežo oglišč, robov in ploskev. Oblika je gladka ploskev, ki jo nadzoruje kontrolna mreža (njena Catmull–Clark limitna ploskev), zato premik enega oglišča nežno ukrivi ploskev okoli njega. Ko je videti prav, **Površinska obdelava** doda obliko v zgodovino dela kot značilko *Oblika*, natančno jedro pa jo pretvori v prave B-zlepkaste ploskve. Nato jo lahko zaobljite, prerežete, združite z drugimi značilkami in izvozite kot STEP.

V seznamu **Delovno okolje** na levi strani orodne vrstice izberite **Oblika**.

## Ustvarite kontrolno mrežo

1. Na desni plošči nastavite **Velikost** in **Delitve**. Delitve so število ploskev na vsako stran.
2. V orodni vrstici kliknite {{ui:Kvader}}, {{ui:Štirikotna krogla}} ali {{ui:Ravnina}}. Plošča ima tudi **Valj**, **Torus** in **Ploskve s klikanjem**.

- **Štirikotna krogla** je kvadrasta kontrolna mreža, prilagojena tako, da njena oglišča ležijo na krogli. Med tema točkama leži ploskev malo znotraj krogle: pri 2 delitvah je prostornina za približno 0.4 % manjša.
- **Ravnina** je odprta, zato postane telo ploskve (glejte »Značilke ploskev v Zasnovi« spodaj).
- **Ploskve s klikanjem**: kliknite 4 točke na zgornji (tleh) ravnini ali na ogliščih kontrolne mreže, da ustvarite eno ploskev. Ploskve, ki delijo oglišča, se združijo. Po 3 točkah pritisnite {{key:Enter}} za trikotnik ali {{key:Esc}} za konec.

Nedokončana kontrolna mreža se shrani skupaj z datoteko dela, zato lahko datoteko zaprete in nadaljujete pozneje.

## Izbira in premikanje

- Kliknite oglišče, rob ali ploskev kontrolne mreže. {{key:Shift}}+klik doda ali odstrani elemente. {{key:Esc}} počisti izbor.
- Na sredini izbora se prikaže {{ui:Manipulator}}. Povlecite puščico, da se premikate vzdolž nje, ali kvadrat, da se premikate v tej ravnini. Pritisnite {{key:W}} za premik, {{key:E}} za vrtenje in {{key:R}} za merilo ali uporabite gumbe na plošči. {{ui:Manipulator}} v orodni vrstici preklaplja med njimi.
- **Mehak prehod** (mm) potegne tudi oglišča znotraj te razdalje, ki se gladko izgubijo na robu te razdalje.
- Vsak vlek je en korak razveljavitve: {{key:Ctrl+Z}} in {{key:Ctrl+Y}} delujeta kot običajno.

## Spreminjanje kontrolne mreže

Gumbi **Spremeni** na plošči delujejo na izboru:

| Gumb | Kaj naredi |
|---|---|
| {{ui:Iztisni}} | Izbrane ploskve se premaknejo navzven za **Razdaljo iztisnitve** vzdolž svojih normal, z novimi stranskimi ploskvami. Izbrani odprti robovi navzven ustvarijo nove ploskve. |
| {{ui:Zanka robov}} / Vstavi zanko robov | Razdeli obroč štirikotnih ploskev, ki seka izbrani rob, na polovici poti. Več zank pomeni ostrejše krivulje. |
| Vstavi točko | Doda oglišče na sredino izbranega roba. |
| Razdeli | Vsako izbrano ploskev razdeli na štirikotne ploskve okoli njene sredine. |
| Most | Poveže dve izbrani ploskvi ali dve odprtini (na vsaki izberite en odprt rob) s cevjo ploskev. Obe morata imeti enako število robov. |
| Zapolni luknjo | Zapre odprtino skozi izbrani odprti rob z eno ploskvijo. |
| Zvari | Združi izbrana oglišča v eno na njihovi sredini. |
| Poravnaj | Premakne izbrana oglišča na ravnino, ki se jim najbolje prilega. |
| Izbriši | Odstrani izbrane ploskve, robove (dve ploskvi se združita) ali oglišča. |

## Ostri robovi, simetrija in prikaz

- {{ui:Ostri rob}} naredi izbrane robove ostre. **Teža ostrega roba** 10 je popolnoma ostra. Manjša teža ostane ostra za toliko korakov izpopolnjevanja in nato zmehča, kar da ozko zaobljenje namesto trdega preloma. **Odstrani ostri rob** jih znova zgladi. **Ostro oglišče** pripne oglišče, da ploskev skozi njega poteka s točko.
- **Simetrija** zrcali kontrolno mrežo čez X, Y ali Z = 0. Ohrani pozitivno stran, jo zrcali in združi obe polovici. Nato se urejanje na eni strani izvede na obeh. Oglišča na zrcalni ravnini ostanejo na njej.
- {{ui:Prikaz}} preklaplja med **Gladko** (ploskev, ki bo značilka) in **Kvader** (same ploskve kontrolne mreže).
- **Analiza**: **Zebraste proge** odsevajo progasto svetlobo iz trenutnega pogleda. Na gladki ploskvi se gladko upognejo, na ostrem robu pa prekinejo. **Povprečna ukrivljenost** konveksna območja pobarva rdeče, konkavna modro, ravna pa belo. Meri se na prikazani mreži s kotangensno formulo, zato je vodilo, ne meritev.

## Preverjanje in dokončanje

- **Preveri natančno** pretvori kontrolno mrežo v natančnem jedru, ne da bi spremenil vaš del. Poroča, koliko B-zlepkastih zaplat naredi mreža, koliko jih je natančnih in ali je rezultat zaprto, veljavno telo ter njegova prostornina.
- {{ui:Površinska obdelava}} doda značilko *Oblika* v zgodovino ali posodobi obliko, ki ste jo urejali, in vas vrne v Zasnovo. Zaprta kontrolna mreža postane telo. Njena **Operacija** na plošči Zasnova je lahko Novo telo, Združi, Odreži ali Presek. Odprta kontrolna mreža postane telo ploskve.
- Obliko spremenite pozneje tako, da jo izberete v zgodovini in kliknete **Uredi v Obliki**. Zgrajeno telo je med urejanjem kontrolne mreže skrito.
- **Zavrzi** zavrže kontrolno mrežo, ne da bi se dotaknil zgodovine.

## Kaj je natančno in kaj približano

Vsaka štirikotna ploskev kontrolne mreže, po potrebi izpopolnjena, postane ena bikubična B-zlepkasta zaplata.

- Kjer je vsako oglišče ploskve *pravilno* (v ploskvi se srečajo štirje robovi ali trije na odprtem robu oziroma ob ostrem robu), je zaplata **natančno** delitvena ploskev. Preizkusi to preverijo na 1e-9 mm.
- Okoli **izredne točke** (srečajo se tri, pet ali več robov, oglišče tri- ali petkotne ploskve ali konec ostrega roba) ni natančne polinomske zaplate. Tam zaplata prevzame natančno točko in tangentno ravnino v tem oglišču ter robne krivulje sosedov, zato se zaplate še vedno stikajo brez reže. Tangentna zveznost čez robove, ki se stikajo v točki, je približna. Plošča Oblika in plošča značilke podajata največji kot, navadno pod 2°. Višji **Nivo** na plošči značilke naredi te zaplate manjše in bolj tesne.
- Ostri prelomi so pravi robovi telesa, zato jih lahko zaobljite.
- Vsaka zaplata je svoja ploskev, zato ima oblika veliko ploskev, med njimi pa so narisane črte.

## Značilke ploskev v Zasnovi

Ukazi za ploskve so v meniju {{ui:Več}} v Zasnovi, pod značilkami. Potrebujejo natančno jedro. Telesa ploskev so narisana prosojno modro. Niso del telesa, dokler jih ne odebelite ali zašijete.

| Ukaz | Kaj naredi |
|---|---|
| Zakrpa | Zapolni zaprto zanko robov. Najprej {{key:Shift}}+klik na robove telesa ali izberite telo ploskve, da zapolnite njegovo odprtino. **Tangenta (G1)** naredi, da se zakrpa z ono ploskvijo gladko stika. |
| Prehodna ploskev | Ploskev skozi eno verigo krivulj na skico (odprto ali zaprto), po vrstnem redu zgodovine. |
| Zašij | Zašije telesa ploskev vzdolž skupnih robov. Če se zaprejo, je rezultat telo z Operacijo kot pri drugih značilkah. |
| Odebeli | Telesu ploskve da debelino: vzdolž normale, nasproti nje ali polovico v vsako smer. Rezultat je telo. |
| Odmik ploskve | Kopija telesa ploskve, premaknjena vzdolž njegovih normal. Izvirnik ostane. |
| Podaljšaj ploskev | Razširi ploskev z eno ploskvijo čez robove, ki jih izberete. |
| {{ui:Prirezi površino}} | Odreže telo ploskve tam, kjer ga seka drugo telo ploskve ali telo. Kliknite **Izberi točko na kosu**, da izberete, kateri kos ohraniti, ali ohranite vse ostalo. |

Zašij, Odebeli, Podaljšaj in Prirezi porabijo telo ploskve, iz katerega začnejo. Poznejše značilke uporabljajo novo telo.

Trenutne omejitve: oblike z več ločenimi zaprtimi kosi se ne pretvorijo v eno telo; pravilna območja se ne združijo v večje ploskve; glejte [Kaj še ni izdelano](topic:not-built-yet).
