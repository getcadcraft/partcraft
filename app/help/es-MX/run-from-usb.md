---
title: Ejecutar desde una memoria USB
summary: Qué escriben las herramientas de ingeniería y dónde, para que CadCraft Studio pueda ejecutarse desde una memoria USB o cualquier carpeta sin instalador y sin derechos de administrador: configuración, generadores, cachés y archivos de piezas, y lo que se queda en la memoria.
keywords: usb, portátil, sin instalador, administrador, admin, configuración, carpeta de datos, generadores, dónde se escriben los archivos, sin conexión, privacidad, acceso al host
from: 263efc79
---

Las herramientas de ingeniería (generadores, la biblioteca de ingeniería, las comprobaciones y los archivos de datos) no requieren **derechos de administrador** ni **instalador**. Solo escriben lo que aparece en esta lista, y nada más.

| Qué | Dónde se guarda |
|---|---|
| Sus piezas, con sus cuerpos generados, hojas de datos y comprobaciones | El archivo de pieza que guarde (`.partcraft.json`), en la ubicación donde lo guarde. |
| Generadores que abrió desde archivos | En el almacenamiento propio de la aplicación: el almacenamiento local del navegador en una página web, y la carpeta `data` junto al programa en el Studio portátil. Como máximo 20. |
| Configuración (tamaños de vóxel que defina, hilos del solucionador, la disposición) | En el mismo almacenamiento de la aplicación. |
| Hojas de datos, campos, mallas | Solo donde usted los guarde: la descarga va a la ubicación que elija. |

Las herramientas **no hacen llamadas de red propias**: los generadores incluidos son archivos en la carpeta de la propia aplicación, la biblioteca y las comprobaciones se ejecutan en su computadora, en un proceso en segundo plano que no puede acceder a la red, y los datos de ingeniería (propiedades del agua y del aire, materiales) están dentro de la aplicación. Un generador que abre desde un archivo se lee en su computadora y no sale de ella.

## El zip portátil de Windows y Linux

El Studio portátil para Windows guarda su configuración, cachés y complementos en una carpeta `data` junto al programa. El AppImage de Linux los guarda junto a sí mismo cuando hay un archivo llamado `portable` a su lado; sin ese archivo usa su carpeta personal. No existe una forma portátil para Mac: el sistema impide que una aplicación descargada escriba junto a sí misma. Las notas portátiles propias de la capa de la aplicación (ayuda de `Studio`) enumeran lo que escribe el programa.

## Acceso al host

Nada de esto solicita acceso al host. Las impresoras, las máquinas con puerto serie y los dispositivos USB son aparte: piden permiso cuando un trabajo los necesita, una vez por dispositivo, y nada de los generadores ni de las comprobaciones los toca.
