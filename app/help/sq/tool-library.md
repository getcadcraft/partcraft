---
title: Biblioteka e veglave
summary: Ruani veglat që përdorni në shfletues, që çdo pjesë t'i ketë ato, dhe zhvendosni bibliotekat e veglave ndërmjet kompjuterave si skedar JSON.
keywords: bibliotekë veglash, vegla, eksporto, importo, JSON, ruaj veglat, numër T, frezë gishtash, vegla punëtorie
from: 8b9f2483
---

Skeda **Tools** e Manufacture liston veglat e pjesës. Nën **Tool library** mund t'i mbani veglat tuaja përtej një pjese:

- {{ui:Ruaj këtë vegël}} shton veglën e zgjedhur te **Veglat e mia të ruajtura**; {{ui:Ruaj të gjitha veglat e kësaj pjese}} shton të gjitha. Veglat e ruajtura mbeten në këtë shfletues dhe janë aty për çdo pjesë. Një vegël që keni ruajtur tashmë (e të njëjtës lloj, madhësi, brazda dhe mbivendosje) nuk ruhet dy herë.
- {{ui:Shtoje te kjo pjesë}} e fut veglën e ruajtur të zgjedhur në pjesë. Nëse numri i saj T është i zënë nga një vegël tjetër në pjesë, merr numrin e lirë të radhës dhe paneli e thotë. {{ui:Hiq nga biblioteka ime}} e heq nga lista e ruajtur (jo nga pjesët që e kanë tashmë).
- {{ui:Eksporto veglat…}} shkruan veglat e pjesës si skedar `.json`; {{ui:Importo veglat…}} shton veglat e një skedari të tillë në pjesë, me të njëjtat rregulla (një vegël që ekziston tashmë kalohet, një numër T i zënë zhvendoset). Skedari mban madhësitë, brazdat, materialet dhe mbivendosjet e ushqimit dhe shpejtësisë që keni shkruar; nuk ka id. Përdoreni për të zhvendosur veglat e një punëtorie në një kompjuter tjetër, ose për t'ua dhënë një kolegu.

Nëse shfletuesi nuk mund ta mbajë bibliotekën (ruajtja është e fikur ose e plotë), ruajtja e thotë këtë, dhe **Eksporto veglat** është mënyra për të mbajtur një skedar. Një skedar duhet të jetë një bibliotekë veglash PartCraft e këtij versioni ose më të vjetër, me të shumtën 500 vegla me madhësi të vlefshme; çdo gjë tjetër refuzohet, me arsyen.

Shpejtësitë e prerjes dhe ngarkesat e çipave që vijnë me një vegël janë vlera fillestare; shih [Bëni rrugë veglash dhe G-code](topic:manufacture).
