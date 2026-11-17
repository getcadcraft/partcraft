---
title: Executa des d'una unitat USB
summary: On escriuen les eines d'enginyeria perquè CadCraft Studio funcioni des d'un llapis USB o de qualsevol carpeta sense instal·lador i sense drets d'administrador: configuració, generadors, memòries cau i fitxers de peces, i què queda al llapis.
keywords: usb, portàtil, sense instal·lador, administrador, admin, configuració, carpeta de dades, generadors, on s'escriuen els fitxers, fora de línia, privadesa, accés a l'amfitrió
from: 263efc79
---

Les eines d'enginyeria (generadors, la biblioteca d'enginyeria, les comprovacions i els fitxers de dades) **no necessiten drets d'administrador** ni **instal·lador**. Només escriuen el que es llista aquí, i res més.

| Què | On es guarda |
|---|---|
| Les vostres peces, amb els seus cossos generats, fulls de dades i comprovacions | El fitxer de peça que deseu (`.partcraft.json`), on el deseu. |
| Generadors que heu obert des de fitxers | A l'emmagatzematge propi de l'aplicació: l'emmagatzematge local del navegador en una pàgina web, i la carpeta `data` al costat del programa a la versió portàtil de Studio. Com a màxim 20. |
| Configuració (mides de vòxels que definiu, fils del resolutor, la disposició) | El mateix emmagatzematge de l'aplicació. |
| Fulls de dades, camps, malles | Només on els deseu: la baixada va on trieu. |

Les eines no fan **cap trucada de xarxa pròpia**: els generadors que s'envien són fitxers de la carpeta de l'aplicació, la biblioteca i les comprovacions s'executen al vostre ordinador en un procés en segon pla que no pot accedir a la xarxa, i les dades d'enginyeria (propietats de l'aigua i de l'aire, materials) són dins de l'aplicació. Un generador que obriu des d'un fitxer es llegeix al vostre ordinador i no va enlloc.

## La versió portàtil per a Windows i Linux

La versió portàtil de Studio per a Windows guarda la configuració, les memòries cau i els complements en una carpeta `data` al costat del programa. L'AppImage de Linux ho guarda al costat de si mateixa quan hi ha un fitxer anomenat `portable` al costat; sense aquest fitxer fa servir la vostra carpeta d'inici. No hi ha cap forma portàtil per a Mac: el sistema impedeix que una aplicació descarregada escrigui al costat de si mateixa. Les notes portàtils de l'entorn (ajuda de `Studio`) enumeren què escriu el programa.

## Accés a l'amfitrió

Aquí no es demana accés a l'amfitrió. Les impressores, les màquines en sèrie i els dispositius USB són a part: demanen accés quan una tasca els necessita, una vegada per dispositiu, i ni els generadors ni les comprovacions els toquen.
