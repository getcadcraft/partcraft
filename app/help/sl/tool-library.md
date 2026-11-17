---
title: Knjižnica orodij
summary: Shranite orodja, ki jih uporabljate, v brskalniku, da jih lahko ima vsak del, in premikajte knjižnice orodij med računalniki kot datoteko JSON.
keywords: knjižnica orodij, orodja, izvoz, uvoz, JSON, shrani orodja, številka T, končni rezkalnik, orodja delavnice
from: 8b9f2483
---

Zavihek **Orodja** v Izdelavi našteva orodja dela. Pod **Knjižnica orodij** lahko hranite svoja orodja tudi za več delov:

- {{ui:Shrani to orodje}} doda izbrano orodje v **Moja shranjena orodja**; {{ui:Shrani vsa orodja tega dela}} doda vsa. Moja shranjena orodja se hranijo v tem brskalniku in so na voljo za vsak del. Orodje, ki ste ga že shranili (enaka vrsta, velikost, število utorov in prepisane vrednosti), se ne shrani dvakrat.
- {{ui:Dodaj temu delu}} vzame izbrano shranjeno orodje v del. Če je njegova številka T že uporabljena za drugo orodje v delu, dobi naslednjo prosto številko, podokno pa to pove. {{ui:Odstrani iz moje knjižnice}} ga izbriše s seznama shranjenih (ne iz delov, ki ga že imajo).
- {{ui:Izvozi orodja…}} zapiše orodja dela kot datoteko `.json`; {{ui:Uvozi orodja…}} doda orodja iz take datoteke v del, po enakih pravilih (orodje, ki je že tam, se preskoči, zasedena številka T se premakne). Datoteka hrani velikosti, utore, materiale ter prepisane vrednosti podajanja in hitrosti, ki ste jih vpisali; nima identifikatorjev. Uporabite jo, da orodja delavnice premaknete na drug računalnik ali jih dodelite sodelavcu.

Če brskalnik knjižnice ne more hraniti (shramba je izklopljena ali polna), shranjevanje to pove in **Izvozi orodja** je način, kako ohraniti datoteko. Datoteka mora biti knjižnica orodij PartCraft te različice ali starejše, z največ 500 orodji veljavnih velikosti; vse drugo je zavrnjeno z razlogom.

Rezalne hitrosti in obremenitve odrezkov, ki so priložene orodju, so izhodiščne vrednosti; glejte [Ustvarjanje orodnih poti in G-kode](topic:manufacture).
