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

Debes tener instalado:

- `git`
- `uv`
- `just`

```
git clone https://github.com/scaliburco/scaliburco.github.io.git
cd scaliburco.github.io
uv sync
just serve ## O just build
```

Los archivos generados se disponen en el directorio `output` que debe usarse
como manejo para la rama `master` (pendiente mejorar para única rama).
