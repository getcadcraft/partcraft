---
title: Ejecutar desde una memoria USB
summary: Qué escriben las herramientas de ingeniería y dónde, para que CadCraft Studio pueda ejecutarse desde un pendrive o cualquier carpeta sin instalador y sin derechos de administrador: configuración, generadores, cachés y archivos de piezas, y qué queda en el pendrive.
keywords: usb, portátil, sin instalador, administrador, admin, configuración, carpeta de datos, generadores, dónde se escriben los archivos, sin conexión, privacidad, acceso al equipo
from: 263efc79
---

Las herramientas de ingeniería (generadores, la biblioteca de ingeniería, las comprobaciones y los archivos de datos) **no necesitan derechos de administrador** ni **instalador**. Solo escriben lo que figura aquí, y nada más.

| Qué | Dónde se guarda |
|---|---|
| Sus piezas, con sus cuerpos generados, hojas de datos y comprobaciones | El archivo de pieza que guarde (`.partcraft.json`), donde lo guarde. |
| Generadores abiertos desde archivos | En el almacenamiento propio de la app: el almacenamiento local del navegador en una página web, y la carpeta `data` junto al programa en el Studio portátil. Como máximo 20. |
| Configuración (tamaños de vóxel que definió, hilos del solucionador, la disposición) | El mismo almacenamiento de la app. |
| Hojas de datos, campos, mallas | Solo donde se guarden: la descarga va a donde usted elija. |

Las herramientas no hacen **ninguna llamada de red propia**: los generadores incluidos son archivos en la carpeta propia de la app; la biblioteca y las comprobaciones se ejecutan en su computadora, en un proceso en segundo plano que no puede acceder a la red, y los datos de ingeniería (propiedades del agua y del aire, materiales) están dentro de la app. Un generador que se abre desde un archivo se lee en su computadora y no sale de ella.

## El zip portátil de Windows y Linux

El Studio portátil para Windows guarda su configuración, cachés y complementos en una carpeta `data` junto al programa. El AppImage de Linux los guarda junto a sí mismo cuando hay un archivo llamado `portable` al lado; sin ese archivo usa su carpeta personal. No existe una forma portátil para Mac: el sistema impide que una app descargada escriba junto a sí misma. Las notas de portabilidad propias del shell (ayuda de `Studio`) listan lo que escribe el programa.

## Acceso al equipo

Nada de esto pide acceso al equipo. Las impresoras, las máquinas con puerto serie y los dispositivos USB son aparte: piden permiso cuando un trabajo los necesita, una vez por dispositivo, y ni los generadores ni las comprobaciones los tocan.
