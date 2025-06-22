# Blog ScaliburCo

Rama `src` de código fuente del sitio oficial de la Organización Scalibur para
la Investigación y la ciencia (O.S.I.).

Este blog es construido con el generador de sitios estáticos
[Nikola](https://getnikola.com/) con edición de las entradas en
[MarkDown](https://daringfireball.net/projects/markdown/) y
[ReStructuredText](https://docutils.readthedocs.io/en/sphinx-docs/user/rst/quickstart.html).
Tanto el código fuente como la versión generada para visualización son alojadas
en GitHub.

Para la versión generada consultar la rama `master`.

## Gestión

Debes tener instalado:

- `git`
- `uv`
- `just`

### Clonado

Obtenemos primero la rama de código fuente y sincronizamos paquetes para
generación del sitio estático.

```
git clone -b src https://github.com/scaliburco/scaliburco.github.io.git
cd scaliburco.github.io
uv sync
```

Ahora necesitamos recuperar la rama principal que dispone la página estática
visualizada

```
git clone https://github.com/scaliburco/scaliburco.github.io.git output
```

### Edición

Desde el directorio inicial de la rama `src` podemos hacer las modificaciones de
archivos. Ten presente que usamos el generador de
[Nikola](https://getnikola.com/), y los archivos son en formato _MarkDown_
(`md`) o _reStructuredText_ (`reST`). Una vez realizamos cambios, procedemos a
compilar o lanzar el servidor local, en ambos casos se generan los archivos
finales en el directorio `output`. Es preferible lanzar el servidor y validar
directamente los cambios.

```
just serve ## O just build
```

Una vez validados cambios, procedemos a guardar y subir cambios de ambos
directorios en sus respectivas ramas (`src` y `master`).
