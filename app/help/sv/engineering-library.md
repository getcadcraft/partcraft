---
title: Ingenjörsbiblioteket
summary: Lärobokformler som läsbara skript, i SI-enheter, med varje resultat och dess källa: rör- och kanalflöde, värmeövergång och värmeväxlare, tryckdelar, gasdynamik, egenskaper för vatten och luft, material och enheter som kontrolleras. Vad varje är bra för och var den slutar.
keywords: ingenjör, bibliotek, enheter, Darcy-Weisbach, Colebrook, Reynolds, friktionsfaktor, Dittus-Boelter, Gnielinski, NTU, effektivitet, LMTD, fena, Barlow, Lamé, munstycke, isentropisk, Mach, strypt flöde, vatten, luft, egenskaper, material, källor
from: 786ef967
---

Ingenjörsbiblioteket är en uppsättning skript i Skriptarbetsytans bibliotek (`craftlib/eng`). Varje är en funktion du kan läsa uppifrån och ner, med ett huvud som anger dess **metod**, sina **enheter**, sina **begränsningar**, sina **referenser** och en **kontroll** med ett genomräknat tal. De använder SI-enheter genomgående och returnerar storheter som bär en **enhet** och en **källa**, så ett datablad kan skriva ut varifrån varje tal kommer.

## Enheter som kontrolleras

`to_si(10, 'bar', 'Pa')` konverterar ett värde och vägrar en enhet som mäter något annat (en längd där ett tryck förväntas). `from_si`, `unit_convert(1, 'bar', 'psi')` och `unit_kind('W/(m K)')` ("värmeledningsförmåga") fungerar på samma sätt. `temp_k(25, 'C')` och `temp_from_k` konverterar temperaturer, som har en förskjutning.

## Egenskaper

- `fluid('water', T)` och `fluid('air', T, p)`: densitet, viskositet, värmeledningsförmåga, specifik värmekapacitet, Prandtltal. Vatten 0 till 100 °C, luft 250 till 600 K; utanför det stannar den i stället för att extrapolera.
- `material('ss304')`: elasticitetsmodul, Poissons tal, densitet, sträckgräns, värmeledningsförmåga, specifik värmekapacitet, utvidgning: rumstemperaturvärden från samma datablad som Simulering. En verklig konstruktion använder leverantörens certifierade värden. Temperaturkurvor finns inte ännu.

## Flöde i rör och kanaler

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminärt, sedan Colebrook-ekvationen för turbulent flöde; området 2300 till 4000 har ingen pålitlig formel och säger det), `darcy_weisbach`, `minor_loss`, `pipe_flow` (runt rör, allt på en gång) och `rect_channel` (laminära rektangulära kanaler enligt Shah och London-anpassningen).

## Värmeövergång

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (väljer laminärt eller turbulent och anger korrelationen), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` och `ntu_for` (effektivitet-NTU-sambanden för motström, medström, mantel-och-rör, tvärström och en enda växlande ström) och `hx_size` (storleken UA som en effekt kräver; den säger hur mycket som är möjligt när effekten inte kan uppnås).

## Tryckdelar

`allowable_stress` (sträckgräns delat med en säkerhetsfaktor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, på omkretsspänningen eller skjuvkriteriet) och `wall_sphere`. Dessa är lärobokmarginaler, **inte en beräkning enligt en tryckkärlskod**: ingen korrosionsmån, fogverkningsgrad eller kodfaktorer.

## Gasdynamik

`isentropic` (förhållandena vid ett Machtal), `mach_from_area`, `choked_flow`, `throat_area` och `exit_mach`, för en ideal gas utan friktion, värme eller stötar.

## Kontrollera resultatet

`check_stress`, `check_thermal` och `check_flow` kör PartCraft:s egna spännings-, värmelednings- och flödeslösare på en genererad del från skriptet och läser tillbaka högsta spänning och förskjutning, temperaturerna och värmeflödet, och permeabiliteten hos ett kanalnätverk. De ändrar ingenting i lösarna. Spännings- och temperaturkontrollerna använder voxlar, så en krökt yta är en trappa, och spänningen vid ett skarpt innerhörn eller under en punktlast beror på voxelstorleken.
