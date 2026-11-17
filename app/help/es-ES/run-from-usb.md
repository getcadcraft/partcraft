---
title: Ejecutar desde una unidad USB
summary: Qué escriben las herramientas de ingeniería y dónde, para que CadCraft Studio pueda ejecutarse desde una memoria USB o desde cualquier carpeta sin instalador y sin derechos de administrador: configuración, generadores, cachés y archivos de piezas, y qué queda en la memoria.
keywords: usb, portátil, sin instalador, administrador, admin, configuración, carpeta de datos, generadores, dónde se escriben los archivos, sin conexión, privacidad, acceso al equipo
from: 263efc79
---

Las herramientas de ingeniería (generadores, la biblioteca de ingeniería, las comprobaciones y los archivos de datos) **no necesitan derechos de administrador** ni **instalador**. Solo escriben lo que aparece en esta página, y nada más.

| Qué | Dónde se guarda |
|---|---|
| Sus piezas, con sus cuerpos generados, fichas de datos y comprobaciones | El archivo de pieza que guarda (`.partcraft.json`), en el lugar donde lo guarde. |
| Generadores que abrió desde archivos | En el almacenamiento propio de la aplicación: el almacenamiento local del navegador en una página web, y la carpeta `data` junto al programa en el Studio portátil. Como máximo 20. |
| Configuración (tamaños de vóxel que defina, hilos del solver, la disposición) | En el mismo almacenamiento de la aplicación. |
| Fichas de datos, campos, mallas | Solo donde los guarde: la descarga va al lugar que elija. |

Las herramientas **no hacen llamadas de red propias**: los generadores que se incluyen son archivos de la carpeta de la aplicación, la biblioteca y las comprobaciones se ejecutan en su equipo, en un proceso de trabajo que no puede acceder a la red, y los datos de ingeniería (propiedades del agua y del aire, materiales) están dentro de la aplicación. Un generador que abre desde un archivo se lee en su equipo y no sale de él.

## Windows portátil y Linux

El Studio portátil para Windows guarda su configuración, cachés y complementos en una carpeta `data` junto al programa. El AppImage de Linux los guarda junto a sí mismo cuando hay un archivo llamado `portable` a su lado; sin ese archivo usa su carpeta personal. No existe una forma portátil para Mac: el sistema impide que una aplicación descargada escriba junto a sí misma. Las notas de portabilidad propias del shell (ayuda de `Studio`) indican lo que escribe el programa.

## Acceso al equipo

Aquí no se pide acceso al equipo. Las impresoras, las máquinas en serie y los dispositivos USB son otra cosa: piden acceso cuando un trabajo los necesita, una vez por dispositivo, y ni los generadores ni las comprobaciones los tocan.
