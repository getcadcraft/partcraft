---
title: Nastavitve PartCraft
summary: Izberite, s katerim gumbom miške se pogled vrti, naj drsenje s sledilno ploščico obrača in premika del, vklopite ali izklopite samodejne relacije med risanjem skice in nastavite, koliko niti uporabljajo reševalniki simulacije.
keywords: nastavitve, možnosti, miška, srednji gumb, gumb kolesca, orbita, vrtenje, obračanje, sledilna ploščica, trackpad, drsenje, potezanje, stiskanje, relacije, omejitve, samodejne omejitve, samodejne relacije, lovljenje, sovpadanje, niti, niti reševalnika, jedra, procesorji, večnitno, hitrejše reševanje, vzporedno
from: 759edcaf
---

Odprite {{ui:Nastavitve}} z zobnikom v vrstici aplikacije ali z {{key:Mod+,}}. Prvi zavihek, {{ui:PartCraft}}, vsebuje nastavitve, ki pripadajo tej aplikaciji; {{ui:Splošno}} vsebuje tiste, ki jih delijo vse aplikacije CadCraft (tema, orodna vrstica, podokna). Nastavitve PartCraft obstajajo samo v aplikaciji: spremenite jih tukaj, ta brskalnik pa si jih zapomni. {{ui:Ponastavi nastavitve PartCraft}} vrne vse na začetek.

## Vrtenje pogleda

- **Levi gumb** (začetna): povlecite z levim gumbom, da obrnete del; povlecite z desnim ali srednjim gumbom, da premaknete pogled (pomik).
- **Srednji gumb**: pritisnite kolesce in povlecite, da obrnete del; držite {{key:Shift}} (ali {{key:Ctrl}}, ali ⌘) s srednjim gumbom, ali povlecite z desnim gumbom, da premaknete pogled. Levi gumb samo izbira ploskve, robove in ravnine, zato klik, ki se malo premakne, nikoli ne obrne dela. Veliko CAD programov deluje tako.

Kolesce v obeh primerih povečuje pri kazalcu. V skici desni in srednji gumb premikata pogled kot prej.

## Drsenje: kolesce miške ali sledilna ploščica

- **Ugotovi sam** (začetna): PartCraft opazuje drsenje. Stransko ali fino drsenje, kot ga pošlje sledilna ploščica, obrne del; celi koraki kolesca povečajo.
- **Kolesce miške**: drsenje vedno povečuje proti kazalcu.
- **Sledilna ploščica**: potegnite z dvema prstoma, da obrnete del; držite {{key:Shift}} in potegnite, da premaknete pogled; stiskanje (pinch) povečuje. V skici potegnitev z dvema prstoma premakne skico.

Stiskanje vedno povečuje ne glede na izbiro. Če "Ugotovi sam" napačno ugane za vašo miško ali sledilno ploščico, izberite tisto, ki jo imate. Več v [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).

## Risanje skice: dodajanje relacij med risanjem

**Dodaj relacije med risanjem** (na začetku vklopljeno): klik, ki se zaskoči na točko, naredi novo točko sovpadajočo z njo; klik na krivuljo postavi točko na to krivuljo; črta, narisana skoraj vodoravno ali navpično, postane vodoravna ali navpična. Glejte [Relacije in kote](topic:relations-dimensions).

Izklopite, kadar želite geometrijo postaviti blizu druge geometrije, ne da bi jo z njo povezali. Kazalec se še vedno zaskoči na točke in krivulje, vendar se nič ne poveže: črte, narisane v verigi, ne delijo svojih koncev, zato jih lahko vlečenje razmakne. Relacije, ki jih želite, dodajte sami iz desnega podokna. Zaprt profil se še vedno izvleče, ko se njegovi konci srečajo.

:::note
Nastavitev spremeni samo to, kaj doda novo risanje. Relacije, ki so že v skici, ostanejo, orodje Zaokroži pa še vedno naredi svoj tangentni lok in polmer.
:::

## Risanje skice: kotiranje med risanjem

**Kotiraj med risanjem** (na začetku vklopljeno): med risanjem črte, pravokotnika, krožnice ali loka vpis številke izpolni polje za velikost ob kazalcu ({{key:Tab}} gre na naslednje polje), {{key:Enter}} pa nariše obliko s to velikostjo, z gonilno koto za vsako vpisano velikost. Izklopljeno: vpis številke med risanjem ne naredi ničesar, oblike pa se rišejo samo s kliki. Glejte [Vpis velikosti med risanjem](topic:sketch-basics#type-the-size-as-you-draw).

## Indikator v kotu

Kar se prikaže v kotu 3D-pogleda: **Kocka pogleda** (začetna; zgoraj desno — kliknite ploskev, rob ali oglišče, da pogledate od tam, povlecite za orbito, povlecite njen obroč kompasa, da obrnete model), **Ikona osi** (majhna oznaka X, Y, Z spodaj levo, ki se vrti z-pogledom: X rdeča, Y zelena, Z modra) ali **Nič**. Nobeno od teh se ne prikaže med risanjem skice ali na listu risbe. Glejte [Kocka pogleda](topic:view-cube).

## Niti reševalnika

Koliko niti lahko uporabljajo reševalniki simulacije. **Samodejno** (začetna) vzame eno manj od logičnih procesorjev računalnika (največ 16), da stran ostane odzivna, medtem ko se študija rešuje; ali izberite število. Velike študije z voksli, uklon, napetost v času in pretok se rešujejo hitreje na več nitih (približno 2× na 4 nitih za 80.000 kock po naših meritvah, več na nezaposlenem računalniku); modeli pod približno 20.000 neznankami ostanejo na eni niti, ker zagon niti stane več, kot prihrani. Reševanje z nitmi da enak rezultat kot ena nit (do zaokrožitve: vsote se seštejejo v drugačnem vrstnem redu). Rezultati vsake študije navajajo **N niti** ali **1 nit** z razlogom pod **Reševalnik**.

Niti zahtevajo, da je stran **izolirana med izvori** (brskalnik delavcem dovoli deljenje pomnilnika samo takrat). Laboratorijska stran je takšna; kjer ni, nastavitev to pove ("Ta stran ni izolirana med izvori, zato reševalniki tečejo na eni niti, ne glede na to, kaj je izbrano tukaj.") in vsako reševanje uporabi eno nit. Vse drugo deluje enako, odgovori so enaki.

Študije laminarnega pretoka prav tako uporabljajo niti (približno 2,5× na 4 nitih za 54.000 fluidnih celic, enak odgovor do zadnje števke). Reševalnik kvadratičnega tetraedra in prenos toplote tečeta na eni niti: uporaba niti je bila na našem preskusnem računalniku izmerjena kot počasnejša (njihovi reševalniki so omejeni s hitrostjo pomnilnika in s korakom, ki ga ni mogoče razdeliti).

### Na lastnem spletnem strežniku

Če PartCraft zaganjate na svojem strežniku, deluje tako, kot je postrežen. Za niti reševalnika naj strežnik pošlje dve glavi na strani PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Na Apache, v `.htaccess` mape (potrebuje mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Na nginx, v `location`, ki servira PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ponovno naložite stran: Nastavitve › Niti reševalnika nato ponudijo **Samodejno** s številom procesorjev vašega računalnika. Druga glava brskalniku prepreči, da bi sprejel vse, kar stran naloži z drugega mesta, ki tega ne dovoli, kar je v redu za PartCraft sam (naloži vse iz svoje mape).
