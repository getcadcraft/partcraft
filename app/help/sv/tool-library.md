---
title: Verktygsbiblioteket
summary: Spara de verktyg du använder i webbläsaren så att varje del kan ha dem, och flytta verktygsbibliotek mellan datorer som en JSON-fil.
keywords: verktygsbibliotek, verktyg, export, import, JSON, spara verktyg, T-nummer, fingerfräs, verkstadsverktyg
from: 8b9f2483
---

Fliken **Verktyg** under Tillverkning listar delens verktyg. Under **Verktygsbibliotek** kan du behålla egna verktyg utöver en del:

- {{ui:Spara det här verktyget}} lägger till det valda verktyget i **Mina sparade verktyg**; {{ui:Spara alla den här delens verktyg}} lägger till alla. Mina sparade verktyg sparas i den här webbläsaren och finns för varje del. Ett verktyg du redan sparat (samma sort, storlek, spår och åsidosättningar) sparas inte två gånger.
- {{ui:Lägg till i denna del}} tar in det valda sparade verktyget i delen. Om dess T-nummer redan används av ett annat verktyg i delen får det nästa lediga nummer, och panelen säger det. {{ui:Ta bort från mitt bibliotek}} tar bort det från listan över sparade (inte från delar som redan har det).
- {{ui:Exportera verktyg…}} skriver delens verktyg som en `.json`-fil; {{ui:Importera verktyg…}} lägger till verktygen i en sådan fil till delen, med samma regler (ett verktyg som redan finns hoppas över, ett upptaget T-nummer flyttas). Filen innehåller storlekar, spår, material och de matnings- och hastighetsåsidosättningar du skrev in; den har inga id. Använd den för att flytta en verkstads verktyg till en annan dator eller ge dem till en kollega.

Om webbläsaren inte kan behålla biblioteket (lagring är av eller full) säger spara det, och **Exportera verktyg** är sättet att behålla en fil. En fil måste vara ett PartCraft-verktygsbibliotek från den här versionen eller äldre, med högst 500 verktyg av giltiga storlekar; allt annat avvisas med orsaken.

Skärhastigheterna och spånbelastningarna som följer med ett verktyg är startvärden; se [Gör verktygsbanor och G-kod](topic:manufacture).
