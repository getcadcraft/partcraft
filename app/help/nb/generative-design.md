---
title: Vokse en form fra laster (Generativ)
summary: Velg flatene som holdes fast og belastes, områder som skal beholdes og holdes fri, målvolumer og materialer, og generer utfall: de stiveste formene som finnes for hvert volum, kontrollert på nytt som volumlegemer, sammenlignet i en tabell og lastet ned som STL, STEP eller en ny del.
keywords: generativ design, topologioptimalisering, topologioptimering, SIMP, lettvekt, gitter, organisk form, utfall, sammenlign, masse, volumandel, bevar, behold, hindring, holdes fri, designrom, minste delstørrelse, STL, 3D-printing
from: 5b91fa8e
---

Arbeidsområdet Generativ fjerner materiale som lastene ikke trenger. Du sier hvor delen holdes fast og belastes, hva som må være igjen og hva som må holdes fritt; PartCraft finner den stiveste formen for hvert målvolum (**topologioptimalisering**), kontrollerer hver enkelt på nytt som volumlegeme med det virkelige materialet, og viser utfallene side om side. Den arbeider på de navngitte flatene som nettkjernen gir delen (se [Nettkjernen](topic:solid-kernels)).

Velg **Generativ** i **Arbeidsområde**-boksen. Delen din endres ikke; studien lagres inne i delfilen.

## Sett opp en studie

1. Trykk **Ny studie** i panelet til høyre.
2. **Rom**: *Delen slik den er* fjerner materiale fra delen din; *En boks rundt delen* vokser en form inne i en boks som er større enn delen med **Boksmargin**.
3. **Elementstørrelse**: la feltet stå tomt for automatisk størrelse (omtrent 8 000 kuber), eller skriv en. Finere størrelser gir finere former og tar lengre tid.
4. **Minste element**: elementer tynnere enn omtrent to ganger dette dannes ikke. Tomt betyr én og en halv kube.
5. Kryss av én til seks **Målvolumer** (andelen av designrommet formen kan fylle) og én til fire **Materialer**. Hvert volum genereres én gang; hvert materiale kontrolleres på den formen (den stiveste formen avhenger ikke av materialet, men massen, spenningen og sikkerhetsfaktoren gjør det).

## Mål

- {{ui:Fast}}: klikk på flatene som holdes fast. En **Friksjonsfri flate** fra panelets **Legg til**-liste holder en flate bare på tvers av seg selv (bruk den for symmetriplan).
- {{ui:Kraft}}: klikk på de belastede flatene, skriv deretter inn den totale kraften og velg retningen i panelet. **Trykk** finnes i **Legg til**-listen.
- {{ui:Bevar}}: klikk på flater hvis omgivelser må være massive, og sett hvor dypt (**Hold massiv innenfor**) — for eksempel rundt boltehull. Flatene du fester eller belaster, beholdes alltid.
- {{ui:Hindring}}: klikk på flater hvis omgivelser må være tomme, og sett hvor langt (**Hold tom innenfor**) — plass for en aksel eller et verktøy.

Trykk **Ferdig med valg** eller {{key:Esc}} etter å ha klikket på flater. Grønne og røde toner viser områdene.

## Generer og sammenlign

Trykk {{ui:Generer}}. Panelet viser fremdrift og gjenstående tid; **Stopp** avbryter. Hvert utfall vises i tabellen **Utfall**: målvolum, materiale, **masse**, **største spenning**, **største forskyvning** og **sikkerhetsfaktor** (flytegrense ÷ spenning), alt fra ny løsning av den ferdige formen som massive kuber med det virkelige materialet.

Velg et utfall for å se det i visningen (delen er skjult; kryss av for **Vis delen gjennom den** for å se begge). Under tabellen: hvor mange iterasjoner det tok og om den stabiliserte seg, stivheten som volumlegeme sammenlignet med optimeringsverktøyets egen verdi, og overflaten.

## Bruk et utfall

- **STL**: et lukket trekantnett, klart for 3D-printing.
- **STEP (fasettert)**: samme overflate som et STEP-volumlegeme laget av plane flater.
- **Ny delfil**: en PartCraft-del der den ene funksjonen er utfallet som et importert volumlegeme. Åpne den for å skissere på den, lage hull eller kontrollere den i Simulering. Den er fasettert (tusenvis av plane flater), ikke en redigerbar form.
- **Legg til i denne delen** kobler utfallet til delen; den er bare på for et boksdesignrom (med selve delen som rom, ligger utfallet inne i delen).

**Ny delfil** og **Legg til i denne delen** er ikke bygget ennå i denne versjonen: utfallet blir et importert volumlegeme, og det krever en eksakt kjerne. STL- og STEP-nedlastingene (fasettert) fungerer.

## Hvor langt kan du stole på den

- Den optimaliserer **stivhet** for det gitte volumet. Det finnes ingen spenningsgrenser og ingen produksjonsregler (overheng, fresretninger, minste hullstørrelser) ennå: kontroller et valgt utfall i [Simulering](topic:simulation) og juster.
- Tynne elementer som er en eller to kuber brede, er tilnærminger: bruk en mindre elementstørrelse for slanke deler.
- Metoden er SIMP med et tetthetsfilter, en terskelprojeksjon og optimalitetskriterie-oppdateringer; den rapporterte spenningen og nedbøyningen er for utfallet som kuber, noe som er ærlig, men grovt ved skarpe hjørner.

## Relatert

- [Kontroller spenning og nedbøyning (Simulering)](topic:simulation)
- [Eksport til utskrift, STEP og DXF](topic:export-files)
- [Hva som ikke er bygget ennå](topic:not-built-yet)
