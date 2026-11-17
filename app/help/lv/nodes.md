---
title: Mezgli: modeļa veidošana, savienojot
summary: Savienojiet skaitļus punktos, punktus līknēs, līknes virsmās. Mainot skaitli, viss pakārtotais tiek pārbūvēts. Katrs mezgls ir arī CraftScript rindiņa, un grafs tiek saglabāts failā.
keywords: mezgli, mezglu redaktors, vizuālā programmēšana, parametrisks, grafs, vadi, pieslēgvietas, brīvforma, freeform, nurbs, pārejas virsma, ekstrudēšana, rotācija, riņķis, līkne, virsma, virkne, diapazons, nejaušs, saraksts, skripts, craftscript, grasshopper
from: 3a4625de
---

Redaktors **Mezgli** veido ģeometriju, savienojot kastītes. Katra kastīte (mezgls) veic vienu mazu darbu: izveido skaitli, punktu, riņķi, pārejas virsmu. Jūs savienojat vienas rezultātu ar nākamā ievadi, un modelis seko, kad maināt skaitli sākumā.

Atveriet to no darbvietu saraksta: {{ui:Mezgli}}. Tiek atvērts redaktora logs. Detaļa, kurai jau ir grafs, to parāda, atverot darbvietu. Tas ir logs virs 3D skata: velciet tā virsrakstjoslu, lai to pārvietotu, un tā stūri, lai mainītu izmēru.

## Savienošana

1. Izvēlieties mezglu no saraksta kreisajā pusē (meklēšanas lodziņā rakstiet, lai sašaurinātu; <kbd>Enter</kbd> pievieno pirmo atbilstību). Tas parādās kanvas vidū.
2. Velciet no apaļā **izejas** punkta mezgla labajā pusē uz apaļo **ievades** punktu cita mezgla kreisajā pusē. Punkts kļūst zaļš, ja tas der, un sarkans, ja nederīgs; norādiet uz to, lai redzētu iemeslu.
3. Ievade bez savienojuma rāda lodziņu ievadītai vērtībai. Ierakstiet skaitli un nospiediet <kbd>Tab</kbd>: rezultāts tiek pārbūvēts.
4. Mazs aplītis mezgla virsrakstjoslā ir tā **acs**. Mezgls ar ieslēgtu aci tiek zīmēts 3D skatā: līknes kā līnijas, virsmas nokrāsotas, punkti kā punkti.

Velciet mezglu aiz tā virsrakstjoslas. Velciet fonu, lai pārvietotos, un griezieties ritenīti, lai tuvinātu. <kbd>Delete</kbd> dzēš izvēlēto mezglu. {{ui:Sakārtot}} izvieto mezglus kolonnās, {{ui:Pielāgot}} ieved tos visus skatā, {{ui:Atsaukt}} un {{ui:Atkārtot}} soli pa solim pārvieto pa jūsu izmaiņām.

## Tipi un vienības

Pieslēgvietām ir tips: skaitlis, jā/nē, punkts, vektors, līkne, virsma, tīkls, cietais ķermenis vai "ģeometrija" jebkuram no tiem. Punkts var padot vektora ievadi un otrādi. Skaitļiem ir vienība: **garums** ir milimetros, un **leņķis** ir grādos. Garumu nevar padot leņķim, un garums reizināts ar garumu (laukums) tiek noraidīts, tāpēc nepareizs vads tiek apturēts jau tad, kad to veidojat.

Kvadrātveida punkts ir **saraksts**. Kad saraksts nonāk vienvērtības ievadē, mezgls darbojas reizi katram vienumam, un tā rezultāts kļūst par sarakstu. Īsākais saraksts atkārto savu pēdējo vienumu. Piemēram, **Virkne** augstumiem, padota uz **Pārvietot**, veido kopiju kaudzi.

## Cietie ķermeņi un Būla operācijas kā mezgli

Grupa **Cietie ķermeņi** veido slēgtus ķermeņus no tām pašām precīzajām virsmām kā virsmu panelis: **Kastes ķermenis**, **Cilindra ķermenis** un **Lodes ķermenis** (izmēri mm), **Apvienot**, **Atņemt** un **Krustot** (otrais cietais ķermenis tiek ņemts no pirmā; pielaide ir tas, cik tālu cietā ķermeņa dzinēja trijstūri var atrasties no precīzajām virsmām), **Noapaļojums starp virsmām** (virsmas pēc to numura cietajā ķermenī, 1 pirmajai; rādiuss un, virs 0, rādiuss beigās), **Cietā ķermeņa tilpums** (mm³) un **Ciets līdz tīklam** (lai to redzētu vai ielietu).

Cietajam ķermenim ir savs pieslēgvietas tips: punktu vai skaitli nevar pievienot cietā ķermeņa ievadei, un punkts paliek sarkans. Būla un Noapaļojuma mezgli izmanto programmas pašu cieto ķermeņu dzinēju, kas tiek ielādēts pirmo reizi, kad redaktors tiek atvērts.

## Kļūdas

Mezgls, kas nevar veikt savu darbu, paskaidro iemeslu zem sava nosaukuma sarkanā krāsā ("Rādiusam jābūt lielākam par nulli."), un tam sekojošie mezgli gaida. Tas pats ziņojums ir problēma panelī Problēmas, tāpēc to var atrast no turienes.

## Katrs mezgls ir skripta rindiņa

Nospiediet {{ui:Skripts}}, lai redzētu grafu kā CraftScript: viena rindiņa katram mezglam, piemēram, `n3 = nd_circle(n2, n1, [0 0 1]);`. Rediģējiet tekstu un nospiediet {{ui:Izveidot grafu no šī skripta}}, lai to atgrieztu kā grafu. Tās pašas `nd_` funkcijas darbojas CraftScript skriptā PartCraft, tāpēc grafu var palaist, cikliski izpildīt vai pārbaudīt tur. Nejauši skaitļi vienmēr prasa **sēklu**, tāpēc viens un tas pats grafs dod vienu un to pašu rezultātu katrā datorā.

## Saglabāts ar failu

Grafs tiek saglabāts detaļas failā (nevis vēsturē, tāpēc redaktora Atsaukt darbojas atsevišķi). Mezgli veido līknes, virsmas un tīklus blakus cietajam ķermenim: tie nemaina detaļas elementus.
